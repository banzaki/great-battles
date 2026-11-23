// In-depth battles, batch bi: poitiers, varna, montanhabranca, lutzen, naseby (great-battles pack, part 2).
// Checked against the English, Portuguese, Polish, Czech and Swedish Wikipedia articles on the Battles of Poitiers
// (1356), Varna, White Mountain, Lützen (1632) and Naseby, and the works those pages cite (among them Green,
// Sumption and Rogers on Poitiers, Čechura on White Mountain, Wilson on the Thirty Years' War). Where sources
// disagree the text says so.
// No diagram for Varna: the sources on the deployment and moves are thin and contradict each other.
// The route of the Captal de Buch at Poitiers is not known; the diagram draws it schematically and says so.

Object.assign(GLOSSARY, {
  "gascões": "Habitantes da Gasconha, no sudoeste da França, região que então pertencia ao rei da Inglaterra. Muitos lutaram ao lado dos ingleses.",
  "captal de buch": "Título de nobreza da Gasconha. O captal de Buch era Jean de Grailly, um senhor gascão que lutou pelos ingleses.",
  "jacquerie de 1358": "Revolta de camponeses no norte da França, em 1358, durante a crise que se seguiu a Poitiers. Foi esmagada pela nobreza em poucas semanas.",
  "tratado de brétigny": "Tratado de paz de 1360 entre a Inglaterra e a França. A França cedeu grandes territórios, e o resgate do rei João II ficou em 3 milhões de escudos.",
  "paz de szeged": "Trégua de dez anos assinada em 1444 entre o sultão Murad II e a Hungria. Os cruzados a romperam poucas semanas depois.",
  "defenestração de praga": "Em 23 de maio de 1618, nobres protestantes jogaram dois representantes do imperador pela janela do castelo de Praga. O gesto abriu a revolta da Boêmia.",
  "estados da boêmia": "Assembleia de nobres, cavaleiros e cidades da Boêmia, que decidia com o rei os impostos e as leis. Foi ela que depôs os Habsburgos em 1619.",
  "liga católica de 1609": "Aliança de príncipes católicos alemães, criada em 1609 e chefiada por Maximiliano da Baviera, para defender a Igreja Católica no Sacro Império.",
  "tércio de infantaria": "Grande bloco de piqueiros e mosqueteiros, criado pela Espanha. Era um quadrado denso, com piques no meio e armas de fogo nos cantos.",
  "recatolicização": "Política dos Habsburgos de obrigar os súditos protestantes a se converterem ao catolicismo ou deixarem o país.",
  "generalíssimo imperial": "Comandante supremo de todos os exércitos do imperador. Wallenstein recebeu o posto, com poderes quase sem limite, em 1632.",
  "cabeças redondas": "Apelido dos partidários do Parlamento na guerra civil inglesa. Vem do cabelo curto de muitos aprendizes de Londres.",
  "exército de novo modelo": "Exército profissional criado pelo Parlamento no início de 1645, com oficiais escolhidos por mérito, não por título, e soldo regular.",
  "ordenança de autonegação": "Lei do Parlamento, de dezembro de 1644, que proibiu seus membros de comandar exércitos. Abriu o caminho para Fairfax e para o Exército de Novo Modelo.",
  "forlorn hope": "Grupo pequeno de mosqueteiros escolhidos, mandados na frente para as primeiras escaramuças. O termo vem do holandês 'verloren hoop', 'tropa perdida'.",
  "primeira guerra civil inglesa": "Guerra entre o rei Carlos I e o Parlamento inglês (1642–1646), que terminou com vitória do Parlamento."
});

