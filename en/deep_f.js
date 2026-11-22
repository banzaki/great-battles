// In-depth battles, batch f: feishui, catalaunicos, salsu, yarmuk, heliopolis, dafei.
// Checked against Wikipedia (EN) and the works it cites, Britannica, and the ancient and medieval chronicles.

Object.assign(GLOSSARY, {
  "dinastia": "A family that rules a country for several generations, passing power from father to son (or from brother to brother).",
  "exército beifu": "The professional army of the Eastern Jin dynasty, formed from the hereditary troops of powerful northern families. It was well trained and cohesive, unlike armies of conscripts.",
  "federados": "Peoples who fought for the Roman Empire in exchange for land and pay, under the command of their own chiefs. In 451, a good part of the Roman army in Gaul was made up this way.",
  "mestre dos soldados": "In Latin, magister militum. The title of the commander in chief of the Roman army of the West. Aetius held it.",
  "godos": "A Germanic people that split into two branches: the Visigoths, who settled in southern Gaul, and the Ostrogoths, who remained under Hunnic rule until the death of Attila.",
  "alanos": "A nomadic people of Iranian origin, famous for their cavalry. Some of them settled in the Loire valley, in Gaul, as allies of Rome.",
  "gépidas": "A Germanic people who lived in the Danube region and were subjects of Attila. Their king, Ardaric, was one of the Hun's trusted advisers.",
  "retirada fingida": "An old trick: pretend to flee in order to draw the enemy to a bad place, away from his food or into an ambush.",
  "logística": "Everything that keeps an army on its feet: food, water, weapons, transport and roads. Many wars were lost for lack of logistics, not for lack of courage.",
  "bizantinos": "The modern name for the Romans of the East. The Byzantine Empire was the eastern half of the Roman Empire, with its capital at Constantinople, and always called itself Roman.",
  "califa": "The successor of Muhammad as leader of the Muslim community. He was at once religious leader and head of state.",
  "califado rashidun": "The first caliphate (632 to 661), ruled by the first four successors of Muhammad: Abu Bakr, Umar, Uthman and Ali. 'Rashidun' means 'the rightly guided'.",
  "uádi": "A deep, enclosed valley with steep walls, carved by a river (or by rare rains) in the desert. In Arabic, wadi.",
  "guarda móvel": "The elite cavalry of Khalid ibn al-Walid, kept in reserve to rush to whatever point of the line was giving way, or to deliver the decisive blow.",
  "cavalaria pesada": "Horsemen with armor and lance, trained for the charge. Strong head-on, but slower than light cavalry.",
  "protetorado": "A territory that an empire controls and protects without governing directly, usually through military garrisons and local rulers.",
  "tibetanos": "People of the Tibetan plateau who, in the 7th century, formed a powerful empire. Called Tubo in the Chinese sources, they came to contest Central Asia with China."
});

