// In-depth battles, batch bq: lexingtonconcord, iadrang, fallujah2004 (requested by a college history instructor).
// Checked against the English and Portuguese Wikipedia articles on the Battles of Lexington and Concord, the Battle of
// Ia Drang and the Second Battle of Fallujah, the Modern War Institute (West Point) case study on Fallujah, and the
// works those pages cite. Where sources disagree the text says so.
// The three diagrams are schematic. Lexington and Concord is drawn on a stylized west-to-east map (not to scale);
// Ia Drang shows the companies and the PAVN axes the sources describe, not every platoon; Fallujah shows the two
// regimental combat teams, the Army battalions and the main insurgent concentrations, not every battalion.

Object.assign(GLOSSARY, {
  "minutemen": "Militiamen picked from among the youngest and best trained, who promised to be ready 'in a minute'. In 1775, minuteman companies and ordinary militia companies mixed together over the course of the day.",
  "munhão": "Either of the two side pins of a cannon, on which it rests on its wheeled carriage. Without trunnions, the cannon cannot be mounted and is useless.",
  "flanqueadores": "Soldiers sent out to the sides of a marching column to watch the ground and drive off hidden shooters.",
  "leis intoleráveis": "The name the colonists gave to the 1774 laws with which the British Parliament punished Massachusetts after the Boston Tea Party. Historians also use 'Coercive Acts'.",
  "zona de pouso": "A clearing where helicopters land to unload troops, which the Americans called an LZ and named with a letter of the phonetic alphabet, such as X-Ray or Albany.",
  "cavalaria aérea": "A US Army unit that moved by helicopter. The 1st Cavalry Division (Airmobile) kept the cavalry name, but the horses had become helicopters.",
  "pelotão": "A group of soldiers smaller than a company, with a few dozen men, led by a lieutenant.",
  "b-52": "A large American bomber. At Ia Drang it was used for the first time to support troops in combat, and not only to hit distant targets.",
  "contagem de corpos": "The American practice of measuring success in the Vietnam War by the number of enemy dead. The numbers were inflated: at Ia Drang, the commanders themselves admitted exaggeration.",
  "cupinzeiro": "A mound of earth built by termites. At X-Ray, a large termite hill in the middle of the clearing served as Hal Moore's command post, and another sheltered an enemy machine gun.",
  "capim-elefante": "Tall grass with sharp-edged blades, which in Vietnam grew chest-high. At Albany, it hid the enemy and kept the soldiers from seeing one another.",
  "insurgentes": "Fighters who fight a government or foreign troops without forming a regular army, usually hidden among the population.",
  "combate urbano": "Fighting inside a city. Every building, every corner and every window is a possible firing point, and the attacker has to clear everything, house by house.",
  "linha de fase": "A line drawn on the map, with a code name, to mark how far troops are to advance and to coordinate who moves alongside whom. Fallujah's Phase Line Fran was Highway 10.",
  "artefato explosivo improvisado": "A homemade bomb built from ordinary material, such as grenades, gas bottles or old artillery shells, and hidden on roads, in houses or in vehicles. The Americans used the acronym IED.",
  "fósforo branco": "A substance that catches fire on contact with air and gives off dense smoke. It serves to light up and to hide troops, but it burns skin, and its use as a weapon against people is disputed.",
  "atirador de elite": "A soldier trained to hit distant targets with a single shot and to observe without being seen. At Fallujah, teams of them covered the troops' entry.",
  "seabees": "The US Navy's construction engineers. At Fallujah, their armored bulldozers cleared the rubble-filled streets."
});

