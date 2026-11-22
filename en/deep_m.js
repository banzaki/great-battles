// In-depth battles, batch m: terek, ankara, grunwald, azincourt, orleans, tumu.
// Checked against the English Wikipedia articles (Terek River, Tokhtamysh-Timur war, Tokhtamysh, Ankara, Timur,
// Bayezid I, Stefan Lazarevic, Grunwald, Agincourt, Henry V, Orleans, Joan of Arc, Hundred Years' War, Tumu Crisis,
// Timeline of the Battle of Tumu, Wang Zhen, Esen Taishi, Emperor Yingzong), the Portuguese Wikipedia articles
// (Ancara, Grunwald, Azincourt, Cerco de Orleans), historyofwar.org (Terek River, Ankara) and the EBSCO research
// starter on Ankara, and the works those pages cite (Barker, Curry, Keegan, Sumption, Mortimer, Frost, Ekdahl,
// Nicolle, Favereau, Manz, de Heer, Twitchett and Grimm, Yazdi, Clavijo, Schiltberger, Ramsay).
// Britannica could not be opened, so it was not used.

Object.assign(GLOSSARY, {
  "grão-mestre": "The supreme head of a religious military order, such as the Teutonic Order. He ruled the Order like a prince and commanded its army.",
  "ordem teutônica": "An order of warrior monks born in the Crusades. In the 14th century it dominated Prussia and much of the Baltic coast, with its seat at the castle of Marienburg (today Malbork, in Poland).",
  "resgate": "A payment demanded to release a noble prisoner. In the Middle Ages, capturing a rich knight could be worth more than killing him.",
  "bandeira": "A military unit of central and eastern Europe, gathered around a banner (chorągiew in Polish). Its size varied, and the chronicles do not say how many men each one had.",
  "arauto": "An officer who carried messages between enemy armies and recognized nobles by their coats of arms. In theory, he could not be attacked.",
  "armagnacs": "A faction of the French nobility, tied to the House of Orléans, that fought the Burgundians for power while King Charles VI was unfit to rule. The Armagnacs backed the dauphin Charles.",
  "borgonheses": "The party of the Duke of Burgundy, rival of the Armagnacs. It allied with the English after Duke John the Fearless was murdered in 1419.",
  "delfim": "The title of the heir to the throne of France. In 1429 the dauphin was Charles, whom the English and the Burgundians did not recognize as heir.",
  "bastilha": "A fort of wood and earth built by those besieging a city, to watch it and block its exits. At Orléans, the English raised about a dozen of them around the city.",
  "baluarte": "A defensive work of earth and wood, lower than a wall, built in front of a bridge or a gate to protect the entrance.",
  "eunuco": "A castrated man who served at the Chinese imperial court. Some, like Wang Zhen, came to control the government because of their closeness to the emperor.",
  "taishi": "A title of chief among the Oirat Mongols. Esen inherited the title from his father and ended up ruling nearly all the Mongols.",
  "oirates": "The western Mongols, who in the 15th century, under Esen, became the most powerful Mongol people and began to threaten China.",
  "sipahis": "Turkish feudal cavalry, made up of horsemen who received land in exchange for military service. In Bayezid's army, many came from the principalities of Anatolia.",
  "beiliques": "Small Turkish principalities of Anatolia, ruled by emirs (beys). Bayezid conquered several, and their former lords fled to Tamerlane's court.",
  "interregno otomano": "The years of civil war among Bayezid's sons after Ankara (1402 to 1413), until Mehmed I reunified the empire.",
  "escudeiro": "A young noble, below a knight, who served a knight and fought at his side.",
  "emir": "A ruler or military leader in the Muslim world. In the Golden Horde, the emirs commanded their own troops and could switch sides.",
  "despota": "A Byzantine title just below that of emperor. Stefan Lazarević received it in 1402.",
  "estacas de arqueiro": "Wooden stakes with a sharpened point, driven into the ground slanting forward, in front of the archers. They served to stop cavalry.",
  "zafarnama": "'The Book of Victories', the official chronicle of Tamerlane, written by Sharaf ad-Din Ali Yazdi, historian of the Timurid court. It is the main source on his campaigns."
});

