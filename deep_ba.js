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
  "jna": "Exército Popular Iugoslavo (JNA, na sigla em servo-croata), o exército da Iugoslávia federal. Em 1991, com a oficialidade em grande parte sérvia, passou a lutar contra a Croácia, que tinha declarado independência.",
  "paramilitares": "Combatentes armados que não fazem parte de um exército regular, mas atuam junto dele, em geral sob chefes próprios. Em Vukovar, eram milícias sérvias que lutaram ao lado do JNA.",
  "defesa territorial": "Forças locais de reserva da antiga Iugoslávia, chamadas de TO. Na Croácia, unidades locais de sérvios da TO lutaram junto com o JNA.",
  "guarda nacional croata": "A ZNG, formada em 1991 como o primeiro núcleo do exército croata. Reunia policiais, ex-soldados e voluntários, com poucas armas pesadas.",
  "tribunal de haia para a ex-iugoslávia": "O TPII, criado pela ONU em 1993 para julgar crimes graves cometidos nas guerras da antiga Iugoslávia. Funcionou em Haia, nos Países Baixos, até 2017.",
  "crimes contra a humanidade": "Crimes graves, como assassinato, tortura e deportação, cometidos de forma ampla ou sistemática contra uma população civil.",
  "crime de guerra": "Violação grave das leis da guerra, como matar prisioneiros ou atacar civis de propósito.",
  "unprofor": "Força de Proteção das Nações Unidas, a missão de paz da ONU na ex-Iugoslávia entre 1992 e 1995. Tinha pouco poder de combate e regras de engajamento restritas.",
  "vrs": "Exército da República Srpska, as forças dos sérvios da Bósnia, comandadas por Ratko Mladić.",
  "arbih": "Exército da República da Bósnia e Herzegovina, as forças do governo bósnio. No começo do cerco tinha muito menos armas pesadas que o inimigo.",
  "túnel de sarajevo": "Passagem de cerca de 800 metros cavada em 1993 sob a pista do aeroporto, entre dois bairros da cidade. Era a única ligação por terra segura de Sarajevo com o território livre.",
  "estado islâmico": "Grupo extremista armado que em 2014 se declarou um califado e controlou grandes áreas do Iraque e da Síria. Também chamado de EI, ISIS ou Daesh.",
  "peshmerga": "As forças armadas da região curda do Iraque. Na ofensiva de Mosul, atuaram sobretudo nas aldeias a leste e ao norte da cidade.",
  "serviço de contraterrorismo": "O CTS, força de elite do Iraque treinada pelos EUA, conhecida como Divisão de Ouro. Esteve na linha de frente nos combates em Mosul.",
  "carro-bomba": "Veículo carregado de explosivos e dirigido por um suicida ou por controle remoto contra uma tropa ou posição. O EI usou centenas deles em Mosul.",
  "escudo humano": "Uso de civis para proteger combatentes ou posições de um ataque. É proibido pelas leis da guerra.",
  "forças de mobilização popular": "Coalizão de milícias, na maioria xiitas, que lutou ao lado do exército iraquiano contra o EI. Em Mosul atuou sobretudo a oeste da cidade.",
  "tropas aerotransportadas": "Soldados treinados para chegar ao combate de paraquedas ou de helicóptero. Na Rússia, formam as VDV.",
  "defesa territorial ucraniana": "Força de voluntários e reservistas da Ucrânia, criada para defender suas cidades. Em 2022 recebeu milhares de armas leves nos primeiros dias da invasão.",
  "míssil antitanque": "Míssil portátil que um soldado dispara do ombro contra um blindado. Os Javelin e NLAW, enviados por países ocidentais, foram muito usados na defesa de Kiev.",
  "grupo wagner": "Empresa militar privada russa que atuou na Síria, na África e na Ucrânia. Seu chefe, Yevgeny Prigozhin, recrutou presos em cadeias russas em 2022. Depois de um motim em junho de 2023 e da morte de Prigozhin num acidente aéreo em agosto, o grupo foi desmontado e absorvido pelo Estado russo.",
  "drone": "Aeronave pequena, sem piloto a bordo, controlada à distância. Na guerra da Ucrânia, serve para observar posições e, com explosivos, para atacar.",
  "semicerco": "Situação em que o inimigo controla quase todos os caminhos que levam a uma cidade, mas deixa um ou dois abertos."
});

