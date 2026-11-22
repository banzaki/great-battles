// In-depth battles, batch e: accio, teutoburgo, guandu, penhascos, pontemilvia, adrianopolis.
// Checked against Wikipedia (EN and PT), Britannica where reachable, and the ancient sources they cite
// (Plutarch, Cássio Dio, Velleius Paterculus, Ammianus Marcellinus, Lactantius, Eusebius, Sanguozhi and Pei Songzhi).

Object.assign(GLOSSARY, {
  "triunvirato": "An alliance of three men who shared power in Rome. The Second Triumvirate (Antony, Octavian and Lepidus) was renewed in 37 BC for five years and expired at the end of 33 BC.",
  "liburnas": "Small, light, fast Roman warships of Illyrian origin. They were easier to maneuver than Antony's giant galleys.",
  "quinquerreme": "A large oared warship with several banks of rowers. It was heavy and strong, but slow to turn.",
  "abordagem": "An attack in which one ship comes alongside another and the soldiers cross onto the enemy deck, fighting as in a land battle.",
  "tribuno": "A senior officer of a Roman legion. Each legion had six, and several were young men from wealthy families.",
  "águia": "The silver or gold eagle (aquila) was the sacred standard of every Roman legion. Losing it was the greatest of disgraces.",
  "auxiliares": "Roman troops made up of non-citizens from the provinces. They did what the legion did worst: cavalry, archery, light troops.",
  "senhor da guerra": "A commander who controls a territory and his own army, almost always without truly obeying any central government.",
  "catapulta de tração": "A throwing machine powered by many men pulling on ropes, which hurled stones. The Chinese used it at Guandu to knock down the enemy archers' towers.",
  "dinastia han": "The imperial dynasty that ruled China from 202 BC to AD 220. By the end, the emperors were weak and the generals held the real power.",
  "tetrarquia": "A system created by the emperor Diocletian: four rulers divided the Roman Empire (two Augusti and two Caesars). When he abdicated in 305, the system collapsed into wars.",
  "usurpador": "Someone who seizes power without being recognized as a legitimate ruler.",
  "pretorianos": "The personal guard of the Roman emperors, based in Rome. Maxentius used it as the core of his army.",
  "pontão": "An improvised bridge of boats or of planks laid on barges, set up quickly and without the solidity of a stone bridge.",
  "federados": "Foreign peoples accepted inside the Roman Empire, with land and pay in exchange for fighting for Rome, but under their own chiefs.",
  "círculo de carroças": "The Goths traveled with their families and belongings in wagons and, to make camp, formed a ring with them. It served as an improvised fortress.",
  "crisma": "The monogram of Christ, formed by the Greek letters chi and rho (Χ and Ρ) superimposed. It appears on the shields and standards that tradition links to Constantine."
});

