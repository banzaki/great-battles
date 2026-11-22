// More battles (antiquity and middle ages), in a compact form.
// add(id, name, year, date, era, place, lat, lng, [side, leader, troops, n], [side, leader, troops, n], winner, summary, phases, result, legacy)
// winner: "a", "b", or "" when the outcome was indecisive. Troop numbers are historians' estimates.
function add(id, name, year, date, era, place, lat, lng, a, b, winner, summary, phases, result, legacy) {
  const side = s => ({ side: s[0], leader: s[1], troops: s[2], n: s[3] });
  BATTLES.push({ id, name, year, date, era, place, lat, lng, a: side(a), b: side(b), winner, summary, phases, result, legacy });
}

// ---------- Antiquity ----------
add("megido", "Megiddo", -1457, "c. 1457 BC", "antiga", "Jezreel Valley, present-day Israel", 32.585, 35.185,
  ["Egypt", "Thutmose III", "≈ 10,000 to 20,000", 15000], ["Canaanite coalition", "King of Kadesh", "≈ 10,000 to 15,000", 12500], "a",
  "Cities of Canaan rebelled against Egypt. The young pharaoh Thutmose III marched to crush the revolt.",
  ["There were three roads to Megiddo. Against the advice of his generals, Thutmose chose the most dangerous: a narrow pass, where no one expected him.",
   "The Egyptian army came out of the pass in front of the city and caught the Canaanites by surprise.",
   "The Canaanites fled inside the walls. The Egyptians stopped to plunder and then had to besiege the city for seven months."],
  "Megiddo surrendered, and Egypt dominated Canaan.",
  "It is the first battle in history recorded in reliable detail. The name Megiddo gave rise to the word Armageddon.");

add("kadesh", "Kadesh", -1274, "May 1274 BC", "antiga", "Orontes River, present-day Syria", 34.557, 36.52,
  ["Egypt", "Ramesses II", "≈ 20,000", 20000], ["Hittite Empire", "Muwatalli II", "≈ 40,000 and thousands of war chariots", 40000], "",
  "Egypt and the Hittites were fighting over Syria. It was probably the largest chariot battle in history.",
  ["False spies told Ramesses that the Hittites were far away. He advanced with only part of his army.",
   "The Hittite chariots came out from behind the city and shattered an Egyptian division on the march.",
   "Ramesses counterattacked in person and was saved by the arrival of reinforcements. The Hittites stopped to plunder the camp and lost their momentum."],
  "A draw: both sides claimed victory. Kadesh remained Hittite.",
  "Years later, the two empires signed the oldest peace treaty known. A copy hangs at the United Nations headquarters.");

add("salamina", "Salamis", -480, "September 480 BC", "antiga", "Strait of Salamis, Greece", 37.95, 23.57,
  ["Greek alliance", "Themistocles and Eurybiades", "≈ 370 ships", 370], ["Persian Empire", "Xerxes I", "≈ 600 to 800 ships", 700], "a",
  "After Thermopylae, Athens was burned. The last Greek hope was the fleet.",
  ["Themistocles sent a false message to Xerxes, saying the Greeks were about to flee. The Persians entered the strait to catch them.",
   "In the cramped channel, the Persian ships got in one another's way and could not use their advantage in numbers.",
   "The Greek triremes attacked with their rams. Xerxes watched it all from a throne on top of a hill."],
  "The Persians lost hundreds of ships, and Xerxes went back to Asia.",
  "Without a fleet, the Persian army could not be supplied. The invasion ended the following year, at Plataea.");

add("plateia", "Plataea", -479, "August 479 BC", "antiga", "Boeotia, Greece", 38.22, 23.27,
  ["Greek alliance", "Pausanias of Sparta", "≈ 40,000 hoplites and light troops", 40000], ["Persian Empire", "Mardonius", "≈ 70,000 to 120,000", 90000], "a",
  "Xerxes went away, but left the general Mardonius with a large army to finish the conquest of Greece.",
  ["The two armies stared at each other for more than ten days, with neither wanting to attack first.",
   "The Greeks tried to change position at night and fell into disorder. Mardonius thought it was a retreat and attacked.",
   "The Spartans withstood the attack and killed Mardonius. Without their leader, the Persian army collapsed."],
  "Decisive Greek victory.",
  "It was the end of the Persian invasions. After it began the golden age of Athens.");

add("leuctra", "Leuctra", -371, "July 371 BC", "antiga", "Boeotia, Greece", 38.265, 23.175,
  ["Thebes", "Epaminondas", "≈ 6,000 to 7,000", 6500], ["Sparta", "King Cleombrotus I", "≈ 10,000", 10000], "a",
  "Sparta had been considered invincible on land for centuries. Thebes decided to challenge it.",
  ["Epaminondas broke the rule of the age: instead of an even line, he gathered a column 50 ranks deep on the left wing.",
   "That column, with the Sacred Band in front, attacked straight at the spot where the king and the Spartan elite stood.",
   "The rest of the Theban line stayed back, on a diagonal, without fighting. King Cleombrotus died, and the Spartans fell back."],
  "Of the 700 Spartan citizens present, about 400 died.",
  "It was the end of Sparta's supremacy. Epaminondas' 'oblique order' was copied by generals for 2,000 years.");

