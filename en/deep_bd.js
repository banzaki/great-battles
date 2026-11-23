// In-depth battles, batch bd: shimbrakure, kircholm, noryang, shiroyama, saragarhi (great-battles pack).
// Checked against the English, Polish, Portuguese, Japanese and Korean Wikipedia articles on each battle and its war
// (Ethiopian-Adal war, Ahmad ibn Ibrahim al-Ghazi, Polish-Swedish war, Imjin War, Yi Sun-sin, Satsuma Rebellion,
// Saigo Takamori), the National Geographic profile of Saigo, and the HistoryNet account of Saragarhi.
// Where sources disagree the text says so. No diagram for Shimbra Kure (the Ethiopian dispositions are not described)
// and none for Saragarhi (no dispositions or moves beyond the fall of one small post).

Object.assign(GLOSSARY, {
  "imã de adal": "Religious and military title of Ahmad ibn Ibrahim, the Muslim leader of the Adal Sultanate, who commanded the army.",
  "malassay": "Name of the elite troops of the Adal army, who stood in the centre of the line, beside the imam.",
  "tributo de jizia": "A tax that Muslim states collected from non-Muslim subjects or neighbours. Some historians say Adal's refusal to pay it to a Christian emperor helped cause the war.",
  "futuh al-habasha": "The 'Conquest of Abyssinia', an Arab chronicle of the war written by a participant, Arab Faqih. It is the most detailed source on Shimbra Kure and, since it takes one side, it exaggerates in that side's favour.",
  "hetman": "Supreme army commander in Poland-Lithuania. The hetman of Lithuania commanded the troops of the Grand Duchy.",
  "reiters": "German horsemen armed with pistols, who fired in ranks, one after another. On the Swedish side they were the cavalry of the wings; Chodkiewicz also had a few, sent by the Duke of Courland.",
  "formação em tabuleiro": "Blocks of infantry in alternating rows, with gaps between them, like the dark squares of a chessboard. The blocks in the rear row cover the gaps in the front row.",
  "meio-regimento": "A Swedish unit of the time, a few hundred men, which the army used as the basic piece of its combat blocks.",
  "wajo": "A stone coastal fort that the Japanese built in Korea, near the sea, to guard the harbour and receive reinforcement ships.",
  "kaishakunin": "The 'second' in seppuku: a trusted friend who cuts off the head of the person killing himself, to shorten the suffering.",
  "bushido": "The 'way of the warrior', a set of ideals attributed to the samurai, such as loyalty and honour. It was heavily idealized after the samurai ceased to exist as a class.",
  "conscrição": "Compulsory military service, in which men of any background are called up to the army. In Japan it began with the law of 1873.",
  "restauração meiji": "The revolution of 1868 that overthrew the shogunate and returned power to the emperor, who reigned as Meiji. It opened Japan's era of modernization.",
  "satsuma": "A former domain in southern Japan, now Kagoshima Prefecture. It was one of those that overthrew the shogunate in 1868 and had a reputation for fierce warriors.",
  "snider-enfield": "British breech-loading rifle, used by many armies in the 1860s and 1870s. It fired faster than a muzzle-loading musket.",
  "havildar": "A sergeant in the British Indian army.",
  "naik": "A corporal in the British Indian army.",
  "sipaio": "An Indian infantry soldier serving in the British Indian army.",
  "pachtuns": "A mountain people between Afghanistan and present-day Pakistan, divided into tribes such as the Afridis and the Orakzais. The border the British drew cut their lands in half.",
  "fronteira noroeste": "The mountainous region in the far north-west of British India, bordering Afghanistan, where the British were always at war with the local tribes.",
  "ordem indiana do mérito": "A decoration for bravery given to Indian soldiers of the British army. Until 1911, when the Victoria Cross became open to them too, it was the highest award they could receive."
});

