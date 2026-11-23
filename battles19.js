// Contemporary pack: the Yugoslav wars, the war against the Islamic State, and the Russian invasion of Ukraine.
// Uses add() from battles2.js. Casualty figures are contested; each card gives ranges and says who estimates them.
// The Ukrainian cards reflect sources consulted in November 2026; the facts about that war are still settling.

// ---------- The Yugoslav wars ----------
add("vukovar", "Batalha de Vukovar", 1991, "25 de agosto a 18 de novembro de 1991", "contemporanea", "Vukovar, leste da Croácia", 45.352, 18.999,
  ["Exército Popular Iugoslavo (JNA) e paramilitares sérvios", "Mile Mrkšić, Veselin Šljivančanin e outros", "até ≈ 36.000 no auge (estimativa)", 36000], ["Guarda Nacional Croata e voluntários", "Mile Dedaković 'Jastreb' e Branko Borković", "≈ 1.800 (cerca de 1.100 voluntários civis)", 1800], "a",
  "Em 1991, a Croácia declarou independência da Iugoslávia. A cidade de Vukovar, às margens do Danúbio, ficou no caminho do exército federal e de milícias sérvias.",
  ["O cerco começou em agosto. A cidade foi cercada aos poucos e bombardeada por terra, ar e rio: fontes citam mais de 700.000 projéteis, até 12.000 por dia.",
   "Os defensores, em muito menor número e com poucas armas pesadas, resistiram por 87 dias. Em 30 de outubro começou um assalto coordenado, e em 18 de novembro a resistência no centro acabou.",
   "Depois da rendição, cerca de 200 pessoas retiradas do hospital foram executadas na fazenda de Ovčara, em 20 de novembro. Milhares de moradores foram expulsos."],
  "Vitória do JNA e dos sérvios. Vukovar foi destruída, e o fim da batalha deixou cerca de 2.600 desaparecidos (mais de 440 ainda sem paradeiro em novembro de 2017).",
  "A cidade voltou à Croácia pacificamente em 1998. O Tribunal de Haia condenou dois oficiais do JNA pelo massacre de Ovčara.");

add("sarajevo", "Cerco de Sarajevo", 1992, "5 de abril de 1992 a 29 de fevereiro de 1996", "contemporanea", "Sarajevo, Bósnia e Herzegovina", 43.856, 18.413,
  ["Exército da República Srpska (VRS)", "Ratko Mladić; Stanislav Galić e Dragomir Milošević, do Corpo Sarajevo-Romanija", "≈ 13.000 no começo; ≈ 23.000 no total (conforme a fonte)", 13000], ["Exército da Bósnia e Herzegovina (ARBiH)", "Rasim Delić", "≈ 70.000 dentro da cidade, mal armados", 70000], "b",
  "Quando a Bósnia declarou independência, as forças sérvio-bósnias cercaram a capital, que fica num vale cercado de colinas, e passaram a bombardeá-la de cima.",
  ["O cerco durou 1.425 dias, quase o dobro do de Leningrado. Estima-se que cerca de 500.000 projéteis tenham caído sobre a cidade.",
   "Os moradores buscavam água e comida sob fogo de franco-atiradores e artilharia. Um túnel sob a pista do aeroporto, aberto em 1993, virou a única ligação por terra com o exterior, junto com uma ponte aérea da ONU.",
   "Depois do segundo massacre do mercado de Markale, em agosto de 1995, a OTAN bombardeou posições sérvio-bósnias. O Acordo de Dayton veio em dezembro, e o cerco foi declarado encerrado em 29 de fevereiro de 1996."],
  "Sarajevo resistiu, mas a um preço enorme: o Centro de Pesquisa e Documentação de Sarajevo contou 13.952 mortos, 5.434 deles civis.",
  "O Tribunal de Haia condenou comandantes sérvio-bósnios pelo cerco. Ratko Mladić foi condenado à prisão perpétua, em parte por Sarajevo.");

