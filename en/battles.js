// Battle data. Troop numbers are historians' estimates; ancient sources often exaggerate.
// era: "antiga" (before 500), "medieval" (500-1500), "moderna" (1500-1900), "contemporanea" (1900+)
const BATTLES = [
  {
    id: "maratona", name: "Marathon", year: -490, date: "September 490 BC", era: "antiga",
    place: "Plain of Marathon, Greece", lat: 38.118, lng: 23.978,
    a: { side: "Athens and Plataea", leader: "Miltiades", troops: "≈ 10,000", n: 10000 },
    b: { side: "Persian Empire", leader: "Datis and Artaphernes", troops: "≈ 20,000 to 25,000", n: 22500 },
    winner: "a",
    summary: "The Persians landed 40 km from Athens to punish the city for supporting Greek revolts in Asia. The Athenians, alone with Plataea, decided to attack instead of waiting.",
    phases: [
      "Miltiades thinned the center of the Greek line and strengthened the wings, so as to cover the same width as the Persian army.",
      "The hoplites ran the last stretch of the advance, to escape the Persian arrows.",
      "The Greek center gave way, but the wings won and closed in behind the Persians, who fled to their ships."
    ],
    result: "According to Herodotus, 6,400 Persians and 192 Athenians died.",
    legacy: "It was the first great Greek victory over Persia. Legend says a messenger ran to Athens to bring the news, and that is where the name of the long-distance race comes from."
  },
  {
    id: "termopilas", name: "Thermopylae", year: -480, date: "August 480 BC", era: "antiga",
    place: "Pass of Thermopylae, Greece", lat: 38.796, lng: 22.536,
    a: { side: "Greek alliance", leader: "Leonidas I of Sparta", troops: "≈ 7,000 (300 Spartans)", n: 7000 },
    b: { side: "Persian Empire", leader: "Xerxes I", troops: "≈ 100,000 to 150,000", n: 120000 },
    winner: "b",
    summary: "Xerxes invaded Greece with one of the largest armies of antiquity. The Greeks tried to hold him in a narrow pass between the mountain and the sea.",
    phases: [
      "For two days, the narrow pass cancelled out the Persian advantage in numbers. Not even the Immortals, Xerxes' elite guard, managed to get through.",
      "A Greek named Ephialtes showed the Persians a mountain path that led to the Greek rear.",
      "Leonidas sent most of the army away and stayed with about 300 Spartans, 700 Thespians and other allies. All of them died fighting."
    ],
    result: "Persian victory. Athens was burned weeks later.",
    legacy: "It became the greatest symbol of resistance against all odds. The Persian fleet was defeated at Salamis the same year."
  },
  {
    id: "gaugamela", name: "Gaugamela", year: -331, date: "1 October 331 BC", era: "antiga",
    place: "Near Mosul, present-day Iraq", lat: 36.36, lng: 43.25,
    a: { side: "Macedon", leader: "Alexander the Great", troops: "≈ 47,000", n: 47000 },
    b: { side: "Persian Empire", leader: "Darius III", troops: "≈ 50,000 to 100,000", n: 75000 },
    winner: "a",
    summary: "Darius chose an open plain and had the ground leveled for his scythed chariots. He wanted to finish Alexander once and for all.",
    phases: [
      "Alexander advanced diagonally to the right, pulling the Persian cavalry off the prepared ground.",
      "The scythed chariots charged, but the Macedonian infantry opened lanes and let them pass through without doing any damage.",
      "A gap opened in the Persian center. Alexander attacked through it with the Companion cavalry, straight at Darius, who fled."
    ],
    result: "Decisive Macedonian victory. Darius was murdered by his own nobles the following year.",
    legacy: "It was the end of the 200-year-old Achaemenid Persian Empire. Alexander became lord of everything from Egypt to India."
  },
  {
    id: "canas", name: "Cannae", year: -216, date: "2 August 216 BC", era: "antiga",
    place: "Apulia, southern Italy", lat: 41.306, lng: 16.132,
    a: { side: "Carthage", leader: "Hannibal Barca", troops: "≈ 50,000", n: 50000 },
    b: { side: "Roman Republic", leader: "Varro and Aemilius Paullus", troops: "≈ 86,000", n: 86000 },
    winner: "a",
    summary: "Hannibal had crossed the Alps with elephants and had already beaten Rome twice. Rome gathered the largest army in its history to crush him.",
    phases: [
      "Hannibal formed the center in an arc, bowed forward, with Gauls and Spaniards. On the wings he placed his best African infantry.",
      "The Romans pushed the center, which gave way on purpose, and were gradually sucked into the arc.",
      "The Africans closed in from the sides and the Carthaginian cavalry struck from behind. The Romans were surrounded and packed too tightly even to fight."
    ],
    result: "About 50,000 Romans died, among them the consul Aemilius Paullus.",
    legacy: "It is the most famous example of a double envelopment, studied to this day in military academies. Even so, Rome did not surrender and won the war 14 years later."
  },
  {
    id: "alesia", name: "Alesia", year: -52, date: "September 52 BC", era: "antiga",
    place: "Burgundy, France", lat: 47.537, lng: 4.5,
    a: { side: "Roman Republic", leader: "Julius Caesar", troops: "≈ 60,000", n: 60000 },
    b: { side: "Gallic tribes", leader: "Vercingetorix", troops: "≈ 80,000 besieged + relief army", n: 180000 },
    winner: "a",
    summary: "Vercingetorix united the Gallic tribes against Rome and took refuge in the fortress of Alesia, on top of a hill.",
    phases: [
      "Caesar surrounded the hill with about 18 km of walls, ditches and traps, to starve the Gauls.",
      "When he learned that an enormous Gallic army was coming to relieve the town, he built a second ring, about 21 km long, facing outward.",
      "The Romans fought between the two rings, attacked from inside and outside at the same time. Caesar personally led the cavalry to the weakest point and turned the battle."
    ],
    result: "Vercingetorix surrendered. He was paraded in Rome and executed years later.",
    legacy: "It was the end of independent Gaul. The victory gave Caesar the prestige he used to seize power in Rome."
  },
  {
    id: "teutoburgo", name: "Teutoburg Forest", year: 9, date: "September AD 9", era: "antiga",
    place: "Kalkriese, Germany", lat: 52.408, lng: 8.13,
    a: { side: "Germanic tribes", leader: "Arminius", troops: "≈ 15,000 to 20,000", n: 17500 },
    b: { side: "Roman Empire", leader: "Publius Quinctilius Varus", troops: "3 legions, ≈ 15,000 to 20,000", n: 17500 },
    winner: "a",
    summary: "Arminius was a Germanic man raised in Rome and an officer in the Roman army. Varus trusted him, and he betrayed him.",
    phases: [
      "Arminius persuaded Varus to change his route to put down a supposed revolt, along a path through forest and swamp.",
      "In heavy rain, the Roman column stretched out for miles along a narrow trail, unable to form up.",
      "The Germanic warriors attacked for three days in a row. Varus killed himself, and the three legions were destroyed."
    ],
    result: "Legions XVII, XVIII and XIX were annihilated and never received those numbers again.",
    legacy: "Rome gave up on conquering Germania, and the Rhine became a border for 400 years. They say Augustus cried out: \"Varus, give me back my legions!\""
  },
  {
    id: "penhascos", name: "Red Cliffs", year: 208, date: "Winter of AD 208", era: "antiga",
    place: "Yangtze River, China", lat: 29.88, lng: 113.62,
    a: { side: "Alliance of Sun Quan and Liu Bei", leader: "Zhou Yu", troops: "≈ 50,000", n: 50000 },
    b: { side: "Cao Cao", leader: "Cao Cao", troops: "≈ 200,000 (according to the sources)", n: 200000 },
    winner: "a",
    summary: "Cao Cao controlled northern China and came down the Yangtze with a gigantic fleet to conquer the south.",
    phases: [
      "Cao Cao's army, coming from the north, suffered from disease and from being unused to fighting on water.",
      "An allied general, Huang Gai, pretended he wanted to surrender and sailed toward Cao Cao's fleet with boats loaded with firewood and oil.",
      "Close to the fleet, the boats were set on fire. The wind spread the flames through the enemy ships and the camps on the shore."
    ],
    result: "Cao Cao withdrew to the north with heavy losses.",
    legacy: "China stayed divided into three kingdoms for decades. The battle is one of the central scenes of the classic \"Romance of the Three Kingdoms\"."
  },
  {
    id: "ainjalut", name: "Ain Jalut", year: 1260, date: "3 September 1260", era: "medieval",
    place: "Jezreel Valley, present-day Israel", lat: 32.55, lng: 35.36,
    a: { side: "Mamluk Sultanate of Egypt", leader: "Qutuz and Baibars", troops: "≈ 15,000 to 20,000", n: 17500 },
    b: { side: "Mongol Empire", leader: "Kitbuqa", troops: "≈ 10,000 to 20,000", n: 15000 },
    winner: "a",
    summary: "The Mongols had just destroyed Baghdad and seemed impossible to stop. Egypt was the next target.",
    phases: [
      "Baibars attacked with a vanguard and then pretended to flee, the old tactic of the Mongols themselves.",
      "Kitbuqa chased the fugitives into the valley, where the bulk of the Mamluk army was hidden in the hills.",
      "The Mamluks closed the ring. Kitbuqa was captured and executed."
    ],
    result: "Mamluk victory.",
    legacy: "It was the first great Mongol defeat in a pitched battle, and their advance in the Middle East stopped there."
  },
  {
    id: "hastings", name: "Hastings", year: 1066, date: "14 October 1066", era: "medieval",
    place: "Sussex, England", lat: 50.912, lng: 0.487,
    a: { side: "Normans", leader: "William, Duke of Normandy", troops: "≈ 7,000 to 8,000", n: 7500 },
    b: { side: "Kingdom of England", leader: "Harold II", troops: "≈ 7,000 to 8,000", n: 7500 },
    winner: "a",
    summary: "Harold had just defeated a Viking invasion in the north when William landed in the south. He marched 400 km to face him.",
    phases: [
      "The English formed a shield wall on top of a hill and held out for hours.",
      "The Normans pretended to flee more than once. Part of the English came down the hill to chase them and was surrounded.",
      "Harold died late in the afternoon, according to tradition with an arrow in the eye, and the English defense collapsed."
    ],
    result: "William was crowned King of England on Christmas Day 1066.",
    legacy: "The Norman Conquest changed England: its nobility, its architecture and even its language, which absorbed thousands of French words."
  },
  {
    id: "azincourt", name: "Agincourt", year: 1415, date: "25 October 1415", era: "medieval",
    place: "Northern France", lat: 50.463, lng: 2.142,
    a: { side: "Kingdom of England", leader: "Henry V", troops: "≈ 6,000 to 9,000 (mostly archers)", n: 7500 },
    b: { side: "Kingdom of France", leader: "Charles d'Albret", troops: "≈ 12,000 to 15,000", n: 13500 },
    winner: "a",
    summary: "The English army, tired and sick, was trying to get home when the French cornered it, during the Hundred Years' War.",
    phases: [
      "The field was narrow, between two woods, and soaked with mud after a night of rain.",
      "The heavily armored French knights bogged down in the mud under a rain of arrows from the English longbows.",
      "The French waves piled up on top of one another. The archers dropped their bows and fought with axes and swords."
    ],
    result: "English victory, with thousands of French nobles killed or captured.",
    legacy: "It was the victory of the longbow over heavy cavalry. Shakespeare immortalized it in \"Henry V\"."
  },
  {
    id: "lepanto", name: "Lepanto", year: 1571, date: "7 October 1571", era: "moderna",
    place: "Gulf of Patras, Greece", lat: 38.25, lng: 21.3,
    a: { side: "Holy League (Spain, Venice, the Papacy)", leader: "Don John of Austria", troops: "≈ 200 galleys", n: 212 },
    b: { side: "Ottoman Empire", leader: "Ali Pasha", troops: "≈ 210 galleys and 60 to 90 galliots", n: 270 },
    winner: "a",
    summary: "The Ottomans had taken Cyprus from Venice. The Catholic powers united to face the Turkish fleet.",
    phases: [
      "The two fleets faced each other in lines miles long. The League placed six galleasses in front, enormous ships full of cannon.",
      "The galleasses threw the Ottoman fleet into disorder before the main clash.",
      "The flagships boarded each other as on a floating battlefield. Ali Pasha was killed, and the Turkish fleet fell apart."
    ],
    result: "The Ottomans lost most of their fleet.",
    legacy: "It was one of the last great battles of oared galleys. Miguel de Cervantes, author of Don Quixote, fought in it and lost the use of his left hand."
  },
  {
    id: "guararapes", name: "Guararapes", year: 1648, date: "19 April 1648", era: "moderna",
    place: "Jaboatão dos Guararapes, Pernambuco", lat: -8.16, lng: -34.94,
    a: { side: "Luso-Brazilians", leader: "Francisco Barreto, Vidal de Negreiros, Henrique Dias, Filipe Camarão", troops: "≈ 2,200", n: 2200 },
    b: { side: "Holland (WIC)", leader: "Sigismund von Schkoppe", troops: "≈ 4,500", n: 4500 },
    winner: "a",
    summary: "The Dutch had controlled the sugar-producing Northeast for almost 20 years. A local uprising decided to drive them out.",
    phases: [
      "The Luso-Brazilians, outnumbered, occupied the hills and swamps of Guararapes, which they knew well.",
      "The Dutch, trained to fight in open country, were thrown into confusion on the narrow ground.",
      "Whites, Indigenous people (with Filipe Camarão) and Black men (with Henrique Dias) attacked together, using guerrilla tactics."
    ],
    result: "Luso-Brazilian victory. A second battle in the same place, in 1649, confirmed the result.",
    legacy: "The Dutch left Brazil in 1654. The date of 19 April is celebrated as Brazilian Army Day."
  },
  {
    id: "waterloo", name: "Waterloo", year: 1815, date: "18 June 1815", era: "moderna",
    place: "Near Brussels, Belgium", lat: 50.68, lng: 4.41,
    a: { side: "Coalition (United Kingdom, Prussia and allies)", leader: "Wellington and Blücher", troops: "≈ 68,000 + 50,000 Prussians", n: 118000 },
    b: { side: "French Empire", leader: "Napoleon Bonaparte", troops: "≈ 73,000", n: 73000 },
    winner: "a",
    summary: "Napoleon escaped from exile on Elba and retook power. Europe united against him once again.",
    phases: [
      "The previous night's rain delayed the start of the French attack, which gave the Prussians time to approach.",
      "The French attacked the farm of Hougoumont and Wellington's center for hours, without managing to break through.",
      "The Prussians arrived on the flank. The final attack of the Imperial Guard was repulsed, and the French army fled."
    ],
    result: "Napoleon abdicated four days later and was exiled to Saint Helena, where he died.",
    legacy: "It was the end of the Napoleonic era. \"Waterloo\" became a byword for final defeat."
  },
  {
    id: "riachuelo", name: "Riachuelo", year: 1865, date: "11 June 1865", era: "moderna",
    place: "Paraná River, near Corrientes, Argentina", lat: -27.55, lng: -58.8,
    a: { side: "Empire of Brazil", leader: "Admiral Barroso", troops: "9 ships", n: 9 },
    b: { side: "Paraguay", leader: "Pedro Ignacio Meza", troops: "8 steamers + 6 or 7 barges and artillery on the bank", n: 14 },
    winner: "a",
    summary: "At the start of the Paraguayan War, the Paraguayan fleet tried to take the Brazilian squadron, anchored in the Paraná River, by surprise.",
    phases: [
      "The Paraguayans attacked in the morning, supported by cannon hidden on the river bluffs.",
      "According to tradition, Barroso sent the signal: \"Brazil expects every man to do his duty\".",
      "On the frigate Amazonas, he used the hull itself as a ram and sank or disabled several enemy ships."
    ],
    result: "The Paraguayan fleet was practically destroyed.",
    legacy: "Paraguay lost its squadron and control of the Paraná, and the victory set the course of the war. 11 June is the Navy Day (Data Magna) of the Brazilian Navy."
  },
  {
    id: "midway", name: "Midway", year: 1942, date: "4 to 7 June 1942", era: "contemporanea",
    place: "Midway Atoll, Pacific Ocean", lat: 28.2, lng: -177.37,
    a: { side: "United States", leader: "Nimitz and Spruance", troops: "3 aircraft carriers", n: 3 },
    b: { side: "Japan", leader: "Yamamoto and Nagumo", troops: "4 aircraft carriers (in the strike force)", n: 4 },
    winner: "a",
    summary: "Six months after Pearl Harbor, Japan wanted to lure the American fleet into a trap at Midway.",
    phases: [
      "The Americans had broken part of the Japanese naval code and knew where and when the attack would come.",
      "The first American attacks failed, but they kept the Japanese air defense busy down low.",
      "Within minutes, American dive bombers hit three carriers full of planes and fuel. The fourth sank hours later."
    ],
    result: "Japan lost 4 aircraft carriers, and the US lost 1, the Yorktown.",
    legacy: "It was the turning point of the war in the Pacific. From then on, Japan was on the defensive."
  },
  {
    id: "stalingrado", name: "Stalingrad", year: 1942, date: "August 1942 to February 1943", era: "contemporanea",
    place: "Volgograd, Russia", lat: 48.708, lng: 44.513,
    a: { side: "Soviet Union", leader: "Zhukov, Chuikov", troops: "more than 1 million (over the course of the battle)", n: 1100000 },
    b: { side: "Germany and Axis allies", leader: "Friedrich Paulus", troops: "≈ 1 million (over the course of the battle)", n: 1000000 },
    winner: "a",
    summary: "Hitler wanted the city that bore Stalin's name and control of the Volga River, on the way to the oil of the Caucasus.",
    phases: [
      "The Germans took almost the whole city, but the fighting turned into street combat, building by building, sometimes floor by floor.",
      "On 19 November 1942, Operation Uranus struck the flanks, defended by Romanians, and encircled the German 6th Army.",
      "Without supplies, in the Russian winter, Paulus surrendered on 31 January 1943, and the last pocket on 2 February."
    ],
    result: "About 91,000 Germans were captured. Adding both sides together, casualties exceed 1.5 million, according to estimates.",
    legacy: "It is one of the bloodiest battles in history and the turning point of the war on the Eastern Front."
  },
  {
    id: "normandia", name: "D-Day (Normandy)", year: 1944, date: "6 June 1944", era: "contemporanea",
    place: "Normandy coast, France", lat: 49.37, lng: -0.87,
    a: { side: "Allies (US, United Kingdom, Canada and others)", leader: "Dwight Eisenhower", troops: "≈ 156,000 on the first day", n: 156000 },
    b: { side: "Germany", leader: "Erwin Rommel and von Rundstedt", troops: "≈ 50,000 on the attacked coast", n: 50000 },
    winner: "a",
    summary: "The largest amphibious landing in history, to open a front in the west and liberate occupied France.",
    phases: [
      "In the early hours, paratroopers dropped behind the lines to seize bridges and crossroads.",
      "In the morning, troops landed on five beaches: Utah, Omaha, Gold, Juno and Sword. Omaha was the bloodiest.",
      "A deception operation had convinced Hitler that the main attack would come at Calais, and the German reserves were slow to arrive."
    ],
    result: "By the end of the day, the Allies had a beachhead in France.",
    legacy: "Paris was liberated in August, and Germany surrendered 11 months later."
  }
];
