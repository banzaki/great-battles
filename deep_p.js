// In-depth battles, batch p: cusco, tucapel, panipat2, okehazama, malta, talikota.
// Checked against the English, Portuguese, Spanish and Japanese Wikipedia articles on each battle and its leaders
// (Siege of Cusco, Manco Inca, Sacsayhuaman, Tucapel, Lautaro, Valdivia, Second Panipat, Hemu, Akbar, Bairam Khan,
// Okehazama, Imagawa Yoshimoto, Oda Nobunaga, Great Siege of Malta, Talikota, Rama Raya, Vijayanagara, Hampi) and the works
// they cite (Hemming, Quilter, Kubler, Flickema, Vivar, Gongora Marmolejo, Mariño de Lobera, Sarkar, Abu'l-Fazl, Qandhari,
// Fujimoto, Balbi, Bosio, Bradford, Sire, Eaton, Kamath, Kulke and Rothermund), plus a HistoryNet article (MacQuarrie),
// The Week (Pillai) and the Haryana tourism site. Britannica, World History Encyclopedia and The Diplomat returned errors
// and were not used.

Object.assign(GLOSSARY, {
  "conquistador": "Soldado ou aventureiro espanhol que conquistou terras na América no século 16, em geral por conta própria e pagando as despesas com a promessa de ouro, terras e títulos.",
  "funda": "Tira de couro ou tecido com a qual se arremessa uma pedra, girando-a no ar. Nas mãos de um bom fundibulário, uma pedra de funda parte um osso ou amassa um capacete.",
  "sapa inca": "O título do imperador inca, chamado de 'único Inca'. Era tido como descendente do Sol.",
  "boleadeiras": "Pedras ou bolas de metal presas a cordas, que se atiram para enrolar as pernas de um cavalo ou de uma pessoa e derrubá-los.",
  "orejón": "Nome que os espanhóis davam aos nobres incas, por causa dos grandes brincos que alargavam o lobo das orelhas ('orejas', em espanhol).",
  "toqui": "Chefe de guerra dos mapuches, escolhido para comandar o povo em tempos de guerra. Em 1553, o toqui era Caupolicán, e Lautaro foi seu auxiliar.",
  "yanaconas": "Indígenas que serviam os espanhóis, como carregadores, criados e soldados auxiliares. Muitos vinham do Peru, outros eram do Chile.",
  "mogol": "Do Império Mogol, a dinastia de origem turca e mongol que governou a maior parte do norte da Índia de 1526 a 1857. Akbar foi seu terceiro imperador.",
  "regente": "Quem governa em nome de um rei que ainda é criança ou jovem demais, ou que não tem força para mandar.",
  "ghazi": "Título honorífico muçulmano dado a quem mata um inimigo da fé em combate. Bairam Khan queria que Akbar o recebesse.",
  "howdah": "Cabine ou plataforma sobre o lombo de um elefante de guerra, de onde o comandante via a batalha e dava ordens, e onde às vezes iam arqueiros e atiradores.",
  "dinastia sur": "A dinastia afegã de Sher Shah, que derrotou Humaiun em 1540 e o forçou ao exílio. Humaiun só retomou Délhi em 1555. Hemu serviu a um dos últimos reis sures.",
  "daimiô": "Grande senhor feudal do Japão, dono de terras e chefe de um exército de samurais. Na época de Okehazama, eram dezenas, quase sempre em guerra uns com os outros.",
  "sengoku": "O 'período dos Estados em guerra' no Japão, de meados do século 15 ao começo do 17, em que os senhores feudais lutavam entre si e o xogum quase não mandava.",
  "palanquim": "Cadeira ou cabine, carregada nos ombros de homens, que servia para transportar pessoas importantes.",
  "grão-mestre": "O chefe supremo de uma ordem militar religiosa, como a dos Hospitalários. Era eleito pelos cavaleiros e mandava em todos eles.",
  "sipahis": "Cavaleiros do exército otomano, que recebiam terras do sultão em troca de lutar a cavalo. Eram a cavalaria pesada das tropas regulares.",
  "corsário": "Capitão de navio que ataca e saqueia navios inimigos com a licença de um governo. No Mediterrâneo, havia corsários cristãos e muçulmanos, e os dois lados os temiam.",
  "paxá": "Título de um alto oficial ou governador do Império Otomano: general, almirante ou grão-vizir.",
  "galé": "Navio de guerra a remo, comprido e baixo, usado no Mediterrâneo. Os remadores eram em geral escravos ou prisioneiros.",
  "ravelim": "Pequena obra de defesa em forma de ponta de flecha, feita diante da muralha principal de um forte, para proteger a entrada e dar um posto avançado de tiro.",
  "decão": "O grande planalto do centro-sul da Índia. Em 1565, era dividido em sultanatos muçulmanos, ao norte do rio Krishna.",
  "sultanato": "Reino governado por um sultão, soberano muçulmano. Os do Decão nasceram da divisão do Sultanato Bahmani.",
  "bahmânidas": "O Sultanato Bahmani, reino muçulmano do Decão que se desfez em estados menores, os sultanatos de Ahmadnagar, Bijapur, Golconda, Bidar e Berar, que passaram a brigar entre si e com Vijayanagara."
});

