// In-depth battles, batch bn: passchendaele, amiens, sakarya, annual, taierzhuang (great-battles pack, helper 32).
// Checked against the English, Spanish and Turkish Wikipedia articles on the Battle of Passchendaele, Broodseinde, the
// Second Battle of Passchendaele, the Battle of Amiens, the Battle of the Sakarya (and its order of battle), the Disaster
// of Annual and the Battle of Taierzhuang, the HistoryNet account of Sakarya, and the works those pages cite.
// Where sources disagree the text says so. No diagram for Passchendaele (a three-month series of limited attacks, not one
// deployment) or Annual (the sources give no reliable positions for the retreat). The Sakarya diagram is a schematic.
// Tanks are not drawn as units (unit_kinds.js is not edited here); they appear in the captions.

Object.assign(GLOSSARY, {
  "casamata de concreto": "A small reinforced-concrete building with thick walls and slits for machine guns. The Germans scattered many of them across the Flanders ground. Ordinary artillery fire barely shook them.",
  "divisão eingreif": "German for 'intervention'. A division kept behind the front line, out of range of enemy artillery, to counterattack when the attacker arrived tired at the German positions.",
  "morder e segurar": "A method of attacking in short, limited advances (the 'bite'), stopping, fortifying the captured ground and waiting for the counterattack under the cover of one's own artillery. It is the opposite of trying to break the front in one go.",
  "passadiço de tábuas": "A path of planks or wooden gratings laid over the mud. In Flanders it was often the only way to bring up soldiers, ammunition and wounded.",
  "whippet": "A British medium tank, lighter and faster than the heavy 'Mark' tanks. It was designed to exploit the gap opened by the heavy tanks, running behind the enemy lines.",
  "ofensiva dos cem dias": "A series of Allied attacks on the Western Front, from 8 August to 11 November 1918, which began at Amiens and ended with the armistice.",
  "defesa em superfície": "Mustafa Kemal's idea: instead of holding a fixed line, which breaks all at once, defend a wide area. Units may give up ground, regroup and fight again, while the attacker spreads out and moves away from his supplies.",
  "gazi": "A Turkish title of honor, given to one who defeats the enemy in war. The Assembly granted it to Mustafa Kemal after Sakarya.",
  "tekâlif-i millîye": "'National duties': decrees of the Ankara Assembly, in 1921, ordering the population to hand over to the army weapons, ammunition, food, cloth and draft animals.",
  "grande deserto salgado": "A dry, salty region around the Salt Lake (Tuz Gölü) in central Anatolia. It has little water and almost no food.",
  "tratado de sèvres": "A treaty of 1920, imposed on the Ottoman Empire after its defeat in the First World War. It gave Greece the Smyrna region and carved up Anatolia. The nationalist movement in Ankara never accepted it.",
  "venizelistas": "Followers of Eleftherios Venizelos, the liberal Greek politician who led the country into Asia Minor. In 1920 he lost power and King Constantine returned to the throne. In the army, Venizelist and royalist officers distrusted one another.",
  "dağ": "The Turkish word for 'mountain'. Mangal Dağı, Yıldız Dağı, Ardız Dağı and Çal Dağı are the hills that dominate the Sakarya battlefield.",
  "blocao": "A small fortified military post, of stone and earth, with few soldiers. In the Rif War, the Spanish scattered hundreds of them, far from one another.",
  "trem blindado": "A train with cars protected by steel plates and armed with guns and machine guns. It ran on the rails and gave fire support along the railway.",
  "esquadrão suicida": "A group of volunteers who, according to accounts of the battle, approached tanks with grenades and explosives strapped to their bodies. In the Chinese army they were called 'dare-to-die' units.",
  "tanqueta": "A small tracked armored vehicle with one or two crew, armed with a machine gun. The Japanese army used many in 1938.",
  "gás lacrimogêneo": "A gas that makes the eyes and airways burn and water. It hampers sight and breathing, but usually does not kill.",
  "quinta zona de guerra": "One of the military regions into which China divided the front against Japan. The Fifth covered Shandong and northern Jiangsu and was commanded by Li Zongren."
});

