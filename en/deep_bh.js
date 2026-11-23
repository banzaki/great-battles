// In-depth battles, batch bh: edessa, arsuf, bouvines, legnica, courtrai (great-battles pack).
// Checked against the English, French, Polish and Dutch Wikipedia articles on the five battles, on Valerian and on the
// Res Gestae Divi Saporis, and the works those pages cite (Hughes, Potter, Bennett, Contamine, Chambers, Hildinger, Labuda,
// Fegley, Van Caenegem). Where sources disagree the text says so; chronicle numbers and legends are flagged.
// No diagram for Edessa: the sources describe no deployment and no moves of the battle itself.

Object.assign(GLOSSARY, {
  "sassânida": "Of the Persian dynasty that ruled Iran from 224 to 651 and took the place of the Parthians. Its kings were called 'kings of kings'.",
  "prefeito do pretório": "A high Roman official, head of the emperor's guard and, in practice, his chief minister and deputy commander.",
  "peste de cipriano": "An epidemic that struck the Roman Empire in the mid-3rd century. The name comes from Cyprian, bishop of Carthage, who described it.",
  "res gestae": "Latin for 'deeds'. Here, the inscription in which Shapur I told of his victories over Rome, in Middle Persian, Parthian and Greek, carved in the rock at Naqsh-e Rustam, near Persepolis.",
  "besteiro": "A soldier armed with a crossbow, a bow fixed to a stock that shoots bolts. It took little training and pierced a lot of armor.",
  "ayúbida": "Of the dynasty founded by Saladin, which ruled Egypt, Syria and other parts of the Middle East in the 12th and 13th centuries.",
  "pique com gancho": "A long shaft with a blade and an iron hook, used to pull a knight off his horse.",
  "sargento medieval": "A professional soldier ranking below the knight, on foot or mounted, more lightly armed and paid wages instead of a fief.",
  "goedendag": "A long wooden club with an iron spike, used by the Flemish militias. In Dutch, the word means 'good day'.",
  "mangudai": "Light horsemen of the Mongol vanguard, who opened the fighting and provoked the enemy into breaking formation.",
  "margrave": "A German title for the ruler of a border region, similar to a marquis.",
  "cavalaria leve": "Horsemen without heavy armor, on swift horses, who shoot arrows or darts, wear the enemy down and chase those who flee."
});

