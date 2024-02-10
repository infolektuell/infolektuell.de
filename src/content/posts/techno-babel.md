---
title: Techno-Babel
headline: Warum sich eingedeutschte Tech-Inhalte nur selten lohnen
tags: [Softwareentwicklung]
publishedTime: 2024-02-11
---

Beim Einstieg ins Programmieren gibt es eine etwas einschüchternde Eigenheit:
Ein großteil der im Internet verfügbaren Inhalte ist auf Englisch, und das ist meistens gut so.
Im Bereich Software, Programmierung und verwandte technische Themen, speziell im Bereich Open Source,
spricht wenig dafür und vieles dagegen, Inhalte online in übersetzter Form anzubieten.
Damit ist natürlich keineswegs gemeint, dass Software nicht lokalisiert werden soll.
Mit den Inhalten meine ich die verschiedenen Formen von Literatur und Medien rund ums Thema, u.A.:

- Dokumentation: Bedienungsanleitungen für konkrete Software
- Öffentlich einsehbare Diskussionen von Entwicklern über ihre konkreten Problemstellungen, Fragen und Antworten
- Tutorials: Artikel, Blogbeiträge oder Videos, die die Umsetzung einer vorgegebenen Zielsetzung anleiten
- Literatur zum Aufbau von Konzepten und Grundlagen aus der Informatik
- Einordnungen, Analysen, Überblicksartikel: Hier steht die direkte Anwendung weniger im Mittelpunkt, sondern eher das Warum oder die Abwägung von Alternativen.

## Ein Beispiel

Zur Erstellung und Pflege meiner Website nutze ich [Astro].
Astro kann mit mehrsprachigen Seiten (i18n) umgehen.
Die Projektseite und Dokumentation von Astro basiert ebenfalls auf Astro und wurde in verschiedene Sprachen übersetzt.
Für Autoren-Tools und textSatzsysteme ist es naheliegend, für die eigene Dokumentation verwendet zu werden[^texbook].
Die Qualität der Übersetzung ist relativ hoch und ich gehe davon aus, dass die Motivation hauptsächlich darin besteht, i18n zu demonstrieren und inklusiv zu sein.
Dennoch halte ich das Vorgehen für unreflektiert und sehe darin kaum Nutzen und hauptsächlich Schadenspotential.

Da ich Astro insgesamt sehr positiv bewerte, habe ich mir die Mühe gemacht und im Diskussionsbereich einen [Beitrag] zum Thema geschrieben.
Der Beitrag richtet sich an die Entwickler, aber das Thema Sprache und Tech erschien mir auch interessant genug für meine Zielgruppen.
Hier sind also meine Argumente, warum wir eingedeutschte Tech-Docs kaum brauchen.

## Globalisierung

Bei den meisten Produktionsgütern haben wir schon durch die Produktionskosten und den Aufwand eine begrenzte Reichweite.
Dadurch haben Unternehmen zu einem gewissen Ausmaß die Möglichkeit, voneinander unabhängig in ihrer Region etwas zu produzieren und auszuliefern.
Software kann hingegen nach ihrer Entwicklung beliebig oft reproduziert und überall in der Welt verteilt werden.
Diesen Text schreibe ich gerade mit einem Open-Source-Programm, das von Jetbrains, einer russischen Software-Firma, entwickelt und vertrieben wird.
Wenn wir nicht nur passiv beliefert werden, sondern auch aktiv mitgestalten wollen, bleibt nur Open Source als Lösung.

Bei der Entwicklung von Open-Source-Projekten bringen sich Menschen aus allen möglichen Teilen der Welt aktiv ein.
Selbst wenn man nicht programmiert, kann man z.B. Verbesserungsvorschläge einreichen oder auf Probleme aufmerksam machen.
Ja, das habe ich bei Jetbrains schon gelegentlich erfolgreich getan.
Dieser demokratische Prozess würde deutlich ineffizienter und die Gemeinschaft würde fragmentieren, wenn nicht eine gemeinsame Sprache genutzt würde.
Eine gemeinsame Sprache schafft Freiheit, Teilhabe und Verständigung, und auch Inklusion.

## Tempo

