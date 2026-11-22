// batch x: maipu, boyaca, carabobo, pichincha, piraja, jenipapo
Object.assign(GLOSSARY, {
  "baioneta": "A blade fixed to the tip of a rifle. It turns the firearm into a short spear and allows hand-to-hand fighting after the weapon has been fired.",
  "llaneros": "Cowboys of the llanos, the immense plains of Venezuela and Colombia. They rode from childhood and fought with lances. They fought first for the king, then, under José Antonio Páez, for independence.",
  "lanceiros": "Horsemen armed with lances. In South America, they were the typical cavalry of the llanos: fast, cheap and very effective in a charge.",
  "realistas": "Those who fought for the Spanish Crown in the wars of independence. Many royalist soldiers were Americans, born in South America itself, and not Spaniards.",
  "patriotas": "Those who fought for the independence of the colonies against European rule.",
  "páramo": "A cold, damp and windy highland of the Andes, above about 3,000 meters, covered in grass and fog and without trees.",
  "legião britânica": "British and Irish volunteers, many of them veterans of the wars against Napoleon, who came to fight at Bolívar's side. One of their battalions became known as Albión.",
  "granadeiros a cavalo": "An elite cavalry regiment created by San Martín, which fought at Chacabuco and at Maipú.",
  "armistício": "An agreement to stop fighting for an agreed time, without yet being peace.",
  "capitulação": "A negotiated surrender, with conditions agreed between the two sides, such as handing over weapons and flag.",
  "milícia": "Armed citizens in wartime, with little training and equipment. They serve close to home and reinforce the regular army.",
  "caçadores": "The name of infantry or light cavalry units, more mobile than ordinary troops, used to open the fight and protect the flanks.",
  "gran colômbia": "A republic created in 1819 by the patriots, joining Venezuela, New Granada (today's Colombia) and, later, Quito (Ecuador). It lasted until 1830.",
  "exército dos andes": "The army built by San Martín in Mendoza, which crossed the mountain range in 1817 to liberate Chile.",
  "corneteiro": "A soldier who plays the bugle, the way of passing orders such as advance, retreat or attack amid the noise of battle.",
  "chuço": "A long stick with an iron point, an improvised spear.",
  "vaqueiro": "A man who tends cattle on horseback in the sertão. Used to the bush and to horses, but without military training."
});

