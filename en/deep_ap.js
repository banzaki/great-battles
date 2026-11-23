// In-depth battles, batch ap: vouille, roncesvales, beziers, muret, toulouse (regional pack, part A: medieval southern France).
// Checked against the English and French Wikipedia articles on Vouillé, Roncevaux Pass, the Massacre at Béziers, Muret,
// the siege of Toulouse and the Albigensian Crusade, the Spanish Wikipedia article on Muret, Britannica, historyofwar.org
// (Vouillé), and the works those pages cite (Gregory of Tours, Einhard, Peter of Vaux-de-Cernay, William of Tudela,
// Caesarius of Heisterbach, Marvin, Sumption, Tyerman). Where sources disagree the text says so.
// Diagrams: Muret and Toulouse only. Vouillé, Roncesvalles and Béziers are skipped: the sources do not describe the
// dispositions or moves well enough to draw them without inventing.

Object.assign(GLOSSARY, {
  "arianos": "Christians who followed the teaching of Arius and believed that Jesus was not equal to God the Father. The Church of Rome considered them heretics. Many Germanic kings, such as the Visigoths, were Arians, while their Roman subjects were Catholics.",
  "ostrogodos": "The eastern branch of the Goths. In the time of Theodoric the Great, they ruled Italy from Ravenna.",
  "burgúndios": "A Germanic people who held the Rhône valley, in eastern France. They had their own kings and alternated between fighting the Franks and allying with them.",
  "septimânia": "A coastal strip of southern France between the Pyrenees and the Rhône, with Narbonne as its main city. It stayed with the Visigoths after Vouillé.",
  "aquitânia": "A region of southwestern France between the Loire, the Garonne and the Pyrenees. In 507 it was part of the Visigothic kingdom.",
  "galo-romanos": "The inhabitants of Gaul who descended from Gauls and spoke Latin. Many were Catholics, and their families had been senators and officials of the Roman Empire.",
  "cônsul honorário": "A consul's title given as an honor, without the power of the old office. A barbarian king who received it from the Eastern emperor gained prestige among his Roman subjects.",
  "bascos": "A people of the western Pyrenees with a language of their own. In the Frankish texts of the time they appear as 'Vascones' (Wascones).",
  "carolíngios": "The dynasty of Frankish kings whose greatest name was Charlemagne. It ruled present-day France and Germany, and part of Italy.",
  "marca da bretanha": "A border region of the Frankish kingdom, in Brittany, that defended the realm against the Bretons. Whoever governed it held military powers.",
  "conde palatino": "An officer of the Frankish kings' palace who helped the king judge and govern. In Charlemagne's time, it was one of the highest posts at court.",
  "senescal": "Head of the king's household, who looked after the table and the services of the palace. At the Frankish court, the post also carried military and political power.",
  "canção de gesta": "A long poem, sung or recited, that tells the deeds of heroes. The Song of Roland is the oldest one known in French.",
  "trem de bagagem": "The line of wagons and animals that carried food, tools, treasure and the equipment of an army on the march. It was slow and rich, and so it drew attacks.",
  "cátaros": "Followers of a religious movement in southern France that taught that the material world was the work of evil. The Church called them heretics. Their leaders, the 'perfects', lived with great austerity.",
  "legado papal": "The pope's personal representative, sent to decide matters in his name. He spoke with the pope's authority.",
  "visconde": "A noble title below count. In southern France, the viscount of Béziers and Carcassonne was one of the region's great lords.",
  "ribaldos": "Low-born foot soldiers who followed a medieval army, many of them mercenaries, and lived off plunder. The chroniclers describe them as the most violent.",
  "valdenses": "Followers of Peter Waldo, a preacher from Lyon in the 12th century who preached poverty. They were another group that the Church considered heretical.",
  "cruzada albigense": "The war the pope launched in 1209 against the Cathars and against the lords of southern France who tolerated them. It lasted, with pauses, until 1229, and gave the king of France a part of the south.",
  "carga de cavalaria": "An attack in which knights advance together, lances lowered, to break the enemy line by the shock of impact.",
  "cavaleiro": "A noble warrior who fought on horseback, in armor and with a lance. He usually had squires and foot soldiers under his orders.",
  "faidits": "The 'faidits' were the lords of southern France who had lost their lands to the crusaders. They fought as exiles, trying to win them back.",
  "cônsules de toulouse": "The magistrates elected by the people of Toulouse to govern the city. They defended the city's liberties against the counts and against the crusaders.",
  "gato de cerco": "A wooden shelter covered with leather, with a sloping roof, in which attackers approached a wall without being hit by arrows and stones.",
  "château narbonnais": "The castle of the counts of Toulouse, inside the city. Simon de Montfort used it as a base and a prison.",
  "trovador": "A medieval poet and singer from southern France who composed in Occitan. Many were nobles and wrote about love, politics and war.",
  "tenso": "A poetic genre of the troubadours in which two sides argue in verse, like a debate.",
  "occitânia": "Southern France, where people spoke the language of oc (Occitan) rather than the French of the north. It had customs, laws and a culture of its own."
});

