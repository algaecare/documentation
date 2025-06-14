---
title: TC 3.1 Einwurf eines Objekts → Reaktion des Systems
type: docs
---
## Beschreibung
Überprüfung, ob der Einwurf eines Objekts korrekt verarbeitet wird und die Anzeigen (Sauerstoff, CO₂, Temperatur) entsprechend aktualisiert werden.

## Annahmen und Voraussetzungen
- Das System erkennt Objekte korrekt (Funktionstests bestanden).
- Anzeigen für Sauerstoff, CO₂ und Temperatur funktionieren einzeln wie vorgesehen.

## Testdaten
Eingabewert: Ein Objekt (z. B. Plastikflasche).  
Erwartete Änderung: CO₂ erhöht sich, Sauerstoff sinkt, Temperatur steigt.

## Auszuführende Schritte
1. Starte die Anwendung und navigiere zur Simulationsansicht (Screen, der den Einwurf fordert).
2. Wirf das Objekt (Plastikflasche) in den Einwurfbereich.
3. Beobachte, ob das System die Anzeige für CO₂, Sauerstoff und Temperatur aktualisiert.

## Erwartetes Ergebnis
Das System erkennt das Objekt und aktualisiert die Anzeigen entsprechend:  
CO₂: +  
Sauerstoff: -  
Temperatur: +  
Keine Fehler oder Verzögerungen treten auf.  
