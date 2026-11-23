// In-depth battles, batch bo: bagration, chosin, marcoral, marfilipinas, montecassino (great-battles pack).
// Checked against the English and Portuguese Wikipedia articles on Operation Bagration, the Vitebsk-Orsha, Bobruysk
// and Minsk offensives, the Parade of the Vanquished, and on the Battle of Chosin Reservoir, plus the works those pages
// cite (Frieser, Zaloga, Glantz and House for Bagration; Appleman, Roe, Millett, Yu Bin and PLA estimates for Chosin; the English Wikipedia articles on Coral Sea, Philippine Sea and Monte Cassino).

Object.assign(GLOSSARY, {
  "maskirovka": "Russian word for military deception: hiding the real troops, showing false ones and making the enemy look in the wrong place. The Soviets treated it as part of the plan, not as decoration.",
  "praça-forte alemã": "In German, 'Fester Platz': a city that Hitler ordered held to the end, even if surrounded, to slow the Soviet advance. In practice, it trapped the garrisons where they would be encircled.",
  "partisans soviéticos": "Guerrillas who operated behind the German lines in occupied Soviet territory. In 1944 they were ordered to blow up rails and cut telephone lines on the night of the attack.",
  "grupo de cavalaria e mecanizados": "A mixed Soviet unit, with cavalry and motorized troops, used to enter bad terrain (marshes, forests) where heavy tanks could not go.",
  "equipe de combate regimental": "In English, 'Regimental Combat Team' (RCT): an American regiment reinforced with artillery and other support, put together for a mission. RCT-31 was formed in a hurry in late 1950.",
  "geladura": "Damage to skin and muscle caused by extreme cold, which can lead to the loss of fingers, hands and feet. In the winter of 1950 in Korea, it killed and disabled thousands of soldiers.",
  "voluntários do povo chinês": "Official name of the Chinese troops sent to Korea in 1950. China called them volunteers so as not to declare war on the United States. In fact they were divisions of the regular army.",
  "katusa": "Acronym for 'Korean Augmentation to the US Army': South Korean soldiers who served inside American units.",
  "comandos reais": "The 'Royal Marines Commandos': an elite British marine unit, trained for difficult missions. 41 Commando fought at Chosin alongside the Americans.",
  "ponte treadway": "A demountable bridge, made of steel sections that fit together. At Chosin, the sections were dropped by parachute to repair the destroyed bridge."
});

