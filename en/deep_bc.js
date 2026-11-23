// In-depth battles, batch bc: tiro, watlingstreet, delta, didgori, molodi (great-battles pack).
// Checked against the English and Portuguese Wikipedia articles on the Siege of Tyre, the Boudican revolt, the Battle of
// Watling Street, the Battle of the Delta, the Battle of Djahy, the Battle of Didgori, David IV of Georgia, the Battle of
// Molodi and Mikhail Vorotynsky, Tacitus (Annals 14.29-39, in translation), and the works those pages cite.
// Where sources disagree the text says so. No diagram for Didgori (sources disagree on the dispositions) nor for the
// Delta (the only source is the Medinet Habu reliefs and inscriptions, which give no deployment).

Object.assign(GLOSSARY, {
  "molhe de cerco": "A causeway of stone and earth built out into the water to make a path to a city on an island, so that soldiers and machines can walk up to its walls.",
  "torre de cerco": "A wooden tower on wheels or on a base, taller than the enemy wall. Soldiers shot down from the top and sometimes crossed a bridge onto the wall.",
  "fenícios": "A people of merchants and sailors from the coastal cities of present-day Lebanon, such as Tyre, Sidon and Byblos. Their sailors were the best in the eastern Mediterranean and served Persia.",
  "melqart": "The protector god of Tyre. The Greeks identified him with Heracles, and his sanctuary on the island was the center of the city's religious life.",
  "passadiço de assalto": "A movable bridge lowered from a ship or tower onto the enemy wall so that soldiers can step straight onto the top.",
  "colônia romana": "A city founded by Rome to settle veteran soldiers on conquered land. In return for a plot, they served as an armed reserve and a symbol of Roman power.",
  "procurador": "A Roman official in charge of money, taxes and the emperor's property in a province, separate from the military governor.",
  "druidas": "Priests and sages of the Celtic peoples of Gaul and Britain. The Romans saw them as leaders of the resistance and destroyed their sanctuary on the island of Mona.",
  "icenos": "A Celtic people of eastern Britain, in present-day Norfolk and Suffolk. They were allies of Rome until the death of King Prasutagus, around AD 60.",
  "povos do mar": "The modern name for groups of uncertain origin, from around the Mediterranean, who attacked Egypt, Syria and other lands about 1200 BC. The Egyptian texts name, among others, the Peleset, Tjekker, Shekelesh, Denyen and Weshesh.",
  "medinet habu": "The mortuary temple of Ramesses III, near Luxor. Its walls carry reliefs and inscriptions about the pharaoh's wars against the Sea Peoples, the main source on them.",
  "arco composto": "A bow made of wood, horn and sinew glued together, shorter and more powerful than a simple wooden bow. It was the main weapon of Egyptian archers.",
  "colapso da idade do bronze": "The fall, within a few decades around 1200 BC, of several kingdoms of the eastern Mediterranean, such as the Hittites and Ugarit. The causes are debated: invasions, droughts, earthquakes and revolts.",
  "quipchaques": "A Turkic-speaking nomadic people of the steppes north of the Caucasus, famous for their horse archers. David IV settled tens of thousands of Kipchak families in Georgia.",
  "atabegue": "The title of a Turkish governor who in practice ruled a region in the name of a minor Seljuk prince.",
  "guerra santa": "A religious call to war against the enemies of the faith. In Islam it is jihad; the Seljuk sultans proclaimed it to raise troops against the Christians.",
  "guliay-gorod": "In Russian, 'walking town': a fortress of wooden panels, collapsible and carried on wagons, which the Russians set up on the battlefield as a mobile wall.",
  "ravina": "A narrow, deep valley carved by water, where an army can move without being seen from afar."
});

