// Army deployment diagrams, as data. Canvas is 100 x 70 units. Schematic, not to scale.
// units: id, s (side "a" | "b"), k (kind: inf | cav | ele | car | ship | camp), w, h, l (label)
// steps: t (caption), p (unit id -> [x, y, rotation]); positions carry over from the previous step.
//        x lists the units that are broken or routed from this step on (drawn faded).
//        sw (unit id -> "a" | "b") switches a unit to the other side from this step on (a defection).
// terrain: sea {x,y,w,h,l} | hill {x,y,rx,ry,l} | note {x,y,l}
const FORMATIONS = {
  maratona: {
    terrain: [{ t: "sea", x: 0, y: 0, w: 100, h: 8, l: "Sea (Persian ships)" }],
    units: [
      { id: "gL", s: "a", k: "inf", w: 18, h: 7, l: "Strengthened wing" },
      { id: "gC", s: "a", k: "inf", w: 26, h: 3.5, l: "Thin center" },
      { id: "gR", s: "a", k: "inf", w: 18, h: 7, l: "Strengthened wing" },
      { id: "pL", s: "b", k: "inf", w: 18, h: 6, l: "" },
      { id: "pC", s: "b", k: "inf", w: 26, h: 6, l: "Best Persian troops" },
      { id: "pR", s: "b", k: "inf", w: 18, h: 6, l: "" }
    ],
    steps: [
      { t: "Miltiades thins the center and strengthens both wings, to match the width of the Persian army.",
        p: { gL: [22, 56], gC: [50, 56], gR: [78, 56], pL: [22, 24], pC: [50, 24], pR: [78, 24] } },
      { t: "The Greeks run the last stretch of the advance, to spend as little time as possible under the arrows.",
        p: { gL: [22, 36], gC: [50, 36], gR: [78, 36] } },
      { t: "The Greek center gives way and falls back. But the stronger wings beat the Persian wings.",
        p: { gC: [50, 48], pC: [50, 37], gL: [22, 27], gR: [78, 27], pL: [22, 14], pR: [78, 14] }, x: ["pL", "pR"] },
      { t: "The Greek wings turn inward and close around the Persian center. The Persians flee to their ships.",
        p: { gL: [32, 33, 65], gR: [68, 33, -65], gC: [50, 46] }, x: ["pC"] }
    ]
  },

  leuctra: {
    units: [
      { id: "tSB", s: "a", k: "inf", w: 10, h: 4, l: "Sacred Band" },
      { id: "tCol", s: "a", k: "inf", w: 10, h: 16, l: "Column 50 ranks deep" },
      { id: "t2", s: "a", k: "inf", w: 16, h: 4, l: "" },
      { id: "t3", s: "a", k: "inf", w: 16, h: 4, l: "Line held back, on a diagonal" },
      { id: "t4", s: "a", k: "inf", w: 16, h: 4, l: "" },
      { id: "tCav", s: "a", k: "cav", w: 9, h: 4, l: "Cavalry" },
      { id: "sK", s: "b", k: "inf", w: 14, h: 6, l: "King and Spartan elite" },
      { id: "s2", s: "b", k: "inf", w: 16, h: 5, l: "Allies" },
      { id: "s3", s: "b", k: "inf", w: 16, h: 5, l: "Allies" },
      { id: "s4", s: "b", k: "inf", w: 16, h: 5, l: "Allies" },
      { id: "sCav", s: "b", k: "cav", w: 9, h: 4, l: "Cavalry" }
    ],
    steps: [
      { t: "Epaminondas gathers his strength in a very deep column, on the left, right opposite the Spartan king. The rest stays back, on a diagonal.",
        p: { tSB: [18, 42], tCol: [18, 54], t2: [37, 50], t3: [56, 55], t4: [75, 60], tCav: [40, 38],
             sK: [18, 16], s2: [38, 16], s3: [56, 16], s4: [74, 16], sCav: [40, 27] } },
      { t: "The Theban cavalry beats the Spartan, which falls back and gets in the way of its own infantry.",
        p: { tCav: [38, 29], sCav: [30, 20] }, x: ["sCav"] },
      { t: "The column hits the spot where the king stands. That is 50 ranks pushing against 12.",
        p: { tSB: [18, 24], tCol: [18, 36] } },
      { t: "King Cleombrotus dies and the Spartan elite gives way. Sparta's allies, who barely fought, walk away.",
        p: { sK: [18, 8], tSB: [18, 17], tCol: [18, 29], s2: [38, 8], s3: [56, 8], s4: [74, 8] }, x: ["sK"] }
    ]
  },

  gaugamela: {
    units: [
      { id: "mLeft", s: "a", k: "cav", w: 10, h: 5, l: "Thessalians (Parmenion)" },
      { id: "mPh", s: "a", k: "inf", w: 26, h: 5, l: "Phalanx" },
      { id: "mHyp", s: "a", k: "inf", w: 8, h: 4, l: "Hypaspists" },
      { id: "mComp", s: "a", k: "cav", w: 10, h: 5, l: "Companions (Alexander)" },
      { id: "mAgr", s: "a", k: "inf", w: 9, h: 2, l: "Agrianians" },
      { id: "mPrd", s: "a", k: "cav", w: 7, h: 4, l: "Paeonians and prodromoi" },
      { id: "mMerc", s: "a", k: "cav", w: 7, h: 4, l: "Menidas" },
      { id: "mRes", s: "a", k: "inf", w: 34, h: 3, l: "Second line" },
      { id: "camp", s: "a", k: "camp", w: 14, h: 5, l: "Camp" },
      { id: "pR", s: "b", k: "cav", w: 18, h: 5, l: "Mazaeus" },
      { id: "pC", s: "b", k: "inf", w: 22, h: 6, l: "Darius and the guard" },
      { id: "pInd", s: "b", k: "cav", w: 8, h: 4, l: "Persians and Indians" },
      { id: "pL", s: "b", k: "cav", w: 18, h: 5, l: "Bessus (Bactrians and Scythians)" },
      { id: "pCh", s: "b", k: "car", w: 26, h: 2.5, l: "Scythed chariots" }
    ],
    steps: [
      { t: "The Persian line is much wider. Alexander puts a second line behind the first and holds back both ends, at an angle, so as not to be surrounded.",
        p: { mLeft: [22, 52, -20], mPh: [44, 50], mHyp: [62, 50], mComp: [72, 50], mAgr: [72, 44], mPrd: [82, 46], mMerc: [88, 50, 20],
             mRes: [50, 59], camp: [50, 67], pR: [18, 15], pC: [48, 14], pInd: [62, 20], pL: [80, 15], pCh: [50, 24] } },
      { t: "Alexander starts moving diagonally to the right, leaving the ground that Darius had leveled. Bessus follows with his cavalry, so as not to be overtaken.",
        p: { mComp: [80, 46], mAgr: [80, 40], mHyp: [68, 47], mPh: [50, 47, -6], mPrd: [88, 42], mMerc: [93, 47, 20], pL: [90, 19] } },
      { t: "Alexander sends the mercenary horsemen of Menidas to hold back Bessus' cavalry. The more numerous Bactrians and Scythians push them back.",
        p: { mMerc: [93, 36], pL: [92, 28] } },
      { t: "The Paeonians and the light cavalry of Aretes join in. The cavalry fight on the right end evens out and pins Bessus far from the center.",
        p: { mPrd: [89, 33], mMerc: [95, 40], pL: [92, 24] } },
      { t: "Darius releases the scythed chariots. The Agrianians hurl javelins at the horses and the drivers. The infantry opens lanes, and the chariots that arrive drive straight through.",
        p: { pCh: [55, 58], mAgr: [74, 34] }, x: ["pCh"] },
      { t: "With Bessus pulled to the right, a gap opens between him and the Persian center.",
        p: { pInd: [70, 22], pC: [46, 14] } },
      { t: "Alexander suddenly turns. The Companions go through the gap in a wedge, with the hypaspists and the phalanx right behind, straight at Darius.",
        p: { mComp: [66, 24, -45], mHyp: [62, 31], mPh: [50, 32, -6], mAgr: [76, 28] } },
      { t: "Darius flees, and the Persian center goes after him.",
        p: { pC: [40, 4], mComp: [55, 15, -45], mHyp: [58, 22], mPh: [48, 24, -6] }, x: ["pC"] },
      { t: "At the other end, Mazaeus presses Parmenion. Persian and Indian horsemen break through the line and go to loot the camp, where the second line drives them out.",
        p: { pR: [18, 40], mLeft: [24, 52, -20], pInd: [44, 64], mRes: [44, 58] }, x: ["pInd"] },
      { t: "Alexander gives up the pursuit and turns back to relieve Parmenion. By the time he arrives, Mazaeus is already withdrawing. The victory is complete.",
        p: { mComp: [32, 36, -120], pR: [12, 18] }, x: ["pR", "pL"] }
    ]
  },

  canas: {
    units: [
      { id: "cG", s: "a", k: "inf", w: 24, h: 5, l: "Gauls and Spaniards" },
      { id: "cAfL", s: "a", k: "inf", w: 6, h: 12, l: "Africans" },
      { id: "cAfR", s: "a", k: "inf", w: 6, h: 12, l: "Africans" },
      { id: "cCavL", s: "a", k: "cav", w: 9, h: 5, l: "Heavy cavalry" },
      { id: "cCavR", s: "a", k: "cav", w: 9, h: 5, l: "Numidians" },
      { id: "rInf", s: "b", k: "inf", w: 34, h: 12, l: "Legions" },
      { id: "rCavL", s: "b", k: "cav", w: 9, h: 5, l: "Roman cavalry" },
      { id: "rCavR", s: "b", k: "cav", w: 9, h: 5, l: "Allied cavalry" }
    ],
    steps: [
      { t: "Hannibal puts the center forward, in an arc, with the weakest troops. The best infantry stays on the ends, held back.",
        p: { cG: [50, 44], cAfL: [26, 54], cAfR: [74, 54], cCavL: [9, 50], cCavR: [91, 50], rInf: [50, 20], rCavL: [9, 24], rCavR: [91, 24] } },
      { t: "The legions push the center, which slowly gives ground. On the end, the Carthaginian heavy cavalry destroys the Roman cavalry.",
        p: { rInf: [50, 33], cG: [50, 49], cCavL: [9, 28], rCavL: [9, 10] }, x: ["rCavL"] },
      { t: "The Romans go deeper and deeper into the arc. The Africans turn inward and attack from the sides.",
        p: { rInf: [50, 42], cG: [50, 54], cAfL: [29, 42], cAfR: [71, 42], cCavL: [78, 12], rCavR: [96, 10] }, x: ["rCavR"] },
      { t: "The cavalry returns and closes the rear. The Romans are surrounded and packed too tightly even to raise their weapons.",
        p: { cCavL: [40, 30], cCavR: [60, 30] } }
    ]
  },

  zama: {
    units: [
      { id: "rInf", s: "a", k: "inf", w: 36, h: 6, l: "Legions, with lanes between the units" },
      { id: "rCavL", s: "a", k: "cav", w: 10, h: 5, l: "Roman cavalry" },
      { id: "rCavR", s: "a", k: "cav", w: 10, h: 5, l: "Masinissa (Numidians)" },
      { id: "cEle", s: "b", k: "ele", w: 36, h: 3, l: "80 elephants" },
      { id: "c1", s: "b", k: "inf", w: 36, h: 4, l: "Mercenaries" },
      { id: "c2", s: "b", k: "inf", w: 36, h: 4, l: "Carthaginians" },
      { id: "c3", s: "b", k: "inf", w: 36, h: 4, l: "Hannibal's veterans" },
      { id: "cCavL", s: "b", k: "cav", w: 10, h: 5, l: "" },
      { id: "cCavR", s: "b", k: "cav", w: 10, h: 5, l: "" }
    ],
    steps: [
      { t: "Hannibal puts the elephants in front and three lines of infantry, with the veterans last.",
        p: { rInf: [50, 54], rCavL: [15, 54], rCavR: [85, 54], cEle: [50, 36], c1: [50, 27], c2: [50, 18], c3: [50, 9], cCavL: [15, 27], cCavR: [85, 27] } },
      { t: "The elephants charge and pass through the lanes, doing no damage. The Roman cavalry drives the Carthaginian cavalry off the field.",
        p: { cEle: [50, 66], rCavL: [8, 12], rCavR: [92, 12], cCavL: [5, 3], cCavR: [95, 3] }, x: ["cEle", "cCavL", "cCavR"] },
      { t: "The legions beat the first two lines and face Hannibal's veterans. The fight is evenly balanced.",
        p: { rInf: [50, 30], c1: [22, 40], c2: [78, 40], c3: [50, 21] }, x: ["c1", "c2"] },
      { t: "The cavalry returns from the pursuit and attacks the veterans from behind.",
        p: { rCavL: [40, 11], rCavR: [60, 11] }, x: ["c3"] }
    ]
  },

  trafalgar: {
    terrain: [{ t: "note", x: 86, y: 6, l: "North ↑" }],
    units: [
      { id: "f1", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f2", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f3", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f4", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f5", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f6", s: "b", k: "ship", w: 4, h: 9, l: "Franco-Spanish fleet (33)" },
      { id: "n1", s: "a", k: "ship", w: 9, h: 4, l: "" },
      { id: "n2", s: "a", k: "ship", w: 9, h: 4, l: "Nelson's column" },
      { id: "n3", s: "a", k: "ship", w: 9, h: 4, l: "" },
      { id: "c1", s: "a", k: "ship", w: 9, h: 4, l: "" },
      { id: "c2", s: "a", k: "ship", w: 9, h: 4, l: "Collingwood's column" },
      { id: "c3", s: "a", k: "ship", w: 9, h: 4, l: "" }
    ],
    steps: [
      { t: "The Franco-Spanish fleet sails in a single line. Nelson comes in two columns, facing it. Each symbol stands for several ships.",
        p: { f1: [72, 7], f2: [72, 18], f3: [72, 29], f4: [72, 40], f5: [72, 51], f6: [72, 62],
             n1: [36, 24], n2: [24, 24], n3: [12, 24], c1: [36, 46], c2: [24, 46], c3: [12, 46] } },
      { t: "On the approach, the leading ships take fire without being able to reply. That is the risk of the plan.",
        p: { n1: [58, 24], n2: [46, 24], n3: [34, 24], c1: [58, 46], c2: [46, 46], c3: [34, 46] } },
      { t: "The two columns break through the line and cut it into three pieces. As they pass, they fire from end to end into the enemy ships.",
        p: { n1: [80, 23.5], n2: [68, 23.5], n3: [56, 23.5], c1: [80, 45.5], c2: [68, 45.5], c3: [56, 45.5] } },
      { t: "The center and the rear are surrounded and beaten at close range. The van is slow to turn back and arrives late.",
        p: { n1: [80, 32, 90], n2: [64, 32, 90], n3: [64, 40, 90], c1: [80, 54, 90], c2: [64, 54, 90], c3: [80, 62, 90], f1: [72, 4] },
        x: ["f3", "f4", "f5", "f6"] }
    ]
  },

  austerlitz: {
    terrain: [
      { t: "hill", x: 64, y: 38, rx: 15, ry: 12, l: "Pratzen Heights" },
      { t: "sea", x: 40, y: 65, w: 30, h: 5, l: "Frozen lakes" },
      { t: "note", x: 90, y: 5, l: "North ↑" }
    ],
    units: [
      { id: "fN", s: "a", k: "inf", w: 6, h: 14, l: "Lannes and Murat" },
      { id: "fC", s: "a", k: "inf", w: 6, h: 14, l: "Soult (in the fog)" },
      { id: "fS", s: "a", k: "inf", w: 5, h: 8, l: "Weak right wing" },
      { id: "fD", s: "a", k: "inf", w: 5, h: 8, l: "Davout" },
      { id: "fG", s: "a", k: "inf", w: 6, h: 9, l: "Guard" },
      { id: "aN", s: "b", k: "inf", w: 6, h: 14, l: "Bagration" },
      { id: "aP", s: "b", k: "inf", w: 8, h: 14, l: "Allied center" },
      { id: "aS1", s: "b", k: "inf", w: 6, h: 10, l: "Attack columns" },
      { id: "aS2", s: "b", k: "inf", w: 6, h: 10, l: "" }
    ],
    steps: [
      { t: "Napoleon abandons the heights and shows a weak right wing, as bait. The Allies occupy the high ground.",
        p: { fN: [30, 14], fC: [34, 36], fS: [32, 56], fD: [8, 60], fG: [16, 30], aN: [62, 14], aP: [64, 38], aS1: [70, 54], aS2: [80, 48] } },
      { t: "The Allies take the bait: they come down from the heights to attack the French right. Davout arrives by forced march to hold it.",
        p: { aP: [58, 52], aS1: [46, 56], aS2: [56, 62, 90], fS: [30, 56], fD: [22, 62] } },
      { t: "The sun pierces the fog. Soult climbs the almost empty heights and cuts the Allied army in two.",
        p: { fC: [62, 37], fG: [44, 34] } },
      { t: "From the top, the French turn south and pin the Allied wing against the lakes. In the north, Bagration withdraws.",
        p: { fC: [58, 46, 90], fG: [60, 34], aN: [78, 10], fN: [50, 14] }, x: ["aP", "aS1", "aS2"] }
    ]
  },

  isandlwana: {
    terrain: [{ t: "hill", x: 50, y: 64, rx: 14, ry: 5, l: "Isandlwana Hill" }],
    units: [
      { id: "zC", s: "a", k: "inf", w: 26, h: 6, l: "Chest" },
      { id: "zL", s: "a", k: "inf", w: 14, h: 5, l: "Left horn" },
      { id: "zR", s: "a", k: "inf", w: 14, h: 5, l: "Right horn" },
      { id: "zRes", s: "a", k: "inf", w: 18, h: 4, l: "Loins (reserve)" },
      { id: "bLine", s: "b", k: "inf", w: 44, h: 2.5, l: "British line, stretched too thin" },
      { id: "bCamp", s: "b", k: "camp", w: 16, h: 6, l: "Camp" }
    ],
    steps: [
      { t: "The Zulu formation imitates a buffalo: the chest attacks head-on, the two horns encircle, and the loins wait behind.",
        p: { zC: [50, 16], zL: [76, 13], zR: [24, 13], zRes: [50, 5], bLine: [50, 42], bCamp: [50, 54] } },
      { t: "The chest advances and holds the attention of the British line. The horns run around the outside, far from the rifles.",
        p: { zC: [50, 32], zL: [90, 32, 70], zR: [10, 32, -70], zRes: [50, 18] } },
      { t: "The right horn circles behind the hill. The left closes the other side. The British ammunition is far away, in the camp.",
        p: { zL: [82, 54, 80], zR: [22, 66, -20], bLine: [50, 46] } },
      { t: "The line breaks, and the buffalo closes over the camp.",
        p: { zC: [50, 45], zL: [70, 56, 80], zR: [34, 62, -40], zRes: [50, 34] }, x: ["bLine", "bCamp"] }
    ]
  },

  hastings: {
    terrain: [{ t: "hill", x: 50, y: 17, rx: 44, ry: 10, l: "Senlac Hill" }],
    units: [
      { id: "eA", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "eB", s: "b", k: "inf", w: 26, h: 5, l: "Shield wall (Harold)" },
      { id: "eC", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "nArc", s: "a", k: "inf", w: 50, h: 2.5, l: "Archers" },
      { id: "nInf", s: "a", k: "inf", w: 50, h: 4, l: "Infantry" },
      { id: "nCavL", s: "a", k: "cav", w: 14, h: 5, l: "Bretons" },
      { id: "nCavC", s: "a", k: "cav", w: 16, h: 5, l: "William" },
      { id: "nCavR", s: "a", k: "cav", w: 14, h: 5, l: "French and Flemish" }
    ],
    steps: [
      { t: "The English fight on foot, in a shield wall on top of the hill. William has archers, infantry and cavalry, in three lines.",
        p: { eA: [27, 19], eB: [50, 19], eC: [73, 19], nArc: [50, 42], nInf: [50, 50], nCavL: [22, 60], nCavC: [50, 60], nCavR: [78, 60] } },
      { t: "The arrows hit the shields. The infantry and then the cavalry attack uphill, and the wall holds.",
        p: { nInf: [50, 28], nCavL: [22, 36], nCavC: [50, 36], nCavR: [78, 36] } },
      { t: "The Bretons fall back. Part of the English comes down the hill after them, leaves the formation and is surrounded by the cavalry.",
        p: { nCavL: [14, 54], eA: [24, 40], nCavC: [38, 46, -35], nInf: [56, 30] }, x: ["eA"] },
      { t: "The wall becomes short and thin. Late in the afternoon, Harold is killed and the defense collapses.",
        p: { nCavL: [22, 30], nCavC: [50, 26], nCavR: [76, 26], nInf: [50, 33] }, x: ["eB", "eC"] }
    ]
  },

  waterloo: {
    terrain: [{ t: "hill", x: 48, y: 15, rx: 46, ry: 8, l: "Mont-Saint-Jean Ridge" }],
    units: [
      { id: "wL", s: "a", k: "inf", w: 60, h: 5, l: "Wellington, behind the ridge" },
      { id: "wH", s: "a", k: "camp", w: 8, h: 5, l: "Hougoumont" },
      { id: "wS", s: "a", k: "camp", w: 6, h: 4, l: "La Haye Sainte" },
      { id: "pr", s: "a", k: "inf", w: 8, h: 14, l: "Prussians" },
      { id: "fR", s: "b", k: "inf", w: 16, h: 5, l: "Reille" },
      { id: "fE", s: "b", k: "inf", w: 22, h: 5, l: "D'Erlon" },
      { id: "fCav", s: "b", k: "cav", w: 18, h: 5, l: "Ney's cavalry" },
      { id: "fG", s: "b", k: "inf", w: 12, h: 5, l: "Imperial Guard" },
      { id: "fLob", s: "b", k: "inf", w: 8, h: 5, l: "Lobau" }
    ],
    steps: [
      { t: "Wellington hides most of his troops behind the ridge, with two fortified farms in front. The French attack Hougoumont all day long without taking it.",
        p: { wL: [48, 17], wH: [20, 32], wS: [48, 29], pr: [104, 44], fR: [22, 42], fE: [68, 50], fCav: [44, 58], fG: [50, 67], fLob: [74, 60] } },
      { t: "D'Erlon attacks the allied center-left in large columns and is repelled by a charge of the British cavalry.",
        p: { fE: [68, 27] } },
      { t: "Ney launches the cavalry, without infantry alongside, against the British squares. It does not break a single one. The Prussians appear on the flank.",
        p: { fE: [68, 44], fCav: [38, 25], pr: [90, 46], fLob: [80, 52, 90] } },
      { t: "Last throw of the dice: the Imperial Guard climbs the ridge and falls back, for the first time in its history. Wellington orders an advance, and the Prussians come in from the side.",
        p: { fCav: [42, 48], fG: [36, 27], wL: [48, 21], pr: [80, 54] }, x: ["fCav", "fG", "fE", "fR", "fLob"] }
    ]
  }
};
