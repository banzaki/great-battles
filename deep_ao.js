// In-depth battles, batch ao: nilo, navarino, hamptonroads, leyte (naval pack, part 2).
// Checked against the English and Portuguese Wikipedia articles on the Battle of the Nile, Navarino, Hampton Roads,
// Leyte Gulf, Surigao Strait, Cape Engano and the Battle off Samar, the Hansard record of the Commons debate of
// 31 January 1828 (the "untoward event" speech), the Royal Museums Greenwich entry on Navarino, and the works those
// pages cite. Where sources disagree the text says so.
// Aircraft are not drawn in the Leyte diagram (unit_kinds.js is not edited here); only ships appear.

Object.assign(GLOSSARY, {
  "baixio": "Trecho raso do mar, com areia ou pedra logo abaixo da superfície. Um navio grande que encalha num baixio pode ficar preso, e à noite ele quase não se vê.",
  "mola": "Cabo extra preso à âncora e ao navio. Quando a tripulação o puxa, o navio parado gira e aponta os canhões do lado para o alvo, sem precisar levantar âncora.",
  "brigue": "Navio pequeno de dois mastros e poucos canhões, usado para levar mensagens e patrulhar.",
  "bala em brasa": "Bala de ferro aquecida em forno até ficar vermelha. Disparada contra um navio de madeira, cravava-se no casco e começava um incêndio.",
  "casa do piloto": "Pequena cabine blindada na proa do Monitor, de onde o comandante olhava o mar por frestas estreitas e dirigia o navio.",
  "lancha torpedeira": "Barco pequeno e muito veloz, de madeira, que lançava torpedos. Os americanos chamavam as suas de 'PT boats'.",
  "força-tarefa": "Grupo de navios reunido para uma missão, sob um só comandante. A Marinha americana as numerava: a Força-Tarefa 34, por exemplo.",
  "porta-aviões leve": "Porta-aviões menor e mais lento que os grandes, construído sobre casco de cruzador, com menos aviões.",
  "contratorpedeiro de escolta": "Navio pequeno e lento, menor que um contratorpedeiro, feito para escoltar comboios e caçar submarinos. Os americanos o chamavam de 'destroyer escort'."
});

