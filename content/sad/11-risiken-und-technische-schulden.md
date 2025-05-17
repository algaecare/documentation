---
title: 11. Risiken und technische Schulden
weight: 11
type: docs
---

Dieses Kapitel beschreibt die aktuell identifizierten Risiken und technischen Schulden im Kontext der umgesetzten Architektur des Algae Care Systems. Die Basis für die Betrachtung bilden unter anderem die ursprünglichen Anforderungen und Rahmenbedingungen des Projekts, wie sie in der initialen Aufgabenstellung formuliert wurden.

## 11.1 Technische Schulden

Technische Schulden repräsentieren Design- oder Implementierungsentscheidungen, die kurzfristige Vorteile brachten, aber langfristig Mehraufwand oder Risiken bedeuten können.

* **TS-1: Hybrid-Ansatz bei Animationen:**
    * **Beschreibung:** Aufgrund von Performance-Limitierungen auf dem Raspberry Pi wurde ein hybrider Ansatz für Animationen gewählt, der sowohl Bildsequenzen als auch native JavaFX-Animationen nutzt.
    * **Auswirkungen:** Dies führt zu zwei unterschiedlichen Implementierungsansätzen für visuelle Animationen, was die Entwicklung und Wartung komplexer machen kann, da Logik und Ressourcenhandling je nach Animationstyp variieren. Es besteht das Risiko von Inkonsistenzen im Animationsverhalten.
    * **Bezug zu Anforderungen/Entscheidungen:** Direkte Folge der Architekturentscheidung zur Handhabung von Animationen (Kapitel 9.4) aufgrund der Performance-Anforderungen ("schnelle Antwortzeit", "keinen Lag") und der Limitierungen der Zielhardware.

* **TS-2: Konfigurationsmanagement via CSV-Dateien:**
    * **Beschreibung:** Die Konfiguration (Sprachen, NFC-Mappings etc.) erfolgt über einfache CSV-Dateien statt strukturierterer Formate oder einer Datenbank.
    * **Auswirkungen:** Obwohl für den Kunden einfach zu handhaben, birgt die manuelle Bearbeitung von CSV-Dateien das Risiko von Formatierungsfehlern oder inkorrekten Daten, die zur Laufzeit zu Fehlern führen können. Die Fehlererkennung erfolgt hierbei erst beim Einlesen der Datei durch die Applikation und muss ggf. über die Logdatei (App.log) analysiert werden.
    * **Bezug zu Anforderungen/Entscheidungen:** Ergebnis der Architekturentscheidung zur Datenhaltung (Kapitel 9.3) und des Konfigurationsmanagements (Kapitel 8.3), die auf die Anforderung "Konfigurierbare Parameter sollen in eine Datei ausgelagert werden" reagiert, dabei aber von den ursprünglich genannten Technologien (`java.util.Properties`, `app.properties`) abweicht.

* **TS-3: Begrenzte anwendungsspezifische Fehlerbehandlung:**
    * **Beschreibung:** Das System verlässt sich weitgehend auf die Standard-Fehlerbehandlungsmechanismen von Java, ohne tiefgehende anwendungsspezifische Mechanismen zur graceful error recovery für nicht-kritische Fehler.
    * **Auswirkungen:** Während kritische Fehler protokolliert werden (Kapitel 8.2), kann das System bei bestimmten Fehlern in einen inkonsistenten Zustand geraten oder unerwartet beendet werden, ohne dass der Benutzer eine klare Rückmeldung erhält oder eine automatische Wiederherstellung versucht wird.
    * **Bezug zu Anforderungen/Konzepten:** Bezieht sich auf das Konzept der Fehlerbehandlung (Kapitel 8.2) und steht im Zusammenhang mit der Anforderung an die "Zuverlässigkeit" (Kapitel 10).

## 11.2 Risiken

Risiken sind zukünftige, ungewisse Ereignisse, die negative Auswirkungen auf das Projekt oder das System haben könnten.

* **R-1: Stabilität der Hardware-Integration (Pi4J, NFC, Arduino):**
    * **Beschreibung:** Die Applikation ist stark von der korrekten Funktion und den Treibern der externen Hardware (NFC Reader, Arduino Motorsteuerung) abhängig, die über die Pi4J-Bibliothek angesteuert werden.
    * **Auswirkungen:** Inkompatibilitäten, Treiberprobleme oder Störungen in der Kommunikation mit der Hardware können zu Fehlfunktionen des Exponats führen und die "Zuverlässigkeit" (Kapitel 10) beeinträchtigen.
    * **Bezug zu Anforderungen/Komponenten:** Betrifft die Anforderungen an die haptischen Elemente, Anschlüsse und die Verwendung von Pi4J.

* **R-2: Langzeitverfügbarkeit und Kompatibilität der Software-Abhängigkeiten:**
    * **Beschreibung:** Das System basiert auf spezifischen Versionen von Java (Java 21) und JavaFX sowie Pi4J.
    * **Auswirkungen:** Zukünftige Updates des Raspberry Pi OS oder Änderungen an diesen Bibliotheken könnten zu Kompatibilitätsproblemen führen, die Wartung und Updates erschweren.
    * **Bezug zu Anforderungen/Rahmenbedingungen:** Resultiert aus der Festlegung auf bestimmte technische Rahmenbedingungen (Java 21, Pi4J).

* **R-3: Transport- und Aufbauempfindlichkeit:**
    * **Beschreibung:** Obwohl die Anforderung der Transportierbarkeit (schnell auf-/abbaubar, sicher transportierbar) existiert, könnte die Komplexität der physischen Installation und die Verkabelung empfindlicher Komponenten (wie Motoren oder LEDs) während des Transports oder Auf-/Abbaus beschädigt werden.
    * **Auswirkungen:** Beschädigungen während des Transports können zu Ausfällen führen und die "Wartbarkeit" (Kapitel 10) durch notwendige Reparaturen beeinträchtigen.
    * **Bezug zu Anforderungen/Qualitätszielen:** Bezieht sich direkt auf die Anforderung an die "Transportierbarkeit" und das Qualitätsziel "Wartbarkeit".

* **R-4: Einhaltung der 500ms Low Latency für alle Aktionen:**
    * **Beschreibung:** Das Qualitätsziel einer Systemreaktion innerhalb von 500ms nach Objekteinwurf ist anspruchsvoll, insbesondere bei komplexen Animationen oder der Kommunikation mit externer Hardware.
    * **Auswirkungen:** Wenn diese Reaktionszeit nicht konstant eingehalten wird, kann dies zu einer negativen Benutzererfahrung führen und das "Benutzerengagement" (Kapitel 10) reduzieren.
    * **Bezug zu Anforderungen/Qualitätszielen:** Direkter Bezug zum Qualitätsziel "Low Latency" (Kapitel 10) und relevant für das Input Handling (Kapitel 8.5) sowie die Animationen (Kapitel 8.8, 9.4).