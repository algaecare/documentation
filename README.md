# Willkommen bei der Algea Care Dokumentation

Diese Dokumentation enthält Informationen zu den Funktionen und Einstellungen von Algea Care.

[**Zur Website →**](https://docu-541dc1.pages.fhnw.ch/)

## Entwicklung

Die Dokumentationswebsite ist unter [docu-541dc1.pages.fhnw.ch](https://docu-541dc1.pages.fhnw.ch/) erreichbar.

Die Dokumentation wird mit [Nextra](https://nextra.site) erstellt.

Um die Dokumentation lokal zu entwickeln, folgenden Schritte ausführen:

1. `Node.js` und `pnpm` installieren
2. `pnpm i` ausführen, um die Abhängigkeiten zu installieren
3. `pnpm run dev` ausführen, um den Entwicklungsserver zu starten
4. `localhost:3000` im Browser öffnen

Die Seiten in der Dokumentation sind in Markdown geschrieben und befinden sich im `pages`-Ordner.

### Spezialfall: Entwicklung mit React Components

_Dieser Abschnitt ist noch in Bearbeitung..._

## Deployment

Die Dokumentation wird automatisch bei einem Push auf den `master`-Branch auf [GitHub Pages](https://pages.github.com/) deployt. Dieser Vorgang ist im `.gitlab-ci.yml`-File definiert.