add("queroneia", "Chaeronea", -338, "August 338 BC", "antiga", "Boeotia, Greece", 38.495, 22.845,
  ["Macedon", "Philip II", "≈ 32,000", 32000], ["Athens and Thebes", "Chares and Theagenes", "≈ 35,000", 35000], "a",
  "Philip II of Macedon had been gradually dominating Greece. Athens and Thebes united to stop him.",
  ["Philip deliberately pulled back his right wing, and the Athenians advanced after him, opening a gap in the Greek line.",
   "At the other end, the cavalry went through the gap. It was commanded by Philip's son, Alexander, aged 18.",
   "The Sacred Band of Thebes, 300 elite soldiers, did not retreat and was destroyed."],
  "Macedonian victory.",
  "The Greek cities lost their independence. Two years later, Alexander inherited the army and set out to conquer Persia.");

add("isso", "Issus", -333, "November 333 BC", "antiga", "Gulf of Iskenderun, present-day Turkey", 36.84, 36.21,
  ["Macedon", "Alexander the Great", "≈ 40,000", 40000], ["Persian Empire", "Darius III", "≈ 50,000 to 100,000", 75000], "a",
  "It was the first meeting between Alexander and King Darius in person.",
  ["Darius appeared behind Alexander, but on a narrow plain between the sea and the mountains, where his numbers did not fit.",
   "Alexander attacked with the cavalry on the right and broke the Persian left.",
   "Then he turned toward Darius, who fled by chariot and then on horseback."],
  "Darius left behind his mother, his wife and his daughters, who were captured and well treated.",
  "Darius offered half the empire in exchange for peace. Alexander refused and won for good at Gaugamela.");

add("hidaspes", "Hydaspes", -326, "May 326 BC", "antiga", "Jhelum River, present-day Pakistan", 32.83, 73.64,
  ["Macedon", "Alexander the Great", "≈ 40,000 (only part crossed the river)", 40000], ["Kingdom of Paurava", "King Porus", "≈ 30,000 and up to 200 elephants", 30000], "a",
  "On the border of India, King Porus waited for Alexander on the other side of a river swollen by the monsoons.",
  ["Alexander made noise and false preparations for several nights, until Porus stopped reacting.",
   "On a stormy night, he crossed the river almost 30 km upstream with part of the army.",
   "The elephants frightened the horses but, wounded by spears and arrows, trampled their own Indian troops."],
  "Macedonian victory. Alexander admired Porus' courage and kept him as king.",
  "It was Alexander's last great battle. Shortly afterward, his soldiers refused to go any further, and he turned back.");

add("changping", "Changping", -260, "262 to 260 BC", "antiga", "Gaoping, Shanxi, China", 35.8, 112.92,
  ["State of Qin", "Bai Qi", "hundreds of thousands (according to the sources)", 500000], ["State of Zhao", "Zhao Kuo", "hundreds of thousands (according to the sources)", 450000], "a",
  "In the Warring States period, Qin and Zhao were the two greatest military powers in China.",
  ["For two years, Zhao's old general refused to leave the fortifications. The king replaced him with Zhao Kuo, a young man who knew war only from books.",
   "Zhao Kuo attacked. Bai Qi pretended to retreat and shut Zhao's army in a valley, cutting off its food.",
   "After 46 days of hunger, Zhao Kuo died trying to break the encirclement, and the army surrendered."],
  "Ancient sources say 400,000 prisoners were executed. The number is probably exaggerated.",
  "Zhao never recovered. Qin unified China in 221 BC, and the name 'China' comes from 'Qin'.");

add("trasimeno", "Lake Trasimene", -217, "21 June 217 BC", "antiga", "Umbria, Italy", 43.19, 12.1,
  ["Carthage", "Hannibal Barca", "≈ 50,000", 50000], ["Roman Republic", "Gaius Flaminius", "≈ 25,000 to 30,000", 27500], "a",
  "Hannibal was loose in Italy, and the consul Flaminius set out after him in a hurry.",
  ["Hannibal hid his whole army in the hills beside the road that skirted the lake.",
   "The Romans entered the narrow road early in the morning, in march column, in the middle of a fog.",
   "The Carthaginians came down from every side at once. With no room to form up, many Romans were pushed into the lake."],
  "About 15,000 Romans died in three hours, among them the consul Flaminius.",
  "It is considered the greatest ambush in military history. A year later came Cannae.");

