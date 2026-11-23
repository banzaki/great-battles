// In-depth battles, batch bm: plevna, portarthur, brusilov, mukden, caporetto (great-battles pack).
// Checked against the English and French Wikipedia articles on the Siege of Plevna, the Siege of Port Arthur and the Brusilov
// Offensive (plus the Portuguese article on Brusilov), and the English Wikipedia biographies of Osman Nuri Pasha, Eduard
// Totleben, Mikhail Skobelev and Aleksei Brusilov. Where sources disagree the text says so.
// No FORMATIONS entry for plevna: the sources read describe the assaults only in outline (no reliable moves by column),
// so a Gaugamela-level diagram would have meant inventing detail. Port Arthur and Brusilov are drawn schematically.
// Plevna dates are Gregorian (Russian sources of the time used the Julian calendar, 12 days behind).

Object.assign(GLOSSARY, {
  "fuzil de repetição": "A rifle with a magazine of cartridges, which lets the shooter fire several times without reloading after each shot. Single-shot rifles, like the ones most Russians used in 1877, fired much more slowly.",
  "obus de 280 mm": "A short, heavy gun that lobs an enormous shell in an arc, over hills and walls. At Port Arthur the Japanese used 11-inch (280 mm) howitzers, able to punch through the deck of a warship several kilometers away.",
  "observador de artilharia": "A soldier posted on high ground who sees where the shells land and corrects the aim by telephone or signals. Without him, a gun cannot hit a target it cannot see.",
  "escorbuto": "A disease caused by lack of vitamin C, common among soldiers and sailors who went weeks without fresh fruit or vegetables. It weakens the body and makes the gums bleed.",
  "beribéri": "A disease caused by lack of vitamin B1, common where people eat only polished rice. It weakens the legs and the heart. It killed thousands of Japanese soldiers in this war.",
  "preparação de artilharia": "The bombardment that comes before an infantry attack, to destroy barbed wire, trenches and enemy guns. In 1916 it usually lasted days. Brusilov made his short and accurate.",
  "grupo de assalto": "A small unit of picked soldiers, trained to enter through a gap in the defensive system and strike weak points, instead of advancing in a mass along a single line.",
  "tropas de assalto": "Soldiers picked and trained to break the enemy lines in small groups, with grenades, light machine guns and flamethrowers. The Germans used them in 1917 and 1918, with infiltration tactics.",
  "tática de infiltração": "Instead of attacking in a line, small groups of soldiers slip through the weak points, bypass the strong ones and head for the rear, leaving the holdouts to those who follow.",
  "gás de combate": "A toxic substance released from cylinders or artillery shells against enemy trenches. In the First World War it killed or blinded anyone who did not get a mask on in time.",
  "envolvimento pelo flanco": "A maneuver in which part of the army goes around one side of the enemy and attacks from the side or from behind, while the rest pins him down from the front.",
  "tratado de santo estêvão": "An agreement signed on 3 March 1878 at San Stefano, near Constantinople, in which the Ottoman Empire recognized a large autonomous Bulgaria. The other European powers thought it too favorable to Russia.",
  "congresso de berlim": "A conference of the great European powers, in June and July 1878, which revised the Treaty of San Stefano and reduced the size of Bulgaria.",
  "tratado de portsmouth": "The peace agreement between Russia and Japan, signed in 1905 in the United States, with President Theodore Roosevelt as mediator."
});

