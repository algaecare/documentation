---
title: 2. Randbedingungen
type: docs
weight: 2
---

Architektur-Randbedingungen sind alle Entscheidungen und externen Faktoren, die den Spielraum für Entwurfsentscheidungen einschränken. Sie beeinflussen die Architektur massgeblich und müssen unbedingt eingehalten werden.

Folgende Randbedingungen beeinflussen die Architektur des "Algae Care" Exponats:

## 2.1 Technische Randbedingungen

Folgende technische Randbedingungen beeinflussen die Architektur und Implementierung des "Algae Care" Exponats massgeblich:

* **Plattform und Technologie:** Das Exponat ist für den Betrieb auf marktüblicher Standard-Hardware wie einem Raspberry Pi (siehe Produkt Features F01.1, F05). Dies gewährleistet einen einfachen Einsatz an verschiedenen Ausstellungsorten. Die Implementierung erfolgt in Java 21 unter Nutzung der Library Pi4J (für die Hardware-Integration). Dies stellt sicher, dass moderne Standards erfüllt und gleichzeitig eine einfache Anbindung an Hardware-Komponenten möglich ist. Die Wahl des Raspberry Pi als Zielplattform impliziert zudem Begrenzungen hinsichtlich der Kompatibilität des Betriebssystems und der verfügbaren Anschlüsse (E03), die von der Architektur berücksichtigt werden müssen.
* **Betrieb ohne Internet:** Das System muss zwingend offline funktionieren können, da eine stabile Internetverbindung am Ausstellungsort nicht immer garantiert ist. Eine Nutzung mit lokalem Netzwerk (WIFI) ist optional möglich, aber keine Voraussetzung für den Betrieb. Die Architektur darf keine ständige Online-Verbindung voraussetzen.
* **Hardware-Integration:** Das System muss verschiedene physische Hardware-Komponenten anbinden und steuern können. Dazu gehören ein Bildschirm zur Darstellung der Simulation (F02.1), LEDs (F01.1), ein Eingabetrichter (F01.2), Sensoren zur Objekterkennung (F01.3, F03), Lautsprecher für akustische Ausgaben (F02.3) sowie standardisierte Hardware-Anschlüsse (z. B. USB, HDMI) für eine einfache Wartung und Integration. Die Architektur muss robuste Schnittstellen und Mechanismen für die zuverlässige Interaktion mit dieser Hardware vorsehen.
* **Mehrsprachigkeit:** Das Exponat muss mehrsprachig (Deutsch, Französisch, Englisch) einsetzbar sein (F04). Die Architektur muss die Auslagerung von Texten und anderen sprachabhängigen Elementen (Strings) ermöglichen, um eine schnelle Anpassung und Ergänzung von Sprachen zu erlauben. Die Übersetzungen werden von Primeo Energie bereitgestellt.
* **Konfigurierbare Parameter:** Wichtige Parameter, einschliesslich Spracheinstellungen sowie bestimmte Spiel- und Simulationsfunktionen, sollen in einer leicht anpassbaren Konfigurationsdatei (`app.properties`) ausgelagert und zur Laufzeit geladen werden können (F05). Die Architektur muss dies unterstützen.
* **Verfügbarkeit von Fremdsoftware:** Sofern externe Bibliotheken oder Fremdsoftware benötigt werden, müssen diese kostenlos und frei verfügbar sein, um die Betriebskosten für Primeo Energie niedrig zu halten.
* **Transportierbarkeit:** Obwohl primär eine physische Eigenschaft des Gehäuses (F01.1), stellt die Anforderung an die Transportierbarkeit auch eine technische Randbedingung dar. Die technischen Komponenten müssen robust verbaut und verbunden sein, um häufigen Transport und schnellen Auf- und Abbau (ideal von 1-2 Personen) ohne Beschädigung zu überstehen.

