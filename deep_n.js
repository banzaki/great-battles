// In-depth battles, batch n: constantinopla, ugra, granada, diu, malaca, noitetriste.
// Checked against the English and Portuguese Wikipedia articles on each event (Fall of Constantinople, Walls of
// Constantinople, Giovanni Giustiniani, Kerkoporta, Great Stand on the Ugra River, the Russian article on the Ugra,
// Granada War, Santa Fe, Capitulaciones de Granada, Battle of Diu, Capture of Malacca, Malacca Sultanate,
// La Noche Triste, Noche Triste) and the biographies of Ivan III, Albuquerque and Cortés, plus the works they cite
// (Philippides and Hanak, Nicolle, Crowley, Hillgarth, Ladero Quesada, Halperin, Ostrowski, Bernal Diaz,
// Lopez de Gomara, Correia, Da Empoli). Britannica could not be opened, so it was not used.

Object.assign(GLOSSARY, {
  "muralhas de teodósio": "As muralhas de terra de Constantinopla: um fosso, uma muralha baixa e, atrás dela, uma muralha alta, com torres. Tinham cerca de 5,5 km e protegiam a cidade pelo lado de terra.",
  "corrente": "Corrente de ferro, sustentada por toras que boiavam, esticada na entrada do Corno de Ouro, o porto de Constantinopla, para impedir a entrada de navios inimigos.",
  "azaps": "Soldados otomanos irregulares, mal treinados e mal armados, que atacavam em ondas. Serviam para cansar os defensores antes da tropa de elite.",
  "contramina": "Túnel cavado pelos defensores para encontrar e destruir o túnel que o inimigo cavava por baixo da muralha.",
  "patriarca": "Chefe da Igreja Ortodoxa de uma grande cidade, como Constantinopla. É um cargo parecido com o de arcebispo supremo.",
  "nau": "Navio grande, alto e pesado, de vela, usado para carga e guerra. Os portugueses o usavam nas viagens ao Oriente.",
  "carraca": "Navio de vela alto e pesado, de carga e guerra, usado no Mediterrâneo e no Atlântico. Os navios grandes da frota egípcia em Diu eram carracas.",
  "caravela": "Navio de vela pequeno, leve e rápido, que calava pouca água. Servia para explorar, levar recados e perseguir.",
  "galé": "Navio de guerra movido a remos e também a vela, baixo e comprido. Era bom para manobrar em águas calmas, mas frágil perto dos navios altos.",
  "fusta": "Barco de guerra pequeno e veloz, a remo e a vela, usado nos mares do Índico.",
  "vice-rei": "Governador que representa o rei num território distante e manda em seu nome. Francisco de Almeida foi o primeiro vice-rei português da Índia.",
  "feitoria": "Entreposto fortificado de comércio, fundado por europeus em terra estrangeira, para comprar, estocar e vender mercadorias.",
  "xerafim": "Moeda de ouro ou prata usada na Índia e nos portos do Índico no século 16.",
  "cruzado": "Moeda de ouro portuguesa do século 16. As somas do saque de Malaca eram contadas em cruzados.",
  "bendahara": "Alto ministro do sultanato malaio, uma espécie de primeiro-ministro.",
  "laksamana": "Almirante do sultanato malaio, comandante da frota.",
  "arcabuz": "Arma de fogo portátil do século 15 e 16, pesada e lenta de recarregar, antecessora do mosquete.",
  "emirado": "Reino governado por um emir, título de chefe muçulmano. O Emirado de Granada era o último reino muçulmano da Península Ibérica.",
  "capitulações": "Tratado de rendição, em que o vencido entrega a cidade e o vencedor promete respeitar certas condições. As de Granada tinham 77 artigos.",
  "mudéjares": "Muçulmanos que continuaram vivendo sob governo cristão na Espanha, mantendo a religião e os costumes.",
  "tlatoani": "Título do governante de uma cidade asteca. O de Tenochtitlán era o chefe supremo do império, o 'imperador' dos relatos espanhóis.",
  "tlaxcaltecas": "Povo do altiplano mexicano, inimigo dos astecas, que se aliou a Cortés.",
  "calçada": "Estrada elevada de terra e pedra, aberta sobre a água. As calçadas ligavam a ilha de Tenochtitlán à terra firme, e tinham vãos cortados por canais, atravessados por pontes de madeira.",
  "macuahuitl": "Arma asteca de madeira com lâminas de obsidiana presas nas bordas, parecida com uma espada-serra.",
  "calendário juliano": "O calendário usado na Europa até o século 16. Atrasado cerca de 10 a 12 dias em relação ao Sol, por isso as datas de 1520 mudam conforme a fonte.",
  "grande horda": "O que restou da Horda Dourada no século 15, governado por Akhmat. Foi destruída pelo Canato da Crimeia em 1502.",
  "jugo tártaro": "Como os russos chamam o período em que seus príncipes pagavam tributo aos cãs da Horda Dourada e dependiam deles para reinar.",
  "murza": "Nobre tártaro, chefe de um clã ou de um grupo de guerreiros."
});