Object.assign(DEEP, {
  bagration: {
    war: "Eastern Front of the Second World War (1941–1945)",
    hook: "In a few weeks, the Red Army destroyed an entire German army group and liberated Belarus.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 22 June 1941, Germany invaded the Soviet Union. Three years later, the war had turned. The Red Army had won at Stalingrad and at Kursk, and in early 1944 it recovered much of Ukraine. But in the centre of the front, Belarus was still occupied. There stood the German Army Group Centre, among forests, rivers and marshes, with the Moscow–Minsk highway as its axis.",
        "On 6 June 1944, the Allies landed in Normandy. The Soviet high command, the [[Stavka|stavka]], chose Belarus. The operation was named after Bagration, a Russian general of the 1812 war against Napoleon. The date was no accident: 22 June, the third anniversary of the German invasion.",
        { h: "The road to June 1944" },
        { timeline: [
          ["Late 1943", "The Red Army retakes Kiev and advances in Ukraine, but is stopped in Belarus."],
          ["Spring 1944", "The Stavka decides that the main blow will fall in the centre, not in the south."],
          ["31 May", "A Stavka directive sets the objectives of each front."],
          ["6 June", "Allied landing in Normandy."],
          ["19–20 June", "Guerrillas attack railways and communication lines behind the German lines."],
          ["22 June", "Operation Bagration begins."]
        ]},
        "The cleverest part was the deception. The Soviets used [[maskirovka|maskirovka]] to make the German command look south. Four tank armies were left in the Lvov region, and the Germans were left free to discover them. Hitler and the high command concluded that the offensive would come in Ukraine, and the panzer reserves stayed there. The Soviets also managed to hide the strategic reserves gathered for the centre."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "The Soviet side" },
        "The Stavka sent two representatives to coordinate the fronts: Marshal Aleksandr Vasilevsky and Marshal Georgy Zhukov. Each [[front|frente]] had its own commander. Ivan Bagramyan led the 1st Baltic Front, in the north. Ivan Chernyakhovsky, the 3rd Belorussian Front, which would encircle Vitebsk and go on to Minsk. Georgy Zakharov, the 2nd Belorussian Front, in the middle. Konstantin Rokossovsky, the 1st Belorussian Front, in the south, with the hardest mission: crossing marshy terrain to reach Bobruysk. Marshal of Armoured Troops Pavel Rotmistrov commanded the 5th Guards Tank Army, one of the spearheads of the offensive.",
        { h: "The German side" },
        "Field Marshal Ernst Busch commanded Army Group Centre. His main subordinates were Georg-Hans Reinhardt (3rd Panzer Army, at Vitebsk), Kurt von Tippelskirch (4th Army, in the middle) and Hans Jordan (9th Army, at Bobruysk). On 28 June, Hitler dismissed Busch and put Walter Model in his place, a general known for patching up collapsing fronts. Jordan fell too: he was replaced by Nikolaus von Vormann on 27 June.",
        "Hitler ordered Vitebsk, Orsha, Mogilev, Bobruysk and other cities to become [[fortified places|praça-forte alemã]]: they would be defended to the end, even if surrounded. The generals at the front protested. Jordan warned that either the army switched to a mobile defence or it would see its front smashed. That is what happened."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary by source. According to Frieser, Army Group Centre had, at the start, about 486,000 combat troops (849,000 counting support services), 118 tanks and 452 assault guns, 3,236 artillery pieces and 920 aircraft (only 602 fit to fly, according to another count). On the Soviet side, Frieser and Glantz and House give about 1.67 million men at the start, 3,841 tanks, 1,977 assault guns, more than 32,000 guns, mortars and rocket launchers ([[Katyusha|katyusha]]) and almost 8,000 aircraft. Counting the reserves, Frieser speaks of up to 2.5 million Soviets. The gap in artillery was ten to one; in the air, it was even greater.",
        { h: "The terrain" },
        "Belarus was a country of dense forests and marshes, with few roads and wide rivers: the Dvina, the Dnieper and the Berezina. The south was dominated by the Pripet marshes, which the Germans thought impassable for tanks. That is why the German defence was weaker there, and why Rokossovsky sent a force through.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on the night of 19 to 20 June, the [[Soviet partisans|partisans soviéticos]] blew up rails and cut communications. On 22 June, after an artillery preparation, the attack began at four points. North and south of Vitebsk, the 1st Baltic Front and the 3rd Belorussian Front broke the line in a few hours. Reinhardt's 3rd Panzer Army fell apart.",
        "Second, at Orsha, on the axis of the Moscow–Minsk highway, the 11th Guards Army attacked on 23 June. Soviet engineers went in front, with tanks dragging rollers to detonate mines. On 24 June, the 1st Guards Rifle Division opened a breach in a thinly defended stretch of marsh. The mechanized and cavalry groups passed through it, and the German line broke on 25 June. Orsha was liberated on the evening of the 26th. The 5th Guards Tank Army crossed the breach and raced for the Berezina.",
        "Third, on 24 June, the 1st Belorussian Front attacked the German 9th Army. About 7,000 guns, mortars and rocket launchers opened fire. Gorbatov's 3rd Army attacked from Rogachev, and Batov's 65th Army from the south. According to Soviet tradition, Rokossovsky wanted two blows and Stalin preferred one; the plan went ahead with both. At the same time, Pliev's [[cavalry-mechanized group|grupo de cavalaria e mecanizados]] entered along the edge of the Pripet marshes, took Slutsk and cut the 9th Army's exits to the south.",
        "Fourth, at Vitebsk, the 43rd and 39th Armies closed the ring behind the city and trapped the German LIII Corps. The divisions that tried to break the encirclement were destroyed on 25 and 26 June. The OKH denied the request to evacuate and Hitler even sent a staff officer in by parachute to enforce the order. Reinhardt managed to cancel it only by threatening to jump in himself. General Gollwitzer withdrew what he could of the garrison, in disobedience, when the Soviets were already entering the city. By 27 June, LIII Corps was destroyed: about 28,000 to 30,000 men, almost all killed or taken prisoner.",
        "Fifth, at Bobruysk, on 27 June, five divisions of XXXV Corps were trapped east of the Berezina, with part of XXXXI Panzer Corps. Soviet aviation and artillery pounded the columns trying to break the encirclement. The 9th Army was declared destroyed on 28 June. Bobruysk fell on 29 June after street fighting. About 12,000 Germans escaped, most of them without weapons. The Soviets closed the southern road to Minsk.",
        "Sixth, at Mogilev, the 49th Army crossed the Dnieper on 27 June and took the city. Hitler authorized Busch to fall back to the Berezina only on 26 June, too late. The bulk of the 4th Army reached the crossings on 30 June and crossed by 2 July, under heavy bombardment. The vanguards of the 5th Guards Tank Army were already on the Berezina on 28 June. That day, Model took over the army group.",
        "Seventh, on 3 July, the 2nd Guards Tank Corps entered Minsk in the early hours. The 5th Tank Army and the 65th Army closed the ring west of the city, and the German 4th Army and the remnants of the 9th were left trapped in a [[pocket|bolsão]] to the east. The 5th Panzer Division, sent as reinforcement, could not save the city. Minsk was liberated on 4 July. It is estimated that about 100,000 Germans were in the pocket, of whom some 40,000 were killed or went missing, and most of the rest were captured. General Vincenz Müller, who commanded the encircled troops, was captured on 8 July and ordered the surrender; many groups kept trying to escape until the middle of the month.",
        "Eighth, the offensive pressed on westward without stopping. The 1st Baltic Front cleared Polotsk on 4 July. Molodechno fell on 5 July, and Vilnius was surrounded on the 8th. The 6th Panzer Division counter-attacked on 12 July and briefly opened an escape corridor, but the city fell on 13 July. The 1st Belorussian Front, in another operation, the Lublin–Brest offensive, took Lublin on 24 July and Brest on 28 July, and by 2 August it already held bridgeheads on the Vistula. The offensive slowed in August, when the supply lines stretched too far and the Germans, bringing in troops from every side, closed the gap between Army Groups Centre and North."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "The operation lasted from 22 June to 19 August 1944. Army Group Centre lost about 28 divisions. Between 22 June and 4 July, it lost 25 divisions and 300,000 men, and another 100,000 in the following weeks, according to English Wikipedia. The Red Army retook all of Belarus, most of Lithuania and a strip of eastern Poland.",
        { h: "The parade of the vanquished" },
        "On 17 July 1944, about 57,000 German prisoners, most of them from the Minsk pocket, were made to march through the streets of Moscow. Twenty men to a row, they took about 90 minutes to pass. It became known as the 'parade of the vanquished', and Stalin wanted to show the world that the war was won.",
        { h: "The losses" },
        { note: "German losses are disputed. Frieser counts 399,102 German casualties (26,397 killed, 109,776 wounded and 262,929 missing or captured). Zaloga speaks of 300,000 to 375,000 killed, missing and captured. Glantz and House estimate around 450,000 combat casualties, and Isayev about 500,000. On the Soviet side, Glantz and House give about 770,000 casualties in all, wounded included. According to Krivosheev, the Soviets lost 2,957 tanks and assault guns, 2,447 guns and 822 aircraft." },
        { h: "Consequences" },
        "The Soviets reached the Vistula, a few kilometres from Warsaw. On 1 August, the Polish resistance began the Warsaw Uprising, which lasted until October. The Red Army did not enter the city, and historians still argue whether it was for lack of strength and supplies or out of political calculation. The destruction of Army Group Centre left Germany without reserves to defend its eastern borders, and in January 1945 the Soviet offensive would reach the Oder.",
        { note: "Help from outside. An American author says that more than 220,000 Dodge and Studebaker trucks, supplied by the United States, motorized the Soviet infantry. It is one author's claim, not a consensus figure." }
      ]}
    ]
  },

  chosin: {
    war: "Korean War (1950–1953)",
    hook: "Surrounded at the end of the world, at −38 °C, some 30,000 UN troops fought their way to the sea on foot.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The Korean War began in June 1950, when North Korea invaded the south. The Americans, in the name of the UN, came to its rescue. In September, General Douglas MacArthur landed at Inchon and turned the war around. UN troops crossed the 38th parallel and advanced through the north, toward the Yalu River, the border with China.",
        "China warned that it would not stand still. On 19 October, Chinese troops crossed the Yalu in secret. The Americans did not believe in the size of the threat. In late November, MacArthur ordered the 'Home by Christmas' offensive, with the promise that the war would be over by the end of the year. The American X Corps, commanded by General Edward Almond, was to advance west of the Chosin Reservoir to cut a Chinese supply line. It had a front of about 640 kilometres to defend, spread too thin.",
        { h: "The road to Chosin" },
        { timeline: [
          ["Sept. 1950", "Landing at Inchon and turn of the war."],
          ["19 Oct.", "Chinese troops cross the Yalu in secret."],
          ["2 Nov.", "The 1st Marine Division fights the Chinese 124th Division near Wonsan."],
          ["17 Nov.", "The Chinese 9th Corps reaches the reservoir area unnoticed."],
          ["21 Nov.", "Almond draws up the plan to advance west through Yudam-ni."],
          ["27 Nov.", "The Chinese attack. The next day, Yudam-ni, Sinhung-ni, Hagaru-ri and Koto-ri are cut off."]
        ]},
        "The only way back was a road of about 126 kilometres, running from Hungnam, on the coast, to the reservoir, and climbing through narrow passes. Whoever controlled the road would control the retreat."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Oliver P. Smith and Edward Almond" },
        "Major General Oliver P. Smith commanded the 1st Marine Division. He believed, unlike Tokyo, that there were many Chinese in North Korea. Almond thought him too cautious, but Smith slowed the advance, kept most of the division together at Yudam-ni and set up depots and airstrips at Hagaru-ri and Koto-ri. That caution saved the division. Almond, commander of X Corps, was closer to MacArthur's optimism.",
        { h: "Song Shilun" },
        "On the Chinese side, Mao Zedong ordered, on 31 October, the destruction of four UN divisions. The commander of the 9th Corps was Song Shilun. The [[Chinese People's Volunteers|voluntários do povo chinês]], under the overall command of Peng Dehuai, arrived on foot, with almost no winter clothing, not enough food and no heavy artillery. Two corps, the 20th and the 27th, formed the main attack, and the 26th stayed in reserve for lack of food.",
        { h: "The men on the front line" },
        "Captain William Barber commanded Fox Company of the 7th Marine Regiment, which was stranded on a hill above the Toktong Pass. Colonel Allan MacLean and Lieutenant Colonel Don Faith led the Army's RCT-31, east of the reservoir. Lieutenant Colonel Douglas Drysdale commanded the task force with the British 41 Commando. Colonels Homer Litzenberg (7th Regiment) and Raymond Murray (5th) commanded the Marines at Yudam-ni."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The 1st Marine Division had about 25,500 men at the start, and the UN forces rose to some 30,000, with the British 41 Commando and the equivalent of two regiments of the Army's 3rd and 7th Divisions. The Chinese had 12 divisions of about 10,000 men each, according to the usual estimate of 120,000. Some historians revise this total downward, to as low as 60,000, because prisoners spoke of 6,500 to 7,000 per division. Marine aviation and the carriers of Task Force 77 could fly some 230 sorties a day, and the Air Force dropped about 250 tons of supplies a day.",
        { h: "The terrain and the cold" },
        "Steep mountains, single-lane dirt roads and a cold that reached −38 °C, after a Siberian front on 14 November. Blood plasma froze, weapons jammed, grease turned to gel and batteries died. Medics thawed morphine ampoules in their mouths. The Chinese suffered even more: poorly clothed, they had 700 casualties from [[frostbite|geladura]] on the very day they entered Korea. According to English Wikipedia, more Chinese died of cold than in combat and air raids.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, in late November, the division was strung out along the road: the 5th and 7th Regiments at Yudam-ni, west of the reservoir; battalions at Hagaru-ri, in the south; battalions of the 1st Regiment at Koto-ri; and the Army's RCT-31, put together in a hurry, on the east shore. The Chinese were hidden in the hills.",
        "Second, on the night of 27 to 28 November, three regiments of the Chinese 79th Division attacked the ridges north and northwest of Yudam-ni. The Marines held the line, and at dawn nobody had given way. The same happened around Hagaru-ri, where the Chinese 172nd and 173rd Regiments took the east hill. The road was cut in several places.",
        "Third, on 29 November, Lieutenant Colonel Drysdale left Koto-ri for Hagaru-ri with 921 men from 41 Commando, a Marine company and an Army company, along a road that came to be called 'Hell Fire Valley'. He arrived with about 300 infantrymen and had 162 dead or missing and 159 wounded. The same day, Colonel MacLean disappeared on the ice, on the east shore, after going to meet soldiers he took for Americans. Chinese sources say he was shot on the spot, and UN prisoners said he died later of his wounds.",
        "Fourth, on 30 November, Colonels Litzenberg and Murray ordered the departure from Yudam-ni. On 1 December, RCT-31 tried to break the encirclement on the east shore. Lieutenant Colonel Faith, hit by a grenade while leading the attack on a roadblock under Hill 1221, died of his wounds. Of the roughly 2,500 men of RCT-31, some 1,050 reached Hagaru-ri, and only 385 were fit to fight. The unit received its presidential citation only in 1999.",
        "Fifth, at Hagaru-ri, almost everyone went to the line: Marines, engineers and support men. The airstrip, still under construction, opened on 1 December. On 2 December, Fox Company, which held out for five days against the Chinese 59th Division, helped by the artillery at Hagaru-ri and Corsair fighters, joined the 1st Battalion of the 7th Regiment and the Toktong Pass was cleared.",
        "Sixth, the Yudam-ni column, with the 7th Regiment in front and the 5th covering the rear, reached Hagaru-ri on the afternoon of 3 December. The withdrawal from Yudam-ni ended on 4 December. The most famous line of the campaign is attributed to General Smith at this moment: 'Retreat, hell! We're not retreating, we're just advancing in a different direction.' It appears in accounts from 1950, but it should be treated as an attribution, not a transcript.",
        "Seventh, on 6 December, the column left Hagaru-ri, with the 7th Regiment in front and the 5th at the rear. On 7 December it reached Koto-ri. Some of the wounded left by plane and helicopter.",
        "Eighth, at Funchilin, the Chinese 180th Regiment, on Hill 1081, blew up the concrete bridge and two improvised bridges, thinking they could not be repaired. The Americans dropped by parachute eight sections of [[Treadway bridge|ponte treadway]], 18 feet (5.5 m) each, from C-119 aircraft. On 9 December, Marine and Army engineers assembled four sections, with wooden extensions. The same day, the 1st Battalion of the 1st Regiment took Hill 1081, where the defenders fought to the last man. The last soldiers left the pass on 11 December and reached Hungnam at 9 pm.",
        "Ninth, General MacArthur ordered X Corps evacuated on 8 December. A fleet of 193 ships carried troops, equipment and part of the Korean refugees. The last UN soldier left at 2:36 pm on 24 December, and the port was destroyed. The cargo ship SS Meredith Victory, built for about 12 passengers, carried about 14,000 refugees. In all, about 105,000 soldiers, 98,000 civilians, 17,500 vehicles and 350,000 tons of supplies went to Pusan."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "X Corps and the South Korean I Corps recorded 10,495 battle casualties: 4,385 American Marines, 3,163 Army soldiers, 2,812 South Koreans and 78 British Royal Marines. The 1st Marine Division also counted 7,338 non-battle casualties, mostly from the cold, and the total came to 17,833. On the Chinese side, a 1988 estimate by the Chinese army gives 21,366 battle casualties (7,304 killed) and 30,732 non-combat, a total of 52,098. Roe cites as many as 60,000.",
        { h: "Who won?" },
        "Historians disagree. Appleman says both sides can claim victory. Millett calls it a Chinese 'geographic victory' that did not destroy the Marine division. The Chinese Academy of Military Science says the 9th Corps won, by protecting the eastern flank and inflicting more than 10,000 casualties on the UN. Cohen sees it as a UN victory, since it left the 9th Corps out of action until March 1951. For Yu Bin, the corps became 'a giant hospital' and did not destroy the UN troops, as it had planned.",
        { note: "The cost to the Chinese. The Chinese order of battle fell from 30 infantry divisions, on 16 November, to 18, on 31 December. Eight elite divisions of the 20th and 27th Corps were weakened, and two were disbanded. The Chinese 9th Corps was out of action for about three months, according to Yan Xue." },
        { note: "Honours. The 1st Marine Division, 41 Commando and RCT-31 received the Presidential Unit Citation. Fourteen Marines, two Army soldiers and one Navy pilot received the Medal of Honor for Chosin: 17 in all, and 78 Service Crosses." },
        { note: "The 'Chosin Few'. The American veterans of the battle came to be known by this name. For many historians, it was one of the hardest battles in American history, for the cold, the distance and the number of casualties." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  bagration: {
    terrain: [
      { t: "hill", x: 50, y: 66, rx: 30, ry: 6, l: "Pripet marshes" },
      { t: "note", x: 60, y: 41, l: "Berezina River" },
      { t: "note", x: 80, y: 41, l: "Dnieper River" },
      { t: "note", x: 62, y: 3, l: "Dvina River" },
      { t: "note", x: 14, y: 69, l: "Schematic, not to scale" },
      { t: "note", x: 96, y: 69, l: "North ↑" }
    ],
    units: [
      { id: "a1B", s: "a", k: "inf", w: 4, h: 8, l: "1st Baltic Front (Bagramyan)" },
      { id: "a3B", s: "a", k: "inf", w: 4, h: 8, l: "3rd Belorussian (Chernyakhovsky)" },
      { id: "a2B", s: "a", k: "inf", w: 4, h: 8, l: "2nd Belorussian (Zakharov)" },
      { id: "a1Bel", s: "a", k: "inf", w: 4, h: 10, l: "1st Belorussian (Rokossovsky)" },
      { id: "a5T", s: "a", k: "tank", w: 6, h: 3, l: "5th Tank Army (Rotmistrov)" },
      { id: "aPl", s: "a", k: "cav", w: 6, h: 3, l: "Pliev's group" },
      { id: "b3P", s: "b", k: "inf", w: 4, h: 10, l: "3rd Panzer Army" },
      { id: "b4A", s: "b", k: "inf", w: 4, h: 12, l: "4th Army" },
      { id: "b9A", s: "b", k: "inf", w: 4, h: 10, l: "9th Army" },
      { id: "bVit", s: "b", k: "camp", w: 5, h: 3, l: "Vitebsk" },
      { id: "bOrs", s: "b", k: "camp", w: 5, h: 3, l: "Orsha" },
      { id: "bMog", s: "b", k: "camp", w: 5, h: 3, l: "Mogilev" },
      { id: "bBob", s: "b", k: "camp", w: 5, h: 3, l: "Bobruysk" },
      { id: "bMin", s: "b", k: "camp", w: 5, h: 3, l: "Minsk" },
      { id: "bRes", s: "b", k: "tank", w: 6, h: 3, l: "Panzer reserves" }
    ],
    steps: [
      { t: "Before the attack, June 1944. Army Group Centre is in line, with cities turned into fortified places: Vitebsk, Orsha, Mogilev and Bobruysk. Four Soviet fronts wait to the east, and the tanks are still behind. The Germans expect the blow in the south.",
        p: { a1B: [84, 7, 0], a3B: [86, 19, 0], a2B: [86, 31, 0], a1Bel: [84, 48, 0], a5T: [92, 24, 0], aPl: [84, 58, 0],
             b3P: [76, 10, 0], b4A: [78, 29, 0], b9A: [74, 49, 0], bVit: [71, 12, 0], bOrs: [73, 24, 0], bMog: [72, 33, 0], bBob: [64, 46, 0], bMin: [47, 33, 0], bRes: [38, 42, 0] } },
      { t: "22 and 23 June. After the guerrillas cut the railways, the 1st Baltic Front and the 3rd Belorussian attack north and south of Vitebsk and break the line in a few hours. On the axis of the Moscow–Minsk highway, the attack on Orsha begins on 23 June. The 2nd Belorussian goes for Mogilev.",
        p: { a1B: [72, 6, 90], a3B: [76, 18, 90], a2B: [80, 32, 0] } },
      { t: "24 June. The 1st Belorussian Front attacks the 9th Army: Gorbatov's 3rd Army comes from the north, Batov's 65th from the south. Pliev's group enters along the edge of the Pripet marshes to close the exit. The 5th Guards Tank Army waits behind the Orsha breach.",
        p: { a1Bel: [70, 44, 90], aPl: [66, 59, 0], a5T: [86, 24, 0] } },
      { t: "25 to 27 June. At Vitebsk, the 43rd and 39th Armies close the ring and destroy LIII Corps (about 28,000 to 30,000 men). Orsha is liberated on 26 June, and the 5th Tank Army passes through the breach toward the Berezina.",
        p: { a1B: [68, 8, 90], a3B: [71, 15, 90], a5T: [70, 25, 0], b3P: [76, 6, 0] }, x: ["bVit", "bOrs"] },
      { t: "27 to 29 June. At Bobruysk, five divisions of XXXV Corps are trapped east of the Berezina. Soviet aviation and artillery hit the columns trying to flee. The 9th Army is declared destroyed on 28 June, and Bobruysk falls on 29 June. About 12,000 Germans escape, almost without weapons.",
        p: { a1Bel: [64, 46, 90], aPl: [56, 54, 0] }, x: ["b9A", "bBob"] },
      { t: "28 June to 2 July. The vanguards of the 5th Tank Army reach the Berezina on 28 June. Busch is dismissed, and Model takes over. Mogilev falls. The 4th Army, at last allowed to fall back, runs for the Berezina crossings under bombardment.",
        p: { a5T: [58, 28, 0], a2B: [68, 33, 90], b4A: [62, 32, 90] }, x: ["bMog"] },
      { t: "3 and 4 July. The 2nd Guards Tank Corps enters Minsk in the early hours, and the 5th Tank Army and the 65th Army close the ring to the west. The German 4th Army and the remnants of the 9th are trapped in a pocket east of Minsk, about 100,000 men, of whom some 40,000 killed or missing. Minsk is liberated on 4 July.",
        p: { a5T: [40, 30, 0], aPl: [48, 48, 0], a1Bel: [56, 44, 0], a3B: [56, 28, 90], b4A: [52, 32, 0] }, x: ["bMin"] },
      { t: "4 to 13 July. The 1st Baltic Front takes Polotsk on 4 July. Molodechno falls on the 5th, and Vilnius is surrounded on the 8th. The 6th Panzer Division counter-attacks on 12 July and briefly opens a corridor, but the city falls on the 13th. On 17 July, about 57,000 prisoners march through Moscow.",
        p: { a1B: [58, 12, 90], a3B: [30, 22, 90], a5T: [34, 26, 0], bRes: [27, 28, 0] }, x: ["b4A"] },
      { t: "Late July and August. The 1st Belorussian Front, in the Lublin–Brest offensive, takes Lublin on 24 July and Brest on 28 July, and reaches the Vistula. The operation ends on 19 August, with the Soviets exhausted and the Germans out of reserves.",
        p: { a1Bel: [14, 58, 90], aPl: [18, 54, 0], a2B: [40, 36, 0], a1B: [48, 8, 90], a5T: [24, 36, 0] } }
    ]
  },

  chosin: {
    terrain: [
      { t: "sea", x: 40, y: 4, w: 16, h: 34, l: "Chosin Reservoir" },
      { t: "sea", x: 84, y: 40, w: 28, h: 36, l: "Sea of Japan" },
      { t: "hill", x: 56, y: 58, rx: 8, ry: 6, l: "Funchilin" },
      { t: "note", x: 22, y: 26, l: "Yudam-ni road" },
      { t: "note", x: 96, y: 4, l: "North ↑" },
      { t: "note", x: 12, y: 68, l: "Schematic, not to scale" }
    ],
    units: [
      { id: "m5", s: "a", k: "inf", w: 5, h: 3, l: "5th Marines (Yudam-ni)" },
      { id: "m7", s: "a", k: "inf", w: 5, h: 3, l: "7th Marines" },
      { id: "fox", s: "a", k: "camp", w: 4, h: 2.5, l: "Fox Co. (Toktong)" },
      { id: "rct", s: "a", k: "inf", w: 5, h: 3, l: "RCT-31 (MacLean and Faith)" },
      { id: "hag", s: "a", k: "camp", w: 6, h: 4, l: "Hagaru-ri" },
      { id: "kot", s: "a", k: "camp", w: 6, h: 4, l: "Koto-ri" },
      { id: "dry", s: "a", k: "inf", w: 4, h: 2.5, l: "Task Force Drysdale" },
      { id: "hun", s: "a", k: "camp", w: 6, h: 4, l: "Hungnam" },
      { id: "shp", s: "a", k: "ship", w: 5, h: 2.5, l: "Evacuation fleet" },
      { id: "p79", s: "b", k: "inf", w: 5, h: 3, l: "79th Division" },
      { id: "p59", s: "b", k: "inf", w: 5, h: 3, l: "59th Division" },
      { id: "pE", s: "b", k: "inf", w: 5, h: 3, l: "Chinese divisions (east)" },
      { id: "p172", s: "b", k: "inf", w: 5, h: 3, l: "172nd and 173rd Regiments" },
      { id: "p180", s: "b", k: "inf", w: 5, h: 3, l: "180th Regiment" }
    ],
    steps: [
      { t: "Late November 1950. The division is strung out along the only road: the 5th and 7th Regiments at Yudam-ni, one company (Fox) in the Toktong Pass, battalions at Hagaru-ri, the 1st Regiment at Koto-ri and the Army's RCT-31 on the east shore. The port of Hungnam is 126 km away. The Chinese wait hidden in the hills.",
        p: { m5: [26, 13, 0], m7: [30, 19, 0], fox: [38, 28, 0], rct: [62, 14, 0], hag: [48, 41, 0], kot: [48, 53, 0], dry: [52, 55, 0], hun: [80, 62, 0], shp: [96, 52, 0],
             p79: [20, 6, 0], p59: [34, 20, 0], pE: [72, 8, 0], p172: [58, 34, 0], p180: [64, 50, 0] } },
      { t: "27 and 28 November, at night, at −38 °C. The Chinese attack every point at once: Yudam-ni, Fox Company, RCT-31 and Hagaru-ri. The road is cut in several places. At Yudam-ni, the Marines hold the line, and at Hagaru-ri the Chinese take the east hill.",
        p: { p79: [24, 11, 0], p59: [37, 25, 0], pE: [64, 12, 0], p172: [52, 37, 0] } },
      { t: "29 November. Task Force Drysdale, with the British 41 Commando, leaves Koto-ri and fights its way along the road to Hagaru-ri, under fire from both sides. It arrives with about 300 infantrymen and loses 162 dead or missing and 159 wounded. On the east shore, Colonel MacLean disappears on the ice.",
        p: { dry: [48, 46, 0], rct: [62, 18, 0] } },
      { t: "30 November and 1 December. The Marines are ordered out of Yudam-ni. RCT-31, in the east, tries to break the encirclement along the frozen shore. Lieutenant Colonel Faith dies on 1 December. Of some 2,500 men, only about 1,050 reach Hagaru-ri, and 385 can fight.",
        p: { rct: [58, 32, 0], m5: [28, 15, 0], m7: [32, 21, 0] } },
      { t: "1 and 2 December. The Hagaru-ri airstrip opens on 1 December, and the wounded begin to leave by air. On 2 December, Fox Company, which held out for five days, and the 1st Battalion of the 7th Regiment clear the Toktong Pass, opening the road between Yudam-ni and Hagaru-ri.",
        p: { rct: [52, 43, 0], m7: [36, 25, 0], fox: [38, 27, 0] } },
      { t: "3 and 4 December. The Yudam-ni column, with the 7th Regiment in front and the 5th at the rear, reaches Hagaru-ri on the afternoon of 3 December. The withdrawal ends on 4 December. Around this time Smith is credited with: 'Just advancing in a different direction'.",
        p: { m7: [46, 38, 0], m5: [40, 31, 0], fox: [42, 34, 0], p79: [30, 15, 0], p59: [38, 27, 0] } },
      { t: "6 and 7 December. The column leaves Hagaru-ri and reaches Koto-ri on 7 December, with the Chinese attacking the flanks and the rear along the road.",
        p: { m7: [50, 52, 0], m5: [48, 46, 0], dry: [45, 50, 0], fox: [47, 44, 0], p172: [54, 44, 0] } },
      { t: "9 to 11 December. At Funchilin, the Chinese 180th Regiment dynamites the bridge. Bridge sections dropped by parachute are assembled on 9 December, the same day Hill 1081 is taken. The last men leave the pass on 11 December.",
        p: { m7: [60, 58, 0], m5: [54, 54, 0], dry: [57, 56, 0], p180: [62, 52, 0] }, x: ["p180"] },
      { t: "11 to 24 December. In the Hungnam perimeter, 193 ships carry about 105,000 soldiers, 98,000 civilians, 17,500 vehicles and 350,000 tons of supplies. The last UN soldier leaves at 2:36 pm on 24 December. The Meredith Victory carried some 14,000 refugees.",
        p: { m5: [76, 62, 0], m7: [78, 66, 0], dry: [74, 64, 0], shp: [90, 58, 0] } }
    ]
  }
});

