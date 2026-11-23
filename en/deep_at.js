// In-depth battles, batch at: badr, uhud, khandaq, qadisiyya, nahavand (early Islamic pack, part 1).
// Checked against the English, French, Italian and Portuguese Wikipedia articles on Badr, Uhud, the Trench,
// al-Qadisiyyah and Nahavand, the Wikipedia articles on the Muslim conquest of Persia and on al-Nu'man ibn Muqrin,
// Britannica on al-Qadisiyyah, and the works those pages cite (Ibn Ishaq via Ibn Hisham, al-Tabari, al-Baladhuri,
// Watt, Robinson, Kister, Kennedy, Pourshariati, Crawford). Every number from the Arabic chronicles is marked as traditional.
// No diagram for Nahavand: the two surviving accounts of the moves disagree and neither gives the deployment.

Object.assign(GLOSSARY, {
  "coraixitas": "The dominant tribe of Mecca, keepers of the Kaaba shrine and of the caravans linking Yemen to Syria. Muhammad was born among them, but many Quraysh opposed him.",
  "muhajirun": "'The emigrants': the Muslims of Mecca who moved to Medina with Muhammad in 622 and left everything behind.",
  "ansar": "'The helpers': the people of Medina, from the Aws and Khazraj tribes, who welcomed Muhammad and the emigrants and joined the Muslim community.",
  "sira": "A biography of Muhammad, written by Muslims in the following generations. The oldest to survive is Ibn Ishaq's, from about 120 to 130 years after the Prophet's death, and we know it only through Ibn Hisham's version.",
  "hégira": "The move of Muhammad and the first Muslims from Mecca to Medina, in 622. The Islamic calendar counts from it: 'year 2 of the Hijra' is the second year after the move.",
  "caravana": "A group of camels and merchants crossing the desert together for safety. Mecca's caravans were the source of the city's wealth.",
  "duelo de campeões": "Combat between a few chosen warriors, in front of both armies, before the general fight. It was an Arab custom of the time, and the chronicles describe it at Badr, Uhud and Qadisiyyah.",
  "alcorão": "The holy book of Islam. It refers to Badr, Uhud and the Trench, but does not tell the battles step by step.",
  "banu qurayza": "One of the Jewish tribes of Medina. It had a pact with Muhammad and stayed neutral until the siege of 627.",
  "sassânidas": "The Persian dynasty that ruled Iran and Iraq from 224 to 651 and contended with the Byzantine Empire for the Middle East for centuries.",
  "ctesifonte": "The Sasanian capital, in Iraq, on the Tigris near present-day Baghdad. The Arabs took it in March 637.",
  "derafsh-e kaveyan": "The royal standard of the Persians, a leather banner covered in jewels. It was carried at the head of the army as a symbol of the empire.",
  "hamadã": "A city on the Iranian plateau, the old capital of the Medes, on the road between Iraq and central Iran. In Arabic, Hamadhan."
});

