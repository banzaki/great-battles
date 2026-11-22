// In-depth battles, batch j: samarcanda, indo, kalka, kirina, mohi, peipus.
// Checked against Juvaini's account of Samarkand (Boyle translation, excerpt), the English Wikipedia articles on each
// battle and on the Mongol invasions, the Livonian Rhymed Chronicle and Novgorod chronicle as summarised there,
// Kamenir (Warfare History Network) on Kalka, Berkeley ORIAS and The Collector on the Epic of Sundiata,
// New World Encyclopedia and Medievalists.net on Mohi, and the works those pages cite.

Object.assign(GLOSSARY, {
  "xá": "A title for the ruler of Iran and Central Asia. Shah Muhammad II of Khwarazm ruled from Samarkand to Iran.",
  "corásmia": "A region of Central Asia around the Amu Darya River, and the empire that, starting from it, dominated Iran and Central Asia in the early 13th century. Its people are the Khwarazmians.",
  "tumen": "A unit of the Mongol army, of about 10,000 men on paper. In practice, it usually had fewer.",
  "citadela": "A fortress inside a city, higher and better walled than the rest, where the defenders made their last stand.",
  "leva": "Forced conscription. The Mongols took peasants and prisoners from conquered cities to dig, carry ladders and serve as human shields in the following sieges.",
  "nafta": "Crude or refined petroleum, highly flammable, thrown in pots or incendiary arrows to set buildings on fire.",
  "cumanos": "Also called Kipchaks or Polovtsians: a nomadic Turkic people of the steppe north of the Black Sea, made up of horse archers. They waged war and traded with the Russian princes and with Hungary.",
  "rus": "The East Slavic principalities ruled by princes of the same family, centered on Kiev. Russia, Ukraine and Belarus descend from them. They almost never acted together.",
  "griô": "A West African storyteller and oral historian, who keeps for generations the memory of kings, battles and families, in sung or spoken narratives. Also spelled djeli.",
  "mansa": "The title of the king of Mali, roughly 'king of kings'.",
  "totem": "An animal or object tied to a person or a clan, which gives protection but also imposes taboos. In the epic, Sumanguru's totem was the white rooster.",
  "máquina de arremesso": "A war engine that throws stones or pots of fire, like the traction catapult. The Mongols learned to use them from Chinese and Persian engineers.",
  "templários": "An order of Christian warrior monks, created to protect pilgrims in the Holy Land. It had castles and knights across Europe, including in Hungary.",
  "ordem livoniana": "A branch of the Teutonic Order in Livonia, the region of the present-day Baltic. It was a German religious military order that conquered and converted the pagan lands of the east, with armored knights and native infantry.",
  "druzhina": "The armed retinue of a Russian prince: professional warriors who lived at court and fought on horseback beside him.",
  "crônica": "A historical account written year by year, generally by monks. Medieval chronicles are the main source for many battles, but they were copied and altered over the centuries."
});

