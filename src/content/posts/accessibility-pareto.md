---
title: Barrierefrei im Web nach dem Pareto-Prinzip
headline: Wie sich Barrierefreiheit einfach in den Entwicklungsalltag integrieren lässt
publishedTime: 2024-02-17
tags: [Accessibility]
---

Motivierte Softwareentwickler und Softwareunternehmen stehen irgendwann vor einer bestimmten Frage: Ist unser Produkt oder Web-Angebot barrierefrei?
Bevor sich ins Caos der teilweise abenteuerlichen technischen und juristischen Details gestürzt wird,
möchte ich hier eine pragmatische Grundstrategie zur Umsetzung von Barrierefreiheit vorstellen.
Sie soll dabei helfen, den Wald vor lauter Bäumen nicht aus den Augen zu verlieren und sich nicht von technischen und juristischen Details überwältigen zu lassen.
Außerdem möchte ich dazu beitragen, dass das Thema kein reines Politikthema bleibt
und auch praktisch arbeitende Leute sich etwas greifbares darunter vorstellen können.

## Masterfrage: Was sind Barrieren?

Barrieren sind Gegebenheiten, die systematisch Personengruppen daran hindern, ein Produkt oder Angebot zielführend zu nutzen.
Ziel sollte es sein, möglichst wenige Barrieren im eigenen Angebot zu haben.
So einfach ist es und darauf sollte man immer wieder zurückkommen.
Deswegen ist es sinnvoll, das Thema mehr im Zusammenhang mit Usability und Mensch-Maschine-Interaktion zu sehen, statt als politisches Spezialthema.
Beispiele für Barrieren könnten auch sein:

- Die eigenen Hände sind zu klein, um ein großes Küchengerät zu bedienen
- Der moderne Herd mit Touch Screen lässt sich nicht abschalten, weil man gerade schmierige Finger hat.
- Die Mikrowelle hat 30 Knöpfe und eine verschachtelte Menüführung statt zwei Reglern, was den Funktionsumfang nicht erhöht und Leute bei der Bedienung verwirrt.
- Ein Hilfetext über das Sicherheitsniveau von Authentifizierungsmethoden ist selbstreferentiell und erklärt nicht die praktischen Implikationen für den Nutzer.

Die Beispiele haben bewusst nichts mit Behinderung zu tun, um das Prinzip zu verdeutlichen.
Es geht darum, ein Produkt von Anfang an um seine Verwendung herum zu gestalten
und die Abläufe regelmäßig auf Pannen abzuklopfen, die bei der Nutzung auftreten können.
Der menschliche Faktor lässt sich dabei leider nicht ausklammern und man kann auch nicht schon im Voraus jede Panne antizipieren.
Durch ein solches iteratives Arbeiten lassen sich schon viele grobe Schnitzer intuitiv entschärfen.
Bei Software ist man sogar besonders im Vorteil, weil man Verbesserungen schnell und gezielt umsetzen kann, sofern es die organisatorischen Bedingungen ermöglichen.

## Keine Angst vor Subjektivität

Objektivität ist schon eine feine Sache, eine echte Wunderwaffe.
Keine Streitereien und Machtkämpfe, kein „einerseits, andererseits“, kein sich persönlich rechtfertigen müssen, kein „erst alles ausdiskutieren“.
Das Leben wäre so einfach, wenn Objektivität alle probleme lösen könnte.
Objektivität ist zunächst aber nur eines der drei prominentesten Qualitätsmerkmale (Gütekriterien) für eine Messung.
Sie besagt nur, dass das Messergebnis unabhängig davon ist, wer gemessen hat; nicht mehr und nicht weniger.
So kann ich z.B. ganz objektiv und präzise die Anzahl von Codezeilen in einem Projekt angeben.
Mit der Präzision hätte ich sogar schon das zweite Gütekriterium (Reliabilität) erfüllt.
Ob es aber ein sinnvolles Maß für die Größe eines Projektes ist, kann ich allein aus der Objektivität und Reliabilität nicht ableiten.
Als Beobachter kann ich versuchen, meine Messungen möglichst objektiv zu gestalten und damit von mir unabhängig zu machen, u.A.:

- Durchführung von Messungen kollegiumsübergreifend standardisieren
- Ablesung von Messergebnissen möglichst barrierefrei gestalten
- Vorher schon im Team abstimmen, welche hypothetischen Ergebnisse zu welchen Interpretationen führen würden

