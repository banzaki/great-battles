// In-depth battles, batch bb: kunyang, ngasaunggyan, naungyo, nongsarai, maymyo.
// Checked against the English, Portuguese and Chinese Wikipedia articles on each battle (Kunyang, Ngasaunggyan, Naungyo,
// Nong Sarai, Maymyo), the English articles on the First Mongol invasion of Burma, the Sino-Burmese War (1765-1769),
// and the Hou Hanshu text of the Guangwu annals on Wikisource, plus the works those pages cite (Harvey, Hall, Dai Yingcong,
// Terwiel, de Crespigny). Where sources disagree the text says so.
// Formations: only Naungyo and Kunyang have dispositions and moves described well enough to draw. Ngasaunggyan, Nong Sarai
// and Maymyo are skipped on purpose: the sources disagree on the moves or do not place the units.

Object.assign(GLOSSARY, {
  "dinastia xin": "A dinastia curta fundada por Wang Mang em 9 d.C., depois de tomar o trono dos Han. Durou até 23 d.C., quando as revoltas a derrubaram.",
  "rebeldes de lulin": "Um dos grupos de camponeses e pequenos nobres que se levantaram contra Wang Mang. Vinham das colinas de Lulin e aclamaram Liu Xuan, descendente dos Han, como imperador em 23 d.C.",
  "livro de han": "A história oficial da dinastia Han Ocidental e do reinado de Wang Mang, compilada pela família Ban entre os séculos I e II. É mais próxima dos fatos que o Livro dos Han Posteriores, mas traz números oficiais difíceis de acreditar.",
  "livro dos han posteriores": "História dos Han Orientais, escrita por Fan Ye no século V, quase 400 anos depois de Kunyang. É a fonte mais detalhada sobre Liu Xiu e sobre o cerco.",
  "zizhi tongjian": "Grande crônica da história chinesa, compilada por Sima Guang e terminada em 1084. Retoma os números das histórias anteriores, com pequenas variações.",
  "reino de pagan": "Primeiro grande reino da Birmânia, com capital na cidade de Pagan, às margens do rio Irauádi. Dominou o país do século XI ao XIII e construiu milhares de templos.",
  "província de yunnan": "Região do sudoeste da China, de fronteira com a Birmânia. Os mongóis a conquistaram em 1253 e a transformaram em base para atacar os países ao sul.",
  "crônica yuan": "A história oficial da dinastia Yuan, o Yuanshi, compilada em 1370, já sob a dinastia Ming. Conta a guerra do ponto de vista dos mongóis.",
  "reino de toungoo": "Pequeno reino do centro da Birmânia, fundado em 1510. Sob Tabinshwehti e Bayinnaung, reunificou o país e criou o maior império que a região já tinha visto.",
  "reino de hanthawaddy": "Reino do povo mon no sul da Birmânia, com capital em Pegu. Era rico por causa do comércio marítimo e tinha mercenários com armas de fogo.",
  "crônica hmannan": "A Hmannan Yazawin, 'Crônica do Palácio de Vidro', compilada por ordem do rei birmanês entre 1829 e 1832. É a história oficial da Birmânia, escrita séculos depois dos fatos que conta.",
  "balsa": "Plataforma flutuante improvisada com troncos ou bambu, usada para atravessar um rio quando não há barcos nem pontes.",
  "apanágio": "Terra que um rei dá a um parente ou a um servidor de confiança, para ele governar e viver dos seus rendimentos.",
  "reino de ayutthaya": "Reino do Sião (a atual Tailândia), com capital na cidade de Ayutthaya, entre os séculos XIV e XVIII. Foi vassalo da Birmânia entre 1569 e 1584.",
  "elefante em musth": "Elefante macho em período de excitação hormonal, quando fica agressivo e difícil de controlar. Muitos generais o usavam de propósito: um elefante em musth atacava qualquer coisa.",
  "cornaca": "Condutor do elefante de guerra. Sentava-se no pescoço do animal e o guiava com um gancho de ferro, enquanto o comandante lutava atrás dele.",
  "crônica de luang prasoet": "Crônica siamesa escrita em 1681, quase 90 anos depois da batalha de Nong Sarai.",
  "dinastia konbaung": "Dinastia que governou a Birmânia de 1752 a 1885. Seus reis expandiram o país e lutaram contra o Sião e contra a China.",
  "linha de suprimento": "O caminho pelo qual um exército recebe comida, armas e munição. Se o inimigo o corta, o exército fica preso e passa fome longe de casa.",
  "trança manchu": "Penteado dos homens manchus: cabeça raspada na frente e uma trança comprida atrás. Era sinal de lealdade à dinastia Qing, e recusá-lo era tratado como rebelião.",
  "sawbwa xan": "Título dos príncipes do povo xã, nas montanhas entre a Birmânia e a China. Muitos deviam obediência aos dois lados ao mesmo tempo."
});