## 2.2 Organisatorische Randbedingungen
- **Budget:** Das verfügbare Budget für die Entwicklung (exkl. Raspberry Pi) beträgt 200 CHF (E02). Dies schränkt die Auswahl an zu kaufenden Hardware-Komponenten und ggf. Softwarelizenzen ein.
- **Zeitrahmen:** Die Entwicklungszeit ist begrenzt durch die zur Verfügung stehende Soll-Zeit pro Semester pro Studierendem (180 Stunden, total 360 Stunden über 2 Semester) (E04). Die Architektur muss so gestaltet sein, dass das Projekt innerhalb dieses Zeitrahmens umsetzbar ist.
- **Wartung und Support durch Primeo Energie:** Die Architektur muss die Einschränkungen bezüglich Wartung und Support durch Primeo Energie berücksichtigen (E05). Dies betrifft insbesondere die Zugänglichkeit einzelner Komponenten für Wartungsarbeiten (F01.1 Öffnungsmechanismus) und die Einfachheit der Wartung (siehe auch Qualitätsziel Wartbarkeit).

## 2.3 Qualitäts-Randbedingungen

Die Architektur muss die Einhaltung der folgenden wichtigen Qualitätsanforderungen ermöglichen:

* **Benutzerfreundlichkeit (Usability):**
    * **Einfachheit der Bedienung:** Die Benutzeroberfläche muss intuitiv gestaltet sein, klare Anweisungen bieten und minimale Benutzereingaben erfordern.
    * **Attraktivität:** Das Exponat und die Simulation müssen visuell ansprechend sein, um das Interesse der Jugendlichen zu wecken und zu erhalten. Erkenntnisse aus der Zielgruppenumfrage (Schätzung von realen Modellen, Bildern/Videos, Selbstausprobieren, Geräuschen und Lichtern) müssen sich in der Gestaltung und Interaktion widerspiegeln (z.B. visuelle Gestaltung mit Meeresmotiv F01.4, Bildschirmdarstellung F02.1, Akustische Unterstützung F02.3, Animationen, 3D-Modelle als Dekoration, Benutzerinteraktion durch Objekteinwurf F03).
* **Wartbarkeit (Maintainability):**
    * **Klare Code-Struktur:** Die Architektur sollte eine modulare Code-Struktur mit klarer Trennung von Geschäftslogik, UI und Hardware-Interaktionen fördern.
    * **Einfache Konfiguration:** Wichtige Einstellungen (wie Übersetzungen, Toneinstellungen) müssen über eine leicht zugängliche Konfigurationsdatei verwaltbar sein (F05).
    * **Dokumentation:** Eine ausreichende Dokumentation (Code-Kommentare, Entwicklerdokumentation) muss möglich sein.
    * **Reparierbarkeit:** Das Design muss darauf ausgelegt sein, dass Wartungsaufgaben (z.B. Reparaturen) mit maximal 3 Werkzeugen durchgeführt werden können und idealerweise innerhalb einer halben Stunde mithilfe der Betriebsanleitung möglich sind (siehe Produktziel Z03).
* **Zuverlässigkeit (Reliability):**
    * **Fehlerfreiheit und Stabilität:** Das System muss robust gegenüber möglichen Fehlerquellen sein. Die Architektur sollte Mechanismen für Exception Handling und Logging unterstützen, um Stabilität zu gewährleisten und die Fehlersuche zu erleichtern.
* **Geringe Latenz (Low Latency):**
    * Die Architektur muss eine schnelle Verarbeitung ermöglichen, sodass die Erkennung von eingeworfenen Objekten und deren Auswirkung in der Simulation innerhalb von 500ms auf dem Bildschirm dargestellt werden (siehe Qualitätsanforderungen).

## 2.4 Projekt- und Scope-Randbedingungen

* **Zielgruppe:** Das Exponat ist spezifisch für Jugendliche der 7. bis 9. Oberstufe konzipiert (E01). Design- und Inhaltsentscheidungen müssen diese Zielgruppe berücksichtigen.
* **Thematische Einschränkung:** Das Projekt beschränkt sich thematisch auf Kieselalgen, um die Komplexität zu reduzieren (E06). Die Architektur muss diese thematische Fokussierung unterstützen.