Object.assign(DEEP, {
  vouille: {
    war: "Franco-Gothic War (507–511)",
    hook: "The day Clovis brought down the Visigothic kingdom of Gaul and changed the map of France.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Around 500, Gaul was no longer Roman, but it was not yet a country. The north belonged to the [[Franks|francos]], whom Clovis had united under his command after defeating the last Roman governor at Soissons in 486. The south and the west belonged to the kingdom of the [[Visigoths|visigodos]], which ran from the Loire River to Spain. That kingdom included [[Aquitaine|aquitânia]], [[Septimania|septimânia]], most of Spain and parts of Provence. The king was Alaric II, who ruled from Toulouse.",
        "There was a difference of religion. Alaric and his Goths were [[Arians|arianos]]. Clovis and many of the [[Gallo-Romans|galo-romanos]] were Catholics. Gregory of Tours, a 6th-century bishop and chronicler, says that Clovis told his men he could not bear to see the Arians holding a part of Gaul. Modern historians think religion was only one of the motives, and that the exact cause of the war is not clear.",
        { h: "The road to Vouillé" },
        { timeline: [
          ["486", "Clovis defeats the last Roman governor of northern Gaul, at Soissons."],
          ["Before 507", "Clovis defeats the Alemanni and the [[Burgundians|burgúndios]]. Alaric begins to fear for his lands in the north."],
          ["Before 507", "Theodoric the Great, king of the [[Ostrogoths|ostrogodos]], tries to prevent the war with letters and envoys, without success."],
          ["507", "Clovis marches south. Alaric comes to meet him, near Poitiers."],
          ["507–508", "After the victory, Clovis spends the winter in Bordeaux and takes Toulouse and Angoulême."],
          ["508", "Theodoric sends an army to Gaul and saves what is left of the Visigothic kingdom."]
        ]},
        "Theodoric was Alaric's father-in-law and had promised help. But the Ostrogothic army was slow and only crossed the Alps the following year, too late."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Clovis I, about 40 years old" },
        "King of the Franks since the age of 15, he was a warrior and a calculating politician. His conversion to Catholic Christianity, which Gregory of Tours describes as a promise made in the middle of a battle against the Alemanni, brought him closer to the bishops and to the Roman subjects of the south. In the war of 507, the prize was Alaric's rich south. His son Theuderic fought at his side.",
        { h: "Alaric II" },
        "King of the Visigoths since 484. He ruled a kingdom richer and older than Clovis's, with an administration in the Roman tradition. In 506 he had a code of Roman law compiled for his subjects, the Breviary of Alaric. He tried to avoid the war and, when he could not, went out to meet Clovis.",
        { h: "The other names" },
        "An important ally of Clovis was Chloderic, son of Sigibert the Lame, king of the Franks of Cologne. The Burgundians, according to Isidore of Seville, also helped Clovis, but Gregory of Tours does not mention them, perhaps out of dislike for the Burgundians, who were Arians. On the Visigothic side, the nobleman Apollinaris led a force of men from the Auvergne, a region that was part of Alaric's kingdom."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No source gives reliable numbers for the two armies. The ancient sources give no figures, and modern historians do not propose any with confidence. What is known is that Alaric's army was mixed, with Gothic warriors and soldiers of Roman origin, and that, by today's reading, it was the larger and the better equipped.",
        { h: "The ground" },
        "The battle was fought at what Gregory calls the Campus Vogladensis, the field of Vouillé, ten miles from Poitiers (about 15 kilometers). The identification with the village of Vouillé is the most accepted, but other places have been proposed. The date is also debated: spring or summer of 507.",
        { h: "A swollen river and a doe" },
        "Gregory says that the Vienne River was swollen with rain and that Clovis could not find a place to cross. He prayed, and a doe showed him the [[ford|vau]]. Gregory also says that Clovis sent messengers to the church of Saint Martin at Tours, and that when they went in, the choir was singing a verse about God giving strength for war. And that, at night, a light came out of the church of Saint Hilary in Poitiers and moved toward the army. These are signs that he reports as miracles, and nobody can confirm them.",
        { note: "Gregory's signs (the doe, the chant, the light) are stories told to show that God was on Clovis's side. They are not evidence. What the account does give that is concrete is that Clovis's army had to cross the Vienne, and that the river made the march harder." },
        { h: "The clash" },
        "Gregory says little about the fighting itself. He writes that one side fought from a distance and the other up close, but he does not say which was which. Modern historians suggest that Clovis put his missile troops at the rear and sent the rest of the force into hand-to-hand fighting. The men of the Auvergne fought hard, but all their leaders except Apollinaris were killed, and the Visigothic army began to waver.",
        "That was when Alaric died. Gregory says it was Clovis himself who killed him, and that the Frankish king almost died right afterward: two Gothic soldiers armed with spears attacked him, and what saved him, according to Gregory, was his [[mail shirt|cota de malha]] and the speed of his horse. Historians say that Alaric's death at Clovis's hands is possible but not certain, and that it probably happened in the pursuit, after the Goths fled."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Frankish victory was total. Clovis spent the winter in Bordeaux, took Toulouse, where Alaric's treasure was, and then Angoulême. The Visigoths who were left withdrew to Narbonne, in Septimania. A dispute followed between two heirs: Gesalec, Alaric's illegitimate son, backed by the army, and Amalaric, a minor son, backed by Theodoric.",
        "In 508, Theodoric's Ostrogothic army crossed the Alps, lifted the siege of Arles, which the Burgundians were holding, and drove the Burgundians out of the Visigothic lands. Theodoric kept part of Provence and secured the rest for Amalaric, and forced Gesalec into exile.",
        "Clovis went back to Tours, where he received from the Eastern emperor, Anastasius, the title of [[honorary consul|cônsul honorário]] (and, according to some historians, that of patrician as well). It was an imperial recognition for a king who ruled Roman territory.",
        { h: "Why it matters" },
        "Vouillé took from the Visigoths almost all their lands north of the Pyrenees and made the Franks the greatest power in the West. The Frankish kings came to claim Aquitaine and Toulouse, and France took the shape it keeps today, between the Rhine, the Pyrenees and the sea. After this defeat, the Visigoths gradually came to have the center of their kingdom in Spain.",
        { h: "Curiosities and controversies" },
        { note: "The scene of Clovis killing Alaric appears in a 15th-century miniature, with armor and weapons that only existed a thousand years later, which shows how the memory of the battle was rewritten over time." },
        { note: "Our main source, Gregory of Tours, was a Catholic bishop and wrote about 80 years after the battle. He tells the war from the winners' point of view, and Alaric's side is much less well known." }
      ]}
    ]
  },

  roncesvales: {
    war: "Charlemagne's campaign in Spain (778)",
    hook: "An ambush in the mountains destroyed Charlemagne's rearguard and gave birth to one of the most famous legends of the Middle Ages.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 778, Charlemagne had ruled the [[Franks|francos]] for ten years. His kingdom already stretched from Italy to the Elbe, and he kept expanding the frontiers. On the other side of the Pyrenees lay the [[emirate|emirado]] of Córdoba, ruled by Abd al-Rahman I, an Umayyad prince who had fled Damascus and built his power in Spain.",
        "The [[Carolingians|carolíngios]], Charlemagne's family, had already had trouble with the [[Basques|bascos]], who lived on both sides of the Pyrenees and accepted submission only halfway. In 766 and 769, part of the Basque territories had submitted to Charlemagne's father, Pepin, but the lands south of the Garonne remained largely free.",
        { h: "The road to the pass" },
        { timeline: [
          ["777", "At Paderborn, in Germany, Charlemagne receives Sulayman ibn al-Arabi, governor of Barcelona and Girona, who had rebelled against Córdoba and asks for help."],
          ["778", "Charlemagne enters Spain with two armies: one through the region of Barcelona and Girona, the other, led by him, through Pamplona."],
          ["778", "At Zaragoza, the governor does not open the gates. The siege lasts more than a month and ends with a deal, and the Franks go home."],
          ["778", "On the way back, Charlemagne orders the walls of Pamplona torn down."],
          ["15 Aug 778", "The army's rearguard is attacked and destroyed in a pass of the Pyrenees."]
        ]},
        "The campaign went wrong. Sulayman had promised a Spain open to the Franks, but the governor of Zaragoza did not open the gates. According to an Arab source, which the Frankish ones do not confirm, Sulayman's sons freed him from Frankish captivity. Historians use this information with care: the source dates from the 13th century, and it gives a wrong date."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Charlemagne" },
        "King of the Franks and future emperor. He went to Spain on a request for help and came back with little. The defeat in the Pyrenees, according to the Frankish annals, weighed on him more than his victories in Spain. After it, he never again personally led an army in Spain.",
        { h: "Roland and the others" },
        "Einhard, Charlemagne's biographer, wrote about half a century later that those who died in the ambush were Eggihard, the king's [[seneschal|senescal]], Anselm, the [[count palatine|conde palatino]], and Roland, commander of the [[Breton March|marca da bretanha]]. In practice, that is all the sources of the time say about Roland. Some manuscripts of Einhard do not even carry his name, which caused debate among historians in the 19th century.",
        { h: "The Basques" },
        "The Frankish source speaks of 'Vascones', and nobody knows the name of the leader. Some historians point to Duke Lupo II of Gascony, others speak of local bands out for plunder. The most common explanation for the attack is anger at the destruction of Pamplona, and the wish to seize the Franks' rich baggage."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "A modern estimate puts about 3,000 Frankish soldiers crossing the pass. It is an estimate, and the sources of the time give no numbers. The size of the Basque force is unknown. According to the annals and Einhard, the Basques were light warriors with light arms, and the Franks were better armed, in heavy armor.",
        { h: "The ground" },
        "The Pyrenees, on a narrow crossing with dense forest. The army marched in a long line, with the [[rearguard|retaguarda]] and the [[baggage train|trem de bagagem]] last. The exact site of the battle is debated: the most accepted view is the Roncesvalles (Ibañeta) pass, but some propose passes farther east or west. No excavation has found any trace of the fight.",
        { h: "The ambush" },
        "According to Einhard and the revised annals, the Basques waited on the mountain heights, in the woods. When the column passed, they fell on the rearguard and the baggage, which were cut off from the rest of the army, and pushed everyone down into the valley. The Franks fought, but the terrain and the style of fighting did not let them use their advantage in arms. Einhard writes that all of them died. The Basques plundered the baggage and, protected by the dark, vanished without a trace, and the next morning there was no way to pursue them.",
        { note: "The oldest annals speak of the campaign in Spain without mentioning the ambush. The first to describe it is the revised version of the Royal Annals, written after 829. For this reason some historians think the episode was deliberately covered up, and others that, at the time, it seemed unimportant." },
        { note: "The date of 15 August comes from a verse epitaph, in a 10th-century manuscript, for a man named Aggiard, who died that day and whom Gaston Paris linked to Eggihard. Not all historians accept the link." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Frankish rearguard was completely destroyed. Einhard and many historians call the battle Charlemagne's only great defeat. The king could not take revenge at once: the Basques had vanished.",
        "The consequences came slowly. Charlemagne later created the Spanish March, a border strip south of the Pyrenees, and the Franks took Barcelona about ten years later. The Basques resisted for years: in 790, William of Gellone put down the revolt and exiled the chief Adalric. In 824 there was a second fight at the same pass, in which a Carolingian army was defeated. That same year, the Basques consolidated the realm that would become the kingdom of Pamplona.",
        { h: "The legend" },
        "The [[Song of Roland|canção de gesta]], a poem of about 4,000 lines copied in the 11th century (the oldest copy is the Oxford manuscript), rewrote everything. The enemies stop being Basques and become a great Muslim army of King Marsile of Zaragoza. The ambush becomes the work of a traitor, Ganelon. Roland dies after sounding the horn Oliphant and trying to break his sword Durendal. Charlemagne comes back, wins and takes revenge.",
        { h: "Why it matters" },
        "The Song of Roland is the first great poem in French and became the model of the chivalric hero. According to tradition, knights sang it before the Battle of Hastings, in 1066. It even gave English the expression 'to give a Roland for an Oliver', which means to pay back in kind.",
        { h: "Curiosities and controversies" },
        { note: "In real history, the Basques were largely pagan at that time and Charlemagne had Muslim allies. The legend of Christians against Muslims is a later invention, from a time when the Crusades and the Reconquista set the tone." },
        { note: "The name Roncesvalles only appears in the sources from the 12th century. The modern road over the pass was only opened in 1881." }
      ]}
    ]
  },

  beziers: {
    war: "Albigensian Crusade (1209–1229)",
    hook: "In a few hours, the first great action of the Albigensian Crusade razed an entire city.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In the 12th century, southern France, the [[Occitania|occitânia]], was a land apart. It spoke Occitan, had rich cities and lords almost independent of the king of France, and the movement of the [[Cathars|cátaros]] had won many followers. To the Church, they were heretics. Pope Innocent III tried to convert them through missions and preachers, without much result.",
        "In January 1208, the [[papal legate|legado papal]] Peter of Castelnau was murdered. The pope suspected Count Raymond VI of Toulouse, although some versions say it was a knight acting on his own. Innocent III declared a crusade and offered the heretics' lands to anyone who would conquer them. This was the [[Albigensian Crusade|cruzada albigense]].",
        { h: "The road to Béziers" },
        { timeline: [
          ["Jan 1208", "The legate Peter of Castelnau is murdered."],
          ["Early Jul 1209", "The crusader army gathers at Lyon."],
          ["21 Jul 1209", "It reaches Béziers and camps beside the Orb River."],
          ["22 Jul 1209", "The city is taken in a few hours and the massacre begins."],
          ["15 Aug 1209", "Carcassonne surrenders."]
        ]},
        "Béziers and Carcassonne belonged to the [[viscount|visconde]] Raymond-Roger Trencavel, about 24 years old. He was not a Cathar, but he tolerated the Cathars on his lands. He tried to negotiate with the crusaders at Montpellier, failed, and went off to prepare his defense. He stopped at Béziers, promised reinforcements and left for Carcassonne."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Arnaud Amalric, abbot of Cîteaux" },
        "Religious head of the Cistercian order and the pope's legate, he commanded the crusader army. He was not a soldier, but he had the last word. He wrote the letter to the pope after the massacre, saying that almost 20,000 people had died and that it was divine vengeance.",
        { h: "Raymond-Roger Trencavel, about 24 years old" },
        "Viscount of Béziers and Carcassonne, a vassal of the count of Toulouse. Why he left Béziers, the sources disagree. Peter of Vaux-de-Cernay, a chronicler of the crusaders, says it was out of fear. William of Tudela, who was on the Occitan side, says his presence was needed at Carcassonne. The historian Laurence Marvin finds Tudela's version more likely, because Trencavel defended Carcassonne firmly.",
        { h: "The bishop and the townspeople" },
        "Renaud de Montpeyroux, bishop of Béziers, offered to spare the city if the heretics were handed over, and drew up a list of 222 people, mostly Cathars, with a few [[Waldensians|valdenses]]. The townspeople refused: they thought the people on the list had too much support in the city. They also rejected the proposal to let the Catholics leave, and most of the Catholics, including priests, stayed."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "There are no reliable numbers for the crusader army or for the population of Béziers. What the sources show is a walled city whose inhabitants were ready to resist, facing a large army that included many low-born soldiers who lived off plunder.",
        { h: "The sortie" },
        "On the morning of 22 July, according to William of Tudela, men from the city came out through the gate facing the Orb to mock the crusaders. Some accounts say they were armed men and others that they were unarmed civilians. A crusader who answered the insults was killed. The [[ribalds|ribaldos]], who accompanied the army, attacked, and the townspeople fell back in disorder.",
        { h: "The fall" },
        "The ribalds went in behind the fleeing men. According to one version, some passed through the open gate and fought the guards to control it. The crusader leaders, seeing what was happening, sent in the whole army. The garrison was crushed. According to Amalric's letter, the city fell in two or three hours, and soldiers without orders supposedly attacked on their own.",
        { h: "The massacre" },
        "The ribalds killed and looted through the streets and houses. The clergy rang the bells and came out in their vestments, in procession, but could not stop them. The townspeople ran to the churches: the cathedral, the Madeleine, Saint Jude. The doors were broken down, and everyone inside was killed, sparing neither priests, women nor children. The knights did not stop the killing, but took the city's goods. The ribalds, furious at losing the plunder, set the buildings on fire, and the crusaders left the ruined city. The cathedral of Saint Nazaire burned and collapsed.",
        { note: "The phrase 'Kill them all, God will know His own' comes from the monk Caesarius of Heisterbach, who wrote it between 1219 and 1223, years afterward, in Latin. Historians doubt that the abbot said it. Laurence Marvin calls it apocryphal: the attack was so fast that the legate may not even have known what was happening. But the phrase shows the crusaders' disposition well." },
        { note: "The numbers: Amalric wrote that almost 20,000 died. Peter of Vaux-de-Cernay speaks of 7,000 dead in the church of the Madeleine alone. The historian Christopher Tyerman thinks the real figure was much lower. Marvin points out that most of the population and buildings survived, and that the city remained large afterward." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Béziers was sacked and burned, and Carcassonne fell less than a month later. Trencavel was captured during a negotiation and died in prison still in 1209. His lands went to Simon de Montfort, who became the leader of the crusade.",
        "Many towns and castles in the region surrendered quickly, afraid the same would happen to them. But the crusaders also lost the support of many Catholics in the south, who came to see the army as an invader. According to Tyerman, from then on loyalty depended mostly on worldly interests.",
        { h: "Why it matters" },
        "The war went on for 20 years. With the intervention of the king of France, the crusade became a conquest, and the south was gradually absorbed into the kingdom. The Cathar heresy was slowly wiped out. In 1229, the Treaty of Paris gave the king a large part of the south.",
        { h: "Curiosities and controversies" },
        { note: "Today in Béziers, in front of the cathedral, there is a plaque that calls the episode a 'day of butchery'. The city still remembers." },
        { note: "Historians still debate whether the massacre was planned, as terror to make other cities surrender, or whether it was an accident that the leaders could not or did not want to stop." }
      ]}
    ]
  },

  muret: {
    war: "Albigensian Crusade (1209–1229)",
    hook: "A handful of knights destroyed a much larger coalition, and the king of Aragon died in the fight.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "By 1213, the [[Albigensian Crusade|cruzada albigense]] had been going on for four years. Simon de Montfort, the leader of the crusaders, had taken the lands of the viscount of Béziers and Carcassonne and, after that, most of the County of Toulouse. Count Raymond VI was driven out and asked his brother-in-law, Peter II, king of Aragon, for help.",
        "Peter had gained enormous prestige in 1212, in the Christian victory at Las Navas de Tolosa against the Muslims, and he felt threatened by Montfort's conquests. At the end of August 1213, Peter crossed the Pyrenees.",
        { h: "The road to Muret" },
        { timeline: [
          ["Aug 1213", "Peter II crosses the Pyrenees and joins his troops with those of Toulouse and Foix."],
          ["8–10 Sep 1213", "The allies besiege Muret, 25 km south of Toulouse. The town is taken, but not the castle."],
          ["11 Sep, at night", "Simon de Montfort, who was in the region, enters Muret with about a thousand horsemen."],
          ["12 Sep 1213", "Battle. Peter II dies."],
          ["1214", "Montfort hands James, Peter's heir, over to the pope's legate at Narbonne."]
        ]},
        "The sources differ on some days and hours. We use the 12th as the date, the most accepted."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Simon de Montfort" },
        "A nobleman from the Paris region and a veteran of the Fourth Crusade, he was an experienced commander. At Muret, he had few men. Instead of waiting to be besieged, he rode out of the town with his knights and went straight at the larger army.",
        { h: "Peter II of Aragon" },
        "A Catholic king, famous for Las Navas de Tolosa, he had crossed the Pyrenees to defend his allies in the south. According to accounts, he argued with Raymond VI, who wanted to wait and let the garrison of Muret weaken, and accused him of cowardice. There is no way to confirm this account.",
        { h: "The other names" },
        "Raymond VI of Toulouse, the exiled count, and Raymond-Roger, count of Foix, were with Peter. On the crusader side, the [[knights|cavaleiro]] William des Barres, William de Contres and Bouchard de Marly commanded Montfort's squadrons."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are much debated. The crusaders totaled about 1,000 to 1,700 men, according to modern estimates: some 900 mounted, of whom 260 were knights, plus 300 to 700 foot soldiers, who stayed to guard the town. The allied side would have had 4,000 to 8,000 men, according to Laurence Marvin and Clifford Rogers. Charles Oman went as high as 17,000 to 22,000. The chronicle of Peter of Vaux-de-Cernay says 100,000, which is impossible. Jonathan Sumption says nothing above 10,000 combatants is credible.",
        { note: "The chronicle numbers are exaggerated. Modern historians agree on two points: the allies were more numerous, although nobody knows by how much, and the fight was decided by the cavalry." },
        { h: "The ground" },
        "Muret stood on the bank of the Garonne, 25 km south of Toulouse, with the Louge and Saudrune rivers nearby. According to one description, the allied army rested on the Saudrune on its right and on a marsh on its left. The Toulouse militia was attacking the walls.",
        { h: "The morning" },
        "According to one tradition, Saint Dominic, the founder of the Dominicans, had the clergy pray the rosary in the church of Muret. The story is told by Bernard Gui, much later, and it is tradition, not proven fact.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, Montfort rode out through the Salles gate with his knights divided into three squadrons of about 300 men. The first was William des Barres's and William de Contres's. The second was Bouchard de Marly's. The third was Montfort's. The infantry stayed in the town.",
        "Second, the allies drew up in two or three lines and waited. In front was the count of Foix, with about 200 Aragonese and 400 men from Foix. Then came Peter, with about 700 Aragonese. Behind stood Raymond VI, with the troops of Toulouse and Comminges. According to some accounts, Raymond VI left the fight and went to Toulouse without fighting.",
        "Third, the first squadron crossed a stream and hit the count of Foix's line head-on, and it gave way. The crusaders' second line came right behind and broke through the allies' first.",
        "Fourth, the Aragonese entered the fight, but the crusaders kept their formation and repeated their [[cavalry charges|carga de cavalaria]]. Montfort, with the third squadron, instead of going straight in, swung around and struck the allies' flank.",
        "Fifth, Peter II died. The accounts vary. According to a later tradition, Peter had swapped armor with one of his own men, to fight as if he were an ordinary knight, and the crusaders killed the one wearing the royal armor, which made the Aragonese think the king was dead. Peter showed himself and shouted, but was killed. The names of the crusaders who killed him also vary among the sources. Whatever the cause, the news of the king's death broke the resistance.",
        "Sixth, the allied horsemen fled, and the first two crusader squadrons pursued them. Montfort went back to the town with the third and attacked the Toulouse militia, which was surrounding the walls and was out of formation, in open ground. The militia fled toward the Garonne. Many were killed or drowned.",
        { note: "The armor swap is one of the most disputed points. Some versions speak of a swap with a [[herald|arauto]], others of a swap with one of his own men. The most detailed one comes from the Catalan chronicler Bernat Desclot, who wrote much later. The sources of the time do not describe it with certainty." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Crusader losses were minimal: the sources speak of 4, 8 or 9 dead. The allies' were enormous. The chronicles speak of 15,000 to 20,000 dead, wounded or captured, a number historians treat with caution. The king's own knights fought to the death.",
        "Peter's body was recovered by the [[Hospitallers|hospitalários]] and buried in Toulouse. Years later, it was taken to the monastery of Sigena, in Spain. The heir, James, five years old, fell into Montfort's hands. The pope ordered him returned, and he was handed over to the [[Templars|templários]] and raised at Monzón. He would later be James I, the Conqueror.",
        { h: "Why it matters" },
        "Muret ended Aragon's influence north of the Pyrenees. Peter and many Aragonese nobles died, and the kingdom turned toward Spain: it conquered Majorca and Valencia. The king of France ended up the winner, because he inherited much of the south. For historians, it is one of the most decisive victories of the Middle Ages, alongside Hastings and Bouvines. Charles Oman called it one of the greatest triumphs of a purely cavalry force.",
        { h: "Curiosities and controversies" },
        { note: "The sources are not neutral. Peter of Vaux-de-Cernay, who was not there, writes in favor of Montfort. William of Puylaurens, from Toulouse, criticizes Montfort's excesses. The Catalan Bernat Desclot wrote much later, and King James I, Peter's son, tells the story from the Aragonese point of view." },
        { note: "Pope Innocent III had excommunicated Peter. His successor, Honorius III, lifted the excommunication after the king's death, and in 1217 his remains were moved." }
      ]}
    ]
  },

  toulouse: {
    war: "Albigensian Crusade (1209–1229)",
    hook: "A stone thrown from inside the walls killed the general who had won at Muret.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "After Muret, Simon de Montfort seemed unbeatable. In 1215, the Lateran council in Rome recognized his rights over the County of Toulouse. Count Raymond VI, driven out, went to look for support elsewhere, and in 1216 he and his son, Raymond VII, came back.",
        "In 1216, Raymond VII besieged Beaucaire, and the town opened its gates. Montfort tried to relieve it and failed. In August 1216, he accepted terms and lost the stronghold. It was his first great defeat, and it dented his reputation for never losing. In Toulouse, he had jailed leading citizens in the [[Château Narbonnais|château narbonnais]] and demanded a heavy ransom of 30,000 silver marks. The resentment turned into hatred.",
        { h: "The road to the siege" },
        { timeline: [
          ["Aug 1216", "Montfort loses Beaucaire to Raymond VII."],
          ["Jun 1217", "Montfort goes to Provence to fight Raymond VII. In Toulouse, his wife Alix stays in the Château Narbonnais."],
          ["12–13 Sep 1217", "Raymond VI, who was in Aragon, returns to Toulouse with the [[faidits|faidits]] and the counts of Foix and Comminges, and the city receives him without a fight."],
          ["Early Oct 1217", "Montfort arrives and the siege begins."],
          ["25 Jun 1218", "Montfort is killed."],
          ["25 Jul 1218", "The siege is lifted."]
        ]},
        "The September days differ among the sources: some say the 12th, others the 13th. Montfort had ordered the walls of Toulouse torn down. When he came back, he found them rebuilt."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Simon de Montfort" },
        "The leader of the crusade and, for the Church, count of Toulouse. He was a good general, but he had been at war for years. When the siege began, he had few men and could not surround the city completely.",
        { h: "Raymond VI and Raymond VII" },
        "Raymond VI was a count of more than 60 who had lost everything and came back. Raymond VII, 21, entered the city in June 1218. But the defense of Toulouse was above all the work of the townspeople, governed by the [[consuls of Toulouse|cônsules de toulouse]], who rebuilt walls, towers and barricades.",
        { h: "The other names" },
        "The count of Foix, Raymond-Roger, and the count of Comminges helped repel the first assaults. On the crusader side, Simon's brother, Guy de Montfort, and later his son, Amaury, fought at his side, and reinforcements came with Michel de Harnes, from Artois, and Walter Langton, from England."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "No source gives numbers for either side. All that is known is that the crusaders were too few to surround the whole city, and that is why the city was never cut off. The crusaders served for short terms: the Soissons contingent, for example, left at the end of its 40 days of service.",
        { h: "The ground" },
        "Toulouse stood on the right bank of the Garonne, and across the river lay the suburb of Saint-Cyprien, from which supplies came. Whoever controlled that suburb cut off part of the city's food.",
        { h: "The siege in eight stages" },
        { formation: true },
        "First, in September 1217, Guy de Montfort attacked near the Montoulieu gate, where the wall was still in ruins, but the count of Foix drove him back. When Simon arrived, in October, his attack was repelled by the count of Comminges. Simon accepted that the siege would be a long one.",
        "Second, Montfort took Saint-Cyprien, across the river, but Catalan and Aragonese reinforcements arrived, and the people of Toulouse won it back. Neither side had the strength to finish the other.",
        "Third, during the winter both sides built [[throwing machines|máquina de arremesso]] and [[trebuchets|trabuco]]. On Easter Sunday, 15 April, the people of Toulouse made a bloody sortie that changed nothing.",
        "Fourth, in May reinforcements reached Montfort, but the barricades of Saint-Cyprien held. At the end of the month, a storm made the Garonne rise, and the water carried away barricades and bridges. Montfort occupied the suburb and cut off part of the city's supplies.",
        "Fifth, on 2 June, Montfort tried to draw the city's troops out, but the count of Foix averted the disaster. The count of Soissons arrived with a force, and Raymond VII entered Toulouse with his own.",
        "Sixth, on 3 June, the crusaders brought a [[siege cat|gato de cerco]] up to the wall, and a trebuchet in the city destroyed it. On 25 June, the people of Toulouse sallied out to burn a siege engine. Depending on the source, it was a cat or a wooden tower.",
        "Seventh, in the counterattack, Simon saw his brother Guy in danger and went to help him. A stone thrown from inside the city hit him in the head and killed him on the spot. The sources differ on the detail: Guy had been wounded by a [[crossbow|besta]] bolt, or had lost his horse. According to the chronicle, the machine seems to have been operated by women and girls.",
        "Eighth, Amaury took command, but morale collapsed, and the Soissons crusaders left at the end of their service. There was a last assault on 1 July. On the advice of Guy and the barons, Amaury lifted the siege on 25 July.",
        { note: "The date of Montfort's death varies: 25 June, for most sources, but some authors give 29. And the stone: it came from a trebuchet or from a smaller throwing machine, depending on the source. The details change, and the scene is always the same." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "A victory for Toulouse. The crusaders lost their best general, and the Montforts could no longer advance on Raymond's lands. Amaury kept losing ground. In 1219, Prince Louis, the future Louis VIII, intervened and took Marmande, where the population was massacred, but failed before Toulouse. Amaury ended up ceding his rights to the king.",
        "Toulouse's victory, however, only delayed the end. In 1226, Louis VIII led another crusade, and the territories of Béziers, Albi and Carcassonne were annexed to the kingdom. In 1229, the Treaty of Paris kept Raymond VII in the county, but married his daughter to Alphonse of Poitiers, the king's brother, and Toulouse was to pass to the Crown. The county went to Alphonse in 1249 and returned for good to the Crown in 1271.",
        { h: "Why it matters" },
        "Toulouse is an example of how a well-defended city, with its people on its side, can stop an army of crusaders. But it was only a breathing space: [[Occitania|occitânia]] never became independent again.",
        { h: "Curiosities and controversies" },
        { note: "The scene inspired the [[troubadour|trovador]] Raimon Escrivan, who wrote a [[tenso|tenso]], a debate in verse, in which the trebuchet defeats the cat." },
        { note: "For the siege, the main sources are the chronicle of William of Puylaurens and the works of Sumption, Marvin and Roquebert." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  muret: {
    terrain: [
      { t: "sea", x: 0, y: 63, w: 100, h: 7, l: "Garonne River" },
      { t: "note", x: 20, y: 5, l: "Sketch: the exact positions are not known" }
    ],
    units: [
      { id: "town", s: "a", k: "camp", w: 18, h: 6, l: "Muret (crusader infantry)" },
      { id: "cBar", s: "a", k: "cav", w: 9, h: 4, l: "Barres and Contres" },
      { id: "cMar", s: "a", k: "cav", w: 9, h: 4, l: "Bouchard de Marly" },
      { id: "cSim", s: "a", k: "cav", w: 9, h: 4, l: "Montfort (third squadron)" },
      { id: "bMil", s: "b", k: "inf", w: 26, h: 4, l: "Toulouse militia" },
      { id: "bFoix", s: "b", k: "cav", w: 14, h: 4, l: "Count of Foix" },
      { id: "bPed", s: "b", k: "cav", w: 14, h: 4, l: "Peter II and the Aragonese" },
      { id: "bRay", s: "b", k: "cav", w: 14, h: 4, l: "Raymond VI and Comminges" }
    ],
    steps: [
      { t: "Peter II surrounds Muret: the Toulouse militia attacks the walls, and the allied knights wait behind, in lines. Montfort entered the town at night with his knights.",
        p: { town: [86, 57], cBar: [62, 57], cMar: [52, 57], cSim: [42, 57], bMil: [70, 47], bFoix: [40, 30], bPed: [52, 23], bRay: [64, 16] } },
      { t: "Montfort rides out with the knights in three squadrons, out of sight of the besiegers, and crosses a stream. The infantry stays to guard the town.",
        p: { cBar: [36, 46], cMar: [26, 50], cSim: [16, 54] } },
      { t: "The first squadron hits the count of Foix's line head-on, and it gives way.",
        p: { cBar: [40, 35], bFoix: [38, 26] }, x: ["bFoix"] },
      { t: "The crusaders' second line enters the gap and meets Peter's line. The crusaders repeat their charges and keep their formation.",
        p: { cMar: [52, 29], bPed: [54, 22] } },
      { t: "Montfort, with the third squadron, swings around and attacks the allies' flank.",
        p: { cSim: [70, 26], bRay: [68, 14] } },
      { t: "Peter II dies. The allied cavalry falls apart and flees. Raymond VI, according to some accounts, leaves without fighting.",
        p: { bPed: [58, 18], bRay: [82, 6] }, x: ["bPed", "bRay"] },
      { t: "The first two squadrons chase the fugitives. Montfort comes back to the field with the third.",
        p: { cBar: [34, 14], cMar: [48, 14], cSim: [68, 38] } },
      { t: "Montfort falls on the Toulouse militia in open ground. The militia flees toward the Garonne, and many die or drown.",
        p: { cSim: [68, 52], bMil: [62, 60] }, x: ["bMil"] }
    ]
  },

  toulouse: {
    terrain: [
      { t: "sea", x: 0, y: 34, w: 100, h: 6, l: "Garonne River" },
      { t: "note", x: 24, y: 5, l: "Sketch: approximate positions" }
    ],
    units: [
      { id: "tCity", s: "a", k: "camp", w: 30, h: 8, l: "Toulouse (rebuilt walls)" },
      { id: "tFoix", s: "a", k: "inf", w: 12, h: 4, l: "Foix and Comminges" },
      { id: "tSub", s: "a", k: "inf", w: 14, h: 4, l: "Saint-Cyprien barricades" },
      { id: "tEng", s: "a", k: "inf", w: 12, h: 4, l: "Throwing machines" },
      { id: "mGuy", s: "b", k: "inf", w: 12, h: 4, l: "Guy de Montfort" },
      { id: "mSim", s: "b", k: "cav", w: 12, h: 4, l: "Simon de Montfort" },
      { id: "mCat", s: "b", k: "inf", w: 10, h: 4, l: "Siege cat" },
      { id: "mRei", s: "b", k: "inf", w: 12, h: 4, l: "Reinforcements (Soissons, Artois, England)" }
    ],
    steps: [
      { t: "September 1217. Raymond VI returns to Toulouse. The townspeople rebuild the walls. Guy de Montfort attacks near the Montoulieu gate, but the count of Foix drives him off.",
        p: { tCity: [50, 20], tFoix: [28, 28], tSub: [30, 52], tEng: [56, 30], mGuy: [20, 14], mSim: [90, 12], mCat: [88, 24], mRei: [92, 48] } },
      { t: "October. Simon arrives. His men are too few to surround the whole city, and the count of Comminges repels his assault. The siege will be a long one.",
        p: { mSim: [78, 14], mGuy: [24, 13] } },
      { t: "Montfort takes the suburb of Saint-Cyprien, across the river, but Catalan and Aragonese reinforcements arrive and the people of Toulouse take it back.",
        p: { mGuy: [30, 50], tSub: [44, 52] } },
      { t: "In the winter, both sides build machines. On 15 April 1218, the people of Toulouse make a bloody sortie that changes nothing.",
        p: { tFoix: [74, 28], tEng: [56, 30], mSim: [80, 14] } },
      { t: "In May, reinforcements reach Montfort. At the end of the month, a flood of the Garonne carries off the barricades, and he occupies Saint-Cyprien and cuts off part of the supplies.",
        p: { mRei: [80, 16], mGuy: [46, 50], tSub: [24, 54] }, x: ["tSub"] },
      { t: "On 3 June, a trebuchet in the city destroys a siege cat that was approaching the wall.",
        p: { mCat: [72, 22] }, x: ["mCat"] },
      { t: "On 25 June, the people of Toulouse sally out to burn a siege engine. Simon rushes to help his brother Guy. A stone thrown from inside the city kills him.",
        p: { tFoix: [74, 28], mSim: [80, 20] }, x: ["mSim"] },
      { t: "Amaury takes command, but morale falls. There was a last assault on 1 July. On 25 July, he lifts the siege.",
        p: { mRei: [92, 10], mGuy: [96, 14] }, x: ["mRei", "mGuy"] }
    ]
  }
});
