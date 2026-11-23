// In-depth battles, batch az: sinai1967, hue, fazendachinesa, khorramshahr, cuitocuanavale (contemporary wars pack).
// Checked against the English Wikipedia articles on the Six-Day War, the Battle of Abu-Ageila, the Battle of Hue and the
// Massacre at Hue, the Battle of the Chinese Farm, the Battle of Khorramshahr (1982), Operation Beit ol-Moqaddas, the
// Iran-Iraq War and the Battle of Cuito Cuanavale, plus the works those pages cite (Pike, Willbanks, Bowden, Karsh,
// Pollack, Razoux, Polack, Herbst, Vanneman, Hampson). Where sources or the two sides disagree the text says so.
// Diagrams: Sinai, Hue and the Chinese Farm. Khorramshahr and Cuito Cuanavale have no diagram because the sources
// consulted do not describe their deployments and moves in enough detail.

Object.assign(GLOSSARY, {
  "estreito de tiran": "A narrow passage between Sinai and Saudi Arabia, at the mouth of the Gulf of Aqaba. It is the only way out to the Red Sea for the Israeli port of Eilat.",
  "força de paz da onu": "UN troops (UNEF) stationed in Sinai and Gaza after the 1956 crisis to stand between Egypt and Israel. Egypt asked for them to leave in May 1967.",
  "ataque preventivo": "An attack launched before the enemy attacks, to stop it. The attacker says it was defense, and the victim says it was aggression. Historians disagree about each case.",
  "centurion": "A British tank with a 105 mm gun, widely used by Israel in 1967.",
  "t-34": "A Soviet tank from the Second World War. The T-34/85, with an 85 mm gun, was still serving in the Egyptian army in 1967.",
  "caça-tanques": "An armored vehicle with a powerful gun and no rotating turret, built to destroy tanks. The Egyptian SU-100 was one.",
  "meia-lagarta": "A military vehicle with wheels in front and tracks behind, used to carry soldiers over rough ground.",
  "tet": "The Vietnamese lunar New Year, the country's biggest festival, with a truce agreed between the sides. In 1968, the communists attacked during it.",
  "ofensiva do tet": "A simultaneous attack by North Vietnam and the Viet Cong, from 30 and 31 January 1968, on dozens of cities and bases in the South. It failed militarily, but it shook the confidence of the American public.",
  "vietcongue": "Communist guerrillas of South Vietnam, allies of North Vietnam.",
  "pavn": "The People's Army of Vietnam, the regular troops of North Vietnam (PAVN).",
  "arvn": "The Army of the Republic of Vietnam, the regular troops of South Vietnam, an ally of the United States.",
  "macv": "The U.S. Military Assistance Command, Vietnam, which directed the American presence. In Huế, the MACV compound housed about a hundred advisers.",
  "cidadela de huế": "A walled enclosure on the north bank of the Perfume River, about 2.5 km on each side. It held the Imperial City, the palace of the Nguyễn emperors, and housed half the population.",
  "combate casa a casa": "Fighting inside a city, street by street and room by room. The attacker loses the advantage of tanks and artillery, and every corner can hide a sniper.",
  "linha bar-lev": "A chain of sand forts that Israel kept on the east bank of the Suez Canal after the 1967 war.",
  "operação badr": "The name of Egypt's crossing of the Suez Canal on 6 October 1973, which opened the Yom Kippur War.",
  "ponte rolante": "A steel bridge in sections, built to be towed overland to the water's edge and extended from one bank to the other. Israel brought one to the Suez Canal.",
  "guarda revolucionária": "An armed force created after the 1979 revolution, separate from the Army and loyal to Iran's Islamic regime.",
  "basij": "A volunteer militia linked to the Revolutionary Guard. It gathered very young and very old men, with little training.",
  "shatt al-arab": "A river formed where the Tigris and Euphrates meet, running to the Persian Gulf and marking part of the border between Iran and Iraq. Iranians call it the Arvand Rud.",
  "rio karun": "A river in southwestern Iran that flows into the Shatt al-Arab, next to Khorramshahr.",
  "fapla": "The People's Armed Forces for the Liberation of Angola, the army of the Angolan MPLA government.",
  "unita": "An Angolan movement opposed to the MPLA government, led by Jonas Savimbi and backed by South Africa and the United States.",
  "sadf": "The South African Defence Force, the army of South Africa.",
  "regime do apartheid": "South Africa's system of racial segregation, which gave all power to the white minority. It ended in the 1990s.",
  "obus g5": "A South African 155 mm long-range artillery gun, able to fire dozens of kilometers.",
  "triângulo de tumpo": "A strip of land east of the town of Cuito Cuanavale, between the Cuito, Tumpo and Dala rivers, where the Angolan and Cuban troops dug in behind minefields.",
  "acordos de nova york": "Agreements of 22 December 1988 between Angola, Cuba and South Africa, mediated by the United States. They provided for Namibia's independence and the withdrawal of Cuban troops from Angola.",
  "guerra por procuração": "A war in which bigger powers fight through smaller allies, without facing each other directly. The Cold War had several, Angola among them."
});

