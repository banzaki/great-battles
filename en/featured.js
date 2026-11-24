// Battles checked against sources, and connections between battles.
// FEATURED entries override the base data (place, coordinates, troop figures) and add a narrative,
// losses and the list of sources. Checked on 2026-11-22 against the English Wikipedia articles
// (infobox figures) and the books those articles cite.
const FEATURED = {
  gaugamela: {
    place: "Probably Tel Gomel, near Erbil, in Iraqi Kurdistan", lat: 36.56, lng: 43.44,
    a: { troops: "≈ 47,000 (40,000 infantry and 7,000 cavalry)", n: 47000 },
    b: { troops: "50,000 to 250,000, in modern estimates", n: 100000 },
    narrative: "Darius III had two years to prepare after his defeat at Issus. He chose a wide plain, where his numbers would count, and had the ground leveled for the scythed chariots. Alexander arrived with about 47,000 men. How many Persians there were, nobody knows: Arrian, the ancient source, speaks of a million infantry, and modern historians settle between 50,000 and 250,000. Alexander answered with maneuver: he pulled the battle to the right, opened a gap in the Persian line and went through it in a wedge, straight at the king. Darius fled. Instead of chasing him, Alexander turned back to relieve Parmenion, who was in trouble on the left wing.",
    losses: "Macedonians: 1,100 to 1,500. Persians: 40,000 to 90,000. The ancient sources differ widely from one another.",
    sources: [
      ["Peter Green, Alexander of Macedon, 356–323 B.C. (2013)"],
      ["Hans Delbrück, History of the Art of War (1990)"],
      ["Arrian, Anabasis of Alexander (ancient source)"],
      ["English Wikipedia: Battle of Gaugamela", "https://en.wikipedia.org/wiki/Battle_of_Gaugamela"]
    ]
  },
  canas: {
    a: { troops: "≈ 50,000 (40,000 infantry and 10,000 cavalry)", n: 50000 },
    b: { troops: "≈ 86,400, counting the allies and the camp guard", n: 86400 },
    narrative: "Rome gathered eight legions, about 86,000 men with the allies, to finish Hannibal once and for all. He had about 50,000. The consuls Varro and Aemilius Paullus formed the infantry deeper than usual, to punch through the enemy center by force. Hannibal was counting on it. He put Gauls and Spaniards in an arc bowed forward, with his brother Mago, and kept the Africans on the wings. The center gave way slowly, the Romans walked into the pocket, the Africans closed in from the sides and Hasdrubal's cavalry closed in from behind. Polybius speaks of 70,000 Romans dead, and Livy of 48,200. Even so, Rome did not ask for peace.",
    losses: "Romans: 48,200 dead according to Livy, 70,000 according to Polybius. Carthaginians: 5,700 (Polybius) to 8,000 (Livy).",
    sources: [
      ["Adrian Goldsworthy, Cannae (2001)"],
      ["Gregory Daly, Cannae: The Experience of Battle in the Second Punic War (2002)"],
      ["Polybius and Titus Livy (ancient sources)"],
      ["English Wikipedia: Battle of Cannae", "https://en.wikipedia.org/wiki/Battle_of_Cannae"]
    ]
  },
  waterloo: {
    a: { troops: "≈ 68,000 with Wellington and ≈ 50,000 Prussians", n: 118000 },
    b: { troops: "≈ 73,000", n: 73000 },
    narrative: "Napoleon needed to beat Wellington before Blücher's Prussians arrived. He had about 73,000 men against the 68,000 of the allied army, and 50,000 Prussians were on their way. The previous night's rain delayed the attack until late morning. Wellington hid his infantry behind a ridge and held two farms in front of it, Hougoumont and La Haye Sainte. The French attacked in sequence: Hougoumont, D'Erlon's columns, Ney's cavalry and, finally, the Imperial Guard. Nothing broke the line. Around 4:30 pm, Bülow's Prussians attacked the French right flank. By nightfall, Napoleon's army was in flight. Wellington said it was 'the nearest run thing you ever saw in your life'.",
    losses: "French: about 25,000 killed and wounded and 8,000 captured. Wellington's army: about 17,000. Prussians: about 7,000.",
    sources: [
      ["Alessandro Barbero, The Battle: A New History of Waterloo (2005)"],
      ["David Chandler, The Campaigns of Napoleon (1966)"],
      ["English Wikipedia: Battle of Waterloo", "https://en.wikipedia.org/wiki/Battle_of_Waterloo"]
    ]
  }
};

// Connections between battles (same war, same commander, or cause and consequence). Read in both directions.
const LINKS = {
  helsingborg: ["lund", "poltava"],
  milnebay: ["guadalcanal", "marcoral"],
  beaumonthamel: ["somme", "vimy"],
  dieppe: ["normandia"],
  lexingtonconcord: ["bunkerhill"],
  iadrang: ["hue"],
  fallujah2004: ["mosul2017"],
  maratona: ["termopilas", "salamina", "plateia"],
  termopilas: ["salamina", "plateia"],
  queroneia: ["leuctra", "isso"],
  isso: ["gaugamela", "hidaspes"],
  trasimeno: ["canas", "zama"],
  canas: ["zama", "pidna"],
  farsalia: ["alesia", "carras", "accio"],
  yarmuk: ["guadalete", "tours"],
  hattin: ["jerusalem1099", "ainjalut"],
  mohi: ["bagda", "ainjalut", "hakata"],
  crecy: ["azincourt", "orleans"],
  aljubarrota: ["alcacerquibir"],
  alcacerquibir: ["guararapes"],
  guararapes: ["jenipapo"],
  constantinopla: ["ankara", "mohacs", "lepanto", "viena"],
  nagashino: ["sekigahara", "hansan"],
  austerlitz: ["trafalgar", "borodino", "leipzig", "waterloo"],
  saratoga: ["yorktown"],
  riachuelo: ["tuiuti"],
  grunwald: ["tannenberg"],
  marne: ["verdun", "somme"],
  pearlharbor: ["midway", "guadalcanal", "iwojima"],
  moscou: ["stalingrado", "kursk", "berlim"],
  normandia: ["ardenas", "berlim", "montecastelo"]
};
