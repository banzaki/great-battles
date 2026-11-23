// In-depth battles, batch at: badr, uhud, khandaq, qadisiyya, nahavand (early Islamic pack, part 1).
// Checked against the English, French, Italian and Portuguese Wikipedia articles on Badr, Uhud, the Trench,
// al-Qadisiyyah and Nahavand, the Wikipedia articles on the Muslim conquest of Persia and on al-Nu'man ibn Muqrin,
// Britannica on al-Qadisiyyah, and the works those pages cite (Ibn Ishaq via Ibn Hisham, al-Tabari, al-Baladhuri,
// Watt, Robinson, Kister, Kennedy, Pourshariati, Crawford). Every number from the Arabic chronicles is marked as traditional.
// No diagram for Nahavand: the two surviving accounts of the moves disagree and neither gives the deployment.

Object.assign(GLOSSARY, {
  "coraixitas": "A tribo dominante de Meca, dona do santuário da Caaba e das caravanas que ligavam o Iêmen à Síria. Maomé nasceu entre eles, mas muitos coraixitas se opuseram a ele.",
  "muhajirun": "'Os emigrantes': os muçulmanos de Meca que se mudaram para Medina com Maomé em 622 e deixaram tudo para trás.",
  "ansar": "'Os auxiliares': os moradores de Medina, das tribos Aws e Khazraj, que acolheram Maomé e os emigrantes e se juntaram à comunidade muçulmana.",
  "sira": "Biografia de Maomé, escrita pelos muçulmanos nas gerações seguintes. A mais antiga que sobreviveu é a de Ibn Ishaq, de cerca de 120 a 130 anos depois da morte do profeta, e só a conhecemos pela versão de Ibn Hisham.",
  "hégira": "A mudança de Maomé e dos primeiros muçulmanos de Meca para Medina, em 622. Dela se conta o calendário islâmico: 'ano 2 da Hégira' é o segundo ano depois da mudança.",
  "caravana": "Grupo de camelos e comerciantes que atravessava o deserto junto, por segurança. As caravanas de Meca eram a fonte da riqueza da cidade.",
  "duelo de campeões": "Combate entre poucos guerreiros escolhidos, diante dos dois exércitos, antes da luta geral. Era um costume árabe da época, e as crônicas o descrevem em Badr, Uhud e Qadisiyyah.",
  "alcorão": "O livro sagrado do Islã. Contém referências a Badr, a Uhud e à Trincheira, mas não conta as batalhas passo a passo.",
  "banu qurayza": "Uma das tribos judaicas de Medina. Tinha um pacto com Maomé e ficou neutra até o cerco de 627.",
  "sassânidas": "A dinastia persa que governou o Irã e o Iraque de 224 a 651 e disputou o Oriente Médio com o Império Bizantino durante séculos.",
  "ctesifonte": "A capital dos sassânidas, no Iraque, junto ao rio Tigre, perto da atual Bagdá. Os árabes a tomaram em março de 637.",
  "derafsh-e kaveyan": "O estandarte real dos persas, uma bandeira de couro coberta de joias. Era levado à frente do exército como símbolo do império.",
  "hamadã": "Cidade do planalto iraniano, antiga capital dos medos, no caminho entre o Iraque e o centro do Irã. Em árabe, Hamadhan."
});

