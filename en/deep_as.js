// In-depth battles, batch as: pavia, arcole, rivoli, marengo, magenta (regional pack, part D: northern Italy).
// Checked against the English, French, Italian and Portuguese Wikipedia articles on the Battles of Pavia, Arcole, Rivoli,
// Marengo and Magenta, the article on the Convention of Alessandria, and the works those pages cite. Where sources
// disagree (force sizes, casualties, times, who did what) the text gives the range and says so.
// Artillery is drawn as infantry blocks with an "Artilharia" label (unit_kinds.js is not edited here).

Object.assign(GLOSSARY, {
  "suíços": "Mercenaries from Switzerland, famous in the early 16th century as pikemen who fought in tight blocks.",
  "bandas negras": "The name given to the mercenary infantry, German and Italian, in French service at Pavia.",
  "sortida": "A sudden sally by the defenders of a besieged city to attack the besiegers.",
  "tratado de madri": "The 1526 agreement by which Francis I, a prisoner, bought his freedom by promising to give up territory, Burgundy among it. Once released, he disowned it.",
  "dique": "An earth wall that holds back a river or a canal. In marshy ground it was often the only firm path, and an army that followed it marched in a thin column.",
  "demi-brigada": "An infantry unit of revolutionary France, formed by merging professional soldiers and volunteers. It did the job of the old regiment.",
  "ponte de barcas": "A bridge made of boats or pontoons tied side by side, with planks on top. Army engineers could put one up in a few hours.",
  "guias": "A small cavalry escort that went with Bonaparte and carried his orders in Italy, in 1796.",
  "desfiladeiro": "A narrow passage between mountains or along a river, where troops can only advance in a thin column. Whoever holds it controls the entrance.",
  "primeiro cônsul": "Napoleon Bonaparte's title from 1799 to 1804, when France was a republic ruled by three consuls. In practice, he alone decided.",
  "guarda consular": "An elite force that protected the consuls of France. At Marengo, it was used as the First Consul's reserve and sent into the fight.",
  "convenção de alessandria": "A ceasefire signed the day after Marengo. The Austrians handed over the fortresses of Piedmont, Liguria and Lombardy and withdrew to the Mincio river.",
  "naviglio grande": "A great navigable canal linking the Ticino river to Milan. In 1859, its bridges were the obligatory crossing between the two armies.",
  "zuavos": "French infantry created in Algeria, with a uniform inspired by Arab dress: baggy trousers, a short vest and a red fez. There were Zouaves in the Imperial Guard of Napoleon III."
});