Object.assign(DEEP, {
  badr: {
    war: "War between Medina and Mecca (624–630)",
    hook: "About 300 men went out to raid a caravan and ended up beating an army more than three times their size.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the early 7th century, Mecca was the richest city in western Arabia. It lived off the Kaaba shrine and the [[caravans|caravana]] that carried goods from Yemen to Syria, and the [[Quraysh|coraixitas]] ran the city. Muhammad was born there; he began to preach a single god and made many enemies among the powerful of his own tribe.",
        "In 622, Muhammad and his followers moved to Medina, more than 300 kilometers to the north. This is the [[Hijra|hégira]]. The emigrants ([[muhajirun]]) had left homes and property in Mecca, and the people of Medina ([[ansar]]) took them in. For a poor community with no land, raiding Mecca's caravans was at once a reply and a means of survival.",
        { h: "The road to Badr" },
        { timeline: [
          ["622", "Muhammad and the first Muslims move from Mecca to Medina."],
          ["early 624", "The Muslims leave Medina to intercept a large Qurayshi caravan returning from Syria."],
          ["early 624", "Abu Sufyan, the caravan's leader, changes route and asks Mecca for help. A Qurayshi army marches out to defend it."],
          ["13 Mar 624", "The two sides meet at the wells of Badr."]
        ]},
        "According to tradition, the caravan's leader, Abu Sufyan, learned of the Muslim plan and sent word to Mecca. The historian W. Montgomery Watt points out a problem with that version: the Qurayshi army took about a week to reach Badr, so the call for help must have gone out before the Muslims had even mobilized. Either way, when the caravan was already safe, the Qurayshi commander decided to go on to Badr regardless."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Muhammad, commander of the Muslims" },
        "In Medina, Muhammad was at once the prophet of a new religion and the community's political and military leader. At Badr, the accounts show him consulting his companions before deciding, and praying fervently during the fighting.",
        { h: "Amr ibn Hisham, called Abu Jahl" },
        "He commanded Mecca's army. The Muslims call him Abu Jahl, 'father of ignorance'. When some Qurayshi groups turned back for home along the way, he insisted on going on: he wanted to show that Mecca would not be cowed by raids. According to tradition, he died in the battle.",
        { h: "The other names" },
        "On the Medina side, Hamza and Ali, relatives of Muhammad, fought in the duels; Zubayr commanded the right and Miqdad the left; Abu Bakr and Umar advised the Prophet; Sa'd ibn Mu'adh spoke for the ansar; and Hubab ibn al-Mundhir suggested the well where the force camped. On the Meccan side, the three men who opened the duels were close relatives: Utba, his brother Shayba and Utba's son al-Walid. Abu Sufyan, the caravan's leader, stayed away from the fighting."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Tradition counts 313 Muslims (the sources range from 313 to 317), made up of 82 emigrants and 231 men of Medina, with only 2 horses and 70 camels. On the Meccan side the numbers vary: from about 950 to 1,300 men, with some 100 horses. All of these numbers come from works written well after the battle and should be read as traditional, not as head counts.",
        { h: "The terrain" },
        "Badr lies in a hollow of the desert, with wells. Two dunes, the nearer and the farther, closed off the east side, and Mount Jabal al-Asfal the west. The main road to Medina ran between the dunes, but the Muslims came from the north. The Quraysh camped in the southeast, near the Mecca road.",
        { h: "The wells" },
        "On the advice of Hubab ibn al-Mundhir, the Muslims occupied the well nearest the middle of the western edge, the one closest to the enemy, and destroyed the others. The Quraysh were left without easy access to water. On the night of 11 March rain fell which, according to tradition, soaked the sloping ground and hampered the Quraysh.",
        { h: "Before the fighting" },
        "The Muslims captured two water-carriers from Mecca, who revealed that the whole army was there. Some Muslims beat the prisoners, and Muhammad later condemned this. On the Meccan side, a scout, Umayr ibn Wahb, warned that the Muslims numbered about 300 but were determined. There was dissent in the Qurayshi camp, and Amr ibn Hisham overcame it.",
        { h: "The battle in five moves" },
        { formation: true },
        "First, before the general fight came the Arab custom of the [[duel of champions|duelo de campeões]]. Hamza killed al-Aswad ibn Abd al-Asad. Then Utba, Shayba and al-Walid came out, and the Quraysh would only fight men from their own city, the emigrants. Ali killed al-Walid, Hamza killed Shayba, and Ubayda ibn al-Harith was mortally wounded. There were a few more duels, mostly won by the Muslims.",
        "Second, the two sides exchanged arrows. The Muslims formed lines, with Zubayr on the right and Miqdad on the left, and waited for the charge.",
        "Third, the Quraysh attacked. In the accounts, Muhammad prayed intensely until Abu Bakr steadied him.",
        "Fourth, Muhammad threw a handful of pebbles toward the enemy and ordered the counterattack. The Qurayshi line broke in a short time, and the whole fight lasted a few hours.",
        "Fifth, the Quraysh fled, and the Muslims killed or captured those they caught. Among the prisoners and the dead were several of Mecca's leaders. The accounts disagree on how each one died."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Fourteen Muslims died (6 emigrants and 8 men of Medina), counting Ubayda, who died later of his wounds. On the Meccan side, scholars estimate about 70 dead and 70 prisoners. Two prisoners, Nadr ibn al-Harith and Uqba ibn Abi Mu'ayt, were killed; the sources disagree on whether in combat or executed afterwards.",
        "The prisoners were taken to Medina. Abu Bakr advised accepting [[ransom|resgate]], and Umar wanted them executed; Muhammad accepted Abu Bakr's view. According to tradition, those who could read and write could be freed by teaching ten people.",
        { h: "Why it matters" },
        "The victory strengthened Muhammad in Medina and led neighboring tribes to ally with him. Inside Medina, it weakened a rival, Abd Allah ibn Ubayy, and later the Banu Qaynuqa were expelled. In Mecca, the death of so many nobles left Abu Sufyan as the main leader, and it was he who, years later, helped negotiate the city's surrender. For Muslims, Badr remains the example of a victory given by God to the few against the many.",
        { h: "Curiosities and controversies" },
        { note: "The sources: everything we know about Badr comes from Islamic tradition, recorded from the 8th century on. Some historians think there is little outside it to confirm the details; the general story (a caravan, a fight near Badr, a victory for Medina) is accepted, but the day-to-day of the fighting should be read with care." },
        { note: "The explanation of the victory: tradition and the [[Quran|alcorão]] also credit the result to divine help, with angels at the Muslims' side. Those who analyze the battle as military history point to human factors: control of the wells, the discipline of a smaller and highly motivated force, and the morale and divisions on the Meccan side." },
        { note: "The date: 17 Ramadan (13 March 624) is the traditional date. Watt notes that other sources give the 15th, 19th or 21st." },
        { note: "The numbers: 313 Muslims is the traditional number, repeated in the sources. For Mecca, the sources vary between under a thousand and over 1,300." }
      ]}
    ]
  },

  uhud: {
    war: "War between Medina and Mecca (624–630)",
    hook: "The Muslims were winning, until fifty archers came down from a hill.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Badr, the Muslims of Medina kept raiding Mecca's caravans. The Quraysh had lost many leaders, and the man who now ran things was Abu Sufyan, who wanted revenge and also wanted to protect the city's trade.",
        "Mecca gathered about 3,000 men, with allied tribes, and marched on Medina. According to tradition, 700 of them wore [[mail|cota de malha]] and there were about 100 horsemen. All of these numbers are from the chronicles.",
        { h: "The road to Uhud" },
        { timeline: [
          ["624", "Muslim victory at Badr. More caravan raids follow."],
          ["Mar 625", "Abu Sufyan marches on Medina with about 3,000 men."],
          ["Mar 625", "About 1,000 Muslims leave Medina. A third turn back before the fighting, led by Abd Allah ibn Ubayy."],
          ["23 Mar 625", "The battle is fought on the slope of Mount Uhud, north of Medina."]
        ]},
        "The Muslims left Medina and took position on the slope of Mount Uhud, so that the mountain would cover their backs. According to tradition, when Abd Allah ibn Ubayy took away the roughly 300 men who followed him, about 700 were left."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Muhammad" },
        "He commanded the Muslims in person. Before the fighting, he placed the men on the slope and gave a special order to a small group: no one was to leave their post, whether the battle went well or badly.",
        { h: "Abu Sufyan and Khalid ibn al-Walid" },
        "Abu Sufyan commanded the Qurayshi center. Khalid ibn al-Walid, on the right, was a horseman who would later become one of the great generals of the Arab conquest. Ikrima ibn Amr commanded the Qurayshi left, and Amr ibn al-As the cavalry.",
        { h: "The other names" },
        "The commander of the Muslim archers was Abd Allah ibn Jubayr, according to a hadith in Bukhari. Among the Muslims, Hamza, Muhammad's uncle, and Ali fought at the front; Umar reorganized the troops afterwards. On the Meccan side, Talha ibn Abi Talha carried the standard and died in a duel with Ali. Wahshi ibn Harb killed Hamza."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Muslims numbered about 700 after Abd Allah ibn Ubayy's group left: according to tradition, 50 archers, 4 horsemen and the rest infantry, with only about 100 in [[mail|cota de malha]]. On the Meccan side, about 3,000, of whom 700 in mail and about 100 horsemen. The chronicles do not agree on every number.",
        { h: "The terrain" },
        "The battle was fought in a valley near Mount Uhud, north of Medina. The Muslims took position on the lower slopes, facing the city, with the mountain behind them. West of the camp was a rocky hill, which the account calls Jabal al-Rumat: the 50 archers were posted there to protect the flank and rear against a cavalry charge.",
        { h: "The battle in seven moves" },
        { formation: true },
        "First, Mecca's cavalry, led by Abu Amir, attempted a charge and was driven back by a volley of stones.",
        "Second, the duels over the standard followed. Talha ibn Abi Talha, who carried it, was killed by Ali in a duel. His brothers and sons took up the banner one after the other and were killed one by one.",
        "Third, the Muslims advanced through the enemy lines and seemed to be winning. The Quraysh fell back to their camp.",
        "Fourth, and decisive: most of the archers came down from the hill to collect the spoils from the enemy camp, despite Muhammad's order.",
        "Fifth, Khalid ibn al-Walid noticed. His cavalry rode around, overran the few archers who had stayed and struck the Muslim flank and rear. What looked like victory turned to chaos.",
        "Sixth, Hamza was killed. A rumor spread that Muhammad had died too; in fact he was wounded in the face by stones. Umar gathered part of the troops and counterattacked, and the Muslims climbed the slopes, where the Qurayshi cavalry could not reach.",
        "Seventh, Abu Sufyan shouted a challenge from the foot of the mountain and exchanged words with Umar. Then he set off for Mecca without attacking the slope or entering Medina."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Between 62 and 75 Muslims died, according to the estimates; the historian Ibn al-Athir lists 85, of whom 46 had fought at Badr. On the Meccan side, between 22 and 35. According to tradition, Hind, Abu Sufyan's wife, and her companions mutilated Muslim bodies, among them Hamza's.",
        "The Quraysh camped at Hamra al-Asad and then left, after a show of force by the Muslims. The [[Quran|alcorão]] (3:152) attributes the setback to disobedience and the desire for spoils, and treats it as a test.",
        { h: "Why it matters" },
        "Who won? Historians disagree. Lapidus and Karsh speak of a Meccan victory; Robinson, in the Encyclopaedia of Islam, sees a clear Muslim defeat. Watt points out that Mecca did not achieve its goal of destroying Muhammad and his followers, and that its quick withdrawal reveals weakness. Uhud also showed Khalid ibn al-Walid, who would later fight alongside the Muslims, how a battle is won with cavalry. Two years later, Mecca came back against Medina, in the Battle of the Trench.",
        { h: "Curiosities and controversies" },
        { note: "The sources: the details come from the works of Ibn Ishaq, al-Waqidi and Ibn Sa'd, all written well afterwards. Robinson considers the general sequence reasonably authentic, but doubts details such as the exact extent of the defeat." },
        { note: "The date: 23 March 625 (7 Shawwal, year 3 of the Hijra) is the traditional date of the battle." },
        { note: "The numbers: 3,000 Quraysh and 700 to 1,000 Muslims are the traditional numbers. There is no independent count." }
      ]}
    ]
  },

  khandaq: {
    war: "War between Medina and Mecca (624–630)",
    hook: "An army far larger than Medina's was stopped by a ditch dug in six days.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 627, two years after Uhud, Mecca had still not managed to eliminate the Muslims, and Qurayshi trade was suffering from the raids. According to tradition, the Banu Nadir, a Jewish tribe expelled from Medina after a siege, looked for allies against Muhammad. Among them was Huyayy ibn Akhtab.",
        "A confederation came together: the Quraysh of Mecca, allied tribes such as the Ghatafan, and others. According to the chronicles, they numbered 7,500 to 10,000 men, with about 600 horsemen. Watt estimates 7,500; other authors say over 12,000.",
        { h: "The road to the trench" },
        { timeline: [
          ["627", "The confederates leave Mecca and march on Medina, under Abu Sufyan's command."],
          ["six days", "The Muslims dig the trench, with Muhammad himself working alongside them."],
          ["about 20 nights", "The confederates besiege the city and cannot cross the ditch."],
          ["last night", "A storm knocks down the attackers' tents, and they leave during the night."]
        ]},
        "The date is uncertain. Tradition places the siege between the month of Shawwal and that of Dhu'l-Qa'da of year 5 of the Hijra, which corresponds to March and April 627; some authors say January. The sources speak of about 20 nights of siege, on top of the six days of digging."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Muhammad" },
        "He directed the defense from a post on the hill of Sala'. About 3,000 men of Medina, nearly all those over 14, defended the city, except the Banu Qurayza.",
        { h: "Salman the Persian" },
        "A Muslim of Persian origin, to whom tradition attributes the idea of digging a trench, a technique little used in Arabia. The historian Irfan Shahid suggests the idea came from Persian practice, perhaps by way of the Ghassanids.",
        { h: "Abu Sufyan and the others" },
        "Abu Sufyan commanded the confederation, with Ikrima ibn Amr and, for the Ghatafan, Uyayna ibn Hisn. Huyayy ibn Akhtab persuaded the Banu Qurayza to break their neutrality. On the Medina side, Sa'd ibn Mu'adh, chief of the Aws, who would later die of his wounds, was among the defenders. Nu'aym ibn Mas'ud, a respected leader who had secretly converted, played a curious part at the end of the siege."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "On the Medina side, about 3,000. On the confederate side, 7,500 to 10,000 according to tradition, and a number of horsemen around 600. These are chronicle numbers, with the scholarly disagreement mentioned above.",
        { h: "The terrain and the trench" },
        "Medina is surrounded by rocks, houses and palm groves through which a large army and cavalry pass badly. The trench was dug only where there was no natural barrier, and the longest continuous stretch lay in the north. The sources do not give its length. Every able Muslim worked on it, Muhammad included, and it took about six days.",
        { h: "The siege in five moves" },
        { formation: true },
        "First, the confederates arrived from the north and found the ditch finished. Horses and men could not cross, and the army camped on the other side.",
        "Second, for two to three weeks the siege amounted to exchanges of arrows and insults. Food ran short on both sides, and the horses became a problem for the attackers. According to tradition, Amr ibn Abd Wudd and a few horsemen crossed at a narrow point; Amr, famous as a warrior, was killed by Ali. Losses were small: 5 to 6 Muslims and 3 attackers.",
        "Third, Huyayy ibn Akhtab persuaded the Banu Qurayza to break the pact. Muhammad learned of it and sent three trusted men to check; their message back used an agreed code, 'Adal and Qarah'. News of a possible attack from the rear demoralized Medina, and accounts say the daily prayers were neglected for the first time.",
        "Fourth, Nu'aym ibn Mas'ud, a respected man who had secretly converted, went to the Qurayza and warned them that the confederates would abandon them; he suggested they demand [[hostages|refém]] from the chiefs. He then went to Abu Sufyan and said the Qurayza intended to hand those hostages over to Muhammad. The two sides began to distrust each other.",
        "Fifth, a storm of wind and rain put out the attackers' fires and tore their tents, while the Muslim camp stayed sheltered. The confederates broke camp and left during the night."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The confederates did not take the city and lost prestige. The accounts highlight three causes: the trench, the distrust among the allies and the storm. Mecca lost its trade with Syria, and Watt argues this made conversion to Islam seem more prudent to some Quraysh.",
        "After the confederates left, the Muslims besieged the [[Banu Qurayza|banu qurayza]] for 25 days. The tribe surrendered unconditionally. Sa'd ibn Mu'adh, chosen at the request of the Aws, ruled that the men of fighting age be killed and the women and children enslaved, and Muhammad approved. Ibn Ishaq speaks of 400 to 900 men executed.",
        { h: "Why it matters" },
        "The Trench showed that Medina could withstand a large army without going out into the open field. It was Mecca's last great offensive against the Muslim community: from then on, the initiative largely passed to Medina.",
        { h: "Curiosities and controversies" },
        { note: "The sources: the oldest account is Ibn Ishaq's [[sira]], written 120 to 130 years after Muhammad's death and known through Ibn Hisham's version and through al-Tabari. The numbers of troops and losses are estimates, and scholars disagree." },
        { note: "The fate of the Banu Qurayza: many scholars doubt Ibn Ishaq's number of executed, and some think only the prominent men were killed. Kister, in 1986, questioned the tradition of the massacre. No reliable hadith gives the exact number." },
        { note: "The origin of the idea: Irfan Shahid suggests the trench came from a Persian practice; tradition only says that Salman proposed it." },
        { note: "The date: between January and April 627, depending on the source; Islamic tradition places it in Shawwal of year 5 of the Hijra." }
      ]}
    ]
  },

  qadisiyya: {
    war: "Muslim conquest of Persia (633–651)",
    hook: "Four days of fighting, a sandstorm and the end of the army that defended Iraq.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "When Muhammad died, in 632, the Arabs were more united than ever. Within a few years, the [[Caliphate of Medina|califado rashidun]] defeated the Byzantines in Syria and turned to Iraq, the richest province of the [[Sasanian|sassânidas]] Empire. The Persian empire was exhausted: it had spent decades at war with Byzantium and in internal struggles over the throne.",
        "Caliph Umar sent Sa'd ibn Abi Waqqas with an army. According to a common chronology, Sa'd left Medina in May 636 and reached Qadisiyyah in June. The Persians gathered an army under Rostam Farrokhzad.",
        { h: "The road to Qadisiyyah" },
        { timeline: [
          ["632", "Muhammad dies. The wars of conquest begin."],
          ["636", "The Arabs defeat the Byzantines at Yarmouk and turn their attention to Iraq."],
          ["May–Jun 636", "Sa'd ibn Abi Waqqas leaves Medina and reaches Qadisiyyah."],
          ["16–19 Nov 636", "The battle, by the most widely used date. The chronicles disagree."],
          ["Mar 637", "The Arabs take Ctesiphon, the Persian capital."]
        ]},
        "Qadisiyyah was a small town on the west bank of the river Ateeq, a branch of the Euphrates, about 50 kilometers from al-Hira. In 2024, researchers from the universities of Durham and al-Qadisiyah located the probable site, some 19 kilometers south of present-day Kufa, using declassified spy-satellite imagery and descriptions of the old Darb Zubaydah road."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Sa'd ibn Abi Waqqas" },
        "Commander of the Arabs, one of Muhammad's earliest companions. During the battle he was ill, with sciatica and boils, and directed everything from the old royal palace at Qadisiyyah. He passed his orders through Khalid ibn Urfuta, his deputy, who carried them to the field.",
        { h: "Rostam Farrokhzad" },
        "Commander in chief of the Persians. He watched the fight from a raised, shaded seat on the west bank, behind the right center, near the royal standard, the [[Derafsh-e Kaveyan|derafsh-e kaveyan]].",
        { h: "The other names" },
        "On the Arab side, Qa'qa ibn Amr al-Tamimi, who arrived with reinforcements; Asim ibn Amr, on the left of the center; Zuhra ibn al-Hawiyya, on the right of the center; Jarir ibn Abd Allah, commander of the right-wing cavalry; Al-Ash'ath ibn Qays. On the Persian side, Hormuzan on the right wing, Jalinus in the right center, Piruzan in the rear and Mihran on the left wing."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The chronicles count about 30,000 Arabs at the start, 7,000 of them mounted, and some 36,000 with the reinforcements from Syria. For the Persians, the chronicle numbers vary widely: 50,000 to 100,000 in military works such as Dupuy's and Laffin's, 60,000 in a breakdown of 45,000 infantry and 15,000 cavalry, and up to 120,000 in other accounts. Modern studies starting from logistics suggest something like 30,000 on each side. The chronicle numbers are probably exaggerated.",
        "The Persians had about 33 elephants, eight for each of the four divisions, on a front of some 4 kilometers. The Persian infantry formed four divisions, with the cavalry behind in four reserve groups. The Arabs also organized into four corps, about 150 meters apart, with a cavalry regiment behind each.",
        { h: "The terrain" },
        "The Persians were camped on the east bank of the Ateeq, linked by a single bridge (the boats were kept in reserve). Rostam had a canal filled in and turned into a road, to get the army across before dawn. The Arabs were on the west bank, near Sa'd's palace.",
        { h: "The four days" },
        { formation: true },
        "First day, 16 November, the 'day of disorder' (Yawm al-Armath). It began with [[duels of champions|duelo de campeões]]. Then the Persian [[elephants|elefantes de guerra]] charged the Arab right and frightened the horses. Asim ibn Amr ordered his archers to kill the drivers, and the infantry cut the girths of the elephants' saddles, and the animals drew back. The fight ended at nightfall without a decision.",
        "Second day, 17 November. Around noon, reinforcements arrived from Syria. Qa'qa ibn Amr sent his vanguard in small groups, to look like an enormous army, which demoralized the Persians. According to tradition, the Arabs also dressed camels up to look like monsters and frighten the Persian horses. Rostam's counterattacks held the line, and both sides returned to their camps at dusk. About 5,000 veterans of Yarmouk arrived that day, a turning point, according to scholars.",
        "Third day, 18 November, Yaum-ul-Amas. Rostam made a general attack, with the elephants in front. A Persian cavalry unit tried to seize Sa'd's palace and was driven off. Sa'd ordered the elephants blinded and their trunks cut; the panicked animals fled toward the river, and by noon none was left on the field. The fight became a test of endurance.",
        "The following night, which the chronicles call the 'night of rumbling noises' (Lailat-ul-Harir), the fighting went on without a pause until dawn.",
        "Fourth day, 19 November. Qa'qa urged on his men, who broke through the Persian center around noon but could not break up the army. Then a sandstorm blew up, and Rostam was killed. The Persian line fell apart. Jalinus took command of the remnants and managed to get most of the army across the bridge; the Arab cavalry pursued and killed or captured the stragglers.",
        { h: "The death of Rostam" },
        "There are four versions. In the first, Qa'qa's men attacked headquarters during the sandstorm and found Rostam dead, with more than five wounds. In the second, Hilal ibn Ullafah accidentally cut loose a camel's load, which fell on Rostam, and then beheaded him; scholars consider this version unlikely. In the third, from al-Ya'qubi, four Arab warriors found the body. In the fourth, Sa'd killed him in single combat, blinded by the storm; this one, like al-Tabari's, is considered a later addition."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Sasanian army was destroyed. The Arabs captured the royal standard, the [[Derafsh-e Kaveyan|derafsh-e kaveyan]], and its jewels were cut up and sold in Medina. Losses are described only as heavy; the chronicles give figures of no value. Sa'd informed Umar, who ordered the siege of [[Ctesiphon|ctesifonte]]. The capital fell in March 637. In April, the Arabs won at Jalula, under Hashim ibn Utba.",
        { h: "Why it matters" },
        "With Iraq in their hands, the Arabs had a fertile and populous base a few days from the mountains of Iran. Later, at Nahavand, they destroyed the last Persian field army, and in 651 Yazdegerd III, the last shah, died. In a little over 15 years, an empire more than four centuries old disappeared.",
        { h: "Curiosities and controversies" },
        { note: "The date: the most cited is 16 to 19 November 636. But the sources disagree. Al-Tabari mentions different years (14, 15 or 16 of the Hijra, 635 to 637); al-Baladhuri gives the end of year 16 (637–638); Sourdel suggests March 636 or 637; Pourshariati prefers 635; Britannica says 636 or 637." },
        { note: "The sources: much of the story comes from al-Tabari, who in turn relies heavily on Sayf ibn Umar, an author whom modern historians treat with caution for exaggerating. The names of the days and the stories of duels should be read as tradition." },
        { note: "The numbers: 30,000 Arabs and 60,000 or more Persians are from the chronicles. Modern logistical analysis suggests much smaller forces, around 30,000 on each side." }
      ]}
    ]
  },

  nahavand: {
    war: "Muslim conquest of Persia (633–651)",
    hook: "The Muslims called it 'the victory of victories': the last great Persian army was no more.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Qadisiyyah and the fall of Ctesiphon, Shah Yazdegerd III withdrew to the Iranian plateau, the heart of the Sasanian empire. The Arabs held Iraq, but the interior of Iran was still Persian, and in late 641 or in 642 the governors of the plateau gathered a new army at Nahavand, near [[Hamadan|hamadã]], with men from Ray, Isfahan, Hamadan and provinces farther east.",
        "Caliph Umar decided on a full-scale invasion. According to the chronicles, he considered commanding the army himself and was talked out of it. He chose al-Nu'man ibn Muqarrin, of the Muzayna tribe, who was governor of the district of Kaskar and had asked for a combat post.",
        { h: "The road to Nahavand" },
        { timeline: [
          ["636–637", "Arab victories at Qadisiyyah and Jalula, and the fall of Ctesiphon."],
          ["641 or 642", "The Persians gather a new army at Nahavand."],
          ["642", "The battle, by the most cited date (year 21 of the Hijra). Some authors place it in December 641."],
          ["651", "Yazdegerd III dies, assassinated at Merv."]
        ]},
        "The date is uncertain. Year 21 of the Hijra runs from December 641 to December 642, and some accounts speak of years 19 or 20, that is, 640 to 641. The year 642 is the most cited."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Al-Nu'man ibn Muqarrin" },
        "The Arab commander. According to tradition, before the fighting he prayed: 'God, grant Nu'man martyrdom together with the victory of the Muslims.' He died in the battle. When he heard, Umar, according to tradition, covered his face with his hands and wept.",
        { h: "Firuzan, the Persian general" },
        "In al-Tabari, the Persian commander is Piruzan (al-Fayruzan), the Firuzan of modern texts; other accounts name Mardanshah. Much of the army was made up of farmers and villagers, not veteran soldiers, and many nobles had deserted before the fighting.",
        { h: "The other names" },
        "According to al-Tabari, Umar had named Nu'man's successors in case he died, the first of them Hudhayfa ibn al-Yaman, and Nu'man's brother is said to have covered the body and kept the banner flying so the troops would not lose heart. Yazdegerd III, the shah, was not on the field."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The modern estimate is about 30,000 Arabs (Crawford). For the Persians, the sources diverge widely: from 50,000 to 150,000, and the chronicles give even larger numbers. These numbers should be treated with suspicion: the 150,000 figure itself is cited from a study of an earlier empire, the Parthian.",
        { h: "The terrain" },
        "Nahavand lies at the foot of the Zagros mountains, south of Hamadan, in a region of passes and rough ground. The Persians took a strong defensive position, which was unusual for a Persian army of loose discipline. The Arabs did not want to attack head-on.",
        { h: "Two versions of the battle" },
        "The accounts that have reached us tell the fight in two ways, and neither describes the deployment of the troops.",
        "In the first version, the Persian horsemen pursued the Arabs in disorder, the Arabs regrouped and surrounded their pursuers, and the Muslims attacked from all sides.",
        "In the second, more detailed, Nu'man used tactics rather than luck. After days of inconclusive [[skirmishes|escaramuça]], the Arab commanders agreed on a [[feigned retreat|retirada fingida]] to draw the Persians out of their defenses. The withdrawal was orderly. The Persians came out after them, Firuzan's cavalry strung out over rough ground and narrow passages, and the Arabs turned about and counterattacked. Firuzan abandoned his position to pursue, which historians point to as a serious mistake. The Persians were trapped between two passes and fought for two days and three nights before being defeated.",
        { h: "The death of the commanders" },
        "Nu'man was killed, early in the fight according to al-Tabari, and Hudhayfa took command. The Persian army broke, and many died in the flight, some tumbling into a ravine in the dark. There are two versions for Firuzan. In the first, he died in the final melee. In the second, he fled toward Hamadan and was caught at a mountain pass; the most repeated story says the pass was blocked by a caravan carrying honey, which may be legend."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Sasanian imperial army almost ceased to exist. The sources give only 'heavy losses', and the numbers are worthless: some works speak of 20,000 Persians dead, others of more than 100,000, a figure the authors themselves consider exaggerated. Hamadan surrendered soon afterwards, on terms, and the Arabs took Isfahan and the surrounding cities.",
        "Yazdegerd fled east. Some governors received him badly; the one at Merv, Mahoye, openly opposed him. He asked Tukharistan and Sogdia for help and sent his son Peroz to the Chinese court of the Tang, without success. He was assassinated in 651 by a miller at Merv. Peroz tried to restore the empire and died in China.",
        { h: "Why it matters" },
        "After Nahavand, the Persians had no imperial army left. The provinces fragmented into local chiefs, and the Arabs took Iran one region at a time, in a process that lasted about a decade. Muslims call it the 'victory of victories' (fath al-futuh).",
        { h: "Curiosities and controversies" },
        { note: "The sources: the accounts used today are modern works (Crawford, Pourshariati, Kennedy), based on al-Tabari and al-Baladhuri, written more than two centuries afterwards. Historians themselves acknowledge that little is known of how the battle unfolded." },
        { note: "The date: the year 642 is the most cited, but others point to December 641, and some accounts speak of 640 to 641." },
        { note: "The caravan of honey: it is the most repeated story about the end of Firuzan, but it is typical of the chronicles and there is no way to confirm it." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  badr: {
    terrain: [
      { t: "hill", x: 8, y: 36, rx: 7, ry: 20, l: "Jabal al-Asfal" },
      { t: "hill", x: 92, y: 36, rx: 7, ry: 18, l: "Dunes" },
      { t: "note", x: 90, y: 6, l: "North ↑" }
    ],
    units: [
      { id: "mR", s: "a", k: "cav", w: 8, h: 5, l: "Zubayr (right)" },
      { id: "mM", s: "a", k: "inf", w: 20, h: 5, l: "Emigrants" },
      { id: "mA", s: "a", k: "inf", w: 22, h: 5, l: "Men of Medina" },
      { id: "mL", s: "a", k: "cav", w: 8, h: 5, l: "Miqdad (left)" },
      { id: "well", s: "a", k: "camp", w: 10, h: 5, l: "Well" },
      { id: "qC", s: "b", k: "inf", w: 34, h: 6, l: "Quraysh" },
      { id: "qCav", s: "b", k: "cav", w: 10, h: 5, l: "≈ 100 horses" },
      { id: "qCamp", s: "b", k: "camp", w: 14, h: 5, l: "Qurayshi camp" }
    ],
    steps: [
      { t: "The Muslims arrive from the north. The Quraysh are in the southeast, by the Mecca road. Dunes to the east, mountain to the west.",
        p: { mR: [30, 10], mM: [44, 8], mA: [66, 8], mL: [80, 10], well: [52, 18], qC: [50, 56], qCav: [76, 58], qCamp: [50, 66] } },
      { t: "On the advice of Hubab ibn al-Mundhir, the force advances to the well nearest the enemy and destroys the others. The Quraysh are left without easy water.",
        p: { well: [52, 26], mM: [44, 20], mA: [66, 20], mR: [30, 22], mL: [80, 22] } },
      { t: "On the night of 11 March, it rains. According to tradition, the sloping ground is soaked, and this hampers the Quraysh.",
        p: { qC: [50, 52] } },
      { t: "The lines form. Zubayr is on the right, Miqdad on the left, and the emigrants and the men of Medina in the center.",
        p: { mR: [28, 30], mM: [44, 30], mA: [68, 30], mL: [84, 30] } },
      { t: "Duels: Ali, Hamza and Ubayda face the three nobles of Mecca. Ali kills al-Walid, Hamza kills Shayba, and Ubayda is mortally wounded.",
        p: { mM: [48, 38], qC: [50, 46] } },
      { t: "Arrows are exchanged. The Quraysh attack. Muhammad prays and Abu Bakr steadies him.",
        p: { qC: [50, 40], qCav: [76, 42] } },
      { t: "Muhammad throws pebbles toward the enemy and orders the counterattack. The Qurayshi line breaks within a few hours.",
        p: { mR: [30, 40], mM: [46, 38], mA: [66, 38], mL: [82, 40], qC: [50, 46], qCav: [76, 50] }, x: ["qC"] },
      { t: "The Quraysh flee. About 70 die and another 70 are captured. On the Muslim side, 14 die.",
        p: { qC: [50, 62], qCav: [76, 64], qCamp: [50, 68], mM: [46, 50], mA: [66, 50] }, x: ["qC", "qCav"] }
    ]
  },

  uhud: {
    terrain: [
      { t: "hill", x: 50, y: 6, rx: 40, ry: 7, l: "Mount Uhud" },
      { t: "hill", x: 14, y: 30, rx: 8, ry: 7, l: "Archers' hill" }
    ],
    units: [
      { id: "mI", s: "b", k: "inf", w: 34, h: 5, l: "Muslims (≈ 700)" },
      { id: "mA", s: "b", k: "inf", w: 10, h: 3, l: "50 archers" },
      { id: "qC", s: "a", k: "inf", w: 30, h: 6, l: "Abu Sufyan (center)" },
      { id: "qK", s: "a", k: "cav", w: 12, h: 5, l: "Khalid" },
      { id: "qI", s: "a", k: "cav", w: 12, h: 5, l: "Ikrima" },
      { id: "qB", s: "a", k: "inf", w: 6, h: 3, l: "Standard-bearer" },
      { id: "qCamp", s: "a", k: "camp", w: 14, h: 5, l: "Qurayshi camp" }
    ],
    steps: [
      { t: "The Muslims hold the slope, with the mountain at their backs. Fifty archers guard the hill beside them, with orders not to leave it. The Quraysh form up on the plain.",
        p: { mI: [52, 24], mA: [14, 30], qC: [50, 50], qK: [24, 50], qI: [76, 50], qB: [50, 40], qCamp: [50, 64] } },
      { t: "Mecca's cavalry, led by Abu Amir, tries a charge and is driven back by a volley of stones.",
        p: { qI: [72, 40] } },
      { t: "The duels over the standard: Ali kills Talha ibn Abi Talha. His relatives take up the banner, one by one, and are killed.",
        p: { qB: [50, 36], mI: [52, 30] }, x: ["qB"] },
      { t: "The Muslims break the line and seem to be winning. The Quraysh fall back to their camp.",
        p: { mI: [52, 40], qC: [50, 56], qCamp: [50, 66] } },
      { t: "Most of the archers come down from the hill to collect the spoils, against Muhammad's order.",
        p: { mA: [20, 46] } },
      { t: "Khalid notices, rides around with the cavalry, overruns the few archers who stayed and strikes the flank and rear.",
        p: { qK: [20, 30], mI: [52, 38] }, x: ["mA"] },
      { t: "Chaos. Hamza is killed. A rumor spreads that Muhammad has died, but he is only wounded.",
        p: { qK: [36, 26], qC: [50, 44], qI: [72, 44], mI: [52, 32] } },
      { t: "Umar gathers part of the troops and counterattacks. The Muslims climb the slopes, where the cavalry cannot reach. Abu Sufyan shouts a challenge and goes back to Mecca.",
        p: { mI: [52, 18], qK: [36, 38], qC: [50, 54], qI: [72, 54] } }
    ]
  },

  khandaq: {
    terrain: [
      { t: "hill", x: 14, y: 52, rx: 12, ry: 9, l: "Hill of Sala'" },
      { t: "note", x: 90, y: 6, l: "North ↑" }
    ],
    units: [
      { id: "trench", s: "a", k: "inf", w: 78, h: 3, l: "Trench (dug in six days)" },
      { id: "mI", s: "a", k: "inf", w: 56, h: 5, l: "Defenders of Medina (≈ 3,000)" },
      { id: "mHQ", s: "a", k: "camp", w: 12, h: 5, l: "Muhammad (Sala')" },
      { id: "qI", s: "b", k: "inf", w: 22, h: 6, l: "Quraysh (Abu Sufyan)" },
      { id: "gI", s: "b", k: "inf", w: 22, h: 6, l: "Ghatafan and others" },
      { id: "cav", s: "b", k: "cav", w: 14, h: 5, l: "≈ 600 horsemen" },
      { id: "qz", s: "b", k: "camp", w: 14, h: 5, l: "Banu Qurayza" }
    ],
    steps: [
      { t: "The Muslims dig a trench where there is no natural barrier. Every able man works, Muhammad included. The work takes about six days.",
        p: { trench: [50, 30], mI: [50, 40], mHQ: [14, 56], qI: [30, 6], gI: [62, 6], cav: [86, 8], qz: [88, 58] } },
      { t: "The confederate army arrives from the north, with seven to ten thousand men, and camps on the other side of the ditch.",
        p: { qI: [30, 16], gI: [62, 16], cav: [84, 18] } },
      { t: "The cavalry cannot cross. Days of exchanged arrows and insults.",
        p: { cav: [80, 24] } },
      { t: "According to tradition, Amr ibn Abd Wudd and a few horsemen cross at a narrow point. Amr is killed by Ali.",
        p: { cav: [82, 28] } },
      { t: "Huyayy ibn Akhtab persuades the Banu Qurayza to break the pact. Muhammad sends three men to check, and the rumors demoralize Medina.",
        p: { qz: [88, 50], mI: [50, 38] } },
      { t: "Nu'aym ibn Mas'ud sows distrust: he warns the Qurayza that the confederates will abandon them and warns Abu Sufyan that the Qurayza will hand them over.",
        p: { qz: [88, 44] } },
      { t: "A storm puts out the attackers' fires and knocks down their tents. The confederates leave during the night.",
        p: { qI: [30, 4], gI: [62, 4], cav: [84, 6] }, x: ["qI", "gI", "cav"] }
    ]
  },

  qadisiyya: {
    terrain: [
      { t: "sea", x: 0, y: 8, w: 100, h: 5, l: "River Ateeq (one bridge)" },
      { t: "note", x: 90, y: 66, l: "West bank" }
    ],
    units: [
      { id: "pCamp", s: "b", k: "camp", w: 16, h: 5, l: "Persian camps (east bank)" },
      { id: "pLw", s: "b", k: "inf", w: 20, h: 5, l: "Mihran (left wing)" },
      { id: "pLc", s: "b", k: "inf", w: 20, h: 5, l: "Piruzan and center" },
      { id: "pRc", s: "b", k: "inf", w: 20, h: 5, l: "Jalinus (right center)" },
      { id: "pRw", s: "b", k: "inf", w: 20, h: 5, l: "Hormuzan (right wing)" },
      { id: "pEle", s: "b", k: "ele", w: 70, h: 4, l: "≈ 33 elephants" },
      { id: "pCav", s: "b", k: "cav", w: 20, h: 4, l: "Reserve cavalry" },
      { id: "pRos", s: "b", k: "camp", w: 12, h: 4, l: "Rostam and the standard" },
      { id: "mLw", s: "a", k: "inf", w: 20, h: 5, l: "Asim (left)" },
      { id: "mCl", s: "a", k: "inf", w: 20, h: 5, l: "Left center" },
      { id: "mCr", s: "a", k: "inf", w: 20, h: 5, l: "Zuhra (right center)" },
      { id: "mRw", s: "a", k: "inf", w: 20, h: 5, l: "Right wing" },
      { id: "mCav", s: "a", k: "cav", w: 20, h: 4, l: "Jarir (cavalry)" },
      { id: "mQ", s: "a", k: "cav", w: 10, h: 4, l: "Qa'qa and the Syrian vanguard" },
      { id: "mPal", s: "a", k: "camp", w: 14, h: 5, l: "Sa'd's palace" }
    ],
    steps: [
      { t: "The Persians have crossed the filled-in canal and form up in four divisions, with elephants in front. The Arabs also form in four corps. Sa'd, ill, directs everything from the palace.",
        p: { pCamp: [16, 3], pLw: [20, 28], pLc: [40, 28], pRc: [60, 28], pRw: [80, 28], pEle: [50, 36], pCav: [50, 21], pRos: [66, 18],
             mLw: [20, 46], mCl: [40, 46], mCr: [60, 46], mRw: [80, 46], mCav: [50, 54], mQ: [14, 68], mPal: [50, 64] } },
      { t: "First day: after the duels, the elephants charge the Arab right and frighten the horses. Asim's archers kill the drivers, and the infantry cuts the girths.",
        p: { pEle: [74, 40], mRw: [80, 44] } },
      { t: "The elephants fall back. The fight ends at nightfall without a decision: the 'day of disorder'.",
        p: { pEle: [60, 34], mRw: [80, 46] } },
      { t: "Second day: around noon, reinforcements arrive from Syria. Qa'qa sends the vanguard in small groups, to look like an enormous army. The disguised camels frighten the Persian horses.",
        p: { mQ: [30, 58], mCav: [40, 52], pCav: [36, 25] } },
      { t: "Third day: Rostam makes a general attack, with elephants. A Persian cavalry unit tries to seize Sa'd's palace and is driven off.",
        p: { pEle: [50, 42], pCav: [50, 52], mCl: [42, 46], mPal: [50, 64] } },
      { t: "Sa'd orders the elephants blinded and their trunks cut. In panic, they flee toward the river. By noon none is left.",
        p: { pEle: [50, 14] }, x: ["pEle"] },
      { t: "Night of rumbling noises: the fighting goes on without a pause until dawn.",
        p: { mLw: [20, 42], mCl: [40, 42], mCr: [60, 42], mRw: [80, 42], pLw: [20, 34], pLc: [40, 34], pRc: [60, 34], pRw: [80, 34] } },
      { t: "Fourth day: Qa'qa's men break through the Persian center, but the army holds. Then a sandstorm blows up.",
        p: { mQ: [50, 38], mCr: [58, 40], pRc: [58, 32] } },
      { t: "Rostam dies, and the Persian line falls apart. Jalinus commands the remnants and takes most of them across the bridge. The Arab cavalry pursues.",
        p: { pRos: [66, 10], pLw: [20, 18], pLc: [40, 16], pRc: [60, 14], pRw: [80, 18], mCav: [50, 30], mQ: [50, 26] }, x: ["pRos", "pLw", "pLc", "pRc", "pRw"] }
    ]
  }
});
