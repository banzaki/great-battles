// Great-battles pack (part 2): Poitiers, Varna, White Mountain, Lützen, Naseby.
// Uses add() from battles2.js. Chronicle and disputed numbers are flagged as uncertain.
// Checked against the English, Portuguese, Polish, Czech and Swedish Wikipedia articles and the works they cite.
// Lützen is dated on the Gregorian calendar (6 November on the Julian calendar used in Sweden then).

// ---------- The Hundred Years' War ----------
add("poitiers", "Poitiers", 1356, "19 September 1356", "medieval", "Forest of Nouaillé, near Poitiers, France", 46.522, 0.403,
  ["Anglo-Gascon army", "Edward, the Black Prince", "≈ 6,000 (about 3,000 men-at-arms, 2,000 archers and 1,000 Gascon foot soldiers)", 6000], ["Kingdom of France", "John II", "≈ 14,000 to 16,000 (modern historians' estimate)", 15000], "a",
  "The Black Prince was plundering southern France with a small army. King John II hurried after him and caught up with him near Poitiers.",
  ["The English dug in behind a hedge, with a marsh on one side. The French, almost all on foot, attacked in four waves.",
   "Two waves were beaten back, and half of the third left the field. In the fourth, King John advanced with the oriflamme, the signal that no prisoners would be taken.",
   "A small mounted force under the Captal de Buch rode around and appeared in the French rear. The king's line broke."],
  "King John II and his son Philip were captured. About 2,500 French men-at-arms died, against a few dozen English men-at-arms.",
  "France was left without a king and fell into crisis: the Jacquerie followed, and the 3 million écu ransom became part of the Treaty of Brétigny (1360).");

// ---------- The Crusade of Varna ----------
add("varna", "Varna", 1444, "10 November 1444", "medieval", "Near Varna, present-day Bulgaria", 43.22, 27.86,
  ["Crusaders (Hungary and Poland)", "King Ladislaus III and John Hunyadi", "≈ 16,000 to 20,000 (sources vary)", 18000], ["Ottoman Empire", "Sultan Murad II", "≈ 40,000 to 60,000 (sources vary)", 50000], "b",
  "The Hungarians and Poles had signed a ten-year truce with the Ottomans, but the papal legate convinced the king that it was not binding. They marched to the Black Sea.",
  ["The crusaders were trapped between the sea, a lake and the sultan's army. Hunyadi and the king rejected the wagon defence proposed by Cardinal Cesarini.",
   "The Christian right wing fell apart, and the cardinal died. On the left, the Ottoman attack was held off for a time.",
   "Without waiting for Hunyadi, King Ladislaus galloped with about 500 Polish knights to near the sultan's tent. His horse fell, and he vanished."],
  "The crusader army was almost wiped out and the king died. Losses are much disputed; the Ottomans also suffered heavily.",
  "Without the king, Hungary and Poland were left leaderless. The defeat discouraged Europe, and nobody sent serious help to Constantinople, which fell in 1453.");

// ---------- The Thirty Years' War ----------
add("montanhabranca", "White Mountain", 1620, "8 November 1620", "moderna", "Near Prague, present-day Czechia", 50.078, 14.319,
  ["Habsburgs and the Catholic League", "Count of Bucquoy and Count of Tilly", "≈ 23,000 to 33,000 (sources vary)", 28000], ["Bohemian Estates and the Palatinate", "Christian of Anhalt", "≈ 15,000 to 21,000", 18000], "a",
  "The Protestant nobles of Bohemia had thrown out the Habsburgs and crowned Frederick V of the Palatinate. Emperor Ferdinand II sent an army to take the kingdom back.",
  ["The Bohemians waited on a low hill west of Prague, with their right wing resting on the wall of a hunting park.",
   "The first imperial attack was repulsed, but the Hungarian cavalry, held in reserve, withdrew, and the Bohemian left wing collapsed.",
   "The imperials advanced on the rest of the line and took the artillery. According to the sources, the battle lasted little more than an hour."],
  "Bohemia was defeated and Frederick fled Prague. The dead are much disputed: from about 1,600 to over 4,000 Bohemians, and from a few hundred to about 2,000 imperials.",
  "The revolt was over. In 1621, 27 leaders were executed in Prague, and the Protestant nobility went into exile. Bohemia was re-Catholicized, and the Thirty Years' War spread.");

add("lutzen", "Lützen", 1632, "16 November 1632 (6 November on the Julian calendar)", "moderna", "Lützen, Saxony, present-day Germany", 51.242, 12.14,
  ["Sweden and Protestant allies", "King Gustavus Adolphus", "≈ 19,000 men and 60 guns", 19000], ["The Empire and the Catholic League", "Albrecht von Wallenstein", "≈ 13,000 to 15,000 at the start, plus about 5,800 under Pappenheim arriving later (sources vary)", 18000], "a",
  "Gustavus Adolphus was advancing through Saxony, and Wallenstein came to stop him. Believing the campaigning year was over, Wallenstein had sent Pappenheim off to Halle with part of the troops.",
  ["A thick fog, together with smoke from the burning town of Lützen, delayed the Swedish attack until about 11 a.m.",
   "Gustavus Adolphus died in the smoke, after Pappenheim's cavalry arrived and the fight turned into a confusion. Pappenheim was also mortally wounded.",
   "Bernard of Saxe-Weimar took over and captured the windmill battery. At nightfall, Wallenstein withdrew and left his guns."],
  "Most historians give the victory to the Swedes, who kept the field and the guns, but at an enormous cost. Losses are disputed: close to 5,000 on each side by many counts.",
  "The king's death was a blow to the Protestants. Even so, Chancellor Oxenstierna kept Sweden in the war. Wallenstein was assassinated in 1634.");

// ---------- The English Civil War ----------
add("naseby", "Naseby", 1645, "14 June 1645", "moderna", "Naseby, Northamptonshire, England", 52.4, -0.98,
  ["Parliament (New Model Army)", "Sir Thomas Fairfax and Oliver Cromwell", "≈ 13,500 to 14,000 (including 700 to 1,000 dragoons)", 13700], ["Royalists", "King Charles I and Prince Rupert", "≈ 7,400 to 8,600", 8000], "a",
  "The newly created New Model Army was chasing the king's army, which had just taken Leicester. The king decided to fight.",
  ["The Royalist infantry attacked first and pushed back Parliament's infantry. Rupert swept away Ireton's cavalry and chased it all the way to the enemy baggage.",
   "At the other end, Cromwell beat Langdale's cavalry and turned on the Royalist centre. Okey's dragoons, hidden in the hedges, hit the flank.",
   "The king's infantry, without Rupert's cavalry, was surrounded. When he came back, it was too late."],
  "The king's army was destroyed: more than 4,500 prisoners, almost all the infantry and all the artillery. Parliament lost a few hundred men.",
  "The king never again had a field army of the same quality. His papers, taken in the baggage, were published and proved that he was negotiating with Irish Catholics and foreigners. The war ended within a year.");
