---
title: 6. Laufzeitsicht
type: docs
weight: 6
---

Die Laufzeitsicht beschreibt konkretes Verhalten und Interaktionen der Baustein-Instanzen des Systems in Form von Szenarien. Wir konzentrieren uns auf eine repräsentative Auswahl wichtiger Abläufe, um zu verdeutlichen, wie die Bausteine zur Laufzeit zusammenarbeiten.

## 6.1 Szenario: Systemstart und Anzeige des Titelbildschirms

Dieses Szenario beschreibt den Ablauf, wenn die Anwendung gestartet wird, bis zur Anzeige des anfänglichen Titelbildschirms, bereit für die erste Benutzerinteraktion.

```mermaid
sequenceDiagram
    actor Benutzer as User
    participant Main as "Main<br>(App Entry)"

    User ->> Main: Anwendung starten
    activate Main
    Main ->> MainController: create MainController
    activate MainController
    MainController ->> Environment: create Environmentironment
    activate Environment
    deactivate Environment
    MainController ->> TimeController: create TimeController(this, Environment)
    activate TimeController
    deactivate TimeController
    MainController ->> ScreenController: create SreenController(JavaFX, this, Environment, TimeController)
    activate ScreenController
    ScreenController ->> MainScene: create MainScene(JavaFX)
    activate MainScene
    MainScene ->> JavaFX: konfigurieren/anzeigen
    deactivate MainScene
    ScreenController -> ScreenController: initializeLayers()
    activate ScreenController
    ScreenController ->> FileSystem: Grafiken/Schriften laden
    activate FileSystem
    deactivate FileSystem
    deactivate ScreenController
    MainController -> MainController: addChangeListener(TC)
    MainController -> MainController: addChangeListener(SC)


    opt Wenn auf Raspberry Pi
        MainController ->> MainController: getPlatform()
        activate Pi4J
        Pi4J --> MainController: "raspberrypi"
        deactivate Pi4J
        MainController ->> StepperMotorController: create StepMotorController(...)
        activate StepperMotorController
        deactivate StepperMotorController
        MainController ->> LEDController: create LEDController(...)
        activate LEDController
        deactivate LEDController
        MainController ->> NFCInputController: create NFCInputController(this, Pi4J, StepperMotorController)
        activate NFCInputController
        NFCInputController ->> FileSystem: readNfcChipList() (nfc.csv laden)
        activate FileSystem
        deactivate FileSystem
        NFCInputController ->> PCSC: PCSC System initialisieren
        activate PCSC
        deactivate PCSC
        NFCInputController ->> NFCInputController: initializeLeverButton()
        NFCInputController ->> Pi4J: GPIO Pin konfigurieren
        activate Pi4J
        deactivate Pi4J
        NFCInputController ->> NFCInputController: startLeverListener()
        deactivate NFCInputController
        MainController -> MainController: addChangeListener(StepperMotorController)
        MainController -> MainController: addChangeListener(NFCInputController)
        MainController -> MainController: addChangeListener(LEDController)
    end

    MainController -> MainController: notifyGameStateChanged(null, TITLE)
    activate MainController
    loop über wichtige Listener (TC, ScreenController, +opt StepperMotorController, LEDController, NFCInputController)
        MainController ->> TimeController: onGameStateChanged(null, TITLE)
        MainController ->> ScreenController: onGameStateChanged(null, TITLE)
        activate ScreenController
        ScreenController -> ScreenController: updateScreen(null, TITLE) %% Anzeige aktualisieren (Titel, Untertitel, Algen)
        deactivate ScreenController
        alt Wenn Hardware-Controller initialisiert
            MainController ->> StepperMotorController: onGameStateChanged(null, TITLE)
            activate StepperMotorController
            deactivate StepperMotorController
            MainController ->> LEDController: onGameStateChanged(null, TITLE)
            activate LEDController
            deactivate LEDController
            MainController ->> NFCInputController: onGameStateChanged(null, TITLE)
            activate NFCInputController
            NFCInputController ->> StepperMotorController: openTrapDoor() (nach Zustandwechsel)
            activate StepperMotorController
            deactivate StepperMotorController
            deactivate NFCInputController
        end
    end
    deactivate MainController

    Main ->> JavaFX: stage.show()
    deactivate Main
```

