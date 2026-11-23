// Great-battles pack: Raphia (217 BC), Cynoscephalae (197 BC), Magnesia (190 BC), Arausio (105 BC), Aquae Sextiae (102 BC).
// Uses add() from battles2.js. Ancient and chronicle numbers are flagged as such; where sources disagree, the card says so.
// The Wikidata seeds for these battles (battles_wd.js) only show up with ?todas; these cards are the written versions.

// ---------- Hellenistic wars ----------
add("rafia", "Raphia", -217, "22 June 217 BC", "antiga", "Rafah, between Egypt and Palestine", 31.29, 34.25,
  ["Ptolemaic Egypt", "Ptolemy IV, with his sister and wife Arsinoe III", "≈ 70,000 foot, 5,000 horse and 73 elephants (according to Polybius)", 75000], ["Seleucid Empire", "Antiochus III the Great", "≈ 62,000 foot, 6,000 horse and 102 elephants (according to Polybius)", 68000], "a",
  "Egypt and the Seleucid Empire were fighting over Coele-Syria, the region between Egypt and Syria. Antiochus III invaded it, and Egypt raised a huge army to answer.",
  ["Antiochus's Indian elephants, bigger, scared most of Ptolemy's African elephants, which fled back into their own line. Antiochus, on the right wing, beat the cavalry opposite him.",
   "At the other end, the Ptolemaic cavalry beat Antiochus's. In the centre, the two phalanxes were still intact, until Ptolemy appeared in front of his own and ordered it forward.",
   "Antiochus was chasing the enemy and only noticed that his centre had fallen when it was too late. He came back with his guard and found his army in flight."],
  "Ptolemaic victory. According to Polybius, the Seleucids lost almost 10,000 foot and more than 4,000 were captured. The Ptolemies lost about 1,500 foot and 700 horse.",
  "It was the first great battle in which Egypt put thousands of native Egyptians in the phalanx. Soon afterwards part of the country rebelled. In 200 BC, Antiochus took Coele-Syria back.");

add("cinoscefalos", "Cynoscephalae", -197, "June 197 BC", "antiga", "Cynoscephalae Hills, Thessaly, Greece", 39.42, 22.57,
  ["Rome and her Aetolian allies", "Titus Quinctius Flamininus", "≈ 26,000 (according to ancient sources)", 26000], ["Kingdom of Macedon", "Philip V", "≈ 25,500 (according to ancient sources)", 25500], "a",
  "Rome had declared war on Philip V of Macedon in 200 BC. In 197, the two armies were marching through Thessaly, on either side of a range of hills.",
  ["A storm and a fog made the armies lose their way. The light troops bumped into each other on top of the hills, and each side fed in reinforcements bit by bit.",
   "Philip sent his phalanx on the right downhill against the Romans and pushed them back. But the Macedonian left, under Nicanor, was still climbing the hill in column when the elephants and Flamininus's right wing attacked it.",
   "A Roman tribune, whose name is not known, took about 20 maniples into the rear of Philip's phalanx, which could not turn around."],
  "Roman victory. Polybius and Livy speak of about 8,000 Macedonians killed and 5,000 captured, against 700 Romans killed.",
  "Philip lost the territories outside Macedon and had to pay an indemnity. In 196 BC, Flamininus announced the freedom of the Greek cities. The battle is remembered as the duel between the legion and the phalanx.");