Object.assign(DEEP, {
  pavia: {
    war: "The Italian War of 1521–1526 (Francis I of France against Charles V)",
    hook: "In a single morning, the king of France lost his army, his horse and his freedom.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Since 1494, France and Spain had been fighting over Italy, the richest region in Europe. The main prize was the duchy of Milan. In 1515, the young Francis I of France had taken Milan after beating the Swiss at Marignano. But in 1519 his rival, Charles of Habsburg, king of Spain, was elected Holy Roman Emperor, and France found itself surrounded by Charles's lands: Spain, the Low Countries, Germany and Naples.",
        "The war began again in 1521, and the French were driven out of Milan. In 1523, the Constable of Bourbon, one of the greatest nobles of France, quarreled with Francis and went over to the emperor. In October 1524, Francis crossed the Alps with a large army, retook Milan and went to besiege Pavia, where Antonio de Leyva held out with the imperial garrison.",
        { h: "Winter in front of Pavia" },
        { timeline: [
          ["1515", "Francis I beats the Swiss at Marignano and takes Milan."],
          ["1519", "Charles of Habsburg is elected emperor."],
          ["Oct. 1524", "Francis retakes Milan and besieges Pavia."],
          ["Before the battle", "The Duke of Albany leaves with part of the French army, heading for Naples. About 5,000 Swiss Grisons go home to defend their cantons."],
          ["Jan. 1525", "Georg von Frundsberg arrives with landsknechts. The imperial relief army comes together."],
          ["21 Feb. 1525", "The imperial council of war decides to attack."]
        ]},
        "The two armies spent the winter a few kilometers from each other. Francis camped most of his men in Mirabello Park, a former hunting preserve of the dukes of Milan, walled and full of woods, north of Pavia. From there, he stood between the besieged city and the army coming to relieve it. But money was running out on both sides, and whoever failed to pay the mercenary troops watched his army melt away."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Francis I, 30 years old" },
        "The king of France was a knight-king in the style of the 16th century: he liked to fight at the head of his nobles, and he wanted Milan at any price. With his army already divided (Albany on the road to Naples, the Grisons at home), he still decided to stay in front of Pavia.",
        { h: "The imperial leaders" },
        "Charles de Lannoy, viceroy of Naples, was the overall commander. The Marquis of Pescara, Fernando de Ávalos, led the Spaniards and was the firmest in favor of attacking: according to the traditional account, he said that here battle was the only way. Georg von Frundsberg led the German landsknechts, and Bourbon himself, the French noble who had gone over to the emperor, was in the imperial army. Alfonso de Ávalos, Marquis of Vasto, Pescara's cousin, commanded the arquebusiers who opened the attack. Antonio de Leyva, inside Pavia, had been holding out for months.",
        { h: "The French names" },
        "Among the nobles in Francis's army were La Palice, Bonnivet, La Trémoille, Anne de Montmorency and Richard de la Pole, the last Yorkist claimant to the English throne, who lived in exile at the French court. Most of them were killed or captured that morning."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The sources disagree. The most quoted figures give about 26,000 French, among them some 8,000 [[Swiss|suíços]], about 9,000 German and Italian mercenaries (the [[Black Bands|bandas negras]] and landsknechts in French service), some 6,000 French on foot and some 2,000 [[gendarmes|gendarmes]]. On the imperial side, there was a relief army of about 22,000 men, among them some 12,000 [[landsknechts|lansquenetes]], 5,000 Spaniards and 3,000 Italians, plus cavalry, and the garrison of Pavia, 6,000 to 9,000. There is also a gap that historians do not explain well: Francis came to Italy with more than 40,000 men, and months later he had only some 26,000.",
        { note: "Casualty figures also vary a great deal. The French lost between 8,000 and 15,000 men in dead, wounded and prisoners, and the imperials between 1,000 and 1,500, according to modern estimates." },
        { h: "The terrain" },
        "Mirabello Park was a walled rectangle, with woods, streams, farms and, in the middle, a castle. The French camped in it, and parts of the army (such as Montmorency's Swiss) manned the siege lines between the park and the city walls. Inside the park, the fight would be among trees and ditches, not in open country.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on the night of 23 to 24 February, the imperial army left its camp east of the park and marched north along the wall. The sources disagree about the cover. Some accounts say the imperial artillery bombarded the siege lines to distract the French, and others that the imperials set fire to their own tents to look as if they were retreating. Engineers opened breaches in the park wall, near San Genesio. Authors argue over whether it was the east wall or the north wall, and later accounts speak of three openings.",
        "Second, around 5 a.m., about 3,000 of Vasto's arquebusiers went in through the breaches and advanced to Mirabello Castle, which they took around 6:30. The imperial light cavalry spread across the park to cut off the French.",
        "Third, the French infantry reacted. The Swiss, under Robert de La Marck, took a Spanish battery, but ran into some 6,000 of Frundsberg's landsknechts. Around 7 a.m., there was an infantry battle near the breach. At the same time, Lannoy, Pescara's Spaniards and the imperial heavy cavalry advanced through the woods to the west, to get closer to Francis.",
        "Fourth, a French battery spotted Pescara's maneuver around 7:20. Francis, instead of waiting, led the gendarmes in a charge against Lannoy's cavalry, which was outnumbered, and around 7:40 scattered it.",
        "Fifth, and this is where the battle turned: the charge took the king away from his infantry and hid the French artillery, which could no longer fire without hitting its own horsemen. Pescara, who was left in command of the Spanish infantry, gathered his men at the edge of the wood and called for help.",
        "Sixth, Frundsberg shattered the Swiss who faced him. The French captains could not keep their men together, and the infantry began to flee. The Black Bands were surrounded and destroyed by Frundsberg's pikemen.",
        "Seventh, around 8 a.m., the imperial cavalry surrounded the gendarmes in the woods, and they were killed bit by bit. La Palice, Bonnivet, La Trémoille and Richard de la Pole died. The king's horse was killed under him. After a long fight, Francis was captured.",
        "Eighth, Leyva opened the gates of Pavia and made a [[sally|sortida]]: his men attacked from behind the roughly 3,000 Swiss of Montmorency who were guarding the siege lines, and scattered them. The surviving Swiss fled across the river, with heavy losses. The rearguard of the Duke of Alençon never fought. When he learned what had happened, he withdrew toward Milan. Around 9 a.m., it was all over.",
        { h: "Who took the king?" },
        "Several men fought over the honor. The list includes Lannoy, who is said to have knelt before Francis, the soldiers Alonso Pita da Veiga, Juan de Urbieta and Diego Dávila, a German count called Salm, the Italian Cesare Hercolani and two Frenchmen from Bourbon's entourage, who may have persuaded the king to surrender. A decree of Charles V from 1529 rewarded a group that included Pita da Veiga, not a single person."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "France lost its field army and a good part of its high nobility: Montmorency and Robert de La Marck were captured, and the other names mentioned above died. The Duke of Alençon went back to the Alps with what was left, and Albany lost most of his troops to attrition and desertion and returned to France without reaching Naples.",
        "Francis was taken to the tower of Pizzighettone, from where he wrote to his mother, Louise of Savoy. The famous line, 'all is lost, except honor,' is a summary. The letter says something like: of all things, only honor and life are left to me, and my life is safe. Then he was taken to Spain, passing through Genoa, and held in a tower in Madrid.",
        { h: "The Treaty of Madrid" },
        "In 1526, Francis bought his freedom with the [[Treaty of Madrid|tratado de madri]]. The sources differ on the exact list, but Burgundy was on it, and he also gave up claims in Italy and Flanders. His two eldest sons stayed in Spain as hostages. As soon as he crossed the border, the king declared the treaty void, arguing that it had been signed under duress. A new war began, the War of the League of Cognac.",
        { h: "Why it matters" },
        "Pavia left Charles V ahead in Italy and ended the idea that France could take Milan by force. The rivalry between Francis and Charles, however, went on, and the Italian Wars only ended in 1559.",
        { h: "Curiosities and controversies" },
        { note: "The site: Mirabello Park no longer exists. What remains are Mirabello Castle, Vernavola Park and the Repentita farmhouse, where Francis is said to have been captured." },
        { note: "The art: the victory became the subject of a set of seven Brussels tapestries, made from designs by Bernard van Orley and given to Charles V in 1531, and of a rock-crystal cameo by Giovanni Bernardi." },
        { note: "The numbers: to this day, historians argue about the size of the armies and the losses, because the sources disagree, and the numbers change with the author." }
      ]}
    ]
  },

  arcole: {
    war: "Bonaparte's Italian campaign (1796–1797)",
    hook: "Three days of fighting for a narrow bridge between marshes made a 27-year-old general a hero.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1796, revolutionary France was at war with almost all of Europe. Napoleon Bonaparte, at 26, was given command of the Army of Italy, poor and badly equipped, and in a few months pushed the Austrians out of Piedmont and Lombardy. Only one thing still held the Austrians in the region: Mantua, the fortress ringed by lakes and swamps, where Marshal Wurmser held out with a large garrison.",
        "Austria had already tried twice to relieve Mantua, and Bonaparte had beaten both attempts. The third, led by József Alvinczi, came down in November 1796 on two fronts. Paul Davidovich came from the Alps, down the Adige valley, and Alvinczi came from the east. Davidovich beat General Vaubois, and Alvinczi defeated the French at Bassano and at Caldiero.",
        { h: "The road to Arcole" },
        { timeline: [
          ["Early Nov. 1796", "Davidovich beats Vaubois in the north. Alvinczi comes down from the east."],
          ["6 and 12 Nov.", "Alvinczi defeats the French at Bassano and at Caldiero."],
          ["14 Nov., at night", "Bonaparte leaves Verona, crosses the Adige at Ronco and marches to strike Alvinczi's rear."],
          ["15 to 17 Nov.", "The three days of Arcole."]
        ]},
        "Bonaparte was at a disadvantage and knew it. Instead of waiting, he decided to risk a maneuver: cross the Adige at Ronco, to get around Alvinczi's left flank and strike his rear. It was ground of marshes, ditches and canals, where men could only move in narrow columns and where the Austrians, with more men, could not use all their strength."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Napoleon Bonaparte, 27 years old" },
        "He had won almost the entire campaign, but he had just lost at Caldiero, and he knew that a defeat here could end everything. His strategy was always the same: use speed to beat the enemy piece by piece, before it could join up. At Arcole, the plan failed on the first day, and he had to improvise for three days.",
        { h: "The generals" },
        "Pierre Augereau led the attack on the Arcole bridge, and André Masséna took care of the other end, against the Austrian reinforcements coming from Caldiero. Jean Lannes was wounded twice early on. General Vaubois, with some 8,000 to 10,500 men, stayed in the north to hold Davidovich.",
        { h: "József Alvinczi" },
        "The Austrian commander, over 60 years old, was an experienced soldier. His plan depended on two forces acting far from each other, and Bonaparte took advantage of that. Wurmser, inside Mantua, barely moved during the battle, and the reason is unknown."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "France had about 19,000 to 20,000 men in the field (not counting Vaubois's), and Austria about 23,000 to 24,000. The numbers change from one source to another, and historians do not always agree with each other.",
        { h: "The terrain" },
        "A low plain, cut by rivers (the Adige and the Alpone), canals and high [[dikes|dique]], surrounded by marshes. The only way to move was on top of the dikes, in single file, or over a few bridges. At Arcole, a bridge over the Alpone, next to the village, was the point the French army had to take, and the Austrians defending the village swept it with fire.",
        { h: "The three days" },
        { formation: true },
        "First, at dawn on 15 November, Andréossy's engineers had a [[pontoon bridge|ponte de barcas]] ready over the Adige at Ronco, and the divisions crossed. Bonaparte sent them along two dikes: Augereau along the Alpone dike, toward the Arcole bridge, and Masséna along the opposite side, toward the Caldiero road.",
        "Second, Augereau's column reached the bridge and was thrown back by heavy fire. Several French generals were wounded, Lannes among them. The successive attacks, in narrow columns, all ran into the same barrier.",
        "Third, here comes the scene that became legend. According to tradition, Augereau took a flag and ran ahead, but the soldiers did not follow him. Bonaparte took another and ran toward the bridge; an engraving of the scene shows him some 55 paces from it. The column was thrown back by flanking fire, grenadiers carried him to the rear, and he ended up in a muddy ditch, from which he was pulled out. His aide Jean-Baptiste Muiron died shielding the general with his body. Lannes, wounded, is also said to have covered him.",
        "Fourth, to the west, Masséna faced Austrian columns coming down from Caldiero and pushed them back to Belfiore. General Guieu crossed the Adige by boat at Albaredo and even took Arcole, but at midnight Bonaparte called him back, afraid that Davidovich would attack from behind.",
        "Fifth, on the second day, 16 November, Provera's Austrians attacked from Belfiore but ran into Masséna, and General Brabeck was killed. Mittrowsky and Augereau fought back and forth, and the Austrians stayed in Arcole. At nightfall, Bonaparte withdrew.",
        "Sixth, on the third day, 17 November, Alvinczi pulled part of his troops back to Caldiero. The French engineers built a second bridge over the Alpone, near its mouth, and Augereau crossed over it. An attack on the west dike, under General Robert, failed.",
        "Seventh, around 3 p.m., a large Austrian column pushed the French back, and Augereau fell back. Masséna then ambushed it on the west dike.",
        "Eighth, around 5 p.m., Masséna and Augereau entered Arcole. A lieutenant and 25 mounted guides, sent by Bonaparte, appeared behind the Austrians blowing trumpets, to make it look as if a large force was in their rear. An Austrian rearguard under Schübirz held the French long enough for Provera's division to escape east.",
        { note: "There are different versions of a similar trick: in some, drums and trumpets are sent behind the Austrian lines, and in others, only the mounted guides. The sources do not agree on the details." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "France lost about 3,500 dead and wounded, plus some 1,300 captured or missing. Austria lost about 2,200 dead and wounded, plus some 4,000 prisoners and 11 guns. The sources differ on some numbers.",
        "On the 17th, while the French were fighting at Arcole, Davidovich attacked Vaubois at Rivoli and beat him. Bonaparte turned on him, and Davidovich fell back, losing another 1,500 men and nine guns. Alvinczi went back to Caldiero. On 23 November, Wurmser tried a sally from Mantua, but went back when he learned that Davidovich was retreating.",
        { h: "Why it matters" },
        "Arcole was not a decisive victory: Mantua stayed besieged, and the Austrians came back in January. But it made Bonaparte a popular hero in France, because artists and newspapers turned the flag scene into an image of courage. Antoine-Jean Gros painted 'Bonaparte at the Bridge of Arcole' around 1796. Historians see in it the beginning of the Napoleonic legend.",
        { h: "Curiosities and controversies" },
        { note: "The flag: it is not known for certain who took which flag, or when. Some say Augereau was first, and others credit the gesture only to Bonaparte. The flag Bonaparte is said to have carried was almost white, with the diamond pattern of the 5th demi-brigade, which was not common on a French flag of the time." },
        { note: "Muiron's name: a frigate was named after the aide killed at Arcole. Bonaparte came back from Egypt on it, in 1799." },
        { note: "The numbers: the sources differ on the size of the armies (18,000 to 20,000 French and 23,000 to 24,000 Austrians) and on the losses." }
      ]}
    ]
  },

  rivoli: {
    war: "Bonaparte's Italian campaign (1796–1797)",
    hook: "An Austrian army came down the mountain in separate columns, and Bonaparte beat them one by one.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Arcole, Mantua was still besieged, and Austria did not give up. In January 1797, it sent a fourth offensive, again under József Alvinczi, to free Marshal Wurmser. This time, the plan was to come down in force through the mountains east of Lake Garda, crush General Joubert's division on the Rivoli plateau and reach the open plain, where Austrian numbers would count for more.",
        "Bonaparte, with a much smaller army, had spread out his divisions: Joubert at Rivoli, Masséna in reserve at Verona, Augereau to the south, near Ronco, and Rey on the west shore of the lake. On 8 January, Alvinczi made minor attacks and pushed Augereau back to Legnago. On 12 January, he attacked Joubert at Rivoli. At the same time, other Austrian forces pressed on Verona and Legnago. On learning of the attacks, Bonaparte sent Masséna and Rey to Rivoli.",
        { h: "The road to Rivoli" },
        { timeline: [
          ["8 Jan. 1797", "Alvinczi makes minor attacks and pushes Augereau back to Legnago."],
          ["12 Jan.", "Joubert is attacked at Rivoli. Other Austrian forces press on Verona and Legnago. Bonaparte sends Masséna and Rey to Rivoli."],
          ["14 Jan., 2 a.m.", "Bonaparte reaches Rivoli with part of Masséna's division."],
          ["14 Jan., 6 a.m.", "The battle begins."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Napoleon Bonaparte, 27 years old" },
        "At Rivoli, he showed what would make him famous: concentrating force at the right point at the right moment. He knew how to use his artillery in the narrows of the Adige, and how to keep a reserve, while the enemy was split into columns.",
        { h: "Barthélemy Joubert" },
        "A young general who held the Rivoli plateau until Bonaparte arrived. With some 10,000 men, he took the first shock and then led the counterattack in the center. He was the one Bonaparte left in command at Rivoli when he went south.",
        { h: "The other names" },
        "André Masséna arrived with the 18th [[demi-brigade|demi-brigada]] in time to hold Lusignan's column. Charles Leclerc and Antoine de Lasalle commanded the cavalry at the [[gorge|desfiladeiro]]. Joachim Murat, with the cavalry, hit the flank of the central column. On the Austrian side, Peter Quosdanovich commanded the column with artillery, which was to take the gorge, and Franz Joseph de Lusignan tried to surround the French from behind."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The most used figures are about 22,000 French and 28,000 Austrians. Other texts give larger numbers for both sides. Joubert's division had about 10,000 men before the reinforcements.",
        { h: "The terrain" },
        "The Rivoli plateau sits above the Adige valley, at the foot of Monte Baldo. The river runs through a narrow gorge to the north, and the road that climbs through it was the natural path for the Austrian troops. The chapel of San Marco and the Trombalora hills overlook the plateau from the north. Whoever held the heights and the gorge controlled access to the plain.",
        { h: "How Alvinczi split his army" },
        "Alvinczi attacked in several columns (the sources say five or six) that were meant to arrive together. Three of them, those of Köblös, Lipthay and Ocskay, would attack head-on from the north, without artillery. Quosdanovich's, with about 7,000 men and guns, would take the gorge. Lusignan would swing around to the west, over Monte Baldo, and Vukassovich would come down the east bank of the Adige. Columns separated by mountains, a river and long distances were hard to coordinate.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on the night of 13 to 14 January, the French were in line between the chapel of San Marco and the Trombalora hills. Bonaparte arrived at 2 in the morning, and the Austrian columns converged from the north, the west and the east bank of the river.",
        "Second, around 6 a.m., Joubert counterattacked to retake San Marco. About 10,000 French, with 18 guns, faced some 12,000 Austrians head-on. The Austrians held and threatened to surround the chapel, until Masséna's reserves arrived.",
        "Third, the Austrians took Monte Magnone and the heights above the gorge. Vukassovich, along the east bank of the Adige, forced the French out of Osteria and pushed them onto the plateau. Lusignan's column, meanwhile, reached the south of Rivoli, threatening the French line of retreat. Around 11 a.m., Austrian grenadiers occupied Osteria.",
        "Fourth, Bonaparte reduced Joubert's strength on the front line to concentrate artillery near the gorge. Quosdanovich came up through the gorge, but a battery of 15 guns, firing [[canister|metralha]] at close range, shattered the Austrian dragoons, who ran over their own infantry.",
        "Fifth, two Austrian ammunition wagons exploded, and there was great confusion. Leclerc and Lasalle, with some 500 horsemen, retook the gorge. According to a famous account, Lasalle and 26 men of the 22nd Chasseurs à Cheval captured a battalion and five flags. Quosdanovich saw that he would not get through and withdrew, out of range of the guns.",
        "Sixth, Ocskay pushed back Vial's brigade for a while, in the center. Around noon, Murat's cavalry hit the flank and made the column fall back.",
        "Seventh, against Lusignan, Masséna's 18th demi-brigade held, Brune attacked head-on, and Rey's division, coming from Castelnuovo, and Victor's reserve brigade arrived in time. The column was destroyed and fled west with fewer than 2,000 men. About 3,000 were captured between Masséna and Rey.",
        "Eighth, around 5 p.m., Bonaparte learned that Provera was about to cross the Adige at Angiari, near Mantua. He left Joubert in command and went. On the 15th, Joubert, with Murat and Vial, defeated the three central columns at La Corona, cutting off their retreat.",
        { note: "An Italian text attributes to Bonaparte, during the battle, the line 'we have them in our grasp.' It is a reported line, not a documented one." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "France lost about 3,200 dead and wounded, plus some 1,000 captured (other authors give about 5,000 in total). Austria lost some 4,000 dead and wounded and 8,000 to 11,000 prisoners, plus 40 guns, according to the sources. Total Austrian casualties are between 12,000 and 14,300.",
        "Joubert and Rey pursued the remnants up the Adige valley. Bonaparte, for his part, went south: on the 16th, at La Favorita, near Mantua, Provera was surrounded and surrendered. Wurmser, who had tried a sally, went back into the fortress.",
        { h: "Why it matters" },
        "Mantua surrendered on 2 February 1797, and the garrison marched out with the honors of war. Bonaparte then advanced on the Papal States and forced Pope Pius VI into an agreement at Tolentino. In October 1797, Austria signed the peace of Campo Formio. Rivoli was, until then, Bonaparte's greatest victory, and it is studied as an example of how to beat an enemy split into columns.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: some sources give French forces of 22,000 to 34,000 and Austrian forces of 28,000 to 45,000. We use the most quoted figures." },
        { note: "Names: the Rue de Rivoli in Paris was named in honor of the victory, and Masséna later received the title of Duke of Rivoli." },
        { note: "The dates: the main battle was on 14 January. Some sources give the 14th and 15th, because the pursuit took place on the 15th." }
      ]}
    ]
  },

  marengo: {
    war: "Bonaparte's Second Italian campaign (1800)",
    hook: "By mid-afternoon, the battle looked lost. By night, it was a victory.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In November 1799, Napoleon Bonaparte seized power in France and became [[First Consul|primeiro cônsul]]. His government needed a victory, and the war went on: Austria dominated northern Italy, and Masséna's French army was besieged in Genoa.",
        "In the spring of 1800, Bonaparte put together an Army of the Reserve and, in May, made it cross the Alps by the Great St Bernard Pass. He entered Milan on 2 June. Genoa surrendered on 4 June. On 9 June, Lannes beat an Austrian force at Montebello. The Austrian general Michael von Melas, who had some 30,000 men, gathered them at Alessandria.",
        { h: "The road to Marengo" },
        { timeline: [
          ["May 1800", "The Army of the Reserve crosses the Alps by the Great St Bernard."],
          ["2 June", "Bonaparte enters Milan."],
          ["4 June", "Genoa surrenders to the Austrians."],
          ["9 June", "Lannes wins at Montebello."],
          ["13 June", "The French drive an Austrian brigade out of Marengo."],
          ["14 June", "Melas attacks."]
        ]},
        "Bonaparte feared that Melas would slip away. So he spread his army out in a wide net: he sent Desaix, with Boudet's division (6,000 to 9,000 men, depending on the source), south toward Novi, and La Poype, with some 3,500, north, across the Po. It was a mistake, and on the morning of 14 June he was left with about 22,000 men on the plain."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Napoleon Bonaparte, 30 years old" },
        "He was some five kilometers from the field when the battle began and only realized that the attack was serious around 10 a.m. He reached the field near 11. He was still a rising general, and a defeat here would have weighed heavily on a man who had just seized power.",
        { h: "Louis Desaix, 31 years old" },
        "One of the most respected generals in the French army. He had just come back from Egypt, where he served with Bonaparte, and reached the army only a few days before the battle. He was sent south in the dispersal of troops and called back when the battle began.",
        { h: "Michael von Melas, 71 years old" },
        "The Austrian commander was a veteran. He believed that the battle was essentially won before Desaix arrived and, lightly wounded, left command to his chief of [[staff|estado-maior]], Zach, and to Kaim.",
        { h: "The other names" },
        "On the French side: Claude Victor and Jean Lannes, who held the center and the right; François Kellermann, with the cavalry; Auguste de Marmont, who commanded the artillery. On the Austrian side: Ott, who commanded the northern column, O'Reilly, in the south, Hadik and Kaim, in the center, and Frimont, with the cavalry."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The French had about 22,000 men and 15 guns in the morning; with Desaix they reached some 28,000. The Austrians had some 30,000 and some 100 guns, but Melas sent about 2,300 hussars across the Bormida, because of a mistaken report about Suchet's approach, and they took no part in the fighting.",
        { h: "The terrain" },
        "An open plain east of Alessandria, of fields, vineyards and ditches, with few rises. The Bormida river separated the Austrians from the plain, and the Fontanone stream, in front of the village of Marengo, was the main French line of defense. Castel Ceriolo, to the north, and San Giuliano, to the south, completed the triangle of the field.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, around 6 a.m., the Austrians began crossing the Bormida by two bridges. The narrow crossing slowed their formation. The first shots came around 8, and the attack was fully developed by 9.",
        "Second, Hadik's division attacked Marengo and was stopped by fire from two sides. Hadik was killed. The next attack, by Kaim, was stopped around 11.",
        "Third, near 11 a.m., Bonaparte arrived, called in the units that were far away and threw in his last reserves, including the [[Consular Guard|guarda consular]], on the right flank. Around 11:30, Ott took Castel Ceriolo and began pressing that French right.",
        "Fourth, around 12:30, the Austrians threw a small bridge over the Fontanone, and Lattermann's grenadiers attacked Marengo. Victor could hold no longer and fell back to the vineyards, and Lannes went with him.",
        "Fifth, around 2 p.m., Marengo fell. The French fell back to the east. Around 4 p.m., Frimont's cavalry destroyed the Consular Guard in a short fight. Melas, lightly wounded, handed command to Zach and Kaim. The Austrian pursuit spread out, and one part went off to hunt a detachment of 300 French.",
        "Sixth, around 5 p.m. (the sources say anywhere from shortly before 5 to 5:30), Desaix arrived with Boudet's division. According to the traditional account, he told Bonaparte that the battle was lost, but that there was still time to win another. The 9th Light Infantry surprised the head of Saint-Julien's column.",
        "Seventh, the French fell back to a line where Guénand's brigade and Marmont's guns were waiting. The guns fired [[canister|metralha]] at close range, and an Austrian ammunition wagon exploded. Boudet's division beat Saint-Julien's brigade, and Zach brought up Lattermann's grenadiers.",
        "Eighth, Bonaparte sent in the cavalry. About 400 heavy cavalrymen under Kellermann hit the flank of Lattermann's grenadiers and broke them. Desaix was hit by a shot and fell from his horse. Murat and Kellermann broke the Liechtenstein Dragoons, and the Austrian infantry shattered. Zach was captured with at least 2,000 men.",
        "Ninth, Weidenfeld's grenadiers and a little cavalry held the French back for a while. O'Reilly came back, and with Frimont held the village of Marengo until night, which gave the Austrian center time to get back to the Bormida. Ott, in the north, was blocked at Castel Ceriolo and fought his way back. Melas withdrew to Alessandria.",
        { note: "Who decided it? Melas, in his report, blamed Kellermann's charge. Murat also praised it. Napoleon's army bulletin gave the credit to Bessières and the Guard. The testimonies do not agree." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "French losses were about 4,700 dead and wounded, plus some 900 missing or captured. Austrian losses were about 6,500 dead and wounded, nearly 8,000 prisoners, 15 flags and 40 guns. Other sources give slightly different numbers. Desaix was found among the dead.",
        "Within 24 hours, Melas negotiated. Under the [[Convention of Alessandria|convenção de alessandria]], the Austrians evacuated Piedmont and Lombardy, handed over their fortresses and withdrew to the Mincio river. It was a ceasefire, not a peace: the war resumed in November 1800, and only ended with the peace of Lunéville, in 1801.",
        { h: "Why it matters" },
        "Marengo saved Bonaparte's political position, which was still fragile. He could present himself as the general who drove the Austrians out of northwestern Italy in a few weeks, and four years later he became emperor.",
        { h: "Curiosities and controversies" },
        { note: "The official version: the army bulletin and Berthier's account, from 1804, painted the battle as a planned withdrawal, drawing the enemy into a trap with Desaix in reserve. That is false: Desaix had been sent far away. Marmont, Coignet and others who were there describe a near defeat and a retreat toward the Scrivia river." },
        { note: "Desaix's line, 'this battle is lost, but there is still time to win another,' is a reported line, and not a confirmed one." },
        { note: "The numbers: the most quoted text gives 6,500 Austrian dead and wounded; another table gives 9,402 casualties in total. For the French, 5,600 to 7,000 in total. The sources do not agree." }
      ]}
    ]
  },

  magenta: {
    war: "The Second Italian War of Independence (1859)",
    hook: "A bridge, a canal and a reinforcement that was late decided the battle that gave its name to a color.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the mid-19th century, Italy was a patchwork of kingdoms and duchies, and Lombardy and Venetia belonged to Austria. The [[Risorgimento|risorgimento]] was the movement that wanted to unite the country. The Kingdom of Sardinia, ruled by Victor Emmanuel II and Prime Minister Cavour, was its engine, but on its own it could not beat the Austrians. Cavour then made a secret deal with Napoleon III, emperor of France, at Plombières, in 1858.",
        "The war began in April 1859, when Austria gave Sardinia an ultimatum and crossed the Ticino river. The Austrian general Ferenc Gyulai moved slowly, and the French arrived to reinforce the Sardinians. On 30 and 31 May, they won at Palestro. The Austrian army fell back behind the Ticino, west of Milan.",
        { h: "The road to Magenta" },
        { timeline: [
          ["Apr. 1859", "Austria gives Sardinia an ultimatum and enters Piedmont."],
          ["30–31 May", "The allies win at Palestro."],
          ["2–3 June", "French engineers throw a bridge of boats at Turbigo. MacMahon's corps begins crossing the Ticino."],
          ["4 June", "Battle of Magenta."],
          ["8 June", "Napoleon III and Victor Emmanuel II enter Milan."]
        ]},
        "Napoleon III, instead of attacking head-on, sent the bulk of the army north, through Novara, and had MacMahon cross the Ticino at Turbigo. The idea was to get around Gyulai's right flank and reach Milan. Gyulai had split his forces, expecting an attack from the west or farther south, and was caught with the bulk of the French coming from the north."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Napoleon III, 51 years old" },
        "The nephew of Napoleon I, the emperor accompanied the army in person. He stayed in a tower at San Martino, listening to the guns, and believed that MacMahon was already attacking. Historians criticize him for staying passive during the afternoon, when his men were in danger.",
        { h: "Patrice de MacMahon" },
        "The general commanding II Corps. His delay left the Guard fighting alone for hours, but his attack around 4 p.m. decided the battle. That night, Napoleon III made him a marshal of France and Duke of Magenta.",
        { h: "Ferenc Gyulai" },
        "The Austrian commander, of Hungarian origin, split his forces and waited for the attack somewhere else. After Magenta, he was replaced in command on 16 June.",
        { h: "The other names" },
        "On the French side, General Mellinet commanded the Guard's grenadier division, and Espinasse a division of II Corps. Canrobert, Niel and Vinoy brought reinforcements. On the Austrian side, Clam-Gallas, Liechtenstein, Schwarzenberg and Reischach commanded the corps and divisions."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The most used figures give about 54,000 French (plus some 12,000 Piedmontese, who barely fought) and about 58,000 Austrians in combat, out of a total of some 68,000. Other authors give numbers closer to each other, about 64,000 for each side. The Austrian artillery had more than 150 guns, against some 87 for the allies.",
        { h: "The terrain" },
        "A low plain between the Ticino and Milan, cut by canals and rice fields, with orchards and streams. The [[Naviglio Grande|naviglio grande]] runs north to south, and its bridges were the obligatory crossing. The region favored the defender, because there was little room to maneuver and the houses became small forts.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on the morning of 4 June, MacMahon left the Turbigo bridgehead in two columns: Espinasse's, toward Marcallo, and La Motte-Rouge's, toward Boffalora. The Austrians, under Clam-Gallas, were laid out in a triangle between Magenta, Marcallo and Boffalora.",
        "Second, around 1 and 2 p.m., Mellinet's grenadier division, of the Guard, attacked from the west, toward the canal bridges. The Austrians blew up the Ponte Vecchio and the railway bridge, and only the Ponte Nuovo was left standing. The Austrian II Corps, under Liechtenstein, defended the canal from farmhouses.",
        "Third, at 2 p.m., the Guard's [[Zouaves|zuavos]] crossed the canal in boats and made a bridgehead. The Guard, about 5,000 grenadiers, bore almost all the weight of the fighting for hours.",
        "Fourth, near 3 p.m., the situation became critical. MacMahon did not appear, Schwarzenberg's III Corps was coming from Robecco to attack the French right flank, and Austrian reinforcements were arriving from Abbiategrasso. The Austrians even sent a telegram to Vienna announcing victory. Napoleon III urged Canrobert to hurry and called for Niel. The Austrians did not take advantage of the gap.",
        "Fifth, around 4 p.m., MacMahon reached Boffalora and attacked the Austrian I and II Corps on the flank. Vinoy's divisions reinforced the Guard, and the two French wings joined up.",
        "Sixth, the French crossed the Ponte Nuovo, and the Austrians fell back into Magenta. Between 5 and 6:30 p.m., Mollard's Piedmontese reached MacMahon's left. Around 6:30 p.m., Gyulai gave the order to fall back to the southeast.",
        "Seventh, in Magenta, the fighting went house to house. The Foreign Legion and the Zouaves attacked. General Cler was killed, and Colonel de Chabrières was mortally wounded. General Espinasse died at the head of his division, in an incident attributed to a hidden Tyrolean chasseur. The sources give different hours for the fall of the town, between 7 and 9 p.m.",
        "Eighth, Clam-Gallas ordered the retreat toward Binasco around 8 p.m., and by night the Austrian army was in full retreat, toward Abbiategrasso. Gyulai thought of a counterattack that never happened.",
        { note: "The sources differ on many details: the hour at which Mellinet attacked (around 2 p.m., or earlier), where the Austrian units stood and who exactly killed Espinasse. That is why the diagram is a sketch, not an exact map." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The allies lost about 4,500 men (most of the official figures lie between 4,000 and 4,600, with some 560 to 700 dead). The Austrians lost some 10,000: 1,368 dead, 4,358 wounded and about 4,500 prisoners or missing. There were also some 12 civilians killed.",
        "On 8 June, Napoleon III and Victor Emmanuel II entered Milan, and Brescia followed soon after. Gyulai fell back to the Chiese river and was replaced on 16 June. Emperor Franz Joseph nominally took over command.",
        { h: "Solferino" },
        "The campaign went on, and twenty days later, on 24 June, the two armies met again, this time with both sovereigns present, at Solferino. That battle has its own entry on this site.",
        { h: "Why it matters" },
        "Magenta opened the road to Milan for the allies and led the Austrians to leave the city. It was a narrow victory, in which MacMahon's late arrival weighed more than Napoleon III's handling of the battle.",
        { h: "Curiosities and controversies" },
        { note: "The color: a reddish-purple dye discovered in 1859 was named magenta, because of the battle. The story that the color recalled the uniforms is considered apocryphal. The Boulevard de Magenta in Paris is also named for the battle." },
        { note: "The command: Napoleon III is criticized for staying passive in the afternoon. The victory owed less to him than to MacMahon and the Guard's grenadiers." },
        { note: "The numbers: the sources give different forces and losses (4,000 to 4,600 French casualties and 9,700 to 10,200 Austrian), and the official documents themselves may be inexact." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  pavia: {
    terrain: [
      { t: "sea", x: 0, y: 64, w: 100, h: 6, l: "Ticino river" },
      { t: "note", x: 50, y: 58, l: "Pavia (city)" },
      { t: "note", x: 50, y: 3, l: "North ↑ · Mirabello Park" },
      { t: "note", x: 40, y: 8, l: "Mirabello Castle" },
      { t: "note", x: 67, y: 15, l: "Breach in the wall (side uncertain)" }
    ],
    units: [
      { id: "iCamp", s: "a", k: "camp", w: 12, h: 5, l: "Imperial camp" },
      { id: "iArq", s: "a", k: "inf", w: 12, h: 4, l: "Arquebusiers (Vasto)" },
      { id: "iLan", s: "a", k: "inf", w: 14, h: 5, l: "Landsknechts (Frundsberg)" },
      { id: "iSpa", s: "a", k: "inf", w: 12, h: 4, l: "Spaniards (Pescara)" },
      { id: "iCav", s: "a", k: "cav", w: 10, h: 4, l: "Cavalry (Lannoy)" },
      { id: "iGar", s: "a", k: "inf", w: 12, h: 4, l: "Garrison (Leyva)" },
      { id: "fGen", s: "b", k: "cav", w: 12, h: 5, l: "Gendarmes (Francis I)" },
      { id: "fSwi", s: "b", k: "inf", w: 12, h: 5, l: "Swiss (La Marck)" },
      { id: "fBlk", s: "b", k: "inf", w: 12, h: 5, l: "Black Bands" },
      { id: "fArt", s: "b", k: "inf", w: 9, h: 3, l: "Artillery" },
      { id: "fMon", s: "b", k: "inf", w: 12, h: 4, l: "Swiss (Montmorency)" },
      { id: "fAle", s: "b", k: "inf", w: 12, h: 4, l: "Rearguard (Alençon)" }
    ],
    steps: [
      { t: "The French camp in Mirabello Park, between the besieged city and the imperial army, which lies to the east. Part of the Swiss guard the siege lines.",
        p: { iCamp: [88, 26], iArq: [86, 36], iLan: [82, 30], iSpa: [82, 22], iCav: [88, 16], iGar: [50, 52],
             fGen: [36, 24], fSwi: [28, 30], fBlk: [50, 32], fArt: [42, 36], fMon: [58, 48], fAle: [18, 46] } },
      { t: "On the night of 23 to 24 February, the imperials march north along the wall and open breaches to get into the park. The sources give different cover stories: a bombardment or burning tents.",
        p: { iArq: [76, 14], iLan: [80, 20], iSpa: [74, 10], iCav: [82, 8], iCamp: [92, 30] } },
      { t: "About 3,000 of Vasto's arquebusiers enter the park and, around 6:30, take Mirabello Castle.",
        p: { iArq: [48, 12], iLan: [62, 18], iSpa: [66, 12], iCav: [70, 8] } },
      { t: "The Swiss take a Spanish battery but run into Frundsberg's landsknechts. Lannoy, Pescara and the heavy cavalry swing around through the woods to the west, to get close to the king.",
        p: { fSwi: [38, 20], iLan: [52, 22], iSpa: [26, 12], iCav: [32, 8] } },
      { t: "Francis charges with the gendarmes and scatters Lannoy's cavalry, around 7:40. The charge takes the king away from his infantry and blocks his own guns' line of fire.",
        p: { fGen: [34, 12], iCav: [26, 6] }, x: ["iCav"] },
      { t: "The arquebusiers and the imperial pikes attack. Frundsberg breaks the Swiss, and the Black Bands are surrounded and destroyed.",
        p: { iLan: [42, 28], fSwi: [34, 30], fBlk: [48, 30], iArq: [40, 16], iSpa: [28, 18] }, x: ["iCav", "fSwi", "fBlk"] },
      { t: "Around 8 a.m., the gendarmes are surrounded in the woods and killed bit by bit. The king's horse goes down, and Francis is captured after a long fight.",
        p: { fGen: [30, 16], iSpa: [24, 18], iArq: [34, 20], iLan: [40, 22] }, x: ["iCav", "fSwi", "fBlk", "fGen"] },
      { t: "Leyva sallies out of Pavia and hits Montmorency's Swiss in the siege lines from behind. Alençon's rearguard does not fight and falls back toward Milan.",
        p: { iGar: [52, 44], fMon: [58, 46], fAle: [8, 38] }, x: ["iCav", "fSwi", "fBlk", "fGen", "fMon"] }
    ]
  },

  arcole: {
    terrain: [
      { t: "sea", x: 0, y: 60, w: 100, h: 6, l: "Adige river" },
      { t: "sea", x: 44, y: 6, w: 3, h: 54, l: "Alpone river" },
      { t: "note", x: 56, y: 34, l: "Arcole" },
      { t: "note", x: 38, y: 33, l: "Bridge" },
      { t: "note", x: 14, y: 3, l: "Caldiero" },
      { t: "note", x: 28, y: 68, l: "Ronco (sketch, not to scale)" }
    ],
    units: [
      { id: "fAug", s: "a", k: "inf", w: 10, h: 4, l: "Augereau" },
      { id: "fMas", s: "a", k: "inf", w: 10, h: 4, l: "Masséna" },
      { id: "fBon", s: "a", k: "inf", w: 8, h: 3, l: "Bonaparte" },
      { id: "fGd", s: "a", k: "cav", w: 6, h: 3, l: "25 guides" },
      { id: "aArc", s: "b", k: "inf", w: 10, h: 4, l: "Defenders of Arcole" },
      { id: "aMit", s: "b", k: "inf", w: 10, h: 4, l: "Mittrowsky" },
      { id: "aPro", s: "b", k: "inf", w: 10, h: 4, l: "Provera" },
      { id: "aMain", s: "b", k: "inf", w: 12, h: 4, l: "Columns from Caldiero" }
    ],
    steps: [
      { t: "Before dawn on 15 November, the engineers throw a bridge of boats at Ronco. The French advance along narrow dikes between marshes. The Austrians defend Arcole, and Alvinczi's army is at Caldiero.",
        p: { fAug: [34, 54], fMas: [20, 54], fBon: [28, 57], fGd: [38, 57], aArc: [58, 34], aMit: [72, 26], aPro: [24, 8], aMain: [30, 14] } },
      { t: "Augereau reaches the bridge over the Alpone, and heavy fire from the village throws him back. The narrow column cannot spread out.",
        p: { fAug: [40, 38], aArc: [54, 34] } },
      { t: "According to tradition, Bonaparte seizes a flag and runs ahead. He falls into a muddy ditch, and his aide Muiron dies shielding him.",
        p: { fBon: [41, 36] } },
      { t: "In the west, Masséna runs into Austrian columns coming from Caldiero and pushes them back. At the end of the 15th, Bonaparte still does not have Arcole.",
        p: { fMas: [24, 34], aMain: [26, 22] } },
      { t: "Day 16: Provera attacks Masséna and is thrown back. Mittrowsky and Augereau fight back and forth. At nightfall, Bonaparte withdraws.",
        p: { aPro: [26, 24], fAug: [36, 46], fMas: [22, 42], aMit: [60, 32] } },
      { t: "Day 17: Alvinczi pulls part of his troops back to Caldiero. The engineers make another bridge over the Alpone, near its mouth, and Augereau crosses over it.",
        p: { aMain: [18, 10], fAug: [52, 54], fBon: [46, 56] } },
      { t: "Around 3 p.m., a large Austrian column pushes Augereau back. Masséna ambushes it on the west dike.",
        p: { aMit: [50, 46], fAug: [50, 56], fMas: [34, 38] }, x: ["aMit"] },
      { t: "Around 5 p.m., Masséna and Augereau enter Arcole. Twenty-five guides blow trumpets behind the Austrians, to look like a large force. Provera's division escapes east.",
        p: { fAug: [58, 36], fMas: [48, 36], fGd: [68, 26], aArc: [74, 34], aPro: [90, 22] }, x: ["aMit", "aArc"] }
    ]
  },

  rivoli: {
    terrain: [
      { t: "hill", x: 8, y: 34, rx: 11, ry: 30, l: "Monte Baldo" },
      { t: "sea", x: 84, y: 0, w: 5, h: 70, l: "Adige river" },
      { t: "note", x: 50, y: 3, l: "North ↑" },
      { t: "note", x: 46, y: 22, l: "San Marco" },
      { t: "note", x: 56, y: 44, l: "Rivoli" },
      { t: "note", x: 74, y: 14, l: "Osteria (gorge)" }
    ],
    units: [
      { id: "fJou", s: "a", k: "inf", w: 14, h: 4, l: "Joubert" },
      { id: "fMas", s: "a", k: "inf", w: 12, h: 4, l: "Masséna (18th demi-brigade)" },
      { id: "fArt", s: "a", k: "inf", w: 10, h: 3, l: "Artillery" },
      { id: "fLec", s: "a", k: "cav", w: 8, h: 3, l: "Leclerc and Lasalle" },
      { id: "fMur", s: "a", k: "cav", w: 8, h: 3, l: "Murat" },
      { id: "fRey", s: "a", k: "inf", w: 10, h: 4, l: "Rey and Victor" },
      { id: "fBru", s: "a", k: "inf", w: 8, h: 4, l: "Brune" },
      { id: "aKos", s: "b", k: "inf", w: 14, h: 4, l: "Köblös and Lipthay" },
      { id: "aOcs", s: "b", k: "inf", w: 10, h: 4, l: "Ocskay" },
      { id: "aQuo", s: "b", k: "inf", w: 12, h: 4, l: "Quosdanovich" },
      { id: "aLus", s: "b", k: "inf", w: 12, h: 4, l: "Lusignan" },
      { id: "aVuk", s: "b", k: "inf", w: 8, h: 4, l: "Vukassovich" }
    ],
    steps: [
      { t: "On the night of 13 to 14 January, Joubert holds the line between San Marco and Trombalora. Bonaparte arrives at 2 a.m. The Austrian columns converge from the north, the west and the east bank of the river.",
        p: { fJou: [46, 28], fMas: [34, 36], fArt: [64, 34], fLec: [60, 46], fMur: [68, 50], fRey: [24, 64], fBru: [34, 60],
             aKos: [40, 10], aOcs: [56, 8], aQuo: [76, 6], aLus: [18, 12], aVuk: [93, 14] } },
      { t: "Around 6 a.m., Joubert counterattacks to retake San Marco. The Austrians hold and threaten to surround the chapel, until Masséna's reserves arrive.",
        p: { fJou: [46, 24], aKos: [42, 14] } },
      { t: "The Austrians take Monte Magnone and the heights above the gorge. Vukassovich drives the French out of Osteria, and Lusignan reaches the south of Rivoli, threatening the retreat.",
        p: { aVuk: [91, 28], aLus: [28, 52], aQuo: [76, 18] } },
      { t: "Bonaparte concentrates the guns near the gorge. A battery of 15 guns, firing canister at close range, shatters Quosdanovich's dragoons, who run over their own infantry.",
        p: { fArt: [70, 26], aQuo: [76, 24] } },
      { t: "Two Austrian ammunition wagons explode. Leclerc and Lasalle retake the gorge, and Quosdanovich falls back out of range of the guns.",
        p: { fLec: [74, 20], aQuo: [82, 12] }, x: ["aQuo"] },
      { t: "In the center, Ocskay pushes back Vial's brigade. Around noon, Murat's cavalry hits the flank and makes him fall back.",
        p: { aOcs: [54, 30], fMur: [60, 28] }, x: ["aQuo", "aOcs"] },
      { t: "Against Lusignan, Masséna's 18th demi-brigade holds, Brune attacks head-on, and Rey and Victor arrive. The column is destroyed and flees west.",
        p: { fMas: [30, 48], fBru: [32, 56], fRey: [22, 58], aLus: [14, 46] }, x: ["aQuo", "aOcs", "aLus"] },
      { t: "Around 5 p.m., Bonaparte leaves for Mantua. On the 15th, Joubert, Murat and Vial defeat the central columns at La Corona and cut off their retreat.",
        p: { fJou: [46, 14], fMur: [50, 10], aKos: [42, 4] }, x: ["aQuo", "aOcs", "aLus", "aKos"] }
    ]
  },

  marengo: {
    terrain: [
      { t: "sea", x: 10, y: 0, w: 3, h: 64, l: "Bormida river" },
      { t: "sea", x: 37, y: 24, w: 2.5, h: 34, l: "Fontanone" },
      { t: "note", x: 4, y: 33, l: "Alessandria" },
      { t: "note", x: 56, y: 6, l: "Castel Ceriolo" },
      { t: "note", x: 46, y: 62, l: "Marengo" },
      { t: "note", x: 92, y: 4, l: "North ↑" }
    ],
    units: [
      { id: "fVic", s: "a", k: "inf", w: 12, h: 5, l: "Victor (Marengo)" },
      { id: "fLan", s: "a", k: "inf", w: 12, h: 5, l: "Lannes" },
      { id: "fMon", s: "a", k: "inf", w: 10, h: 4, l: "Monnier" },
      { id: "fKel", s: "a", k: "cav", w: 10, h: 4, l: "Kellermann" },
      { id: "fGua", s: "a", k: "inf", w: 9, h: 3, l: "Consular Guard" },
      { id: "fDes", s: "a", k: "inf", w: 12, h: 5, l: "Desaix (Boudet)" },
      { id: "fMar", s: "a", k: "inf", w: 9, h: 3, l: "Artillery (Marmont)" },
      { id: "aHad", s: "b", k: "inf", w: 12, h: 5, l: "Hadik and Kaim" },
      { id: "aLat", s: "b", k: "inf", w: 10, h: 4, l: "Grenadiers (Lattermann)" },
      { id: "aOtt", s: "b", k: "inf", w: 12, h: 5, l: "Ott (north)" },
      { id: "aORe", s: "b", k: "inf", w: 10, h: 4, l: "O'Reilly (south)" },
      { id: "aFri", s: "b", k: "cav", w: 9, h: 4, l: "Frimont" },
      { id: "aZac", s: "b", k: "inf", w: 12, h: 5, l: "Zach's column" }
    ],
    steps: [
      { t: "Dawn on 14 June. The Austrians cross the Bormida in three columns: Ott in the north, O'Reilly in the south, and Melas in the center. Victor's French hold Marengo and the Fontanone line. Desaix is far away, in the south.",
        p: { aHad: [22, 42], aLat: [18, 36], aOtt: [28, 14], aORe: [28, 56], aFri: [20, 48],
             fVic: [48, 46], fLan: [54, 32], fMon: [62, 16], fKel: [54, 56], fGua: [76, 34], fDes: [92, 64], fMar: [80, 44], aZac: [16, 30] } },
      { t: "Around 8 a.m., Hadik attacks Marengo and is stopped by fire from two sides. Hadik is killed. Kaim's attack is stopped around 11. Bonaparte arrives and throws his reserves onto the right.",
        p: { aHad: [38, 44], fGua: [68, 26], fMon: [62, 20] } },
      { t: "Around 11:30, Ott takes Castel Ceriolo and threatens the French right. Near 12:30, a small bridge over the Fontanone lets Lattermann attack Marengo, and Victor falls back to the vineyards.",
        p: { aOtt: [52, 12], fMon: [66, 22], aLat: [40, 46], fVic: [56, 46], fLan: [58, 34] } },
      { t: "Around 2 p.m., Marengo falls. The French fall back to the east. O'Reilly advances in the south.",
        p: { aHad: [56, 44], fVic: [68, 46], fLan: [68, 34], fKel: [64, 56], aORe: [60, 58] } },
      { t: "Around 4 p.m., Frimont's cavalry destroys the Consular Guard. Melas, lightly wounded, hands command to Zach and Kaim, and the Austrian column forms up. The pursuit spreads out.",
        p: { aFri: [72, 30], aZac: [62, 42], aLat: [58, 40] }, x: ["fGua"] },
      { t: "Near 5 p.m., Desaix arrives with Boudet's division. According to tradition, he says the battle is lost, but that there is still time to win another. The French surprise the head of Saint-Julien's column.",
        p: { fDes: [76, 54], aZac: [66, 46] }, x: ["fGua"] },
      { t: "Marmont's guns fire canister at close range, and an ammunition wagon explodes. Boudet beats Saint-Julien's brigade.",
        p: { fMar: [72, 44], fDes: [72, 50] }, x: ["fGua"] },
      { t: "About 400 of Kellermann's heavy cavalry hit Lattermann's flank. Desaix is hit and dies. The Austrian infantry shatters, and Zach is captured.",
        p: { fKel: [64, 42], aLat: [60, 42], aZac: [64, 40], fDes: [68, 46] }, x: ["fGua", "aLat", "aZac"] },
      { t: "O'Reilly and Frimont hold Marengo until night, and the Austrian center gets back to the Bormida. Ott, blocked at Castel Ceriolo, also falls back. Melas shuts himself in Alessandria.",
        p: { aHad: [30, 44], aOtt: [34, 22], aORe: [32, 54], aFri: [50, 46] }, x: ["fGua", "aLat", "aZac"] }
    ]
  },

  magenta: {
    terrain: [
      { t: "sea", x: 3, y: 0, w: 4, h: 70, l: "Ticino river" },
      { t: "sea", x: 24, y: 0, w: 2, h: 70, l: "Naviglio Grande" },
      { t: "note", x: 16, y: 4, l: "Turbigo" },
      { t: "note", x: 33, y: 14, l: "Boffalora" },
      { t: "note", x: 28, y: 29, l: "Ponte Nuovo" },
      { t: "note", x: 48, y: 36, l: "Magenta" },
      { t: "note", x: 54, y: 12, l: "Marcallo" },
      { t: "note", x: 32, y: 64, l: "Robecco" },
      { t: "note", x: 56, y: 66, l: "Abbiategrasso" },
      { t: "note", x: 92, y: 4, l: "North ↑" }
    ],
    units: [
      { id: "fGua", s: "a", k: "inf", w: 12, h: 5, l: "Guard and Zouaves (Mellinet)" },
      { id: "fVin", s: "a", k: "inf", w: 10, h: 4, l: "Vinoy" },
      { id: "fLMR", s: "a", k: "inf", w: 10, h: 4, l: "MacMahon: La Motte-Rouge" },
      { id: "fEsp", s: "a", k: "inf", w: 10, h: 4, l: "MacMahon: Espinasse" },
      { id: "fCan", s: "a", k: "inf", w: 10, h: 4, l: "Canrobert and Niel" },
      { id: "aLie", s: "b", k: "inf", w: 12, h: 5, l: "II Corps (Liechtenstein)" },
      { id: "aCla", s: "b", k: "inf", w: 12, h: 5, l: "I Corps (Clam-Gallas)" },
      { id: "aSch", s: "b", k: "inf", w: 12, h: 5, l: "III Corps (Schwarzenberg)" },
      { id: "aRes", s: "b", k: "inf", w: 10, h: 4, l: "Reinforcements" }
    ],
    steps: [
      { t: "Morning of 4 June. MacMahon leaves the Turbigo bridgehead in two columns: Espinasse toward Marcallo, and La Motte-Rouge toward Boffalora. The Austrians form a triangle between Magenta, Marcallo and Boffalora.",
        p: { fLMR: [14, 12], fEsp: [18, 8], fGua: [12, 36], fVin: [8, 52], fCan: [8, 62],
             aLie: [34, 22], aCla: [50, 28], aSch: [30, 58], aRes: [54, 56] } },
      { t: "Around 1 and 2 p.m., the Guard's grenadiers attack from the west toward the canal bridges. The Austrians blow up the Ponte Vecchio and the railway bridge. Only the Ponte Nuovo is left.",
        p: { fGua: [20, 31], fLMR: [16, 16] } },
      { t: "At 2 p.m., the Zouaves cross the canal in boats and make a bridgehead. The Guard, with some 5,000 grenadiers, bears almost all the fighting for hours.",
        p: { fGua: [28, 31], aLie: [34, 26] } },
      { t: "Near 3 p.m., MacMahon does not appear. Schwarzenberg's corps comes from Robecco to attack the French right flank, and reinforcements arrive from Abbiategrasso. Napoleon III calls for Canrobert and Niel.",
        p: { aSch: [30, 48], aRes: [42, 48], fCan: [14, 46] } },
      { t: "Around 4 p.m., MacMahon reaches Boffalora and attacks the I and II Corps on the flank. Vinoy's division reinforces the Guard.",
        p: { fLMR: [34, 18], aLie: [40, 28], fVin: [24, 38], fEsp: [44, 14] } },
      { t: "The French cross the Ponte Nuovo, and the Austrians fall back into Magenta. Around 6:30 p.m., Gyulai orders the retreat to the southeast.",
        p: { fGua: [36, 34], fVin: [30, 40], aCla: [48, 40], aLie: [44, 34] } },
      { t: "House-to-house fighting in Magenta, between 7 and 9 p.m., according to the sources. The Foreign Legion and the Zouaves attack. General Espinasse dies at the head of his division.",
        p: { fGua: [42, 38], fEsp: [48, 26], fVin: [38, 42], aCla: [52, 42] } },
      { t: "Around 8 p.m., Clam-Gallas orders a withdrawal, and by night the Austrian army is in full retreat toward Abbiategrasso.",
        p: { aCla: [54, 58], aLie: [50, 54], aSch: [46, 62], aRes: [58, 62] } }
    ]
  }
});
