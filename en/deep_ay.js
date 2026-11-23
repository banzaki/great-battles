// Deployment diagrams with a side switch: Leipzig (Saxons and Wurttemberg change sides) and Talas (Karluks change sides).
// Side "a" = Coalition / Abbasid Caliphate, side "b" = French Empire / Tang China, as in the battle cards.
Object.assign(FORMATIONS, {
  leipzig: {
    terrain: [
      { t: "note", x: 50, y: 31, l: "Leipzig" },
      { t: "note", x: 30, y: 8, l: "Elster river" },
      { t: "note", x: 30, y: 47, l: "Only bridge" }
    ],
    units: [
      { id: "aSil", s: "a", k: "inf", w: 18, h: 5, l: "Silesia (Blücher)" },
      { id: "aNor", s: "a", k: "inf", w: 16, h: 5, l: "North (Charles John)" },
      { id: "aBoh", s: "a", k: "inf", w: 26, h: 5, l: "Bohemia (Schwarzenberg)" },
      { id: "aPol", s: "a", k: "inf", w: 16, h: 5, l: "Poland (Bennigsen)" },
      { id: "aGy", s: "a", k: "inf", w: 12, h: 5, l: "Austrians (Gyulay)" },
      { id: "fMar", s: "b", k: "inf", w: 14, h: 5, l: "Marmont" },
      { id: "fNap", s: "b", k: "inf", w: 12, h: 5, l: "Napoleon and the Guard" },
      { id: "fRear", s: "b", k: "inf", w: 10, h: 4, l: "Rear guard (Oudinot)" },
      { id: "fSou", s: "b", k: "inf", w: 20, h: 5, l: "South (Victor, Poniatowski)" },
      { id: "fCav", s: "b", k: "cav", w: 12, h: 4, l: "Murat's cavalry" },
      { id: "sax", s: "b", k: "inf", w: 12, h: 5, l: "Saxons (Reynier)" },
      { id: "wur", s: "b", k: "cav", w: 9, h: 4, l: "Württemberg" },
      { id: "fBer", s: "b", k: "inf", w: 12, h: 5, l: "Bertrand (Lindenau)" }
    ],
    steps: [
      { t: "Napoleon holds the centre, with Leipzig and its bridges behind him. The Allies come from three sides: the Army of Bohemia from the south, the Army of Silesia from the north, and the Armies of the North and of Poland still far off to the east. The drawing is schematic.",
        p: { aSil: [38, 6], aNor: [86, 6], aBoh: [50, 65], aPol: [88, 62], aGy: [12, 56],
             fMar: [40, 17], fNap: [57, 40], fRear: [44, 38], fSou: [50, 50], fCav: [64, 48], sax: [70, 33], wur: [78, 40], fBer: [18, 40] } },
      { t: "16 October, in the south: Schwarzenberg attacks Wachau and Liebertwolkwitz. Napoleon answers with Drouot's grand battery and a charge of thousands of Murat's horsemen. The Allied cavalry pushes them back.",
        p: { aBoh: [50, 57], fSou: [50, 48], fCav: [56, 53], fNap: [55, 43] } },
      { t: "The same day, in the north at Möckern, Blücher fights Marmont's VI Corps. Both sides take heavy losses. The day ends in a draw.",
        p: { aSil: [38, 12], fMar: [40, 18] } },
      { t: "17 October: a pause. Napoleon proposes an armistice, and the Allied sovereigns refuse. The Allies receive far larger reinforcements than the French: the Armies of the North and of Poland arrive from the east. Sources disagree on the exact day of the proposal.",
        p: { aNor: [80, 22], aPol: [80, 52] } },
      { t: "18 October: the ring closes. The bloodiest point is Probstheida, where the Allied attacks fail against the Guard's artillery. At Lindenau, to the west, Bertrand holds the road for the retreat.",
        p: { aBoh: [50, 52], aSil: [38, 22], aNor: [72, 26], aPol: [70, 48], aGy: [14, 52], fSou: [49, 45], fMar: [42, 25] } },
      { t: "At Paunsdorf, in the middle of the fighting, Reynier's Saxon soldiers (about 5,000 to 6,000) and the Württemberg cavalry change sides. They go over from Napoleon to the Allies.",
        p: { sax: [68, 33], wur: [74, 38] }, sw: { sax: "a", wur: "a" } },
      { t: "Without the Saxons, the French eastern flank opens up. The French line falls back closer to Leipzig, and the retreat to the west is settled.",
        p: { sax: [62, 34], wur: [66, 40], aNor: [64, 29], fSou: [48, 42], fCav: [54, 47], fNap: [54, 40] } },
      { t: "19 October: the French army crosses the Elster by the only bridge. The Allies discover the evacuation in the morning and attack the city. The rear guard, about 30,000 men, fights street by street.",
        p: { fNap: [14, 40], fSou: [24, 42], fMar: [26, 34], fCav: [22, 48], fBer: [18, 34], fRear: [42, 38],
             aBoh: [48, 46], aSil: [40, 24], aNor: [58, 30], aPol: [58, 46], sax: [54, 34], wur: [54, 41] } },
      { t: "Around one in the afternoon the bridge blows up too early, with Frenchmen still on it and the rear guard still in the city. The rear guard is trapped on the far side. Thousands die, and about 30,000 Frenchmen end up prisoners, many of them wounded or sick. Poniatowski drowns in the river.",
        p: { fRear: [34, 38], aBoh: [44, 42], aSil: [38, 28] }, x: ["fRear"] }
    ]
  },

  talas: {
    terrain: [
      { t: "note", x: 50, y: 5, l: "Talas river (exact position uncertain)" },
      { t: "hill", x: 94, y: 6, rx: 14, ry: 11, l: "Tian Shan" }
    ],
    units: [
      { id: "arV", s: "a", k: "inf", w: 6, h: 14, l: "Vanguard (Sa'd)" },
      { id: "arM", s: "a", k: "inf", w: 8, h: 22, l: "Ziyad ibn Salih" },
      { id: "tT", s: "b", k: "inf", w: 8, h: 14, l: "Tang (Gao)" },
      { id: "tK", s: "b", k: "cav", w: 8, h: 18, l: "Karluks" }
    ],
    steps: [
      { t: "Ziyad ibn Salih's Arabs come from the west. Gao Xianzhi comes from the east, with Tang soldiers and allied Karluks. Numbers vary widely between sources, and the exact layout of the troops is not known. The drawing is schematic.",
        p: { arV: [36, 36], arM: [24, 36], tT: [64, 28], tK: [64, 50] } },
      { t: "The Arab vanguard digs trenches and forms a dense line of shields and spears. When the bulk of Ziyad's army arrives, the Tang fall back toward Taraz.",
        p: { arV: [42, 36], arM: [32, 36], tT: [68, 30] } },
      { t: "For five days the two sides trade arrows, shield walls and the occasional cavalry charge. Neither breaks the other.",
        p: { arM: [42, 34], arV: [47, 36], tT: [62, 32] } },
      { t: "On the fifth day the Karluks change sides. By the most widely used account they were about two thirds of the Tang army. Arab sources say they had always been allies of the Abbasids.",
        p: { tK: [74, 34] }, sw: { tK: "a" } },
      { t: "Attacked from front and rear, the Tang hold out until night. Gao withdraws to his camp and wants to fight again the next day. Li Siye convinces him that this would destroy the army.",
        p: { arM: [52, 34], arV: [56, 36], tT: [66, 32], tK: [72, 32] } },
      { t: "The Tang army retreats east, toward the Tian Shan mountains. On the way, former allies from Fergana attack it.",
        p: { tT: [84, 24], arM: [64, 30], arV: [68, 32], tK: [78, 30] } },
      { t: "Li Siye cuts a path with the armoured cavalry, and Gao and many officers escape. Most of the troops are captured. Fewer than 2,000 men are said to have returned to Central Asia.",
        p: { tT: [90, 16], arM: [72, 28], arV: [76, 30] }, x: ["tT"] },
      { t: "Tang losses are uncertain: 20,000 to 30,000 dead according to Chinese sources, and 45,000 to 50,000 according to Arab sources. The Karluks never turned against the Chinese again: in 753 they submitted to the Tang.",
        p: { arM: [70, 30], arV: [74, 32], tK: [78, 40] }, x: ["tT"] }
    ]
  }
});
