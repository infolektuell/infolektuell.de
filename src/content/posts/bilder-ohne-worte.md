---
title: Bilder mit und ohne Worte
headline: Wann es sinnvoll ist, Grafiken auf Webseiten nicht zu beschriften
author: tamara-cook
publishedTime: 2024-01-12
tags: [Schildbürgerstreich, Accessibility]
---

Moderne Webseiten enthalten i.d.R. neben Text auch Bilder und andere Medien.
Ich werde regelmäßig gefragt, wie blinde Internetnutzer grafische Elemente auf Webseiten wahrnehmen können.
Es gibt zu dem Thema einiges zu lesen, auch viele Irrungen und Wirrungen.
Daher sollte ich mich einmal allgemein dazu äußern.

## Warum Bilder auf Websites?

Für Sehende ist es selbstverständlich, dass die Welt um sie herum visuell wahrnehmbar ist.
Also hinterfragen sie oft nicht, aus welchen Gründen Bilder in Webseiten eingebunden werden, sondern gehen intuitiv damit um.
Professionellen Designern würde ich an dieser Stelle einmal unterstellen, dass sie mit dieser Frage analytischer umgehen,
nicht aber den überlasteten Web Developers, die eigentlich für andere Aufgaben geschult sind und den Designkram trotzdem mitübernehmen müssen.
Also gut, was sind mögliche Funktionen von Grafiken im Web?
Die Liste ist nicht erschöpfend und mehrere dieser Gründe können gleichzeitig auf eine Grafik zutreffen.

- Eine Grundstimmung oder ein Wiedererkennungswert soll induziert werden, was durch visuelle Reize schneller gelingt als durch Text.
- Die Aufmerksamkeit soll gelenkt werden. Bewegung ist noch effektiver darin, weil die Peripherie der Netzhaut extrem sensibel auf Bewegung reagiert.
- Eine größere Menge von Text soll durch Grafik aufgelockert oder mit Orientierungspunkten strukturiert werden.
  Die Orientierung kann man auch durch vernünftige Typografie erzielen, ist halt nicht so aufregend.
- Ein Bild kommuniziert inhaltlich relevant Information, z.B. Diagramme oder dokumentierte Befunde. Die kleinste Form dieser Spielart sind Piktogramme.

Informationen sind generell kein Selbstzweck, sondern wir nutzen sie, um das Verhalten der Umwelt besser vorherzusagen und uns in ihr zurechtzufinden.
Ich finde es für Sehende sehr wichtig zu verstehen, dass visuelle Information besonders für Geburtsblinde nicht die selbe Bedeutung hat wie für Sehende.
Sehende denken aus ihrer Perspektive heraus zuerst, dass den armen Blinden ja ganz viel wichtige Information fehle,
die man komplett zugänglich machen und ausführlich beschreiben müsse.
Bei dieser Idee von Barrierefreiheit bleiben sie dann leider meistens hängen und ballern alles mit Information zu,
die ihnen selbst wahrscheinlich nützt, Blinden aber keinen Mehrwert liefert und nur aufhält.
Viele Blinde interessieren sich für visuelle Details, dahinter stecken oft aber soziale Motive und Empathie, oder bei Späterblindeten Nostalgie.
Wenn ich ganz ehrlich bin, ist es mir völlig egal, ob ein Hund schwarz oder braun ist, ob jemand blaue oder braune Augen hat oder welche Form die Nase hat.
Es hat keine direkte prädiktive Nützlichkeit und weckt keine Erinnerung an Erlebtes.
Das Gehirn hat mit dem sekundären visuellen Cortex viel Hardwarebeschleunigung für Gesichtserkennung, das gehört zum visuellen Erleben der Welt.
Für mich sind diese Details eher abstraktes und manchmal merkwürdiges Beiwerk, das man z.B. aus Romanen als analytisches Wissen mitlernt.
Und nein, das ist nicht schlimm, weil man auch aus anderen Sinneseindrücken Schlussfolgerungen über die Welt ziehen kann.
Wenn uns jemand z.B. eher steif vorkommt, schließen Sehende das eher aus der Frisur und Kleidung, Blinde schließen das aus der Sprache oder evtl. dem Händedruck.
In der Audiodeskription zu „Schindlers Liste“ wird z.B. Schindlers Frisur erwähnt.
Mit der Information muss ich analytisch überlegen, dass straff zurückgekämmte Haare auf ein formelles Auftreten hindeuten.
Das bekomme ich aber auch durch seinen Sprachduktus mit und das Gelaber über Frisuren lenkt mich nur vom eigentlichen Gespräch ab.
Warum wird in Romanen eigentlich viel seltener die Stimme oder die Hände beschrieben?
Das wären mal nützliche Infos.
Meine Bitte an alle Webentwickler: **Hinterfragt den Zweck von Informationen.**

