---
title: 1. Einführung und Ziele
type: docs
weight: 1
---

Dieser Abschnitt beschreibt die relevanten Anforderungen und die treibenden Kräfte, die vom Softwarearchitekten und dem Entwicklungsteam berücksichtigt werden müssen. Dazu gehören die zugrundeliegenden Geschäftsziele, wesentliche Merkmale und funktionale Anforderungen an das System, Qualitätsziele für die Architektur sowie relevante Stakeholder und deren Erwartungen.

### 1.1 Anforderungsübersicht

**Motivation:** Aus Sicht der Endbenutzer wird ein System erstellt oder modifiziert, um die Unterstützung einer Geschäftsaktivität zu verbessern und/oder die Qualität zu steigern.

**Inhalt:**
Das Problem, das dieses Exponat lösen soll, besteht darin, dass Jugendliche oft nur über geringes Wissen bezüglich der Rolle von Algen in Ökosystemen und ihrer Empfindlichkeit gegenüber Umwelteinflüssen verfügen. Algen sind jedoch essenziell für viele Lebensräume als Sauerstoffproduzenten und Lebensraum. Verschiedene Stoffe (z.B. Plastik, natürliche Materialien) können ihr Wachstum stark beeinflussen. Ohne dieses Wissen fehlt oft das Verständnis für umweltbewusstes Handeln und korrekte Entsorgung.

Der Hintergrund für die Entwicklung des Exponats ist das Ziel von Primeo Energie, im Energie Kosmos spielerisch Wissen über Natur und Umwelt zu vermitteln. Algen eignen sich aufgrund ihrer sensiblen Reaktion auf Umweltveränderungen hervorragend, um den Einfluss menschlichen Handelns anschaulich darzustellen.

Die wesentlichen Produktziele sind:

  * **Z01 Wissensvermittlung:** Jugendliche sollen nach dem Besuch des Exponats wissen, was Kieselalgen sind und welche Einflüsse sie auf die Umwelt haben. Dies soll durch einen Vor- und Nachher-Fragebogen gemessen werden, wobei im zweiten Fragebogen mehr richtige Antworten erwartet werden.
  * **Z02 Benutzerengagement:** Das Interesse der Jugendlichen am Exponat soll aufrechterhalten werden. Dies wird durch manuelle Zeitmessung der Verweildauer erfasst, mit dem Ziel, dass Jugendliche im Durchschnitt länger als 1.5 Minuten am Exponat bleiben.
  * **Z03 Wartbarkeit:** Das fertige Produkt soll für Primeo Energie einfach wartbar sein und eine leichte Anpassung der Exponateinstellungen ermöglichen. Die Wartbarkeit wird anhand der Anzahl benötigter Werkzeuge und der erfolgreichen Durchführung von Wartungsaufgaben (Reparatur innerhalb einer halben Stunde mithilfe der Betriebsanleitung) durch eine externe Person überprüft.

Das Produktkonzept "Algae Care" ist ein interaktives Exponat, das Jugendlichen im Alter von 12-15 Jahren (7.-9. Schuljahr) das Bewusstsein für die Wichtigkeit von Meeresalgen steigern soll. Es ermöglicht Nutzern, Alltagsobjekte einzuwerfen, um deren Einfluss auf ein simuliertes Algen-Ökosystem auf einem Bildschirm zu visualisieren. Ergänzende Anzeigen (z.B. für Wassertemperatur) und akustische Unterstützung tragen zur Wissensvermittlung und zum Engagement bei. Eine Konfigurations-/Wartungsschnittstelle ist zur einfachen Verwaltung vorgesehen.

Detailliertere Anforderungen und Use Cases können in den entsprechenden Anforderungsdokumenten eingesehen werden.

### 1.2 Qualitätsziele

**Motivation:** Sie sollten die Qualitätsziele Ihrer wichtigsten Stakeholder kennen, da diese fundamentale architektonische Entscheidungen beeinflussen werden. Stellen Sie sicher, dass Sie sehr konkret über diese Qualitäten sprechen und Schlagworte vermeiden.

**Inhalt:**
Die folgenden Qualitätsziele sind für die Architektur des Exponats von höchster Bedeutung, da sie direkt auf die Produktziele einzahlen und für die wichtigsten Stakeholder relevant sind:

