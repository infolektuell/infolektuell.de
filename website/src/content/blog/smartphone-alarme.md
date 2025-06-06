---
title: Wie Alarme auf dem Smartphone (nicht) umgesetzt werden sollten
description: Mittlerweile können iOS-Geräte akustische Alarme ausgeben, wenn sie per Mobilfunk Gefahreninformationen empfangen. Die Umsetzung ist jedoch undurchdacht und weist Mängel der Barrierefreiheit auf.
categories: [case-studies]
pubDate: 2025-03-16
seo:
  title: Smartphone-Alarme richtig umsetzen
  description: Erfahren Sie hier, worauf es bei der Implementierung von Alarmen auf Mobilgeräten ankommt.
---

Mittlerweile können iOS-Geräte akustische Alarme ausgeben, wenn sie per Mobilfunk Gefahreninformationen empfangen.
Die Umsetzung ist jedoch undurchdacht und weist Mängel der Barrierefreiheit auf.
Es wurde nur das Funktionsprinzip klassischer zentraler Alarmanlagen mit seinen Einschränkungen kopiert, ohne die zusätzliche Usability auszureizen, die ein Smartphone bieten kann.

## Aktuelle Umsetzung

Momentan ist der folgende Workflow umgesetzt:

- Das Gerät empfängt eine Gefahreninformation und löst den lauten akustischen Alarm aus.
- Parallel zum Warnton werden Informationen zur Gefahrensituation angezeigt.
- Sobald Nutzer den Hinweis wegklicken, verstummt der Ton und der Hinweis mit den Informationen verschwindet.
- Nutzer sind also zwangsläufig dem gezielt lauten und penetranten Ton ausgesetzt, während sie die angezeigten informationen lesen und erfassen müssen.

## Warum ist das schlecht?

Die menschliche Reaktion auf eine Gefahrensituation kann in zwei sequentiell aufeinander folgende Phasen eingeteilt werden:

1. Aufmerksamkeitslenkung: Der Mensch muss sich der Gefahr bewusst werden und die eigene Aufmerksamkeit auf den Ursprung lenken.
2. Zielführendes Handeln: Basierend auf den zur Verfügung stehenden Informationen sowie körperlichen und mentalen Ressourcen wird ein Verhalten ausgeführt, um die Gefahr abzuwenden.

Das penetrante akustische Warnsignal ist in Phase 1 erforderlich, in phase 2 jedoch kontraproduktiv.
Das Geräusch ruft gezielt eine intensive Reaktion des vegetativen Nervensystems hervor (Schreck), die bei der kognitiven Informationsverarbeitung hinderlich ist.
In Phase 2 müssen die mentalen Kapazitäten möglichst frei sein, um die Hinweise richtig zu interpretieren.

Der folgende Workflow würde dem Zweck weitaus mehr gerecht werden:

- Das ruhende Gerät empfängt eine Gefahreninformation und löst den lauten akustischen Alarm aus.
- Sobald der Nutzer mit dem Gerät interagiert, verstummt der Ton, da Phase 1 abgeschlossen ist. Der Hinweis mit den Informationen bleibt offen.
- Phase 2 beginnt, der Hinweis wird ungestört zur Kenntnis genommen und ggf. geschlossen.
- Ein zielführendes Verhalten wird initiiert. Die Hinweise sollten bestenfalls wie ein Nachrichtenverlauf rückwirkend einsehbar bleiben.

## Blindenspezifischer Benefit

Blinde nutzen den Screenreader VoiceOver zum Vorlesen des Bildschirminhalts.
Normalerweise wird bei anderen Audio-Quellen die Lautstärke reduziert, während VoiceOver spricht (Audio Ducking).
Die Lautstärke der Alarme wird jedoch nicht reduziert, weshalb es momentan für Blinde kaum möglich ist, die Hinweise zu lesen, während der Alarm ertönt.
Mit dem hier vorgeschlagenen sequentiellen Workflow würde sich dieses Problem elegant erübrigen.
