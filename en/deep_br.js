// In-depth battles, batch br: helsingborg, milnebay (reader-suggested pack).
// Checked against the English, Swedish and Portuguese Wikipedia articles on the Battle of Helsingborg (1710) and the
// Battle of Milne Bay, the Wikipedia articles on the Kokoda Track campaign and the Battle of the Tenaru, the Australian
// War Memorial and Department of Veterans' Affairs pages on Milne Bay, and the works those pages cite (Coulthard-Clark,
// McCarthy, Tanaka, Brune). Where sources disagree the text says so.
// Helsingborg: sources describe the movements but not each regiment's exact place, so the diagram is schematic.
// Aircraft are not drawn in the Milne Bay diagram (unit_kinds.js is not edited here).

Object.assign(GLOSSARY, {
  "calendário sueco": "The calendar Sweden used between 1700 and 1712, one day ahead of the Julian. So 28 February 1710 in Sweden is 27 February in the Julian and 10 March in the Gregorian.",
  "calendário gregoriano": "The calendar we use today. Denmark adopted it in 1700, which is why the Danes date Helsingborg to 10 March.",
  "escânia": "A region at the far south of Sweden, a few kilometers from Denmark. It was Danish for centuries and became Swedish in 1658.",
  "paz de travendal": "A 1700 treaty that took Denmark out of the Great Northern War, after the young Charles XII threatened Copenhagen.",
  "pedágio do sund": "A toll Denmark charged ships passing through the Sound, the strait between it and Scania. It was a major source of income.",
  "ala do exército": "Each side of a battle line. The left wing and the right wing are at the ends, usually with the cavalry.",
  "guarda real a pé": "An elite infantry regiment, charged with protecting the king. The Danes called theirs the Livgarde til Fods.",
  "força naval especial de desembarque": "A Japanese Navy infantry unit (SNLF), used in landings. It was lighter and less trained for long land combat than the army.",
  "pista de pouso": "A strip of cleared, leveled ground where aircraft take off and land. At Milne Bay, rain and mud made building one a huge job.",
  "placas marston": "Perforated steel plates, locked together, that made a quick airstrip on soft ground.",
  "kittyhawk": "The American P-40 fighter, flown by the Australian squadrons. It was sturdy and carried bombs and machine guns, a good mix for attacking barges and troops.",
  "brigada australiana": "A group of three infantry battalions, about 2,000 to 3,000 men, plus support, under a brigadier.",
  "malária": "A disease carried by mosquitoes, with high fever and weakness. At Milne Bay, more than a sixth of the Allied force fell ill, including the commander."
});

