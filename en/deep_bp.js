// In-depth battles, batch bp: beaumonthamel, vimy, dieppe (Canadian pack).
// Checked against the English Wikipedia articles on the First day on the Somme, the Capture of Beaumont-Hamel, the
// Royal Newfoundland Regiment, the Beaumont-Hamel Newfoundland Memorial, the Battle of Vimy Ridge and the Dieppe Raid,
// the pages of Veterans Affairs Canada and Valour Canada on Beaumont-Hamel and Vimy, and the works those pages cite
// (Philpott, Edmonds, Nicholson, Cook, McKay and Swift, Granatstein, Reynolds, Villa, O'Keefe). Where sources
// disagree the text says so.

Object.assign(GLOSSARY, {
  "terra de ninguém": "The open ground between the two sides' trenches. Anyone crossing it in front of machine guns and artillery has almost nowhere to hide.",
  "mina de túnel": "A tunnel dug under enemy lines and packed with explosive. In the First World War, sappers dug dozens of them and set them off shortly before an attack, to blow craters and shake the defenders.",
  "trincheira de apoio": "A trench behind the front line, where troops who have not yet attacked wait. To reach the front line, the soldiers have to cross other trenches.",
  "trincheira de ligação": "A trench that links the rear to the front line. On the day of an attack it fills with soldiers, ammunition and wounded, and movement slows to a crawl.",
  "foguete de sinalização": "A rocket that climbs and bursts into coloured light, used to send a message without a radio. Agreed colours and times meant things like 'we have arrived' or 'we need artillery'.",
  "bombardeio preparatório": "Artillery fire lasting hours or days before an attack, meant to destroy barbed wire and shelters. In 1916 it failed wherever the Germans had deep shelters.",
  "brigada de infantaria": "A group of four infantry battalions fighting together, in the British army of 1916. Three brigades made up a division.",
  "divisão de infantaria": "A large unit of more than ten thousand men, with its own infantry, artillery and services, under one general. In the British and Canadian armies of the First World War, a division had three brigades.",
  "dominion": "A British colony that governed itself and had its own government, but was still part of the British Empire. Canada, Australia and Newfoundland were dominions in 1914.",
  "galeria de acesso": "A tunnel dug under the ground to bring soldiers and ammunition forward without being seen or hit. At Vimy there were twelve, the longest about 1.2 km.",
  "linhas de objetivo": "Lines drawn on the map before the attack, one behind the other. When the infantry reaches one, it stops, reorganizes and waits for the barrage to move on. At Vimy they were coded black, red, blue and brown.",
  "incursão de trincheira": "A small, quick attack on an enemy trench, to take prisoners, seize documents and test the defenses. The Canadians made 55 before Vimy.",
  "paredão": "A low wall of stone or concrete along a beach, protecting the town from the sea. The soldiers landing at Dieppe were pinned against it.",
  "seixos": "Round, smooth stones, the size of a fist, that cover some beaches. A tank's tracks spin on them, and that is what trapped many tanks at Dieppe.",
  "tanque churchill": "A heavy British tank, slow and thickly armored, designed to go with the infantry. At Dieppe it was used in combat for the first time.",
  "bateria costeira": "A group of heavy guns on land, for firing at enemy ships. At Dieppe, some stood in tunnels in the cliffs, and the Allied planners did not know about many of them.",
  "cortina de fumaça": "Smoke spread on purpose, by aircraft or ships, so that the enemy cannot see the troops approaching.",
  "operações combinadas": "The British name for operations in which navy, army and air force act together, such as a landing. The Combined Operations Headquarters planned the attack on Dieppe.",
  "porto mulberry": "An artificial harbor, built from prefabricated pieces, towed across the English Channel in 1944 and assembled off Normandy. It made it unnecessary to capture a whole French port intact.",
  "blindados de hobart": "Tanks adapted by the British general Percy Hobart for the beaches, with flamethrowers, carpets that unrolled over soft sand and other tools. The soldiers nicknamed them 'funnies'.",
  "ordem de comandos": "A secret order from Hitler, of October 1942, to kill captured Allied commandos, even if they were in uniform and had surrendered."
});

