// In-depth battles, batch i: qatwan, dannoura, hattin, tarain, yehuling, navas.
// Checked against the English, Portuguese and Spanish Wikipedia articles and the works they cite (Biran, Nowell,
// Turnbull, Sansom, Minhaj-i-Siraj and Firishta via translations, Alvira Cabrer, García Fitz), plus Nippon.com,
// EBSCO and Artelino. Where the sources disagree, the text gives the range and says who says what.

Object.assign(GLOSSARY, {
  "qara khitai": "An empire founded in Central Asia by the Khitans who fled China after 1125. The Chinese call it the Western Liao. It lasted almost a century, until the Mongols arrived.",
  "khitans": "A people who ruled northern China as the Liao dynasty, until the Jin overthrew them in 1125.",
  "gürkhan": "A title that Yelü Dashi took in 1132 and his successors kept. It means roughly 'universal khan'.",
  "transoxiana": "The region of Central Asia around Samarkand and Bukhara, in present-day Uzbekistan, between the Amu Darya and Syr Darya rivers.",
  "karakhânidas": "A Muslim Turkic dynasty that ruled Central Asia. By the time of Qatwan it was split into an eastern and a western branch, and the western one obeyed the Seljuks.",
  "preste joão": "A legendary Christian king of the East, whom medieval Europeans hoped would come to help against the Muslims.",
  "dinar": "The gold coin of the medieval Islamic world.",
  "samurai": "A Japanese professional warrior, in the service of a lord and a clan. ",
  "clã": "A large family, with relatives, allies and followers, that acts as a single group. In Japan at the time, the main ones were the Taira and the Minamoto.",
  "xogum": "The military ruler of Japan, appointed by the emperor. In practice he was the one in charge, and the emperor remained a sacred figurehead. The shogun's government is called the shogunate.",
  "três tesouros": "The regalia of the Japanese emperor: a mirror, a jewel and the sword Kusanagi. Whoever held them was seen as the legitimate emperor.",
  "templários": "A Christian military order of warrior monks, created to protect pilgrims in the Holy Land. Its knights were among the best in the crusader army.",
  "hospitalários": "A Christian military order that began by caring for the sick in Jerusalem and then took up fighting. Together with the Templars, it was the elite force of the crusader kingdoms.",
  "turcopolos": "Light horsemen, often of Turkish or Arab origin, who fought in the service of the crusaders and shot with bows.",
  "vera cruz": "The relic believed to be a piece of the cross of Jesus. The crusaders carried it at the head of the army, like a sacred banner.",
  "aiúbidas": "The Kurdish dynasty founded by Saladin, which ruled Egypt and Syria in the 12th and 13th centuries.",
  "reino de jerusalém": "The main crusader state, created by the First Crusade in Palestine. It ruled Jerusalem and part of the coast.",
  "rajputs": "Warrior clans of northern and western India, who ruled several kingdoms.",
  "guridas": "The Turkic-Afghan dynasty from the Ghor mountains, in present-day Afghanistan, which conquered northern India at the end of the 12th century.",
  "sultanato de déli": "A Muslim state in northern India, founded in 1206 by Qutb al-Din Aibak, a former military slave of the Ghurids.",
  "jin": "The dynasty of the Jurchens, a people of Manchuria, which dominated northern China until it was destroyed in 1234. Its capital, Zhongdu, stood where Beijing is today.",
  "estepe": "A great dry, treeless plain covered in grass, home to the nomadic horse-breeding peoples.",
  "almóadas": "A Berber dynasty from Morocco that dominated North Africa and the south of the Iberian Peninsula in the time of Las Navas.",
  "reconquista": "The long process, lasting centuries, in which the Christian kingdoms of the north of the Iberian Peninsula took the lands ruled by Muslims.",
  "ordens militares": "Brotherhoods of warrior monks, such as Santiago, Calatrava and the Templars. They had their own castles, lands and knights, and fought on the front line of the Reconquista.",
  "mesnada": "The personal troop of a king or noble in medieval Iberia, made up of his knights and vassals.",
  "concelhos": "Medieval towns and cities of the Iberian Peninsula, which had autonomy and sent their citizen militias to the king's war.",
  "guarda negra": "The personal guard of the Almohad caliph, made up of soldiers from Africa south of the Sahara, armed with great spears."
});

