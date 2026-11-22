// In-depth battles, batch h: hastings, manzikert, jerusalem1099, svolder, stiklestad, dandanaqan.
// Checked against the English and Portuguese Wikipedia articles, the saga text of Heimskringla (via wisdomlib),
// Learn Persian Online (Dandanaqan, after Bayhaqi) and the works those pages cite.

Object.assign(GLOSSARY, {
  "parede de escudos": "An infantry formation in which the soldiers stand shoulder to shoulder, with their shields touching or overlapping, forming a wall. Those behind strike over the top or through the gaps.",
  "housecarls": "Professional warriors in the direct service of the king or of a great English noble. They were well armed and well trained, and many fought with the great two-handed axe, of Danish origin.",
  "fyrd": "The English militia: free men called up from the region to fight for a limited time. They were less trained than the housecarls and had to go home for the harvest.",
  "witenagemot": "The council of nobles and bishops that advised the king of England and took part in choosing who would inherit the throne.",
  "retirada fingida": "A tactic in which an army pretends to flee to draw in the enemy, who breaks formation to pursue and is struck back while in disorder.",
  "tapeçaria de bayeux": "A long embroidered cloth that tells the Norman conquest of England in scenes, with captions in Latin. Today it is kept in Bayeux, France.",
  "tagmata": "The professional regiments of the Byzantine army, paid by the Empire and based in the eastern and western provinces. They were the most reliable part of the army.",
  "varegues": "The personal guard of the Byzantine emperor, made up of mercenaries from northern Europe, at first almost all Norse. After 1066, many Englishmen joined it.",
  "seljúcidas": "The Seljuk Turks: a people of nomadic origin from Central Asia, converted to Sunni Islam, who in the 11th century built a great empire from Iran to Anatolia.",
  "crescente": "A battle formation shaped like a crescent moon: the center falls back and the tips advance to surround the enemy coming head on.",
  "turcomanos": "Nomadic Turkic peoples, breeders of horses and sheep, who lived in tribes. They fought on horseback, with the bow.",
  "sultão": "A title of Muslim rulers, used by the Seljuk chiefs. It means more or less 'the one who has authority'.",
  "gaznévidas": "The Turkic dynasty that ruled from the city of Ghazni, in present-day Afghanistan, between the 10th and 12th centuries. It came to control eastern Iran, Central Asia and northern India.",
  "corasão": "A region of northeastern Iran and western Central Asia, with rich cities such as Nishapur and Merv. It was the jewel of the eastern Islamic world.",
  "jarl": "A Norse title for a powerful chief, just below the king. It is the origin of the English word earl.",
  "saga": "A prose narrative from medieval Iceland, generally written many centuries after the events, mixing history, oral tradition and fantasy.",
  "escaldo": "A Norse court poet. The skalds' poems, made in difficult verse, were memorized and later quoted in the sagas, and for that reason are seen as the oldest sources.",
  "navio-dragão": "A Viking warship, long, with oars and a sail, with a dragon or serpent head on the prow.",
  "hird": "The personal guard of a Norse king: chosen warriors who lived at court and fought at his side.",
  "lendmann": "A Norse chief of a region, who served the king in exchange for land and prestige. Some lendmenn changed sides against Olaf at Stiklestad.",
  "cruzada": "A Christian military expedition, launched by the pope, to take or defend the Holy Land. Those who took part made a vow and wore a cross sewn on their clothes.",
  "fatímidas": "The Shiite Muslim dynasty that ruled Egypt, from Cairo, and disputed Palestine and Syria with the Seljuk Turks.",
  "torre de assalto": "A wooden tower on wheels, taller than the wall. Soldiers climbed up inside, protected, and leapt onto the top of the wall by a bridge.",
  "aríete": "A thick tree trunk, often with an iron tip, used to batter gates and walls until they broke.",
  "fogo grego": "A flammable mixture, hard to put out, used in Mediterranean wars. Against siege towers, defenders used fire; that is why the towers were covered with wet hides."
});

