// In-depth battles, batch bf: lachish, aegospotami, siracusa, mantineia, ipsos.
// Checked against the English, Portuguese and Italian Wikipedia articles on the Siege of Lachish, the Battle of
// Aegospotami, the Sicilian Expedition, the Battle of Mantinea (362 BC) and the Battle of Ipsus, against Xenophon's
// Hellenica (book 2 and book 7.5, Perseus and Livius translations), Thucydides book 7 (Crawley translation),
// Plutarch's Life of Demetrius, Diodorus Siculus, and the Lachish excavation reports as summarised by Ussishkin and
// the 2021 Garfinkel and others study of the siege ramp. Where sources disagree the text says so.
// Formation diagrams are schematic: ancient authors give the moves, not exact positions.

Object.assign(GLOSSARY, {
  "diádocos": "The 'successors' of Alexander the Great: Macedonian generals who, after his death in 323 BC, fought for decades over the pieces of the empire.",
  "rampa de cerco": "An inclined slope of earth and stones built up to the top of a wall, so that rams and soldiers can climb it. It takes a great deal of work, and the enemy tries to interfere.",
  "contrarrampa": "A ramp that the defenders build inside the wall, at the same spot, to raise the height of the defense as fast as the attacker's ramp rises.",
  "talento": "A unit of weight used as money in the ancient world. It was an enormous amount of silver: one talent paid about a month of wages for the whole crew of a trireme.",
  "navarco": "Admiral of Sparta's fleet. Spartan law allowed only one term, which is why Lysander commanded as 'vice-admiral' in 405 BC.",
  "hermas": "Stone pillars topped with the head of the god Hermes, set at street corners and doorways in Athens. In 415 BC, almost all of them woke up with their faces broken, and the city saw an ill omen and a conspiracy in it.",
  "epípolas": "The high, sloping plateau that looms over Syracuse from behind. Whoever held it dominated the city, which is why the siege revolved around it.",
  "proa reforçada": "A short, thick bow with beams on the outside, which the Syracusans used to strike the thinner bows of the Athenian triremes head-on without breaking their own.",
  "latomias": "The stone quarries of Syracuse: deep, open pits used as a prison after the battle. The heat by day and the cold by night killed the weak.",
  "hegemonia": "Leadership of one city over the others, without being a formal empire. Athens, Sparta and Thebes each had their turn as the dominant power in Greece.",
  "coluna profunda": "A formation in which the soldiers stand in many ranks instead of a few. It gives up length but gains striking power at a single point.",
  "hamippoi": "Light infantry that fought mixed in with the cavalry, running alongside the horsemen and supporting them. The Thebans and Thessalians used this device at Mantinea.",
  "deportação": "Forcibly removing a population from its home and taking it far away. The Assyrians did this on purpose, to break resistance and strip conquered peoples of their identity."
});

