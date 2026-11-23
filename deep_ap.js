// In-depth battles, batch ap: vouille, roncesvales, beziers, muret, toulouse (regional pack, part A: medieval southern France).
// Checked against the English and French Wikipedia articles on Vouillé, Roncevaux Pass, the Massacre at Béziers, Muret,
// the siege of Toulouse and the Albigensian Crusade, the Spanish Wikipedia article on Muret, Britannica, historyofwar.org
// (Vouillé), and the works those pages cite (Gregory of Tours, Einhard, Peter of Vaux-de-Cernay, William of Tudela,
// Caesarius of Heisterbach, Marvin, Sumption, Tyerman). Where sources disagree the text says so.
// Diagrams: Muret and Toulouse only. Vouillé, Roncesvalles and Béziers are skipped: the sources do not describe the
// dispositions or moves well enough to draw them without inventing.

Object.assign(GLOSSARY, {
  "arianos": "Cristãos que seguiam a doutrina de Ário e achavam que Jesus não era igual a Deus Pai. A Igreja de Roma os considerava hereges. Muitos reis germânicos, como os visigodos, eram arianos, e seus súditos romanos eram católicos.",
  "ostrogodos": "O ramo oriental dos godos. No tempo de Teodorico, o Grande, governavam a Itália, com capital em Ravena.",
  "burgúndios": "Povo germânico que dominava o vale do Ródano, no leste da França. Tinha reis próprios e ora brigava, ora se aliava aos francos.",
  "septimânia": "Faixa de costa no sul da França, entre os Pireneus e o rio Ródano, com Narbona como cidade principal. Ficou com os visigodos depois de Vouillé.",
  "aquitânia": "Região do sudoeste da França, entre o Loire, o Garonne e os Pireneus. Em 507 fazia parte do reino visigodo.",
  "galo-romanos": "Os habitantes da Gália que descendiam de gauleses e falavam latim. Muitos eram católicos e tinham sido senadores e funcionários do Império Romano.",
  "cônsul honorário": "Título de cônsul dado como honra, sem o poder do cargo antigo. Um rei bárbaro que o recebia do imperador do Oriente ganhava prestígio perante os súditos romanos.",
  "bascos": "Povo dos Pireneus ocidentais, de língua própria. Nos textos francos da época aparecem como 'vascões' (Wascones).",
  "carolíngios": "A dinastia dos reis francos que teve Carlos Magno como maior nome. Governou a França e a Alemanha atuais, e parte da Itália.",
  "marca da bretanha": "Região de fronteira do reino franco, na Bretanha, que defendia o reino contra os bretões. Quem a governava tinha poderes militares.",
  "conde palatino": "Oficial do palácio dos reis francos, que ajudava o rei a julgar e a governar. No tempo de Carlos Magno, era um dos cargos mais altos da corte.",
  "senescal": "Chefe da casa do rei, que cuidava da mesa e dos serviços do palácio. Na corte franca, a função também tinha poder militar e político.",
  "canção de gesta": "Poema longo, cantado ou recitado, que conta façanhas de heróis. A Canção de Rolando é a mais antiga que se conhece em francês.",
  "trem de bagagem": "A fila de carroças e animais que carregava comida, ferramentas, tesouros e o equipamento de um exército em marcha. Era lenta e rica, e por isso atraía ataques.",
  "cátaros": "Seguidores de um movimento religioso do sul da França, que ensinava que o mundo material era obra do mal. A Igreja os chamava de hereges. Seus líderes, os 'perfeitos', viviam com muita austeridade.",
  "legado papal": "Representante pessoal do papa, enviado para decidir assuntos em seu nome. Falava com a autoridade do papa.",
  "visconde": "Título nobre abaixo de conde. No sul da França, o visconde de Béziers e Carcassonne era um dos grandes senhores da região.",
  "ribaldos": "Soldados de baixa condição, a pé, que seguiam o exército medieval, muitos deles mercenários, e viviam do saque. Os cronistas os descrevem como os mais violentos.",
  "valdenses": "Seguidores de Pedro Valdo, pregador de Lyon do século 12 que pregava a pobreza. Eram outro grupo que a Igreja considerava herege.",
  "cruzada albigense": "Guerra lançada pelo papa em 1209 contra os cátaros e contra os senhores do sul da França que os toleravam. Durou, com pausas, até 1229, e deu ao rei da França uma parte do sul.",
  "carga de cavalaria": "Ataque em que os cavaleiros avançam juntos, de lança baixa, para romper a linha inimiga pelo choque.",
  "cavaleiro": "Guerreiro nobre que lutava a cavalo, de armadura e lança. Costumava ter escudeiros e soldados a pé sob suas ordens.",
  "faidits": "Os 'faidits' eram os senhores do sul da França que tinham perdido suas terras para os cruzados. Passaram a lutar como exilados, em busca de recuperá-las.",
  "cônsules de toulouse": "Os magistrados eleitos pelos habitantes de Toulouse para governar a cidade. Defendiam as liberdades da cidade contra os condes e contra os cruzados.",
  "gato de cerco": "Abrigo de madeira coberto com couro, com telhado inclinado, em que os atacantes se aproximavam da muralha sem serem atingidos por flechas e pedras.",
  "château narbonnais": "O castelo dos condes de Toulouse, dentro da cidade. Simon de Montfort o usou como base e prisão.",
  "trovador": "Poeta e cantor medieval do sul da França, que compunha em occitano. Muitos eram nobres e escreviam sobre amor, política e guerra.",
  "tenso": "Gênero poético dos trovadores em que dois lados discutem em versos, como um debate.",
  "occitânia": "O sul da França, onde se falava a língua de oc (occitano) e não o francês do norte. Tinha costumes, leis e uma cultura próprios."
});