Object.assign(DEEP, {
  cusco: {
    war: "Rebelião de Manco Inca contra a conquista espanhola do Peru (1536–1537)",
    hook: "Cerca de 190 espanhóis, trancados numa cidade em chamas, contra um exército que as fontes contam em dezenas de milhares.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 16 de novembro de 1532, em Cajamarca, o [[conquistador]] Francisco Pizarro e seus homens capturaram o imperador inca Atahualpa. O resgate foi enorme, mais de 18 toneladas de ouro e prata, segundo os historiadores. Os espanhóis pegaram o resgate e, em julho de 1533, mataram Atahualpa mesmo assim.",
        "O império, que já saía de uma guerra entre irmãos, ficou sem comando. Pizarro colocou no trono primeiro Túpac Huallpa e, depois da morte dele, Manco Inca, filho do imperador Huayna Cápac. Os espanhóis tomaram Cusco, a capital, em 15 de novembro de 1533, depois de vencer o exército do general Quisquis, e Manco foi coroado no mês seguinte.",
        "O tratamento mudou rápido. Quando Francisco Pizarro saiu da cidade, ficaram no comando seus irmãos Juan e Gonzalo, que humilharam Manco, exigiram ouro e, segundo a Wikipédia em espanhol, a sua esposa e irmã Cura Ocllo. Depois de uma tentativa de fuga, em novembro de 1535, Juan o prendeu. Em janeiro de 1536, Hernando Pizarro, outro irmão, voltou da Espanha e o soltou.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["Novembro de 1532", "Pizarro captura Atahualpa em Cajamarca."],
          ["15 de novembro de 1533", "Os espanhóis tomam Cusco. Manco Inca é coroado no mês seguinte."],
          ["Novembro de 1535", "Manco tenta fugir e é preso por Juan Pizarro."],
          ["Janeiro de 1536", "Hernando Pizarro o solta."],
          ["18 de abril de 1536", "Manco sai de Cusco com a desculpa de buscar uma estátua de ouro e fazer cerimônias no vale de Yucay. Vai para Lares e combina a revolta com seus chefes."],
          ["Maio de 1536", "Os incas cercam Cusco."]
        ]},
        "A saída de Manco era uma armadilha, e Hernando só percebeu depois. Os espanhóis estavam divididos: Diego de Almagro, o sócio mais velho de Pizarro, estava longe, numa expedição ao Chile. Manco aproveitou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Manco Inca, uns 20 anos" },
        "Tinha nascido em Cusco por volta de 1515, filho de Huayna Cápac e meio-irmão do imperador Huáscar. Fugiu de Cusco quando os generais de Atahualpa tomaram a cidade e, em 14 de novembro de 1533, encontrou Pizarro. Foi posto no trono pelos espanhóis, mas sem poder de verdade. Depois da fuga, queria expulsar os espanhóis de uma vez, e seu plano era vencer as tropas de Cusco e tomar também Lima, a nova cidade de Pizarro. Nem todos os incas o seguiram: uma parte da nobreza, incluindo seu meio-irmão Paullu, ficou do lado dos espanhóis.",
        { h: "Hernando Pizarro" },
        "O irmão que comandava a cidade. Tinha soltado Manco acreditando em suas promessas de ouro, e admitiu depois que fora enganado. Comandou a defesa de dentro de Cusco durante o cerco.",
        { h: "Juan Pizarro, 23 anos" },
        "O mais novo dos irmãos presentes, chefe da cavalaria. Foi ele quem conduziu o ataque a Sacsayhuamán e morreu dele.",
        { h: "Os outros nomes" },
        "Do lado inca, o general Paucar Huaman e o sumo sacerdote Villac Umu (também escrito Willaq Umu) lideravam os guerreiros em Sacsayhuamán. Titu Cusi Gualpa, um nobre inca, ficou no comando de lá quando os dois saíram. E havia um nobre cujo nome verdadeiro se perdeu: os espanhóis o chamavam de [[orejón|orejón]], e a história guardou o apelido de Cahuide."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os espanhóis em Cusco eram cerca de 190, uns 80 deles a cavalo, e alguns milhares de aliados indígenas, segundo John Hemming, o historiador mais citado sobre o assunto. Outro autor, Kim MacQuarrie, conta 196 espanhóis, 110 deles a pé, além de escravos africanos e uns 500 aliados cañaris e chachapoyas. Eram povos que tinham sido conquistados pelos incas.",
        "O exército inca é o ponto mais incerto. Hemming fala em 100.000 a 200.000 homens, e outras fontes descem a 40.000. A maioria era de lavradores e pastores chamados para a guerra, não soldados profissionais. A Wikipédia em espanhol conta que o exército foi dividido em quatro corpos, um para cada região do império.",
        { note: "Os números dos dois lados variam muito de livro para livro. O que se pode dizer com segurança é que os espanhóis eram uma ínfima minoria dentro de um mar de guerreiros e de aliados." },
        { h: "O terreno" },
        "Cusco fica num vale alto dos Andes. Acima da cidade, numa colina, ficava Sacsayhuamán, uma fortaleza inca com três muralhas em terraços, de uns 400 metros de comprimento e 6 de altura, feitas de pedras gigantes que se encaixam sem argamassa. Pedro Pizarro, que a viu, descreveu duas torres redondas muito altas lá dentro. Quem ocupava Sacsayhuamán dominava a cidade, e os cavalos espanhóis tinham muita dificuldade na subida íngreme.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, no começo de maio de 1536, Juan Pizarro saiu com uns 70 cavaleiros para dispersar os incas reunidos no vale de Yucay. Limpou o vale e o manteve por três ou quatro dias, até um mensageiro de Hernando chegar com a notícia de que guerreiros cobriam os morros em volta de Cusco. Juan voltou depressa.",
        "Segundo, em 5 de maio os incas ocuparam Sacsayhuamán, que os espanhóis tinham abandonado para se concentrar na cidade. Terceiro, em 6 de maio os guerreiros atacaram a praça central. Lançaram pedras de funda aquecidas e embrulhadas em algodão e flechas incendiárias, que acenderam os telhados de palha. O fogo se espalhou, e o cronista Cristóbal de Molina escreveu que a fumaça era tanta que os espanhóis quase morreram sufocados. Segundo MacQuarrie, o edifício Hatun Cancha chegou a pegar fogo, e alguns contam que escravos africanos o apagaram do telhado.",
        "Quarto, os espanhóis se entrincheiraram em dois grandes salões do lado leste da praça, Suntur Huasi e Hatun Cancha, e dali faziam saídas curtas. Os incas aprenderam a lutar contra os cavalos: derrubavam paredes em cima dos cavaleiros, cavavam buracos nos terraços, alagavam os acessos e laçavam as pernas dos animais com [[boleadeiras]].",
        "Quinto, cerca de uma semana depois, os espanhóis decidiram retomar Sacsayhuamán, que era a base dos incas. Juan Pizarro saiu com uns 50 cavaleiros e aliados, rompeu as linhas e fingiu fugir na direção de Lima, o que tirou guerreiros de dentro da fortaleza. Então deu a volta e atacou de fora da cidade.",
        "Sexto, no ataque às muralhas, uma pedra acertou Juan Pizarro na cabeça. Ele morreu dias depois. No dia seguinte, os espanhóis e os aliados repeliram os contra-ataques incas e, à noite, tomaram os terraços com escadas. Faltava água e munição aos defensores, que se recolheram nas duas torres.",
        "Sétimo, Paucar Huaman e Villac Umu saíram para buscar reforços em Calca, a base de Manco, e deixaram Titu Cusi Gualpa no comando. Quando voltaram, a fortaleza já estava nas mãos dos espanhóis. Muitos defensores se jogaram das muralhas.",
        "Oitavo, a luta virou uma série de choques diários, com uma pausa a cada lua nova, que os incas respeitavam por motivos religiosos. Os espanhóis passaram a saquear a região atrás de comida e, segundo Hemming, mandaram matar todas as mulheres capturadas e cortar as mãos dos homens. Hernando foi com cerca de 100 espanhóis e uns 30.000 aliados atacar Ollantaytambo, onde Manco instalou sua base, e foi derrotado em janeiro de 1537: os incas desviaram o rio Patacancha e alagaram o chão, o que anulou a cavalaria. Pouco depois, Manco preparou um novo ataque a Cusco. Uma patrulha espanhola esbarrou no exército inca por acaso, a surpresa se perdeu, e naquela noite os espanhóis atacaram primeiro e causaram muitas baixas.",
        { h: "O fim de Cahuide" },
        "O relato mais conhecido é o de Pedro Pizarro. Um nobre inca, o 'orejón' que a história chamou de Cahuide, defendeu uma das torres com uma maça de ponta de cobre e com armadura e escudo tirados dos espanhóis. Hernando Pizarro mandou que o pegassem vivo. Quando a torre estava a ponto de cair, Cahuide se enrolou no manto e se jogou do alto, para não se render."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Wikipédia em inglês dá o cerco como um período de dez meses, e Manco o levantou. Os dois lados perderam muita gente, mas só há estimativas, e vagas: MacQuarrie fala em 2.000 a 4.000 incas mortos e uns 35 espanhóis, e não deixa claro a que parte da luta isso se refere. O que pesou foi a fome: o exército inca tinha deixado os campos para lutar, as colheitas estavam em perigo, e Manco mandou a maior parte dos homens para casa plantar. Segundo a Wikipédia em espanhol, ele suspendeu o cerco em 18 de abril de 1537. A data de fim varia de fonte para fonte: outras apontam o começo de março.",
        "A decisão tem defensores e críticos. Para alguns historiadores, Manco jogou fora sua única chance de expulsar os espanhóis. Para outros, era a única saída realista, já que reforços espanhóis, vindos do Chile com Almagro e de Lima com Alonso de Alvarado, estavam chegando. Segundo a Wikipédia em inglês, os incas também derrotaram quatro expedições de socorro vindas de Lima, matando perto de 500 espanhóis, mas isso não bastou.",
        "Almagro voltou a Cusco em 8 de maio de 1537, assumiu o controle e prendeu Hernando e Gonzalo Pizarro por algumas semanas. Gonzalo fugiu. A disputa entre pizarristas e almagristas virou a primeira guerra civil entre os conquistadores e terminou em Las Salinas, em 1538, com a derrota de Almagro.",
        { h: "Por que importa" },
        "Foi a maior tentativa dos incas de expulsar os espanhóis. Falhou, e o império nunca mais teve a chance de se levantar inteiro. Manco recuou primeiro para Ollantaytambo e depois para as montanhas de Vilcabamba, onde fundou um estado inca menor, que resistiu até 1572, quando o último imperador, Túpac Amaru, foi executado. O próprio Manco morreu assassinado pelos almagristas fugitivos que tinha abrigado, em 1542 ou 1544, conforme a fonte.",
        { h: "Curiosidades e controvérsias" },
        { note: "Cahuide: o nome não é seguro. A Wikipédia diz que o nome verdadeiro dele é desconhecido, e que a palavra pode vir do quéchua 'kawiri', 'vigia'. A cena do pulo vem de cronistas espanhóis, depois repetida por fontes populares e turísticas; vale como símbolo, mas os detalhes não são comprovados." },
        { note: "As datas: o cerco começou em 6 de maio de 1536 (alguns contam 3 de maio) e terminou entre março e abril de 1537. Quando se diz 'dez meses', está tudo dentro do mesmo intervalo, mas a data exata de cada começo e fim é discutida." },
        { note: "O que sobrou de Sacsayhuamán: depois da conquista, os espanhóis desmontaram boa parte do complexo para usar a pedra em construções. As maiores pedras que sobraram são calculadas, nas estimativas modernas, em 128 a 200 toneladas." }
      ]}
    ]
  },

  tucapel: {
    war: "Guerra de Arauco, na conquista espanhola do Chile (1536 em diante)",
    hook: "Um ex-cavalariço de Valdivia usou o que aprendeu com os cavalos espanhóis para derrotar o próprio senhor.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1540, Pedro de Valdivia saiu de Cusco com cerca de 150 espanhóis e 1.000 auxiliares peruanos para conquistar o Chile. Atravessou o deserto do Atacama e fundou Santiago em 12 de fevereiro de 1541. Em 1550 fundou Concepção, depois de uma luta dura contra os mapuches na batalha de Penco, e nos anos seguintes plantou cidades mais ao sul: La Imperial, Valdivia, Angol e Villarrica.",
        "Os mapuches, o povo que vivia no centro-sul do Chile, não tinham um rei, mas escolhiam chefes de guerra em tempos de conflito. Valdivia espalhou seus poucos soldados em fortes pequenos, como Tucapel e Purén, para dominar o território e forçar os indígenas a trabalhar nas minas de ouro. Quanto mais ele avançava, mais os mapuches resistiam.",
        { h: "O caminho até Tucapel" },
        { timeline: [
          ["1540–1541", "Valdivia chega ao Chile e funda Santiago."],
          ["1550", "Funda Concepção."],
          ["1551–1552", "Funda cidades e fortes mais ao sul."],
          ["1553", "Os mapuches decidem ir à guerra. Caupolicán é o toqui, e Lautaro, seu auxiliar."],
          ["Dezembro de 1553", "Lautaro destrói o forte de Tucapel. Valdivia sai de Concepção para socorrê-lo."],
          ["25 de dezembro de 1553", "A batalha."]
        ]},
        "No meio dessa história estava um rapaz. Capturado ainda menino pelos espanhóis, Lautaro virou cavalariço de Valdivia. Cuidava dos cavalos e acompanhava a tropa nas batalhas. As fontes não concordam sobre a data da fuga, entre 1550 e 1552. O que importa é o que ele levou: sabia montar, entendia como os espanhóis lutavam e tinha percebido que o cavalo era um animal, não um monstro."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Lautaro, uns 19 anos" },
        "Nasceu por volta de 1534, filho de um chefe mapuche, e foi capturado aos 11 anos, segundo a Wikipédia. Aprendeu a cavalgar e, segundo a mesma fonte, a tática da cavalaria com o capitão Marcos Veas. Voltou ao seu povo e foi eleito vice-[[toqui]] por Caupolicán. Seu feito foi reunir o que viu entre os espanhóis com o que os mapuches já sabiam. Morreu jovem, em 29 de abril de 1557, numa emboscada de madrugada em Mataquito, com 22 ou 23 anos.",
        { h: "Pedro de Valdivia, 56 anos" },
        "Soldado extremenho, nascido por volta de 1497 (algumas fontes dão até 1505), lutou na Itália e depois no Peru ao lado de Francisco Pizarro. Foi enviado por Pizarro como tenente para as terras do sul e se tornou governador do Chile. Preferia a agricultura e a criação de gado ao garimpo, mas, quando surgiram boatos de ouro, passou a forçar os indígenas ao trabalho. Em 1553 tinha muita terra a defender e poucos soldados.",
        { h: "Os outros nomes" },
        "Do lado espanhol, o capitão Gómez de Almagro estava em Purén, onde Lautaro conseguiu prendê-lo e impedir que se juntasse a Valdivia. Luis de Bobadilla liderou a pequena patrulha que seguiu à frente, e o padre Bartolomé del Pozo acompanhava Valdivia. Do lado mapuche, Caupolicán, o toqui, comandava os mapuches em geral, e foi ele, segundo o cronista Jerónimo de Vivar, quem mandou executar Valdivia."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os espanhóis eram poucos: as estimativas modernas dão de 37 a 55, provavelmente uns 50. Com eles iam entre 2.000 e 5.000 [[yanaconas]], conforme a fonte. Os mapuches são difíceis de contar. As crônicas, como a de Vivar, Góngora Marmolejo e Mariño de Lobera, falam em 13.000 a 50.000, o que os historiadores acham exagerado. As estimativas modernas ficam entre 5.000 e 10.000, provavelmente uns 6.000.",
        { note: "Quase tudo o que sabemos vem de cronistas espanhóis, que escreveram sobre uma derrota deles. Os números dos mapuches ficam no escuro, e os de Valdivia também: a Wikipédia em inglês dá 55 espanhóis em um ponto e 50 em outro." },
        { h: "O terreno" },
        "O forte de Tucapel ficava perto da atual Cañete, na região da Araucanía, em terreno de colinas, mata e pântano. Os cavalos corriam bem no plano e mal no barro. Esse detalhe pesou no fim.",
        { h: "A marcha" },
        "Valdivia saiu de Concepção em meados de dezembro de 1553, passou por Quilacoya e ganhou mais soldados no caminho. Espiões mapuches seguiam a coluna sem atacar. Estranhando a falta de notícias e de ataques, mandou uma patrulha de cinco homens, sob Luis de Bobadilla, e acampou a meio dia do forte. Chegou ao forte na manhã de 25 de dezembro e o encontrou destruído: Lautaro o tinha tomado com cerca de 6.000 guerreiros, e a guarnição se retirara para Purén. Um pedido de reforços de Valdivia para Purén foi interceptado.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, os espanhóis chegaram ao forte em ruínas e começaram a montar acampamento. Segundo, guerreiros mapuches saíram da mata e atacaram. Valdivia formou três esquadrões de uns 20 homens, e a primeira carga foi repelida. Terceiro, os mapuches recuaram por uma encosta íngreme, e a cavalaria espanhola ainda atacou os que se retiravam, mas encontrou lanças, e voltou.",
        "Quarto, um segundo esquadrão, com lanceiros e homens armados de maças, cordas e laços, enfrentou os cavaleiros e arrancou muitos das selas para arrastá-los. Os espanhóis também o repeliram, mas com perdas. Segundo a Wikipédia em espanhol, uma corneta marcava a hora de cada esquadrão recuar, para ser substituído. Quinto, chegou o terceiro esquadrão, liderado por Lautaro. Os espanhóis já tinham perdido metade da tropa, e os auxiliares diminuíam.",
        "Sexto, Valdivia lançou tudo o que restava. Vendo a derrota, mandou recuar, mas Lautaro atacou pelo [[flanco]]. Sétimo, a linha espanhola se desfez e os mapuches perseguiram os retardatários. Só Valdivia e o padre Pozo escaparam, nos melhores cavalos. Oitavo, os cavalos atolaram nos pântanos perto dos rios Pilmaiquén e Pichidenquehue, e os dois foram capturados.",
        { h: "Como Valdivia morreu" },
        "As fontes contam de jeitos diferentes. Para Vivar, Caupolicán pediu a execução, e Valdivia foi morto com uma lança, com a cabeça exposta. Para Góngora Marmolejo, ele ofereceu deixar as terras mapuches e entregar o gado em troca da vida, foi recusado, e depois dos antebraços cortados e comidos foi morto. Para Mariño de Lobera, a oferta foi a mesma, e um guerreiro o matou com uma maça por não confiar na palavra dele. Lobera também registra uma história de ouro derretido despejado na garganta de Valdivia, que é lenda."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Todos os espanhóis morreram e muitos dos auxiliares também. Do lado mapuche, a Wikipédia em espanhol fala em mais de 2.000 mortos, sem apoio claro de documentos, e a em inglês só diz que foram muitos. Entre os mortos havia chefes.",
        "Foi o fim do mito da invencibilidade espanhola em campo aberto. Caupolicán cercou a cidade de Valdivia e as povoações do sul, e Lautaro ficou de olho em Concepção. Em fevereiro de 1554, com cerca de 8.000 homens, Lautaro venceu o espanhol Francisco de Villagra em Marihueñu. Em 1555, tomou e destruiu Concepção. Em 1556 marchou para o norte, em direção a Santiago, mas recuou depois do combate de Peteroa. Em abril de 1557, morreu em Mataquito. A cabeça foi exposta na praça de Santiago.",
        { h: "Por que importa" },
        "Lautaro mostrou que o armamento espanhol não era invencível: o cavalo cansava, atolava e podia ser laçado. Os mapuches aprenderam a combinar armas, usar emboscadas e escolher o terreno, e passaram a ser vistos como um adversário sério. O Chile o considera hoje seu primeiro grande general. Os mapuches resistiram aos espanhóis, e mais tarde ao Estado chileno, por mais de três séculos.",
        { h: "Curiosidades e controvérsias" },
        { note: "As datas: a Wikipédia em espanhol diz que a batalha pode ter sido em 25 de dezembro de 1553 ou em 1º de janeiro de 1554. O dia de Natal é a data mais usada." },
        { note: "A morte de Valdivia: a história de que Lautaro o torturou por três dias e que os chefes comeram seu coração é uma lenda posterior. A Wikipédia em espanhol acha mais provável uma morte rápida, como a de um guerreiro. A mesma fonte diz que o crânio teria virado taça de chicha entre os chefes." },
        { note: "O ex-cavalariço: o romance de Isabel Allende diz que Lautaro se deixou capturar de propósito. É ficção, não história." }
      ]}
    ]
  },

  panipat2: {
    war: "Reconquista da Índia pelos mogóis sob Akbar (1555–1556)",
    hook: "Um vendedor de salitre que virou rei estava ganhando a batalha quando uma flecha perdida lhe acertou o olho.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O Império [[mogol]] foi fundado em 1526 por Babur, que tomou o norte da Índia depois de vencer o sultão de Délhi na primeira batalha de Panipat. Seu filho Humaiun perdeu o trono em 1540 para Sher Shah, da [[dinastia sur]], e passou 15 anos no exílio. Só recuperou Délhi em 1555, e morreu em janeiro de 1556 (27 de janeiro, segundo a Wikipédia).",
        "O trono passou ao filho, Akbar, um garoto de 13 ou 14 anos, que foi coroado em Kalanaur, no Punjab, em 14 de fevereiro de 1556. Quem mandava era o [[regente]] Bairam Khan, seu tutor e comandante em chefe. Bairam recebeu o título de Khan-i-Khanan e o cargo de vakil, algo como primeiro-ministro. A situação era frágil: o império mal tinha voltado, e os afegãos, os rajaputes e o resto do norte não o aceitavam.",
        "Foi aí que apareceu Hemu. Vindo da região de Rewari, de família hindu de poucos recursos (talvez comerciante de salitre, matéria-prima da pólvora), subiu na corte dos sures: foi fiscal de mercado com Islam Shah e chegou a primeiro-ministro e comandante do rei Adil Shah Suri. As fontes lhe atribuem 22 vitórias, quase todas contra rebeldes afegãos.",
        { h: "O caminho até Panipat" },
        { timeline: [
          ["Janeiro de 1556", "Humaiun morre. Hemu parte de Bengala contra os mogóis."],
          ["14 de fevereiro de 1556", "Akbar é coroado, com Bairam Khan como regente."],
          ["1556", "Hemu toma Agra e outras cidades."],
          ["7 de outubro de 1556", "Em Tughlaqabad, perto de Délhi, Hemu derrota o general mogol Tardi Beg Khan, toma Délhi e assume o título de Vikramaditya."],
          ["Outubro de 1556", "Tardi Beg se junta a Bairam em Sirhind e, depois de uma discordância, Bairam o manda executar por suposta covardia. Akbar e Bairam marcham para Délhi."],
          ["5 de novembro de 1556", "A batalha."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hemu (Hemchandra Vikramaditya), por volta de 55 anos" },
        "Nascido por volta de 1501, segundo a Wikipédia, de origem humilde e com casta e local de nascimento discutidos pelos historiadores, nunca foi nobre: era um administrador que virou general, e comandava soldados afegãos. Em Délhi, tomou o nome de Vikramaditya, um título da antiga tradição de reis indianos. Alguns historiadores, como Satish Chandra, duvidam que ele tenha declarado independência de verdade; outros veem no título um projeto de reinar sozinho.",
        { h: "Akbar, 13 ou 14 anos" },
        "Nascido em 15 de outubro de 1542, tinha 14 anos no dia da batalha. Muitos textos dizem 13, a idade que tinha ao ser coroado, em fevereiro. Estava a uns 13 quilômetros do campo, com Bairam Khan, e não lutou. Mais tarde reinaria por quase 50 anos e se tornaria o maior dos imperadores mogóis.",
        { h: "Bairam Khan" },
        "Tutor de Akbar e regente, era o verdadeiro comandante do exército mogol. Era duro: mandou executar Tardi Beg por covardia, acusação que o próprio texto da Wikipédia põe em dúvida. Em 1560, Akbar o afastou do cargo, e Bairam morreu assassinado a caminho de Meca, em janeiro de 1561.",
        { h: "Os outros nomes" },
        "Do lado mogol, Ali Quli Khan Shaibani comandava o centro, com uns 10.000 cavaleiros; Sikandar Khan Uzbak, a direita; Abdulla Khan Uzbak, a esquerda; e Husain Quli Beg e Shah Quli Mahram, a vanguarda, que incluía os turcos de Bairam. Do lado de Hemu, o sobrinho dele, Ramya (ou Ramaiyya, conforme a fonte), comandava a ala esquerda, e Shadi Khan Kakar, a direita."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo Sarkar (1960), os mogóis tinham cerca de 30.000 cavaleiros e 200 [[elefantes de guerra|elefantes de guerra]], e Hemu uns 30.000 cavaleiros, em boa parte afegãos, e 500 elefantes blindados, com atiradores de mosquete e de besta nas costas. Outras fontes falam em 1.500 elefantes. Hemu perdera a artilharia antes da batalha: Ali Quli Khan, enviado à frente com cerca de 10.000 cavaleiros, apanhou o comboio de canhões, que estava mal guardado.",
        { note: "Os números de Panipat variam muito, e as próprias fontes mogóis, como as de Abu'l-Fazl, têm interesse em engrandecer a vitória. Usamos as faixas das obras modernas." },
        { h: "O terreno" },
        "Uma planície aberta, a cerca de 80 quilômetros ao norte de Délhi, em Panipat, onde 30 anos antes Babur vencera o sultão de Délhi. Havia uma ravina funda na frente do centro mogol, que os elefantes e cavalos de Hemu não conseguiam atravessar.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, Akbar e Bairam ficaram a uns 13 quilômetros atrás. À frente, os mogóis se arrumaram com a vanguarda na frente, o centro atrás e duas alas, a direita e a esquerda. Hemu ficou no centro, num elefante chamado Hawai.",
        "Segundo, Hemu abriu o ataque soltando seus elefantes contra as duas alas mogóis. Os soldados que escaparam da carga correram para os lados e, dali, atiraram flechas na cavalaria de Hemu. Terceiro, o centro mogol avançou até uma posição defensiva na frente da ravina, e os elefantes e cavalos de Hemu, sem poder cruzar, ficaram expostos às flechas.",
        "Quarto, a cavalaria mogol deu a volta pelos flancos e pela retaguarda e passou a ferir as pernas dos elefantes e matar seus condutores. Hemu recuou os elefantes, e o ataque afegão perdeu força. Quinto, Ali Quli Khan fez sua cavalaria dar a volta e atacou o centro afegão por trás. Hemu reagiu do seu [[howdah]]: Shadi Khan Kakar e outros foram mortos, mas ele seguia comandando contra-ataques. A luta era dura e parecia pender para ele.",
        "Sexto, as duas alas mogóis foram empurradas para trás, e Hemu moveu elefantes e cavalaria para esmagar o centro. Sétimo, nesse momento uma flecha perdida o acertou no olho, e ele caiu desacordado. Oitavo, vendo a flecha e o chefe caído, o exército entrou em pânico, desfez a formação e fugiu. Cerca de 5.000 morreram no campo, e mais na fuga. O elefante de Hemu foi capturado algumas horas depois, e ele foi levado, ainda vivo, ao acampamento mogol."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os mogóis tomaram 120 elefantes de Hemu, e a Wikipédia diz que isso os impressionou tanto que os elefantes passaram a fazer parte de sua estratégia militar. Délhi e Agra foram recuperadas. Adil Shah, o rei sur de quem Hemu era ministro, foi derrotado e morto por Khizr Khan em abril de 1557. O pai de Hemu, já idoso, foi executado depois de recusar a conversão, e outros parentes e partidários também.",
        "Hemu foi decapitado. A cabeça foi enviada a Cabul, e o corpo, exibido em Délhi, no Purana Quila, onde ele fora coroado. Há um memorial, o Hemu Samadhi Sthal, no local da execução, em Panipat.",
        { h: "Por que importa" },
        "A vitória devolveu Délhi e Agra aos mogóis num momento em que o império, com um imperador adolescente, estava frágil. O reinado de Akbar durou quase 50 anos. Hemu, que de ministro passou a rei de Délhi, tem hoje um memorial em Panipat.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem matou Hemu? Muhammad Arif Qandhari, um autor da época, diz que Akbar, aconselhado por Bairam Khan, o decapitou para ganhar o título de [[ghazi]]. Abu'l-Fazl, mais tarde, diz que Akbar se recusou a ferir um homem moribundo. Os historiadores modernos tendem a ver a recusa como uma invenção posterior da corte. A Wikipédia em inglês inclina para Akbar, e a biografia de Bairam Khan diz apenas que foi Akbar ou Bairam." },
        { note: "Os números: a flecha no olho e a fuga são o ponto em que as fontes mais concordam. O resto, inclusive a quantidade de elefantes, muda de autor para autor." }
      ]}
    ]
  },

  okehazama: {
    war: "Campanhas de Oda Nobunaga no período Sengoku (1560)",
    hook: "Um jovem senhor com cerca de 3.000 homens surpreendeu o acampamento de um exército muito maior, e matou o general.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No Japão do século 16, o poder do xogum de Quioto tinha acabado na prática. Em todo o país, senhores feudais, os [[daimiôs|daimiô]], lutavam entre si numa guerra quase contínua: é o período [[Sengoku|sengoku]]. Um dos mais fortes era Imagawa Yoshimoto, que controlava as províncias de Suruga, Tōtōmi e Mikawa, no litoral do Pacífico. Aliado dos Takeda e dos Hōjō, estava livre para olhar para o oeste.",
        "No caminho ficava Owari, onde Oda Nobunaga, filho de um chefe local, tinha acabado de unificar a província. Durante anos, os Oda e os Imagawa brigaram por sua fronteira. Por volta de 1559, os Imagawa ganharam os castelos de Narumi, Marune, Washizu e Kutsukake, que cortaram Owari em duas partes, e Nobunaga respondeu construindo fortes em volta de Narumi e Ōdaka.",
        { h: "O caminho até Okehazama" },
        { timeline: [
          ["1534", "Nasce Oda Nobunaga."],
          ["1559", "Nobunaga controla toda Owari. Os Imagawa tomam castelos na fronteira."],
          ["12 de maio de 1560 (calendário lunar)", "Yoshimoto parte de Sunpu com seu exército."],
          ["18 de maio", "Yoshimoto chega a Kutsukake."],
          ["19 de maio (12 de junho no calendário atual)", "A batalha."]
        ]},
        "A ideia antiga é que Yoshimoto marchava para Quioto para tomar o poder do xogum. Hoje, muitos historiadores a rejeitam. Entre as explicações, estão atacar Owari, controlar a baía de Ise, aliviar fortes cercados e estabilizar a fronteira."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Oda Nobunaga, 25 anos" },
        "Nascido em 23 de junho de 1534, é contado como tendo 26 anos, pela maneira japonesa da época. Era chamado de 'o tolo de Owari', por seu comportamento fora do comum: vestia-se de maneira informal em público, comia melão montado de costas no cavalo e dançava em tavernas. Em 1559, tinha eliminado seus rivais na própria família e na província. Em Okehazama, apostou tudo: contra um inimigo muito maior, só uma ofensiva forte poderia compensar a diferença, e ordenou o contra-ataque.",
        { h: "Imagawa Yoshimoto, cerca de 41 anos" },
        "Nascido em 1519, terceiro filho do senhor da família, foi mandado a um templo ainda menino, mas chegou ao comando do clã numa disputa de sucessão em 1536. Casou com uma irmã de Takeda Shingen, derrotou os Hōjō e conquistou três províncias. Era o senhor mais poderoso da região, conhecido como o melhor arqueiro da rota do Tōkaidō, expressão que quer dizer que era o mais forte militarmente dali. A imagem de nobre tolo e antiquado que ele tem em jogos como Samurai Warriors é ficção, não história.",
        { h: "Os outros nomes" },
        "Matsudaira Motoyasu, o futuro Tokugawa Ieyasu, aliado dos Imagawa, estava na vanguarda e se ocupava de abastecer o forte de Ōdaka. Mōri Shinsuke e Hattori Koheita, samurais de Nobunaga, mataram Yoshimoto. E Kinoshita Tōkichirō, o futuro Toyotomi Hideyoshi, foi notado por Nobunaga ali pela primeira vez, segundo a Wikipédia."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A cifra mais usada para os Imagawa é 25.000, do estado-maior do Exército Imperial japonês, e também aceita por Kojima Tetsuo. O Shinchō kōki, a crônica de Ōta Gyūichi, fala em 45.000. Outras fontes ficam entre 20.000 e mais de 50.000, e o próprio Yoshimoto anunciou 40.000. O ponto importante é que só 5.000 a 6.000 deles estavam perto de Nobunaga, o resto se espalhava pelos fortes e pelo caminho. Do lado Oda, uns 2.000 atacaram o quartel de Yoshimoto, com 2.000 a 3.000 reunidos no forte de Zenshōji.",
        { note: "Os números são discutidos. O que mais importa é a diferença local: Nobunaga atacou em um ponto onde estava em número próximo ao inimigo, e não contra o exército todo." },
        { h: "O terreno" },
        "Colinas e vales entre Nagoya e a baía, no atual Aichi. O lugar exato de Okehazama ainda é discutido: um morro em Toyoake, onde hoje fica um parque, ou um morro a oeste do forte de Nakajima. Os registros dos Imagawa dizem que Yoshimoto morreu em 'Dengaku-kubo', hoje identificado com o sítio de Toyoake.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Os horários abaixo vêm da reconstrução da Wikipédia japonesa, a partir das crônicas. Primeiro, Yoshimoto partiu de Sunpu e chegou a Kutsukake em 18 de maio. Segundo, na madrugada do dia 19, os Imagawa atacaram os fortes de Marune e Washizu. Nobunaga saiu de Kiyosu por volta das 4 da manhã.",
        "Terceiro, por volta das 8, chegou ao santuário de Atsuta e viu a fumaça dos fortes. Quarto, por volta das 10, estava no forte de Zenshōji, onde, segundo a tradição, deixou bandeiras para parecer que tinha mais gente. Nesse ponto, Sasa Masatsugu e Chiaki Shirō atacaram a vanguarda inimiga com uns 30 homens e morreram.",
        "Quinto, perto do meio-dia, foi ao forte de Nakajima. Yoshimoto descansava no morro de Okehazama, em seu acampamento, comemorando as vitórias, e alguns de seus homens estavam sem armadura. Sexto, por volta da uma da tarde, caiu uma chuva forte ou granizo. Os Oda avançaram, a vanguarda Imagawa cedeu e os soldados chegaram ao acampamento de Yoshimoto.",
        "Sétimo, Yoshimoto saiu da barraca, percebeu tarde demais que os que chegavam não eram seus. Abandonou o [[palanquim]] e fugiu a cavalo com uns 300 guardas, mas foi alcançado por seguidos ataques. Oitavo, segundo a Wikipédia japonesa, ele feriu Hattori Koheita mas foi morto por Mōri Shinsuke. Com o chefe e a maioria dos oficiais mortos, os Imagawa se renderam ou fugiram.",
        { h: "Ataque pela frente ou pela retaguarda?" },
        "A versão tradicional, baseada no Shinchōki de Kobe, diz que Nobunaga fez um ataque de surpresa pela lateral, dando a volta pelo morro. Fujimoto Masayuki, com base no Shinchō kōki, defende que foi um ataque frontal. Outros propõem um ataque combinado, uma investida contra soldados que saqueavam, ou um ataque a um exército que já se retirava. A ideia de que Yanada Masatsuna avisou Nobunaga de onde Yoshimoto estava não tem apoio em registros da época."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas são incertas. Para os Oda, o Shinchō kōki fala em cerca de 3.000 mortos, e outras fontes em 2.500 ou 3.907. Uma lista do templo Nagafuku-ji dá 2.753 mortos entre os Imagawa e cerca de 990 entre os Oda, mas os pesquisadores a consideram pouco confiável.",
        "O clã Imagawa perdeu muitos de seus principais vassalos e sua influência em Tōtōmi e Mikawa desmoronou. Motoyasu voltou para Okazaki e rompeu com os Imagawa, aliando-se a Nobunaga em 1562, a aliança de Kiyosu. Yoshimoto foi sucedido por seu filho Ujizane, e o clã acabou destruído pelos vizinhos.",
        { h: "Por que importa" },
        "Nobunaga ganhou prestígio e vários senhores juraram lealdade. A partir de 1561, ele avançou sobre a província de Mino, tomou o castelo de Inabayama em 1567, chamou-o de Gifu e, em 9 de novembro de 1568, entrou em Quioto. Foi o começo da unificação do Japão, que seus sucessores Hideyoshi e Ieyasu completaram. Nobunaga morreria em 1582, aos 47 anos, no templo de Honnō-ji.",
        { h: "Curiosidades e controvérsias" },
        { note: "O campo de batalha foi declarado Sítio Histórico Nacional em 1937 e hoje é um parque em Toyoake, com os Sete Pilares de Granito, os Shichikokuhyō." },
        { note: "Os nomes: os registros dos Imagawa dizem que Yoshimoto morreu em 'Dengaku-kubo', e outros textos falam em 'Dengaku-hazama'. 'Okehazama' é o nome com que a batalha ficou conhecida." },
        { note: "O motivo da campanha: a ideia de que Yoshimoto ia a Quioto aparece em muitos livros, mas hoje é bastante contestada, como visto acima. O que se sabe é que ele avançou e tomou fortes na fronteira de Owari." }
      ]}
    ]
  },

  malta: {
    war: "Guerra entre os otomanos e a Ordem de São João no Mediterrâneo (1565)",
    hook: "Em quatro meses de verão, cerca de 6.000 defensores aguentaram mais de 100.000 tiros de canhão e um exército muitas vezes maior.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Ordem dos Hospitalários, os cavaleiros de São João, eram monges-soldados que combatiam os muçulmanos no Mediterrâneo. Em 1522, o sultão Solimão, o Magnífico, os expulsou da ilha de Rodes, depois de seis meses de cerco. Em 26 de outubro de 1530, eles chegaram a Malta, que o imperador Carlos V lhes deu em troca de um falcão por ano para o vice-rei da Sicília.",
        "Em Malta, os cavaleiros continuaram a ser um incômodo para os otomanos: com galés e corsários, atacavam navios otomanos. Em 1551, o corsário Dragut e o almirante Sinan invadiram Malta com uns 10.000 homens, desistiram depois de alguns dias, mas tomaram a ilha vizinha de Gozo, onde capturaram cerca de 5.000 pessoas, e depois tomaram a guarnição dos cavaleiros em Trípoli. Em 1552, a Ordem construiu os fortes de São Miguel e de Santo Elmo, em cerca de seis meses, e reforçou o de Santo Ângelo.",
        "Em meados de 1564, o cavaleiro Romegas capturou vários navios de carga, entre eles um do chefe dos eunucos do palácio do sultão, e prendeu gente importante. No fim daquele ano, Solimão resolveu acabar com os cavaleiros de Malta.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["1522", "Solimão expulsa os Hospitalários de Rodes."],
          ["1530", "Carlos V dá Malta à Ordem."],
          ["1551", "Dragut ataca Malta e Gozo e toma Trípoli."],
          ["1557", "Jean de Valette é eleito grão-mestre."],
          ["Meados de 1564", "Os cavaleiros capturam navios do sultão. No fim do ano, Solimão decide atacar."],
          ["22 de março de 1565", "A frota otomana parte de Constantinopla."],
          ["18 de maio de 1565", "A frota chega a Malta."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Jean de Valette, cerca de 70 anos" },
        "Eleito [[grão-mestre]] em 1557, comandava a defesa. Antes de os otomanos chegarem, mandou colher as plantações e envenenar os poços, reforçou os três fortes e, ao receber o aviso de um desertor, mandou levantar uma paliçada em Senglea. Quando os cavaleiros lhe disseram que Santo Elmo não aguentaria, respondeu que o forte tinha de resistir até a chegada dos reforços. Em agosto, vetou a proposta do conselho de se retirar para o forte de Santo Ângelo.",
        { h: "Mustafá Paxá e Piali Paxá" },
        "Mustafá Paxá, quarto vizir, comandava o exército de terra; Piali Paxá, a frota. Discordaram logo no começo: Piali queria abrigar a frota no porto de Marsamxett, o que exigia primeiro tomar Santo Elmo; Mustafá preferia atacar Mdina e os fortes por terra. Mustafá cedeu, achando que Santo Elmo cairia em poucos dias. Foi o erro que decidiu a campanha.",
        { h: "Dragut" },
        "Corsário e almirante, o mais famoso dos muçulmanos do Mediterrâneo, chegou de Trípoli em maio. Foi atingido na cabeça em junho, durante o ataque a Santo Elmo, e morreu."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A frota otomana tinha 193 navios, segundo o cronista Bosio, entre eles 131 [[galés|galé]]. Quanto aos soldados, as fontes não concordam: o cavaleiro Francisco Balbi, que foi testemunha, fala em 40.000; Valette escreveu 15.000 a 16.000 desembarcados, quatro dias depois do início; Bosio, 30.000; e outro autor, 48.000. A Wikipédia dá de 35.000 a 40.000. Entre eles havia [[janízaros]] e [[sipahis]], além de cerca de 2.500 [[corsários|corsário]] de Argel.",
        "Segundo a tabela de Balbi, os defensores somavam 6.100: cerca de 500 cavaleiros, mais soldados espanhóis e italianos, 500 homens das galés, escravos e servos, e uns 3.000 malteses. Combatentes de verdade eram uns 2.500.",
        { note: "Os números são de cronistas que viveram o cerco, e cada um tinha motivos para inflar o tamanho do inimigo vencido. Usamos os intervalos, não um valor só." },
        { h: "O terreno" },
        "Malta é uma ilha pequena. Os cavaleiros ocupavam o Grande Porto, com o forte de Santo Ângelo na ponta de Birgu, o forte de São Miguel em Senglea, e, na entrada do porto, o pequeno forte de Santo Elmo, na ponta da colina de Sciberras. Quem tomasse Santo Elmo podia abrigar a frota em Marsamxett e atacar os outros por trás. A cidade de Mdina, no centro, ficava longe do porto.",
        { h: "O cerco, em ordem" },
        "Primeiro, Santo Elmo. A frota chegou em 18 de maio, e a luta começou no dia 19. Em 20 de maio, ancorou em Marsaxlokk, a uns 10 quilômetros do Grande Porto. Em 27 de maio, cerca de 36 canhões começaram a bater o forte, que ficou em ruínas em uma semana. Em 3 de junho, os janízaros tomaram o [[ravelim]] e o fosso. Em 16 de junho, houve um assalto geral. Em 23 de junho, o forte caiu: mais de 1.500 defensores foram mortos, e só nove cavaleiros, poupados. Segundo o historiador Sire, o forte custou aos otomanos pelo menos 6.000 homens, metade deles janízaros.",
        "Segundo a Wikipédia, quando os otomanos expuseram corpos de cavaleiros decapitados em cruzes de brincadeira, Valette mandou decapitar prisioneiros turcos e disparar as cabeças com os canhões contra o acampamento inimigo. Em julho, cerca de 600 soldados, sob Melchor de Robles, vindos da Sicília, chegaram a Birgu (o 'pequeno socorro').",
        "Em 15 de julho, o ataque a Senglea. Mustafá fez carregar por terra, atravessando a colina de Sciberras, cerca de 100 barcos pequenos até o Grande Porto, com uns 1.000 janízaros, enquanto corsários atacavam o forte de São Miguel por terra. Uma bateria no nível do mar, que Valette preparara, afundou quase todos os barcos, e mais de 800 atacantes morreram, mortos ou afogados.",
        "Em 7 de agosto, outro ataque duplo a São Miguel e a Birgu abriu uma brecha na muralha, e então os otomanos recuaram de repente. Antes disso, Vincenzo Anastagi, comandante de cavalaria em Mdina, atacou o hospital de campanha otomano, desprotegido, e matou mais de 60 homens. Os turcos acharam que o socorro tinha chegado.",
        "De 19 a 21 de agosto, novos ataques. Segundo Balbi, em 20 de agosto Valette correu ao ponto mais ameaçado e ficou lá até os turcos recuarem. Os relatos diferem: Bosio fala em pânico e fogo amigo vindo do forte de Santo Ângelo, e Bradford, de uma mina que explodiu. Balbi e Bosio não citam a mina.",
        { h: "O fim" },
        "Em 7 de setembro, uma força de cerca de 8.000 homens, trazida por García de Toledo, vice-rei da Sicília, desembarcou na baía de São Paulo. Mustafá preparou uns 10.000 homens para enfrentá-los, mas foram derrotados perto de Mdina e fugiram para a praia, onde as galés de Piali cobriram o embarque. As fontes dão datas diferentes para a saída: de 8 a 13 de setembro."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas otomanas, segundo as fontes, ficaram entre 25.000 e 35.000: Bosio fala em 30.000, Balbi em 35.000, e outros em 25.000. Seria cerca de um terço do exército, entre mortos em combate e doenças. Dos cristãos, a Wikipédia dá pelo menos 2.500 mortos, mas os cavaleiros perderam cerca de um terço dos seus, e Malta, um terço dos habitantes. Birgu e Senglea ficaram quase arrasadas. Balbi conta que foram disparados uns 130.000 tiros de canhão.",
        { h: "Por que importa" },
        "A vitória foi comemorada na Europa inteira. Com o dinheiro que chegou, Valette construiu uma cidade nova e fortificada no monte Sciberras, que se chamou Valletta, para que nenhum inimigo tomasse a posição outra vez. Seis anos depois, a aliança cristã venceu os otomanos em Lepanto. Alguns historiadores, como Henry Sire, argumentam que os otomanos se esticaram demais e que a Espanha provavelmente teria retomado a ilha se ela tivesse caído.",
        { h: "Curiosidades e controvérsias" },
        { note: "O Santo Elmo: Mustafá achava que o forte cairia em poucos dias. Foram quase quatro semanas, de 27 de maio a 23 de junho, de bombardeio e assaltos." },
        { note: "A morte de Dragut: segundo a Wikipédia, uma bala de canhão arrancou um pedaço de uma trincheira e o atingiu na cabeça. Uma versão rival diz que foi um tiro certeiro do forte de Santo Ângelo." },
        { note: "As datas: a Wikipédia em inglês dá o cerco como indo de 18 de maio a 8 de setembro, e a ficha do mapa dá 11 de setembro. As fontes diferem sobre o dia exato da partida da frota otomana." }
      ]}
    ]
  },

  talikota: {
    war: "Guerra entre Vijayanagara e os sultanatos do Decão (1565)",
    hook: "Em um dia de janeiro, o último grande império hindu do sul da Índia perdeu seu regente, seu exército e, pouco depois, sua capital.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Vijayanagara foi fundado em 1336 e, em seu auge, era o império mais poderoso do sul da Índia. Sua capital, Vijayanagara (hoje Hampi), era uma das maiores e mais ricas cidades do mundo: por volta de 1500, estima-se que era a segunda do planeta depois de Pequim.",
        "Ao norte do império ficava o [[Decão|decão]], dividido em sultanatos muçulmanos. Eram os herdeiros do [[Sultanato Bahmani|bahmânidas]], que se desfez: Ahmadnagar, Bijapur, Golconda, Bidar e Berar. Os [[sultanatos|sultanato]] brigavam entre si e com Vijayanagara.",
        "Por mais de 20 anos, o regente Rama Raya se aproveitou das rivalidades dos sultanatos. Fazia o papel de árbitro, mudava de aliado conforme a conveniência e avançou para o norte do rio Krishna. Segundo a Wikipédia, ele chegava a se chamar 'Sultão do Mundo', o que irritou tanto seus súditos quanto os sultões. Jogadas agressivas em torno de Kalyan e uma diplomacia insolente empurraram os sultões a se unir, e eles selaram a aliança por casamentos entre as casas reais.",
        { h: "O caminho até Talikota" },
        { timeline: [
          ["1336", "Fundação de Vijayanagara."],
          ["1542", "Rama Raya assume a regência de fato, com o jovem Sadasiva Raya como imperador de fachada."],
          ["Cerca de 20 anos", "Rama Raya joga os sultanatos uns contra os outros e avança para o norte do rio Krishna."],
          ["Começo de 1565", "Os sultanatos se unem e atacam, no fim de janeiro."],
          ["23 de janeiro de 1565", "A batalha (a Wikipédia em português dá 26 de janeiro)."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Rama Raya, cerca de 80 anos" },
        "Nasceu em 1484, de uma família telugu do sul de Andhra, e era genro do grande imperador Krishna Deva Raya. Foi um general, administrador e diplomata hábil e subiu sob o imperador Achyuta. Depois de 1542, o imperador era só o jovem Sadasiva, quase preso, e Rama Raya governava. Contratou generais muçulmanos, e tinha cerca de 80 anos em 1565, embora algumas fontes exagerem a idade. Ali Adil Shah de Bijapur era seu rival, mas, segundo a revista The Week, a mulher de Rama Raya o adotara simbolicamente como filho depois de perder o próprio.",
        { h: "Os sultões" },
        "Quatro sultões lideraram a aliança: Husain Nizam Shah, de Ahmadnagar; Ali Adil Shah, de Bijapur; Ibrahim Qutb Shah, de Golconda; e o de Bidar. A Wikipédia em inglês diz que Berar não participou; a revista The Week o inclui. Husain Nizam Shah foi, segundo algumas fontes, quem mandou matar Rama Raya.",
        { h: "Os outros nomes" },
        "Entre os que lutaram com ele estavam Tirumala, seu irmão, e Venkatadri. Dois generais muçulmanos do exército de Vijayanagara, os irmãos Gilani, são os mais citados da história: segundo vários historiadores, mudaram de lado no meio da luta."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Aqui é preciso ser honesto: não se sabe. Há quem repita 70.000 cavaleiros e 900.000 soldados a pé para Vijayanagara, números que parecem exagerados. As estimativas que circulam por aí, cerca de 140.000 para Vijayanagara e 80.000 para os sultanatos, são incertas. Os artigos da Wikipédia em inglês e em português não dão números.",
        { note: "Os números de Talikota são os menos confiáveis deste conjunto: as fontes são crônicas escritas pelos vencedores ou por quem viveu perto deles, como Ferishta, que escreveu 24 anos depois." },
        { h: "As armas" },
        "A artilharia pesou. Segundo o historiador Kamath, os sultanatos tinham canhões operados por artilheiros turcos, e Vijayanagara dependia de mercenários europeus com canhões velhos. Rama Raya tinha parado de comprar cavalos persas, e sua cavalaria usava cavalos locais. Um enorme canhão, o Malik-i-Maidan, foi fornecido por Ali Adil Shah, de Bijapur. Muitos estudiosos atribuem a derrota sobretudo à falta de tecnologia da pólvora do lado de Vijayanagara.",
        { h: "O terreno" },
        "O lugar exato é discutido. As fontes citam as aldeias de Rakkasagi e Tangadi (Rakshasi-Tangadi), perto de Talikota, nas margens do rio Krishna, embora a revista The Week dê o rio Tungabhadra e avise que o local exato é incerto. A duração também varia: de poucas horas a alguns dias.",
        { h: "A batalha" },
        "A reconstrução é muito difícil, porque as fontes, como o Burhan-i Maasir, o Gulshan-i Ibrahimi de Ferishta, as Décadas da Ásia de Diogo do Couto e cartas do governador de Goa, se contradizem. O que dá para dizer com alguma segurança é o seguinte.",
        "Rama Raya confiava em seus números. Segundo a The Week, que cita o historiador Manu Pillai, ele percorria o campo numa liteira aberta para animar as tropas e, sentado num trono cravejado de joias, distribuía moedas. Os canhões do lado de Ahmadnagar foram carregados com moedas de cobre, e a rajada teria matado cerca de 5.000 soldados de Rama Raya e caído perto dele. É um número de crônica, provavelmente exagerado.",
        "Em seguida, um elefante enlouquecido pelo combate, do lado de Ahmadnagar, avançou em sua direção. Segundo uma versão, seus carregadores fugiram e ele foi pisoteado. Segundo outra, foi capturado e decapitado por Husain Nizam Shah antes que Ali Adil Shah chegasse. Sua cabeça, diz a Wikipédia, foi recheada de palha e exibida.",
        "Para vários historiadores (Kamath, Kulke e Rothermund), Vijayanagara estava ganhando até os dois generais muçulmanos, os irmãos Gilani, passarem para o lado dos sultanatos. Outros estudiosos rejeitam essa história de traição. Quando Rama Raya caiu, o exército se desfez. Tirumala fugiu com as tropas, e Venkatadri foi cegado e provavelmente morto."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército dos sultanatos saqueou a capital, sem ninguém para detê-los. A Wikipédia dá o saque como tendo durado seis meses, com a cidade pilhada, saqueada e queimada, e depois abandonada. Historiadores modernos dizem que a destruição se concentrou no centro real, e que a ideia de uma devastação total é mais antiga. As ruínas de Hampi são hoje Patrimônio Mundial da Unesco, desde 1986.",
        "Tirumala fundou a dinastia Aravidu, a última do império, e mudou a capital para Penukonda, onde ficou de 1565 a 1592, antes de passar por Chandragiri e Vellore. Em 1572, abdicou e dividiu o que restava entre seus três filhos. O império foi se desfazendo até 1646, em guerras com Bijapur e outros. A aliança dos sultanatos não durou: Bijapur foi quem mais ganhou.",
        { h: "Por que importa" },
        "Foi o fim do último grande império hindu do sul da Índia. Para muitos estudiosos, a derrota teve causa técnica: faltava pólvora moderna a Vijayanagara. O historiador Richard Eaton rejeita ver a batalha como choque simples entre hindus e muçulmanos, visão dos historiadores coloniais e nacionalistas: havia muçulmanos no exército de Vijayanagara e rivalidades entre os próprios sultões. A peça de teatro Crossing to Talikota, de Girish Karnad, usa essa leitura.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: a Wikipédia em inglês dá 23 de janeiro de 1565, e a em português dá 26 de janeiro." },
        { note: "A traição dos Gilani é a explicação mais conhecida, mas as fontes que a contam são tardias, e alguns estudiosos a ligam a um relato do comerciante veneziano Cesare Federici, escrito depois." },
        { note: "O fim de Rama Raya tem duas versões (pisoteado ou decapitado em cativeiro) e nenhuma se pode comprovar." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  panipat2: {
    terrain: [
      { t: "note", x: 50, y: 33, l: "Ravina funda diante do centro mogol" }
    ],
    units: [
      { id: "mV", s: "a", k: "cav", w: 12, h: 4, l: "Vanguarda" },
      { id: "mC", s: "a", k: "cav", w: 14, h: 4, l: "Centro" },
      { id: "mAQ", s: "a", k: "cav", w: 12, h: 4, l: "Cav. de Ali Quli Khan" },
      { id: "mL", s: "a", k: "cav", w: 14, h: 4, l: "Ala esquerda" },
      { id: "mR", s: "a", k: "cav", w: 14, h: 4, l: "Ala direita" },
      { id: "mCamp", s: "a", k: "camp", w: 12, h: 4, l: "Akbar e Bairam (13 km atrás)" },
      { id: "hC", s: "b", k: "ele", w: 10, h: 5, l: "Hemu no elefante" },
      { id: "hEL", s: "b", k: "ele", w: 12, h: 5, l: "Elefantes" },
      { id: "hER", s: "b", k: "ele", w: 12, h: 5, l: "Elefantes" },
      { id: "hL", s: "b", k: "cav", w: 14, h: 4, l: "Ala esq. (Ramya)" },
      { id: "hR", s: "b", k: "cav", w: 14, h: 4, l: "Ala dir. (Shadi Khan)" }
    ],
    steps: [
      { t: "Os mogóis formam a vanguarda, o centro e duas alas. Akbar e Bairam Khan ficam a uns 13 km atrás. Hemu fica no centro, num elefante, com os elefantes na frente e a cavalaria afegã nas alas.",
        p: { mV: [50, 44], mC: [50, 50], mAQ: [64, 50], mL: [22, 50], mR: [78, 50], mCamp: [50, 66],
             hC: [50, 14], hEL: [30, 24], hER: [70, 24], hL: [20, 14], hR: [80, 14] } },
      { t: "Hemu abre o ataque: os elefantes caem sobre as duas alas mogóis. Os cavaleiros que escapam correm para os lados.",
        p: { hEL: [20, 41], hER: [80, 41], mL: [10, 52], mR: [90, 52] } },
      { t: "O centro mogol avança até a beira da ravina. Os elefantes e os cavalos de Hemu não conseguem atravessá-la e ficam sob as flechas.",
        p: { mV: [50, 38], mC: [50, 42], mAQ: [64, 42], hC: [50, 24] } },
      { t: "Da lateral e de trás, os arqueiros e cavaleiros mogóis ferem as pernas dos elefantes e matam os condutores. Hemu recua os elefantes.",
        p: { mL: [8, 36], mR: [92, 36], hEL: [24, 26], hER: [76, 26] } },
      { t: "Ali Quli Khan faz sua cavalaria dar a volta e ataca o centro afegão por trás. Hemu contra-ataca do howdah e a luta fica dura.",
        p: { mAQ: [78, 14, 90], hC: [50, 22], hR: [76, 20] } },
      { t: "As duas alas mogóis são empurradas para trás. Hemu lança elefantes e cavalaria para esmagar o centro.",
        p: { mL: [8, 46], mR: [92, 46], hEL: [34, 34], hER: [66, 34], hC: [50, 32], mC: [50, 44] } },
      { t: "Uma flecha perdida acerta Hemu no olho. Ele cai desacordado.",
        p: { hC: [50, 34] }, x: ["hC"] },
      { t: "Sem o chefe, o exército de Hemu entra em pânico e foge. Cerca de 5.000 morrem no campo, e mais na perseguição.",
        p: { hEL: [26, 20], hER: [74, 20], hL: [16, 6], hR: [84, 6], hC: [50, 30], mAQ: [50, 12, 90], mC: [50, 36] }, x: ["hC", "hEL", "hER", "hL", "hR"] }
    ]
  },

  tucapel: {
    terrain: [
      { t: "hill", x: 26, y: 14, rx: 20, ry: 9, l: "Encosta e mata" },
      { t: "note", x: 52, y: 60, l: "Forte de Tucapel (em ruínas)" },
      { t: "note", x: 86, y: 28, l: "Pântano" }
    ],
    units: [
      { id: "sA", s: "b", k: "cav", w: 11, h: 4, l: "Esquadrão" },
      { id: "sB", s: "b", k: "cav", w: 11, h: 4, l: "Esquadrão" },
      { id: "sC", s: "b", k: "cav", w: 11, h: 4, l: "Esquadrão" },
      { id: "sV", s: "b", k: "cav", w: 8, h: 4, l: "Valdivia e o padre Pozo" },
      { id: "sY", s: "b", k: "inf", w: 16, h: 4, l: "Auxiliares yanaconas" },
      { id: "m1", s: "a", k: "inf", w: 16, h: 4, l: "1º esquadrão" },
      { id: "m2", s: "a", k: "inf", w: 16, h: 4, l: "2º (maças e laços)" },
      { id: "m3", s: "a", k: "inf", w: 16, h: 4, l: "3º, com Lautaro" }
    ],
    steps: [
      { t: "Valdivia chega ao forte destruído e começa a montar acampamento. Os mapuches esperam escondidos na mata.",
        p: { sA: [38, 52], sB: [52, 54], sC: [66, 52], sV: [52, 46], sY: [52, 62],
             m1: [20, 14], m2: [42, 10], m3: [64, 10] } },
      { t: "Os guerreiros do primeiro esquadrão saem da mata e atacam. Valdivia forma três esquadrões de uns 20 homens e repele a carga.",
        p: { m1: [38, 36], sA: [38, 44], sB: [52, 46], sC: [66, 44] } },
      { t: "O primeiro esquadrão recua pela encosta, e a cavalaria espanhola o persegue. Encontra lanças e volta.",
        p: { m1: [22, 16], sA: [36, 40] } },
      { t: "O segundo esquadrão ataca com maças, cordas e laços e arranca cavaleiros das selas. Os espanhóis o repelem, mas perdem gente.",
        p: { m2: [50, 34], sB: [52, 42], sA: [40, 46] } },
      { t: "O segundo recua, e o terceiro, com Lautaro, entra descansado. Metade dos espanhóis já caiu, e os auxiliares diminuem.",
        p: { m2: [40, 10], m3: [60, 34], sC: [64, 42], sY: [52, 58] } },
      { t: "Valdivia lança tudo o que resta e depois manda recuar. Lautaro ataca o flanco.",
        p: { m3: [76, 42, -40], sC: [60, 44], sB: [48, 46], sA: [36, 48], sV: [52, 52] } },
      { t: "A linha espanhola se desfaz. Os mapuches perseguem os retardatários. Só Valdivia e o padre Pozo escapam, nos melhores cavalos.",
        p: { sV: [74, 56], m3: [66, 48] }, x: ["sA", "sB", "sC", "sY"] },
      { t: "Os cavalos de Valdivia e do padre atolam num pântano. Os dois são capturados.",
        p: { sV: [86, 32], m3: [80, 38] }, x: ["sA", "sB", "sC", "sY", "sV"] }
    ]
  },

  cusco: {
    terrain: [
      { t: "hill", x: 50, y: 12, rx: 34, ry: 9, l: "Sacsayhuamán" },
      { t: "note", x: 50, y: 40, l: "Praça central de Cusco" },
      { t: "note", x: 10, y: 60, l: "Caminho de Lima" }
    ],
    units: [
      { id: "eH", s: "a", k: "inf", w: 12, h: 5, l: "Suntur Huasi" },
      { id: "eK", s: "a", k: "inf", w: 12, h: 5, l: "Hatun Cancha" },
      { id: "eC", s: "a", k: "cav", w: 12, h: 4, l: "Cavalaria" },
      { id: "eJ", s: "a", k: "cav", w: 12, h: 4, l: "Juan Pizarro, 50 cavaleiros" },
      { id: "eA", s: "a", k: "inf", w: 14, h: 4, l: "Aliados indígenas" },
      { id: "iS", s: "b", k: "inf", w: 22, h: 4, l: "Incas em Sacsayhuamán" },
      { id: "iW", s: "b", k: "inf", w: 12, h: 8, l: "Cerco inca (oeste)" },
      { id: "iE", s: "b", k: "inf", w: 12, h: 8, l: "Cerco inca (leste)" },
      { id: "iN", s: "b", k: "inf", w: 12, h: 8, l: "Cerco inca (sul)" }
    ],
    steps: [
      { t: "Início de maio de 1536. Os espanhóis se concentram na cidade, em volta da praça. Os guerreiros incas ocupam os morros.",
        p: { eH: [42, 46], eK: [58, 46], eC: [50, 51], eJ: [50, 56], eA: [50, 61],
             iS: [50, 22], iW: [12, 46], iE: [88, 46], iN: [50, 66] } },
      { t: "5 de maio: os incas tomam Sacsayhuamán, que os espanhóis tinham abandonado.",
        p: { iS: [50, 12] } },
      { t: "6 de maio: o ataque à praça. Pedras quentes e flechas incendiárias acendem os telhados de palha. Os espanhóis se fecham em dois salões.",
        p: { iW: [28, 44], iE: [72, 44], iN: [50, 60] } },
      { t: "Os incas levantam posições elevadas e usam boleadeiras e paredes derrubadas contra os cavalos. Os espanhóis fazem saídas curtas.",
        p: { eC: [50, 50], iW: [30, 40], iE: [70, 40] } },
      { t: "Cerca de uma semana depois, Juan Pizarro sai com uns 50 cavaleiros e finge fugir na direção de Lima.",
        p: { eJ: [18, 62, -30] } },
      { t: "Os incas saem atrás dele. Juan dá a volta e ataca Sacsayhuamán de fora. Uma pedra o acerta na cabeça, e ele morre dias depois.",
        p: { eJ: [36, 22, 40], iS: [60, 12], iW: [20, 54] } },
      { t: "À noite, espanhóis e aliados sobem os terraços com escadas. Os incas, sem água e sem munição, se recolhem nas duas torres.",
        p: { eA: [40, 24], eC: [46, 28], iS: [64, 10] } },
      { t: "As torres caem. Quando Paucar Huaman e Villac Umu voltam de Calca com reforços, Sacsayhuamán já é espanhola.",
        p: { eA: [50, 14], eC: [40, 18] }, x: ["iS"] }
    ]
  },

  okehazama: {
    terrain: [
      { t: "hill", x: 78, y: 54, rx: 14, ry: 9, l: "Okehazama (Dengakuhazama)" },
      { t: "note", x: 14, y: 8, l: "Kiyosu" },
      { t: "note", x: 28, y: 30, l: "Santuário de Atsuta" },
      { t: "note", x: 46, y: 38, l: "Zenshōji" },
      { t: "note", x: 62, y: 46, l: "Nakajima" },
      { t: "note", x: 88, y: 24, l: "Marune e Washizu" }
    ],
    units: [
      { id: "oN", s: "a", k: "inf", w: 12, h: 5, l: "Nobunaga, 2.000 a 3.000" },
      { id: "oD", s: "a", k: "inf", w: 8, h: 4, l: "Bandeiras (tradição)" },
      { id: "iV", s: "b", k: "inf", w: 14, h: 5, l: "Vanguarda Imagawa" },
      { id: "iY", s: "b", k: "inf", w: 14, h: 6, l: "Yoshimoto e a guarda" },
      { id: "iM", s: "b", k: "inf", w: 14, h: 5, l: "Resto do exército" },
      { id: "iT", s: "b", k: "inf", w: 10, h: 4, l: "Motoyasu (Ōdaka)" }
    ],
    steps: [
      { t: "18 de maio: Yoshimoto chega a Kutsukake com seu exército, muito maior. Nobunaga está no castelo de Kiyosu.",
        p: { oN: [14, 14], oD: [8, 14], iV: [84, 18], iY: [82, 62], iM: [90, 44], iT: [58, 62] } },
      { t: "19 de maio, de madrugada: os Imagawa atacam os fortes de Marune e Washizu. Nobunaga sai de Kiyosu por volta das 4 da manhã.",
        p: { iV: [88, 26], oN: [20, 20] } },
      { t: "Cerca das 8: Nobunaga chega ao santuário de Atsuta e vê a fumaça dos fortes.",
        p: { oN: [28, 34], oD: [22, 34] } },
      { t: "Cerca das 10: chega ao forte de Zenshōji. Segundo a tradição, deixa ali bandeiras para parecer que tem mais gente.",
        p: { oN: [46, 42], oD: [40, 42] } },
      { t: "Perto do meio-dia: vai ao forte de Nakajima. Yoshimoto descansa no morro de Okehazama, com o exército em festa.",
        p: { oN: [62, 50], iV: [74, 46], iY: [78, 56], iM: [90, 52] } },
      { t: "Cerca da uma da tarde: cai uma chuva forte. Os Oda avançam e a vanguarda Imagawa desmorona.",
        p: { oN: [70, 52], iV: [78, 44] }, x: ["iV"] },
      { t: "Os Oda chegam ao acampamento de Yoshimoto. Ele abandona o palanquim e foge a cavalo com uns 300 guardas, mas é alcançado.",
        p: { oN: [76, 56], iY: [86, 62] } },
      { t: "Yoshimoto é morto por Mōri Shinsuke. Com o chefe e a maior parte dos oficiais mortos, os Imagawa se rendem ou fogem.",
        p: { oN: [80, 58], iY: [88, 66], iM: [96, 50] }, x: ["iY", "iM"] }
    ]
  }
});
