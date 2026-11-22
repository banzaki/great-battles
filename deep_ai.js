// batch ai: normandia, montecastelo, ardenas, imphalkohima, taliihantala, iwojima
Object.assign(GLOSSARY, {
  "cabeça de praia": "Faixa de terra tomada na costa inimiga por tropas que desembarcaram. É o ponto de apoio de onde o resto do exército pode entrar e se espalhar.",
  "desembarque anfíbio": "Ataque em que tropas saem de navios e chegam por mar a uma costa inimiga. É uma das operações mais difíceis da guerra, porque os soldados chegam expostos, sem abrigo.",
  "aeroterrestres": "Tropas que chegam por via aérea, de paraquedas ou de planador, atrás das linhas inimigas. Na Normandia, serviram para tomar pontes e cruzamentos antes do desembarque.",
  "muralha do atlântico": "Linha de fortificações que a Alemanha mandou construir na costa da Europa ocupada, com bunkers, canhões, minas e obstáculos na praia.",
  "mulberry": "Porto artificial pré-fabricado. Os Aliados rebocaram pedaços de cais e quebra-mares pelo Canal da Mancha e os montaram na costa da Normandia, porque não havia um porto grande para tomar.",
  "tanques dd": "Tanques anfíbios, com uma saia de lona inflável que os fazia boiar. Podiam nadar do navio até a praia, mas afundavam com facilidade se o mar estivesse agitado.",
  "fortitude": "Operação de despistamento dos Aliados. Fez os alemães acreditarem que o ataque principal viria em Calais, com um exército fictício, rádio falso e alvos de enganação.",
  "panzer": "Divisão blindada alemã, formada principalmente por tanques. Da palavra alemã para blindado.",
  "waffen-ss": "Ramo militar da SS, a organização de elite do partido nazista. Suas divisões combatiam ao lado do exército regular e ficaram conhecidas pela brutalidade.",
  "ultra": "Nome dado pelos britânicos às mensagens alemãs decifradas, como as da máquina Enigma. Dava aos Aliados pistas sobre os planos do inimigo.",
  "linha gótica": "Linha de defesa alemã que cortava o norte da Itália, ao longo dos Apeninos, de um mar ao outro. Foi a última grande barreira antes do vale do Pó.",
  "pracinhas": "Apelido carinhoso dos soldados da Força Expedicionária Brasileira. Vem de 'praça', a graduação mais baixa do Exército.",
  "feb": "Força Expedicionária Brasileira, o corpo de cerca de 25.000 homens que o Brasil mandou lutar na Itália, ao lado do 5º Exército americano.",
  "tropas de montanha": "Soldados treinados para lutar em terreno íngreme e com neve, de esqui e escalada. A 10ª Divisão de Montanha dos Estados Unidos foi criada para isso.",
  "lança-chamas": "Arma que lança um jato de combustível em chamas. Era usada para limpar bunkers e cavernas, onde as balas não alcançavam os defensores.",
  "banzai": "Grito de guerra japonês. Na Segunda Guerra, 'carga banzai' era o ataque em massa, a pé e sem esperança de voltar.",
  "monção": "Estação das chuvas fortíssimas no sul da Ásia, de maio a setembro, mais ou menos. Transforma estradas em lama e rios em torrentes.",
  "chindits": "Tropas britânicas e indianas de penetração profunda, comandadas por Orde Wingate, que atuavam atrás das linhas japonesas na Birmânia.",
  "ponte aérea": "Sistema de transporte contínuo por avião, que leva suprimentos, soldados e feridos quando as estradas estão cortadas.",
  "panzerfaust": "Arma antitanque alemã descartável, leve e simples, que o soldado a pé disparava de perto contra o blindado.",
  "interceptação de rádio": "Escuta e análise das mensagens de rádio do inimigo. Mesmo sem decifrar o código, dá para descobrir onde estão as unidades e quando vão atacar.",
  "barragem": "Tiro de artilharia concentrado e contínuo sobre uma área, para impedir o inimigo de se mexer ou de reagir.",
  "planador": "Avião sem motor, rebocado por outro e solto perto do alvo. Levava soldados e armas de forma silenciosa.",
  "comandos": "Tropas de elite treinadas para missões rápidas e arriscadas, como invadir fortificações ou tomar pontos-chave.",
  "bunker": "Abrigo de concreto ou terra, parcialmente enterrado, de onde os defensores atiram e se protegem da artilharia.",
  "porta-aviões de escolta": "Porta-aviões pequeno, construído em casco de navio mercante, usado para proteger comboios e apoiar desembarques."
});