Object.assign(DEEP, {
  plevna: {
    war: "Russo-Turkish War of 1877–1878",
    hook: "An Ottoman general dug trenches in a Bulgarian town and stopped the tsar's army for five months.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1877, Bulgaria was a province of the Ottoman Empire. The Ottoman repression of a revolt there, in 1876, had shocked Europe, and Russia, which saw itself as protector of the Orthodox Christians of the Balkans, declared war in April 1877. Romania, still formally under the sultan, sided with the Russians.",
        "The Russian plan was to cross the Danube, cross Bulgaria and reach the Balkans and Constantinople. The crossing, at the end of June, went well. But the Ottoman general Osman Nuri Pasha, who was at Vidin, to the west, was ordered to reinforce the town of Nikopol. When he learned that it had fallen, on 16 July, he diverted his army to Plevna, a little town of vineyards, in a valley ringed by hills, where several roads meet. He arrived only hours before the Russians.",
        { h: "The road to Plevna" },
        { timeline: [
          ["Apr 1877", "Russia declares war on the Ottoman Empire."],
          ["end of Jun", "The Russian army crosses the Danube."],
          ["16 Jul", "Nikopol falls. Osman Pasha occupies Plevna."],
          ["20 Jul", "First Russian assault on Plevna."],
          ["30–31 Jul", "Second assault."],
          ["11–12 Sep", "Third assault."],
          ["24 Oct", "The Russians take the redoubt at Gorni Dubnik, on the road that supplied Plevna."],
          ["9–10 Dec", "Osman tries to break out of the siege and surrenders."]
        ]},
        { note: "The dates in this text follow the Gregorian calendar, the one we use. The Russians of the time used the [[Julian calendar|calendário juliano]], 12 days behind: that is why many Russian books give 8 July for the first assault and 28 November for the surrender." },
        "The Russians thought Plevna would be a small obstacle. It was the opposite: the town sat on the flank of their line of advance, and leaving it behind was risky."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Osman Nuri Pasha, 45 years old" },
        "Born in Tokat in 1832, he was an experienced Ottoman commander. At Plevna he showed that he knew how to get everything out of the terrain: he built a network of [[redoubts|reduto]], trenches and gun positions around the town. After the battle he received the title of Gazi, which means something like 'victorious', and Turkey still plays a march in his honor.",
        { h: "Eduard Totleben, 59 years old" },
        "A Russian military engineer, he had become famous in the Crimean War for the earthworks he raised at Sevastopol, the city that held out for nearly a year against the French, the British and the Ottomans. He was given no command at the start of the war. He was called up after the first failures at Plevna and concluded that only a complete siege, with engineering works, would beat Osman.",
        { h: "The other names" },
        "The Russian commander in chief was Grand Duke Nicholas Nikolaevich, brother of Tsar Alexander II, who accompanied the army. General Schilder-Schuldner led the first assault and General Krüdener the second. In the third, General Pavel Zotov directed the battle in practice, while Prince Carol of Romania held the nominal command of the Russian and Romanian troops. Mikhail Skobelev, aged 33, who dressed in white and rode a white horse, became known as the 'White General'. The Romanian colonel Mihail Cerchez received Osman's surrender."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary a great deal with the source and the day. In the first assault, about 6,500 Russians attacked, according to one source, against between 11,000 and 20,000 Ottomans, depending on who is counting. In the second, the Russians had about 35,000 men against some 20,000 to 22,000. In the third, the allies reached somewhere between 83,000 and 95,000, with more than 420 guns, against Osman's 35,000 men. At the height of the siege, the Russians and Romanians together numbered close to 100,000 to 130,000, and the Ottomans between 48,000 and 50,000.",
        "The Ottomans had modern rifles: the Peabody-Martini, the Winchester repeaters and Krupp breech-loading guns. Most Russians used single-shot rifles, like the Krnka, and were moving to the Berdan, also single-shot. The difference in [[repeating rifles|fuzil de repetição]] and rate of fire weighed heavily.",
        { h: "The terrain" },
        "Plevna lies in a valley among hills and ravines, cut by the Vit River. Osman used everything: he dug trenches and redoubts on the hills, took timber from the region to cover the positions and gave each one a field of fire over its neighbors. To the north and east were the Grivitsa redoubts; to the south, the so-called Green Hills.",
        { h: "The three assaults" },
        "First, on 20 July, General Schilder-Schuldner arrived with about 6,500 men. He took three lines of trenches for a moment, but the Ottomans counterattacked, and the Russians lost between 3,000 and 4,000 men, against about 1,000 to 2,000 Ottomans (sources disagree).",
        "Second, on 30 July, General Krüdener came with the IX Corps: 27,000 infantry, 2,200 cavalry and 140 guns. He attacked the north, at Grivitsa, and the south, on the Green Hills, where Skobelev commanded the Caucasian Cossack brigade. The Russians took two trenches and three forts, but not the main [[redoubt|reduto]]. By the end of the day they had lost 7,300 men and the Ottomans about 2,000.",
        "Third, after that Russia asked for Romanian help and gathered much larger forces. Before the attack, Skobelev took the town of Lovech, some 20 km away, cutting off a reinforcement route. On 11 and 12 September the allies attacked head-on. Skobelev took two southern redoubts on the Green Hills. The Ottomans retook them the next day. In the north, the Romanian 4th Division of General George Manu, with Prince Carol present, took the Grivitsa redoubt after four assaults and beat off three counterattacks. It was the only gain that stayed.",
        { note: "The losses of the third assault are uncertain. One author gives about 20,000 allied and 5,000 Ottoman casualties since the beginning of September; another source gives 15,000 Russians and 5,000 Romanians killed and wounded. Everyone agrees it was an expensive defeat." },
        { h: "The siege" },
        "Totleben arrived and said it was not worth attacking any more. He had the circle closed around the town and the road that linked it to Sofia, where the supplies came from, cut. On 24 October the Russians took Gorni Dubnik, a redoubt on that road. The siege was complete by the end of October. Osman asked permission to fall back, and the Ottoman high command refused.",
        "The Ottomans tried to relieve Plevna from outside, without success. In winter, food and ammunition ran out.",
        { h: "The breakout attempt" },
        "On the night of 9 December, the Ottomans crossed the Vit River on a front of about 3 km and managed to break the first Russian line of trenches. The Russians and Romanians pushed them back. Osman was hit in the leg and his horse was killed. Rumors that he had died spread panic among the troops. On 10 December he handed over the town, the garrison and his sword to Colonel Cerchez. The next day he formally surrendered to Grand Duke Nicholas. According to a legend of the siege, Tsar Alexander II gave him his sword back, out of respect. Many prisoners died in the snow on the march into captivity."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "More than 40,000 Ottomans surrendered, soldiers and non-combatants together. The total losses are disputed and no estimate adds up: one source totals about 50,000 allied casualties and 25,000 Ottoman, plus the prisoners; others give 38,000 against 15,000. It is clear that the allies lost far more men attacking than Osman did defending.",
        "Free at last, the Russians marched south. In January 1878 they reached the outskirts of Constantinople. The [[Treaty of San Stefano|tratado de santo estêvão]], of 3 March, created a large autonomous Bulgaria. The other European powers reacted, and the [[Congress of Berlin|congresso de berlim]], in 1878, cut Bulgaria down.",
        { h: "Why it matters" },
        "Modern Bulgaria was born of this war, and Plevna is remembered there as the decisive episode. The historian A. J. P. Taylor wrote that Plevna is one of the few engagements that changed the course of history, because it gave the Ottoman Empire another forty years of life. Militarily, European observers saw what trenches and repeating rifles did to infantry advancing in mass, and the siege was later read as a warning of what would come in 1914.",
        { h: "Curiosities and controversies" },
        { note: "Osman came back from Russian captivity after the Treaty of Berlin, in 1878, and got a hero's welcome in Constantinople. He served as Minister of War four times." },
        { note: "In Bulgaria, the Pleven Panorama, a museum opened in 1977, shows the battle. In Moscow, a chapel inaugurated in 1882 honors the Russian dead. Towns such as Plevna, in Montana (USA), and Plevna, in Ontario (Canada), were named after the siege." },
        { note: "The siege numbers come from sources that do not match each other: the total of Ottomans varies from 8,000 to 50,000 depending on the table, and the losses by assault, added up, do not agree with the overall totals. We use ranges, not exact values." }
      ]}
    ]
  },

  portarthur: {
    war: "Russo-Japanese War (1904–1905)",
    hook: "The Japanese lost tens of thousands of men to take a hill from which the harbor could be seen, and then sank the Russian fleet with howitzers.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the start of the twentieth century, Russia and Japan were competing for Manchuria and Korea. Russia had leased the Liaodong peninsula, in China, and had made Port Arthur, today's Lüshun, a naval base in the Pacific, a port that did not freeze in winter. On 8 February 1904, Japan made a surprise attack on the Russian fleet there and the war began.",
        "The Russians were left with their fleet bottled up in the harbor. On 10 August it tried to break out and was beaten in the Battle of the Yellow Sea. But the ships that returned still existed, and as long as they existed, Japan could not be sure that it commanded the sea and that its transport lines to Manchuria were safe. So the Japanese Third Army, under General Nogi, was sent to take the base by land.",
        { h: "The road to the hill" },
        { timeline: [
          ["8 Feb 1904", "Japan makes a surprise attack on the Russian fleet at Port Arthur."],
          ["7–9 Aug", "The Japanese take the forward hills in the east."],
          ["19–24 Aug", "First general assault fails: more than 18,000 Japanese casualties."],
          ["19 Sep", "The formal siege begins, with trenches and tunnels."],
          ["end of Oct", "Another general assault on the east front fails."],
          ["26 Nov–5 Dec", "The Japanese take 203 Metre Hill."],
          ["5–9 Dec", "The howitzers sink the Russian fleet in the harbor."],
          ["15 Dec", "General Kondratenko, the soul of the defense, dies."],
          ["2 Jan 1905", "Stoessel asks to surrender. The agreement is signed on 5 January."]
        ]},
        "The attack was urgent for another reason. The Baltic fleet, which Russia was preparing to send to the Pacific, would only help if Port Arthur still existed when it arrived."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Nogi Maresuke, 55 years old" },
        "A Japanese general who had taken Port Arthur in a few days in the war against China, in 1894. In 1904 he insisted on attacking from the east, where his superiors had doubts, and ordered assaults before the approach trenches were ready. The historian Danny Orbach sees him as rigid and irresponsible; the Japanese historian Chōnan Masayoshi defends him, saying that his orders were fixed and that the western side was better defended. According to some sources, it was General Kodama Gentarō who pointed out the importance of 203 Metre Hill. Two of Nogi's sons died in the war, the last on the hill. He wept before the emperor and asked to be allowed to kill himself, but was refused. In September 1912, after Emperor Meiji's funeral, he and his wife took their own lives in the traditional way, seppuku.",
        { h: "Anatoly Stoessel and Roman Kondratenko" },
        "General Stoessel commanded the fortress. General Kondratenko, who directed the land defense, was the officer the soldiers respected most. He died on 15 December, at Fort Tongchikuan. Stoessel replaced him with General Alexander Fok, whom the main source describes as incompetent.",
        { h: "The other names" },
        "Colonel Nikolai Tretyakov held 174 Metre Hill in August and then 203 Metre Hill, where he was badly wounded. Captain Nikolai Essen scuttled the battleship Sevastopol on 2 January to keep the Japanese from using it. Admiral Tōgō, who commanded the Japanese fleet, sent destroyers against the Russian ships."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary. Nogi had about 150,000 men at the start according to one source, and 474 guns; others give 80,000 to 120,000 at different moments. The Russian garrison numbered almost 50,000, sailors included, with about 500 guns. The forts, linked by covered roads, had well-hidden [[machine guns|metralhadora]], which Japanese intelligence underestimated.",
        { h: "The terrain" },
        "Port Arthur is a sheltered harbor ringed by hills. The fortress's land front had an east side, a north side and a west side, with forts and redoubts on the heights. 203 Metre Hill lay in the west, and from it you could see the harbor, about 5 km away, where the fleet lay at anchor.",
        { h: "The siege in nine moves" },
        { formation: true },
        "First, the Japanese gathered to the north and east, and the Russians shut themselves inside the forts, with the fleet in the harbor.",
        "Second, in August, after taking the forward hills, Nogi attacked the east front. Between 19 and 24 August, the Japanese lost more than 18,000 men and gained 174 Metre Hill and little more. Intelligence had underestimated the machine guns and the covered road between the forts.",
        "Third, Nogi moved on to a regular siege: sappers dug more than 8 km of trenches and tunnels. On 19 September they took the Waterworks Redoubt and then the Temple Redoubt. A first assault on 203 Metre Hill, between 20 and 22 September, failed.",
        "Fourth, at the end of October, the Japanese attacked the east front again, with the help of tunnels. They failed because the ditches were wider than they knew, and the artillery, overheated, lost accuracy. The dates vary between sources (26 and 30 October).",
        "Fifth, in November 18 eleven-inch howitzers arrived, hauled by teams of about 800 men along a narrow-gauge railway. The artillery came to be directed by telephone. Nogi shifted the effort to the west and 203 Metre Hill.",
        "Sixth, on 26 November an attack of 2,600 men failed; official Japanese losses were 4,000, and unofficial estimates say double. More than a thousand heavy shells fell in a single day, 28 November. A flag reached the top on 30 November, but the Russians retook the position the next day. The hill fell on 5 December. The Japanese lost more than 8,000 men in the final assault, and the Russians, who never had more than 1,500 men on the hill at once, more than 6,000.",
        "Seventh, with [[artillery spotters|observador de artilharia]] on top, the [[280 mm howitzers|obus de 280 mm]] began to hit the ships at anchor. On 5 December the Poltava sank; on the 7th, the Retvizan; on the 9th, the Pobeda, the Peresvet, the Pallada and the Bayan. The Sevastopol, hit five times, survived and withstood six destroyer attacks by the Japanese, who fired 124 torpedoes over about three weeks.",
        "Eighth, meanwhile [[underground mines|mina subterrânea]] destroyed the eastern forts: Fort Chikuan on 18 December, Erhlung on 28 December and Sungshu on 31 December. On 1 January, Fort Wantai fell.",
        "Ninth, on 1 January Stoessel and Fok offered to surrender without consulting the other officers. Generals Smirnov and Tretyakov were outraged. The Sevastopol was scuttled by its own men on 2 January. The surrender was signed on 5 January."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Russians lost 31,306 men, killed and wounded (at least 6,000 killed), and 24,369 were captured, plus 8,956 sailors. They lost the whole fleet in the harbor. The Japanese had 57,780 casualties (about 14,000 killed) and more than 33,000 sick, 21,023 of them with [[beriberi|beribéri]]. Older estimates, like the 1908 Russian official history, spoke of 94,000 to 110,000 Japanese casualties, but they were made before the Japanese medical records became accessible.",
        "The Japanese found large stores of food and ammunition. This suggests the garrison could have held out longer, and Stoessel, Fok and Smirnov were tried in St. Petersburg. Stoessel was sentenced to death, the sentence was changed to ten years in prison, and the tsar pardoned him in 1909.",
        { h: "Why it matters" },
        "The fall of Port Arthur, followed by the Japanese victories at Mukden and Tsushima, gave Japan a dominant position, and the [[Treaty of Portsmouth|tratado de portsmouth]] was mediated by Roosevelt. The defeat contributed to the Russian revolution of 1905. Japan established itself as the first non-European power to beat a great European power in a modern war.",
        "Militarily, many historians see the siege as a rehearsal for the First World War: [[trenches|trincheira]], [[barbed wire|arame farpado]], machine guns, heavy howitzers and indirect fire by telephone.",
        { h: "Curiosities and controversies" },
        { note: "According to one tradition, Nogi launched the assault of 29 October as a birthday present for Emperor Meiji. The assault cost 124 officers and 3,611 men and failed. The account is not confirmed in every source." },
        { note: "Russian soldiers called the 280 mm shells 'roaring trains'. More than 35,000 of them were fired during the siege." },
        { note: "The siege numbers differ between sources, even in the sizes of the armies (150,000 or 120,000 Japanese; 50,000 or 101,000 Russians, depending on whether civilians and volunteers are counted). We use ranges." }
      ]}
    ]
  },

  brusilov: {
    war: "Eastern Front of the First World War (1916)",
    hook: "Four armies attacked at once, and in four days one of the Austro-Hungarian armies had lost about two thirds of its men.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of 1915, Russia, France, Britain and Italy agreed, at Chantilly, to attack the Central Powers together the following summer. In February 1916, the Germans began pounding Verdun, and France asked for help. Russia tried to attack in March, near Lake Naroch, and it was a failure: German losses were about one fifth of the Russian ones.",
        "In Austria-Hungary, the chief of staff, Conrad von Hötzendorf, took divisions from the eastern front and the Balkans to attack Italy, and many of them were veterans. The Austro-Hungarian front in Galicia was left weaker than before.",
        { h: "The road to 4 June" },
        { timeline: [
          ["Dec 1915", "The Allies agree on simultaneous attacks for 1916."],
          ["Mar 1916", "The Russian offensive at Lake Naroch fails."],
          ["29 Mar", "Brusilov takes over the Southwestern Front."],
          ["26 May", "The tsar orders the attack brought forward, answering Italian appeals."],
          ["4 Jun", "The offensive begins."],
          ["6–8 Jun", "The Russians enter Lutsk."],
          ["17 Jun", "The Russians take Czernowitz."],
          ["28 Jul", "Brody is taken."],
          ["9 Aug", "Brusilov gives up on taking Kovel."],
          ["20 Sep", "End of the offensive."]
        ]},
        "The plan of the Russian high command was for the Western Front, under General Evert, to deliver the main blow. Brusilov proposed another: to attack with the Southwestern Front, with four armies, at several points, to leave the enemy not knowing where the threat lay. Tsar Nicholas II approved. Brusilov's requests for supporting attacks from the fronts of Evert and Kuropatkin were denied."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Aleksei Brusilov, 62 years old" },
        "Born in Tbilisi in 1853, to a family of officers, he was a cavalry officer. He took over the Southwestern Front on 29 March 1916. In 1917 he was commander in chief for a short time and, after the civil war, sided with the Bolsheviks and helped organize the Red Army. He died in Moscow in 1926.",
        { h: "The generals beside him" },
        "The 8th Army, under Aleksei Kaledin, in the north, struck the hardest blow, toward Lutsk and Kovel. Vladimir Sakharov commanded the 11th, Dmitry Shcherbachev the 7th and Platon Lechitsky the 9th, in the south.",
        { h: "On the other side" },
        "Archduke Joseph Ferdinand commanded the Austro-Hungarian 4th Army, the main target of the attack. Also there were Eduard von Böhm-Ermolli, with the 2nd Army, Karl von Pflanzer-Baltin, with the 7th, and the German general Alexander von Linsingen, who commanded the Army of the Bug and received German reinforcements. Conrad was far away, on the Italian front."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Southwestern Front had four armies, with about 40 infantry divisions and 15 cavalry divisions: close to 573,000 men on foot and 60,000 on horseback at the start. The defenders had 39 infantry divisions and 10 cavalry divisions, about 450,000 men on foot and 30,000 on horseback. In the sector of the Austro-Hungarian 4th Army, 148 Russian battalions faced 53.",
        { h: "The terrain" },
        "Plains and hills of Volhynia and Eastern Galicia, today in Ukraine, cut by rivers such as the Styr and the Stokhod. The objectives were the cities of Kovel and Lviv (Lemberg), lost by the Russians in 1915.",
        { h: "Brusilov's method" },
        "Brusilov kept his reserves close to the front and used dummy guns and false radio traffic to hide the point of attack. He had trenches dug to about 100 meters from the Austro-Hungarian ones, and tunnels under his own wire. Each of the four armies attacked on a sector of about 15 km, in waves of reinforced corps, instead of a single mass. The [[artillery preparation|preparação de artilharia]] was short and accurate: Winogradsky's artillery brigade, with 76 mm guns, opened 24 breaches, and the heavy guns hit the strongpoints. The infantry advanced in [[assault groups|grupo de assalto]].",
        { h: "The offensive in nine moves" },
        { formation: true },
        "First, on the eve of the attack, the four Russian armies stood facing the Austro-Hungarian armies, from north to south. Evert, in the north, stayed put.",
        "Second, on 4 June the artillery opened fire, and the infantry of the four armies advanced at the same time, each in its own sector.",
        "Third, on the 5th, Kaledin had already taken the first and second Austro-Hungarian lines. Archduke Joseph Ferdinand, almost out of ammunition, asked Linsingen for help. Between 6 and 8 June the Russians entered Lutsk, and in four days the 4th Army fell from 117,800 to about 35,000 men.",
        "Fourth, in the south, Lechitsky's 9th Army advanced against Pflanzer-Baltin, who fell back. The Russians took Czernowitz on 17 June and Kolomea on the 18th. By 14 June the Austro-Hungarians had lost about 205,000 men, 150,000 of them prisoners.",
        "Fifth, Linsingen gathered German and Austro-Hungarian forces and counterattacked near Lutsk from 15 June. In three days the line barely changed. Germany sent divisions from other fronts, and five German divisions were organized near Kovel.",
        "Sixth, Evert attacked only later, and badly. Sources give different dates, between mid-June and 2 July. He called off the attack on 9 July, after losing about 80,000 men to advance some 5 km. The Germans gained time to send reinforcements.",
        "Seventh, on 4 to 6 July, the 3rd Army and the 8th attacked and pushed Linsingen back to the Stokhod River. On 28 July, Sakharov's 11th Army took Brody.",
        "Eighth, in August, the Russians tried for Kovel again, on 7 to 9 August, but the Germans and Austro-Hungarians stopped them, and Brusilov gave up on the city on 9 August. In the south, Lechitsky took Stanislau on 11 August.",
        "Ninth, the autumn rains turned the roads to mud. The offensive ended on 20 September, when Russian troops were diverted to help Romania, which had entered the war at the end of August."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Russia conquered all of Eastern Galicia and part of northern Bukovina. Casualties are much debated. A Russian archival calculation gives 497,967 Russian casualties (62,155 killed, 376,910 wounded and 59,802 missing) in the first six weeks alone. For the whole offensive, estimates run from about 1 million (Keegan) to 1.44 million (Tucker). On the Austro-Hungarian side, the figures range from 616,000 to more than 900,000, with 400,000 to 470,000 prisoners. German casualties run from 148,000 to 350,000.",
        { h: "Why it matters" },
        "It was the greatest effort of the Russian army in the war. It forced Germany to halt the attack on Verdun and to send troops east. Austria-Hungary suffered losses it could not make good and came to depend more and more on German help. John Keegan called the offensive the greatest victory on any front since the trenches were dug on the Aisne, two years earlier.",
        "But the price was enormous, and Russia could not launch another offensive like it. Many historians think the losses contributed to the collapse of the army in 1917 and to the revolution. Romania, encouraged by the success, entered the war and was defeated in the following campaign.",
        "In tactics, Brusilov used small specialized units to exploit weak points, instead of human waves. This recalls what the Germans would do in 1918 with [[stormtroopers|tropas de assalto]]. The other Russian commanders did not adopt the method.",
        { h: "Curiosities and controversies" },
        { note: "Between 27 June and 3 July, Brusilov, on his own initiative, deported about 13,000 German civilians from the conquered areas of Volhynia." },
        { note: "On 11 June, a Russian detachment crossed the Romanian border by mistake and overran a guard post. It withdrew quickly, with no intention of pressuring Romania." },
        { note: "The casualties of the offensive are among the most uncertain of the war. Here we use ranges, naming who gives each one. No source includes a final count accepted by everyone." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  portarthur: {
    terrain: [
      { t: "sea", x: 0, y: 59, w: 100, h: 11, l: "Yellow Sea" },
      { t: "hill", x: 26, y: 38, rx: 8, ry: 5, l: "203 Metre Hill" },
      { t: "note", x: 68, y: 40, l: "East front" },
      { t: "note", x: 10, y: 66, l: "Sketch: approximate positions" }
    ],
    units: [
      { id: "jN", s: "a", k: "inf", w: 30, h: 5, l: "3rd Army (Nogi)" },
      { id: "jW", s: "a", k: "inf", w: 12, h: 5, l: "Hill assault" },
      { id: "jH", s: "a", k: "inf", w: 10, h: 4, l: "280 mm howitzers" },
      { id: "rE", s: "b", k: "inf", w: 26, h: 5, l: "East forts" },
      { id: "rW", s: "b", k: "inf", w: 10, h: 4, l: "Defenders of 203" },
      { id: "rF", s: "b", k: "ship", w: 18, h: 4, l: "Russian fleet in harbor" }
    ],
    steps: [
      { t: "Nogi's Japanese stand north and east of the fortress. The Russians shut themselves in the forts. The fleet is in the harbor, to the south.",
        p: { jN: [60, 8], jW: [20, 8], jH: [86, 14], rE: [68, 34], rW: [26, 38], rF: [46, 52] } },
      { t: "August: after taking the forward hills, Nogi attacks the east front. Between 19 and 24 August he loses more than 18,000 men and gains little.",
        p: { jN: [62, 22] } },
      { t: "September and October: the regular siege, with more than 8 km of trenches and tunnels. The first assault on the hill, on 20 to 22 September, fails.",
        p: { jN: [64, 27], jW: [28, 22] } },
      { t: "End of October: another general assault on the east front. It fails again.",
        p: { jN: [62, 25] } },
      { t: "November: 18 eleven-inch howitzers arrive. Nogi shifts the effort to the west and 203 Metre Hill.",
        p: { jW: [28, 30], jN: [54, 16], jH: [38, 18] } },
      { t: "26 November to 5 December, the fight for the hill: a first attack fails, a flag goes up on 30 November and is torn down. The hill falls on 5 December.",
        p: { jW: [26, 35], rW: [24, 42] }, x: ["rW"] },
      { t: "From the top of the hill, Japanese observers direct the howitzers onto the harbor. Between 5 and 9 December the Poltava, the Retvizan, the Pobeda, the Peresvet, the Pallada and the Bayan sink.",
        p: { jH: [34, 28], rF: [46, 54] }, x: ["rF"] },
      { t: "December: Kondratenko dies on 15 December, and mines destroy the east forts one by one. Wantai falls on 1 January.",
        p: { jN: [64, 32], rE: [68, 38] }, x: ["rE"] },
      { t: "On 2 January 1905, Stoessel asks to surrender. The capitulation is signed on 5 January.",
        p: { jN: [60, 38], jW: [38, 38] } }
    ]
  },

  brusilov: {
    terrain: [
      { t: "note", x: 20, y: 4, l: "Kovel" },
      { t: "note", x: 26, y: 12, l: "Lutsk" },
      { t: "note", x: 24, y: 28, l: "Brody" },
      { t: "note", x: 14, y: 52, l: "Stanislau" },
      { t: "note", x: 22, y: 64, l: "Czernowitz" },
      { t: "note", x: 92, y: 66, l: "North ↑" },
      { t: "note", x: 50, y: 68, l: "Sketch: approximate positions" }
    ],
    units: [
      { id: "r8", s: "a", k: "inf", w: 6, h: 14, l: "8th Army (Kaledin)" },
      { id: "r11", s: "a", k: "inf", w: 6, h: 12, l: "11th (Sakharov)" },
      { id: "r7", s: "a", k: "inf", w: 6, h: 10, l: "7th (Shcherbachev)" },
      { id: "r9", s: "a", k: "inf", w: 6, h: 14, l: "9th (Lechitsky)" },
      { id: "r3", s: "a", k: "inf", w: 6, h: 10, l: "3rd Army (reinforcement)" },
      { id: "rW", s: "a", k: "inf", w: 8, h: 8, l: "Western Front (Evert)" },
      { id: "a4", s: "b", k: "inf", w: 6, h: 14, l: "4th Army (Joseph Ferdinand)" },
      { id: "a2", s: "b", k: "inf", w: 6, h: 20, l: "2nd Army (Böhm-Ermolli)" },
      { id: "a7", s: "b", k: "inf", w: 6, h: 16, l: "7th Army (Pflanzer-Baltin)" },
      { id: "ge", s: "b", k: "inf", w: 7, h: 12, l: "German reinforcements (Linsingen)" }
    ],
    steps: [
      { t: "4 June, before the attack: four Russian armies facing the Austro-Hungarian armies, from north to south. Evert, farther north, stands still.",
        p: { r8: [62, 12], r11: [62, 28], r7: [62, 41], r9: [62, 55], r3: [78, 12], rW: [88, 12], a4: [38, 12], a2: [38, 30], a7: [38, 54], ge: [8, 14] } },
      { t: "4 June: after a short artillery preparation, the four armies attack at the same time, each in its own sector of about 15 km.",
        p: { r8: [56, 12], r11: [56, 28], r7: [56, 41], r9: [56, 55] } },
      { t: "5 to 8 June: Kaledin breaks the first two lines. The 4th Army falls back to the Styr, and the Russians enter Lutsk. In four days, the archduke's army falls from 117,800 to about 35,000 men.",
        p: { r8: [34, 12], a4: [20, 18] } },
      { t: "9 to 18 June: in the south, Lechitsky advances and Pflanzer-Baltin falls back. Czernowitz falls on 17 June, and Kolomea on the 18th.",
        p: { r9: [34, 58], a7: [18, 56], r7: [50, 41], r11: [50, 28] } },
      { t: "From 15 June: Linsingen gathers German and Austro-Hungarian troops and counterattacks near Lutsk and Kovel. The line barely changes.",
        p: { ge: [22, 8], a4: [22, 20] } },
      { t: "End of June to 9 July: Evert attacks late and badly, in the north, and stops after losing some 80,000 men for about 5 km. The Germans gain time.",
        p: { rW: [80, 10], r3: [68, 14] } },
      { t: "4 to 6 July: the 3rd Army and the 8th push Linsingen back to the Stokhod.",
        p: { r3: [44, 8], r8: [40, 14], ge: [16, 6] } },
      { t: "28 July: the 11th Army takes Brody and pushes the Austro-Hungarian 2nd westward.",
        p: { r11: [32, 28], a2: [20, 30] } },
      { t: "August: the attack on Kovel is tried again, on 7 to 9 August, and stops. Lechitsky takes Stanislau on 11 August. With the autumn rains, the offensive runs out of steam on 20 September.",
        p: { r9: [30, 52], r8: [38, 12], a7: [14, 52] } }
    ]
  }
});