**Beschreibung:**

Der Ablauf beginnt mit dem Starten der Java-Anwendung. Die `Main`-Klasse konfiguriert JavaFX und das Logging und instanziiert den zentralen `MainController`. Der `MainController` erstellt die Kernkomponenten: das `Environment`-Modell, die Input-Controller (`TimeController`, `KeyboardInputController`, `NFCInputController` - letzterer nur auf Raspberry Pi) und die Output-Controller (`ScreenController`, `StepMotorController`, `LedController` - die Hardware-Controller nur auf Raspberry Pi).

Der `MainController` registriert alle Controller als Listener für GameState-Änderungen bei sich selbst. Der `ScreenController` initialisiert die `MainScene` und lädt alle benötigten visuellen Layer-Objekte aus den Ressourcen.

Schließlich setzt der `MainController` den initialen `GameState` auf `TITLE` und benachrichtigt alle registrierten Listener. Der `ScreenController` reagiert, indem er die für den Titelbildschirm relevanten Layer (Titel-Text, Untertitel-Text, Algen-Layer) sichtbar macht und die Debug-Informationen aktualisiert. Auf dem Raspberry Pi öffnet der `NFCInputController` die Fallen-Klappe, und die Hardware-Controller (`SMC`, `LEDC`) können ebenfalls auf den `TITLE`-Zustand reagieren (z.B. Motoren in Grundposition fahren, LEDs in Startzustand).

Der Titelbildschirm wird auf der JavaFX-Stage angezeigt.

**Architektonische Aspekte:**

  * **Initialisierung und Verdrahtung:** Das Szenario zeigt die Reihenfolge der Instanziierung und wie der `MainController` die anderen Bausteine miteinander verbindet (Listener-Muster, Abhängigkeiten über Konstruktoren).
  * **Abhängigkeit von externen Systemen:** Die bedingte Initialisierung der Hardware-Controller basierend auf der `getPlatform()`-Prüfung und deren sofortige Verbindung zu Pi4J und PCSC wird deutlich.
  * **Zustandsgetriebene Anzeige:** Der Übergang zum `TITLE`-Zustand demonstriert, wie der `ScreenController` rein auf Basis des aktuellen Zustands seine Darstellung anpasst.
  * **Ressourcen-Laden:** Das Laden visueller Assets durch den `ScreenController` wird angedeutet.


## 6.2 Szenario: Benutzer wirft Axolotl-Tag ein (Spielstart)

Dieses Szenario beschreibt den Ablauf, wenn ein Benutzer das Axolotl-Objekt einwirft und den Hebel betätigt, um das Spiel zu starten.

