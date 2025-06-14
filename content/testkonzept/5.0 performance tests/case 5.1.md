---
title: TC 5.1
type: docs
---
## Beschreibung
Überprüfen der Ladezeiten der Anwendung, um sicherzustellen, dass das Hauptmenü innerhalb eines akzeptablen Zeitrahmens (3 Sekunden) geladen wird.

## Annahmen und Voraussetzungen
Die Anwendung ist auf einem Testgerät installiert.

## Testdaten
Gerät: Raspberry Pi 5  
Version der Anwendung: Prototyp 2  
Timer-Tool: integriertes Performance-Mess-Tool

## Auszuführende Schritte
1. Starte das Gerät und stelle sicher, dass keine anderen Anwendungen geöffnet sind.
2. Öffne die Anwendung.
3. Messe die Zeit von dem Moment, in dem die Anwendung gestartet wird, bis das Hauptmenü vollständig geladen ist (alle Elemente sichtbar und anklickbar).
4. Wiederhole diesen Test zehnmal, um Durchschnittswerte zu ermitteln.

## Erwartetes Ergebnis
Die Ladezeit bis zur vollständigen Anzeige des Hauptmenüs beträgt weniger als 15 Sekunden in mindestens 90 % der Tests.
Es treten keine Fehler, Abstürze oder Verzögerungen auf, die den Ladevorgang beeinträchtigen.