add("zama", "Zama", -202, "October 202 BC", "antiga", "Near Siliana, present-day Tunisia", 36.3, 9.45,
  ["Roman Republic", "Scipio", "≈ 35,000", 35000], ["Carthage", "Hannibal Barca", "≈ 40,000 and 80 elephants", 40000], "a",
  "Instead of facing Hannibal in Italy, Scipio took the war to Africa. Carthage called Hannibal back.",
  ["Hannibal opened with 80 elephants. Scipio had left lanes between the units, and the animals went straight through.",
   "The Roman and Numidian cavalry, of King Masinissa, drove the Carthaginian cavalry off the field.",
   "The infantries fought on equal terms until the cavalry came back and attacked Hannibal's veterans from behind."],
  "It was Hannibal's only defeat in a pitched battle. Carthage sued for peace.",
  "End of the Second Punic War. Rome became master of the western Mediterranean, and Scipio earned the nickname 'Africanus'.");

add("pidna", "Pydna", -168, "22 June 168 BC", "antiga", "Macedonia, Greece", 40.37, 22.58,
  ["Roman Republic", "Lucius Aemilius Paullus", "≈ 38,000", 38000], ["Macedon", "King Perseus", "≈ 44,000", 44000], "a",
  "It was the final test between the two best military systems of antiquity: the Roman legion and the Macedonian phalanx.",
  ["Head-on, the phalanx was unbeatable: a wall of six-meter spears that pushed the Romans back.",
   "Advancing over uneven ground, the phalanx opened gaps between its ranks.",
   "Aemilius Paullus sent small groups into the gaps. At close quarters, the short Roman sword beat the long spear."],
  "About 20,000 Macedonians died in one hour.",
  "It was the end of Alexander's kingdom. A curiosity: the Roman general was the son of the consul killed at Cannae.");

add("gaixia", "Gaixia", -202, "December 202 BC", "antiga", "Lingbi, Anhui, China", 33.3, 117.4,
  ["Han", "Liu Bang and Han Xin", "≈ 300,000 (according to the sources)", 300000], ["Chu", "Xiang Yu", "≈ 100,000", 100000], "a",
  "After the fall of the Qin dynasty, two rebels fought over China: the noble warrior Xiang Yu and the peasant Liu Bang.",
  ["The general Han Xin surrounded the army of Chu on all sides.",
   "At night, he ordered his soldiers to sing songs from the land of Chu. Xiang Yu's men thought their homeland had already fallen and deserted en masse.",
   "Xiang Yu broke through the encirclement with 800 horsemen, reached the Wu River almost alone and killed himself."],
  "Liu Bang became emperor.",
  "The Han dynasty was born, and lasted 400 years. To this day, China's ethnic majority is called 'Han'.");

add("carras", "Carrhae", -53, "June 53 BC", "antiga", "Harran, present-day Turkey", 36.86, 39.03,
  ["Parthian Empire", "Surena", "≈ 10,000 horsemen", 10000], ["Roman Republic", "Marcus Licinius Crassus", "≈ 40,000", 40000], "a",
  "Crassus, the richest man in Rome, wanted military glory equal to that of Caesar and Pompey. He invaded Parthia for no good reason.",
  ["In the open desert, the Parthian horse archers surrounded the legions and shot from a distance, without stopping.",
   "The Romans waited for the arrows to run out. They did not: a thousand camels brought fresh arrows.",
   "When the Romans advanced, the Parthians fled while shooting backward, the famous 'Parthian shot'."],
  "About 20,000 Romans died and 10,000 were captured. Crassus was killed at a negotiation.",
  "One of Rome's worst defeats. Without Crassus, Caesar and Pompey were left face to face, and civil war came.");

add("farsalia", "Pharsalus", -48, "9 August 48 BC", "antiga", "Thessaly, Greece", 39.3, 22.38,
  ["Caesar", "Julius Caesar", "≈ 22,000", 22000], ["Pompey and the Senate", "Pompey the Great", "≈ 45,000", 45000], "a",
  "Caesar had crossed the Rubicon. The Roman civil war was going to be decided in Greece.",
  ["Pompey counted on his cavalry, seven times larger, to go around Caesar's right wing.",
   "Caesar guessed the plan and hid a fourth line of infantry behind the wing.",
   "Pompey's cavalry ran straight into that line, panicked and fled. The same troops then attacked Pompey's flank."],
  "Pompey fled to Egypt, where he was murdered as he landed.",
  "Caesar became master of Rome. It was the beginning of the end of the Republic.");

add("accio", "Actium", -31, "2 September 31 BC", "antiga", "Ionian Sea, Greece", 38.93, 20.72,
  ["Octavian", "Marcus Agrippa", "≈ 400 ships", 400], ["Mark Antony and Cleopatra", "Mark Antony", "≈ 230 ships", 230], "a",
  "After Caesar's death, his two heirs fought over the Roman world: Octavian in the West, Antony and Cleopatra in the East.",
  ["Agrippa blockaded Antony's fleet in the gulf for months. Hunger and disease weakened the crews.",
   "Antony tried to break the blockade with big, heavy ships against Agrippa's light ships.",
   "In the middle of the fight, Cleopatra slipped away with 60 ships and the treasure. Antony went after her and abandoned the fleet."],
  "Antony's fleet and army surrendered. He and Cleopatra killed themselves the following year.",
  "Octavian became Augustus, the first emperor. It ended the Roman Republic and the Egypt of the pharaohs.");