```mermaid
sequenceDiagram
    actor Benutzer as Benutzer

    Benutzer ->> PhysischerHebel: Hebel betätigen
    activate Benutzer
    Benutzer ->> NFCTagAxolotl: Objekt (Tag) auf Reader legen
    deactivate Benutzer

    PhysischerHebel ->> NFCInputController: Signal erkannt (via Pi4J Polling)
    activate NFCInputController

    NFCInputController ->> NFCInputController: Hebel entprellen und Status setzen

    NFCInputController ->> AsynchronerNFCTask: Starte asynchrone Leseaufgabe
    Note right of NFCInputController: Aufgabe an ExecutorService übermittelt
    activate AsynchronerNFCTask

    AsynchronerNFCTask ->> NFCInputController: Rufe Methode zur Tag-Daten abfrage auf
    activate NFCInputController
    NFCInputController ->> PCSCSystem: Sende Befehl an NFC Reader (via javax.smartcardio)
    activate PCSCSystem
    PCSCSystem --> NFCInputController: Empfange Tag Daten (z.B. ID 1)
    deactivate PCSCSystem
    NFCInputController ->> NFCInputController: Konvertiere Tag Daten zu Integer ID
    NFCInputController ->> NFCInputController: Mapping von ID zu GameState suchen (ID 1 -> AXOLOTL_INTRODUCTION)
    deactivate NFCInputController

    alt Bei erfolgreichem NFC-Lesen und Mapping
        AsynchronerNFCTask ->> NFCInputController: Übermittle Ergebnis (GameState.AXOLOTL_INTRODUCTION)

        NFCInputController ->> NFCInputController: Verarbeite Ergebnis im UI Thread (Platform.runLater)
        NFCInputController ->> MainController: emitGameStateChange(AXOLOTL_INTRODUCTION)
        activate MainController
        MainController ->> MainController: Aktualisiere Spielzustand auf AXOLOTL_INTRODUCTION
        MainController ->> MainController: Benachrichtige Listener über Zustandsänderung (von TITLE zu AXOLOTL_INTRODUCTION)
        deactivate MainController

        loop über wichtige Listener (Screen Controller, NFC Input Controller, ...)
            MainController ->> ScreenController: onGameStateChanged(TITLE, AXOLOTL_INTRODUCTION)
            activate ScreenController
            ScreenController ->> ScreenController: updateScreen(TITLE, AXOLOTL_INTRODUCTION)
            activate ScreenController
            ScreenController ->> ScreenController: Nicht benötigte UI Layer aufräumen
            ScreenController ->> TextLayerAxolotlIntro: showLayer()
            activate TextLayerAxolotlIntro
            deactivate TextLayerAxolotlIntro
            ScreenController ->> AxolotlLayer: showLayer()
            activate AxolotlLayer
            AxolotlLayer ->> AxolotlLayer: Starte Intro Animation
            deactivate AxolotlLayer
            ScreenController ->> AxolotlLayer: setExpression(HAPPY)
            deactivate ScreenController
            deactivate ScreenController

            MainController ->> NFCInputController: onGameStateChanged(TITLE, AXOLOTL_INTRODUCTION)
            activate NFCInputController
            NFCInputController ->> SchrittmotorControllerKlappe: openTrapDoor()
            activate SchrittmotorControllerKlappe
            SchrittmotorControllerKlappe --> SchrittmotorControllerKlappe: Motor drehen (Klappe auf und zu)
            deactivate SchrittmotorControllerKlappe
            NFCInputController ->> NFCInputController: Setze Hebelstatus zurück
            deactivate NFCInputController

        end

    else Bei Lesefehler oder unbekanntem Tag
        AsynchronerNFCTask ->> NFCInputController: Übermittle Fehler / Ungültige ID (-1)
        
        NFCInputController ->> NFCInputController: Fehler loggen / (optional) emit NOT_OBJECT GameState
    end
```

**Beschreibung:**

Der Benutzer initiiert das Szenario, indem er das Axolotl-Objekt auf den Reader legt und den Hebel betätigt. Der `NFCInputController` erkennt die Hebelbetätigung über seinen Pi4J DigitalInput. Er löst dann asynchron das Auslesen des NFC-Tags über das PCSC-System aus. Der asynchrone Task ruft `getDataOfChip()` und `getIntFromChip()` auf, um die Tag-ID zu erhalten.

Bei einer gültigen, im `nfcChipCodeHashmap` gefundenen ID (z.B. 1 für Axolotl) ordnet der `NFCInputController` die ID dem `GameState.AXOLOTL_INTRODUCTION` zu. Er verwendet `Platform.runLater`, um sicherzustellen, dass die Zustandsänderung im JavaFX Application Thread emittiert wird.

Der `MainController` empfängt die `emitGameStateChange`-Anforderung, aktualisiert seinen internen Zustand auf `AXOLOTL_INTRODUCTION` und benachrichtigt alle registrierten Listener über `notifyGameStateChanged()`.

Der `ScreenController` reagiert, indem er den Titel- und Untertiteltext ausblendet, den Axolotl-Einführungstext und den Axolotl-Layer einblendet und die Intro-Animation des Axolotls startet. Der `NFCInputController` reagiert ebenfalls auf seinen eigenen GameState-Wechsel, indem er den `openTrapDoor()`-Aufruf am `StepMotorController` triggert und seinen internen Hebelstatus zurücksetzt. Die Klappe öffnet sich kurz und schliesst sich wieder. Andere Controller reagieren ebenfalls auf den Zustand, z.B. der `TimeController` tut dies nicht, bis der Zustand `GAMEPLAY` erreicht ist.

