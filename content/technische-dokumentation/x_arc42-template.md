---
title: XX. arc42-Template
type: docs
weight: 100
---

***Über arc42***

arc42, das Template zur Dokumentation von Software- und Systemarchitekturen.

Template Version {revnumber}. {revremark}, {revdate}

Created, maintained and (C) by Dr. Peter Hruschka, Dr. Gernot Starke and contributors.
Siehe https://arc42.org.


## 1. Einführung und Ziele

Beschreibt die wesentlichen Anforderungen und treibenden Kräfte, die bei der Umsetzung der Softwarearchitektur und Entwicklung des Systems berücksichtigt werden müssen.

Dazu gehören:

* zugrunde liegende Geschäftsziele,
* wesentliche Aufgabenstellungen,
* wesentliche funktionale Anforderungen,
* Qualitätsziele für die Architektur und
* relevante Stakeholder und deren Erwartungshaltung.

### 1.1 Aufgabenstellung

**Inhalt**

Kurzbeschreibung der fachlichen Aufgabenstellung, treibenden Kräfte, Extrakt (oder Abstract) der Anforderungen.
Verweis auf (hoffentlich vorliegende) Anforderungsdokumente (mit Versionsbezeichnungen und Ablageorten).

**Motivation**

Aus Sicht der späteren Nutzung ist die Unterstützung einer fachlichen Aufgabe oder Verbesserung der Qualität der eigentliche Beweggrund, ein neues System zu schaffen oder ein bestehendes zu modifizieren.

**Form**

Kurze textuelle Beschreibung, eventuell in tabellarischer Use-Case Form.
Sofern vorhanden, sollte die Aufgabenstellung Verweise auf die entsprechenden Anforderungsdokumente enthalten.

Halten Sie diese Auszüge so knapp wie möglich und wägen Sie Lesbarkeit und Redundanzfreiheit gegeneinander ab.