Die Entwicklungen gehen schnell voran und bis aktuelle Inhalte eingedeutscht wurden, hat sich das Rad schon wieder weitergedreht und die Übersetzungen sind veraltet.
Es kann natürlich eine bewusste Entscheidung sein, viele Tech-Hypes auszulassen und hauptsächlich einschlägige Zeitschriften in der eigenen Sprache zu lesen.
Das bietet den Vorteil einer distanziert beobachtenden Perspektive mit mehr Raum für gesellschaftliche Themen und Zusammenhänge.
Wenn ein Thema einmal interessant genug klingt, braucht man doch wieder Englisch, um sozusagen an die Primärquellen zu gehen.
Übersetzungs-KI kann inzwischen ebenfalls spontan beim Übersetzen unterstützen.

## Suchmaschinen, Schwarmintelligenz und Auslese

Bei der Suche in der eigenen Sprache ist die Ausschussquote in den Suchergebnissen deutlich höher, weil nicht so viel Schwarmintelligenz und Auslese einfließen.
Bei den meisten Fragen zu Programmierthemen geht es nicht um Meinungen, sondern um objektive Antworten.
Es lässt sich leicht verifizieren, ob ein Lösungsvorschlag für eine Aufgabe funktioniert oder eben nicht, und das Funktionieren ist unabhängig von der Sprache.
Auf Englisch sind insgesamt mehr Entwickler und Nutzer unterwegs als in einer einzelnen anderen Zielsprache.
Die wahrscheinlichkeit, dass jemand eine funktionierende Lösung beiträgt, ist somit höher und man findet mit englischen Suchbegriffen häufiger gute Lösungen.
Die Plattform [Stack Overflow] ist mit ihren Selektionsmechanismen genau für diesen Zweck ausgelegt,
die besten Antworten zu konkreten Fragen leicht auffindbar zu machen und möglichst viel aus der Schwarmintelligenz herauszuholen.
Antworten können dort bewertet werden und Fragesteller können eine Antwort als gültig akzeptieren.
Durch aktive Beteiligung besteht die Gelegenheit, Kompetenz zu demonstrieren und die eigenen beruflichen Chancen zu verbessern.
Auslese findet auch dann statt, wenn man nach etablierten Fachbegriffen sucht und in den Suchergebnissen sinnvolle Vorschläge aufruft.
Dabei festigt die Suchmaschine die Assoziation zwischen den Begriffen und den Suchergebnissen und lernt, dass sinnvolle Vorschläge häufiger aufgerufen werden.

## Krimineller Klickfang

Ein weiteres Problem mit Suchmaschinen sind Clickbait-Seiten mit Adressen wie `stackovercoding.com.de`.
Solche Seiten klauen die Inhalte von offiziellen Seiten wie Stack Overflow und bieten übersetzte Versionen in verschiedenen Zielsprachen an.
Die neuen Entwicklungen um Sprach-KI erleichtern dieses Vorgehen zusätzlich.
Dass eine automatisch generierte Übersetzung vorliegt, blitzt teilweise nur noch bei merkwürdigen Redewendungen oder Metaphern hervor.
In den jeweiligen Zielsprachen haben die Suchmaschinen nicht so stark trainierte Assoziationen zwischen übersetzten Tech-Begriffen und sinnvollen Ergebnissen,
sodass sich diese Fake-Angebote leichter in den Suchergebnissen einschmuggeln können.

Der Sinn ist einfach nur Clickbait, also Werbung zeigen, vielleicht auch Links zu Desinformation oder Malware.
Als AppStores noch nicht so populär waren, waren dubiose Download-Seiten eine Variante dieses Vorgehens.
Die haben damals im ungünstigen Fall den Virus gleich mitinstalliert.
Selbst wenn die Absicht nur im Zeigen von Werbung besteht, ist das Verseuchungsrisiko sehr hoch,
weil die Sicherheitsstandards solcher Seiten i.d.R. niedrig sind und leicht infiltriert werden können.
Um dieses Milieu will man einen großen Bogen machen und das geht am einfachsten, wenn man nicht auf deutschsprachige Tech-Inhalte angewiesen ist.

## Sprachliche Verwässerung

Wenn Projekte zunehmend dokumentationen mehrsprachig anbieten, verstopfen sie damit die Suchergebnisse mit redundanten Einträgen und verwässern die Begriffe.
Indem ich fünfmal dasselbe in verschiedenen Worten sage, wurde damit nicht viel gewonnen und nur die Begriffe unschärfer gemacht.
Bei Microsoft-Produkten werden z.B. die Suchergebnisse mit verschiedenen deutschsprachigen Versionen vollgemüllt.
Das ist ein großes Problem, weil es dadurch schwierig wurde, die aktuelle und autoritäre Version der Dokumentationen zu finden.
Microsoft-Deutsch ist sowieso grauenvoll, um nicht zu sagen ein „Schwerwiegender Ausnahmefehler“.
Das Prinzip Suchmaschine verliert da etwas seinen Sinn.
Schwammige Begriffe erschweren den Lernprozess für die Suchmaschinen, zumal auch die Eindeutschungen oft nicht allgemein konsistent sind.
Außerdem werden innerhalb einer anderen Sprache als Englisch die Assoziationen wegen des kleineren Zielpublikums weniger trainiert.

