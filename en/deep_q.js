// In-depth battles, batch q: lepanto, nagashino, haldighati, alcacerquibir, chuvash, armada.
// Checked against the English, Portuguese, Spanish, Japanese and (where it loaded) other Wikipedia articles on each battle,
// its commanders and its war, plus Britannica-level summaries found by web search. Where sources disagree (numbers, dates,
// who was where), the text gives the range and says so.

Object.assign(GLOSSARY, {
  "galeaça": "A giant galley, wider and heavier than the others, with many cannons at the bow and along the sides. The six that Venice took to Lepanto were like floating forts.",
  "galiota": "A small, fast galley with few oars and few men. North African corsairs used it a lot.",
  "capitânia": "The ship that carries the commander of a fleet or squadron, and from which the orders go out.",
  "liga santa": "The 1571 alliance between Spain, Venice and the Papacy, with the help of other Italian states and the Order of Malta, to face the Ottoman Empire in the Mediterranean. It was organized by Pope Pius V.",
  "paliçada": "A fence of stakes or logs planted in the ground, to hold off horses or protect shooters.",
  "terço": "A Spanish and Portuguese infantry unit of the 16th century, thousands of men strong: pikemen, arquebusiers and other soldiers mixed in a single body. It was the backbone of the Iberian armies of the time.",
  "maharana": "The title of the kings of Mewar, in Rajasthan. It means something like 'great rana', the same as 'great king' among the Rajputs.",
  "bhil": "A people of the hills and forests of Rajasthan, famous for their archers. For centuries they were loyal allies of the kings of Mewar.",
  "saadianos": "The dynasty that ruled Morocco from 1549 to 1659. Its sultans claimed descent from the Prophet and were in constant dispute with the Ottomans and the Iberians.",
  "sebastianismo": "The belief that King Sebastian did not die at Alcácer-Quibir and would return one day to save Portugal. It lasted for centuries, and in Brazil it reappeared in popular movements in the interior.",
  "galeão": "A 16th-century sailing warship, tall, long and with many cannons along the sides. In English hands it was lower and more agile.",
  "barlavento": "The side the wind comes from. Whoever is windward of the enemy chooses when and from what distance to attack, because he can close in or pull away at will.",
  "cossacos": "Free men of the steppes of Ukraine and Russia, armed and used to war, who lived off plunder and off service to whoever paid. Many were the spearhead of Russian expansion.",
  "canato": "A kingdom ruled by a khan, the title of chief of the Turkic and Mongol peoples.",
  "tsar": "The title of the ruler of Russia. Ivan IV, the Terrible, was the first to be crowned tsar, in 1547."
});