Object.assign(DEEP, {
  feishui: {
    war: "Former Qin invasion of southern China (383)",
    hook: "An army that heard soldiers in the wind and in cranes, and was destroyed by fear.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the year 383, China was divided in two. The north was fought over by nomadic peoples and short-lived kingdoms. The south was ruled by the Eastern Jin [[dynasty|dinastia]], protected by the Yangtze River.",
        "The man who put the north together was Fu Jian, emperor of the Former Qin, of the Di people. He took the kingdom of Yan in 370, tore Sichuan from the Jin in 373 and captured Xiangyang in 379. Around 381, he controlled the whole north and was preparing the invasion of the south. What stood in his way was the Yangtze, which he thought too little to stop him: according to tradition, he said his soldiers needed only to throw their horsewhips into the river to dam it.",
        { h: "The road to the Fei River" },
        { timeline: [
          ["May 383", "The Jin general Huan Chong tries to retake Xiangyang with 100,000 men and is repelled by a Qin relief force of 50,000."],
          ["August to September 383", "Fu Rong, Duke of Yangping, sets out in front with 300,000 men. Fu Jian follows from Chang'an with the main force."],
          ["October 383", "Fu Rong takes Shouyang (today's Lu'an, in Anhui), in the region of the Huai River."],
          ["November 383", "The two armies face each other across the Fei River."],
          ["384 to 385", "The Former Qin falls apart in rebellions. Fu Jian is killed in 385."]
        ]},
        "Fu Jian summoned, according to the Book of Jin, six in every ten able-bodied men of his kingdom, plus 30,000 elite guards. Most were drawn from recently conquered peoples, such as the Xianbei and the Xiongnu, with little loyalty and little training. Many advisers, including Fu Rong himself, were against the war. Fu Jian made it anyway."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Fu Jian, emperor of the Former Qin" },
        "He was an energetic and ambitious ruler, who had successfully unified the north and thought the greatness of his army would solve the rest. His mistake, according to tradition, was to confuse size with strength. An army made of recently defeated peoples with no ties among them is enormous on paper and fragile in combat.",
        { h: "Xie An, Xie Shi and Xie Xuan" },
        "On the Jin side, overall strategy was in the hands of the prime minister Xie An. He sent his younger brother, Xie Shi, and his nephew Xie Xuan to command the [[Beifu army|exército beifu]], of about 80,000 men. It was a well-trained, cohesive force, made up of hereditary contingents of powerful northern families who had fled to the south.",
        "Xie An had a reputation for calm. When Huan Chong, worried about the capital, sent 3,000 elite soldiers to reinforce it, Xie An sent them back, saying the court's defense was already in order. When Xie Xuan asked what instructions to follow, he only said he would give more instructions later. It looked like indifference; it was confidence.",
        { h: "Fu Rong, Zhu Xu and Liu Laozhi" },
        "Fu Rong, Duke of Yangping, had opposed the war and nevertheless led it at the front. Zhu Xu was a captured Jin official, whom Fu Jian sent to convince Xie Shi to surrender. Instead, he warned the Jin that the bulk of the Qin army had not yet arrived. Liu Laozhi was the commander who, together with Xie Xuan, made use of the warning."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Book of Jin gives the Qin 870,000 men, the sum of the 270,000 horsemen and 600,000 infantry that the text attributes to Fu Jian. This number comes from a chronicle written to exalt the victory, and modern historians consider it greatly exaggerated. A 2012 study by Thilo Diefenbach concludes that the scale was 'dramatically exaggerated', although the battle did take place. On the Jin side, the figure of 80,000 for the Beifu army is more widely accepted.",
        { note: "There was a time when it was doubted that the battle had existed: a 1968 article by Michael Rogers questioned it, but Hans Bielenstein refuted that view in 1996. Today the consensus is that it happened, but on a smaller scale than the chronicles claim." },
        { h: "The terrain" },
        "The Fei River, which no longer exists today, ran near Lu'an, in Anhui, in the region of the Huai River. The sources say little more about the ground. What matters is that there was a river between the two armies, and that the Qin side camped on the west bank, the Jin on the east bank.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, Fu Jian left the bulk of his army at Xiangcheng and went ahead with 8,000 light horsemen to join Fu Rong. He sent Zhu Xu to Xie Shi with a proposal of surrender. Zhu Xu advised the opposite: attack the forward units before the rest arrived.",
        "Second, Xie Xuan and Liu Laozhi attacked the Qin vanguard with 5,000 elite men and killed 15,000. The Jin then lined up in a long front, to look more numerous, and Fu Jian overestimated the enemy's strength.",
        "Third, the two armies reached the Fei River, the Qin to the west and the Jin to the east, and the Jin could not advance. Xie Xuan sent a message to Fu Rong proposing that the Qin pull back a little, so the Jin could cross and fight. Most Qin generals were against it, but Fu Jian decided to accept, with the idea of attacking in the middle of the crossing, when the Jin would be vulnerable. Fu Rong agreed and ordered the withdrawal.",
        "Fourth, the order to pull back went wrong. In a large, loosely bound and tired army, a retreat easily turns into flight. Zhu Xu, who was among the Qin, shouted that the army had been defeated. The withdrawal turned into panic. Xie Xuan, Xie Yan and Huan Yi crossed the river and attacked.",
        "Fifth, Fu Rong tried to hold back the flight, but his horse fell and he was killed by Jin soldiers. The Jin commanders read the confused tracks and wheel marks as a sign of total disorder, not of a retreat, and pursued. The Qin army came apart and abandoned large depots of food and supplies.",
        "Sixth, the flight lasted days. According to the Book of Jin, in the biography of Xie Xuan, those who escaped heard the wind and the cry of the cranes and thought it was the Jin behind them, and ran day and night. From this came the Chinese expression [[fengsheng helì|chengyu]], 'the sound of the wind and the cry of the crane', which today describes extreme nervousness. Fu Jian was hit by a stray arrow and escaped to the army of Murong Chui, one of the few that had not come apart."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Jin won with light losses. The Qin lost a large part of their army in the flight, to combat, hunger and cold, but there is no reliable number. Fu Jian returned to Luoyang escorted by Murong Chui, who refused to kill him, although his son and his brother insisted.",
        { h: "The fall of the Former Qin" },
        "The news of the defeat set off rebellions. In 384, Murong Chui revolted and founded the Later Yan. Yao Chang, another general of the old army, founded the Later Qin. Fu Jian was captured after the fall of Chang'an and, in the autumn of 385, strangled by soldiers of Yao Chang. The Former Qin lasted until 394, but never recovered.",
        "The Jin advanced to the Yellow River and recovered a good part of the northern heartland, according to Wikipedia.",
        { h: "Why it matters" },
        "The victory preserved southern China as an independent state and gave the Jin the base to retake part of the north, in the period of the Northern and Southern dynasties. Had Fu Jian won, the south would have been absorbed by a northern empire made of mixed peoples. Wikipedia calls it one of the most decisive battles in Chinese history.",
        { h: "Curiosities and controversies" },
        { note: "The date: English Wikipedia gives 30 November 383 in the infobox, but in the text says only 'autumn'. The two do not match, and the source does not explain the difference." },
        { note: "Xie An's game: according to tradition, when the news of the victory arrived, Xie An was playing a board game with a guest. He said only: 'The boys have won a battle.' Only later, in his room, did he break the heel of a sandal on the doorsill without noticing, from sheer excitement. The sources vary on which game it was: Wikipedia says xiangqi, but the story is usually told with go, and xiangqi may not even have existed in 383." },
        { note: "The panic: the Book of Jin is the source of the expression about the wind and the cranes. It was written long after the events, and part of the picture may be literature. But the outcome, the collapse of the Former Qin, is a fact." }
      ]}
    ]
  },

  catalaunicos: {
    war: "Attila's invasion of Gaul (451)",
    hook: "The battle in which Romans and Goths united against Attila, and in which, even so, no one can say who won.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 451, the man defending Gaul for the Western Roman Empire was the general Flavius Aetius, the [[master of soldiers|mestre dos soldados]], in the service of the emperor Valentinian III. In Gaul, Roman power depended on allied peoples: Visigoths, Burgundians, Franks and [[Alans|alanos]] who lived inside the empire as [[federates|federados]].",
        "Across the Rhine was Attila, king of the Huns. Several Germanic peoples, such as the [[Gepids|gépidas]] and the Ostrogoths, were his subjects. In 450, he turned his eyes to the West. According to tradition, Honoria, the emperor's sister, confined by her family, sent the eunuch Hyacinthus to ask Attila for help. He read the request as a marriage proposal and demanded half the empire as a dowry. Valentinian refused. Ian Hughes suggests a different reading: Honoria would have used Attila, who was an honorary Roman general, as a piece in a political dispute.",
        { h: "The road to the Catalaunian Plains" },
        { timeline: [
          ["450", "The episode of Honoria's letter and ring, which Attila uses as a pretext."],
          ["Early 451", "Attila crosses the Rhine with his allies. Metz falls on 7 April, according to the sources, although there are doubts."],
          ["June 451", "Attila besieges Orléans, where the Alans of Sangiban hold out."],
          ["14 June 451", "The allied Roman army reaches Orléans and Attila withdraws."],
          ["About 20 June", "Battle on the Catalaunian Plains, the date proposed by J. B. Bury."],
          ["452", "Attila invades Italy. In 453 he dies; in 454, his empire falls apart."]
        ]},
        "Aetius first tried to convince the Visigothic king Theodoric I, who, according to tradition, found the Roman forces too weak and preferred to defend his own lands. The one who convinced him, and other hesitant peoples, was Avitus, a nobleman of Gaul. The Alan king Sangiban promised to open the gates of Orléans to Attila, but the inhabitants refused, and the city held out until the allies arrived. For Hughes and other historians, the defense of Orléans was what really decided the campaign."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Attila, king of the Huns" },
        "He ruled a collection of subject and allied peoples, among them Gepids and Ostrogothic [[Goths|godos]]. In 451 he turned against the West, after the pretext of Honoria's letter.",
        { h: "Aetius, master of soldiers" },
        "The Roman general who commanded what was left of the Western forces in Gaul. According to Sidonius Apollinaris, his army was small and scattered, although Wikipedia notes that this may be an exaggeration in favor of Avitus. His mission was hard: to keep together allies who distrusted one another.",
        { h: "Theodoric I, Thorismund and Sangiban" },
        "Theodoric I, king of the Visigoths, had a kingdom of his own in Gaul. His son Thorismund fought at his side. Sangiban, king of the Alans, was of doubtful loyalty. According to Hughes, Aetius put him in the center precisely because he knew the Alans were good against the Huns' tactics, and perhaps because he wanted to keep an eye on him."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Here the numbers depend on whom you read. The historian Jordanes, who wrote long after and relied on Cassiodorus, speaks of 165,000 dead, not counting a skirmish on the previous night. The chronicler Hydatius says that 'almost 300,000' fell. Modern historians find all this impossible. Schultheis calculates that Attila had about 70,000 men, and that Aetius's Germanic federates numbered no more than 50,000. Heather estimates that the Visigoths alone could field about 25,000.",
        { note: "The list of peoples is long. Jordanes enumerates, on Aetius's side, Franks, Sarmatians, Armoricans, Burgundians, Saxons and others, besides Alans and Visigoths; on Attila's side, Ardaric's Gepids and Valamir's Amali Goths. Thompson doubts that some of these names were really there." },
        { h: "The terrain" },
        "No one knows where it was. The place lies near Châlons-en-Champagne or Troyes, and the candidates range from Méry-sur-Seine to La Cheppe and the ridge of Montgueux, the best studied today. What Jordanes describes is a plain that rises on one side by a steep slope to a ridge. That ridge was the center of the fight.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on the morning of the day, Attila's soothsayers examined the entrails of animals and foretold a disaster for the Huns, although an enemy chief would die. Hughes thinks this may be a later invention. Attila waited until the ninth hour, around 2:30 p.m., to attack, they say because sunset would help his army flee if it lost.",
        "Second, the field was laid out like this: the Huns took the right of the ridge, Aetius's Romans the left, leaving the heights empty between them. The Visigoths were on the right of the allied line and Sangiban's Alans in the center. Hughes argues that Attila put his subjects on the wings and the Huns themselves in the center.",
        "Third, the fight for the ridge. The Huns tried to take it and were beaten by Aetius's Romans and Thorismund's Goths.",
        "Fourth, Theodoric, attacking Valamir's Amali Goths, was killed without his men seeing. Jordanes gives two versions: he fell from his horse and was trampled, or he was run through by the spear of an Amali named Andag.",
        "Fifth, the Visigoths, faster than the Alans, charged Attila's personal guard. The king of the Huns fell back to his camp, fortified with wagons.",
        "Sixth, night came. Thorismund, returning to his lines, entered the Hunnic camp by mistake and was wounded before his men rescued him. Aetius was separated from his men and spent the night among the Goths.",
        "Seventh, on the second day the field was full of bodies and the Huns did not come out. Romans and Goths surrounded the camp. Attila, according to tradition, ordered a pyre of saddles built to throw himself into the flames rather than be captured.",
        "Eighth, the Visigoths found Theodoric's body and carried it away. Thorismund wanted to attack the camp, but Aetius dissuaded him: he advised him to return at once to Toulouse and take the throne before his brothers did. Thorismund returned and was king without resistance. According to Gregory of Tours, Aetius sent the Franks home in the same way and kept the spoils of the field.",
        { note: "Hughes proposes another version: the Huns reached the right first, Aetius repelled the Gepids, Thorismund attacked the Hunnic center and almost killed Attila, and the darkness left both sides not knowing who had won until morning." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The honest answer is that the contemporary sources do not say clearly. Prosper says only that the Huns withdrew, after losing the will to fight. The tradition of a Roman victory begins with Cassiodorus, in the 6th century, and is the one Jordanes followed. For modern historians, the battle was tactically and strategically indecisive or, in Kim's reading, even favorable to Attila; Schultheis's opinion is that the narrative of a Gothic victory grew over time.",
        "In 452, Attila invaded Italy. He destroyed Aquileia after a three-month siege and devastated the Po valley. An embassy, which included Pope Leo I, convinced him to turn back, probably because of hunger and disease in his army. Attila died in 453. In 454, after the battle of Nedao, his empire fell apart. Aetius himself was murdered by Valentinian III.",
        { h: "Why it matters" },
        "For Gibbon, it was the last victory won in the name of the Western Roman Empire. Creasy saw it as Christian Europe defeating pagan invaders from Asia, and that is the image that stuck. J. B. Bury, on the contrary, thought that Attila was already withdrawing, that the real turning point was the defense of Orléans and that a Hunnic victory would not have changed history so much. Kim, for his part, thinks the battle weakened Roman power in northern Gaul and favored the Salian Franks and the Burgundians.",
        { h: "Curiosities and controversies" },
        { note: "The date: 20 June is a proposal by Bury, supported by the chronicler Hydatius, who places the battle between two appearances of Halley's comet. Some authors have proposed the first week of July or 27 September." },
        { note: "The Pouan treasure, found in 1842 and for a long time linked to the burial of Theodoric, has no proven connection to the battle." },
        { note: "Jordanes depends heavily on Cassiodorus, and scholars such as Whately and Barnish think he was doing politics, tied to Justinian's wars against the Goths. Kim sees echoes of Herodotus and of Marathon. Altheim doubted the whole narrative." }
      ]}
    ]
  },

  salsu: {
    war: "Sui–Goguryeo War (598–614)",
    hook: "A Korean general sent a poem to the enemy, and 300,000 Chinese went away to die.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of the 6th century, China was ruled by the Sui [[dynasty|dinastia]]. Its emperor Yang wanted to show the strength of the empire. The problem lay to the northeast: Goguryeo, a kingdom between Manchuria and Korea, which would not submit to China.",
        "The war did not begin in 612. In 598, Goguryeo attacked beyond the Liao River, and the emperor Wen's retaliation failed. Yang decided to settle the matter with a force that, according to the chronicles, was one of the largest ever assembled.",
        { timeline: [
          ["598", "Goguryeo attacks beyond the Liao River. Emperor Wen's retaliation fails."],
          ["612", "Yang invades Goguryeo. The Liao River is crossed, and the fortresses of Liaodong are besieged."],
          ["612, June", "The general Eulji Mundeok goes to the Sui camp and later sends his poem to the general Yu Zhongwen."],
          ["612, July", "The Sui, in retreat, are attacked at the Salsu River."],
          ["613 and 614", "Two further invasions by Yang also fail. The Sui dynasty collapses."]
        ]}
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Eulji Mundeok, general of Goguryeo" },
        "On him, the main sources are Korean, especially the Samguk Sagi, by Kim Busik, written in 1145, more than 500 years later. What is known is that he was a general of Goguryeo and that, in 612, he did something very clever: he went to the Sui camp pretending to surrender and then escaped, after seeing the enemy army up close. In this way he judged the Sui's morale before drawing them into his own territory.",
        { h: "Yu Zhongwen and Yuwen Shu" },
        "The two Sui generals. Yang, who controlled everything, had secretly ordered that King Yeongyang or Eulji be arrested if they had the chance. Liu Shilong, who advised letting Eulji go to negotiate, was later executed for disobeying the emperor's order. Yu regretted it and tried to call Eulji back, but he refused.",
        { h: "The emperor Yang" },
        "He demanded that his generals ask his approval before acting. At Liaodong, a surrender needed an answer from the emperor, which was slow in coming; when it arrived, the defenders were ready again. This control from a distance delayed and hampered the generals in the field."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The chronicles, the Book of Sui and the Samguk Sagi, speak of 1,133,800 combatants and about two million support personnel. Wikipedia observes that historians of the Tang era may have exaggerated, and the historian David Graff estimates 670,000. The figure of 305,000 soldiers sent to Pyongyang also comes from the chronicles. On the Goguryeo side there is no reliable number.",
        { note: "The Sui army took about 40 days to leave, and its column stretched for some 300 km. It is a sign of the size and of the problem: an army like that needs enormous [[logistics|logística]]." },
        { h: "The terrain" },
        "The fortresses of Liaodong, on the frontier, the Yalu River and, farther south, the Salsu, which is identified with today's Chongchon River, in North Korea. But this is only a probable identification.",
        { h: "The campaign in moves" },
        "King Yeongyang abandoned the buffer zone won in 598 and fell back behind the Liao River. The river thawed early, and the Sui had to build bridges. The first ones turned out too short, and Goguryeo held off the first attack. Later the bridges were extended, the river was crossed, and the fortresses were besieged. After five months, no castle or fortress had fallen.",
        "Yang then changed his plan: he kept his forces before the fortresses and sent a main army, about 305,000 men, straight to Pyongyang. A Sui fleet, commanded by Lai Hu'er, arrived first at the bay of the Daedong River. Goguryeo sent few troops, who feigned defeat and withdrew to the city. Lai entered with more than 40,000 men into an apparently empty outer castle. While they were looting, 500 Goguryeo soldiers attacked them by surprise, and Lai fled back to the ships, with his army reduced to a few thousand.",
        "Meanwhile, the land army had its own problem. The soldiers carried their own food, which slowed them down, and many threw it away along the road. Near the Yalu, supplies were already short. Eulji, after his surrender 'theater', began to attack and fall back, seven times in a single day, according to tradition, drawing the Sui south. It is the [[feigned retreat|retirada fingida]] repeated to the limit.",
        "The Sui came to within about 20 km of Pyongyang. There Yu Zhongwen concluded that the city could not be taken and that his men were exhausted. It was then that Eulji sent him a poem, which the Samguk Sagi dates to June 612.",
        "The poem has four lines. In short: your plans reach the heavens, your calculations span the earth, you have already won every battle and have great merit, so why not be satisfied and end the war? It was praise playing the part of an insult: it said the glory was already won and suggested withdrawal. Eulji also offered the submission of King Yeongyang if the Sui withdrew. Yu accepted and turned back.",
        { h: "The Salsu River" },
        "With the enemy marching backward, Goguryeo followed and attacked. At the Salsu River, the Sui soldiers, who were crossing the water, were cut down when they were most vulnerable. One tradition says they fled almost 200 km in a single day. Of the about 305,000 who had crossed the Liao, only about 2,700 returned, according to the Zizhi Tongjian and the Samguk Sagi.",
        { note: "The dam: the most famous image, of Eulji releasing water from a dam onto the Sui in the river, is popular in Korea, and appears in a 1931 text by Sin Chaeho and in a 2007 TV drama. But no source of the time speaks of a dam or a flood. It is a modern legend." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Book of Sui lists 302,300 casualties, which, added to the 2,700 survivors, matches the figure of 305,000. It is too round a number to be exact, and many of those men died of disease and hunger. Yu Zhongwen and Yuwen Shu lost their posts; Yu died shortly after returning to China.",
        "Yang tried again in 613 and 614. In 613, a rebellion by Yang Xuangan forced him to turn back. In 614, he broke the first line of defense, but did not get past the Liao because of attacks on his supply lines. Yeongyang offered peace and handed back a fugitive, and Yang accepted, although Yeongyang never went to swear allegiance.",
        { h: "Why it matters" },
        "The losses in lives, in resources and in public confidence helped bring down the Sui dynasty. Revolts spread, Yuwen Shu's son led a coup that killed Yang, and the Duke of Tang founded the next dynasty. The Tang continued the war against Goguryeo. In Korea, the story of Eulji and the Salsu is still told, including in a 2007 TV drama.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: both the Chinese and the Korean chronicles give gigantic numbers. Modern historians reduce them, but there is no agreement on by how much." },
        { note: "The names: the fleet commander appears as Lai Hu'er and as Lai Huni. The identification of the river with the Chongchon is also only probable." }
      ]}
    ]
  },

  yarmuk: {
    war: "Muslim conquest of Syria (634–638)",
    hook: "Six days of battle, a cavalry held back for the right day, and the end of Roman rule in Syria.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 610, Heraclius became emperor of the [[Byzantine|bizantinos]] Empire after overthrowing the tyrant Phocas. Persia, the rival of centuries, took advantage of the disorder and invaded Syria in 611, then Palestine and Egypt. Heraclius counterattacked from 622 and won at Nineveh in 627. The Persian king Chosroes II was deposed, and Heraclius returned the True Cross to Jerusalem in 629. Both powers came out exhausted.",
        "Meanwhile, in Arabia, Muhammad had united the tribes. When he died, in June 632, the first [[caliph|califa]], Abu Bakr, crushed the revolts within a few months and sent armies north, against Byzantine Syria and Persian Iraq. The [[Rashidun Caliphate|califado rashidun]] was beginning.",
        { h: "The road to the Yarmouk" },
        { timeline: [
          ["632", "Muhammad dies. Abu Bakr becomes caliph and puts down the tribal revolts."],
          ["634", "The Arabs win at Ajnadayn (July) and take Damascus (September). Abu Bakr dies; Umar takes over and replaces Khalid with Abu Ubayda."],
          ["635", "Yazdegerd III of Persia proposes a coordinated attack to Heraclius. The alliance does not come about."],
          ["Early 636", "The Arabs take Emesa (another source says they abandon it in the spring). Heraclius gathers a large army at Antioch."],
          ["15 to 20 August 636", "The battle, over six days."]
        ]},
        "Heraclius planned to attack the divided Arabs, one body at a time, with five coordinated armies. But the Arabs, advised by Khalid ibn al-Walid, concentrated their forces, which had been scattered across Palestine, Jordan and Syria. They fell back to the plain of the Yarmouk River and set up a line of camps."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Khalid ibn al-Walid" },
        "The great Arab commander of the age. He had conquered part of Iraq and come to Syria. Umar had removed him from overall command, but he remained in the army. At Yarmouk, Abu Ubayda, who was the supreme commander, passed command to Khalid in a council of war. He organized 36 infantry regiments and four of cavalry, and kept the elite cavalry as a [[mobile guard|guarda móvel]], in reserve.",
        { h: "Vahan, Theodore Trithyrius and the others" },
        "The Byzantine commander in the field was Vahan, an Armenian and former commander of the garrison of Emesa. Theodore Trithyrius shared the leadership of the five armies. Qanatir, a Slavic prince, commanded the Slavs. Jabalah ibn al-Aiham, king of the Ghassanids, commanded Christian Arabs. Gregory and Dairjan led the European contingents. The commanders quarreled among themselves over power, and there were also religious quarrels between Monophysites and Chalcedonians, which hampered coordination. Heraclius supervised from Antioch.",
        { h: "The Arab side" },
        "Amr ibn al-As commanded the right wing, Yazid ibn Abi Sufyan the left, Shurahbil ibn Hasana the center right, Dirar ibn al-Azwar the mobile cavalry, when Khalid was busy. Umar also sent some 6,000 men as reinforcements, most of them from Yemen, including 1,000 companions of Muhammad."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Here the numbers clash the most. The Arab chronicles give the Byzantines 100,000 to 200,000 men, and the Arabs 24,000 to 40,000. Modern historians propose between 15,000 and 40,000 Arabs (probably around 36,000) and 20,000 to 40,000 Byzantines. Warren Treadgold argues for 80,000 to 100,000 or more for the Byzantines, based on the capacity of the state. Many authors avoid giving a number. The only early Byzantine source is Theophanes, written about a century later.",
        { h: "The terrain" },
        "The plain of the Hauran, southeast of the Golan Heights. The battle was fought east of the Wadi Ruqqad, which joins the Yarmouk River to the south. The banks of the wadi are 30 to 200 meters high in places. The Jabiyah road lay to the north. There was a Roman bridge, near Ayn Dhakar, which was the main crossing. The plain had water and pasture and was good for cavalry.",
        { h: "The six days" },
        { formation: true },
        "Day 1 (15 August). The armies line up less than 1.6 km from each other. Duels of champions begin. At midday, Vahan attacks with a third of his infantry, without result, and at sunset both sides pull back.",
        "Day 2 (16 August). Vahan plans an attack before dawn, at the hour of prayer, to pin the center and stall the wings. But Khalid had set outposts at night. Qanatir's Slavs push the Arab right, until Amr's cavalry counterattacks. Khalid then strikes the Byzantine left flank from the north and the south. Yazid's left wing, however, without support from the mobile guard, is defeated and falls back to the camp. The women, according to tradition, led by Hind, received the fugitives with tent poles. Gregory's infantry closed up in a formation that Muslim tradition describes as men chained together, and that modern historians suggest was a [[testudo|testudo]]. Dirar attacks Dairjan, and the mobile guard strikes Gregory's flank. Dairjan dies.",
        "Days 3 and 4 (17 and 18 August). Vahan changes his plan and begins to attack the Arab right and center right, where his cavalry is more effective than on the broken ground of the left. The Arab right gives way, the women make it stop, and Khalid, with the mobile guard, attacks the flank and rear of the Byzantine center left. The next day, Khalid splits the guard in two and hits the enemy's flanks, while Abu Ubayda and Yazid attack on the left. In the afternoon, Byzantine horse archers blind many Arabs, and the day became known as the 'Day of Lost Eyes'. Ikrimah, with about 400 horsemen, covered the retreat and was mortally wounded.",
        "Day 5 (19 August). Vahan sends an envoy to ask for a truce, probably to regroup a demoralized army. Khalid, sensing victory, refuses. He gathers all the cavalry into a single force of about 8,000 horsemen. During the night, Dirar takes 500 horsemen around the Byzantine northern flank and seizes the Ayn Dhakar bridge over the Wadi Ruqqad.",
        "Day 6 (20 August). Khalid charges around the Byzantine left wing: part of the cavalry engages that wing's cavalry, the rest hits the infantry from behind, and the left wing collapses. Vahan tries to regroup the heavy cavalry, but Khalid turns back and strikes it head-on and from the side, before it can form up. The cavalry flees north and leaves the infantry exposed. Khalid hits the Byzantine center from the rear. The general retreat west, toward the bridge, is blocked, because Dirar already held it. Many fall into the ravines or die in the flight, although many escape. The sources also mention a dust wind from the desert and the sun shining in the Byzantines' eyes.",
        { note: "The Day of Lost Eyes, the women with tent poles and the chained soldiers come from Muslim chronicles written much later. Wikipedia treats them with caution, and so does this page. Some sources even say the battle lasted a single day." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Theodore Trithyrius died on the field. Niketas reached Emesa. Jabalah escaped, made a brief peace with the Muslims and returned to the Byzantine side. Vahan escaped from the battle, but probably died later, in the fighting near Damascus.",
        "Casualties depend on the source. Al-Tabari gives 120,000 Romans dead; Ibn Ishaq and al-Baladhuri, 70,000. Britannica lists 40,000 Byzantines and allies and 5,000 Arabs. Modern estimates speak of more than 30,000 Byzantine dead. On the Arab side, one source cites 9,000 dead, another 2,500 to 17,000 casualties in all. The difference shows how much we do not know.",
        { h: "Why it matters" },
        "Khalid pursued the survivors and entered Damascus, where he was well received. At Antioch, Heraclius, downcast, attributed the defeat to God's punishment, and, according to tradition, took leave of Syria with words of farewell to his beautiful province. Byzantine Armenia fell in 638 and 639. Amr, who had commanded the Arab right at Yarmouk, invaded Egypt between 639 and 642.",
        "Britannica and Wikipedia call it Khalid's greatest victory, the end of Byzantine rule in Syria and the high point of the first wave of Muslim conquests. Nafziger calls it one of the most decisive battles in human history, a claim some find too strong.",
        { h: "Curiosities and controversies" },
        { note: "The starting date: Wikipedia and EBSCO give 15 to 20 August. Britannica says the battle began on 20 August and lasted six days, which does not match the others." },
        { note: "The sources: almost everything we know comes from Arab accounts, written much later. Theophanes is the only Byzantine source of the time, and he wrote a hundred years later. A Wikipedia note says that Akram confused a bridge with a ford, which shows that even the geography of the battle is disputed." }
      ]}
    ]
  },

  heliopolis: {
    war: "Muslim conquest of Egypt (639–642)",
    hook: "Two hidden detachments, an ambush from behind and Egypt lost.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Egypt was the richest province of the [[Byzantine|bizantinos]] Empire and the granary of Constantinople. In 640, Muhammad had been dead for eight years, and the caliph Umar, since 634, had turned the Arab raids into full invasions. Syria had fallen between 634 and 638. Heraclius, already old, struggled to reorganize the eastern provinces he had recovered from the Persians.",
        { timeline: [
          ["639", "Amr ibn al-As enters Egypt with about 4,000 men, coming from Syria. He takes Farama (Pelusium) and stays almost a month at a standstill in Bilbeis."],
          ["639 to 640", "Amr sends a small detachment to besiege the fortress of Babylon, near present-day Cairo. He besieges Umm Dunein and then goes on to the Fayum."],
          ["6 June 640", "A second army, by order of Umar, arrives at Heliopolis (Ain Shams). Amr crosses the Nile back to join it."],
          ["July 640", "Battle of Heliopolis. Wikipedia gives 6 July in the infobox and 'early to mid-July' in the text."],
          ["4 November 641", "Alexandria surrenders, after about a year and a half of maneuvers and sieges."]
        ]},
        "Amr had few men for so large a province. His bet was on speed and on the help of reinforcements that Umar would send from Iraq and Syria."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Amr ibn al-As" },
        "An Arab commander who had led the right wing at Yarmouk. At Heliopolis, he was the general who took overall command. At Heliopolis, he won through surprise and the use of terrain, not through a head-on clash with a larger enemy.",
        { h: "Theodore and the Byzantines" },
        "Theodore was the Byzantine commander in chief in Egypt. Anastasius, prefect of Alexandria, and Theodosius, prefect of Arcadia Aegypti, commanded the cavalry. Wikipedia notes that the Byzantines did not keep effective scouts, which had direct consequences."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers depend on the account. According to Muslim sources, Amr entered with about 4,000 men and reached about 8,000 with reinforcements. The al-Kindi tradition speaks of 15,500 (3,500 plus 12,000 in reinforcements), and the Wikipedia text speaks of 'approximately 15,000'. The Byzantines have 'well over 20,000' in the same text, a modern estimate of about 20,000, and there is no reliable Byzantine number. The range of 4,000 to 15,500 for the Arabs shows the size of the doubt.",
        { h: "The terrain" },
        "A plain beside the Nile, near present-day Cairo, with hills to the east and the fortress of Babylon to the south. Heliopolis stood where Ain Shams is today. The exact site of the fight is disputed, and the sources do not describe the battlefield in detail.",
        { h: "The ambush" },
        "First, with the Arab armies together, scouts warned that a Byzantine force was approaching, and the Arabs went out to meet it. Second, Amr divided his army in three. One detachment, commanded by Kharija, marched east and hid in nearby hills. Another was placed to the south, on the Byzantines' likely escape route if the battle went wrong.",
        "Third, when the Byzantines attacked, the hidden detachment fell on their rear. The result was chaos. Fourth, in the flight to the south, the Byzantines ran into the third detachment, which completed the defeat.",
        "At the same time, according to Wikipedia, Zubayr and some chosen men climbed an unguarded point on the wall of Heliopolis, overpowered the guards and opened the gates. The garrison of Tendunias was taken. Of the Byzantine soldiers who were there, 300 survived and withdrew to Babylon. Some fled as far as Nikiû by boat. Theodore, Theodosius and Anastasius survived.",
        { note: "This is a battle on which Wikipedia, the sources and the historians give short, thinly detailed accounts. That is why this page has no diagram: we know there was an ambush in three parts, but not where each one was." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Muslim losses were 'few', and Byzantine losses 'heavy', according to Wikipedia, with no numbers. In the following weeks, the governor of the Fayum, Domentianus, abandoned his camp at Abûît and fled to Nikiû without warning the population. Amr took the Fayum with little resistance, and the city was sacked and its population enslaved. He then went on to Delas, where the pagarch Apa Cyrus was forced to supply boats. George, prefect of Babylon, built bridges at Qalyub, Athribis, Menouf and Babylon.",
        "Many Byzantine commanders fled to Alexandria. The city surrendered on 4 November 641. The siege of Babylon lasted months, and the sources disagree on when it ended: depending on the source, between December 640 and April 641.",
        { h: "Why it matters" },
        "Egypt gave the empire grain and revenue. Without it, the Mediterranean, which had been a Roman lake, came to be contested between the Caliphate and Byzantium. Walter Scott wrote that the fate of Byzantine Africa was decided at Heliopolis. The empire saved itself behind the walls of Constantinople and in the mountains of Anatolia, but never again recovered the province.",
        { h: "Curiosities and controversies" },
        { note: "The tradition of blaming Coptic betrayal, defended by Butler in 1902, and the one of blaming the incompetence of the Byzantine generals compete with Gibbon's, which gives more credit to Amr's skill. John of Nikiû, who wrote a hostile account, relates acts of violence by Amr against the population." },
        { note: "The Arab sources that tell of the conquest (such as Ibn Abd al-Hakam and al-Kindi) are later. The chronology is disputed: Wikipedia gives 6 June 640 for the arrival of the second army at Heliopolis and 6 July for the battle, without explaining the difference." }
      ]}
    ]
  },

  dafei: {
    war: "Tang–Tibet war over the Tarim and Qinghai (670)",
    hook: "A legendary Chinese general, a subordinate who did not obey and a baggage train left behind.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 7th century, Tang China was the greatest power in Asia. But on the plateau to the west, a rival arose: the [[Tibetan|tibetanos]] Empire, which was already contesting Central Asia with China. At stake was control of two regions: Tuyuhun, in present-day Qinghai, and the Tarim Basin, in the west. The Tang administered it through the Anxi [[Protectorate|protetorado]].",
        { timeline: [
          ["663", "According to one source, Tuyuhun is already under Tibetan control. Other sources date the conquest to 669."],
          ["668", "The Tibetans raise defenses along the Dafei River (Jima Gol)."],
          ["670, spring", "Tibet attacks the western Tarim, with help from Khotan, and takes Aksu. Only Kucha and Agni remain Tang."],
          ["3 May 670", "Emperor Gaozong appoints Xue Rengui to command the Tang army."],
          ["Mid-670", "Battle of the Dafei River."],
          ["692", "The Chinese retake the region."]
        ]},
        "The sources do not agree on many details. The Tibetan conquest of Tuyuhun is dated to 663 in one source and to 669 in another. This is one of the least well documented battles on this map."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Xue Rengui" },
        "One of the most famous generals of Tang China, almost a legend. In 645, at the siege of Ansi, still a low-ranking officer, he led a charge that broke the Goguryeo formation, and was promoted by the emperor Taizong. In 661, he killed three of the ten champions of the Tiele coalition with arrows, and the Tiele surrendered. He later had the surrendered executed, was imprisoned and was freed because his deeds weighed more than the crime.",
        { h: "Guo Daifeng" },
        "Son of the veteran Guo Xiaoke. He held the same rank as Xue and, according to tradition, considered it a dishonor to serve under him. He often disobeyed.",
        { h: "Gar Trinring Tsendro" },
        "In Chinese, Lun Qinling. Second son of the minister Gar Tongtsen Yülsung and one of the most powerful figures in Tibet. He was sent to Azha (Tuyuhun), newly conquered. Later he became prime minister. In 699, King Tridu Songtsen, seeing the Gar clan as a threat to his authority, staged a hunt and turned against the family. Trinring's armies betrayed him, and he killed himself."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are a mess. Wikipedia cites 400,000 Tibetans against Xue's 50,000 (in the article on Gar Trinring) and speaks of 400,000 Tibetans attacking Anxi (in the article on Xue). Beckwith cites 200,000 and Kuzmin 100,000, without the page saying which side each refers to. For the Tang, the infobox gives 50,000 to 100,000 men. Numbers this round and this high are suspect.",
        { h: "What happened" },
        "Here the versions diverge, and it is honest to show that. In the version of the article on the battle, Xue advanced with the main column toward Lake Qinghai, leaving behind the slow baggage train and 20,000 soldiers under Guo Daifeng. The Tibetans attacked and seized the baggage and then defeated Xue's column.",
        "In the version of the article on Xue Rengui, the plan was for Xue to advance and open the pass, then give the signal for Guo to come from Lake Qinghai, where the supplies were. Guo advanced without waiting for the signal, was intercepted by a Tibetan army of about 200,000 and his army fell apart. Only then did Gar Trinring attack Xue at the Dafei River. Xue 'inflicted heavy losses on the Tibetans', but withdrew.",
        "In the version of the article on the conquest of the Tarim, Xue began well, defeating a Tibetan unit near the Dafei and taking cattle. But Guo did not fortify the supply lines. The Tibetans ambushed the Tang army, nearly annihilated it and forced it to retreat.",
        { note: "The three versions agree on the essentials: the baggage and support were lost, Guo is to blame, and the Tang retreated. They disagree on what Xue did and on Tibetan losses. That is why this page has no diagram: there is no reliable description of the positions or the movements. The Wikipedia article on the battle also carries a neutrality-dispute tag." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The battle was a Tibetan victory. Emperor Gaozong had Xue, Guo and Ashina Daozhen arrested. They were released on reaching Chang'an, but lost their posts. Around 675, Xue was removed for reasons the records do not explain well and exiled. He returned in 681 and, in 682, defeated Ashide Yuanzhen.",
        "Tang casualties are described only as 'heavy'. The Tibetan ones are unknown, or, according to the article on Gar Trinring, 'enormous'.",
        { h: "Why it matters" },
        "According to Beckwith, the defeat marked the end of twenty years of Chinese control over the Tarim Basin. The capital of the Anxi protectorate was moved from Kucha to Turfan, seen as safer. Tibet dominated the area in practice for about 20 years, until the Chinese retook it, in 692. After the battle, negotiations failed: China wanted Tibet to leave Azha, and Tibet wanted China to leave the Tarim.",
        { h: "Curiosities and controversies" },
        { note: "The names change from source to source: Gar Trinring Tsendro, Mgar Khri-brin, Lun Qinling. Guo Daifeng appears as Kuo Tai-feng in Beckwith's transcription. It is the same man, in a different spelling." },
        { note: "The main sources are the Old Book of Tang, the New Book of Tang and the Zizhi Tongjian, all Chinese. The article on Gar Trinring also cites the Old Tibetan Annals, but on this battle itself the sources are scarce." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  yarmuk: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 8, h: 70, l: "Wadi Ruqqad" },
      { t: "sea", x: 8, y: 63, w: 92, h: 7, l: "Yarmouk River" },
      { t: "note", x: 9, y: 10, l: "Ayn Dhakar bridge" }
    ],
    units: [
      { id: "aR", s: "a", k: "inf", w: 7, h: 15, l: "Right (Amr)" },
      { id: "aC", s: "a", k: "inf", w: 7, h: 15, l: "Center (Abu Ubayda)" },
      { id: "aL", s: "a", k: "inf", w: 7, h: 15, l: "Left (Yazid)" },
      { id: "aG", s: "a", k: "cav", w: 7, h: 12, l: "Mobile guard (Khalid)" },
      { id: "aD", s: "a", k: "cav", w: 5, h: 5, l: "Dirar" },
      { id: "bL", s: "b", k: "inf", w: 7, h: 15, l: "Left (Qanatir)" },
      { id: "bC", s: "b", k: "inf", w: 7, h: 15, l: "Center (Gregory, Dairjan)" },
      { id: "bR", s: "b", k: "inf", w: 7, h: 15, l: "Right" },
      { id: "bV", s: "b", k: "cav", w: 7, h: 10, l: "Heavy cavalry (Vahan)" }
    ],
    steps: [
      { t: "Day 1. The armies line up less than 1.6 km apart, the Arabs to the east, facing west. There are duels and a timid attack by Vahan, without result.",
        p: { aR: [72, 14], aC: [72, 31], aL: [72, 48], aG: [86, 30], aD: [88, 12], bL: [44, 14], bC: [44, 31], bR: [44, 48], bV: [32, 26] } },
      { t: "Day 2. Vahan attacks before dawn. Qanatir's Slavs push the Arab right. Khalid, who had set outposts, strikes the Byzantine left flank.",
        p: { bL: [54, 14], aR: [78, 14], aG: [64, 8] } },
      { t: "Yazid's left, without support from the mobile guard, is defeated and falls back. Then the guard strikes Gregory's flank, and Dairjan dies. At sunset both sides return to their lines.",
        p: { aL: [82, 50], bR: [58, 48], aG: [58, 40] } },
      { t: "Days 3 and 4. Vahan concentrates his attack on the Arab right, where cavalry is more effective. The right gives way, but Khalid, with the guard split in two, strikes the flanks and rear of the Byzantine center left.",
        p: { aR: [80, 18], bL: [56, 18], aG: [56, 28], aL: [72, 48], bR: [44, 48], aC: [72, 31], bC: [46, 31] } },
      { t: "Day 5. Vahan asks for a truce, and Khalid refuses. He gathers all the cavalry into a single force of about 8,000. At night, Dirar takes 500 horsemen around the north to the Ayn Dhakar bridge and seizes it.",
        p: { aG: [84, 14], aD: [14, 12], bL: [44, 14], bC: [44, 31] } },
      { t: "Day 6. Khalid charges around the Byzantine left wing. Part of the cavalry engages its cavalry, the rest hits the infantry from behind. The left wing collapses.",
        p: { aG: [40, 8], bL: [38, 14], aR: [58, 16] }, x: ["bL"] },
      { t: "Vahan tries to regroup the heavy cavalry, but Khalid turns back and strikes it head-on and from the side before it can form up. It flees north and leaves the infantry exposed.",
        p: { bV: [30, 5], aG: [36, 14] }, x: ["bL", "bV"] },
      { t: "The Arab cavalry hits the Byzantine center from the rear, while the Arab right and center advance head-on.",
        p: { aG: [34, 31], aC: [58, 31], aR: [52, 18], aL: [58, 48], bC: [36, 31] }, x: ["bL", "bV", "bC"] },
      { t: "The general retreat toward the bridge is shut off by Dirar. Many fall into the ravines of the wadi or die in the flight, although many escape. Syria is lost to Byzantium.",
        p: { bC: [14, 34], bR: [18, 52], aG: [24, 36], aL: [40, 50], aC: [44, 32], aR: [40, 18], aD: [12, 12] }, x: ["bL", "bV", "bC", "bR"] }
    ]
  },

  catalaunicos: {
    terrain: [
      { t: "hill", x: 50, y: 35, rx: 16, ry: 9, l: "Ridge" }
    ],
    units: [
      { id: "rA", s: "a", k: "inf", w: 22, h: 5, l: "Romans (Aetius)" },
      { id: "rAl", s: "a", k: "cav", w: 14, h: 5, l: "Alans (Sangiban)" },
      { id: "rV", s: "a", k: "inf", w: 22, h: 5, l: "Visigoths (Theodoric, Thorismund)" },
      { id: "hG", s: "b", k: "inf", w: 22, h: 5, l: "Gepids (Ardaric)" },
      { id: "hH", s: "b", k: "cav", w: 18, h: 5, l: "Attila's Huns" },
      { id: "hO", s: "b", k: "inf", w: 22, h: 5, l: "Amali Goths (Valamir)" },
      { id: "camp", s: "b", k: "camp", w: 14, h: 5, l: "Wagon camp" }
    ],
    steps: [
      { t: "Both sides deploy around a ridge in the middle of the plain. The Alans are in the allied center and the Visigoths on the right. Attila attacks only around 2:30 p.m.",
        p: { rA: [22, 56], rAl: [50, 56], rV: [78, 56], hG: [22, 14], hH: [50, 14], hO: [78, 14], camp: [50, 5] } },
      { t: "Race for the ridge. The Huns try to take it and are beaten by Aetius's Romans and Thorismund's Goths.",
        p: { rA: [30, 42], rV: [68, 42], hG: [28, 26], hO: [72, 26] } },
      { t: "The Visigoths attack Valamir's Amali Goths. Theodoric dies in the fighting, without his men seeing. There are two versions: he fell from his horse and was trampled, or he was killed by the spear of the Amali Andag.",
        p: { rV: [76, 34], hO: [76, 28] } },
      { t: "The Visigoths, faster than the Alans, charge Attila's guard.",
        p: { rV: [60, 28], rAl: [50, 46], hH: [50, 18] } },
      { t: "Attila falls back to the camp fortified with wagons.",
        p: { hH: [50, 10], hG: [24, 18], hO: [76, 18], rV: [60, 22] } },
      { t: "Night. Thorismund, returning to his lines, enters the Hunnic camp by mistake and is wounded before being rescued. Aetius, separated from his men, spends the night among the Goths.",
        p: { rV: [56, 14], rA: [30, 40] } },
      { t: "Second day. The field is full of bodies, and the Huns do not come out. Romans and Goths surround the camp. Attila, according to tradition, orders a pyre of saddles built.",
        p: { rA: [28, 14], rV: [72, 14], rAl: [50, 24] } },
      { t: "Aetius convinces Thorismund to return to Toulouse to take the throne before his brothers. The allies withdraw, and so do the Huns. Who won is debated to this day.",
        p: { rA: [22, 58], rV: [78, 60], rAl: [50, 58], hH: [50, 6], hG: [22, 6], hO: [78, 6] } }
    ]
  },

  feishui: {
    terrain: [
      { t: "sea", x: 46, y: 0, w: 8, h: 70, l: "Fei River" }
    ],
    units: [
      { id: "jM", s: "a", k: "inf", w: 12, h: 40, l: "Beifu Army (Xie Shi, Xie Xuan)" },
      { id: "qF", s: "b", k: "inf", w: 12, h: 40, l: "Fu Rong's troops" },
      { id: "qJ", s: "b", k: "cav", w: 10, h: 14, l: "Fu Jian and the rear" },
      { id: "qM", s: "b", k: "inf", w: 8, h: 14, l: "Murong Chui" }
    ],
    steps: [
      { t: "The Qin camp on the west bank of the Fei River. The Jin are on the east bank and cannot advance. Earlier, a Jin vanguard of 5,000 men had killed 15,000 Qin.",
        p: { jM: [76, 35], qF: [26, 35], qJ: [8, 24], qM: [10, 58] } },
      { t: "Xie Xuan sends word to Fu Rong to pull back a little, so the Jin can cross and fight. The Qin generals are against it, but Fu Jian accepts, thinking of attacking in the middle of the crossing.",
        p: {} },
      { t: "Fu Rong orders the withdrawal. The Qin army, enormous and loosely bound, begins to move backward.",
        p: { qF: [18, 35] } },
      { t: "Zhu Xu, a Jin official who was among the Qin, shouts that the army has been defeated. The withdrawal turns into panic.",
        p: { qF: [12, 35], qJ: [6, 20] }, x: ["qF"] },
      { t: "Xie Xuan, Xie Yan and Huan Yi cross the river and attack.",
        p: { jM: [52, 35] } },
      { t: "Fu Rong tries to hold back the flight, falls from his horse and is killed. The Jin read the confused tracks as a sign of total disorder and pursue. The army comes apart and abandons its supplies.",
        p: { jM: [34, 35], qF: [6, 30], qJ: [4, 18] }, x: ["qF", "qJ"] },
      { t: "Fu Jian, wounded by a stray arrow, escapes to Murong Chui, whose 30,000 men were among the few that did not come apart. The fugitives hear the wind and the cranes and think it is the Jin.",
        p: { jM: [26, 35], qJ: [10, 52] }, x: ["qF"] },
      { t: "Murong Chui escorts him to Luoyang. In 384 he revolts, and the Former Qin falls apart.",
        p: { jM: [20, 35], qM: [8, 60] }, x: ["qF"] }
    ]
  }
});
