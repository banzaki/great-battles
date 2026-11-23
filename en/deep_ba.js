// In-depth battles, batch ba: vukovar, sarajevo, mosul2017, kyiv2022, bakhmut (contemporary pack).
// Checked against the English, Portuguese and other-language Wikipedia articles on the Battle of Vukovar, the Ovcara
// massacre, the Siege of Sarajevo, the Markale massacres, the Battle of Mosul (2016-2017), the 2017 Mosul airstrike
// (CENTCOM executive summary, 25 May 2017), the Battle of Kyiv (2022), the Kyiv offensive, the Battle of Antonov Airport,
// the battles of Irpin, Makariv and Brovary, the Bucha massacre and the Battle of Bakhmut, plus the ICTY judgments and
// the ICJ ruling of February 2015 those pages cite. Sources were consulted in November 2026. The Ukrainian battles are
// recent: figures are contested, and the text says so.
// Only Kyiv has a diagram (its northern axes are documented). Vukovar, Sarajevo, Mosul and Bakhmut are long sieges or
// attritional urban fights with no reliable step-by-step deployment, so no diagram is drawn for them.

Object.assign(GLOSSARY, {
  "jna": "The Yugoslav People's Army (JNA, in Serbo-Croatian), the army of federal Yugoslavia. In 1991, with a largely Serb officer corps, it went to war against Croatia, which had declared independence.",
  "paramilitares": "Armed fighters who are not part of a regular army but act alongside it, usually under their own leaders. At Vukovar they were Serb militias that fought alongside the JNA.",
  "defesa territorial": "Local reserve forces of the former Yugoslavia, called the TO. In Croatia, local Serb TO units fought together with the JNA.",
  "guarda nacional croata": "The ZNG, formed in 1991 as the first core of the Croatian army. It brought together police officers, former soldiers and volunteers, with few heavy weapons.",
  "tribunal de haia para a ex-iugoslávia": "The ICTY, created by the UN in 1993 to try serious crimes committed in the wars of the former Yugoslavia. It sat in The Hague, in the Netherlands, until 2017.",
  "crimes contra a humanidade": "Serious crimes, such as murder, torture and deportation, committed on a wide or systematic scale against a civilian population.",
  "crime de guerra": "A serious violation of the laws of war, such as killing prisoners or deliberately attacking civilians.",
  "unprofor": "The United Nations Protection Force, the UN peacekeeping mission in the former Yugoslavia between 1992 and 1995. It had little combat power and restrictive rules of engagement.",
  "vrs": "The Army of Republika Srpska, the forces of the Bosnian Serbs, commanded by Ratko Mladić.",
  "arbih": "The Army of the Republic of Bosnia and Herzegovina, the forces of the Bosnian government. At the start of the siege it had far fewer heavy weapons than the enemy.",
  "túnel de sarajevo": "A passage about 800 meters long dug in 1993 under the airport runway, between two neighborhoods of the city. It was Sarajevo's only safe land link with free territory.",
  "estado islâmico": "An armed extremist group that declared a caliphate in 2014 and controlled large areas of Iraq and Syria. Also called IS, ISIS or Daesh.",
  "peshmerga": "The armed forces of Iraq's Kurdish region. In the Mosul offensive they operated mainly in the villages east and north of the city.",
  "serviço de contraterrorismo": "The CTS, Iraq's US-trained elite force, known as the Golden Division. It was on the front line in the fighting in Mosul.",
  "carro-bomba": "A vehicle loaded with explosives and driven by a suicide attacker or by remote control against a troop or position. IS used hundreds of them in Mosul.",
  "escudo humano": "The use of civilians to protect fighters or positions from attack. It is forbidden by the laws of war.",
  "forças de mobilização popular": "A coalition of militias, mostly Shia, that fought alongside the Iraqi army against IS. At Mosul it operated mainly west of the city.",
  "tropas aerotransportadas": "Soldiers trained to reach combat by parachute or helicopter. In Russia they make up the VDV.",
  "defesa territorial ucraniana": "A force of volunteers and reservists in Ukraine, created to defend its cities. In 2022 it received thousands of light weapons in the first days of the invasion.",
  "míssil antitanque": "A portable missile that a soldier fires from the shoulder against an armored vehicle. The Javelin and NLAW, sent by Western countries, were widely used in the defense of Kyiv.",
  "grupo wagner": "A Russian private military company that operated in Syria, Africa and Ukraine. Its chief, Yevgeny Prigozhin, recruited prisoners from Russian jails in 2022. After a mutiny in June 2023 and Prigozhin's death in a plane crash that August, the group was broken up and absorbed by the Russian state.",
  "drone": "A small aircraft with no pilot on board, controlled remotely. In the war in Ukraine it is used to observe positions and, with explosives, to attack.",
  "semicerco": "A situation in which the enemy controls almost all the roads into a city but leaves one or two open."
});