**Architektonische Aspekte:**

  * **Event-gesteuerter Fluss:** Das Szenario demonstriert das zentrale Event-Muster (`emitGameStateChange`, `onGameStateChanged`), das den Systemfluss steuert. Eine physische Eingabe wird in ein System-Event umgewandelt.
  * **Hardware-Integration:** Die Einbindung von Pi4J (Hebel) und PCSC (NFC) sowie die Notwendigkeit asynchroner Verarbeitung (`ExecutorService`) für blockierende Hardware-Aufrufe wird deutlich.
  * **Cross-Controller Interaktion:** Der `NFCInputController` triggert direkt eine Aktion in einem anderen Controller (`StepMotorController`), was eine spezifische Abhängigkeit zwischen diesen Bausteinen zeigt.
  * **Zustandsabhängige Ausgabe:** Der `ScreenController` passt die Darstellung der View-Schicht dynamisch an den neuen `GameState` an.

## 6.3 Szenario: Benutzer wirft Objekt-Tag ein (Gameplay-Interaktion)

Dieses Szenario zeigt den typischen Spielfluss, wenn der Benutzer während des Gameplays ein Objekt mit einem Umwelt-relevanten Tag einwirft.

```mermaid
sequenceDiagram
    actor User as Benutzer
    User->>Lever: Hebel betätigen
    activate User
    User->>NFCTag: Objekt (Tag) auf Reader legen
    deactivate User

    Lever->>NFCInputController: Signal (via Pi4J Polling)
    activate NFCInputController
    NFCInputController->>NFCInputController: Hebel entprellen<br/>Status setzen
    NFCInputController->>NFCInputController: Async NFC-Leseaufgabe starten
    Note right of NFCInputController: ExecutorService submit → readAndEmitNfc()

    NFCInputController->>+AsyncTask: create

    AsyncTask->>+NFCInputController: getIntFromChip()
    NFCInputController->>+PCSC: Daten von Tag lesen
    PCSC-->>-NFCInputController: Tag Daten (z.B. ID 9)
    NFCInputController->>NFCInputController: Map nach GameState lookup<br/>(ID 9 → OBJECT_BICYCLE)
    deactivate NFCInputController

    alt Erfolgreiches NFC-Lesen & Mapping
        AsyncTask->>NFCInputController: Ergebnis (OBJECT_BICYCLE)
        NFCInputController->>NFCInputController: runOnFxThread(emitGameStateChange)
        NFCInputController->>MainController: emitGameStateChange(OBJECT_BICYCLE)
        deactivate AsyncTask
        activate MainController
        MainController->>MainController: updateState(OBJECT_BICYCLE)
        MainController->>MainController: notifyGameStateChanged(GAMEPLAY, OBJECT_BICYCLE)
        deactivate MainController

        loop über Listener
            MainController->>Environment: onGameStateChanged(GAMEPLAY, OBJECT_BICYCLE)
            activate Environment
            Environment->>Environment: updateEnvironment(OBJECT_BICYCLE)

            MainController->>ScreenController: onGameStateChanged(GAMEPLAY, OBJECT_BICYCLE)
            activate ScreenController
            ScreenController->>ScreenController: updateScreen(GAMEPLAY, OBJECT_BICYCLE)
            ScreenController->>ObjectLayer: showLayer()
            activate ObjectLayer
            ObjectLayer->>ObjectLayer: Animation starten
            deactivate ObjectLayer
            ScreenController->>ObjectLayer: setOnAnimationComplete(...)
            ScreenController->>AlgaeLayer: showAxolotlExpression(...)
            ScreenController->>ScreenController: updateDebugText()
            deactivate ScreenController

            MainController->>LEDController: onGameStateChanged(GAMEPLAY, OBJECT_BICYCLE)
            activate LEDController
            LEDController->>Environment: getAlgaeLevel()
            deactivate Environment
            LEDController->>LEDController: LEDs aktualisieren
            deactivate LEDController

            MainController->>StepperMotorDisplay: onGameStateChanged(GAMEPLAY, OBJECT_BICYCLE)
            activate StepperMotorDisplay
            StepperMotorDisplay->>Environment: getAlgaeLevel()
            StepperMotorDisplay->>StepperMotorDisplay: Motoren aktualisieren
            deactivate StepperMotorDisplay

            MainController->>NFCInputController: onGameStateChanged(GAMEPLAY, OBJECT_BICYCLE)
            activate NFCInputController
            NFCInputController->>StepperMotorTrapDoor: openTrapDoor()
            activate StepperMotorTrapDoor
            StepperMotorTrapDoor-->>StepperMotorTrapDoor: Motor drehen (Klappe)
            deactivate StepperMotorTrapDoor
            NFCInputController->>NFCInputController: Hebelstatus zurücksetzen
            deactivate NFCInputController
        end

        ObjectLayer-->>ScreenController: Callback (Animation beendet)
        ScreenController->>MainController: emitGameStateChange(GAMEPLAY)
        MainController->>MainController: updateState(GAMEPLAY)
        MainController->>MainController: notifyGameStateChanged(OBJECT_BICYCLE, GAMEPLAY)

        loop Listener (zurück zu GAMEPLAY)
            MainController->>ScreenController: onGameStateChanged(OBJECT_BICYCLE, GAMEPLAY)
            ScreenController->>ScreenController: updateScreenControllerreen(...)
            ScreenController->>ObjectLayer: hideLayer()
            ScreenController->>AlgaeLayer: showLayer()
            ScreenController->>ScreenController: updateDebugText()
        end

    else NFC-Lesefehler / ungültiger Tag
        AsyncTask->>NFCInputController: Fehler / Ungültige ID
        NFCInputController->>NFCInputController: Fehler loggen / emit NOT_OBJECT
    end
```

