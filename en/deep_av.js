// In-depth battles, batch av: philippi, stamfordbridge, nicopolis, chaldiran, leuthen (great-battles pack).
// Checked against the English, Portuguese, German and French Wikipedia articles on each battle, Britannica's
// entries where reachable, and the sources those pages cite (Appian, Plutarch and Cassius Dio for Philippi; the
// Anglo-Saxon Chronicle, Heimskringla, Henry of Huntingdon and Orderic Vitalis for Stamford Bridge; Schiltberger,
// Froissart and Nicolle for Nicopolis; Finkel, Savory and the Iranian and Ottoman accounts as summarised on
// Wikipedia and Wikishia for Chaldiran; Duffy and Rohdich as cited for Leuthen).
// Where sources disagree the text says so. Chaldiran gets no diagram: the sources contradict each other on which
// wing was where.

Object.assign(GLOSSARY, {
  "libertadores": "The name Brutus and Cassius gave their party: the men who had 'freed' Rome from a tyrant by killing Julius Caesar in 44 BC.",
  "via egnatia": "The great Roman road that linked the Adriatic to the Aegean across Macedonia. It ran through the battlefield of Philippi.",
  "liberto": "A former slave who had been freed but stayed tied to his old master by duties of loyalty. Many were trusted secretaries and assistants.",
  "proscrições": "Public lists of political enemies condemned to death, with their property confiscated. The triumvirs had hundreds of people killed this way, Cicero among them.",
  "colônia de veteranos": "A city founded by Rome to give land to retired soldiers, who also served as a loyal garrison in conquered territory.",
  "huscarls": "The professional personal guard of an Anglo-Saxon or Danish king or great noble, armed with mail and the great two-handed axe.",
  "earl": "The English title of a man who governed a large region on the king's behalf, such as Northumbria. It later became the English 'count'.",
  "heimskringla": "A collection of sagas of the kings of Norway, written by the Icelander Snorri Sturluson around 1230, almost 170 years after Stamford Bridge.",
  "crônica anglo-saxônica": "Annals in Old English, written by monks in several monasteries from the 9th century on. It is the English source closest to the events of 1066.",
  "akinji": "Irregular Ottoman light cavalry, which rode ahead of the army to raid, scout the ground and delay the enemy.",
  "qizilbash": "The 'red heads': tribal Turkmen warriors devoted to the Safavid shahs, who wore a red cap. They were the dynasty's cavalry.",
  "xiita": "The branch of Islam that follows the descendants of Ali, the Prophet's son-in-law. The Safavids imposed it on Iran, where it became the state religion.",
  "murshid": "The spiritual guide of a Sufi order. The Qizilbash treated Shah Ismail as a murshid: they obeyed him as an almost infallible master.",
  "safávidas": "The Persian dynasty founded by Ismail I in 1501, in Tabriz. It ruled Iran until 1736 and made Shiism the state religion.",
  "muralha de carroças": "A line of wagons placed side by side and sometimes chained together, which protected gunners and cannons against cavalry.",
  "hussardos": "Light cavalry of Hungarian origin, used to scout, chase fugitives and attack the enemy's rear.",
  "fogo de enfiada": "Fire shot along the enemy line, from the side rather than from the front. Each shot can hit several soldiers.",
  "coral luterano": "A hymn sung in German by the faithful of the Lutheran Church, the religion of most Prussian soldiers.",
  "silésia": "A rich province in central Europe, today in southwestern Poland. Prussia took it from Austria in 1740.",
  "marechal de campo": "The highest rank in the Prussian and Austrian armies, equivalent to field marshal."
});

