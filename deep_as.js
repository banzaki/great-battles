// In-depth battles, batch as: pavia, arcole, rivoli, marengo, magenta (regional pack, part D: northern Italy).
// Checked against the English, French, Italian and Portuguese Wikipedia articles on the Battles of Pavia, Arcole, Rivoli,
// Marengo and Magenta, the article on the Convention of Alessandria, and the works those pages cite. Where sources
// disagree (force sizes, casualties, times, who did what) the text gives the range and says so.
// Artillery is drawn as infantry blocks with an "Artilharia" label (unit_kinds.js is not edited here).

Object.assign(GLOSSARY, {
  "suíços": "Mercenários da Suíça, famosos no começo do século 16 como piqueiros, que lutavam em blocos fechados.",
  "bandas negras": "Nome das tropas mercenárias de infantaria, alemãs e italianas, a serviço da França em Pavia.",
  "sortida": "Saída repentina dos defensores de uma cidade cercada para atacar os sitiantes.",
  "tratado de madri": "Acordo de 1526 pelo qual Francisco I, preso, comprou a liberdade prometendo abrir mão de territórios, entre eles a Borgonha. Depois de solto, ele o renegou.",
  "dique": "Muro de terra que contém um rio ou um canal. Em terreno de brejo, era muitas vezes o único caminho firme, e um exército que o seguia ia em coluna estreita.",
  "demi-brigada": "Unidade de infantaria da França revolucionária, formada pela fusão de soldados profissionais e voluntários. Fazia o papel do antigo regimento.",
  "ponte de barcas": "Ponte feita de barcos ou pontões amarrados lado a lado, com tábuas por cima. Os engenheiros do exército a montavam em poucas horas.",
  "guias": "Pequena escolta de cavalaria que acompanhava Bonaparte e levava as ordens dele na Itália, em 1796.",
  "desfiladeiro": "Passagem estreita entre montanhas ou ao longo de um rio, onde as tropas só avançam em coluna fina. Quem a segura controla a entrada.",
  "primeiro cônsul": "Título de Napoleão Bonaparte de 1799 a 1804, quando a França era uma república governada por três cônsules. Na prática, só ele decidia.",
  "guarda consular": "Tropa de elite que protegia os cônsules da França. Em Marengo, foi usada como reserva do Primeiro Cônsul e engajada em combate.",
  "convenção de alessandria": "Acordo de cessar-fogo assinado um dia depois de Marengo. Os austríacos entregaram as fortalezas do Piemonte, da Ligúria e da Lombardia e recuaram até o rio Mincio.",
  "naviglio grande": "Grande canal navegável que liga o rio Ticino a Milão. Em 1859, suas pontes eram a passagem obrigatória entre os dois exércitos.",
  "zuavos": "Infantaria francesa criada na Argélia, com uniforme de inspiração árabe: calça larga, colete curto e fez vermelho. Houve zuavos na Guarda Imperial de Napoleão III."
});

