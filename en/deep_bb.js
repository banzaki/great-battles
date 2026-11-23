// In-depth battles, batch bb: kunyang, ngasaunggyan, naungyo, nongsarai, maymyo.
// Checked against the English, Portuguese and Chinese Wikipedia articles on each battle (Kunyang, Ngasaunggyan, Naungyo,
// Nong Sarai, Maymyo), the English articles on the First Mongol invasion of Burma, the Sino-Burmese War (1765-1769),
// and the Hou Hanshu text of the Guangwu annals on Wikisource, plus the works those pages cite (Harvey, Hall, Dai Yingcong,
// Terwiel, de Crespigny). Where sources disagree the text says so.
// Formations: only Naungyo and Kunyang have dispositions and moves described well enough to draw. Ngasaunggyan, Nong Sarai
// and Maymyo are skipped on purpose: the sources disagree on the moves or do not place the units.

Object.assign(GLOSSARY, {
  "dinastia xin": "The short-lived dynasty founded by Wang Mang in 9 AD, after he took the throne from the Han. It lasted until 23 AD, when revolts brought it down.",
  "rebeldes de lulin": "One of the groups of peasants and minor nobles who rose against Wang Mang. They came from the Lulin hills and acclaimed Liu Xuan, a Han descendant, as emperor in 23 AD.",
  "livro de han": "The official history of the Western Han dynasty and of Wang Mang's reign, compiled by the Ban family between the 1st and 2nd centuries. It is closer to the events than the Book of the Later Han, but it carries official numbers that are hard to believe.",
  "livro dos han posteriores": "A history of the Eastern Han, written by Fan Ye in the 5th century, almost 400 years after Kunyang. It is the most detailed source on Liu Xiu and on the siege.",
  "zizhi tongjian": "A great chronicle of Chinese history, compiled by Sima Guang and finished in 1084. It takes up the numbers of the earlier histories, with small variations.",
  "reino de pagan": "The first great kingdom of Burma, with its capital at the city of Pagan on the Irrawaddy River. It dominated the country from the 11th to the 13th century and built thousands of temples.",
  "província de yunnan": "A region in southwest China on the border with Burma. The Mongols conquered it in 1253 and turned it into a base for attacking the countries to the south.",
  "crônica yuan": "The official history of the Yuan dynasty, the Yuanshi, compiled in 1370, already under the Ming dynasty. It tells the war from the Mongol point of view.",
  "reino de toungoo": "A small kingdom in central Burma, founded in 1510. Under Tabinshwehti and Bayinnaung it reunified the country and built the largest empire the region had ever seen.",
  "reino de hanthawaddy": "The kingdom of the Mon people in southern Burma, with its capital at Pegu. It was rich from sea trade and had mercenaries with firearms.",
  "crônica hmannan": "The Hmannan Yazawin, the 'Glass Palace Chronicle', compiled on the order of the Burmese king between 1829 and 1832. It is the official history of Burma, written centuries after the events it tells.",
  "balsa": "A floating platform improvised from logs or bamboo, used to cross a river when there are no boats or bridges.",
  "apanágio": "Land that a king gives to a relative or a trusted servant, to govern and live off its income.",
  "reino de ayutthaya": "The kingdom of Siam (modern Thailand), with its capital at the city of Ayutthaya, between the 14th and 18th centuries. It was a vassal of Burma from 1569 to 1584.",
  "elefante em musth": "A male elephant in a period of hormonal excitement, when he becomes aggressive and hard to control. Many generals used them on purpose: an elephant in musth attacked anything.",
  "cornaca": "The driver of a war elephant. He sat on the animal's neck and steered it with an iron hook, while the commander fought behind him.",
  "crônica de luang prasoet": "A Siamese chronicle written in 1681, almost 90 years after the battle of Nong Sarai.",
  "dinastia konbaung": "The dynasty that ruled Burma from 1752 to 1885. Its kings expanded the country and fought Siam and China.",
  "linha de suprimento": "The route by which an army receives food, weapons and ammunition. If the enemy cuts it, the army is stuck and goes hungry far from home.",
  "trança manchu": "The hairstyle of Manchu men: shaved forehead and a long braid at the back. It was a sign of loyalty to the Qing dynasty, and refusing it was treated as rebellion.",
  "sawbwa xan": "The title of the princes of the Shan people, in the mountains between Burma and China. Many owed obedience to both sides at once."
});

