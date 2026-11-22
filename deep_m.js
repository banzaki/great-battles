// In-depth battles, batch m: terek, ankara, grunwald, azincourt, orleans, tumu.
// Checked against the English Wikipedia articles (Terek River, Tokhtamysh-Timur war, Tokhtamysh, Ankara, Timur,
// Bayezid I, Stefan Lazarevic, Grunwald, Agincourt, Henry V, Orleans, Joan of Arc, Hundred Years' War, Tumu Crisis,
// Timeline of the Battle of Tumu, Wang Zhen, Esen Taishi, Emperor Yingzong), the Portuguese Wikipedia articles
// (Ancara, Grunwald, Azincourt, Cerco de Orleans), historyofwar.org (Terek River, Ankara) and the EBSCO research
// starter on Ankara, and the works those pages cite (Barker, Curry, Keegan, Sumption, Mortimer, Frost, Ekdahl,
// Nicolle, Favereau, Manz, de Heer, Twitchett and Grimm, Yazdi, Clavijo, Schiltberger, Ramsay).
// Britannica could not be opened, so it was not used.

Object.assign(GLOSSARY, {
  "grão-mestre": "O chefe supremo de uma ordem militar religiosa, como a Ordem Teutônica. Governava a Ordem como um príncipe e comandava seu exército.",
  "ordem teutônica": "Ordem de monges guerreiros nascida nas cruzadas. No século XIV dominava a Prússia e boa parte da costa do Báltico, com sede no castelo de Marienburg (hoje Malbork, na Polônia).",
  "resgate": "Pagamento exigido para soltar um prisioneiro nobre. Na Idade Média, capturar um cavaleiro rico podia valer mais do que matá-lo.",
  "bandeira": "Unidade militar da Europa central e oriental, reunida em torno de um estandarte (em polonês, chorągiew). O tamanho variava, e as crônicas não dizem quantos homens havia em cada uma.",
  "arauto": "Oficial que levava mensagens entre exércitos inimigos e reconhecia os nobres pelos brasões. Em teoria, não podia ser atacado.",
  "armagnacs": "Facção da nobreza francesa, ligada à família de Orléans, que disputou o poder com os borgonheses enquanto o rei Carlos VI era incapaz de governar. Os armagnacs apoiavam o delfim Carlos.",
  "borgonheses": "Partido do duque da Borgonha, rival dos armagnacs. Aliou-se aos ingleses depois que o duque João Sem Medo foi assassinado, em 1419.",
  "delfim": "Título do herdeiro do trono da França. Em 1429, o delfim era Carlos, que os ingleses e os borgonheses não reconheciam como herdeiro.",
  "bastilha": "Forte de madeira e terra construído por quem sitia uma cidade, para vigiar e bloquear as saídas. Em Orléans, os ingleses levantaram uma dezena delas em volta da cidade.",
  "baluarte": "Obra de defesa de terra e madeira, mais baixa que uma muralha, construída na frente de uma ponte ou de um portão para proteger a entrada.",
  "eunuco": "Homem castrado que servia na corte imperial chinesa. Alguns, como Wang Zhen, chegaram a controlar o governo por causa da proximidade com o imperador.",
  "taishi": "Título de chefe entre os mongóis oirates. Esen herdou o título do pai e acabou mandando em quase todos os mongóis.",
  "oirates": "Mongóis do oeste, que no século XV, sob o comando de Esen, se tornaram o povo mongol mais poderoso e passaram a ameaçar a China.",
  "sipahis": "Cavalaria feudal turca, formada por cavaleiros que recebiam terras em troca de serviço militar. No exército de Bayezid, muitos vinham dos principados da Anatólia.",
  "beiliques": "Pequenos principados turcos da Anatólia, governados por emires (beis). Bayezid conquistou vários, e os antigos senhores fugiram para a corte de Tamerlão.",
  "interregno otomano": "Os anos de guerra civil entre os filhos de Bayezid, depois de Ancara (1402 a 1413), até que Mehmed I reunificou o império.",
  "escudeiro": "Jovem nobre, abaixo do cavaleiro, que servia a um cavaleiro e lutava ao lado dele.",
  "emir": "Governante ou chefe militar no mundo muçulmano. Na Horda Dourada, os emires comandavam suas próprias tropas e podiam trocar de lado.",
  "despota": "Título bizantino logo abaixo do de imperador. Estêvão Lazarević o recebeu em 1402.",
  "estacas de arqueiro": "Troncos de madeira com a ponta afiada, cravados no chão inclinados para a frente, na frente dos arqueiros. Serviam para barrar a cavalaria.",
  "zafarnama": "'Livro das Vitórias', a crônica oficial de Tamerlão, escrita por Sharaf ad-Din Ali Yazdi, historiador da corte timúrida. É a principal fonte sobre as campanhas dele."
});