Object.assign(DEEP, {
  mukden: {
    war: "Russo-Japanese War (1904–1905)",
    hook: "Half a million men, a front of 140 km and a frozen river: the largest battle in the world before 1914.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1904, Japan and Russia were fighting over Manchuria and Korea. In August and September, at Liaoyang, the Japanese forced the Russians to fall back, but did not destroy them: part of the Japanese men and heavy guns had been diverted to the siege of Port Arthur. The Russians fell back in good order to the Sha-ho River, south of Mukden.",
        "The Russians tried to counterattack at the Sha-ho, in October, and at Sandepu, in January 1905. Both attempts failed. At the start of 1905, Japan had a tired army and no reserves, but Port Arthur had fallen, and Nogi's Third Army was free to go north.",
        { h: "The road to Mukden" },
        { timeline: [
          ["25 Aug–4 Sep 1904", "Battle of Liaoyang: the Russians fall back in good order."],
          ["12–14 Oct", "Russian counterattack at the Sha-ho fails."],
          ["25–29 Jan 1905", "Another counterattack, at Sandepu, fails."],
          ["20 Feb", "The Japanese 5th Army attacks the east and the battle begins."],
          ["27 Feb", "The 4th Army attacks the center, and Nogi's 3rd begins its swing around the west."],
          ["5 Mar", "Russian counterattack in the west fails."],
          ["9 Mar, 6:45 p.m.", "Kuropatkin orders a retreat to the north."],
          ["10 Mar, 10 a.m.", "The Japanese enter Mukden."]
        ]},
        "Both sides knew it would be the decisive battle on land. But Japan had little time: every month, the Trans-Siberian Railway brought more Russian soldiers."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Aleksei Kuropatkin, 56 years old" },
        "The Russian Minister of War before the conflict, he commanded the army in Manchuria. He had a line of about 140 km, with little depth, and feared above all the east side, where the hills were. This led him to spend troops there and to move them around several times, which disorganized the units. After the battle he was replaced by Linevich.",
        { h: "Ōyama Iwao, 62 years old" },
        "A Japanese marshal, he commanded the five armies. His plan was to form an arc around Mukden, to surround the city and cut off the Russian retreat. He ordered his men to avoid fighting inside the city itself.",
        { h: "The other names" },
        "On the Russian side, Linevich's 1st Army held the hills in the east, Bilderling's 3rd the center and Kaulbars's 2nd the west, on the plain. Rennenkampf commanded the cavalry in the east and held back Kawamura's advance in the cold. On the Japanese side, Kawamura commanded the 5th Army (with reservists, from near the Yalu), Kuroki the 1st, Nozu the 4th, Oku the 2nd and Nogi the 3rd, which came from Port Arthur."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to the English Wikipedia article, the Japanese had about 270,000 men. The Russians had from 250,000 to 292,000, depending on the source, and the French article gives 340,000. The Russians had more than 900 guns. The numbers change because the sources count the troops in different ways.",
        { h: "The terrain" },
        "A Manchurian plain, with hills in the east and the Hun River to the north, frozen in winter. The snow and the cold, down to −22 °C, troubled both sides. The thaw was late, and the river stayed frozen, which let the Japanese cross with ease.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, the Russian line, about 140 km long, with the three armies, east to west, and the Japanese to the south, in an arc. Nogi's 3rd Army, from Port Arthur, stayed hidden behind Oku's 2nd.",
        "Second, on 20 February, Kawamura and Kuroki attacked the east, the side Kuropatkin feared most. Alekseev's detachment fell back, but Rennenkampf returned to command and stopped Kawamura in the extreme cold.",
        "Third, on 27 February, Nozu pinned down Bilderling in the center with 108 heavy guns, including 28 cm howitzers, without attacking head-on.",
        "Fourth, the same day, Nogi came out from behind Oku and swung around the west, in a great circular movement northwest of Mukden, a maneuver of [[flank envelopment|envolvimento pelo flanco]]. Oku pushed Kaulbars back. Kuropatkin began sending troops from one side to the other.",
        "Fifth, on 1 March, Nogi's advance, at Ssu-fang-tai, cost about 700 dead, and the Japanese lost momentum.",
        "Sixth, on 5 March, General Gerngross delayed the Russian counterattack by five hours and sent only a quarter of his men. It failed.",
        "Seventh, between 5 and 9 March, Ōyama changed the order from 'attack' to 'pursue and destroy'. Nogi took the north bank of the Hun River and threatened to envelop the Russian right wing. Kuropatkin pulled troops from the east to try to help the west and took personal command, and the Russian units got mixed up.",
        "Eighth, the frozen Hun River let the Japanese cross it easily. Kuroki cut the road from Mukden to the north. At 6:45 p.m. on 9 March, Kuropatkin ordered a retreat.",
        "Ninth, the Japanese entered Mukden at 10 a.m. on 10 March. The pursuit stopped some 20 to 30 km on, partly for lack of supplies, and the Russian army escaped annihilation."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "According to the English article, Japan lost 70,029 men (16,553 killed and 53,476 wounded), and Russia 89,423 (8,705 killed, 51,388 wounded and 29,330 missing, among them 20,000 to 25,000 prisoners, most in the last 28 to 48 hours). The French article gives slightly different figures: 15,892 killed and 59,612 wounded Japanese. Together, they passed 150,000 casualties.",
        { h: "Why it matters" },
        "It was the largest battle of the war and the largest modern battle until 1914. The Japanese fired about 20 million rifle and machine-gun cartridges and 279,394 artillery shells in a little over ten days. Russia was driven out of southern Manchuria, but Kuropatkin's army survived, because the Japanese supply lines were stretched too far for the pursuit.",
        "Four months later came Tsushima. The Japanese victory shocked the European powers, because it showed that a non-European army could defeat a European one in the open field. On 10 March, Japan began to celebrate Army Day.",
        { h: "Curiosities and controversies" },
        { note: "Japan won, but not the way Ōyama wanted: the plan was to surround and destroy the Russian army, and it escaped. Both sides were at their limit." },
        { note: "The troop numbers vary from 250,000 to 340,000 for the Russians. We use ranges and say who gives each one." }
      ]}
    ]
  },

  caporetto: {
    war: "Italian Front of the First World War (1915–1918)",
    hook: "In one day, Germans and Austro-Hungarians advanced 25 km, and Italy lost a quarter of a million men as prisoners.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Italy entered the war in 1915, on the Allied side, and spent two years launching offensives against Austria-Hungary along the Isonzo River, today in Slovenia. There were eleven battles, gaining a few kilometers at enormous cost. The 11th, in August 1917, was an Italian success that left the Austro-Hungarian army on the brink of collapse.",
        "Emperor Charles asked Kaiser Wilhelm II for help. In August, Hindenburg and Arz agreed to take divisions from the eastern front. Ludendorff was against it, but was overruled. German specialists chose the quiet sector of Caporetto (Kobarid) for a surprise attack with [[gas|gás de combate]]. A new 14th Army was formed, under General Otto von Below, with nine Austro-Hungarian divisions and six to eight German ones.",
        { h: "The road to Caporetto" },
        { timeline: [
          ["1915–Aug 1917", "Eleven battles of the Isonzo, with small Italian gains."],
          ["Aug 1917", "Hindenburg and Arz agree to send German divisions to Italy."],
          ["24 Oct, 2 a.m.", "The Germans release gas near Bovec (Plezzo)."],
          ["24 Oct, 6:41 a.m.", "More than 2,000 guns open fire. At 8 a.m., the infantry advances."],
          ["30 Oct", "Cadorna orders the retreat to the Tagliamento."],
          ["5–7 Nov", "Rapallo conference among the Allies."],
          ["~10 Nov", "The Italians form a new line on the Piave and Monte Grappa."]
        ]}
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Luigi Cadorna" },
        "Chief of the Italian general staff, known for his harsh discipline. According to the English article, he had dismissed 217 generals, 255 colonels and 355 battalion commanders, and the troops' morale was low. He directed the battle about 30 km from the front and ended up retreating some 160 km, to Padua. He was forced to resign and was replaced by Armando Diaz.",
        { h: "Luigi Capello and Pietro Badoglio" },
        "Capello commanded the 2nd Army, the one that was broken. He was ill, with a fever, and left his post on 4 October, according to the Italian Wikipedia, but later asked to fall back to the Tagliamento and was refused. Badoglio commanded the XXVII Corps, one of those quickly overwhelmed.",
        { h: "Otto von Below and Erwin Rommel" },
        "Below commanded the 14th Army. A young German officer, Erwin Rommel, commanded troops of the Württemberg Mountain Battalion and won the Pour le Mérite medal for actions in the mountains, described in his book 'Infantry Attacks'. Much of what is told about his actions comes from his own memoirs."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The attackers numbered about 353,000 men, according to the Italian Wikipedia: the 14th Army had about 98,400 and the 2nd Isonzo Army some 21,600. On the Italian side, the 2nd Army had about 257,400 men in the fighting and more than 667,000 in the whole army.",
        "The gun numbers vary: from 2,147 guns and 371 mortars (text) to 2,518 (infobox) for the attackers, and from 997 guns and 345 mortars to 1,342 for the Italians engaged.",
        { h: "The terrain" },
        "The valley of the Isonzo River, between mountains, with Bovec (Plezzo) to the north, Tolmino to the south and Caporetto in the middle. The ridges of Kolovrat and Matajur command the valley and the plain of Friuli behind.",
        { h: "The breakthrough" },
        "First, at 2 a.m. on 24 October, the Germans released gas from cylinders in the Bovec sector, and the English Wikipedia speaks of 500 to 600 defenders killed. At 6:41, about 2,200 guns opened fire, and at 8 a.m. mines exploded and the infantry advanced.",
        "Second, instead of attacking in a line, the [[stormtroopers|tropas de assalto]] and the mountain troops used [[infiltration tactics|tática de infiltração]]: they went through the valleys and the weak points, ignored the strongpoints and headed for the rear. The German 12th Division went up the Isonzo valley and reached Caporetto that same afternoon. Some attackers advanced some 25 km on the first day.",
        "Third, the line of the 2nd Army was broken between the IV and XXVII Corps. The communication cables were cut, and the Italian artillery fire became disordered. With morale low, many soldiers surrendered without fighting.",
        "Fourth, on the ridges, Rommel's Württemberg Battalion took Kolovrat and, between 25 and 27 October, Monte Matajur. According to one source, they captured 9,000 Italians in a little over two days, a number that comes mainly from Rommel's memoirs.",
        "Fifth, Capello asked to fall back to the Tagliamento, and Cadorna refused. Only on 30 October did he order the retreat. The crossing of the river took four days, and the ambushes by the pursuers became known as the battle of Pozzuolo. On 2 November, the Austro-Hungarian 55th Division made a [[bridgehead|cabeça de ponte]] on the Tagliamento.",
        "Sixth, the Italians made a stand on a new line on the Piave River and Monte Grappa around 10 November, and the line held."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Italians lost between 10,000 and 13,000 dead, about 30,000 wounded and from 265,000 to almost 300,000 prisoners, plus 3,152 guns, 3,000 machine guns and 1,712 mortars, according to the English article. Central Powers losses were about 70,000, according to the same article, or 6,000 to 7,000 on the first day, according to the Italian one. Between 600,000 and more than 1 million civilians fled.",
        { h: "Why it matters" },
        "The historian Brian Sullivan called Caporetto the greatest defeat in Italian military history. The Allies reacted: from 5 to 7 November, the Rapallo conference created a Supreme War Council, and France and Britain sent six and five divisions, which did not fight. The Piave line held, and in 1918 Italy beat Austria-Hungary at Vittorio Veneto.",
        "Militarily, Caporetto is one of the first examples of [[stormtroopers|tropas de assalto]] and infiltration bringing victory in the First World War.",
        { h: "Curiosities and controversies" },
        { note: "In Italian, 'Caporetto' became a synonym for total disaster. The defeat led to a search for culprits and to a commission of inquiry, in 1919." },
        { note: "Ernest Hemingway's novel 'A Farewell to Arms' has the retreat from Caporetto as part of its story." },
        { note: "The numbers vary a great deal, both for troops and for casualties. We use ranges and say who gives each one." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  mukden: {
    terrain: [
      { t: "hill", x: 82, y: 34, rx: 14, ry: 6, l: "Eastern hills" },
      { t: "note", x: 50, y: 20, l: "Mukden" },
      { t: "note", x: 50, y: 6, l: "Hun River (frozen)" },
      { t: "note", x: 90, y: 66, l: "North ↑" },
      { t: "note", x: 20, y: 66, l: "Sketch: approximate positions" }
    ],
    units: [
      { id: "kaw", s: "a", k: "inf", w: 14, h: 4, l: "5th (Kawamura)" },
      { id: "kur", s: "a", k: "inf", w: 16, h: 4, l: "1st (Kuroki)" },
      { id: "noz", s: "a", k: "inf", w: 16, h: 4, l: "4th (Nozu)" },
      { id: "oku", s: "a", k: "inf", w: 14, h: 4, l: "2nd (Oku)" },
      { id: "nog", s: "a", k: "inf", w: 14, h: 4, l: "3rd (Nogi)" },
      { id: "r1", s: "b", k: "inf", w: 26, h: 5, l: "1st Army (Linevich)" },
      { id: "r3", s: "b", k: "inf", w: 24, h: 5, l: "3rd (Bilderling)" },
      { id: "r2", s: "b", k: "inf", w: 26, h: 5, l: "2nd (Kaulbars)" },
      { id: "rc", s: "b", k: "cav", w: 14, h: 4, l: "Cavalry (Rennenkampf)" }
    ],
    steps: [
      { t: "A Russian line of about 140 km, with three armies, facing the five Japanese armies, in an arc. Nogi hides behind Oku.",
        p: { r1: [80, 32], r3: [52, 32], r2: [24, 32], rc: [86, 40], kaw: [92, 50], kur: [76, 48], noz: [54, 48], oku: [32, 48], nog: [30, 58] } },
      { t: "20 February: Kawamura and Kuroki attack the east, the side Kuropatkin fears most. The Russians fall back, and Rennenkampf's cavalry holds Kawamura in cold of down to −22 °C.",
        p: { kaw: [90, 42], kur: [76, 41], r1: [80, 29] } },
      { t: "27 February: Nozu pins down the center with 108 heavy guns, without attacking head-on.",
        p: { noz: [54, 40] } },
      { t: "The same day, Nogi comes out from behind Oku and begins to swing around the west. Oku pushes Kaulbars back.",
        p: { nog: [10, 44], oku: [30, 40], r2: [22, 30] } },
      { t: "Kuropatkin pulls troops from the east and sends them west and then back again. The units get mixed up.",
        p: { rc: [70, 36], r1: [76, 30] } },
      { t: "1 March: Nogi attacks at Ssu-fang-tai, with about 700 dead, and continues toward the northwest.",
        p: { nog: [8, 30] } },
      { t: "5 March: the Russian counterattack in the west, by Gerngross, is delayed five hours, advances with a quarter of its men and fails.",
        p: { r2: [20, 28], nog: [10, 26] } },
      { t: "Between 5 and 9 March, Ōyama changes the order to 'pursue and destroy'. Nogi takes the north bank of the Hun River and threatens to envelop the Russian west. The frozen river lets the Japanese cross with ease.",
        p: { nog: [30, 12], oku: [28, 30], kur: [70, 28], noz: [52, 30] } },
      { t: "9 March, 6:45 p.m.: Kuropatkin orders a retreat to the north. On 10 March, at 10 a.m., the Japanese enter Mukden. The Russians escape total encirclement, leaving 20,000 to 25,000 prisoners.",
        p: { r1: [78, 8], r3: [52, 4], r2: [24, 4], rc: [88, 12], noz: [50, 24] } }
    ]
  }
});