add("pontemilvia", "Milvian Bridge", 312, "28 October AD 312", "antiga", "Rome, Italy", 41.935, 12.467,
  ["Constantine", "Constantine I", "≈ 40,000", 40000], ["Maxentius", "Maxentius", "a larger number, uncertain", 60000], "a",
  "Two rival emperors were fighting over the Roman West. Maxentius held Rome, and Constantine came from Gaul.",
  ["According to tradition, Constantine had a vision before the battle: a sign in the sky and the words 'in this sign you shall conquer'. He had the Christian symbol painted on the shields.",
   "Maxentius came out of the walls and formed his army with its back to the Tiber River.",
   "Constantine's cavalry broke the line. In the rout, the improvised bridge of boats gave way, and Maxentius drowned."],
  "Constantine entered Rome as sole emperor of the West.",
  "The following year, the Edict of Milan granted freedom to Christians. Christianity began to become the religion of the empire.");

add("adrianopolis", "Adrianople", 378, "9 August AD 378", "antiga", "Edirne, present-day Turkey", 41.68, 26.56,
  ["Goths", "Fritigern", "≈ 15,000 to 20,000", 17500], ["Eastern Roman Empire", "Emperor Valens", "≈ 15,000 to 30,000", 22500], "a",
  "Fleeing the Huns, the Goths entered the empire as refugees. Mistreated and starving, they rebelled.",
  ["Valens did not want to wait for the reinforcements from the West, so as not to share the glory.",
   "The Romans marched for hours in the heat and attacked, exhausted, the circle of wagons of the Goths.",
   "The Gothic cavalry, which was out looking for food, returned and struck the Roman flank."],
  "Two thirds of the Roman army died, along with the emperor.",
  "Rome had to accept armed peoples inside its borders. The Western Empire fell less than a hundred years later.");

add("catalaunicos", "Catalaunian Plains", 451, "20 June AD 451", "antiga", "Champagne, France", 48.95, 4.36,
  ["Romans and Visigoths", "Aetius and Theodoric I", "tens of thousands (uncertain)", 50000], ["Huns and allies", "Attila", "tens of thousands (uncertain)", 50000], "a",
  "Attila, the 'Scourge of God', invaded Gaul. The Roman general Aetius gathered old enemies of Rome to face him.",
  ["The fighting began over possession of a hill in the middle of the field, which the allies took first.",
   "The Visigothic king Theodoric died in the fighting, but his warriors attacked with even more fury.",
   "Attila fell back to his camp and had a pyre of saddles built to burn himself on if he was defeated."],
  "Attila withdrew from Gaul.",
  "It was one of the last victories of the Western Roman Empire. Attila died two years later, and his empire fell apart.");

// ---------- Middle Ages ----------
add("yarmuk", "Yarmouk", 636, "August 636", "medieval", "Yarmouk River, border between Syria and Jordan", 32.81, 35.95,
  ["Rashidun Caliphate", "Khalid ibn al-Walid", "≈ 20,000 to 40,000", 30000], ["Byzantine Empire", "Vahan", "≈ 40,000 to 100,000 (sources differ)", 70000], "a",
  "A few years after the death of Muhammad, Arab armies entered Byzantine Syria.",
  ["For five days the Byzantines attacked, and the Arab line gave way and came back several times.",
   "Khalid gathered all the cavalry into a mobile reserve, which plugged every hole in the line.",
   "On the sixth day he counterattacked, seized the only bridge over the gorge and left the Byzantine army with no way out."],
  "The Byzantine army was destroyed.",
  "Syria and Palestine passed under Arab rule. Khalid ibn al-Walid never lost a battle.");

add("guadalete", "Guadalete", 711, "July 711", "medieval", "Andalusia, Spain", 36.6, -6.0,
  ["Umayyad Caliphate", "Tariq ibn Ziyad", "≈ 7,000 to 12,000", 10000], ["Visigothic Kingdom", "King Roderic", "≈ 25,000 (uncertain)", 25000], "a",
  "Tariq crossed the strait from Africa. The rock where he landed took his name: Jabal Tariq, Gibraltar.",
  ["The Visigothic kingdom was divided by a dispute over the throne.",
   "In the middle of the battle, the wings commanded by rivals of King Roderic abandoned him.",
   "The Visigothic center was surrounded. Roderic disappeared, and his body was never found."],
  "The Visigothic kingdom collapsed within a few years.",
  "Almost 800 years of Muslim presence on the Iberian Peninsula began. Portuguese keeps hundreds of Arabic words from that time.");

