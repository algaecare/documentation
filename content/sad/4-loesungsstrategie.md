---
title: 4. Lösungsstrategie
type: docs
weight: 4
---

Dieser Abschnitt beschreibt die übergeordneten architektonischen Entscheidungen und Strategien, die gewählt wurden, um die Anforderungen zu erfüllen und die definierten Randbedingungen zu berücksichtigen.

## 4.1 Architekturansatz und Muster

Als grundlegendes Architekturmuster für das System wurde das **Model-View-Controller (MVC)** Muster vorgegeben und übernommen. Dieses Muster unterstützt eine klare Trennung der Anwendungsbereiche: das Modell (Daten und Geschäftslogik, hier die Simulationslogik und der Zustand des Ökosystems), die View (die Benutzeroberfläche auf dem Monitor und die physischen Ausgaben wie LEDs) und der Controller (Verarbeitung von Benutzereingaben vom RFID-Reader und Steuerung der Ausgaben).

Die **Modularisierung** wurde zudem durch die Anwendung herkömmlicher Java-Vorgehensweisen zur Strukturierung der Daten und des Codes gefördert, um eine klare und wartbare Struktur zu erreichen.

## 4.2 Technologieauswahl

Die Wahl der Schlüsseltechnologien wurde massgeblich durch Projektvorgaben der FHNW beeinflusst. Das System wird primär in **Java 21** entwickelt.

Für die Implementierung der Benutzeroberfläche und Visualisierung wurde **JavaFX** gewählt. Diese Entscheidung wurde vom Team getroffen, nachdem eine vorher evaluierte GUI-Bibliothek ("Trick 17") aufgrund mangelnder Eignung und fehlender Dokumentation als unpassend erachtet wurde.

Die Integration und Steuerung der Hardware-Komponenten (Raspberry Pi GPIOs, etc.) erfolgt unter Nutzung der **Pi4J** Bibliothek.

Die Interaktion mit dem NFC/RFID Reader wird durch die Nutzung von **PCSC (Personal Computer/Smart Card)** ermöglicht, um die Kommunikation mit dem spezifischen Reader-Modell zu realisieren.

Als Zielplattform dient ein **Raspberry Pi**.

## 4.3 Bewältigung zentraler Herausforderungen

Die Lösungsstrategie adressiert zentrale Herausforderungen, die sich insbesondere in den Bereichen Hardware-Integration und Visualisierung/Animation stellen:

* Die **Hardware-Integration** mit dem Raspberry Pi und den angeschlossenen Komponenten (Reader, Servos, LEDs) wird durch den gezielten Einsatz der **Pi4J** Bibliothek gelöst, die eine Abstraktionsebene für den Zugriff auf die GPIOs und andere Hardwareschnittstellen bietet. Die Anbindung auf Elektronik-Ebene erforderte eine sorgfältige Planung der physischen Verbindungen.
* Die **Visualisierung und Animation** auf dem Monitor, die flüssig und mit begrenzten RAM-Ressourcen (insbesondere auf einem Raspberry Pi) laufen muss, wird durch die Wahl von **JavaFX** realisiert. JavaFX bietet integrierte Unterstützung für grafische Elemente und Animationen. Herausforderungen im Zusammenhang mit dem Laden von Bildern und RAM-Auslastung, die bereits mit früheren Bibliotheken auftraten, wurden im Rahmen der Implementierung mit JavaFX angegangen.
* Der **Offline-Betrieb**, eine zentrale Randbedingung (siehe Abschnitt 2.1), wird durch eine Architektur sichergestellt, die keinerlei externe Netzwerkverbindungen für ihre Kernfunktionalität benötigt. Alle notwendigen Daten (Simulationsparameter, Konfiguration, Übersetzungen) werden lokal gespeichert.

## 4.4 Entwurfsprinzipien

Bei der Entwicklung des Systems standen folgende Entwurfsprinzipien im Vordergrund:

* **Einfachheit der Entwicklung:** Der Fokus lag auf einem Ansatz, der eine schnelle und unkomplizierte Implementierung ermöglicht.
* **Schnelle Entwicklung und schnelle Änderungen:** Die Strategie zielte darauf ab, zügig Fortschritte zu erzielen und flexibel auf erforderliche Anpassungen reagieren zu können.
* **Testbarkeit:** Die Testbarkeit der Software wurde im Zuge der Entwicklung und basierend auf den auftretenden Änderungen angepasst und berücksichtigt.
* **Erweiterbarkeit:** Die Erweiterbarkeit des Systems war kein primäres Entwurfsprinzip und wurde weniger stark fokussiert.