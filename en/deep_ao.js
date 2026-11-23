// In-depth battles, batch ao: nilo, navarino, hamptonroads, leyte (naval pack, part 2).
// Checked against the English and Portuguese Wikipedia articles on the Battle of the Nile, Navarino, Hampton Roads,
// Leyte Gulf, Surigao Strait, Cape Engano and the Battle off Samar, the Hansard record of the Commons debate of
// 31 January 1828 (the "untoward event" speech), the Royal Museums Greenwich entry on Navarino, and the works those
// pages cite. Where sources disagree the text says so.
// Aircraft are not drawn in the Leyte diagram (unit_kinds.js is not edited here); only ships appear.

Object.assign(GLOSSARY, {
  "baixio": "A shallow stretch of sea, with sand or rock just under the surface. A big ship that runs aground on a shoal can be stuck, and at night it is almost invisible.",
  "mola": "An extra cable fastened to the anchor and the ship. When the crew hauls on it, the anchored ship swings around and points its side guns at the target, without having to raise anchor.",
  "brigue": "A small two-masted ship with few guns, used to carry messages and patrol.",
  "bala em brasa": "An iron cannonball heated in a furnace until it glowed red. Fired at a wooden ship, it lodged in the hull and started a fire.",
  "casa do piloto": "A small armored cabin in the bow of the Monitor, from which the captain looked at the sea through narrow slits and steered the ship.",
  "lancha torpedeira": "A small, very fast wooden boat that launched torpedoes. The Americans called theirs 'PT boats'.",
  "força-tarefa": "A group of ships assembled for a mission under a single commander. The US Navy numbered them: Task Force 34, for example.",
  "porta-aviões leve": "A carrier smaller and slower than the big ones, built on a cruiser hull, with fewer aircraft.",
  "contratorpedeiro de escolta": "A small, slow ship, smaller than a destroyer, built to escort convoys and hunt submarines. The Americans called it a 'destroyer escort'."
});

