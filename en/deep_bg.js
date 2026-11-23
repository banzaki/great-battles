// In-depth battles, batch bg: rafia, cinoscefalos, magnesia, arausio, aquaesextiae (great-battles pack).
// Checked against the English and Portuguese Wikipedia articles on Raphia, Cynoscephalae, Magnesia, Arausio and
// Aquae Sextiae, the articles on Mallius Maximus and Caepio, Polybius Book 5 (Raphia: forces, deployment, casualties),
// and the works those pages cite (Livy, Appian, Plutarch, Florus, Orosius; Duncan 2017; Evans 2005). Where sources
// disagree the text says so.
// No Arausio diagram: the sources give the camps and the order of the attacks, but not the deployments.

Object.assign(GLOSSARY, {
  "selêucidas": "The dynasty and empire founded by Seleucus, a general of Alexander. At its height the empire stretched from Asia Minor to Central Asia, and its kings spoke Greek and ruled dozens of peoples.",
  "dinastia ptolomaica": "The Greek family founded by Ptolemy, a general of Alexander, which ruled Egypt from 305 to 30 BC. Cleopatra was the last. The kings were pharaohs to the Egyptians and Macedonian kings to the Greeks.",
  "celessíria": "The Greek name (Coele-Syria, 'Hollow Syria') for the region that today covers Lebanon, southern Syria, Israel and Palestine. The Ptolemies and the Seleucids fought over it for more than a century.",
  "argiráspides": "'Silver Shields': elite Macedonian infantry, armed like the phalanx. In the Hellenistic armies, it was the most prestigious foot troop.",
  "agema": "The royal guard of the Hellenistic kings, an elite troop that stayed beside the king, on foot or on horseback.",
  "falange egípcia": "A troop of native Egyptians, trained and armed in the Macedonian way for the campaign of 217 BC, because Ptolemy IV had few Macedonians and mercenaries. There were about 20,000 of them.",
  "liga etólia": "A confederation of cities in central Greece, famous for its cavalry and its taste for plunder. It was an ally of Rome against Macedon, but spent its time complaining that Rome did not give it enough.",
  "antigônidas": "The dynasty that ruled Macedon from 276 to 168 BC, founded by a grandson of Antigonus, a general of Alexander. Philip V was its fifth king.",
  "jogos ístmicos": "A pan-Hellenic sports festival held near Corinth every two years. In 196 BC, in front of a crowd of Greeks, Flamininus announced the freedom of the cities there.",
  "galácios": "Gauls (Celts) who migrated to Asia Minor in the 3rd century BC and settled in the middle of it. They served as mercenaries and raided their neighbours.",
  "arqueiros em camelos": "Arabs mounted on camels who shot arrows. Antiochus put them at the front of his left wing, behind the scythed chariots.",
  "tratado de apameia": "The peace of 188 BC between Rome and Antiochus III. Antiochus left Asia Minor west of the Taurus mountains, handed over almost his whole fleet and paid a heavy indemnity.",
  "cimbros": "A people that left northern Europe around 120 to 115 BC, with families and wagons, looking for land. Ancient sources call them Germans or Gauls, and historians argue about whom they were related to.",
  "teutões": "A people that joined the Cimbri on the migration. Their king, Teutobod, was captured after Aquae Sextiae.",
  "procônsul": "Someone who, after a year as consul, kept on commanding an army and governing a province. He had less authority than the consul in office.",
  "homem novo": "In Rome, a 'novus homo': the first in his family to reach the consulship. The old nobility treated him with contempt.",
  "legado romano": "A trusted officer of the general or the Senate, who commanded part of the army or a special mission.",
  "ouro de tolosa": "The treasure found in Tolosa (Toulouse) when Caepio took the city in 106 BC. The silver reached Rome, but the gold vanished on the way, and Caepio was accused of stealing it.",
  "tribuno da plebe": "A Roman magistrate elected to defend the people against the nobles. He could call the people to vote on laws and to judge the accused.",
  "interdição de água e fogo": "A Roman penalty of exile: nobody could give the convict shelter, food or fire, and he could only live far from the city.",
  "reformas de mário": "Changes in the Roman army attributed to Marius, such as recruiting citizens without property and equipping everyone the same way. Historians argue about whether they were made all at once or little by little.",
  "ambrões": "A people that marched with the Teutones. According to Plutarch, 'Ambrones!' was also the war cry of some Ligurians, and that confused everyone in the first skirmish.",
  "lígures": "A people of north-western Italy and southern Gaul. Many fought as auxiliaries of the Romans.",
  "calones": "Servants and attendants who went with the Roman army to look after mules, baggage and water. They were not soldiers.",
  "massália": "Today's Marseille, a Greek city founded on the coast of southern Gaul and an ally of Rome."
});

