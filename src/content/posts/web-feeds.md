---
title: Web Feeds
headline: Eine infolektuelle Methode zum Lesen von News aus dem Web
tags: [Informationsselektion, News]
publishedTime: '2024-01-16'
---

Wer Wert darauf legt, vielseitig informiert zu sein, wird sich auf vielen unterschiedlichen Zeitungsportalen, Social-Media-Kanälen, Blogs etc. aufhalten.
Da kommen viele Klicks zusammen und ständig gibt es Werbung zu sehen.
Eigentlich wäre es doch fantastisch, wenn man ohne Ablenkung in Ruhe die neuesten angefallenen Nachrichten lesen könnte,
ohne dass etwas blinkt oder der Text durch irgendwelche Links zum Weiterlesen zerrissen wird.
Eine solche Technik gibt es bereits: Web Feeds.
Der Einstieg braucht ein paar Schritte, aber er wird mit einem infolektuellen Lesegenuss belohnt.

## Was sind Web Feeds?

Web Feeds sind eine Methode, mit der jede Website ihre Nachrichten zum Abrufen anbieten kann.
Dabei wird nur der Inhalt abgerufen, nicht die zusätzlichen Navigationslinks und Werbebanner auf der Seite.
Zum Abrufen nutzt man spezielle Programme (Feedreader), die den Inhalt lesefreundlich darstellen.
Wenn man die Nachrichten einer Website abonnieren möchte, fügt man diese Seite als Quelle im bevorzugten Feedreader hinzu.
Mit der Zeit wächst so eine Quellensammlung heran, ähnlich der Abonnements bei sozialen Netzwerken.
Der Unterschied ist: Keine sozialen Plattformen oder Drittanbieter kennen die eigene Quellensammlung.

Es gibt viele Feedreader zur Auswahl, von schlicht bis komplex ist für die meisten etwas dabei.
Das Wissen, wie Feeds angeboten und gelesen werden können, ist offen dokumentiert.
Jeder Entwickler dieser Welt kann in der eigenen Website Feeds anbieten oder ein Programm zum Lesen von Feeds entwickeln.
Gängige Formate sind [RSS], [Atom] und [JSON Feed].
Nutzer müssen den Inhalt dieser Dokumente nicht kennen, sie sind nur als Referenz hier verlinkt.
Aus einer mehr juristischen Perspektive gedacht entsprechen diese Dokumente Gesetzestexten oder Regeln, auf die sich die Entwicklerwelt geeinigt hat, oder kurz Standards.
Wenn sich alle Beteiligten daran orientieren, können sie Bausteine entwickeln, die gut zusammenspielen,
wie hier das Anbieten der Feeds auf der einen Seite und das Abrufen auf der anderen.
So banal es klingt, aber das Prinzip ist technischen Laien viel zu wenig bewusst.

[rss]: https://www.rssboard.org/rss-specification
[atom]: https://validator.w3.org/feed/docs/rfc4287.html
[json feed]: https://jsonfeed.org/

## Also gut, wie nutzt man Web Feeds?

Zunächst sollte man einen Feedreader finden, der einem sympathisch ist.
Hier ein paar Vorschläge:

- Für iPhone und Mac kann ich [NetNewsWire] empfehlen.
- Für Android ist vielleicht der [Offline RSS Reader] interessant.
- [Podcast Addict] kann auch mit RSS-Feeds umgehen.
- Wer bereits [Thunderbird] nutzt, hat damit auch einen Feedreader.
- Für Windows habe ich noch keine wirklich empfehlenswerten Optionen außer Thunderbird.

[netnewswire]: https://netnewswire.com
[offline rss reader]: https://play.google.com/store/apps/details?id=com.vanniktech.rssreader
[podcast addict]: https://podcastaddict.com
[thunderbird]: https://www.thunderbird.net

## Feed abonnieren (automatisch)

Viele Seiten, die Feeds anbieten, enthalten einen Button zum Abonnieren.
Erkennbar sind diese Buttons durch ihre Icons:

- ![RSS](/feeds/rss-icon.svg)
- ![JSON Feed](/feeds/json-feed-icon.png)