Siehe [Anforderungen und Ziele](https://docs.arc42.org/section-1/) in der online-Dokumentation (auf Englisch!).

### 1.2 Qualitätsziele

**Inhalt**

Die Top-3 bis Top-5 der Qualitätsanforderungen für die Architektur, deren Erfüllung oder Einhaltung den maßgeblichen Stakeholdern besonders wichtig sind.
Gemeint sind hier wirklich Qualitätsziele, die nicht unbedingt mit den Zielen des Projekts übereinstimmen. 
Beachten Sie den Unterschied.

Hier ein Überblick möglicher Themen (basierend auf dem ISO 25010 Standard):

!["Kategorien von Qualitätsanforderungen"](01_2_iso-25010-topics-DE.drawio.png)

**Motivation**

Weil Qualitätsziele grundlegende Architekturentscheidungen oft maßgeblich beeinflussen, sollten Sie die für Ihre Stakeholder relevanten Qualitätsziele kennen, möglichst konkret und operationalisierbar.

**Form**

Tabellarische Darstellung der Qualitätsziele mit möglichst konkreten Szenarien, geordnet nach Prioritäten.

### 1.3 Stakeholder

**Inhalt**

Expliziter Überblick über die Stakeholder des Systems – über alle Personen, Rollen oder Organisationen –, die

* die Architektur kennen sollten oder
* von der Architektur überzeugt werden müssen,
* mit der Architektur oder dem Code arbeiten (z.B. Schnittstellen nutzen),
* die Dokumentation der Architektur für ihre eigene Arbeit benötigen,
* Entscheidungen über das System und dessen Entwicklung treffen.

**Motivation**

Sie sollten die Projektbeteiligten und -betroffenen kennen, sonst erleben Sie später im Entwicklungsprozess Überraschungen.
Diese Stakeholder bestimmen unter anderem Umfang und Detaillierungsgrad der von Ihnen zu leistenden Arbeit und Ergebnisse.

**Form**

Tabelle mit Rollen- oder Personennamen, sowie deren Erwartungshaltung bezüglich der Architektur und deren Dokumentation.

|     |     |     |
| --- | --- | --- |
| Rolle | Kontakt | Erwartungshaltung |
| _&lt;Rolle-1>_ | _&lt;Kontakt-1>_ | _&lt;Erwartung-1>_ |
| _&lt;Rolle-2>_ | _&lt;Kontakt-2>_ | _&lt;Erwartung-2>_  |

## 2. Randbedingungen

**Inhalt**

Randbedingungen und Vorgaben, die ihre Freiheiten bezüglich Entwurf, Implementierung oder Ihres Entwicklungsprozesses einschränken.
Diese Randbedingungen gelten manchmal organisations- oder firmenweit über die Grenzen einzelner Systeme hinweg.

**Motivation**

Für eine tragfähige Architektur sollten Sie genau wissen, wo Ihre Freiheitsgrade bezüglich der Entwurfsentscheidungen liegen und wo Sie Randbedingungen beachten müssen.
Sie können Randbedingungen vielleicht noch verhandeln, zunächst sind sie aber da.

**Form**

Einfache Tabellen der Randbedingungen mit Erläuterungen.
Bei Bedarf unterscheiden Sie technische, organisatorische und politische Randbedingungen oder übergreifende Konventionen (beispielsweise Programmier- oder Versionierungsrichtlinien, Dokumentations- oder Namenskonvention).

Siehe [Randbedingungen](https://docs.arc42.org/section-2/) in der online-Dokumentation (auf Englisch!).

## 3. Kontextabgrenzung

**Inhalt**

Die Kontextabgrenzung grenzt das System gegen alle Kommunikationspartner (Nachbarsysteme und Benutzerrollen) ab.
Sie legt damit die externen Schnittstellen fest und zeigt damit auch die Verantwortlichkeit (scope) Ihres Systems: Welche Verantwortung trägt das System und welche Verantwortung übernehmen die Nachbarsysteme?

Differenzieren Sie fachlichen (Ein- und Ausgaben) und technischen Kontext (Kanäle, Protokolle, Hardware), falls nötig.

**Motivation**

Die fachlichen und technischen Schnittstellen zur Kommunikation gehören zu den kritischsten Aspekten eines Systems.
Stellen Sie sicher, dass Sie diese komplett verstanden haben.

**Form**

Verschiedene Optionen:

* Diverse Kontextdiagramme
* Listen von Kommunikationsbeziehungen mit deren Schnittstellen

Siehe [Kontextabgrenzung](https://docs.arc42.org/section-3/) in der online-Dokumentation (auf Englisch!).

### 3.1 Fachlicher Kontext

**Inhalt**

Festlegung **aller** Kommunikationsbeziehungen (Nutzer, IT-Systeme, ...) mit Erklärung der fachlichen Ein- und Ausgabedaten oder Schnittstellen.
Zusätzlich (bei Bedarf) fachliche Datenformate oder Protokolle der Kommunikation mit den Nachbarsystemen.

**Motivation**

Alle Beteiligten müssen verstehen, welche fachlichen Informationen mit der Umwelt ausgetauscht werden.

**Form**

Alle Diagrammarten, die das System als Blackbox darstellen und die fachlichen Schnittstellen zu den Nachbarsystemen beschreiben.

Alternativ oder ergänzend können Sie eine Tabelle verwenden.
Der Titel gibt den Namen Ihres Systems wieder; die drei Spalten sind: Kommunikationsbeziehung, Eingabe, Ausgabe.

***&lt;Diagramm und/oder Tabelle>***

***&lt;optional: Erläuterung der externen fachlichen Schnittstellen>***

### 3.2 Technischer Kontext

**Inhalt**

Technische Schnittstellen (Kanäle, Übertragungsmedien) zwischen dem System und seiner Umwelt.
Zusätzlich eine Erklärung (_mapping_), welche fachlichen Ein- und Ausgaben über welche technischen Kanäle fließen.

**Motivation**

Viele Stakeholder treffen Architekturentscheidungen auf Basis der technischen Schnittstellen des Systems zu seinem Kontext.

Insbesondere bei der Entwicklung von Infrastruktur oder Hardware sind diese technischen Schnittstellen durchaus entscheidend.

**Form**

Beispielsweise UML Deployment-Diagramme mit den Kanälen zu Nachbarsystemen, begleitet von einer Tabelle, die Kanäle auf Ein-/Ausgaben abbildet.

***&lt;Diagramm oder Tabelle>***

***&lt;optional: Erläuterung der externen technischen Schnittstellen>***

***&lt;Mapping fachliche auf technische Schnittstellen>***

## 4. Lösungsstrategie

**Inhalt**

Kurzer Überblick über die grundlegenden Entscheidungen und Lösungsansätze, die Entwurf und Implementierung des Systems prägen.
Hierzu gehören:

* Technologieentscheidungen
* Entscheidungen über die Top-Level-Zerlegung des Systems, beispielsweise die Verwendung gesamthaft prägender Entwurfs- oder Architekturmuster,
* Entscheidungen zur Erreichung der wichtigsten Qualitätsanforderungen sowie
* relevante organisatorische Entscheidungen, beispielsweise für bestimmte Entwicklungsprozesse oder Delegation bestimmter Aufgaben an andere Stakeholder.

**Motivation**

Diese wichtigen Entscheidungen bilden wesentliche „Eckpfeiler“ der Architektur.
Von ihnen hängen viele weitere Entscheidungen oder Implementierungsregeln ab.

**Form**

Fassen Sie die zentralen Entwurfsentscheidungen **kurz** zusammen.
Motivieren Sie, ausgehend von Aufgabenstellung, Qualitätszielen und Randbedingungen, was Sie entschieden haben und warum Sie so entschieden haben.
Vermeiden Sie redundante Beschreibungen und verweisen Sie eher auf weitere Ausführungen in Folgeabschnitten.

Siehe [Lösungsstrategie](https://docs.arc42.org/section-4/) in der online-Dokumentation (auf Englisch!).

## 5. Bausteinsicht

**Inhalt**

Die Bausteinsicht zeigt die statische Zerlegung des Systems in Bausteine (Module, Komponenten, Subsysteme, Klassen, Schnittstellen, Pakete, Bibliotheken, Frameworks, Schichten, Partitionen, Tiers, Funktionen, Makros, Operationen, Datenstrukturen, ...) sowie deren Abhängigkeiten (Beziehungen, Assoziationen, ...)

Diese Sicht sollte in jeder Architekturdokumentation vorhanden sein.
In der Analogie zum Hausbau bildet die Bausteinsicht den _Grundrissplan_.

**Motivation**

Behalten Sie den Überblick über den Quellcode, indem Sie die statische Struktur des Systems durch Abstraktion verständlich machen.

Damit ermöglichen Sie Kommunikation auf abstrakterer Ebene, ohne zu viele Implementierungsdetails offenlegen zu müssen.

**Form**

Die Bausteinsicht ist eine hierarchische Sammlung von Blackboxen und Whiteboxen (siehe Abbildung unten) und deren Beschreibungen.

!["Hierarchie in der Bausteinsicht"](05_building_blocks-DE.png)

**Ebene 1** ist die Whitebox-Beschreibung des Gesamtsystems, zusammen mit Blackbox-Beschreibungen der darin enthaltenen Bausteine.

**Ebene 2** zoomt in einige Bausteine der Ebene 1 hinein.
Sie enthält somit die Whitebox-Beschreibungen ausgewählter Bausteine der Ebene 1, jeweils zusammen mit Blackbox-Beschreibungen darin enthaltener Bausteine.

**Ebene 3** zoomt in einige Bausteine der Ebene 2 hinein, usw.

Siehe [Bausteinsicht](https://docs.arc42.org/section-5/) in der online-Dokumentation (auf Englisch!).

### 5.1 Whitebox Gesamtsystem

An dieser Stelle beschreiben Sie die Zerlegung des Gesamtsystems anhand des nachfolgenden Whitebox-Templates.
Dieses enthält:

* Ein Übersichtsdiagramm
* die Begründung dieser Zerlegung
* Blackbox-Beschreibungen der hier enthaltenen Bausteine.
Dafür haben Sie verschiedene Optionen:
  * in _einer_ Tabelle, gibt einen kurzen und pragmatischen Überblick über die enthaltenen Bausteine sowie deren Schnittstellen.
  * als Liste von Blackbox-Beschreibungen der Bausteine, gemäß dem Blackbox-Template (siehe unten).
  Diese Liste können Sie, je nach Werkzeug, etwa in Form von Unterkapiteln (Text), Unter-Seiten (Wiki) oder geschachtelten Elementen (Modellierungswerkzeug) darstellen.
* (optional:) wichtige Schnittstellen, die nicht bereits im Blackbox-Template eines der Bausteine erläutert werden, aber für das Verständnis der Whitebox von zentraler Bedeutung sind.
Aufgrund der vielfältigen Möglichkeiten oder Ausprägungen von Schnittstellen geben wir hierzu kein weiteres Template vor.
Im schlimmsten Fall müssen Sie Syntax, Semantik, Protokolle, Fehlerverhalten, Restriktionen, Versionen, Qualitätseigenschaften, notwendige Kompatibilitäten und vieles mehr spezifizieren oder beschreiben.
Im besten Fall kommen Sie mit Beispielen oder einfachen Signaturen zurecht.

_***&lt;Übersichtsdiagramm>***_

* **Begründung**\
_&lt;Erläuternder Text>_
* **Enthaltene Bausteine**\
_&lt;Beschreibung der enthaltenen Bausteine (Blackboxen)>_
* **Wichtige Schnittstellen**\
_&lt;Beschreibung wichtiger Schnittstellen>_

Hier folgen jetzt Erläuterungen zu Blackboxen der Ebene 1.

Falls Sie die tabellarische Beschreibung wählen, so werden Blackboxen darin nur mit Name und Verantwortung nach folgendem Muster beschrieben:

|     |     |
| --- | --- |
| ***Name*** | ***Verantwortung*** |
| _&lt;Blackbox 1>_ |  _&lt;Text>_ |
| _&lt;Blackbox 2>_ |  _&lt;Text>_ |

Falls Sie die ausführliche Liste von Blackbox-Beschreibungen wählen, beschreiben Sie jede wichtige Blackbox in einem eigenen Blackbox-Template.
Dessen Überschrift ist jeweils der Namen dieser Blackbox.

#### 5.1.1 <Name Blackbox 1>

Beschreiben Sie die &lt;Blackbox 1> anhand des folgenden Blackbox-Templates:

* Zweck/Verantwortung
* Schnittstelle(n), sofern diese nicht als eigenständige Beschreibungen herausgezogen sind.
Hierzu gehören eventuell auch Qualitäts- und Leistungsmerkmale dieser Schnittstelle.
* (Optional) Qualitäts-/Leistungsmerkmale der Blackbox, beispielsweise Verfügbarkeit, Laufzeitverhalten o. Ä.
* (Optional) Ablageort/Datei(en)
* (Optional) Erfüllte Anforderungen, falls Sie Traceability zu Anforderungen benötigen.
* (Optional) Offene Punkte/Probleme/Risiken

_&lt;Zweck/Verantwortung>_

_&lt;Schnittstelle(n)>_

_&lt;(Optional) Qualitäts-/Leistungsmerkmale>_

_&lt;(Optional) Ablageort/Datei(en)>_

_&lt;(Optional) Erfüllte Anforderungen>_

_&lt;(optional) Offene Punkte/Probleme/Risiken>_

#### 5.1.2 <Name Blackbox 2>

_&lt;Blackbox-Template>_

#### 5.1.n <Name Blackbox n>

_&lt;Blackbox-Template>_

#### 5.1.4 <Name Schnittstelle 1>

...

#### 5.1.m <Name Schnittstelle m>

### 5.2 Ebene 2

Beschreiben Sie den inneren Aufbau (einiger) Bausteine aus Ebene 1 als Whitebox.

Welche Bausteine Ihres Systems Sie hier beschreiben, müssen Sie selbst entscheiden.
Bitte stellen Sie dabei Relevanz vor Vollständigkeit.
Skizzieren Sie wichtige, überraschende, riskante, komplexe oder besonders volatile Bausteine.
Normale, einfache oder standardisierte Teile sollten Sie weglassen.

#### 5.2.1 Whitebox _<Baustein 1>_

...zeigt das Innenleben von _Baustein 1_.

_&lt;Whitebox-Template>_

#### 5.2.2 Whitebox _<Baustein 2>_

_&lt;Whitebox-Template>_

...

#### 5.2.m Whitebox _<Baustein m>_

_&lt;Whitebox-Template>_

### 5.3 Ebene 3

Beschreiben Sie den inneren Aufbau (einiger) Bausteine aus Ebene 2 als Whitebox.

Bei tieferen Gliederungen der Architektur kopieren Sie diesen Teil von arc42 für die weiteren Ebenen.

#### 5.3.1 Whitebox <_Baustein x.1_>

...zeigt das Innenleben von _Baustein x.1_.

_&lt;Whitebox-Template>_

#### 5.3.2 Whitebox <_Baustein x.2_>

_&lt;Whitebox-Template>_

#### 5.3.3 Whitebox <_Baustein y.1_>

_&lt;Whitebox-Template>_

## 6. Laufzeitsicht

**Inhalt**

Diese Sicht erklärt konkrete Abläufe und Beziehungen zwischen Bausteinen in Form von Szenarien aus den folgenden Bereichen:

* Wichtige Abläufe oder _Features_:
Wie führen die Bausteine der Architektur die wichtigsten Abläufe durch?
* Interaktionen an kritischen externen Schnittstellen:
Wie arbeiten Bausteine mit Nutzern und Nachbarsystemen zusammen?
* Betrieb und Administration: Inbetriebnahme, Start, Stop.
* Fehler- und Ausnahmeszenarien

Anmerkung:
Das Kriterium für die Auswahl der möglichen Szenarien (d.h. Abläufe) des Systems ist deren Architekturrelevanz.
Es geht nicht darum, möglichst viele Abläufe darzustellen, sondern eine angemessene Auswahl zu dokumentieren.

**Motivation**

Sie sollten verstehen, wie (Instanzen von) Bausteine(n) Ihres Systems ihre jeweiligen Aufgaben erfüllen und zur Laufzeit miteinander kommunizieren.

Nutzen Sie diese Szenarien in der Dokumentation hauptsächlich für eine verständlichere Kommunikation mit denjenigen Stakeholdern, die die statischen Modelle (z.B. Bausteinsicht, Verteilungssicht) weniger verständlich finden.

**Form**

Für die Beschreibung von Szenarien gibt es zahlreiche Ausdrucksmöglichkeiten.
Nutzen Sie beispielsweise:

* Nummerierte Schrittfolgen oder Aufzählungen in Umgangssprache
* Aktivitäts- oder Flussdiagramme
* Sequenzdiagramme
* BPMN (Geschäftsprozessmodell und -notation) oder EPKs (Ereignis-Prozessketten)
* Zustandsautomaten
* ...

Siehe [Laufzeitsicht](https://docs.arc42.org/section-6/) in der online-Dokumentation (auf Englisch!).

### 6.1 _<Bezeichnung Laufzeitszenario 1>_

* &lt;hier Laufzeitdiagramm oder Ablaufbeschreibung einfügen>
* &lt;hier Besonderheiten bei dem Zusammenspiel der Bausteine in diesem Szenario erläutern>

### 6.2 _<Bezeichnung Laufzeitszenario 2>_

...

### 6.3 _<Bezeichnung Laufzeitszenario n>_

...
## 7. Verteilungssicht

**Inhalt**

Die Verteilungssicht beschreibt:

1. die technische Infrastruktur, auf der Ihr System ausgeführt wird, mit Infrastrukturelementen wie Standorten, Umgebungen, Rechnern, Prozessoren, Kanälen und Netztopologien sowie sonstigen Bestandteilen, und
2. die Abbildung von (Software-)Bausteinen auf diese Infrastruktur.

Häufig laufen Systeme in unterschiedlichen Umgebungen, beispielsweise Entwicklung-/Test- oder Produktionsumgebungen.
In solchen Fällen sollten Sie alle relevanten Umgebungen aufzeigen.

Nutzen Sie die Verteilungssicht insbesondere dann, wenn Ihre Software auf mehr als einem Rechner, Prozessor, Server oder Container abläuft oder Sie Ihre Hardware sogar selbst konstruieren.

Aus Softwaresicht genügt es, auf die Aspekte zu achten, die für die Softwareverteilung relevant sind.
Insbesondere bei der Hardwareentwicklung kann es notwendig sein, die Infrastruktur mit beliebigen Details zu beschreiben.

**Motivation**

Software läuft nicht ohne Infrastruktur.
Diese zugrundeliegende Infrastruktur beeinflusst Ihr System und/oder querschnittliche Lösungskonzepte, daher müssen Sie diese Infrastruktur kennen.

**Form**

Das oberste Verteilungsdiagramm könnte bereits in Ihrem technischen Kontext enthalten sein, mit Ihrer Infrastruktur als EINE Blackbox.
Jetzt zoomen Sie in diese Infrastruktur mit weiteren Verteilungsdiagrammen hinein:

* Die UML stellt mit Verteilungsdiagrammen (Deployment diagrams) eine Diagrammart zur Verfügung, um diese Sicht auszudrücken.
Nutzen Sie diese, evtl. auch geschachtelt, wenn Ihre Verteilungsstruktur es verlangt.
* Falls Ihre Infrastruktur-Stakeholder andere Diagrammarten bevorzugen, die beispielsweise Prozessoren und Kanäle zeigen, sind diese hier ebenfalls einsetzbar.

Siehe [Verteilungssicht](https://docs.arc42.org/section-7/) in der online-Dokumentation (auf Englisch!).

### 7.1 Infrastruktur Ebene 1

An dieser Stelle beschreiben Sie (als Kombination von Diagrammen mit Tabellen oder Texten):

* die Verteilung des Gesamtsystems auf mehrere Standorte, Umgebungen, Rechner, Prozessoren o. Ä., sowie die physischen Verbindungskanäle zwischen diesen,
* wichtige Begründungen für diese Verteilungsstruktur,
* Qualitäts- und/oder Leistungsmerkmale dieser Infrastruktur,
* Zuordnung von Softwareartefakten zu Bestandteilen der Infrastruktur

Für mehrere Umgebungen oder alternative Deployments kopieren Sie diesen Teil von arc42 für alle wichtigen Umgebungen/Varianten.

_***&lt;Übersichtsdiagramm>***_

* **Begründung**\
_&lt;Erläuternder Text>_
* **Qualitäts- und/oder Leistungsmerkmale**\
_&lt;Erläuternder Text>_
* **Zuordnung von Bausteinen zu Infrastruktur**\
_&lt;Beschreibung der Zuordnung>_

### 7.2 Infrastruktur Ebene 2

An dieser Stelle können Sie den inneren Aufbau (einiger) Infrastrukturelemente aus Ebene 1 beschreiben.

Für jedes Infrastrukturelement kopieren Sie die Struktur aus Ebene 1.

#### 7.2.1 _<Infrastrukturelement 1>_

_&lt;Diagramm + Erläuterungen>_

#### 7.2.2 _<Infrastrukturelement 2>_

_&lt;Diagramm + Erläuterungen>_

...

#### 7.2.3 _<Infrastrukturelement n>_

_&lt;Diagramm + Erläuterungen>_

## 8. Querschnittliche Konzepte

**Inhalt**

Dieser Abschnitt beschreibt übergreifende, prinzipielle Regelungen und Lösungsansätze, die an mehreren Stellen (=_querschnittlich_) relevant sind.

Solche Konzepte betreffen oft mehrere Bausteine.
Dazu können vielerlei Themen gehören, beispielsweise:

* Modelle, insbesondere fachliche Modelle
* Architektur- oder Entwurfsmuster
* Regeln für den konkreten Einsatz von Technologien
* prinzipielle -- meist technische -- Festlegungen übergreifender Art
* Implementierungsregeln

**Motivation**

Konzepte bilden die Grundlage für _konzeptionelle Integrität_ (Konsistenz, Homogenität) der Architektur und damit eine wesentliche Grundlage für die innere Qualität Ihrer Systeme.

Manche dieser Themen lassen sich nur schwer als Baustein in der Architektur unterbringen (z.B. das Thema „Sicherheit“).

**Form**

Kann vielfältig sein:

* Konzeptpapiere mit beliebiger Gliederung,
* übergreifende Modelle/Szenarien mit Notationen, die Sie auch in den Architektursichten nutzen,
* beispielhafte Implementierung speziell für technische Konzepte,
* Verweise auf „übliche“ Nutzung von Standard-Frameworks (beispielsweise die Nutzung von Hibernate als Object/Relational Mapper).

**Struktur**

Eine mögliche (nicht aber notwendige!) Untergliederung dieses Abschnittes könnte wie folgt aussehen (wobei die Zuordnung von Themen zu den Gruppen nicht immer eindeutig ist):

* Fachliche Konzepte
* User Experience (UX)
* Sicherheitskonzepte (Safety und Security)
* Architektur- und Entwurfsmuster
* Unter-der-Haube
* Entwicklungskonzepte
* Betriebskonzepte

!["Possible topics for crosscutting concepts"](08-Crosscutting-Concepts-Structure-DE.png)

Siehe [Querschnittliche Konzepte](https://docs.arc42.org/section-8/) in der online-Dokumentation (auf Englisch).

### 8.1 _<Konzept 1>_

_&lt;Erklärung>_

### 8.2 _<Konzept 2>_

_&lt;Erklärung>_

...

### 8.3 _<Konzept n>_

_&lt;Erklärung>_

## 9. Architekturentscheidungen

**Inhalt**

Wichtige, teure, große oder riskante Architektur- oder Entwurfsentscheidungen inklusive der jeweiligen Begründungen.
Mit "Entscheidungen" meinen wir hier die Auswahl einer von mehreren Alternativen unter vorgegebenen Kriterien.

Wägen Sie ab, inwiefern Sie Entscheidungen hier zentral beschreiben, oder wo eine lokale Beschreibung (z.B. in der Whitebox-Sicht von Bausteinen) sinnvoller ist.
Vermeiden Sie Redundanz.
Verweisen Sie evtl. auf Abschnitt 4, wo schon grundlegende strategische Entscheidungen beschrieben wurden.

**Motivation**

Stakeholder des Systems sollten wichtige Entscheidungen verstehen und nachvollziehen können.

**Form**

Verschiedene Möglichkeiten:

* ADR ([Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)) für jede wichtige Entscheidung
* Liste oder Tabelle, nach Wichtigkeit und Tragweite der Entscheidungen geordnet
* ausführlicher in Form einzelner Unterkapitel je Entscheidung

Siehe [Architekturentscheidungen](https://docs.arc42.org/section-9/) in der arc42 Dokumentation (auf Englisch!).
Dort finden Sie Links und Beispiele zum Thema ADR.

## 10. Qualitätsanforderungen

**Inhalt**

Dieser Abschnitt enthält möglichst alle Qualitätsanforderungen als Qualitätsbaum mit Szenarien.
Die wichtigsten davon haben Sie bereits in Abschnitt 1.2 (Qualitätsziele) hervorgehoben.

Nehmen Sie hier auch Qualitätsanforderungen geringerer Priorität auf, deren Nichteinhaltung oder -erreichung geringe Risiken birgt.

**Motivation**

Weil Qualitätsanforderungen die Architekturentscheidungen oft maßgeblich beeinflussen, sollten Sie die für Ihre Stakeholder relevanten Qualitätsanforderungen kennen, möglichst konkret und operationalisiert.

Siehe [Qualitätsanforderungen](https://docs.arc42.org/section-10/) in der online-Dokumentation (auf Englisch!).

### 10.1 Qualitätsbaum

**Inhalt**

Der Qualitätsbaum (à la ATAM) mit Qualitätsszenarien an den Blättern.

**Motivation**

Die mit Prioritäten versehene Baumstruktur gibt Überblick über die -- oftmals zahlreichen -- Qualitätsanforderungen.

**Form**

* Baumartige Verfeinerung des Begriffes „Qualität“, mit „Qualität“ oder „Nützlichkeit“ als Wurzel.
* Mindmap mit Qualitätsoberbegriffen als Hauptzweige

In jedem Fall sollten Sie hier Verweise auf die Qualitätsszenarien des folgenden Abschnittes aufnehmen.

### 10.2 Qualitätsszenarien

**Inhalt**

Konkretisierung der (in der Praxis oftmals vagen oder impliziten) Qualitätsanforderungen durch (Qualitäts-)Szenarien.

Diese Szenarien beschreiben, was beim Eintreffen eines Stimulus auf ein System in bestimmten Situationen geschieht.

Wesentlich sind zwei Arten von Szenarien:

* Nutzungsszenarien (auch bekannt als Anwendungs- oder Anwendungsfallszenarien) beschreiben, wie das System zur Laufzeit auf einen bestimmten Auslöser reagieren soll.
Hierunter fallen auch Szenarien zur Beschreibung von Effizienz oder Performance.
Beispiel: Das System beantwortet eine Benutzeranfrage innerhalb einer Sekunde.
* Änderungsszenarien beschreiben eine Modifikation des Systems oder seiner unmittelbaren Umgebung.
Beispiel: Eine zusätzliche Funktionalität wird implementiert oder die Anforderung an ein Qualitätsmerkmal ändert sich.

**Motivation**

Szenarien operationalisieren Qualitätsanforderungen und machen deren Erfüllung mess- oder entscheidbar.

Insbesondere wenn Sie die Qualität Ihrer Architektur mit Methoden wie ATAM überprüfen wollen, bedürfen die in Abschnitt 1.2 genannten Qualitätsziele einer weiteren Präzisierung bis auf die Ebene von diskutierbaren und nachprüfbaren Szenarien.

**Form**

Entweder tabellarisch oder als Freitext.

## 11. Risiken und technische Schulden

**Inhalt**

Eine nach Prioritäten geordnete Liste der erkannten Architekturrisiken und/oder technischen Schulden.

**Motivation**

"Risikomanagement ist Projektmanagement für Erwachsene."
-- Tim Lister, Atlantic Systems Guild

Unter diesem Motto sollten Sie Architekturrisiken und/oder technische Schulden gezielt ermitteln, bewerten und Ihren Management-Stakeholdern (z.B. Projektleitung, Product-Owner) transparent machen.

**Form**

Liste oder Tabelle von Risiken und/oder technischen Schulden, eventuell mit vorgeschlagenen Maßnahmen zur Risikovermeidung, Risikominimierung oder dem Abbau der technischen Schulden.

Siehe [Risiken und technische Schulden](https://docs.arc42.org/section-11/) in der online-Dokumentation (auf Englisch!).

## 12. Glossar

**Inhalt**

Die wesentlichen fachlichen und technischen Begriffe, die Stakeholder im Zusammenhang mit dem System verwenden.

Nutzen Sie das Glossar ebenfalls als Übersetzungsreferenz, falls Sie in mehrsprachigen Teams arbeiten.

**Motivation**

Sie sollten relevante Begriffe klar definieren, so dass alle Beteiligten

* diese Begriffe identisch verstehen, und
* vermeiden, mehrere Begriffe für die gleiche Sache zu haben.

**Form**

* Zweispaltige Tabelle mit &lt;Begriff> und &lt;Definition>
* Eventuell weitere Spalten mit Übersetzungen, falls notwendig.

Siehe [Glossar](https://docs.arc42.org/section-12/) in der online-Dokumentation (auf Englisch!).

| Begriff | Definition |
| --- | --- |
| &lt;Begriff-1> | &lt;Definition-1> |
| &lt;Begriff-2 | &lt;Definition-2> |
