---
title: Ökonomisch attraktive Argumente für gute Softwarearchitektur
subtitle: Barrierefreiheit für Chatbots
author: tamara-cook
publishedTime: '2023-11-28T16:26'
---

Es ist in der IT nicht immer einfach, technisch sinnvolle Maßnahmen dem Management gegenüber schmackhaft zu machen.
Wenn sich die Entwickler mehr Architektur wünschen, können Außenstehende damit noch nicht viel anfangen und die Wünsche verlaufen im Sande.
Diese Maßnahmen entfalten ihre Wirkung erst zeitverzögert und die Argumente sind für Laien schwer nachzuvollziehen, für Investoren sowieso.
Entscheidungsträger benötigen Argumente, die eine Maßnahme als wirtschaftlich tragfähig und vielversprechend erscheinen lassen.

Auch durch meine Behinderung bin ich immer an Argumenten und Ansätzen interessiert, die Umsetzung von Barrierefreiheit allgemein profitabel machen.
Wenn sie schon mit dem strategischen Ziel _Barrierefreiheit_ für bestimmte Personengruppen geplant und umgesetzt werden,
kommen meistens Nebenkrater dabei heraus, die schnell wieder vernachlässigt werden, wenn gerade keine Charity benötigt wird.
Deswegen muss Barrierefreiheit eher etwas sein, das als Bonus mitgenommen werden kann.
Es muss Teil von etwas sein, das wirtschaftlich tragfähig und attraktiv klingt.
Apple hat z.B. begonnen, einen Hörgerätemodus in seine Earpods zu integrieren.
Man mag von der Firma halten, was man will,
aber wahrscheinlich werden gerade in den USA über diesen Weg mehr Menschen an eine Hörhilfe kommen als über den speziellen Hilfsmittelvertrieb.

- Das Produkt skaliert besser als spezielle Hilfsmittel, der Preis sinkt
- Das Stigma wird abgebaut, Hörgeräte werden weniger uncool

## Architektur

Zurück zum Thema Architektur in der Software.
Vereinfacht meint Architektur, dass der Quellcode für z.B. eine App nicht chaotisch zusammengewürfelt ist, sondern nach bestimmten Regeln strukturiert ist.
Zielsetzung ist, die Qualität des Codes zu erhalten und das Projekt nachhaltig zu machen.
Ein solches Regelwerk zu definieren, umzusetzen und durchzuhalten ist mit einem gewissen Zusatzaufwand verbunden.
Die Vorteile sind aber nicht von der Hand zu weisen.

### Unabhängigkeit und Flexibilität

Gute Architektur zielt darauf ab, dass mit relativ wenig Aufwand ein Bestandteil durch etwas anderes ausgetauscht werden kann.
Wenn man z.B. eine Software von einem anderen Anbieter nutzt, sollte es kein großes Problem sein, diese Abhängigkeit auszutauschen.
Anbieter ändern z.B. manchmal ihre Lizenzbedingungen, deretwegen man den „Klotz am Bein“ wieder loswerden möchte.”
Außerdem werden so sukzessive Modernisierungen erleichtert.
Das gilt aber auch intern.
Sie würden wahrscheinlich auch nicht die Uhr aus Ihrem Backofen mit Ihrem Wecker verbinden, damit der Wecker keine eigene Uhr mehr braucht.
Auf den ersten Blick haben Sie eine Uhr gespart, aber Ihr Wecker ist vom Backofen abhängig geworden.

### Besseres Zusammenarbeiten und Langlebigkeit

Neue Mitarbeiter, die mit den Regeln vertraut sind, können sich schneller zurechtfinden und Code schreiben.
Viele Mitarbeiter können parallel zueinander Code entwickeln, der später zusammenpasst, denn sie folgen ja gemeinsamen Regeln.
Das bedeutet für Open Source auch, dass ein Projekt länger lebt und mehr Beiträge von Entwicklern erhält.
In Unternehmen wird damit die Fluktuation erleichtert.
Ein Projekt, das als chaotischer Knoten immer weitergewachsen ist, wird später kaum noch jemand durchdringen und weiterentwickeln.
Wenn der Hauptentwickler das Unternehmen verlässt, wird das Produkt einfach noch so lange in der Form verkauft, wie es sich eben verkaufen lässt.

### Barrierefreiheit

Eine gute Architektur macht es App-Entwicklern einfacher, ihre App möglichst barrierefrei zu gestalten.
Durch die einheitliche Struktur des Codes finden die Entwickler schneller die Stellen, wo sie die Verbesserungen vornehmen müssen.
Außerdem ist hier auch der Punkt der Unabhängigkeit hilfreich, weil leichter Komponenten durch geeignetere ersetzt werden können.