Object.assign(DEEP, {
  qatwan: {
    war: "Expansion of the Qara Khitai in Central Asia (1130–1143)",
    hook: "A prince exiled from China defeated the most powerful sultan in Islam, and the news reached Europe transformed into legend.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1125, the Jin dynasty, made up of Jurchens from Manchuria, destroyed the [[Khitans|khitans]] empire of northern China, the Liao dynasty. Some Khitan princes fled. One of them, Yelü Dashi, a distant relative of the dynasty's founder, gathered followers and went west. He was a cultured man who had passed the highest Chinese imperial examination in 1115, and he was also a good archer and horseman.",
        "On the other side of Asia, the Muslim world was governed in large part by the [[Seljuks|seljúcidas]]. The [[sultan|sultão]] Ahmad Sanjar was the Seljuk ruler and had as [[vassals|vassalo]] the [[Karakhanids|karakhânidas]] of Transoxiana, the region of Samarkand. Between Sanjar and Yelü Dashi lay steppes, deserts and small Turkic kingdoms, and one of them was the spark.",
        { h: "The road to Qatwan" },
        { timeline: [
          ["1124", "Yelü Dashi leaves Chinese territory and heads northwest. At Kedun, on the Orkhon River, he gathers about 20,000 horsemen from local tribes."],
          ["1130", "He sets out west with fewer than 20,000 men and settles near the Emil River."],
          ["1132", "His followers proclaim him [[Gürkhan|gürkhan]]."],
          ["1134", "He takes Balasagun, in present-day Kyrgyzstan, and makes it his capital. There he inherits more than 16,000 Khitans who had served the former ruler."],
          ["1137", "At Khujand he defeats the western branch of the Karakhanids, a vassal of the Seljuks."],
          ["1141", "Sanjar arrives at Samarkand with his army. On 9 September, the two sides meet."]
        ]},
        "The ruler of Samarkand, Mahmud II, asked Sanjar for protection after Khujand. According to what Wikipedia summarizes from Michal Biran, the Khitans were also invited by others, the Khwarazmians, who were vassals of the Seljuks, and they answered the request of the Karluks, Turkic tribes in conflict with the Karakhanids and the Seljuks. In other words, the war grew out of disputes among the Turkic peoples of the region, and the Khitans entered it by invitation."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Yelü Dashi, the Gürkhan" },
        "He was born in 1087 or 1094; the sources differ. He wrote Khitan and Chinese, served as governor of two cities and, before the fall of the Liao, escaped from Jin captivity after five months. What he did next is more unusual than any battle: he took an army of refugees and a handful of tribes and created, on the other side of the continent, a state that lasted almost a century. Juvaini, the Persian historian, wrote of the taking of Balasagun in 1134 that he climbed onto a throne that cost him nothing. He was a Buddhist.",
        { h: "Ahmad Sanjar, Seljuk sultan" },
        "He was the ruler of the Seljuks and, according to al-Husayni's account, did not have the united support of his emirs. When the fighting grew fierce, the troops began to fall back and left him with few soldiers.",
        { h: "Other names" },
        "On the Seljuk side, the emir Kumach and his wife, Turkan-Khatun, were captured. Abu'l Fadl, an adviser, appears in the story of how Sanjar escaped. On the Khitan side, the names of the commanders have not come down to us reliably."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Nobody knows how many there were. Ibn al-Athir, a Muslim historian, gives Yelü Dashi 300,000 horsemen and Sanjar 100,000. The historian Michal Biran points out that numbers of this kind serve to explain a defeat or to enhance a victory and should not be read literally. Modern historians cite anything from 20,000 (M. S. Asimov) to 300,000 or 700,000 (the exaggerated numbers of the Muslim sources) for the Khitans. Biran gives the Karluks, who reinforced the Khitans, 30,000 to 50,000 horsemen.",
        { note: "The sources that describe the battle in detail are few, and they were written by Muslims, from the defeated side, generally many years later. The layout of the troops and Yelü Dashi's plan are not known with certainty, so there is no diagram." },
        { h: "The terrain" },
        "The battle took place on the steppe of Qatwan, north of Samarkand, on 9 September 1141. The name of one spot has survived: the wadi of Dargham, a dry gully some 12 km from the city.",
        { h: "What is known of the battle" },
        "According to Wikipedia's summary, the Khitans attacked the Seljuk army from several sides at once and surrounded it. The Seljuk center was pushed into the wadi of Dargham, and there the army was destroyed. How many died is also uncertain: the sources speak of 11,000 to 100,000 dead.",
        "The rest comes from al-Husayni. In his account, Sanjar's emirs disagreed about what to do, and the troops began to withdraw, leaving the sultan with few men. Abu'l Fadl, the adviser, suggested that an ordinary soldier take Sanjar's place so that he could escape. Sanjar did so. Abu'l Fadl stayed with the substitute and was captured soon afterward.",
        "Sanjar escaped narrowly, and Yelü Dashi did not pursue him. According to the same source, when the sultan was trying to reach Balkh, the Gürkhan ordered his men not to block the way, because an enemy with no way out fights with desperation.",
        { h: "The prisoners" },
        "Turkan-Khatun, Sanjar's wife, was ransomed for 500,000 dinars. The emir Kumach and his son were ransomed for 100,000. Abu'l Fadl was released without ransom, after Yelü Dashi learned that the sons of the ruler of Sistan had seized their father's property. According to the account, the Gürkhan also remarked that so brave a man should not be executed."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Yelü Dashi spent 90 days in Samarkand, accepted the loyalty of the Muslim nobles and put Ibrahim, Mahmud's brother, in charge of the city. The Burhan family continued to rule Bukhara. In 1142, he sent Erbuz to attack Khwarazm, and the ruler Atsiz agreed to pay 30,000 [[dinars|dinar]] a year. Yelü Dashi died in 1143 (the date 1144 also appears), and his wife, Xiao Tabuyan, took over as regent.",
        "The Seljuks lost [[Transoxiana|transoxiana]]. Sanjar lived on until 1157, but his power shrank. In 1153, the Oghuz revolted in Khorasan, and he was captured. He escaped in 1156, unable to restore his authority, and died the following year.",
        { h: "Why it matters" },
        "With Qatwan, the Qara Khitai (or Western Liao) came to dominate Transoxiana, and Seljuk power entered decline. Khwarazm and the Karakhanids became vassals of the Khitans.",
        { h: "Curiosities and controversies" },
        { note: "Prester John: in 1145, a bishop of Jabala, in Syria, came to the pope saying that a Christian king named John, from beyond Persia, had defeated the Muslims. Otto of Freising recorded the story. Modern historians link the rumor to Qatwan (this is the explanation in Charles Nowell's 1953 study). But the victors of Qatwan were the Khitans, who were Buddhists, not a Christian king. The legend of [[Prester John|preste joão]] was born from this confusion." },
        { note: "The numbers: some 300,000 Khitan horsemen against 100,000 Seljuks appear in Ibn al-Athir, but Nowell calls the first number an obvious exaggeration." }
      ]}
    ]
  },

  dannoura: {
    war: "Genpei War (1180–1185)",
    hook: "In a strait of treacherous currents, the tide turned in the afternoon and carried off a whole clan and a six-year-old emperor.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 12th century, the emperor of Japan reigned in Kyoto, but the ones who truly ruled were the [[samurai]] clans. Two [[clans|clã]] hated each other: the Taira, who held power at court, and the Minamoto, who had been nearly destroyed by them in the Heiji rebellion of 1159–1160. In 1180, the head of the Taira, Taira no Kiyomori, put his grandson on the throne, the emperor Antoku, who was then about two years old. It was too much for their rivals.",
        "The war that began there is called the Genpei War, a name formed from the two clans. It lasted six years. The Minamoto, led by Minamoto no Yoritomo, gained ground, and in 1183 the Taira fled Kyoto taking the child emperor and the imperial regalia, the [[three treasures|três tesouros]]. Whoever held them was seen as the legitimate ruler, and so for the Taira they became hostage and burden at the same time.",
        { h: "The road to Dan-no-ura" },
        { timeline: [
          ["1180", "Kiyomori puts Antoku on the throne. The war begins, with the battle of Uji."],
          ["1183", "The Taira are defeated at Kurikara and flee Kyoto."],
          ["1184", "At Ichi-no-Tani, Yoshitsune and Noriyori attack from two directions and push the Taira back toward the sea."],
          ["Early 1185", "At Yashima, Yoshitsune's attack, apparently by land, makes the Taira flee by ship, with Antoku and the regalia."],
          ["25 April 1185", "The two sides meet in the Shimonoseki Strait."]
        ]},
        "On the date: the traditional reckoning gives the 24th day of the third month of the Japanese lunar calendar, which corresponds to 25 April in our calendar. The official Shimonoseki page uses 24 March, probably because it did not convert the month."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Minamoto no Yoshitsune" },
        "Yoritomo's half-brother and commander of the naval forces, he is remembered as the great general of the war. It was he who defeated Yoshinaka at Awazu and the Taira at Ichi-no-Tani and Yashima. At Dan-no-ura, he fought in person. The Heike Monogatari tells how Taira no Noritsune tried to drag him into the sea and how he escaped by leaping to another boat. In the work, the leap is a single one. Later accounts inflated it into the famous leap across eight boats.",
        { h: "Taira no Tomomori" },
        "Commander of the Taira. According to tradition, after seeing his family and his men drown, he took his own life. In later versions, from Noh theater and kabuki, he appears holding an anchor.",
        { h: "The other names" },
        "On the Minamoto side: Noriyori commanded the forces on land. Kajiwara Kagetoki handled espionage. On the Taira side: Taira no Tokiko, Kiyomori's widow, the emperor's grandmother. And Taguchi Shigeyoshi, a Taira general whose son was held prisoner by the Minamoto. Even with advisers telling him to remove him or have him executed, the Taira commander trusted him, and was betrayed."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The sources do not agree. The Azuma Kagami, the chronicle of the Minamoto government, gives the Minamoto 800 ships and the Taira 500. The Heike Monogatari gives 3,000 and 1,000. In both versions, the Minamoto had more boats. Casualties: the sources say only that the Taira were annihilated.",
        { h: "The terrain and the tide" },
        "The Kanmon Strait, at Shimonoseki, is the narrow passage between the islands of Honshu and Kyushu. The current changes direction four times a day and reaches about 18 km/h near Hayatomonoseto. The Taira knew these movements, and that was their trump card. The Taira brought the child emperor, with courtiers in full court dress, to show legitimacy and lift morale.",
        { h: "The day" },
        "The Taira divided the fleet into three squadrons. The Minamoto came together, with ships side by side and archers ready. The battle began with an exchange of arrows at a distance. The morning current favored the Taira, who tried to use it to surround the Minamoto boats.",
        "The Minamoto held on, and the fight dragged out. When vessels came together, the warriors crossed from one boat to another and fought with swords and daggers, in [[boarding|abordagem]] combat. Around the afternoon, the tide turned, and the advantage passed to the Minamoto. One summary cites 3 p.m. as the hour of the turn, but the times in the accounts are not reliable.",
        "It was then that Taguchi Shigeyoshi changed sides. He began to attack the Taira from the rear and, according to the sources, showed the Minamoto which ship the emperor was on. Yoshitsune's archers began to aim at the helmsmen and rowers of the imperial boat and other Taira vessels. Without them, the boats drifted, and the Taira squadron fell apart. Many Taira killed themselves.",
        { h: "The end of Antoku" },
        "The emperor, about six years old (eight by the Japanese count), died with his grandmother. Tradition says that Taira no Tokiko took him in her arms and, saying that beneath the waves there was a capital, plunged in with him. His mother, Tokuko, also threw herself in, but there are accounts that she survived and became a nun.",
        "The regalia were also on board. The Taira tried to throw them into the sea so the Minamoto would not take them. The sword Kusanagi and the jewel reached the water. Divers recovered the jewel. The sword, according to most accounts, was lost, but a new sword appeared later and was kept in the Atsuta shrine. There are several explanations: a replica, a piece recovered from the sea, a piece delivered by miracle."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Taira were destroyed. Tomomori, Noritsune, Norimori, Tsunemori, Sukemori, Arimori and Yukimori died. Taira no Munemori was executed. Taira Tokitada was exiled. Taira no Kagekiyo was captured. Antoku and his grandmother died.",
        "In December 1185, Go-Shirakawa gave Yoritomo the power to collect taxes and appoint administrators and police in all the provinces. In 1192, Yoritomo received the title of Sei-i Tai [[Shogun|xogum]], and the Kamakura shogunate began (Kyoto remained the capital in law). The samurai governed Japan for almost 700 years, and the emperor remained a ceremonial figure.",
        "Yoshitsune, the hero of the victory, did not stay on good terms with his brother. Yoritomo hunted him, and he died by ritual suicide in 1189.",
        { h: "Curiosities and controversies" },
        { note: "The Heike crabs: according to legend, the crabs of the Shimonoseki Strait keep the spirits of the Taira warriors." },
        { note: "The sources: the two main accounts, the Heike Monogatari (an epic poem) and the Azuma Kagami (chronicle of the Kamakura government), were written later and do not agree on numbers. The times and details of the fighting should be read as tradition." }
      ]}
    ]
  },

  hattin: {
    war: "War between Saladin and the Kingdom of Jerusalem (1187)",
    hook: "On a waterless hill, in the heart of July, the army of the Kingdom of Jerusalem ceased to exist in two days.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The [[Kingdom of Jerusalem|reino de jerusalém]], created by the crusaders, was divided. After the death of the child king Baldwin V in 1186, Guy of Lusignan became king by marrying Princess Sibylla. He had against him part of the nobles, led by Raymond III of Tripoli, who had opposed his selection. On Guy's side stood Raynald of Châtillon, Gérard de Ridefort, master of the [[Templars|templários]], and the queen herself.",
        "On the other side was Saladin. He had been vizier of Egypt in 1169, had taken Damascus in 1174 and Aleppo in 1183. Now he was encircling the crusader states from the south and east. A truce in 1185 kept the peace.",
        { h: "The road to Hattin" },
        { timeline: [
          ["1186", "Guy of Lusignan is crowned king of Jerusalem. The kingdom splits into two factions."],
          ["During the truce", "Raynald of Châtillon attacks a caravan of Muslim pilgrims. Saladin swears to kill him."],
          ["May 1187", "At Cresson, Gérard's Templars are destroyed: they lose some 150 knights and 300 foot soldiers."],
          ["30 June", "Saladin crosses the Jordan River with his army."],
          ["2 July", "He attacks Tiberias, where Raymond's wife, Eschiva, is. A tower is mined and collapses, but she holds out in the citadel. That night, the crusader army, at La Saphorie, gathers in council."],
          ["3–4 July", "The crusader army marches east and is destroyed."]
        ]},
        "The council of war was the decision that lost the kingdom. Raymond, who had the most to lose (it was his wife who was in Tiberias), advised against going: the army should stay where there was water and wait for Saladin to come. The Hospitallers agreed. Gérard and Raynald said this was cowardice, and Guy decided to march. The historian Norman Housley notes that the king had spent on assembling the army the money sent by King Henry II of England, and this weighed on him. The accounts of the council come from chroniclers who had sides in the quarrel, and should be read with care."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Saladin, sultan of Egypt and Syria" },
        "He had brought Egypt and Syria together under his command. His strategy in 1187 was simple: attack Tiberias to provoke the crusader army into leaving the place where it was strong and fighting where he chose. It worked. According to the chroniclers, when the royal tent fell, he prostrated himself in thanks and wept with joy.",
        { h: "Guy of Lusignan, king of Jerusalem" },
        "King for less than a year, contested by the nobles, he needed to show authority. He followed the advice of the most aggressive, and the decision became his mark in history. He was captured at Hattin and released in 1188.",
        { h: "Raymond III of Tripoli" },
        "He was the leader of the nobles' faction and Guy's main opponent. In the Muslim sources there are rumors, unproven, that he had made a deal with Saladin. When the lines broke, he cut his way through and escaped. He died of pleurisy later in 1187.",
        { h: "Raynald of Châtillon" },
        "The lord who, during the truce, attacked a caravan of pilgrims. Saladin had sworn to kill him.",
        { h: "The other names" },
        "On the crusader side: Balian of Ibelin, Joscelin III of Edessa, Raymond of Antioch, Amalric (Guy's brother) and Humphrey IV of Toron. On the Muslim side: Gökböri on the left wing, al-Muzaffar Umar on the right, and al-Afdal, Saladin's son, then 17 years old."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The historians Konstam and Riley-Smith give the crusader army between 18,000 and 20,000 men, with 1,200 knights from the kingdoms of Jerusalem and Tripoli and 50 more from Antioch. Another breakdown details 1,200 knights, 3,000 men-at-arms, 500 [[turcopoles|turcopolos]] and 15,000 foot soldiers. It was a larger army than usual, because the summons reached every man able to fight. At the head went the [[True Cross|vera cruz]], carried by the bishop of Acre in place of the patriarch, who was ill.",
        "Saladin's army had about 40,000 men, of whom some 12,000 were regular cavalry (France and Tibble). Other estimates range from 20,000 to 40,000. The point is that the Muslims had far more light cavalry and horse archers, and this, on open ground without water, decided the battle.",
        { h: "The terrain" },
        "Galilee in July: dry hills, tall grass, summer heat. The Sea of Galilee lies to the east, but the road to it crossed a waterless plateau. The only good water was that of the springs, controlled by the Muslims. Nearby stands a two-peaked hill, the Horns of Hattin.",
        { h: "Day 3: the march" },
        { formation: true },
        "The crusaders left La Saphorie and marched east in column, under arrows from the Muslim horse archers, who attacked, withdrew and came back. They passed the springs of Turan, which were insufficient for so many people. At midday, Raymond and Guy turned left, toward the springs of Hattin, about 10 km away. The Muslims cut off the way to the water. The army halted on the arid plateau near Meskenah. The chronicler Ibn al-Athir wrote that the encirclement was so tight that not even a cat could escape.",
        { h: "The night" },
        "During the night, the Muslims prayed, sang, beat drums and shouted, to break the Christians' morale. They set fire to the dry grass, and the smoke covered the camp and dried throats even more. A camel caravan of Saladin's brought skins of water from the lake, and Gökböri's archers received 400 loads of arrows.",
        { h: "Day 4: the battle" },
        "In the morning, the crusaders, blinded by smoke, were struck by Gökböri's arrows. Gérard and Raynald asked Guy to form up and attack. Amalric led the attack. Raymond commanded the first division, together with Raymond of Antioch. Balian and Joscelin stayed in the rear. The army broke camp and tried to reach the springs of Hattin, but Saladin had blocked the way.",
        "Raymond made two charges to reach the water of the lake. The second worked: the Muslim lines opened and he escaped to Tyre. Most of the infantry fled en masse to the Horns of Hattin and took no further part in the fight. Thirst and wounds killed many. Five of Raymond's knights went to the Muslim leaders to ask to be killed.",
        "Guy tried to raise tents to bar the cavalry. The knights who remained made three desperate charges, but were surrounded and defeated. Saladin's son, al-Afdal, 17 years old, was at his father's side and described the charges. When the royal tent fell, Saladin dismounted, prostrated himself in thanks and wept with joy.",
        { h: "Saladin's tent" },
        "Guy and Raynald were taken to Saladin's tent. The sultan offered water to Guy, a gesture that, among the Arabs, meant sparing his life. Guy passed the cup to Raynald, and Saladin pushed it away, saying that he had offered nothing to that man and would not spare him for it. He accused him of having broken the truce. On how Raynald died, the sources differ. Baha al-Din says Saladin killed him with a sword blow. Others say it was a guard, on his orders. Guy was told that kings do not kill kings."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Almost the whole crusader army was lost. Only some 200 knights escaped, according to France. The captured Templars and Hospitallers, about 200, were beheaded on Saladin's orders, except the Templar master. The captured turcopoles were executed, because Saladin thought they were converted Muslims, which was a capital crime. The foot soldiers were enslaved, and one of them is said to have been traded in Damascus for a pair of sandals. The True Cross, according to the accounts, was taken to Damascus hanging upside down on a lance. Other nobles, such as Humphrey of Toron and William V of Montferrat, were spared and treated well.",
        "On 5 July, Saladin marched to Tiberias, and Eschiva surrendered and left for Tripoli with her family and belongings. Fifty-two cities and fortresses fell after the victory. By September, Acre, Nablus, Jaffa, Sidon, Beirut and Ascalon were in Muslim hands. Tyre held out, saved by Conrad of Montferrat. Jerusalem, defended by Queen Sibylla, by the patriarch Heraclius and by Balian, surrendered on 2 October 1187.",
        { h: "Why it matters" },
        "The loss of Jerusalem shocked Europe. The chronicler Ernoul says that Pope Urban III died of shock on hearing it, and his successor, Gregory VIII, quickly called a new crusade with the bull Audita tremendi. In England and France the Saladin tithe was levied. The Third Crusade began in 1189, with Richard the Lionheart, and recovered many Christian possessions. The military strength of the Kingdom of Jerusalem only finished collapsing at La Forbie, in 1244.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: the sources of the period exaggerate. The Portuguese Wikipedia, for example, gives in one passage 60,000 crusaders and 70,000 Muslims, and in another 20,000 and 30,000. Modern estimates stand at 18,000–20,000 crusaders and 20,000–40,000 Muslims." },
        { note: "The deal: Ibn al-Athir records the rumor that Raymond was in open rebellion against Guy and had made a pact with Saladin. This has never been proven." },
        { note: "The council of war: the Christian accounts were written by people who had a side in the quarrel between Guy and Raymond, and so the blame for having gone to meet Saladin is debated to this day." }
      ]}
    ]
  },

  tarain: {
    war: "Ghurid conquest of northern India (1191–1206)",
    hook: "A year after fleeing wounded from the same field, Muhammad of Ghor returned, wore down the enemy with arrows and opened India to Islam.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of the 12th century, northern India was a mosaic of [[Rajputs|rajputs]] kingdoms. One of the strongest was that of Prithviraj Chauhan, of the Chauhan (or Chahamana) dynasty, with its capital at Ajmer. Across the Indus, in the mountains of Afghanistan, a Turkic-Afghan dynasty, the [[Ghurids|guridas]], commanded by Muhammad of Ghor (also called Mu'izz al-Din), looked toward the Indian plain.",
        { h: "The road to the second battle" },
        { timeline: [
          ["1191", "First battle of Tarain. The Ghurids attack, but the Rajputs surround them on three sides and win. Muhammad, wounded in the arm by his opponent Govind Rai, is carried to safety by a young soldier, according to Minhaj."],
          ["1191–1192", "Muhammad leaves a garrison of some 2,000 men in the fortress of Tabarhinda (perhaps Bathinda). Prithviraj besieges it for about 13 months and takes it."],
          ["1192", "Muhammad returns to Tarain with a much larger army."]
        ]},
        "Prithviraj did not pursue the fleeing enemy. In 1192, the field was the same, and the adversary had learned the lesson."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Muhammad of Ghor" },
        "Ghurid ruler and general. He had been wounded at Tarain in 1191. In 1192 he avoided shock battle, which had nearly cost him his life, and used what his men did best: light cavalry of archers, with the heavy reserve held back for the end.",
        { h: "Prithviraj Chauhan" },
        "King of the Chauhan dynasty, victor of 1191. The poems about him, such as the Prithviraj Raso, are regarded as unreliable as historical sources.",
        { h: "The other names" },
        "On the Ghurid side, Qutb al-Din Aibak, a former military slave who, according to Wikipedia's article on him, commanded the army's deployment. Years later, he founded the Delhi Sultanate. On the Rajput side, Govind Rai, the opponent who wounded Muhammad in 1191, commanded the vanguard; Bhola, the left wing; and Badamsa Rawal, the right (according to the order of battle in Isami, a 14th-century chronicle)."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The chronicles' numbers are well known and do not deserve trust. Minhaj-i-Siraj, who wrote in 1260, speaks of 120,000 armored men on Muhammad's side, with some 40,000 elite cavalry under his direct command. Firishta, in the 16th or 17th century, speaks of 300,000 horsemen and more than 3,000 elephants for Prithviraj. The historian Kaushik Roy says that the 300,000 was probably the total that all the Rajput kingdoms could in theory mobilize, not the army that appeared. Satish Chandra points out that these numbers served to magnify the challenge and the victory. The unreliable Prithviraj Raso gives some 83,000 for the final battle. Hasan Nizami even says the Rajputs lost 100,000.",
        { note: "No number for the size of the armies is certain. Historians only agree that the chronicles exaggerate, and disagree about which side was larger." },
        { h: "The false truce" },
        "According to Firishta, Muhammad replied to Prithviraj that he could not withdraw without orders and that he accepted a truce until he received instructions. Hasan Nizami adds a peace offer in which the Ghurids would keep Tarhind, Punjab and Multan. Firishta, Aufi and Nizami agree that the talk was a trick. While the Rajputs relaxed, Muhammad planned an attack.",
        { h: "The attack before dawn" },
        "The Ghurids attacked before sunrise, when the Rajput camp was asleep or doing the first chores of the day. According to Minhaj, Muhammad left the center of the army, with the baggage, a few kilometers behind and divided the rest into five corps. Four were of horse archers, who attacked from the right, the left, the front and the rear. The translations disagree whether it was 10,000 in all or 10,000 in each corps.",
        { h: "Shoot, flee, return" },
        "The archers' orders were not to come to close combat. They shot, pretended to flee in a [[feigned retreat|retirada fingida]], and the Rajputs, with their elephants, their horses and their infantry, ran after them. It was the kind of fight in which the heavier side wore itself out without reaching anyone. For hours, according to Minhaj, the maneuver repeated, until late afternoon, when the Rajputs were exhausted.",
        { h: "The final charge" },
        "Then Muhammad launched the fifth corps. According to Firishta, he placed himself at the head of 12,000 horsemen and attacked with full force, and chaos seized the Rajputs. Here is a remark. The figure of 12,000 comes from Firishta and from Wikipedia, but no source I consulted says they were heavy horsemen. The rest of the army followed, and the Rajputs broke in panic.",
        { note: "The fasting: the historian Jadunath Sarkar suggested that the Rajputs fought on an empty stomach, because they were attacked early in the morning. It is his opinion alone and is not accepted by everyone." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Decisive Ghurid victory. According to Minhaj, Prithviraj got down from his elephant, mounted a horse and fled, but was captured near Sursuti. His end is told three ways. Minhaj says he was killed at once. Hasan Nizami says he was spared and executed later, when discovered in an intrigue. Most medieval sources say he was taken to Ajmer, where Muhammad wanted to reinstate him as a vassal. Govind Rai died in the battle, according to Minhaj and Firishta.",
        "The Ghurids left Govindaraja IV, Prithviraj's son, in Ajmer as a vassal. In 1192, Prithviraj's brother, Hariraja, drove out his nephew and recovered part of the kingdom, but Qutb al-Din Aibak defeated him. Aibak took Delhi later in 1192.",
        { h: "Why it matters" },
        "Tarain opened northern India to the Ghurids. In 1194, the Ghurids defeated Jayachandra, of the Gahadavalas, at Chandawar, and the conquests reached Bengal. Muhammad was assassinated in March 1206. Aibak took over on 25 June 1206 and established himself as ruler in Lahore. The [[Delhi Sultanate|sultanato de déli]] was born, which governed a good part of India for three centuries and left works such as the Qutb Minar, begun by Aibak in 1199.",
        { h: "Curiosities and controversies" },
        { note: "Who Aibak was: born in Central Asia, he was sold as a slave while still a child and bought in Nishapur by a judge, who educated him. Resold to Muhammad in Ghazni, he rose to master of the royal stables. He died in 1210, falling from his horse in a game of polo. The dynasty called the Slave dynasty is nicknamed that way, but only three of its kings were slaves." },
        { note: "The sources: the main account of the second battle is Muslim, by Hasan Nizami and Minhaj-i-Siraj. The Hindu side, in works such as the Hammira Mahakavya and the Prithviraj Raso, mixes history and poetry." }
      ]}
    ]
  },

  yehuling: {
    war: "Mongol conquest of the Jin dynasty (1211–1234)",
    hook: "On a raid for plunder, Genghis Khan destroyed the best Jin army and left northern China exposed.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1206, the tribal chief Temüjin brought the Mongol tribes together in an assembly, the quriltai, and was proclaimed Genghis Khan. In 1209–1210, he attacked the Western Xia and forced them to pay tribute. The next target was the great neighbor to the south: the [[Jin|jin]] dynasty, of the Jurchens, which dominated northern China. In the 1190s, the Jin had given titles to Temüjin in exchange for tribute, as to a vassal.",
        "The Jin had a policy of divide and rule among the tribes of the [[steppe|estepe]]. They allied with the Tatars and executed Ambaghai, former khan of the Mongols. Genghis had personal motives: to avenge Ambaghai and to answer the emperor Wanyan Yongji, who had insulted him. In 1210, he stopped paying tribute, which in practice was declaring war.",
        { h: "The road to Yehuling" },
        { timeline: [
          ["Spring 1211", "The Mongol army assembles on the Kerulen River. They take Dashuibo and Fengli, as a probe."],
          ["Summer", "The army divides: one wing under Jochi, Chagatai and Ögedei attacks the Hohhot region. Genghis heads toward the Jin capital, Zhongdu, with Jebe in the vanguard."],
          ["August to October", "The main fighting, at Wusha, Yehuling and then Huihe."]
        ]},
        "The campaign did not aim to conquer land. It was a raid to plunder, gather information and weaken the Jin defense, before returning to Mongolia. The Mongols had allies on the border, such as the Onggud tribes, and informants: Jin deserters and merchants, such as Ja'far Khwaja, who brought news."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Genghis Khan" },
        "By 1211 he had already united the tribes and defeated the Xia. For this war, he counted on border allies, informants and deserters.",
        { h: "Muqali and Jebe" },
        "Muqali commanded the Balu unit. Before the attack, according to tradition, he promised Genghis that he would not return alive if he failed. Jebe commanded the vanguard in the advance on Zhongdu.",
        { h: "On the Jin side" },
        "The chancellor Duji Sizhong commanded the first army, but was replaced by Wanyan Chengyu. The field commander was Wanyan Jiujin. The emperor Wanyan Yongji stayed in Zhongdu. A Khitan officer, Shimo Ming'an, was sent to negotiate and ended up changing sides."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The historian Paul Ratchnevsky counts about 65,000 Mongols, plus 10,000 Onggud auxiliaries, and on the Jin side 500,000 foot soldiers and 120,000 horsemen, almost ten times as many. But another historian, Carl Sverdrup, estimates the Jin field army at only 30,000 to 50,000 men. The two numbers sit side by side in Wikipedia itself without being reconciled. Other sources speak of 90,000 to 100,000 Mongols.",
        { note: "The main sources (the Secret History of the Mongols, the Shengwu qinzheng lu, Rashid al-Din and the History of the Yuan) are imprecise and contradict one another. They also condensed campaigns that crossed the turn of the Chinese year. The date and order of the fighting in 1211 are therefore disputed: one source places the conflict between March and June, another between August and October." },
        { h: "The border breaks" },
        "The chancellor Duji Sizhong took the main Jin army to the northwest border. Genghis attacked the fortress of Wusha and took the camp of Wuyue, which broke the Jin defensive line. Wanyan Chengyu took command and ordered several cities abandoned, such as Hengzhou, Changzhou and Fuzhou, and a retreat to near Yehuling, where the mountains would hinder the Mongol cavalry.",
        { h: "The deserter" },
        "The Jin sent Shimo Ming'an, a Khitan in their service, to open peace talks. Genghis persuaded him to go over to the Mongol side, and Ming'an handed over the position of the Jin army. Another version says it was the commander Wanyan Jiujin who sent a messenger to him, and that Ming'an then told the Mongols where the Jin were waiting, on the other side of the pass.",
        { h: "Yehuling" },
        "Muqali led the Balu unit through the Huan'erzui pass, the Badger's Mouth, in a surprise attack. The terrain did not allow full use of cavalry, and the Mongols dismounted and fought on foot, with high morale. They broke the Jin center and went on to Wanyan Chengyu's camp. The Jin flanks, poorly informed, did not come to the center's aid. Wanyan Jiujin died, the army fell apart and was massacred. The chronicles say the bodies stretched over more than 100 miles (some 160 km).",
        { h: "Huihe" },
        "Wanyan Chengyu gathered the survivors in the fortress of Huihe. The Mongols surrounded them, and the fight lasted three days. Genghis personally led a charge of 3,000 horsemen, and the rest of the army followed him. The Jin army was annihilated, and Chengyu escaped narrowly. Tushan Yi replaced him as chancellor."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Mongol losses are described as light, and those of the Jin as devastating. No source I consulted gives numbers. About ten Jin cities were plundered, and the Mongols reached the gates of Zhongdu. The emperor Yongji was assassinated by the general Hushahu, who took control of the capital.",
        "In 1213 the Mongols passed the Juyong pass, and in 1214 the Jin agreed to pay tribute, including a princess given to Genghis. Afterward, the court moved the capital to Kaifeng. Zhongdu fell on 1 June 1215.",
        { h: "Why it matters" },
        "The Jin survived about two more decades, but with a weakened core. They began to prioritize the war against the Song in the south rather than the defense of the border. The Song ended up allying with the Mongols and helped destroy the Jin in 1234.",
        { h: "Curiosities and controversies" },
        { note: "The battle is also called Wild Fox Ridge, which translates the name Yehuling, and Badger Mouth (Huan'erzui), because of the pass." },
        { note: "The deserter: Wikipedia gives different versions of who persuaded whom, and Ming'an's exact part in the victory is uncertain." }
      ]}
    ]
  },

  navas: {
    war: "Reconquista (crusade of 1212)",
    hook: "Three Christian kings against a caliph, on a July afternoon: the day the tide of the Reconquista began to turn.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1195, at Alarcos, the [[Almohads|almóadas]] had crushed the army of Alfonso VIII of Castile. The Christian kingdoms of the Peninsula, which were always quarreling among themselves, were left exposed. León and Navarre even allied with the caliph against Castile, and in 1197 Alfonso signed a ten-year truce with the Almohads.",
        "The truce ended, and in 1211 the new caliph, Muhammad al-Nasir, landed from Morocco and took the castle of Salvatierra, a bastion of the Order of Calatrava. Alfonso VIII sent the archbishop of Toledo, Rodrigo Jiménez de Rada, to ask Pope Innocent III for a [[crusade|cruzada]]. The archbishop preached it in Italy, Germany and France.",
        { h: "The road to Las Navas" },
        { timeline: [
          ["May 1212", "The army assembles in Toledo. Alfonso VIII has at his side, in person, Peter II of Aragon and Sancho VII of Navarre. Alfonso IX of León does not go, but Leonese and Portuguese volunteers do. King Afonso II of Portugal sends a contingent."],
          ["20 June", "Diego López de Haro leads the vanguard out of Toledo."],
          ["24 June and 1 July", "They take Malagón and Calatrava. Many foreign crusaders leave: heat, disease, lack of plunder, and protests against the lenient treatment of Jews and Muslims."],
          ["13 July", "The army arrives at Las Navas de Tolosa and finds the road blocked."],
          ["14 and 15 July", "Skirmishes. The Christians cross the mountain range by the Puerto del Rey, guided by a shepherd."],
          ["16 July", "The battle."]
        ]},
        "Al-Nasir's decision to block the entrance to the valley left the Christians hemmed in by mountains, with little room to maneuver. The guide who got them out is part of the tradition: a local shepherd. According to the Castilian chronicles, the most common version calls him Martín Alhaja, who won the hereditary title of Cabeza de Vaca, but other versions say it was Saint Isidore. It is a debate that has produced arguments down to the 18th century."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Alfonso VIII of Castile" },
        "Defeated at Alarcos in 1195, he sought a decisive battle. He won the alliance of Peter II of Aragon and, with more difficulty, that of Sancho VII of Navarre. In the battle, according to the Spanish Wikipedia, it was he who ordered the flanks held and then launched the whole rear guard.",
        { h: "Muhammad al-Nasir, the caliph" },
        "Almohad caliph, called Miramamolín in the Spanish chronicles. His tent stood in a palisade on top of a hill. After the defeat, he returned to Marrakesh, shut himself in his palace and died about a year later.",
        { h: "The other names" },
        "Diego López de Haro, lord of Biscay, commanded the vanguard. Peter II of Aragon stood on the left. Sancho VII of Navarre, on the right, is known for the legend of the chains. Among the important dead: Gomes Ramires, master of the Templars in the Peninsula, who led the Portuguese; Pedro Gómez de Acevedo, standard-bearer of Calatrava; Pedro Arias, master of Santiago, who died of wounds on 3 August."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The chronicles exaggerate greatly. Rodrigo Jiménez de Rada speaks of 80,000 horsemen and countless foot soldiers. Recent historiography (García Fitz, Alvira Cabrer) estimates 12,000 to 14,000 men on the Christian side and 22,000 to 30,000 on the Almohad side. Some disagree: an encyclopedia summary gives 130,000 Christians, a number far outside what current research accepts.",
        { h: "The terrain" },
        "Las Navas de Tolosa, in the province of Jaén. It was a valley closed in by mountain ranges, and the access was watched by al-Nasir's men. The Christians entered by the Puerto del Rey, to the west, and came out onto a flat area.",
        { h: "The deployment" },
        "On the Almohad side, according to the Spanish Wikipedia, in front came a line of jihad volunteers, with javelin-armed foot soldiers, of poor quality. Behind, archers, crossbowmen, light cavalry and horse archers. In the core, the Andalusian cavalry and the Berber and Arab troops. In the rear, the caliph's [[black guard|guarda negra]], with great spears. The caliph's palisade, an enclosure made of baggage, quivers, pack animals and camels, stood on a hill, perhaps the cerro de los Olivares.",
        "On the Christian side, according to the same source, the vanguard was Diego López de Haro's, with volunteers, Occitans and Leonese. The [[military orders|ordens militares]] and the Castilian [[mesnada]] were in the center, Peter II on the left, Sancho VII with the militias of the [[town councils|concelhos]] on the right, and Alfonso VIII in the rear, with the royal mesnada and the bishops. Here the sources differ: the Portuguese Wikipedia puts Alfonso in the center, and another summary puts Haro in the center and Alfonso in reserve.",
        { formation: true },
        { h: "The attack" },
        "Haro's vanguard broke the first Muslim line and made the volunteers flee. The Almohads answered with the tornafuye, a [[feigned retreat|retirada fingida]] by the light cavalry and archers, and the center advanced. Haro ordered the line held instead of pursuing the fugitives, for fear of being surrounded.",
        "Near midday, the Almohad center was pressing a Christian line that was already giving way, and the Andalusian cavalry was trying to surround the Christians. The fighting was so close that, according to the Latin Chronicle, there was no room for archers. The Portuguese militiamen fought well. Rodrigo of Toledo praised the 'bold attack', and Lucas of Tuy wrote that they ran into combat as to a feast.",
        "Alfonso VIII ordered the flanks held and the center steadied, with the Aragonese cavalry on the left and the Navarrese and the militias' on the right. Already in the afternoon, the entire rear guard advanced as a block, with the heavy cavalry. The Islamic lines gave way, and the rout came. According to the English Wikipedia, it was the Order of Santiago that broke the defensive line and opened gaps.",
        { h: "The palisade" },
        "The Christians reached the palisade, and the caliph fled in haste to Jaén, leaving an enormous spoil. The pursuit lasted until sunset, for some 20 to 25 km."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Christian losses were some 2,000 men, more than the legend said. Muslim losses are estimated at 11,000 to 15,000 among dead, wounded and prisoners (Spanish Wikipedia), or about 20,000 (Nutter, 2023). Alfonso VIII's letter to the pope speaks of 100,000 armed men killed, a number that no independent source confirms. The caliph's tent and standard were sent to Innocent III.",
        "In the same year, Baeza was evacuated and Úbeda was besieged and taken. According to Alfonso's letter, 60,000 Muslims died at Úbeda. The Latin Chronicle says that almost 100,000 were captured, women and children included. The two numbers do not match and are regarded as exaggeration.",
        { h: "Why it matters" },
        "The victory did not bring immediate conquests, but it broke Almohad power in the Peninsula. Ferdinand III took Córdoba in 1236, Jaén in 1246 and Seville in 1248. James I conquered the Balearics and Valencia, in 1238. The Marinids took over Morocco in 1269. The battle of Salado, in 1340, was the last great clash between Christian and Muslim armies in the Peninsula. The Emirate of Granada, a vassal of Castile, held out until 1492.",
        { h: "Curiosities and controversies" },
        { note: "The chains of Navarre: tradition says that Sancho VII was the first to enter the caliph's camp and broke the chains that held the black guards, and that this is why the coat of arms of Navarre has chains. Modern historians doubt it. The English and Portuguese Wikipedias say that the idea of chained guards probably comes from a mistranslation of the English word serried (packed tightly together, in close formation). The Spanish Wikipedia says that the legend is later and that Castilians on the right and Aragonese on the left entered the palisade almost at the same time. Sancho's personal emblem only became the dynasty's coat of arms from 1260, with Theobald II." },
        { note: "The caliph's banner, kept in the monastery of Las Huelgas, in Burgos, was attributed to the battle. One study dates it to the 14th century and links it to the Marinids, although a Nasrid origin is not ruled out." },
        { note: "The shepherd: some say Martín Alhaja, others, Saint Isidore. The English Wikipedia treats the story with caution." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  hattin: {
    terrain: [
      { t: "sea", x: 86, y: 0, w: 14, h: 70, l: "Sea of Galilee" },
      { t: "hill", x: 64, y: 12, rx: 11, ry: 7, l: "Horns of Hattin" },
      { t: "note", x: 8, y: 68, l: "West ←  → East (lake)" }
    ],
    units: [
      { id: "sC", s: "a", k: "cav", w: 14, h: 5, l: "Saladin (center)" },
      { id: "sL", s: "a", k: "cav", w: 12, h: 4, l: "Gökböri (archers)" },
      { id: "sR", s: "a", k: "cav", w: 12, h: 4, l: "al-Muzaffar Umar" },
      { id: "sW", s: "a", k: "camp", w: 12, h: 4, l: "Camels with water" },
      { id: "bV", s: "b", k: "cav", w: 12, h: 5, l: "Raymond of Tripoli" },
      { id: "bC", s: "b", k: "cav", w: 14, h: 5, l: "Guy and the True Cross" },
      { id: "bI", s: "b", k: "inf", w: 16, h: 5, l: "Infantry" },
      { id: "bR", s: "b", k: "cav", w: 12, h: 5, l: "Rear guard (Balian)" }
    ],
    steps: [
      { t: "3 July 1187. The crusader army leaves La Saphorie and marches east in column. Raymond is in front. Saladin's horse archers shoot from both sides, withdraw and return.",
        p: { bV: [40, 36], bC: [28, 36], bI: [28, 46], bR: [14, 38], sC: [64, 38], sL: [30, 22], sR: [30, 54], sW: [90, 60] } },
      { t: "At midday, Raymond and Guy turn left, toward the springs of Hattin. The Muslims cut off the way to the water.",
        p: { bV: [50, 28], bC: [40, 30], bI: [40, 40], bR: [28, 32], sC: [62, 26], sL: [42, 18], sR: [42, 48] } },
      { t: "The army halts on the dry plateau near Meskenah. Saladin closes the encirclement. The night passes with drums, shouts and the dry grass in flames. The camels carry water from the lake to the Muslims.",
        p: { bV: [52, 30], bC: [46, 34], bI: [46, 42], bR: [38, 36], sC: [66, 34], sL: [50, 20], sR: [50, 52] } },
      { t: "4 July. In the morning, the crusaders, blinded by smoke, are struck by Gökböri's arrows. Gérard and Raynald ask Guy to form up and attack. The army leaves camp for the springs, but Saladin blocks the way.",
        p: { bV: [58, 28], bC: [52, 34], bI: [52, 42], bR: [44, 36], sC: [70, 32], sL: [56, 20], sR: [56, 48] } },
      { t: "Raymond makes two charges to reach the water of the lake. On the second, the Muslim lines open, and he gets through.",
        p: { bV: [78, 40], sC: [72, 30] } },
      { t: "Raymond escapes to Tyre. Most of the infantry flees en masse to the Horns of Hattin and fights no more.",
        p: { bV: [10, 6], bI: [64, 14] }, x: ["bI"] },
      { t: "Guy tries to set up tents to bar the cavalry. The knights who remain make three desperate charges. Each one is repulsed.",
        p: { bC: [60, 30], bR: [52, 34], sC: [66, 34], sL: [58, 24], sR: [58, 44] } },
      { t: "Surrounded and without water, the last knights fall. The royal tent is torn down, and Saladin dismounts and thanks God. Guy and Raynald are taken to his tent.",
        p: { bC: [62, 30], bR: [56, 34], sC: [66, 32] }, x: ["bC", "bR"] }
    ]
  },

  navas: {
    terrain: [
      { t: "hill", x: 50, y: 8, rx: 22, ry: 6, l: "Hill of the caliph's palisade" },
      { t: "note", x: 8, y: 68, l: "Mountains (Puerto del Rey)" }
    ],
    units: [
      { id: "cVan", s: "a", k: "cav", w: 16, h: 5, l: "Vanguard (Haro)" },
      { id: "cMid", s: "a", k: "cav", w: 14, h: 5, l: "Military orders and Castile" },
      { id: "cL", s: "a", k: "cav", w: 14, h: 5, l: "Aragon (Peter II)" },
      { id: "cR", s: "a", k: "cav", w: 14, h: 5, l: "Navarre (Sancho VII) and town councils" },
      { id: "cRear", s: "a", k: "cav", w: 20, h: 5, l: "Rear guard (Alfonso VIII)" },
      { id: "mVol", s: "b", k: "inf", w: 40, h: 3, l: "Volunteers and foot soldiers" },
      { id: "mArc", s: "b", k: "cav", w: 34, h: 4, l: "Archers and light cavalry" },
      { id: "mCore", s: "b", k: "cav", w: 36, h: 5, l: "Almohad core, Arabs and Andalusians" },
      { id: "mCamp", s: "b", k: "camp", w: 16, h: 6, l: "Caliph's palisade" },
      { id: "mGuard", s: "b", k: "inf", w: 12, h: 3, l: "Black guard" }
    ],
    steps: [
      { t: "16 July 1212. The Christians have crossed the mountains by the Puerto del Rey and form up on the plain: vanguard in front, Aragon on the left, Navarre on the right, Alfonso VIII behind. The Almohads wait in lines, with the caliph on a hill, inside an enclosure of baggage.",
        p: { cVan: [50, 50], cMid: [50, 56], cL: [22, 54], cR: [78, 54], cRear: [50, 62],
             mVol: [50, 36], mArc: [50, 30], mCore: [50, 23], mGuard: [50, 14], mCamp: [50, 8] } },
      { t: "Haro's vanguard breaks the first line, and the volunteers flee.",
        p: { cVan: [50, 42], cMid: [50, 50] }, x: ["mVol"] },
      { t: "The Almohads feign retreat, the tornafuye. The center advances and the Andalusian cavalry tries to envelop the Christians. Haro orders the line held, instead of pursuing.",
        p: { mArc: [50, 36], mCore: [50, 30], cVan: [50, 40] } },
      { t: "Near midday, the Christian line nearly gives way. The two sides fight so closely that there is no room for archers.",
        p: { mCore: [50, 34], cVan: [50, 41], cMid: [50, 48] } },
      { t: "Alfonso VIII orders the flanks held and the center steadied. The Aragonese cavalry holds the left, the Navarrese and that of the town councils, the right.",
        p: { cL: [22, 44], cR: [78, 44], cRear: [50, 54] } },
      { t: "Late in the afternoon, the whole rear guard advances as a block, with the heavy cavalry.",
        p: { cRear: [50, 40], cMid: [50, 40], cVan: [46, 36] } },
      { t: "The Almohad lines give way, and the rout begins. The Christian wings close in from the sides. According to the English Wikipedia, it was the Order of Santiago that broke the line.",
        p: { cL: [30, 24], cR: [70, 24], cRear: [50, 30], cMid: [50, 34], mArc: [50, 24], mCore: [50, 18] }, x: ["mArc", "mCore"] },
      { t: "Christians enter the palisade, and the caliph's guard falls. According to tradition, Sancho VII was the first, but this is a later legend. The caliph flees to Jaén, and the pursuit lasts until sunset, for some 20 to 25 km.",
        p: { cL: [34, 12], cR: [66, 12], cRear: [50, 20], mGuard: [50, 10], mCamp: [50, 8] }, x: ["mGuard", "mCamp"] }
    ]
  }
});