**Beschreibung:**

Ähnlich wie beim Spielstart betätigt der Benutzer den Hebel, was den `NFCInputController` veranlasst, einen NFC-Tag auszulesen. Wenn der Tag einer bekannten Objekt-ID entspricht (z.B. `OBJECT_BICYCLE`), emittiert der `NFCInputController` den entsprechenden `GameState`.

Der `MainController` verarbeitet die Zustandsänderung vom `GAMEPLAY`-Zustand zum Objekt-Zustand (`OBJECT_BICYCLE`). Diese Änderung triggert die `onGameStateChanged()`-Methode in mehreren Controllern:

  * Der `Environment`-Controller aktualisiert das interne Algen-Level basierend auf den Eigenschaften des eingeworfenen Objekts.
  * Der `ScreenController` erkennt den Objekt-Zustand und:
      * Blendet den spezifischen Objekt-Layer (z.B. `ItemLayer` oder `ActionLayer`) ein und startet dessen Animation (z.B. ein Objekt fällt herunter).
      * Registriert einen Callback, der aufgerufen wird, wenn die Animation endet.
      * Aktualisiert die Sichtbarkeit der Algen-Layer und den Ausdruck des Axolotls basierend auf dem neuen Algen-Level aus dem `Environment`.
      * Aktualisiert Debug-Anzeigen.
  * Der `LedController` liest das neue Algen-Level aus dem `Environment` und passt die Anzeige der LEDs an.
  * Der `StepMotorController` für die Anzeigen liest ebenfalls das neue Algen-Level und bewegt die O2/CO2-Anzeigen.
  * Der `NFCInputController` öffnet erneut die Fallen-Klappe über den `StepMotorController` und setzt seinen Hebelstatus zurück.

Sobald die Animation des Objekt-Layers abgeschlossen ist, ruft der `ScreenController` seinen registrierten Callback auf, der wiederum eine Zustandsänderung zurück zum `GAMEPLAY`-Zustand emittiert. Dies bringt das System in den Hauptspielzustand zurück und der `ScreenController` passt die Anzeige entsprechend an (blendet den Objekt-Layer aus, zeigt wieder die Gameplay-Elemente).

