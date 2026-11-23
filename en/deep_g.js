// In-depth battles, batch g: guadalete, tours, talas, suiyang, hafrsfjord, lechfeld.
// Checked against the English and Portuguese Wikipedia articles, the Norwegian Wikipedia article on Hafrsfjord,
// the Heimskringla text and the sources those articles cite (Chronicle of 754, Widukind, Hornklofi, Tang histories).

Object.assign(GLOSSARY, {
  "visigodos": "A Germanic people who ruled most of the Iberian Peninsula, from Toledo, after the fall of the Western Roman Empire. They were Christians, and their nobles were forever fighting over the throne.",
  "omíadas": "The dynasty of caliphs who ruled the Muslim world from Damascus, from 661 to 750. In their time Arab rule stretched from the Atlantic to the Indus valley.",
  "califa": "The political and religious leader of the Muslim community, regarded as the successor of the Prophet Muhammad.",
  "berberes": "Native peoples of North Africa, conquered by the Arabs in the late 7th century. Many converted to Islam and made up most of the troops that invaded the Iberian Peninsula.",
  "mozárabe": "A Christian living under Muslim rule in the Iberian Peninsula. The Chronicle of 754, our best source on the invasion, was written by a Mozarab.",
  "francos": "A Germanic people who dominated Gaul (modern France) and part of Germany. Their kingdom was the foundation of Charlemagne's future empire.",
  "mordomo do palácio": "The highest office at the court of the Frankish kings. In the 8th century the kings were weak figures, and the mayors, such as Charles Martel, ruled in fact.",
  "muralha de escudos": "A formation in which soldiers stand side by side with their shields touching, forming a continuous wall of wood and iron.",
  "abássidas": "The dynasty of caliphs who overthrew the Umayyads in 750 and ruled from Baghdad. The name comes from Abbas, an uncle of the Prophet Muhammad.",
  "carlucos": "A confederation of Central Asian Turkic tribes, known for its smiths and iron weapons. They served the Chinese, but at Talas ended up on the Abbasid side.",
  "jiedushi": "A military governor of a region of Tang China, with power over soldiers, taxes and administration. An Lushan himself was one.",
  "saga": "A prose narrative from medieval Iceland, written from the 12th century onward, about kings and families of the Norse world. It mixes history, oral tradition and invention.",
  "escaldo": "A Norse court poet who composed difficult verses in praise of kings. These verses were passed on by word of mouth and are usually older than the sagas.",
  "fiorde": "A narrow, deep arm of the sea between mountains, typical of Norway.",
  "drácar": "A Viking warship, long and shallow, with the prow decorated with an animal head. The word comes from 'dragon'.",
  "berserker": "A Norse warrior who, according to the sagas, fought in a frenzy, with little armor and without feeling pain. The 'ulfhednar' wore wolf skins.",
  "jarl": "A Norse title for a chief or noble, below the king. It gave rise to the English word earl.",
  "magiares": "A Hungarian-speaking people who reached the Danube basin around 895 and raided Europe from there for more than half a century. They are the ancestors of the Hungarians.",
  "harka": "The third title of the Hungarian principality, after the grand prince and the gyula. Whoever held it could command military campaigns.",
  "cota de malha": "A shirt of small interlinked iron rings that protected the body against cuts and arrows.",
  "sacro império": "The Holy Roman Empire, usually counted from the coronation of Otto I in 962 and lasting until 1806. It loosely brought together much of present-day Germany and Italy."
});