[Mein Blog](/blog/) enthält ebenfalls solche Buttons oben über den Beiträgen.
Damit wird der installierte Feedreader auf Nachfrage hin automatisch geöffnet und der Feed zur eigenen Sammlung hinzugefügt.
Von nun an werden dort regelmäßig die neuesten Artikel geladen und können dort komfortabel gelesen werden.
Falls der Feed nicht mehr interessant ist, kann er einfach wieder aus der Sammlung gelöscht werden.

## Feed abonnieren (manuell)

Manchmal sind die Abonnement-Buttons nicht so prominent oder überhaupt nicht vorhanden.
Den Feed einer Website manuell zu abonnieren heißt kurz gesagt, die Adresse der Website in den Feedreader zu kopieren.
Mit etwas Übung läuft dieser Prozess sogar irgendwann flüssiger als der Weg über den Button.

1. Seite im Browser besuchen, z.B. mein Blog unter <https://infolektuell.de/blog>
2. Adresse aus der Adressleiste oder direkt von hier kopieren
3. RSS-Reader öffnen
4. Dort auf „Feed hinzufügen“, „Neuer Feed“ o.Ä. gehen
5. Adresse ins Eingabefeld einfügen und suchen bzw. hinzufügen

Mit der Zeit kann man sich angewöhnen, bei jeder interessanten Seite zu testen, ob sie sich als Feed abonnieren lässt.
Es wird deutlich häufiger angeboten als es promotet wird.
Selbst Youtube-Kanäle lassen sich als Feed abonnieren, probieren Sie es aus.

## Aggregator-Dienste

Es gibt auch verschiedene Onlinedienste, mit denen man die eigene Feed-Sammlung ähnlich wie früher in Google News verwalten kann, z.B. [Inoreader] oder [Feedly].
Solche Dienste können nicht nur Web Feeds lesen, sondern auch z.B. von sozialen Plattformen oder Newsletters.
Die Vorteile, News dadurch konzentrierter und gezielter aus verschiedenen Quellen lesen zu können, bleibt dabei erhalten.
Ein zusätzlicher Vorteil ist die leichtere Auffindbarkeit neuer Quellen.
Diese Dienste können also tatsächlich auch dabei helfen, die Informationsflut zu ordnen und zu aggregieren.
Sie kennen aber die eigene Quellensammlung, man schenkt ihnen also persönliche Daten und bezahlt teilweise auch einen Aufpreis für die Dienstleistung.
Ich finde, damit verschenkt man einen Teil des Wertes der Feed-Technologie, nämlich die Unmittelbarkeit zwischen Lesern und Autoren.
Dennoch will ich diese Option nicht unterschlagen, zumal sie auch einen Weg darstellt, die Quellensammlung auf mehreren Geräten zu synchronisieren.

[inoreader]: https://www.inoreader.com
[feedly]: https://feedly.com

## Fazit

Durch Web Feeds erhält man einige Vorteile:

- Konzentriertes Lesen in einer wenig ablenkenden Umgebung mit lesefreundlicher Darstellung
- Aktiv entscheiden, wann man Nachrichten lesen will und wann nicht, z.B. nur beim Öffnen des Feedreaders
- Alle Quellen sind übersichtlich an einem Ort versammelt und können entsprechend kuratiert werden.
- Keine Zwischenhändler erfahren, bei wem man etwas liest.

An solchen Lesern verdienen Anbieter natürlich nichts über Werbeeinnahmen und das Konzept wird wenig gepusht.
Andererseits sind Web Feeds technisch gesehen für Seitenbetreiber nicht schwierig umzusetzen und kommerzielle Modelle sind damit auch umsetzbar.
Ich finde, sie wären ein guter Baustein zu einer digitalen Welt mit normalen Bezahlleistungen ohne Werbung und Datensammelei,
im Sinne von Gert Gigerenzers Analogie des Gratis-Café.
Bei einigen Anbietern ist dies bereits in Anwendung, z.B. bei [Steady] oder [Substack].
Wenn alle Zeitungshäuser die Entwicklung guter RSS-Reader unterstützen würden, statt dass jedes seine eigene schlechte App entwickelt,
wäre die Mühe deutlich effektiver und sinnvoller investiert.
Vielleicht würde ich dann sogar mehr konventionelle Zeitungen lesen.

[steady]: https://steadyhq.com
[substack]: https://substack.com