Object.assign(DEEP, {
  accio: {
    war: "Civil war between Octavian and Mark Antony (32–30 BC)",
    hook: "The naval battle in which the queen of Egypt left the fight in the middle of it, and the man who followed her lost the Roman world.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 44 BC, Julius Caesar was assassinated and left his great-nephew Octavian as his heir, by will. Ten years later, Rome was governed by a [[triumvirate|triunvirato]]: Octavian controlled the West and Mark Antony the East. The arithmetic did not work. Two men and a single republic could not fit together.",
        "Antony had tied his political life to Cleopatra, queen of Egypt. In 34 BC, at the ceremonies known as the Donations of Alexandria, the two gave Caesarion, the son of Cleopatra and Caesar, then 13 years old, the title 'King of Kings'. Octavian used this in his propaganda: he said Antony wanted to become an eastern monarch and move the capital from Rome to Alexandria.",
        { h: "The road to Actium" },
        { timeline: [
          ["37 BC", "The triumvirate is renewed for five years, at Tarentum."],
          ["34 BC", "Donations of Alexandria: Caesarion receives the title King of Kings."],
          ["End of 33 BC", "The triumvirate expires. Antony writes to the Senate that he does not want to be reappointed."],
          ["32 BC", "The two consuls of the year side with Antony and leave Rome. Antony divorces Octavia, Octavian's sister, and goes with Cleopatra to Ephesus. Octavian gets Antony stripped of his powers and the Senate to declare war on Cleopatra, which everyone understood as war against Antony."],
          ["Winter of 32–31 BC", "Antony tries to go to Italy, finds the sea guarded by an enemy fleet and spends the winter at Patras, with most of his fleet in the Gulf of Ambracia."]
        ]},
        "In the spring and summer of 31 BC, Marcus Agrippa, Octavian's best admiral, took Methone, in the Peloponnese, and raided Greek cities. Octavian's army landed at the north of the strait in August and won cavalry skirmishes. Antony fell back to the camp in the south. Unable to advance or to receive supplies by sea, he was trapped in the gulf."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Octavian and Agrippa" },
        "Octavian was Caesar's political heir, and for him the war was also a matter of legitimacy: fighting a foreign queen was easier to sell to the Romans than fighting another Roman. But the man who commanded the fleet was Agrippa, his friend and general. It was Agrippa who had the plan: cut off Antony's sea and wait for hunger and disease to do the work. According to Cassius Dio, Octavian even thought of letting Antony escape in order to attack him later, and it was Agrippa who convinced him to give battle.",
        { h: "Mark Antony" },
        "Antony was the great Roman soldier of his generation, stronger on land than at sea. Even so, he agreed to fight at sea, because Cleopatra wanted it. Plutarch says he chose the naval battle 'to please' the queen, and that the general Canidius Crassus, commander of the land army, argued for fighting on land, where Antony was stronger. Cleopatra won the argument.",
        { h: "Cleopatra" },
        "Cleopatra paid for a good part of the war: according to Plutarch, she supplied 200 ships, 20,000 talents and provisions. Her squadron stayed behind Antony's line. Plutarch says she was already planning her escape before the battle. Cassius Dio reports that she was shaken by bad omens: swallows nested near her tent, and lightning struck statues of her and of Antony.",
        { h: "The other names" },
        "On Octavian's side, Lucius Arruntius commanded the center, Marcus Lurius the right and Titus Statilius Taurus the army that accompanied him on land. On Antony's side, Gaius Sosius commanded the left, Marcus Octavius and Marcus Insteius the center, and Lucius Gellius Publicola the right, beside Antony."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are a problem. Plutarch gives Antony about 500 warships, 100,000 infantry and 12,000 horsemen, and Octavian 250 ships and 80,000 soldiers. Modern historians give quite different ranges: 250 to 400 galleys for Octavian and 250 to 500 for Antony. What is known is that Antony arrived with many ships he could not crew, because of desertions and disease. Plutarch says he recruited travelers, laborers and boys to fill the rowing benches, and that he burned most of the Egyptian ships, keeping 60.",
        { note: "The numbers at Actium are one of the cases where ancient and modern sources disagree the most. Cassius Dio gives no totals. The difference that matters is not the number but the type: Antony's ships were bigger and taller, with towers for archers, but heavy and slow." },
        "Antony's ships were large, with heavy-infantry marines, archers and catapults aboard. They were hard to board but hard to maneuver. Octavian's [[liburnians|liburnas]] were smaller, faster and better crewed. Cassius Dio describes the tactics: charge, strike the oars and the rudders and back away, without letting themselves be pinned down.",
        { h: "The terrain" },
        "The battle took place in the Ionian Sea, off Cape Actium, at the entrance of the Gulf of Ambracia, on the west coast of Greece. The strait was too narrow for Antony's fleet to maneuver. His army camped near the promontory, and Octavian's stayed on the north shore.",
        { h: "The decision" },
        "Why did Antony sail out? What the sources say is that he was surrounded and that waiting only made things worse. Plutarch relates that, in the previous days, Antony burned ships, and that the Roman general Domitius deserted and died soon after, and that some allied kings also abandoned him. Plutarch also narrates that a scarred centurion begged Antony to fight on land, and that Antony answered only with a mute gesture of encouragement.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, after days of storm, on the fifth day the sea calmed. Antony came out through the strait and formed his line, with Cleopatra behind. Octavian waited in the open sea. According to Cassius Dio, he advanced his wings in a half-moon shape to try to envelop the enemy line. Antony ordered his men to stay still in the narrow gulf and not to break formation.",
        "Second, Antony's left wing, under Sosius, advanced. Plutarch says Octavian ordered his right to pull back, to draw the enemy ships into open water. Antony's heavy ships could not ram well, and the fight turned into something like a siege: boarding, arrows and catapults. Octavian's men used fire, with flaming arrows and pots of charcoal and pitch, according to Dio, and the fire spread among Antony's ships.",
        "Third, Agrippa extended the left wing to outflank Antony's right. Publicola followed and separated from the center, which was left in disorder.",
        "Fourth, and decisive: Cleopatra's 60 ships hoisted their sails and sailed out through the middle of the fight, heading for the Peloponnese. Cassius Dio says that she, watching the fight from afar, lost patience and fled with the wind behind her. Antony, thinking the fleet was lost, abandoned the combat and followed her, in a smaller ship, with a few companions. Plutarch says he spent three days alone in the bow, speaking to no one.",
        "Fifth, the rest of the fleet kept fighting. The men, without sails, threw the towers and equipment into the sea to lighten the ships. According to Plutarch, the fleet held out until the wind and the heavy sea forced it to surrender, at the tenth hour of the day (late afternoon).",
        "Sixth, the land army. Plutarch relates that Antony ordered Canidius to lead the army through Macedonia to Asia. He had 19 legions and 12,000 horsemen, who, according to Plutarch, held out for seven days. On the night Canidius fled, the soldiers surrendered to the victor. Other versions say that about 19 legions and 12,000 horsemen deserted before any fighting on land.",
        { h: "The versions of the escape" },
        "The historian J. M. Carter proposes that the escape of Antony and Cleopatra was not a desertion but a plan: Antony knew he was surrounded, formed a horseshoe line near the coast, ordered the northern ships to open up Octavian's formation and Sosius's to the south, and opened a gap through which the two escaped, leaving the rest behind. Lange, on the other hand, argues the opposite: Antony would have won if Cleopatra had not withdrawn."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Plutarch says that Octavian himself reported no more than 5,000 dead and 300 ships captured. Modern estimates speak of more than 200 ships sunk or captured. Antony's fleet ceased to exist, and the legions surrendered. Octavian spent the winter at Samos and in Greece and Asia, and in 30 BC attacked Egypt from two sides.",
        "Antony still won a skirmish at Alexandria, but lost the general attack on 31 July or 1 August 30 BC (the sources vary). Falsely told that Cleopatra had died, he stabbed himself and died in her arms. Cleopatra killed herself on 12 August 30 BC. Octavian had Caesarion and Antyllus, Antony's son, put to death, but spared the couple's other children.",
        { h: "Why it matters" },
        "Egypt became a Roman province. In 27 BC, Octavian received the title Augustus, and historians usually see in Actium the passage from the Republic to the Empire. Octavian founded the city of Nicopolis ('city of victory') nearby in 29 BC, with monuments on the battlefield decorated with bronze rams from the captured ships, and celebrated a triple triumph in Rome: for Illyria, for Actium and for Egypt.",
        { h: "Curiosities and controversies" },
        { note: "Propaganda: almost everything we know comes from authors who wrote under Augustus or after him. That is why the image of Antony as a Roman bewitched by a foreign queen and of Cleopatra as the traitor who fled was helped along by the victor's version." },
        { note: "The omens: according to Plutarch, before the battle Octavian met a man leading a donkey, who was called Fortunate, and the donkey, Victorious. After the victory, he had bronze statues made of the two." },
        { note: "'Dead water': researchers are studying whether the dead-water phenomenon (fresh water over salt water, which creates a strong drag on ships) may have held back the Egyptian fleet. It is only a hypothesis." }
      ]}
    ]
  },

  teutoburgo: {
    war: "Roman campaigns in Germania (11 BC – AD 16)",
    hook: "Three legions entered the forest behind a trusted ally and none came back.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the beginning of the 1st century, Rome thought that Germania between the Rhine and the Elbe was almost conquered. Drusus campaigned there from 11 to 9 BC, and after him Tiberius and Lucius Domitius Ahenobarbus, who even crossed the Elbe. Cassius Dio relates that the Romans had soldiers in winter quarters, and that the Germans were learning the Roman way, holding markets and living in peace, without giving up their customs or their weapons.",
        "In AD 6, a great army was sent against Maroboduus, king of the Marcomanni. A revolt in Illyricum forced Tiberius to make peace and to move eight legions to the Balkans. Three were left on the Rhine. It was at that moment that the new governor arrived: Publius Quinctilius Varus, in AD 7.",
        { h: "The road to the forest" },
        { timeline: [
          ["11–9 BC", "Drusus advances through Germania to near the Elbe."],
          ["AD 4", "Arminius, after a Roman education, serves as an officer in Pannonia."],
          ["AD 6", "The Illyrian revolt forces eight legions to be moved to the Balkans."],
          ["AD 7", "Varus takes command in Germania."],
          ["Summer of AD 9", "Arminius prepares the trap: reports of a revolt draw Varus away from the Rhine."],
          ["8 to 11 September AD 9", "The ambush, over several days, according to the most widely used dating."]
        ]},
        "Varus had been governor of Africa and Syria, was close to Augustus and tied by marriage to Agrippa's family. According to Cassius Dio, he treated the Germans like slaves and collected taxes as if they were an old province. The chiefs wanted their power back, and the common people preferred the old customs. Because there were many Roman soldiers nearby, no one revolted openly."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Arminius, chief of the Cherusci" },
        "Arminius was born among the Cherusci and, still a child, around 8 BC, was taken as a hostage to the Roman side after Drusus's victory over his tribe. He received a Roman education, citizenship and equestrian rank, and around AD 4 was serving in Pannonia. The historian McNally suggests that the lessons of his childhood shaped his plan: the Romans could only be beaten when their discipline and flexibility had no way to work. Arminius ate at Varus's table, beside Segimerus, and had his trust.",
        { h: "Publius Quinctilius Varus" },
        "Varus was a politician and administrator, not an experienced general. Some say he was sent to Germania for his political skill rather than his military skill. Segestes, Arminius's father-in-law and an ally of the Romans, warned Varus of the treachery. Varus did not believe him, perhaps because Segestes disapproved of his daughter's marriage and held a grudge. According to Dio, Varus rebuked those who warned him, calling them alarmists who slandered his friends.",
        { h: "The other names" },
        "Lucius Asprenas, Varus's nephew, stayed at Mogontiacum with two legions. Numonius Vala, commander of the cavalry, was the officer closest to Varus. On the German side, besides Arminius and Segimerus, the coalition included the Bructeri, the Angrivarii, the Marsi and other peoples."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Varus had three legions, the XVII, XVIII and XIX, with about 15,000 men, plus [[auxiliary|auxiliares]] units: modern sources speak of nine units of some 4,500 men, or of six cohorts and three wings of cavalry. There were also servants, women, children and wagons, which made the column slow and long. Estimates for the Roman total range from 14,000 to 22,752 (Powell); McNally calculates 21,000, including about 3,800 servants.",
        "On the German side, estimates range from 18,000 to 30,000 warriors. One estimate lists 5,000 Angrivarii, 8,000 Bructeri and 8,000 Cherusci. The important point is that the Germans fought with light weapons and knew the terrain.",
        { note: "All the numbers are modern estimates. The ancient sources (Velleius Paterculus, Tacitus and Cassius Dio) do not give reliable totals." },
        { h: "The trap" },
        "Varus planned to march from Vetera (Xanten) to the territory of the Cherusci, set up a summer camp (probably near Minden) and return to winter quarters. In July, allies carried out raids, and Varus sent detachments to put down the unrest. At the end of the summer, news of a revolt, which Arminius is said to have invented, drew Varus toward the Angrivarii. Arminius argued that the road would be shorter and that the Romans could crush the revolt. On the night of 7 September, he left the camp, promising to return in two or three days, and left behind Cheruscan guides who were in fact spies.",
        { h: "The days in the forest" },
        "Cassius Dio describes the terrain as full of ravines and tall, dense trees. The Romans had to fell timber, open roads and build bridges, and the column, full of wagons, animals, women and children, stretched over 15 to 20 km. Rain and wind left the ground slippery. The Germans attacked from the thickets, first from a distance and then up close, when the Romans, mixed in with unarmed people, could not form ranks.",
        "On the first day, the Bructeri attacked along the column, wearing the Romans down and hitting the supplies. A heavy storm stopped the march, and Varus ordered a camp fortified and held a council of war. The Romans burned or abandoned most of the wagons.",
        "On the second day, they advanced in better order and reached an open field, but suffered losses. On going back into the woods, they fought in spaces so tight that cavalry and infantry bumped into each other and into the trees.",
        "On the fourth day, a downpour soaked the shields and ruined the bows and javelins. The Germans, lighter and ever more numerous, because the fight drew those who wanted loot, suffered less. The Romans tried to escape in a night march and ran into the trap at Kalkriese, in the narrow passage between the hill and the Great Bog, about 100 meters wide. There the Germans had built a wall of turf and sand along the path, from which they attacked under cover. The Romans could not take it.",
        "Numonius Vala rode off with the cavalry to escape. He was caught and killed, according to Velleius. Varus, wounded, killed himself. According to Velleius, the prefect Ceionius surrendered and later committed suicide, and the prefect Eggius died fighting. When the news of Varus's death spread, the rest of the army gave up: some imitated their commander, others dropped their weapons and waited for death. Dio says that all the men and horses were cut down.",
        { h: "The fort that held out" },
        "The Germans took every Roman fortification but one, which they could not reduce, because they did not know how to besiege and the Roman archers drove them back. When the food ran out, the garrison left on a stormy night. They passed the first two posts, but at the third the women and children, exhausted and frightened, called out to the soldiers and were discovered. The Germans were busy looting and did not pursue at once. The trumpeters sounded a signal that made the enemy think Asprenas was arriving with reinforcements, and the pursuit stopped. Asprenas, in fact, came to help later."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Modern estimates give 15,000 to 20,000 Romans dead. Some prisoners were ransomed, and ordinary soldiers seem to have been enslaved. According to Tacitus, officers were sacrificed in Germanic rituals. Arminius sent Varus's head to Maroboduus, proposing an alliance against Rome. Maroboduus refused, sent the head to Rome to be buried and stayed neutral.",
        "According to Suetonius, Augustus banged his head against the palace walls and shouted: 'Quinctilius Varus, give me back my legions!'. Cassius Dio relates that he tore his clothes and feared an invasion of Italy. As almost no men of military age were left, he drew lots for one in five of those under 35 and one in ten of those over, and whoever was chosen lost property and rights. The legions XVII, XVIII and XIX were never raised again.",
        { h: "Revenge and the eagle" },
        "From AD 14 to 16, Germanicus, a Roman general, campaigned against the Germans. In AD 15, the Romans found at the site of the battle bleached bones and skulls nailed to trees, and buried them. Thusnelda, Arminius's wife, was captured. In AD 16, Germanicus defeated Arminius at Idistaviso and then at the Angrivarian Wall, but was recalled, and Tiberius ordered him to stop. Tacitus blamed Tiberius's jealousy. Two of the three lost [[eagles|águia]] were recovered: one from the Marsi in AD 14 and the XIX's from the Bructeri in AD 15, by Lucius Stertinius. The third came back only in AD 41, recovered from a tribe of the Chauci by Publius Gabinius.",
        "Arminius died in AD 21, poisoned, possibly by relatives who feared his growing power.",
        { h: "Why it matters" },
        "The Rhine became Rome's frontier for centuries. More recent scholars argue that the logistics and economic cost of conquering Germania weighed as much as the defeat itself. Even so, Teutoburg marked the limit of Roman expansion in northern Europe.",
        { h: "Curiosities and controversies" },
        { note: "Where was it? For almost 2,000 years the site was not identified. The Hermann Monument (Arminius), built between 1838 and 1875 near Detmold, marked the place then believed to be the right one. Today it is accepted that the final battle took place at Kalkriese, some 80 km from there, near Bramsche, where systematic excavations began in 1987. They found about 6,000 pieces of Roman equipment, coins countermarked VAR (for Varus) and a turf wall. But there is a debate over whether Kalkriese is the setting of the whole battle or only of its end." },
        { note: "The name 'Hermann' comes from a mistranslation of 'Armin'; the error is often attributed to Luther, but without justification." },
        { note: "The name of the forest: in the Middle Ages it was called Osning. The name 'Teutoburg' arose later, from a passage in Tacitus." },
        { note: "The national myth: in the 19th century, the battle became a symbol of German nationalism, which saw in Arminius a founding hero." }
      ]}
    ]
  },

  guandu: {
    war: "Wars of the late Han dynasty: Cao Cao against Yuan Shao (AD 200)",
    hook: "With far fewer men, Cao Cao waited, endured and burned the enemy's food in a single night.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "By the end of the 2nd century, the [[Han dynasty|dinastia han]] no longer commanded anything. The emperor was a ceremonial figure, and China was divided among [[warlords|senhor da guerra]]. Two of them stood out in the north: Yuan Shao, who controlled the lands north of the Yellow River (the Hebei region), and Cao Cao, who dominated most of what lay south of the river and held in his power Emperor Xian, installed in the new capital, Xu.",
        "War between the two seemed inevitable since 196. Yuan Shao's advisers, Ju Shou and Tian Feng, advised him to attack early, while Cao Cao was still gathering strength. Yuan did not want to, because Cao Cao was still, on paper, his ally.",
        { h: "The road to Guandu" },
        { timeline: [
          ["199", "Cao Cao defeats Lü Bu at Xiapi and becomes master of almost all the land south of the river. He posts troops at Guandu."],
          ["Early 200", "Liu Bei revolts, kills the inspector of Xu Province and takes the province. Cao Cao turns east and defeats him."],
          ["Early 200", "Chen Lin writes a public denunciation of Cao Cao, which works as a declaration of war. Yuan's army marches to Liyang."],
          ["Afterwards", "Skirmishes at Boma and at the Yan Ford."],
          ["Eighth and ninth months (Chinese calendar)", "Trench warfare at Guandu."],
          ["Tenth month", "The raid on Wuchao and Yuan's defeat."]
        ]},
        "Cao Cao had placed garrisons at the fords of the Yellow River: Yu Jin at the Yan Ford, Xiahou Dun at the Meng Ford, Cheng Yu at Juancheng. Yuan Shao, after imprisoning Tian Feng for 'discouraging the army' (he had advised waiting), advanced."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Cao Cao" },
        "Cao Cao had fewer men, but he controlled the emperor and had a working machine of government. His most important advisers were Xun Yu, Xun You, Jia Xu and Cheng Yu. The historian Carl Leban credits the victory to the choice of Guandu as the point of resistance: there, Yuan's supply line was stretched to the maximum. At a moment of food shortage, Cao Cao thought of withdrawing, but Xun Yu wrote him a letter telling him to stay, comparing the situation to the struggle between Chu and Han, and he stayed.",
        { h: "Yuan Shao" },
        "Yuan Shao was stronger in men and land, and tradition describes him as proud and slow to decide. The historian Rafe de Crespigny disagrees with the image of the indecisive man: he argues that Yuan's hold over his territories was more fragile than Cao Cao's and that he had no spare men for secondary operations. The historian Sima Guang blamed the defeat on stubbornness, despite his generosity and ability.",
        { h: "The other names" },
        "On Yuan's side, Ju Shou proposed a war of attrition and was ignored. Shen Pei and Guo Tu were the advisers Yuan listened to most. Zhang He and Gao Lan commanded troops. Xu You, a former adviser of Yuan, deserted to Cao Cao after Shen Pei imprisoned his family, and made the difference."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The sources give Yuan Shao about 110,000 men, including 10,000 cavalry. For Cao Cao, estimates range from some 20,000 to 40,000. Yuan's numbers are generally seen as exaggerated in the ancient sources, and Cao Cao's are uncertain.",
        { note: "The death tolls also vary: Pei Songzhi, commentator on the Sanguozhi (the 'Records of the Three Kingdoms'), records that Cao Cao killed 70,000 or 80,000 of Yuan's men. Sima Guang chose 70,000, and Cao Cao's own report to the emperor speaks of about 70,000 heads cut off. They are probably propaganda exaggerations." },
        { h: "The skirmishes" },
        "Yan Liang, a general of Yuan, besieged Boma. On the advice of Xun You, Cao Cao feigned an attack on the Yan Ford. Yuan pulled troops from Liyang to face the threat, and Yan Liang was left without support. Cao Cao attacked in the east, lifted the siege, and Guan Yu killed Yan Liang. Wen Chou and Liu Bei pursued with 6,000 horsemen. Cao Cao ordered his men to drop their belongings along the way. While Yuan's cavalry stopped to pick up the loot, 600 elite horsemen of Zhang Liao and Xu Huang fell on it. Wen Chou was killed, and Liu Bei fled.",
        { h: "The trench warfare" },
        "Yuan advanced to Yangwu and built fortifications. He ignored the 700 men of Cheng Yu at Juancheng, who would have given him an attack on Cao Cao's eastern flank. Among the plans proposed, Ju Shou argued for attrition and Xu You for seizing the emperor. Yuan chose the direct advance. In the eighth month, Yuan's army advanced south. It built ramps and tall platforms for archers, and Cao Cao's men protected themselves with shields and destroyed the platforms with [[traction catapults|catapulta de tração]]. Yuan tried to dig tunnels under the fort, but Cao Cao dug a ditch to block them. In the ninth month, Xu Huang and Shi Huan attacked Han Meng's depot at Gushi and burned wagons of grain.",
        { h: "Wuchao" },
        "In the tenth month, Chunyu Qiong escorted 10,000 men and large stores of food to Wuchao, about 40 li from Guandu. Ju Shou asked for an outer guard, and Yuan refused. Xu You, who had deserted, told Cao Cao where the food was. The generals doubted, but Xun You and Jia Xu convinced him.",
        "At night, Cao Cao set out with Yue Jin and 5,000 infantry and cavalry, disguised as reinforcements of Yuan. Cao Hong and Xun You stayed in the main camp. Chunyu Qiong's defenses were overcome. He was captured by Yue Jin, who cut off his nose, and most of the food was burned.",
        "Zhang He asked to reinforce Wuchao. Guo Tu preferred to attack Guandu, to force Cao Cao to turn back. Yuan chose Guo Tu's plan and sent Zhang He and Gao Lan against Guandu, with only a small cavalry unit for Wuchao. Cao Cao refused to divide his forces and fought to the end. Zhang He and Gao Lan could not break through and surrendered to Cao Hong. Yuan's army collapsed. Yuan Shao fled north, crossing the Yellow River with about 800 horsemen, what was left of his army. Ju Shou was captured."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "One modern estimate gives about 8,000 dead for Cao Cao and 80,000 for Yuan, but these figures are unreliable. Yuan Shao died in June 202. The youngest son, Yuan Shang, was named heir, and the eldest, Yuan Tan, was resentful. The brothers quarreled, and Cao Cao took advantage. In 207, Yuan Shang and Yuan Xi fled to Gongsun Kang, in Liaodong, who killed them and sent the heads to Cao Cao. By then, most of northern China was in Cao Cao's hands.",
        { h: "Why it matters" },
        "Guandu is the classic example of the weaker side winning through logistics. Cao Cao did not win in direct combat, but by enduring and striking the enemy's food. The battle opened the way for the gradual reunification of the north and, later, for the kingdom of Cao Wei, one of the Three Kingdoms.",
        { h: "Curiosities and controversies" },
        { note: "Readings of history: the nationalist tradition judged the battle by personalities (Cao Cao decisive, Yuan Shao slow and arrogant). Mao Zedong used Guandu as an example of strategic retreat: the strong enemy makes fatal mistakes when the weak one waits. Marxist historians saw a class conflict between the landlord-officials of Yuan and the middle and small landowners of Cao." },
        { note: "The success of the attack on Wuchao depends, in the sources, on Xu You's defection. If he had not deserted after his family was imprisoned, perhaps the battle would have had another result." }
      ]}
    ]
  },

  penhascos: {
    war: "Cao Cao's campaign in southern China (AD 208–209)",
    hook: "The largest army of northern China stopped at a river, and a fire decided the rest.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After defeating Yuan Shao at Guandu, in 200, and defeating the Wuhuan at White Wolf Mountain in the winter of 207, Cao Cao controlled northern China. In 208, he returned to Ye and was named chancellor on his own recommendation, which gave him effective control of the government. In the autumn of that year, the southern campaign began.",
        "The first target was the course of the Yangtze in Jing Province, and the naval base of Jiangling was the key. Liu Biao, governor of Jing, died a few weeks after the start of the campaign. His sons Liu Qi and Liu Cong disputed the succession. Liu Cong came out on top and surrendered to Cao Cao, handing over a considerable fleet and Jiangling as an advance base.",
        { h: "The road to Red Cliffs" },
        { timeline: [
          ["Autumn of 208", "Cao Cao begins the southern campaign. Liu Biao dies; Liu Cong surrenders."],
          ["208", "Cao Cao's elite cavalry catches Liu Bei at Changban and defeats him. Liu Bei flees to Xiakou."],
          ["208", "Zhuge Liang goes to Chaisang to negotiate the alliance with Sun Quan."],
          ["End of 208", "Battle of Red Cliffs."],
          ["End of 209", "Zhou Yu takes Jiangling."]
        ]},
        "Liu Bei, defeated, met at Xiakou Lu Su, an envoy of Sun Quan, lord of Jiangdong, south of the Yangtze. Zhuge Liang, Liu Bei's adviser, went to Chaisang to propose the alliance. Cao Cao had sent a letter to Sun Quan saying he had an army of 800,000 men and suggesting that he surrender."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Cao Cao" },
        "Cao Cao came from a string of victories. Jia Xu advised him to rest an overstretched army, and Cao Cao did not listen. Zhou Yu observed that most of Cao's commanders and soldiers came from the cavalry and infantry, with few veterans of ships, and that the southern land had not truly been conquered.",
        { h: "Sun Quan and Zhou Yu" },
        "At Sun Quan's court, the chief secretary Zhang Zhao argued for surrender, because of the difference in forces. Lu Su and Zhou Yu, Sun Quan's commander in chief, argued for war. Sun Quan cut off a corner of his desk during the assembly and warned that whoever spoke of surrendering would meet the same fate as the desk.",
        { h: "Liu Bei and Zhuge Liang" },
        "Liu Bei, without territory, was the junior partner of the alliance, but Zhuge Liang convinced Sun Quan by saying, according to the sources, that Liu Bei and Liu Qi had 10,000 men each. Zhuge Liang also observed that a powerful arrow, at the end of its flight, cannot pierce even silk.",
        { h: "The other names" },
        "Huang Gai, a division commander of Sun Quan, was the author of the fire attack. Cheng Pu shared command with Zhou Yu. Cao Ren stayed at Jiangling with Xu Huang, and Yue Jin at Xiangyang."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Cao Cao claimed to have 800,000 men. Zhou Yu estimated 220,000 to 240,000, and that is the number used by many authors. Of these, 70,000 to 80,000 were newly recruited men of doubtful loyalty. Among them there were noncombatants, including wives and children of soldiers. The alliance had about 50,000 men: 30,000 of Sun Quan's (under Zhou Yu, Cheng Pu and Lu Su) and some 20,000 of Liu Bei's.",
        { note: "Cao Cao's numbers are the ones that vary most. The 800,000 figure is Cao Cao's own, in a threatening letter, and Zhou Yu's, made to convince Sun Quan, has the same motive to exaggerate. The difference between the two forces existed, but by how much is uncertain." },
        { h: "The terrain" },
        "The Yangtze, too big to cross on foot and with marshy banks north of Lake Dongting. The exact site is not known. The most accepted candidate is the city of Chibi (formerly Puqi), in Hubei, which lies across the river from Wulin and has inscriptions on the cliffs from between the Tang and Song dynasties. There are other proposals: the place at Huangzhou, where the poet Su Dongpo wrote about the red cliffs (rejected by almost all specialists), the Wuhan area and Jiayu County, in Xianning, defended by Rafe de Crespigny, among others, based on an ancient geographical text.",
        { h: "The battle in four moves" },
        "First, the opening. Cao Cao's forces tried to open a bridgehead on the Yangtze and failed. The allied fleet went up the river from Xiakou or Fankou to the Red Cliffs and met Cao Cao's vanguard. The northern soldiers, weakened by disease and forced marches, gained no advantage. Cao Cao withdrew to Wulin, on the north bank, and the allies went back to the south bank.",
        "Second, the chained ships. The text says that Cao Cao tied his ships to one another, possibly to reduce the seasickness of the northern soldiers.",
        "Third, the fire. Huang Gai sent a letter pretending to surrender and prepared a squadron of large warships (the mengchong doujian), filled with firewood, dry reeds and oil. When they reached the middle of the river, the crews set them on fire and fled in small boats. The southeast wind drove the burning, crewless ships into Cao Cao's fleet. Many men and horses burned or drowned. The sources disagree on how many ships there were: 'several dozen' in the Records of the Three Kingdoms, ten in the Zizhi Tongjian.",
        "Fourth, the pursuit. Zhou Yu and the allies attacked with light troops, and Cao Cao's army collapsed. He ordered a general retreat and destroyed part of the ships that remained. The Huarong road, through the marsh north of Lake Dongting, turned to mud in the rain. Sick soldiers carried bundles of grass to cover the ground, and many drowned or were trampled. Zhou Yu and Liu Bei pursued as far as Nan Commandery. Gan Ning opened a bridgehead at Yiling, and Cao Ren's defense of Jiangling prevented a greater disaster. Cao Cao returned to Ye."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "There are no reliable casualty figures. Cao Cao's losses were heavy. At the end of 209, Zhou Yu took Jiangling, and Cao Cao's frontiers pulled back some 160 km, to the Xiangyang region. Liu Qi was named inspector of Jing but died of illness a few months later, and Sun Quan absorbed his lands. Liu Bei claimed the title and occupied a good part of Jing, including four commanderies south of the Yangtze. Zhou Yu died in 210.",
        { h: "Why it matters" },
        "Cao Cao never again commanded so large a fleet. Control of Jing gave Liu Bei access to Yi Province, and the alliance that won at Chibi set the stage for the kingdoms of Shu Han and Eastern Wu, in the Three Kingdoms (220–280). It was the beginning of a division between north and south that lasted for centuries.",
        { h: "Curiosities and controversies" },
        { note: "History and novel: the Romance of the Three Kingdoms, attributed to Luo Guanzhong (about 1315 to 1400), is, according to the historian Zhang Xuecheng, some 70% fact and 30% fiction. Famous scenes from the novel, such as Zhuge Liang borrowing arrows with straw boats, Zhuge Liang 'summoning' the east wind and Guan Yu letting Cao Cao escape on the Huarong road, do not appear in the chronicles. The fire plan, in the chronicles, is Huang Gai's, and not Zhuge Liang's." },
        { note: "Cao Cao never accepted that Zhou Yu had won. According to the sources, he said that he burned the ships himself and withdrew because of illness, and that it was not fair for Zhou Yu to take the credit." },
        { note: "The causes of the defeat: no secure base in the south, little local support, an infantry and cavalry army turned into a navy with only a few days of training, seasickness and tropical diseases. Zhuge Liang summed it up: the arrow that reaches the end of its flight does not pierce silk." }
      ]}
    ]
  },

  pontemilvia: {
    war: "Civil wars of the Tetrarchy (306–324)",
    hook: "A Roman army was pushed into the Tiber, and the empire changed religion.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 1 May 305, the emperor Diocletian abdicated. The [[Tetrarchy|tetrarquia]] he had created, with four rulers, had no clear rule of succession, and his heirs quarreled almost at once.",
        "On 25 July 306, Constantius, emperor of the West, died at York. The troops proclaimed his son Constantine Augustus. Galerius, the other senior emperor, recognized him only as Caesar. On 28 October of the same year, in Rome, Maxentius, son of the former emperor Maximian, took the title. Galerius treated him as a [[usurper|usurpador]].",
        { h: "The road to the Milvian Bridge" },
        { timeline: [
          ["305", "Diocletian abdicates."],
          ["306", "Constantine is proclaimed at York. Maxentius takes Rome."],
          ["307", "Severus, sent by Galerius, is abandoned by his troops and executed. Galerius marches on Rome in the autumn and fails."],
          ["Spring of 312", "Constantine crosses the Alps with about 40,000 men."],
          ["312", "Victories near Turin and at Verona; the praetorian prefect Ruricius Pompeianus dies."],
          ["28 October 312", "Battle of the Milvian Bridge."]
        ]},
        "By 312, relations had soured for good, even though Constantine was married to Fausta, Maxentius's sister. According to historians, Constantine crossed the Cottian Alps with about 40,000 men, part of his army. He took Segusium, won at Turin and advanced through Milan, Brescia and Verona. Aquileia, Mutina and Ravenna came afterward, and the road to Rome lay open."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Constantine" },
        "Constantine was about 40 years old (the most accepted date for his birth is 27 February 272). He was an experienced general, tied to his father's army, and came from Gaul. His central decision was to march on Rome without waiting for Maxentius to come to him, which forced the enemy to decide. His religious role after the battle is the most debated part of his life.",
        { h: "Maxentius" },
        "Maxentius had Rome, plenty of stored food and, on two occasions (against Severus and against Galerius), had won simply by waiting behind the walls. That was expected again. Instead, he came out to fight. The sources explain it in different ways: Lactantius and Eusebius, both Christians, speak of divine intervention; Zosimus, a pagan, of superstition.",
        { h: "The other names" },
        "The praetorian prefect Ruricius Pompeianus, Maxentius's most important general, died at Verona. The [[Praetorian Guard|pretorianos]] would be the core of Maxentius's army on the last day."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Modern estimates give Constantine 20,000 to 25,000 men (or about 40,000, depending on the author) and Maxentius about 25,000. Zosimus claims 90,000 infantry and 8,000 horsemen for Constantine and 170,000 plus 18,000 horsemen for Maxentius, numbers that historians consider quite implausible.",
        { note: "The ancient sources are partial. Lactantius and Eusebius wrote as Christians, and the oldest account of the vision postdates the battle. Zosimus's numbers should not be taken seriously." },
        { h: "The terrain" },
        "The Milvian Bridge carried the Via Flaminia over the Tiber, north of Rome. Maxentius cut the bridges over the Tiber and had a [[pontoon bridge|pontão]] built beside it, probably after partly damaging the stone bridge. Zosimus describes a bridge in two parts joined by iron fastenings. The sources disagree on whether the bridge was a deliberate trap.",
        { h: "The vision" },
        "According to Lactantius, on the night before the battle Constantine was told in a dream to mark his soldiers' shields with the 'heavenly sign', probably a staurogram (a cross with the top rounded like a P), although Lactantius is not precise. According to Eusebius, in his first account (the Ecclesiastical History), God helped Constantine, but without a vision. In the Life of Constantine, Eusebius describes another scene: during the march, at an unspecified place, Constantine saw a cross of light above the sun with the Greek words that translate as 'By this sign, conquer', and then dreamed that he should use the sign. It is in this account that the labarum with the [[chi-rho|crisma]] appears.",
        { h: "Maxentius's decision" },
        "The battle fell on the anniversary of Maxentius's rise to power. According to reports, the Sibylline Books were said to have declared that on 28 October an enemy of the Romans would die, and Maxentius read this in his own favor. Lactantius adds that the people acclaimed Constantine at the circus games. Maxentius formed his army with the Tiber at his back, which, according to Nixon and Rodgers, left little room to regroup.",
        { h: "The battle in four moves" },
        "First, Constantine, who camped near Prima Porta, approached along the Via Flaminia. His cavalry attacked Maxentius's cavalry first and broke it.",
        "Second, Constantine's infantry advanced. Maxentius's troops fought well, but were pushed toward the Tiber.",
        "Third, Maxentius ordered a retreat to regroup in Rome. The bridge was the only way out, and Constantine's men inflicted heavy losses on those falling back. The pontoon beside the Milvian Bridge collapsed under the crowd, and those left on the north bank were captured or killed. The Praetorian Guard held out on the north bank to the end, according to the account, 'covering with their bodies the place they had chosen to fight'.",
        "Fourth, the death of Maxentius. He drowned in the Tiber, trying to swim across or after falling from his horse. Lactantius says he fled onto the broken bridge and was pushed into the river by the crowd."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Constantine entered Rome on 29 October, in an arrival ceremony with popular acclaim. Maxentius's body was pulled from the Tiber and beheaded, and the head was paraded through the streets and sent to Carthage as proof. Africa resisted no more. Constantine visited the Senate and promised to restore the senators' privileges and not to take revenge on Maxentius's partisans. Maxentius's memory was condemned, and his laws annulled. Constantine took over his building works, such as the Temple of Romulus and the Basilica of Maxentius.",
        "The Praetorian Guard and the equites singulares were disbanded. It is believed that Constantine replaced them with cavalry units called the Scholae Palatinae.",
        { h: "Why it matters" },
        "The following year, Constantine and Licinius issued the Edict of Milan, which officially recognized and tolerated Christianity. For the historian Paul K. Davis, the victory gave Constantine total control of the West and opened the way for the dominance of Christianity. The Arch of Constantine, erected to celebrate the victory, attributes the triumph to divine intervention but carries no openly Christian symbols, and one frieze shows Constantine's cavalry pushing Maxentius's men into the Tiber.",
        { h: "Curiosities and controversies" },
        { note: "Did the vision happen? John Julius Norwich argued that the vision of the cross 'never occurred', since no history of the time mentions it, but admitted that Constantine probably had 'some profound spiritual experience'. Some scholars link the vision to a solar phenomenon, the sun dog halo. In 313, Constantine's coins still showed him with the Unconquered Sun." },
        { note: "The sign: the chi-rho and the labarum appear clearly only around 317, on a silver coin, and were used more widely afterward, in the war against Licinius." },
        { note: "In the procession of the entry into Rome, the accounts do not say that Constantine stopped at the Temple of Jupiter Capitolinus for the traditional sacrifice. But this silence does not prove that he was already a Christian." }
      ]}
    ]
  },

  adrianopolis: {
    war: "Gothic War (376–382)",
    hook: "The emperor who would not wait for reinforcements lost his army and his life on a summer afternoon.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 376, the Tervingi, a Gothic people, arrived at the Danube asking for asylum. The Huns had driven them from their lands. The chiefs Alavivus and Fritigern asked the eastern emperor, Valens, to settle in Roman territory. Valens accepted, as [[federates|federados]], expecting them to be farmers and soldiers.",
        "After the crossing, the Roman commanders of the province, Lupicinus and Maximus, mistreated them, and the Goths revolted. Valens asked for help from Gratian, emperor of the West and his nephew, who sent Frigeridus and Richomeres. For two years, the two sides fought without a clear victory.",
        { h: "The road to Adrianople" },
        { timeline: [
          ["376", "The Goths cross the Danube and soon revolt."],
          ["376–378", "Two years of fighting with no clear winner."],
          ["30 May 378", "Valens arrives at Constantinople."],
          ["6 August 378", "Scouts report that about 10,000 Goths are advancing, 25 km north of Adrianople."],
          ["8 August 378", "Fritigern sends an envoy to offer peace. Valens refuses."],
          ["9 August 378", "The battle."]
        ]},
        "In 378, Valens took personal command of the campaign, bringing troops from Syria. He sent Sebastianus, newly arrived from Italy, to reorganize the armies of Thrace. Sebastianus took 2,000 legionaries and ambushed small groups of Goths. Gratian defeated the Lentienses Alamanni near Argentaria before heading east. Valens fortified himself near Adrianople with ditches and a palisade."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Valens" },
        "According to Ammianus Marcellinus, Valens was jealous of the success of his young nephew Gratian and wanted to win before he arrived. Richomeres brought a letter from Gratian asking him to wait, and the officer Victor also advised waiting. Sebastianus and the courtiers pressed for immediate battle. Valens decided to fight.",
        { h: "Fritigern" },
        "Chief of the Tervingi, Fritigern knew that time was on his side: his cavalry, out foraging, would return. So, on the eve, he sent an envoy to Valens, a Christian presbyter, offering peace and an alliance in exchange for land in Thrace. On the day of the battle, he stalled, with requests for hostages.",
        { h: "The other names" },
        "Alatheus and Saphrax led the Greuthungi, who included Alans. On the Roman side, Bacurius, the Iberian, commanded archers and shield-bearers, and Trajan, who had been commander of the infantry, was with Valens."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are very uncertain. For the Romans, Peter Heather gives about 15,000 (10,000 infantry and 5,000 cavalry), and Williams and Friell, 30,000. For the Goths, Delbrück gives 12,000 to 15,000, and Williams and Friell, 20,000. Valens gathered seven legions of 700 to 1,000 men each, mounted archers and the scholae, the imperial guard.",
        { note: "How much cavalry the Goths had is a historical debate. Charles Oman (1885) argued that cavalry was the greater part of the Gothic force. T. S. Burns (1973) and other more recent scholars say that most were infantry, although Fritigern's cavalry was decisive." },
        { h: "The terrain" },
        "The exact site is not known. There are three proposals: north of the city, west of the river Tonzos and east of the Hebros; to the north, east of the Tonzos, near Muratçalı; or east of Adrianople, near Demirhanlı. The Goths were on a hill, with the [[circle of wagons|círculo de carroças]] guarding families and belongings.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on the morning of 9 August, Valens left Adrianople, with the treasury and the administration under guard, and marched over difficult terrain. He reached the Gothic camp, according to Ammianus, by the eighth hour of the day, in the early afternoon, with his soldiers tired and thirsty. He placed the cavalry in front, on the right; the cavalry of the left was still coming along the roads.",
        "Second, the Goths had a plan: to stall. They burned the fields to choke the Romans with smoke and heat and began to negotiate. Valens rejected the first envoys, of low rank, and demanded chiefs. Fritigern then asked for high-ranking hostages, and Richomeres offered to go.",
        "Third, as Richomeres was approaching, the archers and shield-bearers of Bacurius and Cassius, without orders, attacked early. They were repulsed and fell back in disorder, which kept the envoy from getting through and gave the combat a very bad start.",
        "Fourth, the Roman left wing, which advanced as far as the wagons, arrived too late and was abandoned by the rest of the cavalry.",
        "Fifth, the Gothic cavalry, with Alatheus, Saphrax and some Alans, came back from foraging 'like lightning', according to Ammianus, and attacked. The Goths united: Fritigern with the Tervingi, Alatheus and Saphrax with the Greuthungi.",
        "Sixth, the Roman cavalry was routed, and the infantry, pressed together and with no room, was pushed back. Ammianus says it was packed so tightly that it could not draw a sword. Dust and arrows darkened the sky.",
        "Seventh, in the heat of the afternoon, with the soldiers exhausted and thirsty, the Roman line broke and everyone fled. The heavy armor and long shields kept the Romans from maneuvering.",
        "Eighth, the night. The Romans fled, were trampled or killed by their own comrades, and the Gothic cavalry killed until dark.",
        { h: "The end of Valens" },
        "According to Ammianus, Valens was struck by an arrow at nightfall, among ordinary soldiers, and his body was never found. In a second version, he was carried wounded to a fortified country house with bodyguards and a few eunuchs. The Goths, not knowing who he was, set fire to the house after arrows shot from the balcony stopped the attack. A bodyguard jumped from the window, was captured, and later escaped to tell the story."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Peter Heather estimates 10,000 to 15,000 Romans dead, and Williams and Friell, 20,000, which would be about two thirds of the force. Ammianus says that 'barely a third' of the army escaped, and compares the disaster only to Cannae. Among the dead were Valens, Sebastianus, Trajan, Equitius (a relative of Valens), Valerian (master of the stables), Potentius (a tribune) and 35 [[tribunes|tribuno]]. Richomeres and Saturninus survived.",
        "The Goths went to Adrianople, where the treasury and the imperial insignia were, and tried to take it. They failed, and Ammianus relates attempts, a storm and the withdrawal.",
        { h: "Why it matters" },
        "Ammianus calls the defeat the worst since Edessa. It destroyed the core of the eastern Roman army, killed valuable administrators and emptied the arsenals of the Danube provinces. Theodosius I, Valens's successor, partly subdued the Goths and readmitted them as federates: they were never expelled, exterminated or assimilated.",
        { h: "Curiosities and controversies" },
        { note: "Was it the beginning of the end? The battle is 'often considered' the start of the series of events that led to the fall of the Western Empire, but this is a disputed claim: the empire did not end there, because its military power was only temporarily impaired." },
        { note: "The cavalry thesis: in 1885, Charles Oman argued that heavy cavalry defeated the Roman infantry and ushered in the age of the medieval knight. Burns contested this in 1973. The medieval knight would only emerge several centuries later." },
        { note: "Ammianus compares the end of Valens, burned in a tower without burial, to that of the second Scipio. He also mentions that Decius, the Caesar, is said to have fallen from his horse into a marsh and drowned." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  accio: {
    terrain: [
      { t: "sea", x: 16, y: 0, w: 84, h: 70, l: "Ionian Sea" },
      { t: "note", x: 8, y: 36, l: "Coast" },
      { t: "note", x: 90, y: 66, l: "Peloponnese ↓" }
    ],
    units: [
      { id: "aR", s: "a", k: "ship", w: 20, h: 3, l: "Lurius (right)" },
      { id: "aC", s: "a", k: "ship", w: 20, h: 3, l: "Arruntius (center)" },
      { id: "aL", s: "a", k: "ship", w: 20, h: 3, l: "Agrippa (left)" },
      { id: "aCamp", s: "a", k: "camp", w: 12, h: 5, l: "Taurus's army" },
      { id: "bL", s: "b", k: "ship", w: 20, h: 3, l: "Sosius (left)" },
      { id: "bC", s: "b", k: "ship", w: 20, h: 3, l: "Octavius and Insteius (center)" },
      { id: "bA", s: "b", k: "ship", w: 8, h: 3, l: "Antony" },
      { id: "bR", s: "b", k: "ship", w: 16, h: 3, l: "Publicola (right)" },
      { id: "bCl", s: "b", k: "ship", w: 14, h: 3, l: "Cleopatra (60 ships)" },
      { id: "bCamp", s: "b", k: "camp", w: 12, h: 5, l: "Canidius's army" }
    ],
    steps: [
      { t: "After days of storm, the sea calms. Antony sails out through the strait and forms his line: Sosius on the left, Octavius and Insteius in the center, Publicola and himself on the right. Cleopatra stays behind. Octavian waits in the open sea.",
        p: { aR: [34, 14], aC: [58, 12], aL: [86, 14], aCamp: [9, 9], bL: [30, 42], bC: [54, 42], bA: [70, 42], bR: [86, 42], bCl: [56, 57], bCamp: [9, 60] } },
      { t: "According to Dio, Octavian advances his wings in a half-moon to try to envelop the enemy line. Antony orders his men to stay still in the narrow gulf and not to break formation.",
        p: { aR: [32, 25, -8], aC: [58, 20], aL: [88, 25, 8] } },
      { t: "Sosius advances on Antony's left. Plutarch says Octavian orders his right to pull back, to draw the enemy ships into open water.",
        p: { bL: [28, 36], aR: [26, 18, -8] } },
      { t: "Antony's tall, heavy ships ram poorly, and the fight turns into a kind of siege, with boarding, arrows and catapults. Octavian's men hurl fire, and the flames spread.",
        p: { aC: [58, 30], bC: [54, 36], bL: [30, 32], aR: [30, 26, -8] } },
      { t: "Agrippa extends the left wing to outflank Antony's right. Publicola follows him and separates from the center, which falls into disorder.",
        p: { aL: [92, 36, 25], bR: [92, 46, 15], bC: [52, 38] } },
      { t: "Cleopatra's 60 ships hoist their sails and sail out through the middle of the fight, heading south. According to Dio, she lost patience. For others, it was part of an escape plan.",
        p: { bCl: [76, 42] } },
      { t: "Antony thinks the battle is lost, leaves his flagship for a smaller one and follows Cleopatra, with a few companions.",
        p: { bCl: [94, 62], bA: [82, 56] } },
      { t: "The leaderless fleet keeps fighting. The men throw the towers overboard to lighten the ships. In the late afternoon, with a heavy sea, it surrenders. Plutarch cites Octavian's own count: no more than 5,000 dead and 300 ships captured.",
        p: { aC: [54, 38], aR: [30, 34, -8], aL: [88, 40, 25] }, x: ["bL", "bC", "bR"] },
      { t: "Antony's army, with 19 legions according to Plutarch, waits seven days for Canidius. When he flees by night, the soldiers surrender to the victor.",
        p: { aCamp: [9, 54], bCamp: [9, 64] }, x: ["bCamp"] }
    ]
  },

  adrianopolis: {
    terrain: [
      { t: "hill", x: 50, y: 13, rx: 38, ry: 11, l: "Gothic hill" },
      { t: "note", x: 8, y: 67, l: "Adrianople ↓ (imperial treasury)" }
    ],
    units: [
      { id: "gWag", s: "a", k: "camp", w: 20, h: 8, l: "Circle of wagons" },
      { id: "gInf", s: "a", k: "inf", w: 30, h: 5, l: "Tervingi (Fritigern)" },
      { id: "gCav", s: "a", k: "cav", w: 14, h: 5, l: "Cavalry of Alatheus and Saphrax" },
      { id: "rRC", s: "b", k: "cav", w: 16, h: 5, l: "Right-wing cavalry" },
      { id: "rInf", s: "b", k: "inf", w: 30, h: 5, l: "Roman infantry" },
      { id: "rLC", s: "b", k: "cav", w: 16, h: 5, l: "Left-wing cavalry" },
      { id: "rArch", s: "b", k: "inf", w: 12, h: 3, l: "Archers of Bacurius and Cassius" }
    ],
    steps: [
      { t: "The Goths are on a hill, with their families in the circle of wagons. Their cavalry has gone out foraging. The Romans arrive in the mid-afternoon, tired and thirsty, and the left-wing cavalry is still coming along the roads.",
        p: { gWag: [50, 8], gInf: [50, 21], gCav: [92, 5], rRC: [78, 46], rInf: [50, 50], rLC: [14, 62], rArch: [50, 44] } },
      { t: "The Goths burn the fields to choke the Romans with smoke and heat, and Fritigern stalls, asking for hostages. He is waiting for the cavalry to return.",
        p: { rInf: [50, 45], rRC: [78, 42], rLC: [26, 56], rArch: [50, 39] } },
      { t: "When Richomeres goes as a hostage, the archers of Bacurius and Cassius attack without orders, are repulsed and fall back in disorder.",
        p: { rArch: [50, 30] } },
      { t: "The Roman left wing advances to the wagons, but arrives late and is cut off from the rest.",
        p: { rArch: [50, 36], rLC: [30, 18], rInf: [50, 41] } },
      { t: "The Gothic cavalry returns from foraging and attacks 'like lightning', says Ammianus.",
        p: { gCav: [86, 26] } },
      { t: "The Roman cavalry is routed. The infantry, pressed together, has no room to use its swords.",
        p: { gCav: [72, 38], rRC: [80, 48], rInf: [50, 44] }, x: ["rRC"] },
      { t: "The isolated left wing is crushed. By the middle of the afternoon, the Roman line breaks.",
        p: { gInf: [42, 26], rLC: [24, 24], rInf: [50, 47] }, x: ["rLC", "rArch"] },
      { t: "The Romans flee. The Gothic cavalry kills until night. Two thirds of the army die and Valens is never found.",
        p: { gCav: [60, 56], gInf: [48, 36], rInf: [44, 62] }, x: ["rInf"] }
    ]
  }
});