Object.assign(DEEP, {
  edessa: {
    war: "Roman-Sasanian wars (3rd century), Shapur I's campaign of 260",
    hook: "For the first time, a Roman emperor was captured by an enemy and never came home.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 3rd century, the Roman Empire was going through the worst phase of its history. Emperors rose and fell within a few years, usually murdered by their own soldiers, and the frontiers were attacked at once on the Rhine, the Danube and in the East. In the East, the enemy had changed in 224: the [[Sasanian|sassânida]] dynasty overthrew the Parthians and created a better organized and more aggressive state. Its second king, Shapur I, treated the Roman frontier as land to conquer and plunder.",
        "Shapur had already beaten Rome more than once. In 244, after the death of Emperor Gordian III, his successor Philip the Arab made peace by paying 500,000 denarii, according to Shapur's own inscription. Between 252 and 256 (the date is debated), Shapur says he destroyed a Roman army of 60,000 men at Barbalissos and took 36 cities. Antioch, the greatest Roman city in the East, was also sacked, in 253 or 256.",
        { h: "The road to Edessa" },
        { timeline: [
          ["224", "The Sasanians overthrow the Parthian dynasty and create the new Persian empire."],
          ["244", "Philip the Arab buys peace from Shapur I with 500,000 denarii, according to Shapur."],
          ["253", "Valerian is proclaimed emperor and makes his son Gallienus co-emperor."],
          ["253 or 256", "Shapur sacks Antioch."],
          ["254–255", "Valerian reaches the East and gradually restores order."],
          ["c. 259", "A Gothic invasion by sea strikes Pontus and Cappadocia, and a [[plague of Cyprian|peste de cipriano]] kills many Roman soldiers."],
          ["260, probably early spring", "Shapur invades northern Mesopotamia."]
        ]},
        "Valerian tried to intercept the Goths from Antioch, but the plague weakened his army and the plan failed. It was in this state, with sick troops, that he had to face the Persian king."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Valerian, in his sixties" },
        "He was a respected senator, chosen emperor in 253 during a civil war. He made his son Gallienus co-emperor and divided the work: Gallienus stayed in the West, Valerian went East. He persecuted Christians by decree, and Gallienus would cancel that decree in 260. After six years in command, he had restored order in the East, but he was old and led a sick army.",
        { h: "Shapur I, king of kings" },
        "He made propaganda a weapon: he had his victories carved in stone, in the rock at Naqsh-e Rustam, near the tombs of the Achaemenid kings. The inscription, the [[Res Gestae Divi Saporis|res gestae]], is our source closest to the events and also the most interested one. In it Shapur says that Valerian came against him with 70,000 men, that he beat him and that he seized him 'with our own hand'.",
        { h: "The other names" },
        "Gallienus, Valerian's son, kept the Empire. Macrianus, an officer of Valerian's, controlled the emperor's treasury and later proclaimed his two sons emperors. Ballista, a Roman officer, and Odaenathus, lord of Palmyra, are the ones who react after the defeat."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Shapur's inscription says Valerian's army had 70,000 men from almost every province, plus Germanic allies. It is the only number we have, and it comes from the winner. Roman losses in the first battle are estimated by the historian Ian Hughes at about 10,000 dead; other authors, such as Potter and Britannica, speak of almost the whole army or more than 60,000. The size of the Persian army is unknown.",
        { note: "Almost all the numbers for Edessa come from Shapur, who had reason to inflate his victory. Treat them as an order of magnitude, not a count." },
        { h: "The terrain" },
        "The plain of Upper Mesopotamia, between the cities of Carrhae and Edessa, today in southeastern Turkey. Neither ancient nor modern sources describe the positions of the armies or the moves of the battle. That is why this entry has no diagram: any drawing would be invention.",
        { h: "What we know of the battle" },
        "Valerian marched east and the armies met between Carrhae and Edessa. The Romans were completely defeated. According to Hughes, the rest of the army fell back to Edessa and ended up surrendering to save their lives.",
        "The emperor's capture is told in different ways. The Roman sources speak of a defeated and besieged army, of Valerian negotiating and then being seized. Some ancient authors say Shapur broke a truce and seized the emperor at a meeting. The Wikipedia article notes that Roman accounts of defeat tend to blame incompetent generals and treacherous foreigners, so some caution is wise. Shapur, for his part, says he took him personally, and a Persian cameo shows the scene.",
        { h: "After the battle" },
        "Shapur divided his army into at least five columns to plunder Anatolia, passing through Cilicia, Cappadocia, Pamphylia and Lycaonia. He took Tarsus and Caesarea in Cappadocia, and claims to have deported 400,000 people, a figure that also comes from him. Ballista stopped one column at Pompeiopolis and is said to have killed 3,000 Persians. When the Persians went back to the Euphrates, Odaenathus harassed them and killed many."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Valerian's fate" },
        "What happened to him afterward is a matter of debate. The Christian writer Lactantius, very hostile to the Persians, wrote that Shapur used him as a step to mount his horse and that he refused a huge ransom. Aurelius Victor speaks of a cage. Another version says he was flayed, his skin stuffed with straw and displayed in a temple. These scenes are hostile tradition and may have been invented by Christian historians of late antiquity.",
        "The historian Touraj Daryaee argues the opposite: Valerian and some of the soldiers were taken to Bishapur and lived in relatively good conditions. Other prisoners worked on engineering projects, such as the Band-e Kaisar dam near Shushtar. The relief at Naqsh-e Rustam shows Valerian held by the wrist. The date of his death is unknown: in 260 or later.",
        { h: "The empire in pieces" },
        "He was the first Roman emperor captured by an enemy. With him in captivity, Gallienus was left alone in power, and the empire nearly came apart. Macrianus used Valerian's treasury to proclaim his sons Macrianus Minor and Quietus emperors. On the Danube, Ingenuus and Regalianus also proclaimed themselves emperors. In the West, Postumus killed Saloninus, Gallienus's heir, and created what became the Gallic Empire. Gallienus survived until 268, when he was assassinated.",
        { h: "Why it matters" },
        "Edessa showed that Rome could lose, and in the worst way. The defeat marks the low point of the 3rd-century crisis and helps explain the reforms that came later, at the end of that century. At Naqsh-e Rustam, the captured emperor was carved in stone forever.",
        { note: "The classic scene of Shapur stepping on Valerian to mount his horse is a legend, in the sense that it appears only in hostile Christian authors, and modern historians are wary of it. What is carved in stone, in the Persian reliefs, is an emperor held by the wrist." }
      ]}
    ]
  },

  arsuf: {
    war: "Third Crusade (1189–1192)",
    hook: "Saladin wanted to destroy a column on the march, and King Richard kept it in order under days of arrow fire.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1187, Saladin destroyed the army of the Crusader kingdoms at Hattin and took Jerusalem. Europe answered with the Third Crusade, the crusade of the three kings: the German emperor, the king of France, Philip II, and the king of England, Richard I. The emperor died on the way, in 1190, and the German army dispersed. Richard and Philip arrived at Acre, which the Crusaders had been besieging for almost two years.",
        "Acre fell in July 1191. Philip went back to France soon after, and Richard was left in command. When Saladin was slow to pay the ransom for the garrison's prisoners, Richard had them executed. The next goal was Jaffa, the port from which an army could threaten Jerusalem. Between Acre and Jaffa lay more than 100 kilometers of coast and an enemy nobody could make fight.",
        { h: "The road to Arsuf" },
        { timeline: [
          ["1187", "Hattin and the fall of Jerusalem."],
          ["12 Jul 1191", "Acre surrenders."],
          ["Aug 1191", "The Crusader army leaves Acre and heads south along the coast."],
          ["25 Aug", "The rearguard is almost cut off in a defile, but closes up in time."],
          ["30 Aug – 7 Sep", "Saladin shadows the column, waiting for his chance."],
          ["6 Sep", "The Crusaders camp near the marsh at the mouth of the Nahr al-Falaik."],
          ["7 Sep", "Battle of Arsuf."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Richard I of England, 33" },
        "King since 1189 and famous for his courage, he earned the nickname Lionheart. He had more brains than his fame suggests: he remembered that heat and thirst had ruined the Crusaders at Hattin. He marched only in the mornings, rested often and never strayed from water. His bet was simple: keep the column together and let Saladin tire first.",
        { h: "Saladin, over 50" },
        "Sultan of Egypt and Syria, he had united the Muslim world against the Crusaders. He knew that harassment by archers was not enough to stop the column and that Richard, with his ships alongside, could not be cut off from supplies. He wanted an open battle, but with his men hidden in the woods and striking the enemy's weak point. His brother Saphadin (al-Adil) helped him at the front.",
        { h: "The other names" },
        "On the Crusader side, Robert de Sablé led the vanguard of the [[Templars|templários]] and Garnier de Nablus, master of the [[Hospitallers|hospitalários]], the rearguard. Henry of Champagne scouted the hills, and Guy of Lusignan and Hugh of Burgundy had their own contingents. Among the Ayyubids, Taqi al-Din, Saladin's nephew, led the personal guard. The day was recorded on the Muslim side by Baha al-Din ibn Shaddad, who served Saladin, and on the Christian side by the chronicles Itinerarium and Ambroise."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Christian chronicles, like the Itinerarium, give Saladin a three-to-one advantage, with figures of 100,000 to 300,000 that nobody takes seriously. Today Saladin's army is estimated at about 25,000, almost all horsemen, among them Turkish [[horse archers|arqueiro a cavalo]], Bedouin, Nubian archers and some heavy cavalry. On the Crusader side, estimates run from 10,000 to 20,000 men, with about 1,200 heavy knights, according to one of the atlases cited.",
        { note: "The sources agree neither with each other nor with modern historians. Use these ranges as an order of magnitude." },
        { h: "The column and the terrain" },
        "The army marched in strict order, with twelve groups of about a hundred knights each in the middle, the infantry (including [[crossbowmen|besteiro]]) on the land side and the baggage on the sea side. The fleet followed the coast and covered the right. At the end of the route, the last 10 kilometers to Arsuf ran across a narrow plain, between 1.5 and 3 kilometers wide, between the sea and hills covered in brush. That was where Saladin wanted to act: the woods hid his men until the moment of the attack.",
        { h: "The battle in six moments" },
        { formation: true },
        "First, the order of march. In front went the Templars. In the centre, Angevins and Bretons, then the Poitevins and, last, the English and Normans, who guarded the king's standard on a wagon. French, Flemings and the barons of the East came after. In the rear, the Hospitallers, with their [[Turcopoles|turcopolos]]. At dawn, the Crusaders saw scouts on all sides and understood that Saladin's army was near.",
        "Second, the skirmishers. Bedouin, Nubians and Turks shot arrows and darts at the whole column, without stopping. The Crusader crossbowmen answered when they could, but the order was not to break formation. The march went on.",
        "Third, Saladin shifted the weight of the attack to the rearguard. Attacked from the flank and from behind, many Hospitaller foot soldiers walked backward to face the enemy. Saladin himself and Saphadin encouraged the men close to the fighting.",
        "Fourth, the charge. In mid-afternoon, the vanguard was reaching Arsuf, and the Hospitaller crossbowmen, while reloading and falling back, lost contact with the group. Garnier de Nablus repeatedly asked to attack, but Richard ordered him to wait for the signal: six trumpet blasts, the call for a general charge. In the traditional account, the order's marshal and a knight of Richard's household, Baldwin le Carron, could not hold back and charged, and the other Hospitallers followed. French knights from the neighboring corps joined in as well. Historians such as Bennett dispute this reading: perhaps Richard gave his subordinates freedom to seize the chance, and perhaps nobody could hear the trumpet over the Ayyubid cymbals and gongs.",
        "Fifth, Richard saw that the charge would only work if the whole army supported it, and gave the general signal. The infantry opened lanes for the knights, and the attack spread from the rear toward the front. The Ayyubid right wing, engaged and packed together, was hit hard, and some of its horsemen were on foot, shooting. The rout spread to the centre and the left. Baha al-Din wrote that the defeat was complete.",
        "Sixth, the controlled pursuit. Richard stopped it after about 1.5 kilometers, because going too far against a mobile cavalry like that was dangerous. Even so, some Ayyubids turned and killed knights who had advanced too far, among them James of Avesnes. Taqi al-Din attacked Richard's left flank with 700 men of Saladin's guard, and Richard counterattacked and beat them. After regrouping, Richard made a third charge, and the Ayyubids scattered into the woods and hills. The Crusaders returned to Arsuf, where the infantry was already camped.",
        { note: "Tradition says the Hospitallers disobeyed a direct order from Richard. The historian Bennett thinks it possible that Richard delegated the decision, and that the idea of a trumpet signal heard in the middle of the battle is unrealistic." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "A Crusader victory. The Christian chronicles say 32 emirs and 7,000 of Saladin's men died, and Ambroise speaks of thousands of bodies on the field. Baha al-Din names only three dead leaders. On Richard's side, the chronicles give at most 700 dead, with James of Avesnes as the only important leader. The numbers come from the chronicles, and modern historians treat them with care.",
        { h: "What changed" },
        "Saladin's army was not destroyed, but it fled, something the Muslim world itself considered shameful. For the Crusaders, it was a huge boost to morale. Some contemporaries thought a more controlled charge would have destroyed Saladin for good. Saladin avoided another battle in open field and went back to skirmishing. He razed several fortresses in the south, including Ascalon, Gaza, Blanche-Garde, Lydda and Ramla, and garrisoned only Darum, which Richard took. Richard occupied Jaffa and rebuilt its walls.",
        "But Jerusalem was not retaken. In 1192, the Treaty of Jaffa set a three-year truce, with access to Jerusalem for Christian pilgrims and the coast as far as Jaffa in Crusader hands. Richard left to defend his lands against Philip II.",
        { h: "Curiosities" },
        "The battlefield was only precisely located in this century. Rafael Lewis, of the University of Haifa, combined medieval texts, maps, aerial photos and environmental models to find it on the Sharon plain, northeast of Apollonia-Arsuf. In the 2013 and 2014 surveys, with metal detectors, pieces of harness, a horseshoe nail and two arrowheads turned up, one for piercing armor and one, flat, for wounding horses. Modern development had already damaged much of the site."
      ]}
    ]
  },

  bouvines: {
    war: "Anglo-French war of 1213–1214",
    hook: "On a Sunday in July, a French king was thrown from his horse, got back up and won a battle that changed three kingdoms.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the start of the 13th century, the king of England was also lord of half of France: Normandy, Anjou, Aquitaine. Philip II Augustus, king of France, kept taking these territories from King John. By 1204, he had conquered Normandy and most of the north.",
        "John wanted to recover what he had lost, and for that he gathered allies against Philip: his nephew, Emperor Otto IV, and nobles of the Low Countries. Among them was Count Ferrand of Flanders, who had broken with Philip after the king took the cities of Aire and Saint-Omer from him. Also Count Renaud of Dammartin, a French noble who sided with John. The plan was an attack on two fronts: John would come up from the south, and Otto and the allies would come down from the north, as far as Paris.",
        { h: "The road to Bouvines" },
        { timeline: [
          ["1204", "Philip Augustus conquers Normandy."],
          ["Feb 1214", "John lands at La Rochelle and attacks from the south."],
          ["2 Jul 1214", "At La Roche-aux-Moines, Prince Louis, Philip's son, makes John lift the siege and flee."],
          ["Jul 1214", "Otto gathers at Valenciennes, without John. Philip returns north."],
          ["27 Jul 1214, Sunday", "Battle of Bouvines."]
        ]},
        "John withdrew to Aquitaine on 3 July after two clashes with the French, and left the northern allies on their own. Philip then hurried north and chose the ground: the plain east of Bouvines, between the Marque river and the marshes, good for cavalry."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Philip II Augustus, 48" },
        "He was the king who made France a strong monarchy and turned Paris into a real capital. He was careful and cold, and preferred sieges to battles. At Bouvines, he had no choice. He stayed in the centre, among his knights, and was thrown from his horse by enemy soldiers, according to the chronicles.",
        { h: "Otto IV, Holy Roman Emperor" },
        "He was the son of Henry the Lion, of the Welf house, and the nephew of John of England, who financed him. He had been crowned emperor in 1209, but the pope excommunicated him and backed his rival, Frederick II. He needed a great victory.",
        { h: "Ferrand of Flanders and Renaud of Dammartin" },
        "Ferrand was the count of Flanders. Renaud, the count of Boulogne, was a French noble who had been a friend of Philip and later his mortal enemy. He had broken with Philip and could hardly expect forgiveness, so he fought to the end.",
        { h: "The other names" },
        "On the French side, Odo III of Burgundy commanded the right, and Robert of Dreux the left. Gaucher de Châtillon led the charges that held back the Flemings. Among the allies, the Earl of Salisbury, William Longespée, John's half-brother, commanded the English. Galon de Montigny carried the royal standard."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are debated. Modern estimates give the French 6,000 to 7,000 men, with 1,200 to 1,360 knights and 300 mounted [[sergeants|sargento medieval]], plus about 3,160 soldiers from the towns and, perhaps, 2,000 mercenaries. The allies would have had between 8,800 and 9,000 men, with 1,300 to 1,500 knights and about 7,500 on foot. The old thesis that the allies outnumbered the French three to one is disputed by Philippe Contamine. The chronicle numbers, like those of William the Breton, are higher and not very reliable.",
        { h: "The terrain and the positions" },
        "The field lay east of Bouvines, between the Marque river and the marshes. The Bouvines bridge was the only crossing, guarded by 150 sergeants, who were the French reserve. The French had Odo of Burgundy on the right, with knights from Burgundy and Champagne, and Robert of Dreux and William of Ponthieu on the left, with Bretons and militias. In the centre, Philip, with his closest knights and about 2,150 soldiers from the towns of the Île-de-France and Normandy. The allies had Ferrand's Flemings on the left, Otto in the centre, with Germans and Brabanters, and Renaud of Dammartin and the Earl of Salisbury on the right.",
        { note: "The description in 'centre' and 'wings' comes from William the Breton, and some historians think it is a rhetorical device: the battle would have been far more confused than the drawing suggests." },
        { h: "The battle in six moments" },
        { formation: true },
        "First, the opening. About 150 light horsemen, from the abbey of Soissons, opened the fighting and were driven off. Some Flemings chased them and were struck by 180 knights from Champagne. Ferrand then launched all his men, but the charges of Gaucher de Châtillon stopped them.",
        "Second, the centre. Otto's knights and infantry scattered the French militias and came almost up to Philip. Foot soldiers with [[hooked pikes|pique com gancho]] pulled him off his horse. His armor turned aside a lance, and Galon de Montigny raised the royal standard to call for help. Some historians doubt that Philip really fell and see perhaps only a shove.",
        "Third, the reaction. The French knights counterattacked. Stephen de Longchamp was stabbed to death by the infantry, and Pierre Mauvoisin almost captured Otto, whose horse was killed. Otto fled with a few men, while his German knights fought to the end. The imperial standard was captured.",
        "Fourth, the French left. Robert of Dreux's men were pressed at first. The Earl of Salisbury was unhorsed and captured, and the English fled, in an account that Wikipedia marks as poorly documented. Mathieu de Montmorency is said to have taken twelve imperial banners, another story from a single source, of 1848.",
        "Fifth, the end of the Flemish wing. After about three hours of fighting, Ferrand was wounded, unhorsed and captured, and the Flemings' morale collapsed.",
        "Sixth, the last redoubt. Renaud of Dammartin held out in a ring of Brabant pikemen, until a charge of about 50 knights and 1,000 to 2,000 foot soldiers, under Thomas of Saint-Valery, swept them away. Renaud was captured. Darkness and the fear that the prisoners would escape put an end to the pursuit, and trumpets called the French back."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The allies lost 169 knights killed and 131 captured, plus hundreds of foot soldiers: between 400 and 700 Brabanters dead, by one estimate. Captured were Ferrand, Renaud, Salisbury, 25 barons and more than a hundred knights. French losses were small, but the numbers differ: one source speaks of only 2 knights dead, another of about a thousand dead on each side.",
        "Ferrand was held for more than a decade. Salisbury was exchanged for an important French prisoner. Renaud was kept in chains and killed himself in 1227. Philip returned to Paris in triumph, with the prisoners.",
        { h: "Consequences" },
        "Otto fled to Harzburg and was deposed. Frederick II, who was already recognized in the south, took the imperial throne. John made a five-year truce, on mild terms, and lost any hope of recovering the Angevin empire in France. Weakened, he had to accept Magna Carta on 15 June 1215, a year later. Wikipedia links the two things, but the connection is debated.",
        "Philip founded the abbey of Notre-Dame de la Victoire, and Bouvines became a symbol of the French monarchy. For the historian Jean Favier, it was one of the most decisive and symbolic battles in French history, and Ferdinand Lot called it a 'medieval Austerlitz'. A good part of this national reading is a 19th-century construction.",
        { note: "The standard, the king's fall and Montmorency's twelve banners are the most retold episodes and the least certain. The king's fall comes from French chronicles and is questioned by some historians; the story of Montmorency's banners appears in a single source, from 1848." }
      ]}
    ]
  },

  legnica: {
    war: "Mongol invasion of Europe (1241–1242)",
    hook: "A Mongol column of a few thousand horsemen wiped out a Polish duke's army in one afternoon, and moved on.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "By 1241, the Mongols ruled from China to the Volga. After the Cumans fled to Hungary and King Bela IV refused to hand them over, Subutai planned the invasion of Europe. Batu and Subutai would attack Hungary. A third force, under Baidar, Orda and Kadan, would invade Poland as a diversion, to keep the armies of northern Europe from going to help the Hungarians.",
        { h: "The road to Legnica" },
        { timeline: [
          ["early 1241", "Orda attacks northern Poland. Baidar and Kadan sack Sandomierz, to draw off the northern armies."],
          ["3 Mar", "A Polish army is defeated at Tursko."],
          ["18 Mar", "Another Polish defeat, at Chmielnik."],
          ["24 Mar", "The Mongols take and burn Kraków."],
          ["late Mar", "They fail to take Wrocław."],
          ["9 Apr", "Battle of Legnica."],
          ["11 Apr", "Batu and Subutai beat the Hungarians at Mohi."]
        ]},
        "While the Mongols considered besieging Wrocław, they learned that King Wenceslaus I of Bohemia was two days away, with an army more than twice the size of Henry's. They then turned to intercept Henry before the two forces could join, and caught up with him near Legnica."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Henry II the Pious, Duke of Silesia" },
        "He ruled Silesia and, by inheritance from his father, also claimed the title of duke of Kraków, first among the Polish princes. He wanted to join Wenceslaus, but the Mongols forced him to fight before that. His army was a mixture of Silesians, Poles from other regions, Moravians, Bavarian miners and a small contingent of [[Templars|templários]], some 68 to 88 men.",
        { h: "Baidar and Kadan" },
        "They were princes of Genghis Khan's family who commanded the column. There is doubt about Kadan's exact role, and the sources differ on who commanded what. What is known is that the Mongol plan was to keep the northern armies busy, not to conquer Poland.",
        { h: "The other names" },
        "On the European side, Boleslaus, [[margrave|margrave]] of Moravia, Sulisław, who brought the levies of Greater Poland and some from Kraków, and Mieszko II the Fat, duke of Opole, commanded the other divisions. Wenceslaus I of Bohemia, who was coming to help, did not arrive in time."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are debated and almost all come from late sources. For the Mongols, estimates run from 3,000 to 8,000 horsemen, with others reaching 25,000. The Franciscan C. de Bridia, who wrote soon afterward, speaks of about 10,000, reduced to some 8,000 after the earlier battles. Accounts of more than 100,000 are seen as exaggeration. On the allied side, Chambers reckons at most 25,000 men, probably fewer, and many poorly trained. Cetwiński speaks of 2,000, and Labuda of 7,000 to 8,000. Polish Wikipedia gives 6,000 to 7,000.",
        { note: "The presence of the Teutonic Knights is doubtful: the information comes from the chronicler Długosz, writing much later, and historians such as Labuda reject it. The participation of the Templars is considered fairly certain." },
        { h: "The terrain" },
        "Tradition places the battle at Legnickie Pole (Wahlstatt), near Legnica. Polish Wikipedia says the site may be Dobre Pole, some 7 kilometers southeast of the city, and that the traditional name is not confirmed by the sources. The sources do not describe the terrain in detail. The day is also debated: some sources say 8 April.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, Henry divided his army into four divisions: the Bavarian miners and Moravians of Boleslaus; the levies of Greater Poland and some from Kraków, under Sulisław; the army of Opole, under Mieszko II; and Henry's own division, with Silesians, Moravians and Templars. The sources do not give the exact order in the line, and the drawing is approximate.",
        "Second, the first clash. The accounts differ on who attacked: for Chambers, it was the Silesian cavalry; for Hildinger, Boleslaus's levies. In any case, the attack on the Mongol vanguard, the [[mangudai]], was repelled.",
        "Third, the counter-charge. Sulisław and the Opole cavalry attacked next, and the Mongol vanguard made a [[feigned retreat|retirada fingida]]. The Polish horsemen pursued it and moved away from their infantry.",
        "Fourth, the trap. Meanwhile, the Mongol [[light cavalry|cavalaria leve]] enveloped the Poles from the flanks, with a smoke screen that hid their movements and confused the Europeans. Then the heavy cavalry attacked from the front, and the archers shot at the Poles.",
        "Fifth, the rout. In Hildinger's version, a rider shouted 'Run! Run!' in Polish, and Mieszko, confused, pulled the Opole contingent out of the fight. Polish Wikipedia also says Mieszko's sudden flight contributed to the defeat. Henry then sent in his reserve, too late, according to this version.",
        "Sixth, the end. Henry and Boleslaus of Moravia died. Henry was struck down and beheaded as he tried to flee with three bodyguards. His head is said to have been carried on a spear before the walls of Legnica, a detail the English article marks as lacking a reliable source.",
        { note: "A much-repeated story says the Mongols cut off the right ear of each dead man and filled nine sacks with them, to count the dead. It is a legend: there is no proof, and historians treat it as just as doubtful as the European numbers on the size of the Mongol army." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The allied army was almost entirely destroyed, and estimates of the dead run from 2,000 to 40,000, a range so wide it shows how weak the sources are. Labuda speaks of about 2,000 Polish dead. Mongol losses are unknown. The master of the Templars, Ponce d'Aubon, told Louis IX of France that the order had lost about 500 people at Legnica and in the raids that followed, a figure that probably includes peasants.",
        "According to tradition, Henry's body was recognized by the six toes on his left foot.",
        { h: "What happened next" },
        "The Mongols did not attack the Bohemian army. Wenceslaus, a day's march away, fell back to gather reinforcements from Thuringia and Saxony, and the Mongol vanguard was beaten by Bohemian cavalry at Kłodzko. Baidar and Kadan had the mission of being a diversion, and so they avoided a bigger battle, raided smaller towns in bands and then went south, to join Batu and Subutai in Hungary. Two days after Legnica, on 11 April, the Hungarians were destroyed at Mohi.",
        "The Mongols left Europe in 1242, and the reasons remain debated. Poland and Hungary stayed outside the sphere of the Golden Horde, though they suffered other attacks later, in 1259–1260 and in 1287.",
        { h: "Why it matters" },
        "Legnica is one of the clearest examples of how Mongol tactics, with feigned retreat, mobility and smoke, beat European knights on their own ground. It was not a conquest, but a diversionary campaign that achieved its goal."
      ]}
    ]
  },

  courtrai: {
    war: "Franco-Flemish War (1297–1305)",
    hook: "Weavers and butchers of Flanders brought down the flower of French cavalry on a field of ditches and mud.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Flanders was a rich county, part of France on paper but largely autonomous, whose cities prospered on the cloth trade. Philip IV the Fair wanted to control it directly. After Count Guy of Dampierre allied with England, France invaded Flanders in 1297 and came to rule the cities, in 1300. In the cities, the rich families, the 'Leliaerts', backed the French, and the craftsmen, the 'Liebaerts', backed the count.",
        { h: "The road to Courtrai" },
        { timeline: [
          ["1297", "France invades Flanders."],
          ["1300", "The French occupy the county, and Count Guy is imprisoned."],
          ["18 May 1302", "In Bruges, the rebels kill the French in the city: the 'Bruges Matins'."],
          ["26 Jun", "The Flemings besiege the castle of Courtrai, which had a French garrison."],
          ["Jul", "Robert of Artois arrives at the head of a relief army."],
          ["11 Jul 1302", "Battle of Courtrai."]
        ]},
        "Almost all the nobility of Flanders stayed with France. The revolt was led by two sons of the imprisoned count, John and Guy of Namur, and by men of the cities. Philip sent Count Robert II of Artois with a force of some 8,000 men, bent on ending the revolt once and for all."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Robert II, Count of Artois" },
        "Nephew of Louis IX and a renowned knight, he was one of the great lords of France. He trusted in heavy cavalry and, according to French Wikipedia, rejected a suggestion to attack on the flank. He was proud, and pride cost him his life.",
        { h: "Guy of Namur and William of Jülich" },
        "Guy, son of the imprisoned count, headed the revolt. William of Jülich, a German noble, commanded the Flemish army. The sources are unsure about one thing: the Namur troops either arrived late or arrived and did not fight.",
        { h: "Pieter de Coninck and Jan Breydel" },
        "Pieter de Coninck, a weaver, led the Bruges group. Jan Breydel, a butcher, became famous through a 19th-century novel, and today his role is considered exaggerated. Also cited are Jan van Renesse, with 500 men from Ypres, and Jan Borluut, with about 700 volunteers from Ghent."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Modern estimates give the Flemings 8,000 to 10,000 men, almost all on foot, from urban militias, with some 400 nobles as officers and some 900 [[crossbowmen|besteiro]]. The French would have had about 2,500 knights, 1,000 crossbowmen and another 5,000 to 6,000 foot soldiers, between 8,000 and 10,000 men. Medieval chronicles reach 50,000 French, which is considered impossible. The Annals of Ghent speak of only ten Flemish knights.",
        { note: "The sources differ on almost everything: the size of the armies, the role of the French infantry and even what Artois's rearguard did. What follows is the core common to the modern accounts." },
        { h: "The terrain" },
        "The Flemings occupied an open area beside the Groeninge stream, on a plateau between the Lys river and a marsh. They had dug ditches, some fed by the Lys, others hidden under earth and branches. The uneven ground took the momentum from cavalry. The position was deep, almost square, with a bend of the river protecting the rear. When the French tried to bridge the marsh with planks, they were driven off.",
        { h: "The battle in six moments" },
        { formation: true },
        "First, the crossbowmen. About 1,000 French crossbowmen attacked the some 900 Flemish and pushed them back. The bolts struck the Flemish front, but did little damage.",
        "Second, Artois's decision. In one version, Artois, worried about the streams and his outnumbered infantry, called the foot soldiers back and sent about 2,300 heavy knights, in two waves, across the streams. Some horses fell, but the crossing succeeded. In the version of French Wikipedia, the French infantry advanced to the ditch, and the fighting in its favor made the Flemings fall back. The accounts agree that the knights, confident, went into the charge.",
        "Third, the charge. The French attacked at a trot, with lances. The Flemish pikemen held their ground and used the [[goedendags|goedendag]] against gaps in the armor. Part of the cavalry hesitated, and most of those who got through were beaten by the Flemish reserves. Knights fell into the hidden ditches and bogged down in the marsh.",
        "Fourth, the rearguard. Artois sent the rearguard of some 700 men forward and went with it. Part turned back to protect the baggage, and Artois's group was left without support, was surrounded and he died. French Wikipedia tells a different version, in which the rearguard of the Count of Saint-Pol withdrew without fighting.",
        "Fifth, the slaughter. The knights who were left were pushed into the marsh, where they bogged down and were attacked. A sortie by the castle garrison, to reinforce them, fell into an ambush.",
        "Sixth, the flight. The remaining French infantry broke and fled, and the Flemings pursued them for more than 10 kilometers. Few knights were taken for ransom. The castle of Courtrai surrendered two days later, on 13 July."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Between 1,000 and 1,500 French knights and men-at-arms died. The Annals of Ghent speak of more than a thousand, among them 75 nobles. Among the dead were Robert of Artois, the constable Raoul de Nesle, the marshal Guy de Clermont, Jacques de Châtillon and Pierre Flote. A modern source, Fegley, speaks of more than 60 counts and barons. Flemish losses range from 100 to 300 dead, depending on the source.",
        { h: "The spurs" },
        "The battle's name comes from the gilded spurs of the dead knights, taken as a trophy and hung in the church of Notre-Dame in Courtrai. The traditional number is 500 pairs, and Fegley estimates 500 to 700. The spurs are said to have been recovered by the French after the battle of Roosebeke, in 1382, when Charles VI sacked Courtrai in revenge, but that part is told without a reliable source.",
        { h: "Consequences" },
        "John of Namur entered Ghent on 14 July. The governments of the rich families, which had backed the French, fell in Ghent and Ypres, and the craft guilds won official recognition. The victory, however, did not last. In 1304, the French destroyed the Flemish fleet at Zierikzee and won at Mons-en-Pévèle. The Peace of Athis-sur-Orge, in June 1305, forced Flanders to pay a heavy tribute to France.",
        { h: "Why it matters" },
        "It was one of the first times a citizen infantry beat the elite of feudal cavalry in an open field, and it showed the world that the armored knight was not invincible. In the 19th and 20th centuries, the battle became the symbol of the Flemish movement, thanks to Hendrik Conscience's 1838 novel The Lion of Flanders. Since 1973, 11 July has been the official holiday of the Flemish Community.",
        { note: "Historians debate the real importance of the battle and the weight of the romantic myths around it. The role of Jan Breydel, for example, is much smaller in the sources than in tradition. Some sources say the Flemings refused to accept surrenders, which would be a break with the customs of the time; others note that there were almost no prisoners for ransom." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  arsuf: {
    terrain: [
      { t: "sea", x: 0, y: 60, w: 100, h: 10, l: "Sea (the Crusader fleet follows the coast)" },
      { t: "note", x: 3, y: 6, l: "Wood of Arsuf (hid Saladin's army)" },
      { t: "note", x: 88, y: 56, l: "South: Arsuf →" }
    ],
    units: [
      { id: "tem", s: "a", k: "cav", w: 9, h: 5, l: "Templars (vanguard)" },
      { id: "cen", s: "a", k: "cav", w: 20, h: 5, l: "Angevins, Poitevins, English and Normans" },
      { id: "fr", s: "a", k: "cav", w: 14, h: 5, l: "French, Flemings, barons of the East" },
      { id: "hos", s: "a", k: "cav", w: 11, h: 5, l: "Hospitallers (rearguard)" },
      { id: "inf", s: "a", k: "inf", w: 56, h: 3, l: "Infantry and crossbowmen (land side)" },
      { id: "bag", s: "a", k: "camp", w: 30, h: 3, l: "Baggage (sea side)" },
      { id: "ric", s: "a", k: "cav", w: 8, h: 4, l: "Richard and Hugh of Burgundy" },
      { id: "fle", s: "a", k: "ship", w: 14, h: 4, l: "Fleet" },
      { id: "esc", s: "b", k: "cav", w: 18, h: 4, l: "Skirmishers: Bedouin, Nubians, Turks" },
      { id: "dir", s: "b", k: "cav", w: 16, h: 5, l: "Right wing (against the rearguard)" },
      { id: "cs", s: "b", k: "cav", w: 14, h: 5, l: "Saladin and the centre" },
      { id: "esq", s: "b", k: "cav", w: 14, h: 5, l: "Left wing" },
      { id: "taq", s: "b", k: "cav", w: 10, h: 4, l: "Taqi al-Din and 700 of the guard" }
    ],
    steps: [
      { t: "At dawn, the Crusader column marches south, beside the sea: Templars in front, then the centre, the French and, in the rear, the Hospitallers. Saladin waits hidden in the woods.",
        p: { tem: [88, 47], cen: [68, 47], fr: [50, 47], hos: [34, 47], inf: [58, 40], bag: [56, 54], ric: [44, 35], fle: [50, 65],
             esc: [58, 20], dir: [28, 14], cs: [52, 10], esq: [76, 14], taq: [40, 8] } },
      { t: "Bedouin, Nubian and Turkish skirmishers shoot arrows and darts at the whole column. The crossbowmen answer, but the order is to keep formation and keep marching.",
        p: { esc: [58, 33], ric: [42, 36] } },
      { t: "Saladin shifts the weight of the attack to the rearguard. Attacked from the side and from behind, the Hospitaller foot soldiers walk backward to face the enemy.",
        p: { dir: [32, 33], cs: [42, 26], esc: [46, 31], hos: [33, 46] } },
      { t: "In mid-afternoon, the vanguard reaches Arsuf. Garnier de Nablus asks to attack, but Richard orders him to wait for the six-trumpet signal.",
        p: { tem: [92, 47], cen: [73, 47], fr: [55, 47], dir: [32, 35] } },
      { t: "The Hospitallers' marshal and Baldwin le Carron charge, and the other Hospitallers follow. French knights from the neighboring corps join in as well. (According to tradition, against Richard's order; Bennett disputes this.)",
        p: { hos: [30, 38, -10], fr: [48, 40, -10], dir: [28, 30] } },
      { t: "Richard sees that the charge needs the whole army and gives the general signal. The infantry opens a lane, and the attack spreads from the rear to the front. The packed Ayyubid right wing gives way.",
        p: { hos: [26, 30, -10], fr: [40, 32, -10], cen: [60, 38, -10], ric: [34, 28], dir: [22, 20], esc: [44, 22] }, x: ["dir"] },
      { t: "The rout reaches the centre and the left. Richard halts the pursuit after about 1.5 kilometers.",
        p: { cen: [56, 28], tem: [80, 32], cs: [40, 12], esq: [70, 10], esc: [48, 14] }, x: ["dir", "esc", "cs"] },
      { t: "Some Ayyubids turn and kill knights who went too far, among them James of Avesnes. Taqi al-Din attacks Richard's left flank with 700 men of the guard.",
        p: { taq: [58, 22], ric: [52, 28] } },
      { t: "Richard counterattacks and beats them, then makes a third charge that scatters the Ayyubids into the woods. The Crusaders return to Arsuf, where the infantry has already camped.",
        p: { ric: [46, 16], taq: [56, 8], esq: [74, 6] }, x: ["taq", "esq"] }
    ]
  },

  bouvines: {
    terrain: [
      { t: "note", x: 3, y: 58, l: "Marque river and the Bouvines bridge (150 sergeants)" },
      { t: "note", x: 70, y: 4, l: "Marshes" }
    ],
    units: [
      { id: "fR", s: "a", k: "cav", w: 18, h: 5, l: "Odo of Burgundy (Burgundy and Champagne)" },
      { id: "fM", s: "a", k: "inf", w: 20, h: 4, l: "Town militias" },
      { id: "fK", s: "a", k: "cav", w: 12, h: 4, l: "Philip and his knights" },
      { id: "fL", s: "a", k: "cav", w: 18, h: 5, l: "Robert of Dreux and William of Ponthieu" },
      { id: "fB", s: "a", k: "inf", w: 9, h: 3, l: "150 sergeants at the bridge" },
      { id: "aF", s: "b", k: "cav", w: 18, h: 5, l: "Ferrand and the Flemings" },
      { id: "aO", s: "b", k: "cav", w: 18, h: 5, l: "Otto and the Germans" },
      { id: "aI", s: "b", k: "inf", w: 16, h: 4, l: "German and Brabant infantry" },
      { id: "aR", s: "b", k: "inf", w: 14, h: 4, l: "Renaud of Dammartin and the pikemen" },
      { id: "aS", s: "b", k: "cav", w: 10, h: 4, l: "Salisbury and the English" }
    ],
    steps: [
      { t: "The two armies face each other on the plain east of Bouvines. The French have Odo on the right, Philip in the centre and Dreux on the left, with the bridge at their backs. Ferrand's Flemings face Odo.",
        p: { fR: [76, 44], fM: [50, 47], fK: [50, 52], fL: [24, 44], fB: [14, 63],
             aF: [76, 22], aO: [50, 17], aI: [50, 24], aR: [28, 18], aS: [18, 24] } },
      { t: "About 150 light horsemen from the abbey of Soissons open the fight and are driven off. The Flemings chase them, and 180 knights from Champagne strike them.",
        p: { aF: [76, 29], fR: [76, 38] } },
      { t: "Ferrand launches all his men. The charges of Gaucher de Châtillon stop them, and the fight lasts about three hours.",
        p: { aF: [76, 33], fR: [76, 38] } },
      { t: "In the centre, Otto's knights and infantry scatter the French militias and reach Philip. Soldiers with hooked pikes pull him off his horse.",
        p: { aO: [50, 33], aI: [50, 38], fM: [50, 54], fK: [50, 46] }, x: ["fM"] },
      { t: "The French knights counterattack. Otto loses his horse and flees with a few men, while his German knights fight to the end. The imperial standard is captured.",
        p: { fK: [50, 38], aO: [50, 22], aI: [50, 28] }, x: ["aO"] },
      { t: "On the French left, Dreux's men are pressed at first. Salisbury is unhorsed and captured, and the English flee (a poorly documented account).",
        p: { aS: [22, 34], fL: [24, 42] }, x: ["aS"] },
      { t: "Ferrand is wounded, unhorsed and captured. The Flemings lose heart and scatter.",
        p: { aF: [80, 30], fR: [78, 33] }, x: ["aF"] },
      { t: "Renaud of Dammartin holds out in a ring of pikemen. A charge of about 50 knights and 1,000 to 2,000 foot soldiers, under Thomas of Saint-Valery, beats him and captures him.",
        p: { aR: [28, 26], fL: [26, 32], fB: [22, 40] }, x: ["aR"] },
      { t: "At nightfall, trumpets call the French back. The victory is French.",
        p: { fK: [50, 40], fR: [70, 36], fL: [30, 34] } }
    ]
  },

  legnica: {
    terrain: [
      { t: "note", x: 3, y: 4, l: "Approximate positions: the sources do not give the exact order in the line" }
    ],
    units: [
      { id: "pB", s: "a", k: "inf", w: 16, h: 5, l: "Boleslaus (Moravians, Bavarian miners)" },
      { id: "pS", s: "a", k: "cav", w: 16, h: 5, l: "Sulisław (Greater Poland, Kraków)" },
      { id: "pO", s: "a", k: "cav", w: 16, h: 5, l: "Mieszko II (Opole)" },
      { id: "pH", s: "a", k: "cav", w: 18, h: 5, l: "Henry (Silesians, Moravians, Templars)" },
      { id: "mV", s: "b", k: "cav", w: 12, h: 4, l: "Vanguard (mangudai)" },
      { id: "mL", s: "b", k: "cav", w: 14, h: 4, l: "Light cavalry (left flank)" },
      { id: "mR", s: "b", k: "cav", w: 14, h: 4, l: "Light cavalry (right flank)" },
      { id: "mH", s: "b", k: "cav", w: 20, h: 5, l: "Heavy cavalry and archers" }
    ],
    steps: [
      { t: "Henry divides his army into four divisions, in line, with Boleslaus's, Sulisław's and Mieszko's in front and his own behind. The Mongols wait opposite, fewer in number.",
        p: { pB: [26, 50], pS: [46, 50], pO: [66, 50], pH: [46, 60], mV: [46, 22], mL: [24, 14], mR: [68, 14], mH: [46, 10] } },
      { t: "First clash: a Polish attack on the Mongol vanguard (Silesian cavalry, according to Chambers; Boleslaus's levies, according to Hildinger) is repelled.",
        p: { pB: [26, 40], mV: [28, 30] } },
      { t: "Sulisław and the Opole cavalry counterattack. The Mongol vanguard makes a feigned retreat and draws the Polish horsemen away from their infantry.",
        p: { pS: [44, 36], pO: [64, 38], mV: [46, 20], pB: [26, 46] } },
      { t: "Covered by a smoke screen, the Mongol light cavalry closes in on both flanks.",
        p: { mL: [22, 30], mR: [74, 28], pS: [44, 32], pO: [64, 33] } },
      { t: "The Mongol heavy cavalry attacks from the front, and the archers shoot at the Poles, already surrounded.",
        p: { mH: [46, 24], mV: [46, 26] } },
      { t: "In Hildinger's version, someone shouts 'Run!' in Polish, and Mieszko pulls the Opole contingent out of the fight. Polish Wikipedia also names his flight as a cause of the defeat.",
        p: { pO: [78, 58] }, x: ["pO"] },
      { t: "Henry sends in his reserve, too late. The Poles are enveloped on all sides.",
        p: { pH: [46, 44], mL: [28, 40], mR: [66, 40] } },
      { t: "The allied army is destroyed. Henry and Boleslaus of Moravia die. Henry is struck down and beheaded as he tries to flee.",
        p: { pH: [46, 40], mH: [46, 32] }, x: ["pB", "pS", "pH"] }
    ]
  },

  courtrai: {
    terrain: [
      { t: "note", x: 4, y: 64, l: "Lys river, behind the Flemings" },
      { t: "note", x: 64, y: 36, l: "Groeninge stream and hidden ditches" }
    ],
    units: [
      { id: "fC", s: "a", k: "inf", w: 12, h: 2.5, l: "Flemish crossbowmen" },
      { id: "fM", s: "a", k: "inf", w: 34, h: 5, l: "Militias of Bruges, Ypres and the Franc" },
      { id: "fR", s: "a", k: "inf", w: 16, h: 4, l: "Reserve (Jan van Renesse)" },
      { id: "bC", s: "b", k: "inf", w: 14, h: 2.5, l: "French crossbowmen" },
      { id: "bI", s: "b", k: "inf", w: 22, h: 4, l: "French infantry" },
      { id: "b1", s: "b", k: "cav", w: 20, h: 5, l: "First wave of knights" },
      { id: "b2", s: "b", k: "cav", w: 20, h: 5, l: "Second wave of knights" },
      { id: "bA", s: "b", k: "cav", w: 12, h: 4, l: "Rearguard (Artois)" }
    ],
    steps: [
      { t: "The Flemings wait on foot, in a deep position, with the Lys river behind them and the Groeninge stream and ditches in front. The French arrive opposite, with the cavalry behind the infantry.",
        p: { fC: [46, 44], fM: [46, 52], fR: [46, 60], bC: [46, 20], bI: [38, 14], b1: [32, 8], b2: [58, 8], bA: [46, 3] } },
      { t: "About 1,000 French crossbowmen attack the some 900 Flemish and push them back.",
        p: { bC: [46, 32], fC: [46, 46] } },
      { t: "The French infantry advances to the ditches. Then, in the most-cited version, Artois calls it back to make way for the knights.",
        p: { bI: [36, 30] } },
      { t: "About 2,300 knights, in two waves, cross the streams. Some horses fall, but the crossing succeeds.",
        p: { b1: [34, 32], b2: [58, 26], bI: [34, 22], bC: [46, 22] } },
      { t: "The French attack at a trot, with lances. The Flemish pikemen hold and strike the gaps in the armor with goedendags. Horses bog down in hidden ditches.",
        p: { b1: [38, 40], b2: [56, 34], fM: [46, 50] } },
      { t: "The Flemish reserves beat the knights who broke through the line.",
        p: { fR: [46, 54], b1: [38, 42] }, x: ["b1"] },
      { t: "Artois advances with the rearguard of some 700 men. Part turns back to guard the baggage, and he is left without support. Surrounded, he dies.",
        p: { bA: [46, 30], b2: [56, 38] }, x: ["b2"] },
      { t: "The knights who remain are pushed into the marsh, where they bog down. A sortie from the castle, to reinforce them, falls into an ambush.",
        p: { bA: [48, 40] }, x: ["bA"] },
      { t: "The French infantry breaks and flees. The Flemings pursue it for more than 10 kilometers.",
        p: { bI: [34, 12], bC: [46, 10], fM: [46, 40] }, x: ["bI", "bC"] }
    ]
  }
});