add("magnesia", "Magnesia", -190, "December 190 or January 189 BC (date uncertain)", "antiga", "Near Magnesia ad Sipylum, today's Manisa, Turkey", 38.61, 27.43,
  ["Rome and Pergamon", "Lucius Cornelius Scipio and Eumenes II of Pergamon", "≈ 30,000 and 16 elephants (according to Livy and Appian; modern historians say 30,000 to 50,000)", 30000], ["Seleucid Empire", "Antiochus III the Great", "≈ 72,000 and 54 elephants (according to Livy and Appian; modern historians say 50,000 to 72,000)", 60000], "a",
  "Antiochus III had entered Greece and lost at Thermopylae in 191 BC. Rome crossed into Asia and went after him, together with Eumenes II, king of Pergamon.",
  ["Eumenes sent archers and slingers against Antiochus's scythed chariots. The chariots fell back in panic, and the Roman and Pergamene cavalry broke the Seleucid left wing.",
   "At the other end, Antiochus beat the Roman infantry on the left, which took refuge in its camp. But his cavalry got stuck there and did not return in time.",
   "The phalanx stood still in the centre, under arrows and stones. The elephants panicked and broke up the formation, and the phalangites threw down their weapons."],
  "Roman victory. Livy speaks of 53,000 Seleucids killed and 349 Romans; modern historians estimate about 10,000 Seleucid dead.",
  "In 188 BC, the peace of Apamea forced Antiochus to leave Asia Minor west of the Taurus mountains and to pay a heavy indemnity. The Seleucid kingdom stopped carrying weight in the affairs of Asia Minor and the Aegean.");

// ---------- Rome against the northern peoples ----------
add("arausio", "Arausio", -105, "6 October 105 BC", "antiga", "Between Orange and the Rhône river, southern France", 44.14, 4.81,
  ["Cimbri and allies (the Teutones, according to some sources)", "Boiorix and other chiefs", "unknown number", 0], ["Roman Republic", "Gnaeus Mallius Maximus (consul) and Quintus Servilius Caepio (proconsul)", "≈ 80,000 soldiers and 40,000 camp followers (numbers from Valerius Antias, quoted by Livy; treated with caution)", 80000], "a",
  "The Cimbri had left northern Europe with their families and had already beaten other Roman armies. Rome sent two armies to Gaul, under commanders who could not stand each other.",
  ["Mallius, the consul, was supposed to command everything, but Caepio, a proconsul from a noble family, refused to obey a man with no illustrious ancestors. The two camped apart, each with his own army.",
   "According to a common reconstruction, Caepio attacked on his own, the Cimbri resisted and took his camp, which was almost undefended.",
   "Then the Cimbri attacked Mallius, whose camp had the river at its back. Few Romans escaped, and the camp followers were killed too."],
  "One of the greatest Roman defeats. If the ancient numbers are true, it was worse in dead than Cannae. Caepio escaped unhurt.",
  "Rome panicked, and the people elected Marius consul several times in a row. Caepio and Mallius were convicted and exiled because of the defeat.");

add("aquaesextiae", "Aquae Sextiae", -102, "102 BC (exact day unknown)", "antiga", "Near Aix-en-Provence, southern France (exact site uncertain)", 43.53, 5.45,
  ["Roman Republic", "Gaius Marius", "≈ 32,000 to 40,000 (six legions and auxiliaries)", 36000], ["Teutones and Ambrones", "Teutobod, king of the Teutones", "number uncertain (estimates cited: 100,000 to 200,000 warriors)", 0], "a",
  "After Arausio, the Teutones and the Ambrones marched for Italy through southern Gaul. In their way stood Marius, who had trained an army for two years.",
  ["Marius shut his army in a fortified camp and would not come out, not even for insults and a challenge to a duel. The Teutones marched past, and he followed at some distance.",
   "Near Aquae Sextiae, Marius's Ligurian auxiliaries went to help the servants who were fetching water and started a brawl with the Ambrones. Marius sent in the legions, which beat the Ambrones at the riverside.",
   "Days later, the Teutones attacked uphill, against the legionaries. While the fight dragged on, some 3,000 men under Claudius Marcellus, hidden beforehand, came out of the woods and hit them from behind."],
  "Roman victory. Modern estimates speak of 100,000 to 120,000 Germanic dead and captured; Roman losses are unknown.",
  "The next year, Marius and Catulus beat the Cimbri at Vercellae, which ended the threat. Marius was re-elected consul, and the survivors were sold as slaves.");