Object.assign(DEEP, {
  normandia: {
    war: "Segunda Guerra Mundial: invasão da Europa ocupada pela Alemanha (1944)",
    hook: "Em um dia, mais de 6.900 embarcações cruzaram o Canal da Mancha para abrir a porta da Europa ocupada.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em junho de 1944, a Alemanha nazista ocupava a Europa ocidental havia quatro anos. A França tinha caído em 1940, e a Grã-Bretanha resistira atrás do Canal da Mancha. No leste, o Exército Vermelho já empurrava os alemães de volta. Os soviéticos pediam fazia tempo que os Aliados ocidentais abrissem uma segunda frente na Europa, para dividir as forças de Hitler.",
        "Só que atacar uma costa defendida é uma das coisas mais difíceis da guerra. O [[desembarque anfíbio]] põe os soldados na areia expostos, sem abrigo, diante de inimigos entrincheirados. E havia outro problema: o abastecimento. Um exército precisa de milhares de toneladas por dia, e tomar um porto grande e fortificado era quase impossível. A solução foi levar o porto junto: os [[portos artificiais Mulberry|mulberry]], peças prontas que seriam rebocadas pelo Canal e montadas na costa.",
        "Do outro lado, Hitler mandara erguer a [[muralha do atlântico]]. O projeto previa 15.000 posições defendidas por 300.000 soldados, mas faltaram concreto e mão de obra, e a maior parte nunca foi construída. O marechal Rommel, encarregado de reforçar a defesa, mandou colocar obstáculos na altura da maré alta e triplicou o número de minas.",
        { h: "O caminho até o Dia D" },
        { timeline: [
          ["Maio de 1943", "Na Conferência Trident, em Washington, britânicos e americanos decidem fazer uma invasão através do Canal no ano seguinte."],
          ["Agosto de 1943", "A Conferência de Quebec aceita o plano inicial."],
          ["31 de dezembro de 1943", "Eisenhower e Montgomery veem o plano e o ampliam: de três para cinco divisões de desembarque, mais três [[divisões aeroterrestres|aeroterrestres]]."],
          ["Início de 1944", "A falta de barcaças de desembarque empurra a data, de 1º de maio para junho."],
          ["4 a 6 de junho de 1944", "O ataque previsto para o dia 5 é adiado por causa do tempo. Eisenhower decide seguir em frente no dia 6."]
        ]},
        { h: "Onde atacar, e como esconder" },
        "Os planejadores consideraram quatro áreas: Bretanha, península de Cotentin, Normandia e Pas-de-Calais. Calais, onde o Canal é mais estreito, era a mais óbvia e a mais bem defendida. A Normandia foi escolhida porque tinha espaço para o exército crescer e ficava perto do porto de Cherbourg.",
        "Para que os alemães continuassem olhando para Calais, os Aliados montaram uma farsa, a [[Operação Fortitude|fortitude]]: um exército americano que não existia, o Primeiro Grupo de Exércitos, atribuído ao general Patton. Na própria noite do ataque, aviões jogaram tiras de alumínio para confundir os radares, navios falsos fingiram uma frota, e bonecos de paraquedistas caíram perto de Le Havre e Isigny."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Dwight Eisenhower, 53 anos" },
        "General americano, era o comandante supremo das forças aliadas. Não era o tipo que lidera na frente: seu trabalho era fazer americanos, britânicos e canadenses trabalharem juntos e tomar a decisão que ninguém mais queria tomar. A mais pesada foi a do tempo. O ataque estava marcado para 5 de junho, mas em 4 de junho o vento era forte, o mar estava grosso e as nuvens, baixas. O meteorologista James Stagg previu uma melhora curta para o dia 6. As próximas datas boas, com a maré e a lua certas, só viriam em 18 a 20 de junho, e uma tempestade bateu na costa de 19 a 22. Eisenhower mandou seguir.",
        { h: "Bernard Montgomery, 56 anos" },
        "Comandava o 21º Grupo de Exércitos, que controlava todas as forças terrestres. Foi ele, junto com Eisenhower, quem pediu para ampliar o plano original, que previa só três divisões no primeiro ataque.",
        { h: "Erwin Rommel, 52 anos" },
        "O 'Raposa do Deserto' comandava o Grupo de Exércitos B, que defendia a costa. Sua ideia era que o invasor é mais fraco no momento em que chega à praia, e por isso tudo devia se decidir ali, com os blindados perto do mar. Outros comandantes, como Rundstedt, comandante supremo do Oeste, preferiam guardar as reservas mais atrás e contra-atacar onde o desembarque fosse mais forte. Hitler escolheu um meio-termo: dividiu os blindados e ficou com quatro divisões sob seu controle direto, que só se mexiam com uma ordem dele. Na noite do dia 5, Rommel estava na Alemanha. Vários relatos dizem que tinha viajado para ver a mulher, que fazia 50 anos, antes de falar com Hitler.",
        { h: "Os outros nomes" },
        "Do lado aliado, Omar Bradley comandava o 1º Exército americano (Utah e Omaha), Miles Dempsey comandava o 2º Exército britânico (Gold, Juno e Sword), e o almirante Bertram Ramsay, a frota. Do lado alemão, o general Friedrich Dollmann comandava o 7º Exército, Leo Geyr von Schweppenburg o Grupo Panzer Oeste, e Edgar Feuchtinger a 21ª Divisão [[panzer]], a única de blindados perto da costa."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "No primeiro dia desembarcaram cerca de 156.000 soldados aliados: uns 73.000 americanos, dos quais 15.600 aeroterrestres, e uns 83.000 do 2º Exército britânico, entre ingleses e canadenses. Mais de 24.000 homens chegaram por via aérea, antes do amanhecer. A armada reunia quase 7.000 embarcações de oito países: 1.213 navios de guerra, 4.126 barcaças de desembarque, além de navios auxiliares e mercantes, com cerca de 195.700 marinheiros. No ar, os Aliados tinham 9.543 aviões. A Luftwaffe conseguiu reunir cerca de 815 sobre a Normandia.",
        "Os alemães tinham cerca de 50 divisões na França e nos Países Baixos, mas muitas estavam incompletas. Na costa atacada havia por volta de 50.000 homens: a 709ª Divisão em Cotentin (cerca de 12.300, muitos recrutas de povos do leste, os chamados Ostlegionen), a 352ª em Omaha (cerca de 12.000) e a 716ª nas praias britânicas e canadense (cerca de 7.000, abaixo do efetivo). Perto de Caen estava a 21ª Divisão Panzer, com 146 tanques e 50 canhões de assalto.",
        { note: "Os números de tropas variam entre as fontes, conforme se contem só os que pisaram em terra no dia 6, os aeroterrestres, a marinha e o apoio. Usamos os da Wikipédia em inglês, que reúne várias fontes." },
        { h: "O terreno" },
        "A Normandia tem praias largas, de areia, em geral com pequenas falésias ou dunas atrás. Os Aliados dividiram a costa em cinco setores, de oeste para leste: Utah e Omaha para os americanos, Gold e Sword para os britânicos e Juno para os canadenses. Omaha era a mais difícil: barrancos altos dominavam a areia, e só cinco ravinas levavam ao interior, uma delas, a de Vierville, com estrada asfaltada. Atrás das praias ficavam pântanos, campos alagados e a região de cercas vivas do interior, onde cada campo vira uma fortaleza.",
        { h: "A noite antes" },
        "Os alemães tinham menos dados do tempo, porque os Aliados controlavam o Atlântico. A Luftwaffe previu tempestade, e muitos comandantes saíram dos postos. Alguns estavam em Rennes, num exercício de simulação de guerra, e Rommel estava longe. Às vésperas, os radares da costa tinham sido destruídos por ataques aéreos, e a frota só foi vista às 2 da manhã.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, o ar. Pouco depois da meia-noite, os batedores americanos pularam. As nuvens atrapalharam: dos cinco pontos de lançamento, só um foi marcado com precisão. A 101ª Divisão Aeroterrestre começou a saltar por volta de 1h30, para controlar as passagens atrás de Utah; muitos homens caíram longe do alvo, e alguns se afogaram em campos alagados. A 82ª chegou por volta de 2h30: na margem leste do rio Merderet, 75% caíram perto do ponto certo e tomaram Sainte-Mère-Église em duas horas, mas na margem oeste só 4% caíram na área prevista. Os britânicos tiveram mais sorte: às 0h16, um assalto de [[planador]] tomou as pontes do canal de Caen e do rio Orne, as famosas Pegasus Bridge, intactas e com poucas baixas. Já a bateria de Merville, que ameaçava o desembarque britânico, foi atacada por apenas 160 dos 600 homens que deviam ir. O tenente-coronel Terence Otway atacou assim mesmo e destruiu os canhões, com 75 baixas. Eram de 75 mm, não de 150 mm, como se temia.",
        "Segundo, a reação alemã demorou. O 7º Exército soube dos saltos à 1h20, mas Rundstedt não acreditou, de início, que fosse uma invasão grande. A 21ª Panzer foi posta em marcha às 2h, mas Feuchtinger precisava de uma autorização do comando supremo e só recebeu as ordens perto das 9h. Por conta própria, formou um grupo de combate.",
        "Terceiro, o mar. Às 5h45 começou o bombardeio naval, e às 6h30 os primeiros soldados pisaram na areia. A correnteza e o vento empurraram as barcaças para leste. Em Utah, a 4ª Divisão desembarcou a cerca de 1.800 metros do ponto previsto, e alguns objetivos do dia ficaram para depois, em parte porque o desembarque foi longe demais ao sul. Cerca de 21.000 homens chegaram, com só 197 baixas, e os pontos fortes foram neutralizados por volta do meio-dia.",
        "Quarto, Omaha. Foi o desastre. A 1ª e a 29ª Divisões encontraram não um regimento alemão, como se esperava, mas a 352ª Divisão inteira. Os bombardeiros soltaram a carga tarde demais, e quase todos os obstáculos ficaram intactos. Dos 32 tanques anfíbios (os [[tanques dd]]) lançados a uns 4,6 km da praia, 27 afundaram, com 33 tripulantes mortos. Às 8h30 os desembarques foram suspensos para limpar a praia. No fim da manhã, só uns 600 homens tinham chegado ao alto. O general Norman Cota, assistente do comandante da 29ª, foi visto por toda parte, empurrando os homens para fora da areia, e ganhou a Cruz de Serviço Distinto. Foi preciso o dia inteiro, e o fim da tarde, para estabelecer uma [[cabeça de praia]] estreita. As baixas do dia em Omaha são estimadas em 2.000 a 2.400.",
        "Ali perto, 200 homens do 2º Batalhão de Rangers, sob o tenente-coronel James Rudder, escalaram os 30 metros das falésias de Pointe du Hoc para destruir uma bateria de canhões. Quando chegaram ao topo, os canhões já tinham sido tirados do lugar. Os Rangers os acharam num pomar, uns 550 metros ao sul, e os destruíram. Ao amanhecer do dia 7, Rudder só tinha 90 homens em condições de lutar. O alívio chegou no dia 8.",
        "Quinto, as praias do leste. Em Gold, a maré atrasou o desembarque para as 7h25. Os canhões de Longues-sur-Mer foram silenciados pelos cruzadores, e o forte de Le Hamel, só às 16h, por uma carga de demolição de um tanque especial. Em Juno, o mar agitado atrasou os canadenses, que desembarcaram na frente de seus tanques e sofreram 961 baixas. Em Sword, 21 dos 25 tanques anfíbios chegaram à terra, e os [[comandos]] franceses de Philippe Kieffer limparam o cassino de Riva Bella.",
        "Sexto, o contra-ataque. Às 16h, a 21ª Panzer atacou entre Sword e Juno e quase chegou ao Canal. Parou diante da 3ª Divisão britânica e foi chamada de volta. Segundo relatos, só ao redor das 16h Hitler liberou as divisões blindadas que Rundstedt pedia desde de manhã."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Ao fim do dia 6, os Aliados tinham cinco cabeças de praia, mas nenhum dos objetivos do dia tinha sido atingido por inteiro. Carentan, Saint-Lô e Bayeux continuavam alemãs, e Caen, que devia cair no primeiro dia, só foi tomada em julho. Só Gold e Juno estavam ligadas. As cinco praias só se juntaram em 12 de junho, numa frente de cerca de 97 km por 24 de profundidade.",
        "As perdas aliadas no primeiro dia foram estimadas em pelo menos 10.000, com 4.414 mortos confirmados: 2.499 americanos e 1.915 de outros países. As alemãs, entre 4.000 e 9.000 mortos, feridos, desaparecidos ou prisioneiros. Cerca de 3.000 civis franceses morreram no Dia D e no dia seguinte.",
        { h: "Por que importa" },
        "A invasão abriu a segunda frente. Em poucas semanas, mais de um milhão de soldados aliados desembarcaram, 39 divisões ao todo. Paris foi libertada em agosto, e a Alemanha se rendeu em maio de 1945, 11 meses depois. O Dia D virou o símbolo da libertação da Europa ocidental e um modelo de operação conjunta entre exércitos, marinhas e forças aéreas de vários países.",
        { h: "Curiosidades e controvérsias" },
        { note: "A farsa teve efeito: uma operação de despistamento convenceu Hitler de que o ataque principal seria em Calais, e as reservas alemãs demoraram a chegar à Normandia." },
        { note: "Uma história muito contada diz que Hitler dormia e ninguém ousou acordá-lo para liberar os blindados. Os relatos variam: alguns dizem que a ordem saiu por volta das 16h, outros que foi mais tarde. O que é certo é que a cadeia de comando alemã, centralizada demais, perdeu horas preciosas." },
        { note: "O bombardeio aéreo e naval deveria ter destruído as defesas antes do desembarque, mas em Omaha as nuvens baixas e a pressa dos bombardeiros fizeram a maior parte das bombas cair atrás das posições alemãs. Muitos historiadores veem aí uma das causas das baixas." },
        { note: "Eisenhower escreveu na véspera um bilhete assumindo toda a culpa, caso o ataque falhasse. Ele nunca precisou usá-lo." }
      ]}
    ]
  },

  ardenas: {
    war: "Segunda Guerra Mundial: frente ocidental, inverno de 1944-1945",
    hook: "A última aposta de Hitler: em 16 de dezembro de 1944, 400.000 alemães saíram da neblina para tentar chegar a Antuérpia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No outono de 1944, a Alemanha parecia perdida. Desde o Dia D, os Aliados tinham libertado Paris e avançado até a fronteira alemã. No leste, o Exército Vermelho avançava. Muitos Aliados esperavam que a guerra acabasse no Natal. Mas Hitler ainda tinha uma ideia.",
        "Em 16 de setembro de 1944, ele apresentou o plano a seus generais: um golpe rápido pelas Ardenas, a região de florestas e colinas da Bélgica e de Luxemburgo, por onde os alemães já tinham passado em 1940. O alvo era Antuérpia, o grande porto de que os Aliados dependiam. Se os alemães chegassem lá, dividiriam os exércitos aliados, cercariam quatro deles e, esperava Hitler, forçariam os ocidentais a negociar a paz. Com isso, ele poderia mandar tudo para o leste. Os generais duvidaram, e o plano recebeu o nome de código Wacht am Rhein, 'Sentinela no Reno', para parecer defensivo.",
        "As Ardenas eram vistas pelos americanos como um setor tranquilo. Era onde se punham tropas novas, ainda sem experiência, e unidades cansadas de outras frentes para descansar. As linhas eram finas.",
        { h: "O caminho até as Ardenas" },
        { timeline: [
          ["Agosto de 1944", "A Romênia, fonte de petróleo da Alemanha, cai nas mãos dos soviéticos; falta combustível."],
          ["16 de setembro de 1944", "Hitler apresenta o plano da ofensiva pelas Ardenas."],
          ["28 de novembro de 1944", "O porto de Antuérpia entra em funcionamento, depois de limpo das minas do estuário do Escalda."],
          ["16 de dezembro de 1944", "Começa o ataque alemão, de manhã cedo, com um bombardeio de 1.600 canhões ao longo de 130 km."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Adolf Hitler" },
        "Tomou a decisão quase sozinho, contra a opinião de muitos generais. Esperava que o mau tempo cancelasse a vantagem aérea dos Aliados e que o choque de uma grande ofensiva abalasse a união entre americanos e britânicos. O cálculo estratégico, porém, era irreal: a Alemanha não tinha combustível nem reservas para sustentar uma ofensiva de longa duração.",
        { h: "Gerd von Rundstedt e Walter Model" },
        "Rundstedt era o comandante supremo no Oeste, e Model, o comandante do Grupo de Exércitos B, que realizava o ataque. Os dois achavam o objetivo de Antuérpia ambicioso demais, e propuseram metas menores, mas Hitler não aceitou. O 6º Exército Panzer, de Sepp Dietrich, atacaria ao norte, o 5º, de Hasso von Manteuffel, no centro, e o 7º, de Erich Brandenberger, ao sul.",
        { h: "Eisenhower, Bradley, Patton e Montgomery" },
        "Do lado aliado, Eisenhower era o comandante supremo. Omar Bradley comandava o 12º Grupo de Exércitos, a que pertenciam o 1º e o 3º Exércitos americanos. George Patton comandava o 3º, e Bernard Montgomery, o 21º Grupo de Exércitos britânico. Na crise, Eisenhower tomou uma decisão que causou polêmica: em 20 de dezembro, passou o 1º e o 9º Exércitos americanos, ao norte da brecha, para o comando de Montgomery, já que as comunicações de Bradley ficaram cortadas.",
        { h: "Anthony McAuliffe, 46 anos" },
        "O general de brigada que comandava a 101ª Divisão Aeroterrestre em Bastogne, em lugar do comandante da divisão, Maxwell Taylor, que estava nos Estados Unidos. Era artilheiro, não paraquedista de carreira, e entrou na história por uma palavra."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os alemães juntaram mais de 410.000 homens (406.342, segundo uma contagem de 16 de dezembro), pouco mais de 1.400 tanques e blindados, cerca de 2.600 canhões e mais de 1.000 aviões. Foram 13 divisões de infantaria, 2 de paraquedistas e 6 de blindados tiradas da reserva do alto comando. Os americanos tinham poucos soldados na região no começo. Ao longo da batalha, os Aliados chegaram a mais de 700.000 homens, e só na primeira semana 250.000 foram deslocados para a área.",
        { note: "Os números de efetivo dependem da data e do método. Os 600.000 americanos e os 400.000 alemães do cartão da batalha são os mais citados; a Wikipédia dá mais de 700.000 Aliados no total, e mais de 410.000 alemães." },
        { h: "O terreno" },
        "Floresta fechada, colinas e estradas estreitas, com neve e gelo no inverno. Para os blindados, que dependem de estradas, as Ardenas são um gargalo: bastam um cruzamento e uma ponte para parar uma coluna inteira. Duas cidades eram vitais, porque são nós de estrada: Saint-Vith, ao norte, e Bastogne, ao sul. Quem tinha os cruzamentos controlava o ritmo.",
        { h: "O segredo e o tempo" },
        "Os alemães conseguiram uma surpresa completa. Os Aliados confiavam demais em si, tinham leitura errada das intenções alemãs, voavam pouco por causa do mau tempo e olhavam para suas próprias ofensivas em outros setores. O [[ultra]] chegou a decifrar de 40 a 50 mensagens por dia e viu a Luftwaffe quadruplicar os caças e usar a palavra 'Jägeraufmarsch' ('concentração de caças'), mas a surpresa foi completa mesmo assim. Nuvens pesadas cobriam o céu e impediam a aviação aliada de voar.",
        { h: "A batalha em quatro movimentos" },
        "Primeiro, o choque. Em 16 de dezembro, de manhã cedo, o bombardeio abriu a ofensiva sobre uma frente de 130 km. A infantaria alemã rompeu as linhas finas, e os blindados correram pelas brechas. Na tarde seguinte, em 17 de dezembro, perto do cruzamento de Baugnez, perto de Malmedy, tropas da [[waffen-ss]] do grupo de combate de Joachim Peiper capturaram soldados americanos do 285º Batalhão de Observação de Artilharia e abriram fogo contra os prisioneiros: pelo menos 84 foram mortos. O massacre de Malmedy fez os americanos lutarem com raiva, e Peiper e Dietrich foram julgados por isso depois da guerra. O grupo de Peiper tinha cerca de 4.800 homens e 600 veículos, mas combustível insuficiente para chegar a Antuérpia. Foi atrasado por pontes caídas e por resistência americana, e acabou parado em La Gleize. Em 23 de dezembro, Peiper abandonou os veículos e escapou a pé, com uns 800 homens.",
        "Segundo, as defesas nos flancos. No norte, a 2ª e a 99ª Divisões de Infantaria seguraram a crista de Elsenborn contra o 6º Exército Panzer, bloqueando as estradas mais importantes. É considerado o componente decisivo da batalha. No centro, a 7ª Divisão Blindada, de Robert Hasbrouck, com a 106ª e outras unidades, resistiu em Saint-Vith e atrasou o 5º Exército Panzer: os alemães previam tomar a cidade às 18h do dia 17, e Montgomery só mandou evacuar em 21 de dezembro. Também houve a Operação Greif, em que soldados alemães que falavam inglês, de uniformes americanos, se infiltraram atrás das linhas, sob o comando de Otto Skorzeny, para tomar as pontes do Mosa. Não tomaram nenhuma, mas criaram confusão e fizeram os Aliados pararem para checar documentos em barreiras.",
        "Terceiro, Bastogne. A cidade, nó de sete estradas, era defendida pela 101ª Divisão Aeroterrestre, por uma ala da 10ª Divisão Blindada e pelo 969º Batalhão de Artilharia, formado por soldados negros. Em 21 de dezembro estava cercada. Faltavam remédios, e a munição de artilharia foi racionada a dez tiros por canhão por dia. Em 22 de dezembro, o comandante alemão, general von Lüttwitz, mandou exigir a rendição. Ao receber o bilhete, McAuliffe disse ao seu estado-maior: 'Ah, nuts!' ('Que absurdo!'). A resposta escrita que seguiu para os alemães foi uma só palavra: 'Nuts!'. Em 24 de dezembro, o céu abriu, e a aviação aliada voltou a atacar tropas e linhas de abastecimento, e a lançar suprimentos de paraquedas.",
        "Quarto, a virada. Em 19 de dezembro, os comandantes aliados se reuniram num bunker em Verdun. Eisenhower disse que a situação era 'de oportunidade, não de desastre'. Patton afirmou que atacaria com duas divisões em 48 horas, e já tinha mandado preparar o giro de seu exército 90 graus para o norte. Em 26 de dezembro, a 4ª Divisão Blindada rompeu o cerco: a Companhia D do 37º Batalhão de Tanques chegou a Bastogne às 16h50. O ponto mais a oeste que os alemães atingiram foi Foy-Notre-Dame, perto de Dinant, onde a 2ª Divisão Blindada americana os deteve em 24 de dezembro. Em 27 de dezembro, a ofensiva estava quebrada. A luta continuou por quase um mês, até a linha ser restabelecida onde estava antes. Em 1º de janeiro, a Luftwaffe tentou uma última cartada, a Operação Bodenplatte: atacou aeródromos aliados nos Países Baixos e destruiu ou danificou uns 465 aviões, mas perdeu 277, e nunca mais se recuperou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A ofensiva falhou. Os alemães ficaram sem combustível: tinham perdido os campos de petróleo da Romênia em agosto de 1944. O 6º Exército Panzer foi barrado no norte, e o ponto mais a oeste que os alemães alcançaram foi Foy-Notre-Dame, perto do rio Mosa. A batalha terminou, segundo a data mais usada, em 25 de janeiro de 1945.",
        "As perdas alemãs ficam entre 63.000 e 104.000, entre mortos, feridos, desaparecidos e prisioneiros, mais cerca de 527 a 554 tanques e canhões de assalto e uns 800 aviões. As americanas variam conforme a fonte: algo entre 75.000 e 89.000 baixas, entre mortos, feridos e desaparecidos. Cerca de 3.000 civis morreram.",
        { h: "Por que importa" },
        "Foi a maior e mais sangrenta batalha da história do Exército dos Estados Unidos na Segunda Guerra, e a última grande ofensiva alemã no oeste. Esgotou o que restava dos blindados e da aviação alemã, que nunca foram repostos, e abriu o caminho para a invasão da Alemanha. Os Aliados passaram o Reno em março e se encontraram com os soviéticos em abril.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome: 'Batalha do Bulge' (do inglês bulge, 'saliência' ou 'barriga') foi inventado pela imprensa, por causa da bolha que a ofensiva alemã desenhava nos mapas dos jornais. O nome oficial aliado era Contraofensiva das Ardenas; para os alemães, Operação Wacht am Rhein." },
        { note: "O número de mortos americanos é discutido. A Wikipédia em inglês dá 8.407 mortos, 46.170 feridos e 20.905 desaparecidos. Outras fontes, como o Exército americano e a Comissão de Monumentos de Batalha, falam em cerca de 19.000 mortos e mais de 23.000 prisioneiros. A diferença está em como se classificam os desaparecidos e quais relatórios se somam." },
        { note: "A farsa de Skorzeny: soldados capturados em uniformes americanos foram fuzilados como espiões. O próprio Skorzeny foi julgado em Dachau, em 1947, e absolvido." }
      ]}
    ]
  },

  montecastelo: {
    war: "Segunda Guerra Mundial: campanha da Itália (1943-1945)",
    hook: "Os pracinhas vieram de um país tropical para uma montanha gelada, e levaram três meses para tomá-la.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O Brasil entrou na Segunda Guerra em agosto de 1942, depois de submarinos alemães e italianos afundarem navios brasileiros. Mas durante muito tempo parecia que a guerra seria só no mar. Daí nasceu uma ironia: diziam que seria mais fácil uma cobra fumar do que o Brasil mandar soldados à Europa. Os soldados da [[feb]] adotaram a frase como grito de guerra e puseram no seu emblema uma cobra fumando cachimbo.",
        "A divisão brasileira, de cerca de 25.000 homens, saiu do Rio de Janeiro em julho de 1944 e foi incorporada ao 5º Exército dos Estados Unidos, na Itália. Seus primeiros combates foram em setembro, no vale do rio Serchio, onde tomou Massarosa, Camaiore e Monte Prano. Em novembro, a divisão foi transferida para o vale do rio Reno, nos Apeninos. Seu quartel avançado ficou em Porretta Terme, sob o comando do general Mascarenhas de Moraes.",
        "Ali, os alemães mantinham a [[linha gótica]], uma cadeia de defesas ao longo das montanhas. O general americano Mark Clark, comandante do 15º Grupo de Exércitos, queria abrir o caminho para Bolonha antes das neves mais fortes. O 4º Corpo de Exército americano, ao qual a divisão brasileira estava ligada, tinha de tomar os passos das montanhas. O obstáculo era Monte Castelo, com 977 metros, que dominava a estrada estadual 64, a Porrettana, a única estrada para todo tempo entre Pistoia e Bolonha. Dali, a artilharia alemã via e atirava em tudo que se mexia.",
        { h: "O caminho até Monte Castelo" },
        { timeline: [
          ["Agosto de 1942", "O Brasil declara guerra ao Eixo."],
          ["Julho de 1944", "Os primeiros soldados da FEB partem para a Itália."],
          ["Setembro de 1944", "Primeiros combates da FEB, no vale do Serchio."],
          ["24 de novembro de 1944", "Primeiro ataque a Monte Castelo, junto com tropas americanas. Os alemães contra-atacam e retomam os pontos que haviam perdido."],
          ["29 de novembro de 1944", "Segundo ataque, só da divisão brasileira. Falha."],
          ["12 de dezembro de 1944", "Terceiro ataque, com dois batalhões do 1º Regimento. Falha, com cerca de 150 baixas num único dia."],
          ["21 de fevereiro de 1945", "Último ataque, dentro da Operação Encore. A FEB toma o cume."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "João Baptista Mascarenhas de Moraes" },
        "O general que comandava a divisão brasileira e toda a FEB. Depois do fracasso de 12 de dezembro, chegou à conclusão de que o cume só poderia ser tomado por um ataque de toda a divisão, e não por batalhões isolados. Esperou o momento certo, com artilharia suficiente e a ajuda dos americanos.",
        { h: "Eccard von Gablenz" },
        "O general alemão comandava a 232ª Divisão de Infantaria, que defendia a região. Era veterano de Stalingrado. A divisão fora formada em 22 de junho de 1944, com cerca de 9.000 homens, uma mistura de recrutas e veteranos da frente oriental, muitos recuperando-se de ferimentos. Tinha três regimentos, o 1043, o 1044 e o 1045. Nos meses finais recebeu reforços, como o 4º Batalhão de Montanha.",
        { h: "Os outros nomes" },
        "Os majores Franklin, Uzeda e Sizeno Sarmento comandaram os três batalhões do ataque final. O general Oswaldo Cordeiro de Farias comandou a artilharia da divisão. Do lado americano, o 4º Corpo era comandado pelo general Willis Crittenberger, e a 10ª Divisão de Montanha atacou o monte vizinho."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado aliado, a divisão brasileira, de cerca de 25.000 homens, e, no ataque final, a 10ª Divisão de Montanha dos Estados Unidos, formada por [[tropas de montanha]]. Do lado alemão, a 232ª Divisão, com cerca de 9.000 homens, no alto de posições bem preparadas, com [[bunker]] e artilharia que cobria todos os caminhos.",
        { h: "O terreno e o clima" },
        "Os Apeninos são altos, com encostas que sobem de forma íngreme, e a estrada de montanha fica à mercê de quem controla o topo. Naquele inverno, a chuva e os bombardeios aéreos transformaram os caminhos em lama, e os tanques não conseguiam andar. Depois veio o frio: cerca de 20 graus negativos, sem contar o vento, segundo a Wikipédia em português. Os brasileiros, vindos de um país tropical, não estavam acostumados.",
        { h: "Os primeiros ataques" },
        "Em 24 de novembro, o esquadrão de reconhecimento brasileiro e o 3º Batalhão do 6º Regimento de Infantaria se juntaram à Força-Tarefa 45 americana e tomaram o monte Belvedere, mas os alemães contra-atacaram e os expulsaram de Monte Castelo. Em 29 de novembro, três batalhões brasileiros, com três pelotões de tanques americanos, atacaram às 7h. A chuva e a baixa nuvem impediram o apoio aéreo, e a lama travou os tanques. Os alemães repeliram o ataque, e à tarde os brasileiros estavam de volta ao ponto de partida, com cerca de 190 baixas. Na noite anterior, os alemães já tinham retomado Belvedere, expondo o flanco esquerdo aliado.",
        "Em 12 de dezembro, o 2º e o 3º Batalhões do 1º Regimento atacaram com mau tempo. A artilharia alemã os parou: cerca de 150 baixas, 20 delas mortos. Foi um dos dias de maiores perdas da FEB. Mascarenhas concluiu que o monte só cairia com um ataque da divisão toda.",
        { h: "O ataque final" },
        { formation: true },
        "Em 18 de fevereiro de 1945 começou a Operação Encore, do 5º Exército, que tinha entre os objetivos Monte Castelo, Belvedere e Della Torraccia. A 10ª Divisão de Montanha, à esquerda dos brasileiros, atacava Belvedere desde o dia 18 e deveria tomar Della Torraccia às 17h do dia 21. Na noite de 20, a divisão brasileira tinha posto os três regimentos de infantaria em posição.",
        "Às 6h do dia 21, o ataque principal começou. O 1º Batalhão, do major Franklin, subiu de frente. O 2º, do major Uzeda, apoiou pela direita, e o 3º, do major Sizeno Sarmento, entrou a partir de posições avançadas, ocupadas durante a noite. Entre 16h e 17h, a artilharia sob o comando de Cordeiro de Farias fez uma [[barragem]] concentrada sobre o cume, que o artigo da Wikipédia reconhece como responsável por boa parte do êxito. Por volta das 17h30, os homens de Franklin chegaram ao alto, antes que os americanos tomassem Della Torraccia. Os brasileiros assumiram os bunkers e as fortificações capturadas. Os americanos só terminaram de limpar Della Torraccia depois de escurecer."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A FEB tomou Monte Castelo em 21 de fevereiro de 1945. Os números de baixas variam: a Wikipédia em inglês, que cita o historiador Donato, dá 417 mortos e feridos brasileiros e 8 prisioneiros, contra cerca de 950 mortos e feridos da 10ª Divisão americana, e ao menos 23 prisioneiros alemães. O total alemão de mortos e feridos é incerto.",
        "Depois de Monte Castelo, a FEB seguiu pelas montanhas. Em abril de 1945 lutou em Montese, sua batalha mais sangrenta, e em 29 de abril cercou e forçou a rendição da 148ª Divisão alemã e de outras unidades, em Fornovo di Taro: só ali foram 14.779 prisioneiros, e mais de 20.000 ao todo.",
        { h: "Por que importa" },
        "Os soldados da FEB, os [[pracinhas]], foram os únicos latino-americanos a lutar em terra na Europa. A FEB perdeu 454 mortos do Exército, mais cinco pilotos do grupo de caça, e voltou para casa na segunda metade de 1945. A volta da FEB ajudou a precipitar a queda de Getúlio Vargas e o fim do Estado Novo, segundo a Wikipédia em português.",
        { h: "Curiosidades e controvérsias" },
        { note: "Há quem conte quatro ataques fracassados antes da vitória, e há quem conte três (24 de novembro, 29 de novembro e 12 de dezembro). O Exército Brasileiro também cita uma investida no dia 25. A diferença está em como se separam as operações de cada dia." },
        { note: "A origem da cobra fumando: a expressão nasceu como ironia dos que duvidavam que o Brasil entraria na guerra. Os pracinhas a adotaram, e o emblema da FEB mostra uma cobra com cachimbo." },
        { note: "O monte, tomado em 21 de fevereiro, fica em Gaggio Montano, na região da Emilia-Romagna. Há um monumento perto, em Abetaia, e um memorial no cemitério brasileiro de Pistoia." }
      ]}
    ]
  },

  imphalkohima: {
    war: "Segunda Guerra Mundial: campanha da Birmânia (1944)",
    hook: "O exército japonês levou comida para três semanas e tentou invadir a Índia no meio da monção.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1944, o Japão dominava a Birmânia havia dois anos, depois de expulsar os britânicos em 1942. Do outro lado da fronteira ficava a Índia britânica. A região é de selvas, serras íngremes e rios largos, com poucas estradas, e as chuvas da [[monção]], a partir de maio, travam tudo.",
        "O tenente-general Renya Mutaguchi, comandante do 15º Exército japonês, queria mais do que defender a fronteira. O plano que ele propôs, a Operação U-Go, começou como um ataque preventivo contra o IV Corpo britânico em Imphal e virou uma invasão da própria Índia. Mutaguchi talvez tenha se animado com a primeira expedição dos [[chindits]], em 1943, cujas perdas os Aliados esconderam. O quartel-general imperial aprovou o plano em 7 de janeiro de 1944.",
        "Imphal era a grande base de suprimentos dos Aliados, ligada por estrada, através das montanhas Naga, ao ponto final da ferrovia, em Dimapur. Se Mutaguchi isolasse Imphal e tomasse Dimapur, a posição britânica no leste da Índia desabaria. Ele esperava vencer em três semanas.",
        { h: "O caminho até Imphal" },
        { timeline: [
          ["Fevereiro de 1944", "Na Arakan, os japoneses cercam uma base britânica, a 'Admin Box'. A guarnição recebe suprimentos por avião e resiste, e os invasores ficam sem comida."],
          ["5 de março de 1944", "Começa a fase aérea da segunda expedição dos chindits, atrás das linhas japonesas."],
          ["8 de março de 1944", "Começa a batalha de Imphal."],
          ["Cerca de 15 de março de 1944", "A 31ª Divisão japonesa atravessa o rio Chindwin, rumo a Kohima, com três semanas de suprimentos."],
          ["4 de abril de 1944", "Os japoneses chegam a Kohima."]
        ]},
        "Os comandantes de divisão de Mutaguchi tinham dúvidas, sobretudo sobre o abastecimento. O general sugeriu a solução que ficou famosa, as rações 'Gengis Khan': manadas de bois e búfalos que atravessariam o rio com as tropas e seriam abatidas pelo caminho. A maioria morreu de falta de pasto, e a carne apodreceu antes de chegar. Os planejadores também supuseram que tanques não poderiam operar nas colinas e deixaram para trás a maior parte da artilharia."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "William Slim, 52 anos" },
        "Comandava o 14º Exército britânico, formado em grande parte por soldados indianos. Era um general discreto, sem a pose dos outros, e aprendeu com as derrotas de 1942. Em 1944, usou os aviões de transporte para abastecer e deslocar suas divisões enquanto os japoneses, sem suprimentos, se esgotavam. Foi nomeado cavaleiro no fim do ano, em Imphal.",
        { h: "Geoffry Scoones" },
        "Comandava o IV Corpo, que defendia Imphal. Teve de sustentar um cerco de meses com reservas escassas.",
        { h: "Renya Mutaguchi" },
        "Ambicioso, acreditava que a guerra poderia ser decidida na Índia. Em 6 de junho, ele e seu superior, Kawabe, já aceitavam em particular que o sucesso era impossível, mas nenhum dos dois ordenou a retirada. Mutaguchi só encerrou a ofensiva em 3 de julho. Os dois foram depois afastados.",
        { h: "Kotoku Sato" },
        "O comandante da 31ª Divisão japonesa, que atacou Kohima, não gostava de Mutaguchi desde disputas de facções nos anos 1930 e duvidava do plano desde o início. Em 25 de maio avisou que se retiraria em 1º de junho se não fosse abastecido, e em 31 de maio saiu de Kohima mesmo contra as ordens. Isso, no exército japonês, era algo inédito. Depois da batalha, foi afastado; recusou-se a fazer seppuku e exigiu um tribunal militar, mas o alto comando o declarou mentalmente incapaz de ser julgado.",
        { h: "Os outros nomes" },
        "No lado britânico, o coronel Hugh Richards comandou a guarnição de Kohima e o general Montagu Stopford, o XXXIII Corpo. O líder nacionalista indiano Subhas Chandra Bose tinha um exército aliado ao Japão, o Exército Nacional Indiano (INA), que lutou ao lado dos japoneses."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado aliado, cerca de 120.000 homens no total, a maior parte da Índia britânica (a maioria era indiana). Do lado japonês, cerca de 85.000. A 31ª Divisão que atacou Kohima somava de 15.000 a 20.000. Os japoneses usaram um regimento de tanques, o 14º, com 66 tanques leves, e deixaram a maior parte da artilharia para trás.",
        { h: "O terreno" },
        "Serras cobertas de selva, com rios largos e poucas estradas. Imphal fica numa planície cercada de colinas, onde ficavam os aeródromos. A estrada para Dimapur passa por Kohima, uma crista que domina a estrada. Era possível lutar de morro em morro, e a guerra se decidia pela posse das cristas e pelo abastecimento.",
        { h: "A batalha em quatro movimentos" },
        "Primeiro, a surpresa que não foi. No sul, a 17ª Divisão indiana recuou de Tiddim por uma estrada longa e exposta, pressionada pela 33ª Divisão japonesa, e chegou à planície de Imphal em 4 de abril. Mais ao norte, a 50ª Brigada de paraquedistas foi duramente castigada em Sangshak, e a 15ª Divisão japonesa cortou a estrada do norte e ameaçou Imphal. Em março, Mountbatten tirou 20 aviões C-46 da ponte aérea sobre o Himalaia, a 'Hump', e Slim usou os aviões para transportar a 5ª Divisão indiana da Arakan, com sua artilharia e seus veículos, em 11 dias. Foi o começo de uma [[ponte aérea]] que decidiu a batalha.",
        "Segundo, Kohima. A guarnição era de uns 2.500 homens, mil dos quais não combatentes, mais o 1º Batalhão do Regimento Assam, o 4º Batalhão do Regimento Royal West Kent e outras unidades. Em 6 de abril começou o cerco. O centro da luta foi o bangalô do comissário distrital, o DC, e a quadra de tênis em frente: os dois lados ficaram tão perto que se atiravam granadas de uma trincheira à outra. A guarnição foi pressionada para dentro de um perímetro cada vez menor, na colina Garrison. Em 17 e 18 de abril, os japoneses tomaram o posto de Kuki Picquet e cortaram a guarnição em dois. Em 18 de abril, a 161ª Brigada indiana abriu caminho com apoio de aviões, artilharia e tanques, e em 20 de abril a 6ª Brigada britânica rendeu a guarnição original.",
        "Terceiro, o impasse e as chuvas. Em Bishenpur, ao sul, a 33ª Divisão japonesa foi detida a uns 16 km de Imphal pela artilharia britânica e pela falta de suprimentos. Em Shenam, a leste, a luta pelos picos durou de 8 a 22 de abril. Em 13 de abril, a 5ª Divisão retomou a crista de Nungshigum, com tanques leves, num terreno que os japoneses julgavam íngreme demais para blindados. Com a [[monção]] em maio, a lama atrapalhou ambos os lados, mas os Aliados eram abastecidos pelo ar.",
        "Quarto, o colapso. Em Kohima, os britânicos tomaram as posições em 11 de maio, e em 13 de maio um tanque subiu na quadra de tênis, e o Regimento Dorsetshire limpou a crista. A fome foi decisiva: o depósito de arroz que os japoneses tinham tomado em Naga foi destruído por bombardeio. A 23ª Brigada de penetração longa cortou as linhas de suprimento. Em 31 de maio, Sato abandonou Naga e as outras posições, e o XXXIII Corpo avançou para o sul. Em 22 de junho, as tropas de Kohima e de Imphal se encontraram no marco da milha 109, a uns 16 km de Imphal, e o cerco acabou. Em 3 de julho, Mutaguchi encerrou a ofensiva, e os japoneses recuaram para o Chindwin, deixando artilharia, transporte e feridos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas japonesas em Imphal foram de 54.879 mortos e feridos, dos quais 13.376 mortos, segundo a Wikipédia, a maioria vítima de fome, doença e exaustão. Os Aliados perderam 12.603 mortos e feridos em Imphal e 4.064 em Kohima. Em Kohima, os japoneses tiveram pelo menos 5.764 baixas em combate, com muitas outras mortes por doença, fome ou suicídio. Os japoneses perderam quase todos os seus 12.000 animais de carga e 30.000 cabeças de gado.",
        "O abastecimento aéreo foi decisivo. No fim da batalha, os Aliados tinham levado por avião 19.000 toneladas de suprimentos e 12.000 homens, e retirado 13.000 feridos e 43.000 civis e não combatentes.",
        { h: "Por que importa" },
        "A Operação U-Go custou ao 15º Exército japonês quase todas as suas bestas de carga e boa parte de sua força, e foi seguida pela reconquista da Birmânia pelos Aliados em 1945. Foi uma vitória de logística e de organização: os Aliados, abastecidos por ar, seguraram posições que os japoneses, sem comida, não conseguiram tomar. Vale lembrar que os soldados do lado britânico eram, na maior parte, indianos.",
        { h: "Curiosidades e controvérsias" },
        { note: "A Wikipédia chama as duas batalhas, em conjunto, de 'Stalingrado do Oriente'. É uma comparação de efeito, e não de tamanho." },
        { note: "O epitáfio de Kohima, no cemitério onde ficava a quadra de tênis, é famoso: 'Quando voltarem para casa, contem a eles de nós e digam: por causa do seu amanhã, demos o nosso hoje.' É atribuído a John Maxwell Edmonds, e lembra o epitáfio dos espartanos nas Termópilas. O cemitério guarda 1.420 mortos aliados." },
        { note: "Três soldados ganharam a Cruz Vitória em Kohima, a maior condecoração britânica: John Harman, John Randle e o jemadar Abdul Hafiz, de 18 anos, o mais jovem soldado do exército indiano britânico a recebê-la." }
      ]}
    ]
  },

  taliihantala: {
    war: "Guerra da Continuação, Finlândia contra a União Soviética (1941-1944)",
    hook: "Um país de 4 milhões de habitantes parou a maior ofensiva soviética contra a Finlândia, e continuou independente.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Finlândia lutou duas vezes contra a União Soviética na Segunda Guerra. A primeira, a Guerra de Inverno de 1939-1940, terminou com a perda de território. A segunda, a Guerra da Continuação, começou em 1941, quando os finlandeses atacaram ao lado dos alemães para recuperar o que tinham perdido. Em 1944, os alemães estavam em retirada em toda parte. Em janeiro, o cerco de Leningrado tinha sido rompido.",
        "Stalin decidiu então tirar a Finlândia da guerra. A ofensiva soviética no istmo da Carélia começou em 9 de junho de 1944, três dias depois do Dia D, em coordenação com a invasão da Normandia. Os finlandeses recuaram por duas linhas de defesa, e Viipuri (Vyborg), a segunda maior cidade do país, caiu em 20 de junho. Em 21 de junho, o alto comando soviético mandou a Frente de Leningrado chegar ao lago Saimaa.",
        { h: "O caminho até Tali-Ihantala" },
        { timeline: [
          ["9 de junho de 1944", "A ofensiva soviética começa no istmo da Carélia."],
          ["12 de junho de 1944", "O marechal Mannerheim pede ajuda à Alemanha."],
          ["16 de junho de 1944", "Chega o destacamento aéreo alemão Kuhlmey."],
          ["20 de junho de 1944", "Viipuri cai."],
          ["22 de junho de 1944", "Ribbentrop exige que a Finlândia continue lutando. O presidente Ryti dá, pessoalmente, essa garantia."],
          ["25 de junho de 1944", "Começa a batalha de Tali-Ihantala."]
        ]},
        "Em troca de ajuda, os alemães impuseram um preço. Mandaram aviões, uma brigada de canhões de assalto, uma divisão e, sobretudo, [[panzerfaust]]. Em troca, o presidente Risto Ryti assinou um compromisso pessoal de não fazer paz separada com Moscou, o chamado acordo Ryti-Ribbentrop. Tentativas de negociar a paz falharam: a resposta soviética de 23 de junho exigia uma declaração de rendição, e a Finlândia a recusou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Carl Gustaf Mannerheim, 77 anos" },
        "Comandante-chefe finlandês, marechal desde 1933, ex-oficial do exército do czar. Pediu ajuda à Alemanha em 12 de junho, e o que veio foi pouco: sobretudo armas e um apoio aéreo.",
        { h: "Karl Lennart Oesch" },
        "Comandava as Forças do Istmo, o quartel-general que dirigia a defesa. Trabalhava com o IV Corpo do tenente-general Taavetti Laatikainen e com a Divisão Blindada, do major-general Ruben Lagus, a única divisão blindada do exército finlandês.",
        { h: "Leonid Govorov" },
        "Marechal soviético, comandava a Frente de Leningrado. O 21º Exército, sob Dmitri Gusev, liderou o ataque a Tali-Ihantala, e o 23º, de Aleksandr Cherepanov, atacou em direção ao rio Vuoksi.",
        { h: "Vilho Nenonen" },
        "O general da artilharia finlandesa. O método de correção de tiro que leva o seu nome permitia concentrar o fogo de muitas baterias num único alvo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são discutidos. Para os finlandeses, a Wikipédia em inglês fala em cerca de 50.000 homens, com estimativas posteriores perto de 100.000. Para os soviéticos, as fontes soviéticas dão de 48.000 a 60.000, enquanto estimativas ocidentais chegam a 150.000. O lado alemão mandou o destacamento aéreo Kuhlmey (Fw 190, Ju 87 Stuka e Bf 109) e a 303ª Brigada de Canhões de Assalto, com 22 StuG III e 9 StuH 42.",
        { note: "Usamos 'cerca de 50.000 contra 150.000' porque é a conta mais citada, mas não é segura: a razão real entre os dois lados é discutida, e algumas estimativas dão aos finlandeses até 100.000 homens." },
        { h: "O terreno" },
        "Uma área de cerca de 100 km², de 8 a 14 km a nordeste de Viipuri, entre a ponta norte da baía de Viipuri e o rio Vuoksi. É um terreno de lagos e florestas, que limita por onde os tanques podem andar.",
        { h: "A batalha em quatro movimentos" },
        "Primeiro, o ataque em Tali. Em 25 de junho, depois de um forte bombardeio de artilharia e aviação, os soviéticos atacaram às 7h30, a partir de Tali, e o 30º Corpo de Fuzileiros da Guarda se juntou à luta. Os finlandeses se viram sob risco de cerco, mas um contra-ataque com a reserva e a Divisão Blindada empurrou os soviéticos para trás, a oeste do lago Leitimojärvi, e quase aniquilou o 27º Regimento de Tanques soviético.",
        "Segundo, a luta de 27 a 30 de junho. Os finlandeses se reorganizaram em dois grupos de combate e tentaram cercar divisões soviéticas em Talinmylly. Chegaram a cerca de um quilômetro de fechar o cerco, mas não conseguiram. Em 28 de junho, uma [[barragem]] de 14 batalhões de artilharia destruiu ou danificou ao menos 15 tanques em Ihantala. O dia 29 foi o pior para os finlandeses, e eles saíram de Tali em 30 de junho.",
        "Terceiro, Ihantala. Em 1º e 2 de julho foi a luta mais dura, com perdas finlandesas de cerca de 800 homens por dia. A artilharia finlandesa fez a diferença: pelo método de Nenonen, 21 baterias, uns 250 canhões, podiam disparar sobre um único alvo. No total, atiraram mais de 122.000 projéteis. Em 2 de julho, a [[interceptação de rádio]] finlandesa captou uma mensagem anunciando um ataque soviético para 3 de julho, às 4h. Antes que começasse, 40 bombardeiros finlandeses e 40 alemães atacaram, e 250 canhões dispararam cerca de 4.000 projéteis sobre as tropas ainda reunidas. As armas antitanque finlandesas e alemãs, entre elas o panzerfaust e o Panzerschreck, destruíram muitos blindados, 25 deles numa única tarde.",
        "Quarto, o fim. Os soviéticos tiveram algum êxito em 6 de julho e foram rechaçados no dia seguinte. Depois, deslocaram o esforço para o Vuoksi e mandaram tropas para a frente de Narva. Desde 9 de julho pararam de tentar romper, e em 10 de julho o alto comando soviético mandou passar à defesa."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Finlândia perdeu cerca de 8.750 homens: 1.350 mortos, 1.100 desaparecidos e 6.300 feridos, na conta da Wikipédia em inglês. Os finlandeses estimam que os soviéticos perderam cerca de 600 tanques, a maior parte por ataque aéreo, artilharia e combate de perto, e de 284 a 320 aviões. O historiador Ohto Manninen estima de 18.000 a 22.000 mortos e feridos no 21º Exército, mas com incerteza. Os alemães perderam 33 aviões.",
        "Em 28 de julho, Ryti renunciou e pediu a Mannerheim que aceitasse a candidatura à presidência. Isso livrou a Finlândia do compromisso pessoal que Ryti tinha assinado com Ribbentrop. O cessar-fogo começou às 7h de 4 de setembro de 1944, embora o Exército Vermelho só tenha parado 24 horas depois.",
        { h: "Por que importa" },
        "Foi a maior batalha da história dos países nórdicos. Vários historiadores, como Jowett, Snodgrass, McTeer, Lunde, Alanen e Moisala, defendem que ela e outras vitórias defensivas convenceram a liderança soviética de que conquistar a Finlândia seria caro demais. A Finlândia perdeu território, mas continuou independente e, ao contrário dos países do Leste Europeu, não virou uma república soviética.",
        { h: "Curiosidades e controvérsias" },
        { note: "As vitórias de artilharia têm números a serem lidos com cuidado: a Wikipédia lembra que os finlandeses dispararam mais projéteis em Vuosalmi, em oito dias, e na linha U, em cinco dias. O recorde de fogo, portanto, não é de Tali-Ihantala." },
        { note: "Entrevistas com prisioneiros soviéticos, citadas por pesquisadores finlandeses, indicam que a intenção era avançar até Helsinque. A interceptação das comunicações de rádio soviéticas é apontada por Lunde como um dos fatores da defesa." }
      ]}
    ]
  },

  iwojima: {
    war: "Segunda Guerra Mundial: guerra do Pacífico (1945)",
    hook: "A ilha de 21 km² em que os americanos perderam mais homens do que os japoneses.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo de 1945, os Estados Unidos já tinham tomado as ilhas Marianas, de onde os bombardeiros B-29 atacavam as cidades japonesas. Mas faltava uma escala. Entre as Marianas e Tóquio ficava a ilha vulcânica de Iwo Jima, parte das ilhas Vulcano, com dois aeródromos, o Campo Sul e o Campo Central. Do ponto de vista japonês, era uma estação de alerta: avisava por rádio da chegada dos bombardeiros. Do ponto de vista americano, era uma base possível para caças P-51 Mustang, que acompanhariam os B-29, e um lugar para bombardeiros avariados pousarem em emergência.",
        "Com a perda das Marianas, em 1944, as ilhas Vulcano passaram a ser ainda mais importantes para o Japão.",
        { h: "O caminho até Iwo Jima" },
        { timeline: [
          ["Junho de 1944", "O general Kuribayashi é designado para comandar a defesa. Bombardeios aeronavais começam no mesmo mês."],
          ["A partir de junho de 1944", "Os japoneses cavam túneis e posições interligadas."],
          ["16 a 18 de fevereiro de 1945", "Três dias de bombardeio naval e aéreo antes do desembarque."],
          ["19 de fevereiro de 1945", "Os fuzileiros desembarcam."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Tadamichi Kuribayashi, 53 anos" },
        "O tenente-general japonês que comandava a defesa. Tinha servido nos Estados Unidos e no Canadá e conhecia o poder industrial americano. Sabia que a ilha não podia ser defendida até a vitória, e esperava que o número de baixas fizesse os americanos pensarem duas vezes antes de invadir o próprio Japão. Rejeitou a defesa na praia e escolheu a defesa em profundidade, com posições que se apoiavam umas às outras, ligadas por túneis. Proibiu as cargas [[banzai]] em massa, embora seus superiores tenham ordenado, contra a sua vontade, algumas defesas na praia.",
        { h: "Holland Smith, Harry Schmidt e Raymond Spruance" },
        "O almirante Spruance comandava a frota. O general Holland Smith comandava as forças terrestres da expedição, e o major-general Harry Schmidt, o V Corpo Anfíbio, que realizou o desembarque. Schmidt pediu dez dias de bombardeio naval, mas o contra-almirante Blandy, comandante do apoio de fogo, recusou, porque precisava de tempo para reabastecer de munição, e concedeu três.",
        { h: "Os outros nomes" },
        "As divisões de fuzileiros eram a 5ª (Rockey), a 4ª (Cates) e a 3ª (Erskine, reserva flutuante). Do lado japonês, o barão Takeichi Nishi, campeão olímpico de hipismo em 1932, comandava os tanques, que foram camuflados e usados como artilharia fixa."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O Japão tinha cerca de 21.000 homens (21.060 pela Wikipédia), com cerca de 60% da munição normal e comida para no máximo quatro meses. Os Estados Unidos desembarcaram cerca de 30.000 fuzileiros no primeiro dia e mais 40.000 depois, uns 70.000 no total. A Wikipédia lista 110.000 homens de todas as armas, contando marinheiros e apoio.",
        { h: "O terreno" },
        "Uma ilha vulcânica de 21 km², com o monte Suribachi na ponta sul, e ao norte o planalto de Motoyama, de rochas, cavernas e ravinas. A areia é preta, de cinza vulcânica: atola veículos e não deixa cavar um buraco para se proteger. Kuribayashi tinha cavado 18 km de túneis, dos 27 planejados. O túnel que ligaria o Suribachi ao resto da ilha ficou incompleto, e a área do monte acabou funcionando como um setor quase independente.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, o desembarque. Em 19 de fevereiro, a primeira onda chegou às 8h59, um minuto antes do previsto, num dia claro. Os japoneses seguraram o fogo por cerca de uma hora, enquanto a praia se enchia de gente, e abriram fogo pouco depois das 10h. Atrás da praia, o declive de uns 5 metros, de cinza solta, era quase impossível de subir. As lagartas dos veículos anfíbios patinavam, e os Seabees tiveram de abrir estradas com tratores. Os fuzileiros descobriram que os bunkers limpos com [[lança-chamas]] eram, muitas vezes, reocupados pelos túneis, e sofreram muitas baixas. Na ponta direita, o 3º Batalhão do 25º Regimento desembarcou cerca de 900 homens; ao anoitecer, só 150 estavam em condições de lutar.",
        "Segundo, o Suribachi. O 28º Regimento, do coronel Harry Liversedge, atravessou a ilha no ponto mais estreito, uns 800 metros, e isolou o monte. Em 21 de fevereiro, o único ataque kamikaze aéreo da batalha afundou o [[porta-aviões de escolta]] Bismarck Sea e danificou gravemente o Saratoga. Em 23 de fevereiro, uma patrulha do tenente Harold Schrier chegou ao topo e hasteou uma pequena bandeira, presa a um cano japonês. Foi a primeira bandeira estrangeira a tremular em solo japonês. O secretário da Marinha, James Forrestal, queria a bandeira de lembrança, e por isso foi mandada uma maior, que seis fuzileiros hastearam. Foi esse segundo hasteamento que o fotógrafo Joe Rosenthal, da Associated Press, registrou, e a foto ganhou o Pulitzer no mesmo ano. Três dos seis homens, Michael Strank, Harlon Block e Franklin Sousley, morreram dias depois, e investigações posteriores corrigiram a identidade de alguns retratados.",
        "Terceiro, o norte. No norte, o terreno de rocha favorecia a defesa. O planalto de Motoyama, com a colina 382 e o 'Turkey Knob', e uma depressão entre eles chamada 'o Anfiteatro', formava o que os fuzileiros chamavam de 'moedor de carne'. Os japoneses se escondiam durante os bombardeios e saíam depois para atirar nos que avançavam. O general Erskine ordenou um ataque noturno do 9º Regimento, sem bombardeio prévio, que conquistou a colina 362. Em 8 de março, a 3ª Divisão chegou à costa norte, partindo as defesas japonesas em duas. Na noite do dia 8, o capitão Samaji Inouye comandou cerca de 1.000 homens numa carga [[banzai]], e os fuzileiros contaram 784 japoneses mortos na manhã seguinte.",
        "Quarto, a ilha 'segura'. Às 18h de 16 de março, 25 dias depois do desembarque, a ilha foi declarada segura. Mas a 5ª Divisão ainda enfrentava o último reduto de Kuribayashi, numa ravina no noroeste. Em 21 de março, os fuzileiros destruíram o posto de comando com quatro toneladas de explosivos, e em 24 de março selaram as cavernas que sobravam. Na noite de 25 de março, cerca de 300 japoneses atacaram perto do Aeródromo 2, com muitas perdas, e mataram 53 americanos e feriram 120. Kuribayashi pode ter liderado esse ataque pessoalmente, mas isso é discutido. A ilha foi declarada segura, de vez, às 9h de 26 de março."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os Estados Unidos tiveram 6.821 mortos e 19.217 feridos na fase principal, mais 2.648 casos de fadiga de combate, e 15 mortos e 144 feridos depois. Do lado japonês, entre 17.845 e 18.375 mortos ou desaparecidos, e só 216 prisioneiros na fase principal. Depois da batalha, o 147º Regimento de Infantaria passou três meses caçando soldados escondidos, com lança-chamas, granadas e cargas explosivas: matou cerca de 1.602 e capturou 867.",
        "Segundo a Wikipédia, é um caso único entre as batalhas anfíbias do Pacífico: as baixas americanas totais foram maiores que as japonesas, algo como três americanos para cada dois japoneses.",
        { h: "Por que importa" },
        "A bandeira no Suribachi virou um símbolo, e o almirante Nimitz escreveu que, entre os americanos que serviram em Iwo Jima, 'o valor incomum era uma virtude comum'. Ao todo, 27 homens receberam a Medalha de Honra pela batalha: 22 fuzileiros e cinco marinheiros. As lições de Iwo Jima serviram para planejar Okinawa e a invasão do Japão, que acabou não ocorrendo.",
        { h: "Curiosidades e controvérsias" },
        { note: "Valeu a pena? O ex-chefe de operações navais William Pratt argumentou que a ilha era inútil para o Exército como base e para a Marinha como base de frota. Holland Smith reclamou, depois da guerra, que a falta de apoio de fogo naval custou vidas de fuzileiros em toda a campanha das ilhas. Os defensores do ataque lembram que a ilha serviu como pouso de emergência para bombardeiros." },
        { note: "Segundo o próprio Schmidt, os fuzileiros tiveram só cerca de 13 horas de apoio de fogo naval nas 34 horas de luz do dia disponíveis antes do desembarque." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  normandia: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 17, l: "Canal da Mancha" },
      { t: "note", x: 20, y: 42, l: "Carentan" },
      { t: "note", x: 50, y: 40, l: "Bayeux" },
      { t: "note", x: 84, y: 47, l: "Caen" },
      { t: "note", x: 90, y: 66, l: "Esquema sem escala. Norte ↑" }
    ],
    units: [
      { id: "fl", s: "a", k: "ship", w: 56, h: 4, l: "Armada aliada" },
      { id: "uUt", s: "a", k: "inf", w: 10, h: 4, l: "Utah: 4ª Div. EUA" },
      { id: "uOm", s: "a", k: "inf", w: 12, h: 4, l: "Omaha: 1ª e 29ª Div. EUA" },
      { id: "bGo", s: "a", k: "inf", w: 10, h: 4, l: "Gold: 50ª Div. britânica" },
      { id: "cJu", s: "a", k: "inf", w: 10, h: 4, l: "Juno: 3ª Div. canadense" },
      { id: "bSw", s: "a", k: "inf", w: 10, h: 4, l: "Sword: 3ª Div. britânica" },
      { id: "aUS", s: "a", k: "inf", w: 10, h: 4, l: "101ª e 82ª aeroterrestres" },
      { id: "aBr", s: "a", k: "inf", w: 9, h: 4, l: "6ª aeroterrestre britânica" },
      { id: "gUt", s: "b", k: "inf", w: 10, h: 4, l: "709ª Div. (estática)" },
      { id: "gOm", s: "b", k: "inf", w: 12, h: 4, l: "352ª Div." },
      { id: "gEa", s: "b", k: "inf", w: 36, h: 4, l: "716ª Div. (estática)" },
      { id: "g21", s: "b", k: "car", w: 10, h: 5, l: "21ª Panzer" }
    ],
    steps: [
      { t: "Cinco praias, de oeste para leste: Utah, Omaha, Gold, Juno e Sword. A armada está no mar, os aeroterrestres ainda estão nos aviões, e os defensores alemães estão nas defesas da costa, com a 21ª Panzer atrás, perto de Caen.",
        p: { fl: [50, 5], uUt: [12, 11], uOm: [34, 11], bGo: [56, 11], cJu: [72, 11], bSw: [88, 11],
             aUS: [6, 3], aBr: [94, 3], gUt: [12, 30], gOm: [34, 28], gEa: [72, 28], g21: [82, 54] } },
      { t: "Depois da meia-noite, os aeroterrestres saltam. Os americanos, atrás de Utah, caem espalhados pelas nuvens. Os britânicos tomam as pontes sobre o canal de Caen e o rio Orne.",
        p: { aUS: [8, 38], aBr: [94, 38] } },
      { t: "Às 5h45 começa o bombardeio naval. Às 6h30, os primeiros soldados pisam na areia em Utah e em Omaha, empurrados para leste pela correnteza.",
        p: { uUt: [12, 21], uOm: [34, 21] } },
      { t: "Em Utah, a 4ª Divisão desembarca cerca de 1.800 metros fora do ponto, num trecho mais fraco, e os pontos fortes caem por volta do meio-dia. Em Omaha, a defesa da 352ª Divisão segura os americanos na areia.",
        p: { uUt: [13, 27] }, x: ["gUt"] },
      { t: "Entre 7h25 e 7h30, desembarcam os britânicos em Gold, os canadenses em Juno e os britânicos em Sword. Em Juno, o mar agitado atrasa os tanques, e a infantaria chega antes.",
        p: { bGo: [56, 21], cJu: [72, 21], bSw: [88, 21] } },
      { t: "Em Omaha, 27 dos 32 tanques anfíbios afundam, e os desembarques param às 8h30 para limpar a praia. No fim da manhã, só uns 600 homens tinham chegado ao alto.",
        p: { uOm: [34, 25] } },
      { t: "À tarde, os britânicos e os canadenses avançam. Às 16h, a 21ª Panzer contra-ataca entre Sword e Juno e quase chega ao mar.",
        p: { bGo: [54, 30], cJu: [70, 32], bSw: [86, 31], g21: [80, 38] } },
      { t: "A 21ª Panzer para diante da 3ª Divisão britânica e é chamada de volta. Em Utah, os americanos se ligam aos aeroterrestres.",
        p: { g21: [78, 50], uUt: [11, 34] } },
      { t: "No fim do dia, os Aliados têm cinco cabeças de praia ainda separadas. Carentan e Bayeux continuam alemãs, e Caen, que devia cair no primeiro dia, só cairá em julho.",
        p: { uOm: [34, 30], bGo: [54, 33], cJu: [70, 34], bSw: [86, 33] } }
    ]
  },

  montecastelo: {
    terrain: [
      { t: "hill", x: 62, y: 24, rx: 14, ry: 8, l: "Monte Castelo (977 m)" },
      { t: "hill", x: 32, y: 26, rx: 12, ry: 7, l: "Monte della Torraccia" },
      { t: "hill", x: 12, y: 30, rx: 10, ry: 6, l: "Monte Belvedere" },
      { t: "note", x: 90, y: 5, l: "Bolonha ↑ (esquema sem escala)" }
    ],
    units: [
      { id: "fFr", s: "a", k: "inf", w: 10, h: 4, l: "1º Btl. (Franklin)" },
      { id: "fUz", s: "a", k: "inf", w: 10, h: 4, l: "2º Btl. (Uzeda)" },
      { id: "fSa", s: "a", k: "inf", w: 10, h: 4, l: "3º Btl. (Sizeno Sarmento)" },
      { id: "fAr", s: "a", k: "inf", w: 14, h: 3, l: "Artilharia (Cordeiro de Farias)" },
      { id: "uMt", s: "a", k: "inf", w: 18, h: 4, l: "10ª Div. de Montanha (EUA)" },
      { id: "gCa", s: "b", k: "inf", w: 14, h: 5, l: "Defensores em Castelo (232ª Div.)" },
      { id: "gTo", s: "b", k: "inf", w: 22, h: 5, l: "Defensores em Torraccia e Belvedere" }
    ],
    steps: [
      { t: "Fevereiro de 1945. Os brasileiros estão ao pé do monte, os americanos da 10ª Divisão de Montanha, à esquerda, e os alemães, no alto, em posições preparadas durante o outono.",
        p: { fFr: [60, 52], fUz: [74, 52], fSa: [58, 60], fAr: [62, 66], uMt: [20, 52], gCa: [62, 24], gTo: [22, 27] } },
      { t: "Em 18 de fevereiro começa a Operação Encore. A 10ª Divisão de Montanha ataca Belvedere pela esquerda.",
        p: { uMt: [20, 40] } },
      { t: "Na noite de 20, os três regimentos brasileiros se posicionam. O 3º Batalhão ocupa posições avançadas.",
        p: { fFr: [60, 46], fUz: [74, 46], fSa: [58, 42] } },
      { t: "Às 6h de 21 de fevereiro começa o ataque. O 1º Batalhão sobe de frente, o 2º apoia pela direita.",
        p: { fFr: [60, 38], fUz: [74, 36] } },
      { t: "O 3º Batalhão entra a partir das posições avançadas, e os três avançam encosta acima, sob fogo.",
        p: { fFr: [60, 33], fUz: [72, 32], fSa: [54, 36] } },
      { t: "Entre 16h e 17h, a artilharia brasileira faz uma barragem concentrada sobre o cume.",
        p: { fAr: [62, 60] } },
      { t: "Por volta das 17h30, os homens de Franklin chegam ao cume e tomam as casamatas. Os americanos ainda não tinham tomado Della Torraccia.",
        p: { fFr: [62, 25], fUz: [74, 28], fSa: [54, 30] }, x: ["gCa"] },
      { t: "Depois de escurecer, a 10ª Divisão termina de limpar Della Torraccia. Monte Castelo está tomado.",
        p: { uMt: [32, 28] }, x: ["gTo"] }
    ]
  },

  iwojima: {
    terrain: [
      { t: "sea", x: 74, y: 0, w: 26, h: 70, l: "Mar (frota americana)" },
      { t: "hill", x: 18, y: 58, rx: 9, ry: 7, l: "Monte Suribachi" },
      { t: "hill", x: 38, y: 20, rx: 20, ry: 10, l: "Planalto de Motoyama" },
      { t: "note", x: 44, y: 44, l: "Aeródromos" },
      { t: "note", x: 12, y: 5, l: "Esquema sem escala. Norte ↑" }
    ],
    units: [
      { id: "fl", s: "a", k: "ship", w: 4, h: 18, l: "Frota" },
      { id: "m3", s: "a", k: "inf", w: 6, h: 12, l: "3ª Div." },
      { id: "m4", s: "a", k: "inf", w: 6, h: 12, l: "4ª Div." },
      { id: "m5", s: "a", k: "inf", w: 6, h: 12, l: "5ª Div." },
      { id: "jSu", s: "b", k: "inf", w: 10, h: 6, l: "Setor do Suribachi" },
      { id: "jMa", s: "b", k: "inf", w: 14, h: 6, l: "Defesa central" },
      { id: "jNo", s: "b", k: "inf", w: 14, h: 6, l: "Reduto de Kuribayashi (norte)" }
    ],
    steps: [
      { t: "Antes do desembarque, três dias de bombardeio (Schmidt tinha pedido dez). Os japoneses estão escondidos em túneis, com 18 km de galerias interligadas.",
        p: { fl: [90, 36], m3: [86, 12], m4: [80, 24], m5: [80, 48], jSu: [18, 54], jMa: [44, 40], jNo: [38, 16] } },
      { t: "Em 19 de fevereiro, às 8h59, a primeira onda chega à areia preta de origem vulcânica. Os japoneses seguram o fogo por cerca de uma hora e abrem fogo pouco depois das 10h.",
        p: { m4: [72, 30], m5: [72, 48] } },
      { t: "Ainda no primeiro dia, o 28º Regimento atravessa a ilha no ponto mais estreito, uns 800 metros, e isola o Suribachi.",
        p: { m4: [62, 32], m5: [32, 52] } },
      { t: "Em 21 de fevereiro, um ataque kamikaze afunda o porta-aviões de escolta Bismarck Sea. A 3ª Divisão, que era a reserva, desembarca.",
        p: { m3: [64, 22] } },
      { t: "Em 23 de fevereiro, uma patrulha chega ao topo do Suribachi e levanta a bandeira. É o segundo hasteamento que Rosenthal fotografa.",
        p: { m5: [20, 52] }, x: ["jSu"] },
      { t: "No norte, no planalto de Motoyama, os fuzileiros enfrentam o 'moedor de carne'. Cada colina é uma fortaleza ligada por túneis.",
        p: { m4: [52, 26], m3: [48, 20] } },
      { t: "Em 8 de março, a 3ª Divisão chega à costa norte e parte as defesas em duas. À noite, cerca de 1.000 japoneses fazem uma carga banzai.",
        p: { m3: [38, 9] } },
      { t: "Em 16 de março, a ilha é declarada segura. Resta o último reduto de Kuribayashi, numa ravina no noroeste, que a 5ª Divisão ataca.",
        p: { m5: [24, 13], m4: [46, 24] }, x: ["jMa"] },
      { t: "Em 25 de março, cerca de 300 japoneses fazem um último ataque. Em 26 de março, a ilha é declarada segura de vez.",
        p: { m5: [24, 10] }, x: ["jNo"] }
    ]
  }
});
