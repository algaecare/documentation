---
title: 5.0 Bausteinsicht
type: docs
weight: 5
---
(hier genügt eine einfache Darstellung auf Ebene Pakete und Klassen)

Dieser Abschnitt beschreibt die Zerlegung von Algae Care in Module, die sich in der Paketstruktur des Java-Quelltextes widerspiegeln. Die Module der ersten Zerlegungsebene bezeichnen wir in Algae Care als Subsysteme. Diese Subsysteme bilden die grundlegenden Bausteine der Anwendung und definieren deren Verantwortlichkeiten sowie die Schnittstellen zur Interaktion miteinander.

Die Ebene 1 stellt die Subsysteme dar, einschließlich ihrer Schnittstellen und Abhängigkeiten. Für das zentrale Subsystem Eingabe- und Verarbeitungssystem enthält dieser Überblick auch eine detailliertere Zerlegung in Ebene 2, um die innere Struktur und Funktionsweise genauer zu erläutern.

Diese Darstellung dient dazu, die Modularität und die klare Trennung der Verantwortlichkeiten im System aufzuzeigen, wodurch die Wartbarkeit und Erweiterbarkeit von Algae Care gewährleistet wird.

## Subsysteme (Ebene 1)

```mermaid
graph TD
subgraph AlgaeCare
        subgraph App
            AppStarter
            Controller
            Model
            View
        end
        subgraph Hardware
            NFC-Input
            Display
        end
        User
    end

AppStarter -->|initializes| Controller
Controller -->|uses| Model
Controller -->|changes| View

NFC-Input -->|sends event| Controller
Controller -->|changes| Display


User -->|interacts with| NFC-Input
Display -->|reacts to| User
```

### Main Application Components

<img src="/classSimple.png" width="auto" height="auto"  alt={"error loading image"}/>

### Pi4J Hardware Components

```mermaid
graph TD
    subgraph com
        subgraph pi4j
            subgraph catalog
                subgraph components
                    SimpleButton
                    SimpleLed
                    Joystick
                    subgraph base
                        DigitalActuator
                        DigitalSensor
                        SerialDevice
                        SpiDevice
                        I2CDevice
                        PIN
                        Component
                        PwmActuator
                    end
                end
            end
        end
    end

    SimpleButton --> DigitalSensor
    SimpleLed --> DigitalActuator
    Joystick --> SimpleButton
    SerialDevice --> Component
    SpiDevice --> Component
    I2CDevice --> Component
    PIN --> Component
    PwmActuator --> Component
```

### Interconnections Between Components

<img src="/classOnlyinheretence.png" width="auto" height="auto"  alt={"error loading image"}/>

### Interconnections Between Components including usages

<img src="/class.png" width="auto" height="auto"  alt={"error loading image"}/>