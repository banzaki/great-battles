// In-depth battles, batch ar: legnano, montaperti, campaldino, fornovo, ravenna (regional pack, part C: northern Italy).
// Checked against the English and Italian Wikipedia articles on the battles of Legnano, Montaperti, Campaldino, Fornovo
// and Ravenna (1512), the Italian article on the Compagnia della Morte and Alberto da Giussano, and the works they cite
// (Giovanni Villani for Campaldino, Dante's Inferno X and XXXII and Purgatorio V, Guicciardini for Fornovo and Ravenna).
// Chronicle numbers and legends are flagged in the text. No diagram for Fornovo: the sources do not describe the moves.

Object.assign(GLOSSARY, {
  "carroccio": "A big four-wheeled cart, pulled by oxen, that medieval Italian cities took to war as a symbol of the army. It carried the city's banner and often an altar. Losing it was a disgrace, so the soldiers gathered around it to defend it.",
  "comuna": "A medieval Italian city that governed itself, with elected consuls or magistrates, its own walls and its own militia. In northern Italy the communes were rich and formally subjects of the emperor, but they wanted to be free.",
  "guelfos": "An Italian party that, from the 12th to the 14th century, backed the pope against the emperor. The Guelphs were strong among the merchants and bankers of cities such as Florence.",
  "gibelinos": "An Italian party that backed the Holy Roman emperor against the pope. They were strong among the country nobility and in cities such as Siena, Pisa and Arezzo. In practice, cities also used both names for their local quarrels.",
  "cisma": "A split in the Church between two rival popes. Between 1159 and 1177, Frederick Barbarossa backed popes of his own choosing against Alexander III, whom the Lombard cities defended.",
  "liga lombarda": "An alliance of northern Italian cities, formed in 1167 and led by Milan, to resist Emperor Frederick Barbarossa. It had the support of Pope Alexander III.",
  "podestà": "A foreign magistrate chosen by a medieval Italian city to govern, judge and command its army, precisely because he belonged to none of the local rival families.",
  "feditori": "The horsemen of the front rank of a medieval Italian army, chosen from among the bravest. They took the first shock, and many died.",
  "estradiotas": "Light horsemen from the Balkans (Greece and Albania), hired by Venice. They were fast and masters of attacking, retreating and plundering.",
  "lansquenetes": "German mercenary infantry, with pikes and broadswords. Created in the 1480s, they became one of the most feared troops of the Italian Wars.",
  "rodeleiros": "Spanish soldiers protected by a round shield (rodela) and armed with a short sword. They were good in close combat, where long pikes got in the way.",
  "alabarda": "A pole weapon with an axe blade and a spearpoint. The Swiss used it in tight formations, and it split armor.",
  "guerras italianas": "A series of wars between 1494 and 1559 in which France, Spain and the Empire fought for control of Italy, then divided into many rich cities and kingdoms.",
  "liga de cambrai": "An alliance formed in 1508 by France, the pope, Spain and the Empire against Venice. In 1511 Pope Julius II changed sides and formed the Holy League against France.",
  "gendarmes": "French heavy horsemen in full armor, organized in the king's permanent companies. Each came with attendants and mounted archers."
});

