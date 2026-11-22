// In-depth battles, batch l: bannockburn, crecy, poyang, kulikovo, aljubarrota, kosovo.
// Checked against the English and Portuguese Wikipedia articles (and the works they cite: Reese, Brown, Ayton,
// Rogers, Sumption, Gorskii, Dvurechensky, Fine, Tucker, Twitchett, Andrade, McMurdo, Russell, Froissart),
// the Chinese Wikipedia article on Poyang, the Wikipedia biographies of the leaders, and Historic Environment
// Scotland (Bannockburn). Britannica could not be opened, so it was not used.

Object.assign(GLOSSARY, {
  "schiltron": "A Scottish spear formation: a compact block, with the spears pointing outward, like a hedgehog. Horses will not charge a wall of points, so it stopped cavalry.",
  "homem de armas": "A professional soldier in heavy armor, of mail and metal plates. He could fight on horseback or, in the defensive battles of the time, dismounted and on foot.",
  "arco longo": "An English and Welsh bow, made of wood, so strong that the archer needed years of training to use it. It shot several arrows a minute and had a long range.",
  "galloglass": "Heavy infantry warriors from the western isles of Scotland, who fought on foot, in armor, with axes and big swords.",
  "cavalgada": "The French term chevauchée: a raid into enemy territory to plunder, burn and ruin the countryside, without trying to conquer cities. It weakens the opponent and tries to force him to fight.",
  "oriflamme": "The sacred banner of the kings of France. When it was unfurled, it meant that no prisoners would be taken.",
  "pavês": "A huge shield, rested on the ground, behind which the crossbowman took cover to reload his weapon.",
  "bombarda": "A primitive iron cannon that fired metal balls. How much damage it did in the battles of the 14th century is still debated.",
  "condestável": "The supreme commander of a kingdom's army, just below the king. In France, he was the one who organized and led the army on campaign.",
  "vanguarda": "The part of the army that marches or fights at the front.",
  "abrolhos": "Small iron pieces with spikes, scattered on the ground to injure horses' hooves.",
  "cortes": "The assembly of the Portuguese kingdom in the Middle Ages, with nobles, clergy and representatives of the towns, which advised the king and decided grave matters, such as who would reign.",
  "tributo": "A regular payment that a subject people makes to its ruler.",
  "horda dourada": "The Mongol state whose khans dominated the Russian principalities for more than two centuries and collected tribute from them.",
  "cã": "Title of the Mongol and Turkic sovereign. The Golden Horde was ruled by khans.",
  "tártaros": "The name the Russians gave to the Turkic-Mongol peoples of the Golden Horde.",
  "boiardo": "A high-ranking Russian noble, counselor and commander in the service of the prince.",
  "grão-príncipe": "Title of the most important prince among the Russians, tied to the throne of Vladimir. It was the khan of the Horde who confirmed who held it.",
  "janízaros": "The elite infantry of the Ottoman sultan, made up of professional soldiers. They arose in the 14th century and were the backbone of the Ottoman army for about 300 years.",
  "vidovdan": "St. Vitus's Day, 28 June. In Serbia, it became the day for remembering the Battle of Kosovo.",
  "navio-torre": "A large Chinese warship, with three decks and armored sides. It was a floating fortress: from above, the soldiers threw stones and shot arrows at the lower boats.",
  "brulote": "A boat loaded with flammable material, set on fire and released against the enemy fleet, at the mercy of the wind or the current.",
  "trabuco": "A throwing machine with a long arm, which hurled stones or incendiary bombs. It was also mounted on ships.",
  "turbantes vermelhos": "A rebellion that began in 1351 against the Mongol dynasty and spread across China. When the government collapsed, its leaders began to fight one another for power.",
  "yuan": "The Mongol dynasty that ruled China in the 14th century, until it was overthrown by the rebels.",
  "ming": "The dynasty that Zhu Yuanzhang founded in 1368 and that ruled China after the Mongols."
});