Ein wesentlicher Punkt ist hier auch die automatisierbarkeit bei Anwendungen.
Sehende Anwender sind es gewohnt, über die visuelle Oberfläche und Eingaben durch Maus und Tastatur mit einem Programm zu interagieren.
Mit einem Klick sagen sie z.B. „Öffne diese Datei“.
Hilfstechnologien nutzen aber bevorzugt Formen der Interaktion, die nicht auf der visuellen Ebene stattfinden, sondern eher mit Fernsteuerung vergleichbar sind.
Sie möchten den selben Befehl geben, ohne dafür klicken zu müssen oder gesehenes interpretieren zu müssen.
Für Menschen ist das z.B. via Sprachassistenz möglich, zumindest in gewissem Umfang.
Die Anwendung muss einen wohldefinierten Satz an Befehlen bereitstellen, auf die sie reagiert.
Wenn Anwendungen solche Fernsteuerungsmöglichkeiten auch für Hilfstechnologien bereitstellen, sind sie schon etwas barrierefreier.
Gute Architektur erleichtert diese Bereitstellung.

## Lohnt sich das?

Bisher klingt das alles zwar irgendwie sinnvoll und nachvollziehbar, aber nicht so richtig mitreißend und überzeugend.
Wir können aber gerade das Thema Barrierefreiheit mit einem neuen Hype-Thema verknüpfen, nämlich KI und Chatbots.
Ein Einsatzgebiet der neuen Generation von Chatbots ist die Ausführung von Arbeitsaufträgen am Computer.
Durch das neue Sprachmodell der Chatbots können Nutzer ihre Aufträge in natürlicher Sprache formulieren.
Es geht dabei weniger um generierte Kunst oder Texte, sondern um die repetitive Computerarbeit.
Der Auftrag könnte z.B. darin bestehen, einen Brief an einen bestimmten Personenkreis zu verfassen.
Der Chatbot könnte im Hintergrund die Dokumente erstellen und abschließend dem Nutzer zur inhaltlichen Überprüfung vorlegen.
Hierzu muss er im Hintergrund Software wie Office nutzen, um die Dokumente überhaupt erstellen zu können.
Diese Produktivanwendungen müssen die oben erwähnten Fernsteuerungen anbieten, damit der Chatbot nicht über die grafische Benutzeroberfläche arbeiten muss.
Die Office-Anwendungen müssen barrierefrei für Chatbots werden.

- Die KI kann schneller erlernen, wie sie gegebene Aufträge ausführen kann
- Die Nutzer werden nicht dadurch irritiert, dass die grafische Oberfläche sozusagen fremdgesteuert wird.
- Die Hersteller von Anwendungen haben einen starken Anreiz, Voraussetzungen für mehr Barrierefreiheit (Fernsteuerung) in ihren Anwendungen zu integrieren.

Die Idee von mehr Produktivität durch automatisierte Arbeitsabläufe ist keineswegs neu.
In Mac OS sind entsprechende Fernsteuerungsmöglichkeiten schon seit gut 20 Jahren integriert.
Es galt sogar eher als Qualitätsmerkmal, wenn Anwendungen Fernsteuerungsbefehle selbst auch anbieten.
Mit der Zeit geriet das Thema etwas in Vergessenheit.
Es erfordert eine gewisse Einarbeitung, bis man seine eigenen Arbeitsabläufe selbst analysieren und aus Fernsteuerungsbefehlen zusammenstellen kann.
Man muss sich genau überlegen, was man in welcher Reihenfolge tun würde und die Steuerungsbefehle heraussuchen.
Der qualitative Unterschied wäre heute, dass KI die Arbeitsabläufe anhand natürlicher Sprache selbst lernen und zusammenstellen könnte.
Außerdem können die KIs heute auch mit Fehlerfällen umgehen, etwas variieren und noch einmal versuchen.
Dieses Abfangen von Fehlern von Hand mit einzuprogrammieren ist relativ mühsam.
Die klassischen statischen Arbeitsabläufe bieten das nicht an und schlagen ggf. einfach fehl.
Die KI kann explorativ herausfinden, welche Zusammenstellung von Fernsteuerungsbefehlen zum Erfolg führt.
Das kann sie wesentlich schneller als ein Mensch es könnte.
Sie könnten heute theoretisch so arbeiten, als würden Sie einer technisch kompetenten Person Ihren Auftrag erklären.

## Fazit

Das Thema Automatisierung von Arbeitsabläufen könnte durch die neuen KI-Entwicklungen ein Revival erfahren.
Außerdem hätte gute Architektur in der Software endlich einmal einen Wettbewerbsvorteil, der sich gut verkaufen lässt.