add("tours", "Tours (Poitiers)", 732, "October 732", "medieval", "Between Tours and Poitiers, France", 46.74, 0.48,
  ["Franks", "Charles Martel", "≈ 15,000 to 20,000", 17500], ["Umayyad Caliphate", "Abd al-Rahman al-Ghafiqi", "≈ 15,000 to 20,000", 17500], "a",
  "An army coming from Muslim Spain advanced through France toward the rich abbey of Tours.",
  ["Charles put his infantry on high, wooded ground, formed in a square, and waited.",
   "The Umayyad cavalry attacked several times, without managing to break the shield wall.",
   "Word spread that the Franks were attacking the camp with the loot. Part of the cavalry turned back, and Abd al-Rahman died trying to hold the troops together."],
  "The Umayyad army withdrew during the night.",
  "Charles earned the nickname 'Martel', the hammer. His grandson was Charlemagne.");

add("talas", "Talas", 751, "July 751", "medieval", "Talas River, between Kazakhstan and Kyrgyzstan", 42.52, 72.23,
  ["Abbasid Caliphate", "Ziyad ibn Salih", "tens of thousands (sources differ)", 30000], ["Tang dynasty China", "Gao Xianzhi", "tens of thousands (sources differ)", 30000], "a",
  "The two greatest empires of the time, the Arab and the Chinese, met in the middle of Central Asia.",
  ["The battle lasted five days, with no clear advantage.",
   "The Karluks, Turkic allies of the Chinese, changed sides and attacked the Tang army from behind.",
   "Gao Xianzhi escaped with a few thousand men."],
  "Abbasid victory. Chinese expansion to the west stopped there.",
  "Central Asia became Muslim. According to tradition, Chinese prisoners taught papermaking in Samarkand, and from there the technique reached Europe.");

add("lechfeld", "Lechfeld", 955, "10 August 955", "medieval", "Augsburg, Germany", 48.37, 10.9,
  ["German Kingdom", "Otto I", "≈ 8,000 heavy horsemen", 8000], ["Magyars", "Bulcsú and Lél", "≈ 8,000 to 10,000 horse archers", 9000], "a",
  "For more than 50 years, Magyar horsemen had been plundering Europe, from Germany to Spain.",
  ["The Magyars were besieging Augsburg when Otto arrived with knights from all the German duchies.",
   "A Magyar group attacked the rear and stopped to plunder the baggage. It was destroyed.",
   "Otto advanced with the heavy cavalry and kept formation, without falling for the feigned retreats."],
  "The Magyar army was destroyed in the battle and in the pursuit.",
  "The Magyars settled, became Christians and founded Hungary. Otto was crowned emperor in 962.");

add("manzikert", "Manzikert", 1071, "26 August 1071", "medieval", "Malazgirt, present-day Turkey", 39.146, 42.54,
  ["Seljuk Empire", "Alp Arslan", "≈ 20,000 to 30,000", 25000], ["Byzantine Empire", "Romanos IV Diogenes", "≈ 40,000 (half absent)", 40000], "a",
  "The Seljuk Turks were raiding Anatolia, the heart of the Byzantine Empire. The emperor went to face them.",
  ["Romanos divided his army, and half of it never appeared in the battle.",
   "The Turkish horse archers fell back all day, wearing out the Byzantines.",
   "At the moment of retreat, a general who was a rival of the emperor took the reserve away. The Turks surrounded the center."],
  "The emperor was captured. He was treated with respect and released.",
  "Anatolia opened up to the Turks and became the future Turkey. The Byzantine call for help led to the Crusades.");

add("jerusalem1099", "Siege of Jerusalem", 1099, "7 June to 15 July 1099", "medieval", "Jerusalem", 31.777, 35.23,
  ["Crusaders", "Godfrey of Bouillon and Raymond of Toulouse", "≈ 12,000", 12000], ["Fatimid Caliphate", "Iftikhar al-Dawla", "a few thousand", 5000], "a",
  "After a three-year march from Europe, the First Crusade reached its destination.",
  ["The Crusaders arrived with no food, no water and no timber for siege engines.",
   "Genoese ships brought timber, and they built two assault towers.",
   "The night before, they moved one tower to a weak stretch of the wall. Godfrey's men crossed onto the rampart."],
  "The city fell, and the Muslim and Jewish population was massacred.",
  "The Kingdom of Jerusalem was born, and lasted 88 years, until Saladin.");

add("hattin", "Hattin", 1187, "4 July 1187", "medieval", "Galilee, present-day Israel", 32.8, 35.44,
  ["Ayyubid Sultanate", "Saladin", "≈ 30,000", 30000], ["Kingdom of Jerusalem", "Guy of Lusignan", "≈ 20,000", 20000], "a",
  "Saladin had united Egypt and Syria and besieged the city of Tiberias to lure out the Crusader army.",
  ["The Crusaders marched in the height of summer across a plain with no water.",
   "Saladin's men harassed the column all day and, at night, set fire to the dry grass.",
   "In the morning, thirsty and choking on smoke, the Crusaders were surrounded on a two-peaked hill."],
  "Almost the entire Crusader army was killed or captured, and the relic of the True Cross was taken.",
  "Jerusalem surrendered to Saladin three months later. Europe answered with the Third Crusade, of Richard the Lionheart.");

