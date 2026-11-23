// In-depth battles, batch bl: fredericksburg, chancellorsville, chickamauga, atlanta, gravelotte (great-battles pack).
// Checked against the English, Portuguese and French Wikipedia articles on each battle, the American Battlefield Trust
// and National Park Service summaries (Atlanta, Chickamauga), the HistoryNet account of Gravelotte-Saint-Privat, and the
// works those pages cite (Howard, Elliot-Wright, Cozzens, Connelly). Where sources disagree the text says so.
// Aircraft and tanks do not appear. Artillery uses the "art" kind directly.

Object.assign(GLOSSARY, {
  "grande divisão": "A group of two army corps brought together under one general. Burnside split the Army of the Potomac into three of them, instead of commanding every corps directly.",
  "mitrailleuse": "A French weapon with many barrels, which fired bursts when the gunner turned a crank. It was an ancestor of the machine gun, but it sat on a gun carriage and was used as artillery.",
  "artilharia a cavalo": "Light guns pulled by horses, with the gunners mounted too. They change position quickly and fire by surprise, for example into the enemy's flank.",
  "flanco no ar": "The end of a line that rests on no river, hill, forest or other troops. The enemy can go around it and attack from there.",
  "guarda prussiana": "The elite corps of the Prussian army, made up of its most traditional regiments and hand-picked soldiers.",
  "marcha de flanco": "The march of an army corps along a hidden route, around the enemy line, to attack it from the side or from behind."
});