Object.assign(DEEP, {
  lexingtonconcord: {
    war: "Start of the American Revolutionary War (1775–1783)",
    hook: "A march to seize cannon turned into a retreat under fire, and the war both sides said they did not want began.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Since 1768, British soldiers had occupied Boston. In 1773, colonists threw tea into the harbor, and in 1774 the British Parliament answered with the [[Intolerable Acts|leis intoleráveis]], which punished Massachusetts. Leaders of Suffolk County, where Boston lies, then adopted the Suffolk Resolves, which declared the laws unconstitutional and called on everyone to prepare to defend the colony. The First Continental Congress approved them on 17 September 1774. Outside Boston, the real government was a provisional colonial one, the Massachusetts Provincial Congress.",
        "General Thomas Gage, the colony's military governor, had about 3,000 soldiers in Boston and had lost control of the rest of the territory. His plan was to avoid open war with small, secret, fast strikes that would take the depots of arms away from the [[militias|milícia]]. In the so-called 'Powder Alarms', the British took gunpowder in a few places, but the colonists hid the rest, and there was almost no bloodshed.",
        { h: "The road to Lexington" },
        { timeline: [
          ["17 Sep 1774", "The Continental Congress approves the Suffolk Resolves."],
          ["Feb 1775", "Parliament declares that Massachusetts is in a state of rebellion."],
          ["14 Apr 1775", "Gage receives orders from London to disarm the rebels and arrest their leaders."],
          ["18 Apr, night", "Revere and Dawes leave Boston to warn the militias, and the soldiers embark for Cambridge."],
          ["19 Apr, 2 a.m.", "The British column begins the 17-mile (27 km) march to Concord."],
          ["19 Apr, ~5 a.m.", "Shots at Lexington."],
          ["19 Apr, ~11 a.m.", "Fight at the North Bridge, in Concord."],
          ["19 Apr, ~2 p.m.", "Percy's relief arrives at Lexington."],
          ["19 Apr, dusk", "The British reach Charlestown."]
        ]},
        "The colonists had intelligence. Weeks earlier, they learned that their depots were at risk and moved most of the material out of Concord. On the night of 18 April, Dr. Joseph Warren sent Paul Revere and William Dawes to warn Lexington and the neighboring towns. One or two lanterns in the tower of the Old North Church would show whether the soldiers were going by land or by sea. Wikipedia notes that some suspect the source of the information was Margaret Gage, the general's wife, but that is only supposition."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Thomas Gage, British general" },
        "Commander-in-chief of the British troops in North America and military governor of Massachusetts. On 14 April, he received orders from London to act. He sent Lieutenant Colonel Smith to seize and destroy the military material at Concord, with the instruction that the soldiers were not to plunder or damage anyone's property. He did not put the order to arrest the rebel leaders in writing, for fear of provoking an uprising.",
        { h: "Francis Smith, John Pitcairn and Hugh Percy" },
        "Lieutenant Colonel Francis Smith commanded the expedition and opened his orders only after leaving. Major John Pitcairn, of the Marines, was his second in command and led the advance guard. Brigadier General Hugh Percy led the relief column. Smith and Pitcairn were wounded on the way back, and Percy ended up leading the retreat.",
        { h: "John Parker, James Barrett and Isaac Davis" },
        "Captain John Parker, a veteran of the French and Indian War, commanded the Lexington militiamen and had tuberculosis, with a voice so raspy that he was hard to hear. At Concord, Colonel James Barrett commanded the assembled militias. Captain Isaac Davis, of Acton, agreed to lead the advance to the bridge and said, according to the account: 'I'm not afraid to go, and I haven't a man that's afraid to go.' He was killed there.",
        { h: "The messengers" },
        "Revere was captured at Lincoln by a British patrol, and Dawes fell from his horse. Only the young Samuel Prescott escaped and reached Concord. Revere, therefore, never got there, contrary to what Longfellow's famous poem says."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "About 700 regular soldiers left Boston, drawn from 11 of the garrison's 13 infantry regiments. There were 10 companies of [[light infantry|infantaria ligeira]], under Pitcairn, and 11 of [[grenadiers|granadeiros]], under Lieutenant Colonel Benjamin Bernard. The force was put together in a hurry, with officers who did not know the soldiers, and this hurt communication. Later, Percy brought about 1,000 men and two cannon, and the combined troops reached about 1,700.",
        "The colonists turned out about 4,000 men over the day, from some 30 towns. They arrived little by little, in groups, and there was no single command. There were companies of [[minutemen]] and ordinary militia. Both the British and the colonists carried smoothbore [[muskets|mosquete]], whose aimed shot reaches only about 75 to 90 meters (80 to 100 yards).",
        { h: "The terrain" },
        "The road from Boston to Concord is about 17 miles (27 km) long, with stone walls, woods, houses and bends that hid shooters. The rivers were swollen from spring, and the North Bridge, at Concord, was a narrow causeway. The soldiers marched all night, and many had been wet since they stepped into the water at Cambridge.",
        { h: "The day in movements" },
        { formation: true },
        "First, Lexington. At dawn, Pitcairn's advance guard reached the green, where some 77 to 80 of Parker's militiamen stood in ranks, in the open, without blocking the road to Concord. Parker knew that most of the material at Concord was already hidden and did not want to sacrifice his men for nothing. He ordered them to disperse and not to fire. The British advanced onto the green, shouted at the militiamen to lay down their arms, and then a shot rang out. A British volley followed. Eight Lexington men died, and ten were wounded. One British soldier was wounded in the thigh.",
        { note: "Who fired first at Lexington has been argued for more than two centuries. David Hackett Fischer writes that Parker and Pitcairn both told their men to hold their fire and that a shot came from someone whose identity is not known. Thirty-four militiamen later swore that they did not fire first. The British lieutenant John Barker claimed that the militiamen fired two shots beforehand. Most witnesses on both sides say they did not see who it was." },
        "Second, the road to Concord. Smith put the troops back in order and moved on. At Concord, the local militiamen, about 250, had gone out to meet the British, but turned back when they saw that the regulars numbered 700. Barrett led them beyond the North Bridge, to a hill about a mile (1.5 km) away, and waited for reinforcements from the neighboring towns.",
        "Third, the search. The grenadiers searched the town. At Concord, they destroyed the [[trunnions|munhão]] of three 24-pound cannon, burned gun carriages and threw barrels of flour and about 550 pounds (250 kg) of musket balls into the water. The fire reached the meetinghouse, and a resident, Martha Moulton, persuaded the soldiers to help put it out. For the rest, the soldiers treated civilians with care, paying for food and drink, and the townspeople used this to mislead the search of the smaller hiding places. Captain Parsons took four companies to Barrett's farm, about 2 miles (3 km) beyond the bridge, and found very little.",
        "Fourth, the North Bridge, around 11 a.m. Barrett saw the smoke rising from the town and ordered his men down the hill to about 300 yards (270 meters) from the bridge. The British pulled back to the other side. On one side, at least 400 colonists. On the other, 90 to 95 soldiers under Captain Walter Laurie. The Acton minutemen, the only ones with bayonets, led the advance in a column of two, along the road, because water covered the rest. Laurie formed the soldiers for 'street firing', a formation for narrow streets, wrong for defending a bridge, and confusion took over. One shot, probably a warning from a frightened soldier of the 43rd, was followed by a ragged volley. Davis and another Acton minuteman died instantly, and four were wounded. Major John Buttrick shouted: 'Fire, for God's sake, fellow soldiers, fire!' The colonists fired. Of the eight British officers and sergeants at the front, four were wounded, and at least three soldiers died. The British fled back to the town.",
        "Fifth, the return. After noon, Smith sent the column back to Boston. At Meriam's Corner, two British soldiers died and about six were wounded, and the militia had no casualties. At every bend or hill, more men arrived, in companies from different towns, and fired from walls, trees and houses. The column kept losing men. Near Lexington, Smith was wounded in the thigh, and Pitcairn's horse bolted and threw him, hurting his arm. Pitcairn took command.",
        "Sixth, the relief column. Smith had asked for reinforcements at 4 a.m. Percy reached Lexington around 2 p.m. and put his cannon in position. Smith's men had been marching since 2 a.m. Percy had left Boston without extra ammunition, despite the advice of the officer in charge of the artillery, and each man had only 36 cartridges. Two ammunition wagons that followed later, with an officer and 13 men, were ambushed by old militiamen from the 'alarm list' (men over 60), and six soldiers threw their weapons into a pond and surrendered.",
        "Seventh, from Lexington to Menotomy. Percy left Lexington at 3:30 p.m., with about 1,700 men, and put [[flankers|flanqueadores]] on the sides and rear. Brigadier General William Heath and Joseph Warren, who had arrived, told the militiamen to avoid close formations, which would draw the cannon, and to surround the column with a moving ring of shooters at a distance. At Menotomy (today's Arlington), the colonists fired from the houses, and the British had to clear the way house by house. The fiercest fighting of the day was there, at the Jason Russell house. About half of each side's deaths happened in Menotomy and Cambridge: there the colonists lost 25 killed and 9 wounded, and the British, 40 killed and 80 wounded. The officers lost control of the tired, furious soldiers, and some killed civilians inside the houses.",
        "Eighth, Charlestown. In Cambridge, Percy used the cannon and flankers at Watson's Corner against newly arrived militiamen. Heath had ordered the Great Bridge taken apart, and a crowd of militiamen waited on the bank. Percy, however, turned down a narrow track toward the Charlestown road and broke the ring of fire. A force from Salem and Marblehead, under Colonel Timothy Pickering, halted on Winter Hill and let the British pass. Pickering was accused of doing so to avoid war. He said later that he was obeying Heath, and Heath denied it. Near dusk, Pitcairn's Marines repelled a last attack at the entrance to Charlestown. Gage sent the 10th and 64th Regiments to fortify the town."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The British expedition failed: it seized little, and the fighting it was meant to prevent ended up happening. Only the damage to the three cannon at Concord mattered. According to Wikipedia, the British had 73 killed, 174 wounded and 53 missing, and the colonists, 49 killed, 39 wounded and 5 missing. The figures vary a little by source. By the next morning, more than 15,000 militiamen surrounded Boston, and the siege began that would last almost a year.",
        { h: "Why it matters" },
        "It was the first major military action of the Revolutionary War. After it, the question stopped being how to negotiate and became who would win. Less than two months later, at the Battle of Bunker Hill, the two sides met again, and this time near Boston.",
        "The contest for public opinion began the same day. Within four days, the Provincial Congress had collected scores of sworn depositions from militiamen and British prisoners. When it learned that Gage was sending his official report to London, it also sent a packet of those depositions. The new American government wanted to show British guilt and colonial innocence: unfavorable depositions were returned, and paintings showed Lexington as a massacre. In the 19th century, memory changed: veterans began to say that the British fired first, and paintings began to show the militia fighting back. Ralph Waldo Emerson's poem 'Concord Hymn' (1837) fixed the phrase 'the shot heard round the world'.",
        { h: "Curiosities and controversies" },
        { note: "Among the wounded at Lexington was Prince Estabrook, an enslaved man serving in the militia." },
        { note: "Patriots' Day is a holiday in Massachusetts on the third Monday of April, with reenactments at Lexington and the North Bridge. The last surviving veteran, Jonathan Harrington Jr., who had played the fife in Parker's company, died on 26 March 1854." },
        { note: "Militia numbers vary: from 50 to 70 at Lexington, according to some historians, and close to 500 at Concord. The name 'Bloody Angle', used for a bend in the road, only appeared after the Civil War and is now considered inaccurate." }
      ]}
    ]
  },

  iadrang: {
    war: "Pleiku Campaign, Vietnam War (1965)",
    hook: "Americans and North Vietnamese fought a real battle for the first time, and each side thought it had learned how to win.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1965, most of the South Vietnamese countryside was under partial Viet Cong control, which already had the reinforcement of regular soldiers from North Vietnam (the People's Army, called the PAVN). The United States increased its troops in the summer of that year. In the Central Highlands, a region of few roads and much jungle, the North had created the B3 Front and gathered three regiments, the 32nd, the 33rd and the 66th, plus a local battalion. From there, attacks to the southwest threatened to cut South Vietnam in two.",
        "The 1st Cavalry Division (Airmobile) was something new: a unit of [[air cavalry|cavalaria aérea]] that used helicopters to land troops where the enemy was. On 19 October, the PAVN attacked the Plei Me camp and was repelled. In November, the American command sent troops to look for PAVN forces near the Chu Pong massif, on the Cambodian border.",
        { h: "The road to the clearing" },
        { timeline: [
          ["19 Oct 1965", "The PAVN attacks the Plei Me camp, without success."],
          ["13 Nov", "Colonel Brown orders Hal Moore to make a helicopter assault the next morning."],
          ["14 Nov, 10:48 a.m.", "Moore's first men land at Landing Zone X-Ray."],
          ["15 Nov", "Attacks at dawn; at 4 p.m., the first B-52 strike."],
          ["16 Nov", "The fight at X-Ray ends."],
          ["17 Nov, 1:15 p.m.", "The column of the 2nd Battalion, 7th Cavalry, is caught in the Albany ambush."],
          ["18–19 Nov", "The Americans gather their dead and leave Albany."]
        ]},
        "For the mission, Colonel Thomas Brown, commander of the 3rd Brigade, chose the 1st Battalion, 7th Cavalry, under Lieutenant Colonel Hal Moore, with orders not to climb the mountain. Moore chose as his landing zone a clearing he called X-Ray."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Hal Moore, American lieutenant colonel" },
        "He commanded the 1st Battalion, 7th Cavalry (1/7). He planned the landings in waves, with Bravo Company first, and refused to leave his battalion, first when Colonel Brown wanted to take command of the battlefield and later when Westmoreland's headquarters summoned him to Saigon. He later wrote, with the journalist Joseph Galloway, the book 'We Were Soldiers Once... And Young'.",
        { h: "Brown, McDade and Tully" },
        "Colonel Thomas Brown commanded the 3rd Brigade. Lieutenant Colonel Robert McDade commanded the 2/7 and Lieutenant Colonel Robert Tully the 2nd Battalion, 5th Cavalry (2/5). McDade and the 2/7 marched to Albany, and Tully, with the 2/5, to another clearing, Columbus.",
        { h: "Nguyễn Hữu An and Chu Huy Mân, on the North Vietnamese side" },
        "Major General Chu Huy Mân commanded the B3 Front. Colonel Nguyễn Hữu An (Wikipedia also calls him a lieutenant colonel) was the forward commander. After X-Ray, An issued the order that became famous: 'Move inside the column, grab them by the belt, and thus avoid casualties from the artillery and air.'",
        { h: "Ernie Savage" },
        "Sergeant Ernie Savage inherited command of Henry Herrick's platoon when Herrick died on the first day. His group was cut off and became known as the 'Lost Platoon'."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Moore began with about 450 of the battalion's 765 men, carried in waves by 16 Huey helicopters. The X-Ray clearing was the size of a misshapen football field, about 100 meters long, and only eight helicopters fit at once. The PAVN had, according to Wikipedia, about 2,500 men in total in the campaign. Near X-Ray was the 9th Battalion of the 66th Regiment, about 200 meters from the clearing, and the other regiments were in the area.",
        { h: "The terrain" },
        "X-Ray lay at the eastern foot of the Chu Pong massif, ringed by low trees, with a dry creek bed to the west. The Ia Drang River ran about 2 km to the northwest. In the middle of the clearing stood a large [[termite hill|cupinzeiro]], which became Moore's command post. Farther north and northeast lay Albany, amid chest-high [[elephant grass|capim-elefante]].",
        { h: "The battle in ten moments" },
        { formation: true },
        "First, the landings. At 10:48 a.m. on 14 November, after about half an hour of fire preparation, the first men of Bravo Company came down. Each wave carried a little less than a company and took about 30 minutes. Moore's plan was to send Bravo and Alpha northwest, past the dry creek, and Charlie south, toward the mountain, while Delta stayed in reserve.",
        "Second, the Lost Platoon. Around noon, Lieutenant Al Devney's 1st Platoon of Bravo advanced about 100 meters west of the creek and was pinned down. Lieutenant Henry Herrick's 2nd Platoon followed on the right side, chased the attackers and was cut off, about 100 meters from the battalion. Herrick and other leaders died, and Sergeant Savage held a small knoll, calling in artillery fire again and again. Of 29 men, 9 died and 13 were wounded, until they were reached on the afternoon of 15 November.",
        "Third, the dry creek and the south. About 150 PAVN soldiers came down the creek bed against Alpha's 3rd Platoon. Lieutenant Bob Taft was killed, and Sergeant Lorenzo Nathan stopped the advance. Alpha's 2nd Platoon, under Lieutenant Walter Marm, blocked an attack on the flank. At 1:32 p.m., Charlie Company, under Captain Bob Edwards, arrived and faced the mountain, and at 2:30 p.m. the last men of Charlie and the first of Delta landed, under fire. An attack by 175 to 200 men against Charlie was stopped by artillery and air strikes by 3 p.m.",
        "Fourth, the night. Alpha and Delta were attacked on the left side. Moore ordered Alpha and Bravo to pull back, to evacuate the wounded, and the fight became a closed, 360-degree [[perimeter|perímetro]] around the clearing. A second push to relieve Savage's platoon gained only about 70 meters and stopped before a machine gun in a termite hill. Marm ran at it alone and received the Medal of Honor. Late in the afternoon, Bravo Company of the 2/7 arrived as reinforcement, and at night Savage's group repelled three attacks. The North Vietnamese signaled with bugles.",
        "Fifth, the dawn of 15 November. Around 6:50 a.m., Charlie's patrols were attacked, and more than 200 PAVN soldiers charged the south side of the perimeter. Charlie's 1st and 2nd Platoons suffered badly, and Lieutenants Neil Kroger and John Geoghegan died. Captain Edwards was gravely wounded, and command passed from hand to hand. The battalion was attacked on three sides. Moore had the code word 'Broken Arrow' sent, which means that an American unit is about to be overrun, and every available aircraft in South Vietnam was called. An F-100 dropped [[napalm]] near Moore's command post by mistake and wounded or killed some Americans. Charlie lost 42 dead and 20 wounded in two and a half hours.",
        "Sixth, the reinforcements and the B-52. Alpha of the 2/7, under Captain Joel Sugdinis, arrived at 9:10 a.m., and Tully's 2/5, which had left Landing Zone Victor on foot, at 12:05 p.m. With the two battalions, Moore put together the third push, which finally reached Savage's platoon in the afternoon. At 4 p.m., the first [[B-52s|b-52]] bombed the slopes of the massif, about 7 km to the west.",
        "Seventh, the early hours of 16 November. Around 4:22 a.m., the PAVN attacked Bravo Company of the 2/7, under Captain Myron Diduryk. There were four attacks, the last around 6:30 a.m. The forward observer, Lieutenant Bill Lund, directed the fire of four artillery batteries, and Diduryk had only six lightly wounded and no dead. The 1/7 was pulled out, but General Westmoreland ordered the 2/7 and the 2/5 to stay, so it would not look like a retreat.",
        "Eighth, the march. On 17 November, the 2/5 set out on foot for Columbus, and McDade's 2/7 for Albany, to make room for another B-52 strike. The soldiers had gone almost 60 hours without sleep. The first sign of the enemy was seen by the lead squad: sandal prints, bamboo arrows pointing north, flattened grass and grains of rice. The elephant grass limited visibility, and the column stretched out over about 500 meters.",
        "Ninth, the ambush. The reconnaissance platoon captured two PAVN soldiers, and McDade ordered a halt to question them. The company commanders were called forward, with their radio operators. At 1:15 p.m., the PAVN struck the head of the column and ran down the right side, in an L shape. The 6th Company of the 8th Battalion, 66th Regiment, attacked head-on, the 1st and 2nd Companies of the 1st Battalion, 33rd, attacked the flanks, and the 8th Company of the 8th/66th swung around and attacked from behind. McDade and his group were cut off in a grove between two clearings. Charlie and Alpha Companies lost 70 men in the first minutes. The fight lasted about 16 hours, and Americans and North Vietnamese were so mixed together that aircraft and artillery may have hit both sides. The commander of the 8th Battalion, Lê Xuân Phối, was mortally wounded.",
        "Tenth, the relief. Alpha Company of the 1/5, under Captain George Forrest, which had been at the rear of the column, formed a perimeter about 500 to 700 meters to the south. Bravo Company of the 1/5, under Captain Buse Tully, left Columbus at 2:55 p.m. and met Forrest at 4:30 p.m. Bravo of the 2/7, under Captain Diduryk, veterans of X-Ray, landed by helicopter in the grass at 6:45 p.m., with Lieutenant Rick Rescorla in the lead, and the wounded were evacuated from 10:30 p.m."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "At X-Ray, the Americans had 79 killed and 121 wounded, according to Wikipedia. At Albany, 155 killed or missing and 124 wounded. In all, the US counts between 234 and 237 dead. The American side reported 634 PAVN bodies found at X-Ray and another 1,215 killed at a distance, and 403 at Albany. The commanders themselves admitted the exaggeration: Moore lowered his men's count from 834 to 634, and McDade said he had not seen even 200 bodies at Albany. The 1966 report of the PAVN Central Highlands Front speaks of 559 dead and 669 wounded in five major engagements.",
        "Each side claimed victory. Moore wrote that the North Vietnamese soldiers 'had fought the Americans to a draw', and that, for them, a draw against such a power was the equivalent of a win.",
        { h: "Why it matters" },
        "The battle became the template for the war. The Americans bet on air mobility, artillery and air support, and the battle was one of the first to popularize the [[body count|contagem de corpos]] as a measure of success, with an alleged ratio of almost 10 enemy dead to 1. The PAVN realized it could cancel that firepower by fighting a few meters from the Americans. Almost all American casualties came from rifle fire and light mortars, and Moore noted the North's accurate shooting and its tactic of aiming at officers.",
        "Three years later, the battle of Huế, during the Tet Offensive, showed the PAVN and the Viet Cong fighting inside a large city, and the Americans forced to retake it street by street.",
        { h: "Curiosities and controversies" },
        { note: "It was the first time B-52s supported troops in combat, according to Wikipedia. After the battle, Westmoreland ordered his intelligence and operations chiefs to bring a B-52 strike within seven hours of obtaining suitable intelligence." },
        { note: "General Giap, according to Wikipedia, said after the battle that if the North Vietnamese defeated the Americans' tactics, the helicopters, they could defeat their strategy. Wikipedia gives neither the date nor a direct source for the remark." },
        { note: "At that time, the US Army had no teams to notify families of deaths. Telegrams were handed to taxi drivers. Julia Moore, Moore's wife, followed the deliveries to the widows' homes at Fort Benning, and her complaints led the Army to create teams made up of an officer and a chaplain." }
      ]}
    ]
  },

  fallujah2004: {
    war: "Iraq War (2003–2011)",
    hook: "Six weeks of house-to-house fighting in a city that most of its residents had already left.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Fallujah, in Anbar Province, had about 300,000 inhabitants and many mosques. In February 2004, the American 1st Marine Division took over the area. On 31 March, four Blackwater contractors were killed in an ambush in the city, and images of the bodies went around the world. Commanders in Iraq thought the deaths had no military importance, but American politicians asked for a strong response.",
        "The response was Operation Vigilant Resolve, on 5 April 2004. It ended on 28 April without retaking the city: an agreement left control with a local force, the Fallujah Brigade, under a former Ba'athist officer, Muhammed Latif. The insurgency grew. In September, an American official told ABC that capturing Abu Musab al-Zarqawi, said to be in Fallujah, was the 'highest priority'. The stated aim of the new operation was to weaken the insurgency before the Iraqi elections of January 2005.",
        { h: "The road to the offensive" },
        { timeline: [
          ["Feb 2004", "The 1st Marine Division takes over Fallujah."],
          ["31 Mar 2004", "Four Blackwater contractors are killed in the city."],
          ["5–28 Apr 2004", "First battle: Vigilant Resolve ends with an agreement."],
          ["7 Nov, night", "Diversionary attack from the west and south."],
          ["8 Nov", "Power cut, bombardment and main attack from the north."],
          ["9 Nov, night", "The troops reach Highway 10."],
          ["13–16 Nov", "The hardest fighting eases."],
          ["23 Dec", "End of the scattered fighting."]
        ]},
        "The operation was called Phantom Fury by the Americans, and was renamed Al-Fajr ('the Dawn', in Arabic) by the Iraqi government. Sources differ on who gave the new name: the prime minister or the defense minister."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "On the coalition side" },
        "The operation was commanded by the 1st Marine Division, under General Richard Natonski, within the I Marine Expeditionary Force, under Lieutenant General John Sattler. Two regimental combat teams (RCT-1 and RCT-7) made the attack. There were also US Army units, about 2,000 Iraqi soldiers and the 1st Battalion of the British regiment the Black Watch, with about 850 men.",
        { h: "On the insurgent side" },
        "Several groups were in Fallujah: al-Qaeda in Iraq, the Islamic Army in Iraq, Ansar al-Sunna, the Army of Muhammad and others. Three of them had their national headquarters there. According to Wikipedia, Sunnis and Shiites fought side by side, and the city did not have the infighting among insurgents seen elsewhere. The fighters included Iraqis and foreigners. Estimates vary: 3,000 is a frequent number, and other sources cite more. Several leaders left before the attack, and Zarqawi is believed to have escaped.",
        { h: "Decorated" },
        "Staff Sergeant David Bellavia, of the Army (Task Force 2-2), received the Medal of Honor. Sergeant Rafael Peralta, of the Marines, received the Navy Cross. Wikipedia lists ten Marines with this decoration."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The coalition gathered about 13,500 men, with about 6,500 [[Marines|fuzileiros navais]] and 1,500 US Army soldiers, plus 2,500 sailors in support roles and some 2,000 Iraqis. The Marines were divided into two regimental teams: RCT-1, with the 3/1 and 3/5 battalions and the 2nd Battalion, 7th Cavalry (Army), and RCT-7, with the 1/8, the 1/3 and the 2nd Battalion, 2nd Infantry (Army), among others. The [[insurgents|insurgentes]], by estimates, numbered about 3,000. The coalition had support from F-15s, F-16s, A-10s, B-52s and AC-130s, as well as Predator drones.",
        { h: "The terrain and the preparation" },
        "The city was ringed with checkpoints to keep anyone from entering or leaving. The coalition made maps from aerial imagery, used leaflets and broadcasts to ask civilians to leave, and most went. American military officials estimated that 70 to 90% of the 300,000 residents left, which left 30,000 to 90,000 in the city. News agencies said that men of military age were kept from leaving.",
        "The insurgents prepared for the attack. They dug tunnels and trenches and hid many [[improvised explosive devices|artefato explosivo improvisado]]. In some houses, they filled the rooms with gas bottles and gasoline drums wired to a remote detonator. They closed streets with concrete barriers and even put barriers inside houses. They bricked up the stairs to the roofs, to lure the soldiers into prepared fields of fire.",
        { h: "The battle in eight moments" },
        { formation: true },
        "First, the isolation and the deception. On 8 November, a 12-hour air bombardment focused on the south and southeast, where the insurgents had the strongest defenses, to reinforce the impression that the attack would come from there. There were also leaflets, a fake base and probing attacks. The city's power was cut by Navy engineers, the [[Seabees|seabees]], who shut down two substations.",
        "Second, the diversion. On the night of 7 November, Task Force Wolfpack, with an Army mechanized company and the Iraqi 36th Commando Battalion, attacked across the western peninsula, at the bend of the Euphrates. It took the Fallujah General Hospital, the Blackwater Bridge and the area of the Jurf Kas Sukr bridge. Two Marines died when a bulldozer fell into the river. According to Wikipedia, 42 insurgents died on the riverside.",
        "Third, the attack from the north. In the early hours of 8 November, after a barrage of about 2,500 155 mm shells and air strikes, the two regimental teams attacked along a line of some 5 km in the north of the city: RCT-1 in the northwest, RCT-7 in the northeast. The Army mechanized battalions, the 2-7 and Task Force 2-2, went in front, and the four Marine battalions came behind, to clear the buildings. The 1st Battalion of the Black Watch patrolled the highways to the east.",
        "Fourth, the station and the neighborhoods. The troops took the train station, later used as a base, and in the afternoon entered the neighborhoods of Hay Naib al-Dubat and al-Naziza. The seabees came on armored bulldozers and pushed the rubble aside to open the streets. According to the Modern War Institute study, the supply points were just north of the city and advanced along with the troops, so the attack never stopped to resupply.",
        "Fifth, Highway 10. After nightfall on 9 November, some units reached [[Phase Line Fran|linha de fase]], which was Highway 10, almost halfway through the city. The insurgents fought from inside buildings, in groups of four to twelve, with small arms, grenade launchers and bombs, and cut holes in walls to pass from house to house.",
        "Sixth, the methodical clearing. From 10 to 14 November, the troops advanced slowly. The standard sequence was an air strike, then artillery or mortars, then teams of armor, infantry and engineers moving down the street. Infantry and engineers broke into the buildings and cleared them room by room. Tanks and Bradley vehicles were used heavily: one tank company fired about 1,600 main-gun rounds in eight days, most at targets within 200 meters. The Modern War Institute study points to one problem: the units did not advance at the same pace. Task Force 2-2, with its own armor, moved faster than the Marines' 1/3, which had lost time at a breach that went wrong, and the seam between them was exploited by the insurgents.",
        "Seventh, the south. Around 13 November, most of the fighting had eased, but pockets of resistance remained. On 16 November, after nine days, the Marine command spoke of clearing pockets. The troops went down through the south and came back to the north to sweep up what was left. The insurgents rarely attacked at night, and the soldiers could rest.",
        "Eighth, the end. Scattered fighting continued until 23 December. In mid-December, residents returned, after biometric identification. By mid-January 2005, about 10% of the inhabitants had returned, and by the end of March, about 30%."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The coalition occupied the city. Sources differ on losses. Wikipedia adds up 107 coalition dead and 613 wounded: 95 Americans killed and 560 wounded (54 killed and 425 wounded between 7 and 16 November), 8 Iraqis killed and 43 wounded, and 4 British killed and 10 wounded in two attacks on the outskirts. The Modern War Institute study cites 38 Americans killed and about 275 wounded, which shows that the count depends on what is included. Of insurgents, estimates of dead run from about 1,000 to 1,200 up to more than 2,000, with no official figure, and about 1,500 were captured.",
        "Of civilians, Iraq Body Count records 581 to 670 dead, and the Red Cross estimated about 800. Other estimates, cited in the press, were higher. Of the roughly 50,000 buildings, 7,000 to 10,000 were destroyed, and half to two-thirds of the rest were badly damaged. About 60 mosques were destroyed or heavily damaged. One account speaks of 200,000 displaced by the two offensives of 2004.",
        { h: "Why it matters" },
        "Wikipedia describes the battle as the bloodiest and fiercest of the entire Iraq War. Militarily, the result was less decisive than the Americans hoped: Zarqawi and other outside fighters are said to have escaped beforehand. In 2005 and 2006, there were new bombings and new operations in the city, and in 2007 it passed to Iraqi control. The Islamic State took it in early 2014, and Iraqi forces retook it in June 2016.",
        "For the study of urban warfare, the case offers lessons. The Modern War Institute highlights the planning time, which in 2004 was months, unlike the political haste of April. It also highlights integrating information operations and embedding reporters to persuade civilians to leave, gathering intelligence down to the lowest levels, isolating the city, tying supply to the advance and training Army and Marine units together. Years later, the Battle of Mosul (2016–2017) again showed large-scale urban fighting in the region.",
        { h: "Curiosities and controversies" },
        { note: "White phosphorus: the Washington Post reported on 10 November 2004, based on reporters accompanying Task Force 2-2 of RCT-7, that it was used in the battle. On 8 November 2005, the Italian broadcaster RAI aired the documentary 'Fallujah, The Hidden Massacre', which said white phosphorus and MK-77 incendiary bombs had been used and showed burned civilians, and that this would violate Protocol III of the Convention on Certain Conventional Weapons, which the US only joined in 2009. On 15 November 2005, US Ambassador Robert Tuttle denied, in a letter to The Independent, that the substance had been used as a weapon. The same day, Pentagon spokesman Lieutenant Colonel Barry Venable confirmed to the BBC that white phosphorus was used as an incendiary weapon, to drive insurgents out of covered positions and then hit them with explosives. The Organisation for the Prohibition of Chemical Weapons, cited in the documentary, said the substance may be used for illumination and for its heat, but not as an offensive chemical weapon." },
        { note: "The wounded man killed: on 16 November 2004, NBC aired footage in which a Marine killed a wounded insurgent, who said he was 'playing possum'. Investigators from the Naval Criminal Investigative Service later concluded that he acted in self-defense." },
        { note: "The men who could not leave: news agencies said the Americans kept men of about 15 to 50 from leaving the city before the attack. The journalist George Monbiot wrote in The Guardian that the Marines treated the city as if only fighters lived in it." },
        { note: "Depleted uranium: American forces used ammunition made of this material. Studies from 2009 to 2012 reported more cancer and birth defects in Fallujah, and some linked this to uranium. Another review, in 2012, found no clear increase in birth defects tied to it, and the cause remains disputed." },
        { note: "Numbers vary: losses of insurgents and civilians appear in very wide ranges, and there is no official count of the former. The sources cited use different periods, and so American losses run from 38 to 95 dead." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lexingtonconcord: {
    terrain: [
      { t: "hill", x: 8, y: 14, rx: 8, ry: 6, l: "Punkatasset Hill" },
      { t: "sea", x: 17, y: 12, w: 2.4, h: 26, l: "" },
      { t: "note", x: 24, y: 8, l: "Concord River and North Bridge" },
      { t: "note", x: 33, y: 47, l: "Concord" },
      { t: "note", x: 60, y: 47, l: "Lexington" },
      { t: "note", x: 92, y: 47, l: "Charlestown" },
      { t: "note", x: 80, y: 66, l: "Boston ↘ (schematic map)" }
    ],
    units: [
      { id: "lex", s: "a", k: "inf", w: 7, h: 3, l: "Lexington militia (Parker)" },
      { id: "conc", s: "a", k: "inf", w: 12, h: 4, l: "Concord, Acton and Lincoln militias (Barrett)" },
      { id: "act", s: "a", k: "inf", w: 6, h: 3, l: "Acton minutemen (Davis)" },
      { id: "ring1", s: "a", k: "inf", w: 12, h: 3, l: "Militiamen from other towns" },
      { id: "ring2", s: "a", k: "inf", w: 12, h: 3, l: "" },
      { id: "adv", s: "b", k: "inf", w: 9, h: 3, l: "Pitcairn's advance guard" },
      { id: "main", s: "b", k: "inf", w: 14, h: 4, l: "Smith's column (grenadiers)" },
      { id: "laurie", s: "b", k: "inf", w: 7, h: 3, l: "Laurie's companies (90 to 95)" },
      { id: "pars", s: "b", k: "inf", w: 8, h: 3, l: "Parsons's detachment" },
      { id: "perc", s: "b", k: "inf", w: 14, h: 4, l: "Percy's column (≈ 1,000 and 2 cannon)" }
    ],
    steps: [
      { t: "Dawn on 19 April. Pitcairn's advance guard reaches Lexington, where some 77 to 80 of Parker's militiamen wait in ranks, in the open and off the road. Behind comes Smith's column, and Percy is still in Boston.",
        p: { lex: [60, 38], conc: [36, 36], act: [28, 30], ring1: [84, 6], ring2: [84, 62], adv: [74, 38], main: [88, 38], laurie: [92, 31], pars: [92, 44], perc: [96, 58] } },
      { t: "The British advance onto the green, order the militia to lay down their arms, and a shot rings out. A volley kills eight militiamen and wounds ten. The rest disperse. Who fired first is disputed.",
        p: { lex: [56, 30], adv: [64, 38], main: [82, 38] } },
      { t: "Smith re-forms the column and moves on to Concord. The Concord militiamen, about 250, fall back ahead of the British and, under Barrett, cross to the hill beyond the North Bridge.",
        p: { lex: [52, 25], adv: [46, 38], main: [58, 38], conc: [11, 14] }, x: ["lex"] },
      { t: "At Concord, the grenadiers search the town, smash cannon and burn gun carriages. Parsons's company goes to Barrett's farm, and Laurie's guard the North Bridge.",
        p: { main: [34, 36], adv: [32, 40], pars: [6, 3], laurie: [15, 22], act: [10, 20] } },
      { t: "Barrett sees the smoke and comes down the hill with more than 400 men. The Acton minutemen, the only ones with bayonets, lead the way. Laurie pulls back to the other side of the bridge.",
        p: { conc: [12, 20], act: [14, 24], laurie: [24, 24] } },
      { t: "A shot comes from the British side, and a ragged volley follows: Isaac Davis and another minuteman die. Buttrick orders fire. The British, with officers hit, flee back to the town.",
        p: { conc: [18, 24], act: [19, 26], laurie: [30, 32], pars: [10, 8] } },
      { t: "After noon, the column leaves Concord. Militiamen from dozens of towns arrive and fire from walls and woods. Smith and Pitcairn are wounded near Lexington.",
        p: { main: [52, 38], adv: [44, 36], laurie: [42, 40], pars: [38, 36], conc: [34, 28], act: [34, 46], ring1: [58, 26], ring2: [58, 50] } },
      { t: "Around 2 p.m., Percy's column reaches Lexington with two cannon. Smith's men, on their feet since 2 a.m., rest behind it. Together they number about 1,700.",
        p: { perc: [66, 38], main: [60, 40], adv: [54, 38], conc: [40, 28], ring1: [66, 26], ring2: [66, 52] } },
      { t: "At 3:30 p.m. the march resumes, with flankers. At Menotomy and Cambridge, shooters in the houses and a moving ring of militiamen cause most of the day's casualties. Percy escapes along a track to Charlestown and arrives at dusk.",
        p: { perc: [92, 38], main: [86, 40], adv: [82, 38], conc: [70, 28], ring1: [80, 26], ring2: [80, 52] } }
    ]
  },

  iadrang: {
    terrain: [
      { t: "hill", x: 10, y: 38, rx: 13, ry: 28, l: "Chu Pong massif" },
      { t: "sea", x: 0, y: 0, w: 100, h: 3, l: "" },
      { t: "note", x: 55, y: 6, l: "Ia Drang River (northwest)" },
      { t: "note", x: 90, y: 6, l: "North ↑" },
      { t: "note", x: 38, y: 46, l: "X-Ray" },
      { t: "note", x: 66, y: 22, l: "Albany" },
      { t: "note", x: 84, y: 30, l: "Columbus" },
      { t: "note", x: 72, y: 66, l: "Victor" }
    ],
    units: [
      { id: "bR", s: "a", k: "inf", w: 6, h: 3, l: "Bravo, 1/7" },
      { id: "aL", s: "a", k: "inf", w: 6, h: 3, l: "Alpha, 1/7" },
      { id: "cH", s: "a", k: "inf", w: 6, h: 3, l: "Charlie, 1/7" },
      { id: "dL", s: "a", k: "inf", w: 6, h: 3, l: "Delta, 1/7 (reserve)" },
      { id: "lost", s: "a", k: "inf", w: 4, h: 3, l: "Herrick and Savage's platoon" },
      { id: "b27", s: "a", k: "inf", w: 6, h: 3, l: "Bravo, 2/7" },
      { id: "t25", s: "a", k: "inf", w: 8, h: 3, l: "2nd Battalion, 5th Cavalry (Tully)" },
      { id: "c27", s: "a", k: "inf", w: 4, h: 18, l: "2/7 column (McDade)" },
      { id: "a15", s: "a", k: "inf", w: 6, h: 3, l: "Alpha, 1/5 (rear)" },
      { id: "pW", s: "b", k: "inf", w: 8, h: 4, l: "PAVN: 66th Regiment" },
      { id: "pS", s: "b", k: "inf", w: 10, h: 4, l: "PAVN from the south and the mountain" },
      { id: "p8", s: "b", k: "inf", w: 6, h: 4, l: "8th Battalion, 66th" },
      { id: "p33", s: "b", k: "inf", w: 6, h: 4, l: "1st Battalion, 33rd" }
    ],
    steps: [
      { t: "14 November, 10:48 a.m. Moore lands in the X-Ray clearing, at the eastern foot of the Chu Pong massif. Bravo comes down first, then Alpha, Charlie and Delta. About 450 men, and only eight helicopters fit at a time.",
        p: { bR: [42, 42], aL: [47, 40], cH: [48, 50], dL: [50, 45], lost: [42, 42], b27: [62, 58], t25: [74, 66], c27: [70, 62], a15: [74, 62], pW: [26, 44], pS: [32, 58], p8: [60, 14], p33: [70, 12] } },
      { t: "Bravo and Alpha advance northwest, past the dry creek. Herrick's platoon chases the attackers and is cut off, about 100 meters from the battalion.",
        p: { bR: [38, 38], aL: [44, 34], lost: [30, 34] } },
      { t: "About 150 PAVN soldiers come down the creek bed against Alpha. Charlie lands at 1:32 p.m., facing the mountain. Sergeant Savage holds his knoll with artillery.",
        p: { pW: [34, 40], pS: [38, 54], cH: [46, 52] } },
      { t: "As evening falls, Moore pulls Alpha and Bravo back and closes a 360-degree perimeter. At night Bravo of the 2/7 arrives as reinforcement, and the cut-off platoon repels three attacks.",
        p: { bR: [42, 40], aL: [47, 37], b27: [52, 44], pW: [32, 38] } },
      { t: "15 November, 6:50 a.m. More than 200 PAVN soldiers attack the south, against Charlie, and the fight spreads to three sides of the perimeter. Moore calls 'Broken Arrow', and the aircraft are summoned.",
        p: { pS: [47, 58], cH: [48, 53], pW: [30, 38] } },
      { t: "Tully's 2/5 arrives on foot from Victor at 12:05 p.m., and Alpha of the 2/7 reinforces Charlie. The cut-off platoon is reached in the afternoon. At 4 p.m., the B-52 bombs the slopes of the massif.",
        p: { t25: [52, 55], lost: [38, 38], pS: [40, 62], pW: [14, 40] }, x: ["pS"] },
      { t: "16 November, 4:22 a.m. Four attacks on Bravo of the 2/7, with the fire of four batteries directed by Lund. Six lightly wounded and no dead. The fight at X-Ray ends.",
        p: { b27: [47, 36], pW: [24, 34] }, x: ["pW"] },
      { t: "17 November. The 2/5 goes on foot to Columbus, and McDade's 2/7 to Albany, in a column of some 500 meters. They have been almost 60 hours without sleep, and the elephant grass limits visibility.",
        p: { t25: [82, 28], c27: [62, 32], a15: [60, 46], bR: [44, 44], aL: [46, 38] } },
      { t: "1:15 p.m. The PAVN strikes the head of the column and runs down the right side, in an L. The 66th comes from the front and from behind, and the 33rd on the flanks. McDade and the command group are cut off in a grove.",
        p: { p8: [64, 24], p33: [70, 34], c27: [62, 28], a15: [60, 46] } },
      { t: "Three American companies arrive to reinforce the survivors: Alpha of the 1/5 forms a perimeter to the south, Bravo of the 1/5 leaves Columbus, and Bravo of the 2/7 lands by helicopter at 6:45 p.m. The fight lasted about 16 hours.",
        p: { a15: [60, 40], t25: [76, 32], b27: [60, 26], p8: [68, 18], p33: [76, 34] }, x: ["p8", "p33"] }
    ]
  },

  fallujah2004: {
    terrain: [
      { t: "sea", x: 13, y: 0, w: 5, h: 70, l: "Euphrates River" },
      { t: "note", x: 6, y: 42, l: "Hospital and bridges" },
      { t: "note", x: 90, y: 6, l: "North ↑" },
      { t: "note", x: 50, y: 34, l: "Highway 10 (Phase Line Fran)" },
      { t: "note", x: 52, y: 67, l: "Checkpoints to the south" }
    ],
    units: [
      { id: "rct1", s: "a", k: "inf", w: 22, h: 3.5, l: "RCT-1 (northwest)" },
      { id: "rct7", s: "a", k: "inf", w: 22, h: 3.5, l: "RCT-7 (northeast)" },
      { id: "tf27", s: "a", k: "inf", w: 10, h: 3, l: "2-7 Cav (Army)" },
      { id: "tf22", s: "a", k: "inf", w: 10, h: 3, l: "TF 2-2 Inf (Army)" },
      { id: "wolf", s: "a", k: "inf", w: 8, h: 3, l: "Wolfpack and Iraqi commandos" },
      { id: "bw", s: "a", k: "inf", w: 4, h: 14, l: "Black Watch (highways to the east)" },
      { id: "ckS", s: "a", k: "inf", w: 44, h: 2, l: "" },
      { id: "iN", s: "b", k: "inf", w: 40, h: 4, l: "Insurgents in the north" },
      { id: "iC", s: "b", k: "inf", w: 36, h: 4, l: "Insurgents in the center" },
      { id: "iS", s: "b", k: "inf", w: 34, h: 5, l: "Strongest defenses (south and southeast)" },
      { id: "iH", s: "b", k: "inf", w: 8, h: 3, l: "Insurgents at the hospital" }
    ],
    steps: [
      { t: "Before the attack. Checkpoints seal the city, and most civilians have already left. The Marines line up in the north, with the Army in front. The insurgents expect an attack from the south and southeast, where the defenses are strongest.",
        p: { rct1: [38, 3], rct7: [64, 3], tf27: [34, 8], tf22: [62, 8], wolf: [6, 26], bw: [92, 34], ckS: [52, 64], iN: [50, 17], iC: [50, 28], iS: [58, 48], iH: [6, 34] } },
      { t: "Night of 7 November. Task Force Wolfpack and Iraqi commandos attack from the west and south, as a diversion, and take the hospital and two bridges.",
        p: { wolf: [6, 34] }, x: ["iH"] },
      { t: "8 November. With the power cut, and after about 2,500 155 mm shells, the two regimental teams attack at once, along some 5 km of front. The Army goes in front.",
        p: { rct1: [38, 14], rct7: [64, 14], tf27: [34, 19], tf22: [62, 19] } },
      { t: "The Marines take the train station and, in the afternoon, the neighborhoods of Hay Naib al-Dubat and al-Naziza. The seabees' armored bulldozers open the rubble-filled streets.",
        p: { rct1: [38, 20], rct7: [64, 20], tf27: [34, 25], tf22: [62, 25] }, x: ["iN"] },
      { t: "Night of 9 November. The first units reach Highway 10, almost in the middle of the city.",
        p: { rct1: [38, 30], rct7: [64, 30], tf27: [34, 34], tf22: [62, 34] } },
      { t: "10 to 14 November. The troops advance slowly, with air strikes, artillery and then armor, infantry and engineers, clearing room by room. The insurgents fight from inside buildings, in groups of four to twelve.",
        p: { rct1: [38, 40], rct7: [64, 40], tf27: [34, 44], tf22: [62, 44] }, x: ["iC"] },
      { t: "Around 13 to 16 November, most of the fighting eases. The troops reach the south, where the strongest defenses were, and clear the remaining pockets.",
        p: { rct1: [38, 52], rct7: [64, 52], tf27: [34, 56], tf22: [62, 56] }, x: ["iS"] },
      { t: "Until 23 December, isolated pockets remain. The troops sweep the city again, from south to north. In mid-December, residents begin to return, after biometric identification.",
        p: { rct1: [38, 44], rct7: [64, 44], tf27: [34, 48], tf22: [62, 48] } }
    ]
  }
});