add("dannoura", "Dan-no-ura", 1185, "25 April 1185", "medieval", "Shimonoseki Strait, Japan", 33.96, 130.95,
  ["Minamoto clan", "Minamoto no Yoshitsune", "≈ 800 boats", 800], ["Taira clan", "Taira no Tomomori", "≈ 500 boats", 500], "a",
  "It was the final battle of the war between the two great samurai clans of Japan.",
  ["The Taira knew the currents of the strait and began by winning.",
   "In the middle of the day the tide turned and began to push the Taira boats. A Taira general changed sides.",
   "The Minamoto archers aimed at the rowers and helmsmen, and the boats were left adrift."],
  "The child emperor Antoku, six years old, drowned in his grandmother's arms. Many Taira threw themselves into the sea.",
  "The Minamoto created the first shogunate. The samurai governed Japan for almost 700 years.");

add("navas", "Las Navas de Tolosa", 1212, "16 July 1212", "medieval", "Jaén, Spain", 38.28, -3.58,
  ["Iberian Christian kingdoms", "Alfonso VIII of Castile, Peter II of Aragon, Sancho VII of Navarre", "≈ 12,000 to 14,000", 13000], ["Almohad Caliphate", "Muhammad al-Nasir", "≈ 22,000 to 30,000", 26000], "a",
  "The Almohads dominated the south of the Peninsula. The Christian kings, who were always fighting among themselves, united in a crusade.",
  ["The Almohads blocked the pass. According to tradition, a shepherd showed the Christians a hidden path through the mountains.",
   "The first Christian line almost gave way. Alfonso VIII entered the fight with the whole reserve.",
   "Sancho of Navarre reached the caliph's tent, guarded by men chained to one another."],
  "The caliph fled, and the Almohad army fell apart.",
  "It was the turning point of the Reconquista. The chains of the tent are still on the coat of arms of Navarre today.");

add("kirina", "Kirina", 1235, "c. 1235", "medieval", "Koulikoro region, Mali", 12.3, -8.15,
  ["Mandinka peoples", "Sundiata Keita", "unknown", 0], ["Sosso Kingdom", "Sumanguru Kanté", "unknown", 0], "a",
  "The blacksmith-king Sumanguru dominated the Mandinka peoples. Sundiata, an exiled prince, returned to free them.",
  ["What we know comes from the oral tradition of the griots, the storytellers of West Africa.",
   "Sundiata united twelve Mandinka kingdoms against the Sosso.",
   "According to the epic, Sumanguru was protected by magic and could only be wounded by an arrow tipped with the spur of a white rooster."],
  "Sumanguru was defeated and disappeared into the mountains.",
  "The Mali Empire was born, one of the richest in history. Mansa Musa, Sundiata's grand-nephew, is cited as the richest man of all time.");

add("mohi", "Mohi", 1241, "11 April 1241", "medieval", "Sajó River, Hungary", 47.98, 20.91,
  ["Mongol Empire", "Batu Khan and Subutai", "≈ 30,000 (uncertain)", 30000], ["Kingdom of Hungary", "King Béla IV", "≈ 25,000 to 50,000 (uncertain)", 35000], "a",
  "The Mongols invaded Europe in several columns at the same time. Two days earlier, another column had beaten the Poles at Legnica.",
  ["Batu attacked the river bridge with catapults, which held the Hungarians' attention.",
   "During the night, Subutai crossed the river farther downstream and appeared in the rear.",
   "The Mongols surrounded the camp, but deliberately left one exit open. Those who fled through it were hunted for days."],
  "The Hungarian army was destroyed, and the country was devastated.",
  "Europe lay open, but in 1242 the Mongols went home after the death of the great khan Ogedei.");

add("peipus", "Lake Peipus", 1242, "5 April 1242", "medieval", "Border between Estonia and Russia", 58.68, 27.48,
  ["Republic of Novgorod", "Alexander Nevsky", "≈ 5,000", 5000], ["Livonian Order (Teutonic knights)", "Hermann of Dorpat", "≈ 2,600", 2600], "a",
  "German crusader knights were advancing on Russian lands, which were already suffering under the Mongols.",
  ["Alexander waited for the knights on the shore of the frozen lake.",
   "The knights attacked in a wedge and pierced the Russian center.",
   "The Russian wings closed over the wedge, and the cavalry attacked from behind."],
  "The knights fled across the ice.",
  "The crusade in the east stopped there. The scene of the ice breaking became famous in Eisenstein's 1938 film, but it is probably legend.");

add("bagda", "Siege of Baghdad", 1258, "29 January to 10 February 1258", "medieval", "Baghdad, Iraq", 33.34, 44.4,
  ["Mongol Empire", "Hulagu Khan", "≈ 120,000 to 150,000", 135000], ["Abbasid Caliphate", "Caliph al-Musta'sim", "≈ 50,000", 50000], "a",
  "Baghdad had been the capital of the Islamic world for 500 years, and one of the largest cities on the planet.",
  ["The caliph refused to submit and did not prepare the defense.",
   "The Mongols broke dikes to flood the army that came out of the city, and then surrounded the walls with palisades and catapults.",
   "In less than two weeks the eastern wall fell, and the city surrendered."],
  "Baghdad was plundered for a week, and the caliph was executed.",
  "The House of Wisdom and its libraries were destroyed. Tradition says the Tigris ran black with the ink of the books.");

