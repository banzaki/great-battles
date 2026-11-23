// In-depth battles, batch bi: poitiers, varna, montanhabranca, lutzen, naseby (great-battles pack, part 2).
// Checked against the English, Portuguese, Polish, Czech and Swedish Wikipedia articles on the Battles of Poitiers
// (1356), Varna, White Mountain, Lützen (1632) and Naseby, and the works those pages cite (among them Green,
// Sumption and Rogers on Poitiers, Čechura on White Mountain, Wilson on the Thirty Years' War). Where sources
// disagree the text says so.
// No diagram for Varna: the sources on the deployment and moves are thin and contradict each other.
// The route of the Captal de Buch at Poitiers is not known; the diagram draws it schematically and says so.

Object.assign(GLOSSARY, {
  "gascões": "People of Gascony, in south-western France, a region that then belonged to the king of England. Many fought on the English side.",
  "captal de buch": "A noble title from Gascony. The Captal de Buch was Jean de Grailly, a Gascon lord who fought for the English.",
  "jacquerie de 1358": "A peasant revolt in northern France in 1358, during the crisis that followed Poitiers. The nobility crushed it in a few weeks.",
  "tratado de brétigny": "A peace treaty of 1360 between England and France. France gave up large territories, and the ransom of King John II was set at 3 million écus.",
  "paz de szeged": "A ten-year truce signed in 1444 between Sultan Murad II and Hungary. The crusaders broke it a few weeks later.",
  "defenestração de praga": "On 23 May 1618, Protestant nobles threw two of the emperor's representatives out of a window of Prague Castle. The act began the Bohemian revolt.",
  "estados da boêmia": "The assembly of nobles, knights and towns of Bohemia, which decided taxes and laws together with the king. It deposed the Habsburgs in 1619.",
  "liga católica de 1609": "An alliance of Catholic German princes, founded in 1609 and led by Maximilian of Bavaria, to defend the Catholic Church in the Holy Roman Empire.",
  "tércio de infantaria": "A large block of pikemen and musketeers, created by Spain. It was a dense square, with pikes in the middle and firearms at the corners.",
  "recatolicização": "The Habsburg policy of forcing Protestant subjects to convert to Catholicism or leave the country.",
  "generalíssimo imperial": "Supreme commander of all the emperor's armies. Wallenstein received the post, with almost unlimited powers, in 1632.",
  "cabeças redondas": "Nickname of the supporters of Parliament in the English Civil War. It comes from the short hair of many London apprentices.",
  "exército de novo modelo": "A professional army created by Parliament in early 1645, with officers chosen for merit, not rank, and regular pay.",
  "ordenança de autonegação": "A law of Parliament, of December 1644, that barred its members from commanding armies. It opened the way for Fairfax and the New Model Army.",
  "forlorn hope": "A small group of picked musketeers sent ahead for the first skirmishes. The name is from the Dutch verloren hoop, 'lost troop'.",
  "primeira guerra civil inglesa": "The war between King Charles I and the English Parliament (1642–1646), which ended in a victory for Parliament."
});

