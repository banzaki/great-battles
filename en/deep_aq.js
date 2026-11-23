// In-depth battles, batch aq: castillon, toulon, barcelona, girona, ebro (regional pack, part B: Aquitaine, Provence and Catalonia).
// Checked against the English, Portuguese, French, Spanish and Catalan Wikipedia articles on Castillon, the Siege of Toulon,
// the Siege of Barcelona (1713-1714), the Third Siege of Girona and the Battle of the Ebro, Britannica, and the works those pages cite.
// Where sources disagree the text says so. No diagram for Girona: the sources do not describe the deployments and moves well enough.

Object.assign(GLOSSARY, {
  "guiena": "Guyenne (or Aquitaine) was the southwest of France, around Bordeaux. It had belonged to the English kings since 1152, when Eleanor of Aquitaine married Henry Plantagenet, the future king of England.",
  "campo entrincheirado": "A fighting position ringed with a ditch, heaped earth and stakes, where an army waits for the enemy to attack instead of going out to fight in the open field.",
  "mestre da artilharia": "The officer of the king of France in charge of cannon, powder and shot. Jean Bureau held this post and turned artillery into a winning card.",
  "guerra das rosas": "The English civil war (1455–1485) between two royal families, Lancaster and York, who fought over the throne. Their badges were a red rose and a white rose.",
  "espontão": "A short pike with a broad head, carried by infantry officers and sergeants in the 18th century. It could wound at close quarters, like a long bayonet.",
  "rada": "A sheltered bay where ships lie at anchor. Toulon has two: the small roadstead, next to the city, and the large roadstead, more open.",
  "representante em missão": "A deputy of the French Convention sent to the armies with power to appoint and dismiss officers and give orders in the name of the Republic.",
  "jacobinos": "The most radical political club of the French Revolution. Its members dominated the Convention and the government in 1793 and 1794.",
  "bórbons": "The royal dynasty of France. In 1700, a grandson of Louis XIV, Philip V, inherited the throne of Spain, and the Bourbons came to reign in both Paris and Madrid.",
  "habsburgos": "The Austrian dynasty that ruled Spain until 1700. In the War of the Spanish Succession, it backed Archduke Charles, Philip V's rival for the Spanish throne.",
  "tratado de utrecht": "A set of treaties of 1713 and 1714 that ended the War of the Spanish Succession. Great Britain recognised Philip V as king of Spain and abandoned the Catalans.",
  "junta de braços": "Catalonia's emergency assembly, with the three 'arms' of the country (nobility, clergy and towns). In 1713 it decided to continue the war.",
  "coronela": "The militia of the city of Barcelona, made up of craftsmen and merchants organised by trade. Its chief was the conseller en cap, the city's first magistrate.",
  "conseller en cap": "The first of the five magistrates who governed Barcelona. In 1714 it was Rafael Casanova, who also commanded the Coronela.",
  "bastião": "A spearhead-shaped projection at the corners of a modern wall. From there, guns fire along the wall and cover the ground on both sides.",
  "brecha na muralha": "An opening made in a wall by cannon or mines. The infantry try to enter the city through it.",
  "nova planta": "A series of decrees by King Philip V, from 1716 on, that abolished Catalonia's own institutions and laws and imposed the Castilian model.",
  "guerra peninsular": "The war of 1808 to 1814 in which Spain and Portugal, with British help, fought the Napoleonic occupation. The Spanish call it the War of Independence.",
  "exército de cobertura": "A force that stays outside a besieged city to protect the besiegers from any outside attack and to intercept relief.",
  "guerra civil espanhola": "The war of 1936 to 1939 between the republican government and the rebel generals led by Franco. It ended with Franco's victory, and he ruled Spain until 1975.",
  "nacionalistas": "The name Franco's supporters gave themselves in the Spanish Civil War: army officers, monarchists, the Falange and the Church, backed by Nazi Germany and Fascist Italy.",
  "república espanhola": "The legal government of Spain since 1931, backed by socialists, communists, anarchists and liberals. It received military aid from the Soviet Union and foreign volunteers.",
  "brigadas internacionais": "Volunteers from dozens of countries, many of them communists and anti-fascists, who fought for the Republic in the Spanish Civil War. They were withdrawn in September 1938.",
  "legião condor": "A unit of aircraft and troops that Nazi Germany sent to support Franco. It is remembered for the bombing of Guernica in 1937.",
  "quinta do biberão": "Boys of 17 and 18, from the class of 1941, called up in a hurry by the Republic in 1938. The nickname, 'quinta del biberón' in Spanish, comes from the baby's bottle."
});