Object.assign(DEEP, {
  samarcanda: {
    war: "Mongol invasion of Khwarazm (1219–1221)",
    hook: "Everyone thought the city would hold out for years. It fell in five days.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the beginning of the 13th century, Genghis Khan was uniting the tribes of Mongolia and conquering northern China. To the west lay [[Khwarazm|corásmia]]: an empire that stretched from Iran to Central Asia, ruled by the [[shah|xá]] Muhammad II and full of rich cities on the Silk Road, such as Bukhara, Samarkand and Urgench. Merchant caravans passed between the two empires.",
        "In 1218, a Mongol caravan reached Otrar, on the border. The governor, Inalchuq, confiscated the goods and had its members executed, accused of espionage. Historians debate whether the accusation had any basis and how much the shah knew. What is known is what came next: Genghis sent ambassadors to demand that Inalchuq be punished, and the shah refused. He had one of the ambassadors killed and humiliated the other two. For the Mongols, an ambassador was inviolable, and the insult could not go unanswered.",
        { h: "The road to Samarkand" },
        { timeline: [
          ["1218", "The Mongol caravan is massacred at Otrar. The shah refuses to punish the governor and humiliates the ambassadors."],
          ["1219", "The invasion begins. Otrar holds out longer than expected, and Genghis divides his army."],
          ["7 to 10 February 1220", "After crossing the Kyzyl Kum desert, Genghis reaches Bukhara. The lower city surrenders in three days; the citadel falls about twelve days later."],
          ["March 1220", "Genghis arrives at Samarkand, the greatest center of the empire."],
          ["December 1220", "Shah Muhammad II dies, a fugitive, on an island in the Caspian Sea."]
        ]},
        "The Mongols divided their army into well-separated groups. Genghis and his son Tolui went on with about 50,000 men (modern estimates for the total range from 90,000 to 200,000) and crossed some 480 km of the Kyzyl Kum desert, which was considered impossible to cross with an army, to appear at Bukhara without warning. The shah, who expected the attack at Samarkand, had scattered his troops in garrisons across the large cities instead of facing the enemy in the open field."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Genghis Khan" },
        "Against Khwarazm, Genghis brought Chinese siege engineers, used prisoners as labor and spread false letters and decrees in the name of the shah and his mother, Terken Khatun, to sow confusion. According to Juvaini, everyone thought Samarkand would take years to fall, and so Genghis preferred first to clear the surrounding region, taking Bukhara. Before attacking the city, he rode around it for a day or two to study the walls, the outworks and the gates.",
        { h: "Muhammad II, shah of Khwarazm" },
        "He distrusted his own generals and lived in dispute with his mother, Terken Khatun, whose Turkic cavalry was one of the kingdom's forces. Instead of gathering the army for a battle, he distributed troops among Samarkand, Balkh, Otrar and other cities. He probably expected only a raid of normal size, which would devastate the countryside and spare the cities. When the Mongols appeared behind him, he fled west and did not return. He died in December 1220, on an island in the Caspian. Most scholars attribute his death to pneumonia.",
        { h: "The other names" },
        "On the Mongol side, Genghis's sons, Chagatai and Ögedei, reached Samarkand after taking Otrar. Two trusted generals, Jebe and Subutai, were sent after the shah with 30,000 men, according to Juvaini. On the Khwarazmian side, Juvaini cites the Turkic commanders Alp-Er Khan, Sheikh Khan and Bala Khan, who went out to fight, and, among the Turks who died in the citadel, Barishmas Khan, Taghai Khan, Sarsigh Khan and Ulagh Khan."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No number is certain. The Persian historian Juvaini, who wrote under Mongol rule in the 1250s, says that the shah left 110,000 men in Samarkand: 60,000 Turks, 50,000 'Tazik' (Iranians), plus 20 elephants. Another chronicler, Ibn al-Athir, speaks of 50,000. Modern historians distrust both: comparing with the size of the city, one estimate in circulation is some 10,000 soldiers. On the Mongol side, nobody knows the exact strength at Samarkand. Estimates for Genghis's column at Bukhara range from 30,000 to 50,000, and the sons arrived with more troops, in addition to the [[levies|leva]] from Bukhara and Otrar.",
        { note: "The numbers of Juvaini and Rashid al-Din were written under Mongol patronage, and modern historians think they are often exaggerated, sometimes by an order of magnitude." },
        { h: "The terrain" },
        "Samarkand lay in the valley of the Zeravshan River. According to Juvaini, the [[citadel|citadela]] had been reinforced, with several lines of outworks, very high walls and a moat dug down to the water. Around the city ran a wall with gates, and the English Wikipedia speaks of eight iron gates.",
        { h: "The five days" },
        "First, Genghis arrived by way of Bukhara, driving ahead of him a great levy of prisoners from that city. Villages that surrendered were spared, and those that resisted were besieged by troops left behind. When the sons arrived from Otrar, all camped around the city. For a day or two, the khan just looked at the walls.",
        "Second, on the third day, Mongols and levies surrounded the city in a circle, and the generals Alp-Er Khan, Sheikh Khan and Bala Khan went out onto the plain, lined up facing the Mongol army and exchanged arrows. Many died on both sides. The shah's Turks fought in skirmishes all day, and a thousand of them fell.",
        "Third, the next day, Genghis surrounded the city again. The Mongols came so close to the gates that they prevented the defenders from going out into the field. Caught between the two armies, the Khwarazmians launched the elephants. The Mongols did not fall back: they struck the elephants with arrows, and the wounded beasts turned around and trampled many of the city's own people. At night, they closed the gates.",
        "Fourth, the next day, the fifth of the siege, the city split. Some wanted to surrender, some were afraid. The qadi (the judge) and the sheikh al-Islam, the highest religious authority, went out with other clergy and spoke with Genghis. They came back with promises. At the hour of prayer, they opened a gate, and the Mongols came in. They spent the day tearing down the walls until horses and infantry could pass everywhere. The next day, the population was taken out of the city in groups of a hundred. Only the qadi and those under his protection stayed: more than 50,000 people, according to Juvaini. Mongols and allied troops plundered the city, and those hiding in cellars and holes were found and killed.",
        "Fifth, the citadel. Alp Khan went out with a thousand men, cut through the middle of the Mongol army and fled to find the shah. The next morning, the Mongols surrounded the citadel and took it between one prayer and the next. A thousand men shut themselves in the main mosque and fought with [[naphtha|nafta]] and bolts, and the whole building caught fire. The survivors were taken out and separated: Turks on one side, Iranians on the other. That night, all the Qanqli men were killed. Juvaini speaks of more than 30,000 Qanqlis and Turks, with their commanders and about twenty of the shah's emirs.",
        { note: "There are modern versions that describe a feigned retreat: Genghis would pretend to fall back, lure half the garrison out of the city and massacre it. This is not in Juvaini. The oldest source describes a sortie in the open field, a two-day fight and a surrender negotiated by the clergy." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The day after the fall, the survivors were counted. Thirty thousand were chosen for knowing a craft and were distributed among the sons and relatives of Genghis. Another 30,000 young men were chosen for the levy, for the following sieges. The rest returned to the city, and Genghis demanded a ransom of 200,000 dinars. Juvaini says the levies were repeated several times and that few were spared. The elephants were turned loose to graze and ended up starving to death. Juvaini relates that Genghis asked the keepers what they had lived on before captivity.",
        "No source gives reliable losses for either side. Genghis left the administrator Yelü Ahai to govern Samarkand and Bukhara and secure the rear, and went on. Khwarazmian resistance would only finally end after the battle of the Indus, in 1221.",
        { h: "Why it matters" },
        "Samarkand was the largest city of the empire, with reinforced walls and an enormous garrison, at least according to Juvaini, and it fell fast. The shah had bet on the walls and the scattered garrisons, and lost. The Mongols' reputation for cruelty, who destroyed cities that resisted or rebelled after surrendering, opened the way to the other cities of the region.",
        "The city was plundered and was slow to recover. In 1370, Tamerlane made it the capital of a new empire, and it became one of the great cities of Asia again.",
        { h: "Curiosities and controversies" },
        { note: "The date: March 1220 is the most accepted, and the chronicler Juzjani gives the 19th, but other sources offer alternatives. The duration also varies: about five days for the city in Juvaini, close to a month in other accounts, which count the citadel separately." },
        { note: "The dead: the English Wikipedia cites a figure of 2.5 million dead attributed to Juvaini, and the article itself considers it exaggerated, since the whole population of the empire would be little more than 3 million. This number does not appear in the passage of Juvaini on Samarkand that we consulted." },
        { note: "The source: Juvaini wrote in the 1250s, in the service of the Mongol empire. He praises Samarkand as a paradise on Earth and tells of its fall in great detail, but he wrote more than thirty years later, and his version is the victor's." }
      ]}
    ]
  },

  indo: {
    war: "Mongol invasion of Khwarazm (1219–1221)",
    hook: "Trapped between the Mongol army and the Indus River, the last great prince of Khwarazm leapt from a bluff on horseback, and, according to tradition, Genghis Khan ordered that he be let go.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After the fall of Samarkand, the [[shah|xá]] Muhammad II fled west and died in December 1220, on an island in the Caspian Sea. His son Jalal ad-Din Mingburnu took the title, but the nobles of Urgench preferred another heir, his half-brother Uzlaq-Shah. Jalal ad-Din discovered a plot against himself and left.",
        "He went southeast, to Ghazni, in present-day Afghanistan, where he gathered supporters from Qarluq, Khalaj and Turkmen tribes. The sources speak of tens of thousands: Wikipedia gives 50,000 supporters at Ghazni, joined by another 30,000 brought by an uncle, and another version says about 65,000 men assembled before Parwan.",
        { h: "The road to the Indus" },
        { timeline: [
          ["December 1220", "Muhammad II dies on an island in the Caspian. Jalal ad-Din takes the title."],
          ["Autumn 1221", "At Parwan, near Kabul, Jalal ad-Din defeats the Mongol general Shigi Qutuqu, in one of the rare Mongol defeats in open battle."],
          ["Soon after", "A quarrel over the booty splits the army. Part of the troops desert, and Jalal ad-Din is left with about half of his men."],
          ["24 November 1221", "Genghis Khan catches up with Jalal ad-Din on the banks of the Indus."]
        ]},
        "At Parwan, Jalal ad-Din won in a narrow valley, where the Mongol cavalry was of little use, by sending his horse archers to fight on foot. According to the English Wikipedia, on the night of the victory there was a quarrel over the division of the booty, in particular a white Mongol horse: Amin Malik, who commanded the Turks, whipped Saif ad-Din Ighraq, chief of the Afghan troops. Jalal ad-Din refused to punish Amin Malik, and Ighraq rebuked him. After nightfall, Ighraq, the Khalaj, the Afghans and part of the Qanqlis left. The names vary among the sources: one article calls Jalal ad-Din's uncle Amin Malik and another Temur Malik."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Jalal ad-Din Mingburnu" },
        "Son of the shah, he was the only Khwarazmian leader who had beaten the Mongols in open battle. The quarrel at Parwan, and his refusal to punish one of the sides, cost him half his army. The main account in his favor is that of al-Nasawi, his personal biographer, and historians read it with caution.",
        { h: "Genghis Khan" },
        "He sent Shigi Qutuqu after Jalal ad-Din and, after his defeat, went in person, by forced marches, to prevent the sultan from escaping to India. According to Rashid al-Din, he told the defeated general that he had not known the battlefield and that both of them had erred. At the Indus, he commanded the reserve and left the wings to his sons, Chagatai on the right and Ögedei on the left. He sent a detachment to climb the crest of a hill to attack from the flank, under the command of Bela Noyan.",
        { h: "The other names" },
        "On the Khwarazmian side, Amin Malik commanded the Turks on the right and died in the flight; Temur Malik, probably the Afghans on the left, died in the fighting. Akhash Malik, Jalal ad-Din's cousin, begged him to flee when all was lost."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Mongols had at least 50,000 horsemen, according to Sverdrup (2010), cited by the English Wikipedia. The Khwarazmians are harder to count. Wikipedia's source gives 3,000 horsemen plus 30,000 to 35,000 irregular troops (Dupuy and Dupuy, 1993). The text speaks of some 30,000 after the desertions, but also says that Jalal ad-Din stayed in the center with 5,000 men, and 700 bodyguards in reserve. The figures do not add up, and the authors do not reconcile them.",
        { h: "The terrain" },
        "The bank of the Indus River, in present-day Pakistan. The sultan anchored his left on a hill crest that ran right down to the water, and the right was protected by the bank itself. With this, the Mongols could not easily surround him, and the numerical advantage yielded less. The disadvantage: there was nowhere to retreat but the river.",
        { h: "The battle" },
        "Genghis formed a crescent to press the Khwarazmians against the river, and kept the reserve to prevent an escape. The Mongols were coming from a forced march through the mountains, and perhaps attacked before the whole army had arrived.",
        "First, at dawn, the two armies clashed on the wings. The Khwarazmian left held on the crest, even though the Mongols reinforced the attack without pause, and Ögedei was pushed back on the Mongol left.",
        "Second, Genghis saw that the crest was strong and sent Bela Noyan with an elite troop to climb the slope. Many men died on the climb, but the detachment reached the top and attacked the flank and rear of the Khwarazmian left.",
        "Third, Jalal ad-Din attacked the Mongol center. Al-Nasawi says he reached Genghis Khan and put him to flight. Historians doubt this: the Mongols could not use their bows well in the confusion, but they stopped the advance. Temur Malik died in the hand-to-hand fighting.",
        "Fourth, the Khwarazmian right, which was already falling back, broke. Amin Malik was intercepted and killed in the flight toward Peshawar.",
        "Fifth, Jalal ad-Din fought until midday. When his cousin Akhash Malik persuaded him to flee, he attacked the crest taken by the Mongols and broke through the encirclement. He rode to the bluff above the Indus.",
        { h: "The leap" },
        "Jalal ad-Din leapt on horseback from a bluff of about 9 meters (30 feet) and reached the other bank. The sources differ on details: some say he was in full armor, others say not. Genghis, according to tradition, forbade the archers to shoot and called his sons to see what he had done. He said that every father should wish for such a son."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Khwarazmian army was destroyed. Wikipedia speaks of more than 30,000 dead and says that only some 4,000 reached the other bank, many of them shot down with arrows in the water. Mongol losses are unknown. The sultan's camp, harem and treasure were captured, and all the men of his family were killed, including a seven-year-old son.",
        "Genghis did not pursue Jalal ad-Din far. He spent the winter in the Swat Valley and subdued the Afghans. Ögedei spent fifteen months taking Ghazni and the fortresses of the mountains. Genghis returned to Mongolia in 1224 or 1225.",
        { h: "What came after" },
        "Jalal ad-Din gathered survivors, defeated local princes and set up a small state in India. The sultan of Delhi, Iltutmish, refused to grant him asylum, so as not to face the Mongols. After about three years, in 1223, Jalal ad-Din returned to Iran, at his brother's request, and still faced the Georgians and new Mongol armies. He died in August 1231, murdered by a Kurd who wanted to avenge his brother.",
        "Before the battle of Garni, in 1225, Jalal ad-Din demanded that Queen Rusudan of Georgia submit. She answered with a letter mocking his defeat at the Indus.",
        { h: "Why it matters" },
        "The Indus ended the organized resistance of the Khwarazmian Empire. It was also the first time a Mongol army appeared in India. Genghis went home, and India was only touched by the Mongols in smaller raids, such as the sack of Lahore in 1241.",
        { h: "Curiosities and controversies" },
        { note: "The date of 24 November 1221 is the most cited. A summary from the Encyclopaedia Iranica, which we could not open in full, speaks of another chronology: the crossing of the river in August or September 1221, or two months later, according to al-Nasawi and Juvaini." },
        { note: "The names: the English Wikipedia calls Jalal ad-Din's uncle Amin Malik in one article and Temur Malik in another. At Parwan, the Afghan commander is Ighraq, sometimes Saif ad-Din Ighraq." },
        { note: "Genghis's remark, and the order not to shoot, come from traditional accounts cited by Wikipedia, with no primary source confirmed here. We use the version as tradition, not as fact." }
      ]}
    ]
  },

  kalka: {
    war: "Expedition of Jebe and Subutai to the west (1220–1223)",
    hook: "It was just a reconnaissance expedition. Even so, only one in ten Russian soldiers came home.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Genghis Khan invaded [[Khwarazm|corásmia]] in 1219, to avenge the murdered ambassadors. When Shah Muhammad II died, on an islet in the Caspian Sea, the general Jebe asked Genghis for a year or two to keep conquering before returning to Mongolia by way of the Caucasus. Genghis approved, and Subutai went with him as second in command. Each commanded a [[tumen]]: 20,000 men in all.",
        "The two sacked Rey, Zanjan and Qazvin and entered Georgia. In 1221, King George IV Lasha was defeated, and at the end of 1221, at Khunan, the Georgian and Armenian army of 30,000 men was beaten, and the king was mortally wounded. Then they went around the Caucasus, took Derbent after the city refused to surrender and crossed the mountains, abandoning the siege engines and losing hundreds of men to the cold.",
        { h: "The road to the Kalka" },
        { timeline: [
          ["1219–1221", "The Mongols cross Iran and Armenia and defeat the Georgians."],
          ["After 1221", "They cross the Caucasus and break up an alliance of Lezgians, Alans and Circassians, and then finish off the Cumans."],
          ["Early 1223", "The Cuman khan Köten flees to his son-in-law, Mstislav of Galich, and warns that the Russians will be next."],
          ["Spring 1223", "The Russian princes gather and go down the Dnieper River. The Mongols fall back."],
          ["31 May 1223", "Battle of the Kalka River."]
        ]},
        "In the northern Caucasus, the Mongols faced an alliance of some 50,000 men. The [[Cumans|cumanos]] were in it, and the Mongols split it by promising them a share of the booty. With the alliance broken, they destroyed both Cuman groups, sacked Astrakhan and took a Genoese city in Crimea. The khan Köten fled and reached the Rus', warning his son-in-law. The [[Rus'|rus]] had suffered Cuman attacks for decades, and for almost a year paid little attention to the warning. When news came that the Mongols were marching along the Dniester River, Mstislav of Galich put together an alliance that included Mstislav III of Kiev and Yuri II of Vladimir-Suzdal, who promised support."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Jebe and Subutai" },
        "Two Mongol generals in the service of Genghis Khan, who was not at the battle. For him, the expedition was only a reconnaissance of a region he might attack later. Jebe died shortly after the end of the campaign. Subutai would return to Russia in 1237, with Batu.",
        { h: "The Russian princes" },
        "There was no overall commander. Mstislav III Romanovich, prince of Kiev, was the most important prince and led the troops of Kiev, Chernigov and Smolensk, according to Kamenir. Mstislav Mstislavich, the Bold (Udaloi), prince of Galich, commanded the vanguard, and was Köten's son-in-law. Daniel Romanovich led a vanguard of some 500 men from Volhynia and was wounded several times. Mstislav Svyatoslavich, of Chernigov, arrived late and died. The princes disputed command among themselves, and the result was that each acted on his own.",
        { h: "The Cumans" },
        "Köten and his horsemen were the ones with the most to lose. Their raids had angered the Russians for decades, but now they were forced allies. As horse archers, they had the same way of fighting as the Mongols, and were the first to be beaten."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No ancient source gives numbers for the armies, and modern ones diverge widely. For the Mongols, de Hartog says 20,000 and Gabriel about 23,000. For the Russians and Cumans: de Hartog gives 30,000, Gabriel and Munro give 80,000, Khrustalev gives 15,000 (10,000 Russians and 5,000 Cumans) and Sverdrup only 8,000. Fennell thinks even the chronicles' number is exaggerated, some 11,000. Kamenir estimates 12,000 Russians and 8,000 Cumans on horseback, the rest on foot.",
        { note: "The Russian numbers are the most uncertain point. We use the ranges of modern historians, not those of the chronicles, which often repeat round or exaggerated numbers." },
        { h: "The terrain" },
        "An open steppe in the south of present-day Ukraine, in the Donetsk region. The river called the Kalka may be the present-day Kalchyk, which flows into the Sea of Azov, but the exact place is not certain.",
        { h: "Nine days of retreat" },
        "The Russian princes had a pincer plan: Galich and Volhynia would go down the Dnieper to the south, Kiev and Chernigov would go up to the north, Kursk would advance from the front, and the Cumans would attack the enemy's rear. Jebe sent ten envoys to the prince of Kiev. They said the Mongols had no quarrel with the Russians, only with the Cumans. Mstislav of Kiev had them executed. Then the Mongols sent other envoys, who declared war.",
        "Then the Mongols retreated east for about nine days (some texts say eight), in a [[feigned retreat|retirada fingida]] that stretched out the armies pursuing them. A rear guard of a thousand Mongols, commanded by Hamabek, was left as bait. Mstislav the Bold crossed the river under a rain of arrows and destroyed the rear guard. According to Wikipedia, the Mongols were killed to the last man.",
        { h: "The battle" },
        "First, the Mongol army turned to face the Russians on the banks of the Kalka. Mstislav the Bold and the Cumans attacked before the rest of the army arrived, and were beaten. The Cumans fled, and the flight passed through the Russian ranks, which caused confusion.",
        "Second, the troops of Volhynia and Kursk opened a corridor for the Cumans to fall back. The heavy Mongol cavalry went through it and surrounded the Cumans.",
        "Third, the army of Chernigov, which did not know the battle had begun, was advancing when it ran head-on into the fleeing Cumans. The Mongols used smoke to disrupt coordination, and the line collapsed. Mstislav Svyatoslavich of Chernigov died.",
        "Fourth, the Mongol wings closed the encirclement on the Russian army, struck by rains of arrows and cavalry charges. Mstislav the Bold cut his way out with part of the army. Daniel of Galich was wounded.",
        "Fifth, Mstislav of Kiev arrived and found the army in flight. With his men, some 10,000 according to Wikipedia, he fell back to a camp fenced with stakes on a hill beside the Dnieper. The Mongols surrounded him.",
        { h: "The end of Mstislav of Kiev" },
        "The camp held out for three days. According to Kamenir, the Mongols offered free passage if the Russians handed over weapons, banners and goods. Mstislav accepted after Ploskinya, one of the brodniks (allies of the Mongols), swore on a cross. According to Kamenir, the disarmed column was caught and almost all killed, and only about 200 horsemen escaped. The Mongols also executed Mstislav, but, following Mongol custom for royalty and nobility, without spilling blood: he and his sons-in-law were tied up and placed under boards, and the Mongol generals held a victory banquet on top while they died crushed."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Russian and Cuman losses vary widely. Wikipedia cites up to 70,000 or 75,000; Gabriel speaks of 50,000; the Primary Chronicle, 10,000 dead; the Nikon Chronicle, 60,000. The First Novgorod Chronicle gives no numbers, but says that only one in ten men returned. The Mongols had small losses, according to modern estimates. About a dozen princes died, among them Mstislav of Chernigov, his son Vsevolod, and Mstislav of Kiev with his two sons-in-law.",
        "Mstislav the Bold escaped and destroyed the boats he found on the Dnieper to keep the Mongols from crossing the river. The Mongols chased the prince of Galich, sacked a few southern towns and turned back. They crossed the Volga, near present-day Volgograd, and were defeated by the Volga Bulgars in the battle of the Samara Bend, according to Wikipedia. Then they attacked the Cumans in the Urals, killed their khan and imposed tribute. They rejoined Genghis Khan east of the Syr Darya River, and he praised the generals.",
        { h: "Why it matters" },
        "It was the first battle between Mongols and East Slavs, and a catastrophe for the Rus': almost all the principalities lost a large part of their armies, with the exception of Vladimir-Suzdal. But the Mongols left. They returned 14 years later, in 1237, with Batu and Subutai, and 120,000 men, and this time they stayed. The campaign of Jebe and Subutai is called the longest cavalry raid in history: about 8,900 km in three years.",
        { h: "Curiosities and controversies" },
        { note: "The date: 31 May 1223 is the most used. Other sources give 16 June or 16 July." },
        { note: "The place: the Kalka River may be the present-day Kalchyk, which flows into the Sea of Azov. The exact site of the battle is uncertain." },
        { note: "The retreat: the texts disagree. The English Wikipedia says nine days of retreat, the Portuguese one, eight. Some accounts describe the scene as an ambush planned on the other side of the river; others describe it as a pursuit over days that ended in a battle in the open field." },
        { note: "The banquet: the image of the princes crushed under the boards comes from the Russian chronicles, and is the most cited account. Kamenir notes that the scene respects the Mongol custom of not spilling the blood of nobles, except in battle." }
      ]}
    ]
  },

  kirina: {
    war: "War between the Sosso and the Mandinka (c. 1235)",
    hook: "A battle we know only through the voice of the griots, and which founded one of the richest empires in history.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of the 12th century, the Empire of Ghana, which for centuries had controlled the gold and salt trade in the West African savanna, had collapsed, after internal disputes and the intervention of the Almoravids. Smaller states filled the void. Among them were the Sosso, of the kingdom of Kaniaga, and the Mandinka, of the Upper Niger.",
        "The Sosso were, at the start, a clan of slaves of the king of Ghana who gained power in the bureaucracy and the army. Sumanguru Kanté, according to tradition, was chief of the royal slaves and governor of a province. He took Koumbi Saleh, the old capital of Ghana, and dominated neighbors, including Mandinka chiefdoms to the south. Heinrich Barth dated the seizure of power to around 1203. The older chronology, by Delafosse, which placed Sumanguru's father in power as early as 1180, is rejected by many historians.",
        { h: "The road to Kirina" },
        { timeline: [
          ["Around 1200", "The Sosso, under Sumanguru, take power in Ghana and dominate their neighbors (dates uncertain)."],
          ["Around 1217", "Sundiata is born, son of the Mandinka king Naré Maghann Konaté and of Sogolon Condé."],
          ["Following years", "With his father's death, Sundiata and his mother go into exile and end up in Mema. Messengers persuade him to return."],
          ["Around 1235", "Battle of Kirina."],
          ["Around 1255", "Sundiata dies, according to the most accepted date."]
        ]},
        "According to tradition, after the father's death Sundiata's half-brother, Dankaran Touman, fled before Sumanguru. Sogolon took her children into exile, and they found shelter in the kingdom of Mema. There Sundiata grew strong and was admired by the king. Messengers from the oppressed Mandinka sought him out, and he returned with an army that the king of Mema supplied. He allied with other young chiefs, and they sealed a pact on the plain of Siby."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Sundiata Keita" },
        "Born around 1217 in Dakadjalan. The names vary: Sundjata, Sunjata, Mari Djata (as cited by Ibn Khaldun, written more than a century later), Soundiata. According to the epic, he was an exiled prince who returned to free his people. He built coalitions rather than imposing himself by force: he gathered young chiefs, each with his own people, and after the triumph let the regions return to their owners.",
        { h: "Sumanguru Kanté" },
        "Also spelled Soumaoro or Sumaworo. In Mandinka tradition, he is a cruel sorcerer-king who oppresses peoples. Wikipedia lists that he would have beheaded Muslim kings who opposed him, and that many Soninke fled his rule. But there is an important caveat: we have no independent proof that he was the villain tradition remembers. Historians also debate whether he existed as tradition describes him. According to Conrad (1984), it is possible that the deeds of several kings of the Kanté family were attributed to one.",
        { h: "The other names" },
        "Fakoli Koroma, Sumanguru's nephew and general: according to tradition, he changed sides after his uncle took his wife. The king of Mema, who gave cavalry to Sundiata (the versions differ on his name). Fran Kamara, chief of Tabon and Sundiata's childhood friend. Nana Triban, Sundiata's sister, forced to marry Sumanguru, and Balla Fasséké, Sundiata's griot, who escaped from Sumanguru's tower and discovered his secret."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "What can be known" },
        "First of all, a warning: there is no written account of the battle from its time. What we know comes from the [[griots|griô]], who passed the story down from generation to generation, and it was only written down centuries later. The best-known version is that of Djibril Tamsir Niane (1960), based on the voice of the griot Mamadou Kouyaté, but there are more than sixty versions, and the plot changes depending on the teller. The oldest written source is Ibn Khaldun, more than a hundred years later. Nobody gives numbers for the armies.",
        { note: "What follows is the story as the griots tell it, in Niane's version. Historians find it plausible that Kirina was a real confrontation, in which a coalition of chiefdoms defeated the Sosso, but the details, such as the magic and the arrow, belong to the epic." },
        { h: "The terrain" },
        "The plain of Kirina, in the Koulikoro region, in present-day Mali. The exact place is debated, and there is no description of the terrain in the sources we consulted.",
        { h: "The battle, according to the epic" },
        "First, Sumanguru advances to Kirina and declares war on Sundiata, who promises not to retreat. On the eve, Sundiata gives a great feast for the troops, and Balla Fasséké sings the history of Mali to remind him of his birthright.",
        "Second, the clash. The battle begins evenly matched. Sundiata's allies are outnumbered, according to one version. The cavalry of Mema ends up breaking the enemy center.",
        "Third, Manding-Bory warns that Sumanguru has fallen on the army's left flank. Sundiata turns the cavalry that way and barely holds the line.",
        "Fourth, Sundiata looks for Sumanguru, who stayed well behind his men. The secret, discovered by Nana Triban and Balla Fasséké, is that his [[totem]] was the white rooster, and only a rooster's spur could wound him. Sundiata fixes one to his bow and shoots, and the arrow only grazes Sumanguru's shoulder. It is enough: he trembles, sees a black bird in the sky, a sign of bad luck, and flees.",
        "Fifth, without their chief, the Sosso army gives way. Sundiata pursues the enemy day and night, to Mount Koulikoro, where Sumanguru vanishes into a dark cave. Afterward, he surrounds the city of Sosso, breaches the wall in a day and orders it destroyed.",
        { note: "Other versions change the detail: in one, the one who wounds Sumanguru is a spear thrust from another hero, Sangaran Danguina; in others, it is Sundiata who shoots." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Tradition says the Sosso kingdom was destroyed and its remnants dispersed. The remnants of the Sosso moved west or south and gave rise to the Susu and the Yalunka. For some scholars, these populations were already there before the empire and moved gradually, not in a great rupture.",
        "On Sumanguru, the sources differ: in the epic he vanishes into the mountains of Koulikoro and is never seen again. Wikipedia, in the article on the Sosso Empire, says he was killed.",
        { h: "What came after" },
        "Sundiata made Niani, near the present border between Mali and Guinea, his capital. Mali controlled most of West Africa for two centuries. According to tradition, the authority of the [[mansa]] was limited by an assembly, the Gbara, and the rules of the kingdom were gathered in the Manden Charter (Kouroukan Fouga), which UNESCO recognizes as intangible cultural heritage. On his death, around 1255, according to the most common version, he drowned in the Sankarani River, near Niani. There are other versions: an accidental arrow during a ceremony, or assassination.",
        { h: "Why it matters" },
        "Kirina is the traditional beginning of the Mali Empire, one of the richest in history, and inspired Mali's national epic. Mansa Musa, the most famous ruler of Mali, is the grandson of one of Sundiata's brothers in Niane's version, that is, a grand-nephew; other sources disagree, and Ibn Battuta gives another name for his grandfather. Britannica describes him as widely considered the richest person in history, but historians say there is no way to calculate that wealth.",
        { h: "Curiosities and controversies" },
        { note: "The date: 1235 is the date cited in Wikipedia, from a reference work (Carruth, 1993). No document from the time confirms it." },
        { note: "The place: Wikipedia gives the coordinates 12°18′N, 8°09′W, in the Koulikoro region. The exact spot of the battle is not known." },
        { note: "The balafon: tradition says that Sumanguru had a magic balafon, which Balla Fasséké stole and took to Manden. This is where the tradition of balafon-playing griots would come from. The Kouyaté family says it still keeps the instrument in Niagassola, in Guinea." }
      ]}
    ]
  },

  mohi: {
    war: "Mongol invasion of Europe (1241–1242)",
    hook: "The Hungarian army shut itself in a circle of wagons. It was what the Mongols wanted.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1223, the Mongols had defeated a Russian and Cuman army on the Kalka River and gone away. The Cumans who survived, about 40,000 people, fled to Hungary, and King Béla IV took them in. He was trying to convert them to Christianity and styled himself 'king of Cumania'. For the Mongols, the Cumans were their subjects, Hungary was a rival, and the flight was grounds for war. The threat included the accusation that Hungary had made Mongol envoys disappear.",
        "Within the country, Béla faced the discontent of many nobles. To strengthen royal power, he had taken back lands granted by his father and executed or expelled his father's advisers, and his protection of the Cumans irritated the nobility even more.",
        { h: "The road to Mohi" },
        { timeline: [
          ["12 March 1241", "The main army, of Batu and Subutai, passes the Verecke Pass and destroys the army of the count palatine Denis Tomaj."],
          ["Mid-March", "The Mongol vanguard reaches Pest (15 March). The Cuman khan, under the king's protection, is killed in a riot, and the Cumans leave the country."],
          ["9 April", "In the north, the Mongols defeat Duke Henry II of Silesia at Legnica."],
          ["10 April", "The Hungarians reach the Sajó, swollen with flood water, and set up a wagon camp."],
          ["11 April", "Battle of Mohi."]
        ]},
        "The Mongols attacked with three armies: one in the north, which ended at Legnica; one in the south, in Transylvania; and the main one, of Batu and Subutai. There were few stone castles along the way, because the Hungarian kings restricted private castles. Béla had ordered barricades of trees raised on the borders, and the specialized Mongol units cleared them in about three days. Béla ordered everyone to gather at Pest, but many did not arrive. Some were destroyed on the way, and many nobles refused to fight."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Béla IV, king of Hungary" },
        "He had called in the Cumans and now saw his kingdom collapse. According to the account, he forbade attacks on the Mongols while the army assembled, and when he offered battle, the Mongols withdrew, which the lords took as cowardice. At Mohi, he ordered a wagon camp, but did not have the defense prepared.",
        { h: "Batu and Subutai" },
        "Batu and Subutai commanded the main army. According to the Yuan Shi, after the battle there was a dispute between the two: Güyük and Büri accused Batu, and Subutai's version of the river crossing was accepted at a banquet. Carpini tells something else: Batu would have rallied the army. At Mohi, Batu proposed withdrawing when the attacks failed, but Subutai refused, and the attack continued.",
        { h: "The other names" },
        "On the Hungarian side, Duke Kálmán (Coloman), the king's brother; Archbishop Ugrin Csák, whose army had already been stuck in a swamp in March; and Rembald of Voczon, master of the [[Templars|templários]]. On the Mongol side, Sejban (Shiban), who crossed the river to the north, and Kadan, who later pursued Béla. The main sources are Thomas of Split and Master Roger (Rogerius), canon of Várad, author of the Carmen miserabile."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Nobody knows for certain. The Hungarian chroniclers speak of up to 500,000 Mongols. Rashid al-Din speaks of about 40,000 horsemen for the entire invasion of Central Europe, which would leave 15,000 to 30,000 at Mohi. McLynn suggests some 20,000 Mongols against 25,000 Hungarians, while Sverdrup speaks of at least 30,000 nominal Mongols. For the Hungarians, modern estimates range from some 15,000 to 60,000 and even 50,000 in other works.",
        { note: "Almost all the numbers are uncertain. We use ranges, with the authors, instead of a single figure." },
        { h: "The terrain" },
        "The plain of Mohi, beside the Sajó River, in northeastern Hungary. The river was in flood. The Sajó was crossed by a bridge of at least 200 meters. The Hungarians stayed on this side, in a camp ringed with wagons. The Mongols, unseen, stayed on the other side, in the brush.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, the Hungarians shut themselves in the wagon camp, a protection against nomad armies. A Russian slave warned that there would be a night attack on the bridge.",
        "Second, in the dead of night, Kálmán, Ugrin and the Templar master left the camp and attacked the Mongol vanguard that Batu had sent to hold the bridge. Thomas of Split says the Hungarians pushed the Mongols off the bridge and many drowned. They returned to camp around two in the morning and celebrated.",
        "Third, at dawn, Sejban crossed a ford to the north to attack the bridge guards from behind, and Subutai went south to build an emergency bridge. Batu, with seven siege engines, attacked the bridge.",
        "Fourth, Batu's attack and Sejban's arrival forced the Hungarians back to the camp. The bulk of the Mongol army finished crossing around eight in the morning.",
        "Fifth, Kálmán, Ugrin and the Templar master went out again, realized it was the main army and went back to fetch reinforcements. The king had not ordered anything prepared, and Ugrin rebuked him in public. The delay gave Batu time to cross.",
        "Sixth, the fight in the field was hard. The Hungarians outnumbered Batu's force, and the Mongols had the river behind them. Batu lost about thirty bodyguards and his lieutenant Bakatu. Subutai attacked the Hungarian rear, and the Hungarians fell back to the camp.",
        "Seventh, the Mongols bombarded the camp with stones, incendiary arrows and, according to some authors, perhaps gunpowder, which is disputed. The tents caught fire, and there was panic and trampling.",
        "Eighth, the Mongols left a gap on purpose, a tactic attributed to Sun Tzu. The Hungarians fled through it and were hunted down and killed. Archbishop Ugrin died, Kálmán was wounded and died shortly after, and Béla escaped."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The source closest to the time, the Echternach Notice (Epternacher Notiz), counts 10,000 Hungarian dead, almost the whole army. Other sources speak of 70,000, but Wikipedia does not accept that number. Mongol losses are unknown: estimates range from several hundred (McLynn) to several thousand. Carpini says there was a cemetery in Russia for Mongols killed in the Hungarian campaign.",
        "The Mongols took Pest and burned it. Kadan pursued Béla, who fled to Austria. Duke Frederick II held him, demanded a large ransom and forced him to cede three counties in the west. Later Béla took refuge in the castle of Trogir, on the Adriatic, until the Mongols left. The population of Hungary fell between 15% and 25%: 25% is the traditional number, and Veszprémy speaks of about 15%.",
        { h: "Why it matters" },
        "The Mongols began to withdraw at the end of March 1242 and left Central Europe in mid-year. The most cited reason is the death of the great khan Ögedei, on 11 December 1241, which obliged the princes to return for the election of a successor. Stephen Pow thinks that a messenger's travel time makes this difficult. Other explanations: a wetter and colder climate, which flooded the pastures; losses in sieges; a Cuman rebellion; the lack of pasture. Some think Batu never planned to advance further.",
        "Béla returned and rebuilt the kingdom. He recovered cities in the west, strengthened the stone castles and expanded the heavy cavalry, and earned the nickname 'second founder' of Hungary. Never again did a Mongol army capable of besieging fortified cities threaten Western Europe.",
        { h: "Curiosities and controversies" },
        { note: "The date: most sources give 11 April 1241. Britannica gives 10 April, and the Wikipedia article on the invasion of Europe speaks of an attack on the night of the 10th to the 11th." },
        { note: "The details of the crossing: the sources differ. The English Wikipedia and the New World Encyclopedia put Sejban at the ford to the north and Subutai building a bridge to the south. Other accounts have Subutai crossing the ford and attacking the camp from behind." },
        { note: "The gunpowder: some say the Mongols used Chinese gunpowder bombs at Mohi. The evidence is speculative, and Wikipedia leaves the question open." },
        { note: "Batu's saying: according to one account (Medievalists.net), Batu saw the camp full and ringed with wagons and said the Hungarians were packed in like cattle in narrow stalls." }
      ]}
    ]
  },

  peipus: {
    war: "Northern Crusades (13th century)",
    hook: "The scene of the ice cracking and the knights sinking is the most famous of the battle. It is probably an invention of the movies.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "For centuries, the Republic of Novgorod tried to subdue and convert the pagan Estonians. In 1224, the Livonian Brothers of the Sword took the city of Yuryev (today Tartu), which became the capital of the bishopric of Dorpat. A peace treaty of 1224 favored Novgorod, and then came family ties: Prince Vladimir Mstislavich of Pskov married a daughter to Theodoric of Buxhövden, brother of the bishops of Riga and Dorpat.",
        { h: "The road to Lake Peipus" },
        { timeline: [
          ["15 July 1240", "According to Russian sources, Alexander Yaroslavich defeats the Swedes of Birger Jarl on the Neva River. No Swedish source mentions it."],
          ["September 1240", "The crusaders take Izborsk and Pskov."],
          ["Late 1240 or early 1241", "Novgorod, afraid of Alexander's strength, expels him to Pereslavl-Zalessky."],
          ["1241", "Alexander is called back and retakes Koporye and Pskov from the crusaders."],
          ["Spring 1242", "German knights defeat a Novgorod detachment some 20 km south of Dorpat. Alexander takes position on Lake Peipus."],
          ["5 April 1242", "Battle of Lake Peipus."]
        ]},
        "In the winter of 1240–41, the bishopric of Ösel-Wiek and the [[Livonian Order|ordem livoniana]] made a campaign in Votia, and Novgorod counterattacked. Pskov was an important prize: for the historian Riley-Smith, the city was the centerpiece of the crusade in the east.",
        { note: "There are doubts about the exact year Pskov was retaken: the article on Alexander speaks of 1241, but other narratives place it in March 1242. The chronicles use different calendars." }
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Alexander Yaroslavich, prince of Novgorod" },
        "Born in 1221 (or 1220; the date is uncertain), he was about 21 years old. He was named prince of Novgorod in 1236 by the republic and by his father, and ruled alone from 1238. The nickname 'Nevsky', from the victory on the Neva, only appears in the 15th century. Later, in 1259, he forced Novgorod to pay tribute to the Golden Horde, and in 1263 he visited the khan Berke at Sarai. He died on 14 November 1263, aged 42, on his way back from there. The Orthodox Church canonized him in 1547.",
        { h: "Hermann of Dorpat" },
        "Bishop of Dorpat and brother of Bishop Albert of Riga. He is cited as commander on the crusader side.",
        { h: "The other names" },
        "On the Russian side, Andrei, Alexander's brother, sent by their father, Yaroslav, to help him, according to the Suzdal chronicle. The German accounts hardly name anyone."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary widely and no ancient source gives them. Nicolle (1996) estimates the crusaders at about 2,600: 800 Danish and German knights, 100 Teutonic, 300 Danes, 400 Germans and 1,000 Estonian foot soldiers. For Novgorod, about 5,000: some 1,000 from the [[druzhina|druzhina]] of Alexander and Andrei, 2,000 Novgorod militiamen, 1,400 Finns and 600 horse archers. Dahlmann (2003) gives wider ranges: from 200–400 to 1,800 crusaders, and from 400–800 to 6,000–7,000 Russians.",
        { note: "The Livonian Rhymed Chronicle says there were sixty Russians for each German knight, a clearly exaggerated number." },
        { h: "The terrain" },
        "Lake Peipus, on the border between Estonia and Russia, frozen in April. According to that chronicle, Alexander positioned the army at Uzmen, beside the Raven's Stone. The exact place of the battle is unknown. In 1958–59, divers searched for objects in the north of the lake and found nothing, which was to be expected, given the sources.",
        { h: "The battle" },
        "The main sources tell slightly different stories. The First Novgorod Chronicle says the Germans and Estonians drove into Alexander's army like a wedge, and that the pursuit on the ice went as far as seven versts before the shore of Subol. Nicolle and Hellie (2006) describe it this way:",
        "First, the crusaders and Teutonic knights charged across the lake and reached the enemy. Second, the Novgorod militia infantry held them and slowed the attack. Third, after a little over two hours of hand-to-hand fighting on the slippery ice, Alexander ordered the right and left wings, with the cavalry, into the battle. Fourth, the crusaders, exhausted, began to fall back in disorder across the ice. Fifth, fresh Novgorod cavalry provoked a panicked flight.",
        "The Livonian Rhymed Chronicle, written in the 1290s by the Order, also says the brothers were surrounded, but states that the dead fell 'on the grass', and not on the ice.",
        { h: "Did the ice break?" },
        "No primary source speaks of ice breaking or of drownings. The Rhymed Chronicle speaks of dead 'on the grass'. The Life of Alexander Nevsky, from the mid-15th century, was the first to place the battle on the ice, with the bodies covering the surface with blood. According to Ostrowski (2006), the image of the knights sinking comes from Eisenstein's 1938 film, and perhaps from accounts of another battle on the ice, that of Liubech, in 1016."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The losses also vary. The Livonian Rhymed Chronicle speaks of 20 brothers killed and 6 captured. The First Novgorod Chronicle speaks of 400 Germans killed, 50 taken to Novgorod and 'countless' Estonians killed; the newer version of the chronicle (1440s) raises the Germans killed to 500. There is no number for Russian losses.",
        "After the battle, according to the Novgorod Chronicle, the Germans gave back the lands they had taken, exchanged prisoners, released the hostages of Pskov and made peace, in 1242.",
        { h: "Why it matters" },
        "The defeat prevented the crusaders from retaking Pskov and stopped the expansion to the east. According to Hosking (2001), the Narva River and Lake Peipus became a stable border between Orthodoxy and Catholicism.",
        "The myth is bigger than the battle. The Church canonized Alexander in 1547. In 1938, Eisenstein's film fixed the image of the knights sinking. In 1942, in the midst of the war against Germany, the Soviet Union created the Order of Alexander Nevsky. The battle is remembered today in Russia as a day of military glory.",
        { h: "Curiosities and controversies" },
        { note: "The revisionism: Fennell (1983) argued that the battle was smaller than it is painted, that most of the Teutonic knights were elsewhere and that the Suzdal chronicle and the Swedish sources hardly mention it. Ostrowski says the Suzdal chronicle mentions it only in passing." },
        { note: "The coordinated crusade: Donner (1929) held that the Swedish, Danish and German campaigns against Novgorod were coordinated by the Curia. Recent historians reject this for lack of proof. Selart says the papal bulls of 1240–43 cite only non-Christians, not the Russians." },
        { note: "The scale: Fennell and Fonnesberg-Schmidt think the later Russian sources exaggerated the battle on the lake. As for the Neva, the victory of 1240 appears only in Russian sources, and Wikipedia considers it probably a small clash." },
        { note: "The film: Smith and Urban (1977) say that Eisenstein's film reveals more about the time in which it was made than about 1242." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  mohi: {
    terrain: [
      { t: "sea", x: 44, y: 0, w: 8, h: 70, l: "" },
      { t: "note", x: 48, y: 5, l: "Sajó River" },
      { t: "note", x: 48, y: 41, l: "Bridge" }
    ],
    units: [
      { id: "hCamp", s: "b", k: "camp", w: 30, h: 22, l: "Wagon camp" },
      { id: "hArmy", s: "b", k: "cav", w: 14, h: 6, l: "Hungarian army" },
      { id: "hSort", s: "b", k: "cav", w: 11, h: 5, l: "Kálmán, Ugrin and Templars" },
      { id: "mBatu", s: "a", k: "cav", w: 14, h: 6, l: "Batu (seven engines)" },
      { id: "mSej", s: "a", k: "cav", w: 11, h: 5, l: "Sejban" },
      { id: "mSub", s: "a", k: "cav", w: 12, h: 5, l: "Subutai" }
    ],
    steps: [
      { t: "The Hungarians shut themselves in a wagon camp on the west bank of the Sajó, in flood. The Mongols wait on the other side, in the brush, unseen.",
        p: { hCamp: [24, 38], hArmy: [24, 38], hSort: [34, 30], mBatu: [76, 38], mSej: [80, 12], mSub: [80, 60] } },
      { t: "On the night of 10 to 11 April, Kálmán, Ugrin and the Templar master go out and attack the Mongols holding the bridge. Many drown.",
        p: { hSort: [46, 38], mBatu: [64, 38] } },
      { t: "The Hungarians return to camp around two in the morning and celebrate. The king has not ordered the defense prepared.",
        p: { hSort: [32, 38], mBatu: [72, 38] } },
      { t: "At dawn, Sejban crosses a ford to the north, to attack the bridge guards from behind. Subutai goes south, to build an emergency bridge.",
        p: { mSej: [48, 12], mSub: [48, 60] } },
      { t: "Batu attacks the bridge with seven siege engines. The Hungarians fall back to the camp while Sejban arrives from the north.",
        p: { mBatu: [48, 38], mSej: [40, 28, -30], hSort: [32, 40], mSub: [42, 58] } },
      { t: "Around eight, the bulk of the Mongol army has finished crossing. The Hungarians go out to fight, but without overall command. Batu loses bodyguards and his lieutenant.",
        p: { mBatu: [38, 38], hSort: [32, 38], hArmy: [28, 38], mSej: [34, 26, -30] } },
      { t: "Subutai strikes the Hungarian rear. The Hungarians fall back to the wagons, which the Mongols bombard with stones and incendiary arrows.",
        p: { mSub: [26, 54, -60], mBatu: [34, 38], mSej: [26, 24, -40], hArmy: [24, 38] } },
      { t: "The Mongols leave a gap on purpose. The panicked Hungarians flee through it, and are hunted down. Kálmán and Ugrin die. King Béla escapes.",
        p: { hArmy: [12, 56, 40], hSort: [14, 50, 40], mBatu: [24, 44, 60], mSej: [22, 24, -40], mSub: [24, 54, -60] }, x: ["hArmy", "hSort", "hCamp"] }
    ]
  }
});