Object.assign(DEEP, {
  hastings: {
    war: "Norman conquest of England (1066)",
    hook: "One whole day of fighting on a Sussex hill decided who would speak what in England for the next thousand years.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "King Edward the Confessor died on 5 January 1066 leaving no children (some sources say 4 January). Who would inherit the throne? Harold Godwinson, earl of Wessex and the most powerful man in the kingdom, was chosen by the [[witenagemot|witenagemot]] and crowned still in January. But two foreigners also thought themselves heirs: William, duke of Normandy, who said Edward had promised him the throne and that Harold had sworn to accept this, and Harald Hardrada, king of Norway, who relied on an old agreement between kings of the North.",
        "Harold was caught between two fires. William took almost nine months to prepare the invasion, because he had to build the fleet from nothing, and was ready to cross around 12 August. But the wind, or fear of the English fleet, held him in France. On 8 September, with the harvest coming and the soldiers needing to go home, Harold dismissed the militia and the fleet on the south coast. Shortly afterward, coming from the north, Hardrada invaded.",
        { h: "The Road to Hastings" },
        { timeline: [
          ["April 1066", "Halley's Comet crosses the sky. The Bayeux Tapestry links it to Harold's coronation."],
          ["20 September", "Hardrada, with more than 300 ships, defeats the northern earls at Fulford and takes York."],
          ["25 September", "Harold surprises and destroys the Norwegians at Stamford Bridge. Hardrada dies. Only 24 of the 300 ships were needed to carry the survivors."],
          ["28 September", "William lands at Pevensey, in the south, meeting no resistance."],
          ["After 25 September", "Harold, with an army battered by the fighting in the north, stops about a week in London and marches south, some 320 km."],
          ["13 October", "Harold camps on Caldbec Hill, about 13 km from the castle that William raised at Hastings."]
        ]},
        "The march works out to an average of about 43 km a day. Harold left part of the army in the north, including Earls Edwin and Morcar. Historians debate why: perhaps out of distrust after Tostig's defeat, perhaps because he wanted to arrive quickly to stop William from leaving the beach and continuing to plunder the south. William, meanwhile, built a wooden castle at Hastings and used it as a base to raid the surrounding region."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Harold II, king of the English" },
        "Earl of Wessex and the most powerful man in the kingdom before becoming king, Harold had just defeated the Norwegians at Stamford Bridge. Near him were his brothers Gyrth and Leofwine. He hoped, by all appearances, to catch William by surprise. Some French sources say he sent an envoy to the duke, without result. Many historians criticize him for rushing south without waiting for reinforcements, although the battle lasted a whole day, and that suggests his men were not exhausted.",
        { h: "William, duke of Normandy" },
        "For historians, he was the more experienced commander of the two. He put together a mixed army, with infantry, archers and cavalry, and the idea was simple: the archers weaken the enemy, the infantry opens gaps and the cavalry enters through them and pursues. Only William of Poitiers, a chronicler favorable to him, says that Pope Alexander II sent him a banner, and for that reason the information is doubtful.",
        { h: "The Other Names" },
        "On the Norman side, the left wing belonged to Alan the Red, a relative of the count of Brittany; the right, to William fitzOsbern and Eustace II, count of Boulogne. On the English side, only some 20 names of people present are known with any certainty; among them, Harold's two brothers. Among the Normans, only 35 companions of the duke are identified, and five died at Hastings, among them Taillefer."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The Norman sources speak of 400,000 to 1,200,000 English, absurd numbers. Modern historians propose 5,000 to 13,000 English, and most settle near 7,000 to 8,000. Harold's army was almost all infantry. The core was the [[housecarls|housecarls]], professional warriors with two-handed axes, and around them the militia, the [[fyrd|fyrd]]. There were almost no archers.",
        "William brought roughly half infantry, a quarter cavalry and a quarter archers and crossbowmen. Modern estimates run from 7,000 to 12,000 men, with 1,000 to 3,000 horsemen. There were men from Normandy, Brittany and Flanders.",
        { note: "The contemporary sources give numbers from 14,000 to 150,000 for the Normans. Current historians reject them as exaggeration." },
        { h: "The Terrain" },
        "The battle took place near the present town of Battle, in Sussex, in southern England, about 11 km north-northwest of Hastings. The field lay between Caldbec Hill, to the north, and Telham Hill, to the south, with woodland and a boggy stretch in front. The name 'Senlac', which many people know, comes from Orderic Vitalis, and the historian Edward Freeman popularized it, liking the resemblance to the French 'sanguelac', lake of blood. The Anglo-Saxon Chronicle calls the place 'the hoar apple tree', and the Domesday Book, of 1086, already speaks simply of 'the battle of Hastings'. The slope was considerably altered when the abbey was built, and today it is much less steep than in 1066.",
        { h: "The Battle in Ten Moves" },
        { formation: true },
        "The English formed the [[shield wall|parede de escudos]] on the top of the hill, on foot, with their flanks protected by woodland and wet ground. Behind the front rank were axemen, javelin throwers and, perhaps, some archers. William organized three divisions: Bretons, Angevins, Poitevins and Manceaux on the left; Normans in the center, with himself; French, Picards, Flemings and men of Boulogne on the right. In front the archers, then the spearmen, and the cavalry behind.",
        "The fighting began around 9 a.m. on Saturday, 14 October. The Norman arrows, shot uphill, were of little use: they struck the shields or flew over. The infantry climbed and was met with spears, axes and stones. The cavalry went up to help and also failed to break the wall.",
        "Then came the moment of greatest danger for William. The left division, of Bretons, fell back, and the retreat spread. A rumor ran that the duke was dead. He rode among his men with his face uncovered, shouting that he was alive, and counterattacked. Part of the English had gone down the hill to pursue and ended up isolated and destroyed on a smaller rise. It is not known whether Harold gave that order. The poet Wace states that he ordered them to stay in formation.",
        "The Bayeux Tapestry shows Gyrth and Leofwine dying just before this fighting, and that suggests they led the pursuit. William of Poitiers puts them dead near their brother, and that suggests they died at the end. Another poem, the Carmen, says William himself killed Gyrth.",
        "A pause followed, probably early in the afternoon. Then, according to William of Poitiers, the Normans twice used the [[feigned retreat|retirada fingida]]: they fled, part of the English came out of the wall after them and was cut off. Some historians think the story was invented later, but most accept that the tactic was used. The effect was to wear down the housecarls, who were replaced by men of the fyrd, and the wall stayed standing, only shorter. The archers began shooting again, and 12th-century sources say they shot in a high arc, over the shields, although the accounts of the time do not record this. The Carmen says William lost two horses; Poitiers, three.",
        "Late in the afternoon, Harold died. The housecarls around the body fought to the end, and the rest of the army fled. At a place called Malfosse, 'the evil ditch', an English rearguard badly wounded Eustace of Boulogne before being destroyed."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Nobody knows how many died. Some historians estimate about 2,000 Normans and twice as many English, and Peter Marren speaks of 2,000 and 4,000. Orderic Vitalis says that 15,000 of William's 60,000 died, and the number is considered greatly exaggerated, although the proportion of one in four may be right. Harold's body was recognized the next day, by armor or marks. His standard was sent to the pope.",
        "England did not fall at once. The witenagemot proclaimed Edgar Ætheling king. William defeated an English force at Southwark, but could not take London Bridge. He crossed the Thames at Wallingford, where Archbishop Stigand submitted, and reached London from the northwest. The English leaders surrendered at Berkhamsted. William was crowned in Westminster Abbey on 25 December 1066, by Archbishop Ealdred.",
        "There were revolts for years: Exeter in 1067, Harold's sons in 1068, Northumbria, the Danish invasion of 1069, the devastation of the North between 1069 and 1070, and Hereward at Ely in 1070. Some defeated Englishmen went to serve in the [[Varangian Guard|varegues]], in Constantinople, and in 1081 they faced the Normans again, at Dyrrhachium, and lost once more.",
        { h: "Why It Matters" },
        "The nobility, architecture and language of England changed. English absorbed thousands of French words, and the land passed from the hands of the old aristocracy to William's companions. From the military point of view, the historian David Nicolle says the battle showed the superiority of the Norman combination of cavalry and infantry over the Anglo-Saxon tradition of fighting only on foot, 'but not without difficulty'.",
        { h: "Curiosities and Controversies" },
        { note: "The death of Harold. The famous scene of the arrow in the eye appears in writing for the first time in the 1080s, in Amatus of Montecassino, who is not reliable (he also gives William 100,000 soldiers). William of Malmesbury speaks of an arrow and a knight who wounded him at the same time. The Carmen says it was William who killed him. William of Jumièges says it was in the morning. The Battle Abbey Chronicle says nobody knew. In the [[Bayeux Tapestry|tapeçaria de bayeux]], a figure with an arrow in the eye stands beside a man falling, struck by a sword, and the caption says only 'Here King Harold was killed'. It is not known which of the two is Harold, and a 19th-century restoration may have changed the arrow." },
        { note: "The feigned retreat. Was it a deliberate tactic or a later invention? Most historians believe it was used, but there is no consensus." },
        { note: "Did the Normans march from Hastings that morning or were they already on the field the evening before? Most historians prefer the first idea. William of Jumièges tells that the army slept armed, and M. K. Lawson argues that he is right." },
        { note: "The abbey. Custom says William vowed to found Battle Abbey and placed the altar where Harold fell. Today it is thought more likely that the pope's legates imposed it, in 1070." }
      ]}
    ]
  },

  manzikert: {
    war: "Byzantine-Seljuk wars (11th century)",
    hook: "A captured emperor, a general who left at the wrong moment and a defeat that history exaggerated, but which opened Anatolia to the Turks.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In the middle of the 11th century, the Byzantine Empire was still the greatest Christian power in the east, but it had been coming apart from within. Around 1053, Emperor Constantine IX dissolved the 'Army of Iberia', about 50,000 men according to the chronicler Skylitzes, to save money. The chronicler Attaleiates and the author Kekaumenos agree that this weakened the defense of the east. At the same time, the [[Seljuk|seljúcidas]] Turks were advancing from Iran. A truce lasted until 1064, when Sultan Alp Arslan took the city of Ani, in Armenia, after a 25-day siege.",
        { h: "The Road to Manzikert" },
        { timeline: [
          ["c. 1053", "Constantine IX dissolves the Army of Iberia."],
          ["1064", "Alp Arslan takes Ani after a 25-day siege."],
          ["1068", "Romanos IV Diogenes seizes the throne and retakes Hierapolis."],
          ["1069 or 1070", "Manuel Komnenos is defeated at Sebasteia by Arisighi, brother-in-law of Alp Arslan, who later goes over to the Byzantine side."],
          ["June 1071", "The Byzantine army reaches Theodosiopolis (today Erzurum), in Armenia."],
          ["23 August 1071", "Romanos takes the fortress of Manzikert."]
        ]},
        "Romanos IV took power in 1068, retook Hierapolis that same year and began campaigning against the Seljuks and their allies, with limited results. He had a rival at court, John Doukas. In 1071, after Alp Arslan failed to take Edessa and went to besiege Aleppo, Romanos marched into Armenia to recover the lost fortresses."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Romanos IV Diogenes, the emperor" },
        "It was he who decided to march into Armenia and who decided to divide the army. Historians such as Holt blame him for four things: dividing the troops, choosing Andronikos Doukas for a post of trust, working with bad information and commanding poorly once the fighting began.",
        { h: "Alp Arslan, sultan of the Seljuks" },
        "He had taken Ani in 1064 and, in 1071, was besieging Aleppo. On the morning of the battle, he put on a white robe, like a shroud, as a sign that he was ready to die. His horse archers avoided hand-to-hand fighting and shot from a distance. In 1072, a year later, he was stabbed by a fortress commander during a campaign in Turkestan. He died four days later, on 24 November, aged 43, and was buried in Merv.",
        { h: "The Other Names" },
        "Andronikos Doukas, son of Romanos's rival, commanded the rear reserve. Nikephoros Bryennios commanded the left and Theodore Alyates the right. Joseph Tarchaneiotes was sent with part of the troops toward Khliat. Roussel de Bailleul led some 500 Frankish and Norman mercenaries. The Armenian Basilakes led a cavalry sortie the day before and was captured."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The Byzantine army had about 40,000 men, according to Haldon. Other estimates run from 35,000 to 50,000 (Markham, Sevim and Hillenbrand) and even 70,000. There were professional troops of the eastern and western [[tagmata|tagmata]], Frankish and Norman mercenaries, Uzes and Pecheneg Turks, Bulgarians, Georgians and Armenians, infantry of the duke of Antioch and a part of the [[Varangian Guard|varegues]].",
        "For the Seljuks, the most common modern estimates fall between 20,000 and 30,000 men. The old sources, such as Matthew of Edessa and some Muslim authors, speak of more than 200,000, which is not taken seriously.",
        { h: "The Days Before" },
        "Romanos divided the army. He sent Tarchaneiotes, with regular troops, Varangians, Pechenegs and Franks, toward Khliat, and went to Manzikert with the rest, some 20,000 men for each side. Islamic sources say that Alp Arslan destroyed Tarchaneiotes's column. The Byzantine ones do not speak of this, and Attaleiates suggests that he fled. In any case, the column was not at the battle.",
        "On 24 August, Bryennios's men, who went out to look for food, ran into the Seljuk army and fell back. Basilakes sallied out with the cavalry, was beaten and captured, and Bryennios's wing was almost surrounded. On the night of 24 to 25 August, the Seljuks hid in the hills. On 25 August, Turkish mercenaries on the Byzantine side deserted to their kinsmen on the enemy side, and Romanos refused a peace proposal from Alp Arslan.",
        { h: "The Battle" },
        { formation: true },
        "On 26 August, a Friday, the Byzantines advanced in three groups: Bryennios on the left, Alyates on the right, Romanos in the center. Andronikos Doukas stayed behind, in reserve. The Seljuks waited in a [[crescent|crescente]], about 4 km away. Horse archers shot without pause. The center of the crescent fell back and the tips tried to surround.",
        "Late in the afternoon, the Byzantines had taken Alp Arslan's camp, but the wings were badly hurt by the arrows. The Turks fled from any hand-to-hand fighting, in a style similar to that of the Parthians. At dusk, Romanos ordered a return.",
        "That was when everything collapsed. The right wing misunderstood the order, and Andronikos Doukas, instead of covering the retreat, went back to the camp at Manzikert. The Seljuks attacked the confusion. The Byzantine right came apart, perhaps thinking it had been betrayed by Armenians or by allied Turks, and Bryennios's left as well. The center, where the emperor and the Varangians were, was surrounded. Romanos, wounded, was captured. The pursuit lasted all night."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Haldon gives 2,000 to 8,000 Byzantine dead, some 4,000 prisoners and, overall, about 20,000 deserters over the course of the campaign. The Seljuks did not pursue the rest of the army and did not immediately retake Manzikert. Byzantine losses were relatively low, and most of the commanders survived.",
        "Alp Arslan at first did not believe that the dirty, bloodied prisoner was the emperor. When he confirmed it, he put his boot on Romanos's neck and made him kiss the ground, a ritual humiliation. Afterward he treated him with courtesy, and the emperor stayed about a week as a guest. The ransom asked was 10 million gold coins, which Romanos refused. It came down to 1.5 million at first and 360,000 a year, plus the cession of Antioch, Edessa, Hierapolis and Manzikert and a marriage between the children of the two. Romanos went back with an escort of two emirs and one hundred mamluks.",
        "At home, the empire had already changed hands. Andronikos Doukas returned to Constantinople and proclaimed his cousin Michael VII. Romanos, defeated three times by the Doukas family, was deposed, blinded and exiled to the island of Prote, and died soon after, of an infection caused by the wound.",
        { h: "Why It Matters" },
        "The Turks entered Anatolia in earnest only after the death of Alp Arslan, in 1072. By 1077 they already had a capital at Nicaea, and around 1080 they controlled about 78,000 km². Alexios I Komnenos restored stability between 1081 and 1118. The Byzantine request for help from the West is seen by some historians, such as Madden, as one of the origins of the First Crusade, which began in 1095.",
        { h: "Curiosities and Controversies" },
        { note: "Was it really the end of the empire? Runciman called it the most decisive disaster in Byzantine history, and Norwich the greatest in the history of the empire. Asbridge says historians no longer see it as an absolute cataclysm. Markham argues that the massacre was smaller than was thought, that many units survived and that the civil war that followed did more harm than the battle." },
        { note: "The size of the Seljuk army remains open: the range of 20,000 to 30,000 is the most used, but it is not a consensus, and the old sources say otherwise." },
        { note: "According to a famous tradition, Alp Arslan asked Romanos what he would have done if the roles were reversed. Romanos answered that he would have killed him or paraded him through Constantinople, and the sultan said his own punishment would be heavier, but forgave him. The scene is told in different ways by the sources." }
      ]}
    ]
  },

  jerusalem1099: {
    war: "First Crusade (1096–1099)",
    hook: "After three years of marching and five weeks of siege, the wooden towers reached the wall. What came next still weighs on the memory of three religions.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In 1095, at the Council of Clermont, Pope Urban II called on the Christians of Europe for a [[crusade|cruzada]]: to help Byzantium against the Turks and free Jerusalem. The crusaders left Constantinople in April 1097 and besieged Antioch from October 1097 to June 1098. There, they defeated a relief army commanded by Kerbogha. Baldwin of Boulogne founded the county of Edessa in 1098.",
        "The dispute between Bohemond of Taranto and Raymond IV of Toulouse, epidemics and lack of food delayed the march. Raymond resumed it in January 1099. The army avoided long sieges on the coast, made agreements with or paid tribute to local rulers, and left Jaffa at the end of May 1099.",
        { h: "The Road to Jerusalem" },
        { timeline: [
          ["1095", "Urban II calls the crusade at Clermont."],
          ["April 1097", "The crusaders leave Constantinople."],
          ["October 1097 to June 1098", "Siege of Antioch and defeat of Kerbogha."],
          ["1098", "The [[Fatimids|fatímidas]] of Egypt retake Jerusalem from the Turks (sources vary between July and August)."],
          ["January 1099", "Raymond of Toulouse resumes the march south."],
          ["7 June 1099", "The army arrives before Jerusalem."]
        ]},
        "Jerusalem had passed from hand to hand. It had been ruled by the Fatimids since the 10th century, was taken by the Seljuk Turks in 1073 and was retaken by the Fatimids in 1098, a year before the crusaders arrived. It was the holy city of Jews, Christians and Muslims."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "The Crusader Chiefs" },
        "Raymond IV, count of Toulouse, had resumed the march in January, after quarreling with Bohemond of Taranto. Godfrey of Bouillon, Robert II of Normandy, Robert II of Flanders and Tancred commanded the other contingents. According to Raymond of Aguilers, Tancred and Godfrey were in the vanguard when the city fell. They were independent chiefs, without a single commander, and the agreements between them were tense.",
        { h: "The Governor of Jerusalem" },
        "Iftikhar ad-Dawla governed for the Fatimids. He was careful: he expelled the Syrian Christians from the city (the Jews were allowed to stay), denied water and resources to the besiegers and ordered wood and rope used to make more catapults. He also ordered sacks of straw prepared to cushion the stones that came against the walls. He had a small garrison, but a good defense plan.",
        { h: "The Other Names" },
        "Guglielmo Embriaco, of Genoa, and Gaston of Béarn led the construction of the towers. Peter Desiderius, chaplain of Count Isoard I of Die, claimed to have seen in a dream Adhémar, the pope's legate, asking for fasting and a barefoot procession around the city. The vizier of Cairo, al-Afdal, was the man whose army the crusaders feared most: the rumor ran that he was gathering a relief force."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The crusaders numbered 12,000 to 14,000 men, with 1,200 to 1,300 knights, according to one estimate; another speaks of 12,000 to 20,000 infantry. Many were without weapons and without provisions. The Fatimid garrison had about a thousand Arabs and Sudanese and some 400 elite Egyptian cavalrymen. Some estimate the total of defenders at 3,000 to 4,500.",
        { h: "The Terrain" },
        "The walls of Jerusalem ran about 4 km, were 3 m thick and 15 m high, and had five large gates. Deep valleys protected three sides. Inside there was an inner wall, built after an earthquake in 1033, a ditch and an outer wall. Water was the besiegers' greatest problem: most of the wells and cisterns outside the wall were unusable, and only the Gihon spring, which dries up in summer, remained. Heat, no shade, and the dry desert wind made things worse.",
        { h: "The Siege in Eight Steps" },
        { formation: true },
        "Robert of Normandy took the north wall, facing the Flowers Gate. Robert of Flanders stood to his right, facing the Column Gate (Damascus Gate). Godfrey covered the northwest corner up to the Jaffa Gate, and Tancred joined him. Raymond stood to the south and later moved to Mount Zion. The east and southeast were left without troops.",
        "On 13 June there was a first assault, after a prophecy by a hermit. The crusaders knocked down part of the outer wall with picks, but it was not enough. Two days later, the leaders saw that a long siege was unworkable and that they needed machines.",
        "On 17 June word came that Genoese and English ships were at Jaffa with materials. Wood was found more than 50 km away, near Nablus, and Tancred is said to have found about 400 beams in a cave. In almost three weeks, the crusaders built two wheeled [[siege towers|torre de assalto]], a [[battering ram|aríete]] with an iron tip, ladders and wickerwork shields. The towers were covered with hides soaked in vinegar against [[Greek fire|fogo grego]].",
        "In early July came the vision of Peter Desiderius. On 8 July, a barefoot procession, led by bishops and priests, went around the walls and up to the Mount of Olives. According to one account, the defenders jeered from the top of the walls.",
        "The attack was set for the night of 13 to 14 July: the main blow would come from Mount Zion and the eastern part of the north wall, with a feint at the northwest corner. On 14 July, to the sound of trumpets, the army of the north put the ram in place and damaged the wall, but the machine jammed, and the attack stopped at night. On Friday, 15 July, at midday, the assault resumed. Godfrey's tower reached the wall, and the men crossed to the top of the rampart. Albert of Aachen tells that a golden cross was placed on the tower.",
        "According to one of the chronicles, the first to enter were Letold and Gilbert of Tournai, then Godfrey, his brother Eustace and Tancred. Other authors give the credit to Tancred. Raymond's tower was stopped by a ditch, but, when the others entered, the guards of the gate he was attacking surrendered."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "The crusaders suffered heavy losses during the siege, perhaps a fifth to a quarter of the Western armies. After entering, they killed many people: Muslims, Jews and Eastern Christians, during the afternoon of 15 July and the following morning. Many took refuge in the al-Aqsa mosque. Christian, Muslim and Jewish witnesses describe a bloodbath in which women and children were not spared. The Jews who had defended the city alongside the Muslims were burned in their synagogue, according to Ibn al-Qalanisi.",
        "Iftikhar ad-Dawla and his men took refuge in the Tower of David. The sources disagree on what happened. The most cited version is that he surrendered to Raymond, in exchange for safe passage to Ascalon. The dead: Arab sources speak of 70,000 or even 100,000, but the city had about 30,000 inhabitants. Modern estimates fall between 3,000 and 10,000 dead.",
        "On 22 July, a council chose how to govern. Raymond refused the title of king. Godfrey accepted the power, but not the title, and remained as Advocatus Sancti Sepulchri, defender of the Holy Sepulchre. On 12 August 1099, he defeated a Fatimid army at the battle of Ascalon. Godfrey died on 18 July 1100. His brother Baldwin was crowned at Christmas 1100, in the Church of the Nativity in Bethlehem, first king of Jerusalem.",
        { h: "Why It Matters" },
        "The Latin Kingdom of Jerusalem was born, with Baldwin as its first king. The memory of the massacre and of the lost city marked relations between Christians, Muslims and Jews for centuries.",
        { h: "Curiosities and Controversies" },
        { note: "The massacre. The Christian chroniclers who were there, such as Raymond of Aguilers, the Anonymous and Albert of Aachen, show no remorse. William of Tyre, who wrote some 90 years later, does. For that reason historians read the episode with care." },
        { note: "Who entered first, how many died and what happened at the Tower of David are points on which the sources do not agree. The dates, by contrast, are well fixed: 15 July 1099 was a Friday." },
        { note: "The chroniclers cited: Raymond of Aguilers, Albert of Aachen, the anonymous author of the Gesta, Ralph of Caen and Ibn al-Qalanisi, of Damascus." }
      ]}
    ]
  },

  svolder: {
    war: "Struggle for Norway between Olaf Tryggvason and his enemies (995–1000)",
    hook: "Eleven ships against dozens: the battle in which a Viking king, according to the sagas, preferred to vanish rather than surrender.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "Until the 9th century, Norway was a mosaic of small kingdoms. Harald Fairhair began to unify it, at least in tradition, and Denmark, to the south, claimed parts of the territory and wanted Norwegian vassals. Jarl Haakon Sigurdsson ruled from Lade, backed by Harald Bluetooth, king of Denmark, to whom he paid tribute. He remained a pagan. He was deposed in 995.",
        "That same year, Olaf Tryggvason was acclaimed king. He refused Danish authority and devoted himself to converting Norway and its western colonies to Christianity, with threats, torture and execution. He made many enemies. Jarl Eirik, son of Haakon, and King Sweyn Forkbeard of Denmark felt that Olaf had deprived them of a part of Norway.",
        { h: "The Road to Svolder" },
        { timeline: [
          ["995", "Olaf Tryggvason is acclaimed king of Norway; Haakon of Lade is deposed."],
          ["Between 995 and 1000", "Olaf imposes Christianity and clashes with Eirik and Sweyn. The sagas also tell of marriage affairs, such as that of Sigrid the Haughty."],
          ["September 1000 (or 999)", "Svolder. The sources vary, and the date of 9 September comes from a late saga."]
        ]},
        "The sagas give personal causes. Olaf supposedly proposed marriage to Sigrid the Haughty if she would convert. She refused, and he supposedly struck her with a glove. Sigrid warned that this could cost him his life. Adam of Bremen says that Thyri, Olaf's Danish wife and Sweyn's sister, pushed him into war because of a dowry that her brother did not pay. Historians think the sagas exaggerate Thyri's role. It is more likely that Olaf was returning from Wendland (the southern coast of the Baltic) seeking allies and expecting war."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Olaf Tryggvason, king of Norway" },
        "A warrior king and a missionary by force. The sagas revere him as the man who brought Christianity to the North, and his dramatic death against overwhelming odds made him a hero. On the day of the battle, according to the sagas, he could have escaped by sail and oar, but preferred to fight with the eleven ships he had.",
        { h: "Sweyn Forkbeard, Olof of Sweden and Jarl Eirik" },
        "Sweyn was king of Denmark, and Olof Skötkonung, king of Sweden, was perhaps his vassal. Jarl Eirik had lost his father's inheritance. It was Eirik, who knew the Norwegians, who held back the impatient Danes and Swedes and identified Olaf's ships as they passed, one by one, so that they would not mistake the smaller ones for the great one.",
        { h: "Sigvaldi" },
        "According to Oddr Snorrason and the Heimskringla, Jarl Sigvaldi lured Olaf into the trap, assuring him that the rumors of an ambush were false. Skaldic poetry supports the idea that he betrayed him. Wikipedia, however, warns that Sigvaldi's character and role remain uncertain."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "In all the sources that give numbers, Olaf has 11 ships. The allies' total varies widely: 139 in Oddr Snorrason (Olof of Sweden 60, Eirik 19, Sweyn 60), 82 in the Ágrip, 71 in the Historia Norwegie, 70 in Theodoricus and 80 in the poem Rekstefja. A poem by Halldórr says Olaf had 71 ships when he left the south. The sagas explain the difference: some ships were Sigvaldi's, who deserted, and others passed before the trap was closed.",
        { note: "The numbers of ships and all the details of the fighting come from sagas written more than 200 years later, and historians warn that they are not reliable history. The skaldic poems are older, but have reached us only quoted in the sagas." },
        { h: "The Ships" },
        "The Heimskringla describes the Crane, large and fast, with 30 rowing benches, and the Serpent (the Short Serpent). The Ormen Lange, the Long Serpent, is described as the finest ship ever built in Norway, with 34 compartments, a golden head and tail and high sides (the Ágrip says 32 oar places). On the allies' side, only one ship is described: Eirik's Járnbarðinn, with iron plates and an iron beam under the prow, perhaps a ram.",
        { h: "The Place" },
        "Nobody knows for certain where it was. Adam of Bremen says Øresund. The Ágrip and the Historia Norwegie say near Zealand. Theodoricus speaks of an island called Svǫldr, near Slavia, and the Fagrskinna puts it off the coast of Wendland. One verse speaks of the 'mouth of the Svolder', which suggests it may have been a river, and that the island of the sagas arose from the Norse confusing the geography of the Wends. Today historians are divided between Rügen and the Øresund. That is why the location on the map is only approximate.",
        { h: "The Battle in Seven Moves" },
        { formation: true },
        "Olaf's fleet passed the allies' anchorage in a long, disordered column, not expecting an attack. Eirik held back the Danes and Swedes until the important ships appeared. Olaf could have fled, but decided to fight.",
        "He lashed his ships side by side, with the Long Serpent in the middle and its prow sticking out of the line. It was a kind of floating fort: the men fought freely, oars and yards served as a barrier and the enemy could attack with only a few at a time. Since the Long Serpent was tall, the defenders had the advantage with javelins.",
        "Danes and Swedes attacked the front of the line and were repelled, with many casualties and the loss of ships. Eirik attacked the flank with the Járnbarðinn and cleared the ships one by one, until only the Long Serpent was left.",
        "There is a combat detail in the sagas: Einar Tambarskelfir, one of Olaf's archers, tried to shoot Eirik and missed. Fin, another archer, split Einar's bow in two as he drew it. Olaf offered his own, and Einar said it was too weak, and fought with sword and shield."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The Death of Olaf" },
        "Adam of Bremen says he threw himself into the sea, 'an end worthy of his life'. Saxo Grammaticus says he preferred suicide to dying at the enemy's hands and jumped in armor. The Ágrip tells that he was seen alive on the high stern of the Long Serpent as the fighting died down and, when Eirik arrived, a flash of light shone and he vanished. Other sagas say he reached the shore by swimming, with the help of angels, or that a Wendish ship rescued him. The Longest Saga (c. 1300) records 'appearances' of Olaf in the Holy Land, the last in the 1040s.",
        { h: "Norway Divided" },
        "According to the Heimskringla, Olof of Sweden took four districts of Trøndelag, plus Møre, Romsdal and Rånrike, and gave them to Jarl Svein Hákonarson, his son-in-law, as a vassal. Sweyn took Viken. Eirik took the rest, as a vassal of Sweyn. The Fagrskinna speaks of a slightly different division.",
        "Eirik and Sweyn ruled well and the period was prosperous. Most sources say they called themselves Christians, but allowed freedom of worship, and the reaction undid much of what Olaf had done. The Ágrip and the Historia Norwegie, in contrast, say the jarls worked actively to uproot Christianity. The struggle for Norway continued for decades, and led to the battles of Nesjar and Stiklestad. Only in 1035, with Magnus the Good, was Norway independent and Christian.",
        { h: "Curiosities and Controversies" },
        { note: "Olaf became, like Charlemagne and Frederick Barbarossa, a king whose return was awaited. The Heimskringla is the most famous version, and the Longest Saga calls Svolder the most famous battle ever fought in the lands of the North." },
        { note: "The date: Íslendingabók (c. 1128) places it in summer. Oddr Snorrason says it is commemorated on the third or fourth day before the Ides of September (10 or 11 September), and the Longest Saga gives 9 September. Some medieval authors counted the year from September, and so it may be 999 by our calendar." },
        { note: "The memory: Longfellow wrote 'The Saga of King Olaf' in 1863, and the Faroese ballad 'Ormurin langi', by Jens Christian Djurhuus (c. 1830), is one of the most popular in the Faroe Islands. In September 2000, a thousand years later, an opera about Olaf, by Ragnar Søderlind, premiered." }
      ]}
    ]
  },

  stiklestad: {
    war: "Olaf II's attempt to regain the Norwegian throne (1030)",
    hook: "The king came back from exile to take the crown back and died on a farm in the Verdal valley. He became a saint, and Norway became truly Christian.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "When Olaf Haraldsson returned from Viking expeditions, in 1015, he was elected king of Norway. In June 1016 he defeated at Nesjar the jarls of Lade, the family that had ruled the country with Danish support. His reign ended when Norwegian chiefs, allies of Cnut, drove him out.",
        "In 1028, Cnut the Great, king of England and Denmark, allied with the Lade family, and Olaf went into exile in Kievan Rus. In 1029, the last jarl of Lade, Haakon Ericsson, drowned. Olaf saw his chance to return. The Swedish king Anund Jacob gave him 400 men and guides through the Dalarna region. Dag Hringsson, an exiled Norwegian noble and Anund's governor, joined him on the condition that his lands be returned. Olaf also recruited bandits and gathered in Jämtland.",
        { h: "The Road to Stiklestad" },
        { timeline: [
          ["1015", "Olaf Haraldsson returns to Norway and is elected king."],
          ["June 1016", "He defeats the jarls of Lade at Nesjar."],
          ["1028", "Cnut the Great allies with the Lade family. Olaf flees to Kievan Rus."],
          ["1029", "The last jarl of Lade, Haakon Ericsson, drowns. Olaf prepares to return."],
          ["1030", "Olaf crosses Sweden, crosses the mountains and descends into the Verdal valley, some 80 km north of Trondheim."]
        ]},
        "Why did he go straight to the most hostile region, Trøndelag, instead of gathering allies in eastern Norway? It is not known for certain. The Stiklestad museum says that Danish resistance in the east pushed him onto the path through Jämtland and Verdal, but historians remain without a clear answer."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Olaf II Haraldsson" },
        "Historians describe him as stubborn, impulsive and inclined to violence. At Stiklestad, he had at his side Dag Hringsson and his half-brother Harald Hardrada, then about 15 years old. According to some sources, Harald was supposed to stay in the camp and persuaded his brother to let him fight. He was wounded and fled, and the locals hid him without knowing who he was.",
        { h: "The Chiefs of the Farmers" },
        "Kalf Arnesson, of Egge, had been an ally of the king and led the farmers of Trøndelag. Four of his brothers were at the king's side. Before the fight, Kalf tells Olaf that they separated so that the farmers would seek peace, and suggests that each stay where he is. His brother Finn, who is with the king, warns: when Kalf speaks fair, it is to do harm. Thorir Hund, of Bjarkøy, known for a reindeer-skin coat on which swords did not bite, and Harek of Tjøtta also led.",
        { h: "The Other Names" },
        "Bjørn the marshal was the king's man. Thorstein Knarresmith, a shipbuilder, had a grudge: Olaf had taken a large merchant ship of his as payment of a fine for homicide. He asked to fight in Thorir Hund's troop, wanting to be the first to strike the king. Thord Folason was Olaf's standard-bearer."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "Everything we know about the numbers comes from the sagas, especially the Heimskringla of Snorri Sturluson, written about 200 years later. The king's army is given as around 3,600 men on the march, and nearly 6,600 counting the hird and the Swedish auxiliaries. The farmers were, according to Snorri, 'a hundred times a hundred', but in long hundreds, that is, 14,400. One translation speaks of at least 10,000. The skald Sigvatr, a contemporary, says the king had less than half the enemy. The losses, according to Wikipedia, would have been 4,200 on the king's side and 4,600 on the farmers' side, but the sagas themselves are not a safe source of numbers.",
        { note: "The size of the armies in the sagas will probably never be determined. The farmer army seems to have been assembled in haste." },
        { h: "The Terrain and the Deployment" },
        "The field lies on the Stiklestad farm, in the lower Verdal valley, today a region of Trøndelag. In 2008, georadar surveys showed large ancient buildings, but no clear trace of the battlefield. For that reason the exact place of the fight is uncertain.",
        "According to Snorri, the farmers formed up like this: Kalf Arnesson raised his standard with the household servants and with Harek of Tjøtta. Thorir Hund and his troop stood in front of the main standard, with chosen farmers from both sides. The main line was long and dense, of people from Trøndelag and Hålogaland. Another formation stood on the right. To the left of the center were men from Rogaland, Hordaland, the fjords and Sogn, with the third standard. The king waited on higher ground.",
        { h: "The Day" },
        "The battle, by tradition, was on a Wednesday, 29 July 1030. Snorri gives the day as the fourth before the Kalends of August. The two sides faced each other for a while. The farmers waited for stragglers, and Thorir Hund arrived last. The king waited for Dag and his men, who appeared. The farmers' cry was 'Forward, forward, farmers!', and that of the king's men, 'Forward, forward, Christmen, crossmen, kingsmen!'. Some farmers, on the wings, repeated the king's cry and were attacked by their own side, by mistake, until they recognized one another.",
        "Thorir Hund advanced in front of the standard and called on the farmers. There was an exchange of arrows and spears. The day, which had begun clear and sunny, turned reddish when the fighting began and, before the end, dark as night. The king's army, on high ground, came down and pushed the farmers back. Many began to flee, but the lendmenn and their men held, and the fight hardened. The farmers attacked from all sides, with swords in front, spears behind and arrows, stones, hatchets and stakes in the last ranks.",
        "Right at the start, Arnljot Gelline, Gauka-Thorer and Afrafaste fell with all their men. The ranks in front of the king's standard thinned, and Olaf ordered Thord to advance with the standard, following behind with his chosen troop, the best armed. He came out from behind the shield wall and, according to Snorri, the farmers, seeing his face, were frightened and lowered their weapons. He fought in front, and cut down Torgeir of Kviststad, a lendmann. Thord drove the standard's shaft so deep into the ground that it stood upright, and fell dead beneath it.",
        "The sun vanished, although the sky was clear, and it grew dark. Dag Hringsson arrived with his men, formed up and raised the standard, but the dark made it hard to tell who the enemy was, and the attack was slow. It went against the men of Hordaland and Rogaland.",
        "In the center, the king struck Thorir Hund on the shoulders, but the sword did not cut the reindeer-skin coat. Thorir wounded him in the hands. The king ordered the marshal Bjørn to kill 'the dog': Bjørn struck Thorir's shoulder with the hammer side of the axe, and Thorir staggered. Thorir then pierced Bjørn with his spear and said that this was how one hunted the bear (bjørn means bear). Thorstein Knarresmith struck the king's left leg, above the knee, and Finn Arnason killed him at once. The king, wounded, leaned against a stone, dropped his sword and asked God for help. Thorir Hund ran him through with the spear, under the mail shirt, in the belly. Kalf struck him on the left side of the neck, although not all sources agree that it was he. Those three blows killed Olaf.",
        "Dag kept fighting, but, when the king's flank collapsed, Kalf and Thorir attacked him in a wedge and forced him to fall back with the rest of the army."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "The body was buried in secret, on the sandy bank of the Nidelva river, south of Trondheim. According to Snorri, Thorir Hund returned to the field on the fifth day, a Thursday, but did not find the body, and many people spread the word that Olaf had escaped and would return with an army.",
        "The following year, the grave was opened and, according to Snorri, the body was intact, with hair and nails grown. The coffin was taken to St. Clement's church, in Trondheim. Bishop Grimkell, one of those whom Olaf brought from England, began the beatification on 3 August (Wikipedia does not give the year). On the canonization, Wikipedia gives different versions: Pope Alexander III is said to have declared him a saint in 1164, but the body of the article says it was the bishop of Nidaros, about a year after the death. The cathedral of Nidaros was built about a century later on the site of the first grave.",
        "After the king's death, Cnut's wife, Ælfgifu of Northampton, and their son, Svein, ruled harshly. The cult of the martyr grew and helped feed the revolt against Danish rule. Svein ruled Norway for five years. When Magnus the Good, Olaf's illegitimate son, claimed the throne, Cnut gave way. A century of prosperity followed.",
        { h: "Why It Matters" },
        "Olaf became the patron saint of Norway, and the rex perpetuus Norvegiae, the eternal king. His cult is said to have united the country and completed the conversion. There is a church at Stiklestad over the stone on which he fell, and the stone is said to be inside the altar. The silver shrine was melted down at the Reformation, and the remains were buried somewhere in the cathedral, nobody knows where.",
        "In culture, the poem 'Tord Foleson', by Per Sivle (1901), tells the story of the standard-bearer who plants the banner before dying. Since 1954, every end of July, the St. Olav Drama is staged at Stiklestad, the largest open-air theater in Scandinavia.",
        { h: "Curiosities and Controversies" },
        { note: "The date and the eclipse: Snorri says the sun darkened during the battle, and the idea is of an eclipse. The real eclipse, however, occurred on 31 August 1030, more than a month after 29 July. Some scholars have proposed moving the battle to 31 August, others kept July and suggest that the memory of a later eclipse was mixed into the story, and others avoided choosing. The most used date remains 29 July." },
        { note: "The main source, Snorri, writes two hundred years later and likes the grand. The number of men is uncertain, and the scenes (the reindeer skin, the marshal Bjørn and the bear) have a saga flavor." }
      ]}
    ]
  },

  dandanaqan: {
    war: "Wars between the Seljuks and the Ghaznavids (1035–1040)",
    hook: "Nomadic herders against the richest army in the East: the winner was the one who knew how to use thirst.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "At the start of the 11th century, eastern Iran and Central Asia were dominated by the empire of the [[Ghaznavids|gaznévidas]], a Turkic dynasty of Ghazni (today in Afghanistan). Its sultan Masud I, son of the famous Mahmud of Ghazni, had the largest and best-equipped army in the region: heavy cavalry, infantry, a long baggage column and war elephants. It was an army designed for pitched battles and sieges like those Mahmud had waged in India.",
        "On the other side were the Seljuk [[Turkmen|turcomanos]], nomads of an Oghuz tribe who wandered back and forth with their flocks. In 1034, the Qara-Khanids drove them out of Transoxiana, and they settled in Khwarazm under a Ghaznavid governor, Harun. In 1035, after Harun's assassination, they fled across the Kara Kum desert toward Merv and ended up in Nasa, on the edge of [[Khorasan|corasão]].",
        { h: "The Road to Dandanaqan" },
        { timeline: [
          ["1034", "The Qara-Khanids drive the Seljuks out of Transoxiana."],
          ["1035", "The Seljuks flee to Nasa. Masud sends the general Iltughdi, who at first beats them and then loses discipline in the quarrel over plunder. Chaghri returns and destroys the disorganized army."],
          ["1037–1038", "The Seljuks take Merv and Nishapur, according to one of the sources."],
          ["1039", "Masud retakes Nishapur and spends the winter there. The city suffers from hunger."],
          ["23 May 1040", "Dandanaqan."]
        ]},
        "Masud tried to appease them: he gave the Seljuks three cities in Khorasan, Dihistan, Nasa and Farawa. But the raids continued as far as Balkh, and they ended up taking all of Khorasan. The sultan decided to put an end to it once and for all."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Masud I, Ghaznavid sultan" },
        "He commanded an army made for another kind of war. According to Bayhaqi, a chancery secretary who was there and wrote a day-by-day account, Masud refused to listen to advice. Bayhaqi wrote about twenty years later and was an official loyal to the regime, so he had reason to blame bad advisers and betrayals.",
        { h: "Tughril and Chaghri, Seljuk chiefs" },
        "They were brothers and commanded the Seljuks. After the victory, they divided the lands: Tughril was proclaimed ruler of Khorasan and advanced west, toward Rey and central Iran; Chaghri took Merv and the east; other relatives took Herat, Sistan and the frontiers, according to one of the sources."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The Forces" },
        "The numbers are uncertain. The Ghaznavid army runs from 16,000 to 50,000 men, according to the sources, and the elephants from 12 or 60 to 100 and even 300. The Seljuks, from 16,000 (Lambton) to 20,000. C. E. Bosworth, who studied the Ghaznavids in depth, thinks that Masud did not bring 50,000 men or 300 elephants to Khorasan. And that, at the time of the battle, the Ghaznavids, hungry and demoralized, were probably the same size as the Seljuks.",
        { h: "The War of Thirst" },
        "The Seljuks avoided the pitched battle that Masud wanted. They attacked the columns, cut the supply lines, moved their families and flocks out of the way and shot from a distance, with bows, and then fell back. By the winter of 1039, Khorasan was already exhausted by Ghaznavid taxes and by the two armies.",
        "In the spring of 1040, Masud decided to attack Merv, the Seljuk base, marching from Sarakhs through the desert and the dry steppe. The Turkmen had destroyed or blocked the wells along the way. The army marched in the full heat of late May, with little water, harried by horse archers. Discipline began to be lost. The commanders argued, and the Turkish guard units complained about their treatment.",
        { h: "The Battle" },
        "Masud expected to find water at the small fort of Dandanaqan, between Merv and Sarakhs, but the troops were already exhausted when the armies met. According to Bayhaqi's narrative, the Seljuks attacked a tired army, thirsty and without cohesion. Some units broke, others deserted or fled, and the Ghaznavid line collapsed. Masud fought, but escaped with only part of the guard. The camp, the baggage and the treasure went to the Seljuks.",
        { note: "The accounts that have reached us describe the battle in general terms, without saying where each troop stood or how it moved. For that reason there is no formation diagram here: it would be inventing." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Ghaznavid losses are unknown, but were probably heavy. Masud went back to Ghazni, judged that he could not defend it and set off for India with the treasure. At the end of 1040, the troops mutinied, seized the treasure and returned the throne to his brother Muhammad, who was blind. Masud was imprisoned and killed in early 1041. His son Mawdud avenged him and restored the line, but the Ghaznavids were reduced to the highlands of Afghanistan and the Punjab.",
        "The Seljuks took Herat, Sistan, Pushang and Ghur, and besieged Balkh. They sent a letter to the Abbasid caliph al-Qa'im, in Baghdad, announcing the victory and presenting themselves as good Sunni Muslims, which prepared Tughril's entry into Baghdad, in 1055. By 1047, he was already minting coins at Nishapur with the titles of 'the great sultan' and 'king of kings' (Shahanshah).",
        { h: "Why It Matters" },
        "The battle ended Ghaznavid rule in Greater Khorasan. In about fifteen years, the Seljuks conquered the rest of the Iranian plateau, and by 1071 they were already facing the Byzantines at Manzikert. Khorasan passed to the Khwarazmians in 1138 and to the Ghurids in 1173.",
        { h: "Curiosities and Controversies" },
        { note: "The elephants: the sources speak of 12, of 60, of 100 (Bosworth) and of 300 (Sicker). The numbers do not match." },
        { note: "There is also disagreement about the start of the war: one source says the Seljuks took Merv and Nishapur in 1037–1038. The other says that, in 1035, Masud gave them three cities, and that only afterward, with the raids as far as Balkh, did they take all of Khorasan." },
        { note: "The best-known image of the battle comes from a manuscript of 1543, written in Samarkand. It is not from the period." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  hastings: {
    terrain: [{ t: "hill", x: 50, y: 17, rx: 44, ry: 10, l: "Senlac Hill (or Caldbec)" }],
    units: [
      { id: "eA", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "eB", s: "b", k: "inf", w: 26, h: 5, l: "Shield wall (Harold)" },
      { id: "eC", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "nArc", s: "a", k: "inf", w: 50, h: 2.5, l: "Archers" },
      { id: "nInf", s: "a", k: "inf", w: 50, h: 4, l: "Infantry" },
      { id: "nCavL", s: "a", k: "cav", w: 14, h: 5, l: "Bretons (Alan the Red)" },
      { id: "nCavC", s: "a", k: "cav", w: 16, h: 5, l: "William" },
      { id: "nCavR", s: "a", k: "cav", w: 14, h: 5, l: "French and Flemings" }
    ],
    steps: [
      { t: "Saturday, 14 October 1066. The English fight on foot, in a shield wall on the top of the hill, with woodland and wet ground on the flanks. William has three divisions: archers in front, spearmen behind and cavalry in reserve.",
        p: { eA: [27, 19], eB: [50, 19], eC: [73, 19], nArc: [50, 43], nInf: [50, 50], nCavL: [22, 60], nCavC: [50, 60], nCavR: [78, 60] } },
      { t: "Around 9 a.m., the archers advance and shoot uphill. The arrows strike the shields or fly over, with little effect.",
        p: { nArc: [50, 34], nInf: [50, 44] } },
      { t: "The infantry climbs and is met with spears, axes and stones. The cavalry goes up to help. The wall holds.",
        p: { nInf: [50, 28], nCavL: [22, 38], nCavC: [50, 38], nCavR: [78, 38] } },
      { t: "The left wing, of Bretons, falls back, and the retreat spreads. The rumor runs that William is dead.",
        p: { nCavL: [10, 54], nInf: [50, 40], nCavC: [50, 50], nCavR: [80, 50] } },
      { t: "William rides among his men, face uncovered, and counterattacks. Part of the English goes down the hill to pursue and is surrounded. The Tapestry shows Gyrth and Leofwine dying around here, but other sources put them dead near Harold, at the end.",
        p: { eA: [22, 40], nCavC: [34, 44, -35], nCavL: [16, 40] }, x: ["eA"] },
      { t: "A pause early in the afternoon. The Normans regroup at the foot of the hill.",
        p: { nCavL: [22, 44], nCavC: [50, 44], nCavR: [78, 44], nInf: [50, 36], nArc: [50, 40] } },
      { t: "According to William of Poitiers, the Normans pretend to flee twice. Part of the English leaves the wall to chase them.",
        p: { nCavR: [88, 50], eC: [80, 34] } },
      { t: "Those who left are cut off. The wall loses housecarls, who are replaced by men of the fyrd, and gets shorter, but stays standing. The archers begin shooting again.",
        p: { nCavR: [78, 36, -35], nArc: [50, 30], nInf: [50, 26] }, x: ["eC"] },
      { t: "Late in the afternoon, Harold dies. The sources disagree: arrow in the eye, sword blow, or nobody could say. The housecarls fight around the body.",
        p: { nCavL: [28, 28], nCavC: [50, 28], nCavR: [72, 28], nInf: [50, 24] }, x: ["eB"] },
      { t: "Without a leader, the English army falls apart and flees. At Malfosse, a rearguard still wounds Eustace of Boulogne before being destroyed.",
        p: { nCavL: [26, 14], nCavC: [50, 12], nCavR: [74, 14], nInf: [50, 20] } }
    ]
  },

  manzikert: {
    terrain: [
      { t: "hill", x: 50, y: 8, rx: 46, ry: 7, l: "Hills near Manzikert" },
      { t: "note", x: 86, y: 70, l: "North ↑" }
    ],
    units: [
      { id: "sC", s: "a", k: "cav", w: 20, h: 5, l: "Horse archers (center)" },
      { id: "sL", s: "a", k: "cav", w: 16, h: 5, l: "" },
      { id: "sR", s: "a", k: "cav", w: 16, h: 5, l: "" },
      { id: "sCamp", s: "a", k: "camp", w: 10, h: 5, l: "Alp Arslan's camp" },
      { id: "bL", s: "b", k: "inf", w: 20, h: 5, l: "Bryennios" },
      { id: "bC", s: "b", k: "inf", w: 22, h: 5, l: "Romanos and Varangians" },
      { id: "bR", s: "b", k: "inf", w: 20, h: 5, l: "Alyates" },
      { id: "bRes", s: "b", k: "inf", w: 16, h: 4, l: "Reserve (Andronikos Doukas)" },
      { id: "bCamp", s: "b", k: "camp", w: 10, h: 5, l: "Manzikert" }
    ],
    steps: [
      { t: "26 August 1071. The Byzantines are in three groups, with Andronikos Doukas's reserve behind. The Seljuks wait, in a crescent, about 4 km away.",
        p: { sC: [50, 22], sL: [20, 28, -20], sR: [80, 28, 20], sCamp: [50, 6], bL: [26, 52], bC: [50, 52], bR: [74, 52], bRes: [50, 62], bCamp: [10, 64] } },
      { t: "The Byzantines advance. The horse archers shoot without pause. The center of the crescent falls back, and the tips close in from the sides.",
        p: { bL: [26, 42], bC: [50, 40], bR: [74, 42], bRes: [50, 56], sC: [50, 14], sL: [14, 34, -45], sR: [86, 34, 45] } },
      { t: "All day long, the Turks fall back and shoot, and avoid hand-to-hand fighting. The Byzantine wings suffer from the arrows.",
        p: { bL: [26, 30], bC: [50, 26], bR: [74, 30], bRes: [50, 52], sL: [8, 40, -70], sR: [92, 40, 70] } },
      { t: "Late in the afternoon, the Byzantines take Alp Arslan's camp. But the wings, the most hit by the arrows, nearly broke while trying to force a real battle, and the Turks keep fleeing from hand-to-hand fighting.",
        p: { bC: [50, 12], sC: [50, 24] } },
      { t: "At nightfall, Romanos orders a return. The right wing misunderstands the order, and Andronikos Doukas, instead of covering the retreat, goes back to the camp.",
        p: { bC: [50, 28, 180], bL: [26, 34], bR: [74, 34], bRes: [24, 64] } },
      { t: "The Seljuks attack the confusion. The Byzantine right wing comes apart, perhaps thinking it was betrayed by Armenians or by allied Turks.",
        p: { sL: [34, 40, -20], sR: [78, 40, 20], sC: [58, 34] }, x: ["bR"] },
      { t: "Bryennios's left falls as well. The center, with the emperor and the Varangians, is surrounded. Romanos, wounded, is captured. The pursuit lasts all night.",
        p: { sL: [36, 28], sR: [64, 28], sC: [50, 38] }, x: ["bL"] },
      { t: "The Seljuks do not pursue the rest. Many units survive, and the army regroups at Dokeia, where Romanos finds it after his release. The defeat was smaller than legend says, and the civil war that followed did more damage.",
        p: { bRes: [20, 64] }, x: ["bC"] }
    ]
  },

  jerusalem1099: {
    terrain: [
      { t: "hill", x: 50, y: 34, rx: 24, ry: 14, l: "Jerusalem (walls)" },
      { t: "note", x: 20, y: 44, l: "Tower of David" },
      { t: "note", x: 50, y: 70, l: "Mount Zion" },
      { t: "note", x: 94, y: 10, l: "Mount of Olives" },
      { t: "note", x: 8, y: 6, l: "North ↑" }
    ],
    units: [
      { id: "cNor", s: "a", k: "inf", w: 14, h: 5, l: "Robert of Normandy" },
      { id: "cFla", s: "a", k: "inf", w: 14, h: 5, l: "Robert of Flanders" },
      { id: "cGod", s: "a", k: "inf", w: 14, h: 5, l: "Godfrey" },
      { id: "cTan", s: "a", k: "cav", w: 10, h: 5, l: "Tancred" },
      { id: "cRay", s: "a", k: "inf", w: 16, h: 5, l: "Raymond of Toulouse" },
      { id: "tGod", s: "a", k: "camp", w: 6, h: 6, l: "Timber and tower (Godfrey)" },
      { id: "tRay", s: "a", k: "camp", w: 6, h: 6, l: "Timber and tower (Raymond)" },
      { id: "fGar", s: "b", k: "inf", w: 22, h: 5, l: "Fatimid garrison (Iftikhar)" }
    ],
    steps: [
      { t: "7 June 1099. Robert of Normandy stands to the north, facing the Flowers Gate. Robert of Flanders stands to his right. Godfrey and Tancred cover the northwest corner. Raymond stands to the south. The east is unwatched. Inside, some thousand soldiers and 400 elite cavalry.",
        p: { cNor: [64, 12], cFla: [46, 12], cGod: [28, 14], cTan: [14, 20], cRay: [38, 58], tGod: [6, 30], tRay: [24, 64], fGar: [50, 34] } },
      { t: "13 June: first assault, with ladders and picks against the outer wall. It is not enough.",
        p: { cNor: [64, 18], cFla: [46, 18], cGod: [28, 20] } },
      { t: "The leaders see there is no point besieging without machines. There is almost no water, and the heat is fierce. On 17 June news arrives of ships at Jaffa, and wood is found far away. In almost three weeks, the towers are assembled.",
        p: { cNor: [64, 10], cFla: [46, 10], cGod: [28, 12], tGod: [18, 28], tRay: [30, 62] } },
      { t: "8 July: barefoot procession of priests and bishops around the walls to the Mount of Olives. From the top of the walls, the defenders jeer.",
        p: { cNor: [90, 22], cFla: [90, 30], cGod: [88, 40], cTan: [92, 48], cRay: [80, 56] } },
      { t: "Night of 13 to 14 July. The army of the north shifts to the northeast corner, with Godfrey's tower. Raymond attacks from the south, on Mount Zion. Tancred makes a feint in the northwest.",
        p: { cNor: [86, 14], cFla: [58, 10], cGod: [70, 12], cTan: [22, 16], cRay: [50, 58], tGod: [74, 16], tRay: [50, 52], fGar: [64, 28] } },
      { t: "14 July, to the sound of trumpets: the ram damages the wall, but jams. The attack stops at night.",
        p: { cGod: [70, 17], tGod: [74, 19], cNor: [86, 18], cFla: [58, 15] } },
      { t: "Friday, 15 July, midday: the assault resumes. Godfrey's tower touches the wall, and the men cross to the top. The defenders fall back in confusion.",
        p: { cGod: [70, 22], tGod: [74, 21], cNor: [84, 22], cFla: [58, 20], fGar: [54, 32] } },
      { t: "The city falls. The crusaders kill many people. Iftikhar takes refuge in the Tower of David and, according to the most cited version, surrenders to Raymond and leaves with an escort for Ascalon.",
        p: { cGod: [60, 32], cNor: [74, 34], cFla: [48, 30], cTan: [40, 38], cRay: [26, 40] }, x: ["fGar"] }
    ]
  },

  svolder: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 76, l: "Sea (location uncertain)" },
      { t: "hill", x: 78, y: 12, rx: 14, ry: 7, l: "Island" }
    ],
    units: [
      { id: "oVan", s: "b", k: "ship", w: 12, h: 6, l: "Olaf's ships" },
      { id: "oSerp", s: "b", k: "ship", w: 18, h: 5, l: "Long Serpent" },
      { id: "oRear", s: "b", k: "ship", w: 12, h: 6, l: "" },
      { id: "aDan", s: "a", k: "ship", w: 12, h: 5, l: "Danes (Sweyn)" },
      { id: "aSwe", s: "a", k: "ship", w: 12, h: 5, l: "Swedes (Olof)" },
      { id: "aEir", s: "a", k: "ship", w: 12, h: 5, l: "Járnbarðinn (Eirik)" }
    ],
    steps: [
      { t: "According to the sagas, Olaf returns from the south in a long, disordered column, not expecting an attack. The allies wait at anchor behind an island.",
        p: { oRear: [8, 52], oSerp: [26, 52], oVan: [46, 52], aDan: [66, 6], aSwe: [88, 6], aEir: [78, 22] } },
      { t: "Eirik holds back the impatient and identifies the ships as they pass. The allies leave their shelter. Olaf could flee, but decides to fight with his 11 ships.",
        p: { aDan: [64, 26], aSwe: [88, 26], aEir: [76, 38], oVan: [54, 52] } },
      { t: "Olaf lashes the ships side by side, with the Long Serpent in the middle and its prow sticking out of the line. It is a floating fort, and the Long Serpent, being tall, has the advantage with javelins.",
        p: { oVan: [40, 40], oSerp: [44, 49], oRear: [40, 58] } },
      { t: "Danes and Swedes attack the front of the line, lose ships and many men, and are repelled.",
        p: { aDan: [66, 40], aSwe: [66, 58], aEir: [80, 49] } },
      { t: "Eirik attacks the flank with the iron-clad Járnbarðinn and clears Olaf's ships one by one.",
        p: { aEir: [40, 28, 90] }, x: ["oVan"] },
      { t: "Only the Long Serpent is left. Einar Tambarskelfir tries to shoot Eirik and misses, and the archer Fin splits his bow in two.",
        p: { aEir: [40, 66, 90], aDan: [58, 40], aSwe: [58, 58] }, x: ["oRear"] },
      { t: "The Long Serpent is taken. Olaf, according to the sagas, vanishes from the stern: he threw himself into the sea, or was saved, or became legend.",
        p: { aDan: [52, 44], aSwe: [52, 54] }, x: ["oSerp"] }
    ]
  }
});
