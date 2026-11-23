// In-depth battles, batch au: mastros, karbala, constantinopla717, covadonga, granico (great-battles pack).
// Checked against the English, French, Spanish and Portuguese Wikipedia articles on the Battle of the Masts, Karbala,
// the Siege of Constantinople (717-718), Covadonga, Pelagius of Asturias, Alqama and the Granicus, and the works they cite
// (Theophanes, al-Tabari, Abu Mikhnaf via Tabari, Arrian, Plutarch, Diodorus, the Asturian chronicles, Haldon, Treadgold,
// Madelung, Devine, Hammond, Cosentino, Christides). Where sources disagree the text says so.
// No FORMATIONS entry for mastros (sources give no dispositions beyond "ships lashed together") nor for covadonga
// (the chronicles give no deployment or sequence of moves, only a cave, a narrow valley and a legendary landslide).

Object.assign(GLOSSARY, {
  "teófanes": "Byzantine monk (c. 760 to 818), author of the main Greek chronicle of the 7th and 8th centuries. He wrote about 150 years after the events, copying older sources that have been lost.",
  "al-tabari": "Persian historian (839 to 923) who wrote the great history of the Muslim world in Arabic. He gathered accounts from earlier generations, now lost, and often sets different versions side by side.",
  "primeira fitna": "The first Muslim civil war (656 to 661), which began with the murder of Caliph Uthman and ended with Mu'awiya as caliph. 'Fitna' means 'trial' or 'strife'.",
  "xiitas": "Muslims who believe that leadership of the community belonged to Ali, the cousin and son-in-law of Muhammad, and to his descendants. They are a minority among Muslims and live mostly in Iran and Iraq.",
  "ashura": "The tenth day of Muharram, the first month of the Islamic calendar. Shia Muslims devote it to mourning Husayn, with processions, recitations and religious plays. Many Sunnis fast on this day.",
  "calendário da hégira": "The Islamic calendar, which counts years from Muhammad's move from Mecca to Medina in 622. It has 12 lunar months, so its year is about 11 days shorter than ours.",
  "abu mikhnaf": "Historian from Kufa, died around 774, author of the oldest and most detailed account of Karbala. His book is lost, but Tabari and others copied long passages from it.",
  "tawwabin": "'The Penitents': supporters of Ali in Kufa who regretted not having helped Husayn and rose against the Umayyads in 684 and 685. They were defeated at Ayn al-Warda.",
  "corno de ouro": "The narrow inlet that cuts into Constantinople on the north and forms the city's harbor. Closing it with a chain kept enemy ships out.",
  "búlgaros": "A people of nomadic origin who mixed with the Slavs and, at the end of the 7th century, formed a kingdom in the Balkans, north of the Byzantine Empire. They were sometimes enemies and sometimes allies of Constantinople.",
  "cristãos coptas": "The Christians of Egypt, descendants of the ancient Egyptians. At the time of the Arab conquests, most of them were still Christian and paid taxes to their new rulers.",
  "wali (governador)": "Governor of a province in the caliphate, appointed by the caliph or by a governor above him.",
  "jizya": "A tax that Muslim rulers charged non-Muslim subjects, in return for protection and exemption from military service.",
  "astures": "A people of the mountains of the northwest of the Iberian Peninsula, in present-day Asturias, whom the Romans and later the Visigoths never fully subdued.",
  "sarracenos": "The name medieval Christians gave to the Muslims of the Mediterranean. In the Asturian chronicles, it is how the Arabs and Berbers appear.",
  "prodromoi": "Macedonian light cavalry, armed with a spear, used to scout the ground and clear the way. The name means 'those who run ahead'.",
  "agrianos": "Spearmen and javelin throwers from Agriania, a region of the Balkans north of Macedonia. They were Alexander's elite light troops.",
  "peônios": "A people of Paeonia, north of Macedonia, allied with Alexander. They supplied light cavalry.",
  "arriano": "Arrian of Nicomedia (2nd century AD), Greek historian and Roman officer. His history of Alexander is the most reliable one that survives, but it was written some 450 years later, from accounts by the king's officers, such as Ptolemy."
});