Object.assign(DEEP, {
  poitiers: {
    war: "The Hundred Years' War (1337–1453)",
    hook: "Six thousand English and Gascons, behind a hedge, captured the king of France.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1356, the [[Hundred Years' War|guerra dos cem anos]] had already lasted almost twenty years. King Edward III of England claimed the French throne, and ten years earlier, at Crécy, his archers had shattered the cavalry of King Philip VI. Gascony, in the south-west, belonged to the English, and they set out from there to attack.",
        "On 4 August 1356, Edward III's eldest son, also named Edward and known as the Black Prince, left Bergerac, in Gascony, with about 6,000 fighting men and some 4,000 non-combatants. It was a [[chevauchée|cavalgada]]: a march to burn, plunder and lay waste the countryside, to weaken the king of France and enrich the soldiers. The historian David Green describes it as deliberately destructive and very brutal.",
        { h: "The road to Poitiers" },
        { timeline: [
          ["4 Aug 1356", "The Black Prince leaves Bergerac, in Gascony, on the chevauchée."],
          ["c. 20 Aug", "King John II abandons the siege of Breteuil and marches for the Loire."],
          ["10 Sep", "John crosses the Loire at Blois and joins his son."],
          ["13 Sep", "The Prince crosses the river Creuse. Two days later he learns that John has passed him."],
          ["18 Sep", "Cardinal Talleyrand tries to negotiate. The talks fail."],
          ["19 Sep", "The battle."]
        ]},
        "King John II dropped the siege of Breteuil, in Normandy, around 20 August and raced south. On 15 September, the Prince learned that John had gone past him and now stood between the English and Gascony. He turned back to intercept him and took position in the forest of Nouaillé, about 8 km from Poitiers.",
        "The day before, Cardinal Hélie de Talleyrand-Périgord, sent by Pope Innocent VI, tried to prevent the fight. The Prince agreed to make large concessions in return for free passage to Gascony, provided his father approved them. John was inclined to accept, but his senior advisers found the terms humiliating, and he refused. A second attempt, at dawn on 19 September, was also refused. The historians Sumption and Hoskins note that Edward III had given his son permission to make a truce, which makes one doubt how seriously the Prince meant the offer."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Edward, the Black Prince, aged 26" },
        "Edward III's eldest son, he had fought at Crécy at 16. Here he commanded a small army, far from home, among much more numerous enemies. He had no way of winning in the open field. He chose ground that was bad for a cavalry charge, fortified it and waited for the French to come. It was the English tactic since Crécy: let the enemy hurt itself against the [[archers|arco longo]].",
        { h: "John II, aged 37" },
        "King of France since 1350, he had grown up with the ideal of chivalry. He was called 'the Good', in the sense of brave, and he had founded the Order of the Star, whose members swore never to retreat. On the field, he decided that most of his men would fight on foot, so that horses would not become targets for the English archers, and he kept only two groups of picked horsemen to open the way.",
        { h: "The other names" },
        "On the English side, Thomas Beauchamp, Earl of Warwick, commanded the left wing, and William Montagu, Earl of Salisbury, the right. Beside them were the Earl of Oxford and Lord Suffolk. In the centre, with the Prince, were John Chandos and James Audley. The [[Captal de Buch|captal de buch]], Jean de Grailly, a [[Gascon|gascões]] lord, led the small mounted force that decided the day. On the French side, the [[marshals|marechal]] Arnoul d'Audrehem and Jean de Clermont led the groups of horsemen, and the [[constable|condestável]] Walter of Brienne one of the four divisions on foot. The [[dauphin|delfim]] Charles, aged 18, led the second."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Modern historians put the Anglo-Gascon army at about 6,000 men: some 3,000 [[men-at-arms|homem de armas]], 2,000 English and Welsh archers and 1,000 Gascon foot soldiers. Some accounts from the time say 4,800 or 5,000. The French were perhaps 14,000 to 16,000: 10,000 to 12,000 men-at-arms, some 2,000 [[crossbowmen|besta]] and some 2,000 other foot soldiers.",
        { h: "The terrain" },
        "A wooded hill in the forest of Nouaillé. The Anglo-Gascons dug ditches and pits and raised barricades. One part of the line lay at the edge of a marsh, which horses could not cross. Salisbury's men held a thick hedge with a single gap. The French would have to attack on foot, through those openings, to reach them.",
        { h: "The morning" },
        "After dawn, the French lined up about 450 metres away. Two hours later, they saw movement in the English ranks and thought the enemy was retreating. Historians argue about what it was: wagons, the Prince's standard or a deliberate manoeuvre.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, the English stood in three divisions behind the hedge: Warwick on the left, by the marsh, Salisbury on the right, and the Prince in the centre, in reserve. The French came in four divisions on foot, one behind the other, with two groups of picked horsemen in front.",
        "Second, the cavalry attacked. Audrehem charged Warwick, but the marsh stopped the horses, and the archers shot the crossbowmen coming in support. The Earl of Oxford led archers along the edge of the marsh and shot the unarmoured hindquarters of the horses. Audrehem was captured. Clermont attacked Salisbury at the gap in the hedge, was killed, and his horsemen fell back.",
        "Third, the division of the constable Brienne, on foot, was driven back. Brienne died.",
        "Fourth, the dauphin's division, with about 4,000 men-at-arms on foot, forced the gap in the hedge, and the hand-to-hand fight lasted about two hours. The Duke of Bourbon died and the dauphin's standard-bearer was captured. The guards pulled the dauphin and his brothers out, and the rest of the division fell back in good order.",
        "Fifth, the Duke of Orléans left the field with about half of his 3,200 men-at-arms. The other 1,600 or so made a weak attack, beaten back without difficulty. Many of Warwick's men ran after them, with an eye on prisoners who would pay [[ransom|resgate]].",
        "Sixth, King John's division, of about 4,000 men-at-arms on foot, advanced with the [[oriflamme|oriflamme]] raised, a sign that no prisoners would be taken. The English were exhausted and almost out of arrows. The Prince sent the Captal de Buch, with a small mounted group, to ride around the flank. The exact route is not known.",
        "Seventh, the Prince ordered a general advance. The archers, out of arrows, fought with swords and axes. Warwick's men returned to the line. Then the captal's roughly 160 men appeared in the French rear. His archers dismounted and shot, and his 60 men-at-arms charged.",
        "Eighth, the king's line broke. The French around him were pushed against a bend of the river Miosson, the Champ d'Alexandre, where they were surrounded and split up. King John and his youngest son, Philip, surrendered. The oriflamme's standard-bearer died and the banner was taken. The English chased the fugitives to Poitiers, whose citizens shut the gates, and many Frenchmen were killed outside."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The losses" },
        "On the Anglo-Gascon side, about 40 men-at-arms died, and a much larger, unknown number of foot soldiers. On the French side, about 2,500 men-at-arms died, and more than 4,500 were killed or captured. The numbers of foot soldiers killed or captured vary widely from source to source, from 1,500 to 3,800.",
        { h: "What changed" },
        "The king of France was a prisoner, and the dauphin, aged 18, was left at the head of a country without a king and without an army. In the spring of 1357, the two sides signed a two-year truce. In 1358, the [[Jacquerie of 1358|jacquerie de 1358]] broke out. The first Treaty of London (May 1358) lapsed when France could not pay the first instalment of the ransom. The second, of 1359, was rejected by the dauphin and the Estates General. Only in May 1360, after a new campaign by Edward III, came the [[Treaty of Brétigny|tratado de brétigny]]: England kept about a third of France, and the king's ransom was set at 3 million écus.",
        "The French learned the lesson. When the war resumed in 1369, the dauphin, by then King Charles V, avoided pitched battles and gradually won back what had been lost. The war only ended in 1453, with a French victory.",
        { note: "According to the chronicler Jean Froissart, after the battle the Prince personally served dinner to the captive king and refused to sit at the table with him. The scene is traditional, but it comes from a chronicle written to glorify chivalry, and historians treat it with caution." },
        { note: "The members of the Order of the Star had sworn never to retreat. Many fought to the death at Poitiers, which partly explains the number of French nobles killed or captured." },
        { note: "Orléans's role is a mystery. The official accounts said the king had ordered him to take the four sons to safety, but few believed it. Three of the sons left the field, among them the dauphin. The fourth, Philip, went back to his father and was captured with him." }
      ]}
    ]
  },

  varna: {
    war: "The Crusade of Varna (1443–1444)",
    hook: "A twenty-year-old king charged at the sultan's tent, and Europe lost the last great army it would send against the Ottomans for decades.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the middle of the 15th century, the [[Ottomans|otomanos]] already controlled much of the Balkans. Hungary, on the frontier, was the kingdom nearest to them. In 1440, the Hungarian throne was given to the king of Poland, Ladislaus III, then 16. His most famous general was John Hunyadi, a Transylvanian noble.",
        "In late 1443, Hunyadi led a long campaign through the Balkans, in the middle of winter, and went so far that he frightened Sultan Murad II. Murad asked for peace. In the summer of 1444, he and the Hungarians signed the [[Peace of Szeged|paz de szeged]], a ten-year truce. In August, after making peace with the Karaman emirate, in Anatolia, the sultan abdicated in favour of his son Mehmed, aged 12.",
        { h: "The road to Varna" },
        { timeline: [
          ["1443", "Hunyadi's long campaign through the Balkans."],
          ["Summer 1444", "Peace of Szeged: a ten-year truce between Hungary and the sultan."],
          ["Aug 1444", "Murad II abdicates in favour of Mehmed, aged 12."],
          ["18 Oct", "The Ottoman army, with Murad, crosses the Bosphorus."],
          ["9–10 Nov", "The crusaders' council of war, and the battle."]
        ]},
        "Cardinal Giuliano Cesarini, [[papal legate|legado papal]] in Hungary, argued that an oath sworn to infidels was not binding, and Pope Eugene IV and Venice backed a new [[crusade|cruzada]]. The crusaders marched fast, bypassing the Ottoman fortresses, and were joined by local Bulgarians. A papal, Venetian and Burgundian fleet tried to close the Dardanelles and the Bosphorus. It failed, and on 18 October the sultan's main army crossed the Bosphorus. According to a poorly sourced version, the vizier Çandarlı Halil Pasha called Murad back to command."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ladislaus III, aged 20" },
        "King of Poland and Hungary. Young and impetuous, he saw in the crusade a chance to make his name. At the council the night before, he backed the plan to attack instead of defending. His name went into Polish history as Warneńczyk, 'the one of Varna'.",
        { h: "John Hunyadi" },
        "The best Hungarian general and the real commander of the crusader army. He was far from home, with allies of many origins. According to a phrase attributed to him, but from an unreliable source, he said at the council: 'To escape is impossible, and to surrender is unthinkable'.",
        { h: "The other names" },
        "Cardinal Cesarini was the main champion of the crusade and, the night before, proposed forming a [[wagon fort|muralha de carroças]], Hussite style, and waiting for the fleet. Murad II, about 40, had reigned for more than 20 years and was an experienced general. On the Christian side were also the Bishop of Oradea, John Dominis, the Bishop of Eger, Simon Rozgonyi, the Croat Franko Talovac and the Hungarian Michael Szilágyi. Mircea II of Wallachia sent horsemen."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are much disputed. The crusader army had Hungarians, Poles and Bohemians (about 16,000 in all) and some 4,000 Wallachians, plus small papal contingents, Teutonic Knights, Bosnians, Croats and Bulgarians. Estimates run from about 16,000 to 20,000, and some accounts give far more. The Ottomans were 40,000 to 60,000, by most counts. All of these figures are estimates.",
        { h: "The terrain" },
        "The crusaders were trapped on a strip of land between the Black Sea, Lake Varna, the Franga plateau and the sultan's army. On the night of 9 November, Cesarini proposed to retreat. Then he changed to a defence behind wagons until the fleet arrived. Most of the Hungarians and Croats agreed, but Hunyadi and the young king refused.",
        { h: "The lines" },
        "The most cited reconstruction puts the Christians in an arc of about 3.5 km. In the centre, about 3,500 men, the king's guards, [[mercenaries|mercenários]] and the banners of nobles, with the Wallachian cavalry in reserve behind. On the right, about 6,500 men, under Dominis, Cesarini, Rozgonyi and Talovac. On the left, some 5,000 under Szilágyi, among them Transylvanians, Bulgarians and German mercenaries. Behind the left stood the wagon circle, defended by 300 to 600 Czech and Ruthenian mercenaries, with [[bombards|bombarda]]. The details vary from one source to another.",
        "On the other side, in the sultan's centre, were the [[janissaries|janízaros]] and levies from Rumelia, behind ditches and two palisades, around two ancient Thracian burial mounds. Murad directed the battle from one of them. On the right were regular troops from Rumelia and [[sipahis]], and on the left the light horsemen called [[akinji]] and sipahis from Anatolia.",
        { h: "The battle" },
        "The Ottoman light cavalry attacked Talovac's Croats first. The Christian left repulsed them with bombards and firearms and chased them in disorder, and the Anatolian cavalry hit the pursuers on the flank. The Christian right tried to flee to the fortress of Galata, across the bay, and was largely killed in the marshes of Lake Varna and the river Devnya. Cardinal Cesarini died there. Only Talovac's men made it back to the wagon circle.",
        "On the other side, the Ottomans attacked Szilágyi's Hungarians and Bulgarians, who repelled the first attack but were attacked again by the sipahis. Hunyadi went to help them with two companies of cavalry and asked the king to wait for him. Ladislaus did not wait. He rode with about 500 Polish knights straight at the Ottoman centre, towards Murad's tent. They almost got there. But the king's horse fell, or was struck, in front of the tent.",
        { h: "The death of the king" },
        "What happened next is not known. Three Turkish chroniclers say a soldier cut off the king's head, but the names vary. According to one tradition, a janissary named Kodża Hyzyr did it, and the head was supposedly kept in honey. Some say, based on a note attributed to Murad himself, that Ladislaus survived the battle and was killed later, in captivity. No Polish or Hungarian witness saw his death, and the body was never found. Hunyadi tried to recover it, but could only organise the retreat. The Christian army lost thousands of men, and more than half was wiped out, according to some accounts."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The losses" },
        "The bishops of Oradea and Eger also died, as well as Cesarini. The figures for the dead vary: some accounts speak of 5,000 dead among the crusaders and 7,000 among the Ottomans, others of tens of thousands dead or captured on the Christian side. The only consensus is that the crusader army was almost destroyed.",
        { h: "What changed" },
        "Hunyadi reached the Danube and was captured by the prince of Wallachia, Vlad Dracul, who released him for a ransom. In 1446, he became governor of Hungary. The Hungarian throne passed to the infant Ladislaus the Posthumous, and Poland went three years without a king, until Casimir IV. In 1448, Hunyadi lost again, at Kosovo. The two defeats discouraged Europe. When Constantinople was besieged in 1453, nobody sent serious help. Only in 1456, at Belgrade, did a Christian victory check the Ottomans, and they would only advance again at Mohács, in 1526.",
        { note: "Ladislaus's body never turned up. In Warsaw, the Tomb of the Unknown Soldier carries the inscription 'WARNA 10 XI 1444'." },
        { note: "The Turkish, Polish and Hungarian chroniclers tell the battle in very different ways, and none saw the whole of it. That is why the order of battle and the numbers here are modern reconstructions, not firm facts." }
      ]}
    ]
  },

  montanhabranca: {
    war: "The Bohemian Revolt and the Thirty Years' War (1618–1648)",
    hook: "One hour of battle decided the fate of Bohemia for three hundred years.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The kingdom of Bohemia was one of the richest in the [[Holy Roman Empire|sacro império]], and most of its nobles were Protestant. Its kings were the [[Habsburgs|habsburgos]] of Vienna, who were Catholic. When it became known that the next king would be Ferdinand, known for persecuting Protestants in Styria, the Bohemian nobles took alarm. On 23 May 1618, in the [[Defenestration of Prague|defenestração de praga]], they threw two of the emperor's representatives, and a clerk, out of a window of the castle. All three survived, but the revolt had begun.",
        "The [[Estates of Bohemia|estados da boêmia]] deposed Ferdinand and, in August 1619, elected the Elector Palatine Frederick V as king, a Calvinist and son-in-law of the king of England. Frederick was crowned in November. Meanwhile, Ferdinand II was elected emperor and gathered allies: the [[Catholic League of 1609|liga católica de 1609]], led by Maximilian of Bavaria, and reinforcements from Spain.",
        { h: "The road to the White Mountain" },
        { timeline: [
          ["23 May 1618", "Defenestration of Prague."],
          ["Aug–Nov 1619", "Frederick V is elected and crowned king of Bohemia."],
          ["1620", "The imperial and League armies conquer western Bohemia and march on Prague."],
          ["7–8 Nov", "The two armies arrive before Prague."],
          ["8 Nov, noon", "The battle, in little more than an hour."],
          ["9 Nov", "The imperials enter Prague."]
        ]},
        "The imperial army, under the Count of Bucquoy, and the League army, under the Count of Tilly, joined forces and conquered most of western Bohemia. The Bohemians set up defensive positions, but the imperials went around them and headed for Prague. Prince Christian of Anhalt force-marched to arrive first and occupy the hill."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Frederick V, aged 24" },
        "The young Elector of the Palatinate accepted the crown of Bohemia with the backing of his adviser Christian of Anhalt and the hope of help from Protestant allies, which hardly came. Before the battle, he had lunch at the castle with the English envoys Weston and Conway, not believing the fight would happen that day. When he rode out to the field, he found only the army in flight. He would go down in history with the nickname 'the Winter King'.",
        { h: "Christian of Anhalt and Count Thurn" },
        "Anhalt, about 52, commanded the Bohemian army, which had already shrunk to about 15,000 men after setbacks and desertions, according to one of the counts. Count Jindřich Matyáš Thurn, one of the leaders of the revolt, commanded the cavalry. The soldiers on both sides, mercenaries, had gone unpaid for months, and morale was low.",
        { h: "Bucquoy and Tilly" },
        "Charles Bonaventure de Longueval, Count of Bucquoy, a noble from the southern Netherlands in the emperor's service, was the overall commander on the Catholic side. Tilly, aged 61, a veteran general, commanded the League army. Maximilian of Bavaria presided over the Catholic council. The young René Descartes may have been in the Catholic army, but his role was insignificant."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary. The Catholics had from 23,000 to perhaps more than 30,000 men, adding about 18,000 to 20,000 imperials and 12,000 to 13,000 from the League, but the sources do not add up. The Bohemians had 15,000 to 21,000 men and about ten guns. Among them were Bohemian, Moravian, German and Hungarian troops, and [[mercenaries|mercenários]].",
        { h: "The terrain" },
        "The White Mountain is a low hill west of Prague, above the valley of the Litovice stream. The Bohemian right wing rested on the high wall of a hunting park by the Hvězda summer palace, the Star. The left wing was reinforced with artillery. There was little time to build defences. The weather was cold and wet.",
        { h: "The night before" },
        "On the night of 7 to 8 November, Bucquoy sent cavalry against sleeping Hungarian troops and threw them into disorder. Anhalt arrived around midnight. The League took position at about five in the morning, and the imperial army arrived around ten.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, Anhalt arranged the army in two lines with gaps, like a chessboard, with the Hungarian cavalry in the third line, in reserve. The Catholics came from the west: Tilly's League in four lines, on the left, and the imperials in three lines, with Walloon regiments, on the right.",
        "Second, around noon, the imperial right wing attacked and was repulsed by Thurn's cavalry and Bubna's regiment.",
        "Third, the Bohemian cavalry charged a German [[tercio|tércio de infantaria]], but the neighbouring units did not support it, and the attack failed.",
        "Fourth, the imperials regrouped with Meggau's cavalry and the Walloon cavalry and attacked the Bohemian left wing, which collapsed in about fifteen minutes. The Hungarian cavalry, in reserve and without having fought, began to withdraw. According to Czech historians, this brought down the whole left wing.",
        "Fifth, the young prince Christian of Anhalt, the commander's son, counterattacked with nine cornets of cavalry. The attack succeeded at first, took a standard and captured a tercio commander, but the imperial cavalry came back, and the prince was surrounded and captured before the infantry arrived.",
        "Sixth, the imperials attacked the Bohemian right wing, where Schlick's Germans and part of Thurn's infantry were fighting. Thurn withdrew, and Schlick was captured at another point of the line.",
        "Seventh, the Bohemian infantry fired one volley from a distance and fell back. The Catholic cavalry, among them some 2,000 Bavarian [[hussars|hussardos]], pushed the Protestants towards the Hvězda palace, west of Prague. Carlo Spinelli's Neapolitan infantry took the Bohemian artillery.",
        "Eighth, the reserves at Hvězda, Anhalt's infantry, half a Weimar regiment and two guard standards, waited out the whole battle and surrendered without fighting. Frederick fled Prague. The battle had lasted, according to the sources, close to an hour."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The losses" },
        "The numbers are disputed. The city council of Prague buried 1,600 dead, but the Czech historian who reconstructs the day finds that number low and estimates about 5,000 Bohemian dead. The Irish priest Henry Fitzsimon, Bucquoy's confessor, spoke of up to 9,000. Other counts give 2,800 to 4,000. On the Catholic side, the same Fitzsimon said 250 to 300, but another report speaks of about 2,000, which the historian finds more plausible. The Bohemians lost all their artillery and about a hundred standards.",
        { h: "What changed" },
        "The imperials entered Prague on 9 November. Frederick left on the 10th. The estates capitulated on 12 and 13 November, which ended the confederation of the lands of the Bohemian Crown. On 21 June 1621, 27 leaders of the revolt, among them the physician Jan Jesenius and the nobleman Kryštof Harant, were executed in the Old Town Square. Today, 27 crosses in the paving mark the spot. About five-sixths of the Bohemian nobility went into exile, and their lands were confiscated. Calvinists were expelled in 1621, Lutheran worship was banned in 1622, and in 1626 Lutherans had to convert or leave. The [[re-Catholicization|recatolicização]] lasted two centuries, and the population of the Czech lands fell by about a third by the end of the war. Protestant resistance continued in Silesia and Moravia until 1623.",
        { note: "The Catholic chronicler Henry Fitzsimon describes the Moravians at the Hvězda wall fighting to the last man. Modern Czech historians consider the account partial, though they acknowledge that the Moravian regiments suffered more losses than the others." },
        { note: "The Catholics saw the victory as a miracle. A commemorative painting shows Our Lady of Victory above and, below, Ferdinand II and his son Ferdinand III." }
      ]}
    ]
  },

  lutzen: {
    war: "The Thirty Years' War, the Swedish phase (1630–1635)",
    hook: "Smoke covered the field, the king of Sweden vanished in it, and his army won the battle without him.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1630, King Gustavus Adolphus of Sweden landed in Germany to save the Protestants in the Thirty Years' War. In 1631 he beat the Count of Tilly at Breitenfeld and, in 1632, went through Bavaria. His army used [[musketeers|mosquete]] in thin formations, light artillery and cavalry that attacked fast.",
        "Emperor Ferdinand II had dismissed Albrecht von Wallenstein, the Bohemian noble who had raised an army at his own expense. In 1632, he called him back as [[imperial generalissimo|generalíssimo imperial]], with almost unlimited powers. Wallenstein held off the Swedes at Nuremberg, in the summer. Then he turned to Saxony, a Protestant ally.",
        { h: "The road to Lützen" },
        { timeline: [
          ["1631", "Gustavus Adolphus beats Tilly at Breitenfeld."],
          ["1632", "Wallenstein returns to the imperial command and faces the Swedes at Nuremberg."],
          ["Nov 1632", "The Swedes march into Saxony, and Wallenstein occupies Lützen. Pappenheim is sent to Halle."],
          ["15 Nov", "The Swedes camp about 2 km from Lützen."],
          ["16 Nov", "The battle, from late morning to nightfall."]
        ]},
        "In early November, Wallenstein, thinking Gustavus Adolphus would go into winter quarters, sent General Pappenheim, with about 5,800 men, to Halle. The king found out and attacked. On 15 November, the Swedish army camped about 2 km from Lützen, and Wallenstein sent for Pappenheim to come back."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Gustavus Adolphus, aged 37" },
        "The 'Lion of the North'. He reformed the Swedish army, led from the front and exposed himself. On the morning of Lützen, he took position on the right wing, with the cavalry and a troop from Småland. His plan was to go around the enemy's left.",
        { h: "Albrecht von Wallenstein, aged 49" },
        "Rich, cold and given to astrology, he was more a war entrepreneur than a cavalry hero. That day, he chose the ground carefully: the ditch of the Leipzig road and a rise with three windmills and the biggest battery. He had houses in Lützen set on fire, which produced smoke.",
        { h: "The other names" },
        "Bernard of Saxe-Weimar commanded the Swedish left wing. Dodo von Knyphausen and Nils Brahe commanded the two lines of the centre. On the imperial side, Gottfried Heinrich zu Pappenheim commanded the cavalry that arrived from noon onwards, and Heinrich Holk counterattacked the Swedish centre."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Swedes had about 19,000 men and 60 guns, including some 2,000 Saxons and about 850 from Hesse-Kassel. Wallenstein had 13,000 to 15,000 before Pappenheim arrived. With him, the total rose to about 19,000 to 22,000, depending on the source. The gun numbers vary: 24 for the imperials in some counts.",
        { h: "The terrain" },
        "A plain, cut by the ditch of the road from Lützen to Leipzig, the Via Regia. Wallenstein's right rested on a low rise with three windmills and the bulk of the artillery. The Swedes had to cross the Floßgraben canal before arriving. In the morning, a thick fog mixed with the smoke of burning Lützen. In Sweden, the expression 'Lützendimma', the Lützen fog, still means a very dense fog. Some historians doubt that the burning houses were the cause.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, the Swedes lined up in two lines of infantry in the centre, with the cavalry on the wings. The imperials stood along the ditch of the road, with musketeers inside it and the windmill battery on the right.",
        "Second, around 11 a.m., after the fog and the canal had delayed the morning, the attack began. Gustavus Adolphus overran the musketeers in the ditch, crossed it and tried to [[outflank|flanquear]] the imperial left. Bernard advanced little against the imperial right, on the windmill rise.",
        "Third, near noon, Pappenheim arrived with about 2,300 horsemen and pushed the Swedish infantry back across the road, almost wiping out elite units. In 2011, a mass grave with 47 soldiers was found, believed to be of the Swedish Blue Brigade, caught by Pappenheim's cavalry.",
        "Fourth, Pappenheim was gravely wounded in the fight with the Swedish cavalry and died the next day. Accounts differ on the exact hour when he arrived and fell.",
        "Fifth, around 1 p.m., Holk counterattacked the Swedish centre. Both sides lost cohesion, and the fighting turned into confused firefights in the smoke. The king, trying to rally the infantry, went with a small escort to a spot lost in the haze.",
        "Sixth, in that confusion, he ran straight into a unit of imperial cavalry. He was shot three times, fell from his horse, and his body was only found after the fighting. Accounts differ on the details: one Swedish source speaks of a shot in the arm, another in the lung and another in the temple, when he was already down.",
        "Seventh, around 3 p.m., Knyphausen's reserve held the line, and there was a pause.",
        "Eighth, the fighting resumed under Bernard's command. Around 4 p.m., the Swedes took Lützen and the windmill battery and turned the guns on the retreating imperials.",
        "Ninth, around 5 p.m., with night falling, Wallenstein ordered the retreat, leaving guns and baggage. Pappenheim's infantry, about 2,900 men, only arrived after dark and covered the retreat to Leipzig."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The losses" },
        "The imperials lost about 5,000 to 5,160 men, killed, wounded and captured, and 24 guns. The Swedes lost between 3,400 and 6,000, depending on the source. Wallenstein left more than 1,200 wounded behind, and the retreat to Bohemia was harassed by Saxon peasants.",
        { h: "What changed" },
        "Gustavus Adolphus was dead, and the queen, Christina, was six years old. Chancellor Axel Oxenstierna took over the government and decided to continue the war. In April 1633, Sweden and German allies formed the League of Heilbronn, with French money. Wallenstein abandoned Leipzig and went back to Bohemia. In February 1634, imperial agents assassinated him, after rumours that he might change sides.",
        { note: "The victory went to the Swedes by most counts, but some historians speak of a 'marginal' tactical victory for the imperials, since the king's death was a bigger blow than the loss of the field." },
        { note: "The Swedes placed a granite boulder where the king fell, the day after the battle. In 1832 it was given an iron canopy, and in 1907 a chapel. Swedes still celebrate Gustavus Adolphus Day on 6 November, the date on the [[Julian calendar|calendário juliano]] then used in Sweden." }
      ]}
    ]
  },

  naseby: {
    war: "The First English Civil War (1642–1646)",
    hook: "The king had the best cavalry in England, and it left the field after the baggage.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The [[First English Civil War|primeira guerra civil inglesa]] pitted King Charles I against Parliament. The supporters of Parliament were called [[Roundheads|cabeças redondas]], and those of the king [[Royalists|realistas]]. In 1644, the parliamentarians had won at Marston Moor, but then suffered setbacks at Lostwithiel and at the second battle of Newbury. Because the generals were also members of Parliament and quarrelled among themselves, in December 1644 Parliament passed the [[Self-Denying Ordinance|ordenança de autonegação]], which forced them to give up command.",
        "The result was the [[New Model Army|exército de novo modelo]], a professional army with officers promoted for merit, commanded by Sir Thomas Fairfax. In April 1645, Fairfax marched west to relieve Taunton, and was then ordered to besiege Oxford, the king's capital.",
        { h: "The road to Naseby" },
        { timeline: [
          ["Dec 1644", "Parliament passes the Self-Denying Ordinance."],
          ["31 May 1645", "The Royalists storm Leicester."],
          ["Early Jun", "Parliament orders Fairfax to attack the king's army."],
          ["12 Jun", "Patrols clash near Daventry."],
          ["13 Jun", "Cromwell joins Fairfax with cavalry."],
          ["14 Jun", "The battle."]
        ]},
        "The Royalists took Leicester on 31 May, and Parliament ordered Fairfax to seek out the king's field army. On 13 June, Oliver Cromwell arrived with cavalry, and Edward Rossiter with troops of the Eastern Association. The king and his advisers, among them Lord Digby, decided to fight."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Sir Thomas Fairfax, aged 33" },
        "Commander in chief of the New Model Army. Capable and brave, he fought in the midst of his troops. At Naseby, he directed the overall action and, at the end, personally led his own regiment against the last core of resistance of the Royalist infantry.",
        { h: "Prince Rupert, aged 25" },
        "The king's nephew and the best Royalist cavalry commander, known for devastating charges. At Naseby, he commanded the right wing. His strength was the fast attack, and his weakness was the difficulty of stopping the cavalry once it was launched.",
        { h: "The other names" },
        "On Parliament's side, Oliver Cromwell, aged 46, commanded the cavalry on the right wing, Henry Ireton that on the left, and Philip Skippon the infantry. Colonel John Okey commanded the dragoons. On the king's side, Prince Maurice was with Rupert, Lord Astley commanded the infantry in the centre, and Sir Marmaduke Langdale the northern cavalry, on the left. King Charles I himself, aged 44, stayed in reserve."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The two sides are counted in different ways. Parliament had about 13,500 to 14,000 men: some 6,000 cavalry, 7,000 infantry and 676 to 1,000 [[dragoons|dragões]]. The figure of 676 comes from pay records, and 1,000 is the most cited. The Royalists had 7,400 to 8,600: about 4,100 cavalry and 3,300 infantry. In numbers, Parliament had almost double.",
        { h: "The terrain" },
        "The Royalists stood on a ridge between Little Oxendon and East Farndon, about 3 km from Market Harborough, and Parliament on the Naseby ridge. The Sulby Hedges protected the Royalist right and the parliamentary left. The slope had bushes and a rabbit warren. The morning fog hampered visibility. Fairfax thought of staying on the slopes to the north, but, on Cromwell's advice, pulled back a little to lure the Royalists on.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, the lines. The Royalists: Rupert and Maurice on the right, with 2,000 to 3,000 cavalry, Astley's infantry in the centre in three [[brigades|brigada]], Langdale on the left with 1,500 northern horse, and the king in reserve, with about 800 infantry and his guard. Parliament: Ireton on the left, with five and a half regiments of cavalry, Skippon in the centre, with five [[regiments|regimento]] in front and three in support and 300 musketeers as a [[forlorn hope]], about eleven guns among the infantry, Cromwell on the right with six and a half regiments. Okey was with the dragoons in the Sulby Hedges.",
        "Second, the Royalist centre attacked first. Rupert held back the cavalry to attack together with the infantry. The infantry fired one volley and went into hand-to-hand fighting. Skippon was wounded but stayed on the field, and Parliament's infantry fell back.",
        "Third, on Parliament's left, Ireton's wing at first repulsed its opponents, but Ireton was unhorsed, wounded and captured. The Royalist second line broke much of the parliamentary cavalry. Some regiments were saved by the fire of Okey's dragoons, and others fled as far as Northampton.",
        "Fourth, Rupert's whole wing went off in pursuit, leaving no reserve. He could not rally the horsemen, who galloped after the fugitives all the way to Parliament's baggage. The baggage escort refused to yield and drove them off.",
        "Fifth, on the right, Cromwell's cavalry faced Langdale's. After about half an hour, Langdale charged up a broken slope and was beaten. Cromwell kept reserves.",
        "Sixth, Cromwell turned those reserves against the flank and rear of the Royalist centre. Okey's dragoons attacked the flank of the infantry. Some of Ireton's regiments, partly rallied, joined in.",
        "Seventh, many Royalist infantrymen surrendered. One regiment, apparently the 'Bluecoats', held out until Fairfax led his own against it and, according to the account, took the colours himself. A witness said they stood 'like a wall of brass'.",
        "Eighth, the king tried to lead his guard into the fight, but the Earl of Carnwath seized the bridle of his horse. According to tradition, he asked: 'Would you go upon your death, Sire?'. The guard fell back.",
        "Ninth, Rupert came back too late to save the infantry. The Royalist cavalry withdrew to Ashby-de-la-Zouch. Parliament's pursuit went as far as Leicester. Many Royalists died at Marston Trussell, where they took for the main road the way that led to a churchyard. At least a hundred women who followed the army were killed."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The losses" },
        "Parliament lost about 200 dead and 535 wounded. The Royalists, about 1,000 dead or wounded and some 4,500 prisoners, almost all infantry, besides all their artillery and supplies. The king lost about 500 veteran officers.",
        { h: "What changed" },
        "Fairfax retook Leicester on 18 June and went south-west to clear the west of the country. The Royalists surrendered at Truro, and the leaders fled to Jersey. The king never again had a field army of the same quality, and the war ended in less than a year, with a victory for Parliament.",
        { note: "The king's baggage held letters that showed his attempts to get help from the Irish Catholic Confederation and from Catholic powers in Europe. Parliament published them as 'The King's Cabinet Opened', which strengthened support for fighting to the end." },
        { note: "Historians point to Rupert's pursuit as the key to the battle. His wing won its part of the field, but left it, and Cromwell's cavalry, which kept reserves, decided the rest." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  poitiers: {
    terrain: [
      { t: "sea", x: 0, y: 44, w: 14, h: 18, l: "Marsh" },
      { t: "note", x: 52, y: 47, l: "Hedge with a single gap" },
      { t: "note", x: 84, y: 66, l: "Forest of Nouaillé" }
    ],
    units: [
      { id: "eW", s: "a", k: "inf", w: 22, h: 6, l: "Warwick (left, with Oxford)" },
      { id: "eB", s: "a", k: "inf", w: 18, h: 6, l: "Black Prince (centre)" },
      { id: "eS", s: "a", k: "inf", w: 22, h: 6, l: "Salisbury and Suffolk (right)" },
      { id: "eC", s: "a", k: "cav", w: 9, h: 4, l: "Captal de Buch" },
      { id: "fA", s: "b", k: "cav", w: 10, h: 5, l: "Audrehem" },
      { id: "fC", s: "b", k: "cav", w: 10, h: 5, l: "Clermont" },
      { id: "f1", s: "b", k: "inf", w: 30, h: 5, l: "Brienne (on foot)" },
      { id: "f2", s: "b", k: "inf", w: 30, h: 5, l: "Dauphin (on foot)" },
      { id: "f3", s: "b", k: "inf", w: 30, h: 5, l: "Orléans (on foot)" },
      { id: "f4", s: "b", k: "inf", w: 30, h: 5, l: "King John (on foot)" }
    ],
    steps: [
      { t: "The English wait in three divisions behind the hedge, with the marsh on the left. The French come on foot, in four divisions one behind the other, with two groups of picked horsemen in front.",
        p: { eW: [30, 55], eB: [52, 61], eS: [74, 55], eC: [10, 66], fA: [28, 33], fC: [74, 33], f1: [50, 25], f2: [50, 17], f3: [50, 10], f4: [50, 3.5] } },
      { t: "The horsemen attack. The marsh stops Audrehem, and the archers hit his crossbowmen and the horses. Clermont attacks the gap in the hedge and is killed.",
        p: { fA: [28, 48], fC: [74, 48] }, x: ["fA", "fC"] },
      { t: "Brienne's division, on foot, is driven back. Brienne dies.",
        p: { f1: [50, 42] }, x: ["f1"] },
      { t: "The dauphin's division forces the gap in the hedge. The hand-to-hand fight lasts about two hours, and the guards pull the dauphin out.",
        p: { f2: [56, 43] } },
      { t: "The dauphin falls back in order. Orléans leaves the field with about half of his men, and the other half attacks weakly and is repulsed. Many of Warwick's men go after them.",
        p: { f2: [50, 22], f3: [50, 38], eW: [36, 45] }, x: ["f2", "f3"] },
      { t: "King John advances on foot, with the oriflamme. The English are exhausted and almost out of arrows. The Prince sends the Captal de Buch around the flank (the exact route is not known).",
        p: { f4: [50, 32], eC: [92, 40], eW: [30, 55] } },
      { t: "The Prince orders the general advance, and the archers fight with swords and axes. Warwick's men return to the line. The captal appears behind the French.",
        p: { eB: [52, 42], eS: [74, 44], eC: [60, 8] } },
      { t: "The king's line breaks. The French are pushed against a bend of the river Miosson. John and his son Philip surrender.",
        p: { f4: [52, 20], eB: [52, 30], eS: [74, 34], eC: [58, 6] }, x: ["f4"] }
    ]
  },

  montanhabranca: {
    terrain: [
      { t: "hill", x: 76, y: 38, rx: 16, ry: 30, l: "White Mountain" },
      { t: "note", x: 70, y: 4, l: "Wall of the Hvězda park" },
      { t: "note", x: 94, y: 66, l: "Prague →" }
    ],
    units: [
      { id: "aL", s: "a", k: "inf", w: 6, h: 18, l: "Catholic League (Tilly)" },
      { id: "aI", s: "a", k: "inf", w: 6, h: 18, l: "Imperial army (Bucquoy)" },
      { id: "aV", s: "a", k: "cav", w: 5, h: 12, l: "Imperial cavalry (Meggau, Walloons)" },
      { id: "aS", s: "a", k: "inf", w: 5, h: 9, l: "Neapolitans (Spinelli)" },
      { id: "bR", s: "b", k: "inf", w: 6, h: 14, l: "Right wing (Schlick)" },
      { id: "bC", s: "b", k: "inf", w: 6, h: 14, l: "Centre (Anhalt)" },
      { id: "bL", s: "b", k: "cav", w: 6, h: 16, l: "Left wing (Thurn)" },
      { id: "bK", s: "b", k: "cav", w: 5, h: 9, l: "Christian the Younger" },
      { id: "bH", s: "b", k: "cav", w: 5, h: 12, l: "Hungarian cavalry (reserve)" }
    ],
    steps: [
      { t: "The Bohemians wait on the hill, with the right wing against the Hvězda wall and the Hungarians in reserve. The Catholics arrive from the west: the League on the left, the imperials on the right.",
        p: { aL: [26, 18], aI: [26, 52], aV: [18, 58], aS: [22, 38], bR: [66, 14], bC: [66, 34], bL: [66, 54], bK: [78, 34], bH: [90, 34] } },
      { t: "The first imperial attack, on the right, is repulsed by Thurn's cavalry and Bubna's regiment.",
        p: { aV: [40, 54], aI: [34, 52] } },
      { t: "The Bohemian cavalry charges a German tercio, but the neighbouring units do not support it, and the attack fails.",
        p: { bL: [58, 54], aI: [38, 52] } },
      { t: "The imperials return with Meggau and the Walloons and attack the Bohemian left, which collapses in about fifteen minutes. The Hungarian cavalry withdraws without fighting.",
        p: { aV: [52, 56], aI: [48, 52], bL: [70, 60], bH: [96, 20] }, x: ["bL", "bH"] },
      { t: "Christian the Younger counterattacks with nine cornets, takes a standard and is surrounded and captured before the infantry arrives.",
        p: { bK: [58, 44] }, x: ["bK"] },
      { t: "The imperials attack the Bohemian right, where Schlick's Germans are fighting. Thurn withdraws, and Schlick is captured.",
        p: { aL: [42, 20], aI: [56, 48], bR: [68, 16], bC: [70, 36] } },
      { t: "The Bohemian infantry fires a volley from a distance and falls back. The Catholic cavalry pushes it towards Hvězda, and Spinelli's Neapolitans take the artillery.",
        p: { aS: [56, 34], aL: [52, 20], bC: [78, 36] }, x: ["bC"] },
      { t: "The reserves at Hvězda surrender without fighting. The battle lasts about an hour, and Frederick flees Prague.",
        p: { aL: [62, 16], aI: [64, 44], bR: [78, 10] }, x: ["bR"] }
    ]
  },

  lutzen: {
    terrain: [
      { t: "note", x: 8, y: 4, l: "Lützen (burning)" },
      { t: "hill", x: 20, y: 17, rx: 10, ry: 4, l: "Windmills and battery" },
      { t: "note", x: 50, y: 30, l: "Leipzig road and its ditch" },
      { t: "note", x: 50, y: 69, l: "Floßgraben canal" }
    ],
    units: [
      { id: "sR", s: "a", k: "cav", w: 22, h: 5, l: "Gustavus Adolphus (right wing)" },
      { id: "s1", s: "a", k: "inf", w: 30, h: 4, l: "Centre, 1st line (Brahe)" },
      { id: "s2", s: "a", k: "inf", w: 30, h: 4, l: "Centre, 2nd line (Knyphausen)" },
      { id: "sL", s: "a", k: "cav", w: 22, h: 5, l: "Bernard of Saxe-Weimar (left wing)" },
      { id: "iD", s: "b", k: "inf", w: 34, h: 3, l: "Musketeers in the road ditch" },
      { id: "iC", s: "b", k: "inf", w: 28, h: 5, l: "Imperial centre" },
      { id: "iW", s: "b", k: "inf", w: 16, h: 5, l: "Windmill battery" },
      { id: "iL", s: "b", k: "cav", w: 22, h: 5, l: "Imperial cavalry (left wing)" },
      { id: "iP", s: "b", k: "cav", w: 18, h: 5, l: "Pappenheim" }
    ],
    steps: [
      { t: "In the morning, the fog and the smoke of Lützen hide everything. The imperials are along the road ditch, with the windmill battery on the right. The Swedes are in two lines, with the cavalry on the wings.",
        p: { sR: [80, 54], s1: [48, 56], s2: [48, 62], sL: [18, 54], iD: [48, 33], iC: [52, 24], iW: [20, 21], iL: [80, 26], iP: [96, 3] } },
      { t: "Around 11 a.m., the Swedes cross the Floßgraben and attack. The king overruns the musketeers in the ditch and tries to outflank the imperial left. Bernard advances little against the windmills.",
        p: { sR: [82, 40], s1: [48, 44], s2: [48, 52], sL: [20, 42], iD: [48, 34] }, x: ["iD"] },
      { t: "Near noon, Pappenheim arrives with about 2,300 horsemen and pushes the Swedish infantry back, almost destroying elite units.",
        p: { iP: [76, 34], s1: [52, 52], sR: [88, 46] } },
      { t: "Pappenheim falls mortally wounded. Accounts differ on the exact hour.",
        p: { iP: [72, 38] }, x: ["iP"] },
      { t: "Around 1 p.m., Holk counterattacks the Swedish centre. In the smoke, both sides lose cohesion.",
        p: { iC: [52, 36], s1: [48, 48], s2: [48, 56] } },
      { t: "The king, trying to rally the infantry, gets lost with a small escort, runs into a unit of imperial cavalry and is killed.",
        p: { sR: [78, 36] }, x: ["sR"] },
      { t: "Around 3 p.m., Knyphausen's reserve holds the line, and there is a pause.",
        p: { s2: [48, 48] } },
      { t: "Under Bernard's command, the Swedes start again. Around 4 p.m., they take Lützen and the windmill battery and turn the guns on the imperials.",
        p: { sL: [20, 26], iW: [20, 14], iC: [52, 30] }, x: ["iW"] },
      { t: "Around 5 p.m., with night falling, Wallenstein withdraws, leaving guns and baggage. Pappenheim's infantry arrives after dark and covers the retreat.",
        p: { iC: [56, 14], iL: [82, 14], s1: [48, 36], s2: [48, 44], sL: [22, 20] }, x: ["iC", "iL"] }
    ]
  },

  naseby: {
    terrain: [
      { t: "note", x: 6, y: 38, l: "Sulby Hedges" },
      { t: "note", x: 50, y: 69, l: "Naseby" }
    ],
    units: [
      { id: "pI", s: "a", k: "cav", w: 20, h: 5, l: "Ireton (left)" },
      { id: "pS", s: "a", k: "inf", w: 30, h: 5, l: "Skippon's infantry" },
      { id: "pS2", s: "a", k: "inf", w: 22, h: 4, l: "Support (3 regiments)" },
      { id: "pC", s: "a", k: "cav", w: 22, h: 5, l: "Cromwell (right)" },
      { id: "pD", s: "a", k: "inf", w: 8, h: 3, l: "Okey's dragoons" },
      { id: "pB", s: "a", k: "camp", w: 12, h: 4, l: "Baggage" },
      { id: "rR", s: "b", k: "cav", w: 20, h: 5, l: "Rupert and Maurice (right)" },
      { id: "rA", s: "b", k: "inf", w: 30, h: 5, l: "Astley's infantry" },
      { id: "rK", s: "b", k: "inf", w: 14, h: 4, l: "The king's reserve" },
      { id: "rL", s: "b", k: "cav", w: 20, h: 5, l: "Langdale (left)" },
      { id: "rG", s: "b", k: "cav", w: 9, h: 4, l: "The king's guard" }
    ],
    steps: [
      { t: "Parliament has Ireton on the left, Skippon in the centre and Cromwell on the right, with Okey's dragoons hidden in the hedges. The Royalists have Rupert on the right, Astley in the centre and Langdale on the left.",
        p: { pI: [20, 48], pS: [50, 50], pS2: [50, 57], pC: [80, 48], pD: [8, 44], pB: [50, 66], rR: [20, 22], rA: [50, 20], rK: [50, 10], rL: [80, 22], rG: [50, 3] } },
      { t: "The Royalist centre attacks first. After one volley, the fight is hand to hand, and Parliament's infantry is pushed back.",
        p: { rA: [50, 32], pS: [50, 46], pS2: [50, 54] } },
      { t: "Rupert sweeps away Ireton's wing, and Ireton is captured. Okey's dragoons save some regiments, and others flee.",
        p: { rR: [20, 38], pI: [20, 52] }, x: ["pI"] },
      { t: "Rupert's wing chases the fugitives all the way to Parliament's baggage, leaving no reserve. The escort refuses to yield.",
        p: { rR: [38, 62] } },
      { t: "On the right, Cromwell faces Langdale. After about half an hour, Langdale charges up a broken slope and is beaten.",
        p: { rL: [80, 12], pC: [80, 32] }, x: ["rL"] },
      { t: "Cromwell turns his reserves against the flank and rear of the Royalist centre. Okey's dragoons attack the flank of the infantry.",
        p: { pC: [66, 26], pD: [30, 36], rA: [50, 30] } },
      { t: "Many Royalist infantrymen surrender. One regiment holds out until Fairfax attacks it with his own.",
        p: { pS: [50, 38], pC: [60, 22], rA: [50, 26] }, x: ["rA"] },
      { t: "The king tries to lead his guard into the fight, but Carnwath seizes his bridle, and the guard falls back.",
        p: { rG: [70, 2], rK: [50, 6] }, x: ["rG", "rK"] },
      { t: "Rupert returns too late. The Royalist cavalry withdraws to Ashby-de-la-Zouch and Parliament chases it to Leicester.",
        p: { rR: [12, 10], pC: [58, 8] }, x: ["rR"] }
    ]
  }
});
