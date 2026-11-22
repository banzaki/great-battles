// In-depth battles, batch j: samarcanda, indo, kalka, kirina, mohi, peipus.
// Checked against Juvaini's account of Samarkand (Boyle translation, excerpt), the English Wikipedia articles on each
// battle and on the Mongol invasions, the Livonian Rhymed Chronicle and Novgorod chronicle as summarised there,
// Kamenir (Warfare History Network) on Kalka, Berkeley ORIAS and The Collector on the Epic of Sundiata,
// New World Encyclopedia and Medievalists.net on Mohi, and the works those pages cite.

Object.assign(GLOSSARY, {
  "xá": "Título do soberano do Irã e da Ásia Central. O xá Muhammad II, da Corásmia, governava de Samarcanda ao Irã.",
  "corásmia": "Região da Ásia Central, em volta do rio Amu Dária, e o império que a partir dela dominou o Irã e a Ásia Central no início do século 13. Seus habitantes são os corásmios.",
  "tumen": "Unidade do exército mongol, de cerca de 10.000 homens no papel. Na prática, costumava ter menos.",
  "citadela": "Fortaleza dentro da cidade, mais alta e mais bem murada que o resto, onde os defensores faziam a última resistência.",
  "leva": "Recrutamento forçado. Os mongóis levavam camponeses e prisioneiros das cidades conquistadas para cavar, carregar escadas e servir de escudo humano nos cercos seguintes.",
  "nafta": "Petróleo bruto ou refinado, muito inflamável, lançado em potes ou flechas incendiárias para pôr fogo em construções.",
  "cumanos": "Também chamados de quipchaques ou polovtsianos: povo turco nômade da estepe ao norte do Mar Negro, de cavaleiros-arqueiros. Faziam guerra e comércio com os príncipes russos e com a Hungria.",
  "rus": "Os principados eslavos orientais governados por príncipes da mesma família, com centro em Kiev. Deles descendem a Rússia, a Ucrânia e a Bielorrússia. Quase nunca agiam juntos.",
  "griô": "Contador de histórias e historiador oral da África Ocidental, que guarda por gerações a memória de reis, batalhas e famílias, em narrativas cantadas ou faladas. Também se escreve djeli.",
  "mansa": "Título do rei do Mali, mais ou menos 'rei dos reis'.",
  "totem": "Animal ou objeto ligado a uma pessoa ou a um clã, que lhe dá proteção, mas também impõe proibições. Na epopeia, o totem de Sumanguru era o galo branco.",
  "máquina de arremesso": "Engenho de guerra que atira pedras ou potes de fogo, como a catapulta de tração. Os mongóis aprenderam a usá-las com engenheiros chineses e persas.",
  "templários": "Ordem de monges-guerreiros cristãos, criada para proteger os peregrinos na Terra Santa. Tinha castelos e cavaleiros pela Europa, inclusive na Hungria.",
  "ordem livoniana": "Ramo da Ordem Teutônica na Livônia, a região do atual Báltico. Era uma ordem militar religiosa alemã que conquistava e convertia as terras pagãs do leste, com cavaleiros em armadura e infantaria nativa.",
  "druzhina": "Comitiva armada de um príncipe russo: guerreiros profissionais que viviam na corte e lutavam a cavalo ao lado dele.",
  "crônica": "Relato histórico escrito ano a ano, em geral por monges. As crônicas medievais são a principal fonte de muitas batalhas, mas foram copiadas e mudadas ao longo dos séculos."
});

