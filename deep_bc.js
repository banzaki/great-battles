// In-depth battles, batch bc: tiro, watlingstreet, delta, didgori, molodi (great-battles pack).
// Checked against the English and Portuguese Wikipedia articles on the Siege of Tyre, the Boudican revolt, the Battle of
// Watling Street, the Battle of the Delta, the Battle of Djahy, the Battle of Didgori, David IV of Georgia, the Battle of
// Molodi and Mikhail Vorotynsky, Tacitus (Annals 14.29-39, in translation), and the works those pages cite.
// Where sources disagree the text says so. No diagram for Didgori (sources disagree on the dispositions) nor for the
// Delta (the only source is the Medinet Habu reliefs and inscriptions, which give no deployment).

Object.assign(GLOSSARY, {
  "molhe de cerco": "Aterro de pedra e terra construído dentro d'água para criar um caminho até uma cidade que fica numa ilha, de modo que os soldados e as máquinas cheguem a pé às muralhas.",
  "torre de cerco": "Torre de madeira com rodas ou apoiada numa base, mais alta que a muralha inimiga. Os soldados atiravam de cima e, às vezes, desciam por uma ponte até o topo da muralha.",
  "fenícios": "Povo de comerciantes e navegadores das cidades do litoral do atual Líbano, como Tiro, Sídon e Biblos. Seus marinheiros eram os melhores do Mediterrâneo oriental e serviam à Pérsia.",
  "melqart": "O deus protetor de Tiro. Os gregos o identificavam com Héracles, e o santuário dele, na ilha, era o centro da vida religiosa da cidade.",
  "passadiço de assalto": "Ponte móvel, baixada de um navio ou de uma torre sobre a muralha inimiga para os soldados passarem direto para o topo.",
  "colônia romana": "Cidade fundada por Roma para instalar soldados veteranos em terras conquistadas. Em troca de uma terra, eles ficavam como reserva armada e símbolo do poder romano.",
  "procurador": "Funcionário romano que cuidava do dinheiro, dos impostos e dos bens do imperador numa província, separado do governador militar.",
  "druidas": "Sacerdotes e sábios dos povos celtas da Gália e da Britânia. Os romanos os viam como líderes da resistência e destruíram o santuário deles na ilha de Mona.",
  "icenos": "Povo celta do leste da Britânia, atual Norfolk e Suffolk. Foi aliado de Roma até a morte do rei Prasutagus, em cerca de 60 d.C.",
  "povos do mar": "Nome moderno de grupos de origem incerta, vindos do Mediterrâneo, que atacaram o Egito, a Síria e outras terras por volta de 1200 a.C. Os textos egípcios citam, entre outros, os peleset, tjekker, shekelesh, denyen e weshesh.",
  "medinet habu": "O templo funerário de Ramsés III, perto de Luxor. Suas paredes têm relevos e inscrições sobre as guerras do faraó contra os povos do mar, a mais importante fonte sobre elas.",
  "arco composto": "Arco feito de madeira, chifre e tendão colados, mais curto e mais potente que um arco de madeira simples. Era a arma principal dos arqueiros egípcios.",
  "colapso da idade do bronze": "A queda, em poucas décadas por volta de 1200 a.C., de vários reinos do Mediterrâneo oriental, como os hititas e Ugarit. As causas são discutidas: invasões, secas, terremotos e revoltas.",
  "quipchaques": "Povo nômade de língua turca das estepes ao norte do Cáucaso, famoso pelos arqueiros a cavalo. Davi IV instalou dezenas de milhares de famílias quipchaques na Geórgia.",
  "atabegue": "Título de um governador turco que, na prática, mandava numa região em nome de um príncipe seljúcida menor.",
  "guerra santa": "Chamado religioso à guerra contra os inimigos da fé. No islã é a jihad; os sultões seljúcidas a proclamavam para reunir tropas contra os cristãos.",
  "guliay-gorod": "Em russo, 'cidade que anda': fortaleza de painéis de madeira, desmontável e transportável em carroças, que os russos montavam no campo de batalha como um muro móvel.",
  "ravina": "Vale estreito e fundo, escavado pela água, onde um exército pode se mover sem ser visto de longe."
});

