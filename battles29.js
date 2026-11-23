// Great-battles pack, part 29: the Siege of Sevastopol (Crimean War).
// Uses add() from battles2.js. Siege figures are historians' estimates and are flagged as such.
// Also: Buxar, Wagram, First Bull Run and Shiloh. They have hidden stubs in battles_wd.js (no text), so they get new ids here.
// The 1941 "Cerco de Sebastopol" is a different battle.

// ---------- The Crimean War ----------
add("sebastopol1854", "Cerco de Sebastopol (1854–1855)", 1855, "17 de outubro de 1854 a 9 de setembro de 1855", "moderna", "Sebastopol, Crimeia", 44.6, 33.55,
  ["Aliados: França, Grã-Bretanha, Império Otomano e Piemonte-Sardenha", "Canrobert, depois Pélissier (França); Lorde Raglan, depois Simpson (Grã-Bretanha)", "≈ 67.000 (outubro de 1854) a ≈ 175.000 (julho de 1855)", 120000],
  ["Império Russo", "Kornilov e Nakhimov; engenheiro Eduard Totleben", "guarnição de ≈ 37.000 (outubro de 1854) a ≈ 43.000 (maio de 1855)", 40000], "a",
  "Sebastopol era a base da frota russa no mar Negro. Britânicos e franceses desembarcaram na Crimeia para destruí-la e acabaram parados diante de suas defesas por onze meses.",
  ["Os aliados desembarcaram em setembro de 1854, venceram no Alma e cercaram a cidade pelo sul. Os russos afundaram navios na entrada do porto, levaram seus canhões e marinheiros para terra e, sob o engenheiro Totleben, ergueram fortes de terra que resistiram a seis grandes bombardeios.",
   "O inverno, a doença e a falta de suprimentos mataram mais soldados aliados do que o fogo inimigo. Os ataques de junho de 1855 ao Malakoff e ao Grande Redan fracassaram.",
   "Em 8 de setembro de 1855, depois de três dias de bombardeio, os franceses tomaram o reduto de Malakoff. O ataque britânico ao Grande Redan foi repelido, mas na noite seguinte os russos abandonaram a parte sul da cidade."],
  "Vitória aliada. Os russos cruzaram o porto por uma ponte de barcas e deixaram a cidade em chamas.",
  "A queda de Sebastopol levou à paz: pelo Tratado de Paris (1856), o mar Negro foi neutralizado, e a Rússia ficou sem frota e sem bases militares ali.");

// ---------- India ----------
add("buxar", "Buxar", 1764, "22 de outubro de 1764 (algumas fontes dizem 22 a 23)", "moderna", "Buxar, Bihar, Índia", 25.567, 83.983,
  ["Companhia Inglesa das Índias Orientais", "Major Hector Munro", "≈ 7.000 (cerca de 1.800 britânicos e 5.300 sipaios)", 7072], ["Coalizão de Awadh, do Império Mogol e de Mir Qasim", "Shuja-ud-Daula, Shah Alam II e Mir Qasim", "mais de 40.000 (estimativa)", 40000], "a",
  "Mir Qasim, nababo de Bengala que a Companhia tinha posto no cargo, rompeu com ela por causa do comércio, perdeu a guerra de 1763 e fugiu. Com o nababo de Awadh e o imperador mogol, voltou para recuperar Bengala.",
  ["Os aliados acamparam em Buxar, às margens do Ganges. Na manhã de 22 de outubro, os mogóis atacaram, mas as linhas da Companhia se formaram em cerca de vinte minutos.",
   "Por volta do meio-dia, a batalha estava decidida. Ao recuar, Shuja-ud-Daula explodiu seus paióis e carros de munição.",
   "Munro o perseguiu até o rio Karmanasa, onde Shuja destruiu a ponte de barcas depois de atravessar, deixando para trás o imperador e parte de suas tropas."],
  "Vitória da Companhia, com a captura de 133 canhões. As perdas variam: cerca de 847 baixas britânicas e 2.000 mortos aliados, segundo uma estimativa; 6.000 baixas aliadas, segundo outra.",
  "Em 1765, pelo Tratado de Allahabad, o imperador deu à Companhia o direito de cobrar os impostos (diwani) de Bengala, Bihar e Orissa. Uma empresa de comércio virou potência territorial.");