Object.assign(DEEP, {
  samarcanda: {
    war: "Invasão mongol da Corásmia (1219–1221)",
    hook: "Todo mundo achava que a cidade resistiria por anos. Caiu em cinco dias.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século 13, Gêngis Khan reunia as tribos da Mongólia e conquistava o norte da China. Ao oeste, ficava a [[corásmia]]: um império que ia do Irã até a Ásia Central, governado pelo [[xá]] Muhammad II e cheio de cidades ricas na Rota da Seda, como Bucara, Samarcanda e Urgench. Entre os dois impérios passavam caravanas de mercadores.",
        "Em 1218, uma caravana mongol chegou a Otrar, na fronteira. O governador, Inalchuq, confiscou as mercadorias e mandou executar os membros, acusados de espionagem. Os historiadores discutem se a acusação tinha fundamento e quanto o xá sabia. O que se sabe é o que veio depois: Gêngis mandou embaixadores exigir que Inalchuq fosse punido, e o xá recusou. Mandou matar um dos embaixadores e humilhou os outros dois. Para os mongóis, embaixador era inviolável, e o insulto não podia ficar sem resposta.",
        { h: "O caminho até Samarcanda" },
        { timeline: [
          ["1218", "A caravana mongol é massacrada em Otrar. O xá se recusa a punir o governador e humilha os embaixadores."],
          ["1219", "Começa a invasão. Otrar resiste mais do que o esperado, e Gêngis divide o exército."],
          ["7 a 10 de fevereiro de 1220", "Depois de atravessar o deserto de Kyzyl Kum, Gêngis chega a Bucara. A cidade baixa se rende em três dias; a cidadela cai cerca de doze dias depois."],
          ["Março de 1220", "Gêngis chega a Samarcanda, o maior centro do império."],
          ["Dezembro de 1220", "O xá Muhammad II morre, fugitivo, numa ilha do mar Cáspio."]
        ]},
        "Os mongóis dividiram o exército em grupos bem separados. Gêngis e seu filho Tolui seguiram com cerca de 50.000 homens (as estimativas modernas para o total variam de 90.000 a 200.000) e atravessaram uns 480 km do deserto de Kyzyl Kum, que se considerava impossível de cruzar com um exército, para surgir em Bucara sem aviso. O xá, que esperava o ataque em Samarcanda, tinha espalhado as tropas em guarnições pelas cidades grandes, em vez de enfrentar o inimigo em campo aberto."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gêngis Khan" },
        "Contra a Corásmia, Gêngis levou engenheiros de cerco chineses, usou prisioneiros como mão de obra e espalhou cartas e decretos falsos em nome do xá e da mãe dele, Terken Khatun, para semear confusão. Segundo Juvaini, todos achavam que Samarcanda levaria anos para cair, e por isso Gêngis preferiu primeiro limpar a região em volta, tomando Bucara. Antes de atacar a cidade, andou em volta dela por um ou dois dias para estudar as muralhas, as obras externas e os portões.",
        { h: "Muhammad II, xá da Corásmia" },
        "Desconfiava dos próprios generais e vivia em disputa com a mãe, Terken Khatun, cuja cavalaria turca era uma das forças do reino. Em vez de reunir o exército para uma batalha, distribuiu tropas por Samarcanda, Balkh, Otrar e outras cidades. Provavelmente esperava só uma incursão de porte normal, que devastasse o campo e poupasse as cidades. Quando os mongóis apareceram atrás dele, fugiu para o oeste e não voltou. Morreu em dezembro de 1220, numa ilha do Cáspio. A maioria dos estudiosos atribui a morte a uma pneumonia.",
        { h: "Os outros nomes" },
        "Do lado mongol, os filhos de Gêngis, Chagatai e Ogodei, chegaram a Samarcanda depois de tomar Otrar. Dois generais de confiança, Jebe e Subutai, foram mandados atrás do xá com 30.000 homens, segundo Juvaini. Do lado corásmio, Juvaini cita os comandantes turcos Alp-Er Khan, Sheikh Khan e Bala Khan, que saíram para lutar, e, entre os turcos que morreram na cidadela, Barishmas Khan, Taghai Khan, Sarsigh Khan e Ulagh Khan."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Nenhum número é seguro. O historiador persa Juvaini, que escreveu sob domínio mongol na década de 1250, diz que o xá deixou em Samarcanda 110.000 homens: 60.000 turcos, 50.000 'tazicos' (iranianos), mais 20 elefantes. Outro cronista, Ibn al-Athir, fala em 50.000. Os historiadores modernos desconfiam dos dois: comparando com o tamanho da cidade, uma estimativa que circula é de uns 10.000 soldados. Do lado mongol, ninguém sabe a força exata em Samarcanda. As estimativas para a coluna de Gêngis em Bucara vão de 30.000 a 50.000, e os filhos chegaram com mais tropas, além das [[levas|leva]] de Bucara e de Otrar.",
        { note: "Os números de Juvaini e de Rashid al-Din foram escritos sob patrocínio mongol, e os historiadores modernos acham que muitas vezes estão exagerados, às vezes por uma ordem de grandeza." },
        { h: "O terreno" },
        "Samarcanda ficava no vale do rio Zeravshan. Segundo Juvaini, a [[citadela]] tinha sido reforçada, com várias linhas de obras externas, muralhas muito altas e um fosso cavado até a água. Ao redor da cidade, havia uma muralha com portões, e a Wikipédia em inglês fala em oito portões de ferro.",
        { h: "Os cinco dias" },
        "Primeiro, Gêngis chegou por Bucara, arrastando na frente uma grande leva de prisioneiros daquela cidade. As aldeias que se rendiam eram poupadas, e as que resistiam eram cercadas por tropas deixadas para trás. Quando os filhos chegaram de Otrar, todos acamparam em torno da cidade. Por um ou dois dias, o khan ficou só olhando as muralhas.",
        "Segundo, no terceiro dia, mongóis e levas cercaram a cidade em círculo, e os generais Alp-Er Khan, Sheikh Khan e Bala Khan saíram para a planície, se alinharam diante do exército mongol e trocaram flechas. Morreram muitos dos dois lados. Os turcos do xá lutaram em escaramuças o dia todo, e mil deles caíram.",
        "Terceiro, no dia seguinte, Gêngis cercou a cidade de novo. Os mongóis ficaram tão perto dos portões que impediram os defensores de sair para o campo. Presos entre os dois exércitos, os corásmios lançaram os elefantes. Os mongóis não recuaram: acertaram os elefantes com flechas, e os bichos feridos deram meia-volta e pisotearam muita gente da própria cidade. À noite, fecharam os portões.",
        "Quarto, no dia seguinte, o quinto do cerco, a cidade se dividiu. Parte queria se render, parte tinha medo. O cádi (o juiz) e o xeique al-Islam, a maior autoridade religiosa, saíram com outros religiosos e foram falar com Gêngis. Voltaram com promessas. Na hora da oração, abriram um portão, e os mongóis entraram. Passaram o dia derrubando as muralhas até que cavalos e infantaria pudessem passar por toda parte. No dia seguinte, a população foi tirada da cidade em grupos de cem. Só o cádi e quem estava sob proteção dele ficaram: mais de 50.000 pessoas, segundo Juvaini. Mongóis e tropas aliadas saquearam a cidade, e quem se escondia em porões e buracos foi achado e morto.",
        "Quinto, a citadela. Alp Khan saiu com mil homens, abriu caminho pelo meio do exército mongol e fugiu para encontrar o xá. Na manhã seguinte, os mongóis cercaram a citadela e a tomaram entre uma oração e outra. Mil homens se fecharam na mesquita principal e lutaram com [[nafta]] e virotes, e o prédio inteiro pegou fogo. Os sobreviventes foram tirados dali e separados: turcos de um lado, iranianos de outro. Naquela noite, todos os homens qanqlis foram mortos. Juvaini fala em mais de 30.000 qanqlis e turcos, com seus comandantes e cerca de vinte emires do xá.",
        { note: "Há versões modernas que descrevem uma retirada fingida: Gêngis fingiria recuar, atrairia metade da guarnição para fora da cidade e a massacraria. Isso não está em Juvaini. A fonte mais antiga descreve uma saída em campo aberto, uma luta de dois dias e uma rendição negociada pelo clero." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "No dia seguinte à queda, os sobreviventes foram contados. Trinta mil foram escolhidos por saberem um ofício e repartidos entre os filhos e parentes de Gêngis. Outros 30.000 jovens foram escolhidos para a leva, para os cercos seguintes. O resto voltou à cidade, e Gêngis cobrou um resgate de 200.000 dinares. Juvaini fala que as levas se repetiram várias vezes e que poucos foram poupados. Os elefantes foram soltos para pastar e acabaram morrendo de fome. Juvaini conta que Gêngis perguntou aos tratadores do que eles viviam antes do cativeiro.",
        "Nenhuma fonte dá perdas confiáveis para nenhum dos lados. Gêngis deixou o administrador Yelü Ahai para governar Samarcanda e Bucara e garantir a retaguarda, e seguiu em frente. A resistência corásmia só terminaria de vez depois da batalha do Indo, em 1221.",
        { h: "Por que importa" },
        "Samarcanda era a maior cidade do império, com muralhas reforçadas e uma guarnição enorme, ao menos segundo Juvaini, e caiu depressa. O xá tinha apostado nas muralhas e nas guarnições espalhadas, e perdeu. A reputação de crueldade dos mongóis, que destruíam as cidades que resistiam ou se rebelavam depois de render-se, abriu o caminho para as outras cidades da região.",
        "A cidade foi saqueada e demorou a se recuperar. Em 1370, Tamerlão fez dela a capital de um novo império, e ela voltou a ser uma das grandes cidades da Ásia.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: março de 1220 é a mais aceita, e o cronista Juzjani dá o dia 19, mas outras fontes oferecem alternativas. A duração também varia: cerca de cinco dias para a cidade em Juvaini, perto de um mês em outros relatos, que contam a citadela à parte." },
        { note: "Os mortos: a Wikipédia em inglês cita um número de 2,5 milhões de mortos atribuído a Juvaini, e o próprio verbete o considera exagerado, já que a população inteira do império seria pouco maior que 3 milhões. Esse número não aparece no trecho de Juvaini sobre Samarcanda que consultamos." },
        { note: "A fonte: Juvaini escreveu na década de 1250, a serviço do império mongol. Elogia Samarcanda como um paraíso na Terra e conta a queda com muitos detalhes, mas escreveu mais de trinta anos depois, e a versão dele é a do vencedor." }
      ]}
    ]
  },

  indo: {
    war: "Invasão mongol da Corásmia (1219–1221)",
    hook: "Cercado entre o exército mongol e o rio Indo, o último grande príncipe da Corásmia saltou de um barranco a cavalo, e, segundo a tradição, Gêngis Khan mandou deixá-lo ir.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois da queda de Samarcanda, o [[xá]] Muhammad II fugiu para o oeste e morreu em dezembro de 1220, numa ilha do mar Cáspio. Seu filho Jalal ad-Din Mingburnu assumiu o título, mas os nobres de Urgench preferiam outro herdeiro, o meio-irmão dele, Uzlaq-Shah. Jalal ad-Din descobriu uma conspiração contra si e partiu.",
        "Foi para o sudeste, para Gazni, no atual Afeganistão, onde reuniu partidários de tribos curlucas, khalajes e turcomanas. As fontes falam em dezenas de milhares: a Wikipédia dá 50.000 partidários em Gazni, aos quais se juntaram mais 30.000 trazidos por um tio, e outra versão diz que cerca de 65.000 homens se reuniram antes de Parwan.",
        { h: "O caminho até o Indo" },
        { timeline: [
          ["Dezembro de 1220", "Muhammad II morre numa ilha do Cáspio. Jalal ad-Din assume o título."],
          ["Outono de 1221", "Em Parwan, perto de Cabul, Jalal ad-Din derrota o general mongol Shigi Qutuqu, numa das raras derrotas mongóis em campo aberto."],
          ["Logo depois", "Uma briga pelo butim racha o exército. Parte das tropas deserta, e Jalal ad-Din fica com cerca de metade dos homens."],
          ["24 de novembro de 1221", "Gêngis Khan alcança Jalal ad-Din nas margens do Indo."]
        ]},
        "Em Parwan, Jalal ad-Din venceu num vale estreito, onde a cavalaria mongol não rendia, mandando os arqueiros a cavalo lutarem a pé. Segundo a Wikipédia em inglês, na noite da vitória houve uma briga pela divisão do butim, em especial um cavalo branco mongol: Amin Malik, que comandava os turcos, chicoteou Saif ad-Din Ighraq, chefe das tropas afegãs. Jalal ad-Din se recusou a punir Amin Malik, e Ighraq o repreendeu. Depois do anoitecer, Ighraq, os khalajes, os afegãos e parte dos qanqlis foram embora. Os nomes variam entre as fontes: um verbete chama o tio de Jalal ad-Din de Amin Malik e outro de Temur Malik."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Jalal ad-Din Mingburnu" },
        "Filho do xá, era o único chefe corásmio que tinha vencido os mongóis em campo aberto. A briga em Parwan, e a recusa em punir um dos lados, lhe custou metade do exército. O principal relato a favor dele é o de al-Nasawi, seu biógrafo pessoal, e os historiadores o leem com cautela.",
        { h: "Gêngis Khan" },
        "Mandou Shigi Qutuqu atrás de Jalal ad-Din e, depois da derrota dele, foi em pessoa, em marchas forçadas, para impedir que o sultão escapasse para a Índia. Segundo Rashid al-Din, disse ao general derrotado que ele não conhecia o campo de batalha e que os dois tinham errado. No Indo, comandou a reserva, e deixou as asas para os filhos, Chagatai à direita e Ogodei à esquerda. Mandou um destacamento escalar a crista de uma colina para atacar pelo flanco, sob o comando de Bela Noyan.",
        { h: "Os outros nomes" },
        "Do lado corásmio, Amin Malik comandava os turcos da direita e morreu na fuga; Temur Malik, provavelmente os afegãos da esquerda, morreu na luta. Akhash Malik, primo de Jalal ad-Din, pediu que ele fugisse quando tudo estava perdido."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os mongóis tinham pelo menos 50.000 cavaleiros, segundo Sverdrup (2010), citado pela Wikipédia em inglês. Os corásmios são mais difíceis de contar. A fonte da Wikipédia dá 3.000 cavaleiros mais 30.000 a 35.000 homens de tropas irregulares (Dupuy e Dupuy, 1993). O texto fala em uns 30.000 depois das deserções, mas também diz que Jalal ad-Din ficou no centro com 5.000 homens, e 700 guarda-costas em reserva. As cifras não batem, e os autores não as reconciliam.",
        { h: "O terreno" },
        "A margem do rio Indo, no atual Paquistão. O sultão apoiou a esquerda numa crista de colina que ia direto até a água, e a direita ficou protegida pela própria margem. Com isso, os mongóis não podiam cercá-lo facilmente, e a vantagem numérica rendia menos. A desvantagem: não havia por onde recuar, a não ser o rio.",
        { h: "A batalha" },
        "Gêngis formou um crescente para prensar os corásmios contra o rio, e guardou a reserva para impedir uma fuga. Os mongóis vinham de uma marcha forçada pelas montanhas, e talvez tenham atacado antes que todo o exército chegasse.",
        "Primeiro, ao amanhecer, os dois exércitos se chocaram pelas asas. A esquerda corásmia aguentou na crista, apesar de os mongóis reforçarem o ataque sem parar, e Ogodei foi empurrado para trás na esquerda mongol.",
        "Segundo, Gêngis viu que a crista era forte e mandou Bela Noyan com uma tropa de elite escalar a encosta. Muitos homens morreram na subida, mas o destacamento chegou ao topo e atacou o flanco e a retaguarda da esquerda corásmia.",
        "Terceiro, Jalal ad-Din atacou o centro mongol. Al-Nasawi diz que ele chegou até Gêngis Khan e o pôs para correr. Os historiadores desconfiam: os mongóis não puderam usar bem os arcos na confusão, mas pararam o avanço. Temur Malik morreu no corpo a corpo.",
        "Quarto, a direita corásmia, que já recuava, quebrou. Amin Malik foi interceptado e morto na fuga em direção a Peshawar.",
        "Quinto, Jalal ad-Din lutou até o meio-dia. Quando o primo Akhash Malik o convenceu a fugir, ele atacou a crista tomada pelos mongóis e furou o cerco. Cavalgou até o barranco do Indo.",
        { h: "O salto" },
        "Jalal ad-Din saltou a cavalo de um barranco de cerca de 9 metros (30 pés) e chegou à outra margem. As fontes divergem sobre detalhes: algumas dizem que ele estava de armadura completa, outras dizem que sem. Gêngis, segundo a tradição, proibiu os arqueiros de atirar e chamou os filhos para ver o que ele tinha feito. Disse que todo pai deveria desejar um filho assim."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército corásmio foi destruído. A Wikipédia fala em mais de 30.000 mortos e diz que só uns 4.000 chegaram à outra margem, muitos deles abatidos a flechadas na água. As perdas mongóis são desconhecidas. O acampamento, o harém e o tesouro do sultão foram capturados, e todos os homens da família dele foram mortos, inclusive um filho de sete anos.",
        "Gêngis não perseguiu Jalal ad-Din a fundo. Passou o inverno no vale do Swat e subjugou os afegãos. Ogodei passou quinze meses tomando Gazni e as fortalezas das montanhas. Gêngis voltou à Mongólia em 1224 ou 1225.",
        { h: "O que veio depois" },
        "Jalal ad-Din juntou sobreviventes, derrotou príncipes locais e montou um pequeno Estado na Índia. O sultão de Délhi, Iltutmish, se recusou a dar-lhe asilo, para não enfrentar os mongóis. Depois de cerca de três anos, em 1223, Jalal ad-Din voltou ao Irã, a pedido do irmão, e ainda enfrentou georgianos e novos exércitos mongóis. Morreu em agosto de 1231, assassinado por um curdo que queria vingar o irmão.",
        "Antes da batalha de Garni, em 1225, Jalal ad-Din exigiu que a rainha Rusudan, da Geórgia, se submetesse. Ela respondeu com uma carta zombando da derrota dele no Indo.",
        { h: "Por que importa" },
        "O Indo encerrou a resistência organizada do Império Corásmio. Foi também a primeira vez que um exército mongol apareceu na Índia. Gêngis voltou para casa, e a Índia só foi tocada pelos mongóis em incursões menores, como o saque de Lahore em 1241.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data de 24 de novembro de 1221 é a mais citada. Um resumo da Encyclopaedia Iranica, que não conseguimos abrir inteira, fala em outra cronologia: a travessia do rio em agosto ou setembro de 1221, ou dois meses depois, segundo al-Nasawi e Juvaini." },
        { note: "Os nomes: a Wikipédia em inglês chama o tio de Jalal ad-Din de Amin Malik num verbete e de Temur Malik em outro. Em Parwan, o comandante afegão é Ighraq, às vezes Saif ad-Din Ighraq." },
        { note: "A frase de Gêngis, e a ordem de não atirar, vêm de relatos tradicionais citados pela Wikipédia, sem fonte primária confirmada aqui. Usamos a versão como tradição, não como fato." }
      ]}
    ]
  },

  kalka: {
    war: "Expedição de Jebe e Subutai ao oeste (1220–1223)",
    hook: "Era só uma expedição de reconhecimento. Mesmo assim, só um em cada dez soldados russos voltou para casa.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Gêngis Khan invadiu a [[corásmia]] em 1219, para vingar os embaixadores mortos. Quando o xá Muhammad II morreu, num ilhéu do mar Cáspio, o general Jebe pediu a Gêngis um ano ou dois para continuar conquistando antes de voltar à Mongólia pelo Cáucaso. Gêngis aprovou, e Subutai foi com ele como segundo em comando. Cada um comandava um [[tumen]]: 20.000 homens ao todo.",
        "Os dois saquearam Rey, Zanjan e Qazvin e entraram na Geórgia. Em 1221, o rei Jorge IV Lasha foi vencido, e em fins de 1221, em Khunan, o exército georgiano e armênio, de 30.000 homens, foi derrotado, e o rei foi ferido de morte. Depois dobraram o Cáucaso, tomaram Derbent depois que a cidade se recusou a render-se e cruzaram as montanhas, abandonando as máquinas de cerco e perdendo centenas de homens para o frio.",
        { h: "O caminho até o Kalka" },
        { timeline: [
          ["1219–1221", "Os mongóis atravessam o Irã e a Armênia e vencem os georgianos."],
          ["Depois de 1221", "Atravessam o Cáucaso e rompem uma aliança de lezguianos, alanos e circassianos, e então acabam com os cumanos."],
          ["Início de 1223", "O khan cumano Köten foge para o genro, Mstislav de Galícia, e avisa que os russos serão os próximos."],
          ["Primavera de 1223", "Os príncipes russos se reúnem e descem o rio Dniepre. Os mongóis recuam."],
          ["31 de maio de 1223", "Batalha do rio Kalka."]
        ]},
        "No norte do Cáucaso, os mongóis enfrentaram uma aliança de uns 50.000 homens. Os [[cumanos]] estavam nela, e os mongóis a dividiram prometendo-lhes uma parte do butim. Rompida a aliança, destruíram os dois grupos cumanos, saquearam Astracã e tomaram uma cidade genovesa na Crimeia. O khan Köten fugiu e chegou à Rus, avisando o genro. Os [[rus]] sofriam ataques cumanos havia décadas, e por quase um ano deram pouca atenção ao aviso. Quando chegou a notícia de que os mongóis marchavam ao longo do rio Dniestre, Mstislav de Galícia montou uma aliança que incluía Mstislav III de Kiev e Yuri II de Vladimir-Suzdal, que prometeu apoio."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Jebe e Subutai" },
        "Dois generais mongóis a serviço de Gêngis Khan, que não esteve na batalha. Para ele, a expedição era só um reconhecimento de uma região que talvez atacasse depois. Jebe morreu pouco depois do fim da campanha. Subutai voltaria à Rússia em 1237, com Batu.",
        { h: "Os príncipes russos" },
        "Não havia comandante geral. Mstislav III Romanovich, príncipe de Kiev, era o príncipe mais importante e liderava as tropas de Kiev, Chernigov e Smolensk, segundo Kamenir. Mstislav Mstislavich, o Ousado (Udaloi), príncipe de Galícia, comandava a vanguarda, e era genro de Köten. Daniel Romanovich liderava uma vanguarda de uns 500 homens da Volínia e foi ferido várias vezes. Mstislav Svyatoslavich, de Chernigov, chegou tarde e morreu. Os príncipes disputavam o comando entre si, e o resultado foi cada um agir por conta própria.",
        { h: "Os cumanos" },
        "Köten e seus cavaleiros eram os que tinham mais a perder. Seus ataques tinham irritado os russos por décadas, mas agora eram aliados forçados. Como cavaleiros-arqueiros, tinham a mesma maneira de lutar dos mongóis, e foram os primeiros a ser vencidos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Nenhuma fonte antiga dá números dos exércitos, e os modernos divergem muito. Para os mongóis, de Hartog fala em 20.000 e Gabriel em cerca de 23.000. Para os russos e cumanos: de Hartog dá 30.000, Gabriel e Munro dão 80.000, Khrustalev dá 15.000 (10.000 russos e 5.000 cumanos) e Sverdrup apenas 8.000. Fennell acha exagerado até o número das crônicas, uns 11.000. Kamenir estima 12.000 russos e 8.000 cumanos a cavalo, o resto a pé.",
        { note: "Os números russos são o ponto mais incerto. Usamos as faixas dos historiadores modernos, não as das crônicas, que muitas vezes repetem números redondos ou exagerados." },
        { h: "O terreno" },
        "Uma estepe aberta no sul da atual Ucrânia, na região de Donetsk. O rio chamado Kalka talvez seja o atual Kalchyk, que desemboca no Mar de Azov, mas o local exato não é certo.",
        { h: "Nove dias de recuo" },
        "Os príncipes russos tinham um plano de pinça: Galícia e Volínia desceriam o Dniepre para o sul, Kiev e Chernigov subiriam para o norte, Kursk avançaria de frente, e os cumanos atacariam a retaguarda inimiga. Jebe mandou dez enviados ao príncipe de Kiev. Disseram que os mongóis não tinham briga com os russos, só com os cumanos. Mstislav de Kiev mandou executá-los. Então os mongóis mandaram outros enviados, que declararam guerra.",
        "Aí os mongóis recuaram para o leste durante cerca de nove dias (alguns textos dizem oito), numa [[retirada fingida]] que esticou os exércitos que os perseguiam. Uma retaguarda de mil mongóis, comandada por Hamabek, foi deixada como isca. Mstislav, o Ousado, atravessou o rio sob chuva de flechas e destruiu a retaguarda. Segundo Wikipédia, os mongóis foram mortos até o último homem.",
        { h: "A batalha" },
        "Primeiro, o exército mongol virou-se para encarar os russos nas margens do Kalka. Mstislav, o Ousado, e os cumanos atacaram antes que o resto do exército chegasse, e foram vencidos. Os cumanos fugiram, e a fuga passou pelas fileiras russas, o que causou confusão.",
        "Segundo, as tropas da Volínia e de Kursk abriram um corredor para os cumanos recuarem. A cavalaria pesada mongol passou por ele e cercou os cumanos.",
        "Terceiro, o exército de Chernigov, que não sabia que a batalha tinha começado, avançava quando bateu de frente nos cumanos que fugiam. Os mongóis usaram fumaça para atrapalhar a coordenação, e a linha desmoronou. Mstislav Svyatoslavich de Chernigov morreu.",
        "Quarto, as alas mongóis fecharam o cerco sobre o exército russo, atingido por chuvas de flechas e cargas de cavalaria. Mstislav, o Ousado, abriu caminho com parte do exército. Daniel de Galícia foi ferido.",
        "Quinto, Mstislav de Kiev chegou e encontrou o exército em fuga. Com os homens dele, uns 10.000 segundo a Wikipédia, recuou para um acampamento cercado de estacas numa colina junto ao Dniepre. Os mongóis o cercaram.",
        { h: "O fim de Mstislav de Kiev" },
        "O acampamento resistiu três dias. Segundo Kamenir, os mongóis ofereceram passagem livre se os russos entregassem armas, bandeiras e bens. Mstislav aceitou depois que Ploskinya, um dos brodnikis (aliados dos mongóis), jurou sobre uma cruz. Segundo Kamenir, a coluna desarmada foi alcançada e quase toda morta, e só cerca de 200 cavaleiros escaparam. Os mongóis também executaram Mstislav, mas, segundo o costume mongol para a realeza e a nobreza, sem derramar sangue: ele e seus genros foram amarrados e postos debaixo de tábuas, e os generais mongóis fizeram um banquete de vitória por cima, enquanto eles morriam esmagados."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas russas e cumanas variam muito. A Wikipédia cita até 70.000 ou 75.000; Gabriel fala em 50.000; a Crônica Primária, em 10.000 mortos; a Crônica de Nikon, em 60.000. A Primeira Crônica de Novgorod não dá números, mas diz que só um em cada dez homens voltou. Os mongóis tiveram perdas pequenas, segundo as estimativas modernas. Morreram cerca de uma dúzia de príncipes, entre eles Mstislav de Chernigov, o filho dele, Vsevolod, e Mstislav de Kiev com os dois genros.",
        "Mstislav, o Ousado, escapou e destruiu os barcos que achou no Dniepre para impedir os mongóis de cruzar o rio. Os mongóis perseguiram o príncipe de Galícia, saquearam algumas cidades do sul e voltaram. Cruzaram o Volga, perto da atual Volgogrado, e foram derrotados pelos búlgaros do Volga na batalha da Curva do Samara, segundo a Wikipédia. Depois atacaram os cumanos nos Urais, mataram o khan deles e impuseram tributo. Reencontraram Gêngis Khan a leste do rio Sir Dária, e ele elogiou os generais.",
        { h: "Por que importa" },
        "Foi a primeira batalha entre mongóis e eslavos orientais, e uma catástrofe para a Rus: quase todos os principados perderam grande parte dos exércitos, com exceção de Vladimir-Suzdal. Mas os mongóis foram embora. Voltaram 14 anos depois, em 1237, com Batu e Subutai, e 120.000 homens, e dessa vez ficaram. A campanha de Jebe e Subutai é chamada de a mais longa incursão de cavalaria da história: cerca de 8.900 km em três anos.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: 31 de maio de 1223 é a mais usada. Outras fontes dão 16 de junho ou 16 de julho." },
        { note: "O local: o rio Kalka pode ser o atual Kalchyk, que desemboca no Mar de Azov. O local exato da batalha é incerto." },
        { note: "A retirada: os textos discordam. A Wikipédia em inglês diz nove dias de recuo, a em português, oito. Alguns relatos descrevem a cena como uma emboscada planejada na outra margem do rio; outros a descrevem como uma perseguição ao longo de dias que acabou numa batalha em campo aberto." },
        { note: "O banquete: a imagem dos príncipes esmagados sob as tábuas vem das crônicas russas, e é o relato mais citado. Kamenir lembra que a cena respeita o costume mongol de não derramar o sangue de nobres, a não ser em batalha." }
      ]}
    ]
  },

  kirina: {
    war: "Guerra entre Sosso e os mandingas (c. 1235)",
    hook: "Uma batalha que só conhecemos pela voz dos griôs, e que fundou um dos impérios mais ricos da história.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século 12, o Império de Gana, que por séculos controlou o comércio de ouro e sal na savana da África Ocidental, tinha desabado, depois de disputas internas e da intervenção dos almorávidas. Estados menores ocuparam o vazio. Entre eles estavam os sossos, do reino de Kaniaga, e os mandingas, do Alto Níger.",
        "Os sossos eram, no começo, um clã de escravos do rei de Gana que ganhou poder na burocracia e no exército. Sumanguru Kanté, segundo a tradição, era chefe dos escravos reais e governador de uma província. Tomou Koumbi Saleh, a antiga capital de Gana, e dominou vizinhos, inclusive chefaturas mandingas ao sul. Heinrich Barth datou a tomada do poder por volta de 1203. A cronologia mais antiga, de Delafosse, que punha o pai de Sumanguru no poder já em 1180, é rejeitada por muitos historiadores.",
        { h: "O caminho até Kirina" },
        { timeline: [
          ["Cerca de 1200", "Os sossos, sob Sumanguru, tomam o poder em Gana e dominam os vizinhos (datas incertas)."],
          ["Cerca de 1217", "Nasce Sundiata, filho do rei mandinga Naré Maghann Konaté e de Sogolon Condé."],
          ["Anos seguintes", "Com a morte do pai, Sundiata e a mãe vão para o exílio e acabam em Mema. Mensageiros o convencem a voltar."],
          ["Cerca de 1235", "Batalha de Kirina."],
          ["Cerca de 1255", "Morre Sundiata, segundo a data mais aceita."]
        ]},
        "Segundo a tradição, depois da morte do pai o meio-irmão de Sundiata, Dankaran Touman, fugiu diante de Sumanguru. Sogolon levou os filhos ao exílio, e eles encontraram abrigo no reino de Mema. Lá Sundiata cresceu forte e foi admirado pelo rei. Mensageiros dos mandingas oprimidos o procuraram, e ele voltou com um exército que o rei de Mema forneceu. Aliou-se a outros chefes jovens, e eles firmaram um pacto na planície de Siby."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Sundiata Keita" },
        "Nasceu por volta de 1217 em Dakadjalan. Os nomes variam: Sundjata, Sunjata, Mari Djata (como o cita Ibn Khaldun, escrito mais de um século depois), Soundiata. Segundo a epopeia, era um príncipe exilado que voltou para libertar o povo. Fez coalizões em vez de impor-se pela força: reuniu chefes jovens, cada um com seu povo, e depois do triunfo deixou que as regiões voltassem a seus donos.",
        { h: "Sumanguru Kanté" },
        "Também escrito Soumaoro ou Sumaworo. Na tradição mandinga, é um rei-feiticeiro cruel que oprime os povos. A Wikipédia lista que ele teria decapitado reis muçulmanos que se opuseram a ele, e que muitos soninquês fugiram do seu domínio. Mas há um aviso importante: não temos prova independente de que ele foi o vilão que a tradição lembra. Os historiadores também discutem se ele existiu como a tradição o descreve. Segundo Conrad (1984), é possível que as façanhas de vários reis da família Kanté tenham sido atribuídas a um só.",
        { h: "Os outros nomes" },
        "Fakoli Koroma, sobrinho e general de Sumanguru: segundo a tradição, mudou de lado depois que o tio tomou a esposa dele. O rei de Mema, que deu cavalaria a Sundiata (as versões divergem sobre o nome dele). Fran Kamara, chefe de Tabon e amigo de infância de Sundiata. Nana Triban, irmã de Sundiata, forçada a casar com Sumanguru, e Balla Fasséké, o griô de Sundiata, que escaparam da torre de Sumanguru e descobriram o segredo dele."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "O que dá para saber" },
        "Antes de tudo, um aviso: não existe nenhum relato escrito da batalha da época. O que sabemos vem dos [[griôs|griô]], que passaram a história de geração em geração, e só foi escrito séculos depois. A versão mais conhecida é a de Djibril Tamsir Niane (1960), baseada na voz do griô Mamadou Kouyaté, mas existem mais de sessenta versões, e o enredo muda conforme o contador. A fonte escrita mais antiga é Ibn Khaldun, mais de cem anos depois. Ninguém dá números dos exércitos.",
        { note: "O que segue é a história como a contam os griôs, na versão de Niane. Os historiadores acham plausível que Kirina tenha sido um confronto real, em que uma coalizão de chefaturas derrotou os sossos, mas os detalhes, como a magia e o arco, são do épico." },
        { h: "O terreno" },
        "A planície de Kirina, na região de Koulikoro, no atual Mali. O local exato é discutido, e não há descrição do terreno nas fontes que consultamos.",
        { h: "A batalha, segundo a epopeia" },
        "Primeiro, Sumanguru avança até Kirina e declara guerra a Sundiata, que promete não recuar. Na véspera, Sundiata dá uma grande festa para as tropas, e Balla Fasséké canta a história de Mali para lembrá-lo do seu direito de nascença.",
        "Segundo, o choque. A batalha começa equilibrada. Os aliados de Sundiata estão em desvantagem numérica, segundo uma versão. A cavalaria de Mema acaba rompendo o centro inimigo.",
        "Terceiro, Manding-Bory avisa que Sumanguru caiu sobre o flanco esquerdo do exército. Sundiata vira a cavalaria para lá e segura a linha por pouco.",
        "Quarto, Sundiata procura Sumanguru, que ficou bem atrás dos seus homens. O segredo, descoberto por Nana Triban e Balla Fasséké, é que o [[totem]] dele era o galo branco, e só uma esporinha de galo podia feri-lo. Sundiata prende uma ao arco e atira, e a flecha só raspa o ombro de Sumanguru. Basta: ele treme, vê um pássaro preto no céu, sinal de má sorte, e foge.",
        "Quinto, sem o chefe, o exército sosso cede. Sundiata persegue o inimigo dia e noite, até o monte Koulikoro, onde Sumanguru desaparece numa caverna escura. Depois, cerca a cidade de Sosso, abre a muralha em um dia e manda destruí-la.",
        { note: "Outras versões mudam o detalhe: numa, quem fere Sumanguru é um golpe de lança de outro herói, Sangaran Danguina; em outras, é Sundiata quem atira." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A tradição diz que o reino sosso foi destruído e seus restos se dispersaram. Os remanescentes dos sossos se mudaram para o oeste ou o sul e deram origem aos susus e aos iálunkas. Para alguns estudiosos, essas populações já estavam lá antes do império e se mudaram aos poucos, e não numa grande ruptura.",
        "Sobre Sumanguru, as fontes divergem: na epopeia ele some nas montanhas de Koulikoro e nunca mais é visto. A Wikipédia, no verbete sobre o Império Sosso, diz que ele foi morto.",
        { h: "O que veio depois" },
        "Sundiata fez de Niani, perto da fronteira atual entre Mali e Guiné, sua capital. O Mali controlou a maior parte da África Ocidental por dois séculos. Segundo a tradição, a autoridade do [[mansa]] era limitada por uma assembleia, a Gbara, e as regras do reino foram reunidas na Carta de Manden (Kouroukan Fouga), que a UNESCO reconhece como patrimônio cultural imaterial. Ao morrer, por volta de 1255, segundo a versão mais comum, afogou-se no rio Sankarani, perto de Niani. Há outras versões: flechada acidental durante uma cerimônia ou assassinato.",
        { h: "Por que importa" },
        "Kirina é o início tradicional do Império do Mali, um dos mais ricos da história, e inspirou a epopeia nacional do Mali. Mansa Musa, o governante mais famoso do Mali, é neto de um irmão de Sundiata na versão de Niane, ou seja, sobrinho-neto; outras fontes discordam, e Ibn Battuta dá outro nome ao avô dele. A Britannica o descreve como amplamente considerado a pessoa mais rica da história, mas os historiadores dizem que não há como calcular essa riqueza.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: 1235 é a data citada na Wikipédia, a partir de uma obra de referência (Carruth, 1993). Nenhum documento da época a confirma." },
        { note: "O local: a Wikipédia dá as coordenadas 12°18′N, 8°09′O, na região de Koulikoro. O ponto exato da batalha não é conhecido." },
        { note: "O balafom: a tradição diz que Sumanguru tinha um balafom mágico, que Balla Fasséké roubou e levou ao Manden. É de onde viria a tradição dos griôs balafonistas. A família Kouyaté diz ainda guardar o instrumento em Niagassola, na Guiné." }
      ]}
    ]
  },

  mohi: {
    war: "Invasão mongol da Europa (1241–1242)",
    hook: "O exército húngaro se fechou num círculo de carroças. Foi o que os mongóis queriam.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1223, os mongóis tinham derrotado um exército russo e cumano no rio Kalka e ido embora. Os cumanos que sobreviveram, cerca de 40.000 pessoas, fugiram para a Hungria, e o rei Béla IV os acolheu. Ele tentava convertê-los ao cristianismo e se intitulava 'rei da Cumânia'. Para os mongóis, os cumanos eram seus súditos, a Hungria era uma rival, e a fuga era motivo de guerra. A ameaça incluía a acusação de que a Hungria tinha feito desaparecer enviados mongóis.",
        "Dentro do país, Béla enfrentava o descontentamento de muitos nobres. Para reforçar o poder real, tinha tomado de volta terras doadas pelo pai e executado ou expulsado conselheiros dele, e sua proteção aos cumanos irritou ainda mais a nobreza.",
        { h: "O caminho até Mohi" },
        { timeline: [
          ["12 de março de 1241", "O exército principal, de Batu e Subutai, passa o desfiladeiro de Verecke e destrói o exército do conde palatino Denis Tomaj."],
          ["Meados de março", "A vanguarda mongol chega a Pest (15 de março). O khan cumano, sob proteção do rei, é morto num tumulto, e os cumanos deixam o país."],
          ["9 de abril", "No norte, os mongóis vencem o duque Henrique II da Silésia em Legnica."],
          ["10 de abril", "Os húngaros chegam ao Sajó, cheio de cheia, e montam um acampamento de carroças."],
          ["11 de abril", "Batalha de Mohi."]
        ]},
        "Os mongóis atacaram com três exércitos: um no norte, que acabou em Legnica; um ao sul, na Transilvânia; e o principal, de Batu e Subutai. Havia poucos castelos de pedra pelo caminho, porque os reis húngaros restringiam os castelos particulares. Béla tinha mandado levantar barricadas de árvores nas fronteiras, e as unidades especializadas mongóis as limparam em cerca de três dias. Béla mandou todos se reunirem em Pest, mas muitos não chegaram. Alguns foram destruídos no caminho, e muitos nobres se recusaram a lutar."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Béla IV, rei da Hungria" },
        "Tinha chamado os cumanos e agora via o reino ruir. Segundo o relato, proibiu ataques contra os mongóis enquanto o exército se reunia, e quando ofereceu batalha, os mongóis recuaram, o que os senhores entenderam como covardia. Em Mohi, ordenou um acampamento de carroças, mas não mandou preparar a defesa.",
        { h: "Batu e Subutai" },
        "Batu e Subutai comandavam o exército principal. Segundo o Yuan Shi, depois da batalha houve uma disputa entre os dois: Güyük e Büri acusaram Batu, e a versão de Subutai sobre a travessia do rio foi aceita num banquete. Carpini conta outra coisa: Batu teria reunido o exército. Em Mohi, Batu propôs recuar quando os ataques falharam, mas Subutai recusou, e o ataque continuou.",
        { h: "Os outros nomes" },
        "Do lado húngaro, o duque Kálmán (Coloman), irmão do rei; o arcebispo Ugrin Csák, cujo exército já tinha ficado preso num pântano em março; e Rembald de Voczon, mestre dos [[templários]]. Do lado mongol, Sejban (Shiban), que atravessou o rio ao norte, e Kadan, que depois perseguiu Béla. As fontes principais são Tomás de Split e o mestre Rogério (Rogerius), cônego de Várad, autor do Carmen miserabile."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Ninguém sabe com certeza. Os cronistas húngaros falam em até 500.000 mongóis. Rashid al-Din fala em cerca de 40.000 cavaleiros para toda a invasão da Europa Central, o que deixaria 15.000 a 30.000 em Mohi. McLynn sugere uns 20.000 mongóis contra 25.000 húngaros, enquanto Sverdrup fala em pelo menos 30.000 mongóis nominais. Para os húngaros, as estimativas modernas vão de uns 15.000 a 60.000 e até 50.000 em outras obras.",
        { note: "Quase todos os números são incertos. Usamos faixas, com os autores, em vez de uma cifra única." },
        { h: "O terreno" },
        "A planície de Mohi, junto ao rio Sajó, no nordeste da Hungria. O rio estava cheio. O Sajó era cruzado por uma ponte de pelo menos 200 metros. Os húngaros ficaram do lado de cá, em um acampamento cercado de carroças. Os mongóis, sem se mostrar, ficaram do outro lado, no mato.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, os húngaros se fecharam no acampamento de carroças, uma proteção contra exércitos nômades. Um escravo russo avisou que haveria um ataque noturno na ponte.",
        "Segundo, em plena noite, Kálmán, Ugrin e o mestre templário saíram do acampamento e atacaram a vanguarda mongol que Batu tinha mandado segurar a ponte. Tomás de Split conta que os húngaros empurraram os mongóis ponte abaixo e muitos se afogaram. Voltaram ao acampamento por volta das duas da manhã e comemoraram.",
        "Terceiro, de madrugada, Sejban atravessou um vau ao norte para atacar por trás os guardas da ponte, e Subutai foi para o sul construir uma ponte de emergência. Batu, com sete máquinas de arremesso, atacou a ponte.",
        "Quarto, o ataque de Batu e a chegada de Sejban obrigaram os húngaros a voltar ao acampamento. O grosso do exército mongol terminou de atravessar por volta das oito da manhã.",
        "Quinto, Kálmán, Ugrin e o mestre templário saíram de novo, perceberam que era o exército principal e voltaram para buscar reforços. O rei não tinha mandado preparar nada, e Ugrin o repreendeu em público. A demora deu tempo a Batu para atravessar.",
        "Sexto, a luta no campo foi dura. Os húngaros eram mais numerosos que a tropa de Batu, e os mongóis tinham o rio atrás. Batu perdeu cerca de trinta guarda-costas e seu tenente Bakatu. Subutai atacou a retaguarda húngara, e os húngaros recuaram para o acampamento.",
        "Sétimo, os mongóis bombardearam o acampamento com pedras, flechas incendiárias e, segundo alguns autores, talvez pólvora, o que é discutido. As tendas pegaram fogo, e houve pânico e pisoteio.",
        "Oitavo, os mongóis deixaram uma brecha de propósito, uma tática atribuída a Sun Tzu. Os húngaros fugiram por ela e foram caçados e mortos. O arcebispo Ugrin morreu, Kálmán foi ferido e morreu pouco depois, e Béla escapou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A fonte mais próxima da época, a Notícia de Echternach (Epternacher Notiz), conta 10.000 mortos húngaros, quase todo o exército. Outras fontes falam em 70.000, mas a Wikipédia não aceita esse número. As perdas mongóis são desconhecidas: estimativas vão de várias centenas (McLynn) a vários milhares. Carpini conta que havia um cemitério na Rússia para mongóis mortos na campanha da Hungria.",
        "Os mongóis tomaram Pest e a queimaram. Kadan perseguiu Béla, que fugiu para a Áustria. O duque Frederico II o prendeu, exigiu um grande resgate e o obrigou a ceder três condados do oeste. Depois Béla se refugiou no castelo de Trogir, no Adriático, até os mongóis irem embora. A população da Hungria caiu entre 15% e 25%: 25% é o número tradicional, e Veszprémy fala em cerca de 15%.",
        { h: "Por que importa" },
        "Os mongóis começaram a se retirar no fim de março de 1242 e saíram da Europa Central em meados do ano. O motivo mais citado é a morte do grande khan Ogodei, em 11 de dezembro de 1241, que obrigava os príncipes a voltar para a eleição do sucessor. Stephen Pow acha que o tempo de viagem de um mensageiro torna isso difícil. Outras explicações: um clima mais úmido e frio, que alagou as pastagens; as perdas em cercos; uma rebelião dos cumanos; a falta de pasto. Alguns acham que Batu nunca planejou avançar mais.",
        "Béla voltou e reconstruiu o reino. Recuperou cidades do oeste, reforçou os castelos de pedra e ampliou a cavalaria pesada, e ganhou o apelido de 'segundo fundador' da Hungria. Nunca mais um exército mongol capaz de sitiar cidades fortificadas ameaçou a Europa Ocidental.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: a maioria das fontes dá 11 de abril de 1241. A Britannica dá 10 de abril, e o verbete da Wikipédia sobre a invasão da Europa fala em um ataque na noite de 10 para 11." },
        { note: "Os detalhes da travessia: as fontes divergem. A Wikipédia em inglês e a New World Encyclopedia põem Sejban no vau ao norte e Subutai construindo uma ponte ao sul. Outros relatos fazem Subutai atravessar o vau e atacar o acampamento por trás." },
        { note: "A pólvora: há quem diga que os mongóis usaram bombas de pólvora chinesas em Mohi. As evidências são especulativas, e a Wikipédia deixa a questão em aberto." },
        { note: "O dito de Batu: segundo um relato (Medievalists.net), Batu viu o acampamento cheio e cercado de carroças e disse que os húngaros estavam apertados como gado em baias estreitas." }
      ]}
    ]
  },

  peipus: {
    war: "Cruzadas do Norte (século 13)",
    hook: "A cena do gelo quebrando e dos cavaleiros afundando é a mais famosa da batalha. Provavelmente é invenção do cinema.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Durante séculos, a República de Novgorod tentou submeter e converter os estonianos pagãos. Em 1224, os Irmãos Livonianos da Espada tomaram a cidade de Yuryev (hoje Tartu), que virou a capital do bispado de Dorpat. Um tratado de paz de 1224 favoreceu Novgorod, e depois vieram laços de família: o príncipe Vladimir Mstislavich de Pskov casou uma filha com Teodorico de Buxhövden, irmão dos bispos de Riga e de Dorpat.",
        { h: "O caminho até o lago Peipus" },
        { timeline: [
          ["15 de julho de 1240", "Segundo fontes russas, Alexandre Yaroslavich vence os suecos de Birger Jarl no rio Neva. Nenhuma fonte sueca fala disso."],
          ["Setembro de 1240", "Os cruzados tomam Izborsk e Pskov."],
          ["Fim de 1240 ou início de 1241", "Novgorod, com medo da força de Alexandre, o expulsa para Pereslavl-Zalessky."],
          ["1241", "Alexandre é chamado de volta e retoma Koporye e Pskov dos cruzados."],
          ["Primavera de 1242", "Cavaleiros alemães derrotam um destacamento de Novgorod a uns 20 km ao sul de Dorpat. Alexandre se posiciona no lago Peipus."],
          ["5 de abril de 1242", "Batalha do lago Peipus."]
        ]},
        "No inverno de 1240-41, o bispado de Ösel-Wiek e a [[ordem livoniana]] fizeram uma campanha em Votia, e Novgorod contra-atacou. Pskov era um prêmio importante: para o historiador Riley-Smith, a cidade era a peça central da cruzada no leste.",
        { note: "Há dúvidas sobre o ano exato da retomada de Pskov: o verbete sobre Alexandre fala em 1241, mas outras narrativas a colocam em março de 1242. As crônicas usam calendários diferentes." }
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Alexandre Yaroslavich, príncipe de Novgorod" },
        "Nasceu em 1221 (ou 1220; a data é incerta), e tinha cerca de 21 anos. Foi nomeado príncipe de Novgorod em 1236 pela república e pelo pai, e governou sozinho a partir de 1238. O apelido 'Nevsky', da vitória no Neva, só aparece no século 15. Mais tarde, em 1259, forçou Novgorod a pagar tributo à Horda Dourada, e em 1263 visitou o khan Berke em Sarai. Morreu em 14 de novembro de 1263, aos 42 anos, voltando de lá. A Igreja Ortodoxa o canonizou em 1547.",
        { h: "Hermann de Dorpat" },
        "Bispo de Dorpat e irmão do bispo Alberto de Riga. É citado como comandante do lado cruzado.",
        { h: "Os outros nomes" },
        "Do lado russo, André, irmão de Alexandre, enviado pelo pai, Yaroslav, para ajudá-lo, segundo a crônica de Suzdal. Os relatos alemães quase não citam nomes."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam muito e nenhuma fonte antiga os dá. Nicolle (1996) estima os cruzados em cerca de 2.600: 800 cavaleiros dinamarqueses e alemães, 100 teutônicos, 300 dinamarqueses, 400 alemães e 1.000 infantes estonianos. Para Novgorod, cerca de 5.000: uns 1.000 da [[druzhina]] de Alexandre e André, 2.000 milicianos de Novgorod, 1.400 finlandeses e 600 arqueiros a cavalo. Dahlmann (2003) dá faixas mais amplas: de 200–400 a 1.800 cruzados, e de 400–800 a 6.000–7.000 russos.",
        { note: "A Crônica Rimada da Livônia diz que havia sessenta russos para cada cavaleiro alemão, um número claramente exagerado." },
        { h: "O terreno" },
        "O lago Peipus, na fronteira entre a Estônia e a Rússia, congelado em abril. Segundo essa crônica, Alexandre posicionou o exército em Uzmen, junto à Pedra do Corvo. O local exato da batalha é desconhecido. Em 1958-59, mergulhadores procuraram objetos no norte do lago e não acharam nada, o que já era esperado, dadas as fontes.",
        { h: "A batalha" },
        "As fontes principais contam histórias um pouco diferentes. A Primeira Crônica de Novgorod diz que os alemães e estonianos entraram no exército de Alexandre como uma cunha, e que a perseguição no gelo foi até sete verstas antes da margem de Subol. Nicolle e Hellie (2006) descrevem assim:",
        "Primeiro, os cruzados e cavaleiros teutônicos carregaram sobre o lago e chegaram ao inimigo. Segundo, a infantaria miliciana de Novgorod os segurou e atrasou o ataque. Terceiro, depois de um pouco mais de duas horas de luta corpo a corpo no gelo escorregadio, Alexandre mandou as alas direita e esquerda, com a cavalaria, entrarem na batalha. Quarto, os cruzados, exaustos, começaram a recuar em desordem pelo gelo. Quinto, cavalaria fresca de Novgorod provocou uma fuga em pânico.",
        "A Crônica Rimada da Livônia, escrita nos anos 1290 pela Ordem, também diz que os irmãos foram cercados, mas afirma que os mortos caíram 'na grama', e não no gelo.",
        { h: "O gelo quebrou?" },
        "Nenhuma fonte primária fala em gelo quebrando ou em afogamentos. A Crônica Rimada fala em mortos 'na grama'. A Vida de Alexandre Nevsky, de meados do século 15, foi a primeira a situar a batalha no gelo, com os corpos cobrindo a superfície de sangue. Segundo Ostrowski (2006), a imagem dos cavaleiros afundando vem do filme de Eisenstein, de 1938, e talvez de relatos de outra batalha no gelo, a de Liubech, em 1016."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas também variam. A Crônica Rimada da Livônia fala em 20 irmãos mortos e 6 capturados. A Primeira Crônica de Novgorod fala em 400 alemães mortos, 50 levados para Novgorod e 'incontáveis' estonianos mortos; a versão mais nova da crônica (anos 1440) sobe os alemães mortos para 500. Não há número para as perdas russas.",
        "Depois da batalha, segundo a Crônica de Novgorod, os alemães devolveram as terras que tinham tomado, trocaram prisioneiros, soltaram os reféns de Pskov e fizeram a paz, em 1242.",
        { h: "Por que importa" },
        "A derrota impediu os cruzados de retomar Pskov e parou a expansão para o leste. Segundo Hosking (2001), o rio Narva e o lago Peipus se tornaram uma fronteira estável entre a ortodoxia e o catolicismo.",
        "O mito é maior que a batalha. A Igreja canonizou Alexandre em 1547. Em 1938, o filme de Eisenstein fixou a imagem dos cavaleiros afundando. Em 1942, em plena guerra contra a Alemanha, a União Soviética criou a Ordem de Alexandre Nevsky. A batalha é lembrada hoje na Rússia como um dia de glória militar.",
        { h: "Curiosidades e controvérsias" },
        { note: "O revisionismo: Fennell (1983) argumentou que a batalha foi menor do que se pinta, que a maior parte dos teutônicos estava em outro lugar e que a crônica de Suzdal e as fontes suecas quase não a citam. Ostrowski diz que a crônica de Suzdal só a menciona de passagem." },
        { note: "A cruzada coordenada: Donner (1929) defendeu que as campanhas sueca, dinamarquesa e alemã contra Novgorod eram coordenadas pela Cúria. Os historiadores recentes rejeitam isso por falta de provas. Selart diz que as bulas papais de 1240–43 citam só não cristãos, não os russos." },
        { note: "A escala: Fennell e Fonnesberg-Schmidt acham que as fontes russas posteriores exageraram a batalha do lago. Quanto ao Neva, a vitória de 1240 só aparece em fontes russas, e a Wikipédia a considera provavelmente um choque pequeno." },
        { note: "O filme: Smith e Urban (1977) dizem que o filme de Eisenstein revela mais sobre a época em que foi feito do que sobre 1242." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  mohi: {
    terrain: [
      { t: "sea", x: 44, y: 0, w: 8, h: 70, l: "" },
      { t: "note", x: 48, y: 5, l: "Rio Sajó" },
      { t: "note", x: 48, y: 41, l: "Ponte" }
    ],
    units: [
      { id: "hCamp", s: "b", k: "camp", w: 30, h: 22, l: "Acampamento de carroças" },
      { id: "hArmy", s: "b", k: "cav", w: 14, h: 6, l: "Exército húngaro" },
      { id: "hSort", s: "b", k: "cav", w: 11, h: 5, l: "Kálmán, Ugrin e templários" },
      { id: "mBatu", s: "a", k: "cav", w: 14, h: 6, l: "Batu (sete máquinas)" },
      { id: "mSej", s: "a", k: "cav", w: 11, h: 5, l: "Sejban" },
      { id: "mSub", s: "a", k: "cav", w: 12, h: 5, l: "Subutai" }
    ],
    steps: [
      { t: "Os húngaros se fecham num acampamento de carroças na margem oeste do Sajó, cheio. Os mongóis esperam do outro lado, no mato, sem se mostrar.",
        p: { hCamp: [24, 38], hArmy: [24, 38], hSort: [34, 30], mBatu: [76, 38], mSej: [80, 12], mSub: [80, 60] } },
      { t: "Na noite de 10 para 11 de abril, Kálmán, Ugrin e o mestre templário saem e atacam os mongóis que seguravam a ponte. Muitos se afogam.",
        p: { hSort: [46, 38], mBatu: [64, 38] } },
      { t: "Os húngaros voltam ao acampamento por volta das duas da manhã e comemoram. O rei não mandou preparar a defesa.",
        p: { hSort: [32, 38], mBatu: [72, 38] } },
      { t: "Ao amanhecer, Sejban atravessa um vau ao norte, para atacar por trás os guardas da ponte. Subutai vai para o sul, construir uma ponte de emergência.",
        p: { mSej: [48, 12], mSub: [48, 60] } },
      { t: "Batu ataca a ponte com sete máquinas de arremesso. Os húngaros recuam para o acampamento enquanto Sejban chega pelo norte.",
        p: { mBatu: [48, 38], mSej: [40, 28, -30], hSort: [32, 40], mSub: [42, 58] } },
      { t: "Por volta das oito, o grosso do exército mongol terminou de atravessar. Os húngaros saem para lutar, mas sem comando de conjunto. Batu perde guarda-costas e seu tenente.",
        p: { mBatu: [38, 38], hSort: [32, 38], hArmy: [28, 38], mSej: [34, 26, -30] } },
      { t: "Subutai atinge a retaguarda húngara. Os húngaros recuam para as carroças, que os mongóis bombardeiam com pedras e flechas incendiárias.",
        p: { mSub: [26, 54, -60], mBatu: [34, 38], mSej: [26, 24, -40], hArmy: [24, 38] } },
      { t: "Os mongóis deixam uma brecha de propósito. Os húngaros em pânico fogem por ela, e são caçados. Kálmán e Ugrin morrem. O rei Béla escapa.",
        p: { hArmy: [12, 56, 40], hSort: [14, 50, 40], mBatu: [24, 44, 60], mSej: [22, 24, -40], mSub: [24, 54, -60] }, x: ["hArmy", "hSort", "hCamp"] }
    ]
  }
});
