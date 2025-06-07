---
title: Barrierefreiheit prüfen mit dem Accessibility Tree
description: Für Accessibility-Einsteiger ist der Accessibility Tree die absolute Methode Nr. 1, noch vor dem Testen mit Screenreader. Hier findest du die Basics und ein Video, in dem ich den Gebrauch des A11Y Tree demonstriere.
categories: [knowledge-base, tutorials]
pubDate: 2025-06-07
video:
  id: vBuIdmqStOU
  title: Website Accessibility prüfen mit dem A11Y Tree | Tutorial
seo:
  title: Barrierefreiheit prüfen mit dem Accessibility Tree
  description: Lerne hier, die Barrierefreiheit deiner Website mit dem Web Accessibility Tree zu testen
---

## Testen ist wichtig

Testen während des Programmierens ist nicht nur für das Endergebnis wichtig, sondern auch zum Lernen.
Um schnell und effektiv zu lernen, ob dein Ansatz richtig oder falsch war, benötigst du stetiges und klares Feedback.
Sonst bleibst du jemand, der ziellos im Nebel stochert, worin dich KI bald überholen wird.
Dies ist übrigens auch der Grund, warum Unit-Tests auch beim Entwickeln so hilfreich sind.
Sie zeigen dir sofort an, wenn du etwas kaputt gemacht hast.

## Web Accessibility Tree ist essentiell

Gerade für Einsteiger ins Thema ist der Accessibility Tree (A11Y Tree) das Tool Nr. 1, um Barrierefreiheit während der Webentwicklung zu prüfen.
Meine dringende Empfehlung an alle Web Devs ist, zuerst damit zu üben, bevor ihr euch ins Testen mit Screenreader stürzt.
Man nutzt dafür die Devtools im Browser, die Methode fügt sich also deutlich nahtloser in den Prozess ein als ein Screenreadertest.

## Der Accessibility Tree ist die Landkarte deiner App oder Website für Screenreader

Für Screenreader und andere assistive Technologien wie z.B. Sprachsteuerung ist der A11Y Tree die **einzige und autoritäre Informationsquelle** zu deiner Website oder App.
Er beschreibt wie eine Landkarte alle Steuerelemente (Controls), mit denen Nutzer deiner App oder Website interagieren können.
Wenn ich im Folgenden von Screenreadern schreibe, sind andere Bedienungshilfen mit eingeschlossen.

Es geht bei diesem Thema immer um die angezeigten Controls, das solltest du unbedingt im Kopf behalten.
HTML- oder FXML-Elemente sind noch keine Controls, der Browser rendert sie erst zu Controls.
Screenreader lesen nicht deinen HTML-Code aus, um deine Website für Nutzer zugänglich zu machen.
Stattdessen fragen sie den Browser nach einem **Accessibility Tree**, um sich orientieren zu können.
Das gilt ebenso auch für native Anwendungen, dort fragen sie eben die Anwendung.

- Zuerst schreibst du ein HTML-Dokument 📄
- Der Browser parst dein HTML 💭
- Aus dem geparsten HTML erstellt der Browser das DOM, eine für JavaScript zugängliche Repräsentation des Dokuments 🌳
- Aus dem DOM erstellt der Browser schließlich neben der visuellen Ansicht auch den A11Y Tree, eine reduzierte Version des DOM 🪚

So gesehen lesen Screenreader auch nicht den Screen, sondern eine Beschreibung seines Inhalts.
Sowohl visuelle Ansicht als auch A11Y Tree reflektieren Änderungen aus dem DOM.

## Warum ist das wichtig für Entwickler?

1. Fehler auf der Ebene des A11y Tree werden voraussichtlich alle Screenreader mehr oder weniger betreffen. Sogar wenn du bloß ein Liebhaber von Tastaturbedienung bist, wirst du Mängel auf der Ebene des A11Y Tree bemerken. Probleme hier abzufangen ist somit sinnvoll.
2. Jeder Screenreader hat seine eigene konventionen, wie er welche Elemente vorliest. Das ist wahnsinnig inkonsistent und verwirrend, und regelmäßig eine Quelle für Ablenkung und Unsicherheit. Übung mit dem A11Y Tree kann dir mehr Sicherheit und Selbstbewusstsein geben bei der Einschätzung, ob die notwendigen Informationen zumindest prinzipiell für AT **zugänglich** sind.

