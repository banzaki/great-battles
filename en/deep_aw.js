// In-depth battles, batch aw: jena, koniggratz, okinawa (great-battles pack, part 1).
// Checked against the English, French, German and Portuguese Wikipedia articles on Jena-Auerstedt, Koniggratz and
// Okinawa, the Wikipedia order-of-battle notes, History of War's account of Koniggratz, and the works those pages cite.
// Where sources disagree the text says so.
// Gallipoli and the Battle of Britain were part of the brief, but they already exist (ids "galipoli" and "inglaterra"),
// so they are not written again. Auerstedt is told in the text of "jena" but is not drawn: the diagram follows the
// better-documented fight at Jena (a second diagram would not fit the 100 x 70 canvas next to it).

Object.assign(GLOSSARY, {
  "quarta coalizão": "The 1806 alliance against France, made up of Prussia, Russia, the United Kingdom, Saxony and Sweden. Prussia joined in October and was beaten within a few weeks.",
  "marcha forçada": "A march longer and faster than normal, with few stops. It tires the soldiers, but it can put an army where the enemy does not expect it.",
  "ordem de batalha": "The list of which units an army has and who commands each one. It also means the way they are placed on the ground.",
  "carregamento pela boca": "The old way of reloading: the soldier pushes the powder and the ball down the barrel from the muzzle with a rod. Standing up, it is slow and leaves the shooter exposed.",
  "kikusui": "'Floating chrysanthemums' in Japanese: the name given to the great mass air attacks against the American fleet at Okinawa. There were ten, between April and June 1945.",
  "seppuku": "Japanese ritual suicide with a blade, traditional among samurai. In 1945, Japanese officers used it to avoid surrender."
});