Object.assign(DEEP, {
  vukovar: {
    war: "Croatian War of Independence (1991–1995)",
    hook: "A town on the Danube held out 87 days against the federal army and was destroyed.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1991, Yugoslavia was falling apart. Slovenia and Croatia declared independence in June. Croatia had a large Serb minority, and part of it, backed by Belgrade, refused to leave Yugoslavia and set up regions of its own. In May, Croatia had voted for independence in a referendum, with 94% in favor.",
        "Vukovar lies in eastern Croatia, in the region of Slavonia, on the Danube, with the border with Serbia a few kilometers away. The 1991 census counted 84,189 people in the municipality: 44% Croats and 38% Serbs. There had been Serb barricades around the town since April. On 2 May, in the neighboring village of Borovo Selo, Serb paramilitaries ambushed Croatian police officers, killing 12 and wounding 22.",
        { h: "The road to the siege" },
        { timeline: [
          ["1 Apr 1991", "Serb barricades appear near Vukovar."],
          ["2 May", "Ambush at Borovo Selo: 12 Croatian police officers killed."],
          ["23–24 Aug", "Heavy shelling of Borovo Naselje and the start of the JNA attack with armor, aircraft and navy."],
          ["Late September", "The town is almost encircled."],
          ["30 Oct", "A coordinated assault by the JNA and the paramilitaries begins."],
          ["18 Nov", "The last defenders of the center surrender."],
          ["20 Nov", "Prisoners from the hospital are executed at the Ovčara farm."]
        ]},
        "The attack came from the [[JNA|jna]], the federal army, with support from Serb [[paramilitaries|paramilitares]] and local units of the [[Territorial Defense|defesa territorial]]. Croatia did not yet have a real army."
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Mile Dedaković, 'Jastreb'" },
        "Head of the town's defense. He gathered the 1,800 men of the [[Croatian National Guard|guarda nacional croata]], police officers and volunteers, and organized house-to-house resistance. His second-in-command was Branko Borković. Outside the town, the Croatian commander Anton Tus tried to break the siege and supply Vukovar.",
        { h: "The JNA commanders" },
        "Aleksandar Spirkovski was the first commander of the attacking force, and Života Panić took over in late September. Mile Mrkšić led the troops of the southern sector, and Major Veselin Šljivančanin was one of the officers most involved in the events after the surrender. Among the paramilitaries appear Željko Ražnatović, known as Arkan, and Vojislav Šešelj.",
        "The defenders were few and poorly armed: about 400 from the 3rd Guards Brigade, 300 police officers and 1,100 civilian volunteers. About 100 were Serbs, and up to a third were not Croats."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The number of attackers is uncertain. A source cited on Wikipedia reaches 36,000 soldiers and paramilitaries at the peak, with tanks, artillery, aircraft and ships on the river. The defenders had few heavy weapons and very little ammunition.",
        { h: "The terrain" },
        "Vukovar is a low-lying town of narrow streets, blocks of houses and apartment buildings, with the Vuka River cutting through the middle and the Danube to the south. The suburb of Borovo Naselje lay north of the center.",
        { h: "The siege" },
        "In August, the JNA attacked with continuous bombardment and tried to enter the town with armored columns. The defenders used the town itself: basements, street corners and mines. On 14 September, Croatian forces began an offensive against the JNA barracks (the 'Battle of the Barracks'), but the barracks in Vukovar held. On 19 and 20 September, a column of at least 100 tanks crossed the border from the Serbian side.",
        "On 1 October, the loss of Marinci cut the Croatian supply route. On 13 October, a Croatian counteroffensive stopped at Nuštar. The town lived in darkness, without water, under constant fire. Sources cite more than 700,000 projectiles and up to 12,000 a day; the hospital is said to have taken more than 800 hits. On 12 October, only one humanitarian convoy got in, and it took out 114 wounded.",
        { h: "The final assault" },
        "On 30 October, the JNA and the paramilitaries launched the coordinated attack. On 2 and 3 November, they reached Lužac and crossed the Danube in boats. On 9 November Milova Brda fell; on 10 November, Bogdanovci, where up to 87 civilians are said to have been killed afterward. On 13 November, the last link between Borovo Naselje and Vukovar was cut. On 18 November, the defenders of the center surrendered. There was scattered fighting until about 20 November, and some soldiers got out of the town until 23 November.",
        { note: "According to Wikipedia, the bombardment of Vukovar was said to have been more intense than that of Stalingrad. It is an estimate cited in the literature, and the comparison is contested: what is certain is that the destruction was enormous." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Ovčara" },
        "On 20 November, about 300 people were taken from the hospital in buses and driven to a JNA barracks and then to the Ovčara farm. There, the JNA military police withdrew, and local territorial defense units and paramilitaries beat and shot the prisoners in groups of 10 to 20. The bodies were thrown into a mass grave. The count ranges from about 200 (bodies exhumed from the grave in 1996) to 261 (a Croatian figure that includes another grave). In 2007, the [[Hague tribunal for the former Yugoslavia|tribunal de haia para a ex-iugoslávia]] sentenced Mile Mrkšić to 20 years and Veselin Šljivančanin to 5, later raised on appeal and reduced again (17 and then 10 years). Miroslav Radić was acquitted. In 2015, the International Court of Justice ruled that Vukovar and the massacre did not amount to genocide, but confirmed that serious crimes were committed by the JNA and Serb paramilitaries.",
        { h: "The losses" },
        "The numbers are contested. One estimate puts the total at about 3,000 dead. On the Croatian side, the Ministry of Defense cited 879 dead in 2006; early Croatian counts spoke of 1,798, soldiers and civilians. On the side of the JNA and the Serbs, sources give 1,103 to 1,180 dead. About 2,600 people went missing, and in November 2017 more than 440 had still not been found. At least 20,000 residents were expelled.",
        { h: "What changed" },
        "The town remained under Serb control until 1998, when the Erdut Agreement led to peaceful reintegration into Croatia after a UN administration. In 2001, the municipality had 31,670 inhabitants, less than half its prewar total. Vukovar's water tower was kept damaged as a memorial and, once restored, reopened to the public in October 2020.",
        { note: "The battle cost the JNA a great deal of time and strength, and it was a turning point in the war: a ceasefire came weeks later. For Croats, Vukovar became the greatest symbol of resistance and suffering." }
      ]}
    ]
  },

  sarajevo: {
    war: "Bosnian War (1992–1995)",
    hook: "For 1,425 days, a European capital lived under the heavy weapons planted on the hills around it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Sarajevo, the capital of Bosnia and Herzegovina, lay in a narrow valley ringed by hills and mountains. It was a mixed city, of Bosniak Muslims, Serbs, Croats and others, and had hosted the 1984 Winter Olympics. The 1991 census counted 525,980 people in the city and its surroundings.",
        "In March 1992, Bosnia voted for independence from Yugoslavia, in a referendum boycotted by most Serbs. The Bosnian Serb leaders, among them Radovan Karadžić, proclaimed a republic of their own, Republika Srpska, and their forces, helped by the JNA, took positions on the hills around the capital.",
        { h: "The road to the siege" },
        { timeline: [
          ["March 1992", "Bosnia's independence referendum."],
          ["5 Apr 1992", "The siege begins. That day the JNA seizes the airport."],
          ["25–26 Aug 1992", "The National Library and the City Hall of Sarajevo are set on fire by artillery."],
          ["5 Feb 1994", "First Markale market massacre: about 68 dead."],
          ["28 Aug 1995", "Second Markale massacre: 43 dead."],
          ["30 Aug to 20 Sep 1995", "Operation Deliberate Force: NATO air strikes."],
          ["14 Dec 1995", "Signing of the peace agreement in Paris (the Dayton Agreement)."],
          ["29 Feb 1996", "The Bosnian government declares the siege over."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "The besiegers" },
        "Radovan Karadžić was the political leader of the Bosnian Serbs, and Ratko Mladić commanded the [[VRS|vrs]]. In Sarajevo, the Sarajevo-Romanija Corps was commanded by Stanislav Galić and, from 1994, by Dragomir Milošević. Both were convicted by the Hague tribunal for campaigns of sniping and shelling against civilians.",
        { h: "The defenders" },
        "The [[ARBiH|arbih]], the government's army, was commanded by Rasim Delić. Inside the city there were about 70,000 fighters, counting soldiers, militias and police, but with few heavy weapons. About 13,000 Serb soldiers surrounded the city at the start, according to Wikipedia. The VRS is said to have had about 23,000 men in total, 100 tanks and 1,700 artillery pieces, mortars and launchers."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The terrain" },
        "The hills around the city, among them Trebević and Igman, gave the besiegers a view of the neighborhoods, the streets and the bridges. The main road leading to the airport became known as 'Sniper Alley', because crossing it meant risking a bullet.",
        { h: "The siege" },
        "An estimated 500,000 projectiles were fired at the city. Residents faced shortages of water, electricity and heating and had to cross streets exposed to fire. The Olympic stadium and other sports grounds became cemeteries. On 25 and 26 August 1992, the National Library was destroyed by incendiary shells: more than 1.5 million volumes and about 700 manuscripts were lost, according to Wikipedia.",
        "The [[UNPROFOR|unprofor]] took over the airport on 29 June 1992 and, through an [[airlift|ponte aérea]] of more than 13,000 flights over more than three years, brought food and medicine. In 1993, the defenders dug the [[Sarajevo Tunnel|túnel de sarajevo]], which linked the city to free territory beneath the airport runway.",
        { h: "Markale and the turning point" },
        "On 5 February 1994, a shell landed in the Markale market, killing about 68 people and wounding more than a hundred. The Hague tribunal concluded that the shot came from Bosnian Serb positions. On 28 August 1995, a second shell killed 43 and wounded 73 in the same market, and the tribunal also attributed the shot to the VRS. Two days later, NATO began Operation Deliberate Force, with up to 400 aircraft, which lasted until 20 September. The ceasefire came in October, and the Dayton Agreement at the end of the year.",
        { note: "Who fired at Markale was disputed at the time. The International Criminal Tribunal for the former Yugoslavia, after examining the evidence, attributed both attacks to Bosnian Serb forces, and the two commanders were convicted." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The deaths" },
        "The counts differ. The Sarajevo Research and Documentation Center counts 13,952 dead, among them 5,434 civilians killed or missing (including 1,601 children), and about 56,000 wounded. The VRS had 2,241 dead, and the ARBiH, 6,137. Other counts, such as one from a report linked to the Hague tribunal, give similar numbers for civilians, close to 4,950. The Bosnian government declared the siege over on 29 February 1996, when Bosnian Serb forces left their positions. More than 70,000 Serbs of Sarajevo left the city after that.",
        { h: "The trials" },
        "The [[Hague tribunal for the former Yugoslavia|tribunal de haia para a ex-iugoslávia]] convicted four officials of crimes linked to the siege. Stanislav Galić was sentenced in 2003 to 20 years for [[crimes against humanity|crimes contra a humanidade]], including acts of terror against the civilian population, and the sentence rose to life in prison on appeal, in 2006. Dragomir Milošević got 33 years in 2007, reduced to 29 on appeal. Radovan Karadžić received 40 years in 2016, increased to life in prison in 2019. Ratko Mladić was sentenced to life in prison in 2017, on 10 counts, among them those related to Sarajevo.",
        { note: "The siege of Sarajevo lasted nearly twice as long as that of Leningrad and is described by Wikipedia as the longest siege of a capital in modern warfare." }
      ]}
    ]
  },

  mosul2017: {
    war: "War against the Islamic State in Iraq (2014–2017)",
    hook: "Months of street fighting, house by house, to retake Iraq's second-largest city.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Mosul, in northern Iraq, had about 2.5 million inhabitants, and the Tigris River cuts it into two parts, the east and the west. In June 2014, between 800 and 1,500 fighters of the [[Islamic State|estado islâmico]] took the city, while part of the Iraqi army fled. Two years of IS rule reduced the population to about 1.5 million.",
        { h: "The road to the offensive" },
        { timeline: [
          ["Jun 2014", "IS takes Mosul."],
          ["16 Oct 2016", "Prime Minister Haider al-Abadi announces the offensive."],
          ["1 Nov 2016", "Iraqi troops enter the city."],
          ["24 Jan 2017", "Abadi declares the east of the city free."],
          ["19 Feb 2017", "The offensive on west Mosul begins."],
          ["17 Mar 2017", "An American air strike in the al-Jadida neighborhood kills more than 100 civilians."],
          ["21 Jun 2017", "The al-Nuri mosque is destroyed."],
          ["9–10 Jul 2017", "Abadi declares victory."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "The Iraqi side" },
        "Lieutenant General Abdul Amir Yarallah commanded the operation. The army, the federal police and the [[Counter Terrorism Service|serviço de contraterrorismo]] made up the bulk of the troops, with the Kurdish [[peshmerga|peshmerga]] and the [[Popular Mobilization Forces|forças de mobilização popular]] on fronts of their own. The US-led coalition provided air support, artillery and about 450 advisers. The American general Stephen Townsend, who commanded the coalition, described the battle as the most significant urban combat since World War II.",
        { h: "The Islamic State" },
        "IS's military commander in Mosul was Ahmad Khalaf al-Jabouri. Estimates of the number of fighters vary widely: from 3,000 to 5,000 (US Department of Defense) to 8,000 and 9,000 (the Mosul Eye blog), with more than 1,000 foreigners."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "In all, the forces against IS numbered between 94,000 and 114,000 men, according to Wikipedia, which cites CNN estimates: 54,000 to 60,000 from the army and police, about 40,000 peshmerga and 14,000 to 16,000 from the Popular Mobilization Forces. IS had between 6,000 and 12,000 fighters, depending on the source.",
        { h: "The east" },
        "The offensive began on 16 October 2016 in the villages around the city. By 3 December, Iraqi and Kurdish forces had already taken 5,677 km², including 369 villages. IS dug tunnels, mined villages and launched [[car bombs|carro-bomba]] against the columns. The fight in the east was slow, and on 24 January 2017 Abadi declared the east side free.",
        { h: "The west and the old city" },
        "The second phase, in the west, began on 19 February 2017. The old city, with very narrow streets, prevented the use of armored vehicles, and the soldiers advanced on foot. IS used civilians as [[human shields|escudo humano]]: on 21 October 2016, an Iraqi intelligence source said the group executed 284 men and boys abducted for that purpose. The US also accused IS of using civilians this way.",
        "On 17 March 2017, an American aircraft dropped a GBU-38 bomb on two IS snipers in the al-Jadida neighborhood. According to the investigation by US Central Command, released on 25 May, explosives planted by IS in the building detonated and the building collapsed, killing 105 civilians. Amnesty International and other sources consider the toll higher.",
        "On 21 June, the great al-Nuri mosque, from the twelfth century, was destroyed. The Iraqi army said IS blew it up when its troops were about 50 meters away; IS said it was an American air strike. The prime minister called the event an official acknowledgement of defeat. Abadi announced victory on 9 July and confirmed it on 10 July. There were pockets of resistance in the old city until about 20 July."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The losses" },
        "The numbers are contested and come from sources that measure different things. Iraqi forces: 1,200 to 1,400 dead and more than 6,000 wounded, according to the estimates cited by Wikipedia; a report in the newspaper The New Arab says the Counter Terrorism Service lost about 40% of its men. IS: from 7,757 to 25,000 dead, according to Iraqi commanders, with no independent count. Civilians: the UN documented at least 2,521 dead in a report of November 2017, including about 741 executions carried out by IS; an Associated Press investigation estimated 9,000 to 11,000 residents killed, with at least 3,200 by Iraqi and coalition air strikes and artillery, and about a third by IS; a list from a Mosul morgue held 9,606 names. The coalition acknowledged 326 civilians killed.",
        { h: "The city" },
        "Between 920,000 and 1.07 million people were displaced, according to the UN and the International Organization for Migration. The UN estimated more than 5,000 buildings damaged and 490 destroyed in the old city alone, and said repairing basic infrastructure would cost more than 1 billion dollars. Amnesty International accused both sides of violations, among them unlawful attacks in the west with imprecise explosive weapons.",
        { note: "The al-Nuri mosque was where Abu Bakr al-Baghdadi proclaimed the caliphate, in 2014. Who destroyed it is contested, but satellite images confirm the damage." }
      ]}
    ]
  },

  kyiv2022: {
    war: "Russian invasion of Ukraine (since 2022)",
    hook: "Russia expected to take Kyiv in a few days, but its columns sat stalled on the roads north of the city.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 24 February 2022, Russia invaded Ukraine on several fronts: from the south, from the east and from the north, out of Belarus. The initial goal, according to most analysts, was to take Kyiv and overthrow the government. It was often summed up as a 'three-day' operation. In January, the CIA had already warned Ukraine that Russia planned to seize Hostomel airport, about 10 km from the capital.",
        "This is a recent war. The sources consulted here date from November 2026, and the facts are still being established: many figures come from one of the parties and have not been independently confirmed.",
        { h: "The road to the battle" },
        { timeline: [
          ["24 Feb 2022", "Invasion. Russian helicopters attack Hostomel airport."],
          ["25 Feb", "Russian columns take the airport."],
          ["27–28 Feb", "Fighting in Irpin, Bucha and Makariv. A column of about 64 km is seen by satellite."],
          ["4–10 Mar", "The Russians reach Brovary, to the east. On 10 March, a Ukrainian ambush at Skybyn destroys part of a column."],
          ["22 Mar", "Ukrainian counteroffensive at Makariv."],
          ["29 Mar", "Russia announces it will reduce activity near Kyiv and Chernihiv."],
          ["2 Apr", "Ukraine declares the whole Kyiv region recovered."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "On the Ukrainian side" },
        "President Volodymyr Zelensky stayed in Kyiv, and the commander in chief, Valerii Zaluzhnyi, and General Oleksandr Syrskyi, who commanded the defense of the capital, directed the defense. The [[Ukrainian Territorial Defense|defesa territorial ucraniana]] received more than 25,000 rifles by 26 February. The National Guard (4th Rapid Reaction Brigade), the 72nd Mechanized Brigade, the 14th and 95th brigades, among others, played central roles.",
        { h: "On the Russian side" },
        "The Russian forces included [[airborne troops|tropas aerotransportadas]] (the VDV), motorized brigades and Russian national guard units, in a plan that counted on a quick fall of the Ukrainian government. In 2024, President Vladimir Putin said there had never been a political decision to storm Kyiv; that version is contested by the Ukrainian and Western governments and by analysts."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The exact numbers are unknown. Widely cited estimates speak of 15,000 to 30,000 Russian soldiers on the Kyiv front, but sources diverge, and Russia has not published its own. On the Ukrainian side, Ukraine states that 162 of its soldiers died and 748 were wounded in the battle of Kyiv, and that 89 civilians were killed; these figures are Ukrainian and have not been independently verified.",
        { h: "Hostomel" },
        "On 24 February, at around 9:30, between 20 and 34 helicopters left Belarus with about 200 to 300 paratroopers (sources cite the 31st Air Assault Brigade and the 45th Special Forces Brigade). The Ukrainian garrison had between 200 and 300 National Guard troops. After an hour of fighting, it fell back. Near the end of the day, a Ukrainian counteroffensive, with air support, pushed the Russians back. The Antonov An-225 Mriya aircraft was destroyed in its hangar. On 25 February, mechanized columns from Belarus and a second landing took the airport. The Russians planned to land 18 Il-76 transport aircraft with reinforcements, but they could not land. The airport was never used as a landing strip. Russian casualties are contested: Ukraine speaks of 300 to 500 paratroopers killed, and the New York Times, citing officials and a captured logbook, of about 300.",
        { h: "The northern roads" },
        "The column from Belarus came down through Chernobyl and Pripyat and was held up near Ivankiv. Ukrainians blew up bridges, such as the one at Irpin, on 25 February, and a dam was opened north of Kyiv, flooding an area. On 28 February, the column reached about 64 km, according to satellite images, and sat stalled for days, short of fuel and food. Some analysts attribute the stall to logistics, the lack of air superiority and the sabotage of railways in Belarus.",
        "In Irpin, the battle began on 27 February. On 6 March, the Russians took part of the town. On the evacuation road, on 6 March, eight civilians were killed by mortars. It is estimated that nearly 70% of the town was heavily damaged or destroyed. At Makariv, to the west, the fighting began on 27 February and lasted weeks. The Russian 37th Brigade is said to have lost nearly half of its men, according to a source cited on Wikipedia.",
        { h: "The east and Chernihiv" },
        "In the east, the Russians reached Brovary on 4 March. On the night of 9 March, a column with tanks of the 90th Division entered the area, without infantry support, and on 10 March it was ambushed at Skybyn by the 72nd Brigade, with artillery and [[antitank missiles|míssil antitanque]]. According to Ukrainian sources, 19 tanks and other vehicles were destroyed and up to 55 soldiers died, while Ukraine lost one soldier. Chernihiv was encircled, according to its mayor, on 10 March, but held out.",
        { formation: true },
        { h: "The withdrawal" },
        "On 22 March, Ukraine launched a counteroffensive. On 25 March, a British report said that towns up to 35 km away had been retaken. Irpin was declared recovered on 28 March. On 29 March, Russia announced it would reduce activity near Kyiv and Chernihiv. On 2 April, Ukraine declared the whole Kyiv region recovered. For Russia, it was a 'regrouping'; for Ukraine and Western countries, a defeat. A Pentagon spokesman summed it up: 'They wanted Kyiv and they didn't get it.'"
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Bucha" },
        "After the Russians left, the bodies of civilians were found in Bucha, in the streets and in mass graves. Ukrainian local authorities recovered 458 bodies from Bucha by August 2022. The UN Human Rights Office documented at least 73 civilians unlawfully killed, including summary executions, and another 105 deaths under investigation (data from December 2022). A New York Times investigation attributed Yablunska Street to paratroopers of the 234th Air Assault Regiment, and the Associated Press tied the occupation to the 76th Division. Russia denies it and calls the case 'staged', which satellite images from a private company, released in April 2022, contradict: they show bodies in the street in March, while the Russians occupied the town.",
        { h: "The losses" },
        "They are in dispute. Ukraine says 162 of its soldiers died at Kyiv, and speaks of much larger Russian losses, without independent proof. The Russians have not presented figures. About 2 million people left the capital, according to Mayor Vitali Klitschko, about half of its inhabitants.",
        { note: "As in every ongoing war, the numbers here come from communiqués, governments and journalists, not from archives. They change over time, and historians are likely to revise them when the archives of both sides are opened." }
      ]}
    ]
  },

  bakhmut: {
    war: "Russian invasion of Ukraine (since 2022)",
    hook: "A town of miners became, for months, the place where Russians and Ukrainians tested how much loss they could bear.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Bakhmut, in the Donetsk region, had about 70,000 to 80,000 inhabitants before the war (sources differ) and was known for salt, gypsum and a sparkling wine. After the fall of Sievierodonetsk and Lysychansk in the summer of 2022, it became the next Russian target in the Donbas. The road that crosses it leads to Kostiantynivka, Kramatorsk and Sloviansk.",
        "This is a recent war. The sources consulted here date from November 2026, and the facts are still being established. Almost all the figures come from one of the parties.",
        { h: "The road to the battle" },
        { timeline: [
          ["May 2022", "Shelling of the town begins."],
          ["Jul–Aug 2022", "The Russians advance, and the Wagner Group reaches the eastern outskirts."],
          ["Nov 2022", "The front becomes trench warfare, with many casualties."],
          ["Jan 2023", "The Russians take Soledar."],
          ["Mar 2023", "Ukraine falls back to the east bank of the Bakhmutka River."],
          ["6 Apr 2023", "The Russians take the center of the town."],
          ["20 May 2023", "Wagner announces the capture of the town."]
        ]}
      ]},
      { n: "02", title: "Protagonists", blocks: [
        { h: "Yevgeny Prigozhin" },
        "Head of the [[Wagner Group|grupo wagner]], a Russian private military company. In 2022, he recruited prisoners from the country's jails, who were given their freedom in exchange for six months of combat. He said he had employed 35,000 fighters and 50,000 prisoners. He complained publicly about the lack of ammunition and about the Ministry of Defense. In June 2023, Wagner mutinied, and Prigozhin died in August 2023, in a plane crash.",
        { h: "Oleksandr Syrskyi" },
        "The Ukrainian general who commanded the defense. His soldiers called him 'Butcher' and 'General 200', a reference to 'Cargo 200', the Soviet code for the dead, because of the high casualties his tactics are said to have caused. It was a criticism from soldiers, and there are analysts who defend his decision to hold the town. It was described by analysts as the tactic of 'not one inch back'."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The numbers are very uncertain. Wikipedia cites more than 85,000 Wagner fighters on the Russian side and more than 30,000 Ukrainian soldiers, but Prigozhin went as far as speaking of 80,000 Ukrainians. Ukraine defended the town with a changing group of brigades, among them the 93rd and the 58th, later reinforced by special forces and territorial defense units.",
        { h: "The terrain" },
        "The town lies on a plain cut by the Bakhmutka River, among factories, gypsum mines and blocks of Soviet-era apartment buildings. Soledar lies to the north, and Chasiv Yar to the west.",
        { h: "The front" },
        "The fight began with artillery bombardment and slow advances. Wagner attacked in waves of infantry, often made up of former prisoners, supported by artillery. The Ukrainians answered with [[artillery|artilharia]], [[drones|drone]] and mines, and the front became a [[war of attrition|guerra de atrito]]. In January 2023, the Russians took Soledar. By 22 February, they had partially encircled the town, and in March the Ukrainians fell back to the east bank of the Bakhmutka. On 6 April, the Russians were in the center.",
        "In May 2023, Ukraine attacked the flanks of the town, and Prigozhin announced the capture on 20 May. Ukraine said it still held positions and described a situation of [[semi-encirclement|semicerco]] for the Russians on 21 May. Wagner began to leave on 25 May, and on 1 June about 90 men of the group remained. Regular Russian troops took over the rest.",
        { note: "Russia declared the town captured on 20 May 2023, and Ukraine disputed full control in the first days. According to analysts, each side thought that attrition favored it, and who paid the greater price is still debated." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "The losses" },
        "The numbers are the most contested of this war, and vary with who speaks and when. On the Russian side and Wagner's: on 1 May 2023, the US National Security Council spoke of more than 20,000 dead and 80,000 wounded since December 2022, half of them from Wagner; on 24 May 2023, Prigozhin spoke of more than 20,000 Wagner dead; the British Ministry of Defence estimated 60,000 Russians killed or wounded around the town since May 2022; President Biden said in May 2023 'more than 100,000' casualties. A count by the BBC's Russian service and Mediazona, based on obituaries, found, in June 2024, 19,547 Wagner dead, 17,175 of them former prisoners. On the Ukrainian side, the UALosses project documented 6,382 soldiers killed between July 2022 and May 2023, a count that includes only confirmed names and is therefore a floor. A German report says some Ukrainian companies lost more than 80% of their soldiers.",
        { h: "The town" },
        "Mayor Oleksii Reva said, on 31 May 2023, that 204 residents had died and 505 been wounded since the start of the invasion, and that about 500 people still lived in the town. President Zelensky compared the destruction to Hiroshima.",
        { h: "What changed" },
        "Analysts debate whether the town had strategic value. The British Ministry of Defence and the US government called it a 'symbolic' victory for Russia; others point out that it was a road junction. Wagner was pulled from the front after the battle. Ukraine recovered some nearby villages in September 2023, and Russia retook Khromove in November. It was the largest Ukrainian town to change hands in 2023.",
        { note: "The figures for the outcome are the most uncertain of the whole war: each government has reasons to inflate the other's losses and hide its own. When the conflict ends and the archives are opened, these numbers will probably change." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  kyiv2022: {
    terrain: [
      { t: "sea", x: 58, y: 42, w: 3, h: 30, l: "Dnipro River" },
      { t: "note", x: 50, y: 3, l: "Belarus" },
      { t: "note", x: 38, y: 26, l: "Chernobyl" },
      { t: "note", x: 72, y: 20, l: "Chernihiv" },
      { t: "note", x: 56, y: 62, l: "Kyiv" }
    ],
    units: [
      { id: "rAir", s: "a", k: "inf", w: 6, h: 3, l: "Paratroopers (Hostomel)" },
      { id: "rW", s: "a", k: "inf", w: 10, h: 3, l: "Western axis: Ivankiv, Bucha, Irpin" },
      { id: "rM", s: "a", k: "inf", w: 7, h: 3, l: "Makariv group (37th Brigade)" },
      { id: "rC", s: "a", k: "inf", w: 3, h: 14, l: "Column of ≈ 64 km" },
      { id: "rE", s: "a", k: "inf", w: 8, h: 3, l: "Eastern axis: Brovary" },
      { id: "rCh", s: "a", k: "inf", w: 8, h: 3, l: "Chernihiv front" },
      { id: "uHo", s: "b", k: "inf", w: 6, h: 3, l: "National Guard (Hostomel)" },
      { id: "uIr", s: "b", k: "inf", w: 8, h: 3, l: "Defenders of Irpin and Bucha" },
      { id: "uMa", s: "b", k: "inf", w: 7, h: 3, l: "14th and 95th brigades (Makariv)" },
      { id: "uBr", s: "b", k: "inf", w: 7, h: 3, l: "72nd Brigade (Brovary)" },
      { id: "uCh", s: "b", k: "inf", w: 7, h: 3, l: "Defenders of Chernihiv" },
      { id: "uKy", s: "b", k: "inf", w: 10, h: 4, l: "Defense of Kyiv" }
    ],
    steps: [
      { t: "24 February 2022. The Russians enter through Belarus, to the north. They have one axis west of the Dnipro, toward Kyiv, another to the east, toward Brovary and Chernihiv, and paratroopers to take the airport. The Ukrainians guard the airport, the bridges and the city.",
        p: { rAir: [46, 12], rW: [42, 8], rM: [36, 10], rC: [48, 20], rE: [64, 8], rCh: [72, 10],
             uHo: [50, 44], uIr: [47, 48], uMa: [38, 50], uBr: [66, 50], uCh: [72, 24], uKy: [54, 56] } },
      { t: "24 February, morning. Helicopters carry paratroopers to Hostomel airport, about 10 km from Kyiv. The garrison, of 200 to 300 National Guard troops, resists for about an hour and falls back.",
        p: { rAir: [50, 41], uHo: [52, 46] } },
      { t: "24 February, night. A Ukrainian counteroffensive, with air support, pushes the paratroopers back into the forests. The An-225 aircraft is destroyed in its hangar. The Russian reinforcements by air cannot land.",
        p: { uHo: [50, 42], rAir: [46, 38] } },
      { t: "25 February. Mechanized columns from the north, with a new landing, take the airport. Bridges are blown up at Irpin, and a dam is opened, which slows the Russians.",
        p: { rW: [46, 36], rAir: [50, 41], uIr: [47, 47] } },
      { t: "27 February to early March. The fighting for Irpin, Bucha and Makariv begins. The column of the western axis, about 64 km long, sits stalled on the roads to the north, with problems of fuel and food.",
        p: { rW: [47, 42], rM: [40, 46], rC: [46, 24], uIr: [47, 47], uMa: [38, 51] } },
      { t: "Early March. In the east, the Russians reach Brovary. On 10 March, the 72nd Brigade ambushes at Skybyn a column of tanks without infantry. According to Ukrainian sources, 19 tanks were destroyed or damaged.",
        p: { rE: [64, 42], uBr: [65, 46], rCh: [72, 19] } },
      { t: "Mid-March. Chernihiv is encircled but holds out. The front stalls north of Kyiv, and the city is not encircled.",
        p: { rE: [64, 36], rCh: [72, 21], uCh: [72, 25] } },
      { t: "22 to 28 March. Ukraine counterattacks. Ukraine announces the liberation of Makariv on 22 March (the town remained partly contested for days) and that of Irpin on 28 March, and the Russians are pushed back.",
        p: { rW: [46, 36], rM: [38, 40], uIr: [47, 42], uMa: [38, 46], rAir: [50, 38] } },
      { t: "29 March to 2 April. Russia announces a reduction of activity near Kyiv and pulls back toward Belarus. On 2 April, Ukraine declares the region recovered.",
        p: { rAir: [46, 14], rW: [42, 10], rM: [36, 12], rC: [48, 14], rE: [64, 12], rCh: [72, 12], uHo: [50, 42], uIr: [47, 40], uMa: [38, 44], uBr: [65, 40] } }
    ]
  }
});
