// In-depth battles, batch bk: sebastopol1854 (Siege of Sevastopol), buxar, wagram, bullrun1, shiloh.
// Checked against the English, Portuguese and French Wikipedia articles on the Siege of Sevastopol, the Battle of
// Malakoff and the Battle of the Great Redan, and the works they cite (Fletcher and Ishchenko, Clodfelter, Gooch).
// Dates are New Style (Gregorian); Russian sources use the Julian calendar, twelve days behind in the 1850s.
// Where sources disagree (bombardment dates, deaths from disease, the Little Redan) the text says so.

Object.assign(GLOSSARY, {
  "malakoff": "A hill east of Sevastopol harbor, with an earth redoubt on top. The Russians call it Malakhov Kurgan. It was the key to the defenses: whoever took it could look down on the whole city and bay.",
  "mamelon": "A small fortified hill in front of the Malakoff. The Russians fortified it in February 1855, and the French took it in June to get closer to the redoubt.",
  "gabiões": "Cylindrical baskets of wicker or metal, filled with earth. Stacked up, they made a parapet that stood up well to cannon fire."
});

Object.assign(DEEP, {
  sebastopol1854: {
    war: "Crimean War (1853–1856)",
    hook: "The Allies wanted to take Sevastopol in days. It took them eleven months, and winter killed more men than bullets did.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1853, Russia went to war with the Ottoman Empire. Britain and France feared that the Russians would dominate the Black Sea and, after that, the road to the Mediterranean, and they entered the war on the Ottoman side in 1854. Later, the Kingdom of Piedmont-Sardinia sent troops too. The target chosen was Sevastopol, at the southern tip of the Crimean peninsula, the base of the Russian Black Sea fleet.",
        "The Allies landed at Yevpatoria on 14 September 1854, with about 50,000 men. On 20 September, they beat the Russians at the Alma River, the first big battle of the war, which cost the Russians about 6,000 men. Instead of attacking the city from the north, they went around it and settled to the south, on the Chersonese heights. The British used the port of Balaklava as their base. The French commander, Saint-Arnaud, fell ill and died shortly after the Alma, and was replaced by Canrobert.",
        { h: "The road to the walls" },
        { timeline: [
          ["14 Sep 1854", "The Allies land at Yevpatoria."],
          ["20 Sep", "Allied victory at the Alma."],
          ["17 Oct", "First great bombardment. Admiral Kornilov is killed."],
          ["25 Oct and 5 Nov", "Battles of Balaklava and Inkerman, outside the siege lines."],
          ["End of Mar 1855", "A railway links Balaklava to the trenches."],
          ["Jun 1855", "The French take the Mamelon. On 18 June, the attack on the Malakoff and the Great Redan fails."],
          ["16 Aug", "The Russian field army attacks at the Chernaya River and is repulsed."],
          ["5 Sep", "The sixth and strongest bombardment begins."],
          ["8 Sep", "Final assault: the French take the Malakoff."],
          ["9 Sep", "The Russians leave the southern part of the city."]
        ]},
        "The Allies expected a short [[siege|cerco]]. The Russians used the time they had far better than anyone predicted, and the siege turned into a duel of trenches and guns through a terrible winter."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Eduard Totleben, lieutenant colonel" },
        "A military engineer in the Russian army, in charge of the defensive works. The Allies looked at the walls of the city and thought them weak. Totleben did the opposite of what was expected: instead of relying on stone walls, he raised in a few weeks a ring of earth forts, with [[gabions|gabiões]], thick parapets and well-placed guns, which absorbed enemy fire and were repaired at night. The [[Malakoff|malakoff]], the Great [[redan|redan]] and the Little Redan became the central points.",
        { h: "Kornilov and Nakhimov" },
        "Vice Admiral Vladimir Kornilov organized the defense. Prince Menshikov, commander of the Russian army, stayed outside the city. Kornilov died on 17 October 1854, in the first bombardment, according to the sources after British fire hit an ammunition store in the Malakoff redoubt. Vice Admiral Pavel Nakhimov took over and became the soul of the resistance, moving along the front lines. He was hit in the head by an Allied sniper in July 1855 and died days later. According to tradition, Kornilov's last order was to defend Sevastopol; the sources do not agree on the exact words.",
        { h: "On the Allied side" },
        "The French general François Canrobert commanded until May 1855 and was replaced by Aimable Pélissier, who was tougher and ready to attack. Among the British, the commander was Lord Raglan, who died of illness on 28 June 1855, ten days after the failure of 18 June. General James Simpson took his place. General Patrice de MacMahon commanded the French division that took the Malakoff in September. General John Fox Burgoyne, a British engineer, was the one who pointed to the Malakoff as the key to the city."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary a lot by source and date. The Allies had about 67,000 men in October 1854 and about 175,000 in July 1855, according to Wikipedia's counts: about 75,000 French, 35,000 British, 60,000 Ottomans and 15,000 Piedmontese. In August 1855, 22,000 more men of the Anglo-Ottoman force arrived, along with German, Swiss, Polish and Italian legions, about 15,500 in all. The Russians had about 37,000 men in the garrison in October 1854 and about 43,000 in May 1855, plus a field army of about 42,000 outside the city. Many of these defenders were sailors from the fleet, who fought on land with their guns.",
        { h: "The terrain" },
        "Sevastopol lies on the south shore of a long, deep bay that cuts the city in two. The Allies dug their [[parallels|paralela]] and [[saps|sapa]] on the Chersonese heights, to the south and east, in hard, rocky ground, which made the trenches slow and painful work. The Russian line formed an arc of earth forts. From west to east: the Flagstaff [[bastion|bastião]], the Central Bastion, the Great Redan (the third bastion), the Malakoff and the Little Redan. In front of the Malakoff, the [[Mamelon|mamelon]] served as an outpost. Across the bay, on the north shore, were the rest of the garrison and the way out into the interior.",
        { h: "Eleven months of siege" },
        "The first bombardment, on 17 October 1854, did not give the result expected. The Allied guns on land fought [[battery|bateria]] duels with the Russians, and the Allied fleet fired for about six hours at the harbor forts, with little damage and about 340 casualties on the ships. Kornilov died that day, but the infantry attack the Allies had planned was postponed and never happened. The Russians used the following months to strengthen their defenses.",
        "On 25 October and 5 November, the Russians attacked the Allied flanks at Balaklava and Inkerman. They did not break the Allied lines, but they showed that the Allies could not attack the city and defend themselves at the same time. In mid-November, a storm damaged the camps and the supply lines. A terrible winter followed, with cold, mud, hunger and [[cholera|cólera]]. The British suffered more than the French, and over the whole campaign many more Allied soldiers died of disease than in combat. Among the British, for example, there were 2,755 killed in combat and 16,323 dead of disease, according to Wikipedia's counts. For the French, the sources give 50,000 to 75,000 dead of disease, plus 10,240 killed in combat and about 20,000 dead of wounds.",
        "In the spring, the picture changed. A railway, finished at the end of March 1855, began carrying supplies and guns from Balaklava to the trenches, more than 500 guns, according to English Wikipedia. New bombardments came in April, June and August. Canrobert left the French command in May, and Pélissier decided to take the Russians' forward works. In early June, the French took the Mamelon. On 18 June, the anniversary of Waterloo, the French and British attacked the Malakoff and the Great Redan, but were repulsed with heavy casualties. Raglan died ten days later. On 16 August, the Russian field army tried to relieve the city by attacking the Allies at the Chernaya River and was repulsed.",
        { h: "The final assault, 8 September 1855" },
        "On 5 September, the sixth and strongest bombardment began: according to Wikipedia, 307 guns fired about 150,000 rounds, and the Russians lost 2,000 to 3,000 men a day. At noon on 8 September, about 60,000 Allied soldiers left the trenches. French Wikipedia describes the French assault on the Malakoff as perfectly coordinated. The diagram shows the moves in nine stages (schematic, not to scale).",
        { formation: true },
        "First, on the morning of 8 September, after three days of bombardment, the Allies are in their trenches facing the arc of Russian forts. The French hold the Mamelon, on the right, facing the Malakoff, the British hold the center, facing the Great Redan, and another French corps is on the left.",
        "Second, at noon, the [[Zouaves|zuavos]] and the infantry of MacMahon's division leave the trenches and run toward the Malakoff. Other French troops advance at the same time on the Little Redan.",
        "Third, the French enter the Malakoff and take it. A zouave, Eugène Libaut, is said to have raised the French flag. The Russians counterattack and cannot retake it. The fall of the Malakoff changed the fate of the city, because from there the Allied guns dominated the rest of the defense.",
        "Fourth, on receiving the agreed signal, the British leave the trench to attack the Great Redan. General Shirley's brigade and that of General Windham, who was acting commander of the 2nd Division's brigade, cross open ground of about 400 meters under fire.",
        "Fifth, Windham's brigade reaches the Great Redan, climbs the parapet and takes the work, breaking the Vladimirski regiment that defended it. It looks like a victory.",
        "Sixth, but the support does not arrive. The French on the left, commanded by General La Salle, were supposed to attack the Flagstaff bastion and the Central Bastion on seeing the signal rockets. They are slow, and the guns of those forts sweep the ground and stop the British reinforcements. The sources differ on what happened to the Little Redan: some say it was taken at the start, others that the attack was repulsed.",
        "Seventh, Windham's men, with no ammunition and no reinforcements, hold on for about two hours. Colonel Ventsel launches a bayonet charge with the Selenginski and Yakutsk regiments, about 3,000 Russians. Windham orders a withdrawal to the ditch, and the Russians retake the Great Redan. The French make a hesitant attack and break it off.",
        "Eighth, General Simpson plans to renew the attack the next morning. But with the Malakoff lost, Prince Mikhail Gorchakov, the Russian commander, decides to abandon the southern part of the city. He had prepared a [[bridge of boats|ponte de barcas]] across the bay to the north shore. The retreat begins around 7 p.m. and lasts all night. Around 11 p.m., the Russians blow up the magazines and set the forts on fire.",
        "Ninth, on the morning of 9 September, the British occupy the Great Redan without a fight, and the Allies enter an empty, burning city. The Russians remain on the other side of the bay, on the north shore, but the naval base is lost."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The assault of 8 September was the decisive day of the siege. According to Fletcher and Ishchenko, cited on Wikipedia, the French had 1,634 killed, 4,513 wounded and 1,410 missing; the Russians, 2,684 killed, 7,243 wounded and 1,739 missing; the British, 390 killed, 2,043 wounded and 177 missing. At least 19 generals fell that day. Other sources give different totals, from 7,500 to 13,000 casualties, and there is no consensus on the casualties of the whole siege. Adding up the figures cited, the Allies would have lost about 100,000 men from all causes, most of them to disease.",
        { h: "Why it matters" },
        "Tsar Nicholas I had died in March 1855, and his son Alexander II agreed to negotiate. On 26 February 1856 there was an [[armistice|armistício]], and on 30 March the Treaty of Paris ended the war. The Black Sea was neutralized: it was forbidden to have warships and military arsenals on the coast, which Russia managed to undo only in 1871. The war also showed how badly prepared the Allied armies were to look after their soldiers in winter.",
        { h: "Curiosities and controversies" },
        { note: "The young artillery officer Leo Tolstoy served in Sevastopol and wrote there the 'Sevastopol Sketches', published in 1855 and 1856, which tell the story of the siege from the point of view of someone who lived it. The British photographer Roger Fenton recorded the Allied army in the Crimea in 1855, in one of the first photographic reports from a war." },
        { note: "Dates: the Russians used the Julian calendar, twelve days behind ours. That is why the final assault appears as 27 August in Russian sources and the start of the siege, sometimes, as 5 October 1854. In this text, all dates follow the current calendar." },
        { note: "Numbers: the sources disagree on French deaths from disease (50,000 in one, 75,000 in another), on the exact day of Nakhimov's death and on the totals of the final assault. There is no reliable Russian count for the whole siege, so the text gives no total." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  sebastopol1854: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 12, l: "Sevastopol Bay (north shore above)" },
      { t: "note", x: 52, y: 15, l: "Bridge of boats" },
      { t: "note", x: 86, y: 66, l: "South ↓ (schematic, not to scale)" },
      { t: "hill", x: 77, y: 41, rx: 4, ry: 2.5, l: "Mamelon (French)" }
    ],
    units: [
      { id: "rFl", s: "b", k: "inf", w: 6, h: 3, l: "Flagstaff" },
      { id: "rCe", s: "b", k: "inf", w: 6, h: 3, l: "Central Bastion" },
      { id: "rRe", s: "b", k: "inf", w: 7, h: 3, l: "Great Redan (Vladimirski)" },
      { id: "rMa", s: "b", k: "inf", w: 7, h: 3, l: "Malakoff" },
      { id: "rLi", s: "b", k: "inf", w: 6, h: 3, l: "Little Redan" },
      { id: "rRs", s: "b", k: "inf", w: 8, h: 3, l: "Russian reserve (Selenginski, Yakutsk)" },
      { id: "fFl", s: "a", k: "inf", w: 8, h: 3, l: "French on the left (La Salle)" },
      { id: "bSh", s: "a", k: "inf", w: 6, h: 3, l: "Shirley" },
      { id: "bWi", s: "a", k: "inf", w: 6, h: 3, l: "Windham" },
      { id: "bSu", s: "a", k: "inf", w: 7, h: 3, l: "British support" },
      { id: "fMa", s: "a", k: "inf", w: 7, h: 3, l: "MacMahon (zouaves)" },
      { id: "fLi", s: "a", k: "inf", w: 6, h: 3, l: "French (Little Redan)" },
      { id: "bHi", s: "a", k: "inf", w: 6, h: 3, l: "Highlanders (reserve)" }
    ],
    steps: [
      { t: "8 September 1855, morning. After three days of bombardment, the Allies are in their trenches facing the arc of earth forts: Flagstaff, Central, Great Redan, Malakoff and Little Redan. The French hold the Mamelon, in front of the Malakoff.",
        p: { rFl: [18, 30], rCe: [34, 30], rRe: [54, 30], rMa: [74, 28], rLi: [89, 30], rRs: [58, 20],
             fFl: [26, 52], bSh: [47, 50], bWi: [58, 50], bSu: [53, 59], fMa: [74, 52], fLi: [89, 50], bHi: [40, 62] } },
      { t: "At noon, MacMahon's French infantry leaves the trenches and runs for the Malakoff. Other French troops advance at the same time against the Little Redan.",
        p: { fMa: [74, 37], fLi: [89, 37] } },
      { t: "The French enter the Malakoff and take it. The Russian counterattacks do not recover it. It is the key to the city: from there, the rest of the line is exposed.",
        p: { fMa: [74, 29], rMa: [78, 21] }, x: ["rMa"] },
      { t: "At the agreed signal, the British leave the trenches against the Great Redan: Shirley's brigade and Windham's, with support behind. They have about 400 meters of open ground, under fire.",
        p: { bSh: [47, 40], bWi: [58, 40], bSu: [53, 48] } },
      { t: "Windham's brigade reaches the Great Redan, climbs the parapet and breaks the Vladimirski regiment. The work is in British hands.",
        p: { bWi: [54, 30], rRe: [54, 23], bSh: [47, 36] } },
      { t: "But the support does not arrive. The French on the left, under La Salle, are slow to attack the Flagstaff and the Central Bastion, and the guns of those forts sweep the ground and stop the British reinforcements. The sources differ on the Little Redan.",
        p: { fFl: [26, 42], bSu: [53, 42], bSh: [46, 38] } },
      { t: "For about two hours, the British hold the Great Redan, with no ammunition and no reinforcements. The Russians throw in the reserve, about 3,000 men, with the bayonet. Windham falls back to the ditch, and the Russians retake the work.",
        p: { rRs: [54, 31], rRe: [54, 30], bWi: [56, 38], bSh: [47, 41], bSu: [53, 48] } },
      { t: "With the Malakoff lost, Prince Gorchakov orders the southern part of the city abandoned. The retreat begins around 7 p.m., over the bridge of boats across the bay, and lasts all night. Around 11 p.m. the Russians blow up the magazines and set the forts on fire.",
        p: { rFl: [20, 14], rCe: [36, 14], rRe: [54, 14], rLi: [88, 14], rRs: [58, 9] } },
      { t: "9 September. The Allies enter an empty, burning city, and the British occupy the Great Redan without a fight. The Russians stay on the north shore. The naval base is lost.",
        p: { bHi: [54, 29], bWi: [54, 31], bSh: [44, 30], fFl: [30, 30], bSu: [38, 36], fLi: [89, 30] }, x: ["rFl", "rCe", "rRe", "rLi", "rRs"] }
    ]
  }
});