// ---------- Napoleonic Wars ----------
add("wagram", "Wagram", 1809, "5 e 6 de julho de 1809", "moderna", "Deutsch-Wagram, perto de Viena, Áustria", 48.296, 16.558,
  ["Império Francês e aliados", "Napoleão I", "≈ 140.000 a 170.000 (com aliados)", 150000], ["Império Austríaco", "Arquiduque Carlos", "≈ 136.000", 136000], "a",
  "Seis semanas depois de ser barrado em Aspern-Essling, Napoleão voltou a cruzar o Danúbio com um exército maior para acabar com a guerra contra a Áustria.",
  ["Na noite de 4 de julho, sob uma tempestade, os franceses atravessaram o Danúbio a partir da ilha de Lobau. Os ataques do fim da tarde de 5 de julho falharam.",
   "Em 6 de julho, os austríacos atacaram ao amanhecer e quase romperam a esquerda francesa. Napoleão fechou o buraco com uma grande bateria e, na outra ponta, Davout atacou a esquerda austríaca.",
   "Por volta das 16h, o arquiduque Carlos recuou em boa ordem para o norte."],
  "Vitória francesa e muito cara: segundo as contas citadas pela Wikipédia, cerca de 35.000 baixas francesas e 39.000 austríacas.",
  "O armistício de Znaim pôs fim à guerra. Pelo Tratado de Schönbrunn, a Áustria perdeu cerca de um sexto de seus súditos.");

// ---------- American Civil War ----------
add("bullrun1", "Primeira Bull Run (Manassas)", 1861, "21 de julho de 1861", "moderna", "Manassas, Virgínia, Estados Unidos", 38.815, -77.522,
  ["União (Norte)", "General Irvin McDowell", "≈ 35.000 (cerca de 18.000 em combate)", 35000], ["Confederação (Sul)", "Generais P. G. T. Beauregard e Joseph E. Johnston", "≈ 32.000 (cerca de 18.000 em combate)", 32000], "b",
  "Três meses depois do início da guerra civil, o Norte mandou um exército de voluntários inexperientes contra a capital confederada, Richmond, esperando acabar tudo numa batalha.",
  ["McDowell fez uma marcha larga para contornar a esquerda confederada, mas atrasou-se. Johnston levou suas tropas do vale do Shenandoah de trem até Manassas.",
   "Na colina Henry House, a brigada do general Thomas Jackson resistiu quando tudo parecia perdido. Foi ali que ele ganhou o apelido de 'Stonewall'.",
   "No fim da tarde, a infantaria confederada contra-atacou e o exército da União se desfez em fuga, misturado com civis que tinham vindo assistir."],
  "Vitória confederada. As baixas variam conforme a fonte: cerca de 2.700 da União e 1.980 da Confederação.",
  "O Norte entendeu que a guerra seria longa: Lincoln pediu 500.000 homens por três anos e trocou McDowell por McClellan. O Sul ficou confiante demais.");

add("shiloh", "Shiloh", 1862, "6 e 7 de abril de 1862", "moderna", "Pittsburg Landing, Tennessee, Estados Unidos", 35.151, -88.322,
  ["União (Norte)", "General Ulysses S. Grant e general Don Carlos Buell", "≈ 66.800 (dois exércitos; o de Buell só chegou na noite do primeiro dia)", 66800], ["Confederação (Sul)", "General Albert Sidney Johnston, depois P. G. T. Beauregard", "≈ 44.700", 44700], "a",
  "Depois de perder os fortes Henry e Donelson, os confederados se juntaram em Corinth, Mississippi. Em vez de esperar, atacaram o acampamento de Grant, às margens do rio Tennessee, antes que Buell chegasse.",
  ["O ataque de surpresa, no amanhecer de 6 de abril, invadiu os acampamentos de Sherman e Prentiss. Um grupo de soldados da União resistiu por horas num caminho afundado, que ficou conhecido como o Ninho de Vespas.",
   "Johnston foi morto por volta das 14h30. Prentiss se rendeu às 17h30 com cerca de 2.200 homens, e Grant formou uma última linha junto ao desembarcadouro, apoiada por canhões e canhoneiras.",
   "À noite, chegaram as tropas de Buell. Em 7 de abril, a União contra-atacou e Beauregard recuou para Corinth."],
  "Vitória da União, com 13.047 baixas contra 10.699 dos confederados (números oficiais citados pela Wikipédia).",
  "Foi a batalha mais sangrenta da guerra até então. Acabou com a ideia de que o conflito seria curto e deu início à ascensão de Grant, que o Norte criticou, mas Lincoln manteve.");