Deine wichtigste Aufgabe ist, Zugänglichkeit zu schaffen, indem du bei deiner App oder Website für einen möglichst korrekten A11Y Tree sorgst.
Wenn das fehlt, kann der beste Screenreader und die gründlichsten Screenreadertests der Welt wenig ausrichten.

## Accessibility Tree im Browser anzeigen

Firefox bietet hier die beste Unterstützung, daher solltest du bitte einen Firefox parat haben.

1. Öffne irgendeine Seite im Browser oder etwas, woran du gerade arbeitest, oder bleibe einfach auf diesem Artikel. ;-)
2. Wähle ein Element aus und öffne sein Kontextmenü.
3. Wähle „Barrierefreiheitseigenschaften untersuchen“

Der A11Y Tree öffnet sich gleich an der Stelle, die deinem ausgewählten Element entspricht.

## Accessibility Tree lesen

Der A11Y Tree ist im Grunde nur ein Datendokument mit Baumstruktur, du könntest ihn sogar als JSON exportieren.
Er folgt einem bestimmten Standard: [ARIA] (Accessible Rich Internet Applications).
Ich frage mich, warum es noch keinen Validator gibt, der diese Datenstruktur validieren könnte.
Das wäre eigentlich naheliegender als das HTML zu validieren.

Es geht um Controls und ihre Beschreibung, wie oben schon erklärt wurde.
Jedes Element im A11Y Tree beschreibt ein Control.
Der ARIA-Standard definiert eine Sammlung von Rollen (Typen/Klassen/Kategorien), denen die Controls zugeordnet werden können.
Diese Rollen verleihen deinen Controls Semantik und sagen dem Screenreader, was man damit machen kann und welche Art von Inhalt sie anzeigen.
Das hier sind Beispiele für interaktive Rollen, aber es gibt auch Rollen ohne Interaktionsmöglichkeiten wie z.B. `image`, `progressbar` oder `paragraph`.

- Ein Link kann aktiviert werden und führt zu einem verknüpften Zielort.
- Ein Button kann aktiviert werden und löst eine definierte Aktion aus.
- Eine Checkbox kann aktiviert werden, wodurch ihr Zustand zwischen _ausgewählt_ und _nicht ausgewählt_ wechselt.

Wirf einen Blick in den A11Y Tree auf der rechten Seite, wo die Eigenschaften des ausgewählten Control angezeigt werden.
Dort ist immer als zweite Eigenschaft von oben die Eigenschaft `role` aufgeführt.
Wenn ein Element die Rolle `generic` hat, bedeutet das, dass es keine spezielle Rolle hat und somit auch nicht die entsprechende Semantik.
Der Screenreader erfährt dann z.B. nicht, dass man es aktivieren/klicken kann, obwohl ein Event Handler daran gebunden wurde.

Die Eigenschaft `name` ist immer ganz oben der erste Eintrag und enthält die individuelle Bezeichnung für dieses Control.
So könntest du z.B. ein `button` Control mit dem Namen `Abspielen` haben.
Diese beiden Eigenschaften sollte jedes Control haben.
Auch wenn das Control noch Kindelemente hat, ist dieser Name das, was ein Screenreader vorliest.
Die Kindelemente werden damit allerdings nicht versteckt, was aber i.d.R. auch kein Problem darstellt.
Die optionale Eigenschaft `description` kann eine etwas ausführlichere Zusatzbeschreibung oder Anweisungen enthalten.

