// Great-battles pack (part 31): Plevna (1877), Port Arthur (1904-05), Mukden (1905), Brusilov Offensive (1916), Caporetto (1917).
// Uses add() from battles2.js. Troop numbers are historians' estimates and sources disagree; ranges are flagged as such.
// Mukden (1905) and Caporetto (1917) have only hidden stubs in battles_wd.js (ids wd...), so they are written here with new ids.
// Dates for Plevna are in the Gregorian calendar (Russian sources of the time used the Julian one, 12 days behind).

add("plevna", "Siege of Plevna", 1877, "20 July to 10 December 1877", "moderna", "Plevna (Pleven), Bulgaria", 43.417, 24.617,
  ["Russia and Romania", "Grand Duke Nicholas, Carol I of Romania and Eduard Totleben", "≈ 100,000 to 130,000 at the peak (sources disagree)", 115000], ["Ottoman Empire", "Osman Nuri Pasha", "≈ 35,000 to 50,000 (sources disagree)", 42000], "a",
  "In 1877, Russia crossed the Danube to free the Christians of the Balkans from Ottoman rule. Osman Pasha got there first and turned the town of Plevna into a fortress of trenches and redoubts.",
  ["Three frontal assaults, on 20 July, 30 July and 11 September, failed with heavy losses. In the third, the Russians and Romanians took some redoubts but could hold only one.",
   "General Totleben, the engineer who had defended Sevastopol in the Crimean War, ordered the assaults stopped and the town completely surrounded. By the end of October the supply road was cut.",
   "Out of food and ammunition, Osman tried to break out on the night of 9 to 10 December. He was wounded, the Ottomans fell back, and he surrendered."],
  "Osman and the garrison surrendered on 10 December, with more than 40,000 prisoners (civilians among them). The Russians marched south.",
  "Plevna opened the road to Constantinople and to Bulgarian independence. Its defenders, with repeating rifles and trenches, showed Europe how vulnerable infantry attacking head-on was becoming.");

add("portarthur", "Siege of Port Arthur", 1904, "1 August 1904 to 2 January 1905", "moderna", "Port Arthur (Lüshun), Manchuria, today China", 38.8, 121.25,
  ["Japan", "General Nogi Maresuke (Third Army)", "≈ 90,000 to 150,000 (sources disagree)", 120000], ["Russian Empire", "General Anatoly Stoessel, with Roman Kondratenko", "≈ 50,000 men, sailors included, and ≈ 500 guns", 50000], "a",
  "Port Arthur was the base of the Russian Pacific fleet. As long as it existed, the fleet threatened the supply lines of the Japanese army in Manchuria, so the base had to fall.",
  ["In August 1904, General Nogi's frontal assaults on the hills and forts of the east cost more than 18,000 men and gained almost nothing. He then switched to digging trenches and tunnels up to the forts.",
   "At the end of October, another general assault failed. From 26 November to 5 December, after heavy slaughter, the Japanese took 203 Metre Hill, from which the harbor could be seen.",
   "280 mm howitzers, guided by observers on top of the hill, sank the Russian fleet at anchor. Stoessel asked to surrender on 2 January 1905, and the agreement was signed on 5 January."],
  "The Japanese took the base and the fleet. Russia lost ≈ 31,000 men (killed and wounded) and ≈ 24,000 prisoners. Japan lost ≈ 57,800 men (killed, wounded and missing), plus tens of thousands of sick.",
  "The Third Army was free to march north and fight at Mukden. It was a rehearsal of trenches, barbed wire, machine guns and heavy artillery, which Europe would see on a larger scale ten years later.");