## Das Sprachniveau ist leichter als die Aufgabe

Die Herausforderung besteht eher im Fachjargon und weniger in der Sprache selbst.
Hinter Vokabeln wie Application, Library, Backend, Frontend, Fullstack, Framework, IDE usw. stecken bestimmte Konzepte und Bedeutungen,
die man sich nach und nach aneignen muss.
Für die Aneignung der Terminologie und um auch theoretischere Grundkonzepte aufzubauen, kann Einführungsliteratur in der eigenen Sprache sehr hilfreich sein,
z.B. <cite>Der Turing Omnibus</cite>[^omnibus].
Meine erste und wahrscheinlich einzige deutschsprachige Ressource zum Einstieg in grundlegende Webtechnologien war [SELFHTML].
Damit wird genug Vokabular aufgebaut, sodass es auf Englisch weitergehen kann.
Das Englisch zwischen diesen Vokabeln schmilzt dann auf ein geringes Niveau zusammen, sodass sich eine Übersetzung kaum mehr lohnt.

Das Lesen von Dokumentationen oder Diskussionen ist meistens nur noch ein Springen von Begriff zu Begriff, ein sogenannter Top-Down-Prozess.
Top-Down bedeutet in den Kognitionswissenschaften, dass bereits gedankliche Konzepte vorliegen und das Gelesene mit diesen Konzepten abgeglichen wird.
Das Gegenstück hierzu wäre Bottom-Up, wobei aus Gelesenem oder generell Umwelteindrücken gedankliche Konzepte entstehen.
Durch die Gewöhnung an eingedeutschte Varianten verzögert man das Erlernen dieser Top-Down-Prozesse.
Sich in diskussionen einzubringen oder Fragen zu stellen bleibt dadurch langfristig gesehen ebenfalls umständlicher.

Um Fragmentierung und Aufweichung von Begriffen zu vermeiden, müssten es Übersetzungen unter Beibehaltung der englischen Fachbegriffe sein.
Wenn man aber keine Lust auf diesen stilistischen Trouble hat und legit damit zu strugglen, kann man gleich bei Englisch bleiben.
Persönlich finde ich auch die überschwänglicheren Formulierungen im Englischen stilistisch passender als im Deutschen, aber das ist wohl Geschmackssache.

## Gängige Programmiersprachen basieren auf Englisch

Bis auf ein paar akademische Scherze wie die Programmiersprachen Whitespace oder Brainfuck setzen alle Programmiersprachen auf Englisch auf.
Man kann dem Englischen einfach nicht entkommen.
Auch beim Ausbau, z.B. mit Funktionen für statistische Berechnungen, würde man die Funktionen nicht `Mittelwert` oder `Quadratwurzel` nennen,
sondern ehr `mean` oder `sqrt` (square root).
Es würde viel zu schlecht skalieren, wenn andere den eigenen Code nur mit Deutschkenntnissen verstehen würden.
Microsoft hat in Excel bei den Formelfunktionen tatsächlich ersteres getan.
Damit wurde eher Verwirrung und Verwässerung gestiftet und der Schwarmintelligenz und der Auslese guter Antworten ein Bärendienst erwiesen.
Ich wünsche viel Spaß bei der Suche nach Antworten zu Excel-Problemen.

## Verschenkte Bildungschance: induktives Denken

Englisch lernen durch Programmieren ist schon für Kinder eine perfekte Gelegenheit, induktives Denken zu trainieren.
Zusätzlich können sie sich an Englisch gewöhnen und Scheu abbauen.
Induktives Denken bildet einen wesentlichen Grundstein unserer Intelligenz.
Es bezeichnet das Schließen von vielen einzelnen Beobachtungen auf allgemeine Gesetzmäßigkeiten, maschinelles Lernen tut im Grunde nichts anderes.
Das Gegenstück, das Schließen vom Allgemeinen auf das Spezielle, heißt deduktives Denken und ist die Fähigkeit, die Programmierer klassischerweise Computern beibringen.
Wir wenden damit allgemeine Regeln, z.B. Logik oder juristische Gesetze, auf bestimmte Situationen an, entdecken dabei aber keine neuen Regeln.
Immer nur deduktiv zu denken macht ängstlich und unfrei.
Das Trainieren des induktiven Denkens kann sogar die allgemeine Intelligenz steigern[^denktrainings], wenn auch keine Wunder bewirken.