Object.assign(DEEP, {
  fredericksburg: {
    war: "American Civil War (1861–1865)",
    hook: "Seven Union divisions attacked a stone wall, one after another, and not one reached it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "At the end of 1862, President Abraham Lincoln needed a victory. The Confederate invasions of Kentucky and Maryland had been turned back, but the Southern armies were still intact. On 5 November, Lincoln removed General George McClellan from command of the Army of the Potomac, which he thought too slow. On 7 November, Ambrose Burnside took over, doubting he was the right person for the post.",
        "Burnside's plan was simple: pretend to go west, then cross the Rappahannock River quickly at Fredericksburg and follow the railroad to Richmond, the Confederate capital. Lincoln approved it on 14 November, without much faith that Lee would react the way Burnside expected. The plan depended on speed. But the [[pontoon bridges|pontão]] the army needed to cross the river arrived late, because of administrative errors: only part of them were at Falmouth on 25 November, and the rest came at the end of the month.",
        { h: "The road to Fredericksburg" },
        { timeline: [
          ["5–7 Nov 1862", "Lincoln fires McClellan. Burnside takes over the Army of the Potomac."],
          ["14 Nov", "Lincoln approves the plan to cross the river at Fredericksburg."],
          ["23 Nov", "Longstreet's corps already holds Marye's Heights, behind the town."],
          ["29 Nov", "Jackson's corps arrives, after a forced march from Winchester."],
          ["9 Dec", "Burnside decides to cross the river right in front of the town."]
        ]},
        "While Burnside waited for the bridges, Lee concentrated his army. At first he thought the Federals would cross and then fall back. When he saw they were slow, he gathered his troops at Fredericksburg."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Ambrose Burnside" },
        "He was a loyal general, loved by his soldiers, but he said he was not prepared to command a whole army, and he was the first to tell Lincoln so. At Fredericksburg, he made one decision and did not change it: when he saw the frontal attack failing, he ordered it repeated. His orders to the wing generals were vague, and that weighed on the result.",
        { h: "Robert E. Lee" },
        "He had commanded the Army of Northern Virginia since June. He chose the ground carefully and waited. They say that, watching the Federal attack fall apart from the hill that now bears his name, he said: 'It is well that war is so terrible, or we should grow too fond of it.' The line is famous, but its exact wording is disputed.",
        { h: "The other names" },
        "On the Confederate side, James Longstreet, with his corps on Marye's Heights, told Lee he could destroy any force that attacked that point. Thomas 'Stonewall' Jackson covered the south, at Prospect Hill. On the Union side, Burnside had split the army into three [[Grand Divisions|grande divisão]]: the Right, under Edwin Sumner; the Center, under Joseph Hooker; and the Left, under William Franklin."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Union had about 120,000 men, of whom about 114,000 were engaged. The Confederates totaled about 78,500, with about 72,500 engaged. More than half of Lee's army never fought.",
        { h: "The terrain" },
        "Fredericksburg sits on the south bank of the Rappahannock. On the other side, on Stafford Heights, the Federals placed about 220 guns, which covered the town. Behind the town, the plain ran about 600 yards (550 meters) to Marye's Heights, 40 to 50 feet (12 to 15 meters) above the ground. A canal, about 200 yards (180 meters) from the town, cut across the way, and it could be crossed only by three narrow bridges, which forced the troops to march in column. At the foot of the hill, the Telegraph Road ran in a [[sunken road|estrada funda]], protected by a stone wall about 4 feet (1.2 meters) high, reinforced with logs and [[abatis|abatis]]. To the south, Jackson's line ran along Prospect Hill.",
        { h: "Crossing the river" },
        "Before dawn on 11 December, the engineers began to build six bridges. The [[sharpshooters|franco-atirador]] of William Barksdale's Mississippi brigade fired from the cellars of the houses and stopped the work. Around 3 p.m., soldiers of the 7th Michigan and the 19th and 20th Massachusetts crossed in boats and cleared the town street by street. On 12 December, the rest of the army crossed. The soldiers looted the town, which angered Lee.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, in the south, on the morning of 13 December. A thick fog covered the field until about 10:30. George Meade's division, with about 4,500 men, and John Gibbon's advanced at 8:30. John Pelham's guns, [[horse artillery|artilharia a cavalo]] posted on the Richmond Road, fired into Meade's flank, and Walker's batteries on Prospect Hill held him up for almost two hours.",
        "Second, around 1 p.m., Meade's men broke through a gap of about 600 yards (550 meters) in A. P. Hill's line and shattered Maxcy Gregg's brigade, and Gregg was mortally wounded. It was the chance to split Jackson's line. But Franklin sent no reinforcements, although he had about 20,000 men at hand. The reserves of Jubal Early and William Taliaferro counterattacked and pushed Meade back. Gibbon's attack failed, and Gibbon was wounded. Losses there were about 5,000 Union men and 3,400 Confederates.",
        "Third, in the north, from noon until 2 p.m. Sumner's men attacked Marye's Heights in sequence: the divisions of French, Hancock, Howard and Sturgis. Each one came out of the town, crossed the canal in column and was torn apart by fire from the wall and from Porter Alexander's artillery above. McLaws's division had about 2,000 men on the front line and about 7,000 in reserve. The Irish Brigade lost 545 of about 1,200 men. Hancock's division had 2,032 casualties, the most of any Union division that day. Thomas Cobb, the Confederate commander at the wall, was mortally wounded, and Joseph Kershaw replaced him.",
        "Fourth, from 3:30 p.m. until dark. Hooker went to Burnside to ask him to stop the attacks and was ordered to continue. The divisions of Griffin, Humphreys and Getty attacked and were repulsed. In all, seven divisions made fourteen charges, and none came close to the wall. Union losses at Marye's Heights were 6,000 to 8,000 men, against about 1,200 Confederates.",
        { note: "Longstreet later wrote that the Federal charges were 'utterly hopeless'." },
        { h: "The night and the withdrawal" },
        "On 14 December, Burnside thought of personally leading the IX Corps in a new attack, but he was talked out of it. He asked for a truce to collect the wounded, and Lee granted it. On the night of 15 December, the Union army crossed the river back and ended the campaign."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Union lost 12,653 men (1,284 killed, 9,600 wounded and 1,769 captured or missing). The Confederates lost 5,377 (608 killed, 4,116 wounded and 653 captured or missing). Two Union generals, George Bayard and Conrad Jackson, and two Confederates, Maxcy Gregg and Thomas Cobb, died of their wounds.",
        "Burnside was relieved about a month later, in January 1863, after an attempted winter march, the 'Mud March', which bad weather turned into a failure. Joseph Hooker took over.",
        { h: "Why it matters" },
        "The battle was one of the most one-sided of the war. At Fredericksburg, the side that attacked lost more than twice as many men as the other, without gaining a yard. The defeat sank morale in the North. Lincoln is said to have remarked: 'If there is a worse place than hell, I am in it.' The governor of Pennsylvania, Andrew Curtin, visited the White House and reported that Lincoln was devastated.",
        { h: "Curiosities and controversies" },
        { note: "The 'Angel of Marye's Heights': Sergeant Richard Kirkland of the 2nd South Carolina is said to have given water to wounded Federals lying in front of the wall. The story was recorded only in 1880 and may have been embellished." },
        { note: "Lee's line about war being terrible appears in accounts by people who heard it from the hill. The exact wording is disputed, and the English Wikipedia points out that it was popularized by Douglas Southall Freeman." },
        { note: "Burnside wore long side whiskers, and the English word 'sideburns' comes from his name." }
      ]}
    ]
  },

  chancellorsville: {
    war: "American Civil War (1861–1865)",
    hook: "Lee split his army twice in the face of an enemy with more than twice his men, and won.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In January 1863, after Fredericksburg and the Mud March, Joseph Hooker took over the Army of the Potomac. He reorganized the army, improved morale and built a better intelligence service. By spring, he had about 134,000 men and a plan.",
        "A first plan, based on a cavalry raid by George Stoneman, failed in April because of rain. The second was a double maneuver: part of the army, under John Sedgwick, would stay in front of Fredericksburg to pin Lee down, while the main body crossed the Rappahannock River upstream and attacked him from the west.",
        { h: "The road to Chancellorsville" },
        { timeline: [
          ["Jan 1863", "Hooker takes over the Army of the Potomac."],
          ["30 Apr", "The main Federal army, after crossing the river upstream, reaches Chancellorsville."],
          ["1 May", "Lee leaves a small force at Fredericksburg and goes to attack Hooker. Hooker falls back into the Wilderness woods."],
          ["2 May", "Jackson's flank march and attack on the XI Corps."],
          ["3 May", "The bloodiest day. Hooker is injured and the Federal army falls back."],
          ["5–6 May", "The Federals cross the river back."]
        ]},
        "Lee had about 60,000 men. Longstreet's divisions were far away, near Norfolk, an absence that Lee later called a grave mistake."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Joseph Hooker" },
        "Nicknamed 'Fighting Joe', he came to the post with a reputation for aggressiveness. At Chancellorsville, the very thing that stopped was the will to fight: after the first day, he fell back on the defensive, and many subordinates protested. According to a line attributed to him, before the battle, 'My plans are perfect. May God have mercy on General Lee, for I will have none.' The attribution cannot be confirmed.",
        { h: "Robert E. Lee" },
        "Seeing an enemy more than twice the size of his own, he did not wait. He split the army, leaving Jubal Early and a small force at Fredericksburg, and went with about four-fifths of the army to attack Hooker. Then he split it again, sending Jackson around the flank. Both risks were enormous, and he took them together.",
        { h: "Thomas 'Stonewall' Jackson" },
        "He commanded the II Corps, with about 28,000 men. He led the flank march, knocked the XI Corps out of the fight and, that night, was shot by his own soldiers.",
        { h: "The other names" },
        "On the Federal side, Oliver Howard commanded the XI Corps, which stood at the right end of the line. Daniel Sickles commanded the III Corps and held Hazel Grove. On the Confederate side, J. E. B. Stuart, of the cavalry, took over Jackson's corps after he was wounded."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Union had about 133,868 men present. The Confederates had about 60,298. The numbers are those of the English Wikipedia.",
        { h: "The terrain" },
        "Chancellorsville was just a house at a crossroads, in the middle of the Wilderness, a dense, low forest where it was hard to see, form a line or use artillery. It was a good place for a smaller army. Hazel Grove, a high clearing, gave a firing advantage to whoever held it.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, on 1 May, Lee split the army and attacked Hooker's advance. Hooker stopped the offensive and fell back into the Wilderness, to defend Chancellorsville. Some historians see this as the decisive mistake of the campaign.",
        "Second, on 2 May, Jackson made a [[flank march|marcha de flanco]] of about 12 miles (19 km) with his 28,000 men, from 7 or 8 a.m. until mid-afternoon. The owner of the Catharine Furnace, Charles Wellford, showed Jackson's cartographer, Jedediah Hotchkiss, a recently built road through the woods. Fitzhugh Lee's cavalry found that Howard's XI Corps had its [[flank in the air|flanco no ar]], camped on the Orange Turnpike, with only two guns facing the woods. Hooker had been warned, but the corps was not prepared.",
        "Third, around 5:30 p.m., Jackson asked Rodes: 'General, are you ready?' and ordered the attack. The XI Corps fell apart. After dark, Jackson was returning from a reconnaissance when the 18th North Carolina, thinking they were Federal horsemen, fired on him. Jackson took three bullets, and his left arm was amputated.",
        "Fourth, on 3 May. Hooker ordered Sickles to leave Hazel Grove, and the Confederates put 30 guns there, under Porter Alexander. At 9:15 a.m., a cannonball hit the wooden pillar Hooker was leaning on; he probably suffered a concussion and was unconscious for more than an hour. Fairview was abandoned by 10 a.m., and the Federal army began to fall back toward the river. It was the second bloodiest day of the war.",
        { h: "Fredericksburg again" },
        "Meanwhile, Sedgwick attacked and defeated the small Confederate force at Marye's Heights, advanced west and was stopped at Salem Church. Hooker later blamed him for not obeying an order. Lee turned against Sedgwick, and Sedgwick withdrew on 5 May. Hooker crossed the river back on the night of 5 to 6 May."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Union lost about 17,287 men (1,606 killed, 9,762 wounded and 6,919 captured or missing). The Confederates lost about 12,764 (1,665 killed, 9,081 wounded and 2,018 captured or missing).",
        "Jackson died of pneumonia on 10 May. Lee compared the loss to that of his right arm.",
        { h: "Why it matters" },
        "Many historians call Chancellorsville Lee's 'perfect battle', the product of his boldness and of Hooker's hesitant decisions. But the victory cost Jackson. A month later, Lee marched north, in the Gettysburg campaign, without his best corps commander.",
        { h: "Curiosities and controversies" },
        { note: "Longstreet absent: two of his divisions were far away, near Norfolk. Lee later considered this a grave miscalculation." },
        { note: "The order to fall back on 1 May is seen by many historians as Hooker's decisive mistake, but some also point to the unprepared XI Corps. The causes of the defeat are still debated." }
      ]}
    ]
  },

  chickamauga: {
    war: "American Civil War (1861–1865), Chickamauga campaign",
    hook: "A misunderstood order opened a hole for a few minutes, and an army went through it.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In 1863, Chattanooga, Tennessee, was one of the keys of the war: a rail hub linking the South to the interior of Georgia. After the Tullahoma campaign, General William Rosecrans, of the Army of the Cumberland, advanced on the city. General Braxton Bragg, of the Army of Tennessee, evacuated it in early September.",
        "Rosecrans pursued Bragg and ended up with his corps spread over about 40 miles (65 km). Bragg received reinforcements from Mississippi and two divisions of James Longstreet's, who came from Virginia by train. He wanted to attack the Federal corps before they could join up. Rosecrans's army narrowly escaped a defeat at Davis's Cross Roads, on 11 September, and came together.",
        { h: "The road to Chickamauga" },
        { timeline: [
          ["Jun–Aug 1863", "Rosecrans maneuvers and forces Bragg out of central Tennessee."],
          ["Early Sep", "Bragg abandons Chattanooga. The Federal corps spread out across the region."],
          ["11 Sep", "The Federals narrowly escape an attack at Davis's Cross Roads."],
          ["19 Sep", "First day of battle, near West Chickamauga Creek."],
          ["20 Sep", "Second day: the hole in the Federal line and Thomas's defense."]
        ]},
        "The name comes from West Chickamauga Creek. The popular translation, 'river of death', is a loose one, according to the historian Peter Cozzens. Other sources give 'stagnant water', 'good country' or a Chickasaw word meaning 'to be good'."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "William Rosecrans" },
        "He commanded the Army of the Cumberland. He had taken Chattanooga through maneuver, almost without fighting. At Chickamauga, he relied on orders dictated quickly to officers, and one of them came out badly.",
        { h: "Braxton Bragg" },
        "He commanded the Army of Tennessee. After the battle, he did not pursue the Federals, and the historian Thomas Connelly criticizes him for missing the chance to block the road to Chattanooga. He quarreled with Longstreet, to whom he said that there was not a man in the right wing 'who has any fight in him'.",
        { h: "George H. Thomas" },
        "He commanded the XIV Corps, on the Federal left wing. He held the line twice: in the morning, against the attacks of Breckinridge and Cleburne, and in the afternoon, on Snodgrass Hill and Horseshoe Ridge.",
        { h: "James Longstreet" },
        "He came from Virginia with two divisions and commanded the Confederate left wing. His attack, led by the divisions of Bushrod Johnson and John Bell Hood, opened the gap through which the Federal army broke."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The Army of the Cumberland had about 60,000 men: Thomas's XIV Corps (22,781), McCook's XX (13,156), Crittenden's XXI (14,660), Gordon Granger's [[Reserve Corps|reserva]] (7,372) and the cavalry (10,078). The Army of Tennessee had about 65,000, divided into two wings: Leonidas Polk's on the right and Longstreet's on the left. The numbers are those of the English Wikipedia. Other books give slightly different estimates.",
        { h: "The terrain" },
        "A region covered in dense woods and clearings, cut by the Lafayette Road, which ran north to south, and by West Chickamauga Creek. It was ground where commanders could see little and troops got lost, which explains much of the confusion.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, on 19 September, the fighting began almost by accident, when Federal and Confederate troops met near Jay's Mill and Reed's Bridge. The Confederate attacks were disjointed and did not break the line, although they gained ground near the Brotherton and Viniard fields. Cozzens estimates about 6,000 to 9,000 Confederate casualties and about 7,000 Federal casualties that day, numbers hard to separate from the totals.",
        "Second, on 20 September, Bragg's plan to attack the Federal left was delayed by confusion in the command. The attacks of Breckinridge and Cleburne against Thomas's line failed.",
        "Third, the fatal order. Rosecrans dictated to Thomas J. Wood the order: 'The general commanding directs that you close up on Reynolds as fast as possible, and support him.' Wood took his division out of the line, and a hole opened. At 11:10 a.m., Longstreet's column, led by the divisions of Bushrod Johnson and Hood, went through the hole at the Brotherton field and shattered the Federal units there. Hood was shot in the thigh and lost his leg, amputated near the hip. Rosecrans, James Garfield (his chief of staff), McCook and Crittenden fled to Chattanooga. About one-third of the Federal army was routed.",
        "Fourth, Thomas. His men formed a line on Snodgrass Hill and Horseshoe Ridge and repulsed attack after attack. Gordon Granger sent James Steedman's division to Horseshoe Ridge without explicit orders, and it arrived in the rear just as Bushrod Johnson attacked. The 21st Ohio, with Colt revolving rifles, spent about 43,550 rounds. Three regiments left without ammunition were surrounded and surrendered. At nightfall, Thomas withdrew to Chattanooga.",
        { note: "Garfield sent Rosecrans the message 'Thomas is standing like a rock', and the nickname 'Rock of Chickamauga' stuck." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Union lost 16,170 men (1,657 killed, 9,756 wounded and 4,757 captured or missing). The Confederates lost 18,454 (2,312 killed, 14,674 wounded and 1,468 captured or missing). It was the second bloodiest battle of the war, after Gettysburg, and the biggest Union defeat in the West.",
        "Bragg did not pursue the Federals effectively. He besieged Chattanooga. Rosecrans was relieved on 19 October, and Thomas took over. Longstreet was sent to Knoxville, which weakened Bragg. In November, Grant broke the siege, at Lookout Mountain (23 November) and Missionary Ridge (25 November), and opened the way for Sherman's Atlanta campaign in 1864.",
        { h: "Curiosities and controversies" },
        { note: "The numbers: Wikipedia gives 60,000 Federals and 65,000 Confederates. Other sources vary a little, and so do the limits of each corps." },
        { note: "The dates: the Wikipedia infobox gives 18 to 20 September, which probably includes the skirmishes of the 18th. The battle itself was on 19 and 20 September." }
      ]}
    ]
  },

  atlanta: {
    war: "American Civil War (1861–1865), Atlanta campaign",
    hook: "Hood sent a whole corps around Sherman's rear, but the march ran late and the blow lost its surprise.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "In May 1864, General William T. Sherman left Chattanooga heading for Atlanta, Georgia, the great rail hub of the South. After weeks of maneuvering, Confederate President Jefferson Davis lost patience with General Joseph Johnston, who kept falling back, and replaced him with John Bell Hood, on 17-18 July. The date varies: the English Wikipedia gives the 17th and the American Battlefield Trust gives the 18th.",
        "Hood was aggressive. He attacked right away at Peachtree Creek, on 20 July, and lost more than 2,500 men for nothing. Two days later, he tried again, with a much more ambitious plan.",
        { h: "The road to Atlanta" },
        { timeline: [
          ["May 1864", "Sherman advances from Chattanooga against Johnston's Army of Tennessee."],
          ["17–18 Jul", "Hood replaces Johnston."],
          ["20 Jul", "Hood attacks at Peachtree Creek and fails."],
          ["21–22 Jul", "During the night, Hardee's corps marches around Atlanta."],
          ["22 Jul", "Battle of Atlanta."]
        ]},
        "Sherman was squeezing Atlanta from the north and the east. James McPherson's Army of the Tennessee came from the east, through Decatur, and was the Federal left end."
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "William T. Sherman" },
        "He commanded all the Federal forces in the region. At first he thought Hood was evacuating Atlanta. When he learned he was not, he ordered McPherson to use Grenville Dodge's XVI Corps to wreck the Georgia Railroad. McPherson feared an attack on his left flank, and Sherman agreed to delay the order until 1 p.m. Hardee's attack began before the order arrived.",
        { h: "James B. McPherson" },
        "He commanded the Army of the Tennessee. He sensed the danger before it came, and died because of it.",
        { h: "John Bell Hood" },
        "He replaced Johnston a few days before the battle and wanted to end the retreating. He planned the attack in three parts: William Hardee's corps would march around the Federal left, Joseph Wheeler's cavalry would strike the wagon trains near Decatur, and Benjamin Cheatham's corps would attack head-on from the Atlanta trenches.",
        { h: "The other names" },
        "John Logan, of the XV Corps, took over the Army of the Tennessee when McPherson died. Frank Blair commanded the XVII Corps, and Mortimer Leggett one of its divisions. On the Confederate side, Patrick Cleburne and William Walker commanded divisions of Hardee's corps."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The English Wikipedia gives 34,863 Federals and 40,438 Confederates present for duty, and, in a note citing Livermore, 30,477 and 36,934 effectives. The variation comes from what each source counts as 'present'. Other sources say that only about 9,000 of Hardee's 14,000 men arrived in time.",
        { h: "The terrain" },
        "The Federal line faced Atlanta from the east, along the Georgia Railroad, with its left, in the south, [[in the air|flanco no ar]]. The strongest point of that left was Bald Hill, a treeless hill that dominated the field, held by Leggett's division. It is also called Leggett's Hill, after the general who defended it.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, the late march. Hardee left the lines during the night of 21 to 22 July, on a march of about 15 miles (24 km). The night was hot, the roads dusty and the men exhausted, and the four divisions did not reach McPherson's rear in the morning, as planned. While getting into position, William Walker was killed by a Federal sharpshooter. The attack began a little after noon.",
        "Second, Hardee's two right-hand divisions, among them Walker's, struck Thomas Sweeny's division of the XVI Corps, which by chance was in the right place, and were repulsed. Wheeler took Decatur, but could not capture the wagon train.",
        "Third, the gap. Cleburne's division slipped between the XVI and XVII Corps. McPherson, who was riding to see Blair's corps, ran into part of that line. Captain Richard Beard, of the 5th Confederate Infantry, said he signaled him to surrender. McPherson turned his horse and fled, and was shot dead. Logan took over. Cleburne and Maney attacked the XVII Corps from front and rear, and the Federal line bent into an L, with Leggett's division holding Bald Hill until after dark.",
        "Fourth, around 3 p.m., Hood ordered Cheatham to attack from the Atlanta [[trenches|trincheira]]. His men, with the divisions of Brown and Clayton, broke the XV Corps line at the Troup Hurt house, beside the railroad, and took a battery. About 20 guns near Sherman's headquarters fired on them, and Logan counterattacked and restored the line. By evening, the Confederates were back at their starting point.",
        { h: "Decatur" },
        "In the east, Wheeler entered Decatur by the Fayetteville Road. Colonel John Sprague's brigade, of the XVI Corps, held the town and saved the wagon trains of the XV, XVI, XVII and XX Corps. With Hardee's failure, Wheeler withdrew. Sprague received the Medal of Honor."
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Union lost about 3,700 men (3,722 in Logan's report; another source says 3,641). The Confederates lost about 5,500 (5,000 to 5,500, depending on the source), plus a few hundred in Wheeler's cavalry.",
        "Hood did not crush Sherman's flank. Sherman swung west on 27 July, to cut the Macon railroad. There was another fight, at Ezra Church (28 July), a Federal victory. On 31 August, at Jonesboro, the Federals took the Macon railroad. Hood evacuated Atlanta on 1 September, destroying depots and setting fire to 81 loaded ammunition cars. On 2 September, Mayor James Calhoun surrendered the city. Sherman telegraphed: 'Atlanta is ours, and fairly won.'",
        { h: "Why it matters" },
        "The fall of Atlanta lifted the North at a time when the war seemed endless. Lincoln, who feared losing the election, was re-elected with 212 of 233 electoral votes. On 15 November, Sherman left Atlanta on the March to the Sea.",
        { h: "Curiosities and controversies" },
        { note: "The blame: Hood accused Hardee of failing to strike the Federal rear. According to other accounts, what decided it was the position of the XVI Corps and the steadiness of the XVII." },
        { note: "The name of the hill: Bald Hill and Leggett's Hill are the same position, and the second name comes from the general who defended it." }
      ]}
    ]
  },

  gravelotte: {
    war: "Franco-Prussian War (1870–1871)",
    hook: "The Prussian Guard attacked across open ground and lost almost half its men, but the battle trapped the French army in Metz.",
    chapters: [
      { n: "01", title: "The world before", blocks: [
        "The war of 1870 began in July, when France declared war on Prussia. The Germans, better organized, quickly entered Lorraine. On 16 August, at Mars-la-Tour, they blocked the way of [[Marshal|marechal]] François Bazaine, commander of the Army of the Rhine, to Verdun. Bazaine fell back and occupied a strong position west of the fortress of Metz.",
        "The French line ran from Rozerieulles, in the south, to Saint-Privat, in the north, over gentle hills east of the Moselle River. The French dug what they could during the night, with few tools, and sheltered in hedges, low walls, villages and farms. Bazaine thought the position almost impossible to take.",
        { h: "The road to Gravelotte" },
        { timeline: [
          ["Jul 1870", "France declares war on Prussia."],
          ["16 Aug", "Mars-la-Tour: the Germans block Bazaine's retreat to Verdun."],
          ["18 Aug", "Battle of Gravelotte-Saint-Privat."],
          ["19 Aug", "The Army of the Rhine falls back into Metz."],
          ["2 Sep", "Sedan: Napoleon III surrenders."],
          ["27 Oct", "Metz surrenders after two months of [[siege|cerco]]."]
        ]}
      ]},
      { n: "02", title: "The protagonists", blocks: [
        { h: "Helmuth von Moltke" },
        "Chief of the Prussian [[general staff|estado-maior]], he planned the campaign. At Gravelotte, the plan was a 'sickle cut': the Second Army would cut the French right, while the First Army advanced at Mance. King Wilhelm I was on the field.",
        { h: "The Prussian generals" },
        "Karl von Steinmetz commanded the First Army. According to the HistoryNet account and the French Wikipedia, he disobeyed Moltke, who had ordered him to use only artillery, and sent the infantry across the ravine. Prince Frederick Charles commanded the Second Army, and Prince Augustus of Württemberg the Guard. Crown Prince Albert of Saxony commanded the Saxons of the XII Corps.",
        { h: "François Bazaine and his corps" },
        "Bazaine thought the main attack would come against the left and the center, and put the [[Imperial Guard|guarda imperial]] in reserve there. He had no plan for a general counterattack. Marshal Canrobert commanded the VI Corps at Saint-Privat, and General Charles Bourbaki the Guard. Historians debate whether Bazaine's passivity was incompetence or calculation.",
        { h: "The two armies" },
        "The French had the [[chassepot|chassepot]], a rifle with longer range than the Prussian [[needle gun|fuzil de agulha]], and the [[mitrailleuse|mitrailleuse]]. The Germans had the steel guns of [[Krupp|krupp]], more accurate and longer-ranged."
      ]},
      { n: "03", title: "Step by step", blocks: [
        { h: "The forces" },
        "The English Wikipedia gives 188,332 Germans, with 210 infantry battalions, 133 cavalry squadrons and 732 guns. The French had 112,800 men and 520 guns. A HistoryNet account speaks of fewer than 200,000 Germans and about 110,000 French.",
        { h: "The terrain" },
        "The villages of Gravelotte, Amanvillers and Saint-Privat-la-Montagne marked the line. In front of the French left lay the Mance ravine, which the German troops had to cross under fire. Near Saint-Privat, the slope was open, without cover, and that was the site of the worst slaughter.",
        { h: "The battle in four moves" },
        { formation: true },
        "First, in the morning. At 8 a.m., Wilhelm I and Moltke ordered the First and Second Armies to advance. The German command believed the French right ended near Amanvillers. Around noon, Manstein put the artillery of the 25th Division into action near Amanvillers, and the fire of chassepots and mitrailleuses stopped the Germans before their needle guns could answer.",
        "Second, in the afternoon, in the south. At 2:30 p.m., Steinmetz sent the VIII Corps across the Mance ravine. It was stopped by rifle and mitrailleuse fire. At 3 p.m., the Krupp guns of the VII and VIII Corps opened fire. At 4 p.m., Steinmetz sent forward the VII Corps and the 1st Cavalry Division. It failed too. Near 6:30 p.m., a large part of the two corps panicked and fell back toward Rezonville.",
        "Third, in the north, at Saint-Privat. Prince Frederick Charles realized, around noon, that the French line extended farther north than thought, and told the Guard to wait for the Saxons. About 200 guns bombarded the French positions for hours, according to one account. Canrobert asked for reinforcements and received only a few hundred rounds of artillery ammunition. Bazaine, who saw the fighting as secondary, sent no reserves. At 4:50 p.m., the [[Prussian Guard|guarda prussiana]] attacked Saint-Privat, across open ground, brigade after brigade (5:15, 5:45, 6:15 p.m.). The attacks stopped about 1,000 yards (900 meters) from the French lines, and some men got to about 600 yards (550 meters). In all, it lost about 8,000 of its 18,000 men. The Guard Jäger Battalion lost 19 officers and 431 of 700 men.",
        "Fourth, the turn. At 7 p.m., the 3rd Division of the II Corps crossed the ravine, the Saxons cleared Roncourt and turned the French right flank, and the survivors of the Guard attacked again. Between 7:30 and 8 p.m., Saint-Privat fell, after hand-to-hand fighting in the cemetery. Canrobert withdrew with the remains of his corps. The rest of the French army pulled back from right to left. Some French officers wanted a counterattack, but Bourbaki refused to launch the Guard: ammunition was low, Prussian artillery was outflanking them, and he had lost a quarter of his men. The firing stopped around 10 p.m. The Germans did not pursue.",
        { note: "The exact time Saint-Privat fell varies: the English Wikipedia gives 8 p.m., another account gives about 7:30 p.m." }
      ]},
      { n: "04", title: "Legacy", blocks: [
        { h: "Result" },
        "The Germans lost about 20,160 men (5,237 killed, 14,430 wounded and 493 captured or missing; the Wikipedia text gives 20,163). The French lost 12,275 (1,146 killed, 6,709 wounded and 4,420 captured or missing, about half of them wounded), but the records are incomplete. Most German casualties came from the chassepot, and most French casualties from artillery.",
        "On the morning of 19 August, the Army of the Rhine fell back to Metz. On 20 August, the Germans completed the encirclement, cutting the telegraph and the railroad to Thionville. Steinmetz was later removed from command.",
        { h: "Why it matters" },
        "It was the largest battle of the war. It closed the last exit of the Army of the Rhine to the west. Two weeks later, at Sedan, Napoleon III himself surrendered, and on 27 October Bazaine did the same at Metz. For soldiers, it showed the power of rifle fire against infantry in close order and the value of steel artillery.",
        { h: "Curiosities and controversies" },
        { note: "The Guard's decision: many historians criticize the Guard's frontal attack on Saint-Privat, across open ground, before the Saxons had reached the flank." },
        { note: "The name: the Germans call the battle Gravelotte, the French call it Saint-Privat." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  fredericksburg: {
    terrain: [
      { t: "sea", x: -5, y: 11, w: 110, h: 5, l: "Rappahannock River" },
      { t: "hill", x: 14, y: 36, rx: 9, ry: 15, l: "Marye's Heights" },
      { t: "hill", x: 80, y: 50, rx: 11, ry: 8, l: "Prospect Hill" },
      { t: "note", x: 3, y: 3, l: "Stafford Heights" },
      { t: "note", x: 27, y: 20, l: "Fredericksburg" },
      { t: "note", x: 90, y: 3, l: "North ↑" }
    ],
    units: [
      { id: "aGun", s: "a", k: "art", w: 26, h: 3, l: "Federal artillery on Stafford (≈ 220 guns)" },
      { id: "aII", s: "a", k: "inf", w: 10, h: 4, l: "II Corps (French, Hancock, Howard)" },
      { id: "aIX", s: "a", k: "inf", w: 10, h: 4, l: "Sturgis (IX Corps)" },
      { id: "aHk", s: "a", k: "inf", w: 12, h: 4, l: "Hooker: Griffin, Humphreys, Getty" },
      { id: "aMe", s: "a", k: "inf", w: 10, h: 4, l: "Meade" },
      { id: "aGi", s: "a", k: "inf", w: 8, h: 4, l: "Gibbon" },
      { id: "aFr", s: "a", k: "inf", w: 12, h: 4, l: "Franklin's reserve (≈ 20,000)" },
      { id: "bBa", s: "b", k: "inf", w: 6, h: 3, l: "Barksdale (sharpshooters in the houses)" },
      { id: "bMa", s: "b", k: "inf", w: 4, h: 12, l: "Cobb and Kershaw (stone wall)" },
      { id: "bAl", s: "b", k: "art", w: 8, h: 3, l: "Alexander's artillery" },
      { id: "bHi", s: "b", k: "inf", w: 10, h: 4, l: "A. P. Hill (Gregg)" },
      { id: "bEa", s: "b", k: "inf", w: 10, h: 4, l: "Early and Taliaferro (reserves)" },
      { id: "bPe", s: "b", k: "art", w: 6, h: 3, l: "Pelham (horse artillery)" }
    ],
    steps: [
      { t: "11 December 1862, before dawn. The Union is on the north side of the river, under the guns of Stafford. The Confederates hold Marye's Heights, behind the town, and Prospect Hill, to the south, where Jackson is.",
        p: { aGun: [30, 4], aII: [22, 7], aIX: [34, 7], aHk: [48, 7], aMe: [66, 7], aGi: [76, 7], aFr: [88, 7],
             bBa: [28, 24], bMa: [14, 36], bAl: [18, 28], bHi: [78, 46], bEa: [88, 56], bPe: [66, 40] } },
      { t: "The Federal engineers begin laying the bridges. Barksdale's sharpshooters, hidden in the cellars of the town, fire on them and stop the work.",
        p: { aII: [27, 13], aIX: [34, 13] } },
      { t: "Around 3 p.m., soldiers cross in boats and clear the town street by street. On 12 December, the rest of the army crosses the bridges, while Franklin crosses in the south. Barksdale falls back to the hill.",
        p: { aII: [28, 22], aIX: [34, 23], aHk: [46, 15], aMe: [70, 18], aGi: [78, 18], aFr: [88, 18], bBa: [18, 32] } },
      { t: "13 December, morning, in the south. In the fog, Meade's division advances on Prospect Hill. Pelham's horse artillery fires into its flank and the batteries on the hill hold it up for almost two hours.",
        p: { aMe: [72, 36], aGi: [80, 34], bPe: [92, 34] } },
      { t: "Around 1 p.m., Meade's men get through a gap in A. P. Hill's line and shatter Gregg's brigade. It is the chance to split Jackson's line.",
        p: { aMe: [78, 48], aGi: [82, 44], bHi: [84, 54] } },
      { t: "Franklin does not send the roughly 20,000 men of the reserve. Early and Taliaferro counterattack and push Meade back. Gibbon's attack fails.",
        p: { bEa: [80, 46], aMe: [72, 34], aGi: [78, 32], bHi: [86, 54] } },
      { t: "In the north, from noon. Sumner's divisions come out of the town, cross the canal in column and attack the stone wall at Marye's Heights, one after another. Each is torn apart.",
        p: { aII: [26, 33], aIX: [27, 38] } },
      { t: "From 3:30 p.m. until dusk. Hooker argues with Burnside and is ordered to attack. Griffin, Humphreys and Getty try and are repulsed. In all, seven divisions make fourteen charges, and none reaches the wall.",
        p: { aHk: [27, 28], aII: [30, 26] } },
      { t: "Burnside thinks of attacking again on 14 December, but gives up. Lee grants a truce for the wounded. On the night of 15 December, the Federal army goes back across the river.",
        p: { aII: [22, 7], aIX: [34, 7], aHk: [48, 7], aMe: [66, 7], aGi: [76, 7], aFr: [88, 7] } }
    ]
  },

  chancellorsville: {
    terrain: [
      { t: "sea", x: -5, y: 2, w: 110, h: 5, l: "Rappahannock River" },
      { t: "hill", x: 54, y: 46, rx: 5, ry: 4, l: "Hazel Grove" },
      { t: "note", x: 38, y: 36, l: "Chancellorsville" },
      { t: "note", x: 84, y: 14, l: "Fredericksburg" },
      { t: "note", x: 2, y: 66, l: "North ↑" }
    ],
    units: [
      { id: "aXI", s: "a", k: "inf", w: 10, h: 4, l: "XI Corps (Howard)" },
      { id: "aMn", s: "a", k: "inf", w: 12, h: 5, l: "Hooker's corps at Chancellorsville" },
      { id: "aSk", s: "a", k: "inf", w: 8, h: 4, l: "III Corps (Sickles, Hazel Grove)" },
      { id: "aSe", s: "a", k: "inf", w: 10, h: 4, l: "Sedgwick (VI Corps)" },
      { id: "bLe", s: "b", k: "inf", w: 10, h: 5, l: "Lee (Anderson and McLaws)" },
      { id: "bJk", s: "b", k: "inf", w: 12, h: 5, l: "Jackson's corps (≈ 28,000)" },
      { id: "bFL", s: "b", k: "cav", w: 8, h: 4, l: "Fitzhugh Lee's cavalry" },
      { id: "bEa", s: "b", k: "inf", w: 9, h: 4, l: "Early and Barksdale (Fredericksburg)" },
      { id: "bWi", s: "b", k: "inf", w: 7, h: 4, l: "Wilcox (Salem Church)" }
    ],
    steps: [
      { t: "Late April 1863. Hooker, with ≈ 134,000 men, crosses the river upstream and reaches Chancellorsville. Sedgwick stays in front of Fredericksburg. Lee has ≈ 60,000 and leaves Early and Barksdale there.",
        p: { aXI: [24, 30], aMn: [44, 32], aSk: [54, 42], aSe: [86, 20], bLe: [74, 34], bJk: [70, 42], bFL: [62, 54], bEa: [88, 30], bWi: [80, 40] } },
      { t: "1 May. Lee has split the army and attacks Hooker's advance. Hooker stops the offensive and falls back into the Wilderness. Many see this as the decisive mistake.",
        p: { bLe: [60, 36], bJk: [58, 42], aMn: [44, 32] } },
      { t: "Night of 1 May. Lee and Jackson decide to split again. Fitzhugh Lee's cavalry finds that the XI Corps has its flank in the air, at the west end of the line.",
        p: { bFL: [34, 46] } },
      { t: "2 May, from morning until mid-afternoon. Jackson marches about 12 miles (19 km), along a forest road, around the Federal line, heading west. Lee is left with little more than a screen of troops in front of Hooker.",
        p: { bJk: [30, 58], bFL: [22, 46] } },
      { t: "Around 5:30 p.m., Jackson falls on the XI Corps, which had its back to the woods. The corps falls apart.",
        p: { bJk: [20, 32], aXI: [26, 30] }, x: ["aXI"] },
      { t: "At nightfall, the attack loses steam. After dark, Jackson, returning from a reconnaissance, is shot by his own soldiers, loses his left arm and hands command to Stuart.",
        p: { bJk: [30, 34] } },
      { t: "3 May. Hooker orders Sickles to leave Hazel Grove, and the Confederates put 30 guns there. Lee attacks from two sides. At 9:15 a.m., a cannonball hits a pillar beside Hooker, and he is knocked unconscious. The Federals fall back toward the river.",
        p: { bJk: [48, 44], bLe: [54, 36], aMn: [44, 14], aSk: [50, 14] } },
      { t: "At Fredericksburg, Sedgwick defeats the small force at Marye's Heights and advances west. Wilcox stops him at Salem Church.",
        p: { aSe: [76, 24], bEa: [90, 34], bWi: [80, 28] } },
      { t: "Lee turns against Sedgwick, who withdraws on 5 May. On the night of 5 to 6 May, Hooker crosses the river back.",
        p: { aSe: [80, 8], aMn: [44, 8], aSk: [52, 8], bLe: [76, 28] } }
    ]
  },

  chickamauga: {
    terrain: [
      { t: "hill", x: 30, y: 36, rx: 7, ry: 6, l: "Snodgrass Hill and Horseshoe Ridge" },
      { t: "note", x: 3, y: 3, l: "To Chattanooga ↑" },
      { t: "note", x: 47, y: 3, l: "Lafayette Road" },
      { t: "note", x: 46, y: 10, l: "Kelly Field" },
      { t: "note", x: 48, y: 46, l: "Brotherton Field" },
      { t: "note", x: 90, y: 66, l: "North ↑" }
    ],
    units: [
      { id: "aTh", s: "a", k: "inf", w: 4, h: 14, l: "XIV Corps (Thomas)" },
      { id: "aCr", s: "a", k: "inf", w: 4, h: 10, l: "XXI Corps (Crittenden)" },
      { id: "aWo", s: "a", k: "inf", w: 4, h: 6, l: "Wood's division" },
      { id: "aMc", s: "a", k: "inf", w: 4, h: 12, l: "Right wing (McCook)" },
      { id: "aGr", s: "a", k: "inf", w: 8, h: 4, l: "Reserve (Granger and Steedman)" },
      { id: "bPo", s: "b", k: "inf", w: 4, h: 14, l: "Right wing (Polk): Breckinridge, Cleburne" },
      { id: "bLg", s: "b", k: "inf", w: 4, h: 14, l: "Left wing (Longstreet): B. Johnson and Hood" }
    ],
    steps: [
      { t: "19 September 1863. The Federal line runs along the Lafayette Road, with Thomas in the north and McCook in the south. The Confederates arrive from the east. The fighting begins almost by accident, near Jay's Mill.",
        p: { aTh: [42, 16], aCr: [42, 32], aWo: [42, 43], aMc: [42, 54], aGr: [30, 4], bPo: [58, 16], bLg: [66, 44] } },
      { t: "Through the day, the Confederate attacks are disjointed and do not break the line, although they gain ground at the Brotherton and Viniard fields. Longstreet, with two divisions from Virginia, arrives at night.",
        p: { bPo: [54, 16], bLg: [58, 44] } },
      { t: "20 September, morning. Bragg's plan to attack the Federal left is delayed. Breckinridge and Cleburne attack Thomas's line and are repulsed.",
        p: { bPo: [48, 14], aCr: [42, 34] } },
      { t: "Rosecrans tells Wood to close up on Reynolds. Wood takes his division out of the line, and a hole opens near the Brotherton field.",
        p: { aWo: [41, 24], bLg: [52, 44] } },
      { t: "At 11:10 a.m., Longstreet's column, with the divisions of Bushrod Johnson and Hood in front, goes through the hole and shatters the Federal right wing.",
        p: { bLg: [44, 46], aMc: [38, 54] }, x: ["aMc"] },
      { t: "Rosecrans, McCook and Crittenden flee to Chattanooga. Hood is wounded in the thigh and loses his leg. About one-third of the Federal army is routed.",
        p: { bLg: [36, 46], aCr: [32, 44] } },
      { t: "Thomas forms a defense on Snodgrass Hill and Horseshoe Ridge. Steedman, of Granger's reserve, arrives in the rear without explicit orders and reinforces the line. The Confederates attack several times and fail.",
        p: { aTh: [30, 30], aWo: [31, 36], aCr: [31, 40], aGr: [30, 22], bPo: [42, 22], bLg: [40, 40] } },
      { t: "At nightfall, Thomas withdraws to Chattanooga. The Confederates occupy the hills and besiege the city.",
        p: { aTh: [20, 6], aWo: [22, 8], aCr: [24, 10], aGr: [26, 4], bPo: [32, 24], bLg: [32, 36] } }
    ]
  },

  atlanta: {
    terrain: [
      { t: "hill", x: 50, y: 46, rx: 5, ry: 5, l: "Bald Hill" },
      { t: "note", x: 2, y: 30, l: "Atlanta" },
      { t: "note", x: 28, y: 26, l: "Georgia Railroad" },
      { t: "note", x: 84, y: 12, l: "Decatur" },
      { t: "note", x: 90, y: 3, l: "North ↑" }
    ],
    units: [
      { id: "aXV", s: "a", k: "inf", w: 5, h: 14, l: "XV Corps (Logan)" },
      { id: "aXVII", s: "a", k: "inf", w: 5, h: 14, l: "XVII Corps (Blair)" },
      { id: "aLeg", s: "a", k: "inf", w: 5, h: 5, l: "Leggett (Bald Hill)" },
      { id: "aXVI", s: "a", k: "inf", w: 5, h: 8, l: "XVI Corps (Dodge)" },
      { id: "aSw", s: "a", k: "inf", w: 6, h: 5, l: "Sweeny (XVI Corps)" },
      { id: "aGun", s: "a", k: "art", w: 6, h: 3, l: "≈ 20 guns (Sherman's headquarters)" },
      { id: "aSp", s: "a", k: "inf", w: 6, h: 4, l: "Sprague (Decatur, wagon trains)" },
      { id: "bCh", s: "b", k: "inf", w: 5, h: 14, l: "Cheatham (Brown and Clayton)" },
      { id: "bWB", s: "b", k: "inf", w: 10, h: 4, l: "Hardee's right-hand divisions (Walker)" },
      { id: "bCl", s: "b", k: "inf", w: 10, h: 4, l: "Cleburne and Maney (Hardee)" },
      { id: "bWh", s: "b", k: "cav", w: 8, h: 4, l: "Wheeler's cavalry" }
    ],
    steps: [
      { t: "22 July 1864. The Federal line faces Atlanta from the east: XV Corps in the north, XVII in the middle, XVI in the south. The left is open. Hardee left the city during the night and is marching around it, through the south, while Wheeler's cavalry heads for Decatur.",
        p: { aXV: [44, 20], aXVII: [46, 36], aLeg: [50, 46], aXVI: [52, 58], aSw: [58, 62], aGun: [36, 12], aSp: [84, 18],
             bCh: [20, 22], bWB: [30, 66], bCl: [20, 66], bWh: [66, 66] } },
      { t: "The march runs late: the night is hot, the roads dusty and the men exhausted. Hardee does not reach the rear in time and attacks as soon as he gets there. Near midday, Walker is killed by a sharpshooter. Hardee's right-hand divisions strike the XVI Corps, which by chance was in the right place, and are repulsed.",
        p: { bWB: [48, 62], bCl: [34, 62], bWh: [78, 36] } },
      { t: "Cleburne finds a gap between the XVI and XVII Corps and slips in. McPherson rides right there, is called on to surrender, flees and is killed. Logan takes over the army.",
        p: { bCl: [46, 51] } },
      { t: "Cleburne and Maney attack the XVII Corps from front and rear. The Federal line bends into an L shape, and Leggett's division holds Bald Hill until after dark.",
        p: { aXVII: [40, 36], aLeg: [50, 45], bCl: [52, 50] } },
      { t: "Around 3 p.m., Hood orders Cheatham to attack from the Atlanta trenches. His men break the XV Corps line beside the railroad, at the Troup Hurt house, and take guns.",
        p: { bCh: [38, 22], aXV: [44, 20], aGun: [38, 14] } },
      { t: "About 20 guns near Sherman's headquarters fire on the attackers. Logan counterattacks and restores the XV Corps line. By late afternoon, the Confederates are back at their starting point.",
        p: { bCh: [22, 22], aXV: [40, 22] } },
      { t: "At Decatur, Wheeler takes the Fayetteville Road and enters the town, but Sprague's brigade holds the wagon trains of the XV, XVI, XVII and XX Corps.",
        p: { bWh: [84, 24], aSp: [84, 18] } },
      { t: "Hardee keeps attacking Bald Hill until nightfall, without taking it. Wheeler withdraws. The Union loses about 3,700 men and the Confederates about 5,500.",
        p: { bWh: [66, 40], bCl: [56, 50] } }
    ]
  },

  gravelotte: {
    terrain: [
      { t: "hill", x: 74, y: 14, rx: 6, ry: 7, l: "Saint-Privat" },
      { t: "note", x: 66, y: 32, l: "Amanvillers" },
      { t: "note", x: 30, y: 62, l: "Gravelotte" },
      { t: "note", x: 44, y: 56, l: "Mance ravine" },
      { t: "note", x: 78, y: 3, l: "Roncourt" },
      { t: "note", x: 2, y: 28, l: "Sainte-Marie-aux-Chênes" },
      { t: "note", x: 90, y: 63, l: "Metz" },
      { t: "note", x: 2, y: 3, l: "North ↑" }
    ],
    units: [
      { id: "aI", s: "a", k: "inf", w: 14, h: 5, l: "VII and VIII Corps (Steinmetz)" },
      { id: "aIX", s: "a", k: "inf", w: 12, h: 5, l: "IX Corps (Manstein)" },
      { id: "aG", s: "a", k: "inf", w: 12, h: 5, l: "Prussian Guard (Augustus of Württemberg)" },
      { id: "aSx", s: "a", k: "inf", w: 12, h: 5, l: "Saxon XII Corps" },
      { id: "aGn", s: "a", k: "art", w: 14, h: 3, l: "≈ 200 guns against Saint-Privat" },
      { id: "aII", s: "a", k: "inf", w: 10, h: 5, l: "II Corps (arrives in the evening)" },
      { id: "bII", s: "b", k: "inf", w: 5, h: 10, l: "II Corps (Frossard)" },
      { id: "bIII", s: "b", k: "inf", w: 5, h: 10, l: "III Corps (Le Boeuf)" },
      { id: "bIV", s: "b", k: "inf", w: 5, h: 10, l: "IV Corps (Ladmirault)" },
      { id: "bVI", s: "b", k: "inf", w: 6, h: 10, l: "VI Corps (Canrobert) at Saint-Privat" },
      { id: "bGd", s: "b", k: "inf", w: 8, h: 5, l: "Imperial Guard (Bourbaki, reserve)" }
    ],
    steps: [
      { t: "18 August 1870, morning. The French line runs from Rozerieulles, in the south, to Saint-Privat, in the north, with the Guard in reserve. The Germans arrive from the west. Moltke believes the French right ends near Amanvillers.",
        p: { aI: [30, 54], aIX: [32, 38], aG: [26, 22], aSx: [20, 10], aGn: [44, 24], aII: [14, 46],
             bII: [72, 54], bIII: [72, 42], bIV: [72, 32], bVI: [74, 18], bGd: [84, 40] } },
      { t: "Around noon, Manstein's artillery opens fire near Amanvillers. The chassepots and mitrailleuses stop the Germans before their needle guns can answer.",
        p: { aIX: [48, 38] } },
      { t: "At 2:30 p.m., Steinmetz sends the VIII Corps across the Mance ravine, and at 4 p.m. he sends the VII. Both are stopped by French fire. The French do not counterattack.",
        p: { aI: [50, 54] } },
      { t: "In the north, Prince Frederick Charles realizes the French line goes beyond what was expected. The Guard waits for the Saxons, who pass by Sainte-Marie-aux-Chênes. About 200 guns batter Saint-Privat for hours. Canrobert asks for reinforcements and gets almost nothing.",
        p: { aSx: [36, 8], aG: [36, 22], aGn: [50, 20] } },
      { t: "At 4:50 p.m., the Prussian Guard attacks Saint-Privat across open ground, brigade after brigade. French fire stops them about 900 meters from the line. It loses about 8,000 of 18,000 men.",
        p: { aG: [60, 20] } },
      { t: "Around 6:30 p.m., much of the VII and VIII Corps panics and falls back toward Rezonville. Bourbaki keeps the Imperial Guard in reserve.",
        p: { aI: [28, 60] } },
      { t: "Around 7 p.m., the Saxons clear Roncourt and fold back the French right flank. The Prussian II Corps crosses the Mance ravine. The survivors of the Guard attack again.",
        p: { aSx: [74, 4], aII: [42, 52], aG: [64, 20] } },
      { t: "Between 7:30 and 8 p.m., Saint-Privat falls, after hand-to-hand fighting in the cemetery. Canrobert withdraws, and the rest of the French army pulls back from right to left. The Germans do not pursue.",
        p: { bVI: [84, 26], bIV: [78, 32], aG: [72, 18], aSx: [76, 10] } },
      { t: "19 August, morning. The exhausted Army of the Rhine falls back into Metz. On 20 August, the Germans close the siege. On 27 October, Bazaine surrenders.",
        p: { bII: [88, 54], bIII: [88, 46], bIV: [88, 38], bVI: [88, 30], bGd: [92, 42] } }
    ]
  }
});