Ein gelegentliches Missverständnis ist, auch vom Messgegenstand Objektivität zu verlangen und nicht nur von der Messung.
Objektive Definitionen für Barrieren erleichtern zwar die juristische Argumentation, aber sie täuschen darüber hinweg, dass Barrieren etwas subjektives sind.
Barrieren sind keine so unabhängigen Tatsachen wie 2 + 2 = 4, sondern definieren sich abhängig von menschlichen physischen und mentalen Fähigkeiten.
Vor allem letzteres bringt viel Subjektivität ein, z.B. wenn neue Nutzergenerationen Fähigkeiten erlernen, die anderen fehlen.
Wir haben z.B. gelernt, in Filmen und Hörspielen die Schnitttechnik der Ellipse (Zeitsprung) richtig zu interpretieren.
Wir wissen, dass die Ellipse ein unwichtiges stattfindendes Stück Handlung z.B. durch Musik markiert.
Das ist aber nicht universell, sondern Sehgewohnheit, und für die Angehörigen mancher Kulturen wäre ein solches Stilmittel theoretisch eine Barriere.
In der Praxis wäre es trotzdem kein Hinderungsgrund, den Film anzuschauen, und somit von weniger hoher Priorität.
Ich will nur betonen, dass es letztendlich von den Menschen (Subjekten) selbst abhängt, womit sie zurechtkommen und womit nicht.

## Vom Subjekt zur Beobachtung

Wir wollen die Fähigkeit von Menschen messen, ein Produkt oder Angebot zielführend zu nutzen.
Die Prüfregeln automatisierter Test-Tools für Barrierefreiheit messen im Grunde nicht diese Fähigkeit,
sondern sind eher eine Sammlung von Präventivmaßnahmen zur Reduktion der Wahrscheinlichkeit für Pannen.
Das ist schon ein guter Anfang, aber noch keine Messung.
Bei einer Bildungsreform mit ganz vielen tollen Maßnahmen würde das dem Argument entsprechen, man müsse diese Intervention aufgrund von Plausibilität nicht testen.
Es müsse doch funktionieren, weil die Bausteine alle bekannt sind.
Wohlwollend können solche Regeln als Heuristiken oder KOrrelate gelten,
so wie man auch z.B. die Intelligenz (nicht altersnormiert) einer Person anhand ihrer Schuhgröße einschätzen kann.
Bei Themen wie Risikobereitschaft besteht ein erhöhter Bedarf nach solchen Heuristiken (Schufa, Forensik), aber das sollte wirklich nur die Notlösung sein.

Wenn man um das Subjekt nicht herum kommt, wie kann man Subjektives dann messbar machen?
Die Psychologie besteht zu großen Teilen aus dem Versuch, subjektives mit möglichst objektiven Methoden zu messen.
Es ist nicht einfach, aber man kann es nach 150 Jahren auch nicht gerade als Neuland bezeichnen.
Um Eigenschaften wie Intelligenz, Introversion oder Lesekompetenz zu messen, bestehen grob die folgenden Möglichkeiten,
mitlesende Psychologen mögen mir methodische Vereinfachungen verzeihen:

1. Definieren, wie sich diese Eigenschaften auf das Verhalten der Person auswirken sollte und anschließend unter kontrollierten Bedingungen ihr Verhalten beobachten
2. Die Person um eine introspektive Selbsteinschätzung bitten, ggf. andere um eine Fremdeinschätzung
3. Telepathie erfinden oder Menschen in den Scanner legen

## Verhaltensbeobachtung

Die Verhaltensbeobachtung hat sich als robuster Kompromiss bewährt und ich sehe sie als den besten Ansatz für Usability-Fragen.
Für die Messung von Fähigkeiten ist sie geradezu prädestiniert; so sehr, dass die probabilistische Testtheorie (IRT) immer von Fähigkeit spricht,
auch wenn es nicht um Fähigkeit im alltäglichen Sinne geht.
Bei der Gestaltung von Verhaltensbeobachtungen haben wir zwei Freiheitsgrade:

1. Was beim Beobachten erfasst wird: alles (offene vB) vs. bestimmte vorher festgelegte Ereignisse (geschlossene VB)
2. Wie stark die Situation von uns vorgegeben wird (Strukturiertheit)