## Technischer Einschub

Zur Erstellung von Webseiten wird die Beschreibungssprache HTML genutzt.
Damit kann man Text, Listen, Bilder etc. zu einem großen Ganzen zusammenstellen.
Grafiken können zusätzlich einen alternativen Text erhalten (Alt-Attribut), der in rein textuellen Darstellungen als Platzhalter an die Position des Bildes tritt.
Vorleseprogramme lesen diesen Text anstelle des Bildes vor, wenn man in der Seite entlangnavigiert.
Ist das Alt-Attribut vorhanden und leer, wird das Bild komplett vom Vorleseprogramm übergangen, als existierte es überhaupt nicht.
Fehlt das Attribut komplett, wird der Dateiname der Grafik vorgelesen.
Das Alt-Attribut ist in erster Linie ein Platzhalter und keine Bildbeschreibung, auch wenn SEO-Priester gern etwas anderes behaupten.

Im Folgenden schauen wir uns näher an, wie das Alt-Attribut für mehr Barrierefreiheit richtig eingesetzt werden kann.
Als Faustregel würde ich sagen, dass man 9 von 10 Bildern mit einem leeren Alt-Attribut versehen könnte.
Dann ist der Validator glücklich und blinde User werden statistisch gesehen weniger mit überflüssigen Infos oder Dateinamen zugetextet.

## Stimmung und Wiedererkennungswert

Durch Bilder Stimmungen hervorzurufen ist ein archaischer und assoziativer Vorgang.
Die Worte „Kätzchen spielt mit Blume“ lösen nicht die gleiche Regung aus wie es direkt sehen zu können.
Da will man sich gerade z.B. über Produkte oder Dienstleistungen der Krankenkasse informieren
und zwischen den Absätzen kommt „Junge auf Wiese mit Laptop“ oder „Frau hält ein Dokument in der Hand“ oder etwas ähnlich geistreiches.
Da kann ich nur sagen: „Frau mit heller Hautfarbe, die sich an den Kopf fasst“ 🤦🏻‍♀️.
So wird das Emoji 🤦🏻‍♀️ von Voiceover auf Mac OS vorgelesen.
Das automatische Abspielen von Musik, am besten mit gut verstecktem Player, hat sich zum Glück nicht etabliert.
Ich finde, dieser exzessive Gebrauch von Alt-Attributen hat schon einen ähnlichen Nervigkeitsgrad erreicht wie ungefragte Musik.

Bitte benutzt leere Alt-Attribute oder Hintergrundbilder mit CSS, wenn ihr visuell Stimmungen und Wiedererkennungswert induzieren wollt.
Icons, die in Kombination mit Text erscheinen wie z.B. in Menüs, können mit dem Attribut aria-hidden vor den Vorleseprogrammen versteckt werden.
Bei sehr exzessivem Emoji-Gebrauch kann man sich auch überlegen, ob man dafür Span-Elemente mit dem Attribut aria-hidden nutzen sollte,
wenn die Emojis als Icon und nicht als Ausdrucksmittel im Chat gedacht sind.
Apple hat leider vor 15 Jahren damit aufgehört, innovativ zu sein und noch keine taktilen oder olfaktorischen Touch Screens erfunden.
Eine spezielle Duftnote oder Textur wären viel geeigneter für ein Corporate Design als ständig diese dämlichen Bildbeschreibungen.
Das würde mal richtig den Hippocampus in Gang bringen.
Sorry, aber solange das nicht erfunden ist, müsst ihr blinde Nutzer durch Inhalt und intuitive Nutzerführung überzeugen.
Diskriminierung ist es, wenn wir von der Nutzung der Angebote ausgeschlossen werden, nicht wenn uns ein paar visuelle Infos entgehen.

## Blickfang

Bei Aufmerksamkeit würde ich im Wesentlichen das selbe sagen wie zu Stimmung.
Die Beschreibung eines Bildes entfaltet nicht die gleiche Attraktivität wie das Bild selbst.
Bilder in Vorschauen oder im Hero-Bereich sollten also bitte ein leeres Alt-Attribut bekommen.
Da bin ich gerade auf den Clickbait angesprungen und habe eine Überschrift geklickt, um den Curiosity Gap zu füllen,
doch auf der Seite kommen nach der Überschrift erst mal fünf langweilige Bilder, an denen ich vorbeinavigieren muss und mit Alt-Texten zugelabert werde.
Dabei will ich doch endlich wissen, was Prince Harry in seinem Buch geschrieben hat.
Das ist nicht spannend, sondern langweilig und ineffizient.
In der Zeit lässt schon der Effekt des Clickbait nach, bevor ich beim Inhalt angekommen bin, und Harry ist doch nicht mehr so interessant.
Deswegen nutze ich möglichst einen RSS-Reader oder ggf. den Lesemodus im Browser, um Inhalte ohne den ganzen Müll drumherum lesen zu können.