// ---------- Buxar, Wagram, First Bull Run, Shiloh ----------
// Buxar: English Wikipedia (Battle of Buxar, Treaty of Allahabad) and the works it cites (Fortescue, Black, Biddulph).
// Wagram: English Wikipedia (Battle of Wagram) and the works it cites. Bull Run: English Wikipedia (First Battle of
// Bull Run). Shiloh: English Wikipedia (Battle of Shiloh). Sources thin out on Buxar's deployment, so it has no diagram.

Object.assign(GLOSSARY, {
  "lobau": "A large island in the Danube near Vienna. Napoleon turned it into a fortified base, from which his army crossed the river in 1809.",
  "marchfeld": "An open plain north of the Danube, near Vienna. With no hills or forests, it was an ideal field for great masses of soldiers and guns.",
  "voluntários de noventa dias": "Soldiers who enlisted for only three months, at the start of the American Civil War. Many of them went home when their time was up, even in the middle of a campaign.",
  "ninho de vespas": "The nickname of a stretch of woods and a sunken lane at Shiloh. According to the soldiers, the bullets whizzed by like angry hornets.",
  "estrada afundada": "A dirt road lower than the ground around it, worn down by wagons passing over it so many times. It worked like a ready-made trench.",
  "desembarcadouro": "A small landing on the riverbank, where boats unload people and goods. The one at Pittsburg Landing, on the Tennessee River, was the supply point of Grant's army."
});

