---
title: 8. Querschnittliche Konzepte
type: docs
weight: 8
---

Dieses Kapitel beschreibt die Konzepte, die für die gesamte Softwarearchitektur von Relevanz sind und mehrere Bausteine betreffen.

## 8.1 Logging und Monitoring

Für das Logging und ein grundlegendes Monitoring wird eine dedizierte Logdatei namens `app.log` verwendet. Diese Datei wird automatisch von der Applikation im Programmverzeichnis erstellt.

* **Zweck:** Die `app.log` Datei dient dazu, den Systemzustand zu protokollieren sowie auftretende Fehler und Ausnahmen festzuhalten.
* **Nutzung:** Die Inhalte der `app.log` ermöglichen es dem Betreiber (Primero Energie), Probleme oder Fehler, die während des Betriebs der Applikation auftreten, zu identifizieren und gegebenenfalls entsprechende Massnahmen zur Behebung einzuleiten.

## 8.2 Fehlerbehandlung und Exception Management

Das System stützt sich auf die standardmässigen Fehlerbehandlungsmechanismen von Java.

* **Schwerwiegende Fehler:** Kritische Fehler, die zur Beendigung der Applikation führen, werden als Java Errors erkannt.
* **Analyse:** Im Falle eines Absturzes oder unerwarteten Verhaltens kann die `app.log` Datei analysiert werden, um die Ursache des Problems basierend auf den dort protokollierten Systemlogs und Exception-Informationen zu ermitteln. Zentrale, anwendungsspezifische Fehlerbehandlungsmechanismen über die Java-Standardmechanismen hinaus sind nicht implementiert.

## 8.3 Konfigurationsmanagement

Einstellungen und Konfigurationen des Systems werden über CSV-Dateien verwaltet.

* **Speicherformat:** Konfigurationen wie Spracheinstellungen (`settings.csv`) und NFC-Mappings (`nfc.csv`) werden in separaten CSV-Dateien gespeichert.
* **Bearbeitung:** Es wird empfohlen, diese CSV-Dateien mit Tabellenkalkulationsprogrammen wie Microsoft Excel oder LibreOffice Calc zu bearbeiten und anschliessend wieder im CSV-Format zu exportieren, um die korrekte Struktur und Kodierung sicherzustellen.
* **Laden:** Das System liest diese Konfigurationsdateien beim Start der Applikation ein.

## 8.4 Internationalisierung (i18n) / Lokalisierung (l10n)

Die Unterstützung verschiedener Sprachen ist durch die Verwendung von CSV-Dateien für Textinhalte realisiert.

* **Sprachinhalte:** Alle sprachspezifischen Texte (z.B. für Benutzeroberflächen-Elemente, Anleitungen, Feedback) werden in einer zentralen CSV-Datei (`text_layers.csv`) verwaltet, wobei jede unterstützte Sprache eine eigene Spalte in der Datei darstellt.
* **Sprachauswahl:** Die gewünschte Systemsprache wird in der `settings.csv` Datei konfiguriert.
* **Aktivierung:** Eine Änderung der Spracheinstellung wird erst nach einem Neustart der Applikation wirksam, da die Sprachinhalte beim Start geladen werden.

## 8.5 Input Handling

Die Verarbeitung von Eingaben von verschiedenen Hardware-Geräten erfolgt zentral und löst Zustandsänderungen im System aus.

* **Eingabegeräte:** Eingaben können von der Tastatur, dem NFC Reader (über NFC-Chips) und dem physischen Hebel stammen.
* **Verarbeitung:** Spezifische Controller sind für die Erfassung der Eingaben von den jeweiligen Geräten zuständig.
* **Game State Emission:** Diese Input-Controller interpretieren die Eingaben und *emitieren* (veröffentlichen) entsprechende Game States, die den gewünschten Systemzustand oder eine auszuführende Aktion repräsentieren. Die Details zur Funktionsweise dieser Controller und der Game States sind in Kapitel 5 (Implementierungssicht) näher erläutert.

## 8.6 Output Handling

Die Steuerung der Ausgaben auf den verschiedenen Hardware-Komponenten wird durch Output-Controller im Rahmen des Model-View-Controller (MVC)-Musters übernommen.

* **Output-Controller:** Dedizierte Controller sind für die Ansteuerung spezifischer Ausgabegeräte zuständig (z.B. Bildschirm, LEDs, Schrittmotoren).
* **Steuerung:** Diese Controller empfangen Anweisungen basierend auf dem aktuellen Game State oder der Spiellogik und übersetzen diese in entsprechende Signale oder Aktionen für die Hardware.
* **Details:** Die Implementierung und Interaktion dieser Output-Controller mit den anderen Teilen des Systems ist in Kapitel 5 (Implementierungssicht) genauer beschrieben.

## 8.7 Zustandsmanagement

Der aktuelle Zustand des Spiels oder der Applikation wird zentral verwaltet und dient als Grundlage für das Verhalten der verschiedenen Komponenten.

* **GameStateManager:** Ein zentraler `GameStateManager` ist für die Verwaltung des aktuellen Systemzustands zuständig.
* **GameStates:** Der Zustand wird durch eine Menge definierter `GameStates` repräsentiert, die verschiedene Phasen oder Zustände der Applikation abbilden (z.B. TITLE, GAMEPLAY, ENDSCREEN).
* **Synchronisation:** Der `GameStateManager` benachrichtigt andere relevante Komponenten (z.B. Input- und Output-Controller) über Änderungen des Game States. Dies ermöglicht die Synchronisation des Systemverhaltens basierend auf dem aktuellen Zustand und die Abwicklung der Spiellogik.

## 8.8 Weitere relevante Konzepte

### Animationen

Die Applikation nutzt Animationen, um visuelles Feedback und dynamische Inhalte auf dem Bildschirm darzustellen.

* **Speicherort:** Die Animationsressourcen, typischerweise Bildsequenzen (Frames), sind im `Resource`-Folder der Java-Applikation abgelegt.
* **Naming-Schema:** Die Frames innerhalb einer Animationssequenz folgen einem bestimmten Naming-Schema, das es der Applikation ermöglicht, die Frames in der korrekten Reihenfolge zu laden und abzuspielen.
* **Laden und Animation:** Die Applikation lädt die entsprechenden Image-Sequenzen zur Laufzeit basierend auf dem aktuellen Game State oder spezifischen Aktionen und spielt sie als Animation ab. Dies umfasst sowohl einfache Frame-Sequenzen als auch potenziell komplexere Animationen mit Überblendungen oder Transformationen, wie in den View-Komponenten (Kapitel 5) implementiert.