Object.assign(DEEP, {
  rafia: {
    war: "Fourth Syrian War (219–217 BC)",
    hook: "Two armies with 175 elephants, and a king who won his wing and lost the battle.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Alexander died, his generals divided the empire. Asia went to the [[Seleucids|selêucidas]], and Egypt to the [[Ptolemaic dynasty|dinastia ptolomaica]]. Between the two kingdoms lay [[Coele-Syria|celessíria]], a rich strip of land linking Egypt to Syria. The Ptolemies held it, the Seleucids wanted it, and the two families had fought over it in several wars.",
        "In 223 BC, Antiochus III came to the Seleucid throne, still young. In 221 BC, Ptolemy IV, called Philopator, took over Egypt. Polybius, the main source for the period, describes him as a king who liked feasts more than politics, and who left the government to ministers such as Sosibius and Agathocles. Antiochus saw his chance and invaded Coele-Syria in 219 BC.",
        { h: "The road to Raphia" },
        { timeline: [
          ["223 BC", "Antiochus III comes to the Seleucid throne."],
          ["221 BC", "Ptolemy IV comes to the throne of Egypt."],
          ["219 BC", "Antiochus invades Coele-Syria and the Fourth Syrian War begins."],
          ["218–217 BC", "Ptolemy's ministers keep Antiochus busy with negotiations and, meanwhile, raise a new army, with thousands of Egyptians in the phalanx."],
          ["22 Jun 217 BC", "The two forces meet near Raphia."],
          ["Nov 217 BC", "A decree of Egyptian priests, at Memphis, celebrates Ptolemy's victory."]
        ]},
        "Egypt had few Macedonian soldiers and mercenaries. So, according to Polybius, the ministers did something that was not the custom: they armed and trained about 20,000 native Egyptians in the Macedonian way. It was a high-stakes bet, and that troop would be at Raphia."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ptolemy IV Philopator" },
        "King of Egypt since 221 BC. The ones who fought for him were his ministers and generals. Sosibius negotiated and organised the army, and Andromachus and Sosibius commanded the phalanx during the battle. Polybius says that Ptolemy and his sister and wife, Arsinoe III, went along the ranks encouraging the troops before the fight. Ptolemy fought on the left wing, among the elephants.",
        { h: "Antiochus III the Great" },
        "Seleucid king, still young in 217 BC. He was brave and liked to lead the cavalry in person, and that decided the battle: he beat the wing he faced, but went far from the field, pursuing, and did not see the rest of his army collapse.",
        { h: "The other names" },
        "On Antiochus's side, Theodotus, an Aetolian who had served Egypt and changed sides, commanded the elite infantry. Nicarchus commanded the phalanx, with Theodotus Hemiolius, and Philip, the king's foster-brother, the elephants on the right. On the Egyptian side, Polycrates commanded the cavalry on the left, Echecrates the cavalry on the right, and Phoxidas the Greek mercenaries."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers come from Polybius. Ptolemy had about 70,000 foot, 5,000 horse and 73 African elephants. Antiochus had about 62,000 foot, 6,000 horse and 102 Indian elephants. Ptolemy's infantry included 25,000 Macedonians, the 20,000 [[Egyptian phalanx|falange egípcia]], the [[agema]] and peltasts, and Greek, Gallic, Thracian and Libyan mercenaries. Antiochus's included 10,000 [[Silver Shields|argiráspides]] under Theodotus, a phalanx of 20,000, 10,000 Arabs, Greek mercenaries and many archers and slingers.",
        { note: "The totals of Polybius and of modern historians do not match in every detail, and the Egyptian cavalry appears with numbers that do not add up to 5,000. We use Polybius's totals, the only detailed source, and remember that ancient numbers call for caution." },
        { h: "The ground and the days before" },
        "The field was a plain near Raphia, at the edge of the Sinai desert. Antiochus camped about 2 km from the enemy and later came to about 1 km. For five days there were skirmishes. One night, Theodotus entered the Ptolemaic camp and tried to kill Ptolemy in the tent he took to be the king's. The king was not there, and the blow failed.",
        { h: "The deployment" },
        "Both kings put the phalanx in the centre and the cavalry on the ends, with the light infantry and the elephants in front. Ptolemy stood on the left wing, with 40 elephants. On the right, Echecrates commanded the cavalry, with 33 elephants. Antiochus stood on his right wing, which faced Ptolemy's left, with 60 elephants and the cavalry of Antipater. The remaining 42 elephants stood in front of the left wing, under Myiscus.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, the two sides advanced. The elephants were the first to meet. Only a few of Ptolemy's elephants really fought head-on, and most left when they saw the Indian ones, which were bigger. Polybius says they could not stand the smell and the noise; historians even argue about whether they were the same species.",
        "Second, the fleeing African elephants fell on their own infantry. Ptolemy's guard gave way, and his line on the left came apart.",
        "Third, Antiochus went round the elephants with his cavalry and attacked Polycrates's. At the same time, Antiochus's Greek mercenaries, who stood beside the phalanx, attacked Ptolemy's peltasts. The Ptolemaic left was pushed back.",
        "Fourth, at the other end, Echecrates waited a little. Then he sent Phoxidas forward with the mercenaries and went round the enemy flank with the cavalry.",
        "Fifth, Antiochus's cavalry at that end was beaten. Phoxidas's soldiers made the Arabs and the Medes flee. Antiochus's left wing collapsed, while his right was winning.",
        "Sixth, the two phalanxes, in the centre, were intact and still. Ptolemy, who had withdrawn behind his own, appeared again in front of it. The phalanx, commanded by Andromachus and Sosibius, advanced. The picked soldiers on the Syrian side resisted for a short time.",
        "Seventh, the picked troops on Antiochus's side still held out a little, but Nicarchus's troops fled, and the Seleucid phalanx came apart.",
        "Eighth, Antiochus was still chasing the enemy on the right and only noticed that the centre was collapsing when he saw the cloud of dust moving toward his camp.",
        "Ninth, he tried to return with his mounted guard, but found the army in flight and could not rally it. He withdrew into Raphia."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "According to Polybius, Antiochus lost almost 10,000 foot and more than 300 horse, and more than 4,000 were captured. Three elephants died in the fight and two later, of wounds. Ptolemy lost about 1,500 foot, 700 horse and 16 elephants, and most of the other elephants were captured.",
        "Antiochus withdrew to Gaza and asked for a truce to bury the dead, and Ptolemy accepted. According to Polybius, the Egyptian king did not want to continue the campaign and made peace. Egypt kept Coele-Syria, for the time being.",
        { h: "What changed" },
        "The victory depended in part on the Egyptians whom Ptolemy had armed. Polybius says that, proud of what they had done, the Egyptians no longer accepted orders. Tradition links this to the revolt of Upper Egypt, which lasted from 207 to 186 BC. In Egypt, the Raphia Decree, of November 217 BC, written in Greek, hieroglyphic and demotic, celebrates the victory.",
        "In 200 BC, at the battle of Panium, Antiochus defeated the army of Ptolemy IV's son and took Coele-Syria back. The victory at Raphia had held the border for less than twenty years.",
        { note: "The elephants of Raphia started a quarrel among historians. Since Polybius says Ptolemy's were smaller, some proposed that they were forest elephants. A DNA study of 2013 suggested that they were African savanna elephants, perhaps from a smaller population that still lives in Eritrea." }
      ]}
    ]
  },

  cinoscefalos: {
    war: "Second Macedonian War (200–197 BC)",
    hook: "On a foggy day, a Roman officer with no name saw a gap and struck the blow the phalanx never expected.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The Macedon of Philip V was the heir of Alexander's kingdom, but much smaller. In 215 BC, in the middle of the war against Hannibal, Philip allied with Carthage. Rome answered by backing the [[Aetolian League|liga etólia]], and the First Macedonian War ended in a draw, in 205 BC. Rome did not forget.",
        "Around 202 BC, Philip allied with the Seleucid king to share out territories in Asia Minor, and attacked cities on the Sea of Marmara and in the Aegean. Rhodes and Pergamon, threatened, asked Rome for help, and the Senate and the people declared war in 200 BC. In 198 BC, the command passed to Titus Quinctius Flamininus, who demanded that Philip leave all of Greece. The negotiations ended.",
        { h: "The road to Cynoscephalae" },
        { timeline: [
          ["215–205 BC", "First Macedonian War: Philip against Rome and the Aetolian League, with no winner."],
          ["200 BC", "Rome declares war on Philip V."],
          ["198 BC", "Flamininus takes command in Greece."],
          ["Spring 197 BC", "The two armies enter Thessaly."],
          ["Jun 197 BC", "Battle of Cynoscephalae."],
          ["196 BC", "At the [[Isthmian Games|jogos ístmicos]], Flamininus proclaims the freedom of the Greek cities."]
        ]},
        "In the spring of 197 BC, Philip had lost almost everything outside Macedon and Thessaly. The two armies met near Pherae, but the ground there was no good for the phalanx. Philip marched for Scotussa, where there was grain. The Romans followed him on the other side of a range of low hills, the hills of Cynoscephalae, 'dogs' heads'."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Titus Quinctius Flamininus" },
        "Consul in 198 BC, still quite young, around 30. He was an admirer of Greek culture and a clever diplomat. He wanted to win the war and, afterwards, to appear as the liberator of the Greeks, which made victory in the field part of a bigger plan. In the battle, he personally commanded the left and ordered the right to attack at the right moment.",
        { h: "Philip V of Macedon" },
        "King since 221 BC, of the [[Antigonid|antigônidas]] dynasty. In 197 BC, he had a numerous but uneven phalanx: part of the soldiers were very young or very old, because of the shortage of men. The phalanx only worked well on level ground, and Philip ended up fighting on ground he had not chosen.",
        { h: "The other names" },
        "On the Roman side, Archedamus commanded the Aetolians and Amynander, king of Athamania, had 1,200 men. On the Macedonian side, Heracleides of Gyrton commanded the Thessalian cavalry, Athenagoras the mercenaries, and Nicanor, called the Elephant, the second corps of infantry. A Roman tribune decided the battle, and the source does not give his name."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to the ancient sources, the Roman and allied army had about 26,000 men: two full legions, 6,000 Aetolian infantry and 400 horse, 1,200 Athamanians and elephants from Numidia. Philip's had about 25,500: 16,000 phalangites, 2,000 [[peltasts|peltastas]], 4,000 Thracians and Trallians, 1,500 mercenaries and 2,000 Macedonian and Thessalian horse. The numbers come from Polybius and Livy.",
        { h: "The ground" },
        "A range of low hills in Thessaly, cut by valleys and uneven slopes. It was bad ground for the phalanx, which needed level ground to keep its ranks aligned, and good for the [[legion|legião]], split into small [[maniples|manípulo]] that arrange themselves more easily.",
        { h: "The day" },
        "It rained hard on the march, and the next morning a fog covered the hills. Philip, short of food, sent half of his heavy infantry to fetch supplies. Afraid of an ambush, he sent his light troops and half of his cavalry to occupy the hills. Flamininus, not knowing where Philip was, sent 1,000 light soldiers and 300 horsemen to scout. The two groups bumped into each other in the fog.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, the fight began hand to hand, not as an exchange of javelins, and the Romans, outnumbered, began to lose. They asked Flamininus for help, and he sent another 2,000 light soldiers and 500 horsemen. He only sent that many because the fog kept him from seeing how many the enemy were.",
        "Second, the reinforcements gave the Romans the advantage, and they pushed the Macedonians back to the ridges. Philip, afraid of a trap, waited. When the fog lifted, he saw that only the Roman light troops and cavalry were fighting.",
        "Third, Philip sent Athenagoras, with 1,500 mercenaries and 1,500 horsemen. The Romans were pushed from the heights, but the Aetolian cavalry kept them from being driven off for good, and the fight became a shoving match in front of the Roman camp.",
        "Fourth, exaggerated news reached Philip: it was said that the Romans were fleeing. Although he did not want to fight in the hills, he sent 8,000 phalangites and 4,000 peltasts forward and told Nicanor to bring up the rest of the phalanx as fast as possible.",
        "Fifth, Flamininus came out of the camp and formed his line. He put the elephants in front of the right wing. The maniples, with gaps between them, let the retreating soldiers through. Flamininus personally led the legion on the left and kept the right as a reserve.",
        "Sixth, Philip arrived, saw that the news had been exaggerated and gathered his men on the crest. According to Polybius, he closed up the ranks and made the phalanx deeper. As he could not wait for Nicanor, he sent the phalanx on the right against the Roman left, and it pushed the Romans downhill, slowly.",
        "Seventh, the Macedonian left, under Nicanor, was still reaching the crest in disorder, in column. Flamininus ran to his right and ordered the attack, with the elephants in front and the Italian allies and 4,000 Greek soldiers behind. The Macedonians were scattered and pushed downhill.",
        "Eighth, while the Roman right was pursuing, a tribune, whose name is not known, saw that the phalanx on Philip's right was exposed from behind. He detached 20 maniples, about 2,500 men, and took them into its rear. The phalanx, in rigid formation, could not turn and came apart.",
        "Ninth, Philip, who had gone up to the heights with a small escort to see better, saw his right collapse and his left flee, and escaped with the horsemen to Macedon. Many phalangites raised their sarissas to show surrender. The Romans ignored the gesture, or did not understand it, and went on killing until Flamininus intervened. According to Plutarch, the Aetolians plundered the Macedonian camp during the pursuit, and the Romans found it empty. Plutarch blames the Aetolians for Philip's escape."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "Polybius and Livy speak of 8,000 Macedonians killed and 5,000 captured, and of 700 to 750 Romans killed. Livy warns that other authors gave 32,000 Macedonian dead, and that one of them, whom he accuses of boundless exaggeration, spoke of 40,000. He concludes that Polybius is the most reliable on this point.",
        "The peace of 196 BC left Philip his kingdom, but took almost everything else from him. He had to withdraw the garrisons from the cities outside Macedon, pay 1,000 talents of silver (half at once, the rest over ten years), hand over almost all his warships, limit his army to 5,000 men, with no elephants, and not make war outside Macedon without the Senate's leave. Flamininus took Demetrius, the king's son, as a hostage, and Macedon became an ally of Rome.",
        { h: "The freedom of the Greeks" },
        "In 196 BC, at the Isthmian Games, Flamininus announced that the cities formerly controlled by Philip were free and would govern themselves. The crowd, according to tradition, cheered with enormous enthusiasm. Rome came to be seen as the protector of Greece.",
        { note: "The battle is often cited as proof that the flexible legion beat the rigid phalanx, as later at Pydna (168 BC), when the kingdom of Macedon ended. Some historians disagree: the victory would have come mainly because Nicanor's left was not formed. The argument, however, can also be read as proof of the phalanx's flaw, which depends on time and terrain to form up." }
      ]}
    ]
  },

  magnesia: {
    war: "Roman-Syrian War (192–188 BC)",
    hook: "An army that the ancient sources count at 72,000 men fell apart under a cavalry charge and a rain of arrows.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Antiochus III rebuilt the Seleucid empire. He marched east to the borders of India, took [[Coele-Syria|celessíria]] from Egypt in 198 BC and then turned to Asia Minor and Thrace. Rome, watching these moves, received appeals for help from threatened Greek cities. In 196 BC, at Lysimachia, the two sides talked and did not agree.",
        "Around 195 BC, Hannibal, an exile from Carthage, reached Antiochus's court at Ephesus. The Aetolians, unhappy with Rome, pushed the Greeks to revolt, and in 192 BC Antiochus landed in Greece. Philip V of Macedon sided with Rome. At Thermopylae, in April 191 BC, the Romans defeated him, and he went back to Ephesus.",
        { h: "The road to Magnesia" },
        { timeline: [
          ["192 BC", "Antiochus lands in Greece."],
          ["Apr 191 BC", "The Romans win at Thermopylae."],
          ["191–190 BC", "Rome and Rhodes win at sea, at Corycus, the Eurymedon and Myonessus."],
          ["May 190 BC", "Antiochus invades the kingdom of Pergamon, and Eumenes comes back from Greece to defend it."],
          ["190 BC", "The Romans cross into Asia and join Eumenes's army."],
          ["Dec 190 or Jan 189 BC", "Battle of Magnesia."]
        ]},
        "The Roman fleet and the Rhodian fleet defeated the Seleucid fleet at Corycus, at the Eurymedon (where Hannibal was) and at Myonessus. With the sea free, the Romans crossed the Hellespont, passed Dardanus and reached the river Caicus, where Eumenes II of Pergamon joined his army to theirs."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Lucius Cornelius Scipio" },
        "Consul in 190 BC, formal commander of the Roman army. His more famous brother, Scipio Africanus, the victor over Hannibal at Zama, came with him as an adviser but, according to Livy, was ill and out of the field on the day of the battle. The victory gave Lucius the nickname 'Asiaticus'.",
        { h: "Eumenes II of Pergamon" },
        "King of Pergamon, an ally of Rome. His kingdom was first in line for Antiochus's attack, and he had a personal reason to want to see the Seleucid beaten. At Magnesia, he commanded the cavalry on the Roman right wing, and his charge decided the first part of the fight.",
        { h: "Antiochus III the Great" },
        "About 50 years old. He had won in the East and gathered an enormous army, with every kind of troop in the empire, counting on numerical superiority. He personally commanded the right wing, the strongest, and was far from the centre when it gave way.",
        { h: "The other names" },
        "On the Roman side, the legate Gnaeus Domitius Ahenobarbus commanded the left wing. On the Seleucid side, Seleucus, the king's son, and Antipater, his nephew, commanded the left wing, and Philip, master of the elephants, the phalanx. Hannibal, according to the sources, played no prominent part in the battle."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The ancient sources, Livy and Appian, give about 30,000 men and 16 African elephants to the Romans and their allies, and about 72,000 men and 54 elephants to Antiochus. Modern historians disagree: for some, the ancient numbers hold. For others, both armies had close to 50,000 men. Livy, the main source, tends to glorify Rome.",
        "The Seleucid centre was a phalanx of about 16,000 men, in ten blocks of 1,600, with 20 elephants in the gaps. The left wing had, in front, [[scythed chariots|carros com foices]] and [[camel archers|arqueiros em camelos]], and behind them [[cataphracts|catafratários]], Gallic cavalry and light troops. The right, Antiochus's, had cataphracts, the mounted guard, the [[Silver Shields|argiráspides]] and horse archers. On the Roman side, the heavy infantry stood on the left and in the centre, Eumenes's cavalry on the right, and in front there were about 3,000 light soldiers and 800 archers. Behind them stood Thracian and Macedonian volunteers and the elephants.",
        { h: "The ground and the days before" },
        "The Romans marched from Pergamon, expecting to find Antiochus, who had withdrawn to a camp about 15 km north-east of Magnesia. They followed him for five days and camped north of the river Hermus. Later they moved to a horseshoe-shaped plain, surrounded on three sides by the rivers Phrygius and Hermus, which hampered the Seleucid cavalry. For about five days the two armies lined up without fighting. Scipio did not want to attack a fortified camp and could not wait long, because supplies were running out and a new consul was expected from Rome. He then advanced to where the Phrygius turns north and leaves the Roman right unprotected. Antiochus accepted battle at dawn on the third day after that.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, the armies lined up. The Roman left was anchored on the river, and the right, Eumenes's, was open. Antiochus put his best troops on the right, facing the river.",
        "Second, Eumenes sent archers, slingers and spearmen against the scythed chariots. The chariots, hit, panicked.",
        "Third, the fleeing chariots disordered the camels and the cataphracts behind them. Eumenes attacked before the cataphracts could reorganise, and the Roman and Pergamene cavalry broke the Seleucid left.",
        "Fourth, the Gallic and Cappadocian infantry and the mercenaries, beside the phalanx, were hit by the Roman centre and right and gave way, which exposed the phalanx's flank.",
        "Fifth, Antiochus attacked the Roman infantry on the left with the cataphracts and the guard, and the Silver Shields attacked the legionaries. The Roman infantry gave way and fell back to the camp, where the Thracian and Macedonian volunteers reinforced it and the tribune Marcus Aemilius Lepidus reorganised it.",
        "Sixth, Antiochus's heavy cavalry could not take the camp and got stuck in front of it.",
        "Seventh, in the centre, the phalanx held against the legionaries, but could not answer the arrows and the stones. It began an orderly retreat, but the elephants, hit, panicked and broke the formation.",
        "Eighth, the phalangites threw down their weapons and left the field. Antiochus's cavalry returned to the centre too late. The king gathered the survivors and withdrew to Sardis, while the Romans plundered the camp."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "Livy gives 53,000 Seleucids killed, 1,400 prisoners and 15 elephants captured, against 349 Romans killed and many wounded. Modern historians estimate about 10,000 Seleucid dead and 5,000 Roman, numbers that are also disputed.",
        "The garrisons of Sardis, Ephesus and other cities surrendered, and the Seleucid fleet left Ephesus. In January 189 BC, Antiochus accepted a truce at Sardis. Rome then marched against the [[Galatians|galácios]], and in 188 BC the [[treaty of Apamea|tratado de apameia]] fixed the terms: Antiochus left Asia Minor west of the Taurus mountains, handed over Hannibal and other enemies of Rome and twenty hostages, cut his fleet to ten ships and paid an indemnity and grain. Rhodes and Pergamon received a good part of the lands. Antiochus died in 187 BC, in the east of his empire.",
        { note: "An ancient anecdote says that Antiochus showed his army to Hannibal and asked whether it was enough for the Romans, and that Hannibal answered that it was, however greedy they might be. It may be a later invention. Hannibal, besides, plays no prominent part in the battle in any of the sources we used." },
        { note: "The battle is often seen as the end of the Macedonian phalanx's dominance on Hellenistic battlefields. Some historians think that the Seleucid army, made of peasants and mercenaries, had training problems that explain the defeat, more than the phalanx itself." }
      ]}
    ]
  },

  arausio: {
    war: "Cimbrian War (113–101 BC)",
    hook: "Two Roman commanders who refused to camp together handed two armies to the Cimbri.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Around 120 to 115 BC, the [[Cimbri|cimbros]] left their land, near the North Sea, and set out in search of another. They carried families, wagons and herds, and absorbed other peoples along the way. The [[Teutones|teutões]] joined them. It was a whole people on the march, and Rome did not know what to do with it.",
        "In 113 BC, the Cimbri defeated the Romans at Noreia. In 109 BC, they won again on the Rhône, and in 107 BC there was another defeat in Aquitaine. In 106 BC, Quintus Servilius Caepio retook Tolosa, which had revolted, and settled in there. In 105 BC, the consul Gnaeus Mallius Maximus marched north to join him. The other consul, Publius Rutilius Rufus, stayed in Rome.",
        { h: "The road to Arausio" },
        { timeline: [
          ["113 BC", "The Cimbri defeat the Romans at Noreia."],
          ["109 BC", "Another Roman defeat, on the Rhône."],
          ["106 BC", "Caepio retakes Tolosa, where, according to tradition, he finds a treasure."],
          ["105 BC", "Mallius, the consul, brings his legions to the Rhône."],
          ["6 Oct 105 BC", "Battle of Arausio."]
        ]},
        "The passage of the Cimbri stirred up southern Gaul, conquered by Rome only a few years earlier, and dragged in other tribes, such as the Helvetii. The ambush of Roman troops and the revolt of Tolosa led Rome to gather forces in the region."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Gnaeus Mallius Maximus" },
        "Consul of 105 BC and a [[new man|homem novo]]: he was the first in his family to reach the consulship, without the illustrious ancestors the nobility demanded. He had little military experience. By law, he was supposed to command both armies, because a consul had more authority than a [[proconsul|procônsul]].",
        { h: "Quintus Servilius Caepio" },
        "A proconsul and a noble of an old family. He had retaken Tolosa and, according to tradition, found in it a great quantity of gold and silver, the so-called [[gold of Tolosa|ouro de tolosa]]. The silver reached Rome, the gold vanished, and the word went round that he had diverted it. Caepio refused to serve under Mallius's orders.",
        { h: "The other names" },
        "Marcus Aurelius Scaurus, [[legate|legado romano]] of Mallius, commanded a detachment that was the first to meet the Cimbri. He was captured and taken to king Boiorix. Tradition says that Scaurus advised the king not to enter Italy and was killed for it. According to Plutarch, the young Quintus Sertorius also fought at Arausio and, wounded, swam across the Rhône in his armour."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Roman numbers come from Valerius Antias, quoted by Livy: about 80,000 soldiers in ten to twelve legions and 40,000 auxiliaries and camp followers, some 120,000 in all. Historians treat them with caution. The number of Cimbri is unknown. If the numbers are true, it was worse in dead than Cannae.",
        { h: "The ground" },
        "The bank of the Rhône, near Arausio, today's Orange. Mallius's camp had the river at its back, a bad position, because it closed the retreat.",
        { h: "The quarrel" },
        "Caepio camped on the other bank of the Rhône, apart from Mallius. He only crossed after a direct order from the Senate, and even then insisted on keeping a camp of his own and ignored the consul's orders. The two armies stood side by side with no common command, and the enemy was a few kilometres away.",
        { h: "The day, in four moves" },
        "First, Scaurus's detachment met an advance column of the Cimbri and was destroyed. Scaurus himself was captured.",
        "Second, on 6 October, Caepio attacked. The historian Theodor Mommsen supposed that he feared Mallius would close a deal with the Cimbri and take the credit. That is an interpretation, not a recorded fact.",
        "Third, Caepio's hasty attack failed against the Cimbrian resistance. The Cimbri overran his camp, which had almost no defence. Caepio himself escaped unhurt.",
        "Fourth, emboldened, the Cimbri turned on Mallius's army, with the river at its back. Few Romans escaped. The camp followers, who could not fight, were killed too.",
        { note: "The ancient sources on Arausio are short, and the order of events comes in good part from modern reconstructions." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        "The defeat left Rome frightened. The Alps were open, and the public blamed Caepio's arrogance. The Cimbri, however, did not march straight into Italy. They fought the Arverni and went to the Pyrenees, which gave Rome time to reorganise.",
        "The Senate and the people set aside the rule that forbade re-electing a consul right away, and Gaius Marius was elected consul several times. He would defeat the Teutones and the Ambrones at Aquae Sextiae, in 102 BC. Many authors link the defeat to changes in the army, the so-called [[Marian reforms|reformas de mário]].",
        { h: "The trial" },
        "In Rome, the people took Caepio's command away, and he lost his seat in the Senate. He was acquitted of the charge of stealing the gold of Tolosa, but later convicted over the loss of his army, despite the defence of the orator Crassus. The penalty was exile, with [[interdiction of water and fire|interdição de água e fogo]] within 800 miles of Rome, and an enormous fine that was never collected. The most accepted version is that he lived the rest of his life in Smyrna. Mallius was tried in 103 BC, before the people, and also convicted to exile. The [[tribunes of the plebs|tribuno da plebe]] Lucius Appuleius Saturninus and Gaius Norbanus stood out in the prosecutions.",
        { note: "The date and manner of Caepio's death are uncertain, and one version says he died in prison. The fate of the gold of Tolosa has never been cleared up either. And the idea that Marius reformed the army all at once is disputed: many historians see a slower process." }
      ]}
    ]
  },

  aquaesextiae: {
    war: "Cimbrian War (113–101 BC)",
    hook: "Marius waited inside his camp until the enemy tired, and then let him attack uphill.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Arausio, Rome had lost two armies and its pride. Gaius Marius, who had beaten Jugurtha in Numidia, was elected consul without being in Rome and received the command against the Cimbri and the Teutones in 104 BC. The Germans, instead of marching on Italy, had gone to Hispania, and that gave Marius time for local campaigns and to reform the legions in Gaul. He gathered about 30,000 Romans and 40,000 allies and settled near Aquae Sextiae.",
        { h: "The road to Aquae Sextiae" },
        { timeline: [
          ["104 BC", "Marius is elected consul and receives the command in Gaul."],
          ["103 BC", "Marius trains the army and rebuilds the legions."],
          ["102 BC", "The Teutones and the [[Ambrones|ambrões]] enter southern Gaul, and the Cimbri go to Italy."],
          ["102 BC", "Battle of Aquae Sextiae."],
          ["Jul 101 BC", "Marius and Catulus defeat the Cimbri at Vercellae."]
        ]},
        "In 102 BC, the Teutones and the Ambrones, under king Teutobod, entered southern Gaul while the Cimbri went toward Italy by another route. Catulus stayed in Italy, and Marius waited for them on the Rhône."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Gaius Marius, about 55 years old" },
        "He was also a [[new man|homem novo]], from Arpinum, and proud of it. He had won in Africa and knew how to be patient: for two years he trained his soldiers, and at Aquae Sextiae he used that patience as a weapon. He accepted no provocation until the moment when the ground was in his favour.",
        { h: "Teutobod" },
        "King of the Teutones. Together with the Ambrones, he led an enormous people, with women and children, on the march. The sources say little about him besides his name and his fate: he was captured after the battle.",
        { h: "The other names" },
        "Claudius Marcellus commanded the roughly 3,000 men whom Marius hid. The [[Ligurians|lígures]], Marius's auxiliaries, started the first fight, almost by accident."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Romans had from 32,000 to 40,000 men, in six legions and auxiliaries. On the Germanic side, the Ambrones in the first fight were about 30,000 warriors. In the main battle, the modern estimates cited run from 100,000 to 200,000 warriors, and some 250,000 counting the families. The numbers of peoples on migration are very uncertain.",
        { h: "The camp" },
        "Marius fortified a camp on a hill by the Rhône, stocked for a long siege. The Teutones and the Ambrones crossed the Durance and arrived. They provoked the Romans, and one warrior challenged Marius to a duel. Marius laughed and offered a veteran gladiator, because a consul did not fight just any brawler. After assaulting the camp for three days without success, the Germans moved on, and Marius followed them at some distance, fortifying a new camp every night.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, Marius camped near the Ambrones, who had separated from the Teutones, and the two armies were divided by a river.",
        "Second, the Roman [[camp servants|calones]] went to fetch water and found Ambrones bathing in the river. The Ambrones called their comrades, who were eating and drinking in the camp.",
        "Third, Marius's Ligurian auxiliaries, with no order at all, took up their arms and went to help the servants. According to Plutarch, they shouted 'Ambrones!', the same cry as the enemy, and so everyone was confused.",
        "Fourth, Marius brought up the legions, which threw their [[pila|pilo]], drew their swords and advanced. The Ambrones, many with full stomachs, half-naked or drunk, were pushed against the river. According to Plutarch, the Ambrone women fought at their side, with swords and axes, near the wagons. Roman losses were light.",
        "Fifth, Marius forbade celebrations, because the Teutones were near. He sent a group to make noise in the woods during the night to keep the enemy from sleeping. Then he sent Claudius Marcellus with about 3,000 men, to hide and wait for a signal to attack the enemy rear.",
        "Sixth, Marius came down to the plain near Aquae Sextiae and took the high ground. He told his men that the attackers would be at a disadvantage climbing the hill. To look bigger, he had the servants and the pack animals march with the army, with the mules arranged as if they were cavalry horses.",
        "Seventh, the Ambrones who were left and the Teutones attacked uphill. The legionaries threw their pila and then closed the formation, swords in hand. The fight lasted much of the morning, and the legionaries pushed the enemy downhill.",
        "Eighth, Marcellus's men attacked from the rear. The warriors were trapped on two fronts, broke and fled. Many were killed in the confusion, and the pursuit went on until the afternoon."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "Teutobod and his followers escaped from the field, but were captured by the Sequani, who handed them over to Marius. Modern estimates speak of 100,000 to 120,000 dead on the Germanic side. Roman losses are unknown. The survivors, including women and children, were to be sold as slaves. According to Florus, 300 Teutonic women killed themselves, and their children, so as not to be handed over. Roman tradition made them Germanic heroines.",
        "Marius gave the profit of the sale to his soldiers and officers, which made him still more popular. Rome celebrated, and Marius was re-elected consul, again in absentia. In July 101 BC, he and Catulus defeated the Cimbri at Vercellae, and the threat was over.",
        { note: "Plutarch says that the inhabitants of [[Massalia|massália]], some 30 km away, fenced their fields with the bones of the dead, and that the soil, fertilised by the bodies, gave exceptional harvests for years. It is a tradition, not a proven fact. The details of Marius's tricks, such as the disguised animals, come from authors who wrote much later." },
        { note: "A local legend links Mont Sainte-Victoire to Marius's victory, but it has been rejected by scholars, such as the poet Frédéric Mistral. Modern research, such as Evans's, says that the crowding of the encircled warriors, who could not fight, explains a good part of the number of dead." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  rafia: {
    terrain: [{ t: "note", x: 8, y: 66, l: "Sinai desert behind" }],
    units: [
      { id: "pPol", s: "a", k: "cav", w: 10, h: 4, l: "Polycrates (cavalry)" },
      { id: "pLeft", s: "a", k: "inf", w: 14, h: 4, l: "Cretans, guard and peltasts" },
      { id: "pPhM", s: "a", k: "inf", w: 14, h: 5, l: "Macedonian phalanx" },
      { id: "pPhE", s: "a", k: "inf", w: 15, h: 5, l: "Egyptian phalanx" },
      { id: "pMerc", s: "a", k: "inf", w: 9, h: 4, l: "Phoxidas (Greek mercenaries)" },
      { id: "pGaul", s: "a", k: "inf", w: 9, h: 4, l: "Gauls and Thracians" },
      { id: "pEch", s: "a", k: "cav", w: 12, h: 4, l: "Echecrates (cavalry)" },
      { id: "pEleL", s: "a", k: "ele", w: 12, h: 3, l: "40 elephants (Ptolemy)" },
      { id: "pEleR", s: "a", k: "ele", w: 10, h: 3, l: "33 elephants" },
      { id: "aRcav", s: "b", k: "cav", w: 10, h: 4, l: "Antiochus and the cavalry" },
      { id: "aRinf", s: "b", k: "inf", w: 14, h: 4, l: "Cretans, mercenaries and Macedonians" },
      { id: "aPh", s: "b", k: "inf", w: 28, h: 5, l: "Phalanx (Silver Shields and Nicarchus)" },
      { id: "aLinf", s: "b", k: "inf", w: 22, h: 4, l: "Arabs, Medes and light troops" },
      { id: "aLcav", s: "b", k: "cav", w: 12, h: 4, l: "Themison (cavalry)" },
      { id: "aEleR", s: "b", k: "ele", w: 14, h: 3, l: "60 elephants (Philip)" },
      { id: "aEleL", s: "b", k: "ele", w: 12, h: 3, l: "42 elephants (Myiscus)" }
    ],
    steps: [
      { t: "Both kings put the phalanx in the centre, the cavalry on the ends and the elephants in front. Ptolemy stands on the left, where he faces Antiochus, who stands on his own right.",
        p: { pPol: [8, 50], pLeft: [22, 50], pPhM: [37, 50], pPhE: [51.5, 50], pMerc: [64, 50], pGaul: [73.5, 50], pEch: [87, 50], pEleL: [18, 43], pEleR: [85, 43],
             aRcav: [8, 18], aRinf: [22, 18], aPh: [44, 18], aLinf: [70, 18], aLcav: [87, 18], aEleR: [14, 26], aEleL: [87, 26] } },
      { t: "The elephants meet first. Only a few of Ptolemy's really fight head-on.",
        p: { pEleL: [18, 38], aEleR: [16, 33], pEleR: [85, 38], aEleL: [86, 33] } },
      { t: "The African elephants, smaller, flee from the Indian ones and fall on their own infantry. Ptolemy's guard gives way.",
        p: { pEleL: [30, 50], pLeft: [26, 53], aEleR: [18, 42] }, x: ["pEleL"] },
      { t: "Antiochus goes round the elephants with the cavalry and attacks Polycrates's. Antiochus's mercenaries attack Ptolemy's peltasts. The Ptolemaic left is pushed back.",
        p: { aRcav: [9, 46, 35], pPol: [8, 56], aRinf: [24, 41], pLeft: [27, 57], aEleR: [14, 46] } },
      { t: "On the right, Echecrates waits, then sends Phoxidas forward and goes round the enemy flank with the cavalry.",
        p: { pEch: [92, 32, -40], pMerc: [64, 38], pGaul: [74, 40], aLcav: [85, 22] } },
      { t: "Antiochus's cavalry at that end is beaten. Phoxidas's infantry makes the Arabs and Medes flee. Antiochus's left wing collapses.",
        p: { aLcav: [90, 10], aLinf: [70, 24], pMerc: [66, 28], pEch: [90, 18] }, x: ["aLcav", "aLinf"] },
      { t: "In the centre, the two phalanxes are intact. Ptolemy, who withdrew behind his own, reappears. The phalanx advances, with Andromachus and Sosibius.",
        p: { pPhM: [37, 38], pPhE: [51.5, 38], aPh: [44, 30] } },
      { t: "Nicarchus's phalanx flees. The picked troops, who held out longest, give way too.",
        p: { pPhM: [37, 28], pPhE: [51.5, 28], aPh: [44, 20] }, x: ["aPh"] },
      { t: "Antiochus is still pursuing on the right. He sees the dust moving toward his camp, turns back and finds the army in flight. He withdraws into Raphia.",
        p: { aRcav: [18, 34, -10], aRinf: [24, 26] }, x: ["aRinf", "aRcav"] }
    ]
  },

  cinoscefalos: {
    terrain: [{ t: "hill", x: 50, y: 33, rx: 44, ry: 9, l: "Cynoscephalae Hills" }],
    units: [
      { id: "rSkir", s: "a", k: "inf", w: 12, h: 3, l: "Roman light troops and cavalry" },
      { id: "rLeft", s: "a", k: "inf", w: 16, h: 5, l: "Left legion (Flamininus)" },
      { id: "rTrib", s: "a", k: "inf", w: 8, h: 4, l: "The tribune's 20 maniples" },
      { id: "rRight", s: "a", k: "inf", w: 16, h: 5, l: "Right wing (reserve)" },
      { id: "rEle", s: "a", k: "ele", w: 10, h: 3, l: "Elephants" },
      { id: "rAet", s: "a", k: "cav", w: 10, h: 4, l: "Aetolian cavalry" },
      { id: "rCamp", s: "a", k: "camp", w: 14, h: 5, l: "Roman camp" },
      { id: "mSkir", s: "b", k: "inf", w: 14, h: 3, l: "Light troops and mercenaries" },
      { id: "mCav", s: "b", k: "cav", w: 10, h: 4, l: "Macedonian cavalry" },
      { id: "mPelt", s: "b", k: "inf", w: 10, h: 4, l: "Peltasts" },
      { id: "mPhR", s: "b", k: "inf", w: 22, h: 5, l: "Right phalanx (Philip)" },
      { id: "mNic", s: "b", k: "inf", w: 14, h: 7, l: "Left phalanx, in column (Nicanor)" }
    ],
    steps: [
      { t: "Rain, then fog. The armies lose their way. Philip sends his light troops to occupy the hills, and Flamininus sends 1,000 light soldiers and 300 horsemen. They bump into each other on the crest.",
        p: { rSkir: [40, 44], rLeft: [22, 62], rTrib: [46, 62], rRight: [64, 62], rEle: [78, 62], rAet: [90, 56], rCamp: [50, 66],
             mSkir: [40, 36], mCav: [8, 10], mPelt: [20, 10], mPhR: [38, 10], mNic: [75, 8] } },
      { t: "The Romans, outnumbered, begin to lose. Flamininus sends 2,000 light soldiers and 500 horsemen. The Macedonians are pushed to the ridges.",
        p: { rSkir: [40, 38], mSkir: [40, 29], rAet: [52, 38] } },
      { t: "Philip sends Athenagoras, with 1,500 mercenaries and 1,500 horsemen. The Romans are pushed from the heights, but the Aetolian cavalry keeps them from being driven off for good.",
        p: { mSkir: [40, 38], rSkir: [38, 48], mCav: [30, 30] } },
      { t: "Exaggerated news of a Roman rout arrives. Philip sends 8,000 phalangites and 4,000 peltasts forward and calls up Nicanor with the rest.",
        p: { mPhR: [38, 30], mPelt: [20, 30], mNic: [70, 16] } },
      { t: "Flamininus comes out of the camp and forms his line, with the elephants in front of the right. He takes the left legion and keeps the right as a reserve.",
        p: { rLeft: [22, 54], rTrib: [46, 58], rRight: [64, 56], rEle: [76, 50], rSkir: [40, 56] } },
      { t: "Philip, with the phalanx tighter and deeper, attacks the Roman left downhill and pushes it back slowly.",
        p: { mPhR: [30, 42], mPelt: [14, 42], mCav: [4, 40], rLeft: [24, 58] } },
      { t: "The Macedonian left, under Nicanor, is still reaching the crest in column. Flamininus orders the right to attack, with the elephants, the allies and 4,000 Greek soldiers. The Macedonians scatter.",
        p: { rEle: [74, 32], rRight: [66, 38], rAet: [88, 36], mNic: [80, 12] }, x: ["mNic"] },
      { t: "A tribune, name unknown, sees Philip's right exposed from behind. He takes 20 maniples into the rear of the phalanx.",
        p: { rTrib: [34, 22] } },
      { t: "The phalanx, rigid, cannot turn and comes apart. Many raise their sarissas, and the Romans keep killing. Philip flees with the cavalry.",
        p: { mCav: [8, 4] }, x: ["mPhR", "mPelt", "mCav", "mSkir"] }
    ]
  },

  magnesia: {
    terrain: [{ t: "note", x: 8, y: 68, l: "River Phrygius (covers the Roman left)" }],
    units: [
      { id: "rLeft", s: "a", k: "inf", w: 20, h: 5, l: "Left infantry (Domitius)" },
      { id: "rCen", s: "a", k: "inf", w: 26, h: 5, l: "Centre infantry (Scipio)" },
      { id: "rRcav", s: "a", k: "cav", w: 16, h: 4, l: "Eumenes's cavalry" },
      { id: "rLight", s: "a", k: "inf", w: 18, h: 3, l: "Light troops and archers" },
      { id: "rRes", s: "a", k: "inf", w: 10, h: 4, l: "Thracian and Macedonian volunteers" },
      { id: "rCamp", s: "a", k: "camp", w: 14, h: 5, l: "Roman camp" },
      { id: "bRcav", s: "b", k: "cav", w: 18, h: 5, l: "Antiochus: cataphracts and guard" },
      { id: "bPh", s: "b", k: "inf", w: 30, h: 6, l: "Phalanx of 16,000" },
      { id: "bEle", s: "b", k: "ele", w: 22, h: 3, l: "20 elephants" },
      { id: "bGal", s: "b", k: "inf", w: 14, h: 4, l: "Galatians and allied infantry" },
      { id: "bLcav", s: "b", k: "cav", w: 18, h: 5, l: "Seleucus: cataphracts and cavalry" },
      { id: "bChar", s: "b", k: "car", w: 16, h: 3, l: "Scythed chariots and camels" },
      { id: "bCamp", s: "b", k: "camp", w: 14, h: 5, l: "Seleucid camp" }
    ],
    steps: [
      { t: "The Roman infantry holds the left and the centre, with the left anchored on the river. Eumenes has the cavalry on the right, which is open. Antiochus, on his own right, has the best troops. The Seleucid left has chariots and camels in front.",
        p: { rLeft: [14, 52], rCen: [38, 52], rRcav: [62, 52], rLight: [72, 44], rRes: [50, 60], rCamp: [14, 66],
             bRcav: [10, 16], bPh: [44, 16], bEle: [44, 23], bGal: [68, 17], bLcav: [88, 16], bChar: [88, 26], bCamp: [50, 6] } },
      { t: "Eumenes sends archers, slingers and spearmen against the scythed chariots.",
        p: { rLight: [82, 40], bChar: [88, 34] } },
      { t: "The chariots, hit, panic and disorder the camels and the cataphracts behind them.",
        p: { bChar: [78, 36], rLight: [80, 34] }, x: ["bChar"] },
      { t: "Eumenes attacks before the cataphracts can reorganise. The Roman and Pergamene cavalry break the Seleucid left.",
        p: { rRcav: [84, 30, -20], bLcav: [92, 20] }, x: ["bLcav"] },
      { t: "The Gallic infantry and the mercenaries, beside the phalanx, are hit by the Roman centre and right and give way. The phalanx's flank is exposed.",
        p: { bGal: [68, 26], rCen: [40, 40] }, x: ["bGal"] },
      { t: "At the other end, Antiochus attacks the Roman infantry on the left with the cataphracts and the guard, and the Silver Shields attack the legionaries. The Roman left falls back to the camp.",
        p: { bRcav: [14, 38, 15], rLeft: [12, 58], rRes: [22, 60] } },
      { t: "The Thracian and Macedonian volunteers reinforce the camp, and the tribune Lepidus reorganises the fugitives. Antiochus's heavy cavalry cannot take the camp and gets stuck in front of it.",
        p: { bRcav: [14, 50, 15] } },
      { t: "In the centre, the phalanx holds against the legionaries, but has no answer to arrows and stones. The elephants, hit, panic and break the formation.",
        p: { bPh: [44, 28], bEle: [44, 30], rCen: [40, 36] }, x: ["bEle"] },
      { t: "The phalangites throw down their weapons. Antiochus's cavalry returns too late. The king withdraws to Sardis, and the Romans plunder the camp.",
        p: { bRcav: [26, 34], rCen: [44, 12], rLeft: [18, 28] }, x: ["bPh", "bRcav"] }
    ]
  },

  aquaesextiae: {
    terrain: [
      { t: "hill", x: 50, y: 58, rx: 44, ry: 10, l: "Marius's hill" },
      { t: "note", x: 12, y: 32, l: "River" }
    ],
    units: [
      { id: "rLeg", s: "a", k: "inf", w: 40, h: 5, l: "Marius's legions" },
      { id: "rLig", s: "a", k: "inf", w: 10, h: 3, l: "Ligurian auxiliaries" },
      { id: "rServ", s: "a", k: "inf", w: 18, h: 3, l: "Servants and mules" },
      { id: "rMar", s: "a", k: "inf", w: 10, h: 3, l: "Marcellus, 3,000 men" },
      { id: "rCamp", s: "a", k: "camp", w: 14, h: 5, l: "Marius's camp" },
      { id: "tAmb", s: "b", k: "inf", w: 22, h: 6, l: "Ambrones" },
      { id: "tTeu", s: "b", k: "inf", w: 40, h: 6, l: "Teutones and Ambrones" }
    ],
    steps: [
      { t: "Marius fortifies a camp on the heights and waits. The Ambrones camp beyond the river, and the Teutones a little farther back.",
        p: { rLeg: [50, 56], rLig: [66, 50], rServ: [80, 60], rMar: [18, 62], rCamp: [30, 66], tAmb: [30, 18], tTeu: [72, 10] } },
      { t: "Roman servants go to fetch water and find Ambrones bathing. The Ambrones call their comrades.",
        p: { rServ: [52, 38], tAmb: [38, 26] } },
      { t: "The Ligurians attack on their own, and the Ambrones form a line. Marius brings up the legions.",
        p: { rLig: [46, 36], rLeg: [50, 46] } },
      { t: "The legionaries throw their pila and advance with swords. The Ambrones, caught unprepared, are pushed against the river.",
        p: { tAmb: [30, 24], rLeg: [48, 40] }, x: ["tAmb"] },
      { t: "Days later, Marius comes down to the plain and takes the heights. He sends Marcellus with 3,000 men to hide and strike the rear. Servants and mules march with the army, to look bigger.",
        p: { rMar: [92, 36], rServ: [66, 56], rLeg: [50, 50], rLig: [30, 52], tTeu: [50, 16] } },
      { t: "The Teutones and the surviving Ambrones attack uphill. The legionaries throw their pila and close the formation.",
        p: { tTeu: [50, 36], rMar: [90, 16] } },
      { t: "The fight lasts hours. The legionaries push the warriors downhill.",
        p: { tTeu: [50, 30], rLeg: [50, 44] } },
      { t: "Marcellus's men come out of the woods and attack from the rear. The warriors are trapped on two fronts.",
        p: { rMar: [62, 14], tTeu: [50, 26] } },
      { t: "The Teutones give way, and the pursuit goes on until the afternoon. Teutobod escapes, but is captured and handed to Marius.",
        p: { tTeu: [50, 22], rLeg: [50, 36] }, x: ["tTeu"] }
    ]
  }
});
