// Early Islamic pack, part 1: Badr, Uhud, the Trench (Medina, 624-627), al-Qadisiyyah (636) and Nahavand (642).
// Uses add() from battles2.js. Almost everything we know comes from Arabic works written generations after the
// events (the sira of Ibn Ishaq, al-Waqidi, al-Tabari), so numbers are flagged as traditional and uncertain dates are flagged.
// The Wikidata seeds for Badr, Uhud and the Trench (battles_wd.js) only show up with ?todas; these cards are the written ones.

// ---------- Muhammad in Medina ----------
add("badr", "Badr", 624, "13 March 624 (17 Ramadan, year 2 of the Hijra; traditional date)", "medieval", "Badr, southwest of Medina, Saudi Arabia", 23.733, 38.767,
  ["Community of Medina", "Muhammad", "≈ 313 men (according to tradition)", 313], ["Quraysh of Mecca", "Amr ibn Hisham (Abu Jahl)", "≈ 950 to 1,300 (according to tradition)", 1000], "a",
  "Muhammad left Medina to intercept a large Meccan caravan returning from Syria. The caravan changed route, and what showed up instead was a Qurayshi army.",
  ["The caravan's leader, Abu Sufyan, changed route and asked Mecca for help. An army marched out to defend it and kept going to Badr, even after the caravan was safe.",
   "The Muslims occupied the well closest to the enemy. By tradition, the fighting began with three duels between champions, and the men of Medina won most of them.",
   "Arrows were exchanged and the Quraysh charged. The Muslim counterattack broke their line, and the battle lasted only a few hours."],
  "About 70 Quraysh were killed and another 70 captured. On the Muslim side, 14 died.",
  "It was the first great victory of the community of Medina and it opened the war with Mecca. Many Qurayshi leaders died, and Abu Sufyan came to lead the city.");

add("uhud", "Uhud", 625, "23 March 625 (7 Shawwal, year 3 of the Hijra; traditional date)", "medieval", "Mount Uhud, north of Medina, Saudi Arabia", 24.503, 39.612,
  ["Quraysh of Mecca", "Abu Sufyan, with Khalid ibn al-Walid in the cavalry", "≈ 3,000 (according to tradition)", 3000], ["Community of Medina", "Muhammad", "≈ 700 (≈ 1,000 before a third left, according to tradition)", 700], "a",
  "A year after Badr, Mecca gathered about 3,000 men to take revenge and marched on Medina.",
  ["Muhammad placed the Muslims on the slope of Mount Uhud and put 50 archers on a rocky hill, with orders not to leave it under any circumstances.",
   "The Muslims advanced and seemed to be winning. Many archers came down to collect the spoils.",
   "Khalid ibn al-Walid's cavalry rode around, took the hill and struck the rear. A rumor spread that Muhammad was dead, but he was only wounded."],
  "Between 62 and 75 Muslims and between 22 and 35 Quraysh died (traditional numbers). The Quraysh did not try to enter Medina and went home.",
  "Historians disagree: some call it a Qurayshi victory, others a draw with no result. Mecca did not destroy Muhammad, and the lesson of the archers is recorded in the Quran.");

add("khandaq", "Battle of the Trench (Siege of Medina)", 627, "March to April 627 (traditional date; some authors say January)", "medieval", "Medina, Saudi Arabia", 24.467, 39.6,
  ["Community of Medina", "Muhammad; trench proposed by Salman the Persian", "≈ 3,000 (according to tradition)", 3000], ["Confederates (Mecca, Ghatafan and allies)", "Abu Sufyan", "≈ 7,500 to 10,000 (according to tradition)", 8750], "a",
  "Mecca gathered allied tribes and marched on Medina with an army far larger than the defenders'.",
  ["On the suggestion of Salman the Persian, the Muslims dug a trench in six days. The attackers' cavalry could not cross it.",
   "The siege lasted about three weeks, with nothing but exchanges of arrows and insults. Food ran short on both sides, and the attackers began to distrust one another.",
   "A storm put out the attackers' fires and knocked down their tents. The next night, they left."],
  "The confederates withdrew without taking the city. Losses were tiny: 5 to 6 Muslims and 3 attackers.",
  "Mecca lost prestige and its trade with Syria. Afterwards, the Muslims besieged the Jewish tribe of Banu Qurayza, which had been accused of siding with the attackers.");

// ---------- The conquest of Persia ----------
add("qadisiyya", "Al-Qadisiyyah", 636, "16 to 19 November 636 (traditional date; sources give 635 to 637)", "medieval", "Near Kufa, Iraq", 31.9, 44.4,
  ["Rashidun Caliphate", "Sa'd ibn Abi Waqqas", "≈ 30,000 to 36,000 (according to the chronicles)", 33000], ["Sasanian Empire", "Rostam Farrokhzad", "≈ 30,000 to 60,000 (the chronicles say more)", 45000], "a",
  "After Muhammad's death, the Arabs had taken Syria from the Byzantines. Caliph Umar sent Sa'd's army against Iraq, the richest region of the Persian Empire.",
  ["Rostam, the Persian commander, crossed a canal and attacked. The Persians had about 33 elephants, which sent the Arab horses into a panic on the first day.",
   "On the second day reinforcements arrived from Syria, coming from the battle of Yarmouk, and on the third the Arabs blinded the elephants. The fighting went on all night.",
   "On the fourth day, during a sandstorm, Rostam was killed. The Persian line fell apart and fled toward the bridge."],
  "The Persian army was destroyed. Ctesiphon, the capital, fell in March 637.",
  "Iraq passed to the Arabs and Persia lay open to conquest. The date is uncertain: the chronicles give different years, and the day-by-day account of the battle comes from much later reports.");

add("nahavand", "Nahavand", 642, "642 (date uncertain; some authors say December 641)", "medieval", "Nahavand, near Hamadan, Iran", 34.19, 48.37,
  ["Rashidun Caliphate", "Nu'man ibn Muqarrin", "≈ 30,000 (modern estimate)", 30000], ["Sasanian Empire", "Firuzan (Piruz Khosrow)", "≈ 50,000 to 150,000 (sources disagree)", 100000], "a",
  "After Qadisiyyah and the fall of Ctesiphon, Shah Yazdegerd III withdrew to the Iranian plateau and raised a new army at Nahavand.",
  ["The Persians took a strong position that the Arabs did not want to attack head-on.",
   "After days of skirmishing, the Arabs deliberately pulled back to draw the Persians into open ground.",
   "The Persians came out after them and strung themselves out over rough terrain. The Arabs turned about and surrounded them."],
  "The Sasanian army was almost entirely destroyed. Nu'man died in the fighting, and so (according to some accounts) did the Persian commander.",
  "The Muslims called it the 'victory of victories'. It was the Sasanians' last great battle: Yazdegerd fled east and died in 651, never recovering the empire.");