Object.assign(DEEP, {
  kunyang: {
    war: "Queda da dinastia Xin e revolta de Lulin (17–25 d.C.)",
    hook: "Uma cidade com 9.000 rebeldes aguentou um exército imenso, e um cavaleiro que saiu à noite voltou para virar a guerra.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 9 d.C., um alto funcionário chamado Wang Mang tirou o trono do último imperador Han e fundou a [[Xin|dinastia xin]]. Prometia consertar o Império com reformas: nacionalizar terras, proibir a compra e venda de escravos e trocar a moeda várias vezes. Os planos desorganizaram a economia. Cheias do rio Amarelo, fome e impostos empurraram camponeses para o banditismo e para a rebelião.",
        "Em 17 d.C., bandos de camponeses começaram a se levantar. Um grupo se instalou nas colinas de Lulin, e seus líderes quiseram dar à revolta uma bandeira: restaurar os Han. Em 23 d.C., os [[rebeldes de lulin]] aclamaram imperador Liu Xuan, descendente da família imperial, com o nome de reinado Gengshi.",
        { h: "O caminho até Kunyang" },
        { timeline: [
          ["9 d.C.", "Wang Mang tira o trono dos Han e funda a dinastia Xin."],
          ["17 d.C.", "Começam as revoltas camponesas. Os rebeldes de Lulin se firmam nas colinas."],
          ["Início de 23 d.C.", "Liu Xuan é proclamado imperador Gengshi. Os rebeldes derrotam tropas de Wang Mang."],
          ["Meados de 23 d.C.", "Wang Mang manda Wang Yi e Wang Xun com um grande exército de Luoyang para esmagar os Han restaurados."]
        ]},
        "Wang Mang ficou furioso com as derrotas e decidiu cortar a revolta antes que ela crescesse. Os rebeldes estavam divididos: uma força era liderada por Liu Yan, e outra por Wang Feng, Wang Chang e Liu Xiu, que tinha tomado três cidades, Kunyang, Dingling e Yanxian."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Liu Xiu" },
        "Descendente distante da família Han, tinha crescido como fazendeiro e estudado na capital. Entrou na revolta junto com o irmão, Liu Yan. Em Kunyang, era um dos comandantes mais jovens, e foi ele quem convenceu os mais velhos a ficar e lutar em vez de se dispersar. Dois anos depois, em 25 d.C., tornou-se o imperador Guangwu e restaurou a dinastia Han.",
        { h: "Wang Yi e Wang Xun" },
        "Eram os generais de Wang Mang. Wang Yi, parente do imperador, comandava o exército; Wang Xun, o segundo. Os relatos descrevem Wang Yi como arrogante: a fala que as crônicas lhe atribuem é que, com um exército de um milhão, tudo o que ele encontrasse seria destruído, e que ele ia massacrar a cidade, avançar pisando no sangue e dançar na frente de todos.",
        { h: "Wang Feng e Wang Chang" },
        "Eram os chefes rebeldes que comandavam a guarnição. No início, queriam deixar Kunyang, espalhar os homens e cuidar da própria sobrevivência. Liu Xiu os convenceu de que um exército disperso seria caçado em pedaços."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças, e uma advertência" },
        "Os números de Kunyang são um dos problemas mais famosos da história chinesa. O [[livro de han]] diz que o exército de Wang Mang tinha 420.000 soldados armados, de um total que ele chamava de 'um milhão'. O [[zizhi tongjian]] fala em 430.000. Fontes mais próximas dos fatos dão cifras bem menores: de 30.000 (o filósofo Wang Chong) a 50.000 ou 60.000 (a crônica Dongguan Hanji). O [[livro dos han posteriores]] repete o total de 420.000, mas diz que só cerca de 100.000 chegaram às muralhas. Historiadores consideram a cifra de 420.000 pouco provável: o exército já estava a caminho dois meses depois da ordem, tempo curto demais para reunir tanta gente. Os números maiores podem incluir carregadores e trabalhadores convocados, segundo a leitura de alguns historiadores.",
        { note: "Os números do lado Xin são cifras de crônica, e tudo indica que estão exagerados. Do lado rebelde, a cidade tinha cerca de 9.000 defensores, e Liu Xiu voltou com cerca de 10.000." },
        "O Livro dos Han Posteriores acrescenta detalhes que parecem mais lenda que fato: Wang Mang teria incluído no exército um homem gigante chamado Ju Wuba, com cerca de 2,3 metros de altura, e manadas de tigres, leopardos, rinocerontes e elefantes, 'para aumentar a impressão de força'. É o tipo de detalhe que se lê com reserva: o Livro dos Han Posteriores o registra, mas soa mais como propaganda de guerra do que como relato de campo.",
        { h: "O terreno" },
        "Kunyang era uma cidade pequena e murada, na região de Yingchuan, ao sul de Luoyang, com um rio a oeste. Estava no caminho do exército de Wang Mang, que descia de Luoyang para o sul.",
        { h: "Uma decisão numa sala" },
        "Quando o exército Xin chegou perto, os rebeldes que estavam em Kunyang, uns 9.000, entraram em pânico. Queriam se espalhar rumo ao sul. Liu Xiu respondeu que, se ficassem juntos, tinham chance, e que se se dispersassem seriam caçados. Prometeu que traria reforços de fora para atacar o inimigo por trás. Os outros aceitaram.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, Liu Xiu saiu de Kunyang à noite com treze cavaleiros para buscar tropas nas cidades vizinhas de Dingling e Yanxian. O exército Xin chegou pelo norte e cercou Kunyang.",
        "Segundo, o cerco apertou. Os atacantes usaram torres de cerco e cavaram túneis sob as muralhas, e os defensores resistiram.",
        "Terceiro, Liu Xiu voltou com cerca de 10.000 soldados a pé e a cavalo. O moral dos Xin caiu, e o dos defensores subiu.",
        "Quarto, Liu Xiu levou à frente cerca de mil homens e atacou várias vezes. Segundo as crônicas, matou mais de mil soldados de Wang Mang.",
        "Quinto, e decisivo: com 3.000 voluntários, deu a volta, atravessou um rio a oeste da cidade e atacou o quartel de Wang Yi.",
        "Sexto, Wang Yi ordenou aos seus campos que ficassem parados e só se movessem com ordem sua. Enviou Wang Xun com cerca de 10.000 homens contra a ponta de lança rebelde. Os outros comandantes Xin hesitaram, e Wang Xun ficou sem apoio.",
        "Sétimo, a linha de Wang Xun entrou em desordem. Liu Xiu aproveitou e o matou. A guarnição de Kunyang viu o que acontecia e saiu da cidade para atacar.",
        "Oitavo, o exército Xin cedeu. Os soldados se pisotearam. Uma tempestade com ventos fortes, tão violentos que, segundo o texto, arrancaram telhas, fez o rio subir, e mais de 10.000 homens teriam se afogado ao tentar atravessar."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Wang Yi voltou a Luoyang com poucos milhares de homens de elite. Os cronistas falam em dezenas de milhares de mortos, número tão incerto quanto os do início. Em poucas semanas a notícia se espalhou, e o Império se desfez: governadores foram mortos, e muitas regiões passaram a se declarar parte da nova dinastia Han.",
        "Em outubro de 23 d.C., rebeldes entraram em Chang'an, e Wang Mang foi morto. A dinastia Xin tinha durado 14 anos.",
        { h: "Por que importa" },
        "Foi o fim do poder de Wang Mang e o início da restauração dos Han. A vitória deu a Liu Xiu fama e seguidores, e dois anos depois ele fundou os Han Orientais, uma dinastia que durou quase dois séculos. Na tradição chinesa, Kunyang é um dos exemplos mais citados de batalha em que um lado pequeno vence um maior.",
        { h: "Curiosidades e controvérsias" },
        { note: "O presságio: segundo o Livro dos Han Posteriores, na noite de Kunyang uma estrela cadente caiu no acampamento dos Xin, e de dia uma nuvem 'como uma montanha que desaba' veio sobre o acampamento e se dissolveu a um palmo do chão, e os soldados ficaram aterrorizados. É a forma clássica de os cronistas dizerem que o Céu já tinha abandonado Wang Mang. Deve ser tratada como lenda." },
        { note: "As datas: o Livro dos Han Posteriores registra o encontro no primeiro dia do sexto mês de 23 d.C., e as conversões modernas o põem em 7 de julho no calendário juliano. Outras fontes dão o primeiro dia como 1º de junho. A data exata depende do calendário usado." },
        { note: "As fontes: o Livro dos Han Posteriores foi escrito no século V, quase 400 anos depois, e a crônica Dongguan Hanji foi compilada pela corte da dinastia que o próprio Liu Xiu fundou. É a história contada pelo lado vencedor, e convém lê-la com cautela." }
      ]}
    ]
  },

  ngasaunggyan: {
    war: "Primeira invasão mongol da Birmânia (1277–1287)",
    hook: "Os cavalos mongóis fugiam dos elefantes, até os cavaleiros descerem e começarem a atirar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1271, Kublai Khan fundou a dinastia [[yuan]] e passou a exigir que os vizinhos do sul reconhecessem seu poder. Entre eles estava o [[reino de pagan]], o maior reino da Birmânia, com capital na cidade de Pagan e milhares de templos. O rei Narathihapate recusou-se a pagar [[tributo]].",
        "Conta a tradição que o rei mandou matar enviados mongóis; uma versão moderna fala em enviados mortos por bandoleiros na estrada, e as fontes divergem. O que parece firme é o confronto na fronteira de Yunnan, que os mongóis tinham conquistado em 1253 e transformado em base para ir mais ao sul.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["1253", "Os mongóis conquistam o reino de Dali e controlam a [[província de Yunnan|província de yunnan]]."],
          ["1271", "Narathihapate recusa o tributo exigido por Kublai Khan."],
          ["1277", "Um exército de Pagan ataca a fronteira de Yunnan. Os mongóis respondem e vencem em Ngasaunggyan."],
          ["1283", "Os mongóis voltam e vencem em Bhamo."],
          ["1287", "Pagan cai. O reino se desfaz."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Narathihapate" },
        "Rei de Pagan desde 1256. As crônicas birmanesas o pintam como covarde e incompetente, e a tradição o chama de 'o rei que fugiu dos chineses'. Não há prova de que tenha comandado em Ngasaunggyan; o comandante de Pagan não é nomeado com segurança.",
        { h: "Qutuq (Khudu)" },
        "General mongol na região de Yunnan. O nome aparece com grafias diferentes: Marco Polo o chama de Huthukh, e obras modernas usam Khudu. Foi ele, segundo as narrativas, quem mandou os cavaleiros desmontarem. Há versões em que foi ferido, e em outras o dão como morto, e as fontes não resolvem isso."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças, e uma advertência" },
        "Não existem números firmes. A [[crônica yuan]] diz que 700 mongóis derrotaram um exército birmanês de 40.000 a 50.000 homens, com 10.000 cavalos e 800 elefantes, e que só um mongol morreu, ao tentar pegar um elefante. Marco Polo, que ouviu a história de oficiais que participaram, fala em 12.000 arqueiros a cavalo contra 60.000 birmaneses e 2.000 elefantes, cada um com uma torre de madeira com 12 a 16 combatentes.",
        { note: "Os números são das fontes dos vencedores, e ninguém sabe qual está mais perto. A Birmânia não deixou crônica desta batalha: o único registro do lado birmanês é uma inscrição de 1278 que cita a derrota em Ngasaunggyan. Tratamos tudo como estimativa." },
        { h: "O terreno" },
        "O local é discutido. Polo implica o vale de Vochang, na região de Baoshan, na China. O historiador Harvey sustenta que o exército de Pagan foi detido antes, em Ngasaunggyan (Kanngai, hoje Yingjiang), a uns 110 km a sudoeste. A mata nas proximidades, onde os mongóis prenderam os cavalos, aparece nos relatos de Polo.",
        { h: "A batalha" },
        "Os cavalos dos [[arqueiros mongóis|arqueiro a cavalo]] não estavam acostumados a [[elefantes|elefantes de guerra]]. Quando o exército de Pagan avançou com os animais, a cavalaria mongol e turca se assustou e quase se desfez.",
        "Qutuq, segundo Marco Polo, mandou os homens desmontarem, prenderem os cavalos em árvores e atirarem nos elefantes a partir da mata. Segundo o relato, as flechas dificilmente matavam animais tão grandes, mas a dor os enlouqueceu. Eles fugiram para a mata, esmagando as torres de madeira nas árvores e pisoteando a própria infantaria.",
        "Com o inimigo em desordem, os mongóis montaram de novo e atacaram. A infantaria de Pagan, em grande parte recrutas sem armadura, resistiu a várias cargas, mas acabou rompida. Uma narrativa moderna diz que os mongóis não perseguiram longe e recuaram para Yunnan, com perdas altas e o comandante ferido; esse trecho não tem fonte antiga clara.",
        { note: "Esta sequência (desmontar, atirar nos elefantes, remontar) vem de Marco Polo, que não esteve lá: segundo Harvey, ele 'sem dúvida ouviu a história' de oficiais. Polo também mistura dez anos de guerra num só episódio e erra em locais e números, mas o quadro geral é considerado provavelmente correto." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória mongol. Pagan reconstruiu e guarneceu os fortes de fronteira em 1278, mas o controle durou pouco.",
        { h: "Por que importa" },
        "É a primeira das três grandes batalhas da primeira invasão, ao lado de Bhamo, em 1283, e da queda de Pagan, em 1287. O rei fugiu da capital, os nobres se submeteram, e o reino que dominava a Birmânia há mais de duzentos anos se desfez em principados menores.",
        { h: "Curiosidades e controvérsias" },
        { note: "Como foi: há quem classifique o episódio como vitória tática dos Yuan e empate estratégico, porque os mongóis não conseguiram ocupar a Birmânia de imediato. O historiador Haw aceita o relato de Polo e acha forçado o relato da crônica Yuan, de 700 contra 40.000." },
        { note: "O que ficou na memória: os elefantes assustados que pisoteiam o próprio exército, imagem que Marco Polo levou à Europa. As crônicas birmanesas quase não falam desta guerra de fronteira." }
      ]}
    ]
  },

  naungyo: {
    war: "Guerra entre Toungoo e Hanthawaddy (1534–1541)",
    hook: "Um jovem general atravessou um rio de balsa, destruiu as balsas e atacou um exército muito maior.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Quando o reino de Pagan desabou, no século XIII, a Birmânia se partiu em vários Estados. Em 1527, o reino de Ava caiu diante de uma confederação de príncipes xãs, e o pequeno [[reino de toungoo]], no centro do país e antes vassalo de Ava, ficou cercado por vizinhos maiores.",
        "O rei Tabinshwehti, que tinha vinte e poucos anos, escolheu como alvo o [[reino de hanthawaddy]], no sul: era o mais rico da região, com acesso ao mar, e seu rei, Takayutpi, tinha fama de fraco. Desde o fim de 1534, Toungoo atacava a cada estação seca. Pegu, a capital, aguentou cerca de três anos.",
        { h: "O caminho até Naungyo" },
        { timeline: [
          ["1534", "Começam os ataques anuais de Toungoo a Hanthawaddy."],
          ["Cerca de 1537", "Um ardil de Toungoo faz o rei Takayutpi mandar matar dois ministros leais."],
          ["Fim de 1538", "Toungoo invade de novo. Takayutpi foge de Pegu para Prome, e Toungoo toma a capital sem lutar."],
          ["Novembro ou dezembro de 1538", "Toungoo alcança o exército de Hanthawaddy em retirada. É a batalha de Naungyo."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Kyawhtin Nawrahta, o futuro Bayinnaung" },
        "Comandante de confiança do rei Tabinshwehti, tinha ainda uns vinte e poucos anos. O nome pelo qual a história o conhece, Bayinnaung, quer dizer 'irmão mais velho do rei', e ele só o recebeu depois desta batalha. Anos mais tarde seria o maior conquistador do sudeste asiático: tomou os estados xãs, Lan Na, Lan Xang e, em 1569, Ayutthaya.",
        { h: "Binnya Dala e Minye Aung Naing" },
        "Eram os principais generais de Hanthawaddy. Tinham mercenários portugueses e indianos com armas de fogo, uma vantagem que Toungoo não tinha. Mesmo assim, estavam em retirada, com o moral baixo.",
        { h: "Tabinshwehti" },
        "O rei de Toungoo tinha ido rio acima com a frota, rumo a Prome. Mandou a Bayinnaung uma mensagem para não lutar e esperar o grosso do exército."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças, e uma advertência" },
        "A [[crônica hmannan]] diz que Hanthawaddy tinha 80.000 homens, 800 cavalos e 200 elefantes, e que Toungoo tinha 10.000 homens, 500 cavalos e 50 elefantes. O historiador G. E. Harvey, em 1925, estimou cerca de 8.000 contra cerca de 1.000. Os historiadores consideram os números da crônica exagerados em cerca de dez vezes. Os números das colunas de ataque, que somam mil homens, estão mais perto da estimativa de Harvey.",
        { note: "Os números e os diálogos de Naungyo vêm da crônica Hmannan, escrita três séculos depois, e podem ter sido enfeitados. O local exato também é desconhecido: uma equipe liderada por Than Tun sugeriu, em 1982, a região do rio Panmawaddy, no município de Einme, mas é uma hipótese." },
        { h: "A decisão" },
        "Hanthawaddy dividiu o exército: cinco divisões seguiram por terra e o rei Takayutpi foi com o resto em cerca de 700 barcos. Bayinnaung perseguiu por terra, com uma força menor, e encontrou o exército maior em Naungyo, do outro lado de um rio. Os batedores informaram que o inimigo era muito superior, e os comandantes aconselharam não atacar. Bayinnaung julgou o inimigo desanimado e suas tropas, melhor disciplinadas, e decidiu atacar.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, as duas forças ficaram frente a frente, separadas pelo rio. Hanthawaddy tinha levado todos os barcos.",
        "Segundo, Bayinnaung mandou fazer [[balsas|balsa]] e começou a travessia. Segundo a crônica, chegou uma ordem de Tabinshwehti para não lutar e esperar. Bayinnaung teria respondido que o inimigo já estava derrotado.",
        "Terceiro, depois da travessia, mandou destruir as balsas: ninguém poderia voltar. É a imagem que ficou famosa na Birmânia.",
        "Quarto, formou três colunas. À esquerda, Bayathingyan; à direita, Taw Maing Ye; no centro, o próprio Bayinnaung, sobre um elefante chamado Swe La Man. Os números da crônica para as três colunas somam mil homens, 500 cavalos e 50 elefantes.",
        "Quinto, as três colunas avançaram juntas contra o exército de Hanthawaddy.",
        "Sexto, Bayinnaung carregou contra Binnya Dala. O general perdeu a coragem e fugiu a cavalo. Minye Aung Naing foi morto sobre o seu elefante.",
        "Sétimo, sem comando, o exército de Hanthawaddy se dividiu em quatro acampamentos desordenados.",
        "Oitavo, soldados fugiram ou se renderam aos montes. Tabinshwehti chegou no dia seguinte e encontrou a vitória feita."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória decisiva de Toungoo, a primeira sobre um exército grande de Hanthawaddy. Só restos do exército inimigo chegaram a Prome. As crônicas não dão números de mortos; só a morte de Minye Aung Naing é registrada.",
        "Poucas semanas depois, o ataque de Toungoo a Prome fracassou, e as tropas recuaram. Takayutpi pediu ajuda aos xãs e a Prome, e ambos recusaram. Morreu de doença poucos meses depois, procurando elefantes de guerra. Muitos senhores mon se submeteram. Toungoo tomou Martaban em 1541 e Prome em 1542.",
        { h: "Por que importa" },
        "Tabinshwehti deu a Kyawhtin Nawrahta o título de Bayinnaung e a região de Hlaing como [[apanágio]]. A partir daí ele foi o braço direito do rei e, depois, o conquistador de boa parte do continente. Harvey chamou Naungyo de 'o primeiro toque característico do grande Bayinnaung'. A batalha é matéria dos livros escolares da Birmânia, e 'fazer como Bayinnaung, que destruiu as balsas' é expressão usada para uma situação em que só se pode vencer.",
        { h: "Curiosidades e controvérsias" },
        { note: "A história das balsas queimadas ou destruídas é a imagem mais famosa de Naungyo, mas vem das crônicas e não pode ser confirmada por outras fontes." }
      ]}
    ]
  },

  nongsarai: {
    war: "Guerra birmanesa-siamesa (1584–1593)",
    hook: "Um príncipe sobre um elefante enfrentou o herdeiro do trono birmanês, e a Tailândia e a Birmânia ainda discordam sobre como foi.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1569, o rei birmanês Bayinnaung tomou a cidade de Ayutthaya, capital do [[reino de ayutthaya]], e a transformou em [[vassala|vassalo]] da Birmânia. O jovem príncipe Naresuan foi levado para a corte birmanesa como [[refém]]. Voltou a Ayutthaya e, por volta de 1584, passou a agir como governante independente.",
        "Bayinnaung morreu em 1581, e seu filho Nanda Bayin enfrentava revoltas em vários lugares. Naresuan se recusou a continuar vassalo e se tornou rei de Ayutthaya em 1590. Nanda Bayin mandou então o filho, o príncipe herdeiro Mingyi Swa, para o castigar.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["1569", "Ayutthaya cai e vira vassala da Birmânia. Naresuan é levado como refém."],
          ["1584", "Naresuan se recusa a obedecer. Começa a guerra birmanesa-siamesa."],
          ["1590", "Naresuan se torna rei de Ayutthaya."],
          ["Janeiro de 1593", "O exército de Mingyi Swa chega perto de Ayutthaya. É a batalha de Nong Sarai."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Naresuan" },
        "O herói nacional da Tailândia. Tinha vivido como refém na corte inimiga. As crônicas tailandesas, em especial as escritas depois da queda de Ayutthaya em 1767, o glorificam mais do que os textos antigos.",
        { h: "Mingyi Swa" },
        "Príncipe herdeiro da Birmânia, filho de Nanda Bayin. Na versão tailandesa, comparam-no a Mara, o demônio que tentou o Buda. Morreu na batalha.",
        { h: "Ekathotsarot e Mangcacharo" },
        "Ekathotsarot era o irmão de Naresuan e lutou do lado de Ayutthaya. Mangcacharo era outro comandante birmanês. Segundo a versão tailandesa, os dois também se enfrentaram em duelo, e Ekathotsarot venceu."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças, e uma advertência" },
        "Não há números confiáveis. As crônicas tailandesas falam em centenas de milhares de homens de cada lado. O português Antonio Bocarro, no início do século XVII, dá 500 soldados em elefantes, 10.000 cavaleiros e 50.000 a pé para o lado siamês, mas é uma só fonte estrangeira, e tratamos os números com cautela.",
        { h: "O terreno" },
        "O local é discutido. A tradição tailandesa o põe em Suphanburi, onde fica o Monumento Don Chedi, inaugurado em 1959, e outro monumento em Kanchanaburi, de 2003, reivindica a mesma batalha. Alguns estudiosos já o puseram perto de Ayutthaya. Os documentos que poderiam resolver foram destruídos no saque de Ayutthaya, em 1767.",
        { h: "A data" },
        "A [[crônica de luang prasoet]] dá o segundo dia do segundo mês lunar do ano 954 do calendário chulasakarat, que as conversões modernas dão como 25 de janeiro de 1593. Estudiosos tailandeses, com base em cálculos de calendário, propuseram 18 de janeiro, e foi essa a data adotada oficialmente em 2006 para o Dia do Exército Real.",
        { h: "O duelo de elefantes, em várias versões" },
        "Todas as versões concordam que Naresuan e Mingyi Swa estavam sobre elefantes de guerra, que Mingyi Swa morreu e que o exército birmanês recuou. O resto muda conforme a fonte.",
        "A versão tailandesa mais conhecida, das crônicas reais, diz que foi combinado um duelo formal. O elefante de Naresuan atacou o de Mingyi Swa, e Naresuan o atingiu com um golpe no peito. O [[cornaca]] de Naresuan foi morto por um tiro. Depois, Naresuan acusou 15 oficiais de tê-lo abandonado.",
        "O holandês Van Vliet, em 1640, conta que o elefante de Naresuan se assustou a princípio e depois atacou; Naresuan acertou a cabeça do príncipe com o gancho e o feriu com a lança. A crônica de Luang Prasoet, de 1681, diz que Naresuan matou Mingyi Swa mas foi ferido no braço direito.",
        "Do lado birmanês, a crônica Yodaya Yazawin diz que houve duelo combinado, depois de um combate sem resultado: o elefante do príncipe foi ferido na base da presa e caiu, e Naresuan o matou. A [[crônica hmannan]] nega o duelo formal: um general birmanês soltou as ataduras do seu [[elefante em musth|elefante em musth]], que feriu o elefante do príncipe, e então Naresuan o abateu a tiro.",
        "Outras fontes: o português Bocarro diz que Naresuan propôs o duelo e Mingyi Swa aceitou sem consultar os comandantes, e que mercenários portugueses atiraram no príncipe a um sinal de Naresuan. Os relatos de Pimenta (1602) e de Purchas (1613) falam em bala de chumbo. Um diplomata persa que visitou Ayutthaya em 1685 conta que Naresuan escondeu uma arma de fogo no gancho do elefante. O historiador B. J. Terwiel (2013) acha que não houve duelo formal: o elefante de Naresuan teria chegado perto demais do de Mingyi Swa, Ekathotsarot teria intervindo, e um tiro teria matado o príncipe.",
        { note: "Quem estava certo? Ninguém sabe. As crônicas tailandesas foram escritas ou reescritas depois do saque de 1767. Terwiel nota que as duas fontes descrevem dois duelos ao mesmo tempo e muito sangue depois deles, o que não combina com a lógica dos duelos de elefantes, que costumavam decidir a batalha." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército birmanês voltou para a Birmânia e a campanha terminou. Naresuan mandou forças tomar Tavoy e Tenasserim. As crônicas dizem que ele puniu os comandantes que culpou pelo abandono.",
        "O relato de Jacques de Coutre descreve um funeral para o elefante de Naresuan, que teria sido embalsamado e cremado, com os tratadores mortos para servi-lo no outro mundo. O título de Chao Phraya do elefante, o mesmo de um nobre alto, talvez seja único entre animais.",
        { h: "Por que importa" },
        "A batalha encerrou a guerra de 1584 a 1593 e reafirmou a independência de Ayutthaya. Na Tailândia, o duelo é uma das cenas mais retratadas da história: pinturas, murais, filmes e teatro de marionetes. A data de 18 de janeiro é o Dia do Exército Real.",
        { h: "Curiosidades e controvérsias" },
        { note: "Na Tailândia, pôr em dúvida a autenticidade do duelo já levou a acusações de lesa-majestade: o intelectual Sulak Sivaraksa foi acusado por isso em 2014." },
        { note: "As fontes: as crônicas tailandesas conservadas são de 1681 em diante (Luang Prasoet). Os relatos mais próximos dos fatos são de estrangeiros, como Pimenta (1602) e Bocarro (início do século XVII), que ouviram falar da batalha. As crônicas birmanesas são do século XIX." }
      ]}
    ]
  },

  maymyo: {
    war: "Guerra sino-birmanesa (1765–1769)",
    hook: "O exército manchu que parecia invencível foi cercado numa floresta, longe de casa, e quase desapareceu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século XVIII, o Império [[qing]], dos [[manchus]], era o maior Estado da Ásia. Do outro lado da fronteira de Yunnan ficava a Birmânia da [[dinastia konbaung]], que crescia depressa e tinha acabado de tomar o reino de Ayutthaya, em abril de 1767. Os dois impérios disputavam os [[príncipes xãs|sawbwa xan]] da fronteira e o comércio da região.",
        "Entre 1765 e 1769, o imperador Qianlong mandou quatro invasões. As duas primeiras, feitas com tropas de fronteira de Yunnan, fracassaram. Para a terceira, ele mandou os soldados mais bem treinados do império, em boa parte das [[Oito Estandartes|oito estandartes]] manchus.",
        { h: "O caminho até Maymyo" },
        { timeline: [
          ["Novembro de 1767", "O general Ming Rui invade a Birmânia com cerca de 50.000 homens (outra contagem diz 70.000)."],
          ["Dezembro de 1767", "Os qing vencem os birmaneses no desfiladeiro de Goteik."],
          ["Início de 1768", "Ming Rui chega perto de Ava, mas o exército do norte volta para Yunnan e as tropas birmanesas voltam do Sião."],
          ["Março de 1768", "Sem suprimentos, Ming Rui recua e é alcançado perto de Maymyo."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ming Rui" },
        "General manchu enviado por Qianlong. O imperador esperava uma vitória fácil. Vencera os birmaneses no desfiladeiro de Goteik, mas avançou mais fundo do que sua linha de abastecimento aguentava.",
        { h: "Maha Thiha Thura" },
        "Veterano da guerra contra o Sião. Foi dado o comando geral e levou o grosso do exército pelas montanhas para chegar atrás dos qing. Mais tarde, em 1769, impôs aos generais chineses os termos do acordo de paz, sem avisar o rei.",
        { h: "Maha Sithu" },
        "Comandou a força menor, que enfrentou os qing de frente e depois os desgastou. Em vez de recuar quando foi empurrado, retirou arqueiros e mosqueteiros para as matas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças, e uma advertência" },
        "Os números não se encaixam. Para a invasão inteira, as contagens dão cerca de 50.000 homens; para o exército principal, 15.000 ou 30.000, conforme a passagem. Na batalha, a versão mais citada dá 30.000 aos qing e 10.000 de infantaria e 2.000 de cavalaria aos birmaneses. As perdas qing somadas (20.000 mortos, feridos ou executados, 5.000 que escaparam e 2.500 prisioneiros) também não fecham com os 30.000.",
        { note: "O relato detalhado vem de obras modernas (Harvey, 1925; Hall, 1960; Dai Yingcong, 2004) que usam fontes birmanesas e chinesas. As perdas birmanesas são descritas só como 'pequenas', sem número." },
        { h: "O terreno" },
        "Região de matas e colinas ao redor de Maymyo, uns 80 km a nordeste de Ava. Calor, mato fechado e doença pesaram contra um exército vindo do norte.",
        { h: "O cerco numa floresta" },
        "A [[linha de suprimento]] qing, que ia de Hsenwi até perto de Ava, foi atacada por guerrilheiros e, em seguida, cortada quando veteranos birmaneses retomaram Hsenwi. Com fome e doenças, Ming Rui desistiu de tomar Ava e começou a recuar em direção à China, em março de 1768.",
        "Maha Thiha Thura, com cerca de 10.000 de infantaria e 2.000 de cavalaria, o seguiu. Dividiu as forças: Maha Sithu, com a menor, enfrentou os qing de frente; ele próprio levou a maior pelas montanhas, para chegar atrás deles.",
        "Os qing, em maior número, empurraram Maha Sithu para trás. Em vez de recuar mais, ele pôs arqueiros e mosqueteiros nas matas, que atacavam os flancos e emboscavam quem saía para procurar comida.",
        "Enquanto Ming Rui lidava com Maha Sithu, Maha Thiha Thura chegou à retaguarda e fechou o cerco. Durante três dias, os birmaneses desgastaram o exército qing, maior, mas faminto e doente.",
        "Os qing tentaram romper o cerco pelo lado de Maha Sithu, que segurou a linha. Presos entre a infantaria, os arqueiros e a carga de Maha Thiha Thura pela retaguarda, foram destruídos. Cerca de 2.500 foram capturados, e alguns escaparam; as contagens variam.",
        { note: "Por que não há diagrama: as fontes dão a sequência geral (ataque de frente, assédio nas matas, cerco pela retaguarda), mas não dizem onde ficavam as unidades nem como o terreno era. Desenhar posições seria inventar." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Quase todo o exército foi morto, ferido ou executado. A versão mais citada diz que Ming Rui, ferido, cortou a [[trança manchu]], mandou-a ao imperador como prova de lealdade e se enforcou; a corte anunciou sua morte em 14 de abril de 1768. Outras fontes o dão como morto em combate, e as obras modernas trazem as duas versões sem resolver.",
        "O imperador esperava uma vitória fácil e se chocou com a derrota. Uma quarta invasão, sob o grande conselheiro Fuheng, em 1769, também fracassou na fronteira.",
        { h: "Por que importa" },
        "Maha Thiha Thura sabia que outra aniquilação só endureceria a China, e que as perdas birmanesas, pequenas em números absolutos, pesavam numa população menor. Forçou os generais qing a aceitar um acordo, sem avisar o rei, e supervisionou a retirada para Yunnan. O acordo é conhecido como Convenção de Kaungton, de dezembro de 1769; a data varia entre 13 e 22 de dezembro, conforme a fonte. O imperador Qianlong rejeitou a leitura que os generais fizeram dele.",
        "Para os birmaneses, foi uma das grandes vitórias da sua história. Para os Qing, foi um desastre pesado nas campanhas de fronteira do século XVIII.",
        { h: "Curiosidades e controvérsias" },
        { note: "A frase mais vívida da batalha, de Harvey, diz que os soldados birmaneses mal conseguiam segurar as espadas, de tanto sangue inimigo nos cabos. Pode ser retórica, e não um documento." },
        { note: "Nas fontes chinesas, a batalha aparece sob o nome de Xiaomengyu. O relato do lado chinês é mais difícil de comparar com o birmanês e depende das análises modernas, como a de Dai Yingcong." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  naungyo: {
    terrain: [
      { t: "sea", x: -8, y: 29, w: 116, h: 11, l: "Rio (local exato desconhecido)" },
      { t: "note", x: 90, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "tL", s: "a", k: "cav", w: 10, h: 5, l: "Ala esquerda (Bayathingyan)" },
      { id: "tC", s: "a", k: "ele", w: 12, h: 5, l: "Bayinnaung, no elefante Swe La Man" },
      { id: "tR", s: "a", k: "cav", w: 10, h: 5, l: "Ala direita (Taw Maing Ye)" },
      { id: "tRaft", s: "a", k: "ship", w: 14, h: 3, l: "Balsas improvisadas" },
      { id: "hMain", s: "b", k: "inf", w: 26, h: 6, l: "Exército de Binnya Dala" },
      { id: "hEle", s: "b", k: "ele", w: 12, h: 5, l: "Minye Aung Naing, no elefante" },
      { id: "hL", s: "b", k: "inf", w: 16, h: 5, l: "Divisão de Hanthawaddy" },
      { id: "hR", s: "b", k: "inf", w: 16, h: 5, l: "Divisão de Hanthawaddy" }
    ],
    steps: [
      { t: "Hanthawaddy espera do outro lado do rio, com um exército maior e com todos os barcos. A vanguarda de Toungoo para na margem sul. Os batedores avisam que o inimigo é muito superior.",
        p: { tL: [38, 62], tC: [50, 62], tR: [62, 62], tRaft: [50, 69], hMain: [50, 17], hEle: [50, 9], hL: [26, 14], hR: [74, 14] } },
      { t: "Bayinnaung decide atacar apesar do conselho dos oficiais. Manda fazer balsas e as põe na água.",
        p: { tRaft: [50, 47], tL: [38, 56], tC: [50, 56], tR: [62, 56] } },
      { t: "Chega uma ordem do rei Tabinshwehti para não lutar. Segundo a crônica, Bayinnaung responde que o inimigo já está derrotado, e a travessia continua.",
        p: { tRaft: [50, 34], tL: [38, 48], tC: [50, 48], tR: [62, 48] } },
      { t: "Os homens chegam à outra margem. Bayinnaung manda destruir as balsas: ninguém poderá recuar.",
        p: { tL: [38, 26], tC: [50, 26], tR: [62, 26] }, x: ["tRaft"] },
      { t: "Três colunas se formam: Bayathingyan à esquerda, Taw Maing Ye à direita e Bayinnaung no centro, sobre o elefante.",
        p: { tL: [26, 27], tC: [50, 27], tR: [74, 27] } },
      { t: "As colunas avançam juntas contra o exército de Hanthawaddy.",
        p: { tL: [32, 21], tC: [50, 23], tR: [68, 21] } },
      { t: "Bayinnaung carrega contra Binnya Dala, que perde a coragem e foge a cavalo. Minye Aung Naing morre no elefante.",
        p: { tL: [34, 18], tC: [50, 17], tR: [66, 18], hMain: [50, 8] }, x: ["hEle"] },
      { t: "Sem comando, o exército de Hanthawaddy se parte em campos desordenados, segundo a crônica quatro.",
        p: { hMain: [48, 5], hL: [20, 9], hR: [80, 9], tL: [32, 13], tC: [50, 13], tR: [68, 13] } },
      { t: "Soldados fogem ou se rendem aos montes. Tabinshwehti chega no dia seguinte e encontra a vitória feita.",
        p: { hMain: [48, 2], hL: [12, 5], hR: [88, 5] }, x: ["hMain", "hL", "hR"] }
    ]
  },

  kunyang: {
    terrain: [
      { t: "sea", x: 8, y: -2, w: 8, h: 76, l: "Rio a oeste" },
      { t: "note", x: 90, y: 6, l: "Norte ↑" },
      { t: "note", x: 86, y: 72, l: "Dingling e Yanxian (reforços)" }
    ],
    units: [
      { id: "lCity", s: "a", k: "camp", w: 14, h: 8, l: "Kunyang (≈ 9.000 defensores)" },
      { id: "lRider", s: "a", k: "cav", w: 5, h: 3, l: "Liu Xiu e 13 cavaleiros" },
      { id: "lRelief", s: "a", k: "inf", w: 12, h: 4, l: "Reforço (≈ 10.000)" },
      { id: "lVan", s: "a", k: "cav", w: 9, h: 4, l: "Vanguarda (≈ 1.000)" },
      { id: "lElite", s: "a", k: "inf", w: 10, h: 3, l: "Liu Xiu e 3.000 voluntários" },
      { id: "lGar", s: "a", k: "inf", w: 9, h: 3, l: "Guarnição" },
      { id: "xN", s: "b", k: "inf", w: 42, h: 6, l: "Cerco: lado norte" },
      { id: "xS", s: "b", k: "inf", w: 42, h: 5, l: "Cerco: lado sul" },
      { id: "xE", s: "b", k: "inf", w: 6, h: 20, l: "Cerco: lado leste" },
      { id: "xHQ", s: "b", k: "camp", w: 14, h: 6, l: "Quartel de Wang Yi" },
      { id: "xWang", s: "b", k: "inf", w: 14, h: 5, l: "Wang Xun (≈ 10.000)" }
    ],
    steps: [
      { t: "O exército Xin chega pelo norte e cerca Kunyang. Dentro, cerca de 9.000 rebeldes discutem se fogem ou resistem.",
        p: { lCity: [50, 38], lRider: [50, 43], lGar: [50, 35], xN: [50, 24], xS: [50, 54], xE: [72, 39], xHQ: [30, 18], xWang: [66, 14], lRelief: [88, 66], lVan: [74, 66], lElite: [60, 66] } },
      { t: "Liu Xiu convence os chefes a ficar. À noite, sai da cidade com treze cavaleiros para buscar tropas em Dingling e Yanxian.",
        p: { lRider: [84, 60] } },
      { t: "O cerco aperta, com torres e túneis sob as muralhas. Wang Yi anuncia que vai massacrar a cidade. Os defensores resistem.",
        p: { xN: [50, 28], xS: [50, 50], xE: [68, 39] } },
      { t: "Liu Xiu volta com cerca de 10.000 homens. O moral dos Xin cai, e o dos defensores sobe.",
        p: { lRelief: [66, 62], lVan: [58, 60], lElite: [48, 64] }, x: ["lRider"] },
      { t: "Liu Xiu avança com cerca de mil homens e ataca várias vezes. Segundo as crônicas, mata mais de mil inimigos.",
        p: { lVan: [58, 56], lRelief: [66, 63] } },
      { t: "Com 3.000 voluntários, Liu Xiu atravessa o rio a oeste da cidade e ataca o quartel de Wang Yi.",
        p: { lElite: [22, 26] } },
      { t: "Wang Yi manda os campos ficarem parados e envia Wang Xun com cerca de 10.000 homens. Os outros comandantes Xin hesitam em apoiá-lo.",
        p: { lElite: [28, 24], xWang: [44, 24] } },
      { t: "A linha de Wang Xun entra em desordem. Liu Xiu aproveita o impulso e o mata.",
        p: { lElite: [36, 24], xWang: [46, 24] }, x: ["xWang"] },
      { t: "A guarnição sai de Kunyang e ataca. O exército Xin desaba, e uma tempestade faz o rio subir: muitos fugitivos se afogam. Wang Yi escapa com poucos milhares.",
        p: { lGar: [50, 30], xN: [50, 12], xS: [50, 62], xE: [90, 39], xHQ: [30, 8] }, x: ["xN", "xS", "xE", "xHQ"] }
    ]
  }
});