Wenn wir irgendwo spontan einer Person ein Produkt in die Hand drücken und sagen: „Probier mal irgendwas damit aus und erzähl was darüber“,
wäre das eine offene und unstrukturierte Verhaltensbeobachtung.
Diese Variante ergibt nur Sinn, wenn man sich noch an das Produkt herantasten muss und Anregungen braucht.
Es ist sehr schwierig, aus den uneinheitlichen Nutzerinteraktionen und Berichten etwas zu lernen.
Ein wichtiger Schritt, um die Ergebnisse brauchbarer zu machen, ist die Strukturierung der Situation.
Um eine strukturierte Situation zu erschaffen, müssen wir uns vorher überlegen, wie und für welche Aufgaben unser Produkt typischerweise genutzt werden soll,
z.B. Überweisung tätigen, Termine buchen oder Artikel recherchieren.
Wir können die Personen dann in einer kontrollierten Umgebung bitten, solche Aufgaben anhand von Beispielen durchzuführen.
Damit lösen wir das Problem, dass Personen unterschiedlich neugierig und geübt sind und sorgen für eine gleichmäßige Abdeckung der Workflows bei der Produktnutzung.
Offene Beobachtungen können hier gut durch Server-Logs und andere Technologien unterstützt werden, die normalerweise für Tracking und Prefetching zum Einsatz kommen.
Die Analyse solcher Protokolle ist relativ aufwändig, auch wenn die Grundlage zumindest stabiler ist und die Verläufe somit vergleichbarer.

Wenn wir mehr an einem Rundumschlag interessiert sind, ob Nutzer mit dem Angebot zurechtkommen, können wir eine geschlossene VB durchführen.
Dafür müssen wir uns beobachtbare Kriterien überlegen, an denen wir festmachen, ob die Person die Aufgabe erfolgreich bewältigt hat oder eben nicht.
Die Person könnte uns z.B. den exemplarischen Überweisungsbeleg zuschicken oder uns mitteilen, wie viele Artikel es zu einem gegebenen Stichwort gibt.
Denkbar wäre auch die Erfassung der Bearbeitungsdauer.
Wir registrieren dann nicht mehr den ganzen Nutzungsverlauf, sondern nur diese Ereignisse und ihren Zeitpunkt.
Damit verlieren wir zwar evtl. interessante Hinweise, können aber relativ gut skalierend eine hohe Zahl an Beobachtungen durchführen.
Besonders wenn die Personen keine geschulten Tester sind, ist eine größere und diversifizierte Stichprobe sinnvoll.

## Wo bleibt das Pareto-Prinzip?

Wer bis hier durchgehalten hat, möchte jetzt vermutlich wissen, wie diese aufwändigen Methoden die Umsetzung von Barrierefreiheit erleichtern sollen.
Eine strukturierte geschlossene Verhaltensbeobachtung mit einer repräsentativen Stichprobe ist tatsächlich etwas aufwändig.
Dennoch lohnt es sich, regelmäßig Lite-Versionen der Methode durchzuführen und die Vorschläge des automatisierten Validators etwas gelassener zu nehmen.

- In einem diversen Arbeitsumfeld können spontan offene strukturierte VBs durchgeführt werden (Aufgabe stellen und zuschauen).
  Ein divers zusammengesetzter Betrieb kann schon intern viele grobe Fehler aufdecken.
- Geübte Tester im Betrieb können offene unstrukturierte Testungen durchführen und ihr systematisches Vorgehen dokumentieren.
  Das ist besonders nützlich zum Aufspüren von Details.
- Strukturierte geschlossene VBs sind auch mit ungeübten Personen durchführbar.
  Für die Suche nach Testpersonen könnte man sich z.B. auch in speziellen Mailinglisten oder Facebook-Gruppen umschauen, wo sich die gesuchten Zielgruppen austauschen.

## Feedback muss sich für beide Seiten gut anfühlen

Wenn um das Angebot herum bereits nach außen hin eine lebendige Feedback-Kultur etabliert ist (in erfolgreichen Open-Source-Projekten üblich),
können sich dort auch Behinderte besser konstruktiv einbringen.
Ohne diese Voraussetzung ist es mehr eine Beschwerde und weniger ein konstruktives Feedback, dementsprechend ist auch der Umgangston.
Ein formaler Feedback-Prozess, der einen erst mal an die Schlichtungsstelle weiterverweist, bringt auch den Entwicklern wenig Erkenntnisgewinn.
Feedback muss einfach sein und den Eindruck vermitteln, dass es auch an der richtigen Stelle ankommt und nicht im formalen Sande verläuft.
So entstehen die nörgeligen Behinderten.
Wer sich nicht willkommen fühlt, hat schnell keine Lust mehr, zur Verbesserung des Produkts beizutragen.
Es gibt auch kleine Softwareunternehmen, die beides (Barrierefreiheit und Feedback) vorbildlich umgesetzt haben, z.B. mit dem Programm [Audio Hijack].
Das Tool würde ich immer wieder kaufen.

[audio hijack]: https://rogueamoeba.com/audiohijack/