Object.assign(DEEP, {
  sinai1967: {
    war: "Six-Day War (5–10 June 1967)",
    hook: "In four days, Israel took the whole of Sinai, and the war was decided in the first hours, in the air.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Since the Suez crisis of 1956, a [[UN peacekeeping force|força de paz da onu]] had stood in Sinai and Gaza, between Egypt and Israel. In 1967, tensions returned. In November 1966, Egypt and Syria had signed a defense pact. In mid-May, Egyptian president Gamal Abdel Nasser sent troops into Sinai and asked for the UN force to leave, which it did on 19 May. Egypt took over the positions it left, including Sharm el-Sheikh.",
        "The next step was the most serious. On 22 and 23 May, Nasser ordered the [[Straits of Tiran|estreito de tiran]] closed to Israeli ships. Israel had said this would be grounds for war. On 30 May, Egypt also signed a pact with Jordan. Israel formed a national unity government on 1 June and, on 4 June, decided to attack.",
        { h: "The road to 5 June" },
        { timeline: [
          ["Nov 1966", "Egypt and Syria sign a defense pact."],
          ["mid-May 1967", "Nasser sends troops into Sinai."],
          ["19 May", "The UN peacekeeping force leaves Sinai and Gaza."],
          ["22–23 May", "Nasser orders the Straits of Tiran closed to Israeli ships."],
          ["1 June", "Israel forms a national unity government."],
          ["4 June", "Israel decides to attack."],
          ["5 June, 7:45 a.m.", "The Israeli air strike begins."]
        ]},
        "This text covers only the Sinai front, the biggest of the war's three. Jordan and Syria also fought, and Israel took the West Bank, East Jerusalem and the Golan Heights."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Gamal Abdel Nasser" },
        "President of Egypt and the Arab leader with the greatest prestige of his day. In May 1967, he removed the UN force from Sinai and closed Tiran. Before the war, King Hussein of Jordan criticized him for 'hiding behind the UN'. After the defeat, Nasser resigned, and crowds in the streets made him come back.",
        { h: "Abdel Hakim Amer" },
        "Field marshal and commander of the Egyptian armed forces. According to Wikipedia, it was he who ordered the withdrawal from Sinai on learning that Abu Ageila had fallen, and Nasser approved. The order said to leave within 24 hours, with no detailed instructions.",
        { h: "On the Israeli side" },
        "Yeshayahu Gavish headed Southern Command. Moshe Dayan was the defense minister. The three armored divisions in Sinai were commanded by Israel Tal (north), Ariel Sharon (center) and Avraham Yoffe, who covered the gap between the two. Colonel Danny Matt commanded the [[paratroopers|paraquedistas]] that Sharon used at Abu Ageila."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to Wikipedia, Egypt had about 100,000 of its 160,000 soldiers in Sinai, in seven divisions, with 900 to 950 tanks, about 1,100 armored personnel carriers and over a thousand artillery pieces. Israel had about 70,000 men and 700 tanks in Sinai, in three armored divisions. The Israeli weapons had better guns and longer range: more than a hundred [[Centurions|centurion]] and Super Shermans, with 105 mm guns, against the [[T-34/85|t-34]]s and SU-100 [[tank destroyers|caça-tanques]] of the Egyptian division at Abu Ageila.",
        { h: "The terrain" },
        "Sinai is a triangular desert peninsula with very few roads. There were three axes of advance: the coast road, from Rafah to El Arish; the central axis, through Abu Ageila and Jebel Libni; and the south. Beyond the dunes and hills, the end of the line was the Mitla and Gidi passes, mandatory bottlenecks for anyone trying to reach the Suez Canal. The Egyptians had built their defense in layers: the 7th Division at Rafah, the 2nd at Um-Katef, the 3rd near Jebel Libni, and the 4th Armoured Division farther back, around Bir Gifgafa and Bir Thamada.",
        { h: "The first days in nine moves" },
        { formation: true },
        "First, at 7:45 a.m. on 5 June, almost all of Israel's fighters (all but 12 of nearly 200) attacked Egyptian airfields. Wikipedia cites 338 Egyptian aircraft destroyed, a disputed figure, and other sources give 282 to 350. Egyptian state radio even announced, falsely, that 70 Israeli aircraft had been shot down on the first day.",
        "Second, at 7:50 a.m., Tal's division entered through the Rafah gap. It reached the Khan Yunis junction in a little over four hours and attacked Sheikh Zuweid, held by two Egyptian brigades. The Jiradi defile, on the way, was costly: Wikipedia gives 66 dead, 93 wounded and 28 tanks lost there.",
        "Third, in the center, Sharon attacked Um-Katef, at Abu Ageila, about 25 km from the border. The trenches, in three parallel lines with concrete shelters, were covered by artillery and a reserve tank battalion. The Israelis had about 14,000 men and 150 tanks. As for the Egyptians, Wikipedia gives 16,000 men in one article and 8,000 in another, and the sources do not agree. The frontal tank attack on the morning of 5 June, based on information that the position was weak, stopped at a [[minefield|campo minado]] and cost seven Centurions.",
        "Fourth, Sharon changed the plan. He sent tanks through the dunes, toward the Ruafa dam, and ordered a night infantry attack on Um-Katef. Matt's paratroopers were supposed to land behind the lines and silence the Egyptian artillery, but there were helicopters for only part of the force, and half of them got lost on the way.",
        "Fifth, on the night of 5 to 6 June, after an artillery barrage of about 6,000 rounds in under twenty minutes, the infantry entered the trenches. Engineers cleared a path through the minefield by 4 a.m. Wikipedia gives the start of the attack as 10 p.m. in one article and midnight in another.",
        "Sixth, on the morning of 6 June, Israeli tanks attacked the Egyptian tank and anti-tank battalions from both sides. In about three hours, they were destroyed. Around noon, Abu Ageila was in Israeli hands, and the road to central Sinai was open. In the north, Tal's division entered El Arish on the morning of 6 June.",
        "Seventh, the Egyptian withdrawal order, given after Abu Ageila fell, said to leave within 24 hours and did not say how. Many units left their heavy equipment behind, and Israel captured much of it intact. Yoffe advanced across sands the Egyptians considered impassable and reached the Bir Lahfan junction, which the Egyptians had to pass through.",
        "Eighth, from 6 to 7 June, the three Israeli divisions raced westward. A Yoffe column, by way of Bir Hasana and Bir Thamada, set up a roadblock at the eastern mouth of the Mitla pass. According to one source, Sharon's division went south and then west to Mitla, and parts of Yoffe's joined it. Only Gidi was taken before the Egyptians arrived. Israeli aircraft, with [[napalm]], attacked the retreating columns. The Egyptian diplomat Mahmoud Riad claimed that 10,000 men died in a single day, a figure no independent source confirms. Many others died of thirst, on foot, along some 200 km to the canal.",
        "Ninth, Tal's units stopped at various points on the canal. On 7 June, at 12:15 p.m., Dayan declared the Straits of Tiran an international waterway. Paratroopers and commandos landed at Sharm el-Sheikh, largely abandoned, and, on 8 June, infantry reached Ras Sudar. Egypt accepted the ceasefire on 8 June."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Israel occupied, in total, about 70,000 km²: Sinai and Gaza, the West Bank with East Jerusalem, and the Golan Heights. Losses vary. Israel had 776 to 983 killed on all fronts. Egypt had 9,800 (Gammasy) to 15,000 (Herzog) killed or missing, and 4,338 prisoners. As for tanks, Nasser spoke of 700 lost, and Israel counted 509 destroyed.",
        { h: "Why it matters" },
        "The victory changed the map of the Middle East and left open questions that still mark the region. Egypt lost Sinai, and the Suez Canal stayed closed from 1967 to 1975. The defeat and the occupation weighed on the 1973 war. Sinai only returned to Egypt with the 1979 peace treaty.",
        { h: "Curiosities and controversies" },
        { note: "Who attacked first? At the start, both sides said the other had attacked. Israel later admitted it had struck first and called the blow a [[preventive strike|ataque preventivo]]: it said Egypt was about to invade. The Arab view was that the attack was not justified. Among scholars, many see a preventive defense, and others a war of aggression." },
        { note: "The air numbers: Egyptian air losses appear between about 280 and 350 aircraft, depending on the source, and the figure of 338 is the most repeated. The casualties at Um-Katef also vary between the articles we consulted: 42 Israeli dead and about 2,000 Egyptian casualties in one, and 14 Israeli dead and 300 Egyptian dead in the other." },
        { note: "The retreat: Amer and Nasser's order, with no plan, turned a defeat into a disaster. According to the accounts, many of the Egyptian deaths happened in the retreat." }
      ]}
    ]
  },

  hue: {
    war: "Vietnam War, Tet Offensive (1968)",
    hook: "In the middle of the Tet festival truce, the old imperial capital became a battlefield for more than a month.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Huế was the capital of the Nguyễn emperors from 1802 to 1945 and was still the cultural heart of Vietnam. It had almost 140,000 inhabitants, was the third largest city in South Vietnam and was divided by the Perfume River. To the north, the walled Citadel, about 2.5 km on each side. To the south, the new city, with neighborhoods, schools, a hospital and the compound of the American advisers.",
        "On 30 and 31 January 1968, during the festival of [[Tet|tet]], North Vietnam and the Viet Cong launched the [[Tet Offensive|ofensiva do tet]] against dozens of cities in the South. Many South Vietnamese soldiers were on leave, and Huế was lightly defended. In the days before, Allied commanders had underestimated the number of attackers: afterward, intelligence estimated 16 to 18 battalions, between 8,000 and 11,000 men.",
        { h: "The road to Huế" },
        { timeline: [
          ["30–31 Jan 1968", "The Tet Offensive begins. In Huế, the attackers enter the city at 2:33 a.m. on 31 January."],
          ["31 Jan", "American Marines reach the MACV compound, on the south bank."],
          ["2 Feb", "The provincial prison is overrun, and about 2,500 prisoners are freed."],
          ["6–10 Feb", "The Marines take the provincial headquarters and the stadium."],
          ["15–16 Feb", "The Marines take the Dong Ba gate. The South Vietnamese government frees up all firepower against the Citadel."],
          ["24 Feb", "The South Vietnamese flag returns to the Citadel tower."],
          ["2 Mar", "The clearing operation ends."]
        ]},
        "MACV, the American command, sent a Marine force from the Phu Bai base, 11 km to the south. The South Vietnamese had the 1st Division headquarters in the Mang Ca fort, inside the Citadel."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ngô Quang Trưởng" },
        "Brigadier general, commander of the South Vietnamese 1st Division, with headquarters at Mang Ca. It fell to him, with the division's battalions and the paratroopers, to clear the north and west of the Citadel. On 5 February, he swapped out the units that had stalled.",
        { h: "The American Marines" },
        "Colonel Stanley Hughes commanded the 1st Marine Regiment. Captain Gordon Batcheller arrived with Company A at the MACV compound. Lieutenant Colonel Marcus Gravel led a company to the Trường Tiền bridge, and Lieutenant Colonel Ernie Cheatham set up, at the university, a base of attack for the fight in the city. Sergeant John Canley took over Batcheller's company when he was wounded.",
        { h: "On the other side" },
        "The communist side had PAVN and Viet Cong forces, commanded by the Trị-Thiên-Huế region. According to Wikipedia, they had lists of targets among soldiers, officials and foreigners."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Wikipedia lists, on the Allied side, 11 South Vietnamese battalions, 4 U.S. Army and 4 U.S. Marine battalions, about 15,000 men, plus air support. On the communist side, 4 PAVN and 8 Viet Cong battalions, 10,000 men or more, and hundreds of local militiamen.",
        { h: "The terrain" },
        "The Perfume River separates the new city, to the south, from the Citadel, to the north. Two of the main bridges, the An Cuu and the Trường Tiền, were destroyed in the first days, and crossing from one bank to the other became difficult. Inside the Citadel, the Imperial City, with thick walls and the palace, was an ideal fortress for the defender. From 2 February, rain and low cloud hampered air and artillery support, and there were restrictions on attacking historic buildings until mid-month.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, before dawn on 31 January, the attackers entered the city. At 2:33 a.m., a signal flare marked the start. A team of [[sappers|sapadores]] opened the Chánh Tây gate, after killing the guards in South Vietnamese uniforms, and the PAVN entered the Citadel.",
        "Second, at 8 a.m., a liberation flag went up on the Citadel tower. On 1 February, a South Vietnamese relief column was stopped about 400 meters from the wall, and only at noon did a force of paratroopers reach Mang Ca.",
        "Third, on the south bank, Company A of the 1st Battalion, 1st Marine Regiment reached the MACV compound around 3:15 p.m. on 31 January, after fighting house to house. Gravel's company, trying for the Trường Tiền bridge, was driven back by fire from the wall. By nightfall, two companies had had 10 killed and 56 wounded.",
        "Fourth, from 2 to 4 February, the Marines' attack reached the university and then the Treasury, the Post Office and two schools. On the night of 2 February, the PAVN overran the provincial prison and freed about 2,500 prisoners. On the 4th, Company A lost more than half of its 147 men, killed or wounded. At night, saboteurs blew up the An Cuu bridge.",
        "Fifth, inside the Citadel, the South Vietnamese 1st Division cleared the north and west with infantry and paratrooper battalions. The 4th Battalion of the 2nd Regiment, moving south from Mang Ca toward the palace, had killed more than 700 of the enemy by 4 February. On 5 February, Trưởng swapped the units, because that battalion had stalled. On 6 February, the Marines took the provincial headquarters, room by room, where the PAVN 4th Regiment's command post was. On 7 February, the Trường Tiền bridge was destroyed.",
        "Sixth, on 10 February the Marines took the stadium and built a [[pontoon|pontão]] bridge over the Phu Cam canal. Between 11 and 13 February, the last positions in the south were being cleared, and a force of Vietnamese Marines was transported to Mang Ca.",
        "Seventh, on 15 February, American Marines took the Dong Ba gate, in the Citadel wall, after six hours of fighting: 6 killed and 50 wounded, against 20 of the enemy dead. On 16 February, Vice President Nguyễn Cao Kỳ authorized the use of all necessary force, without sparing historic structures.",
        "Eighth, on the night of 20 February, the PAVN began to withdraw in stages. On 22 February, the south wall was in Allied hands. South Vietnamese Rangers swept Gia Hoi island from 22 to 25 February and arrested hundreds of Viet Cong cadres.",
        "Ninth, at 5 a.m. on 24 February, the flag of the Republic of Vietnam went up on the Citadel tower. In the afternoon, the imperial palace was retaken. On 25 February, the last pocket, in the southwest corner, was eliminated. The Marines' Operation Huế City ended on 2 March."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The battle was an Allied victory, and the city was left in ruins: about 80% was destroyed, and 116,000 of the 140,000 residents lost their homes. On the Allied side, Wikipedia gives 458 killed and about 2,700 wounded South Vietnamese. For the Americans, Bowden gives 250 killed and 1,554 wounded, and Hastings 216 killed and 1,584 wounded. The communist side appears with 1,042 killed in the city (according to a captured PAVN document) or 2,400 killed and 3,000 wounded (according to a PAVN source). MACV claimed to have killed 5,113.",
        "Among civilians, Willbanks speaks of 5,800 killed or missing, and Bowden of more than 8,000. These numbers include those killed in the fighting and in the executions.",
        { h: "Why it matters" },
        "Militarily, it was an Allied victory, but American public opinion turned against the war in the following months. MACV's first statements to the press played down the fighting. On 27 February, the anchorman Walter Cronkite called for negotiations in a much-quoted commentary. The tradition that President Johnson reacted to it is questioned by historians.",
        { h: "Curiosities and controversies" },
        { note: "The Huế massacre: during the occupation, the communists executed civilians and prisoners. The estimate is 2,800 to 6,000 dead. Douglas Pike, in 1970, counted about 2,800 bodies found in graves between 1968 and 1969, and the South Vietnamese government listed 4,062 killed or abducted. A captured Viet Cong document spoke of 2,720 people 'eliminated'." },
        { note: "What the other sides say: in 1968, Hanoi said the dead were 'lackeys' with 'blood debts'. In 1988, a Vietnamese colonel stated that civilians died 'by accident, in the crossfire'. Some researchers, such as Ngô Vĩnh Long, give much lower numbers (710). Historians such as Willbanks, Karnow and Kiernan conclude that there were mass executions." },
        { note: "The reprisals: according to estimates, 200 to 2,000 civilians were killed by South Vietnamese forces after the recapture. The numbers are uncertain." }
      ]}
    ]
  },

  fazendachinesa: {
    war: "Yom Kippur War (1973)",
    hook: "The corridor to the canal ran past an agricultural station, and it took a night and a day of fighting to open it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "On 6 October 1973, the day of Yom Kippur, Egypt crossed the Suez Canal in [[Operation Badr|operação badr]] and broke through the [[Bar-Lev Line|linha bar-lev]]. Syria attacked the same day on the Golan. In the first days, Israel fell back on both fronts.",
        "On 14 October, Sadat ordered an Egyptian offensive in Sinai, which failed. The same day, the chief of staff, David Elazar, presented the government with a plan for a counter-crossing, and the cabinet approved it unanimously. Southern Command had changed hands: Chaim Bar-Lev had taken over from Shmuel Gonen, who stayed on as his aide. The crossing was set for the night of 15 to 16 October.",
        { h: "The road to the Chinese Farm" },
        { timeline: [
          ["6 Oct 1973", "Egypt crosses the canal (Operation Badr)."],
          ["14 Oct", "The Egyptian offensive fails. Israel approves the crossing plan."],
          ["15 Oct, 5 p.m.", "Raviv's brigade attacks from the east, as a feint."],
          ["16 Oct, 1:35 a.m.", "Matt's paratroopers begin to cross the canal."],
          ["16 Oct", "The hardest day: Reshef's brigade bleeds, and Adan advances."],
          ["17 Oct, 4 p.m.", "The pontoon bridge is ready."],
          ["18 Oct, morning", "The roller bridge is laid across the canal."]
        ]},
        "The plan was called Operation Abirey-Halev, something like 'the stouthearted'. The idea was to open a corridor to the canal, at Deversoir, north of the Great Bitter Lake, and lay bridges across it."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "Ariel Sharon" },
        "He commanded the 143rd Division, the one meant to open the corridor and bring the bridges. In this battle, he argued with Gonen and Bar-Lev over how and when to cross, and the disagreements are on record.",
        { h: "The Israelis in the field" },
        "Amnon Reshef commanded the 14th Armored Brigade, which had the decisive tasks. Tuvia Raviv, the 600th Brigade, which made the feint. Colonel Danny Matt, the 243rd Paratrooper Brigade, and Haim Erez, the brigade that carried the roller bridge. Avraham Adan commanded the 162nd Division, which would cross later. Colonel Uzi Yairi commanded the 35th Paratrooper Brigade, and Ehud Barak, a future prime minister, led the armored effort to extract the paratroopers.",
        { h: "On the Egyptian side" },
        "General Abd Rab el-Nabi Hafez commanded the 16th Infantry Division, and Colonel Abd el-Hamid the 16th Infantry Brigade. General Ibrahim Oraby commanded the 21st Armoured Division. Among the Egyptian officers was a lieutenant colonel commanding an infantry battalion, Mohamed Hussein Tantawi, later defense minister."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Egyptian 21st Armoured Division began with 136 tanks. Reshef's brigade began with 97. Both sides had infantry with anti-tank weapons. In the area were the 16th Infantry Division and the 21st Armoured Division, the latter with the 1st and 14th Armoured Brigades and the 18th Mechanized.",
        { h: "The terrain" },
        "The Akavish and Tirtur roads ran east to west, from the Artillery road to the Lexicon road, which ran north to south, parallel to the canal. The Chinese Farm was an Egyptian agricultural station, with Japanese-made equipment. The Israeli soldiers saw writing in Japanese and thought it was Chinese, hence the name. Nearby, the village of al-Galaa and the hill of Missouri, to the northwest, gave the defender high ground.",
        { h: "The battle in nine moves" },
        { formation: true },
        "First, on the afternoon of 15 October, the 143rd Division was gathered to the east. The plan gave Reshef the decisive tasks: turning south of the Akavish, taking Forts Lakekan and Matzmed and clearing the Akavish and Tirtur roads. Erez's brigade carried the roller bridge, and Matt's paratrooper brigade would make the first crossing.",
        "Second, at 5 p.m., Raviv's brigade attacked the center of the Egyptian bridgehead from the east. The attack was repelled, as expected, but it served its purpose as a [[feint|diversão]].",
        "Third, Reshef entered the corridor without opposition, took Lakekan and Matzmed without a shot and reported that the Akavish was clear. Meanwhile, Matt's brigade, which had been moving since 4:30 p.m., got stuck in traffic jams and lost hours.",
        "Fourth, a tank company sent to the Lexicon-Tirtur junction was destroyed by Egyptian infantry, and its commander died. Israeli artillery fired about 70 tons of ordnance at the west bank, which was empty. The paratroopers' crossing began at 1:35 a.m. on 16 October, more than five hours late. By 9 a.m., 2,000 paratroopers and a battalion of about 30 tanks had crossed and secured a [[bridgehead|cabeça de ponte]] 4 km wide.",
        "Fifth, the Akavish had been closed again by Egyptian infantry. Reshef sent a battalion to clear it and pushed three armored and three mechanized battalions north, toward Tirtur and the Chinese Farm. Two armored battalions that advanced along the Lexicon lost 27 tanks to anti-tank fire. At night, the brigade ran into the vehicle and supply park of the 16th and 21st divisions, and both sides opened fire. The Egyptians counterattacked.",
        "Sixth, still on 16 October, the Egyptian 1st Armoured Brigade, at al-Galaa, destroyed about 15 Israeli tanks and several [[half-tracks|meia-lagarta]]. By 4 a.m., Reshef had lost 56 of his 97 tanks, leaving 41, and by noon, 27. Sharon had about 300 killed and 1,000 wounded that night, according to Wikipedia. After dawn, Reshef took the Lexicon-Tirtur junction, but was stopped when he tried Tirtur, with fire coming from the hill of Missouri.",
        "Seventh, the command was arguing. Dayan suggested withdrawing Matt's brigade and canceling the operation, but Gonen refused, and Bar-Lev agreed with him. Sharon proposed sending Adan's division across on rafts, and Bar-Lev forbade any more crossings until the bridges were ready. Gonen said Sharon had let them down and gave Adan the job of bringing the pontoon bridge to the canal.",
        "Eighth, on the night of 16 to 17, Yairi's 35th Paratrooper Brigade attacked Tirtur without armor, without adequate reconnaissance and without artillery observers. At 2:45 a.m., it was stopped by the left-flank battalion of Abd el-Hamid, and most company and platoon commanders fell. In 14 hours, it had 40 to 70 killed and about 100 wounded. At 3 a.m., a half-track company found the Akavish open, and Adan risked sending the pontoons down it. On 17 October, Egypt counterattacked with the 1st Brigade and its remaining 53 tanks. The attack was beaten back, and the fight swayed back and forth until 9 p.m. The pontoon bridge was ready around 4 p.m.",
        "Ninth, at 5:30 p.m., Abd el-Hamid reported that his brigade was out of ammunition and artillery, and he was ordered to withdraw. On the night of 17 to 18, the Egyptians left the Chinese Farm, and the Tirtur and Akavish roads were open. The hill of Missouri stayed Egyptian. The roller bridge was laid across the canal at dawn on 18 October."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Wikipedia calls the battle an Israeli victory and says the losses on both sides were heavy, with no firm totals. By the figures in the text: Reshef's brigade lost 56 of its 97 tanks in about twelve hours, Sharon's division had about 300 killed and 1,000 wounded in one night, and Yairi's paratroopers had 40 to 70 killed. The Egyptian 21st Division was left with at most 40 of its 136 tanks on 18 October (not counting 21 in reinforcement), and the 16th Division with about 20 in its own tank battalion. Egyptian sources, such as Hammad (2002), say the 21st destroyed more than 50 Israeli tanks and armored vehicles on 16 October.",
        { h: "Why it matters" },
        "On the afternoon of 18 October, Adan's division crossed the canal, and Magen's followed. Adan reached Suez and cut off two divisions of the Egyptian Third Army. Sharon's attempt to reach Ismailia failed. The war ended with a ceasefire at the end of October, with an Israeli army on the west bank and Egyptian troops on the east bank.",
        { h: "Curiosities and controversies" },
        { note: "The battle became famous for its harshness. According to Wikipedia, Dayan is said to have described the field as a vast field of slaughter." },
        { note: "The Egyptian error: for about 24 hours, the Egyptians thought the Israeli attack was against the right flank of the Second Army, and not a crossing of the canal." },
        { note: "Two future defense ministers fought on opposite sides of this field: Tantawi, in Egypt, and Barak, in Israel." }
      ]}
    ]
  },

  khorramshahr: {
    war: "Iran-Iraq War (1980–1988)",
    hook: "After 19 months in Iraqi hands, the city was retaken in under two days.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In September 1980, Iraq invaded southern Iran, after abandoning the 1975 Algiers border agreement. Khorramshahr, Iran's biggest port, where the Karun and the [[Shatt al-Arab|shatt al-arab]] rivers meet, was taken on 26 October 1980, after a long and bloody fight. Among Iranians, the city became known as 'Khuninshahr', the city of blood.",
        "The war turned in Iran's favor in 1982. In Operation Fath ol-Mobin, in March, Iranian helicopters landed behind the Iraqi lines, and Iran pushed Iraq out of most of Khuzestan, including Shush, Dezful and Ahvaz. The next stage was Khorramshahr.",
        { h: "The road to the city" },
        { timeline: [
          ["26 Oct 1980", "Iraq takes Khorramshahr."],
          ["Mar 1982", "Operation Fath ol-Mobin: Iran retakes most of Khuzestan."],
          ["24 Apr 1982", "Operation Beit ol-Moqaddas begins."],
          ["20 May", "Iraqi counterattack, beaten back."],
          ["23–24 May", "Iran crosses the Karun and retakes Khorramshahr."],
          ["20 Jun", "Saddam offers a ceasefire."]
        ]},
        "For Tehran, the Iraqi defeat raised a question: stop there, with the territory recovered, or invade Iraq."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "The Iranian commanders" },
        "The operation was directed by a joint headquarters, 'Karbala', headed by Mohsen Rezaee, of the [[Revolutionary Guard|guarda revolucionária]], and by Colonel Ali Sayyad Shirazi, of the Army.",
        { h: "On the Iraqi side" },
        "Colonel Ahmad Zeidan commanded the defense of the city. Wikipedia says he died in a mine he had ordered laid, while trying to flee. Among the commanders listed, Brigadier Jawad Shitnah appears as executed after the defeat.",
        { h: "The leaders" },
        "Saddam Hussein ruled Iraq and reacted to the defeat with rage: he had several generals executed, among them the commander of the 9th Armoured Division. Ayatollah Khomeini, Iran's leader, rejected the ceasefire offer and decided to continue the war."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "According to Wikipedia, in the whole operation Iran had about 70,000 men from the Revolutionary Guard, the Basij and the Army, a total that another source puts at 65,000. The battle's infobox gives 100,000 Iranians and 400 tanks against 80,000 Iraqis and 100 tanks (Razoux, 2015). For the operation as a whole, it lists the Iraqis at 200,000 men. The sources differ, and no single number can be fixed.",
        { h: "The terrain" },
        "Khorramshahr lies on the bank of the [[Karun River|rio karun]], near where it flows into the Shatt al-Arab, on the border with Iraq. The Iraqis had fallen back to the Karun and held only the city and a few areas around it.",
        { h: "The operation in five moves" },
        "First, on 24 April 1982, about 70,000 soldiers of the Guard and the Basij, and Army troops, attacked at several points between Ahvaz and Susangerd. The Karbala headquarters had about 2,161 air sorties and some 96 Army helicopters. Iran pushed the Iraqis back, with heavy losses. The Iraqis fell back to Khorramshahr and reinforced it.",
        "Second, on 20 May, Iraq launched a vigorous counterattack, which failed.",
        "Third, from 23 May, Iran crossed the Karun and attacked in force. It broke two Iraqi defensive lines, near Pol-e Now and Shalamcheh, and closed in on the Shatt al-Arab. An Iraqi mobile bridge, which linked the islands of Bowarin and Umm Rasas to the river's south bank, was disabled by Iranian fighters, and the Iraqis were left with no way out.",
        "Fourth, in under 48 hours, the city fell. About 19,000 Iraqi soldiers surrendered.",
        "Fifth, across the operation as a whole, according to Wikipedia (citing Karsh and Pollack), about 33,000 Iraqis were captured and more than 450 tanks and armored vehicles were lost, and the Iraqi army fell from 210,000 to 150,000 men."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "Wikipedia gives, for Iraq, about 8,000 killed, 15,000 wounded and 19,000 prisoners, and for Iran, 12,000 to 15,000 killed and 25,000 wounded. Another passage speaks of about 10,000 Iraqi and 30,000 Iranian casualties. An Iranian government-linked site (Imam Khomeini) speaks of 6,000 Iranians killed. The figure of 8,000 Iraqis killed, according to Wikipedia itself, rests on a weak source, an Arabic-language forum. What repeats, in all the sources, is the figure of some 19,000 prisoners.",
        { h: "Why it matters" },
        "The recapture of Khorramshahr is seen as the turning point of the war. On 20 June, Saddam offered an immediate ceasefire and withdrawal from Iranian territory within two weeks. Khomeini rejected it: the war would end only with Saddam's fall and the payment of reparations. The Iranian government was divided: Mousavi and Khamenei wanted to accept, but a faction headed by Rafsanjani argued for invasion, and Khomeini backed it. The war lasted six more years.",
        "In Iran, 24 May is remembered as the day of liberation, and an air-defense system and a 2,000-rial banknote carry the name or the image of the battle.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: the losses of the two sides come from different sources and almost never match. Wikipedia notes that the armor and artillery figures in the infobox cover all sectors, not just Khorramshahr." },
        { note: "A commander who did not see the end: Mohammad Jahanara, of the Revolutionary Guard, died in a plane crash on 24 May, the day of the liberation, before seeing the city free. He is remembered in a popular Persian song." }
      ]}
    ]
  },

  cuitocuanavale: {
    war: "Angolan Civil War and South Africa's Border War (1987–1988)",
    hook: "Both sides said they had won, and both had reasons to say so.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "Since independence in 1975, Angola had been in a civil war. The MPLA government, with the People's Armed Forces for the Liberation of Angola ([[FAPLA|fapla]]), was backed by Cuba and the Soviet Union. [[UNITA|unita]], led by Jonas Savimbi, was backed by South Africa and the United States. South Africa, under the [[apartheid regime|regime do apartheid]], was also fighting guerrillas there who sought the independence of Namibia, a territory it controlled. It was a typical Cold War [[proxy war|guerra por procuração]].",
        "In August 1987, FAPLA, with Soviet advisers, launched Operation Saluting October to take Mavinga, a UNITA base, in the southeast. It was a big offensive, with brigades crossing the Lomba River. South Africa responded with Operation Moduler, to stop it.",
        { h: "The road to Cuito Cuanavale" },
        { timeline: [
          ["Aug 1987", "FAPLA launches Operation Saluting October."],
          ["9 Sep–7 Oct", "Fighting on the Lomba River. The 47th Brigade is destroyed."],
          ["9–25 Nov", "Operation Hooper: South African attacks on the FAPLA brigades east of the Cuito River."],
          ["5 Dec", "Cuban reinforcements arrive."],
          ["Feb–Mar 1988", "Attacks on the Tumpo triangle (Operation Packer)."],
          ["Jun 1988", "Fighting on the southwest front, at Calueque."],
          ["22 Dec 1988", "The New York Accords are signed."]
        ]},
        "After the Lomba, FAPLA fell back to Cuito Cuanavale, a town on the west bank of the Cuito River, and set about defending the position. The name of the battle, incidentally, is seen as imprecise: there was no direct attack on the town, and the fighting took place east of the river."
      ]},
      { n: "02", title: "The leaders", blocks: [
        { h: "On the FAPLA and Cuban side" },
        "António França, chief of the Angolan general staff, held overall command. The Cuban general Arnaldo Ochoa directed the defense of Cuito Cuanavale, and Leopoldo Cintra Frías also appears among the Cuban commanders. Among the Soviets, Pyotr Gusev directed operations, and about a thousand Soviet advisers were in Angola.",
        { h: "On the South African and UNITA side" },
        "Magnus Malan was the defense minister, and Jannie Geldenhuys headed the armed forces. Colonel Deon Ferreira commanded operations in the field. UNITA had commanders such as Arlindo Pena 'Ben-Ben'."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "Wikipedia's infobox gives, for FAPLA, 6,000 combatants at the start and up to 18,000, with about 150 T-55 and T-62 tanks. South Africa, 700 combatants at the start and up to 3,000, with 13 Olifants, 120 Ratel armored vehicles and batteries of [[G5 howitzers|obus g5]]. Cuba, 3,000 combatants by February 1988, with 32 tanks, and advisers. It also lists UNITA with tens of thousands of men. Some estimates, cited by Wikipedia from Gleijeses and Jaster, speak of only 10,000 to 20,000 Cubans involved.",
        { h: "The terrain" },
        "A region of savanna and rivers in southeastern Angola, with few roads. The town of Cuito Cuanavale lies on the west bank of the Cuito River. To the east, the [[Tumpo triangle|triângulo de tumpo]], between the Cuito, Tumpo and Dala rivers, where FAPLA and the Cubans dug in behind minefields.",
        { h: "The campaign in five moves" },
        "First, in August 1987, FAPLA advanced toward Mavinga. South Africa and UNITA met them on the Lomba River, in fighting from 9 September to 7 October, and the 47th Brigade was annihilated. In this phase, Wikipedia gives 1,059 dead and 2,118 wounded to FAPLA, 155 and 622 to UNITA and 19 and 41 to South Africa.",
        "Second, FAPLA fell back to Cuito Cuanavale. On 9 and 11 November, the South Africans attacked the 16th Brigade, and on 17 November, the 21st. On 25 November, the last attack was abandoned.",
        "Third, Cuba sent reinforcements from 5 December, about 1,500 men by January 1988. The UN demanded the South African withdrawal by 10 December.",
        "Fourth, in Operation Packer, between February and April 1988, South Africa and UNITA made six attacks on the Tumpo triangle, and all failed. The town was never attacked. A small South African force continued to shell the town until the end of August 1988, in Operation Displace.",
        "Fifth, in June 1988, a second front opened, in the southwest, near Calueque and Ruacana. An attack by Cuban MiG-23s on the Calueque dam killed 12 South African soldiers. The South Africans withdrew between 27 and 30 June. An agreement was signed at Ruacana on 22 August 1988."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result: what each side says" },
        "South Africa says it achieved its aim: it stopped the offensive on Mavinga, protected UNITA and chose not to take Cuito Cuanavale. Angola and Cuba say they won, because they held the position. Castro said it was an overwhelming victory, which ended outside aggression and brought South Africa to the negotiating table. Mandela called it a turning point for the liberation of the continent and of his people.",
        "Historians are divided. Vanneman sees a result with no decisive victory for either side. Hampson speaks of a stalemate of some nine months and says Castro exploited the situation as propaganda. Gourgoumis thinks South Africa took some tactical objectives but failed on the strategic one, by not pushing FAPLA across the Cuito. Herbst said it was the Angolans' 'Dunkirk', and not the Cubans' 'Stalingrad'. The American official Chester Crocker described the 1987 campaign as a humiliation for Soviet arms and strategy.",
        { h: "Losses" },
        "The numbers come almost all from interested parties. FAPLA appears with 4,768 dead and more than 10,000 wounded (figures from the SADF and Weigert), and with 94 tanks lost (SADF) or 61 (Weigert). UNITA, with about 3,000 dead (Marcum). The SADF announced 31 dead and 90 wounded, a figure that rises to 38 with non-combat deaths, and to as many as 86 if other fighting in Angola in 1987 and 1988 is counted. Cuba, 42 soldiers and 7 pilots dead, and 3 pilots captured. The Soviet advisers had 3 dead and 5 wounded.",
        { h: "Why it matters" },
        "The fighting contributed to the peace negotiations mediated by the United States. The [[New York Accords|acordos de nova york]] of 22 December 1988 led to Namibia's independence and to the withdrawal of Cuban and South African soldiers from Angola, by 1991. The Angolan civil war continued.",
        { h: "Curiosities and controversies" },
        { note: "Who won? It is the biggest debate about the battle. The answer depends on what is measured: each side's military objective, or the political effect on the negotiations. The facts almost no one disputes: the FAPLA offensive was stopped in 1987, and the town did not fall." },
        { note: "The question of the name: some authors call 'battle of Cuito Cuanavale' an imprecise name, because the South African and UNITA offensives were east of the river, and the town was not attacked." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  sinai1967: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 8, l: "Mediterranean Sea" },
      { t: "sea", x: -8, y: -2, w: 11, h: 78, l: "" },
      { t: "note", x: 3, y: 71, l: "Suez Canal" },
      { t: "hill", x: 72, y: 27, rx: 7, ry: 5, l: "Um-Katef (Abu Ageila)" },
      { t: "hill", x: 46, y: 30, rx: 6, ry: 4, l: "Jebel Libni" },
      { t: "hill", x: 14, y: 52, rx: 6, ry: 4, l: "Mitla Pass" },
      { t: "hill", x: 27, y: 60, rx: 5, ry: 3, l: "Gidi Pass" },
      { t: "note", x: 90, y: 12, l: "Rafah" },
      { t: "note", x: 62, y: 11, l: "El Arish" },
      { t: "note", x: 24, y: 33, l: "Bir Gifgafa" },
      { t: "note", x: 93, y: 68, l: "Israel" }
    ],
    units: [
      { id: "iT", s: "a", k: "tank", w: 10, h: 4, l: "Tal's division" },
      { id: "iS", s: "a", k: "tank", w: 10, h: 4, l: "Sharon's division" },
      { id: "iY", s: "a", k: "tank", w: 10, h: 4, l: "Yoffe's division" },
      { id: "iP", s: "a", k: "inf", w: 7, h: 3, l: "Matt's paratroopers" },
      { id: "e7", s: "b", k: "inf", w: 12, h: 4, l: "7th Division (Rafah)" },
      { id: "e2", s: "b", k: "inf", w: 12, h: 4, l: "2nd Division (Um-Katef)" },
      { id: "e3", s: "b", k: "inf", w: 12, h: 4, l: "3rd Division (Jebel Libni)" },
      { id: "e4", s: "b", k: "tank", w: 12, h: 4, l: "4th Armoured Division" }
    ],
    steps: [
      { t: "Morning of 5 June 1967. Egypt defends Sinai in layers: the 7th Division at Rafah, the 2nd at Um-Katef, the 3rd near Jebel Libni and the 4th Armoured farther back, around Bir Gifgafa. Israel has three divisions on the border. This sketch is simplified.",
        p: { iT: [90, 12], iS: [92, 28], iY: [90, 42], iP: [94, 20], e7: [80, 12], e2: [70, 32], e3: [46, 36], e4: [24, 42] } },
      { t: "7:45 a.m.: Israeli aviation attacks the Egyptian airfields. Wikipedia cites 338 Egyptian aircraft destroyed, a disputed figure. The aircraft do not appear in the diagram, but they decide the war: from then on, the Egyptian columns have no air cover.",
        p: {} },
      { t: "7:50 a.m.: Tal's division goes in at Rafah. It reaches Khan Yunis in a little over four hours and attacks Sheikh Zuweid, held by two Egyptian brigades.",
        p: { iT: [80, 9] } },
      { t: "In the center, Sharon attacks Um-Katef head-on, with tanks, on the morning of 5 June. The attack stops at a minefield and costs seven Centurions. A second attempt, in the afternoon, also fails.",
        p: { iS: [82, 28] } },
      { t: "Sharon changes the plan: tanks through the dunes to the Ruafa dam and a night infantry attack. There are helicopters for only part of Matt's paratroopers, and half of them get lost.",
        p: { iS: [78, 31], iP: [68, 24] } },
      { t: "Night of 5 to 6 June: a barrage of about 6,000 rounds in under twenty minutes, and the infantry enters the trenches. On the morning of the 6th, Israeli tanks destroy the Egyptian tank and anti-tank battalions. Abu Ageila falls around noon. Tal enters El Arish, and the 7th Division is broken up.",
        p: { iS: [68, 31], iP: [66, 26], iT: [64, 10] }, x: ["e2", "e7"] },
      { t: "On learning of the fall of Abu Ageila, Amer orders a withdrawal, with no plan. Yoffe crosses the sands the Egyptians thought impassable and reaches Bir Lahfan. The 3rd Division leaves Jebel Libni.",
        p: { iY: [58, 24], iS: [58, 32], e3: [40, 42], e4: [20, 46] } },
      { t: "From 6 to 7 June, the Israeli divisions race westward. A roadblock is set up at the eastern mouth of Mitla, and only Gidi is taken before the Egyptians arrive. Aircraft attack the columns, and many soldiers die of thirst on the way to the canal.",
        p: { iY: [24, 50], iS: [36, 52], iT: [44, 16], e3: [30, 50], e4: [14, 48] }, x: ["e3"] },
      { t: "7 and 8 June: Tal stops at various points on the canal, and Sharm el-Sheikh, largely abandoned, is occupied. On 8 June, Israel controls all of Sinai, and Egypt accepts the ceasefire.",
        p: { iT: [12, 12], iY: [14, 54], iS: [26, 58] }, x: ["e4"] }
    ]
  },

  hue: {
    terrain: [
      { t: "sea", x: -8, y: 36, w: 116, h: 5, l: "Perfume River" },
      { t: "hill", x: 52, y: 17, rx: 38, ry: 15, l: "Citadel and Imperial City" },
      { t: "note", x: 16, y: 58, l: "New city (south bank)" },
      { t: "note", x: 52, y: 74, l: "Phu Bai base, 11 km to the south" },
      { t: "note", x: 92, y: 74, l: "North ↑" }
    ],
    units: [
      { id: "aMc", s: "a", k: "camp", w: 8, h: 5, l: "Mang Ca: South Vietnamese 1st Division" },
      { id: "aMv", s: "a", k: "camp", w: 8, h: 5, l: "MACV compound" },
      { id: "aM1", s: "a", k: "inf", w: 10, h: 4, l: "Marines (1st Regiment)" },
      { id: "aM2", s: "a", k: "inf", w: 10, h: 4, l: "Marines (5th Regiment)" },
      { id: "aAv", s: "a", k: "inf", w: 12, h: 4, l: "South Vietnamese: infantry and paratroopers" },
      { id: "aVm", s: "a", k: "inf", w: 9, h: 4, l: "Vietnamese Marines" },
      { id: "aUs", s: "a", k: "inf", w: 10, h: 4, l: "American Marines (Citadel)" },
      { id: "bC", s: "b", k: "inf", w: 22, h: 6, l: "PAVN and Viet Cong (Citadel)" },
      { id: "bS", s: "b", k: "inf", w: 20, h: 5, l: "PAVN and Viet Cong (south bank)" }
    ],
    steps: [
      { t: "Before dawn on 31 January 1968, during the Tet truce. The South Vietnamese have their headquarters at Mang Ca, in the Citadel. On the south bank there is only the MACV compound. The American Marines are at Phu Bai, 11 km to the south. Many South Vietnamese soldiers are on leave.",
        p: { aMc: [82, 9], aMv: [50, 46], aM1: [42, 70], aM2: [58, 70], aAv: [74, 20], aVm: [92, 62], aUs: [76, 68], bC: [14, 14], bS: [14, 52] } },
      { t: "2:33 a.m.: a signal flare marks the start of the attack. A team of sappers opens the Chánh Tây gate, and the PAVN enters the Citadel. At 8 a.m., a liberation flag goes up on the tower. On the south bank, the attackers surround the MACV.",
        p: { bC: [48, 15], bS: [44, 52] } },
      { t: "Afternoon of 31 January: the Marines' Company A reaches the MACV, at 3:15 p.m., after fighting house to house. Another company tries the Trường Tiền bridge and is driven back by fire from the wall.",
        p: { aM1: [48, 50] } },
      { t: "From 2 to 4 February, the Marines advance to the university, the Treasury and the Post Office. On the night of 2 February, the PAVN overruns the prison and frees about 2,500 prisoners. On 4 February, Company A loses more than half of its 147 men.",
        p: { aM1: [40, 52], aM2: [56, 52], bS: [30, 54] } },
      { t: "Inside the Citadel, the South Vietnamese clear the north and west. The 4th Battalion of the 2nd Regiment kills more than 700 of the enemy by 4 February, but stops short of the palace. On 6 February, the Marines take the provincial headquarters, and the Trường Tiền bridge is destroyed on the 7th.",
        p: { aAv: [66, 12], aM1: [44, 56], aM2: [58, 56] } },
      { t: "On 10 February, the Marines take the stadium. Between 11 and 13, the last positions in the south are being cleared, and a force of Vietnamese Marines is transported to Mang Ca.",
        p: { aM1: [52, 60], aM2: [64, 56], bS: [22, 56], aVm: [80, 14] } },
      { t: "15 February: American Marines take the Dong Ba gate, in the Citadel wall. On the 16th, Vice President Kỳ authorizes all necessary force, without sparing historic buildings.",
        p: { aUs: [86, 26], aVm: [76, 14], bC: [46, 16] } },
      { t: "On the night of 20 February, the PAVN begins to withdraw in stages. On 22 February, the south wall is in Allied hands.",
        p: { bC: [28, 12], aUs: [74, 24], aAv: [58, 22], aVm: [68, 16] } },
      { t: "5 a.m. on 24 February: the South Vietnamese flag returns to the tower. In the afternoon, the palace is retaken. On 25 February the last pocket, in the southwest corner, falls, and the clearing operation ends on 2 March.",
        p: { aUs: [54, 22], aAv: [46, 20], aVm: [62, 18] }, x: ["bC", "bS"] }
    ]
  },

  fazendachinesa: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 14, h: 78, l: "" },
      { t: "sea", x: 0, y: 61, w: 108, h: 18, l: "Great Bitter Lake" },
      { t: "note", x: 2, y: 8, l: "Suez Canal" },
      { t: "note", x: 12, y: 56, l: "Deversoir" },
      { t: "hill", x: 36, y: 11, rx: 7, ry: 4, l: "Missouri hill" },
      { t: "note", x: 44, y: 28, l: "Chinese Farm" },
      { t: "note", x: 20, y: 22, l: "Al-Galaa" },
      { t: "note", x: 20, y: 37, l: "Lexicon road" },
      { t: "note", x: 90, y: 40, l: "Tirtur" },
      { t: "note", x: 90, y: 50, l: "Akavish" }
    ],
    units: [
      { id: "iDi", s: "a", k: "tank", w: 9, h: 4, l: "600th Brigade (Raviv): feint" },
      { id: "iRe", s: "a", k: "tank", w: 10, h: 4, l: "14th Brigade (Reshef)" },
      { id: "iPa", s: "a", k: "inf", w: 9, h: 3, l: "Matt's paratroopers (243rd)" },
      { id: "iBr", s: "a", k: "car", w: 9, h: 3, l: "Bridges (Erez and Adan)" },
      { id: "iYa", s: "a", k: "inf", w: 9, h: 3, l: "Yairi's paratroopers (35th)" },
      { id: "iAd", s: "a", k: "tank", w: 10, h: 4, l: "Adan's division" },
      { id: "e16", s: "b", k: "inf", w: 16, h: 6, l: "16th Infantry Division" },
      { id: "e21", s: "b", k: "tank", w: 16, h: 5, l: "21st Armoured Division" },
      { id: "e18", s: "b", k: "inf", w: 10, h: 4, l: "18th Mechanized Brigade" }
    ],
    steps: [
      { t: "Afternoon of 15 October 1973. The Israeli forces are to the east. The Egyptian 16th Infantry Division holds the area of the Chinese Farm and the Tirtur-Lexicon junction, with the 21st Armoured Division to the north. The goal is to open a corridor to the canal, at Deversoir.",
        p: { iDi: [82, 34], iRe: [86, 44], iPa: [90, 55], iBr: [94, 50], iYa: [97, 64], iAd: [96, 58], e16: [46, 36], e21: [44, 14], e18: [54, 22] } },
      { t: "5 p.m.: Raviv's brigade attacks the center of the Egyptian bridgehead, from the east. The attack is repelled, as expected, but it draws the Egyptians' attention.",
        p: { iDi: [68, 34] } },
      { t: "Reshef enters without opposition, takes Lakekan and Matzmed without a shot and reports that the Akavish road is clear. Matt's brigade, stuck in traffic jams, falls behind.",
        p: { iRe: [64, 50], iPa: [76, 52] } },
      { t: "A tank company sent to the Lexicon-Tirtur junction is destroyed by Egyptian infantry. At 1:35 a.m. on 16 October, more than five hours late, the paratroopers begin to cross the canal. By 9 a.m., 2,000 paratroopers and about 30 tanks secure a bridgehead 4 km wide.",
        p: { iPa: [22, 56], iBr: [60, 52], iRe: [56, 50] } },
      { t: "The Akavish is closed again by Egyptian infantry. Reshef pushes his battalions north, toward Tirtur and the Chinese Farm. Two battalions lose 27 tanks on the Lexicon. At night, they run into the vehicle park of the Egyptian divisions, and both sides open fire.",
        p: { iRe: [42, 42], e16: [46, 34], e21: [42, 20] } },
      { t: "16 October: the Egyptian 1st Armoured Brigade, at al-Galaa, destroys about 15 Israeli tanks. By 4 a.m., Reshef had 41 of his 97 tanks. By noon, 27. After dawn, he takes the Lexicon-Tirtur junction, but is stopped when he attacks Tirtur, under fire from Missouri hill.",
        p: { iRe: [34, 40], e21: [36, 24], e18: [50, 28] } },
      { t: "Night of 16 to 17: Yairi's paratroopers attack Tirtur without armor or artillery observers. Pinned down by Egyptian fire, they have 40 to 70 killed and about 100 wounded in fourteen hours.",
        p: { iYa: [48, 40], iRe: [38, 46], e16: [46, 34] } },
      { t: "3 a.m. on 17 October: a half-track company finds the Akavish open, and Adan sends the pontoons down it. Egypt counterattacks with the 1st Brigade and 53 tanks, and is beaten back. Around 4 p.m., the pontoon bridge is ready.",
        p: { iBr: [30, 56], iAd: [50, 52], iYa: [56, 46], e21: [38, 28] } },
      { t: "On the night of 17 to 18, Abd el-Hamid's brigade, out of ammunition, abandons the Chinese Farm, and the Tirtur and Akavish roads are open. The roller bridge is laid at dawn on 18 October, and Adan's division crosses the canal.",
        p: { e16: [52, 20], iAd: [20, 56], iBr: [14, 56], iRe: [40, 44] } }
    ]
  }
});