Zum Erzeugen von Aufmerksamkeit wird auch gern Bewegung oder Dynamik eingesetzt, z.B. als Karussell.
Wenn sich Inhalte auf einer Webseite dynamisch von selbst ändern, kann man diese Bereiche als Live-Region kennzeichnen.
Damit lesen Vorleseprogramme immer Inhalte vor, die sich geändert haben.
Selbst in der Einstellung „polite“ finde ich das Verhalten von Live-Regionen ziemlich impolite.
Audible hat z.B. ein Karussell oben auf der Startseite, das ständig dazwischen quatscht, wenn man gerade die verschiedenen Bereiche auf der Seite durchgeht.
Das erzeugt kein Interesse, sondern Aggression, zumal es ja nur ein paar Titel enthält, die immer wieder durchrotieren.
Die paar guten Bücher zwischen dem vielen Schrott zu finden, wird dadurch nur noch schwieriger.
Deswegen habe ich Live-Regionen meistens stummgeschaltet, damit ich in Ruhe die Hörbücher auf der Startseite durchsehen kann.

## Inhaltlich relevante Grafik

Endlich wird es interessant und wir kommen zu Grafiken, die inhaltlich bedeutsame Information enthalten.
Solche Informationen entscheiden darüber, ob Nutzer in der Lage sind, den Inhalt der Seite zu verstehen oder das Angebot zu nutzen.
Hier ist die zentrale Frage, ob die Grafik der einzige Weg sein soll, die Information auszudrücken.
Falls nein, kann man auch den verbalen Weg sinnvoll machen und die Grafik bekommt ein leeres Alt-Attribut.
Quellcode sollte z.B. nicht als Screenshot eingebunden werden, sondern als formatierter Text, wie es sich weitgehend auch durchgesetzt hat.
Wenn in einem Programmiertutorial aus dem Verlauf gut genug hervorgeht, dass bestimmte Schritte bestimmte Ergebnisse hervorrufen,
brauche ich nicht zu wissen, dass auch Bilder eingebunden sind.
Übrigens kann man auch Ausgabewerte als Input-Elemente mit Readonly-Attribut einbinden, das hilft beim Kopieren.
Generell macht es mehr Spaß, wenn Bilder ganz versteckt sind, statt mitbekommen zu müssen, dass man gerade Information verpasst.

Für eigenständige Bilder wie Diagramme, fotografische Befunde, Notentext etc. empfiehlt sich auch für Sehende eine Umgebung mit aussagekräftiger Bildunterschrift.
In HTML wird dies durch die Elemente figure und figcaption umgesetzt.
Das Bild-Element selbst könnte auch wieder ein leeres Alt-Attribut bekommen,
wenn die Bildunterschrift alle wichtigen Infos sowieso zusammenfasst und z.B. bei Diagrammen auf die zugrundeliegenden Daten verlinkt.

Schließlich ist noch die Situation übrig, in der Grafik die einzige Repräsentationsform für bestimmte Informationen sein soll.
Dieser Wunsch ist völlig legitim und kann angemessen sein,
doch hier sollten sinnvolle Alt-Attribute genutzt werden, um tatsächlich einmal etwas für Barrierefreiheit zu tun.

- Eigenständige Piktogramme ohne Text brauchen prägnante Alt-Texte oder Labels, z.B. Tasten wie Vor, Zurück, Pause etc.
  Prägnant heißt hier kompakt, also bitte nicht zu ausführlich.
- Manchmal werden Produkte (Spiele, Musikalben etc.) nicht mit Titel aufgelistet, sondern nur als Vorschaubilder.
  Für Sehende mögen die Previews ausreichen, aber blinde Nutzer bekommen schlimmstenfalls nur die Dateinamen der Grafikdateien angezeigt.
  Hier müssen aussagekräftige Alt-Attribute her, damit Blinde überhaupt in der Lage sind, ein Spiel auszusuchen und anschließend zu kaufen.

## Fazit

Der größte Teil der Bild-Elemente auf Webseiten lässt sich mit einem leeren Alt-Attribut versehen, wenn man einmal das Hirn einschaltet.
Ich kann außerdem versprechen, dass Content auch für Sehende an Qualität gewinnt, wenn man Barrierefreiheit als zweckmäßiges Anbieten von Information begreift.
