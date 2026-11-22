// In-depth battles, batch l: bannockburn, crecy, poyang, kulikovo, aljubarrota, kosovo.
// Checked against the English and Portuguese Wikipedia articles (and the works they cite: Reese, Brown, Ayton,
// Rogers, Sumption, Gorskii, Dvurechensky, Fine, Tucker, Twitchett, Andrade, McMurdo, Russell, Froissart),
// the Chinese Wikipedia article on Poyang, the Wikipedia biographies of the leaders, and Historic Environment
// Scotland (Bannockburn). Britannica could not be opened, so it was not used.

Object.assign(GLOSSARY, {
  "schiltron": "Formação escocesa de lanceiros: um bloco compacto, com as lanças apontadas para fora, como um ouriço. Os cavalos não investem contra uma parede de pontas, então ele barrava a cavalaria.",
  "homem de armas": "Soldado profissional de armadura pesada, de cota de malha e placas de metal. Podia lutar a cavalo ou, nas batalhas defensivas da época, desmontado e a pé.",
  "arco longo": "Arco inglês e galês, de madeira, tão forte que o arqueiro precisava de anos de treino para usá-lo. Disparava várias flechas por minuto e tinha longo alcance.",
  "galloglass": "Guerreiros de infantaria pesada das ilhas do oeste da Escócia, que lutavam a pé, de armadura, com machados e espadas grandes.",
  "cavalgada": "No original, chevauchée: uma incursão em território inimigo para saquear, queimar e arruinar o campo, sem tentar conquistar cidades. Enfraquece o adversário e tenta forçá-lo a lutar.",
  "oriflamme": "Estandarte sagrado dos reis da França. Quando era desfraldado, significava que não se faria prisioneiros.",
  "pavês": "Escudo enorme, apoiado no chão, atrás do qual o besteiro se abrigava para recarregar a arma.",
  "bombarda": "Canhão primitivo, de ferro, que atirava bolas de metal. Quanto dano ele fazia nas batalhas do século 14 ainda é discutido.",
  "condestável": "Comandante supremo do exército de um reino, logo abaixo do rei. Na França, era ele quem organizava e comandava o exército em campanha.",
  "vanguarda": "A parte do exército que marcha ou luta na frente.",
  "abrolhos": "Pequenas peças de ferro com pontas, espalhadas pelo chão para ferir os cascos dos cavalos.",
  "cortes": "Assembleia do reino português na Idade Média, com nobres, clero e representantes das cidades, que aconselhava o rei e decidia assuntos graves, como quem ia reinar.",
  "tributo": "Pagamento regular que um povo dominado faz ao dominador.",
  "horda dourada": "O Estado mongol cujos cãs dominaram os principados russos por mais de dois séculos e cobravam deles tributo.",
  "cã": "Título do soberano mongol e turco. A Horda Dourada era governada por cãs.",
  "tártaros": "Nome que os russos davam aos povos turco-mongóis da Horda Dourada.",
  "boiardo": "Nobre russo de alta posição, conselheiro e comandante a serviço do príncipe.",
  "grão-príncipe": "Título do príncipe mais importante entre os russos, ligado ao trono de Vladimir. Era o cã da Horda quem confirmava quem o ocupava.",
  "janízaros": "Infantaria de elite do sultão otomano, formada por soldados profissionais. Nasceram no século XIV e foram a espinha dorsal do exército otomano por cerca de 300 anos.",
  "vidovdan": "O Dia de São Vito, 28 de junho. Na Sérvia, virou o dia de lembrar a batalha de Kosovo.",
  "navio-torre": "Grande navio de guerra chinês, de três andares e laterais blindadas. Era uma fortaleza flutuante: de cima, os soldados jogavam pedras e atiravam flechas nos barcos mais baixos.",
  "brulote": "Barco carregado de material inflamável, incendiado e solto contra a frota inimiga, ao sabor do vento ou da correnteza.",
  "trabuco": "Máquina de arremesso com um braço longo, que lançava pedras ou bombas incendiárias. Também foi montada em navios.",
  "turbantes vermelhos": "Rebelião que começou em 1351 contra a dinastia mongol e se espalhou pela China. Quando o governo desmoronou, seus chefes passaram a brigar entre si pelo poder.",
  "yuan": "A dinastia mongol que governava a China no século 14, até ser derrubada pelos rebeldes.",
  "ming": "A dinastia que Zhu Yuanzhang fundou em 1368 e que governou a China depois dos mongóis."
});

