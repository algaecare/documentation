---
title: TC 3.3 Anzeigenwechsel nach mehreren Eingaben
type: docs
---
## Beschreibung
Überprüfung, ob die Anzeigen (Sauerstoff, CO₂, Temperatur) korrekt aktualisiert werden, wenn mehrere Objekte nacheinander eingeworfen werden.

## Annahmen und Voraussetzungen
- Die Anzeigen aktualisieren sich korrekt für einzelne Eingaben.

## Testdaten
Eingaben:
- Plastikflasche → CO₂: + , Sauerstoff: - , Temperatur: +
- Velo → CO₂: - , Sauerstoff: + , Temperatur: -

## Auszuführende Schritte
1. Starte die Anwendung und navigiere zur Simulationsansicht.
2. Wirf nacheinander die Objekte (Plastikflasche, Velo) ein.
3. Beobachte die Änderungen der Anzeigen.

## Erwartetes Ergebnis
Nach Plastik:
- CO₂: +
- Sauerstoff: -
- Temperatur: +

Nach sauberem Wasser:
- CO₂: -
- Sauerstoff: +
- Temperatur: -