Object.assign(DEEP, {
  beaumonthamel: {
    war: "First World War, Battle of the Somme (1916)",
    hook: "In about half an hour, a regiment from a North Atlantic island lost almost all its men, and Newfoundland still keeps that day.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1914, Newfoundland was a British [[dominion|dominion]], a North Atlantic island that governed itself and was not part of Canada. When Britain went to war, the island went too, and volunteers formed the Newfoundland Regiment. The first of them, about five hundred, became known as the 'First Five Hundred'. In September 1915 the regiment fought at Gallipoli, and in early 1916 it went to France, where it joined the 88th [[infantry brigade|brigada de infantaria]] of the 29th [[infantry division|divisão de infantaria]].",
        "In the summer of 1916, the Allies prepared a great offensive on the River Somme. The Battle of the Somme as a whole has its own page on this site. Here the subject is one piece of it: the 29th Division's attack in front of Beaumont-Hamel, a village protected by a fortified hill, the Hawthorn one, and by a deep Y-shaped valley.",
        { h: "The road to 1 July" },
        { timeline: [
          ["Aug 1914", "Newfoundland forms a regiment of volunteers."],
          ["Sep 1915", "The regiment arrives at Gallipoli and joins the 88th Brigade of the 29th Division."],
          ["Early 1916", "It goes to the Western Front, in France."],
          ["1 Jul, 7:20", "A mine explodes under the German Hawthorn redoubt."],
          ["1 Jul, 7:30", "The 29th Division's infantry attacks and is stopped."],
          ["1 Jul, ≈ 9:15", "The Newfoundland Regiment leaves its support trench."],
          ["2 Jul", "Only 68 men answer the roll call."]
        ]},
        "The British commanders expected seven days of bombardment to destroy German wire and shelters. In many places along the Somme front, that did not happen."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Aylmer Hunter-Weston" },
        "A lieutenant-general, he commanded VIII Corps, which included the 29th Division. The corps' attack on the north bank of the River Ancre was, according to historians, one of the costliest failures of the first day: more than 14,000 casualties, according to Philpott drawing on Edmonds. The diary of the commander-in-chief, Douglas Haig, even suggested, wrongly, that few VIII Corps men had left their trenches.",
        { h: "Beauvoir De Lisle" },
        "A major-general, he commanded the 29th Division. When he saw white German rockets and took them for signs of British success, he sent the 88th Brigade forward from reserve. After the battle, he praised the Newfoundland Regiment's 'trained and disciplined valour' and wrote that the attack went no further because dead men can advance no more.",
        { h: "Arthur Hadow and the men of the regiment" },
        "Lieutenant-Colonel Arthur Lovell Hadow commanded the regiment. Among the dead there were 14 pairs of brothers, including four lieutenants of the Ayre family of St. John's.",
        { h: "The defenders" },
        "Reserve Infantry Regiment 119, of the 26th Reserve Division, defended the village. Its soldiers sat out the bombardment in deep shelters dug under the village and, when the artillery stopped, came up and fired from the ruins of the trenches and from the Y-shaped ravine, which the Germans called the Leiling Schlucht."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "On the British side, the 29th Division attacked with the 86th and 87th Brigades in front. The 88th Brigade, with the Newfoundland Regiment and the 1st Essex Regiment, was in reserve. Sources differ on how many men of the regiment attacked: one source speaks of 22 officers and 758 other ranks (780); another, much repeated count, of 801; Veterans Affairs Canada, of about 800.",
        { h: "The terrain" },
        "The village lay on a slope behind a German [[redoubt|reduto]], the Hawthorn one, on top of a spur. To the north, the Y-shaped ravine (the Leiling) served as shelter and as a firing position. Between the two sides' trenches lay [[no man's land|terra de ninguém]], where there was [[barbed wire|arame farpado]] that the bombardment had not cut everywhere.",
        "The regiment waited in St. John's Road, a [[support trench|trincheira de apoio]] about 200 meters behind the British front line. Beyond it, the men would have to cross the front line and more than 500 meters of wire and open ground to the German trenches. Halfway, a dead, gnarled tree served as a landmark. The soldiers called it the Danger Tree, and that was where German artillery began to fire.",
        { h: "The battle in eight moves" },
        { formation: true },
        "First, at 7:20, the [[mine|mina de túnel]] under the Hawthorn redoubt exploded, with about 18 tons of explosive (the figure is 40,000 pounds). It was set off ten minutes before the attack, so that the British could occupy the crater, but the explosion only warned the Germans, and they took the far lip of the crater before the British did.",
        "Second, at 7:30, the leading brigades attacked and were stopped by [[machine-gun|metralhadora]] and artillery fire. Third, the Germans fired white rockets, which the British took for success signals. General De Lisle ordered the 88th Brigade to advance.",
        "Fourth, at about 9:15, the Newfoundland Regiment and the 1st Essex left the support trench. To avoid the [[communication trenches|trincheira de ligação]], which were jammed, the Newfoundlanders crossed the open ground behind the British line. Many were hit before they even reached the front line.",
        "Fifth, those who got into no man's land headed for the Danger Tree. German artillery and machine guns swept the ground. Sixth, a few crossed no man's land near the Y-shaped ravine, but the wire, still standing, held them under fire.",
        "Seventh, the attack stopped. Eighth, that night and the next day, what was left of the regiment was counted. A much repeated count says that, of 801 men, 255 died, 386 were wounded and 91 went missing. Another source gives 710 casualties (91%). All agree on one number: 68 men answered the roll call on 2 July.",
        "The regiment returned to the front line, near Auchonvillers, on 14 July, with reinforcements."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The result" },
        "The attack failed. VIII Corps had more than 14,000 casualties, 5,240 of them from the 29th Division. Along the whole Somme front, the first day cost the British army 57,470 casualties, 19,240 of them dead. Beaumont-Hamel only fell on 13 November 1916, in the Battle of the Ancre, when the 51st (Highland) Division attacked in fog, with much better cooperation between infantry and artillery.",
        { h: "The regiment afterwards" },
        "The regiment rebuilt itself and fought at Gueudecourt, in October 1916, and at Monchy-le-Preux, on 23 April 1917, where it lost 485 men in a day but held off a German attack. The king granted it the title 'Royal', the only one given to a British regiment during the war. Sources differ on the date: December 1917 or 25 January 1918. More than 6,200 Newfoundlanders served in the war, and more than 1,300 died.",
        { h: "The memory" },
        "Newfoundland bought the land in 1921, on the initiative of Father Thomas Nangle, who had served with the regiment. In 1925, Earl Haig unveiled the caribou memorial, the regiment's emblem, by Basil Gotto. The monument bears the names of more than 800 men with no known grave. The park, with preserved trenches, is a National Historic Site of Canada, and UNESCO recognized it as a World Heritage Site in 2023. 1 July is Memorial Day in Newfoundland and Labrador.",
        { note: "Newfoundland only joined Canada in 1949. Before that, in 1934, the island had handed its government to an appointed commission, amid a financial crisis. Some historians include the war debt among the causes of that crisis, but its weight is debated." },
        { note: "1 July 1916 is the day the British army lost the most men: about 57,000 casualties. Among the dead of the Newfoundland Regiment there were 14 pairs of brothers." }
      ]}
    ]
  },

  vimy: {
    war: "First World War, Battle of Arras (1917)",
    hook: "Four Canadian divisions attacked together for the first time and took a ridge on a snowy morning. What that means for Canada is still argued over.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Vimy Ridge is a rise about seven kilometers long, in northern France, that overlooks the plain of Douai. The Germans had held it since 1914. The French and British had attacked there without managing to keep hold of it, and the region became a graveyard.",
        "In 1917, the Allies planned two linked offensives: the British one, at Arras, and Nivelle's French one, on the Aisne. The attack at Vimy was part of the first. It was meant to protect the flank of the British First and Third Armies to the south, exposed to fire from the ridge, and to pull German reserves away from the Aisne.",
        { h: "The road to the ridge" },
        { timeline: [
          ["January 1917", "Canadian officers study the French experience at Verdun."],
          ["5 Mar", "General Horne approves the plan."],
          ["In the previous 4 months", "The Canadian Corps carries out 55 [[trench raids|incursão de trincheira]]."],
          ["2 Apr", "The week of bombardment begins, which the Germans called the 'week of suffering'."],
          ["9 Apr, 5:30", "Attack, on Easter Monday. It had been set for 8 April, but was postponed 24 hours at the French request."],
          ["12 Apr", "The 4th Division takes the last position, the hill called the Pimple."]
        ]}
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Julian Byng" },
        "A British general who commanded the Canadian Corps. The corps' plan was approved in March by General Horne, commander of the First Army. It was the first attack in which the corps fought as a single unit.",
        { h: "Arthur Currie" },
        "A Canadian, he commanded the 1st Division. Later, in 1917, he took command of the corps. He is remembered for his attention to planning and to the use of artillery.",
        { h: "The German side" },
        "Ludwig von Falkenhausen's 6th Army had about twenty divisions. The ridge was defended by Group Vimy, built around Karl von Fasbender's I Bavarian Reserve Corps. The Germans had adopted [[defense in depth|defesa em profundidade]], but at Vimy little of the new doctrine had been put into practice, and the companies were down to about 150 men, under strength. After the battle, a German court of enquiry blamed the 6th Army headquarters for ignoring warnings, and Falkenhausen lost his command."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces and the preparation" },
        "The Canadian Corps brought together four Canadian divisions and the British 5th Division, plus artillery, engineer and labor troops, about 170,000 men in all, of whom 97,184 were Canadian. It had about three times the normal artillery of a [[corps|corpo de exército]] and 1.6 million shells set aside. In the previous week, [[counter-battery fire|contrabateria]] used up 125,900 shells. British aviation put in 25 squadrons, with 365 aircraft, and lost 131 aircraft in the first week of April alone.",
        "Sappers dug twelve [[access tunnels|galeria de acesso]], up to 1.2 km long, about 10 meters deep, so the infantry could reach the front unseen. Mine tunnels were dug under the German positions. The troops rehearsed on models of the terrain and received more than 40,000 maps. The [[creeping barrage|barragem rolante]] would advance in steps of about 100 meters.",
        { h: "The terrain" },
        "Four [[objective lines|linhas de objetivo]] were marked on the map: black, red, blue and brown. The 1st Division attacked in the south, where the distance was longest, the 2nd would take the village of Thélus, the 3rd would attack La Folie, in the center, and the 4th was in the north, including Hill 145, the highest point, and then the Pimple. On the German side, the 79th Reserve Division held the center, including Hill 145, and the 16th Bavarian Division the north. The German reserves were about 24 km away, too far to arrive in time.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, at 5:30 on 9 April, the barrage began. About 30 seconds later, the mines under no man's land exploded. The weather, cold, turned to snow and sleet, blowing in the defenders' faces.",
        "Second, by 6:25, the 1st, 2nd and 3rd Divisions reached the black line. Third, between 7:00 and 7:30, they reached the red one. In the 3rd Division, at 9:00, it was learned that its left flank was exposed. Fourth, the 4th Division, in the north, had been stopped almost at once: the [[machine guns|metralhadora]] were in trenches that the bombardment had not destroyed, and it only completed its first objective hours later.",
        "Fifth, reserve attacks pushed the Germans off the southwest part of Hill 145, when they ran out of ammunition. At about 18:00, the Germans counterattacked and drove the Canadians out of the ruins of the village of Vimy, but did not retake the third line south of it.",
        "Sixth, on 10 April, rested brigades arrived by 9:30. Thélus and the blue line, with Hill 135, fell at about 11:00. The barrage stopped for an hour and a half to bring the machine guns forward. The brown line was taken at about 14:00, but the tank-supported advance toward Farbus was stopped by German fire.",
        "Seventh, at about 15:15, the 4th Division briefly took the northern half of Hill 145, and a counterattack retook it. Eighth, with the salient outflanked, the Germans withdrew from the ridge to the Oppy–Méricourt line.",
        "Ninth, on 12 April, after an attempt that failed at dawn and a barrage of gas projectiles on Givenchy-en-Gohelle, the 10th Brigade took the whole Pimple at about 18:00, helped by the snow and the wind."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The result" },
        "The Canadians had 10,602 casualties, 3,598 killed and 7,004 wounded. German losses are uncertain: the first estimates spoke of about 20,000. The German historical service gave the 6th Army 79,418 casualties in April and May, including 22,792 missing, and Crown Prince Rupprecht spoke of 85,000, but those numbers cover the whole front and a longer period than the battle. About 4,000 Germans were captured. The Germans never tried to retake the ridge, not even in 1918.",
        "The Germans themselves did not see Vimy as a decisive defeat: there was no breakthrough. The Battle of Arras went on, and Nivelle's French offensive, which Vimy was meant to serve, failed. Historians credit the Canadian success to planning, artillery, training and the German failure to apply their own new doctrine.",
        { h: "Vimy and Canada's identity" },
        "Vimy was the first time the four Canadian divisions fought together, and it became a national symbol. One of the most quoted lines is the one attributed to Brigadier-General Alexander Ross, who was at Vimy: 'in those minutes I witnessed the birth of a nation'. There is no agreement on when he said it. Valour Canada dates it to 1967, the fiftieth anniversary of the battle and the centenary of Confederation, while others place it some years after the war.",
        "Those who defend the idea recall that it was the first time the four Canadian divisions fought together and that the planning was careful. Critics answer in several ways. The historian Jack Granatstein says, according to Valour Canada, that Vimy did not win the war and did not change anything, and finds it curious that it has remained a point of reference. Ian McKay and Jamie Swift, in the book The Vimy Trap, argue that the 'birth of a nation' thesis is highly contested and arose when most of the participants had already died. Others recall that France and Britain had already fought there, that a British division attacked alongside, that the corps was under British command and that the creeping barrage, for example, was already known and had been used before, on the Somme.",
        { h: "The memorial" },
        "France gave Canada perpetual use of the land in 1922. The Toronto architect and sculptor Walter Allward designed the Canadian National Vimy Memorial, which he called a 'sermon against the futility of war'. It took eleven years to build and cost 1.5 million dollars. It was unveiled on 26 July 1936 by Edward VIII, with the French president Albert Lebrun, before more than 50,000 people (the Canadian War Museum's figure is 100,000). Prime Minister Mackenzie King did not attend. The memorial was restored in 2004, Queen Elizabeth II rededicated it in 2007, and on 9 April 2017, at the centenary, Prime Minister Justin Trudeau, the Prince of Wales and President François Hollande were there.",
        { note: "Almost all of the park's grounds remain closed to the public, because of tunnels, craters and unexploded munitions." }
      ]}
    ]
  },

  dieppe: {
    war: "Second World War, Western Front (1942)",
    hook: "A one-day attack on a French port cost Canada almost 3,400 men, and people still argue over what D-Day learned from it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1942, Germany was fighting in the Soviet Union, and Stalin was asking the Western Allies to open a second front in Europe. Britain could not yet invade France. But it could test, with a raid, what it would be like to land against German defenses, and show the Soviets and the public that the effort went on.",
        "The aims of the attack on Dieppe, according to the sources, were to test the capture of a port in an opposed [[landing|desembarque]], to gather intelligence, to destroy coastal defenses, port installations and important buildings, to raise morale, to support the Soviets and to draw the Luftwaffe into a battle on terms favorable to the RAF. The Canadians, who were in England and had not yet fought in Europe, were chosen for most of the force.",
        { h: "From Rutter to Jubilee" },
        { timeline: [
          ["4 Mar 1942", "Louis Mountbatten becomes Chief of Combined Operations."],
          ["5 Jul", "The heavy air bombardment of Dieppe is cancelled."],
          ["7 Jul", "Operation Rutter, the first plan, is cancelled after German bombers hit two assault ships."],
          ["August", "Mountbatten revives the plan as Operation Jubilee."],
          ["19 Aug, 3:48", "The Allied ships run into a German convoy."],
          ["19 Aug, ≈ 4:50", "The landings begin."]
        ]},
        "The Jubilee plan was almost the same as Rutter's, but without the heavy bombing. Arthur Harris, of Bomber Command, was against the planned air attack. The First Sea Lord, Dudley Pound, would not risk larger ships in waters without air superiority, and naval gunfire support was left to six Hunt-class destroyers."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Louis Mountbatten" },
        "Chief of [[Combined Operations|operações combinadas]] since March 1942, he was charismatic and had little combat experience. He pushed to relaunch the operation after Rutter was cancelled and later maintained that the raid had been worth it. Churchill backed the attack and reviewed the plan with Mountbatten.",
        { h: "The other names" },
        "Captain John Hughes-Hallett commanded the naval side. General John Roberts, the 2nd Canadian Division, and Generals Andrew McNaughton and Harry Crerar supported Canadian participation. Montgomery recommended cancelling the plan. Among the [[commando|comandos]] leaders, Lord Lovat headed No. 4, and John Durnford-Slater No. 3. Lieutenant-Colonel Charles Merritt, of the South Saskatchewan, Lieutenant-Colonel Dollard Ménard, of the Fusiliers Mont-Royal, and the chaplain John Weir Foote, of the Royal Hamilton Light Infantry, appear again below. On the German side, the 302nd Infantry Division was commanded by General Konrad Haase."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "6,086 men landed, about 5,000 of them Canadian. The 2nd Canadian Division sent the Royal Regiment of Canada, the Royal Hamilton Light Infantry, the Essex Scottish, the Fusiliers Mont-Royal, the South Saskatchewan Regiment and the Queen's Own Cameron Highlanders. The Calgary Regiment brought the [[Churchill tanks|tanque churchill]]. Also coming were British commandos Nos. 3, 4, 10 and 40, A Commando of the Royal Marines, 50 American Rangers and 15 French commandos. The naval force numbered 237 ships and landing craft, with cover from 56 fighter squadrons. The number of tanks is uncertain: one source's text speaks of 58 planned, and another of 29.",
        "On the German side, the 302nd Division had between 1,500 men in the area (one source) and about 6,000 (the historian Tim Saunders). The Todt Organization had built many fortifications, among them heavy artillery in tunnels in the cliffs, which the British planners hardly knew about. The Germans were on alert, because of double agents and increased radio and shipping traffic.",
        { h: "The terrain and the intelligence errors" },
        "Dieppe sits on a bay of [[seawall|paredão]] and [[shingle|seixos]] beach, between two high cliffs. The planners mistook the German division, underestimated its strength, got the position of its headquarters wrong and missed many of the [[coastal batteries|bateria costeira]]. The slope of the beaches was judged, in part, from holiday photographs. Many veterans believed that the guns on the cliffs did the most to stop the attack.",
        { h: "The battle in ten moves" },
        { formation: true },
        "First, before dawn, the fleet and the five groups approached in the dark. Second, at 3:48, a German convoy ran into the landing craft of No. 3 Commando, and the alarm sounded. The German radar at Pourville had picked out columns of stationary ships at 3:45, but naval command only believed the warning at 4:35.",
        "Third, at 4:50, No. 3 Commando tried to land at Yellow (Berneval), was almost entirely driven back, and its men surrendered. Major Peter Young landed with 18 men, but could not destroy the battery. At the Orange point (Varengeville), Lord Lovat attacked and silenced the Hess battery, the only success of the operation.",
        "Fourth, at 4:52, the South Saskatchewan arrived unnoticed at Green (Pourville), but most of it landed west of the River Scie, and had to cross the only bridge to enter Pourville. Machine guns and anti-tank guns stopped it there. Lieutenant-Colonel Merritt crossed the bridge several times, standing up, to show it could be done, and received the Victoria Cross.",
        "Fifth, at Blue (Puys), the Royal Regiment of Canada and three platoons of the Black Watch landed about 20 minutes late, when the [[smoke screen|cortina de fumaça]] had already dissipated and the darkness was gone. Pinned against the seawall and swept by a [[bunker|bunker]], they had, out of 556 men, about 200 dead and 264 captured.",
        "Sixth, on the main beach (Red and White), the Essex Scottish and the Royal Hamilton attacked head-on. Four destroyers fired, and five squadrons of Hurricanes laid smoke. Sources differ on the time of the main attack, but it came at about 5:20. Seventh, the tanks arrived late. Of the 29 that tried to land, two sank and twelve bogged down in the shingle. Fifteen crossed the seawall, but none returned to England.",
        "Eighth, at Pourville, the Camerons got farther than any other troops that day, but were forced back. Only 341 men reached the landing craft. The rest surrendered. Ninth, at 7:00, the Fusiliers Mont-Royal, under Lieutenant-Colonel Ménard, set out in 26 landing craft and were destroyed by heavy fire, with few men reaching the town. The Royal Marines were sent in support, and Lieutenant-Colonel Phillipps ordered them to turn back and was killed moments later.",
        "Tenth, the withdrawal from the main beaches began at about 9:40 and ended at about 14:00. The chaplain Foote chose to be captured to look after the prisoners, and received the Victoria Cross."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The numbers" },
        "Of about 5,000 Canadians, 3,367 were killed, wounded or captured: 68%. Counts give 907 dead, 2,460 wounded and between 1,874 and 1,946 prisoners. Some cite only the dead, about 18%, which some historians criticize as a selective measure. The Essex Scottish came back with 52 of 553 men, and the Royal Regiment of Canada had 94% casualties. The commandos lost 247. The navy lost a destroyer, HMS Berkeley, and 33 landing craft, and had about 550 dead and wounded. The RAF lost 106 aircraft (another sum, by type, gives 100). On the German side, the count is about 600 casualties.",
        { h: "Did Dieppe teach D-Day?" },
        "Churchill and Mountbatten said the lessons were worth the cost. Mountbatten even said that the Battle of Normandy was won on the beaches of Dieppe, but that line has no reliable source. Among the lessons cited are preliminary bombardment, the value of surprise, intelligence on fortifications, the danger of attacking a defended port head-on and the need for withdrawal craft. Dieppe is also credited with the impetus for the [[Mulberry harbors|porto mulberry]], for [[Hobart's Funnies|blindados de hobart]], for studies of beach geology and for a tactical air force more closely integrated with the army.",
        "Critics answer on four points. First, preliminary bombardment was already common Allied practice. Second, Operations Torch, Husky and Avalanche, and the Battle of Tarawa, taught D-Day more. Third, the idea of the Mulberries is credited by some to Hughes-Hallett, but he himself said that Churchill had proposed it months before Dieppe. Fourth, Captain Patrick Porteous, who received the Victoria Cross for Dieppe, called Mountbatten's line nonsense and said the same could have been learned on a beach in England.",
        { h: "The consequences" },
        "The Germans took Dieppe as a lesson and invested in coastal defenses. The assault plan of a Canadian brigade, which Brigadier Southam tried to bury and the Germans captured, ordered prisoners to be shackled. On 8 October 1942, the Germans tied up British and Canadian prisoners in reprisal, and counter-reprisals followed. In October, Hitler issued the [[Commando Order|ordem de comandos]], which cited Dieppe and the island of Sark as justification.",
        { note: "The historian David O'Keefe argues that Dieppe was also a cover for capturing a four-rotor Enigma machine. Eric Grove replied that the thesis reflects the current fascination with intelligence secrets more than evidence. Leah Garrett found a report on an X-Troop mission, which failed. On whether the Germans had been warned, Roskill, in 1964, thought the warnings were coincidence, and James Shelley, in 2023, found no proof of a specific warning." },
        { note: "Historians also disagree on whether Mountbatten acted without authority in relaunching the operation, since the Chiefs of Staff had approved the original plan, Rutter. The underlying question is the same as in 1942: what was gained, and whether the price was necessary." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  beaumonthamel: {
    terrain: [
      { t: "hill", x: 72, y: 31, rx: 15, ry: 5, l: "Hawthorn Ridge" },
      { t: "note", x: 12, y: 33, l: "German line" },
      { t: "note", x: 12, y: 47, l: "British line" },
      { t: "note", x: 12, y: 55, l: "St. John's Road" },
      { t: "note", x: 47, y: 41, l: "Danger Tree" },
      { t: "note", x: 88, y: 5, l: "East ↑" }
    ],
    units: [
      { id: "b86", s: "a", k: "inf", w: 16, h: 3, l: "86th Brigade" },
      { id: "b87", s: "a", k: "inf", w: 16, h: 3, l: "87th Brigade" },
      { id: "nf", s: "a", k: "inf", w: 12, h: 3, l: "Newfoundland Regiment" },
      { id: "ess", s: "a", k: "inf", w: 10, h: 3, l: "1st Essex" },
      { id: "gRed", s: "b", k: "camp", w: 12, h: 4, l: "Hawthorn redoubt" },
      { id: "gLine", s: "b", k: "inf", w: 22, h: 3, l: "German infantry (RIR 119)" },
      { id: "gRav", s: "b", k: "camp", w: 12, h: 4, l: "Y Ravine" },
      { id: "gVil", s: "b", k: "inf", w: 34, h: 4, l: "Reserves and shelters under the village" }
    ],
    steps: [
      { t: "Schematic, not to scale. The 86th and 87th Brigades are in the front line. The Newfoundland Regiment and the 1st Essex wait behind, in St. John's Road. The Germans wait in deep shelters.",
        p: { b86: [72, 47], b87: [40, 47], nf: [50, 55], ess: [68, 55], gRed: [74, 30], gLine: [48, 34], gRav: [30, 26], gVil: [50, 14] } },
      { t: "7:20: the mine under the Hawthorn redoubt explodes. It only warns the Germans, who take the far lip of the crater before the British do.",
        p: { b86: [72, 43], gRed: [74, 31] } },
      { t: "7:30: the leading brigades attack and are stopped by machine guns and artillery.",
        p: { b86: [72, 40], b87: [40, 40] }, x: ["b86", "b87"] },
      { t: "The Germans fire white rockets, which the British take for success signals. General De Lisle orders the 88th Brigade forward from reserve.",
        p: { nf: [50, 54], ess: [68, 54] } },
      { t: "At about 9:15, the Newfoundland Regiment and the 1st Essex leave St. John's Road. To avoid the jammed communication trenches, they cross open ground behind the British line. Many are hit there.",
        p: { nf: [50, 47], ess: [68, 47] } },
      { t: "Those who get through enter no man's land and gather at the Danger Tree. German artillery and machine guns sweep the ground.",
        p: { nf: [48, 41], ess: [66, 41] } },
      { t: "A few get near the Y-shaped ravine, but the wire, still standing, pins them under fire.",
        p: { nf: [42, 37], ess: [66, 40] }, x: ["ess"] },
      { t: "The attack stops. The next day, only 68 men of the regiment answer the roll call.",
        p: { nf: [42, 37] }, x: ["b86", "b87", "ess", "nf"] }
    ]
  },

  vimy: {
    terrain: [
      { t: "hill", x: 62, y: 34, rx: 8, ry: 31, l: "Vimy Ridge" },
      { t: "note", x: 70, y: 10, l: "Hill 145" },
      { t: "note", x: 70, y: 3, l: "Pimple" },
      { t: "note", x: 70, y: 38, l: "Thélus" },
      { t: "note", x: 88, y: 66, l: "North ↑" }
    ],
    units: [
      { id: "d5", s: "a", k: "inf", w: 6, h: 7, l: "5th Div. (Brit.)" },
      { id: "d1", s: "a", k: "inf", w: 6, h: 10, l: "1st Div." },
      { id: "d2", s: "a", k: "inf", w: 6, h: 10, l: "2nd Div." },
      { id: "d3", s: "a", k: "inf", w: 6, h: 10, l: "3rd Div." },
      { id: "d4", s: "a", k: "inf", w: 6, h: 10, l: "4th Div." },
      { id: "gS", s: "b", k: "inf", w: 6, h: 10, l: "German div. (south)" },
      { id: "g79", s: "b", k: "inf", w: 6, h: 10, l: "79th Reserve Div." },
      { id: "g16", s: "b", k: "inf", w: 6, h: 10, l: "16th Bavarian Div." },
      { id: "gRes", s: "b", k: "inf", w: 6, h: 14, l: "Reserves (≈ 24 km)" }
    ],
    steps: [
      { t: "Schematic, not to scale. Four Canadian divisions and the British 5th, side by side, from south to north. On the far side of the ridge are three German divisions, and the reserves are far away.",
        p: { d5: [14, 62], d1: [14, 52], d2: [14, 40], d3: [14, 28], d4: [14, 15], gS: [72, 52], g79: [72, 28], g16: [72, 13], gRes: [94, 34] } },
      { t: "9 April, 5:30: the barrage begins and, half a minute later, the mines explode. Snow and wind blow in the Germans' faces. The four divisions go together.",
        p: { d5: [22, 62], d1: [22, 52], d2: [22, 40], d3: [22, 28], d4: [22, 15] } },
      { t: "By 6:25, the 1st, 2nd and 3rd reach the black line. The 4th, in the north, is stopped by machine guns in intact trenches.",
        p: { d1: [36, 52], d2: [36, 40], d3: [36, 28], d4: [26, 15], d5: [32, 62] } },
      { t: "Between 7:00 and 7:30, the three divisions of the south and center reach the red line. The 3rd learns, at 9:00, that its left flank is exposed.",
        p: { d1: [48, 52], d2: [48, 40], d3: [50, 28], d4: [30, 15], g79: [74, 28] } },
      { t: "Reserves of the 4th Division push the Germans off the southwest part of Hill 145, when they run out of ammunition. At about 18:00, a German counterattack drives the Canadians out of the village of Vimy.",
        p: { d4: [42, 14], g16: [76, 13] } },
      { t: "10 April: rested brigades arrive. Thélus and the blue line fall at about 11:00. The barrage stops for an hour and a half, to bring the machine guns up.",
        p: { d1: [58, 52], d2: [62, 40], d3: [60, 28], d5: [40, 62] } },
      { t: "The brown line is taken at about 14:00, but the advance with tanks toward Farbus is stopped. At 15:15, the 4th Division briefly takes the northern half of Hill 145 and loses it to a counterattack.",
        p: { d1: [68, 52], d2: [68, 40], d3: [66, 28], d4: [58, 13] } },
      { t: "With the salient outflanked, the Germans withdraw from the ridge to the Oppy–Méricourt line.",
        p: { gS: [88, 52], g79: [88, 28], g16: [88, 13] }, x: ["gS", "g79", "g16"] },
      { t: "12 April: after an attempt that fails at dawn and a barrage of gas projectiles, the 10th Brigade takes the whole Pimple at about 18:00, helped by the snow and the wind.",
        p: { d4: [64, 5] } }
    ]
  },

  dieppe: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 21, l: "English Channel" },
      { t: "note", x: 10, y: 23, l: "Orange" },
      { t: "note", x: 28, y: 23, l: "Green" },
      { t: "note", x: 47, y: 23, l: "Red and White" },
      { t: "note", x: 64, y: 23, l: "Blue" },
      { t: "note", x: 90, y: 23, l: "Yellow" }
    ],
    units: [
      { id: "fleet", s: "a", k: "ship", w: 14, h: 2.5, l: "Destroyers" },
      { id: "orng", s: "a", k: "inf", w: 10, h: 3, l: "No. 4 Commando" },
      { id: "grn", s: "a", k: "inf", w: 12, h: 3, l: "S. Saskatchewan and Camerons" },
      { id: "main", s: "a", k: "inf", w: 12, h: 3, l: "Essex Scottish and RHLI" },
      { id: "blue", s: "a", k: "inf", w: 12, h: 3, l: "Royal Regt and Black Watch" },
      { id: "yell", s: "a", k: "inf", w: 10, h: 3, l: "No. 3 Commando" },
      { id: "tnk", s: "a", k: "tank", w: 10, h: 3, l: "Tanks (Calgary Regt)" },
      { id: "fmr", s: "a", k: "inf", w: 12, h: 3, l: "Fusiliers Mont-Royal" },
      { id: "mar", s: "a", k: "inf", w: 9, h: 3, l: "Royal Marines" },
      { id: "conv", s: "b", k: "ship", w: 8, h: 2.5, l: "German convoy" },
      { id: "hess", s: "b", k: "camp", w: 9, h: 3, l: "Hess battery" },
      { id: "wHead", s: "b", k: "camp", w: 10, h: 3, l: "West cliff guns" },
      { id: "eHead", s: "b", k: "camp", w: 10, h: 3, l: "East cliff guns" },
      { id: "pBun", s: "b", k: "camp", w: 8, h: 3, l: "Puys bunker" },
      { id: "yBat", s: "b", k: "camp", w: 9, h: 3, l: "Berneval battery" },
      { id: "town", s: "b", k: "inf", w: 16, h: 4, l: "Garrison in town (302nd Div.)" }
    ],
    steps: [
      { t: "Schematic, not to scale. Before dawn, the naval force arrives in the dark. Five groups head for the beaches: two of commandos at the ends, the Canadian infantry in the center.",
        p: { fleet: [50, 4], orng: [10, 12], grn: [28, 12], main: [47, 12], blue: [64, 12], yell: [90, 12], tnk: [52, 17], fmr: [36, 17], mar: [76, 17], conv: [96, 6], hess: [10, 34], wHead: [38, 32], eHead: [55, 31], pBun: [66, 31], yBat: [90, 34], town: [47, 40] } },
      { t: "3:48: a German convoy runs into the landing craft of No. 3 Commando, and the alarm sounds. The German radar at Pourville had seen the ships at 3:45, but only at 4:35 does naval command believe the warning.",
        p: { conv: [88, 9], yell: [88, 13] } },
      { t: "4:50: No. 3 Commando is almost entirely driven back at Yellow. At Orange, Lord Lovat lands and silences the Hess battery, the only success of the day.",
        p: { yell: [90, 25], orng: [10, 27], hess: [10, 36] }, x: ["yell", "hess"] },
      { t: "4:52: the South Saskatchewan arrives unseen at Green, but most of it lands west of the River Scie and is pinned at the only bridge in Pourville. Lieutenant-Colonel Merritt crosses the bridge several times, standing up, to show it can be done.",
        p: { grn: [28, 27] } },
      { t: "At Blue (Puys), the Royal Regiment lands about 20 minutes late, with neither smoke nor darkness. Pinned against the seawall, it loses, out of 556 men, about 200 dead and 264 captured.",
        p: { blue: [64, 27] }, x: ["blue"] },
      { t: "At about 5:20, the Essex Scottish and the Royal Hamilton attack the main beach head-on, covered by four destroyers and by smoke.",
        p: { main: [47, 27] } },
      { t: "The tanks arrive late. Of the 29 that try, two sink and twelve bog down in the shingle. Fifteen cross the seawall, but none returns.",
        p: { tnk: [50, 29] }, x: ["tnk", "main"] },
      { t: "At Pourville, the Camerons get farther than any other troops that day, but are forced back. Only 341 men reach the landing craft.",
        p: { grn: [30, 37] }, x: ["grn"] },
      { t: "At 7:00, the Fusiliers Mont-Royal set out in 26 landing craft and are destroyed by fire. The Royal Marines, sent in support, turn back on Lieutenant-Colonel Phillipps' order, and he dies soon after.",
        p: { fmr: [44, 26], mar: [70, 13] }, x: ["fmr"] },
      { t: "The withdrawal from the main beaches begins at about 9:40 and ends at about 14:00. The ships take the survivors back to England.",
        p: { fleet: [50, 10], orng: [10, 14], mar: [70, 9] } }
    ]
  }
});