Object.assign(DEEP, {
  philippi: {
    war: "Civil war of the Liberators (43–42 BC)",
    hook: "Two battles, a twenty-day gap and two suicides: this is how the Roman Republic lost its last chance to return.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "On 15 March 44 BC, a group of senators led by Brutus and Cassius killed Julius Caesar, who had become dictator for life. They saw themselves as [[Liberators|libertadores]] of a tyrant and hoped Rome would become a republic again. It did not. The people liked Caesar, and so did his soldiers.",
        "The cause passed to Octavian, Caesar's great-nephew and adopted son, about 20 years old, and to Mark Antony, his lieutenant, an experienced soldier. In November 43 BC the two joined Lepidus in the [[triumvirate|triunvirato]] and ordered [[proscriptions|proscrições]] against their enemies. Cicero was one of the victims. Meanwhile Brutus and Cassius took the East, raised money and built an army of 17 legions.",
        { h: "The road to Philippi" },
        { timeline: [
          ["15 March 44 BC", "Julius Caesar is assassinated in the Senate."],
          ["November 43 BC", "Antony, Octavian and Lepidus form the triumvirate and begin the proscriptions."],
          ["Summer 42 BC", "The triumvirs cross the Adriatic with 28 legions. Brutus and Cassius wait for them in Macedonia."],
          ["3 October", "First battle of Philippi."],
          ["23 October", "Second battle of Philippi."]
        ]},
        "The situation was this: the Liberators controlled the sea, with a fleet of about 130 ships under Domitius Ahenobarbus, and could wait. The triumvirs, with their supplies threatened by sea, needed a quick battle."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Brutus, about 43 years old" },
        "A philosopher, from a family that claimed descent from the founder of the Republic. Caesar had pardoned him after a civil war and he killed Caesar anyway, on principle. He was honest and idealistic, but he was not the best soldier in his army. Plutarch has him saying that he felt more commanded than commanding, pushed by his officers.",
        { h: "Cassius" },
        "Brutus's brother-in-law and the more experienced of the two in war. His death, at the end of the first day, took the confidence out of the army.",
        { h: "Mark Antony, about 41 years old" },
        "A veteran of Caesar and the real military commander of the triumvirs. It was he who made the bold decision of the causeway through the marsh. Philippi was the peak of his career.",
        { h: "Octavian, about 20 years old" },
        "Ill during the campaign, he was left behind at Dyrrachium. He reached Philippi, but he was not the hero of the battle. In his memoirs he spoke of a dream that supposedly warned him, and Pliny says he hid in the marsh. He would later be Augustus, the first emperor."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "The ancient sources give no totals. According to Appian, the triumvirs had 19 nearly full legions and about 13,000 cavalry. The Liberators had 17 legions, 8 under Brutus and 9 under Cassius, and about 20,000 cavalry, including 5,000 mounted archers from the East. The modern historian Adrian Goldsworthy thinks that in practice each side had between 40,000 and 50,000 legionaries, because the legions were not at full strength. General estimates range from 53,000 to 108,000 for the triumvirs and from 60,000 to 105,000 for the Liberators.",
        { note: "The numbers are the most uncertain point of the battle. We show the legions the sources mention and the ranges of modern historians." },
        { h: "The terrain" },
        "The plain about 3.5 km west of Philippi, cut in two by the [[Via Egnatia|via egnatia]]. The Liberators held the hills, with a marsh thought impassable to the south and hills to the north, and surrounded their camp with ditches and walls. Brutus was north of the road, Cassius south. The triumvirs were on the plain: Octavian to the north, Antony to the south. Antony offered battle several times, and the Liberators, who could afford to wait, refused.",
        { h: "The first battle, 3 October" },
        { formation: true },
        "First, Antony decided to force the issue. In secret, he built a causeway across the marsh, to fall on Cassius's flank. Cassius noticed, took part of his army south and built a transverse wall to cut the causeway.",
        "Second, Antony attacked the wall. He broke the line and took Cassius's camp. Cassius's men who had advanced to the south were driven back.",
        "Third, at the other end of the line, Brutus's troops, provoked by Octavian's soldiers, attacked before the agreed signal, which was the watchword 'Liberty'. It worked: Octavian's soldiers ran. Messalla, one of Brutus's officers, took Octavian's camp, and three legions lost their standards. Octavian was not in his tent.",
        "Fourth, dust and the size of the field kept the two wings from seeing each other. Cassius, from a hill, thought he had been beaten and that Brutus had been too. According to Plutarch, he sent his friend Titinius to check whether the horsemen approaching were friends; from afar, he saw Titinius surrounded and thought he had been captured. He had his [[freedman|liberto]] Pindarus kill him. Titinius came back, found the body and killed himself too. Brutus called him 'the last of the Romans' and avoided a public funeral, so as not to break the army's morale.",
        "The day's losses, according to the sources, were about 8,000 men on Cassius's side and 16,000 on Octavian's.",
        { h: "Twenty days" },
        "On the same day as the first battle, the Liberators' fleet intercepted and destroyed reinforcements for the triumvirs, led by Domitius Calvinus. Brutus may not even have known. Antony advanced slowly south and fortified a hill near Cassius's old camp. Brutus lengthened his line, but his eastern flank was left weak. There were desertions of eastern allies and mercenaries. After the first battle he had promised each soldier another 1,000 denarii, but the troops were restless. On the afternoon of 23 October, he attacked.",
        { h: "The second battle, 23 October" },
        "It was hand-to-hand fighting, mostly with swords. According to Cassius Dio, almost no missile weapons were used. Brutus's wing broke the triumvirs' left and chased it. But his thin centre gave way at the first clash, and the triumvirs turned on Brutus's flank and rear. His reserves did not arrive in time, and Octavian's soldiers took the gates of his camp. Brutus fled to the hills with about four legions' worth of men."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "With defeat unavoidable, Brutus killed himself, helped by a friend, Strato, according to Plutarch. Cassius Dio says he quoted a Greek tragedy, saying that Virtue was only a name. Antony covered his body with his purple cloak. Many young aristocrats also died, among them the son of Cato the Younger. Some nobles, such as Bibulus and Messalla, surrendered to Antony. About 14,000 Liberator soldiers were absorbed into the winners' army. The most quoted estimate for the two fights is about 40,000 dead, without a split by battle.",
        { h: "Why it matters" },
        "The Republic lost its last army able to defend it. The triumvirs went separate ways: Antony kept the East, which would lead him to Cleopatra, and Octavian went back to Italy to settle the veterans. Philippi became a [[veterans' colony|colônia de veteranos]]. In 31 BC, Octavian would beat Antony at Actium and, in 27 BC, become Augustus.",
        { h: "Curiosities and controversies" },
        { note: "According to Plutarch, Brutus twice saw a spectre, which told him it was his evil spirit and that he would see it at Philippi. It is a literary tradition, not a verified fact." },
        { note: "What happened to Octavian on the first day is disputed. Pliny says he hid in the marsh; his memoirs speak of a dream that warned him." },
        { note: "The main sources, Appian, Plutarch and Cassius Dio, wrote 140 to 260 years later and contradict each other in details, such as the numbers and what Cassius saw from his hill." }
      ]}
    ]
  },

  stamfordbridge: {
    war: "The invasions of 1066: the English succession crisis",
    hook: "Three weeks before Hastings, an English king rode about 300 kilometres to destroy a Viking army.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "On 5 January 1066, Edward the Confessor, King of England, died without children. The next day Harold Godwinson, the most powerful man in the kingdom, was crowned. But he had rivals. Duke William of Normandy said Edward had promised him the throne. And Harald Hardrada, King of Norway, claimed a right that came from an old agreement between his predecessors and the king of Denmark and England.",
        "There was also a third player, Harold's brother Tostig. He had governed Northumbria as [[earl]], but the northerners threw him out in 1065 and, since Harold did not back him, he went into exile. He spent the start of 1066 raiding the English coast and ended up allied with Hardrada.",
        { h: "The road to Stamford Bridge" },
        { timeline: [
          ["5 January 1066", "Edward the Confessor dies. Harold is crowned."],
          ["Summer", "Harold waits in the south for William's invasion."],
          ["September", "Hardrada and Tostig land at Riccall, near York, with a fleet of about 300 ships (the chronicle's number)."],
          ["20 September", "The Norwegians beat Earls Edwin and Morcar at Fulford, near York. York surrenders."],
          ["25 September", "Harold arrives by surprise at Stamford Bridge."]
        ]},
        "The Norwegians expected hostages and supplies from the York region, and they set the meeting at Stamford Bridge. Harold, who was in the south waiting for William, heard of the landing and rode north, about 185 miles (nearly 300 km) in four days."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Harold Godwinson, about 44 years old" },
        "Son of Earl Godwin, he was [[Earl|earl]] of Wessex and, since January, king. The march north was so fast that it caught the enemy unprepared. He expected the attack from the south and had to decide, almost without time, which danger was greater. He chose to hit Hardrada first.",
        { h: "Harald Hardrada, about 51 years old" },
        "The nickname means 'hard ruler'. He spent years in the Varangian Guard of the Byzantine emperor and was one of the most famous warriors of the north. He was an experienced commander but, at Stamford Bridge, he was surprised.",
        { h: "Tostig Godwinson" },
        "The rebel brother. According to the saga, before the fight he received an offer of reconciliation (see the controversies at the end) and refused it, preferring to stay with Hardrada. He died in the battle.",
        { h: "The other names" },
        "Eystein Orre, one of the Norwegian chiefs, commanded the men left with the ships at Riccall. Earls Edwin and Morcar, beaten at Fulford, were not at Stamford Bridge."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "Historians estimate between 7,000 and 9,000 Norwegians, counting reinforcements from Orkney. The Anglo-Saxon Chronicle says the fleet had 300 ships; Snorri Sturluson, more than 200 warships, besides the cargo ships. The authors may have counted transports along with warships, so the ship numbers are less secure than the numbers of men. For the English there is no reliable total.",
        { note: "Part of the Norwegian army, Orre with it, was about 16 miles (25 km) away, at the ships in Riccall. So at Stamford Bridge only a part of it fought." },
        { h: "The terrain" },
        "Stamford Bridge, in East Yorkshire, where a bridge crosses the River Derwent. The English came from York. The Chronicle says the fight was 'beyond the bridge', but Charles Plummer suggested this is written from the Norwegian point of view, and Henry of Huntingdon also puts the fight to the west. The exact site is unknown: metal-detector finds near Low Catton have not yet been confirmed.",
        { h: "The battle" },
        { formation: true },
        "First, the surprise. The Norwegians did not know Harold was near. According to the saga, many had left their armour at the ships, because of the heat.",
        "Second, the bridge. The English arrival was held up there, which gave the Norwegians time to form a [[shield wall|parede de escudos]]. The Anglo-Saxon Chronicle and Henry of Huntingdon tell that a single Norwegian blocked the bridge and killed several English, until one of them attacked him from below, between the planks. It is a legend.",
        "Third, the English crossed, formed their own shield wall and attacked. Snorri's saga describes the Norwegian formation as a circle and says Harold attacked with cavalry. According to the same saga, the Norwegians, in their haste, broke formation to chase those who pulled back.",
        "Fourth, the death of the king. Hardrada was hit by an arrow in the throat and died. Tostig fell too.",
        "Fifth, Orre's run. Eystein Orre's men came running from the ships, in arms, and hit the English in a charge that Norwegian tradition calls 'Orre's storm'. Some, according to the saga, died of exhaustion on arrival. They held the English for a while, but Orre died, and the Norwegians were scattered. Fugitives drowned in the rivers, according to the Chronicle.",
        { h: "The end of the day" },
        "Harold accepted a truce with the survivors, among them Olaf, Hardrada's son, and Paul Thorfinnsson, Earl of Orkney, who promised not to attack England again. According to the Chronicle, 24 ships were enough to take them home, out of the more than 300 that had come."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Norwegians lost between 6,000 and 8,000 men, dead or missing, according to modern estimates. We do not know how many English died. The survivors spent the winter in Orkney, and Olaf went back to Norway in the spring. It was the last great Norwegian invasion of England, and some historians see Stamford Bridge as the symbolic end of the Viking Age.",
        "But Harold had no time to celebrate. On 28 September, three days later, William landed at Pevensey, in the south. Harold marched back. On 14 October, 19 days after Stamford Bridge, he was beaten and killed at Hastings.",
        { h: "Why it matters" },
        "The question is whether the effort of the previous weeks cost Harold Hastings. Historians are divided: the army lost men and arrived tired, but Hastings was a battle fought all day long. Either way, the outcome was one of the deepest breaks in English history: the Norman conquest.",
        { h: "Curiosities and controversies" },
        { note: "The offer to his brother: according to Snorri Sturluson, before the fight a horseman (said to be Harold) offered Tostig his old earldom. When asked what Hardrada would get, he answered: six feet of ground. It is the [[saga]], written long afterwards, and it is a legend." },
        { note: "The bones: Orderic Vitalis, who wrote decades later, says the field was still covered in bones. He may be repeating a tradition." },
        { note: "The sources: the [[Anglo-Saxon Chronicle|crônica anglo-saxônica]] (versions C, D and E) is the closest to the events; the [[Heimskringla|heimskringla]], by Snorri, was written around 1230 and mixes history and legend." }
      ]}
    ]
  },

  nicopolis: {
    war: "The Crusade of Nicopolis (1396)",
    hook: "The last great crusade of the Middle Ages was lost in an argument over who would enter the battle first.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "After the Battle of Kosovo, in 1389, the Ottomans controlled most of the Balkans. In 1394 Sultan Bayezid I began to besiege Constantinople, and the Bulgarian fortress of Nicopolis, on the Danube, had been his since 1393. Hungary lay just to the north, and the Hungarian king, Sigismund, asked Europe for help.",
        "Pope Boniface IX proclaimed a [[crusade|cruzada]] in 1394, although the Church was split by the Western Schism. The expedition was driven above all by the Duke of Burgundy, Philip the Bold, who wanted prestige, and it drew hundreds of French nobles. Burgundy and the Dukes of Orléans and Lancaster ended up staying home. Command passed to Philip's son, John, Count of Nevers, about 25 years old, with Enguerrand de Coucy as chief counsellor.",
        { h: "The road to Nicopolis" },
        { timeline: [
          ["1394", "The pope proclaims the crusade."],
          ["30 April 1396", "The French crusaders leave Dijon."],
          ["Summer", "They go down the Danube by way of Buda. Vidin surrenders; Oryahovo is sacked even after surrendering."],
          ["12 September", "They reach Nicopolis and besiege it."],
          ["25 September", "Bayezid arrives, and the battle takes place."]
        ]},
        "The crusaders had no siege engines and tried to beat the governor, Doğan Bey, by starvation. They also posted no sentries. Meanwhile, Bayezid was marching from Adrianople through the Shipka Pass."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Sigismund of Luxembourg, about 28 years old" },
        "King of Hungary since 1387, he knew the Turkish army, which raided his borders. He proposed a simple plan: the Wallachian soldiers, who had been fighting the Turks for years, would go in front, and the French knights would stay behind, as a second line. The French refused. Sigismund would later be Holy Roman Emperor.",
        { h: "John of Nevers and the French" },
        "John was young and there to win fame. The weight of command lay with the veterans: Philippe d'Eu, [[constable|condestável]] of France, Jean le Maingre, 'Boucicaut', [[marshal|marechal]], and Admiral Jean de Vienne. The chain of command was confused, and that was an important factor in the defeat.",
        { h: "Bayezid I" },
        "The Ottoman sultan, called 'Yıldırım', the Thunderbolt. He had beaten several neighbours and arrived by fast march. Among his vassals was the Serbian prince Stefan Lazarević, his brother-in-law.",
        { h: "The other names" },
        "Mircea I, prince of Wallachia, Sigismund's ally. Philibert de Naillac, Grand Master of the [[Hospitallers|hospitalários]], who fought beside the Hungarians."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "Nobody knows how many there were. Johann Schiltberger, who was there at 16 and was captured, speaks of 16,000 to 17,000 crusaders against 200,000 Turks. The Ottoman chronicler Şükrullah, in the 1460s, gives 130,000 crusaders against 60,000 Turks. German historians of the 19th century calculated between 7,500 and 15,000 crusaders and between 12,000 and 20,000 Ottomans. David Nicolle proposes 16,000 against 15,000. The French contingent would have had about 5,000 knights and squires and 6,000 archers and foot soldiers. On the Ottoman side there were about 1,500 Serbian horsemen under Stefan.",
        { note: "The numbers of the medieval chroniclers, on both sides, are probably greatly exaggerated. We use modern estimates." },
        { h: "The terrain" },
        "The crusaders stood in front of the hills, with Nicopolis and the Danube behind them. The Ottomans came down from the south. The slope and the plateau above were the setting of the French charge.",
        { h: "The council of war, 24 September" },
        "The evening before, Sigismund and Mircea proposed the plan with the Wallachians in front. The constable d'Eu refused, finding the idea dishonourable for French knights, and demanded the vanguard.",
        { h: "The battle" },
        { formation: true },
        "First, on the morning of the 25th, Sigismund asked for two hours to observe the enemy vanguard. D'Eu accused him of wanting to keep the glory for himself and advanced. Vienne and Coucy urged caution and were ignored.",
        "Second, the French, with their mounted archers, charged alone against the Ottomans coming down from the south. They rode over the first line, of conscripted soldiers, who fled.",
        "Third, behind that line, hidden by the [[akinji]], there was a [[palisade|paliçada]] of sharpened stakes at the height of the horses' chests, with archers of the [[Janissaries|janízaros]] behind it, according to one of the sources. The stakes and the arrows brought down many horses.",
        "Fourth, the French climbed the rest of the slope on foot and reached the plateau, exhausted. There they met Bayezid's reserve, the [[sipahis]], who attacked them with trumpets and drums. Vienne died, and Nevers was captured after his guard pleaded for his life. The French surrendered.",
        "Fifth, the sipahis enveloped the allies' flanks. Transylvanians and Wallachians withdrew. Stefan Lazarević's force of 1,500 Serbian horsemen reinforced the Turks at a decisive moment.",
        "Sixth, Sigismund, the master of the Hospitallers and the German troops fought to the end. The king fled by boat down the Danube to the Venetian ships, while Hermann of Cilli's force covered his escape. Garai's surrender helped end the fight."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Most of the crusader army died or was captured. Many who fled drowned in the Danube or starved on the way. On the morning of the 26th, Bayezid had the prisoners brought out. The French knight Jacques de Helly identified the nobles worth a [[ransom|resgate]]. Several thousand common prisoners were bound and executed in groups, from morning to late afternoon, in revenge, according to the sources, for the massacre of the hostages of Oryahovo. Estimates run from 300 to 3,000 executions, and some sources speak of up to 10,000.",
        "Jacques de Helly took the news to Paris at Christmas 1396. The French negotiated a ransom of 200,000 gold florins, and a down payment of 75,000 freed the nobles on 24 June 1397. Coucy died before that, in February, and so did d'Eu.",
        { h: "Why it matters" },
        "The defeat ended the hope of a crusade able to drive the Ottomans out of Europe. Western Europe would only seriously face them again in the Balkans in the 1440s. What remained of independent Bulgaria came to an end: the last tsar, Ivan Sratsimir, was captured. Bayezid would be beaten by Tamerlane in 1402, and his empire nearly collapsed.",
        { h: "Curiosities and controversies" },
        { note: "Blame: Sigismund blamed French pride. The chronicler Froissart compared the defeat to Roncesvalles. The Dutch historian Huizinga saw it as the result of a 'chivalrous adventure' unsuited to politics." },
        { note: "According to the Chronica Hungarorum, Sigismund boasted that the Hungarians would hold up the sky if it fell. It is tradition; the phrase cannot be verified." },
        { note: "Serbian tradition portrays the noble Vuk Branković, who fought on the Christian side, as a traitor, a 'Judas'. It is folklore." },
        { note: "Many stories about drunkenness and immorality in the crusader camp come from hostile chroniclers and cannot be verified. The presence of 3,000 English knights, which some authors cite, is unlikely; they may have been only Hospitallers of the English 'tongue'." }
      ]}
    ]
  },

  chaldiran: {
    war: "The Ottoman–Safavid wars (1514–1555)",
    hook: "A cavalry used to winning rode into the cannons. The result changed the map of the Middle East.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In 1501, the young Ismail, about 14 years old, proclaimed himself shah in Tabriz and made [[Shia|xiita]] Islam the official religion of Iran. He founded the [[Safavid|safávidas]] dynasty. His soldiers, the [[Qizilbash|qizilbash]], were Turkmen warriors who saw him not only as a king but as a [[murshid]], a spiritual master. Ismail came from a string of victories, and his reputation for invincibility helped.",
        "The problem is that many Qizilbash and sympathizers lived in Anatolia, inside the Sunni Ottoman Empire. In 1512, Selim I took the Ottoman throne after pushing aside his father and beating his brothers. He saw the Safavids as a political and religious threat. According to the sources, he had about 40,000 Qizilbash killed in Anatolia, a number probably exaggerated, and obtained a religious ruling declaring Ismail and the Qizilbash heretics.",
        { h: "The road to Chaldiran" },
        { timeline: [
          ["1501", "Ismail proclaims himself shah in Tabriz."],
          ["1512", "Selim I comes to the Ottoman throne."],
          ["Spring 1514", "Selim marches east with a large army."],
          ["23 August 1514", "Battle of Chaldiran."],
          ["7 September", "Selim enters Tabriz."]
        ]},
        "Ismail avoided combat and left scorched earth along the way, while the Uzbeks of Bukhara attacked the east of his realm. The Ottomans suffered from lack of food and the hard terrain of the Armenian mountains, and many soldiers were reluctant to fight other Muslims. The Janissaries even fired at the sultan's tent in protest. Selim, on learning that the Safavids were at Chaldiran, advanced quickly, partly to end the discontent."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Selim I, over 40 years old" },
        "Later called 'Yavuz', the Grim. He took power by force and was seen by his men as chosen by God. He sent Ismail a letter that mixed a claim to the caliphate with accusations of heresy. He brought between 100 and 200 cannons.",
        { h: "Ismail I, about 26 years old" },
        "Young, charismatic and confident after a string of victories. To the Qizilbash he was almost a saint. According to Iranian accounts, he and his men considered firearms a cowardly weapon, and that weighed on the result.",
        { h: "The other names" },
        "On the Ottoman side, commanders such as Bıyıklı Mehmed Pasha and Dukaginzade Ahmed Pasha; Hasan Pasha died in the battle. On the Safavid side, Durmish Khan Shamlu, Nur-Ali Khalifa and Muhammad Khan Ustajlu, who died. The sources disagree on each man's role and on who commanded each wing."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "The estimates are vague. The most quoted numbers give 60,000 to 100,000 Ottomans, with 100 to 200 cannons and about 100 mortars, and 40,000 to 80,000 Safavids, with no artillery. Some Iranian sources give smaller numbers, near 20,000 Safavids.",
        { note: "The numbers vary a lot between Ottoman, Iranian and European sources. There is no total accepted by everyone. We show the ranges." },
        { h: "The terrain" },
        "The plain of Chaldiran, in the northwest of present-day Iran, near Maku. It was open ground, good for cavalry. Selim took position on a hill, in the centre of the army.",
        { h: "The day of the battle" },
        "According to Safavid accounts, Muhammad Khan Ustajlu and Nur-Ali Khalifa asked to attack at once, before the tired Ottomans could rest and organize. Durmish Khan called the idea cowardly, and Ismail agreed. The Ottomans gained time to prepare.",
        { h: "The battle" },
        "The Ottomans placed the artillery and thousands of [[Janissaries|janízaros]] with [[firearms|arcabuz]] behind a barrier of wagons. Iranian historians speak of a [[wagon wall|muralha de carroças]] held together by chains; other sources mention a shallow trench. In front stood irregular infantry. The Safavids relied on cavalry with bows and maces. They attacked the wings, to avoid the artillery in the centre.",
        "According to one version, the attack began well: Ismail, leading the right wing, supposedly broke the Ottoman left wing and advanced toward the rear. But his own left wing was shattered by cannon fire, and the centre and right gave way too. The sources contradict each other on which wing was which, and so we show no diagram.",
        "The Ottoman [[artillery|artilharia]], more mobile than expected, and the Janissaries' firearms were the deciding factor. The Safavid cavalry suffered enormous losses.",
        "Ismail was wounded, and his horse got stuck in the mud. According to Safavid accounts, a Qizilbash who looked like him, Mirza Sultan Ali, passed himself off as the shah, and a lame man, Khidr Aqa, gave the king his horse. Ismail fled through Tabriz to Darjazin.",
        "Selim, suspecting a trap, did not allow a pursuit. The Ottomans only plundered the Safavid camp after dark."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The losses are much disputed. Most Iranian sources speak of about 5,000 dead in all, 3,000 Ottoman and 2,000 Safavid. Some Turkish researchers speak of 30,000 Ottomans and twice as many Iranians, a number that seems unlikely.",
        "On 7 September, Selim entered Tabriz, plundered the treasury and took craftsmen to Istanbul. About a week later he left: the Janissaries were unhappy, and he could not go further. Georgian light horsemen harassed the retreat. Ismail lost two wives and his harem to Selim.",
        { h: "Why it matters" },
        "The Ottomans annexed eastern Anatolia and part of Upper Mesopotamia. Control changed hands several times, until the Peace of Amasya in 1555, and the border only settled in 1639. The battle opened 41 years of war between the two empires. Ismail's prestige as an infallible leader suffered. He withdrew from affairs of state and never led another campaign. The Safavids began to use firearms, and his son Tahmasp would use cannons. The Mamluks of Egypt refused to congratulate Selim, who turned on them in 1516 and conquered Egypt in 1517. Several Kurdish chiefs switched sides, from the Safavids to the Ottomans.",
        { h: "Curiosities and controversies" },
        { note: "According to later accounts, Ismail took to drink and became downcast, and nobody saw him smile again after the battle. It cannot be verified." },
        { note: "Iranian sources say Selim promised not to use artillery and broke the promise. It is a one-sided account and has not been confirmed by other sources." },
        { note: "It is said that Selim had the noses of Ismail's envoys cut off when they came to fetch the captured wife, married to an Ottoman judge. There is no independent confirmation." },
        { note: "The oldest accounts include Venetian news reports and a Jewish chronicle, which disagree with the Ottoman and Safavid versions on several details." }
      ]}
    ]
  },

  leuthen: {
    war: "The Seven Years' War (1756–1763)",
    hook: "With half the men, Frederick the Great feigned an attack on one side and struck on the other. It is one of the most studied battles in military history.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In 1740, Frederick II of Prussia took the rich province of [[Silesia|silésia]] from Austria. The peace of 1748 confirmed the conquest, but Empress Maria Theresa did not accept it. In 1756 the Seven Years' War began, with small, poor Prussia against Austria, France and Russia at the same time.",
        "At the end of 1757, Frederick's situation looked lost. On 5 November, however, he beat the French and the Imperials at Rossbach. Meanwhile Prince Charles of Lorraine had taken Schweidnitz and Breslau in Silesia, and beaten the Prussians there on 22 November.",
        { h: "The road to Leuthen" },
        { timeline: [
          ["5 November", "Frederick wins at Rossbach."],
          ["22 November", "The Austrians take Breslau and beat the Prussians of Silesia."],
          ["Late November", "Frederick marches about 274 km in 12 days and gathers what was left of the Silesian army."],
          ["5 December", "Battle of Leuthen."]
        ]},
        "Before the battle, Frederick gathered his generals in the camp at Parchwitz and made a speech, in which he is said to have declared that he would attack the Austrians even in a strong position. The text was recorded later, and the words vary. It is a famous tradition: the painter Adolph von Menzel began a large picture of the moment."
      ]},
      { n: "02", title: "The Protagonists", blocks: [
        { h: "Frederick II, 45 years old" },
        "King and general at once. His great gamble at Leuthen was to move a small army with such speed and discipline that the enemy could not react. According to the German Wikipedia, he estimated his opponent at only 39,000 men, when there were more than 65,000.",
        { h: "Charles of Lorraine and Daun" },
        "Prince Charles, Maria Theresa's brother-in-law, commanded the army, with Field Marshal Leopold von Daun at his side. His mistake was to believe the false threat to the right flank and not to watch the left. After the battle, he was replaced by Daun and ended up governor of the Austrian Netherlands.",
        { h: "The other names" },
        "On the Prussian side: Prince Moritz of Anhalt-Dessau, who commanded the infantry and became [[field marshal|marechal de campo]] that night; Hans Joachim von Zieten, of the cavalry; Wedell, who led the first attack; Driesen, who commanded the cavalry at the decisive moment; and Möllendorff, with the Guards. On the Austrian side: Franz Leopold von Nádasdy and the cavalry general Joseph Lucchesi, who died in the battle."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "The Prussians numbered about 33,000 to 36,000, with 167 cannons, depending on the source. The Austrians numbered about 65,000 to 66,000, with 210 to 250 cannons, also depending on the source. The Austrian heavy artillery had been left at Breslau.",
        { h: "The terrain" },
        "A rolling, fertile plain, with little relief, soft ground and a few bogs. Low hills, such as the Schleierberg and the Sophienberg, hid the Prussian movements. The Austrians formed a line of almost 9 km, from Nypern in the north to Sagschütz in the south, with the village of Leuthen in the centre. Charles set up his command post in the tower of the Leuthen church. The Prussians came from the west, along the Neumarkt–Breslau road.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, the Prussians advanced to Borne and beat the Austrian force that was there. Then Frederick climbed a hill and saw the enemy line.",
        "Second, Frederick sent part of his cavalry and infantry to feign an attack on the Austrian right flank, the strongest. Charles took his reserves there, and his line stretched to almost 10 km.",
        "Third, shielded by fog and the hills, the Prussians marched south in columns, out of the enemy's sight. Zieten stayed with the cavalry near Radaxdorf.",
        "Fourth, around noon, they turned and lined up in two lines, at a right angle to the Austrian left flank. This was the [[oblique order|linha oblíqua]]: the attacking wing arrived first, and the other stayed behind.",
        "Fifth, Wedell attacked toward Sagschütz, with Zieten's cavalry beside him, which beat the Austrian cavalry. The Württembergers, part of the Austrian first line, held for a while and then gave way, taking the Bavarians with them. The heavy Prussian artillery, on the Butterberg, bombarded the line and then the retreating troops with [[enfilade fire|fogo de enfiada]].",
        "Sixth, Charles tried to re-form the line around Leuthen, but the manoeuvres were confused. The [[grenadiers|granadeiros]] and Möllendorff's Guards went through the cemetery wall and took the church. The fighting in the streets was hand to hand. Captain Charles-Joseph de Ligne, on the Austrian side, wrote that his battalion was left with fewer than 200 men.",
        "Seventh, the Austrians still held for a moment on a battery on the rise to the north, but the heavy Prussian guns on the Butterberg broke it.",
        "Eighth, the last move. Lucchesi attacked with about 70 [[squadrons|esquadrão]] the Prussian flank that looked exposed. Driesen, who had kept about 50 squadrons in reserve, hit Lucchesi's flank in the late afternoon, without orders. The Bayreuth Dragoons and Puttkamer's [[hussars|hussardos]] also attacked. Lucchesi died, according to a secondary source, from a cannonball.",
        "Ninth, the Austrian cavalry, pushed back against its own infantry, which was taking [[bayonet|baioneta]] attacks, broke up the whole line. The infantry fell back toward Breslau.",
        { h: "After the battle" },
        "Frederick halted the pursuit because of snow and rested at Lissa, where Austrian officers were gathered in the castle. Zieten's cavalry followed Charles's army to Bohemia and took about 2,000 more prisoners."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Austrians lost about 22,000 men: 3,000 killed, 7,000 wounded and 12,000 prisoners, plus 116 cannons and 51 flags. The historian Gaston Bodart calculated another 17,000 lost to capture or desertion. The Prussians lost 6,344: 1,141 killed, 5,118 wounded and 85 captured, and no cannons. Two Prussian generals died of wounds. Among the Austrians, besides Lucchesi, generals such as Otterwolf and Prince Stolberg died.",
        "Frederick besieged Breslau, whose garrison of about 17,000 men surrendered on 19 and 20 December. Silesia returned to Prussian control.",
        { h: "Why it matters" },
        "The victory saved Prussia in the winter of 1757 and kept it in the war. Napoleon praised it later. Soldiers study it as the picture of a commander who deceives his opponent, hides the point of attack and strikes the flank. The idea was not new (Epaminondas had used something similar at Leuctra, in 371 BC), but Frederick applied it better than anyone in the 18th century. Helping him were the Prussian training, which gave more shots per minute, the ammunition wagons that followed the lines and the horse artillery.",
        { h: "Curiosities and controversies" },
        { note: "The chorale: according to tradition, after the battle the army sang the [[Lutheran chorale|coral luterano]] 'Nun danket alle Gott' ('Now thank we all our God'). Historians consider the story apocryphal." },
        { note: "The joke at Lissa: tradition says Frederick greeted the Austrian officers in the castle with a polite joke, as if asking for lodging. There is no reliable contemporary record." },
        { note: "The numbers: the sources vary a lot. Some texts give 33,000 Prussians, others 36,000, and the Austrian cannons appear as 210 or 250. We prefer to show the ranges." },
        { note: "The Heidau column, raised in 1854 to commemorate the victory, was dynamited after the Second World War. Only the pedestal remains." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  philippi: {
    terrain: [
      { t: "hill", x: 84, y: 12, rx: 16, ry: 9, l: "Hills (Brutus's camp)" },
      { t: "sea", x: 0, y: 60, w: 100, h: 10, l: "Marsh" },
      { t: "note", x: 8, y: 37, l: "Via Egnatia ⇄" },
      { t: "note", x: 92, y: 4, l: "North ↑" }
    ],
    units: [
      { id: "aOct", s: "a", k: "inf", w: 5, h: 22, l: "Octavian" },
      { id: "aAnt", s: "a", k: "inf", w: 5, h: 18, l: "Antony" },
      { id: "aCav", s: "a", k: "cav", w: 4, h: 14, l: "Allied cavalry" },
      { id: "aCamp", s: "a", k: "camp", w: 12, h: 5, l: "Octavian's camp" },
      { id: "aCause", s: "a", k: "inf", w: 12, h: 2.5, l: "Antony's causeway" },
      { id: "bBru", s: "b", k: "inf", w: 5, h: 22, l: "Brutus" },
      { id: "bCas", s: "b", k: "inf", w: 5, h: 18, l: "Cassius" },
      { id: "bWall", s: "b", k: "inf", w: 2.5, h: 12, l: "Cassius's wall" },
      { id: "bCamp", s: "b", k: "camp", w: 12, h: 5, l: "Cassius's camp" }
    ],
    steps: [
      { t: "The Liberators hold the hills, with the marsh to the south. The triumvirs are on the plain: Octavian north of the road, Antony south. Antony offers battle, and Brutus and Cassius refuse.",
        p: { aOct: [30, 18], aAnt: [30, 46], aCav: [21, 32], aCamp: [12, 10], aCause: [26, 56], bBru: [64, 18], bCas: [64, 46], bWall: [78, 54], bCamp: [86, 40] } },
      { t: "In secret, Antony builds a causeway through the marsh to attack Cassius's flank.",
        p: { aCause: [40, 57], aAnt: [34, 46] } },
      { t: "Cassius sees the work, takes part of his army south and raises a transverse wall to cut the causeway.",
        p: { bCas: [62, 48], bWall: [54, 56] } },
      { t: "3 October: Antony attacks the wall, goes through it and breaks Cassius's line.",
        p: { aAnt: [52, 52], aCause: [46, 57] }, x: ["bWall"] },
      { t: "Antony takes Cassius's camp. Cassius's men who had advanced to the south are pushed back.",
        p: { aAnt: [76, 44], bCas: [68, 36] }, x: ["bCamp"] },
      { t: "In the north, Brutus's troops attack before the agreed signal ('Liberty'). Octavian's soldiers flee, and Messalla takes their camp. Octavian was not there.",
        p: { bBru: [40, 18], aOct: [20, 20], aCav: [14, 32] }, x: ["aCamp"] },
      { t: "Dust hides each wing from the other. Cassius thinks he has lost everything and has the freedman Pindarus kill him. Brutus regroups the army and falls back to the hills.",
        p: { bBru: [58, 18], bCas: [66, 40], aAnt: [70, 46] } },
      { t: "Twenty days later, with desertions and restless troops, Brutus attacks. His wing, in the north, breaks the triumvirs' left and chases it.",
        p: { aOct: [28, 14], bBru: [44, 20], aAnt: [38, 48], bCas: [58, 46], aCav: [16, 28] } },
      { t: "But Brutus's thin centre gives way at the first clash. The triumvirs turn on his flank and rear and take the gates of his camp. Brutus flees to the hills and kills himself.",
        p: { aAnt: [52, 36], aOct: [52, 14], bBru: [76, 12], bCas: [64, 34] }, x: ["bCas"] }
    ]
  },

  stamfordbridge: {
    terrain: [
      { t: "sea", x: 46, y: 0, w: 5, h: 70, l: "River Derwent" },
      { t: "note", x: 38, y: 34, l: "Bridge" },
      { t: "note", x: 92, y: 4, l: "North ↑" }
    ],
    units: [
      { id: "eFyrd", s: "a", k: "inf", w: 6, h: 18, l: "Harold's army" },
      { id: "eHus", s: "a", k: "inf", w: 4, h: 8, l: "Huscarls" },
      { id: "eCav", s: "a", k: "cav", w: 5, h: 8, l: "Horsemen (per the saga)" },
      { id: "nHar", s: "b", k: "inf", w: 12, h: 12, l: "Hardrada: shield circle" },
      { id: "nTos", s: "b", k: "inf", w: 5, h: 10, l: "Tostig" },
      { id: "nBridge", s: "b", k: "inf", w: 2.5, h: 2.5, l: "Defender of the bridge (legend)" },
      { id: "nOrre", s: "b", k: "inf", w: 8, h: 8, l: "Eystein Orre" },
      { id: "nShips", s: "b", k: "camp", w: 14, h: 5, l: "Ships at Riccall" }
    ],
    steps: [
      { t: "25 September. Harold arrives from York, to the west, unexpected. The Norwegians are across the river, many without armour, and part of the army is with the ships, at Riccall.",
        p: { eFyrd: [10, 34], eHus: [18, 28], eCav: [18, 42], nHar: [68, 28], nTos: [76, 42], nBridge: [80, 10], nOrre: [84, 60], nShips: [88, 64] } },
      { t: "The bridge holds up the English. According to the Chronicle, a single Norwegian holds it and kills several, until he is killed from below, between the planks. It is a legend.",
        p: { nBridge: [48, 34], eFyrd: [32, 34], eHus: [38, 30], eCav: [34, 44], nHar: [62, 30] } },
      { t: "The English cross. The Norwegians form a shield wall, which the saga describes as a circle.",
        p: { eHus: [54, 30], eFyrd: [46, 38], eCav: [52, 44], nHar: [64, 32], nTos: [72, 40] }, x: ["nBridge"] },
      { t: "According to the saga, the English cavalry attacks the circle. The Norwegians break formation to chase those who pull back.",
        p: { eCav: [60, 36], nHar: [68, 36, 20], nTos: [74, 34] } },
      { t: "Hardrada is hit by an arrow in the throat and dies. Tostig falls too. The English advance.",
        p: { eHus: [64, 32], eFyrd: [56, 38], nHar: [70, 38], nTos: [76, 36] } },
      { t: "Orre arrives, running from Riccall, 16 miles away, in arms. 'Orre's storm' holds the English for a while.",
        p: { nOrre: [74, 48], eFyrd: [60, 40], eHus: [64, 34] } },
      { t: "Orre dies. The Norwegians are scattered, and many drown in flight.",
        p: { eHus: [72, 36], eFyrd: [66, 40], eCav: [72, 48] }, x: ["nHar", "nTos", "nOrre"] },
      { t: "Harold offers the survivors a truce. 24 ships (out of more than 300) are enough to take them home. Three days later, William lands in the south.",
        p: { nShips: [88, 62] } }
    ]
  },

  nicopolis: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 7, l: "River Danube" },
      { t: "hill", x: 58, y: 54, rx: 36, ry: 14, l: "Hills and plateau" },
      { t: "note", x: 12, y: 12, l: "Nicopolis (besieged)" }
    ],
    units: [
      { id: "aFr", s: "a", k: "cav", w: 20, h: 5, l: "French knights" },
      { id: "aHun", s: "a", k: "cav", w: 18, h: 5, l: "Hungarians, Germans and Hospitallers (Sigismund)" },
      { id: "aWal", s: "a", k: "cav", w: 14, h: 4, l: "Wallachians and Transylvanians" },
      { id: "bAk", s: "b", k: "cav", w: 26, h: 3, l: "Akinji (light cavalry)" },
      { id: "bSt", s: "b", k: "inf", w: 24, h: 3, l: "Stakes and archers" },
      { id: "bSip", s: "b", k: "cav", w: 16, h: 5, l: "Sipahis (reserve)" },
      { id: "bSer", s: "b", k: "cav", w: 12, h: 4, l: "Serbs of Stefan Lazarević" }
    ],
    steps: [
      { t: "The crusaders, with Nicopolis and the Danube behind them, wait for the Turks coming from the south. In the council, Sigismund wanted the Wallachians in front. The French constable refused and demanded the vanguard.",
        p: { aFr: [46, 26], aHun: [72, 26], aWal: [22, 26], bAk: [50, 44], bSt: [50, 51], bSip: [48, 62], bSer: [78, 62] } },
      { t: "The French advance alone and ride over the conscripted soldiers who form the first Ottoman line, which flees.",
        p: { aFr: [48, 38] }, x: ["bAk"] },
      { t: "Behind them, the French find sharpened stakes, with archers behind. The arrows and the stakes bring down many horses.",
        p: { aFr: [49, 47] } },
      { t: "The French climb the rest of the slope on foot and reach the plateau exhausted.",
        p: { aFr: [49, 56] } },
      { t: "At the top, they meet Bayezid's reserve, the sipahis, who attack with trumpets and drums. Admiral Vienne dies, Nevers is captured, and the French surrender.",
        p: { aFr: [48, 58], bSip: [51, 58] }, x: ["aFr"] },
      { t: "The sipahis envelop the allies' flanks. The Transylvanians and Wallachians withdraw.",
        p: { bSip: [64, 40, -30], aWal: [10, 16] }, x: ["aWal"] },
      { t: "Stefan Lazarević's Serbian cavalry reinforces the Turks and attacks the Hungarians and Germans, who fight to the end.",
        p: { bSer: [74, 38, -20], aHun: [74, 28] } },
      { t: "Sigismund flees by boat down the Danube to the Venetian ships. The crusader army is destroyed. The next day, the common prisoners will be executed.",
        p: { aHun: [80, 8] }, x: ["aHun"] }
    ]
  },

  leuthen: {
    terrain: [
      { t: "hill", x: 24, y: 28, rx: 9, ry: 5, l: "Schleierberg and Sophienberg" },
      { t: "hill", x: 48, y: 40, rx: 6, ry: 4, l: "Butterberg" },
      { t: "note", x: 70, y: 6, l: "Nypern" },
      { t: "note", x: 70, y: 38, l: "Leuthen" },
      { t: "note", x: 70, y: 66, l: "Sagschütz" },
      { t: "note", x: 8, y: 4, l: "North ↑" }
    ],
    units: [
      { id: "pVan", s: "a", k: "inf", w: 8, h: 4, l: "Vanguard (feint)" },
      { id: "pMain", s: "a", k: "inf", w: 22, h: 5, l: "Main body" },
      { id: "pZie", s: "a", k: "cav", w: 14, h: 4, l: "Zieten's cavalry" },
      { id: "pDri", s: "a", k: "cav", w: 12, h: 4, l: "Driesen's cavalry" },
      { id: "pArt", s: "a", k: "inf", w: 8, h: 3, l: "Heavy artillery" },
      { id: "pLeft", s: "a", k: "inf", w: 12, h: 4, l: "Left wing (Retzow)" },
      { id: "aR", s: "b", k: "inf", w: 5, h: 22, l: "Right wing (the strongest)" },
      { id: "aC", s: "b", k: "inf", w: 5, h: 16, l: "Centre, at Leuthen" },
      { id: "aL", s: "b", k: "inf", w: 5, h: 18, l: "Left wing (Württembergers and Bavarians)" },
      { id: "aCavL", s: "b", k: "cav", w: 5, h: 10, l: "Left-wing cavalry" },
      { id: "aLuc", s: "b", k: "cav", w: 5, h: 16, l: "Lucchesi's cavalry" }
    ],
    steps: [
      { t: "The Austrians form a line of almost 9 km, from Nypern to Sagschütz, with Leuthen in the centre. The Prussians arrive from the west along the Breslau road.",
        p: { pVan: [24, 14], pMain: [16, 24], pZie: [14, 34], pDri: [10, 30], pArt: [18, 40], pLeft: [26, 20], aR: [76, 14], aC: [74, 38], aL: [76, 56], aCavL: [84, 62], aLuc: [86, 24] } },
      { t: "Frederick feigns an attack on the Austrian right flank. Charles takes reserves there, and his line stretches.",
        p: { pVan: [50, 14], pLeft: [38, 20], aLuc: [84, 16] } },
      { t: "Hidden by fog and the hills, the Prussians march south, out of the enemy's sight.",
        p: { pMain: [24, 48], pZie: [32, 58], pArt: [22, 54], pDri: [14, 38] } },
      { t: "Around noon, they turn and line up at a right angle to the Austrian left flank. This is the oblique order: the attacking wing arrives first, and the other stays behind.",
        p: { pMain: [48, 58], pZie: [46, 66], pArt: [44, 46], pLeft: [36, 30] } },
      { t: "Wedell attacks toward Sagschütz. Zieten's cavalry beats the Austrian cavalry. The Württembergers hold and then give way, taking the Bavarians with them.",
        p: { pMain: [62, 58], pZie: [62, 66], aL: [78, 52] }, x: ["aCavL"] },
      { t: "The heavy artillery, on the Butterberg, bombards the Austrian line from the side, and the Prussian infantry advances.",
        p: { pArt: [50, 42], pMain: [66, 52, -20], aL: [80, 46] } },
      { t: "Charles tries to re-form the line around Leuthen. The grenadiers and the Guards go through the cemetery wall and take the church, in house-to-house fighting.",
        p: { pMain: [70, 46, -30], aC: [78, 36], aR: [80, 20] } },
      { t: "Lucchesi's cavalry, about 70 squadrons, attacks the Prussian flank that looked exposed. Driesen, with about 50 squadrons in reserve, hits its flank, without orders.",
        p: { aLuc: [58, 30], pDri: [52, 34], pLeft: [44, 26] } },
      { t: "Pushed back against its own infantry, the Austrian cavalry breaks up the line. The Austrians fall back toward Breslau, and the pursuit ends only with the snow.",
        p: { pMain: [76, 36], pZie: [76, 56], pDri: [68, 28] }, x: ["aLuc", "aC", "aR", "aL"] }
    ]
  }
});