Object.assign(DEEP, {
  terek: {
    war: "Guerra entre Tamerlão e Tokhtamysh (1385–1395)",
    hook: "Um cã que devia o trono a Tamerlão resolveu enfrentá-lo e perdeu o que restava da Horda Dourada numa tarde na beira de um rio do Cáucaso.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século XIV, as estepes que iam do Mar Negro ao Cazaquistão eram o território da [[horda dourada]], o Estado herdeiro de Gengis Khan e de seu filho Jochi. Do outro lado, ao sul, crescia o império de Tamerlão, com capital em Samarcanda. Os dois viraram vizinhos, e a briga era questão de tempo.",
        "O curioso é que tudo começou com uma ajuda. Tokhtamysh, descendente de Jochi, perdeu o pai para um parente poderoso, o [[cã]] Urus, e fugiu. Em 1376, buscou refúgio com Tamerlão, que se recusou a entregá-lo. Tamerlão o apoiou, e por volta de 1379 Tokhtamysh foi instalado no governo de uma parte da Horda. Em 1380 tomou Sarai, a capital, e em 1381 derrotou o rival Mamai. Com isso, passou a governar as duas metades da Horda.",
        { h: "Do favor à guerra" },
        { timeline: [
          ["1376", "Tokhtamysh foge para a corte de Tamerlão. Tamerlão recusa entregá-lo ao cã Urus."],
          ["1380–1381", "Com o apoio de Tamerlão, Tokhtamysh toma Sarai e derrota Mamai. Passa a reinar sobre toda a Horda Dourada."],
          ["1382", "Cerca e saqueia Moscou (o cerco começa em 23 de agosto) e depois saqueia Riazan, na volta."],
          ["1385", "Ataca o Azerbaijão, saqueia Tabriz e volta para o norte com um grande butim. A partir daí, Tokhtamysh e Tamerlão são inimigos."],
          ["18 de junho de 1391", "Tamerlão derrota Tokhtamysh no rio Kondurcha, depois de perseguir seu exército pelas estepes."],
          ["1394–1395", "Tokhtamysh se alia ao sultão mameluco do Egito e volta a atacar o território de Tamerlão pelo Cáucaso."],
          ["Abril de 1395", "A batalha do rio Terek."]
        ]},
        "Depois da derrota em 1391, Tokhtamysh não perdeu o trono. Buscou aliados e voltou a atacar as terras de Tamerlão no Cáucaso. Segundo o relato de Yazdi no [[zafarnama]], Tamerlão ofereceu um acordo de paz a partir de seus quartéis de inverno, na costa do Mar Cáspio. Tokhtamysh quase aceitou, mas os cortesãos e generais o convenceram do contrário, e ele respondeu com uma mensagem arrogante. A guerra ficou inevitável."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Tamerlão (Timur), cerca de 59 anos" },
        "Nascido em 1336 na Transoxiana (a região do atual Uzbequistão), virou o senhor de um império que ia da Índia à Síria. Mancava de uma perna desde que foi ferido por flechas, por volta de 1363, e o apelido persa 'Timur, o Manco' deu origem ao nome 'Tamerlão' em português. Em 1395, o ataque a Tokhtamysh era uma campanha pessoal: tinha sido ele a colocá-lo no trono, e agora tratava aquilo como uma traição.",
        { h: "Tokhtamysh, cerca de 53 anos" },
        "Nascido por volta de 1342, subiu ao poder com ajuda de Tamerlão e depois resolveu se tornar o rival dele. Tinha um sucesso de peso, o saque de Moscou, mas errou duas vezes ao julgar o inimigo: em 1391 e em 1395. Depois do Terek, passou o resto da vida tentando recuperar o que tinha perdido.",
        { h: "Os outros nomes" },
        "Do lado de Tamerlão, Mirza Mohammad Sultan, um neto, comandava o centro, e Tamerlão ficava com a [[reserva]]. O xeque Nur ad-Din, segundo Yazdi, foi quem socorreu Tamerlão quando ele estava em perigo. Do lado da Horda, as fontes que consultei não dão nomes de comandantes, a não ser um chefe chamado Aktau, que teria abandonado Tokhtamysh no meio da luta, segundo embaixadores mamelucos citados por Favereau."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Não existem números confiáveis. Yazdi diz apenas que o exército de Tamerlão era tão grande que, em ordem de batalha, formava uma linha de cerca de cinco léguas de largura, do Mar Cáspio até as montanhas. Para Tokhtamysh, as fontes que li não dão nada. Os dois exércitos eram, antes de tudo, de cavalaria.",
        { note: "O número de 100.000 homens para cada lado, que costuma aparecer em resumos, não foi encontrado em nenhuma fonte para o Terek. A Wikipédia em inglês dá esse valor para Tamerlão em outra batalha, a de Kondurcha, em 1391. Para o Terek, o mais honesto é dizer que não se sabe." },
        { h: "O terreno e a travessia" },
        "O Terek corre do Cáucaso para o Mar Cáspio. Tokhtamysh esperava Tamerlão num acampamento fortificado que cobria o único vau fácil do rio. Segundo o relato do enviado espanhol Clavijo, Tamerlão subiu o rio por três dias, com a Horda seguindo pela outra margem. Na terceira noite deixou mulheres vestidas de soldados no acampamento e fez com o exército uma marcha forçada de volta ao vau, que atravessou sem que ninguém o impedisse. Yazdi conta uma versão compatível: Tokhtamysh abandonou a posição forte, recuou um pouco e reorganizou o exército. Em 21 de abril (data dada por um dos relatos), os dois exércitos já estavam do mesmo lado do rio.",
        { h: "A batalha" },
        "Os relatos que chegaram até nós são escassos e divergem em detalhes, mas dão para montar o seguinte quadro.",
        "Tamerlão formou o exército em sete corpos. Mohammad Sultan ficou no centro, duas alas nas pontas e ele mesmo com a reserva de vinte e sete companhias escolhidas.",
        "Primeiro, um forte destacamento da direita de Tokhtamysh atacou cedo a ala de Tamerlão. Tamerlão jogou a reserva na luta e os atacantes recuaram até o corpo principal, onde se reorganizaram.",
        "Segundo, uma das companhias da reserva avançou demais, esbarrou no centro de Tokhtamysh e foi repelida. A retirada virou uma pequena debandada, e Tamerlão ficou exposto, lutando corpo a corpo. Yazdi conta que o xeque Nur ad-Din chegou com cerca de cinquenta homens para defendê-lo, e outros grupos vieram atrás, incluindo a guarda do próprio Tamerlão. Depois, Mohammad Sultan trouxe homens do centro contra a direita da Horda, que recuou.",
        "Terceiro, a ala direita de Tamerlão foi pressionada e quase cercada pela esquerda de Tokhtamysh. Seus cavaleiros desmontaram para uma resistência final e só se salvaram quando chegou reforço do centro. O centro, nesse meio-tempo, teve uma luta dura, mas sem surpresas: os homens de Tokhtamysh foram empurrados para trás.",
        "Quarto, e decisivo: Tokhtamysh virou as costas e fugiu, e o exército foi atrás.",
        { note: "As fontes divergem sobre onde a luta começou. A Wikipédia em inglês, apoiada em Favereau, diz que a cavalaria de Tokhtamysh atacou o flanco direito e o centro de Tamerlão. O resumo de Yazdi, no site History of War, fala em ataque à ala esquerda no início e depois pressão sobre a direita. Também só uma das versões fala em deserções: segundo embaixadores mamelucos, o chefe Aktau deixou o campo com milhares de guerreiros, e alguns emires da Horda passaram para o lado de Tamerlão, que então derrotou a esquerda de Tokhtamysh." },
        "Não há números confiáveis de mortos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Tamerlão tentou capturar Tokhtamysh, que escapou para o norte do Volga. Em seguida, destruiu as cidades da Horda: Sarai, a capital, Astrakhan, Azov e Tana (onde o rio Don chega ao Mar Negro), além de Ukek e Majar. As colônias italianas de Sarai, Tana e Astrakhan foram destruídas. A cidade de Caffa, na Crimeia, foi poupada depois que enviados genoveses ofereceram presentes a Tamerlão. O resto da Crimeia foi devastado em agosto de 1395.",
        "Tamerlão avançou para o norte, até Yelets, e deu meia-volta. Cronistas russos explicaram isso com uma visão da Virgem Maria, segundo Crummey.",
        { h: "Por que importa" },
        "A Horda Dourada nunca recuperou a força. Edigu, um chefe poderoso da Horda, colocou Temür Qutlugh como cã por volta de 1397. Tokhtamysh fugiu para a Lituânia, onde o grão-duque Vytautas o apoiou, e perdeu em 1399 a batalha do rio Vorskla. Fugiu para o leste e foi morto por volta de 1406, perto de Tyumen, na Sibéria. Aos poucos, a Horda se dividiu em vários canatos, e o último resto foi destruído pelo Canato da Crimeia em 1502.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: a Wikipédia dá 14 de abril de 1395 no artigo da batalha e 15 de abril no da guerra, em um deles citando 15 e 16 de abril. O site History of War usa 22 de abril." },
        { note: "As fontes: quase tudo vem do Zafarnama de Yazdi, escrito na corte de Tamerlão para exaltá-lo, e do relato de Clavijo. Os relatos do lado da Horda quase não sobreviveram." }
      ]}
    ]
  },

  ankara: {
    war: "Guerra entre Tamerlão e os otomanos (1400–1402)",
    hook: "O sultão que tinha cercado Constantinopla durante oito anos foi derrotado pela sede, por uma marcha em círculo e pela deserção dos próprios aliados.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século XIV, havia dois conquistadores turcos em plena expansão. Bayezid I, chamado Yıldırım, o 'Relâmpago', era o [[sultão]] otomano. Tinha derrotado os cruzados em Nicópolis em 1396, e mantinha Constantinopla sitiada desde 1394. Tamerlão, vindo da Ásia Central, já tinha tomado a Pérsia, devastado o sul da Rússia e saqueado Délhi, na Índia, em 1398.",
        "Os dois impérios foram se tocando na Anatólia. Bayezid tinha anexado vários [[beiliques]] turcos da região, e os antigos governantes se refugiaram na corte de Tamerlão. Em troca, Bayezid recebeu em sua corte o sultão Ahmad Jalayir, inimigo de Tamerlão. Os dois trocaram cartas cheias de insultos: numa delas, Tamerlão chamou Bayezid de formiga. Em 1400 e 1401, Tamerlão conquistou vários beiliques que eram vassalos otomanos e tomou Sivas, no leste da Anatólia, a primeira confrontação direta com o império.",
        { h: "O caminho até Ancara" },
        { timeline: [
          ["1394", "Bayezid começa o cerco a Constantinopla."],
          ["1398", "Bayezid conquista beiliques da Anatólia, o que quebra um acordo com Tamerlão."],
          ["1400–1401", "Tamerlão toma Sivas e conquista terras otomanas e mamelucas."],
          ["1401–1402", "Tamerlão passa o inverno em Karabakh. Bayezid levanta o cerco de Constantinopla e reúne seu exército."],
          ["Verão de 1402", "Tamerlão marca um grande círculo pela Anatólia e chega a Ancara antes de Bayezid."],
          ["20 ou 28 de julho de 1402", "A batalha de Ancara."]
        ]},
        "Bayezid tentou forçar a batalha antes, entre Karabakh e o leste da Anatólia, mas Tamerlão o evitou. Quando Tamerlão marchou para oeste, na direção de Sivas, os conselheiros de Bayezid o aconselharam a esperar em Ancara, onde havia água boa, e deixar o inimigo vir até ele. Bayezid recusou e continuou avançando para o leste, em pleno calor de julho."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Bayezid I, cerca de 55 anos" },
        "Nascido em 1347, morreu em 1403, depois de ser capturado em Ancara. Em 1402, escolheu enfrentar Tamerlão em vez de esperar, e essa escolha foi o erro que lhe custou o império.",
        { h: "Tamerlão, cerca de 66 anos" },
        "Já era o senhor de metade da Ásia. Dessa vez, evitou o confronto até ter o melhor chão: deu a volta no exército otomano e ocupou o acampamento deles, com a água. Era um militar que raciocinava sobre logística tanto quanto sobre combate.",
        { h: "Os outros nomes" },
        "Do lado otomano, Süleyman Çelebi, filho de Bayezid, comandava a ala esquerda, com as melhores tropas. Estêvão Lazarević, sérvio, cunhado de Bayezid, comandava a direita com os cavaleiros dos Bálcãs, ao lado de seus irmãos e de outros vassalos. Mehmed Çelebi, outro filho do sultão, ficava com a [[retaguarda]]. Do lado de Tamerlão, Miran Shah (filho dele) ficava na direita, Shah Rukh (outro filho) na esquerda, e os netos na vanguarda."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia em inglês, citando David Nicolle, dá cerca de 140.000 homens a Tamerlão, na maioria cavaleiros, e 32 [[elefantes de guerra]]. Para Bayezid, no máximo 85.000, segundo Nicolle, ou entre 85.000 e 120.000, segundo Creasy (1878). O exército otomano tinha [[janízaros]], [[sipahis]] e tropas dos Bálcãs, e cerca de um quarto eram tártaros e turcomanos conquistados havia pouco tempo.",
        { note: "Esses números variam muito. O alemão Johann Schiltberger, que lutou ao lado dos otomanos, falou em mais de um milhão para cada lado. O cronista Ibn Arabshah falou em 800.000 para Tamerlão. Os historiadores modernos não aceitam esses valores, e um resumo no site History of War afirma que nenhum dos lados deveria ter mais de 20.000 homens." },
        { h: "O terreno e a água" },
        "A planície de Çubuk, perto de Ancara. A luta final foi na colina de Çatal, que domina o vale do Çubuk. Tamerlão esperava Bayezid perto da cidade, com a água. Segundo a Wikipédia em inglês, desviou o riacho Çubuk para um reservatório fora do caminho e deixou os otomanos sem água; no resumo do History of War, ele sujou a única fonte. As duas versões concordam que Bayezid chegou com o exército exausto e com sede.",
        { h: "A marcha que decidiu a batalha" },
        "Tamerlão virou para o sudoeste, seguindo o rio Kızılırmak. Depois de seis dias de marcha forçada, chegou a Kayseri, descansou quatro dias, passou por Kırşehir e avançou para noroeste até o acampamento que Bayezid tinha deixado perto de Ancara. Isso o colocou entre Bayezid e o coração do império. Bayezid teve de voltar em marcha forçada, no calor, e chegou à cidade para encontrar o inimigo descansado e com a água na mão.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, os otomanos atacaram. Os arqueiros a cavalo timúridas responderam com flechas, e vários milhares de otomanos morreram ou se renderam.",
        "Segundo, Tamerlão lançou ataques rápidos contra os flancos otomanos, começando pela esquerda, o lado de Süleyman.",
        "Terceiro, na direita, Estêvão Lazarević e seus cavaleiros sérvios contra-atacaram. Pela Wikipédia em inglês, atravessaram as linhas inimigas três vezes. Um resumo moderno (EBSCO, baseado em Nicolle) diz que o contra-ataque foi longe demais e que os sérvios ficaram desorganizados e recuaram.",
        "Quarto, e decisivo: tártaros e sipahis dos beiliques da Anatólia mudaram de lado e foram para o exército de Tamerlão. Um resumo diz que isso aconteceu nas duas alas. Muitos deles tinham sido senhores desses territórios ou soldados de antigos senhores, e foram combater ao lado dos antigos chefes. A infantaria otomana ficou exposta.",
        "Quinto, a maior parte do exército otomano fugiu. Estêvão chegou por três vezes até Bayezid e pediu que ele fugisse com ele. Bayezid recusou. Estêvão tirou do campo Süleyman, os cavaleiros sérvios e o tesouro, e foi na direção de Bursa e depois de Constantinopla. Tamerlão, segundo a Wikipédia, admirou a coragem deles.",
        "Sexto, Bayezid e os janízaros ficaram sozinhos e resistiram até o anoitecer. Ele tentou escapar com algumas centenas de cavaleiros. As fontes variam: segundo a Wikipédia em inglês, os cavaleiros de Tamerlão cercaram as montanhas e o capturaram; segundo o EBSCO, o cavalo dele tropeçou; segundo o History of War, o cavalo foi morto, e os últimos 300 homens foram alcançados."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas são incertas. A Wikipédia lista de 15.000 a 40.000 (Tucker) e de 40.000 a 50.000 (Nazeer Ahmed), sem dizer de que lado.",
        "Bayezid foi levado ao acampamento de Tamerlão. Segundo a Wikipédia, Tamerlão riu ao vê-lo e Bayezid se ofendeu; Tamerlão respondeu que o destino dá o poder aos defeituosos: a Bayezid, o torto, e a ele, o manco. Um dos filhos, Mustafa (as fontes confundem o nome com Musa), foi capturado e levado a Samarcanda. Tamerlão avançou pela Anatólia até o mar Egeu e tomou Esmirna, fortaleza dos Cavaleiros Hospitalários, no fim de 1402.",
        "Bayezid morreu no cativeiro, em 8 de março de 1403, em Akşehir.",
        { h: "Por que importa" },
        "O Império Otomano quase desabou. Os filhos de Bayezid disputaram o poder durante onze anos, o chamado [[interregno otomano]], até Mehmed I reunificar o império em 1413. Constantinopla ganhou um alívio e só cairia em 1453, cerca de meio século depois. Estêvão Lazarević foi nomeado [[despota]] pelo Império Bizantino em agosto de 1402. Tamerlão morreu em 1405, quando se preparava para invadir a China (o History of War dá 1404).",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: a Wikipédia em inglês dá 28 de julho como a mais comum, citando que alguns dão 20 de julho. A Wikipédia em português e os artigos sobre Tamerlão e Bayezid I usam 20 de julho. O History of War e o EBSCO usam 28. Não encontrei uma explicação para a diferença." },
        { note: "A gaiola de ferro: a história de que Tamerlão exibiu Bayezid numa gaiola aparece sobretudo em relatos europeus e otomanos posteriores. Testemunhas como Schiltberger, Clavijo e as fontes gregas não falam em gaiola. Os escritores da corte de Tamerlão dizem que ele foi bem tratado. Ibn Arabshah diz que foi 'preso como um pássaro', que os historiadores modernos tratam como estilo e não fato. A versão otomana de que Bayezid se matou na prisão também é discutida." },
        { note: "As fontes: Schiltberger estava lá, mas seus números são impossíveis. Os relatos mais completos vêm da corte de Tamerlão e de cronistas otomanos posteriores, com seus interesses." }
      ]}
    ]
  },

  grunwald: {
    war: "Guerra polonesa-lituano-teutônica (1409–1411)",
    hook: "Em um dia de verão de 1410, a Ordem dos monges guerreiros perdeu o grão-mestre e quase toda a sua cúpula.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A [[ordem teutônica]] se instalou na região de Chełmno, na atual Polônia, em 1230. Conquistou e converteu os povos da Prússia até a década de 1280 e depois voltou-se contra a Lituânia, que ainda era pagã, atacando suas terras durante cerca de um século, em especial a Samogícia, entre a Lituânia e a Prússia. A Samogícia passou para a Ordem, por tratado, durante a guerra civil lituana de 1381–1384, e voltou às mãos da Ordem pela Paz de Raciąż, em 1404.",
        "Em 1385, tudo mudou. O grão-duque lituano Jogaila aceitou casar com a rainha Edviges da Polônia, foi batizado e coroado rei da Polônia como Ladislau II Jagelão. Com a União de Krewo, a Polônia e a Lituânia passaram a ter o mesmo soberano. O primo dele, Vytautas, tornou-se grão-duque da Lituânia e foi o segundo no comando em Grunwald. O grão-mestre da época, Conrad Zöllner von Rothenstein, contestou a sinceridade da conversão do rei diante de uma corte papal.",
        { h: "O caminho até Grunwald" },
        { timeline: [
          ["Maio de 1409", "Revolta na Samogícia, apoiada pela Lituânia. A Polônia ameaça invadir a Prússia."],
          ["6 de agosto de 1409", "O grão-mestre Ulrich von Jungingen declara guerra. A Ordem invade a Grande Polônia e Cujávia."],
          ["8 de outubro de 1409", "O rei Venceslau media uma trégua, válida até 24 de junho de 1410."],
          ["Dezembro de 1409", "Jagelão e Vytautas combinam unir seus exércitos e marchar sobre Marienburg, a capital da Ordem."],
          ["24 a 30 de junho de 1410", "O exército cruza o rio Vístula em Czerwińsk, sobre uma ponte de barcos."],
          ["9 de julho", "Cruza a fronteira da Prússia."],
          ["15 de julho de 1410", "A batalha."]
        ]},
        "O plano dos aliados foi uma surpresa: a Ordem esperava dois ataques separados, um polonês em direção a Danzig e outro lituano em direção a Ragnit. Em vez disso, os dois exércitos se juntaram. Quando os enviados húngaros avisaram o grão-mestre, ele deixou cerca de 3.000 homens em Schwetz, sob Heinrich von Plauen, e levou o grosso do exército para defender o rio Drewenz. Em 11 de julho, depois de consultar seu conselho, Jagelão contornou a travessia fortificada marchando para o leste. A Ordem acusou os poloneses e lituanos de saquear a cidade de Gilgenburg, e há quem diga que Ulrich jurou vingança depois disso."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Jagelão, rei da Polônia" },
        "Era o comandante supremo, mas não lutou pessoalmente. Demorou a mandar suas tropas. Chegou a ter a vida salva por Zbigniew Oleśnicki quando um cavaleiro da Ordem, Lupold ou Diepold de Kökeritz, o atacou.",
        { h: "Vytautas, grão-duque da Lituânia" },
        "Primo de Jagelão, comandava os lituanos e também algumas unidades polonesas. Ajudou a desenhar a estratégia da campanha. Depois da batalha, mandou executar dois cavaleiros da Ordem, Marquard von Salzbach e Heinrich Schaumburg.",
        { h: "Ulrich von Jungingen, grão-mestre" },
        "O chefe da Ordem posicionou o exército primeiro e esperou que o inimigo atacasse. Ficou horas de armadura, sob o sol. Para forçar a decisão, mandou aos reis duas espadas, em sinal de provocação. Morreu no campo.",
        { h: "Os outros nomes" },
        "Do lado da Ordem, o marechal Friedrich von Wallenrode comandava a elite da cavalaria pesada, e o grande comendador Kuno von Lichtenstein concentrou os ataques da Ordem no exército polonês. Do lado polonês, o cronista Długosz dá o comando a Zyndram de Maszkowice, mas a Wikipédia considera isso muito duvidoso. É mais provável que o marechal Zbigniew de Brzezie tenha comandado os poloneses em campo. Os tchecos de Jan Sokol de Lamberg lutaram pela Polônia, e a Wikipédia diz que Jan Žižka estava talvez entre eles, mas aponta isso como incerto. O duque silesiano Conrado VII, o Branco, de Oels, lutou pela Ordem."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Długosz dá o número de bandeiras: 51 da Ordem, 50 polonesas e 40 lituanas. Mas não diz quantos homens havia em cada [[bandeira]]. As estimativas modernas dos aliados vão de 16.000 a 39.000 homens, e as da Ordem, de 11.000 a 27.000.",
        { note: "Os números dependem de quem escreve. Os historiadores alemães, como Delbrück e Heveker, estimam cerca de 10.500 poloneses e 6.000 lituanos contra 11.000 da Ordem. Stefan Kuczyński, historiador polonês, chega a 39.000 contra 27.000. Obras mais antigas falam em 100.000 contra 35.000 ou até mais. A própria Wikipédia diz que isso tem a ver com política e nacionalismo." },
        "Do lado dos aliados, havia poloneses, lituanos, rutenos, tchecos e moravos, os moldavos de Alexandre I, tártaros da Horda Dourada e três bandeiras de Smolensk. A Ordem tinha cavalaria pesada, [[bombardas|bombarda]] e cruzados convidados da Vestfália, Frísia, Áustria, Suábia e Baviera, além de mercenários silesianos. Só uma parte do exército da Ordem era de cavaleiros totalmente blindados.",
        { h: "O terreno" },
        "O campo tradicional fica entre as aldeias de Grunwald (Grünfelde), Stębark (Tannenberg) e Łodwigowo (Ludwigsdorf), em uma área de cerca de 4 quilômetros quadrados. Pesquisas do historiador Sven Ekdahl e escavações de 2014 a 2019 apontam para um local mais ao sul de Grunwald, a uns 2 quilômetros a sudoeste do monumento. Os dois exércitos ficaram frente a frente no eixo nordeste-sudoeste, com os poloneses a leste.",
        { h: "O dia em oito movimentos" },
        { formation: true },
        "A Ordem formou primeiro e esperou. Nos aliados, a cavalaria pesada polonesa ficava à esquerda, a cavalaria leve lituana à direita e os mercenários no centro, em três linhas de cunhas de cerca de 20 homens de profundidade. Contra os lituanos ficou a elite da Ordem, sob Wallenrode. Uma crônica diz que a Ordem cavou fossos. A artilharia da Ordem deu só dois tiros, porque a chuva molhou a pólvora.",
        "Enquanto Jagelão atrasava, Ulrich mandou mensageiros com duas espadas, que deveriam 'ajudar' os dois comandantes. Era um insulto e uma provocação. As espadas ficaram conhecidas como as 'Espadas de Grunwald', símbolo nacional polonês.",
        "Vytautas, com apoio de bandeiras polonesas, atacou o flanco esquerdo da Ordem. Depois de mais de uma hora de luta dura, a cavalaria leve lituana recuou em retirada geral.",
        "Segundo Długosz, a Ordem achou que tinha vencido, quebrou a formação para perseguir os lituanos e parou para saquear. Ele descreve o exército lituano como aniquilado e a batalha como uma vitória polonesa, o que contradiz a *Cronica conflictus*, o relato mais antigo, escrito por uma testemunha. Foi uma retirada de verdade ou uma [[retirada fingida]]? O polonês Lastowski propôs em 1909 que foi uma manobra planejada, copiada da Horda Dourada. Uma carta alemã descoberta por Ekdahl em 1963, que fala de retiradas fingidas, deu força à ideia. Stephen Turnbull discorda, porque as retiradas fingidas costumam ser feitas por uma ou duas unidades e seguidas de contra-ataque rápido.",
        "Enquanto isso, Kuno von Lichtenstein concentrou a Ordem sobre o lado direito do exército polonês. Seis bandeiras de Wallenrode largaram a perseguição e se juntaram a ele. O estandarte real de Cracóvia foi perdido pelo porta-estandarte Marcin de Wrocimowice e retomado. Jagelão mandou sua segunda linha. Ulrich levou 16 bandeiras, quase um terço da Ordem, contra o lado direito polonês. Jagelão mandou a terceira linha.",
        "Os lituanos, reorganizados, voltaram e atacaram pela retaguarda. Ulrich tentou abrir caminho e foi morto. A *Cronica conflictus* diz que Dobiesław de Oleśnica o atingiu com uma lança; Długosz dá o nome de Mszczuj de Skrzynno.",
        "Sem comandante, a Ordem recuou. Os acompanhantes do acampamento se voltaram contra os cavaleiros, e o círculo de carroças foi invadido. A *Cronica* diz que morreram mais cavaleiros no acampamento do que no campo de batalha. Segundo a Wikipédia em inglês, a batalha durou cerca de dez horas."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Das cerca de 270 irmãos da Ordem presentes, entre 203 e 211 morreram, segundo Frost. Entre os mortos estavam Ulrich, Wallenrode, Lichtenstein, o tesoureiro, o marechal de suprimentos e dez comendadores. Os registros de pagamento mostram que 1.427 homens voltaram para Marienburg. Dos 1.200 enviados de Danzig, voltaram 300. Os aliados capturaram vários milhares, entre eles Conrado de Oels e Casimiro V da Pomerânia; a maioria dos plebeus foi solta com a obrigação de se apresentar em Cracóvia em 11 de novembro de 1410. O mercenário Holbracht von Loym pagou 150 kopas de groschen de Praga pelo [[resgate]], mais de 30 kg de prata.",
        "Do lado vencedor, as perdas polonesas são descritas como pequenas nas cartas do rei, e Długosz lista só 12 cavaleiros poloneses mortos. As estimativas iniciais de mortos nos dois lados vão de 8.000 (um bilhete dos enviados do rei Sigismundo, que talvez fosse 8.000 de cada lado) até 18.000 (uma bula papal de 1412).",
        "Os aliados ficaram três dias no campo e só chegaram a Marienburg em 26 de julho, o que deu tempo a Heinrich von Plauen para organizar a defesa. Muitos castelos se renderam, mas o cerco falhou e foi levantado em 19 de setembro, por falta de munição, moral baixo e disenteria. A Ordem retomou a maior parte dos castelos, e Jagelão a derrotou de novo em Koronowo, em 10 de outubro de 1410.",
        "Em fevereiro de 1411, a Paz de Thorn deu à Polônia a terra de Dobrzyń e fez a Ordem renunciar à Samogícia enquanto Jagelão e Vytautas vivessem. A Ordem ainda devia uma indenização em prata, em quatro prestações anuais.",
        { h: "Por que importa" },
        "A Ordem nunca recuperou o poder. Para pagar a indenização, aumentou impostos, confiscou bens da Igreja e se endividou, e cidades como Danzig e Thorn se revoltaram. Tinha dificuldade de arranjar cruzados. Em 1441 surgiu a Confederação Prussiana, e em 1454 começou a Guerra dos Treze Anos. Houve ainda a Guerra da Fome (1414) e a Guerra de Gollub (1422).",
        { h: "Curiosidades e controvérsias" },
        { note: "A acusação de traição: a Ordem culpou Nicolau von Renys (Mikołaj de Ryńsk), comandante da bandeira de Culm, que teria baixado seu estandarte para sinalizar rendição. Ele foi decapitado sem julgamento. Era líder da União do Lagarto, grupo de cavaleiros que simpatizava com a Polônia. A lenda da 'facada nas costas' marcou a historiografia alemã até 1945." },
        { note: "Os nomes: os alemães chamam a batalha de Tannenberg, os poloneses, de Grunwald, e os lituanos, de Žalgiris. O poeta Maironis popularizou o nome lituano em 1891." },
        { note: "O nacionalismo: a batalha foi usada pelo nacionalismo romântico, pela propaganda nazista e pela soviética. Só nas últimas décadas ela vem sendo estudada de forma mais fria. Até o campo tradicional foi questionado, e as escavações recentes foram criticadas por publicação irregular e falta de recursos." },
        { note: "As fontes: a *Cronica conflictus* (escrita em até um ano por uma testemunha, autor incerto), Długosz (décadas depois, acusado de parcialidade contra os lituanos), as cartas de Jagelão, a crônica de Johann von Posilge e o manuscrito *Banderia Prutenorum*, com os estandartes capturados." }
      ]}
    ]
  },

  azincourt: {
    war: "Guerra dos Cem Anos, campanha de Henrique V (1415)",
    hook: "Em menos de três horas de lama e flechas, a flor da nobreza francesa ficou jogada no mesmo campo estreito.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Guerra dos Cem Anos era uma disputa pelo trono da França entre os reis da Inglaterra e os Valois. Em 1415, a França estava dividida. O rei Carlos VI sofria de episódios de loucura, e a nobreza tinha se partido entre os [[armagnacs]] e os [[borgonheses]], que se enfrentaram numa guerra civil até a paz de Arras, em agosto de 1414. Henrique V, rei da Inglaterra desde 1413, se aproveitou disso.",
        "Ele reclamava o trono francês por descender de Eduardo III. As negociações falharam, e o Grande Conselho aprovou a guerra em 19 de abril de 1415. A frota partiu em 11–12 de agosto, e o exército, cerca de 12.000 homens e até 20.000 cavalos, sitiou Harfleur. O cerco demorou mais que o esperado, e a cidade só se rendeu em 22 de setembro.",
        { h: "O caminho até Azincourt" },
        { timeline: [
          ["13 ou 14 de agosto de 1415", "Os ingleses desembarcam perto de Harfleur."],
          ["22 de setembro", "Harfleur se rende, depois de um cerco longo. A disenteria já enfraquece o exército."],
          ["8 de outubro", "Henrique parte para Calais com cerca de 9.000 homens, contra a opinião do conselho."],
          ["19 de outubro", "Com os franceses bloqueando o Somme, Henrique desce o rio até achar um vau e atravessa em Béthencourt e Voyennes. Depois, retoma o caminho para o norte."],
          ["24 de outubro", "Os dois exércitos se encontram perto de Azincourt. Os franceses recusam a batalha e esperam reforços."],
          ["25 de outubro", "A batalha."]
        ]},
        "Os franceses acompanharam o exército inglês, convocaram os nobres locais pela *semonce des nobles* e fecharam o caminho para Calais. Henrique precisava de uma decisão rápida: o exército estava com pouca comida e doente, e cada dia parado o enfraquecia mais. Os franceses preferiam esperar por tropas de Brabante, de Anjou e da Bretanha."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Henrique V, 28 anos" },
        "Nascido em 16 de setembro de 1386, tinha governado desde os 26 e já conhecia a guerra. Em Azincourt, não ficou na retaguarda: lutou em pessoa, e durante o combate ficou de pé sobre o irmão ferido, Humphrey, duque de Gloucester. Levou um golpe de machado no capacete. Ao fim do dia, ordenou matar a maior parte dos prisioneiros franceses, o que é o ponto mais discutido da batalha.",
        { h: "Charles d'Albret, condestável da França" },
        "Como [[condestável]], comandava o exército francês. O rei Carlos VI não participou. Albret morreu no campo, e Barker conta que se afogou na lama de capacete. Boucicaut comandou a [[vanguarda]] e foi capturado. Os duques de Alençon e de Bar, que comandavam o corpo principal, e o duque de Brabante, que chegou atrasado, morreram. Os duques de Orléans e de Bourbon foram capturados.",
        { h: "Os outros nomes" },
        "Do lado inglês, o duque de York comandava a ala direita e morreu, e Thomas Camoys a esquerda. Sir Thomas Erpingham comandava os arqueiros. O conde de Suffolk também morreu. Do lado francês, Clignet de Bréban e Louis de Bosredon lideraram a cavalaria de flanco, e Ysembart d'Azincourt atacou a bagagem inglesa."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os ingleses eram cerca de 6.000, quase todos arqueiros, com [[arcos longos|arco longo]], e uns 900 a 1.000 [[homens de armas|homem de armas]] a pé, segundo Barker, Sumption e Rogers, baseados na *Gesta Henrici Quinti* e em Jean Le Fèvre. Anne Curry dá 9.000 e Ian Mortimer, de 8.000 a 9.000, e ambos questionam a *Gesta*. Do lado francês, uns 10.000 homens de armas, mais 4.000 a 5.000 homens a pé. Curry dá 12.000, Mortimer de 14.000 a 15.000 e Rogers até 24.000, contando valetes a cavalo. Barker acha que os ingleses estavam em desvantagem de pelo menos 4 contra 1.",
        { note: "Os números são discutidos. A Wikipédia em português cita até 36.000 franceses, mas considera isso improvável. Curry se baseia em registros administrativos, e esse método é criticado por Barker, Sumption e Rogers. A *Gesta* é um texto a favor de Henrique e pode ser propaganda." },
        { h: "O terreno" },
        "Um campo estreito, arado, cercado de bosques, provavelmente perto do bosque de Tramecourt. O local exato é discutido: Livingston (2019) defende um ponto a oeste de Azincourt. Choveu forte na noite anterior, e o chão virou lama funda, o que cansava quem estava em armadura de placas.",
        { h: "A batalha em seis momentos" },
        { formation: true },
        "Os ingleses ficavam em uma linha de cerca de 690 metros (750 jardas): o duque de York à direita, o rei no centro e Camoys à esquerda. Os homens de armas ficaram em quatro filas no centro, e nas pontas, os arqueiros, que cravaram [[estacas|estacas de arqueiro]] de madeira apontadas para a frente. Os franceses se dividiram em três 'batalhas'. A vanguarda tinha cerca de 4.800 homens de armas, e o corpo principal, 3.000 sob Alençon e Bar, cada um com cerca de 16 filas. Em cada ala havia 600 homens desmontados. Uma força montada de 800 a 1.200 cavaleiros devia dispersar os arqueiros, e cerca de 200 deviam atacar a retaguarda inglesa. A retaguarda era de valetes montados e ficou sem comando. Os arqueiros e besteiros, que deviam estar na frente, ficaram atrás.",
        "Primeiro, durante umas três horas, ninguém atacou. Os franceses esperavam reforços. Henrique, com pouca comida e o exército doente, resolveu avançar. Os arqueiros arrancaram as estacas e as cravaram de novo no novo lugar.",
        "Segundo, os arqueiros ingleses abriram fogo de longe, a cerca de 300 jardas. Só então a cavalaria francesa atacou, pequena e desorganizada, porque parte dos cavaleiros tinha se afastado. As estacas e os bosques fecharam os flancos. As flechas atingiram os cavalos nos flancos e nas costas, e os feridos fugiram por cima da infantaria que avançava.",
        "Terceiro, os homens de armas franceses avançaram pela lama, de viseira baixa e com a respiração apertada, debaixo de flechas. Os arqueiros ingleses atiraram de perto até acabarem as flechas.",
        "Quarto, e decisivo: no corpo a corpo, arqueiros e homens de armas ingleses atacaram com machados, espadas e maços os franceses, exaustos e apertados. A segunda linha francesa entrou, mas o chão estreito limitou o avanço. Muitos ficaram presos e alguns morreram sufocados na pilha de gente.",
        "Quinto, Ysembart d'Azincourt atacou a bagagem inglesa com um pequeno grupo de homens de armas, criados e cerca de 600 camponeses. Levou tesouros, entre eles uma coroa. O momento é discutido: Barker, seguindo a *Gesta*, põe no começo; outros relatos, no fim, e dizem que os ingleses temeram um ataque pelas costas.",
        "Sexto, Henrique, temendo que os franceses se reorganizassem, mandou matar a maior parte dos prisioneiros, poupando só os de patente mais alta, para resgate. Keegan acha que a ordem foi para aterrorizar e que relativamente poucos foram mortos antes de a reserva francesa fugir e a ordem ser revogada. Estima que cerca de 200 arqueiros a executaram. Os cavaleiros se recusaram, por considerar aquilo desonroso e por perder o [[resgate]]."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os franceses perderam cerca de 6.000 homens, quase todos nobres: três duques, nove condes, o arcebispo de Sens e o condestável. Os arautos contaram 3.069 cavaleiros e [[escudeiros|escudeiro]] mortos. De 700 a 2.200 foram capturados. Do lado inglês, os registros identificam pelo menos 112 mortos. Monstrelet dá 600 e Jean de Wavrin, 1.600. Entre os mortos estavam o duque de York, o conde de Suffolk e Dafydd Gam.",
        "Henrique chegou a Calais e voltou à Inglaterra em 16 de novembro, e entrou em Londres em 23 de novembro. Os borgonheses aproveitaram a perda dos armagnacs e marcharam para Paris em dez dias, o que rompeu a frágil trégua entre as facções. Isso deu a Henrique cerca de 18 meses para preparar a campanha seguinte.",
        { h: "Por que importa" },
        "A vitória fortaleceu a monarquia dos Lancaster. Em 21 de maio de 1420, o Tratado de Troyes reconheceu Henrique como regente e herdeiro da França e lhe deu Catarina de Valois em casamento. Mas Henrique morreu em 31 de agosto de 1422, aos 35 anos, provavelmente de disenteria, e Carlos VI morreu em 21 de outubro do mesmo ano. A guerra só terminou em 1453. O episódio virou lenda por causa da peça *Henrique V*, de Shakespeare.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os prisioneiros: nenhum cronista da época criticou Henrique pela ordem. A *Gesta* a justifica com o medo de um ataque da retaguarda francesa. As fontes borgonhesas dizem que os homens de armas ingleses relutavam por perder resgates." },
        { note: "Os dois dedos: fontes borgonhesas dizem que os franceses juraram cortar dois dedos da mão direita dos arqueiros. É discutível se isso é verdade, e só aparece nessas fontes. A Wikipédia em português diz que a lenda ligando o gesto de mostrar o dedo a Azincourt não é confiável." },
        { note: "Os números: Barker defende uma desvantagem inglesa de pelo menos 4 para 1, enquanto Curry e Mortimer trabalham com exércitos mais próximos em tamanho." }
      ]}
    ]
  },

  orleans: {
    war: "Guerra dos Cem Anos, campanha do Loire (1428–1429)",
    hook: "Uma camponesa de uns 17 anos chegou a uma cidade sitiada havia seis meses, e nove dias depois o cerco tinha acabado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Azincourt, em 1415, os ingleses ocuparam boa parte do norte da França. Em 1420, o Tratado de Troyes fez de Henrique V regente e herdeiro da França e deserdou o [[delfim]] Carlos, filho de Carlos VI. A França ficou dividida: o norte e o oeste eram controlados por ingleses e [[borgonheses]], e o sul ficou leal ao delfim. Henrique V morreu em 1422, e Carlos VI, pouco depois. O regente inglês passou a ser o duque de Bedford.",
        "Orléans era a maior cidade leal ao delfim ao norte do Loire. Tinha valor simbólico: era a capital do ducado de Orléans, da facção [[armagnaque|armagnacs]] que se opunha ao Tratado de Troyes, e seu duque, Carlos, estava prisioneiro dos ingleses desde Azincourt. Quem tomasse Orléans abriria o caminho para o sul.",
        { h: "O caminho até Orléans" },
        { timeline: [
          ["Julho de 1428", "O conde de Salisbury chega à França com 2.700 reforços. Bedford, que planejava atacar o oeste, muda de ideia e escolhe Orléans."],
          ["7 de outubro de 1428", "Salisbury atravessa o Loire em Meung e Beaugency e chega a Olivet. Destacamentos ingleses tomam Jargeau e Châteauneuf-sur-Loire."],
          ["12 de outubro de 1428", "Começa oficialmente o cerco."],
          ["24 de outubro", "Os ingleses tomam as Tourelles, o forte na ponta sul da ponte."],
          ["12 de fevereiro de 1429", "Batalha das Arenques, em Rouvray: a coluna inglesa de suprimentos resiste ao ataque franco-escocês."],
          ["17 de abril de 1429", "Os borgonheses retiram seus homens do cerco."],
          ["29 de abril de 1429", "Joana d'Arc entra em Orléans."],
          ["8 de maio de 1429", "Os ingleses levantam o cerco."]
        ]},
        "A decisão de cercar Orléans foi tomada, segundo a Wikipédia, sem muita clareza: Bedford escreveu depois que tinha tomado a iniciativa por um conselho que Deus saberia explicar, e provavelmente a ideia foi do próprio Salisbury. Bombardeios começaram em 17 de outubro. Em 21 de outubro, os ingleses atacaram o [[baluarte]], que protegia a ponte, e foram repelidos. Nos dias 23 e 24, os franceses recuaram para as Tourelles, e os ingleses as tomaram. Os franceses destruíram arcos da ponte na retirada.",
        "Salisbury foi atingido por estilhaços de tiros de canhão por volta de 26 de outubro, quando supervisionava a colocação dos canhões, e morreu cerca de uma semana depois. Em meados de novembro, o conde de Suffolk assumiu o comando e construiu um cinturão de [[bastilhas|bastilha]]: sete na margem norte e quatro na sul. Um reforço borgonhês de cerca de 1.500 homens chegou no inverno. Em fevereiro, Dunois e o conde de Clermont tentaram interceptar um comboio inglês de suprimentos, comandado por John Fastolf. Os ingleses formaram um [[círculo de carroças]], e os escoceses de John Stewart de Darnley avançaram cedo demais. A cavalaria inglesa contra-atacou, Darnley morreu, Dunois foi ferido e Clermont se retirou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Joana d'Arc, cerca de 17 anos" },
        "Nasceu por volta de 1412 em Domrémy, numa família camponesa com terras. A data exata é desconhecida. Dizia ouvir vozes de santos que a mandavam salvar a França. Saiu de Vaucouleurs em 23 de fevereiro de 1429, chegou a Chinon em 6 de março e foi aceita pelo delfim em 22 de março. Não era comandante, mas sua presença e seu estandarte mudaram o ânimo dos soldados.",
        { h: "Jean de Dunois, o Bastardo de Orléans" },
        "Meio-irmão do duque prisioneiro, foi quem organizou a defesa da cidade. Foi ferido em Rouvray. Em março, propôs entregar Orléans ao duque da Borgonha, como território neutro, em nome do duque prisioneiro. Bedford recusou, e os borgonheses saíram do cerco em abril, o que a Wikipédia chama de erro caro para os ingleses.",
        { h: "O lado inglês" },
        "Salisbury foi quem teve a ideia do cerco. Depois da morte dele, o conde de Suffolk assumiu e ficou com os homens em torno da cidade. John Talbot, mais conhecido pelas batalhas seguintes, também comandava tropas. William Glasdale defendia as Tourelles e morreu na queda da ponte móvel.",
        { h: "Outros nomes" },
        "La Hire, capitão francês, ficou no comando de Orléans quando Dunois saiu para buscar reforços, em 1º de maio. Foi ele quem atacou o baluarte cedo demais em 6 de maio. Os capitães nem sempre a consultavam: tomaram o caminho do sul sem avisá-la e depois a convenceram a esperar."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia estima os ingleses entre 3.263 e 3.800 homens, mais cerca de 1.500 borgonheses, o que dá em torno de 5.300. Para os franceses, dá 6.400 soldados e mais de 3.000 cidadãos armados. Porém o corpo do texto diz que a guarnição era pequena demais para agir por conta própria, na visão de Dunois. Os números do quadro e do texto não se encaixam bem.",
        { note: "As perdas também variam: o quadro da Wikipédia dá mais de 4.000 mortos para ingleses e borgonheses e 2.000 para os franceses, mas esses totais não têm fonte própria. Os números mais firmes são os do dia 7 de maio: cerca de 1.000 ingleses mortos e 600 prisioneiros." },
        { h: "O terreno" },
        "A cidade fica na margem norte do Loire, com uma ponte para a margem sul, protegida por um [[baluarte]] e pelas Tourelles, um forte duplo na ponta da ponte. Em volta, os ingleses tinham seu cinturão de bastilhas.",
        { h: "Nove dias" },
        "Joana e seu comboio saíram de Blois em 27–28 de abril. Os capitães tomaram o caminho do sul, pela Sologne, sem avisá-la, e Dunois encontrou o grupo em Rully. Ela entrou em Orléans por volta das 8 da noite de 29 de abril, de barco, no porto de Saint-Loup.",
        "Em 4 de maio, o comboio de Dunois chegou do norte, e os franceses atacaram a bastilha de Saint-Loup, a leste, com cerca de 1.500 homens contra uns 400 defensores. Joana apareceu com o estandarte e animou os atacantes. Saint-Loup caiu, com cerca de 140 ingleses mortos e 40 capturados.",
        "Em 5 de maio, Quinta-feira da Ascensão, não houve combate. Joana ditou uma carta aos ingleses mandando que saíssem da França. Segundo o depoimento de Pasquerel, a pausa foi ideia dela; segundo a versão dos capitães, eles a convenceram de esperar.",
        "Em 6 de maio, os franceses atravessaram o rio. Os ingleses tinham abandonado Saint-Jean-le-Blanc. La Hire atacou o baluarte cedo demais, e seus homens recuaram com medo de um reforço inglês, até Joana reuni-los. Os franceses tomaram o mosteiro dos Augustins, e Joana foi ferida no pé por um espinho de ferro. Naquela noite, a guarnição inglesa de Saint-Privé se retirou.",
        "Em 7 de maio, o ataque às Tourelles. Joana foi atingida por uma flecha entre o pescoço e o ombro enquanto segurava o estandarte na trincheira. Voltou para animar o assalto final. Os franceses tomaram o baluarte e depois as Tourelles. A ponte móvel caiu, e Glasdale caiu no rio e morreu. Os ingleses perderam cerca de 1.000 mortos e 600 prisioneiros. Cerca de 200 franceses foram libertados.",
        "Em 8 de maio, Suffolk e Talbot saíram de suas bastilhas ao norte e formaram em linha perto de Saint-Laurent. Nenhum dos lados atacou. Joana teria proibido atacar porque era domingo. Os ingleses se retiraram.",
        { note: "As fontes divergem sobre quando Joana foi ferida. Cousinot a coloca num assalto de manhã, antes do ataque final. A versão de Pasquerel e Quicherat a coloca durante a luta do dia 7 à tarde. A história de que ela previu a derrota de Rouvray, o que levou Baudricourt a escoltá-la, não é aceita por todos os historiadores." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O cerco foi levantado nove dias depois de Joana chegar. Os ingleses ainda controlavam as cidades em torno e poderiam ter retomado o cerco, mas a prioridade de Suffolk era salvar o exército.",
        "Na campanha do Loire, Joana e os franceses tomaram Jargeau (12 de junho), Meung (15 de junho) e Beaugency (17 de junho). Em Patay, em 18 de junho, Talbot foi derrotado e capturado, e Suffolk também foi preso na campanha. Em 17 de julho de 1429, Carlos foi sagrado Carlos VII em Reims.",
        "A sorte de Joana mudou. Ela fracassou em tomar Paris, em setembro de 1429, e foi capturada por tropas borgonhesas em Compiègne, em 23 de maio de 1430. Os borgonheses a venderam aos ingleses, e um tribunal presidido pelo bispo Pierre Cauchon a julgou por heresia em Ruão. Foi queimada na fogueira em 30 de maio de 1431, aos cerca de 19 anos. Um tribunal da Inquisição anulou a sentença em 1456. Foi beatificada em 1909 e canonizada em 16 de maio de 1920.",
        { h: "Por que importa" },
        "Orléans foi a virada psicológica da guerra. Os ingleses nunca mais cercaram uma grande cidade francesa. A França continuou a avançar: Formigny, em abril de 1450, destruiu o poder inglês na Normandia, e em Castillon, em 1453, John Talbot morreu e acabou o último exército inglês de campo. Bordéus se rendeu em 19 de outubro de 1453, e a Inglaterra ficou só com Calais. Até hoje a cidade celebra todo ano o fim do cerco em 8 de maio.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: o cerco é narrado sobretudo por Ramsay (1892), pela *Chronique de la Pucelle* de Cousinot e pelos depoimentos dos processos de Joana, reunidos por Quicherat." }
      ]}
    ]
  },

  tumu: {
    war: "Invasão oirate da China Ming (1449)",
    hook: "Um imperador de 21 anos saiu para a guerra à frente de um exército enorme (as estimativas chegam a 500.000 homens) e voltou prisioneiro.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1449, a dinastia [[ming]] governava a China havia 81 anos. Depois da morte do imperador Yongle, em 1424, as defesas do norte foram se desfazendo. Muitos soldados das guarnições de fronteira viraram trabalhadores rurais para seus oficiais, e os soldados de Pequim eram usados em obras. A linha de defesa era formada por Xuanfu, Datong e Pequim, e Xuanfu ficava a apenas 180 km da capital, o que deixava pouco espaço para recuar.",
        "Do outro lado, a estepe tinha três grupos mongóis: os uriankhai, os mongóis orientais e os [[oirates]], no oeste. Esen herdou o título de [[taishi]] do pai, Toghon, e foi se tornando o chefe de todos. Atacou Hami em 1443 e 1445 e a conquistou em 1448. Em 1447, tinha dominado os uriankhai.",
        { h: "O caminho até Tumu" },
        { timeline: [
          ["1448", "Uma missão comercial oirate exagera seu tamanho para ganhar mais presentes. Os Ming descobrem e dão só um quinto do pedido."],
          ["Julho de 1449", "Esen invade a China em três frentes."],
          ["3 de agosto", "Os Ming perdem em Yanghe, perto de Datong. Dois comandantes morrem."],
          ["4 de agosto", "O imperador deixa Pequim para comandar o exército pessoalmente."],
          ["16 a 18 de agosto", "O exército passa pelo campo de Yanghe, cheio de cadáveres, e chega a Datong."],
          ["20 de agosto", "Volta atrás."],
          ["31 de agosto", "O exército acampa em Tumu."],
          ["1º de setembro de 1449", "A batalha."]
        ]},
        "A causa imediata foi comercial. Os mongóis queriam trocar cavalos por chá, seda e outros bens, e os Ming limitavam o comércio a poucas cidades da fronteira, principalmente Datong. O tamanho das missões, que chegou a mais de 2.000 homens, pesava nas finanças chinesas. Intérpretes teriam prometido a Esen o casamento de seu filho com uma princesa imperial, e a corte recusou, o que algumas fontes consideram o estopim final."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "O imperador Yingzong (Zhengtong), 21 anos" },
        "Nascido em 29 de novembro de 1427, subiu ao trono em 7 de fevereiro de 1435, com 7 ou 8 anos. Em 1449, decidiu liderar a campanha pessoalmente, sem consultar os ministros, que protestaram.",
        { h: "Wang Zhen, o eunuco" },
        "Era um [[eunuco]] instruído que tinha sido tutor do príncipe herdeiro e entrou para o grupo de regentes em 1435, quando o imperador era menino. Depois da morte da grande imperatriz-viúva Zhang, em 1442, tirou do governo os velhos secretários e passou a controlar o governo em meados da década de 1440. A Wikipédia diz que lucrava com comércio ilegal, inclusive vendendo ferramentas de metal e armas aos oirates. Foi ele quem aconselhou o imperador a ir à guerra, e era na prática o comandante.",
        { h: "Esen, chefe dos oirates" },
        "Era o governante de fato dos mongóis. Em Tumu, não esteve pessoalmente na luta, segundo de Heer. Depois, ficou com um prisioneiro de enorme valor, que não matou: informou à corte Ming que ele estava vivo.",
        { h: "Os outros nomes" },
        "O ministro da Guerra, Kuang Ye, e seu adjunto Yu Qian protestaram contra a expedição, assim como o ministro do Pessoal, Wang Zhi. O velho general Zhang Fu e os grandes secretários Cao Nai e Zhang Yi foram levados com o imperador e morreram em Tumu. O príncipe de Cheng, Zhu Qiyu, irmão do imperador, ficou governando Pequim."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O tamanho do exército Ming é desconhecido. Costuma-se falar em cerca de 500.000, mas a Wikipédia lembra que o número real pode ter sido muito menor. Os mongóis tinham em torno de 20.000 homens em combate, segundo de Heer.",
        { note: "O número de 500.000 vem de estimativas, e não de contagens. Outros resumos falam em 220.000. O que se pode dizer com mais segurança é que o exército Ming era muito maior que o oirate, mas estava mal alimentado e mal comandado." },
        { h: "A marcha e a volta" },
        "O exército saiu de Pequim às pressas: a preparação durou de 1 a 4 de agosto. Chegou a Xuanfu por volta de 11 de agosto, depois de sete dias de chuva. Wang Zhen não aceitou voltar, apesar dos pedidos. Em 18 de agosto, o imperador chegou a Datong, onde a fome já tinha matado mais soldados do que o combate. Wang Zhen julgou perigoso entrar na estepe e mandou voltar, em 20 de agosto. Mudou o caminho de volta mais de uma vez, e a Wikipédia relaciona isso à vontade de poupar sua cidade natal, Yuzhou. O exército chegou a Xuanfu em 27 de agosto.",
        "Em 30 de agosto, os mongóis atacaram a retaguarda em Xuanfu e a destruíram. Depois emboscaram uma nova retaguarda, de cavalaria, sob Zhu Yong, na garganta de Yao'er. O tamanho é dado como 30.000, 40.000 ou 50.000, conforme a fonte.",
        { h: "O dia 1º de setembro" },
        "Em 31 de agosto, o exército acampou no posto de Tumu, sem água. Os oficiais sugeriram abrigo na cidade murada de Huailai, a cerca de 10 km (10,5 km, segundo a Wikipédia). Wang Zhen se recusou, em boa parte para não deixar a bagagem para trás. A cavalaria de Esen bloqueou o acesso ao rio, ao sul, e cercou o acampamento.",
        "Na manhã de 1º de setembro, depois de dois dias sem água, o plano Ming de abrir caminho até Huailai fracassou. Os mongóis ofereceram negociar. O imperador chegou a redigir uma proposta de paz, mas Wang Zhen a ignorou e, sem autorização, mandou o exército avançar para o rio. Foi o caos. Os mongóis lançaram o ataque total. A Wikipédia diz que Esen usou táticas enganosas para atrair os Ming para uma emboscada.",
        "Quase metade do exército Ming se perdeu, e muito equipamento foi capturado. Morreram dois duques, dois marqueses, cinco condes, vários generais e centenas de funcionários. Wang Zhen morreu no meio do caos. Alguns relatos dizem que um de seus oficiais o matou, mas os historiadores Twitchett e Grimm só afirmam isso com cautela, 'segundo alguns relatos'. A guarda do imperador tentou tirá-lo dali e falhou, e a maior parte de seus acompanhantes foi morta a flechadas. Ele foi capturado, levado a Leijiazhuang em 2 de setembro e entregue ao acampamento de Esen, perto de Xuanfu, em 3 de setembro."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A notícia chegou à imperatriz-viúva Sun e à imperatriz Qian na noite de 2 para 3 de setembro. Pequim entrou em pânico, com menos de 100.000 soldados de guarnição. Xu Cheng propôs mudar a capital para o sul. Yu Qian se opôs com força e, segundo a Wikipédia, ameaçou executar quem repetisse a ideia.",
        "Datong e Xuanfu se recusaram a abrir as portas para o imperador cativo. Liu An deu ao imperador 140.000 liang de prata, que ele distribuiu aos chefes mongóis. Em 4 de setembro, o príncipe de Cheng passou a governar, e em 6 de setembro o filho do imperador, de dois anos, foi declarado herdeiro. Em 7 de setembro, Yu Qian foi nomeado ministro da Guerra e trouxe tropas e grãos. Em 17 de setembro (a Wikipédia dá também 23), o príncipe virou o imperador Jingtai, e o irmão cativo ganhou o título de imperador emérito.",
        "Esen marchou sobre Pequim e chegou em 27 de outubro, com cerca de 70.000 homens, contra 220.000 de Yu Qian, segundo a Wikipédia. Depois de poucos dias de combate (três a cinco, conforme a fonte), os mongóis recuaram.",
        "Yingzong foi solto em setembro de 1450, depois de cerca de um ano de cativeiro. Os oirates o trataram bem. Chegou a Pequim em 19 de setembro de 1450 e foi confinado no Palácio do Sul por cerca de seis anos e meio. Em 11 de fevereiro de 1457, um golpe palaciano o restaurou no trono, com o nome Tianshun. Jingtai morreu um mês depois. Yingzong morreu em 23 de fevereiro de 1464.",
        { h: "Por que importa" },
        "A dinastia Ming perdeu um exército e um imperador, mas manteve suas cidades fortificadas, e os mongóis não ocuparam território. Eles queriam comércio, e as relações voltaram ao que eram em poucos meses. A crise levou a uma grande reorganização do poder e do exército Ming, que ajudou a dar estabilidade à dinastia pelo resto do século XV. Esen se proclamou grande cã em 1453 e foi derrubado e morto em 1454 ou 1455.",
        { h: "Curiosidades e controvérsias" },
        { note: "A morte de Wang Zhen: as fontes não dizem quem o matou. A versão de que foi um oficial do próprio exército, e não os mongóis, é só 'segundo alguns relatos'." },
        { note: "Os números: o 'meio milhão' de soldados Ming é uma estimativa antiga. Alguns resumos dão 220.000, e a Wikipédia lembra que pode ter sido bem menos. A distância até Huailai também varia: a Wikipédia dá 10,5 km, mas um resumo na internet fala em 45 km." },
        { note: "A idade: nascido em novembro de 1427, o imperador tinha 21 anos em setembro de 1449; algumas obras dão 22." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  azincourt: {
    terrain: [
      { t: "note", x: 8, y: 36, l: "Bosque" },
      { t: "note", x: 92, y: 36, l: "Bosque de Tramecourt" },
      { t: "note", x: 50, y: 33, l: "Campo arado, encharcado pela chuva" }
    ],
    units: [
      { id: "eL", s: "a", k: "inf", w: 16, h: 4, l: "Camoys" },
      { id: "eC", s: "a", k: "inf", w: 20, h: 4, l: "Henrique V" },
      { id: "eR", s: "a", k: "inf", w: 16, h: 4, l: "Duque de York" },
      { id: "arL", s: "a", k: "inf", w: 10, h: 6, l: "Arqueiros" },
      { id: "arR", s: "a", k: "inf", w: 10, h: 6, l: "Arqueiros" },
      { id: "eBag", s: "a", k: "camp", w: 10, h: 4, l: "Bagagem" },
      { id: "fDL", s: "b", k: "inf", w: 10, h: 4, l: "600 a pé" },
      { id: "fV", s: "b", k: "inf", w: 22, h: 6, l: "Vanguarda, 4.800" },
      { id: "fDR", s: "b", k: "inf", w: 10, h: 4, l: "600 a pé" },
      { id: "fCL", s: "b", k: "cav", w: 12, h: 4, l: "Clignet de Bréban" },
      { id: "fCR", s: "b", k: "cav", w: 12, h: 4, l: "Bosredon" },
      { id: "fM", s: "b", k: "inf", w: 24, h: 5, l: "Alençon e Bar, 3.000" },
      { id: "fAr", s: "b", k: "inf", w: 14, h: 3, l: "Arqueiros e besteiros" },
      { id: "fRg", s: "b", k: "cav", w: 24, h: 4, l: "Retaguarda, sem comando" },
      { id: "fYs", s: "b", k: "inf", w: 8, h: 3, l: "Ysembart d'Azincourt" }
    ],
    steps: [
      { t: "25 de outubro de 1415. Os ingleses esperam em linha de cerca de 690 metros: York à direita, o rei no centro, Camoys à esquerda, com os arqueiros nas pontas e estacas na frente. Os franceses estão em três batalhas, com cavalaria nos flancos da vanguarda, e os arqueiros e besteiros ficaram atrás, em vez de na frente. Por umas três horas, ninguém ataca.",
        p: { eL: [28, 16], eC: [50, 16], eR: [72, 16], arL: [14, 17], arR: [86, 17], eBag: [50, 6],
             fDL: [30, 49], fV: [50, 48], fDR: [70, 49], fCL: [14, 44], fCR: [86, 44],
             fM: [50, 55], fAr: [50, 61], fRg: [50, 66], fYs: [93, 30] } },
      { t: "Cansado e com pouca comida, Henrique avança com o exército. Os arqueiros arrancam as estacas e as cravam de novo mais à frente.",
        p: { eL: [28, 26], eC: [50, 26], eR: [72, 26], arL: [14, 27], arR: [86, 27] } },
      { t: "Os arqueiros ingleses atiram de longe. Só depois disso a cavalaria francesa ataca, pequena e desorganizada, porque parte dos cavaleiros tinha se afastado. As estacas e os bosques fecham os flancos.",
        p: { fCL: [18, 36], fCR: [82, 36] } },
      { t: "As flechas atingem os cavalos nos flancos e nas costas. Os feridos dão meia-volta e passam por cima da infantaria francesa que avança.",
        p: { fCL: [24, 46], fCR: [76, 46], fDL: [30, 40], fV: [50, 40], fDR: [70, 40], fM: [50, 47], fAr: [50, 53], fRg: [50, 60] }, x: ["fCL", "fCR"] },
      { t: "Os homens de armas franceses atravessam a lama de viseira baixa, respirando mal, debaixo de flechas atiradas de perto. Os arqueiros ingleses atiram até acabar as flechas.",
        p: { fDL: [32, 33], fV: [50, 33], fDR: [68, 33], fM: [50, 41] } },
      { t: "Os arqueiros largam os arcos e atacam os franceses pelos lados, com machados, espadas e maços. O terreno estreito amontoa os franceses, e muitos morrem sufocados na pilha. Henrique luta em pessoa e protege o irmão Humphrey, ferido.",
        p: { arL: [30, 30, 50], arR: [70, 30, -50], eC: [50, 28], fV: [50, 34] }, x: ["fV", "fDL", "fDR"] },
      { t: "A segunda linha francesa entra na luta, mas o campo é estreito demais para avançar. Ao mesmo tempo, Ysembart d'Azincourt ataca a bagagem inglesa com um pequeno grupo e uns 600 camponeses. O momento exato é discutido.",
        p: { fM: [50, 36], fYs: [56, 8], eBag: [50, 6] } },
      { t: "Temendo que os franceses se reorganizem, Henrique manda matar a maior parte dos prisioneiros. A retaguarda francesa não ataca e deixa o campo, e o combate termina.",
        p: { fRg: [50, 68], fAr: [50, 58] }, x: ["fM", "fAr", "fRg", "fYs"] }
    ]
  },

  grunwald: {
    terrain: [
      { t: "note", x: 14, y: 4, l: "Tannenberg (Stębark)" },
      { t: "note", x: 86, y: 4, l: "Grunwald (Grünfelde)" },
      { t: "note", x: 50, y: 4, l: "Ludwigsdorf" }
    ],
    units: [
      { id: "pL", s: "a", k: "cav", w: 20, h: 5, l: "Cavalaria polonesa" },
      { id: "pC", s: "a", k: "inf", w: 14, h: 5, l: "Mercenários" },
      { id: "lit", s: "a", k: "cav", w: 20, h: 5, l: "Lituanos de Vytautas" },
      { id: "pS", s: "a", k: "cav", w: 20, h: 4, l: "Segunda linha" },
      { id: "pT", s: "a", k: "cav", w: 20, h: 4, l: "Terceira linha" },
      { id: "tR", s: "b", k: "cav", w: 20, h: 5, l: "Ala direita da Ordem" },
      { id: "tC", s: "b", k: "cav", w: 14, h: 5, l: "Centro" },
      { id: "tL", s: "b", k: "cav", w: 20, h: 5, l: "Wallenrode, ala esquerda" },
      { id: "tU", s: "b", k: "cav", w: 20, h: 4, l: "Ulrich, 16 bandeiras" },
      { id: "tCamp", s: "b", k: "camp", w: 24, h: 4, l: "Acampamento e carroças" }
    ],
    steps: [
      { t: "15 de julho de 1410. A Ordem formou primeiro e espera, sob o sol. Os aliados se alinham: poloneses à esquerda, mercenários no centro, lituanos à direita, em três linhas. Ulrich mandou duas espadas aos reis, como provocação para atacar.",
        p: { pL: [28, 52], pC: [50, 52], lit: [72, 52], pS: [28, 60], pT: [50, 64],
             tR: [28, 30], tC: [50, 30], tL: [72, 30], tU: [50, 22], tCamp: [50, 8] } },
      { t: "Vytautas, com apoio de bandeiras polonesas, ataca o flanco esquerdo da Ordem, onde está a elite de Wallenrode.",
        p: { lit: [74, 38] } },
      { t: "Depois de mais de uma hora de luta dura, a cavalaria leve lituana recua em retirada geral. Se foi manobra planejada ou fuga de verdade é debatido.",
        p: { lit: [88, 54] } },
      { t: "Segundo Długosz, a Ordem acha que ganhou, quebra a formação e persegue os lituanos, parando para saquear.",
        p: { tL: [86, 46] } },
      { t: "Kuno von Lichtenstein concentra a Ordem contra o lado direito polonês. O estandarte real de Cracóvia é perdido e retomado. Jagelão manda a segunda linha.",
        p: { tC: [44, 36], tR: [30, 38], pL: [28, 45], pS: [38, 45] } },
      { t: "Ulrich leva 16 bandeiras, quase um terço da Ordem, contra o lado polonês. Jagelão manda a terceira linha. O cavaleiro Kökeritz ataca o rei, que é salvo por Zbigniew Oleśnicki.",
        p: { tU: [46, 40], pT: [48, 48] } },
      { t: "Os lituanos se reorganizam e voltam, atacando pela retaguarda. Ulrich tenta abrir caminho e é morto.",
        p: { lit: [72, 24], tL: [78, 36] }, x: ["tU"] },
      { t: "Sem comando, a Ordem recua. O acampamento e as carroças são invadidos, e, segundo a Cronica conflictus, morrem mais cavaleiros no acampamento do que no campo.",
        p: { lit: [60, 10], tCamp: [50, 8] }, x: ["tR", "tC", "tL", "tCamp"] }
    ]
  },

  ankara: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 6, l: "Ancara e o riacho Çubuk (a água)" },
      { t: "hill", x: 82, y: 62, rx: 14, ry: 6, l: "Colina de Çatal" },
      { t: "note", x: 50, y: 69, l: "Esquema, sem escala" }
    ],
    units: [
      { id: "tR", s: "a", k: "cav", w: 14, h: 5, l: "Miran Shah" },
      { id: "tC", s: "a", k: "cav", w: 16, h: 5, l: "Tamerlão" },
      { id: "tL", s: "a", k: "cav", w: 14, h: 5, l: "Shah Rukh" },
      { id: "tE", s: "a", k: "ele", w: 12, h: 5, l: "Elefantes" },
      { id: "tV", s: "a", k: "cav", w: 18, h: 4, l: "Netos de Tamerlão" },
      { id: "oT", s: "b", k: "cav", w: 10, h: 5, l: "Tártaros e sipahis" },
      { id: "oL", s: "b", k: "cav", w: 14, h: 5, l: "Süleyman" },
      { id: "oC", s: "b", k: "inf", w: 16, h: 5, l: "Bayezid e janízaros" },
      { id: "oR", s: "b", k: "cav", w: 14, h: 5, l: "Estêvão e sérvios" },
      { id: "oRg", s: "b", k: "cav", w: 14, h: 4, l: "Mehmed, retaguarda" }
    ],
    steps: [
      { t: "Julho de 1402. Tamerlão deu a volta no exército otomano e ocupou Ancara e a água. Bayezid volta em marcha forçada, no calor, e chega cansado e com sede. Tamerlão fica no centro, com Miran Shah à direita, Shah Rukh à esquerda, os netos na vanguarda e os elefantes. Bayezid está no centro com os janízaros, Süleyman na esquerda, Estêvão Lazarević e os sérvios na direita, e Mehmed na retaguarda.",
        p: { tR: [22, 14], tC: [50, 14], tL: [78, 14], tE: [50, 20], tV: [50, 26],
             oT: [8, 54], oL: [28, 54], oC: [52, 54], oR: [76, 54], oRg: [50, 63] } },
      { t: "Os otomanos atacam. Os arqueiros a cavalo timúridas respondem com flechas, e vários milhares de otomanos morrem ou se rendem.",
        p: { oL: [28, 44], oC: [52, 44], oR: [76, 44], oT: [8, 44], tV: [50, 30] } },
      { t: "Tamerlão lança ataques rápidos nos flancos otomanos, começando pela esquerda, o lado de Süleyman.",
        p: { tR: [22, 30], tC: [50, 32] } },
      { t: "Na direita, Estêvão Lazarević e seus cavaleiros sérvios contra-atacam e atravessam as linhas inimigas. Para uma fonte, avançam demais, perdem a ordem e recuam.",
        p: { oR: [78, 32], tL: [78, 22] } },
      { t: "Tártaros e sipahis dos beiliques da Anatólia passam para o lado de Tamerlão. A infantaria otomana fica exposta.",
        p: { oT: [10, 20] } },
      { t: "A maior parte do exército otomano foge. Estêvão chega até Bayezid e lhe pede que fuja com ele, mas ele recusa. Estêvão tira do campo Süleyman, os sérvios e o tesouro.",
        p: { oR: [90, 62], oL: [30, 48] }, x: ["oL", "oRg"] },
      { t: "Bayezid e os janízaros resistem sozinhos até o anoitecer, perto da colina de Çatal.",
        p: { oC: [70, 56], tC: [58, 44], tV: [62, 48] } },
      { t: "Bayezid tenta escapar com algumas centenas de cavaleiros. É capturado e levado a Tamerlão.",
        p: { tC: [68, 52] }, x: ["oC"] }
    ]
  }
});
