// In-depth battles, batch n: constantinopla, ugra, granada, diu, malaca, noitetriste.
// Checked against the English and Portuguese Wikipedia articles on each event (Fall of Constantinople, Walls of
// Constantinople, Giovanni Giustiniani, Kerkoporta, Great Stand on the Ugra River, the Russian article on the Ugra,
// Granada War, Santa Fe, Capitulaciones de Granada, Battle of Diu, Capture of Malacca, Malacca Sultanate,
// La Noche Triste, Noche Triste) and the biographies of Ivan III, Albuquerque and Cortés, plus the works they cite
// (Philippides and Hanak, Nicolle, Crowley, Hillgarth, Ladero Quesada, Halperin, Ostrowski, Bernal Diaz,
// Lopez de Gomara, Correia, Da Empoli). Britannica could not be opened, so it was not used.

Object.assign(GLOSSARY, {
  "muralhas de teodósio": "The land walls of Constantinople: a moat, a low wall and, behind it, a high wall with towers. They ran about 5.5 km and protected the city on the land side.",
  "corrente": "An iron chain, held up by floating logs, stretched across the entrance of the Golden Horn, the harbor of Constantinople, to keep enemy ships out.",
  "azaps": "Irregular Ottoman soldiers, poorly trained and poorly armed, who attacked in waves. They served to tire the defenders before the elite troops came in.",
  "contramina": "A tunnel dug by the defenders to find and destroy the tunnel the enemy was digging under the wall.",
  "patriarca": "The head of the Orthodox Church in a great city, such as Constantinople. It is a post similar to that of a supreme archbishop.",
  "nau": "A large, tall and heavy sailing ship, used for cargo and war. The Portuguese used it on their voyages to the East.",
  "carraca": "A tall and heavy sailing ship, for cargo and war, used in the Mediterranean and the Atlantic. The large ships of the Egyptian fleet at Diu were carracks.",
  "caravela": "A small, light and fast sailing ship that drew little water. It was used to explore, carry messages and give chase.",
  "galé": "A warship driven by oars and also by sail, low and long. It was good for maneuvering in calm waters, but fragile near tall ships.",
  "fusta": "A small and fast warship, with oars and sail, used in the seas of the Indian Ocean.",
  "vice-rei": "A governor who represents the king in a distant territory and rules in his name. Francisco de Almeida was the first Portuguese viceroy of India.",
  "feitoria": "A fortified trading post, founded by Europeans on foreign soil, to buy, store and sell goods.",
  "xerafim": "A gold or silver coin used in India and in the ports of the Indian Ocean in the 16th century.",
  "cruzado": "A Portuguese gold coin of the 16th century. The sums from the sack of Malacca were counted in cruzados.",
  "bendahara": "The senior minister of the Malay sultanate, a kind of prime minister.",
  "laksamana": "The admiral of the Malay sultanate, commander of the fleet.",
  "arcabuz": "A portable firearm of the 15th and 16th centuries, heavy and slow to reload, the predecessor of the musket.",
  "emirado": "A kingdom ruled by an emir, the title of a Muslim leader. The Emirate of Granada was the last Muslim kingdom of the Iberian Peninsula.",
  "capitulações": "A surrender treaty, in which the defeated hand over the city and the victor promises to respect certain conditions. Those of Granada had 77 articles.",
  "mudéjares": "Muslims who kept living under Christian rule in Spain, keeping their religion and customs.",
  "tlatoani": "The title of the ruler of an Aztec city. The one of Tenochtitlan was the supreme head of the empire, the 'emperor' of the Spanish accounts.",
  "tlaxcaltecas": "A people of the Mexican highlands, enemies of the Aztecs, who allied with Cortés.",
  "calçada": "A raised road of earth and stone, built across the water. The causeways linked the island of Tenochtitlan to the mainland, and had gaps cut by canals, crossed by wooden bridges.",
  "macuahuitl": "An Aztec weapon of wood with obsidian blades set along the edges, like a sawtooth sword.",
  "calendário juliano": "The calendar used in Europe until the 16th century. It ran about 10 to 12 days behind the Sun, which is why the dates of 1520 change depending on the source.",
  "grande horda": "What was left of the Golden Horde in the 15th century, ruled by Akhmat. It was destroyed by the Crimean Khanate in 1502.",
  "jugo tártaro": "What the Russians call the period when their princes paid tribute to the khans of the Golden Horde and depended on them to rule.",
  "murza": "A Tatar noble, head of a clan or of a group of warriors."
});