Was hat das mit englischsprachigen Tech-Inhalten zu tun?
Wenn z.B. ein deutschsprachiges Tutorial auf eine englischsprachige Dokumentation verweist und beide ein ähnliches Code-Beispiel enthalten,
kann daraus die Vermutung erschlossen werden, dass die jeweils umgebenden Begriffe ähnliche Bedeutungen haben oder zumindest dem gleichen Kontext entstammen.
Solche Annahmen müssen durch genügend Beispiele verifiziert oder ggf. widerlegt werden.
Wörterbücher und Übersetzungshilfen können diesen Prozess natürlich unterstützen, aber das Englisch wird auf diese Weise entdeckt und erarbeitet statt direkt vorgegeben.
Wissen selbst zu entdecken macht mehr Freude und vermittelt Selbstwirksamkeit und Vertrauen in die eigenen kognitiven Fähigkeiten.

Übung beim induktiven Denken stärkt außerdem die Frustrationstoleranz.
Fehler sind kein Versagen, sondern Teil des Lernprozesses.
Es gehört selbstverständlich zu diesem Prozess, falsche Vermutungen aufzustellen und zu revidieren.
Ein Vorteil des Programmierens besteht darin, dass die Annahmen sehr einfach und direkt am Computer prüfbar sind.
Induktiv gelernte Missverständnisse korrigieren sich also relativ schnell von selbst, ganz ohne Lehrer und Punktabzüge.
Wenn man z.B. break und continue durcheinander bringt, wird das beim Schreiben von Algorithmen schnell ersichtlich.

Induktives Denken ist gut für Selbstwirksamkeit, Problemlösefähigkeiten, Frustrationstoleranz und allgemeine Intelligenz.
Es bereitet auf lebenslanges Lernen vor und im Bildungskontext sollte keine Gelegenheit ungenutzt verstreichen, es zu trainieren.

## Wann lohnt sich lokalisierung?

Einen echten Mehrwert in übersetzten Tech-Inhalten sehe ich nur in wenigen Situationen:

- Materialien zum Aufbauen von Grundlagen
- Gezielte Ansprache eines lokalen oder beruflichen Publikums

Eine lokalisierte Ansprache kann bei der Zielgruppe das Interesse für technologische Entwicklungen wecken.
Dabei stehen die Probleme im Vordergrund, mit denen die Zielgruppe zu tun hat, und wie die Technik diese Probleme lösen könnte.
Das setzt eine gute Kenntnis des jeweiligen beruflichen Umfelds voraus und macht den Unterschied zu generischem „schneller, höher, weiter“ aus.
Entwicklungsteams, die ihren Code noch ohne Versionskontrolle auf einem Shared Drive liegen haben,
könnten z.B. mein [Git Training] oder meinen [Git Bootstrap] interessant finden.
Wenn Interessierte das Produkt näher erkunden und ausprobieren, ist ein schneller Wechsel zu Englisch und Verweise auf die englischsprachige Dokumentation zu empfehlen.

[astro]: https://astro.build/
[beitrag]: https://github.com/withastro/docs/discussions/6554
[the texbook]: https://visualmatheditor.equatheque.net/doc/texbook.pdf
[stack overflow]: https://stackoverflow.com/
[git training]: https://infolektuell.de/products/trainings/git
[git bootstrap]: https://infolektuell.de/products/services/git-bootstrap
[selfhtml]: https://wiki.selfhtml.org/wiki/HTML/Tutorials/Einstieg

[^texbook]: [The TeXbook] von Donald Knuth ist ein Klassisches Beispiel für ein sich selbst dokumentierendes Textsatzsystem.
[^omnibus]: [Dewdney, A. K. (1995). _Der Turing Omnibus: Eine Reise durch die Informatik mit 66 Stationen_. Heidelberg: Springer Berlin.](https://doi.org/10.1007/978-3-642-78872-7)
[^denktrainings]: [Klauer, K. J., & Phye, G. D. (2008). Inductive reasoning: A training approach. _Review of Educational Research_, _78_(1), 85–123.](https://doi.org/10.3102/0034654307313402)