Object.assign(DEEP, {
  lachish: {
    war: "Sennacherib's campaign against Judah (701 BC)",
    hook: "The Assyrians built a ramp of millions of stones, and the defenders answered with another one on the inside. The siege was carved in stone.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of the 8th century BC, Assyria was the greatest power in the Middle East. Its army, built on iron and discipline, had bent almost every kingdom in the region, and they paid tribute every year. When King Sargon II died in 705 BC, several kingdoms decided it was time to stop paying.",
        "Among the rebels was Hezekiah, king of Judah, a small mountain kingdom around Jerusalem. He fortified cities, stored water and looked for allies, above all Egypt. The new Assyrian king, Sennacherib, spent his first years sorting out problems in Babylon. In 701 BC, he marched west.",
        { h: "The road to Lachish" },
        { timeline: [
          ["705 BC", "Sargon II dies. Kingdoms of the Middle East, Judah among them, stop paying tribute."],
          ["701 BC", "Sennacherib marches west along the coast. He subdues the Phoenician cities and defeats the rebels of Ekron, in Philistia."],
          ["701 BC", "He enters Judah and attacks its fortified cities. Lachish, the kingdom's second most important city, is the largest of them on the road to Jerusalem."],
          ["701 BC", "While besieging Lachish, Sennacherib sends an envoy to Jerusalem to demand Hezekiah's surrender."]
        ]},
        "The sources do not say in which month the siege began or how long it lasted. All we know is that it happened before Jerusalem was threatened."
      ]},
      { n: "02", title: "The leading figures", blocks: [
        { h: "Sennacherib, king of Assyria" },
        "The son of Sargon II, he came to the throne in 705 BC and moved the capital to Nineveh, where he built an enormous palace. After the siege, he had the conquest of Lachish carved on the walls of a room in that palace, as if it were the most important victory of his reign. His annals, for their part, speak of 46 conquered cities of Judah and of Hezekiah 'shut up like a bird in a cage' in Jerusalem.",
        { h: "Hezekiah, king of Judah" },
        "He ruled a small kingdom and tried to play the game of the great powers. The Bible gives him the role of a pious king and fortifier of Jerusalem. At Lachish, he was not the one in command: the name of the officer who led the defense has not come down to us.",
        { h: "The two armies" },
        "The Assyrians had a war machine specialized in sieges: archers, spearmen with wicker shields, slingers, battering rams and engineers. On Judah's side there was the city garrison, reinforced by local militias and mercenaries. No numbers are known for either side."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The terrain" },
        "Lachish stood on an isolated hill, the tell, at a strategic point in the Shephelah, the foothills between the coast and the mountains of Judah. It had two walls, a mudbrick one at the top and another lower down, and a large fortified gateway. The excavations, led by David Ussishkin between 1973 and 1994, show that the main attack fell on the southwest corner.",
        { h: "The siege in eight moves" },
        { formation: true },
        "First, the Assyrians surrounded the hill. The archers and slingers moved up in ranks, protected by spearmen with large wicker shields. Their job was to clear the defenders off the walls with a rain of arrows and stones, so that the engineers could work.",
        "Second, the engineers built the [[siege ramp|rampa de cerco]]. This is the most impressive part of the siege: a study published in 2021 by Garfinkel and others estimated that the ramp took about 3 million stones and that hundreds of workers, day and night, would need about three weeks to raise it. It still exists today, and it is the only Assyrian siege ramp known.",
        "Third, the defenders reacted. Inside the wall, at the point of the ramp, Ussishkin found the remains of a [[counter-ramp|contrarrampa]]: a structure of earth and stones that the defenders raised so that the top of the wall would always stay above the top of the ramp. It was a race between engineers, under a hail of arrows.",
        "Fourth, battering rams climbed the ramp. The reliefs show the rams on the ramp, with soldiers pouring water over the machines to put out the fire thrown by the defenders. On top of the wall, the men of Judah shot arrows and hurled stones and burning torches, and the arrowheads and sling stones found by archaeologists fit the scene.",
        "Fifth, the wall gave way. The Assyrians poured into the city, and the defenders fell back or tried to flee down the other side of the hill. After the fall, the city was burned: the excavations found a destruction layer, with ash and the remains of weapons.",
        { h: "What came after the fall" },
        "The reliefs from Nineveh go on with scenes after the fall: prisoners marching into exile with their families and baggage, soldiers carrying off plunder, and Sennacherib seated on a throne in front of the city, receiving the spoils. The reliefs also show men being executed in cruel ways, among them two who were flayed, and a caption identifies the city as Lachish. We do not know how many inhabitants were deported.",
        { note: "The mass grave: in a cave near Lachish, the bones of many hundreds, perhaps about 1,500 people, were found. Many link the find to the destruction of 701 BC, but the link and the number are debated among specialists, and no excavation report confirms them conclusively." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Lachish was destroyed, and much of Judah devastated. Sennacherib, still at Lachish, received a heavy tribute from Hezekiah: according to the Assyrian annals, 30 [[talents|talento]] of gold and 800 of silver; according to the Bible, 30 of gold and 300 of silver. Even so, he sent an envoy to Jerusalem to demand the city's surrender. Jerusalem did not fall.",
        "How and why Jerusalem was spared is one of the great controversies of ancient history. The Bible speaks of a divine intervention that killed the Assyrian army. The Assyrian annals say nothing of the kind: they tell that Hezekiah paid and stayed locked in the city 'like a bird in a cage'. Historians debate the two versions.",
        { h: "Why it matters" },
        "Few battles of antiquity are documented from so many angles: the Bible, the Assyrian annals, the reliefs of the palace at Nineveh, now in the British Museum, and the excavations at Lachish. What is most striking is that the different sources agree on many details. The reliefs are the most complete picture of a siege from all of antiquity.",
        "The [[deportation|deportação]] of the inhabitants is also part of the Assyrian method: taking a people out of their land to break their identity and their will to rebel. A little more than a century later, in 586 BC, Judah would be destroyed by Babylon, which also deported its inhabitants.",
        { h: "Curiosities and controversies" },
        { note: "The scratched face: on the relief, the face of King Sennacherib was scratched. Some scholars think this happened at the fall of Nineveh in 612 BC, when the palace was looted." },
        { note: "The biblical sources: the siege of Lachish is mentioned in 2 Kings 18 and 2 Chronicles 32. The Bible says less about the siege than about the events at Jerusalem. Sennacherib's Prism, a clay cylinder with the king's annals, does not describe the siege of Lachish. What ties the scene on the reliefs to Lachish are the captions written on the reliefs themselves." }
      ]}
    ]
  },

  aegospotami: {
    war: "Peloponnesian War: final phase (413–404 BC)",
    hook: "The Athenians sailed out four days in a row to provoke the enemy. On the fifth, the enemy came to get them on the beach.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 405 BC, the war between Athens and Sparta had already lasted 26 years. After the disaster in Sicily, in 413, Athens had lost an entire fleet and half its allies, but it still fought on. Sparta, which used to have only a land army, learned to build ships with money from Persia, a new and very rich ally.",
        "The man who made this turnaround was Lysander, a Spartan admiral and a friend of the Persian prince Cyrus. In 406 BC, the Athenians still won a naval battle at Arginusae, but in Athens six of the victorious generals were sentenced to death, and the fleet lost experienced commanders. In 405 BC, Lysander took command of the Spartan fleet again.",
        { h: "The road to Aegospotami" },
        { timeline: [
          ["413 BC", "Athenian disaster in Sicily."],
          ["406 BC", "Athens wins at Arginusae, but condemns six of its generals to death."],
          ["405 BC", "Lysander takes command again. He passes through the Aegean and enters the Hellespont, the strait of the Dardanelles."],
          ["405 BC", "He takes Lampsacus, on the Asian shore, and threatens the route of the grain that came from the Black Sea."],
          ["405 BC", "The Athenians follow Lysander and camp on the other side of the strait, at Aegospotami."]
        ]},
        "The Hellespont was Athens's artery: the city depended on Black Sea grain to eat. Whoever controlled the strait controlled Athens's hunger."
      ]},
      { n: "02", title: "The leading figures", blocks: [
        { h: "Lysander of Sparta" },
        "A man of modest origins, he had ambition and a gift rare among Spartans: political patience. Since Spartan law allowed the [[navarch|navarco]] only one term, he was named 'vice-admiral' under the official commander. In 405 BC, he chose not to fight: he waited for the enemy to make a mistake.",
        { h: "The Athenian generals" },
        "The Athenian fleet was under several commanders: Conon, the most capable, Philocles, Adeimantus, Tydeus and Menander. They were brave men, but they let routine swallow prudence. None of them had the authority to force the others.",
        { h: "Alcibiades, the exile" },
        "The former Athenian general, who had fled the city ten years earlier, lived in a castle of his own near the camp. According to Xenophon, he went to the generals and advised the fleet to move to Sestos, where there was a harbor and a city, instead of staying on an open beach. The generals sent him away. He would die soon after, still in exile."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces and the terrain" },
        "Xenophon says the Athenian fleet had 180 ships; the Spartan number is not given by him and is uncertain. At that point, the Hellespont is about 2.5 kilometers wide. Lysander had the harbor of Lampsacus, with the city behind it, to which he could bring supplies. The Athenians had only a beach, at Aegospotami, and the nearest city where they could find food was Sestos.",
        { h: "The four-day routine" },
        { formation: true },
        "First, the two sides took position, face to face, on the two shores. Second, every day, the Athenians sailed out in the morning in battle formation and waited in front of the harbor, and Lysander did not come out. At the end of the day, they went back. Lysander sent fast ships after them, to see where they landed, and only then let his men rest.",
        "Third, Alcibiades asked the generals to leave the place. They did not listen. Fourth, the Athenians, with no harbor, had to send men far away for food and water. On the fifth day, the routine was the same until the end of the afternoon: the Athenians came back and scattered ashore.",
        "Fifth, this was the signal Lysander was waiting for. According to Xenophon, his lookout ships raised a shield, and the whole fleet crossed the strait toward the beach. The Athenians, with most of their crews ashore, had no time to do anything.",
        "Sixth, most of the ships were captured on the beach, empty or almost empty. There was no real naval battle. There was a capture: Xenophon says that Lysander took almost all the ships and many men.",
        "Seventh, nine ships escaped: Conon, with his own and seven others, and the sacred trireme Paralus. Conon, knowing that nothing awaited him in Athens, went to Cyprus. The Paralus carried the news to Athens.",
        { note: "Two versions: Xenophon, who wrote shortly after the events, says there was no fighting at sea. Diodorus Siculus, much later, tells that Philocles sailed out with 30 ships, was defeated, and the rest of the fleet was caught unprepared. Diodorus is considered less reliable, but both agree on the outcome." },
        { h: "The prisoners" },
        "According to the tradition that comes from Xenophon, about 3,000 Athenians were captured and killed. Lysander justified the act by recalling that Philocles was said to have thrown the crews of two enemy ships overboard. Adeimantus, one of the generals, was the only one spared, which led ancient and modern writers to suspect treason. It was never proved."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Athens lost almost all the fleet it still had. The Paralus reached Piraeus at night with the news, and Xenophon describes the wailing that passed from house to house, from the harbor to the city: everyone feared receiving the same treatment Athens had given to the people of Melos and other cities.",
        "Lysander took Athens's allied cities one by one and closed the siege by sea and by land. Without grain, Athens starved for months and surrendered in the spring of 404 BC. The walls were torn down to the sound of flutes, according to Xenophon, and democracy was replaced by a pro-Sparta oligarchy, the Thirty Tyrants.",
        { h: "Why it matters" },
        "It was the last battle of the Peloponnesian War and the one that decided it. The war had lasted 27 years. Sparta became the dominant power in Greece, but Spartan [[hegemony|hegemonia]] lasted a little over 30 years, until Leuctra, in 371 BC.",
        "It is also a classic example of what happens to commanders who repeat the same routine in front of a patient enemy.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: Xenophon speaks of 180 Athenian ships, and other modern texts of 170. For the Spartans, there is no reliable number." },
        { note: "Was there treason? Ancient writers such as the orator Lysias accused Adeimantus of handing over the fleet. Some modern historians find the suspicion plausible, but there is no proof, and the generals' negligence is enough to explain the disaster." }
      ]}
    ]
  },

  siracusa: {
    war: "Peloponnesian War: the Sicilian Expedition (415–413 BC)",
    hook: "Athens sent out its greatest expedition. Not one of the ships came back, and hardly any of the men.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 421 BC, Athens and Sparta signed a peace, the Peace of Nicias, that settled nothing. Five years later, in 416 BC, the Sicilian city of Segesta asked Athens for help against its neighbor Selinus, an ally of Syracuse. The envoys promised a great deal of silver. In Athens, the young Alcibiades saw a chance to conquer Sicily, rich in grain, and to make a name for himself.",
        "The old general Nicias, Athens's most prudent politician, was against it. He tried to discourage the assembly by exaggerating how big a force would be needed: he asked for an immense one. It backfired, and the assembly voted exactly that force: more than 100 ships and thousands of soldiers. According to Thucydides, the fleet that set out had 134 triremes and about 5,100 hoplites, with archers, slingers and some 30 horsemen.",
        { h: "The road to Syracuse" },
        { timeline: [
          ["416 BC", "Segesta asks Athens for help."],
          ["415 BC", "Before the departure, the [[herms|hermas]] of Athens are found mutilated. Alcibiades is accused, and after reaching Sicily he is recalled. He flees to Sparta."],
          ["415 BC", "First battle near Syracuse. The Athenians win, but the enemy cavalry prevents a pursuit."],
          ["414 BC", "The Athenians take the Epipolae and begin walling in the city. The general Lamachus dies in a fight. The Spartan Gylippus arrives."],
          ["413 BC", "The reinforcements of Demosthenes arrive. A night attack fails. The fleet is defeated in the Great Harbour."],
          ["413 BC", "Retreat by land and disaster at the Assinarus river."]
        ]}
      ]},
      { n: "02", title: "The leading figures", blocks: [
        { h: "Nicias, Athenian general" },
        "Rich, religious and careful, he had been against the expedition and was forced to command it. He was ill during the siege and wrote letters to Athens saying that the situation was worse than people thought. Thucydides describes him as a man much given to omens and divination, which would weigh heavily at the end.",
        { h: "Alcibiades and Lamachus" },
        "Alcibiades, brilliant and ambitious, wanted a campaign of diplomacy and chosen attacks. Lamachus, a straightforward soldier, wanted to attack Syracuse by surprise, before the city could prepare; according to modern scholars, this was perhaps the best plan. Alcibiades was recalled too early, and Lamachus died in 414 BC. That left Nicias, the most cautious of the three.",
        { h: "Hermocrates and Gylippus" },
        "On Syracuse's side, Hermocrates organized the defense and asked Sparta and Corinth for help. Sparta sent a single commander, Gylippus, with few soldiers, but he gathered allies across the island and gave the Syracusans what they lacked: a plan and the confidence to fight.",
        { h: "Demosthenes" },
        "A famous Athenian general, he arrived in 413 BC with a second fleet. He saw at once that only a quick blow would save the army, and so he tried the night attack on the Epipolae. When it failed, he wanted to leave immediately."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces and the terrain" },
        "The numbers are those of Thucydides: 134 triremes and about 5,100 hoplites at departure. In 413 BC, the reinforcements of Demosthenes and Eurymedon came to about 73 ships and almost 5,000 hoplites. The Syracusans had a lot of cavalry, which the Athenians hardly had. The numbers of the Syracusan army are not reliable.",
        "Syracuse lay on the coast, with the island of Ortygia at its tip and a large harbor, the Great Harbour, to the south. Behind the city rose the plateau of the [[Epipolae|epípolas]], which dominated the city. Whoever held it, held Syracuse.",
        { h: "The siege in nine moves" },
        { formation: true },
        "First, in 414 BC, the Athenians occupied the Epipolae and began building a siege wall, the 'Circle', to cut the city off by land. Second, the Syracusans built counter-walls to cross its path, and the Circle could not be closed. Lamachus died in this work.",
        "Third, Gylippus arrived by land and finished the counter-wall. From then on, the Athenian wall no longer served any purpose, and the Athenians began to live in a camp, far from the city. Fourth, in 413 BC Gylippus took Plemmyrium, the southern point of the harbor, where the Athenians kept supplies and equipment.",
        "Fifth, the Athenian fleet was cornered in the Great Harbour, where it had no room for its maneuvers. The Syracusans, on the advice of the Corinthian pilot Ariston, used [[reinforced prows|proa reforçada]] to strike head-on and set a trap at mealtime: when the Athenians went ashore to eat, the Syracusans attacked again. The crews, fasting, were caught by surprise, and seven ships went down.",
        "Sixth, Demosthenes arrived with 73 ships and almost 5,000 hoplites. Seventh, he tried the night blow: he took the fort of Euryalus and made the Syracusans fall back, but in the darkness the Athenians got confused and fought each other. The Boeotians made the first stand and the attack failed, with many dead and wounded.",
        "Eighth, there was a lunar eclipse, on 27 August 413 BC. Nicias, who was preparing the retreat, waited 'thrice nine days', as the soothsayers ordered. In that time, the Syracusans closed the mouth of the harbor. In the final battle, in September, the Athenians, with about 110 ships against about 76, were defeated in their own harbor.",
        "Ninth, the army, with about 40,000 people, according to Thucydides, including non-combatants, set out by land, leaving the wounded and the dead behind. Demosthenes, with about 6,000 men, was surrounded and surrendered. Nicias reached the Assinarus river, where the thirsty soldiers threw themselves into the water, trampled and attacked from both sides. Nicias gave himself up to Gylippus.",
        { h: "The prisoners" },
        "About 7,000 prisoners, according to Thucydides, were thrown into the [[quarries|latomias]] for 70 days, with little food and water, in heat and cold. Many died. The survivors were sold as slaves. Nicias and Demosthenes were executed, against Gylippus's wishes, according to Thucydides."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Athens lost close to 200 ships and tens of thousands of men, dead, enslaved and prisoners. The experienced rowers were the hardest loss to replace. When the news arrived, according to Plutarch, the first person to bring it was a barber, who was treated as an inventor of rumors until the truth was confirmed.",
        { h: "Why it matters" },
        "Thucydides, who lived through the war, considers it the most important episode of the whole war. After it, Athens's allies revolted, Persia came in on Sparta's side and, in 411 BC, democracy was overthrown for a short time. Athens still fought for nine more years, but from then on it never had the same strength.",
        "Historians debate the causes. Some blame Nicias's indecision, others the decision to recall Alcibiades. Still others think the expedition was born too big for its objectives.",
        { h: "Curiosities and controversies" },
        { note: "The date of the eclipse: the lunar eclipse is dated 27 August 413 BC by the astronomers' calculations. Some modern sources give 28 August." },
        { note: "The numbers: the figures for the forces come from Thucydides, who lived through the conflict, but modern estimates differ. Some authors give the Athenian army more cavalry than Thucydides does." }
      ]}
    ]
  },

  mantineia: {
    war: "Theban hegemony in Greece (371–362 BC)",
    hook: "Epaminondas's column broke the enemy line like the prow of a ship. He died at the moment of victory, and with him died the greatness of Thebes.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "For almost a century, Sparta ruled Greece. In 371 BC, at Leuctra, a Theban army commanded by Epaminondas destroyed the Spartan infantry, killed King Cleombrotus and ended the myth that the Spartans were invincible. In the following years, Epaminondas invaded Laconia, freed the Messenians and created in Arcadia a league of cities to hem Sparta in.",
        "Theban [[hegemony|hegemonia]], however, had enemies. Athens drew closer to Sparta, and the Arcadian cities split. Mantinea and others went against Thebes. In 362 BC, Epaminondas returned to the Peloponnese with his army to settle the matter.",
        { h: "The road to Mantinea" },
        { timeline: [
          ["371 BC", "The Thebans beat Sparta at Leuctra."],
          ["370–369 BC", "Epaminondas invades Laconia and frees Messenia."],
          ["362 BC", "March to the Peloponnese. He tries to take Sparta by surprise, but Agesilaus returns in time."],
          ["362 BC", "He tries to surprise Mantinea, but the Athenian cavalry arrives and stops him."],
          ["362 BC", "Battle on the plain of Mantinea."]
        ]},
        "The exact date of the battle is unknown: it is given as the summer of 362 BC. Some modern sources cite 4 July."
      ]},
      { n: "02", title: "The leading figures", blocks: [
        { h: "Epaminondas of Thebes" },
        "A philosopher and a soldier, from a poor family of little fame, he was one of the greatest generals of Greece. He invented new tactics: instead of spreading his forces along the line, he concentrated his best troops at a single point. Xenophon, who was not a Theban, says that his army could endure any effort. At Mantinea, according to the same Xenophon, he thought he needed a decisive victory, because his reputation had been shaken by the failures against Sparta and Mantinea.",
        { h: "The other side" },
        "On the allied side were Sparta, Athens, Mantinea, Elis and Achaea. Agesilaus, king of Sparta, had already saved the city from Epaminondas's attack days earlier. The commanders included Podares, of Mantinea, who died in the battle. Each city brought its own contingent, which made the allied response less coordinated, but the sources do not give us a complete picture of the commands."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to Diodorus, the Thebans and allies together numbered about 30,000 foot soldiers and 3,000 horsemen, and the enemies about 20,000 and 2,000. These are numbers from a late historian and must be read with care. Xenophon, who was alive at the time, does not give them.",
        { h: "The terrain and the maneuver" },
        "The plain of Mantinea lies in Arcadia, between two mountain ranges. Epaminondas, coming from Tegea, to the south, drew up the line and led it toward the mountains to the west, as if to make camp. He halted the soldiers at the foot of the slopes, ordered them to ground their arms and undid the battle order. The enemy, thinking there would be no fighting that day, relaxed.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, the Theban army marched, apparently in no hurry. Second, Epaminondas, without warning, shifted companies to the left, reinforcing the wing. According to Diodorus, this column was 50 ranks deep, which is not in Xenophon. It was a [[deep column|coluna profunda]], designed to break through at a single point.",
        "Third, the allies, caught by surprise, ran to arm themselves and mount. Fourth, the column advanced 'like a trireme, with the ram in front', Xenophon's image, while the weaker troops on the right stayed well back, far from contact. It was an [[oblique line|linha oblíqua]], in which the strong point arrives first.",
        "Fifth, on the cavalry front, Epaminondas formed a deep column of horsemen mixed with light infantry, the [[hamippoi]]. The enemy cavalry stood six deep, with no infantry in between. In addition, he placed horsemen and hoplites on a hill, threatening the Athenians' flank, so that they could not help their neighbors.",
        "Sixth, the column struck. Xenophon says the enemy line was broken at the point of impact and that the whole allied army ended up fleeing. Seventh, Epaminondas fell. According to Diodorus, he was struck in the chest by a spear, whose point stayed in the wound. The names given for the man who wounded him vary in the sources.",
        "Eighth, with the general out of action, the Thebans stopped. The hoplites did not pursue, and neither did the cavalry. At the other end, the horsemen and hamippoi who had gone against the Athenians were mostly killed. The Athenians were the only allies who held their ground.",
        { h: "The death of Epaminondas" },
        "According to Diodorus, Epaminondas was carried out of the fighting, and before he died he advised the Thebans to make peace. The line that he was leaving 'two daughters, Leuctra and Mantinea', is a tradition from later authors, who repeat it without proof."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Xenophon ends like this: both sides set up trophies, both returned the dead under truce, both said they had won, and no one gained territory, city or power. The Greeks, he adds, were in more confusion after the battle than before. The Theban won on the field but lost the only man able to take advantage of the victory.",
        { h: "Why it matters" },
        "Theban hegemony ended at Mantinea. Sparta never recovered the soldiers it lost, and Athens already had little strength. The three great cities were exhausted, and it was this void that the Macedon of Philip II filled. Philip had lived in Thebes as a hostage, between 368 and 365 BC, and, according to one tradition, learned there from Epaminondas. His son, Alexander, would inherit the army he created.",
        { h: "Curiosities and controversies" },
        { note: "The Sacred Band: Thebes's elite unit is much cited at Leuctra. At Mantinea, some modern authors place it in the column, but Xenophon does not mention it. We use only what the ancient sources confirm." },
        { note: "Who wounded Epaminondas: the names vary (Anticrates, Machaerion, Gryllus, the son of Xenophon). Gryllus, Xenophon's son, died in the cavalry fight that preceded the battle, and the identification as the author of the blow is debated." }
      ]}
    ]
  },

  ipsos: {
    war: "Wars of the Diadochi (322–281 BC)",
    hook: "The son charged so fast that he could not get back. When he did, his father was dead and Alexander's empire was buried.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "When Alexander the Great died in 323 BC, he left no heir able to rule. His generals, the [[Diadochi|diádocos]], divided the empire into provinces and soon began to fight. Antigonus, nicknamed Monophthalmus, 'the One-Eyed', was one of the strongest and wanted the whole empire.",
        "In 306 BC, Antigonus and his son Demetrius proclaimed themselves kings. In the following years, their rivals did the same: Ptolemy in Egypt, Seleucus in Babylon, Lysimachus in Thrace, Cassander in Macedon. Four kings had an interest in bringing down the fifth.",
        { h: "The road to Ipsus" },
        { timeline: [
          ["323 BC", "Alexander dies. His generals split up."],
          ["306 BC", "Antigonus and Demetrius proclaim themselves kings. The other generals imitate them."],
          ["302 BC", "Cassander, Lysimachus, Seleucus and Ptolemy form a coalition against Antigonus."],
          ["301 BC", "Seleucus, coming from the east, and Lysimachus, from Thrace, join up in Phrygia. Ptolemy stays in Egypt."],
          ["301 BC", "Battle of Ipsus."]
        ]},
        "Ptolemy had invaded Syria, but fell back to Egypt on hearing, from a false rumor, that Antigonus had won. That is why he was not at Ipsus."
      ]},
      { n: "02", title: "The leading figures", blocks: [
        { h: "Antigonus Monophthalmus, about 81 years old" },
        "He had served Philip II and Alexander and was the oldest of the Diadochi. Big, strong and respected by the soldiers, he had the dream of reuniting Alexander's empire under a single command, his own. At Ipsus, he was old, but he fought in the front line.",
        { h: "Demetrius Poliorcetes" },
        "The son, 'the Besieger of Cities', was one of the most brilliant and daring generals of the age, and also one of the most impetuous. He commanded the heavy cavalry, Antigonus's most feared force.",
        { h: "Seleucus and Lysimachus" },
        "Seleucus, king of Babylon, brought from the east a huge group of [[war elephants|elefantes de guerra]]. According to Diodorus, 480, and according to Plutarch, the allied total was 400. According to one tradition, he received them from Chandragupta, king of India, in exchange for territories in the east. Lysimachus, king of Thrace, came with his army, and Cassander's force was under the command of Prepelaus and of Pleistarchus, his brother."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Plutarch gives: Antigonus with about 70,000 foot soldiers, 10,000 horsemen and 75 elephants; the coalition with 64,000 on foot, 10,500 horsemen, 400 elephants and 120 scythed chariots. These are numbers from a source written some 400 years later. Other ancient texts differ: Diodorus says Seleucus's cavalry alone numbered 12,000, and modern historians estimate the allied cavalry at about 15,000.",
        { h: "The terrain" },
        "The battle was fought in Phrygia, near the city of Ipsus, in what is now Afyonkarahisar Province, Turkey. The exact location is uncertain.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, both sides took position in the Macedonian style: the [[phalanxes|falange]] in the center, the horsemen on the wings and the elephants in front. Antigonus stood in the center, and Demetrius commanded the heavy cavalry of the Antigonid right, facing Seleucus's son Antiochus, according to Plutarch.",
        "Second, the elephants clashed first. Third, Demetrius attacked the allied cavalry and broke it. Fourth, and this was the fatal mistake, he chased it too far and left the field.",
        "Fifth, Seleucus, according to Plutarch, threw the elephants into Demetrius's path back, and the cavalry could not return. Some historians believe Seleucus kept many elephants in reserve for exactly this, which would be unusual; the sources do not confirm it. There is no record of who gave the order, and the idea that it was Seleucus is a deduction.",
        "Sixth, without the cavalry, Antigonus's phalanx had its flanks exposed. The allied cavalry and the horse archers began to ride around it, shooting, without a frontal charge. According to Plutarch, Seleucus rode around it, and this led many Antigonid soldiers to change sides.",
        "Seventh, Antigonus was struck by several javelins thrown by light soldiers and died. Plutarch says that, on hearing that the enemy were coming toward him, he answered that he expected his son's help. The line is an anecdote from Plutarch, and there is no way to confirm it. With the king's death, the army dissolved.",
        "Eighth, Demetrius managed to escape with about 9,000 men, 5,000 infantry and 4,000 cavalry, and went to Ephesus."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Antigonus died, and his army fell apart. Demetrius tried to take refuge in Athens, but the city shut its gates. He left Pyrrhus of Epirus as his representative in Greece and went to Thrace.",
        "The victors divided the empire. Ptolemy kept Egypt, Seleucus took Syria and the east of Asia Minor, and Lysimachus the rest of Asia Minor. Cassander stayed in Macedon.",
        { h: "Why it matters" },
        "Ipsus ended the idea of a single empire inheriting Alexander's. The Greek world was left divided into great rival kingdoms, the Hellenistic kingdoms, which lasted almost three centuries, until the advance of Rome. The Seleucid dynasty, founded by Seleucus, ruled Syria and much of the East. The Ptolemies ruled Egypt until Cleopatra.",
        "It was also one of the largest battles with [[war elephants|elefantes de guerra]] and showed that, in skilled hands, they could decide the day.",
        { h: "Curiosities and controversies" },
        { note: "The elephants: the sources give the coalition 400, 480 or 500 elephants. According to Diodorus, 480 were Seleucus's. The numbers are debated, and some historians think they are exaggerated." },
        { note: "The sources: Diodorus Siculus, whose narrative of the battle has been largely lost, and Plutarch, in the Life of Demetrius, which is the only complete account. Plutarch writes about 400 years later and is more interested in the moral lesson than in tactics." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lachish: {
    terrain: [
      { t: "hill", x: 62, y: 24, rx: 36, ry: 22, l: "Hill and walls of Lachish" },
      { t: "note", x: 90, y: 66, l: "North ↑" }
    ],
    units: [
      { id: "aArch", s: "a", k: "inf", w: 14, h: 4, l: "Archers and slingers" },
      { id: "aSpear", s: "a", k: "inf", w: 12, h: 4, l: "Spearmen with wicker shields" },
      { id: "aRam", s: "a", k: "inf", w: 8, h: 4, l: "Battering rams" },
      { id: "aRamp", s: "a", k: "camp", w: 16, h: 5, l: "Siege ramp" },
      { id: "aKing", s: "a", k: "camp", w: 12, h: 5, l: "Sennacherib" },
      { id: "bWall", s: "b", k: "inf", w: 22, h: 4, l: "Defenders on the walls" },
      { id: "bCount", s: "b", k: "camp", w: 10, h: 4, l: "Counter-ramp" },
      { id: "bPop", s: "b", k: "inf", w: 10, h: 3, l: "Inhabitants of Lachish" }
    ],
    steps: [
      { t: "The Assyrians arrive from the southwest. Lachish stands on its hill, with two walls. The defenders man the top of the walls.",
        p: { aArch: [12, 60], aSpear: [26, 62], aRam: [10, 50], aRamp: [22, 66], aKing: [10, 14], bWall: [36, 38], bCount: [56, 32], bPop: [68, 22] } },
      { t: "Archers and slingers advance, protected by spearmen with wicker shields. They want to clear the wall so the engineers can work.",
        p: { aArch: [22, 52], aSpear: [30, 54] } },
      { t: "The Assyrian engineers build the siege ramp at the southwest corner: about 3 million stones, according to a 2021 study.",
        p: { aRamp: [28, 46, -30], aArch: [18, 56] } },
      { t: "Inside the wall, the defenders build a counter-ramp, so that the top of the defense stays above the enemy ramp.",
        p: { bCount: [38, 40, -30] } },
      { t: "The battering rams climb the ramp. From above, the defenders hurl stones, arrows and burning torches.",
        p: { aRam: [32, 44, -30], aSpear: [24, 50] } },
      { t: "The wall gives way. The Assyrian soldiers pour in through the breach.",
        p: { aRam: [38, 38], aSpear: [36, 36], bWall: [46, 32] } },
      { t: "The defenders fall back or try to flee down the other side of the hill. The city falls and is burned.",
        p: { aSpear: [46, 30], aArch: [34, 42], bWall: [62, 18] }, x: ["bWall"] },
      { t: "The inhabitants are led away as prisoners. Sennacherib, seated on a throne in front of the city, receives the spoils, as the reliefs of Nineveh show.",
        p: { bPop: [24, 56], aKing: [14, 42] } }
    ]
  },

  aegospotami: {
    terrain: [
      { t: "sea", x: 34, y: -2, w: 32, h: 76, l: "Hellespont" },
      { t: "hill", x: 12, y: 35, rx: 20, ry: 34, l: "Chersonese (Europe)" },
      { t: "hill", x: 90, y: 35, rx: 22, ry: 34, l: "Asia" },
      { t: "note", x: 22, y: 20, l: "Aegospotami" },
      { t: "note", x: 84, y: 20, l: "Lampsacus" },
      { t: "note", x: 14, y: 66, l: "Sestos" }
    ],
    units: [
      { id: "aFleet", s: "a", k: "ship", w: 5, h: 14, l: "Athenian fleet (≈ 180 ships)" },
      { id: "aCrew", s: "a", k: "inf", w: 5, h: 8, l: "Sailors foraging for food" },
      { id: "aConon", s: "a", k: "ship", w: 3.5, h: 3.5, l: "Conon and 7 ships" },
      { id: "aParal", s: "a", k: "ship", w: 3, h: 3, l: "Paralus" },
      { id: "bFleet", s: "b", k: "ship", w: 5, h: 14, l: "Lysander's fleet" },
      { id: "bScout", s: "b", k: "ship", w: 3, h: 3, l: "Lookout ships" },
      { id: "bInf", s: "b", k: "inf", w: 6, h: 6, l: "Thorax's troops" }
    ],
    steps: [
      { t: "The Athenians camp on an open beach, with no harbor, at Aegospotami. Lysander keeps his fleet anchored at Lampsacus, with the city behind it.",
        p: { aFleet: [30, 38], aCrew: [22, 38], aConon: [30, 26], aParal: [30, 52], bFleet: [70, 38], bScout: [66, 30], bInf: [82, 40] } },
      { t: "Every day, in the morning, the Athenians sail out in battle formation and wait in front of the enemy harbor. Lysander does not come out.",
        p: { aFleet: [48, 38], aConon: [48, 26], aParal: [48, 52] } },
      { t: "In the afternoon, the Athenians go back. Fast ships of Lysander's follow them at a distance to see where they land, and only then do the Spartans rest.",
        p: { aFleet: [30, 38], aConon: [30, 26], aParal: [30, 52], bScout: [48, 38] } },
      { t: "Alcibiades, in exile, warns the generals to move to Sestos, which has a harbor. The generals send him away. The routine repeats for four days.",
        p: { bScout: [66, 30] } },
      { t: "On the fifth day, the Athenians sail out again, come back in the afternoon and the sailors scatter ashore looking for food.",
        p: { aCrew: [14, 44], aFleet: [30, 38] } },
      { t: "The lookout ships raise a shield: it is the signal. Lysander's fleet crosses the strait at full speed.",
        p: { bFleet: [46, 38], bScout: [44, 30] } },
      { t: "The Spartan fleet reaches the beach and captures almost all the Athenian ships, empty or poorly manned. There is no real naval battle.",
        p: { bFleet: [32, 38], bInf: [26, 40], aCrew: [12, 48] }, x: ["aFleet"] },
      { t: "Only nine ships escape. Conon goes to Cyprus, and the Paralus carries the news to Athens. Lysander has about 3,000 prisoners put to death.",
        p: { aConon: [24, 6], aParal: [30, 66] }, x: ["aCrew", "aConon", "aParal"] }
    ]
  },

  siracusa: {
    terrain: [
      { t: "sea", x: 50, y: 30, w: 54, h: 44, l: "Great Harbour" },
      { t: "hill", x: 42, y: 12, rx: 34, ry: 10, l: "Plateau of the Epipolae" },
      { t: "hill", x: 30, y: 38, rx: 12, ry: 9, l: "Syracuse" },
      { t: "hill", x: 94, y: 64, rx: 7, ry: 7, l: "Plemmyrium" },
      { t: "note", x: 14, y: 64, l: "Anapus river" },
      { t: "note", x: 8, y: 6, l: "Euryalus" }
    ],
    units: [
      { id: "aArmy", s: "a", k: "inf", w: 16, h: 5, l: "Athenian army" },
      { id: "aWall", s: "a", k: "camp", w: 22, h: 2, l: "Athenian wall (the 'Circle')" },
      { id: "aFleet", s: "a", k: "ship", w: 10, h: 4, l: "Athenian fleet" },
      { id: "aCamp", s: "a", k: "camp", w: 10, h: 5, l: "Camp and Plemmyrium" },
      { id: "aDemo", s: "a", k: "ship", w: 8, h: 4, l: "Demosthenes: 73 ships, 5,000 hoplites" },
      { id: "bArmy", s: "b", k: "inf", w: 14, h: 5, l: "Syracusans" },
      { id: "bCounter", s: "b", k: "camp", w: 24, h: 2, l: "Syracusan counter-wall" },
      { id: "bCav", s: "b", k: "cav", w: 8, h: 4, l: "Syracusan cavalry" },
      { id: "bGyl", s: "b", k: "inf", w: 10, h: 5, l: "Gylippus and Peloponnesians" },
      { id: "bFleet", s: "b", k: "ship", w: 10, h: 4, l: "Syracusan fleet" }
    ],
    steps: [
      { t: "414 BC: the Athenians land and occupy the Epipolae. They begin walling Syracuse in by land, the 'Circle'.",
        p: { aArmy: [34, 22], aWall: [30, 28], aFleet: [78, 50], aCamp: [18, 54], aDemo: [92, 68], bArmy: [28, 38], bCounter: [20, 12], bCav: [40, 40], bGyl: [8, 4], bFleet: [62, 42] } },
      { t: "The Syracusans build counter-walls to cut across the path of the Circle. Lamachus dies in a fight.",
        p: { aWall: [34, 30], bCounter: [32, 20] } },
      { t: "Gylippus, sent by Sparta, arrives by land and finishes the counter-wall. The Athenian wall can no longer close the city off.",
        p: { bGyl: [30, 14], bCounter: [38, 24], aArmy: [24, 50] } },
      { t: "413 BC: Gylippus takes Plemmyrium, where the Athenians kept supplies and equipment.",
        p: { bGyl: [88, 56] }, x: ["aCamp"] },
      { t: "In the Great Harbour, the Athenian fleet has no room to maneuver. The Syracusans, with reinforced prows, strike head-on and use mealtime to surprise them.",
        p: { bFleet: [66, 46], aFleet: [74, 50] } },
      { t: "Demosthenes arrives, with 73 ships and almost 5,000 hoplites.",
        p: { aDemo: [76, 58] } },
      { t: "Night attack on the Epipolae: it takes the fort of Euryalus, but in the darkness the Athenians get confused, the Boeotians stand firm and the attack fails.",
        p: { aArmy: [36, 14], bArmy: [30, 28] } },
      { t: "After the eclipse, Nicias waits almost a month. The Syracusans close the mouth of the harbor and destroy the Athenian fleet in September.",
        p: { bFleet: [86, 52] }, x: ["aFleet", "aDemo"] },
      { t: "The army flees by land and is destroyed near the Assinarus river. Demosthenes surrenders with about 6,000 men. About 7,000 prisoners go to the quarries.",
        p: { aArmy: [8, 40], bCav: [8, 30], bArmy: [22, 34] }, x: ["aArmy"] }
    ]
  },

  mantineia: {
    terrain: [
      { t: "hill", x: 86, y: 34, rx: 9, ry: 7, l: "Hill" },
      { t: "note", x: 50, y: 5, l: "Mantinea (north)" },
      { t: "note", x: 50, y: 67, l: "Tegea (south)" }
    ],
    units: [
      { id: "aCol", s: "a", k: "inf", w: 14, h: 12, l: "Theban column (left wing)" },
      { id: "aRight", s: "a", k: "inf", w: 22, h: 4, l: "Theban right wing, held back" },
      { id: "aCav", s: "a", k: "cav", w: 10, h: 5, l: "Theban cavalry and light infantry" },
      { id: "aHill", s: "a", k: "cav", w: 7, h: 4, l: "Horsemen and hoplites on the hill" },
      { id: "bSp", s: "b", k: "inf", w: 16, h: 5, l: "Sparta, Mantinea and Arcadians" },
      { id: "bMid", s: "b", k: "inf", w: 20, h: 5, l: "Allies (Elis, Achaea)" },
      { id: "bAth", s: "b", k: "inf", w: 16, h: 5, l: "Athenians (allied left)" },
      { id: "bCavL", s: "b", k: "cav", w: 10, h: 4, l: "Allied cavalry" },
      { id: "bCavR", s: "b", k: "cav", w: 10, h: 4, l: "Allied cavalry" }
    ],
    steps: [
      { t: "The Thebans march from Tegea toward the mountains to the west, as if to make camp. The allies, in line on the plain, think there will be no fighting that day.",
        p: { aCol: [28, 56], aRight: [62, 56], aCav: [10, 56], aHill: [86, 44], bSp: [30, 20], bMid: [56, 20], bAth: [80, 20], bCavL: [10, 16], bCavR: [94, 18] } },
      { t: "Epaminondas halts at the foot of the slopes and orders the arms grounded, as if camping. He undoes the apparent battle order.",
        p: { aCol: [24, 56], aRight: [58, 56] } },
      { t: "Suddenly, he shifts companies to the left and reinforces the wing. According to Diodorus, the column reaches 50 ranks deep.",
        p: { aCol: [26, 52] } },
      { t: "The allies rush to grab their arms and mount.",
        p: { bSp: [30, 22], bMid: [56, 22] } },
      { t: "The column advances 'like a trireme, with the ram in front', while the weaker troops on the right stay far from contact. The line goes in diagonally.",
        p: { aCol: [28, 38], aRight: [64, 54], aCav: [12, 38] } },
      { t: "The Theban cavalry, with light infantry mixed in, faces the enemy cavalry, which is six deep and without infantry. Horsemen and hoplites on the hill threaten the Athenians.",
        p: { aCav: [12, 28], aHill: [84, 30], bCavL: [10, 22] } },
      { t: "The column strikes where the enemy elite stands. The line is broken and the allied army flees.",
        p: { aCol: [30, 26], aCav: [12, 22], bSp: [28, 14] }, x: ["bSp", "bCavL"] },
      { t: "Epaminondas falls. The Thebans stop and do not pursue. At the other end, the horsemen and light infantry who attacked the Athenians are mostly killed.",
        p: { aCol: [30, 24], aHill: [80, 24], bAth: [80, 18], bMid: [56, 16] }, x: ["aHill", "bMid"] }
    ]
  },

  ipsos: {
    terrain: [
      { t: "note", x: 50, y: 4, l: "Phrygia" }
    ],
    units: [
      { id: "aPh", s: "a", k: "inf", w: 34, h: 5, l: "Antigonus's phalanx" },
      { id: "aEle", s: "a", k: "ele", w: 30, h: 3, l: "75 elephants" },
      { id: "aDem", s: "a", k: "cav", w: 14, h: 5, l: "Demetrius and the heavy cavalry" },
      { id: "aLeft", s: "a", k: "cav", w: 10, h: 5, l: "Left-wing cavalry" },
      { id: "bPh", s: "b", k: "inf", w: 36, h: 5, l: "Coalition phalanx" },
      { id: "bEleF", s: "b", k: "ele", w: 28, h: 3, l: "Line elephants" },
      { id: "bEleR", s: "b", k: "ele", w: 18, h: 3, l: "Reserve elephants (according to some)" },
      { id: "bCavL", s: "b", k: "cav", w: 14, h: 5, l: "Antiochus's cavalry" },
      { id: "bCavR", s: "b", k: "cav", w: 10, h: 5, l: "Allied cavalry" },
      { id: "bSk", s: "b", k: "cav", w: 12, h: 4, l: "Horse archers and light cavalry" }
    ],
    steps: [
      { t: "The two phalanxes stand in the center, with the elephants in front. Antigonus is in the center. Demetrius commands the heavy cavalry on the Antigonid right, facing Antiochus's cavalry.",
        p: { aPh: [50, 52], aEle: [50, 44], aDem: [82, 50], aLeft: [14, 50], bPh: [50, 20], bEleF: [50, 28], bEleR: [76, 8], bCavL: [82, 20], bCavR: [14, 20], bSk: [92, 10] } },
      { t: "The elephants of the two lines clash first.",
        p: { aEle: [50, 38], bEleF: [50, 32] } },
      { t: "Demetrius charges the allied cavalry and breaks it.",
        p: { aDem: [80, 28], bCavL: [86, 20] } },
      { t: "He chases it too far and leaves the battlefield.",
        p: { aDem: [92, 8], bCavL: [96, 4] }, x: ["bCavL"] },
      { t: "Seleucus's elephants are placed in Demetrius's path back. The cavalry cannot return.",
        p: { bEleR: [82, 16] } },
      { t: "Without the cavalry, Antigonus's phalanx has an exposed flank. Horse archers and allied horsemen ride around it and attack from a distance. Many soldiers change sides.",
        p: { bSk: [70, 40], aPh: [50, 46] } },
      { t: "Antigonus is struck by several javelins and dies. The army dissolves.",
        p: { aEle: [50, 36] }, x: ["aPh", "aEle", "aLeft"] },
      { t: "Demetrius escapes with about 9,000 men and goes to Ephesus.",
        p: { aDem: [96, 2] }, x: ["aDem"] }
    ]
  }
});