Object.assign(DEEP, {
  legnano: {
    war: "Frederick Barbarossa's wars against the Lombard cities (1154–1183)",
    hook: "The emperor who razed Milan fell from his horse before the Milanese infantry and vanished for days.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In the 12th century, northern Italy was the richest region in Europe. Cities such as Milan, Pavia and Cremona, the [[communes|comuna]], had trade, walls and militias of their own. In theory, all of them obeyed the emperor of the [[Holy Roman Empire|sacro império]]. In practice, each governed itself, and neighbors were always quarreling with one another.",
        "Frederick I, called Barbarossa (Redbeard), was crowned emperor in 1155 and wanted to put an end to this. In his view, the Italian cities owed money, troops and obedience. He came down to Italy five times. In 1162, after a long siege, he had Milan razed. Instead of frightening its neighbors, the destruction united them.",
        { h: "The road to Legnano" },
        { timeline: [
          ["1162", "Frederick takes and destroys Milan."],
          ["1167", "Northern cities form the [[Lombard League|liga lombarda]]. An epidemic forces the imperial army to withdraw from Rome."],
          ["1168", "The League founds Alessandria, named in honor of Pope Alexander III, the emperor's enemy."],
          ["1174–75", "Frederick's fifth campaign: the siege of Alessandria fails, and so do the negotiations at Montebello."],
          ["28–29 May 1176", "Frederick leaves the Como region with his cavalry. On 29 May he meets the League army near Legnano."]
        ]},
        "The League had a second reason to fight: the Church [[schism|cisma]]. Frederick backed rivals to Alexander III, and the Lombard cities sided with the pope they saw as the legitimate one. In 1176 the emperor needed German reinforcements. They came under Philip of Cologne and Wichmann of Magdeburg, about 2,000 horsemen, fewer than he wanted. Frederick went to Como to collect them and marched toward Pavia, where he would join other allies. The League left Milan to intercept him."
      ]},
      { n: "02", title: "The Leaders", blocks: [
        { h: "Frederick I Barbarossa, about 54 years old" },
        "Emperor since 1155, he was an experienced warrior, convinced that the empire was worth whatever each city owed him. He had already beaten Milan once. At Legnano, haste betrayed him: to reach Pavia quickly, he left his infantry behind and marched with only his heavy cavalry.",
        { h: "The League and its commanders" },
        "The Italian side had no king. The League was an alliance of cities, and command was shared. Historians consider that Guido da Landriano, a Milanese politician, was probably the commander in the field, but this is a deduction: no source of the time says so outright. The backbone of the army was the infantry of Milan, which defended the city's [[carroccio|carroccio]].",
        { h: "The other names" },
        "On the imperial side, besides Philip of Cologne and Wichmann of Magdeburg, there were the horsemen of the city of Como, Frederick's ally, who suffered heavily in the battle. Among the illustrious prisoners were Count Berthold IV of Zähringen and Philip of Alsace, named in a letter from Milan to Bologna."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "Modern estimates give Frederick about 3,000 heavy horsemen, almost all German, besides the allies from Como. The League would have had 12,000 to 15,000 men: mostly Milanese infantry, with 2,000 to 3,000 horsemen from Milan and the allied cities. No chronicler of the time gave reliable numbers, so these are estimates, not data.",
        { h: "The terrain" },
        "The region between Milan and Como, northwest of the former, cut by the Olona River and by woods and fields. Legnano and Borsano lie a few kilometers apart. The Ticino, which runs to the west, was the escape route for anyone trying to reach Pavia.",
        { h: "The battle" },
        { formation: true },
        "On 29 May, Frederick was marching southwest and the League was coming up from Milan. Near Borsano, some 700 League horsemen ran into some 300 imperials, the vanguard. The Germans fell back, and the Italians followed them. It was an unintended trap: behind the vanguard came the main body of cavalry, which attacked and drove the League horsemen from the field.",
        "The German horsemen chased the fugitives and came upon the [[carroccio|carroccio]], planted on a rise above the Olona. Around it, the Milanese infantry formed a semicircle of shields and long spears. Some say the attack was a rational decision: the cart and the infantry blocked the road to Pavia. Honor must also have counted: a victory over a carroccio was almost a victory over the whole city.",
        "The infantry held. Sources disagree on whether two or four lines broke, but the core around the cart did not give way. For hours the German horsemen charged, fell back and charged again, and each charge cost men and horses. At that point the League cavalry, regrouped, came back and attacked from the sides and from behind.",
        "The imperial standard-bearer was killed, and the standard was lost. Frederick joined the fight, was thrown from his horse and vanished from sight. The news that the emperor was dead ran across the field, and the army fell apart.",
        { h: "The flight" },
        "The imperials fled west, toward the Ticino, through Dairago and Turbigo. Many were killed, captured or drowned trying to cross the river. The horsemen of Como suffered the most. The League kept the insignia, the baggage, the horses and the equipment.",
        { note: "The losses are a modern estimate: something between 1,500 and 2,500 imperials killed, wounded or captured, and a few hundred on the League side. No chronicler of the time gave a reliable total." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Frederick survived. According to the sources, Empress Beatrice, in Pavia, was mourning her husband as dead when he appeared at the city gates a few days later (some say three days, others a week). He had lost his armor, sword, lance and treasure on the field. The fifth campaign was over, and he no longer had the strength for another.",
        "The emperor turned to negotiation. In 1177, in the Peace of Venice, he recognized Alexander III as pope and ended the schism. With the cities he made only a six-year truce. The definitive peace came in 1183, at Constance: the communes remained subject to the emperor in name, but with the right to govern, fortify themselves and judge on their own. Alessandria, the pope's city, was renamed Caesarea to please Frederick.",
        { h: "Why it matters" },
        "Legnano showed that well-placed infantry, gathered around a symbol that nobody wanted to lose, could hold off heavy cavalry. Politically, it gave the communes of northern Italy the autonomy that would support their growth in the following centuries.",
        { h: "Curiosities and controversies" },
        { note: "The Company of Death: according to legend, a group of young men swore to die around the carroccio, led by Alberto da Giussano. Neither appears in the 12th-century chronicles. Alberto shows up only in the 14th century, in the work of the chronicler Galvano Fiamma, almost 150 years after the battle." },
        { note: "The Oath of Pontida: tradition says the cities swore an alliance in 1167 at the abbey of Pontida. Historians doubt it, because the sources mention it only from 1505 on." },
        { note: "A reinvented battle: in the 19th century, during the unification of Italy, Legnano became a symbol of resistance to foreigners. Verdi's opera 'The Battle of Legnano' dates from 1849, and the Italian national anthem names the town. It was a modern reading: in 1176 the quarrel was among communities inside the same empire, not between nations." }
      ]}
    ]
  },

  montaperti: {
    war: "Rivalry between Florence and Siena in the struggle of Guelphs and Ghibellines (1250–1270)",
    hook: "Siena gave the city to the Virgin, attacked a much larger army and, according to Dante, turned a river red.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In the 13th century, Italy was divided into two parties, the [[Guelphs|guelfos]] (the pope's) and the [[Ghibellines|gibelinos]] (the emperor's). Cities used the names for their own quarrels. Florence, rich in bankers and wool, was Guelph. Siena, its rival in Tuscany, was Ghibelline, and had bankers of its own.",
        "In 1258, the Guelphs drove the last powerful Ghibellines out of Florence. The exiles went to Siena. Manfred, king of Sicily, son of Emperor Frederick II and leader of the Ghibelline side, sent help: in 1259, German knights under Giordano d'Agliano arrived in Siena. They began with about 100, accepted on the advice of Farinata degli Uberti, one of the Florentine exiles.",
        { h: "The road to Montaperti" },
        { timeline: [
          ["1258", "The Guelphs expel the Ghibellines from Florence. The exiles go to Siena."],
          ["1259", "Manfred's first German knights arrive in Siena."],
          ["18–20 May 1260", "A Guelph league of about 35,000 men besieges Siena and lifts the siege two days later."],
          ["2 Sept", "The Guelphs camp near the Arbia River, at Montaperti, and send an ultimatum."],
          ["2–3 Sept", "Siena dedicates itself to the Virgin and marches to the hills facing the enemy camp."],
          ["4 Sept", "The battle."]
        ]},
        "After the failed siege, Manfred sent about 800 more German knights, and Pisa and other Tuscan Ghibellines also helped Siena. The Guelphs came back. Siena rejected the ultimatum, but the decision was not unanimous: some councillors wanted to negotiate. To persuade the Germans to fight, the Sienese leaders paid them double wages, with money from Salimbene dei Salimbeni. In a procession, the city was dedicated to the Virgin Mary."
      ]},
      { n: "02", title: "The Leaders", blocks: [
        { h: "Farinata degli Uberti" },
        "Leader of the Ghibellines of Florence, in exile in Siena. It was he who persuaded the Sienese to accept Manfred's help. After the victory, at Empoli, he prevented his native city from being razed. Dante meets him in Hell, but for heresy, not because of the battle.",
        { h: "Giordano d'Agliano" },
        "Commander of Manfred's German cavalry. His horsemen, heavy and disciplined, were the hammer of the Ghibelline army.",
        { h: "Bocca degli Abati" },
        "A Florentine knight, supposedly a Guelph but a secret Ghibelline. According to the chronicles, he cut off the hand of the Florentine standard-bearer in the middle of the battle. Dante put him in the ice of the last circle of Hell, among the traitors.",
        { h: "The other names" },
        "On Siena's side, Aldobrandino Aldobrandeschi commanded the Sienese infantry, and Niccolò da Bigozzi the guard of the carroccio. The Count of Arras, a German captain in Manfred's service, led the detachment that attacked from behind. On Florence's side, the commander is uncertain: the chronicles name Jacopino Rangoni of Modena, who is said to have died at the end of the battle."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "According to the chronicles, the Guelphs had some 30,000 foot soldiers and 3,000 horsemen, and the Ghibellines some 18,000 to 20,000: about 8,000 Sienese, 3,000 Pisans, 2,000 foot soldiers and 800 German horsemen from Manfred, plus other allies. Like almost every medieval chronicler's figure, these are numbers that historians use with caution.",
        { h: "The terrain" },
        "A region of low hills near the Arbia River, a few kilometers from Siena. The Guelph camp stood on high ground, the Poggio delle Cortine. To reach it, the Ghibellines had to cross the river and climb the slope.",
        { note: "There is a legend that, to look more numerous, the Sienese paraded three times in front of the enemy, changing colors. It is not confirmed by documents." },
        { h: "The battle" },
        { formation: true },
        "The Ghibellines crossed the Arbia in four bodies. The accounts disagree on the numbers in each, but the plan is clear: one body, the Germans of the Count of Arras, would stay hidden to fall on the Guelph rear, and the others, under Giordano, Aldobrandeschi and Bigozzi (who guarded the carroccio), would form the front. They waited for the sun to rise, so that the light would strike the eyes of the Florentines, who were on top of the hill.",
        "Around ten in the morning, the German horsemen attacked uphill and pushed back the Guelph right wing. The Sienese infantry climbed alongside. Until about three in the afternoon, according to the chronicles, the Florentines, more numerous and on high ground, gained ground. Niccolò da Bigozzi, who was supposed to guard the carroccio, joined the fight and steadied the Sienese line.",
        "Then came the betrayal. Bocca degli Abati, according to the chroniclers, cut off the hand of the Florentine standard-bearer, Jacopo de' Pazzi. The standard fell, and dismay spread. Ghibelline sympathizers tried to seize the Florentine carroccio and failed, but the confusion was already running.",
        "Late in the afternoon, the Germans of the Count of Arras burst out of the ambush shouting 'Saint George' and attacked the rear. The Florentine commander died, the cavalry was almost entirely destroyed, the camp was plundered and the carroccio was taken. The Guelph army fell apart, and the pursuit lasted until night.",
        { h: "The losses" },
        "Sources disagree widely. Modern estimates speak of about 2,500 Florentines killed and 1,500 captured. The chronicles reach 10,000 dead and 15,000 prisoners among all the Guelphs, numbers that almost certainly exceed reality. On the Ghibelline side, some 600 dead. According to the accounts, many Florentines removed their insignia and mingled with the allies to escape."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "On 13 September, the Guelphs of Florence fled to Bologna and Lucca. On 27 September, the Ghibellines returned to power. Citizens had to swear loyalty to Manfred, and the Guelphs' towers and houses were demolished. At a council in Empoli, the Ghibelline allies wanted to destroy Florence. Farinata opposed it, and the city was spared.",
        "Ghibelline rule did not last. In 1266, Manfred died at Benevento, and the Guelphs, with the help of the pope and Charles of Anjou, retook Tuscany. In 1269, Siena lost to Florence at Colle, and the Sienese leader Provenzano Salvani was killed.",
        { h: "Why it matters" },
        "Montaperti was one of the bloodiest battles of medieval Italy. For the Sienese, it is the victory over Florence that is still remembered: every night of 4 September, a torchlight procession climbs to the monument on the hill. In literature, it entered the Divine Comedy: Dante wrote in the Inferno that the battle left the Arbia 'colored red', and the phrase stuck.",
        { h: "Curiosities and controversies" },
        { note: "The Book of Montaperti: the Sienese took from the Florentine camp the army's administrative record, a rare document on how a medieval city organized its soldiers." },
        { note: "The church of Saint George: it is said that the Germans used part of their pay to found a church in Siena, in thanks to Saint George, whose name they had shouted." },
        { note: "War stories: it is told that the Florentine gonfalon was dragged in the dust, tied to a donkey's tail, and that a camp-follower named Usilia captured and saved 36 Florentines. These are traditional tales, without solid confirmation." }
      ]}
    ]
  },

  campaldino: {
    war: "Wars between Guelphs and Ghibellines in Tuscany (13th century)",
    hook: "Dante was 24 and stood in the front rank; decades later, he put a defeated enemy inside the Purgatorio.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In late 13th-century Tuscany, the [[Guelphs|guelfos]] had won. After Benevento (1266), where Charles of Anjou killed Manfred, Ghibelline Italy had lost the support of a king. Florence was Guelph and rich, and wanted to settle accounts with the neighboring Ghibelline cities.",
        "Arezzo was the strongest of them. Bishop Guglielmino degli Ubertini, a nobleman who fought with a mace in hand, was the strongest figure in the city, which sheltered Ghibelline exiles from many places. In the Casentino, the valley of the upper Arno, Count Guido Novello, lord of Poppi and podestà of Arezzo, was on the same side. The trigger, according to the chronicler Giovanni Villani, was the Guelph raids on Guido Novello's lands and the threat to the fortress of Bibbiena.",
        { h: "The road to Campaldino" },
        { timeline: [
          ["1260", "Ghibelline Siena beats Florence at Montaperti."],
          ["1266", "Manfred dies at Benevento, and the Guelphs retake Tuscany."],
          ["Spring 1289", "A Guelph league gathers an army and enters the Casentino by the Consuma pass, avoiding the Valdarno route."],
          ["11 June 1289", "The two armies meet on the plain of Campaldino, on the feast of Saint Barnabas."],
          ["Late June", "The Guelphs besiege Arezzo, without taking it."]
        ]},
        "The Guelph army came from Florence but gathered contingents from Lucca, Siena, Pistoia, Prato, Bologna and the Guelphs of the Romagna, plus about 400 French horsemen of the king of Naples, commanded by Amerigo di Narbona. The Aretines were fewer and of better quality: much of their force was feudal nobility with retinues of their own."
      ]},
      { n: "02", title: "The Leaders", blocks: [
        { h: "Buonconte da Montefeltro" },
        "A Ghibelline captain, son of Guido da Montefeltro, one of the great war leaders of the age. According to the sources, he and the bishop thought it best not to accept battle. When it became unavoidable, it was Buonconte who drew up the plan. He died on the field.",
        { h: "Guglielmino degli Ubertini, bishop of Arezzo" },
        "Political and military chief of Arezzo. According to Villani, he was put on his horse almost by force and taken to the battle, where he fell. He was buried with the other dead near the convent of Certomondo.",
        { h: "Corso Donati and Vieri de' Cerchi" },
        "Two Florentine nobles, and rivals to each other. Cerchi commanded the horsemen of the front rank, the [[feditori|feditori]]. Donati, at the time [[podestà|podestà]] of Pistoia, stayed in reserve. A decade later, they would be the heads of the two factions, the Blacks (Donati) and the Whites (Cerchi), who tore Florence apart.",
        { h: "Dante Alighieri, 24 years old" },
        "The future poet fought on the Guelph side, in the cavalry, among the men of Vieri de' Cerchi, in the front rank. Years later, he wrote the account that is still read: in the Purgatorio, the spirit of Buonconte tells how he died.",
        { h: "The other names" },
        "Nominal Guelph command belonged to Amerigo di Narbona, but the man who actually led the army was Guillaume de Durfort, who died on the field. On the Aretine side, Count Guido Novello commanded the reserve cavalry."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "The numbers in the sources vary. The Guelph side would have had about 10,000 foot soldiers and between 1,600 and 2,000 horsemen. The Ghibelline side, about 8,000 to 10,000 foot soldiers and some 800 horsemen. Florence's cavalry was numerous but inexperienced and undisciplined. The infantry was solid.",
        { h: "The terrain and the formations" },
        "The plain of Campaldino, in the Casentino, between Pratovecchio and Poppi. The Florentines drew up a crescent-shaped formation: in front, a shock cavalry; in the center, the main cavalry; on the two ends, the infantry, with [[crossbows|besta]] and [[pavises|pavês]], a little advanced; behind, the baggage wagons; at the rear, a [[reserve|reserva]] of infantry and cavalry.",
        "The Aretines formed in four lines: two of cavalry, one of infantry and a last one, the reserve, of cavalry.",
        { h: "The battle" },
        { formation: true },
        "The Aretines attacked first, with the first three lines. The charge scattered the Florentine front cavalry and pushed the main body back toward the wagons. It was the most dangerous moment for the Guelphs.",
        "But the crescent formation worked like a trap. The infantry on the ends closed in on the attackers and hit them from both sides, with crossbow bolts. The Aretine cavalry lost its momentum and was squeezed.",
        "Then the reserve came in. Corso Donati had orders not to move. According to Villani, he said that if they lost, he would die on the field with his fellow citizens. He attacked the Aretine flank. The blow separated the cavalry from the infantry. Guido Novello, seeing the battle lost, took the reserve back to Poppi, and the Arezzo cavalry was surrounded. The infantry, alone, was destroyed.",
        "The bishop and Buonconte died. Late in the afternoon, a storm broke, and the pursuit stopped.",
        { note: "In Villani's accounts, Corso Donati disobeys an order and becomes a hero. Since Villani wrote decades later and belonged to the Guelph party, the episode may have been shaped to glorify Florence, and historians treat it with care." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Guelphs had about 300 dead. The Aretines, about 1,700 dead and between 1,000 and 2,000 prisoners (the figure of 2,000 is attributed to Dante). The dead were buried in mass graves near the convent of Certomondo. Prisoners whom nobody ransomed died in Florence's jails. The podestà of Florence, Ugolino de' Rossi, entered the city under a canopy of cloth of gold.",
        { h: "Why it matters" },
        "Campaldino secured Guelph power in Tuscany and weakened Arezzo. Soon after, Florence split into Whites and Blacks, and Dante, who was a White, was exiled in 1302 and never returned. The Divine Comedy was written in exile.",
        { h: "Curiosities and controversies" },
        { note: "Buonconte in the Purgatorio: in canto V, Buonconte's spirit tells how, wounded in the throat, he fled on foot to a river and fell, and how a storm made the river swell and carry his body away, without anyone finding it. It is a poetic version: how far it reflects what actually happened is not known." },
        { note: "The bishop's bones: in 2008, bone remains were found in the church of Certomondo, believed to be those of Bishop Guglielmino." }
      ]}
    ]
  },

  fornovo: {
    war: "First Italian War (1494–1498)",
    hook: "Both sides sang victory: the French king escaped, and the Italian league kept his baggage.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "At the end of the 15th century, Italy was a mosaic of rich and quarrelsome cities and kingdoms: Milan, Venice, Florence, the papacy, Naples. They were rich and, compared with the kingdoms of France and Spain, militarily fragile. The French king Charles VIII, 24 years old, had an old claim to the throne of Naples. In 1494, he accepted the invitation of Ludovico Sforza of Milan, who wanted help against the Neapolitans, and crossed the Alps with a first-rate army, with bronze artillery that the Italian cities did not know how to face.",
        "The [[Italian Wars|guerras italianas]] began this way. Charles crossed Italy almost without fighting, passed through Florence and Rome, and entered Naples on 22 February 1495. But conquering was easier than holding. The pope, Venice, Milan (which changed sides), the emperor and Spain formed a league against him, proclaimed in Venice on 31 March.",
        { h: "The road to Fornovo" },
        { timeline: [
          ["1494", "Charles VIII enters Italy with the French army."],
          ["22 Feb 1495", "Charles enters Naples."],
          ["31 Mar 1495", "The league against France is proclaimed in Venice."],
          ["May 1495", "Charles leaves Naples and heads back north with part of the army."],
          ["6 July 1495", "The league blocks the way in the Taro valley. Battle of Fornovo."],
          ["15 July", "Charles reaches Asti, in friendly territory."],
          ["Oct 1495", "Charles leaves Italy."]
        ]},
        "The king needed to get home with what he had. The league, with more men and the power to cut off his way, wanted to destroy the French army before it crossed the Alps. But one ally was missing: the German contingent of Emperor Maximilian never arrived, because he was held up at the Diet of Worms."
      ]},
      { n: "02", title: "The Leaders", blocks: [
        { h: "Charles VIII of France, 25 years old" },
        "Young and full of crusading dreams, he saw the conquest of Naples as the first step toward attacking the Turks. At Fornovo, his goal was simpler: to get home.",
        { h: "Francesco II Gonzaga, Marquess of Mantua, 29 years old" },
        "Commander-in-chief of the league. Venice had hired him as captain general, and the Venetian Senate was divided over whether to fight at all. He divided the army into nine bodies, with a plan in which two of them would pin down the French front and center while the rest went around the rear. His uncle Rodolfo died in the battle.",
        { h: "The other names" },
        "On the French side, Marshal de Gié and the Milanese Gian Giacomo Trivulzio, who served France, commanded the first division. On the league side, the Count of Caiazzo had the right wing and Bernardino Fortebraccio the left. The Venetian [[stradiots|estradiotas]], light horsemen from the Balkans, acted as skirmishers."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "The French numbered 10,000 to 11,000 men, including Swiss mercenaries, with a lot of artillery. The league had between 14,500 and 21,500, according to the sources, and more horsemen, but no comparable artillery. The gap between the historians' numbers is large, and almost all acknowledge that the league outnumbered the French.",
        { h: "The terrain" },
        "The valley of the Taro River, near Fornovo, some 30 km southwest of Parma. The league held the right bank; the French came down the left bank, toward the plain. A storm had left the ground muddy.",
        { h: "The battle" },
        "Before the fighting, a French reconnaissance patrol had been destroyed by the stradiots. On 6 July, the French column came down the valley with the artillery in front, covering the river flank. The cannon opened fire but did little damage: one witness counted fewer than ten dead from cannon shot on both sides. When it began to rain, the French powder got wet and the guns fell silent.",
        "The French heavy cavalry attacked, and the disordered Italian ranks scattered within minutes. The Swiss [[halberdiers|alabarda]] held off the Milanese cavalry. Francesco Gonzaga fought in the front rank and, according to accounts, captured the Bastard of Bourbon. Rodolfo Gonzaga was killed.",
        "Meanwhile, the stradiots and other light horsemen fell on the French baggage. Many league soldiers stopped fighting to plunder. Bernardino Fortebraccio later told the Venetian Senate that the league could have won if its men had stayed in the fight.",
        "After a little more than an hour, the French fell back to a hill, and both sides camped. Later, the king asked for a truce and slipped away at night.",
        { h: "The losses" },
        "The numbers vary widely. The league lost between 2,000 and 4,000 men; the French, between 100 and 1,200. The chronicler Paolo Giovio spoke of 4,000 dead for the league and 1,000 French, and a modern historian, Santosuosso, considers those numbers the closest to reality. Other estimates are lower. The baggage the league took was valued at about 300,000 ducats, an estimate that each source tells differently."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Who won? Venice celebrated, with the capture of Mathieu de Bourbon and the king's baggage. Francesco Gonzaga also called himself the winner and commissioned from Mantegna the 'Madonna of Victory' (now in the Louvre), for a church in Mantua. But the French army left the valley, reached Asti on 15 July and returned to France. The historian Guicciardini wrote that general opinion gave the victory to the French. Gonzaga, in private, admitted it was a close thing.",
        "In Naples, Ferdinand II returned to the city the day after the battle. Charles lost everything he had conquered. He died in 1498, after hitting his head on a doorframe, and left debts.",
        { h: "Why it matters" },
        "Fornovo showed Europe's kings how rich and fragile Italy was. In the following decades, France, Spain and the Empire fought over control of the peninsula, and Italy became a battlefield.",
        { h: "Curiosities and controversies" },
        { note: "Who won: it depends on the criterion. If winning meant destroying Charles's army or capturing him, the league failed. If it meant keeping the field and the baggage, it won. Most historians give the edge to the French." },
        { note: "The artillery: despite the fame of the French guns, at Fornovo artillery fire killed few. The rain wet the powder, and what decided the day were the horsemen and the Swiss." }
      ]}
    ]
  },

  ravenna: {
    war: "War of the League of Cambrai (1508–1516)",
    hook: "The 22-year-old French general won the battle and died in it.",
    chapters: [
      { n: "01", title: "The World Before", blocks: [
        "In 1508, Pope Julius II, France, Spain and the Empire formed the [[League of Cambrai|liga de cambrai]] to seize lands from Venice. Venice lost a great deal of territory. But the pope feared France more than Venice and, in 1511, changed sides: he formed the [[Holy League|liga santa]] with Spain and Venice, to drive the French out of Italy.",
        "King Louis XII sent his nephew Gaston de Foix, Duke of Nemours, 22 or 23 years old, to Italy. In a few weeks, in the winter of 1512, Gaston relieved Bologna, took Brescia, where the garrison and civilians were massacred, and made Bergamo pay to be spared. The Spanish and papal army, commanded by Ramón de Cardona, avoided combat until it had a strong position. The French followed it to Ravenna.",
        { h: "The road to Ravenna" },
        { timeline: [
          ["1508", "League of Cambrai against Venice."],
          ["1511", "Pope Julius II forms the Holy League against France."],
          ["Feb 1512", "Gaston de Foix takes Brescia."],
          ["9 Apr 1512", "The French bombardment fails to breach Ravenna's walls."],
          ["11 Apr 1512", "Battle of Ravenna, on Easter Sunday."],
          ["Jun–Aug 1512", "The Swiss descend on Lombardy, and the French leave Italy."]
        ]},
        "Ravenna was the pope's last stronghold in the Romagna, and Julius II demanded that the army relieve it. Gaston, for his part, was in a hurry: King Henry VIII of England threatened to invade France, and a good part of the troops would have to go back. After the bombardment of 9 April failed, he decided to fight in the open field."
      ]},
      { n: "02", title: "The Leaders", blocks: [
        { h: "Gaston de Foix, Duke of Nemours" },
        "The king's nephew, brilliant and impatient. In a few weeks he ran through northern Italy. At Ravenna he needed a quick battle and got one. He died chasing a retreating column with very few men.",
        { h: "Alfonso d'Este, Duke of Ferrara" },
        "A French ally and the lord of one of the best artilleries in Europe, with about 50 guns. His use of fire on the flank decided the first phase of the battle.",
        { h: "Ramón de Cardona and Pedro Navarro" },
        "Cardona was viceroy of Naples and commanded the relief army. Navarro, born in Navarre, an engineer and commander of the infantry, designed the entrenched camp.",
        { h: "The other names" },
        "On the French side, Jacques de La Palice and Yves d'Alègre, who commanded the rearguard and died in the battle, as well as the knight Bayard. On the Spanish and papal side, Fabrizio Colonna, commander of the papal cavalry, and Fernando d'Ávalos, Marquis of Pescara, of the light cavalry."
      ]},
      { n: "03", title: "Step by Step", blocks: [
        { h: "The forces" },
        "The numbers in the sources diverge. The French and Ferrarese would have had 21,000 to 26,000 men: [[gendarmes|gendarmes]], German [[landsknechts|lansquenetes]] under Jacob Empser, Gascon and Picard infantry, Italians and 40 to 50 guns. The relief army would have had 16,000 to 17,000: Spanish infantry, Italians, cavalry and about 30 guns. There were another 5,000 men inside Ravenna.",
        { h: "The terrain" },
        "South of Ravenna, beside the Ronco River. The Spaniards entrenched themselves in a semicircular camp, with the river on one side and a ditch and an embankment on the others. In front, some 30 wagons with blades, spears and small guns, designed by Navarro. The space, according to historians, was cramped and poorly protected against artillery.",
        { h: "The battle" },
        { formation: true },
        "The French halted about 200 paces from the camp. A cannonade began that lasted more than two hours, described by a modern historian as the most violent between two armies in the field that the world had yet seen. The Spaniards inflicted many casualties on the French infantry.",
        "Alfonso d'Este then took some 24 guns from the front and moved them to the flank, from where they fired at the cavalry. The Spanish infantry lay down on the ground to protect themselves, and the cavalry was left exposed. D'Alègre also sent two heavy guns across the Ronco, to hit Colonna's cavalry from behind.",
        "Under that fire, the Spanish cavalry could not bear to stand still. Fabrizio Colonna attacked, against Navarro's orders. Carvajal, Pescara and others advanced. The French cavalry held. When d'Alègre arrived with fresh [[gendarmes|gendarmes]], the Spanish cavalry broke. Pescara was captured, and Cardona fled to the south.",
        "Meanwhile, the landsknechts stormed the camp and were punished by the Spanish [[rodeleros|rodeleiros]] in hand-to-hand fighting. Empser died. The Gascons and Picards pressed the Italians, and the French cavalry began attacking the infantry from several sides. Navarro was captured, and Colonna surrendered to Alfonso d'Este, on condition that he not be handed over to the French.",
        "Most of the Spanish infantry withdrew in good order, with one battalion intact. Gaston, who was chasing the retreat with about fifteen men, was surrounded and killed. According to the chroniclers, the body had more than a hundred wounds. His cousin Odet de Foix was gravely wounded.",
        { note: "The losses are uncertain and very large: estimates add up to 15,000 to 20,000 dead on both sides, with about 7,000 on the Spanish and papal side and 3,000 to 4,500 on the French side, according to one source." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "It was a French victory, and Gaston's death emptied it. Guicciardini wrote that the army's valor and ferocity were largely lost without him. La Palice took command, did not pursue the beaten army and went back to the siege of Ravenna. The city surrendered and was sacked for three days. Estimates of civilian dead range from about 2,000 to 17,000.",
        "The French had no time to reap what they had won. In June, the Swiss, hired by the pope and led by Cardinal Schiner, entered Lombardy, and by August the French had left Italy. The Sforza returned to Milan. France would win again only at Marignano, in 1515.",
        { h: "Why it matters" },
        "Ravenna was one of the bloodiest battles of the Italian Wars and showed the power of artillery against an entrenched camp. It also showed that a brilliant commander could win a battle and lose the campaign.",
        { h: "Curiosities and controversies" },
        { note: "The Monster of Ravenna: a month earlier, a monstrous birth, with a horn, wings and an eye on its knee, was recorded by the Florentine Luca Landucci and read as an omen. Later, the surgeon Ambroise Paré saw it as a sign of God's wrath against Louis XII's army." },
        { note: "The tomb: Gaston's body was taken to Milan and buried in the cathedral. A monument by Bambaja was begun but never finished. In 1557, a column was raised near the battlefield, the Column of the French." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  legnano: {
    terrain: [
      { t: "note", x: 86, y: 5, l: "Como (north)" },
      { t: "note", x: 12, y: 66, l: "Milan (south)" },
      { t: "note", x: 8, y: 20, l: "← toward the Ticino" }
    ],
    units: [
      { id: "lInf", s: "a", k: "inf", w: 24, h: 6, l: "Milanese infantry" },
      { id: "lCar", s: "a", k: "camp", w: 9, h: 5, l: "Carroccio" },
      { id: "lCav", s: "a", k: "cav", w: 14, h: 5, l: "League cavalry" },
      { id: "iVan", s: "b", k: "cav", w: 7, h: 3.5, l: "Imperial vanguard" },
      { id: "iMain", s: "b", k: "cav", w: 22, h: 5, l: "German cavalry (Frederick)" }
    ],
    steps: [
      { t: "Frederick comes from the north on his way to Pavia, with cavalry only: he left the infantry behind to go faster. The League leaves Milan with the infantry and the carroccio, and puts the cavalry in front.",
        p: { iMain: [70, 9], iVan: [62, 16], lCav: [44, 46], lInf: [30, 54], lCar: [30, 61] } },
      { t: "Near Borsano, some 700 League horsemen meet some 300 imperials, the vanguard.",
        p: { iVan: [56, 28], lCav: [48, 36] } },
      { t: "The vanguard falls back and draws the League toward the main body. Then all the German cavalry attacks and drives the League cavalry from the field.",
        p: { iVan: [46, 32], iMain: [54, 30], lCav: [14, 56] } },
      { t: "The Germans chase as far as the carroccio, planted on a rise. The Milanese infantry forms a semicircle of shields and long spears.",
        p: { iMain: [32, 42], iVan: [24, 44] } },
      { t: "Charge after charge, the horsemen do not break the core of the infantry. It is a struggle of endurance, lasting hours.",
        p: { iMain: [34, 44], iVan: [22, 45], lInf: [30, 52] } },
      { t: "The League cavalry regroups and returns, attacking the imperials from the sides and from behind.",
        p: { lCav: [52, 38, -30], iMain: [34, 43] } },
      { t: "The imperial standard-bearer is killed and the standard is lost. Frederick falls from his horse and vanishes from sight. The news runs that the emperor is dead.",
        p: { lCav: [44, 38], iMain: [32, 42], iVan: [22, 44] } },
      { t: "The imperial cavalry flees west, toward the Ticino. Many are killed, captured or drowned. Frederick escapes and reappears in Pavia days later.",
        p: { iMain: [18, 22], iVan: [12, 28], lCav: [34, 34] }, x: ["iMain", "iVan"] }
    ]
  },

  montaperti: {
    terrain: [
      { t: "hill", x: 50, y: 12, rx: 44, ry: 10, l: "Hill of Montaperti (Guelph camp)" },
      { t: "sea", x: 0, y: 44, w: 100, h: 3, l: "Arbia River" },
      { t: "note", x: 84, y: 67, l: "The sun shines in the Florentines' eyes" }
    ],
    units: [
      { id: "sArr", s: "a", k: "cav", w: 8, h: 4, l: "Count of Arras (ambush)" },
      { id: "sGio", s: "a", k: "cav", w: 16, h: 5, l: "Giordano's Germans" },
      { id: "sAld", s: "a", k: "inf", w: 22, h: 5, l: "Sienese infantry" },
      { id: "sBig", s: "a", k: "camp", w: 10, h: 5, l: "Siena's carroccio (Bigozzi)" },
      { id: "fInf", s: "b", k: "inf", w: 34, h: 6, l: "Guelph infantry" },
      { id: "fCav", s: "b", k: "cav", w: 16, h: 5, l: "Guelph cavalry" },
      { id: "fCar", s: "b", k: "camp", w: 9, h: 5, l: "Florence's carroccio" },
      { id: "fCamp", s: "b", k: "camp", w: 14, h: 5, l: "Guelph camp" }
    ],
    steps: [
      { t: "The Guelphs wait on high ground. The Sienese cross the Arbia in four bodies and wait for the sun to rise. The Count of Arras's body stays hidden on a flank.",
        p: { fInf: [50, 22], fCav: [22, 24], fCar: [50, 12], fCamp: [82, 10], sArr: [92, 52], sGio: [28, 56], sAld: [60, 56], sBig: [50, 64] } },
      { t: "Around ten, Giordano's German horsemen attack uphill, and the Sienese infantry climbs alongside. The Guelph right wing is pushed back.",
        p: { sGio: [26, 36], sAld: [58, 36], fCav: [20, 24] } },
      { t: "Until about three in the afternoon, according to the chronicles, the Florentines, on high ground and more numerous, gain ground.",
        p: { fInf: [50, 28], sAld: [58, 40], sGio: [28, 40] } },
      { t: "Niccolò da Bigozzi, who was supposed to guard the carroccio, joins the fight and steadies the Sienese line.",
        p: { sBig: [50, 48] } },
      { t: "Bocca degli Abati, supposedly a Guelph, cuts off the hand of the Florentine standard-bearer. Confusion grows, and an attempt to seize Florence's carroccio fails.",
        p: { fCar: [50, 14], sBig: [52, 42] } },
      { t: "Late in the afternoon, the Germans of the Count of Arras burst out of the ambush shouting 'Saint George' and attack the rear. The Florentine commander dies.",
        p: { sArr: [68, 12], fInf: [50, 30] } },
      { t: "The Guelph army falls apart. The cavalry is almost entirely destroyed, the camp is plundered and the carroccio is taken.",
        p: { sArr: [50, 14], sGio: [30, 30], sAld: [60, 32], sBig: [50, 18] }, x: ["fInf", "fCav", "fCar", "fCamp"] },
      { t: "The pursuit lasts until night. Dante wrote that the Arbia was colored red.",
        p: { sGio: [24, 20], sAld: [64, 22], sArr: [48, 10] } }
    ]
  },

  campaldino: {
    terrain: [
      { t: "note", x: 84, y: 5, l: "Toward Poppi ↑" },
      { t: "note", x: 14, y: 67, l: "Toward Pratovecchio" }
    ],
    units: [
      { id: "gFed", s: "a", k: "cav", w: 16, h: 3.5, l: "Feditori (front cavalry)" },
      { id: "gCav", s: "a", k: "cav", w: 22, h: 5, l: "Florentine cavalry" },
      { id: "gInfL", s: "a", k: "inf", w: 10, h: 12, l: "Infantry and crossbows" },
      { id: "gInfR", s: "a", k: "inf", w: 10, h: 12, l: "Infantry and crossbows" },
      { id: "gWag", s: "a", k: "camp", w: 20, h: 4, l: "Wagons and baggage" },
      { id: "gRes", s: "a", k: "cav", w: 14, h: 5, l: "Reserve (Corso Donati)" },
      { id: "aC1", s: "b", k: "cav", w: 22, h: 4, l: "Aretines, 1st line" },
      { id: "aC2", s: "b", k: "cav", w: 22, h: 4, l: "2nd line" },
      { id: "aInf", s: "b", k: "inf", w: 26, h: 4, l: "3rd line: infantry" },
      { id: "aRes", s: "b", k: "cav", w: 14, h: 4, l: "Reserve (Guido Novello)" }
    ],
    steps: [
      { t: "Florence forms a crescent: shock cavalry in front, the main cavalry in the center, infantry on the ends, wagons behind and a reserve. Arezzo forms four lines: cavalry, cavalry, infantry, cavalry.",
        p: { gFed: [50, 36], gCav: [50, 42], gInfL: [28, 40], gInfR: [72, 40], gWag: [50, 54], gRes: [50, 63], aC1: [50, 22], aC2: [50, 16], aInf: [50, 10], aRes: [50, 4] } },
      { t: "The Aretines attack first, with the first three lines.",
        p: { aC1: [50, 32], aC2: [50, 26], aInf: [50, 20], aRes: [66, 8] } },
      { t: "The charge scatters the front cavalry and pushes the main cavalry back toward the wagons.",
        p: { gFed: [50, 40], gCav: [50, 48], aC1: [50, 38], aC2: [50, 33], aInf: [50, 28] }, x: ["gFed"] },
      { t: "The infantry on the ends closes in on the attackers and shoots them from both sides, with crossbows.",
        p: { gInfL: [38, 38], gInfR: [62, 38] } },
      { t: "Corso Donati, who was supposed to stay in reserve, disobeys and attacks the Aretine flank. According to Villani, he said that if they lost, he would die with his fellow citizens.",
        p: { gRes: [70, 34, -50] } },
      { t: "The Aretine cavalry is surrounded and cut off from the infantry. Guido Novello sees the battle lost and takes his reserve back to Poppi.",
        p: { aRes: [86, 4], aC1: [48, 40], aC2: [48, 35], gInfL: [40, 36], gInfR: [60, 36] }, x: ["aC1", "aC2"] },
      { t: "The Aretine infantry, alone, is enveloped from the ends and destroyed.",
        p: { aInf: [50, 30], gInfL: [42, 32], gInfR: [58, 32], gCav: [50, 38] }, x: ["aInf"] },
      { t: "Bishop Guglielmino and Buonconte da Montefeltro die. A storm ends the pursuit.",
        p: { gCav: [50, 30], gRes: [60, 24, -50] } }
    ]
  },

  ravenna: {
    terrain: [
      { t: "sea", x: 90, y: 0, w: 4, h: 70, l: "Ronco River" },
      { t: "note", x: 12, y: 5, l: "Ravenna (besieged)" }
    ],
    units: [
      { id: "fVan", s: "a", k: "cav", w: 20, h: 5, l: "Gendarmes (La Palice)" },
      { id: "fInf", s: "a", k: "inf", w: 20, h: 5, l: "Landsknechts (Empser)" },
      { id: "fGas", s: "a", k: "inf", w: 16, h: 5, l: "Gascons and Picards" },
      { id: "fArt", s: "a", k: "art", w: 14, h: 4, l: "Ferrara artillery (d'Este)" },
      { id: "fRear", s: "a", k: "cav", w: 14, h: 5, l: "Reserve (d'Alègre)" },
      { id: "fFox", s: "a", k: "cav", w: 6, h: 3.5, l: "Gaston de Foix" },
      { id: "sCamp", s: "b", k: "camp", w: 36, h: 5, l: "Entrenched camp (ditch, embankment and wagons)" },
      { id: "sInf", s: "b", k: "inf", w: 26, h: 5, l: "Spanish infantry (Navarro)" },
      { id: "sCol", s: "b", k: "cav", w: 14, h: 5, l: "Colonna's cavalry" },
      { id: "sPes", s: "b", k: "cav", w: 12, h: 5, l: "Light cavalry (Pescara)" }
    ],
    steps: [
      { t: "The Spaniards entrench beside the Ronco River, with Colonna near the water and Pescara on the other flank. The French arrive in line, with the Ferrara artillery in front.",
        p: { sCamp: [42, 12], sInf: [42, 19], sCol: [76, 20], sPes: [16, 26], fVan: [46, 52], fInf: [30, 44], fGas: [62, 44], fArt: [46, 38], fRear: [68, 62], fFox: [46, 64] } },
      { t: "The two artilleries trade fire at about 200 paces, for more than two hours. The Spanish shots do heavy damage to the French infantry.",
        p: { fArt: [46, 33], fInf: [30, 39], fGas: [62, 39] } },
      { t: "D'Este moves some 24 guns to the flank and begins hitting the Spanish cavalry. The infantry, lying down, is sheltered, but the cavalry is exposed.",
        p: { fArt: [72, 34, -50] } },
      { t: "Two heavy guns of d'Alègre cross the Ronco and hit Colonna's cavalry from behind. Cardona does not respond.",
        p: { fRear: [96, 34] } },
      { t: "Under that fire, the Spanish cavalry attacks (Colonna, against Navarro's orders). The gendarmes hold.",
        p: { sCol: [68, 34], sPes: [30, 36], fVan: [48, 44] } },
      { t: "D'Alègre's rested cavalry arrives, and the Spanish cavalry breaks. Pescara is captured, and Cardona flees south.",
        p: { fRear: [72, 30], sPes: [20, 30] }, x: ["sPes"] },
      { t: "The landsknechts storm the camp and suffer in hand-to-hand fighting with the Spanish rodeleros. Empser dies. The Gascons and Picards attack the Italians, and the French cavalry attacks the infantry from several sides.",
        p: { fInf: [38, 22], fGas: [58, 24], fVan: [46, 28] } },
      { t: "Navarro is captured, and Colonna surrenders to Alfonso d'Este. Most of the Spanish infantry withdraws in good order.",
        p: { sInf: [16, 8], sCamp: [42, 10] }, x: ["sCol", "sCamp"] },
      { t: "Gaston de Foix attacks a retreating Spanish column with a few men and is killed.",
        p: { fFox: [20, 10] }, x: ["fFox"] }
    ]
  }
});
