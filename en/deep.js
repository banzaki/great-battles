// In-depth battles: the editorial model agreed with Bruno and Tony (2026-11-22).
// Each entry: war, hook (one line), chapters [{ n, title, blocks }].
// A block is a paragraph string, or { h: subtitle }, { timeline: [[when, what], ...] }, { formation: true },
// or { note: text } for uncertainty and controversy.
// Terms in [[double brackets]] link to the glossary; [[shown text|key]] when the text differs from the key.
const GLOSSARY = {
  "falange": "A compact block of heavy infantry, several ranks deep. The Macedonian phalanx used the sarissa, a spear about 5 to 6 meters long, and looked like a wall of spearpoints.",
  "sarissa": "A Macedonian spear about 5 to 6 meters long, held with both hands. The first five ranks of the phalanx pointed their spears forward.",
  "hipaspistas": "Alexander's elite infantry, lighter and more agile than the phalanx. It linked the phalanx with the cavalry.",
  "companheiros": "The Hetairoi, the heavy cavalry of the Macedonian nobility. Alexander fought at their head, in a wedge formation.",
  "cunha": "A triangle-shaped formation, with the point facing forward. It concentrates force on a small spot and is used to punch through an enemy line.",
  "flanco": "The side of an army. It is the weakest point, because the soldiers look and fight to the front.",
  "flanquear": "To attack the enemy from the side (the flank) instead of from the front.",
  "carros com foices": "Persian war chariots pulled by horses, with blades fixed to the wheels and the axle. They were very frightening, but easy to avoid if the infantry opened a gap.",
  "imortais": "The elite guard of the Persian kings. According to Herodotus, there were always 10,000 of them: anyone who died was replaced on the spot.",
  "sátrapa": "The governor of a province (satrapy) of the Persian Empire. Many were relatives of the king and commanded their own troops.",
  "linha oblíqua": "Advancing with one end of the army forward and the other held back, on a diagonal. That way the strong part arrives first and the weak part avoids combat.",
  "reserva": "Troops kept behind the line, not fighting, to plug a hole or deliver the final blow at the right moment.",
  "aquemênida": "The dynasty that ruled the Persian Empire from about 550 to 330 BC, from Cyrus the Great to Darius III. It was the largest empire in the world up to that time."
};