Object.assign(DEEP, {
  tiro: {
    war: "Conquista do Império Persa por Alexandre (334–330 a.C.)",
    hook: "Alexandre não podia chegar à ilha, então construiu uma estrada de pedra no mar. Sete meses depois, a cidade que parecia impossível de tomar caiu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de vencer Dario em Isso, em 333 a.C., Alexandre tinha um problema que o campo de batalha não resolvia. A frota persa, composta em grande parte por navios dos [[fenícios]], ainda dominava o Mediterrâneo. Ela podia desembarcar tropas atrás dele e fazer a Grécia se revoltar. Sem navios para enfrentá-la, Alexandre decidiu tirar os portos dela: conquistar o litoral cidade por cidade.",
        "As cidades fenícias do norte se renderam sem luta. Em Tiro, a cidade mais rica da região, os chefes mandaram oferecer a Alexandre uma coroa de ouro, mas recusaram deixá-lo entrar para fazer um sacrifício a [[melqart]], o deus da cidade. Eles queriam ficar neutros e esperar o resultado da guerra. Alexandre entendeu a recusa como um desafio. Segundo Arriano, os tírios ainda mataram os mensageiros que ele mandou e jogaram os corpos da muralha.",
        { h: "O caminho até Tiro" },
        { timeline: [
          ["333 a.C.", "Alexandre derrota Dario em Isso. A frota persa continua dona do mar."],
          ["Fim de 333 a.C.", "Alexandre desce pelo litoral. Biblos e Sídon se rendem."],
          ["Janeiro de 332 a.C.", "Os tírios recusam deixar Alexandre entrar. Começa o cerco."],
          ["Julho de 332 a.C.", "Tiro cai. Alexandre segue para Gaza e depois para o Egito."]
        ]},
        "Tiro era uma cidade-ilha. Ficava a cerca de 800 metros da costa, com muralhas que, do lado do continente, chegavam a uns 45 metros de altura, segundo Arriano. Tinha dois portos, um ao norte e outro ao sul. Era o lugar ideal para esperar, e os tírios contavam também com Cartago, a colônia mais poderosa deles, que prometeu ajuda. Mulheres e crianças foram mandadas para lá."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Alexandre III da Macedônia, 23 anos" },
        "Alexandre podia ter passado direto por Tiro e seguido para o Egito. Não passou, e a razão era estratégica, mais do que orgulho: deixar a frota persa com um grande porto às costas seria perigoso. Ele viu que o único jeito de vencer uma cidade que só se alcançava pelo mar era criar um caminho ou ter navios. Começou com o caminho, porque não tinha navios. A teimosia, aqui, tinha cálculo.",
        { h: "Os tírios" },
        "O rei de Tiro se chamava Azemilco. Os nomes dos chefes que realmente organizaram a defesa não chegaram até nós. O que as fontes mostram é uma cidade que resistiu com inventividade: lançou brulotes, atacou os trabalhadores com navios, jogou pedras na água para barrar os aríetes e mandou mergulhadores cortarem os cabos das âncoras dos navios de Alexandre.",
        { h: "Admeto" },
        "Admeto era o oficial dos [[hipaspistas]] que, segundo Arriano, foi o primeiro macedônio a subir na muralha de Tiro no assalto final. Morreu ali, atingido por uma lança, mas os soldados que o seguiram abriram a passagem."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números do exército terrestre de Alexandre em Tiro não aparecem com clareza nas fontes. O que se sabe é a frota: depois que as cidades fenícias e Chipre passaram para o lado dele, Alexandre reuniu cerca de 220 navios, segundo as fontes antigas, das quais uns 80 vinham de cidades fenícias e 120 de Chipre. A cidade tinha cerca de 40.000 habitantes e uma frota própria de [[trirremes|trirreme]] e navios maiores, como os [[quinquerremes|quinquerreme]].",
        { note: "Os números de Tiro vêm de Arriano, Diodoro e Cúrcio, que escreveram séculos depois e nem sempre concordam. Usamos as cifras como ordem de grandeza, não como contagem exata." },
        { h: "O molhe" },
        "Alexandre mandou construir um [[molhe de cerco]] da costa até a ilha. Pedras vieram das ruínas da velha Tiro, no continente, e troncos de cedro vieram das montanhas do Líbano. A água perto da costa era rasa, mas ficava mais funda perto da ilha, e ali o trabalho começou a sofrer. As muralhas altas e os navios de Tiro, que passavam ao longo do molhe, atiravam nos operários. Alexandre protegeu os trabalhadores com telas de couro, e construiu duas [[torres de cerco|torre de cerco]] de uns 50 metros de altura, com [[máquinas de arremesso|máquina de arremesso]] no topo.",
        "A resposta dos tírios foi um [[brulote]]. Eles encheram de material inflamável um velho navio de carga de cavalos, penduraram caldeirões de óleo nos mastros e rebocaram o navio até a ponta do molhe. O fogo destruiu as torres e as máquinas.",
        { h: "A frota muda tudo" },
        { formation: true },
        "Alexandre percebeu que sem navios não ia chegar. Foi a Sídon e juntou a frota que tinha se rendido. Os reis fenícios, vendo o rumo da guerra, passaram para o lado dele, e os reis de Chipre mandaram uns 120 navios. Quando voltou, os tírios recuaram para dentro dos portos e fecharam a entrada do porto sul com um cabo flutuante e a do porto norte com uma fila de trirremes. Alexandre bloqueou os dois portos: os cipriotas no norte, os fenícios no sul.",
        "Os tírios tentaram uma saída. Segundo Arriano, atacaram de surpresa os navios cipriotas, quando os marinheiros estavam em terra. Alexandre voltou depressa, reuniu navios e afundou ou capturou os tírios que tinham saído. Depois disso, a frota de Tiro não saiu mais.",
        { h: "Aríetes, pedras e mergulhadores" },
        "O molhe foi alargado, e Alexandre pôs [[aríetes|aríete]] em navios de carga e em galeras lentas. Os tírios responderam jogando pedras grandes no fundo, diante da muralha, e os aríetes não chegavam. Alexandre mandou navios com guindastes tirá-las. Os mergulhadores tírios, então, cortaram os cabos das âncoras. Alexandre trocou os cabos por correntes de ferro.",
        "A muralha cedeu primeiro no lado sul da ilha, onde os aríetes abriram uma pequena [[brecha|brecha na muralha]]. A tentativa de passar pela brecha, logo depois, falhou. Alexandre deu dois dias de descanso aos homens e esperou o mar calmar.",
        { h: "O assalto final" },
        "No dia do assalto, a frota atacou dos dois lados ao mesmo tempo. Os cipriotas e os fenícios forçaram a entrada nos dois portos, e outras embarcações fizeram ataques falsos ao longo das muralhas, para segurar os defensores. Dois navios com [[passadiços|passadiço de assalto]] chegaram à brecha, com os hipaspistas e Alexandre. Admeto subiu primeiro e foi morto. Os macedônios passaram a muralha, e o resto seguiu, pelo molhe e pelos portos.",
        "Dentro da cidade houve combate de rua. Os tírios lutaram nos telhados e na praça, e muitos correram para os templos. Segundo Diodoro e Cúrcio, a violência foi maior porque, durante o cerco, os tírios tinham matado prisioneiros macedônios diante dos olhos do exército."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Tiro caiu em julho de 332 a.C., depois de uns sete meses de cerco. As perdas variam muito entre as fontes. Para os macedônios, Arriano dá cerca de 400 mortos. Para os tírios, ele fala em uns 8.000 mortos e 30.000 vendidos como escravos. Diodoro e Cúrcio dão outros números: entre 6.000 e 7.000 mortos na luta e cerca de 2.000 homens crucificados na praia. Os que se refugiaram no templo de Melqart, entre eles o rei Azemilco, foram poupados.",
        { h: "Por que importa" },
        "A queda de Tiro tirou da Pérsia o último grande conjunto de portos. Sem eles, a frota persa não tinha mais onde ancorar, e Alexandre pôde seguir para Gaza e para o Egito sem medo de ser cortado por trás. Para os historiadores militares, é um dos grandes feitos de engenharia de cerco da Antiguidade: um exército sem navios conquistou uma ilha.",
        "O molhe teve um efeito que dura até hoje. A areia foi se acumulando dos dois lados do aterro, e a ilha virou uma península. Tiro ainda é habitada, e uma parte da cidade moderna fica sobre o que foi a obra de Alexandre.",
        { h: "Curiosidades e controvérsias" },
        { note: "As cifras de mortos e escravos: Arriano, Diodoro e Cúrcio não concordam, e vários números aparecem de forma diferente em cada versão. Nenhum é uma contagem confiável." },
        { note: "O outro relato: o autor antigo Polieno conta uma história diferente, em que Alexandre deixa Parmênio no cerco, parte para a Arábia e volta depois para salvá-lo. Os historiadores em geral seguem Arriano, e foi o que fizemos aqui." },
        { note: "As fontes principais foram escritas de 300 a 450 anos depois, a partir de memórias de oficiais de Alexandre que se perderam. Os detalhes do cerco devem ser lidos com cuidado." }
      ]}
    ]
  },

  watlingstreet: {
    war: "Revolta de Boudica contra Roma (60–61 d.C.)",
    hook: "Dez mil romanos, de costas para um bosque, contra uma multidão que ninguém soube contar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Os romanos invadiram a Britânia em 43 d.C. Alguns povos foram conquistados, outros ficaram como aliados nominais, entre eles os [[icenos]], do leste da ilha. O rei deles, Prasutagus, tentou proteger o reino deixando-o, em testamento, às duas filhas e ao imperador Nero. Depois que ele morreu, em cerca de 60 d.C., Roma ignorou o testamento.",
        "Tácito conta o que veio depois: funcionários romanos tomaram terras, escravizaram parentes do rei, e a viúva, Boudica, foi açoitada e as filhas, violentadas. Dião Cássio acrescenta que financistas romanos, entre eles o filósofo Sêneca, cobraram empréstimos de uma vez. Era uma província que já se sentia explorada.",
        { h: "A revolta" },
        { timeline: [
          ["43 d.C.", "Roma invade a Britânia."],
          ["60 ou 61 d.C.", "O rei Prasutagus morre. O governador Suetônio Paulino ataca a ilha de Mona, no País de Gales."],
          ["60 ou 61 d.C.", "Os icenos e os trinovantes se revoltam e destroem Camuloduno, Londínio e Verulâmio."],
          ["60 ou 61 d.C.", "Suetônio reúne seu exército e enfrenta os rebeldes numa passagem estreita."]
        ]},
        "A cidade mais exposta era Camuloduno (hoje Colchester), uma [[colônia romana]] de veteranos sem muralhas, ressentida pelos locais, com um grande templo ao imperador Claudius. O [[procurador]] Cato Deciano mandou só uns 200 homens mal armados. A cidade foi tomada depois de dois dias. A Legião IX, do comandante Cerial, tentou socorrê-la e teve a infantaria destruída numa emboscada. Suetônio, de volta, chegou a Londínio e decidiu abandoná-la: não tinha tropas para defendê-la, e preferiu salvar a província. Londínio e Verulâmio foram queimadas. Tácito fala em cerca de 70.000 romanos e aliados mortos nas três cidades; estimativas modernas ficam entre 70.000 e 80.000."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Boudica, rainha dos icenos" },
        "Quase tudo que sabemos dela vem de dois escritores romanos, Tácito e Dião Cássio, que escreveram décadas depois e a descrevem de formas diferentes. Tácito a mostra num carro de guerra, com as filhas, falando às tribos. Dião fala de uma adivinhação com uma lebre e de um chamado à deusa Andraste. Os discursos que ambos lhe atribuem foram escritos por eles, não são palavras registradas.",
        { h: "Caio Suetônio Paulino" },
        "Governador desde 58 ou 59, era um soldado experiente, que tinha lutado nas montanhas do Atlas. Quando a revolta começou, estava a centenas de quilômetros, em Mona, atacando o santuário dos [[druidas]]. Voltou depressa por território hostil. Sua escolha mais discutida foi abandonar Londínio. Ele perdeu uma cidade para ganhar o tempo e o lugar de que precisava para a batalha.",
        { h: "Os que faltaram" },
        "O prefeito da Legião II, Peônio Postumo, recebeu a ordem de se juntar a Suetônio e não obedeceu. Tácito conta que ele se matou depois, de vergonha, ao saber da vitória que não ajudou a conquistar."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo Tácito, Suetônio tinha pouco menos de 10.000 homens armados: a Legião XIV Gemina, destacamentos da Legião XX e as tropas [[auxiliares]] que estavam por perto. Uma [[legião]] tinha em torno de 5.000 homens, mas os destacamentos eram menores.",
        "O número dos bretões é um problema. Dião Cássio fala em 230.000, e outras fontes em cifras parecidas. Nenhum historiador moderno acredita nisso: uma tal multidão não poderia ser alimentada. Os icenos e outros povos tinham sido desarmados anos antes e estavam mal equipados. Tácito diz que a multidão trouxe as famílias em carroças, para assistir à vitória.",
        { note: "Os números da batalha, 80.000 bretões mortos contra cerca de 400 romanos, vêm de Tácito. Os historiadores modernos os consideram exagerados, como as cifras de qualquer batalha antiga contada pelo vencedor." },
        { h: "O terreno" },
        "Ninguém sabe onde foi. Nenhuma fonte antiga nomeia o lugar. Tácito diz só que Suetônio escolheu uma passagem estreita, com uma mata atrás e uma planície aberta à frente, onde não havia como o inimigo se esconder para emboscá-lo. A maioria dos historiadores o coloca nos Midlands, talvez perto da antiga estrada romana chamada Watling Street, por isso o nome. Os candidatos mais citados são Mancetter (Warwickshire), High Cross (Leicestershire) e vários outros, sem prova definitiva. A tradição de que a batalha foi em King's Cross, em Londres, é rejeitada pelos historiadores.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, a formação. Suetônio pôs os legionários em ordem cerrada no centro, os auxiliares nas pontas da infantaria e a cavalaria nos flancos. A passagem estreita protegia os dois lados, e a mata, as costas. Isso obrigava o inimigo a atacar de frente, mas também impedia os romanos de fugir.",
        "Segundo, a espera. Os bretões avançaram em massa, a pé e a cavalo, com Boudica passando em seu carro diante das fileiras. Tácito diz que, antes do choque, Suetônio falou aos soldados: o inimigo era mais mulher do que guerreiro, e eles deviam ignorar o barulho e o saque até a vitória. A fala é de Tácito, cujo sogro, Agrícola, estava no estado-maior de Suetônio e pode ter sido a fonte.",
        "Terceiro, os dardos e a cunha. Os legionários ficaram parados até os bretões chegarem perto o bastante. Então lançaram os [[pilos|pilo]] de uma vez, o que enfraqueceu o primeiro grupo, e avançaram em [[cunha]], de escudo e [[gládio]], como Suetônio tinha mandado.",
        "Quarto, o massacre. Os auxiliares seguiram os legionários, e a cavalaria, de lança, rompeu os grupos que ainda resistiam. Os bretões tentaram recuar, mas as próprias carroças, enfileiradas na retaguarda, fecharam o caminho. Tácito diz que os romanos não pouparam ninguém, nem as mulheres, nem os animais de carga."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Tácito diz que morreram uns 80.000 bretões e cerca de 400 romanos. É um número bonito demais para ser verdadeiro, mas a vitória foi total. Boudica, segundo Tácito, tomou veneno. Dião diz que ela adoeceu e morreu, e teve um funeral luxuoso. O túmulo dela não foi achado, e as muitas lendas locais não têm prova.",
        "Nero mandou reforços da Germânia: 2.000 legionários, oito coortes auxiliares e 1.000 cavaleiros. A repressão foi dura, e a fome atingiu as tribos que não tinham plantado. O novo procurador, Júlio Classiciano, criticou Suetônio em Roma, que acabou substituído por Petrônio Turpiliano, mais conciliador.",
        { h: "Por que importa" },
        "A vitória salvou a província. Segundo o biógrafo Suetônio (Suetônio Tranquilo, que não é o governador), Nero chegou a pensar em abandonar a Britânia. A revolta mostrou o preço de explorar um povo conquistado, e Roma passou a governar com mais cuidado. O sul da ilha ficou estável, e as cidades queimadas foram reconstruídas.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: Tácito situa os fatos no ano em que Peto e Turpiliano eram cônsules, o que dá 61. Alguns historiadores, como Kevin Carroll, defendem 60. Por isso escrevemos 60 ou 61." },
        { note: "As provas: as cidades queimadas deixaram uma camada de cinzas, o 'horizonte de destruição de Boudica', achada em Colchester, Londres e St Albans. Uma cabeça de bronze de Nero, achada em Suffolk, pode ter sido arrancada na revolta." },
        { note: "As fontes: quase tudo vem de Tácito e Dião Cássio, escritos décadas depois. As cifras, as falas e os detalhes da batalha são os mais duvidosos." }
      ]}
    ]
  },

  delta: {
    war: "Invasões dos Povos do Mar e o colapso da Idade do Bronze (c. 1200–1175 a.C.)",
    hook: "O Egito de Ramsés III resistiu ao ataque que derrubou impérios inteiros, e a história está gravada na parede de um templo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Por volta de 1200 a.C., o Mediterrâneo oriental estava num dos piores momentos de sua história. Em poucas décadas, cidades foram queimadas, reinos desapareceram e o comércio quebrou. É o chamado [[colapso da idade do bronze]]. As causas são muito discutidas: invasões, secas, terremotos, revoltas. Ninguém sabe ao certo.",
        "Os egípcios culpavam um grupo de invasores a quem hoje chamamos de [[povos do mar]]. Nos textos do faraó Ramsés III, eles aparecem como uma aliança de povos de nomes estranhos: peleset, tjekker, shekelesh, denyen e weshesh. Cartas do último rei de Ugarit, Ammurapi, falam de navios inimigos, de cidades queimadas e de um exército que não tinha mais como se defender.",
        { h: "O caminho até o Delta" },
        { timeline: [
          ["c. 1200 a.C.", "Cidades da Síria, do sul da Anatólia e de Chipre são destruídas. O Império Hitita desaparece."],
          ["Ano 8 de Ramsés III (c. 1179–1175 a.C.)", "Os povos do mar chegam à fronteira do Egito, por terra e por mar."],
          ["Mesmo ano", "Batalha em Djahy, na costa do Levante, e batalha na foz do Nilo."]
        ]},
        "Segundo os textos do faraó, as terras do norte caíram uma depois da outra e ninguém resistiu às armas deles. A arqueologia mostra uma imagem menos simples: Carquemis, por exemplo, sobreviveu. Mas o medo era real, e o Egito era o último grande reino de pé."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ramsés III" },
        "Foi o último grande [[faraó]] do Império Novo. Reinou de cerca de 1186 a 1155 a.C. e se via como um novo Ramsés II. Para sua propaganda, a vitória sobre os povos do mar era a prova de que os deuses protegiam o Egito. Por isso, tudo o que sabemos vem de um texto que não é neutro: foi escrito para glorificá-lo.",
        { h: "Os invasores" },
        "Não sabemos os nomes de seus chefes, e nem de onde vinham. Os relevos de Medinet Habu mostram mulheres e crianças em carros de bois, e por isso muitos historiadores acham que eram migrantes à procura de terra, não só guerreiros. O que os textos egípcios chamam de 'conspiração' pode ter sido uma enorme migração."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As fontes e o que não sabemos" },
        "Quase tudo vem do templo de [[medinet habu]], perto de Luxor, onde os relevos e a longa inscrição de Ramsés III contam a guerra. É uma fonte rica e, ao mesmo tempo, problemática: é propaganda real, e não diz onde exatamente a batalha foi, nem quantos homens lutaram.",
        { note: "A data e o local são incertos. As datas propostas ficam entre cerca de 1179 e 1175 a.C., por causa das dúvidas sobre a cronologia dos reis anteriores. O texto fala em 'bocas do rio', sem dizer qual braço do Nilo. Por isso não desenhamos um diagrama da batalha: nenhuma fonte descreve as posições dos exércitos." },
        { h: "Primeiro, a terra" },
        "O texto diz que Ramsés preparou a fronteira em Djahy, na costa do Levante, e que os invasores por terra foram detidos ali. Muitos estudiosos tratam o combate em Djahy como uma batalha à parte. Os relevos mostram a infantaria egípcia, com mercenários, combatendo os inimigos e os carros de bois com famílias.",
        { h: "Depois, o mar" },
        "A parte mais conhecida é a naval. Segundo a inscrição, o faraó mandou armar navios nas bocas do Nilo, e os preparou como um muro. Os inimigos entraram na foz e foram cercados: os navios egípcios fecharam a saída, e na margem os arqueiros, com seus [[arcos compostos|arco composto]], atiraram sem parar. Os relevos mostram navios virados, inimigos mortos na água e na praia e prisioneiros levados por soldados egípcios.",
        "Nos relevos, os navios dos povos do mar têm só vela, sem remos, e a proa em forma de cabeça de ave, enquanto os egípcios têm remadores. Isso pode ter dado aos egípcios vantagem para manobrar perto da margem. A inscrição fala de inimigos puxados para a praia, cercados e mortos, e de montes de corpos.",
        { note: "Os estudiosos discutem até que ponto o relato reflete uma ou várias batalhas, e como o combate em Djahy se liga ao do Delta. Os textos são propaganda e podem ter condensado episódios diferentes numa só grande vitória." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O Egito resistiu. As fontes não dão números de mortos nem de prisioneiros. O texto do faraó diz que os invasores foram destruídos, o que é propaganda, mas é verdade que o Egito não caiu como o Império Hitita, Alashiya ou Ugarit.",
        "O Papiro Harris I, escrito no fim do reinado, diz que Ramsés instalou prisioneiros de guerra em fortalezas. Alguns historiadores ligam isso à chegada dos filisteus a Canaã, mas a ligação é discutida.",
        { h: "Por que importa" },
        "É uma das mais antigas batalhas navais registradas. Também é um raro momento em que vemos, do lado dos vencedores, uma crise que destruiu um mundo.",
        "A vitória foi cara. As guerras com os povos do mar e com os líbios esvaziaram os cofres, e menos de 80 anos depois o Egito tinha perdido seu império na Ásia e na Núbia.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome 'Batalha do Delta' é moderno. A inscrição não dá um nome à batalha, e a data, o local e o tamanho dos exércitos são desconhecidos." },
        { note: "A origem dos povos do mar é um dos grandes mistérios da arqueologia. Algumas teorias os ligam ao Egeu, à Anatólia ou ao Mediterrâneo central, mas não há consenso." }
      ]}
    ]
  },

  didgori: {
    war: "Guerras georgiano-seljúcidas (séculos XI e XII)",
    hook: "Um rei pequeno e um exército muito menor derrubaram a maior coligação muçulmana do Cáucaso, num vale estreito demais para ela.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século XI, os turcos [[seljúcidas]] invadiram o Cáucaso. A Geórgia, dividida em reinos e principados e saqueada todo ano, virou praticamente um vassalo. Quando Davi IV subiu ao trono, em 1089, tinha 16 anos e um reino em ruínas.",
        "Davi mudou o jogo. Reformou o exército, tirou o poder da nobreza rebelde e passou à ofensiva. Venceu os turcos em Ertsukhi, em 1104, em Trialeti, em 1110, e em Rakhsi, em 1118. A cidade de Tbilisi, porém, continuava nas mãos dos muçulmanos desde o século VIII.",
        { h: "A aposta dos quipchaques" },
        "Para ter soldados suficientes, Davi fez uma jogada audaciosa. Casado com uma filha do cã quipchaque Otrok, convenceu os [[quipchaques]], nômades da estepe ao norte do Cáucaso, a se mudarem para a Geórgia. Entre 1118 e 1120, quase 40.000 famílias, segundo as fontes, se instalaram no reino, e cada família devia fornecer ao menos um soldado. Os georgianos ganharam milhares de [[arqueiros a cavalo|arqueiro a cavalo]] profissionais.",
        { timeline: [
          ["1089", "Davi IV sobe ao trono da Geórgia."],
          ["1118–1120", "Os quipchaques se instalam na Geórgia."],
          ["1121", "O sultão Mahmud declara [[guerra santa]] contra Davi. A coligação marcha."],
          ["12 de agosto de 1121", "Batalha de Didgori."],
          ["1122", "Davi toma Tbilisi."]
        ]},
        "A resposta veio em 1121. O sultão seljúcida Mahmud declarou a [[guerra santa]], em parte porque temia o novo exército georgiano. A coligação foi comandada por Ilghazi, governante de Mardim, que em 1119 tinha destruído um exército de cruzados de Antioquia. Havia ainda os árabes de Dubays ibn Sadaqa e tropas turcas do Azerbaijão e de guarnições locais."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Davi IV, o Construtor, cerca de 48 anos" },
        "Reinou de 1089 a 1125 e entrou para a história georgiana como o 'Construtor'. Na batalha, apostou que um exército pequeno e disciplinado podia vencer um enorme, mas desunido, se o inimigo fosse forçado a lutar onde não conseguia se desdobrar.",
        { h: "Ilghazi de Mardim" },
        "Um emir turco experiente, famoso por ter vencido os cruzados em 1119. Comandava uma coligação feita de contingentes que vinham de lugares diferentes, por rotas diferentes e com chefes diferentes, e isso tornava o exército grande, mas difícil de manobrar.",
        { h: "Os aliados de Davi" },
        "Além dos georgianos e dos quipchaques, havia alguns alanos e um pequeno grupo de cavaleiros francos, ocidentais que vieram do Oriente latino. O número deles varia nas fontes, de uma centena (Mateus de Edessa) a centenas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes georgianas dão a Davi cerca de 56.000 homens: uns 40.000 georgianos, 15.000 quipchaques e pequenos grupos de alanos e francos. Historiadores modernos ficam perto de 60.000.",
        "A coligação muçulmana é muito mais incerta. Mateus de Edessa e Gauthier, o Chanceler, falam em até 600.000, e outro cronista, Smbat Sparapet, em 400.000. Historiadores georgianos estimam entre 100.000 e 250.000. Fontes muçulmanas dão números bem menores. Todas as cifras antigas são, provavelmente, exageradas.",
        { note: "As cifras das crônicas foram escritas para exaltar a vitória cristã. Usamos as faixas dos historiadores modernos como referência." },
        { h: "O terreno" },
        "Os morros de Didgori, a cerca de 40 km a oeste de Tbilisi: bosques, encostas, vales e prados, conhecidos pelos georgianos. As forças muçulmanas entraram na Geórgia exaustas depois da marcha pelo Cáucaso, em vários grupos. A região os dividiu: parte ficou presa em passagens estreitas, parte tentou subir encostas, e a cavalaria georgiana os perseguia.",
        { h: "A batalha" },
        "Os relatos diferem nos detalhes. Por isso não desenhamos um diagrama: as fontes se contradizem sobre quem comandava cada ala, e algumas descrições são de fontes tardias.",
        "Primeiro, Davi evitou esperar em Tbilisi. Deixou o inimigo entrar na Geórgia e o interceptou nos morros, antes que os grupos se juntassem. Dividiu o exército em duas partes, uma sob seu comando e outra sob o do filho, Demétrio.",
        "Segundo, uma das versões conta uma armadilha. Cerca de 200 quipchaques teriam fingido desertar para o acampamento muçulmano e, quando foram recebidos, atacaram os que os receberam, no meio da tropa. É uma versão que não aparece com a mesma clareza em todas as fontes.",
        "Terceiro, o ataque. Davi lançou a cavalaria pesada com os cavaleiros francos contra a coligação em marcha, quando ela não tinha como se desdobrar. As alas atacaram pelos lados. O resultado, segundo os georgianos, foi que o grande exército não conseguiu reagir e se desfez em fuga.",
        "Quarto, a perseguição. Ilghazi foi ferido e se retirou. Os georgianos perseguiram os fugitivos por vários dias e fizeram muitos prisioneiros. Segundo a tradição georgiana, são Jorge teria lutado ao lado deles."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os georgianos venceram. As baixas são desconhecidas: as crônicas cristãs falam em centenas de milhares de mortos, e as fontes turcas, em dezenas de milhares de mortos e cerca de 4.000 prisioneiros. Nenhum número é confiável. Do lado georgiano, não há contagem.",
        { h: "Por que importa" },
        "Em fevereiro de 1122, Davi tomou Tbilisi, que os muçulmanos mantinham desde 736, e transferiu a capital de Kutaisi para lá. Começou a chamada Idade de Ouro da Geórgia, com expansão do reino e florescimento da cultura. A derrota de Ilghazi também aliviou a pressão sobre os Estados cruzados da Síria.",
        "Os georgianos chamam a batalha de 'vitória milagrosa' e celebram o dia 12 de agosto, o Didgoroba. Na década de 1990, um monumento de espadas foi erguido no campo de batalha.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: as cifras variam de 30.000 a 600.000 para o exército muçulmano, segundo a fonte. Não existe consenso." },
        { note: "O relato: a descrição detalhada da batalha varia entre as fontes, e alguns historiadores sugerem que Davi atraiu a cavalaria seljúcida para uma passagem estreita, em vez de usar a falsa deserção dos quipchaques." }
      ]}
    ]
  },

  molodi: {
    war: "Guerras russo-crimeias (séculos XVI e XVII)",
    hook: "Um ano depois de ver Moscou queimar, os russos montaram um forte de madeira numa colina e atraíram o cã da Crimeia para o ataque que o destruiu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1552 e 1556, Ivan IV, o Terrível, tinha conquistado os canatos tártaros de Cazã e Astracã, abrindo o caminho do Volga ao Cáspio. Restava o Canato da Crimeia, apoiado pelos otomanos, que fazia incursões anuais contra a Rússia para capturar gente e vender como escravos. A Rússia, ao mesmo tempo, estava presa à Guerra da Livônia, no oeste, e abalada pela oprichnina, a polícia interna de Ivan.",
        "Em 1571, o cã Devlet I Giray enganou as defesas, chegou a Moscou e queimou os subúrbios. Ivan tinha deixado a cidade antes. Foi uma humilhação enorme. Em 1572, o cã voltou, com um exército maior, apoiado por cerca de 7.000 [[janízaros]] otomanos, segundo algumas fontes. Seu objetivo era conquistar a Rússia.",
        { timeline: [
          ["1552–1556", "A Rússia conquista Cazã e Astracã."],
          ["1571", "Devlet Giray queima os subúrbios de Moscou."],
          ["27 de julho de 1572", "O exército da Crimeia atravessa o rio Oca."],
          ["29 de julho a 2 de agosto de 1572", "Batalha de Molodi."]
        ]},
        "A defesa do sul estava nas mãos do príncipe Mikhail Vorotynsky, que passou cerca de dez anos fortalecendo a fronteira com fortes e a Grande Linha de [[abatis]]. Em 1572, a seu comando, reuniu-se o exército que ia esperar o cã perto de Serpukhov e Kolomna."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Mikhail Vorotynsky" },
        "Comandante supremo do exército russo, era um chefe experiente da defesa da fronteira. A batalha foi o auge da carreira dele. Em 1573, porém, foi acusado de feitiçaria e morreu depois de torturado, a caminho do exílio, segundo o cronista Kurbsky, inimigo de Ivan; os registros oficiais dizem apenas que foi executado. Os detalhes são discutidos.",
        { h: "Dmitri Khvorostinin" },
        "Chefe do regimento avançado. Foi ele quem destruiu parte da retaguarda tártara perto de Molodi e, depois, fingiu recuar, para atrair o cã até a fortaleza móvel.",
        { h: "Devlet I Giray" },
        "O cã da Crimeia, que em 1571 tinha incendiado Moscou. Era um guerreiro ousado, e seu exército era sobretudo de [[cavalaria]], feito para o ataque rápido, não para tomar posições fortificadas. Um de seus chefes, Divey Murza, foi capturado na batalha.",
        { h: "O tsar" },
        "O [[tsar]] Ivan IV não estava no campo de batalha. Quem comandou a defesa foi Vorotynsky."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os russos tinham em torno de 20.000 homens, segundo uma lista dos regimentos, mais alguns milhares de [[cossacos]]. Outros historiadores sugerem até 35.000. As estimativas variam de 20.000 a 70.000, por causa de fontes muito diferentes.",
        "Sobre os tártaros, as crônicas russas falam em 120.000 a 150.000 homens, mas os historiadores modernos não acreditam nisso. A faixa mais aceita fica entre 40.000 e 60.000, com cerca de 7.000 janízaros, segundo alguns. Os russos tinham [[arcabuzeiros|arcabuz]], artilharia e a fortaleza móvel.",
        { note: "Os números de ambos os lados vêm de crônicas e listas de regimentos. A bibliografia sobre a batalha só ganhou profundidade no fim do século XX. Um estudo de 2019 rejeita as perdas enormes que as crônicas russas atribuem aos tártaros." },
        { h: "O terreno" },
        "O campo fica perto da vila de Molodi, ao sul de Moscou, no rio Rozhay. Os russos montaram o [[guliay-gorod]], uma fortaleza de painéis de madeira, numa colina protegida pelo rio. Numa [[ravina]] ali perto, um exército podia se mexer sem ser visto.",
        { h: "A batalha" },
        { formation: true },
        "Primeiro, a travessia. Em 27 de julho, o cã atravessou o Oca em dois pontos. Uma coluna cruzou perto da foz do Lopasnya, e a força principal, em Drakino, onde o regimento de Nikita Odoevsky foi derrotado depois de uma luta dura.",
        "Segundo, a isca. Em 29 de julho, o regimento avançado de Khvorostinin alcançou a retaguarda tártara perto de Molodi e destruiu uma boa parte dela. Depois fingiu recuar, e o exército principal do cã o seguiu, direto para o guliay-gorod.",
        "Terceiro, os assaltos. Depois de escaramuças, em 31 de julho o cã atacou o forte com tudo e foi rechaçado. O chefe Divey Murza foi capturado. Dentro do forte, faltava água e, segundo a tradição, os defensores comeram os próprios cavalos.",
        "Quarto, o golpe. Em 2 de agosto, o cã mandou a cavalaria descer dos cavalos e atacar a pé, com os janízaros. No fim do dia, Vorotynsky saiu do forte com o regimento principal por uma ravina e atacou os tártaros e otomanos por trás. Ao mesmo tempo, Khvorostinin saiu do forte pela frente. Cercado, o exército se rompeu.",
        "O cã fugiu na mesma noite, atravessando o Oca. Os russos o perseguiram até o rio. Uma retaguarda de cerca de 2.000 homens foi destruída, e muitos dos que tentaram cruzar se afogaram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória russa. Segundo o historiador Penskoy, os tártaros perderam cerca de 27.000 homens, sendo uns 12.000 afogados no Oca; a Crônica de Novgorod fala em 100.000, número que não merece crédito. Os russos perderam de 4.000 a 6.000, e cerca de 3.000 arcabuzeiros morreram na defesa da colina. Segundo algumas fontes, só uns 15.000 homens voltaram à Crimeia.",
        { h: "Por que importa" },
        "O Canato da Crimeia perdeu boa parte de seus homens em idade de combate, e as grandes incursões contra Moscou pararam por quase 20 anos, até 1591. Os otomanos desistiram de dominar o Volga. A fronteira russa avançou cerca de 300 km para o sul, e mais tarde nasceram ali cidades como Voronej e Yelets.",
        "Mesmo assim, a batalha é pouco lembrada, e o historiador V. V. Penskoy a considera subestimada pela historiografia russa.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os dias: as fontes divergem por um dia ou dois, e aqui usamos o calendário juliano da época, de 29 de julho a 2 de agosto." },
        { note: "O relato: algumas versões atribuem a manobra pelas costas a Khvorostinin, outras a Vorotynsky. Um artigo de uma revista da Crimeia diz que a retirada do cã foi organizada e que não houve destruição total." },
        { note: "As testemunhas: o Livro dos Regimentos (Razryad) e as memórias do alemão Heinrich Staden, que servia a Ivan, são as fontes mais próximas dos fatos." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  tiro: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 100, y: 36, rx: 14, ry: 42, l: "Continente" },
      { t: "hill", x: 38, y: 36, rx: 11, ry: 13, l: "Ilha de Tiro" },
      { t: "note", x: 60, y: 31, l: "Molhe de Alexandre" },
      { t: "note", x: 26, y: 70, l: "Oeste: mar aberto" }
    ],
    units: [
      { id: "mA", s: "a", k: "inf", w: 6, h: 14, l: "Exército de Alexandre" },
      { id: "m1", s: "a", k: "camp", w: 8, h: 3 },
      { id: "m2", s: "a", k: "camp", w: 8, h: 3 },
      { id: "m3", s: "a", k: "camp", w: 8, h: 3 },
      { id: "m4", s: "a", k: "camp", w: 8, h: 3 },
      { id: "mT", s: "a", k: "camp", w: 5, h: 4, l: "Torres de cerco" },
      { id: "mC", s: "a", k: "ship", w: 9, h: 3, l: "Frota cipriota" },
      { id: "mP", s: "a", k: "ship", w: 9, h: 3, l: "Frota fenícia" },
      { id: "mR", s: "a", k: "ship", w: 6, h: 3, l: "Navios com aríetes" },
      { id: "mB", s: "a", k: "ship", w: 6, h: 3, l: "Navios com passadiços" },
      { id: "tW", s: "b", k: "inf", w: 14, h: 3, l: "Defensores nas muralhas" },
      { id: "tN", s: "b", k: "ship", w: 8, h: 3, l: "Trirremes de Tiro (porto norte)" },
      { id: "tS", s: "b", k: "ship", w: 8, h: 3, l: "Trirremes de Tiro (porto sul)" },
      { id: "tF", s: "b", k: "ship", w: 3, h: 3, l: "Brulote" }
    ],
    steps: [
      { t: "Janeiro de 332 a.C. Tiro é uma ilha a cerca de 800 m da costa, com muralhas altas e dois portos, um ao norte e um ao sul. Alexandre tem o exército em terra e nenhuma frota. Os navios no alto são os aliados fenícios e cipriotas que ainda vão se juntar a ele, em Sídon.",
        p: { mA: [93, 50], m1: [86, 36], m2: [86, 36], m3: [86, 36], m4: [86, 36], mT: [90, 28],
             mC: [14, 4], mP: [30, 4], mR: [46, 4], mB: [60, 4],
             tW: [46, 36, 90], tN: [38, 26], tS: [38, 46], tF: [30, 36] } },
      { t: "Alexandre manda construir um molhe de pedra até a ilha. Os tírios atiram da muralha e atacam os trabalhadores com trirremes, que passam ao longo do aterro.",
        p: { m1: [78, 36], tN: [62, 28], tS: [62, 44] } },
      { t: "O molhe avança. Quando fica mais fundo, perto da ilha, o trabalho se complica. Alexandre levanta duas torres de cerco de uns 50 m, cobertas com peles, com máquinas de arremesso no topo.",
        p: { m2: [70, 36], m3: [62, 36], mT: [60, 36], tN: [42, 27], tS: [42, 45] } },
      { t: "Os tírios enchem um velho navio de carga com material inflamável, penduram caldeirões de óleo nos mastros e o rebocam até a ponta do molhe. O fogo destrói as torres e as máquinas.",
        p: { tF: [56, 36], m4: [54, 36] }, x: ["mT"] },
      { t: "Sem navios, Alexandre não chega. Ele vai a Sídon e junta cerca de 220 navios fenícios, cipriotas e de outras cidades. Os tírios recuam para dentro dos portos e fecham as entradas. Alexandre bloqueia os dois portos: os cipriotas ao norte, os fenícios ao sul.",
        p: { mC: [30, 22], mP: [30, 50], tN: [40, 28], tS: [40, 44] }, x: ["tF"] },
      { t: "Os tírios tentam uma saída contra os navios cipriotas, num momento em que os marinheiros estão em terra. Alexandre volta depressa, reúne navios e afunda ou captura os que saíram. Depois disso, a frota de Tiro não sai mais.",
        p: { tN: [32, 24], mC: [28, 20] }, x: ["tN"] },
      { t: "Alexandre põe aríetes em navios de carga e em galeras lentas. Os tírios jogam pedras grandes no fundo diante da muralha; Alexandre manda tirá-las com guindastes. Mergulhadores cortam os cabos das âncoras; Alexandre troca os cabos por correntes. A muralha cede no lado sul.",
        p: { mR: [42, 54], tW: [38, 50], mP: [32, 54] } },
      { t: "No dia do assalto, a frota ataca os dois portos ao mesmo tempo, e outros navios fazem ataques falsos nas muralhas. Dois navios com passadiços chegam à brecha, com os hipaspistas e Alexandre. Admeto sobe primeiro e é morto.",
        p: { mB: [40, 53], mR: [46, 53], mC: [32, 28], mP: [32, 46], mA: [72, 36, 90] } },
      { t: "Os macedônios passam a muralha, e a luta continua nas ruas. Segundo Arriano, cerca de 8.000 tírios morrem; Diodoro e Cúrcio falam em 6.000 a 7.000 e cerca de 2.000 crucificados na praia. Os que se refugiam no templo de Melqart são poupados.",
        p: { mA: [48, 40, 90], mB: [40, 46] }, x: ["tW", "tS"] }
    ]
  },

  watlingstreet: {
    terrain: [
      { t: "hill", x: 50, y: 68, rx: 36, ry: 6, l: "Mata (atrás dos romanos)" },
      { t: "note", x: 50, y: 47, l: "Passagem estreita" }
    ],
    units: [
      { id: "rL", s: "a", k: "inf", w: 16, h: 4, l: "Legionários (XIV Gemina e parte da XX)" },
      { id: "rA1", s: "a", k: "inf", w: 8, h: 3, l: "Auxiliares" },
      { id: "rA2", s: "a", k: "inf", w: 8, h: 3, l: "Auxiliares" },
      { id: "rC1", s: "a", k: "cav", w: 7, h: 3.5, l: "Cavalaria" },
      { id: "rC2", s: "a", k: "cav", w: 7, h: 3.5, l: "Cavalaria" },
      { id: "bF", s: "b", k: "inf", w: 40, h: 8, l: "Bretões a pé" },
      { id: "bH1", s: "b", k: "cav", w: 14, h: 4, l: "Cavaleiros bretões" },
      { id: "bH2", s: "b", k: "cav", w: 14, h: 4, l: "Cavaleiros bretões" },
      { id: "bB", s: "b", k: "car", w: 5, h: 3, l: "Boudica e as filhas (carro)" },
      { id: "bW", s: "b", k: "camp", w: 70, h: 3, l: "Carroças com as famílias" }
    ],
    steps: [
      { t: "Suetônio escolhe uma passagem estreita, com mata atrás e planície à frente. Põe os legionários em ordem cerrada no centro, os auxiliares nas pontas da infantaria e a cavalaria nos flancos. Os bretões, muito mais numerosos, ocupam a planície; atrás deles, as famílias esperam nas carroças.",
        p: { rL: [50, 54], rA1: [38, 54], rA2: [62, 54], rC1: [30, 54], rC2: [70, 54],
             bF: [50, 14], bH1: [20, 16], bH2: [80, 16], bB: [50, 24], bW: [50, 4] } },
      { t: "Os bretões avançam em massa, a pé e a cavalo. Boudica passa em seu carro diante das fileiras e fala às tribos.",
        p: { bF: [50, 24], bH1: [20, 26], bH2: [80, 26], bB: [50, 32] } },
      { t: "Suetônio fala aos soldados: ignorar o barulho, lançar os dardos, lutar de escudo e espada e não pensar no saque antes da vitória. Os legionários ficam parados, no lugar.",
        p: { bF: [50, 32], bH1: [20, 33], bH2: [80, 33], bB: [50, 38] } },
      { t: "Quando os bretões chegam perto o bastante, os legionários lançam os pilos todos de uma vez.",
        p: { bF: [50, 40], bH1: [22, 40], bH2: [78, 40], bB: [50, 44] } },
      { t: "Os legionários avançam em cunha, de escudo e gládio, e abrem caminho no meio da multidão.",
        p: { rL: [50, 47], bF: [50, 37] } },
      { t: "Os auxiliares seguem os legionários e a cavalaria, de lança, rompe os grupos que ainda resistem.",
        p: { rA1: [36, 46], rA2: [64, 46], rC1: [26, 42], rC2: [74, 42], bH1: [22, 34], bH2: [78, 34] }, x: ["bH1", "bH2"] },
      { t: "Os bretões recuam, mas as próprias carroças, enfileiradas na retaguarda, fecham o caminho.",
        p: { rL: [50, 36], bF: [50, 14], bB: [50, 22] } },
      { t: "O massacre. Segundo Tácito, os romanos não poupam ninguém, nem mulheres, nem animais de carga. Boudica, diz ele, toma veneno. O autor fala em 80.000 bretões e cerca de 400 romanos mortos: números exagerados.",
        p: { rL: [50, 22], rA1: [36, 24], rA2: [64, 24], rC1: [28, 20], rC2: [72, 20] }, x: ["bF", "bB", "bW"] }
    ]
  },

  molodi: {
    terrain: [
      { t: "sea", x: -8, y: 64, w: 116, h: 10, l: "Rio Oca" },
      { t: "hill", x: 60, y: 24, rx: 16, ry: 9, l: "Colina do guliay-gorod" },
      { t: "note", x: 90, y: 6, l: "Moscou ↑" },
      { t: "note", x: 20, y: 34, l: "Ravina (posição aproximada)" },
      { t: "note", x: 88, y: 56, l: "Esquema, sem escala" }
    ],
    units: [
      { id: "rO", s: "a", k: "inf", w: 10, h: 3, l: "Regimento de Odoevsky" },
      { id: "rK", s: "a", k: "cav", w: 9, h: 3.5, l: "Regimento avançado (Khvorostinin)" },
      { id: "rF", s: "a", k: "camp", w: 16, h: 4, l: "Guliay-gorod (fortaleza móvel)" },
      { id: "rG", s: "a", k: "inf", w: 14, h: 4, l: "Regimento principal (Vorotynsky)" },
      { id: "tM", s: "b", k: "cav", w: 24, h: 6, l: "Exército da Crimeia (Devlet Giray)" },
      { id: "tR", s: "b", k: "cav", w: 8, h: 3, l: "Retaguarda tártara" },
      { id: "tJ", s: "b", k: "inf", w: 8, h: 3, l: "Janízaros" }
    ],
    steps: [
      { t: "27 de julho de 1572. O exército da Crimeia atravessa o Oca em dois pontos. Na travessia de Drakino, o regimento de Odoevsky é derrotado depois de uma luta dura. Os russos têm o guliay-gorod montado na colina, perto de Molodi.",
        p: { rO: [30, 60], rK: [74, 52], rF: [60, 26], rG: [60, 34], tM: [34, 68], tR: [18, 62], tJ: [46, 68] } },
      { t: "29 de julho. O regimento avançado de Khvorostinin alcança a retaguarda tártara perto de Molodi e destrói boa parte dela.",
        p: { rK: [28, 56], tR: [22, 56], tM: [36, 60], tJ: [48, 62] }, x: ["rO", "tR"] },
      { t: "Khvorostinin finge recuar. O exército principal do cã o segue, direto para a fortaleza.",
        p: { rK: [56, 36], tM: [44, 48], tJ: [54, 50] } },
      { t: "31 de julho. Depois de escaramuças, o cã ataca o forte com tudo e é rechaçado. Divey Murza é capturado. Os defensores passam sede e, segundo a tradição, comem os próprios cavalos.",
        p: { tM: [50, 38], tJ: [58, 40] } },
      { t: "O cã recua para reorganizar. Os russos aguentam atrás do forte, com artilharia e arcabuzeiros.",
        p: { tM: [46, 46], tJ: [54, 48] } },
      { t: "2 de agosto. O cã manda a cavalaria descer dos cavalos e atacar a pé, junto com os janízaros.",
        p: { tM: [52, 38], tJ: [60, 40] } },
      { t: "No fim do dia, Vorotynsky sai do forte com o regimento principal por uma ravina e dá a volta para atacar os tártaros e os otomanos por trás.",
        p: { rG: [28, 40], rK: [58, 34] } },
      { t: "Vorotynsky ataca pela retaguarda e Khvorostinin sai do forte pela frente. Cercado, o exército se rompe, e os janízaros são destruídos.",
        p: { rG: [38, 52], rK: [56, 36], tM: [48, 44] }, x: ["tJ"] },
      { t: "O cã foge na mesma noite, atravessando o Oca. Os russos perseguem até o rio, e muitos tártaros se afogam. Segundo uma estimativa moderna, cerca de 27.000 morreram, 12.000 afogados.",
        p: { tM: [34, 66], rG: [38, 58] }, x: ["tM"] }
    ]
  }
});
