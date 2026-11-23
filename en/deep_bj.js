// In-depth battle, batch bj: karnal (1739).
// Checked against the English and Portuguese Wikipedia articles on the Battle of Karnal and on Nader Shah's invasion
// of the Mughal Empire, the Britannica entry on Karnal, and the works those pages cite (Axworthy, Lockhart, Tucker).
// Where sources disagree (date, numbers, who led the second sortie) the text says so.

Object.assign(GLOSSARY, {
  "dinastia afsárida": "The family of Nader Shah, from the Afshar tribe. It ruled Persia from 1736 to 1796, but only Nader held real power: after his death the kingdom fell to pieces.",
  "jazayerchi": "Nader Shah's musketeers, uniformed and drilled. They were the core of his infantry and fired in volleys.",
  "trono do pavão": "The gold-and-jewelled throne of the Mughal emperors in Delhi, famous for its value and for a peacock of precious stones. Nader took it to Persia in 1739.",
  "koh-i-noor": "A famous Indian diamond, the 'Mountain of Light'. Nader took it in Delhi in 1739. It passed through several owners and ended up among the British Crown Jewels.",
  "rupia mogol": "The silver coin of the Mughal Empire. Chroniclers put Nader's loot in Delhi at about 700 million rupees, a figure nobody can confirm today."
});