Object.assign(DEEP, {
  maipu: {
    war: "South American wars of independence: the Chilean campaign (1817–1818)",
    hook: "In 17 days, a defeated and scattered army rebuilt itself and destroyed the Spaniards who were coming after it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1818, Spanish South America was at war. Between 1810 and 1814, Chile had governed itself, but the [[royalists|realistas]] retook the country at the battle of Rancagua, in October 1814. The [[patriots|patriotas]] who escaped crossed the Andes and took refuge in Mendoza, where Governor José de San Martín began to build an army to return.",
        "This [[Army of the Andes|exército dos andes]] crossed the mountain range in early 1817 and won at Chacabuco, on 12 February. Bernardo O'Higgins stayed on as Supreme Director of Chile, and independence was proclaimed a year later, on 12 February 1818. But Spain was still sending troops from Peru to recover the country.",
        { h: "The road to Maipú" },
        { timeline: [
          ["October 1814", "The royalists win at Rancagua and reconquer Chile."],
          ["12 February 1817", "San Martín wins at Chacabuco, after crossing the Andes."],
          ["12 February 1818", "Chile proclaims independence."],
          ["19 March 1818", "On the night of Cancha Rayada, the Spanish general Mariano Osorio defeats and scatters the patriot army. O'Higgins is wounded."],
          ["2 April", "The patriots leave the Ochagavía camp and occupy the low hills near Maipú."],
          ["4 April", "Osorio settles in at Lo Espejo, about seven kilometers away, at nightfall."]
        ]},
        "After Cancha Rayada, the patriot army was scattered and Santiago was in panic, with Osorio marching on the capital. In a little over two weeks, San Martín gathered the soldiers and reorganized everything into three divisions. O'Higgins, though wounded, collected weapons, sped up supplies and organized a training camp."
      ]},
      { n: "02", title: "The main figures", blocks: [
        { h: "José de San Martín, 40 years old" },
        "Born in present-day Argentina, he served more than 20 years in the Spanish army before returning to America to fight against Spain. He had a long-term plan: to liberate Chile and, from there, attack Peru, the center of Spanish power. Losing Chile would mean losing the whole plan. At Maipú, he waited for the Spaniards on the hills and kept a [[reserve|reserva]] to throw in when the fight stalled.",
        { h: "Bernardo O'Higgins, 39 years old" },
        "A Chilean, Supreme Director and commander of the Chilean part of the army. He was wounded at Cancha Rayada and was still recovering. He gathered about a thousand militiamen in Santiago and reached the field only at the end of the battle.",
        { h: "Mariano Osorio" },
        "A Spanish general, the winner at Cancha Rayada. He pursued the patriots to Lo Espejo, where he arrived at nightfall on 4 April, and took up a defensive position the next day. He left the field before the end of the battle.",
        { h: "The other names" },
        "On the patriot side, Juan Gregorio de Las Heras commanded the first division (the right), Rudecindo Alvarado the second (the left) and Hilarión de la Quintana the reserve. José Matías Zapiola commanded the [[mounted grenadiers|granadeiros a cavalo]] and Manuel Blanco Encalada and Borgoño the [[artillery|artilharia]]. The royalist army had three brigades: José Ordóñez on the right, Lorenzo López de Morla in the center and Joaquín Primo de Rivera on the left."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Both armies had close to 5,000 men. The patriots had 21 cannons; the royalists, 12. The estimates vary a great deal: from 4,600 to 9,000 patriots and from 4,500 to 10,000 royalists, depending on whether the militias are counted.",
        { note: "We use 'about 5,000' for each side, the most common figure in reference works. O'Higgins's militias arrived only at the end of the battle." },
        { h: "The terrain" },
        "The low hills near Maipú, a few kilometers from Santiago, with the road to Valparaíso running alongside. The patriots occupied the hills on their side at dawn on 5 April, with Santiago behind them. Osorio took position on a rise near the Lo Espejo farm. The farm, with its houses, would matter at the end.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, the cannons. At around 11:30 in the morning, the patriot artillery opened fire and the royalist artillery answered, without either side suffering casualties. San Martín saw that the royalists had stayed on the defensive.",
        "Second, the advance. Half an hour later, he sent Las Heras and Alvarado forward. The infantry marched in columns, without firing. Las Heras hit the royalist left, Primo de Rivera; Alvarado, on the right, hit Ordóñez. Zapiola's grenadiers were struck by the Spanish cavalry and fell back under heavy fire, but came back reinforced and scattered the enemy horsemen.",
        "Third, the stalemate. The frontal attacks stalled. San Martín then released Quintana's reserve against the center and the [[flanks|flanco]]. Freire's squadrons of mounted chasseurs defeated the Spanish cavalry on the other side of the field, and in that charge Colonel Santiago Bueras died.",
        "Fourth, the break. Las Heras and some grenadiers took the hill on the royalist left. That pressure, added to an oblique attack against the right and the center, split the Spanish line. Some historians compare the maneuver with the [[oblique order|linha oblíqua]] of Epaminondas, the Theban general. Osorio left the field with the cavalry and command passed to Ordóñez.",
        "Fifth, the resistance. Ordóñez did not accept defeat. He gathered the battalions that remained (among them Burgos, Arequipa, Concepción and Infante Don Carlos), which formed a [[square|quadrado]] and withstood several cavalry charges. They fell back in good order to the Lo Espejo farm, even under the [[grapeshot|metralha]] of the patriot cannons. According to accounts, the Burgos boasted of having 18 victories and no defeats.",
        "Sixth, the farm. The Coquimbo battalion attacked the position head on and was repulsed with heavy losses. O'Higgins's militiamen arrived at this point. San Martín then concentrated about 17 cannons against the houses of Lo Espejo and ordered the final assault. Ordóñez and Primo de Rivera surrendered, and the militias took prisoner the soldiers scattered across the field."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The numbers vary widely. Among the Spaniards, reference works speak of 1,000 to 2,000 dead and between 1,400 and 2,300 prisoners. Accounts from the time reach 3,000 prisoners and 2,000 dead, which historians consider an exaggeration. The patriots lost between 1,000 and 1,900 men, dead and wounded, about a third of the army. Osorio reached Talcahuano with about 600 men, according to one account; others say that, with the desertions, only some 90 were left.",
        "Maipú put an end to the major Spanish operations in Chile. The news reached Buenos Aires a few days later and was received with celebration.",
        { h: "Why it matters" },
        "With Chile secured, Chileans and Argentines could prepare the offensive along the Pacific coast against Peru, the stronghold of Spanish power. Historians usually place Maipú alongside Boyacá and Ayacucho among the battles that decided South American independence. Every 5 April there is a parade at Maipú, and the date is the Day of the Armored Forces of the Chilean army.",
        { h: "Curiosities and controversies" },
        { note: "The embrace of Maipú: according to tradition, at the end of the day O'Higgins, still wounded, embraced San Martín and said 'Glory to the savior of Chile!'. The scene became a symbol of the alliance between Chile and Argentina, and even a refuge in Antarctica carries the name." },
        { note: "The Hussars of Death: historians debate whether the corps commanded by Manuel Rodríguez took part in the battle or stayed out of it. Old and new sources disagree." },
        { note: "Respect for the enemy: San Martín praised the resistance of the royalists, saying that such tenacity was rarely seen." }
      ]}
    ]
  },

  boyaca: {
    war: "Liberation Campaign of New Granada (1819)",
    hook: "After crossing the Andes, the patriots took apart a Spanish division in one afternoon and lost 13 men.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1819, the war of independence had already lasted nine years. New Granada (today's Colombia) was a Spanish viceroyalty, governed by Viceroy Juan de Sámano. Simón Bolívar and José Antonio Páez resisted in the llanos, the plains of the Venezuelan interior.",
        "Bolívar decided to do what no one expected: cross the Andes and fall on Bogotá, the capital of New Granada, coming by a route the Spaniards were not watching. The march began in the llanos, in the rainy season, with full rivers and flooded land. The worst was still ahead.",
        { h: "The road to Boyacá" },
        { timeline: [
          ["Early July 1819", "The army crosses the [[páramo|páramo]] of Pisba, at close to 4,000 meters of altitude, and reaches Socha in terrible condition."],
          ["25 July", "At the Pantano de Vargas, Bolívar narrowly defeats the Spanish colonel José María Barreiro."],
          ["3 August", "Bolívar pretends he will cross the Chicamocha river, turns back at night and takes the Toca road, toward Tunja."],
          ["4 August", "The patriots occupy Tunja and capture about 600 rifles."],
          ["7 August", "Battle of the Boyacá bridge."]
        ]},
        "The crossing of Pisba was costly. According to one source, about 100 men died, about 500 fell ill and the army lost horses, cattle and ammunition. At Vargas, the Spaniards attacked before the patriots received the reinforcements coming from the region of Boyacá and Santander. The capture of Tunja cut the Spaniards' communication with Bogotá."
      ]},
      { n: "02", title: "The main figures", blocks: [
        { h: "Simón Bolívar, 36 years old" },
        "Born in Caracas, he had lost Venezuela twice and started over twice. The 1819 campaign was a gamble: without a victory in New Granada, the war would stay stuck in the llanos. At Boyacá, the idea was the usual one: to appear where the enemy did not expect and to cut the road to the capital.",
        { h: "Francisco de Paula Santander and José Antonio Anzoátegui" },
        "Santander, aged 27, a New Granadan, commanded the vanguard. Anzoátegui, a Venezuelan, commanded the rear guard. Both were promoted to major general after the victory. The chief of staff was Carlos Soublette.",
        { h: "José María Barreiro" },
        "A Spanish colonel, commander of the Third Division of the expeditionary army. Viceroy Sámano sent him to block Bolívar before Bogotá. After Vargas, he lost the race to Tunja and ended up trying to return to Bogotá by a route on which the enemy was already waiting.",
        { h: "Other names" },
        "On the patriot side, Lieutenant Colonel Juan José Rondón commanded the lancers, the [[llaneros|llaneros]] who had turned the game at Vargas. On the Spanish side, Francisco Jiménez commanded the vanguard, Víctor Sierra the cavalry and Colonel Juan Tolrá one of the columns."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The patriots had about 2,850 men: some 1,000 in Santander's vanguard, 1,050 in Anzoátegui's rear guard and 800 in Bolívar's reserve. Among them were soldiers of the [[British Legion|legião britânica]] and llaneros. The royalists had about 2,670, in one count (2,300 infantry, 350 cavalry and 20 gunners). Older estimates speak of 2,000 patriots and 2,900 royalists; modern ones, of 2,850 to 2,900 and 2,670 to 3,500.",
        { note: "We use the most cited numbers: about 2,850 patriots and 2,670 royalists. Other counts differ, especially for the royalists." },
        { h: "The terrain" },
        "The Boyacá bridge, over the Teatinos stream, where the Samacá road meets the Royal Road between Tunja and Bogotá. Bolívar learned from spies that the Spaniards would return to Bogotá by way of Samacá and decided to wait for them at the bridge. Nearby stood the Casa de Teja, where the first clash took place.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, the march. Barreiro left Motavita at 3:30 in the morning on 7 August, heading for Casa de Teja. Bolívar, who was watching from the heights of San Lázaro, sent Santander and Anzoátegui to intercept him. Near noon, Jiménez's Spanish vanguard stopped to rest and eat near the bridge.",
        "Second, the clash. At around 14:00, a patriot patrol under Captain Andrés Ibarra ran into the Spanish vanguard at Casa de Teja. Santander arrived with the patriot [[vanguard|vanguarda]] and pushed the Spaniards back across the bridge.",
        "Third, the split. Barreiro's main body appeared along the Samacá road and ran into Anzoátegui's [[rear guard|retaguarda]]. There were now two fights at the same time, one near the bridge and another on the plain. The Spanish army was cut in two, by the stream and by the patriot column that stood in the middle. The patriots, by contrast, communicated well with one another.",
        "Fourth, the center. Rondón attacked through the center with his [[lancers|lanceiros]], and the Spanish cavalry fell apart. Barreiro and his officers dismounted to try to rally the troops.",
        "Fifth, the decisive maneuver. Santander ordered the Casanare guides, under José María Ruiz, to cross the stream and attack Jiménez's vanguard from behind. Two royalist squadrons were defeated. Next, the battalions of [[chasseurs|caçadores]] and the First of the Line, under Joaquín París and Antonio Obando, took the bridge. Santander led a [[bayonet|baioneta]] charge across the bridge, and Colonel Tolrá died there.",
        "Sixth, the encirclement. Barreiro held on the defensive, but his troops were surrounded. The Spanish vanguard and rear guard surrendered. The battle ended a little after 16:30. Barreiro was captured the same day."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The patriots lost 13 dead and 53 wounded. The royalists, more than 100 dead, 150 wounded and about 1,600 prisoners. The Third Division ceased to exist. Most of the prisoners were American soldiers, Venezuelans and New Granadans, and many ended up in the patriot army.",
        "Sámano learned of the defeat at around 22:00 on 8 August and fled Bogotá on the 9th, disguised as a peasant, leaving behind documents and about 900,000 pesos. Bolívar entered the city on the 10th, without resistance. Barreiro and 37 or 38 other Spanish officers were executed in Bogotá on 11 October 1819, on Santander's orders.",
        { h: "Why it matters" },
        "Spanish power in central New Granada collapsed. In December 1819, [[Gran Colombia|gran colômbia]] was created. The way was open to Carabobo, Pichincha, Junín and Ayacucho. 7 August is a national holiday in Colombia and Army Day.",
        { h: "Curiosities and controversies" },
        { note: "The boy who captured the commander: according to tradition, Pedro Pascasio Martínez, aged 11, and a soldier named José captured Barreiro, and the boy refused a bribe in gold. They promised him 300 pesos that never arrived. The age is treated as legend." },
        { note: "The hours: the battle is usually described as lasting 'a little over two hours', but the times cited (from about 14:00 until after 16:30) add up to more than two and a half hours." },
        { note: "The savior of Vargas: according to the traditional account, on 25 July Bolívar thought the battle was lost when Rondón said his lancers had not yet fought. Bolívar ordered: 'Colonel, save the fatherland!'. The charge that followed turned the game." }
      ]}
    ]
  },

  carabobo: {
    war: "South American wars of independence: the Venezuelan campaign (1821)",
    hook: "A trail around the flank, a handful of Britons and the lancers of the llanos: the battle that made Venezuela independent.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1821, the war in Venezuela had already lasted eleven years. After losing the country for the second time, in 1814, Bolívar started again from zero, and in 1819, after Boyacá, the patriots created [[Gran Colombia|gran colômbia]]. Spain, for its part, was weakened: in 1820, Riego's liberal revolt broke up the expedition that was going to reinforce America.",
        "That year, Bolívar agreed an [[armistice|armistício]] with the Spanish general Pablo Morillo. It ended on 28 April 1821 without peace having been reached. On the Spanish side, the one in command was now Field Marshal Miguel de la Torre.",
        { h: "The road to Carabobo" },
        { timeline: [
          ["1819", "Boyacá liberates New Granada and Gran Colombia is born."],
          ["1820", "Armistice between Bolívar and Morillo."],
          ["28 April 1821", "The armistice ends. Bolívar gathers his forces at San Carlos."],
          ["15 June", "Bolívar reorganizes the army into three divisions: Páez, Cedeño and Plaza."],
          ["23 June", "The divisions meet at Tinaquillo."],
          ["24 June", "Battle of Carabobo."]
        ]},
        "While Bolívar concentrated at San Carlos, other patriot commanders prepared the ground. Bermúdez made a diversionary maneuver toward Caracas, which drew away part of the royalist troops. Páez advanced from the Apure and Urdaneta took Barquisimeto. Plaza took Barinas and went on to the center of the country."
      ]},
      { n: "02", title: "The main figures", blocks: [
        { h: "Simón Bolívar, 37 years old" },
        "At Carabobo, he did what he knew how to do: he looked at the terrain and changed the plan on seeing the enemy position. Instead of attacking head on a line he considered inaccessible, he shifted the divisions to turn the royalist right.",
        { h: "José Antonio Páez, about 30 years old" },
        "Commander of the [[llaneros|llaneros]], the cowboys of the llanos of Apure. He commanded the first division, with the Bravos de Apure battalion, the British battalion and 1,500 horsemen. According to Bolívar's report, he was promoted to general in chief on the battlefield itself.",
        { h: "Miguel de la Torre" },
        "A Spanish field marshal, with about 5,000 to 6,300 men, most of them Venezuelans. He covered the roads to San Carlos and El Pao, from positions on the heights. His subordinates included Francisco Tomás Morales and Tomás García.",
        { h: "The other names" },
        "Manuel Cedeño commanded the second division and Ambrosio Plaza the third, with Colonel Rondón's lancer regiment. The [[British Legion|legião britânica]], with about 350 men, had as its commander Colonel Ferriar (the name appears spelled in several ways)."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The estimates vary widely. The patriots appear with 6,500 to 8,000 men in one work and with about 10,000 in another; Bolívar wrote that the two armies were equal in number, and that a fifth of his decided the battle. The royalists: from 5,000 to 6,300, and more than 6,000 according to Bolívar. Páez's division had the Bravos de Apure, the British battalion and 1,500 horsemen; Cedeño's, the Tiradores battalion, the Boyacá and the Vargas and the Sacred Squadron; Plaza's, the Rifles, Grenadiers, Vencedor de Boyacá and Anzoátegui battalions and Rondón's cavalry.",
        { note: "The numbers for Carabobo vary widely between sources. We use the ranges from reference works and Bolívar's report, which is the closest direct source to the event." },
        { h: "The terrain" },
        "A rugged region near Valencia, where the royalists occupied the heights and covered the roads to San Carlos and El Pao. From Buenavista, Bolívar assessed the terrain and judged the front and the south inaccessible. That left the east flank: the right of the royalist army.",
        { h: "The battle in six moves" },
        { formation: true },
        "First, the decision. On the morning of 24 June, Bolívar examined the enemy position and changed the plan: the divisions shifted to the east, to turn the royalist right, while Plaza advanced toward the center.",
        "Second, the flank. At around 11:00, according to Bolívar's report, the army passed in front of the enemy under fire and crossed a narrow stream. Páez, with two battalions and Muñoz's cavalry, advanced against the enemy's right. Regional accounts say that local residents showed the way and opened a trail, which made it possible to surprise the Spaniards from behind.",
        "Third, the counterattack. La Torre sent the Burgos battalion against the Bravos de Apure, who fell back twice. The British battalion held the Burgos and lost its commander and 17 senior officers. This gave the Bravos time to reorganize and counterattack.",
        "Fourth, the center. Cedeño's division was held up by the terrain, and only a part of the Tiradores battalion, under Commander Heras, managed to go in. Cedeño charged alone against a mass of infantry and died. Plaza charged against a battalion to force it to surrender and also died. Bolívar praised both in his report.",
        "Fifth, the break. The patriot cavalry came in from the north, and the royalist cavalry withdrew or disobeyed orders. The royalist right collapsed, attacked from the front and from the flank. According to Bolívar, the enemy was surrounded and cut up in half an hour.",
        "Sixth, the flight. The 1st Valencey battalion formed a [[square|quadrado]] and fell back in good order. The rest of the army fled toward Valencia and Puerto Cabello, with the patriots behind them. According to Bolívar, some 400 men entered Puerto Cabello that day."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Royalist losses were 2,908 among dead, wounded and prisoners. The patriots', 200 to 300 dead and wounded, according to Bolívar and modern works, although the lower figure is considered implausible. One source speaks of 119 dead among the British. Colonel Rangel was sent to Puerto Cabello to set up a siege line.",
        { h: "Why it matters" },
        "Historians consider Carabobo the most important battle for Venezuela's independence. What was left of the royalist army fell back to Puerto Cabello, which only fell in November 1823; the naval victory on Lake Maracaibo came in July 1823. Venezuela became part of Gran Colombia. 24 June is a national holiday and Army Day.",
        { h: "Curiosities and controversies" },
        { note: "The two Carabobos: the name also designates a battle of 1814, and for that reason the 1821 one appears in some books as the 'second battle of Carabobo'." },
        { note: "The name of the British colonel: it appears as Ferriar, Ferrier and Farriar in the sources. Bolívar cites him in the report as Farriar." },
        { note: "The praise: Bolívar wrote that it was the largest and finest army that had ever fought in Colombia. According to one source, Bolívar called the British Legion 'saviors of my country'." }
      ]}
    ]
  },

  pichincha: {
    war: "South American wars of independence: the Ecuadorian campaign (1820–1822)",
    hook: "They climbed a volcano at night, in the rain, and the battle was decided by a battalion that arrived late.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Quito, the capital of the old Royal Audiencia, had tried to free itself in 1809, but the uprising was crushed. The idea of independence returned in 1820: Guayaquil declared itself independent on 9 October and Cuenca followed on 3 November, with an army of more than a thousand men. But the first two campaigns against the [[royalists|realistas]], in 1820 and 1821, failed.",
        "For the third, Bolívar sent General Antonio José de Sucre, his right-hand man. Sucre chose an indirect route, avoiding the fortified Spanish positions.",
        { h: "The road to Pichincha" },
        { timeline: [
          ["9 October 1820", "Guayaquil declares independence."],
          ["21 February 1822", "Sucre retakes Cuenca."],
          ["28 April", "The army leaves Riobamba for Ambato and Latacunga. Sucre avoids the Spanish position at Tiopullo, going by the left flank."],
          ["17 May", "He arrives near Sangolquí and receives General José Mires, who had escaped from captivity in Quito."],
          ["22 May", "He camps at Chillogallo, south of Quito."],
          ["23 May", "He marches at night to climb Pichincha."]
        ]},
        "The royalists, commanded by Melchor Aymerich, president of the Royal Audiencia, noticed the movement and went back to Quito to reorganize the defense. Sucre found himself facing defensive positions on the hills of Puengasí and on the Panecillo, and decided to go around behind."
      ]},
      { n: "02", title: "The main figures", blocks: [
        { h: "Antonio José de Sucre, 27 years old" },
        "A Venezuelan, Bolívar's young lieutenant. The Pichincha plan was his: not to attack the fortified positions, to arrive by little-used trails on the slopes of Pichincha, behind the enemy, and to prevent the Cataluña battalion, which was coming from the north, from reinforcing Aymerich.",
        { h: "Melchor Aymerich" },
        "President of the Royal Audiencia of Quito and royalist commander. He had received information that the enemy would take longer to arrive, and the estimate proved wrong: the Spaniards had to fight sooner than expected.",
        { h: "The other names" },
        "Andrés de Santa Cruz commanded the Peruvian division and the Trujillo battalion. The Albión battalion was made up of British volunteers and volunteers from other countries. Lieutenant Abdón Calderón, a young man of about 17, became famous for his courage."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Sucre had about 2,971 men, from Gran Colombia, Peru, Guayaquil, Argentina and Chile, plus British volunteers. Aymerich sent up the mountain 1,894 men, according to one source. The estimates vary: from fewer than 2,000 to 3,500 men for each side, depending on the work.",
        { note: "We use 'about 3,000' and 'about 1,900', which are the most cited numbers." },
        { h: "The terrain" },
        "The slopes of the Pichincha volcano, at about 3,500 meters of altitude, beside Quito. There was only a narrow, sloping strip, which ruled out cavalry and artillery. The battle was decided by infantry with rifles and bayonets, in thin air.",
        { h: "The battle in four moves" },
        "First, the climb. The column left Chillogallo at night, with the Alto Magdalena battalion in front, followed by the Trujillo, the Piura, the Yaguachi and the Paya. In the rear went the Albión, the cavalry and the [[artillery|artilharia]]. The rain and the altitude made the advance slow. At sunrise, the royalists saw the patriots.",
        "Second, the clash. At around 8:00, the first patriot troops reached El Campamento. A royalist volley struck the [[vanguard|vanguarda]]. The front battalions, among them Paya, Trujillo and Yaguachi, suffered many casualties and fell back, and the situation became critical. The troops entered the fight little by little, on both sides.",
        "Third, the Albión. The Aragón battalion, the best of the Spanish army, had climbed above the patriot line and was about to attack its back, when the Albión, which was coming behind, arrived and stopped it. The Magdalena joined the fight. The Aragón fell apart, and the royalist line gave way.",
        "Fourth, the victory. Near noon, after about three hours of fighting, Aymerich ordered a retreat. The royalists took refuge in the Panecillo fort, and Sucre offered them a [[capitulation|capitulação]]."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The losses vary from one source to another: about 200 dead and 140 wounded among the patriots; about 400 dead, 190 wounded and 1,260 prisoners among the royalists, according to one work. Sucre, in a report the next day, spoke of 1,100 prisoners, among them 160 officers.",
        "Aymerich accepted the capitulation on 25 May, at the Panecillo, handing over weapons and flag. Sucre entered Quito the same day, and Bolívar arrived on 16 June. Guayaquil was incorporated into Gran Colombia on 31 July 1822.",
        { h: "Why it matters" },
        "Quito and the territory of the old Royal Audiencia became part of [[Gran Colombia|gran colômbia]]. In 1830, Quito, Guayaquil and Cuenca separated and formed the Republic of Ecuador. The army went on to Peru, up to the victories of Junín and Ayacucho.",
        { h: "Curiosities and controversies" },
        { note: "Abdón Calderón: the young lieutenant received four bullet wounds and died 14 days later. Sucre singled him out in the report, and Bolívar promoted him to captain after his death." },
        { note: "The winner's name: the sucre was the currency of Ecuador until 2000, when the country began to use the dollar." },
        { note: "The time: the sources differ on the hour of the first shot, between 8:00 and 9:30. They may be counting different moments, the arrival on the heights and the exchange of fire." }
      ]}
    ]
  },

  piraja: {
    war: "Brazilian War of Independence: the struggle for Bahia (1822–1823)",
    hook: "The biggest fight of the Independence in Bahia became famous for a bugle call that perhaps never existed.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1822, Salvador was in the hands of Portuguese troops. In February, with the arrival of the new commander of arms, Inácio Luís Madeira de Melo, tension with the Brazilians exploded: on 19 February, there were shots at the São Pedro fort and the nun Joana Angélica was killed in the Lapa Convent. When Dom Pedro proclaimed independence, on 7 September, Bahia was already at war.",
        "The Brazilians controlled the Recôncavo, the region around the bay. On 25 June, the council of Cachoeira, in the Recôncavo, voted in favor of Dom Pedro. In October, General Pierre Labatut arrived in Bahia, a French officer hired by Dom Pedro (appointed on 3 July) to command the Pacifying Army. The Portuguese received reinforcements in August: 750 men.",
        { h: "The road to Pirajá" },
        { timeline: [
          ["19 February 1822", "Shots at the São Pedro fort. The nun Joana Angélica dies in the Lapa Convent."],
          ["25 June", "The council of Cachoeira recognizes Dom Pedro."],
          ["October", "Labatut arrives in Bahia with reinforcements from Rio de Janeiro."],
          ["3 November", "Labatut divides the army into two brigades."],
          ["8 November", "Battle of Pirajá."]
        ]},
        "The area that counted was that of Cabrito, Campinas and Pirajá, the obligatory passage for the cattle and food coming from the sertão. Whoever held the heights of Pirajá controlled the road the city depended on in order to eat."
      ]},
      { n: "02", title: "The main figures", blocks: [
        { h: "Pierre Labatut" },
        "A French general, appointed by Dom Pedro to command the Pacifying Army. He divided the army into two brigades: the left, under Colonel Felisberto Gomes Caldeira, at Itapuã; and the right, under Major José de Barros Falcão de Lacerda, between Cabrito, Campinas and Pirajá.",
        { h: "José de Barros Falcão de Lacerda" },
        "A major (later colonel) and commander of the brigade of about 1,300 soldiers from Pernambuco, Bahia and Rio de Janeiro that defended Pirajá. The order to retreat was his, according to the traditional version.",
        { h: "Inácio Luís Madeira de Melo" },
        "The Portuguese commander of Salvador. He wanted to break the blockade of the roads that linked the city to the rest of Brazil.",
        { h: "The bugler Luís Lopes" },
        "A corporal and [[bugler|corneteiro]], according to tradition a Portuguese who had joined the Brazilian cause. He is the most famous character of the battle, but his story is disputed (see below)."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Barros Falcão's brigade had about 1,300 men. The whole Brazilian army had from 1,300 to 2,000, depending on the source. The attacking Portuguese are estimated at about 1,900. Among the Brazilian forces were the [[militia|milícia]] of the Casa da Torre, Indian archers and a corps of Black soldiers, the Henrique Dias.",
        { note: "The numbers for Pirajá are uncertain. The Brazilians are usually counted between 1,500 and 2,000 and the Portuguese between 1,900 and more than 3,000 (the total in Salvador)." },
        { h: "The terrain" },
        "Pirajá lies some 24 kilometers from the historic center of Salvador, at the top of the cattle road. Whoever landed on the beaches of the suburb had to climb the slope to the road. The fight spread among Pirajá, Campinas and Alto do Cabrito.",
        { h: "The battle" },
        "On the morning of 8 November, the Portuguese attacked almost all the Brazilian positions by land and by sea. Part of them landed on the beaches of the suburb. The main fight was in the area of Pirajá and Cabrito, where Barros Falcão's brigade repelled three attacks.",
        "The fight was long: the sources speak of eight to ten hours. At one point, with the Brazilians about to lose, Barros Falcão ordered a retreat.",
        "According to tradition, the bugler Luís Lopes, instead of the retreat signal, played 'cavalry, advance' and then 'cut throats'. The Portuguese, thinking cavalry reinforcements were coming, took fright and fell back to Salvador along the beaches where they had landed. The Brazilians, above all the Pernambucans, attacked with new spirit and won."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The losses were never confirmed. Labatut wrote that about 200 people died, without separating the sides, and the next day spoke of 633. The Rio newspaper O Espelho gave 375 Portuguese dead and 221 wounded. Other sources give 30, 64, 70 or 80 Portuguese dead. The Portuguese press of Salvador spoke of fewer than 100 casualties. On the Brazilian side, the historian Titara counted about 10 soldiers dead, among them two officers.",
        "The Portuguese returned to Salvador and the city was besieged. In April or May 1823, Lord Cochrane's squadron blockaded the port. On the night of 1 to 2 July 1823, Madeira de Melo left Salvador with about 4,500 men in 83 ships, and the Brazilian army entered the city.",
        { h: "Why it matters" },
        "It was the biggest fight of the Independence in Bahia and consolidated the Portuguese military and political defeat in the province. 2 July, the date of Bahia's independence, is celebrated to this day, and many researchers see in it a foundation of Brazil's effective independence.",
        { h: "Curiosities and controversies" },
        { note: "The bugler Lopes: the story appears for the first time in the book by Ladislau dos Santos Titara, from 1835, which speaks of 'decision, or mistake'. No document confirms it. There are historians who defend its existence and others who see it as popular legend." },
        { note: "The cavalry that did not exist: skeptics recall that there was no Brazilian cavalry in the fight, so the call would make no sense. Defenders of the story answer that the Portuguese retreated even without reinforcements." },
        { note: "The place: some sources place the fight at Sítio do Cabrito; others, at Pirajá and Campinas. The whole region was involved." }
      ]}
    ]
  },

  jenipapo: {
    war: "Brazilian War of Independence: Piauí and Maranhão (1822–1823)",
    hook: "Cowboys and farmers with machetes faced cannons, lost the field and, even so, the Portuguese major did not get where he wanted.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "When Dom Pedro proclaimed independence, on 7 September 1822, not all the provinces accepted it right away. In Piauí, power was divided between those who wanted to separate from Portugal and the authorities loyal to the Crown. In Oeiras, the capital, the one in charge was Major João José da Cunha Fidié, a Portuguese, a veteran of the Napoleonic wars, governor of arms.",
        "Parnaíba, on the coast, joined independence on 19 October 1822. Fidié marched there and arrived on 18 December. Meanwhile, in January 1823, Oeiras proclaimed independence under Manuel de Sousa Martins. Fidié went back to the interior, and Campo Maior became the center of resistance, under Leonardo Castelo Branco.",
        { h: "The road to Jenipapo" },
        { timeline: [
          ["19 October 1822", "Parnaíba joins independence."],
          ["18 December", "Fidié arrives at Parnaíba."],
          ["January 1823", "Oeiras proclaims independence."],
          ["12 February", "Captain Luís Rodrigues Chaves arrives at Campo Maior and receives the order to face Fidié."],
          ["13 March", "Battle of Jenipapo."]
        ]},
        "Fidié needed to return to Oeiras before the revolt spread. His route passed through Campo Maior, and the residents resolved to block him."
      ]},
      { n: "02", title: "The main figures", blocks: [
        { h: "João José da Cunha Fidié" },
        "A Portuguese major, described as disciplined and sensible. He was a professional soldier, with trained troops and artillery. His goal was to keep the north of Brazil loyal to the Crown.",
        { h: "The Brazilian commanders" },
        "Luís Rodrigues Chaves, a captain, and João da Costa Alecrim led the resistance. Among the other names appear Inácio Francisco de Araújo Costa, Salvador Cardoso de Oliveira and the Ceará man Alexandre Nereu. The sources differ on some names, and Captain Costa also appears as Francisco Inácio da Costa.",
        { h: "The sertanejos" },
        "The force was an improvised army: [[vaqueiros|vaqueiro]], farmhands, merchants, even councilmen, a judge, old men and teenagers, from Piauí, Ceará and Maranhão. Without uniforms and without training, they fought with scythes, machetes, axes, [[pikes|chuço]], sticks and stones, and with a few hunting guns."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Brazilians numbered about 2,000, according to most sources, with few firearms (one work speaks of 2 cannons). The Portuguese, about 1,600 soldiers with 11 cannons. There are disagreements: one source gives more than a thousand Piauí men and some five hundred Ceará men for the Brazilian side; another gives 1,100 men to Fidié in February.",
        { note: "The numbers for Jenipapo vary from work to work, mainly those of the casualties. We use the most cited ranges and indicate where there is disagreement." },
        { h: "The terrain" },
        "The Jenipapo stream, almost dry, with low scrub and open floodplains, with nowhere to hide. The Brazilians' path forked, and they entrenched themselves without knowing by which side Fidié would come.",
        { h: "The battle" },
        "In the morning, a Brazilian patrol was sent out to probe. Fidié divided his troops into two groups, one for each path: the infantry on the left and the cavalry on the right.",
        "At around 9:00, the Brazilians ran into the Portuguese cavalry on the right. It fell back, and the Brazilians pursued it, abandoning the trenches. Fidié took advantage of the gap.",
        "Fidié crossed the stream on the left, set up barricades, placed the artillery and occupied the trenches the Brazilians had left. The Brazilians attacked from several sides, on the banks of the stream, in hand-to-hand fighting, with many casualties.",
        "At noon, they were exhausted and in no condition to win. At around 14:00, they withdrew in disorder. The Portuguese, worn out and under a strong heat, did not pursue them."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "About 200 Brazilians died and more than 500 were taken prisoner (542, in one count), a third of the improvised army. Portuguese casualties vary: from 16 or 19 dead and 60 wounded to 116 dead, depending on the work.",
        "Fidié spent two days burying the dead and, on 16 March, set out for Estanhado, on the border of Maranhão. Instead of going on to Oeiras, he crossed the Parnaíba and took refuge in Caxias, in Maranhão, where he was besieged. He surrendered on 31 July 1823, was taken to Oeiras, then to Rio de Janeiro and, finally, to Portugal, where he received the Order of Avis.",
        { h: "Why it matters" },
        "The Portuguese won the battle, but Fidié did not manage to restore control of Piauí. The historian Laurentino Gomes called the result 'a victory with the taste of defeat'. The battle showed the willingness to fight for Dom Pedro even without weapons or organization. In Campo Maior, there is a monument and a museum on the site, and the Battalion Cemetery holds the remains of the fighters. The date of 13 March 1823 appears on the flag of Piauí.",
        { h: "Curiosities and controversies" },
        { note: "The baggage: it is said that the Brazilians captured Fidié's baggage. One source attributes this to Nereu's men from Ceará during the retreat; another speaks of an attack on the camp after the battle. There is no consensus." },
        { note: "Tactical defeat, strategic effect: historians separate the Brazilians' defeat on the field from the wider consequences, which weakened the Portuguese presence in Piauí." },
        { note: "The sources: many passages of the accounts of the battle depend on poorly documented texts, and the numbers of dead and of combatants change a great deal from one work to another." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  maipu: {
    terrain: [
      { t: "hill", x: 76, y: 20, rx: 14, ry: 6, l: "Royalist left hill" },
      { t: "note", x: 50, y: 69, l: "Santiago lies behind the patriots" }
    ],
    units: [
      { id: "aLH", s: "a", k: "inf", w: 20, h: 5, l: "Las Heras (right)" },
      { id: "aAlv", s: "a", k: "inf", w: 20, h: 5, l: "Alvarado (left)" },
      { id: "aQui", s: "a", k: "inf", w: 26, h: 4, l: "Reserve (Quintana)" },
      { id: "aArt", s: "a", k: "inf", w: 10, h: 3, l: "Cannons" },
      { id: "aGra", s: "a", k: "cav", w: 9, h: 4, l: "Grenadiers (Zapiola)" },
      { id: "aCaz", s: "a", k: "cav", w: 9, h: 4, l: "Mounted chasseurs (Freire)" },
      { id: "aMil", s: "a", k: "inf", w: 12, h: 3, l: "Militias (O'Higgins)" },
      { id: "bPri", s: "b", k: "inf", w: 20, h: 5, l: "Primo de Rivera (left)" },
      { id: "bMor", s: "b", k: "inf", w: 20, h: 5, l: "Morla (center)" },
      { id: "bOrd", s: "b", k: "inf", w: 20, h: 5, l: "Ordóñez (right)" },
      { id: "bCavR", s: "b", k: "cav", w: 9, h: 4, l: "Royalist cavalry" },
      { id: "bCavL", s: "b", k: "cav", w: 9, h: 4, l: "Royalist cavalry" },
      { id: "bFarm", s: "b", k: "camp", w: 12, h: 5, l: "Lo Espejo farm" }
    ],
    steps: [
      { t: "The patriots occupy the hills, with Las Heras on the right, Alvarado on the left and Quintana's reserve behind. The royalists stand on a rise near Lo Espejo, with Primo de Rivera on the left, Morla in the center and Ordóñez on the right.",
        p: { aLH: [72, 50], aAlv: [28, 50], aQui: [50, 60], aArt: [50, 52], aGra: [88, 50], aCaz: [10, 50], aMil: [14, 65],
             bPri: [74, 17], bMor: [50, 17], bOrd: [26, 17], bCavR: [91, 22], bCavL: [8, 22], bFarm: [50, 6] } },
      { t: "At around 11:30, the cannons on both sides open fire, without casualties. San Martín sees that the royalists have stayed on the defensive and sends Las Heras and Alvarado forward in columns, without firing.",
        p: { aLH: [72, 38], aAlv: [28, 38], aArt: [50, 44], aGra: [88, 38], aCaz: [10, 38] } },
      { t: "Las Heras hits Primo de Rivera and Alvarado hits Ordóñez. Zapiola's grenadiers are repelled by the Spanish cavalry, but come back reinforced and scatter it.",
        p: { aLH: [72, 27], aAlv: [28, 27], aGra: [88, 26], bCavR: [92, 12] }, x: ["bCavR"] },
      { t: "The frontal attack stalls. San Martín releases Quintana's reserve against the center and the flanks. Freire's chasseurs defeat the royalist cavalry on the other side.",
        p: { aQui: [50, 34], aCaz: [10, 24], bCavL: [6, 12] }, x: ["bCavL"] },
      { t: "Las Heras and part of the grenadiers take the hill on the royalist left. With the oblique pressure on the center and the right, the Spanish line splits. Osorio leaves the field and command passes to Ordóñez.",
        p: { aLH: [76, 21], aGra: [88, 16], bPri: [80, 10], aAlv: [34, 22], aQui: [52, 26] }, x: ["bPri"] },
      { t: "Ordóñez gathers the battalions that remain. In squares, they withstand several cavalry charges and fall back in good order to the Lo Espejo farm.",
        p: { bOrd: [42, 10], bMor: [58, 10], aQui: [50, 20], aAlv: [34, 18], aLH: [72, 18] } },
      { t: "The Coquimbo battalion attacks the farm head on and is repulsed. O'Higgins's militiamen reach the field.",
        p: { aMil: [30, 34], aAlv: [36, 16] } },
      { t: "San Martín concentrates about 17 cannons against the houses of Lo Espejo. In the final assault, Ordóñez and Primo de Rivera surrender. The victory is complete.",
        p: { aArt: [50, 18], aQui: [50, 14], aMil: [30, 22] }, x: ["bOrd", "bMor", "bFarm"] }
    ]
  },

  boyaca: {
    terrain: [
      { t: "sea", x: 58, y: 0, w: 4, h: 70, l: "" },
      { t: "hill", x: 50, y: 60, rx: 9, ry: 5, l: "Bolívar's hill" },
      { t: "note", x: 60, y: 5, l: "Teatinos stream" },
      { t: "note", x: 60, y: 34, l: "Bridge" },
      { t: "note", x: 44, y: 46, l: "Casa de Teja" },
      { t: "note", x: 46, y: 3, l: "Samacá road" },
      { t: "note", x: 86, y: 30, l: "Toward Bogotá" },
      { t: "note", x: 8, y: 30, l: "From Tunja" }
    ],
    units: [
      { id: "aRes", s: "a", k: "inf", w: 10, h: 4, l: "Reserve (Bolívar)" },
      { id: "aRear", s: "a", k: "inf", w: 12, h: 4, l: "Rear guard (Anzoátegui)" },
      { id: "aVan", s: "a", k: "inf", w: 12, h: 4, l: "Vanguard (Santander)" },
      { id: "aLan", s: "a", k: "cav", w: 9, h: 4, l: "Lancers (Rondón)" },
      { id: "aGui", s: "a", k: "cav", w: 9, h: 3.5, l: "Casanare guides" },
      { id: "bVan", s: "b", k: "inf", w: 12, h: 4, l: "Vanguard (Jiménez)" },
      { id: "bMain", s: "b", k: "inf", w: 16, h: 4.5, l: "Main body (Barreiro)" },
      { id: "bCav", s: "b", k: "cav", w: 9, h: 4, l: "Cavalry (Sierra)" }
    ],
    steps: [
      { t: "Barreiro leaves Motavita at dawn. Jiménez's vanguard stops to eat near the bridge, while the main body comes along the Samacá road. The patriots arrive from Tunja along the Royal Road: Santander in front, Anzoátegui behind, Bolívar with the reserve.",
        p: { aRes: [8, 36], aRear: [22, 36], aVan: [36, 36], aLan: [22, 46], aGui: [36, 46],
             bVan: [51, 34], bMain: [46, 14], bCav: [32, 16] } },
      { t: "At around 14:00, Captain Ibarra's patrol runs into the Spanish vanguard at Casa de Teja. Santander pushes it back across the bridge.",
        p: { aVan: [46, 36], aRear: [34, 36], bVan: [72, 34] } },
      { t: "Barreiro's main body appears along the Samacá road and runs into Anzoátegui's rear guard. There are two fights at the same time, and the Spanish army is cut in two.",
        p: { bMain: [42, 24], bCav: [30, 24], aRear: [36, 33] } },
      { t: "Rondón attacks the center with the lancers, and the Spanish cavalry falls apart. Barreiro and the officers dismount to try to rally the troops.",
        p: { aLan: [38, 28], bCav: [24, 18] }, x: ["bCav"] },
      { t: "Santander sends the Casanare guides across the stream to attack Jiménez's vanguard from behind. Two Spanish squadrons are defeated.",
        p: { aGui: [72, 44], bVan: [78, 32] } },
      { t: "The battalions of chasseurs and the First of the Line take the bridge. Santander leads a bayonet charge, and Colonel Tolrá dies.",
        p: { aVan: [60, 36], aRes: [34, 38] } },
      { t: "Trapped between the bridge and the guides, Jiménez's vanguard surrenders.",
        p: { aVan: [68, 34] }, x: ["bVan"] },
      { t: "Surrounded, Barreiro's main body surrenders. About 1,600 prisoners, and Barreiro is captured the same day.",
        p: { aRear: [44, 26], aLan: [40, 22], aRes: [40, 32] }, x: ["bMain"] }
    ]
  },

  carabobo: {
    terrain: [
      { t: "hill", x: 50, y: 15, rx: 38, ry: 9, l: "Royalist heights" },
      { t: "note", x: 50, y: 68, l: "Buenavista" }
    ],
    units: [
      { id: "aApu", s: "a", k: "inf", w: 10, h: 4, l: "Bravos de Apure" },
      { id: "aBri", s: "a", k: "inf", w: 9, h: 4, l: "British battalion" },
      { id: "aPCav", s: "a", k: "cav", w: 10, h: 4, l: "Páez's cavalry" },
      { id: "aCed", s: "a", k: "inf", w: 14, h: 4, l: "Cedeño" },
      { id: "aPla", s: "a", k: "inf", w: 14, h: 4, l: "Plaza" },
      { id: "bLin", s: "b", k: "inf", w: 28, h: 5, l: "1st division (García)" },
      { id: "bBur", s: "b", k: "inf", w: 10, h: 4, l: "Burgos" },
      { id: "bVal", s: "b", k: "inf", w: 9, h: 4, l: "Valencey" },
      { id: "bCav", s: "b", k: "cav", w: 10, h: 4, l: "Royalist cavalry" }
    ],
    steps: [
      { t: "La Torre occupies the heights and covers the roads to San Carlos and El Pao. Bolívar examines the position from Buenavista with the divisions of Páez, Cedeño and Plaza.",
        p: { aApu: [28, 62], aBri: [38, 62], aPCav: [16, 62], aCed: [58, 62], aPla: [78, 62],
             bLin: [50, 19], bBur: [34, 9], bVal: [66, 9], bCav: [80, 19] } },
      { t: "Bolívar judges the front and the south inaccessible and shifts the divisions to turn the royalist right. Plaza advances toward the center.",
        p: { aApu: [16, 48], aBri: [26, 48], aPCav: [8, 50], aCed: [40, 52], aPla: [60, 46] } },
      { t: "At around 11:00, the army passes in front of the enemy under fire. Páez, with two battalions and cavalry, crosses a stream and climbs by a trail onto the flank of the royalist right.",
        p: { aApu: [14, 33], aBri: [24, 31], aPCav: [6, 34] } },
      { t: "La Torre sends the Burgos battalion against the Bravos de Apure, who fall back twice.",
        p: { bBur: [20, 22], aApu: [12, 38] } },
      { t: "The British battalion holds the Burgos and loses its commander and more than a dozen officers. This gives the Bravos time to reorganize.",
        p: { aBri: [22, 27], bBur: [22, 21] } },
      { t: "The Bravos counterattack. In Cedeño's division, only part of the Tiradores manages to enter the fight. Cedeño and Plaza die in charges against the enemy infantry.",
        p: { aApu: [14, 27], aCed: [38, 38], aPla: [54, 34] } },
      { t: "The patriot cavalry comes in from the north, and the royalist cavalry withdraws or disobeys. The royalist right collapses.",
        p: { aPCav: [10, 20], bBur: [22, 14] }, x: ["bBur", "bCav"] },
      { t: "The Valencey battalion forms a square and falls back in good order. The rest of the army flees to Valencia and Puerto Cabello. According to Bolívar, some 400 men reach Puerto Cabello.",
        p: { bVal: [68, 3], aApu: [20, 16], aBri: [30, 18], aPla: [56, 22] }, x: ["bLin"] }
    ]
  }
});