Object.assign(DEEP, {
  passchendaele: {
    war: "First World War, Western Front (1917)",
    hook: "Three months and ten days of mud to reach a village the shells had already wiped off the map.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the summer of 1917, the war on the Western Front had been stuck for almost three years. The French army was going through mutinies after a failed offensive in the spring, and German submarines were sinking ships carrying food and coal to Britain. The commander of the British Expeditionary Force, Field Marshal Douglas Haig, wanted to attack in Flanders, where the ground lay between the sea and the Dutch border.",
        "His aims, according to the headquarters plan, were to wear down the German army, take the Belgian coast, from which submarines sailed, and reach the Passchendaele ridge, from where it would be possible to advance to Roulers and, in the end, to the Dutch frontier. The ridge also had a practical reason: whoever held it would dominate the surroundings of Ypres, where the British lived inside a [[salient|saliente]] ringed by hills held by the Germans.",
        { h: "The road to Passchendaele" },
        { timeline: [
          ["7 June 1917", "Battle of Messines: 19 mines explode under the ridge south of Ypres and the British take the position."],
          ["31 July", "The main offensive begins, the Third Battle of Ypres, on the Pilckem ridge."],
          ["20 September", "Menin Road: the first big attack by Plumer's Second Army."],
          ["4 October", "Broodseinde, the most successful attack of the whole campaign."],
          ["26 October to 10 November", "The Canadian Corps takes the village of Passchendaele."]
        ]},
        "The decision was debated. Prime Minister David Lloyd George and the French marshal Foch had doubts. Historians still debate why Flanders was chosen, whether Gough was the right general to lead the main attack, and how much the French mutinies weighed in the choice to attack right there."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Douglas Haig, commander of the British Expeditionary Force" },
        "A field marshal, trained in the cavalry, who believed in wearing the German army down until it gave way. He wanted an offensive in Flanders. On 25 August 1917, he took the main attack out of the hands of the Fifth Army and gave it to the Second.",
        { h: "Hubert Gough and Herbert Plumer" },
        "Gough commanded the Fifth Army, which made the first attack, on 31 July. Plumer, of the Second Army, had carefully prepared the attack at Messines. From the end of August, he used the method historians call [[bite and hold|morder e segurar]]: short advances, narrow fronts, more artillery and pauses of about six days between attacks.",
        { h: "Arthur Currie" },
        "Commander of the Canadian Corps. His four divisions were given the task of taking the village in October and November.",
        { h: "Fritz von Loßberg, on the German side" },
        "Chief of staff of the German Fourth Army, under Friedrich Sixt von Armin. He refused to withdraw and organized a [[defense in depth|defesa em profundidade]]: several successive positions (the Albrechtstellung, Wilhelmstellung and Flandern lines), fortified villages, [[concrete pillboxes|casamata de concreto]] and, behind the ridges, [[Eingreif divisions|divisão eingreif]] ready to counterattack."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "On the Allied side, about 50 British and Empire divisions (including Australians, New Zealanders and Canadians) and six French ones on the northern wing. On the German side, between 77 and 83 divisions, depending on the count, because units were pulled out tired and replaced by others over the months.",
        { h: "The terrain" },
        "Flanders is a low plain cut by streams such as the Steenbeek and the Ravebeek. The drainage had been destroyed by three years of war and was only partly restored. The ridges, though low, gave a view over everything around. Whoever held them saw the movements of those who attacked.",
        { h: "Pilckem, 31 July" },
        "The attack began at 3:50 a.m., under low cloud. In the north, XIV Corps and the French First Army advanced 2,500 to 3,000 yards (about 2.3 to 2.7 km) to the Steenbeek. Around noon, a German counterattack drove three British brigades back, with about 70% casualties. Rain began that night: from 6 p.m. on 31 July to 6 p.m. on 4 August about 63 mm fell. Over all of August it rained 127 mm, and 84 mm came in just five days.",
        { note: "At the time, Haig's intelligence chief, John Charteris, said there was a regular break in the rains in early August. Studies of 30 years of weather records did not find that pattern. The drainage destroyed by the war made the mud worse." },
        { h: "Plumer's three advances" },
        "On 25 August, Haig passed the main action to the Second Army. The Menin Road attack, from 20 to 25 September, was made on a front of 14,500 yards (about 13 km) and took most of its objectives, to a depth of some 1,500 yards (1.4 km). Polygon Wood (26 September to 3 October) and Broodseinde, on 4 October, followed.",
        { h: "Broodseinde, 4 October" },
        "It is the most successful battle of the campaign for the Allies. The Germans were planning a counterattack of their own for the same day, Operation Höhensturm, and had troops assembled at the front. The British barrage fell on them, and the Eingreif divisions were largely held back. The [[Anzac|anzac]] corps took part, with Australian divisions and the New Zealand Division. The Allies took on average about 1,000 yards (910 m) and something like 4,700 to 5,000 prisoners. The German official history called it 'the black day of 4 October'.",
        "Plumer did not exploit the success: eight rested German divisions were behind the battlefield, and he preferred to wait for the counterattacks.",
        { h: "The mud returns: Poelcappelle and 12 October" },
        "Rain returned on 2 October and became torrential. On 9 October, the attack on Poelcappelle was made on a front of 13,500 yards (about 12 km). On 12 October, the First Battle of Passchendaele cost about 13,000 Allied casualties, including 2,735 New Zealanders, and did not take the village. The artillery made holes that filled with water, and the mud jammed weapons and broke up the barrages.",
        { h: "The Canadians, 26 October to 10 November" },
        "The Canadian Corps, under Currie, relieved the Anzac corps. Currie wanted to delay the attack until 29 October, to bring up more artillery. Haig wanted less delay, partly to support the French attack at Malmaison, set for 23 October. The attack was fixed for 26 October, in four stages.",
        "The Canadians prepared the ground carefully: about 2 miles (3 km) of double plank road, more than 4,000 yards of tramway and hundreds of pack animals, as well as [[duckboard tracks|passadiço de tábuas]] to the front. The Canadian divisional artillery received 210 field guns, 190 howitzers and 26 heavy pieces.",
        { timeline: [
          ["26 October", "First stage, at 5:40 a.m., behind a [[creeping barrage|barragem rolante]]."],
          ["30 October", "They take Crest Farm and enter Passchendaele, from which the Germans withdraw."],
          ["6 November", "The 2nd Canadian Division takes the village in under three hours."],
          ["10 November", "Last action: the crossroads and Venture Farm, near Hill 52."]
        ]},
        "The Germans had many different divisions opposite, including the 4th, 7th, 11th, 27th, 39th and 185th, among others, under Gruppe Ypern, of General Alfred Graf zu Dohna-Schlobitten.",
        { h: "The end" },
        "On 24 October, the Austro-German victory at Caporetto, in Italy, led Britain and France to send troops there. The offensive ended short of Westroosebeke, the next ridge. The date used by most sources for the end is 10 November, with local attacks afterward."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The British and their allies kept the Passchendaele ridge and the village, and took more than 24,000 prisoners (a number nobody disputes). They did not break the front and did not reach the Belgian coast. The Canadians had 15,654 casualties in the Second Battle of Passchendaele alone.",
        { h: "The casualties: one of the most debated numbers of the war" },
        "Each historian counts differently. On the British side, the official historian Edmonds gave 244,897; others reach 448,688 (Wolff), and Terraine refuted that number in 1977. Prior and Wilson give about 275,000. On the German side, the numbers go from just under 200,000 to 400,000: the German official history (Foerster) gives 217,000, and Sheldon arrives at 217,194 from 1 June to 10 November, or 399,590 if sick and lightly wounded are counted. Sheffield, quoting Holmes, speaks of about 260,000 on each side.",
        { h: "Why it matters" },
        "The name Passchendaele became a byword for a war of mud and a sacrifice hard to justify. Lloyd George, in his memoirs of 1938, called the battle 'one of the greatest disasters of the war'. Sheldon argues the opposite: what matters is not who lost more men, but that Germany could not afford that exchange. On 20 November, at Cambrai, the British used tanks and artillery in a different way, and trench warfare began to change.",
        { h: "Curiosities and controversies" },
        { note: "The sources: the date on which the War Cabinet approved the operation appears as 21 June in one part of Wikipedia and as 25 July in another. It shows how much even the basic facts are debated." },
        { note: "The dead: the Menin Gate, in Ypres, commemorates the Empire's dead with no known grave, but only the British ones before 16 August 1917. The British and New Zealand dead after that are named at Tyne Cot Cemetery." },
        { note: "Canadian Passchendaele: the Passchendaele Memorial, at Crest Farm, commemorates the Second Battle of Passchendaele. Nine Victoria Crosses were awarded for actions in that battle, and another nine for actions at Broodseinde." }
      ]}
    ]
  },

  amiens: {
    war: "First World War, Western Front (Hundred Days Offensive, 1918)",
    hook: "The day the German army lost less ground than the will to fight.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 21 March 1918, Germany launched Operation Michael, the first of a series of offensives to win the war before the Americans arrived in force. The British front gave way, but the advance stopped on 4 April at Villers-Bretonneux, near Amiens. The following offensives (Georgette, Blücher-Yorck, Gneisenau and Marne-Reims) also failed to break through. Marshal Foch then ordered a counterattack that led to the Allied victory at the Second Marne, and the Germans fell back to the north.",
        { h: "The road to Amiens" },
        { timeline: [
          ["July 1918", "Rawlinson, of the British Fourth Army, presents Monash's plans to Haig, and Haig sends them to Foch."],
          ["24 July", "Foch accepts the plan, on condition that the French take part. The date moves from 10 to 8 August."],
          ["6 August", "The German 27th Division, an assault division, advances about 730 m north of the Somme and forces the Allies to adjust the plan."],
          ["7 August", "The Canadian Corps finishes arriving at the front, undetected."],
          ["8 August", "The attack begins, at 4:20 a.m., in thick fog."]
        ]},
        "The plan demanded surprise. There was no long preparatory bombardment, only fire just before the advance. Orders carried the warning 'keep your mouth shut', and the attack was called a 'raid', not an offensive. To fool the Germans, two infantry battalions, a wireless unit and a field hospital were sent near Ypres, as if the whole Canadian Corps were going to Flanders."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Henry Rawlinson, British Fourth Army" },
        "He commanded the army that would deliver the blow, on the front that straddles the Somme. He presented Monash's proposals to Haig.",
        { h: "John Monash and Arthur Currie" },
        "Monash commanded the Australian Corps, and Currie the Canadian. The two corps, in the center of the line, were the spearhead. It was Monash's proposals that Rawlinson took to Haig.",
        { h: "Marie-Eugène Debeney, French First Army" },
        "He attacked on the right of the British, 45 minutes after them.",
        { h: "Georg von der Marwitz and Erich Ludendorff" },
        "Von der Marwitz commanded the German Second Army. Ludendorff was one of Germany's chief military leaders. The Germans expected attacks elsewhere: Saint-Mihiel, Kemmel, the Lys or Albert, not Amiens."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Fourth Army had 1,386 field guns and howitzers and 684 heavy pieces, a total of 2,070. Almost 600 tanks took part. The Canadian and Australian Corps each had 108 heavy Mark V tanks, 36 Mark V 'Star' and 24 supply tanks. The British III Corps had a battalion of Mark Vs, and the Cavalry Corps two battalions of [[Whippet tanks|whippet]]. The French had a battalion of 72 Whippets.",
        "On the German side, the Second Army had six divisions in the line (two facing the French) and two in immediate reserve. Morale was low: Ludendorff himself admitted that many soldiers surrendered.",
        { h: "The terrain" },
        "A region of gentle plateau and open fields east of Amiens, cut by the Somme, which divided the attack: III Corps north of the river, the Australians in the center, the Canadians south of the Australians and the French farther south.",
        { h: "8 August in six movements" },
        { formation: true },
        "First, at 4:20 a.m., the barrage fell on the Germans all at once. The fog was so thick that the aircraft mostly stayed on the ground, and the Germans only began to answer five minutes later. The artillery plan aimed at 504 of the 530 German guns from minute zero.",
        "Second, behind the creeping barrage and the tanks, Australians and Canadians advanced. Among them were the 2nd and 3rd Australian Divisions and the 1st, 2nd and 3rd Canadian. By 11 a.m., the center had advanced 4.8 km.",
        "Third, 45 minutes later, the French came in, from the right.",
        "Fourth, the Cavalry Corps and the Whippets passed through the gaps. RAF aircraft and armored cars fired on German troops in retreat, who could not regroup.",
        "Fifth, north of the Somme, III Corps was stopped short of the Chipilly hill. It was the weakest end of the line.",
        "Sixth, at the end of the day: the Canadians had advanced 13 km, the Australians 11 km, the French 8 km and the British 3.2 km. The average was about 11 km, one of the greatest penetrations of the war, and a gap of 24 km opened south of the Somme. Many Germans surrendered.",
        { h: "9 to 12 August: the advance weighs" },
        "The next day, the infantry was already beyond the reach of the artillery, and the roads were congested. The more than 500 tanks of the start fell to six ready for combat in four days. At Chipilly, on the afternoon of 9 August, three battalions of the American 33rd Division attacked the hill at 5:30 p.m. Corporal Jake Allex won the Medal of Honor for the action. In the south, the French fighting is called the Battle of Montdidier. On 10 August, signs appeared that the Germans were abandoning the Operation Michael salient. By 13 August, the British had advanced 19 km."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Allied victory. Sources do not agree on casualties: one text speaks of about 12,000 Allied casualties and more than 15,000 German prisoners, another of 45,000 Allied killed and wounded (24,232 French and 22,202 British) and 29,873 prisoners. The estimate for the Germans is some 30,000 on 8 August alone.",
        { h: "The 'black day'" },
        "Ludendorff called 8 August 'the black day of the German Army'. It was not because of the ground lost, but because the soldiers' morale collapsed: troops in retreat shouted at their officers, and many surrendered. Hindenburg noted that the cutting of the lines of communication isolated the command posts and prevented counterattacks.",
        { h: "Why it matters" },
        "Foch wanted to continue, but Haig refused and preferred a new offensive, farther north, by Byng's Third Army, the Second Battle of the Somme (21 August to 3 September). Historians see Amiens as the turning point that gave the initiative back to the Allies and shook German morale. It opened the [[Hundred Days Offensive|ofensiva dos cem dias]], which ended with the armistice on 11 November.",
        { h: "Curiosities and controversies" },
        { note: "The tank numbers vary. Almost 600 took part, and one account speaks of 342 Mark Vs, 72 Whippets and 22 supply tanks. We use the sum by corps that appears in most sources." },
        { note: "Two volunteers of 207 Squadron flew in thick fog with Handley Page bombers to cover the noise of the tanks, and received the Distinguished Flying Cross. Most aircraft stayed grounded." }
      ]}
    ]
  },

  sakarya: {
    war: "Greco-Turkish War / Turkish War of Independence (1919–1922)",
    hook: "A Greek army got to within 50 km of Ankara and was stopped by an idea: defend not a line, but a whole region.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After the First World War, the [[Treaty of Sèvres|tratado de sèvres]] (1920) carved up the Ottoman Empire and gave Greece the Smyrna region. The Turkish nationalists, gathered in Ankara around Mustafa Kemal, never accepted the treaty, and Greece sent its army to advance across Anatolia. The Greeks hoped a great victory would force the Ankara Assembly to accept it.",
        { h: "The road to the Sakarya" },
        { timeline: [
          ["January to April 1921", "The Turks resist the Greeks in the two battles of Inönü."],
          ["Mid-July 1921", "A Greek offensive breaks the Turkish lines at Kütahya and Eskişehir. Eskişehir falls on 17 July."],
          ["After 17 July", "The Turkish army falls back east of the Sakarya River, some 80 km from Ankara."],
          ["3 August", "Fevzi Çakmak takes over as chief of staff, in place of İsmet, who keeps commanding the Western Front."],
          ["5 August", "The Assembly gives Mustafa Kemal supreme command for three months."]
        ]},
        "After the defeat, the Assembly was unhappy with İsmet's command and wanted Kemal and Fevzi at the front. The Assembly also passed the [[Tekâlif-i Millîye|tekâlif-i millîye]], decrees ordering the people to hand over weapons, ammunition and supplies to the army. According to one account of the battle, nearly half of the available cloth, leather, flour, soap and candles were requisitioned, and a fifth of the horses and carts.",
        "The Turkish high command even planned a still deeper retreat to the east, as far as Kayseri."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Mustafa Kemal, 40 years old" },
        "An Ottoman officer who distinguished himself at Gallipoli in 1915 and then led the nationalist movement. He presided over the Ankara Assembly and, from 5 August, the army as well. His central order, at the height of the crisis: there is no line of defense, there is a [[defense of the surface|defesa em superfície]] ('hatt-ı müdafaa yoktur, sath-ı müdafaa vardır'). In his speech of 1927, he said that not an inch of the country should be abandoned before it was drenched with the blood of its citizens.",
        { h: "Fevzi Çakmak and İsmet" },
        "Fevzi was the chief of staff and also a minister. İsmet kept commanding the Western Front. According to one account, on 26 August İsmet proposed to retreat, and Fevzi ordered Mount Çal held.",
        { h: "Anastasios Papoulas and King Constantine" },
        "Papoulas commanded the Army of Asia Minor. According to Turkish Wikipedia, at first he was against the advance on Ankara, thinking the idea risky, but he ordered the attack under political and public pressure. King Constantine I was the supreme commander of the Greek forces in Asia. Prince Andrew of Greece commanded II Corps, and General Trikoupis a group of divisions in the south. There was also, in the Greek army, the split between [[Venizelists|venizelistas]] and royalists."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary a great deal. English Wikipedia gives about 77,000 Greeks against 101,727 Turks. A HistoryNet account gives about 100,000 Greeks against some 90,000 Turks after the new levies. The Greeks had more artillery, machine guns, aircraft and trucks. The Turks had the interior lines, a strong cavalry and a territory they knew.",
        { h: "The terrain" },
        "The Sakarya makes bends that form a natural barrier, with steep banks and only two bridges on the stretch of front. To the east, the Haymana plateau, at some 900 m of altitude, is dominated by hills ([[hills|dağ]]): Mangal, Yıldız, Ardız and Çal. Kemal expected the main Greek effort from the south, and concentrated most of his troops along the Ilıca Özü, the refused left wing of his deployment.",
        { h: "The march" },
        "The Greeks began to advance around 14 August, in three columns. They marched about a week (some sources say nine days) across the [[Great Salt Desert|grande deserto salgado]], where food and water hardly existed, and requisitioned supplies in the villages. The Turks noticed the maneuver, and the Greeks lost the surprise.",
        { h: "The fighting in eight movements" },
        { formation: true },
        "First, the initial sketch: Greeks west of the river, Turks on the hills to the east, and Ankara in the background.",
        "Second, the Greek plan was to envelop the Turkish left wing, the southern one, by a wide march through the Salt Desert.",
        "Third, on 23 and 24 August, the Greeks attacked. According to one account, I Corps took Mangal Dağı on the first day with little resistance. The attacks southeast of Mangal and toward Haymana did not meet the same success, and the battle broke up into local fights. On 26 August, the Turkish cavalry nearly captured Papoulas.",
        "Fourth, the Turkish cavalry attacked the Greek lines of communication. For several days, neither ammunition nor food reached the front.",
        "Fifth, on 30 August, III Corps took Yıldız Dağı, and I Corps Ardız Dağı.",
        "Sixth, on 2 and 3 September, the Greeks took Mount Çal, the height nearest to Ankara, and some units came within about 50 km of the city. The advance was some 16 km in ten days, according to one source.",
        "Seventh, the Greek attempts to open a way to Haymana failed, and on 9 September the Greek general staff suspended the offensive. Kemal moved his headquarters to Polatlı.",
        "Eighth, between 8 and 10 September the Turks retook Çal (sources give different dates, and Kemal took part personally in a counterattack). Between 11 and 14 September, the Greeks fell back across the Sakarya, burning railways, bridges and villages. The Turkish pursuit was only by cavalry. Prince Andrew warned that Turkish machine guns across the river would have caused total destruction at the crossings, where the Greek troops had become tangled."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Greek advance on Ankara failed. The Greeks went back to their lines and never launched another major offensive. The Turks retook Sivrihisar (20 September), Aziziye (22 September), Bolvadin and Çay (24 September).",
        { h: "The casualties" },
        "By the most quoted numbers, the Turks had 5,713 dead, 18,480 wounded, 828 prisoners and 14,268 missing (39,289 in total), and the Greeks 3,758 dead, 18,955 wounded and 354 missing (23,007). Other accounts give about 3,700 dead and 18,000 wounded to the Turks and 4,000 dead and 19,000 wounded to the Greeks, plus some 15,000 Greek prisoners and deserters. The loss of officers was so high that the battle became known in Turkey as the Officers' Battle.",
        { h: "Why it matters" },
        "In October 1921, the treaties of Kars (with Russia) and Ankara (with France) eased the Turks on other fronts. Kemal received from the Assembly the rank of marshal and the title of [[gazi]]. Papoulas resigned in May 1922, and Hatzianestis replaced him. In August 1922, the Turkish offensive of Dumlupınar led to the capture of Smyrna, and the Treaty of Lausanne (24 July 1923) fixed the end of the Greek presence in Asia Minor.",
        { h: "Curiosities and controversies" },
        { note: "The result: English Wikipedia calls the battle a military stalemate in one place and a Turkish victory in another. Historians agree the Greek advance failed. The historian Sayen thinks the Greek plan was too cautious: the Greeks waited some 20 days and used about 70% of their forces, against 85% for the Turks. Edward Erickson credits Papoulas for keeping the army intact in the retreat, and Ernest Tucker says he panicked." },
        { note: "A Turkish journalist, İsmail Habip Sevük, noted that the Ottoman retreat that began at Vienna on 13 September 1683 was stopped 238 years later, on another 13 September." },
        { note: "Dates and places: the sources differ on when Çal was retaken (8 or 10 September), on when the Greeks began to fall back (11 to 14 September) and on which Greek corps attacked where. The diagram is a sketch, not a precise map." }
      ]}
    ]
  },

  annual: {
    war: "Rif War (1921–1926)",
    hook: "A general who advanced 130 km with no reserves and, in one afternoon, lost what had taken two years to win.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Since 1912, Spain had a [[protectorate|protetorado]] in northern Morocco, but it controlled little of the mountainous interior of the Rif. In 1920 and 1921, General Manuel Fernández Silvestre, commander-general at Melilla, decided to advance west, aiming to reach the Bay of Alhucemas, seen as the key to controlling the region.",
        "The tactic was to advance without great resistance and fix positions. Between May 1920 and June 1921, the troops progressed about 130 km and created 46 new posts, for a total of about 144 [[blockhouses|blocao]] and positions, supplied by mule convoys. Annual, where Silvestre made his base, was occupied on 15 January 1921, according to Wikipedia.",
        { h: "The road to Annual" },
        { timeline: [
          ["1 June 1921", "Abarrán: the Spanish take the mount, and the Rifians retake it the same day, with 141 Spanish dead."],
          ["June", "Abd el-Krim's force (harka) grows from about 3,000 to about 11,000 men."],
          ["14 to 21 July", "Siege of the forward post of Igueriben, south of Annual. It falls on 21 or 22 July."],
          ["22 July", "Silvestre orders a retreat from Annual, and the withdrawal turns into a defeat."],
          ["9 August", "Surrender of Monte Arruit."]
        ]},
        "The weak points were known: supply lines too long, lack of reserves, little water, and allied tribes that were armed and of doubtful loyalty. Silvestre was increasingly anxious. He asked Berenguer, the high commissioner, for reinforcements, saying the situation was 'somewhat delicate'."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Manuel Fernández Silvestre" },
        "The Spanish general at Melilla, the author of the advance. His death is uncertain: one version says he killed himself in his tent, another that he was killed with Colonel Manella, and a Moroccan messenger said he saw the body eight days later. His remains were never found.",
        { h: "Dámaso Berenguer and Felipe Navarro" },
        "Berenguer was the high commissioner, the Spanish authority in the protectorate. Navarro, second in command at Melilla, led the survivors to Monte Arruit.",
        { h: "Abd el-Krim" },
        "A Rifian who had been a translator and official for the Spanish. He gathered the tribes into a [[harka]] and used the [[guerrilla|guerrilha]] warfare of the mountainous terrain. Later he said that the greatest mistake of his life was not having attacked Melilla after the victory."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers vary a great deal. For the Spanish: between 18,000 and 23,000 men in the Melilla command, spread over many posts, with 24 pieces of artillery, and at Annual, according to the text, more than 5,000 (or more than 10,000, according to Spanish Wikipedia). For the Rifians, between 3,000 and 18,000, of whom only about 8,000 had rifles, and of these 3,450 Mausers. The two Wikipedias do not reconcile.",
        { h: "The terrain" },
        "Arid mountains, gorges and dry riverbeds. The Rifians held the heights around the Spanish posts, and water was brought by mules.",
        { h: "Igueriben" },
        "The post, occupied in June, protected the south of Annual. According to Spanish Wikipedia, its some 350 defenders fell on 21 or 22 July after five days of relief columns that did not arrive. In English, it is about 300 men, of whom 33 survived.",
        { h: "The retreat, 22 July" },
        "With ammunition running out, Silvestre ordered the retreat from Annual, around 10 or 11 a.m., in two columns: one of mules and supplies, the other of troops, wounded and heavy weapons. The heights were already in Rifian hands. The native police and allied troops deserted, and in some cases killed the Spanish officers. The column was left without flankers and without a rear guard, and became a rout.",
        "Two units held the retreat. The [[Regulares|regulares]] of Commander Llamas occupied the heights to the south, which let many pass through the Izumar gorge. The cavalry regiment Cazadores de Alcántara, under Lieutenant Colonel Fernando Primo de Rivera, covered the retreat with machine guns and repeated charges: of 691 riders, 471 died (about 70%).",
        { h: "From Annual to Monte Arruit" },
        "Navarro led the survivors to Dar Drius, then Batel and Tistutin, and finally Monte Arruit. There about 3,017 men were left without water and without supplies, with morale in ruins. Nador surrendered on 2 August, and its garrison was the only one spared. Zeluán surrendered on 3 August, and the survivors were tortured and killed. According to Spanish Wikipedia, Berenguer authorized the surrender of Monte Arruit on 9 August. The arms were handed over, and then the Rifians attacked and killed almost everyone. The officers were separated and held for ransom.",
        { note: "How many were killed after the surrender of Monte Arruit is uncertain. A newspaper speaks of about 3,000 murdered, and Spanish Wikipedia says it was almost all of the roughly 3,000. The English source warns that this is not confirmed by independent sources." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The greatest defeat of the Spanish army in the modern era, called in Spain the Disaster of Annual. More than 130 [[blockhouses|blocao]] were taken, and by the end of August Spain had lost all the territory conquered since 1909. Navarro, 534 military and 53 civilians became prisoners: 326 survived 18 months of captivity and were released on 27 January 1923, for a ransom of 4 million pesetas.",
        { h: "The casualties" },
        "The numbers of Spanish dead vary: 7,875 (Caballero Poveda, 1984), 8,180 (Palma Moreno, 2001), 8,668 (Indalecio Prieto, in October 1921), 13,192 (the official number presented to the Cortes) and 13,363 (the Picasso Report, including native troops). Rifian losses are unknown. One author speaks of about 800 killed and wounded. About 20,000 rifles, 400 machine guns and 129 cannons were lost, according to one source.",
        { h: "Why it matters" },
        "The Allendesalazar government fell, and Antonio Maura formed a national concentration government in August 1921. Indalecio Prieto accused the king in the Cortes on 27 October 1921. The Picasso Report, presented in July 1922, pointed to negligence by Berenguer and Navarro and reckless conduct by Silvestre. Primo de Rivera's coup, on 13 September 1923, froze the report and the commission of the Cortes. Berenguer was pardoned in 1924. Spain reconquered a good part of the Rif in 1922, and the war only ended after the landing at Alhucemas, in 1925, carried out together with France.",
        { h: "Curiosities and controversies" },
        { note: "The king: a rumor ran that Alfonso XIII had sent Silvestre a telegram saying 'Olé los hombres, el 25 te espero', linking 25 July to a victory. Several people claimed to have seen it, but no copy was found. The historians Tusell and García Queipo de Llano say there is no proof that the king encouraged the advance." },
        { note: "On 2 July 2012, the Cazadores de Alcántara regiment received the collective Laureate Cross of Saint Ferdinand for the rear-guard action." }
      ]}
    ]
  },

  taierzhuang: {
    war: "Second Sino-Japanese War (1937–1945)",
    hook: "The first time China beat the Japanese army in a major battle: inside a walled town, street by street.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the start of 1938, China had already lost Shanghai and Nanjing, and its air force and navy were almost destroyed. The Japanese high command did not plan new offensives, but the commanders in the field insisted on advancing north. In February, the two governments withdrew their ambassadors. The target was Xuzhou, the rail junction that joined the north-south and east-west lines. If the Japanese took it, they would join the forces of northern and southern China.",
        { h: "The road to Taierzhuang" },
        { timeline: [
          ["Early 1938", "The Japanese 10th Division crosses the Yellow River, takes Jinan almost without a fight and heads south along the Jinpu railway."],
          ["13 to 18 March", "Zhang Zizhong's 59th Army attacks near Linyi and forces the Japanese 5th Division, which landed at Qingdao, to fall back."],
          ["15 to 19 March", "The 10th Division breaks the Chinese lines at Tengxian and Lincheng and advances on Taierzhuang."],
          ["24 March", "The Japanese enter Taierzhuang by the northeast gate."],
          ["7 April", "The Japanese line breaks."]
        ]},
        "The 5th Division had been delayed for more than a month by Pang Bingxun's 39th Division. The Chinese, for their part, had improved discipline after the execution of General Han Fuju, who had abandoned Shandong. Reaching Taierzhuang, a small walled town near the [[Grand Canal|grande canal]], was the last stage of the 10th Division's advance."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Li Zongren, Fifth War Area" },
        "Commander of the [[Fifth War Area|quinta zona de guerra]], with Bai Chongxi as his deputy. According to some sources, the plan to encircle the Japanese, once they were committed to the conquest of the town, was his. He called the victory a 'symbol of national renaissance'.",
        { h: "Sun Lianzhong, Tang Enbo and Chi Fengcheng" },
        "Sun Lianzhong commanded the 2nd Group Army and, on 31 March, took command of the fighting in the town. Tang Enbo commanded the 20th Corps, which turned south. Chi Fengcheng commanded the 31st Division, which defended the town. Sun Zhen, of the 22nd Group Army, had marched more than 1,400 km to get there.",
        { h: "Isogai Rensuke and Itagaki Seishirō" },
        "Isogai commanded the Japanese 10th Division, with the Seya Task Force. Itagaki commanded the 5th Division, with the Sakamoto Task Force. Both were part of the Second Army of the North China Area Army."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "English Wikipedia gives about 72,278 men in the Chinese 20th Corps and attached units and from 17,000 to 60,000 Japanese, with 7 tanks and 39 [[tankettes|tanqueta]]. The numbers are debated, and those for the Chinese, adding up all the troops in the area, reach much higher.",
        { h: "The terrain" },
        "A town with a wall and narrow streets, near the Grand Canal. The tight streets canceled the Japanese advantage in artillery, aircraft and gas.",
        { h: "The battle in nine movements" },
        { formation: true },
        "First, the Japanese come down the railway to the north, and the 5th Division approaches from the east. In the town is the 31st Division, with the 2nd Group Army around it. The 20th Corps is to the northeast, near Yixian, and the 85th and 52nd Armies come from the south.",
        "Second, on 24 March, a Japanese force breaks through the northeast gate and is surrounded in the Chenghuang temple, where it is burned.",
        "Third, on 25 March, a Chinese [[armored train|trem blindado]] ambushes the Japanese, and about 3,000 Chinese soldiers make a night sortie and push them back.",
        "Fourth, from 26 to 28 March, the 20th Corps takes Yixian and turns south against the Japanese flank. The 55th Army cuts the railway near Lincheng. The Chinese artillery arrives on 28 March.",
        "Fifth, the Japanese breach the wall on the night of 29 March, and the fighting becomes house to house. On 31 March, Sun Lianzhong takes command.",
        "Sixth, on 1 April, a Japanese relief brigade is blocked and attacked from the rear. Eleven Japanese tanks attack at dawn: Chinese anti-tank guns destroy eight, and, according to accounts, [[suicide squads|esquadrão suicida]] destroy others.",
        "Seventh, from 2 to 5 April, the Japanese use [[tear gas|gás lacrimogêneo]] and an attack by 30 tanks and 60 armored cars, which pushes the Chinese 27th Division back to the Grand Canal. The Chinese hold the south gate, which lets them resupply the town. The Japanese control two thirds of it, but cannot resupply. On 5 April, seven Chinese divisions are north of the Japanese and four to the south.",
        "Eighth, on 6 April, the 85th and 52nd Armies meet at Taodun, and the ring closes.",
        "Ninth, on 7 April, the Japanese line collapses. The 5th and 10th Divisions fall back, leaving many dead and equipment. About 2,000 Japanese are said to have escaped."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Chinese victory, the first of any size in the war, part of the Battle of Xuzhou. The Chinese 31st Division, for example, had only 2,000 of 9,000 men fit for roll call after the battle.",
        { h: "The casualties: much debated numbers" },
        "The Japanese, in their records, speak of 411 killed and 1,319 wounded in the Seya Task Force, and the historian Jiang Keshi estimates fewer than 2,500 casualties in all. Chinese accounts speak of more than 20,000 Japanese killed and wounded, and one of them of more than 24,000 killed. Western sources vary: about 8,000 killed (Mitter, Frank, Van de Ven), 15,000 to 20,000 (MacKinnon), about 16,000 (Dorn). Chinese losses: 20,342 in the 20th Corps, 9,675 in the 2nd Group Army and 2,415 in the 22nd Group; Dorn speaks of more than 30,000 in all.",
        { h: "Why it matters" },
        "The victory shook the myth of Japanese invincibility and greatly lifted Chinese morale. Japan denied it at first. But it did not last: Xuzhou fell in May 1938, and the Chinese broke out of the encirclement and regrouped to defend Wuhan. In 2006, the Taierzhuang battlefield was declared a protected national site.",
        { h: "Curiosities and controversies" },
        { note: "The 'dare-to-die' squads, with dynamite and grenades against tanks, appear in popular books and are repeated from one to another. They are accounts, not facts confirmed by detailed records." },
        { note: "Dates: Wikipedia gives 22 March to 7 April, and other sources begin on 24 March. We use 24 March, when the Japanese entered the town." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  amiens: {
    terrain: [
      { t: "sea", x: -8, y: 19, w: 116, h: 3.5, l: "Somme River" },
      { t: "note", x: 8, y: 36, l: "Amiens" },
      { t: "note", x: 40, y: 4, l: "Chipilly hill" },
      { t: "note", x: 92, y: 74, l: "North ↑" }
    ],
    units: [
      { id: "iii", s: "a", k: "inf", w: 5, h: 12, l: "British III Corps" },
      { id: "aus", s: "a", k: "inf", w: 5, h: 12, l: "Australian Corps (Monash)" },
      { id: "can", s: "a", k: "inf", w: 5, h: 14, l: "Canadian Corps (Currie)" },
      { id: "fr", s: "a", k: "inf", w: 5, h: 14, l: "French First Army" },
      { id: "cavC", s: "a", k: "cav", w: 7, h: 5, l: "Cavalry Corps and Whippets" },
      { id: "gN", s: "b", k: "inf", w: 5, h: 12, l: "Germans north of the Somme" },
      { id: "gA", s: "b", k: "inf", w: 5, h: 12, l: "Germans (Australian front)" },
      { id: "gB", s: "b", k: "inf", w: 5, h: 14, l: "Germans (Canadian front)" },
      { id: "gF", s: "b", k: "inf", w: 5, h: 14, l: "Germans (French front)" }
    ],
    steps: [
      { t: "Before dawn on 8 August. From north to south: III Corps, the Australians, the Canadians and the French. The Canadians only arrived on 7 August, in secret.",
        p: { iii: [28, 10], aus: [28, 30], can: [28, 45], fr: [26, 59], cavC: [14, 38], gN: [45, 10], gA: [45, 30], gB: [45, 45], gF: [45, 59] } },
      { t: "4:20 a.m.: the creeping barrage falls on the Germans all at once, in thick fog. The Germans only answer after five minutes, and the Allied artillery is already aiming at almost all the enemy pieces.",
        p: { aus: [32, 30], can: [32, 45] } },
      { t: "Australians and Canadians advance behind the barrage and the tanks. By 11 a.m., the center has advanced 4.8 km.",
        p: { aus: [41, 30], can: [41, 45], gA: [52, 30], gB: [52, 45] } },
      { t: "45 minutes after the British, the French come in, on the right.",
        p: { fr: [34, 59], gF: [50, 59] } },
      { t: "The Cavalry Corps and the Whippets pass through the gaps. Aircraft and armored cars fire on German troops trying to regroup.",
        p: { cavC: [48, 38], aus: [47, 30], can: [47, 45] } },
      { t: "North of the Somme, III Corps is stopped short of the Chipilly hill. This is the weakest end of the line.",
        p: { iii: [33, 10] } },
      { t: "End of the day: Canadians 13 km, Australians 11 km, French 8 km, British 3.2 km. Many Germans surrender. A gap of 24 km opens south of the Somme.",
        p: { aus: [58, 30], can: [64, 45], fr: [51, 59], iii: [38, 10], cavC: [60, 38], gA: [66, 30], gB: [72, 45] }, x: ["gA", "gB"] },
      { t: "On 9 August, the infantry gets ahead of the artillery and the roads jam. In four days, of the more than 500 tanks, six remain ready. At Chipilly, the American 33rd Division attacks at 5:30 p.m. and takes the hill.",
        p: { iii: [41, 10], aus: [60, 30], can: [66, 45] } }
    ]
  },

  sakarya: {
    terrain: [
      { t: "hill", x: 56, y: 52, rx: 7, ry: 6, l: "Mangal Dağı" },
      { t: "hill", x: 66, y: 24, rx: 6, ry: 5, l: "Yıldız Dağı" },
      { t: "hill", x: 76, y: 42, rx: 6, ry: 5, l: "Ardız Dağı" },
      { t: "hill", x: 86, y: 32, rx: 6, ry: 5, l: "Çal Dağı" },
      { t: "note", x: 38, y: 6, l: "Sakarya River" },
      { t: "note", x: 90, y: 8, l: "Ankara →" },
      { t: "note", x: 20, y: 66, l: "Great Salt Desert" },
      { t: "note", x: 70, y: 66, l: "Haymana" },
      { t: "note", x: 10, y: 74, l: "Sketch: approximate positions" }
    ],
    units: [
      { id: "gIII", s: "a", k: "inf", w: 6, h: 14, l: "Greek III Corps" },
      { id: "gII", s: "a", k: "inf", w: 6, h: 14, l: "Greek II Corps" },
      { id: "gI", s: "a", k: "inf", w: 6, h: 14, l: "Greek I Corps" },
      { id: "tLine", s: "b", k: "inf", w: 6, h: 26, l: "Turks on the hills" },
      { id: "tLeft", s: "b", k: "inf", w: 16, h: 5, l: "Turkish left wing (Ilıca Özü)" },
      { id: "tCav", s: "b", k: "cav", w: 9, h: 5, l: "Turkish cavalry" }
    ],
    steps: [
      { t: "Mid-August. The Greeks are west of the Sakarya, in three columns. The Turks hold the hills to the east, with the left wing drawn back along the Ilıca Özü.",
        p: { gIII: [14, 20], gII: [14, 36], gI: [14, 52], tLine: [52, 30], tLeft: [60, 58], tCav: [66, 12] } },
      { t: "The Greeks try to envelop the Turkish left wing, the southern one, by a march of about a week through the Salt Desert, with little water and little food.",
        p: { gI: [30, 62, 20] } },
      { t: "23 and 24 August: the Greek attack. I Corps takes Mangal Dağı. The attacks southeast of Mangal and on Haymana do not get through, and the fighting breaks up.",
        p: { gI: [50, 52], gII: [32, 38], gIII: [32, 20], tLeft: [64, 60] } },
      { t: "The Turkish cavalry attacks the Greek supply lines from the rear. For several days, neither ammunition nor food reaches the front.",
        p: { tCav: [24, 34] } },
      { t: "30 August: III Corps takes Yıldız Dağı, and I Corps Ardız Dağı.",
        p: { gIII: [60, 24], gI: [70, 44], gII: [44, 36] } },
      { t: "2 and 3 September: the Greeks take Çal Dağı, the height nearest to Ankara. Some units come within about 50 km of the city.",
        p: { gI: [82, 34] } },
      { t: "The Greek attacks on Haymana fail. On 9 September, the Greek general staff suspends the offensive. Kemal moves his headquarters to Polatlı.",
        p: { gII: [52, 40] } },
      { t: "8 to 10 September: the Turks, in a counterattack in which Kemal takes part, retake Çal Dağı.",
        p: { gI: [70, 40] } },
      { t: "11 to 14 September: the Greeks fall back across the Sakarya, burning bridges, railways and villages. Only the Turkish cavalry pursues them.",
        p: { gI: [16, 50], gII: [14, 36], gIII: [14, 20], tCav: [30, 34] } }
    ]
  },

  taierzhuang: {
    terrain: [
      { t: "note", x: 50, y: 33, l: "Taierzhuang" },
      { t: "note", x: 14, y: 6, l: "Jinpu railway and Lincheng" },
      { t: "note", x: 16, y: 53, l: "Grand Canal" },
      { t: "note", x: 90, y: 74, l: "North ↑" },
      { t: "note", x: 12, y: 74, l: "Sketch: approximate positions" }
    ],
    units: [
      { id: "j10", s: "a", k: "inf", w: 14, h: 6, l: "10th Division (Isogai)" },
      { id: "j5", s: "a", k: "inf", w: 12, h: 6, l: "5th Division (Itagaki)" },
      { id: "c31", s: "b", k: "inf", w: 12, h: 6, l: "31st Division in the town" },
      { id: "c2g", s: "b", k: "inf", w: 12, h: 6, l: "2nd Group Army (Sun Lianzhong)" },
      { id: "c20", s: "b", k: "inf", w: 12, h: 6, l: "20th Corps (Tang Enbo)" },
      { id: "c55", s: "b", k: "inf", w: 10, h: 5, l: "55th Army" },
      { id: "c85", s: "b", k: "inf", w: 12, h: 6, l: "85th Army" },
      { id: "c52", s: "b", k: "inf", w: 12, h: 6, l: "52nd Army" }
    ],
    steps: [
      { t: "Mid-March. The Japanese 10th Division comes down the railway, to the north. The 5th approaches from the east. The Chinese 31st Division guards the town, with the 2nd Group Army beside it, the 20th Corps to the northeast. The 85th and 52nd Armies come from the south.",
        p: { j10: [50, 14], j5: [90, 28], c31: [50, 38], c2g: [28, 40], c20: [78, 14], c55: [30, 14], c85: [62, 62], c52: [38, 62] } },
      { t: "24 March: a Japanese force breaks through the northeast gate and is surrounded in the Chenghuang temple, where it is burned.",
        p: { j10: [50, 28] } },
      { t: "25 March: a Chinese armored train ambushes the Japanese, and about 3,000 Chinese soldiers make a night sortie that pushes them back.",
        p: { j10: [50, 22] } },
      { t: "26 to 28 March: the 20th Corps takes Yixian and turns south against the Japanese flank. The 55th Army cuts the railway near Lincheng, behind them.",
        p: { c20: [68, 22], c55: [50, 8] } },
      { t: "Night of 29 March to 1 April: the Japanese breach the wall, and the fighting is house to house. On 31 March, Sun Lianzhong takes command.",
        p: { j10: [50, 32], c31: [50, 42], c2g: [34, 40] } },
      { t: "1 April: a Japanese relief brigade is blocked and attacked from the rear. Eleven tanks attack at dawn, and Chinese anti-tank guns destroy eight.",
        p: { j5: [80, 26], c20: [72, 26] } },
      { t: "2 to 5 April: the Japanese use tear gas and 30 tanks with 60 armored cars. The Chinese hold the south gate and resupply the town, but the Japanese cannot. Seven Chinese divisions are to the north, and four to the south.",
        p: { j10: [50, 34], c85: [62, 56], c52: [38, 56] } },
      { t: "6 April: the 85th and 52nd Armies meet at Taodun. The ring closes.",
        p: { c85: [54, 48], c52: [46, 48] } },
      { t: "7 April: the Japanese line collapses. The 5th and 10th Divisions fall back, leaving many dead and equipment. About 2,000 Japanese are said to have escaped.",
        p: { j5: [90, 20], j10: [50, 24] }, x: ["j10", "j5"] }
    ]
  }
});