Object.assign(DEEP, {
  constantinopla: {
    war: "Conquista otomana de Constantinopla (cerco de 6 de abril a 29 de maio de 1453)",
    hook: "Cinquenta e três dias de cerco, canhões gigantes e navios arrastados por cima de uma colina: assim caiu o último pedaço do Império Romano.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1453, o Império Romano do Oriente, que os historiadores chamam de [[bizantino|bizantinos]], era uma sombra do que tinha sido. Restava a capital e pouco mais, cercada por terras otomanas. Constantinopla tinha menos de 50.000 habitantes dentro das muralhas, mas ainda era uma das cidades mais famosas do mundo, protegida pelas [[muralhas de teodósio]]: uns 5,5 km de muralhas de terra, com um fosso de cerca de 20 metros de largura na frente, uma muralha baixa, e atrás dela outra, de uns 12 metros de altura, com torres. Do outro lado, o mar protegia a cidade, e a entrada do porto, o Corno de Ouro, podia ser fechada por uma [[corrente]].",
        "O ponto fraco era o vale do rio Lico, onde o terreno desce e a muralha fica mais baixa. Era ali que ficava o Mesoteichion, a 'muralha do meio', o trecho mais vulnerável. Mehmed II sabia disso.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["1451", "Mehmed II, com 19 anos, vira sultão. Alguns conselheiros, como o vizir Halil Paxá, são contra atacar Constantinopla."],
          ["1452", "Mehmed constrói uma fortaleza no estreito do Bósforo, uns 10 km ao norte da cidade, e põe canhões ali para controlar os navios que levavam suprimentos."],
          ["Final de janeiro de 1453", "O genovês Giovanni Giustiniani Longo chega com cerca de 700 homens, vindos de Gênova e da ilha de Quios, para ajudar na defesa."],
          ["2 de abril de 1453", "O exército otomano acampa diante das muralhas de terra."],
          ["6 de abril de 1453", "Começa o cerco."]
        ]},
        "A cidade pediu ajuda ao Ocidente. Veneza mandou armaduras e pólvora, mas nenhuma tropa. Constantinopla ia lutar quase sozinha."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Mehmed II, 21 anos" },
        "Sultão otomano desde os 19 anos. A fortaleza que construiu no Bósforo, em 1452, mostra que já planejava o cerco: ela cortava o caminho dos navios com suprimentos. Os seus conselheiros não concordavam. Halil Paxá, o vizir, queria desistir. Zagan Paxá, comandante dos sapadores e das tropas ao norte do Corno de Ouro, queria atacar logo. Mehmed ficou com Zagan.",
        { h: "Constantino XI Paleólogo" },
        "Último imperador bizantino. Sabia que ia ser cercado e tentou se preparar: estocou comida e mandou consertar as muralhas. Ficou com o trecho mais perigoso, o Mesoteichion, e comandou os soldados gregos. Quando Mehmed ofereceu poupar a cidade em troca da rendição, recusou: respondeu que não cabia a ele entregá-la.",
        { h: "Giovanni Giustiniani Longo" },
        "Genovês, chegou no fim de janeiro de 1453 com cerca de 700 homens. Constantino o fez protostrator e líder da defesa, e ele ficou com a parte mais baixa e estratégica das muralhas, entre a porta de São Romano e a porta de Charisius. Depois, passou a lutar ao lado do imperador, no Mesoteichion.",
        { h: "Orban, o fundidor de canhões" },
        "Engenheiro húngaro (alguns dizem alemão), que primeiro ofereceu seus serviços aos bizantinos. Como eles não podiam pagar, foi para o lado de Mehmed e fundiu para ele o maior canhão da batalha, a 'Basílica'.",
        { h: "Os outros nomes" },
        "Do lado otomano, Karadja Paxá comandava as tropas europeias nas muralhas de terra, e Ishak Paxá as da Anatólia ao sul do vale; Suleiman Baltoghlu, a frota. Do lado cristão, Loukas Notaras comandava uma das reservas; Girolamo Minotto, os venezianos no palácio de Blachernae; o alemão Johannes Grant, o engenheiro que organizou as contraminas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os otomanos: as estimativas modernas, baseadas em arquivos turcos, ficam entre 50.000 e 80.000 homens, com 5.000 a 10.000 [[janízaros]]. Testemunhas ocidentais da época falaram em 160.000, 200.000 e até 300.000, números que os historiadores consideram exagerados. A frota otomana teria uns 110 navios, e os cronistas da época dizem até 430.",
        "Os defensores: cerca de 7.000 homens, dos quais uns 2.000 estrangeiros, genoveses, venezianos, catalães e outros. O cronista Sphrantzes, que estava lá, contou cerca de 5.000 gregos capazes de lutar (4.983, num dos totais). Ao todo, 26 navios cristãos no porto.",
        { note: "Os números do cerco são muito discutidos. Os otomanos podem ter sido de 50.000 a 80.000 (estimativas modernas) ou 300.000 (testemunhas da época). Em qualquer caso, eram muito mais numerosos que os defensores." },
        { h: "A artilharia" },
        "O grande canhão de Orban tinha mais de 8 metros de comprimento. Os números mudam conforme a fonte: a bola de pedra pesaria de 270 a uns 550 quilos. Foi arrastado desde Edirne por 60 bois e de 200 a 400 homens, conforme a fonte. Levava três horas para recarregar, e as bolas de pedra eram poucas. Segundo um relato (de Leonardo de Quios e de um cronista russo), ele rachou depois de seis semanas, mas outros historiadores duvidam. Ao todo, os otomanos dispararam cerca de 5.000 tiros e gastaram 55.000 libras de pólvora antes do assalto final. Segundo a Wikipédia em inglês, os defensores consertavam a maior parte dos danos depois de cada tiro.",
        { h: "A batalha em dez movimentos" },
        { formation: true },
        "Primeiro, o cerco. Os otomanos acamparam diante das muralhas de terra, com Karadja Paxá e as tropas europeias ao longo delas, Ishak Paxá e as da Anatólia ao sul do vale do Lico e a tenda de Mehmed perto do Mesoteichion, com os canhões e os janízaros. Os defensores se espalharam pelas duas muralhas, com Constantino e Giustiniani no trecho do vale.",
        "Segundo, o bombardeio. Por semanas, os canhões bateram no vale do Lico, e os defensores consertavam os estragos. Em 12 de abril, a frota otomana foi repelida no Corno de Ouro, e em 18 de abril um assalto ao vale do Lico foi rechaçado por Giustiniani, com menos homens, mas melhor armados.",
        "Terceiro, a corrente. Em 20 de abril, quatro navios cristãos furaram o bloqueio e entraram no porto depois de uma luta pesada. Foi um impulso de moral para os sitiados e uma vergonha para o sultão. O almirante Baltoghlu foi provavelmente ferido num olho e foi castigado depois.",
        "Quarto, o golpe de gênio. Em 22 de abril, Mehmed construiu uma estrada de toras untadas atrás de Galata, a colônia genovesa, e arrastou uns 70 a 80 navios (conforme o autor) por cima da colina até o Corno de Ouro, ao largo da corrente. Os defensores, já poucos, agora precisavam guardar também as muralhas do porto. Em 28 de abril, um ataque cristão de brulotes contra esses navios falhou. Em represália, o sultão mandou empalar uns 40 italianos capturados, e os sitiados executaram 260 prisioneiros otomanos nas muralhas.",
        "Quinto, as minas. De meados a 25 de maio, mineiros de Novo Brdo, sob o comando de Zagan Paxá, cavaram túneis sob as muralhas. Os defensores, com a ajuda de Johannes Grant, abriram [[contraminas|contramina]], interceptaram os túneis em 16, 21, 23 e 25 de maio e usaram [[fogo grego]]. Em 21 de maio, Mehmed ofereceu levantar o cerco em troca da cidade, e Constantino recusou.",
        "Sexto, a véspera. Em 22 de maio houve um eclipse parcial da Lua. Quatro dias depois, uma névoa grossa cobriu a cidade, e uma luz estranha sobre a cúpula de Santa Sofia foi lida como o Espírito Santo indo embora. Em 28 de maio, Mehmed deu um dia de descanso aos soldados. Dentro da cidade, houve procissões e uma missa de vésperas em Santa Sofia.",
        "Sétimo, a primeira onda. Pouco depois da meia-noite de 29 de maio, os soldados cristãos a serviço do sultão atacaram primeiro. Depois vieram os [[azaps]], em ondas, para cansar os defensores.",
        "Oitavo, Blachernae. Os turcomanos da Anatólia atacaram o trecho mais fraco, perto do palácio de Blachernae, no noroeste. Conseguiram abrir caminho e entrar na cidade, mas foram expulsos.",
        "Nono, a última onda. Mehmed lançou os janízaros, sua infantaria de elite. Nesse momento, Giustiniani foi gravemente ferido e levado para fora da muralha. Os genoveses recuaram para o porto, vários gregos correram para casa, e o pânico se espalhou. Os janízaros, liderados por Ulubatlı Hasan, avançaram.",
        "Décimo, a queda. Os otomanos entraram por vários pontos. Os venezianos recuaram para os navios e saíram pelo Corno de Ouro; alguns genoveses chegaram a Galata. Ao meio-dia, a frota otomana controlava o porto."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo o historiador David Nicolle, cerca de 4.000 bizantinos morreram. As perdas otomanas são desconhecidas, mas os historiadores acham que foram pesadas. Mehmed prometeu três dias de saque e, pelos relatos, entrou na cidade no primeiro dia e mandou parar com o saque, porque pouco restava para saquear depois da cruzada de 1204. Historiadores como Crowley, Bradbury e Akbar falam em cerca de 30.000 cidadãos levados para os mercados de escravos. A Wikipédia em português dá 50.000 prisioneiros.",
        "Santa Sofia virou mesquita, e Mehmed nomeou Gennadius Scholarius [[patriarca]] de Constantinopla, para governar a Igreja Ortodoxa sob o sultão. A cidade se tornou a capital do Império Otomano, no lugar de Edirne. O vizir Halil Paxá foi executado depois.",
        { h: "Por que importa" },
        "Muitos historiadores marcam 1453 como o fim da Idade Média e o fim do Império Romano, que durava desde 27 a.C., segundo a Wikipédia em português Estudiosos gregos fugiram para a Itália, o que alimentou o Renascimento. E o controle otomano das rotas do Oriente, dizem alguns autores, empurrou os europeus a procurar caminhos pelo mar, como os de Portugal e da Espanha.",
        "O historiador Nicolle lembra que a cidade não estava condenada de antemão: alguns a chamam de a cidade mais bem defendida da Europa, e o resultado poderia ter sido outro.",
        { h: "Curiosidades e controvérsias" },
        { note: "O destino de Constantino é desconhecido. Segundo a tradição, ele tirou as insígnias imperiais e morreu lutando nas ruas. O veneziano Nicolò Barbaro diz que se enforcou no portão de São Romano, mas seu relato se baseou em informações posteriores. Algumas fontes otomanas falam de um encontro por acaso com fuzileiros turcos. Uma cabeça que diziam ser a dele foi exibida." },
        { note: "Giustiniani: Barbaro, hostil aos genoveses, diz que ele só fingiu estar ferido, por medo, e causou a queda. Outros historiadores, como Philippides e Hanak, mostram que várias fontes dizem que ele estava ferido de verdade. Giustiniani morreu em 1º de junho, a caminho de Quios, onde foi enterrado. Gênova mandou cartas negando a acusação de covardia." },
        { note: "A Kerkoporta: segundo o cronista Doukas, uma pequena porta lateral foi deixada aberta por descuido na manhã de 29 de maio, e uns 50 turcos entraram por ela e içaram sua bandeira na muralha interna, o que teria provocado o pânico. Mas as escavações não acharam uma porta com esse nome na muralha interna, e a história pode ser invenção ou lenda." },
        { note: "O mau agouro: 29 de maio de 1453 foi uma terça-feira. Para os gregos, a terça é, desde então, um dia de azar." },
        { note: "A artilharia: o relato de que o grande canhão rachou aparece em apenas duas fontes, e uma delas é pouco confiável. O efeito real dos canhões também é discutido: a Wikipédia diz que eles abriram brechas, mas o artigo sobre as muralhas diz que elas nunca foram abertas só pela artilharia, e que a entrada decisiva se deu por uma porta, na manhã de 29 de maio." }
      ]}
    ]
  },

  ugra: {
    war: "Guerra entre Moscou e a Grande Horda (1480)",
    hook: "Dois exércitos passaram um mês se encarando por cima de um rio. Segundo a tradição russa, foi assim que acabou o jugo tártaro.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século 15, a [[horda dourada]], o império mongol que dominava os príncipes russos, estava em pedaços. O que restava dela se chamava [[grande horda]]. Os príncipes russos, entre eles o de Moscou, pagavam [[tributo]] aos cãs, que também confirmavam quem seria [[grão-príncipe]].",
        "Dois blocos se formaram. De um lado, o rei Casimiro IV da Polônia e da Lituânia, aliado da Grande Horda. Do outro, Moscou, aliada do Canato da Crimeia. A fronteira entre Moscou e a Lituânia passava pelo rio Ugra, perto de Kaluga, e Moscou defendia a margem do rio Oca, que corria um pouco ao norte.",
        { h: "O caminho até o Ugra" },
        { timeline: [
          ["1472", "O cã Akhmat ataca Aleksin, no rio Oca, e é repelido."],
          ["1476", "Ivan III para de pagar o tributo. Segundo o historiador Charles Halperin, Moscou continuou mantendo relações formais com a Horda por uns 20 anos."],
          ["Fim de 1479", "Ivan briga com os irmãos Andrei, o Grande, e Boris de Volotsk, que passam a negociar com Casimiro IV."],
          ["Fim de maio de 1480", "Chega a Moscou a notícia de que Akhmat vem com seu exército."],
          ["Junho de 1480", "Ivan põe tropas ao longo do rio Oca, em Serpukhov, Tarusa e Kolomna."]
        ]},
        "Os historiadores acham que a briga de Ivan com os irmãos pode ter estimulado Akhmat a atacar. Era a chance de achar o grão-príncipe dividido."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ivan III, grão-príncipe de Moscou" },
        "Seu reinado consolidou o poder de Moscou e, no fim dele, a Rússia já não estava sob o domínio tártaro. Mas em 1480 ele hesitou. Os boiardos se dividiram: um grupo, liderado por Ivan Oshchera e Grigory Mamon, queria que ele fugisse; outro queria resistir. A população de Moscou exigia que ele agisse. Ivan mandou um enviado, Ivan Tovarkov, com presentes. Akhmat exigiu submissão (do próprio Ivan, de seu filho ou de seu irmão) e sete anos de tributo atrasado, e as negociações acabaram.",
        { h: "Akhmat, o cã da Grande Horda" },
        "Queria restaurar o domínio sobre Moscou e cobrar o tributo. Armou o ataque contando com Casimiro IV, que tinha prometido ajuda e não veio. Os ataques de tártaros da Crimeia à Podólia, no sul da Lituânia, mantiveram Casimiro ocupado.",
        { h: "Os outros nomes" },
        "Ivan Molodoi, filho de Ivan, comandou o trecho do rio onde Akhmat atacou em 8 de outubro. Vassian, arcebispo de Rostov, teria escrito uma carta incentivando o grão-príncipe a resistir (a data da carta é discutida). O príncipe Vasily Nozdrevaty e o ex-cã da Crimeia Nur-Devlet teriam sido mandados para atacar a retaguarda de Akhmat."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Nenhuma fonte confiável dá números para os dois lados. Uma fonte chama o exército de Akhmat de o maior exército tártaro do século 15, mas sem dar números. A [[Horda|horda dourada]] era formada quase só de cavaleiros, que se moviam com rebanhos. Do lado russo, as fontes só dizem que havia canhões e [[arcabuzes|arcabuz]].",
        { h: "O terreno" },
        "O Ugra é um rio que desemboca no Oca, perto de Kaluga. Os russos defendiam uma longa linha de rio, de uns 60 verstas (cerca de 64 km), segundo o historiador M. Nesin. Na época, o rio era largo demais para que as flechas dos tártaros fizessem efeito do outro lado.",
        { h: "As manobras" },
        "Akhmat veio pelas terras da Lituânia, passando por Mtsensk, Odoev e Lyubutsk, até Vorotynsk, e esperou Casimiro. Em 30 de setembro, Ivan voltou a Moscou, fez as pazes com os irmãos, que se submeteram, e mandou o tesouro e a família para Beloozero. Em 3 de outubro, foi para Kremenets, perto do rio, e espalhou suas tropas.",
        "Em 8 de outubro, Akhmat atacou o Ugra. Por cerca de quatro dias, tentou forçar a travessia nos vaus. Os russos o repeliram com canhões e arcabuzes. A Wikipédia em inglês chama isso de o primeiro uso em massa de armas de fogo portáteis numa batalha de campo, mas é uma afirmação a se tomar com cuidado. Depois, Akhmat recuou para Luza e tentou uma travessia secreta perto de Opakov, mas foi descoberto.",
        "Durante cerca de um mês, os dois lados ficaram nas margens. Houve negociações e alguma escaramuça, mas nenhuma batalha decisiva. Ivan precisava do tempo para trazer reforços. No fim de outubro, Ivan recuou para Borovsk, para concentrar tropas e lutar em melhor terreno. Pouco depois, Akhmat também começou a recuar, com falta de forragem e comida. Em 11 de novembro, ele decidiu voltar à Horda, e no caminho saqueou 12 cidades lituanas, entre elas Mtsensk, para punir Casimiro. Ivan voltou a Moscou em 28 de novembro.",
        { h: "Por que Akhmat recuou" },
        "Ninguém sabe ao certo. Os historiadores citam várias razões: Casimiro não veio, Ivan reforçou suas tropas ao fazer as pazes com os irmãos, o inverno se aproximava, faltavam comida e forragem e Akhmat podia temer uma emboscada. O cronista Stryjkowski diz que um conselheiro de Akhmat foi subornado. E, segundo o historiador Khodarkovsky, o próprio Akhmat alegou, num documento seu, que os homens estavam sem roupa e os cavalos sem mantas."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Em 6 de janeiro de 1481, Akhmat foi morto por Ibak, cã de Tiumen, e por [[murzas|murza]] nogais, provavelmente com o acordo prévio de Ivan III. A Grande Horda caiu em guerra civil e foi destruída pelo Canato da Crimeia em 1502. Mas a ameaça tártara não desapareceu: os da Crimeia saquearam o sul da Rússia em 1521 e quase chegaram a Moscou, e em 1571 o cã Devlet I Giray incendiou a cidade.",
        { h: "Por que importa" },
        "Na historiografia russa tradicional, 1480 é a data em que acabou o [[jugo tártaro]], e a Rússia passou a ser um Estado independente. É assim que a história é contada até hoje, mas os historiadores modernos a discutem (veja abaixo).",
        { h: "Curiosidades e controvérsias" },
        { note: "Os historiadores modernos dão outra leitura. Janet Martin chamou a importância do episódio de 'embelezada'. Charles Halperin lembra que nenhum texto de 1480 fala de libertação do jugo. Donald Ostrowski e Halperin chegam a descrever o episódio como um mito historiográfico, ou um incidente diplomático menor. Gorsky acha que a independência de fato veio já em 1472, em Aleksin." },
        { note: "Ivan III não se vangloriou. Numa carta de 1481 a Mengli Giray, ele só escreveu que Deus tinha salvado a Rússia de Akhmat, uma afirmação bem mais modesta que a lenda posterior." },
        { note: "Ainda se discute o lugar exato da luta: Opakov, Gorodets ou a foz do Ugra. Se foi uma 'parada' ou uma batalha também se discute: houve tentativas de travessia, tiros e escaramuças, mas nada decisivo." },
        { note: "A diversão: a história de que Nozdrevaty e Nur-Devlet teriam queimado Sarai, a capital da Horda, vem da Crônica de Cazã e é considerada duvidosa. Que houve uma incursão para distrair Akhmat é plausível, mas mal documentado." }
      ]}
    ]
  },

  granada: {
    war: "Guerra de Granada (1482–1492)",
    hook: "Os Reis Católicos fundaram uma cidade de pedra diante de Granada, para mostrar que só iriam embora quando a cidade caísse.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1491, o [[emirado]] de Granada era tudo o que sobrava do mundo muçulmano na Península Ibérica. Era governado pela dinastia nasrida.",
        "O casamento de Isabel de Castela com Fernando de Aragão, em 1469, criou uma frente única contra Granada. A guerra começou em dezembro de 1481, quando os granadinos atacaram Zahara durante uma trégua, em represália a uma incursão cristã. A tomada de Alhama, no ano seguinte, é considerada o começo formal da guerra.",
        "O que ajudou os cristãos foi a briga dentro de Granada. O príncipe Boabdil se rebelou contra o pai, Abu al-Hasan. Foi capturado em Lucena, em 1483, e Fernando o usou, soltando-o para que fizesse guerra ao próprio pai. Em 1485, o tio de Boabdil, al-Zagal, tomou o poder, e Boabdil fugiu para a proteção dos reis. Em 1487, retomou Granada enquanto o tio lutava em outro lugar.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["1469", "Casamento de Isabel e Fernando."],
          ["26 de dezembro de 1481", "Os granadinos tomam Zahara, durante uma trégua."],
          ["1483", "Boabdil é capturado em Lucena."],
          ["1485 a 1487", "Guerra civil em Granada. Boabdil, apoiado por Castela, toma a capital."],
          ["Abril de 1491", "Começa o cerco final a Granada."]
        ]},
        "O fator decisivo foi a artilharia. Fernando recorreu a especialistas franceses e borgonheses, e Castela expandiu muito seus canhões, enquanto os muçulmanos quase só usavam peças capturadas. O historiador Weston Cook escreveu que a pólvora e os cercos de artilharia ganharam a guerra de Granada."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Isabel e Fernando" },
        "Isabel era rainha de Castela e Fernando, rei de Aragão. Juntos governavam dois reinos que se tornariam a Espanha. Tinham em Granada uma meta religiosa e política: terminar a Reconquista. Isabel esteve pessoalmente em outros cercos, como o de Baza, para manter o ânimo dos soldados. Em 1496, o papa lhes daria o título de Reis Católicos.",
        { h: "Boabdil (Abu Abdalá)" },
        "O último emir de Granada. É numerado como Muhammad XI ou XII, conforme o autor. Foi preso e solto pelos inimigos em 1483 e, em 1491, sem esperança de ajuda externa, negociou a rendição. Um cronista de Granada chamou a captura dele em Lucena de 'a causa da destruição da pátria'.",
        { h: "Os negociadores" },
        "Pelos reis, Gonzalo Fernández de Córdoba e o secretário Fernando de Zafra. Por Boabdil, o alcaide Abu al-Qasim (Abul Kasim). Segundo Hernán Pérez del Pulgar, Gonzalo foi à Alhambra de noite para resolver a questão das garantias a Boabdil. Hernando de Talavera, confessor da rainha, seria o primeiro arcebispo de Granada, com uma política de conciliação com os muçulmanos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os cronistas da época falam de 50.000 a 70.000 homens nos anos de maior esforço, como 1491, e de 10.000 a 29.000 nos anos calmos. O historiador Ladero Quesada aceita esses números. García de Gabiola discorda: acha que Castela só tinha como alimentar de 8.000 a 20.000. Sobre as forças de Granada não há número confiável. Os 15.000 a 50.000 infantes que alguns citam são descartados por historiadores. Um soldado muçulmano capturado em Baza disse que eram 4.000, não 15.000 (mas era a guarnição de Baza, não a de Granada).",
        { h: "O terreno" },
        "Os reis acamparam na vega, a planície diante da cidade, num acampamento chamado Real de la Vega. Os cristãos tinham também mais artilharia, o que contava muito num cerco.",
        { h: "O cerco" },
        "O cerco durou oito meses, a partir de abril de 1491. A Wikipédia em espanhol diz que a fase teve 'mais intriga do que acontecimentos militares'. Os reis ficaram num acampamento na vega, o Real de la Vega. Um incêndio destruiu boa parte dele (alguns relatos atribuem a causa a uma vela numa tenda da rainha, outros falam em acidente; não achei data exata). Como resposta, os reis mandaram construir no lugar uma cidade inteira, de tijolo e pedra, Santa Fé, em cerca de 80 dias, com 48 hectares, muros, fosso e quatro portões. Para os cercados, foi um golpe psicológico: os reis não iam embora.",
        { h: "A rendição" },
        "Sem socorro, e com a fome e a desordem no governo de Granada, Boabdil negociou. O sultão do Egito, Qaitbay, só repreendeu Fernando com palavras, e os mamelucos não rompiam a aliança com Castela e Aragão contra os otomanos.",
        "Em 25 de novembro de 1491, as [[capitulações]] foram assinadas, com 77 artigos. Os muçulmanos podiam manter a religião, os costumes e as leis, e ninguém seria obrigado a se converter. Podiam manter as armas, menos as de pólvora, ficar isentos de alguns impostos por três anos e emigrar para o norte da África com passagem garantida por três anos. Os cativos cristãos seriam libertados. Boabdil receberia dinheiro e um pequeno senhorio nas Alpujarras. A cidade teria dois meses para se entregar.",
        "Boatos sobre as condições provocaram tumultos em Granada, contidos por tropas cristãs e pelos leais a Boabdil. Em 2 de janeiro de 1492, os cristãos entraram. Por precaução, introduziram tropas na Alhambra, caso houvesse resistência, que não houve. Boabdil saiu da cidade nesse dia e nunca mais voltou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Boabdil foi primeiro para as Alpujarras, as terras garantidas pelos reis. Em novembro de 1493, depois de receber uma grande indenização, cruzou o estreito para o norte da África, como a maior parte da elite andaluza.",
        "O tratado não durou. A Coroa respeitou as condições até 1499. Naquele ano, o cardeal Cisneros recebeu uma política mais dura, o que causou uma revolta no Albaicín. Em 1500 queimou livros árabes, exceto os de medicina, e em 1501 foi decretada a conversão forçada dos muçulmanos de Granada, sem opção de exílio. Os [[mudéjares]] que ficaram foram, com o tempo, expulsos da Espanha.",
        { h: "Por que importa" },
        "Foi o fim da [[reconquista]], depois de quase oito séculos, e a incorporação do reino nasrida à Coroa de Castela. Ainda em 1492, o Decreto da Alhambra expulsou cerca de 200.000 judeus de Castela e Aragão. E em 17 de abril de 1492, em Santa Fé, os reis assinaram com Cristóvão Colombo as capitulações que financiaram sua viagem.",
        { h: "Curiosidades e controvérsias" },
        { note: "As capitulações foram assinadas em Santa Fé, segundo a Wikipédia em espanhol, mas o documento que as confirma diz 'Real de la Vega de Granada'. As duas fontes não concordam sobre o lugar." },
        { note: "O privilégio real que confirmou os termos tem data de 30 de dezembro de 1491 (que no calendário castelhano de então, que começava o ano em 25 de dezembro, aparece como 1492). Por isso se vê tanto 1491 quanto 1492 nas fontes." },
        { note: "O incêndio do acampamento é famoso, mas as fontes que li não dão a data exata nem a causa com certeza." }
      ]}
    ]
  },

  diu: {
    war: "Expansão portuguesa no Índico (1505–1515)",
    hook: "Um pai em luto, 18 navios e uma tarde de fevereiro: foi o que bastou para destruir a frota que tentava expulsar Portugal do Índico.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois que Vasco da Gama chegou à Índia, em 1498, os portugueses descobriram que comerciar em paz ia ser difícil. Os mercadores muçulmanos que dominavam o comércio da costa se opuseram a eles. Em 1500, o Samorim de Calicute permitiu ou ordenou um massacre de portugueses na cidade. Portugal se aliou ao rajá de Cochim e, em dezembro de 1504, destruiu a frota de especiarias que o Samorim mandava todo ano para o Egito.",
        "O rei D. Manuel I nomeou D. Francisco de Almeida o primeiro [[vice-rei]] da Índia. Almeida partiu de Lisboa em 1505 com cerca de 20 navios e levou seu filho Lourenço, de 20 anos, como capitão-mor dos mares da Índia.",
        "O comércio de especiarias por Alexandria e Veneza estava ameaçado. Os mercadores muçulmanos pediram ajuda ao sultão mameluco do Egito, e Veneza, que também perdia dinheiro, incentivou a reação. Os [[mamelucos]] não tinham experiência de mar, e Veneza forneceu navios e especialistas. A expedição foi comandada pelo emir Hussain al-Kurdi, a quem os portugueses chamavam de Mirocém, e chegou a Diu só em setembro de 1507, depois de atrasos.",
        { h: "O caminho até Diu" },
        { timeline: [
          ["1498", "Vasco da Gama chega à Índia."],
          ["Dezembro de 1504", "Os portugueses destroem a frota de especiarias do Samorim."],
          ["Setembro de 1507", "A frota mameluca chega a Diu."],
          ["Março de 1508", "Em Chaul, Mirocém e Malik Ayaz enfrentam a frota de Lourenço de Almeida, durante três dias. Lourenço é morto."],
          ["6 de dezembro de 1508", "Afonso de Albuquerque chega com ordens do rei para assumir o governo. Almeida se recusa a entregar."],
          ["9 de dezembro de 1508", "Almeida parte para Diu com a frota."],
          ["3 de fevereiro de 1509", "A batalha."]
        ]},
        "Em Chaul, os portugueses foram surpreendidos porque os navios de Mirocém, de estilo europeu, se pareciam com os de Albuquerque. A nau de Lourenço afundou, ele morreu, e seu corpo nunca foi achado. Mirocém contou ao Cairo uma grande vitória, mas uma crônica persa, a Mirat Sikandari, fala em uma escaramuça."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "D. Francisco de Almeida" },
        "Vice-rei da Índia. A morte do filho o deixou arrasado: ficou três dias fechado em seus aposentos e jurou vingança. Quando Albuquerque chegou com a ordem do rei para substituí-lo, Almeida se recusou a entregar o poder antes de vingar o filho, o que na prática foi desafiar o rei. Seu objetivo em Diu era pessoal, mas também estratégico: numa carta ao rei, escreveria que, enquanto Portugal fosse poderoso no mar, manteria a Índia.",
        { h: "O emir Hussain al-Kurdi (Mirocém)" },
        "Comandante da frota mameluca. Em dez meses, depois de Chaul, consertou os navios, recuperou uma nau e ganhou uns 300 reforços. Mas não tinha dinheiro para pagar as tropas e empenhou a artilharia a Malik Ayaz. Ficou em Diu porque esperava reforços ou temia a ira do sultão.",
        { h: "Malik Ayaz (Meliqueaz)" },
        "Governador de Diu em nome do sultão do Guzerate. Ex-escravo e arqueiro, de origem georgiana ou dálmata, segundo a Wikipédia. Tentava agradar a todos e acabou entre Mirocém, os portugueses e seu soberano. Quando a frota de Almeida apareceu, saiu da cidade e deixou Mirocém no comando. Depois da batalha, devolveu os prisioneiros de Chaul bem tratados.",
        { h: "Os outros nomes" },
        "João da Nova comandava a nau Flor de la Mar, que bloqueou o canal. Nuno Vaz Pereira comandava o Espírito Santo, e Francisco de Távora, o Rei Grande. Kunjali Marakkar liderava os barcos de Calicute."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A frota portuguesa tinha 18 embarcações: nove [[naus|nau]] (cinco grandes: Flor de la Mar, Espírito Santo, Belém, Rei Grande e Taforeia Grande), quatro [[caravelas|caravela]] redondas, duas caravelas latinas, duas [[galés|galé]] (São Miguel e São Cristóvão) e um bergantim, o Santo António, que levava recados. Os homens: de 800 a 1.500 portugueses, mais cerca de 400 nairs de Cochim, conforme a fonte.",
        "Os números dos aliados muçulmanos mudam muito. O texto da Wikipédia em inglês fala em 6 [[carracas|carraca]] e 6 galés do Mediterrâneo de Mirocém, 4 carracas de Diu, 30 galés leves e de 70 a 150 barcos de Calicute. A versão em português diz 10 naus de Mirocém, 30 [[fustas|fusta]] de Diu e de 70 a 200 fustas de Calicute. Os homens: cerca de 450 mamelucos e de 4.000 a 5.000 gujaratis, entre eles mercenários turcos, núbios e etíopes, e artilheiros venezianos. Boa parte da 'artilharia' eram arqueiros.",
        { note: "Quase todos os números dessa batalha divergem entre as fontes. Preferimos faixas a números exatos." },
        { h: "A viagem de vingança" },
        "Na viagem, Almeida parou em Calicute, em Baticalá, em Onor e em Angediva. Em Dabul, o capitão Paio de Sousa foi emboscado e morto com outros por uns 6.000 homens. Dois dias depois, Almeida desembarcou com tropas, esmagou a guarnição e mandou arrasar a cidade. Os povoados em volta foram destruídos, e a maioria dos habitantes que não fugiu foi morta. Os moradores a amaldiçoaram: 'A ira dos frangues venha sobre ti'. Em Bombaim, Almeida respondeu a uma carta de Malik Ayaz em tom respeitoso e ameaçador: ia se vingar dos que mataram seu filho e dos que os ajudaram.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, em 2 de fevereiro, os portugueses avistaram Diu. Malik Ayaz saiu da cidade, deixando Mirocém no comando. Mirocém mandou seus navios a remo atacar, mas eles ficaram sob o alcance dos canhões da fortaleza e, à noite, recuaram para o canal.",
        "Segundo, em 3 de fevereiro, Mirocém ancorou as carracas e as galés coladas umas nas outras, perto da costa, debaixo da fortaleza, e esperou o ataque. Com isso, entregou a iniciativa. Almeida dividiu a frota em quatro grupos: um para abordar as carracas depois de um bombardeio, outro para atacar as galés pelo flanco, um de apoio de fogo, em que a nau-capitânia ficava de longe, dirigindo a luta, e o Santo António para as comunicações. O capitão Simão Martins percorreu a frota lendo a fala de Almeida, que prometia saque, o título de cavaleiro aos soldados, perdão aos condenados e liberdade aos escravos que servissem.",
        "Terceiro, por volta das 11h, quando a brisa soprou, a bandeira real subiu na Flor de la Mar e um tiro deu o sinal. A frota avançou gritando 'Santiago!', com a galé São Miguel sondando o canal à frente. Na água calma do porto, os portugueses usaram o tiro rasante, que fazia a bala saltar sobre a água. Uma salva do Espírito Santo atingiu um navio na linha d'água e o afundou quase de imediato.",
        "Quarto, o Espírito Santo abordou a capitânia de Mirocém, e os portugueses tomaram metade do convés antes que os navios fossem amarrados um ao outro. Outra nau mameluca prendeu o Espírito Santo pelo outro lado, e os portugueses, cercados por gujaratis, quase foram dominados. Rui Pereira morreu. Nesse momento crítico chegou o Rei Grande, que atingiu o lado livre da capitânia de Mirocém com reforços e virou a luta. No alto, arqueiros etíopes e turcos enfrentaram os arcabuzeiros portugueses, mas muitos mercenários fugiram.",
        "Quinto, Mirocém tinha guardado seus navios a remo no canal, para atacar por trás, esperando que os portugueses usassem todos os navios na abordagem. João da Nova viu isso e manobrou a Flor de la Mar para fechar o canal. A massa de galés ficou presa, um alvo perfeito, e os canhões afundaram muitas. Os barcos de Calicute não passaram pela nau e, depois de uma escaramuça, voltaram. A Flor de la Mar teria disparado mais de 600 tiros.",
        "Sexto, as galés e as caravelas portuguesas, mais rápidas, atacaram pelo flanco as galés muçulmanas, paradas, cujos canhões não conseguiam responder. O primeiro ataque foi repelido, mas uma salva deixou três galés à deriva.",
        "Sétimo, os portugueses foram tomando as carracas. A fumaça dos canhões os cegava em parte. A capitânia de Mirocém foi capturada, e muitos fugiram dela. As caravelas, de pouco calado, se posicionaram entre o inimigo e a costa e mataram quem tentava chegar à praia a nado.",
        "Oitavo, ao anoitecer, só restava uma carraca enorme, a maior da batalha, ancorada tão perto da costa que a maioria dos navios portugueses, de calado maior, não chegava até ela. O casco reforçado resistiu, mas o bombardeio contínuo de toda a frota a afundou ao anoitecer. Mirocém escapou a cavalo, com 22 mamelucos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas portuguesas, segundo a Wikipédia em inglês: 32 mortos e cerca de 300 feridos (a versão em português diz 300 desaparecidos). Do lado muçulmano, todos os navios foram afundados ou capturados: 428 mamelucos mortos e 1.300 gujaratis, segundo a mesma fonte.",
        "Almeida se recusou a ocupar Diu, porque manter a cidade custaria demais. Assinou um acordo comercial com Malik Ayaz e abriu uma [[feitoria]]. Ficaram para os portugueses 3 galés, 3 carracas, 600 canhões de bronze e 3 bandeiras do sultão do Cairo, mandadas ao Convento de Cristo, em Tomar. Os mercadores de Diu, que tinham financiado a frota, pagaram 300.000 [[xerafins|xerafim]], dos quais 100.000 foram para as tropas e 10.000 para o hospital de Cochim.",
        "Os mamelucos capturados foram mortos de forma brutal em vingança pela morte de Lourenço: enforcados, queimados vivos, esquartejados ou amarrados à boca dos canhões.",
        { h: "Por que importa" },
        "Os portugueses mostraram aos indianos, aos muçulmanos e aos venezianos que a marinha de Portugal era imbatível, e a aliança entre Veneza e o Egito, que controlava o comércio do oceano, acabou. O historiador Michael Adas diz que Diu estabeleceu a superioridade naval europeia no Índico por séculos. O monopólio português durou até a chegada dos ingleses, que acabaram com ele na batalha de Swally, em 1612. William Weir põe Diu em sexto lugar entre as 50 batalhas que mudaram o mundo.",
        "Almeida entregou o governo a Albuquerque no fim de 1509 e morreu na viagem de volta, numa escaramuça com os khoikhoi perto do Cabo da Boa Esperança, com cerca de 70 portugueses. Mirocém sobreviveu, voltou ao Cairo, recebeu o comando de uma nova frota e foi assassinado no mar Vermelho por seu imediato turco, Salmane Reis. O sultanato mameluco caiu para os otomanos em 1517. Malik Ayaz foi o único dos protagonistas que não morreu de forma violenta: morreu rico, em 1522.",
        { h: "Curiosidades e controvérsias" },
        { note: "A vingança: a batalha foi movida em boa parte pela vingança pessoal de Almeida. Para a Wikipédia em inglês, a recusa de entregar o poder a Albuquerque foi quase uma rebelião contra o rei." },
        { note: "O saque de Dabul é visto como uma represália desproporcional, contra uma cidade que os portugueses não tinham atacado antes." },
        { note: "Chaul: Mirocém falou de grande vitória, e a Mirat Sikandari fala em escaramuça. As duas versões ainda são discutidas. O que Almeida e o enviado de Malik Ayaz conversaram em Angediva não ficou documentado." },
        { note: "A frase de Almeida sobre o mar, 'enquanto fores poderoso no mar, manterás a Índia', vem de uma carta ao rei. A frase de vingança que se atribui a ele, sobre quem comeu o frango ter de comer o galo ou pagar, aparece na Wikipédia só como algo que ele 'supostamente' disse." }
      ]}
    ]
  },

  malaca: {
    war: "Expansão portuguesa no Sudeste Asiático (1509–1511)",
    hook: "Com talvez mil homens, Albuquerque tomou a cidade que, escreveu um português, tinha Veneza pela garganta.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Malaca era o grande entreposto entre a Índia, a China e as ilhas das especiarias. O comércio entre o mar da China e o Índico passava pelo estreito que a cidade controlava. O português Tomé Pires escreveu que quem fosse senhor de Malaca teria Veneza pela garganta, uma frase que mostra por que o porto interessava tanto aos portugueses, que queriam chegar ao Extremo Oriente antes de Castela e barrar o comércio muçulmano no Índico.",
        "A primeira visita foi um desastre. Em setembro de 1509, a frota de Diogo Lopes de Sequeira chegou a Malaca. O sultão Mahmud Shah deu licença para uma feitoria, mas mercadores do Guzerate e de Java o convenceram a trair os portugueses. Os navios foram emboscados, Sequeira fugiu e deixou para trás uns 20 portugueses, que se renderam e foram presos. Entre eles estava o feitor Rui de Araújo, que mandou informações sobre as defesas da cidade a Albuquerque por meio do mercador Nina Chatu.",
        { h: "O caminho até Malaca" },
        { timeline: [
          ["Setembro de 1509", "A frota de Sequeira é emboscada em Malaca. Cerca de 20 portugueses ficam presos."],
          ["Dezembro de 1510", "Albuquerque toma Goa, na Índia."],
          ["Abril de 1511", "Albuquerque reúne a frota para ir a Malaca."],
          ["1º de julho de 1511", "A frota chega diante da cidade."],
          ["25 de julho de 1511", "Primeiro assalto, no dia de São Tiago."],
          ["Agosto de 1511", "Segundo assalto, em 8 ou 15 de agosto, conforme a fonte."],
          ["24 de agosto de 1511", "Albuquerque toma o controle total da cidade."]
        ]},
        "O [[bendahara]], o ministro principal do sultão, tinha sido assassinado pouco antes, mas as fontes que li não dizem mais sobre isso."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Afonso de Albuquerque" },
        "Governador da Índia, tinha tomado Goa em 1510. Antes do assalto, disse a seus homens que, se o comércio muçulmano de especiarias fosse cortado, o Cairo e Meca estariam perdidos. Pediu a Mahmud o retorno dos prisioneiros sem resgate, 300.000 [[cruzados|cruzado]] e permissão para construir uma fortaleza no lugar que escolhesse.",
        { h: "O sultão Mahmud Shah" },
        "Respondeu com vagueza. Disse ser leal ao rei Manuel e pediu um tratado de paz antes de tudo, enquanto reforçava as defesas e chamava a frota de volta. O [[laksamana]], o almirante da frota, de uns 80 anos, teria desertado para Singapura. Alguns historiadores acham que a figura do laksamana lembra a de Hang Tuah, o herói das lendas malaias.",
        { h: "Os outros nomes" },
        "D. João de Lima comandou o grupo que desembarcou a leste da ponte. António de Abreu comandou o junco armado. Nina Chatu, o mercador que passou informações, foi depois nomeado bendahara pelos portugueses. Utimuti Raja, um mercador javanês, foi preso e executado por manter contato com a família real exilada."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números dos portugueses dependem da fonte. As cartas de Albuquerque falam em 700 portugueses e 300 malabares. O florentino Giovanni da Empoli fala em 1.500 portugueses e 800 aliados. Fontes malaias dizem que eram pelo menos 2.000. A Wikipédia em inglês, noutro artigo, fala em cerca de 900 portugueses, 200 mercenários hindus e uns 18 navios.",
        "Sobre Malaca, mercadores chineses e o prisioneiro Rui de Araújo disseram a Albuquerque que havia 20.000 homens, 8.000 peças de artilharia e armas de fogo e cerca de 20 elefantes de guerra. Mas Albuquerque depois informou que só uns 4.000 estavam prontos para lutar, e menos de 100 canhões foram de fato usados. Os gujaratis teriam construído a maior parte das fortificações.",
        { note: "Os números de Malaca são os mais incertos desta batalha. Os dos portugueses vão de 1.000 a 2.300; os dos defensores, de 4.000 a 20.000." },
        { h: "O terreno" },
        "A cidade é dividida pelo rio Malaca, com uma ponte no meio. De um lado ficavam o palácio e a mesquita, a leste, e do outro lado, a oeste, o bairro de Upeh. Quem tomasse a ponte controlava a passagem entre as duas metades.",
        { h: "O assalto em quatro tempos" },
        "Primeiro, a ameaça. Em 1º de julho, a frota chegou com bandeiras, trombetas e meia hora de salvas de canhão, para impressionar. Albuquerque proibiu qualquer navio de sair do porto sem sua licença. Enquanto Mahmud enrolava, no meio de julho a frota bombardeou a cidade, e uma partida queimou as casas à beira-mar e os navios gujaratis no porto. O sultão então soltou os prisioneiros, mas não aceitou as outras exigências.",
        "Segundo, 25 de julho. Às 2h da madrugada, sob o bombardeio da frota, os portugueses desembarcaram em dois grupos, um de cada lado da ponte: Albuquerque a oeste, em Upeh, e D. João de Lima a leste, onde ficavam o palácio e a mesquita. Venceram as paliçadas. No lado leste, o grupo de Lima enfrentou um contra-ataque dos [[elefantes de guerra]] do sultão, liderados por ele mesmo, por seu filho Alauddin e pelo sultão de Pahang. Os fidalgos portugueses atacaram o elefante real com piques, e ele, em pânico, se virou e dispersou os outros. O sultão caiu, ficou ferido e escapou na confusão. Ao meio-dia, os dois grupos se encontraram na ponte. Albuquerque cancelou o ataque, porque as provisões estavam acabando, e, antes de recuar, mandou queimar o palácio e a mesquita.",
        "Terceiro, o junco. No dia 26, os portugueses armaram um junco (uma versão diz que foi oferecido por mercadores chineses, outra que foi tomado) com artilharia (inclusive peças de carregar pela culatra) e piques compridos para afastar jangadas incendiárias, e o rebocaram até a ponte. Ele encalhou na foz do rio, sob fogo pesado. O capitão António de Abreu levou um tiro no rosto e continuou no posto, dizendo que comandaria da cama se fosse preciso. Mais tarde, a maré alta o fez flutuar de novo.",
        "Quarto, o segundo assalto. Albuquerque reuniu os capitães e lembrou que era preciso tomar a cidade, cortar o fluxo de especiarias para o Cairo e Meca e impedir que o islã se firmasse. Desembarcou todas as tropas em três grupos em Upeh, apoiadas por uma caravela, uma galé e barcos armados. O junco, levantado pela maré, atraiu o fogo para a ponte, enquanto o desembarque se fazia. Os portugueses retomaram a ponte, que estava sem defensores, e a fortificaram com barricadas de barris cheios de terra e artilharia atrás. Um esquadrão tomou a mesquita, depois de uma luta longa, e outros subiram pelas ruas para calar canhões nos telhados, o que custou muitas vidas civis. A frota bombardeou a cidade por dez dias. Os moradores desesperados pediram paz, e os comerciantes de Pegu foram os primeiros. Albuquerque deu aos comerciantes chineses, hindus e de Pegu bandeiras portuguesas para marcar as casas que não seriam saqueadas."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Em 24 de agosto, Albuquerque tomou o controle total, e mandou 400 homens, seis de frente, com tambores e trombetas, limpar os bolsões de resistência, trabalho que levou oito dias. O sultão juntou o tesouro e as tropas que restavam e fugiu para a selva. As baixas portuguesas foram 28 mortos, e muitos feridos, alguns por flechas envenenadas, dos quais poucos dos mais graves sobreviveram. As perdas de Malaca são desconhecidas.",
        "O saque, organizado, durou três dias. Rendeu mais de 200.000 cruzados para a Coroa, cerca de 3.000 bombardas de bronze e ferro e escravos. Segundo o cronista Gaspar Correia, os soldados comuns receberam mais de 4.000 cruzados cada, e os capitães, até 30.000.",
        "Os portugueses construíram a fortaleza A Famosa com pedras de mesquitas e túmulos, concluída entre o fim de 1511 e 1512. Mahmud Shah fugiu para Pahang e depois montou nova capital em Bintan, de onde fez ataques até que os portugueses a destruíram em 1526. Ele se retirou para Kampar, em Sumatra, e morreu ali dois anos depois. Seus filhos fundaram os sultanatos de Perak e de Johor.",
        { h: "Por que importa" },
        "Portugal ficou com Malaca por uns 130 anos, até 1641, quando os holandeses e Johor a tomaram, mais pela fome e pela doença que pela força. Mas a administração portuguesa era mal financiada e ineficiente, e os comerciantes asiáticos passaram a evitar o porto, preferindo outros, como Johor. A China reagiu com uma perseguição aos portugueses que durou décadas. Tomé Pires, que liderava uma embaixada, teria morrido preso na China. Portugal só ganharia o direito de se instalar em Macau em 1557.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data do segundo assalto: a Wikipédia dá 8 de agosto num artigo e 15 de agosto em outro." },
        { note: "A reação ao canhão: os Anais Malaios descrevem os malaios espantados com os tiros em 1509, e os estudiosos acham o relato um pouco exagerado. Correia e Faria e Sousa descrevem reações parecidas, mas menos dramáticas." },
        { note: "O elefante: segundo a Wikipédia, a cena dos elefantes foi no primeiro assalto, em 25 de julho. O sultão caiu, ficou ferido e escapou, e a cidade só foi tomada semanas depois." },
        { note: "A população: Albuquerque estimava 100.000 habitantes. As estimativas modernas ficam por volta de 40.000." },
        { note: "Os fundidores dos canhões de Malaca: os historiadores discutem se eram javaneses, treinados em Pegu ou siameses." }
      ]}
    ]
  },

  noitetriste: {
    war: "Conquista do México por Cortés (1519–1521)",
    hook: "Numa noite de chuva, os espanhóis tentaram sair em silêncio de uma cidade cercada de água, e a cidade acordou.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Tenochtitlán, a capital asteca, ficava numa ilha no lago Texcoco, ligada à terra por [[calçadas|calçada]] de pedra e terra, com vãos atravessados por pontes de madeira. Hernán Cortés chegou a ela em 8 de novembro de 1519 e foi alojado numa casa. Logo prendeu o imperador, Moctezuma II, como refém, por medo de uma traição. A cidade foi ficando cada vez mais hostil.",
        "Em maio de 1520, Cortés soube que o governador de Cuba, Diego Velázquez, mandou Pánfilo de Narváez prendê-lo. Deixou Pedro de Alvarado na cidade, derrotou Narváez na costa, que tinha cerca de 1.100 homens, e recrutou os que sobraram. Enquanto isso, Alvarado, temendo uma revolta, mandou matar nobres e sacerdotes astecas durante uma festa no Templo Mayor. Os astecas cercaram a casa onde estavam os espanhóis.",
        { h: "O caminho até a fuga" },
        { timeline: [
          ["8 de novembro de 1519", "Cortés chega a Tenochtitlán e prende Moctezuma."],
          ["Maio de 1520", "Cortés sai para enfrentar Narváez. Alvarado mata os astecas no Templo Mayor, e a cidade se revolta."],
          ["Fim de junho de 1520", "Cortés volta, com os homens de Narváez, e encontra os espanhóis cercados. Os astecas escolheram outro governante, Cuitláhuac. Moctezuma, que tentou acalmar o povo de uma varanda, é atingido por pedras e morre (as fontes divergem sobre o dia e a causa)."],
          ["30 de junho a 1º de julho de 1520", "Os espanhóis tentam fugir."]
        ]},
        "Os astecas e os espanhóis se acusam mutuamente da morte de Moctezuma. Os relatos espanhóis dizem que o próprio povo o matou com pedras. Os relatos astecas dizem que foram os espanhóis."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hernán Cortés" },
        "Chefe da expedição. Sem comida, sem água e sob ataque, decidiu romper o cerco. Pediu uma trégua de uma semana, prometendo devolver o tesouro e partir em paz, o que servia para enganar os astecas. Entre as três rotas possíveis, escolheu a mais curta, a de Tlacopan, a oeste. E deixou que os soldados levassem todo o ouro que quisessem, o que pesou muito na fuga.",
        { h: "Cuitláhuac" },
        "Novo [[tlatoani]], escolhido pelos astecas depois da revolta. Comandou a resistência. Morreu de varíola, pouco depois.",
        { h: "Pedro de Alvarado" },
        "Lugar-tenente de Cortés. Foi quem ordenou o massacre no Templo Mayor, que provocou a revolta. Na fuga, Cortés o encontrou ferido e sem cavalo. Sobreviveu: o relato é que um soldado, Martín de Gamboa, o ajudou a subir no seu cavalo. A lenda do 'salto de Alvarado', em que ele teria pulado um vão com uma lança, não achei nas fontes.",
        { h: "Os outros" },
        "A intérprete de Cortés, La Malinche, sobreviveu. Entre os capitães espanhóis estavam Gonzalo de Sandoval, Cristóbal de Olid e Juan Velázquez de León, que morreu. Bernal Díaz del Castillo, soldado que estava lá, escreveu o principal relato."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os espanhóis: as fontes dizem de 600 a 2.100, com cerca de 73 cavalos, além de aliados [[tlaxcaltecas]]. Os números dos aliados vão de 2.000 a 3.000 (Cortés) a cerca de 20.000 (uma estimativa da Wikipédia em português). Os astecas: de 20.000 a 50.000 combatentes, segundo estimativas modernas.",
        { note: "Os números dessa batalha divergem demais. Não há uma contagem confiável nem dos espanhóis, nem dos aliados, nem dos astecas." },
        { h: "O terreno" },
        "A cidade ficava numa ilha, com oito calçadas. Os astecas tinham tirado as pontes de quatro delas. Os espanhóis então construíram uma ponte portátil para atravessar os vãos, e cobriram os cascos dos cavalos para abafar o barulho. Das três rotas, a mais curta era a calçada de Tlacopan (Tacuba), a oeste.",
        { h: "A fuga" },
        "Perto da meia-noite, na noite de 30 de junho a 1º de julho, o exército saiu da casa onde estava alojado, sob chuva (outros relatos falam de uma noite escura e com névoa). No começo, a calçada parecia sem guardas. Mas os guerreiros águia os descobriram. Segundo alguns relatos, quem deu o alarme foi uma velha que tirava água no canal dos Toltecas (Tlaltecayohuacan). Outros falam do sacerdote do templo de Huitzilopochtli, cujo tambor soou.",
        "Centenas de canoas atacaram pelos dois lados, e das calçadas guerreiros com [[macuahuitl]], lanças, flechas e pedras de funda. Do alto dos telhados, atacavam a retaguarda. Com o tempo, os vãos se encheram de destroços e de corpos, e os últimos cruzaram por cima deles. Muitos soldados, carregados de ouro, caíram no lago e se afogaram.",
        "Cortés chegou à terra firme, em Tacuba, com a cavalaria da vanguarda. Bernal Díaz o defendeu depois: se tivesse ficado para lutar, todos teriam morrido. Cortés e os cavaleiros voltaram e encontraram Alvarado ferido, sem cavalo. Cortés também ficou ferido. Toda a artilharia e a maioria dos cavalos se perderam. Num lugar chamado Popotla, debaixo de uma grande árvore (um ahuehuete), diz a lenda que Cortés chorou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas mudam muito conforme a fonte. Cortés disse ter perdido 150 espanhóis e 2.000 aliados. Thoan Cano, citado por Oviedo, fala em 1.150 espanhóis, número que talvez seja maior que o de todos os que estavam lá. López de Gómara (que não esteve lá) fala em 450 espanhóis, 4.000 aliados e 46 cavalos. Bernal Díaz fala em cerca de 600 mortos, mais da metade dos soldados de Cortés. Uma estimativa moderna (Barros Arana) dá de 400 a 800 espanhóis, e de 2.000 a 8.000 aliados. As perdas astecas são desconhecidas, mas descritas como pequenas. Estima-se que 90% do tesouro de Moctezuma se perdeu.",
        "Cerca de uma semana depois (a Wikipédia em português diz duas), em Otumba, os espanhóis viraram e derrotaram os astecas que os perseguiam. Chegaram a Tlaxcala, onde Cortés planejou o cerco de Tenochtitlán. Voltou com reforços de Cuba, construiu bergantins no lago e foi destruindo a cidade aos poucos. Cuauhtémoc foi capturado em 13 de agosto de 1521, o que encerrou a conquista.",
        { h: "Por que importa" },
        "Foi a maior derrota dos conquistadores no México, mas não a última palavra. Cortés refez as forças a partir de Tlaxcala e planejou de lá o cerco final. A doença também pesou: Cuitláhuac, o governante que os derrotou, morreu de varíola logo depois.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome: 'La Noche Triste', a Noite Triste, refere-se à dor de Cortés e seus homens pelas vidas e pelo tesouro perdidos. A Wikipédia registra que, no México, ela é chamada oficialmente de 'Noche Victoriosa', desde 2020." },
        { note: "A data: as fontes dão do dia 30 de junho ao dia 4 de julho. Parte da confusão vem do [[calendário juliano]], que estava quase 12 dias fora do Sol." },
        { note: "A árvore: a história de Cortés chorando sob um ahuehuete em Popotla é tratada como lenda. Mas Bernal Díaz diz que Cortés chorou e suspirou ao ver quantos soldados restavam, e que um soldado, Alonso Pérez, lhe disse para não se entristecer tanto, porque essas coisas acontecem na guerra." },
        { note: "O alarme: segundo uma versão, uma mulher que tirava água; segundo outra, o sacerdote de Huitzilopochtli. Quem deu o alarme não se sabe." },
        { note: "As fontes: o principal relato espanhol de testemunha é o de Bernal Díaz, escrito muitos anos depois. Os relatos astecas aparecem em 'A visão dos vencidos', de León-Portilla." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  constantinopla: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 9, l: "Bósforo e Corno de Ouro" },
      { t: "sea", x: 62, y: 61, w: 38, h: 9, l: "Mar de Mármara" },
      { t: "note", x: 92, y: 13, l: "Corrente" },
      { t: "note", x: 82, y: 46, l: "Cidade" }
    ],
    units: [
      { id: "wall", s: "b", k: "camp", w: 1.5, h: 52, l: "" },
      { id: "oFl", s: "a", k: "ship", w: 10, h: 4, l: "Frota otomana" },
      { id: "oTur", s: "a", k: "inf", w: 8, h: 7, l: "Turcomanos da Anatólia" },
      { id: "oEu", s: "a", k: "inf", w: 9, h: 14, l: "Tropas da Europa" },
      { id: "oJan", s: "a", k: "inf", w: 7, h: 9, l: "Janízaros e o sultão" },
      { id: "oGun", s: "a", k: "camp", w: 7, h: 6, l: "Grande canhão" },
      { id: "oAz", s: "a", k: "inf", w: 6, h: 12, l: "Azaps" },
      { id: "oAna", s: "a", k: "inf", w: 9, h: 14, l: "Tropas da Anatólia" },
      { id: "bBla", s: "b", k: "inf", w: 6, h: 9, l: "Venezianos" },
      { id: "bGiu", s: "b", k: "inf", w: 6, h: 9, l: "Giustiniani" },
      { id: "bCon", s: "b", k: "inf", w: 6, h: 9, l: "Constantino" },
      { id: "bSou", s: "b", k: "inf", w: 6, h: 10, l: "Defesa do sul" },
      { id: "bRes", s: "b", k: "inf", w: 6, h: 8, l: "Reserva" },
      { id: "bFl", s: "b", k: "ship", w: 10, h: 4, l: "Navios cristãos (26)" }
    ],
    steps: [
      { t: "Início de abril. Os otomanos acampam de um mar ao outro, diante das muralhas de terra. Os defensores, uns 7.000, se espalham pelas duas linhas de muralha, com Constantino e Giustiniani no ponto mais fraco, o vale do Lico. A corrente fecha o Corno de Ouro.",
        p: { wall: [63, 35], oFl: [20, 4], oTur: [46, 16], oEu: [50, 27], oJan: [44, 38], oGun: [56, 38], oAz: [33, 38], oAna: [50, 52],
             bBla: [68, 16], bGiu: [68, 28], bCon: [68, 39], bSou: [68, 52], bRes: [82, 34], bFl: [88, 4] } },
      { t: "Semanas de bombardeio. O grande canhão e a artilharia batem sobretudo o vale do Lico. De noite, os defensores consertam os danos.",
        p: { oGun: [59, 38] } },
      { t: "18 de abril. Um assalto otomano ao vale do Lico é repelido por Giustiniani e seus homens, menos numerosos, mas melhor armados.",
        p: { oEu: [58, 30], oJan: [56, 42] } },
      { t: "20 de abril. Quatro navios cristãos furam o bloqueio e entram no Corno de Ouro. É um impulso de moral para a cidade e uma vergonha para o sultão. Os otomanos recuam para suas linhas.",
        p: { oEu: [50, 27], oJan: [44, 38], bFl: [84, 4] } },
      { t: "22 de abril. Mehmed arrasta cerca de 70 a 80 navios por uma estrada de toras untadas, atrás de Galata, e os lança no Corno de Ouro, depois da corrente. Os defensores agora também precisam guardar as muralhas do porto.",
        p: { oFl: [70, 4] } },
      { t: "Maio. Os sapadores otomanos cavam minas sob as muralhas, e os defensores abrem contraminas. Em 28 de maio, Mehmed deixa as tropas descansarem. Dentro da cidade, há procissões e vigília em Santa Sofia.",
        p: { oGun: [58, 38] } },
      { t: "29 de maio, pouco depois da meia-noite. Atacam primeiro os cristãos a serviço do sultão e, em seguida, os azaps, em ondas. Os defensores aguentam.",
        p: { oAz: [57, 38] } },
      { t: "Os turcomanos da Anatólia atacam o trecho mais fraco, perto de Blachernae, no noroeste. Entram na cidade por um momento, mas são expulsos.",
        p: { oTur: [58, 16] }, x: ["oAz"] },
      { t: "A última onda: os janízaros. Giustiniani é gravemente ferido e levado para fora da muralha. Os genoveses recuam para o porto, muitos gregos correm para casa, e o pânico se espalha.",
        p: { oJan: [60, 38], bGiu: [82, 28] }, x: ["oAz", "bGiu"] },
      { t: "Os otomanos entram por vários pontos. Os venezianos recuam para os navios, e a frota otomana controla o Corno de Ouro ao meio-dia. O destino de Constantino é desconhecido.",
        p: { oEu: [66, 28], oJan: [67, 38], oAna: [66, 52], oTur: [66, 16] }, x: ["oAz", "bGiu", "bBla", "bCon", "bSou", "bRes"] }
    ]
  },

  diu: {
    terrain: [
      { t: "sea", x: 0, y: 14, w: 100, h: 56, l: "" },
      { t: "note", x: 50, y: 6, l: "Costa de Diu" }
    ],
    units: [
      { id: "pCmd", s: "a", k: "ship", w: 8, h: 4, l: "Almeida" },
      { id: "pBoard", s: "a", k: "ship", w: 14, h: 4, l: "Naus de abordagem" },
      { id: "pFlor", s: "a", k: "ship", w: 9, h: 4, l: "Flor de la Mar" },
      { id: "pGal", s: "a", k: "ship", w: 12, h: 4, l: "Galés e caravelas" },
      { id: "mFort", s: "b", k: "camp", w: 14, h: 7, l: "Fortaleza" },
      { id: "mCar", s: "b", k: "ship", w: 14, h: 6, l: "Naus de Mirocém" },
      { id: "mGal", s: "b", k: "ship", w: 12, h: 4, l: "Galés" },
      { id: "mFus", s: "b", k: "ship", w: 10, h: 4, l: "Fustas de Diu" },
      { id: "mCal", s: "b", k: "ship", w: 10, h: 4, l: "Barcos de Calicute" },
      { id: "mBig", s: "b", k: "ship", w: 9, h: 5, l: "Grande nau" }
    ],
    steps: [
      { t: "2 de fevereiro. Os portugueses (18 navios) avistam Diu. Os navios a remo de Mirocém saem, mas ficam sob o alcance dos canhões da fortaleza e, à noite, recuam para o canal.",
        p: { pCmd: [10, 58], pBoard: [14, 48], pFlor: [12, 38], pGal: [22, 63],
             mFort: [78, 8], mCar: [58, 24], mGal: [74, 24], mFus: [90, 34], mCal: [88, 50], mBig: [40, 20] } },
      { t: "3 de fevereiro. Mirocém ancora naus e galés coladas à costa, sob a fortaleza, e espera o ataque, o que entrega a iniciativa. Almeida divide a frota em quatro grupos: abordagem, ataque às galés pelo flanco, apoio de fogo e recados.",
        p: { mCar: [58, 20], mGal: [74, 20] } },
      { t: "Por volta das 11h, a bandeira real sobe na Flor de la Mar e um tiro dá o sinal. A frota avança gritando 'Santiago!', com uma galé sondando o canal. Na água calma, o tiro rasante faz a bala saltar sobre a superfície.",
        p: { pCmd: [22, 52], pBoard: [34, 40], pFlor: [28, 34], pGal: [34, 58] } },
      { t: "O Espírito Santo aborda a capitânia de Mirocém. Rui Pereira morre, e os portugueses quase são dominados quando outra nau mameluca prende o navio pelo outro lado. O Rei Grande chega com reforços e vira a luta.",
        p: { pBoard: [50, 28] } },
      { t: "Mirocém guardou seus navios a remo no canal, para atacar por trás. João da Nova leva a Flor de la Mar até o canal e o fecha. As fustas ficam presas, e os barcos de Calicute voltam.",
        p: { pFlor: [80, 36], mCal: [96, 62] }, x: ["mFus"] },
      { t: "As galés e as caravelas portuguesas, mais rápidas, atacam pelo flanco as galés muçulmanas, paradas, cujos canhões não respondem. Uma salva deixa três delas à deriva.",
        p: { pGal: [66, 34] }, x: ["mFus", "mGal"] },
      { t: "Os portugueses tomam as carracas. A fumaça dos canhões os cega em parte. Muitos mercenários abandonam os navios, e as caravelas, de pouco calado, ficam entre o inimigo e a costa e matam quem tenta chegar à praia a nado.",
        p: { pBoard: [58, 28], pGal: [60, 14] }, x: ["mFus", "mGal", "mCar"] },
      { t: "Ao anoitecer, só resta uma carraca enorme, ancorada perto da costa, que a maioria dos navios portugueses não alcança. Toda a frota a bombardeia até afundá-la. Mirocém escapa a cavalo, com 22 mamelucos.",
        p: { pBoard: [46, 28], pGal: [50, 20], pCmd: [32, 40] }, x: ["mFus", "mGal", "mCar", "mBig"] }
    ]
  }
});