Object.assign(DEEP, {
  poitiers: {
    war: "Guerra dos Cem Anos (1337–1453)",
    hook: "Seis mil ingleses e gascões, atrás de uma sebe, capturaram o rei da França.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1356, a [[guerra dos cem anos]] já durava quase vinte anos. O rei Eduardo III da Inglaterra reclamava o trono francês, e dez anos antes, em Crécy, seus arqueiros tinham destroçado a cavalaria do rei Filipe VI. A Gasconha, no sudoeste, pertencia aos ingleses, e era de lá que eles saíam para atacar.",
        "Em 4 de agosto de 1356, o filho mais velho de Eduardo III, também chamado Eduardo e conhecido como Príncipe Negro, saiu de Bergerac, na Gasconha, com cerca de 6.000 combatentes e uns 4.000 não combatentes. Era uma [[cavalgada]]: uma marcha para queimar, saquear e arrasar o campo, para enfraquecer o rei da França e enriquecer os soldados. O historiador David Green a descreve como deliberadamente destruidora e muito brutal.",
        { h: "O caminho até Poitiers" },
        { timeline: [
          ["4 ago 1356", "O Príncipe Negro sai de Bergerac, na Gasconha, para a cavalgada."],
          ["c. 20 ago", "O rei João II abandona o cerco de Breteuil e marcha para o Loire."],
          ["10 set", "João atravessa o Loire em Blois e se junta ao filho."],
          ["13 set", "O Príncipe atravessa o rio Creuse. Dois dias depois, descobre que João passou por ele."],
          ["18 set", "O cardeal Talleyrand tenta negociar. A conversa fracassa."],
          ["19 set", "A batalha."]
        ]},
        "O rei João II largou o cerco de Breteuil, na Normandia, por volta de 20 de agosto e correu para o sul. Em 15 de setembro, o Príncipe soube que João tinha passado por ele e estava entre os ingleses e a Gasconha. Voltou para interceptá-lo e se posicionou na floresta de Nouaillé, a cerca de 8 km de Poitiers.",
        "Na véspera, o cardeal Hélie de Talleyrand-Périgord, enviado do papa Inocêncio VI, tentou evitar a luta. O Príncipe aceitou fazer grandes concessões em troca de passagem livre até a Gasconha, desde que o pai as aprovasse. João inclinou-se a aceitar, mas seus conselheiros mais velhos acharam as condições humilhantes, e ele recusou. Uma segunda tentativa, na madrugada de 19 de setembro, também foi recusada. Os historiadores Sumption e Hoskins notam que Eduardo III tinha dado ao filho licença para fazer uma trégua, o que faz duvidar de quanto o Príncipe levava a sério a oferta."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Eduardo, o Príncipe Negro, 26 anos" },
        "Filho mais velho de Eduardo III, tinha lutado em Crécy aos 16 anos. Aqui, comandava um exército pequeno, longe de casa, entre inimigos muito mais numerosos. Não tinha como vencer em campo aberto. Escolheu um terreno ruim para uma carga de cavalaria, fortificou-o e esperou que os franceses viessem. Era a tática dos ingleses desde Crécy: deixar o inimigo se machucar contra os [[arqueiros|arco longo]].",
        { h: "João II, 37 anos" },
        "Rei da França desde 1350, cresceu no ideal da cavalaria. Era chamado 'o Bom', no sentido de valente, e tinha criado a Ordem da Estrela, cujos membros juravam nunca recuar. No campo, decidiu que a maior parte de seus homens lutaria a pé, para os cavalos não virarem alvo dos arqueiros ingleses, e reservou só dois grupos de cavaleiros escolhidos para abrir o caminho.",
        { h: "Os outros nomes" },
        "Do lado inglês, Thomas Beauchamp, conde de Warwick, comandava a ala esquerda, e William Montagu, conde de Salisbury, a direita. Ao lado deles estavam o conde de Oxford e lorde Suffolk. No centro, junto ao Príncipe, ficavam John Chandos e James Audley. O [[captal de Buch]], Jean de Grailly, um senhor [[gascão|gascões]], comandou a pequena força montada que decidiu o dia. Do lado francês, os [[marechais|marechal]] Arnoul d'Audrehem e Jean de Clermont comandavam os grupos de cavaleiros, e o [[condestável]] Gautier de Brienne, uma das quatro divisões a pé. O [[delfim]] Carlos, de 18 anos, comandava a segunda."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os historiadores modernos calculam o exército anglo-gascão em cerca de 6.000 homens: uns 3.000 [[homens de armas|homem de armas]], 2.000 arqueiros ingleses e galeses e 1.000 infantes gascões. Alguns relatos da época falam em 4.800 ou 5.000. Os franceses eram talvez 14.000 a 16.000: de 10.000 a 12.000 homens de armas, uns 2.000 [[besteiros|besta]] e uns 2.000 outros infantes.",
        { h: "O terreno" },
        "Uma colina arborizada na floresta de Nouaillé. Os anglo-gascões cavaram valas e covas e ergueram barricadas. Uma parte da linha ficava na beira de um pântano, que os cavalos não atravessavam. Os homens de Salisbury seguravam uma sebe espessa com uma só passagem. Os franceses teriam de atacar a pé, por essas aberturas, para chegar a eles.",
        { h: "A manhã" },
        "Depois do amanhecer, os franceses se alinharam a uns 450 metros. Duas horas depois, viram movimento nas fileiras inglesas e acharam que o inimigo estava recuando. Os historiadores discutem o que era: carroças, o estandarte do Príncipe ou uma manobra de propósito.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, os ingleses ficaram em três divisões atrás da sebe: Warwick à esquerda, junto ao pântano, Salisbury à direita, e o Príncipe no centro, de reserva. Os franceses vieram em quatro divisões a pé, uma atrás da outra, com dois grupos de cavaleiros escolhidos na frente.",
        "Segundo, a cavalaria atacou. Audrehem investiu contra Warwick, mas o pântano barrou os cavalos, e os arqueiros atiraram nos besteiros que vinham de apoio. O conde de Oxford levou arqueiros pela beira do pântano e flechou as ancas dos cavalos, que não tinham armadura. Audrehem foi capturado. Clermont atacou Salisbury na passagem da sebe, foi morto, e seus cavaleiros recuaram.",
        "Terceiro, a divisão do condestável Brienne, a pé, foi repelida. Brienne morreu.",
        "Quarto, a divisão do delfim, com cerca de 4.000 homens de armas a pé, forçou a passagem da sebe, e a luta corpo a corpo durou umas duas horas. O duque de Bourbon morreu e o porta-estandarte do delfim foi capturado. Os guardas retiraram o delfim e seus irmãos, e o resto da divisão recuou em boa ordem.",
        "Quinto, o duque de Orléans saiu do campo com cerca de metade de seus 3.200 homens de armas. Os outros uns 1.600 fizeram um ataque fraco, rechaçado sem dificuldade. Muitos dos homens de Warwick correram atrás deles, de olho em prisioneiros que dariam [[resgate]].",
        "Sexto, a divisão do rei João, de uns 4.000 homens de armas a pé, avançou com a [[oriflama|oriflamme]] erguida, sinal de que não se faria prisioneiros. Os ingleses estavam exaustos e quase sem flechas. O Príncipe mandou o captal de Buch com um pequeno grupo montado dar a volta pelo flanco. O trajeto exato não se conhece.",
        "Sétimo, o Príncipe ordenou um avanço geral. Os arqueiros, sem flechas, lutaram com espadas e machados. Os homens de Warwick voltaram à linha. Então os cerca de 160 homens do captal apareceram na retaguarda francesa. Seus arqueiros desmontaram e flecharam, e seus 60 homens de armas atacaram.",
        "Oitavo, a linha do rei se quebrou. Os franceses ao redor dele foram empurrados contra uma curva do rio Miosson, o Campo de Alexandre, onde ficaram cercados e separados. O rei João e seu filho caçula, Filipe, renderam-se. O porta-estandarte da oriflama morreu e a bandeira foi tomada. Os ingleses perseguiram os fugitivos até Poitiers, cujos moradores fecharam os portões, e muitos franceses foram mortos do lado de fora."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As perdas" },
        "Do lado anglo-gascão, morreram cerca de 40 homens de armas e um número muito maior, e desconhecido, de infantes. Do lado francês, morreram cerca de 2.500 homens de armas, e mais de 4.500 foram mortos ou capturados. Os números dos soldados a pé mortos ou presos variam muito de fonte para fonte, de 1.500 a 3.800.",
        { h: "O que mudou" },
        "O rei da França estava prisioneiro, e o delfim, com 18 anos, ficou à frente de um país sem rei e sem exército. Na primavera de 1357, as duas partes assinaram uma trégua de dois anos. Em 1358, estourou a [[jacquerie de 1358]]. O primeiro tratado de Londres (maio de 1358) caducou quando a França não conseguiu pagar a primeira parcela do resgate. O segundo, de 1359, foi rejeitado pelo delfim e pelos Estados Gerais. Só em maio de 1360, depois de nova campanha de Eduardo III, veio o [[tratado de Brétigny|tratado de brétigny]]: a Inglaterra ficou com cerca de um terço da França, e o resgate do rei foi fixado em 3 milhões de escudos.",
        "Os franceses aprenderam a lição. Quando a guerra recomeçou, em 1369, o delfim, já rei Carlos V, evitou as batalhas campais e foi retomando o que se perdera. A guerra só acabou em 1453, com vitória francesa.",
        { note: "Segundo o cronista Jean Froissart, depois da batalha o Príncipe serviu pessoalmente o jantar ao rei prisioneiro e se recusou a sentar-se à mesa com ele. A cena é tradicional, mas vem de uma crônica escrita para exaltar a cavalaria, e os historiadores a tratam com cautela." },
        { note: "Os membros da Ordem da Estrela tinham jurado nunca recuar. Muitos lutaram até morrer em Poitiers, o que explica em parte o número de nobres franceses mortos ou presos." },
        { note: "O papel de Orléans é um mistério. Os relatos oficiais disseram que o rei o mandou levar os quatro filhos a salvo, mas poucos acreditaram. Três dos filhos saíram do campo, entre eles o delfim. O quarto, Filipe, voltou para o pai e foi capturado com ele." }
      ]}
    ]
  },

  varna: {
    war: "Cruzada de Varna (1443–1444)",
    hook: "Um rei de vinte anos carregou contra a tenda do sultão, e a Europa perdeu o último grande exército que mandaria contra os otomanos por décadas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em meados do século XV, os [[otomanos]] já dominavam grande parte dos Bálcãs. A Hungria, na fronteira, era o reino que mais perto estava deles. Em 1440, o trono húngaro foi dado ao rei da Polônia, Ladislau III, então com 16 anos. Seu general mais famoso era João Hunyadi, nobre da Transilvânia.",
        "No fim de 1443, Hunyadi fez uma longa campanha pelos Bálcãs, em pleno inverno, e foi tão longe que assustou o sultão Murad II. Murad pediu paz. No verão de 1444, ele e os húngaros assinaram a [[paz de Szeged|paz de szeged]], uma trégua de dez anos. Em agosto, depois de fazer a paz com o emirado de Caramânia, na Anatólia, o sultão abdicou em favor do filho Mehmed, de 12 anos.",
        { h: "O caminho até Varna" },
        { timeline: [
          ["1443", "A longa campanha de Hunyadi pelos Bálcãs."],
          ["Verão 1444", "Paz de Szeged: trégua de dez anos entre a Hungria e o sultão."],
          ["Ago 1444", "Murad II abdica em favor de Mehmed, de 12 anos."],
          ["18 out", "O exército otomano, com Murad, atravessa o Bósforo."],
          ["9–10 nov", "Conselho de guerra dos cruzados e batalha."]
        ]},
        "O cardeal Giuliano Cesarini, [[legado papal]] na Hungria, argumentou que um juramento feito a infiéis não valia, e o papa Eugênio IV e Veneza apoiaram uma nova [[cruzada]]. Os cruzados marcharam rápido, ignorando as fortalezas otomanas, e foram engrossados por búlgaros locais. Uma frota papal, veneziana e borgonhesa tentou fechar o Dardanelos e o Bósforo. Falhou, e em 18 de outubro o exército principal do sultão atravessou o Bósforo. Segundo uma versão com pouca fonte, o vizir Çandarlı Halil Paxá chamou Murad de volta ao comando."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ladislau III, 20 anos" },
        "Rei da Polônia e da Hungria. Jovem, impetuoso, via na cruzada a chance de fazer seu nome. No conselho da véspera, apoiou o plano de atacar em vez de se defender. Seu nome entrou para a história polonesa como Warneńczyk, 'o de Varna'.",
        { h: "João Hunyadi" },
        "O melhor general húngaro e comandante de fato do exército cruzado. Estava longe de casa, com aliados de várias origens. Segundo uma frase que lhe é atribuída, mas de fonte pouco segura, ele disse no conselho: 'Fugir é impossível, e se render é impensável'.",
        { h: "Os outros nomes" },
        "O cardeal Cesarini foi o principal defensor da cruzada e, na véspera, propôs formar uma [[muralha de carroças]], à moda hussita, e esperar a frota. Murad II, de uns 40 anos, reinava havia mais de 20 e era um general experiente. Do lado cristão, também estavam o bispo de Oradea, João Dominis, o bispo de Eger, Simão Rozgonyi, o croata Franko Talovac e o húngaro Miguel Szilágyi. Mircea II, da Valáquia, mandou cavaleiros."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são muito discutidos. O exército cruzado tinha húngaros, poloneses e boêmios (cerca de 16.000 no total) e uns 4.000 valáquios, além de pequenos grupos papais, da Ordem Teutônica, bósnios, croatas e búlgaros. As estimativas vão de cerca de 16.000 a 20.000, e alguns relatos dão bem mais. Os otomanos eram de 40.000 a 60.000, de acordo com a maioria das contagens. Todas essas cifras são estimativas.",
        { h: "O terreno" },
        "Os cruzados estavam presos numa faixa de terra entre o mar Negro, o lago de Varna, o planalto de Franga e o exército do sultão. Na noite de 9 de novembro, Cesarini propôs recuar. Depois, mudou para a defesa atrás de carroças até a chegada da frota. A maioria dos húngaros e croatas concordou, mas Hunyadi e o jovem rei recusaram.",
        { h: "As linhas" },
        "A reconstrução mais citada põe os cristãos em um arco de uns 3,5 km. No centro, uns 3.500 homens, os guardas do rei, [[mercenários]] e bandeiras de nobres, com a cavalaria valáquia de reserva atrás. À direita, cerca de 6.500 homens, sob Dominis, Cesarini, Rozgonyi e Talovac. À esquerda, uns 5.000 sob Szilágyi, entre eles transilvanos, búlgaros e mercenários alemães. Atrás da esquerda ficava o círculo de carroças, defendido por 300 a 600 mercenários tchecos e rutenos, com [[bombardas|bombarda]]. Os detalhes variam de uma fonte para outra.",
        "Do outro lado, no centro do sultão, estavam os [[janízaros]] e levas da Rumélia, atrás de fossos e de duas paliçadas, em volta de dois túmulos antigos da Trácia. Murad dirigia a batalha de um deles. À direita ficavam tropas regulares da Rumélia e [[sipahis]], e à esquerda os cavaleiros leves [[akinji]] e sipahis da Anatólia.",
        { h: "A batalha" },
        "A cavalaria leve otomana atacou primeiro os croatas de Talovac. A esquerda cristã a repeliu com bombardas e armas de fogo e a perseguiu em desordem, e a cavalaria anatoliana atingiu os perseguidores pelo flanco. A direita cristã tentou fugir para a fortaleza de Galata, do outro lado da baía, e foi morta em grande parte nos pântanos do lago de Varna e do rio Devnia. O cardeal Cesarini morreu ali. Só os homens de Talovac voltaram ao círculo de carroças.",
        "Do outro lado, os otomanos atacaram os húngaros e búlgaros de Szilágyi, que repeliram o primeiro ataque, mas foram atacados de novo pelos sipahis. Hunyadi foi socorrê-los com duas companhias de cavalaria e pediu ao rei que o esperasse. Ladislau não esperou. Cavalgou com cerca de 500 cavaleiros poloneses direto contra o centro otomano, em direção à tenda de Murad. Quase chegaram lá. Mas o cavalo do rei caiu, ou foi ferido, diante da tenda.",
        { h: "A morte do rei" },
        "O que aconteceu em seguida não se sabe. Três cronistas turcos dizem que um soldado cortou a cabeça do rei, mas os nomes variam. Segundo uma tradição, um janízaro chamado Kodża Hyzyr fez isso, e a cabeça teria sido guardada em mel. Há quem diga, com base numa anotação atribuída ao próprio Murad, que Ladislau sobreviveu à batalha e foi morto depois, preso. Nenhuma testemunha polonesa ou húngara viu a morte, e o corpo nunca foi achado. Hunyadi tentou recuperá-lo, mas só conseguiu organizar a retirada. O exército cristão perdeu milhares de homens, e mais da metade foi aniquilada, segundo alguns relatos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As perdas" },
        "Morreram também os bispos de Oradea e de Eger, além de Cesarini. As cifras dos mortos variam: alguns relatos falam em 5.000 mortos entre os cruzados e 7.000 entre os otomanos, outros em dezenas de milhares de mortos ou presos do lado cristão. O consenso é só de que o exército cruzado foi quase destruído.",
        { h: "O que mudou" },
        "Hunyadi chegou ao Danúbio e foi capturado pelo príncipe da Valáquia, Vlad Dracul, que o soltou mediante um resgate. Em 1446, tornou-se governador da Hungria. O trono húngaro passou ao pequeno Ladislau, o Póstumo, e a Polônia ficou três anos sem rei, até Casimiro IV. Em 1448, Hunyadi perdeu de novo, em Kosovo. As duas derrotas desanimaram a Europa. Quando Constantinopla foi cercada, em 1453, ninguém mandou ajuda séria. Só em 1456, em Belgrado, uma vitória cristã freou os otomanos, e eles só voltariam a avançar em Mohács, em 1526.",
        { note: "O corpo de Ladislau nunca apareceu. Em Varsóvia, o Túmulo do Soldado Desconhecido leva a inscrição 'WARNA 10 XI 1444'." },
        { note: "Os cronistas turcos, os poloneses e os húngaros contam a batalha de maneiras muito diferentes, e nenhum viu o conjunto. Por isso a ordem de batalha e os números aqui são reconstruções modernas, não fatos firmes." }
      ]}
    ]
  },

  montanhabranca: {
    war: "Revolta da Boêmia e Guerra dos Trinta Anos (1618–1648)",
    hook: "Uma hora de batalha decidiu o destino da Boêmia por trezentos anos.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O reino da Boêmia era um dos mais ricos do [[sacro império]], e a maioria de seus nobres era protestante. Seus reis eram os [[habsburgos]] de Viena, católicos. Quando se soube que o próximo rei seria Fernando, conhecido por perseguir protestantes na Estíria, os nobres boêmios se alarmaram. Em 23 de maio de 1618, na [[defenestração de Praga|defenestração de praga]], eles atiraram dois representantes do imperador, e um escrivão, pela janela do castelo. Os três sobreviveram, mas a revolta tinha começado.",
        "Os [[estados da Boêmia|estados da boêmia]] depuseram Fernando e, em agosto de 1619, elegeram rei o eleitor palatino Frederico V, calvinista e genro do rei da Inglaterra. Frederico foi coroado em novembro. Enquanto isso, Fernando II foi eleito imperador e juntou aliados: a [[liga católica de 1609]], chefiada por Maximiliano da Baviera, e reforços da Espanha.",
        { h: "O caminho até a Montanha Branca" },
        { timeline: [
          ["23 mai 1618", "Defenestração de Praga."],
          ["Ago–nov 1619", "Frederico V é eleito e coroado rei da Boêmia."],
          ["1620", "Os exércitos imperial e da Liga conquistam o oeste da Boêmia e marcham para Praga."],
          ["7–8 nov", "Os dois exércitos chegam diante de Praga."],
          ["8 nov, meio-dia", "A batalha, em pouco mais de uma hora."],
          ["9 nov", "Os imperiais entram em Praga."]
        ]},
        "Os exércitos imperial, sob o conde de Bucquoy, e da Liga, sob o conde de Tilly, juntaram-se e conquistaram a maior parte do oeste da Boêmia. Os boêmios armaram posições de defesa, mas os imperiais as contornaram e foram para Praga. O príncipe Cristiano de Anhalt forçou a marcha para chegar antes e ocupar a colina."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Frederico V, 24 anos" },
        "Jovem eleitor do Palatinado, aceitou a coroa da Boêmia com o apoio de seu conselheiro Cristiano de Anhalt e a esperança de ajuda de aliados protestantes, que quase não veio. Antes da batalha, almoçou no castelo com os enviados ingleses Weston e Conway, sem acreditar que a luta aconteceria naquele dia. Ao ir ao campo, só encontrou o exército em fuga. Passaria para a história com o apelido de 'rei de um inverno'.",
        { h: "Cristiano de Anhalt e o conde Thurn" },
        "Anhalt, de uns 52 anos, comandava o exército boêmio, que já tinha encolhido para cerca de 15.000 homens depois de revezes e deserções, segundo uma das contagens. O conde Jindřich Matyáš Thurn, um dos chefes da revolta, comandava a cavalaria. Os soldados dos dois lados, mercenários, estavam sem soldo havia meses, e a moral era baixa.",
        { h: "Bucquoy e Tilly" },
        "Charles Bonaventure de Longueval, conde de Bucquoy, um nobre do sul dos Países Baixos a serviço do imperador, era o comandante geral do lado católico. Tilly, de 61 anos, um general veterano, comandava o exército da Liga. Maximiliano da Baviera presidia o conselho católico. O jovem René Descartes talvez estivesse no exército católico, mas seu papel foi insignificante."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam. Os católicos tinham de 23.000 a talvez mais de 30.000 homens, somando cerca de 18.000 a 20.000 imperiais e 12.000 a 13.000 da Liga, mas as fontes não fecham a conta. Os boêmios tinham de 15.000 a 21.000 homens e uns dez canhões. Entre eles havia tropas boêmias, moravianas, alemãs, húngaras, e [[mercenários]].",
        { h: "O terreno" },
        "A Montanha Branca é uma colina baixa a oeste de Praga, acima do vale do riacho Litovice. A ala direita boêmia se apoiava no alto muro de um parque de caça junto ao palacete de Hvězda, a Estrela. A ala esquerda foi reforçada com artilharia. Havia pouco tempo para construir defesas. O tempo estava frio e úmido.",
        { h: "A noite antes" },
        "Na noite de 7 para 8 de novembro, Bucquoy mandou cavalaria contra tropas húngaras que dormiam, e as desorganizou. Anhalt chegou por volta da meia-noite. A Liga se posicionou por volta das cinco da manhã, e o exército imperial chegou perto das dez.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, Anhalt dispôs o exército em duas linhas com intervalos, como um tabuleiro de xadrez, com a cavalaria húngara na terceira linha, de reserva. Os católicos vieram do oeste: a Liga de Tilly em quatro linhas, à esquerda, e os imperiais em três linhas, com regimentos valões, à direita.",
        "Segundo, por volta do meio-dia, a ala direita imperial atacou e foi repelida pela cavalaria de Thurn e pelo regimento de Bubna.",
        "Terceiro, a cavalaria boêmia investiu contra um [[tércio de infantaria]] alemão, mas as unidades vizinhas não a apoiaram, e o ataque falhou.",
        "Quarto, os imperiais se reorganizaram com a cavalaria de Meggau e a cavalaria valã e atacaram a ala esquerda boêmia, que desabou em cerca de quinze minutos. A cavalaria húngara, na reserva e sem ter lutado, começou a se retirar. Segundo a historiografia tcheca, isso derrubou toda a ala esquerda.",
        "Quinto, o jovem príncipe Cristiano de Anhalt, filho do comandante, contra-atacou com nove cornetas de cavalaria. O ataque teve sucesso no começo, tomou um estandarte e capturou um comandante de tércio, mas a cavalaria imperial voltou, e o príncipe foi cercado e preso antes de a infantaria chegar.",
        "Sexto, os imperiais atacaram a ala direita boêmia, onde lutavam os alemães de Schlick e parte da infantaria de Thurn. Thurn se retirou, e Schlick foi capturado em outro ponto da linha.",
        "Sétimo, a infantaria boêmia disparou uma salva de longe e recuou. A cavalaria católica, entre ela uns 2.000 [[hussardos]] bávaros, empurrou os protestantes em direção ao palacete de Hvězda, a oeste de Praga. A infantaria napolitana de Carlo Spinelli tomou a artilharia boêmia.",
        "Oitavo, as reservas em Hvězda, a infantaria de Anhalt, meio regimento de Weimar e dois estandartes da guarda, esperaram a batalha toda e se renderam sem lutar. Frederico fugiu de Praga. A batalha tinha durado, segundo as fontes, perto de uma hora."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As perdas" },
        "Os números são discutidos. A câmara municipal de Praga enterrou 1.600 mortos, mas o historiador tcheco que reconstrói o dia acha esse número baixo e estima cerca de 5.000 boêmios mortos. O clérigo irlandês Henry Fitzsimon, confessor de Bucquoy, falou em até 9.000. Outras contagens dão de 2.800 a 4.000. Do lado católico, o mesmo Fitzsimon disse 250 a 300, mas outro relato fala em cerca de 2.000, que o historiador acha mais plausível. Os boêmios perderam toda a artilharia e cerca de cem estandartes.",
        { h: "O que mudou" },
        "Os imperiais entraram em Praga em 9 de novembro. Frederico partiu no dia 10. Os estados capitularam em 12 e 13 de novembro, o que pôs fim à confederação das terras da Coroa da Boêmia. Em 21 de junho de 1621, 27 líderes da revolta, entre eles o médico Jan Jesenius e o nobre Kryštof Harant, foram executados na Praça da Cidade Velha. Hoje, 27 cruzes no calçamento marcam o lugar. Cerca de cinco sextos da nobreza boêmia foram para o exílio, e suas terras foram confiscadas. Os calvinistas foram expulsos em 1621, o culto luterano foi proibido em 1622, e em 1626 os luteranos tiveram de se converter ou partir. A [[recatolicização]] durou dois séculos, e a população das terras tchecas caiu cerca de um terço até o fim da guerra. Uma resistência protestante continuou na Silésia e na Morávia até 1623.",
        { note: "O cronista católico Henry Fitzsimon descreve os moravianos no muro de Hvězda lutando até o último homem. A historiografia tcheca moderna considera o relato parcial, embora reconheça que os regimentos moravianos sofreram mais perdas que os outros." },
        { note: "Os católicos viram na vitória um milagre. Uma pintura comemorativa mostra Nossa Senhora da Vitória no alto e, abaixo, Fernando II e seu filho Fernando III." }
      ]}
    ]
  },

  lutzen: {
    war: "Guerra dos Trinta Anos, fase sueca (1630–1635)",
    hook: "A fumaça cobriu o campo, o rei da Suécia sumiu nela, e seu exército ganhou a batalha sem ele.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1630, o rei Gustavo Adolfo da Suécia desembarcou na Alemanha para salvar os protestantes na guerra dos trinta anos. Em 1631 venceu o conde de Tilly em Breitenfeld e, em 1632, passou pela Baviera. Seu exército usava [[mosqueteiros|mosquete]] em formações finas, artilharia leve e cavalaria que atacava depressa.",
        "O imperador Fernando II tinha dispensado Albrecht von Wallenstein, o nobre boêmio que levantara um exército à sua custa. Em 1632, chamou-o de volta como [[generalíssimo imperial]], com poderes quase ilimitados. Wallenstein resistiu aos suecos em Nuremberg, no verão. Depois, voltou-se para a Saxônia, aliada protestante.",
        { h: "O caminho até Lützen" },
        { timeline: [
          ["1631", "Gustavo Adolfo vence Tilly em Breitenfeld."],
          ["1632", "Wallenstein volta ao comando imperial e enfrenta os suecos em Nuremberg."],
          ["Nov 1632", "Os suecos marcham para a Saxônia, e Wallenstein ocupa Lützen. Pappenheim é mandado para Halle."],
          ["15 nov", "Os suecos acampam a cerca de 2 km de Lützen."],
          ["16 nov", "A batalha, do final da manhã até o anoitecer."]
        ]},
        "No início de novembro, Wallenstein, achando que Gustavo Adolfo iria para os quartéis de inverno, mandou o general Pappenheim, com cerca de 5.800 homens, para Halle. O rei descobriu e atacou. Em 15 de novembro, o exército sueco acampou a cerca de 2 km de Lützen, e Wallenstein mandou chamar Pappenheim de volta."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gustavo Adolfo, 37 anos" },
        "O 'Leão do Norte'. Reformou o exército sueco, liderava na frente e se expunha. Na manhã de Lützen, tomou posição na ala direita, com a cavalaria e uma tropa da Småland. Seu plano era dar a volta pela esquerda inimiga.",
        { h: "Albrecht von Wallenstein, 49 anos" },
        "Rico, frio e dado à astrologia, era mais um empresário da guerra do que um herói de cavalaria. Naquele dia, escolheu o terreno com cuidado: o fosso da estrada de Leipzig e uma elevação com três moinhos e a maior bateria. Mandou queimar casas de Lützen, o que gerou fumaça.",
        { h: "Os outros nomes" },
        "Bernardo de Saxe-Weimar comandava a ala esquerda sueca. Dodo von Knyphausen e Nils Brahe comandavam as duas linhas do centro. Do lado imperial, Gottfried Heinrich zu Pappenheim comandava a cavalaria que chegou do meio-dia em diante, e Heinrich Holk contra-atacou o centro sueco."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os suecos tinham cerca de 19.000 homens e 60 canhões, aí incluídos uns 2.000 saxões e cerca de 850 de Hesse-Kassel. Wallenstein tinha de 13.000 a 15.000 antes de Pappenheim chegar. Com ele, o total subia a cerca de 19.000 a 22.000, conforme a fonte. Os números de canhões variam: 24 para os imperiais em algumas contagens.",
        { h: "O terreno" },
        "Planície, cortada pelo fosso da estrada de Lützen a Leipzig, a Via Regia. A direita de Wallenstein se apoiava numa elevação baixa com três moinhos e o grosso da artilharia. Os suecos tinham de cruzar o canal Floßgraben antes de chegar. De manhã, uma neblina densa se misturou à fumaça de Lützen em chamas. Na Suécia, a expressão 'Lützendimma', a neblina de Lützen, ainda designa um nevoeiro muito denso. Alguns historiadores duvidam de que as casas queimadas fossem a causa.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, os suecos se alinharam em duas linhas de infantaria no centro, com a cavalaria nas alas. Os imperiais ficaram ao longo do fosso da estrada, com mosqueteiros dentro dele e a bateria dos moinhos na direita.",
        "Segundo, por volta das 11h, depois de a neblina e o canal terem atrasado a manhã, o ataque começou. Gustavo Adolfo atropelou os mosqueteiros no fosso, cruzou-o e tentou [[flanquear]] a esquerda imperial. Bernardo avançou pouco contra a direita imperial, na elevação dos moinhos.",
        "Terceiro, perto do meio-dia, Pappenheim chegou com cerca de 2.300 cavaleiros e empurrou a infantaria sueca de volta para o outro lado da estrada, quase aniquilando unidades de elite. Em 2011, foi encontrada uma vala comum com 47 soldados, que se acredita serem da Brigada Azul sueca, alcançada pela cavalaria de Pappenheim.",
        "Quarto, Pappenheim foi gravemente ferido na luta com a cavalaria sueca e morreu no dia seguinte. Os relatos divergem sobre a hora exata em que chegou e caiu.",
        "Quinto, por volta das 13h, Holk contra-atacou o centro sueco. Os dois lados perderam a coesão, e a luta virou tiroteios confusos na fumaça. O rei, tentando reagrupar a infantaria, foi com um pequeno séquito para um ponto perdido na névoa.",
        "Sexto, nessa confusão, ele deu de frente com uma unidade de cavalaria imperial. Foi baleado três vezes, caiu do cavalo, e seu corpo só foi achado depois da luta. Os relatos divergem nos detalhes: uma fonte sueca fala em um tiro no braço, outro no pulmão e outro na têmpora, já caído.",
        "Sétimo, por volta das 15h, a reserva de Knyphausen segurou a linha, e houve uma pausa.",
        "Oitavo, a luta recomeçou sob o comando de Bernardo. Por volta das 16h, os suecos tomaram Lützen e a bateria dos moinhos e viraram os canhões contra os imperiais que recuavam.",
        "Nono, por volta das 17h, com a noite caindo, Wallenstein ordenou a retirada, deixando canhões e bagagem. A infantaria de Pappenheim, cerca de 2.900 homens, só chegou depois do anoitecer e cobriu a retirada para Leipzig."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As perdas" },
        "Os imperiais perderam cerca de 5.000 a 5.160 homens, entre mortos, feridos e presos, e 24 canhões. Os suecos perderam entre 3.400 e 6.000, segundo a fonte. Wallenstein deixou mais de 1.200 feridos para trás, e a retirada para a Boêmia foi assediada por camponeses saxões.",
        { h: "O que mudou" },
        "Gustavo Adolfo estava morto, e a rainha, Cristina, tinha seis anos. O chanceler Axel Oxenstierna assumiu o governo e decidiu continuar a guerra. Em abril de 1633, a Suécia e aliados alemães formaram a Liga de Heilbronn, com dinheiro francês. Wallenstein abandonou Leipzig e voltou para a Boêmia. Em fevereiro de 1634, agentes imperiais o assassinaram, depois do boato de que ele poderia trocar de lado.",
        { note: "A vitória foi dos suecos pela maior parte das contagens, mas alguns historiadores falam em uma vitória tática 'marginal' dos imperiais, já que a morte do rei foi um golpe maior do que a perda do campo." },
        { note: "Os suecos colocaram uma pedra de granito onde o rei caiu, um dia depois da batalha. Em 1832, ganhou um dossel de ferro, e em 1907 uma capela. Os suecos ainda celebram o Dia de Gustavo Adolfo em 6 de novembro, a data no [[calendário juliano]] então usado na Suécia." }
      ]}
    ]
  },

  naseby: {
    war: "Primeira Guerra Civil Inglesa (1642–1646)",
    hook: "O rei tinha a melhor cavalaria da Inglaterra, e ela saiu do campo atrás da bagagem.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A [[primeira guerra civil inglesa]] opunha o rei Carlos I ao Parlamento. Os partidários do Parlamento eram chamados de [[cabeças redondas]], e os do rei, de [[realistas]]. Em 1644, os parlamentares tinham vencido em Marston Moor, mas depois sofreram reveses em Lostwithiel e na segunda batalha de Newbury. Como os generais eram também membros do Parlamento e brigavam entre si, o Parlamento aprovou, em dezembro de 1644, a [[ordenança de autonegação]], que os obrigou a largar o comando.",
        "O resultado foi o [[exército de Novo Modelo|exército de novo modelo]], um exército profissional com oficiais promovidos por mérito, comandado por Sir Thomas Fairfax. Em abril de 1645, Fairfax marchou para o oeste, para socorrer Taunton, e depois recebeu ordem de cercar Oxford, a capital do rei.",
        { h: "O caminho até Naseby" },
        { timeline: [
          ["Dez 1644", "O Parlamento aprova a ordenança de autonegação."],
          ["31 mai 1645", "Os realistas tomam Leicester de assalto."],
          ["Início jun", "O Parlamento manda Fairfax atacar o exército do rei."],
          ["12 jun", "Patrulhas se chocam perto de Daventry."],
          ["13 jun", "Cromwell chega a Fairfax com cavalaria."],
          ["14 jun", "A batalha."]
        ]},
        "Os realistas tomaram Leicester em 31 de maio, e o Parlamento ordenou a Fairfax que buscasse o exército de campo do rei. Em 13 de junho, Oliver Cromwell chegou com cavalaria, e Edward Rossiter com tropas da Associação Oriental. O rei e seus conselheiros, entre eles lorde Digby, decidiram lutar."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Sir Thomas Fairfax, 33 anos" },
        "Comandante em chefe do Exército de Novo Modelo. Competente e corajoso, lutava no meio das tropas. Em Naseby, comandou a ação geral e, no fim, liderou pessoalmente o seu regimento contra o último núcleo de resistência da infantaria realista.",
        { h: "Príncipe Rupert, 25 anos" },
        "Sobrinho do rei e o melhor comandante de cavalaria realista, conhecido por cargas arrasadoras. Em Naseby, comandou a ala direita. Sua força era o ataque rápido, e sua fraqueza, a dificuldade de parar a cavalaria depois de lançada.",
        { h: "Os outros nomes" },
        "Do lado do Parlamento, Oliver Cromwell, de 46 anos, comandava a cavalaria da ala direita, Henry Ireton a da esquerda, e Philip Skippon a infantaria. O coronel John Okey comandava os dragões. Do lado do rei, o príncipe Maurício estava com Rupert, lorde Astley comandava a infantaria do centro, e Sir Marmaduke Langdale, a cavalaria do norte, na esquerda. O próprio rei Carlos I, de 44 anos, ficou na reserva."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os dois lados são contados de modos diferentes. O Parlamento tinha cerca de 13.500 a 14.000 homens: uns 6.000 cavaleiros, 7.000 infantes e de 676 a 1.000 [[dragões]]. A cifra de 676 vem de folhas de pagamento, e a de 1.000 é a mais citada. Os realistas tinham de 7.400 a 8.600: cerca de 4.100 cavaleiros e 3.300 infantes. Em número, o Parlamento tinha quase o dobro.",
        { h: "O terreno" },
        "Os realistas ficaram numa crista entre Little Oxendon e East Farndon, a uns 3 km de Market Harborough, e o Parlamento na crista de Naseby. As sebes de Sulby protegiam a direita realista e a esquerda parlamentar. A encosta tinha moitas e uma toca de coelhos. A neblina da manhã atrapalhou a visão. Fairfax pensou em ficar nas encostas ao norte, mas, por conselho de Cromwell, recuou um pouco para atrair os realistas.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, as linhas. Os realistas: Rupert e Maurício na direita, com 2.000 a 3.000 cavaleiros, a infantaria de Astley no centro em três [[brigadas|brigada]], Langdale na esquerda com 1.500 cavaleiros do norte, e o rei na reserva, com uns 800 infantes e sua guarda. O Parlamento: Ireton na esquerda, com cinco regimentos e meio de cavalaria, Skippon no centro, com cinco [[regimentos|regimento]] na frente e três de apoio e 300 mosqueteiros como [[forlorn hope]], uns onze canhões entre a infantaria, Cromwell na direita com seis regimentos e meio. Okey estava com os dragões nas sebes de Sulby.",
        "Segundo, o centro realista atacou primeiro. Rupert segurou a cavalaria para atacar junto com a infantaria. A infantaria disparou uma salva e foi para o corpo a corpo. Skippon foi ferido, mas ficou no campo, e a infantaria do Parlamento recuou.",
        "Terceiro, na esquerda do Parlamento, a ala de Ireton repeliu a princípio os adversários, mas Ireton foi derrubado do cavalo, ferido e capturado. A segunda linha realista quebrou boa parte da cavalaria parlamentar. Alguns regimentos foram salvos pelo fogo dos dragões de Okey, e outros fugiram até Northampton.",
        "Quarto, toda a ala de Rupert saiu em perseguição, sem deixar reserva. Ele não conseguiu reagrupar os cavaleiros, que galoparam atrás dos fugitivos até a bagagem do Parlamento. A escolta da bagagem se recusou a ceder e os expulsou.",
        "Quinto, na direita, a cavalaria de Cromwell enfrentou a de Langdale. Depois de cerca de meia hora, Langdale atacou por uma encosta irregular e foi derrotado. Cromwell guardou reservas.",
        "Sexto, Cromwell virou essas reservas contra o flanco e a retaguarda do centro realista. Os dragões de Okey atacaram o flanco da infantaria. Alguns regimentos de Ireton, em parte reagrupados, se juntaram.",
        "Sétimo, muitos infantes realistas se renderam. Um regimento, aparentemente o dos 'Bluecoats', resistiu até Fairfax liderar o seu contra ele e, segundo o relato, tomar a bandeira pessoalmente. Uma testemunha disse que eles ficaram de pé 'como uma muralha de bronze'.",
        "Oitavo, o rei tentou levar sua guarda ao combate, mas o conde de Carnwath agarrou as rédeas de seu cavalo. Segundo uma tradição, perguntou: 'Vossa Majestade quer ir ao encontro da morte?'. A guarda recuou.",
        "Nono, Rupert voltou tarde demais para salvar a infantaria. A cavalaria realista se retirou para Ashby-de-la-Zouch. A perseguição do Parlamento foi até Leicester. Muitos realistas morreram em Marston Trussell, onde tomaram por estrada principal o caminho que levava a um adro de igreja. Pelo menos cem mulheres que seguiam o exército foram mortas."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "As perdas" },
        "O Parlamento perdeu cerca de 200 mortos e 535 feridos. Os realistas, cerca de 1.000 mortos ou feridos e uns 4.500 prisioneiros, quase todos da infantaria, além de toda a artilharia e os suprimentos. O rei perdeu cerca de 500 oficiais veteranos.",
        { h: "O que mudou" },
        "Fairfax retomou Leicester em 18 de junho e foi para o sudoeste, limpar o oeste do país. Os realistas se renderam em Truro, e os chefes fugiram para Jersey. O rei nunca mais teve um exército de campo da mesma qualidade, e a guerra acabou em menos de um ano, com vitória do Parlamento.",
        { note: "A bagagem do rei trazia cartas que mostravam suas tentativas de ajuda da Confederação Católica da Irlanda e de potências católicas da Europa. O Parlamento as publicou como 'The King's Cabinet Opened', o que reforçou o apoio a lutar até o fim." },
        { note: "Os historiadores apontam a perseguição de Rupert como a chave da batalha. A ala dele venceu o seu pedaço do campo, mas saiu dele, e a cavalaria de Cromwell, que manteve reservas, decidiu o resto." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  poitiers: {
    terrain: [
      { t: "sea", x: 0, y: 44, w: 14, h: 18, l: "Pântano" },
      { t: "note", x: 52, y: 47, l: "Sebe com uma só passagem" },
      { t: "note", x: 84, y: 66, l: "Floresta de Nouaillé" }
    ],
    units: [
      { id: "eW", s: "a", k: "inf", w: 22, h: 6, l: "Warwick (esquerda, com Oxford)" },
      { id: "eB", s: "a", k: "inf", w: 18, h: 6, l: "Príncipe Negro (centro)" },
      { id: "eS", s: "a", k: "inf", w: 22, h: 6, l: "Salisbury e Suffolk (direita)" },
      { id: "eC", s: "a", k: "cav", w: 9, h: 4, l: "Captal de Buch" },
      { id: "fA", s: "b", k: "cav", w: 10, h: 5, l: "Audrehem" },
      { id: "fC", s: "b", k: "cav", w: 10, h: 5, l: "Clermont" },
      { id: "f1", s: "b", k: "inf", w: 30, h: 5, l: "Brienne (a pé)" },
      { id: "f2", s: "b", k: "inf", w: 30, h: 5, l: "Delfim (a pé)" },
      { id: "f3", s: "b", k: "inf", w: 30, h: 5, l: "Orléans (a pé)" },
      { id: "f4", s: "b", k: "inf", w: 30, h: 5, l: "Rei João (a pé)" }
    ],
    steps: [
      { t: "Os ingleses esperam em três divisões atrás da sebe, com o pântano à esquerda. Os franceses vêm a pé, em quatro divisões uma atrás da outra, com dois grupos de cavaleiros escolhidos na frente.",
        p: { eW: [30, 55], eB: [52, 61], eS: [74, 55], eC: [10, 66], fA: [28, 33], fC: [74, 33], f1: [50, 25], f2: [50, 17], f3: [50, 10], f4: [50, 3.5] } },
      { t: "Os cavaleiros atacam. O pântano barra Audrehem, e os arqueiros acertam seus besteiros e os cavalos. Clermont ataca a passagem da sebe e é morto.",
        p: { fA: [28, 48], fC: [74, 48] }, x: ["fA", "fC"] },
      { t: "A divisão de Brienne, a pé, é repelida. Brienne morre.",
        p: { f1: [50, 42] }, x: ["f1"] },
      { t: "A divisão do delfim força a passagem da sebe. A luta corpo a corpo dura umas duas horas, e o delfim é retirado pelos guardas.",
        p: { f2: [56, 43] } },
      { t: "O delfim recua em ordem. Orléans deixa o campo com cerca de metade dos homens, e a outra metade ataca fraco e é repelida. Muitos homens de Warwick vão atrás.",
        p: { f2: [50, 22], f3: [50, 38], eW: [36, 45] }, x: ["f2", "f3"] },
      { t: "O rei João avança a pé, com a oriflama. Os ingleses estão exaustos e quase sem flechas. O Príncipe manda o captal de Buch dar a volta pelo flanco (o trajeto exato não se conhece).",
        p: { f4: [50, 32], eC: [92, 40], eW: [30, 55] } },
      { t: "O Príncipe ordena o avanço geral, e os arqueiros lutam de espada e machado. Os homens de Warwick voltam à linha. O captal aparece atrás dos franceses.",
        p: { eB: [52, 42], eS: [74, 44], eC: [60, 8] } },
      { t: "A linha do rei se quebra. Os franceses são empurrados contra uma curva do rio Miosson. João e seu filho Filipe se rendem.",
        p: { f4: [52, 20], eB: [52, 30], eS: [74, 34], eC: [58, 6] }, x: ["f4"] }
    ]
  },

  montanhabranca: {
    terrain: [
      { t: "hill", x: 76, y: 38, rx: 16, ry: 30, l: "Montanha Branca" },
      { t: "note", x: 70, y: 4, l: "Muro do parque de Hvězda" },
      { t: "note", x: 94, y: 66, l: "Praga →" }
    ],
    units: [
      { id: "aL", s: "a", k: "inf", w: 6, h: 18, l: "Liga Católica (Tilly)" },
      { id: "aI", s: "a", k: "inf", w: 6, h: 18, l: "Exército imperial (Bucquoy)" },
      { id: "aV", s: "a", k: "cav", w: 5, h: 12, l: "Cavalaria imperial (Meggau, valões)" },
      { id: "aS", s: "a", k: "inf", w: 5, h: 9, l: "Napolitanos (Spinelli)" },
      { id: "bR", s: "b", k: "inf", w: 6, h: 14, l: "Ala direita (Schlick)" },
      { id: "bC", s: "b", k: "inf", w: 6, h: 14, l: "Centro (Anhalt)" },
      { id: "bL", s: "b", k: "cav", w: 6, h: 16, l: "Ala esquerda (Thurn)" },
      { id: "bK", s: "b", k: "cav", w: 5, h: 9, l: "Cristiano, o Jovem" },
      { id: "bH", s: "b", k: "cav", w: 5, h: 12, l: "Cavalaria húngara (reserva)" }
    ],
    steps: [
      { t: "Os boêmios esperam na colina, com a ala direita encostada no muro de Hvězda e os húngaros de reserva. Os católicos chegam do oeste: a Liga à esquerda, os imperiais à direita.",
        p: { aL: [26, 18], aI: [26, 52], aV: [18, 58], aS: [22, 38], bR: [66, 14], bC: [66, 34], bL: [66, 54], bK: [78, 34], bH: [90, 34] } },
      { t: "O primeiro ataque imperial, na direita, é repelido pela cavalaria de Thurn e pelo regimento de Bubna.",
        p: { aV: [40, 54], aI: [34, 52] } },
      { t: "A cavalaria boêmia investe contra um tércio alemão, mas as unidades vizinhas não a apoiam, e o ataque falha.",
        p: { bL: [58, 54], aI: [38, 52] } },
      { t: "Os imperiais voltam com Meggau e os valões e atacam a esquerda boêmia, que desaba em uns quinze minutos. A cavalaria húngara se retira sem lutar.",
        p: { aV: [52, 56], aI: [48, 52], bL: [70, 60], bH: [96, 20] }, x: ["bL", "bH"] },
      { t: "Cristiano, o Jovem, contra-ataca com nove cornetas, toma um estandarte e é cercado e capturado antes de a infantaria chegar.",
        p: { bK: [58, 44] }, x: ["bK"] },
      { t: "Os imperiais atacam a direita boêmia, onde lutam os alemães de Schlick. Thurn se retira, e Schlick é capturado.",
        p: { aL: [42, 20], aI: [56, 48], bR: [68, 16], bC: [70, 36] } },
      { t: "A infantaria boêmia dispara uma salva de longe e recua. A cavalaria católica a empurra para Hvězda, e os napolitanos de Spinelli tomam a artilharia.",
        p: { aS: [56, 34], aL: [52, 20], bC: [78, 36] }, x: ["bC"] },
      { t: "As reservas em Hvězda se rendem sem lutar. A batalha dura cerca de uma hora, e Frederico foge de Praga.",
        p: { aL: [62, 16], aI: [64, 44], bR: [78, 10] }, x: ["bR"] }
    ]
  },

  lutzen: {
    terrain: [
      { t: "note", x: 8, y: 4, l: "Lützen (em chamas)" },
      { t: "hill", x: 20, y: 17, rx: 10, ry: 4, l: "Moinhos e bateria" },
      { t: "note", x: 50, y: 30, l: "Estrada de Leipzig e seu fosso" },
      { t: "note", x: 50, y: 69, l: "Canal Floßgraben" }
    ],
    units: [
      { id: "sR", s: "a", k: "cav", w: 22, h: 5, l: "Gustavo Adolfo (ala direita)" },
      { id: "s1", s: "a", k: "inf", w: 30, h: 4, l: "Centro, 1ª linha (Brahe)" },
      { id: "s2", s: "a", k: "inf", w: 30, h: 4, l: "Centro, 2ª linha (Knyphausen)" },
      { id: "sL", s: "a", k: "cav", w: 22, h: 5, l: "Bernardo de Saxe-Weimar (ala esquerda)" },
      { id: "iD", s: "b", k: "inf", w: 34, h: 3, l: "Mosqueteiros no fosso da estrada" },
      { id: "iC", s: "b", k: "inf", w: 28, h: 5, l: "Centro imperial" },
      { id: "iW", s: "b", k: "inf", w: 16, h: 5, l: "Bateria dos moinhos" },
      { id: "iL", s: "b", k: "cav", w: 22, h: 5, l: "Cavalaria imperial (ala esquerda)" },
      { id: "iP", s: "b", k: "cav", w: 18, h: 5, l: "Pappenheim" }
    ],
    steps: [
      { t: "De manhã, a neblina e a fumaça de Lützen escondem tudo. Os imperiais estão ao longo do fosso da estrada, com a bateria dos moinhos na direita. Os suecos, em duas linhas, com a cavalaria nas alas.",
        p: { sR: [80, 54], s1: [48, 56], s2: [48, 62], sL: [18, 54], iD: [48, 33], iC: [52, 24], iW: [20, 21], iL: [80, 26], iP: [96, 3] } },
      { t: "Por volta das 11h, os suecos cruzam o Floßgraben e atacam. O rei atropela os mosqueteiros do fosso e tenta flanquear a esquerda imperial. Bernardo avança pouco contra os moinhos.",
        p: { sR: [82, 40], s1: [48, 44], s2: [48, 52], sL: [20, 42], iD: [48, 34] }, x: ["iD"] },
      { t: "Perto do meio-dia, Pappenheim chega com cerca de 2.300 cavaleiros e empurra a infantaria sueca de volta, quase destruindo unidades de elite.",
        p: { iP: [76, 34], s1: [52, 52], sR: [88, 46] } },
      { t: "Pappenheim cai mortalmente ferido. Os relatos divergem sobre a hora exata.",
        p: { iP: [72, 38] }, x: ["iP"] },
      { t: "Por volta das 13h, Holk contra-ataca o centro sueco. Na fumaça, os dois lados perdem a coesão.",
        p: { iC: [52, 36], s1: [48, 48], s2: [48, 56] } },
      { t: "O rei, tentando reagrupar a infantaria, se perde com um pequeno séquito, esbarra numa unidade de cavalaria imperial e é morto.",
        p: { sR: [78, 36] }, x: ["sR"] },
      { t: "Por volta das 15h, a reserva de Knyphausen segura a linha, e há uma pausa.",
        p: { s2: [48, 48] } },
      { t: "Sob o comando de Bernardo, os suecos recomeçam. Por volta das 16h, tomam Lützen e a bateria dos moinhos e viram os canhões contra os imperiais.",
        p: { sL: [20, 26], iW: [20, 14], iC: [52, 30] }, x: ["iW"] },
      { t: "Por volta das 17h, com a noite caindo, Wallenstein se retira, deixando canhões e bagagem. A infantaria de Pappenheim chega depois do anoitecer e cobre a retirada.",
        p: { iC: [56, 14], iL: [82, 14], s1: [48, 36], s2: [48, 44], sL: [22, 20] }, x: ["iC", "iL"] }
    ]
  },

  naseby: {
    terrain: [
      { t: "note", x: 6, y: 38, l: "Sebes de Sulby" },
      { t: "note", x: 50, y: 69, l: "Naseby" }
    ],
    units: [
      { id: "pI", s: "a", k: "cav", w: 20, h: 5, l: "Ireton (esquerda)" },
      { id: "pS", s: "a", k: "inf", w: 30, h: 5, l: "Infantaria de Skippon" },
      { id: "pS2", s: "a", k: "inf", w: 22, h: 4, l: "Apoio (3 regimentos)" },
      { id: "pC", s: "a", k: "cav", w: 22, h: 5, l: "Cromwell (direita)" },
      { id: "pD", s: "a", k: "inf", w: 8, h: 3, l: "Dragões de Okey" },
      { id: "pB", s: "a", k: "camp", w: 12, h: 4, l: "Bagagem" },
      { id: "rR", s: "b", k: "cav", w: 20, h: 5, l: "Rupert e Maurício (direita)" },
      { id: "rA", s: "b", k: "inf", w: 30, h: 5, l: "Infantaria de Astley" },
      { id: "rK", s: "b", k: "inf", w: 14, h: 4, l: "Reserva do rei" },
      { id: "rL", s: "b", k: "cav", w: 20, h: 5, l: "Langdale (esquerda)" },
      { id: "rG", s: "b", k: "cav", w: 9, h: 4, l: "Guarda do rei" }
    ],
    steps: [
      { t: "O Parlamento tem Ireton na esquerda, Skippon no centro e Cromwell na direita, com os dragões de Okey escondidos nas sebes. Os realistas têm Rupert na direita, Astley no centro e Langdale na esquerda.",
        p: { pI: [20, 48], pS: [50, 50], pS2: [50, 57], pC: [80, 48], pD: [8, 44], pB: [50, 66], rR: [20, 22], rA: [50, 20], rK: [50, 10], rL: [80, 22], rG: [50, 3] } },
      { t: "O centro realista ataca primeiro. Depois de uma salva, a luta é corpo a corpo, e a infantaria do Parlamento é empurrada para trás.",
        p: { rA: [50, 32], pS: [50, 46], pS2: [50, 54] } },
      { t: "Rupert varre a ala de Ireton, que é capturado. Os dragões de Okey salvam alguns regimentos, e outros fogem.",
        p: { rR: [20, 38], pI: [20, 52] }, x: ["pI"] },
      { t: "A ala de Rupert persegue os fugitivos até a bagagem do Parlamento, sem deixar reserva. A escolta se recusa a ceder.",
        p: { rR: [38, 62] } },
      { t: "Na direita, Cromwell enfrenta Langdale. Depois de cerca de meia hora, Langdale ataca por uma encosta irregular e é derrotado.",
        p: { rL: [80, 12], pC: [80, 32] }, x: ["rL"] },
      { t: "Cromwell volta suas reservas contra o flanco e a retaguarda do centro realista. Os dragões de Okey atacam o flanco da infantaria.",
        p: { pC: [66, 26], pD: [30, 36], rA: [50, 30] } },
      { t: "Muitos infantes realistas se rendem. Um regimento resiste até Fairfax atacá-lo com o seu.",
        p: { pS: [50, 38], pC: [60, 22], rA: [50, 26] }, x: ["rA"] },
      { t: "O rei tenta levar a guarda ao combate, mas Carnwath segura suas rédeas, e a guarda recua.",
        p: { rG: [70, 2], rK: [50, 6] }, x: ["rG", "rK"] },
      { t: "Rupert volta tarde demais. A cavalaria realista se retira para Ashby-de-la-Zouch e o Parlamento a persegue até Leicester.",
        p: { rR: [12, 10], pC: [58, 8] }, x: ["rR"] }
    ]
  }
});