Object.assign(DEEP, {
  terek: {
    war: "War between Tamerlane and Tokhtamysh (1385–1395)",
    hook: "A khan who owed his throne to Tamerlane decided to face him, and lost what was left of the Golden Horde one afternoon on the bank of a river in the Caucasus.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of the 14th century, the steppes that ran from the Black Sea to Kazakhstan were the territory of the [[Golden Horde|horda dourada]], the state that inherited the empire of Genghis Khan and his son Jochi. On the other side, to the south, grew the empire of Tamerlane, with its capital at Samarkand. The two became neighbors, and a fight was only a matter of time.",
        "The curious part is that it all began with a favor. Tokhtamysh, a descendant of Jochi, lost his father to a powerful relative, the [[khan|cã]] Urus, and fled. In 1376 he sought refuge with Tamerlane, who refused to hand him over. Tamerlane backed him, and around 1379 Tokhtamysh was installed as ruler of part of the Horde. In 1380 he took Sarai, the capital, and in 1381 he defeated his rival Mamai. With that, he came to rule both halves of the Horde.",
        { h: "From favor to war" },
        { timeline: [
          ["1376", "Tokhtamysh flees to Tamerlane's court. Tamerlane refuses to hand him over to Khan Urus."],
          ["1380–1381", "With Tamerlane's support, Tokhtamysh takes Sarai and defeats Mamai. He now reigns over the whole Golden Horde."],
          ["1382", "He besieges and sacks Moscow (the siege begins on 23 August) and then sacks Ryazan on the way back."],
          ["1385", "He attacks Azerbaijan, sacks Tabriz and returns north with a great haul of loot. From then on, Tokhtamysh and Tamerlane are enemies."],
          ["18 June 1391", "Tamerlane defeats Tokhtamysh on the Kondurcha River, after chasing his army across the steppes."],
          ["1394–1395", "Tokhtamysh allies with the Mamluk sultan of Egypt and again attacks Tamerlane's territory through the Caucasus."],
          ["April 1395", "The battle of the Terek River."]
        ]},
        "After the defeat in 1391, Tokhtamysh did not lose his throne. He looked for allies and again attacked Tamerlane's lands in the Caucasus. According to Yazdi's account in the [[Zafarnama|zafarnama]], Tamerlane offered a peace deal from his winter quarters on the shore of the Caspian Sea. Tokhtamysh almost accepted, but courtiers and generals persuaded him otherwise, and he replied with an arrogant message. War became inevitable."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Tamerlane (Timur), about 59 years old" },
        "Born in 1336 in Transoxiana (the region of present-day Uzbekistan), he became the lord of an empire that stretched from India to Syria. He limped on one leg after being wounded by arrows, around 1363, and the Persian nickname 'Timur the Lame' gave rise to the name 'Tamerlane'. In 1395, the attack on Tokhtamysh was a personal campaign: he himself had put him on the throne, and he now treated it as a betrayal.",
        { h: "Tokhtamysh, about 53 years old" },
        "Born around 1342, he rose to power with Tamerlane's help and later decided to become his rival. He had one weighty success, the sack of Moscow, but he misjudged his enemy twice: in 1391 and in 1395. After the Terek, he spent the rest of his life trying to recover what he had lost.",
        { h: "The other names" },
        "On Tamerlane's side, Mirza Mohammad Sultan, a grandson, commanded the center, and Tamerlane kept the [[reserve|reserva]]. Sheikh Nur ad-Din, according to Yazdi, was the one who came to Tamerlane's aid when he was in danger. On the Horde's side, the sources I consulted give no names of commanders, except a chief called Aktau, who is said to have abandoned Tokhtamysh in the middle of the fight, according to Mamluk ambassadors quoted by Favereau."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "There are no reliable numbers. Yazdi says only that Tamerlane's army was so large that, in battle order, it formed a line about five leagues wide, from the Caspian Sea to the mountains. For Tokhtamysh, the sources I read give nothing. Both armies were, above all, cavalry.",
        { note: "The figure of 100,000 men for each side, which often appears in summaries, was not found in any source for the Terek. The English Wikipedia gives that figure for Tamerlane in another battle, Kondurcha, in 1391. For the Terek, the most honest thing is to say that it is not known." },
        { h: "The terrain and the crossing" },
        "The Terek runs from the Caucasus to the Caspian Sea. Tokhtamysh was waiting for Tamerlane in a fortified camp that covered the only easy ford of the river. According to the account of the Spanish envoy Clavijo, Tamerlane went up the river for three days, with the Horde following along the other bank. On the third night he left women dressed as soldiers in the camp and made a forced march with the army back to the ford, which he crossed without anyone stopping him. Yazdi tells a compatible version: Tokhtamysh abandoned the strong position, fell back a little and reorganized the army. On 21 April (a date given by one of the accounts), the two armies were already on the same side of the river.",
        { h: "The battle" },
        "The accounts that have reached us are scarce and differ in details, but they allow us to put together the following picture.",
        "Tamerlane formed the army in seven bodies. Mohammad Sultan was in the center, two wings on the flanks, and he himself with the reserve of twenty-seven chosen companies.",
        "First, a strong detachment from Tokhtamysh's right attacked early against Tamerlane's wing. Tamerlane threw the reserve into the fight and the attackers fell back to the main body, where they reorganized.",
        "Second, one of the reserve companies advanced too far, ran into Tokhtamysh's center and was repulsed. The retreat turned into a small rout, and Tamerlane was left exposed, fighting hand to hand. Yazdi says that Sheikh Nur ad-Din arrived with about fifty men to defend him, and other groups came after, including Tamerlane's own guard. Then Mohammad Sultan brought men from the center against the Horde's right, which fell back.",
        "Third, Tamerlane's right wing was pressed and nearly surrounded by Tokhtamysh's left. Its horsemen dismounted for a last stand and were saved only when reinforcements arrived from the center. The center, in the meantime, had a hard fight, but without surprises: Tokhtamysh's men were pushed back.",
        "Fourth, and decisive: Tokhtamysh turned his back and fled, and the army followed.",
        { note: "The sources differ on where the fighting began. The English Wikipedia, relying on Favereau, says that Tokhtamysh's cavalry attacked Tamerlane's right flank and center. Yazdi's summary, on the History of War site, speaks of an attack on the left wing at the start and then pressure on the right. Also, only one of the versions mentions defections: according to Mamluk ambassadors, the chief Aktau left the field with thousands of warriors, and some emirs of the Horde went over to Tamerlane's side, who then defeated Tokhtamysh's left." },
        "There are no reliable numbers for the dead."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Tamerlane tried to capture Tokhtamysh, who escaped to the north of the Volga. Then he destroyed the cities of the Horde: Sarai, the capital, Astrakhan, Azov and Tana (where the Don River reaches the Black Sea), as well as Ukek and Majar. The Italian colonies of Sarai, Tana and Astrakhan were destroyed. The city of Caffa, in Crimea, was spared after Genoese envoys offered gifts to Tamerlane. The rest of Crimea was devastated in August 1395.",
        "Tamerlane advanced north, as far as Yelets, and turned back. Russian chroniclers explained this with a vision of the Virgin Mary, according to Crummey.",
        { h: "Why it matters" },
        "The Golden Horde never recovered its strength. Edigu, a powerful chief of the Horde, put Temür Qutlugh in place as khan around 1397. Tokhtamysh fled to Lithuania, where Grand Duke Vytautas supported him, and in 1399 he lost the battle of the Vorskla River. He fled east and was killed around 1406, near Tyumen, in Siberia. Little by little, the Horde split into several khanates, and the last remnant was destroyed by the Crimean Khanate in 1502.",
        { h: "Curiosities and controversies" },
        { note: "The date: Wikipedia gives 14 April 1395 in the battle article and 15 April in the one on the war, in one of them citing 15 and 16 April. The History of War site uses 22 April." },
        { note: "The sources: almost everything comes from Yazdi's Zafarnama, written at Tamerlane's court to exalt him, and from Clavijo's account. The accounts from the Horde's side have almost all failed to survive." }
      ]}
    ]
  },

  ankara: {
    war: "War between Tamerlane and the Ottomans (1400–1402)",
    hook: "The sultan who had besieged Constantinople for eight years was beaten by thirst, by a march in a circle and by the desertion of his own allies.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of the 14th century, there were two Turkish conquerors in full expansion. Bayezid I, called Yıldırım, the 'Thunderbolt', was the Ottoman [[sultan|sultão]]. He had defeated the crusaders at Nicopolis in 1396, and had kept Constantinople under siege since 1394. Tamerlane, coming from Central Asia, had already taken Persia, devastated southern Russia and sacked Delhi, in India, in 1398.",
        "The two empires gradually came into contact in Anatolia. Bayezid had annexed several Turkish [[beyliks|beiliques]] of the region, and the former rulers took refuge at Tamerlane's court. In return, Bayezid received at his court the sultan Ahmad Jalayir, an enemy of Tamerlane. The two exchanged letters full of insults: in one of them, Tamerlane called Bayezid an ant. In 1400 and 1401, Tamerlane conquered several beyliks that were Ottoman vassals and took Sivas, in eastern Anatolia, the first direct confrontation with the empire.",
        { h: "The road to Ankara" },
        { timeline: [
          ["1394", "Bayezid begins the siege of Constantinople."],
          ["1398", "Bayezid conquers beyliks in Anatolia, which breaks an agreement with Tamerlane."],
          ["1400–1401", "Tamerlane takes Sivas and conquers Ottoman and Mamluk lands."],
          ["1401–1402", "Tamerlane spends the winter in Karabakh. Bayezid lifts the siege of Constantinople and gathers his army."],
          ["Summer 1402", "Tamerlane makes a great circle across Anatolia and reaches Ankara before Bayezid."],
          ["20 or 28 July 1402", "The battle of Ankara."]
        ]},
        "Bayezid tried to force a battle earlier, between Karabakh and eastern Anatolia, but Tamerlane avoided him. When Tamerlane marched west, toward Sivas, Bayezid's advisers urged him to wait at Ankara, where there was good water, and let the enemy come to him. Bayezid refused and kept advancing east, in the full heat of July."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Bayezid I, about 55 years old" },
        "Born in 1347, he died in 1403, after being captured at Ankara. In 1402, he chose to face Tamerlane instead of waiting, and that choice was the mistake that cost him his empire.",
        { h: "Tamerlane, about 66 years old" },
        "He was already the lord of half of Asia. This time, he avoided confrontation until he had the best ground: he went around the Ottoman army and occupied their camp, with the water. He was a military man who reasoned about logistics as much as about combat.",
        { h: "The other names" },
        "On the Ottoman side, Süleyman Çelebi, Bayezid's son, commanded the left wing, with the best troops. Stefan Lazarević, a Serb, Bayezid's brother-in-law, commanded the right with the cavalry of the Balkans, alongside his brothers and other vassals. Mehmed Çelebi, another son of the sultan, kept the [[rear guard|retaguarda]]. On Tamerlane's side, Miran Shah (his son) was on the right, Shah Rukh (another son) on the left, and the grandsons in the vanguard."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The English Wikipedia, citing David Nicolle, gives Tamerlane about 140,000 men, mostly horsemen, and 32 [[war elephants|elefantes de guerra]]. For Bayezid, at most 85,000, according to Nicolle, or between 85,000 and 120,000, according to Creasy (1878). The Ottoman army had [[Janissaries|janízaros]], [[sipahis]] and troops from the Balkans, and about a quarter were Tatars and Turkmens conquered only recently.",
        { note: "These numbers vary widely. The German Johann Schiltberger, who fought alongside the Ottomans, spoke of more than a million for each side. The chronicler Ibn Arabshah spoke of 800,000 for Tamerlane. Modern historians do not accept these figures, and a summary on the History of War site states that neither side should have had more than 20,000 men." },
        { h: "The terrain and the water" },
        "The plain of Çubuk, near Ankara. The final fight was on the hill of Çatal, which overlooks the Çubuk valley. Tamerlane waited for Bayezid near the city, with the water. According to the English Wikipedia, he diverted the Çubuk stream into a reservoir out of the way and left the Ottomans without water; in the History of War summary, he fouled the only spring. Both versions agree that Bayezid arrived with his army exhausted and thirsty.",
        { h: "The march that decided the battle" },
        "Tamerlane turned southwest, following the Kızılırmak River. After six days of forced march, he reached Kayseri, rested four days, passed through Kırşehir and advanced northwest to the camp that Bayezid had left near Ankara. This put him between Bayezid and the heart of the empire. Bayezid had to turn back on a forced march, in the heat, and reached the city to find the enemy rested and with the water in hand.",
        { h: "The battle in six movements" },
        { formation: true },
        "First, the Ottomans attacked. The Timurid horse archers answered with arrows, and several thousand Ottomans were killed or surrendered.",
        "Second, Tamerlane launched quick attacks against the Ottoman flanks, starting with the left, Süleyman's side.",
        "Third, on the right, Stefan Lazarević and his Serbian horsemen counterattacked. According to the English Wikipedia, they broke through the enemy lines three times. A modern summary (EBSCO, based on Nicolle) says that the counterattack went too far and that the Serbs became disordered and fell back.",
        "Fourth, and decisive: Tatars and sipahis from the beyliks of Anatolia changed sides and went over to Tamerlane's army. One summary says this happened on both wings. Many of them had been lords of those territories or soldiers of former lords, and went to fight beside their old chiefs. The Ottoman infantry was left exposed.",
        "Fifth, most of the Ottoman army fled. Stefan reached Bayezid three times and begged him to flee with him. Bayezid refused. Stefan took Süleyman, the Serbian horsemen and the treasure off the field, and headed toward Bursa and then Constantinople. Tamerlane, according to Wikipedia, admired their courage.",
        "Sixth, Bayezid and the Janissaries were left alone and held out until nightfall. He tried to escape with a few hundred horsemen. The sources vary: according to the English Wikipedia, Tamerlane's horsemen surrounded the mountains and captured him; according to EBSCO, his horse stumbled; according to History of War, the horse was killed, and the last 300 men were overtaken."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The losses are uncertain. Wikipedia lists 15,000 to 40,000 (Tucker) and 40,000 to 50,000 (Nazeer Ahmed), without saying for which side.",
        "Bayezid was taken to Tamerlane's camp. According to Wikipedia, Tamerlane laughed on seeing him and Bayezid took offense; Tamerlane replied that fate gives power to the defective: to Bayezid, the one-eyed, and to himself, the lame. One of the sons, Mustafa (the sources confuse the name with Musa), was captured and taken to Samarkand. Tamerlane advanced across Anatolia to the Aegean Sea and took Smyrna, a fortress of the Knights Hospitaller, at the end of 1402.",
        "Bayezid died in captivity, on 8 March 1403, in Akşehir.",
        { h: "Why it matters" },
        "The Ottoman Empire nearly collapsed. Bayezid's sons fought over power for eleven years, the so-called [[Ottoman Interregnum|interregno otomano]], until Mehmed I reunified the empire in 1413. Constantinople gained some relief and would fall only in 1453, about half a century later. Stefan Lazarević was named [[despot|despota]] by the Byzantine Empire in August 1402. Tamerlane died in 1405, while preparing to invade China (History of War gives 1404).",
        { h: "Curiosities and controversies" },
        { note: "The date: the English Wikipedia gives 28 July as the most common, noting that some give 20 July. The Portuguese Wikipedia and the articles on Tamerlane and Bayezid I use 20 July. History of War and EBSCO use 28. I did not find an explanation for the difference." },
        { note: "The iron cage: the story that Tamerlane displayed Bayezid in a cage appears mostly in later European and Ottoman accounts. Witnesses such as Schiltberger, Clavijo and the Greek sources do not mention a cage. The writers of Tamerlane's court say he was well treated. Ibn Arabshah says he was 'shut up like a bird', which modern historians treat as style and not fact. The Ottoman version that Bayezid killed himself in prison is also debated." },
        { note: "The sources: Schiltberger was there, but his numbers are impossible. The fullest accounts come from Tamerlane's court and from later Ottoman chroniclers, with their own interests." }
      ]}
    ]
  },

  grunwald: {
    war: "Polish-Lithuanian-Teutonic War (1409–1411)",
    hook: "On a summer day in 1410, the Order of warrior monks lost its grand master and almost its whole leadership.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The [[Teutonic Order|ordem teutônica]] settled in the Chełmno region, in present-day Poland, in 1230. It conquered and converted the peoples of Prussia by the 1280s and then turned against Lithuania, which was still pagan, attacking its lands for about a century, especially Samogitia, between Lithuania and Prussia. Samogitia passed to the Order, by treaty, during the Lithuanian civil war of 1381–1384, and returned to the Order's hands by the Peace of Raciąż, in 1404.",
        "In 1385, everything changed. The Lithuanian grand duke Jogaila agreed to marry Queen Jadwiga of Poland, was baptized and crowned king of Poland as Władysław II Jagiełło. With the Union of Krewo, Poland and Lithuania came to have the same sovereign. His cousin, Vytautas, became grand duke of Lithuania and was second in command at Grunwald. The grand master of the time, Conrad Zöllner von Rothenstein, contested the sincerity of the king's conversion before a papal court.",
        { h: "The road to Grunwald" },
        { timeline: [
          ["May 1409", "Revolt in Samogitia, backed by Lithuania. Poland threatens to invade Prussia."],
          ["6 August 1409", "Grand Master Ulrich von Jungingen declares war. The Order invades Greater Poland and Kuyavia."],
          ["8 October 1409", "King Wenceslaus mediates a truce, valid until 24 June 1410."],
          ["December 1409", "Jagiełło and Vytautas agree to unite their armies and march on Marienburg, the Order's capital."],
          ["24 to 30 June 1410", "The army crosses the Vistula River at Czerwińsk, on a bridge of boats."],
          ["9 July", "It crosses the border of Prussia."],
          ["15 July 1410", "The battle."]
        ]},
        "The allies' plan was a surprise: the Order expected two separate attacks, a Polish one toward Danzig and a Lithuanian one toward Ragnit. Instead, the two armies joined up. When the Hungarian envoys warned the grand master, he left about 3,000 men at Schwetz, under Heinrich von Plauen, and took the bulk of the army to defend the Drewenz River. On 11 July, after consulting his council, Jagiełło bypassed the fortified crossing by marching east. The Order accused the Poles and Lithuanians of plundering the town of Gilgenburg, and some say that Ulrich swore revenge after that."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Jagiełło, king of Poland" },
        "He was the supreme commander, but did not fight in person. He was slow to send in his troops. His life was even saved by Zbigniew Oleśnicki when a knight of the Order, Lupold or Diepold of Kökeritz, attacked him.",
        { h: "Vytautas, grand duke of Lithuania" },
        "Jagiełło's cousin, he commanded the Lithuanians and also some Polish units. He helped design the campaign's strategy. After the battle, he had two knights of the Order executed, Marquard von Salzbach and Heinrich Schaumburg.",
        { h: "Ulrich von Jungingen, grand master" },
        "The head of the Order positioned the army first and waited for the enemy to attack. He stayed for hours in armor, under the sun. To force a decision, he sent the kings two swords, as a sign of provocation. He died on the field.",
        { h: "The other names" },
        "On the Order's side, Marshal Friedrich von Wallenrode commanded the elite of the heavy cavalry, and Grand Commander Kuno von Lichtenstein concentrated the Order's attacks on the Polish army. On the Polish side, the chronicler Długosz gives the command to Zyndram of Maszkowice, but Wikipedia considers this highly doubtful. It is more likely that Marshal Zbigniew of Brzezie commanded the Poles in the field. The Czechs of Jan Sokol of Lamberg fought for Poland, and Wikipedia says that Jan Žižka was perhaps among them, but points to this as uncertain. The Silesian duke Conrad VII the White of Oels fought for the Order."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Długosz gives the number of banners: 51 for the Order, 50 Polish and 40 Lithuanian. But he does not say how many men there were in each [[banner|bandeira]]. Modern estimates for the allies range from 16,000 to 39,000 men, and for the Order, from 11,000 to 27,000.",
        { note: "The numbers depend on who is writing. German historians, such as Delbrück and Heveker, estimate about 10,500 Poles and 6,000 Lithuanians against 11,000 of the Order. Stefan Kuczyński, a Polish historian, arrives at 39,000 against 27,000. Older works speak of 100,000 against 35,000 or even more. Wikipedia itself says that this has to do with politics and nationalism." },
        "On the allies' side, there were Poles, Lithuanians, Ruthenians, Czechs and Moravians, the Moldavians of Alexander I, Tatars of the Golden Horde and three banners from Smolensk. The Order had heavy cavalry, [[bombards|bombarda]] and guest crusaders from Westphalia, Frisia, Austria, Swabia and Bavaria, as well as Silesian mercenaries. Only part of the Order's army was made up of fully armored knights.",
        { h: "The terrain" },
        "The traditional field lies between the villages of Grunwald (Grünfelde), Stębark (Tannenberg) and Łodwigowo (Ludwigsdorf), in an area of about 4 square kilometers. Research by the historian Sven Ekdahl and excavations from 2014 to 2019 point to a site farther south of Grunwald, about 2 kilometers southwest of the monument. The two armies faced each other on a northeast-southwest axis, with the Poles to the east.",
        { h: "The day in eight movements" },
        { formation: true },
        "The Order formed up first and waited. On the allies' side, the Polish heavy cavalry was on the left, the Lithuanian light cavalry on the right and the mercenaries in the center, in three lines of wedges about 20 men deep. Facing the Lithuanians stood the Order's elite, under Wallenrode. One chronicle says that the Order dug pits. The Order's artillery fired only two shots, because the rain wet the gunpowder.",
        "While Jagiełło delayed, Ulrich sent messengers with two swords, which were supposed to 'help' the two commanders. It was an insult and a provocation. The swords became known as the 'Swords of Grunwald', a Polish national symbol.",
        "Vytautas, with the support of Polish banners, attacked the Order's left flank. After more than an hour of hard fighting, the Lithuanian light cavalry fell back in a general retreat.",
        "According to Długosz, the Order thought it had won, broke formation to pursue the Lithuanians and stopped to plunder. He describes the Lithuanian army as annihilated and the battle as a Polish victory, which contradicts the *Cronica conflictus*, the oldest account, written by a witness. Was it a real retreat or a [[feigned retreat|retirada fingida]]? The Pole Lastowski proposed in 1909 that it was a planned maneuver, copied from the Golden Horde. A German letter discovered by Ekdahl in 1963, which speaks of feigned retreats, gave the idea strength. Stephen Turnbull disagrees, because feigned retreats are usually carried out by one or two units and followed by a quick counterattack.",
        "Meanwhile, Kuno von Lichtenstein concentrated the Order on the right side of the Polish army. Six of Wallenrode's banners abandoned the pursuit and joined him. The royal standard of Kraków was lost by the standard-bearer Marcin of Wrocimowice and retaken. Jagiełło sent in his second line. Ulrich took 16 banners, almost a third of the Order, against the Polish right side. Jagiełło sent in the third line.",
        "The Lithuanians, having reorganized, came back and attacked from the rear. Ulrich tried to cut his way out and was killed. The *Cronica conflictus* says that Dobiesław of Oleśnica struck him with a lance; Długosz gives the name of Mszczuj of Skrzynno.",
        "Without a commander, the Order fell back. The camp attendants turned against the knights, and the circle of wagons was overrun. The *Cronica* says that more knights died in the camp than on the battlefield. According to the English Wikipedia, the battle lasted about ten hours."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Of the roughly 270 brothers of the Order present, between 203 and 211 died, according to Frost. Among the dead were Ulrich, Wallenrode, Lichtenstein, the treasurer, the supply marshal and ten commanders. Payment records show that 1,427 men returned to Marienburg. Of the 1,200 sent from Danzig, 300 returned. The allies captured several thousand, among them Conrad of Oels and Casimir V of Pomerania; most of the commoners were released with the obligation to report to Kraków on 11 November 1410. The mercenary Holbracht von Loym paid 150 kopas of Prague groschen for the [[ransom|resgate]], more than 30 kg of silver.",
        "On the winning side, Polish losses are described as small in the king's letters, and Długosz lists only 12 Polish knights killed. Early estimates of the dead on both sides range from 8,000 (a note from King Sigismund's envoys, which perhaps meant 8,000 on each side) up to 18,000 (a papal bull of 1412).",
        "The allies stayed three days on the field and reached Marienburg only on 26 July, which gave Heinrich von Plauen time to organize the defense. Many castles surrendered, but the siege failed and was lifted on 19 September, for lack of ammunition, low morale and dysentery. The Order retook most of the castles, and Jagiełło defeated it again at Koronowo, on 10 October 1410.",
        "In February 1411, the Peace of Thorn gave Poland the land of Dobrzyń and made the Order renounce Samogitia for as long as Jagiełło and Vytautas lived. The Order still owed an indemnity in silver, in four annual installments.",
        { h: "Why it matters" },
        "The Order never recovered its power. To pay the indemnity, it raised taxes, confiscated Church property and went into debt, and cities such as Danzig and Thorn rebelled. It had difficulty finding crusaders. In 1441 the Prussian Confederation appeared, and in 1454 the Thirteen Years' War began. There was also the Hunger War (1414) and the Gollub War (1422).",
        { h: "Curiosities and controversies" },
        { note: "The accusation of treason: the Order blamed Nicholas von Renys (Mikołaj of Ryńsk), commander of the Culm banner, who supposedly lowered his standard to signal surrender. He was beheaded without trial. He was a leader of the Lizard Union, a group of knights sympathetic to Poland. The legend of the 'stab in the back' marked German historiography until 1945." },
        { note: "The names: the Germans call the battle Tannenberg, the Poles, Grunwald, and the Lithuanians, Žalgiris. The poet Maironis popularized the Lithuanian name in 1891." },
        { note: "Nationalism: the battle was used by romantic nationalism, by Nazi propaganda and by Soviet propaganda. Only in recent decades has it been studied more coolly. Even the traditional field has been questioned, and the recent excavations have been criticized for irregular publication and lack of resources." },
        { note: "The sources: the *Cronica conflictus* (written within a year by a witness, author uncertain), Długosz (decades later, accused of bias against the Lithuanians), Jagiełło's letters, the chronicle of Johann von Posilge and the manuscript *Banderia Prutenorum*, with the captured standards." }
      ]}
    ]
  },

  azincourt: {
    war: "Hundred Years' War, Henry V's campaign (1415)",
    hook: "In less than three hours of mud and arrows, the flower of the French nobility lay strewn across the same narrow field.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The Hundred Years' War was a dispute over the throne of France between the kings of England and the Valois. In 1415, France was divided. King Charles VI suffered episodes of madness, and the nobility had split between the [[Armagnacs|armagnacs]] and the [[Burgundians|borgonheses]], who fought each other in a civil war until the peace of Arras, in August 1414. Henry V, king of England since 1413, took advantage of this.",
        "He claimed the French throne as a descendant of Edward III. Negotiations failed, and the Great Council approved war on 19 April 1415. The fleet set out on 11–12 August, and the army, about 12,000 men and up to 20,000 horses, besieged Harfleur. The siege took longer than expected, and the city surrendered only on 22 September.",
        { h: "The road to Agincourt" },
        { timeline: [
          ["13 or 14 August 1415", "The English land near Harfleur."],
          ["22 September", "Harfleur surrenders, after a long siege. Dysentery is already weakening the army."],
          ["8 October", "Henry sets out for Calais with about 9,000 men, against the advice of the council."],
          ["19 October", "With the French blocking the Somme, Henry goes down the river until he finds a ford and crosses at Béthencourt and Voyennes. Then he resumes the road north."],
          ["24 October", "The two armies meet near Agincourt. The French refuse battle and wait for reinforcements."],
          ["25 October", "The battle."]
        ]},
        "The French shadowed the English army, called up the local nobles through the *semonce des nobles* and closed the road to Calais. Henry needed a quick decision: the army was short of food and sick, and every day standing still weakened it further. The French preferred to wait for troops from Brabant, Anjou and Brittany."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Henry V, 28 years old" },
        "Born on 16 September 1386, he had ruled since the age of 26 and already knew war. At Agincourt, he did not stay in the rear: he fought in person, and during the combat he stood over his wounded brother, Humphrey, Duke of Gloucester. He took an axe blow to his helmet. At the end of the day, he ordered most of the French prisoners killed, which is the most debated point of the battle.",
        { h: "Charles d'Albret, constable of France" },
        "As [[constable|condestável]], he commanded the French army. King Charles VI did not take part. Albret died on the field, and Barker says he drowned in the mud in his helmet. Boucicaut commanded the [[vanguard|vanguarda]] and was captured. The dukes of Alençon and Bar, who commanded the main body, and the Duke of Brabant, who arrived late, died. The dukes of Orléans and Bourbon were captured.",
        { h: "The other names" },
        "On the English side, the Duke of York commanded the right wing and died, and Thomas Camoys the left. Sir Thomas Erpingham commanded the archers. The Earl of Suffolk also died. On the French side, Clignet de Bréban and Louis de Bosredon led the flank cavalry, and Ysembart d'Azincourt attacked the English baggage."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The English were about 6,000, almost all archers, with [[longbows|arco longo]], and some 900 to 1,000 [[men-at-arms|homem de armas]] on foot, according to Barker, Sumption and Rogers, based on the *Gesta Henrici Quinti* and Jean Le Fèvre. Anne Curry gives 9,000 and Ian Mortimer, 8,000 to 9,000, and both question the *Gesta*. On the French side, some 10,000 men-at-arms, plus 4,000 to 5,000 men on foot. Curry gives 12,000, Mortimer 14,000 to 15,000 and Rogers up to 24,000, counting mounted valets. Barker thinks the English were outnumbered by at least 4 to 1.",
        { note: "The numbers are disputed. The Portuguese Wikipedia cites up to 36,000 French, but considers this unlikely. Curry relies on administrative records, and this method is criticized by Barker, Sumption and Rogers. The *Gesta* is a text favorable to Henry and may be propaganda." },
        { h: "The terrain" },
        "A narrow, plowed field, surrounded by woods, probably near the wood of Tramecourt. The exact site is debated: Livingston (2019) argues for a spot west of Agincourt. It rained hard the night before, and the ground turned into deep mud, which wore out those in plate armor.",
        { h: "The battle in six moments" },
        { formation: true },
        "The English stood in a line of about 690 meters (750 yards): the Duke of York on the right, the king in the center and Camoys on the left. The men-at-arms stood in four ranks in the center, and at the ends were the archers, who drove wooden [[stakes|estacas de arqueiro]] pointed forward. The French divided into three 'battles'. The vanguard had about 4,800 men-at-arms, and the main body, 3,000 under Alençon and Bar, each with about 16 ranks. On each wing there were 600 dismounted men. A mounted force of 800 to 1,200 horsemen was to scatter the archers, and about 200 were to attack the English rear. The rear guard was made up of mounted valets and was left without a commander. The archers and crossbowmen, who were supposed to be in front, stayed behind.",
        "First, for some three hours, no one attacked. The French were waiting for reinforcements. Henry, short of food and with a sick army, decided to advance. The archers pulled up the stakes and drove them in again at the new position.",
        "Second, the English archers opened fire from afar, at about 300 yards. Only then did the French cavalry attack, small and disorganized, because part of the horsemen had moved away. The stakes and the woods closed the flanks. The arrows struck the horses in the flanks and the back, and the wounded ones fled back over the advancing infantry.",
        "Third, the French men-at-arms advanced through the mud, visors down and breathing hard, under the arrows. The English archers shot from close range until the arrows ran out.",
        "Fourth, and decisive: in the melee, English archers and men-at-arms attacked the exhausted and crowded French with axes, swords and mauls. The second French line came in, but the narrow ground limited its advance. Many were pinned and some died of suffocation in the pile of men.",
        "Fifth, Ysembart d'Azincourt attacked the English baggage with a small group of men-at-arms, servants and about 600 peasants. He took treasures, among them a crown. The moment is debated: Barker, following the *Gesta*, places it at the start; other accounts, at the end, and say the English feared an attack from behind.",
        "Sixth, Henry, fearing that the French would regroup, ordered most of the prisoners killed, sparing only those of the highest rank, for ransom. Keegan thinks the order was meant to terrorize and that relatively few were killed before the French reserve fled and the order was revoked. He estimates that about 200 archers carried it out. The knights refused, considering it dishonorable and because they would lose the [[ransom|resgate]]."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The French lost about 6,000 men, almost all nobles: three dukes, nine counts, the Archbishop of Sens and the constable. The heralds counted 3,069 knights and [[squires|escudeiro]] dead. Between 700 and 2,200 were captured. On the English side, the records identify at least 112 dead. Monstrelet gives 600 and Jean de Wavrin, 1,600. Among the dead were the Duke of York, the Earl of Suffolk and Dafydd Gam.",
        "Henry reached Calais and returned to England on 16 November, and entered London on 23 November. The Burgundians took advantage of the Armagnacs' loss and marched on Paris within ten days, which broke the fragile truce between the factions. This gave Henry about 18 months to prepare the next campaign.",
        { h: "Why it matters" },
        "The victory strengthened the Lancastrian monarchy. On 21 May 1420, the Treaty of Troyes recognized Henry as regent and heir of France and gave him Catherine of Valois in marriage. But Henry died on 31 August 1422, aged 35, probably of dysentery, and Charles VI died on 21 October of the same year. The war ended only in 1453. The episode became legend because of Shakespeare's play *Henry V*.",
        { h: "Curiosities and controversies" },
        { note: "The prisoners: no chronicler of the time criticized Henry for the order. The *Gesta* justifies it with the fear of an attack from the French rear. The Burgundian sources say the English men-at-arms were reluctant because of lost ransoms." },
        { note: "The two fingers: Burgundian sources say that the French swore to cut off two fingers of the archers' right hands. It is debatable whether this is true, and it appears only in those sources. The Portuguese Wikipedia says that the legend linking the gesture of showing the finger to Agincourt is not reliable." },
        { note: "The numbers: Barker argues for an English disadvantage of at least 4 to 1, while Curry and Mortimer work with armies closer in size." }
      ]}
    ]
  },

  orleans: {
    war: "Hundred Years' War, Loire campaign (1428–1429)",
    hook: "A peasant girl of about 17 arrived at a city that had been under siege for six months, and nine days later the siege was over.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Agincourt, in 1415, the English occupied a good part of northern France. In 1420, the Treaty of Troyes made Henry V regent and heir of France and disinherited the [[dauphin|delfim]] Charles, son of Charles VI. France was divided: the north and west were controlled by the English and the [[Burgundians|borgonheses]], and the south remained loyal to the dauphin. Henry V died in 1422, and Charles VI shortly after. The English regent became the Duke of Bedford.",
        "Orléans was the largest city loyal to the dauphin north of the Loire. It had symbolic value: it was the capital of the duchy of Orléans, of the [[Armagnac|armagnacs]] faction that opposed the Treaty of Troyes, and its duke, Charles, had been a prisoner of the English since Agincourt. Whoever took Orléans would open the way to the south.",
        { h: "The road to Orléans" },
        { timeline: [
          ["July 1428", "The Earl of Salisbury arrives in France with 2,700 reinforcements. Bedford, who had planned to attack the west, changes his mind and chooses Orléans."],
          ["7 October 1428", "Salisbury crosses the Loire at Meung and Beaugency and reaches Olivet. English detachments take Jargeau and Châteauneuf-sur-Loire."],
          ["12 October 1428", "The siege officially begins."],
          ["24 October", "The English take the Tourelles, the fort at the south end of the bridge."],
          ["12 February 1429", "Battle of the Herrings, at Rouvray: the English supply column holds out against the Franco-Scottish attack."],
          ["17 April 1429", "The Burgundians withdraw their men from the siege."],
          ["29 April 1429", "Joan of Arc enters Orléans."],
          ["8 May 1429", "The English lift the siege."]
        ]},
        "The decision to besiege Orléans was taken, according to Wikipedia, without much clarity: Bedford wrote later that he had taken the initiative on advice that God would know how to explain, and the idea was probably Salisbury's own. Bombardments began on 17 October. On 21 October, the English attacked the [[bulwark|baluarte]], which protected the bridge, and were repelled. On the 23rd and 24th, the French fell back to the Tourelles, and the English took them. The French destroyed arches of the bridge in the retreat.",
        "Salisbury was hit by splinters from cannon fire around 26 October, while supervising the placing of the guns, and died about a week later. In mid-November, the Earl of Suffolk took command and built a belt of [[bastilles|bastilha]]: seven on the north bank and four on the south. A Burgundian reinforcement of about 1,500 men arrived in winter. In February, Dunois and the Count of Clermont tried to intercept an English supply convoy, commanded by John Fastolf. The English formed a [[wagon circle|círculo de carroças]], and the Scots of John Stewart of Darnley advanced too early. The English cavalry counterattacked, Darnley died, Dunois was wounded and Clermont withdrew."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Joan of Arc, about 17 years old" },
        "She was born around 1412 in Domrémy, into a peasant family with land. The exact date is unknown. She said she heard voices of saints who told her to save France. She left Vaucouleurs on 23 February 1429, reached Chinon on 6 March and was accepted by the dauphin on 22 March. She was not a commander, but her presence and her standard changed the soldiers' mood.",
        { h: "Jean de Dunois, the Bastard of Orléans" },
        "Half-brother of the imprisoned duke, he was the one who organized the city's defense. He was wounded at Rouvray. In March, he proposed handing Orléans over to the Duke of Burgundy, as neutral territory, in the name of the imprisoned duke. Bedford refused, and the Burgundians left the siege in April, which Wikipedia calls a costly mistake for the English.",
        { h: "The English side" },
        "Salisbury was the one who had the idea of the siege. After his death, the Earl of Suffolk took over and stayed with the men around the city. John Talbot, better known for the later battles, also commanded troops. William Glasdale defended the Tourelles and died in the fall of the drawbridge.",
        { h: "Other names" },
        "La Hire, a French captain, was left in command of Orléans when Dunois went out to fetch reinforcements, on 1 May. He was the one who attacked the bulwark too early on 6 May. The captains did not always consult her: they took the southern road without telling her and later persuaded her to wait."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Wikipedia estimates the English at between 3,263 and 3,800 men, plus about 1,500 Burgundians, which gives around 5,300. For the French, it gives 6,400 soldiers and more than 3,000 armed citizens. However, the body of the text says that the garrison was too small to act on its own, in Dunois's view. The figures in the infobox and in the text do not fit together well.",
        { note: "The losses also vary: the Wikipedia infobox gives more than 4,000 dead for the English and Burgundians and 2,000 for the French, but these totals have no source of their own. The firmest numbers are those of 7 May: about 1,000 English dead and 600 prisoners." },
        { h: "The terrain" },
        "The city lies on the north bank of the Loire, with a bridge to the south bank, protected by a [[bulwark|baluarte]] and by the Tourelles, a double fort at the end of the bridge. Around it, the English had their belt of bastilles.",
        { h: "Nine days" },
        "Joan and her convoy left Blois on 27–28 April. The captains took the southern road, through the Sologne, without telling her, and Dunois met the group at Rully. She entered Orléans around 8 in the evening of 29 April, by boat, at the port of Saint-Loup.",
        "On 4 May, Dunois's convoy arrived from the north, and the French attacked the bastille of Saint-Loup, to the east, with about 1,500 men against some 400 defenders. Joan appeared with the standard and cheered on the attackers. Saint-Loup fell, with about 140 English killed and 40 captured.",
        "On 5 May, Ascension Thursday, there was no fighting. Joan dictated a letter to the English ordering them to leave France. According to Pasquerel's testimony, the pause was her idea; according to the captains' version, they persuaded her to wait.",
        "On 6 May, the French crossed the river. The English had abandoned Saint-Jean-le-Blanc. La Hire attacked the bulwark too early, and his men fell back fearing an English reinforcement, until Joan rallied them. The French took the monastery of the Augustins, and Joan was wounded in the foot by an iron caltrop. That night, the English garrison of Saint-Privé withdrew.",
        "On 7 May, the attack on the Tourelles. Joan was hit by an arrow between the neck and the shoulder while holding the standard in the trench. She returned to cheer on the final assault. The French took the bulwark and then the Tourelles. The drawbridge fell, and Glasdale fell into the river and died. The English lost about 1,000 dead and 600 prisoners. About 200 French were freed.",
        "On 8 May, Suffolk and Talbot came out of their bastilles to the north and formed a line near Saint-Laurent. Neither side attacked. Joan is said to have forbidden an attack because it was Sunday. The English withdrew.",
        { note: "The sources differ on when Joan was wounded. Cousinot places it in a morning assault, before the final attack. The version of Pasquerel and Quicherat places it during the fighting of the afternoon of the 7th. The story that she foretold the defeat at Rouvray, which led Baudricourt to escort her, is not accepted by all historians." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The siege was lifted nine days after Joan arrived. The English still controlled the surrounding towns and could have resumed the siege, but Suffolk's priority was to save the army.",
        "In the Loire campaign, Joan and the French took Jargeau (12 June), Meung (15 June) and Beaugency (17 June). At Patay, on 18 June, Talbot was defeated and captured, and Suffolk was also taken prisoner in the campaign. On 17 July 1429, Charles was crowned Charles VII at Reims.",
        "Joan's fortunes changed. She failed to take Paris, in September 1429, and was captured by Burgundian troops at Compiègne, on 23 May 1430. The Burgundians sold her to the English, and a court presided over by Bishop Pierre Cauchon tried her for heresy at Rouen. She was burned at the stake on 30 May 1431, at about 19 years old. A court of the Inquisition annulled the sentence in 1456. She was beatified in 1909 and canonized on 16 May 1920.",
        { h: "Why it matters" },
        "Orléans was the psychological turning point of the war. The English never again besieged a major French city. France continued to advance: Formigny, in April 1450, destroyed English power in Normandy, and at Castillon, in 1453, John Talbot died and the last English field army was finished. Bordeaux surrendered on 19 October 1453, and England was left with only Calais. To this day the city celebrates the end of the siege every year on 8 May.",
        { h: "Curiosities and controversies" },
        { note: "The sources: the siege is narrated mainly by Ramsay (1892), by Cousinot's *Chronique de la Pucelle* and by the testimonies from Joan's trials, collected by Quicherat." }
      ]}
    ]
  },

  tumu: {
    war: "Oirat invasion of Ming China (1449)",
    hook: "A 21-year-old emperor went off to war at the head of an enormous army (estimates reach 500,000 men) and came back a prisoner.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1449, the [[Ming]] dynasty had ruled China for 81 years. After the death of the Yongle emperor, in 1424, the northern defenses gradually fell apart. Many soldiers of the border garrisons became farm laborers for their officers, and the soldiers of Beijing were used on building works. The defense line was formed by Xuanfu, Datong and Beijing, and Xuanfu was only 180 km from the capital, which left little room to retreat.",
        "On the other side, the steppe had three Mongol groups: the Uriankhai, the Eastern Mongols and the [[Oirats|oirates]], in the west. Esen inherited the title of [[taishi]] from his father, Toghon, and gradually became the chief of all of them. He attacked Hami in 1443 and 1445 and conquered it in 1448. In 1447, he had subdued the Uriankhai.",
        { h: "The road to Tumu" },
        { timeline: [
          ["1448", "An Oirat trade mission exaggerates its size to gain more gifts. The Ming find out and give only a fifth of what was asked."],
          ["July 1449", "Esen invades China on three fronts."],
          ["3 August", "The Ming lose at Yanghe, near Datong. Two commanders die."],
          ["4 August", "The emperor leaves Beijing to command the army in person."],
          ["16 to 18 August", "The army passes through the field of Yanghe, full of corpses, and reaches Datong."],
          ["20 August", "It turns back."],
          ["31 August", "The army camps at Tumu."],
          ["1 September 1449", "The battle."]
        ]},
        "The immediate cause was commercial. The Mongols wanted to trade horses for tea, silk and other goods, and the Ming limited trade to a few border towns, mainly Datong. The size of the missions, which reached more than 2,000 men, weighed on Chinese finances. Interpreters are said to have promised Esen the marriage of his son to an imperial princess, and the court refused, which some sources consider the final spark."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "The Yingzong (Zhengtong) emperor, 21 years old" },
        "Born on 29 November 1427, he came to the throne on 7 February 1435, at 7 or 8 years old. In 1449, he decided to lead the campaign in person, without consulting his ministers, who protested.",
        { h: "Wang Zhen, the eunuch" },
        "He was an educated [[eunuch|eunuco]] who had been tutor to the crown prince and joined the group of regents in 1435, when the emperor was a boy. After the death of the grand empress dowager Zhang, in 1442, he removed the old secretaries from the government and came to control it in the mid-1440s. Wikipedia says he profited from illegal trade, including selling metal tools and weapons to the Oirats. He was the one who advised the emperor to go to war, and he was in practice the commander.",
        { h: "Esen, chief of the Oirats" },
        "He was the de facto ruler of the Mongols. At Tumu, he was not personally in the fight, according to de Heer. Afterward, he held a prisoner of enormous value, whom he did not kill: he informed the Ming court that he was alive.",
        { h: "The other names" },
        "The Minister of War, Kuang Ye, and his deputy Yu Qian protested against the expedition, as did the Minister of Personnel, Wang Zhi. The old general Zhang Fu and the grand secretaries Cao Nai and Zhang Yi were taken along with the emperor and died at Tumu. The Prince of Cheng, Zhu Qiyu, the emperor's brother, stayed behind governing Beijing."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The size of the Ming army is unknown. People usually speak of about 500,000, but Wikipedia notes that the real number may have been much smaller. The Mongols had around 20,000 men in combat, according to de Heer.",
        { note: "The figure of 500,000 comes from estimates, not from counts. Other summaries speak of 220,000. What can be said with more confidence is that the Ming army was much larger than the Oirat one, but was poorly fed and poorly commanded." },
        { h: "The march and the return" },
        "The army left Beijing in haste: the preparation lasted from 1 to 4 August. It reached Xuanfu around 11 August, after seven days of rain. Wang Zhen refused to turn back, despite requests. On 18 August, the emperor reached Datong, where hunger had already killed more soldiers than combat. Wang Zhen judged it dangerous to enter the steppe and ordered a return, on 20 August. He changed the route back more than once, and Wikipedia links this to a wish to spare his hometown, Yuzhou. The army reached Xuanfu on 27 August.",
        "On 30 August, the Mongols attacked the rear guard at Xuanfu and destroyed it. Then they ambushed a new rear guard, of cavalry, under Zhu Yong, in the Yao'er gorge. Its size is given as 30,000, 40,000 or 50,000, depending on the source.",
        { h: "The day of 1 September" },
        "On 31 August, the army camped at the Tumu post, without water. The officers suggested shelter in the walled town of Huailai, about 10 km away (10.5 km, according to Wikipedia). Wang Zhen refused, largely so as not to leave the baggage behind. Esen's cavalry blocked access to the river, to the south, and surrounded the camp.",
        "On the morning of 1 September, after two days without water, the Ming plan to break through to Huailai failed. The Mongols offered to negotiate. The emperor even drafted a peace proposal, but Wang Zhen ignored it and, without authorization, ordered the army to advance to the river. It was chaos. The Mongols launched the full attack. Wikipedia says that Esen used deceptive tactics to lure the Ming into an ambush.",
        "Nearly half of the Ming army was lost, and much equipment was captured. Two dukes, two marquises, five counts, several generals and hundreds of officials died. Wang Zhen died in the middle of the chaos. Some accounts say that one of his officers killed him, but the historians Twitchett and Grimm state this only with caution, 'according to some accounts'. The emperor's guard tried to get him out and failed, and most of his attendants were shot down with arrows. He was captured, taken to Leijiazhuang on 2 September and handed over to Esen's camp, near Xuanfu, on 3 September."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The news reached the empress dowager Sun and the empress Qian on the night of 2 to 3 September. Beijing fell into panic, with fewer than 100,000 garrison soldiers. Xu Cheng proposed moving the capital south. Yu Qian opposed this forcefully and, according to Wikipedia, threatened to execute anyone who repeated the idea.",
        "Datong and Xuanfu refused to open their gates to the captive emperor. Liu An gave the emperor 140,000 liang of silver, which he distributed to the Mongol chiefs. On 4 September, the Prince of Cheng took over the government, and on 6 September the emperor's two-year-old son was declared heir. On 7 September, Yu Qian was named Minister of War and brought troops and grain. On 17 September (Wikipedia also gives 23), the prince became the Jingtai emperor, and his captive brother received the title of retired emperor.",
        "Esen marched on Beijing and arrived on 27 October, with about 70,000 men, against Yu Qian's 220,000, according to Wikipedia. After a few days of fighting (three to five, depending on the source), the Mongols withdrew.",
        "Yingzong was released in September 1450, after about a year of captivity. The Oirats treated him well. He arrived in Beijing on 19 September 1450 and was confined in the Southern Palace for about six and a half years. On 11 February 1457, a palace coup restored him to the throne, under the name Tianshun. Jingtai died a month later. Yingzong died on 23 February 1464.",
        { h: "Why it matters" },
        "The Ming dynasty lost an army and an emperor, but kept its fortified cities, and the Mongols did not occupy territory. They wanted trade, and relations returned to what they had been within a few months. The crisis led to a major reorganization of Ming power and of the army, which helped give the dynasty stability for the rest of the 15th century. Esen proclaimed himself great khan in 1453 and was overthrown and killed in 1454 or 1455.",
        { h: "Curiosities and controversies" },
        { note: "The death of Wang Zhen: the sources do not say who killed him. The version that it was an officer of his own army, and not the Mongols, is only 'according to some accounts'." },
        { note: "The numbers: the 'half a million' Ming soldiers is an old estimate. Some summaries give 220,000, and Wikipedia notes that it may have been far fewer. The distance to Huailai also varies: Wikipedia gives 10.5 km, but a summary on the internet speaks of 45 km." },
        { note: "The age: born in November 1427, the emperor was 21 in September 1449; some works give 22." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  azincourt: {
    terrain: [
      { t: "note", x: 8, y: 36, l: "Woods" },
      { t: "note", x: 92, y: 36, l: "Tramecourt Wood" },
      { t: "note", x: 50, y: 33, l: "Plowed field, soaked by the rain" }
    ],
    units: [
      { id: "eL", s: "a", k: "inf", w: 16, h: 4, l: "Camoys" },
      { id: "eC", s: "a", k: "inf", w: 20, h: 4, l: "Henry V" },
      { id: "eR", s: "a", k: "inf", w: 16, h: 4, l: "Duke of York" },
      { id: "arL", s: "a", k: "inf", w: 10, h: 6, l: "Archers" },
      { id: "arR", s: "a", k: "inf", w: 10, h: 6, l: "Archers" },
      { id: "eBag", s: "a", k: "camp", w: 10, h: 4, l: "Baggage" },
      { id: "fDL", s: "b", k: "inf", w: 10, h: 4, l: "600 on foot" },
      { id: "fV", s: "b", k: "inf", w: 22, h: 6, l: "Vanguard, 4,800" },
      { id: "fDR", s: "b", k: "inf", w: 10, h: 4, l: "600 on foot" },
      { id: "fCL", s: "b", k: "cav", w: 12, h: 4, l: "Clignet de Bréban" },
      { id: "fCR", s: "b", k: "cav", w: 12, h: 4, l: "Bosredon" },
      { id: "fM", s: "b", k: "inf", w: 24, h: 5, l: "Alençon and Bar, 3,000" },
      { id: "fAr", s: "b", k: "inf", w: 14, h: 3, l: "Archers and crossbowmen" },
      { id: "fRg", s: "b", k: "cav", w: 24, h: 4, l: "Rear guard, no commander" },
      { id: "fYs", s: "b", k: "inf", w: 8, h: 3, l: "Ysembart d'Azincourt" }
    ],
    steps: [
      { t: "25 October 1415. The English wait in a line of about 690 meters: York on the right, the king in the center, Camoys on the left, with the archers at the ends and stakes in front. The French are in three battles, with cavalry on the flanks of the vanguard, and the archers and crossbowmen were left behind, instead of in front. For some three hours, no one attacks.",
        p: { eL: [28, 16], eC: [50, 16], eR: [72, 16], arL: [14, 17], arR: [86, 17], eBag: [50, 6],
             fDL: [30, 49], fV: [50, 48], fDR: [70, 49], fCL: [14, 44], fCR: [86, 44],
             fM: [50, 55], fAr: [50, 61], fRg: [50, 66], fYs: [93, 30] } },
      { t: "Tired and short of food, Henry advances with the army. The archers pull up the stakes and drive them in again farther forward.",
        p: { eL: [28, 26], eC: [50, 26], eR: [72, 26], arL: [14, 27], arR: [86, 27] } },
      { t: "The English archers shoot from afar. Only after that does the French cavalry attack, small and disorganized, because part of the horsemen had moved away. The stakes and the woods close the flanks.",
        p: { fCL: [18, 36], fCR: [82, 36] } },
      { t: "The arrows strike the horses in the flanks and the back. The wounded ones turn around and run over the advancing French infantry.",
        p: { fCL: [24, 46], fCR: [76, 46], fDL: [30, 40], fV: [50, 40], fDR: [70, 40], fM: [50, 47], fAr: [50, 53], fRg: [50, 60] }, x: ["fCL", "fCR"] },
      { t: "The French men-at-arms cross the mud with visors down, breathing badly, under arrows shot from close range. The English archers shoot until the arrows run out.",
        p: { fDL: [32, 33], fV: [50, 33], fDR: [68, 33], fM: [50, 41] } },
      { t: "The archers drop their bows and attack the French from the sides, with axes, swords and mauls. The narrow ground crowds the French together, and many die of suffocation in the pile. Henry fights in person and protects his wounded brother Humphrey.",
        p: { arL: [30, 30, 50], arR: [70, 30, -50], eC: [50, 28], fV: [50, 34] }, x: ["fV", "fDL", "fDR"] },
      { t: "The second French line enters the fight, but the field is too narrow to advance. At the same time, Ysembart d'Azincourt attacks the English baggage with a small group and some 600 peasants. The exact moment is debated.",
        p: { fM: [50, 36], fYs: [56, 8], eBag: [50, 6] } },
      { t: "Fearing that the French will regroup, Henry orders most of the prisoners killed. The French rear guard does not attack and leaves the field, and the fighting ends.",
        p: { fRg: [50, 68], fAr: [50, 58] }, x: ["fM", "fAr", "fRg", "fYs"] }
    ]
  },

  grunwald: {
    terrain: [
      { t: "note", x: 14, y: 4, l: "Tannenberg (Stębark)" },
      { t: "note", x: 86, y: 4, l: "Grunwald (Grünfelde)" },
      { t: "note", x: 50, y: 4, l: "Ludwigsdorf" }
    ],
    units: [
      { id: "pL", s: "a", k: "cav", w: 20, h: 5, l: "Polish cavalry" },
      { id: "pC", s: "a", k: "inf", w: 14, h: 5, l: "Mercenaries" },
      { id: "lit", s: "a", k: "cav", w: 20, h: 5, l: "Vytautas's Lithuanians" },
      { id: "pS", s: "a", k: "cav", w: 20, h: 4, l: "Second line" },
      { id: "pT", s: "a", k: "cav", w: 20, h: 4, l: "Third line" },
      { id: "tR", s: "b", k: "cav", w: 20, h: 5, l: "The Order's right wing" },
      { id: "tC", s: "b", k: "cav", w: 14, h: 5, l: "Center" },
      { id: "tL", s: "b", k: "cav", w: 20, h: 5, l: "Wallenrode, left wing" },
      { id: "tU", s: "b", k: "cav", w: 20, h: 4, l: "Ulrich, 16 banners" },
      { id: "tCamp", s: "b", k: "camp", w: 24, h: 4, l: "Camp and wagons" }
    ],
    steps: [
      { t: "15 July 1410. The Order formed up first and waits, under the sun. The allies line up: Poles on the left, mercenaries in the center, Lithuanians on the right, in three lines. Ulrich sent two swords to the kings, as a provocation to attack.",
        p: { pL: [28, 52], pC: [50, 52], lit: [72, 52], pS: [28, 60], pT: [50, 64],
             tR: [28, 30], tC: [50, 30], tL: [72, 30], tU: [50, 22], tCamp: [50, 8] } },
      { t: "Vytautas, with the support of Polish banners, attacks the Order's left flank, where Wallenrode's elite stands.",
        p: { lit: [74, 38] } },
      { t: "After more than an hour of hard fighting, the Lithuanian light cavalry falls back in a general retreat. Whether it was a planned maneuver or a real flight is debated.",
        p: { lit: [88, 54] } },
      { t: "According to Długosz, the Order thinks it has won, breaks formation and pursues the Lithuanians, stopping to plunder.",
        p: { tL: [86, 46] } },
      { t: "Kuno von Lichtenstein concentrates the Order against the Polish right side. The royal standard of Kraków is lost and retaken. Jagiełło sends the second line.",
        p: { tC: [44, 36], tR: [30, 38], pL: [28, 45], pS: [38, 45] } },
      { t: "Ulrich takes 16 banners, almost a third of the Order, against the Polish side. Jagiełło sends the third line. The knight Kökeritz attacks the king, who is saved by Zbigniew Oleśnicki.",
        p: { tU: [46, 40], pT: [48, 48] } },
      { t: "The Lithuanians reorganize and come back, attacking from the rear. Ulrich tries to cut his way out and is killed.",
        p: { lit: [72, 24], tL: [78, 36] }, x: ["tU"] },
      { t: "Without a commander, the Order falls back. The camp and the wagons are overrun, and, according to the Cronica conflictus, more knights die in the camp than on the field.",
        p: { lit: [60, 10], tCamp: [50, 8] }, x: ["tR", "tC", "tL", "tCamp"] }
    ]
  },

  ankara: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 6, l: "Ankara and the Çubuk stream (the water)" },
      { t: "hill", x: 82, y: 62, rx: 14, ry: 6, l: "Çatal Hill" },
      { t: "note", x: 50, y: 69, l: "Schematic, not to scale" }
    ],
    units: [
      { id: "tR", s: "a", k: "cav", w: 14, h: 5, l: "Miran Shah" },
      { id: "tC", s: "a", k: "cav", w: 16, h: 5, l: "Tamerlane" },
      { id: "tL", s: "a", k: "cav", w: 14, h: 5, l: "Shah Rukh" },
      { id: "tE", s: "a", k: "ele", w: 12, h: 5, l: "Elephants" },
      { id: "tV", s: "a", k: "cav", w: 18, h: 4, l: "Tamerlane's grandsons" },
      { id: "oT", s: "b", k: "cav", w: 10, h: 5, l: "Tatars and sipahis" },
      { id: "oL", s: "b", k: "cav", w: 14, h: 5, l: "Süleyman" },
      { id: "oC", s: "b", k: "inf", w: 16, h: 5, l: "Bayezid and Janissaries" },
      { id: "oR", s: "b", k: "cav", w: 14, h: 5, l: "Stefan and Serbs" },
      { id: "oRg", s: "b", k: "cav", w: 14, h: 4, l: "Mehmed, rear guard" }
    ],
    steps: [
      { t: "July 1402. Tamerlane went around the Ottoman army and occupied Ankara and the water. Bayezid returns on a forced march, in the heat, and arrives tired and thirsty. Tamerlane is in the center, with Miran Shah on the right, Shah Rukh on the left, the grandsons in the vanguard and the elephants. Bayezid is in the center with the Janissaries, Süleyman on the left, Stefan Lazarević and the Serbs on the right, and Mehmed in the rear guard.",
        p: { tR: [22, 14], tC: [50, 14], tL: [78, 14], tE: [50, 20], tV: [50, 26],
             oT: [8, 54], oL: [28, 54], oC: [52, 54], oR: [76, 54], oRg: [50, 63] } },
      { t: "The Ottomans attack. The Timurid horse archers answer with arrows, and several thousand Ottomans are killed or surrender.",
        p: { oL: [28, 44], oC: [52, 44], oR: [76, 44], oT: [8, 44], tV: [50, 30] } },
      { t: "Tamerlane launches quick attacks on the Ottoman flanks, starting with the left, Süleyman's side.",
        p: { tR: [22, 30], tC: [50, 32] } },
      { t: "On the right, Stefan Lazarević and his Serbian horsemen counterattack and break through the enemy lines. According to one source, they advance too far, lose order and fall back.",
        p: { oR: [78, 32], tL: [78, 22] } },
      { t: "Tatars and sipahis from the beyliks of Anatolia go over to Tamerlane's side. The Ottoman infantry is left exposed.",
        p: { oT: [10, 20] } },
      { t: "Most of the Ottoman army flees. Stefan reaches Bayezid and begs him to flee with him, but he refuses. Stefan takes Süleyman, the Serbs and the treasure off the field.",
        p: { oR: [90, 62], oL: [30, 48] }, x: ["oL", "oRg"] },
      { t: "Bayezid and the Janissaries hold out alone until nightfall, near the hill of Çatal.",
        p: { oC: [70, 56], tC: [58, 44], tV: [62, 48] } },
      { t: "Bayezid tries to escape with a few hundred horsemen. He is captured and taken to Tamerlane.",
        p: { tC: [68, 52] }, x: ["oC"] }
    ]
  }
});