Object.assign(DEEP, {
  nilo: {
    war: "Campanha do Egito de Napoleão (1798–1801)",
    hook: "Nelson atacou ao anoitecer uma frota ancorada e, em poucas horas, acabou com ela.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 19 de maio de 1798, uma frota francesa deixou Toulon com Napoleão Bonaparte e cerca de 35.000 soldados. O destino era secreto: o Egito. Napoleão queria dominar o país e, de lá, ameaçar a rota que ligava a Grã-Bretanha à Índia. A Grã-Bretanha, em guerra com a França, mandou o contra-almirante Horatio Nelson atrás da frota no Mediterrâneo.",
        "Nelson cruzou o mar por semanas sem achá-la. Chegou a Alexandria antes dos franceses, não viu ninguém e foi embora. Enquanto isso, Napoleão desembarcou perto de Alexandria em 1º de julho e, em 21 de julho, derrotou os mamelucos na batalha das Pirâmides. A frota, comandada pelo vice-almirante François-Paul Brueys, ficou ancorada na baía de Aboukir, a leste de Alexandria.",
        { h: "O caminho até a baía de Aboukir" },
        { timeline: [
          ["19 mai 1798", "A frota francesa sai de Toulon com Napoleão e cerca de 35.000 soldados."],
          ["1º jul", "Os franceses desembarcam perto de Alexandria."],
          ["21 jul", "Napoleão vence os mamelucos na batalha das Pirâmides."],
          ["1º ago, 14h", "Os vigias britânicos avistam a frota francesa ancorada na baía de Aboukir."],
          ["1º ago, 18h20", "Começam os tiros. A batalha dura a noite toda."],
          ["2–3 ago", "Os últimos navios franceses se rendem ou fogem."]
        ]},
        "Nelson tinha perdido a pista dos franceses durante semanas. Quando descobriu que estavam no Egito, voltou. O exército de Napoleão já estava em terra, mas a frota era o que o ligava à França: sem ela, o exército ficava isolado."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Horatio Nelson, 39 anos" },
        "Contra-almirante, já tinha perdido a visão de um olho e um braço em combate. Seu estilo era explicar o plano a todos os capitães e deixá-los decidir na hora, sem esperar sinais. Segundo a tradição, na véspera disse aos oficiais do Vanguard que, antes do dia seguinte, ganharia um título de nobreza ou um túmulo na Abadia de Westminster. Depois da batalha, chamou seus capitães de 'um bando de irmãos'.",
        { h: "François-Paul Brueys, 45 anos" },
        "Vice-almirante francês. Ancorou a frota numa linha comprida, junto de um [[baixio]], e esperou. Contava que o baixio obrigaria os britânicos a atacar o centro e a retaguarda, e que sua vanguarda poderia reagir depois. Foi morto durante a batalha.",
        { h: "Os outros nomes" },
        "Entre os britânicos, o capitão Thomas Foley comandava o Goliath, e o capitão Samuel Hood o Zealous, que ia na frente medindo a profundidade. Thomas Troubridge comandava o Culloden, que encalhou, e Benjamin Hallowell o Swiftsure. Do lado francês, o capitão Luc-Julien-Joseph Casabianca comandava o L'Orient, a nau [[capitânia]]; o contra-almirante Armand Blanquet, o Franklin; e o contra-almirante Pierre-Charles Villeneuve, a retaguarda, a bordo do Guillaume Tell. Villeneuve escapou e, sete anos depois, comandaria os franceses em Trafalgar."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os dois lados tinham 13 [[navios de linha|navio de linha]]. Os britânicos eram todos de 74 canhões, e havia ainda o Leander, de 50. Os franceses tinham um de 120, o L'Orient, três de 80 e nove de 74, além de quatro [[fragatas|fragata]].",
        { h: "O terreno" },
        "Na baía de Aboukir, um [[baixio]] se estende pelo sul da ilha de Aboukir. Brueys ancorou seus 13 navios numa [[linha de batalha]] de cerca de 2,6 km, na borda nordeste desse baixio, com uns 150 metros entre cada navio. O primeiro, o Guerrier, ficava a cerca de 900 metros do baixio. Brueys deixou espaço suficiente para um navio inimigo cruzar a frente da linha.",
        "Havia mais duas falhas. Brueys mandou os navios amarrar cabos uns aos outros, mas nem todos os capitães obedeceram. Ancorados só pela proa, os navios giravam com o vento, e os espaços entre eles aumentavam. E os canhões do lado do mar estavam prontos, mas os do lado de terra, não: as portinholas estavam fechadas e o convés, cheio de equipamento.",
        { h: "A decisão de Nelson" },
        "Os britânicos avistaram os franceses por volta das 14h de 1º de agosto. Nelson não esperou o dia seguinte nem formou linha. Mandou atacar logo, com o Zealous na frente, o capitão Hood medindo a profundidade, e preparou [[molas|mola]] nos cabos das âncoras para poder girar os navios depois de ancorados. A ideia era descer pelos dois lados da linha francesa, de modo que cada navio do começo e do meio ficasse entre dois britânicos, e o L'Orient enfrentasse três. A noite caiu durante o ataque, e cada navio britânico exibiu quatro luzes na horizontal no mastro de trás, para os amigos não atirarem uns nos outros.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, às 18h20, o Guerrier e o Conquérant abriram fogo contra os britânicos que chegavam. O capitão Foley, do Goliath, viu o espaço entre o Guerrier e o baixio e, por iniciativa própria, entrou nele. O Goliath varreu o Guerrier pelo lado desprevenido com [[fogo em enfiada]] e ancorou junto ao Conquérant. O Zealous veio atrás e ancorou ao lado do Guerrier. Em cinco minutos, o mastro da frente do Guerrier caiu.",
        "Segundo, outros navios britânicos seguiram o Goliath por dentro. O Theseus enfrentou o Spartiate, e o Audacious ancorou entre o Guerrier e o Conquérant. O Orion passou entre a linha e as fragatas francesas do lado de terra, atirou na fragata Sérieuse e foi ancorar mais adiante.",
        "Terceiro, por volta das 18h40, o Vanguard de Nelson, o Minotaur e o Defence ancoraram do lado do mar, de frente para a vanguarda francesa, que ficou entre dois fogos. No escuro que descia, o Culloden, que vinha rebocando uma presa, encalhou no baixio perto da ilha e não saiu mais.",
        "Quarto, a vanguarda francesa foi desmontada. O Conquérant perdeu os três mastros antes das 19h, e o capitão Dalbarade, ferido de morte, rendeu o navio. O Guerrier e o Spartiate se renderam por volta das 21h. O Aquilon, desmastreado, rendeu-se às 21h25, depois da morte do capitão Thévenard.",
        "Quinto, o Bellerophon e o Majestic chegaram ao centro. O Bellerophon enfrentou o L'Orient, perdeu dois mastros às 19h50 e cortou as amarras às 20h20, indo à deriva. O Majestic enroscou o gurupés no cordame do Tonnant e perdeu o capitão Westcott. Enquanto isso, o Peuple Souverain cortou o cabo da âncora e foi à deriva para o sul, deixando um vazio na linha francesa. O Leander passou por ele.",
        "Sexto, por volta das 20h30, uma lasca de metal feriu Nelson acima do olho direito, que já era cego, e um retalho de pele caiu sobre seu rosto e o deixou sem ver por um tempo. Achando que ia morrer, disse: 'Estou morto, lembrem-me à minha esposa'. O cirurgião Michael Jefferson o costurou e disse que era só um corte superficial. Nelson ignorou a ordem de descansar e voltou ao convés. Nessa hora chegaram, no escuro, o Swiftsure e o Alexander, que tinham ficado para trás, e atacaram o L'Orient.",
        "Sétimo, perto das 21h, apareceu fogo nos conveses inferiores do L'Orient. Hallowell, no Swiftsure, apontou os canhões para as chamas, e o fogo se espalhou. O almirante Brueys, atingido por uma bala que quase o cortou ao meio, morreu cerca de 15 minutos depois, recusando ser levado para baixo. Às 22h, o fogo alcançou o [[paiol]], e o L'Orient explodiu. Os navios britânicos mais próximos tinham parado de atirar para apagar incêndios, e os destroços em chamas caíram perto deles.",
        "Oitavo, depois da explosão, ninguém atirou por uns dez minutos. Às 22h10, o Franklin recomeçou o fogo, e o Tonnant, o Heureux e o Mercure cortaram as âncoras e foram à deriva para o sul. Por volta da meia-noite, só o Tonnant ainda atirava. O combate recomeçou ao amanhecer, às 4h de 2 de agosto, e o Tonnant só se rendeu em 3 de agosto.",
        "Nono, a retaguarda francesa tinha ficado de fora: o vento a impedia de ajudar o resto. Na manhã do dia 2, o Guillaume Tell, o Généreux e as fragatas Justice e Diane saíram para o mar aberto. O Timoléon, encalhado, foi incendiado pela própria tripulação."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Dos 13 navios de linha franceses, 9 foram capturados, 2 destruídos (o L'Orient e o Timoléon) e só 2 escaparam. Das fragatas, uma afundou e outra foi afundada pela própria tripulação. Segundo a Wikipédia em inglês, os franceses tiveram de 2.000 a 5.000 mortos ou feridos e de 3.000 a 3.900 prisioneiros. Os britânicos tiveram 218 mortos e 677 feridos, e nenhum navio perdido.",
        { h: "Por que importa" },
        "A vitória mudou o equilíbrio no Mediterrâneo. O exército de Napoleão ficou preso no Egito, sem apoio por mar, e a Marinha britânica dominou a região até o fim das guerras napoleônicas. O resultado também animou outras potências a se virar contra a França. Napoleão soube da derrota em 14 de agosto de 1798 e teria dito: 'Já não temos frota'. Voltou à França em agosto de 1799, deixando o exército com Kléber.",
        "Nelson virou herói em toda a Europa. Foi feito barão Nelson do Nilo, e recebeu uma pensão do Parlamento britânico e dinheiro da Companhia das Índias Orientais. O sultão otomano o fez cavaleiro da Ordem do Crescente e lhe deu um chelengk, enfeite de turbante com diamantes. Em Nápoles, foi recebido em procissão e conheceu Emma, lady Hamilton. Em particular, achava o título pouco para o que tinha feito.",
        { h: "Curiosidades e controvérsias" },
        { note: "O menino do convés em chamas: o poema 'Casabianca', da inglesa Felicia Hemans (1826), imortalizou o filho do capitão do L'Orient, que teria ficado ao lado do pai até a explosão. A história é contada de modos diferentes. Nas fontes, o menino tem uns 12 anos e morre na explosão, mas há também o relato de que perdeu uma perna antes, atingido por uma bala." },
        { note: "O lado de terra: Brueys contava com o baixio para proteger esse lado da linha, e os canhões dali não estavam prontos. Foley passou por ali por iniciativa própria, e foi aí que a batalha começou a pender para os britânicos." },
        { note: "Os números variam: as perdas francesas aparecem em faixas largas (2.000 a 5.000 mortos ou feridos e de 3.000 a 3.900 prisioneiros). As britânicas, de 218 mortos e 677 feridos, são mais firmes." }
      ]}
    ]
  },

  navarino: {
    war: "Guerra de Independência da Grécia (1821–1832)",
    hook: "Três potências que não queriam uma batalha afundaram uma frota inteira numa só tarde.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1821, os gregos se revoltaram contra o Império Otomano, que mandava neles havia séculos. A Europa se comoveu: o poeta Lord Byron morreu na Grécia ajudando a causa, em 1824. Mas em 1827 a revolta estava perto de ser esmagada. O sultão tinha chamado o governante do Egito, Muhammad Ali, e seu filho Ibrahim Paxá levara para o Peloponeso um exército e uma frota egípcios.",
        "Grã-Bretanha, França e Rússia queriam evitar um massacre, mas cada uma tinha seus interesses. A Rússia queria enfraquecer os otomanos. A Grã-Bretanha e a França temiam que a Rússia crescesse demais. Em 6 de julho de 1827, as três assinaram o Tratado de Londres: exigiam um armistício e autonomia para a Grécia, ainda sob o sultão.",
        { h: "O caminho até a baía" },
        { timeline: [
          ["6 jul 1827", "Tratado de Londres: Grã-Bretanha, França e Rússia exigem um armistício."],
          ["29 ago", "O governo otomano rejeita o tratado."],
          ["2 set", "O governo provisório grego aceita o armistício."],
          ["20 out, 13h30", "O almirante Codrington manda o sinal de preparar para o combate."],
          ["20 out, 14h", "A esquadra aliada entra na baía de Navarino."],
          ["20 out, tarde", "A frota turco-egípcia é destruída."]
        ]},
        "Os almirantes aliados receberam ordens de impor o armistício e impedir que chegassem reforços do Egito e da Ásia Menor. Podiam usar a força só como último recurso. A frota turco-egípcia estava ancorada na baía de Navarino, e os aliados resolveram ir até ela para mostrar força."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Edward Codrington, 57 anos" },
        "Vice-almirante britânico, comandava a esquadra aliada. Tinha lutado em Trafalgar, 22 anos antes. Suas ordens eram impor o armistício sem lutar, se possível. Para isso, entrou com a esquadra na baía e ancorou no meio da frota inimiga, apostando que a presença bastaria. Quando a batalha começou por acidente, não foi ele quem a quis.",
        { h: "Os outros comandantes aliados" },
        "O contra-almirante Henri de Rigny comandava os franceses, e o contra-almirante Lodewijk van Heiden (Heyden), os russos. O capitão Mikhail Lazarev comandava o Azov, nau [[capitânia]] russa e o navio que mais sofreu.",
        { h: "Do outro lado" },
        "Tahir Paxá comandava a esquadra imperial otomana, a partir do Ghiuh Rewan, de 84 canhões. Moharram Bei comandava a esquadra egípcia. Ibrahim Paxá era o comandante geral, em terra, e em 20 de outubro enviou um bote a Codrington para protestar contra a entrada dos aliados na baía. Codrington ignorou o protesto."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os aliados tinham 10 [[navios de linha|navio de linha]] (4 russos, 3 britânicos e 3 franceses), 10 [[fragatas|fragata]] (4 russas, 4 britânicas e 2 francesas) e 7 navios menores, com 1.252 canhões e cerca de 8.000 homens. A frota turco-egípcia tinha 78 navios: 3 de linha, 17 fragatas, 30 [[corvetas|corveta]], 28 [[brigues|brigue]], 5 escunas e uns 5 ou 6 [[brulotes|brulote]], com mais de 2.100 canhões e cerca de 20.000 homens. Era maior, mas os navios aliados eram mais bem armados, e suas tripulações, mais bem treinadas.",
        { h: "O terreno" },
        "A baía de Navarino fica na costa oeste do Peloponeso e é quase fechada pela ilha de Sphacteria. A entrada é estreita, ao sul, entre a ilha e a fortaleza de Navarino. Os otomanos tinham ancorado seus navios em ferradura, em três linhas, de uma ponta, junto à fortaleza, até a ponta sul da ilha. Na frente ficavam os navios de linha e as fragatas maiores, atrás os menores, e nas pontas, os brulotes e corvetas.",
        { h: "A tarde de 20 de outubro em oito tempos" },
        { formation: true },
        "Primeiro, às 13h30, Codrington mandou o sinal de preparar para o combate. Os aliados estavam fora da baía, em fila, e a ordem era só atirar se atacados.",
        "Segundo, por volta das 14h, a esquadra entrou pela passagem do sul, com o Asia de Codrington na frente. Os franceses foram para o lado da fortaleza, e os russos, um pouco atrás, para o da ilha.",
        "Terceiro, por volta das 14h15, os britânicos ancoraram de frente para o centro da ferradura. Cada navio parou diante de um adversário. Os franceses ficaram diante da ala egípcia.",
        "Quarto, os russos foram os últimos a chegar e ficaram na posição mais exposta, diante da outra ala. Os aliados estavam ancorados dentro da ferradura, a curta distância dos inimigos.",
        "Quinto, a batalha começa por acidente. O capitão Thomas Fellowes, do Dartmouth, mandou um bote impedir que um brulote otomano fosse preparado. Os otomanos atiraram no bote e acenderam o brulote. Quando os otomanos atiraram também no escaler mandado rebocar o brulote, Fellowes ordenou fogo de mosquete. Então a fragata francesa Sirène, de de Rigny, atirou em apoio, e uma corveta otomana atirou nela. O combate correu pela linha toda.",
        "Sexto, por volta das 16h, os três navios de linha otomanos e a maior parte das grandes fragatas da primeira linha estavam destruídos. O Ghiuh Rewan, de Tahir Paxá, foi destruído com a ajuda do Breslaw, francês. O Azov, de Lazarev, enfrentou vários navios e afundou ou deixou fora de combate três fragatas grandes e uma corveta, mas levou 153 balas, algumas abaixo da linha d'água.",
        "Sétimo, nas duas horas seguintes, a maior parte do resto da frota foi destruída. Muitos navios sem mastros foram incendiados ou explodidos pela própria tripulação, para não cair em mãos inimigas. Codrington tentou duas vezes mandar parar o fogo, mas os sinais não foram vistos ou foram ignorados.",
        "Oitavo, no fim da tarde, a baía estava coberta de destroços e de navios em chamas. Dos 78 navios turco-egípcios, só 8 ainda podiam navegar: um navio de linha sem mastros, duas fragatas e cinco corvetas."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados tiveram 181 mortos e 480 feridos, segundo Codrington. Não perderam nenhum navio, mas o Azov, o Gangut e o Iezekiil, russos, ficaram incapacitados, e os três navios de linha britânicos tiveram de voltar para reparos. Do lado turco-egípcio, as perdas são incertas: cerca de 4.000 mortos ou feridos e cerca de 4.000 prisioneiros, segundo a Wikipédia em inglês, que também cita um historiador, Letellier, com 3.000 mortos e 1.109 feridos, enquanto Codrington achava que a proporção era a inversa. Perderam cerca de 55 navios.",
        { h: "Por que importa" },
        "A batalha destruiu a frota otomana e egípcia no Mediterrâneo e salvou o jovem Estado grego da queda. Não acabou a guerra: a Rússia entrou numa guerra com os otomanos (1828–1829), e uma força francesa foi ao Peloponeso e obrigou os otomanos a se retirar. Em 1832, a Grécia foi reconhecida como reino independente.",
        "Foi também a última grande batalha naval travada só com navios a vela.",
        { h: "Curiosidades e controvérsias" },
        { note: "Acidente ou plano? A Wikipédia em português diz que a batalha ocorreu 'mais por acidente do que intencionalmente', resultado de uma manobra de Codrington para obrigar Ibrahim a obedecer às instruções aliadas." },
        { note: "O 'acontecimento desafortunado': no discurso do rei de janeiro de 1828, o governo britânico, chefiado pelo duque de Wellington, chamou a batalha de 'untoward event', algo como 'acontecimento infeliz'. A Grã-Bretanha queria os otomanos fortes como contrapeso à Rússia. A França não adotou essa expressão. Codrington foi chamado de volta a Londres: segundo o Royal Museums Greenwich, o governo achava que ele tinha ido além das instruções." },
        { note: "As perdas turco-egípcias: as fontes dão números diferentes, e nenhuma é firme. O que se sabe é o resultado: só 8 navios de 78 ainda navegavam." }
      ]}
    ]
  },

  hamptonroads: {
    war: "Guerra Civil Americana (1861–1865)",
    hook: "Dois navios de ferro lutaram por horas sem conseguir se vencer, e os navios de madeira do mundo inteiro ficaram ultrapassados.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1861, os Estados do Sul se separaram dos Estados Unidos e começou a Guerra Civil. A União, o Norte, tinha uma marinha muito maior e a usou para bloquear os portos do Sul. Sem exportar algodão e sem importar armas, a Confederação sufocava. Quebrar o [[bloqueio naval]] era uma questão de sobrevivência.",
        "A Confederação tinha poucos navios, mas tinha uma ideia. Em abril de 1861, quando os federais abandonaram o estaleiro de Gosport, em Norfolk, queimaram a fragata a vapor Merrimack, que afundou. Os confederados levantaram o casco, construíram em cima dele uma casamata inclinada coberta de placas de ferro, puseram um [[esporão]] na proa e a rebatizaram de Virginia. O Norte soube do projeto e respondeu com seu próprio [[encouraçado]]: o Monitor, projeto do engenheiro John Ericsson, com uma [[torre blindada]] giratória.",
        { h: "O caminho até Hampton Roads" },
        { timeline: [
          ["Abr 1861", "Os federais abandonam o estaleiro de Gosport e incendeiam o Merrimack."],
          ["Início de 1862", "Os confederados terminam o Virginia, e o Norte constrói o Monitor."],
          ["8 mar 1862", "Primeiro dia: o Virginia ataca a frota federal em Hampton Roads."],
          ["9 mar", "Segundo dia: o Monitor enfrenta o Virginia."],
          ["11 mai 1862", "O Virginia é afundado pela própria tripulação."],
          ["31 dez 1862", "O Monitor afunda numa tempestade, ao largo do cabo Hatteras."]
        ]},
        "Hampton Roads é uma enseada rasa, onde se encontram vários rios e onde ficavam o forte Monroe, da União, e a cidade de Newport News. Do outro lado, ficavam Sewell's Point e o rio Elizabeth, que levava a Norfolk e ao estaleiro dos confederados."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Franklin Buchanan" },
        "Comandante do Virginia, tinha sido o primeiro diretor da Academia Naval americana. Foi ferido na coxa por um tiro de fuzil no primeiro dia, quando estava em pé no topo do navio, achando-se a salvo, e saiu do combate.",
        { h: "Catesby ap Roger Jones" },
        "Imediato do Virginia, assumiu o comando no segundo dia. Para ele, o Virginia venceu: depois do combate com o Monitor, voltou a Norfolk achando que a missão estava cumprida.",
        { h: "John Worden e John Ericsson" },
        "Worden comandava o Monitor com uma tripulação de voluntários. Foi cegado temporariamente por um estilhaço no segundo dia, e o tenente Samuel Dana Greene tomou o comando. Ericsson, sueco radicado nos Estados Unidos, projetou o navio. O capitão John Marston, o oficial mais graduado presente da frota federal, comandava no lugar do comandante ausente."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O Virginia tinha 10 canhões (6 de 9 polegadas e 4 canhões raiados), um esporão de ferro e a casamata coberta de duas camadas de ferro de 2 polegadas. O Monitor tinha só dois canhões de 11 polegadas, numa torre giratória de ferro de 8 polegadas, e o convés quase rente à água. A federal tinha cinco grandes navios de madeira na região: Cumberland, Congress, Minnesota, Roanoke e St. Lawrence. A confederada tinha o Virginia, mais os navios pequenos Raleigh e Beaufort e a esquadra do rio James.",
        { h: "O primeiro dia e a primeira noite" },
        { formation: true },
        "Primeiro, na manhã de 8 de março, o Virginia saiu do rio Elizabeth e entrou em Hampton Roads. Na enseada estavam, ancorados perto de Newport News, o Cumberland e o Congress, e perto do forte Monroe, o Minnesota, o Roanoke e o St. Lawrence.",
        "Segundo, o Virginia foi direto ao Cumberland, atravessando o fogo do Congress. As balas dos navios de madeira batiam na casamata e quicavam.",
        "Terceiro, o Virginia abalroou o Cumberland. O esporão ficou preso no casco, e quando o Virginia recuou, o esporão se soltou. O Cumberland afundou com 121 homens, segundo a Wikipédia, e, segundo o relato de Buchanan, lutou com os canhões enquanto houve convés acima da água.",
        "Quarto, o Virginia se voltou contra o Congress, que o tenente Joseph Smith mandou encalhar em águas rasas. Um tiro matou Smith, e o imediato Austin Pendergrast rendeu o navio, uns 60 minutos depois. O Virginia atirou [[balas em brasa|bala em brasa]], e o Congress pegou fogo. Buchanan, ferido, saiu do comando.",
        "Quinto, o Minnesota, o Roanoke e o St. Lawrence foram ajudar, mas todos encalharam. O Virginia, com o calado fundo, e a maré baixando, não chegou perto o bastante do Minnesota. Com a noite, voltou para Sewell's Point. O Congress, em chamas, explodiu perto da meia-noite.",
        "Sexto, durante a noite, o Monitor chegou, vindo de Nova York, e ancorou ao lado do Minnesota encalhado, para protegê-lo.",
        "Sétimo, na manhã de 9 de março, o Virginia voltou. Seu primeiro tiro errou o Monitor e acertou o Minnesota. Os dois encouraçados lutaram por cerca de três horas, a curta distância, sem conseguir furar um ao outro. O Virginia encalhou por volta das 10h, mas se soltou. Os canhões do Monitor usavam cargas de 15 libras de pólvora, por medo de rebentar o cano; testes feitos depois mostraram que cargas de 30 libras eram seguras.",
        "Oitavo, uma granada do Virginia explodiu na [[casa do piloto]] do Monitor, e os fragmentos cegaram Worden por um tempo. O Monitor se afastou para águas rasas. O Virginia, que estava danificado, com a maré baixando e o Minnesota fora de alcance, e achando que o Monitor tinha se retirado, voltou para Norfolk. O Monitor ficou guardando o Minnesota. Cada lado se declarou vencedor."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A batalha é considerada um empate. Os confederados perderam 7 mortos e 17 feridos nos dois dias. A União perdeu 261 mortos e 108 feridos, quase todos no primeiro dia, e dois navios, o Cumberland e o Congress. Mas o bloqueio continuou, e o Virginia nunca o rompeu.",
        "O Virginia foi afundado pela própria tripulação em 11 de maio de 1862, perto da ilha Craney, quando os confederados abandonaram Norfolk. O Monitor afundou em 31 de dezembro de 1862, numa tempestade, ao largo do cabo Hatteras, enquanto era rebocado, e 16 homens morreram.",
        { h: "Por que importa" },
        "Foi o primeiro combate entre navios encouraçados da história. Mostrou que navios de madeira não resistiam a um navio blindado. O desenho dos navios de guerra mudou no mundo todo: o tipo 'monitor' se espalhou, e o [[esporão]] voltou a ser usado.",
        "No Norte, houve pânico. Segundo a Wikipédia, o secretário da Guerra Edwin Stanton avisou numa reunião do governo que o Virginia poderia atacar cidades da costa e até bombardear a Casa Branca. O secretário da Marinha Gideon Welles respondeu que o Virginia não conseguiria subir o Potomac e que um encouraçado federal já estava a caminho.",
        { h: "Curiosidades e controvérsias" },
        { note: "Merrimack ou Virginia? O navio tem dois nomes. Para os confederados, era o Virginia. Os nortistas continuaram a chamá-lo de Merrimack, o nome do casco original, e a batalha ficou conhecida nos Estados Unidos como a de 'Monitor e Merrimack'." },
        { note: "Quem venceu? Cada lado achou que tinha vencido. O Virginia deixou o campo e o Monitor ficou, mas o Virginia afundou dois navios, e o Monitor protegeu o Minnesota e o bloqueio continuou. Por isso os historiadores dizem que foi empate." }
      ]}
    ]
  },

  leyte: {
    war: "Guerra do Pacífico, Segunda Guerra Mundial: a volta às Filipinas (1944)",
    hook: "Quatro combates em quatro dias, uma isca que funcionou e uma meia-volta que ninguém previu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em outubro de 1944, o Japão estava perdendo a guerra no Pacífico. Os americanos avançavam ilha por ilha, e o general Douglas MacArthur tinha prometido, em 1942, voltar às Filipinas. Em 20 de outubro, tropas americanas desembarcaram na ilha de Leyte, com a Sétima Frota do vice-almirante Thomas Kinkaid dando apoio de fogo. A Terceira Frota do almirante William Halsey, com os porta-aviões rápidos, protegia a operação.",
        "O Japão não podia vencer a frota americana, mas podia tentar destruir os navios de desembarque no golfo de Leyte. Era o plano Shō-1. A Marinha Imperial dividiu o que restava em quatro forças. A Força Central do vice-almirante Takeo Kurita, a maior, atravessaria o estreito de San Bernardino. A Força Sul, do vice-almirante Shōji Nishimura, com outra atrás, do vice-almirante Kiyohide Shima, entraria pelo estreito de Surigao. E a Força Norte, do vice-almirante Jisaburō Ozawa, tinha porta-aviões com pouquíssimos aviões e pilotos. Servia de isca para tirar Halsey do caminho.",
        { h: "O caminho até o golfo" },
        { timeline: [
          ["20 out 1944", "Os americanos desembarcam em Leyte."],
          ["23 out", "Submarinos americanos afundam os cruzadores Atago e Maya, da força de Kurita."],
          ["24 out", "Aviões americanos afundam o couraçado Musashi no mar de Sibuyan."],
          ["24–25 out, noite", "Batalha do estreito de Surigao."],
          ["25 out, de manhã", "Batalha ao largo de Samar."],
          ["25 out", "Batalha do cabo Engaño."]
        ]},
        "Os números dos dois lados variam conforme a fonte. Os aliados tinham cerca de 300 navios, entre eles 8 porta-aviões de esquadra, 9 leves, 18 de escolta e 12 couraçados, e cerca de 1.500 aviões. O Japão tinha cerca de 70, entre eles 4 porta-aviões e 9 couraçados (incluindo os dois híbridos) e mais de 300 aviões."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "William Halsey" },
        "Comandante da Terceira Frota, conhecido por agressivo. Quando seus aviões acharam a Força Norte de Ozawa, estava convencido de que a Força Central de Kurita fora arrasada e de que os porta-aviões japoneses eram a ameaça. Foi atrás deles com tudo o que tinha.",
        { h: "Takeo Kurita" },
        "Comandante da Força Central. Seu cruzador-capitânia, o Atago, foi afundado por um submarino em 23 de outubro, e ele foi obrigado a nadar até outro navio e se mudar para o Yamato. Em 24 de outubro viu o Musashi afundar. Mesmo assim, continuou.",
        { h: "Os outros nomes" },
        "O contra-almirante Jesse Oldendorf comandava os velhos couraçados que esperavam Nishimura. O contra-almirante Clifton Sprague comandava o grupo conhecido como Taffy 3, com seis porta-aviões de escolta. O comandante Ernest Evans comandava o contratorpedeiro Johnston. Do lado japonês, Ozawa sabia que sua força era uma isca e aceitou o papel."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "O plano geral" },
        "A batalha foi uma sequência de quatro combates separados, em quatro dias. O diagrama mostra o conjunto, de forma simplificada: só os navios e sem os aviões, que decidiram boa parte da luta.",
        { formation: true },
        "Primeiro, em 23 de outubro, as três forças que vinham do sul e do oeste se aproximam, e Ozawa vem do norte. Submarinos americanos afundam o Atago e o Maya. O Takao é danificado.",
        "Segundo, em 24 de outubro, no mar de Sibuyan, aviões da Terceira Frota atacam Kurita sem parar. O couraçado Musashi afunda por volta das 19h35. Uma bomba japonesa atinge o [[porta-aviões leve]] Princeton, que é perdido. Kurita recua para sair do alcance dos aviões.",
        "Terceiro, ainda no dia 24, aviões americanos acham Ozawa às 16h40. Halsey acredita que Kurita está arrasado e leva tudo ao norte: os porta-aviões e os couraçados da Terceira Frota. Sua mensagem das 15h12 diz que a [[Força-Tarefa|força-tarefa]] 34, de couraçados, 'será formada', e Kinkaid e o almirante Nimitz entendem que já foi formada, para guardar o estreito de San Bernardino. Uma mensagem de esclarecimento, às 17h10, não foi interceptada por Kinkaid. Na prática, a força nunca foi separada, e o estreito ficou sem guarda. Às 17h15, Kurita volta para o estreito.",
        "Quarto, na noite de 24 para 25, no estreito de Surigao, Nishimura entra com dois couraçados, um cruzador e quatro contratorpedeiros. Oldendorf tem seis velhos couraçados (cinco tinham estado em Pearl Harbor, em 1941), oito cruzadores, 28 contratorpedeiros e 39 [[lanchas torpedeiras|lancha torpedeira]]. As lanchas atacam por mais de três horas sem acertar nada.",
        "Quinto, por volta das 3h, os contratorpedeiros americanos lançam torpedos dos dois lados da coluna japonesa. O Fusō é atingido e afunda uns 40 minutos depois, e dois contratorpedeiros de Nishimura vão a pique. A [[manobra de cruzar o T|cruzar o t]] de Oldendorf acaba tendo pouca influência, porque a coluna japonesa já estava desfeita. Shima, que vinha atrás, recua. Foi a última batalha entre couraçados da história.",
        "Sexto, durante a noite, Kurita atravessa o estreito de San Bernardino sem que ninguém o impeça, e ao amanhecer de 25 de outubro avista os navios de Taffy 3, ao largo de Samar, às 6h37. O contato acontece por volta das 6h45, e os japoneses surpreendem totalmente os americanos.",
        "Sétimo, Taffy 3 tinha 6 porta-aviões de escolta, 3 contratorpedeiros e 4 [[contratorpedeiros de escolta|contratorpedeiro de escolta]], contra 4 couraçados, 6 cruzadores pesados, 2 leves e 11 contratorpedeiros. Evans lançou o Johnston ao ataque a toda velocidade e aleijou o cruzador Kumano com torpedos. O Hoel e o Samuel B. Roberts também atacaram. Os porta-aviões fugiram para uma chuva forte, mandando seus aviões ao ataque. Os japoneses perderam três cruzadores pesados. Por volta das 9h20, Kurita deu a ordem de recuar. Perdeu o controle da formação, estava incerto sobre onde estava Halsey, sabia que a Força Sul fora destruída e achava que tinha afundado vários porta-aviões. Perto das 11h, um piloto, o tenente Yukio Seki, lançou o avião contra o St. Lo, num dos primeiros ataques [[kamikaze]] organizados da guerra.",
        "Oitavo, no norte, em 25 de outubro, os aviões de Halsey afundam os quatro porta-aviões de Ozawa, entre eles o Zuikaku. Halsey só mandou os couraçados da Força-Tarefa 34 de volta ao sul às 11h15, quando Kurita já tinha ido embora."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo a Wikipédia em inglês, os aliados perderam cerca de 11 navios (entre eles 1 porta-aviões leve, 2 porta-aviões de escolta, 2 contratorpedeiros e 1 contratorpedeiro de escolta), cerca de 255 aviões e cerca de 3.000 homens. O Japão perdeu cerca de 26 navios (entre eles 1 porta-aviões de esquadra, 3 leves, 3 couraçados, 6 cruzadores pesados, 4 leves e 9 contratorpedeiros), cerca de 300 aviões e cerca de 12.000 homens. Só em Samar, os americanos tiveram 1.161 mortos ou desaparecidos e 913 feridos.",
        { h: "Por que importa" },
        "A Marinha Imperial deixou de ser capaz de travar uma batalha de frotas. Os americanos tomaram Leyte e continuaram a reconquista das Filipinas. O combate de Surigao foi a última batalha entre [[couraçados|couraçado]], e os ataques kamikaze se tornaram comuns nos meses seguintes. A Wikipédia em inglês chama Leyte de a maior batalha naval da Segunda Guerra Mundial, com mais de 200.000 militares navais envolvidos, e muitos a consideram a maior da história.",
        "Halsey foi muito criticado por ter deixado o estreito sem guarda. Ele defendia que Ozawa era a ameaça maior. Nimitz lhe mandou a pergunta: 'Onde está a Força-Tarefa 34?'. O rádio acrescentou ao fim uma frase de enchimento, 'O mundo se pergunta', que não fazia parte da mensagem, e Halsey, ao lê-la, ficou furioso.",
        { h: "Curiosidades e controvérsias" },
        { note: "Por que Kurita recuou? É o grande mistério da batalha. A Wikipédia lista os motivos: os ataques aéreos tinham desorganizado sua formação, ele perdera três cruzadores, não sabia onde estava Halsey, achava que tinha afundado vários porta-aviões grandes e sabia que a Força Sul fora destruída. Os navios de desembarque no golfo de Leyte eram o alvo de toda a operação." },
        { note: "Os números: fontes diferentes dão contagens diferentes de navios, aviões e mortos, e as perdas americanas em Samar variam de pouco mais de 1.000 a cerca de 1.600 mortos. Aqui seguimos os números da Wikipédia em inglês e avisamos quando há dúvida." },
        { note: "Os aviões não aparecem no diagrama porque o site só desenha navios. Em Sibuyan, em Samar e em Engaño, foram os aviões que decidiram." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  nilo: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 36, y: 38, rx: 14, ry: 28, l: "Baixio de Aboukir" },
      { t: "note", x: 90, y: 6, l: "Baía de Aboukir" }
    ],
    units: [
      { id: "g1", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Guerrier (vanguarda)" },
      { id: "g2", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Conquérant" },
      { id: "g3", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Spartiate" },
      { id: "g4", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Aquilon" },
      { id: "g5", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Peuple Souverain" },
      { id: "g6", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Franklin (Blanquet)" },
      { id: "g7", s: "b", k: "ship", w: 4.4, h: 4.4, l: "L'Orient (Brueys)" },
      { id: "g8", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Tonnant" },
      { id: "g9", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Heureux" },
      { id: "g10", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Mercure" },
      { id: "g11", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Guillaume Tell (Villeneuve)" },
      { id: "g12", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Généreux" },
      { id: "g13", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Timoléon" },
      { id: "fr", s: "b", k: "ship", w: 2.6, h: 7, l: "Fragatas francesas" },
      { id: "bGo", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Goliath (Foley)" },
      { id: "bZe", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Zealous (Hood)" },
      { id: "bAu", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Audacious" },
      { id: "bTh", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Theseus" },
      { id: "bOr", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Orion" },
      { id: "bVa", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Vanguard (Nelson)" },
      { id: "bMi", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Minotaur" },
      { id: "bDe", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Defence" },
      { id: "bBe", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Bellerophon" },
      { id: "bMa", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Majestic" },
      { id: "bSw", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Swiftsure" },
      { id: "bAl", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Alexander" },
      { id: "bCu", s: "a", k: "ship", w: 4.4, h: 2.2, l: "Culloden (encalhado)" },
      { id: "bLe", s: "a", k: "ship", w: 3.6, h: 2, l: "Leander" }
    ],
    steps: [
      { t: "1º de agosto de 1798, à tarde. Os franceses estão ancorados numa linha de 13 navios, com o Guerrier à frente, perto do baixio, e o L'Orient no centro. Os britânicos chegam pelo noroeste. O Swiftsure e o Alexander vêm muito atrás.",
        p: { g1: [62, 20], g2: [62, 24], g3: [62, 28], g4: [62, 32], g5: [62, 36], g6: [62, 40], g7: [62, 45], g8: [62, 50], g9: [62, 54], g10: [62, 58], g11: [62, 62], g12: [62, 66], g13: [62, 70], fr: [55, 50, 90],
             bGo: [40, 7], bZe: [33, 7], bOr: [26, 7], bTh: [19, 7], bAu: [12, 7],
             bVa: [40, 2], bMi: [33, 2], bDe: [26, 2], bBe: [19, 2], bMa: [12, 2],
             bLe: [2, 2], bCu: [10, 12], bAl: [2, 9], bSw: [2, 15] } },
      { t: "Nelson não espera o dia seguinte nem forma linha. Ataca ao entardecer, com o Zealous à frente medindo a profundidade. Os navios se esticam numa coluna rumo à vanguarda francesa.",
        p: { bGo: [58, 10], bZe: [51, 7], bOr: [44, 6], bTh: [37, 5], bAu: [30, 5],
             bVa: [72, 3], bMi: [65, 2], bDe: [58, 2], bBe: [51, 2], bMa: [44, 2],
             bLe: [16, 6], bCu: [22, 10], bAl: [8, 10], bSw: [14, 14] } },
      { t: "18h20: o Goliath, de Foley, vê o espaço entre o Guerrier e o baixio e entra por ele, por conta própria. Varre o primeiro navio pelo lado de terra, que não estava preparado. O Zealous vem atrás.",
        p: { bGo: [56, 25, 90], bZe: [56, 17.5, 90], bOr: [58, 12], bTh: [50, 9], bAu: [43, 8],
             bVa: [76, 12], bMi: [72, 6], bDe: [65, 3], bBe: [58, 3], bMa: [51, 3],
             bLe: [24, 8], bCu: [30, 10], bAl: [12, 10], bSw: [18, 12] } },
      { t: "Por volta das 18h40, o Audacious, o Theseus e o Orion ancoram por dentro. O Vanguard, o Minotaur e o Defence ancoram por fora, de frente para a vanguarda. Cada navio francês do começo da linha fica entre dois fogos. O Culloden encalha no baixio.",
        p: { bZe: [56, 17.5, 90], bAu: [56, 22, 90], bGo: [56, 26.5, 90], bTh: [56, 31, 90], bOr: [56, 37, 90],
             bVa: [69, 28, 90], bMi: [69, 32, 90], bDe: [69, 36, 90], bBe: [72, 20], bMa: [78, 14],
             bCu: [37, 15, 70], bLe: [48, 9], bSw: [40, 10], bAl: [32, 8] } },
      { t: "Entre 19h e 21h30, a vanguarda francesa cai: o Conquérant, o Guerrier, o Spartiate e o Aquilon se rendem. No centro, o Bellerophon enfrenta o L'Orient e o Majestic enfrenta o Tonnant.",
        p: { bBe: [69, 44, 90], bMa: [69, 50, 90], bSw: [74, 24], bAl: [70, 14], bLe: [52, 14] }, x: ["g1", "g2", "g3", "g4"] },
      { t: "20h20: o Bellerophon, destroçado, corta as amarras e sai à deriva. O Peuple Souverain corta o cabo e também sai, abrindo um vazio na linha, por onde passa o Leander. Por volta das 20h30, Nelson é ferido na cabeça. O Swiftsure e o Alexander chegam no escuro e atacam o L'Orient.",
        p: { bBe: [80, 46, 90], g5: [58, 41], bLe: [62, 37, 90], bSw: [69, 44, 90], bAl: [69, 40, 90] } },
      { t: "Cerca de 21h: o L'Orient pega fogo e Brueys morre. Às 22h, o fogo chega ao paiol, e o navio explode. Os navios britânicos próximos tinham parado de atirar para combater o fogo. O Tonnant, o Heureux e o Mercure cortam as âncoras e vão à deriva para o sul.",
        p: { bSw: [74, 44, 90], bAl: [74, 38, 90], bOr: [50, 37, 90], g8: [66, 55], g9: [58, 57], g10: [58, 61] }, x: ["g7"] },
      { t: "Depois da explosão, dez minutos de silêncio. Às 22h10, o Franklin recomeça o fogo. Por volta da meia-noite, só o Tonnant ainda atira. O Peuple Souverain, fora de combate, rende-se durante a noite.",
        p: { bBe: [82, 52, 90] }, x: ["g5"] },
      { t: "2 de agosto. O Guillaume Tell e o Généreux, que ficaram de fora, escapam para o mar aberto. O Timoléon, encalhado, é incendiado pela tripulação. Os demais se rendem, e o Tonnant só em 3 de agosto. Dos 13 navios franceses, 9 foram capturados, 2 destruídos, 2 fugiram.",
        p: { g11: [94, 58], g12: [94, 64], g13: [50, 72] }, x: ["g6", "g8", "g9", "g10", "g13"] }
    ]
  },

  navarino: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 14, y: 26, rx: 10, ry: 28, l: "Ilha de Sphacteria" },
      { t: "hill", x: 96, y: 24, rx: 14, ry: 30, l: "Forte de Navarino" },
      { t: "note", x: 52, y: 58, l: "Entrada da baía" },
      { t: "note", x: 90, y: 74, l: "Norte ↑" }
    ],
    units: [
      { id: "o2", s: "b", k: "ship", w: 36, h: 5, l: "Corvetas e brigues (2ª e 3ª linhas)" },
      { id: "oC", s: "b", k: "ship", w: 26, h: 4, l: "Esquadra imperial (Tahir Paxá)" },
      { id: "oNE", s: "b", k: "ship", w: 12, h: 4, l: "" },
      { id: "oNW", s: "b", k: "ship", w: 12, h: 4, l: "" },
      { id: "oE", s: "b", k: "ship", w: 16, h: 4, l: "Esquadra egípcia (Moharram Bei)" },
      { id: "oW", s: "b", k: "ship", w: 16, h: 4, l: "Ala oeste, junto à ilha" },
      { id: "oFE", s: "b", k: "ship", w: 3, h: 6, l: "Brulotes" },
      { id: "oFW", s: "b", k: "ship", w: 3, h: 6, l: "" },
      { id: "bT", s: "a", k: "ship", w: 12, h: 3.4, l: "Britânicos (Codrington)" },
      { id: "fT", s: "a", k: "ship", w: 12, h: 3.4, l: "Franceses (de Rigny)" },
      { id: "rT", s: "a", k: "ship", w: 14, h: 3.4, l: "Russos (Heiden e Lazarev)" },
      { id: "aF", s: "a", k: "ship", w: 14, h: 3, l: "Fragatas aliadas" }
    ],
    steps: [
      { t: "20 de outubro de 1827, 13h30. A frota turco-egípcia (78 navios) está ancorada em ferradura, em três linhas, com as pontas voltadas para a entrada. A esquadra aliada (27 navios) espera fora da baía. A ordem é só atirar se atacada.",
        p: { o2: [52, 7], oC: [52, 14], oNE: [70, 21, 40], oNW: [34, 21, -40], oE: [77, 35, 80], oW: [27, 35, -80], oFE: [84, 45], oFW: [20, 45],
             bT: [50, 64, 90], fT: [58, 68, 90], rT: [42, 68, 90], aF: [50, 74, 90] } },
      { t: "14h: o Asia, de Codrington, entra pela passagem do sul. Os franceses vão para o lado da fortaleza, e os russos, um pouco atrás, para o da ilha. Ibrahim Paxá manda um bote protestar, e Codrington ignora.",
        p: { bT: [50, 46, 90], fT: [58, 50, 90], rT: [42, 50, 90], aF: [50, 56, 90] } },
      { t: "Por volta das 14h15, os britânicos ancoram de frente para o centro da ferradura. Os outros ainda estão chegando.",
        p: { bT: [52, 26], fT: [60, 40, 90], rT: [44, 42, 90], aF: [52, 38, 90] } },
      { t: "Os franceses ancoram diante da ala egípcia. Os russos, os últimos a chegar, ocupam a posição mais exposta, diante da ala oeste. Os aliados ficam dentro da ferradura, a curta distância dos inimigos.",
        p: { fT: [66, 36, 80], rT: [38, 36, -80], aF: [52, 33] } },
      { t: "O começo é um acidente. O Dartmouth manda um bote impedir um brulote, e os otomanos atiram no bote e acendem o brulote. O capitão Fellowes ordena fogo de mosquete, a fragata francesa Sirène atira em apoio, uma corveta otomana responde, e o combate corre a linha toda.",
        p: {} },
      { t: "Por volta das 16h, os três navios de linha otomanos e quase todas as grandes fragatas da primeira linha estão destruídos. O Ghiuh Rewan, de Tahir Paxá, é destruído com a ajuda do francês Breslaw.",
        p: {}, x: ["oC", "oNE", "oNW"] },
      { t: "Nas duas horas seguintes, quase todo o resto da frota é destruído. Muitos navios são incendiados ou explodidos pela própria tripulação. Codrington tenta duas vezes mandar cessar fogo, mas os sinais não são vistos ou são ignorados.",
        p: { aF: [52, 22] }, x: ["oE", "oW", "o2", "oFE", "oFW"] },
      { t: "No fim da tarde, só 8 dos 78 navios turco-egípcios ainda navegam. Os aliados tiveram 181 mortos e 480 feridos e não perderam nenhum navio, embora o Azov, o Gangut e o Iezekiil, russos, e os três navios de linha britânicos tivessem de ser reparados.",
        p: { rT: [38, 40, -80], bT: [52, 28] } }
    ]
  },

  hamptonroads: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 6, y: 8, rx: 14, ry: 12, l: "Newport News" },
      { t: "hill", x: 100, y: 38, rx: 12, ry: 14, l: "Forte Monroe" },
      { t: "hill", x: 42, y: 76, rx: 40, ry: 10, l: "Sewell's Point e Norfolk" },
      { t: "note", x: 82, y: 6, l: "Hampton Roads" }
    ],
    units: [
      { id: "cumb", s: "a", k: "ship", w: 7, h: 2.8, l: "Cumberland" },
      { id: "cong", s: "a", k: "ship", w: 7, h: 2.8, l: "Congress" },
      { id: "minn", s: "a", k: "ship", w: 8, h: 3, l: "Minnesota" },
      { id: "rs", s: "a", k: "ship", w: 8, h: 3, l: "Roanoke e St. Lawrence" },
      { id: "mon", s: "a", k: "ship", w: 6, h: 2.4, l: "Monitor (chega à noite)" },
      { id: "virg", s: "b", k: "ship", w: 10, h: 3.6, l: "Virginia" },
      { id: "es", s: "b", k: "ship", w: 5, h: 2.4, l: "Raleigh e Beaufort" },
      { id: "js", s: "b", k: "ship", w: 7, h: 2.4, l: "Esquadra do rio James" }
    ],
    steps: [
      { t: "8 de março de 1862, de manhã. O Cumberland e o Congress estão ancorados perto de Newport News. O Minnesota, o Roanoke e o St. Lawrence estão perto do forte Monroe. O Virginia sai do rio Elizabeth, rumo a Newport News.",
        p: { cumb: [14, 24, 80], cong: [12, 33, 80], minn: [70, 36], rs: [86, 44], mon: [104, 62], virg: [38, 62, 35], es: [28, 64, 35], js: [-3, 52] } },
      { t: "O Virginia atravessa a enseada, passa pelo Congress, que atira sem efeito, e vai direto ao Cumberland. As balas dos navios de madeira quicam na casamata de ferro.",
        p: { virg: [30, 44, 40], es: [38, 54, 40] } },
      { t: "O Virginia abalroa o Cumberland. O esporão fica preso no casco e se solta quando o navio recua. O Cumberland afunda, com 121 mortos, lutando enquanto os canhões estavam acima da água.",
        p: { virg: [19, 28, 50] }, x: ["cumb"] },
      { t: "O Virginia se volta contra o Congress, que encalhou em águas rasas. A esquadra do rio James chega para ajudar. Depois de cerca de uma hora, o Congress se rende. O Virginia atira balas em brasa, e o Congress pega fogo. Buchanan é ferido na coxa.",
        p: { virg: [20, 38, 60], js: [10, 44], cong: [10, 34, 80] } },
      { t: "O Minnesota, o Roanoke e o St. Lawrence saem para ajudar, e todos encalham. O Virginia, de calado fundo, com a maré baixando, não consegue chegar ao Minnesota. Com a noite, volta para Sewell's Point. O Congress explode perto da meia-noite.",
        p: { minn: [50, 24], rs: [62, 32], virg: [44, 56, 35], js: [28, 52], es: [36, 58, 35] }, x: ["cong"] },
      { t: "Durante a noite, o Monitor chega e ancora ao lado do Minnesota encalhado, para protegê-lo.",
        p: { mon: [57, 26] } },
      { t: "9 de março, de manhã. O Virginia volta. Seu primeiro tiro erra o Monitor e acerta o Minnesota. Os dois encouraçados lutam cerca de três horas, a curta distância, sem furar um ao outro. O Virginia encalha por volta das 10h, mas se solta.",
        p: { virg: [47, 34, 35], mon: [55, 28] } },
      { t: "Uma granada do Virginia explode na casa do piloto do Monitor e cega Worden por um tempo. O Monitor se afasta para águas rasas. O Virginia, danificado, com a maré baixando e achando que o Monitor se retirou, volta para Norfolk. Cada lado diz que venceu, e o bloqueio continua.",
        p: { virg: [40, 58, 35], mon: [60, 26] } }
    ]
  },

  leyte: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 26, y: 2, rx: 24, ry: 5, l: "Luzon" },
      { t: "hill", x: 64, y: 22, rx: 10, ry: 12, l: "Samar" },
      { t: "hill", x: 56, y: 44, rx: 8, ry: 12, l: "Leyte" },
      { t: "hill", x: 56, y: 76, rx: 40, ry: 12, l: "Mindanau" },
      { t: "note", x: 40, y: 12, l: "Estreito de San Bernardino" },
      { t: "note", x: 30, y: 30, l: "Mar de Sibuyan" },
      { t: "note", x: 78, y: 48, l: "Golfo de Leyte" },
      { t: "note", x: 50, y: 62, l: "Estreito de Surigao" },
      { t: "note", x: 96, y: 72, l: "Norte ↑" }
    ],
    units: [
      { id: "hal", s: "a", k: "ship", w: 14, h: 4, l: "Terceira Frota (Halsey)" },
      { id: "taf", s: "a", k: "ship", w: 9, h: 3, l: "Taffy 3 (porta-aviões de escolta)" },
      { id: "old", s: "a", k: "ship", w: 14, h: 4, l: "Couraçados de Oldendorf" },
      { id: "inv", s: "a", k: "ship", w: 12, h: 3.4, l: "Navios de desembarque" },
      { id: "kur", s: "b", k: "ship", w: 16, h: 4, l: "Força Central (Kurita)" },
      { id: "nis", s: "b", k: "ship", w: 10, h: 3, l: "Força Sul (Nishimura)" },
      { id: "shi", s: "b", k: "ship", w: 8, h: 3, l: "Shima" },
      { id: "oza", s: "b", k: "ship", w: 12, h: 3, l: "Força Norte (Ozawa), a isca" }
    ],
    steps: [
      { t: "22 e 23 de outubro de 1944. Os americanos desembarcaram em Leyte. O Japão manda quatro forças: Kurita pelo oeste, Nishimura e Shima pelo sul, e Ozawa, a isca, pelo norte.",
        p: { kur: [20, 54], nis: [28, 66], shi: [16, 72], oza: [98, 3], hal: [94, 24], taf: [88, 40], old: [66, 54], inv: [78, 46] } },
      { t: "24 de outubro, no mar de Sibuyan: aviões de Halsey atacam Kurita sem parar. O couraçado Musashi afunda por volta das 19h35. Kurita recua para sair do alcance dos aviões.",
        p: { kur: [38, 28], nis: [42, 64], shi: [30, 72], oza: [97, 5], hal: [94, 20] } },
      { t: "No fim da tarde, os aviões de Halsey acham Ozawa. Halsey leva a Terceira Frota inteira ao norte e deixa o estreito de San Bernardino sem guarda. Às 17h15, Kurita volta para o estreito.",
        p: { hal: [96, 10], oza: [98, 3], kur: [46, 16] } },
      { t: "Noite de 24 para 25, no estreito de Surigao: os velhos couraçados de Oldendorf esperam a Força Sul na saída do estreito. Lanchas torpedeiras e contratorpedeiros atacam primeiro, e por volta das 3h os torpedos acertam os couraçados japoneses.",
        p: { nis: [58, 58, 90], shi: [50, 68], old: [64, 52] } },
      { t: "O Fusō afunda, e depois o Yamashiro. A Força Sul é destruída, e Shima recua. Foi a última batalha entre couraçados da história. No norte, Kurita atravessa o estreito de San Bernardino sem que ninguém o impeça.",
        p: { shi: [40, 72], kur: [76, 6] }, x: ["nis"] },
      { t: "25 de outubro, 6h45: Kurita desce pela costa de Samar e dá de cara com Taffy 3, seis porta-aviões de escolta e seus escoltas, e a surpresa é total.",
        p: { kur: [86, 24], taf: [90, 36] } },
      { t: "Os três contratorpedeiros e os quatro escoltas de Taffy 3 atacam com torpedos, em menor número e muito mais fracos. Os porta-aviões fogem para uma chuva forte, e seus aviões atacam. Os japoneses perdem três cruzadores pesados. Por volta das 9h20, Kurita manda recuar.",
        p: { kur: [72, 6], taf: [92, 44] } },
      { t: "Ao norte, os aviões de Halsey afundam os quatro porta-aviões de Ozawa, entre eles o Zuikaku. Halsey só manda os couraçados voltar ao sul às 11h15, tarde demais.",
        p: { hal: [96, 6] }, x: ["oza"] }
    ]
  }
});