Object.assign(DEEP, {
  vouille: {
    war: "Guerra franco-gótica (507–511)",
    hook: "O dia em que Clóvis derrubou o reino visigodo da Gália e mudou o mapa da França.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Por volta de 500, a Gália já não era romana, mas ainda não era um país. O norte era dos [[francos]], que Clóvis tinha reunido sob seu comando depois de vencer o último governador romano em Soissons, em 486. O sul e o oeste eram do reino dos [[visigodos]], que ia do rio Loire até a Espanha. Esse reino incluía a [[aquitânia]], a [[septimânia]], a maior parte da Espanha e partes da Provença. O rei era Alarico II, que governava de Toulouse.",
        "Havia uma diferença de religião. Alarico e seus godos eram [[arianos]]. Clóvis e boa parte dos [[galo-romanos]] eram católicos. Gregório de Tours, bispo e cronista do século 6, conta que Clóvis disse aos seus que não aguentava ver os arianos com uma parte da Gália. Os historiadores modernos acham que a religião foi só um dos motivos, e que a causa exata da guerra não é clara.",
        { h: "O caminho até Vouillé" },
        { timeline: [
          ["486", "Clóvis vence o último governador romano da Gália do norte, em Soissons."],
          ["Antes de 507", "Clóvis vence os alamanos e os [[burgúndios]]. Alarico começa a temer por seus domínios no norte."],
          ["Antes de 507", "Teodorico, o Grande, rei dos [[ostrogodos]], tenta evitar a guerra com cartas e enviados, mas sem sucesso."],
          ["507", "Clóvis marcha para o sul. Alarico vem ao seu encontro, perto de Poitiers."],
          ["507–508", "Depois da vitória, Clóvis passa o inverno em Bordeaux e toma Toulouse e Angoulême."],
          ["508", "Teodorico manda um exército para a Gália e salva o que resta do reino visigodo."]
        ]},
        "Teodorico era sogro de Alarico e tinha prometido ajuda. Mas a tropa ostrogoda demorou e só atravessou os Alpes no ano seguinte, tarde demais."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Clóvis I, cerca de 40 anos" },
        "Rei dos francos desde os 15 anos, era um guerreiro e um político calculista. Sua conversão ao cristianismo católico, que Gregório de Tours conta como uma promessa feita no meio de uma batalha contra os alamanos, o aproximou dos bispos e dos súditos romanos do sul. Na guerra de 507, o prêmio era o sul rico de Alarico. Seu filho Teoderico lutou ao seu lado.",
        { h: "Alarico II" },
        "Rei dos visigodos desde 484. Governava um reino mais rico e mais antigo que o de Clóvis, com uma administração de tradição romana. Em 506 mandou compilar um código de leis romanas para os seus súditos, o Breviário de Alarico. Tentou evitar a guerra e, como não conseguiu, saiu ao encontro de Clóvis.",
        { h: "Os outros nomes" },
        "Um aliado importante de Clóvis era Cloderico, filho de Sigeberto, o Manco, rei dos francos de Colônia. Os burgúndios, segundo Isidoro de Sevilha, também ajudaram Clóvis, mas Gregório de Tours não os menciona, talvez por antipatia pelos burgúndios, que eram arianos. Do lado visigodo, o nobre Apolinário comandava uma tropa de gente da Auvergne, uma região que fazia parte do reino de Alarico."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Nenhuma fonte dá números confiáveis dos dois exércitos. As fontes antigas não trazem cifras, e os historiadores modernos não propõem nenhuma com segurança. O que se sabe é que o exército de Alarico era misto, com guerreiros godos e soldados de origem romana, e que, segundo o que se lê hoje, era o maior e o mais bem equipado.",
        { h: "O terreno" },
        "A batalha foi no que Gregório chama de Campus Vogladensis, o campo de Vouillé, a dez milhas de Poitiers (cerca de 15 quilômetros). A identificação com a aldeia de Vouillé é a mais aceita, mas outros locais já foram propostos. A data também é discutida: primavera ou verão de 507.",
        { h: "Um rio cheio e uma corça" },
        "Gregório conta que o rio Vienne estava cheio de chuva e que Clóvis não achava onde atravessar. Rezou, e uma corça mostrou o [[vau]]. Também conta que Clóvis mandou mensageiros à igreja de São Martinho, em Tours, e que, quando eles entraram, o coro cantava um verso que falava de Deus dando forças para a guerra. E ainda que, à noite, uma luz saiu da igreja de Santo Hilário, em Poitiers, e foi na direção do exército. São sinais que ele relata como milagres e que ninguém consegue confirmar.",
        { note: "Os sinais de Gregório (a corça, o canto, a luz) são histórias contadas para mostrar que Deus estava do lado de Clóvis. Não são provas. O que o relato dá de concreto é que o exército de Clóvis teve de atravessar o Vienne, e que o rio dificultou a marcha." },
        { h: "O choque" },
        "Gregório diz pouco sobre a luta em si. Escreve que um lado combateu de longe e o outro de perto, mas não diz qual era qual. Historiadores modernos propõem que Clóvis pôs seus atiradores de projéteis atrás e mandou o resto da tropa para o corpo a corpo. Os homens da Auvergne lutaram duro, mas todos os seus chefes, menos Apolinário, morreram, e o exército visigodo começou a vacilar.",
        "Foi então que Alarico morreu. Gregório diz que foi o próprio Clóvis quem o matou, e que o rei franco quase morreu logo depois: dois soldados godos armados de lança o atacaram, e o que o salvou, segundo Gregório, foi a [[cota de malha]] e a velocidade do cavalo. Os historiadores dizem que a morte de Alarico nas mãos de Clóvis é possível, mas não segura, e que provavelmente ocorreu na perseguição, depois da fuga dos godos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A vitória franca foi total. Clóvis passou o inverno em Bordeaux, tomou Toulouse, onde estava o tesouro de Alarico, e depois Angoulême. Os visigodos que sobraram se retiraram para Narbona, na septimânia. Houve uma disputa entre dois herdeiros: Gesaleico, filho ilegítimo de Alarico e apoiado pelo exército, e Amalarico, filho menor, apoiado por Teodorico.",
        "Em 508, o exército ostrogodo de Teodorico cruzou os Alpes, levantou o cerco de Arles, que os burgúndios mantinham, e expulsou os burgúndios das terras visigodas. Teodorico ficou com parte da Provença e garantiu o resto para Amalarico, e forçou Gesaleico ao exílio.",
        "Clóvis voltou a Tours, onde recebeu do imperador do Oriente, Anastásio, o título de [[cônsul honorário]] (e, segundo alguns historiadores, também o de patrício). Foi um reconhecimento imperial para um rei que governava um território romano.",
        { h: "Por que importa" },
        "Vouillé tirou dos visigodos quase todas as terras ao norte dos Pireneus e fez dos francos a maior potência do Ocidente. Os reis francos passaram a reivindicar a Aquitânia e Toulouse, e a França ganhou o formato que mantém até hoje, entre o Reno, os Pireneus e o mar. Os visigodos, depois dessa derrota, aos poucos passaram a ter na Espanha o centro do reino.",
        { h: "Curiosidades e controvérsias" },
        { note: "A cena de Clóvis matando Alarico aparece numa iluminura do século 15, com armaduras e armas que só existiram mil anos depois, o que mostra como a lembrança da batalha foi sendo reescrita." },
        { note: "Nossa fonte principal, Gregório de Tours, era bispo católico e escreveu cerca de 80 anos depois da batalha. Ele conta a guerra do ponto de vista dos vencedores, e o lado de Alarico é bem menos conhecido." }
      ]}
    ]
  },

  roncesvales: {
    war: "Campanha de Carlos Magno na Espanha (778)",
    hook: "Uma emboscada nas montanhas destruiu a retaguarda de Carlos Magno e deu origem a uma das lendas mais famosas da Idade Média.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 778, Carlos Magno governava os [[francos]] havia dez anos. Seu reino já ia da Itália ao Elba, e ele seguia ampliando as fronteiras. Do outro lado dos Pireneus ficava o [[emirado]] de Córdoba, governado por Abderramão I, um príncipe omíada que tinha fugido de Damasco e fundado seu poder na Espanha.",
        "Os [[carolíngios]], a família de Carlos Magno, já tinham tido problemas com os [[bascos]], que moravam dos dois lados dos Pireneus e só aceitavam submissão pela metade. Em 766 e 769, parte dos territórios bascos tinha se submetido ao pai de Carlos Magno, Pepino, mas as terras ao sul do Garonne continuavam em grande parte livres.",
        { h: "O caminho até o passo" },
        { timeline: [
          ["777", "Em Paderborn, na Alemanha, Carlos Magno recebe Sulaiman ibn al-Arabi, governador de Barcelona e Girona, que se revoltara contra Córdoba e pede ajuda."],
          ["778", "Carlos Magno entra na Espanha com dois exércitos: um pela região de Barcelona e Girona, outro, comandado por ele, por Pamplona."],
          ["778", "Em Saragoça, o governador não abre as portas. O cerco dura mais de um mês e termina com um acordo, e os francos voltam."],
          ["778", "Na volta, Carlos Magno manda derrubar as muralhas de Pamplona."],
          ["15 ago 778", "A retaguarda do exército é atacada e destruída no passo dos Pireneus."]
        ]},
        "A campanha deu errado. Sulaiman tinha prometido uma Espanha aberta aos francos, mas o governador de Saragoça não abriu as portas. Segundo uma fonte árabe, que as francas não confirmam, os filhos de Sulaiman o libertaram do cativeiro dos francos. Os historiadores usam essa informação com cuidado: a fonte é do século 13, e dá uma data errada."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Carlos Magno" },
        "Rei dos francos e futuro imperador. Foi para a Espanha por um pedido de ajuda e voltou com pouco. A derrota nos Pireneus, segundo os anais francos, pesou nele mais do que suas vitórias na Espanha. Depois dela, nunca mais comandou pessoalmente um exército na Espanha.",
        { h: "Rolando e os outros" },
        "Einhard, biógrafo de Carlos Magno, escreveu cerca de meio século depois que morreram na emboscada Eggihard, o [[senescal]] do rei, Anselmo, o [[conde palatino]], e Rolando, comandante da [[marca da bretanha]]. Na prática, é tudo o que as fontes da época dizem de Rolando. Alguns manuscritos de Einhard nem trazem o nome dele, o que gerou debate entre historiadores no século 19.",
        { h: "Os bascos" },
        "A fonte franca fala em 'vascões', e ninguém sabe o nome do chefe. Alguns historiadores apontam o duque Lupo II da Gasconha, outros falam em bandos locais atrás de saque. A explicação mais comum para o ataque é a revolta com a destruição de Pamplona, e a vontade de pegar a bagagem rica dos francos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Uma estimativa moderna fala em cerca de 3.000 soldados francos na travessia do passo. É uma estimativa, e as fontes da época não dão números. O tamanho da força basca é desconhecido. Segundo os anais e Einhard, os bascos eram guerreiros leves, com armas leves, e os francos, mais bem armados, com armaduras pesadas.",
        { h: "O terreno" },
        "Os Pireneus, numa travessia estreita, de mata cerrada. O exército andava em fila comprida, com a [[retaguarda]] e o [[trem de bagagem]] por último. O local exato da batalha é discutido: a opinião mais aceita é o passo de Roncesvalles (Ibañeta), mas há quem proponha passos mais a leste ou a oeste. Nenhuma escavação encontrou vestígio da luta.",
        { h: "A emboscada" },
        "Segundo Einhard e os anais revistos, os bascos esperaram no alto das montanhas, nas matas. Quando a coluna passou, caíram sobre a retaguarda e a bagagem, que estavam separadas do resto do exército, e empurraram todos para o vale. Os francos lutaram, mas o terreno e o tipo de combate não deixavam que usassem a sua vantagem de armas. Einhard escreve que todos morreram. Os bascos pilharam a bagagem e, protegidos pelo escuro, sumiram sem deixar rastro, e na manhã seguinte não havia como persegui-los.",
        { note: "Os anais mais antigos falam da campanha na Espanha sem mencionar a emboscada. O primeiro a descrevê-la é a versão revista dos Anais Reais, escrita depois de 829. Por isso alguns historiadores acham que o episódio foi encoberto de propósito, e outros que, na época, pareceu pouco importante." },
        { note: "A data de 15 de agosto vem de um epitáfio em verso, de um manuscrito do século 10, para um homem chamado Aggiard, que morreu nesse dia e que Gaston Paris ligou a Eggihard. Nem todos os historiadores aceitam a ligação." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A retaguarda franca foi inteiramente destruída. Einhard e muitos historiadores chamam a batalha de a única grande derrota de Carlos Magno. O rei não pôde se vingar na hora: os bascos tinham sumido.",
        "As consequências vieram aos poucos. Carlos Magno criou depois a Marca Hispânica, uma faixa de fronteira ao sul dos Pireneus, e os francos tomaram Barcelona cerca de dez anos mais tarde. Os bascos resistiram por anos: em 790, Guilherme de Gellone dominou a revolta e exilou o chefe Adalrico. Em 824 houve um segundo combate no mesmo passo, em que um exército carolíngio foi derrotado. Nesse mesmo ano, os bascos consolidaram o reino que viria a ser o de Pamplona.",
        { h: "A lenda" },
        "A [[Canção de Rolando|canção de gesta]], poema de cerca de 4.000 versos copiado no século 11 (a cópia mais antiga é o manuscrito de Oxford), reescreveu tudo. Os inimigos deixam de ser bascos e viram um grande exército muçulmano do rei Marsílio, de Saragoça. A emboscada vira obra de um traidor, Ganelão. Rolando morre depois de tocar a trompa Olifante e de tentar quebrar sua espada Durendal. Carlos Magno volta, vence e se vinga.",
        { h: "Por que importa" },
        "A Canção de Rolando é o primeiro grande poema em francês e virou modelo de herói cavaleiresco. Segundo a tradição, cavaleiros a teriam cantado antes da batalha de Hastings, em 1066. Dela vem até a expressão inglesa 'to give a Roland for an Oliver', que quer dizer pagar na mesma moeda.",
        { h: "Curiosidades e controvérsias" },
        { note: "Na história real, os bascos eram em grande parte pagãos naquela época e Carlos Magno tinha aliados muçulmanos. A lenda de cristãos contra muçulmanos é uma invenção posterior, de um tempo em que as Cruzadas e a Reconquista davam o tom." },
        { note: "O nome Roncesvalles só aparece nas fontes a partir do século 12. A estrada moderna do passo só foi aberta em 1881." }
      ]}
    ]
  },

  beziers: {
    war: "Cruzada albigense (1209–1229)",
    hook: "Em poucas horas, a primeira grande ação da cruzada albigense arrasou uma cidade inteira.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século 12, o sul da França, a [[occitânia]], era uma terra à parte. Falava occitano, tinha cidades ricas e senhores quase independentes do rei da França, e o movimento dos [[cátaros]] tinha ganhado muitos seguidores. Para a Igreja, eram hereges. O papa Inocêncio III tentou convertê-los por missões e pregadores, sem muito resultado.",
        "Em janeiro de 1208, o [[legado papal]] Pedro de Castelnau foi assassinado. O papa suspeitou do conde Raymond VI de Toulouse, embora algumas versões digam que foi um cavaleiro agindo por conta própria. Inocêncio III declarou uma cruzada e ofereceu as terras dos hereges a quem quisesse conquistá-las. Era a [[cruzada albigense]].",
        { h: "O caminho até Béziers" },
        { timeline: [
          ["Jan 1208", "O legado Pedro de Castelnau é assassinado."],
          ["Início de jul 1209", "O exército cruzado se reúne em Lyon."],
          ["21 jul 1209", "Chega a Béziers e acampa à beira do rio Orb."],
          ["22 jul 1209", "A cidade é tomada em poucas horas e o massacre começa."],
          ["15 ago 1209", "Carcassona se rende."]
        ]},
        "Béziers e Carcassona pertenciam ao [[visconde]] Raymond-Roger Trencavel, de cerca de 24 anos. Ele não era cátaro, mas tolerava os cátaros em suas terras. Tentou negociar com os cruzados em Montpellier, não conseguiu e foi preparar a defesa. Passou por Béziers, prometeu reforços e partiu para Carcassona."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Arnaud Amalric, abade de Cîteaux" },
        "Chefe religioso da ordem de Cister e legado do papa, comandava o exército cruzado. Não era soldado, mas dava a última palavra. Foi dele a carta ao papa depois do massacre, em que contava que quase 20.000 pessoas tinham morrido e que era vingança divina.",
        { h: "Raymond-Roger Trencavel, cerca de 24 anos" },
        "Visconde de Béziers e Carcassona, vassalo do conde de Toulouse. Por que saiu de Béziers, as fontes discordam. Pedro de Vaux-de-Cernay, cronista dos cruzados, diz que foi por medo. Guilherme de Tudela, que era do lado occitano, diz que sua presença era necessária em Carcassona. O historiador Laurence Marvin acha mais provável a versão de Tudela, porque Trencavel defendeu Carcassona com firmeza.",
        { h: "O bispo e os moradores" },
        "Renaud de Montpeyroux, bispo de Béziers, ofereceu poupar a cidade se os hereges fossem entregues, e fez uma lista de 222 pessoas, em sua maioria cátaros, com alguns [[valdenses]]. Os moradores recusaram: achavam que as pessoas da lista tinham apoio demais na cidade. Também rejeitaram a proposta de deixar os católicos saírem, e a maioria dos católicos, inclusive padres, ficou."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Não há números confiáveis para o exército cruzado nem para a população de Béziers. O que as fontes mostram é uma cidade murada, cujos moradores estavam dispostos a resistir, diante de um exército grande, com muitos soldados de condição humilde que viviam de saque.",
        { h: "A saída" },
        "Na manhã de 22 de julho, segundo Guilherme de Tudela, homens da cidade saíram pela porta voltada para o Orb para zombar dos cruzados. Alguns relatos dizem que eram homens armados e outros que eram civis sem armas. Um cruzado que respondeu aos insultos foi morto. Os [[ribaldos]], que acompanhavam o exército, atacaram, e os moradores recuaram em desordem.",
        { h: "A queda" },
        "Os ribaldos entraram atrás dos que fugiam. Segundo uma versão, alguns passaram pela porta aberta e lutaram com os guardas para controlá-la. Os chefes cruzados, vendo o que acontecia, mandaram o exército inteiro. A guarnição foi esmagada. Segundo a carta de Amalric, a cidade caiu em duas ou três horas, e os soldados sem ordem teriam atacado por conta própria.",
        { h: "O massacre" },
        "Os ribaldos mataram e saquearam pelas ruas e casas. O clero tocou os sinos e saiu de vestes, em procissão, mas não conseguiu detê-los. Os moradores correram para as igrejas: a catedral, a Madalena, São Judas. As portas foram quebradas, e todos os que estavam lá dentro foram mortos, sem poupar padres, mulheres ou crianças. Os cavaleiros não impediram a matança, mas tomaram os bens da cidade. Os ribaldos, furiosos por terem perdido o saque, incendiaram os prédios, e os cruzados saíram da cidade em ruínas. A catedral de São Nazário queimou e desabou.",
        { note: "A frase 'Matem todos, Deus reconhecerá os seus' vem do monge Cesário de Heisterbach, que a escreveu entre 1219 e 1223, anos depois, em latim. Historiadores duvidam que o abade a tenha dito. Laurence Marvin a chama de apócrifa: o ataque foi tão rápido que o legado talvez nem soubesse o que acontecia. Mas a frase mostra bem a disposição dos cruzados." },
        { note: "Os números: Amalric escreveu que quase 20.000 morreram. Pedro de Vaux-de-Cernay fala em 7.000 mortos só na igreja da Madalena. O historiador Christopher Tyerman acha que a cifra real foi muito menor. Marvin lembra que a maior parte da população e dos prédios sobreviveu, e que a cidade continuou grande depois." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Béziers foi saqueada e queimada, e Carcassona caiu menos de um mês depois. Trencavel foi preso durante uma negociação e morreu na prisão ainda em 1209. As terras dele passaram a Simon de Montfort, que se tornou o chefe da cruzada.",
        "Muitas cidades e castelos da região se renderam depressa, com medo de que acontecesse o mesmo. Mas os cruzados também perderam o apoio de muitos católicos do sul, que viram o exército como invasor. Segundo Tyerman, a partir daí a lealdade passou a depender sobretudo de interesses terrenos.",
        { h: "Por que importa" },
        "A guerra continuou por 20 anos. Com a intervenção do rei da França, a cruzada virou conquista, e o sul foi se incorporando ao reino. A heresia cátara foi aos poucos exterminada. Em 1229, o Tratado de Paris deu ao rei grande parte do sul.",
        { h: "Curiosidades e controvérsias" },
        { note: "Hoje há em Béziers, em frente à catedral, uma placa que chama o episódio de 'dia de carnificina'. A cidade ainda lembra." },
        { note: "Os historiadores ainda debatem se o massacre foi planejado, como terror para fazer outras cidades se renderem, ou se foi um acidente que os chefes não conseguiram ou não quiseram impedir." }
      ]}
    ]
  },

  muret: {
    war: "Cruzada albigense (1209–1229)",
    hook: "Um punhado de cavaleiros destruiu uma coalizão bem maior, e o rei de Aragão morreu na luta.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1213, a [[cruzada albigense]] já durava quatro anos. Simon de Montfort, o chefe dos cruzados, tinha tomado as terras do visconde de Béziers e Carcassona e, depois, a maior parte do condado de Toulouse. Raymond VI, o conde, foi expulso e pediu ajuda ao cunhado, Pedro II, rei de Aragão.",
        "Pedro tinha ganhado enorme prestígio em 1212, na vitória cristã de Las Navas de Tolosa contra os muçulmanos, e se sentia ameaçado pelas conquistas de Montfort. No fim de agosto de 1213, Pedro atravessou os Pireneus.",
        { h: "O caminho até Muret" },
        { timeline: [
          ["Ago 1213", "Pedro II cruza os Pireneus e junta suas tropas às de Toulouse e Foix."],
          ["8–10 set 1213", "Os aliados sitiam Muret, 25 km ao sul de Toulouse. A vila é tomada, mas o castelo não."],
          ["11 set, à noite", "Simon de Montfort, que estava na região, entra em Muret com cerca de mil cavaleiros."],
          ["12 set 1213", "Batalha. Pedro II morre."],
          ["1214", "Montfort entrega Jaime, o herdeiro de Pedro, ao legado do papa em Narbona."]
        ]},
        "As fontes divergem sobre alguns dias e horários. Usamos a data do dia 12, a mais aceita."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Simon de Montfort" },
        "Nobre da região de Paris, veterano da Quarta Cruzada, era um comandante experiente. Em Muret, tinha poucos homens. Em vez de esperar o cerco, saiu da vila com seus cavaleiros e foi para cima do exército maior.",
        { h: "Pedro II de Aragão" },
        "Rei católico e famoso por Las Navas de Tolosa, tinha atravessado os Pireneus para defender seus aliados do sul. Segundo relatos, discutiu com Raymond VI, que queria esperar e deixar a guarnição de Muret enfraquecer, e o acusou de covardia. Esse relato não tem como ser confirmado.",
        { h: "Os outros nomes" },
        "Raymond VI de Toulouse, o conde expulso, e Raymond-Roger, conde de Foix, estavam com Pedro. Do lado cruzado, os [[cavaleiros|cavaleiro]] Guilherme des Barres, Guilherme de Contres e Bouchard de Marly comandavam os esquadrões de Montfort."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são muito discutidos. Os cruzados somavam cerca de 1.000 a 1.700 homens, segundo as estimativas modernas: uns 900 a cavalo, dos quais 260 cavaleiros, mais 300 a 700 soldados a pé, que ficaram guardando a vila. O lado aliado teria de 4.000 a 8.000 homens, segundo Laurence Marvin e Clifford Rogers. Charles Oman chegou a falar em 17.000 a 22.000. A crônica de Pedro de Vaux-de-Cernay diz 100.000, o que é impossível. Jonathan Sumption diz que nada acima de 10.000 combatentes é crível.",
        { note: "Os números das crônicas são exagerados. Os historiadores modernos concordam em dois pontos: os aliados eram mais numerosos, embora ninguém saiba por quanto, e a luta foi decidida pela cavalaria." },
        { h: "O terreno" },
        "Muret ficava na margem do Garonne, 25 km ao sul de Toulouse, com os rios Louge e Saudrune por perto. Segundo uma descrição, o exército aliado se apoiava no Saudrune, à direita, e num pântano, à esquerda. A milícia de Toulouse atacava as muralhas.",
        { h: "A manhã" },
        "Segundo uma tradição, são Domingos, o fundador dos dominicanos, teria mandado rezar o rosário com o clero na igreja de Muret. A história é contada por Bernard Gui, bem depois, e é tradição, não fato comprovado.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, Montfort saiu pela porta de Salles com os cavaleiros divididos em três esquadrões de cerca de 300 homens. O primeiro era de Guilherme des Barres e Guilherme de Contres. O segundo, de Bouchard de Marly. O terceiro, de Montfort. A infantaria ficou na vila.",
        "Segundo, os aliados se arrumaram em duas ou três linhas e esperaram. Na frente estava o conde de Foix, com cerca de 200 aragoneses e 400 homens de Foix. Depois vinha Pedro, com cerca de 700 aragoneses. Atrás ficava Raymond VI, com a tropa de Toulouse e Comminges. Segundo alguns relatos, Raymond VI saiu da luta e foi para Toulouse sem combater.",
        "Terceiro, o primeiro esquadrão atravessou um riacho e bateu de frente na linha do conde de Foix, que recuou. A segunda linha dos cruzados veio logo atrás e rompeu a primeira dos aliados.",
        "Quarto, os aragoneses entraram no combate, mas os cruzados mantiveram a formação e repetiram as [[cargas de cavalaria|carga de cavalaria]]. Montfort, com o terceiro esquadrão, em vez de ir de frente, deu a volta e bateu no flanco dos aliados.",
        "Quinto, Pedro II morreu. Os relatos mudam. Segundo uma tradição, mais tardia, Pedro tinha trocado de armadura com um dos seus, para lutar como se fosse um qualquer, e os cruzados mataram quem usava a armadura real, o que fez os aragoneses acharem que o rei tinha morrido. Pedro se mostrou e gritou, mas foi morto. Os nomes dos cruzados que o mataram também variam entre as fontes. Qualquer que tenha sido a causa, a notícia da morte do rei quebrou a resistência.",
        "Sexto, os cavaleiros aliados fugiram, e os dois primeiros esquadrões cruzados os perseguiram. Montfort voltou para a vila com o terceiro e atacou a milícia de Toulouse, que cercava os muros e estava fora de formação, no campo aberto. A milícia fugiu para o Garonne. Muitos foram mortos ou se afogaram.",
        { note: "A troca de armaduras é um dos pontos mais disputados. Algumas versões falam de uma troca com um [[arauto]], outras de uma troca com um dos seus homens. A mais detalhada vem do cronista catalão Bernat Desclot, que escreveu muito depois. As fontes da época não descrevem isso com segurança." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas dos cruzados foram mínimas: as fontes falam em 4, 8 ou 9 mortos. As dos aliados foram enormes. As crônicas falam em 15.000 a 20.000 mortos, feridos ou prisioneiros, número que os historiadores tratam com cautela. Os próprios cavaleiros do rei lutaram até morrer.",
        "O corpo de Pedro foi recuperado pelos [[hospitalários]] e enterrado em Toulouse. Anos depois, foi levado para o mosteiro de Sigena, na Espanha. O herdeiro, Jaime, de cinco anos, caiu em poder de Montfort. O papa mandou devolvê-lo, e ele foi entregue aos [[templários]] e criado em Monzón. Mais tarde seria Jaime I, o Conquistador.",
        { h: "Por que importa" },
        "Muret acabou com a influência de Aragão ao norte dos Pireneus. Pedro e muitos nobres aragoneses morreram, e o reino voltou-se para a Espanha: conquistou Maiorca e Valência. O rei da França acabou ganhando, porque herdou boa parte do sul. Para os historiadores, é uma das vitórias mais decisivas da Idade Média, ao lado de Hastings e Bouvines. Charles Oman a chamou de um dos maiores triunfos de uma força só de cavalaria.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes não são neutras. Pedro de Vaux-de-Cernay, que não esteve lá, escreve a favor de Montfort. Guilherme de Puylaurens, de Toulouse, critica os excessos de Montfort. O catalão Bernat Desclot escreveu muito depois, e o rei Jaime I, filho de Pedro, conta a história do ponto de vista aragonês." },
        { note: "O papa Inocêncio III tinha excomungado Pedro. Seu sucessor, Honório III, levantou a excomunhão depois da morte do rei, e em 1217 os restos dele foram trasladados." }
      ]}
    ]
  },

  toulouse: {
    war: "Cruzada albigense (1209–1229)",
    hook: "Uma pedra lançada de dentro dos muros matou o general que tinha vencido em Muret.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Muret, Simon de Montfort parecia invencível. Em 1215, o concílio de Latrão, em Roma, reconheceu seus direitos sobre o condado de Toulouse. O conde Raymond VI, expulso, foi procurar apoio fora, e em 1216 ele e o filho, Raymond VII, voltaram.",
        "Em 1216, Raymond VII sitiou Beaucaire, e a cidade abriu as portas. Montfort tentou socorrê-la e fracassou. Em agosto de 1216, aceitou as condições e perdeu a praça. Foi sua primeira grande derrota, e arranhou a fama de que nunca perdia. Em Toulouse, ele tinha prendido cidadãos importantes no [[château narbonnais]] e cobrado um resgate pesado, de 30.000 marcos de prata. O ressentimento virou ódio.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["Ago 1216", "Montfort perde Beaucaire para Raymond VII."],
          ["Jun 1217", "Montfort vai à Provença combater Raymond VII. Em Toulouse, sua mulher Alix fica no château narbonnais."],
          ["12–13 set 1217", "Raymond VI, que estava em Aragão, volta a Toulouse com os [[faidits]] e os condes de Foix e Comminges, e a cidade o recebe sem luta."],
          ["Início de out 1217", "Montfort chega e começa o cerco."],
          ["25 jun 1218", "Montfort é morto."],
          ["25 jul 1218", "O cerco é levantado."]
        ]},
        "Os dias de setembro divergem entre as fontes: umas dizem 12, outras 13. Montfort tinha mandado derrubar as muralhas de Toulouse. Quando voltou, as encontrou refeitas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Simon de Montfort" },
        "O chefe da cruzada e, para a Igreja, conde de Toulouse. Era um bom general, mas já estava havia anos em guerra. Quando o cerco começou, tinha poucos homens e não conseguiu cercar a cidade por inteiro.",
        { h: "Raymond VI e Raymond VII" },
        "Raymond VI era um conde de mais de 60 anos, que tinha perdido tudo e voltou. Raymond VII, de 21 anos, entrou na cidade em junho de 1218. Mas a defesa de Toulouse foi sobretudo obra dos moradores, governados pelos [[cônsules de toulouse]], que reergueram muralhas, torres e barricadas.",
        { h: "Os outros nomes" },
        "O conde de Foix, Raymond-Roger, e o conde de Comminges ajudaram a rechaçar os primeiros assaltos. Do lado dos cruzados, o irmão de Simon, Guy de Montfort, e depois o filho, Amaury, lutaram ao seu lado, e reforços chegaram com Michel de Harnes, de Artois, e Gautier de Langton, da Inglaterra."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Nenhuma fonte dá números para os dois lados. Sabe-se só que os cruzados eram poucos demais para cercar toda a cidade, e que por isso a cidade nunca ficou isolada. Os cruzados serviam por prazo curto: o contingente de Soissons, por exemplo, foi embora ao fim dos 40 dias de serviço.",
        { h: "O terreno" },
        "Toulouse ficava na margem direita do Garonne, e do outro lado do rio ficava o subúrbio de Saint-Cyprien, de onde vinham suprimentos. Quem controlasse esse subúrbio cortava parte da comida da cidade.",
        { h: "O cerco em oito etapas" },
        { formation: true },
        "Primeiro, em setembro de 1217, Guy de Montfort atacou perto da porta Montoulieu, onde a muralha ainda estava em ruínas, mas o conde de Foix o rechaçou. Quando Simon chegou, em outubro, a investida foi repelida pelo conde de Comminges. Simon aceitou que o cerco seria longo.",
        "Segundo, Montfort tomou Saint-Cyprien, do outro lado do rio, mas chegaram reforços catalães e aragoneses, e os toulousanos o reconquistaram. Nenhum dos lados tinha força para acabar com o outro.",
        "Terceiro, durante o inverno os dois lados construíram [[máquinas de arremesso|máquina de arremesso]] e [[trabucos|trabuco]]. No Domingo de Páscoa, 15 de abril, os toulousanos fizeram uma saída sangrenta, que não mudou nada.",
        "Quarto, em maio chegaram reforços a Montfort, mas as barricadas de Saint-Cyprien resistiram. No fim do mês, uma tempestade fez o Garonne subir, e a água levou barricadas e pontes. Montfort ocupou o subúrbio e cortou parte dos suprimentos da cidade.",
        "Quinto, em 2 de junho, Montfort tentou atrair as tropas da cidade para fora, mas o conde de Foix evitou o desastre. Chegou o conde de Soissons com uma tropa, e Raymond VII entrou em Toulouse com a sua.",
        "Sexto, em 3 de junho, os cruzados trouxeram um [[gato de cerco]] para chegar à muralha, e um trabuco da cidade o destruiu. Em 25 de junho, os toulousanos saíram para queimar uma máquina de cerco. Conforme a fonte, era um gato ou uma torre de madeira.",
        "Sétimo, no contra-ataque, Simon viu o irmão Guy em perigo e foi ajudá-lo. Uma pedra lançada de dentro da cidade o atingiu na cabeça e o matou na hora. As fontes divergem sobre o detalhe: Guy teria sido ferido por uma flecha de [[besta]], ou teria perdido o cavalo. Segundo a crônica, a máquina parece ter sido operada por mulheres e meninas.",
        "Oitavo, Amaury assumiu o comando, mas o moral desabou, e os cruzados de Soissons foram embora ao fim do serviço. Houve um último assalto em 1º de julho. Por conselho de Guy e dos barões, Amaury levantou o cerco em 25 de julho.",
        { note: "A data da morte de Montfort varia: 25 de junho, para a maioria das fontes, mas alguns autores dão 29. E a pedra: veio de um trabuco ou de uma máquina de arremesso menor, conforme a fonte. Os detalhes mudam, e a cena é sempre a mesma." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória de Toulouse. Os cruzados perderam seu melhor general, e os Montfort não puderam mais avançar sobre as terras de Raymond. Amaury foi perdendo terreno. Em 1219, o príncipe Luís, o futuro Luís VIII, interveio, tomou Marmande, onde a população foi massacrada, mas fracassou diante de Toulouse. Amaury acabou cedendo seus direitos ao rei.",
        "A vitória de Toulouse, porém, só adiou o fim. Em 1226, Luís VIII liderou outra cruzada, e os territórios de Béziers, Albi e Carcassona foram anexados ao reino. Em 1229, o Tratado de Paris manteve Raymond VII no condado, mas casou a filha dele com Afonso de Poitiers, irmão do rei, e Toulouse passaria à Coroa. O condado foi para Afonso em 1249 e voltou definitivamente à Coroa em 1271.",
        { h: "Por que importa" },
        "Toulouse é um exemplo de como uma cidade bem defendida, com a população do seu lado, pode deter um exército de cruzados. Mas foi só um respiro: a [[occitânia]] não voltou a ser independente.",
        { h: "Curiosidades e controvérsias" },
        { note: "A cena inspirou o [[trovador]] Raimon Escrivan, que escreveu um [[tenso]], um debate em versos, em que o trabuco vence o gato." },
        { note: "Para o cerco, as principais fontes são a crônica de Guilherme de Puylaurens e os trabalhos de Sumption, Marvin e Roquebert." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  muret: {
    terrain: [
      { t: "sea", x: 0, y: 63, w: 100, h: 7, l: "Rio Garonne" },
      { t: "note", x: 20, y: 5, l: "Esquema: as posições exatas não são conhecidas" }
    ],
    units: [
      { id: "town", s: "a", k: "camp", w: 18, h: 6, l: "Muret (infantaria cruzada)" },
      { id: "cBar", s: "a", k: "cav", w: 9, h: 4, l: "Barres e Contres" },
      { id: "cMar", s: "a", k: "cav", w: 9, h: 4, l: "Bouchard de Marly" },
      { id: "cSim", s: "a", k: "cav", w: 9, h: 4, l: "Montfort (terceiro esquadrão)" },
      { id: "bMil", s: "b", k: "inf", w: 26, h: 4, l: "Milícia de Toulouse" },
      { id: "bFoix", s: "b", k: "cav", w: 14, h: 4, l: "Conde de Foix" },
      { id: "bPed", s: "b", k: "cav", w: 14, h: 4, l: "Pedro II e aragoneses" },
      { id: "bRay", s: "b", k: "cav", w: 14, h: 4, l: "Raymond VI e Comminges" }
    ],
    steps: [
      { t: "Pedro II cerca Muret: a milícia de Toulouse ataca as muralhas, e os cavaleiros aliados esperam atrás, em linhas. Montfort entrou na vila à noite com seus cavaleiros.",
        p: { town: [86, 57], cBar: [62, 57], cMar: [52, 57], cSim: [42, 57], bMil: [70, 47], bFoix: [40, 30], bPed: [52, 23], bRay: [64, 16] } },
      { t: "Montfort sai com os cavaleiros em três esquadrões, fora da vista dos sitiantes, e atravessa um riacho. A infantaria fica guardando a vila.",
        p: { cBar: [36, 46], cMar: [26, 50], cSim: [16, 54] } },
      { t: "O primeiro esquadrão bate de frente na linha do conde de Foix, que cede.",
        p: { cBar: [40, 35], bFoix: [38, 26] }, x: ["bFoix"] },
      { t: "A segunda linha dos cruzados entra na brecha e enfrenta a linha de Pedro. Os cruzados repetem as cargas e mantêm a formação.",
        p: { cMar: [52, 29], bPed: [54, 22] } },
      { t: "Montfort, com o terceiro esquadrão, dá a volta e ataca o flanco dos aliados.",
        p: { cSim: [70, 26], bRay: [68, 14] } },
      { t: "Pedro II morre. A cavalaria aliada se desfaz e foge. Raymond VI, segundo alguns relatos, sai sem lutar.",
        p: { bPed: [58, 18], bRay: [82, 6] }, x: ["bPed", "bRay"] },
      { t: "Os dois primeiros esquadrões perseguem os fugitivos. Montfort volta ao campo com o terceiro.",
        p: { cBar: [34, 14], cMar: [48, 14], cSim: [68, 38] } },
      { t: "Montfort cai sobre a milícia de Toulouse, em campo aberto. A milícia foge para o Garonne, e muitos morrem ou se afogam.",
        p: { cSim: [68, 52], bMil: [62, 60] }, x: ["bMil"] }
    ]
  },

  toulouse: {
    terrain: [
      { t: "sea", x: 0, y: 34, w: 100, h: 6, l: "Rio Garonne" },
      { t: "note", x: 24, y: 5, l: "Esquema: posições aproximadas" }
    ],
    units: [
      { id: "tCity", s: "a", k: "camp", w: 30, h: 8, l: "Toulouse (muralhas refeitas)" },
      { id: "tFoix", s: "a", k: "inf", w: 12, h: 4, l: "Foix e Comminges" },
      { id: "tSub", s: "a", k: "inf", w: 14, h: 4, l: "Barricadas de Saint-Cyprien" },
      { id: "tEng", s: "a", k: "inf", w: 12, h: 4, l: "Máquinas de arremesso" },
      { id: "mGuy", s: "b", k: "inf", w: 12, h: 4, l: "Guy de Montfort" },
      { id: "mSim", s: "b", k: "cav", w: 12, h: 4, l: "Simon de Montfort" },
      { id: "mCat", s: "b", k: "inf", w: 10, h: 4, l: "Gato de cerco" },
      { id: "mRei", s: "b", k: "inf", w: 12, h: 4, l: "Reforços (Soissons, Artois, Inglaterra)" }
    ],
    steps: [
      { t: "Setembro de 1217. Raymond VI volta a Toulouse. Os moradores refazem as muralhas. Guy de Montfort ataca perto da porta Montoulieu, mas o conde de Foix o repele.",
        p: { tCity: [50, 20], tFoix: [28, 28], tSub: [30, 52], tEng: [56, 30], mGuy: [20, 14], mSim: [90, 12], mCat: [88, 24], mRei: [92, 48] } },
      { t: "Outubro. Simon chega. Seus homens são poucos para cercar toda a cidade, e o conde de Comminges rechaça seu assalto. O cerco será longo.",
        p: { mSim: [78, 14], mGuy: [24, 13] } },
      { t: "Montfort toma o subúrbio de Saint-Cyprien, do outro lado do rio, mas reforços catalães e aragoneses chegam e os toulousanos o retomam.",
        p: { mGuy: [30, 50], tSub: [44, 52] } },
      { t: "No inverno, os dois lados constroem máquinas. Em 15 de abril de 1218, os toulousanos fazem uma saída sangrenta que não muda nada.",
        p: { tFoix: [74, 28], tEng: [56, 30], mSim: [80, 14] } },
      { t: "Em maio, chegam reforços a Montfort. No fim do mês, uma cheia do Garonne leva as barricadas, e ele ocupa Saint-Cyprien e corta parte dos suprimentos.",
        p: { mRei: [80, 16], mGuy: [46, 50], tSub: [24, 54] }, x: ["tSub"] },
      { t: "Em 3 de junho, um trabuco da cidade destrói um gato de cerco que se aproximava da muralha.",
        p: { mCat: [72, 22] }, x: ["mCat"] },
      { t: "Em 25 de junho, os toulousanos saem para queimar uma máquina de cerco. Simon corre para ajudar o irmão Guy. Uma pedra lançada de dentro da cidade o mata.",
        p: { tFoix: [74, 28], mSim: [80, 20] }, x: ["mSim"] },
      { t: "Amaury assume o comando, mas o moral cai. Houve um último assalto em 1º de julho. Em 25 de julho, ele levanta o cerco.",
        p: { mRei: [92, 10], mGuy: [96, 14] }, x: ["mRei", "mGuy"] }
    ]
  }
});