Object.assign(DEEP, {
  lepanto: {
    war: "War of Cyprus, between Venice and the Ottoman Empire (1570–1573)",
    hook: "The biggest galley battle in history lasted a few hours and gave Cyprus back to no one.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1571, the Ottoman Empire was the greatest power in the eastern Mediterranean. It had taken Constantinople in 1453, and the sultan ruled from the Danube to North Africa. Venice, a republic of merchants, still held islands and ports at sea, but it lived squeezed: it needed trade with the East and, at the same time, lived under the threat of its Turkish neighbor.",
        "Cyprus was the jewel the Ottomans still lacked. It had belonged to Venice since the 15th century, lay a few days' sail from the coasts of Turkey and Syria, and was the last big Christian island in the region. In 1570, the Ottomans landed. Nicosia fell in September of that year. Famagusta remained, and held out until early August 1571. The Ottoman commander, Lala Mustafa Pasha, promised the defenders an honorable exit and broke his word: he had the Venetians arrested and had the governor, Marcantonio Bragadin, executed in an atrocious way, flaying him alive according to the sources.",
        { h: "The road to Lepanto" },
        { timeline: [
          ["1570", "The Ottomans land in Cyprus. Nicosia falls in September."],
          ["20 and 25 May 1571", "The [[Holy League|liga santa]], promoted by Pope Pius V, is agreed and announced. Spain and Venice are the main powers."],
          ["July and August 1571", "The League's ships gather at Messina, in Sicily. Famagusta surrenders in early August."],
          ["7 October 1571", "The two fleets meet at the entrance of the Gulf of Patras, in Greece."]
        ]},
        "The League was hard to put together. Each ally wanted something different: Venice wanted to save Cyprus, and Spain, which paid most of the bill, had many enemies in North Africa and kept part of its galleys for them. Philip II agreed little by little. The pope was the one who pushed the alliance, treating the war as a [[crusade|cruzada]]."
      ]},
      { n: "02", title: "The main players", blocks: [
        { h: "Don John of Austria, 24 years old" },
        "The illegitimate son of Emperor Charles V and half-brother of King Philip II, he was chosen for the overall command of the League. He was young and had never commanded anything that size. His [[flagship|capitânia]], the Real, stood in the center of the line, where the battle was going to be decided. Around him, the League arranged other heavyweight commanders, each from a different power: Marcantonio Colonna, captain of the Pope, and Sebastiano Veniero, the Venetian.",
        { h: "Ali Pasha, Ottoman commander" },
        "Müezzinzade Ali Pasha was the commander-in-chief of the sultan's fleet and commanded the center, on the [[flagship|capitânia]] Sultana. Near him, Mehmed Siroco (Sirocco) commanded the right wing, and Uluç Ali, a corsair who had been born Christian and passed into the sultan's service, the left wing. The Ottomans had not lost a major naval battle since the 15th century.",
        { h: "The other names" },
        "The Venetian Agostino Barbarigo commanded the League's left wing, along the coast. The Genoese Gianandrea Doria commanded the right, out to sea. The reserve went to the Spaniard Álvaro de Bazán, the Marquis of Santa Cruz. Among the League's soldiers was a 24-year-old named Miguel de Cervantes, who years later would write Don Quixote."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The counts vary from one source to another, and today's estimates make the two fleets look almost equal. The League had about 206 [[galleys|galé]] and 6 [[galleasses|galeaça]], and some 30,000 soldiers (about 7,000 Spaniards, 7,000 Germans, 6,000 Italians and 5,000 Venetians), plus some 40,000 sailors and rowers. Venice supplied more than half the ships: 109 galleys and the 6 galleasses.",
        "The Ottomans had about 211 galleys and 63 [[galliots|galiota]], according to English Wikipedia (the Spanish one gives 210 galleys and 87 galliots). They carried between 25,000 and 34,000 soldiers, among them the [[janissaries|janízaros]], and almost all the rowers, some 37,000 to 41,000, were slaves. The League had more cannons, about 1,800, against some 750 for the Turks, who on top of that were short of ammunition.",
        { note: "The numbers of men and ships are the most uncertain in the battle: the sources give from 85,000 to more than 120,000 men for one of the sides. We use the ranges from the encyclopedias, without pretending to precision." },
        { h: "The terrain" },
        "The battle is called by the name of the city of Lepanto (today Nafpaktos), but it was fought at sea, near the Oxia Islands, at the entrance of the Gulf of Patras, off the west coast of Greece. For a galley battle, the ideal is a calm sea and light wind, because what rules is the oar. The wind only mattered for one detail: at the start it blew against the League, and around midday it shifted in its favor, which let most of the squadrons reach their positions.",
        { h: "The morning of 7 October" },
        "Don John went among the ships to inspect the fleet. The sacraments were given, and the Christian rowers were freed from their chains and armed. The League arranged itself in four groups: to the north, hugging the coast, Barbarigo, with 53 galleys; in the center, Don John, with 62; to the south, Doria, with 53; and behind, in reserve, Santa Cruz, with 38. Each wing received two galleasses, placed ahead of the line. On the other side, the Turks came in a half-moon: Siroco on the right, Ali Pasha in the center (88 galleys and 8 galliots) and Uluç Ali on the left, farther out to open sea.",
        { h: "The battle in four movements" },
        { formation: true },
        "First, the galleasses. Ahead of the Christian line, they opened fire at short range against the Turkish galleys in front. They were enormous ships, full of cannons, and the Ottoman line, which had been coming in good order, fell apart before the main clash.",
        "Second, the north. Siroco tried to slip between Barbarigo and the coast, using his knowledge of the depths. The maneuver almost worked, and Barbarigo died, struck by an arrow in the eye, according to the accounts. But the wing held, and Santa Cruz's reserve arrived and steadied the situation. Siroco was killed.",
        "Third, the center. Ali Pasha's Sultana slammed into Don John's Real, and the two flagships became a floating battlefield: the janissaries climbed onto the Real's bow and were thrown back by the Spanish and Italian soldiers. For about an hour, the two sides fought with sword, spear and arquebus on the deck. Colonna joined the fight with a counterattack, the Sultana was taken, and Ali Pasha was killed. According to tradition, his head was raised on a spear, and the sight of it demoralized the Turkish center.",
        "Fourth, the south. Doria, instead of staying in the position he had been given, moved south, and his own captains took that as treason. Uluç Ali took advantage of the gap, struck the flank of the center and threatened the galleys of the Order of Malta, capturing a banner. Santa Cruz's reserve came to the rescue again, and Uluç Ali pulled back with about 30 ships. The other Turks were beaten, and within a few hours the fighting was over. Some Greek rowers mutinied and handed their own ships over to the League."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The League captured about 117 galleys and sank or destroyed about 83, that is, some 200 Ottoman ships out of action, according to English Wikipedia. It lost 13 galleys. The deaths are the most disputed point: 7,500 to 10,000 on the Christian side and 20,000 to 40,000 on the Turkish side. About 8,000 to 10,000 Turks were taken prisoner, and between 12,000 and 15,000 enslaved Christians were freed from the Turkish oars.",
        "The political result was much smaller than the military one. Pope Pius V died in May 1572, and the League fell apart. The Turks rebuilt the fleet in about six months, with more than 150 galleys and 8 galleasses. In March 1573, Venice made peace alone: it gave up Cyprus and paid 300,000 ducats. In 1574, the Ottomans retook Tunis. The grand vizier Sokollu Mehmed Pasha is said to have told the Venetian ambassador that the loss of Cyprus was an arm cut off, while Lepanto had only shaved the Ottoman beard, and a beard grows back.",
        { h: "Why it matters" },
        "Lepanto was the biggest naval battle in the Western world since Antiquity and the last important one fought almost entirely with oared ships. It broke the myth that the Ottomans were invincible at sea, and Christians all over Europe celebrated: Pius V created the feast of Our Lady of Victory, today called Our Lady of the Rosary. Many historians think, however, that the real blow was to the sailors: the loss of experienced crews left the Ottomans struggling more at sea after 1580. In the following decades, the sailing ship, the [[galleon|galeão]], took the place of the galley as the main ship.",
        { h: "Curiosities and controversies" },
        { note: "Cervantes: according to Spanish Wikipedia, he was on the galley Marquesa, was wounded and lost the use of his left hand, which earned him the nickname 'the one-handed man of Lepanto'. Years later, he called the battle the loftiest and most memorable occasion the centuries had ever seen." },
        { note: "Doria: by moving south instead of staying in the position he had been given, he made his own captains think of treason. English Wikipedia records the suspicion, and the matter is still debated." },
        { note: "Who really won? For some historians, Lepanto 'halted the Ottoman expansion in the Mediterranean'. For others, it was a triumph without consequences: the League did not recover any territory the Turks had taken before." }
      ]}
    ]
  },

  nagashino: {
    war: "The Sengoku period wars: Oda and Tokugawa against the Takeda (1573–1582)",
    hook: "Japan's most feared cavalry ran against a wooden fence and a line of arquebuses.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 16th-century Japan, there was no strong government. The [[shogun|xogum]] was a weak figure, and the country had turned into a mosaic of warlords, the [[daimyo|daimiô]], who fought one another. This is the so-called [[Sengoku|sengoku]] period, the 'country at war'. Around Kyoto and the center of the country, Oda Nobunaga had grown strong and wanted to unify everything by force. His ally, Tokugawa Ieyasu, dominated the Mikawa region, on the Pacific coast.",
        "To the east lay the Takeda [[clan|clã]], from the province of Kai, in the mountains. The Takeda had a reputation for having the best cavalry in Japan, and their chief, Takeda Shingen, was one of the lords Nobunaga respected most. In May 1573, during a campaign in Mikawa, Shingen fell ill and the army went back to Kai. His death was hidden for a while, and his son, Takeda Katsuyori, took over.",
        { h: "The road to Nagashino" },
        { timeline: [
          ["May 1573", "Shingen falls ill on campaign and later dies. Katsuyori takes over the Takeda clan."],
          ["1573–1574", "Ieyasu, with the help of local families, recovers lands in northern Mikawa and retakes Nagashino castle."],
          ["June 1575", "Katsuyori besieges Nagashino with about 15,000 men. The castle has some 500 defenders."],
          ["Late June 1575", "Nobunaga and Ieyasu arrive with an army of some 38,000 men and take position facing the Takeda, across a stream."]
        ]},
        "Katsuyori wanted to show that he was still as strong as his father. The clan's older generals, still loyal, had doubts. The war against Nobunaga and Ieyasu was a gamble."
      ]},
      { n: "02", title: "The main players", blocks: [
        { h: "Oda Nobunaga, 41 years old" },
        "Lord of the province of Owari, he had beaten the Imagawa at Okehazama and destroyed fortified temples that opposed him. He did not like tradition for tradition's sake: he liked what worked. He was among the first daimyo to invest heavily in firearms, which the Portuguese had brought to Japan in 1543.",
        { h: "Takeda Katsuyori, 29 years old" },
        "Shingen's fourth son, he came to lead the clan when his father died and wanted to prove he was worthy of him. For today's historians, his attack at Nagashino was not as foolish as it looks: it was the common tactic of the time and had worked before. He had no way of knowing that the fence and the guns would change the outcome.",
        { h: "The other names" },
        "Tokugawa Ieyasu, 33, Nobunaga's ally, mobilized some 8,000 men. Okudaira Nobumasa defended Nagashino castle. Sakai Tadatsugu, Ieyasu's general, proposed the night attack that decided the battle. On the Takeda side, Shingen's veterans were almost all there: Yamagata Masakage, Baba Nobuharu, Naito Masatoyo and the Sanada brothers, among others."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "On the side of Nobunaga and Ieyasu, the traditional count is some 38,000 men: about 30,000 of Nobunaga's and some 8,000 of Ieyasu's. Modern historians, however, propose fewer, such as 12,000 to 13,000 for the Oda and 4,000 to 5,000 for the Tokugawa. The Takeda had about 15,000 in total, but only some 12,000 went to the battlefield, because about 3,000 stayed behind besieging the castle.",
        "The [[arquebuses|arcabuz]] are the heart of the legend. Tradition says Nobunaga had 3,000 arquebusiers. The most reliable record of the time, the Shinchō Kōki chronicle, written by a vassal of Nobunaga, speaks of about 1,000, and only in versions copied later did the number become 3,000. The Takeda also had firearms, perhaps between 1,000 and 1,500, and had used many in other battles. Historians also note that the armies on both sides were similar: they mixed horsemen, infantry and shooters.",
        { note: "The number 3,000 and the image of the three shifts of fire come from a romanticized biography of Nobunaga from the Edo period (Shinchōki, by Oze Hoan), and not from the record of the time. The story was repeated in 19th-century schoolbooks and became 'fact'." },
        { h: "The terrain" },
        "The battle was at Shitaragahara, a plain about 4 km west of the castle, cut by a stream, the Rengo River. Nobunaga chose a hollow that hid the size of his army. By his order, the soldiers built a long wooden fence against horses, behind ditches and embankments. Historians find this fence unusual for Japan at the time and debate whether it was influenced by European fortifications.",
        { h: "The night attack" },
        "On the night of 28 to 29 June, on the advice of Sakai Tadatsugu, about 4,000 men, among them some 500 arquebusiers, left the camp and went around through the mountains. According to one tradition, Nobunaga rejected the idea in public and approved it in secret, so the plan would not leak. The target was the fort on Mount Tobigasu, which lay behind the Takeda.",
        { h: "The battle in four movements" },
        { formation: true },
        "First, the attack from behind. At dawn, Sakai's force took the fort and several smaller ones. With that, the castle garrison came out and helped drive off the Takeda besieging Nagashino. Katsuyori lost his line of retreat. Going back was hard, and standing still was worse. He decided to attack head-on.",
        "Second, the waves. The Takeda advanced against the fence in wave after wave, more or less in the morning. Yamagata Masakage led the first attack and was cut down. Nobunaga's shooters, in units under the command of five commissioners, waited behind the fence. Every time the cavalry came close, the shots and the enclosures broke its momentum.",
        "Third, attrition. The fight lasted many hours, until the afternoon, about eight hours according to one source. Baba Nobuharu, Naito Masatoyo and the Sanada brothers were among those who died in the charges against the fence, and with each wave the cavalry grew smaller.",
        "Fourth, the defeat. Around 2 p.m., the Takeda line broke, and Nobunaga's troops came out from the fence to pursue. According to the chronicles, most of the Takeda dead fell in the flight, not in the fighting. Katsuyori escaped with few men and returned to Kai."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Takeda lost between 10,000 and 12,000 men, according to the Shinchō Kōki and English Wikipedia (the figure has been contested: a diary of the time speaks of little more than a thousand). The allies had some 6,000 casualties. Almost all the clan's older generals died, among them Yamagata, Baba, Naito, Hara Masatane, Saegusa Moritomo, Tsuchiya Masatsugu and the two Sanada brothers.",
        "Katsuyori could not keep the lands he had conquered, and Ieyasu recovered the lost castles. The Takeda clan survived seven more years, but without strength. In 1582, it was destroyed by Nobunaga and his allies, and Katsuyori died.",
        { h: "Why it matters" },
        "The battle is seen as the turning point after which Nobunaga's path to unifying Japan began to look secure. What it proved was the strength of a formula: a large, well-supplied army, with field fortification and firearms, against a cavalry charge. It is also one of the best-known Japanese battles outside the country, thanks to Akira Kurosawa's film 'Kagemusha'.",
        { h: "Curiosities and controversies" },
        { note: "The three shifts of fire: until the 1980s, almost all books said Nobunaga organized the arquebusiers in three rotating ranks, without a pause. The historian Fujimoto Masayuki challenged the story in 1980, and experiments with reenactments showed it does not work in practice. Today, most scholars doubt it." },
        { note: "The Takeda cavalry: the image of mounted samurai against firearms is a cliché. Modern studies say the Takeda also used firearms, that their cavalry was smaller than the myth says and that their horses were not unaccustomed to the noise. They also suggest the Oda had more access to imported lead, and the Takeda resorted to copper melted down from coins." },
        { note: "Torii Suneemon: tradition tells that a soldier from the castle slipped through the siege to ask Ieyasu for help, was captured on the way back and crucified after shouting that help was on the way. The story does not appear in the most reliable chronicle and was added in later versions." },
        { note: "The date: in the Japanese calendar, the battle was on the 21st day of the 5th month of the year Tenshō 3. Japanese Wikipedia converts it to 29 June 1575 in the Julian calendar; many English sources give 28 June." }
      ]}
    ]
  },

  haldighati: {
    war: "Akbar against Mewar (1568–1597)",
    hook: "Both sides say they won, and one of them is right: the field was Mughal, but the king fled and went on fighting for twenty years.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1576, the Mughal emperor Akbar was 33 and ruled an empire in full expansion in northern India. Every year, the [[Mughals|mogóis]] annexed one kingdom or bought the loyalty of another. Akbar used force, but also diplomacy: he married [[Rajput|rajputs]] princesses and gave their relatives high posts at court. Almost all the Rajput kings, proud Hindu warriors of Rajasthan, had accepted this deal.",
        "Mewar was the exception. Its kingdom occupied the forested hill country of the Aravalli range, in southern Rajasthan, and lay on the road to the rich lands of Gujarat, which Akbar wanted to link to the rest of the empire. In 1568, Akbar had taken Chittor, the great fortress of Mewar, and with it the kingdom's fertile east. The king at the time, Udai Singh II, had fled to the hills, where he founded the city of Udaipur.",
        { h: "The road to Haldighati" },
        { timeline: [
          ["1568", "Akbar takes Chittor after a long siege. Mewar loses the richest part of the kingdom."],
          ["1572", "Pratap Singh is crowned [[maharana]] of Mewar and refuses to accept Akbar as his lord."],
          ["1572–1573", "Akbar sends several ambassadors to Pratap, among them Man Singh of Amber, Bhagwant Das and Todar Mal. All fail."],
          ["18 June 1576", "The Mughal army of Man Singh and Pratap's army face each other at Haldighati."]
        ]},
        "Pratap was a king without much land, but with enormous prestige among the Rajputs. Accepting Akbar would mean joining the Mughal court, like the others. Refusing meant war."
      ]},
      { n: "02", title: "The main players", blocks: [
        { h: "Maharana Pratap, about 36 years old" },
        "Pratap Singh was born in 1540 and was the eldest son of Udai Singh II. He was crowned in 1572, after a succession dispute. According to Rajput traditions, he preferred to live in the mountains, with little, rather than serve the emperor. Modern historians add nuance: for the historian Satish Chandra, what was at stake was Pratap's personal honor, and not a cause of all Rajputs or all Hindus.",
        { h: "Man Singh of Amber, about 25 years old" },
        "Hindu and Rajput, like Pratap, but on the other side. His kingdom, Amber, had been allied with Akbar for years, and he was one of the emperor's most trusted generals. Rajput tradition says that, on a visit to Pratap, he was insulted at a banquet, but many historians think the story is exaggerated. Later, Man Singh would win many wars for the Mughals, from Kabul to Bengal.",
        { h: "The other names" },
        "On Pratap's side there were heavyweight commanders: Hakim Khan Sur, a Muslim of Afghan origin, in command of the vanguard; Ram Shah Tomar, who fought with his sons; Bida Jhala, on the left wing (some authors identify him with Jhala Man Singh, who is discussed below); and Punja, the chief of the [[Bhil|bhil]] archers. On the Mughal side were Asaf Khan and Jagannath Kachhwaha in the vanguard, Madho Singh Kachhwaha in the reserve and Mihtar Khan in the rear. This matters: the battle was not 'Hindus against Muslims'. On each side there were Hindus and Muslims."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Here the sources fight. Mewar tradition speaks of 20,000 men for Pratap against 80,000 Mughals, and the historian Jadunath Sarkar calls these numbers an exaggeration. The chronicler Badayuni, of the Mughal court, says Pratap had about 3,000 horsemen and 400 Bhil archers, and that Man Singh had about 10,000, of whom 4,000 were Kachhwahas (Man Singh's own people), a thousand were other Hindus and 5,000 were Muslims. Satish Chandra gives 5,000 to 10,000 for the Mughals.",
        "Both sides had [[war elephants|elefantes de guerra]]. The Mughals had muskets but no artillery. The Rajputs had no firearms.",
        { h: "The terrain" },
        "Haldighati is a narrow pass at one end of the Aravalli hills, near Gogunda. The name means 'turmeric-colored pass', because of the color of the rocks. The village of Khamnor lies about 23 km north of Gogunda. The Mughal sources place the decisive fight near Khamnor, and Badayuni near Gogunda. Badayuni dates the encounter to 21 June, and the other sources give 18 June 1576. The fighting began three hours after sunrise.",
        { h: "The battle in four movements" },
        "First, Pratap's attack. The Rajput charge was so strong that it broke the Mughal wings and center. According to the chronicler Abul Fazl, the Mughals fell back to a place called Rati Talai, which later got the name Rakt Talai, the 'lake of blood', before regrouping. It was Pratap's best moment.",
        "Second, the reaction. Man Singh sent in the imperial rear guard. Mihtar Khan, according to one tradition, beat the drums and spread the rumor that reinforcements from the emperor were on the way, which lifted the spirits of the Mughals and shook those of the Rajputs. The Mughal musketeers broke the charge of Mewar's war elephants.",
        "Third, the retreat. Wounded, Pratap was persuaded by the nobles to leave the field. To buy him time, one of the chiefs, Jhala Man Singh, put on the royal insignia and drew the Mughal attacks onto himself. He was killed. Pratap escaped.",
        "Fourth, the end. Without the king, the men of Mewar began to abandon the field. The battle lasted more than three hours. Man Singh kept the field, but did not pursue Pratap. For the historian Rima Hooja, the reason was the personal respect he had for his opponent. Akbar rebuked him for it and, according to one source, kept him away from court for a while."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Casualties are another controversial point. Abul Fazl and Nizamuddin Ahmad give about 150 Mughals dead and 350 wounded, and about 500 dead from Mewar. Badayuni speaks of 500 dead in total, of whom 120 were Muslims. Sarkar, using Mewar sources, calculates that about 46% of Pratap's some 3,400 men were killed or wounded. Later Rajput chronicles speak of up to 20,000 dead, a number historians consider inflated.",
        "Man Singh took Gogunda within a few days, and in September 1576 Akbar himself led a campaign. Gogunda, Udaipur and Kumbhalgarh passed to Mughal control. In the following years, Shahbaz Khan's attacks pushed Pratap into the mountains. But after 1579 the pressure eased, and in 1584 Pratap repelled another expedition, that of Jagannath Kachhwaha. When Akbar's attention went elsewhere, Pratap recovered about 36 posts, among them Udaipur and Gogunda. Chittor and Mandalgarh stayed Mughal. His court was at Chavand, where he sheltered poets and artists. Pratap died there, on 19 January 1597, after a hunting accident. He was 56.",
        { h: "Why it matters" },
        "For many Indians, Pratap is the symbol of resistance and pride. The figure of Man Singh, on the other side, is a reminder that the history of the Rajputs and the Mughals was far more complicated than a quarrel between Hindus and Muslims.",
        { h: "Curiosities and controversies" },
        { note: "Who won? Most historians, among them D. N. Jha, Tanuja Kothiyal and Rima Hooja, record a Mughal victory on the field. Satish Chandra called the battle a 'futile victory' for the Mughals, because they managed to capture neither Pratap nor his family, and Akbar still had to campaign afterward. Officials of some Rajasthan governments claim that Pratap won, and historians reject this." },
        { note: "Chetak: according to tradition, Pratap's horse leapt over a stream with its wounded master and died soon after. The scene in which Pratap, mounted on Chetak, attacks Man Singh's elephant is treated by Sarkar as legend." },
        { note: "The elephant Ram Prasad: Akbar asked Pratap for this elephant several times. The Mughals captured it at Haldighati and took it to the emperor. Some historians read Pratap's earlier refusal to hand it over as a sign that he did not intend to submit." }
      ]}
    ]
  },

  alcacerquibir: {
    war: "Portuguese intervention in the Moroccan civil war (1576–1578)",
    hook: "In one August afternoon, Portugal lost its king, its nobility and, two years later, its independence.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 16th century, Portugal had an empire that ran from Brazil to India and Japan, but in North Africa it was stuck. The strongholds it had conquered in Morocco, such as Ceuta, Tangier and Arzila, were expensive to keep and worth little. On the other side of the Mediterranean, power lay with the Ottomans, who already dominated Algeria and Tunisia and could threaten the Iberian Peninsula.",
        "Morocco was ruled by the [[Saadian|saadianos]] dynasty. In 1576, the sultan Abu Abdallah Mohammed II, whom the Portuguese called Mulei Mohamed, was overthrown by his uncle, Abd al-Malik (Mulei Maluco in Portuguese texts), who had Ottoman support. Mulei Mohamed fled and asked Portugal for help, offering, according to the Portuguese-language sources, to hand over strongholds such as Larache, Arzila and Tetouan in exchange for military support.",
        { h: "The road to Alcácer-Quibir" },
        { timeline: [
          ["1554", "Sebastian is born, grandson of King John III, two weeks after his father's death. He becomes king at age 3, in 1557."],
          ["1568", "Sebastian, aged 14, takes over the government. He is devout and dreams of a crusade in Africa."],
          ["1576", "Abd al-Malik overthrows his nephew, Mulei Mohamed, who asks Portugal for help."],
          ["Early June 1578", "The army leaves Lisbon. It lands at Arzila at the end of June."],
          ["3 and 4 August 1578", "They reach the Mocazém river (Wadi al-Makhazin), near Alcácer-Quibir, and face each other the next day."]
        ]},
        "Philip II of Spain, Sebastian's uncle, wanted to limit the adventure. In the talks at Guadalupe (the sources differ between the winter of 1576 to 1577 and Christmas 1577), he offered galleys and soldiers, but with conditions: a quick campaign and the bill paid by Portugal. Portugal did not meet the 1577 deadline, and Spain considered itself free of the agreement."
      ]},
      { n: "02", title: "The main players", blocks: [
        { h: "Sebastian, 24 years old" },
        "Raised by Jesuits and very religious, he never married and had no children. He had the dream of a great victory against Islam, the same idea of [[crusade|cruzada]] that moved the medieval kings. His mother and his uncle, Philip II, tried to dissuade him. His commanders also counseled caution. He wanted to go anyway.",
        { h: "Abd al-Malik, the sick sultan" },
        "He reached the throne with Ottoman support and ruled as a vassal of Istanbul. On the day of the battle, he was gravely ill and was carried in a litter. He did not see the end: he died during the fighting. The causes are uncertain: the accounts speak of illness, exertion, and some of poisoning by an internal conspiracy.",
        { h: "The other names" },
        "Mulei Mohamed, the deposed sultan, who went along with the Portuguese and drowned in the river as he fled. Thomas Stukeley, an English adventurer, commanded a contingent of about 600 Italians who had been gathered for an invasion of Ireland. On the Moroccan side, Abd al-Malik's brother, Ahmad al-Mansur, took the throne right afterward and went down in history as the great Saadian sultan."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers for the Portuguese army vary greatly. According to Portuguese Wikipedia, they were 17,000 to 20,000 men: some 12,000 Portuguese, 2,000 Spaniards, 2,800 Germans and Walloons, 600 Italians and 650 allied Moors. English Wikipedia gives about 23,000, counting 6,000 allied Moors. This army carried some 40 cannons, many servants and civilians, and about 500 baggage wagons.",
        "The Moroccan army is estimated at between 40,000 and 60,000 men (the highest sources say up to 100,000), with about 34 cannons. It had a lot of cavalry, 10,000 to 20,000 horsemen on the wings, some 15,000 shooters and about a thousand mounted arquebusiers. Among the soldiers were Andalusians, Christian renegades, and a guard of Turks.",
        { note: "The role of the Ottomans is debated. Some historians say the Saadians won without direct help from the Turks. Others describe janissaries and Turkish musket infantry on the field. Modern Turkish sources speak of troops of Ramazan Pasha, but they tend to exaggerate." },
        { h: "The terrain" },
        "A plain by the Mocazém river, near the city of Alcácer-Quibir (Ksar el-Kebir), in northern Morocco. The Portuguese army marched for about a week from Arzila, in the August heat, and moved away from the coast and from the ships, which could take it back or bring relief.",
        { h: "The eve" },
        "On 3 August, the Portuguese crossed the river, almost dry. At midday, 10,000 to 12,000 Saadian horsemen appeared in the rear, and the Portuguese formed a large square. For two hours, the two armies stood face to face without fighting, and then the Moroccans withdrew. The Portuguese camped among trenches. Informants said the sultan had 100,000 men and was sick, in a litter.",
        "The next morning, around 7 o'clock, there was a council of war. They discussed falling back to Larache or waiting. Sebastian refused: he said he had not come only to Larache, but to give battle to the sultan. The poet and soldier Francisco de Aldana backed him. It was decided to fight.",
        { h: "The battle in four movements" },
        { formation: true },
        "First, the layout of the armies. The Portuguese arranged themselves in one large block: in front, the Portuguese, Spanish, German, Walloon and Italian adventurers; behind, the [[tercios|terço]] of Vasco da Silveira, with about 5,000 men; to the side, the baggage wagons; and in the rear, the tercios of Francisco de Távora and Miguel de Noronha. The Moroccans formed three lines of shooters in the center, with the artillery camouflaged by tamarisk branches, and left the cavalry at the tips, in a crescent. The sultan stayed behind, in a litter, protected by some 200 Turks.",
        "Second, the opening. Around 11 o'clock, the Jesuits blessed the troops, and the soldiers knelt. The Portuguese fired. The Moroccan artillery revealed itself and answered. Thomas Stukeley was killed by a cannonball early, according to Portuguese Wikipedia. The Moroccan cavalry went around the Portuguese on the sides and the rear.",
        "Third, the good Portuguese moment. Around midday, Sebastian charged with some 600 heavy horsemen on the left flank, while the adventurers advanced. The Duke of Aveiro attacked the Saadian cavalry by the river. The king's cavalry broke the Moroccan front, and it was in this interval that Abd al-Malik died. The officers hid the death from the soldiers, which prevented panic.",
        "Fourth, the turn. Álvaro Pires de Távora was struck, and an order to fall back was misunderstood by the front ranks, which broke. The Saadians threw 200 to 300 Turks of the royal guard at the Portuguese, and the cavalry on the tips closed the crescent. Around 2 p.m., the vanguard and the second line were destroyed. The army lost its cohesion. Sebastian charged twice more with some 200 horsemen. The Saadians took the artillery and hit the baggage wagons, where the non-combatants were, and there was panic. A wagon of gunpowder barrels exploded. The rear guard was the last organized force, and when Francisco de Távora died, his men laid down their arms. The fighting lasted about four hours, between 11 and 5 in the afternoon."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The figures vary greatly. According to studies cited by Portuguese Wikipedia, between 8,000 and 10,000 men died on Sebastian's side, and about 17,000 were captured, counting also those who accompanied the army. Spanish sources speak of more dead, and Portuguese sources of fewer. Almost the whole Portuguese nobility died or was captured.",
        "Three kings died: Sebastian, Abd al-Malik and the deposed sultan, Mulei Mohamed, who drowned in the river. That is why the battle is also called the Battle of the Three Kings. Sebastian's body was not recognized with certainty: one version says he charged until he vanished among the enemy, and another, closer to the sources of the time, says he tried to leave the field and was caught and killed. A body was formally identified on 5 August 1578 by some noblemen, but the identification is still debated.",
        { h: "The ransom and the crown" },
        "The captive noblemen were ransomed. For eighty of them, a sum of 400,000 cruzados was agreed, about 5,000 per person, according to the historian Disney. The ambassador D. Francisco da Costa stayed in Marrakesh as guarantor and died there, in 1591, without the debt being settled. The crown had already spent more than a million cruzados on the expedition. That bill almost broke Portugal.",
        "The new king was Sebastian's great-uncle, Cardinal Henry, already old. He reigned from 1578 to 1580 and died without heirs. Philip II of Spain, nephew of the dead king, invaded, defeated the Prior of Crato at Alcântara in 1580, and was acclaimed king of Portugal at Tomar in 1581. Portugal and its colonies, Brazil among them, stayed under the kings of Spain until 1640.",
        { h: "Why it matters" },
        "It was the end of Portuguese attempts to conquer Morocco and the greatest military disaster in the history of Portugal. In Morocco, the new sultan Ahmad al-Mansur grew immensely rich from the ransoms, consolidated his power and later sent an army across the Sahara against the Songhai Empire, in today's Mali. And [[Sebastianism|sebastianismo]] was born: the hope that the vanished king would return to save the country.",
        { h: "Curiosities and controversies" },
        { note: "The impostors: during the Iberian Union, four men claimed to be King Sebastian returned. One was hanged in 1603, after being handed over by Venice, and the last, in 1619." },
        { note: "The numbers do not add up: Portuguese Wikipedia gives 17,000 to 20,000 Portuguese soldiers and, at the same time, 8,000 dead and 16,000 captured. The count only works if the captives included many non-combatants (servants, merchants, camp followers)." },
        { note: "The death of Abd al-Malik: according to one version, he died of illness and exertion; according to another, he was poisoned; everyone agrees that the death was hidden from the troops until victory was assured." }
      ]}
    ]
  },

  chuvash: {
    war: "Russian conquest of Siberia (1581–1598)",
    hook: "A few hundred Cossacks with arquebuses brought down a whole kingdom and opened the road to the Pacific.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1582, Siberia was a world apart. For the Russians, the territory beyond the Ural Mountains was almost unknown. There lived peoples of hunters and fishermen, such as the Khanty and the Mansi, and others of Turkic and Mongol origin. In the region of the Irtysh River, a Muslim [[khanate|canato]] dominated the surroundings: the Khanate of Sibir, with its capital at Qashliq, also called Isker or Sibir. It was from this word that the name Siberia came.",
        "The chief of this khanate was Kuchum. A descendant of Genghis Khan through an indirect line, he took the throne in 1563, after defeating his rival Yadigar. In the 1570s, he backed Islamization, bringing clerics and settlers from Bukhara and Kazan. On the other side of the Urals, the Stroganov family, very rich and the owner of lands and salt works on the Kama River, had received an enormous grant from the tsar in 1558. In 1573, the khan sent a nephew to attack the Stroganov lands.",
        { h: "The road to the Irtysh River" },
        { timeline: [
          ["1558", "The Stroganov family receives from [[Tsar|tsar]] Ivan IV a large grant in the region of the Kama and the Urals."],
          ["1563", "Kuchum defeats Yadigar and becomes khan of Sibir."],
          ["1573", "A nephew of Kuchum attacks Stroganov lands."],
          ["1579 to 1582", "The Stroganovs recruit Cossacks. The dates vary: a letter from early 1579 summons the band, and the campaign begins between 1579 and 1582, depending on the author."],
          ["October 1582", "Combat of Chuvash Cape, near Qashliq. The Cossacks take the capital."]
        ]},
        "Ivan IV, the Terrible, was busy with the Livonian War in the west. According to one version, he first blamed Yermak for the attacks by local peoples in the Perm region and demanded that he be called back. Only after the victory did he change his mind."
      ]},
      { n: "02", title: "The main players", blocks: [
        { h: "Yermak Timofeyevich" },
        "A [[Cossack|cossacos]] of obscure origin: the date and place of his birth are debated. According to the sources, he was born around 1532, near the Chusovaya River, and was a boatman for the Stroganovs before becoming a river pirate, which gave him his nickname. He was a band leader used to rivers, boats and ambushes. He commanded some 540 men, plus about 300 sent by the Stroganovs, for a total of 840 (authors differ on the numbers).",
        { h: "Kuchum and Mametkul" },
        "Khan Kuchum was a Muslim lord of a land of very different peoples, not all of them loyal. His nephew Mametkul (Mahmet-kul) was the main commander in the campaign. Some accounts say 'son'; most say 'nephew'.",
        { h: "The other names" },
        "Ivan Koltso, a trusted Cossack of Yermak's, took the news of the victory and gift furs to the tsar. Karacha, a former official of Kuchum, is a character who came onto the scene later, in the following years, against Yermak."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "On the Cossack side, the count is 540 to 840 men, armed with arquebuses (English Wikipedia cites 540 men and about 200 who joined later). On the khan's side, nobody knows: English Wikipedia gives 3,400 men, but marks the number as unsourced. They were Tatars of the court, plus Khanty and Mansi warriors, generally hunters with no experience against firearms.",
        { note: "The idea that the Siberians did not know firearms is disputed. There are accounts that the Tatars had cannons in position, but that they did not fire in the battle." },
        { h: "The journey" },
        "The troop left the Perm region and went down the Chusovaya in boats. Then it crossed the Urals, hauling boats and cargo overland to the Tagil River, and went down the Tura and the Tobol. Along the way, it defeated local princes and took small fortifications. The departure date is debated: 1579, 1581 or September 1582. One author observes that, if it was 1582, little time was left to build the boats.",
        { h: "The battle in two movements" },
        "The location is disputed: some place it at Chuvash Cape, on the Irtysh, near the capital, and others closer to the Tobol River. What the sources agree on is the general layout. Kuchum's warriors waited behind a barrier of cut logs, on the riverbank, and preferred to fight there rather than wait for a siege.",
        "First, the shooting. The Cossacks reached the bank and fired. The Siberians answered with arrows, and the Russian fire caused few casualties, because the Tatars were hidden among the fallen trees. Some accounts speak of three days of fighting and a first attack that failed, followed by another, days later.",
        "Second, the rout. Mametkul counterattacked. The Cossacks formed a square, with the shooters in the middle, and disciplined fire broke the charge. The Khanty and the Mansi, who had never faced firearms, panicked and fled first, and then the Tatars, who kept attacking, suffered heavy losses. Mametkul was wounded, almost captured and taken away by boat. Without their chief, the Siberians scattered. Kuchum fled Qashliq the same night."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "According to Wikipedia, the Cossacks had about 107 casualties. The Siberian figures (2,800) have no reliable source. The Cossacks entered Qashliq between 23 and 26 October of the Julian calendar, depending on the source. Kuchum fled to the Baraba steppe, and most of the inhabitants refused to follow him. The local chiefs began to submit.",
        "Yermak sent Ivan Koltso to Moscow with furs. The tsar pardoned the Cossacks, sent gifts, among them armor with the double-headed eagle, and reinforcements of 300 or 500 soldiers, depending on the source, and gave Yermak the title of 'prince of Siberia'. But the position was fragile: Mametkul attacked again, and Koltso and about 40 men were killed in an ambush. Yermak died in August 1584 or 1585, depending on the source, when his camp on an island in the Irtysh was surprised on a stormy night. According to legend, he drowned under the weight of the armor he had received from the tsar.",
        { h: "Why it matters" },
        "The Khanate of Sibir came to an end. The Russians built forts at Tyumen (1586), Tobolsk (1587) and Tara (1594), and Kuchum was beaten for the last time around 1598. Less than 60 years after Chuvash Cape, the Russians reached the Pacific: in 1639, Ivan Moskvitin's expedition reached the Sea of Okhotsk, at the mouth of the Ulya River, and the settlement of Okhotsk was founded in 1647. Siberia became part of Russia, and its fur trade financed a good part of the Russian state. Some authors compare the case to the Spanish conquest of America, of a few men with firearms over a large and divided empire.",
        { h: "Curiosities and controversies" },
        { note: "The sources are confusing: the Siberian chronicles were written long afterward and contradict one another on dates, numbers and even on who organized the expedition. Historians debate even how far the Stroganovs commanded Yermak." },
        { note: "Qashliq was left uninhabited after the conquest and was occupied again for a short time, from 1584 to 1586. The Russian capital in the region became Tobolsk." }
      ]}
    ]
  },

  armada: {
    war: "Anglo-Spanish War (1585–1604)",
    hook: "The most powerful fleet in the world was defeated, almost as much by the storm as by the English cannons.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of the 16th century, the Spain of Philip II was the dominant power in Europe. After 1580, when he took the throne of Portugal, the king of Spain also controlled the Portuguese empire, and American silver paid for his armies. The England of Elizabeth I was much smaller, Protestant, and lived off pirates, the privateers, who attacked Spanish ships and colonies. Philip saw in Elizabeth a heretic and a usurper.",
        "Open war began in 1585, when England sent troops to help the rebel Dutch against Spain. In February 1587, Elizabeth had Mary Stuart executed, the Catholic queen of Scotland, whom many Catholics saw as the rightful queen of England. In April 1587, Francis Drake entered the port of Cádiz and destroyed or captured about 30 ships and many supplies, which delayed the Spanish preparations by about a year.",
        { h: "The road to the Channel" },
        { timeline: [
          ["1585", "The Anglo-Spanish War begins. England supports the Dutch revolt."],
          ["February 1587", "Mary Stuart is executed."],
          ["April 1587", "Drake attacks Cádiz."],
          ["February 1588", "The Marquis of Santa Cruz, the author of the plan, dies. The Duke of Medina Sidonia takes over."],
          ["Late May 1588", "The fleet leaves Lisbon. It stops at A Coruña and puts back to sea in July."],
          ["29 July 1588", "The Armada is sighted near the Lizard, in Cornwall."]
        ]},
        "Philip's plan had two parts. The fleet would sail up the English Channel to the coast of the Spanish Netherlands. There, the Duke of Parma, commander of the Army of Flanders, would load his soldiers onto barges, and the fleet would escort them across to England. The weakness of the plan became plain afterward: the fleet and the army had to meet at sea, and the two had no way to talk to each other."
      ]},
      { n: "02", title: "The main players", blocks: [
        { h: "Philip II of Spain, 61 years old" },
        "He governed the biggest empire in the world from Madrid, by letters and written orders. He treated the invasion as a religious mission, and Pope Sixtus V promised money if the force landed. When he learned of the failure, according to tradition, he said: 'I sent the fleet against men, not against the winds and the waves.'",
        { h: "The Duke of Medina Sidonia" },
        "Alonso Pérez de Guzmán, 7th duke, was chosen after the death of Santa Cruz. He was a good administrator, but had no experience at sea and doubted the plan. According to the sources, his objections never reached the king. Even so, he kept the crescent formation throughout the Channel.",
        { h: "The English" },
        "Lord Charles Howard, the admiral of England, commanded the English fleet. With him was Francis Drake, a famous privateer and the most feared by the Spaniards, and other captains, such as John Hawkins and Martin Frobisher. Elizabeth I, aged 54, stayed on land, and tradition attributes to her a speech to the troops at Tilbury."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The counts differ. The Armada had between 122 and 137 ships: some 24 purpose-built war galleons, 44 armed merchantmen, and dozens of auxiliary and supply ships. It carried about 10,000 sailors and 19,000 soldiers, and more than 2,000 cannons. The English fleet had 197 to 226 ships, but only 34 were royal navy, with about 16,000 men. The Spaniards had more artillery in total, but the English had longer-range cannons and more maneuverable ships.",
        "Parma's army is another uncertain number: 30,000 to 60,000 men, depending on the source. Because of disease, it was down to about 16,000 when the fleet arrived at Calais, according to English Wikipedia.",
        { note: "The dates here follow the Gregorian calendar, used by Spain. England used the Julian calendar, ten days behind, and so in English documents the same dates appear ten days earlier." },
        { h: "The terrain" },
        "The English Channel, the strait that separates England from France and the Netherlands. It is a sea of strong winds and currents, and near the coast of Flanders there are sandbanks that can trap large ships. The Armada had no deep port available on the Flanders side, and this was one of the problems.",
        { h: "The Channel" },
        "On 29 July, the Armada was sighted, and beacon fires warned London. Tradition says Drake was playing bowls at Plymouth and said there was time to finish. The story only appeared years later and is legend. The tide trapped the English fleet in port. But Medina Sidonia, with orders from the king not to attack, pressed on.",
        { h: "The battle in four movements" },
        { formation: true },
        "First, the chase. Between 30 and 31 July, near the Eddystone rocks, the English took the [[windward|barlavento]] position and attacked from a distance, with their cannons, without closing in. The Spaniards kept the crescent, with the galleons in the center and at the tips, and preferred to fight up close, by [[boarding|abordagem]]. No ship was lost on the first day. On 1 August, near Portland, the Nuestra Señora del Rosario collided with other ships and drifted. Drake captured it, along with Admiral Pedro de Valdés, gunpowder and 50,000 ducats. The San Salvador had its powder magazine blow up and was also captured.",
        "Second, Calais. Medina Sidonia wanted to shelter the fleet near the Isle of Wight, but the English attacked in four groups and he pressed on. On 7 August, the Armada anchored near Calais, in close formation, to wait for Parma. Parma only learned of the location that day.",
        "Third, the [[fireships|brulote]]. On the night of 7 to 8 August, the English sacrificed eight of their ships: they set them on fire and let them loose with the current, straight at the anchored fleet. The Spaniards managed to divert three with small boats. The rest passed between the ships. No Spanish ship caught fire, but the crescent broke: the captains cut their anchors and scattered. The fleet lost almost all its anchors and could no longer beat back against the wind.",
        "Fourth, Gravelines. On 8 August, at dawn, the Spanish flagship and four more ships faced the whole English fleet. The English stayed out of boarding range and fired from a distance, with the wind in their favor, for about eight hours, until the ammunition ran out. The Spanish cannons were harder to reload, and the excavations of wrecks in Ireland show that a good part of the Spanish ammunition went unused. Around 4 p.m., the English fired their last shots. Three ships were lost on the Flanders shoals. Afterward, the wind shifted to the south, freed the Armada from the sandbanks and let it head north."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Howard broke off the pursuit on 12 August, off the Firth of Forth, in Scotland. To return to Spain, the Armada had no other way than to go around the north of Scotland and Ireland. On 20 August, it still had about 110 ships. That is where the weather did the work. Violent storms, the strongest anyone remembered, threw many ships onto the coasts of Ireland and Scotland. Most of the about 28 ships lost in storms were wrecked on the west coast of Ireland. About 5,000 men died, drowned, starved or killed by the local population. The galleass Girona was wrecked on 26 October on the coast of Northern Ireland, with about 1,300 people aboard: only 9 survived.",
        "The loss figures vary by author: from 35 to 63 ships lost, most between 44 and 51. Of the 25,696 men who left A Coruña, 13,399 came back, according to Spanish records, which gives some 12,000 dead. The lowest estimates speak of 9,000 dead, and Spanish sources of up to 11,000.",
        { h: "Why it matters" },
        "Protestant England survived, and its sailors gained confidence. Most military historians see in Gravelines the start of a lasting shift in the naval balance, in favor of the English, thanks to the difference in cannon technology and tactics. But the war went on for 16 more years, and Spain recovered. In 1589, the 'English Armada' of Drake and Norris, which tried to destroy the Spanish fleet and take the Azores, failed, with enormous losses. The Spanish armadas of 1596 and 1597 were also ruined by storms. Peace only came in 1604.",
        { h: "Curiosities and controversies" },
        { note: "Elizabeth at Tilbury: on 18 August, she rode, in armor, to the camp of about 4,500 soldiers at the mouth of the Thames. In the most famous version of her speech, she said she had the body of a weak woman, but the heart and stomach of a king. The line was only written down much later, and the versions vary." },
        { note: "Who won? One historian called it 'a great English propaganda victory', but strategically 'essentially indecisive'. The first English accounts said God had favored the Protestants. What is clear is that the weather was decisive: more ships and sailors were lost to the storms than to combat." },
        { note: "The name: the fleet's official title, in Spanish, was 'Grand and Most Fortunate Armada'. 'Invincible' is the nickname that became famous later." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lepanto: {
    terrain: [
      { t: "note", x: 88, y: 4, l: "North ↑ (Greek coast)" },
      { t: "note", x: 12, y: 66, l: "Open sea, to the south" }
    ],
    units: [
      { id: "aN", s: "a", k: "ship", w: 8, h: 14, l: "Barbarigo" },
      { id: "aC", s: "a", k: "ship", w: 8, h: 14, l: "Don John and Colonna" },
      { id: "aS", s: "a", k: "ship", w: 8, h: 14, l: "Doria" },
      { id: "aR", s: "a", k: "ship", w: 6, h: 12, l: "Santa Cruz (reserve)" },
      { id: "gN", s: "a", k: "ship", w: 5, h: 5, l: "" },
      { id: "gC", s: "a", k: "ship", w: 5, h: 5, l: "Galleasses" },
      { id: "gS", s: "a", k: "ship", w: 5, h: 5, l: "" },
      { id: "bN", s: "b", k: "ship", w: 8, h: 14, l: "Siroco" },
      { id: "bC", s: "b", k: "ship", w: 8, h: 18, l: "Ali Pasha" },
      { id: "bS", s: "b", k: "ship", w: 8, h: 20, l: "Uluç Ali" }
    ],
    steps: [
      { t: "Diagram of the line. The Holy League forms in four groups: Barbarigo to the north, hugging the coast; Don John in the center; Doria to the south, out to sea; and Santa Cruz behind, in reserve. The Ottomans come in a half-moon, and Uluç Ali, at the southern tip, has a longer line.",
        p: { aN: [28, 14], aC: [28, 36], aS: [28, 56], aR: [14, 36], gN: [38, 14], gC: [38, 36], gS: [38, 56],
             bN: [72, 14], bC: [74, 38], bS: [72, 60] } },
      { t: "The galleasses go to the front and fire at short range against the Turkish galleys. The Ottoman line, which had been coming in good order, falls apart before the clash.",
        p: { gN: [48, 14], gC: [48, 36], gS: [48, 56], bN: [64, 14], bC: [64, 38], bS: [64, 60] } },
      { t: "In the north, Siroco tries to slip between Barbarigo and the coast. Barbarigo is mortally wounded, but the wing holds. Siroco is killed.",
        p: { aN: [40, 12], bN: [48, 11], gN: [44, 20] } },
      { t: "In the center, Ali Pasha's Sultana slams into the Real. The janissaries climb onto the bow and are thrown back. The boarding fight lasts about an hour.",
        p: { aC: [50, 36], bC: [56, 36], gC: [44, 28] } },
      { t: "In the south, Doria pulls away toward the open sea. Uluç Ali takes advantage of the gap and attacks the flank of the Christian center.",
        p: { aS: [30, 64], bS: [44, 52, -25], gS: [38, 58] } },
      { t: "Santa Cruz's reserve moves up to help where the pressure is greatest, first in the north and then in the south.",
        p: { aR: [34, 50] } },
      { t: "The Turkish center falls. Ali Pasha is killed, and the Sultana is taken. The Turks of the northern wing are also beaten.",
        p: { aC: [58, 34], bC: [64, 34] }, x: ["bC", "bN"] },
      { t: "Uluç Ali pulls back with about 30 ships, carrying off a banner of the Order of Malta. The rest of the Ottoman fleet is captured or destroyed.",
        p: { bS: [86, 66, -10], aR: [50, 54] } }
    ]
  },

  nagashino: {
    terrain: [
      { t: "sea", x: 52, y: 4, w: 3, h: 62, l: "Rengo River" },
      { t: "hill", x: 88, y: 58, rx: 9, ry: 6, l: "Tobigasu Fort" }
    ],
    units: [
      { id: "oFence", s: "a", k: "camp", w: 2.5, h: 46, l: "Fence and ditches" },
      { id: "oGun", s: "a", k: "inf", w: 6, h: 34, l: "Arquebusiers" },
      { id: "oMain", s: "a", k: "inf", w: 14, h: 30, l: "Oda and Tokugawa" },
      { id: "oRaid", s: "a", k: "inf", w: 6, h: 10, l: "Sakai (4,000)" },
      { id: "castle", s: "a", k: "camp", w: 8, h: 8, l: "Nagashino Castle" },
      { id: "tA", s: "b", k: "cav", w: 6, h: 14, l: "Yamagata" },
      { id: "tB", s: "b", k: "cav", w: 6, h: 14, l: "Baba, Naito and Sanada" },
      { id: "tC", s: "b", k: "inf", w: 8, h: 18, l: "Katsuyori" },
      { id: "tSiege", s: "b", k: "inf", w: 6, h: 14, l: "Siege (3,000)" }
    ],
    steps: [
      { t: "Diagram of the position. Nobunaga and Ieyasu sit behind a fence and ditches, on the west side of a stream. Katsuyori has about 12,000 men facing them, and 3,000 besiege the castle, farther back.",
        p: { oFence: [44, 35], oGun: [38, 35], oMain: [26, 35], oRaid: [26, 62], castle: [92, 34], tA: [62, 24], tB: [62, 46], tC: [74, 35], tSiege: [86, 20] } },
      { t: "On the night of 28 to 29 June, Sakai's 4,000 men, with about 500 arquebusiers, leave the camp and circle the enemy behind the mountains.",
        p: { oRaid: [58, 64] } },
      { t: "At dawn, Sakai takes the Tobigasu fort, behind the Takeda. The castle garrison comes out and helps drive off those besieging it.",
        p: { oRaid: [84, 60], tSiege: [86, 14] }, x: ["tSiege"] },
      { t: "Katsuyori loses his retreat and decides to attack head-on. The Takeda cavalry crosses the stream toward the fence.",
        p: { tA: [54, 25], tB: [54, 45], tC: [66, 35] } },
      { t: "Yamagata leads the first wave. The shooters wait behind the fence and fire when the horsemen come close. Yamagata is cut down.",
        p: { tA: [47, 28] }, x: ["tA"] },
      { t: "Baba, Naito and the Sanada brothers attack the fence in further waves. Those who get close are met by the shots and the spears.",
        p: { tB: [47, 42], tC: [58, 35] } },
      { t: "Around 2 p.m., the Takeda line breaks. Most of the dead fall in the flight.",
        p: { tC: [70, 30] }, x: ["tB"] },
      { t: "Nobunaga orders the pursuit. The troops come out from the fence, and Katsuyori flees with few men to Kai.",
        p: { oMain: [44, 33], oGun: [48, 35], oRaid: [76, 52], tC: [94, 20] }, x: ["tC"] }
    ]
  },

  alcacerquibir: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 5, h: 70, l: "Mocazém River" }
    ],
    units: [
      { id: "mCavL", s: "a", k: "cav", w: 14, h: 5, l: "Moroccan cavalry" },
      { id: "mCavR", s: "a", k: "cav", w: 14, h: 5, l: "Moroccan cavalry" },
      { id: "mGun", s: "a", k: "inf", w: 26, h: 5, l: "Shooters and artillery" },
      { id: "mSul", s: "a", k: "inf", w: 12, h: 4, l: "Sultan and Turkish guard" },
      { id: "pVan", s: "b", k: "inf", w: 28, h: 6, l: "Vanguard (adventurers, Spaniards, Germans)" },
      { id: "pSil", s: "b", k: "inf", w: 26, h: 5, l: "Silveira's tercios" },
      { id: "pRear", s: "b", k: "inf", w: 22, h: 4, l: "Rear guard" },
      { id: "pWag", s: "b", k: "car", w: 3, h: 14, l: "Wagons" },
      { id: "pCav", s: "b", k: "cav", w: 10, h: 5, l: "Sebastian" },
      { id: "pAve", s: "b", k: "cav", w: 8, h: 4, l: "Duke of Aveiro" }
    ],
    steps: [
      { t: "Diagram of the positions on 4 August. The Portuguese form a block: vanguard, then Silveira's tercios and, behind, the rear guard, with the baggage wagons at the side. The Moroccans have shooters in the center and cavalry on the tips, in a crescent. The sultan stays behind, in a litter.",
        p: { mCavL: [22, 22], mCavR: [78, 22], mGun: [50, 24], mSul: [50, 8], pVan: [50, 42], pSil: [50, 50], pRear: [50, 58], pWag: [76, 52], pCav: [30, 50], pAve: [14, 50] } },
      { t: "Around 11 o'clock, the Moroccan artillery reveals itself and fires. The cavalry on the tips advances and begins to encircle the Portuguese.",
        p: { mCavL: [24, 36, 20], mCavR: [76, 36, -20], mGun: [50, 28] } },
      { t: "About midday, Sebastian charges with some 600 horsemen on the left flank, and the Duke of Aveiro attacks the cavalry by the river. The vanguard advances.",
        p: { pCav: [32, 36], pAve: [14, 38], pVan: [50, 36] } },
      { t: "This is the good Portuguese moment: the Moroccan front gives way. At that time Sultan Abd al-Malik dies, and his officers hide the death.",
        p: { pVan: [50, 30], pCav: [36, 28], mGun: [50, 22], mCavL: [20, 28, 20] } },
      { t: "Álvaro Pires de Távora is struck, an order to fall back is misunderstood and the vanguard breaks. The Turkish guard and the cavalry on the tips attack.",
        p: { pVan: [50, 40], mSul: [50, 20], mCavL: [26, 42, 40], mCavR: [74, 42, -40], mGun: [50, 30] } },
      { t: "The two arms of the crescent close from behind. The Moroccans take the artillery and hit the wagons, where the non-combatants are. There is panic.",
        p: { mCavL: [26, 58, 70], mCavR: [74, 60, -70], pVan: [50, 46], pSil: [50, 52] }, x: ["pWag"] },
      { t: "Between 2 and 5 p.m., the vanguard and the second line fall, and Silveira's tercios and the rear guard surrender, one after the other. Sebastian vanishes in the middle of the fighting.",
        p: { pCav: [40, 46] }, x: ["pVan", "pSil", "pRear", "pAve", "pCav"] }
    ]
  },

  armada: {
    terrain: [
      { t: "hill", x: 18, y: 0, rx: 26, ry: 5, l: "Coast of England" },
      { t: "hill", x: 98, y: 44, rx: 5, ry: 20, l: "Flanders" },
      { t: "note", x: 90, y: 5, l: "North ↑" }
    ],
    units: [
      { id: "aH", s: "a", k: "ship", w: 9, h: 4, l: "English fleet" },
      { id: "aD", s: "a", k: "ship", w: 8, h: 4, l: "" },
      { id: "aF", s: "a", k: "ship", w: 6, h: 3, l: "8 fireships" },
      { id: "bL", s: "b", k: "ship", w: 8, h: 4, l: "" },
      { id: "bC", s: "b", k: "ship", w: 9, h: 4, l: "Spanish Armada" },
      { id: "bR", s: "b", k: "ship", w: 8, h: 4, l: "" }
    ],
    steps: [
      { t: "Diagram of the voyage. On 29 July, the Armada enters the Channel in a crescent, with the galleons in the center and at the tips. The English stay behind, to windward.",
        p: { bC: [48, 36], bL: [40, 22], bR: [40, 50], aH: [22, 28], aD: [24, 44], aF: [8, 60] } },
      { t: "From 30 July to 1 August, the English fire from afar and the Armada keeps formation. Near Portland, the Rosario and the San Salvador are lost.",
        p: { bC: [62, 36], bL: [54, 22], bR: [54, 50], aH: [38, 28], aD: [40, 44] } },
      { t: "On 7 August, the Armada anchors near Calais, in close formation, waiting for the Duke of Parma. The English close in and prepare fireships.",
        p: { bC: [84, 36], bL: [80, 22], bR: [80, 50], aH: [66, 28], aD: [68, 44], aF: [52, 42] } },
      { t: "On the night of 7 to 8 August, eight burning ships drift down the current against the anchored fleet.",
        p: { aF: [74, 36] } },
      { t: "The captains cut their anchors and scatter. The crescent breaks, but no Spanish ship catches fire.",
        p: { bC: [90, 36], bL: [86, 14], bR: [86, 58], aF: [80, 36] }, x: ["aF"] },
      { t: "On 8 August, at Gravelines, the English fire for about eight hours, from afar and to windward. The Armada is pushed toward the sandbanks of Flanders.",
        p: { aH: [76, 24], aD: [76, 46], bC: [92, 32], bL: [90, 16], bR: [90, 54] } },
      { t: "The wind shifts and the Armada escapes to the north. Howard breaks off the pursuit on 12 August. With no other way, the Spaniards go around Scotland and Ireland, and the storms do the rest.",
        p: { bC: [68, 4, 180], bL: [78, 4, 180], bR: [58, 4, 180], aH: [76, 20], aD: [82, 28] } }
    ]
  }
});