Object.assign(DEEP, {
  badr: {
    war: "Guerra entre Medina e Meca (624–630)",
    hook: "Uns 300 homens saíram para assaltar uma caravana e acabaram vencendo um exército mais de três vezes maior.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No início do século VII, Meca era a cidade mais rica do oeste da Arábia. Vivia do santuário da Caaba e das [[caravanas|caravana]] que levavam mercadorias do Iêmen à Síria, e quem mandava na cidade eram os [[coraixitas]]. Foi ali que nasceu Maomé, que passou a pregar uma só divindade e fez muitos inimigos entre os poderosos da própria tribo.",
        "Em 622, Maomé e seus seguidores se mudaram para Medina, a mais de 300 quilômetros ao norte. É a [[hégira]]. Os emigrantes ([[muhajirun]]) tinham deixado casas e bens em Meca, e os moradores de Medina ([[ansar]]) os receberam. Para uma comunidade pobre e sem terra, atacar as caravanas de Meca era ao mesmo tempo uma resposta e um meio de sobrevivência.",
        { h: "O caminho até Badr" },
        { timeline: [
          ["622", "Maomé e os primeiros muçulmanos se mudam de Meca para Medina."],
          ["início de 624", "Os muçulmanos saem de Medina para interceptar uma grande caravana coraixita que volta da Síria."],
          ["início de 624", "Abu Sufyan, chefe da caravana, muda de rota e pede ajuda a Meca. Um exército coraixita sai para defendê-la."],
          ["13 mar 624", "Os dois lados se encontram junto aos poços de Badr."]
        ]},
        "Segundo a tradição, o chefe da caravana, Abu Sufyan, soube do plano muçulmano e mandou avisar Meca. O historiador W. Montgomery Watt observa um problema nessa versão: o exército coraixita levou cerca de uma semana para chegar a Badr, então o pedido de socorro precisa ter partido antes de os muçulmanos se mobilizarem. Seja como for, quando a caravana já estava a salvo, o comandante coraixita decidiu seguir até Badr assim mesmo."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Maomé, comandante dos muçulmanos" },
        "Em Medina, Maomé era ao mesmo tempo o profeta de uma religião nova e o chefe político e militar da comunidade. Em Badr, os relatos o mostram aconselhando-se com os companheiros antes de decidir, e rezando com fervor durante a luta.",
        { h: "Amr ibn Hisham, o Abu Jahl" },
        "Comandava o exército de Meca. Os muçulmanos o chamam de Abu Jahl, 'pai da ignorância'. Quando alguns grupos coraixitas voltaram para casa no caminho, ele insistiu em continuar: queria mostrar que Meca não se intimidava com as incursões. Segundo a tradição, morreu na batalha.",
        { h: "Os outros nomes" },
        "Do lado de Medina, Hamza e Ali, parentes de Maomé, lutaram nos duelos; Zubayr comandou a direita e Miqdad a esquerda; Abu Bakr e Umar aconselharam o profeta; Sa'd ibn Mu'adh falou pelos ansar; e Hubab ibn al-Mundhir sugeriu o poço onde a tropa acampou. Do lado de Meca, os três homens que abriram os duelos eram parentes próximos: Utba, seu irmão Shayba e o filho de Utba, al-Walid. Abu Sufyan, o chefe da caravana, ficou longe da luta."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A tradição conta 313 muçulmanos (as fontes vão de 313 a 317), sendo 82 emigrantes e 231 de Medina, com apenas 2 cavalos e 70 camelos. Do lado de Meca, os números variam: de cerca de 950 a 1.300 homens, com uns 100 cavalos. Todos esses números vêm de obras escritas bem depois da batalha e devem ser lidos como tradicionais, não como contagens.",
        { h: "O terreno" },
        "Badr fica numa depressão do deserto, com poços de água. Duas dunas, a mais próxima e a mais distante, fechavam o lado leste, e o monte Jabal al-Asfal o lado oeste. A estrada principal para Medina passava entre as dunas, mas os muçulmanos vieram pelo norte. Os coraixitas acamparam no sudeste, perto da estrada de Meca.",
        { h: "Os poços" },
        "Por conselho de Hubab ibn al-Mundhir, os muçulmanos ocuparam o poço mais próximo do centro da margem oeste, o mais perto dos inimigos, e destruíram os outros. Os coraixitas ficaram sem acesso fácil à água. Na noite de 11 de março caiu chuva, que, segundo a tradição, encharcou o terreno em declive e atrapalhou os coraixitas.",
        { h: "Antes do combate" },
        "Os muçulmanos capturaram dois carregadores de água de Meca, que revelaram que o exército inteiro estava ali. Alguns muçulmanos bateram nos prisioneiros, e Maomé depois condenou isso. Do lado de Meca, um batedor, Umayr ibn Wahb, avisou que os muçulmanos eram uns 300, mas decididos. Houve dissenso no campo coraixita, e Amr ibn Hisham o superou.",
        { h: "A batalha em cinco movimentos" },
        { formation: true },
        "Primeiro, antes da luta geral veio o costume árabe do [[duelo de campeões]]. Hamza matou al-Aswad ibn Abd al-Asad. Depois saíram Utba, Shayba e al-Walid, e os coraixitas só aceitaram lutar contra homens da própria cidade, os emigrantes. Ali matou al-Walid, Hamza matou Shayba, e Ubayda ibn al-Harith foi ferido de morte. Houve mais alguns duelos, em sua maioria vencidos pelos muçulmanos.",
        "Segundo, os dois lados trocaram flechas. Os muçulmanos formaram linhas, com Zubayr na direita e Miqdad na esquerda, e esperaram a carga.",
        "Terceiro, os coraixitas atacaram. Pelos relatos, Maomé orou intensamente, até Abu Bakr o amparar.",
        "Quarto, Maomé atirou um punhado de pedrinhas na direção dos inimigos e mandou o contra-ataque. A linha coraixita se rompeu em pouco tempo, e a luta toda durou algumas horas.",
        "Quinto, os coraixitas fugiram, e os muçulmanos mataram ou capturaram os que alcançaram. Entre os prisioneiros e mortos havia vários chefes de Meca. Os relatos discordam sobre como morreu cada um deles."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Morreram 14 muçulmanos (6 emigrantes e 8 de Medina), contando Ubayda, que morreu depois dos ferimentos. Do lado de Meca, a estimativa dos estudiosos é de cerca de 70 mortos e 70 prisioneiros. Dois prisioneiros, Nadr ibn al-Harith e Uqba ibn Abi Mu'ayt, foram mortos; as fontes divergem se em combate ou executados depois.",
        "Os prisioneiros seguiram para Medina. Abu Bakr aconselhou aceitar [[resgate]], e Umar queria executá-los; Maomé aceitou a opinião de Abu Bakr. Segundo a tradição, os que sabiam ler e escrever podiam ser libertados ensinando dez pessoas.",
        { h: "Por que importa" },
        "A vitória fortaleceu Maomé em Medina e fez tribos vizinhas se aliarem a ele. Dentro de Medina, enfraqueceu um rival, Abd Allah ibn Ubayy, e mais tarde os Banu Qaynuqa foram expulsos. Em Meca, a morte de tantos nobres deixou Abu Sufyan como principal líder, e foi ele quem, anos depois, ajudou a negociar a rendição da cidade. Para os muçulmanos, Badr é até hoje o exemplo de uma vitória dada por Deus a poucos contra muitos.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: tudo o que sabemos de Badr vem da tradição islâmica, registrada a partir do século VIII. Alguns historiadores acham que fora dela há pouca coisa para confirmar os detalhes; a história geral (uma caravana, um combate perto de Badr, uma vitória de Medina) é aceita, mas o dia a dia da luta deve ser lido com cuidado." },
        { note: "A explicação da vitória: a tradição e o [[Alcorão|alcorão]] atribuem o resultado também à ajuda divina, com anjos ao lado dos muçulmanos. Quem analisa a batalha como história militar aponta fatores humanos: o controle dos poços, a disciplina de uma tropa menor e muito motivada, e a moral e a divisão do lado de Meca." },
        { note: "A data: 17 do Ramadã (13 de março de 624) é a data tradicional. Watt anota que outras fontes indicam os dias 15, 19 ou 21." },
        { note: "Os números: 313 muçulmanos é o número tradicional, repetido nas fontes. Para Meca, as fontes variam entre menos de mil e mais de 1.300." }
      ]}
    ]
  },

  uhud: {
    war: "Guerra entre Medina e Meca (624–630)",
    hook: "Os muçulmanos estavam ganhando, até cinquenta arqueiros descerem de uma colina.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Badr, os muçulmanos de Medina continuaram atacando as caravanas de Meca. Os coraixitas perderam muitos chefes, e quem passou a mandar foi Abu Sufyan, que queria vingança e queria também proteger o comércio da cidade.",
        "Meca reuniu cerca de 3.000 homens, com tribos aliadas, e marchou para Medina. Segundo a tradição, 700 deles usavam [[cota de malha]] e havia cerca de 100 cavaleiros. Todos esses números são das crônicas.",
        { h: "O caminho até Uhud" },
        { timeline: [
          ["624", "Vitória muçulmana em Badr. Seguem-se mais ataques a caravanas."],
          ["mar 625", "Abu Sufyan marcha para Medina com cerca de 3.000 homens."],
          ["mar 625", "Cerca de 1.000 muçulmanos saem de Medina. Um terço volta atrás antes da luta, liderado por Abd Allah ibn Ubayy."],
          ["23 mar 625", "A batalha acontece na encosta do monte Uhud, ao norte de Medina."]
        ]},
        "Os muçulmanos saíram de Medina e ficaram na encosta do monte Uhud, de modo que a montanha lhes protegesse as costas. Segundo a tradição, quando Abd Allah ibn Ubayy levou consigo os cerca de 300 homens que o seguiam, sobraram uns 700."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Maomé" },
        "Comandou os muçulmanos pessoalmente. Antes da luta, posicionou os homens na encosta e deu uma ordem especial a um pequeno grupo: ninguém devia deixar o posto, quer a batalha corresse bem, quer mal.",
        { h: "Abu Sufyan e Khalid ibn al-Walid" },
        "Abu Sufyan comandava o centro coraixita. Khalid ibn al-Walid, a direita, era um cavaleiro que mais tarde se tornaria um dos grandes generais da conquista árabe. Ikrima ibn Amr comandava a esquerda coraixita, e Amr ibn al-As a cavalaria.",
        { h: "Os outros nomes" },
        "O comandante dos arqueiros muçulmanos era Abd Allah ibn Jubayr, segundo um hadith do Bukhari. Entre os muçulmanos, Hamza, tio de Maomé, e Ali lutaram na frente; Umar reorganizou as tropas depois. Do lado de Meca, Talha ibn Abi Talha carregava o estandarte e morreu em duelo com Ali. Wahshi ibn Harb matou Hamza."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os muçulmanos eram cerca de 700 depois da saída do grupo de Abd Allah ibn Ubayy: segundo a tradição, 50 arqueiros, 4 cavaleiros e o resto infantaria, e só uns 100 de [[cota de malha]]. Do lado de Meca, cerca de 3.000, dos quais 700 de cota de malha e cerca de 100 cavaleiros. As crônicas não batem em todos os números.",
        { h: "O terreno" },
        "A batalha foi num vale perto do monte Uhud, ao norte de Medina. Os muçulmanos se posicionaram nas encostas inferiores, de frente para a cidade, com a montanha atrás. A oeste do acampamento havia uma colina rochosa, que o relato chama de Jabal al-Rumat: os 50 arqueiros foram postos ali para proteger o flanco e a retaguarda de uma carga de cavalaria.",
        { h: "A batalha em sete movimentos" },
        { formation: true },
        "Primeiro, a cavalaria de Meca, liderada por Abu Amir, tentou uma carga e foi repelida por uma saraivada de pedras.",
        "Segundo, vieram os duelos pelo estandarte. Talha ibn Abi Talha, que o carregava, foi morto por Ali em duelo. Seus irmãos e filhos pegaram a bandeira, um depois do outro, e foram mortos um a um.",
        "Terceiro, os muçulmanos avançaram pelas linhas inimigas e pareciam vencer. Os coraixitas recuaram até seu acampamento.",
        "Quarto, e decisivo: a maior parte dos arqueiros desceu da colina para recolher o butim do acampamento inimigo, apesar da ordem de Maomé.",
        "Quinto, Khalid ibn al-Walid percebeu. Sua cavalaria deu a volta, dominou os poucos arqueiros que tinham ficado e atacou o flanco e a retaguarda muçulmanos. O que parecia vitória virou confusão.",
        "Sexto, Hamza foi morto. Correu o boato de que Maomé também tinha morrido; na verdade ele estava ferido no rosto por pedras. Umar reuniu uma parte da tropa e contra-atacou, e os muçulmanos subiram as encostas, onde a cavalaria coraixita não conseguia chegar.",
        "Sétimo, Abu Sufyan gritou um desafio do pé da montanha e trocou palavras com Umar. Em seguida, seguiu para Meca sem atacar a encosta nem entrar em Medina."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Morreram de 62 a 75 muçulmanos, segundo as fontes modernas; o historiador Ibn al-Athir lista 85, dos quais 46 tinham lutado em Badr. Do lado de Meca, de 22 a 35. Segundo a tradição, Hind, mulher de Abu Sufyan, e suas companheiras mutilaram corpos de muçulmanos, entre eles o de Hamza.",
        "Os coraixitas acamparam em Hamra al-Asad e depois partiram, depois de uma demonstração de força dos muçulmanos. O [[Alcorão|alcorão]] (3:152) atribui o revés à desobediência e ao desejo de butim, e o trata como uma prova.",
        { h: "Por que importa" },
        "Quem venceu? Os historiadores divergem. Lapidus e Karsh falam em vitória de Meca; Robinson, na Enciclopédia do Islã, vê uma derrota clara dos muçulmanos. Watt lembra que Meca não alcançou o objetivo de destruir Maomé e seus seguidores, e que a retirada rápida revela fraqueza. Uhud também mostrou a Khalid ibn al-Walid, que depois lutaria ao lado dos muçulmanos, como se vence uma batalha pela cavalaria. Dois anos depois, Meca voltou contra Medina, na Batalha da Trincheira.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: os detalhes vêm das obras de Ibn Ishaq, al-Waqidi e Ibn Sa'd, todas escritas bem depois. Robinson considera a sequência geral razoavelmente autêntica, mas duvida de detalhes como a extensão exata da derrota." },
        { note: "A data: 23 de março de 625 (7 do Shawwal do ano 3 da Hégira) é a data tradicional da batalha." },
        { note: "Os números: 3.000 coraixitas e 700 a 1.000 muçulmanos são os números tradicionais. Não há contagem independente." }
      ]}
    ]
  },

  khandaq: {
    war: "Guerra entre Medina e Meca (624–630)",
    hook: "Um exército muito maior que o de Medina foi barrado por uma vala cavada em seis dias.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 627, dois anos depois de Uhud, Meca ainda não tinha conseguido eliminar os muçulmanos, e o comércio coraixita sofria com as incursões. Segundo a tradição, os Banu Nadir, tribo judaica expulsa de Medina depois de um cerco, procuraram aliados contra Maomé. Entre eles estava Huyayy ibn Akhtab.",
        "Reuniu-se então uma confederação: os coraixitas de Meca, tribos aliadas como os Ghatafan e outras. Pelas crônicas, eram de 7.500 a 10.000 homens, com cerca de 600 cavaleiros. Watt calcula 7.500; outros autores falam em mais de 12.000.",
        { h: "O caminho até a trincheira" },
        { timeline: [
          ["627", "Os confederados saem de Meca e marcham para Medina, sob o comando de Abu Sufyan."],
          ["seis dias", "Os muçulmanos cavam a trincheira, com o próprio Maomé trabalhando junto."],
          ["cerca de 20 noites", "Os confederados cercam a cidade e não conseguem atravessar a vala."],
          ["última noite", "Uma tempestade derruba as tendas dos atacantes, que partem durante a noite."]
        ]},
        "A data é incerta. A tradição situa o cerco entre o mês de Shawwal e o de Dhu'l-Qa'da do ano 5 da Hégira, o que corresponde a março e abril de 627; alguns autores indicam janeiro. As fontes falam em cerca de 20 noites de cerco, além dos seis dias de escavação."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Maomé" },
        "Comandou a defesa a partir de um posto na colina de Sala'. Cerca de 3.000 homens de Medina, quase todos os maiores de 14 anos, defenderam a cidade, menos os Banu Qurayza.",
        { h: "Salman, o Persa" },
        "Um muçulmano de origem persa, a quem a tradição atribui a ideia de cavar uma trincheira, uma técnica pouco usada na Arábia. O historiador Irfan Shahid sugere que a ideia veio de práticas persas, talvez por intermédio dos ghassânidas.",
        { h: "Abu Sufyan e os outros" },
        "Abu Sufyan comandava a confederação, com Ikrima ibn Amr e, pelos Ghatafan, Uyayna ibn Hisn. Huyayy ibn Akhtab convenceu os Banu Qurayza a romper a neutralidade. Do lado de Medina, Sa'd ibn Mu'adh, chefe dos Aws, que depois morreria dos ferimentos, estava entre os defensores. Nu'aym ibn Mas'ud, um líder respeitado que tinha se convertido em segredo, teve um papel curioso no fim do cerco."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado de Medina, cerca de 3.000. Do lado dos confederados, de 7.500 a 10.000 segundo a tradição, e um número de cavaleiros em torno de 600. Estes são números das crônicas, com a divergência dos estudiosos mencionada acima.",
        { h: "O terreno e a trincheira" },
        "Medina é cercada de rochas, casas e palmeirais por onde um exército grande e a cavalaria passam mal. A trincheira foi cavada só onde faltava barreira natural, e o trecho contínuo mais longo ficava no norte. As fontes não dão a extensão. Todo muçulmano capaz trabalhou nela, o próprio Maomé inclusive, e levou cerca de seis dias.",
        { h: "O cerco em cinco movimentos" },
        { formation: true },
        "Primeiro, os confederados chegaram do norte e encontraram a vala pronta. Cavalos e homens não conseguiam atravessar, e o exército acampou do outro lado.",
        "Segundo, durante duas a três semanas, o cerco se resumiu a trocas de flechas e insultos. A comida ficou curta dos dois lados, e os cavalos viraram um problema para os atacantes. Segundo a tradição, Amr ibn Abd Wudd e alguns cavaleiros atravessaram num ponto estreito; Amr, famoso como guerreiro, foi morto por Ali. As baixas foram pequenas: de 5 a 6 muçulmanos e 3 atacantes.",
        "Terceiro, Huyayy ibn Akhtab convenceu os Banu Qurayza a romper o pacto. Maomé soube e mandou três homens de confiança verificar; a mensagem de volta usava um código combinado, 'Adal e Qarah'. A notícia de um possível ataque pela retaguarda desmoralizou Medina, e relatos dizem que as orações diárias foram negligenciadas pela primeira vez.",
        "Quarto, Nu'aym ibn Mas'ud, um respeitado convertido em segredo, foi aos Qurayza e avisou que os confederados os abandonariam; sugeriu que exigissem [[reféns|refém]] dos chefes. Foi depois a Abu Sufyan e disse que os Qurayza pretendiam entregar esses reféns a Maomé. Os dois lados passaram a desconfiar um do outro.",
        "Quinto, uma tempestade de vento e chuva apagou as fogueiras e rasgou as tendas dos atacantes, enquanto o acampamento muçulmano ficou abrigado. Os confederados desfizeram o acampamento e partiram durante a noite."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os confederados não tomaram a cidade e perderam prestígio. Os relatos destacam três causas: a trincheira, a desconfiança entre os aliados e a tempestade. Meca perdeu o comércio com a Síria, e Watt argumenta que isso tornou a conversão ao Islã mais prudente para alguns coraixitas.",
        "Depois da partida dos confederados, os muçulmanos cercaram os [[Banu Qurayza|banu qurayza]] por 25 dias. A tribo se rendeu sem condições. Sa'd ibn Mu'adh, escolhido a pedido dos Aws, decidiu que os homens em idade de lutar fossem mortos e as mulheres e crianças escravizadas, e Maomé aprovou. Ibn Ishaq fala em 400 a 900 homens executados.",
        { h: "Por que importa" },
        "A Trincheira mostrou que Medina podia resistir a um grande exército sem sair para o campo aberto. Foi a última grande ofensiva de Meca contra a comunidade muçulmana: a partir dali, a iniciativa passou em grande parte a Medina.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: o relato mais antigo é a [[sira]] de Ibn Ishaq, escrita de 120 a 130 anos depois da morte de Maomé e conhecida pela versão de Ibn Hisham e por al-Tabari. Os números de tropas e de baixas são estimativas, e os estudiosos divergem." },
        { note: "O destino dos Banu Qurayza: muitos estudiosos duvidam do número de executados de Ibn Ishaq, e alguns acham que só os homens de destaque foram mortos. Kister, em 1986, questionou a tradição do massacre. Nenhum hadith confiável dá o número exato." },
        { note: "A origem da ideia: Irfan Shahid sugere que a trincheira veio de uma prática persa; a tradição só diz que Salman a propôs." },
        { note: "A data: entre janeiro e abril de 627, conforme a fonte; a tradição islâmica a coloca em Shawwal do ano 5 da Hégira." }
      ]}
    ]
  },

  qadisiyya: {
    war: "Conquista muçulmana da Pérsia (633–651)",
    hook: "Quatro dias de combate, uma tempestade de areia e o fim do exército que defendia o Iraque.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Quando Maomé morreu, em 632, os árabes estavam unidos como nunca. Em poucos anos, o [[califado de Medina|califado rashidun]] derrotou os bizantinos na Síria e voltou-se para o Iraque, a província mais rica do Império [[Sassânida|sassânidas]]. O império persa estava esgotado: tinha passado décadas em guerra com Bizâncio e em disputas internas pelo trono.",
        "O califa Umar mandou Sa'd ibn Abi Waqqas com um exército. Segundo uma cronologia comum, Sa'd saiu de Medina em maio de 636 e chegou a Qadisiyya em junho. Os persas reuniram um exército sob Rostam Farrokhzad.",
        { h: "O caminho até Qadisiyya" },
        { timeline: [
          ["632", "Morre Maomé. Começam as guerras de conquista."],
          ["636", "Os árabes vencem os bizantinos em Yarmuk e voltam a atenção para o Iraque."],
          ["mai–jun 636", "Sa'd ibn Abi Waqqas sai de Medina e chega a Qadisiyya."],
          ["16–19 nov 636", "A batalha, segundo a data mais usada. As crônicas discordam."],
          ["mar 637", "Os árabes tomam Ctesifonte, a capital persa."]
        ]},
        "Qadisiyya era uma pequena cidade na margem oeste do rio Ateeq, um braço do Eufrates, a cerca de 50 quilômetros de al-Hira. Em 2024, pesquisadores das universidades de Durham e de al-Qadisiyah localizaram o provável lugar, uns 19 quilômetros ao sul da atual Cufa, com imagens de satélite espiãs desclassificadas e as descrições da antiga estrada Darb Zubaydah."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Sa'd ibn Abi Waqqas" },
        "Comandante dos árabes, um dos primeiros companheiros de Maomé. Durante a batalha estava doente, com ciática e furúnculos, e dirigiu tudo do velho palácio real de Qadisiyya. Passava as ordens por Khalid ibn Urfuta, seu adjunto, que as levava ao campo.",
        { h: "Rostam Farrokhzad" },
        "Comandante em chefe dos persas. Observava a luta de um assento elevado e à sombra, na margem oeste, atrás do centro direito, perto do estandarte real, o [[derafsh-e kaveyan]].",
        { h: "Os outros nomes" },
        "Do lado árabe, Qa'qa ibn Amr al-Tamimi, que chegou com reforços; Asim ibn Amr, à esquerda do centro; Zuhra ibn al-Hawiyya, à direita do centro; Jarir ibn Abd Allah, comandante da cavalaria da direita; Al-Ash'ath ibn Qays. Do lado persa, Hormuzan na ala direita, Jalinus no centro direito, Piruzan na retaguarda e Mihran na ala esquerda."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As crônicas contam cerca de 30.000 árabes no começo, 7.000 deles a cavalo, e uns 36.000 com os reforços da Síria. Para os persas, os números das crônicas variam muito: 50.000 a 100.000 em obras militares como as de Dupuy e Laffin, 60.000 na divisão de 45.000 de infantaria e 15.000 de cavalaria, e até 120.000 em outros relatos. Os estudos modernos que partem da logística apontam algo como 30.000 de cada lado. Os números das crônicas são provavelmente exagerados.",
        "Os persas tinham cerca de 33 elefantes, oito para cada uma das quatro divisões, numa frente de uns 4 quilômetros. A infantaria persa formava quatro divisões, com a cavalaria atrás em quatro grupos de reserva. Os árabes também se organizaram em quatro corpos, a uns 150 metros um do outro, com um regimento de cavalaria atrás de cada.",
        { h: "O terreno" },
        "Os persas acampavam na margem leste do Ateeq, ligados por uma única ponte (os barcos ficaram de reserva). Rostam mandou entupir um canal e transformá-lo em estrada, para atravessar o exército antes do amanhecer. Os árabes estavam na margem oeste, perto do palácio de Sa'd.",
        { h: "Os quatro dias" },
        { formation: true },
        "Primeiro dia, 16 de novembro, 'dia da desordem' (Yawm al-Armath). Começou com [[duelos de campeões|duelo de campeões]]. Depois os [[elefantes|elefantes de guerra]] persas carregaram contra a direita árabe e assustaram os cavalos. Asim ibn Amr mandou os arqueiros matarem os condutores, e a infantaria cortou as cinchas das selas dos elefantes, que recuaram. A luta terminou ao anoitecer sem decisão.",
        "Segundo dia, 17 de novembro. Perto do meio-dia, chegaram reforços da Síria. Qa'qa ibn Amr mandou sua vanguarda entrar em grupos pequenos, para parecer um exército enorme, o que desmoralizou os persas. Pela tradição, os árabes também vestiram camelos de modo a parecerem monstros e assustar os cavalos persas. As contraofensivas de Rostam seguraram a linha, e os dois lados voltaram aos acampamentos ao escurecer. Cerca de 5.000 veteranos de Yarmuk chegaram nesse dia, um ponto de virada, segundo os estudiosos.",
        "Terceiro dia, 18 de novembro, Yaum-ul-Amas. Rostam fez um ataque geral, com os elefantes na frente. Uma unidade de cavalaria persa tentou tomar o palácio de Sa'd e foi repelida. Sa'd mandou cegar os elefantes e cortar suas trombas; os animais, em pânico, fugiram para o rio, e ao meio-dia não restava nenhum no campo. A luta virou uma prova de resistência.",
        "Na noite seguinte, que as crônicas chamam de 'noite dos ruídos surdos' (Lailat-ul-Harir), o combate continuou sem parar, até o amanhecer.",
        "Quarto dia, 19 de novembro. Qa'qa animou seus homens, que romperam o centro persa por volta do meio-dia, mas sem conseguir desfazer o exército. Então uma tempestade de areia soprou, e Rostam foi morto. A linha persa se desfez. Jalinus assumiu o comando dos restos e conseguiu passar a maior parte do exército pela ponte; a cavalaria árabe perseguiu e matou ou prendeu os retardatários.",
        { h: "A morte de Rostam" },
        "Há quatro versões. Na primeira, homens de Qa'qa atacaram o quartel-general durante a tempestade de areia e acharam Rostam morto, com mais de cinco ferimentos. Na segunda, Hilal ibn Ullafah cortou sem querer a carga de um camelo, que caiu sobre Rostam, e depois o decapitou; os estudiosos consideram essa versão improvável. Na terceira, de al-Ya'qubi, quatro guerreiros árabes acharam o corpo. Na quarta, Sa'd o matou em combate singular, cego pela tempestade; essa, como a de al-Tabari, é considerada um acréscimo tardio."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército sassânida foi destruído. Os árabes tomaram o estandarte real, o [[derafsh-e kaveyan]], e suas joias foram cortadas e vendidas em Medina. As perdas são descritas só como pesadas; as crônicas dão números sem valor. Sa'd avisou Umar, que mandou cercar [[Ctesifonte|ctesifonte]]. A capital caiu em março de 637. Em abril, os árabes venceram em Jalula, sob Hashim ibn Utba.",
        { h: "Por que importa" },
        "Com o Iraque nas mãos, os árabes tinham uma base fértil e populosa a poucos dias das montanhas do Irã. Depois, em Nahavand, destruíram o último exército persa de campanha, e em 651 morreu Yazdegerd III, o último xá. Em pouco mais de 15 anos, um império com mais de quatro séculos desapareceu.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: a mais citada é 16 a 19 de novembro de 636. Mas as fontes discordam. Al-Tabari menciona anos diferentes (14, 15 ou 16 da Hégira, de 635 a 637); al-Baladhuri dá o final do ano 16 (637–638); Sourdel sugere março de 636 ou 637; Pourshariati prefere 635; a Britannica diz 636 ou 637." },
        { note: "As fontes: grande parte do que se conta vem de al-Tabari, que por sua vez usa muito Sayf ibn Umar, um autor que os historiadores modernos tratam com cautela por exagerar. Os nomes dos dias e as histórias de duelos devem ser lidos como tradição." },
        { note: "Os números: 30.000 árabes e 60.000 ou mais persas são das crônicas. A análise de logística moderna sugere forças bem menores, em torno de 30.000 para cada lado." }
      ]}
    ]
  },

  nahavand: {
    war: "Conquista muçulmana da Pérsia (633–651)",
    hook: "Os muçulmanos a chamaram de 'a vitória das vitórias': o último grande exército persa não existia mais.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Qadisiyya e da queda de Ctesifonte, o xá Yazdegerd III recuou para o planalto iraniano, o coração do império sassânida. Os árabes ocuparam o Iraque, mas o interior do Irã continuava persa, e no fim de 641 ou em 642 os governadores do planalto reuniram um novo exército em Nahavand, perto de [[Hamadã|hamadã]], com homens de Rei, Isfahan, Hamadã e de províncias ainda mais ao leste.",
        "O califa Umar decidiu uma invasão em grande escala. Segundo as crônicas, chegou a pensar em comandar o exército em pessoa e foi dissuadido. Escolheu al-Nu'man ibn Muqarrin, da tribo Muzayna, que era governador do distrito de Kaskar e pedira um posto de combate.",
        { h: "O caminho até Nahavand" },
        { timeline: [
          ["636–637", "Vitórias árabes em Qadisiyya e Jalula, e queda de Ctesifonte."],
          ["641 ou 642", "Os persas juntam um novo exército em Nahavand."],
          ["642", "A batalha, segundo a data mais citada (ano 21 da Hégira). Alguns autores a colocam em dezembro de 641."],
          ["651", "Yazdegerd III morre, assassinado em Merv."]
        ]},
        "A data é incerta. O ano 21 da Hégira vai de dezembro de 641 a dezembro de 642, e alguns relatos falam nos anos 19 ou 20, ou seja, 640 a 641. O ano 642 é o mais citado."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Al-Nu'man ibn Muqarrin" },
        "O comandante árabe. Segundo a tradição, antes da luta ele rezou: 'Deus, dá martírio a Nu'man junto com a vitória dos muçulmanos.' Morreu na batalha. Quando soube, Umar, segundo a tradição, cobriu o rosto com as mãos e chorou.",
        { h: "Firuzan, o general persa" },
        "Em al-Tabari, o comandante persa é Piruzan (al-Fayruzan), o Firuzan dos textos modernos; outros relatos citam Mardanshah. Boa parte do exército era formada por camponeses e aldeões, não por soldados veteranos, e muitos nobres tinham desertado antes da luta.",
        { h: "Os outros nomes" },
        "Segundo al-Tabari, Umar tinha indicado os sucessores de Nu'man para o caso de ele morrer, o primeiro deles Hudhayfa ibn al-Yaman, e o irmão de Nu'man teria coberto o corpo e mantido a bandeira erguida para a tropa não perder o ânimo. Yazdegerd III, o xá, não estava no campo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A estimativa moderna é de uns 30.000 árabes (Crawford). Para os persas, as fontes divergem muito: de 50.000 a 150.000, e as crônicas dão números ainda maiores. Esses números devem ser tratados com desconfiança: o próprio número de 150.000 é citado de um estudo sobre um império anterior, o parta.",
        { h: "O terreno" },
        "Nahavand fica no sopé das montanhas Zagros, ao sul de Hamadã, numa região de desfiladeiros e terreno acidentado. Os persas ocuparam uma posição defensiva forte, o que era incomum para um exército persa de disciplina frouxa. Os árabes não queriam atacar de frente.",
        { h: "Duas versões da batalha" },
        "Os relatos que chegaram a nós contam o combate de duas maneiras, e nenhum descreve a disposição das tropas.",
        "Na primeira versão, os cavaleiros persas perseguiram os árabes de modo desordenado, os árabes se reagruparam e cercaram os perseguidores, e os muçulmanos atacaram por todos os lados.",
        "Na segunda, mais detalhada, Nu'man usou tática em vez de sorte. Depois de dias de [[escaramuças|escaramuça]] sem resultado, os comandantes árabes concordaram numa [[retirada fingida]] para tirar os persas das defesas. O recuo foi ordenado. Os persas saíram atrás, a cavalaria de Firuzan se esticou por terreno acidentado e passagens estreitas, e os árabes deram meia-volta e contra-atacaram. Firuzan abandonou a posição para perseguir, o que os historiadores apontam como um grave erro. Os persas ficaram presos entre dois desfiladeiros e lutaram por dois dias e três noites antes de serem derrotados.",
        { h: "A morte dos comandantes" },
        "Nu'man foi morto, segundo al-Tabari cedo na luta, e Hudhayfa assumiu o comando. O exército persa se rompeu, e muitos morreram na fuga, alguns despencando num barranco no escuro. Há duas versões para Firuzan. Na primeira, morreu no corpo a corpo final. Na segunda, fugiu para Hamadã e foi alcançado numa passagem de montanha; a história mais repetida diz que a passagem estava bloqueada por uma caravana de mel, o que pode ser lenda."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército imperial sassânida quase deixou de existir. As fontes dão só 'perdas pesadas', e os números são sem valor: algumas obras falam em 20.000 persas mortos, outras em mais de 100.000, número que os próprios autores consideram exagerado. Hamadã se rendeu em seguida, em troca de condições, e os árabes tomaram Isfahan e as cidades em volta.",
        "Yazdegerd fugiu para o leste. Alguns governadores o receberam mal; o de Merv, Mahoye, se opôs a ele abertamente. Pediu ajuda a Tucaristão e à Sogdiana e mandou seu filho Peroz à corte chinesa dos Tang, sem sucesso. Foi assassinado em 651 por um moleiro de Merv. Peroz tentou restaurar o império e morreu na China.",
        { h: "Por que importa" },
        "Depois de Nahavand, não havia mais exército imperial para os persas. As províncias se fragmentaram em chefes locais, e os árabes foram tomando o Irã uma região por vez, num processo que durou cerca de uma década. Os muçulmanos a chamam de 'vitória das vitórias' (fath al-futuh).",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: os relatos usados hoje são trabalhos modernos (Crawford, Pourshariati, Kennedy), baseados em al-Tabari e al-Baladhuri, escritos mais de dois séculos depois. Os próprios historiadores reconhecem que se sabe pouco do desenrolar da batalha." },
        { note: "A data: o ano 642 é o mais citado, mas outros apontam dezembro de 641, e alguns relatos falam em 640 a 641." },
        { note: "A caravana de mel: é a história mais repetida sobre o fim de Firuzan, mas é típica das crônicas e não há como confirmá-la." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  badr: {
    terrain: [
      { t: "hill", x: 8, y: 36, rx: 7, ry: 20, l: "Jabal al-Asfal" },
      { t: "hill", x: 92, y: 36, rx: 7, ry: 18, l: "Dunas" },
      { t: "note", x: 90, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "mR", s: "a", k: "cav", w: 8, h: 5, l: "Zubayr (direita)" },
      { id: "mM", s: "a", k: "inf", w: 20, h: 5, l: "Emigrantes" },
      { id: "mA", s: "a", k: "inf", w: 22, h: 5, l: "Gente de Medina" },
      { id: "mL", s: "a", k: "cav", w: 8, h: 5, l: "Miqdad (esquerda)" },
      { id: "well", s: "a", k: "camp", w: 10, h: 5, l: "Poço" },
      { id: "qC", s: "b", k: "inf", w: 34, h: 6, l: "Coraixitas" },
      { id: "qCav", s: "b", k: "cav", w: 10, h: 5, l: "≈ 100 cavalos" },
      { id: "qCamp", s: "b", k: "camp", w: 14, h: 5, l: "Acampamento coraixita" }
    ],
    steps: [
      { t: "Os muçulmanos chegam pelo norte. Os coraixitas estão no sudeste, junto à estrada de Meca. Dunas ao leste, monte a oeste.",
        p: { mR: [30, 10], mM: [44, 8], mA: [66, 8], mL: [80, 10], well: [52, 18], qC: [50, 56], qCav: [76, 58], qCamp: [50, 66] } },
      { t: "Por conselho de Hubab ibn al-Mundhir, a tropa avança até o poço mais próximo do inimigo e destrói os outros. Os coraixitas ficam sem água fácil.",
        p: { well: [52, 26], mM: [44, 20], mA: [66, 20], mR: [30, 22], mL: [80, 22] } },
      { t: "Na noite de 11 de março, chove. Segundo a tradição, o terreno em declive fica encharcado, e isso atrapalha os coraixitas.",
        p: { qC: [50, 52] } },
      { t: "Formam-se as linhas. Zubayr fica na direita, Miqdad na esquerda, e os emigrantes e a gente de Medina no centro.",
        p: { mR: [28, 30], mM: [44, 30], mA: [68, 30], mL: [84, 30] } },
      { t: "Duelos: Ali, Hamza e Ubayda enfrentam os três nobres de Meca. Ali mata al-Walid, Hamza mata Shayba, e Ubayda é ferido de morte.",
        p: { mM: [48, 38], qC: [50, 46] } },
      { t: "Troca de flechas. Os coraixitas atacam. Maomé reza e Abu Bakr o ampara.",
        p: { qC: [50, 40], qCav: [76, 42] } },
      { t: "Maomé joga pedrinhas na direção do inimigo e manda o contra-ataque. A linha coraixita se rompe em poucas horas.",
        p: { mR: [30, 40], mM: [46, 38], mA: [66, 38], mL: [82, 40], qC: [50, 46], qCav: [76, 50] }, x: ["qC"] },
      { t: "Os coraixitas fogem. Morrem cerca de 70 e outros 70 são capturados. Do lado muçulmano, morrem 14.",
        p: { qC: [50, 62], qCav: [76, 64], qCamp: [50, 68], mM: [46, 50], mA: [66, 50] }, x: ["qC", "qCav"] }
    ]
  },

  uhud: {
    terrain: [
      { t: "hill", x: 50, y: 6, rx: 40, ry: 7, l: "Monte Uhud" },
      { t: "hill", x: 14, y: 30, rx: 8, ry: 7, l: "Colina dos arqueiros" }
    ],
    units: [
      { id: "mI", s: "b", k: "inf", w: 34, h: 5, l: "Muçulmanos (≈ 700)" },
      { id: "mA", s: "b", k: "inf", w: 10, h: 3, l: "50 arqueiros" },
      { id: "qC", s: "a", k: "inf", w: 30, h: 6, l: "Abu Sufyan (centro)" },
      { id: "qK", s: "a", k: "cav", w: 12, h: 5, l: "Khalid" },
      { id: "qI", s: "a", k: "cav", w: 12, h: 5, l: "Ikrima" },
      { id: "qB", s: "a", k: "inf", w: 6, h: 3, l: "Porta-estandarte" },
      { id: "qCamp", s: "a", k: "camp", w: 14, h: 5, l: "Acampamento coraixita" }
    ],
    steps: [
      { t: "Os muçulmanos ficam na encosta, com o monte às costas. Cinquenta arqueiros guardam a colina ao lado, com ordem de não sair de lá. Os coraixitas formam na planície.",
        p: { mI: [52, 24], mA: [14, 30], qC: [50, 50], qK: [24, 50], qI: [76, 50], qB: [50, 40], qCamp: [50, 64] } },
      { t: "A cavalaria de Meca, liderada por Abu Amir, tenta uma carga e é repelida por uma saraivada de pedras.",
        p: { qI: [72, 40] } },
      { t: "Os duelos pelo estandarte: Ali mata Talha ibn Abi Talha. Seus parentes pegam a bandeira, um a um, e são mortos.",
        p: { qB: [50, 36], mI: [52, 30] }, x: ["qB"] },
      { t: "Os muçulmanos rompem a linha e parecem vencer. Os coraixitas recuam até seu acampamento.",
        p: { mI: [52, 40], qC: [50, 56], qCamp: [50, 66] } },
      { t: "A maior parte dos arqueiros desce da colina para recolher o butim, contra a ordem de Maomé.",
        p: { mA: [20, 46] } },
      { t: "Khalid percebe, dá a volta com a cavalaria, domina os poucos arqueiros que ficaram e ataca o flanco e a retaguarda.",
        p: { qK: [20, 30], mI: [52, 38] }, x: ["mA"] },
      { t: "Confusão. Hamza é morto. Corre o boato de que Maomé morreu, mas ele só está ferido.",
        p: { qK: [36, 26], qC: [50, 44], qI: [72, 44], mI: [52, 32] } },
      { t: "Umar reúne parte da tropa e contra-ataca. Os muçulmanos sobem as encostas, onde a cavalaria não alcança. Abu Sufyan grita um desafio e vai para Meca.",
        p: { mI: [52, 18], qK: [36, 38], qC: [50, 54], qI: [72, 54] } }
    ]
  },

  khandaq: {
    terrain: [
      { t: "hill", x: 14, y: 52, rx: 12, ry: 9, l: "Colina de Sala'" },
      { t: "note", x: 90, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "trench", s: "a", k: "inf", w: 78, h: 3, l: "Trincheira (cavada em seis dias)" },
      { id: "mI", s: "a", k: "inf", w: 56, h: 5, l: "Defensores de Medina (≈ 3.000)" },
      { id: "mHQ", s: "a", k: "camp", w: 12, h: 5, l: "Maomé (Sala')" },
      { id: "qI", s: "b", k: "inf", w: 22, h: 6, l: "Coraixitas (Abu Sufyan)" },
      { id: "gI", s: "b", k: "inf", w: 22, h: 6, l: "Ghatafan e outros" },
      { id: "cav", s: "b", k: "cav", w: 14, h: 5, l: "≈ 600 cavaleiros" },
      { id: "qz", s: "b", k: "camp", w: 14, h: 5, l: "Banu Qurayza" }
    ],
    steps: [
      { t: "Os muçulmanos cavam uma trincheira onde falta barreira natural. Todo homem capaz trabalha, Maomé inclusive. A obra leva cerca de seis dias.",
        p: { trench: [50, 30], mI: [50, 40], mHQ: [14, 56], qI: [30, 6], gI: [62, 6], cav: [86, 8], qz: [88, 58] } },
      { t: "O exército confederado chega do norte, com sete a dez mil homens, e acampa do outro lado da vala.",
        p: { qI: [30, 16], gI: [62, 16], cav: [84, 18] } },
      { t: "A cavalaria não consegue atravessar. Dias de troca de flechas e insultos.",
        p: { cav: [80, 24] } },
      { t: "Segundo a tradição, Amr ibn Abd Wudd e alguns cavaleiros atravessam num ponto estreito. Amr é morto por Ali.",
        p: { cav: [82, 28] } },
      { t: "Huyayy ibn Akhtab convence os Banu Qurayza a romper o pacto. Maomé manda três homens verificar, e os rumores desmoralizam Medina.",
        p: { qz: [88, 50], mI: [50, 38] } },
      { t: "Nu'aym ibn Mas'ud semeia desconfiança: avisa os Qurayza de que os confederados vão abandoná-los e avisa Abu Sufyan de que os Qurayza vão entregá-los.",
        p: { qz: [88, 44] } },
      { t: "Uma tempestade apaga as fogueiras e derruba as tendas dos atacantes. Os confederados partem durante a noite.",
        p: { qI: [30, 4], gI: [62, 4], cav: [84, 6] }, x: ["qI", "gI", "cav"] }
    ]
  },

  qadisiyya: {
    terrain: [
      { t: "sea", x: 0, y: 8, w: 100, h: 5, l: "Rio Ateeq (uma ponte)" },
      { t: "note", x: 90, y: 66, l: "Margem oeste" }
    ],
    units: [
      { id: "pCamp", s: "b", k: "camp", w: 16, h: 5, l: "Acampamentos persas (margem leste)" },
      { id: "pLw", s: "b", k: "inf", w: 20, h: 5, l: "Mihran (ala esquerda)" },
      { id: "pLc", s: "b", k: "inf", w: 20, h: 5, l: "Piruzan e centro" },
      { id: "pRc", s: "b", k: "inf", w: 20, h: 5, l: "Jalinus (centro direito)" },
      { id: "pRw", s: "b", k: "inf", w: 20, h: 5, l: "Hormuzan (ala direita)" },
      { id: "pEle", s: "b", k: "ele", w: 70, h: 4, l: "≈ 33 elefantes" },
      { id: "pCav", s: "b", k: "cav", w: 20, h: 4, l: "Cavalaria de reserva" },
      { id: "pRos", s: "b", k: "camp", w: 12, h: 4, l: "Rostam e o estandarte" },
      { id: "mLw", s: "a", k: "inf", w: 20, h: 5, l: "Asim (esquerda)" },
      { id: "mCl", s: "a", k: "inf", w: 20, h: 5, l: "Centro esquerdo" },
      { id: "mCr", s: "a", k: "inf", w: 20, h: 5, l: "Zuhra (centro direito)" },
      { id: "mRw", s: "a", k: "inf", w: 20, h: 5, l: "Ala direita" },
      { id: "mCav", s: "a", k: "cav", w: 20, h: 4, l: "Jarir (cavalaria)" },
      { id: "mQ", s: "a", k: "cav", w: 10, h: 4, l: "Qa'qa e a vanguarda da Síria" },
      { id: "mPal", s: "a", k: "camp", w: 14, h: 5, l: "Palácio de Sa'd" }
    ],
    steps: [
      { t: "Os persas atravessaram o canal entupido e formam em quatro divisões, com elefantes na frente. Os árabes também formam em quatro corpos. Sa'd, doente, dirige tudo do palácio.",
        p: { pCamp: [16, 3], pLw: [20, 28], pLc: [40, 28], pRc: [60, 28], pRw: [80, 28], pEle: [50, 36], pCav: [50, 21], pRos: [66, 18],
             mLw: [20, 46], mCl: [40, 46], mCr: [60, 46], mRw: [80, 46], mCav: [50, 54], mQ: [14, 68], mPal: [50, 64] } },
      { t: "Primeiro dia: depois dos duelos, os elefantes carregam contra a direita árabe e assustam os cavalos. Os arqueiros de Asim matam os condutores, e a infantaria corta as cinchas.",
        p: { pEle: [74, 40], mRw: [80, 44] } },
      { t: "Os elefantes recuam. A luta termina ao anoitecer, sem decisão: é o 'dia da desordem'.",
        p: { pEle: [60, 34], mRw: [80, 46] } },
      { t: "Segundo dia: perto do meio-dia chegam reforços da Síria. Qa'qa manda a vanguarda em pequenos grupos, para parecer um exército enorme. Os camelos disfarçados assustam os cavalos persas.",
        p: { mQ: [30, 58], mCav: [40, 52], pCav: [36, 25] } },
      { t: "Terceiro dia: Rostam faz um ataque geral, com elefantes. Uma unidade de cavalaria persa tenta tomar o palácio de Sa'd e é repelida.",
        p: { pEle: [50, 42], pCav: [50, 52], mCl: [42, 46], mPal: [50, 64] } },
      { t: "Sa'd manda cegar os elefantes e cortar as trombas. Em pânico, eles fogem para o rio. Ao meio-dia não resta nenhum.",
        p: { pEle: [50, 14] }, x: ["pEle"] },
      { t: "Noite do rumor: o combate continua sem parar até o amanhecer.",
        p: { mLw: [20, 42], mCl: [40, 42], mCr: [60, 42], mRw: [80, 42], pLw: [20, 34], pLc: [40, 34], pRc: [60, 34], pRw: [80, 34] } },
      { t: "Quarto dia: os homens de Qa'qa rompem o centro persa, mas o exército resiste. Então uma tempestade de areia sopra.",
        p: { mQ: [50, 38], mCr: [58, 40], pRc: [58, 32] } },
      { t: "Rostam morre, e a linha persa se desfaz. Jalinus comanda os restos e leva a maioria pela ponte. A cavalaria árabe persegue.",
        p: { pRos: [66, 10], pLw: [20, 18], pLc: [40, 16], pRc: [60, 14], pRw: [80, 18], mCav: [50, 30], mQ: [50, 26] }, x: ["pRos", "pLw", "pLc", "pRc", "pRw"] }
    ]
  }
});