Object.assign(DEEP, {
  jena: {
    war: "War of the Fourth Coalition (1806–1807)",
    hook: "On the same day, on two battlefields, Napoleon brought down the army of Frederick the Great, and one of his marshals did the rest alone.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1806, Prussia thought it had the best army in Europe. It was the legacy of Frederick the Great, who had fought the [[Seven Years' War|guerra dos sete anos]] more than 40 years earlier, and Prussian officers lived off that fame. Napoleon, for his part, had beaten Austria and Russia at Austerlitz in December 1805 and, in 1806, had created the [[Confederation of the Rhine|confederação do reno]], which Prussia saw as a threat.",
        "Prussia, which had stayed out of the earlier wars, joined the [[Fourth Coalition|quarta coalizão]] in 1806. At the start of October it demanded that the French pull back beyond the Rhine. The answer was the [[Grande Armée|grande armée]], which was already in southern Germany.",
        { h: "The road to Jena" },
        { timeline: [
          ["August 1806", "Prussia mobilizes its army, but takes more than a month to settle its [[order of battle|ordem de batalha]]."],
          ["Early October", "Prussia demands that the French withdraw across the Rhine."],
          ["8 to 10 October", "The Grande Armée crosses the Thuringian Forest in three columns, in a [[forced march|marcha forçada]]."],
          ["10 October", "At Saalfeld, Marshal Lannes beats the Prussian vanguard. Prince Louis Ferdinand, the king's cousin, dies in the fighting."],
          ["13 October", "Napoleon reaches Jena, and Lannes and the Guard occupy the Landgrafenberg hill during the night."]
        ]},
        "At that moment, Napoleon believed he had the bulk of the Prussian army in front of him. He was wrong: the bulk, under the Duke of Brunswick, was farther north, and the two armies were going to meet in two different places on the same day."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Napoleon Bonaparte, 37" },
        "Emperor of the French for two years. At Jena he commanded in person and did well: he saw that the Prussians had stood still and threw everything he had against them. But he got the main thing wrong: convinced that the whole enemy was in front of him, he sent Davout only to complete the maneuver from the north.",
        { h: "Louis-Nicolas Davout, 36" },
        "[[Marshal|marechal]] of France and commander of the 3rd [[army corps|corpo de exército]]. Hard, methodical and nearsighted. At Auerstedt he faced the enemy's main army alone and did not give way.",
        { h: "On the Prussian side" },
        "King Frederick William III was indecisive. The Duke of Brunswick, 71, commanded the main army. Prince Hohenlohe commanded the corps at Jena, and General Rüchel guarded Weimar with some 15,000 men. The command was divided, full of advisers and without a chief who truly gave the orders, and it was this flaw, more than the courage of the soldiers, that decided the day.",
        { h: "Other names" },
        "On the French side: Lannes, Soult, Ney, Augereau and Murat, the cavalry commander. And Marshal Bernadotte, who was supposed to march with Davout and ended up appearing on neither of the two battlefields."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary a lot depending on the source. At Jena, Napoleon had about 40,000 to 56,000 men in the morning, and the number rose to almost 96,000 over the course of the day. But only about 54,000 actually fought. Hohenlohe had about 38,000 Prussians and Saxons, and Rüchel, in Weimar, another 15,000 who arrived late.",
        "At Auerstedt, Davout had about 27,300 men and 44 guns. The main Prussian army, with Brunswick, was about 50,000, or 64,000 according to other historians, with much stronger cavalry: about 8,800 horsemen against 1,300 French.",
        { h: "The terrain" },
        "Jena lies in a deep valley of the Saale river, and above it, to the east, rises the Landgrafenberg hill, which overlooks an open plateau where the Prussians were camped. Whoever took the hill commanded the way out of the valley. Auerstedt is about 20 km to the north, near the road from Naumburg, with the village of Hassenhausen in the middle of the field.",
        { h: "The night before" },
        "The Prussians did not occupy the Landgrafenberg. Lannes and the Guard climbed it on the night of 13 to 14 October, and at 4 am Napoleon spoke to the soldiers. When day broke, there was thick fog over the plateau.",
        { h: "Jena in four moves" },
        { formation: true },
        "First, at 6 am, Lannes attacked the Prussian corps of Tauentzien in the fog, near Closewitz. He took the village and pushed Tauentzien back toward Vierzehnheiligen. On the right, Saint-Hilaire's division, from Soult's corps, appeared out of hidden ground and hit the [[flank|flanco]] of Holtzendorff's small corps, which fell apart around 10 am.",
        "Second, a French mistake. Ney advanced without orders with the light cavalry and five battalions, took a battery and found himself far from any support, in [[square|quadrado]] formation, under fire. Napoleon sent help and ordered Lannes to break through to Vierzehnheiligen. It was the worst moment of the morning.",
        "Third, Hohenlohe's hesitation. He realized around 9 am that he was facing the main army and asked Rüchel for help, but while waiting for him he left about 20,000 infantrymen standing in the open for some two hours. That was the time Napoleon needed: the other French divisions arrived, and he came to have about 96,000 men on the field, although only about 54,000 ended up fighting.",
        "Fourth, around 1 pm, the general attack. Augereau, Soult, Lannes and Ney advanced together, the Prussian line gave way, and Murat's [[cavalry|cavalaria]] swept up the infantry as it fell back. Rüchel reached Kapellendorf at about one in the afternoon, too late, and was crushed. Murat entered Weimar after 4 pm.",
        { h: "Meanwhile, at Auerstedt" },
        "Davout left Naumburg early in the morning, in fog. Gudin's division met the Prussian cavalry and artillery and took up a defense at Hassenhausen. Blücher attacked with the cavalry and made Gudin fall back. Around 9:30 am Friant's division arrived and formed [[squares|quadrado]], and Davout hid part of his troops behind a crest, in [[dead ground|terreno morto]], to hit Blücher's cavalry as it came up.",
        "Shortly before 10 am, Brunswick ordered a general attack on Hassenhausen and was shot in the head, which blinded him. Schmettau and Wartensleben were wounded, and no one took command. Morand's division arrived and covered Gudin's flank. At 11 am, Davout counterattacked. At noon the Prussian center broke, and the king ordered a retreat. Kalckreuth's reserve, which included the Guard cavalry, never entered the fight.",
        { note: "The comparison: Davout had a little more than half the enemy's men and almost no cavalry, and lost about a quarter of his corps (7,000 to 7,400 men). He won anyway. Historians point to his firmness and to the confusion of the Prussian command, which lost three generals in a few hours." },
        { note: "Bernadotte: the marshal was nearby with his corps and did not march to Auerstedt. Napoleon blamed him afterward, but no one has found a written order to go with Davout, and it is possible that the emperor shifted the blame onto someone else to hide his own mistake. Davout and Bernadotte became enemies." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "At Jena, the French lost between 5,000 and 7,500 men, and the Prussians and Saxons between 10,000 and 12,000 killed and wounded, plus 10,000 to 15,000 prisoners. At Auerstedt, the French lost 7,000 to 7,400 and the Prussians about 13,000. According to many accounts, the Prussians fleeing from the two fields crossed paths on the road to Weimar, and the retreat turned into disorder.",
        "The pursuit is what wrecked Prussia. Erfurt capitulated on 16 October. Davout entered Berlin on 25 October, on Napoleon's orders, and Napoleon entered two days later. Hohenlohe surrendered on 28 October, near Prenzlau. Blücher, cornered at Lübeck, surrendered on 7 November with some 9,000 men. Magdeburg fell on 11 November. The king fled to East Prussia.",
        { h: "Why it matters" },
        "At Tilsit, in July 1807, Prussia lost about half its territory. In 1808 it was forced to limit its army to 42,000 men and to pay an indemnity of 120 million francs. The defeat opened the eyes of a generation: Scharnhorst, Gneisenau and Clausewitz served at Jena and drew from it the reforms that, seven years later, in 1813, helped defeat Napoleon.",
        "Davout received the title of Duke of Auerstedt. In Paris, Napoleon had the Pont d'Iéna built to commemorate the victory.",
        { h: "Curiosities and controversies" },
        { note: "The name: Napoleon thought he had faced the main army at Jena. Today historians join the two names, because it was at Auerstedt that Davout met the bulk of the Prussian army." },
        { note: "It is said that, when he heard about Davout, Napoleon told the messenger: 'Your marshal must be seeing double!' The joke leaned on Davout's poor eyesight. It is an anecdote; there is no way to confirm the exact words." },
        { note: "The numbers: historians disagree on almost everything. For example, the Prussians at Auerstedt range from 50,000 to 64,000, and the French on the field at Jena from 40,000 to 96,000. We use the ranges, and say whose each one is when the difference matters." }
      ]}
    ]
  },

  koniggratz: {
    war: "Austro-Prussian War (June to August 1866)",
    hook: "One afternoon of rain and mist decided the war and took Austria out of the leadership of the German world.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After 1815, the German world was a collection of 39 states gathered in a German Confederation presided over by Austria. Prussia, which was growing in industry and railways, wanted to be in charge. In 1864, the two countries had taken the duchies of Schleswig and Holstein from Denmark together, and the division of the prize soured the relationship.",
        "Prussia's prime minister, Otto von Bismarck, wanted war and prepared for it: he made an alliance with Italy, which wanted Venetia, then Austrian. Austria, for its part, had the support of most of the German states, among them Saxony, Hanover and Bavaria.",
        { h: "The road to Königgrätz" },
        { timeline: [
          ["June 1866", "Prussia occupies Holstein and invades Saxony, Hanover and Hesse. The war begins."],
          ["27 June", "The Hanoverian army wins at Langensalza but, surrounded, surrenders two days later."],
          ["Late June", "Three Prussian armies enter Bohemia through different passes and fight border battles."],
          ["Early July", "Benedek concentrates the Army of the North on a line of hills near the fortress of Königgrätz."],
          ["3 July", "The great battle, the biggest in Europe since Leipzig in 1813."]
        ]},
        "Moltke's idea was to cross the mountains in separate columns that would unite on the battlefield. It is usually summed up in the phrase 'march separately, strike together'. It worked, but it left the armies far from one another and depended on the telegraph."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Helmuth von Moltke, 65" },
        "Chief of the Prussian [[general staff|estado-maior]] since 1857. He was a cold, methodical planner. He used the railways to put the soldiers on the border quickly and the telegraph to send the orders.",
        { h: "Ludwig von Benedek, 61" },
        "A respected general, a veteran of the war in Italy (Solferino, in 1859). He knew Italy, not Bohemia or his own troops, and he took command of the Army of the North reluctantly. After the battle, he told the emperor that the catastrophe he had foreseen had happened.",
        { h: "On the Prussian side" },
        "King William I, 69, and Bismarck watched the battle from close by. The First Army was Prince Friedrich Karl's, the Army of the Elbe was General Herwarth von Bittenfeld's, and the Second Army was Crown Prince Frederick William's.",
        { h: "On the Austrian side" },
        "Benedek commanded the Army of the North, with Prince Albert's Saxons on the left. Among the corps commanders were Festetics (4th Corps) and Thun (2nd Corps), whose movements opened a gap in the line to the north."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers differ depending on the source. Prussia had about 220,000 men and 700 guns, divided into three armies. Austria and Saxony together had between 205,000 and 215,000, with about 23,000 Saxons and some 600 to 650 guns. The two sides' weapons mattered: the Prussian Dreyse [[needle gun|fuzil de agulha]] was a [[breech-loader|retrocarga]] and let the soldier fire lying down. The Austrian Lorenz rifle was a [[muzzle-loader|carregamento pela boca]]. In exchange, the Austrian artillery had longer range and dominated the first half of the day.",
        { note: "The weight of the needle gun is debated. For a long time it was said that it won the battle. Today historians give more weight to Prussian organization, command and railways, and point out that Austrian artillery dominated the first half of the day." },
        { h: "The terrain" },
        "A region of gentle hills, villages and wheat fields between the Bistritz stream to the west and the Elbe river to the east, with the fortress of Königgrätz behind the Austrian line. Benedek's line ran along the hills of Lipa and Chlum in the center, with the Saxons to the south, at Problus, and two army corps to the north, toward the Swiepwald forest. The Austrians had partly fortified the line and placed their guns on the hills, from where they covered the stream.",
        { h: "The night before" },
        "On the night of 2 July, the Prussians learned that Benedek was sitting right there. Moltke ordered the First Army and the Army of the Elbe to attack from the front, and the Second Army, farther north, to march on the Austrian right [[flank|flanco]]. Because of a cut telegraph line, the order only reached the Crown Prince at about 4 am. The First Army left camp at 2 am, in the rain.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, early in the morning, Horn's division took Sadowa and crossed the Bistritz. The Austrian artillery, on the hill, opened fire and held up the advance. Around 8:30 am, Fransecky's division entered the Swiepwald forest, on the Prussian left flank, and fought there against the corps of Festetics and Thun. The Austrians retook a good part of the forest around 11 am. By about noon the fighting in the forest had died down.",
        "Second, the slowness of the Army of the Elbe. It was supposed to attack the Saxons from the south, but at 11 am it only had two divisions across the stream. The First Army was left alone under the guns for hours. Some historians criticize Benedek for not launching his cavalry at that moment; no one knows whether it would have worked.",
        "Third, the arrival of the Second Army. Around 1 pm, the Prussian Guard, with Hiller's division, attacked the hill of Chlum from the north, and at 2:45 pm it was inside the village. Chlum was one of the main hills of Benedek's line, and losing it broke the position. Benedek, on hearing it, still counterattacked and sent in the 6th Corps, which cleared Rosberitz but got no farther.",
        "Fourth, the collapse. In the south, the Saxons counterattacked at about 2 pm and were pushed out of Problus. Around 3 pm, Benedek accepted defeat and ordered the army to fall back to the Elbe bridges. The Austrian cavalry charged to cover the retreat, at a cost of about 2,000 men, and the artillery held up the pursuit for a while. Moltke ordered a halt at 6:30 pm and gave 4 July as a day of rest.",
        { note: "Moltke wanted to encircle the enemy, and he did not manage it: part of the Austrian army escaped over the bridges. Even so, it was Prussia's greatest victory." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Prussia lost about 9,200 men, among them 1,935 dead. Austria and Saxony lost between 31,000 and 44,000, depending on the source, counting about 20,000 to 22,000 prisoners. The Austrians also left behind from 116 to 187 guns, depending on the source. Benedek was relieved and ordered to keep quiet about the battle.",
        "The negotiations were quick. The preliminary peace of Nikolsburg came on 26 July, and the Treaty of Prague on 23 August. According to the accounts, Bismarck insisted on a mild peace with Austria, against the king and the generals, who wanted to go further. He was the one who won the argument.",
        { h: "Why it matters" },
        "Austria left Germany. Prussia annexed Hanover, Hesse-Kassel, Nassau and Frankfurt, and created the [[North German Confederation|confederação do norte da alemanha]] in 1867, under its leadership. Austria ceded Venetia to Italy and, in 1867, made a deal with the Hungarians and became Austria-Hungary.",
        "France saw the victory as a danger to itself and began to talk of 'revenge for Sadowa'. In 1870, that tension led to the Franco-Prussian War, and from it the German Empire was born.",
        { h: "Curiosities and controversies" },
        { note: "The casualty numbers vary a lot: 9,172 Prussians killed, wounded and missing is the most quoted total, but Austrian and Saxon casualties range from 31,000 to 44,000, depending on who counts and how prisoners are counted." },
        { note: "The phrase 'The Prussians don't shoot that fast!' became a German saying tied to this battle. There are several explanations for its origin, and it is not known which one is true." },
        { note: "The fight in the Swiepwald was not in Benedek's plans: at least one source says an Austrian corps commander decided to occupy the forest on his own initiative, and the fighting there wore down the right wing of the line." }
      ]}
    ]
  },

  okinawa: {
    war: "World War II, Pacific War (1945)",
    hook: "The bloodiest battle of the Pacific: 82 days on an island where hundreds of thousands of civilians lived.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the start of 1945, Japan had already lost the Philippines, and the Americans had just taken Iwo Jima. The last step before the main islands remained: Okinawa, an island about 100 km long in the south of Japan, annexed by the country in 1879 and inhabited by Okinawans, with their own language and culture.",
        "The Americans wanted Okinawa as an air base and a jumping-off point for a possible invasion of the main islands. The operation, code-named Iceberg, was the largest amphibious operation of the Pacific.",
        { h: "The road to Okinawa" },
        { timeline: [
          ["26 March 1945", "Troops take the Kerama islands, west of Okinawa, to have an anchorage."],
          ["1 April", "The main landing, at Hagushi, on the west coast. The airfields of Yontan and Kadena are taken within a few hours."],
          ["6 and 7 April", "The first great kamikaze attack and the sailing of the battleship Yamato. Yamato is sunk on 7 April."],
          ["April and May", "Two months of fighting around the Shuri line, in the south."],
          ["29 May", "Shuri falls, but the Japanese had already withdrawn farther south."],
          ["18 June", "General Buckner dies from artillery fire."],
          ["21 and 22 June", "End of organized resistance."]
        ]},
        "Japan knew it would not win. The goal now was to cost the Americans so much that they would accept a negotiated peace."
      ]},
      { n: "02", title: "Key figures", blocks: [
        { h: "Simon Bolivar Buckner Jr., 58" },
        "General of the Tenth Army and the son of a Confederate general. He was killed on 18 June, while observing the front line, by coral fragments thrown up by an artillery shell. He was the highest-ranking American officer killed by enemy fire in the war.",
        { h: "Mitsuru Ushijima, 57" },
        "Commander of the Japanese 32nd Army. Colonel Hiromichi Yahara, the chief of operations, wanted a defense of attrition in the south, in the caves. The chief of staff, Isamu Chō, wanted to attack. Ushijima followed Chō in April, lost a lot of men and went back to Yahara's plan.",
        { h: "Other names" },
        "Admiral Raymond Spruance commanded the Fifth Fleet, and Vice Admiral Richmond Turner commanded the landing phase. Admiral Marc Mitscher commanded the aircraft carriers. On the Japanese side, Rear Admiral Minoru Ōta commanded the roughly 9,000 sailors fighting on land. Vice Admiral Seiichi Itō commanded the Yamato mission."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are the most disputed. The American Tenth Army had about 183,000 combat troops at the start. Another count reaches some 541,000, which probably includes those who served in the fleet and in support. The Navy had, by one count, 18 battleships, 27 cruisers and 39 carriers, and the British fleet came in with 251 aircraft. The Japanese had about 100,000 men: 67,000 to 77,000 of the 32nd Army, 9,000 sailors and some 39,000 Okinawan conscripts, the boeitai.",
        { h: "The terrain" },
        "Northern Okinawa is mountainous and covered in forest. The south is limestone hills full of caves, with family tombs cut into the rock. Shuri Castle, the old seat of the kings of Ryukyu, stood in the middle of the defense line. It was the ideal ground for an underground [[defense in depth|defesa em profundidade]], and the Japanese had prepared it for months.",
        { h: "Ushijima's strategy" },
        "The 32nd Army did not defend the beaches. Ushijima let the Americans make the [[amphibious landing|desembarque anfíbio]] and waited for them in the south, where every hill was a [[bunker|bunker]]. It was Colonel Yahara's idea: a [[war of attrition|guerra de atrito]], to cost the enemy as much as possible.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, the landing, on 1 April, Easter Sunday. The fleet poured out fire, and tens of thousands of soldiers went ashore at Hagushi beach, almost without a shot. The airfields of Yontan and Kadena were taken within a few hours. The 6th Division of [[Marines|fuzileiros navais]] went north and cleared the Motobu peninsula and Mount Yae-Dake. Ie Shima, an island nearby, was taken on 21 April.",
        "Second, the fleet under fire. Between April and June, the Japanese made ten great mass air attacks, the [[kikusui|kikusui]], with about 1,400 to 1,500 large-scale sorties, plus those of individual pilots, many of them [[kamikaze|kamikaze]]. On 7 April, Yamato and nine other ships left Japan on a suicide mission. Carrier aircraft sank Yamato and five other ships before they reached Okinawa. From 3,700 to 4,000 men of the force died. The allied fleet lost 36 ships sunk, by one of the counts (others give fewer), and had 368 damaged, among them the carrier Bunker Hill, on 11 May, with about 400 dead and missing.",
        "Third, the Shuri line. On 12 April and 4 May, the Japanese counterattacked along the whole front, and on 4 May they even tried landings behind the American lines. Both attacks failed, and the 32nd Army went back to defense. The Americans attacked on 19 April, with a barrage from 324 guns, but the tank thrust against Kakazu Ridge failed and cost 22 tanks. The advance went hill by hill, with [[flamethrowers|lança-chamas]] and grenades, against caves: Kakazu, Maeda (the 'Hacksaw Ridge'), Sugar Loaf, Conical. In late May, the monsoon rains turned the battlefield into mud.",
        "Fourth, the end in the south. The Japanese abandoned Shuri, and the Marines took the castle on 29 May. The 32nd Army fell back to the Kiyan peninsula, at the southern tip. On 13 June, Admiral Ōta and some 4,000 sailors killed themselves in the Oroku tunnels. Buckner died on 18 June. Organized resistance ended on 21 June, and Ushijima and Chō committed [[seppuku|seppuku]] in their headquarters on Hill 89.",
        { note: "Okinawans call the battle the 'typhoon of steel', for the amount of ordnance. It is often described as the largest combined land, sea and air battle in history." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The United States had about 12,500 dead and, in all, about 50,000 combat casualties. The Japanese lost between about 94,000 and 110,000 men, and the higher count includes Okinawan conscripts. It was the first time in the Pacific that thousands of Japanese soldiers surrendered, many of them Okinawans conscripted by force.",
        "Civilians paid the highest price. Estimates range from some 42,000 (an American calculation) to about 150,000 (a calculation by Okinawan historians), and the prefecture speaks of more than 100,000. Many died in the crossfire, of hunger or hiding in caves. There were mass suicides, which survivors say were ordered or encouraged by the soldiers, who handed out grenades. About 90% of the island's buildings were destroyed.",
        { h: "Why it matters" },
        "The Americans kept the island until 1972, and Kadena is still one of the largest American bases in Asia. The military presence is, to this day, a reason for protests by residents.",
        { h: "Curiosities and controversies" },
        { note: "The atomic bomb: some historians say the cost of Okinawa led the Americans to prefer the bombs to an invasion. Others point to several causes for Japan's surrender, among them the Soviet Union's entry into the war. The debate remains open." },
        { note: "The students: the army conscripted about 1,780 boys aged 14 to 17 into the Tekketsu Kinnōtai units, and close to half died. Female students served as nurses, among them the Himeyuri group. Roughly 2,000 students from 21 schools died." },
        { note: "The dead: the Cornerstone of Peace memorial, at Mabuni, opened in 1995, carves the names of all who died, of all nationalities, including Japanese and Americans. It has more than 240,000 names." },
        { note: "Sources: General Yahara survived and wrote an account from the Japanese side. Sources also still disagree on how many kamikazes took off from Taiwan and Kyushu, on naval losses and on the exact number of civilian dead." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  jena: {
    terrain: [
      { t: "hill", x: 82, y: 38, rx: 13, ry: 20, l: "Landgrafenberg" },
      { t: "note", x: 84, y: 66, l: "Jena and the Saale river" },
      { t: "note", x: 48, y: 5, l: "Auerstedt: another battle, 20 km north" },
      { t: "note", x: 4, y: 64, l: "Weimar" },
      { t: "note", x: 42, y: 66, l: "Vierzehnheiligen" }
    ],
    units: [
      { id: "lan", s: "a", k: "inf", w: 5, h: 12, l: "Lannes (5th Corps)" },
      { id: "sou", s: "a", k: "inf", w: 5, h: 11, l: "Soult and Saint-Hilaire" },
      { id: "aug", s: "a", k: "inf", w: 5, h: 10, l: "Augereau" },
      { id: "ney", s: "a", k: "inf", w: 4, h: 7, l: "Ney" },
      { id: "gua", s: "a", k: "inf", w: 4, h: 6, l: "Imperial Guard" },
      { id: "mur", s: "a", k: "cav", w: 5, h: 12, l: "Murat (cavalry)" },
      { id: "ten", s: "b", k: "inf", w: 4, h: 9, l: "Tauentzien" },
      { id: "hol", s: "b", k: "inf", w: 4, h: 7, l: "Holtzendorff" },
      { id: "hoh", s: "b", k: "inf", w: 5, h: 20, l: "Hohenlohe (Grawert and Zechwitz)" },
      { id: "cvp", s: "b", k: "cav", w: 5, h: 10, l: "Prussian and Saxon cavalry" },
      { id: "rue", s: "b", k: "inf", w: 5, h: 13, l: "Rüchel (coming from Weimar)" }
    ],
    steps: [
      { t: "On the night of 13 to 14 October, Lannes and the Guard occupy the Landgrafenberg hill, which the Prussians left empty. The other French corps follow along the roads. Hohenlohe's Prussians are on the plateau, and Rüchel is in Weimar. There is thick fog.",
        p: { lan: [76, 36], gua: [84, 38], sou: [80, 22], aug: [86, 54], ney: [92, 44], mur: [92, 30], ten: [56, 36], hol: [58, 8], hoh: [38, 38], cvp: [38, 56], rue: [14, 52] } },
      { t: "6 am: Lannes attacks Tauentzien's corps in the fog, near Closewitz, and takes the village. Tauentzien falls back to Vierzehnheiligen.",
        p: { lan: [64, 36], ten: [54, 36] } },
      { t: "Around 9 am, the fog lifts and Hohenlohe realizes he is facing the main army. He asks Rüchel for help and sends Grawert's infantry forward.",
        p: { hoh: [44, 38], ten: [52, 34], lan: [60, 36] } },
      { t: "Around 10 am, Saint-Hilaire's division comes out of hidden ground and hits Holtzendorff's flank, which falls apart and runs.",
        p: { sou: [64, 16], hol: [52, 8] }, x: ["hol"] },
      { t: "A mistake: Ney advances without orders, far from any support, and is surrounded, in square. Napoleon sends help and orders Lannes to advance. Hohenlohe hesitates for some two hours.",
        p: { ney: [56, 28], lan: [57, 37], hoh: [43, 38] } },
      { t: "Around 11:30, Augereau attacks from the south, in the defile, and the other French divisions arrive. Napoleon comes to have about 96,000 men on the field, although only about 54,000 end up fighting.",
        p: { aug: [56, 52], sou: [54, 24], lan: [52, 37], ney: [54, 30], gua: [70, 38] } },
      { t: "At 1 pm, general attack. The Prussian line gives way. Hohenlohe orders a retreat, and Murat's cavalry sweeps up the fleeing infantry.",
        p: { lan: [46, 37], aug: [48, 52], sou: [46, 24], mur: [44, 36], hoh: [30, 42], cvp: [30, 54] }, x: ["ten", "hoh"] },
      { t: "Rüchel reaches Kapellendorf, too late, and is crushed by the infantry and the cuirassiers. Murat enters Weimar after 4 pm. The battle of Jena is decided.",
        p: { rue: [20, 50], mur: [10, 54], lan: [34, 40], ney: [38, 34] }, x: ["rue", "cvp"] }
    ]
  },

  koniggratz: {
    terrain: [
      { t: "sea", x: 36, y: 0, w: 2, h: 70, l: "" },
      { t: "note", x: 34, y: 68, l: "Bistritz" },
      { t: "sea", x: 96, y: 0, w: 6, h: 70, l: "" },
      { t: "note", x: 91, y: 68, l: "Elbe" },
      { t: "hill", x: 66, y: 30, rx: 9, ry: 9, l: "Chlum and Lipa" },
      { t: "note", x: 44, y: 14, l: "Swiepwald forest" },
      { t: "note", x: 50, y: 52, l: "Problus" },
      { t: "note", x: 28, y: 36, l: "Sadowa" }
    ],
    units: [
      { id: "p1", s: "a", k: "inf", w: 5, h: 18, l: "First Army (Friedrich Karl)" },
      { id: "pSw", s: "a", k: "inf", w: 6, h: 7, l: "Fransecky (7th Division)" },
      { id: "pEl", s: "a", k: "inf", w: 5, h: 13, l: "Army of the Elbe (Herwarth)" },
      { id: "p2", s: "a", k: "inf", w: 12, h: 5, l: "Second Army (Crown Prince)" },
      { id: "pG", s: "a", k: "inf", w: 8, h: 4, l: "Guard (Hiller)" },
      { id: "pCv", s: "a", k: "cav", w: 5, h: 10, l: "Prussian cavalry" },
      { id: "bSax", s: "b", k: "inf", w: 5, h: 10, l: "Saxons (Problus)" },
      { id: "bCe", s: "b", k: "inf", w: 5, h: 14, l: "3rd and 10th Corps (Lipa and Chlum)" },
      { id: "bNo", s: "b", k: "inf", w: 5, h: 11, l: "2nd and 4th Corps" },
      { id: "bRe", s: "b", k: "inf", w: 5, h: 14, l: "Reserve (1st and 6th Corps)" },
      { id: "bAr", s: "b", k: "art", w: 3, h: 16, l: "Artillery on the hill" },
      { id: "bCv", s: "b", k: "cav", w: 5, h: 12, l: "Austrian cavalry" },
      { id: "fort", s: "b", k: "camp", w: 7, h: 6, l: "Königgrätz" }
    ],
    steps: [
      { t: "3 July, before dawn, in the rain. Benedek waits on the hills behind the Bistritz, with the fortress of Königgrätz at his back. The First Army, in the center, leaves camp at 2 am. The Army of the Elbe comes from the south. The Second Army is farther north and only received its order at about 4 am.",
        p: { p1: [24, 36], pSw: [28, 16], pEl: [24, 56], p2: [58, 3], pG: [48, 3], pCv: [14, 36], bSax: [52, 56], bCe: [62, 34], bNo: [62, 14], bRe: [76, 30], bAr: [56, 32], bCv: [84, 50], fort: [90, 40] } },
      { t: "Around 8 am, Horn's division takes Sadowa and crosses the stream. The Austrian artillery, on the hill, opens fire and holds up the advance.",
        p: { p1: [32, 36], bAr: [57, 32] } },
      { t: "At 8:30, Fransecky's division enters the Swiepwald forest and fights the corps of Festetics and Thun. The Austrians retake a good part of the forest by 11.",
        p: { pSw: [44, 16], bNo: [54, 14] } },
      { t: "The Army of the Elbe is slow. At 11 it only has two divisions across the stream, and the Saxons hold Problus. The First Army spends hours under the guns, and Benedek does not launch his cavalry.",
        p: { pEl: [36, 54], p1: [38, 36], bSax: [54, 54] } },
      { t: "Around 1 pm, the Second Army arrives from the north and hits Benedek's right flank. The Guard heads for Chlum.",
        p: { p2: [70, 7], pG: [64, 14], bNo: [58, 16] } },
      { t: "At 2:45, the Guard takes Chlum, one of the main hills of the Austrian line. Benedek's position is broken.",
        p: { pG: [66, 26], bCe: [70, 36] } },
      { t: "Benedek counterattacks with the reserve and retakes Rosberitz, but gets no farther. In the south, the Saxons counterattack at about 2 pm and are pushed out of Problus.",
        p: { bRe: [74, 28], bSax: [60, 56], pEl: [48, 54] } },
      { t: "Around 3 pm, Benedek orders a retreat to the Elbe bridges. The Austrian cavalry charges to cover the retreat and loses about 2,000 men. Moltke halts the battle at 6:30 pm.",
        p: { bCe: [82, 38], bNo: [78, 20], bSax: [74, 56], bRe: [84, 28], bAr: [78, 36], bCv: [72, 34], p1: [54, 36], pG: [70, 28], p2: [74, 14], pEl: [62, 54] } }
    ]
  },

  okinawa: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 52, h: 78, l: "East China Sea" },
      { t: "sea", x: 82, y: -2, w: 30, h: 78, l: "Pacific Ocean" },
      { t: "note", x: 50, y: 20, l: "Yontan and Kadena" },
      { t: "note", x: 50, y: 8, l: "Motobu" },
      { t: "note", x: 60, y: 46, l: "Shuri line" },
      { t: "note", x: 46, y: 62, l: "Oroku" },
      { t: "note", x: 56, y: 68, l: "Kiyan" }
    ],
    units: [
      { id: "fleet", s: "a", k: "ship", w: 6, h: 2.6, l: "Fifth Fleet (Spruance)" },
      { id: "mar6", s: "a", k: "inf", w: 5, h: 5, l: "6th Marine Division" },
      { id: "mar1", s: "a", k: "inf", w: 5, h: 5, l: "1st Marine Division" },
      { id: "army", s: "a", k: "inf", w: 6, h: 6, l: "24th Corps (Army)" },
      { id: "j32", s: "b", k: "inf", w: 12, h: 6, l: "32nd Army (Ushijima)" },
      { id: "jNav", s: "b", k: "inf", w: 5, h: 4, l: "Navy (Ōta)" },
      { id: "jYam", s: "b", k: "ship", w: 6, h: 2.6, l: "Yamato" },
      { id: "jAir", s: "b", k: "air", w: 3, h: 3, l: "Kamikazes" }
    ],
    steps: [
      { t: "Late March 1945. The American fleet arrives off the west coast of Okinawa. Ushijima does not defend the beaches: he waits in the south, on the Shuri line, in caves and tunnels, with about 100,000 men.",
        p: { fleet: [26, 30], mar6: [36, 26], mar1: [36, 33], army: [34, 40], j32: [60, 52], jNav: [48, 60], jYam: [86, 3], jAir: [70, 3] } },
      { t: "1 April, Easter Sunday. The Americans land at Hagushi almost without a shot and take the airfields of Yontan and Kadena before the day is out.",
        p: { mar6: [46, 26], mar1: [46, 33], army: [46, 40], fleet: [30, 30] } },
      { t: "The 6th Marine Division goes north and clears the Motobu peninsula. The Army turns south.",
        p: { mar6: [52, 10], army: [54, 44] } },
      { t: "6 and 7 April: the kamikaze attacks begin, and Yamato sails from Japan on a suicide mission. Carrier aircraft sink Yamato before she arrives. The mass attacks continue until June.",
        p: { jYam: [50, 2], jAir: [32, 26] }, x: ["jYam"] },
      { t: "April and May: the advance in the south is slow, hill by hill: Kakazu, Maeda, Sugar Loaf. The Japanese counterattack on 12 April and on 4 May, and fail.",
        p: { army: [58, 46], mar1: [52, 46], j32: [60, 52], jAir: [30, 40] } },
      { t: "Late May: the monsoon turns the field to mud. The Marines take Sugar Loaf, and the Army takes Conical Hill. Both sides of the Shuri core are exposed.",
        p: { mar1: [54, 49], army: [62, 49] } },
      { t: "29 May: Shuri Castle is taken. The 32nd Army has already fallen back to the far south, on the Kiyan peninsula.",
        p: { mar1: [54, 54], army: [62, 54], j32: [58, 64] } },
      { t: "4 to 13 June: Admiral Ōta and about 4,000 sailors kill themselves in the Oroku tunnels.",
        p: { mar1: [50, 58] }, x: ["jNav"] },
      { t: "18 June: General Buckner is killed by artillery fire. Organized resistance ends on 21 June, and Ushijima and Chō kill themselves.",
        p: { army: [60, 62], mar1: [52, 62], j32: [58, 68] }, x: ["j32"] }
    ]
  }
});