// ---------- The war against the Islamic State ----------
add("mosul2017", "Batalha de Mosul", 2016, "16 de outubro de 2016 a 10 de julho de 2017", "contemporanea", "Mosul, Iraque", 36.34, 43.13,
  ["Iraque e aliados", "Forças iraquianas (Abdul Amir Yarallah), curdos peshmerga, milícias e coalizão liderada pelos EUA", "≈ 94.000 a 114.000 (conforme a fonte)", 100000], ["Estado Islâmico", "Comandantes locais do EI", "≈ 3.000 a 12.000 (conforme a fonte)", 6000], "a",
  "Mosul, segunda maior cidade do Iraque, caiu nas mãos do Estado Islâmico em junho de 2014. Em 2016, o governo iraquiano decidiu retomá-la.",
  ["A ofensiva começou em 16 de outubro de 2016, pelas aldeias ao redor. Em novembro, as tropas entraram na cidade, e em janeiro de 2017 o leste, a margem esquerda do rio Tigre, foi declarado livre.",
   "O lado oeste, mais antigo e de ruas estreitas, começou a ser atacado em 19 de fevereiro de 2017. Os combatentes do EI usavam carros-bomba, túneis e civis como escudo.",
   "Em 21 de junho, o EI destruiu a mesquita al-Nuri, símbolo da cidade. O primeiro-ministro Haider al-Abadi declarou vitória em 9 e 10 de julho, e os últimos focos foram limpos até 20 de julho."],
  "Mosul foi retomada. Mais de um milhão de pessoas fugiram, e as mortes de civis são contestadas: de 2.521 (ONU, contagem restrita) a 9.000 a 11.000 (investigação da agência AP).",
  "O general americano Stephen Townsend a chamou de o combate urbano mais importante desde a Segunda Guerra Mundial. O califado do EI no Iraque perdeu a capital.");

// ---------- The Russian invasion of Ukraine ----------
add("kyiv2022", "Batalha de Kiev", 2022, "24 de fevereiro a 2 de abril de 2022", "contemporanea", "Kiev e arredores, Ucrânia", 50.45, 30.52,
  ["Rússia", "Forças russas vindas da Bielorrússia (comando supremo: Vladimir Putin)", "número desconhecido; as estimativas variam muito", 0], ["Ucrânia", "Volodymyr Zelensky, Valerii Zaluzhnyi e Oleksandr Syrskyi", "número desconhecido; Forças Armadas e Defesa Territorial", 0], "b",
  "Em 24 de fevereiro de 2022, a Rússia invadiu a Ucrânia. Uma das frentes avançou do norte, pela Bielorrússia, rumo à capital, Kiev.",
  ["Paraquedistas russos atacaram o aeroporto de Hostomel, perto de Kiev, no primeiro dia. Colunas blindadas desceram do norte e pararam em Ivankiv, Irpin, Bucha, Makariv e Brovary.",
   "Os defensores explodiram pontes, abriram uma barragem e emboscaram colunas. Uma coluna russa de cerca de 64 km, vista por satélite, ficou parada por dias.",
   "Em 29 de março, a Rússia anunciou que reduziria a atividade perto de Kiev. As tropas saíram, e em 2 de abril a Ucrânia declarou a região recuperada. Em Bucha foram encontrados os corpos de centenas de civis."],
  "Vitória ucraniana: a Rússia não tomou a capital e recuou do norte. As perdas são contestadas: a Ucrânia fala em perdas russas muito maiores do que as suas, e a Rússia não divulgou números.",
  "A ONU documentou execuções de civis na região de Kiev. O fato mais discutido pelos historiadores é o fracasso do plano russo de tomar Kiev em poucos dias.");

add("bakhmut", "Batalha de Bakhmut", 2022, "agosto de 2022 a maio de 2023", "contemporanea", "Bakhmut, região de Donetsk, Ucrânia", 48.595, 38.0,
  ["Rússia", "Grupo Wagner (Yevgeny Prigozhin) e Exército russo", "número desconhecido; as estimativas variam muito", 0], ["Ucrânia", "Oleksandr Syrskyi, comandante das Forças Terrestres", "número desconhecido; várias brigadas", 0], "a",
  "Bakhmut, cidade mineira de sal e gesso no leste da Ucrânia, virou em 2022 o centro da luta no Donbas. Para os russos, tomá-la seria uma vitória; para os ucranianos, era a 'fortaleza' que prendia o inimigo.",
  ["Os russos avançaram sobre a cidade a partir do verão de 2022. Soldados do Grupo Wagner, muitos deles presos recrutados, atacavam em ondas, e a frente virou uma guerra de trincheiras.",
   "Em janeiro de 2023, Soledar caiu. Em março, a Ucrânia recuou para a margem leste do rio Bakhmutka, e em 6 de abril os russos tomaram o centro.",
   "Em 20 de maio, Prigozhin anunciou a captura da cidade. A Ucrânia disse que ainda resistia em partes e contra-atacou nos flancos; o Wagner foi substituído por tropas regulares russas."],
  "A Rússia ficou com as ruínas, e a Ucrânia deixou a cidade. As perdas são muito contestadas, e as estimativas de baixas russas vão de dezenas a mais de cem mil.",
  "Os analistas discutem se valeu a pena para os dois lados. A cidade tinha cerca de 80.000 habitantes antes da guerra e ficou quase vazia e destruída.");