Object.assign(DEEP, {
  mastros: {
    war: "Arab-Byzantine wars (from 634)",
    hook: "For the first time an Arab fleet faced the Byzantine navy on the open sea, and the emperor nearly died.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In just a few years after Muhammad's death in 632, the Arab armies took Syria and Egypt, which had belonged to the [[Byzantines|bizantinos]], and destroyed the Persian Empire. Byzantium lost Egypt for good in 642. But the Arabs were desert people and horsemen, and the Mediterranean was still a Byzantine lake. The emperor was the one with ships, crews and ports.",
        "That began to change with Mu'awiya, governor of Syria. In 649 he organized a seaborne attack on Cyprus. In Egypt, the governor Abdallah ibn Sa'd, who had been in office since 645, built a strong navy. In 646, he beat back a Byzantine counterattack on Alexandria.",
        { h: "The road to the battle" },
        { timeline: [
          ["642", "The Byzantines give up Egypt for good."],
          ["649", "Mu'awiya attacks Cyprus by sea."],
          ["654", "The Arabs raid Aegean islands again, Rhodes among them. A fleet advances along the south coast of Anatolia."],
          ["654 or 655", "Constans II puts to sea with the imperial fleet. The two fleets meet off Lycia."],
          ["656", "The [[First Fitna|primeira fitna]], the Muslim civil war, begins."]
        ]},
        "The date of the battle is not certain. [[Al-Tabari|al-tabari]] gives two: the year 31 of the Hijra (651 to 652), from one informant, and the year 34 (654 to 655), from another. The chronicle of the Armenian Sebeos and that of [[Theophanes the Confessor|teófanes]] point to the later date, which most historians follow."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Constans II, about 25 years old" },
        "Grandson of Emperor Heraclius, he came to the throne in 641 while still a boy. He ruled an empire that had lost Syria, Egypt and much of its wealth, and that had to keep the Arabs from reaching the Aegean Sea. That is why he went to sea himself. According to Theophanes, before the battle the emperor dreamed he was in Thessalonica. An interpreter read the name in Greek as 'give victory to another'.",
        { h: "On the Arab side" },
        "Sources disagree on who commanded the fleet. Many accounts name Abdallah ibn Sa'd, the governor of Egypt, who had built the navy. Others cite Abu al-A'war, a general of Mu'awiya. Mu'awiya, who would later become caliph, was the driving force of the war at sea and, in 654, was himself leading a land campaign in Cappadocia.",
        { note: "Why does the list of commanders change from source to source? The Arab accounts were written more than a century later and are often versions that contradict one another. Here we follow what modern historians say: the command is uncertain." }
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No one knows for sure how many ships there were. Theophanes speaks of 1,000 Byzantine ships, a number historians consider exaggerated. Modern estimates are around 500, or 300 if we leave out the support vessels. For the Arab side, the most common estimate is about 200 ships. In every case, what matters is that the Byzantines had more ships and far more tradition.",
        { h: "The terrain" },
        "The open sea off the coast of Lycia, in what is now southern Turkey, near the port of Phoenix (today Finike). A major naval battle on the open sea, far from a strait or a bay, was rare. The sources do not describe islands, shoals or winds that helped either side. The name comes from Arabic, Dhat al-Sawari, 'the one of the masts'.",
        { h: "The battle" },
        "What we know is little. According to Tabari, the two sides drew up in lines, and the ships were tied to one another, so that the fight became a large-scale [[boarding action|abordagem]]: soldiers fighting on the decks as if they were on land. This, according to several authors, favored the Arabs, who had more experience of hand-to-hand fighting than of maneuvering at sea.",
        "The sources disagree about the weather: Tabari speaks of a rough sea, and some modern studies describe a calm. What they say in common is that the fight was very hard and that losses were heavy on both sides. The Arabs won. The Byzantine fleet was greatly reduced, and the number of ships lost is uncertain: the figure most often repeated, 500, is a modern estimate with no clear source.",
        "According to Theophanes, Constans II escaped only by swapping clothes with one of his officers. Historians treat this kind of detail with caution."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "It was the first great Arab naval victory over Byzantium and the first time the sea stopped being exclusively Byzantine territory. But the Arabs did not take immediate advantage. In 656, Caliph Uthman was murdered, and the Muslims went to war with one another. The attack on Constantinople only returned in force in the 670s, in the first great Arab siege of the city.",
        "The Armenian Sebeos says that the Arab fleet went on to Constantinople, that a storm sank ships carrying siege engines, and that Mu'awiya's army reached Chalcedon, across from the capital, but had to turn back. The historian Ibn Kathir says Mu'awiya advanced as far as Chrysopolis. The oldest Arab sources do not mention this.",
        { h: "Why it matters" },
        "The battle shows that naval power was not Byzantium's by natural law: it took only one generation for the Arabs to build a navy. Constans II survived: in 663 he moved to Italy and was murdered in Syracuse in 668.",
        { h: "Curiosities and controversies" },
        { note: "The sources: Theophanes wrote about 150 years later, and Tabari more than 250. The account closest to the events is that of the Armenian Sebeos, from around 660, which speaks mostly of what came afterward." },
        { note: "Historians debate why the Arabs went to Lycia. Some, such as Stratos and Lombard, think they were seeking timber for ships in Asia Minor. Vassilios Christides finds this explanation poorly founded." }
      ]}
    ]
  },

  karbala: {
    war: "Second Fitna (680 to 692)",
    hook: "On an autumn day in 680, about 72 men refused to swear allegiance to the caliph, and the massacre that followed is still remembered every year.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 661, Mu'awiya, governor of Syria, became caliph and founded the [[Umayyad|omíadas]] dynasty, with its capital at Damascus. He did something many people did not accept: he named his son Yazid as his successor. The office became hereditary, as in a kingdom. For those who remembered that the caliph was supposed to be chosen from among the Muslims themselves, this was a break with the past.",
        "One of those who refused was Husayn, grandson of the Prophet Muhammad, son of Ali and Fatima. When Mu'awiya died in 680, Yazid demanded that Husayn swear allegiance. Husayn did not. He went to Mecca, and from there letters arrived from his supporters in Kufa, in Iraq, inviting him to lead a revolt.",
        { h: "The road to Karbala" },
        { timeline: [
          ["680", "Mu'awiya dies. Yazid succeeds him and demands Husayn's allegiance."],
          ["Before September", "Husayn sends his cousin Muslim ibn Aqil to Kufa. Governor Ibn Ziyad crushes the revolt and kills Muslim."],
          ["9 Sept 680", "Husayn leaves Mecca with about 50 men and his family. Some join him along the way, and many leave him when news of Muslim's death arrives."],
          ["2 Oct", "Intercepted by a vanguard of about 1,000 men, Husayn reaches Karbala."],
          ["3 Oct", "Umar ibn Sa'd arrives with about 4,000 men."],
          ["Following days", "Access to the Euphrates is cut off for about three days. Negotiations fail."],
          ["9 Muharram (9 Oct)", "In the afternoon, Ibn Sa'd's men advance on the camp. Husayn asks for a night's delay, and they agree."],
          ["10 Muharram (10 Oct)", "The battle."]
        ]},
        "Husayn was heading for Kufa when the revolt there had already been crushed. When he learned of Muslim's death, he thought of turning back, but was persuaded to go on. Earlier, Ibn Abbas and Ibn al-Zubayr, two notables of Mecca, had tried to dissuade him from going, or at least from taking women and children. The dates follow the [[Islamic calendar|calendário da hégira]]: 10 Muharram of the year 61 corresponds to 10 October 680."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Husayn ibn Ali" },
        "Grandson of Muhammad, son of Ali, the fourth caliph, and of Fatima, the Prophet's daughter. He was respected for belonging to the Prophet's family. Historians debate what he wanted. Julius Wellhausen saw him as an ambitious and ill-prepared pretender. Wilferd Madelung and Laura Veccia Vaglieri, on the contrary, stress his religious conviction. Syed Husain Jafri argues that Husayn sought martyrdom.",
        { h: "Yazid I and Ubayd Allah ibn Ziyad" },
        "Yazid was the caliph who inherited his father's throne. Ibn Ziyad, governor of Kufa, is the man the sources show in action: he crushed Muslim's revolt, ordered the access to the river cut off, and demanded Husayn's submission before any agreement. After the massacre, Yazid is said to have cursed Ibn Ziyad, saying he would have spared Husayn. Wellhausen and Madelung think this was a gesture to move the caliph himself out of the center of blame.",
        { h: "The other names" },
        "On the Umayyad side, Umar ibn Sa'd commanded the roughly 4,000 soldiers, Amr ibn al-Hajjaj led the right wing, and Shimr ibn Dhi al-Jawshan the left. It was Shimr who pressed for an attack. Al-Hurr ibn Yazid, who had commanded the vanguard of a thousand men that intercepted Husayn, changed sides on the morning of the battle. On Husayn's side, Zuhayr ibn al-Qayn commanded the right wing, Habib ibn Muzahir the left, and his half-brother Abbas carried the standard."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Most accounts speak of about 72 men with Husayn: 32 mounted and 40 on foot. Some sources speak of 45 horsemen and 100 on foot. With them were women and children. On the Umayyad side, most sources speak of about 4,000 men, with armored cavalry and some 500 archers. Shia sources give much larger numbers, up to 30,000.",
        { h: "The terrain" },
        "An arid plain west of the Euphrates, near Karbala, now in Iraq. Husayn's camp lay away from the river. Ibn Sa'd's men, by posting about 500 horsemen on the road to the water, cut off access. Husayn had the tents tied together and a trench behind them filled with firewood, to be lit if he were attacked.",
        { h: "The night before" },
        "On 9 Muharram, Husayn sent Abbas to ask for a night's delay to pray. Ibn Sa'd agreed. Husayn told his men that anyone who wished could leave in the dark, since it was only he who was wanted. Few went. The night passed in prayer.",
        { h: "The battle in nine moments" },
        { formation: true },
        "First, the alignment. Husayn placed Zuhayr on the right wing and Habib on the left, with the standard in Abbas's hands. On the other side, Ibn Sa'd placed Amr ibn al-Hajjaj on one wing, Shimr on the other, and the cavalry and archers in the middle.",
        "Second, the speech. After the morning prayer, Husayn mounted and spoke to the men of Kufa: he reminded them who he was, reproached those who had invited him and were now fighting him, and asked to be allowed to leave. Ibn Sa'd's men replied that he would first have to submit to Yazid, and he refused. His words moved al-Hurr, who crossed the field and joined Husayn.",
        "Third, the arrows and the duels. The fight began with volleys of arrows, followed by single combats. Zuhayr tried to dissuade Ibn Sa'd's men, without success.",
        "Fourth, the first attacks. Amr ibn al-Hajjaj attacked Zuhayr's wing, and Shimr attacked Habib's. Both attacks were beaten back.",
        "Fifth, the cavalry. The Umayyads launched cavalry attacks. Husayn's horsemen ended up fighting on foot after their horses were wounded.",
        "Sixth, the fire. Ibn Sa'd ordered the tents burned, except Husayn's. The fire hindered the Umayyads' own advance for a while.",
        "Seventh, the afternoon. After the midday prayer, Husayn's companions were surrounded, and almost all were killed.",
        "Eighth, the relatives. Then the family members entered the fight. Ali al-Akbar, Husayn's son, was killed, as were half-brothers of his and sons of his brothers. Tabari and Baladhuri, who copy Abu Mikhnaf, do not describe Abbas's death. Al-Mufid, an 11th-century Shia scholar, says Abbas was separated from Husayn near the river, surrounded and killed. A small child that Husayn held on his lap was hit by an arrow and died.",
        "Ninth, the end. Husayn was struck by an arrow in the mouth as he tried to reach the river and then by blows to the head, hand and shoulder. He fell and was killed by Sinan ibn Anas, who beheaded him, according to the most cited accounts. The body had more than 60 wounds.",
        { note: "The main source is the Maqtal al-Husayn of [[Abu Mikhnaf|abu mikhnaf]], which is lost: what we have comes from passages copied by Tabari and Baladhuri. Henri Lammens thought the fight was short and little more than a massacre. Vaglieri and Madelung consider the detailed accounts reliable and think the fight lasted much of the day." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "On Husayn's side, 70 or 72 men died, about twenty of them descendants of Abu Talib. Ibn Sa'd is said to have lost 88 men, whom he had buried before leaving. Husayn's belongings were looted. The family and the heads of the dead were taken to Ibn Ziyad in Kufa, and then to Yazid in Damascus. Husayn's son, Ali Zayn al-Abidin, was spared after the plea of his aunt, Zaynab. A few days later, the women were compensated for what they had lost and sent back to Medina.",
        { h: "Consequences" },
        "The death of the Prophet's grandson shocked many Muslims and fed the second civil war. In 684 and 685, the [[Tawwabin|tawwabin]] rose in Kufa against the Umayyads and were defeated at Ayn al-Warda. Soon after, Mukhtar al-Thaqafi took much of Iraq for about 18 months, had Umar ibn Sa'd and Shimr, among others, executed, and was killed in 687. His followers gave rise to movements that later helped overthrow the Umayyads, in 750.",
        { h: "Why it matters" },
        "Karbala is the center of memory for the [[Shia|xiitas]]. Every year, on [[Ashura|ashura]], Shia Muslims remember Husayn's death, with processions, recitations and religious plays called ta'ziyeh. The shrine at Karbala receives pilgrims all year, and especially at Arba'in, forty days after Ashura. Many Sunnis also respect Husayn as the Prophet's grandson, but the weight of the episode in religious life is much greater in Shia Islam.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: 72 fighters against 4,000 is the figure most often repeated, but Shia and Sunni sources do not agree, and the chroniclers had no way to count. What almost everyone accepts is that the difference in forces was enormous." },
        { note: "The sources: Abu Mikhnaf was from Kufa and is usually described as a sympathizer of Ali's cause, and Tabari copied him. That is a reason for caution, but almost all modern historians treat his account as the soundest base we have." }
      ]}
    ]
  },

  constantinopla717: {
    war: "Arab-Byzantine wars (from 634)",
    hook: "A year of siege, Greek fire, snow and hunger: the last great Arab attack on Constantinople ended in disaster.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the roughly 80 years since the first Arab conquest of Byzantine lands, the Empire had lost Syria, Egypt and North Africa. Constantinople had already withstood a first siege, between 674 and 678. Now the Umayyad caliphate, which stretched from the Atlantic to the Indus valley, was at its height, and Caliph Sulayman decided to take the capital once and for all, which would leave the Empire headless.",
        "On the other side, Byzantium was coming out of decades of chaos: between 695 and 717, a series of coups toppled emperor after emperor, a period historians call the Twenty Years' Anarchy. The last of them, Theodosius III, was overthrown by a general, Leo, who allied with the Arabs while it suited him and then deceived them. Leo entered Constantinople on 25 March 717 and was crowned emperor.",
        { h: "The road to the walls" },
        { timeline: [
          ["25 Mar 717", "Leo III enters Constantinople after Theodosius III abdicates."],
          ["Summer 717", "Maslama crosses the Hellespont at Abydos and ravages Thrace."],
          ["Mid-July or August", "The Arab army reaches the walls and begins the siege by land."],
          ["1 Sept", "The Arab fleet arrives. Two days later, it enters the Bosphorus."],
          ["Sept 717", "Caliph Sulayman dies, and Umar II succeeds him."],
          ["Winter 717-718", "Snow for more than three months, hunger and disease in the Arab camp."],
          ["Spring 718", "The fleets from Egypt and Africa arrive and are destroyed."],
          ["15 Aug 718", "The Arabs lift the siege."]
        ]},
        "Sources disagree on the exact start of the siege. The patriarch Nikephoros suggests mid-July, and other sources point to August. 15 August is certain for the end, and it is possible that Theophanes repeated that date for the start."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Leo III the Isaurian" },
        "A general who came to the throne only a few months before the Arabs appeared before the city. He knew how to negotiate and how to deceive. According to Arab sources, he offered Maslama a gold coin per inhabitant in exchange for lifting the siege, and was refused. In one version, afterward, he tricked Maslama into handing over most of the army's grain. In another, he persuaded him to burn it, to show the city that the assault would be immediate. In both, the Arab camp was left with fewer supplies.",
        { h: "Maslama ibn Abd al-Malik" },
        "Brother of Caliph Sulayman, a veteran of campaigns against the Byzantines. Because the caliph was too ill to command, Maslama took over the army, assembled at Dabiq in Syria. Among the Arabs, he remained the great commander of the siege, and later tradition filled his story with legends.",
        { h: "The other names" },
        "Tervel, khan of the [[Bulgars|búlgaros]], had made a treaty with Leo in 716, which possibly included an alliance against the Arabs. Umar II, the caliph who succeeded Sulayman in September 717, sent the relief fleets in the spring and, after the failure, ordered the retreat."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Arab numbers from the chroniclers are impossible. Al-Mas'udi, in the 10th century, speaks of 120,000 men. Michael the Syrian, in the 12th century, of 200,000 and 5,000 ships. Theophanes gives the main fleet 1,800 ships. Modern historians do not propose a number, but agree that the army was enormous for its time: according to Warren Treadgold, perhaps larger than the entire Byzantine army. For the defenders, a modern estimate speaks of about 15,000 men. The Bulgars would have numbered about 12,000, according to a 2019 study.",
        { h: "The terrain" },
        "Constantinople lies on a peninsula: the Sea of Marmara to the south, the [[Golden Horn|corno de ouro]] to the north, the Bosphorus to the east. On the land side, to the west, it had the [[Theodosian Walls|muralhas de teodósio]]. Whoever wanted to take the city had to breach the walls or starve the defenders, and the besiegers also had to keep Byzantine ships from supplying the city by sea.",
        { h: "The siege, step by step" },
        { formation: true },
        "First, the double wall. Maslama built two stone walls, one facing the city and the other facing Thrace, and camped in between. It was a classic [[circumvallation|circunvalação]] that shut the city off by land.",
        "Second, the fleet. On 1 September the Arab fleet arrived. Two days later, it entered the Bosphorus.",
        "Third, the Greek fire. As the Arab rearguard, with twenty heavy ships and about 2,000 soldiers, passed by the city, the south wind reversed and drove the ships against the walls. A Byzantine squadron attacked them with [[Greek fire|fogo grego]]. According to Theophanes, some ships sank with all hands, and others burned as far as the Princes' Islands.",
        "Fourth, the chain. That night, Leo closed the [[Golden Horn|corno de ouro]] with a great chain between the city and Galata. The Arab fleet withdrew to the harbor of Sosthenion, on the Bosphorus.",
        "Fifth, the winter. The winter of 717 to 718 was very hard. Snow covered the ground for more than three months. When supplies ran out, the soldiers ate horses, camels and other animals, then bark, leaves and roots. The chroniclers say there was even cannibalism. Epidemics struck the army. The Bulgars, meanwhile, attacked the camps. Sources disagree on whether they attacked first or the Arabs strayed into their territory.",
        "Sixth, the relief fleets. In the spring of 718, Umar II sent about 400 ships from Egypt, under Sufyan, and 360 from Africa, under Izid, according to the chroniclers. The Egyptian fleet anchored in the Gulf of Nicomedia, and the African one south of Chalcedon. The crews were largely [[Coptic Christians|cristãos coptas]], who began to desert to the Byzantines.",
        "Seventh, the destruction of the fleets. Leo's fleet attacked with Greek fire and destroyed or captured the relief ships.",
        "Eighth, the ambush. An Arab army sent overland, under Mardasan, was ambushed in the hills of Sophon, south of Nicomedia, and destroyed.",
        "Ninth, the retreat. On 15 August 718, after thirteen months, Maslama lifted the siege on the orders of Umar II. The fleet, on the way back, was battered by a storm in the Sea of Marmara.",
        { note: "The Byzantine chroniclers describe the Arab losses in grand terms. According to Theophanes, only five ships reached Syria, and the Bulgars killed 22,000 Arabs in one battle. Arab sources speak of 150,000 dead, and the Western chronicler Paul the Deacon of 300,000. The historian John Haldon says 150,000 is 'certainly inflated', but shows 'the enormity of the disaster in medieval eyes'." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The siege failed. The caliphate gave up on taking Constantinople, and the frontier settled in the Taurus Mountains, in southern Anatolia. The Byzantine Empire, despite its weaknesses, lasted another 735 years, until 1453.",
        { h: "Why it matters" },
        "Many historians see the siege as a turning point. The German historian Eickhoff says that a victorious caliph in Constantinople would have had 'incalculable' consequences for Christian Europe. The historian Davis says Europe 'remained in Christian hands'. It is common to compare it to the Battle of Tours, in 732, which also checked Muslim expansion, but such comparisons are more a matter of debate than of consensus.",
        "For Byzantium, the siege consolidated Leo III on the throne and made him the founder of the Isaurian dynasty, which ruled until 802.",
        { h: "Curiosities and controversies" },
        { note: "The sources: the main ones are Theophanes and Nikephoros on the Byzantine side, and later Arab and Syriac chroniclers. They often contradict one another, and the death tolls are considered exaggerated by almost all historians." },
        { note: "The legend: in Arab and Turkish tradition, figures such as Abdallah al-Battal became folk heroes. The memory of Maslama is also surrounded by stories, such as that he entered Constantinople in triumph." }
      ]}
    ]
  },

  covadonga: {
    war: "Umayyad conquest of the Iberian Peninsula and the Asturian rebellion (711 to c. 722)",
    hook: "A small battle, or perhaps not so small, that more than a century later became the origin of a kingdom and of an idea.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 711, an Arab and Berber army crossed the Strait of Gibraltar and defeated the Visigothic king Roderic. Within a few years, most of the Iberian Peninsula came under the rule of the [[Umayyads|omíadas]], governed by a [[wali|wali (governador)]] based in Córdoba. The kingdom of the [[Visigoths|visigodos]] disappeared.",
        "The mountainous north, however, interested the new masters little. It was poor, cold and hard to travel, and even the Romans and Visigoths had never fully subdued it. The [[Asturians|astures]] lived there. The governors' eyes were turned toward Gaul, where they were advancing: in 721 they were defeated at Toulouse.",
        { h: "What the chronicles tell" },
        "The story of Covadonga comes from chronicles written in Oviedo, in the kingdom of Asturias, around 880, more than a century and a half later. According to them, the Visigoths who had taken refuge in the north and the Asturians elected Pelagius as their prince. Munuza, the governor of the region, whom tradition places in Gijón, imposed heavy tribute. Pelagius refused to pay it and rebelled. Munuza asked for reinforcements, and the wali sent an expedition.",
        { timeline: [
          ["711", "Muslim conquest of the Iberian Peninsula; fall of the Visigothic kingdom."],
          ["c. 718", "According to the chronicles, the Asturians elect Pelagius as their leader."],
          ["721", "The Muslims are defeated at Toulouse."],
          ["c. 722", "Fight at Covadonga, by the most cited dating."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Pelagius (Pelayo)" },
        "According to the chronicle, son of Duke Fafila and of royal Visigothic blood. Some modern historians, such as Manzano Moreno, doubt that he was really a Visigothic noble. The chronicle has him say, when called on to surrender, that the Church is like the Moon, which wanes but always grows again, and that he would make no alliance with the Arabs nor submit to them. This speech was probably written more than a hundred years later.",
        { h: "Alqama and Bishop Oppas" },
        "Alqama is the Muslim commander whom the chronicles send against Pelagius and report dead in the fight. With him, say the Christian chronicles, went Oppas, bishop of Seville and son of the Visigothic king Witiza, who tries to persuade Pelagius to surrender. Oppas's presence in the expedition is considered legend.",
        { h: "Munuza" },
        "The governor whom Pelagius opposed. According to tradition, he was defeated and killed soon after, near Proaza. Roger Collins noted that if Munuza was really based in Gijón, Muslim power already reached Asturias, and Pelagius would not have been merely a local chief resisting."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "We have no reliable numbers. The Albelda chronicle gives Alqama's army 187,000 men, a figure historians see as symbolic, similar to the numbers in the Bible. Pelagius's contingent is described as tiny, and some modern authors speak of about 300 men. On the Muslim side, the 17th-century chronicler al-Maqqari says the Arabs considered the rebels 'thirty wild donkeys'. No number counts as data.",
        { h: "The terrain" },
        "The Picos de Europa, the mountain range a few dozen kilometers from the sea, near Cangas de Onís. The site is Mount Auseva, with a narrow valley and a cave, today the Holy Cave of Covadonga. It is a place where a large army cannot deploy, and where whoever holds the slopes dominates whoever is in the valley.",
        { h: "What the chronicles tell of the battle" },
        "According to the chronicles, Alqama camped with his army near where Pelagius was and sent Oppas to propose surrender. Pelagius refused. Alqama then sent his best troops into the valley. The Asturians attacked from the slopes with arrows and stones. At the decisive moment, Pelagius came out of the cave with his men, Alqama died and the army withdrew.",
        "Tradition added miracles: the Albelda chronicle says that a mountain in Liébana collapsed on the soldiers, by the judgment of God. Later tradition added the intercession of the Virgin Mary and tied the cave to today's shrine. These are elements of legend, and no contemporary source confirms them.",
        "On the rest, the sources are even more silent. We do not know how the rebels were positioned or in what order they did what they did. That is why there is no deployment diagram for this battle."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Muslims withdrew, and Pelagius kept the mountains. The rulers of Córdoba had other priorities, such as Gaul, and the mountainous north was not one of them. According to tradition, the kingdom of Asturias was born there, with Pelagius as its first king, and it was the core from which, centuries later, the Christian kingdoms of the north emerged. Pelagius was buried at Abamia, and Alfonso X had his remains moved to the Holy Cave.",
        { h: "Why it matters" },
        "For the kings of Asturias, Covadonga was the beginning. They presented their kingdom as the continuation of the Visigoths, and the [[Reconquista|reconquista]] as a war of restoration. That is why the battle entered Spanish tradition as the first step of that process, which would end only in 1492. The Holy Cave has been a place of pilgrimage ever since.",
        { h: "Curiosities and controversies" },
        { note: "The scale of the battle is much debated. The Christian chronicles speak of a massacre, and the Muslim tradition of a skirmish of no importance. For Claudio Sánchez-Albornoz, it was the spark of Christian resistance. Historians such as García Moreno and Valdeón accept it as a local event. José Luis Corral thinks it never happened and was an invention of the court of Alfonso III. Henry Kamen does not rule out that there was, in the region, a military incident of some importance that checked the Muslims." },
        { note: "The date: Sánchez-Albornoz puts it in 722, under the wali Anbasa, after the defeat at Toulouse. Others, such as Montenegro and del Castillo, argue for 718, under al-Hurr. One reading of the Albelda chronicle puts it in the 740s. The date of 722 is the most cited, but it is far from a consensus." },
        { note: "The place: Pedro Chalmeta suggested in 2022 that the famous battle may not have taken place in Asturias at all, and that it has similarities with a fight in the Pyrenees in 754. No contemporary Muslim source mentions it, and the silence of the Mozarabic Chronicle of 754 is one of the skeptics' arguments." }
      ]}
    ]
  },

  granico: {
    war: "Alexander's conquest of the Persian Empire (334 to 330 BC)",
    hook: "Alexander crossed a river under a rain of javelins to win the first battle of his campaign, and almost died in it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After the murder of his father, Philip II, in 336 BC, Alexander, aged 20, had to crush revolts in the Balkans and in Greece before he could think of anything else. The [[League of Corinth|liga de corinto]], which Philip had created, acclaimed him commander of the war against Persia, the revenge promised since the Persian invasion 150 years earlier.",
        "In the spring of 334 BC, Alexander crossed the Hellespont with about 32,000 foot soldiers and 5,000 cavalry, according to the sources. Darius III was far away, and the defense of Asia Minor fell to the local governors, the [[satraps|sátrapa]].",
        { h: "The road to the river" },
        { timeline: [
          ["336 BC", "Philip II is murdered. Alexander comes to the throne."],
          ["334 BC, spring", "Alexander crosses the Hellespont and lands near Cape Sigeum."],
          ["May 334 BC", "The satraps meet at Zeleia, and Memnon proposes avoiding battle."],
          ["May 334 BC", "Battle of the Granicus."],
          ["Summer 334 BC", "Sardis surrenders, Ephesus is abandoned and Miletus is besieged."]
        ]},
        "At the Persian council of war in Zeleia, Memnon of Rhodes, a Greek general in Persian service, advised against fighting in the open: the crops should be burned and Alexander left without food. Arsites and the others refused, partly to protect their subjects' property and partly because they distrusted Memnon. Modern historians, such as Pierre Briant, debate whether the meeting really went that way and whether what was at stake was strategy or merely tactics."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Alexander III of Macedon, 21 years old" },
        "It was the first great battle of his life as king. He fought, as always, at the front of his companions, and was nearly killed for it. He chose to attack at once instead of waiting.",
        { h: "Parmenion" },
        "A veteran general of Philip's, he commanded the left wing. According to [[Arrian|arriano]], he advised Alexander to camp on the bank and cross the river at dawn the next day. Alexander refused and ordered an attack at once.",
        { h: "The Persians" },
        "Arsites, satrap of Hellespontine Phrygia, is considered the likely commander. Among the others were Spithridates, satrap of Lydia and Ionia, Arsames, Rheomithres and Memnon of Rhodes. Memnon was on the front line, and some historians think it was because the other commanders distrusted him."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Modern historians calculate that Alexander had about 18,000 men on the field: some 12,000 heavy infantry, 1,000 light infantry and about 5,100 cavalry. For the Persians, Arrian speaks of nearly 20,000 cavalry and as many Greek mercenaries on foot. Diodorus gives 10,000 cavalry and 100,000 foot soldiers, and Justin reaches 600,000 in total. Almost no one accepts these figures. The historian Brian Devine estimates, for the Persians, between 14,000 and 15,000 men, of whom 4,000 to 5,000 were mercenaries.",
        { h: "The terrain" },
        "The Granicus, a river in what is now northwestern Turkey. The Persians stood on the east bank, higher and steeper, with the cavalry in front, at the edge of the steep banks, and the infantry of Greek mercenaries farther back. The ancient writers insist the river was hard to cross, but modern observers think it was not so much, and perhaps the authors exaggerated. The exact place of the crossing is disputed: Nicholas Hammond puts it between Gümüşçay and Çeşmealtı.",
        { h: "The day" },
        "According to Plutarch, some officers objected to fighting in the month of Daisios, for religious reasons, and Alexander, to get around the objection, declared the previous month repeated, a 'second Artemisios'. Then Parmenion advised waiting. Alexander ordered the attack.",
        { h: "The battle in nine moments" },
        { formation: true },
        "First, the lines. The Persians placed the cavalry along the bank, with the Greek mercenaries of Omares behind. Alexander commanded the right wing, with most of the [[Companions|companheiros]], the archers and the [[Agrianians|agrianos]], the [[prodromoi|prodromoi]], the [[Paeonians|peônios]] and the [[hypaspists|hipaspistas]]. In the center came the [[phalanx|falange]], in six groups, with Perdiccas, Coenus, Craterus and other commanders. Parmenion, on the left, had the Thessalian, Thracian and allied Greek cavalry.",
        "Second, the Persian shift. On seeing Alexander opposite their left wing, the Persians gathered their cavalry on that side. It was there, according to Arrian, that the best Persian cavalry stood.",
        "Third, the first attack. Amyntas, son of Arrhabaeus, with the Companion squadron of Ptolemy, son of Philip, and then the Paeonians, the prodromoi and part of the infantry, entered the river at the Persian left end. The Persian javelins, thrown from the top of the banks, drove them back. About 25 Companions died in this first attack.",
        "Fourth, Alexander crosses. Alexander attacked with the rest of the right wing. Historians disagree about the route: some, such as Fuller and Bosworth, see a diagonal advance against the Persian center. Others, such as Badian and Hammond, see it against the left wing, with a sidestep to keep the line together. Devine thinks the first attack may have been a lure to draw the Persians out of formation.",
        "Fifth, the hand-to-hand fight on the bank. The fighting was hard. Alexander broke his spear and asked for another. His attendant had also broken his, and Demaratus of Corinth gave Alexander his own. Alexander killed Mithridates, Darius's son-in-law, and was struck on the helmet by Rhoesaces, whom he killed in turn.",
        "Sixth, Cleitus. Spithridates was about to strike him from behind when Cleitus the Black cut off his arm with a sword.",
        "Seventh, the Persian cavalry gives way. The Macedonians gained the bank and broke the Persian cavalry, first on the left wing, then in the center. The Persians fled.",
        "Eighth, the mercenaries. The Greek mercenaries, who had stood still, were attacked from the front by the phalanx and from the sides by the cavalry. Most of them died. According to Plutarch, they refused to surrender, and they caused most of the Macedonian casualties.",
        "Ninth, the left. On the other side, on Parmenion's wing, the Persian cavalry also withdrew.",
        { note: "The sources disagree widely. For Diodorus, the battle was quite different: the armies camped on opposite sides, Alexander crossed unopposed at dawn, and there were two separate fights, one of cavalry and one of infantry. Peter Green proposed in 1974 to reconcile the two accounts, with a first failed crossing that was later covered up. In 2013, he admitted that the contradiction has no explanation. Most historians prefer Arrian and Plutarch, because the Macedonians always combined infantry and cavalry, and a crossing at night or at dawn would have been seen." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "According to Arrian, the Macedonians lost 115 men, of whom 25 Companions in the first attack. Plutarch gives 34, and Justin 129. On the Persian side, Arrian counts about 1,000 cavalry dead and 2,000 mercenaries captured. Plutarch speaks of 2,500 cavalry and 20,000 foot soldiers killed, and Diodorus of 2,000 cavalry and 10,000 foot soldiers killed and 20,000 captured. Devine considers these figures impossible and estimates a total of 5,000 to 6,000 Persian casualties.",
        "The 2,000 captured mercenaries were sent to Macedonia to work as slaves. Alexander justified the punishment by saying they had fought alongside the Persians against Greece. He sent 300 Persian suits of armor to Athens, as an offering, with an inscription that excluded the Spartans. For the 25 dead Companions, he commissioned the sculptor Lysippos to make a bronze group, which was taken to Rome in 146 BC.",
        { h: "Consequences" },
        "Arsites fled and later killed himself, blamed for the defeat. Dascylium was evacuated, Sardis surrendered, and Ephesus was abandoned. Miletus resisted and was besieged. The bulk of the Persian army fell back to Halicarnassus. The Persian military losses were not catastrophic, but the fall of Sardis left the empire's position in Asia Minor fragile.",
        { h: "Why it matters" },
        "It was the first of three great battles between Alexander and the Persian Empire, before Issus and Gaugamela. It showed how Alexander acted: a fast attack, in person, against the enemy's strongest part. And it gave the campaign a start that left no doubt about who held the initiative.",
        { h: "Curiosities and controversies" },
        { note: "The date: May 334 BC, in the Macedonian month of Daisios. Some historians give early June, and the ancient authors do not record the day." },
        { note: "The sources: Arrian wrote some 450 years later, but he used the account of Ptolemy, who was there. Plutarch and Diodorus had other sources. The figures for Persian losses vary so much that only Arrian's are considered reasonable." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  karbala: {
    terrain: [
      { t: "sea", x: 90, y: 0, w: 10, h: 70, l: "Euphrates River" },
      { t: "note", x: 40, y: 4, l: "Karbala plain (schematic, not to scale)" }
    ],
    units: [
      { id: "uAmr", s: "a", k: "cav", w: 5, h: 12, l: "Wing of Amr ibn al-Hajjaj" },
      { id: "uShm", s: "a", k: "cav", w: 5, h: 12, l: "Wing of Shimr" },
      { id: "uCen", s: "a", k: "inf", w: 6, h: 14, l: "Infantry and archers (Umar ibn Sa'd)" },
      { id: "uCav", s: "a", k: "cav", w: 5, h: 10, l: "Armored cavalry" },
      { id: "uRiv", s: "a", k: "cav", w: 4, h: 8, l: "500 horsemen on the road to the river" },
      { id: "hZuh", s: "b", k: "inf", w: 4, h: 9, l: "Right wing (Zuhayr)" },
      { id: "hHab", s: "b", k: "inf", w: 4, h: 9, l: "Left wing (Habib)" },
      { id: "hHus", s: "b", k: "cav", w: 4, h: 8, l: "Husayn, Abbas and relatives" },
      { id: "uHur", s: "a", k: "cav", w: 3, h: 4, l: "Al-Hurr" },
      { id: "hTen", s: "b", k: "camp", w: 8, h: 26, l: "Tied tents and trench with firewood" }
    ],
    steps: [
      { t: "Morning of 10 Muharram (10 October 680). About 72 men are lined up in front of the tents: Zuhayr on the right, Habib on the left, Abbas with the standard. On the other side, about 4,000 men, with horsemen posted on the road to the river.",
        p: { hTen: [10, 35], hZuh: [27, 47], hHab: [27, 23], hHus: [24, 35], uHur: [50, 33],
             uAmr: [54, 48], uShm: [54, 22], uCen: [62, 35], uCav: [48, 35], uRiv: [82, 40] } },
      { t: "Husayn rides forward and speaks to the men of Kufa: he reminds them who he is and asks to be allowed to leave. They answer that he must first submit to Yazid. Al-Hurr, who had commanded the vanguard, crosses the field and goes over to Husayn's side.",
        p: { hHus: [30, 35], uHur: [29, 31] } },
      { t: "The fight begins with volleys of arrows, followed by duels. Zuhayr tries to dissuade Ibn Sa'd's men, without success.",
        p: { uCen: [52, 35], uCav: [44, 35] } },
      { t: "Amr ibn al-Hajjaj attacks Zuhayr's wing, and Shimr attacks Habib's. Both attacks are beaten back.",
        p: { uAmr: [40, 46], uShm: [40, 24] } },
      { t: "The Umayyad cavalry attacks. Husayn's horsemen, their horses wounded, begin to fight on foot.",
        p: { uCav: [36, 35], uAmr: [34, 46], uShm: [34, 24], hHus: [26, 35] } },
      { t: "Ibn Sa'd orders the tents burned, except Husayn's. The fire hinders the Umayyads' own advance for a while.",
        p: { uCen: [42, 35] } },
      { t: "After the midday prayer, the companions are surrounded and almost all die.",
        p: { uAmr: [28, 44], uShm: [28, 26], uCav: [30, 35], uCen: [36, 35] }, x: ["hZuh", "hHab"] },
      { t: "Husayn's relatives join the fight. Ali al-Akbar, his son, and several half-brothers and nephews die, Abbas among them, according to al-Mufid.",
        p: { uCav: [26, 35], uCen: [32, 35] } },
      { t: "Husayn, wounded by arrows and blows, falls and is killed. More than 60 wounds are counted on the body. The women and children are taken captive to Kufa and Damascus.",
        p: { uCav: [20, 35], uCen: [26, 35], uAmr: [20, 42], uShm: [20, 28] }, x: ["hHus"] }
    ]
  },

  constantinopla717: {
    terrain: [
      { t: "sea", x: 0, y: 50, w: 100, h: 20, l: "Sea of Marmara" },
      { t: "sea", x: 80, y: 0, w: 8, h: 50, l: "Bosphorus" },
      { t: "sea", x: 40, y: 7, w: 40, h: 6, l: "Golden Horn" },
      { t: "note", x: 10, y: 4, l: "Thrace (west)" },
      { t: "note", x: 94, y: 30, l: "Asia" },
      { t: "note", x: 84, y: 5, l: "chain" }
    ],
    units: [
      { id: "city", s: "a", k: "camp", w: 34, h: 24, l: "Constantinople (Leo III)" },
      { id: "bul", s: "a", k: "inf", w: 12, h: 5, l: "Bulgars (Tervel)" },
      { id: "bFl", s: "a", k: "ship", w: 14, h: 3, l: "Byzantine fleet, with Greek fire" },
      { id: "aLn", s: "b", k: "camp", w: 14, h: 26, l: "Maslama's camp between two walls" },
      { id: "aFl", s: "b", k: "ship", w: 16, h: 4, l: "Arab fleet (1 September)" },
      { id: "aRr", s: "b", k: "ship", w: 8, h: 3, l: "Rearguard: 20 heavy ships" },
      { id: "eFl", s: "b", k: "ship", w: 12, h: 3.5, l: "Fleet from Egypt (≈ 400)" },
      { id: "fFl", s: "b", k: "ship", w: 12, h: 3.5, l: "Fleet from Africa (≈ 360)" },
      { id: "mar", s: "b", k: "inf", w: 6, h: 7, l: "Mardasan's army" }
    ],
    steps: [
      { t: "Summer 717. Maslama crossed the Hellespont, ravaged Thrace and shut the city off by land with a double wall. He camped between the two. The city has the Theodosian Walls, open sea to the south and the Golden Horn to the north.",
        p: { city: [60, 31], aLn: [30, 31], bul: [14, 14], bFl: [60, 10], aFl: [10, 60], aRr: [4, 66], eFl: [92, 62], fFl: [78, 66], mar: [95, 40] } },
      { t: "1 September. The Arab fleet reaches the Sea of Marmara. Two days later, it enters the Bosphorus.",
        p: { aFl: [60, 58], aRr: [44, 56] } },
      { t: "The Arab rearguard, with 20 heavy ships and 2,000 soldiers, passes close to the walls. The south wind reverses and pushes it against the city. A Byzantine squadron attacks it with Greek fire: some ships sink, others burn.",
        p: { aRr: [52, 49], bFl: [50, 46] }, x: ["aRr"] },
      { t: "That same night, Leo closes the Golden Horn with a chain between the city and Galata. The Arab fleet withdraws to the harbor of Sosthenion, on the Bosphorus.",
        p: { aFl: [84, 12], bFl: [62, 10] } },
      { t: "Winter of 717 to 718. Snow for more than three months. The camp goes hungry: they eat horses, camels, bark and roots, and the sources even speak of cannibalism. Epidemics make everything worse.",
        p: { aLn: [30, 31] } },
      { t: "The Bulgars attack the Arab camps during the siege. Sources disagree on whether they attacked first or the Arabs strayed into their territory. Theophanes speaks of 22,000 Arabs killed in one battle.",
        p: { bul: [26, 20] } },
      { t: "Spring 718. The relief fleets arrive from Egypt (≈ 400 ships) and Africa (≈ 360), according to the chroniclers. One anchors in the Gulf of Nicomedia and the other south of Chalcedon. The crews, largely Copts, desert to the Byzantines.",
        p: { eFl: [88, 56], fFl: [82, 60] } },
      { t: "Leo's fleet attacks with Greek fire and destroys or captures the relief fleets.",
        p: { bFl: [84, 54] }, x: ["eFl", "fFl"] },
      { t: "An Arab army sent overland, under Mardasan, is ambushed and destroyed in the hills of Sophon, south of Nicomedia.",
        p: { mar: [95, 44] }, x: ["mar"] },
      { t: "15 August 718. On the order of Caliph Umar II, Maslama lifts the siege after thirteen months. The fleet on its way back is battered by a storm in the Sea of Marmara.",
        p: { aLn: [14, 31], aFl: [20, 58] }, x: ["aLn", "aFl"] }
    ]
  },

  granico: {
    terrain: [
      { t: "sea", x: 0, y: 30, w: 100, h: 6, l: "Granicus River" },
      { t: "note", x: 8, y: 66, l: "West bank (Macedonians)" },
      { t: "note", x: 8, y: 4, l: "East bank, higher (Persians)" }
    ],
    units: [
      { id: "mLef", s: "a", k: "cav", w: 14, h: 5, l: "Left: Thessalians and allies (Parmenion)" },
      { id: "mPh", s: "a", k: "inf", w: 30, h: 5, l: "Phalanx (six groups)" },
      { id: "mHyp", s: "a", k: "inf", w: 8, h: 4, l: "Hypaspists" },
      { id: "mCom", s: "a", k: "cav", w: 12, h: 5, l: "Companions (Alexander)" },
      { id: "mAgr", s: "a", k: "inf", w: 10, h: 3, l: "Archers and Agrianians" },
      { id: "mPro", s: "a", k: "cav", w: 10, h: 5, l: "Prodromoi, Paeonians and Amyntas's squadron" },
      { id: "pRig", s: "b", k: "cav", w: 22, h: 5, l: "Right: Medes and Bactrians" },
      { id: "pCen", s: "b", k: "cav", w: 26, h: 5, l: "Center" },
      { id: "pLef", s: "b", k: "cav", w: 24, h: 5, l: "Left: Memnon, Arsames, Spithridates" },
      { id: "pMer", s: "b", k: "inf", w: 40, h: 5, l: "Greek mercenaries (Omares)" }
    ],
    steps: [
      { t: "May 334 BC. The Persian cavalry occupies the higher east bank, with the Greek mercenaries behind. Alexander is on the right, with the Companions. The phalanx is in the center. Parmenion commands the left.",
        p: { mLef: [14, 55], mPh: [42, 55], mHyp: [64, 55], mCom: [74, 54], mAgr: [74, 48], mPro: [90, 54],
             pRig: [14, 24], pCen: [42, 24], pLef: [76, 24], pMer: [50, 10] } },
      { t: "Seeing Alexander opposite their left wing, the Persians gather their cavalry on that side. Parmenion advises camping and crossing in the morning. Alexander orders an attack at once.",
        p: { pCen: [54, 24], pLef: [82, 24] } },
      { t: "The first attack: Amyntas and Ptolemy's squadron, with Paeonians, prodromoi and part of the infantry, enter the river at the Persian left end.",
        p: { mPro: [88, 34], mAgr: [78, 38] } },
      { t: "The Persian javelins, thrown from the top of the bank, drive the attack back. About 25 Companions die at this moment.",
        p: { mPro: [90, 47], pLef: [84, 28] } },
      { t: "Alexander crosses with the rest of the right wing, with the archers and Agrianians in front. The fight on the bank is hand to hand.",
        p: { mCom: [78, 33], mAgr: [80, 31], mHyp: [68, 40], mPh: [46, 46] } },
      { t: "Alexander breaks his spear and receives another from Demaratus of Corinth. He kills Mithridates. Rhoesaces strikes his helmet and is killed. Spithridates raises his sword behind him, and Cleitus the Black cuts off his arm.",
        p: { mCom: [80, 28], pLef: [84, 22] } },
      { t: "The Macedonians gain the bank and break the Persian cavalry, first on the left, then in the center. The Persian cavalry flees.",
        p: { mCom: [74, 20], mHyp: [66, 28], mPh: [46, 36], pLef: [90, 14], pCen: [56, 14] }, x: ["pLef", "pCen"] },
      { t: "The Greek mercenaries, who did not move, are attacked from the front by the phalanx and from the sides by the cavalry. Most die, and about 2,000 are captured, according to Arrian.",
        p: { mPh: [48, 18], mCom: [66, 10], mHyp: [62, 16], pMer: [50, 8] }, x: ["pMer"] },
      { t: "At the other end, Parmenion's wing crosses, and the Persian cavalry on the right also falls back.",
        p: { mLef: [16, 36], pRig: [12, 14] }, x: ["pRig"] }
    ]
  }
});