**Architektonische Aspekte:**

  * **Klassisches Input-Verarbeitungs-Muster:** Eingabe löst Zustandsänderung aus, die mehrere Ausgabekanäle synchronisiert aktualisiert.
  * **Zentrale Zustandsverteilung:** Der `MainController` dient als zentraler Verteiler für `GameState`-Änderungen an alle interessierten Listener.
  * **Modell-Aktualisierung:** Das `Environment`-Modell wird als Teil der Zustandsverarbeitung aktualisiert und dient als Datenquelle für Output-Controller.
  * **Ausgabe-Synchronisierung:** Mehrere Output-Controller (Screen, LEDs, Motoren) reagieren parallel auf denselben `GameState`, um eine kohärente Ausgabe zu gewährleisten.
  * **Asynchrone Animation und Callback:** Der `ScreenController` zeigt, wie eine asynchrone visuelle Animation den Ablauf steuern kann, indem sie einen Callback triggert, der weitere Systemaktionen auslöst (Rückkehr zum `GAMEPLAY`-Zustand).

## 6.4 Szenario: Spielzeit endet

Dieses Szenario beschreibt den Ablauf, wenn der Spiel-Timer abläuft und das System in einen Endbildschirm-Zustand übergeht.

```mermaid
sequenceDiagram
    participant TimeController
    participant MainController
    participant Environment
    participant ScreenController
    participant AxolotlLayer
    participant TextLayer (Endscreen)
    participant StateMachineControllerDisplay
    participant LEDController
    participant Endscreen Timer

    TimeController ->> TimeController: Timer läuft ab (0 Sekunden)
    activate TimeController
    TimeController ->> Environment: getAlgaeLevel()
    activate Environment
    Environment -->> TimeController: Aktuelles Algen-Level (z.B. 70)
    deactivate Environment

    alt Wenn Algen-Level > Schwelle (z.B. >50)
        TimeController ->> TimeController: Endzustand = ENDSCREEN_POSITIVE bestimmen
    else Wenn Algen-Level <= Schwelle
        TimeController ->> TimeController: Endzustand = ENDSCREEN_NEGATIVE bestimmen
    end

    TimeController ->> TimeController: Timer anhalten und zurücksetzen
    TimeController ->> MainController: emitGameStateChange(ENDBILDSCHIRM_ZUSTAND)
    deactivate TimeController
    activate MainController

    MainController ->> MainController: updateState(ENDBILDSCHIRM_ZUSTAND)
    MainController ->> MainController: notifyGameStateChanged(GAMEPLAY, ENDBILDSCHIRM_ZUSTAND)
    deactivate MainController

    loop über Listener (Env, TC, KIC, SC, SMC Displays, LEDC, NFCIC)
        MainController ->> ScreenController: onGameStateChanged(GAMEPLAY, ENDBILDSCHIRM_ZUSTAND)
        activate ScreenController
        ScreenController ->> ScreenController: updateScreen(GAMEPLAY, ENDBILDSCHIRM_ZUSTAND)
        activate ScreenController
        ScreenController ->> ScreenController: cleanupLayers()
        ScreenController ->> TextLayer (Endscreen): showLayer() ' Zeige positiven oder negativen Endtext
        activate TextLayer (Endscreen)
        deactivate TextLayer (Endscreen)
        ScreenController ->> AxolotlLayer: showLayer() ' Axolotl zeigen
        activate AxolotlLayer
        deactivate AxolotlLayer
        ScreenController ->> AxolotlLayer: setExpression(PASSENDER_AUSDRUCK) ' Ausdruck passend zum Endzustand
        ScreenController ->> ScreenController: updateDebugText()
        ScreenController ->> ScreenController: onTimerComplete(NÄCHSTER_ZUSTAND) ' Timer für Übergang zum GOODBYE/TITLE starten
        activate ScreenController
        ScreenController ->> Endscreen Timer: create (Duration.seconds(5))
        activate Endscreen Timer
        Endscreen Timer -->> Endscreen Timer: Timer läuft ab
        deactivate Endscreen Timer
        Endscreen Timer ->> ScreenController: Timer Callback
        deactivate ScreenController
        ScreenController ->> MainController: emitGameStateChange(NÄCHSTER_ZUSTAND) ' z.B. GOODBYE oder TITLE
        deactivate ScreenController
        deactivate ScreenController

        MainController ->> TimeController: onGameStateChanged(GAMEPLAY, ENDBILDSCHIRM_ZUSTAND)
        activate TimeController
        TimeController ->> TimeController: Timer wurde schon zurückgesetzt
        deactivate TimeController

        MainController ->> Environment: onGameStateChanged(...) ' Env könnte zurückgesetzt werden im Endscreen
        activate Environment
        Environment ->> Environment: reset() ' z.B. im ENDSCREEN_POSITIVE
        deactivate Environment

        MainController ->> StateMachineControllerDisplay: onGameStateChanged(GAMEPLAY, ENDBILDSCHIRM_ZUSTAND)
        activate StateMachineControllerDisplay
        StateMachineControllerDisplay ->> Environment: getAlgaeLevel() ' Liest Level für Endposition oder Reset
        activate Environment
        deactivate Environment
        StateMachineControllerDisplay ->> StateMachineControllerDisplay: Motoren bewegen
        deactivate StateMachineControllerDisplay

        MainController ->> LEDController: onGameStateChanged(GAMEPLAY, ENDBILDSCHIRM_ZUSTAND)
        activate LEDController
        LEDController ->> Environment: getAlgaeLevel() ' Liest Level für Endposition oder Reset
        activate Environment
        deactivate Environment
        LEDController ->> LEDController: LEDs aktualisieren
        deactivate LEDController
    end
```