const DEEP = {
  gaugamela: {
    war: "Alexander's conquest of the Persian Empire (334–330 BC)",
    hook: "The afternoon when an army of 47,000 men brought down the largest empire in the world.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 331 BC, the Persian Empire stretched from Egypt to India. It was the largest state the world had ever seen, ruled for more than 200 years by the [[Achaemenid|aquemênida]] dynasty. On the western edge of that empire, Greece was a handful of small, quarrelsome cities, which had resisted the Persians 150 years earlier, at Marathon and Salamis, and had never forgotten it.",
        "The one who changed that balance was Macedon, a kingdom in the north of Greece that the Athenians considered half barbarian. King Philip II turned peasants and shepherds into a professional army and subdued the Greek cities at Chaeronea, in 338 BC. His next plan was to invade Persia. He was assassinated before he could, and the plan passed to his 20-year-old son, Alexander.",
        { h: "The road to Gaugamela" },
        { timeline: [
          ["334 BC", "Alexander crosses into Asia and defeats the Persian satraps at the Granicus River."],
          ["333 BC", "At Issus, he defeats King Darius III himself, who flees and leaves his family behind."],
          ["332 BC", "He takes Tyre after a seven-month siege and enters Egypt without a fight."],
          ["331 BC", "He turns back east, crosses the Euphrates and the Tigris and meets Darius near Gaugamela."]
        ]},
        "After Issus, Darius offered Alexander all the territory west of the Euphrates, a fortune in gold and the hand of a daughter. Alexander refused: he wanted the whole empire. Darius used the next two years to gather soldiers from every province, from the Black Sea to Afghanistan."
      ]},
      { n: "02", title: "Key players", blocks: [
        { h: "Alexander III of Macedon, 25 years old" },
        "A pupil of Aristotle in his teens, he commanded the cavalry at Chaeronea at the age of 18. He always fought at the front, which inspired the soldiers and frightened the officers. At Gaugamela, his goal was not to defeat the whole Persian army, which would have been impossible: it was to reach Darius. In an empire where everything depended on the king, he knew that a king in flight was worth more than a thousand dead soldiers.",
        { h: "Darius III, about 50 years old" },
        "He came to the throne in 336 BC, after a series of assassinations at court, and had a reputation as a brave warrior. He learned from Issus that the narrow ground had hurt him, and so he chose a wide plain and had the ground leveled for the [[scythed chariots|carros com foices]]. It was a sensible plan. The problem is that it left the initiative to Alexander.",
        { h: "The other names" },
        "On the Macedonian side, the old general Parmenion, about 65 years old, commanded the left wing, which had the most thankless mission: to hold. On the Persian side, Bessus, [[satrap|sátrapa]] of Bactria and a relative of the king, commanded the cavalry on the left; Mazaeus, satrap of Babylon, the cavalry on the right."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Alexander had about 47,000 men: some 40,000 infantry and 7,000 cavalry. The heart of the army was the [[phalanx|falange]], with the [[sarissa]], alongside the [[hypaspists|hipaspistas]] and the cavalry of the [[Companions|companheiros]].",
        "How many Persians there were, nobody knows. The ancient historian Arrian speaks of 40,000 cavalry and a million infantry, a number impossible to feed. Modern historians settle between 50,000 and 250,000, and many land near 100,000. There were horsemen from Bactria and Scythia, the [[Immortals|imortais]], Greek mercenaries, about 200 scythed chariots and 15 Indian elephants, which seem not to have entered the fight.",
        { note: "The Persian numbers are the most uncertain point of the battle. We use the ranges of modern historians, not those of the ancient sources." },
        { h: "The terrain" },
        "An open plain near Erbil, in present-day Iraqi Kurdistan. The exact site is still debated: the most widely accepted candidate is Tel Gomel. The flat ground was good for the Persians, who had more cavalry and wanted to [[outflank|flanquear]] the Macedonian army on both sides.",
        { h: "The night before" },
        "The Persians stayed awake all night and in formation, afraid of a night attack. Parmenion suggested exactly that to Alexander, who answered, according to Plutarch, that he would not 'steal the victory'. Alexander slept, and they say so deeply that he had to be woken in the morning.",
        { h: "The battle in four movements" },
        { formation: true },
        "First, Alexander arranged his army with a second line behind the first, facing outward. If he were surrounded, it would turn and fight back to back. The two ends were held back, at an angle.",
        "Second, instead of advancing straight ahead, Alexander began to move diagonally to the right, in an [[oblique line|linha oblíqua]]. He was leaving the leveled ground. So as not to be overtaken, Bessus ordered his cavalry to follow, and the Persian line kept stretching out. The Scythian and Bactrian cavalry was excellent and even beat the mercenaries of Menidas, until the Macedonian light cavalry evened out the fight.",
        "Third, Darius released the scythed chariots. The Agrianian archers and spearmen hit horses and drivers. The chariots that got through found the infantry opening lanes and drove straight past, and the grooms and the hypaspists dealt with them in the rear.",
        "Fourth, and decisive: with Bessus' cavalry pulled to the right, a gap opened between it and the Persian center. Alexander suddenly turned with the Companions in a [[wedge|cunha]] and went through the gap, with the phalanx right behind, straight at Darius. The Persian king fled, and the center went after him.",
        { h: "Meanwhile, at the other end" },
        "Mazaeus was pressing Parmenion, and part of the Persian and Indian cavalry broke through the line and went to loot the Macedonian camp, where it was driven off by the [[reserve|reserva]]. Parmenion sent for help. Alexander gave up the pursuit of Darius and came back, in a hard cavalry fight in which about 60 Companions died. By the time he arrived, Mazaeus was already withdrawing."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Macedonian losses were between 1,100 and 1,500 men. Persian losses, between 40,000 and 90,000, according to estimates, most of them in the flight. Babylon surrendered weeks later. Persepolis, the ceremonial capital, was taken and burned the following year.",
        "Darius fled east, trying to raise another army. In 330 BC, he was seized and murdered by Bessus himself. Alexander gave him a king's burial and had Bessus executed the following year.",
        { h: "Why it matters" },
        "It ended the [[Achaemenid|aquemênida]] Persian Empire, and Alexander went on to India. After his death, his generals divided the empire into Greek kingdoms, which spread the Greek language and culture from Egypt to Afghanistan. This is the Hellenistic world, from which came the library of Alexandria and the Greek of the New Testament.",
        "Militarily, Gaugamela is studied as the classic example of creating a gap and attacking the enemy's command center through it.",
        { h: "Curiosities and controversies" },
        { note: "The dates: a lunar eclipse, recorded 11 days earlier by the astronomers of Babylon, makes it possible to date the battle with a precision rare for the time: 1 October 331 BC." },
        { note: "The name: Gaugamela means something like 'camel's house'. For a long time the battle was called Arbela, the nearest large city, today Erbil." },
        { note: "The sources: the fullest accounts (Arrian, Plutarch, Diodorus, Curtius) were written 300 to 400 years later, from memoirs of Alexander's officers that have been lost." }
      ]}
    ]
  }
};