Object.assign(DEEP, {
  bannockburn: {
    war: "Primeira Guerra de Independência da Escócia (1296–1328)",
    hook: "Em dois dias de junho, lanceiros a pé escoceses derrotaram o maior exército inglês que já tinha invadido a Escócia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A guerra entre Inglaterra e Escócia já durava quase vinte anos. Começou em 1296, quando Eduardo I da Inglaterra quis submeter os escoceses. Os ingleses venceram em Dunbar e tomaram Berwick nesse mesmo ano. Em 1297, os escoceses ganharam em Stirling Bridge. Em 1298, Eduardo I voltou a vencer, em Falkirk, e por volta de 1304 a Escócia parecia conquistada. Mas em 1306 Robert Bruce se apoderou do trono escocês e a guerra recomeçou. Eduardo I morreu em 1307, e o filho, Eduardo II, não tinha a mesma firmeza.",
        "O castelo de Stirling, sobre uma rocha junto ao rio Forth, era uma peça-chave: controlava o caminho para o norte, rumo às Terras Altas. Em 1313, Bruce exigiu que os escoceses ainda leais ao rei deposto John Balliol o aceitassem como rei, sob pena de perder suas terras, e exigiu também a rendição de Stirling, que estava em mãos inglesas. Em 1314, seu irmão Edward Bruce cercou o castelo.",
        "O comandante inglês, sir Philip Moubray, fez então um acordo: se o castelo não fosse socorrido até o meio do verão, ele o entregaria. O prazo costuma ser dado como 24 de junho de 1314 (as fontes divergem sobre quando o acordo foi fechado). Na prática, isso fez de Stirling o lugar da batalha: Bruce sabia por onde os ingleses teriam de passar.",
        { h: "O caminho até Bannockburn" },
        { timeline: [
          ["1296", "Os ingleses vencem em Dunbar e tomam Berwick. Começa a guerra."],
          ["1297", "Os escoceses vencem em Stirling Bridge."],
          ["1298", "Eduardo I vence em Falkirk."],
          ["1306", "Robert Bruce toma o trono da Escócia. A guerra recomeça."],
          ["1313", "Bruce exige a rendição de Stirling e a lealdade dos escoceses que ainda apoiam Balliol."],
          ["1314", "Edward Bruce cerca Stirling. Eduardo II reúne um grande exército para socorrer o castelo."],
          ["23 e 24 de junho de 1314", "A batalha."]
        ]},
        "Eduardo II pediu à Inglaterra, ao País de Gales e à Irlanda 2.000 cavaleiros de armadura e 13.000 soldados a pé. Calcula-se que no máximo metade da infantaria tenha aparecido, mas ainda assim foi o maior exército inglês que já invadiu a Escócia. Para chegar a tempo, marchou cerca de 110 km (70 milhas) em uma semana, e os homens e os cavalos chegaram cansados e famintos. Muitos historiadores criticam essa pressa."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Robert Bruce, rei dos escoceses, 39 anos" },
        "Conde de Carrick, tinha lutado ao lado de William Wallace e sido um dos guardiões da Escócia em 1298. Em 1306, tomou o trono. Tinha fama de coragem física e liderava na frente, o que lhe rendia o respeito dos soldados. Em Bannockburn, usou os [[schiltrons|schiltron]] de um jeito novo: Wallace os usava para se defender, e Bruce, que os treinara para isso, os mandou atacar.",
        { h: "Eduardo II da Inglaterra, 30 anos" },
        "Subiu ao trono em 1307, depois da morte do pai. Não tinha a determinação de Eduardo I. Em 1314, queria socorrer Stirling a qualquer custo, e a pressa dele custou o descanso do exército.",
        { h: "Os outros nomes" },
        "Do lado escocês, comandavam os schiltrons Edward Bruce, irmão do rei; Thomas Randolph, conde de Moray, sobrinho dele; e, juntos, James Douglas e o jovem Walter Stewart (na prática, quem mandava era Douglas). Angus Og MacDonald trouxe milhares de homens das ilhas do oeste, incluindo [[galloglass]], e recebeu o lugar de honra ao lado do rei. Sir Robert Keith, o marechal, comandava os 500 cavaleiros.",
        "Do lado inglês, Gilbert de Clare, conde de Gloucester, tinha cerca de 23 anos e era sobrinho do rei. Humphrey de Bohun, conde de Hereford, dividia com ele o comando da primeira força de cavalaria. Robert Clifford e Henry de Beaumont comandavam uma segunda. Aymer de Valence, conde de Pembroke, e sir Giles d'Argentan, que se dizia o terceiro melhor cavaleiro da Europa, protegeram o rei na fuga."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os escoceses eram cerca de 7.000, com no máximo 500 a cavalo; as fontes dão de 5.000 a 8.000. Lutavam a pé, com lanças, machados e espadas, e havia poucos arqueiros. Os ingleses eram bem mais numerosos: os historiadores estimam que os escoceses enfrentaram de 1,5 a 3 vezes mais homens, e a faixa citada para o total inglês vai de 20.000 a 25.000. O ponto forte da Inglaterra era a cavalaria de armadura.",
        { note: "Os números de Bannockburn variam muito de livro para livro. O que se pode dizer com segurança é que os ingleses eram bem mais numerosos, e que a distância entre as duas faixas (5.000 a 8.000 contra 20.000 a 25.000) é grande." },
        { h: "O terreno" },
        "Bruce escolheu o New Park, uma área plana cercada de mata, ao sul de Stirling. A mata o protegia da cavalaria. Havia riachos, em especial o Bannock Burn, e terreno alagado em volta. O lugar exato da batalha é discutido: a maioria dos historiadores acha que o local tradicional do primeiro dia, onde ficam o centro de visitantes e a estátua, não é o certo. Para o segundo dia, os candidatos são o Dryfield e o Carse de Balquhiderock (o Wetfield), que o National Trust for Scotland considera o mais provável.",
        { h: "Primeiro dia: o machado de Bruce" },
        { formation: true },
        "Na manhã de 23 de junho, ainda não era certo que haveria batalha. Os ingleses seguiam para Stirling. Gloucester e Hereford passaram o Bannock Burn com uma força de cavalaria e se aproximaram da mata. Henry de Bohun, sobrinho de Hereford, viu Bruce, que estava só com uma pequena montaria, armadura leve e um machado de guerra. Bohun o atacou com a lança. Bruce se desviou e rachou a cabeça dele com o machado, na frente dos dois exércitos, segundo a versão mais conhecida. A Vita Edwardi Secundi, uma crônica inglesa, conta diferente: Bohun perseguia escoceses que pareciam fugir e foi surpreendido por Bruce quando tentava voltar.",
        "Os escoceses então atacaram a força de Gloucester e Hereford, que recuou para o outro lado do riacho. Ao mesmo tempo, Clifford e Beaumont, com cerca de 300 [[homens de armas|homem de armas]], contornavam a mata pelo lado do rio Forth. Thomas Randolph saiu da mata com seu schiltron e marchou pelo campo aberto ao encontro deles. Thomas Gray, cujo filho, também Thomas Gray, escreveu o relato dessa cena, carregou contra os escoceses. Seu cavalo foi morto nas lanças e ele foi capturado, e sir William Deyncourt morreu. O esquadrão inglês foi destroçado.",
        { h: "A noite" },
        "O grosso do exército inglês passou o Bannock Burn e acampou numa planície de brejo, entre o riacho e o Forth, abatido e sem confiança. Durante a noite, o escocês Alexander Seton, que servia no exército inglês, fugiu para o lado de Bruce e contou que o moral dos ingleses estava baixo, que os escoceses podiam vencer. Bruce decidiu atacar no dia seguinte.",
        { h: "Segundo dia: os schiltrons em marcha" },
        "Ao amanhecer de 24 de junho, Eduardo II se surpreendeu ao ver os lanceiros escoceses saírem da mata e avançarem. Quando chegaram perto, eles pararam e se ajoelharam para rezar. Eduardo teria dito: 'Eles pedem misericórdia!' e um de seus homens respondeu que pediam a Deus, não a ele, e que iam vencer ou morrer. É um diálogo que a tradição conta, difícil de confirmar.",
        "Gloucester tinha brigado com Hereford sobre quem comandaria a vanguarda e tentado convencer o rei a adiar a batalha. O rei o acusou de covardia. Para provar o contrário, Gloucester atacou com poucos homens, foi cercado e morreu.",
        "Aos poucos, os schiltrons foram empurrando e desgastando os ingleses. Os arqueiros ingleses foram mandados parar de atirar para não acertar os próprios homens. Quando tentaram cercar os escoceses pelo flanco, foram dispersados pelos 500 cavaleiros de Keith. A cavalaria inglesa, apertada contra o Bannock Burn, não tinha espaço para manobrar e perdeu a formação.",
        "Valence e Giles d'Argentan viram que a batalha estava perdida e que o rei precisava ser salvo. Agarraram as rédeas do cavalo de Eduardo e o levaram embora, seguidos por cerca de 500 cavaleiros da guarda real. Depois de deixar o rei em segurança, d'Argentan se despediu, voltou e foi morto: ele dizia nunca ter fugido de uma batalha, segundo a tradição.",
        { h: "A fuga" },
        "Eduardo foi primeiro para o castelo de Stirling, mas Moubray fechou-lhe as portas, porque o castelo estava prestes a ser entregue aos escoceses. Perseguido por James Douglas e um pequeno grupo, o rei seguiu para o castelo de Dunbar e de lá embarcou para Berwick. O resto do exército tentou voltar para a fronteira, a 140 km (90 milhas) ao sul, e muitos foram mortos pelos perseguidores ou pelos moradores das regiões por onde passaram. Os soldados galeses de sir Maurice de Berkeley se mantiveram unidos e a maioria chegou a Carlisle."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas inglesas foram enormes, e os números variam. O cronista Thomas Walsingham fala em 700 homens de armas mortos e outros 500 poupados para resgate. Para a infantaria, o historiador Peter Reese estima que não mais de um terço tenha voltado: de uns 16.000 soldados a pé, cerca de 11.000 teriam morrido. Outras estimativas para os infantes ingleses mortos começam em 4.000. Entre os mortos estavam Gloucester, Clifford e d'Argentan; entre os capturados, Hereford. Os escoceses perderam pouco: segundo Reese, só dois cavaleiros morreram.",
        "Stirling se rendeu a Bruce, que mandou arrasar o castelo para que os ingleses não o retomassem. O castelo de Bothwell, onde nobres ingleses, incluindo Hereford, tinham se refugiado, também se rendeu. Dunbar e Jedburgh foram tomados. Em 1315, só Berwick continuava fora do controle de Bruce. Em troca dos nobres capturados, Eduardo II soltou a mulher de Bruce, Elizabeth de Burgh, suas irmãs Christina e Mary, sua filha Marjorie e o bispo Robert Wishart, de Glasgow, que estavam presos na Inglaterra havia oito anos.",
        { h: "Por que importa" },
        "A vitória abriu o norte da Inglaterra às incursões escocesas e permitiu a invasão escocesa da Irlanda. A guerra só terminou em 1328, com o Tratado de Edimburgo–Northampton, em que a Inglaterra reconheceu a independência da Escócia e Robert Bruce como seu rei legítimo. Bruce morreu em 1329.",
        "Para o historiador W. M. Mackenzie, Bannockburn, depois de Falkirk e de Courtrai (1302), mostrou que uma infantaria bem conduzida podia vencer a cavalaria de armadura, em que se apoiava toda a guerra até então. Segundo ele, os derrotados aprenderam a lição depressa e a aplicaram à sua maneira. É uma interpretação, e não a única: outro historiador, Herbert Maxwell, destaca que a batalha barrou o caminho de Eduardo até Stirling.",
        { h: "Curiosidades e controvérsias" },
        { note: "O lugar: ninguém sabe exatamente onde a batalha aconteceu. O monumento e a estátua de Bruce, de Pilkington Jackson, ficam no local tradicional, que a maioria dos historiadores hoje considera errado para o primeiro dia." },
        { note: "A cavalaria escocesa: costuma ser chamada de 'leve', mas isso parece ser um erro de leitura do poeta John Barbour. Eram homens de armas, em cavalos mais leves que os dos ingleses." },
        { note: "As fontes: os relatos vêm de poucos cronistas, como o poeta escocês John Barbour (The Brus), o inglês Thomas Gray (Scalacronica), a Vita Edwardi Secundi, a Lanercost Chronicle e Thomas Walsingham. Cada um conta a história do seu lado, e os números de mortos devem ser lidos com cautela." }
      ]}
    ]
  },

  crecy: {
    war: "Guerra dos Cem Anos, campanha da Normandia e de Calais (1346–1347)",
    hook: "Num fim de tarde de agosto, a flor da cavalaria francesa se lançou onda após onda contra uma colina onde os ingleses esperavam de pé e descansados.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Guerra dos Cem Anos começou em 24 de maio de 1337, quando o Grande Conselho de Filipe VI da França decidiu retomar as terras francesas de Eduardo III da Inglaterra. Eduardo, por parte de mãe, reivindicava o trono francês. Em 1328, os nobres franceses tinham preferido Filipe de Valois. Em 1340, a esquadra francesa foi destruída em Sluys, e por isso a guerra passou a ser travada em terra.",
        "Em 1346, Eduardo desembarcou na Normandia e iniciou uma [[cavalgada]] pelo norte da França. Os ingleses saquearam cidades pelo caminho.",
        { h: "O caminho até Crécy" },
        { timeline: [
          ["12 de julho de 1346", "Eduardo III desembarca em Saint-Vaast-la-Hougue, na Normandia."],
          ["26 de julho", "Os ingleses tomam Caen à força e capturam o condestável da França, Raoul, conde de Eu."],
          ["12 de agosto", "Chegam a Poissy, a cerca de 3 km de Paris. Depois, viram para o norte, queimando a ponte."],
          ["Noite de 24 de agosto", "Atravessam o vau de Blanchetaque, no rio Somme, e derrotam cerca de 3.500 franceses que o guardavam."],
          ["26 de agosto", "A batalha de Crécy."]
        ]},
        "Os franceses tinham devastado a região, para que os ingleses não achassem comida, e Filipe chegou ao Somme um dia antes de Eduardo, mandando guardar todas as pontes e vaus. Os ingleses estavam famintos e esgotados. Depois de atravessar em Blanchetaque, descobriram que a ajuda que esperavam tinha falhado: os flamengos desistiram do ataque e os navios que deviam esperá-los em Crotoy não estavam lá. Eduardo decidiu lutar com o que tinha e preparou uma posição defensiva em Crécy-en-Ponthieu."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Eduardo III da Inglaterra, 33 anos" },
        "Rei desde os 14 anos, viria a ser conhecido por seus sucessos militares. Em Crécy, escolheu um terreno em que os franceses teriam de atacar morro acima, contra homens de armas a pé e arqueiros nos flancos, e esperou.",
        { h: "O Príncipe de Gales, 16 anos" },
        "O filho mais velho, Eduardo, depois chamado de Príncipe Negro, nascido em 15 de junho de 1330, comandou a [[vanguarda]], ajudado pelos condes de Northampton e de Warwick. No meio da luta, chegou a ser derrubado de joelhos.",
        { h: "Filipe VI da França, cerca de 53 anos" },
        "Reuniu um dos maiores exércitos já vistos na França, mas estava sem o [[condestável]], que fora capturado em Caen e era quem normalmente organizava as tropas. Seu plano era usar os besteiros para abalar a infantaria inglesa e, em seguida, lançar a cavalaria sobre ela. Os historiadores modernos acham que era um plano razoável, que tinha dado certo contra outros exércitos.",
        { h: "Os outros nomes" },
        "Do lado francês, os besteiros genoveses ficaram sob Antonio Doria e Carlo Grimaldi. Charles, conde de Alençon, irmão do rei, comandava a primeira linha de cavalaria, junto do cego João de Luxemburgo, rei da Boêmia, de 50 anos. Depois vinham o duque da Lorena e o conde de Blois. Do lado inglês, o conde de Arundel comandava uma das divisões."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os ingleses eram, segundo os historiadores modernos, entre 7.000 e 15.000. O historiador Andrew Ayton calcula cerca de 14.000: 2.500 homens de armas, 5.000 arqueiros de [[arco longo]], 3.000 soldados de cavalaria leve e 3.500 lanceiros. Clifford Rogers chega a 15.000, e Jonathan Sumption, pela capacidade dos navios, a 7.000–10.000. Quase todos eram ingleses e galeses. Até mil eram criminosos condenados, que lutavam na promessa de perdão. Cada arqueiro recebeu, de manhã, duas aljavas a mais, num total de 72 flechas.",
        "Os franceses eram mais numerosos, e o número é ainda mais incerto, porque os registros financeiros da campanha se perderam. Os dois cronistas que dão totais falam em 72.000 ou 120.000 homens, o que os historiadores consideram exagero. As estimativas atuais falam em cerca de 8.000 homens de armas a cavalo, entre 2.000 e 6.000 besteiros genoveses contratados e uma massa de infantaria de número desconhecido. Rogers diz que eles eram no mínimo o dobro dos ingleses, talvez o triplo.",
        { h: "O terreno e a posição inglesa" },
        "Eduardo escolheu uma encosta voltada para sudeste, quebrada por bosques e terraços. A esquerda ficava apoiada em Wadicourt, a direita no povoado de Crécy e no rio Maye, o que dificultava o cerco. Os ingleses cavaram covas diante das linhas para atrapalhar a cavalaria, instalaram armas de pólvora primitivas, entre elas [[bombardas|bombarda]], e puseram a bagagem em círculo, atrás.",
        "O exército se dividia em três 'batalhas': a do Príncipe, com 800 homens de armas, 2.000 arqueiros e 1.000 soldados a pé, entre eles lanceiros galeses; a de Arundel, à esquerda, com 800 homens de armas e 1.200 arqueiros; e a reserva, com o próprio rei, 700 homens de armas e 2.000 arqueiros. Esses números por divisão não são plenamente confirmados. Em cada divisão, os homens de armas ficavam no centro, a pé, com lanceiros atrás e arqueiros nos flancos e na frente, alguns escondidos em bosques ou deitados no trigo. Os ingleses estavam ali desde o amanhecer e tinham descansado e comido. Os franceses tinham marchado cerca de 19 km (12 milhas).",
        { h: "A batalha em dez movimentos" },
        { formation: true },
        "Por volta do meio-dia de 26 de agosto, batedores franceses avistaram os ingleses. Na coluna francesa, os besteiros iam à frente, seguidos pela cavalaria de Alençon, depois a da Lorena e de Blois, e por último Filipe. À medida que a notícia chegava de que os ingleses tinham parado para lutar, a coluna se apressou e perdeu a ordem: os cavaleiros ultrapassaram a infantaria e as carroças.",
        "Um conselho de guerra aconselhou atacar só no dia seguinte, mas o ataque começou ainda naquela tarde. Os relatos não deixam claro se foi decisão de Filipe ou se os cavaleiros se adiantaram contra a vontade dele. Os franceses desfraldaram o [[oriflamme]], o que significava que não haveria prisioneiros.",
        "Uma chuva forte caiu e os arqueiros ingleses desarmaram os arcos. Um cronista da época, seguido por alguns historiadores, diz que a chuva afrouxou as cordas das bestas genovesas. Outros dizem que as cordas estavam protegidas com couro e que a chuva atrapalhou os dois lados da mesma forma.",
        "Os genoveses trocaram tiros com os arqueiros ingleses. O arco longo alcançava mais longe e atirava mais de três vezes mais rápido. Os besteiros estavam sem os [[paveses|pavês]], que tinham ficado com a bagagem francesa, e o barro atrapalhava a recarga. Um estudo recente conclui que atiraram talvez duas salvas e recuaram antes de a troca de tiros realmente começar. Os cavaleiros franceses que vinham atrás, enfurecidos, atacaram os genoveses em fuga. As bombardas inglesas dispararam, aumentando a confusão, mas as fontes não concordam sobre quantos mortos fizeram.",
        "Então a divisão de Alençon atacou. A carga foi desordenada, porque tinha de passar pelos genoveses em fuga, subir uma encosta enlameada e cair nas covas. Os arqueiros, provavelmente, guardaram flechas até que pudessem atravessar a armadura, a uns 80 metros. Os cavalos dos franceses não tinham armadura e muitos foram mortos ou feridos, derrubando os cavaleiros e atrapalhando os seguintes. Quando chegou aos homens de armas ingleses, a carga já tinha perdido a força. Alençon morreu.",
        "Novas formações francesas repetiram a carga, agora por cima de montes de cavalos e homens mortos. A luta corpo a corpo foi terrível. Em certo momento, o Príncipe de Gales foi derrubado de joelhos, e o rei mandou uma parte da reserva para ajudar. O número de cargas francesas é discutido, e elas continuaram até a noite. Em uma delas, o conde de Blois fez seus homens desmontarem e foi morto. O cego João da Boêmia amarrou as rédeas do cavalo às dos seus acompanhantes e galopou para a luta: todos foram derrubados e mortos.",
        "Filipe entrou na luta, teve dois cavalos mortos sob ele e foi atingido por uma flecha no maxilar. O portador do oriflamme caiu, e o estandarte foi capturado. Perto da meia-noite, o rei deixou o campo e o exército francês se dispersou. Os ingleses dormiram onde tinham lutado. Na manhã seguinte, forças francesas que ainda chegavam foram atacadas pelos homens de armas ingleses, agora a cavalo, e perseguidas por quilômetros. O duque da Lorena estava entre os mortos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas foram muito desiguais. A contagem feita depois da batalha deu cerca de 40 ingleses mortos, entre eles três ou quatro homens de armas. Alguns historiadores modernos acham pouco e falam em cerca de 300. Os arautos ingleses contaram 1.542 homens de armas franceses nobres mortos, e mais de 2.200 brasões foram levados como despojo. Ninguém contou os soldados comuns. Jean Le Bel fala em 15.000 a 16.000, Froissart em 30.000 mortos ou capturados; o historiador Alfred Burne chutou 10.000 de infantaria, e diz que é um palpite. No segundo dia, os franceses mortos eram de 2.000 a 4.000, e o próprio Eduardo III falou em 4.000. Entre os mortos estavam um rei (João da Boêmia), nove príncipes, dez condes, um duque, um arcebispo e um bispo.",
        { h: "Por que importa" },
        "Para o historiador Clifford Rogers, uma vitória total inglesa; para Jonathan Sumption, uma catástrofe política para a coroa francesa. A notícia chegou ao Parlamento inglês em 13 de setembro. Eduardo foi cercar Calais em 4 de setembro de 1346, e a cidade caiu depois de cerca de onze meses, em 3 de agosto de 1347: Filipe chegou a marchar para socorrê-la, em julho de 1347, mas recuou sem lutar. Os ingleses ficaram com Calais até 1558. A batalha mostrou a força do arco longo no Ocidente europeu, e arqueiros ingleses e galeses passaram a servir como mercenários na Itália e até na Hungria.",
        { h: "Curiosidades e controvérsias" },
        { note: "As esporas do príncipe: uma tradição conta que Eduardo III, avisado de que o filho estava em apuros, recusou-se a mandar ajuda para dar ao rapaz a chance de 'ganhar suas esporas', embora o Príncipe já fosse cavaleiro. Outros relatos dizem que o rei mandou uma parte da reserva. As duas versões não são fáceis de conciliar." },
        { note: "Quantas cargas? Costuma-se ler que foram umas quinze ou dezesseis, mas os historiadores modernos dizem que o número é discutido." },
        { note: "O alcance do arco: não há acordo. Alguns dizem mais de 300 metros; outros, no máximo 200. Um estudo de 2017 concluiu que flechas de ponta pesada atravessavam placas de armadura a 225 metros, mas de forma superficial." },
        { note: "As baixas inglesas: o número oficial de cerca de 40 mortos é contestado, e só dois ingleses mortos foram identificados pelo nome." }
      ]}
    ]
  },

  poyang: {
    war: "Rebelião dos Turbantes Vermelhos e queda da dinastia Yuan (1351–1368)",
    hook: "Num dos maiores lagos de água doce da China, barcos em chamas decidiram quem governaria o país depois dos mongóis.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em meados do século 14, a China era governada pela dinastia mongol [[yuan]], e o governo estava podre. Em 1351 começou a rebelião dos [[turbantes vermelhos]], que se espalhou pelo país. No vale médio e baixo do rio Yangtzé, três chefes rebeldes se firmaram: Chen Youliang, que se proclamou imperador do reino de Han, com base em Wuchang e depois em Jiangzhou (a atual Jiujiang); Zhu Yuanzhang, em Yingtian (a atual Nanjing); e Zhang Shicheng, em Pingjiang (a atual Suzhou). Como os territórios eram vizinhos, a guerra entre eles era só questão de tempo.",
        "Chen era de uma família de pescadores (as fontes divergem sobre o sobrenome de nascimento). Em 1357, matou Ni Wenjun e tomou suas tropas, e em 1360 matou o líder dos rebeldes, Xu Shouhui, e se declarou imperador. Nesse mesmo ano atacou Zhu perto de Nanjing, mas a maré baixou e deixou seus navios grandes encalhados, e ele foi derrotado. Já Zhu era filho de camponeses. Aos 16 anos perdeu os pais e um irmão numa epidemia, viveu como monge noviço e pedinte, e em 1352 se uniu aos Turbantes Vermelhos. Tomou Nanjing em 1356.",
        { h: "O caminho até o lago" },
        { timeline: [
          ["1351", "Começa a rebelião dos Turbantes Vermelhos."],
          ["1360", "Chen Youliang se declara imperador e é derrotado por Zhu perto de Nanjing."],
          ["Início de 1363", "Zhu leva suas tropas principais para o norte, contra Zhang Shicheng. Chen aproveita."],
          ["Abril de 1363", "Chen cerca Nanchang, que guarda a entrada do lago Poyang."],
          ["24 a 29 de agosto", "A frota de Zhu chega a Hukou, a saída do lago, socorre Nanchang e encontra a frota de Chen."],
          ["30 de agosto a 4 de outubro", "A batalha."]
        ]},
        "Com Zhu longe, Chen viu a chance de virar o jogo. Queria tomar Nanchang, que guardava a entrada do lago Poyang e do caminho para Nanjing, e fazer com que os chefes locais de Jiangxi se juntassem a ele. A guarnição, em que as fontes citam o sobrinho de Zhu, Zhu Wenzheng, e o general Deng Yu, aguentou o cerco, em parte graças aos canhões. Segundo uma fonte, um pescador furou o bloqueio num barquinho e avisou Zhu em Nanjing, a cerca de 560 km."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Zhu Yuanzhang, 34 anos" },
        "O ex-monge que virou general. Em 1363 já era o senhor de Nanjing e se chamava duque de Wu. Mais tarde, em 1364, declarou-se rei de Wu. Em 1368, fundaria a dinastia [[ming]] e governaria como o imperador Hongwu. Em Poyang, apostou em barcos menores e mais rápidos e em armas de fogo e incendiárias, e organizou sua frota em 11 esquadrões. A ordem era se aproximar do inimigo, usar primeiro armas de pólvora, depois arcos e bestas, e só no fim as armas de curto alcance.",
        { h: "Chen Youliang, perto dos 44 anos" },
        "Nascido por volta de 1320, tinha se tornado um senhor da guerra poderoso, com a frota mais forte do alto Yangtzé. Seus [[navios-torre|navio-torre]] eram fortalezas flutuantes. Em 1360 e de novo em 1363, seus navios grandes encalharam quando a água baixou.",
        { h: "Os outros nomes" },
        "Guo Xing aconselhou Zhu a usar o fogo e os trabucos. Do lado de Chen, os irmãos Chen Youren e Chen Yougui, e o general Chen Puluo, morreram na batalha. O general Zhang Dingbian escapou para Wuchang levando o jovem Chen Li, segundo filho de Chen."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números das fontes são enormes e não batem. Para Chen, falam em 650.000 homens, 600.000 ou 300.000. Para Zhu, em 200.000 ou 100.000. O historiador Tonio Andrade, segundo o resumo de um podcast sobre a história chinesa, calcula que cerca de meio milhão de pessoas e várias centenas de navios tenham participado ao todo. Mesmo metade disso já seria muito, mas esses números de crônica não são contagens exatas. Em todas as versões, os homens de Zhu eram bem menos numerosos que os de Chen.",
        "Chen tinha mais de cem navios, entre eles os navios-torre de três andares com laterais blindadas, de onde se podiam jogar pedras nos barcos baixos de Zhu. Zhu tinha barcos menores, mais rápidos, com armas de fogo e incendiárias: bombas de fogo, lanças e flechas de fogo, foguetes e uma arma chamada 'Sem Alternativa', uma esteira de junco cheia de pólvora pendurada no mastro da frente, segundo uma fonte Ming. Ainda assim, os canhões e as armas de fogo não foram decisivos: o que ganhou a batalha foram as armas incendiárias.",
        { h: "Do primeiro choque ao cerco" },
        { note: "As fontes não batem dia a dia: contam o desenrolar em ordem diferente, e as datas variam entre calendário chinês e gregoriano. O que segue é o que os relatos têm em comum." },
        "A frota de Zhu chegou a Hukou em 24 de agosto e socorreu Nanchang em 28 de agosto. Em 29 de agosto, Chen navegou para o norte, e as frotas se encontraram. Em 30 de agosto, Zhu organizou a frota em 11 esquadrões. [[Trabucos|trabuco]] navais atiraram bombas incendiárias, e mais de vinte navios de Chen pegaram fogo. Mas a nau capitânia de Zhu também pegou fogo e encalhou num banco de areia, e os navios de Chen empurraram os rebeldes de Zhu para águas rasas. Um novo ataque corpo a corpo falhou, com muitas baixas. Segundo o relato chinês, Zhu ficou em desvantagem por três dias, e sua nau quase foi capturada. Barcos da guarda de Zhu chegaram e o tiraram de lá.",
        "No dia seguinte (ou, segundo a versão chinesa, no quarto dia), a luta virou. Segundo uma versão, o vento mudou a favor de Zhu, que mandou [[brulotes|brulote]] contra a frota inimiga e destruiu centenas de navios. Segundo a outra, Zhu seguiu o conselho de Guo Xing e usou fogo e trabucos, que queimaram cerca de vinte navios-torre, e pelo menos 25.000 homens de Chen morreram. Nessa versão, os homens de Chen mataram prisioneiros de Zhu diante das linhas, o que deixou os soldados de Zhu sem escolha além de lutar até o fim.",
        "Em 2 de setembro, as frotas lutaram de novo, e, mesmo menores, os barcos de Zhu isolaram e destruíram navios grandes de Chen, que se retiraram. Com o outono, o nível da água baixou, segundo o relato chinês, e os navios pesados de Chen, que calavam fundo, encalharam, enquanto os leves de Zhu podiam atacar e ancorar perto da margem. Zhu bloqueou a saída do lago em Hukou e manteve o cerco por cerca de um mês, enquanto sua infantaria cercava Chen por terra.",
        { h: "A saída em Hukou" },
        "Em 4 de outubro (3 de outubro, em outra fonte), Chen, com a saída do lago fechada, tentou furar o bloqueio e voltar a Wuchang. Zhu soltou brulotes à deriva, que dispersaram a frota de Chen em grupos isolados, e a infantaria de Zhu, em terra, atirou densas nuvens de flechas. Chen morreu atingido por uma flecha na cabeça. Segundo a versão chinesa, ele tinha posto a cabeça para fora da cabine. Perderam-se, segundo a mesma fonte, outros 20.000 homens, e o resto de seu exército se dispersou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os números das perdas de Zhu aparecem como 1.346 mortos e 11.347 feridos, mas nenhum dos artigos explica de onde vêm. Do lado de Chen, perderam-se seu líder e a maior parte do exército. Chen Li, filho de Chen, que escapou para Wuchang com Zhang Dingbian, aguentou um cerco e se rendeu a Zhu em 1364 (em fevereiro ou março, conforme a fonte).",
        { h: "Por que importa" },
        "A vitória fez de Zhu o chefe rebelde mais forte e deu a ele o controle do vale do Yangtzé. Cinco anos depois, em 1368, derrubou os mongóis e fundou a dinastia Ming. Poyang é lembrada como um caso famoso de uma força menor que vence uma maior na água, e como um dos grandes combates navais da história, pelo número de homens, embora essa fama dependa de números que ninguém confirma.",
        { h: "Curiosidades e controvérsias" },
        { note: "A morte de Chen: costuma-se dizer que a flecha o acertou no olho, mas os relatos que consultamos falam só em 'cabeça' (e em flecha perdida, segundo a versão chinesa). O detalhe do olho não se confirmou." },
        { note: "Uma batalha em dois relatos: o relato em inglês e o chinês divergem em quem ganhou o quê em cada dia, em quem defendia Nanchang e até em quando Chen atacou a cidade. Quem escreve sobre Poyang precisa escolher, e nem sempre as fontes permitem." },
        { note: "Fogo, não canhão: apesar da fama de 'primeira batalha naval com pólvora', os historiadores dizem que as armas de fogo coexistiam com as incendiárias e que o que decidiu foi o fogo." }
      ]}
    ]
  },

  kulikovo: {
    war: "Conflito entre Moscou e a Horda Dourada (a partir de 1374)",
    hook: "Numa manhã de neblina, à beira do rio Don, os russos de Moscou mostraram que a Horda Dourada podia ser vencida.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois da invasão mongol do século 13, os principados russos viraram vassalos da [[horda dourada]]: cada príncipe pagava [[tributo]] e precisava da aprovação do [[cã]] para governar. Moscou, um principado em crescimento, vivia disputando território com os vizinhos.",
        "Em 1359, a Horda Dourada entrou em crise: o cã Berdi Beg foi morto e começou o que as fontes chamam de Grande Confusão. Mamai, genro de Berdi Beg e comandante militar, tomou o poder na parte oeste. Ele não era descendente de Gengis Khan, então não podia ser cã: governava por trás de cãs de fachada, e seu poder era frágil.",
        "Nesse tempo, o príncipe de Moscou, Dmitri, subira ao trono aos 9 anos, em 1359, e o metropolita Aleixo governou por ele nos primeiros anos. Dmitri manobrou, usando a força e subornos, até que em 1365 o príncipe de Níjni Novgorod desistiu do trono de Vladimir e, em 1375, forçou Tver a se submeter. O conflito aberto com Mamai começou em 1374, por motivos que as fontes não explicam bem. Segundo uma biografia de Dmitri, foi a partir daí que ele se recusou a pagar tributo a Mamai.",
        { h: "O caminho até Kulikovo" },
        { timeline: [
          ["1359", "Berdi Beg é morto. Começa a Grande Confusão na Horda Dourada. Dmitri assume o principado de Moscou, aos 9 anos."],
          ["1374", "Começa o conflito aberto entre Dmitri e Mamai."],
          ["1377", "Um destacamento de Moscou é derrotado no rio Piana. Moscou toma Bolghar."],
          ["1378", "O exército enviado por Mamai é derrotado por Dmitri no rio Vozha."],
          ["Agosto de 1380", "Dmitri reúne suas tropas em Kolomna e marcha ao encontro de Mamai."],
          ["6 de setembro", "O exército russo chega ao rio Don."],
          ["8 de setembro", "A batalha."]
        ]},
        "Em 1380, Mamai exigiu mais tributo, 'como no tempo do cã Janibeg'. Dmitri, segundo o relato mais detalhado, ofereceu pagar só o valor do acordo anterior. Mamai se aliou a Jogaila, da Lituânia, e contava com Oleg, príncipe de Riazan, embora o papel de Oleg seja às vezes contestado. Enquanto isso, a leste, Tokhtamysh, com o apoio de Tamerlão, ganhava força e queria reunir a Horda sob seu comando. Mesmo assim, em 1380 Mamai decidiu ir pessoalmente contra Moscou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Dmitri de Moscou, 29 anos" },
        "Nascido em outubro de 1350, tinha sido o primeiro príncipe de Moscou a desafiar abertamente o domínio mongol. Em Kulikovo, a tradição o põe na linha de frente. Os relatos discordam sobre seu papel: um o faz lutar à frente sem um arranhão; outro, ferido, desmaiado, achado entre os mortos. Dali em diante, passou a ser chamado de Donskoi, 'do Don'.",
        { h: "Mamai" },
        "Um chefe militar poderoso da Horda Dourada, do clã Kiyat. Por quase vinte anos mandou nos cãs de fachada. Em 1380, ainda estava lutando para manter o controle da Horda e queria reafirmar o domínio sobre os russos.",
        { h: "Os outros nomes" },
        "Vladimir Andreyevich, príncipe de Serpukhov, primo de Dmitri e chamado de 'o Bravo', e Dmitri Bobrok, cunhado do [[grão-príncipe]] (algumas fontes o chamam de Dmitri da Volínia), comandavam o regimento de emboscada. O [[boiardo]] Mikhail Brenok ficou no comando do regimento principal, sob o grande estandarte. Do lado da Horda, o campeão Temir-Murza, também chamado Chelubey, e um cã de fachada, que morreu na batalha. O campeão russo era Aleksandr Peresvet, um monge-guerreiro que a tradição diz ter sido enviado por São Sérgio de Radonezh."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Ninguém sabe quantos eram. A Crônica Expandida fala em 150.000 a 200.000 russos, o que não cabe no campo de batalha. Os historiadores foram diminuindo o número: Maslovsky, em 1881, falou em 100.000–150.000; Razin, em 1957, em 50.000–60.000; Kirpichnikov, em 1966, em no máximo 36.000; o arqueólogo Dvurechensky, em 2014, em 6.000–7.000. Estimativas modernas, como as que aparecem na Wikipédia em inglês, ficam entre 15.000 e 20.000 russos, contra até 30.000 de Mamai; a historiografia tradicional fala em 50.000 a 60.000 russos. O principal argumento para reduzir é demográfico: mesmo a Rússia do século 16 raramente juntava 30.000 a 40.000 homens de uma vez. Alguns autores criticam essa redução.",
        "Do lado de Mamai, não existe nenhuma fonte da própria Horda, e as russas só querem mostrar que os inimigos eram muitos. Ele reuniu tártaros e mercenários da Transcaucásia e das colônias genovesas da Crimeia. Seus aliados, Jogaila e Oleg, chegaram atrasados, e seus números podem ser ignorados. Do lado de Dmitri vieram tropas da maior parte do nordeste da Rússia, de parte de Smolensk e do alto rio Oka. Não vieram homens de Níjni Novgorod nem de Tver.",
        { h: "O terreno" },
        "O 'campo limpo' de Kulikovo fica perto da foz do rio Nepriadva, no Don, onde hoje é a região de Tula, na Rússia. A margem esquerda do Nepriadva era de mata fechada, e a direita, de estepe com clareiras. Ravinas com mato fechado protegiam os flancos, o que excluía qualquer ataque de surpresa pelos lados. O local exato ainda é discutido: uma equipe de Dvurechensky o situou entre o Nepriadva e o Smolka, e outro estudioso acha que era perto da nascente do Nepriadva.",
        { h: "A travessia" },
        "Em 6 de setembro, Dmitri chegou ao Don e reorganizou o exército. Num conselho, decidiu-se atravessar o rio antes que os inimigos pudessem se juntar, mesmo sabendo que isso cortava a retirada. Na manhã de 8 de setembro, no dia da festa da Natividade da Virgem, o exército atravessou o Don no meio de uma neblina espessa. Segundo a Crônica de Nikon, as pontes foram destruídas em seguida. No campo limpo perto da foz do Nepriadva, os russos se formaram, e depois os tártaros apareceram e fizeram o mesmo.",
        "O exército russo tinha seis 'regimentos': a Patrulha, a Vanguarda, a Mão Direita, a Mão Esquerda, o Grande e o de Emboscada, divididos em cerca de 23 estandartes. Em campo, estavam em várias linhas, e os nomes dos regimentos podem não corresponder à posição real. O terreno não permitia uma frente larga, e as unidades provavelmente entraram na luta aos poucos. O regimento de emboscada, de Vladimir e Bobrok, ficou escondido atrás da linha, num bosque de carvalhos.",
        { h: "O duelo e o choque" },
        "A batalha abriu com um duelo entre campeões: Peresvet e Temir-Murza. Na primeira investida, cada um matou o outro com a lança. Ficou sem resposta de quem era a vitória. Alguns historiadores acham essa cena provavelmente literária: no poema Zadonchtchina, Peresvet luta no meio da multidão.",
        "Segundo a Crônica Expandida, o grosso das forças se chocou na 'sexta hora do dia', cerca de 10h35 pelo nosso relógio. A luta corpo a corpo foi longa e brutal. Os [[tártaros]] usavam o hábito de atirar projéteis e recuar, mas o campo estreito não deixava que cercassem os russos. Mesmo assim, aos poucos, foram levando a melhor. Chegaram ao estandarte do regimento Grande, derrubaram-no e mataram Brenok. O regimento da Mão Esquerda foi virado, e parte dos recrutas de Moscou entrou em pânico. A derrota russa parecia perto, e os tártaros jogaram todas as forças.",
        "Foi então que a cavalaria do regimento de [[emboscada]] atacou de surpresa o flanco da Horda, e a linha inimiga ruiu. Homens e cavalos, cansados da longa luta, não aguentaram o golpe das tropas frescas. Os russos perseguiram os tártaros por mais de 50 km, até o rio Krasivaya Mecha.",
        { note: "Um detalhe que só aparece na Narração da Batalha com Mamai (um texto do século 16): Dmitri teria trocado de cavalo e dado seu manto e capacete a Brenok, para lutar sem ser reconhecido. Os historiadores desconfiam dessa narrativa, a menos confiável das fontes." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas russas foram muito pesadas: um terço dos comandantes dos 23 estandartes morreu. Dmitri sobreviveu, ferido, e (numa das versões) foi achado desmaiado entre os mortos. O exército vitorioso ficou seis dias 'sobre os ossos'. As perdas de Mamai são desconhecidas. O poema Zadonchtchina fala em 253.000 mortos, dado duvidoso, como quase tudo nesse poema.",
        "Jogaila voltou à Lituânia ao saber da derrota. Em Riazan, o povo atacou grupos de russos que voltavam e fez prisioneiros; Oleg fugiu, mas voltou depois e teve de aceitar Dmitri como 'irmão mais velho'. Mamai foi derrotado por Tokhtamysh no rio Kalka, perdeu os aliados e foi morto pelos homens de Tokhtamysh perto de Solkhat, no fim de 1380 ou começo de 1381 (uma outra fonte diz que em Caffa).",
        { h: "Por que importa" },
        "Quem mais lucrou foi Tokhtamysh, que reuniu a Horda. Em 1382, ele tomou e queimou Moscou e obrigou Dmitri a aceitá-lo como soberano. A vitória de Kulikovo não terminou o domínio mongol, que só acabou formalmente em 1480, no rio Ugra. Mas mostrou que Moscou tinha se tornado a força dominante no nordeste russo, e o prestígio de Dmitri cresceu. Ao morrer, em 1389, Dmitri foi o primeiro grão-príncipe a deixar o trono ao filho, Vasily I, sem consultar o cã.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: o que se sabe vem do 'ciclo de Kulikovo', textos como a Crônica, a Zadonchtchina (inspirada no Conto da Campanha de Igor) e a Narração da Batalha com Mamai. Todos têm erros ou ficção. A Narração, por exemplo, põe um encontro entre Dmitri e São Sérgio de Radonezh que quase certamente não aconteceu. Não há nenhuma fonte dos tártaros." },
        { note: "O duelo: foi pesquisado por historiadores russos, que apontam seis argumentos contra a história do duelo entre Peresvet e Temir-Murza. Mesmo assim, ela é a imagem mais famosa da batalha." },
        { note: "A arqueologia: quase não há vestígios seguros. O catálogo de Dvurechensky, de 2008, lista só algumas peças que podem ser de 1380: quatro pontas de lança, uma de dardo, fragmentos de machado, uma placa de armadura, um pedaço de cota de malha e algumas pontas de flecha. Muitas armas achadas na região são dos séculos 16 a 18." },
        { note: "Duas leituras: a tradição russa vê Kulikovo como o começo da libertação do 'jugo tártaro'. Outros dizem que a batalha não mudou tudo de imediato, mas mostrou o poder de Moscou. Um historiador, Ostrowski, argumenta que as crônicas alemãs, mais antigas, indicam que a batalha foi menos importante do que se conta." }
      ]}
    ]
  },

  aljubarrota: {
    war: "Crise de 1383–1385 (sucessão ao trono de Portugal)",
    hook: "Um exército português quase cinco vezes menor escolheu o chão, cavou covas e, numa tarde, garantiu a independência de Portugal.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em outubro de 1383, morreu o rei Fernando I de Portugal, sem filhos homens. A única filha era Beatriz, de cerca de 10 anos. Seis meses antes, em abril, Fernando tinha assinado com Juan I de Castela o Tratado de Salvaterra de Magos: Beatriz casaria com Juan, e a coroa portuguesa seria dos filhos do casal. A nobreza portuguesa temia que isso transformasse Portugal numa parte de Castela, e os grandes mercadores de Lisboa estavam furiosos por terem sido deixados de fora das negociações. Sem um herdeiro aceito por todos, Portugal ficou sem rei de 1383 a 1385, com a rainha Leonor Teles como regente.",
        "O primeiro ato de hostilidade veio em dezembro de 1383, quando o partido de D. João, Mestre da Ordem de Avis e filho natural do rei Pedro I, matou João Fernandes Andeiro, conde de Ourém, conselheiro da rainha. Os mercadores de Lisboa deram a D. João o título de 'regedor e defensor do reino'. Juan I forçou Leonor a deixar a regência.",
        { h: "O caminho até Aljubarrota" },
        { timeline: [
          ["Outubro de 1383", "Morre Fernando I. Começa a crise."],
          ["Dezembro de 1383", "O Mestre de Avis mata o conde Andeiro."],
          ["Abril de 1384", "Nuno Álvares Pereira derrota uma expedição castelhana em Atoleiros."],
          ["Verão de 1384", "Juan I cerca Lisboa por cerca de quatro meses, mas a falta de comida e a peste o fazem recuar."],
          ["6 de abril de 1385", "As [[cortes]] de Coimbra aclamam o Mestre de Avis como D. João I."],
          ["Maio de 1385", "Juan I invade Portugal com cerca de 31.000 homens. Uma coluna do norte é derrotada em Trancoso."],
          ["14 de agosto de 1385", "A batalha."]
        ]},
        "Nesse meio tempo, D. João buscou ajuda na Inglaterra. Em outubro de 1384, o rei Ricardo II escreveu a ele sobre o acordo de enviar um pequeno contingente. Na Páscoa de 1385, chegaram cerca de 200 arqueiros ingleses e uns 500 homens de armas, na maioria ingleses e gascões. Depois da invasão de maio, D. João juntou seu exército ao de Nuno Álvares Pereira, já [[condestável]], em Tomar, e os dois decidiram enfrentar os castelhanos antes que chegassem a Lisboa."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "D. João I, 28 anos" },
        "Nascido em 1357, filho natural de Pedro I, era Mestre de Avis, ou seja, chefe de uma ordem militar religiosa. Foi aclamado rei em abril de 1385. Descrito como alto e forte, lutou a pé na batalha, com um machado de guerra. Reinou 48 anos, o mais longo reinado da história de Portugal.",
        { h: "Nuno Álvares Pereira, 25 anos" },
        "Nasceu em 24 de junho de 1360, filho ilegítimo do prior do Crato, de família da velha nobreza portuguesa e galega. Foi condestável de Portugal e quem escolheu o terreno e preparou a defesa. Mais tarde se fez frade carmelita e foi canonizado, em 2009. O historiador Russell lembra que ele e Antão Vasques de Almada dominavam as novas formas de guerra: o uso combinado de arqueiros e homens de armas desmontados na defesa.",
        { h: "Juan I de Castela, 26 anos" },
        "Nascido em agosto de 1358, casara com Beatriz em 1383 e queria a coroa portuguesa para ela. Entrou em Portugal com um exército enorme e com aliados franceses. Morreu em 1390, ao cair do cavalo.",
        { h: "Os outros nomes" },
        "Do lado castelhano, as fontes citam Pedro López de Ayala. A França mandou cavaleiros, e havia aragoneses e genoveses. Alguns meios-irmãos de Nuno lutavam do lado de Beatriz."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo McMurdo, os portugueses eram cerca de 6.600: 4.000 infantes, 1.700 'lanças', 800 besteiros e 200 arqueiros ingleses. Os castelhanos eram cerca de 31.000: 15.000 infantes, 6.000 'lanças', 8.000 besteiros, mais de 2.000 cavaleiros pesados franceses e 15 morteiros. São estimativas, e o próprio total português não bate com a soma por tipo. O cronista Froissart diz que, quando os franceses atacaram, 'pelo menos vinte mil' castelhanos ficaram para trás, na planície, e não avançaram.",
        { note: "Durante muito tempo se disse que os portugueses estavam mal armados. O frei que pregou depois da batalha dizia isso, mas os historiadores atuais acham que o sermão exagerava a inferioridade para engrandecer a vitória: a nobreza portuguesa podia pagar armaduras de cavaleiro." },
        { h: "O terreno" },
        "Nuno escolheu São Jorge, entre Leiria e Alcobaça, perto de Aljubarrota: uma colina pequena, de topo plano, cercada de ribeiros e com encostas íngremes em partes. O povoado de Chão da Feira fica na parte mais larga. Pôr o exército no caminho de Lisboa obrigava os castelhanos a lutar nos termos dos portugueses, e não a cercar a capital.",
        { h: "A posição portuguesa" },
        "Por volta das 10 da manhã de 14 de agosto, o exército português tomou posição no lado norte da colina, voltado para a estrada por onde os castelhanos chegariam. A disposição era a das batalhas defensivas da época: cavaleiros desmontados e infantaria no centro, arqueiros nos flancos. Na vanguarda, a ala esquerda era formada por uns 200 jovens nobres solteiros, a 'Ala dos Namorados' (uma fonte a põe à direita). A ala direita, também de 200, era a 'Ala da Madressilva'. Na retaguarda, a reserva ficava com o próprio D. João. Cobrindo a parte de trás da posição, que depois viraria a frente, havia covas e fossos ligados e [[abrolhos]], escondidos para pegar a cavalaria. A arqueologia, a partir de 1958, achou cerca de 800 covas e dezenas de fossos.",
        { formation: true },
        "Os castelhanos chegaram por volta do meio-dia, pelo norte. Juan I viu a posição forte e decidiu não lutar nos termos dos portugueses: seu enorme exército começou a contornar a colina rumo ao lado sul, onde a encosta era mais suave. Os portugueses viraram a posição e foram para a encosta sul, e, por serem menos e terem menos terreno a cobrir, chegaram lá bem cedo. Nuno mandou abrir fossos, covas e abrolhos, aplicando as técnicas dos ingleses, já usadas em Atoleiros. Esse movimento de 'inverter a posição' aparece em vários relatos, mas os detalhes de como e quando foi feito não estão bem documentados.",
        "Por volta das 18 horas, os castelhanos estavam prontos, cansados de uma marcha que começara cedo, sob o sol de agosto. Não havia tempo para descansar.",
        { h: "O ataque francês" },
        "A iniciativa foi dos castelhanos. A pesada cavalaria francesa, aliada de Castela, atacou com tudo, para romper as linhas portuguesas. Segundo Froissart, eram uns dois mil cavaleiros. Foi um desastre: eles tinham avançado bem na frente do resto do exército, sem apoio, subiam uma encosta rumo a uma posição estreita e fortificada e eram atingidos por chuvas de flechas e virotes que matavam cavalos e confundiam os homens. Mesmo assim, como estavam muito bem armados, chegaram ao corpo a corpo com a vanguarda portuguesa, onde os homens de armas portugueses e anglo-gascões lutavam a pé. As perdas foram pesadas e o efeito do ataque, nulo. Os que não morreram foram capturados e levados para a retaguarda.",
        "Froissart diz que os castelhanos não se apressaram em ajudá-los, porque os franceses não eram muito queridos: 'que eles comecem e se cansem', teriam dito. É a versão de Froissart, e não é confirmada.",
        { h: "O grosso do exército" },
        "Quando o grosso castelhano entrou na batalha, impressionou pela ordem, pelo equipamento e pelo número. Mas, para chegar à linha portuguesa, ele tinha de passar entre os dois ribeiros que protegiam os flancos, e se desorganizou. Nuno dividiu a vanguarda em duas partes, e D. João mandou os arqueiros e besteiros recuarem e levou a reserva para o espaço aberto.",
        "Não havia homens para vigiar os prisioneiros franceses, e eles foram mortos. As fontes divergem sobre isso: numa versão, D. João mandou matá-los na hora, porque precisava de todos na frente; na de Froissart, foi o conselho de guerra que decidiu matá-los antes de o grosso castelhano chegar.",
        "Os castelhanos subiam a encosta com o sol nas costas, espremidos entre as defesas portuguesas e a própria retaguarda, debaixo de flechas dos arqueiros ingleses, atrás da linha, e de virotes das alas. Os cavaleiros do grosso tiveram de desmontar e quebrar ao meio as lanças de quatro metros para entrar na confusão ao lado da infantaria. As perdas foram altas dos dois lados, sobretudo na Ala dos Namorados, que ficou famosa por segurar os cavaleiros que tentavam cercá-la; na da Madressilva, o ataque teve mais sucesso, mas só por pouco tempo e tarde.",
        { h: "A debandada" },
        "Quando caiu o porta-estandarte real castelhano, a retaguarda, já desanimada, pensou que o rei tinha morrido e fugiu em pânico. Em pouco tempo foi uma debandada geral, em que Juan I teve de correr para salvar a vida, deixando soldados e muitos nobres a pé. Os portugueses os perseguiram colina abaixo e mataram muitos enquanto havia luz."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas portuguesas foram de menos de mil homens. As castelhanas foram de 4.000 a 5.000 mortos no campo, e talvez outros 5.000 mortos na noite e no dia seguinte pelos moradores da região. Na manhã seguinte, os corpos represavam os ribeiros em volta da colina. Morreram grandes nomes da nobreza e unidades inteiras, como a de Soria. Castela decretou luto até o Natal de 1387. D. João ofereceu aos castelhanos sobreviventes anistia e passagem livre para casa.",
        { h: "Por que importa" },
        "A vitória confirmou D. João como rei, e a Casa de Avis subiu ao trono. Em 1386, o Tratado de Windsor selou a aliança militar com a Inglaterra, que é considerada a mais antiga ainda em vigor. Em 1387, D. João casou com Filipa de Lencastre, e seus filhos incluíram o rei Duarte e o infante D. Henrique, o Navegador, que patrocinou as expedições à África. Em outubro de 1385, Nuno ainda derrotou outro exército castelhano em Valverde. Os conflitos de fronteira só acabaram com a morte de Juan I, em 1390, e Castela só reconheceu Portugal em 1411, com o Tratado de Ayllón.",
        "Em agradecimento, D. João mandou construir o mosteiro de Santa Maria da Vitória, na Batalha, onde fundou a vila de mesmo nome. Em 1393, ergueu-se uma capela onde estivera o estandarte de Nuno, o que permitiu saber o lugar exato da batalha. Em 2010, o campo de batalha foi declarado monumento nacional.",
        { h: "Curiosidades e controvérsias" },
        { note: "A padeira: a tradição diz que Brites de Almeida, a padeira de Aljubarrota, mataria sozinha sete castelhanos escondidos em seu forno. A história é lenda, mas a participação do povo no massacre dos fugitivos é considerada histórica." },
        { note: "O nome: no começo, a batalha era chamada de 'batalha real', porque os dois reis estavam no campo." },
        { note: "Duração: um relato diz que o sol se pôs 'uma hora depois do início da batalha'. Isso é difícil de conciliar com o início por volta das 18h. O tempo exato é incerto." },
        { note: "O 'quadrado': muitos livros falam de um 'quadrado' português, imitado de Atoleiros. Historiadores recentes contestam essa imagem." },
        { note: "As fontes: o cronista Fernão Lopes é a base de muitos detalhes. Froissart diz ter se baseado em testemunhas. As escavações do campo, desde 1958, ajudaram a confirmar o terreno e as defesas." }
      ]}
    ]
  },

  kosovo: {
    war: "Expansão otomana nos Bálcãs (século 14)",
    hook: "Uma batalha em que os dois chefes morreram, e nem os historiadores concordam sobre quem venceu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O imperador sérvio Stefan Dušan morreu em 1355, e o império que ele criara começou a se desfazer. O filho, Stefan Uroš V, não conseguiu segurar os nobres, que viraram quase independentes. Em 1371, os otomanos destruíram boa parte da nobreza sérvia na batalha do Maritsa, e Uroš morreu sem filhos naquele dezembro. Quem se destacou entre os senhores regionais foi o príncipe Lázaro Hrebeljanović, que governava a Sérvia do Morava, no norte do antigo império. Ele se via como sucessor da antiga dinastia Nemanjić, e a Igreja sérvia o apoiava, mas a nobreza nunca o reconheceu como senhor supremo.",
        "Do outro lado, o sultão Murad I estava no trono desde 1362, tinha feito de Adrianópolis sua capital e submetido boa parte dos Bálcãs. Obrigava os príncipes sérvios, o imperador da Bulgária e o imperador bizantino a lhe pagar tributo.",
        { h: "O caminho até Kosovo" },
        { timeline: [
          ["1371", "Os otomanos vencem os sérvios no Maritsa. Morre Stefan Uroš V."],
          ["1386", "Os otomanos são derrotados em Pločnik (a data pode ser 1387)."],
          ["1388", "Os otomanos sofrem outro revés, em Bileća."],
          ["14 de junho de 1389", "Murad I chega a Pristina, em Kosovo."],
          ["15 de junho de 1389", "A batalha."]
        ]},
        "Depois dos reveses de Pločnik e Bileća, Murad saiu de Filipópolis (a atual Plovdiv) na primavera de 1388 e seguiu por um caminho mais longo, por Ihtiman, Velbužd e Kratovo, que o levou a Kosovo, um dos grandes cruzamentos dos Bálcãs. De lá, podia atacar as terras de Lázaro ou as de Vuk Branković. Lázaro, que juntou suas tropas perto de Niš, seguiu para Kosovo quando soube que Murad tinha ido a Velbužd. Foi, segundo os historiadores, o melhor lugar que podia escolher, porque dava controle de todos os caminhos de Murad."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Murad I, cerca de 62 anos" },
        "Nascido em 1326, era chamado de Hüdavendigâr, 'o soberano'. Tomou Adrianópolis e expandiu o poder otomano pelos Bálcãs. Em Kosovo, levou o centro do exército, com os [[janízaros]] na frente.",
        { h: "O príncipe Lázaro, cerca de 60 anos" },
        "Nascido por volta de 1329, governou a Sérvia do Morava de 1371 até morrer. Reuniu uma coalizão: seus próprios homens, o contingente de seu genro Vuk Branković e tropas enviadas pelo rei Tvrtko I da Bósnia, sob Vlatko Vuković.",
        { h: "Os outros nomes" },
        "Do lado otomano, o filho mais novo de Murad, Bayezid, e o comandante Evrenoz lideraram a ala direita, de europeus; o outro filho, Yakub Çelebi, a esquerda, de anatólios. Do lado cristão, Branković comandou a direita e Vuković a esquerda, que também tinha as tropas estrangeiras. Miloš Obilić, cavaleiro sérvio, é o nome ligado à morte de Murad."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Ninguém sabe os números. Segundo os historiadores ocidentais mais citados, os otomanos eram de 27.000 a 30.000; Cox fala em 30.000 a 40.000, e Tucker em 27.000 a 40.000, até 8.500 a cavalo. Os cristãos seriam de 15.000 a 20.000 (Sedlar: de 12.000 a 20.000), 15.000 a 25.000 (Cox) ou 12.000 a 30.000 (Tucker). O cronista otomano Neşri, escrevendo no começo do século 16, falou em uns 500.000 cristãos, o dobro do exército de Murad: um número exagerado. Os janízaros eram no máximo uns 2.000. Havia cerca de 1.000 arqueiros nas alas otomanas.",
        "A coalizão cristã era sobretudo de sérvios e bósnios. Quanto ao resto, os estudiosos discordam: o único albanês que se sabe com certeza ter lutado e morrido ali é Teodor II Muzaka; talvez houvesse húngaros, búlgaros, valáquios e outros. O historiador Daniel Waley diz que quase nada pode ser dito com segurança sobre o número e a origem das tropas.",
        { note: "Não existe nenhum relato de quem esteve lá. As fontes foram escritas por pessoas com interesses políticos, religiosos e literários, e as mais antigas sérvias pesam mais na retórica religiosa do que nos fatos." },
        { h: "O terreno" },
        "Kosovo Polje, o 'campo dos melros', cerca de 5 km a noroeste da atual Pristina, em terras de Vuk Branković. Foi um dos maiores combates do fim da Idade Média.",
        { h: "O dispositivo" },
        "Do lado sérvio, Lázaro ficou no centro, Branković à direita e Vuković à esquerda. A cavalaria pesada sérvia foi para a frente, e a cavalaria leve, com arcos, para os flancos. Do lado otomano, Murad ficou no centro, com os janízaros à frente e sua guarda a cavalo atrás. Fontes otomanas dizem que ele pôs camelos na frente para assustar a cavalaria sérvia.",
        { h: "A batalha" },
        "As fontes sérvias e turcas contam coisas diferentes, e reconstituir o desenrolar é difícil. Acredita-se que a batalha tenha começado com os arqueiros otomanos atirando na cavalaria sérvia, que se preparou para o ataque em formação de cunha. A carga rompeu a ala esquerda otomana, de Yakub, mas teve menos sucesso contra o centro e a direita.",
        "Quando a carga terminou, a cavalaria leve e a infantaria leve otomanas contra-atacaram, e a armadura pesada dos sérvios virou desvantagem. No centro, os sérvios empurraram os otomanos, menos na ala de Bayezid, que aguentou a custo os bósnios de Vuković, que causaram baixas muito altas. Então Bayezid contra-atacou com ferocidade, empurrou os sérvios para trás e, mais tarde, destroçou a infantaria sérvia. Os flancos ainda resistiam, e os bósnios de Vuković foram se deslocando para o centro para tapar os buracos.",
        "Na versão considerada histórica, Vuk Branković, vendo que não havia esperança de vitória, recuou para salvar o máximo de homens depois que Lázaro foi capturado. Algum tempo depois, os bósnios e sérvios restantes também deixaram o campo.",
        { h: "A morte de Murad" },
        "Numa das primeiras versões, doze cavaleiros sérvios (os irmãos Jugović, na poesia épica) romperam a defesa otomana. Um deles, depois identificado como Miloš Obilić, fingiu desertar. Levado diante de Murad, tirou uma adaga escondida e o matou, e foi morto pela guarda. Outra versão diz que Obilić se fingiu de morto no campo e esfaqueou o sultão quando ele passou. Não se sabe quando aconteceu: algumas fontes põem o fato depois de a batalha virar contra os sérvios, outras no começo, quando Obilić queria provar sua lealdade depois de acusado de traição. Uma carta de Florença, de 20 de outubro de 1389, confirma que Murad foi morto na batalha, sem nomear o matador: fala de um de doze nobres sérvios. O italiano Mignanelli, em 1416, diz que foi Lázaro. É tido como o único sultão otomano morto em combate."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os dois exércitos ficaram arrasados, e Lázaro e Murad morreram. Para o fim de Lázaro, as fontes dão versões diferentes: algumas dizem que morreu na batalha; escritos do patriarca Danilo e de outros contemporâneos dizem que foi capturado e decapitado pelos turcos. Bayezid mandou matar seu irmão Yakub ao saber da morte do pai, e ficou como único herdeiro.",
        "Quem ganhou? Não há acordo. A maioria dos estudiosos diz que o resultado foi inconclusivo. O historiador Fine conclui que foi empate, já que os turcos também se retiraram. A corte de Tvrtko, em cartas a Trogir (1º de agosto) e a Florença, afirmaram que os otomanos tinham sido derrotados. Já o cronista otomano Neşri descreve uma grande vitória otomana. Os relatos europeus se concentraram na morte do sultão.",
        { h: "Por que importa" },
        "A Sérvia ficou sem homens para se defender, enquanto os otomanos tinham muitas outras tropas na Anatólia. Já em 1390–1391, os otomanos retomaram a ofensiva no sul da Sérvia, e a Hungria tentou avançar no norte. Os nobres sérvios se dividiram entre uma facção pró-otomana, no norte, e uma pró-húngara, no sul. Alguns continuaram lutando, outros se integraram à hierarquia otomana. A filha de Lázaro casou-se na casa de Bayezid, e o filho de Lázaro, Stefan Lazarević, virou aliado leal do sultão, lutando em Nicópolis. Os principados sérvios que ainda não eram vassalos viraram nos anos seguintes. A queda de Smederevo, em 20 de junho de 1459, marca o fim da Sérvia medieval.",
        "Os restos de Lázaro foram levados de Pristina para o mosteiro de Ravanica em 1390 ou 1391. Ele é venerado como mártir e santo, com festa em 15 de junho no calendário antigo, que cai em 28 de junho, o [[vidovdan]].",
        { h: "Curiosidades e controvérsias" },
        { note: "Vuk Branković, o 'traidor': a ideia de que ele traiu Lázaro vem da tradição oral e foi registrada por escrito em 1601, por Mavro Orbini. Os historiadores a consideram sem base. Ele lutou depois contra os otomanos em Nicópolis, e morreu prisioneiro deles. Segundo o artigo da Wikipédia em inglês, as narrativas do 'traidor' no mito de Kosovo teriam sido criadas por Stefan Lazarević." },
        { note: "A data: 15 de junho de 1389 é a data do calendário juliano. A carta de Florença dá 28 de junho, que é a data que a Sérvia celebra no Vidovdan, mas o equivalente gregoriano de 15 de junho seria 23 de junho, e não 28." },
        { note: "O mito: a lenda de Kosovo foi se formando por etapas. O ciclo de poemas épicos de Vuk Karadžić, no século 19, deu a ela a forma final, e o nacionalismo sérvio a tornou central depois do Congresso de Berlim (1878). Em 1989, no aniversário de 600 anos, Slobodan Milošević fez seu discurso em Gazimestan, no local da batalha." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  bannockburn: {
    terrain: [
      { t: "sea", x: 0, y: 61, w: 100, h: 9, l: "Riacho Bannock Burn e terreno alagado" },
      { t: "note", x: 14, y: 4, l: "Mata do New Park" },
      { t: "note", x: 86, y: 4, l: "Stirling fica ao norte" }
    ],
    units: [
      { id: "sM", s: "a", k: "inf", w: 18, h: 7, l: "Moray" },
      { id: "sB", s: "a", k: "inf", w: 18, h: 7, l: "Bruce e ilhéus" },
      { id: "sE", s: "a", k: "inf", w: 18, h: 7, l: "Edward Bruce" },
      { id: "sD", s: "a", k: "inf", w: 18, h: 7, l: "Douglas e Stewart" },
      { id: "sK", s: "a", k: "cav", w: 14, h: 4, l: "Keith, 500" },
      { id: "eG", s: "b", k: "cav", w: 16, h: 5, l: "Gloucester e Hereford" },
      { id: "eC", s: "b", k: "cav", w: 12, h: 4, l: "Clifford e Beaumont" },
      { id: "eH", s: "b", k: "cav", w: 22, h: 5, l: "Cavalaria inglesa" },
      { id: "eI", s: "b", k: "inf", w: 26, h: 5, l: "Infantaria inglesa" },
      { id: "eAr", s: "b", k: "inf", w: 14, h: 4, l: "Arqueiros" },
      { id: "eK", s: "b", k: "cav", w: 12, h: 4, l: "Rei Eduardo II" }
    ],
    steps: [
      { t: "23 de junho de 1314. Bruce espera na mata do New Park, com quatro blocos de lanceiros (schiltrons) e uns 500 cavaleiros na reserva. Os ingleses chegam cansados, com a cavalaria na frente e a infantaria atrás.",
        p: { sM: [22, 13], sB: [42, 11], sE: [62, 13], sD: [82, 11], sK: [10, 24],
             eG: [30, 50], eC: [72, 48], eH: [50, 50], eI: [48, 58], eAr: [80, 57], eK: [92, 50] } },
      { t: "Gloucester e Hereford avançam para a mata. Henry de Bohun ataca Bruce, que quase não tem armadura, e Bruce o mata com o machado.",
        p: { eG: [30, 36] } },
      { t: "Os escoceses empurram os ingleses de volta pelo riacho. Clifford e Beaumont contornam a mata, e Moray sai com seu schiltron e destroça o esquadrão deles em campo aberto.",
        p: { eG: [30, 50], eC: [66, 34], sM: [62, 27] }, x: ["eC"] },
      { t: "Noite. Os ingleses acampam na planície alagada, atrás do riacho, abatidos. O escocês Alexander Seton, que servia Eduardo II, passa para o lado de Bruce e diz que o moral inglês está baixo.",
        p: { sM: [22, 15], eG: [28, 54], eH: [48, 52], eI: [46, 58], eAr: [74, 56], eK: [86, 52] } },
      { t: "24 de junho. Ao amanhecer, os schiltrons saem da mata em formação e param para rezar. Eduardo II teria dito: 'Eles pedem misericórdia!'.",
        p: { sM: [22, 26], sB: [42, 24], sE: [62, 26], sD: [82, 24], sK: [10, 30] } },
      { t: "Gloucester, acusado de covardia pelo rei, ataca com poucos homens, é cercado e morre.",
        p: { eG: [34, 34] }, x: ["eG"] },
      { t: "Os schiltrons empurram os ingleses. Os arqueiros ingleses são mandados parar de atirar para não acertar os próprios homens; quando tentam cercar os escoceses pelo flanco, os 500 cavaleiros de Keith os dispersam.",
        p: { sM: [22, 36], sB: [42, 34], sE: [62, 36], sD: [82, 34], eAr: [78, 46], sK: [66, 46] }, x: ["eAr"] },
      { t: "A cavalaria inglesa, apertada contra o Bannock Burn, não tem espaço para manobrar e perde a formação.",
        p: { sM: [22, 42], sB: [42, 41], sE: [62, 42], sD: [82, 41], eH: [44, 55], eI: [48, 60] }, x: ["eH"] },
      { t: "Valence e Giles d'Argentan agarram as rédeas do rei e o levam embora, com cerca de 500 cavaleiros da guarda. D'Argentan volta para lutar e morre. A infantaria inglesa desmorona e foge.",
        p: { sM: [22, 48], sB: [42, 47], sE: [62, 48], sD: [82, 47], eK: [94, 36], eI: [46, 63] }, x: ["eK", "eI"] }
    ]
  },

  crecy: {
    terrain: [
      { t: "hill", x: 50, y: 15, rx: 46, ry: 13, l: "Colina de Crécy" },
      { t: "note", x: 10, y: 3, l: "Crécy e o rio Maye" },
      { t: "note", x: 90, y: 3, l: "Wadicourt" },
      { t: "note", x: 50, y: 33, l: "covas diante das linhas" }
    ],
    units: [
      { id: "eP", s: "a", k: "inf", w: 20, h: 5, l: "Príncipe de Gales" },
      { id: "eA", s: "a", k: "inf", w: 20, h: 5, l: "Arundel" },
      { id: "eR", s: "a", k: "inf", w: 20, h: 4, l: "Reserva do rei" },
      { id: "aL", s: "a", k: "inf", w: 8, h: 8, l: "Arqueiros" },
      { id: "aC", s: "a", k: "inf", w: 10, h: 6, l: "" },
      { id: "aR", s: "a", k: "inf", w: 8, h: 8, l: "Arqueiros" },
      { id: "bG", s: "b", k: "inf", w: 24, h: 3, l: "Besteiros genoveses" },
      { id: "bAl", s: "b", k: "cav", w: 24, h: 5, l: "Alençon e João da Boêmia" },
      { id: "bL", s: "b", k: "cav", w: 24, h: 5, l: "Lorena e Blois" },
      { id: "bF", s: "b", k: "cav", w: 22, h: 4, l: "Filipe VI" }
    ],
    steps: [
      { t: "26 de agosto de 1346. Os ingleses esperam no alto da colina, descansados desde o amanhecer. Em cada divisão, homens de armas a pé no centro e arqueiros nas pontas e na frente; a bagagem fica atrás. A coluna francesa chega cansada de uma marcha de uns 19 km.",
        p: { eP: [32, 20], eA: [68, 20], eR: [50, 11], aL: [14, 23], aC: [50, 24], aR: [86, 23],
             bG: [50, 46], bAl: [34, 56], bL: [66, 56], bF: [50, 64] } },
      { t: "O conselho francês aconselha esperar até o dia seguinte, mas o ataque começa ainda de tarde, com o estandarte sagrado desfraldado. Cai uma chuva forte, e os ingleses desarmam os arcos.",
        p: { bG: [50, 38], bAl: [34, 48], bL: [66, 48], bF: [50, 58] } },
      { t: "Os besteiros genoveses atiram, sem os paveses, que ficaram na bagagem, e no barro. Os arcos longos ingleses alcançam mais longe e disparam mais rápido.",
        p: { bG: [50, 32] } },
      { t: "Os genoveses fogem depois de poucas salvas, e os cavaleiros de Alençon, que vêm atrás, ainda atacam os fugitivos. As bombardas inglesas disparam.",
        p: { bG: [14, 38], bAl: [40, 40] }, x: ["bG"] },
      { t: "A carga de Alençon sobe a colina em desordem, pelo barro, tropeça nas covas e leva flechas. Os cavalos, sem armadura, caem.",
        p: { bAl: [36, 30] } },
      { t: "A carga chega aos homens de armas já sem força e é rechaçada. Alençon morre. Novas formações francesas se aproximam por cima de montes de cavalos e homens mortos.",
        p: { bAl: [36, 28], bL: [64, 40] }, x: ["bAl"] },
      { t: "Segunda onda: o corpo a corpo é feroz. O Príncipe chega a ser derrubado de joelhos, e o rei manda um destacamento da reserva para ajudar.",
        p: { bL: [40, 27], eR: [40, 15], eP: [32, 21] } },
      { t: "As cargas continuam até a noite. O conde de Blois desmonta seus homens e morre. O cego João da Boêmia amarra as rédeas do cavalo às de seus acompanhantes e galopa para a luta; todos morrem.",
        p: { bL: [60, 28] }, x: ["bL"] },
      { t: "Filipe VI entra na luta, tem dois cavalos mortos sob ele e leva uma flecha no maxilar.",
        p: { bF: [50, 34] } },
      { t: "Perto da meia-noite, Filipe deixa o campo e o exército francês se dispersa. De manhã, forças francesas que chegam são atacadas pelos homens de armas ingleses, agora a cavalo.",
        p: { bF: [50, 62], eP: [32, 34], eA: [68, 34] }, x: ["bF"] }
    ]
  },

  aljubarrota: {
    terrain: [
      { t: "hill", x: 50, y: 30, rx: 30, ry: 16, l: "Colina de São Jorge (Chão da Feira)" },
      { t: "sea", x: 14, y: 12, w: 5, h: 36, l: "" },
      { t: "sea", x: 81, y: 12, w: 5, h: 36, l: "" },
      { t: "note", x: 50, y: 47, l: "covas, fossos e abrolhos" }
    ],
    units: [
      { id: "pL", s: "a", k: "inf", w: 10, h: 4, l: "Namorados" },
      { id: "pV", s: "a", k: "inf", w: 20, h: 4, l: "Vanguarda (Nuno)" },
      { id: "pR", s: "a", k: "inf", w: 10, h: 4, l: "Madressilva" },
      { id: "pAL", s: "a", k: "inf", w: 6, h: 4, l: "" },
      { id: "pAR", s: "a", k: "inf", w: 6, h: 4, l: "" },
      { id: "pRes", s: "a", k: "inf", w: 20, h: 4, l: "Reserva (D. João)" },
      { id: "cFr", s: "b", k: "cav", w: 20, h: 4, l: "Cavalaria francesa" },
      { id: "cM", s: "b", k: "inf", w: 26, h: 5, l: "Grosso do exército" },
      { id: "cR", s: "b", k: "cav", w: 12, h: 4, l: "Retaguarda e o rei" }
    ],
    steps: [
      { t: "14 de agosto de 1385, por volta das 10h. Os portugueses tomam posição no lado norte da colina, com arqueiros e besteiros nos flancos, as duas alas de 200 jovens na vanguarda e a reserva do rei atrás. Os castelhanos ainda não chegaram.",
        p: { pL: [33, 20], pV: [50, 20], pR: [67, 20], pAL: [24, 20], pAR: [76, 20], pRes: [50, 13],
             cFr: [30, 4], cM: [62, 5], cR: [88, 6] } },
      { t: "Por volta do meio-dia, a vanguarda castelhana chega pelo norte. Juan I vê a posição forte e começa a contornar a colina, rumo à encosta sul, mais suave.",
        p: { cFr: [88, 47, 90], cM: [90, 25, 90], cR: [90, 6, 90] } },
      { t: "Os portugueses invertem a posição e vão para a encosta sul. Por serem menos, chegam bem antes. Nuno manda abrir fossos, covas e abrolhos.",
        p: { pV: [50, 36], pL: [33, 36], pR: [67, 36], pAL: [24, 36], pAR: [76, 36], pRes: [50, 29],
             cFr: [72, 60, 0], cM: [90, 42, 90], cR: [90, 18, 90] } },
      { t: "Por volta das 18h, os castelhanos, cansados da marcha sob o sol de agosto, estão prontos, no lado sul.",
        p: { cFr: [50, 58, 0], cM: [50, 64, 0], cR: [50, 68, 0] } },
      { t: "A pesada cavalaria francesa, cerca de 2.000 homens segundo Froissart, ataca morro acima, bem à frente do resto do exército, contra uma posição estreita e fortificada. Leva flechas e virotes.",
        p: { cFr: [50, 43] } },
      { t: "Os franceses chegam ao corpo a corpo com a vanguarda e quase todos morrem ou são capturados. Os prisioneiros são mortos (as fontes divergem sobre por quê e por ordem de quem).",
        p: { cFr: [50, 40] }, x: ["cFr"] },
      { t: "O grosso do exército castelhano entra tarde e se aperta entre os dois ribeiros. Nuno divide a vanguarda, e D. João manda arqueiros e besteiros recuarem e leva a reserva para o espaço aberto.",
        p: { cM: [50, 50], pAL: [28, 32], pAR: [72, 32], pRes: [50, 41] } },
      { t: "Os cavaleiros castelhanos desmontam e quebram as lanças ao meio para lutar a pé. A Ala dos Namorados segura os cavaleiros que tentam cercá-la; a da Madressilva cede, por pouco tempo.",
        p: { cM: [50, 46], cR: [50, 56] } },
      { t: "Cai o porta-estandarte real castelhano. A retaguarda acredita que o rei morreu e foge, em pânico. Juan I escapa.",
        p: { cM: [50, 52], cR: [50, 64] }, x: ["cM", "cR"] },
      { t: "Os portugueses descem a colina em perseguição e matam muitos fugitivos enquanto há luz. Na manhã seguinte, os corpos represam os ribeiros.",
        p: { pV: [50, 48], pL: [33, 48], pR: [67, 48], pRes: [50, 42], cM: [50, 58], cR: [50, 68] } }
    ]
  }
});