Object.assign(GLOSSARY, {
  "grupo aéreo embarcado": "The set of aircraft on a carrier: fighters, dive bombers and torpedo planes. Each carrier had its own, with a few dozen machines.",
  "vapor de gasolina": "Aviation gasoline evaporates easily, and the vapor explodes at the slightest spark. On a ship, a leak in the fuel tanks can become a bomb hours after the attack.",
  "frota móvel japonesa": "Name of the main carrier force of the Imperial Japanese Navy from 1944, under Admiral Ozawa.",
  "petroleiro de esquadra": "A tanker that sails with the fleet to refuel the other ships at sea. Without it, carriers and cruisers cannot stay long away from base.",
  "submarino de esquadra": "A large submarine built to accompany fleets and attack warships. The Americans used them as sentinels and hunters.",
  "linha gustav": "German defensive line that cut across central Italy from side to side, resting on mountains and rivers. The town of Cassino and the mountain above it were its strongest point.",
  "gurcas": "Soldiers from Nepal who served in the British and Indian armies, famous for their courage and for the curved knife, the kukri.",
  "goumiers": "Moroccan soldiers of the French troops, recruited in the Atlas mountains. In 1944, they became famous for marching through mountains the Germans thought impassable.",
  "linha hitler": "The second German defensive line, behind the Gustav, in the Liri valley. The Germans built it to have somewhere to fall back to.",
  "abadia de cassino": "A Benedictine monastery founded by St Benedict around 529, on top of Monte Cassino. It dominated the town and the road to Rome."
});