add("hakata", "Hakata Bay", 1281, "June to August 1281", "medieval", "Kyushu, Japan", 33.62, 130.35,
  ["Japan (Kamakura shogunate)", "Hojo Tokimune", "number unknown", 0], ["Mongol Empire (Yuan dynasty)", "Kublai Khan", "≈ 140,000 in 3,500 to 4,400 ships (according to the sources)", 140000], "a",
  "Kublai Khan had already tried to invade Japan in 1274. He came back seven years later with one of the largest fleets in history.",
  ["The Japanese had built a 20 km stone wall along the bay.",
   "Unable to land, the fleet stayed anchored for weeks, attacked at night by small boats of samurai.",
   "In August, a typhoon struck the ships, which were tied to one another."],
  "Most of the fleet sank.",
  "The Japanese called the typhoon 'kamikaze', divine wind. Japan was never conquered by the Mongols.");

add("bannockburn", "Bannockburn", 1314, "23 and 24 June 1314", "medieval", "Stirling, Scotland", 56.093, -3.937,
  ["Kingdom of Scotland", "Robert the Bruce", "≈ 6,000 to 7,000", 6500], ["Kingdom of England", "Edward II", "≈ 20,000 to 25,000", 22500], "a",
  "The English marched to relieve Stirling Castle, besieged by the Scots.",
  ["On the first day, an English knight charged Bruce alone. Bruce sidestepped and killed him with a blow of his axe, in front of both armies.",
   "The Scots fought in 'schiltrons', closed blocks of spearmen that looked like hedgehogs.",
   "The English cavalry was squeezed between streams and bogs, with no room to attack."],
  "Edward II fled the field, and his army fell apart.",
  "England recognized the independence of Scotland in 1328.");

add("crecy", "Crécy", 1346, "26 August 1346", "medieval", "Northern France", 50.257, 1.887,
  ["Kingdom of England", "Edward III", "≈ 12,000 to 14,000", 13000], ["Kingdom of France", "Philip VI", "≈ 20,000 to 30,000", 25000], "a",
  "It was the first great land battle of the Hundred Years' War.",
  ["The English occupied the top of a hill, with the knights on foot and the archers on the ends.",
   "The Genoese crossbowmen, in French service, shot first, but the English longbow reached farther and was much faster.",
   "The French knights charged uphill about fifteen times, riding over their own crossbowmen."],
  "Thousands of Frenchmen died, among them a large part of the nobility.",
  "Commoner archers defeated the noble cavalry. The English crown prince, the Black Prince, fought there at the age of 16.");

add("kulikovo", "Kulikovo", 1380, "8 September 1380", "medieval", "Don River, Russia", 53.65, 38.65,
  ["Russian principalities", "Dmitry of Moscow", "6,000 to 36,000 (modern estimates)", 21000], ["Golden Horde", "Mamai", "up to 30,000 (modern estimates)", 25000], "a",
  "The Russian principalities had been paying tribute to the Mongols for 140 years. Dmitry of Moscow stopped paying.",
  ["Dmitry crossed the Don and had the bridges destroyed, so that no one could retreat.",
   "The Horde's cavalry kept pushing the Russian left wing back.",
   "A Russian regiment was hidden in a wood. It came out at the right moment and attacked the Mongols from behind."],
  "Mamai fled. Dmitry earned the name 'Donskoy', of the Don.",
  "Mongol rule lasted another hundred years, but Moscow became the leader of the Russian lands.");

add("aljubarrota", "Aljubarrota", 1385, "14 August 1385", "medieval", "Central Portugal", 39.64, -8.84,
  ["Kingdom of Portugal", "King John I and Nuno Álvares Pereira", "≈ 6,500", 6500], ["Kingdom of Castile", "John I of Castile", "≈ 30,000", 30000], "a",
  "The king of Portugal died without a male heir, and the king of Castile claimed the throne. The Portuguese acclaimed John, Master of Aviz.",
  ["Nuno Álvares chose a narrow hill, protected by streams on the sides.",
   "The Portuguese dug ditches and hidden pits in front of the position, with English archers on the wings.",
   "The Castilian cavalry attacked through the tight front, fell into the traps and piled up."],
  "The Castilian army fled after less than an hour of main fighting.",
  "Portugal secured its independence. The House of Aviz launched the voyages that reached Brazil.");