Object.assign(DEEP, {
  karnal: {
    war: "Persian invasion of Mughal India (1738–1739)",
    hook: "Horsemen with small cannon on camel backs shattered the greatest empire in India in under three hours.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1739 the [[Mughal|mogol]] Empire was still one of the richest states in the world. It ruled almost all of India, from Kabul to Bengal, and its capital, Delhi, had hundreds of thousands of inhabitants. But the wealth hid a weakness: Emperor Muhammad Shah, on the throne since 1719, loved music and feasts, and the provincial governors, the [[nawabs|nababo]], obeyed less and less. The armies were huge but poorly trained, and every chief cared only about protecting himself.",
        "Beyond the mountains, Persia had just acquired an extraordinary man. Nader was born in 1688 in Khorasan, into a family of the Afshar tribe. He began as a bandit chief and became a general of the Safavid [[shah|xá]] Tahmasp II. He drove out the Afghans who had taken Persia, defeated the Ottomans and, in 1736, set the Safavids aside and crowned himself, founding the [[Afsharid dynasty|dinastia afsárida]].",
        { h: "The road to Karnal" },
        { timeline: [
          ["1738", "Nader takes Kandahar, in Afghanistan, and then Kabul. At first he says he is only looking for fugitive Afghans."],
          ["1738", "Nader's envoy is turned back in Mughal territory and killed, while the emperor does not answer his letters."],
          ["September 1738", "Nader outflanks Nasir Khan's army at the Khyber Pass, destroys it and occupies Peshawar."],
          ["8 January 1739", "He crosses the Chenab River, in the Punjab. The road to Delhi is open."],
          ["February 1739", "Muhammad Shah and his nobles reach Karnal and fortify themselves."]
        ]},
        "Why Nader invaded is debated. Lockhart sees a conqueror who needed India's riches because Persia was nearly bankrupt after so many wars. Tucker points out that the Persian financial crisis predated that. Axworthy says Nader wanted money to pay his army and a breather before fighting the Ottomans again. Indian sources of the time blame the Mughal nobles themselves, who were supposedly plotting against the emperor."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Nader Shah, 50 years old" },
        "A career soldier of no royal blood, he did three things very well: choose the ground, keep the army moving and pay the soldiers. His men were almost all horsemen, but they carried firearms: musketeers and light cannon that could be carried on camels. At Karnal he did not want to attack a fortified camp. He wanted the Mughals to come out of it in pieces.",
        { h: "Muhammad Shah, 37 years old" },
        "The Mughal emperor was no coward, but he had never led a real war. He stayed in the camp during the battle and left the decisions to the nobles, who did not get along.",
        { h: "The Mughal nobles" },
        "The [[nawab|nababo]] Saadat Khan, of Awadh, reached Karnal after a month's march with his men exhausted, and wanted to fight at once. Khan Dauran commanded the centre. Nizam-ul-Mulk, the old governor of the Deccan, was the most experienced and advised patience, but was not heeded. The rivalry among these chiefs explains much of the disaster."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are uncertain. For the Persians, the most cited estimate is about 55,000 horsemen (the chronicler Mirza Mahdi says Nader left Persia with about 80,000, but left garrisons along the way). Some descriptions mention about 20,000 [[jazayerchi]] among them, and hundreds of [[zamburaks|zamburak]], the swivel guns.",
        "The Mughals had about 75,000 combatants in the field, among them some 50,000 horsemen, and a huge crowd of followers. The sources speak of up to 300,000 people in the camp, 2,000 [[war elephants|elefantes de guerra]] and 3,000 cannon. The Mughal [[artillery|artilharia]] was too big and heavy, and almost no piece left the camp. The elephants made the commanders easy targets.",
        { note: "The numbers on both sides come from chroniclers and from modern estimates that do not agree. We use the most cited figure for each side." },
        { h: "The ground and the positions" },
        "Karnal lies on a plain north of Delhi, between the Jamuna River and a canal. The Mughals sat in a fortified camp, with [[trenches|trincheira]] and a mud wall, a wood in front and the canal protecting one flank. Nader pitched his camp to the north, near Kunjpura, with the Jamuna supplying water. He did not attack: he preferred to cut the road between the Mughals and Delhi and wait for a mistake.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, Saadat Khan arrived at night with part of his column, and the baggage lagged behind. Persian patrols seized some 500 camels. The next morning, in a council, Nizam-ul-Mulk suggested waiting, because the men of Awadh were tired. Saadat Khan would not listen and rode out with cavalry and infantry, without artillery. The sources give 2,000 to 5,000 men.",
        "Second, the light Persian cavalry pretended to fall back, the classic [[feigned retreat|retirada fingida]]. Saadat Khan chased them for about three kilometres, far from the camp. Suddenly the screen of horsemen opened, and hundreds of zamburaks and [[muskets|mosquete]] fired at point-blank range. His vanguard fell apart.",
        "Third, on the Nizam's suggestion, Khan Dauran rode out on an elephant with about 8,000 horsemen. His group was more than a kilometre from Saadat's, unable to help him, and fell into the crossfire of an [[ambush|emboscada]] prepared by the Persian left wing, near Kunjpura. Khan Dauran was badly wounded and carried back to the camp. At this point some sources name another Mughal noble as the leader of the sortie; the version with Khan Dauran is the one in the most cited accounts.",
        "Fourth, about a thousand of Khan Dauran's men dismounted, tied the skirts of their coats together and fought on foot until they died.",
        "Fifth, Saadat Khan fought to the end. Wounded by arrows and trapped by his own elephant, which had panicked, he was seized by a Persian soldier from Nishapur, who climbed up to the [[howdah]]. According to one account, the soldier persuaded the noble to surrender by speaking the name of someone from his homeland.",
        "Sixth, without the two chiefs, the Mughal army fell apart. The Persian horsemen chased the fugitives to the canal. Nader did not attack the emperor's camp, which was strong: he preferred to surround it and wait for surrender. The whole battle, according to the sources, lasted under three hours.",
        { note: "A famous image, of camels with fire on their backs to frighten the elephants, appears in illustrations and carpets, but historians treat it with caution and say it is probably a dramatization. What the sources do confirm is the use of zamburaks on camels." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Mughals lost about 20,000 men, according to the most repeated figure. Axworthy gives about 10,000, and other sources cite up to 30,000. About 400 officers are said to have died. The Persians lost very little: about 1,100, of whom 400 were killed, according to Axworthy.",
        "Khan Dauran died of his wounds, and Saadat Khan went to Nader's camp as a prisoner. On 26 February, Muhammad Shah visited Nader and surrendered. Nader entered Delhi on 20 March, with the emperor at his side.",
        { h: "The sack of Delhi" },
        "On the night of 21 March, a rumour went round Delhi that Nader had been killed, and the population attacked Persian soldiers. In the morning, Nader ordered his men to kill. According to tradition, he raised his sword at the Roshan-ud-Daulah mosque as the signal. Estimates of the dead run from 20,000 to 30,000 in about six hours, and a Dutch representative speaks of about 10,000 women and children enslaved. There are no certain figures. The killing stopped only when Muhammad Shah begged for mercy.",
        "Nader took the treasury, the [[Peacock Throne|trono do pavão]] and the [[Koh-i-Noor|koh-i-noor]] and Darya-i-Noor diamonds, as well as a fine of 20 million rupees on the city. The loot is estimated at about 700 million [[rupees|rupia mogol]]. He left Muhammad Shah on the throne but kept the territories west of the Indus. In May he left India, and on the way back Sikhs attacked the column, freed prisoners and took part of the loot.",
        { h: "Why it matters" },
        "It was Nader's greatest victory. The Mughal Empire was left without treasure or prestige, and the governors began to act almost like kings. For Axworthy, without this blow the British conquest of India might have come later or in a different form. For Persia, the money was so great that Nader suspended taxes for three years. He was murdered by his own officers in 1747, and his empire fell apart.",
        { h: "Curiosities and controversies" },
        { note: "The date: some sources give 13 February, others 24. It seems to be the same day in two calendars, the Julian and the Gregorian, which differed by 11 days at that time. The Tuesday of the battle corresponds to 24 February in the Gregorian calendar." },
        { note: "The warning: it is said that the officials of the Mughal camp learned of Nader's arrival only when the fodder collectors came back wounded, shouting that he had come." },
        { note: "The absence: Khan Dauran asked the Rajput chiefs and the Marathas for help, and they did not come." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  karnal: {
    terrain: [
      { t: "sea", x: 92, y: 0, w: 8, h: 70, l: "Jamuna River" },
      { t: "note", x: 8, y: 5, l: "North ↑" },
      { t: "note", x: 20, y: 17, l: "Kunjpura" },
      { t: "note", x: 20, y: 66, l: "Karnal" }
    ],
    units: [
      { id: "pCen", s: "a", k: "cav", w: 16, h: 5, l: "Nasrullah (centre)" },
      { id: "pRig", s: "a", k: "cav", w: 12, h: 5, l: "Tahmasp Khan (right)" },
      { id: "pAmb", s: "a", k: "cav", w: 12, h: 5, l: "Fath Ali and Lotf Ali (ambush)" },
      { id: "pLgt", s: "a", k: "cav", w: 12, h: 4, l: "Light cavalry (bait)" },
      { id: "pGun", s: "a", k: "art", w: 12, h: 3, l: "Zamburaks and muskets" },
      { id: "pNad", s: "a", k: "cav", w: 8, h: 4, l: "Nader and 1,000 Afshars" },
      { id: "pCmp", s: "a", k: "camp", w: 12, h: 5, l: "Persian camp" },
      { id: "mSaa", s: "b", k: "cav", w: 14, h: 5, l: "Saadat Khan (Awadh)" },
      { id: "mDau", s: "b", k: "ele", w: 14, h: 4, l: "Khan Dauran" },
      { id: "mNiz", s: "b", k: "cav", w: 12, h: 4, l: "Nizam-ul-Mulk" },
      { id: "mEmp", s: "b", k: "cav", w: 14, h: 5, l: "Muhammad Shah" },
      { id: "mVaz", s: "b", k: "cav", w: 12, h: 5, l: "Vizier (left)" },
      { id: "mArt", s: "b", k: "art", w: 12, h: 3, l: "Heavy artillery" },
      { id: "mCmp", s: "b", k: "camp", w: 30, h: 6, l: "Mughal camp" }
    ],
    steps: [
      { t: "The Mughals are in a camp with trenches and a mud wall, to the south. The Persians sit to the north, near Kunjpura, with the Jamuna River supplying water.",
        p: { pCen: [46, 22], pRig: [62, 20], pAmb: [28, 20], pLgt: [46, 30], pGun: [46, 36], pNad: [72, 24], pCmp: [84, 10],
             mSaa: [20, 70], mDau: [66, 58], mNiz: [50, 56], mEmp: [50, 63], mVaz: [34, 58], mArt: [50, 52], mCmp: [50, 66] } },
      { t: "Saadat Khan arrives at night, with his men exhausted and his baggage behind. Persian patrols seize about 500 camels from the column.",
        p: { pLgt: [28, 40], mSaa: [22, 62] } },
      { t: "In the morning the Nizam advises waiting. Saadat Khan will not listen and leaves the camp without artillery, with cavalry and infantry.",
        p: { mSaa: [30, 52] } },
      { t: "The light Persian cavalry pretends to flee and draws Saadat Khan away from the camp, about three kilometres.",
        p: { pLgt: [40, 38], mSaa: [36, 46] } },
      { t: "The screen opens. Zamburaks and muskets fire at point-blank range, and Saadat Khan's vanguard falls apart.",
        p: { pGun: [40, 34], pLgt: [30, 38], pCen: [44, 30], mSaa: [36, 40] } },
      { t: "Khan Dauran rides out on an elephant with about 8,000 horsemen and loses contact with Saadat Khan. The Persian left wing waits for him in ambush.",
        p: { mDau: [56, 46], pAmb: [32, 28] } },
      { t: "Khan Dauran falls into the crossfire, is wounded and carried back. About a thousand of his men dismount and fight on foot until they die.",
        p: { mDau: [52, 52], pAmb: [38, 32], pRig: [54, 28], pNad: [60, 34] } },
      { t: "Saadat Khan's elephant panics and traps its master. A Persian soldier climbs into the howdah and captures him.",
        p: { mSaa: [36, 38] }, x: ["mSaa"] },
      { t: "Without the two chiefs, the Mughal army falls apart. Nader does not attack the camp: he closes the road to Delhi and waits for surrender.",
        p: { mDau: [52, 56], mNiz: [50, 58], mVaz: [34, 60], pNad: [50, 46], pCen: [44, 40], pRig: [60, 40] }, x: ["mDau"] }
    ]
  }
});

// ---------- Malplaquet, Culloden, Rossbach, Kunersdorf ----------
// Malplaquet: English and French Wikipedia on the battle, Britannica, the works they cite (Churchill, Falkner).
// Culloden: English and French Wikipedia, National Trust for Scotland, Cumberland's dispatch in the London Gazette.
// Rossbach: English and French Wikipedia, Britannica (Frederick's own account, Bodart, Tucker for the losses).
// Kunersdorf: English and French Wikipedia and the works they cite (Duffy, the Prussian General Staff history).
// Numbers differ a lot between sources for all four battles, and the text gives the range.

Object.assign(GLOSSARY, {
  "casa militar do rei": "The elite troops that guarded the King of France, the cavalry among them. Their officers and many of their soldiers were nobles, and the unit was the jewel of the French army.",
  "redente": "A stretch of fortification shaped like a tooth or a projecting angle, which lets the defenders fire sideways at attackers reaching the wall.",
  "coluna de marcha": "A long, narrow file, good for moving fast and terrible for fighting: an army attacked like this can only use its head and part of its troops.",
  "jacobitas": "Supporters of the Stuarts, the old royal dynasty of England and Scotland, driven out in 1688. They wanted to return the throne to the exiled king and his family. The name comes from Jacobus, Latin for James.",
  "carga highland": "The attack of the Scottish clans: running in a mass at the enemy right after a volley and fighting at close quarters, with broadsword and shield. It worked at Prestonpans in 1745, but failed against canister and bayonets at Culloden.",
  "piquetes irlandeses": "Units of Irish soldiers in French service, sent to support the Jacobites. They were small, and at Culloden they covered the retreat."
});

Object.assign(DEEP, {
  malplaquet: {
    war: "War of the Spanish Succession (1701–1714)",
    hook: "The bloodiest battle of the 18th century: the Allies kept the field, but it was France that left with its head high.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1700 Charles II, King of Spain, died childless. His will left the throne to a grandson of the French king Louis XIV. England, the United Provinces (Holland) and Austria feared seeing France and Spain under one family and formed the [[Grand Alliance|grande aliança]] to prevent it. The war began in 1701 and dragged across Europe and the colonies.",
        "On the Allied side, two generals became legends: the Englishman John Churchill, Duke of Marlborough, and Prince Eugene of Savoy, in Austrian service. Together they beat the French at Blenheim (1704), Ramillies (1706) and Oudenarde (1708). In 1709 France was nearly bankrupt and the winter was so harsh that famine caused mutinies. The peace talks at The Hague failed in April, and the war went on.",
        { h: "The road to Malplaquet" },
        { timeline: [
          ["April 1709", "The peace talks at The Hague fail."],
          ["3 September", "The Allies take Tournai and march on Mons."],
          ["9 September", "Heavy rain delays the Allies, and Marshal Villars uses the day to dig trenches."],
          ["11 September", "Battle of Malplaquet."],
          ["21 October", "Mons surrenders to the Allies."]
        ]},
        "Louis XIV ordered Villars to prevent the fall of Mons. Villars could not stop the siege, but chose to fight anyway: he told the king that the army would melt away from hunger and discouragement if it did not fight."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Marlborough, 59, and Eugene, 45" },
        "Marlborough commanded the Allied army and was a master of logistics and manoeuvre. Eugene, of French birth and a personal enemy of Louis XIV, commanded the right wing. The two had won so often that they believed France could not take another blow.",
        { h: "Villars, 56, and Boufflers, 65" },
        "Claude de Villars was the best general France had left: bold, vain and much loved by his soldiers. Marshal Boufflers, much older, was famous for his defence of Lille in 1708. With France in ruins, he agreed to serve under Villars even though he was senior in rank, and it was he who led the retreat.",
        { h: "The Prince of Orange and the Dutch" },
        "The Dutch, who paid part of the war and suffered from it, attacked the Allied left wing under the Prince of Orange. They kept pressing the attack despite enormous losses, and Marlborough took the blame for not having watched him more closely."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Allies had between 86,000 and 110,000 men, depending on the source, and about 100 guns. The French had between 75,000 and 90,000 and about 80 guns. There were soldiers from many countries on both sides: Bavarians, Irish and Swiss among the French; British, Dutch, Germans, Danes and also Swiss among the Allies.",
        { note: "Malplaquet was the last battle in which Swiss mercenaries fought directly against each other, until Bailén in 1808." },
        { h: "The ground" },
        "The French held the Malplaquet gap, an open space between two woods: the Bois de Sars on their left and the Bois de Lanière on their right. Villars used the extra day to dig trenches and raise [[redoubts|reduto]] and [[redans|redente]] in the centre, and also entrenched the edge of both woods. The cavalry, including the [[King's Household|casa militar do rei]], stood behind the infantry.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, at 7:00 the Allied guns opened fire until about 8:30. Then Eugene attacked the Bois de Sars with the Germans and Danes of Generals Lottum and Schulenburg. The fight in the wood was hard, with heavy losses on both sides, and Eugene was lightly wounded but stayed on the field.",
        "Second, at about 9:00 the Dutch attacked the French right, where Boufflers stood. They were repulsed and came back with 17 battalions of reinforcement. They took the Blairon farm and were thrown back to their starting line again. Boufflers's men did not counterattack, and the [[King's Household|casa militar do rei]] sat for about an hour and a half under fire without moving.",
        "Third, Eugene's pressure made Villars take troops from the centre to reinforce the left. At that moment the column of General Withers arrived, 21 battalions from Tournai, which swung through the Bois de Sars and hit the French left on the flank. Villars sent 12 more battalions there. At about midday a bullet struck him in the knee. He passed command to Boufflers and was carried off the field.",
        "Fourth, with the centre weakened, the British infantry of the Earl of Orkney advanced and took the redans. Then came the biggest cavalry clash of the century: the Allied cavalry entered through the gap and was attacked by the [[King's Household|casa militar do rei]]. The Allies were pushed back, but the British infantry repulsed the French, and the Allies advanced again.",
        "Fifth, the French left began to give way under the attacks of Withers and Schulenburg, and General Puységur, who had taken command there, ordered a withdrawal. Only after the Dutch cavalry threatened the rear did the Dutch infantry take the trenches on the right.",
        "Sixth, at about 15:00 Boufflers realized the cavalry could not hold much longer and ordered a general retreat, in good order and with the artillery, toward Le Quesnoy and Valenciennes. The exhausted Allies did not pursue."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Allies generally lost 21,000 to 25,000 killed and wounded, and estimates run from 15,000 to 30,000. The Dutch alone lost 8,462. The French lost 11,000 to 14,000, and some give smaller or larger numbers. The Earl of Orkney wrote that the dead lay as thick as a flock of sheep. The French also lost 16 guns.",
        "Almost all historians consider Malplaquet an Allied victory, because France left the field. But it was a [[Pyrrhic victory|vitória de pirro]]. Boufflers wrote to the king that misfortune had never been accompanied by so much glory, and Villars told Louis XIV that if God gave them another defeat like it, their enemies would be destroyed.",
        { h: "Why it matters" },
        "Mons surrendered on 21 October, and the Allies took other fortresses, but they could not enter France. The French army regained its confidence after years of defeats, and France ended up with better terms in the [[Treaty of Utrecht|tratado de utrecht]] in 1713. In England, the losses helped the Tory opposition win the elections of October 1710. Marlborough was replaced by Ormonde in 1711.",
        { h: "Curiosities and controversies" },
        { note: "According to tradition, rumours of Marlborough's death after Malplaquet inspired the French song 'Malbrough s'en va-t-en guerre', still sung as a lullaby." },
        { note: "Casualty figures vary so much that some French sources give only 6,000 losses for France, while the most cited English ones give 11,000 to 14,000." },
        { note: "Marlborough offered transport for the French wounded and, according to Churchill, barely slept that night because of the suffering of the wounded." }
      ]}
    ]
  },

  culloden: {
    war: "Jacobite rising of 1745–1746",
    hook: "In under an hour, the last battle on British soil ended the Stuarts' dream and the world of the clans.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1688 the Catholic king James II was driven out of England, and the throne went to Protestants. Ever since, the [[Jacobites|jacobitas]] had dreamed of the Stuarts' return. In 1714, with Queen Anne's death, the throne passed to the German house of Hanover. Scotland still had many discontented people, especially in the Highlands, where the [[clans|clã]] were the basis of society.",
        "In 1745 the young Charles Edward Stuart, grandson of James II and raised in exile, landed in Scotland, almost without money and without the promised help from France. The clan chiefs followed him anyway. What followed was an astonishing campaign.",
        { h: "The road to Culloden" },
        { timeline: [
          ["August 1745", "Charles raises his standard at Glenfinnan and gathers the clans."],
          ["September 1745", "He takes Edinburgh and beats the government army at Prestonpans, with a [[Highland charge|carga highland]]."],
          ["December 1745", "He advances to Derby, about 200 km from London, but the chiefs vote to turn back."],
          ["January 1746", "He wins again at Falkirk."],
          ["12 April 1746", "The Duke of Cumberland, son of King George II, crosses the River Spey with the government army."],
          ["15 to 16 April", "The Jacobites try a night attack that fails. The next morning, they fight at Culloden."]
        ]},
        "King George II sent his son Cumberland, 25, to put an end to the revolt. After Derby, the Jacobites fell back north, and Cumberland followed them along the coast to Inverness."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Charles Edward Stuart, 25 years old" },
        "'Bonnie Prince Charlie' was brave and charismatic, but without military experience. He quarrelled with his officers, preferred the advice of his Irish secretary John O'Sullivan, and wanted to fight at Culloden even against Lord George Murray's opinion.",
        { h: "Lord George Murray, 51 years old" },
        "The best Jacobite general, an experienced Scot, had won at Prestonpans and Falkirk. He rejected the ground at Culloden because it favoured the government, which had artillery and cavalry. The alternative he proposed, near Daviot Castle, was rejected by other chiefs as 'mossy and soft'.",
        { h: "The Duke of Cumberland, 25 years old" },
        "A son of George II, wounded at Dettingen and beaten at Fontenoy, he was a disciplined soldier of little charisma. According to many accounts, he drilled the soldiers in a simple trick against the [[Highland charge|carga highland]]: each man was to stab with his [[bayonet|baioneta]] the enemy on his right, not the one in front, to escape the shield."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The government had between 6,900 and 7,200 men and about 10 guns: British infantry, some Lowland Scots, cavalry and artillery. The Jacobites had between 5,000 and 6,000, mostly [[Highlanders|highlanders]], plus a few hundred French and Irish in French service, the [[Irish Picquets|piquetes irlandeses]], and few guns.",
        { note: "The numbers vary considerably by source. The ranges above are the ones historians use most. The Jacobite army was also below its normal strength, because many men had wandered off in search of food." },
        { h: "The night before" },
        "On the night of 15 April, Charles tried a surprise attack on Cumberland's camp at Nairn, with only swords, dirks and bayonets. The march was disorganized, and Murray called off the operation. Part of the column, the Duke of Perth's group of 1,200 men, never received the order and kept going until it ran into the government sentries. The men returned to Culloden exhausted, and many had scattered to sleep or look for food.",
        { h: "The ground" },
        "An open moor, Drummossie Moor, with common grazing, ground soaked by rain and snow, and the River Nairn about 1 km away. The Jacobites had their left flank anchored on the walls of Culloden Park and their right beside the Culwhiniac walls. It was good ground for the government's artillery and cavalry, and bad for a charge.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, the two armies faced each other in line. The Jacobites put the Highland regiments in the front line, with Murray on the right and Perth on the left, and the Lowland regiments and the French behind. Cumberland formed two lines of infantry, with the artillery between the battalions and the cavalry on the wings.",
        "Second, the artillery duel began. The government's guns were much better and caused heavy casualties, while the weak Jacobite artillery hardly replied. Sources differ on how long the Jacobites waited under this fire: from a few minutes to about 20.",
        "Third, Charles ordered the attack. The government artillery switched to [[canister|metralha]], and light mortars came into action.",
        "Fourth, the Jacobite right, with the men of Atholl, Lochiel's Camerons and those of Appin, attacked the government left. The battalions bunched up, several chiefs fell, and Lochiel had his ankles broken by canister.",
        "Fifth, the Jacobite left, formed by the MacDonalds, crossed waterlogged ground and advanced slowly. It stopped and fired from a distance, without effect. The chief Keppoch was killed and Clanranald was wounded.",
        "Sixth, the Jacobite right hit the regiments of Barrell (the 4th) and Dejean (the 37th), which took the brunt of the shock. General Huske responded with Sempill's brigade and the 20th regiment and enveloped the attackers on three sides.",
        "Seventh, the government cavalry tried to fall on the Jacobite left, but was held up by the bog and ended up fighting the Irish Picquets.",
        "Eighth, the Jacobites fell apart. The French and Irish covered the retreat, and O'Sullivan had a captain take Charles off the field. Bland's dragoons chased the fugitives along the Inverness road. According to an account from the time, Bland gave quarter only to about fifty Frenchmen."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Cumberland reported 50 government dead and 259 wounded. The Jacobites lost between 1,500 and 2,000 killed and wounded, many in the pursuit, and 376 were captured. The battle lasted, according to most accounts, less than an hour.",
        "Charles ordered the army to disperse until French help arrived, and by 18 April almost no one was left. He fled to the Hebrides and only sailed back to France on 19 September. He never returned. Of the 3,471 Jacobite prisoners, about 1,200 were transported, 905 were released under an indemnity act, 362 were exchanged with France and 120 were executed.",
        { h: "Why it matters" },
        "It was the last pitched battle on British soil. The government reacted with harsh laws in 1746, which banned weapons and the typical Highland dress and took from the clan chiefs the power to judge. The old clan system was dismantled. Cumberland became known, at least in Scotland, as 'the Butcher'.",
        { h: "Curiosities and controversies" },
        { note: "The 'no quarter' order: there is an old dispute about an order of this kind and about who gave it. What the accounts show is that wounded men and prisoners were killed on the field and in the pursuit." },
        { note: "What remains: in 1881 Duncan Forbes, the landowner, raised a memorial and headstones on the mass graves. Today the field is looked after by the National Trust for Scotland, which opened a visitor centre in 2007." }
      ]}
    ]
  },

  rossbach: {
    war: "Seven Years' War (1756–1763)",
    hook: "In an hour and a half, 22,000 Prussians beat almost twice as many French and Imperials, and Europe changed its opinion of Frederick.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The Seven Years' War began in 1756, when Frederick II of Prussia invaded Saxony. Austria, France, Russia, Sweden and Saxony itself joined against him. Only Great Britain was his ally. In 1757 Prussia was surrounded on all sides.",
        "That year, a French army entered western Germany and beat the Duke of Cumberland, Frederick's ally, at Hastenbeck. Under the Convention of Klosterzeven, the Hanoverians left the war. In autumn, France and an army of the Empire, the Reichsarmee, were marching toward Saxony, where Frederick was.",
        { h: "The road to Rossbach" },
        { timeline: [
          ["June 1757", "Frederick loses at Kolín, against the Austrians."],
          ["September 1757", "The Convention of Klosterzeven takes Hanover out of the war."],
          ["October 1757", "Frederick marches west against the French and the army of the Empire."],
          ["5 November", "Battle of Rossbach."],
          ["5 December", "Frederick defeats the Austrians at Leuthen."]
        ]},
        "The Allied army had two commanders who did not get along: the Prince of Soubise, a Frenchman, and the Prince of Saxe-Hildburghausen, commander of the Reichsarmee. Hildburghausen wanted to fight, and Soubise hesitated."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Frederick II, 45 years old" },
        "The King of Prussia, 45, was in a desperate situation. But he was a master at reading the field and acting fast, and he trusted the disciplined army his father had built. At Rossbach, he waited for the enemy to make a mistake.",
        { h: "Friedrich Wilhelm von Seydlitz, 36 years old" },
        "The commander of the Prussian cavalry, still young, was famous for his boldness. He waited behind the Pölzen hill and attacked at exactly the right moment. He was wounded in the battle.",
        { h: "Soubise and Hildburghausen" },
        "Soubise, 42, owed his post more to friendship at court, with Madame de Pompadour backing him, than to military fame. Hildburghausen, about 55, commanded an army of contingents from various German states, poorly trained and poorly organized."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Prussians had about 22,000 men and 79 guns. The Allies had about 41,000: some 30,000 French and 11,000 from the army of the Empire. Sources give from 45 to 114 guns for them, depending on what they count.",
        { h: "The ground" },
        "A wide plateau, almost without trees, with patches of sand and marsh. Small hills, like the Janus and the Pölzen, lie between Rossbach and Reichardtswerben. They hid the Prussian movements.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on the morning of 5 November, the Prussian camp lay between Rossbach and Bedra, and the Allied one between Branderoda and Mücheln. Hildburghausen wanted to march to Zeuchfeld, on Frederick's left flank, and face north between Reichardtswerben and Pettstädt. Soubise only wanted a limited action to cut Frederick off from the Saale River.",
        "Second, the Allies marched in [[columns|coluna de marcha]], without sending scouts. The columns were disordered: the right-wing cavalry in front, the left-wing cavalry behind, the reserve infantry squeezed in the middle and the artillery stuck. Frederick, from a roof in Rossbach, at first thought the Allies were only moving to get supplies. A captain, von Gaudi, reported that the columns were turning east, and Frederick decided to fight.",
        "Third, he left a small detachment in front of the French vanguard, shielded by the Schortau hill, and took the rest of the army away, at twice the enemy's speed, behind the Janus and Pölzen hills.",
        "Fourth, the Allies, seeing the Prussians vanish to the east, sped up. They sent the first line and the right-wing cavalry toward Reichardtswerben and dragged part of the left-wing cavalry along. It was a grave mistake.",
        "Fifth, at 15:15 Colonel Moller opened fire with 18 heavy guns from the Janus hill. The Allies thought it was cover for a Prussian retreat.",
        "Sixth, at 15:30 Seydlitz, with 38 squadrons, came out from behind the Pölzen hill and hit the head and right flank of the columns. The Allied cavalry fell apart. Seydlitz was seriously wounded fighting in the ranks, and his men gathered in a hollow behind the line, near Tagewerben.",
        "Seventh, the Prussian infantry, with Prince Henry, came down the Janus hill against the Allied infantry in confusion. The French formed columns and attacked with bayonets, but Moller's guns and the rapid Prussian volleys destroyed the attack. Only seven Prussian battalions actually fought.",
        "Eighth, Seydlitz returned with his regrouped squadrons and attacked the disordered mass again, on the flank and rear. The Allied infantry fell apart and fled. The final collapse took under 15 minutes. Soubise and Hildburghausen were wounded, and the pursuit lasted until dark.",
        { note: "Frederick is said to have remarked that he won the battle with most of his infantry's muskets on their shoulders, that is, without using them." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Prussians lost about 169 killed and 379 to 430 wounded, according to Bodart and Tucker. The Allies had 8,000 to 10,000 men out of action, killed, wounded and captured: about 6,600 French and 3,500 Imperials, according to one source. The Prussians took 72 guns, 21 standards and eight French generals.",
        "Frederick did not pursue the French. He marched to Silesia, about 274 km in some 12 days, and on 5 December defeated the Austrians at Leuthen.",
        { h: "Why it matters" },
        "Militarily, the effect was limited, because Austria remained the main enemy. But the moral effect was enormous: the French army, regarded by many as the best in Europe, was beaten by Prussians in under two hours. France lost interest in the German war, and Great Britain began to help Prussia more, with money and a commander, Prince Ferdinand of Brunswick. Frederick became a hero in England and, later, a symbol for German nationalism.",
        { h: "Curiosities and controversies" },
        { note: "Soubise's fate: he was made a marshal of France even after losing the battle, while d'Estrées was recalled after winning at Hastenbeck. Frederick made ironic remarks about it. In Paris, verses mocking Soubise circulated." },
        { note: "The monument: Napoleon had the Prussian monument at Rossbach destroyed after his victory at Jena in 1806." }
      ]}
    ]
  },

  kunersdorf: {
    war: "Seven Years' War (1756–1763)",
    hook: "Frederick the Great's worst defeat: in one day, the Prussian army lost more than a third of its men.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1759, the Seven Years' War was entering its fourth year. Prussia was fighting Austria, Russia and France. Frederick II had gained a reputation for invincibility at Rossbach and Leuthen in 1757, but the enemy forces were much larger.",
        "In the summer, a Russian army under General Pyotr Saltykov advanced through Silesia and Brandenburg. On 23 July it beat a Prussian corps at Kay, and then joined the Austrians of Ernst Gideon von Laudon near Frankfurt an der Oder, about 80 km from Berlin.",
        { h: "The road to Kunersdorf" },
        { timeline: [
          ["23 July 1759", "The Russians beat the Prussians at Kay."],
          ["Early August", "Russians and Austrians join forces near Frankfurt an der Oder."],
          ["August", "Frederick crosses the Oder River and marches against the enemy."],
          ["12 August", "Battle of Kunersdorf."]
        ]},
        "Frederick wanted to destroy the Allied army before it threatened Berlin. It was a gamble: if he lost, there would be no second army."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Frederick II, 47 years old" },
        "He attacked in haste a well-entrenched enemy, with little reconnaissance of the ground. Even after the offensive was clearly stalled, and against the advice of his generals, he insisted on attacking again.",
        { h: "Pyotr Saltykov, close to 60" },
        "The Russian commander fortified the ridge with earthworks and, when he saw the Prussians take position on another side, turned the wings of his army to face them.",
        { h: "Laudon, 42 years old" },
        "The commander of the Austrian corps, Ernst Gideon von Laudon, was aggressive and experienced. His cavalry counterattack at the end of the day was decisive."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Allies had about 41,000 Russians and 18,500 Austrians, some 59,500 in all, with about 250 guns. Some old sources give more, but current historians say no documents support them. The Prussians had about 50,900 men and 230 guns, according to the most cited estimate. Other studies give more.",
        { h: "The ground" },
        "A chain of low hills, east of the Oder: the Judenberge, Mühlberge, Walkberge and Spitzberge. Between them lay marshes, ponds and the Kuhgrund ravine. To the east, the Reppen forest covered the approach. The Russians had fortified the ridge with redoubts, [[abatis]] and felled trees against cavalry.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, Frederick sent Finck's corps to make a demonstration in front and took the main army in a wide arc through the Reppen forest, to attack the Allied flank. He sent very few scouts.",
        "Second, Saltykov noticed the movement and turned the wings of his army. The march ran late, and the ponds forced the Prussians to squeeze into narrow columns.",
        "Third, at about 8:00 the main army came out of the forest, and the Prussian artillery bombarded the Russian left.",
        "Fourth, at about midday, the Prussian infantry, with the [[grenadiers|granadeiros]], stormed the Mühlberge at close range and captured 80 to 100 guns. The Russian left fell back to Kunersdorf, and in the chaos some Russians even fired on their own allies.",
        "Fifth, Saltykov sent in the reserves, among them the Austrian grenadiers, and the line held.",
        "Sixth, in the afternoon the attacks on the Kuhgrund ravine and the Spitzberge stalled under heavy fire. Generals asked Frederick to stop, but he insisted on attacking.",
        "Seventh, in the early evening, Seydlitz led a cavalry charge against the Russian centre. It failed, and he was seriously wounded. General Platen's cavalry, who tried to continue the attack, was shattered by Laudon, with the Austrian cavalry.",
        "Eighth, at about 19:00, rested Austrian infantry joined the fight, and the Prussian line gave way. The army fell apart. Cossacks surrounded Frederick, and only the cavalry captain Joachim Bernhard von Prittwitz, with a squadron of [[hussars|hussardos]], managed to get him out."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Allies lost 16,000 to 20,500 men, depending on the source (the Russian and Austrian figures do not match). The Prussians lost 18,600 to 21,000, and some estimates give up to 25,000, among killed, wounded, missing and deserters. They also lost 172 guns and about 60% of the cavalry.",
        "Frederick wrote to the minister Finckenstein, his old tutor, that of an army of 48,000 only 3,000 remained. It was an exaggeration born of despair: scattered soldiers returned to the ranks in the following days. He handed command to Finck, named his brother Henry generalissimo and made the generals swear loyalty to his 14-year-old nephew, the future Frederick William II.",
        { h: "Why it matters" },
        "Berlin, 80 km away, lay open. But Saltykov and Laudon did not advance: the Russians and Austrians distrusted each other, and Saltykov criticized the caution of the Austrian commander Daun. The Russians were short of supplies. On 1 September, Frederick called this inaction a miracle, in a letter to his brother Henry. Empress Elizabeth of Russia promoted Saltykov to field marshal, and Laudon received a sword of honour.",
        "Prussia survived until the war ended in 1763, and Russia left the conflict only when a change on the throne, in 1762, took it to peace.",
        { h: "Curiosities and controversies" },
        { note: "The poet: Ewald Christian von Kleist, a Prussian officer and one of the most widely read German poets of his time, died of the wounds he received at Kunersdorf." },
        { note: "Loss figures vary a great deal, because thousands of Prussian soldiers scattered and returned later. That is why historians give ranges, not a single number." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  malplaquet: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Sketch, not to scale" },
      { t: "note", x: 84, y: 14, l: "Bois de Sars" },
      { t: "note", x: 12, y: 14, l: "Bois de Lanière" }
    ],
    units: [
      { id: "aEug", s: "a", k: "inf", w: 24, h: 6, l: "Eugene (Germans and Danes)" },
      { id: "aOrk", s: "a", k: "inf", w: 16, h: 6, l: "Orkney (British)" },
      { id: "aOra", s: "a", k: "inf", w: 22, h: 6, l: "Orange (Dutch)" },
      { id: "aWit", s: "a", k: "inf", w: 12, h: 4, l: "Withers (21 battalions)" },
      { id: "aCav", s: "a", k: "cav", w: 24, h: 5, l: "Allied cavalry" },
      { id: "fL", s: "b", k: "inf", w: 22, h: 6, l: "French left (Sars)" },
      { id: "fC", s: "b", k: "inf", w: 18, h: 6, l: "Entrenched centre" },
      { id: "fR", s: "b", k: "inf", w: 22, h: 6, l: "Boufflers (right)" },
      { id: "fCav", s: "b", k: "cav", w: 24, h: 5, l: "King's Household and cavalry" },
      { id: "fGun", s: "b", k: "art", w: 12, h: 3, l: "French artillery" }
    ],
    steps: [
      { t: "The French hold the gap between the two woods, with trenches and redoubts in the centre. The cavalry stands behind. The Allies line up in front, with Eugene on the right, the British in the centre and the Dutch on the left.",
        p: { aEug: [78, 50], aOrk: [50, 52], aOra: [22, 50], aWit: [88, 62], aCav: [50, 62], fL: [78, 20], fC: [50, 22], fR: [22, 20], fCav: [50, 11], fGun: [30, 26] } },
      { t: "After the bombardment, Eugene attacks the Bois de Sars with Germans and Danes. The fight in the wood is hard, with heavy losses on both sides.",
        p: { aEug: [78, 34] } },
      { t: "At about 9:00 the Dutch attack the French right, where Boufflers stands, and are repulsed.",
        p: { aOra: [22, 34] } },
      { t: "Reinforced by 17 battalions, the Dutch take the Blairon farm and are thrown back to their starting line. The French do not counterattack, and the King's Household sits under fire.",
        p: { aOra: [22, 42], fCav: [30, 13] } },
      { t: "Eugene's pressure forces Villars to take troops from the centre. Withers's column swings through the Bois de Sars and hits the French left on the flank.",
        p: { aWit: [90, 28], fC: [58, 22], fL: [82, 22] } },
      { t: "At about midday Villars is wounded in the knee and hands command to Boufflers.",
        p: { fL: [78, 24] } },
      { t: "With the centre weakened, Orkney's British infantry advances and takes the redans.",
        p: { aOrk: [50, 30], fC: [50, 18] } },
      { t: "The biggest cavalry clash of the century: the Allied cavalry enters through the gap and the King's Household counterattacks. The Allies fall back, but the British infantry repulses the French.",
        p: { aCav: [50, 36], fCav: [50, 24] } },
      { t: "With the left giving way, at about 15:00 Boufflers orders a general retreat, in good order and with the guns, toward Le Quesnoy. The exhausted Allies do not pursue.",
        p: { fL: [78, 10], fC: [52, 8], fR: [22, 8], fCav: [40, 6], fGun: [30, 4], aEug: [76, 30], aOra: [24, 36] } }
    ]
  },

  culloden: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Sketch, not to scale" },
      { t: "note", x: 6, y: 26, l: "Culwhiniac walls" },
      { t: "note", x: 74, y: 26, l: "Culloden Park walls" }
    ],
    units: [
      { id: "gL1", s: "a", k: "inf", w: 44, h: 4, l: "Government front line" },
      { id: "gL2", s: "a", k: "inf", w: 44, h: 4, l: "Second line" },
      { id: "gArt", s: "a", k: "art", w: 20, h: 3, l: "Artillery (about 10 guns)" },
      { id: "gCavR", s: "a", k: "cav", w: 12, h: 4, l: "Dragoons" },
      { id: "gCavL", s: "a", k: "cav", w: 12, h: 4, l: "Dragoons" },
      { id: "gArg", s: "a", k: "inf", w: 8, h: 3, l: "Argyll militia" },
      { id: "jR", s: "b", k: "inf", w: 20, h: 5, l: "Atholl, Camerons and Appin (Murray)" },
      { id: "jC", s: "b", k: "inf", w: 22, h: 5, l: "Frasers, Mackintosh and others" },
      { id: "jL", s: "b", k: "inf", w: 24, h: 5, l: "MacDonalds (Perth)" },
      { id: "jRes", s: "b", k: "inf", w: 34, h: 4, l: "Second line and French" },
      { id: "jPic", s: "b", k: "inf", w: 10, h: 4, l: "Irish Picquets" },
      { id: "jArt", s: "b", k: "art", w: 12, h: 3, l: "Jacobite artillery" }
    ],
    steps: [
      { t: "Two armies face to face on the waterlogged moor. The Jacobites, with the Highlanders in the front line, stand between the Culloden and Culwhiniac walls. The government has two lines, artillery between the battalions and dragoons on the wings.",
        p: { gL1: [50, 56], gL2: [50, 63], gArt: [50, 52], gCavR: [86, 58], gCavL: [16, 58], gArg: [4, 62], jR: [26, 18], jC: [48, 18], jL: [72, 18], jRes: [48, 11], jPic: [82, 12], jArt: [50, 26] } },
      { t: "The artillery duel begins. The government's guns are better and tear holes in the Jacobite ranks, who wait standing under the fire.",
        p: { gArt: [50, 46] } },
      { t: "Charles orders the attack. The government artillery switches to canister, and the light mortars come into action.",
        p: { gArt: [50, 44], jR: [26, 26], jC: [48, 26], jL: [72, 26] } },
      { t: "The Jacobite right, with Atholl, Camerons and Appin, runs at the government left. The battalions bunch up in the advance, and several chiefs fall, among them Lochiel, with his ankles broken.",
        p: { jR: [30, 38], jC: [46, 32] } },
      { t: "The left, the MacDonalds, crosses waterlogged ground, advances slowly and stops to fire from a distance, without effect. The chief Keppoch is killed.",
        p: { jL: [70, 34] } },
      { t: "The Jacobite right hits the regiments of Barrell and Dejean. The government second line moves up to the flank and envelops the attackers on three sides.",
        p: { jR: [32, 48], gL2: [38, 56] } },
      { t: "The government cavalry attacks on the Jacobite left, but is held up by the bog and fights the Irish Picquets.",
        p: { gCavR: [78, 42], jPic: [76, 32] } },
      { t: "The Jacobites fall apart. French and Irish cover the retreat, and Bland's dragoons chase the fugitives along the Inverness road.",
        p: { gCavL: [24, 40], jR: [32, 54], jC: [48, 36], jL: [68, 30], jRes: [48, 8] }, x: ["jR", "jC", "jL"] }
    ]
  },

  rossbach: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Sketch, not to scale" },
      { t: "hill", x: 56, y: 56, rx: 8, ry: 4, l: "Janus hill" },
      { t: "hill", x: 78, y: 54, rx: 8, ry: 4, l: "Pölzen hill" },
      { t: "note", x: 10, y: 66, l: "Rossbach" },
      { t: "note", x: 84, y: 30, l: "Reichardtswerben" }
    ],
    units: [
      { id: "pCmp", s: "a", k: "camp", w: 14, h: 5, l: "Prussian camp" },
      { id: "pSey", s: "a", k: "cav", w: 20, h: 5, l: "Seydlitz (38 squadrons)" },
      { id: "pGun", s: "a", k: "art", w: 12, h: 3, l: "Moller (18 guns)" },
      { id: "pInf", s: "a", k: "inf", w: 22, h: 5, l: "Infantry (Prince Henry)" },
      { id: "pScr", s: "a", k: "inf", w: 8, h: 3, l: "Detachment at Rossbach" },
      { id: "aCavR", s: "b", k: "cav", w: 20, h: 5, l: "Right-wing cavalry" },
      { id: "aInf", s: "b", k: "inf", w: 26, h: 5, l: "Infantry columns" },
      { id: "aGun", s: "b", k: "art", w: 12, h: 3, l: "Artillery and reserve" },
      { id: "aCavL", s: "b", k: "cav", w: 16, h: 5, l: "Left-wing cavalry" }
    ],
    steps: [
      { t: "In the morning, the Prussian camp is at Rossbach. The Allies, to the southwest, begin to march east, to get around Frederick's left.",
        p: { pCmp: [14, 60], pSey: [28, 62], pGun: [30, 56], pInf: [24, 66], pScr: [10, 52], aCavR: [40, 20], aInf: [22, 22], aGun: [8, 24], aCavL: [8, 12] } },
      { t: "The Allied columns stretch and fall into disorder: the right-wing cavalry in front, the artillery stuck behind, no scouts. Frederick watches from a roof in Rossbach.",
        p: { aCavR: [54, 20], aInf: [38, 22], aGun: [20, 24], aCavL: [24, 12] } },
      { t: "Frederick sees that the columns are turning east. He leaves a small detachment at Rossbach and takes the army behind the hills, fast.",
        p: { pCmp: [40, 66], pSey: [54, 64], pGun: [56, 62], pInf: [46, 66], pScr: [10, 52] } },
      { t: "The Allies, seeing the Prussians vanish, speed up and lean toward Reichardtswerben, without forming a line.",
        p: { aCavR: [70, 24], aInf: [54, 24], aGun: [36, 24], aCavL: [44, 14] } },
      { t: "At 15:15 Moller's 18 guns open fire from the Janus hill. The Allies think it is cover for a retreat.",
        p: { pGun: [56, 54], pInf: [48, 62], pSey: [74, 58] } },
      { t: "At 15:30 Seydlitz comes out from behind the Pölzen and hits the head and flank of the columns. The Allied cavalry falls apart.",
        p: { pSey: [74, 34], aCavR: [78, 24] }, x: ["aCavR"] },
      { t: "The Prussian infantry comes down the Janus hill. The French attack in columns with bayonets, but the guns and rapid volleys destroy the attack.",
        p: { pInf: [58, 42], pGun: [56, 50], aInf: [58, 28] } },
      { t: "Seydlitz returns with his regrouped squadrons and hits the disordered mass on the flank and rear. The Allied infantry flees, and the pursuit lasts until dark.",
        p: { pSey: [48, 30], aInf: [40, 22], aCavL: [30, 10], aGun: [20, 20] }, x: ["aInf", "aCavL", "aGun"] }
    ]
  },

  kunersdorf: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Sketch, not to scale" },
      { t: "hill", x: 76, y: 22, rx: 11, ry: 5, l: "Mühlberge" },
      { t: "hill", x: 24, y: 22, rx: 10, ry: 5, l: "Spitzberge" },
      { t: "note", x: 44, y: 28, l: "Kuhgrund (ravine)" },
      { t: "note", x: 84, y: 62, l: "Reppen forest" }
    ],
    units: [
      { id: "rL", s: "a", k: "inf", w: 22, h: 5, l: "Russian left" },
      { id: "rC", s: "a", k: "inf", w: 20, h: 5, l: "Russian centre" },
      { id: "rRes", s: "a", k: "inf", w: 16, h: 4, l: "Reserves and Austrian grenadiers" },
      { id: "aCav", s: "a", k: "cav", w: 14, h: 4, l: "Austrian cavalry (Laudon)" },
      { id: "aInf", s: "a", k: "inf", w: 14, h: 4, l: "Austrian infantry" },
      { id: "pFin", s: "b", k: "inf", w: 16, h: 4, l: "Finck (demonstration)" },
      { id: "pMai", s: "b", k: "inf", w: 26, h: 5, l: "Main army" },
      { id: "pGun", s: "b", k: "art", w: 12, h: 3, l: "Prussian artillery" },
      { id: "pSey", s: "b", k: "cav", w: 16, h: 5, l: "Seydlitz" },
      { id: "pPla", s: "b", k: "cav", w: 12, h: 4, l: "Platen" }
    ],
    steps: [
      { t: "The Russians are entrenched on the ridge, with redoubts and felled trees. Finck makes a demonstration in front. The main army marches in an arc through the Reppen forest to attack the flank.",
        p: { rL: [76, 20], rC: [50, 20], rRes: [60, 12], aCav: [20, 14], aInf: [30, 22], pFin: [20, 50], pMai: [84, 62], pGun: [74, 66], pSey: [92, 58], pPla: [66, 68] } },
      { t: "Saltykov turns the wings to face the new attack. The march runs late, and the ponds force the Prussians to squeeze into narrow columns.",
        p: { rL: [78, 22], rC: [56, 20], pMai: [80, 52], pGun: [72, 54] } },
      { t: "At about 8:00 the main army comes out of the forest, and the artillery bombards the Russian left.",
        p: { pMai: [78, 40], pGun: [70, 40] } },
      { t: "Near midday, the Prussian infantry storms the Mühlberge and captures 80 to 100 guns. The Russian left falls back to Kunersdorf.",
        p: { pMai: [76, 28], rL: [64, 16] } },
      { t: "Saltykov sends in reserves, among them the Austrian grenadiers, and the Russian line holds.",
        p: { rRes: [70, 20], rL: [66, 18] } },
      { t: "In the afternoon, the attacks on the Kuhgrund ravine and the Spitzberge stall under heavy fire. Frederick insists on attacking, despite his generals' advice.",
        p: { pMai: [56, 32], pFin: [28, 36], aInf: [30, 22] } },
      { t: "Seydlitz charges the Russian centre, fails and is wounded. Platen's cavalry is shattered by Laudon's counterattack.",
        p: { pSey: [54, 26], pPla: [44, 30], aCav: [38, 26] }, x: ["pSey", "pPla"] },
      { t: "At about 19:00, rested Austrian infantry joins the fight and the Prussian line falls apart. Cossacks surround Frederick, and a squadron of Prittwitz's hussars gets him out.",
        p: { aInf: [46, 28], rC: [56, 26], rL: [66, 24], pMai: [66, 38], pGun: [62, 44], pFin: [24, 42] }, x: ["pMai", "pGun", "pFin"] }
    ]
  }
});