Object.assign(DEEP, {
  guadalete: {
    war: "Muslim conquest of the Iberian Peninsula (711–718)",
    hook: "In the summer of 711, a kingdom centuries old began to crumble, and for more than seven centuries the Iberian Peninsula remained, in large part, under Muslim rule.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "At the start of the 8th century, the Iberian Peninsula, then called Hispania, was ruled by the [[Visigoths|visigodos]] from Toledo. It was a Christian kingdom, but a fragile one: the throne passed from hand to hand through coups and rivalries between noble families. Across the Strait of Gibraltar, the empire of the [[caliphs|califa]] of the [[Umayyads|omíadas]] had just conquered all of North Africa. Around 705–706 the Muslims took Tangier and, probably from there, bands of [[Berbers|berberes]] began crossing the strait to plunder cities in the south of Hispania.",
        "The Muslim side was led by Musa ibn Nusayr, governor of the province of North Africa (Ifriqiya). The man he sent across the strait was Tariq ibn Ziyad, whom many modern historians believe to have been a freed Berber, a former servant of Musa, and who appears in the sources as governor of Tangier.",
        { h: "The Road to Guadalete" },
        { timeline: [
          ["705–706", "The Muslims take Tangier. Berber raids against the south of Hispania begin."],
          ["710–711", "Roderic seizes the throne after the death of King Wittiza, in a coup. The Chronicle of 754 says he invaded the kingdom 'tumultuously'."],
          ["Spring 711", "Tariq lands with his army near the rock that took his name, Jabal Tariq, 'the mountain of Tariq', later Gibraltar."],
          ["July 711", "Battle of Guadalete. The most cited date is 19 July; later Arab sources give 25 or 26."],
          ["712", "Musa crosses with reinforcements, which the sources estimate at between 12,000 and 18,000 men, and joins Tariq."],
          ["714", "Caliph al-Walid I summons both men back to Damascus."]
        ]},
        "One thing must be said right away: almost everything we know about this campaign comes from two sources of poor quality for the historian. The only contemporary one, the Chronicle of 754, was written by a [[Mozarab|mozárabe]], is reliable, but vague. The Arab accounts that give the details were written 150 years or more later, and medieval Christian chroniclers filled the story with legends. For that reason we will separate what is well supported from what is a story told to explain such a rapid fall."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Roderic, last Visigothic king" },
        "He was probably born after 687. Before the throne, he may have been duke of Baetica, the region of Seville. On coming to power he was contested: archaeology and coins show that, in the northeast, another king, Achila II, ruled at the same time, possibly a son of Wittiza. Roderic held the southwest and Toledo. The two never seem to have fought each other, probably because Roderic was too busy with the attacks coming from the south. The Chronicle of 754 calls him a usurper.",
        { h: "Tariq ibn Ziyad, c. 670 – c. 720" },
        "Of Berber origin, according to most modern historians, a subordinate of Musa. It was he who commanded the invasion and, according to the sources, took Toledo. He divided the army into four columns, and one of them, under Mughith al-Rumi, took Córdoba. As for his relationship with Musa, the sources disagree: some speak of envy, and al-Baladhuri says only that Musa sent a 'severe letter' and that the two were reconciled afterward.",
        { h: "Musa ibn Nusayr" },
        "Governor of the province and Tariq's chief, he had made reconnaissance trips and raids in 710, and the news of plunder and prisoners encouraged the invasion. He was probably not at the battle: the Chronicle of 754 says he crossed with a large army in 711 and stayed about fifteen months, but it is not clear whether he arrived before or after Guadalete. The late Arab sources say he came only after Tariq's success.",
        { h: "Those who may have betrayed" },
        "Late Christian accounts say that two groups helped the invaders: Count Julian, lord of Ceuta, who supposedly supplied ships to avenge his daughter, and the sons of King Wittiza, who supposedly abandoned Roderic in the battle. Historians are very suspicious of these stories. The Chronicle of 754 mentions not Julian but a Catholic Berber named Urban, who may be the real basis of the character. The sons of Wittiza are, for scholars such as Roger Collins, a later invention. The king's brother, Oppa, is historical and was found by Musa in Toledo, but his role in the battle is uncertain."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The numbers in the sources do not deserve trust. The Arab tradition says Tariq landed with 7,000 horsemen and asked for 5,000 more, which makes up to 12,000. Roderic is said to have had 100,000, a number historians consider absurdly high. The Chronicle of Alfonso III, from the late 9th century, even speaks of 187,000 Muslims. Among modern authors, David Levering Lewis estimates some 12,000 men for Tariq against about 33,000 Visigoths. Roger Collins thinks of much smaller numbers, a few thousand on each side, and believes the Visigothic army was probably not much larger than the invader.",
        { note: "The only point of agreement is that the numbers in the old sources are exaggerated. That is why we do not use a single number." },
        { h: "The Terrain" },
        "Nobody knows where the battle took place. The Arab sources place it near 'Shedunya', probably Medina Sidonia, beside a lake called Wadi Lakka, which may be the Guadalete river, the Barbate or the Janda region. The Chronicle of 754 speaks of the 'Transductine promontories'. Thomas Hodgkin, following a medieval chronicler, pointed to Jerez de la Frontera. Others propose the banks of the Guadarranque or of the Almodóvar river, in the province of Cádiz. The name 'Guadalete' stuck through tradition, not proof.",
        { h: "What Probably Happened" },
        "According to Lewis's reconstruction, the battle was preceded by about a week of skirmishing near the Janda. The Muslims attacked and withdrew quickly; the Visigoths maneuvered in mass, heavier. In the main battle, a wing of Visigothic cavalry, which had secretly agreed to abandon the king, stood still and opened a hole in the line.",
        "Through that hole rode Tariq's cavalry, the mujaffafa, about a third of the army, in light [[mail|cota de malha]] and turbans over metal helmets. The infantry came behind them. The Visigothic army fell apart, and the king died in the last hours.",
        "The Chronicle of 754 confirms only the essentials: some rivals of Roderic joined the army 'with falsehood' and out of 'ambition to rule', and Roderic lost the kingdom. Historians wonder whether these rivals planned to abandon him and were killed as well, because almost all died in the battle or in flight, or whether Roderic had killed them beforehand, weakening his own side. Nobody has the answer.",
        { note: "Tariq's famous speech, in which the sea is behind the soldiers and the enemy in front, appears only centuries later, in Ibn Khallikan (1274) and al-Maqqari (16th century). Scholars do not consider them his words. The story that he burned the ships to prevent retreat appears for the first time more than 400 years later, in al-Idrisi." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Muslim losses, according to Lewis, were about 3,000 men, a quarter of the force, while the Visigoths suffered far more, among them much of the nobility. Roderic died, although the Chronicle does not say where or how. Legends say he arrived in a chariot drawn by eight white mules and that his golden sandal was found in the Guadalete river. A 9th-century chronicler tells of a tombstone with his name in Egitania, today Idanha-a-Velha, in Portugal. None of this is reliable.",
        "Toledo, the capital, fell soon afterward. The metropolitan Sindered fled and spent the rest of his life exiled in Rome, and the Chronicle criticizes him for having been 'a hireling, and not a shepherd'. Musa arrived in 712 with reinforcements and, together, the two took Seville, defeated supporters of Roderic at Mérida and, in 713, advanced on Galicia, León, Astorga and Zaragoza. Within a few years two thirds of the Peninsula were under Muslim rule.",
        "Not everything was conquest by the sword. Under the Treaty of Tudmir (713), the Visigothic count Theodemir kept the government of the Murcia region and respect for the Christian religion, in exchange for a tribute. This agreement became a model for other cities. Only the small kingdom of Asturias and the Basque lands remained outside Muslim rule.",
        { h: "Why It Matters" },
        "It began Al-Andalus, which lasted until 1492, more than 780 years. Portuguese keeps many Arabic words from this coexistence, such as 'azeite' (olive oil), 'açúcar' (sugar), 'alface' (lettuce) and 'oxalá' (God willing).",
        { h: "Curiosities and Controversies" },
        { note: "The traditional explanation for the rapid fall, the 'decadence' of the Visigoths, is not accepted by specialists today. The more careful historians instead point out that the throne was already contested, with Roderic on one side and Achila on the other, and that the king was busy with the attacks from the south." },
        { note: "The legend of Florinda (also called La Cava), daughter of Count Julian, who supposedly was seduced or raped by Roderic, is late. The name Florinda was invented afterward. Julian appears in the Arab sources, but the story of revenge is not in the oldest accounts." },
        { note: "There are later traditions according to which Jews of the Peninsula fought alongside the Muslims. The Chronicle of 754 does not say this, and historians receive the account with caution." }
      ]}
    ]
  },

  tours: {
    war: "Clash between Franks and Umayyads in Gaul (719–759)",
    hook: "A battle that some call the salvation of Europe and others a raid that went wrong.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In 711, Umayyad armies crossed the Strait of Gibraltar and overthrew the Visigothic kingdom in a few years. The conquest did not stop at the Pyrenees. In 719 they took Septimania, a region in the south of Gaul, and in 720 they made Narbonne their base in Gaul. From there plundering raids set out to the north.",
        "On the other side stood the kingdom of the [[Franks|francos]], which in practice was no longer governed by the kings but by a [[mayor of the palace|mordomo do palácio]]. In the south of Gaul, Duke Odo of Aquitaine had become independent during the civil war of 715, and it was he who took the first blows.",
        { h: "The Road to Tours" },
        { timeline: [
          ["719–720", "The Umayyads take Septimania and make Narbonne their capital in Gaul."],
          ["721", "Odo lifts the Muslim siege of Toulouse. The enemy commander, al-Samh, dies of his wounds."],
          ["c. 730", "Odo, threatened by the Franks to the north, allies with the Berber chief Munuza and gives him his daughter in marriage."],
          ["731", "Munuza rebels against Córdoba. Abd al-Rahman crushes the revolt and then defeats Odo, at Bordeaux and on the Garonne river."],
          ["October 732", "Battle between Tours and Poitiers."],
          ["735–739", "Odo dies. The Umayyads resume the offensive and Charles campaigns in Septimania."],
          ["759", "Pepin the Short, Charles's son, takes Narbonne. It is the end of the Muslim presence in Gaul."]
        ]},
        "Odo, defeated, had nowhere to go. He asked his rival, Charles, for help, and the condition was to submit to Frankish authority. That is how two rivals ended up on the same side."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Charles Martel, about 45 years old" },
        "Born around 686–690, he was the son of Pepin of Herstal, the mayor who governed the Franks before him. When his father died, in 714, the widow Plectrude, who wanted her own grandson to inherit, imprisoned Charles in Cologne. He escaped, was acclaimed mayor of Austrasia before the end of 715 and, after defeating rivals at Amblève (716), Vinchy (717) and Soissons (718), became the de facto ruler of the Franks. The nickname 'Martel', the hammer, appears in later chronicles.",
        { h: "Abd al-Rahman al-Ghafiqi" },
        "Governor of al-Andalus, Muslim Spain. In 731, he defeated Munuza and Odo and plundered Bordeaux. In 732 he advanced to the Loire with an army that, according to the sources, had moved faster than its supply wagons and split into raiding parties. What he was after, according to one of the Frankish sources, was the abbey of Saint Martin of Tours, full of treasures.",
        { h: "Odo, duke of Aquitaine" },
        "After being defeated at Bordeaux and on the Garonne, he asked Charles for help and submitted to Frankish authority in order to get it. It was this request that brought Charles's army south."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The numbers are among the most disputed points. The Chronicle of 754 says the Austrasians, Charles's people, were more numerous. Many Western sources say the opposite: 30,000 Franks, fewer than half the Muslims. Modern historians give very different ranges: the Umayyads between 20,000 and 80,000 and the Franks between 15,000 and 30,000. Edward Schoenfeld points out that more than 50,000 Muslim soldiers would have been logistically impossible to feed so far from home. Victor Davis Hanson puts both sides at around 20,000 to 30,000.",
        "Charles's army was made up mostly of experienced infantry from Austrasia, with support from Franks of the Rhine and from Thuringians, Alemanni, Bavarians and Frisians. According to the sources, he had no heavy cavalry.",
        { h: "The Terrain" },
        "The encounter took place between Tours and Poitiers, near the junction of the Clain and Vienne rivers. The most cited site is Moussais-la-Bataille, and some sources point to Vouneuil-sur-Vienne. Charles chose high ground, with trees in front, which, according to the Arab sources, hindered the cavalry charges.",
        { h: "A Week of Waiting and One Day of Fighting" },
        "Charles surprised the Umayyads by appearing in front of them and preferred to wait. For about a week there were only skirmishes. Abd al-Rahman, who wanted to plunder Tours, had to get past the army waiting for him on the hill. On the seventh day, with winter approaching and impatience growing, he decided to attack.",
        "The Umayyad cavalry attacked several times during the day, uphill and among the trees. The Franks formed a dense [[shield wall|muralha de escudos]], like a phalanx. Arab sources say the cavalry even broke the square more than once, but the Franks closed the gap and held their position. The fight went on until night.",
        "The Chronicle of 754 says the Austrasians killed the Muslim chief, Abd al-Rahman, when they found him, with a blow to the chest. The Chronicle of 754 also tells that, at dawn, the Franks saw the enemy's tents still pitched, in the same place. Not knowing they were empty, they sent officers to scout the camp and discovered that the Umayyad army had withdrawn silently during the night.",
        { note: "A tradition, from later Frankish accounts, says that, in the middle of the day, a rumor ran among the Muslims that the Franks were threatening the camp with the plunder of Bordeaux, and that part of the cavalry went back to protect it, which opened the line. The sources I consulted do not allow me to confirm this." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "The real losses are unknown. The most used modern estimate gives about 1,000 Frankish dead and wounded and some 12,000 Umayyads killed, wounded or captured. Later chroniclers speak of 1,500 Franks dead against 375,000 Muslims, but historians note that these numbers were copied from the account of Odo's victory at Toulouse, in 721, and are almost a formula, not a count.",
        "The Umayyads fell back beyond the Pyrenees. But they were not destroyed: the Life of Pardulf says that, on the way back, they plundered the Limousin. They kept parts of Septimania for about 27 more years. Odo died around 735, and Charles recognized his son Hunald as duke. In 735 a new governor of al-Andalus, Uqba ibn al-Hajjaj, invaded Gaul and took Arles and Avignon. Charles campaigned in Septimania in 736 and 739, took Avignon and Nîmes, defeated a relief army on the river Berre (737), but failed before Narbonne (737). Narbonne fell only in 759, to his son, Pepin.",
        { h: "Why It Matters" },
        "For the Franks, the campaign confirmed Charles as the great general of the kingdom. His son, Pepin, became the first Carolingian king, and his grandson, Charlemagne, the first emperor of the West since the fall of Rome. In 750, before that, the Umayyad caliphate had been overthrown by the [[Abbasids|abássidas]], and Muslim power in Spain passed to an independent emirate in Córdoba.",
        { h: "Curiosities and Controversies" },
        { note: "It is one of the most debated battles in history. Gibbon, in the 18th century, argued that a Muslim victory would have taken Islam much further into Europe. Many historians of the 19th and 20th centuries agreed. But there is a revisionist current, with names such as Bernard Lewis, which points out that the Arab sources treat the affair as a minor engagement and that the campaign may have been a large raid, not an invasion." },
        { note: "The traditional date is 10 October 732, a Saturday, according to the chronicles. The Arab sources call the battlefield the 'path of the martyrs' (Balat al-Shuhada)." },
        { note: "The historian Lynn White Jr. proposed that the adoption of the stirrup by the cavalry boosted feudalism under Charles Martel and his heirs. Heinrich Brunner, for his part, said in the 19th century that Charles seized Church lands to finance military reforms; Paul Fouracre thinks there is not enough evidence for so decisive a change." }
      ]}
    ]
  },

  talas: {
    war: "Struggle for Central Asia between the Tang empire and the Arabs (715–751)",
    hook: "Two empires at their height met in the middle of Asia, and the battle was decided by an ally who changed sides.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In the 8th century, Central Asia was a patchwork of small oasis kingdoms, full of Silk Road caravans. Two great empires wanted these cities at the same time. From the east came the Tang dynasty, which in 692 had taken the Tarim basin from the Tibetans and lived off the taxes of the oases. From the west came the Arabs, who already controlled the Samarkand region and wanted to advance further.",
        "Friction began early. In 715, an Arab and Tibetan army, allied with a local faction, threatened the kingdom of Fergana. About 10,000 Tang soldiers defeated it at Namangan. In 717, Tang and Karluk forces defeated another Arab and Tibetan attack at Aksu. In 735, Chinese and Umayyads even became allies against the Turgesh.",
        { h: "The Road to Talas" },
        { timeline: [
          ["715", "The Tang defeat Arabs and Tibetans at Namangan and restore the king of Fergana."],
          ["747", "Gao Xianzhi conquers Gilgit, in the Himalayas."],
          ["748", "Abu Muslim takes Merv and begins the Abbasid revolution."],
          ["750", "The Abbasids overthrow the Umayyads at the Zab river. Gao Xianzhi attacks the kingdom of Shash (Tashkent), and the king is taken to Chang'an and executed."],
          ["May 751", "The son of the king of Shash asks the Abbasids for help. Abu Muslim sends reinforcements to Ziyad ibn Salih, who commanded the Arabs in Samarkand."],
          ["July 751", "Battle of the Talas river."]
        ]},
        "The spark was Gao's decision to attack Shash after making peace. The king surrendered, the city was sacked and Emperor Xuanzong ordered him executed in the capital. Gao also got rich from the plunder, which angered the neighbors. The king's son called in the Arabs."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Gao Xianzhi" },
        "The son of a Goguryeo general captured by the Tang when that kingdom fell, in 668, he was born on the western frontier and rose quickly there. He came to command the whole region in 748. In 747 he had taken Little Bolü (the Gilgit region), an ally of the Tibetans. Bold, but not very trustworthy: at Shash he broke the peace after making it, and profited from the plunder. In 755, during the An Lushan rebellion, he was executed on the emperor's orders, accused of cowardice and corruption, after defending the Tong Pass. He protested his innocence.",
        { h: "Ziyad ibn Salih" },
        "Commander of the Arab forces in Samarkand. We know little about him; the sources describe him only as the commander of the troops that received the reinforcement sent by the Abbasid leader Abu Muslim.",
        { h: "Li Siye" },
        "Gao's lieutenant. When the army fell apart, it was he who opened a path with the armored cavalry and saved the survivors. It was he who persuaded Gao not to try to fight a sixth day.",
        { h: "The Karluks" },
        "A federation of Turkic tribes famous for its smiths and iron weapons. Gao recruited them in Fergana to form his army. They were a large part of the Tang force, and their loyalty depended on which side seemed to be winning."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { formation: true },
        { h: "The Forces" },
        "The numbers vary widely depending on who is counting. Chinese sources say the Abbasids had 200,000 men, including Tibetans. Arab sources say the Chinese had 100,000. The Chinese sources themselves give the Tang side 30,000 men: about 10,000 Tang soldiers and 20,000 mercenary [[Karluks|carlucos]]. Other versions give 20,000 Chinese and 10,000 Karluks. A modern estimate puts it at around 30,000 for each side.",
        { note: "The numbers for the Arab side are the most uncertain. The 200,000 come from Chinese sources and are considered exaggerated." },
        { h: "The Terrain" },
        "The Talas river runs along the present border between Kazakhstan and Kyrgyzstan, near the city of Taraz. Gao was returning from an expedition through the Pamirs when he learned that the Arabs were advancing toward the Four Garrisons of Anxi, the Tang bases in the Tarim basin. He turned around and caught up with them on the south bank of the river, near Taraz.",
        { h: "Five Days" },
        "The Arab vanguard, under Sa'd ibn Hameed, dug trenches and formed a dense line of shields and spears. It held until the bulk of Ziyad's army arrived, and the Tang fell back toward Taraz. From then on the battle lasted five days, with shield walls, showers of arrows and occasional cavalry charges. Neither side broke the other.",
        { h: "The Betrayal" },
        "On the fifth day, the Karluks, who according to the most used account made up about two thirds of the Tang army, changed sides. They attacked the Tang from behind while the Abbasids pressed from the front. Gao held out until night and withdrew to the camp.",
        "He wanted to fight again the next day. Li Siye argued that this would destroy the army. The Tang army retreated east, toward the Tian Shan mountains. During the crossing, former allies from Fergana attacked it. Li Siye opened a path with the armored cavalry, and Gao and many officers escaped, but most of the troops were captured. Fewer than 2,000 men are said to have returned to Central Asia. In a last gesture, Li Siye attacked the Arab pursuers and inflicted many casualties on them.",
        { note: "Arab sources tell it differently. They say the Tang came to help the deposed Umayyads against the Abbasids in Bukhara and Sogdiana, and claim that Gao was killed in the battle, which is false: he died in 756. The 13th-century historian al-Dhahabi says the Karluks had always been allies of the Abbasids. Filippo Donvito supposes they were waiting for an occasion to free themselves from Chinese rule." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "The Tang loss was heavy, but the sources disagree. Chinese sources speak of 20,000 to 30,000 dead (the Tongdian, of 801, gives 30,000; the Old Book of Tang, of 945, 20,000). Arab sources speak of 45,000 to 50,000 Chinese dead and 20,000 to 25,000 captured. The geographer al-Maqdisi says Abu Muslim took about 5,000 Chinese prisoners.",
        "The Abbasids occupied Shash and forced the Tang out of the Gilgit region. But the rest was more discreet than is thought. In 753, General Feng Changqing retook part of Gilgit, and Shash resumed paying tribute. Four Arab embassies reached Chang'an between 752 and 753, and relations quickly returned to normal. In 756, Caliph al-Mansur sent 3,000 to 4,000 soldiers to help the emperor against An Lushan.",
        "The Karluks never turned against the Chinese again. In 753 they submitted to the Tang and received titles. Only in the middle of the 10th century, under Satuq Bughra Khan, did most of them convert to Islam.",
        { h: "Why It Matters" },
        "The question is whether it was a watershed. For the Russian historian Vasily Bartold, the battle decided whether Chinese or Muslim civilization would dominate Turkestan. Others call it a frontier clash: the lines hardly changed, and what ended the Tang presence in Central Asia was the An Lushan rebellion, in 755, which forced the empire to pull back its garrisons.",
        { h: "Curiosities and Controversies" },
        { note: "Paper: the 11th-century historian al-Tha'alibi says that Chinese prisoners from Talas taught the making of paper in Samarkand. Historians dispute this: there was already paper in Central Asia long before (fragments from the 4th and 5th centuries were found near Turfan), and Jonathan Bloom thinks paper was made in Samarkand decades before the battle. No Chinese source records the transfer. What is known is that the first paper mill in Baghdad was opened in 794 or 795." },
        { note: "One of the prisoners was Du Huan, who reached Baghdad, described Chinese silk artisans there and, released in 762, wrote an account of his travels." },
        { note: "The soldiers al-Mansur sent to China in 756 did not all return: some settled there, and some historians link this to the origins of the Chinese Muslim community." }
      ]}
    ]
  },

  suiyang: {
    war: "An Lushan Rebellion (755–763)",
    hook: "A city with a few thousand soldiers held out against more than a hundred thousand for almost ten months, and paid a price that still divides historians.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In the middle of the 8th century, Tang China was the largest and richest empire in the world. In December 755, An Lushan, a [[jiedushi]] of the northeast, marched with his army against the emperor. In 756 he took the two capitals, Luoyang and Chang'an, and proclaimed a new dynasty, the Yan. The emperor fled to Sichuan.",
        "But having the whole north in rebel hands was not enough. The Tang were still alive in the south, the Yangtze basin, which supplied the rice and the taxes. To get there, the Yan army had to pass through a series of cities along the Grand Canal, and one of them was Suiyang, present-day Shangqiu, in Henan province, between Kaifeng and Xuzhou.",
        { h: "The Road to Suiyang" },
        { timeline: [
          ["Dec. 755", "An Lushan rebels."],
          ["Early 756", "The rebels take Luoyang and proclaim the Yan dynasty."],
          ["Spring 756", "Zhang Xun resists for about 60 days at Yongqiu against an army of 40,000."],
          ["January 757", "An Lushan is assassinated by his son An Qingxu, who orders Yin Ziqi to besiege Suiyang."],
          ["February 757", "The siege begins, according to the dating we use."],
          ["August 757", "Nan Jiyun breaks through the siege to ask for help."],
          ["Late 757", "The city falls. Sources give dates from October to 24 November."]
        ]},
        "In Suiyang, the administrator Xu Yuan had stored a year's worth of food, but a neighboring governor made him share the stocks with other fortresses, and the reserve dropped sharply. The city still had about 60,000 inhabitants, soldiers included, according to the Tang histories."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Zhang Xun, 48 years old" },
        "Born in 709, he passed the imperial examinations and served as magistrate of small counties. When the rebellion broke out, his superior forced him to lead a delegation to submit to the rebel general. Instead, he took the group to a temple of Laozi and swore loyalty to the Tang. With 1,000 men, he took over the defense of Yongqiu and held out about 60 days. In the winter of 756, after supplies were cut off, he withdrew to Ningling and joined Xu Yuan at Suiyang.",
        { h: "Xu Yuan" },
        "Administrator of the prefecture of Suiyang, he looked after supplies and repairs. He asked Zhang for help when Yin Ziqi arrived and handed over military command to him, keeping logistics for himself.",
        { h: "Nan Jiyun" },
        "An officer of Zhang's, the archer who hit Yin Ziqi in the left eye, and the man who tried to break through the siege to seek relief.",
        { h: "Yin Ziqi" },
        "The rebel general who received the order to take Suiyang. According to the sources, he admired Zhang and wanted to spare him, but his subordinates feared a mutiny."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "On the Yan side, 130,000 soldiers at the start, plus 20,000 in reinforcements, according to the Chinese accounts. These are numbers from old sources, hard to verify. On the Tang side, 6,800 men, including 3,000 that Zhang brought, plus 3,000 lent later by a neighboring governor, of whom only about 1,000 arrived.",
        { h: "The Siege" },
        "In early 757, Yin Ziqi besieged the city. Zhang, with far fewer men, used tricks. At night he had the war drums beaten, and the rebels stayed on alert, without sleeping. When they stopped reacting, Zhang sent out a dozen officers, among them Nan Jiyun and Lei Wanchun, with 50 horsemen each. The attack, according to the sources, killed 5,000 of the enemy.",
        "Another episode: Zhang had bundles of arrows made of straw given to the archers. Spies carried the news to Yin that the defenders were out of arrows. In an attack, the Tang shot real arrows, Zhang picked out Yin among the soldiers and ordered Nan Jiyun to shoot. The arrow hit Yin's left eye, and he survived, and the confusion was great. According to the sources, after 16 days of combat the Yan had lost 20,000 men and Yin withdrew to gather troops. He returned in July, with another 20,000 men.",
        { note: "The famous trick of the straw dummies dressed in black, lowered down the walls to draw arrows, appears in the sources tied to the earlier siege, that of Yongqiu (756), and not to Suiyang. Many popular accounts mix the two." },
        { h: "The Famine" },
        "In July the food was running out. The soldiers received a little rice and scavenged for animals, insects, roots. In August no vegetation or animal remained inside the walls. They ate tea, paper, horses, and then people. The Tang Histories (of about 945 and 1060) say that about half the population was eaten and give numbers ranging from 20,000 to 50,000. The historian David Graff considers these numbers high, because the soldiers ate first and many civilians must have already died before. He also notes something shocking: it was an organized operation, with a hierarchy in which the first to be eaten were women, then the old and the boys, while men of fighting age were spared. The Old History of Tang says that Zhang killed his own concubine and had the soldiers eat her, to show that the sacrifice was worthwhile.",
        { h: "The Call for Help" },
        "In August, Zhang sent Nan Jiyun with 29 men to try to break through the siege, and 27 succeeded. Helan Jinming, governor of Linhuai, who was jealous of Zhang and wanted to preserve his troops, refused to help and offered a banquet. Nan cut off a finger of his own hand as proof of the urgency, shot an arrow at a statue of Buddha and swore to kill Helan after defeating the enemy. Lian Huan lent 3,000 soldiers, and only about 1,000 reached the fort. The garrison, with some 1,600 men and desperate, decided to hold on.",
        { h: "The Fall" },
        "Zhang and Xu decided not to flee, because abandoning the city would open the way to the Huai region and the lower Yangtze. They fought until fewer than 400 were left alive, too weak to draw a bow. Yin asked Zhang why his teeth were broken, and only three or four were whole; Zhang answered that he wanted to 'swallow the rebel traitors'. Yin tried to recruit Zhang, Nan and Xu, and the three refused. Zhang, Nan and other officers, some 36 in all, were executed. Xu was killed at Yanshi, on the way to Luoyang. A Tang relief army arrived three days after the fall."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "The city fell, but the siege paid off. Chinese sources say Yin lost 120,000 soldiers in more than 400 engagements, a number that is almost certainly exaggerated. The total of Tang dead appears as more than 9,400. What matters is the time: with Yin tied down at Suiyang until the end of the year, the rebels could not advance south, and the Yangtze was barely touched. This gave the court time to gather troops and resources. For that reason many consider the siege a turning point of the rebellion, even though the rebels won it.",
        "The Tang recovered the capitals still in 757, with the help of Uyghur troops. The rebellion ended only in February 763, when the last Yan emperor killed himself.",
        { h: "Why It Matters" },
        "For the Tang, Zhang Xun became a hero of loyalty. The court accepted the argument of Li Han, one of the young scholars who defended him, that cannibalism was a last resort and that the defense kept the enemy out of the Huai region and the lower Yangtze. Zhang and Xu received posthumous titles and shrines at Suiyang and in the Lingyan Pavilion, in Chang'an. Famous poets and writers, such as Han Yu and Wang Anshi, embellished the defenders' courage. The Song general Wen Tianxiang cited them as an example when the Mongols invaded.",
        { h: "Curiosities and Controversies" },
        { note: "Not everyone accepted it. Some courtiers of the time said it would have been better to abandon the city than to eat the people one was supposed to protect. Centuries later, the scholar Wang Fuzhi and the poet Yuan Mei sharply criticized the defenders. Wang wrote that killing people to eat them is not acceptable even in a matter of life and death. David Graff sees the case as a symbol: Zhang became an icon of loyalty, in his reading, 'not in spite of the cannibalism, but because of it', because it showed that loyalty to the dynasty came before everything." },
        { note: "The dates: English Wikipedia gives the siege as 18 February to 24 November 757, but the article on the rebellion gives January to October. The old sources use the lunar calendar, and the conversion is not exact." },
        { note: "The population: the Chinese census of 755 counted about 52.9 million people. The one of 764 counted 16.9 million. Some historians attribute the drop to administrative failures and the loss of control of provinces, not to deaths. For that reason the estimates of the total dead in the rebellion, from 13 to 36 million according to authors who use these data, are much debated." }
      ]}
    ]
  },

  hafrsfjord: {
    war: "Unification of Norway, according to the sagas (9th–10th centuries)",
    hook: "A naval battle that the sagas turned into the founding of Norway, and that historians still debate.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In the 9th century, Norway was not a country. It was a long, jagged coast, divided into small kingdoms of local chiefs, who lived off fishing, farming and raiding abroad. The link between them was the sea: whoever had ships gave the orders. It is in this world that the [[sagas|saga]] place Harald, who supposedly inherited the small kingdom of Vestfold and began annexing neighbors.",
        "Here care is needed with the sources. There is only one text that may be from the period: a poem attributed to the [[skald|escaldo]] Thorbjorn Hornklofi, the Haraldskvæði, also called Hrafnsmál, which survives only inside later sagas. The rest comes from the sagas, written more than 300 years later. The most detailed is the Heimskringla, by Snorri Sturluson, from about 1230. Since 1976, with Peter Sawyer, historians have doubted a good part of these stories, and today some see the tradition of Harald as an origin myth.",
        { h: "The Date and the Legend" },
        { timeline: [
          ["c. 850", "Birth of Harald, approximate date. The years of his life and reign vary widely: the Íslendingabók says he lived 80 years and reigned 70."],
          ["872", "Traditional date of the battle, fixed in the 19th century by Norwegian historians. It was the one used in the 1872 celebrations."],
          ["870–875", "Range proposed by Ólafía Einarsdóttir, in the 1970s."],
          ["c. 900", "Date defended by Halvdan Koht and, later, by Claus Krag."],
          ["1872 and 1983", "The monuments of Haraldshaugen and Sverd i fjell are inaugurated."]
        ]},
        "The uncertainty comes from the lack of sources and from the habit of the sagas of counting time in winters, not in years of Christ. Today most scholars accept that there was a battle, but do not agree on when, nor on who was on each side.",
        { note: "The legend of the hair: according to the Heimskringla, Gyda, daughter of Eirik of Hordaland, would only agree to marry Harald when he was king of all Norway. He swore not to cut or comb his hair until he succeeded. After about ten years, Jarl Ragnvald cut it and Harald received the nickname 'Fairhair' (versions vary). Before that, Hornklofi's poem calls him Lúfa, 'the shaggy one'. Historians are suspicious of this story." }
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Harald Fairhair" },
        "He was the son of Halfdan, according to the sagas. Hornklofi's poem shows him as a warrior king, surrounded by berserkers and warriors in wolf skins. As for his origin, Snorri places him in Vestfold, in the southeast, but historians have preferred western Norway, where the five great royal estates that the sagas attribute to him lie, among them Utstein and Avaldsnes. A detail that complicates things: the verses about the battle never say Harald's name, and whether Lúfa is Harald is debated.",
        { h: "The Kings of the West" },
        "Snorri lists the opponents: Eirik, king of Hordaland; Sulke, king of Rogaland, and his brother, [[Jarl|jarl]] Sote; Kjotve the Rich, king of Agder, and his son Thor Haklang, whom the saga describes as a great [[berserker]]; and Hroald Hryg and Had the Hard, two brothers from Telemark. Historians consider that most of this list of petty kings is Snorri's invention. Of what can be trusted, the poem names only Kjotve and Haklang."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The sources give no number at all of ships or men. The battle may have been the largest in Norway until then, and for a long time afterward, but that is an assumption.",
        { h: "The Terrain" },
        "Hafrsfjord is a small [[fjord|fiorde]] on the coast of Rogaland, where Stavanger and Sola are today, in southwestern Norway. The battle was essentially naval, and the ships were [[longships|drácar]]. Around the fjord there are four ancient local forts, undated and unexcavated, and archaeology has never found in the region chieftains' graves or weapons tied to the battle. A sonar survey carried out between 2016 and 2020 found shapes on the seabed interpreted as possible shipwrecks, but they may be remains of 19th-century oyster farming.",
        { h: "The Battle, According to Snorri" },
        "The kings of the southwest gathered ships and men against Harald. On learning of it, Harald prepared his fleet and sailed south along the coast, recruiting warriors in each region. Eirik, of Hordaland, learned of this when Harald was already south of Stad. He gathered the men he could and went south, to meet the reinforcements coming from the east. The united fleet met north of Jæren and entered Hafrsfjord, where Harald awaited them.",
        "The battle was long and hard, but Harald won. Eirik, Sulke and Jarl Sote died. Thor Haklang, a famous berserker, brought his ship alongside Harald's and attacked with fury, until he fell and his ship was emptied of men. Kjotve fled to a small, easily defended island near the coast. His men scattered: some to the ships, others to land, and those who went to land fled south, through the Jæren region.",
        "Hornklofi's verses, quoted by Snorri, give the color of the scene: dragon prows, shields hung along the sides of the ships, warriors in wolf skins, the wounded lying in the bottoms of the boats and men protecting their backs with shields against a rain of stones. The final line tells of the survivors crossing the sea to their homes and drinking mead to forget the fright.",
        { note: "The verses and the saga do not tell exactly the same thing. In the verses, Kjotve arrives with merchant ships (knarrar) from the east and the fugitives return to the east; there is also mention of a sandy field and fighting on land. The list of kings of the southwest is Snorri's, and the historian Johan Schreiner thought he reconstructed the episode freely." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "According to the sagas, Harald ended the resistance of western Norway, mainly Rogaland, along with some chiefs of the Sognefjord region, and proclaimed himself king of all the Norwegians. He may have collected taxes from much of the country. Historians today see this differently: unification was a process of centuries, which was completed only later, with kings such as Cnut and Harald Hardrada. Part of the east, moreover, may have been under the Danish king before the battle.",
        "The Norwegian Claus Krag argues that the battle may have been a defense of Harald's territory against enemies from the east, and not a war of conquest.",
        { h: "Why It Matters" },
        "Hafrsfjord is, in the Norwegian tradition, the moment when the country is born. That is why, in 1872, a thousand years after the traditional date, the Haraldshaugen monument was inaugurated in Haugesund, at a time of struggle for Norwegian independence. The mound, traditionally held to be Harald's grave, is not proven. In 1983, on the fjord itself, in Stavanger, the artist Fritz Røed inaugurated the 'Sverd i fjell', the 'swords in rock': great swords planted in the rock, at the edge of the fjord.",
        { h: "Curiosities and Controversies" },
        { note: "The flight to Iceland: the sagas tell that many of the defeated who did not accept Harald emigrated and settled Iceland. But the Íslendingabók, older, says Harald imposed taxes to keep people from leaving and emptying Norway. The historian Sverrir Jakobsson thinks the story of flight from tyranny reflects the anxieties of Iceland in the early 13th century, when Norway was trying to dominate the island." },
        { note: "Harald's sons: the sagas cite between 11 and 20. Only five are confirmed by poems of the time: Eric Bloodaxe, Haakon the Good, Ragnvald, Bjørn and Halvdan." },
        { note: "A runestone from the late 10th century, found at Bregninge, on the Danish island of Lolland, mentions the 'son (or grandson) of Toka Haklang'. Koht thought it might be linked to a participant in the battle, but it is only a hypothesis." }
      ]}
    ]
  },

  lechfeld: {
    war: "Magyar raids on Europe (c. 899–955)",
    hook: "In three days of August 955, Otto I's horsemen ended more than half a century of Magyar attacks on Europe.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "For more than 50 years, western Europe lived in fear of a kind of attack it did not know how to face: the [[Magyars|magiares]], ancestors of the Hungarians, settled on the Danube plain since about 895, sallied out in bands of horse archers, plundered a region and vanished before the heavy armies could assemble. In battle, they shot arrows and feigned retreat, to draw the pursuers out of formation and kill them little by little.",
        "The attacks reached far. In 899 they defeated King Berengar in northern Italy. In 907, at Pressburg, they destroyed a Bavarian army, and its leader died. In 910 they won at Augsburg and on the Rednitz. Then they reached Burgundy, Provence and even the Pyrenees. In 937 they reached the Atlantic, and in 942, Catalonia.",
        "In Germany, Otto's father, Henry the Fowler, had defeated the Magyars at Riade, in 933. But the son had his own problems. In 953, Duke Liudolf of Swabia, his son, and Conrad, duke of Lorraine, his son-in-law, rebelled. In 954 they called in the Magyars, who plundered the Rhine and crossed France before going home through Burgundy and Italy.",
        { h: "The Road to Lechfeld" },
        { timeline: [
          ["899", "The Magyars defeat King Berengar at the Brenta and begin plundering Italy."],
          ["907", "They destroy a Bavarian army at Pressburg."],
          ["910", "They win at Augsburg, in the first battle of the Lechfeld, and on the Rednitz."],
          ["933", "Henry the Fowler defeats the Magyars at Riade."],
          ["953–954", "Liudolf and Conrad rebel and call in the Magyars."],
          ["Early July 955", "Hungarian ambassadors visit Otto. He sends them off with few gifts. Shortly afterward, the invasion begins."],
          ["8 August 955", "The Magyars attack the east gate of Augsburg. Bishop Ulrich leads a sortie and they fall back."],
          ["10 August 955", "Battle of the Lechfeld."],
          ["15 August 955", "The Magyar chiefs are executed at Regensburg."]
        ]}
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Otto I, 42 years old" },
        "Born on 23 November 912, king of East Francia (Germany) since 936, he had a year that began badly. At the start of 955, the archbishop of Salzburg had gone over to the rebels. Otto defeated the rebels at Mühldorf and took Regensburg after a siege, in which the defenders surrendered from hunger. When news of the invasion arrived, he chose Ulm as the meeting point and concentrated the troops on the Danube, near Neuburg and Ingolstadt.",
        { h: "Conrad the Red" },
        "Born around 922, son of Count Werner V, he was duke of Lorraine from 944 to 953 and in 947 married Liutgard, Otto's daughter. He felt betrayed when Otto gave the March of Verona to Henry of Bavaria, and joined Liudolf's revolt. He lost the duchy at the Diet of Fritzlar and ended up submitting to the king. In 955 he commanded the Franconians in the battle. He thus fought alongside the king he had opposed.",
        { h: "Ulrich, bishop of Augsburg" },
        "The bishop who directed the defense of the city. He forbade any sortie into open country and reinforced the south gate. In the attack of 8 August, he himself led the counteroffensive, and the Magyar commander died.",
        { h: "Bulcsú, Lél and Súr" },
        "Bulcsú (around 910–955) was [[harka]], the third title of the Hungarian principality, and did not belong to the Árpád dynasty. In 948 he went to Constantinople, where he was baptized in the Hagia Sophia, with Emperor Constantine VII as godfather, and received the title of patrician. In 954 he led a raid against the eastern and western Frankish kingdoms, in which Worms paid a ransom. In 955 he led the siege of Augsburg, with Lél (or Lehel) and Súr as subordinate commanders."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The Germans had eight divisions, according to the chronicler Widukind of Corvey: three from Bavaria, two from Swabia, one from Franconia, under Conrad, one from Bohemia, commanded by a son of Duke Boleslaus I, and the king's division, made up of Saxons, Thuringians and the royal guard. If each had about 1,000 men, as in a late Roman legion, that makes 7,000 to 9,000. The Magyars, according to historians, were 8,000 to 10,000 horse archers, besides infantry and siege engines. Some point out that horse breeding limited their numbers and that the rain weakened their bows.",
        { note: "The numbers for the Magyar side are historians' estimates, not counts. The sources of the time do not give a reliable count." },
        { h: "The Terrain" },
        "The Lechfeld is the floodplain of the Lech river, south of Augsburg. The exact spot is unknown. Part of the German march went through woods, which hid the movements of the men. In Hungarian historiography, the fight is called the second battle of Augsburg, because the first, in 910, took place in the same region.",
        { h: "From Siege to Battle" },
        "The Magyars had been besieging Augsburg for days. On 8 August they attacked the east gate and were repelled by the bishop's sortie. The siege resumed, but was lifted when a traitor, Berchtold of Risinesburg, warned that Otto was near. In the meantime, Count Dietpald of Dillingen slipped out of the city and went to the king's camp.",
        { formation: true },
        "The Germans marched in single file through the woods: the Bavarians in front, then Conrad's Franconians, the king's division in the center, the Swabians, and in the rear the Bohemians, guarding the baggage. Magyar archers crossed the Lech and attacked the Bohemians' flank, and they were routed. The two Swabian divisions were badly hurt.",
        "The Magyars then stopped to plunder the baggage. That was their mistake. Conrad attacked, scattered them and returned to the king with captured standards. Widukind's account is short, and the details of this charge are uncertain.",
        "Otto gathered the men, said that their weapons were better and attacked the main body of the Magyars. Reconstructions based on the Roman war manual of Vegetius suggest that the infantry attacked the center, Conrad held the left, the royal division attacked on the right, and Conrad then swung around to envelop the enemy. This is a reconstruction, not what the sources say.",
        "The Magyars fell back in formation, crossing the Lech to the east. The Germans took the camp and freed prisoners. Otto did not pursue far. The heat and the heavy losses, with three divisions of the rear almost destroyed, made that afternoon a draw. Otto spent the night in Augsburg.",
        { h: "The Death of Conrad" },
        "Widukind tells that Conrad loosened his [[mail|cota de malha]] to breathe in the heat, and an arrow pierced his throat, killing him on the spot. His body was taken to Worms, where his son, Otto of Worms, buried him in the cathedral, an honor then reserved for bishops and kings.",
        { h: "The Pursuit" },
        "The destruction came in the following days. On 11 August, Otto ordered all the river crossings guarded. Duke Henry of Bavaria captured several Magyar leaders. Some fugitives drowned. On 12 August, heavy rain and floods delayed the fugitives, and German troops operating from the fortifications built by Henry the Fowler killed almost all of them."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Bulcsú, Lél and Súr were captured and executed. Western sources speak of hanging, and Byzantine ones of impalement or crucifixion. The most cited place is Regensburg, and the date, 15 August. Lél was captured near Ebersberg by Bohemian forces, on 11 August. Other prisoners were killed or sent back to Prince Taksony without ears and without noses. One estimate speaks of about 5,000 Magyars dead, but the old sources say that almost all the fugitives were killed. The Germans also had high losses, among them Conrad.",
        "The army acclaimed Otto as 'father of the fatherland' and emperor. On 2 February 962, Pope John XII crowned him emperor in Rome. The [[Holy Roman Empire|sacro império]] was, in practice, founded.",
        { h: "Why It Matters" },
        "The Magyar raids on the West came to an end. Grand Prince Fajsz was deposed and replaced by Taksony, and Otto made no new campaigns against Hungary. The Magyars settled in the Danube basin, accepted Christianity and, around the year 1000, founded the kingdom of Hungary. For Kristó, the defeat was catastrophic, and he and Makk ask why the Magyars would give up more than half a century of plunder if it had been minor. For others, it was the symbolic triumph of heavy cavalry over light nomad forces.",
        { h: "Curiosities and Controversies" },
        { note: "The sources: the main one is a biography of Bishop Ulrich, written in Augsburg, which gives the German view. The other, shorter, is Widukind's. The historian Hans Delbrück argued that the Saxons could not have arrived in time." },
        { note: "The legend of Lehel: the Hungarian Illuminated Chronicle tells that, before being hanged, Lehel struck the emperor's forehead with his horn, killing him, and said that Otto would serve him in the afterlife. It is a popular legend, not history, probably created to soften the defeat, showing the chiefs dying with honor." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lechfeld: {
    terrain: [
      { t: "sea", x: 92, y: 0, w: 8, h: 70, l: "Lech" },
      { t: "note", x: 72, y: 5, l: "Augsburg (under siege)" },
      { t: "note", x: 50, y: 68, l: "Diagram not to scale" }
    ],
    units: [
      { id: "gBav", s: "a", k: "cav", w: 14, h: 5, l: "Bavarians" },
      { id: "gFra", s: "a", k: "cav", w: 11, h: 5, l: "Franconians (Conrad)" },
      { id: "gKing", s: "a", k: "cav", w: 12, h: 5, l: "King's division" },
      { id: "gSwa", s: "a", k: "cav", w: 11, h: 5, l: "Swabians" },
      { id: "gBoh", s: "a", k: "cav", w: 10, h: 5, l: "Bohemians" },
      { id: "gBag", s: "a", k: "camp", w: 8, h: 5, l: "Baggage" },
      { id: "hMain", s: "b", k: "cav", w: 20, h: 6, l: "Magyar army" },
      { id: "hRaid", s: "b", k: "cav", w: 13, h: 5, l: "Archers of the rear attack" }
    ],
    steps: [
      { t: "The Magyars besiege Augsburg. Otto marches in column through the woods: Bavarians in front, then Franconians, the king's division, the Swabians and, in the rear, the Bohemians with the baggage.",
        p: { hMain: [76, 14], hRaid: [58, 14], gBav: [76, 56], gFra: [62, 56], gKing: [48, 56], gSwa: [35, 56], gBoh: [23, 56], gBag: [12, 56] } },
      { t: "Warned by a traitor that Otto is near, the Magyar chief lifts the siege. A group of archers splits off, crosses the Lech and goes after the column.",
        p: { hMain: [70, 32], hRaid: [38, 30] } },
      { t: "10 August: the archers attack the flank of the rear. The Bohemians are routed, and the two Swabian divisions suffer heavily.",
        p: { hRaid: [20, 46] }, x: ["gBoh"] },
      { t: "The Magyars stop to plunder the baggage. It is the mistake that costs them dearly.",
        p: { hRaid: [12, 52] }, x: ["gBag"] },
      { t: "Conrad returns with the Franconians, attacks the plunderers and scatters them. He returns to the king with captured standards.",
        p: { gFra: [22, 48], hRaid: [8, 44] }, x: ["hRaid"] },
      { t: "Otto gathers the army, makes a speech and turns the column to face the main body of the Magyars.",
        p: { gBav: [78, 46], gKing: [56, 46], gFra: [36, 46], gSwa: [26, 52], hMain: [66, 28] } },
      { t: "The German heavy cavalry advances in close formation. According to the reconstruction based on Vegetius, the royal division attacks on the right and Conrad envelops on the left.",
        p: { gBav: [76, 38], gKing: [56, 38], gFra: [38, 36], hMain: [66, 26] } },
      { t: "The Magyars fall back in order toward the Lech. Conrad dies from an arrow in the throat. The Germans take the camp and free prisoners.",
        p: { hMain: [86, 22], gBav: [80, 34], gKing: [62, 34], gFra: [44, 34] } },
      { t: "11 and 12 August: the river crossings are guarded, and rain and floods delay the fugitives. Almost all are killed, and the chiefs are captured.",
        p: { hMain: [95, 40], gBav: [84, 38], gKing: [70, 38] }, x: ["hMain"] }
    ]
  }
});
