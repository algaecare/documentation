---
title: Randbedingungen
type: docs
---
Beim Lösungsentwurf mussten verschiedene Randbedingungen berücksichtigt werden, die auch weiterhin in der Lösung wirksam sind. Dieser Abschnitt beschreibt diese Randbedingungen und erläutert, wo notwendig, deren Motivation und Auswirkungen.

## Technische Randbedingungen

| Randbedingung                  | Erläuterungen, Hintergrund                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Moderate Hardwareausstattung** | Das Exponat soll auf marktüblicher Standard-Hardware wie Raspberry Pi oder einem Notebook betrieben werden können, um einen einfachen Einsatz in verschiedenen Ausstellungsorten zu gewährleisten. |
| **Betrieb ohne Internet**      | Das System muss offline funktionieren, da die Ausstellung an Orten ohne stabile Internetverbindung stattfinden kann. Eine Nutzung mit lokalem Netzwerk (WIFI) ist optional möglich. |
| **Mehrsprachigkeit**           | Das Exponat soll mehrsprachig (D, F, E) einsetzbar sein. Texte und Strings müssen ausgelagert werden, um eine schnelle Anpassung zu ermöglichen. Übersetzungen werden von Primeo Energie bereitgestellt. |
| **Implementierung in Java 21** | Die Anwendung wird in Java 21 entwickelt und nutzt die Library Pi4J, um sowohl moderne Standards zu erfüllen als auch eine einfache Integration mit Hardware-Komponenten zu ermöglichen. |
| **Konfigurierbare Parameter**  | Parameter wie Sprache oder bestimmte Spiel- und Simulationsfunktionen sollen in einer leicht anpassbaren Konfigurationsdatei (app.properties) ausgelagert werden. |
| **Fremdsoftware frei verfügbar** | Falls Fremdsoftware oder externe Bibliotheken verwendet werden, müssen diese kostenlos und frei verfügbar sein, um die Kosten für den Betrieb niedrig zu halten. |
| **Transportierbarkeit**        | Das Exponat muss leicht und sicher transportierbar sein, idealerweise von einer oder maximal zwei Personen. Es sollte schnell auf- und abbaubar sein, um eine einfache Handhabung bei wechselnden Ausstellungsorten zu gewährleisten. |
| **Standardisierte Anschlüsse** | Hardware-Anschlüsse müssen gut zugänglich und standardisiert sein (z. B. USB, HDMI), um einfache Wartung und Integration sicherzustellen. |

## Organisatorische Randbedingungen

// TODO: Organisatorische Randbedingungen ergänzen

## Konventionen

| Konvention                     | Erläuterungen, Hintergrund                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Architekturdokumentation**   | Terminologie und Gliederung basieren auf dem deutschen arc42-Template in der Version 6.0. Dies gewährleistet eine einheitliche und nachvollziehbare Struktur. |
| **Kodierrichtlinien für Java** | Es werden die Java Coding Conventions von Sun/Oracle eingehalten, geprüft mit Tools wie CheckStyle, um einen konsistenten und wartbaren Quellcode zu gewährleisten. |
| **Sprache (Deutsch vs. Englisch)** | Bezeichnungen in Diagrammen und Texten der Architekturdokumentation werden in Deutsch verfasst, um die Zielgruppe (Schülerinnen und Schüler) besser anzusprechen. Im Java-Quelltext werden deutsche Bezeichner verwendet, sofern die Java Coding Conventions dies nicht einschränken. |
| **Mehrsprachigkeit**           | Texte und Strings sind in die Konfiguration ausgelagert, um eine einfache Anpassung an Deutsch, Französisch und Englisch zu ermöglichen. |
| **Hardware-Schnittstellenstandards** | Standards wie USB und HDMI werden eingehalten, um die Kompatibilität und Wartbarkeit des Systems zu fördern. |
| **Simulation und Datenformate** | Es werden etablierte Standards für Datenspeicherung und Austausch verwendet (z. B. JSON oder XML). Proprietäre Formate werden vermieden, um Interoperabilität sicherzustellen. |
| **Haptische und visuelle Elemente** | Die Gestaltung haptischer Komponenten orientiert sich an intuitiven Designstandards, um die Nutzung durch die Zielgruppe zu erleichtern. |
| **Dokumentation von Änderungen** | Änderungen am Quellcode und an der Architektur werden klar dokumentiert, um eine lückenlose Nachvollziehbarkeit für die Wartung zu gewährleisten. |

Diese Konventionen legen die Grundlage für ein einheitliches und leicht verständliches System, das den Anforderungen an Funktionalität, Benutzerfreundlichkeit und Wartbarkeit gerecht wird.