Object.assign(DEEP, {
  shimbrakure: {
    war: "Ethiopian–Adal War (1529–1543)",
    hook: "The first time the armies of the Christian emperor of Ethiopia were beaten by a young imam, in a battle that nobody can describe in numbers.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the start of the 16th century, the Ethiopian highlands were ruled by a Christian emperor of the Solomonic dynasty, and the eastern lowlands were dominated by Adal, a Muslim sultanate with a port at Zeila. The two powers had been fighting border wars for centuries.",
        "Emperor Lebna Dengel, whose throne name was Dawit II, had reigned since 1508 and had already won a war against Adal: in 1516, at Fatagar, he killed Imam Mahfuz, who threatened his lands. After that, Adal fell into a civil war, from which a new leader emerged, Ahmad ibn Ibrahim al-Ghazi, who took the title of [[Imam of Adal|imã de adal]]. In 1527 there is a record of a raid by an Ethiopian chief into Muslim territory.",
        { h: "The road to Shimbra Kure" },
        { timeline: [
          ["1516", "At Fatagar, Lebna Dengel kills Imam Mahfuz of Adal."],
          ["c. 1525", "After a civil war, Ahmad ibn Ibrahim takes real power in Adal."],
          ["1527", "An Ethiopian chief, Dagalhan, raids Muslim territory on the border."],
          ["c. 1527–1529", "Ahmad gathers Somali, Harla, Argobba, Afar and Arab fighters and buys firearms through the port of Zeila."],
          ["9 Mar 1529", "The two armies meet at Shimbra Kure, in Dawaro."]
        ]},
        "Why did the war start? The Ethiopian chronicles, which are religious, speak of divine punishment. Modern historians point to other causes: Adal's refusal to pay the [[jizya tribute|tributo de jizia]] to a Christian emperor, economic pressure on trade, and the religious fervour around the new imam. There is no consensus."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ahmad ibn Ibrahim al-Ghazi, about 23 years old" },
        "Born around 1506, he began as a soldier of a rebel chief and married Mahfuz's daughter. After a game of alliances and murders, he came to rule Adal. The Ethiopians call him Gragn, 'the left-handed'; the Somalis call him Gurey. He was disciplined: he banned wine, gambling and certain dances, and he assembled an army of different peoples, which he held together through religion. The chronicler who accompanied him is Arab Faqih, who wrote the [[Futuh al-Habasha|futuh al-habasha]].",
        { h: "Lebna Dengel (Dawit II), on the throne since 1508" },
        "He came to the throne as a child and ruled for more than 30 years. He had few firearms, bought from the Turks: in the 1520s, only two swivel guns and fourteen muskets. At Shimbra Kure he trusted in what had always worked, an enormous mass of cavalry and infantry. It was an impressive force, but very slow.",
        { h: "The other names" },
        "On the Adal side, Matan ibn Uthman commanded the Somalis on the left, and Ahmad Girri, another officer, also held his position. Abu Bakr, called Arshuta, is the man the chronicler says gave a speech to the soldiers. On the Ethiopian side, the emperor's brother-in-law, Takla Madhen, was captured and later ransomed for 250 ounces of gold."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are the most uncertain point, and the versions differ by an order of magnitude. The Arab chronicler gives Adal 12,560 men and the emperor 16,000 cavalry and 200,000 infantry, more than 216,000 in all. The Ethiopian chronicles say the opposite: more than 3,000 cavalry and 'countless' infantry for the emperor, and only 300 horsemen for the invader. Each side had a reason to inflate the enemy and shrink itself. None of these numbers is reliable.",
        { note: "Do not use these numbers as a count. The Arab chronicler says the Ethiopian army was much larger than Adal's, but nobody knows by how much, and the Ethiopians tell another story." },
        { h: "The terrain" },
        "Shimbra Kure is in Dawaro, in the southeast of present-day Ethiopia. The exact site is not known. The accounts only mention a huge cloud of dust that covered the field during the fight.",
        { h: "Ahmad's plan" },
        "The imam divided the army into three parts. On the right, the Harla tribes; on the left, the Somalis of Matan ibn Uthman; in the centre, the elite troops the chronicler calls [[Malassay|malassay]], with Ahmad himself. Before the fight, he had everyone pray and gave a speech: each man was to hold his position and let the Ethiopians attack first.",
        { h: "The battle" },
        "The emperor ordered the attack, and the fighting was very bloody. On the Adal right, the Harla resisted the attacks. On the left, the Somalis, far fewer, were crushed: according to the chronicler, many fled and some 3,000 died, but Matan ibn Uthman and Ahmad Girri held their ground.",
        "In the middle of the fight, the dust grew so thick that, according to the chronicler, some Ethiopians attacked one another. That was when the battle turned. The historian Merid Wolde Aregay says Adal's centre, with support from Arab horsemen, turned the tide and pushed the Ethiopians back. The chronicler says that, in the end, the Ethiopian wounded outnumbered Adal's.",
        { note: "Firearms: the historian Richard Pankhurst credits the victory to an elite company of [[arquebus|arcabuz]] shooters, which would make it the first time an Ethiopian army faced firearms in battle. Merid Wolde Aregay disagrees: he says Adal did not receive a significant quantity of firearms and artillery from the Ottomans before 1539. Both agree that the result was not decided by that alone." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Adal kept the field and a huge haul of weapons, horses, swords and mail shirts. The chronicler counts about 5,000 dead in Adal, including some commanders. On the Ethiopian side, he speaks of countless dead, among them a governor, some 10,000 nobles and 114 'patricians'. These are numbers from a chronicler writing for the winner.",
        "The imam wanted to take the emperor's palace, at Badeqe, but did not press on: his troops were tired and restless, and he withdrew from the highlands. For two years he did not face the imperial army head-on. The next battle was on 23 February 1531, at Antukyah, where Adal beat the Ethiopians again, and soon afterwards his men entered the imperial capital.",
        { h: "Why it matters" },
        "Shimbra Kure opened a war that almost destroyed the Ethiopian Empire. Adal conquered a large part of the highlands, took Aksum and reached the north of the country. Emperor Lebna Dengel spent his last years on the run and died in 1540, in a monastery, Debre Damo. Only the arrival of some 400 Portuguese musketeers in 1541, and Ahmad's death at Wayna Daga in 1543, changed the course of the war.",
        { h: "Curiosities and controversies" },
        { note: "The date: 9 March 1529 is the most cited, but some sources give the 7th. The war is counted from 1529 only in the Ethiopian chronicles, because both sides treated the earlier clashes as border raids." },
        { note: "The Harari: the scholar Enrico Cerulli says the soldiers of Harar refused Ahmad's order to conquer all of Abyssinia, out of tradition and fear of moving the Muslim base. It is a hypothesis, and the sources are partisan." },
        { note: "The sources: almost everything comes from the Futuh al-Habasha, by Arab Faqih, who was on Adal's side and accompanied the imam. The Ethiopian accounts are shorter and were written later. There is no neutral source for the battle." }
      ]}
    ]
  },

  kircholm: {
    war: "Polish–Swedish War (1600–1611)",
    hook: "Fewer than 4,000 men against more than 10,000, and the battle was decided by cavalry charges in a few hours, or even in 20 minutes, depending on who tells it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the start of the 17th century, everyone was fighting over the Baltic. Livonia, the region that is now Latvia and Estonia, was divided among the Polish-Lithuanian Commonwealth, Sweden and Russia. To complicate matters, the king of Poland, Sigismund III Vasa, was Swedish: he had been king of Sweden until 1599, when his uncle Charles overthrew him. A family quarrel became a war between countries.",
        "The war began in 1600. In 1605, Charles, who had become king of Sweden in 1604, brought a large army to Livonia and went to besiege Riga, the main port of the region. The Polish Crown had not financed the defence. The one who went to relieve the city was the Grand [[hetman|hetman]] of Lithuania, who, as the story goes, paid the wages of many of his men out of his own fortune.",
        { h: "The road to Kircholm" },
        { timeline: [
          ["1599", "Sigismund III loses the Swedish throne to his uncle, Charles."],
          ["1600", "The war for Livonia begins."],
          ["1605", "Charles IX besieges Riga with an army much larger than the defenders'."],
          ["26–27 Sep 1605", "The Swedes march by night to surprise Chodkiewicz. They fail."],
          ["27 Sep 1605", "The two armies meet at Kircholm, about 18 km from Riga."]
        ]}
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Jan Karol Chodkiewicz, around 45 years old" },
        "Grand hetman of Lithuania and a veteran of the Livonian wars. He arrived at Kircholm with no funds from the Crown and with far fewer men than the enemy, but with rested troops. His tactic was to draw the Swedes out of the strong position they held.",
        { h: "Charles IX, 54 years old" },
        "Regent and later king of Sweden, he had taken the throne from his own nephew. He commanded a large army, with German, Dutch and Scottish mercenaries. His son, Gustavus Adolphus, would become one of the great military reformers of the century.",
        { h: "The other names" },
        "On the Polish-Lithuanian side, Jan Piotr Sapieha commanded the right wing and Tomasz Dąbrowa the left. The hussar Wincenty Woyna led a company of 300 [[Winged Hussars|hussardos alados]], and Teodor Lacki commanded the reserve. Friedrich Kettler, Duke of Courland, sent [[reiters|reiters]] who joined the army before the battle. On the Swedish side, Joachim Friedrich von Mansfeld commanded the cavalry on the right, and Colonel Henryk Brandt the one on the left. Duke Frederick of Lüneburg and Anders Lennartsson, other Swedish commanders, were on the field."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary among historians. For the Polish-Lithuanians, between 3,400 and 4,350 men; the most cited value is about 3,600, with some 2,600 cavalry and 1,000 infantry, plus 4 to 7 guns. For the Swedes, between 10,000 and 14,000; the most common estimates are around 10,000 to 11,000 (10,868, according to Frost, the author most cited in English), with 11 guns. In short, the Swedes were about three times as numerous.",
        { note: "Each historian gives a different number, and all the totals are estimates. Use the numbers as orders of magnitude: something like 3,500 against 10,000." },
        { h: "The terrain" },
        "A hill beside the Daugava River, about 18 km southeast of Riga, with the village of Kircholm next to it. The Swedes occupied the crest. The Polish-Lithuanians stood below, about 1 km away, with their camp, a ring of wagons and a few guns by the river, on the left.",
        { h: "The two dispositions" },
        "Charles IX arranged his army in a [[checkerboard formation|formação em tabuleiro]]: blocks of infantry (seven [[half-regiments|meio-regimento]] in the first line), with pikemen in the middle and musketeers at the ends, in four lines alternating with cavalry, and the guns in front. The front was about 800 metres wide. It was a modern formation for its time.",
        "Chodkiewicz used the traditional Polish disposition, deeper: the left wing, under Dąbrowa, the stronger, to attack along the river and break the Swedish right; the right, under Sapieha, of hussars; in the centre, light infantry and Woyna's company, and a reserve behind. The hetman also had the camp followers stand behind the line, to look like reinforcements.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, the two armies face each other. For hours, Chodkiewicz sends his light cavalry to provoke the Swedes in skirmishes, to irritate them and gain time.",
        "Second, the hetman orders a retreat, a [[feigned retreat|retirada fingida]]. Charles orders the first line to go down the slope after them, with the second-line cavalry covering the sides.",
        "Third, the Swedish infantry goes down into the valley and starts climbing toward the Poles. As it moves away from the rest of the army, it loses support. Chodkiewicz then stops the retreat. The Polish artillery and musketeers fire, and so do Kettler's Courlander harquebusiers.",
        "Fourth, Woyna's hussar company attacks the centre and breaks the cohesion of the Swedish infantry. The Swedish second line cannot arrive in time.",
        "Fifth, on the Polish left, Dąbrowa hits the Swedish right, beside the river. The hussars break Mansfeld's reiters and then the infantry. In the confusion, Frederick of Lüneburg is mortally wounded and Lennartsson dies.",
        "Sixth, on the Polish right, Sapieha faces the Swedish left. Charles sends his cavalry reserve, some 700 to 1,000 men, against Sapieha. The Poles withstand the shock until reinforcements arrive.",
        "Seventh, Chodkiewicz sends in the reserve, Lacki's hussars. Lacki circles round, strikes the Swedes' flank and defeats them. Then he regroups and charges again, reaching the rear of the Swedes who were still holding the houses of Kircholm.",
        "Eighth, the Swedish horsemen flee and trample their own infantry. The foot soldiers, without cavalry, are at the mercy of the hussars and the Polish fire. The Polish infantry advances in a wide wave.",
        "Ninth, the Swedish army falls apart. Those fleeing toward Riga and the fleet anchored on the coast are hunted down, and many drown in the Daugava. Latvian peasants join the hunt to take revenge for the plundering. Charles escapes because a Livonian nobleman, Henryk Wrede, gives him his horse, after the king's was shot. Wrede was surrounded and killed."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Polish-Lithuanian losses were small, about 100 dead and 200 wounded according to the most cited sources, plus some 150 horses. Swedish losses vary widely. One Swedish historian, Sundberg, gives at least 5,000 dead and 500 prisoners; another, Barkman, gives 7,600 to 8,000 killed, captured and dispersed. A Livonian chronicler, Viecken, recorded 20 mass graves with 7,919 bodies; Chodkiewicz said 9,000, a figure considered exaggerated. The Swedes lost their whole camp, their guns and dozens of banners.",
        "Most of the Swedish dead fell in the flight, in the woods and marshes on the way to Riga. The foreign mercenaries were released after swearing not to fight against the king of Poland.",
        { h: "Why it matters" },
        "Charles IX lifted the siege of Riga and returned to Sweden by sea. But the Commonwealth could not take advantage of the victory. The army, unpaid, could not buy food and fodder, the troops scattered, and the unpaid wages led to confederations of rebel soldiers. The Swedes returned in 1607. A truce came only in 1611, and the war resumed in 1617. In 1621, Charles's son, Gustavus Adolphus, took Riga.",
        "For the Poles, Kircholm became a symbol of the winged cavalry. The date is inscribed on the Tomb of the Unknown Soldier in Warsaw: 'Kircholm 27 IX 1605'.",
        { h: "Curiosities and controversies" },
        { note: "The duration: one account says the battle was decided in 20 minutes by the hussars' charge; another says the Swedish cavalry was in flight after 30 minutes; Polish historiography speaks of about three hours of combat. The difference is that some count only the decisive charge, and others count from the start of the skirmishes and the pursuit." },
        { note: "The fame: according to the Polish Wikipedia, Pope Paul V, King James I of England, Sultan Ahmed I and Shah Abbas of Persia sent congratulations on the victory." },
        { note: "Brandt's end: Colonel Henryk Brandt was captured and later executed in Kraków for having switched sides and served the Swedes." }
      ]}
    ]
  },

  noryang: {
    war: "Imjin War: the Japanese invasions of Korea (1592–1598)",
    hook: "Yi Sun-sin's last battle: he died in the middle of victory and asked that the fleet not know.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1592, the Japanese warlord Toyotomi Hideyoshi invaded Korea, supposedly to reach China. The war lasted seven years, with a truce in the middle. The Korean army was beaten on land, but Yi Sun-sin's navy destroyed the Japanese fleets again and again and cut their supply lines. In 1597, Hideyoshi invaded again. Yi, who had been dismissed and jailed through court intrigues, was called back after his replacement lost almost the whole fleet at Chilcheollyang, and he won at Myeongnyang with 13 ships.",
        "In 1598, the Japanese had fallen back to coastal forts, the [[wajō|wajo]], while Chinese armies of the Ming dynasty helped the Koreans. In June, Hideyoshi sent part of the soldiers home. On 18 September, he died. The Council of Five Elders ordered everyone to return. General Konishi Yukinaga, with some 14,000 soldiers, was in the fort of Sunch'on, blockaded by Yi and the Chinese admiral Chen Lin. The way home passed through the allied fleet.",
        { h: "The road to Noryang" },
        { timeline: [
          ["1592", "Hideyoshi invades Korea. Yi Sun-sin wins several naval battles."],
          ["1597", "Second invasion. Yi returns to command and wins at Myeongnyang."],
          ["18 Sep 1598", "Hideyoshi dies. The Japanese government orders a withdrawal."],
          ["late 1598", "Yi and Chen Lin blockade Konishi at Sunch'on."],
          ["15 Dec 1598", "Shimazu Yoshihiro's relief fleet gathers in Sacheon Bay. Yi and Chen wait in the Noryang Strait."],
          ["16 Dec 1598", "The battle begins in the early hours."]
        ]},
        "According to some accounts, Konishi tried to bribe Chen Lin to lift the [[naval blockade|bloqueio naval]], and Chen even agreed to pull back. Yi refused, arguing that this would let Konishi escape. When the Japanese relief fleet appeared, Yi and Chen, with about 150 ships, went to wait for it."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Yi Sun-sin, 53 years old" },
        "The admiral who, between 1592 and 1598, won every naval battle he commanded, according to Korean tradition; the number of battles varies between 23 and more than 60, depending on how they are counted. His main weapon was the [[panokseon|panokseon]], Korea's tall, strong-hulled ship that could carry many cannon. At Noryang, he wanted to stop the Japanese from escaping, not just win the battle.",
        { h: "Chen Lin, the Chinese commander" },
        "A Ming admiral at the head of the Guangdong squadron. According to some accounts, he was more willing than Yi to negotiate with the Japanese. But he fought at Noryang, and his [[flagship|capitânia]] was attacked. When he learned of Yi's death, according to tradition, he fell to the ground three times and wept, beating his chest.",
        { h: "The other names" },
        "On the Japanese side, Shimazu Yoshihiro commanded the relief fleet, with Sō Yoshitoshi, Wakizaka Yasuharu and other chiefs. Konishi, trapped at Sunch'on, wanted to get out on his own. On the allied side, Deng Zilong, a Ming commander, died in the battle. Yi Hoe, Yi's son, Yi Wan, his nephew, and the aide Song Hui-rip were with him when he died."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Here the sources differ greatly, and no number is safe. According to the English Wikipedia, the allies had about 148 ships and 16,000 men: 82 Korean panokseon, 6 large Chinese [[junks|junco]], 57 lighter [[galleys|galé]] and 2 panokseon lent by Yi to Chen. The Japanese had about 500 ships, many of them transports, with some 20,000 men. Another source gives only 300 Japanese ships. The Korean Wikipedia gives much larger numbers on both sides: 160 Korean ships, 300 Chinese and more than 500 Japanese, with up to 60,000 men.",
        { note: "In every version, the allies were outnumbered, but they had stronger cannon and sturdier ships. What historians debate is how much more numerous the Japanese were." },
        { h: "The terrain" },
        "The Noryang Strait separates Namhae Island from the mainland, in southern Korea. It is narrow, which limited the manoeuvres of the much larger Japanese fleet. The Japanese fleet was in Sacheon Bay, at the eastern end of the strait, and wanted to pass to the west, to meet Konishi at Sunch'on. The allies waited at the western end.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on 15 December, Shimazu gathers his fleet at Sacheon, not knowing for sure whether the allies were still blockading Konishi or waiting at the other end of the strait. Yi and Chen wait at the western end.",
        "Second, around 2 a.m. on 16 December (the Korean Wikipedia says 4 a.m.), the Japanese fleet enters the strait.",
        "Third, the Korean and Chinese cannon open fire, and the Japanese cannot answer well at first.",
        "Fourth, with the Japanese fleet damaged, Chen orders a close attack. This gives the Japanese the chance to use [[arquebuses|arcabuz]] and [[boarding actions|abordagem]]. The Koreans throw burning wood onto enemy decks.",
        "Fifth, several Japanese parties board Chen Lin's ship, and his son is wounded defending him. Deng Zilong moves to one of Yi's panokseon to help, but Ming ships mistake it for a Japanese ship and disable it. The Japanese climb aboard and kill everyone, Deng included.",
        "Sixth, Yi's ship, which ends up in the hand-to-hand fighting, goes to rescue Chen's.",
        "Seventh, at dawn, the allies have the upper hand. About half of the Japanese fleet is sunk or captured. Shimazu's ship sinks, and he is saved by other ships. The rest of the enemy fleet retreats.",
        "Eighth, the allies chase the Japanese along the south coast of Namhae, toward Busan. It is in the pursuit that an arquebus shot hits Yi, near the left armpit. He realizes the wound is fatal. According to tradition, he said something like: the fight is at its height, put on my armor, beat my war drums, do not announce my death. Only three people saw it: his son, his nephew and his aide. Yi Wan put on his uncle's armor and kept beating the drum, and the fleet went on fighting."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Japanese fleet was shattered. Korean sources speak of more than 200 ships sunk and some 100 captured. Some accounts say only about 50 ships escaped; others, that about 200 reached Busan. On the allied side, losses were about 500 men and a few ships, besides Yi and Deng.",
        "Konishi left Sunch'on on 16 December and escaped. According to the English Wikipedia, he went around the south of Namhae Island and did not enter the battle. The Korean Wikipedia says the Ming fleet fought him. The Japanese generals gathered at Busan, and the last ship left on 24 December.",
        { h: "Why it matters" },
        "It was the last great battle of the war. The Japanese left Korea the same week, and the invasions were over. Yi's body was taken to Asan, where he is buried beside his father. He received a posthumous ministerial title and, in 1643, the title Chungmugong. Chen Lin delivered a eulogy. A Ming force of 3,000 to 4,000 men stayed in Korea until 1601 to help rebuild the army.",
        "For Koreans, Yi Sun-sin is one of the great national heroes, and his name is still studied by naval historians.",
        { h: "Curiosities and controversies" },
        { note: "The last words: Yi's sentence appears in the Korean chronicles and is repeated in almost every account, but it is passed on only by the three witnesses, and the exact text changes from version to version. The meaning is the same: hide the death so as not to demoralize the fleet." },
        { note: "The allied position: the English Wikipedia says the allies waited at the western end of the strait and fought through to the eastern end. The Korean one says Yi hid in the harbour of Gwaneumpo and lured the Japanese there. The sources consulted do not settle the difference, which is why the diagram is a sketch, not a map." },
        { note: "Chen Lin's bribe and his hesitation appear in sources that are not unanimous, and the Korean Wikipedia treats the story as a later assessment, without a source. It is safe to say that Chen and Yi disagreed about what to do, and that Yi insisted on attacking." }
      ]}
    ]
  },

  shiroyama: {
    war: "Satsuma Rebellion (1877)",
    hook: "A few hundred samurai against tens of thousands of soldiers, and the legend of the 'last samurai' hides a more interesting story.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1868, the [[Meiji Restoration|restauração meiji]] overthrew the shogunate and returned power to the emperor. The samurai of [[Satsuma|satsuma]], in southern Japan, had been the military arm of the revolution. But the new government, in order to modernize the country, kept dismantling their privileges: the samurai class lost its rice stipends, the right to carry swords and, in 1873, the monopoly on arms, through [[conscription|conscrição]], which called peasants and merchants' sons into the army.",
        "Saigō Takamori, the greatest hero of the Restoration, saw modernization as inevitable and even desirable. But he could not abandon the samurai who had fought with him. In 1873, he proposed a war against Korea, to revive the samurai spirit. He lost in the government, resigned and went back to Kagoshima, where he opened private schools that taught letters and military training. By around 1876, Satsuma was practically out of Tokyo's control.",
        { h: "The road to Shiroyama" },
        { timeline: [
          ["1873", "Saigō loses the dispute over the war with Korea and resigns."],
          ["1874", "He opens private schools of military training in Kagoshima."],
          ["Jan 1877", "The government tries to remove the weapons from the Kagoshima arsenal. Saigō's students raid arsenals, and Saigō takes command."],
          ["Feb–Apr 1877", "Siege of Kumamoto Castle. The rebels fail to take the castle and fall back."],
          ["Aug 1877", "The rebel army, already down to some 3,000, is surrounded. Saigō escapes with a few hundred."],
          ["1 Sep 1877", "The rebels occupy Shiroyama, a hill above Kagoshima."],
          ["24 Sep 1877", "Final assault."]
        ]},
        "According to most accounts, Saigō took command of the revolt reluctantly, when his students had already raided the arsenals. His army marched toward Tokyo, but stopped in front of Kumamoto Castle."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Saigō Takamori, 49 years old" },
        "Born in Kagoshima in 1828, he helped overthrow the shogunate, build the national army after 1871 and govern Japan. That is the paradox of the story: he fought to build the state that ended up defeating him. To the people, he became a tragic hero.",
        { h: "Yamagata Aritomo" },
        "Commander of the Imperial army at the siege, linked to the creation of conscription. At Shiroyama, he surrounded the mountain with fortifications, used five warships in the bombardment and ordered that any position attacked by the enemy be covered with fire, even if there were casualties among his own soldiers.",
        { h: "The other names" },
        "Admiral Kawamura Sumiyoshi commanded the marines and was the one who sent the surrender ultimatum. On the rebel side, Beppu Shinsuke was a companion of Saigō and the man who beheaded him, and Murata Shinpachi fought in the defence of the Iwasaki fort."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Imperial army numbered about 30,000 men around Shiroyama, according to the English Wikipedia; a Japanese account says 50,000. They were mostly conscripts, with the Imperial Guard, the militarized police and units of former samurai recruited as policemen, such as the swordsmen of the Battōtai. The rebels were some 300 to 500 men: a Japanese account says 372. They had [[Snider-Enfield rifles|snider-enfield]] and little ammunition, and even melted down metal statues to make bullets.",
        { note: "The numbers at the end are uncertain. Six months earlier, Saigō's force had about 20,000 men, according to the English Wikipedia. The defenders of Shiroyama are what was left after desertions, deaths and captures." },
        { h: "The terrain" },
        "Shiroyama is a hill of about 100 metres, covered in woods, that overlooks the city of Kagoshima, the bay and the old castle of the lords of Satsuma. The rebels occupied the top, and later, when the bombardment tightened, made a headquarters in a cave in the Iwasaki valley, to the east. The cave is now called Saigō's Cave.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on 1 September, Saigō occupies Shiroyama with a few hundred men. The Imperial troops surround the hill and keep digging trenches and building fortifications around it, one after another.",
        "Second, on 23 September, Kawamura demands unconditional surrender, promising to spare the men's lives if they hand over Saigō. The deadline is 5 p.m. Saigō sends word that no answer is needed.",
        "Third, on the night of 23 to 24 September, five warships and the artillery bombard the hill. The rebels, almost out of ammunition, shelter in the cave.",
        "Fourth, at 4 a.m., with three cannon shots as a signal, according to a Japanese account, the Imperial troops climb the hill from every side.",
        "Fifth, the samurai leave their trenches and run sword in hand against the Imperial lines. For a few minutes, surprise and skill with the sword throw part of the troops into disorder. But the Imperial troops are far more numerous and push the rebels back.",
        "Sixth, Saigō is wounded in the thigh and abdomen (accounts vary). He is carried by Beppu Shinsuke, who looks for a place for seppuku. Tradition gives Saigō's last words as: 'Shinsuke, I think this place will do.' Beppu beheads him, as [[kaishakunin|kaishakunin]], and hides the head.",
        "Seventh, Beppu takes command. The last samurai, out of ammunition, go down the hill sword in hand, and Beppu dies hit by a bullet. The rebels defending the Iwasaki fort, such as Murata Shinpachi, hold out a little longer.",
        "Eighth, around 7 a.m., the shooting at Shiroyama stops. The rebellion is over."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The counts of the rebels vary: the English Wikipedia says the roughly 500 all died; a Japanese account speaks of about 160 dead and 200 surrendered. The English Wikipedia cites only 30 dead on the Imperial side in this last phase. The whole war, from February to September, killed and wounded tens of thousands of men, and cost the government so much that, according to the English Wikipedia, it began printing paper money.",
        { h: "Why it matters" },
        "The victory of the conscript army showed that Japan could have a modern army without the samurai class. In 1889, Emperor Meiji pardoned Saigō. Statues of him now stand in Ueno Park, in Tokyo, and near Kagoshima Castle. The people saw him as a tragic hero and an example of [[bushido|bushido]].",
        { h: "Curiosities and controversies" },
        { note: "The 'last samurai': the legend says Shiroyama was the end of the samurai against foreign modernity. The facts are different. The government had been dismantling the privileges of the samurai class since 1871. The rebels had rifles, cannon and mortars, and the other side also had former samurai, such as the policemen recruited for the Battōtai. Saigō himself helped build the army that defeated him. National Geographic calls the image of the traditional warrior against modernity an 'idealized view'. The film The Last Samurai (2003) ends with a battle inspired by Shiroyama, but its characters and plot are invented." },
        { note: "Saigō's death: tradition says he committed seppuku and was beheaded by Beppu. But there is doubt. The English Wikipedia notes that an autopsy found no abdominal wound consistent with seppuku, and that Beppu may have beheaded him because his wounds prevented him from performing the ritual. A 2010 scholarly article calls the suicide apocryphal. National Geographic records two versions: one in which he asked to be beheaded, another in which he committed seppuku." },
        { note: "The head: according to the English Wikipedia, Beppu hid the head, but, because the beheading was rushed, a porter found it." }
      ]}
    ]
  },

  saragarhi: {
    war: "Pashtun revolt of 1897, on the north-west frontier of British India",
    hook: "21 Sikh soldiers in a signalling post, thousands of attackers, and a story in which you have to separate what is known from what is repeated.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the late 19th century, the [[North-West Frontier|fronteira noroeste]] of British India was a land of mountains and constant war. The [[Pashtuns|pachtuns]], divided into tribes such as the Afridis and the Orakzais, lived there, and the border the British drew with Afghanistan cut through their lands. In 1897, a wave of revolts swept the region.",
        "The British controlled the Samana Range with a line of forts. Fort Lockhart stood on the Samana crest, and Fort Gulistan on the neighbouring Sulaiman range. The two could not see each other, so the British built, halfway between them, Saragarhi, a small fortified post to relay messages by [[heliograph|heliógrafo]]. The [[garrison|guarnição]] was made up of soldiers of the 36th Sikhs, an infantry regiment made up only of Sikhs.",
        { h: "The road to Saragarhi" },
        { timeline: [
          ["Summer 1897", "The Pashtun tribes revolt along the whole frontier."],
          ["3 and 9 Sep", "The tribesmen attack Fort Gulistan and are repelled."],
          ["After the 9th", "A relief column reinforces Saragarhi: the post now has 21 men."],
          ["12 Sep, around 9 a.m.", "Thousands of attackers surround Saragarhi."],
          ["12 Sep", "The post falls."],
          ["13–14 Sep", "Reinforcements reach Gulistan, and the post is retaken."]
        ]}
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ishar Singh, havildar" },
        "[[Havildar|havildar]] Ishar Singh, a sergeant, commanded the 21 men. The list of defenders also includes [[Naik|naik]] Lal Singh and Lance Naik (acting corporal) Chanda Singh. The rest were [[sepoys|sipaio]], that is, privates. According to the best-known account, when the post was breached, he sent the men to the inner part and stayed to cover the retreat.",
        { h: "Gurmukh Singh, signaller" },
        "He was the soldier who operated the heliograph. He was the one who kept Fort Lockhart informed of the fight as it happened. He is also the figure around whom most of the stories have grown.",
        { h: "The other names" },
        "At Fort Lockhart, Lieutenant Colonel John Haughton commanded the 36th Sikhs and received the messages. On the other side were the chiefs of the Afridi and Orakzai tribes, whom the sources do not name precisely."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The defenders numbered 21: three NCOs and 18 soldiers. The number of attackers is an estimate, and the estimates vary widely. Haughton, who watched from afar, signalled 10,000 to 14,000 men. In a later report, he spoke of 12,000 to 20,000 tribesmen across the whole area. Some say only 6,000 to 10,000 reached the post. One author, Sharma, speaks of about 10,000.",
        { note: "The attackers at Saragarhi were never counted. All the numbers come from estimates made from a distance, during the fight, and then repeated. It is reasonable to say they were thousands, and that the '21 against 10,000' tally is a symbol, not a count." },
        { h: "The terrain" },
        "Saragarhi stood on the Samana Range, halfway between the two forts, so that each could see the other by heliograph. It was a small post, with a wall and a gate.",
        { h: "The battle" },
        "Around 9 a.m., thousands of men reached the post and surrounded it. Gurmukh Singh warned Fort Lockhart. Haughton replied that he could not send immediate help.",
        "According to tradition, the defenders decided to fight to the end, to keep the enemy from reaching the forts. The fight lasted several hours (one account says almost seven). The first to die was sepoy Bhagwan Singh, and Naik Lal Singh was badly wounded. The attackers tried to force the gate several times, without success, and eventually opened a breach in the wall. From there the fight was hand to hand.",
        "As the defenders fell, Gurmukh Singh was left alone. According to tradition, he sent a message saying the attackers were getting in and asked leave to put down the heliograph and take up his rifle. The attackers set the post on fire and only then did the last defender fall.",
        { note: "What he sent, word for word, and how many enemies he killed, is not well documented. The accounts speak of about 20 or 40 dead, with no clear source. The same goes for the Sikh war cry, 'Bole So Nihal', which he is said to have shouted." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "All 21 defenders died. On the attackers' side the numbers vary: about 450 dead and wounded (an estimate by two authors); some 180 dead, which the Pashtuns themselves are said to have admitted later, according to a letter; and some 600 bodies said to have been seen outside the post, a figure that is not confirmed.",
        "The tribesmen turned against Gulistan but were delayed. Reinforcements arrived on the night of 13 to 14 September, and the post was retaken, according to one source, with intense artillery fire, which may have caused some of the enemy casualties.",
        { h: "Why it matters" },
        "The 21 were posthumously awarded the [[Indian Order of Merit|ordem indiana do mérito]], which was then the highest prize an Indian soldier could receive. It is said to be equivalent to the British Victoria Cross, but the equivalence is a popular comparison. With the burnt bricks of the post, the British raised an obelisk, and Sikh temples were built in Amritsar and Ferozepur. Every 12 September, the Sikh Regiment marks the day with ceremonies at the two temples.",
        "Militarily, what is usually stressed is that the resistance delayed the attackers: after Saragarhi, they turned against Gulistan, but lost time, and the reinforcements arrived.",
        { h: "Curiosities and controversies" },
        { note: "'Taught the world over': a 1999 article said Saragarhi is studied in schools around the world, especially in France. There is no evidence for this, and the battle is not in the French national curriculum. What does exist is the teaching of the battle in schools in Punjab, India, since 2000." },
        { note: "Who the attackers were: some sources call them 'Afghans', but they were mostly Orakzais and Afridis, Pashtun tribes of the frontier region that the British governed in theory." },
        { note: "Who won: the tribesmen took the post and killed all the defenders, but did not take the two forts, and the post was retaken two days later. That is why some accounts call the result their victory, and others a British victory. Here, the post fell, and that is what the battle card records." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  kircholm: {
    terrain: [
      { t: "hill", x: 50, y: 12, rx: 46, ry: 12, l: "Swedish hill" },
      { t: "sea", x: 0, y: 0, w: 5, h: 70, l: "Daugava River" }
    ],
    units: [
      { id: "aCamp", s: "a", k: "camp", w: 12, h: 5, l: "Camp and wagons" },
      { id: "aDab", s: "a", k: "cav", w: 15, h: 5, l: "Left wing (Dąbrowa)" },
      { id: "aInf", s: "a", k: "inf", w: 20, h: 4, l: "Infantry" },
      { id: "aWoy", s: "a", k: "cav", w: 9, h: 4, l: "Woyna's hussars" },
      { id: "aKet", s: "a", k: "cav", w: 7, h: 4, l: "Kettler's reiters" },
      { id: "aSap", s: "a", k: "cav", w: 17, h: 5, l: "Right wing (Sapieha)" },
      { id: "aLac", s: "a", k: "cav", w: 9, h: 4, l: "Reserve (Lacki)" },
      { id: "bInf1", s: "b", k: "inf", w: 40, h: 5, l: "Swedish infantry, 1st line" },
      { id: "bMan", s: "b", k: "cav", w: 14, h: 5, l: "Cavalry (Mansfeld)" },
      { id: "bBra", s: "b", k: "cav", w: 14, h: 5, l: "Cavalry (Brandt)" },
      { id: "bInf2", s: "b", k: "inf", w: 34, h: 5, l: "2nd line" },
      { id: "bRes", s: "b", k: "cav", w: 18, h: 4, l: "Cavalry reserve" }
    ],
    steps: [
      { t: "The Swedes occupy the hill, in alternating blocks, about 1 km from the Polish-Lithuanians. The Daugava River is on Chodkiewicz's left and Charles IX's right. The Swedes are about three times as numerous.",
        p: { aCamp: [12, 64], aDab: [22, 52], aInf: [48, 54], aWoy: [48, 48], aKet: [34, 50], aSap: [76, 52], aLac: [52, 62],
             bInf1: [50, 24], bMan: [22, 16], bBra: [78, 16], bInf2: [50, 13], bRes: [50, 5] } },
      { t: "After hours of skirmishing, Chodkiewicz pretends to retreat. Charles sends the first line down the slope after him.",
        p: { aDab: [20, 58], aInf: [48, 57], aSap: [78, 56], bInf1: [50, 32], bMan: [24, 24], bBra: [76, 24], bInf2: [50, 20], bRes: [50, 10] } },
      { t: "The Swedish infantry goes down into the valley and moves away from the rest of the army. Chodkiewicz halts the retreat, and the Polish artillery and musketeers fire on the Swedes climbing the slope.",
        p: { bInf1: [50, 40], aKet: [36, 50] } },
      { t: "Woyna's hussars attack the centre and disorder the Swedish infantry. The second line does not arrive in time.",
        p: { aWoy: [48, 43] } },
      { t: "On the Polish left, Dąbrowa's hussars break Mansfeld's cavalry, beside the river, and hit the Swedish infantry.",
        p: { aDab: [26, 30], bMan: [12, 38] }, x: ["bMan"] },
      { t: "On the right, Sapieha faces the Swedish left. Charles sends the cavalry reserve, and the Poles withstand the shock.",
        p: { aSap: [76, 34], bBra: [74, 28], bRes: [66, 24] } },
      { t: "Chodkiewicz sends in the reserve. Lacki circles round the flank and defeats the Swedish cavalry facing Sapieha.",
        p: { aLac: [88, 26, -60], bBra: [88, 18], bRes: [78, 10] }, x: ["bBra", "bRes"] },
      { t: "The Swedish horsemen flee and trample their own infantry. Without support, it is at the mercy of the hussars and the Polish fire. The whole Polish line advances.",
        p: { aInf: [48, 38], aWoy: [46, 32], aDab: [30, 22], bInf1: [50, 34], bInf2: [50, 20] }, x: ["bInf1", "bInf2"] },
      { t: "The Swedish army falls apart. The fugitives run for the Daugava and for Riga, and many drown. Charles escapes on Henryk Wrede's horse, and Wrede dies.",
        p: { bInf1: [10, 30], bInf2: [10, 14], bMan: [8, 8], bBra: [20, 6], bRes: [34, 4], aDab: [20, 18], aWoy: [30, 24], aSap: [60, 16] } }
    ]
  },

  noryang: {
    terrain: [
      { t: "hill", x: 50, y: 5, rx: 50, ry: 5, l: "Mainland coast" },
      { t: "hill", x: 50, y: 66, rx: 48, ry: 7, l: "Namhae Island" },
      { t: "note", x: 12, y: 22, l: "← Sunch'on (Konishi)" },
      { t: "note", x: 88, y: 22, l: "Sacheon Bay →" }
    ],
    units: [
      { id: "yK", s: "a", k: "ship", w: 12, h: 5, l: "Korean fleet (82 panokseon)" },
      { id: "yF", s: "a", k: "ship", w: 5, h: 3, l: "Yi's flagship" },
      { id: "cM", s: "a", k: "ship", w: 12, h: 5, l: "Ming fleet (Chen Lin)" },
      { id: "cF", s: "a", k: "ship", w: 5, h: 3, l: "Chen's flagship" },
      { id: "dZ", s: "a", k: "ship", w: 5, h: 3, l: "Deng Zilong" },
      { id: "jA", s: "b", k: "ship", w: 18, h: 9, l: "Shimazu's fleet" },
      { id: "jB", s: "b", k: "ship", w: 14, h: 8, l: "Japanese rear" }
    ],
    steps: [
      { t: "On 15 December, Shimazu's fleet gathers in Sacheon Bay, at the east end of the strait. The allies wait at the west end. Each symbol stands for several ships.",
        p: { yK: [16, 36], yF: [24, 36], cM: [16, 50], cF: [24, 50], dZ: [10, 56], jA: [80, 38], jB: [92, 44] } },
      { t: "Around 2 a.m. on 16 December, the Japanese fleet enters the strait, heading for Konishi.",
        p: { jA: [62, 40], jB: [76, 44] } },
      { t: "The Korean and Chinese cannon open fire and pound the Japanese fleet, which can hardly answer.",
        p: { yK: [26, 36], yF: [33, 36], cM: [26, 50], jA: [50, 40], jB: [64, 44] } },
      { t: "Chen orders a close attack. With arquebuses and boarding, the Japanese get the chance to fight hand to hand.",
        p: { yK: [34, 38], cM: [34, 48], jA: [44, 42], jB: [56, 44] } },
      { t: "The Japanese board Chen's ship. Deng Zilong goes to help aboard one of Yi's panokseon, but Ming ships mistake it for an enemy. Deng dies.",
        p: { cF: [36, 48], dZ: [38, 43] }, x: ["dZ"] },
      { t: "Yi's ship joins the hand-to-hand fight and rescues Chen's.",
        p: { yF: [38, 45], jA: [46, 42] } },
      { t: "At dawn, about half of the Japanese fleet is sunk or captured. Shimazu's ship sinks, and he is saved by other ships. The rest retreats.",
        p: { jB: [68, 52] }, x: ["jA"] },
      { t: "The allies chase the Japanese along the south coast of Namhae, toward Busan. In the pursuit, an arquebus shot hits Yi. He asks that his death not be announced.",
        p: { yK: [58, 48], yF: [56, 52], cM: [52, 56], cF: [50, 54], jB: [84, 56] } }
    ]
  },

  shiroyama: {
    terrain: [
      { t: "hill", x: 50, y: 34, rx: 22, ry: 15, l: "Mount Shiroyama" },
      { t: "sea", x: 0, y: 62, w: 100, h: 8, l: "Kagoshima Bay" }
    ],
    units: [
      { id: "iN", s: "a", k: "inf", w: 44, h: 4, l: "Imperial army (north)" },
      { id: "iW", s: "a", k: "inf", w: 4, h: 22, l: "Imperial (west)" },
      { id: "iE", s: "a", k: "inf", w: 4, h: 22, l: "Imperial (east)" },
      { id: "iMar", s: "a", k: "inf", w: 14, h: 4, l: "Navy (Kawamura)" },
      { id: "iShip", s: "a", k: "ship", w: 20, h: 4, l: "5 warships" },
      { id: "sMain", s: "b", k: "inf", w: 14, h: 8, l: "Satsuma rebels" },
      { id: "sSai", s: "b", k: "inf", w: 3, h: 3, l: "Saigō" },
      { id: "sCave", s: "b", k: "camp", w: 8, h: 4, l: "Iwasaki cave" }
    ],
    steps: [
      { t: "On 1 September, Saigō occupies the hill with a few hundred men. The Imperial troops, far more numerous, surround Shiroyama and build fortifications around it.",
        p: { iN: [50, 10], iW: [14, 34], iE: [86, 34], iMar: [50, 55], iShip: [50, 65], sMain: [50, 34], sSai: [45, 34], sCave: [60, 44] } },
      { t: "On 23 September, Kawamura demands surrender by 5 p.m. Saigō sends word that no answer is needed.",
        p: { iN: [50, 14], iW: [18, 34], iE: [82, 34] } },
      { t: "On the night of 23 to 24 September, the ships and artillery bombard the hill. The rebels are short of ammunition, and their headquarters moves into a cave.",
        p: { sMain: [52, 38], sSai: [50, 41] } },
      { t: "At 4 a.m., on a signal of three cannon shots, the Imperial troops climb the hill from every side.",
        p: { iN: [50, 20], iW: [27, 34], iE: [73, 34], iMar: [50, 49] } },
      { t: "The samurai leave their trenches and run sword in hand against the Imperial lines. For a few minutes, they disorder part of them. Then they are pushed back.",
        p: { sMain: [50, 27], sSai: [47, 29] } },
      { t: "Saigō is wounded. Beppu Shinsuke carries him to find a place to die. According to tradition, he is beheaded, and the head is hidden.",
        p: { sMain: [50, 32], sSai: [55, 42] }, x: ["sSai"] },
      { t: "Beppu takes command. The last rebels, out of ammunition, go down the hill sword in hand under fire. Beppu dies.",
        p: { sMain: [52, 46, 15], iMar: [56, 53] } },
      { t: "Around 7 a.m., the last pocket of resistance falls. The rebellion is over.",
        p: { iN: [50, 26], iW: [32, 34], iE: [68, 34] }, x: ["sMain", "sCave"] }
    ]
  }
});