Object.assign(DEEP, {
  marcoral: {
    war: "Pacific War (1941–1945)",
    hook: "Two carrier fleets fought without ever seeing each other, and Japan was stopped for the first time.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Pearl Harbor, Japan conquered the Philippines, Malaya, the Dutch East Indies and much of the Pacific in a few months. In 1942, it wanted to take one more step: Operation MO. The plan was to seize Tulagi, in the Solomon Islands, and Port Moresby, in New Guinea, from where the Japanese would be close to Australia. The operation was commanded by Vice Admiral Shigeyoshi Inoue.",
        "But the Americans had already broken the Japanese naval codes and knew the plan. Admiral Frank Jack Fletcher was sent to the Coral Sea with the carriers Yorktown and Lexington.",
        { h: "The road to the Coral Sea" },
        { timeline: [
          ["3 May 1942", "The Japanese occupy Tulagi, which was undefended."],
          ["4 May", "Yorktown's aircraft attack Tulagi and sink a destroyer and several minesweepers."],
          ["5–6 May", "The two sides look for each other without finding each other. The carriers come within about 130 km of one another, at night."],
          ["7 May", "Both sides attack the wrong targets. The Americans sink the light carrier Shoho."],
          ["8 May", "The carriers attack each other. The Lexington is lost, the Shokaku is damaged."]
        ]},
        "It was the first time in history that two carrier groups fought each other, and the ships never saw each other or fired at each other. The whole battle was fought by aircraft, dozens of kilometres apart."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "The American and Australian side" },
        "Rear Admiral Frank Jack Fletcher commanded Task Force 17 (carrier Yorktown) and was the overall commander. Rear Admiral Aubrey Fitch commanded Task Force 11, with the Lexington. Rear Admiral John Crace led a group of Australian and American cruisers.",
        { h: "The Japanese side" },
        "Vice Admiral Inoue commanded Operation MO from afar. Vice Admiral Takeo Takagi led the carrier strike force, with the Shokaku and the Zuikaku. Rear Admiral Chuichi Hara commanded the carrier aircraft. Rear Admiral Aritomo Goto covered the Tulagi force with the light carrier Shoho.",
        { h: "A pilot" },
        "Robert Dixon, a pilot from the Lexington, signalled that the attack on the Shoho had succeeded, with the message that became famous: 'Scratch one flat top!' (Cross off one carrier!)."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "On 7 May, the two American carriers carried about 128 aircraft (66 on the Lexington and 62 on the Yorktown), the [[air group|grupo aéreo embarcado]] of each, according to one count. The three Japanese carriers had about 139 (58 on the Shokaku, 63 on the Zuikaku and 18 on the Shoho). The real numbers each day vary with aircraft damaged and lost.",
        { h: "The terrain" },
        "An open sea, between New Guinea, the Solomon Islands and the northeast coast of Australia, with cloudy skies in some stretches. The clouds helped both sides hide and hampered the searches, and were one of the reasons for the misidentifications on both days.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, on 3 May, the Japanese occupied Tulagi without a fight. The Port Moresby invasion convoy left Rabaul, with the carriers in support.",
        "Second, on 4 May, the Yorktown, informed by the codes, sent aircraft to Tulagi and sank the destroyer Kikuzuki and several minesweepers.",
        "Third, on 5 and 6 May, the American groups joined up and refuelled. Both sides looked for the enemy without finding him. On one of the nights, the carriers came within about 70 nautical miles of each other.",
        "Fourth, on 7 May, the morning was one of mistakes. Japanese aircraft found the oiler Neosho and the destroyer Sims and took them for carriers. The Sims broke in two and sank, and only 14 of the 192 crew survived. The Neosho, hit by seven bombs, was left drifting.",
        "Fifth, at 10:40, American aircraft found the Shoho. Those from the Lexington hit her with two 1,000-pound bombs and five torpedoes, and those from the Yorktown added more. The Shoho sank at 11:35, and only 203 of her 834 crew were recovered.",
        "Sixth, in the afternoon, Japanese bombers from Rabaul attacked Crace's cruisers and, thinking they had sunk a battleship, only damaged them lightly. Crace told Fletcher that he could not carry out the mission without air cover. At night, American fighters, guided by radar, shot down seven Japanese torpedo planes and one dive bomber, and the attack was called off.",
        "Seventh, on 8 May, at 8:20, a pilot from the Lexington found the Japanese carriers. Two minutes later, a plane from the Shokaku found the Americans. The Japanese launched 69 aircraft and the Americans 75. The Shokaku took three bombs and had her deck wrecked, and withdrew at 12:10. The Yorktown took one bomb, which killed or seriously wounded 66 men. The Lexington took two torpedoes and two bombs.",
        "Eighth, the fires on the Lexington seemed under control, but at 12:47 a spark ignited the [[gasoline vapor|vapor de gasolina]] from the ruptured tanks, and there were explosions. The crew abandoned ship at 17:07, and the destroyer Phelps sank her with torpedoes at 19:15. Fletcher, thinking he faced larger forces, withdrew. Takagi told Inoue that he had sunk two carriers but, without enough aircraft, could not cover the invasion. Inoue ordered the convoy to turn back."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "The Americans lost the Lexington, the Sims and the Neosho (41,826 long tons). The Japanese lost the Shoho, a destroyer and several small ships (about 19,000 tons). In aircrew, Japan lost 90 and the United States 35. English Wikipedia gives about 715 Allied dead and 966 Japanese, and about 69 aircraft destroyed on each side (69 to 97, in the Japanese case).",
        { h: "Tactical victory, strategic defeat" },
        "In ships sunk, the Japanese won. But it was the first time since the start of the war that a major Japanese advance was stopped: Inoue cancelled the landing at Port Moresby. And the cost showed a month later. The Shokaku needed two to three months of repairs, and the Zuikaku was left without aircraft and pilots. Neither was at Midway. The Yorktown was repaired in three days and went there.",
        { note: "Who won? Historians speak of a Japanese tactical victory and an Allied strategic victory. The commanders themselves were not sure: Takagi thought he had sunk two American carriers, and Fletcher pulled back fearing larger forces. According to English Wikipedia, Admiral Yamamoto even ordered Inoue to complete the invasion, but Inoue kept the order to turn back." },
        { note: "Misidentifications. On 7 May, the Japanese attacked an oiler and a destroyer, taken for carriers. The battle shows how hard it was to find and identify ships from the air, with bad weather and wrong reports." }
      ]}
    ]
  },

  marfilipinas: {
    war: "Marianas campaign, Pacific War (1944)",
    hook: "In two days, Japan lost about 90% of its carrier aircraft.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 15 June 1944, American Marines landed on Saipan, in the Mariana Islands. From Saipan, American bombers could reach Japan. For Japan, losing the Marianas meant losing the defence of the country. The Imperial Navy then adopted Operation A-Go, a plan for a decisive battle against the American fleet, based on the documents the Americans recovered after the death of Admiral Koga.",
        { h: "The road to the Marianas" },
        { timeline: [
          ["Early June 1944", "Japan adopts Operation A-Go."],
          ["15 June", "The Americans land on Saipan."],
          ["19 June", "Four waves of Japanese attack. The submarines Albacore and Cavalla sink the Taiho and the Shokaku."],
          ["20 June", "The Americans attack at dusk, at the limit of their range. The aircraft return at night."]
        ]},
        "The Japanese plan was to use land-based aircraft, in the Marianas, and those from the carriers. The Americans were already on Saipan, and the plan depended on trained pilots, and Japan had few."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Raymond Spruance and Marc Mitscher" },
        "Admiral Raymond Spruance commanded the 5th Fleet, and Vice Admiral Marc Mitscher, Task Force 58, with the carriers. Willis Lee commanded the battle line. Captain Arleigh Burke was Mitscher's chief of staff. Spruance was cautious, and his mission was to protect the landing at Saipan.",
        { h: "Jisaburo Ozawa" },
        "Admiral Jisaburo Ozawa commanded the Japanese Mobile Fleet, with the Taiho as flagship. He needed a decisive victory, but his pilots had little training, and their aircraft were inferior to the new American Hellcats."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Task Force 58 had 7 fleet carriers, 8 light carriers, 7 battleships and about 900 carrier aircraft. The Mobile Fleet had 3 fleet carriers, 6 light carriers, 5 battleships and about 450 carrier aircraft, plus some 300 land-based aircraft.",
        { h: "The terrain" },
        "Open sea, west of the Marianas. The Americans stayed between the Japanese and Saipan.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, after the landing on Saipan, the Japanese plan went into motion. The [[Japanese Mobile Fleet|frota móvel japonesa]] came from the west, and Task Force 58 stayed west of Saipan, to protect the landing.",
        "Second, on 19 June, the Japanese launched four attacks. The first, with 68 aircraft, was almost destroyed by the Hellcats. The second, with 107 aircraft, lost 97. The third was almost all turned back, and the fourth was caught over Orote Field, on Guam.",
        "Third, the destruction of Japanese aircraft was so great that the day became known as the 'Great Marianas Turkey Shoot'. The English Wikipedia article speaks of more than 350 Japanese aircraft lost that day, and between 23 and 30 American.",
        "Fourth, meanwhile, the American [[fleet submarines|submarino de esquadra]] struck. The Albacore hit the Taiho, which later exploded when the vapor in her hangars caught fire. The Cavalla sank the Shokaku with three torpedoes.",
        "Fifth, Mitscher asked to go west during the night, after the Japanese, but Spruance refused, mainly to protect the invasion fleet. Many aviators criticised his caution.",
        "Sixth, on 20 June, at 3:40 pm, an aircraft found the Mobile Fleet. Mitscher launched 226 aircraft at the limit of their range. The aircraft sank an [[oiler|petroleiro de esquadra]] and, according to the article, the Hiyo, and damaged the Zuikaku, the Junyo, the Chiyoda and the battleship Haruna.",
        "Seventh, the aircraft returned at night, short of fuel. Mitscher ordered the fleet's lights switched on, and the pilots could land on any deck. Twenty aircraft were lost in combat, and 80 on the way back. About three quarters of the crews were rescued.",
        "Eighth, the Mobile Fleet withdrew. The Japanese had lost the carriers Taiho, Shokaku and Hiyo, and almost all their carrier aircraft."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "Of the 373 carrier aircraft launched in the four attacks, 243 were lost, according to English Wikipedia. In all, close to 480 aircraft were shot down, according to the text of the article, and the infobox gives between 550 and 645 Japanese aircraft destroyed. The Americans lost about 123 aircraft and, according to the infobox (unsourced), about 109 men. Japan lost about 2,987 dead (estimate).",
        { h: "Why Japan lost" },
        "Japan had lost many pilots in earlier battles and had few trained replacements. Its aircraft, such as the Zero and the D4Y, were outclassed by the Hellcat. Japan lost about 90% of its carrier aircraft in two days, and the Navy never recovered its carrier strength.",
        { note: "Spruance's caution. Admiral John Towers demanded that Spruance be relieved, but Nimitz refused. King and Turner supported him. Spruance protected Saipan, but let most of the Japanese fleet escape." },
        { note: "The numbers vary. The English Wikipedia article gives different totals in the text and in the infobox: 346 Japanese aircraft lost on 19 June and close to 480 in all, against 550 to 645 in the infobox. That is why we give ranges." }
      ]}
    ]
  },

  montecassino: {
    war: "Italian campaign, Second World War (1943–1945)",
    hook: "Four attacks in four months to take one mountain, and a 1,400-year-old abbey turned to ruins.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1943, the Allies landed in Italy, and Italy changed sides. But the Germans did not leave: they occupied the country and built, in the centre, a line of defence, the [[Gustav Line|linha gustav]]. The strongest point was the town of Cassino, beneath Monte Cassino, on top of which stood the [[Abbey of Cassino|abadia de cassino]]. The road to Rome ran at the foot of the mountain.",
        { h: "Four battles" },
        { timeline: [
          ["17 Jan. 1944", "First battle: British X Corps crosses the Garigliano."],
          ["20 Jan.", "The US 36th Division tries to cross the Gari River and fails."],
          ["15 Feb.", "Second battle: bombing of the abbey."],
          ["15 Mar.", "Third battle: bombing of the town."],
          ["11 May", "Fourth battle: Operation Diadem."],
          ["18 May", "A Polish flag is raised over the ruins."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "The Allied commanders" },
        "General Harold Alexander commanded all the Allied armies in Italy. The American General Mark Clark commanded the 5th Army, and the Briton Oliver Leese, the 8th Army. General Alphonse Juin commanded the French Expeditionary Corps, the New Zealander Bernard Freyberg the New Zealand Corps, and the Pole Władysław Anders the Polish II Corps.",
        { h: "The Germans" },
        "Field Marshal Albert Kesselring commanded all German forces in Italy. General Heinrich von Vietinghoff commanded the 10th Army, and Fridolin von Senger und Etterlin the XIV Panzer Corps, which defended Cassino. The defence was carried out largely by the 1st Parachute Division."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The English Wikipedia infobox gives about 240,000 Allies, with 1,900 tanks and 4,000 aircraft, against about 140,000 Germans.",
        { h: "The terrain" },
        "The valley of the Liri River, closed in by mountains on both sides. To the east, the Gari (or Rapido) River, and at the back Monte Cassino, with the abbey on top and the town at its foot. To the south, the Aurunci Mountains. Whoever held the mountain could see the whole valley.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, in early January 1944, the Gustav Line was set, with German paratroopers on the slopes and in the town.",
        "Second, on 17 January, the British X Corps crossed the Garigliano. On 20 January, the US 36th Division attacked across the Gari and failed: the 141st Regiment was almost destroyed, and only about 40 men came back. The 34th Division attacked north of Cassino from 24 January and was withdrawn on 11 February, with about 2,200 casualties. On 22 January, the Allies landed at Anzio, behind the German lines, to force a way out.",
        "Third, on 15 February, 142 B-17s, 47 B-25s and 40 B-26s bombed the abbey, with about 1,150 tons of bombs. The abbey was destroyed. About 230 Italian civilians sheltering in it died, and there is no evidence that the bombing killed German soldiers. The paratroopers occupied the ruins. The 4th Indian Division attacked and failed, and the attack was called off on 18 February. The Royal Sussex Regiment lost 12 of 15 officers and 162 of 313 men in two nights.",
        "Fourth, on 15 March, aircraft dropped about 750 tons of bombs on the town. The New Zealand Corps attacked. On 17 March, the 1st Battalion of the 9th Gurkha Rifles held Hangman's Hill (point 435), about 230 metres from the abbey. The attack was called off on 22 or 23 March. The 4th Indian Division lost 3,000 men, and the 2nd New Zealand Division, 1,600.",
        "Fifth, at 11 pm on 11 May, Operation Diadem began, with 1,060 guns on the 8th Army front and 600 on the 5th's. The British XIII Corps, the American II Corps, the French Expeditionary Corps (with about 7,800 [[goumiers|goumiers]]) and the Polish II Corps attacked.",
        "Sixth, on 14 May, the goumiers outflanked the German defence through the Aurunci Mountains, parallel to the Liri valley.",
        "Seventh, the Poles took Mount Calvary and lost it to a paratrooper counter-attack. The three-day attack cost the Polish II Corps 281 officers and 3,503 other ranks. Anders attacked again on 17 May, and the Germans fell back to the [[Hitler Line|linha Hitler]]. On 18 May, a patrol of the 12th Podolian Cavalry Regiment raised a Polish flag over the ruins, at 10:20.",
        "Eighth, the Canadians broke the Hitler Line on 24 May, and the Poles took Piedimonte on 25 May. Rome fell on 4 June 1944 (5 June, according to one section of the article)."
      ]},
      { n: "04", title: "Legacy", blocks: [
        "The losses are disputed. The English Wikipedia infobox gives 55,000 to 105,000 Allied casualties and 20,000 to 80,000 German, and about 2,000 civilians dead. The article speaks of more than 43,000 Allied casualties in the final capture of the mountain and about 51,000 German. According to a cited source, 1,052 Poles died in the battle.",
        { h: "The bombing of the abbey" },
        { note: "Were the Germans in the abbey? In December 1943, the Germans agreed with the Vatican not to occupy the monastery. The British official history concludes that the Germans made no military use of the buildings until after the bombing. The American official version changed: the line calling German use 'irrefutable' was removed in 1961, and the Army's final record, of 1969, concluded that the abbey was, in fact, unoccupied." },
        { note: "The treasures saved. In the autumn of 1943, Captain Maximilian Becker and Lieutenant Colonel Julius Schlegel, of the Hermann Göring Division, organised the removal of works of art from the abbey to the Vatican and Castel Sant'Angelo, completed in the first days of November. Among them were works by Titian, El Greco and Goya." },
        { h: "The memory" },
        "The Polish military cemetery is the Allied cemetery closest to the abbey, which was rebuilt and is visible from it. In 1944, Feliks Konarski wrote the song 'Czerwone maki na Monte Cassino' ('The Red Poppies of Monte Cassino'), which became an anthem for the Poles."
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  marcoral: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 16, y: 4, rx: 24, ry: 8, l: "New Guinea" },
      { t: "hill", x: 90, y: 6, rx: 16, ry: 6, l: "Solomon Islands" },
      { t: "hill", x: 52, y: 22, rx: 12, ry: 3, l: "Louisiade Islands" },
      { t: "note", x: 20, y: 68, l: "Australia ↓" },
      { t: "note", x: 96, y: 69, l: "North ↑" }
    ],
    units: [
      { id: "aY", s: "a", k: "ship", w: 5, h: 2.5, l: "Yorktown (Fletcher)" },
      { id: "aL", s: "a", k: "ship", w: 5, h: 2.5, l: "Lexington (Fitch)" },
      { id: "aC", s: "a", k: "ship", w: 6, h: 2.5, l: "Crace's cruisers" },
      { id: "aSN", s: "a", k: "ship", w: 4, h: 2, l: "Sims and Neosho" },
      { id: "aAir", s: "a", k: "air", w: 3.5, h: 3.5, l: "American aircraft" },
      { id: "bShk", s: "b", k: "ship", w: 5, h: 2.5, l: "Shokaku" },
      { id: "bZui", s: "b", k: "ship", w: 5, h: 2.5, l: "Zuikaku" },
      { id: "bSho", s: "b", k: "ship", w: 4, h: 2.2, l: "Shoho" },
      { id: "bInv", s: "b", k: "ship", w: 6, h: 2, l: "Port Moresby convoy" },
      { id: "bTul", s: "b", k: "ship", w: 5, h: 2, l: "Tulagi force" },
      { id: "bAir", s: "b", k: "air", w: 3.5, h: 3.5, l: "Japanese aircraft" }
    ],
    steps: [
      { t: "3 May 1942. The Japanese occupy Tulagi, in the Solomons, without a fight. The Port Moresby invasion convoy leaves Rabaul, with the light carrier Shoho covering it, and the carriers Shokaku and Zuikaku follow behind. The Americans wait to the south, warned by the codes.",
        p: { aY: [62, 50, 0], aL: [60, 56, 0], aC: [46, 46, 0], aSN: [68, 61, 0], aAir: [68, 50, 0], bShk: [78, 22, 0], bZui: [82, 26, 0], bSho: [62, 14, 0], bInv: [52, 10, 0], bTul: [84, 14, 0], bAir: [76, 16, 0] } },
      { t: "4 May. The Yorktown's aircraft attack Tulagi and sink the destroyer Kikuzuki and several minesweepers.",
        p: { aY: [76, 34, 0], aAir: [82, 20, 0] } },
      { t: "5 and 6 May. The American groups join up and refuel. Both sides look for each other and do not find each other. At night, the carriers come within about 70 nautical miles of one another.",
        p: { aY: [62, 50, 0], aL: [62, 54, 0], aAir: [64, 46, 0], bShk: [72, 34, 0], bZui: [76, 38, 0], bAir: [72, 30, 0] } },
      { t: "7 May, morning. Japanese aircraft find the oiler Neosho and the destroyer Sims and take them for carriers. The Sims sinks and the Neosho is left drifting.",
        p: { bAir: [68, 56, 0] }, x: ["aSN"] },
      { t: "7 May, 10:40 to 11:35. American aircraft find the Shoho and sink her. Dixon sends the message 'Scratch one flat top!'.",
        p: { aAir: [58, 22, 0], aY: [62, 44, 0], aL: [62, 48, 0] }, x: ["bSho"] },
      { t: "7 May, afternoon. Bombers from Rabaul attack Crace's cruisers and cause only light damage. At night, American fighters, guided by radar, break up a Japanese attack.",
        p: { bAir: [46, 40, 0], aAir: [66, 40, 0] } },
      { t: "8 May. The carriers attack each other from a distance. The Shokaku takes three bombs and withdraws. The Yorktown takes one bomb. The Lexington takes two torpedoes and two bombs.",
        p: { aY: [68, 36, 0], aL: [68, 40, 0], aAir: [72, 28, 0], bShk: [74, 22, 0], bZui: [82, 26, 0], bAir: [70, 34, 0] } },
      { t: "8 May, afternoon and night. Gasoline vapor explosions doom the Lexington, sunk by a destroyer at 19:52. Fletcher withdraws. Inoue orders the invasion convoy back, and Port Moresby is left for later. The Shokaku goes to Japan for repairs.",
        p: { aY: [58, 58, 0], bShk: [90, 8, 0], bZui: [84, 12, 0], bInv: [54, 4, 0], aAir: [60, 54, 0], bAir: [80, 16, 0] }, x: ["aL"] }
    ]
  },

  marfilipinas: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 10, y: 20, rx: 4, ry: 6, l: "Saipan" },
      { t: "hill", x: 10, y: 44, rx: 4, ry: 5, l: "Guam" },
      { t: "note", x: 96, y: 69, l: "North ↑" },
      { t: "note", x: 20, y: 69, l: "Schematic, not to scale" }
    ],
    units: [
      { id: "aCV", s: "a", k: "ship", w: 8, h: 4, l: "American carriers (Mitscher)" },
      { id: "aBB", s: "a", k: "ship", w: 4, h: 12, l: "Battleships (Lee)" },
      { id: "aSub", s: "a", k: "ship", w: 3, h: 1.6, l: "Submarines Albacore and Cavalla" },
      { id: "aAir", s: "a", k: "air", w: 3.5, h: 3.5, l: "Hellcats and strike aircraft" },
      { id: "bTai", s: "b", k: "ship", w: 5, h: 2.5, l: "Taiho (Ozawa)" },
      { id: "bShk", s: "b", k: "ship", w: 5, h: 2.5, l: "Shokaku" },
      { id: "bCV", s: "b", k: "ship", w: 8, h: 4, l: "Other Japanese carriers" },
      { id: "bAir", s: "b", k: "air", w: 3.5, h: 3.5, l: "Japanese attacks" },
      { id: "bGuam", s: "b", k: "air", w: 3, h: 3, l: "Aircraft from Guam" }
    ],
    steps: [
      { t: "15 to 18 June 1944. The Americans land on Saipan. Task Force 58 stays west of the island, protecting the landing. The Japanese Mobile Fleet comes from the west, with 9 carriers and about 450 carrier aircraft.",
        p: { aCV: [24, 26, 0], aBB: [34, 24, 0], aSub: [60, 34, 0], aAir: [24, 30, 0], bTai: [86, 28, 0], bShk: [88, 34, 0], bCV: [82, 24, 0], bAir: [80, 30, 0], bGuam: [12, 44, 0] } },
      { t: "19 June, morning. The Japanese launch four attacks. The first, with 68 aircraft, is almost entirely destroyed by the Hellcats. The second, with 107, loses 97.",
        p: { bAir: [52, 28, 0], aAir: [44, 28, 0] } },
      { t: "19 June. The third attack is almost all turned back, and the fourth is caught over Orote Field, on Guam. The day becomes known as the 'Great Marianas Turkey Shoot'. The Japanese lose more than 350 aircraft in one day.",
        p: { bAir: [36, 28, 0], bGuam: [14, 42, 0], aAir: [30, 30, 0] }, x: ["bGuam"] },
      { t: "19 June. The American submarines strike. The Albacore hits the Taiho, which later explodes from the vapors in her hangars. The Cavalla sinks the Shokaku with three torpedoes.",
        p: { aSub: [78, 30, 0], bAir: [60, 28, 0] }, x: ["bTai", "bShk"] },
      { t: "Night of 19 to 20 June. Mitscher wants to go west after the Japanese, but Spruance refuses, to protect Saipan. The aviators criticise his caution.",
        p: { aCV: [28, 26, 0], aBB: [36, 26, 0], bCV: [88, 24, 0] } },
      { t: "20 June, 3:40 pm. An aircraft finds the Mobile Fleet. Mitscher launches 226 aircraft at the limit of their range. They sink an oiler and the Hiyo and damage the Zuikaku, the Junyo, the Chiyoda and the Haruna.",
        p: { aAir: [76, 26, 0], aCV: [46, 26, 0], aBB: [52, 28, 0], bCV: [84, 24, 0] } },
      { t: "20 June, at night. The aircraft return short of fuel. Mitscher orders the fleet's lights switched on, and the pilots land on any deck. Twenty aircraft are lost in combat and 80 on the way back. About three quarters of the crews are rescued.",
        p: { aAir: [50, 26, 0], aCV: [48, 28, 0] } },
      { t: "Afterwards. The Mobile Fleet withdraws. Japan has lost three carriers (Taiho, Shokaku and Hiyo) and about 90% of its carrier aircraft. The Japanese Navy never recovered its carrier strength.",
        p: { bCV: [96, 22, 0], aCV: [40, 26, 0] } }
    ]
  },

  montecassino: {
    terrain: [
      { t: "hill", x: 44, y: 24, rx: 9, ry: 9, l: "Monte Cassino (abbey)" },
      { t: "hill", x: 24, y: 50, rx: 18, ry: 10, l: "Aurunci Mountains" },
      { t: "sea", x: -8, y: 58, w: 36, h: 18, l: "Tyrrhenian Sea" },
      { t: "note", x: 60, y: 44, l: "Gari River" },
      { t: "note", x: 96, y: 69, l: "North ↑" }
    ],
    units: [
      { id: "aX", s: "a", k: "inf", w: 8, h: 3, l: "British X Corps" },
      { id: "a36", s: "a", k: "inf", w: 6, h: 3, l: "US 36th Div." },
      { id: "a34", s: "a", k: "inf", w: 6, h: 3, l: "US 34th Div." },
      { id: "a4I", s: "a", k: "inf", w: 6, h: 3, l: "4th Indian Div." },
      { id: "aNZ", s: "a", k: "inf", w: 6, h: 3, l: "New Zealand Corps" },
      { id: "aPol", s: "a", k: "inf", w: 6, h: 3, l: "Polish II Corps (Anders)" },
      { id: "aFr", s: "a", k: "inf", w: 6, h: 3, l: "French Corps and goumiers" },
      { id: "aBr", s: "a", k: "inf", w: 6, h: 3, l: "British XIII Corps" },
      { id: "aBmb", s: "a", k: "air", w: 3.5, h: 3.5, l: "Allied bombers" },
      { id: "bGus", s: "b", k: "inf", w: 3, h: 38, l: "Gustav Line (paratroopers)" },
      { id: "bAb", s: "b", k: "camp", w: 6, h: 3, l: "Abbey" },
      { id: "bCas", s: "b", k: "camp", w: 6, h: 3, l: "Cassino" },
      { id: "bHit", s: "b", k: "inf", w: 2, h: 24, l: "Hitler Line" }
    ],
    steps: [
      { t: "January 1944. The Gustav Line cuts across central Italy. German paratroopers hold the slopes of Monte Cassino and the town. The Allies are to the east and south. Farther back, the Germans prepare the Hitler Line.",
        p: { aX: [72, 62, 0], a36: [68, 50, 0], a34: [64, 14, 0], a4I: [74, 24, 0], aNZ: [74, 36, 0], aPol: [78, 12, 0], aFr: [66, 56, 0], aBr: [78, 48, 0], aBmb: [86, 40, 0],
             bGus: [44, 36, 0], bAb: [44, 24, 0], bCas: [48, 40, 0], bHit: [28, 44, 0] } },
      { t: "17 January to 11 February. First battle. The British X Corps crosses the Garigliano. The US 36th Division attacks across the Gari on 20 January and fails. The 34th Division, to the north, loses about 2,200 men. On 22 January, the Allies land at Anzio.",
        p: { aX: [60, 62, 0], a36: [56, 46, 0], a34: [54, 18, 0] } },
      { t: "15 to 18 February. Second battle. On 15 February, 142 B-17s, 47 B-25s and 40 B-26s bomb the abbey (about 1,150 tons). It is destroyed. The 4th Indian Division attacks and fails, and the attack is called off on 18 February.",
        p: { aBmb: [46, 20, 0], a4I: [56, 24, 0] } },
      { t: "15 to 23 March. Third battle. Bombing of the town, with about 750 tons. The New Zealand Corps attacks. The Gurkhas hold Hangman's Hill, a little over 200 metres from the abbey. The attack ends on 22 or 23 March. The 4th Indian Div. lost 3,000 men, and the 2nd New Zealand Div., 1,600.",
        p: { aBmb: [50, 38, 0], aNZ: [56, 36, 0], a4I: [54, 28, 0] } },
      { t: "11 May, 11 pm. Fourth battle, Operation Diadem. It begins with 1,060 guns on the 8th Army front and 600 on the 5th's. The British XIII Corps, the American II Corps, the French Expeditionary Corps (with about 7,800 goumiers) and the Polish II Corps attack.",
        p: { aBr: [62, 48, 0], aFr: [50, 58, 0], aPol: [60, 12, 0], a36: [60, 52, 0] } },
      { t: "14 May. The goumiers outflank the German defence through the Aurunci Mountains, beside the Liri valley.",
        p: { aFr: [32, 52, 0], aBr: [54, 46, 0] } },
      { t: "11 to 18 May. The Poles take and lose Mount Calvary. The three-day attack costs 281 officers and 3,503 other ranks. On 17 May, Anders attacks again, and the Germans fall back. On 18 May, at 10:20, a patrol raises a Polish flag over the ruins.",
        p: { aPol: [46, 20, 0], a4I: [54, 24, 0] }, x: ["bAb", "bCas", "bGus"] },
      { t: "24 May to 4 June. The Canadians break the Hitler Line on 24 May, and the Poles take Piedimonte on 25 May. Rome falls on 4 June (5 June, according to one section of the article).",
        p: { aBr: [26, 44, 0], aFr: [22, 48, 0], aPol: [30, 22, 0] }, x: ["bHit"] }
    ]
  }
});
