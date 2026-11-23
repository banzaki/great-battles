// In-depth battles, batch be: vicksburg, bunkerhill, gatepa.
// Checked against the English and Portuguese Wikipedia articles on the Siege and Campaign of Vicksburg, the Battle of
// Bunker Hill, the Tauranga campaign and Gate Pa, NZHistory (Battle of Pukehinahina, Gate Pa, the Maori rules of
// war), Te Ara (Taratoa, Pene Taka), Vincent O'Malley's account of the rules, and the works those pages cite.
// Where sources disagree the text says so. Gate Pa: officers killed are not named because the sources consulted give
// only the count; Vicksburg and Bunker Hill diagrams are schematic and show the sectors, not every regiment.

Object.assign(GLOSSARY, {
  "plano anaconda": "The Union's strategy at the start of the war: blockade the South's ports and take the Mississippi River, squeezing the Confederacy the way a snake squeezes its prey.",
  "redan": "A V-shaped earth fort with its point toward the enemy. At Vicksburg, the redans of yellow earth stood on the highest points of the line.",
  "abrigo antibombas": "A hole dug into the hillside, sometimes with timber walls, where people hid from cannon fire. At Vicksburg, residents dug more than 500 in the clay.",
  "libertação sob palavra": "Releasing a prisoner after he promises not to fight again until he is exchanged for another. At Vicksburg, Grant used it to avoid feeding about 30,000 prisoners.",
  "infantaria leve": "Companies of faster soldiers trained to skirmish, who held the left end of each British regiment.",
  "cerca de ripas": "A field fence made of rails or poles fixed to posts. At Bunker Hill, the colonists stuffed it with hay and earth to make cover.",
  "carcaça incendiária": "A hollow iron shell packed with burning material, fired from a cannon to set houses and ships alight. It is what burned Charlestown.",
  "vitória de pirro": "A victory that costs the winner so much that it is almost a defeat. The name comes from King Pyrrhus of Epirus, who beat the Romans in 279 BC with enormous losses.",
  "pā": "A fortified village or stronghold of the Māori, with trenches, palisades and shelters. The best pās of the 1860s were built to withstand artillery.",
  "rua": "An underground shelter dug inside a pā, where the defenders took cover from bombardment and from which they could fire when the attackers came close.",
  "mere": "A short, flat Māori club of wood, bone or stone, used in hand-to-hand fighting.",
  "iwi": "A tribe or large group of common descent in Māori society. The Ngāi Te Rangi are an iwi of Tauranga.",
  "hapū": "A subgroup of an iwi, made up of several families, which often decided on its own whether to join a war.",
  "movimento kīngitanga": "The Māori King Movement, created in 1858, in which several tribes chose a king of their own to hold on to their land. The colonial government saw it as rebellion and invaded the Waikato in 1863.",
  "brigada naval": "Sailors and marines from warships, landed to fight ashore alongside the army.",
  "canhão armstrong": "A British steel breech-loading gun with a rifled barrel, more accurate and longer-ranged than earlier guns. It was used in large numbers in New Zealand."
});