Object.assign(DEEP, {
  constantinopla: {
    war: "Ottoman conquest of Constantinople (siege from 6 April to 29 May 1453)",
    hook: "Fifty-three days of siege, giant cannons and ships dragged over a hill: this is how the last piece of the Roman Empire fell.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1453, the Eastern Roman Empire, which historians call [[Byzantine|bizantinos]], was a shadow of what it had been. Only the capital remained, and little more, surrounded by Ottoman lands. Constantinople had fewer than 50,000 inhabitants inside its walls, but it was still one of the most famous cities in the world, protected by the [[Walls of Theodosius|muralhas de teodósio]]: some 5.5 km of land walls, with a moat about 20 meters wide in front, a low wall, and behind it another, about 12 meters high, with towers. On the other side, the sea protected the city, and the entrance to the harbor, the Golden Horn, could be closed by a [[chain|corrente]].",
        "The weak point was the valley of the Lycus River, where the ground drops and the wall is lower. That was where the Mesoteichion, the 'middle wall', stood, the most vulnerable stretch. Mehmed II knew this.",
        { h: "The road to the siege" },
        { timeline: [
          ["1451", "Mehmed II, aged 19, becomes sultan. Some advisers, such as the vizier Halil Pasha, are against attacking Constantinople."],
          ["1452", "Mehmed builds a fortress on the Bosporus strait, some 10 km north of the city, and puts cannons there to control the ships that brought supplies."],
          ["Late January 1453", "The Genoese Giovanni Giustiniani Longo arrives with about 700 men, from Genoa and the island of Chios, to help with the defense."],
          ["2 April 1453", "The Ottoman army camps in front of the land walls."],
          ["6 April 1453", "The siege begins."]
        ]},
        "The city asked the West for help. Venice sent armor and gunpowder, but no troops. Constantinople was going to fight almost alone."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Mehmed II, 21 years old" },
        "Ottoman sultan since the age of 19. The fortress he built on the Bosporus, in 1452, shows he was already planning the siege: it cut the path of the supply ships. His advisers did not agree. Halil Pasha, the vizier, wanted to give up. Zagan Pasha, commander of the sappers and of the troops north of the Golden Horn, wanted to attack at once. Mehmed sided with Zagan.",
        { h: "Constantine XI Palaiologos" },
        "The last Byzantine emperor. He knew he was going to be besieged and tried to prepare: he stocked food and had the walls repaired. He took the most dangerous stretch, the Mesoteichion, and commanded the Greek soldiers. When Mehmed offered to spare the city in exchange for surrender, he refused: he replied that it was not up to him to hand it over.",
        { h: "Giovanni Giustiniani Longo" },
        "A Genoese, he arrived at the end of January 1453 with about 700 men. Constantine made him protostrator and leader of the defense, and he took the lowest and most strategic part of the walls, between the gate of St. Romanus and the gate of Charisius. Later, he came to fight beside the emperor, at the Mesoteichion.",
        { h: "Orban, the cannon founder" },
        "A Hungarian engineer (some say German), who first offered his services to the Byzantines. Since they could not pay, he went over to Mehmed's side and cast for him the largest cannon of the battle, the 'Basilica'.",
        { h: "The other names" },
        "On the Ottoman side, Karadja Pasha commanded the European troops at the land walls, and Ishak Pasha those from Anatolia south of the valley; Suleiman Baltoghlu, the fleet. On the Christian side, Loukas Notaras commanded one of the reserves; Girolamo Minotto, the Venetians at the Blachernae palace; the German Johannes Grant, the engineer who organized the countermines."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Ottomans: modern estimates, based on Turkish archives, fall between 50,000 and 80,000 men, with 5,000 to 10,000 [[Janissaries|janízaros]]. Western witnesses of the time spoke of 160,000, 200,000 and even 300,000, numbers that historians consider exaggerated. The Ottoman fleet had about 110 ships, and the chroniclers of the time say as many as 430.",
        "The defenders: about 7,000 men, of whom some 2,000 were foreigners, Genoese, Venetians, Catalans and others. The chronicler Sphrantzes, who was there, counted about 5,000 Greeks able to fight (4,983, in one of the totals). In all, 26 Christian ships in the harbor.",
        { note: "The numbers of the siege are much debated. The Ottomans may have been 50,000 to 80,000 (modern estimates) or 300,000 (witnesses of the time). In any case, they were far more numerous than the defenders." },
        { h: "The artillery" },
        "Orban's great cannon was more than 8 meters long. The numbers change depending on the source: the stone ball would have weighed from 270 to some 550 kilos. It was dragged from Edirne by 60 oxen and from 200 to 400 men, depending on the source. It took three hours to reload, and the stone balls were few. According to one account (from Leonard of Chios and a Russian chronicler), it cracked after six weeks, but other historians doubt this. In all, the Ottomans fired about 5,000 shots and used up 55,000 pounds of gunpowder before the final assault. According to the English Wikipedia, the defenders repaired most of the damage after each shot.",
        { h: "The battle in ten movements" },
        { formation: true },
        "First, the siege. The Ottomans camped in front of the land walls, with Karadja Pasha and the European troops along them, Ishak Pasha and those from Anatolia south of the Lycus valley, and Mehmed's tent near the Mesoteichion, with the cannons and the Janissaries. The defenders spread out along the two walls, with Constantine and Giustiniani at the stretch in the valley.",
        "Second, the bombardment. For weeks, the cannons pounded the Lycus valley, and the defenders repaired the damage. On 12 April, the Ottoman fleet was repulsed in the Golden Horn, and on 18 April an assault on the Lycus valley was beaten back by Giustiniani, with fewer men, but better armed.",
        "Third, the chain. On 20 April, four Christian ships broke the blockade and entered the harbor after a heavy fight. It was a boost to morale for the besieged and a humiliation for the sultan. Admiral Baltoghlu was probably wounded in one eye and was punished afterward.",
        "Fourth, the stroke of genius. On 22 April, Mehmed built a road of greased logs behind Galata, the Genoese colony, and dragged some 70 to 80 ships (depending on the author) over the hill to the Golden Horn, beyond the chain. The defenders, already few, now also had to guard the harbor walls. On 28 April, a Christian attack with fire ships against those vessels failed. In retaliation, the sultan had some 40 captured Italians impaled, and the besieged executed 260 Ottoman prisoners on the walls.",
        "Fifth, the mines. From mid-May to 25 May, miners from Novo Brdo, under the command of Zagan Pasha, dug tunnels under the walls. The defenders, with the help of Johannes Grant, opened [[countermines|contramina]], intercepted the tunnels on 16, 21, 23 and 25 May and used [[Greek fire|fogo grego]]. On 21 May, Mehmed offered to lift the siege in exchange for the city, and Constantine refused.",
        "Sixth, the eve. On 22 May there was a partial eclipse of the Moon. Four days later, a thick mist covered the city, and a strange light over the dome of Hagia Sophia was read as the Holy Spirit leaving. On 28 May, Mehmed gave his soldiers a day of rest. Inside the city, there were processions and a vespers service at Hagia Sophia.",
        "Seventh, the first wave. Shortly after midnight on 29 May, the Christian soldiers in the sultan's service attacked first. Then came the [[azaps]], in waves, to tire the defenders.",
        "Eighth, Blachernae. The Turkmens of Anatolia attacked the weakest stretch, near the Blachernae palace, in the northwest. They managed to break through and enter the city, but were driven out.",
        "Ninth, the last wave. Mehmed launched the Janissaries, his elite infantry. At that moment, Giustiniani was gravely wounded and carried off the wall. The Genoese fell back to the harbor, several Greeks ran home, and panic spread. The Janissaries, led by Ulubatlı Hasan, advanced.",
        "Tenth, the fall. The Ottomans entered at several points. The Venetians fell back to their ships and left through the Golden Horn; some Genoese reached Galata. By noon, the Ottoman fleet controlled the harbor."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "According to the historian David Nicolle, about 4,000 Byzantines died. Ottoman losses are unknown, but historians think they were heavy. Mehmed promised three days of plunder and, according to the accounts, entered the city on the first day and ordered the plunder stopped, because little was left to loot after the crusade of 1204. Historians such as Crowley, Bradbury and Akbar speak of about 30,000 citizens taken to the slave markets. The Portuguese Wikipedia gives 50,000 prisoners.",
        "Hagia Sophia became a mosque, and Mehmed named Gennadius Scholarius [[patriarch|patriarca]] of Constantinople, to govern the Orthodox Church under the sultan. The city became the capital of the Ottoman Empire, in place of Edirne. The vizier Halil Pasha was executed later.",
        { h: "Why it matters" },
        "Many historians mark 1453 as the end of the Middle Ages and the end of the Roman Empire, which had lasted since 27 BC, according to the Portuguese Wikipedia. Greek scholars fled to Italy, which fed the Renaissance. And Ottoman control of the routes to the East, some authors say, pushed Europeans to look for paths by sea, like those of Portugal and Spain.",
        "The historian Nicolle points out that the city was not doomed in advance: some call it the best-defended city in Europe, and the outcome could have been different.",
        { h: "Curiosities and controversies" },
        { note: "Constantine's fate is unknown. According to tradition, he took off the imperial insignia and died fighting in the streets. The Venetian Nicolò Barbaro says he hanged himself at the gate of St. Romanus, but his account was based on later information. Some Ottoman sources speak of a chance encounter with Turkish soldiers. A head said to be his was put on display." },
        { note: "Giustiniani: Barbaro, hostile to the Genoese, says that he only pretended to be wounded, out of fear, and caused the fall. Other historians, such as Philippides and Hanak, show that several sources say he was truly wounded. Giustiniani died on 1 June, on the way to Chios, where he was buried. Genoa sent letters denying the accusation of cowardice." },
        { note: "The Kerkoporta: according to the chronicler Doukas, a small side gate was left open by oversight on the morning of 29 May, and some 50 Turks entered through it and raised their flag on the inner wall, which supposedly set off the panic. But excavations did not find a gate by that name in the inner wall, and the story may be an invention or a legend." },
        { note: "The bad omen: 29 May 1453 was a Tuesday. For the Greeks, Tuesday has been an unlucky day ever since." },
        { note: "The artillery: the account that the great cannon cracked appears in only two sources, and one of them is not very reliable. The real effect of the cannons is also debated: Wikipedia says they opened breaches, but the article on the walls says they were never opened by artillery alone, and that the decisive entry came through a gate, on the morning of 29 May." }
      ]}
    ]
  },

  ugra: {
    war: "War between Moscow and the Great Horde (1480)",
    hook: "Two armies spent a month staring at each other across a river. According to Russian tradition, this is how the Tatar yoke ended.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 15th century, the [[Golden Horde|horda dourada]], the Mongol empire that dominated the Russian princes, was in pieces. What was left of it was called the [[Great Horde|grande horda]]. The Russian princes, among them the prince of Moscow, paid [[tribute|tributo]] to the khans, who also confirmed who would be [[grand prince|grão-príncipe]].",
        "Two blocs formed. On one side, King Casimir IV of Poland and Lithuania, an ally of the Great Horde. On the other, Moscow, an ally of the Crimean Khanate. The border between Moscow and Lithuania ran along the Ugra River, near Kaluga, and Moscow defended the bank of the Oka River, which ran a little to the north.",
        { h: "The road to the Ugra" },
        { timeline: [
          ["1472", "Khan Akhmat attacks Aleksin, on the Oka River, and is repulsed."],
          ["1476", "Ivan III stops paying tribute. According to the historian Charles Halperin, Moscow kept up formal relations with the Horde for some 20 years."],
          ["Late 1479", "Ivan quarrels with his brothers Andrei the Great and Boris of Volotsk, who begin to negotiate with Casimir IV."],
          ["Late May 1480", "News reaches Moscow that Akhmat is coming with his army."],
          ["June 1480", "Ivan places troops along the Oka River, at Serpukhov, Tarusa and Kolomna."]
        ]},
        "Historians think Ivan's quarrel with his brothers may have encouraged Akhmat to attack. It was a chance to find the grand prince divided."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Ivan III, grand prince of Moscow" },
        "His reign consolidated the power of Moscow and, by its end, Russia was no longer under Tatar rule. But in 1480 he hesitated. The boyars were divided: one group, led by Ivan Oshchera and Grigory Mamon, wanted him to flee; another wanted to resist. The population of Moscow demanded that he act. Ivan sent an envoy, Ivan Tovarkov, with gifts. Akhmat demanded submission (from Ivan himself, his son or his brother) and seven years of back tribute, and the negotiations ended.",
        { h: "Akhmat, khan of the Great Horde" },
        "He wanted to restore dominion over Moscow and collect the tribute. He planned the attack counting on Casimir IV, who had promised help and did not come. Attacks by Crimean Tatars on Podolia, in southern Lithuania, kept Casimir busy.",
        { h: "The other names" },
        "Ivan Molodoi, Ivan's son, commanded the stretch of the river where Akhmat attacked on 8 October. Vassian, archbishop of Rostov, is said to have written a letter urging the grand prince to resist (the date of the letter is debated). Prince Vasily Nozdrevaty and the former khan of Crimea Nur-Devlet are said to have been sent to attack Akhmat's rear."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No reliable source gives numbers for the two sides. One source calls Akhmat's army the largest Tatar army of the 15th century, but without giving numbers. The [[Horde|horda dourada]] was made up almost entirely of horsemen, who moved with herds. On the Russian side, the sources only say that there were cannons and [[arquebuses|arcabuz]].",
        { h: "The terrain" },
        "The Ugra is a river that flows into the Oka, near Kaluga. The Russians defended a long river line, of some 60 versts (about 64 km), according to the historian M. Nesin. At the time, the river was too wide for the Tatars' arrows to have any effect on the other side.",
        { h: "The maneuvers" },
        "Akhmat came through the lands of Lithuania, passing Mtsensk, Odoev and Lyubutsk, as far as Vorotynsk, and waited for Casimir. On 30 September, Ivan returned to Moscow, made peace with his brothers, who submitted, and sent the treasury and the family to Beloozero. On 3 October, he went to Kremenets, near the river, and spread out his troops.",
        "On 8 October, Akhmat attacked the Ugra. For about four days, he tried to force the crossing at the fords. The Russians repelled him with cannons and arquebuses. The English Wikipedia calls this the first mass use of portable firearms in a field battle, but it is a claim to take with care. Then, Akhmat fell back to Luza and tried a secret crossing near Opakov, but was discovered.",
        "For about a month, the two sides stayed on their banks. There were negotiations and some skirmishing, but no decisive battle. Ivan needed the time to bring reinforcements. At the end of October, Ivan fell back to Borovsk, to concentrate troops and fight on better ground. Shortly after, Akhmat also began to retreat, short of fodder and food. On 11 November, he decided to return to the Horde, and on the way he plundered 12 Lithuanian towns, among them Mtsensk, to punish Casimir. Ivan returned to Moscow on 28 November.",
        { h: "Why Akhmat withdrew" },
        "No one knows for sure. Historians cite several reasons: Casimir did not come, Ivan strengthened his troops by making peace with his brothers, winter was approaching, food and fodder were lacking and Akhmat may have feared an ambush. The chronicler Stryjkowski says that one of Akhmat's counselors was bribed. And, according to the historian Khodarkovsky, Akhmat himself claimed, in a document of his own, that his men were without clothes and the horses without blankets."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "On 6 January 1481, Akhmat was killed by Ibak, khan of Tyumen, and by Nogai [[murzas|murza]], probably with Ivan III's prior agreement. The Great Horde fell into civil war and was destroyed by the Crimean Khanate in 1502. But the Tatar threat did not disappear: the Crimeans plundered southern Russia in 1521 and almost reached Moscow, and in 1571 Khan Devlet I Giray set the city on fire.",
        { h: "Why it matters" },
        "In traditional Russian historiography, 1480 is the date when the [[Tatar yoke|jugo tártaro]] ended, and Russia became an independent state. This is how the story is told to this day, but modern historians dispute it (see below).",
        { h: "Curiosities and controversies" },
        { note: "Modern historians give another reading. Janet Martin called the importance of the episode 'embellished'. Charles Halperin points out that no text from 1480 speaks of liberation from the yoke. Donald Ostrowski and Halperin even describe the episode as a historiographical myth, or a minor diplomatic incident. Gorsky thinks that de facto independence came as early as 1472, at Aleksin." },
        { note: "Ivan III did not boast. In a letter of 1481 to Mengli Giray, he only wrote that God had saved Russia from Akhmat, a much more modest claim than the later legend." },
        { note: "The exact place of the fighting is still debated: Opakov, Gorodets or the mouth of the Ugra. Whether it was a 'standing' or a battle is also debated: there were crossing attempts, shooting and skirmishes, but nothing decisive." },
        { note: "The diversion: the story that Nozdrevaty and Nur-Devlet burned Sarai, the capital of the Horde, comes from the Kazan Chronicle and is considered doubtful. That there was a raid to distract Akhmat is plausible, but poorly documented." }
      ]}
    ]
  },

  granada: {
    war: "Granada War (1482–1492)",
    hook: "The Catholic Monarchs founded a city of stone in front of Granada, to show that they would leave only when the city fell.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1491, the [[emirate|emirado]] of Granada was all that was left of the Muslim world on the Iberian Peninsula. It was ruled by the Nasrid dynasty.",
        "The marriage of Isabella of Castile to Ferdinand of Aragon, in 1469, created a single front against Granada. The war began in December 1481, when the Granadans attacked Zahara during a truce, in retaliation for a Christian raid. The capture of Alhama, the following year, is considered the formal beginning of the war.",
        "What helped the Christians was the infighting inside Granada. Prince Boabdil rebelled against his father, Abu al-Hasan. He was captured at Lucena, in 1483, and Ferdinand used him, releasing him so that he would make war on his own father. In 1485, Boabdil's uncle, al-Zagal, took power, and Boabdil fled to the protection of the monarchs. In 1487, he retook Granada while his uncle was fighting elsewhere.",
        { h: "The road to the siege" },
        { timeline: [
          ["1469", "Marriage of Isabella and Ferdinand."],
          ["26 December 1481", "The Granadans take Zahara, during a truce."],
          ["1483", "Boabdil is captured at Lucena."],
          ["1485 to 1487", "Civil war in Granada. Boabdil, backed by Castile, takes the capital."],
          ["April 1491", "The final siege of Granada begins."]
        ]},
        "The decisive factor was artillery. Ferdinand turned to French and Burgundian specialists, and Castile greatly expanded its cannon, while the Muslims used almost only captured pieces. The historian Weston Cook wrote that gunpowder and artillery sieges won the war of Granada."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Isabella and Ferdinand" },
        "Isabella was queen of Castile and Ferdinand, king of Aragon. Together they ruled two kingdoms that would become Spain. In Granada they had a religious and political goal: to finish the Reconquista. Isabella was present in person at other sieges, such as that of Baza, to keep the soldiers' spirits up. In 1496, the pope would give them the title of Catholic Monarchs.",
        { h: "Boabdil (Abu Abdallah)" },
        "The last emir of Granada. He is numbered Muhammad XI or XII, depending on the author. He was captured and released by his enemies in 1483 and, in 1491, with no hope of outside help, negotiated the surrender. A chronicler of Granada called his capture at Lucena 'the cause of the destruction of the homeland'.",
        { h: "The negotiators" },
        "For the monarchs, Gonzalo Fernández de Córdoba and the secretary Fernando de Zafra. For Boabdil, the alcaide Abu al-Qasim (Abul Kasim). According to Hernán Pérez del Pulgar, Gonzalo went to the Alhambra at night to settle the question of guarantees for Boabdil. Hernando de Talavera, the queen's confessor, would be the first archbishop of Granada, with a policy of conciliation toward the Muslims."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The chroniclers of the time speak of 50,000 to 70,000 men in the years of greatest effort, such as 1491, and of 10,000 to 29,000 in the quiet years. The historian Ladero Quesada accepts these numbers. García de Gabiola disagrees: he thinks Castile could only feed 8,000 to 20,000. There is no reliable number for the forces of Granada. The 15,000 to 50,000 foot soldiers that some cite are dismissed by historians. A Muslim soldier captured at Baza said they were 4,000, not 15,000 (but that was the garrison of Baza, not that of Granada).",
        { h: "The terrain" },
        "The monarchs camped on the vega, the plain in front of the city, in a camp called the Real de la Vega. The Christians also had more artillery, which counted for a lot in a siege.",
        { h: "The siege" },
        "The siege lasted eight months, from April 1491. The Spanish Wikipedia says the phase had 'more intrigue than military events'. The monarchs stayed in a camp on the vega, the Real de la Vega. A fire destroyed a good part of it (some accounts blame a candle in the queen's tent, others speak of an accident; I did not find an exact date). In response, the monarchs had a whole city built in its place, of brick and stone, Santa Fe, in about 80 days, covering 48 hectares, with walls, a moat and four gates. For those under siege, it was a psychological blow: the monarchs were not going away.",
        { h: "The surrender" },
        "With no relief, and with hunger and disorder in the government of Granada, Boabdil negotiated. The sultan of Egypt, Qaitbay, only scolded Ferdinand with words, and the Mamluks did not break the alliance with Castile and Aragon against the Ottomans.",
        "On 25 November 1491, the [[capitulations|capitulações]] were signed, with 77 articles. The Muslims could keep their religion, customs and laws, and no one would be forced to convert. They could keep their arms, except gunpowder weapons, be exempt from some taxes for three years and emigrate to North Africa with passage guaranteed for three years. The Christian captives would be freed. Boabdil would receive money and a small lordship in the Alpujarras. The city would have two months to surrender.",
        "Rumors about the terms provoked riots in Granada, contained by Christian troops and by those loyal to Boabdil. On 2 January 1492, the Christians entered. As a precaution, they brought troops into the Alhambra, in case there was resistance, which there was not. Boabdil left the city that day and never returned."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Boabdil went first to the Alpujarras, the lands guaranteed by the monarchs. In November 1493, after receiving a large indemnity, he crossed the strait to North Africa, like most of the Andalusian elite.",
        "The treaty did not last. The Crown respected the terms until 1499. That year, Cardinal Cisneros received a harsher policy, which caused a revolt in the Albaicín. In 1500 he burned Arabic books, except those on medicine, and in 1501 the forced conversion of the Muslims of Granada was decreed, with no option of exile. The [[Mudéjars|mudéjares]] who remained were, in time, expelled from Spain.",
        { h: "Why it matters" },
        "It was the end of the [[Reconquista|reconquista]], after almost eight centuries, and the incorporation of the Nasrid kingdom into the Crown of Castile. Still in 1492, the Alhambra Decree expelled about 200,000 Jews from Castile and Aragon. And on 17 April 1492, at Santa Fe, the monarchs signed with Christopher Columbus the capitulations that financed his voyage.",
        { h: "Curiosities and controversies" },
        { note: "The capitulations were signed at Santa Fe, according to the Spanish Wikipedia, but the document that confirms them says 'Real de la Vega de Granada'. The two sources do not agree on the place." },
        { note: "The royal privilege that confirmed the terms is dated 30 December 1491 (which in the Castilian calendar of the time, which began the year on 25 December, appears as 1492). That is why both 1491 and 1492 are seen in the sources." },
        { note: "The fire in the camp is famous, but the sources I read do not give the exact date or the cause with certainty." }
      ]}
    ]
  },

  diu: {
    war: "Portuguese expansion in the Indian Ocean (1505–1515)",
    hook: "A grieving father, 18 ships and one February afternoon: that was all it took to destroy the fleet that was trying to drive Portugal out of the Indian Ocean.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Vasco da Gama reached India, in 1498, the Portuguese found that trading in peace was going to be hard. The Muslim merchants who dominated the coastal trade opposed them. In 1500, the Zamorin of Calicut allowed or ordered a massacre of Portuguese in the city. Portugal allied with the raja of Cochin and, in December 1504, destroyed the spice fleet that the Zamorin sent every year to Egypt.",
        "King Manuel I appointed Dom Francisco de Almeida the first [[viceroy|vice-rei]] of India. Almeida left Lisbon in 1505 with about 20 ships and took his son Lourenço, aged 20, as captain-major of the seas of India.",
        "The spice trade through Alexandria and Venice was threatened. The Muslim merchants asked the Mamluk sultan of Egypt for help, and Venice, which was also losing money, encouraged the reaction. The [[Mamluks|mamelucos]] had no experience of the sea, and Venice supplied ships and specialists. The expedition was commanded by the emir Hussain al-Kurdi, whom the Portuguese called Mirocem, and reached Diu only in September 1507, after delays.",
        { h: "The road to Diu" },
        { timeline: [
          ["1498", "Vasco da Gama reaches India."],
          ["December 1504", "The Portuguese destroy the Zamorin's spice fleet."],
          ["September 1507", "The Mamluk fleet arrives at Diu."],
          ["March 1508", "At Chaul, Mirocem and Malik Ayaz face the fleet of Lourenço de Almeida, for three days. Lourenço is killed."],
          ["6 December 1508", "Afonso de Albuquerque arrives with orders from the king to take over the government. Almeida refuses to hand over."],
          ["9 December 1508", "Almeida sets out for Diu with the fleet."],
          ["3 February 1509", "The battle."]
        ]},
        "At Chaul, the Portuguese were caught by surprise because Mirocem's ships, European in style, looked like those of Albuquerque. Lourenço's nau sank, he died, and his body was never found. Mirocem reported a great victory to Cairo, but a Persian chronicle, the Mirat Sikandari, speaks of a skirmish."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Dom Francisco de Almeida" },
        "Viceroy of India. His son's death left him shattered: he stayed three days shut in his quarters and swore revenge. When Albuquerque arrived with the king's order to replace him, Almeida refused to hand over power before avenging his son, which in practice was defying the king. His goal at Diu was personal, but also strategic: in a letter to the king, he would write that as long as Portugal was powerful at sea, it would hold India.",
        { h: "The emir Hussain al-Kurdi (Mirocem)" },
        "Commander of the Mamluk fleet. In ten months, after Chaul, he repaired the ships, recovered a nau and gained some 300 reinforcements. But he had no money to pay the troops and pledged the artillery to Malik Ayaz. He stayed at Diu because he was waiting for reinforcements or feared the sultan's wrath.",
        { h: "Malik Ayaz (Meliqueaz)" },
        "Governor of Diu in the name of the sultan of Gujarat. A former slave and archer, of Georgian or Dalmatian origin, according to Wikipedia. He tried to please everyone and ended up caught between Mirocem, the Portuguese and his sovereign. When Almeida's fleet appeared, he left the city and left Mirocem in command. After the battle, he returned the prisoners from Chaul well treated.",
        { h: "The other names" },
        "João da Nova commanded the nau Flor de la Mar, which blocked the channel. Nuno Vaz Pereira commanded the Espírito Santo, and Francisco de Távora, the Rei Grande. Kunjali Marakkar led the boats of Calicut."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Portuguese fleet had 18 vessels: nine [[naus|nau]] (five large: Flor de la Mar, Espírito Santo, Belém, Rei Grande and Taforeia Grande), four round [[caravels|caravela]], two lateen caravels, two [[galleys|galé]] (São Miguel and São Cristóvão) and a brigantine, the Santo António, which carried messages. The men: from 800 to 1,500 Portuguese, plus about 400 Nairs from Cochin, depending on the source.",
        "The numbers for the Muslim allies vary widely. The text of the English Wikipedia speaks of 6 [[carracks|carraca]] and 6 galleys from the Mediterranean for Mirocem, 4 carracks from Diu, 30 light galleys and 70 to 150 boats from Calicut. The Portuguese version says 10 naus for Mirocem, 30 [[fustas|fusta]] from Diu and 70 to 200 fustas from Calicut. The men: about 450 Mamluks and 4,000 to 5,000 Gujaratis, among them Turkish, Nubian and Ethiopian mercenaries, and Venetian gunners. A good part of the 'artillery' were archers.",
        { note: "Almost all the numbers of this battle differ between the sources. We prefer ranges to exact numbers." },
        { h: "The voyage of vengeance" },
        "On the voyage, Almeida stopped at Calicut, at Bhatkal, at Honavar and at Anjediva. At Dabul, the captain Paio de Sousa was ambushed and killed with others by some 6,000 men. Two days later, Almeida landed with troops, crushed the garrison and had the city razed. The villages around were destroyed, and most of the inhabitants who did not flee were killed. The residents cursed it: 'May the wrath of the Franks come upon you'. At Bombay, Almeida answered a letter from Malik Ayaz in a tone both respectful and threatening: he was going to take revenge on those who killed his son and on those who helped them.",
        { h: "The battle in eight movements" },
        { formation: true },
        "First, on 2 February, the Portuguese sighted Diu. Malik Ayaz left the city, leaving Mirocem in command. Mirocem sent his oared ships to attack, but they came within range of the fortress's cannons and, at night, fell back to the channel.",
        "Second, on 3 February, Mirocem anchored the carracks and galleys side by side, near the coast, under the fortress, and waited for the attack. In doing so, he gave up the initiative. Almeida divided the fleet into four groups: one to board the carracks after a bombardment, another to attack the galleys on the flank, a fire-support group, in which the flagship stayed at a distance, directing the fight, and the Santo António for communications. The captain Simão Martins went through the fleet reading Almeida's speech, which promised plunder, knighthood for the soldiers, pardon for the condemned and freedom for slaves who served.",
        "Third, around 11 a.m., when the breeze blew, the royal banner rose on the Flor de la Mar and a shot gave the signal. The fleet advanced shouting 'Santiago!', with the galley São Miguel sounding the channel ahead. In the calm water of the harbor, the Portuguese used grazing fire, which made the shot skip over the water. A salvo from the Espírito Santo hit a ship at the waterline and sank it almost at once.",
        "Fourth, the Espírito Santo boarded Mirocem's flagship, and the Portuguese took half the deck before the ships were lashed to each other. Another Mamluk nau gripped the Espírito Santo on the other side, and the Portuguese, surrounded by Gujaratis, were nearly overwhelmed. Rui Pereira died. At that critical moment the Rei Grande arrived, which hit the free side of Mirocem's flagship with reinforcements and turned the fight. Up in the rigging, Ethiopian and Turkish archers faced the Portuguese arquebusiers, but many mercenaries fled.",
        "Fifth, Mirocem had kept his oared ships in the channel, to attack from behind, expecting the Portuguese to use all their ships in the boarding. João da Nova saw this and maneuvered the Flor de la Mar to close the channel. The mass of galleys was trapped, a perfect target, and the cannons sank many. The boats from Calicut did not get past the nau and, after a skirmish, turned back. The Flor de la Mar is said to have fired more than 600 shots.",
        "Sixth, the Portuguese galleys and caravels, faster, attacked the stationary Muslim galleys on the flank, whose cannons could not reply. The first attack was repulsed, but a salvo left three galleys adrift.",
        "Seventh, the Portuguese gradually took the carracks. The smoke from the cannons partly blinded them. Mirocem's flagship was captured, and many fled from it. The caravels, with their shallow draft, positioned themselves between the enemy and the coast and killed those who tried to reach the beach by swimming.",
        "Eighth, at nightfall, only one enormous carrack remained, the largest of the battle, anchored so close to the coast that most of the Portuguese ships, with deeper draft, could not reach it. Its reinforced hull held, but the continuous bombardment of the whole fleet sank it at dusk. Mirocem escaped on horseback, with 22 Mamluks."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Portuguese losses, according to the English Wikipedia: 32 dead and about 300 wounded (the Portuguese version says 300 missing). On the Muslim side, all the ships were sunk or captured: 428 Mamluks dead and 1,300 Gujaratis, according to the same source.",
        "Almeida refused to occupy Diu, because holding the city would cost too much. He signed a trade agreement with Malik Ayaz and opened a [[factory|feitoria]]. The Portuguese were left with 3 galleys, 3 carracks, 600 bronze cannons and 3 banners of the sultan of Cairo, sent to the Convent of Christ, in Tomar. The merchants of Diu, who had financed the fleet, paid 300,000 [[xerafins|xerafim]], of which 100,000 went to the troops and 10,000 to the hospital of Cochin.",
        "The captured Mamluks were killed brutally in revenge for Lourenço's death: hanged, burned alive, quartered or tied to the mouths of cannons.",
        { h: "Why it matters" },
        "The Portuguese showed the Indians, the Muslims and the Venetians that Portugal's navy was unbeatable, and the alliance between Venice and Egypt, which controlled the ocean trade, ended. The historian Michael Adas says that Diu established European naval superiority in the Indian Ocean for centuries. The Portuguese monopoly lasted until the arrival of the English, who ended it at the battle of Swally, in 1612. William Weir puts Diu in sixth place among the 50 battles that changed the world.",
        "Almeida handed the government to Albuquerque at the end of 1509 and died on the voyage home, in a skirmish with the Khoikhoi near the Cape of Good Hope, with about 70 Portuguese. Mirocem survived, returned to Cairo, was given command of a new fleet and was murdered in the Red Sea by his Turkish second-in-command, Salman Reis. The Mamluk sultanate fell to the Ottomans in 1517. Malik Ayaz was the only one of the protagonists who did not die a violent death: he died rich, in 1522.",
        { h: "Curiosities and controversies" },
        { note: "The revenge: the battle was driven in large part by Almeida's personal vengeance. For the English Wikipedia, the refusal to hand over power to Albuquerque was almost a rebellion against the king." },
        { note: "The sack of Dabul is seen as a disproportionate reprisal, against a city that the Portuguese had not attacked before." },
        { note: "Chaul: Mirocem spoke of a great victory, and the Mirat Sikandari speaks of a skirmish. The two versions are still debated. What Almeida and Malik Ayaz's envoy discussed at Anjediva was not documented." },
        { note: "Almeida's line about the sea, 'as long as you are powerful at sea, you will hold India', comes from a letter to the king. The vengeance line attributed to him, about how whoever ate the chicken must eat the rooster or pay, appears on Wikipedia only as something he 'supposedly' said." }
      ]}
    ]
  },

  malaca: {
    war: "Portuguese expansion in Southeast Asia (1509–1511)",
    hook: "With perhaps a thousand men, Albuquerque took the city that, as a Portuguese wrote, had Venice by the throat.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Malacca was the great trading post between India, China and the Spice Islands. The trade between the China Sea and the Indian Ocean passed through the strait that the city controlled. The Portuguese Tomé Pires wrote that whoever was lord of Malacca would have Venice by the throat, a phrase that shows why the port interested the Portuguese so much, who wanted to reach the Far East before Castile and bar Muslim trade in the Indian Ocean.",
        "The first visit was a disaster. In September 1509, the fleet of Diogo Lopes de Sequeira arrived at Malacca. Sultan Mahmud Shah gave permission for a factory, but merchants from Gujarat and Java persuaded him to betray the Portuguese. The ships were ambushed, Sequeira fled and left behind some 20 Portuguese, who surrendered and were imprisoned. Among them was the factor Rui de Araújo, who sent information about the city's defenses to Albuquerque through the merchant Nina Chatu.",
        { h: "The road to Malacca" },
        { timeline: [
          ["September 1509", "Sequeira's fleet is ambushed at Malacca. About 20 Portuguese are imprisoned."],
          ["December 1510", "Albuquerque takes Goa, in India."],
          ["April 1511", "Albuquerque gathers the fleet to go to Malacca."],
          ["1 July 1511", "The fleet arrives off the city."],
          ["25 July 1511", "First assault, on St. James's Day."],
          ["August 1511", "Second assault, on 8 or 15 August, depending on the source."],
          ["24 August 1511", "Albuquerque takes full control of the city."]
        ]},
        "The [[bendahara]], the sultan's chief minister, had been assassinated shortly before, but the sources I read say nothing more about it."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Afonso de Albuquerque" },
        "Governor of India, he had taken Goa in 1510. Before the assault, he told his men that if the Muslim spice trade were cut off, Cairo and Mecca would be lost. He asked Mahmud for the return of the prisoners without ransom, 300,000 [[cruzados|cruzado]] and permission to build a fortress at a place of his choosing.",
        { h: "Sultan Mahmud Shah" },
        "He answered vaguely. He said he was loyal to King Manuel and asked for a peace treaty before anything else, while he strengthened the defenses and called the fleet back. The [[laksamana]], the admiral of the fleet, about 80 years old, is said to have deserted to Singapore. Some historians think the figure of the laksamana recalls that of Hang Tuah, the hero of Malay legends.",
        { h: "The other names" },
        "Dom João de Lima commanded the group that landed east of the bridge. António de Abreu commanded the armed junk. Nina Chatu, the merchant who passed on information, was later named bendahara by the Portuguese. Utimuti Raja, a Javanese merchant, was imprisoned and executed for keeping in contact with the exiled royal family."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers for the Portuguese depend on the source. Albuquerque's letters speak of 700 Portuguese and 300 Malabaris. The Florentine Giovanni da Empoli speaks of 1,500 Portuguese and 800 allies. Malay sources say there were at least 2,000. The English Wikipedia, in another article, speaks of about 900 Portuguese, 200 Hindu mercenaries and some 18 ships.",
        "As for Malacca, Chinese merchants and the prisoner Rui de Araújo told Albuquerque that there were 20,000 men, 8,000 pieces of artillery and firearms and about 20 war elephants. But Albuquerque later reported that only some 4,000 were ready to fight, and fewer than 100 cannons were actually used. The Gujaratis are said to have built most of the fortifications.",
        { note: "The numbers for Malacca are the most uncertain of this battle. Those for the Portuguese range from 1,000 to 2,300; those for the defenders, from 4,000 to 20,000." },
        { h: "The terrain" },
        "The city is divided by the Malacca River, with a bridge in the middle. On one side stood the palace and the mosque, to the east, and on the other side, to the west, the district of Upeh. Whoever took the bridge controlled the passage between the two halves.",
        { h: "The assault in four stages" },
        "First, the threat. On 1 July, the fleet arrived with banners, trumpets and half an hour of cannon salvos, to impress. Albuquerque forbade any ship to leave the port without his license. While Mahmud stalled, in mid-July the fleet bombarded the city, and a party burned the seafront houses and the Gujarati ships in the harbor. The sultan then released the prisoners, but did not accept the other demands.",
        "Second, 25 July. At 2 a.m., under the fleet's bombardment, the Portuguese landed in two groups, one on each side of the bridge: Albuquerque to the west, at Upeh, and Dom João de Lima to the east, where the palace and the mosque stood. They overcame the palisades. On the east side, Lima's group faced a counterattack by the sultan's [[war elephants|elefantes de guerra]], led by the sultan himself, by his son Alauddin and by the sultan of Pahang. The Portuguese noblemen attacked the royal elephant with pikes, and it, in panic, turned and scattered the others. The sultan fell, was wounded and escaped in the confusion. By noon, the two groups met at the bridge. Albuquerque called off the attack, because provisions were running out, and, before withdrawing, had the palace and the mosque burned.",
        "Third, the junk. On the 26th, the Portuguese armed a junk (one version says it was offered by Chinese merchants, another that it was seized) with artillery (including breech-loading pieces) and long pikes to fend off fire rafts, and towed it to the bridge. It ran aground at the river mouth, under heavy fire. Captain António de Abreu took a shot in the face and stayed at his post, saying he would command from his bed if need be. Later, the high tide floated it again.",
        "Fourth, the second assault. Albuquerque gathered the captains and reminded them that the city had to be taken, the flow of spices to Cairo and Mecca cut off, and Islam kept from taking root. He landed all the troops in three groups at Upeh, supported by a caravel, a galley and armed boats. The junk, lifted by the tide, drew fire to the bridge while the landing took place. The Portuguese retook the bridge, which was without defenders, and fortified it with barricades of barrels full of earth and artillery behind. A squadron took the mosque, after a long fight, and others went up the streets to silence cannons on the rooftops, which cost many civilian lives. The fleet bombarded the city for ten days. The desperate residents asked for peace, and the merchants of Pegu were the first. Albuquerque gave the Chinese, Hindu and Pegu merchants Portuguese flags to mark the houses that would not be plundered."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "On 24 August, Albuquerque took full control, and sent 400 men, six abreast, with drums and trumpets, to clear the pockets of resistance, work that took eight days. The sultan gathered the treasure and the troops that remained and fled into the jungle. Portuguese casualties were 28 dead, and many wounded, some by poisoned arrows, of whom few of the most serious survived. Malacca's losses are unknown.",
        "The sack, organized, lasted three days. It yielded more than 200,000 cruzados for the Crown, about 3,000 bombards of bronze and iron, and slaves. According to the chronicler Gaspar Correia, ordinary soldiers received more than 4,000 cruzados each, and captains up to 30,000.",
        "The Portuguese built the fortress A Famosa with stones from mosques and tombs, completed between the end of 1511 and 1512. Mahmud Shah fled to Pahang and later set up a new capital at Bintan, from which he made raids until the Portuguese destroyed it in 1526. He withdrew to Kampar, in Sumatra, and died there two years later. His sons founded the sultanates of Perak and Johor.",
        { h: "Why it matters" },
        "Portugal held Malacca for some 130 years, until 1641, when the Dutch and Johor took it, more through hunger and disease than force. But the Portuguese administration was poorly funded and inefficient, and Asian traders began to avoid the port, preferring others, such as Johor. China reacted with a persecution of the Portuguese that lasted decades. Tomé Pires, who led an embassy, is said to have died in prison in China. Portugal would only gain the right to settle at Macau in 1557.",
        { h: "Curiosities and controversies" },
        { note: "The date of the second assault: Wikipedia gives 8 August in one article and 15 August in another." },
        { note: "The reaction to the cannon: the Malay Annals describe the Malays amazed by the gunfire in 1509, and scholars find the account somewhat exaggerated. Correia and Faria e Sousa describe similar reactions, but less dramatic." },
        { note: "The elephant: according to Wikipedia, the scene of the elephants was in the first assault, on 25 July. The sultan fell, was wounded and escaped, and the city was taken only weeks later." },
        { note: "The population: Albuquerque estimated 100,000 inhabitants. Modern estimates are around 40,000." },
        { note: "The founders of Malacca's cannons: historians debate whether they were Javanese, trained in Pegu, or Siamese." }
      ]}
    ]
  },

  noitetriste: {
    war: "Cortés's conquest of Mexico (1519–1521)",
    hook: "On a rainy night, the Spaniards tried to slip out quietly from a city surrounded by water, and the city woke up.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Tenochtitlan, the Aztec capital, stood on an island in Lake Texcoco, linked to the land by [[causeways|calçada]] of stone and earth, with gaps crossed by wooden bridges. Hernán Cortés reached it on 8 November 1519 and was lodged in a house. He soon took the emperor, Moctezuma II, as a hostage, for fear of betrayal. The city grew more and more hostile.",
        "In May 1520, Cortés learned that the governor of Cuba, Diego Velázquez, had sent Pánfilo de Narváez to arrest him. He left Pedro de Alvarado in the city, defeated Narváez on the coast, who had about 1,100 men, and recruited the survivors. Meanwhile, Alvarado, fearing a revolt, had Aztec nobles and priests killed during a festival at the Templo Mayor. The Aztecs surrounded the house where the Spaniards were.",
        { h: "The road to the flight" },
        { timeline: [
          ["8 November 1519", "Cortés reaches Tenochtitlan and seizes Moctezuma."],
          ["May 1520", "Cortés leaves to face Narváez. Alvarado kills the Aztecs at the Templo Mayor, and the city revolts."],
          ["Late June 1520", "Cortés returns, with Narváez's men, and finds the Spaniards under siege. The Aztecs have chosen another ruler, Cuitláhuac. Moctezuma, who tried to calm the people from a balcony, is struck by stones and dies (the sources differ on the day and the cause)."],
          ["30 June to 1 July 1520", "The Spaniards try to flee."]
        ]},
        "The Aztecs and the Spaniards blame each other for Moctezuma's death. The Spanish accounts say that his own people killed him with stones. The Aztec accounts say it was the Spaniards."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Hernán Cortés" },
        "Leader of the expedition. Without food, without water and under attack, he decided to break the siege. He asked for a week's truce, promising to return the treasure and leave in peace, which served to deceive the Aztecs. Among the three possible routes, he chose the shortest, that of Tlacopan, to the west. And he let the soldiers carry as much gold as they wanted, which weighed heavily in the flight.",
        { h: "Cuitláhuac" },
        "The new [[tlatoani]], chosen by the Aztecs after the revolt. He led the resistance. He died of smallpox shortly after.",
        { h: "Pedro de Alvarado" },
        "Cortés's lieutenant. He was the one who ordered the massacre at the Templo Mayor, which set off the revolt. In the flight, Cortés found him wounded and without a horse. He survived: the account is that a soldier, Martín de Gamboa, helped him onto his horse. The legend of 'Alvarado's leap', in which he supposedly vaulted a gap with a lance, I did not find in the sources.",
        { h: "The others" },
        "Cortés's interpreter, La Malinche, survived. Among the Spanish captains were Gonzalo de Sandoval, Cristóbal de Olid and Juan Velázquez de León, who died. Bernal Díaz del Castillo, a soldier who was there, wrote the main account."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Spaniards: the sources say 600 to 2,100, with about 73 horses, plus [[Tlaxcalan|tlaxcaltecas]] allies. The numbers for the allies range from 2,000 to 3,000 (Cortés) to about 20,000 (an estimate from the Portuguese Wikipedia). The Aztecs: 20,000 to 50,000 fighters, according to modern estimates.",
        { note: "The numbers for this battle differ far too much. There is no reliable count of the Spaniards, the allies or the Aztecs." },
        { h: "The terrain" },
        "The city stood on an island, with eight causeways. The Aztecs had removed the bridges from four of them. The Spaniards then built a portable bridge to cross the gaps, and covered the horses' hooves to muffle the noise. Of the three routes, the shortest was the Tlacopan (Tacuba) causeway, to the west.",
        { h: "The flight" },
        "Near midnight, on the night of 30 June to 1 July, the army left the house where it was lodged, in the rain (other accounts speak of a dark, foggy night). At first, the causeway seemed unguarded. But the eagle warriors discovered them. According to some accounts, the one who raised the alarm was an old woman drawing water at the Toltec canal (Tlaltecayohuacan). Others speak of the priest of the temple of Huitzilopochtli, whose drum sounded.",
        "Hundreds of canoes attacked from both sides, and from the causeways came warriors with [[macuahuitl]], spears, arrows and sling stones. From the rooftops, they attacked the rear. In time, the gaps filled with debris and bodies, and the last ones crossed over them. Many soldiers, laden with gold, fell into the lake and drowned.",
        "Cortés reached the mainland, at Tacuba, with the cavalry of the vanguard. Bernal Díaz defended him later: had he stayed to fight, everyone would have died. Cortés and the horsemen went back and found Alvarado wounded, without a horse. Cortés was also wounded. All the artillery and most of the horses were lost. At a place called Popotla, under a great tree (an ahuehuete), legend says that Cortés wept."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The losses change a great deal depending on the source. Cortés said he had lost 150 Spaniards and 2,000 allies. Thoan Cano, quoted by Oviedo, speaks of 1,150 Spaniards, a number that may be larger than the total of all who were there. López de Gómara (who was not there) speaks of 450 Spaniards, 4,000 allies and 46 horses. Bernal Díaz speaks of about 600 dead, more than half of Cortés's soldiers. A modern estimate (Barros Arana) gives 400 to 800 Spaniards, and 2,000 to 8,000 allies. Aztec losses are unknown, but described as small. It is estimated that 90% of Moctezuma's treasure was lost.",
        "About a week later (the Portuguese Wikipedia says two), at Otumba, the Spaniards turned and defeated the Aztecs who were pursuing them. They reached Tlaxcala, where Cortés planned the siege of Tenochtitlan. He came back with reinforcements from Cuba, built brigantines on the lake and gradually destroyed the city. Cuauhtémoc was captured on 13 August 1521, which ended the conquest.",
        { h: "Why it matters" },
        "It was the conquistadors' greatest defeat in Mexico, but not the last word. Cortés rebuilt his forces from Tlaxcala and planned the final siege from there. Disease also weighed in: Cuitláhuac, the ruler who defeated them, died of smallpox soon after.",
        { h: "Curiosities and controversies" },
        { note: "The name: 'La Noche Triste', the Sad Night, refers to the grief of Cortés and his men over the lives and the treasure lost. Wikipedia records that, in Mexico, it has been officially called 'Noche Victoriosa' since 2020." },
        { note: "The date: the sources give anywhere from 30 June to 4 July. Part of the confusion comes from the [[Julian calendar|calendário juliano]], which was almost 12 days out of step with the Sun." },
        { note: "The tree: the story of Cortés weeping under an ahuehuete at Popotla is treated as legend. But Bernal Díaz says that Cortés wept and sighed on seeing how many soldiers were left, and that a soldier, Alonso Pérez, told him not to grieve so much, because these things happen in war." },
        { note: "The alarm: according to one version, a woman drawing water; according to another, the priest of Huitzilopochtli. Who raised the alarm is not known." },
        { note: "The sources: the main Spanish eyewitness account is that of Bernal Díaz, written many years later. The Aztec accounts appear in León-Portilla's 'The Broken Spears'." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  constantinopla: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 9, l: "Bosporus and Golden Horn" },
      { t: "sea", x: 62, y: 61, w: 38, h: 9, l: "Sea of Marmara" },
      { t: "note", x: 92, y: 13, l: "Chain" },
      { t: "note", x: 82, y: 46, l: "City" }
    ],
    units: [
      { id: "wall", s: "b", k: "camp", w: 1.5, h: 52, l: "" },
      { id: "oFl", s: "a", k: "ship", w: 10, h: 4, l: "Ottoman fleet" },
      { id: "oTur", s: "a", k: "inf", w: 8, h: 7, l: "Anatolian Turkmens" },
      { id: "oEu", s: "a", k: "inf", w: 9, h: 14, l: "European troops" },
      { id: "oJan", s: "a", k: "inf", w: 7, h: 9, l: "Janissaries and the sultan" },
      { id: "oGun", s: "a", k: "camp", w: 7, h: 6, l: "Great cannon" },
      { id: "oAz", s: "a", k: "inf", w: 6, h: 12, l: "Azaps" },
      { id: "oAna", s: "a", k: "inf", w: 9, h: 14, l: "Anatolian troops" },
      { id: "bBla", s: "b", k: "inf", w: 6, h: 9, l: "Venetians" },
      { id: "bGiu", s: "b", k: "inf", w: 6, h: 9, l: "Giustiniani" },
      { id: "bCon", s: "b", k: "inf", w: 6, h: 9, l: "Constantine" },
      { id: "bSou", s: "b", k: "inf", w: 6, h: 10, l: "Southern defense" },
      { id: "bRes", s: "b", k: "inf", w: 6, h: 8, l: "Reserve" },
      { id: "bFl", s: "b", k: "ship", w: 10, h: 4, l: "Christian ships (26)" }
    ],
    steps: [
      { t: "Early April. The Ottomans camp from one sea to the other, in front of the land walls. The defenders, some 7,000, spread out along the two lines of wall, with Constantine and Giustiniani at the weakest point, the Lycus valley. The chain closes the Golden Horn.",
        p: { wall: [63, 35], oFl: [20, 4], oTur: [46, 16], oEu: [50, 27], oJan: [44, 38], oGun: [56, 38], oAz: [33, 38], oAna: [50, 52],
             bBla: [68, 16], bGiu: [68, 28], bCon: [68, 39], bSou: [68, 52], bRes: [82, 34], bFl: [88, 4] } },
      { t: "Weeks of bombardment. The great cannon and the artillery pound mostly the Lycus valley. At night, the defenders repair the damage.",
        p: { oGun: [59, 38] } },
      { t: "18 April. An Ottoman assault on the Lycus valley is repelled by Giustiniani and his men, fewer but better armed.",
        p: { oEu: [58, 30], oJan: [56, 42] } },
      { t: "20 April. Four Christian ships break the blockade and enter the Golden Horn. It is a boost to morale for the city and a humiliation for the sultan. The Ottomans fall back to their lines.",
        p: { oEu: [50, 27], oJan: [44, 38], bFl: [84, 4] } },
      { t: "22 April. Mehmed drags some 70 to 80 ships over a road of greased logs, behind Galata, and launches them into the Golden Horn, beyond the chain. The defenders now also have to guard the harbor walls.",
        p: { oFl: [70, 4] } },
      { t: "May. The Ottoman sappers dig mines under the walls, and the defenders open countermines. On 28 May, Mehmed lets the troops rest. Inside the city, there are processions and a vigil at Hagia Sophia.",
        p: { oGun: [58, 38] } },
      { t: "29 May, shortly after midnight. The Christians in the sultan's service attack first, followed by the azaps, in waves. The defenders hold.",
        p: { oAz: [57, 38] } },
      { t: "The Anatolian Turkmens attack the weakest stretch, near Blachernae, in the northwest. They enter the city for a moment, but are driven out.",
        p: { oTur: [58, 16] }, x: ["oAz"] },
      { t: "The last wave: the Janissaries. Giustiniani is gravely wounded and carried off the wall. The Genoese fall back to the harbor, many Greeks run home, and panic spreads.",
        p: { oJan: [60, 38], bGiu: [82, 28] }, x: ["oAz", "bGiu"] },
      { t: "The Ottomans enter at several points. The Venetians fall back to the ships, and the Ottoman fleet controls the Golden Horn by noon. Constantine's fate is unknown.",
        p: { oEu: [66, 28], oJan: [67, 38], oAna: [66, 52], oTur: [66, 16] }, x: ["oAz", "bGiu", "bBla", "bCon", "bSou", "bRes"] }
    ]
  },

  diu: {
    terrain: [
      { t: "sea", x: 0, y: 14, w: 100, h: 56, l: "" },
      { t: "note", x: 50, y: 6, l: "Coast of Diu" }
    ],
    units: [
      { id: "pCmd", s: "a", k: "ship", w: 8, h: 4, l: "Almeida" },
      { id: "pBoard", s: "a", k: "ship", w: 14, h: 4, l: "Boarding naus" },
      { id: "pFlor", s: "a", k: "ship", w: 9, h: 4, l: "Flor de la Mar" },
      { id: "pGal", s: "a", k: "ship", w: 12, h: 4, l: "Galleys and caravels" },
      { id: "mFort", s: "b", k: "camp", w: 14, h: 7, l: "Fortress" },
      { id: "mCar", s: "b", k: "ship", w: 14, h: 6, l: "Mirocem's naus" },
      { id: "mGal", s: "b", k: "ship", w: 12, h: 4, l: "Galleys" },
      { id: "mFus", s: "b", k: "ship", w: 10, h: 4, l: "Diu fustas" },
      { id: "mCal", s: "b", k: "ship", w: 10, h: 4, l: "Calicut boats" },
      { id: "mBig", s: "b", k: "ship", w: 9, h: 5, l: "Great nau" }
    ],
    steps: [
      { t: "2 February. The Portuguese (18 ships) sight Diu. Mirocem's oared ships come out, but come within range of the fortress's cannons and, at night, fall back to the channel.",
        p: { pCmd: [10, 58], pBoard: [14, 48], pFlor: [12, 38], pGal: [22, 63],
             mFort: [78, 8], mCar: [58, 24], mGal: [74, 24], mFus: [90, 34], mCal: [88, 50], mBig: [40, 20] } },
      { t: "3 February. Mirocem anchors naus and galleys against the coast, under the fortress, and waits for the attack, which gives up the initiative. Almeida divides the fleet into four groups: boarding, flank attack on the galleys, fire support and messages.",
        p: { mCar: [58, 20], mGal: [74, 20] } },
      { t: "Around 11 a.m., the royal banner rises on the Flor de la Mar and a shot gives the signal. The fleet advances shouting 'Santiago!', with a galley sounding the channel. In the calm water, grazing fire makes the shot skip over the surface.",
        p: { pCmd: [22, 52], pBoard: [34, 40], pFlor: [28, 34], pGal: [34, 58] } },
      { t: "The Espírito Santo boards Mirocem's flagship. Rui Pereira dies, and the Portuguese are nearly overwhelmed when another Mamluk nau grips the ship on the other side. The Rei Grande arrives with reinforcements and turns the fight.",
        p: { pBoard: [50, 28] } },
      { t: "Mirocem kept his oared ships in the channel, to attack from behind. João da Nova takes the Flor de la Mar into the channel and closes it. The fustas are trapped, and the Calicut boats turn back.",
        p: { pFlor: [80, 36], mCal: [96, 62] }, x: ["mFus"] },
      { t: "The Portuguese galleys and caravels, faster, attack the stationary Muslim galleys on the flank, whose cannons do not reply. A salvo leaves three of them adrift.",
        p: { pGal: [66, 34] }, x: ["mFus", "mGal"] },
      { t: "The Portuguese take the carracks. The smoke from the cannons partly blinds them. Many mercenaries abandon the ships, and the caravels, with their shallow draft, stay between the enemy and the coast and kill those who try to reach the beach by swimming.",
        p: { pBoard: [58, 28], pGal: [60, 14] }, x: ["mFus", "mGal", "mCar"] },
      { t: "At nightfall, only one enormous carrack remains, anchored near the coast, which most of the Portuguese ships cannot reach. The whole fleet bombards it until it sinks. Mirocem escapes on horseback, with 22 Mamluks.",
        p: { pBoard: [46, 28], pGal: [50, 20], pCmd: [32, 40] }, x: ["mFus", "mGal", "mCar", "mBig"] }
    ]
  }
});