Object.assign(DEEP, {
  nilo: {
    war: "Napoleon's Egyptian campaign (1798–1801)",
    hook: "Nelson attacked an anchored fleet at nightfall and, in a few hours, wiped it out.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 19 May 1798, a French fleet left Toulon carrying Napoleon Bonaparte and about 35,000 soldiers. The destination was secret: Egypt. Napoleon wanted to take the country and, from there, threaten the route between Britain and India. Britain, at war with France, sent Rear Admiral Horatio Nelson after the fleet in the Mediterranean.",
        "Nelson crossed the sea for weeks without finding it. He reached Alexandria before the French, saw no one and left. Meanwhile, Napoleon landed near Alexandria on 1 July and, on 21 July, defeated the Mamluks at the Battle of the Pyramids. The fleet, under Vice Admiral François-Paul Brueys, stayed at anchor in Aboukir Bay, east of Alexandria.",
        { h: "The road to Aboukir Bay" },
        { timeline: [
          ["19 May 1798", "The French fleet leaves Toulon with Napoleon and about 35,000 soldiers."],
          ["1 Jul", "The French land near Alexandria."],
          ["21 Jul", "Napoleon beats the Mamluks at the Battle of the Pyramids."],
          ["1 Aug, 2 p.m.", "British lookouts sight the French fleet at anchor in Aboukir Bay."],
          ["1 Aug, 6:20 p.m.", "The shooting starts. The battle lasts all night."],
          ["2–3 Aug", "The last French ships surrender or flee."]
        ]},
        "Nelson had lost track of the French for weeks. When he found out they were in Egypt, he turned back. Napoleon's army was already ashore, but the fleet was what linked it to France: without it, the army was cut off."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Horatio Nelson, 39 years old" },
        "A rear admiral, he had already lost the sight of one eye and an arm in combat. His style was to explain the plan to all his captains and let them decide on the spot, without waiting for signals. According to tradition, on the eve of the battle he told the officers of the Vanguard that before the next day he would win either a peerage or a tomb in Westminster Abbey. After the battle, he called his captains 'a band of brothers'.",
        { h: "François-Paul Brueys, 45 years old" },
        "A French vice admiral. He anchored the fleet in a long line, next to a [[shoal|baixio]], and waited. He counted on the shoal forcing the British to attack the centre and the rear, and on his van being able to react afterwards. He was killed during the battle.",
        { h: "The other names" },
        "Among the British, Captain Thomas Foley commanded the Goliath, and Captain Samuel Hood the Zealous, which led the way measuring the depth. Thomas Troubridge commanded the Culloden, which ran aground, and Benjamin Hallowell the Swiftsure. On the French side, Captain Luc-Julien-Joseph Casabianca commanded L'Orient, the [[flagship|capitânia]]; Rear Admiral Armand Blanquet, the Franklin; and Rear Admiral Pierre-Charles Villeneuve, the rear, aboard the Guillaume Tell. Villeneuve escaped and, seven years later, would command the French at Trafalgar."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Both sides had 13 [[ships of the line|navio de linha]]. The British ones were all 74-gun ships, and there was also the 50-gun Leander. The French had one of 120 guns, L'Orient, three of 80 and nine of 74, plus four [[frigates|fragata]].",
        { h: "The terrain" },
        "In Aboukir Bay, a [[shoal|baixio]] extends south of Aboukir Island. Brueys anchored his 13 ships in a [[line of battle|linha de batalha]] about 2.6 km long, on the northeast edge of that shoal, with about 150 metres between ships. The first, the Guerrier, lay about 900 metres from the shoal. Brueys left enough room for an enemy ship to cut across the head of the line.",
        "There were two more weaknesses. Brueys ordered the ships to tie cables to one another, but not all the captains obeyed. Anchored only by the bow, the ships swung with the wind, and the gaps between them grew. And the guns on the seaward side were ready, but those on the landward side were not: the gunports were closed and the deck was full of equipment.",
        { h: "Nelson's decision" },
        "The British sighted the French around 2 p.m. on 1 August. Nelson did not wait for the next day or form a line. He ordered an immediate attack, with the Zealous in front, Captain Hood taking soundings, and had [[springs|mola]] rigged on the anchor cables so the ships could swing once anchored. The idea was to go down both sides of the French line, so that each ship at the head and in the middle would be between two British ships, and L'Orient would face three. Night fell during the attack, and each British ship showed four lights in a horizontal row on the mizzen mast, so that friends would not fire on one another.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, at 6:20 p.m., the Guerrier and the Conquérant opened fire on the approaching British. Captain Foley, of the Goliath, saw the gap between the Guerrier and the shoal and, on his own initiative, sailed into it. The Goliath swept the Guerrier on her unprepared side with [[raking fire|fogo em enfiada]] and anchored next to the Conquérant. The Zealous followed and anchored beside the Guerrier. Within five minutes, the Guerrier's foremast fell.",
        "Second, other British ships followed the Goliath on the inside. The Theseus engaged the Spartiate, and the Audacious anchored between the Guerrier and the Conquérant. The Orion passed between the line and the French frigates on the landward side, fired on the frigate Sérieuse and went on to anchor farther along.",
        "Third, around 6:40 p.m., Nelson's Vanguard, the Minotaur and the Defence anchored on the seaward side, facing the French van, which was now caught between two fires. In the falling dark, the Culloden, which had been towing a prize, ran aground on the shoal near the island and never got off.",
        "Fourth, the French van was dismantled. The Conquérant lost all three masts before 7 p.m., and Captain Dalbarade, mortally wounded, surrendered the ship. The Guerrier and the Spartiate surrendered around 9 p.m. The Aquilon, dismasted, surrendered at 9:25 p.m., after Captain Thévenard was killed.",
        "Fifth, the Bellerophon and the Majestic reached the centre. The Bellerophon fought L'Orient, lost two masts at 7:50 p.m. and cut her cables at 8:20 p.m., drifting away. The Majestic's jib boom tangled in the Tonnant's rigging, and she lost Captain Westcott. Meanwhile, the Peuple Souverain cut her anchor cable and drifted south, leaving a gap in the French line. The Leander sailed through it.",
        "Sixth, around 8:30 p.m., a splinter of metal wounded Nelson above his right eye, which was already blind, and a flap of skin fell over his face and left him unable to see for a while. Believing he was dying, he said: 'I am killed, remember me to my wife'. The surgeon Michael Jefferson stitched him up and said it was only a flesh wound. Nelson ignored the order to rest and went back on deck. At that moment the Swiftsure and the Alexander, which had fallen behind, arrived in the dark and attacked L'Orient.",
        "Seventh, near 9 p.m., fire appeared on L'Orient's lower decks. Hallowell, in the Swiftsure, aimed his guns at the flames, and the fire spread. Admiral Brueys, hit by a cannonball that nearly cut him in two, died about 15 minutes later, refusing to be carried below. At 10 p.m., the fire reached the [[magazine|paiol]], and L'Orient exploded. The nearest British ships had stopped firing to fight fires, and the burning wreckage fell close to them.",
        "Eighth, after the explosion, nobody fired for about ten minutes. At 10:10 p.m., the Franklin resumed firing, and the Tonnant, the Heureux and the Mercure cut their anchors and drifted south. Around midnight, only the Tonnant was still firing. Fighting resumed at dawn, at 4 a.m. on 2 August, and the Tonnant surrendered only on 3 August.",
        "Ninth, the French rear had been left out of it: the wind kept it from helping the rest. On the morning of the 2nd, the Guillaume Tell, the Généreux and the frigates Justice and Diane put out to open sea. The Timoléon, aground, was set on fire by her own crew."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Of the 13 French ships of the line, 9 were captured, 2 destroyed (L'Orient and the Timoléon) and only 2 escaped. Of the frigates, one sank and another was scuttled by her own crew. According to the English Wikipedia, the French had 2,000 to 5,000 dead or wounded and 3,000 to 3,900 prisoners. The British had 218 dead and 677 wounded, and lost no ship.",
        { h: "Why it matters" },
        "The victory changed the balance in the Mediterranean. Napoleon's army was stranded in Egypt, without support by sea, and the Royal Navy dominated the region until the end of the Napoleonic Wars. The result also encouraged other powers to turn against France. Napoleon learned of the defeat on 14 August 1798 and reportedly said: 'We no longer have a fleet'. He returned to France in August 1799, leaving the army with Kléber.",
        "Nelson became a hero all over Europe. He was made Baron Nelson of the Nile, and received a pension from the British Parliament and money from the East India Company. The Ottoman sultan made him a knight of the Order of the Crescent and gave him a chelengk, a turban ornament set with diamonds. In Naples, he was welcomed with a procession and met Emma, Lady Hamilton. In private, he thought the title little for what he had done.",
        { h: "Curiosities and controversies" },
        { note: "The boy on the burning deck: the poem 'Casabianca', by the Englishwoman Felicia Hemans (1826), made famous the son of L'Orient's captain, who is said to have stayed by his father's side until the explosion. The story is told in different ways. In the sources, the boy is about 12 years old and dies in the explosion, but there is also an account that he lost a leg earlier, hit by a cannonball." },
        { note: "The landward side: Brueys counted on the shoal to protect that side of the line, and the guns there were not ready. Foley sailed through there on his own initiative, and that was where the battle began to tip toward the British." },
        { note: "The numbers vary: French losses appear in wide ranges (2,000 to 5,000 dead or wounded and 3,000 to 3,900 prisoners). The British ones, 218 dead and 677 wounded, are firmer." }
      ]}
    ]
  },

  navarino: {
    war: "Greek War of Independence (1821–1832)",
    hook: "Three powers that did not want a battle sank an entire fleet in a single afternoon.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1821, the Greeks rose against the Ottoman Empire, which had ruled them for centuries. Europe was moved: the poet Lord Byron died in Greece helping the cause, in 1824. But by 1827 the revolt was close to being crushed. The sultan had called on the ruler of Egypt, Muhammad Ali, and his son Ibrahim Pasha had brought an Egyptian army and fleet to the Peloponnese.",
        "Britain, France and Russia wanted to prevent a massacre, but each had its own interests. Russia wanted to weaken the Ottomans. Britain and France feared that Russia would grow too strong. On 6 July 1827, the three signed the Treaty of London: they demanded an armistice and autonomy for Greece, still under the sultan.",
        { h: "The road to the bay" },
        { timeline: [
          ["6 Jul 1827", "Treaty of London: Britain, France and Russia demand an armistice."],
          ["29 Aug", "The Ottoman government rejects the treaty."],
          ["2 Sep", "The Greek provisional government accepts the armistice."],
          ["20 Oct, 1:30 p.m.", "Admiral Codrington signals to prepare for action."],
          ["20 Oct, 2 p.m.", "The allied squadron enters Navarino Bay."],
          ["20 Oct, afternoon", "The Turkish-Egyptian fleet is destroyed."]
        ]},
        "The allied admirals were ordered to impose the armistice and prevent reinforcements from arriving from Egypt and Asia Minor. They could use force only as a last resort. The Turkish-Egyptian fleet lay at anchor in Navarino Bay, and the allies decided to go there to show force."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Edward Codrington, 57 years old" },
        "A British vice admiral, he commanded the allied squadron. He had fought at Trafalgar, 22 years earlier. His orders were to impose the armistice without fighting, if possible. To do so, he sailed into the bay and anchored in the middle of the enemy fleet, betting that his presence would be enough. When the battle began by accident, it was not he who wanted it.",
        { h: "The other allied commanders" },
        "Rear Admiral Henri de Rigny commanded the French, and Rear Admiral Lodewijk van Heiden (Heyden) the Russians. Captain Mikhail Lazarev commanded the Azov, the Russian [[flagship|capitânia]] and the ship that suffered most.",
        { h: "On the other side" },
        "Tahir Pasha commanded the Ottoman imperial squadron, from the 84-gun Ghiuh Rewan. Moharram Bey commanded the Egyptian squadron. Ibrahim Pasha was the overall commander, on shore, and on 20 October he sent a boat to Codrington to protest the allies' entry into the bay. Codrington ignored the protest."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The allies had 10 [[ships of the line|navio de linha]] (4 Russian, 3 British and 3 French), 10 [[frigates|fragata]] (4 Russian, 4 British and 2 French) and 7 smaller ships, with 1,252 guns and about 8,000 men. The Turkish-Egyptian fleet had 78 ships: 3 of the line, 17 frigates, 30 [[corvettes|corveta]], 28 [[brigs|brigue]], 5 schooners and some 5 or 6 [[fireships|brulote]], with more than 2,100 guns and about 20,000 men. It was larger, but the allied ships were better armed, and their crews better trained.",
        { h: "The terrain" },
        "Navarino Bay lies on the west coast of the Peloponnese and is almost closed off by the island of Sphacteria. The entrance is narrow, to the south, between the island and the fortress of Navarino. The Ottomans had anchored their ships in a horseshoe, in three lines, from one end, next to the fortress, to the southern tip of the island. In front were the ships of the line and the larger frigates, behind them the smaller ones, and at the ends, the fireships and corvettes.",
        { h: "The afternoon of 20 October in eight moves" },
        { formation: true },
        "First, at 1:30 p.m., Codrington signalled to prepare for action. The allies were outside the bay, in line, and the order was to fire only if attacked.",
        "Second, around 2 p.m., the squadron entered through the southern passage, with Codrington's Asia in front. The French went to the fortress side, and the Russians, a little behind, to the island side.",
        "Third, around 2:15 p.m., the British anchored facing the centre of the horseshoe. Each ship stopped opposite an adversary. The French faced the Egyptian wing.",
        "Fourth, the Russians were the last to arrive and took the most exposed position, facing the other wing. The allies were anchored inside the horseshoe, at close range from the enemy.",
        "Fifth, the battle begins by accident. Captain Thomas Fellowes, of the Dartmouth, sent a boat to stop an Ottoman fireship from being prepared. The Ottomans fired on the boat and lit the fireship. When the Ottomans also fired on the cutter sent to tow the fireship away, Fellowes ordered musket fire. Then the French frigate Sirène, de Rigny's ship, fired in support, and an Ottoman corvette fired on her. The fighting ran along the whole line.",
        "Sixth, around 4 p.m., the three Ottoman ships of the line and most of the large frigates of the first line were destroyed. Tahir Pasha's Ghiuh Rewan was destroyed with the help of the French Breslaw. Lazarev's Azov fought several ships and sank or disabled three large frigates and a corvette, but took 153 hits, some below the waterline.",
        "Seventh, in the next two hours, most of the rest of the fleet was destroyed. Many dismasted ships were set on fire or blown up by their own crews, so that they would not fall into enemy hands. Codrington twice tried to order a ceasefire, but the signals were not seen or were ignored.",
        "Eighth, at the end of the afternoon, the bay was covered with wreckage and burning ships. Of the 78 Turkish-Egyptian ships, only 8 could still sail: one dismasted ship of the line, two frigates and five corvettes."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The allies had 181 dead and 480 wounded, according to Codrington. They lost no ship, but the Russian Azov, Gangut and Iezekiil were disabled, and the three British ships of the line had to return home for repairs. On the Turkish-Egyptian side, the losses are uncertain: about 4,000 dead or wounded and about 4,000 prisoners, according to the English Wikipedia, which also cites a historian, Letellier, with 3,000 dead and 1,109 wounded, while Codrington thought the proportion was the reverse. They lost about 55 ships.",
        { h: "Why it matters" },
        "The battle destroyed the Ottoman and Egyptian fleet in the Mediterranean and saved the young Greek state from collapse. It did not end the war: Russia went to war with the Ottomans (1828–1829), and a French force went to the Peloponnese and forced the Ottomans to withdraw. In 1832, Greece was recognized as an independent kingdom.",
        "It was also the last great naval battle fought entirely under sail.",
        { h: "Curiosities and controversies" },
        { note: "Accident or plan? The Portuguese Wikipedia says the battle happened 'more by accident than by design', the result of a manoeuvre by Codrington to force Ibrahim to obey the allied instructions." },
        { note: "The 'untoward event': in the King's Speech of January 1828, the British government, headed by the Duke of Wellington, called the battle an 'untoward event'. Britain wanted the Ottomans strong as a counterweight to Russia. France did not adopt that expression. Codrington was recalled to London: according to the Royal Museums Greenwich, the government thought he had exceeded his instructions." },
        { note: "The Turkish-Egyptian losses: sources give different numbers, and none is firm. What is known is the result: only 8 ships out of 78 could still sail." }
      ]}
    ]
  },

  hamptonroads: {
    war: "American Civil War (1861–1865)",
    hook: "Two iron ships fought for hours without being able to defeat each other, and the wooden ships of the whole world became obsolete.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1861, the Southern states separated from the United States and the Civil War began. The Union, the North, had a much larger navy and used it to blockade the Southern ports. Unable to export cotton or import weapons, the Confederacy was being strangled. Breaking the [[naval blockade|bloqueio naval]] was a matter of survival.",
        "The Confederacy had few ships, but it had an idea. In April 1861, when the federals abandoned the Gosport shipyard, in Norfolk, they burned the steam frigate Merrimack, which sank. The Confederates raised the hull, built on top of it a sloping casemate covered with iron plates, fitted a [[ram|esporão]] to the bow and renamed her the Virginia. The North learned of the project and answered with its own [[ironclad|encouraçado]]: the Monitor, designed by the engineer John Ericsson, with a revolving [[armored turret|torre blindada]].",
        { h: "The road to Hampton Roads" },
        { timeline: [
          ["Apr 1861", "The federals abandon the Gosport shipyard and set fire to the Merrimack."],
          ["Early 1862", "The Confederates finish the Virginia, and the North builds the Monitor."],
          ["8 Mar 1862", "First day: the Virginia attacks the federal fleet in Hampton Roads."],
          ["9 Mar", "Second day: the Monitor faces the Virginia."],
          ["11 May 1862", "The Virginia is scuttled by her own crew."],
          ["31 Dec 1862", "The Monitor sinks in a storm off Cape Hatteras."]
        ]},
        "Hampton Roads is a shallow roadstead where several rivers meet, and where Fort Monroe, held by the Union, and the town of Newport News stood. On the other side lay Sewell's Point and the Elizabeth River, which led to Norfolk and the Confederate shipyard."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Franklin Buchanan" },
        "Commander of the Virginia, he had been the first superintendent of the US Naval Academy. He was wounded in the thigh by a rifle shot on the first day, while standing in the open on top of the ship, thinking himself safe, and left the fight.",
        { h: "Catesby ap Roger Jones" },
        "Executive officer of the Virginia, he took command on the second day. To him, the Virginia had won: after the fight with the Monitor, he went back to Norfolk believing the mission was accomplished.",
        { h: "John Worden and John Ericsson" },
        "Worden commanded the Monitor with a crew of volunteers. He was temporarily blinded by a fragment on the second day, and Lieutenant Samuel Dana Greene took command. Ericsson, a Swede settled in the United States, designed the ship. Captain John Marston, the senior officer present in the federal fleet, was in command in place of the absent commander."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Virginia had 10 guns (6 of 9 inches and 4 rifled guns), an iron ram and a casemate covered with two layers of 2-inch iron. The Monitor had only two 11-inch guns, in a revolving turret of 8-inch iron, and her deck was almost level with the water. The federals had five large wooden ships in the area: Cumberland, Congress, Minnesota, Roanoke and St. Lawrence. The Confederates had the Virginia, plus the small ships Raleigh and Beaufort and the James River squadron.",
        { h: "The first day and the first night" },
        { formation: true },
        "First, on the morning of 8 March, the Virginia left the Elizabeth River and entered Hampton Roads. In the roadstead, the Cumberland and the Congress were anchored near Newport News, and the Minnesota, the Roanoke and the St. Lawrence near Fort Monroe.",
        "Second, the Virginia went straight for the Cumberland, running through the Congress's fire. The shot from the wooden ships hit the casemate and bounced off.",
        "Third, the Virginia rammed the Cumberland. The ram stuck in the hull, and when the Virginia backed away, the ram broke off. The Cumberland sank with 121 men, according to Wikipedia, and, according to Buchanan's account, fought her guns as long as there was deck above water.",
        "Fourth, the Virginia turned on the Congress, which Lieutenant Joseph Smith had ordered run aground in shallow water. A shot killed Smith, and the executive officer, Austin Pendergrast, surrendered the ship, about an hour later. The Virginia fired [[hot shot|bala em brasa]], and the Congress caught fire. Buchanan, wounded, left command.",
        "Fifth, the Minnesota, the Roanoke and the St. Lawrence went to help, but all ran aground. The Virginia, with her deep draft and the tide falling, could not get close enough to the Minnesota. With nightfall, she went back to Sewell's Point. The Congress, burning, blew up near midnight.",
        "Sixth, during the night, the Monitor arrived from New York and anchored beside the grounded Minnesota, to protect her.",
        "Seventh, on the morning of 9 March, the Virginia came back. Her first shot missed the Monitor and hit the Minnesota. The two ironclads fought for about three hours, at close range, unable to pierce each other. The Virginia ran aground around 10 a.m., but got free. The Monitor's guns used charges of 15 pounds of powder, for fear of bursting the barrel; tests made later showed that 30-pound charges were safe.",
        "Eighth, a shell from the Virginia exploded on the Monitor's [[pilothouse|casa do piloto]], and the fragments blinded Worden for a while. The Monitor moved off into shallow water. The Virginia, which was damaged, with the tide falling and the Minnesota out of reach, and believing the Monitor had withdrawn, went back to Norfolk. The Monitor stayed to guard the Minnesota. Each side declared itself the winner."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The battle is considered a draw. The Confederates lost 7 dead and 17 wounded over the two days. The Union lost 261 dead and 108 wounded, almost all on the first day, and two ships, the Cumberland and the Congress. But the blockade held, and the Virginia never broke it.",
        "The Virginia was scuttled by her own crew on 11 May 1862, near Craney Island, when the Confederates abandoned Norfolk. The Monitor sank on 31 December 1862, in a storm off Cape Hatteras, while under tow, and 16 men died.",
        { h: "Why it matters" },
        "It was the first combat between ironclad ships in history. It showed that wooden ships could not stand up to an armored ship. The design of warships changed all over the world: the 'monitor' type spread, and the [[ram|esporão]] came back into use.",
        "In the North, there was panic. According to Wikipedia, the Secretary of War, Edwin Stanton, warned at a cabinet meeting that the Virginia could attack coastal cities and even shell the White House. The Secretary of the Navy, Gideon Welles, replied that the Virginia could not get up the Potomac and that a federal ironclad was already on its way.",
        { h: "Curiosities and controversies" },
        { note: "Merrimack or Virginia? The ship has two names. For the Confederates, she was the Virginia. Northerners kept calling her the Merrimack, the name of the original hull, and the battle became known in the United States as that of the 'Monitor and Merrimack'." },
        { note: "Who won? Each side thought it had won. The Virginia left the field and the Monitor stayed, but the Virginia sank two ships, and the Monitor protected the Minnesota and the blockade held. That is why historians call it a draw." }
      ]}
    ]
  },

  leyte: {
    war: "Pacific War, Second World War: the return to the Philippines (1944)",
    hook: "Four actions in four days, a bait that worked and a turnaround nobody predicted.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In October 1944, Japan was losing the war in the Pacific. The Americans were advancing island by island, and General Douglas MacArthur had promised, in 1942, to return to the Philippines. On 20 October, American troops landed on the island of Leyte, with Vice Admiral Thomas Kinkaid's Seventh Fleet giving gunfire support. Admiral William Halsey's Third Fleet, with the fast carriers, covered the operation.",
        "Japan could not beat the American fleet, but it could try to destroy the landing ships in Leyte Gulf. This was the Shō-1 plan. The Imperial Navy split what was left into four forces. Vice Admiral Takeo Kurita's Centre Force, the largest, would pass through the San Bernardino Strait. Vice Admiral Shōji Nishimura's Southern Force, with another behind it under Vice Admiral Kiyohide Shima, would enter through the Surigao Strait. And Vice Admiral Jisaburō Ozawa's Northern Force had carriers with very few aircraft and pilots. It served as bait to draw Halsey out of the way.",
        { h: "The road to the gulf" },
        { timeline: [
          ["20 Oct 1944", "The Americans land on Leyte."],
          ["23 Oct", "American submarines sink the cruisers Atago and Maya, from Kurita's force."],
          ["24 Oct", "American aircraft sink the battleship Musashi in the Sibuyan Sea."],
          ["24–25 Oct, night", "Battle of the Surigao Strait."],
          ["25 Oct, morning", "Battle off Samar."],
          ["25 Oct", "Battle of Cape Engaño."]
        ]},
        "The numbers for both sides vary with the source. The Allies had about 300 ships, among them 8 fleet carriers, 9 light carriers, 18 escort carriers and 12 battleships, and about 1,500 aircraft. Japan had about 70, among them 4 carriers and 9 battleships (counting the two hybrids) and more than 300 aircraft."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "William Halsey" },
        "Commander of the Third Fleet, known as aggressive. When his aircraft found Ozawa's Northern Force, he was convinced that Kurita's Centre Force had been crippled and that the Japanese carriers were the threat. He went after them with everything he had.",
        { h: "Takeo Kurita" },
        "Commander of the Centre Force. His flagship cruiser, the Atago, was sunk by a submarine on 23 October, and he had to swim to another ship and move to the Yamato. On 24 October he watched the Musashi sink. Even so, he kept going.",
        { h: "The other names" },
        "Rear Admiral Jesse Oldendorf commanded the old battleships waiting for Nishimura. Rear Admiral Clifton Sprague commanded the group known as Taffy 3, with six escort carriers. Commander Ernest Evans commanded the destroyer Johnston. On the Japanese side, Ozawa knew his force was a bait and accepted the role."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The overall plan" },
        "The battle was a sequence of four separate actions, over four days. The diagram shows the whole, in simplified form: only the ships and not the aircraft, which decided much of the fighting.",
        { formation: true },
        "First, on 23 October, the three forces coming from the south and west approach, and Ozawa comes from the north. American submarines sink the Atago and the Maya. The Takao is damaged.",
        "Second, on 24 October, in the Sibuyan Sea, Third Fleet aircraft attack Kurita relentlessly. The battleship Musashi sinks around 7:35 p.m. A Japanese bomb hits the [[light carrier|porta-aviões leve]] Princeton, which is lost. Kurita turns back to get out of range of the aircraft.",
        "Third, still on the 24th, American aircraft find Ozawa at 4:40 p.m. Halsey believes Kurita is crippled and takes everything north: the carriers and the battleships of the Third Fleet. His 3:12 p.m. message says that [[Task Force|força-tarefa]] 34, of battleships, 'will be formed', and Kinkaid and Admiral Nimitz understand that it has already been formed, to guard the San Bernardino Strait. A clarifying message, at 5:10 p.m., was not intercepted by Kinkaid. In practice, the force was never detached, and the strait was left unguarded. At 5:15 p.m., Kurita turns back toward the strait.",
        "Fourth, on the night of 24 to 25 October, in the Surigao Strait, Nishimura enters with two battleships, a cruiser and four destroyers. Oldendorf has six old battleships (five had been at Pearl Harbor, in 1941), eight cruisers, 28 destroyers and 39 [[PT boats|lancha torpedeira]]. The PT boats attack for more than three hours without scoring a hit.",
        "Fifth, around 3 a.m., American destroyers launch torpedoes from both sides of the Japanese column. The Fusō is hit and sinks about 40 minutes later, and two of Nishimura's destroyers go down. Oldendorf's [[crossing the T|cruzar o t]] ends up having little influence, because the Japanese column was already broken up. Shima, who was coming behind, withdraws. It was the last battleship battle in history.",
        "Sixth, during the night, Kurita passes through the San Bernardino Strait with nobody stopping him, and at dawn on 25 October he sights the ships of Taffy 3, off Samar, at 6:37 a.m. Contact is made around 6:45 a.m., and the Japanese take the Americans completely by surprise.",
        "Seventh, Taffy 3 had 6 escort carriers, 3 destroyers and 4 [[destroyer escorts|contratorpedeiro de escolta]], against 4 battleships, 6 heavy cruisers, 2 light ones and 11 destroyers. Evans threw the Johnston into the attack at full speed and crippled the cruiser Kumano with torpedoes. The Hoel and the Samuel B. Roberts also attacked. The carriers fled into a heavy rain squall, sending their aircraft to attack. The Japanese lost three heavy cruisers. Around 9:20 a.m., Kurita gave the order to withdraw. He had lost control of his formation, was unsure where Halsey was, knew the Southern Force had been destroyed and believed he had sunk several carriers. Near 11 a.m., a pilot, Lieutenant Yukio Seki, flew his plane into the St. Lo, in one of the first organized [[kamikaze|kamikaze]] attacks of the war.",
        "Eighth, in the north, on 25 October, Halsey's aircraft sink Ozawa's four carriers, among them the Zuikaku. Halsey sent the battleships of Task Force 34 back south only at 11:15 a.m., when Kurita had already gone."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "According to the English Wikipedia, the Allies lost about 11 ships (among them 1 light carrier, 2 escort carriers, 2 destroyers and 1 destroyer escort), about 255 aircraft and about 3,000 men. Japan lost about 26 ships (among them 1 fleet carrier, 3 light carriers, 3 battleships, 6 heavy cruisers, 4 light ones and 9 destroyers), about 300 aircraft and about 12,000 men. Off Samar alone, the Americans had 1,161 dead or missing and 913 wounded.",
        { h: "Why it matters" },
        "The Imperial Navy was no longer able to fight a fleet battle. The Americans took Leyte and continued the reconquest of the Philippines. The Surigao action was the last battle between [[battleships|couraçado]], and kamikaze attacks became common in the following months. The English Wikipedia calls Leyte the largest naval battle of the Second World War, with more than 200,000 naval personnel involved, and many consider it the largest in history.",
        "Halsey was heavily criticized for leaving the strait unguarded. He maintained that Ozawa was the greater threat. Nimitz sent him the question: 'Where is Task Force 34?'. The radio added at the end a padding phrase, 'The world wonders', which was not part of the message, and Halsey, on reading it, was furious.",
        { h: "Curiosities and controversies" },
        { note: "Why did Kurita turn back? It is the great mystery of the battle. Wikipedia lists the reasons: the air attacks had disorganized his formation, he had lost three cruisers, he did not know where Halsey was, he believed he had sunk several big carriers and he knew the Southern Force had been destroyed. The landing ships in Leyte Gulf were the target of the whole operation." },
        { note: "The numbers: different sources give different counts of ships, aircraft and dead, and American losses off Samar range from a little over 1,000 to about 1,600 dead. Here we follow the numbers of the English Wikipedia and say so when there is doubt." },
        { note: "The aircraft do not appear in the diagram because the site draws only ships. In the Sibuyan Sea, off Samar and at Engaño, it was the aircraft that decided things." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  nilo: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 36, y: 38, rx: 14, ry: 28, l: "Aboukir shoal" },
      { t: "note", x: 90, y: 6, l: "Aboukir Bay" }
    ],
    units: [
      { id: "g1", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Guerrier (van)" },
      { id: "g2", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Conquérant" },
      { id: "g3", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Spartiate" },
      { id: "g4", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Aquilon" },
      { id: "g5", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Peuple Souverain" },
      { id: "g6", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Franklin (Blanquet)" },
      { id: "g7", s: "b", k: "ship", w: 4.4, h: 4.4, l: "L'Orient (Brueys)" },
      { id: "g8", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Tonnant" },
      { id: "g9", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Heureux" },
      { id: "g10", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Mercure" },
      { id: "g11", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Guillaume Tell (Villeneuve)" },
      { id: "g12", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Généreux" },
      { id: "g13", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Timoléon" },
      { id: "fr", s: "b", k: "ship", w: 2.6, h: 7, l: "French frigates" },
      { id: "bGo", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Goliath (Foley)" },
      { id: "bZe", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Zealous (Hood)" },
      { id: "bAu", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Audacious" },
      { id: "bTh", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Theseus" },
      { id: "bOr", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Orion" },
      { id: "bVa", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Vanguard (Nelson)" },
      { id: "bMi", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Minotaur" },
      { id: "bDe", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Defence" },
      { id: "bBe", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Bellerophon" },
      { id: "bMa", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Majestic" },
      { id: "bSw", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Swiftsure" },
      { id: "bAl", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Alexander" },
      { id: "bCu", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Culloden (aground)" },
      { id: "bLe", s: "a", k: "ship", w: 3.6, h: 2, l: "Leander" }
    ],
    steps: [
      { t: "1 August 1798, afternoon. The French are anchored in a line of 13 ships, with the Guerrier in front, near the shoal, and L'Orient in the centre. The British arrive from the northwest. The Swiftsure and the Alexander are far behind.",
        p: { g1: [62, 20], g2: [62, 24], g3: [62, 28], g4: [62, 32], g5: [62, 36], g6: [62, 40], g7: [62, 45], g8: [62, 50], g9: [62, 54], g10: [62, 58], g11: [62, 62], g12: [62, 66], g13: [62, 70], fr: [55, 50, 90],
             bGo: [40, 7], bZe: [33, 7], bOr: [26, 7], bTh: [19, 7], bAu: [12, 7],
             bVa: [40, 2], bMi: [33, 2], bDe: [26, 2], bBe: [19, 2], bMa: [12, 2],
             bLe: [2, 2], bCu: [10, 12], bAl: [2, 9], bSw: [2, 15] } },
      { t: "Nelson does not wait for the next day or form a line. He attacks at dusk, with the Zealous in front taking soundings. The ships stretch out in a column toward the French van.",
        p: { bGo: [58, 10], bZe: [51, 7], bOr: [44, 6], bTh: [37, 5], bAu: [30, 5],
             bVa: [72, 3], bMi: [65, 2], bDe: [58, 2], bBe: [51, 2], bMa: [44, 2],
             bLe: [16, 6], bCu: [22, 10], bAl: [8, 10], bSw: [14, 14] } },
      { t: "6:20 p.m.: Foley's Goliath sees the gap between the Guerrier and the shoal and goes through it, on her own. She sweeps the first ship on the landward side, which was not prepared. The Zealous follows.",
        p: { bGo: [56, 25, 90], bZe: [56, 17.5, 90], bOr: [58, 12], bTh: [50, 9], bAu: [43, 8],
             bVa: [76, 12], bMi: [72, 6], bDe: [65, 3], bBe: [58, 3], bMa: [51, 3],
             bLe: [24, 8], bCu: [30, 10], bAl: [12, 10], bSw: [18, 12] } },
      { t: "Around 6:40 p.m., the Audacious, the Theseus and the Orion anchor on the inside. The Vanguard, the Minotaur and the Defence anchor on the outside, facing the van. Each French ship at the head of the line is caught between two fires. The Culloden runs aground on the shoal.",
        p: { bZe: [56, 17.5, 90], bAu: [56, 22, 90], bGo: [56, 26.5, 90], bTh: [56, 31, 90], bOr: [56, 37, 90],
             bVa: [69, 28, 90], bMi: [69, 32, 90], bDe: [69, 36, 90], bBe: [72, 20], bMa: [78, 14],
             bCu: [37, 15, 70], bLe: [48, 9], bSw: [40, 10], bAl: [32, 8] } },
      { t: "Between 7 and 9:30 p.m., the French van falls: the Conquérant, the Guerrier, the Spartiate and the Aquilon surrender. In the centre, the Bellerophon fights L'Orient and the Majestic fights the Tonnant.",
        p: { bBe: [69, 44, 90], bMa: [69, 50, 90], bSw: [74, 24], bAl: [70, 14], bLe: [52, 14] }, x: ["g1", "g2", "g3", "g4"] },
      { t: "8:20 p.m.: the shattered Bellerophon cuts her cables and drifts away. The Peuple Souverain cuts her cable and also drifts off, opening a gap in the line, through which the Leander passes. Around 8:30 p.m., Nelson is wounded in the head. The Swiftsure and the Alexander arrive in the dark and attack L'Orient.",
        p: { bBe: [80, 46, 90], g5: [58, 41], bLe: [62, 37, 90], bSw: [69, 44, 90], bAl: [69, 40, 90] } },
      { t: "About 9 p.m.: L'Orient catches fire and Brueys dies. At 10 p.m., the fire reaches the magazine, and the ship blows up. The nearby British ships had stopped firing to fight the fire. The Tonnant, the Heureux and the Mercure cut their anchors and drift south.",
        p: { bSw: [74, 44, 90], bAl: [74, 38, 90], bOr: [50, 37, 90], g8: [66, 55], g9: [58, 57], g10: [58, 61] }, x: ["g7"] },
      { t: "After the explosion, ten minutes of silence. At 10:10 p.m., the Franklin resumes firing. Around midnight, only the Tonnant is still firing. The Peuple Souverain, out of action, surrenders during the night.",
        p: { bBe: [82, 52, 90] }, x: ["g5"] },
      { t: "2 August. The Guillaume Tell and the Généreux, which had been left out of the fight, escape to open sea. The Timoléon, aground, is set on fire by her crew. The others surrender, and the Tonnant only on 3 August. Of the 13 French ships, 9 were captured, 2 destroyed, 2 fled.",
        p: { g11: [94, 58], g12: [94, 64], g13: [50, 72] }, x: ["g6", "g8", "g9", "g10", "g13"] }
    ]
  },

  navarino: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 14, y: 26, rx: 10, ry: 28, l: "Island of Sphacteria" },
      { t: "hill", x: 96, y: 24, rx: 14, ry: 30, l: "Navarino fort" },
      { t: "note", x: 52, y: 58, l: "Entrance to the bay" },
      { t: "note", x: 90, y: 74, l: "North ↑" }
    ],
    units: [
      { id: "o2", s: "b", k: "ship", w: 36, h: 5, l: "Corvettes and brigs (2nd and 3rd lines)" },
      { id: "oC", s: "b", k: "ship", w: 26, h: 4, l: "Imperial squadron (Tahir Pasha)" },
      { id: "oNE", s: "b", k: "ship", w: 12, h: 4, l: "" },
      { id: "oNW", s: "b", k: "ship", w: 12, h: 4, l: "" },
      { id: "oE", s: "b", k: "ship", w: 16, h: 4, l: "Egyptian squadron (Moharram Bey)" },
      { id: "oW", s: "b", k: "ship", w: 16, h: 4, l: "West wing, by the island" },
      { id: "oFE", s: "b", k: "ship", w: 3, h: 6, l: "Fireships" },
      { id: "oFW", s: "b", k: "ship", w: 3, h: 6, l: "" },
      { id: "bT", s: "a", k: "ship", w: 12, h: 3.4, l: "British (Codrington)" },
      { id: "fT", s: "a", k: "ship", w: 12, h: 3.4, l: "French (de Rigny)" },
      { id: "rT", s: "a", k: "ship", w: 14, h: 3.4, l: "Russians (Heiden and Lazarev)" },
      { id: "aF", s: "a", k: "ship", w: 14, h: 3, l: "Allied frigates" }
    ],
    steps: [
      { t: "20 October 1827, 1:30 p.m. The Turkish-Egyptian fleet (78 ships) is anchored in a horseshoe, in three lines, with the ends facing the entrance. The allied squadron (27 ships) waits outside the bay. The order is to fire only if attacked.",
        p: { o2: [52, 7], oC: [52, 14], oNE: [70, 21, 40], oNW: [34, 21, -40], oE: [77, 35, 80], oW: [27, 35, -80], oFE: [84, 45], oFW: [20, 45],
             bT: [50, 64, 90], fT: [58, 68, 90], rT: [42, 68, 90], aF: [50, 74, 90] } },
      { t: "2 p.m.: Codrington's Asia enters through the southern passage. The French go to the fortress side, and the Russians, a little behind, to the island side. Ibrahim Pasha sends a boat to protest, and Codrington ignores it.",
        p: { bT: [50, 46, 90], fT: [58, 50, 90], rT: [42, 50, 90], aF: [50, 56, 90] } },
      { t: "Around 2:15 p.m., the British anchor facing the centre of the horseshoe. The others are still arriving.",
        p: { bT: [52, 26], fT: [60, 40, 90], rT: [44, 42, 90], aF: [52, 38, 90] } },
      { t: "The French anchor facing the Egyptian wing. The Russians, the last to arrive, take the most exposed position, facing the west wing. The allies are inside the horseshoe, at close range from the enemy.",
        p: { fT: [66, 36, 80], rT: [38, 36, -80], aF: [52, 33] } },
      { t: "The start is an accident. The Dartmouth sends a boat to stop a fireship, and the Ottomans fire on the boat and light the fireship. Captain Fellowes orders musket fire, the French frigate Sirène fires in support, an Ottoman corvette answers, and the fighting runs along the whole line.",
        p: {} },
      { t: "Around 4 p.m., the three Ottoman ships of the line and almost all the large frigates of the first line are destroyed. Tahir Pasha's Ghiuh Rewan is destroyed with the help of the French Breslaw.",
        p: {}, x: ["oC", "oNE", "oNW"] },
      { t: "In the next two hours, almost all the rest of the fleet is destroyed. Many ships are set on fire or blown up by their own crews. Codrington twice tries to order a ceasefire, but the signals are not seen or are ignored.",
        p: { aF: [52, 22] }, x: ["oE", "oW", "o2", "oFE", "oFW"] },
      { t: "At the end of the afternoon, only 8 of the 78 Turkish-Egyptian ships can still sail. The allies had 181 dead and 480 wounded and lost no ship, although the Russian Azov, Gangut and Iezekiil, and the three British ships of the line, had to be repaired.",
        p: { rT: [38, 40, -80], bT: [52, 28] } }
    ]
  },

  hamptonroads: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 6, y: 8, rx: 14, ry: 12, l: "Newport News" },
      { t: "hill", x: 100, y: 38, rx: 12, ry: 14, l: "Fort Monroe" },
      { t: "hill", x: 42, y: 76, rx: 40, ry: 10, l: "Sewell's Point and Norfolk" },
      { t: "note", x: 82, y: 6, l: "Hampton Roads" }
    ],
    units: [
      { id: "cumb", s: "a", k: "ship", w: 7, h: 2.8, l: "Cumberland" },
      { id: "cong", s: "a", k: "ship", w: 7, h: 2.8, l: "Congress" },
      { id: "minn", s: "a", k: "ship", w: 8, h: 3, l: "Minnesota" },
      { id: "rs", s: "a", k: "ship", w: 8, h: 3, l: "Roanoke and St. Lawrence" },
      { id: "mon", s: "a", k: "ship", w: 6, h: 2.4, l: "Monitor (arrives at night)" },
      { id: "virg", s: "b", k: "ship", w: 10, h: 3.6, l: "Virginia" },
      { id: "es", s: "b", k: "ship", w: 5, h: 2.4, l: "Raleigh and Beaufort" },
      { id: "js", s: "b", k: "ship", w: 7, h: 2.4, l: "James River squadron" }
    ],
    steps: [
      { t: "8 March 1862, morning. The Cumberland and the Congress are anchored near Newport News. The Minnesota, the Roanoke and the St. Lawrence are near Fort Monroe. The Virginia leaves the Elizabeth River, heading for Newport News.",
        p: { cumb: [14, 24, 80], cong: [12, 33, 80], minn: [70, 36], rs: [86, 44], mon: [104, 62], virg: [38, 62, 35], es: [28, 64, 35], js: [-3, 52] } },
      { t: "The Virginia crosses the roadstead, passes the Congress, which fires without effect, and goes straight for the Cumberland. The shot from the wooden ships bounces off the iron casemate.",
        p: { virg: [30, 44, 40], es: [38, 54, 40] } },
      { t: "The Virginia rams the Cumberland. The ram sticks in the hull and breaks off when the ship backs away. The Cumberland sinks, with 121 dead, fighting as long as her guns were above water.",
        p: { virg: [19, 28, 50] }, x: ["cumb"] },
      { t: "The Virginia turns on the Congress, which ran aground in shallow water. The James River squadron arrives to help. After about an hour, the Congress surrenders. The Virginia fires hot shot, and the Congress catches fire. Buchanan is wounded in the thigh.",
        p: { virg: [20, 38, 60], js: [10, 44], cong: [10, 34, 80] } },
      { t: "The Minnesota, the Roanoke and the St. Lawrence go out to help, and all run aground. The Virginia, with her deep draft and the tide falling, cannot reach the Minnesota. With nightfall, she goes back to Sewell's Point. The Congress blows up near midnight.",
        p: { minn: [50, 24], rs: [62, 32], virg: [44, 56, 35], js: [28, 52], es: [36, 58, 35] }, x: ["cong"] },
      { t: "During the night, the Monitor arrives and anchors beside the grounded Minnesota, to protect her.",
        p: { mon: [57, 26] } },
      { t: "9 March, morning. The Virginia returns. Her first shot misses the Monitor and hits the Minnesota. The two ironclads fight for about three hours, at close range, without piercing each other. The Virginia runs aground around 10 a.m., but gets free.",
        p: { virg: [47, 34, 35], mon: [55, 28] } },
      { t: "A shell from the Virginia explodes on the Monitor's pilothouse and blinds Worden for a while. The Monitor moves off into shallow water. The Virginia, damaged, with the tide falling and believing the Monitor has withdrawn, goes back to Norfolk. Each side says it won, and the blockade continues.",
        p: { virg: [40, 58, 35], mon: [60, 26] } }
    ]
  },

  leyte: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 26, y: 2, rx: 24, ry: 5, l: "Luzon" },
      { t: "hill", x: 64, y: 22, rx: 10, ry: 12, l: "Samar" },
      { t: "hill", x: 56, y: 44, rx: 8, ry: 12, l: "Leyte" },
      { t: "hill", x: 56, y: 76, rx: 40, ry: 12, l: "Mindanao" },
      { t: "note", x: 40, y: 12, l: "San Bernardino Strait" },
      { t: "note", x: 30, y: 30, l: "Sibuyan Sea" },
      { t: "note", x: 78, y: 48, l: "Leyte Gulf" },
      { t: "note", x: 50, y: 62, l: "Surigao Strait" },
      { t: "note", x: 96, y: 72, l: "North ↑" }
    ],
    units: [
      { id: "hal", s: "a", k: "ship", w: 14, h: 4, l: "Third Fleet (Halsey)" },
      { id: "taf", s: "a", k: "ship", w: 9, h: 3, l: "Taffy 3 (escort carriers)" },
      { id: "old", s: "a", k: "ship", w: 14, h: 4, l: "Oldendorf's battleships" },
      { id: "inv", s: "a", k: "ship", w: 12, h: 3.4, l: "Landing ships" },
      { id: "kur", s: "b", k: "ship", w: 16, h: 4, l: "Centre Force (Kurita)" },
      { id: "nis", s: "b", k: "ship", w: 10, h: 3, l: "Southern Force (Nishimura)" },
      { id: "shi", s: "b", k: "ship", w: 8, h: 3, l: "Shima" },
      { id: "oza", s: "b", k: "ship", w: 12, h: 3, l: "Northern Force (Ozawa), the bait" }
    ],
    steps: [
      { t: "22 and 23 October 1944. The Americans have landed on Leyte. Japan sends four forces: Kurita from the west, Nishimura and Shima from the south, and Ozawa, the bait, from the north.",
        p: { kur: [20, 54], nis: [28, 66], shi: [16, 72], oza: [98, 3], hal: [94, 24], taf: [88, 40], old: [66, 54], inv: [78, 46] } },
      { t: "24 October, in the Sibuyan Sea: Halsey's aircraft attack Kurita relentlessly. The battleship Musashi sinks around 7:35 p.m. Kurita turns back to get out of range of the aircraft.",
        p: { kur: [38, 28], nis: [42, 64], shi: [30, 72], oza: [97, 5], hal: [94, 20] } },
      { t: "Late in the afternoon, Halsey's aircraft find Ozawa. Halsey takes the whole Third Fleet north and leaves the San Bernardino Strait unguarded. At 5:15 p.m., Kurita turns back toward the strait.",
        p: { hal: [96, 10], oza: [98, 3], kur: [46, 16] } },
      { t: "Night of 24 to 25 October, in the Surigao Strait: Oldendorf's old battleships wait for the Southern Force at the exit of the strait. PT boats and destroyers attack first, and around 3 a.m. the torpedoes hit the Japanese battleships.",
        p: { nis: [58, 58, 90], shi: [50, 68], old: [64, 52] } },
      { t: "The Fusō sinks, and then the Yamashiro. The Southern Force is destroyed, and Shima withdraws. It was the last battleship battle in history. In the north, Kurita passes through the San Bernardino Strait with nobody stopping him.",
        p: { shi: [40, 72], kur: [76, 6] }, x: ["nis"] },
      { t: "25 October, 6:45 a.m.: Kurita comes down the coast of Samar and runs into Taffy 3, six escort carriers and their escorts, and the surprise is total.",
        p: { kur: [86, 24], taf: [90, 36] } },
      { t: "Taffy 3's three destroyers and four escorts attack with torpedoes, outnumbered and far weaker. The carriers flee into a heavy rain squall, and their aircraft attack. The Japanese lose three heavy cruisers. Around 9:20 a.m., Kurita orders a withdrawal.",
        p: { kur: [72, 6], taf: [92, 44] } },
      { t: "In the north, Halsey's aircraft sink Ozawa's four carriers, among them the Zuikaku. Halsey only sends the battleships back south at 11:15 a.m., too late.",
        p: { hal: [96, 6] }, x: ["oza"] }
    ]
  }
});