Object.assign(DEEP, {
  kunyang: {
    war: "Fall of the Xin dynasty and the Lulin revolt (17–25 AD)",
    hook: "A city of 9,000 rebels held out against an immense army, and a horseman who rode out at night came back to turn the war.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 9 AD, a senior official named Wang Mang took the throne from the last Han emperor and founded the [[Xin|dinastia xin]] dynasty. He promised to fix the empire with reforms: nationalizing land, banning the buying and selling of slaves, and changing the currency several times. The plans upset the economy. Yellow River floods, famine and taxes pushed peasants into banditry and rebellion.",
        "In 17 AD, bands of peasants began to rise up. One group settled in the Lulin hills, and its leaders wanted to give the revolt a banner: restore the Han. In 23 AD, the [[Lulin rebels|rebeldes de lulin]] acclaimed Liu Xuan, a descendant of the imperial family, as emperor, with the reign name Gengshi.",
        { h: "The road to Kunyang" },
        { timeline: [
          ["9 AD", "Wang Mang takes the throne from the Han and founds the Xin dynasty."],
          ["17 AD", "Peasant revolts begin. The Lulin rebels establish themselves in the hills."],
          ["Early 23 AD", "Liu Xuan is proclaimed Emperor Gengshi. The rebels defeat some of Wang Mang's troops."],
          ["Mid 23 AD", "Wang Mang sends Wang Yi and Wang Xun with a great army from Luoyang to crush the restored Han."]
        ]},
        "Wang Mang was furious at the defeats and decided to cut the revolt down before it grew. The rebels were divided: one force was led by Liu Yan, and another by Wang Feng, Wang Chang and Liu Xiu, who had taken three cities, Kunyang, Dingling and Yanxian."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Liu Xiu" },
        "A distant descendant of the Han family, he had grown up as a farmer and studied in the capital. He joined the revolt together with his brother, Liu Yan. At Kunyang he was one of the younger commanders, and it was he who persuaded the older ones to stay and fight instead of scattering. Two years later, in 25 AD, he became Emperor Guangwu and restored the Han dynasty.",
        { h: "Wang Yi and Wang Xun" },
        "They were Wang Mang's generals. Wang Yi, a relative of the emperor, commanded the army; Wang Xun was second. The accounts describe Wang Yi as arrogant: the words the chronicles give him are that, with an army of a million, everything he met would be destroyed, and that he would massacre the city, advance through the blood and dance in front of everyone.",
        { h: "Wang Feng and Wang Chang" },
        "They were the rebel chiefs who commanded the garrison. At first they wanted to leave Kunyang, scatter the men and look after their own survival. Liu Xiu persuaded them that a scattered army would be hunted down piece by piece."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces, and a warning" },
        "The numbers at Kunyang are one of the most famous problems in Chinese history. The [[Book of Han|livro de han]] says Wang Mang's army had 420,000 armored soldiers, out of a total he called 'a million'. The [[Zizhi Tongjian|zizhi tongjian]] says 430,000. Sources closer to the events give much smaller figures: from 30,000 (the philosopher Wang Chong) to 50,000 or 60,000 (the Dongguan Hanji chronicle). The [[Book of the Later Han|livro dos han posteriores]] repeats the total of 420,000, but says only about 100,000 reached the walls. Historians consider 420,000 unlikely: the army was already on the march two months after the order, too little time to gather so many people. The larger numbers may include porters and conscripted laborers, according to some historians.",
        { note: "The Xin numbers are chronicle numbers, and everything suggests they are exaggerated. On the rebel side, the city had about 9,000 defenders, and Liu Xiu came back with about 10,000." },
        "The Book of the Later Han adds details that look more like legend than fact: Wang Mang is said to have included in the army a giant named Ju Wuba, about 2.3 meters tall, and herds of tigers, leopards, rhinoceroses and elephants, 'to add to the show of force'. This is the kind of detail to read with reserve: the Book of the Later Han records it, but it sounds more like war propaganda than a field report.",
        { h: "The terrain" },
        "Kunyang was a small walled city, in the Yingchuan region, south of Luoyang, with a river to the west. It lay in the path of Wang Mang's army, which was coming down from Luoyang toward the south.",
        { h: "A decision in a room" },
        "When the Xin army came near, the rebels in Kunyang, some 9,000, panicked. They wanted to scatter toward the south. Liu Xiu answered that if they stayed together they had a chance, and that if they dispersed they would be hunted down. He promised to bring reinforcements from outside to attack the enemy from behind. The others agreed.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, Liu Xiu left Kunyang at night with thirteen horsemen to find troops in the neighboring cities of Dingling and Yanxian. The Xin army arrived from the north and besieged Kunyang.",
        "Second, the siege tightened. The attackers used siege towers and dug tunnels under the walls, and the defenders held.",
        "Third, Liu Xiu came back with about 10,000 soldiers, foot and mounted. Xin morale fell, and the defenders' rose.",
        "Fourth, Liu Xiu took about a thousand men to the front and attacked several times. According to the chronicles, he killed more than a thousand of Wang Mang's soldiers.",
        "Fifth, and decisive: with 3,000 volunteers, he went around, crossed a river west of the city and struck Wang Yi's headquarters.",
        "Sixth, Wang Yi ordered his camps to stay put and move only on his order. He sent Wang Xun with about 10,000 men against the rebel spearhead. The other Xin commanders hesitated, and Wang Xun was left without support.",
        "Seventh, Wang Xun's line fell into disorder. Liu Xiu seized the moment and killed him. The Kunyang garrison saw what was happening and came out of the city to attack.",
        "Eighth, the Xin army gave way. The soldiers trampled each other. A storm with strong winds, so violent that, according to the text, they tore off roof tiles, made the river rise, and more than 10,000 men are said to have drowned trying to cross."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Wang Yi returned to Luoyang with a few thousand elite men. The chroniclers speak of tens of thousands dead, a number as uncertain as the earlier ones. Within a few weeks the news spread, and the empire came apart: governors were killed, and many regions began to declare themselves part of the new Han dynasty.",
        "In October 23 AD, rebels entered Chang'an, and Wang Mang was killed. The Xin dynasty had lasted 14 years.",
        { h: "Why it matters" },
        "It was the end of Wang Mang's power and the beginning of the Han restoration. The victory gave Liu Xiu fame and followers, and two years later he founded the Later Han, a dynasty that lasted almost two centuries. In the Chinese tradition, Kunyang is one of the most cited examples of a small side beating a larger one.",
        { h: "Curiosities and controversies" },
        { note: "The omen: according to the Book of the Later Han, on the night at Kunyang a shooting star fell into the Xin camp, and by day a cloud 'like a collapsing mountain' came over the camp and dissolved a hand's breadth above the ground, and the soldiers were terrified. It is the classic way for chroniclers to say that Heaven had already abandoned Wang Mang. It should be treated as legend." },
        { note: "The dates: the Book of the Later Han records the encounter on the first day of the sixth month of 23 AD, and modern conversions put it at 7 July in the Julian calendar. Other sources give the first day as 1 June. The exact date depends on the calendar used." },
        { note: "The sources: the Book of the Later Han was written in the 5th century, almost 400 years later, and the Dongguan Hanji chronicle was compiled by the court of the dynasty Liu Xiu himself founded. It is history told by the winning side, and it should be read with caution." }
      ]}
    ]
  },

  ngasaunggyan: {
    war: "First Mongol invasion of Burma (1277–1287)",
    hook: "The Mongol horses ran from the elephants, until the riders dismounted and began to shoot.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1271, Kublai Khan founded the [[Yuan]] dynasty and began demanding that his neighbors to the south recognize his power. Among them was the [[Kingdom of Pagan|reino de pagan]], the greatest kingdom of Burma, with its capital at the city of Pagan and thousands of temples. King Narathihapate refused to pay [[tribute|tributo]].",
        "Tradition says the king had Mongol envoys killed; a modern version speaks of envoys killed by bandits on the road, and the sources disagree. What seems firm is the clash on the Yunnan border, which the Mongols had conquered in 1253 and turned into a base for going farther south.",
        { h: "The road to the battle" },
        { timeline: [
          ["1253", "The Mongols conquer the kingdom of Dali and control the [[province of Yunnan|província de yunnan]]."],
          ["1271", "Narathihapate refuses the tribute demanded by Kublai Khan."],
          ["1277", "A Pagan army attacks the Yunnan border. The Mongols respond and win at Ngasaunggyan."],
          ["1283", "The Mongols return and win at Bhamo."],
          ["1287", "Pagan falls. The kingdom breaks up."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Narathihapate" },
        "King of Pagan since 1256. The Burmese chronicles paint him as cowardly and incompetent, and tradition calls him 'the king who ran from the Chinese'. There is no proof that he commanded at Ngasaunggyan; Pagan's commander is not named with certainty.",
        { h: "Qutuq (Khudu)" },
        "A Mongol general in the Yunnan region. The name appears with different spellings: Marco Polo calls him Huthukh, and modern works use Khudu. According to the accounts, he was the one who ordered the horsemen to dismount. In some versions he was wounded, and in others he is said to have died, and the sources do not settle this."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces, and a warning" },
        "There are no firm numbers. The [[Yuan chronicle|crônica yuan]] says 700 Mongols defeated a Burmese army of 40,000 to 50,000 men, with 10,000 horses and 800 elephants, and that only one Mongol died, while trying to catch an elephant. Marco Polo, who heard the story from officers who took part, speaks of 12,000 mounted archers against 60,000 Burmese and 2,000 elephants, each with a wooden tower holding 12 to 16 fighters.",
        { note: "The numbers come from the victors' sources, and nobody knows which is closer. Burma left no chronicle of this battle: the only record on the Burmese side is an inscription from 1278 that mentions the defeat at Ngasaunggyan. We treat everything as an estimate." },
        { h: "The terrain" },
        "The site is disputed. Polo implies the Vochang valley, in the Baoshan region of China. The historian Harvey argues that the Pagan army was stopped earlier, at Ngasaunggyan (Kanngai, today Yingjiang), some 110 km to the southwest. The wood nearby, where the Mongols tied their horses, appears in Polo's account.",
        { h: "The battle" },
        "The horses of the [[Mongol archers|arqueiro a cavalo]] were not used to [[elephants|elefantes de guerra]]. When the Pagan army advanced with the animals, the Mongol and Turkic cavalry took fright and nearly broke up.",
        "Qutuq, according to Marco Polo, ordered the men to dismount, tie their horses to trees and shoot the elephants from the wood. According to the account, arrows could hardly kill animals so large, but the pain drove them mad. They fled into the wood, crushing the wooden towers against the trees and trampling their own infantry.",
        "With the enemy in disorder, the Mongols remounted and attacked. Pagan's infantry, largely unarmored levies, withstood several charges but was finally broken. A modern narrative says the Mongols did not pursue far and withdrew to Yunnan, with heavy losses and the commander wounded; this part has no clear early source.",
        { note: "This sequence (dismount, shoot the elephants, remount) comes from Marco Polo, who was not there: according to Harvey, he 'doubtless heard the tale' from officers. Polo also compresses ten years of war into one episode and errs on places and numbers, but the overall picture is considered probably correct." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Mongol victory. Pagan rebuilt and garrisoned the border forts in 1278, but the control was short-lived.",
        { h: "Why it matters" },
        "It is the first of the three great battles of the first invasion, along with Bhamo in 1283 and the fall of Pagan in 1287. The king fled the capital, the nobles submitted, and the kingdom that had dominated Burma for over two hundred years broke up into smaller principalities.",
        { h: "Curiosities and controversies" },
        { note: "How to classify it: some call the episode a tactical Yuan victory and a strategic draw, because the Mongols could not occupy Burma at once. The historian Haw accepts Polo's account and finds the Yuan chronicle's account, 700 against 40,000, far-fetched." },
        { note: "What stayed in memory: frightened elephants trampling their own army, an image that Marco Polo carried to Europe. The Burmese chronicles hardly mention this border war." }
      ]}
    ]
  },

  naungyo: {
    war: "Toungoo–Hanthawaddy War (1534–1541)",
    hook: "A young general crossed a river on rafts, destroyed the rafts and attacked a much larger army.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "When the kingdom of Pagan collapsed in the 13th century, Burma split into several states. In 1527, the kingdom of Ava fell to a confederation of Shan princes, and the little [[kingdom of Toungoo|reino de toungoo]], in the center of the country and formerly a vassal of Ava, was left surrounded by larger neighbors.",
        "King Tabinshwehti, who was in his twenties, chose as his target the [[kingdom of Hanthawaddy|reino de hanthawaddy]], in the south: it was the richest in the region, with access to the sea, and its king, Takayutpi, was known as weak. From the end of 1534, Toungoo attacked every dry season. Pegu, the capital, held out for about three years.",
        { h: "The road to Naungyo" },
        { timeline: [
          ["1534", "Toungoo's yearly attacks on Hanthawaddy begin."],
          ["Around 1537", "A Toungoo ruse leads King Takayutpi to have two loyal ministers killed."],
          ["Late 1538", "Toungoo invades again. Takayutpi flees from Pegu to Prome, and Toungoo takes the capital without a fight."],
          ["November or December 1538", "Toungoo catches up with the retreating Hanthawaddy army. This is the battle of Naungyo."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Kyawhtin Nawrahta, the future Bayinnaung" },
        "A trusted commander of King Tabinshwehti, he was still in his twenties. The name by which history knows him, Bayinnaung, means 'the king's elder brother', and he only received it after this battle. Years later he would be the greatest conqueror in Southeast Asia: he took the Shan states, Lan Na, Lan Xang and, in 1569, Ayutthaya.",
        { h: "Binnya Dala and Minye Aung Naing" },
        "They were Hanthawaddy's main generals. They had Portuguese and Indian mercenaries with firearms, an advantage Toungoo did not have. Even so, they were in retreat, with low morale.",
        { h: "Tabinshwehti" },
        "The king of Toungoo had gone upriver with the fleet, toward Prome. He sent Bayinnaung a message not to fight and to wait for the main army."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces, and a warning" },
        "The [[Hmannan chronicle|crônica hmannan]] says Hanthawaddy had 80,000 men, 800 horses and 200 elephants, and that Toungoo had 10,000 men, 500 horses and 50 elephants. The historian G. E. Harvey, in 1925, estimated about 8,000 against about 1,000. Historians consider the chronicle numbers exaggerated by about ten times. The numbers for the attack columns, which add up to a thousand men, are closer to Harvey's estimate.",
        { note: "The numbers and the dialogues at Naungyo come from the Hmannan chronicle, written three centuries later, and may have been embellished. The exact site is also unknown: a team led by Than Tun suggested in 1982 the area of the Panmawaddy River, in Einme township, but it is only a hypothesis." },
        { h: "The decision" },
        "Hanthawaddy split its army: five divisions went overland and King Takayutpi went with the rest in about 700 boats. Bayinnaung pursued overland, with a smaller force, and found the larger army at Naungyo, across a river. The scouts reported that the enemy was far superior, and the commanders advised against attacking. Bayinnaung judged the enemy discouraged and his own troops better disciplined, and decided to attack.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, the two forces stood face to face, separated by the river. Hanthawaddy had taken all the boats.",
        "Second, Bayinnaung had [[rafts|balsa]] built and began the crossing. According to the chronicle, an order came from Tabinshwehti not to fight and to wait. Bayinnaung is said to have replied that the enemy was already beaten.",
        "Third, after the crossing, he ordered the rafts destroyed: no one could go back. It is the image that became famous in Burma.",
        "Fourth, he formed three columns. On the left, Bayathingyan; on the right, Taw Maing Ye; in the center, Bayinnaung himself, on an elephant called Swe La Man. The chronicle's numbers for the three columns add up to a thousand men, 500 horses and 50 elephants.",
        "Fifth, the three columns advanced together against the Hanthawaddy army.",
        "Sixth, Bayinnaung charged at Binnya Dala. The general lost heart and fled on horseback. Minye Aung Naing was killed on his elephant.",
        "Seventh, without command, the Hanthawaddy army split into four disordered camps.",
        "Eighth, soldiers fled or surrendered in droves. Tabinshwehti arrived the next day and found the victory already won."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "A decisive Toungoo victory, the first over a large Hanthawaddy army. Only remnants of the enemy army reached Prome. The chronicles give no death tolls; only the death of Minye Aung Naing is recorded.",
        "A few weeks later, Toungoo's attack on Prome failed, and the troops withdrew. Takayutpi asked the Shans and Prome for help, and both refused. He died of illness a few months later, looking for war elephants. Many Mon lords submitted. Toungoo took Martaban in 1541 and Prome in 1542.",
        { h: "Why it matters" },
        "Tabinshwehti gave Kyawhtin Nawrahta the title Bayinnaung and the Hlaing region as an [[appanage|apanágio]]. From then on he was the king's right hand and, later, the conqueror of a good part of the mainland. Harvey called Naungyo 'the first characteristic touch of the great Bayinnaung'. The battle is part of Burma's school textbooks, and 'do as Bayinnaung did, who destroyed the rafts' is an expression used for a situation where one can only win.",
        { h: "Curiosities and controversies" },
        { note: "The story of the burned or destroyed rafts is the most famous image of Naungyo, but it comes from the chronicles and cannot be confirmed by other sources." }
      ]}
    ]
  },

  nongsarai: {
    war: "Burmese–Siamese War (1584–1593)",
    hook: "A prince on an elephant faced the heir to the Burmese throne, and Thailand and Burma still disagree about how it went.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1569, the Burmese king Bayinnaung took the city of Ayutthaya, capital of the [[kingdom of Ayutthaya|reino de ayutthaya]], and made it a [[vassal|vassalo]] of Burma. The young prince Naresuan was taken to the Burmese court as a [[hostage|refém]]. He returned to Ayutthaya and, around 1584, began to act as an independent ruler.",
        "Bayinnaung died in 1581, and his son Nanda Bayin faced revolts in several places. Naresuan refused to remain a vassal and became king of Ayutthaya in 1590. Nanda Bayin then sent his son, Crown Prince Mingyi Swa, to punish him.",
        { h: "The road to the battle" },
        { timeline: [
          ["1569", "Ayutthaya falls and becomes a vassal of Burma. Naresuan is taken as a hostage."],
          ["1584", "Naresuan refuses to obey. The Burmese–Siamese war begins."],
          ["1590", "Naresuan becomes king of Ayutthaya."],
          ["January 1593", "Mingyi Swa's army arrives near Ayutthaya. This is the battle of Nong Sarai."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Naresuan" },
        "The national hero of Thailand. He had lived as a hostage at the enemy court. The Thai chronicles, especially those written after the fall of Ayutthaya in 1767, glorify him more than the early texts do.",
        { h: "Mingyi Swa" },
        "Crown prince of Burma, son of Nanda Bayin. In the Thai version, he is compared to Mara, the demon who tempted the Buddha. He died in the battle.",
        { h: "Ekathotsarot and Mangcacharo" },
        "Ekathotsarot was Naresuan's brother and fought on Ayutthaya's side. Mangcacharo was another Burmese commander. According to the Thai version, the two also faced each other in a duel, and Ekathotsarot won."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces, and a warning" },
        "There are no reliable numbers. The Thai chronicles speak of hundreds of thousands of men on each side. The Portuguese Antonio Bocarro, in the early 17th century, gives 500 soldiers on elephants, 10,000 horsemen and 50,000 on foot for the Siamese side, but he is a single foreign source, and we treat the numbers with caution.",
        { h: "The terrain" },
        "The site is disputed. Thai tradition places it at Suphanburi, where the Don Chedi Monument, opened in 1959, stands, and another monument at Kanchanaburi, from 2003, claims the same battle. Some scholars have placed it near Ayutthaya. The documents that might settle it were destroyed in the sack of Ayutthaya in 1767.",
        { h: "The date" },
        "The [[Luang Prasoet chronicle|crônica de luang prasoet]] gives the second day of the second lunar month of the year 954 of the Chula Sakarat calendar, which modern conversions give as 25 January 1593. Thai scholars, on the basis of calendar calculations, proposed 18 January, and that was the date officially adopted in 2006 for Royal Army Day.",
        { h: "The elephant duel, in several versions" },
        "All the versions agree that Naresuan and Mingyi Swa were on war elephants, that Mingyi Swa died and that the Burmese army withdrew. The rest changes with the source.",
        "The best-known Thai version, from the royal chronicles, says a formal duel was agreed. Naresuan's elephant charged Mingyi Swa's, and Naresuan struck him with a blow to the chest. Naresuan's [[mahout|cornaca]] was killed by a gunshot. Afterward, Naresuan accused 15 officers of having abandoned him.",
        "The Dutchman Van Vliet, in 1640, says Naresuan's elephant was frightened at first and then charged; Naresuan hit the prince's head with the goad and wounded him with the lance. The Luang Prasoet chronicle, from 1681, says Naresuan killed Mingyi Swa but was wounded in the right arm.",
        "On the Burmese side, the Yodaya Yazawin chronicle says there was an agreed duel, after inconclusive fighting: the prince's elephant was gored at the base of the tusk and fell, and Naresuan killed him. The [[Hmannan chronicle|crônica hmannan]] denies the formal duel: a Burmese general unbandaged his [[elephant in musth|elefante em musth]], which wounded the prince's elephant, and then Naresuan shot him down.",
        "Other sources: the Portuguese Bocarro says Naresuan proposed the duel and Mingyi Swa accepted without consulting his commanders, and that Portuguese mercenaries shot the prince at a signal from Naresuan. The accounts of Pimenta (1602) and Purchas (1613) speak of a lead bullet. A Persian diplomat who visited Ayutthaya in 1685 says Naresuan hid a firearm in the elephant's goad. The historian B. J. Terwiel (2013) thinks there was no formal duel: Naresuan's elephant would have come too close to Mingyi Swa's, Ekathotsarot would have intervened, and a shot would have killed the prince.",
        { note: "Who was right? Nobody knows. The Thai chronicles were written or rewritten after the sack of 1767. Terwiel notes that the two sources describe two duels at the same time and a lot of bloodshed after them, which does not fit the logic of elephant duels, which usually decided the battle." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Burmese army went back to Burma and the campaign ended. Naresuan sent forces to take Tavoy and Tenasserim. The chronicles say he punished the commanders he blamed for abandoning him.",
        "The account of Jacques de Coutre describes a funeral for Naresuan's elephant, which is said to have been embalmed and cremated, with its attendants killed to serve it in the next world. The elephant's title of Chao Phraya, the same as a high nobleman's, may be unique among animals.",
        { h: "Why it matters" },
        "The battle ended the war of 1584 to 1593 and reaffirmed Ayutthaya's independence. In Thailand, the duel is one of the most depicted scenes in history: paintings, murals, films and puppet theater. 18 January is Royal Army Day.",
        { h: "Curiosities and controversies" },
        { note: "In Thailand, questioning the authenticity of the duel has led to lèse-majesté charges: the intellectual Sulak Sivaraksa was charged for it in 2014." },
        { note: "The sources: the surviving Thai chronicles date from 1681 onward (Luang Prasoet). The accounts closest to the events are by foreigners, such as Pimenta (1602) and Bocarro (early 17th century), who heard about the battle. The Burmese chronicles are from the 19th century." }
      ]}
    ]
  },

  maymyo: {
    war: "Sino-Burmese War (1765–1769)",
    hook: "The Manchu army that seemed invincible was surrounded in a forest, far from home, and nearly vanished.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 18th century, the [[Qing]] Empire, of the [[Manchus|manchus]], was the largest state in Asia. Across the Yunnan border lay the Burma of the [[Konbaung dynasty|dinastia konbaung]], which was growing fast and had just taken the kingdom of Ayutthaya, in April 1767. The two empires contested the [[Shan princes|sawbwa xan]] of the border and the trade of the region.",
        "Between 1765 and 1769, the Qianlong Emperor sent four invasions. The first two, made with border troops from Yunnan, failed. For the third, he sent the best-trained soldiers of the empire, largely from the Manchu [[Eight Banners|oito estandartes]].",
        { h: "The road to Maymyo" },
        { timeline: [
          ["November 1767", "General Ming Rui invades Burma with about 50,000 men (another count says 70,000)."],
          ["December 1767", "The Qing defeat the Burmese at the Goteik gorge."],
          ["Early 1768", "Ming Rui comes near Ava, but the northern army goes back to Yunnan and the Burmese troops return from Siam."],
          ["March 1768", "With no supplies, Ming Rui retreats and is caught near Maymyo."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Ming Rui" },
        "A Manchu general sent by Qianlong. The emperor expected an easy victory. He had beaten the Burmese at the Goteik gorge, but advanced deeper than his supply line could sustain.",
        { h: "Maha Thiha Thura" },
        "A veteran of the war against Siam. He was given overall command and took the bulk of the army through the mountains to get behind the Qing. Later, in 1769, he imposed the peace terms on the Chinese generals, without telling the king.",
        { h: "Maha Sithu" },
        "He commanded the smaller force, which met the Qing head-on and then wore them down. Instead of retreating when pushed back, he pulled archers and musketeers into the woods."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces, and a warning" },
        "The numbers do not fit together. For the whole invasion, the counts give about 50,000 men; for the main army, 15,000 or 30,000, depending on the passage. In the battle, the most cited version gives 30,000 to the Qing and 10,000 infantry and 2,000 cavalry to the Burmese. The Qing losses added up (20,000 killed, wounded or executed, 5,000 who escaped and 2,500 prisoners) also do not match the 30,000.",
        { note: "The detailed account comes from modern works (Harvey, 1925; Hall, 1960; Dai Yingcong, 2004) that use Burmese and Chinese sources. Burmese losses are described only as 'small', with no figure." },
        { h: "The terrain" },
        "A region of woods and hills around Maymyo, some 80 km northeast of Ava. Heat, dense brush and disease weighed against an army that had come from the north.",
        { h: "The siege in a forest" },
        "The Qing [[supply line|linha de suprimento]], which ran from Hsenwi to near Ava, was attacked by guerrillas and then cut when Burmese veterans retook Hsenwi. With hunger and disease, Ming Rui gave up on taking Ava and began to retreat toward China, in March 1768.",
        "Maha Thiha Thura, with about 10,000 infantry and 2,000 cavalry, followed him. He divided his forces: Maha Sithu, with the smaller one, met the Qing head-on; he himself took the larger one through the mountains, to get behind them.",
        "The Qing, in greater numbers, pushed Maha Sithu back. Instead of falling back farther, he placed archers and musketeers in the woods, who attacked the flanks and ambushed those who went out to look for food.",
        "While Ming Rui dealt with Maha Sithu, Maha Thiha Thura reached the rear and closed the ring. For three days, the Burmese wore down the Qing army, larger but hungry and sick.",
        "The Qing tried to break out on Maha Sithu's side, which held the line. Trapped between the infantry, the archers and Maha Thiha Thura's charge from behind, they were destroyed. About 2,500 were captured, and some escaped; the counts vary.",
        { note: "Why there is no diagram: the sources give the general sequence (frontal attack, harassment in the woods, encirclement from the rear), but do not say where the units stood or what the terrain was like. Drawing positions would be inventing." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Almost the whole army was killed, wounded or executed. The most cited version says that Ming Rui, wounded, cut off his [[Manchu queue|trança manchu]], sent it to the emperor as proof of loyalty and hanged himself; the court announced his death on 14 April 1768. Other sources give him as killed in action, and modern works carry both versions without settling it.",
        "The emperor had expected an easy victory and was shocked by the defeat. A fourth invasion, under the grand councilor Fuheng, in 1769, also failed on the frontier.",
        { h: "Why it matters" },
        "Maha Thiha Thura knew that another annihilation would only harden China, and that Burmese losses, small in absolute numbers, weighed on a smaller population. He forced the Qing generals to accept an agreement, without telling the king, and oversaw the withdrawal to Yunnan. The agreement is known as the Convention of Kaungton, of December 1769; the date varies between 13 and 22 December, depending on the source. The Qianlong Emperor rejected the reading the generals made of it.",
        "For the Burmese, it was one of the great victories of their history. For the Qing, it was a heavy disaster in the frontier campaigns of the 18th century.",
        { h: "Curiosities and controversies" },
        { note: "The most vivid phrase about the battle, by Harvey, says the Burmese soldiers could hardly grip their swords, with so much enemy blood on the hilts. It may be rhetoric rather than a document." },
        { note: "In Chinese sources, the battle appears under the name Xiaomengyu. The Chinese side's account is harder to compare with the Burmese one and depends on modern analyses, such as that of Dai Yingcong." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  naungyo: {
    terrain: [
      { t: "sea", x: -8, y: 29, w: 116, h: 11, l: "River (exact site unknown)" },
      { t: "note", x: 90, y: 6, l: "North ↑" }
    ],
    units: [
      { id: "tL", s: "a", k: "cav", w: 10, h: 5, l: "Left wing (Bayathingyan)" },
      { id: "tC", s: "a", k: "ele", w: 12, h: 5, l: "Bayinnaung, on the elephant Swe La Man" },
      { id: "tR", s: "a", k: "cav", w: 10, h: 5, l: "Right wing (Taw Maing Ye)" },
      { id: "tRaft", s: "a", k: "ship", w: 14, h: 3, l: "Improvised rafts" },
      { id: "hMain", s: "b", k: "inf", w: 26, h: 6, l: "Binnya Dala's army" },
      { id: "hEle", s: "b", k: "ele", w: 12, h: 5, l: "Minye Aung Naing, on his elephant" },
      { id: "hL", s: "b", k: "inf", w: 16, h: 5, l: "Hanthawaddy division" },
      { id: "hR", s: "b", k: "inf", w: 16, h: 5, l: "Hanthawaddy division" }
    ],
    steps: [
      { t: "Hanthawaddy waits on the far side of the river, with a larger army and all the boats. Toungoo's vanguard stops on the south bank. Scouts warn that the enemy is far superior.",
        p: { tL: [38, 62], tC: [50, 62], tR: [62, 62], tRaft: [50, 69], hMain: [50, 17], hEle: [50, 9], hL: [26, 14], hR: [74, 14] } },
      { t: "Bayinnaung decides to attack despite his officers' advice. He has rafts built and puts them in the water.",
        p: { tRaft: [50, 47], tL: [38, 56], tC: [50, 56], tR: [62, 56] } },
      { t: "An order arrives from King Tabinshwehti not to fight. According to the chronicle, Bayinnaung replies that the enemy is already beaten, and the crossing continues.",
        p: { tRaft: [50, 34], tL: [38, 48], tC: [50, 48], tR: [62, 48] } },
      { t: "The men reach the far bank. Bayinnaung orders the rafts destroyed: no one will be able to retreat.",
        p: { tL: [38, 26], tC: [50, 26], tR: [62, 26] }, x: ["tRaft"] },
      { t: "Three columns form: Bayathingyan on the left, Taw Maing Ye on the right and Bayinnaung in the center, on the elephant.",
        p: { tL: [26, 27], tC: [50, 27], tR: [74, 27] } },
      { t: "The columns advance together against the Hanthawaddy army.",
        p: { tL: [32, 21], tC: [50, 23], tR: [68, 21] } },
      { t: "Bayinnaung charges at Binnya Dala, who loses heart and flees on horseback. Minye Aung Naing dies on his elephant.",
        p: { tL: [34, 18], tC: [50, 17], tR: [66, 18], hMain: [50, 8] }, x: ["hEle"] },
      { t: "Without command, the Hanthawaddy army breaks into disordered camps, four according to the chronicle.",
        p: { hMain: [48, 5], hL: [20, 9], hR: [80, 9], tL: [32, 13], tC: [50, 13], tR: [68, 13] } },
      { t: "Soldiers flee or surrender in droves. Tabinshwehti arrives the next day and finds the victory already won.",
        p: { hMain: [48, 2], hL: [12, 5], hR: [88, 5] }, x: ["hMain", "hL", "hR"] }
    ]
  },

  kunyang: {
    terrain: [
      { t: "sea", x: 8, y: -2, w: 8, h: 76, l: "River to the west" },
      { t: "note", x: 90, y: 6, l: "North ↑" },
      { t: "note", x: 86, y: 72, l: "Dingling and Yanxian (reinforcements)" }
    ],
    units: [
      { id: "lCity", s: "a", k: "camp", w: 14, h: 8, l: "Kunyang (≈ 9,000 defenders)" },
      { id: "lRider", s: "a", k: "cav", w: 5, h: 3, l: "Liu Xiu and 13 horsemen" },
      { id: "lRelief", s: "a", k: "inf", w: 12, h: 4, l: "Relief force (≈ 10,000)" },
      { id: "lVan", s: "a", k: "cav", w: 9, h: 4, l: "Vanguard (≈ 1,000)" },
      { id: "lElite", s: "a", k: "inf", w: 10, h: 3, l: "Liu Xiu and 3,000 volunteers" },
      { id: "lGar", s: "a", k: "inf", w: 9, h: 3, l: "Garrison" },
      { id: "xN", s: "b", k: "inf", w: 42, h: 6, l: "Siege: north side" },
      { id: "xS", s: "b", k: "inf", w: 42, h: 5, l: "Siege: south side" },
      { id: "xE", s: "b", k: "inf", w: 6, h: 20, l: "Siege: east side" },
      { id: "xHQ", s: "b", k: "camp", w: 14, h: 6, l: "Wang Yi's headquarters" },
      { id: "xWang", s: "b", k: "inf", w: 14, h: 5, l: "Wang Xun (≈ 10,000)" }
    ],
    steps: [
      { t: "The Xin army arrives from the north and besieges Kunyang. Inside, about 9,000 rebels argue over whether to flee or resist.",
        p: { lCity: [50, 38], lRider: [50, 43], lGar: [50, 35], xN: [50, 24], xS: [50, 54], xE: [72, 39], xHQ: [30, 18], xWang: [66, 14], lRelief: [88, 66], lVan: [74, 66], lElite: [60, 66] } },
      { t: "Liu Xiu persuades the chiefs to stay. At night, he leaves the city with thirteen horsemen to find troops at Dingling and Yanxian.",
        p: { lRider: [84, 60] } },
      { t: "The siege tightens, with towers and tunnels under the walls. Wang Yi announces he will massacre the city. The defenders hold.",
        p: { xN: [50, 28], xS: [50, 50], xE: [68, 39] } },
      { t: "Liu Xiu comes back with about 10,000 men. Xin morale falls, and the defenders' rises.",
        p: { lRelief: [66, 62], lVan: [58, 60], lElite: [48, 64] }, x: ["lRider"] },
      { t: "Liu Xiu advances with about a thousand men and attacks several times. According to the chronicles, he kills more than a thousand enemies.",
        p: { lVan: [58, 56], lRelief: [66, 63] } },
      { t: "With 3,000 volunteers, Liu Xiu crosses the river west of the city and strikes Wang Yi's headquarters.",
        p: { lElite: [22, 26] } },
      { t: "Wang Yi orders the camps to stay put and sends Wang Xun with about 10,000 men. The other Xin commanders hesitate to support him.",
        p: { lElite: [28, 24], xWang: [44, 24] } },
      { t: "Wang Xun's line falls into disorder. Liu Xiu seizes the momentum and kills him.",
        p: { lElite: [36, 24], xWang: [46, 24] }, x: ["xWang"] },
      { t: "The garrison sallies out of Kunyang and attacks. The Xin army collapses, and a storm makes the river rise: many fugitives drown. Wang Yi escapes with a few thousand.",
        p: { lGar: [50, 30], xN: [50, 12], xS: [50, 62], xE: [90, 39], xHQ: [30, 8] }, x: ["xN", "xS", "xE", "xHQ"] }
    ]
  }
});