Jetzt wird die Sache komplexer.
Besonders die interaktiven Rollen erfordern, dass jeweils bestimmte zusätzliche Eigenschaften definiert sind, damit Screenreader das Control richtig bedienen können.
Ein Button-Control sollte also unter `actions` unbedingt zumindest eine Click-Action aufgeführt haben und unter `states` sollte `focusable` enthalten sein, sonst stimmt da etwas nicht.
Hier jede Rolle und ihre Anforderungen zu beschreiben würde den Rahmen dieses Artikels sprengen, siehe unten für Nachschlagemöglichkeiten.
Das ist sehr umfangreich, das lernt man nicht alles an einem Nachmittag.
Um den Lernprozess abzukürzen, kannst du natürlich auch mich und meine Dienstleistungen in Anspruch nehmen.

## Accessibility Tree schreiben und korrigieren

Bisher ging es nur darum, was im A11Y Tree stehen muss, aber noch nicht darum, wie du ihn schreiben, korrigieren und ergänzen kannst.
Musst du jetzt den kompletten A11Y Tree selbst schreiben?
Nein, zum Glück nicht; oder nur dann, wenn du **extrem schlechtes HTML** geschrieben hast.
Nochmal zur Erinnerung: Das DOM ist die Grundlage, und somit auch dein HTML.

1. Viele HTML-Elemente haben eine Default-Rolle, z.B. das `a`-Tag hat die Rolle `link`, `button` ist `button`. Je semantischer du also HTML einsetzt, desto mehr kann der Browser die Landkarte implizit mit der Rolle und den benötigten Zusatzeigenschaften ausfüllen. Rollen und Tags sind nicht dasselbe, es gibt nicht genau für jedes Tag eine Rolle oder umgekehrt.
2. Manchmal ist es nötig, etwas explizit zu ergänzen oder nachzubessern. Das geschieht in HTML durch das `role`-Attribut und die `aria-*`-Attribute. Sie können Eigenschaften überschreiben, die sich der Browser sonst implizit erschlossen und ausgefüllt hätte.
3. Eigenschaften kann der Browser teilweise aus den Kindelementen eines Controls erschließen/inferieren. Die `name`-Eigenschaft wird z.B. aus dem Text der Kindelemente erschlossen, wenn du nichts explizit angibst.

Auch hier gebe ich nur ein Beispiel.
Bleiben wir bei der `name`-Eigenschaft im A11Y Tree.
Manchmal ergibt es nicht so richtig Sinn, was vom Browser vorausgefüllt wurde.
Vielleicht fehlt ein Detail, oder der Text ist zu lang für eine Bezeichnung.
Mit dem HTML-Attribut `aria-label` auf dem betroffenen HTML-Element kannst du die `name`-Eigenschaft seines Control auf einen festgelegten Textwert setzen.
Dieser Text wird dann auch von Screenreadern vorgelesen.

Du kannst auch Controls komplett aus dem a11Y Tree entfernen, sofern sie für Screenreader überflüssig sind.
Dafür solltest du aber gute Gründe haben, und Ästhetikempfinden ist ehrlich gesagt oft kein guter Ratgeber bei dieser Frage.

- Gleichzeitig visuell und im A11Y Tree entfernen: HTML-Attribut `hidden` oder CSS-Eigenschaft `display: none;` bzw. `visibility: hidden`
- Nur aus dem A11Y Tree entfernen: HTML-Attribut `aria-hidden`

Bitte versuche, möglichst viel **gutes und semantisches HTML** zu schreiben und ARIA-Attribute nur als Notfall-Override für den letzten Schliff zu nutzen.
Das hilft übrigens auch der SEO.

## Fazit

Du hast nun eine einsteigerfreundliche Methode an der Hand, mit der du starten solltest und die du dir am besten beim Entwickeln angewöhnen solltest.
Mit der Zeit wirst du sicherer werden im Umgang mit A11Y-Themen und es wird du wirst besser nachvollziehen können, warum ein Screenreader eigentlich dies oder jenes (nicht) vorliest.

## Referenzen

- Eintrag auf MDN: [Accessibility Tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)
- Eintrag auf MDN: [WAI ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
- Übersicht zu Standards für Web Accessibility: [WAI ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
- ARIA-Spezifikation: [Accessible Rich Internet Applications (WAI-ARIA) 1.2][aria]

[aria]: https://www.w3.org/TR/wai-aria/
[aria roles]: https://www.w3.org/TR/wai-aria/#roles