Object.assign(DEEP, {
  buxar: {
    war: "Bengal War (1763–1765)",
    hook: "In a few hours, a trading company with 7,000 men beat an emperor and a nawab, and won the right to collect the taxes of Bengal.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1757, at Plassey, the English East India Company put Mir Jafar on the throne as nawab of Bengal. In 1760, it replaced him with Mir Qasim, his son-in-law. Mir Qasim soon proved more independent than the Company had expected: he reorganized the army, moved his court to Munger and tried to take control of the finances.",
        "The main friction was trade. Company employees used trade permits, the dastaks, to do business on their own account without paying the taxes that Indian merchants paid. Mir Qasim reacted by abolishing the internal transit duties, which took the English advantage away. In 1763, the conflict became war. The Company won, brought Mir Jafar back, and Mir Qasim fled to Awadh, after having British prisoners killed at Patna.",
        "In exile, Mir Qasim allied himself with Shuja-ud-Daula, nawab of Awadh, and with Shah Alam II, the Mughal emperor, who was also in the region. Together they gathered a large army to drive the Company out of Bengal and Bihar.",
        { h: "The road to Buxar" },
        { timeline: [
          ["1757", "Plassey: the Company puts Mir Jafar on the throne of Bengal."],
          ["1760", "Mir Qasim replaces Mir Jafar."],
          ["1763", "War between Mir Qasim and the Company. Mir Qasim loses and flees to Awadh."],
          ["1764", "Major Hector Munro commands the Company's army. The allies advance along the Ganges."],
          ["22 Oct 1764", "Battle of Buxar."],
          ["Aug 1765", "Treaty of Allahabad: the Company receives the diwani of Bengal, Bihar and Orissa."]
        ]},
        "The allies did not share the same goal. Mir Qasim wanted the throne of Bengal back, Shuja-ud-Daula wanted to stop the Company from reaching Awadh, and the emperor, without real power, hoped to regain prestige. That lack of unity weighed on them later."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Hector Munro" },
        "A Scottish major in the British army, he commanded the Company's forces in 1764. His force was small compared with the enemy's.",
        { h: "Shuja-ud-Daula" },
        "Nawab of Awadh, one of the three allied chiefs. When the battle was lost, he blew up his own magazines and destroyed the bridge behind him, leaving the emperor and part of his soldiers behind.",
        { h: "Shah Alam II and Mir Qasim" },
        "Shah Alam II was the Mughal emperor, with little real power. After the defeat, he surrendered to the British. Mir Qasim fled, was exiled by Shuja-ud-Daula and died in poverty in 1777, according to English Wikipedia. Mirza Najaf Khan commanded the Mughal right wing. Maharaja Balwant Singh of Benares was also with the allies."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Company had 7,072 men, about 1,800 British and 5,300 [[sepoys|sipaios]], Indians recruited and trained by it. The allies are estimated at over 40,000 (Wikipedia gives 40,112), with many guns. These estimates are uncertain: the allied number includes contingents from three armies that had never fought together before.",
        { h: "The terrain" },
        "Buxar lies on the bank of the Ganges, in today's state of Bihar, about 130 km west of Patna, near the point where the Karmanasa River reaches the Ganges.",
        { h: "The battle" },
        "The sources describe the positions only a little. The allies were in the field, and the Company's army marched to meet them. At dawn on 22 October 1764, Mirza Najaf Khan, on the Mughal right wing, attacked. The Company's lines formed in about twenty minutes and checked the attack.",
        "By about midday, the fighting was over. As he withdrew, Shuja-ud-Daula had large ammunition carts and three gunpowder magazines blown up, so as not to leave them to the enemy.",
        "Munro pursued him to the Karmanasa River. Shuja crossed by a bridge of boats and destroyed it behind him, which left the emperor and part of his soldiers on this side, in British hands. The winners took 133 guns and more than a million rupees in cash.",
        "The British officers killed that the sources mention are Lieutenant Francis Spilsbury, of the 96th Regiment, and Ensign Richard Thompson, of the Bengal European Battalion."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The losses are uncertain. The historian John Fortescue gives 847 British casualties, but the figures he lists add up to 873, and he gives about 2,000 dead among the allies. Another source, Black, gives 69 Europeans and 664 sepoys as the Company's casualties, and 6,000 on the Mughal side. English Wikipedia uses, in its table, 289 killed, 499 wounded and 85 missing for the British, and 2,000 killed and 4,000 wounded for the allies.",
        { h: "Why it matters" },
        "Shah Alam II surrendered. Shuja-ud-Daula fled and ended up surrendering too. In August 1765, Robert Clive signed the Treaty of Allahabad. Awadh was returned to Shuja-ud-Daula, without Allahabad and Kora, and he paid an indemnity of 50 lakh rupees. The emperor received the Company's protection and, in return, gave it the [[diwani|diwani]] of Bengal, Bihar and Orissa: the right to collect the taxes of the richest provinces of India. In 1772, the Company took complete control of Bengal and Bihar.",
        "Many historians consider Buxar more decisive than Plassey: at Plassey there was more intrigue than fighting, while at Buxar the Company beat the emperor and the nawab of Awadh in the field. The trading company became, in practice, a state with its own army and its own revenue.",
        { h: "Curiosities and controversies" },
        { note: "The battle has two dates in the sources: 22 October 1764, the more common, and 22 to 23 October. The numbers for the two forces also vary a lot between authors." },
        { note: "The allies had more men and more guns, but not unity. According to Wikipedia, the Company took 133 guns, a number that shows the size of the allied artillery." }
      ]}
    ]
  },

  wagram: {
    war: "War of the Fifth Coalition (1809)",
    hook: "It was the biggest battle Europe had seen, and Napoleon won it with a wall of cannon.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In April 1809, Austria attacked Bavaria, Napoleon's ally, hoping that France, busy with the war in Spain, would not react. Napoleon came back fast, won at Eckmühl and entered Vienna on 13 May. But Archduke Charles's army fell back to the north bank of the Danube, and Napoleon had to cross the river.",
        "On 21 and 22 May, at the Battle of Aspern-Essling, the French were stopped in the middle of the crossing, when the bridges broke, and fell back to the island of [[Lobau|lobau]]. It is usually counted as Napoleon's first defeat in a major battle. Over the next six weeks, he turned Lobau into a fortified base, with solid bridges, and gathered reinforcements.",
        { h: "The road to Wagram" },
        { timeline: [
          ["Apr 1809", "Austria attacks Bavaria. Napoleon wins at Eckmühl."],
          ["13 May", "Napoleon enters Vienna."],
          ["21–22 May", "Aspern-Essling: the French are stopped at the Danube."],
          ["4 Jul, at night", "In a thunderstorm, the French army crosses the river from Lobau."],
          ["5 Jul", "Skirmishes and late-afternoon attacks, which fail."],
          ["6 Jul", "Main battle. Archduke Charles withdraws."],
          ["Mid-Jul", "Armistice of Znaim."]
        ]},
        "Archduke Charles used the time to fortify the [[Marchfeld|marchfeld]] plain, on the north bank, and to call up reinforcements, among them a second army, that of Archduke John. His plan was to wait for Napoleon to cross and attack him on the flanks."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Napoleon, 39 years old" },
        "After Aspern-Essling, he needed a decisive victory. He gathered everything he had, allied troops included: Bavarians, Saxons, Italians and others. He decided to cross at night, in a storm that hid the maneuver, and then to use his guns en masse.",
        { h: "Archduke Charles, 38 years old" },
        "Brother of Emperor Francis and Austria's best general, he had beaten Napoleon at Aspern-Essling. At Wagram, he tried to envelop both French flanks and nearly broke the left.",
        { h: "The marshals" },
        "Davout commanded III Corps, on the French right wing. Masséna, of IV Corps, was on the left. According to accounts, he went about in a carriage because of a fall from his horse. Bernadotte commanded the Saxons of IX Corps and was dismissed by Napoleon after the battle. Macdonald, Oudinot, Marmont, Bessières and Lauriston also had important roles. On the Austrian side, the generals Bellegarde, Klenau, Rosenberg, Hohenzollern, Kollowrat and Liechtenstein commanded the corps."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "English Wikipedia gives about 172,000 men and 584 to 617 guns for the French and allies, and about 136,000 men and 388 to 414 guns for the Austrians. In the field figures for the second day, the Austrians had 113,500 infantry, 14,600 cavalry and 414 guns, and the French 140,500, 28,000 and 488, with another 8,500 men and 129 guns still on Lobau. Archduke John, with about 13,000 men, was not on the field in the morning.",
        { h: "The terrain" },
        "The Marchfeld is an open plain north of the Danube. The Austrians held the higher ground north of the Russbach stream, near Deutsch-Wagram, from where they could see the whole field. The French stayed south of the stream, with the villages of Aderklaa, Baumersdorf and Markgrafneusiedl in dispute. The French left, near Aspern and Essling, was close to the Danube.",
        { h: "The battle in nine stages" },
        { formation: true },
        "First, on the night of 4 July, in a violent thunderstorm, Napoleon crossed the Danube from Lobau. Oudinot's troops went first, and Masséna's reached the other bank around 11 p.m. Davout crossed a little after 2 a.m. On the morning of 5 July, the bridgehead was secure. The Austrians fell back to the heights of the Russbach, and the French lined up on the plain. Around 6 p.m., the whole French army was deployed.",
        "Second, around 7 p.m. on the 5th, Napoleon ordered an attack. Oudinot attacked Baumersdorf and was repulsed by a cavalry charge. V Corps, of the Army of Italy, under Macdonald, advanced against the Wagram plateau, hidden by smoke, but the Saxon troops, in white uniforms, were mistaken for Austrians and came under friendly fire. The French fell back, and Bellegarde and Archduke Charles pushed them back to their starting positions.",
        "Third, Bernadotte's Saxons attacked Deutsch-Wagram around 9 p.m. In the smoke, the soldiers fired on each other, and around 10:30 p.m. the Saxons broke and fell back. Davout attacked Markgrafneusiedl from 9 p.m., but Nostitz's cavalry repulsed his, and at 10 p.m. he called off the attack. The night ended with the French still standing, but with their line disorganized.",
        "Fourth, at dawn on 6 July, Archduke Charles attacked the whole line. Rosenberg, on the Austrian left, attacked Davout at 4 a.m. and was repulsed around 5 or 6 a.m., with about 1,100 casualties. Bellegarde occupied Aderklaa, which was empty, and waited for orders.",
        "Fifth, Klenau, on the Austrian right, pushed Boudet's division out of Aspern and Essling, between 7:30 and 10 a.m. He did not exploit the advantage. Masséna reached Aderklaa at 7:30 a.m., and Napoleon ordered the village retaken. Molitor took it back around 9:45 a.m.",
        "Sixth, Davout's attack on Markgrafneusiedl began between 9:30 and 10 a.m., after about two hours of artillery duel. The church tower fell around midday. The Austrian left began to be pushed north.",
        "Seventh, between 11 a.m. and midday, Nansouty's cuirassiers charged near Süssenbrunn, and General Lauriston assembled the grand battery, of 84 guns, which pounded the Austrian center. Around 1 p.m., Macdonald's column, with about 8,000 men, advanced on Süssenbrunn, covered by the [[grand battery|grande bateria]]. It was stopped by Austrian squares and cavalry, with heavy casualties. Napoleon nonetheless made Macdonald a marshal right there on the battlefield, the only marshal promoted that way, according to English Wikipedia. Between 12:30 and 2 p.m., Masséna retook Essling and Aspern and pursued Klenau.",
        "Eighth, around 1 p.m., Rosenberg began a fighting retreat, and in the afternoon, with his left broken, Archduke Charles admitted defeat. Around 4 p.m., the Austrian army was in retreat, but in good order.",
        "Ninth, around 5 p.m., Archduke John arrived with about 13,000 men, too late to change the result. Napoleon did not pursue hard: his soldiers were exhausted and the ammunition chests were empty, after 90,000 to 100,000 cannon rounds."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "More than 300,000 men fought, and there were at least 72,000 casualties, the bloodiest battle of the Revolutionary and Napoleonic Wars up to then. Napoleon officially recorded 6,901 dead and 26,757 wounded, about 24% of his army, and other estimates are higher. Wikipedia gives 35,060 French and 38,870 Austrian casualties. Five French generals and 238 other officers died. The Austrians recorded 51,626 missing, a figure that includes the later fighting.",
        { h: "Why it matters" },
        "Archduke Charles asked for an armistice on his own authority, at Znaim, after a battle in which Marmont's corps held out until Napoleon arrived with reinforcements. Napoleon accepted, despite objections from commanders such as Berthier, who wanted to carry on. In October 1809, the Treaty of Schönbrunn took about one sixth of its subjects from Austria.",
        "The victory was costly and not as decisive as Napoleon wanted. Added to the losses of Aspern-Essling, those of Wagram were hard to replace, partly because veteran soldiers and more than thirty generals died. Bernadotte's dismissal had a long-term effect: he was elected heir to the Swedish throne and ended up fighting against France.",
        { h: "Curiosities and controversies" },
        { note: "According to accounts, after dismissing Bernadotte at Raasdorf, Napoleon said: 'A bungler like you is no good to me.' The line comes from memoirs, and the exact words vary." },
        { note: "Macdonald was the only marshal promoted on the battlefield itself. Napoleon also scolded Marmont for arriving slowly and Oudinot for attacking without orders." },
        { note: "The sources differ on some details of Macdonald's attack and on the casualty numbers, which vary a lot depending on the count and on what is included in it." }
      ]}
    ]
  },

  bullrun1: {
    war: "American Civil War (1861–1865)",
    hook: "The civilians of Washington drove out in carriages with picnic baskets to watch the North's victory. They came back running, in the middle of a fleeing army.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In April 1861, after the Confederate attack on Fort Sumter, the civil war began. Eleven Southern states had formed the [[confederacy|confederação]], and the North, the [[Union|união]], wanted to bring them back. The Confederate capital, Richmond, was a little over 150 km from Washington. The Northern press shouted 'On to Richmond!', and President Lincoln, under pressure, ordered an advance.",
        "General Irvin McDowell was given command of the army. He knew his soldiers were green, many of them [[ninety-day volunteers|voluntários de noventa dias]], and asked for more time, but did not get it. On 16 July, he left Washington with about 35,000 men. About 50 km away, at Manassas, General P. G. T. Beauregard was waiting for him with the Army of the Potomac, about 22,000 men, along a creek called Bull Run.",
        { h: "The road to Bull Run" },
        { timeline: [
          ["16 Jul 1861", "McDowell leaves Washington with about 35,000 men."],
          ["18 Jul", "Skirmish at Blackburn's Ford. The Federals are repulsed."],
          ["18–21 Jul", "Johnston takes troops from the Shenandoah Valley to Manassas by train."],
          ["21 Jul, 2:30 a.m.", "Two Federal divisions leave Centreville to flank the Confederate left."],
          ["21 Jul, afternoon", "Henry House Hill: Jackson's brigade holds."],
          ["21 Jul, 5 p.m.", "The Federal army dissolves into flight."]
        ]},
        "The decisive difference lay far from the battlefield. General Robert Patterson, with about 18,000 Federals, was supposed to keep the Confederate general Joseph E. Johnston busy in the Shenandoah Valley. He failed, and Johnston was able to take his troops to Manassas by train, one of the first times a railroad decided the course of a battle."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Irvin McDowell" },
        "A Federal general, commander of the field army. He planned well: a flank attack on the Confederate left, while one division distracted the front. The plan failed because of the inexperience of the troops and officers, and the slow march gave the enemy time.",
        { h: "Beauregard and Johnston" },
        "P. G. T. Beauregard commanded the Confederate army at Manassas. Joseph E. Johnston was senior, but in practice left the direction of the fighting largely to Beauregard. The two worked well together, and Johnston's trains were decisive.",
        { h: "Thomas J. Jackson" },
        "A former military-academy professor, he commanded a Virginia brigade. For his stand on Henry House Hill, he got the nickname that would make him famous: 'Stonewall', or so it is said. Other important names were Nathan Evans, Barnard Bee and Francis Bartow, and on the Federal side Daniel Tyler, David Hunter, Samuel Heintzelman and William T. Sherman."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "English Wikipedia gives McDowell about 35,000 men, of whom about 18,000 fought. On the Confederate side, Beauregard had 21,883 effectives, Johnston brought 8,884 from the Shenandoah, and Holmes's brigade added another 1,465, with about 18,000 engaged. The effective numbers vary a little depending on the author.",
        { h: "The terrain" },
        "The Bull Run creek runs through dense woods, with few crossings. The Stone Bridge carries the Warrenton road to Manassas. Farther north, Sudley Ford allows the creek to be crossed. Matthews Hill lies south of the ford, and Henry House Hill, where the house of the widow Judith Henry stood, is nearby, to the southeast.",
        { h: "The battle in eight stages" },
        { formation: true },
        "First, at 2:30 a.m. on 21 July, the divisions of Hunter and Heintzelman, about 12,000 men, left Centreville on a wide detour toward Sudley Ford, to attack the Confederate left. Tyler's division, about 8,000 men, went to the Stone Bridge and arrived around 6 a.m., as a distraction.",
        "Second, the detour march ran late: blocked roads and tired troops. The men only began to cross the creek at 9:30 a.m. But Captain E. P. Alexander, a Confederate signal officer, saw the column and sent a warning to Evans: 'Look out for your left, your position is turned.' Evans, with about 1,100 men, took 900 of them to Matthews Hill.",
        "Third, on Matthews Hill, Evans, later reinforced by Bee and Bartow, held the first Federal wave. Around 10 a.m., Sherman crossed the creek at an unguarded ford, and a little after 11:30 the Confederate line collapsed. The survivors fled to Henry House Hill.",
        "Fourth, around midday, Jackson's brigade reached the hill with Hampton's Legion, about 600 men, and Stuart's cavalry. Jackson put 13 guns on the crest. The Federal batteries of Ricketts and Griffin, with 11 guns, dueled with them at about 300 yards. Bee tried to rally the men around Jackson. The line 'There stands Jackson like a stone wall' is the most quoted, but the origin of the nickname is disputed.",
        "Fifth, around 3 p.m., the 33rd Virginia Infantry, which the Federals took for friends, advanced on Griffin's guns and captured them. A battery of Imboden's, with four 6-pounders, helped hold the Federals for a while.",
        "Sixth, around 4 p.m., Cocke's brigade drove the last Federals off the hill. At the same time, the brigades of Early and Kirby Smith, under Elzey, who were arriving by train and on foot, hit the Federal right flank on Chinn Ridge and shattered Howard's brigade.",
        "Seventh, at 5 p.m., the Federal army came apart. A wagon overturned on the Cub Run bridge, and panic spread. Many soldiers were captured. The civilians from Washington, who had come to watch, blocked the roads. The Federals lost 25 guns.",
        "Eighth, the Confederates did not pursue in depth. President Jefferson Davis, who had reached the field, wanted to pursue, but the attempt to intercept the fugitives failed, and General Bonham called it off. The rout ran all the way to Washington."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Confederate losses, on which the sources agree: 387 killed, 1,582 wounded and 13 missing. The Union's vary: Wikipedia's main table gives 2,708 (481 killed, 1,011 wounded and 1,216 missing), and the text gives other numbers, with 460 killed, 1,124 wounded and 1,312 missing or captured. Colonel James Cameron died on the Northern side, and Colonel Bartow on the Southern, and General Bee died the next day.",
        { h: "Why it matters" },
        "On 22 July, Lincoln signed a bill to enlist another 500,000 men for up to three years. On 25 July, McDowell was replaced by George B. McClellan. Beauregard was promoted to full general. A congressional committee investigated the defeat, and Patterson's failure to hold Johnston went into the report. Historians see Bull Run as a turning point: it showed both sides that the war would not be short.",
        { h: "Curiosities and controversies" },
        { note: "The confusion between the Confederate flag and the Union flag, which looked the same in the smoke, led the South to adopt the battle flag, with the red field, that became famous." },
        { note: "The nickname 'Stonewall' has a disputed origin: the sources differ on who said the line and on what Bee meant by it. Some read it as praise and some as criticism." },
        { note: "The Union numbers vary between the source's summary and its detailed table. The text uses both and says when they differ." }
      ]}
    ]
  },

  shiloh: {
    war: "American Civil War (1861–1865)",
    hook: "The Confederates caught Grant at breakfast, and the bloodiest battle of the war up to then turned on a night of rain and gunboats.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In early 1862, the North was advancing in the West. In February, General Ulysses S. Grant had taken Forts Henry and Donelson and opened the Tennessee River to the Federals. The Confederates fell back to the south. General Albert Sidney Johnston gathered his army at Corinth, Mississippi, an important railroad junction.",
        "Grant camped with the Army of the Tennessee at Pittsburg Landing, on the riverbank, near a small church called Shiloh. He was waiting for Don Carlos Buell's Army of the Ohio, so they could attack Corinth together. Many of Grant's soldiers were new and had not dug trenches: they did not expect to be attacked.",
        { h: "The road to Shiloh" },
        { timeline: [
          ["Feb 1862", "Grant takes Forts Henry and Donelson."],
          ["Mar 1862", "Grant camps at Pittsburg Landing, waiting for Buell."],
          ["3 Apr", "Johnston leaves Corinth with the army."],
          ["6 Apr, dawn", "Surprise attack on the Federal camps."],
          ["6 Apr, 2:30 p.m.", "Johnston is killed."],
          ["6 Apr, 5:30 p.m.", "Prentiss surrenders in the Hornet's Nest."],
          ["6 Apr, night", "Buell's troops and Lew Wallace arrive."],
          ["7 Apr", "The Union counterattacks. Beauregard falls back to Corinth."]
        ]},
        "Johnston's plan was to attack before Buell arrived and push Grant away from the river, into the swamps of Owl Creek. It was risky, but if it worked, it would destroy an army and save Corinth."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ulysses S. Grant" },
        "The Federal commander, he was 39 years old. At the start he was at Savannah, downriver, and went to the field on hearing the guns. His critics said afterward that he had been caught by surprise. Grant answered with what he would do all his life: stand firm, reorganize and attack the next day.",
        { h: "Albert Sidney Johnston" },
        "The Confederate commander, a general of great prestige, considered by Jefferson Davis the best in the South. He died on the first day, and Davis would call it 'the turning point of our fate' in the West. P. G. T. Beauregard took command.",
        { h: "The other names" },
        "Among the Federals, General William T. Sherman commanded the division camped near Shiloh church, and General Benjamin Prentiss the one that was surprised first. W. H. L. Wallace, John McClernand and Stephen Hurlbut commanded other divisions. Don Carlos Buell was coming from Nashville with the Army of the Ohio, and Lew Wallace was at Crump's Landing, to the north. For the Confederates, Hardee, Bragg, Polk and Breckinridge commanded the corps."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "English Wikipedia gives the Union 66,812 men (48,894 in the Army of the Tennessee and 17,918 in the Army of the Ohio), with 119 guns, and the Confederates 44,699 (the Army of the Mississippi), with 117 guns. Not all of them were on the field on the first day: the Army of the Ohio arrived only at night.",
        { h: "The terrain" },
        "The field lies on the west bank of the Tennessee River, between Owl Creek, to the north, and Lick Creek, to the south. The [[landing|desembarcadouro]] at Pittsburg Landing was the Federals' only point of supply and escape, with the river behind them. The ground was dense woods, with clearings and farms. A [[sunken lane|estrada afundada]] in the center, surrounded by brush, would serve as natural cover.",
        { h: "The battle in nine stages" },
        { formation: true },
        "First, at dawn on 6 April, the Confederates, in three successive lines, advanced from the southwest. A Federal patrol, under Major James Powell, made contact in Fraley Field and gave the alarm, which came late.",
        "Second, the camps of Prentiss and Sherman were overrun right at the start. Many Federals were attacked while still in camp. Sherman and Prentiss fell back, and the Union wings were pushed back. Grant arrived in the morning.",
        "Third, the Federals re-formed the line along the sunken lane, the [[Hornet's Nest|ninho de vespas]]. Prentiss and W. H. L. Wallace held there for hours against repeated assaults, and gave Grant time to set up a new line. Hurlbut stayed nearby, at the Peach Orchard.",
        "Fourth, around 2:30 p.m., Johnston was mortally wounded, according to witnesses by a bullet in the leg that he did not notice in time, and Beauregard took command. The Federal gunboats joined the fight in the afternoon.",
        "Fifth, the Confederates gathered about 50 guns against the Hornet's Nest. The Federal flanks gave way, W. H. L. Wallace was mortally wounded, and Prentiss surrendered around 5:30 p.m. with about 2,200 men.",
        "Sixth, Grant then set up the 'last line', with guns and the support of the gunboats, at the landing. A little after 6 p.m., Beauregard stopped the attacks.",
        "Seventh, at night, Buell's troops began to arrive from the other side of the river, and Lew Wallace's division, which had got lost on the way by taking a wrong road, arrived at 7:15 p.m. It rained, and the gunboats shelled the Confederates during the night.",
        "Eighth, on 7 April, the Union counterattacked. Buell's Army of the Ohio began around 5 a.m., and Grant's general attack came at 10:30 a.m. The Confederates, who were expecting reinforcements from Van Dorn that never came, were pushed back.",
        "Ninth, around 1 p.m., Beauregard began to fall back to Corinth. Breckinridge's corps stayed as rear guard near Shiloh church, around 2 p.m., and the last artillery left around 3:30 p.m. Grant and Buell did not pursue."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Union had 13,047 casualties (1,754 killed, 8,408 wounded and 2,885 captured or missing), and the Confederacy 10,699 (1,728 killed, 8,012 wounded and 959 captured or missing). Together they exceed 23,700, and the count may be understated: some historians estimate about 14,500 for the Union and 12,000 for the Confederacy.",
        { h: "Why it matters" },
        "The Federal victory opened the Mississippi Valley. Corinth was found abandoned on 30 May, and Memphis and other river cities fell to the Union in the following months. The losses ended the idea of a short war in the West.",
        "Grant was heavily criticized by the press, partly because of a report by Whitelaw Reid, and Buell was treated as a hero. General Henry Halleck took command on 11 April. According to tradition, Lincoln answered those who demanded Grant's head: 'I can't spare this man; he fights.' In 1863, Grant would take Vicksburg. Lew Wallace was criticized for the delay and ended up removed from Grant's army, but Grant later concluded that the route he had chosen was justified.",
        { h: "Curiosities and controversies" },
        { note: "The name Shiloh comes from a church at the site, and the word, of Hebrew origin, is usually translated as 'place of peace'. An ironic name for one of the bloodiest battles of the war." },
        { note: "The debate over the 'surprise': Grant did not order trenches dug, and many soldiers were attacked in camp. Sherman received more praise than criticism, and Grant was the most criticized. Historians still argue over whose fault it was." },
        { note: "Shiloh National Military Park was created by the US Congress on 27 December 1894. The lines attributed to Lincoln and Davis are quoted at second hand, and the words vary depending on the author." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  wagram: {
    terrain: [
      { t: "sea", x: 0, y: 63, w: 100, h: 9, l: "Danube" },
      { t: "hill", x: 40, y: 62, rx: 12, ry: 3, l: "Lobau island" },
      { t: "note", x: 2, y: 33, l: "Russbach stream (schematic, not to scale)" },
      { t: "note", x: 12, y: 54, l: "Aspern and Essling" },
      { t: "note", x: 36, y: 31, l: "Aderklaa" },
      { t: "note", x: 52, y: 14, l: "Wagram" },
      { t: "note", x: 80, y: 31, l: "Markgrafneusiedl" }
    ],
    units: [
      { id: "fMa", s: "a", k: "inf", w: 7, h: 3, l: "Masséna (IV Corps)" },
      { id: "fBe", s: "a", k: "inf", w: 7, h: 3, l: "Bernadotte (Saxons)" },
      { id: "fMd", s: "a", k: "inf", w: 7, h: 3, l: "Macdonald (Army of Italy)" },
      { id: "fOu", s: "a", k: "inf", w: 7, h: 3, l: "Oudinot (II Corps)" },
      { id: "fDa", s: "a", k: "inf", w: 8, h: 3, l: "Davout (III Corps)" },
      { id: "fCa", s: "a", k: "cav", w: 6, h: 3, l: "Cavalry (Nansouty, Bessières)" },
      { id: "fGB", s: "a", k: "inf", w: 8, h: 2.5, l: "Grand battery (Lauriston, 84 guns)" },
      { id: "aKl", s: "b", k: "inf", w: 7, h: 3, l: "Klenau (VI Corps)" },
      { id: "aBe", s: "b", k: "inf", w: 7, h: 3, l: "Bellegarde (I Corps)" },
      { id: "aHo", s: "b", k: "inf", w: 8, h: 3, l: "Hohenzollern and Kollowrat" },
      { id: "aRo", s: "b", k: "inf", w: 7, h: 3, l: "Rosenberg (IV Corps)" },
      { id: "aLi", s: "b", k: "cav", w: 6, h: 3, l: "Liechtenstein (cavalry)" },
      { id: "aJo", s: "b", k: "inf", w: 6, h: 3, l: "Archduke John (13,000)" }
    ],
    steps: [
      { t: "5 July 1809, late afternoon. The French, deployed to the south, have crossed the Danube from Lobau. The Austrians of Archduke Charles hold the heights north of the Russbach stream, from Aspern to Markgrafneusiedl.",
        p: { fMa: [20, 48], fBe: [38, 44], fMd: [52, 44], fOu: [66, 44], fDa: [82, 48], fCa: [50, 54], fGB: [30, 56],
             aKl: [18, 24], aBe: [36, 22], aHo: [56, 20], aRo: [82, 22], aLi: [66, 12], aJo: [93, 60] } },
      { t: "Between 7 and 11 p.m., the French attacks fail. Oudinot is repulsed at Baumersdorf, the Army of Italy falls back under friendly fire in the smoke, Bernadotte's Saxons come apart and Davout halts in front of Markgrafneusiedl.",
        p: { fOu: [62, 36], fMd: [50, 34], fBe: [38, 50], fDa: [80, 38], fMa: [20, 50] } },
      { t: "6 July, at dawn, Archduke Charles attacks the whole line. Rosenberg hits Davout, Bellegarde occupies Aderklaa, and Klenau advances on the French left, by the Danube.",
        p: { aRo: [78, 36], aBe: [36, 33], aKl: [18, 40], fDa: [80, 44], fBe: [38, 52], fMd: [52, 46], fOu: [66, 46] } },
      { t: "In the morning, Klenau pushes Boudet's division out of Aspern and Essling. Masséna goes to Aderklaa, and Molitor retakes the village around 9:45 a.m. The French left nearly gives way.",
        p: { aKl: [16, 48], fMa: [34, 38], aBe: [38, 30], fBe: [44, 46] } },
      { t: "Napoleon closes the gap: Nansouty's cuirassiers charge, and Lauriston assembles the grand battery of 84 guns in front of the Austrian center. Davout takes Markgrafneusiedl after two hours of artillery duel.",
        p: { fGB: [52, 38], fCa: [58, 40], fDa: [80, 30], aRo: [84, 24] } },
      { t: "Around 1 p.m., Macdonald's column, with about 8,000 men, advances on Süssenbrunn, covered by the grand battery. Austrian squares and cavalry stop it, with heavy casualties.",
        p: { fMd: [52, 28], fGB: [52, 36], aHo: [56, 22] } },
      { t: "Davout pushes the Austrian left to the north, and Masséna retakes Essling and Aspern and pursues Klenau. The Austrian right and left bend back.",
        p: { fDa: [78, 22], aRo: [90, 14], fMa: [22, 36], aKl: [18, 22] } },
      { t: "Around 4 p.m., Archduke Charles, with his left broken, admits defeat and withdraws in good order to the north.",
        p: { aBe: [36, 12], aHo: [56, 10], aLi: [66, 6], aKl: [18, 12], aRo: [86, 8] } },
      { t: "Around 5 p.m., Archduke John arrives with about 13,000 men, too late. Napoleon, with exhausted soldiers and empty ammunition chests, does not pursue hard.",
        p: { aJo: [94, 38] } }
    ]
  },

  bullrun1: {
    terrain: [
      { t: "sea", x: 0, y: 34, w: 100, h: 3.5, l: "Bull Run creek (schematic, not to scale)" },
      { t: "hill", x: 36, y: 46, rx: 7, ry: 3.5, l: "Matthews Hill" },
      { t: "hill", x: 52, y: 54, rx: 7, ry: 4, l: "Henry House Hill" },
      { t: "note", x: 14, y: 30, l: "Sudley Ford" },
      { t: "note", x: 66, y: 30, l: "Stone Bridge" },
      { t: "note", x: 84, y: 5, l: "Centreville" },
      { t: "note", x: 4, y: 66, l: "← Manassas" }
    ],
    units: [
      { id: "uTy", s: "a", k: "inf", w: 7, h: 3, l: "Tyler (distraction)" },
      { id: "uHu", s: "a", k: "inf", w: 7, h: 3, l: "Hunter" },
      { id: "uHe", s: "a", k: "inf", w: 7, h: 3, l: "Heintzelman" },
      { id: "uRi", s: "a", k: "inf", w: 7, h: 3, l: "Ricketts and Griffin batteries" },
      { id: "cEv", s: "b", k: "inf", w: 6, h: 3, l: "Evans" },
      { id: "cBe", s: "b", k: "inf", w: 7, h: 3, l: "Bee and Bartow" },
      { id: "cJa", s: "b", k: "inf", w: 7, h: 3, l: "Jackson (13 guns)" },
      { id: "cBr", s: "b", k: "inf", w: 8, h: 3, l: "Beauregard (right)" },
      { id: "cKS", s: "b", k: "inf", w: 8, h: 3, l: "Kirby Smith and Early (by train)" }
    ],
    steps: [
      { t: "21 July 1861, 2:30 a.m. McDowell makes a wide detour with Hunter and Heintzelman, from Centreville to Sudley Ford, to attack the Confederate left. Tyler goes to the Stone Bridge as a distraction.",
        p: { uTy: [70, 24], uHu: [80, 10], uHe: [88, 10], uRi: [76, 16],
             cEv: [68, 42], cBe: [56, 62], cJa: [48, 66], cBr: [88, 44], cKS: [18, 66] } },
      { t: "Around 6 a.m., Tyler reaches the Stone Bridge and opens fire. The detour column runs late and only begins crossing at 9:30 a.m. A warning to Evans arrives in time: he takes about 900 men to Matthews Hill.",
        p: { uTy: [70, 28], uHu: [40, 8], uHe: [48, 8], cEv: [40, 44] } },
      { t: "Between 10 and 11:30 a.m., Evans, reinforced by Bee and Bartow, holds the first wave on Matthews Hill. Sherman crosses an unguarded ford and the Confederate line gives way, the survivors running for Henry House Hill.",
        p: { uHu: [26, 30], uHe: [34, 34], cEv: [38, 46], cBe: [40, 50], uTy: [66, 34] } },
      { t: "Around midday, Jackson's brigade, with 13 guns, sets itself on Henry House Hill. The Federal batteries of Ricketts and Griffin duel with it at about 300 yards. Bee rallies the men behind him. This is where the nickname 'Stonewall' is born, according to tradition.",
        p: { cJa: [52, 52], cBe: [46, 58], cEv: [42, 56], uRi: [44, 44], uHu: [38, 40], uHe: [46, 40] } },
      { t: "Around 3 p.m., the 33rd Virginia Infantry, taken for friends, captures Griffin's guns. The Federal line wavers.",
        p: { cJa: [52, 50], uRi: [48, 46] }, x: ["uRi"] },
      { t: "Around 4 p.m., Cocke drives the last Federals off the hill, and the brigades of Early and Kirby Smith, arrived by train from the Shenandoah, hit the Federal right flank on Chinn Ridge.",
        p: { cKS: [66, 52], cJa: [52, 46], cBr: [76, 46] } },
      { t: "At 5 p.m. the Federal army comes apart. A wagon overturns on the Cub Run bridge and panic takes the road, full of Washington civilians who had gone to watch. The Federals lose 25 guns.",
        p: { uHu: [46, 24], uHe: [58, 24], uTy: [74, 22], cJa: [50, 40], cBe: [46, 44] }, x: ["uHu", "uHe", "uTy"] },
      { t: "The Confederates do not pursue in depth. Davis, on the field, wants to pursue, but the attempt to intercept the fugitives fails, and Bonham calls it off. The rout runs all the way to Washington.",
        p: { cJa: [50, 38], cKS: [64, 44] } }
    ]
  },

  shiloh: {
    terrain: [
      { t: "sea", x: 90, y: 0, w: 12, h: 72, l: "Tennessee River" },
      { t: "note", x: 2, y: 4, l: "Owl Creek (north)" },
      { t: "note", x: 52, y: 64, l: "Lick Creek (south)" },
      { t: "note", x: 2, y: 64, l: "← Corinth (schematic, not to scale)" },
      { t: "note", x: 34, y: 20, l: "Shiloh Church" },
      { t: "hill", x: 50, y: 40, rx: 5, ry: 2.5, l: "Hornet's Nest" },
      { t: "note", x: 66, y: 48, l: "Peach Orchard" },
      { t: "note", x: 78, y: 54, l: "Pittsburg Landing" }
    ],
    units: [
      { id: "uSh", s: "a", k: "inf", w: 6, h: 3, l: "Sherman" },
      { id: "uMc", s: "a", k: "inf", w: 6, h: 3, l: "McClernand" },
      { id: "uPr", s: "a", k: "inf", w: 6, h: 3, l: "Prentiss" },
      { id: "uWa", s: "a", k: "inf", w: 6, h: 3, l: "W. H. L. Wallace" },
      { id: "uHu", s: "a", k: "inf", w: 6, h: 3, l: "Hurlbut" },
      { id: "uBu", s: "a", k: "inf", w: 6, h: 3, l: "Buell (Army of the Ohio)" },
      { id: "uLw", s: "a", k: "inf", w: 6, h: 3, l: "Lew Wallace" },
      { id: "uGb", s: "a", k: "ship", w: 5, h: 2.5, l: "Gunboats" },
      { id: "cHa", s: "b", k: "inf", w: 7, h: 3, l: "Hardee" },
      { id: "cBr", s: "b", k: "inf", w: 7, h: 3, l: "Bragg" },
      { id: "cPo", s: "b", k: "inf", w: 7, h: 3, l: "Polk" },
      { id: "cBk", s: "b", k: "inf", w: 7, h: 3, l: "Breckinridge (reserve)" }
    ],
    steps: [
      { t: "Sunday, 6 April 1862, dawn. The Federals are camped unprepared around Shiloh church, with the Tennessee River behind them. The Confederates, in successive lines, come from the southwest.",
        p: { uSh: [38, 24], uMc: [52, 24], uPr: [40, 38], uWa: [54, 40], uHu: [64, 50], uBu: [96, 20], uLw: [60, 6], uGb: [88, 58],
             cHa: [20, 30], cBr: [14, 38], cPo: [8, 30], cBk: [6, 44] } },
      { t: "The Confederates attack by surprise. The camps of Prentiss and Sherman are overrun, and the Federal wings are pushed back. Grant reaches the field in the morning.",
        p: { cHa: [34, 32], cBr: [30, 40], cPo: [26, 28], uPr: [46, 40], uSh: [48, 30], uMc: [58, 30] } },
      { t: "Prentiss and W. H. L. Wallace hold the sunken lane, the Hornet's Nest, for hours against repeated assaults, and give Grant time to set up the new line. Hurlbut stays in the Peach Orchard.",
        p: { uPr: [50, 42], uWa: [54, 44], uHu: [64, 46], cBr: [42, 42], cBk: [30, 46] } },
      { t: "Around 2:30 p.m., Johnston is mortally wounded and Beauregard takes command. The Federal gunboats join the fight.",
        p: { cPo: [58, 54], uGb: [86, 52] } },
      { t: "The Confederates gather about 50 guns against the Hornet's Nest. The flanks give way, W. H. L. Wallace is mortally wounded, and Prentiss surrenders around 5:30 p.m. with about 2,200 men.",
        p: { cBr: [52, 44], cHa: [54, 36], cBk: [44, 48], uWa: [60, 46], uMc: [68, 36] }, x: ["uPr"] },
      { t: "Grant forms the 'last line' by the landing, with guns and gunboats. A little after 6 p.m., Beauregard stops the attacks.",
        p: { uMc: [74, 46], uWa: [76, 52], uHu: [72, 56], uSh: [70, 40], cBr: [60, 46], cHa: [62, 38], cBk: [56, 50] } },
      { t: "At night, Buell's troops arrive from the other side of the river. Lew Wallace's division, which took the wrong road, arrives at 7:15 p.m. It rains, and the gunboats pound the Confederates all night.",
        p: { uBu: [82, 60], uLw: [68, 34], uGb: [86, 46] } },
      { t: "7 April. The Union counterattacks. Buell's army begins around 5 a.m., and Grant's general attack comes at 10:30 a.m. The Confederates are pushed back.",
        p: { uBu: [66, 44], uLw: [54, 30], uSh: [52, 36], uMc: [58, 42], uHu: [62, 50], cBr: [40, 44], cHa: [38, 36], cBk: [34, 48], cPo: [44, 52] } },
      { t: "Around 1 p.m., Beauregard falls back to Corinth. Breckinridge forms the rear guard near the church around 2 p.m., and the last artillery leaves around 3:30 p.m. Grant and Buell do not pursue.",
        p: { cBk: [24, 38], cBr: [14, 44], cHa: [16, 34], cPo: [12, 50] } }
    ]
  }
});