Object.assign(DEEP, {
  vukovar: {
    war: "Guerra de independência da Croácia (1991–1995)",
    hook: "Uma cidade às margens do Danúbio resistiu 87 dias ao exército federal e foi destruída.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1991, a Iugoslávia se desfazia. A Eslovênia e a Croácia declararam independência em junho. Na Croácia, vivia uma minoria sérvia grande, e parte dela, apoiada por Belgrado, recusou deixar a Iugoslávia e criou regiões próprias. Em maio, a Croácia tinha votado a independência em referendo, com 94% de votos a favor.",
        "Vukovar fica no leste da Croácia, na região da Eslavônia, junto ao Danúbio, e a fronteira com a Sérvia está a poucos quilômetros. O recenseamento de 1991 contou 84.189 pessoas no município: 44% croatas e 38% sérvios. Havia barricadas sérvias em volta da cidade desde abril. Em 2 de maio, na vila vizinha de Borovo Selo, paramilitares sérvios emboscaram policiais croatas, matando 12 e ferindo 22.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["1º abr 1991", "Aparecem barricadas sérvias perto de Vukovar."],
          ["2 mai", "Emboscada em Borovo Selo: 12 policiais croatas mortos."],
          ["23–24 ago", "Bombardeio pesado de Borovo Naselje e início do ataque do JNA com blindados, aviação e marinha."],
          ["Fim de setembro", "A cidade está quase cercada."],
          ["30 out", "Começa um assalto coordenado do JNA e dos paramilitares."],
          ["18 nov", "Os últimos defensores do centro se rendem."],
          ["20 nov", "Prisioneiros do hospital são executados na fazenda de Ovčara."]
        ]},
        "O ataque era do [[JNA]], o exército federal, com apoio de [[paramilitares]] sérvios e de unidades locais da [[defesa territorial]]. A Croácia ainda não tinha um exército de verdade."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Mile Dedaković, 'Jastreb'" },
        "Chefe da defesa da cidade. Reuniu os 1.800 homens da [[guarda nacional croata]], policiais e voluntários, e organizou a resistência de casa em casa. Seu segundo era Branko Borković. Fora da cidade, o comandante croata Anton Tus tentava romper o cerco e abastecer Vukovar.",
        { h: "Os comandantes do JNA" },
        "Aleksandar Spirkovski foi o primeiro comandante da força atacante, e Života Panić assumiu no fim de setembro. Mile Mrkšić chefiou as tropas do setor sul, e o major Veselin Šljivančanin foi um dos oficiais mais envolvidos nos fatos depois da rendição. Entre os paramilitares aparecem Željko Ražnatović, conhecido como Arkan, e Vojislav Šešelj.",
        "Os defensores eram poucos e pouco armados: cerca de 400 da 3ª Brigada de Guardas, 300 policiais e 1.100 voluntários civis. Cerca de 100 eram sérvios, e até um terço não era croata."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O número de atacantes é incerto. Uma fonte citada na Wikipédia chega a 36.000 soldados e paramilitares no auge, com tanques, artilharia, aviação e navios no rio. Os defensores tinham poucas armas pesadas e muito pouca munição.",
        { h: "O terreno" },
        "Vukovar é uma cidade baixa, de ruas estreitas, quarteirões de casas e prédios, com o rio Vuka cortando-a no meio e o Danúbio ao sul. O subúrbio de Borovo Naselje ficava ao norte do centro.",
        { h: "O cerco" },
        "Em agosto, o JNA atacou com bombardeio contínuo e tentou entrar na cidade com colunas de blindados. Os defensores usaram a cidade: porões, esquinas e minas. Em 14 de setembro, as forças croatas iniciaram uma ofensiva contra os quartéis do JNA (a 'batalha dos quartéis'), mas o quartel de Vukovar resistiu. Em 19 e 20 de setembro, uma coluna de pelo menos 100 tanques cruzou a fronteira pelo lado da Sérvia.",
        "Em 1º de outubro, a perda de Marinci cortou a rota de abastecimento croata. Em 13 de outubro, uma contraofensiva croata parou em Nuštar. A cidade vivia no escuro, sem água, sob fogo constante. Fontes citam mais de 700.000 projéteis e até 12.000 por dia; o hospital teria levado mais de 800 impactos. Em 12 de outubro, só um comboio humanitário conseguiu entrar e tirou 114 feridos.",
        { h: "O assalto final" },
        "Em 30 de outubro, o JNA e os paramilitares lançaram o ataque coordenado. Em 2 e 3 de novembro, chegaram a Lužac e atravessaram o Danúbio em barcos. Em 9 de novembro, caiu Milova Brda; em 10 de novembro, Bogdanovci, onde até 87 civis teriam sido mortos depois. Em 13 de novembro, o último elo entre Borovo Naselje e Vukovar foi cortado. Em 18 de novembro, os defensores do centro se renderam. Houve combates esparsos até cerca de 20 de novembro, e alguns soldados saíram da cidade até 23 de novembro.",
        { note: "Segundo a Wikipédia, o bombardeio de Vukovar teria sido mais intenso que o de Stalingrado. É uma estimativa citada na literatura, e a comparação é contestada: o certo é que a destruição foi enorme." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Ovčara" },
        "Em 20 de novembro, cerca de 300 pessoas foram retiradas do hospital em ônibus e levadas para um quartel do JNA e depois para a fazenda de Ovčara. Lá, a polícia militar do JNA se retirou, e unidades locais da defesa territorial e paramilitares espancaram e fuzilaram os prisioneiros em grupos de 10 a 20. Os corpos foram jogados numa vala comum. A contagem vai de cerca de 200 (corpos exumados da vala, em 1996) a 261 (cifra croata, que inclui outra vala). Em 2007, o [[Tribunal de Haia para a ex-iugoslávia|tribunal de haia para a ex-iugoslávia]] condenou Mile Mrkšić a 20 anos e Veselin Šljivančanin a 5, depois elevados na apelação e reduzidos de novo (17 e depois 10 anos). Miroslav Radić foi absolvido. Em 2015, a Corte Internacional de Justiça decidiu que Vukovar e o massacre não configuraram genocídio, mas confirmou que graves crimes foram cometidos pelo JNA e por paramilitares sérvios.",
        { h: "As perdas" },
        "Os números são contestados. Uma estimativa fala em cerca de 3.000 mortos no total. Do lado croata, o Ministério da Defesa citou, em 2006, 879 mortos; contagens iniciais croatas falavam em 1.798, entre militares e civis. Do lado do JNA e dos sérvios, fontes dão de 1.103 a 1.180 mortos. Cerca de 2.600 pessoas ficaram desaparecidas, e, em novembro de 2017, mais de 440 ainda não tinham sido encontradas. Pelo menos 20.000 moradores foram expulsos.",
        { h: "O que mudou" },
        "A cidade ficou sob controle sérvio até 1998, quando o Acordo de Erdut levou à reintegração pacífica à Croácia, depois de uma administração da ONU. Em 2001, o município tinha 31.670 habitantes, menos da metade do total de antes da guerra. A caixa-d'água de Vukovar foi mantida danificada como memorial e, depois de restaurada, reaberta ao público em outubro de 2020.",
        { note: "A batalha custou ao JNA muito tempo e muita força, e foi um ponto de virada na guerra: semanas depois veio um cessar-fogo. Para os croatas, Vukovar virou o maior símbolo de resistência e de sofrimento." }
      ]}
    ]
  },

  sarajevo: {
    war: "Guerra da Bósnia (1992–1995)",
    hook: "Durante 1.425 dias, uma capital europeia viveu sob as armas pesadas plantadas nas colinas ao redor.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Sarajevo, capital da Bósnia e Herzegovina, ficava num vale estreito cercado de colinas e montanhas. Era uma cidade mista, de bósnios muçulmanos, sérvios, croatas e outros, e tinha sediado os Jogos Olímpicos de Inverno de 1984. O censo de 1991 contou 525.980 pessoas na cidade e nos arredores.",
        "Em março de 1992, a Bósnia votou a independência da Iugoslávia, num referendo boicotado pela maior parte dos sérvios. Os líderes sérvio-bósnios, entre eles Radovan Karadžić, proclamaram uma república própria, a República Srpska, e suas forças, ajudadas pelo JNA, tomaram posições nas colinas ao redor da capital.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["Março 1992", "Referendo de independência da Bósnia."],
          ["5 abr 1992", "Começa o cerco. Nesse dia o JNA toma o aeroporto."],
          ["25–26 ago 1992", "A Biblioteca Nacional e a Prefeitura de Sarajevo são incendiadas por tiros de artilharia."],
          ["5 fev 1994", "Primeiro massacre do mercado de Markale: cerca de 68 mortos."],
          ["28 ago 1995", "Segundo massacre de Markale: 43 mortos."],
          ["30 ago a 20 set 1995", "Operação Força Deliberada: ataques aéreos da OTAN."],
          ["14 dez 1995", "Assinatura do acordo de paz em Paris (Acordo de Dayton)."],
          ["29 fev 1996", "O governo bósnio declara o fim do cerco."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Os sitiantes" },
        "Radovan Karadžić era o líder político dos sérvios da Bósnia, e Ratko Mladić comandava o [[VRS]]. Em Sarajevo, o Corpo Sarajevo-Romanija foi comandado por Stanislav Galić e, a partir de 1994, por Dragomir Milošević. Os dois foram condenados pelo tribunal de Haia por campanhas de tiros e bombardeios contra civis.",
        { h: "Os defensores" },
        "O [[ARBIH]], o exército do governo, era comandado por Rasim Delić. Dentro da cidade havia cerca de 70.000 combatentes, entre soldados, milícias e policiais, mas com poucas armas pesadas. Cerca de 13.000 soldados sérvios cercavam a cidade no início, segundo a Wikipédia. O VRS teria no total cerca de 23.000 homens, 100 tanques e 1.700 peças de artilharia, morteiros e lançadores."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "O terreno" },
        "As colinas em volta da cidade, entre elas Trebević e Igman, davam aos sitiantes vista para os bairros, as ruas e as pontes. A rua principal que levava ao aeroporto ficou conhecida como a 'Alameda dos Franco-atiradores' ('Sniper Alley'), porque cruzá-la era arriscar-se a levar um tiro.",
        { h: "O cerco" },
        "Estima-se que cerca de 500.000 projéteis tenham sido disparados sobre a cidade. Os moradores enfrentaram a falta de água, de luz e de aquecimento e precisavam atravessar ruas expostas ao fogo. O estádio olímpico e outros espaços esportivos viraram cemitérios. Em 25 e 26 de agosto de 1992, a Biblioteca Nacional foi destruída por projéteis incendiários: mais de 1,5 milhão de volumes e cerca de 700 manuscritos se perderam, segundo a Wikipédia.",
        "A [[UNPROFOR]] assumiu o aeroporto em 29 de junho de 1992 e, por uma [[ponte aérea|ponte aérea]] de mais de 13.000 voos ao longo de mais de três anos, levou comida e remédio. Em 1993, os defensores abriram o [[túnel de Sarajevo|túnel de sarajevo]], que ligava a cidade ao território livre pela pista do aeroporto.",
        { h: "Markale e a virada" },
        "Em 5 de fevereiro de 1994, um projétil caiu no mercado de Markale, matando cerca de 68 pessoas e ferindo mais de uma centena. O tribunal de Haia concluiu que o tiro partiu de posições sérvio-bósnias. Em 28 de agosto de 1995, um segundo projétil matou 43 e feriu 73 no mesmo mercado, e o tribunal também atribuiu o tiro ao VRS. Dois dias depois, a OTAN começou a Operação Força Deliberada, com até 400 aeronaves, que durou até 20 de setembro. O cessar-fogo veio em outubro, e o Acordo de Dayton, no fim do ano.",
        { note: "Quem atirou em Markale foi discutido na época. O Tribunal Penal para a ex-Iugoslávia, depois de analisar provas, atribuiu os dois ataques às forças sérvio-bósnias, e os dois comandantes foram condenados." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As mortes" },
        "As contagens divergem. O Centro de Pesquisa e Documentação de Sarajevo conta 13.952 mortos, entre eles 5.434 civis mortos ou desaparecidos (incluindo 1.601 crianças), ou desaparecidos, e cerca de 56.000 feridos. O VRS teve 2.241 mortos, e o ARBiH, 6.137. Outras contagens, como a de um relatório ligado ao tribunal de Haia, dão números parecidos para civis, perto de 4.950. O governo bósnio declarou o cerco encerrado em 29 de fevereiro de 1996, quando as forças sérvio-bósnias deixaram suas posições. Mais de 70.000 sérvios de Sarajevo deixaram a cidade depois disso.",
        { h: "Os julgamentos" },
        "O [[tribunal de Haia para a ex-iugoslávia|tribunal de haia para a ex-iugoslávia]] condenou quatro oficiais por crimes ligados ao cerco. Stanislav Galić foi condenado em 2003 a 20 anos por [[crimes contra a humanidade]], incluindo atos de terror contra a população civil, e a pena subiu para prisão perpétua na apelação, em 2006. Dragomir Milošević pegou 33 anos em 2007, reduzidos a 29 na apelação. Radovan Karadžić recebeu 40 anos em 2016, aumentados para prisão perpétua em 2019. Ratko Mladić foi condenado à prisão perpétua em 2017, por 10 acusações, entre elas as relacionadas a Sarajevo.",
        { note: "O cerco de Sarajevo durou quase o dobro do de Leningrado e é descrito pela Wikipédia como o mais longo cerco de uma capital na guerra moderna." }
      ]}
    ]
  },

  mosul2017: {
    war: "Guerra contra o Estado Islâmico no Iraque (2014–2017)",
    hook: "Meses de combate de rua, casa por casa, para retomar a segunda maior cidade do Iraque.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Mosul, no norte do Iraque, tinha cerca de 2,5 milhões de habitantes, e o rio Tigre a corta em duas partes, o leste e o oeste. Em junho de 2014, entre 800 e 1.500 combatentes do [[Estado Islâmico]] tomaram a cidade, enquanto parte do exército iraquiano fugia. Dois anos de domínio do EI reduziram a população para cerca de 1,5 milhão.",
        { h: "O caminho até a ofensiva" },
        { timeline: [
          ["Jun 2014", "O EI toma Mosul."],
          ["16 out 2016", "O primeiro-ministro Haider al-Abadi anuncia a ofensiva."],
          ["1º nov 2016", "As tropas iraquianas entram na cidade."],
          ["24 jan 2017", "Abadi declara livre o leste da cidade."],
          ["19 fev 2017", "Começa a ofensiva sobre o oeste de Mosul."],
          ["17 mar 2017", "Um ataque aéreo americano no bairro de al-Jadida mata mais de 100 civis."],
          ["21 jun 2017", "A mesquita al-Nuri é destruída."],
          ["9–10 jul 2017", "Abadi declara vitória."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "O lado iraquiano" },
        "O tenente-general Abdul Amir Yarallah comandou a operação. O exército, a polícia federal e o [[serviço de contraterrorismo]] formaram o grosso das tropas, com os [[peshmerga]] curdos e as [[forças de mobilização popular]] em frentes próprias. A coalizão liderada pelos EUA deu apoio aéreo, artilharia e cerca de 450 assessores. O general americano Stephen Townsend, que comandava a coalizão, descreveu a batalha como o combate urbano mais importante desde a Segunda Guerra Mundial.",
        { h: "O Estado Islâmico" },
        "O comandante militar do EI em Mosul era Ahmad Khalaf al-Jabouri. As estimativas de combatentes variam muito: de 3.000 a 5.000 (Departamento de Defesa dos EUA) a 8.000 e 9.000 (o blog Mosul Eye), com mais de 1.000 estrangeiros."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "No total, as forças contra o EI somavam entre 94.000 e 114.000 homens, segundo a Wikipédia, que cita estimativas da CNN: 54.000 a 60.000 do exército e da polícia, cerca de 40.000 peshmerga e 14.000 a 16.000 das forças de mobilização popular. O EI teve entre 6.000 e 12.000 combatentes, conforme a fonte.",
        { h: "O leste" },
        "A ofensiva começou em 16 de outubro de 2016 pelas aldeias em volta. Em 3 de dezembro, as forças iraquianas e curdas já tinham tomado 5.677 km², incluindo 369 aldeias. O EI cavou túneis, minou aldeias e lançou [[carros-bomba|carro-bomba]] contra as colunas. A luta no leste foi lenta, e em 24 de janeiro de 2017 Abadi declarou o lado leste livre.",
        { h: "O oeste e a cidade velha" },
        "A segunda fase, no oeste, começou em 19 de fevereiro de 2017. A cidade velha, com ruas muito estreitas, impedia o uso de veículos blindados, e os soldados avançavam a pé. O EI usava civis como [[escudo humano|escudo humano]]: em 21 de outubro de 2016, uma fonte da inteligência iraquiana disse que o grupo executou 284 homens e meninos sequestrados para isso. Os EUA também acusaram o EI de usar civis dessa forma.",
        "Em 17 de março de 2017, um avião americano lançou uma bomba GBU-38 sobre dois franco-atiradores do EI no bairro de al-Jadida. Segundo a investigação do Comando Central dos EUA, divulgada em 25 de maio, explosivos plantados pelo EI no prédio detonaram e o edifício desabou, matando 105 civis. A Anistia Internacional e outras fontes consideram o número maior.",
        "Em 21 de junho, a grande mesquita al-Nuri, do século XII, foi destruída. O exército iraquiano disse que o EI a explodiu, quando suas tropas estavam a cerca de 50 metros; o EI disse que foi um ataque aéreo americano. O primeiro-ministro chamou o fato de reconhecimento oficial de derrota. Abadi anunciou a vitória em 9 de julho e a confirmou em 10 de julho. Houve focos de resistência na cidade velha até cerca de 20 de julho."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As perdas" },
        "Os números são contestados e vêm de fontes que medem coisas diferentes. Forças iraquianas: de 1.200 a 1.400 mortos e mais de 6.000 feridos, segundo as estimativas citadas pela Wikipédia; um relatório do jornal New Arab diz que o serviço de contraterrorismo perdeu cerca de 40% de seus homens. EI: de 7.757 a 25.000 mortos, segundo comandantes iraquianos, sem contagem independente. Civis: a ONU documentou pelo menos 2.521 mortos em relatório de novembro de 2017, incluindo cerca de 741 execuções cometidas pelo EI; uma investigação da agência Associated Press estimou de 9.000 a 11.000 moradores mortos, com pelo menos 3.200 por ataques aéreos e artilharia iraquianos e da coalizão, e cerca de um terço pelo EI; a lista de um necrotério de Mosul continha 9.606 nomes. A coalizão reconheceu 326 civis mortos.",
        { h: "A cidade" },
        "Entre 920.000 e 1,07 milhão de pessoas foram deslocadas, segundo a ONU e a Organização Internacional para as Migrações. A ONU estimou mais de 5.000 prédios danificados e 490 destruídos só na cidade velha, e disse que reparar a infraestrutura básica custaria mais de 1 bilhão de dólares. A Anistia Internacional acusou os dois lados de violações, entre elas ataques ilegais no oeste com armas explosivas pouco precisas.",
        { note: "A mesquita al-Nuri foi onde Abu Bakr al-Baghdadi proclamou o califado, em 2014. A autoria da destruição é contestada, mas imagens de satélite confirmam os danos." }
      ]}
    ]
  },

  kyiv2022: {
    war: "Invasão russa da Ucrânia (desde 2022)",
    hook: "A Rússia esperava tomar Kiev em poucos dias, mas as colunas ficaram paradas nas estradas ao norte da cidade.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 24 de fevereiro de 2022, a Rússia invadiu a Ucrânia por várias frentes: do sul, do leste e do norte, a partir da Bielorrússia. O objetivo inicial, segundo a maioria dos analistas, era tomar Kiev e derrubar o governo. Resumia-se muitas vezes como uma operação de 'três dias'. Em janeiro, a CIA já tinha alertado a Ucrânia de que a Rússia pretendia tomar o aeroporto de Hostomel, a cerca de 10 km da capital.",
        "Esta é uma guerra recente. As fontes consultadas aqui são de novembro de 2026, e os fatos ainda estão sendo apurados: muitos números vêm de uma das partes e não foram confirmados de forma independente.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["24 fev 2022", "Invasão. Helicópteros russos atacam o aeroporto de Hostomel."],
          ["25 fev", "Colunas russas tomam o aeroporto."],
          ["27–28 fev", "Combates em Irpin, Bucha e Makariv. Uma coluna de cerca de 64 km é vista por satélite."],
          ["4–10 mar", "Os russos chegam a Brovary, a leste. Em 10 de março, uma emboscada ucraniana em Skybyn destrói parte de uma coluna."],
          ["22 mar", "Contraofensiva ucraniana em Makariv."],
          ["29 mar", "A Rússia anuncia que vai reduzir a atividade perto de Kiev e de Chernihiv."],
          ["2 abr", "A Ucrânia declara recuperada toda a região de Kiev."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Do lado ucraniano" },
        "O presidente Volodymyr Zelensky ficou em Kiev, e o comandante-chefe, Valerii Zaluzhnyi, e o general Oleksandr Syrskyi, que comandava a defesa da capital, dirigiram a defesa. A [[Defesa Territorial ucraniana|defesa territorial ucraniana]] recebeu mais de 25.000 fuzis até 26 de fevereiro. A Guarda Nacional (4ª Brigada de Reação Rápida), a 72ª Brigada Mecanizada, a 14ª e a 95ª brigadas, entre outras, tiveram papéis centrais.",
        { h: "Do lado russo" },
        "As forças russas incluíam [[tropas aerotransportadas]] (as VDV), brigadas motorizadas e unidades da guarda nacional russa, num plano que contava com uma queda rápida do governo ucraniano. Em 2024, o presidente Vladimir Putin disse que nunca houve decisão política de tomar Kiev de assalto; essa versão é contestada pelos governos ucraniano e ocidentais e por analistas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números exatos são desconhecidos. Estimativas muito citadas falam em 15.000 a 30.000 soldados russos na frente de Kiev, mas as fontes divergem, e a Rússia não divulgou os seus. Do lado ucraniano, a Ucrânia afirma que 162 soldados morreram e 748 foram feridos na batalha de Kiev, e que 89 civis foram mortos; essas cifras são ucranianas e não foram verificadas de forma independente.",
        { h: "Hostomel" },
        "Em 24 de fevereiro, por volta das 9h30, entre 20 e 34 helicópteros partiram da Bielorrússia com cerca de 200 a 300 paraquedistas (as fontes citam a 31ª Brigada de Assalto Aéreo e a 45ª de forças especiais). A guarnição ucraniana tinha entre 200 e 300 homens da Guarda Nacional. Depois de uma hora de combate, ela recuou. Perto do fim do dia, uma contraofensiva ucraniana, com apoio aéreo, empurrou os russos de volta. O avião Antonov An-225 Mriya foi destruído no hangar. Em 25 de fevereiro, colunas mecanizadas vindas da Bielorrússia e um segundo desembarque tomaram o aeroporto. Os russos planejavam pousar 18 aviões de transporte Il-76 com reforços, mas eles não puderam pousar. O aeroporto nunca foi usado como pista de pouso. As baixas russas são contestadas: a Ucrânia fala em 300 a 500 paraquedistas mortos, e o New York Times, citando autoridades e um diário de bordo capturado, em cerca de 300.",
        { h: "As estradas do norte" },
        "A coluna da Bielorrússia desceu por Chernobyl e Pripyat e foi retida perto de Ivankiv. Ucranianos explodiram pontes, como a de Irpin, em 25 de fevereiro, e uma comporta foi aberta no norte de Kiev, alagando uma área. Em 28 de fevereiro, a coluna chegou a cerca de 64 km, segundo imagens de satélite, e ficou parada por dias, com falta de combustível e de comida. Alguns analistas atribuem a parada à logística, à falta de superioridade aérea e à sabotagem de trilhos na Bielorrússia.",
        "Em Irpin, a batalha começou em 27 de fevereiro. Em 6 de março, os russos tomaram parte da cidade. Na estrada de evacuação, em 6 de março, oito civis foram mortos por morteiros. Estima-se que quase 70% da cidade tenha sido muito danificada ou destruída. Em Makariv, a oeste, a luta começou em 27 de fevereiro e durou semanas. A 37ª Brigada russa teria perdido quase metade de seus homens, segundo uma fonte citada na Wikipédia.",
        { h: "O leste e Chernihiv" },
        "A leste, os russos chegaram a Brovary em 4 de março. Na noite de 9 de março, uma coluna com tanques da 90ª Divisão entrou na área, sem apoio de infantaria, e em 10 de março foi emboscada em Skybyn pela 72ª Brigada, com artilharia e [[mísseis antitanque|míssil antitanque]]. Segundo fontes ucranianas, 19 tanques e outros veículos foram destruídos e até 55 soldados morreram, e a Ucrânia perdeu um soldado. Chernihiv foi cercada, segundo seu prefeito, em 10 de março, mas resistiu.",
        { formation: true },
        { h: "A retirada" },
        "Em 22 de março, a Ucrânia lançou uma contraofensiva. Em 25 de março, um relatório britânico dizia que cidades a até 35 km tinham sido retomadas. Irpin foi declarada recuperada em 28 de março. Em 29 de março, a Rússia anunciou que reduziria a atividade perto de Kiev e de Chernihiv. Em 2 de abril, a Ucrânia declarou toda a região de Kiev recuperada. Para a Rússia, foi uma 'reorganização'; para a Ucrânia e os países ocidentais, uma derrota. Um porta-voz do Pentágono resumiu: 'Eles queriam Kiev e não conseguiram'."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Bucha" },
        "Com a saída dos russos, foram encontrados em Bucha corpos de civis nas ruas e em valas comuns. Autoridades locais ucranianas recuperaram 458 corpos de Bucha até agosto de 2022. O Escritório de Direitos Humanos da ONU documentou pelo menos 73 civis mortos ilegalmente, incluindo execuções sumárias, e outras 105 mortes sob investigação (dados de dezembro de 2022). Uma investigação do New York Times atribuiu a rua Yablunska a paraquedistas do 234º Regimento de Assalto Aéreo, e a Associated Press ligou a ocupação à 76ª Divisão. A Rússia nega e chama o caso de 'encenação', o que imagens de satélite de uma empresa privada, divulgadas em abril de 2022, contradizem: elas mostram corpos na rua em março, enquanto os russos ocupavam a cidade.",
        { h: "As perdas" },
        "Estão em disputa. A Ucrânia diz que 162 soldados seus morreram em Kiev, e fala em perdas russas muito maiores, sem prova independente. Os russos não apresentaram números. Cerca de 2 milhões de pessoas deixaram a capital, segundo o prefeito Vitali Klitschko, cerca de metade de seus habitantes.",
        { note: "Como em toda guerra em andamento, os números aqui vêm de comunicados, de governos e de jornalistas, não de arquivos. Eles mudam com o tempo, e é provável que historiadores os revisem quando os arquivos de ambos os lados forem abertos." }
      ]}
    ]
  },

  bakhmut: {
    war: "Invasão russa da Ucrânia (desde 2022)",
    hook: "Uma cidade de mineiros virou, por meses, o lugar onde russos e ucranianos mediram sua capacidade de aguentar perdas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Bakhmut, na região de Donetsk, tinha cerca de 70.000 a 80.000 habitantes antes da guerra (as fontes divergem) e era conhecida pelo sal, pelo gesso e por um vinho espumante. Depois da queda de Sievierodonetsk e de Lysychansk, no verão de 2022, ela se tornou o próximo alvo russo no Donbas. A estrada que a cruza leva a Kostiantynivka, Kramatorsk e Sloviansk.",
        "Esta é uma guerra recente. As fontes consultadas aqui são de novembro de 2026, e os fatos ainda estão sendo apurados. Quase todas as cifras vêm de uma das partes.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["Mai 2022", "Começa o bombardeio da cidade."],
          ["Jul–ago 2022", "Os russos avançam, e o Grupo Wagner chega aos arredores do leste."],
          ["Nov 2022", "A frente vira guerra de trincheiras, com muitas baixas."],
          ["Jan 2023", "Os russos tomam Soledar."],
          ["Mar 2023", "A Ucrânia recua para a margem leste do rio Bakhmutka."],
          ["6 abr 2023", "Os russos tomam o centro da cidade."],
          ["20 mai 2023", "O Wagner anuncia a captura da cidade."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Yevgeny Prigozhin" },
        "Chefe do [[Grupo Wagner|grupo wagner]], empresa militar privada russa. Em 2022, recrutou presos nas cadeias do país, que ganharam a liberdade em troca de seis meses de combate. Ele disse ter empregado 35.000 combatentes e 50.000 presos. Reclamou em público da falta de munição e do Ministério da Defesa. Em junho de 2023, o Wagner se amotinou, e Prigozhin morreu em agosto de 2023, num acidente de avião.",
        { h: "Oleksandr Syrskyi" },
        "General ucraniano que comandou a defesa. Seus soldados o chamavam de 'Açougueiro' e 'General 200', em referência à 'Carga 200', o código soviético para os mortos, por causa das baixas altas que sua tática teria causado. Era uma crítica de soldados, e há analistas que defendem sua decisão de segurar a cidade. Foi descrita por analistas como a tática de 'nenhum passo atrás'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são muito incertos. A Wikipédia cita mais de 85.000 combatentes do Wagner do lado russo e mais de 30.000 soldados ucranianos, mas Prigozhin chegou a falar em 80.000 ucranianos. A Ucrânia defendeu a cidade com um grupo variável de brigadas, entre elas a 93ª e a 58ª, reforçadas depois por forças especiais e unidades de defesa territorial.",
        { h: "O terreno" },
        "A cidade fica numa planície cortada pelo rio Bakhmutka, entre fábricas, minas de gesso e quarteirões de prédios soviéticos. Soledar fica ao norte, e Chasiv Yar, a oeste.",
        { h: "A frente" },
        "A luta começou com bombardeios de artilharia e avanços lentos. O Wagner atacava em ondas de infantaria, muitas vezes com ex-presos, apoiada por artilharia. Os ucranianos respondiam com [[artilharia]], [[drones|drone]] e minas, e a frente virou uma [[guerra de atrito]]. Em janeiro de 2023, os russos tomaram Soledar. Até 22 de fevereiro, tinham cercado parcialmente a cidade, e em março os ucranianos recuaram para a margem leste do Bakhmutka. Em 6 de abril, os russos estavam no centro.",
        "Em maio de 2023, a Ucrânia atacou os flancos da cidade, e Prigozhin anunciou a captura em 20 de maio. A Ucrânia disse que ainda mantinha posições e descreveu uma situação de [[semicerco]] para os russos em 21 de maio. O Wagner começou a sair em 25 de maio, e em 1º de junho restavam cerca de 90 homens do grupo. Tropas regulares russas assumiram o resto.",
        { note: "A Rússia declarou a cidade capturada em 20 de maio de 2023, e a Ucrânia contestou o controle total nos primeiros dias. Segundo analistas, cada lado achava que o desgaste o favorecia, e discute-se até hoje quem pagou o preço maior." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As perdas" },
        "Os números são os mais contestados desta guerra, e variam conforme quem fala e quando. Do lado russo e do Wagner: em 1º de maio de 2023, o Conselho de Segurança Nacional dos EUA falou em mais de 20.000 mortos e 80.000 feridos desde dezembro de 2022, metade deles do Wagner; em 24 de maio de 2023, Prigozhin falou em mais de 20.000 mortos do Wagner; o Ministério da Defesa britânico estimou 60.000 mortos ou feridos russos em torno da cidade desde maio de 2022; o presidente Biden disse em maio de 2023 'mais de 100.000' baixas. Uma contagem do serviço russo da BBC e da Mediazona, baseada em obituários, encontrou, em junho de 2024, 19.547 mortos do Wagner, 17.175 deles ex-presos. Do lado ucraniano, o projeto UALosses documentou 6.382 soldados mortos entre julho de 2022 e maio de 2023, uma conta que só inclui os nomes confirmados e por isso é um piso. Uma reportagem alemã diz que algumas companhias ucranianas perderam mais de 80% de seus soldados.",
        { h: "A cidade" },
        "O prefeito Oleksii Reva disse, em 31 de maio de 2023, que 204 moradores morreram e 505 ficaram feridos desde o início da invasão, e que cerca de 500 pessoas ainda viviam na cidade. O presidente Zelensky comparou a destruição a Hiroshima.",
        { h: "O que mudou" },
        "Analistas discutem se a cidade tinha valor estratégico. O Ministério da Defesa britânico e o governo dos EUA a chamaram de vitória 'simbólica' para a Rússia; outros lembram que ela era um nó de estradas. O Wagner foi retirado da frente depois da batalha. A Ucrânia recuperou alguns vilarejos próximos em setembro de 2023, e a Rússia retomou Khromove em novembro. Foi a maior cidade ucraniana a mudar de mãos em 2023.",
        { note: "As cifras do desfecho são as mais incertas de toda a guerra: cada governo tem razões para inflar as perdas do outro e esconder as suas. Quando o conflito acabar e os arquivos forem abertos, esses números provavelmente mudarão." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  kyiv2022: {
    terrain: [
      { t: "sea", x: 58, y: 42, w: 3, h: 30, l: "Rio Dnipro" },
      { t: "note", x: 50, y: 3, l: "Bielorrússia" },
      { t: "note", x: 38, y: 26, l: "Chernobyl" },
      { t: "note", x: 72, y: 20, l: "Chernihiv" },
      { t: "note", x: 56, y: 62, l: "Kiev" }
    ],
    units: [
      { id: "rAir", s: "a", k: "inf", w: 6, h: 3, l: "Paraquedistas (Hostomel)" },
      { id: "rW", s: "a", k: "inf", w: 10, h: 3, l: "Eixo oeste: Ivankiv, Bucha, Irpin" },
      { id: "rM", s: "a", k: "inf", w: 7, h: 3, l: "Grupo de Makariv (37ª Brigada)" },
      { id: "rC", s: "a", k: "inf", w: 3, h: 14, l: "Coluna de ≈ 64 km" },
      { id: "rE", s: "a", k: "inf", w: 8, h: 3, l: "Eixo leste: Brovary" },
      { id: "rCh", s: "a", k: "inf", w: 8, h: 3, l: "Frente de Chernihiv" },
      { id: "uHo", s: "b", k: "inf", w: 6, h: 3, l: "Guarda Nacional (Hostomel)" },
      { id: "uIr", s: "b", k: "inf", w: 8, h: 3, l: "Defensores de Irpin e Bucha" },
      { id: "uMa", s: "b", k: "inf", w: 7, h: 3, l: "14ª e 95ª brigadas (Makariv)" },
      { id: "uBr", s: "b", k: "inf", w: 7, h: 3, l: "72ª Brigada (Brovary)" },
      { id: "uCh", s: "b", k: "inf", w: 7, h: 3, l: "Defensores de Chernihiv" },
      { id: "uKy", s: "b", k: "inf", w: 10, h: 4, l: "Defesa de Kiev" }
    ],
    steps: [
      { t: "24 de fevereiro de 2022. Os russos entram pela Bielorrússia, ao norte. Eles têm um eixo a oeste do Dnipro, rumo a Kiev, outro a leste, rumo a Brovary e Chernihiv, e paraquedistas para tomar o aeroporto. Os ucranianos guardam o aeroporto, as pontes e a cidade.",
        p: { rAir: [46, 12], rW: [42, 8], rM: [36, 10], rC: [48, 20], rE: [64, 8], rCh: [72, 10],
             uHo: [50, 44], uIr: [47, 48], uMa: [38, 50], uBr: [66, 50], uCh: [72, 24], uKy: [54, 56] } },
      { t: "24 de fevereiro, de manhã. Helicópteros levam paraquedistas ao aeroporto de Hostomel, a cerca de 10 km de Kiev. A guarnição, de 200 a 300 homens da Guarda Nacional, resiste por cerca de uma hora e recua.",
        p: { rAir: [50, 41], uHo: [52, 46] } },
      { t: "24 de fevereiro, à noite. Uma contraofensiva ucraniana, com apoio aéreo, empurra os paraquedistas de volta para as florestas. O avião An-225 é destruído no hangar. Os reforços russos por ar não conseguem pousar.",
        p: { uHo: [50, 42], rAir: [46, 38] } },
      { t: "25 de fevereiro. Colunas mecanizadas vindas do norte, com um novo desembarque, tomam o aeroporto. Pontes são explodidas em Irpin, e uma comporta é aberta, o que atrasa os russos.",
        p: { rW: [46, 36], rAir: [50, 41], uIr: [47, 47] } },
      { t: "27 de fevereiro a início de março. Começam os combates por Irpin, Bucha e Makariv. A coluna do eixo oeste, com cerca de 64 km, fica parada nas estradas ao norte, com problemas de combustível e de comida.",
        p: { rW: [47, 42], rM: [40, 46], rC: [46, 24], uIr: [47, 47], uMa: [38, 51] } },
      { t: "Início de março. A leste, os russos chegam a Brovary. Em 10 de março, a 72ª Brigada emboscou em Skybyn uma coluna de tanques sem infantaria. Segundo fontes ucranianas, 19 tanques foram destruídos ou danificados.",
        p: { rE: [64, 42], uBr: [65, 46], rCh: [72, 19] } },
      { t: "Meados de março. Chernihiv é cercada, mas resiste. A frente fica parada ao norte de Kiev, e a cidade não é cercada.",
        p: { rE: [64, 36], rCh: [72, 21], uCh: [72, 25] } },
      { t: "22 a 28 de março. A Ucrânia contra-ataca. A Ucrânia anuncia a libertação de Makariv em 22 de março (a cidade seguiu parcialmente disputada por dias) e a de Irpin em 28 de março, e os russos são empurrados para trás.",
        p: { rW: [46, 36], rM: [38, 40], uIr: [47, 42], uMa: [38, 46], rAir: [50, 38] } },
      { t: "29 de março a 2 de abril. A Rússia anuncia a redução de atividade perto de Kiev e recua para a Bielorrússia. Em 2 de abril, a Ucrânia declara a região recuperada.",
        p: { rAir: [46, 14], rW: [42, 10], rM: [36, 12], rC: [48, 14], rE: [64, 12], rCh: [72, 12], uHo: [50, 42], uIr: [47, 40], uMa: [38, 44], uBr: [65, 40] } }
    ]
  }
});