| Qualitätsziel           | Priorität | Szenario / Messung / Soll-Wert                                                                                                                                                              |
| :--------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Benutzerengagement     | Hoch      | **Messung:** Manuelle Zeitmessung der Verweildauer am Exponat.<br/>**Soll-Wert:** Jugendliche sollen im Durchschnitt mehr als 1.5 Minuten am Exponat bleiben (siehe Produktziel Z02).            |
| Wartbarkeit            | Hoch      | **Messung:** Anzahl benötigter Werkzeuge für Wartungsarbeiten; Durchführung von Wartungsaufgaben durch eine externe Person anhand der Anleitung.<br/>**Soll-Wert:** Das Exponat soll mit maximal 3 Werkzeugen und mithilfe der Betriebsanleitung innerhalb einer halben Stunde repariert werden können (siehe Produktziel Z03). |
| Benutzerfreundlichkeit | Hoch      | **Messung:** Usability-Tests mit der Zielgruppe; Erfassung der benötigten Zeit bis zum Spielstart.<br/>**Soll-Wert:** 90% der Testpersonen sollen ohne zusätzliche Hilfe innerhalb von 30 Sekunden mit der Interaktion beginnen können. |
| Zuverlässigkeit       | Hoch      | **Messung:** Anzahl der Systemausfälle und Fehlfunktionen im Dauerbetrieb.<br/>**Soll-Wert:** Maximaler Ausfall von 1 Stunde pro Monat; keine kritischen Fehler im normalen Betrieb. |
| Low Latency           | Mittel    | **Messung:** Zeitspanne zwischen Objekteinwurf und System-Reaktion.<br/>**Soll-Wert:** Die Objekterkennung und entsprechende Systemreaktion soll innerhalb von 500ms erfolgen. |

### 1.3 Stakeholder

**Motivation:** Sie sollten alle am System beteiligten oder vom System betroffenen Parteien kennen. Andernfalls können später im Entwicklungsprozess böse Überraschungen auftreten. Diese Stakeholder bestimmen den Umfang und den Detaillierungsgrad Ihrer Arbeit und ihrer Ergebnisse.

**Inhalt:**
Die folgende Tabelle gibt einen Überblick über die Stakeholder des Systems:

| Stakeholder | Ansprechpersonen | Charakterisierung und Hintergrund | Bedürfnisse |
|---|---|---|---|
| Primeo Energie | Wolfgang Szabó info@primeo-energie.ch | Energie Kosmos - dem Science und Erlebnis Center für Klima &amp; Energie stellt Primeo Energie Exponate aus, welche den Besuchern verschiedene Themen über Klima und Energie näher bringen sollen&nbsp; | Primeo Energie möchte das Bewusstsein für Klima &amp; Energie der neuen Generation vermitteln.Ebenfalls muss das Spiel für die Zielgruppe ansprechend gestaltet sein und möglichst viel Spass beim Lernen bieten.Da meist mehrere Personen auf einmal da sind, ist es wichtig, dass die Exponate robust sind, Spielinhalte angepasst werden können und innerhalb von 1-3 Minuten spielbar sind. |
| Jugendliche/User | - | Jugendliche, die unser Exponat besuchen werden. | Das Exponat sollte visuell ansprechend sein. Ihr Haupt-, bzw. grösstes Bedürfnis ist das User Engagement. |
| Teamcoach | Roswitha Dubach roswitha.dubach@fhnw.ch | Roswitha Dubach ist Teamcoach unseres Teams. | Roswitha Dubach möchte uns so gut als möglich unterstützen. Ebenfalls möchte sie ihr Team zum Erfolg bringen. |
| Product Owner | Katja Pott katja.pott@fhnw.ch Cédric Merz cedric.merz@fhnw.ch | Wissenschaftliche Assistentin und Master-Studentin / Design &amp; TechnologyAuch Katja war bereits Product Owner eines bisherigen Projekts und bringt in diesem Feld auch reichlich Erfahrung mit.Wissenschaftlicher Mitarbeiter / HCI &amp; XRAuch Cédric war bereits Product Owner eines bisherigen Projekts und bringt in diesem Feld auch reichlich Erfahrung mit. | Dass die Vorgaben erfüllt werden und das Endprodukt den Erwartungen von Primeo entspricht. Sie möchten immer über den aktuellen Stand des Projekts Bescheid wissen und wollen bei wichtigen Entscheidungen einbezogen werden. |
| Team Algae Care | Emirhan Karaca, Ben Böhler, Larissa Tharshan, Valentin Kuster, Jasmin Gyger, Niklas Häfliger, Tim Buser, Adrian Sonderegger, Anja Zivkovic | Emirhan und Adrian haben vor Studienbeginn die Informatikmittelschule abgeschlossen und danach ein Praktikum in der Informatik absolviert. Valentin hat eine Lehre als Automatiker abgeschlossen. Jasmin hat eine Lehre als Mediamatikerin abgeschlossen und arbeitet momentan als Designer im Marketing und Produkt Feld. Larissa und Anja haben eine KV-Lehre abgeschlossen. Ben hat die FMS Fachrichtung Kommunikation abgeschlossen. Niklas hat die FMS Fachrichtung Gesundheit + Passerelle abgeschlossen. Tim hat das Gymnasium mit dem Schwerpunktfach Bildnerisches Gestalten absolviert und dort Kurse in Informatik und Mikroprozessoren belegt und arbeitet jetzt im Bereich der Webentwicklung bei der youEngineering AG in Basel. | Wir als Team möchten, dass das Projekt im Rahmen der vorgegebenen Zeit und Fähigkeiten der Teammitglieder umgesetzt werden kann. Wir möchten zum einen das Modul bestehen und zum anderen ein tolles Projekt auf die Beine Stellen, dass bei Primeo ausgestellt wird und woran die Endnutzer Spass haben und beim spielen etwas Lernen. |


![](/sad/1.3-stakeholder.png)