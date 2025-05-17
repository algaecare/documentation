---
title: 10. Qualitätsanforderungen
weight: 10
type: docs
---

Dieses Kapitel fasst die für die Architektur relevanten Qualitätsziele zusammen, die bereits in Kapitel 1.2 definiert und von den wichtigsten Stakeholdern priorisiert wurden. Diese Ziele haben massgeblichen Einfluss auf architektonische Entscheidungen und Designprinzipien.

Die folgenden Qualitätsziele sind für die Architektur des Algae Care Exponats von höchster Bedeutung, da sie direkt auf die Produktziele einzahlen und für die wichtigsten Stakeholder relevant sind:

| Qualitätsziel       | Priorität | Szenario / Messung / Soll-Wert                                                                                                                                                              |
| :------------------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Benutzerengagement  | Hoch      | **Messung:** Manuelle Zeitmessung der Verweildauer am Exponat.\<br\>**Soll-Wert:** Jugendliche sollen im Durchschnitt mehr als 1.5 Minuten am Exponat bleiben (siehe Produktziel Z02).              |
| Wartbarkeit         | Hoch      | **Messung:** Anzahl benötigter Werkzeuge für Wartungsarbeiten; Durchführung von Wartungsaufgaben durch eine externe Person anhand der Anleitung.\<br\>**Soll-Wert:** Das Exponat soll mit maximal 3 Werkzeugen und mithilfe der Betriebsanleitung innerhalb einer halben Stunde repariert werden können (siehe Produktziel Z03). |
| Benutzerfreundlichkeit| Hoch      | **Messung:** Usability-Tests mit der Zielgruppe; Erfassung der benötigten Zeit bis zum Spielstart.\<br\>**Soll-Wert:** 90% der Testpersonen sollen ohne zusätzliche Hilfe innerhalb von 30 Sekunden mit der Interaktion beginnen können. |
| Zuverlässigkeit     | Hoch      | **Messung:** Anzahl der Systemausfälle und Fehlfunktionen im Dauerbetrieb.\<br\>**Soll-Wert:** Maximaler Ausfall von 1 Stunde pro Monat; keine kritischen Fehler im normalen Betrieb.                 |
| Low Latency         | Mittel    | **Messung:** Zeitspanne zwischen Objekteinwurf und System-Reaktion.\<br\>**Soll-Wert:** Die Objekterkennung und entsprechende Systemreaktion soll innerhalb von 500ms erfolgen.                 |

Diese Qualitätsziele bilden den Rahmen für die Bewertung und Validierung der entwickelten Architektur und beeinflussen Entscheidungen hinsichtlich Technologieauswahl, Designmuster und Implementierungsdetails.