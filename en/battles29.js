// Great-battles pack, part 29: the Siege of Sevastopol (Crimean War).
// Uses add() from battles2.js. Siege figures are historians' estimates and are flagged as such.
// Also: Buxar, Wagram, First Bull Run and Shiloh. They have hidden stubs in battles_wd.js (no text), so they get new ids here.
// The 1941 "Cerco de Sebastopol" is a different battle.

// ---------- The Crimean War ----------
add("sebastopol1854", "Siege of Sevastopol (1854–1855)", 1855, "17 October 1854 to 9 September 1855", "moderna", "Sevastopol, Crimea", 44.6, 33.55,
  ["Allies: France, Britain, the Ottoman Empire and Piedmont-Sardinia", "Canrobert, then Pélissier (France); Lord Raglan, then Simpson (Britain)", "≈ 67,000 (October 1854) to ≈ 175,000 (July 1855)", 120000],
  ["Russian Empire", "Kornilov and Nakhimov; engineer Eduard Totleben", "garrison of ≈ 37,000 (October 1854) to ≈ 43,000 (May 1855)", 40000], "a",
  "Sevastopol was the base of the Russian Black Sea fleet. The British and French landed in the Crimea to destroy it and ended up stalled in front of its defenses for eleven months.",
  ["The Allies landed in September 1854, won at the Alma and besieged the city from the south. The Russians sank ships at the harbor mouth, took their guns and sailors ashore and, under the engineer Totleben, built earth forts that withstood six great bombardments.",
   "Winter, disease and shortages of supplies killed more Allied soldiers than enemy fire did. The attacks of June 1855 on the Malakoff and the Great Redan failed.",
   "On 8 September 1855, after three days of bombardment, the French took the Malakoff redoubt. The British attack on the Great Redan was repulsed, but the following night the Russians abandoned the southern part of the city."],
  "Allied victory. The Russians crossed the harbor on a bridge of boats and left the city in flames.",
  "The fall of Sevastopol led to peace: under the Treaty of Paris (1856), the Black Sea was neutralized, and Russia was left with no fleet and no military bases there.");

// ---------- India ----------
add("buxar", "Buxar", 1764, "22 October 1764 (some sources say 22 to 23)", "moderna", "Buxar, Bihar, India", 25.567, 83.983,
  ["English East India Company", "Major Hector Munro", "≈ 7,000 (about 1,800 British and 5,300 sepoys)", 7072], ["Coalition of Awadh, the Mughal Empire and Mir Qasim", "Shuja-ud-Daula, Shah Alam II and Mir Qasim", "over 40,000 (estimate)", 40000], "a",
  "Mir Qasim, the nawab of Bengal whom the Company had put in office, broke with it over trade, lost the war of 1763 and fled. With the nawab of Awadh and the Mughal emperor, he came back to win Bengal back.",
  ["The allies camped at Buxar, on the banks of the Ganges. On the morning of 22 October the Mughals attacked, but the Company's lines formed in about twenty minutes.",
   "By about midday the battle was decided. As he withdrew, Shuja-ud-Daula blew up his magazines and ammunition carts.",
   "Munro pursued him to the Karmanasa River, where Shuja destroyed the bridge of boats after crossing, leaving behind the emperor and part of his troops."],
  "Company victory, with 133 guns captured. Losses vary: about 847 British casualties and 2,000 allied dead, by one estimate; 6,000 allied casualties, by another.",
  "In 1765, under the Treaty of Allahabad, the emperor gave the Company the right to collect the taxes (diwani) of Bengal, Bihar and Orissa. A trading company became a territorial power.");

// ---------- Napoleonic Wars ----------
add("wagram", "Wagram", 1809, "5 and 6 July 1809", "moderna", "Deutsch-Wagram, near Vienna, Austria", 48.296, 16.558,
  ["French Empire and allies", "Napoleon I", "≈ 140,000 to 170,000 (with allies)", 150000], ["Austrian Empire", "Archduke Charles", "≈ 136,000", 136000], "a",
  "Six weeks after being stopped at Aspern-Essling, Napoleon crossed the Danube again with a bigger army to end the war against Austria.",
  ["On the night of 4 July, in a thunderstorm, the French crossed the Danube from the island of Lobau. The attacks of the late afternoon of 5 July failed.",
   "On 6 July the Austrians attacked at dawn and nearly broke the French left. Napoleon closed the gap with a grand battery and, at the other end, Davout attacked the Austrian left.",
   "Around 4 p.m., Archduke Charles withdrew in good order to the north."],
  "A French victory, and a very costly one: by the figures cited on Wikipedia, about 35,000 French and 39,000 Austrian casualties.",
  "The Armistice of Znaim ended the war. Under the Treaty of Schönbrunn, Austria lost about one sixth of its subjects.");

// ---------- American Civil War ----------
add("bullrun1", "First Bull Run (Manassas)", 1861, "21 July 1861", "moderna", "Manassas, Virginia, United States", 38.815, -77.522,
  ["Union (North)", "General Irvin McDowell", "≈ 35,000 (about 18,000 engaged)", 35000], ["Confederacy (South)", "Generals P. G. T. Beauregard and Joseph E. Johnston", "≈ 32,000 (about 18,000 engaged)", 32000], "b",
  "Three months after the civil war began, the North sent an army of inexperienced volunteers against the Confederate capital, Richmond, hoping to finish it all in one battle.",
  ["McDowell made a wide march to get around the Confederate left, but he ran late. Johnston took his troops from the Shenandoah Valley to Manassas by train.",
   "On Henry House Hill, General Thomas Jackson's brigade held when all seemed lost. That is where he earned the nickname 'Stonewall'.",
   "Late in the afternoon the Confederate infantry counterattacked and the Union army dissolved into flight, mixed in with civilians who had come to watch."],
  "Confederate victory. Casualties vary by source: about 2,700 for the Union and 1,980 for the Confederacy.",
  "The North understood that the war would be long: Lincoln called for 500,000 men for three years and replaced McDowell with McClellan. The South became overconfident.");

add("shiloh", "Shiloh", 1862, "6 and 7 April 1862", "moderna", "Pittsburg Landing, Tennessee, United States", 35.151, -88.322,
  ["Union (North)", "General Ulysses S. Grant and General Don Carlos Buell", "≈ 66,800 (two armies; Buell's arrived only on the night of the first day)", 66800], ["Confederacy (South)", "General Albert Sidney Johnston, then P. G. T. Beauregard", "≈ 44,700", 44700], "a",
  "After losing Forts Henry and Donelson, the Confederates gathered at Corinth, Mississippi. Instead of waiting, they attacked Grant's camp on the banks of the Tennessee River before Buell could arrive.",
  ["The surprise attack at dawn on 6 April overran the camps of Sherman and Prentiss. A group of Union soldiers held out for hours in a sunken lane that became known as the Hornet's Nest.",
   "Johnston was killed around 2:30 p.m. Prentiss surrendered at 5:30 p.m. with about 2,200 men, and Grant formed a last line by the landing, backed by guns and gunboats.",
   "At night, Buell's troops arrived. On 7 April the Union counterattacked and Beauregard fell back to Corinth."],
  "Union victory, with 13,047 casualties against 10,699 for the Confederates (official figures cited on Wikipedia).",
  "It was the bloodiest battle of the war up to that point. It ended the idea that the conflict would be short and began the rise of Grant, whom the North criticized but Lincoln kept.");