Object.assign(DEEP, {
  castillon: {
    war: "The Hundred Years' War (1337–1453)",
    hook: "An old English warrior attacked a camp full of cannon, and Europe's longest war ended in a single afternoon.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "For three centuries the English kings had ruled [[Guyenne|guiena]], the southwest of France around Bordeaux. The region sold wine to England and did not want to be French: it preferred distant kings who taxed little. The [[Hundred Years' War|guerra dos cem anos]] had begun in 1337 precisely over who ruled where. In 1429, Joan of Arc turned the tide in favour of Charles VII of France. After that, the French retook the region bit by bit.",
        "In 1450 Normandy fell. In 1451 it was the turn of Bordeaux and Bayonne, and the whole of Guyenne passed to France. But the people of Bordeaux soon regretted it: the new taxes were heavy and the wine trade suffered. In October 1452, the city rose in revolt and asked England for help. A small army of about 3,000 men came, under John Talbot, Earl of Shrewsbury, who took Bordeaux on 23 October and won back much of the region.",
        { h: "The road to Castillon" },
        { timeline: [
          ["17 Oct 1452", "Talbot lands near Bordeaux with about 3,000 men."],
          ["23 Oct 1452", "Bordeaux welcomes him, and much of Guyenne returns to the English side."],
          ["1453", "Charles VII invades Guyenne with three armies, all aimed at Bordeaux."],
          ["8 Jul 1453", "The French besiege Castillon, on the Dordogne, and set up a camp next to it."],
          ["16 Jul", "Talbot leaves Bordeaux in haste with the men he has at hand."],
          ["17 Jul", "Battle of Castillon."]
        ]},
        "The French decision to march on Bordeaux was also a wager on artillery. Charles VII had invested in cannon as no king before him, and now he was going to use them in the open field, not only against walls."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "John Talbot, Earl of Shrewsbury" },
        "The most famous English commander of his day, so feared that, according to tradition, French mothers frightened their children with his name. He had been captured at Patay in 1429 and spent years as a prisoner. Rumour made him 75 or 80, but historians think he was about 66, which was already an advanced age for war. According to tradition, because of an oath sworn when he was released, he fought at Castillon without armour. He was also proud: the historian A. J. Pollard attributes the decision to keep attacking, when it was already clear the enemy was strong, partly to his pride and honour.",
        { h: "Jean Bureau and the French chiefs" },
        "The French [[master of artillery|mestre da artilharia]], Jean Bureau, was a commoner, not a nobleman, and he chose the ground and designed the camp. The French army was, in practice, run by a committee of chiefs, among them Jean de Bueil, Jacques de Chabannes and Duke Peter II of Brittany, who commanded the Breton cavalry. Charles VII, the king, was not at the battle.",
        { h: "Those who came from afar" },
        "On the English side there was Talbot's son John, Viscount Lisle, who arrived with reinforcements, and the Earl of Kendal, John de Foix, a Gascon loyal to England. On the French side, a mass of archers and gunners, more than noble knights, and so a battle unlike the old ones."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The French had between 7,000 and 9,000 men, including about 1,000 Breton horsemen, and an enormous artillery: Wikipedia speaks of up to 300 guns of various sizes, a number to be treated with caution, because the chronicles are imprecise. The English, according to the sources, numbered between 5,000 and 10,000, but a good part never arrived: Talbot left Bordeaux on 16 July and reached Libourne at nightfall with about 500 [[men-at-arms|homem de armas]] and 800 mounted archers, having left the bulk of the army behind.",
        { h: "The terrain" },
        "The camp that Bureau built was an [[entrenched camp|campo entrincheirado]]: a deep ditch and an earth bank reinforced with logs, protected by a [[palisade|paliçada]] on three sides and, on the fourth, by the steep bank of the Lidoire stream. The line was wavy, so the guns could fire sideways into the attackers. The camp lay out of range of the guns of the town of Castillon.",
        { note: "The exact location of the camp is disputed. The older hypothesis, by Léo Drouyn, puts it north of the Dordogne, behind an old channel of the Lidoire. Another puts it in front of Castillon, about 200 metres from the town. Because the stream changed course after 1496, the first hypothesis has lost ground. The diagram is therefore a sketch." },
        { h: "The battle" },
        { formation: true },
        "On 17 July, Talbot came near Castillon with his vanguard and defeated a small detachment of French archers at a priory. He then saw a cloud of dust and thought the French were retreating. It was in fact the camp followers, such as carters and hangers-on, leaving the camp before the fight.",
        "Talbot pressed on. On seeing the camp, he understood the situation, but ordered the attack to continue: stopping would have meant backing down before the enemy, and he did not do that. His men reached the ditch under the fire of the cannon. Reinforcements came up piecemeal, in a trickle, as Talbot brought them from Libourne, and each group was shredded as it approached. According to the accounts, a single cannon shot could kill as many as six men.",
        "The fight lasted more than an hour. Then the Breton cavalry, about a thousand men, led by Duke Peter II of Brittany, struck the English right flank. The line fell apart. Talbot, the only Englishman still on horseback, had his horse hit by a cannon shot and was pinned under it. A French archer killed him with an axe, according to one version of his death, which is disputed. His son Lisle also died.",
        "The survivors ran for Castillon. The Earl of Kendal was among those who took refuge in the castle. The next day, Bureau bombarded the fortress, and the garrison surrendered on 19 July."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The French lost about 100 men, and the English about 4,000, killed or captured. These are modern estimates; the chronicles of the time vary. English rule in Guyenne collapsed. Bordeaux, the city that had called Talbot, surrendered on 19 October 1453.",
        { h: "Why it matters" },
        "It was the first major European battle won mainly with field artillery. At the time, nobody said that the [[Hundred Years' War|guerra dos cem anos]] was over: there was no treaty, and the two kings went on calling themselves kings of France for a long time. But England never again fought for Guyenne, and on the Continent only Calais stayed English, until 1558.",
        "Some link the end of the war to the crisis that followed: King Henry VI, who lost his reason at the end of 1453, and the long English civil war, the [[Wars of the Roses|guerra das rosas]], which began a few years later. A direct link is only speculation.",
        { h: "Curiosities and controversies" },
        { note: "Talbot's death: the horse killed by a shot and the archer's axe are the most repeated version, but the sources differ on how he fell." },
        { note: "The numbers: the 300 guns and the 4,000 English killed or captured come from estimates that are not firm. Keep the idea that the French artillery did most of the work." },
        { note: "The end of the war is a date from history books. People living in 1453 did not know that the 116-year war was over." }
      ]}
    ]
  },

  toulon: {
    war: "The French Revolutionary Wars, War of the First Coalition (1792–1797)",
    hook: "An unknown artillery officer pointed his guns at a fort on a hill, and the enemy fleet had to flee.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1793, revolutionary France was at war with almost all of Europe, the so-called [[First Coalition|primeira coalizão]]. Inside the country, the Revolution also had enemies: in the summer, several southern cities rose against the [[National Convention|convenção nacional]] in Paris. Toulon, France's greatest naval base on the Mediterranean, home to roughly a third of the country's ships of the line, joined the revolt. Its leaders were [[royalists|realistas]], and they opened the gates to the Republic's enemies.",
        "The British admiral Samuel Hood entered the bay at the end of August, with British and Spanish ships, and troops from Naples and Sardinia joined them. The Allies occupied the forts at the entrance and the hills around. The royalists proclaimed the son of Louis XVI, a prisoner in Paris, as Louis XVII. Losing the port and the fleet meant losing the Mediterranean.",
        { h: "The road to victory" },
        { timeline: [
          ["late Aug 1793", "The city and the French fleet are handed over to the British and Spanish."],
          ["September", "The Republican army besieges Toulon. Bonaparte takes over the artillery."],
          ["1 Oct", "An attack on the fort on Mont Faron fails."],
          ["15 Nov", "The attack on Fort Mulgrave, ordered by Doppet, fails."],
          ["17 Nov", "Dugommier takes command of the siege."],
          ["30 Nov", "The Allies make a sortie, take a battery and lose General O'Hara, who is captured."],
          ["16–17 Dec", "The assault on 'Little Gibraltar'."],
          ["18–19 Dec", "The Allies abandon the city by sea."]
        ]},
        "The siege had three commanders before it ended well. The first, the painter-soldier Carteaux, had no plan. The second, the physician Doppet, lost the November attack and was replaced within days. The third, Dugommier, was a real old soldier, and with him the siege turned."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Napoleon Bonaparte, 24 years old" },
        "A Corsican from a modest family, he was an unknown artillery officer. It was the [[representative on mission|representante em missão]] Saliceti, also a Corsican, who gave him command of the siege artillery in September. In October he rose to battalion chief, and sources differ on the exact date. He was a [[Jacobin|jacobinos]] by conviction and had written a pamphlet in favour of the Republic, which impressed Saliceti. What Bonaparte did well was to think of the siege as an artillery problem: where to put the guns to make the bay useless for ships. The idea of taking the forts that command the passage between the two [[roadsteads|rada]] was his.",
        { h: "Dugommier" },
        "General Jacques Dugommier, a veteran over 50, arrived on 17 November, listened to Bonaparte's plan and backed it. He gathered the scattered soldiers, organised the attack and commanded the final offensive.",
        { h: "Hood and the Allies" },
        "Admiral Samuel Hood, in Toulon, and the Spaniard Juan de Lángara, with his fleet, had under their orders the soldiers of the British general Charles O'Hara and of other commanders. They were troops of several countries, not always well coordinated, and the fort they built on the Caire hill, Fort Mulgrave, got the nickname 'Little Gibraltar'."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to Wikipedia, the Allies had about 22,000 men, including British, Spanish, Neapolitans, Sardinians and some 1,500 French royalists, and dozens of ships. The Republicans had about 32,000, a figure that different sources cannot reconcile. Bonaparte went on to gather, according to French Wikipedia, about fifty [[batteries|bateria]] of six guns.",
        { h: "The terrain" },
        "Toulon is a port closed in by hills. Mont Faron overlooks the city from the north. To the west, a peninsula with two forts, L'Éguillette and Balaguier, sits on the narrow passage between the small and the large [[roadstead|rada]]. On the Caire hill, above those forts, the Allies built Fort Mulgrave, a large earth [[redoubt|reduto]], backed by three smaller redoubts. Whoever had guns there could fire on the anchored ships.",
        { h: "The plan and the attack" },
        { formation: true },
        "Bonaparte argued that the attack should go straight at Little Gibraltar. Once the fort was taken, the Republican guns would reach the ships and the forts of L'Éguillette and Balaguier, and the fleet would have to leave. First he built batteries, with names like 'of the Mountain', 'of the Sans-Culottes' and 'of the Convention'. In November and December, Dugommier added others, among them 'of the Jacobins' and 'of the Men Without Fear'.",
        "On the night of 16 to 17 December, after a heavy bombardment, the columns attacked Fort Mulgrave. The fight was hand to hand and lasted all night. Bonaparte was wounded in the thigh by a [[spontoon|espontão]] wielded by a British sergeant. By dawn, the fort was taken.",
        "In the same attack, General La Poype took Mont Faron and other positions to the east. The Republicans set up guns against L'Éguillette and Balaguier, and the Allies abandoned those forts without a fight. On 18 December the Allies decided to leave.",
        { h: "The flight and the flames" },
        "Thousands of soldiers and civilians had to be evacuated, and whatever could not be taken had to be burned. The British commodore Sidney Smith volunteered to set fire to the French ships and the arsenal. Two ships loaded with powder exploded without warning as Smith's boats passed, the fire grew more violent than planned, and not everything was destroyed. According to the lists in French Wikipedia, the British burned eight ships of the line completely, along with some frigates, and carried off four ships. The French recovered about fourteen, many of them damaged. The British took in about 15,000 people of Toulon, who fled in fear of reprisals. Elphinstone's squadron took off all the Allied soldiers without losing a man."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Republicans entered Toulon on 19 December. Losses on both sides are unclear: Wikipedia gives about 4,600 men for the Allies (killed, wounded and captured) and about 1,700 to 2,000 killed or wounded for the Republicans.",
        "Then came revenge. The representatives Barras and Fréron led the repression. According to the sources, between 700 and 800 people were shot on the Champ de Mars in the following weeks. The Convention renamed the city 'Port-la-Montagne'. The population fell to about 7,000 inhabitants.",
        { h: "Why it matters" },
        "France recovered its greatest Mediterranean port, and the British threat in the south shrank. For Bonaparte, the siege was the springboard: he was promoted to brigadier general in December (the exact date, 19 or 22, is disputed) and took command of the artillery of the Army of Italy. He was not in Toulon when the executions began.",
        "Toulon also showed the method he would repeat for two decades: see where the decisive point is, concentrate fire there, and let the rest fall.",
        { h: "Curiosities and controversies" },
        { note: "Who captured General O'Hara in the sortie of 30 November? The sources do not agree: some accounts name Bonaparte, others another officer. It is one of the many details that grew after he became famous." },
        { note: "The date of the assault: some sources put it on the night of 16 to 17 December, others say 17 December. The text follows the first." },
        { note: "Bonaparte's role: he was decisive in the artillery, but the plan of attack was discussed with Dugommier and other officers. Later legend exaggerated his part." }
      ]}
    ]
  },

  barcelona: {
    war: "The War of the Spanish Succession (1701–1714)",
    hook: "Europe made peace and left one city on its own. It held out for more than a year.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1700, the king of Spain, Charles II, died without children. Two European houses claimed the throne: the [[Bourbons|bórbons]] of France, with Philip V, and the [[Habsburgs|habsburgos]] of Austria, with Archduke Charles. This was the [[War of the Spanish Succession|guerra da sucessão espanhola]], which involved all of Europe. Catalonia at first accepted Philip, but turned away from him, because the new government ignored Catalan laws and privileges and persecuted those who defended them. In 1705, Barcelona sided with Archduke Charles.",
        "In 1711 the archduke inherited the Empire and left Spain to become emperor. The European powers, tired of war, made peace. The [[Treaty of Utrecht|tratado de utrecht]] recognised Philip V as king, and Catalonia was left out. In 1713 the Allied troops left. In July, the [[Junta de Braços|junta de braços]] decided to carry on the fight alone.",
        { h: "The road to the assault" },
        { timeline: [
          ["25 Jul 1713", "Bourbon troops reach the walls of Barcelona and besiege the city."],
          ["6 Jul 1714", "The Duke of Berwick replaces the Duke of Popoli in command of the siege."],
          ["12–13 Jul", "The first approach trenches are opened."],
          ["12–14 Aug", "Two assaults through the breaches in the northeast are beaten back."],
          ["early Sep", "Berwick proposes surrender. The city refuses."],
          ["11 Sep, at dawn", "General assault."],
          ["12–13 Sep", "The city decides to capitulate and is occupied."]
        ]},
        "At first the siege was loose: Popoli did not have enough artillery and did not want a bloody assault, and the Catalans managed to send and receive some supplies. In 1714, with the fighting on other fronts over, France sent about 20,000 soldiers, heavy guns and the Duke of Berwick to the siege."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Rafael Casanova" },
        "A lawyer, he became, on 30 November 1713, [[conseller en cap]], the city's first magistrate, and commander of the [[Coronela|coronela]]. He was not a career soldier but a civilian leader who agreed to go to the front when the city needed it. On 11 September he was wounded in the thigh. He survived and died in 1743.",
        { h: "Antoni de Villarroel" },
        "General of the Catalan army, a career soldier who had fought in the war for years. In the middle of the crisis he even resigned, but took command again for the assault of 11 September. He was wounded that day, imprisoned afterwards and died in 1726, in A Coruña.",
        { h: "James Fitz-James, Duke of Berwick" },
        "The illegitimate son of the English king James II, he served France as a marshal. He knew siege warfare well: he applied Vauban's method and brought the siege to its conclusion."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Bourbons had about 40,000 men, according to Wikipedia, but sources differ: the figures run from 39,000 to over 80,000, depending on whether you count those occupying the rest of Catalonia. The defenders numbered about 10,000: regular troops, the [[Coronela|coronela]], with 4,700 militiamen, and volunteers from other territories of the Crown of Aragon.",
        { h: "The terrain" },
        "The wall of Barcelona had several [[bastions|bastião]]. The weak points lay in the northeast, between the bastions of Llevant, Santa Clara and Portal Nou, where flat ground allowed trenches to be dug. Villarroel built an inner line of defence behind the wall. On the sea side, the French fleet closed the port.",
        { note: "The diagram is a sketch, not to scale, of the positions." },
        { h: "The assault" },
        { formation: true },
        "With Berwick in command, the French dug [[parallels|paralela]] and [[saps|sapa]] closer and closer to the wall. On 12 and 13 August, the artillery opened two [[breaches|brecha na muralha]] between Portal Nou and Santa Clara, and the attackers tried to get in. The Catalans beat them back with heavy losses (one account gives 196 defenders and 900 attackers dead) and, on the 14th, also won the fight for the Santa Clara bastion.",
        "Berwick kept on. In early September he proposed surrender, and the city replied that it would accept only if its laws were kept. On 11 September, at dawn, the artillery concentrated between Llevant and Portal Nou opened several breaches, seven according to one source, and the French and Spanish columns entered. Casanova went to the Portal Nou bastion carrying the flag of Saint Eulalia, the city's patron saint, and the representatives of the Diputació carried that of Saint George. According to tradition, the flag of Saint Eulalia was raised only in a moment of extreme danger.",
        "Berwick issued an ultimatum at 6 in the morning, and the fighting went on through the streets until the afternoon. Casanova was wounded around noon. When the front stabilised, around 2 p.m., the Catalan leaders met. At 3 p.m., the city government still called on the citizens to fight, saying that if not enough of them came it would ask for capitulation. Villarroel was charged with negotiating, and Berwick agreed to a truce until the next day.",
        { h: "The surrender" },
        "On 12 September, the city government decided to hand the city over. The troops entered on 13 September. Berwick promised the inhabitants their lives and property, but, according to Catalan historians, the guarantees were not honoured: there were arrests and reprisals. The [[capitulation|capitulação]] of Cardona castle, in September, closed the war in Catalonia."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Losses are uncertain and the sources differ widely. Catalan Wikipedia cites about 6,850 dead or wounded on the Catalan side and about 15,000 on the Bourbon side, and warns that the Bourbon records are contradictory. The war still went on in Majorca, which fell on 11 July 1715.",
        { h: "Why it matters" },
        "In 1716, the [[Nueva Planta|nova planta]] decrees abolished Catalonia's own institutions and laws, and Catalan lost its use in official acts. The Ribera district, next to the wall, was demolished, and in its place a citadel, the Ciutadella, was raised to watch over the city. The ruins of Ribera houses now lie under the Born Market. The dead of the defence were buried where the Fossar de les Moreres is today.",
        "11 September is now the Diada, the National Day of Catalonia. It is also the date on which Catalan memory concentrates, even though it was a defeat.",
        { h: "Curiosities and controversies" },
        { note: "Why did they fight? The defenders served Archduke Charles, who called himself king of Spain, and historians debate whether they were defending a separate Catalonia or a different model of Spain. Today's political memory tends to simplify the debate." },
        { note: "The tradition of the flag of Saint Eulalia, raised only in extreme danger, is passed down as tradition, and the details of who carried it and where vary between accounts." },
        { note: "Admiral Ducasse is said to have refused to bombard the beaches without a direct order from the king, but the episode is reported without independent confirmation." }
      ]}
    ]
  },

  girona: {
    war: "The Peninsular War (1808–1814)",
    hook: "A city with medieval walls and a governor who threatened with death anyone who spoke of surrender held a French army for seven months.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1808, Napoleon removed the Spanish royal family from the throne and put his brother, Joseph Bonaparte, in its place. Spain rose up, and the [[Peninsular War|guerra peninsular]], which the Spanish call the War of Independence, began. In Catalonia, the city of Girona lay on the main road between France and Barcelona. Whoever held it controlled the supply of the French armies in the region.",
        "Girona had already withstood two French sieges in 1808. The one of 1809 is the third, and the longest. The French came back with a large army and the determination to end the problem.",
        { h: "The road to the siege" },
        { timeline: [
          ["1 Feb 1809", "Mariano Álvarez de Castro takes over as military governor of Girona."],
          ["1 Apr", "Álvarez issues an edict ordering the immediate execution of anyone who speaks of surrender."],
          ["May–Jun", "The French besiege the city (the exact start date varies between sources)."],
          ["13–14 Jun", "The heavy bombardment begins."],
          ["7 Jul", "Verdier attacks the fort of Montjuïc and is beaten back."],
          ["11 Aug", "The defenders abandon Montjuïc and blow up the castle."],
          ["19 Sep", "The great French assault on the breaches is beaten back."],
          ["12 Oct", "Marshal Augereau takes over the French command."],
          ["10–12 Dec", "Girona capitulates."]
        ]},
        "The city had about 13,000 to 14,000 inhabitants. The garrison was about 5,700 soldiers and militia, plus 1,100 armed civilians and 3,600 reinforcements, according to English Wikipedia, which also gives a higher figure, about 9,000, elsewhere in the text. Among the defenders was the Ultonia regiment, of Irish origin."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Mariano Álvarez de Castro" },
        "A veteran officer, in 1809 he was military governor of Girona. He imposed harsh discipline: the edict of 1 April ordered the execution of anyone who spoke of giving up the city. He organised civilians, clergy and women for the defence, and gave the city an air of resistance to the end. When he fell ill and became delirious, he handed command to Brigadier Juan Bolívar.",
        { h: "The French generals" },
        "The changes of command were one of the problems of the siege. Reille began, then Verdier took over. The [[covering army|exército de cobertura]], of about 15,000 men, belonged to General Saint-Cyr, who, angry at having been replaced, left at the end of September. For a few days the troops were without an overall commander, until Augereau took over on 12 October.",
        { h: "The Company of Saint Barbara" },
        "The women of the city organised themselves into this company: they tended the wounded, carried ammunition to the posts and took part in the defence. It became one of the symbols of the siege."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The French gathered about 17,000 to 18,000 men for the siege (Spanish Wikipedia says 18,000, its infobox, 16,000) and a covering army of about 15,000. In seven months, they fired about 20,000 bombs and grenades and 80,000 cannonballs at the city and the fort of Montjuïc, according to one account; others give smaller numbers.",
        { h: "The terrain" },
        "The walls were old and thin, medieval in good part. The castle of Montjuïc, on a hill to the south, had cannon in sufficient number, but fewer than 300 men who knew how to use them. The city's works also included the forts of La Merced, Santa Maria, the Capuchins and the Calvary.",
        { h: "How it unfolded" },
        "The bombardment began on the night of 13 to 14 June. On 12 June, Álvarez had already refused an offer of a truce. On 7 July, Verdier attacked the fort of Montjuïc with 2,500 men and lost more than a thousand, to musket fire. After weeks of bombardment, the garrison abandoned the fort on 11 August and blew up the castle.",
        "With Montjuïc lost, the French concentrated their attack on the north side of the wall. On 19 September they launched the great assault. The fighting in the [[breaches|brecha na muralha]] was hand to hand and bloody, and the French fell back. The figures for that day, according to Wikipedia, were 624 French killed and wounded against 251 Spanish. The date is remembered in Girona as the 'Great Day', and was painted by Ramón Martí Alsina in 1864.",
        "After 19 September, hunger and disease weighed more and more. Food and medicine ran short. Álvarez, ill, lost his lucidity. In December, Brigadier Bolívar took over command and the city surrendered."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The French lost about 14,000 men, more than half to disease. On the Spanish side, about 10,000 are estimated dead among soldiers and civilians, almost all from hunger and disease. Of the roughly 14,000 inhabitants before, only about 8,000 survived. About 3,000 starving soldiers surrendered. The figures vary widely between sources.",
        "Álvarez de Castro was imprisoned and taken to France, then to the castle of Sant Ferran, in Figueres, to be tried for treason. He was found dead in his cell in January 1810, soon after arriving. The cause of death has never been established.",
        { h: "Why it matters" },
        "The siege held a large French army for an entire campaigning season in Catalonia. Álvarez became a national hero. The city was left almost uninhabitable, and the historian Charles Oman, who wrote the history of the war, described a scene of ruin and disease.",
        { h: "Curiosities and controversies" },
        { note: "When did the siege begin? English and Spanish Wikipedia say 6 May 1809, but the heavy bombardment only began on 13–14 June. Other sources give June." },
        { note: "The date of the surrender appears as 10, 11 or 12 December. The 12th is the most used." },
        { note: "There is no diagram for Girona. The sources we consulted describe the siege well, but not the positions and movements of each unit on the day of the great assault." }
      ]}
    ]
  },

  ebro: {
    war: "The Spanish Civil War (1936–1939)",
    hook: "The Republic crossed a river by surprise and then spent four months unable to leave the far bank.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In July 1936, part of the Spanish army rose against the government of the [[Spanish Republic|república espanhola]]. The [[Spanish Civil War|guerra civil espanhola]] began. The rebels, the [[Nationalists|nacionalistas]], had General Francisco Franco as their chief and received weapons and aircraft from Germany and Italy. The Republic was helped by the Soviet Union and by volunteers from many countries, the [[International Brigades|brigadas internacionais]], but the Western powers stayed out, in the policy called non-intervention.",
        "By 1938 the Republic was in bad shape. It had lost the north of the country and suffered a defeat at Teruel. In April, Franco's troops reached the Mediterranean at Vinaròs and split Republican territory in two: Catalonia on one side, Valencia and the centre on the other. Franco then advanced on Valencia.",
        { h: "The road to the river" },
        { timeline: [
          ["Mar 1938", "France reopens the border, and war material reaches the Republic."],
          ["Apr 1938", "Franco reaches the sea at Vinaròs and divides the Republic."],
          ["15 May", "The Army of the Ebro is formed, under Lieutenant Colonel Juan Modesto."],
          ["24–25 Jul", "At midnight, the Republican army begins to cross the Ebro."],
          ["1 Aug", "The XV International Brigade attacks Hill 481, near Gandesa, and is beaten back."],
          ["Aug–Nov", "The Nationalists counterattack, one range at a time."],
          ["16 Nov", "The last Republicans return to the north bank."]
        ]},
        "The plan was General Vicente Rojo's and was approved by Prime Minister Juan Negrín. Cross the Ebro by surprise, take a [[bridgehead|cabeça de ponte]] and force Franco to send troops there, relieving Valencia. There was also a political aim: to show the powers that the Republic was still able to fight, and to bet that a longer war would bring help from outside."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Vicente Rojo and Juan Modesto" },
        "Rojo, chief of the Republican general staff, was a career officer, studious and methodical, and he designed the operation. Modesto, a communist, had started out as a worker and rose through the ranks in the war itself. He commanded the Army of the Ebro. Under him, Manuel Tagüeña (XV Corps) and Enrique Líster (V Corps) led the attacks.",
        { h: "Francisco Franco" },
        "Franco directed the campaign personally. He rejected the idea of letting the Republicans advance and then encircling them. He chose [[attrition|guerra de atrito]]: concentrating aircraft and artillery on small areas, destroying the bridges, and sending in the infantry only when the ground had been flattened. It was the slowest approach and the most costly in lives, but he could afford more than his enemy.",
        { h: "Yagüe and García Valiño" },
        "General Juan Yagüe commanded the Moroccan Corps, with the divisions that bore the brunt of the fighting. General Rafael García Valiño, of the Maestrazgo Corps, arrived as reinforcement."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are uncertain and vary by source. The Republic had about 80,000 to 90,000 men at the crossing and reached about 100,000 to 130,000 at the end, according to Spanish Wikipedia, with about 250 guns, 120 armoured vehicles and a little over 200 aircraft. The Nationalists started with about 98,000 and reached about 185,000, with about 550 guns and more than 300 aircraft, among them those of the German [[Condor Legion|legião condor]] and the Italian Legionary Aviation.",
        { h: "The terrain" },
        "The battle took place in the Terra Alta, in the bend of the Ebro, between Mequinenza and Amposta. The river is wide and deep. On the other side lay a region of dry hills and ranges: Pàndols, Cavalls, Gaeta, and, at the centre, the town of Gandesa, a hub of roads. In summer, the heat passed 35 degrees and there was almost no shade or water.",
        { note: "The diagram is a sketch, not to scale. The river and the ranges are simplified." },
        { h: "The crossing" },
        { formation: true },
        "The crossing began at 12:15 a.m. on 25 July, on a moonless night. Commandos killed sentries and fixed cables for the boats. About ninety boats of ten men each, plus footbridges and three [[pontoon|pontão]] bridges, carried the infantry. The surprise was almost total: on the first day alone, about 4,000 men of the Nationalist 50th Division were taken prisoner. Tagüeña crossed between Mequinenza and Ascó, and Líster at sixteen points between Benissanet and Amposta. By 26 July, the Republicans held about 800 km² and were on the outskirts of Gandesa. A secondary attack, near Amposta, failed.",
        "That was when the battle turned. Franco sent eight divisions and hundreds of aircraft. The Nationalists opened the dams at Tremp and Camarasa, which made the river rise and swept the bridges away. The Republican engineers rebuilt them, and the Condor Legion bombed them every day. Only about 22 T-26 tanks and a few guns managed to cross. The infantry reached Gandesa on foot, exhausted, without guns and without tanks. On 1 August, the XV International Brigade attacked Hill 481, in front of Gandesa, and took heavy casualties. On the 2nd, the offensive stopped, and the Republicans began to dig trenches.",
        "From then on it was a battle of wearing down. From 11 to 14 August, the Nationalists attacked the Pàndols range, defended by Líster. They took Santa Magdalena, but not the range. On 19 August, Yagüe attacked Mount Gaeta. Between 31 August and 4 September, with eight divisions, about 300 guns, 500 aircraft and 100 tanks, they attacked the Cavalls range, and Corbera fell on 4 September. Modesto's order was: not a metre of ground to the enemy.",
        "On 21 September, Negrín announced at the League of Nations the unilateral withdrawal of the International Brigades. In October, the Nationalists took Lavall and Hill 666. On 30 October, the Cavalls range fell, in one day, with about a thousand prisoners. On 2 November it was Pàndols, and on 3 November they reached the Ebro. Móra la Nova fell on 7 November. On 16 November, the last men of the 35th Division crossed back over the river, at Flix."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Losses are hotly disputed. By the figures cited from Preston, the Republicans had about 7,150 dead, 20,000 wounded and 19,563 captured. By the figures of Thomas and Jackson, the Nationalists had between 5,000 and 6,500 dead and about 30,000 wounded. Estimates of the combined losses of both sides run from 50,000–60,000 to 110,000. The Republic lost between 130 and 150 aircraft, according to estimates.",
        "The Republican army ceased to exist as an effective force. The Nationalists also lost experienced officers and equipment. On 23 December Franco launched the Catalonia offensive, and Barcelona fell on 26 January 1939. The war ended on 1 April.",
        { h: "Why it matters" },
        "It was the largest and longest battle of the civil war, and the largest in men and matériel ever fought on Spanish soil. Historians disagree about its meaning. Antony Beevor sees the offensive as a decision driven partly by Communist propaganda, which destroyed the Republican army for little gain. Paul Preston and Helen Graham say it halted the attack on Valencia, caused heavy losses and prolonged the war by months, but that the Munich Agreement at the end of September ended hope of Western aid and turned a political gain into a military defeat.",
        { h: "Curiosities and controversies" },
        { note: "The [[quinta del biberón|quinta do biberão]]: among the soldiers were boys of 17 and 18, called up in a hurry in 1938. The nickname means baby's bottle." },
        { note: "The dams: the story that the Nationalists opened the sluices at Tremp and Camarasa to flood the bridges is repeated in several sources, but the link with an engineer who supposedly revealed the information has no independent confirmation." },
        { note: "The song 'Ay Carmela', of older origin, became tied to the Battle of the Ebro in Republican memory." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  castillon: {
    terrain: [
      { t: "sea", x: -8, y: 60, w: 116, h: 14, l: "Dordogne River" },
      { t: "sea", x: 88, y: 8, w: 4, h: 54, l: "Lidoire" },
      { t: "note", x: 12, y: 54, l: "Castillon" },
      { t: "note", x: 50, y: 6, l: "Sketch: the camp's location is disputed" }
    ],
    units: [
      { id: "fCamp", s: "a", k: "camp", w: 28, h: 14, l: "Bureau's camp" },
      { id: "fGuns", s: "a", k: "art", w: 18, h: 3, l: "Cannon (up to ≈ 300, uncertain)" },
      { id: "fPri", s: "a", k: "inf", w: 8, h: 3, l: "Archers at the priory" },
      { id: "fBret", s: "a", k: "cav", w: 12, h: 4, l: "Breton cavalry" },
      { id: "eVan", s: "b", k: "inf", w: 14, h: 4, l: "Talbot and the vanguard" },
      { id: "eRef", s: "b", k: "inf", w: 12, h: 3, l: "Reinforcements (Lisle)" }
    ],
    steps: [
      { t: "Early July 1453. The French besiege Castillon. Jean Bureau sets up a camp with ditch, bank and stakes, and puts the cannon inside. Talbot is far away, in Bordeaux.",
        p: { fCamp: [66, 34], fGuns: [66, 31], fPri: [32, 40], fBret: [78, 52], eVan: [6, 46], eRef: [6, 54] } },
      { t: "On 16 July Talbot leaves Bordeaux in haste with the men he has at hand. On the morning of the 17th, he comes near Castillon and defeats the French archers at the priory.",
        p: { eVan: [26, 40], fPri: [32, 40] }, x: ["fPri"] },
      { t: "Talbot sees dust and thinks the French are retreating. It is the camp followers leaving the camp. He advances without waiting for the rest of his troops.",
        p: { eVan: [42, 38] } },
      { t: "On seeing the camp, Talbot does not turn back. The English reach the ditch under cannon fire, shot at from the side along the wavy bank.",
        p: { eVan: [50, 36], fGuns: [64, 31] } },
      { t: "Reinforcements arrive piecemeal, in a trickle, and each group is shredded by the artillery as it approaches. The fight lasts more than an hour.",
        p: { eRef: [34, 40], eVan: [50, 37] } },
      { t: "The Breton cavalry, about a thousand men, strikes the English right flank. The line falls apart.",
        p: { fBret: [52, 48, -30], eVan: [50, 38], eRef: [38, 40] } },
      { t: "Talbot's horse is hit by a cannon shot, and he dies under the French attack. His son Lisle also dies. It is the end of English resistance on the field.",
        p: { eVan: [46, 38], eRef: [38, 42] }, x: ["eVan", "eRef"] },
      { t: "The survivors run for Castillon. Bureau bombards the castle the next day, and the garrison surrenders on 19 July.",
        p: { fBret: [30, 50, -60], fCamp: [66, 34] } }
    ]
  },

  toulon: {
    terrain: [
      { t: "sea", x: 36, y: 46, w: 72, h: 28, l: "Large roadstead" },
      { t: "sea", x: 40, y: 34, w: 24, h: 10, l: "Small roadstead" },
      { t: "hill", x: 24, y: 40, rx: 14, ry: 14, l: "Caire hill" },
      { t: "hill", x: 60, y: 10, rx: 20, ry: 7, l: "Mont Faron" },
      { t: "note", x: 50, y: 28, l: "Toulon" }
    ],
    units: [
      { id: "rW", s: "a", k: "inf", w: 16, h: 5, l: "Western Division (Dugommier)" },
      { id: "rArt", s: "a", k: "art", w: 12, h: 4, l: "Bonaparte's batteries" },
      { id: "rE", s: "a", k: "inf", w: 14, h: 5, l: "Eastern Division (La Poype)" },
      { id: "aMul", s: "b", k: "camp", w: 12, h: 8, l: "Fort Mulgrave" },
      { id: "aBal", s: "b", k: "camp", w: 10, h: 6, l: "L'Éguillette and Balaguier" },
      { id: "aFar", s: "b", k: "camp", w: 10, h: 5, l: "Faron fort" },
      { id: "aFleet", s: "b", k: "ship", w: 14, h: 4, l: "Fleet of Hood and Lángara" }
    ],
    steps: [
      { t: "September 1793. The Allies hold Toulon, the forts at the entrance and Fort Mulgrave, on the Caire hill. The fleet lies in the roadstead. The Republicans besiege from west and east.",
        p: { rW: [8, 28], rArt: [10, 40], rE: [78, 12], aMul: [24, 40], aBal: [36, 50], aFar: [60, 12], aFleet: [60, 58] } },
      { t: "Bonaparte, in command of the artillery, gathers batteries around the Caire hill. The idea is to reach the ships with the guns.",
        p: { rArt: [14, 42] } },
      { t: "The early attacks fail: on Faron (1 October) and on Fort Mulgrave (15 November).",
        p: { rE: [72, 14], rW: [10, 32] } },
      { t: "Dugommier takes over on 17 November, backs the plan and adds batteries. On 30 November, the Allies make a sortie and take a battery, but are thrown back, and General O'Hara is captured.",
        p: { rArt: [16, 42], rW: [12, 34] } },
      { t: "On 16 to 17 December, after a heavy bombardment, the columns attack Fort Mulgrave. The fighting is hand to hand, all night. Bonaparte is wounded in the thigh.",
        p: { rW: [20, 38], rArt: [18, 42] } },
      { t: "At dawn, Fort Mulgrave is taken. In the east, La Poype takes Mont Faron.",
        p: { rW: [24, 40], rE: [62, 14] }, x: ["aMul", "aFar"] },
      { t: "With guns on the hill, the Republicans threaten the roadstead. The Allies abandon L'Éguillette and Balaguier without a fight.",
        p: { rArt: [30, 46] }, x: ["aBal"] },
      { t: "On 18 December the Allies decide to leave. They burn part of the fleet and the arsenal and evacuate. The Republicans enter Toulon on the 19th.",
        p: { aFleet: [92, 66], rW: [44, 32] } }
    ]
  },

  barcelona: {
    terrain: [
      { t: "sea", x: 70, y: 40, w: 38, h: 34, l: "Sea" },
      { t: "sea", x: -8, y: 62, w: 80, h: 12, l: "Sea" },
      { t: "note", x: 34, y: 48, l: "Barcelona" },
      { t: "note", x: 46, y: 22, l: "Portal Nou" },
      { t: "note", x: 58, y: 28, l: "Santa Clara" },
      { t: "note", x: 68, y: 36, l: "Llevant" }
    ],
    units: [
      { id: "bTr", s: "a", k: "inf", w: 22, h: 5, l: "Berwick's trenches" },
      { id: "bArt", s: "a", k: "art", w: 12, h: 4, l: "Heavy French artillery" },
      { id: "bCol", s: "a", k: "inf", w: 14, h: 5, l: "Assault columns" },
      { id: "bFl", s: "a", k: "ship", w: 12, h: 4, l: "French fleet" },
      { id: "cWall", s: "b", k: "inf", w: 22, h: 5, l: "Defenders of the wall" },
      { id: "cInn", s: "b", k: "inf", w: 16, h: 4, l: "Inner line (Villarroel)" },
      { id: "cCor", s: "b", k: "inf", w: 12, h: 4, l: "Coronela (Casanova)" }
    ],
    steps: [
      { t: "Summer 1714. Berwick besieges Barcelona by land, from the north and northeast. The French fleet closes the port. The weak point of the wall lies between Santa Clara and Portal Nou.",
        p: { bTr: [48, 6], bArt: [30, 8], bCol: [66, 8], bFl: [84, 66], cWall: [50, 30], cInn: [46, 42], cCor: [58, 38] } },
      { t: "On 12 and 13 July the first trenches are opened, in parallels ever closer to the wall.",
        p: { bTr: [48, 14], bArt: [32, 14] } },
      { t: "On 12 and 13 August the artillery opens two breaches between Portal Nou and Santa Clara. The attackers get in, but the Catalans throw them back, with high losses on both sides.",
        p: { bCol: [52, 22], cWall: [50, 30] } },
      { t: "The attackers fall back. On the 14th, the Catalans also win the fight for the Santa Clara bastion.",
        p: { bCol: [60, 10] } },
      { t: "On 11 September, at dawn, the artillery concentrated between Llevant and Portal Nou opens several breaches, seven according to one source.",
        p: { bArt: [58, 18], bTr: [54, 14] } },
      { t: "The columns attack the breaches. Casanova carries the flag of Saint Eulalia to the Portal Nou bastion, according to tradition.",
        p: { bCol: [54, 26], cCor: [52, 32], cWall: [50, 30] } },
      { t: "The fighting moves into the streets. Casanova and Villarroel are wounded. The inner line holds the front at around 2 p.m.",
        p: { bCol: [52, 34], cInn: [48, 40], cCor: [52, 38] } },
      { t: "At 3 p.m. the government still calls on the city to fight, but then agrees to negotiate. On 12 September it decides to hand over the city, which is occupied on the 13th.",
        p: { bCol: [44, 44], cWall: [40, 36], cCor: [40, 48] }, x: ["cWall", "cInn", "cCor"] }
    ]
  },

  ebro: {
    terrain: [
      { t: "sea", x: -8, y: 8, w: 72, h: 4, l: "Ebro River" },
      { t: "sea", x: 60, y: 8, w: 4, h: 50, l: "" },
      { t: "sea", x: 60, y: 54, w: 48, h: 4, l: "" },
      { t: "hill", x: 48, y: 34, rx: 7, ry: 8, l: "Pàndols range" },
      { t: "hill", x: 50, y: 48, rx: 7, ry: 6, l: "Cavalls range" },
      { t: "note", x: 24, y: 44, l: "Gandesa" },
      { t: "note", x: 38, y: 58, l: "Corbera" },
      { t: "note", x: 8, y: 5, l: "Mequinenza / Fayón" },
      { t: "note", x: 84, y: 48, l: "Amposta" },
      { t: "note", x: 24, y: 68, l: "Sketch, not to scale" }
    ],
    units: [
      { id: "n50", s: "a", k: "inf", w: 16, h: 4, l: "50th Division (Campos)" },
      { id: "nGan", s: "a", k: "inf", w: 10, h: 4, l: "Gandesa" },
      { id: "nYag", s: "a", k: "inf", w: 14, h: 5, l: "Moroccan Corps (Yagüe)" },
      { id: "nVal", s: "a", k: "inf", w: 14, h: 5, l: "Maestrazgo Corps (García Valiño)" },
      { id: "rTag", s: "b", k: "inf", w: 14, h: 5, l: "XV Corps (Tagüeña)" },
      { id: "rLis", s: "b", k: "inf", w: 14, h: 5, l: "V Corps (Líster)" },
      { id: "rInt", s: "b", k: "inf", w: 10, h: 4, l: "XV International Brigade" },
      { id: "rTan", s: "b", k: "tank", w: 8, h: 3, l: "22 T-26 tanks" }
    ],
    steps: [
      { t: "Night of 24 to 25 July 1938. The Army of the Ebro waits on the east and north bank. On the other side, the Nationalist 50th Division guards the river. Gandesa lies behind, at the hub of the roads.",
        p: { n50: [44, 26], nGan: [24, 40], nYag: [10, 62], nVal: [28, 66], rTag: [72, 10], rLis: [84, 40], rInt: [76, 24], rTan: [90, 28] } },
      { t: "At 12:15 a.m. on 25 July, the crossing, in about ninety boats, with no moon. Tagüeña crosses between Mequinenza and Ascó, and Líster at sixteen points, between Benissanet and Amposta.",
        p: { rTag: [56, 18], rLis: [58, 44], rInt: [58, 28] } },
      { t: "The surprise is almost total. On the first day alone, about 4,000 men of the 50th Division are taken prisoner.",
        p: { rTag: [50, 22], rLis: [54, 40], rInt: [50, 30], n50: [38, 30] }, x: ["n50"] },
      { t: "On 26 July, the Republicans hold about 800 km² and reach the outskirts of Gandesa, on foot and without guns. Only about 22 tanks manage to cross.",
        p: { rTag: [40, 28], rLis: [42, 42], rInt: [34, 34], rTan: [58, 36] } },
      { t: "Franco sends eight divisions, bombs the bridges day after day and opens the dams at Tremp and Camarasa. The flood sweeps away the footbridges, and Republican supplies almost stop.",
        p: { nYag: [14, 56], nVal: [30, 58], rTan: [62, 36] } },
      { t: "On 1 August, the XV International Brigade attacks Hill 481, in front of Gandesa, and is beaten back with heavy losses. On the 2nd, the Republican offensive stops.",
        p: { rInt: [28, 36], rTag: [36, 26], rLis: [38, 44] } },
      { t: "From 11 to 19 August, the Nationalists attack the Pàndols and Gaeta ranges, and take Santa Magdalena, but not the Pàndols range.",
        p: { nYag: [24, 52], nVal: [40, 56], rLis: [46, 38] } },
      { t: "From 31 August to 4 September, after a heavy barrage of guns and aircraft, the Nationalists attack Cavalls and take Corbera. Modesto orders not an inch to be given up.",
        p: { nYag: [34, 52], nVal: [44, 54], rLis: [48, 46] } },
      { t: "In October and November, the Nationalists take Lavall, Cavalls and Pàndols and reach the river. On 16 November, the last Republicans fall back to the north bank, at Flix.",
        p: { nYag: [48, 40], nVal: [50, 52], rTag: [66, 14], rLis: [70, 36], rInt: [66, 24], rTan: [74, 30] } }
    ]
  }
});