**Beschreibung:**

Dieses Szenario beginnt, während das Spiel im `GAMEPLAY`-Zustand läuft und der interne Timer des `TimeController`s abläuft. Der `TimeController` prüft in diesem Moment das aktuelle Algen-Level im `Environment`. Basierend auf diesem Level bestimmt er, ob das Ergebnis positiv oder negativ ist und wählt den entsprechenden Endbildschirm-`GameState` (`ENDSCREEN_POSITIVE` oder `ENDSCREEN_NEGATIVE`).

Der `TimeController` stoppt und setzt seinen Timer zurück und emittiert dann den gewählten Endbildschirm-Zustand an den `MainController`.

Der `MainController` aktualisiert den `GameState` und benachrichtigt alle Listener. Der `ScreenController` reagiert prominent: Er blendet die Gameplay-Elemente aus und zeigt den passenden Endtext und den Axolotl mit dem entsprechenden Ausdruck an. Der `ScreenController` startet zudem einen internen Timer, der nach einigen Sekunden einen weiteren `GameState` emittiert (z.B. `GOODBYE`), um den Übergang zum nächsten Bildschirm einzuleiten.

Andere Controller reagieren ebenfalls auf den Endbildschirm-Zustand. Das `Environment` kann seinen Zustand zurücksetzen. Die Hardware-Controller (`SMCDisp`, `LEDC`) könnten ihre Anzeigen anpassen, um das Endergebnis darzustellen oder in eine neutrale Position zurückzukehren.

Wenn der Timer des `ScreenController`s abläuft, wird der nächste Zustand (z.B. `GOODBYE`) emittiert, was einen weiteren Zustandswechsel über den `MainController` und Reaktionen bei den Listenern auslöst (z.B. Anzeige des Danke-Textes).

**Architektonische Aspekte:**

  * **Zeit-gesteuerter Trigger:** Dieses Szenario zeigt, wie ein interner Timer-Event (im Gegensatz zu physischem Input) einen Systemablauf starten kann.
  * **Abhängigkeit vom Modellzustand:** Der Ablauf des Timers hängt vom Zustand des `Environment`-Modells ab, um das Ergebnis zu bestimmen.
  * **Gekettete Zustandswechsel:** Das Szenario demonstriert eine Abfolge von Zustandswechseln (`GAMEPLAY` -\> `ENDSCREEN_...` -\> `GOODBYE` -\> `TITLE`), die jeweils Reaktionen im System auslösen.
  * **Zeitliche Steuerung der Ausgabe:** Der `ScreenController` nutzt einen zusätzlichen Timer, um den Endbildschirm für eine festgelegte Dauer anzuzeigen, bevor er zum nächsten Zustand wechselt, was eine zeitliche Steuerung des Ablaufs auf der UI-Ebene darstellt.