Object.assign(DEEP, {
  helsingborg: {
    war: "Great Northern War (1700–1721)",
    hook: "Denmark landed to take Scania back and was out of it five days after a battle that began in thick fog.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "[[Scania|escânia]] is the southern tip of Sweden. It was Danish for centuries and became Swedish in 1658. The Danes never accepted that, and tried to take it back by force in 1676, when they were beaten at Lund. That war ended without changing the border.",
        "The Great Northern War began in 1700, when Denmark, Russia and Poland attacked Sweden together. The young Charles XII knocked Denmark out of the war right at the start, with the [[Peace of Travendal|paz de travendal]]. But on 8 July 1709 he lost his army at Poltava and fled to the Ottoman Empire. Denmark saw its chance, declared war again and landed in Scania.",
        { h: "The road to Helsingborg" },
        { timeline: [
          ["1658", "Scania passes from Denmark to Sweden."],
          ["1676", "The Danes try to take it back and lose at Lund."],
          ["1700", "The Peace of Travendal takes Denmark out of the war."],
          ["8 Jul 1709", "The Swedish king loses at Poltava."],
          ["2 Nov 1709", "About 15,000 Danes land at Råå, next to Helsingborg."],
          ["Jan 1710", "The Danes beat a smaller Swedish force near Kristianstad."],
          ["28 Feb 1710", "The battle, in the Swedish calendar."],
          ["5 Mar 1710", "The last Danes leave Scania."]
        ]},
        "Denmark said Sweden was dodging the [[Sound Toll|pedágio do sund]] and mistreating the local population. In practice, with the Swedish king far away and his army lost, Scania was poorly defended, and Denmark wanted to take advantage."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Magnus Stenbock" },
        "A Swedish general, chosen to defend Scania while the king was in exile. He did not have the army he needed: he built one from recruits and new regiments at Växjö, plus one ready unit and the Scanian cavalry regiments, re-raised after being destroyed at Poltava. The enemy was already inside the country, and he had only a few weeks.",
        { h: "Jørgen Rantzau" },
        "The Danish commander. He took over the army in mid-February, when General Reventlow fell ill. Described as a brave horseman, more used to leading charges than directing a battle. On the morning of 28 February he decided the Swedes could not move in that fog. He was wrong.",
        { h: "The other names" },
        "On the Swedish side, Jacob Burensköld, Stenbock's closest friend and a cavalry veteran, led the first fighting at Brohuset; Wilhelm Bennet led the vanguard of about 1,000 horsemen. On the Danish side, Christian Rodsteen commanded the right wing and had warned, unheeded, that it would be attacked; Frantz Joachim von Dewitz, praised by Reventlow as the only good leader he had been given, commanded the west of the line; and Valentin von Eickstedt ended up ordering the retreat."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Each side had about 14,000 men. By the most-used table, the Swedes had 9,000 foot, 5,000 horse and 34 guns; the Danes, 10,000 foot, 4,000 horse and 32 guns. The sources do not agree perfectly: the Danish general staff counted 13,100 men, and Stenbock himself estimated 13,800.",
        "The difference was in quality. Many Swedish regiments were new and had never fought, with worse horses than the Danes; the recruits had trained on the ice of a lake near Växjö. The Danes had veterans of the War of the Spanish Succession, though with some weaker [[militia|milícia]] units, and they reinforced the ends of their line with infantry, which the Swedes did not do. The Danish line was almost 3 km long.",
        { h: "The terrain" },
        "The heights of Ringstorp, northeast of Helsingborg, with the town and its fortifications behind the Danes. Their left wing lay between the Pålsjö valley, near the sea, and the heights, where most of the artillery stood.",
        { h: "The fog" },
        "Stenbock set out around 2 a.m., in five columns, with the artillery in the center, the infantry on the sides and the cavalry at the ends. He went west and then south, so he arrived from the north, and not from the side the Danes expected. At 6 a.m., Rantzau rode out to look and could not see three horse-lengths ahead. He concluded that no one would attack so soon, and treated the warnings of movement to the north as small raiding parties.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, Bennet's vanguard caught a Danish patrol of ten men and a sergeant, and the Swedish army formed up. When the fog lifted, around noon, the Danish artillery opened fire from the heights.",
        "Second, Rantzau reinforced his left [[wing|ala do exército]], which seemed the most threatened. Stenbock did not attack there: he sent his cavalry east, to get around the Danish right.",
        "Third, Rantzau sent the cavalry of his right wing to meet it. It was a move of that end alone, but the center took it for a general advance, and the Danish army left its protected position and turned north. The line stretched and opened gaps that the reserves could not fill.",
        "Fourth, at Brohuset, the cavalry fight swayed back and forth. Burensköld was captured early, but Swedish reinforcements pushed the Danes back.",
        "Fifth, in the center, the light guns of the Swedish regiments ([[regimental artillery|artilharia de regimento]]) wore down the Danish infantry.",
        "Sixth, Rantzau fought in person and was shot through the lung. A rumor spread that the right wing was surrounded, and it broke toward Helsingborg. Without its commander, the Danish center had no direction.",
        "Seventh, the guards and the [[grenadiers|granadeiros]], placed at the ends, could not hold the center. Von Dewitz had been ordered east and was not where he should have been, which opened a gap between the center and the west. The Swedish cavalry went in through it and surrounded the grenadiers who were left. When the Danish cavalry fell back, the infantry went with it.",
        "Eighth, only the [[foot guards|guarda real a pé]] and the grenadiers kept resisting before withdrawing. Eickstedt ordered a general retreat, and the Danes ran for the fortifications of Helsingborg. The Swedish cavalry made several charges and killed many of those fleeing.",
        { note: "The casualties: sources give about 2,800 to 3,000 Swedish casualties (897 killed and 2,098 wounded in the most detailed count) and, among the Danes, 1,500 killed, 3,500 wounded and 2,677 captured." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Danish army lost more than 7,500 men and shut itself in Helsingborg. Stenbock decided not to storm the town. A Swedish council of war judged the army too weak for that, and he bombarded it. Von Dewitz refused to surrender. On 5 March, the Danes left Scania, after killing their horses and disabling their guns.",
        "The town lay in ruins. The bodies of people and animals contaminated the wells, and a plague epidemic spread through the region.",
        { h: "Why it matters" },
        "It was Denmark's last attempt to take Scania back by force. The region has been Swedish ever since. King Frederick IV, who had gone to Helsingborg on 23 February and returned to Copenhagen the next day after sending reinforcements, was not there.",
        "Stenbock became a national hero and, in May 1710, the Privy Council named him field marshal. Years later he would be captured by the Danes and die in captivity in Copenhagen, in 1717.",
        { h: "Curiosities and controversies" },
        { note: "The dates: in 1710 Sweden used the [[Swedish calendar|calendário sueco]], one day ahead of the Julian, and Denmark already used the [[Gregorian calendar|calendário gregoriano]]. The same day is 28 February for the Swedes and 10 March for the Danes. Both names appear in books." },
        { note: "The sources: the accounts are largely Swedish and Danish, written afterward by people who wanted to explain the defeat or the victory. The casualty figures vary a little from one source to another." }
      ]}
    ]
  },

  milnebay: {
    war: "Papuan campaign (1942–1943), Second World War",
    hook: "The Japanese landed expecting a few hundred defenders and found thousands, with aircraft. It was the first time Japan gave up an objective on land and withdrew.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In early 1942, Japan had advanced across Asia and the Pacific. The eastern tip of New Guinea, a territory under Australian administration, lay between it and Australia. The Japanese wanted to take Port Moresby, the Allied base on the south coast, and in July they landed on the north coast and began crossing the mountains by the Kokoda Track.",
        "The Allies, for their part, had been building airstrips at Milne Bay, a long inlet at the tip of the island, from which fighters could reach the Japanese bases and ships at Rabaul and in the Solomon Islands. The Japanese decided to take them.",
        { h: "The road to Milne Bay" },
        { timeline: [
          ["25 Jun 1942", "The first Allied troops reach the bay."],
          ["22 and 25 Jul", "The first Kittyhawks land on No. 1 Strip."],
          ["7 Aug", "American Marines land on Guadalcanal, which draws Japanese attention away."],
          ["12–21 Aug", "The 18th Brigade, veterans of Tobruk, arrives."],
          ["24 Aug", "Kittyhawks destroy the barges of a Japanese group that was to land at Taupota, near Goodenough Island."],
          ["25 Aug", "The Japanese convoy reaches the bay. The battle begins."],
          ["5 Sep", "The Japanese order a withdrawal."],
          ["7 Sep", "The fighting ends."]
        ]},
        "Milne Bay is a terrible place to fight. It gets about 5,100 mm of rain a year, with mangrove swamps and rivers that rise suddenly. [[Malaria|malária]] was so common that more than a sixth of the Allied force fell ill, including the commander. The firm ground is concentrated at the head of the bay, and a dirt road runs through it among the plantations."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Cyril Clowes" },
        "An Australian major general, commander of Milne Force. He formally took command on 22 August, three days before the landing. He also fell ill with malaria.",
        { h: "Shojiro Hayashi" },
        "The Japanese commander of the 5th Kure Special Naval Landing Force. He died in the attack on No. 3 Strip, in the early hours of 31 August. Commander Minoru Yano took over and ended up wounded. On 2 September, Yano radioed: 'We have reached the worst possible situation.'",
        { h: "The other names" },
        "On the Allied side, Brigadier John Field, of the 7th Brigade, and Brigadier George Wootten, of the 18th; Corporal John French, who was awarded the Victoria Cross posthumously. On the Japanese side, Rear Admiral Mitsuharu Matsuyama commanded the naval forces, and Vice Admiral Gunichi Mikawa the 8th Fleet, at Rabaul."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Allies had about 8,800 men: 7,459 Australians and 1,365 Americans, of whom about 4,500 were infantry. The 7th [[Australian brigade|brigada australiana]] was militia ([[militia|milícia]]) (9th, 25th and 61st Battalions); the 18th was made up of veterans of Tobruk (2/9th, 2/10th and 2/12th). The Americans were mostly engineers, who built the [[airstrips|pista de pouso]], and antiaircraft gunners. Nos. 75 and 76 Squadrons RAAF flew the [[Kittyhawks|kittyhawk]].",
        "On the first night the Japanese landed between about 800 and more than 1,000 men from the Kure and Sasebo naval forces ([[SNLF|força naval especial de desembarque]]), with two light tanks. The total count, with reinforcements, is 1,943. The Japanese plan assumed 300 to 600 defenders.",
        { note: "The Japanese numbers are the most uncertain: sources give from about 800 to more than 1,000 men on the first night and 1,943 in all, and these figures do not reconcile well." },
        { h: "The terrain" },
        "The plain at the head of the bay, with No. 1 Strip (near Gili Gili) and No. 3 Strip (near Kilarbo), cut by rivers and mangroves, with the bay to the south and the Stirling Range to the north. No. 1 Strip had [[Marston mat|placas marston]] on only part of it and was often under water. No. 3 was still being built.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, on the night of 25 to 26 August, the Japanese convoy landed about 3 km east of the planned point. The Kittyhawks attacked during the day but did little damage. The luggers carrying D Company of the 61st, late in its withdrawal, ran into the barges and traded fire.",
        "Second, on 26 August the Japanese advanced west with the two tanks and ran into B Company of the 61st, at KB Mission. The Australians counterattacked, fell back and, after a night attack, withdrew to the Gama River. The aircraft burned supplies and beached barges.",
        "Third, on 27 August, the 2/10th Battalion, with about 420 men, was sent to the Gama River. At night, two tanks with their headlights on attacked, and within hours the Japanese were inside the position. The Australians fell back.",
        "Fourth, on 28 August, the tank attack pushed the 2/10th back to No. 3 Strip, where the 25th Battalion held the line. At dawn, the tanks bogged down in the mud and were abandoned. The Japanese fell back about 2 km. In the evening reinforcement ships appeared, and Clowes cancelled the counterattack he had planned and took the Kittyhawks out of the area as a precaution.",
        "Fifth, on the night of 29 August, the Japanese reinforcements arrived: 567 men of the 3rd Kure Force and 200 of the 5th Yokosuka, landed at Waga Waga.",
        "Sixth, at 3 a.m. on 31 August, the Japanese attacked No. 3 Strip. Machine guns, mortars and artillery stopped them in two [[banzai|banzai]] charges. Hayashi died. Yano tried to get around Stephen's Ridge but fell back before dawn.",
        "Seventh, the same day, the 2/12th Battalion counterattacked along the north coast and reached KB Mission late in the afternoon, after bayonet fighting. At night, about 300 Japanese attacked the Gama River, and the Australians estimated up to 90 dead.",
        "Eighth, from 1 to 4 September, the 2/9th was taken by barge to KB Mission and advanced east. At Goroni, on 4 September, Corporal French destroyed two machine-gun nests with grenades and attacked a third with a submachine gun. He was mortally wounded. By then, Yano's force had about 50 men fit to fight, and all the company commanders were dead.",
        "Ninth, on 5 September, the Japanese command ordered the withdrawal, carried out by sea that same night. On 6 September, the cruiser Tenryū and the destroyer Arashi shelled the port and left the freighter Anshun on her side. On the 7th, the fighting ended."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Of the 1,943 Japanese landed, ships of the 18th Cruiser Division took off 1,318, 311 of them wounded. Japanese deaths are estimated at about 700 to 750 by the Australian sources and 625 by the Japanese source (Tanaka). The Allies had 373 casualties, 167 of them killed or missing, plus 14 Americans killed. About 350 Japanese were stranded on Goodenough Island until the end of October.",
        "The bay became an important base for the operations that followed, and Allied morale rose. The chief of staff of the Japanese Combined Fleet, Ugaki, judged that the landing force was of poor quality, with many older men of little spirit.",
        { h: "Why it matters" },
        "The British field marshal William Slim said the Australians 'inflicted on the Japanese their first undoubted defeat on land'. The caveat is that earlier setbacks, such as Tenaru, had not made the Japanese give up the operation. At Milne Bay, for the first time, they abandoned the objective and withdrew.",
        { h: "Curiosities and controversies" },
        { note: "What 'first defeat' means: there was an earlier Japanese setback, on 21 August, when American Marines destroyed the Ichiki detachment at Tenaru, on Guadalcanal. And that same month the Australians were being pushed back along the Kokoda Track, toward Port Moresby. The Japanese withdrawal from Kokoda only began on 26 September, among other reasons because of the failure to retake Guadalcanal. Milne Bay was a step, not the turning point on its own." },
        { note: "The Japanese committed atrocities against Papuan civilians during the battle: at least 59 civilians were murdered between 25 August and 6 September. The historian Mark Johnston argues that this hardened Australian attitudes for the rest of the war. No Japanese was prosecuted for Milne Bay." },
        { note: "The miscalculation: the Japanese plan assumed 300 to 600 defenders, and there were about 4,500 infantrymen." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  helsingborg: {
    terrain: [
      { t: "sea", x: -4, y: 40, w: 14, h: 34, l: "Öresund" },
      { t: "hill", x: 34, y: 48, rx: 14, ry: 6, l: "Ringstorp heights" },
      { t: "note", x: 12, y: 64, l: "Helsingborg" },
      { t: "note", x: 84, y: 38, l: "Brohuset" }
    ],
    units: [
      { id: "sInf", s: "a", k: "inf", w: 28, h: 5, l: "Swedish infantry and guns" },
      { id: "sCavW", s: "a", k: "cav", w: 14, h: 4, l: "Swedish cavalry (west)" },
      { id: "sCavE", s: "a", k: "cav", w: 16, h: 4, l: "Swedish cavalry (east)" },
      { id: "dCavW", s: "b", k: "cav", w: 12, h: 4, l: "Cavalry (Pålsjö)" },
      { id: "dInfW", s: "b", k: "inf", w: 16, h: 5, l: "Left-wing infantry (Dewitz)" },
      { id: "dInfC", s: "b", k: "inf", w: 22, h: 5, l: "Center infantry" },
      { id: "dGd", s: "b", k: "inf", w: 12, h: 4, l: "Foot guards and grenadiers" },
      { id: "dCavE", s: "b", k: "cav", w: 14, h: 4, l: "Right-wing cavalry (Rodsteen)" }
    ],
    steps: [
      { t: "In the fog, Stenbock arrives from the north in five columns. The Danes expected the attack from another direction and stand in a line almost 3 km long, with the artillery on the heights.",
        p: { sInf: [50, 12], sCavW: [27, 13], sCavE: [76, 13], dCavW: [14, 52], dInfW: [30, 56], dInfC: [54, 56], dGd: [70, 58], dCavE: [86, 52] } },
      { t: "The fog lifts and the Danish artillery opens fire. Rantzau reinforces the left wing, to the west.",
        p: { dInfC: [50, 55], dInfW: [28, 53] } },
      { t: "Stenbock does not attack the left wing: he sends his cavalry east, to get around the Danish right.",
        p: { sCavE: [84, 24], sInf: [50, 18] } },
      { t: "Rantzau sends the right-wing cavalry to meet it. The center takes it for a general advance, and the Danish line leaves its protected position and turns north.",
        p: { dCavE: [86, 36], dInfC: [52, 48], dInfW: [30, 50], dGd: [72, 52] } },
      { t: "At Brohuset, the cavalry fights in both directions. Burensköld is captured early, but Swedish reinforcements push the Danes back.",
        p: { sCavE: [84, 32], dCavE: [88, 42] } },
      { t: "In the center, the guns of the Swedish regiments wear down the Danish infantry.",
        p: { sInf: [50, 28], dInfC: [52, 42] } },
      { t: "Rantzau is shot through the lung. A rumor spreads that the right wing is surrounded, and it breaks toward Helsingborg.",
        p: { dCavE: [78, 62] }, x: ["dCavE"] },
      { t: "A gap opens between the center and the west. The Swedish cavalry goes in through it, and the Danish cavalry falls back; the center infantry breaks up.",
        p: { sCavW: [32, 40], dCavW: [14, 62], dInfC: [46, 58] }, x: ["dCavW", "dInfC"] },
      { t: "The foot guards and the grenadiers resist last. Eickstedt orders a general retreat, and the Danes run for the fortifications of Helsingborg.",
        p: { sInf: [50, 40], sCavE: [70, 46], dGd: [58, 52], dInfW: [26, 62] }, x: ["dGd", "dInfW"] }
    ]
  },

  milnebay: {
    terrain: [
      { t: "sea", x: -4, y: 52, w: 108, h: 24, l: "" },
      { t: "note", x: 50, y: 66, l: "Milne Bay" },
      { t: "hill", x: 50, y: 2, rx: 54, ry: 10, l: "Stirling Range" },
      { t: "note", x: 10, y: 34, l: "Gili Gili" },
      { t: "note", x: 34, y: 34, l: "No. 3 Strip" },
      { t: "note", x: 52, y: 34, l: "Gama River" },
      { t: "note", x: 70, y: 34, l: "KB Mission" },
      { t: "note", x: 90, y: 34, l: "Waga Waga" }
    ],
    units: [
      { id: "aBase", s: "a", k: "camp", w: 14, h: 5, l: "No. 1 Strip and air base" },
      { id: "a61", s: "a", k: "inf", w: 9, h: 4, l: "61st Battalion (militia)" },
      { id: "a25", s: "a", k: "inf", w: 9, h: 4, l: "25th Battalion" },
      { id: "a210", s: "a", k: "inf", w: 9, h: 4, l: "2/10th Battalion" },
      { id: "a212", s: "a", k: "inf", w: 9, h: 4, l: "2/12th Battalion" },
      { id: "a29", s: "a", k: "inf", w: 9, h: 4, l: "2/9th Battalion" },
      { id: "jMain", s: "b", k: "inf", w: 12, h: 5, l: "Japanese force (SNLF)" },
      { id: "jTank", s: "b", k: "car", w: 6, h: 3, l: "Two light tanks" },
      { id: "jRein", s: "b", k: "inf", w: 10, h: 4, l: "Reinforcements (29 Aug)" },
      { id: "jShip", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Japanese convoy" }
    ],
    steps: [
      { t: "On the night of 25 to 26 August, the Japanese convoy lands about 3 km east of the planned point. The Australians are spread from No. 1 Strip to KB Mission.",
        p: { aBase: [10, 42], a61: [66, 40], a25: [36, 42], a210: [22, 44], a212: [14, 46], a29: [10, 48], jMain: [86, 40], jTank: [92, 44], jShip: [88, 60], jRein: [97, 56] }, },
      { t: "On 26 August, the Japanese advance west with the tanks and hit B Company of the 61st, at KB Mission. The Australians fall back to the Gama River, and the aircraft burn supplies and beached barges.",
        p: { jMain: [70, 40], jTank: [76, 43], a61: [54, 40] } },
      { t: "On 27 August, the 2/10th is sent to the Gama River. At night, two tanks with their headlights on attack, and the Japanese get into the position. The Australians fall back.",
        p: { a210: [50, 42], jMain: [54, 40], jTank: [58, 43], a61: [44, 42] } },
      { t: "On 28 August, the 2/10th is pushed back to No. 3 Strip, where the 25th holds the line. At dawn, the tanks bog down in the mud and are abandoned.",
        p: { a210: [38, 42], a25: [34, 40], a61: [30, 44], jMain: [44, 40], jTank: [40, 43] }, x: ["jTank"] },
      { t: "The Japanese fall back about 2 km. On the night of 29 August, the reinforcements arrive and land at Waga Waga.",
        p: { jMain: [58, 40], jRein: [90, 42], jShip: [92, 60] } },
      { t: "At 3 a.m. on 31 August, the Japanese attack No. 3 Strip. Machine guns, mortars and artillery stop them in two banzai charges. Hayashi dies.",
        p: { jMain: [44, 40], jRein: [70, 40] } },
      { t: "The same day, the 2/12th counterattacks along the north coast and reaches KB Mission, after bayonet fighting.",
        p: { a212: [66, 40], jMain: [78, 42], jRein: [88, 42] } },
      { t: "From 1 to 4 September, the 2/9th advances east, by barge and on foot. At Goroni, Corporal French destroys machine-gun nests and dies. About 50 Japanese are left fit to fight.",
        p: { a29: [74, 42], a212: [82, 40], jMain: [92, 42], jRein: [96, 44] } },
      { t: "On 5 September, the Japanese command orders the withdrawal, carried out by sea that same night. On 6 September, the cruiser Tenryū shells the port, and on 7 September the fighting ends.",
        p: { jShip: [94, 60] }, x: ["jMain", "jRein"] }
    ]
  }
});