Object.assign(DEEP, {
  pavia: {
    war: "Guerra Italiana de 1521–1526 (Francisco I da França contra Carlos V)",
    hook: "Numa única manhã, o rei da França perdeu o exército, o cavalo e a liberdade.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Desde 1494, França e Espanha brigavam pela Itália, a região mais rica da Europa. O prêmio principal era o ducado de Milão. Em 1515, o jovem Francisco I da França tinha tomado Milão depois de vencer os suíços em Marignano. Mas em 1519 o rival dele, Carlos de Habsburgo, rei da Espanha, foi eleito imperador do Sacro Império, e a França ficou cercada por terras de Carlos: Espanha, Países Baixos, Alemanha e Nápoles.",
        "A guerra recomeçou em 1521, e os franceses foram expulsos de Milão. Em 1523, o condestável de Bourbon, um dos maiores nobres da França, brigou com Francisco e passou para o lado do imperador. Em outubro de 1524, Francisco atravessou os Alpes com um grande exército, retomou Milão e foi cercar Pavia, onde Antonio de Leyva resistia com a guarnição imperial.",
        { h: "O inverno diante de Pavia" },
        { timeline: [
          ["1515", "Francisco I vence os suíços em Marignano e toma Milão."],
          ["1519", "Carlos de Habsburgo é eleito imperador."],
          ["Out. de 1524", "Francisco retoma Milão e cerca Pavia."],
          ["Antes da batalha", "O duque de Albany sai com parte do exército francês rumo a Nápoles. Cerca de 5.000 suíços grisões vão embora para defender seus cantões."],
          ["Jan. de 1525", "Georg von Frundsberg chega com lansquenetes. O exército imperial de socorro se junta."],
          ["21 fev. 1525", "O conselho de guerra imperial decide atacar."]
        ]},
        "Os dois exércitos passaram o inverno a poucos quilômetros um do outro. Francisco acampou a maior parte de seus homens no parque de Mirabello, uma antiga reserva de caça dos duques de Milão, murada e cheia de bosques, ao norte de Pavia. Dali, ele ficava entre a cidade sitiada e o exército que vinha socorrê-la. Mas o dinheiro dos dois lados acabava, e quem não pagasse as tropas mercenárias via o exército se desfazer."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Francisco I, 30 anos" },
        "O rei da França era um rei-cavaleiro, ao estilo do século 16: gostava de lutar à frente de seus nobres e queria Milão a qualquer preço. Com o exército já dividido (Albany a caminho de Nápoles, os grisões em casa), ele ainda assim decidiu ficar diante de Pavia.",
        { h: "Os chefes imperiais" },
        "Charles de Lannoy, vice-rei de Nápoles, era o comandante geral. O marquês de Pescara, Fernando de Ávalos, chefiava os espanhóis e foi o mais firme a favor de atacar: segundo o relato tradicional, ele disse que ali a batalha era o único caminho. Georg von Frundsberg liderava os lansquenetes alemães, e o próprio Bourbon, o nobre francês que passara para o lado do imperador, estava no exército imperial. Alfonso de Ávalos, marquês de Vasto, primo de Pescara, comandou os arcabuzeiros que abriram o ataque. Antonio de Leyva, dentro de Pavia, aguentava havia meses.",
        { h: "Os franceses de nome" },
        "Entre os nobres do exército de Francisco estavam La Palice, Bonnivet, La Trémoille, Anne de Montmorency e Richard de la Pole, o último pretendente da casa de York ao trono inglês, que vivia exilado na corte francesa. A maioria deles morreu naquela manhã ou foi capturada."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes não concordam. Os números mais citados dão cerca de 26.000 franceses, entre eles uns 8.000 [[suíços]], cerca de 9.000 mercenários alemães e italianos (as [[bandas negras]] e lansquenetes a serviço da França), uns 6.000 franceses a pé e uns 2.000 [[gendarmes]]. Do lado imperial, havia um exército de socorro de cerca de 22.000 homens, entre eles uns 12.000 [[lansquenetes]], 5.000 espanhóis e 3.000 italianos, mais cavalaria, e a guarnição de Pavia, de 6.000 a 9.000. Há ainda uma lacuna que os historiadores não explicam bem: Francisco chegou à Itália com mais de 40.000 homens, e meses depois só tinha uns 26.000.",
        { note: "Os números de perdas também variam muito. Os franceses perderam entre 8.000 e 15.000 homens entre mortos, feridos e prisioneiros, e os imperiais entre 1.000 e 1.500, segundo as estimativas modernas." },
        { h: "O terreno" },
        "O parque de Mirabello era um retângulo murado, com bosques, regatos, fazendas e, no meio, um castelo. Os franceses acampavam nele, e partes do exército (como os suíços de Montmorency) cuidavam das linhas de cerco, entre o parque e as muralhas. Dentro do parque, a luta seria no meio de árvores e valas, e não em campo aberto.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na noite de 23 para 24 de fevereiro, o exército imperial deixou o acampamento a leste do parque e marchou para o norte, ao longo do muro. As fontes não concordam sobre o disfarce. Alguns relatos dizem que a artilharia imperial bombardeou as linhas de cerco para distrair os franceses, e outros que os imperiais incendiaram as próprias tendas para parecer que recuavam. Engenheiros abriram brechas no muro do parque, perto de San Genesio. Os autores discutem se foi no muro leste ou no norte, e relatos posteriores falam em três aberturas.",
        "Segundo, por volta das 5 horas, cerca de 3.000 arcabuzeiros de Vasto entraram pelas brechas e avançaram até o castelo de Mirabello, que tomaram por volta das 6 e meia. A cavalaria ligeira imperial se espalhou pelo parque para cortar o caminho dos franceses.",
        "Terceiro, a infantaria francesa reagiu. Os suíços, sob Robert de La Marck, tomaram uma bateria espanhola, mas esbarraram em cerca de 6.000 lansquenetes de Frundsberg. Por volta das 7 horas, havia uma batalha de infantaria perto da brecha. Ao mesmo tempo, Lannoy, os espanhóis de Pescara e a cavalaria pesada imperial avançaram pelos bosques a oeste, para chegar mais perto de Francisco.",
        "Quarto, uma bateria francesa viu a manobra de Pescara por volta das 7h20. Francisco, em vez de esperar, liderou os gendarmes numa carga contra a cavalaria de Lannoy, que era menos numerosa, e por volta das 7h40 a dispersou.",
        "Quinto, e foi aí que a batalha virou: a carga afastou o rei da sua infantaria e escondeu a artilharia francesa, que não podia mais atirar sem acertar os próprios cavaleiros. Pescara, que ficou com o comando da infantaria espanhola, reuniu os homens na borda do bosque e pediu ajuda.",
        "Sexto, Frundsberg destroçou os suíços que o enfrentavam. Os chefes franceses não conseguiram manter seus homens juntos, e a infantaria começou a fugir. As bandas negras foram cercadas e destruídas pelos piqueiros de Frundsberg.",
        "Sétimo, por volta das 8 horas, a cavalaria imperial cercou os gendarmes nos bosques, e eles foram mortos aos poucos. La Palice, Bonnivet, La Trémoille e Richard de la Pole morreram. O cavalo do rei foi morto sob ele. Depois de uma luta longa, Francisco foi capturado.",
        "Oitavo, Leyva abriu os portões de Pavia e fez uma [[sortida]]: seus homens atacaram pela retaguarda os cerca de 3.000 suíços de Montmorency, que guardavam as linhas de cerco, e os dispersaram. Os sobreviventes suíços fugiram pelo rio, com muitas perdas. A retaguarda do duque de Alençon não chegou a lutar. Quando soube o que tinha acontecido, ele recuou em direção a Milão. Por volta das 9 horas, tudo tinha acabado.",
        { h: "Quem prendeu o rei?" },
        "Vários homens disputaram a honra. A lista inclui Lannoy, que teria se ajoelhado diante de Francisco, os soldados Alonso Pita da Veiga, Juan de Urbieta e Diego Dávila, um conde alemão chamado Salm, o italiano Cesare Hercolani e dois franceses do séquito de Bourbon, que podem ter convencido o rei a se render. Um decreto de Carlos V de 1529 premiou um grupo que incluía Pita da Veiga, e não uma só pessoa."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A França perdeu o exército de campanha e boa parte de sua alta nobreza: Montmorency e Robert de La Marck foram capturados, e os outros nomes citados acima morreram. O duque de Alençon voltou aos Alpes com o que sobrou, e Albany perdeu a maior parte da tropa por desgaste e deserções e voltou à França sem chegar a Nápoles.",
        "Francisco foi levado para a torre de Pizzighettone, de onde escreveu à mãe, Luísa de Saboia. A frase que ficou famosa, 'tudo está perdido, menos a honra', é um resumo. A carta diz algo como: de todas as coisas, só me restaram a honra e a vida, que está a salvo. Depois ele foi levado para a Espanha, passando por Gênova, e ficou preso numa torre de Madri.",
        { h: "O Tratado de Madri" },
        "Em 1526, Francisco comprou a liberdade com o [[tratado de madri]]. As fontes divergem sobre a lista exata, mas a Borgonha estava nela, e ele também renunciou a pretensões na Itália e em Flandres. Seus dois filhos mais velhos ficaram como reféns na Espanha. Assim que cruzou a fronteira, o rei declarou o tratado inválido, com o argumento de que fora assinado sob coação. Começou uma nova guerra, a da Liga de Cognac.",
        { h: "Por que importa" },
        "Pavia deixou Carlos V em vantagem na Itália e acabou com a ideia de que a França tomaria Milão à força. A rivalidade entre Francisco e Carlos, porém, continuou, e as Guerras Italianas só terminaram em 1559.",
        { h: "Curiosidades e controvérsias" },
        { note: "O local: o parque de Mirabello não existe mais. Ficam o castelo de Mirabello, o parque de Vernavola e a fazenda de Repentita, onde dizem que Francisco foi capturado." },
        { note: "A arte: a vitória virou tema de uma série de sete tapeçarias de Bruxelas, feitas a partir de desenhos de Bernard van Orley e dadas a Carlos V em 1531, e de um camafeu de cristal de rocha de Giovanni Bernardi." },
        { note: "Os números: até hoje, os historiadores discutem o tamanho dos exércitos e das perdas, porque as fontes não concordam, e os números mudam conforme o autor." }
      ]}
    ]
  },

  arcole: {
    war: "Campanha da Itália de Bonaparte (1796–1797)",
    hook: "Três dias de luta por uma ponte estreita entre brejos fizeram de um general de 27 anos um herói.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1796, a França revolucionária estava em guerra com quase toda a Europa. Napoleão Bonaparte, aos 26 anos, recebeu o comando do Exército da Itália, pobre e mal equipado, e em poucos meses empurrou os austríacos para fora do Piemonte e da Lombardia. Só uma coisa ainda segurava os austríacos na região: Mântua, a fortaleza cercada por trás de lagos e pântanos, onde o marechal Wurmser resistia com uma grande guarnição.",
        "A Áustria já tinha tentado socorrer Mântua duas vezes, e Bonaparte vencera as duas. A terceira tentativa, comandada por József Alvinczi, desceu em novembro de 1796 em duas frentes. Paul Davidovich vinha dos Alpes, pelo vale do Adige, e Alvinczi vinha do leste. Davidovich bateu o general Vaubois, e Alvinczi venceu os franceses em Bassano e em Caldiero.",
        { h: "O caminho até Arcole" },
        { timeline: [
          ["Início de nov. 1796", "Davidovich vence Vaubois no norte. Alvinczi desce do leste."],
          ["6 e 12 nov.", "Alvinczi vence os franceses em Bassano e em Caldiero."],
          ["14 nov., à noite", "Bonaparte deixa Verona, atravessa o Adige em Ronco e marcha para atingir a retaguarda de Alvinczi."],
          ["15 a 17 nov.", "Os três dias de Arcole."]
        ]},
        "Bonaparte estava em desvantagem e sabia disso. Em vez de esperar, resolveu arriscar uma manobra: atravessar o Adige em Ronco, para contornar o flanco esquerdo de Alvinczi e atingir sua retaguarda. Era um terreno de brejos, valas e canais, onde só se andava em colunas estreitas e onde os austríacos, em maior número, não podiam usar toda a sua força."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão Bonaparte, 27 anos" },
        "Tinha vencido quase toda a campanha, mas acabava de perder em Caldiero, e sabia que uma derrota ali podia acabar com tudo. A estratégia dele foi sempre a mesma: usar a velocidade para bater o inimigo por partes, antes que ele se juntasse. Em Arcole, o plano não deu certo no primeiro dia, e ele teve de improvisar por três dias.",
        { h: "Os generais" },
        "Pierre Augereau comandava o ataque à ponte de Arcole, e André Masséna cuidava da outra ponta, contra os reforços austríacos que vinham de Caldiero. Jean Lannes foi ferido duas vezes logo no começo. O general Vaubois, com cerca de 8.000 a 10.500 homens, ficou no norte para segurar Davidovich.",
        { h: "József Alvinczi" },
        "O comandante austríaco, de mais de 60 anos, era um militar experiente. Seu plano dependia de duas forças que agiam longe uma da outra, e Bonaparte aproveitou isso. Wurmser, dentro de Mântua, quase não se mexeu durante a batalha, e a razão é desconhecida."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A França tinha cerca de 19.000 a 20.000 homens no campo (sem contar os de Vaubois), e a Áustria cerca de 23.000 a 24.000. Os números mudam de uma fonte para outra, e os historiadores nem sempre concordam entre si.",
        { h: "O terreno" },
        "Uma região de planície baixa, cortada por rios (o Adige e o Alpone), canais e [[diques|dique]] altos, rodeada de brejos. O único jeito de andar era em cima dos diques, em fila estreita, ou por poucas pontes. Em Arcole, uma ponte sobre o Alpone, ao lado do povoado, era o ponto que o exército francês precisava tomar, e os austríacos que defendiam o povoado a varriam de fogo.",
        { h: "Os três dias" },
        { formation: true },
        "Primeiro, ao amanhecer de 15 de novembro, os engenheiros de Andréossy deixaram pronta uma [[ponte de barcas]] sobre o Adige, em Ronco, e as divisões atravessaram. Bonaparte as mandou por dois diques: Augereau pelo do Alpone, em direção à ponte de Arcole, e Masséna pelo lado oposto, contra a estrada de Caldiero.",
        "Segundo, a coluna de Augereau chegou à ponte e foi repelida por fogo cerrado. Vários generais franceses foram feridos, entre eles Lannes. Os ataques sucessivos, em coluna estreita, esbarravam todos na mesma barreira.",
        "Terceiro, aqui entra a cena que virou lenda. Segundo a tradição, Augereau pegou uma bandeira e correu à frente, mas os soldados não o seguiram. Bonaparte pegou outra e correu para a ponte; uma gravura da cena o mostra a umas 55 passadas dela. A coluna foi repelida pelo fogo de flanco, os granadeiros o carregaram para trás, e ele acabou numa vala lamacenta, de onde foi puxado. O ajudante Jean-Baptiste Muiron morreu protegendo o general com o corpo. Lannes, ferido, também o teria coberto.",
        "Quarto, a oeste, Masséna enfrentou colunas austríacas que desciam de Caldiero e as empurrou até Belfiore. O general Guieu atravessou o Adige de barco, em Albaredo, e chegou a tomar Arcole, mas à meia-noite Bonaparte o chamou de volta, com medo de que Davidovich atacasse por trás.",
        "Quinto, no segundo dia, 16 de novembro, os austríacos de Provera atacaram a partir de Belfiore, mas bateram em Masséna, e o general Brabeck morreu. Mittrowsky e Augereau lutaram em vai e vem, e os austríacos ficaram em Arcole. Ao cair da noite, Bonaparte recuou.",
        "Sexto, no terceiro dia, 17 de novembro, Alvinczi puxou parte das tropas de volta para Caldiero. Os engenheiros franceses fizeram uma segunda ponte sobre o Alpone, perto da foz, e Augereau atravessou por ela. Um ataque no dique do oeste, sob o general Robert, falhou.",
        "Sétimo, por volta das 15 horas, uma grande coluna austríaca empurrou os franceses para trás, e Augereau recuou. Masséna então a emboscou no dique do oeste.",
        "Oitavo, por volta das 17 horas, Masséna e Augereau entraram em Arcole. Um tenente e 25 guias a cavalo, mandados por Bonaparte, apareceram atrás dos austríacos soprando trombetas, para fazer parecer que havia uma tropa grande à retaguarda. Uma retaguarda austríaca sob Schübirz segurou os franceses o suficiente para a divisão de Provera escapar para o leste.",
        { note: "Há versões diferentes de um truque parecido: em algumas, são tambores e trombetas mandados por trás das linhas austríacas, e em outras, só os guias a cavalo. As fontes não concordam sobre os detalhes." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A França perdeu cerca de 3.500 mortos e feridos, mais uns 1.300 capturados ou desaparecidos. A Áustria perdeu cerca de 2.200 mortos e feridos, mais uns 4.000 prisioneiros e 11 canhões. As fontes diferem em alguns números.",
        "No dia 17, enquanto os franceses lutavam em Arcole, Davidovich atacou Vaubois em Rivoli e o derrotou. Bonaparte voltou-se contra ele, e Davidovich recuou, perdendo ainda uns 1.500 homens e nove canhões. Alvinczi voltou para Caldiero. Em 23 de novembro, Wurmser tentou uma sortida de Mântua, mas voltou ao saber que Davidovich recuava.",
        { h: "Por que importa" },
        "Arcole não foi uma vitória decisiva: Mântua continuou cercada, e os austríacos voltaram em janeiro. Mas ela fez de Bonaparte um herói popular na França, porque artistas e jornais transformaram a cena da bandeira numa imagem de coragem. Antoine-Jean Gros pintou o quadro 'Bonaparte na ponte de Arcole' por volta de 1796. Os historiadores veem nela o começo da lenda napoleônica.",
        { h: "Curiosidades e controvérsias" },
        { note: "A bandeira: não se sabe ao certo quem pegou qual bandeira, nem quando. Há quem diga que Augereau foi o primeiro, e outros atribuem o gesto só a Bonaparte. A bandeira que Bonaparte teria levado era quase branca, com o desenho de losangos da 5ª demi-brigada, o que não era comum numa bandeira francesa da época." },
        { note: "O nome de Muiron: uma fragata recebeu o nome do ajudante morto em Arcole. Foi nela que Bonaparte voltou do Egito, em 1799." },
        { note: "Os números: as fontes diferem sobre o tamanho dos exércitos (de 18.000 a 20.000 franceses e de 23.000 a 24.000 austríacos) e sobre as perdas." }
      ]}
    ]
  },

  rivoli: {
    war: "Campanha da Itália de Bonaparte (1796–1797)",
    hook: "Um exército austríaco desceu a montanha em colunas separadas, e Bonaparte as derrotou uma a uma.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Arcole, Mântua continuava cercada, e a Áustria não desistiu. Em janeiro de 1797, mandou uma quarta ofensiva, de novo sob József Alvinczi, para libertar o marechal Wurmser. Dessa vez, o plano era descer em força pelas montanhas a leste do lago de Garda, esmagar a divisão do general Joubert no platô de Rivoli e chegar à planície aberta, onde o número austríaco pesaria mais.",
        "Bonaparte, com um exército bem menor, tinha espalhado suas divisões: Joubert em Rivoli, Masséna em reserva em Verona, Augereau ao sul, perto de Ronco, e Rey na margem oeste do lago. Em 8 de janeiro, Alvinczi fez ataques menores e empurrou Augereau até Legnago. Em 12 de janeiro, atacou Joubert em Rivoli. Ao mesmo tempo, outras forças austríacas pressionavam Verona e Legnago. Ao saber dos ataques, Bonaparte mandou Masséna e Rey para Rivoli.",
        { h: "O caminho até Rivoli" },
        { timeline: [
          ["8 jan. 1797", "Alvinczi faz ataques menores e empurra Augereau até Legnago."],
          ["12 jan.", "Joubert é atacado em Rivoli. Outras forças austríacas pressionam Verona e Legnago. Bonaparte manda Masséna e Rey para Rivoli."],
          ["14 jan., 2h", "Bonaparte chega a Rivoli com parte da divisão de Masséna."],
          ["14 jan., 6h", "A batalha começa."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão Bonaparte, 27 anos" },
        "Em Rivoli, mostrou aquilo que o tornaria famoso: concentrar a força no ponto certo, no momento certo. Soube usar a artilharia no estreito do Adige, e manter uma reserva, enquanto o inimigo estava dividido em colunas.",
        { h: "Barthélemy Joubert" },
        "Jovem general que segurou o platô de Rivoli até a chegada de Bonaparte. Com cerca de 10.000 homens, enfrentou o primeiro choque e depois conduziu o contra-ataque no centro. Foi ele quem Bonaparte deixou no comando de Rivoli quando partiu para o sul.",
        { h: "Os outros nomes" },
        "André Masséna chegou com a 18ª [[demi-brigada]] a tempo de conter a coluna de Lusignan. Charles Leclerc e Antoine de Lasalle comandaram a cavalaria no [[desfiladeiro]]. Joachim Murat, na cavalaria, atacou o flanco da coluna central. Do lado austríaco, Peter Quosdanovich comandava a coluna com artilharia, que devia tomar o desfiladeiro, e Franz Joseph de Lusignan tentava cercar os franceses por trás."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números mais usados são cerca de 22.000 franceses e 28.000 austríacos. Outros textos dão números maiores para os dois lados. A divisão de Joubert tinha cerca de 10.000 homens antes dos reforços.",
        { h: "O terreno" },
        "O platô de Rivoli fica sobre o vale do Adige, ao pé do monte Baldo. O rio corre num desfiladeiro estreito ao norte, e a estrada que sobe por ele era o caminho natural das tropas austríacas. A capela de San Marco e as colinas de Trombalora dominam o platô pelo norte. Quem segurasse as alturas e o desfiladeiro controlava o acesso à planície.",
        { h: "Como Alvinczi dividiu o exército" },
        "Alvinczi atacou em várias colunas (as fontes falam em cinco ou seis) que deviam chegar juntas. Três delas, as de Köblös, Lipthay e Ocskay, atacariam de frente, pelo norte, sem artilharia. A de Quosdanovich, com cerca de 7.000 homens e canhões, tomaria o desfiladeiro. Lusignan contornaria por oeste, pelo monte Baldo, e Vukassovich desceria pela margem leste do Adige. Colunas separadas por montanhas, rio e longas distâncias eram difíceis de coordenar.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na noite de 13 para 14 de janeiro, os franceses estavam em linha entre a capela de San Marco e as colinas de Trombalora. Bonaparte chegou às 2 da manhã, e as colunas austríacas convergiam pelo norte, pelo oeste e pela margem leste do rio.",
        "Segundo, por volta das 6 horas, Joubert contra-atacou para retomar San Marco. Cerca de 10.000 franceses, com 18 canhões, enfrentaram uns 12.000 austríacos de frente. Os austríacos aguentaram e ameaçaram cercar a capela, até as reservas de Masséna chegarem.",
        "Terceiro, os austríacos tomaram o monte Magnone e as alturas acima do desfiladeiro. Vukassovich, pela margem leste do Adige, forçou os franceses a sair de Osteria e os empurrou para o platô. A coluna de Lusignan, enquanto isso, chegou ao sul de Rivoli, ameaçando a retirada francesa. Por volta das 11 horas, os granadeiros austríacos ocuparam Osteria.",
        "Quarto, Bonaparte reduziu a força de Joubert na linha de frente para concentrar a artilharia perto do desfiladeiro. Quosdanovich subiu pelo desfiladeiro, mas uma bateria de 15 canhões, atirando [[metralha]] de perto, desfez os dragões austríacos, que correram por cima da própria infantaria.",
        "Quinto, duas carroças de munição austríacas explodiram, e a confusão foi grande. Leclerc e Lasalle, com cerca de 500 cavaleiros, retomaram o desfiladeiro. Segundo um relato famoso, Lasalle e 26 homens do 22º regimento de caçadores a cavalo capturaram um batalhão e cinco bandeiras. Quosdanovich viu que não passaria e recuou, fora do alcance dos canhões.",
        "Sexto, Ocskay empurrou por um tempo a brigada de Vial, no centro. Por volta do meio-dia, a cavalaria de Murat atingiu o flanco e fez a coluna recuar.",
        "Sétimo, contra Lusignan, a 18ª demi-brigada de Masséna aguentou, Brune atacou de frente, e a divisão de Rey, vinda de Castelnuovo, e a brigada de reserva de Victor chegaram a tempo. A coluna foi destruída e fugiu para o oeste com menos de 2.000 homens. Cerca de 3.000 foram capturados entre Masséna e Rey.",
        "Oitavo, por volta das 17 horas, Bonaparte soube que Provera ia cruzar o Adige em Angiari, perto de Mântua. Deixou Joubert no comando e partiu. No dia 15, Joubert, com Murat e Vial, derrotou as três colunas centrais em La Corona, cortando a retirada delas.",
        { note: "Um texto italiano atribui a Bonaparte, durante a batalha, a frase 'os temos na mão'. É uma frase reportada, e não documentada." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A França perdeu cerca de 3.200 mortos e feridos, mais uns 1.000 capturados (outros autores dão cerca de 5.000 no total). A Áustria perdeu uns 4.000 mortos e feridos e de 8.000 a 11.000 prisioneiros, mais 40 canhões, segundo as fontes. O total de baixas austríacas fica entre 12.000 e 14.300.",
        "Joubert e Rey perseguiram os restos até o vale do Adige. Bonaparte, por sua vez, foi ao sul: no dia 16, em La Favorita, perto de Mântua, Provera foi cercado e se rendeu. Wurmser, que tinha tentado uma sortida, voltou para a fortaleza.",
        { h: "Por que importa" },
        "Mântua se rendeu em 2 de fevereiro de 1797, e a guarnição saiu com as honras de guerra. Bonaparte avançou então sobre os Estados Pontifícios e obrigou o papa Pio VI a um acordo em Tolentino. Em outubro de 1797, a Áustria assinou a paz de Campo Formio. Rivoli foi, até então, a maior vitória de Bonaparte, e é estudada como exemplo de como derrotar um inimigo dividido em colunas.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: algumas fontes dão forças francesas de 22.000 a 34.000 e austríacas de 28.000 a 45.000. Usamos os números mais citados." },
        { note: "Nomes: a Rue de Rivoli, em Paris, foi batizada em homenagem à vitória, e Masséna recebeu mais tarde o título de duque de Rivoli." },
        { note: "As datas: a batalha principal foi em 14 de janeiro. Algumas fontes dão 14 e 15, porque no dia 15 houve a perseguição." }
      ]}
    ]
  },

  marengo: {
    war: "Segunda Campanha da Itália de Bonaparte (1800)",
    hook: "No meio da tarde, a batalha parecia perdida. À noite, era uma vitória.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em novembro de 1799, Napoleão Bonaparte tomou o poder na França e se tornou [[primeiro cônsul]]. Seu governo precisava de uma vitória, e a guerra continuava: a Áustria dominava o norte da Itália, e o exército francês de Masséna estava sitiado em Gênova.",
        "Na primavera de 1800, Bonaparte reuniu um Exército de Reserva e, em maio, o fez cruzar os Alpes pelo passo do Grande São Bernardo. Ele entrou em Milão em 2 de junho. Gênova se rendeu em 4 de junho. Em 9 de junho, Lannes derrotou uma força austríaca em Montebello. O general austríaco Michael von Melas, que tinha uns 30.000 homens, juntou-os em Alessandria.",
        { h: "O caminho até Marengo" },
        { timeline: [
          ["Mai. 1800", "O Exército de Reserva cruza os Alpes pelo Grande São Bernardo."],
          ["2 jun.", "Bonaparte entra em Milão."],
          ["4 jun.", "Gênova se rende aos austríacos."],
          ["9 jun.", "Lannes vence em Montebello."],
          ["13 jun.", "Os franceses expulsam uma brigada austríaca de Marengo."],
          ["14 jun.", "Melas ataca."]
        ]},
        "Bonaparte temia que Melas escapasse. Por isso, espalhou o exército numa rede larga: mandou Desaix, com a divisão de Boudet (de 6.000 a 9.000 homens, segundo a fonte), para o sul, em direção a Novi, e La Poype, com uns 3.500, para o norte, do outro lado do Pó. Foi um erro, e na manhã de 14 de junho ele ficou com cerca de 22.000 homens na planície."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão Bonaparte, 30 anos" },
        "Ele estava a uns cinco quilômetros do campo quando a batalha começou e só percebeu que o ataque era sério por volta das 10 horas. Chegou ao campo perto das 11. Era ainda um general em ascensão, e uma derrota ali teria pesado muito para quem tinha acabado de tomar o poder.",
        { h: "Louis Desaix, 31 anos" },
        "Um dos generais mais respeitados do exército francês. Tinha acabado de voltar do Egito, onde serviu com Bonaparte, e chegou ao exército poucos dias antes da batalha. Foi mandado para o sul na dispersão de tropas e chamado de volta quando a batalha começou.",
        { h: "Michael von Melas, 71 anos" },
        "O comandante austríaco era um veterano. Acreditou que a batalha estava essencialmente ganha antes da chegada de Desaix e, ferido de leve, deixou o comando ao chefe de [[estado-maior]], Zach, e a Kaim.",
        { h: "Os outros nomes" },
        "Do lado francês: Claude Victor e Jean Lannes, que seguraram o centro e a direita; François Kellermann, na cavalaria; Auguste de Marmont, que comandava a artilharia. Do lado austríaco: Ott, que comandava a coluna do norte, O'Reilly, ao sul, Hadik e Kaim, no centro, e Frimont, na cavalaria."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os franceses tinham cerca de 22.000 homens e 15 canhões de manhã; com Desaix chegaram a uns 28.000. Os austríacos tinham uns 30.000 e uns 100 canhões, mas Melas mandou cerca de 2.300 hussardos para o outro lado do Bormida, por causa de um relato errado sobre a aproximação de Suchet, e eles não participaram da luta.",
        { h: "O terreno" },
        "Uma planície aberta a leste de Alessandria, de campos, vinhedos e valas, com poucas elevações. O rio Bormida separava os austríacos da planície, e o riacho Fontanone, na frente da aldeia de Marengo, era a principal linha de defesa francesa. Castel Ceriolo, ao norte, e San Giuliano, ao sul, completavam o triângulo do campo.",
        { h: "A batalha em nove movimentos" },
        { formation: true },
        "Primeiro, por volta das 6 horas, os austríacos começaram a cruzar o Bormida por duas pontes. A passagem estreita atrasou a formação. Os primeiros tiros vieram por volta das 8, e o ataque estava completo às 9.",
        "Segundo, a divisão de Hadik atacou Marengo e foi parada por fogo vindo de dois lados. Hadik morreu. O ataque seguinte, de Kaim, foi detido por volta das 11.",
        "Terceiro, perto das 11 horas, Bonaparte chegou, chamou as unidades que estavam longe e jogou suas últimas reservas, incluindo a [[guarda consular]], no flanco direito. Por volta das 11h30, Ott tomou Castel Ceriolo e passou a pressionar essa direita francesa.",
        "Quarto, por volta das 12h30, os austríacos jogaram uma pequena ponte sobre o Fontanone, e os granadeiros de Lattermann atacaram Marengo. Victor não aguentou mais e recuou para os vinhedos, e Lannes o acompanhou.",
        "Quinto, por volta das 14 horas, Marengo caiu. Os franceses recuaram em direção a leste. Por volta das 16 horas, a cavalaria de Frimont destruiu a Guarda Consular num combate curto. Melas, ferido de leve, entregou o comando a Zach e a Kaim. A perseguição austríaca se espalhou, e uma parte foi caçar um destacamento de 300 franceses.",
        "Sexto, por volta das 17 horas (as fontes dão de pouco antes das 17 a 17h30), chegou Desaix com a divisão de Boudet. Segundo o relato tradicional, ele disse a Bonaparte que a batalha estava perdida, mas que ainda havia tempo de ganhar outra. A 9ª infantaria leve surpreendeu a ponta da coluna de Saint-Julien.",
        "Sétimo, os franceses recuaram para uma linha onde esperavam a brigada de Guénand e os canhões de Marmont. Os canhões atiraram [[metralha]] de perto, e uma carroça de munição austríaca explodiu. A divisão de Boudet derrotou a brigada de Saint-Julien, e Zach trouxe os granadeiros de Lattermann.",
        "Oitavo, Bonaparte mandou a cavalaria. Cerca de 400 cavaleiros pesados de Kellermann bateram no flanco dos granadeiros de Lattermann e os desfizeram. Desaix foi atingido por um tiro e caiu do cavalo. Murat e Kellermann desfizeram os dragões de Liechtenstein, e a infantaria austríaca se quebrou. Zach foi capturado com pelo menos 2.000 homens.",
        "Nono, os granadeiros de Weidenfeld e um pouco de cavalaria seguraram os franceses por um tempo. O'Reilly voltou, e com Frimont segurou a aldeia de Marengo até a noite, o que deu tempo ao centro austríaco de voltar ao Bormida. Ott, no norte, foi barrado em Castel Ceriolo e voltou lutando. Melas recuou para Alessandria.",
        { note: "Quem decidiu? Melas, em seu relatório, culpou a carga de Kellermann. Murat também a elogiou. O boletim do exército de Napoleão deu o mérito a Bessières e à Guarda. Os testemunhos não se acertam." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas francesas foram de cerca de 4.700 mortos e feridos, mais uns 900 desaparecidos ou capturados. As austríacas foram de cerca de 6.500 mortos e feridos, quase 8.000 prisioneiros, 15 bandeiras e 40 canhões. Outras fontes dão números um pouco diferentes. Desaix foi encontrado entre os mortos.",
        "Em 24 horas, Melas negociou. Pela [[convenção de alessandria]], os austríacos evacuaram o Piemonte e a Lombardia, entregaram suas fortalezas e recuaram até o rio Mincio. Foi um cessar-fogo, e não uma paz: a guerra recomeçou em novembro de 1800, e só terminou com a paz de Lunéville, em 1801.",
        { h: "Por que importa" },
        "Marengo salvou a posição política de Bonaparte, que ainda era frágil. Ele pôde se apresentar como o general que expulsou os austríacos do noroeste da Itália em poucas semanas, e quatro anos depois se tornou imperador.",
        { h: "Curiosidades e controvérsias" },
        { note: "A versão oficial: o boletim do exército e o relato de Berthier, de 1804, pintaram a batalha como um recuo planejado, que levava o inimigo para uma armadilha com Desaix em reserva. Isso é falso: Desaix tinha sido mandado para longe. Marmont, Coignet e outros que estavam lá descrevem uma quase derrota e um recuo até o rio Scrivia." },
        { note: "A frase de Desaix, 'esta batalha está perdida, mas ainda há tempo de ganhar outra', é uma frase reportada, e não confirmada." },
        { note: "Os números: o texto mais citado dá 6.500 mortos e feridos austríacos; outra tabela dá 9.402 de baixas no total. Para os franceses, de 5.600 a 7.000 no total. As fontes não se acertam." }
      ]}
    ]
  },

  magenta: {
    war: "Segunda Guerra de Independência Italiana (1859)",
    hook: "Uma ponte, um canal e um reforço que demorou a chegar decidiram a batalha que deu nome a uma cor.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em meados do século 19, a Itália era um conjunto de reinos e ducados, e a Lombardia e o Vêneto pertenciam à Áustria. O [[risorgimento]] era o movimento que queria unir o país. O reino da Sardenha, governado por Vítor Emanuel II e pelo primeiro-ministro Cavour, era seu motor, mas sozinho não vencia os austríacos. Cavour fechou então um acordo secreto com Napoleão III, imperador da França, em Plombières, em 1858.",
        "A guerra começou em abril de 1859, quando a Áustria deu um ultimato à Sardenha e atravessou o rio Ticino. O general austríaco Ferenc Gyulai se moveu devagar, e os franceses chegaram para reforçar os sardos. Em 30 e 31 de maio, venceram em Palestro. O exército austríaco recuou para trás do Ticino, a oeste de Milão.",
        { h: "O caminho até Magenta" },
        { timeline: [
          ["Abr. 1859", "A Áustria dá um ultimato à Sardenha e entra no Piemonte."],
          ["30–31 mai.", "Os aliados vencem em Palestro."],
          ["2–3 jun.", "Engenheiros franceses lançam uma ponte de barcas em Turbigo. O corpo de MacMahon começa a cruzar o Ticino."],
          ["4 jun.", "Batalha de Magenta."],
          ["8 jun.", "Napoleão III e Vítor Emanuel II entram em Milão."]
        ]},
        "Napoleão III, em vez de atacar de frente, mandou o grosso do exército para o norte, por Novara, e fez MacMahon cruzar o Ticino por Turbigo. A ideia era contornar o flanco direito de Gyulai e chegar a Milão. Gyulai tinha dividido suas forças, esperando um ataque pelo oeste ou mais ao sul, e foi pego com o grosso dos franceses vindo do norte."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão III, 51 anos" },
        "Sobrinho de Napoleão I, o imperador acompanhou o exército em pessoa. Ele ficou numa torre em San Martino, ouvindo o canhão, e acreditou que MacMahon já atacava. Historiadores o criticam por ter ficado passivo durante a tarde, quando seus homens estavam em perigo.",
        { h: "Patrice de MacMahon" },
        "General comandante do II Corpo. Seu atraso deixou a Guarda lutando sozinha por horas, mas seu ataque por volta das 16 horas decidiu a batalha. Naquela noite, Napoleão III o nomeou marechal da França e duque de Magenta.",
        { h: "Ferenc Gyulai" },
        "O comandante austríaco, de origem húngara, dividiu as forças e esperou o ataque em outro lugar. Depois de Magenta, foi substituído no comando em 16 de junho.",
        { h: "Os outros nomes" },
        "Do lado francês, o general Mellinet comandava a divisão de granadeiros da Guarda, e Espinasse, uma divisão do II Corpo. Canrobert, Niel e Vinoy trouxeram reforços. Do lado austríaco, Clam-Gallas, Liechtenstein, Schwarzenberg e Reischach comandavam os corpos e divisões."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números mais usados dão cerca de 54.000 franceses (mais uns 12.000 piemonteses, que quase não lutaram) e cerca de 58.000 austríacos em combate, de um total de uns 68.000. Outros autores dão números mais próximos entre si, cerca de 64.000 para cada lado. A artilharia austríaca tinha mais de 150 canhões, contra uns 87 dos aliados.",
        { h: "O terreno" },
        "Uma planície baixa entre o Ticino e Milão, cortada por canais e arrozais, com pomares e regatos. O [[naviglio grande]] corre de norte a sul, e suas pontes eram a passagem obrigatória. A região favorecia quem defendia, porque o espaço para manobrar era pouco e as casas viraram pequenos fortes.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na manhã de 4 de junho, MacMahon saiu da cabeça de ponte de Turbigo em duas colunas: a de Espinasse, rumo a Marcallo, e a de La Motte-Rouge, rumo a Boffalora. Os austríacos, sob Clam-Gallas, estavam dispostos num triângulo entre Magenta, Marcallo e Boffalora.",
        "Segundo, por volta das 13 e 14 horas, a divisão de granadeiros de Mellinet, da Guarda, atacou a partir do oeste, em direção às pontes do canal. Os austríacos explodiram a Ponte Vecchio e a ponte da ferrovia, e só a Ponte Nuovo ficou em pé. O II Corpo austríaco, de Liechtenstein, defendia o canal a partir de casas de campo.",
        "Terceiro, às 14 horas, os [[zuavos]] da Guarda cruzaram o canal em barcos e fizeram uma cabeça de ponte. A Guarda, cerca de 5.000 granadeiros, aguentou quase todo o peso do combate por horas.",
        "Quarto, perto das 15 horas, a situação ficou crítica. MacMahon não aparecia, o III Corpo de Schwarzenberg vinha de Robecco para atacar o flanco direito francês, e reforços austríacos chegavam de Abbiategrasso. Os austríacos chegaram a mandar um telegrama a Viena anunciando vitória. Napoleão III pediu pressa a Canrobert e chamou Niel. Os austríacos não aproveitaram a brecha.",
        "Quinto, por volta das 16 horas, MacMahon chegou a Boffalora e atacou os corpos I e II austríacos pelo flanco. As divisões de Vinoy reforçaram a Guarda, e as duas alas francesas se juntaram.",
        "Sexto, os franceses cruzaram a Ponte Nuovo, e os austríacos recuaram para Magenta. Entre 17 e 18h30, os piemonteses de Mollard chegaram à esquerda de MacMahon. Por volta das 18h30, Gyulai deu ordem de recuar em direção ao sudeste.",
        "Sétimo, em Magenta, a luta foi de casa em casa. A Legião Estrangeira e os zuavos atacaram. O general Cler morreu, e o coronel de Chabrières foi mortalmente ferido. O general Espinasse morreu à frente da divisão, num lance atribuído a um caçador tirolês escondido. As fontes dão horas diferentes para a queda da cidade, entre 19 e 21 horas.",
        "Oitavo, Clam-Gallas ordenou a retirada rumo a Binasco por volta das 20 horas, e à noite o exército austríaco estava em retirada completa, na direção de Abbiategrasso. Gyulai pensou em um contra-ataque que nunca aconteceu.",
        { note: "As fontes divergem sobre muitos detalhes: a hora em que Mellinet atacou (por volta das 14 horas, ou antes), onde ficavam as unidades austríacas e quem exatamente matou Espinasse. Por isso o diagrama é um esquema, e não um mapa exato." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam cerca de 4.500 homens (a maioria dos números oficiais fica entre 4.000 e 4.600, com uns 560 a 700 mortos). Os austríacos perderam uns 10.000: 1.368 mortos, 4.358 feridos e cerca de 4.500 prisioneiros ou desaparecidos. Houve ainda uns 12 civis mortos.",
        "Em 8 de junho, Napoleão III e Vítor Emanuel II entraram em Milão, e Brescia veio logo depois. Gyulai recuou até o rio Chiese e foi substituído em 16 de junho. O imperador Francisco José assumiu nominalmente o comando.",
        { h: "Solferino" },
        "A campanha continuou, e vinte dias depois, em 24 de junho, os dois exércitos se encontraram de novo, dessa vez com os dois soberanos presentes, em Solferino. Essa batalha tem sua própria entrada neste site.",
        { h: "Por que importa" },
        "Magenta abriu o caminho de Milão aos aliados e levou os austríacos a deixar a cidade. Foi uma vitória apertada, em que a chegada tardia de MacMahon pesou mais do que a condução de Napoleão III.",
        { h: "Curiosidades e controvérsias" },
        { note: "A cor: um corante vermelho-arroxeado descoberto em 1859 recebeu o nome de magenta, por causa da batalha. A história de que a cor lembraria os uniformes é considerada apócrifa. O Boulevard de Magenta, em Paris, também leva o nome da batalha." },
        { note: "O comando: Napoleão III é criticado por ter ficado passivo à tarde. A vitória foi menos obra dele do que de MacMahon e dos granadeiros da Guarda." },
        { note: "Os números: as fontes dão forças e perdas diferentes (de 4.000 a 4.600 baixas francesas e de 9.700 a 10.200 austríacas), e os próprios documentos oficiais podem ser imprecisos." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  pavia: {
    terrain: [
      { t: "sea", x: 0, y: 64, w: 100, h: 6, l: "Rio Ticino" },
      { t: "note", x: 50, y: 58, l: "Pavia (cidade)" },
      { t: "note", x: 50, y: 3, l: "Norte ↑ · Parque de Mirabello" },
      { t: "note", x: 40, y: 8, l: "Castelo de Mirabello" },
      { t: "note", x: 67, y: 15, l: "Brecha no muro (lado incerto)" }
    ],
    units: [
      { id: "iCamp", s: "a", k: "camp", w: 12, h: 5, l: "Acampamento imperial" },
      { id: "iArq", s: "a", k: "inf", w: 12, h: 4, l: "Arcabuzeiros (Vasto)" },
      { id: "iLan", s: "a", k: "inf", w: 14, h: 5, l: "Lansquenetes (Frundsberg)" },
      { id: "iSpa", s: "a", k: "inf", w: 12, h: 4, l: "Espanhóis (Pescara)" },
      { id: "iCav", s: "a", k: "cav", w: 10, h: 4, l: "Cavalaria (Lannoy)" },
      { id: "iGar", s: "a", k: "inf", w: 12, h: 4, l: "Guarnição (Leyva)" },
      { id: "fGen", s: "b", k: "cav", w: 12, h: 5, l: "Gendarmes (Francisco I)" },
      { id: "fSwi", s: "b", k: "inf", w: 12, h: 5, l: "Suíços (La Marck)" },
      { id: "fBlk", s: "b", k: "inf", w: 12, h: 5, l: "Bandas Negras" },
      { id: "fArt", s: "b", k: "inf", w: 9, h: 3, l: "Artilharia" },
      { id: "fMon", s: "b", k: "inf", w: 12, h: 4, l: "Suíços (Montmorency)" },
      { id: "fAle", s: "b", k: "inf", w: 12, h: 4, l: "Retaguarda (Alençon)" }
    ],
    steps: [
      { t: "Os franceses acampam no parque de Mirabello, entre a cidade sitiada e o exército imperial, que está a leste. Parte dos suíços guarda as linhas de cerco.",
        p: { iCamp: [88, 26], iArq: [86, 36], iLan: [82, 30], iSpa: [82, 22], iCav: [88, 16], iGar: [50, 52],
             fGen: [36, 24], fSwi: [28, 30], fBlk: [50, 32], fArt: [42, 36], fMon: [58, 48], fAle: [18, 46] } },
      { t: "Na noite de 23 para 24 de fevereiro, os imperiais marcham para o norte ao longo do muro e abrem brechas, para entrar no parque. As fontes dão disfarces diferentes: bombardeio ou tendas incendiadas.",
        p: { iArq: [76, 14], iLan: [80, 20], iSpa: [74, 10], iCav: [82, 8], iCamp: [92, 30] } },
      { t: "Cerca de 3.000 arcabuzeiros de Vasto entram no parque e, por volta das 6h30, tomam o castelo de Mirabello.",
        p: { iArq: [48, 12], iLan: [62, 18], iSpa: [66, 12], iCav: [70, 8] } },
      { t: "Os suíços tomam uma bateria espanhola, mas esbarram nos lansquenetes de Frundsberg. Lannoy, Pescara e a cavalaria pesada contornam o parque pelos bosques do oeste, para chegar perto do rei.",
        p: { fSwi: [38, 20], iLan: [52, 22], iSpa: [26, 12], iCav: [32, 8] } },
      { t: "Francisco carrega com os gendarmes e dispersa a cavalaria de Lannoy, por volta das 7h40. A carga afasta o rei da infantaria e tapa a mira dos próprios canhões.",
        p: { fGen: [34, 12], iCav: [26, 6] }, x: ["iCav"] },
      { t: "Os arcabuzeiros e os piques imperiais atacam. Frundsberg quebra os suíços, e as Bandas Negras são cercadas e destruídas.",
        p: { iLan: [42, 28], fSwi: [34, 30], fBlk: [48, 30], iArq: [40, 16], iSpa: [28, 18] }, x: ["iCav", "fSwi", "fBlk"] },
      { t: "Por volta das 8 horas, os gendarmes são cercados nos bosques e mortos aos poucos. O cavalo do rei cai, e Francisco é capturado depois de uma luta longa.",
        p: { fGen: [30, 16], iSpa: [24, 18], iArq: [34, 20], iLan: [40, 22] }, x: ["iCav", "fSwi", "fBlk", "fGen"] },
      { t: "Leyva sai de Pavia e ataca por trás os suíços de Montmorency, nas linhas de cerco. A retaguarda de Alençon não luta e recua em direção a Milão.",
        p: { iGar: [52, 44], fMon: [58, 46], fAle: [8, 38] }, x: ["iCav", "fSwi", "fBlk", "fGen", "fMon"] }
    ]
  },

  arcole: {
    terrain: [
      { t: "sea", x: 0, y: 60, w: 100, h: 6, l: "Rio Adige" },
      { t: "sea", x: 44, y: 6, w: 3, h: 54, l: "Rio Alpone" },
      { t: "note", x: 56, y: 34, l: "Arcole" },
      { t: "note", x: 38, y: 33, l: "Ponte" },
      { t: "note", x: 14, y: 3, l: "Caldiero" },
      { t: "note", x: 28, y: 68, l: "Ronco (esquema, sem escala)" }
    ],
    units: [
      { id: "fAug", s: "a", k: "inf", w: 10, h: 4, l: "Augereau" },
      { id: "fMas", s: "a", k: "inf", w: 10, h: 4, l: "Masséna" },
      { id: "fBon", s: "a", k: "inf", w: 8, h: 3, l: "Bonaparte" },
      { id: "fGd", s: "a", k: "cav", w: 6, h: 3, l: "25 guias" },
      { id: "aArc", s: "b", k: "inf", w: 10, h: 4, l: "Defensores de Arcole" },
      { id: "aMit", s: "b", k: "inf", w: 10, h: 4, l: "Mittrowsky" },
      { id: "aPro", s: "b", k: "inf", w: 10, h: 4, l: "Provera" },
      { id: "aMain", s: "b", k: "inf", w: 12, h: 4, l: "Colunas de Caldiero" }
    ],
    steps: [
      { t: "Antes do amanhecer de 15 de novembro, os engenheiros lançam uma ponte de barcas em Ronco. Os franceses avançam por diques estreitos entre brejos. Os austríacos defendem Arcole, e o exército de Alvinczi está em Caldiero.",
        p: { fAug: [34, 54], fMas: [20, 54], fBon: [28, 57], fGd: [38, 57], aArc: [58, 34], aMit: [72, 26], aPro: [24, 8], aMain: [30, 14] } },
      { t: "Augereau chega à ponte sobre o Alpone, e o fogo cerrado do povoado o repele. A coluna estreita não pode se abrir.",
        p: { fAug: [40, 38], aArc: [54, 34] } },
      { t: "Segundo a tradição, Bonaparte pega uma bandeira e corre à frente. Ele cai numa vala lamacenta, e o ajudante Muiron morre protegendo-o.",
        p: { fBon: [41, 36] } },
      { t: "No oeste, Masséna esbarra em colunas austríacas que vêm de Caldiero e as empurra para trás. No fim do dia 15, Bonaparte ainda não tem Arcole.",
        p: { fMas: [24, 34], aMain: [26, 22] } },
      { t: "Dia 16: Provera ataca Masséna e é repelido. Mittrowsky e Augereau lutam em vai e vem. Ao cair da noite, Bonaparte recua.",
        p: { aPro: [26, 24], fAug: [36, 46], fMas: [22, 42], aMit: [60, 32] } },
      { t: "Dia 17: Alvinczi puxa parte das tropas de volta a Caldiero. Os engenheiros fazem outra ponte sobre o Alpone, perto da foz, e Augereau atravessa por ela.",
        p: { aMain: [18, 10], fAug: [52, 54], fBon: [46, 56] } },
      { t: "Por volta das 15 horas, uma grande coluna austríaca empurra Augereau para trás. Masséna a embosca no dique do oeste.",
        p: { aMit: [50, 46], fAug: [50, 56], fMas: [34, 38] }, x: ["aMit"] },
      { t: "Por volta das 17 horas, Masséna e Augereau entram em Arcole. Vinte e cinco guias tocam trombetas atrás dos austríacos, para parecer uma tropa grande. A divisão de Provera escapa para o leste.",
        p: { fAug: [58, 36], fMas: [48, 36], fGd: [68, 26], aArc: [74, 34], aPro: [90, 22] }, x: ["aMit", "aArc"] }
    ]
  },

  rivoli: {
    terrain: [
      { t: "hill", x: 8, y: 34, rx: 11, ry: 30, l: "Monte Baldo" },
      { t: "sea", x: 84, y: 0, w: 5, h: 70, l: "Rio Adige" },
      { t: "note", x: 50, y: 3, l: "Norte ↑" },
      { t: "note", x: 46, y: 22, l: "San Marco" },
      { t: "note", x: 56, y: 44, l: "Rivoli" },
      { t: "note", x: 74, y: 14, l: "Osteria (desfiladeiro)" }
    ],
    units: [
      { id: "fJou", s: "a", k: "inf", w: 14, h: 4, l: "Joubert" },
      { id: "fMas", s: "a", k: "inf", w: 12, h: 4, l: "Masséna (18ª demi-brigada)" },
      { id: "fArt", s: "a", k: "inf", w: 10, h: 3, l: "Artilharia" },
      { id: "fLec", s: "a", k: "cav", w: 8, h: 3, l: "Leclerc e Lasalle" },
      { id: "fMur", s: "a", k: "cav", w: 8, h: 3, l: "Murat" },
      { id: "fRey", s: "a", k: "inf", w: 10, h: 4, l: "Rey e Victor" },
      { id: "fBru", s: "a", k: "inf", w: 8, h: 4, l: "Brune" },
      { id: "aKos", s: "b", k: "inf", w: 14, h: 4, l: "Köblös e Lipthay" },
      { id: "aOcs", s: "b", k: "inf", w: 10, h: 4, l: "Ocskay" },
      { id: "aQuo", s: "b", k: "inf", w: 12, h: 4, l: "Quosdanovich" },
      { id: "aLus", s: "b", k: "inf", w: 12, h: 4, l: "Lusignan" },
      { id: "aVuk", s: "b", k: "inf", w: 8, h: 4, l: "Vukassovich" }
    ],
    steps: [
      { t: "Na noite de 13 para 14 de janeiro, Joubert segura a linha entre San Marco e Trombalora. Bonaparte chega às 2 da manhã. As colunas austríacas convergem pelo norte, pelo oeste e pela margem leste do rio.",
        p: { fJou: [46, 28], fMas: [34, 36], fArt: [64, 34], fLec: [60, 46], fMur: [68, 50], fRey: [24, 64], fBru: [34, 60],
             aKos: [40, 10], aOcs: [56, 8], aQuo: [76, 6], aLus: [18, 12], aVuk: [93, 14] } },
      { t: "Por volta das 6 horas, Joubert contra-ataca para retomar San Marco. Os austríacos aguentam e ameaçam cercar a capela, até as reservas de Masséna chegarem.",
        p: { fJou: [46, 24], aKos: [42, 14] } },
      { t: "Os austríacos tomam o monte Magnone e as alturas acima do desfiladeiro. Vukassovich expulsa os franceses de Osteria, e Lusignan chega ao sul de Rivoli, ameaçando a retirada.",
        p: { aVuk: [91, 28], aLus: [28, 52], aQuo: [76, 18] } },
      { t: "Bonaparte concentra os canhões perto do desfiladeiro. Uma bateria de 15 canhões, atirando metralha de perto, desfaz os dragões de Quosdanovich, que correm por cima da própria infantaria.",
        p: { fArt: [70, 26], aQuo: [76, 24] } },
      { t: "Duas carroças de munição austríacas explodem. Leclerc e Lasalle retomam o desfiladeiro, e Quosdanovich recua para fora do alcance dos canhões.",
        p: { fLec: [74, 20], aQuo: [82, 12] }, x: ["aQuo"] },
      { t: "No centro, Ocskay empurra a brigada de Vial. Por volta do meio-dia, a cavalaria de Murat bate no flanco e o faz recuar.",
        p: { aOcs: [54, 30], fMur: [60, 28] }, x: ["aQuo", "aOcs"] },
      { t: "Contra Lusignan, a 18ª demi-brigada de Masséna aguenta, Brune ataca de frente, e Rey e Victor chegam. A coluna é destruída e foge para o oeste.",
        p: { fMas: [30, 48], fBru: [32, 56], fRey: [22, 58], aLus: [14, 46] }, x: ["aQuo", "aOcs", "aLus"] },
      { t: "Por volta das 17 horas, Bonaparte parte para Mântua. No dia 15, Joubert, Murat e Vial derrotam as colunas centrais em La Corona e cortam a retirada delas.",
        p: { fJou: [46, 14], fMur: [50, 10], aKos: [42, 4] }, x: ["aQuo", "aOcs", "aLus", "aKos"] }
    ]
  },

  marengo: {
    terrain: [
      { t: "sea", x: 10, y: 0, w: 3, h: 64, l: "Rio Bormida" },
      { t: "sea", x: 37, y: 24, w: 2.5, h: 34, l: "Fontanone" },
      { t: "note", x: 4, y: 33, l: "Alessandria" },
      { t: "note", x: 56, y: 6, l: "Castel Ceriolo" },
      { t: "note", x: 46, y: 62, l: "Marengo" },
      { t: "note", x: 92, y: 4, l: "Norte ↑" }
    ],
    units: [
      { id: "fVic", s: "a", k: "inf", w: 12, h: 5, l: "Victor (Marengo)" },
      { id: "fLan", s: "a", k: "inf", w: 12, h: 5, l: "Lannes" },
      { id: "fMon", s: "a", k: "inf", w: 10, h: 4, l: "Monnier" },
      { id: "fKel", s: "a", k: "cav", w: 10, h: 4, l: "Kellermann" },
      { id: "fGua", s: "a", k: "inf", w: 9, h: 3, l: "Guarda Consular" },
      { id: "fDes", s: "a", k: "inf", w: 12, h: 5, l: "Desaix (Boudet)" },
      { id: "fMar", s: "a", k: "inf", w: 9, h: 3, l: "Artilharia (Marmont)" },
      { id: "aHad", s: "b", k: "inf", w: 12, h: 5, l: "Hadik e Kaim" },
      { id: "aLat", s: "b", k: "inf", w: 10, h: 4, l: "Granadeiros (Lattermann)" },
      { id: "aOtt", s: "b", k: "inf", w: 12, h: 5, l: "Ott (norte)" },
      { id: "aORe", s: "b", k: "inf", w: 10, h: 4, l: "O'Reilly (sul)" },
      { id: "aFri", s: "b", k: "cav", w: 9, h: 4, l: "Frimont" },
      { id: "aZac", s: "b", k: "inf", w: 12, h: 5, l: "Coluna de Zach" }
    ],
    steps: [
      { t: "Madrugada de 14 de junho. Os austríacos cruzam o Bormida em três colunas: Ott ao norte, O'Reilly ao sul, e Melas no centro. Os franceses de Victor seguram Marengo e a linha do Fontanone. Desaix está longe, no sul.",
        p: { aHad: [22, 42], aLat: [18, 36], aOtt: [28, 14], aORe: [28, 56], aFri: [20, 48],
             fVic: [48, 46], fLan: [54, 32], fMon: [62, 16], fKel: [54, 56], fGua: [76, 34], fDes: [92, 64], fMar: [80, 44], aZac: [16, 30] } },
      { t: "Por volta das 8 horas, Hadik ataca Marengo e é parado por fogo de dois lados. Hadik morre. O ataque de Kaim é detido por volta das 11. Bonaparte chega e joga suas reservas na direita.",
        p: { aHad: [38, 44], fGua: [68, 26], fMon: [62, 20] } },
      { t: "Por volta das 11h30, Ott toma Castel Ceriolo e ameaça a direita francesa. Perto das 12h30, uma pequena ponte sobre o Fontanone deixa Lattermann atacar Marengo, e Victor recua para os vinhedos.",
        p: { aOtt: [52, 12], fMon: [66, 22], aLat: [40, 46], fVic: [56, 46], fLan: [58, 34] } },
      { t: "Por volta das 14 horas, Marengo cai. Os franceses recuam para o leste, lutando. O'Reilly avança ao sul.",
        p: { aHad: [56, 44], fVic: [68, 46], fLan: [68, 34], fKel: [64, 56], aORe: [60, 58] } },
      { t: "Por volta das 16 horas, a cavalaria de Frimont destrói a Guarda Consular. Melas, ferido de leve, entrega o comando a Zach e a Kaim, e a coluna austríaca se forma. A perseguição se espalha.",
        p: { aFri: [72, 30], aZac: [62, 42], aLat: [58, 40] }, x: ["fGua"] },
      { t: "Perto das 17 horas, Desaix chega com a divisão de Boudet. Segundo a tradição, diz que a batalha está perdida, mas que ainda há tempo de ganhar outra. Os franceses surpreendem a ponta da coluna de Saint-Julien.",
        p: { fDes: [76, 54], aZac: [66, 46] }, x: ["fGua"] },
      { t: "Os canhões de Marmont atiram metralha de perto, e uma carroça de munição explode. Boudet derrota a brigada de Saint-Julien.",
        p: { fMar: [72, 44], fDes: [72, 50] }, x: ["fGua"] },
      { t: "Cerca de 400 cavaleiros pesados de Kellermann batem no flanco de Lattermann. Desaix é atingido e morre. A infantaria austríaca se quebra, e Zach é capturado.",
        p: { fKel: [64, 42], aLat: [60, 42], aZac: [64, 40], fDes: [68, 46] }, x: ["fGua", "aLat", "aZac"] },
      { t: "O'Reilly e Frimont seguram Marengo até a noite, e o centro austríaco volta ao Bormida. Ott, barrado em Castel Ceriolo, também recua. Melas se fecha em Alessandria.",
        p: { aHad: [30, 44], aOtt: [34, 22], aORe: [32, 54], aFri: [50, 46] }, x: ["fGua", "aLat", "aZac"] }
    ]
  },

  magenta: {
    terrain: [
      { t: "sea", x: 3, y: 0, w: 4, h: 70, l: "Rio Ticino" },
      { t: "sea", x: 24, y: 0, w: 2, h: 70, l: "Naviglio Grande" },
      { t: "note", x: 16, y: 4, l: "Turbigo" },
      { t: "note", x: 33, y: 14, l: "Boffalora" },
      { t: "note", x: 28, y: 29, l: "Ponte Nuovo" },
      { t: "note", x: 48, y: 36, l: "Magenta" },
      { t: "note", x: 54, y: 12, l: "Marcallo" },
      { t: "note", x: 32, y: 64, l: "Robecco" },
      { t: "note", x: 56, y: 66, l: "Abbiategrasso" },
      { t: "note", x: 92, y: 4, l: "Norte ↑" }
    ],
    units: [
      { id: "fGua", s: "a", k: "inf", w: 12, h: 5, l: "Guarda e zuavos (Mellinet)" },
      { id: "fVin", s: "a", k: "inf", w: 10, h: 4, l: "Vinoy" },
      { id: "fLMR", s: "a", k: "inf", w: 10, h: 4, l: "MacMahon: La Motte-Rouge" },
      { id: "fEsp", s: "a", k: "inf", w: 10, h: 4, l: "MacMahon: Espinasse" },
      { id: "fCan", s: "a", k: "inf", w: 10, h: 4, l: "Canrobert e Niel" },
      { id: "aLie", s: "b", k: "inf", w: 12, h: 5, l: "II Corpo (Liechtenstein)" },
      { id: "aCla", s: "b", k: "inf", w: 12, h: 5, l: "I Corpo (Clam-Gallas)" },
      { id: "aSch", s: "b", k: "inf", w: 12, h: 5, l: "III Corpo (Schwarzenberg)" },
      { id: "aRes", s: "b", k: "inf", w: 10, h: 4, l: "Reforços" }
    ],
    steps: [
      { t: "Manhã de 4 de junho. MacMahon sai da cabeça de ponte de Turbigo em duas colunas: Espinasse rumo a Marcallo, e La Motte-Rouge rumo a Boffalora. Os austríacos formam um triângulo entre Magenta, Marcallo e Boffalora.",
        p: { fLMR: [14, 12], fEsp: [18, 8], fGua: [12, 36], fVin: [8, 52], fCan: [8, 62],
             aLie: [34, 22], aCla: [50, 28], aSch: [30, 58], aRes: [54, 56] } },
      { t: "Por volta das 13 e 14 horas, os granadeiros da Guarda atacam do oeste em direção às pontes do canal. Os austríacos explodem a Ponte Vecchio e a ponte da ferrovia. Só a Ponte Nuovo fica.",
        p: { fGua: [20, 31], fLMR: [16, 16] } },
      { t: "Às 14 horas, os zuavos cruzam o canal em barcos e fazem uma cabeça de ponte. A Guarda, com uns 5.000 granadeiros, aguenta quase todo o combate por horas.",
        p: { fGua: [28, 31], aLie: [34, 26] } },
      { t: "Por volta das 15 horas, MacMahon não aparece. O corpo de Schwarzenberg vem de Robecco para atacar o flanco direito francês, e reforços chegam de Abbiategrasso. Napoleão III chama Canrobert e Niel.",
        p: { aSch: [30, 48], aRes: [42, 48], fCan: [14, 46] } },
      { t: "Por volta das 16 horas, MacMahon chega a Boffalora e ataca os corpos I e II pelo flanco. A divisão de Vinoy reforça a Guarda.",
        p: { fLMR: [34, 18], aLie: [40, 28], fVin: [24, 38], fEsp: [44, 14] } },
      { t: "Os franceses cruzam a Ponte Nuovo, e os austríacos recuam para Magenta. Por volta das 18h30, Gyulai ordena o recuo para o sudeste.",
        p: { fGua: [36, 34], fVin: [30, 40], aCla: [48, 40], aLie: [44, 34] } },
      { t: "Luta de casa em casa em Magenta, entre 19 e 21 horas, segundo as fontes. A Legião Estrangeira e os zuavos atacam. O general Espinasse morre à frente de sua divisão.",
        p: { fGua: [42, 38], fEsp: [48, 26], fVin: [38, 42], aCla: [52, 42] } },
      { t: "Por volta das 20 horas, Clam-Gallas manda retirar, e à noite o exército austríaco está em retirada completa, rumo a Abbiategrasso.",
        p: { aCla: [54, 58], aLie: [50, 54], aSch: [46, 62], aRes: [58, 62] } }
    ]
  }
});