Object.assign(DEEP, {
  vicksburg: {
    war: "American Civil War (1861–1865), Vicksburg campaign (1862–1863)",
    hook: "Forty-seven days of siege, a city hiding in caves and the last key to the Mississippi River.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the Civil War, the Mississippi River was the main road through the middle of the United States. Whoever controlled it could move troops and cargo from north to south and cut Texas, Arkansas and Louisiana off from the rest of the Confederacy. Taking the river was part of the Union's [[Anaconda Plan|plano anaconda]]. By 1863, almost the whole course was in Union hands, except for a stretch between Vicksburg and Port Hudson. Vicksburg stood on a high bluff, on a bend of the river, and its guns commanded the water.",
        "Grant spent the winter of 1862 to 1863 trying to reach the city by routes that came to nothing. He dug a canal to divert the river. He tried to enter through creeks and channels in the north, Yazoo Pass and Steele's Bayou, where the fleet was stopped by a fort and by trees the Confederates had felled. All of it failed, between January and April.",
        { h: "The road to Vicksburg" },
        { timeline: [
          ["Jan to Apr 1863", "Canal, Yazoo Pass, Steele's Bayou, Lake Providence and Duckport: no plan reaches Vicksburg."],
          ["16 April", "Seven gunboats and three empty transports run down the river under Vicksburg's guns, on a moonless night. Thirteen wounded, none killed."],
          ["April", "Colonel Grierson's cavalry rides through Mississippi and draws the Confederates' attention away."],
          ["29–30 April", "About 17,000 soldiers cross the river at Bruinsburg, south of the city."],
          ["1 to 14 May", "Victories at Port Gibson and Raymond. On 14 May, Grant takes Jackson, the state capital."],
          ["16 and 17 May", "Pemberton loses at Champion Hill and at the Big Black River bridge, where 1,800 Confederates are captured, and shuts himself up in Vicksburg."]
        ]},
        "It was the largest amphibious operation in US history until the Normandy landings in 1944. Grant cut loose from his supply base and took the army inland, taking food from farms along the way. On 18 May, he stood before Vicksburg."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ulysses S. Grant, 41" },
        "General of the Army of the Tennessee. He had won at Fort Donelson and Shiloh, but was criticized for his losses and for rumors about drink. At Vicksburg he showed what set him apart: after each failure he tried another way, and he chose the boldest plan, cutting his own supply line and living off what he found. When the assaults failed, he accepted that the city would only fall by siege.",
        { h: "John C. Pemberton, 49" },
        "A Confederate lieutenant general, born in the North, in Philadelphia, who had chosen the side of the South. He received an order from Jefferson Davis to hold Vicksburg at all costs, and his superior Johnston ordered the opposite: abandon the city and save the army. Pemberton stayed. Wikipedia notes that, being a Northerner by birth, he may have feared public condemnation if he left.",
        { h: "The other names" },
        "William T. Sherman, Grant's friend and corps commander, led the first assault, on 19 May, and later watched Johnston. James McPherson and John McClernand commanded the other two corps. McClernand wrote reports that exaggerated his success in the assault of 22 May, and Grant removed him on 18 June. Admiral David Porter commanded the gunboats. Joseph E. Johnston gathered a relief army at Jackson that was never strong enough to break the siege."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Army of the Tennessee had about 44,500 men at the start of the campaign and reached some 75,000 to 77,000 at the height of the siege, as reinforcements arrived in mid-June. Pemberton commanded the Army of Mississippi, of some 30,000 men (sources give up to 33,000), in four divisions: those of Stevenson, Forney, Smith and Bowen.",
        { h: "The terrain" },
        "The city stood atop hills of yellow clay, cut by deep ravines and covered in scrub. The defenses formed an arc of about 10 km (six and a half miles), with [[redans|redan]], redoubts and forts joined by trenches. Among them were the Stockade Redan, the Third Louisiana Redan and the Great Redoubt. For the attacker, every ravine was a trap, and the fire always came from above.",
        { h: "The siege in eight moves" },
        { formation: true },
        "First, the arc. After Big Black, Pemberton shut his four divisions inside the defensive line. Grant's three corps surrounded the city from the east, with Sherman to the north, McPherson in the center and McClernand to the south, and Porter's fleet closed off the river. Grant was in a hurry: he wanted to finish before Johnston could gather an army.",
        "Second, the assault of 19 May. Sherman's troops attacked the Stockade Redan without a good reconnaissance. They lost 157 killed, 777 wounded and 8 missing. On the Confederate side, it was 8 killed and 62 wounded.",
        "Third, the assault of 22 May. After a bombardment by artillery and the fleet, Grant attacked the whole line, along a front of about five kilometers. Sherman, McPherson and McClernand all failed. The Union lost 502 killed, 2,550 wounded and 147 missing in one day. Confederate losses were estimated at under 500. It was proof that a siege was the only way.",
        "Fourth, the methodical siege. On 25 May, Special Orders No. 140 told the corps to advance by [[sap|sapa]] trenches, zigzag after zigzag, until they were close to the enemy lines. On 11, 12 and 14 June, reinforcements arrived from Herron, Washburn and Parke's IX Corps, and the Union line closed from river to river.",
        "Fifth, the city under fire. The gunboats fired more than 22,000 shells into Vicksburg, and the army's artillery fired more still. Residents dug more than 500 [[bombproof shelters|abrigo antibombas]] into the hillside, and Union soldiers nicknamed the town 'Prairie Dog Village'. Fewer than a dozen civilians are known to have been killed. On 28 May, the Confederate battery nicknamed 'Whistling Dick' sank the gunboat USS Cincinnati.",
        "Sixth, the two sides outside. To the west, in Louisiana, John Walker's Confederate forces attacked the base at Milliken's Bend on 7 June. The defenders, largely recently enlisted Black soldiers, lost 652 men against the attackers' 185, and the base held. To the east, Sherman was detached to watch Johnston, who reached the Big Black River on 1 July and withdrew without fighting.",
        "Seventh, the mine. On 25 June, Union miners blew up 2,200 pounds of gunpowder, about a ton, under the Third Louisiana Redan, opening a crater some 12 meters wide and 3.7 deep. The 45th Illinois went in and was pinned down by fire. A second mine, on 1 July, exploded with no follow-up attack.",
        "Eighth, hunger. By the end of June, about half of Pemberton's men were sick or in hospital, with scurvy, malaria and dysentery. Sources say they even ate shoe leather. On 3 July, Pemberton wrote to Grant about terms. Grant asked for unconditional surrender and then offered to [[parole|libertação sob palavra]] all the prisoners, partly to avoid feeding some 30,000 captives. The surrender was agreed on 4 July, near an old oak tree. Pemberton handed over 172 cannons and 50,000 rifles."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "In the siege, the Union had 4,835 casualties (766 killed, 3,793 wounded and 276 captured or missing). The Confederacy had 32,697: 3,202 killed, wounded or missing, plus 29,495 who surrendered. Counting the whole campaign, the Union lost 10,142 men.",
        "On 9 July, Port Hudson surrendered to Banks. The Union now controlled the whole Mississippi and split the Confederacy in two: Arkansas, Louisiana and Texas were cut off from the rest of the South.",
        { h: "Why it matters" },
        "Lincoln had called Vicksburg 'the key to the war', and later wrote that the 'Father of Waters' again ran, unvexed, to the sea. The fall of Vicksburg, a day after Meade's victory at Gettysburg, is seen by many historians as the turning point of the war. For Grant, it was the step toward command of all the Union armies, in 1864.",
        { h: "Curiosities and controversies" },
        { note: "The parole later went wrong: the Confederate government contested the terms, and most of the released men were back in service by August 1863. The dispute ended up freezing prisoner exchanges until January 1865." },
        { note: "A tradition says Vicksburg did not celebrate the Fourth of July again until the Second World War. Wikipedia points out that this is inaccurate: there were big celebrations as early as 1907, and historian Michael Ballard says the story has little basis." },
        { note: "The site became Vicksburg National Military Park, created in 1899, with 1,325 monuments and markers, 144 cannons and the restored gunboat USS Cairo." }
      ]}
    ]
  },

  bunkerhill: {
    war: "American Revolutionary War (1775–1783), siege of Boston",
    hook: "The British took the hill and lost more than a thousand men doing it: a victory that cost the price of a defeat.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 19 April 1775, the first shots of the war, at Lexington and Concord, turned into a pursuit: thousands of New England militiamen followed the British back to Boston and besieged the city. There were about 15,000 of them, under Artemas Ward. They controlled the land road, across the Roxbury isthmus, but could not take on the British fleet in the harbor.",
        "General Thomas Gage kept some 6,000 soldiers in Boston, supplied by sea. In late May, Generals Howe, Burgoyne and Clinton arrived, with reinforcements. North of the city, across the Charles River, lay the Charlestown peninsula. It had two hills: Bunker Hill, about 34 meters, at the back, and Breed's Hill, about 19 meters, closer to Boston. Whoever had artillery there could bombard the city.",
        { h: "The road to Bunker Hill" },
        { timeline: [
          ["19 April 1775", "Lexington and Concord. Boston is besieged by militias."],
          ["Late May", "Howe, Burgoyne and Clinton arrive in Boston with reinforcements."],
          ["12 June", "Gage plans to take the Dorchester hills, then attack Roxbury, then occupy the Charlestown heights. Date set: 18 June."],
          ["15 June", "The colonists learn of the plan through a secondhand report. The Massachusetts Committee of Safety orders the peninsula fortified."],
          ["Night of 16 June", "About 1,200 men, under William Prescott, dig a redoubt on Breed's Hill."]
        ]},
        "The British meant to occupy the hills on their own. The colonists got there first, by one night, and Gage decided not to wait."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "William Prescott, militia colonel" },
        "A veteran of an earlier war, he commanded the building of the redoubt and its defense. He was among the last to leave and, in the end, fought with his sword against the bayonets.",
        { h: "Israel Putnam and Joseph Warren" },
        "Putnam, a Connecticut general, helped choose the site and later tried to rally the fugitives on Bunker Hill. His role is disputed: the postwar accounts contradict each other, and historian Harold Murdock called one of them full of 'absurd misstatements'. Joseph Warren, a physician and political leader of Massachusetts, held a general's commission but fought as an ordinary soldier. He died in the retreat, shot in the face.",
        { h: "John Stark and Thomas Knowlton" },
        "The two held the colonists' left end, by the fence. Stark brought men from New Hampshire and drove a stake in front of the fence: nobody fired until the British passed it. In the retreat, the two were the rear guard and prevented encirclement. Burgoyne praised the withdrawal.",
        { h: "William Howe and Robert Pigot" },
        "Howe led the assault and thought the hill easy to take. Pigot attacked the redoubt. General Henry Clinton wanted to cut off the colonists' retreat across the isthmus, but the other generals outvoted him, preferring the frontal attack. Burgoyne called the colonists an 'untrained rabble'."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "On the colonial side, about 1,200 men on the first night and some 2,400 over the course of the day, among them the engineer Captain Richard Gridley and the troops from Connecticut and New Hampshire. On the British side, Howe landed with about 1,500 men and then asked for more. Sources disagree, and some give more than 3,000 involved over the day. Neither side had exact numbers, and Wikipedia admits the difficulty.",
        { h: "The terrain" },
        "The redoubt, about 40 meters on a side, with walls of about 1.8 meters, stood on Breed's Hill. At dawn, Prescott noticed that the redoubt could be outflanked and ordered a trench and a [[rail fence|cerca de ripas]] stuffed with hay and earth, running down the hill to the east. The west side was left unguarded, and a gap that low tide opened to the north was closed with a short stone wall. The slope of tall grass, crossed by fences, was going to be the attackers' worst enemy.",
        { note: "The colonists had orders to fortify Bunker Hill. Prescott, Putnam and Gridley chose Breed's Hill, closer to Boston and easier to defend. Whether that was disobedience is a matter of debate among historians. That is why the battle carries the name of the wrong hill." },
        { h: "The battle in eight moves" },
        { formation: true },
        "First, dawn. Around 4 a.m., the ship HMS Lively opened fire on the redoubt. Admiral Graves ordered a stop, but Gage overruled him, and the fleet and the batteries on Copp's Hill bombarded the site, with little effect: the fire killed one American. Howe landed at Moulton's Point, saw many colonists on Bunker Hill, assumed they were reinforcements and asked for more troops. He let his men eat while they waited. The attack only began after 2 p.m.",
        "Second, the colonial reinforcements. Stark and Reed arrived with their New Hampshire men and went to the fence. Warren and Pomeroy came too. Meanwhile, colonial snipers in Charlestown harassed the British who were assembling. Graves sent a [[carcass|carcaça incendiária]] into the town, and the soldiers set it alight. The smoke drifted away from the battlefield, and Charlestown burned all day.",
        "Third, the advance. Howe, with [[grenadiers|granadeiros]] and [[light infantry|infantaria leve]], attacked on the east side, against the fence of Stark and Knowlton, expecting an easy fight. Pigot made a diversion against the redoubt. The artillery that was meant to prepare the attack had ammunition of the wrong caliber. The soldiers climbed through waist-high grass, among fences, with heavy packs and wool uniforms in the heat.",
        "Fourth, the first assault. The colonists held their fire until the British were about 50 paces away and fired at point-blank range. The light companies broke, and James Abercrombie, who commanded the grenadiers, was mortally wounded. Pigot's attack failed too. The British lost about 96 men in that assault.",
        "Fifth, the second assault. The regulars re-formed among the dead and wounded and repeated the attack: Pigot against the redoubt, Howe against Knowlton. Once more they were beaten back, after some thirty minutes of useless volleys.",
        "Sixth, the third assault. Clinton sent some 400 men, from the marines and the 63rd, and some 200 walking wounded joined them. Howe ordered the packs dropped and formed tight columns, to attack with the bayonet alone. The attack on the fence became a diversion, and the blow fell on the redoubt.",
        "Seventh, the redoubt falls. The colonists now had some 700 to 800 men on the hill, about 150 in the redoubt, and their ammunition was gone. The fight turned into hand-to-hand combat. The British had bayonets, and most colonists did not. Major Pitcairn, of the marines, died in the last volleys. About thirty defenders were killed in the fighting inside the redoubt.",
        "Eighth, the retreat. Stark and Knowlton withdrew in order along the fence, which prevented encirclement and saved most of the wounded. Warren died in that withdrawal. Putnam tried to rally men on Bunker Hill, but the colonists left their cannon and tools behind. Around 5 p.m., they were across the isthmus, in Cambridge, and the British held the peninsula."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "British casualties were 1,054: 226 killed and 828 wounded, about 40% of the attackers, with 19 officers killed. It was the largest number of British casualties in a single action of the whole war. The colonists', according to the same source, were 138 killed, 305 wounded and 30 captured, a total of 473. Some sources round it to about 450, and many prisoners died in custody. The colonists lost five of their six cannons.",
        { h: "Why it matters" },
        "The British won the ground, but Clinton wrote in his diary, in a way that recalled King Pyrrhus, that a few more victories like it would end British rule in America. It is a classic [[Pyrrhic victory|vitória de pirro]]. A British officer in Boston wrote that the Americans, well commanded, would be soldiers as good as their own.",
        "The news reached the colonists as a defeat, because the enemy kept the hill. But Washington, on his way to take command, heard in New York how the militiamen had behaved and took heart. Gage's report reached England on 20 July, alarmed the high command and hardened King George III's position, which may have contributed to the rejection of the Olive Branch Petition. Gage was dismissed, and Howe replaced him in October 1775. Gage had recommended hiring foreign soldiers, and that led to the German mercenaries, the 'Hessians'.",
        { h: "Curiosities and controversies" },
        { note: "The line 'don't fire until you see the whites of their eyes' is now considered a legend. Putnam, Stark, Prescott and Gridley have all been named as the author, and the sources do not agree. The idea is older: similar orders were given at Dettingen (1743) and by Wolfe at Quebec (1759). What is certain is that the colonial leaders told their men to save their shots, because ammunition was scarce." },
        { note: "Historians debate whether the British could have won at lower cost. John Ferling argues that Gage should have used the fleet to close the Charlestown isthmus, which would have cut the colonists off without a frontal attack. Howe is criticized for the delay, the optimism and the direct assaults." },
        { note: "The Bunker Hill Monument, a 67-meter obelisk, stands on Breed's Hill, not on Bunker. Lafayette laid the cornerstone on 17 June 1825, at the 50th anniversary, with an address by Daniel Webster." }
      ]}
    ]
  },

  gatepa: {
    war: "New Zealand Wars (1845–1872), Tauranga campaign (1864)",
    hook: "About 230 warriors in a pā of earth and timber beat nearly 1,700 British soldiers, after writing them the rules of war.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 1860s, New Zealand was being contested between European settlers (the Pākehā) and the Māori, who kept losing land. In 1858, several tribes had chosen a king of their own, in the [[Kīngitanga movement|movimento kīngitanga]], to hold on to what they still had. The colonial government saw rebellion in it. In July 1863, British troops invaded the Waikato, the heart of the movement.",
        "The Ngāi Te Rangi, the [[iwi]] of Tauranga, sent warriors to help the Waikato. In January 1864, General Duncan Cameron sent an expedition by sea to Tauranga, because he believed that men and supplies for the Waikato were passing through. Governor George Grey feared a wider war and urged caution on the local commander, Brigadier Carey. Prime Minister Frederick Whitaker wanted aggression, backed by the land confiscation laws of 1863.",
        { h: "The road to Pukehinahina" },
        { timeline: [
          ["July 1863", "British troops invade the Waikato."],
          ["January 1864", "A British expedition lands at Tauranga."],
          ["Late March", "The Ngāi Te Rangi send a letter with rules of war and a challenge to Colonel Greer, naming 1 April as the day of battle. The British largely ignore it."],
          ["16 April", "Construction of the pā begins at Pukehinahina, about 5 km from the British base."],
          ["28 April", "British bombardment in the afternoon. At night, Greer takes 700 men through the swamp to the rear of the pā."],
          ["29 April", "Eight-hour bombardment and assault at 4 p.m."]
        ]},
        "Europeans called the place 'The Gate', because of a fence with a gate that the Māori used to bar intruders. The Māori name is Pukehinahina."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Rāwiri Puhirake, chief of the defenders" },
        "A chief of the Ngāi Te Rangi, he taunted the British commander and drew the fight onto ground of his own choosing. According to the account of Hōri Ngātai, one of the defenders, he ordered that no one say a word or fire a shot until the right time. He died at Te Ranga, in June.",
        { h: "Henare Wiremu Taratoa" },
        "A young Anglican lay reader, educated at St John's College, Auckland. Several sources, among them NZHistory, say he drafted the code of conduct the Māori sent to the British. Other sources say the text came from Catholic chiefs of Tauranga. He died at Te Ranga with a copy of the rules on his body, headed by a line from Romans 12:20: if thine enemy hunger, feed him; if he thirst, give him drink.",
        { h: "Pene Taka Tuaia" },
        "A veteran of the Northern War (1845–46), who had seen Kawiti's pās at Ōhaeawai and Ruapekapeka. According to NZHistory, he designed the pā at Pukehinahina.",
        { h: "Duncan Cameron and Henry Greer" },
        "Cameron had commanded the British troops in New Zealand since 1861. Greer, colonel of the 68th, commanded at Te Papa and led the move through the swamp. Lieutenant Colonel H. G. Booth commanded the 43rd in the assault, and Commander Hay the naval brigade. According to Wikipedia, Cameron grew weary of the war and found more courage and chivalry among the Māori than among the settlers."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "At dawn on 29 April, Cameron had about 1,650 men (Wikipedia gives 1,700 in its infobox): 700 of the 68th, 420 of the [[naval brigade|brigada naval]], 300 of the 43rd, 50 of the Royal Artillery and 180 of the 12th, 14th, 40th and 65th. On the Māori side, some 230 men, according to Wikipedia. The same page also speaks of 250 Ngāi Te Rangi fighters, and the sources do not agree. About 30 men of the Ngāti Koheriki and some 10 from Piri-Rikau and other [[hapū]] held the smaller redoubt. There was a single woman in the pā, Hēni Te Kiri Karamū.",
        { h: "The terrain and the pā" },
        "The pā stood on top of a hill, among swamps. There were two redoubts, with zigzag trenches and a set of underground shelters, the [[rua]], built to withstand artillery. The [[palisade|paliçada]] was weak, because timber was scarce, but the position on high ground and its extent gave the impression of more strength than there was. The British officers underestimated it: seen from above, it looked like very little.",
        { note: "The Māori had sent the British rules for the war: wounded who stopped fighting would be spared, those who surrendered would be accepted, and civilians, including Pākehā women and children, would not be attacked. Some authors note similarities with the first Geneva Convention, of 1864. That is a comparison, not proof of influence." },
        { h: "The battle in eight moves" },
        { formation: true },
        "First, the pā and the guns. The British set up four batteries at 350 to 800 meters: one 110-pounder Armstrong, two 40-pounders and two 6-pounders, two 24-pound howitzers, two 8-inch mortars and six Coehorn mortars. They were breech-loading [[Armstrong guns|canhão armstrong]].",
        "Second, the afternoon of 28 April. The bombardment lasted an hour. According to accounts by Hēni Te Kiri Karamū and Hōri Ngātai, the first victims were Anglican clergymen at prayer. At night, in the rain, Greer took some 700 men of the 68th through the swamp to the rear of the pā, to cut off the retreat.",
        "Third, the bombardment of 29 April. From dawn into the afternoon, more than eight hours, about 30 tonnes of shot and shell fell on and around the pā. The palisade was destroyed, and Māori fire was suppressed. One source estimates that about 15 defenders died in the bombardment.",
        "Fourth, the assault. Around 4 p.m., Cameron sent 300 men of the naval brigade, under Commander Hay, and of the 43rd, under Booth, forward four abreast, with fixed bayonets. Another 300 followed as a reserve.",
        "Fifth, the entry. Some attackers were shot as they went in. Inside the redoubt, the fight was hand to hand, against men with double-barreled shotguns and [[mere]]. There was a pause of some five minutes, and Captain Greaves reported to Cameron that the redoubt was taken and losses were light.",
        "Sixth, the turn. Minutes later, the 68th reached the rear of the pā. The fighting grew fierce, and the British force panicked and streamed out. The exact sequence is unclear, and historians give different explanations. A sailor of the time said the 68th's advance was mistaken for Māori reinforcements. James Belich argues that most of the garrison was hidden in the shelters and opened fire at close range on men almost on top of them: a deliberate trap, in his view. The authors Mikaere and Simons, who wrote a book on the battle, disagree with that reading and see the result as the product of how the fight unfolded.",
        "Seventh, the wounded. Lieutenant Colonel Booth was gravely wounded. According to NZHistory, Hēni Te Kiri Karamū said, some 30 years later, that she brought him water, and Booth is said to have told the surgeon that an English-speaking Māori woman had given him a drink. Other versions say it was Taratoa himself or a man named Te Ipu. British dispatches say Booth died the following night.",
        "Eighth, the night. Expecting a new attack at dawn, the garrison left the pā and slipped through the lines of the 68th, crossing the swamp."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The British lost 31 dead, 10 of them officers, and 80 wounded: more than a third of the assault force. (Wikipedia's infobox, with 44 dead and 119 wounded, covers the whole campaign, not just this day.) On the Māori side, at least 25 to 30 dead or missing, according to Wikipedia. Another estimate gives 19 to 32 dead and 25 wounded. The dead included chiefs such as Te Reweti, Eru Puhirake and Te Wharepouri. It was the heaviest British defeat of the whole war.",
        "On 12 May, Grey went to Tauranga and sought a negotiated peace through Māori mediators. On 15 May, Cameron said he would stop offensive operations and left for Auckland. But on 21 June, at Te Ranga, 5 km away, Greer attacked a new position still under construction. This time the British won: 83 to 120 Māori dead, among them Puhirake and Taratoa. The Ngāi Te Rangi ended up giving up about 50,000 acres and 81 weapons. About 290,000 acres were proclaimed under the settlements act of 1863.",
        { h: "Why it matters" },
        "Gate Pā showed that a well-designed pā could withstand a heavy bombardment. For the Māori, it became a symbol of courage and chivalrous conduct, which gives the lie to the image of savages the settlers drew of them. Part of the site became a reserve, and the 150th anniversary was marked in 2014. A memorial to Puhirake, with a marble frieze, stands in the Mission Cemetery in Tauranga.",
        { h: "Curiosities and controversies" },
        { note: "The numbers vary: 31 dead and 80 wounded (Wikipedia and NZHistory) against 44 and 119 (Wikipedia's infobox, which seems to add up the campaign). Te Ara gives 111 British dead and wounded and 25 Māori dead. According to NZHistory, Māori losses were not recorded at the time." },
        { note: "Who gave Booth water is disputed. The strongest version points to Hēni Te Kiri Karamū, who confirmed it about 30 years later, but there are versions with Taratoa. The sources we consulted do not settle it." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  vicksburg: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 12, h: 70, l: "Mississippi River" },
      { t: "note", x: 28, y: 4, l: "Vicksburg" },
      { t: "note", x: 86, y: 6, l: "North ↑" }
    ],
    units: [
      { id: "uFleet", s: "a", k: "ship", w: 5, h: 10, l: "Porter's fleet" },
      { id: "uSh", s: "a", k: "inf", w: 6, h: 14, l: "Sherman" },
      { id: "uMc", s: "a", k: "inf", w: 6, h: 14, l: "McPherson" },
      { id: "uCl", s: "a", k: "inf", w: 6, h: 14, l: "McClernand" },
      { id: "uRe", s: "a", k: "inf", w: 6, h: 12, l: "Reinforcements (Herron, Washburn, IX Corps)" },
      { id: "cN", s: "b", k: "inf", w: 6, h: 14, l: "North defense" },
      { id: "cC", s: "b", k: "inf", w: 6, h: 14, l: "Central defense" },
      { id: "cS", s: "b", k: "inf", w: 6, h: 14, l: "South defense" },
      { id: "cJ", s: "b", k: "inf", w: 8, h: 12, l: "Johnston (relief)" }
    ],
    steps: [
      { t: "After Champion Hill and Big Black, Pemberton shuts himself up in Vicksburg, in an arc of about 10 km. Grant's three corps surround the city from the east, and the fleet closes the river. Johnston, at Jackson, tries to gather an army.",
        p: { uFleet: [7, 34], uSh: [38, 14], uMc: [38, 34], uCl: [38, 54], uRe: [94, 60], cN: [26, 14], cC: [26, 34], cS: [26, 54], cJ: [90, 34] } },
      { t: "19 May: Sherman attacks the Stockade Redan without a good reconnaissance. He loses 157 killed, 777 wounded and 8 missing. The Confederates lose 8 killed and 62 wounded.",
        p: { uSh: [32, 14] } },
      { t: "22 May: after a bombardment, Grant attacks the whole line. Sherman, McPherson and McClernand all fail. The Union loses 502 killed, 2,550 wounded and 147 missing, and the Confederates under 500.",
        p: { uSh: [31, 14], uMc: [31, 34], uCl: [31, 54] } },
      { t: "Grant adopts the siege. The corps advance by sap trenches, and between 11 and 14 June the reinforcements arrive. The Union line closes from river to river.",
        p: { uSh: [33, 14], uMc: [33, 34], uCl: [33, 54], uRe: [50, 44] } },
      { t: "The fleet and the artillery bombard the city, more than 22,000 shells from the ships alone. Residents live in caves dug into the hillside.",
        p: { uFleet: [7, 28] } },
      { t: "Johnston reaches the Big Black River on 1 July, but does not attack and falls back to Jackson. Sherman was detached to watch him, and the reinforcements cover the outer side of the siege.",
        p: { cJ: [80, 34], uRe: [64, 40], uSh: [62, 22] } },
      { t: "25 June: Union miners blow 2,200 pounds of gunpowder under the Third Louisiana Redan. The 45th Illinois goes in and is pinned down by fire.",
        p: { uMc: [29, 34], cC: [24, 34], cJ: [90, 34] } },
      { t: "Half the garrison is sick and hungry. On 3 July, Pemberton negotiates. On 4 July, he surrenders with about 29,500 men, 172 cannons and 50,000 rifles.",
        p: { uSh: [62, 22], uMc: [30, 34], uCl: [30, 54], cN: [24, 14], cC: [24, 34], cS: [24, 54] }, x: ["cN", "cC", "cS"] }
    ]
  },

  bunkerhill: {
    terrain: [
      { t: "sea", x: 0, y: 62, w: 100, h: 8, l: "Charles River and Boston" },
      { t: "sea", x: 92, y: 0, w: 8, h: 62, l: "Mystic River" },
      { t: "hill", x: 40, y: 38, rx: 12, ry: 7, l: "Breed's Hill" },
      { t: "hill", x: 30, y: 12, rx: 13, ry: 7, l: "Bunker Hill" },
      { t: "note", x: 14, y: 52, l: "Charlestown" },
      { t: "note", x: 8, y: 6, l: "North ↑" }
    ],
    units: [
      { id: "bHowe", s: "a", k: "inf", w: 18, h: 4, l: "Howe: grenadiers and light infantry" },
      { id: "bPig", s: "a", k: "inf", w: 14, h: 4, l: "Pigot" },
      { id: "bRes", s: "a", k: "inf", w: 12, h: 4, l: "Clinton's reinforcements (marines and 63rd)" },
      { id: "bShip", s: "a", k: "ship", w: 10, h: 4, l: "Ships and Copp's Hill" },
      { id: "aRed", s: "b", k: "inf", w: 10, h: 8, l: "Prescott (redoubt)" },
      { id: "aFen", s: "b", k: "inf", w: 24, h: 3, l: "Stark and Knowlton (fence)" },
      { id: "aPut", s: "b", k: "inf", w: 12, h: 4, l: "Putnam (Bunker Hill)" }
    ],
    steps: [
      { t: "Around 4 a.m., the ships open fire on the redoubt that 1,200 men dug the night before. Howe lands with 1,500 men and asks for more, seeing many people on Bunker Hill.",
        p: { bShip: [24, 66], bHowe: [76, 56], bPig: [60, 58], bRes: [86, 64], aRed: [40, 38], aFen: [64, 40], aPut: [30, 14] } },
      { t: "Prescott extends a trench and a rail fence, stuffed with hay and earth, east to the Mystic. Stark, Knowlton and the New Hampshire men arrive and take position at the fence.",
        p: { aFen: [68, 42], aPut: [34, 20] } },
      { t: "Charlestown catches fire, and the smoke covers the field. After 2 p.m., Howe advances along the Mystic shore, against the fence. Pigot feints against the redoubt.",
        p: { bHowe: [76, 50], bPig: [56, 50] } },
      { t: "First assault: the colonists hold their fire until about 50 paces. The light companies break, Abercrombie falls mortally wounded, and Pigot pulls back.",
        p: { bHowe: [76, 54], bPig: [56, 56] } },
      { t: "Second assault: the British re-form and attack again, Pigot against the redoubt and Howe against the fence. They are beaten back again.",
        p: { bHowe: [76, 51], bPig: [52, 50] } },
      { t: "Clinton sends 400 men and some 200 walking wounded. Howe orders packs dropped and forms columns for the bayonet. The attack on the fence becomes a diversion, and the blow goes to the redoubt.",
        p: { bRes: [52, 54], bPig: [48, 49], bHowe: [70, 50] } },
      { t: "Out of ammunition, the colonists fight with musket butts against bayonets. The redoubt falls. Major Pitcairn dies in the last volleys.",
        p: { bPig: [43, 41], bRes: [44, 45], aRed: [40, 38] }, x: ["aRed"] },
      { t: "Stark and Knowlton fall back in order along the fence and save the wounded. Warren dies in the retreat. Around 5 p.m., the colonists cross the isthmus to Cambridge.",
        p: { aFen: [66, 30], aPut: [18, 6], bHowe: [60, 40], bPig: [42, 40] }, x: ["aPut"] }
    ]
  },

  gatepa: {
    terrain: [
      { t: "note", x: 8, y: 6, l: "Te Papa (British base)" },
      { t: "note", x: 84, y: 8, l: "Swamp" },
      { t: "hill", x: 58, y: 36, rx: 22, ry: 10, l: "Pukehinahina ridge" }
    ],
    units: [
      { id: "bBat", s: "a", k: "inf", w: 10, h: 12, l: "4 batteries (Armstrongs, howitzers, mortars)" },
      { id: "bSt", s: "a", k: "inf", w: 6, h: 14, l: "Naval brigade and 43rd (300)" },
      { id: "bRe", s: "a", k: "inf", w: 6, h: 14, l: "Reserve (300)" },
      { id: "bGr", s: "a", k: "inf", w: 12, h: 5, l: "Greer's 68th (700)" },
      { id: "pMain", s: "b", k: "inf", w: 16, h: 8, l: "Main redoubt (Ngāi Te Rangi)" },
      { id: "pSm", s: "b", k: "inf", w: 8, h: 6, l: "Smaller redoubt (Ngāti Koheriki and others)" }
    ],
    steps: [
      { t: "The pā holds the ridge, with two redoubts, zigzag trenches and underground shelters. About 230 Māori. The British set up four batteries at 350 to 800 meters.",
        p: { bBat: [34, 36], bSt: [22, 28], bRe: [14, 40], bGr: [22, 58], pMain: [60, 34], pSm: [48, 42] } },
      { t: "Afternoon of 28 April: an hour of bombardment. At night, in the rain, Greer takes 700 men of the 68th through the swamp, east of the pā, to cut off the retreat.",
        p: { bGr: [74, 56] } },
      { t: "Morning of 29 April: more than eight hours of fire, about 30 tonnes of shot and shell. The palisade falls. The defenders take cover in the rua and stay quiet.",
        p: { bGr: [78, 52] } },
      { t: "Around 4 p.m., 300 men of the naval brigade and the 43rd advance, four abreast, with fixed bayonets, with 300 in reserve behind.",
        p: { bSt: [38, 40], bRe: [28, 40] } },
      { t: "The attackers enter the smaller redoubt. The fighting is hand to hand. Greaves reports that the redoubt is taken, with few losses. A pause of some five minutes follows.",
        p: { bSt: [48, 42], bRe: [36, 40] } },
      { t: "The 68th reaches the rear. According to Belich, the hidden defenders open fire at close range; others see only confusion. The British panic and flee.",
        p: { bGr: [66, 40], bSt: [34, 44], bRe: [24, 44] }, x: ["bSt"] },
      { t: "The British lose 31 dead, 10 of them officers, and 80 wounded, more than a third of the assault force. Booth, gravely wounded, is given water by someone in the pā.",
        p: { bRe: [22, 46], bBat: [32, 36] } },
      { t: "Expecting a new attack at dawn, the garrison leaves at night, passes through the lines of the 68th and crosses the swamp.",
        p: { pMain: [88, 20], pSm: [92, 28], bGr: [66, 40] }, x: ["pMain", "pSm"] }
    ]
  }
});
