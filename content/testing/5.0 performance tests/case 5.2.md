---
title: TC 5.2
type: docs
---
## Beschreibung
Überprüfen der Reaktionszeit des Systems, um sicherzustellen, dass Nutzereingaben (z. B. das Einwerfen eines Objekts) innerhalb von 500 Millisekunden verarbeitet und die entsprechende Aktion ausgelöst wird.

## Annahmen und Voraussetzungen
- Die Anwendung ist auf einem Testgerät installiert.
- Der Prototyp verfügt über eine Funktion, die auf den Einwurf eines Objekts reagiert.

## Testdaten
Eingabegerät: Trichter mit Hebel  
Objekt: Beispielobjekt (z.B. Plastikflasche)  
Gerät: Raspberry Pi 5  
Version der Anwendung: Prototyp 2  
Timer-Tool: Integrierte Debug-Konsole

## Auszuführende Schritte
1. Starte die Anwendung und navigiere zur Simulationsansicht.
2. Wähle ein Objekt (z. B. Plastikmüll) aus, wirf es in den Trichter und zieh den Hebel.
3. Messe die Zeit vom Abschluss der Eingabe (Ziehen von Hebel) bis zur ersten sichtbaren Reaktion im System.
4. Wiederhole diesen Test für mindestens drei verschiedene Objekte.
5. Führe den Test dreimal pro Objekt durch, um Durchschnittswerte zu ermitteln.

## Erwartetes Ergebnis
Die Reaktionszeit zwischen Nutzereingabe und sichtbarer Systemreaktion beträgt ≤ 500 Millisekunden in mindestens 80 % der Tests.
Die Systemreaktion ist flüssig und frei von Ruckeln, Verzögerungen oder Fehlermeldungen.