---
title: 9. Architekturentscheidungen
type: docs
weight: 9
---

In diesem Abschnitt werden die wichtigsten Architekturentscheidungen dokumentiert, die während der Entwicklung des Algae Care Systems getroffen wurden.

## 9.1 Wahl der GUI-Technologie: Wechsel von TRICK17 zu JavaFX

* **Entscheidung:** Die ursprünglich gewählte GUI-Bibliothek TRICK17 wurde im Verlauf des Projekts durch JavaFX ersetzt.
* **Hintergrund/Problemstellung:** Zu Beginn des Projekts wurde TRICK17 für die Erstellung der grafischen Benutzeroberfläche evaluiert. Es zeigte sich jedoch schnell, dass TRICK17 nicht die notwendige Dokumentation und den Funktionsumfang bot, um den gestellten Anforderungen an die GUI gerecht zu werden. Dies führte zu Schwierigkeiten in der Entwicklung.
* **Begründung:** Im Januar 2025 (im zweiten Semester) wurde die Entscheidung getroffen, zu JavaFX zu wechseln. JavaFX bot eine deutlich bessere und umfassendere Dokumentation sowie eine ausgereiftere Entwicklungsumgebung mit vielen vordefinierten Elementen und verfügbaren Tutorials. Dies vereinfachte die Entwicklung komplexerer GUI-Elemente und Interaktionen.
* **Auswirkungen:** Der Wechsel zu JavaFX ermöglichte eine stabilere und funktionsreichere Benutzeroberfläche. Er erforderte jedoch auch eine Anpassung der bereits entwickelten GUI-Komponenten und des Wissensaufbaus im Team bezüglich JavaFX.

## 9.2 Wahl des Zustandsmanagements: Einführung des GameStateManager

* **Entscheidung:** Es wurde entschieden, einen zentralen `GameStateManager` zur Verwaltung des Anwendungszustands und der Spiellogik zu entwickeln.
* **Hintergrund/Problemstellung:** In Systemen mit komplexen Interaktionen und verschiedenen Zuständen (wie einem Spiel oder einer interaktiven Installation) ist eine klare Struktur für das Zustandsmanagement entscheidend. Eine direkte Kommunikation und gegenseitige Aufrufe zwischen allen Komponenten können schnell zu einem schwer wartbaren "Spaghetti-Code" führen.
* **Begründung:** Der `GameStateManager` ermöglicht eine entkoppelte Architektur. Komponenten müssen nicht wissen, welche anderen Komponenten auf einen bestimmten Zustand reagieren. Sie *emitieren* lediglich Events (Zustandsänderungen), und der `GameStateManager` benachrichtigt alle relevanten Listener. Dies vereinfacht die GameLogic, da Aktionen zentral über den aktuellen `GameState` gesteuert werden, von dem alle interessierten Komponenten erben oder auf den sie reagieren können.
* **Auswirkungen:** Dieses Konzept führte zu einer klareren Struktur der Applikation, verbesserte die Wartbarkeit und erleichtere die Implementierung der Spiellogik und der Übergänge zwischen verschiedenen Zuständen.

## 9.3 Wahl der Datenhaltung für statische Daten: Nutzung von CSV-Dateien

* **Entscheidung:** Statt einer Datenbank (wie in einer früheren Version kurzzeitig evaluiert) wurde entschieden, statische Konfigurations- und Textdaten in CSV-Dateien zu speichern.
* **Hintergrund/Problemstellung:** Es gab die Notwendigkeit, statische Daten wie Spracheinstellungen, NFC-Chip-Mappings und Textinhalte für die Benutzeroberfläche zu speichern und zu verwalten. Diese Daten müssen vom Kunden (Primero Energie) einfach anpassbar sein.
* **Begründung:** Die Verwendung von CSV-Dateien wurde gewählt, da dies ein sehr zugängliches Format ist, das mit einfachen Tools wie Microsoft Excel oder LibreOffice Calc bearbeitet werden kann. Dies eliminiert die Notwendigkeit von Datenbankkenntnissen beim Kunden und senkt die Hürde für die Datenpflege. In Abstimmung mit dem Team wurde entschieden, von einer vorherigen Überlegung, SQLite zu verwenden, abzusehen, um die Komplexität auf Kundenseite zu reduzieren.
* **Auswirkungen:** Die Datenhaltung in CSV-Dateien ist für statische, weniger komplexe Daten ausreichend und sehr wartungsfreundlich für den Kunden. Für komplexere oder dynamische Daten wäre dieser Ansatz jedoch nicht geeignet. Die Robustheit gegenüber Formatierungsfehlern in den CSV-Dateien muss bei der Bearbeitung berücksichtigt werden.

## 9.4 Konzept der Animationen: Hybrid aus Bildsequenzen und JavaFX-Animationen

* **Entscheidung:** Die Umsetzung von Animationen erfolgt als Hybrid-Ansatz, bei dem sowohl Bildsequenzen als auch native JavaFX-Animationen verwendet werden.
* **Hintergrund/Problemstellung:** Die Darstellung von Animationen ist ein zentrales Element der Benutzeroberfläche. Ursprünglich war geplant, viele Animationen rein über Bildsequenzen zu realisieren. Beim Test auf der Zielhardware (Raspberry Pi) zeigte sich jedoch, dass die verfügbaren RAM-Ressourcen für eine flüssige Darstellung von umfangreichen Bildsequenzen nicht ausreichend waren.
* **Begründung:** Aufgrund der Einschränkungen des Raspberry Pis musste ein Kompromiss gefunden werden. Ein Teil der Animationen, insbesondere solche mit komplexeren grafischen Effekten, die extern (z.B. mit Adobe After Effects) erstellt wurden, werden weiterhin als optimierte Bildsequenzen geladen und abgespielt. Andere Animationen, die sich einfacher programmieren lassen (z.B. einfache Bewegungen, Skalierungen, Opazitätsänderungen), wurden stattdessen nativ mit den Animationsfunktionen von JavaFX umgesetzt, da dies ressourcenschonender ist und keine grossen Bilddatenmengen im Speicher halten muss.
* **Auswirkungen:** Dieser hybride Ansatz ermöglicht die Darstellung notwendiger Animationen innerhalb der Hardware-Beschränkungen des Raspberry Pis. Er erfordert jedoch zwei unterschiedliche Implementierungsansätze für Animationen (Laden und Abspielen von Bildsequenzen vs. Nutzung der JavaFX-Animations-API), was die Entwicklung geringfügig komplexer macht. Die Optimierung der Bildsequenzen (Auflösung, Kompression) war ebenfalls notwendig.