Object.assign(DEEP, {
  tiro: {
    war: "Alexander's conquest of the Persian Empire (334–330 BC)",
    hook: "Alexander could not reach the island, so he built a road of stone across the sea. Seven months later, the city that seemed impossible to take fell.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After beating Darius at Issus in 333 BC, Alexander had a problem the battlefield could not solve. The Persian fleet, made up largely of ships from the [[Phoenicians|fenícios]], still ruled the Mediterranean. It could land troops behind him and make Greece rise in revolt. With no ships to face it, Alexander decided to take away its ports: to conquer the coast city by city.",
        "The Phoenician cities in the north surrendered without a fight. In Tyre, the richest city of the region, the leaders offered Alexander a golden crown but refused to let him in to make a sacrifice to [[Melqart|melqart]], the city's god. They wanted to stay neutral and wait for the outcome of the war. Alexander took the refusal as a challenge. According to Arrian, the Tyrians even killed the messengers he sent and threw their bodies from the wall.",
        { h: "The road to Tyre" },
        { timeline: [
          ["333 BC", "Alexander defeats Darius at Issus. The Persian fleet still rules the sea."],
          ["Late 333 BC", "Alexander moves down the coast. Byblos and Sidon surrender."],
          ["January 332 BC", "The Tyrians refuse to let Alexander in. The siege begins."],
          ["July 332 BC", "Tyre falls. Alexander goes on to Gaza and then Egypt."]
        ]},
        "Tyre was an island city. It lay about 800 meters from the coast, with walls that, on the mainland side, reached some 45 meters in height, according to Arrian. It had two harbors, one to the north and one to the south. It was the ideal place to wait, and the Tyrians also counted on Carthage, their most powerful colony, which promised help. Women and children were sent there."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Alexander III of Macedon, 23 years old" },
        "Alexander could have walked past Tyre and gone on to Egypt. He did not, and the reason was strategic more than pride: leaving the Persian fleet with a major port at his back would be dangerous. He saw that the only way to beat a city reachable only by sea was to make a path or to have ships. He started with the path, because he had no ships. His stubbornness, here, had a calculation behind it.",
        { h: "The Tyrians" },
        "The king of Tyre was called Azemilcus. The names of the leaders who actually organized the defense have not come down to us. What the sources show is a city that resisted with ingenuity: it launched fireships, attacked the workers with ships, threw stones into the water to stop the rams and sent divers to cut the anchor cables of Alexander's ships.",
        { h: "Admetus" },
        "Admetus was the officer of the [[hypaspists|hipaspistas]] who, according to Arrian, was the first Macedonian to climb the wall of Tyre in the final assault. He died there, struck by a spear, but the soldiers who followed him opened the way."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers of Alexander's land army at Tyre do not appear clearly in the sources. What is known is the fleet: after the Phoenician cities and Cyprus came over to his side, Alexander gathered about 220 ships, according to the ancient sources, of which some 80 came from Phoenician cities and 120 from Cyprus. The city had about 40,000 inhabitants and a fleet of its own of [[triremes|trirreme]] and larger ships, such as [[quinqueremes|quinquerreme]].",
        { note: "The numbers for Tyre come from Arrian, Diodorus and Curtius, who wrote centuries later and do not always agree. We use the figures as an order of magnitude, not an exact count." },
        { h: "The mole" },
        "Alexander had a [[siege mole|molhe de cerco]] built from the coast to the island. Stones came from the ruins of old Tyre on the mainland, and cedar logs came from the mountains of Lebanon. The water near the coast was shallow, but it got deeper near the island, and there the work began to suffer. The high walls and the ships of Tyre, which sailed along the mole, shot at the workers. Alexander protected the workers with leather screens and built two [[siege towers|torre de cerco]] some 50 meters high, with [[artillery engines|máquina de arremesso]] on top.",
        "The Tyrians' answer was a [[fireship|brulote]]. They filled an old horse-transport ship with flammable material, hung cauldrons of oil from its masts and towed it to the end of the mole. The fire destroyed the towers and the engines.",
        { h: "The fleet changes everything" },
        { formation: true },
        "Alexander realized that without ships he would not get there. He went to Sidon and gathered the fleet that had surrendered. The Phoenician kings, seeing the course of the war, came over to his side, and the kings of Cyprus sent some 120 ships. When he came back, the Tyrians withdrew inside their harbors and closed the entrance of the south harbor with a floating cable and that of the north harbor with a line of triremes. Alexander blockaded both harbors: the Cypriots in the north, the Phoenicians in the south.",
        "The Tyrians tried a sortie. According to Arrian, they attacked the Cypriot ships by surprise, while the sailors were ashore. Alexander came back quickly, gathered ships and sank or captured the Tyrians who had come out. After that, the fleet of Tyre did not come out again.",
        { h: "Rams, stones and divers" },
        "The mole was widened, and Alexander put [[rams|aríete]] on transport ships and on slow galleys. The Tyrians answered by dropping big stones on the seabed in front of the wall, and the rams could not get close. Alexander sent ships with cranes to pull them out. The Tyrian divers then cut the anchor cables. Alexander replaced the cables with iron chains.",
        "The wall gave way first on the south side of the island, where the rams opened a small [[breach|brecha na muralha]]. The attempt to cross through the breach, soon afterwards, failed. Alexander gave his men two days of rest and waited for the sea to calm.",
        { h: "The final assault" },
        "On the day of the assault, the fleet attacked from both sides at once. The Cypriots and Phoenicians forced their way into both harbors, and other vessels made feint attacks along the walls to pin down the defenders. Two ships with [[boarding bridges|passadiço de assalto]] reached the breach, carrying the hypaspists and Alexander. Admetus climbed first and was killed. The Macedonians crossed the wall, and the rest followed, over the mole and through the harbors.",
        "Inside the city there was street fighting. The Tyrians fought from the rooftops and in the square, and many ran to the temples. According to Diodorus and Curtius, the violence was greater because, during the siege, the Tyrians had killed Macedonian prisoners before the eyes of the army."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Tyre fell in July 332 BC, after about seven months of siege. The losses vary widely between the sources. For the Macedonians, Arrian gives about 400 dead. For the Tyrians, he speaks of some 8,000 dead and 30,000 sold into slavery. Diodorus and Curtius give other numbers: between 6,000 and 7,000 dead in the fighting and about 2,000 men crucified on the beach. Those who took refuge in the temple of Melqart, among them King Azemilcus, were spared.",
        { h: "Why it matters" },
        "The fall of Tyre took from Persia its last great group of ports. Without them, the Persian fleet had nowhere left to anchor, and Alexander could go on to Gaza and Egypt without fear of being cut off from behind. For military historians, it is one of the great feats of siege engineering of antiquity: an army without ships conquered an island.",
        "The mole had an effect that lasts to this day. Sand piled up on both sides of the causeway, and the island became a peninsula. Tyre is still inhabited, and part of the modern city stands on what was Alexander's work.",
        { h: "Curiosities and controversies" },
        { note: "The figures for dead and slaves: Arrian, Diodorus and Curtius do not agree, and several numbers appear differently in each version. None is a reliable count." },
        { note: "The other account: the ancient author Polyaenus tells a different story, in which Alexander leaves Parmenion at the siege, goes off to Arabia and later returns to rescue him. Historians in general follow Arrian, and so did we here." },
        { note: "The main sources were written 300 to 450 years later, from the memoirs of Alexander's officers, which are lost. The details of the siege should be read with care." }
      ]}
    ]
  },

  watlingstreet: {
    war: "Boudica's revolt against Rome (AD 60–61)",
    hook: "Ten thousand Romans, their backs to a wood, against a crowd that no one could count.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The Romans invaded Britain in AD 43. Some peoples were conquered, others stayed on as nominal allies, among them the [[Iceni|icenos]], in the east of the island. Their king, Prasutagus, tried to protect his kingdom by leaving it, in his will, to his two daughters and to the emperor Nero. After he died, around AD 60, Rome ignored the will.",
        "Tacitus tells what came next: Roman officials seized land, enslaved the king's relatives, and his widow, Boudica, was flogged and her daughters assaulted. Cassius Dio adds that Roman financiers, among them the philosopher Seneca, called in their loans all at once. It was a province that already felt exploited.",
        { h: "The revolt" },
        { timeline: [
          ["AD 43", "Rome invades Britain."],
          ["AD 60 or 61", "King Prasutagus dies. The governor Suetonius Paulinus attacks the island of Mona, in Wales."],
          ["AD 60 or 61", "The Iceni and the Trinovantes rise and destroy Camulodunum, Londinium and Verulamium."],
          ["AD 60 or 61", "Suetonius gathers his army and faces the rebels in a narrow pass."]
        ]},
        "The most exposed city was Camulodunum (today Colchester), a [[Roman colony|colônia romana]] of veterans with no walls, resented by the locals, with a great temple to the emperor Claudius. The [[procurator|procurador]] Catus Decianus sent only some 200 poorly armed men. The city fell after two days. The Ninth Legion, under the commander Cerialis, tried to relieve it and had its infantry destroyed in an ambush. Suetonius, on his return, reached Londinium and decided to abandon it: he had no troops to defend it, and preferred to save the province. Londinium and Verulamium were burned. Tacitus speaks of about 70,000 Romans and allies killed in the three cities; modern estimates are between 70,000 and 80,000."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Boudica, queen of the Iceni" },
        "Almost everything we know about her comes from two Roman writers, Tacitus and Cassius Dio, who wrote decades later and describe her in different ways. Tacitus shows her in a chariot, with her daughters, speaking to the tribes. Dio tells of a divination with a hare and an appeal to the goddess Andraste. The speeches both attribute to her were written by them; they are not recorded words.",
        { h: "Gaius Suetonius Paulinus" },
        "Governor since 58 or 59, he was an experienced soldier who had fought in the Atlas mountains. When the revolt began he was hundreds of kilometers away, on Mona, attacking the sanctuary of the [[druids|druidas]]. He came back fast through hostile territory. His most debated choice was to abandon Londinium. He gave up a city to gain the time and the place he needed for the battle.",
        { h: "Those who failed to come" },
        "The camp prefect of the Second Legion, Poenius Postumus, was ordered to join Suetonius and did not obey. Tacitus says he killed himself afterwards, out of shame, on learning of a victory he had not helped to win."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to Tacitus, Suetonius had a little under 10,000 armed men: the Fourteenth Gemina Legion, detachments of the Twentieth Legion and the [[auxiliary|auxiliares]] troops that were nearby. A [[legion|legião]] had around 5,000 men, but the detachments were smaller.",
        "The number of the Britons is a problem. Cassius Dio speaks of 230,000, and other sources of similar figures. No modern historian believes it: such a crowd could not have been fed. The Iceni and other peoples had been disarmed years earlier and were poorly equipped. Tacitus says the crowd brought their families in wagons, to watch the victory.",
        { note: "The numbers for the battle, 80,000 Britons dead against about 400 Romans, come from Tacitus. Modern historians consider them exaggerated, like the figures for any ancient battle told by the winner." },
        { h: "The terrain" },
        "No one knows where it was. No ancient source names the place. Tacitus says only that Suetonius chose a narrow pass, with a wood behind and an open plain in front, where the enemy had no way to hide and ambush him. Most historians place it in the Midlands, perhaps near the old Roman road called Watling Street, hence the name. The most cited candidates are Mancetter (Warwickshire), High Cross (Leicestershire) and several others, with no definite proof. The tradition that the battle was at King's Cross, in London, is rejected by historians.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, the formation. Suetonius placed the legionaries in close order in the center, the auxiliaries at the ends of the infantry and the cavalry on the flanks. The narrow pass protected both sides, and the wood protected the rear. This forced the enemy to attack head-on, but it also kept the Romans from fleeing.",
        "Second, the wait. The Britons advanced in a mass, on foot and on horseback, with Boudica driving her chariot past the ranks. Tacitus says that, before the clash, Suetonius spoke to the soldiers: the enemy was more women than warriors, and they should ignore the noise and the plunder until the victory. The speech is Tacitus's, whose father-in-law, Agricola, was on Suetonius's staff and may have been the source.",
        "Third, the javelins and the wedge. The legionaries stood still until the Britons came close enough. Then they threw the [[pila|pilo]] all at once, which weakened the front group, and advanced in a [[wedge|cunha]], with shield and [[gladius|gládio]], as Suetonius had ordered.",
        "Fourth, the slaughter. The auxiliaries followed the legionaries, and the cavalry, with lances, broke the groups that were still resisting. The Britons tried to fall back, but their own wagons, lined up at the rear, blocked the way. Tacitus says the Romans spared no one, neither the women nor the pack animals."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Tacitus says that some 80,000 Britons and about 400 Romans died. It is a number too neat to be true, but the victory was total. Boudica, according to Tacitus, took poison. Dio says she fell ill and died, and had a lavish funeral. Her tomb has not been found, and the many local legends have no proof.",
        "Nero sent reinforcements from Germany: 2,000 legionaries, eight auxiliary cohorts and 1,000 cavalry. The repression was harsh, and famine struck the tribes that had not planted. The new procurator, Julius Classicianus, criticized Suetonius in Rome, and Suetonius ended up replaced by Petronius Turpilianus, who was more conciliatory.",
        { h: "Why it matters" },
        "The victory saved the province. According to the biographer Suetonius (Suetonius Tranquillus, who is not the governor), Nero even thought of abandoning Britain. The revolt showed the price of exploiting a conquered people, and Rome began to govern with more care. The south of the island became stable, and the burned cities were rebuilt.",
        { h: "Curiosities and controversies" },
        { note: "The date: Tacitus places the events in the year when Paetus and Turpilianus were consuls, which gives 61. Some historians, such as Kevin Carroll, argue for 60. That is why we write 60 or 61." },
        { note: "The evidence: the burned cities left a layer of ash, the 'Boudican destruction horizon', found in Colchester, London and St Albans. A bronze head of Nero, found in Suffolk, may have been torn off during the revolt." },
        { note: "The sources: almost everything comes from Tacitus and Cassius Dio, written decades later. The figures, the speeches and the details of the battle are the most doubtful." }
      ]}
    ]
  },

  delta: {
    war: "Sea Peoples invasions and the Bronze Age collapse (c. 1200–1175 BC)",
    hook: "The Egypt of Ramesses III held out against the attack that brought down whole empires, and the story is carved on the wall of a temple.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Around 1200 BC, the eastern Mediterranean was in one of the worst moments of its history. Within a few decades, cities were burned, kingdoms vanished and trade broke down. This is the so-called [[Bronze Age collapse|colapso da idade do bronze]]. The causes are much debated: invasions, droughts, earthquakes, revolts. Nobody knows for sure.",
        "The Egyptians blamed a group of invaders we now call the [[Sea Peoples|povos do mar]]. In the texts of the pharaoh Ramesses III, they appear as an alliance of peoples with strange names: Peleset, Tjekker, Shekelesh, Denyen and Weshesh. Letters from the last king of Ugarit, Ammurapi, speak of enemy ships, of burned cities and of an army that no longer had a way to defend itself.",
        { h: "The road to the Delta" },
        { timeline: [
          ["c. 1200 BC", "Cities in Syria, southern Anatolia and Cyprus are destroyed. The Hittite Empire vanishes."],
          ["Year 8 of Ramesses III (c. 1179–1175 BC)", "The Sea Peoples reach the frontier of Egypt, by land and by sea."],
          ["Same year", "Battle at Djahy, on the coast of the Levant, and battle at the mouth of the Nile."]
        ]},
        "According to the pharaoh's texts, the lands of the north fell one after another and no one resisted their arms. Archaeology shows a less simple picture: Carchemish, for example, survived. But the fear was real, and Egypt was the last great kingdom still standing."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Ramesses III" },
        "He was the last great [[pharaoh|faraó]] of the New Kingdom. He reigned from about 1186 to 1155 BC and saw himself as a new Ramesses II. For his propaganda, the victory over the Sea Peoples was proof that the gods protected Egypt. That is why everything we know comes from a text that is not neutral: it was written to glorify him.",
        { h: "The invaders" },
        "We do not know the names of their leaders, nor where they came from. The reliefs of Medinet Habu show women and children in ox carts, and so many historians think they were migrants looking for land, not only warriors. What the Egyptian texts call a 'conspiracy' may have been an enormous migration."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The sources and what we do not know" },
        "Almost everything comes from the temple of [[Medinet Habu|medinet habu]], near Luxor, where the reliefs and the long inscription of Ramesses III tell of the war. It is a rich source and, at the same time, a problematic one: it is royal propaganda, and it does not say exactly where the battle was, or how many men fought.",
        { note: "The date and the site are uncertain. The proposed dates lie between about 1179 and 1175 BC, because of doubts about the chronology of the earlier kings. The text speaks of 'river mouths', without saying which branch of the Nile. That is why we do not draw a diagram of the battle: no source describes the positions of the armies." },
        { h: "First, the land" },
        "The text says that Ramesses prepared the frontier at Djahy, on the coast of the Levant, and that the invaders by land were stopped there. Many scholars treat the fight at Djahy as a separate battle. The reliefs show the Egyptian infantry, with mercenaries, fighting the enemy and the ox carts with families.",
        { h: "Then, the sea" },
        "The best-known part is the naval one. According to the inscription, the pharaoh had ships armed at the mouths of the Nile, and prepared them like a wall. The enemy entered the river mouth and was surrounded: the Egyptian ships closed off the exit, and on the bank the archers, with their [[composite bows|arco composto]], shot without pause. The reliefs show capsized ships, enemies dead in the water and on the beach, and prisoners led off by Egyptian soldiers.",
        "In the reliefs, the ships of the Sea Peoples have only a sail, no oars, and a prow shaped like a bird's head, while the Egyptians have rowers. This may have given the Egyptians an advantage in maneuvering near the bank. The inscription speaks of enemies dragged onto the beach, surrounded and killed, and of heaps of bodies.",
        { note: "Scholars debate how far the account reflects one battle or several, and how the fight at Djahy connects with the one in the Delta. The texts are propaganda and may have condensed different episodes into a single great victory." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Egypt held out. The sources give no numbers of dead or prisoners. The pharaoh's text says the invaders were destroyed, which is propaganda, but it is true that Egypt did not fall like the Hittite Empire, Alashiya or Ugarit.",
        "Papyrus Harris I, written at the end of the reign, says that Ramesses settled prisoners of war in fortresses. Some historians link this to the arrival of the Philistines in Canaan, but the link is debated.",
        { h: "Why it matters" },
        "It is one of the earliest naval battles on record. It is also a rare moment when we see, from the winners' side, a crisis that destroyed a world.",
        "The victory was costly. The wars with the Sea Peoples and with the Libyans emptied the treasury, and less than 80 years later Egypt had lost its empire in Asia and Nubia.",
        { h: "Curiosities and controversies" },
        { note: "The name 'Battle of the Delta' is modern. The inscription gives the battle no name, and the date, the site and the size of the armies are unknown." },
        { note: "The origin of the Sea Peoples is one of the great mysteries of archaeology. Some theories link them to the Aegean, to Anatolia or to the central Mediterranean, but there is no consensus." }
      ]}
    ]
  },

  didgori: {
    war: "Georgian–Seljuk wars (11th and 12th centuries)",
    hook: "A small king and a much smaller army brought down the greatest Muslim coalition in the Caucasus, in a valley too narrow for it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 11th century, the [[Seljuk|seljúcidas]] Turks invaded the Caucasus. Georgia, divided into kingdoms and principalities and raided every year, became practically a vassal. When David IV came to the throne, in 1089, he was 16 years old and had a kingdom in ruins.",
        "David changed the game. He reformed the army, took power away from the rebellious nobility and went on the offensive. He beat the Turks at Ertsukhi in 1104, at Trialeti in 1110 and at Rakhsi in 1118. The city of Tbilisi, however, remained in Muslim hands since the 8th century.",
        { h: "The Kipchak gamble" },
        "To have enough soldiers, David made a bold move. Married to a daughter of the Kipchak khan Otrok, he persuaded the [[Kipchaks|quipchaques]], nomads of the steppe north of the Caucasus, to move to Georgia. Between 1118 and 1120, almost 40,000 families, according to the sources, settled in the kingdom, and each family was to supply at least one soldier. The Georgians gained thousands of professional [[horse archers|arqueiro a cavalo]].",
        { timeline: [
          ["1089", "David IV comes to the throne of Georgia."],
          ["1118–1120", "The Kipchaks settle in Georgia."],
          ["1121", "Sultan Mahmud declares [[holy war|guerra santa]] on David. The coalition marches."],
          ["12 August 1121", "Battle of Didgori."],
          ["1122", "David takes Tbilisi."]
        ]},
        "The answer came in 1121. The Seljuk sultan Mahmud declared [[holy war|guerra santa]], partly because he feared the new Georgian army. The coalition was commanded by Ilghazi, ruler of Mardin, who in 1119 had destroyed a crusader army from Antioch. There were also the Arabs of Dubays ibn Sadaqa and Turkish troops from Azerbaijan and from local garrisons."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "David IV the Builder, about 48 years old" },
        "He reigned from 1089 to 1125 and entered Georgian history as the 'Builder'. In the battle, he bet that a small, disciplined army could beat an enormous but disunited one, if the enemy was forced to fight where it could not deploy.",
        { h: "Ilghazi of Mardin" },
        "An experienced Turkish emir, famous for having beaten the crusaders in 1119. He commanded a coalition made of contingents that came from different places, by different routes and under different chiefs, which made the army large but hard to maneuver.",
        { h: "David's allies" },
        "Besides the Georgians and the Kipchaks, there were some Alans and a small group of Frankish knights, westerners who came from the Latin East. Their number varies in the sources, from a hundred (Matthew of Edessa) to several hundred."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Georgian sources give David about 56,000 men: some 40,000 Georgians, 15,000 Kipchaks and small groups of Alans and Franks. Modern historians come close to 60,000.",
        "The Muslim coalition is far more uncertain. Matthew of Edessa and Walter the Chancellor speak of up to 600,000, and another chronicler, Smbat Sparapet, of 400,000. Georgian historians estimate between 100,000 and 250,000. Muslim sources give much smaller numbers. All the old figures are probably exaggerated.",
        { note: "The chronicle figures were written to exalt the Christian victory. We use the ranges of modern historians as a reference." },
        { h: "The terrain" },
        "The hills of Didgori, about 40 km west of Tbilisi: woods, slopes, valleys and meadows, well known to the Georgians. The Muslim forces entered Georgia exhausted after the march through the Caucasus, in several groups. The region split them up: some were stuck in narrow passes, some tried to climb slopes, and the Georgian cavalry chased them.",
        { h: "The battle" },
        "The accounts differ in the details. That is why we do not draw a diagram: the sources contradict each other on who commanded each wing, and some descriptions come from late sources.",
        "First, David avoided waiting at Tbilisi. He let the enemy enter Georgia and intercepted it in the hills, before the groups could join up. He divided the army into two parts, one under his own command and the other under his son Demetrius.",
        "Second, one version tells of a trap. About 200 Kipchaks are said to have pretended to defect to the Muslim camp and, once welcomed, attacked those who had welcomed them, in the middle of the troops. This version does not appear with the same clarity in all the sources.",
        "Third, the attack. David launched the heavy cavalry with the Frankish knights against the coalition on the march, when it had no way to deploy. The wings attacked from the sides. The result, according to the Georgians, was that the great army could not react and fell apart in flight.",
        "Fourth, the pursuit. Ilghazi was wounded and withdrew. The Georgians chased the fugitives for several days and took many prisoners. According to Georgian tradition, Saint George fought at their side."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Georgians won. The casualties are unknown: the Christian chronicles speak of hundreds of thousands dead, and the Turkish sources of tens of thousands dead and about 4,000 prisoners. No number is reliable. On the Georgian side, there is no count.",
        { h: "Why it matters" },
        "In February 1122, David took Tbilisi, which the Muslims had held since 736, and moved the capital there from Kutaisi. The so-called Golden Age of Georgia began, with the expansion of the kingdom and a flowering of culture. Ilghazi's defeat also eased the pressure on the crusader states of Syria.",
        "The Georgians call the battle a 'miraculous victory' and celebrate 12 August as Didgoroba. In the 1990s, a monument of swords was raised on the battlefield.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: the figures for the Muslim army range from 30,000 to 600,000, depending on the source. There is no consensus." },
        { note: "The account: the detailed description of the battle varies between the sources, and some historians suggest that David lured the Seljuk cavalry into a narrow pass instead of using the Kipchaks' feigned defection." }
      ]}
    ]
  },

  molodi: {
    war: "Russo-Crimean wars (16th and 17th centuries)",
    hook: "A year after watching Moscow burn, the Russians set up a wooden fort on a hill and drew the khan of Crimea into the attack that destroyed him.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1552 and 1556, Ivan IV, the Terrible, had conquered the Tatar khanates of Kazan and Astrakhan, opening the road from the Volga to the Caspian. What remained was the Crimean Khanate, backed by the Ottomans, which made yearly raids on Russia to capture people and sell them as slaves. Russia, at the same time, was tied down in the Livonian War in the west and shaken by the oprichnina, Ivan's internal police.",
        "In 1571, the khan Devlet I Giray got past the defenses, reached Moscow and burned the suburbs. Ivan had left the city beforehand. It was an enormous humiliation. In 1572, the khan came back, with a larger army, backed by about 7,000 Ottoman [[janissaries|janízaros]], according to some sources. His goal was to conquer Russia.",
        { timeline: [
          ["1552–1556", "Russia conquers Kazan and Astrakhan."],
          ["1571", "Devlet Giray burns the suburbs of Moscow."],
          ["27 July 1572", "The Crimean army crosses the Oka river."],
          ["29 July to 2 August 1572", "Battle of Molodi."]
        ]},
        "The defense of the south was in the hands of Prince Mikhail Vorotynsky, who spent about ten years strengthening the frontier with forts and the Great Line of [[abatis|abatis]]. In 1572, under his command, the army gathered that was to wait for the khan near Serpukhov and Kolomna."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Mikhail Vorotynsky" },
        "Supreme commander of the Russian army, he was an experienced chief of frontier defense. The battle was the peak of his career. In 1573, however, he was accused of sorcery and died after being tortured, on the way into exile, according to the chronicler Kurbsky, an enemy of Ivan; the official records say only that he was executed. The details are debated.",
        { h: "Dmitry Khvorostinin" },
        "Chief of the advance regiment. He was the one who destroyed part of the Tatar rear guard near Molodi and then pretended to retreat, to draw the khan to the mobile fortress.",
        { h: "Devlet I Giray" },
        "The khan of Crimea, who in 1571 had set Moscow on fire. He was a bold warrior, and his army was above all [[cavalry|cavalaria]], made for fast attack, not for taking fortified positions. One of his chiefs, Divey Murza, was captured in the battle.",
        { h: "The tsar" },
        "The [[tsar|tsar]] Ivan IV was not on the battlefield. Vorotynsky commanded the defense."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Russians had around 20,000 men, according to a list of the regiments, plus a few thousand [[Cossacks|cossacos]]. Other historians suggest up to 35,000. Estimates range from 20,000 to 70,000, because of very different sources.",
        "As for the Tatars, the Russian chronicles speak of 120,000 to 150,000 men, but modern historians do not believe it. The most accepted range is between 40,000 and 60,000, with about 7,000 janissaries, according to some. The Russians had [[arquebusiers|arcabuz]], artillery and the mobile fortress.",
        { note: "The numbers on both sides come from chronicles and regiment lists. Research on the battle only gained depth at the end of the 20th century. A 2019 study rejects the enormous losses that the Russian chronicles attribute to the Tatars." },
        { h: "The terrain" },
        "The field lies near the village of Molodi, south of Moscow, on the Rozhay river. The Russians set up the [[guliay-gorod|guliay-gorod]], a fortress of wooden panels, on a hill protected by the river. In a [[ravine|ravina]] nearby, an army could move without being seen.",
        { h: "The battle" },
        { formation: true },
        "First, the crossing. On 27 July, the khan crossed the Oka at two points. One column crossed near the mouth of the Lopasnya, and the main force at Drakino, where the regiment of Nikita Odoevsky was defeated after a hard fight.",
        "Second, the bait. On 29 July, Khvorostinin's advance regiment caught up with the Tatar rear guard near Molodi and destroyed a good part of it. Then it pretended to retreat, and the khan's main army followed, straight to the guliay-gorod.",
        "Third, the assaults. After skirmishes, on 31 July the khan attacked the fort with everything and was repulsed. The chief Divey Murza was captured. Inside the fort, water ran short and, according to tradition, the defenders ate their own horses.",
        "Fourth, the blow. On 2 August, the khan ordered the cavalry to dismount and attack on foot, with the janissaries. Late in the day, Vorotynsky left the fort with the main regiment through a ravine and attacked the Tatars and Ottomans from behind. At the same time, Khvorostinin came out of the fort in front. Surrounded, the army broke.",
        "The khan fled that same night, crossing the Oka. The Russians chased him to the river. A rear guard of about 2,000 men was destroyed, and many of those who tried to cross drowned."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Russian victory. According to the historian Penskoy, the Tatars lost about 27,000 men, some 12,000 of them drowned in the Oka; the Novgorod Chronicle speaks of 100,000, a number that deserves no credit. The Russians lost 4,000 to 6,000, and about 3,000 arquebusiers died defending the hill. According to some sources, only about 15,000 men returned to Crimea.",
        { h: "Why it matters" },
        "The Crimean Khanate lost a good part of its men of fighting age, and the big raids on Moscow stopped for almost 20 years, until 1591. The Ottomans gave up on controlling the Volga. The Russian frontier advanced about 300 km to the south, and cities such as Voronezh and Yelets were later founded there.",
        "Even so, the battle is little remembered, and the historian V. V. Penskoy considers it underrated by Russian historiography.",
        { h: "Curiosities and controversies" },
        { note: "The days: the sources differ by a day or two, and here we use the Julian calendar of the time, from 29 July to 2 August." },
        { note: "The account: some versions credit the maneuver from behind to Khvorostinin, others to Vorotynsky. An article in a Crimean journal says the khan's retreat was orderly and that there was no total destruction." },
        { note: "The witnesses: the Razryad (the book of regiments) and the memoirs of the German Heinrich Staden, who served Ivan, are the sources closest to the events." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  tiro: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 100, y: 36, rx: 14, ry: 42, l: "Mainland" },
      { t: "hill", x: 38, y: 36, rx: 11, ry: 13, l: "Island of Tyre" },
      { t: "note", x: 60, y: 31, l: "Alexander's mole" },
      { t: "note", x: 26, y: 70, l: "West: open sea" }
    ],
    units: [
      { id: "mA", s: "a", k: "inf", w: 6, h: 14, l: "Alexander's army" },
      { id: "m1", s: "a", k: "camp", w: 8, h: 3 },
      { id: "m2", s: "a", k: "camp", w: 8, h: 3 },
      { id: "m3", s: "a", k: "camp", w: 8, h: 3 },
      { id: "m4", s: "a", k: "camp", w: 8, h: 3 },
      { id: "mT", s: "a", k: "camp", w: 5, h: 4, l: "Siege towers" },
      { id: "mC", s: "a", k: "ship", w: 9, h: 3, l: "Cypriot fleet" },
      { id: "mP", s: "a", k: "ship", w: 9, h: 3, l: "Phoenician fleet" },
      { id: "mR", s: "a", k: "ship", w: 6, h: 3, l: "Ships with rams" },
      { id: "mB", s: "a", k: "ship", w: 6, h: 3, l: "Ships with boarding bridges" },
      { id: "tW", s: "b", k: "inf", w: 14, h: 3, l: "Defenders on the walls" },
      { id: "tN", s: "b", k: "ship", w: 8, h: 3, l: "Tyrian triremes (north harbor)" },
      { id: "tS", s: "b", k: "ship", w: 8, h: 3, l: "Tyrian triremes (south harbor)" },
      { id: "tF", s: "b", k: "ship", w: 3, h: 3, l: "Fireship" }
    ],
    steps: [
      { t: "January 332 BC. Tyre is an island about 800 m off the coast, with high walls and two harbors, one to the north and one to the south. Alexander has his army on land and no fleet. The ships at the top are the Phoenician and Cypriot allies who will still join him, at Sidon.",
        p: { mA: [93, 50], m1: [86, 36], m2: [86, 36], m3: [86, 36], m4: [86, 36], mT: [90, 28],
             mC: [14, 4], mP: [30, 4], mR: [46, 4], mB: [60, 4],
             tW: [46, 36, 90], tN: [38, 26], tS: [38, 46], tF: [30, 36] } },
      { t: "Alexander has a stone mole built out to the island. The Tyrians shoot from the wall and attack the workers with triremes that sail along the causeway.",
        p: { m1: [78, 36], tN: [62, 28], tS: [62, 44] } },
      { t: "The mole advances. Where it gets deeper, near the island, the work becomes hard. Alexander raises two siege towers some 50 m high, covered with hides, with artillery engines on top.",
        p: { m2: [70, 36], m3: [62, 36], mT: [60, 36], tN: [42, 27], tS: [42, 45] } },
      { t: "The Tyrians fill an old transport ship with flammable material, hang cauldrons of oil from its masts and tow it to the end of the mole. The fire destroys the towers and the engines.",
        p: { tF: [56, 36], m4: [54, 36] }, x: ["mT"] },
      { t: "Without ships, Alexander cannot get there. He goes to Sidon and gathers about 220 Phoenician, Cypriot and other ships. The Tyrians withdraw into their harbors and close the entrances. Alexander blockades both harbors: the Cypriots to the north, the Phoenicians to the south.",
        p: { mC: [30, 22], mP: [30, 50], tN: [40, 28], tS: [40, 44] }, x: ["tF"] },
      { t: "The Tyrians attempt a sortie against the Cypriot ships, at a moment when the sailors are ashore. Alexander comes back quickly, gathers ships and sinks or captures those that came out. After that, the fleet of Tyre does not come out again.",
        p: { tN: [32, 24], mC: [28, 20] }, x: ["tN"] },
      { t: "Alexander puts rams on transport ships and slow galleys. The Tyrians drop big stones on the seabed in front of the wall; Alexander has them hauled out with cranes. Divers cut the anchor cables; Alexander replaces the cables with chains. The wall gives way on the south side.",
        p: { mR: [42, 54], tW: [38, 50], mP: [32, 54] } },
      { t: "On the day of the assault, the fleet attacks both harbors at once, and other ships make feint attacks on the walls. Two ships with boarding bridges reach the breach, with the hypaspists and Alexander. Admetus climbs first and is killed.",
        p: { mB: [40, 53], mR: [46, 53], mC: [32, 28], mP: [32, 46], mA: [72, 36, 90] } },
      { t: "The Macedonians cross the wall, and the fighting goes on in the streets. According to Arrian, about 8,000 Tyrians die; Diodorus and Curtius speak of 6,000 to 7,000 and about 2,000 crucified on the beach. Those who take refuge in the temple of Melqart are spared.",
        p: { mA: [48, 40, 90], mB: [40, 46] }, x: ["tW", "tS"] }
    ]
  },

  watlingstreet: {
    terrain: [
      { t: "hill", x: 50, y: 68, rx: 36, ry: 6, l: "Wood (behind the Romans)" },
      { t: "note", x: 50, y: 47, l: "Narrow pass" }
    ],
    units: [
      { id: "rL", s: "a", k: "inf", w: 16, h: 4, l: "Legionaries (XIV Gemina and part of XX)" },
      { id: "rA1", s: "a", k: "inf", w: 8, h: 3, l: "Auxiliaries" },
      { id: "rA2", s: "a", k: "inf", w: 8, h: 3, l: "Auxiliaries" },
      { id: "rC1", s: "a", k: "cav", w: 7, h: 3.5, l: "Cavalry" },
      { id: "rC2", s: "a", k: "cav", w: 7, h: 3.5, l: "Cavalry" },
      { id: "bF", s: "b", k: "inf", w: 40, h: 8, l: "British foot" },
      { id: "bH1", s: "b", k: "cav", w: 14, h: 4, l: "British horsemen" },
      { id: "bH2", s: "b", k: "cav", w: 14, h: 4, l: "British horsemen" },
      { id: "bB", s: "b", k: "car", w: 5, h: 3, l: "Boudica and her daughters (chariot)" },
      { id: "bW", s: "b", k: "camp", w: 70, h: 3, l: "Wagons with the families" }
    ],
    steps: [
      { t: "Suetonius chooses a narrow pass, with a wood behind and a plain in front. He puts the legionaries in close order in the center, the auxiliaries at the ends of the infantry and the cavalry on the flanks. The Britons, far more numerous, hold the plain; behind them, the families wait in wagons.",
        p: { rL: [50, 54], rA1: [38, 54], rA2: [62, 54], rC1: [30, 54], rC2: [70, 54],
             bF: [50, 14], bH1: [20, 16], bH2: [80, 16], bB: [50, 24], bW: [50, 4] } },
      { t: "The Britons advance in a mass, on foot and on horseback. Boudica drives her chariot past the ranks and speaks to the tribes.",
        p: { bF: [50, 24], bH1: [20, 26], bH2: [80, 26], bB: [50, 32] } },
      { t: "Suetonius speaks to the soldiers: ignore the noise, throw the javelins, fight with shield and sword, and do not think of plunder before the victory. The legionaries stand still, in place.",
        p: { bF: [50, 32], bH1: [20, 33], bH2: [80, 33], bB: [50, 38] } },
      { t: "When the Britons come close enough, the legionaries throw their pila all at once.",
        p: { bF: [50, 40], bH1: [22, 40], bH2: [78, 40], bB: [50, 44] } },
      { t: "The legionaries advance in a wedge, with shield and gladius, and cut a path through the crowd.",
        p: { rL: [50, 47], bF: [50, 37] } },
      { t: "The auxiliaries follow the legionaries and the cavalry, with lances, breaks the groups that still resist.",
        p: { rA1: [36, 46], rA2: [64, 46], rC1: [26, 42], rC2: [74, 42], bH1: [22, 34], bH2: [78, 34] }, x: ["bH1", "bH2"] },
      { t: "The Britons fall back, but their own wagons, lined up at the rear, block the way.",
        p: { rL: [50, 36], bF: [50, 14], bB: [50, 22] } },
      { t: "The slaughter. According to Tacitus, the Romans spare no one, neither women nor pack animals. Boudica, he says, takes poison. The author speaks of 80,000 Britons and about 400 Romans dead: exaggerated numbers.",
        p: { rL: [50, 22], rA1: [36, 24], rA2: [64, 24], rC1: [28, 20], rC2: [72, 20] }, x: ["bF", "bB", "bW"] }
    ]
  },

  molodi: {
    terrain: [
      { t: "sea", x: -8, y: 64, w: 116, h: 10, l: "Oka river" },
      { t: "hill", x: 60, y: 24, rx: 16, ry: 9, l: "Hill of the guliay-gorod" },
      { t: "note", x: 90, y: 6, l: "Moscow ↑" },
      { t: "note", x: 20, y: 34, l: "Ravine (approximate position)" },
      { t: "note", x: 88, y: 56, l: "Schematic, not to scale" }
    ],
    units: [
      { id: "rO", s: "a", k: "inf", w: 10, h: 3, l: "Odoevsky's regiment" },
      { id: "rK", s: "a", k: "cav", w: 9, h: 3.5, l: "Advance regiment (Khvorostinin)" },
      { id: "rF", s: "a", k: "camp", w: 16, h: 4, l: "Guliay-gorod (mobile fortress)" },
      { id: "rG", s: "a", k: "inf", w: 14, h: 4, l: "Main regiment (Vorotynsky)" },
      { id: "tM", s: "b", k: "cav", w: 24, h: 6, l: "Crimean army (Devlet Giray)" },
      { id: "tR", s: "b", k: "cav", w: 8, h: 3, l: "Tatar rear guard" },
      { id: "tJ", s: "b", k: "inf", w: 8, h: 3, l: "Janissaries" }
    ],
    steps: [
      { t: "27 July 1572. The Crimean army crosses the Oka at two points. At the Drakino crossing, Odoevsky's regiment is defeated after a hard fight. The Russians have the guliay-gorod set up on the hill, near Molodi.",
        p: { rO: [30, 60], rK: [74, 52], rF: [60, 26], rG: [60, 34], tM: [34, 68], tR: [18, 62], tJ: [46, 68] } },
      { t: "29 July. Khvorostinin's advance regiment catches up with the Tatar rear guard near Molodi and destroys a good part of it.",
        p: { rK: [28, 56], tR: [22, 56], tM: [36, 60], tJ: [48, 62] }, x: ["rO", "tR"] },
      { t: "Khvorostinin pretends to retreat. The khan's main army follows, straight to the fortress.",
        p: { rK: [56, 36], tM: [44, 48], tJ: [54, 50] } },
      { t: "31 July. After skirmishes, the khan attacks the fort with everything and is repulsed. Divey Murza is captured. The defenders go thirsty and, according to tradition, eat their own horses.",
        p: { tM: [50, 38], tJ: [58, 40] } },
      { t: "The khan pulls back to regroup. The Russians hold out behind the fort, with artillery and arquebusiers.",
        p: { tM: [46, 46], tJ: [54, 48] } },
      { t: "2 August. The khan orders the cavalry to dismount and attack on foot, together with the janissaries.",
        p: { tM: [52, 38], tJ: [60, 40] } },
      { t: "Late in the day, Vorotynsky leaves the fort with the main regiment through a ravine and circles around to attack the Tatars and Ottomans from behind.",
        p: { rG: [28, 40], rK: [58, 34] } },
      { t: "Vorotynsky attacks from the rear and Khvorostinin comes out of the fort in front. Surrounded, the army breaks, and the janissaries are destroyed.",
        p: { rG: [38, 52], rK: [56, 36], tM: [48, 44] }, x: ["tJ"] },
      { t: "The khan flees that same night, crossing the Oka. The Russians chase him to the river, and many Tatars drown. According to a modern estimate, about 27,000 died, 12,000 of them drowned.",
        p: { tM: [34, 66], rG: [38, 58] }, x: ["tM"] }
    ]
  }
});