add("brusilov", "Brusilov Offensive", 1916, "4 June to 20 September 1916", "contemporanea", "Volhynia and Eastern Galicia, today Ukraine", 50.75, 25.33,
  ["Russian Empire", "General Aleksei Brusilov (Southwestern Front)", "≈ 630,000 at the start (573,000 infantry and 60,000 cavalry)", 630000], ["Austria-Hungary, with German reinforcements", "Archduke Joseph Ferdinand, Böhm-Ermolli, Linsingen and others", "≈ 480,000 at the start (450,000 infantry and 30,000 cavalry)", 480000], "a",
  "In 1916, the Allies agreed on simultaneous attacks against the Central Powers. General Brusilov proposed attacking Austria-Hungary along its whole front, instead of massing everything at a single point.",
  ["On 4 June, four Russian armies attacked at once, after a short and accurate artillery preparation. The surprised Austro-Hungarians lost their first two lines and Lutsk within a few days.",
   "Within two weeks the Austro-Hungarians had lost about 205,000 men, 150,000 of them prisoners. Germany sent divisions east, and the attack the Russian Western Front was supposed to make to the north was weak and late.",
   "The offensive lost steam in July and August in front of Kovel, and stopped at the end of September in rain and mud, after gaining Eastern Galicia and part of Bukovina."],
  "Russian victory, the biggest against the Central Powers since the trench war began, according to the historian John Keegan. Casualties are much debated: 1 to 1.4 million Russians, more than 600,000 Austro-Hungarians, and 150,000 to 350,000 Germans.",
  "It forced Germany to halt the attack on Verdun and broke the Austro-Hungarian army, which came to depend on the Germans. It persuaded Romania to enter the war, with a disastrous result. It was the last great effort of the Russian army before the revolution.");

add("mukden", "Battle of Mukden", 1905, "20 February to 10 March 1905", "moderna", "Mukden (Shenyang), Manchuria, today China", 41.8, 123.4,
  ["Japan", "Marshal Ōyama Iwao", "≈ 270,000", 270000], ["Russian Empire", "General Aleksei Kuropatkin", "≈ 250,000 to 340,000 (sources disagree)", 295000], "a",
  "After the fall of Port Arthur, Japan could reinforce its army with Nogi's Third Army. Ōyama wanted to finish off the Russian army before reinforcements arrived on the Trans-Siberian Railway.",
  ["On 20 February, the Japanese army attacked the east end of the Russian line, which was about 140 km long, and Kuropatkin, who feared that side most, sent troops there.",
   "On 27 February, Nogi's Third Army, hidden behind another army, swung around the west, while Nozu pinned the center with heavy artillery.",
   "Kuropatkin kept shifting troops from one side to the other, and the Russian counterattack of 5 March failed. On 9 March he ordered a retreat. The Japanese entered Mukden on 10 March."],
  "Japanese victory, but an incomplete one: the Russian army escaped destruction. Losses: ≈ 70,000 Japanese and ≈ 89,000 Russians (killed, wounded and missing), among them 20,000 to 25,000 prisoners.",
  "It was the largest battle of the war and the largest modern battle before 1914. Kuropatkin was replaced, and the Russian defeat set the stage for the naval disaster at Tsushima four months later.");

add("caporetto", "Battle of Caporetto", 1917, "24 October to 19 November 1917", "contemporanea", "Caporetto (Kobarid), Slovenia, then Austria-Hungary", 46.25, 13.58,
  ["Austria-Hungary and Germany", "General Otto von Below (14th Army)", "≈ 353,000 in the first attack (sources disagree)", 353000], ["Italy", "General Luigi Cadorna, with Luigi Capello (2nd Army)", "≈ 257,000 of the 2nd Army in the fighting (≈ 670,000 in the whole army)", 257000], "a",
  "After the 11th Battle of the Isonzo, Austria-Hungary was exhausted and asked Germany for help. The Germans sent divisions and chose a quiet sector, at Caporetto, for a surprise blow.",
  ["At 2 a.m. on 24 October, the Germans released gas over the northern part of the sector. At 6:41, more than 2,000 guns opened fire, and at 8:00 the infantry advanced, with stormtroopers who infiltrated through the weak points.",
   "The line of the Italian 2nd Army was broken, and some attackers advanced about 25 km on the first day. On 30 October, Cadorna ordered the retreat to the Tagliamento.",
   "The Italians took four days to cross the Tagliamento and, around 10 November, made a stand on the Piave and Monte Grappa."],
  "Victory for the Central Powers, who advanced about 150 km. The Italians lost about 10,000 to 13,000 dead, 30,000 wounded and 265,000 to 300,000 prisoners, and thousands of guns.",
  "It is the greatest defeat in Italian military history and gave the Italian language the word 'Caporetto', a synonym for disaster. Cadorna was replaced by Armando Diaz, and the Piave line held.");