add("kosovo", "Kosovo", 1389, "15 June 1389", "medieval", "Field of Blackbirds, Kosovo", 42.69, 21.12,
  ["Ottoman Empire", "Sultan Murad I", "≈ 27,000 to 40,000", 33000], ["Principality of Serbia and allies", "Prince Lazar", "≈ 12,000 to 30,000", 21000], "",
  "The Ottomans were advancing through the Balkans. The Serbs and their neighbors tried to stop them.",
  ["The Serbian heavy cavalry broke the Ottoman left wing.",
   "The Ottomans counterattacked on the other side, commanded by Bayezid, the sultan's son.",
   "Sultan Murad was killed, according to tradition by a Serbian knight, Miloš Obilić, who pretended to defect. Prince Lazar was captured and executed."],
  "Both leaders died and both armies came out shattered. But the Serbs had no way to replace their losses.",
  "Serbia became a vassal of the Ottomans. The battle is the center of Serbian national memory to this day.");

add("ankara", "Ankara", 1402, "20 or 28 July 1402", "medieval", "Ankara, Turkey", 40.07, 32.95,
  ["Timurid Empire", "Tamerlane (Timur)", "≈ 140,000", 140000], ["Ottoman Empire", "Sultan Bayezid I", "≈ 85,000", 85000], "a",
  "Two Turkic conquerors faced each other: Bayezid, the 'Thunderbolt', and Tamerlane, who had already taken everything from India to Syria.",
  ["Tamerlane went around the Ottoman army and occupied its position, with the water.",
   "The Ottomans arrived exhausted and thirsty, after marching in the July heat.",
   "During the battle, Bayezid's Tatar horsemen went over to Tamerlane's side."],
  "Bayezid was captured and died in captivity.",
  "The Ottoman Empire plunged into eleven years of civil war. Constantinople gained half a century of survival.");

add("grunwald", "Grunwald", 1410, "15 July 1410", "medieval", "Northern Poland", 53.483, 20.094,
  ["Poland and Lithuania", "Władysław II Jagiełło and Vytautas", "16,000 to 39,000 (estimates)", 27500], ["Teutonic Order", "Ulrich von Jungingen", "11,000 to 27,000 (estimates)", 19000], "a",
  "The Teutonic Knights, an order of warrior monks, dominated the Baltic. Poland and Lithuania united against them.",
  ["The grand master sent two swords as a gift to the Polish king, as a provocation to start at once.",
   "The Lithuanian cavalry fell back. Part of the Teutonic knights went after it and left the formation.",
   "The Lithuanians returned. The grand master attacked with the reserve and died surrounded."],
  "Almost the whole leadership of the Order was killed.",
  "One of the largest battles of medieval Europe. The Teutonic Order never recovered its power.");

add("orleans", "Siege of Orléans", 1429, "October 1428 to 8 May 1429", "medieval", "Orléans, France", 47.9, 1.91,
  ["Kingdom of France", "Joan of Arc and Jean de Dunois", "≈ 6,400 soldiers and the townspeople", 6400], ["Kingdom of England", "Earl of Suffolk and John Talbot", "≈ 5,000", 5000], "a",
  "France was losing the Hundred Years' War. Orléans was the last barrier before the south.",
  ["After six months of siege, a 17-year-old peasant girl arrived, who said she heard the voices of saints.",
   "Joan convinced the captains to attack the English forts one by one, instead of only defending.",
   "In the assault on the main fort, she took an arrow in the shoulder and returned to the fight the same day."],
  "The siege was broken nine days after Joan's arrival.",
  "Two months later, Charles VII was crowned at Reims. Joan was burned by the English in 1431, and France won the war in 1453.");

add("constantinopla", "Fall of Constantinople", 1453, "6 April to 29 May 1453", "medieval", "Istanbul, Turkey", 41.013, 28.95,
  ["Ottoman Empire", "Sultan Mehmed II", "≈ 80,000", 80000], ["Byzantine Empire", "Constantine XI", "≈ 7,000", 7000], "a",
  "Little was left of the Eastern Roman Empire beyond the capital, protected by the most famous walls in the world.",
  ["Mehmed, aged 21, brought giant cannon, which pounded the walls for weeks.",
   "A chain closed the harbor. The Ottomans dragged about 70 ships overland, over greased logs, and launched them into the water behind it.",
   "In the final assault, the Genoese commander of the defense was wounded, and the Janissaries entered through a breach."],
  "The city fell. The last emperor died fighting on the walls.",
  "The Roman Empire ended, after almost 1,500 years. Many historians mark the end of the Middle Ages there.");

add("granada", "Capture of Granada", 1492, "April 1491 to 2 January 1492", "medieval", "Granada, Spain", 37.177, -3.588,
  ["Castile and Aragon", "Ferdinand and Isabella", "≈ 50,000 to 80,000", 65000], ["Emirate of Granada", "Boabdil (Muhammad XII)", "garrison and townspeople (number unknown)", 0], "a",
  "Granada was the last Muslim kingdom on the Iberian Peninsula.",
  ["The Catholic Monarchs besieged the city to defeat it by hunger.",
   "When the camp caught fire, they rebuilt it in stone, as a whole city, Santa Fe, to show that they were not going away.",
   "With no hope of relief, Boabdil negotiated the surrender."],
  "Boabdil handed over the keys of the Alhambra on 2 January 1492.",
  "It was the end of the Reconquista, after 780 years. In the same camp, months later, Queen Isabella approved Columbus' voyage.");