Object.assign(DEEP, {
  bannockburn: {
    war: "First War of Scottish Independence (1296–1328)",
    hook: "In two days of June, Scottish spearmen on foot defeated the largest English army that had ever invaded Scotland.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The war between England and Scotland had already lasted almost twenty years. It began in 1296, when Edward I of England wanted to subdue the Scots. The English won at Dunbar and took Berwick that same year. In 1297, the Scots won at Stirling Bridge. In 1298, Edward I won again, at Falkirk, and around 1304 Scotland seemed conquered. But in 1306 Robert Bruce seized the Scottish throne and the war started again. Edward I died in 1307, and his son, Edward II, did not have the same firmness.",
        "Stirling Castle, on a rock beside the River Forth, was a key piece: it controlled the road north, toward the Highlands. In 1313, Bruce demanded that the Scots still loyal to the deposed King John Balliol accept him as king, on pain of losing their lands, and also demanded the surrender of Stirling, which was in English hands. In 1314, his brother Edward Bruce besieged the castle.",
        "The English commander, Sir Philip Moubray, then made a deal: if the castle was not relieved by midsummer, he would hand it over. The deadline is usually given as 24 June 1314 (the sources differ on when the agreement was made). In practice, this made Stirling the place of the battle: Bruce knew which way the English would have to come.",
        { h: "The road to Bannockburn" },
        { timeline: [
          ["1296", "The English win at Dunbar and take Berwick. The war begins."],
          ["1297", "The Scots win at Stirling Bridge."],
          ["1298", "Edward I wins at Falkirk."],
          ["1306", "Robert Bruce takes the throne of Scotland. The war begins again."],
          ["1313", "Bruce demands the surrender of Stirling and the loyalty of the Scots who still support Balliol."],
          ["1314", "Edward Bruce besieges Stirling. Edward II assembles a large army to relieve the castle."],
          ["23 and 24 June 1314", "The battle."]
        ]},
        "Edward II called on England, Wales and Ireland for 2,000 armored horsemen and 13,000 foot soldiers. It is estimated that at most half of the infantry showed up, but even so it was the largest English army ever to invade Scotland. To arrive in time, it marched about 110 km (70 miles) in a week, and the men and horses arrived tired and hungry. Many historians criticize this haste."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Robert Bruce, king of the Scots, 39 years old" },
        "Earl of Carrick, he had fought alongside William Wallace and been one of the Guardians of Scotland in 1298. In 1306, he took the throne. He had a reputation for physical courage and led from the front, which earned him the soldiers' respect. At Bannockburn, he used the [[schiltrons|schiltron]] in a new way: Wallace used them to defend, and Bruce, who had trained them for this, sent them to attack.",
        { h: "Edward II of England, 30 years old" },
        "He came to the throne in 1307, after his father's death. He did not have Edward I's determination. In 1314, he wanted to relieve Stirling at any cost, and his haste cost the army its rest.",
        { h: "The other names" },
        "On the Scottish side, the schiltrons were commanded by Edward Bruce, the king's brother; Thomas Randolph, Earl of Moray, his nephew; and, together, James Douglas and the young Walter Stewart (in practice, Douglas was the one in charge). Angus Og MacDonald brought thousands of men from the western isles, including [[galloglass|galloglass]], and was given the place of honor beside the king. Sir Robert Keith, the marshal, commanded the 500 horsemen.",
        "On the English side, Gilbert de Clare, Earl of Gloucester, was about 23 years old and was the king's nephew. Humphrey de Bohun, Earl of Hereford, shared with him the command of the first cavalry force. Robert Clifford and Henry de Beaumont commanded a second. Aymer de Valence, Earl of Pembroke, and Sir Giles d'Argentan, who was said to be the third best knight in Europe, protected the king in his flight."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Scots numbered about 7,000, with at most 500 on horseback; the sources give from 5,000 to 8,000. They fought on foot, with spears, axes and swords, and there were few archers. The English were far more numerous: historians estimate that the Scots faced 1.5 to 3 times as many men, and the range cited for the English total runs from 20,000 to 25,000. England's strong point was its armored cavalry.",
        { note: "The numbers for Bannockburn vary greatly from book to book. What can be said with certainty is that the English were far more numerous, and that the distance between the two ranges (5,000 to 8,000 against 20,000 to 25,000) is large." },
        { h: "The terrain" },
        "Bruce chose the New Park, a flat area surrounded by woodland, south of Stirling. The woods protected him from the cavalry. There were streams, especially the Bannock Burn, and marshy ground around. The exact place of the battle is disputed: most historians think that the traditional site of the first day, where the visitor center and the statue stand, is not the right one. For the second day, the candidates are the Dryfield and the Carse of Balquhiderock (the Wetfield), which the National Trust for Scotland considers the most likely.",
        { h: "First day: Bruce's axe" },
        { formation: true },
        "On the morning of 23 June, it was not yet certain that there would be a battle. The English were heading for Stirling. Gloucester and Hereford crossed the Bannock Burn with a cavalry force and approached the woods. Henry de Bohun, Hereford's nephew, saw Bruce, who was with only a small mount, light armor and a battle-axe. Bohun charged him with his lance. Bruce sidestepped and split his head with the axe, in front of both armies, according to the best-known version. The Vita Edwardi Secundi, an English chronicle, tells it differently: Bohun was chasing Scots who seemed to be fleeing and was surprised by Bruce as he tried to return.",
        "The Scots then attacked the force of Gloucester and Hereford, which fell back across the stream. At the same time, Clifford and Beaumont, with about 300 [[men-at-arms|homem de armas]], were going around the woods on the side of the River Forth. Thomas Randolph came out of the woods with his schiltron and marched across the open field to meet them. Thomas Gray, whose son, also Thomas Gray, wrote the account of this scene, charged the Scots. His horse was killed on the spears and he was captured, and Sir William Deyncourt died. The English squadron was shattered.",
        { h: "The night" },
        "The bulk of the English army crossed the Bannock Burn and camped on a marshy plain, between the stream and the Forth, dejected and without confidence. During the night, the Scot Alexander Seton, who served in the English army, defected to Bruce's side and told him that English morale was low, and that the Scots could win. Bruce decided to attack the next day.",
        { h: "Second day: the schiltrons on the march" },
        "At dawn on 24 June, Edward II was surprised to see the Scottish spearmen come out of the woods and advance. When they came close, they stopped and knelt to pray. Edward is said to have exclaimed: 'They kneel to ask for mercy!' and one of his men replied that they were asking God, not him, and that they would win or die. It is a dialogue that tradition tells, hard to confirm.",
        "Gloucester had quarreled with Hereford over who would command the vanguard and had tried to convince the king to postpone the battle. The king accused him of cowardice. To prove otherwise, Gloucester attacked with few men, was surrounded and died.",
        "Little by little, the schiltrons pushed and wore down the English. The English archers were ordered to stop shooting so as not to hit their own men. When they tried to outflank the Scots, they were dispersed by Keith's 500 horsemen. The English cavalry, pressed against the Bannock Burn, had no room to maneuver and lost its formation.",
        "Valence and Giles d'Argentan saw that the battle was lost and that the king had to be saved. They seized the reins of Edward's horse and led him away, followed by about 500 horsemen of the royal guard. After leaving the king safe, d'Argentan said goodbye, turned back and was killed: he claimed never to have fled from a battle, according to tradition.",
        { h: "The flight" },
        "Edward went first to Stirling Castle, but Moubray shut the gates on him, because the castle was about to be handed over to the Scots. Pursued by James Douglas and a small group, the king went on to Dunbar Castle and from there sailed to Berwick. The rest of the army tried to return to the border, 140 km (90 miles) to the south, and many were killed by pursuers or by the inhabitants of the regions they passed through. The Welsh soldiers of Sir Maurice de Berkeley stayed together and most reached Carlisle."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "English losses were enormous, and the numbers vary. The chronicler Thomas Walsingham speaks of 700 men-at-arms killed and another 500 spared for ransom. For the infantry, the historian Peter Reese estimates that no more than a third returned: of some 16,000 foot soldiers, about 11,000 would have died. Other estimates for English infantry dead start at 4,000. Among the dead were Gloucester, Clifford and d'Argentan; among the captured, Hereford. The Scots lost little: according to Reese, only two knights died.",
        "Stirling surrendered to Bruce, who had the castle razed so the English could not retake it. Bothwell Castle, where English nobles, including Hereford, had taken refuge, also surrendered. Dunbar and Jedburgh were taken. In 1315, only Berwick was still outside Bruce's control. In exchange for the captured nobles, Edward II released Bruce's wife, Elizabeth de Burgh, his sisters Christina and Mary, his daughter Marjorie and Bishop Robert Wishart of Glasgow, who had been held in England for eight years.",
        { h: "Why it matters" },
        "The victory opened the north of England to Scottish raids and allowed the Scottish invasion of Ireland. The war only ended in 1328, with the Treaty of Edinburgh–Northampton, in which England recognized Scotland's independence and Robert Bruce as its rightful king. Bruce died in 1329.",
        "For the historian W. M. Mackenzie, Bannockburn, after Falkirk and Courtrai (1302), showed that well-led infantry could defeat the armored cavalry on which all warfare until then had rested. According to him, the defeated learned the lesson quickly and applied it in their own way. It is an interpretation, and not the only one: another historian, Herbert Maxwell, stresses that the battle barred Edward's road to Stirling.",
        { h: "Curiosities and controversies" },
        { note: "The place: no one knows exactly where the battle took place. The monument and the statue of Bruce, by Pilkington Jackson, stand at the traditional site, which most historians now consider wrong for the first day." },
        { note: "The Scottish cavalry: it is often called 'light', but this seems to be a misreading of the poet John Barbour. They were men-at-arms, on lighter horses than the English ones." },
        { note: "The sources: the accounts come from a few chroniclers, such as the Scottish poet John Barbour (The Brus), the Englishman Thomas Gray (Scalacronica), the Vita Edwardi Secundi, the Lanercost Chronicle and Thomas Walsingham. Each tells the story from their own side, and the death tolls should be read with caution." }
      ]}
    ]
  },

  crecy: {
    war: "Hundred Years' War, campaign of Normandy and Calais (1346–1347)",
    hook: "On an August late afternoon, the flower of French chivalry hurled itself wave after wave against a hill where the English waited, standing and rested.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The Hundred Years' War began on 24 May 1337, when the Great Council of Philip VI of France decided to take back the French lands of Edward III of England. Edward, through his mother, claimed the French throne. In 1328, the French nobles had preferred Philip of Valois. In 1340, the French fleet was destroyed at Sluys, and so the war came to be fought on land.",
        "In 1346, Edward landed in Normandy and began a [[chevauchée|cavalgada]] through northern France. The English plundered towns along the way.",
        { h: "The road to Crécy" },
        { timeline: [
          ["12 July 1346", "Edward III lands at Saint-Vaast-la-Hougue, in Normandy."],
          ["26 July", "The English take Caen by storm and capture the Constable of France, Raoul, Count of Eu."],
          ["12 August", "They reach Poissy, about 3 km from Paris. Then they turn north, burning the bridge."],
          ["Night of 24 August", "They cross the Blanchetaque ford, on the River Somme, and defeat about 3,500 Frenchmen who were guarding it."],
          ["26 August", "The Battle of Crécy."]
        ]},
        "The French had devastated the region, so the English would find no food, and Philip reached the Somme a day before Edward, ordering all the bridges and fords guarded. The English were hungry and exhausted. After crossing at Blanchetaque, they discovered that the help they expected had failed: the Flemings gave up their attack and the ships that were supposed to wait for them at Le Crotoy were not there. Edward decided to fight with what he had and prepared a defensive position at Crécy-en-Ponthieu."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Edward III of England, 33 years old" },
        "King since the age of 14, he would become known for his military successes. At Crécy, he chose ground where the French would have to attack uphill, against men-at-arms on foot and archers on the flanks, and he waited.",
        { h: "The Prince of Wales, 16 years old" },
        "The eldest son, Edward, later called the Black Prince, born on 15 June 1330, commanded the [[vanguard|vanguarda]], helped by the Earls of Northampton and Warwick. In the middle of the fight, he was even knocked to his knees.",
        { h: "Philip VI of France, about 53 years old" },
        "He assembled one of the largest armies ever seen in France, but was without the [[constable|condestável]], who had been captured at Caen and was the one who normally organized the troops. His plan was to use the crossbowmen to shake the English infantry and then hurl the cavalry at it. Modern historians think it was a reasonable plan, which had worked against other armies.",
        { h: "The other names" },
        "On the French side, the Genoese crossbowmen were under Antonio Doria and Carlo Grimaldi. Charles, Count of Alençon, the king's brother, commanded the first line of cavalry, together with the blind John of Luxembourg, King of Bohemia, aged 50. Then came the Duke of Lorraine and the Count of Blois. On the English side, the Earl of Arundel commanded one of the divisions."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The English were, according to modern historians, between 7,000 and 15,000. The historian Andrew Ayton calculates about 14,000: 2,500 men-at-arms, 5,000 [[longbow|arco longo]] archers, 3,000 light cavalry soldiers and 3,500 spearmen. Clifford Rogers arrives at 15,000, and Jonathan Sumption, from the capacity of the ships, at 7,000–10,000. Almost all were English and Welsh. Up to a thousand were convicted criminals, who fought on the promise of a pardon. Each archer received, in the morning, two extra quivers, for a total of 72 arrows.",
        "The French were more numerous, and the number is even more uncertain, because the financial records of the campaign were lost. The two chroniclers who give totals speak of 72,000 or 120,000 men, which historians consider an exaggeration. Current estimates speak of about 8,000 mounted men-at-arms, between 2,000 and 6,000 hired Genoese crossbowmen and a mass of infantry of unknown number. Rogers says they were at least double the English, perhaps triple.",
        { h: "The terrain and the English position" },
        "Edward chose a slope facing southeast, broken by woods and terraces. The left was anchored on Wadicourt, the right on the village of Crécy and the River Maye, which made it hard to surround. The English dug pits in front of the lines to hinder the cavalry, set up primitive gunpowder weapons, among them [[bombards|bombarda]], and placed the baggage in a circle behind.",
        "The army was divided into three 'battles': the Prince's, with 800 men-at-arms, 2,000 archers and 1,000 foot soldiers, among them Welsh spearmen; Arundel's, on the left, with 800 men-at-arms and 1,200 archers; and the reserve, with the king himself, 700 men-at-arms and 2,000 archers. These figures per division are not fully confirmed. In each division, the men-at-arms stood in the center, on foot, with spearmen behind and archers on the flanks and in front, some hidden in woods or lying in the wheat. The English had been there since dawn and had rested and eaten. The French had marched about 19 km (12 miles).",
        { h: "The battle in ten movements" },
        { formation: true },
        "Around noon on 26 August, French scouts spotted the English. In the French column, the crossbowmen went in front, followed by Alençon's cavalry, then that of Lorraine and Blois, and last Philip. As news arrived that the English had stopped to fight, the column hurried and lost order: the knights overtook the infantry and the wagons.",
        "A council of war advised attacking only the next day, but the attack began that same afternoon. The accounts do not make clear whether it was Philip's decision or whether the knights rushed ahead against his will. The French unfurled the [[oriflamme|oriflamme]], which meant that no prisoners would be taken.",
        "A heavy rain fell and the English archers unstrung their bows. A chronicler of the time, followed by some historians, says that the rain slackened the strings of the Genoese crossbows. Others say the strings were protected with leather and that the rain hampered both sides equally.",
        "The Genoese exchanged shots with the English archers. The longbow reached farther and shot more than three times as fast. The crossbowmen were without their [[pavises|pavês]], which had stayed with the French baggage, and the mud hindered reloading. A recent study concludes that they shot perhaps two volleys and fell back before the exchange of fire truly began. The French knights coming up behind, enraged, attacked the fleeing Genoese. The English bombards fired, adding to the confusion, but the sources do not agree on how many dead they caused.",
        "Then Alençon's division attacked. The charge was disorderly, because it had to pass through the fleeing Genoese, climb a muddy slope and fall into the pits. The archers probably held their arrows until they could pierce armor, at about 80 meters. The French horses had no armor and many were killed or wounded, throwing their riders and hindering those that followed. By the time it reached the English men-at-arms, the charge had already lost its force. Alençon died.",
        "New French formations repeated the charge, now over heaps of dead horses and men. The hand-to-hand fighting was terrible. At one point, the Prince of Wales was knocked to his knees, and the king sent part of the reserve to help. The number of French charges is disputed, and they continued until night. In one of them, the Count of Blois had his men dismount and was killed. The blind John of Bohemia tied his horse's reins to those of his companions and galloped into the fight: all were knocked down and killed.",
        "Philip joined the fight, had two horses killed under him and was struck by an arrow in the jaw. The oriflamme bearer fell, and the standard was captured. Near midnight, the king left the field and the French army dispersed. The English slept where they had fought. The next morning, French forces still arriving were attacked by the English men-at-arms, now on horseback, and pursued for miles. The Duke of Lorraine was among the dead."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "The losses were very unequal. The count made after the battle gave about 40 English dead, among them three or four men-at-arms. Some modern historians think that is too few and speak of about 300. The English heralds counted 1,542 noble French men-at-arms dead, and more than 2,200 coats of arms were taken as spoil. No one counted the common soldiers. Jean Le Bel speaks of 15,000 to 16,000, Froissart of 30,000 dead or captured; the historian Alfred Burne guessed 10,000 of infantry, and says it is a guess. On the second day, the French dead were 2,000 to 4,000, and Edward III himself spoke of 4,000. Among the dead were a king (John of Bohemia), nine princes, ten counts, a duke, an archbishop and a bishop.",
        { h: "Why it matters" },
        "For the historian Clifford Rogers, a total English victory; for Jonathan Sumption, a political catastrophe for the French crown. The news reached the English Parliament on 13 September. Edward went to besiege Calais on 4 September 1346, and the city fell after about eleven months, on 3 August 1347: Philip even marched to relieve it, in July 1347, but withdrew without fighting. The English held Calais until 1558. The battle showed the strength of the longbow in western Europe, and English and Welsh archers began to serve as mercenaries in Italy and even in Hungary.",
        { h: "Curiosities and controversies" },
        { note: "The prince's spurs: a tradition says that Edward III, warned that his son was in trouble, refused to send help to give the boy the chance to 'win his spurs', although the Prince was already a knight. Other accounts say the king sent part of the reserve. The two versions are not easy to reconcile." },
        { note: "How many charges? It is usually read that there were about fifteen or sixteen, but modern historians say the number is disputed." },
        { note: "The range of the bow: there is no agreement. Some say more than 300 meters; others, at most 200. A 2017 study concluded that heavy-tipped arrows pierced armor plates at 225 meters, but only superficially." },
        { note: "English casualties: the official number of about 40 dead is disputed, and only two English dead have been identified by name." }
      ]}
    ]
  },

  poyang: {
    war: "Red Turban Rebellion and the fall of the Yuan dynasty (1351–1368)",
    hook: "On one of the largest freshwater lakes in China, burning boats decided who would rule the country after the Mongols.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the mid-14th century, China was ruled by the Mongol [[Yuan|yuan]] dynasty, and the government was rotten. In 1351 the [[Red Turbans|turbantes vermelhos]] rebellion began, and spread across the country. In the middle and lower valley of the Yangtze River, three rebel leaders established themselves: Chen Youliang, who proclaimed himself emperor of the Han kingdom, based at Wuchang and later at Jiangzhou (present-day Jiujiang); Zhu Yuanzhang, at Yingtian (present-day Nanjing); and Zhang Shicheng, at Pingjiang (present-day Suzhou). Since their territories were neighbors, war between them was only a matter of time.",
        "Chen came from a family of fishermen (the sources differ on his birth surname). In 1357, he killed Ni Wenjun and took his troops, and in 1360 he killed the rebel leader Xu Shouhui and declared himself emperor. That same year he attacked Zhu near Nanjing, but the tide fell and left his large ships stranded, and he was defeated. Zhu, for his part, was the son of peasants. At 16 he lost his parents and a brother to an epidemic, lived as a novice monk and beggar, and in 1352 joined the Red Turbans. He took Nanjing in 1356.",
        { h: "The road to the lake" },
        { timeline: [
          ["1351", "The Red Turban rebellion begins."],
          ["1360", "Chen Youliang declares himself emperor and is defeated by Zhu near Nanjing."],
          ["Early 1363", "Zhu takes his main troops north, against Zhang Shicheng. Chen takes advantage."],
          ["April 1363", "Chen besieges Nanchang, which guards the entrance to Lake Poyang."],
          ["24 to 29 August", "Zhu's fleet reaches Hukou, the lake's outlet, relieves Nanchang and meets Chen's fleet."],
          ["30 August to 4 October", "The battle."]
        ]},
        "With Zhu far away, Chen saw a chance to turn the game around. He wanted to take Nanchang, which guarded the entrance to Lake Poyang and the road to Nanjing, and to make the local chiefs of Jiangxi join him. The garrison, in which the sources mention Zhu's nephew, Zhu Wenzheng, and General Deng Yu, withstood the siege, partly thanks to cannons. According to one source, a fisherman slipped through the blockade in a small boat and warned Zhu in Nanjing, about 560 km away."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Zhu Yuanzhang, 34 years old" },
        "The former monk turned general. By 1363 he was already the lord of Nanjing and called himself Duke of Wu. Later, in 1364, he declared himself King of Wu. In 1368, he would found the [[Ming|ming]] dynasty and rule as the Hongwu Emperor. At Poyang, he bet on smaller, faster boats and on firearms and incendiary weapons, and organized his fleet into 11 squadrons. The order was to close in on the enemy, use gunpowder weapons first, then bows and crossbows, and only at the end the short-range weapons.",
        { h: "Chen Youliang, close to 44 years old" },
        "Born around 1320, he had become a powerful warlord, with the strongest fleet on the upper Yangtze. His [[tower ships|navio-torre]] were floating fortresses. In 1360 and again in 1363, his large ships ran aground when the water fell.",
        { h: "The other names" },
        "Guo Xing advised Zhu to use fire and trebuchets. On Chen's side, the brothers Chen Youren and Chen Yougui, and General Chen Puluo, died in the battle. General Zhang Dingbian escaped to Wuchang taking the young Chen Li, Chen's second son."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers in the sources are enormous and do not match. For Chen, they speak of 650,000 men, 600,000 or 300,000. For Zhu, of 200,000 or 100,000. The historian Tonio Andrade, according to the summary of a podcast on Chinese history, calculates that about half a million people and several hundred ships took part in all. Even half of that would be a lot, but these chronicle numbers are not exact counts. In all versions, Zhu's men were far fewer than Chen's.",
        "Chen had more than a hundred ships, among them three-deck tower ships with armored sides, from which stones could be thrown at Zhu's low boats. Zhu had smaller, faster boats, with firearms and incendiary weapons: fire bombs, fire lances and arrows, rockets and a weapon called 'No Alternative', a reed mat full of gunpowder hung from the foremast, according to a Ming source. Even so, the cannons and firearms were not decisive: what won the battle were the incendiary weapons.",
        { h: "From the first clash to the siege" },
        { note: "The sources do not match day by day: they tell the unfolding in a different order, and the dates vary between the Chinese and Gregorian calendars. What follows is what the accounts have in common." },
        "Zhu's fleet reached Hukou on 24 August and relieved Nanchang on 28 August. On 29 August, Chen sailed north, and the fleets met. On 30 August, Zhu organized the fleet into 11 squadrons. Naval [[trebuchets|trabuco]] threw incendiary bombs, and more than twenty of Chen's ships caught fire. But Zhu's flagship also caught fire and ran aground on a sandbar, and Chen's ships pushed Zhu's rebels into shallow water. A new hand-to-hand attack failed, with many casualties. According to the Chinese account, Zhu was at a disadvantage for three days, and his ship was almost captured. Boats of Zhu's guard arrived and pulled him out.",
        "The next day (or, according to the Chinese version, on the fourth day), the fight turned. According to one version, the wind changed in Zhu's favor, and he sent [[fire ships|brulote]] against the enemy fleet and destroyed hundreds of ships. According to the other, Zhu followed Guo Xing's advice and used fire and trebuchets, which burned about twenty tower ships, and at least 25,000 of Chen's men died. In this version, Chen's men killed Zhu's prisoners in front of the lines, which left Zhu's soldiers no choice but to fight to the end.",
        "On 2 September, the fleets fought again, and, even though smaller, Zhu's boats isolated and destroyed large ships of Chen, who withdrew. With autumn, the water level fell, according to the Chinese account, and Chen's heavy ships, which drew deep, ran aground, while Zhu's light ones could attack and anchor near the shore. Zhu blocked the lake's outlet at Hukou and kept up the siege for about a month, while his infantry surrounded Chen by land.",
        { h: "The breakout at Hukou" },
        "On 4 October (3 October, in another source), Chen, with the lake's outlet closed, tried to break the blockade and return to Wuchang. Zhu released fire ships adrift, which scattered Chen's fleet into isolated groups, and Zhu's infantry, on land, shot dense clouds of arrows. Chen died struck by an arrow in the head. According to the Chinese version, he had put his head out of the cabin. Another 20,000 men were lost, according to the same source, and the rest of his army dispersed."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "The numbers for Zhu's losses appear as 1,346 dead and 11,347 wounded, but none of the articles explains where they come from. On Chen's side, his leader and most of his army were lost. Chen Li, Chen's son, who escaped to Wuchang with Zhang Dingbian, withstood a siege and surrendered to Zhu in 1364 (in February or March, depending on the source).",
        { h: "Why it matters" },
        "The victory made Zhu the strongest rebel leader and gave him control of the Yangtze valley. Five years later, in 1368, he overthrew the Mongols and founded the Ming dynasty. Poyang is remembered as a famous case of a smaller force beating a larger one on water, and as one of the great naval battles in history, for the number of men, although this fame depends on numbers that no one confirms.",
        { h: "Curiosities and controversies" },
        { note: "Chen's death: it is commonly said that the arrow hit him in the eye, but the accounts we consulted speak only of 'head' (and of a stray arrow, according to the Chinese version). The detail of the eye was not confirmed." },
        { note: "One battle in two accounts: the English account and the Chinese one diverge on who won what on each day, on who was defending Nanchang and even on when Chen attacked the city. Anyone writing about Poyang has to choose, and the sources do not always allow it." },
        { note: "Fire, not cannon: despite its fame as the 'first naval battle with gunpowder', historians say that firearms coexisted with incendiary weapons and that what decided it was fire." }
      ]}
    ]
  },

  kulikovo: {
    war: "Conflict between Moscow and the Golden Horde (from 1374)",
    hook: "On a foggy morning, on the banks of the Don, the Russians of Moscow showed that the Golden Horde could be beaten.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After the Mongol invasion of the 13th century, the Russian principalities became vassals of the [[Golden Horde|horda dourada]]: each prince paid [[tribute|tributo]] and needed the approval of the [[khan|cã]] to rule. Moscow, a growing principality, was constantly disputing territory with its neighbors.",
        "In 1359, the Golden Horde fell into crisis: Khan Berdi Beg was killed and what the sources call the Great Troubles began. Mamai, Berdi Beg's son-in-law and military commander, took power in the western part. He was not a descendant of Genghis Khan, so he could not be khan: he ruled behind puppet khans, and his power was fragile.",
        "In those days, the prince of Moscow, Dmitri, had come to the throne at the age of 9, in 1359, and Metropolitan Alexis governed for him in the first years. Dmitri maneuvered, using force and bribes, until in 1365 the prince of Nizhny Novgorod gave up the throne of Vladimir and, in 1375, he forced Tver to submit. Open conflict with Mamai began in 1374, for reasons the sources do not explain well. According to a biography of Dmitri, it was from then on that he refused to pay tribute to Mamai.",
        { h: "The road to Kulikovo" },
        { timeline: [
          ["1359", "Berdi Beg is killed. The Great Troubles begin in the Golden Horde. Dmitri takes the principality of Moscow, at the age of 9."],
          ["1374", "Open conflict begins between Dmitri and Mamai."],
          ["1377", "A Moscow detachment is defeated on the Pyana River. Moscow takes Bolghar."],
          ["1378", "The army sent by Mamai is defeated by Dmitri on the Vozha River."],
          ["August 1380", "Dmitri gathers his troops at Kolomna and marches to meet Mamai."],
          ["6 September", "The Russian army reaches the Don."],
          ["8 September", "The battle."]
        ]},
        "In 1380, Mamai demanded more tribute, 'as in the time of Khan Janibeg'. Dmitri, according to the most detailed account, offered to pay only the amount of the earlier agreement. Mamai allied with Jogaila of Lithuania, and counted on Oleg, prince of Ryazan, although Oleg's role is sometimes disputed. Meanwhile, in the east, Tokhtamysh, with Tamerlane's support, was gaining strength and wanted to reunite the Horde under his command. Even so, in 1380 Mamai decided to go in person against Moscow."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Dmitri of Moscow, 29 years old" },
        "Born in October 1350, he had been the first prince of Moscow to openly challenge Mongol rule. At Kulikovo, tradition puts him in the front line. The accounts disagree about his role: one has him fighting at the front without a scratch; another, wounded, unconscious, found among the dead. From then on, he came to be called Donskoi, 'of the Don'.",
        { h: "Mamai" },
        "A powerful military chief of the Golden Horde, of the Kiyat clan. For almost twenty years he ruled the puppet khans. In 1380, he was still fighting to keep control of the Horde and wanted to reassert dominion over the Russians.",
        { h: "The other names" },
        "Vladimir Andreyevich, prince of Serpukhov, Dmitri's cousin and called 'the Brave', and Dmitri Bobrok, brother-in-law of the [[grand prince|grão-príncipe]] (some sources call him Dmitri of Volhynia), commanded the ambush regiment. The [[boyar|boiardo]] Mikhail Brenok was left in command of the main regiment, under the great banner. On the Horde's side, the champion Temir-Murza, also called Chelubey, and a puppet khan, who died in the battle. The Russian champion was Alexander Peresvet, a warrior-monk whom tradition says was sent by St. Sergius of Radonezh."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No one knows how many there were. The Expanded Chronicle speaks of 150,000 to 200,000 Russians, which does not fit on the battlefield. Historians have been lowering the number: Maslovsky, in 1881, said 100,000–150,000; Razin, in 1957, 50,000–60,000; Kirpichnikov, in 1966, at most 36,000; the archaeologist Dvurechensky, in 2014, 6,000–7,000. Modern estimates, such as those that appear in the English Wikipedia, fall between 15,000 and 20,000 Russians, against up to 30,000 for Mamai; traditional historiography speaks of 50,000 to 60,000 Russians. The main argument for reducing is demographic: even 16th-century Russia rarely gathered 30,000 to 40,000 men at once. Some authors criticize this reduction.",
        "On Mamai's side, there is no source from the Horde itself, and the Russian ones only want to show that the enemies were many. He gathered Tatars and mercenaries from Transcaucasia and from the Genoese colonies of Crimea. His allies, Jogaila and Oleg, arrived late, and their numbers can be ignored. On Dmitri's side came troops from most of northeastern Russia, from part of Smolensk and from the upper Oka. No men came from Nizhny Novgorod or from Tver.",
        { h: "The terrain" },
        "The 'clear field' of Kulikovo is near the mouth of the Nepryadva River, on the Don, where the Tula region is today, in Russia. The left bank of the Nepryadva was dense forest, and the right, steppe with clearings. Ravines with thick brush protected the flanks, which ruled out any surprise attack from the sides. The exact site is still disputed: a team of Dvurechensky placed it between the Nepryadva and the Smolka, and another scholar thinks it was near the source of the Nepryadva.",
        { h: "The crossing" },
        "On 6 September, Dmitri reached the Don and reorganized the army. In a council, it was decided to cross the river before the enemies could join up, even knowing that this cut off the retreat. On the morning of 8 September, on the feast day of the Nativity of the Virgin, the army crossed the Don in a thick fog. According to the Nikon Chronicle, the bridges were destroyed afterward. On the clear field near the mouth of the Nepryadva, the Russians formed up, and then the Tatars appeared and did the same.",
        "The Russian army had six 'regiments': the Patrol, the Vanguard, the Right Hand, the Left Hand, the Great and the Ambush, divided into about 23 banners. In the field, they were in several lines, and the names of the regiments may not match their real position. The terrain did not allow a wide front, and the units probably entered the fight gradually. The ambush regiment, of Vladimir and Bobrok, stayed hidden behind the line, in an oak grove.",
        { h: "The duel and the clash" },
        "The battle opened with a duel between champions: Peresvet and Temir-Murza. In the first charge, each killed the other with his lance. It was left unanswered whose victory it was. Some historians think this scene is probably literary: in the poem Zadonshchina, Peresvet fights in the middle of the crowd.",
        "According to the Expanded Chronicle, the bulk of the forces clashed at the 'sixth hour of the day', about 10:35 by our clock. The hand-to-hand fighting was long and brutal. The [[Tatars|tártaros]] used their habit of shooting projectiles and withdrawing, but the narrow field did not let them surround the Russians. Even so, little by little, they gained the upper hand. They reached the banner of the Great regiment, brought it down and killed Brenok. The Left Hand regiment was turned, and part of the Moscow recruits panicked. Russian defeat seemed near, and the Tatars threw in all their forces.",
        "It was then that the cavalry of the [[ambush|emboscada]] regiment attacked the Horde's flank by surprise, and the enemy line collapsed. Men and horses, tired from the long fight, could not withstand the blow of the fresh troops. The Russians pursued the Tatars for more than 50 km, to the Krasivaya Mecha River.",
        { note: "A detail that appears only in the Tale of the Battle with Mamai (a 16th-century text): Dmitri supposedly swapped horses and gave his cloak and helmet to Brenok, to fight without being recognized. Historians distrust this narrative, the least reliable of the sources." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Russian losses were very heavy: a third of the commanders of the 23 banners died. Dmitri survived, wounded, and (in one of the versions) was found unconscious among the dead. The victorious army stayed six days 'on the bones'. Mamai's losses are unknown. The poem Zadonshchina speaks of 253,000 dead, a dubious figure, like almost everything in that poem.",
        "Jogaila returned to Lithuania on learning of the defeat. In Ryazan, the people attacked groups of Russians returning and took prisoners; Oleg fled, but came back later and had to accept Dmitri as 'elder brother'. Mamai was defeated by Tokhtamysh on the Kalka River, lost his allies and was killed by Tokhtamysh's men near Solkhat, at the end of 1380 or the beginning of 1381 (another source says in Caffa).",
        { h: "Why it matters" },
        "The one who profited most was Tokhtamysh, who reunited the Horde. In 1382, he took and burned Moscow and forced Dmitri to accept him as sovereign. The victory at Kulikovo did not end Mongol rule, which only ended formally in 1480, on the Ugra River. But it showed that Moscow had become the dominant force in the Russian northeast, and Dmitri's prestige grew. On dying, in 1389, Dmitri was the first grand prince to leave the throne to his son, Vasily I, without consulting the khan.",
        { h: "Curiosities and controversies" },
        { note: "The sources: what is known comes from the 'Kulikovo cycle', texts such as the Chronicle, the Zadonshchina (inspired by the Tale of Igor's Campaign) and the Tale of the Battle with Mamai. All have errors or fiction. The Tale, for example, puts in a meeting between Dmitri and St. Sergius of Radonezh that almost certainly did not happen. There is no source from the Tatars." },
        { note: "The duel: it has been studied by Russian historians, who point to six arguments against the story of the duel between Peresvet and Temir-Murza. Even so, it is the most famous image of the battle." },
        { note: "Archaeology: there are hardly any secure finds. Dvurechensky's catalog, from 2008, lists only a few pieces that may be from 1380: four spearheads, one dart head, axe fragments, an armor plate, a piece of mail and some arrowheads. Many weapons found in the region are from the 16th to 18th centuries." },
        { note: "Two readings: Russian tradition sees Kulikovo as the beginning of liberation from the 'Tatar yoke'. Others say the battle did not change everything immediately, but showed Moscow's power. One historian, Ostrowski, argues that the older German chronicles indicate that the battle was less important than is told." }
      ]}
    ]
  },

  aljubarrota: {
    war: "Crisis of 1383–1385 (succession to the throne of Portugal)",
    hook: "A Portuguese army almost five times smaller chose its ground, dug pits and, in a single afternoon, secured Portugal's independence.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In October 1383, King Ferdinand I of Portugal died, without sons. His only daughter was Beatrice, about 10 years old. Six months earlier, in April, Ferdinand had signed with Juan I of Castile the Treaty of Salvaterra de Magos: Beatrice would marry Juan, and the Portuguese crown would belong to the couple's children. The Portuguese nobility feared that this would turn Portugal into a part of Castile, and the great merchants of Lisbon were furious at having been left out of the negotiations. With no heir accepted by all, Portugal was without a king from 1383 to 1385, with Queen Leonor Teles as regent.",
        "The first act of hostility came in December 1383, when the party of Dom João, Master of the Order of Avis and natural son of King Peter I, killed João Fernandes Andeiro, Count of Ourém, the queen's counselor. The merchants of Lisbon gave Dom João the title of 'regent and defender of the realm'. Juan I forced Leonor to leave the regency.",
        { h: "The road to Aljubarrota" },
        { timeline: [
          ["October 1383", "Ferdinand I dies. The crisis begins."],
          ["December 1383", "The Master of Avis kills Count Andeiro."],
          ["April 1384", "Nuno Álvares Pereira defeats a Castilian expedition at Atoleiros."],
          ["Summer 1384", "Juan I besieges Lisbon for about four months, but lack of food and plague make him withdraw."],
          ["6 April 1385", "The [[Cortes|cortes]] of Coimbra acclaim the Master of Avis as King John I."],
          ["May 1385", "Juan I invades Portugal with about 31,000 men. A northern column is defeated at Trancoso."],
          ["14 August 1385", "The battle."]
        ]},
        "In the meantime, Dom João sought help from England. In October 1384, King Richard II wrote to him about the agreement to send a small contingent. At Easter 1385, about 200 English archers and some 500 men-at-arms, mostly English and Gascons, arrived. After the May invasion, Dom João joined his army to that of Nuno Álvares Pereira, already [[constable|condestável]], at Tomar, and the two decided to face the Castilians before they reached Lisbon."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "King John I, 28 years old" },
        "Born in 1357, natural son of Peter I, he was Master of Avis, that is, head of a religious military order. He was acclaimed king in April 1385. Described as tall and strong, he fought on foot in the battle, with a battle-axe. He reigned 48 years, the longest reign in Portuguese history.",
        { h: "Nuno Álvares Pereira, 25 years old" },
        "Born on 24 June 1360, illegitimate son of the prior of Crato, from a family of the old Portuguese and Galician nobility. He was Constable of Portugal and the one who chose the ground and prepared the defense. Later he became a Carmelite friar and was canonized, in 2009. The historian Russell notes that he and Antão Vasques de Almada mastered the new forms of warfare: the combined use of archers and dismounted men-at-arms in defense.",
        { h: "Juan I of Castile, 26 years old" },
        "Born in August 1358, he had married Beatrice in 1383 and wanted the Portuguese crown for her. He entered Portugal with an enormous army and with French allies. He died in 1390, falling from his horse.",
        { h: "The other names" },
        "On the Castilian side, the sources mention Pedro López de Ayala. France sent knights, and there were Aragonese and Genoese. Some of Nuno's half-brothers fought on Beatrice's side."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to McMurdo, the Portuguese numbered about 6,600: 4,000 foot soldiers, 1,700 'lances', 800 crossbowmen and 200 English archers. The Castilians numbered about 31,000: 15,000 foot soldiers, 6,000 'lances', 8,000 crossbowmen, more than 2,000 heavy French horsemen and 15 mortars. These are estimates, and the Portuguese total itself does not match the sum by type. The chronicler Froissart says that, when the French attacked, 'at least twenty thousand' Castilians stayed behind, on the plain, and did not advance.",
        { note: "For a long time it was said that the Portuguese were poorly armed. The friar who preached after the battle said so, but current historians think the sermon exaggerated the inferiority to magnify the victory: the Portuguese nobility could afford knightly armor." },
        { h: "The terrain" },
        "Nuno chose São Jorge, between Leiria and Alcobaça, near Aljubarrota: a small hill, flat on top, surrounded by streams and with steep slopes in parts. The village of Chão da Feira sits on the widest part. Placing the army on the road to Lisbon forced the Castilians to fight on the Portuguese terms, rather than besiege the capital.",
        { h: "The Portuguese position" },
        "Around 10 in the morning of 14 August, the Portuguese army took position on the north side of the hill, facing the road by which the Castilians would arrive. The arrangement was that of the defensive battles of the time: dismounted knights and infantry in the center, archers on the flanks. In the vanguard, the left wing was made up of some 200 young unmarried nobles, the 'Lovers' Wing' (Ala dos Namorados) (one source puts it on the right). The right wing, also of 200, was the 'Honeysuckle Wing' (Ala da Madressilva). In the rear, the reserve stayed with Dom João himself. Covering the back of the position, which would later become the front, were linked pits and ditches and [[caltrops|abrolhos]], hidden to catch the cavalry. Archaeology, from 1958, found about 800 pits and dozens of ditches.",
        { formation: true },
        "The Castilians arrived around noon, from the north. Juan I saw the strong position and decided not to fight on the Portuguese terms: his enormous army began to go around the hill toward the south side, where the slope was gentler. The Portuguese turned the position around and went to the south slope, and, because they were fewer and had less ground to cover, they got there very early. Nuno ordered ditches, pits and caltrops dug, applying the techniques of the English, already used at Atoleiros. This movement of 'inverting the position' appears in several accounts, but the details of how and when it was done are not well documented.",
        "Around 6 in the evening, the Castilians were ready, tired from a march that had begun early, under the August sun. There was no time to rest.",
        { h: "The French attack" },
        "The initiative was the Castilians'. The heavy French cavalry, allied with Castile, attacked with everything, to break the Portuguese lines. According to Froissart, there were some two thousand horsemen. It was a disaster: they had advanced well ahead of the rest of the army, without support, were climbing a slope toward a narrow, fortified position and were hit by rains of arrows and bolts that killed horses and confused the men. Even so, being very well armed, they reached hand-to-hand fighting with the Portuguese vanguard, where the Portuguese and Anglo-Gascon men-at-arms fought on foot. The losses were heavy and the effect of the attack nil. Those who did not die were captured and taken to the rear.",
        "Froissart says the Castilians did not hurry to help them, because the French were not much liked: 'let them begin and tire themselves out', they are said to have said. This is Froissart's version, and is not confirmed.",
        { h: "The main body of the army" },
        "When the main Castilian body entered the battle, it impressed with its order, equipment and numbers. But, to reach the Portuguese line, it had to pass between the two streams that protected the flanks, and became disorganized. Nuno split the vanguard into two parts, and Dom João ordered the archers and crossbowmen to fall back and took the reserve into the open space.",
        "There were no men to guard the French prisoners, and they were killed. The sources differ on this: in one version, Dom João ordered them killed on the spot, because he needed everyone at the front; in Froissart's, it was the council of war that decided to kill them before the Castilian main body arrived.",
        "The Castilians climbed the slope with the sun at their backs, squeezed between the Portuguese defenses and their own rear, under arrows from the English archers, behind the line, and bolts from the wings. The knights of the main body had to dismount and break in half their four-meter lances to enter the melee alongside the infantry. Losses were high on both sides, especially in the Lovers' Wing, which became famous for holding the knights who tried to surround it; in the Honeysuckle Wing, the attack had more success, but only for a short time and late.",
        { h: "The rout" },
        "When the Castilian royal standard-bearer fell, the rear, already discouraged, thought the king was dead and fled in panic. In a short time it was a general rout, in which Juan I had to run to save his life, leaving soldiers and many nobles on foot. The Portuguese pursued them down the hill and killed many while there was light."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Portuguese losses were fewer than a thousand men. Castilian losses were 4,000 to 5,000 dead on the field, and perhaps another 5,000 killed in the night and the next day by the local inhabitants. The next morning, the bodies dammed the streams around the hill. Great names of the nobility died, and entire units, such as that of Soria. Castile decreed mourning until Christmas 1387. Dom João offered the surviving Castilians amnesty and free passage home.",
        { h: "Why it matters" },
        "The victory confirmed Dom João as king, and the House of Avis rose to the throne. In 1386, the Treaty of Windsor sealed the military alliance with England, which is considered the oldest still in force. In 1387, John married Philippa of Lancaster, and their children included King Duarte and Prince Henry the Navigator, who sponsored the expeditions to Africa. In October 1385, Nuno also defeated another Castilian army at Valverde. The border conflicts only ended with the death of Juan I, in 1390, and Castile only recognized Portugal in 1411, with the Treaty of Ayllón.",
        "In thanks, Dom João had the monastery of Santa Maria da Vitória built, at Batalha, where he founded the town of the same name. In 1393, a chapel was raised where Nuno's banner had stood, which made it possible to know the exact place of the battle. In 2010, the battlefield was declared a national monument.",
        { h: "Curiosities and controversies" },
        { note: "The baker woman: tradition says that Brites de Almeida, the baker woman of Aljubarrota, killed seven Castilians hidden in her oven single-handedly. The story is a legend, but the participation of the people in the massacre of the fugitives is considered historical." },
        { note: "The name: at first, the battle was called the 'royal battle', because the two kings were on the field." },
        { note: "Duration: one account says the sun set 'an hour after the start of the battle'. This is hard to reconcile with a start around 6 pm. The exact time is uncertain." },
        { note: "The 'square': many books speak of a Portuguese 'square', copied from Atoleiros. Recent historians dispute this image." },
        { note: "The sources: the chronicler Fernão Lopes is the basis of many details. Froissart says he relied on witnesses. Excavations of the field, since 1958, have helped confirm the terrain and the defenses." }
      ]}
    ]
  },

  kosovo: {
    war: "Ottoman expansion in the Balkans (14th century)",
    hook: "A battle in which both leaders died, and not even historians agree on who won.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The Serbian emperor Stefan Dušan died in 1355, and the empire he had created began to fall apart. His son, Stefan Uroš V, could not hold the nobles, who became almost independent. In 1371, the Ottomans destroyed much of the Serbian nobility at the Battle of the Maritsa, and Uroš died without children that December. The one who stood out among the regional lords was Prince Lazar Hrebeljanović, who ruled Morava Serbia, in the north of the former empire. He saw himself as the successor of the old Nemanjić dynasty, and the Serbian Church supported him, but the nobility never recognized him as supreme lord.",
        "On the other side, Sultan Murad I had been on the throne since 1362, had made Adrianople his capital and had subdued a good part of the Balkans. He forced the Serbian princes, the emperor of Bulgaria and the Byzantine emperor to pay him tribute.",
        { h: "The road to Kosovo" },
        { timeline: [
          ["1371", "The Ottomans defeat the Serbs at the Maritsa. Stefan Uroš V dies."],
          ["1386", "The Ottomans are defeated at Pločnik (the date may be 1387)."],
          ["1388", "The Ottomans suffer another setback, at Bileća."],
          ["14 June 1389", "Murad I reaches Pristina, in Kosovo."],
          ["15 June 1389", "The battle."]
        ]},
        "After the setbacks at Pločnik and Bileća, Murad left Philippopolis (present-day Plovdiv) in the spring of 1388 and took a longer route, through Ihtiman, Velbužd and Kratovo, which led him to Kosovo, one of the great crossroads of the Balkans. From there, he could attack the lands of Lazar or those of Vuk Branković. Lazar, who gathered his troops near Niš, went to Kosovo when he learned that Murad had gone to Velbužd. It was, according to historians, the best place he could choose, because it gave control of all of Murad's routes."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Murad I, about 62 years old" },
        "Born in 1326, he was called Hüdavendigâr, 'the sovereign'. He took Adrianople and expanded Ottoman power across the Balkans. At Kosovo, he led the center of the army, with the [[Janissaries|janízaros]] in front.",
        { h: "Prince Lazar, about 60 years old" },
        "Born around 1329, he ruled Morava Serbia from 1371 until his death. He assembled a coalition: his own men, the contingent of his son-in-law Vuk Branković and troops sent by King Tvrtko I of Bosnia, under Vlatko Vuković.",
        { h: "The other names" },
        "On the Ottoman side, Murad's youngest son, Bayezid, and the commander Evrenos led the right wing, of Europeans; the other son, Yakub Çelebi, the left, of Anatolians. On the Christian side, Branković commanded the right and Vuković the left, which also had the foreign troops. Miloš Obilić, a Serbian knight, is the name tied to Murad's death."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No one knows the numbers. According to the most-cited Western historians, the Ottomans numbered 27,000 to 30,000; Cox speaks of 30,000 to 40,000, and Tucker of 27,000 to 40,000, up to 8,500 on horseback. The Christians would be 15,000 to 20,000 (Sedlar: 12,000 to 20,000), 15,000 to 25,000 (Cox) or 12,000 to 30,000 (Tucker). The Ottoman chronicler Neşri, writing in the early 16th century, spoke of some 500,000 Christians, double Murad's army: an exaggerated number. The Janissaries were at most about 2,000. There were about 1,000 archers on the Ottoman wings.",
        "The Christian coalition was mostly Serbs and Bosnians. As for the rest, scholars disagree: the only Albanian known with certainty to have fought and died there is Teodor II Muzaka; there may have been Hungarians, Bulgarians, Wallachians and others. The historian Daniel Waley says that almost nothing can be said with certainty about the number and origin of the troops.",
        { note: "There is no account by anyone who was there. The sources were written by people with political, religious and literary interests, and the oldest Serbian ones weigh more on religious rhetoric than on facts." },
        { h: "The terrain" },
        "Kosovo Polje, the 'field of blackbirds', about 5 km northwest of present-day Pristina, on the lands of Vuk Branković. It was one of the largest battles of the late Middle Ages.",
        { h: "The deployment" },
        "On the Serbian side, Lazar stood in the center, Branković on the right and Vuković on the left. The heavy Serbian cavalry went to the front, and the light cavalry, with bows, to the flanks. On the Ottoman side, Murad stood in the center, with the Janissaries in front and his mounted guard behind. Ottoman sources say he put camels in front to frighten the Serbian cavalry.",
        { h: "The battle" },
        "The Serbian and Turkish sources tell different things, and reconstructing the course of events is difficult. It is believed that the battle began with the Ottoman archers shooting at the Serbian cavalry, which prepared for the attack in wedge formation. The charge broke the Ottoman left wing, Yakub's, but had less success against the center and the right.",
        "When the charge ended, the Ottoman light cavalry and light infantry counterattacked, and the Serbs' heavy armor became a disadvantage. In the center, the Serbs pushed the Ottomans back, except on Bayezid's wing, which barely held against Vuković's Bosnians, who caused very high casualties. Then Bayezid counterattacked fiercely, pushed the Serbs back and, later, shattered the Serbian infantry. The flanks still held, and Vuković's Bosnians shifted toward the center to plug the gaps.",
        "In the version considered historical, Vuk Branković, seeing that there was no hope of victory, withdrew to save as many men as possible after Lazar was captured. Some time later, the remaining Bosnians and Serbs also left the field.",
        { h: "The death of Murad" },
        "In one of the earliest versions, twelve Serbian knights (the Jugović brothers, in the epic poetry) broke through the Ottoman defense. One of them, later identified as Miloš Obilić, feigned desertion. Brought before Murad, he drew a hidden dagger and killed him, and was killed by the guard. Another version says that Obilić played dead on the field and stabbed the sultan as he passed. It is not known when it happened: some sources place the event after the battle turned against the Serbs, others at the start, when Obilić wanted to prove his loyalty after being accused of treason. A letter from Florence, of 20 October 1389, confirms that Murad was killed in the battle, without naming the killer: it speaks of one of twelve Serbian nobles. The Italian Mignanelli, in 1416, says it was Lazar. He is held to be the only Ottoman sultan killed in combat."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Outcome" },
        "Both armies were devastated, and Lazar and Murad died. For Lazar's end, the sources give different versions: some say he died in the battle; writings of Patriarch Danilo and other contemporaries say he was captured and beheaded by the Turks. Bayezid had his brother Yakub killed on learning of his father's death, and remained the sole heir.",
        "Who won? There is no agreement. Most scholars say the result was inconclusive. The historian Fine concludes it was a draw, since the Turks also withdrew. Tvrtko's court, in letters to Trogir (1 August) and to Florence, claimed that the Ottomans had been defeated. The Ottoman chronicler Neşri, on the other hand, describes a great Ottoman victory. European accounts concentrated on the sultan's death.",
        { h: "Why it matters" },
        "Serbia was left without men to defend itself, while the Ottomans had many other troops in Anatolia. Already in 1390–1391, the Ottomans resumed the offensive in southern Serbia, and Hungary tried to advance in the north. The Serbian nobles split between a pro-Ottoman faction, in the north, and a pro-Hungarian one, in the south. Some kept fighting, others were integrated into the Ottoman hierarchy. Lazar's daughter married into Bayezid's household, and Lazar's son, Stefan Lazarević, became a loyal ally of the sultan, fighting at Nicopolis. The Serbian principalities that were not yet vassals became so in the following years. The fall of Smederevo, on 20 June 1459, marks the end of medieval Serbia.",
        "Lazar's remains were taken from Pristina to Ravanica monastery in 1390 or 1391. He is venerated as a martyr and saint, with a feast on 15 June in the old calendar, which falls on 28 June, the [[Vidovdan|vidovdan]].",
        { h: "Curiosities and controversies" },
        { note: "Vuk Branković, the 'traitor': the idea that he betrayed Lazar comes from oral tradition and was set down in writing in 1601, by Mavro Orbini. Historians consider it baseless. He later fought against the Ottomans at Nicopolis, and died a prisoner of theirs. According to the English Wikipedia article, the 'traitor' narratives in the Kosovo myth were supposedly created by Stefan Lazarević." },
        { note: "The date: 15 June 1389 is the Julian calendar date. The letter from Florence gives 28 June, which is the date Serbia celebrates on Vidovdan, but the Gregorian equivalent of 15 June would be 23 June, not 28." },
        { note: "The myth: the legend of Kosovo took shape in stages. The cycle of epic poems of Vuk Karadžić, in the 19th century, gave it its final form, and Serbian nationalism made it central after the Congress of Berlin (1878). In 1989, on the 600th anniversary, Slobodan Milošević gave his speech at Gazimestan, at the site of the battle." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  bannockburn: {
    terrain: [
      { t: "sea", x: 0, y: 61, w: 100, h: 9, l: "Bannock Burn stream and marshy ground" },
      { t: "note", x: 14, y: 4, l: "New Park woods" },
      { t: "note", x: 86, y: 4, l: "Stirling lies to the north" }
    ],
    units: [
      { id: "sM", s: "a", k: "inf", w: 18, h: 7, l: "Moray" },
      { id: "sB", s: "a", k: "inf", w: 18, h: 7, l: "Bruce and islanders" },
      { id: "sE", s: "a", k: "inf", w: 18, h: 7, l: "Edward Bruce" },
      { id: "sD", s: "a", k: "inf", w: 18, h: 7, l: "Douglas and Stewart" },
      { id: "sK", s: "a", k: "cav", w: 14, h: 4, l: "Keith, 500" },
      { id: "eG", s: "b", k: "cav", w: 16, h: 5, l: "Gloucester and Hereford" },
      { id: "eC", s: "b", k: "cav", w: 12, h: 4, l: "Clifford and Beaumont" },
      { id: "eH", s: "b", k: "cav", w: 22, h: 5, l: "English cavalry" },
      { id: "eI", s: "b", k: "inf", w: 26, h: 5, l: "English infantry" },
      { id: "eAr", s: "b", k: "inf", w: 14, h: 4, l: "Archers" },
      { id: "eK", s: "b", k: "cav", w: 12, h: 4, l: "King Edward II" }
    ],
    steps: [
      { t: "23 June 1314. Bruce waits in the New Park woods, with four blocks of spearmen (schiltrons) and about 500 horsemen in reserve. The English arrive tired, with the cavalry in front and the infantry behind.",
        p: { sM: [22, 13], sB: [42, 11], sE: [62, 13], sD: [82, 11], sK: [10, 24],
             eG: [30, 50], eC: [72, 48], eH: [50, 50], eI: [48, 58], eAr: [80, 57], eK: [92, 50] } },
      { t: "Gloucester and Hereford advance toward the woods. Henry de Bohun attacks Bruce, who has almost no armor, and Bruce kills him with the axe.",
        p: { eG: [30, 36] } },
      { t: "The Scots push the English back across the stream. Clifford and Beaumont go around the woods, and Moray comes out with his schiltron and shatters their squadron in open field.",
        p: { eG: [30, 50], eC: [66, 34], sM: [62, 27] }, x: ["eC"] },
      { t: "Night. The English camp on the marshy plain, behind the stream, dejected. The Scot Alexander Seton, who was serving Edward II, defects to Bruce's side and says English morale is low.",
        p: { sM: [22, 15], eG: [28, 54], eH: [48, 52], eI: [46, 58], eAr: [74, 56], eK: [86, 52] } },
      { t: "24 June. At dawn, the schiltrons come out of the woods in formation and stop to pray. Edward II is said to have exclaimed: 'They kneel to ask for mercy!'.",
        p: { sM: [22, 26], sB: [42, 24], sE: [62, 26], sD: [82, 24], sK: [10, 30] } },
      { t: "Gloucester, accused of cowardice by the king, attacks with few men, is surrounded and dies.",
        p: { eG: [34, 34] }, x: ["eG"] },
      { t: "The schiltrons push the English back. The English archers are ordered to stop shooting so as not to hit their own men; when they try to outflank the Scots, Keith's 500 horsemen disperse them.",
        p: { sM: [22, 36], sB: [42, 34], sE: [62, 36], sD: [82, 34], eAr: [78, 46], sK: [66, 46] }, x: ["eAr"] },
      { t: "The English cavalry, pressed against the Bannock Burn, has no room to maneuver and loses its formation.",
        p: { sM: [22, 42], sB: [42, 41], sE: [62, 42], sD: [82, 41], eH: [44, 55], eI: [48, 60] }, x: ["eH"] },
      { t: "Valence and Giles d'Argentan seize the king's reins and lead him away, with about 500 horsemen of the guard. D'Argentan turns back to fight and dies. The English infantry collapses and flees.",
        p: { sM: [22, 48], sB: [42, 47], sE: [62, 48], sD: [82, 47], eK: [94, 36], eI: [46, 63] }, x: ["eK", "eI"] }
    ]
  },

  crecy: {
    terrain: [
      { t: "hill", x: 50, y: 15, rx: 46, ry: 13, l: "Crécy hill" },
      { t: "note", x: 10, y: 3, l: "Crécy and the River Maye" },
      { t: "note", x: 90, y: 3, l: "Wadicourt" },
      { t: "note", x: 50, y: 33, l: "pits in front of the lines" }
    ],
    units: [
      { id: "eP", s: "a", k: "inf", w: 20, h: 5, l: "Prince of Wales" },
      { id: "eA", s: "a", k: "inf", w: 20, h: 5, l: "Arundel" },
      { id: "eR", s: "a", k: "inf", w: 20, h: 4, l: "King's reserve" },
      { id: "aL", s: "a", k: "inf", w: 8, h: 8, l: "Archers" },
      { id: "aC", s: "a", k: "inf", w: 10, h: 6, l: "" },
      { id: "aR", s: "a", k: "inf", w: 8, h: 8, l: "Archers" },
      { id: "bG", s: "b", k: "inf", w: 24, h: 3, l: "Genoese crossbowmen" },
      { id: "bAl", s: "b", k: "cav", w: 24, h: 5, l: "Alençon and John of Bohemia" },
      { id: "bL", s: "b", k: "cav", w: 24, h: 5, l: "Lorraine and Blois" },
      { id: "bF", s: "b", k: "cav", w: 22, h: 4, l: "Philip VI" }
    ],
    steps: [
      { t: "26 August 1346. The English wait at the top of the hill, rested since dawn. In each division, men-at-arms on foot in the center and archers at the ends and in front; the baggage stays behind. The French column arrives tired from a march of some 19 km.",
        p: { eP: [32, 20], eA: [68, 20], eR: [50, 11], aL: [14, 23], aC: [50, 24], aR: [86, 23],
             bG: [50, 46], bAl: [34, 56], bL: [66, 56], bF: [50, 64] } },
      { t: "The French council advises waiting until the next day, but the attack begins that afternoon, with the sacred banner unfurled. A heavy rain falls, and the English unstring their bows.",
        p: { bG: [50, 38], bAl: [34, 48], bL: [66, 48], bF: [50, 58] } },
      { t: "The Genoese crossbowmen shoot, without the pavises, which stayed in the baggage, and in the mud. The English longbows reach farther and fire faster.",
        p: { bG: [50, 32] } },
      { t: "The Genoese flee after a few volleys, and Alençon's knights, who come up behind, still attack the fugitives. The English bombards fire.",
        p: { bG: [14, 38], bAl: [40, 40] }, x: ["bG"] },
      { t: "Alençon's charge climbs the hill in disorder, through the mud, stumbles into the pits and takes arrows. The horses, without armor, fall.",
        p: { bAl: [36, 30] } },
      { t: "The charge reaches the men-at-arms already without force and is repulsed. Alençon dies. New French formations approach over heaps of dead horses and men.",
        p: { bAl: [36, 28], bL: [64, 40] }, x: ["bAl"] },
      { t: "Second wave: the hand-to-hand fighting is fierce. The Prince is even knocked to his knees, and the king sends a detachment of the reserve to help.",
        p: { bL: [40, 27], eR: [40, 15], eP: [32, 21] } },
      { t: "The charges continue until night. The Count of Blois dismounts his men and dies. The blind John of Bohemia ties his horse's reins to those of his companions and gallops into the fight; all die.",
        p: { bL: [60, 28] }, x: ["bL"] },
      { t: "Philip VI joins the fight, has two horses killed under him and takes an arrow in the jaw.",
        p: { bF: [50, 34] } },
      { t: "Near midnight, Philip leaves the field and the French army disperses. In the morning, French forces arriving are attacked by the English men-at-arms, now on horseback.",
        p: { bF: [50, 62], eP: [32, 34], eA: [68, 34] }, x: ["bF"] }
    ]
  },

  aljubarrota: {
    terrain: [
      { t: "hill", x: 50, y: 30, rx: 30, ry: 16, l: "São Jorge hill (Chão da Feira)" },
      { t: "sea", x: 14, y: 12, w: 5, h: 36, l: "" },
      { t: "sea", x: 81, y: 12, w: 5, h: 36, l: "" },
      { t: "note", x: 50, y: 47, l: "pits, ditches and caltrops" }
    ],
    units: [
      { id: "pL", s: "a", k: "inf", w: 10, h: 4, l: "Lovers" },
      { id: "pV", s: "a", k: "inf", w: 20, h: 4, l: "Vanguard (Nuno)" },
      { id: "pR", s: "a", k: "inf", w: 10, h: 4, l: "Honeysuckle" },
      { id: "pAL", s: "a", k: "inf", w: 6, h: 4, l: "" },
      { id: "pAR", s: "a", k: "inf", w: 6, h: 4, l: "" },
      { id: "pRes", s: "a", k: "inf", w: 20, h: 4, l: "Reserve (King John)" },
      { id: "cFr", s: "b", k: "cav", w: 20, h: 4, l: "French cavalry" },
      { id: "cM", s: "b", k: "inf", w: 26, h: 5, l: "Main body" },
      { id: "cR", s: "b", k: "cav", w: 12, h: 4, l: "Rear and the king" }
    ],
    steps: [
      { t: "14 August 1385, around 10 am. The Portuguese take position on the north side of the hill, with archers and crossbowmen on the flanks, the two wings of 200 young men in the vanguard and the king's reserve behind. The Castilians have not yet arrived.",
        p: { pL: [33, 20], pV: [50, 20], pR: [67, 20], pAL: [24, 20], pAR: [76, 20], pRes: [50, 13],
             cFr: [30, 4], cM: [62, 5], cR: [88, 6] } },
      { t: "Around noon, the Castilian vanguard arrives from the north. Juan I sees the strong position and begins to go around the hill, toward the gentler south slope.",
        p: { cFr: [88, 47, 90], cM: [90, 25, 90], cR: [90, 6, 90] } },
      { t: "The Portuguese invert the position and go to the south slope. Being fewer, they arrive well ahead. Nuno orders ditches, pits and caltrops dug.",
        p: { pV: [50, 36], pL: [33, 36], pR: [67, 36], pAL: [24, 36], pAR: [76, 36], pRes: [50, 29],
             cFr: [72, 60, 0], cM: [90, 42, 90], cR: [90, 18, 90] } },
      { t: "Around 6 pm, the Castilians, tired from the march under the August sun, are ready, on the south side.",
        p: { cFr: [50, 58, 0], cM: [50, 64, 0], cR: [50, 68, 0] } },
      { t: "The heavy French cavalry, about 2,000 men according to Froissart, attacks uphill, well ahead of the rest of the army, against a narrow, fortified position. It takes arrows and bolts.",
        p: { cFr: [50, 43] } },
      { t: "The French reach hand-to-hand fighting with the vanguard and almost all die or are captured. The prisoners are killed (the sources differ on why and on whose orders).",
        p: { cFr: [50, 40] }, x: ["cFr"] },
      { t: "The main body of the Castilian army enters late and is squeezed between the two streams. Nuno splits the vanguard, and Dom João has archers and crossbowmen fall back and takes the reserve into the open space.",
        p: { cM: [50, 50], pAL: [28, 32], pAR: [72, 32], pRes: [50, 41] } },
      { t: "The Castilian knights dismount and break their lances in half to fight on foot. The Lovers' Wing holds the knights who try to surround it; the Honeysuckle Wing gives way, for a short time.",
        p: { cM: [50, 46], cR: [50, 56] } },
      { t: "The Castilian royal standard-bearer falls. The rear believes the king is dead and flees, in panic. Juan I escapes.",
        p: { cM: [50, 52], cR: [50, 64] }, x: ["cM", "cR"] },
      { t: "The Portuguese come down the hill in pursuit and kill many fugitives while there is light. The next morning, the bodies dam the streams.",
        p: { pV: [50, 48], pL: [33, 48], pR: [67, 48], pRes: [50, 42], cM: [50, 58], cR: [50, 68] } }
    ]
  }
});
