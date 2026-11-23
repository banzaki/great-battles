// In-depth battles, batch bg: rafia, cinoscefalos, magnesia, arausio, aquaesextiae (great-battles pack).
// Checked against the English and Portuguese Wikipedia articles on Raphia, Cynoscephalae, Magnesia, Arausio and
// Aquae Sextiae, the articles on Mallius Maximus and Caepio, Polybius Book 5 (Raphia: forces, deployment, casualties),
// and the works those pages cite (Livy, Appian, Plutarch, Florus, Orosius; Duncan 2017; Evans 2005). Where sources
// disagree the text says so.
// No Arausio diagram: the sources give the camps and the order of the attacks, but not the deployments.

Object.assign(GLOSSARY, {
  "selêucidas": "Dinastia e império fundados por Seleuco, general de Alexandre. No auge, o império ia da Ásia Menor à Ásia Central, e seus reis falavam grego e governavam sobre dezenas de povos.",
  "dinastia ptolomaica": "Família grega fundada por Ptolomeu, general de Alexandre, que governou o Egito de 305 a 30 a.C. Cleópatra foi a última. Os reis eram faraós para os egípcios e reis macedônios para os gregos.",
  "celessíria": "Nome grego (Coele-Síria, 'Síria Oca') da região que hoje abrange o Líbano, o sul da Síria, Israel e a Palestina. Ptolomeus e selêucidas brigaram por ela durante mais de um século.",
  "argiráspides": "'Escudos de Prata': infantaria de elite macedônia, armada como a falange. Nos exércitos helenísticos, era a tropa mais prestigiada a pé.",
  "agema": "A guarda real dos reis helenísticos, tropa de elite que ficava junto do rei, a pé ou a cavalo.",
  "falange egípcia": "Tropa de egípcios nativos, treinados e armados à maneira macedônia para a campanha de 217 a.C., porque Ptolomeu IV tinha poucos macedônios e mercenários. Eram cerca de 20.000.",
  "liga etólia": "Confederação de cidades da Grécia central, famosa pela cavalaria e pelo gosto de saquear. Foi aliada de Roma contra a Macedônia, mas viveu de reclamar que Roma não lhe dava o bastante.",
  "antigônidas": "Dinastia que governou a Macedônia de 276 a.C. até 168 a.C., fundada por um neto de Antígono, general de Alexandre. Filipe V foi o quinto rei dela.",
  "jogos ístmicos": "Festival esportivo pan-helênico, celebrado perto de Corinto a cada dois anos. Em 196 a.C., diante de uma multidão de gregos, Flaminino anunciou ali a liberdade das cidades.",
  "galácios": "Gauleses (celtas) que migraram para a Ásia Menor no século III a.C. e se fixaram no centro dela. Serviam como mercenários e saqueavam os vizinhos.",
  "arqueiros em camelos": "Árabes montados em camelos que atiravam flechas. Antíoco os pôs na frente da ala esquerda, atrás dos carros com foices.",
  "tratado de apameia": "Paz de 188 a.C. entre Roma e Antíoco III. Antíoco deixou a Ásia Menor a oeste dos montes Tauro, entregou quase toda a frota e pagou uma pesada indenização.",
  "cimbros": "Povo que saiu do norte da Europa por volta de 120 a 115 a.C., com famílias e carroças, procurando terra. As fontes antigas os chamam de germanos ou de gauleses, e os historiadores discutem de quem eles eram parentes.",
  "teutões": "Povo que se juntou aos cimbros na migração. Seu rei, Teutobod, foi capturado depois de Aquae Sextiae.",
  "procônsul": "Quem, depois de um ano como cônsul, continuava a comandar um exército e a governar uma província. Tinha menos autoridade que o cônsul em exercício.",
  "homem novo": "Em Roma, 'novus homo': quem era o primeiro da família a chegar ao consulado. A velha nobreza o tratava com desprezo.",
  "legado romano": "Oficial de confiança do general ou do Senado, que comandava parte do exército ou uma missão especial.",
  "ouro de tolosa": "Tesouro encontrado em Tolosa (Toulouse) quando Cepião tomou a cidade, em 106 a.C. A prata chegou a Roma, mas o ouro sumiu no caminho, e Cepião foi acusado de tê-lo roubado.",
  "tribuno da plebe": "Magistrado romano eleito para defender o povo contra os nobres. Podia convocar o povo para votar leis e julgar acusados.",
  "interdição de água e fogo": "Pena de exílio em Roma: ninguém podia dar abrigo, comida ou fogo ao condenado, que só podia viver longe da cidade.",
  "reformas de mário": "Mudanças no exército romano atribuídas a Mário, como recrutar cidadãos sem propriedade e equipar todos igualmente. Os historiadores discutem se foram feitas de uma vez ou aos poucos.",
  "ambrões": "Povo que marchava com os teutões. Segundo Plutarco, 'Ambrões!' era também o grito de guerra de alguns lígures, e isso confundiu todo mundo na primeira escaramuça.",
  "lígures": "Povo do noroeste da Itália e do sul da Gália. Muitos lutavam como auxiliares dos romanos.",
  "calones": "Servos e criados que acompanhavam o exército romano para cuidar de mulas, bagagem e água. Não eram soldados.",
  "massália": "A atual Marselha, cidade grega fundada na costa do sul da Gália e aliada de Roma."
});

Object.assign(DEEP, {
  rafia: {
    war: "Quarta Guerra Síria (219–217 a.C.)",
    hook: "Dois exércitos com 175 elefantes, e um rei que venceu a sua ala e perdeu a batalha.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois da morte de Alexandre, seus generais dividiram o império. A Ásia ficou com os [[selêucidas]], e o Egito com a [[dinastia ptolomaica]]. Entre os dois reinos havia a [[celessíria]], uma faixa de terra rica que ligava o Egito à Síria. Os ptolomeus a controlavam, os selêucidas a queriam, e as duas famílias tinham brigado por ela em várias guerras.",
        "Em 223 a.C., Antíoco III subiu ao trono selêucida, ainda jovem. Em 221 a.C., Ptolomeu IV, chamado Filopátor, assumiu o Egito. Políbio, a principal fonte da época, o descreve como um rei que gostava mais de festas do que de política, e deixou o governo nas mãos de ministros como Sosíbio e Agátocles. Antíoco viu a chance e invadiu a Celessíria em 219 a.C.",
        { h: "O caminho até Ráfia" },
        { timeline: [
          ["223 a.C.", "Antíoco III sobe ao trono selêucida."],
          ["221 a.C.", "Ptolomeu IV sobe ao trono do Egito."],
          ["219 a.C.", "Antíoco invade a Celessíria e começa a Quarta Guerra Síria."],
          ["218–217 a.C.", "Os ministros de Ptolomeu enrolam Antíoco em negociações e, enquanto isso, armam um exército novo, com milhares de egípcios na falange."],
          ["22 jun 217 a.C.", "As duas forças se enfrentam perto de Ráfia."],
          ["Nov 217 a.C.", "Um decreto de sacerdotes egípcios, em Mênfis, celebra a vitória de Ptolomeu."]
        ]},
        "O Egito tinha poucos soldados macedônios e mercenários. Por isso, segundo Políbio, os ministros fizeram uma coisa que não era costume: armaram e treinaram cerca de 20.000 egípcios nativos à maneira macedônia. Foi uma aposta alta, e essa tropa estaria em Ráfia."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ptolomeu IV Filopátor" },
        "Rei do Egito desde 221 a.C. Quem lutou por ele foram os ministros e os generais. Sosíbio negociou e organizou o exército, e Andrômaco e Sosíbio comandaram a falange na hora da batalha. Políbio conta que Ptolomeu e sua irmã e esposa, Arsínoe III, percorreram as fileiras animando as tropas antes do combate. Ptolomeu lutou na ala esquerda, entre os elefantes.",
        { h: "Antíoco III, o Grande" },
        "Rei selêucida, ainda jovem em 217 a.C. Era corajoso e gostava de conduzir a cavalaria pessoalmente, e foi isso que decidiu a batalha: ele venceu a ala que enfrentava, mas se afastou do campo, perseguindo, e não viu o resto do exército desabar.",
        { h: "Os outros nomes" },
        "Do lado de Antíoco, Teódoto, um etólio que tinha servido ao Egito e trocou de lado, comandava a infantaria de elite. Nicarco comandava, com Teódoto Hemíolo, a falange, e Filipe, irmão de leite do rei, os elefantes da direita. Do lado egípcio, Polícrates comandava a cavalaria da esquerda, Equécrates a da direita, e Fóxidas os mercenários gregos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números vêm de Políbio. Ptolomeu tinha cerca de 70.000 soldados a pé, 5.000 cavaleiros e 73 elefantes africanos. Antíoco tinha cerca de 62.000 a pé, 6.000 cavaleiros e 102 elefantes indianos. A infantaria de Ptolomeu incluía 25.000 macedônios, a [[falange egípcia]] de 20.000, a [[agema]] e peltastas, e mercenários gregos, gauleses, trácios e líbios. A de Antíoco incluía 10.000 [[argiráspides]] sob Teódoto, uma falange de 20.000, 10.000 árabes, mercenários gregos e muitos arqueiros e fundibulários.",
        { note: "As somas de Políbio e dos historiadores modernos não batem em todos os detalhes, e a cavalaria egípcia aparece com números que não fecham os 5.000. Usamos os totais de Políbio, a única fonte detalhada, e lembramos que números antigos pedem cautela." },
        { h: "O terreno e os dias antes" },
        "O campo era uma planície perto de Ráfia, na beira do deserto do Sinai. Antíoco acampou a cerca de 2 km do inimigo e depois chegou a cerca de 1 km. Durante cinco dias houve escaramuças. Numa noite, Teódoto entrou no acampamento ptolomaico e tentou matar Ptolomeu na tenda que achou ser a do rei. O rei não estava lá, e o golpe fracassou.",
        { h: "A disposição" },
        "Os dois reis puseram a falange no centro e a cavalaria nas pontas, com a infantaria leve e os elefantes na frente. Ptolomeu ficou na ala esquerda, com 40 elefantes. Na direita, Equécrates comandava a cavalaria, com 33 elefantes. Antíoco ficou na ala direita, que enfrentava a esquerda de Ptolomeu, com 60 elefantes e a cavalaria de Antípatro. Os 42 elefantes restantes ficaram diante da ala esquerda, sob Miísco.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, os dois lados avançaram. Os elefantes foram os primeiros a se encontrar. Só poucos elefantes de Ptolomeu chegaram a lutar de frente, e a maioria foi embora quando viu os indianos, maiores. Políbio diz que não suportaram o cheiro e o barulho; os historiadores discutem até se eram da mesma espécie.",
        "Segundo, os elefantes africanos em fuga caíram sobre a própria infantaria. A guarda de Ptolomeu cedeu, e a linha dele na esquerda se desfez.",
        "Terceiro, Antíoco contornou os elefantes com a cavalaria e atacou a de Polícrates. Ao mesmo tempo, os mercenários gregos de Antíoco, que estavam ao lado da falange, atacaram os peltastas de Ptolomeu. A esquerda ptolomaica foi empurrada para trás.",
        "Quarto, na outra ponta, Equécrates esperou um pouco. Depois mandou Fóxidas avançar com os mercenários e deu a volta no flanco do inimigo com a cavalaria.",
        "Quinto, a cavalaria de Antíoco naquela ponta foi derrotada. Os soldados de Fóxidas fizeram fugir os árabes e os medos. A ala esquerda de Antíoco desabou, enquanto a direita vencia.",
        "Sexto, as duas falanges, no centro, estavam intactas e paradas. Ptolomeu, que tinha recuado para trás da sua, apareceu de novo diante dela. A falange, comandada por Andrômaco e Sosíbio, avançou. Os soldados escolhidos do lado sírio resistiram por pouco tempo.",
        "Sétimo, a tropa escolhida do lado de Antíoco ainda resistiu um pouco, mas as tropas de Nicarco fugiram, e a falange selêucida se desfez.",
        "Oitavo, Antíoco ainda perseguia o inimigo na direita e só percebeu que o centro desabava quando viu a nuvem de poeira avançando para o seu acampamento.",
        "Nono, tentou voltar com a guarda a cavalo, mas encontrou o exército em fuga e não conseguiu reuni-lo. Recuou para dentro de Ráfia."
      ]},
      { n: "04", title: "Legado", blocks: [
        "Segundo Políbio, Antíoco perdeu quase 10.000 homens a pé e mais de 300 cavaleiros, e mais de 4.000 foram capturados. Três elefantes morreram na luta e dois depois, de ferimentos. Ptolomeu perdeu cerca de 1.500 a pé, 700 a cavalo e 16 elefantes, e a maior parte dos outros elefantes foi capturada.",
        "Antíoco recuou até Gaza e pediu uma trégua para enterrar os mortos, e Ptolomeu aceitou. Segundo Políbio, o rei egípcio não quis continuar a campanha e fez as pazes. O Egito ficou com a Celessíria, por enquanto.",
        { h: "O que mudou" },
        "A vitória dependeu em parte dos egípcios que Ptolomeu tinha armado. Políbio diz que, orgulhosos do que tinham feito, os egípcios passaram a não aceitar mais ordens. A tradição liga isso à revolta do Alto Egito, que durou de 207 a 186 a.C. No Egito, o Decreto de Ráfia, de novembro de 217 a.C., escrito em grego, hieroglífico e demótico, celebra a vitória.",
        "Em 200 a.C., na batalha de Panion, Antíoco derrotou o exército do filho de Ptolomeu IV e tomou a Celessíria de volta. A vitória de Ráfia tinha segurado a fronteira por menos de vinte anos.",
        { note: "Os elefantes de Ráfia deram uma briga de historiadores. Como Políbio diz que os de Ptolomeu eram menores, alguns propuseram que fossem elefantes de floresta. Um estudo de DNA de 2013 sugeriu que eram elefantes africanos de savana, talvez de uma população menor que ainda vive na Eritreia." }
      ]}
    ]
  },

  cinoscefalos: {
    war: "Segunda Guerra Macedônica (200–197 a.C.)",
    hook: "Num dia de nevoeiro, um oficial romano sem nome viu uma brecha e deu o golpe que a falange nunca esperava.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Macedônia de Filipe V era a herdeira do reino de Alexandre, mas bem menor. Em 215 a.C., no meio da guerra contra Aníbal, Filipe se aliou a Cartago. Roma respondeu apoiando a [[liga etólia]], e a Primeira Guerra Macedônica terminou empatada, em 205 a.C. Roma não esqueceu.",
        "Por volta de 202 a.C., Filipe se aliou ao rei selêucida para repartir territórios na Ásia Menor, e atacou cidades no mar de Mármara e no Egeu. Rodes e Pérgamo, ameaçadas, pediram ajuda a Roma, e o Senado e o povo declararam guerra em 200 a.C. Em 198 a.C., o comando passou a Tito Quíncio Flaminino, que exigiu a saída de Filipe de toda a Grécia. As negociações acabaram.",
        { h: "O caminho até Cinoscéfalos" },
        { timeline: [
          ["215–205 a.C.", "Primeira Guerra Macedônica: Filipe contra Roma e a Liga Etólia, sem vencedor."],
          ["200 a.C.", "Roma declara guerra a Filipe V."],
          ["198 a.C.", "Flaminino assume o comando na Grécia."],
          ["Primavera de 197 a.C.", "Os dois exércitos entram na Tessália."],
          ["Jun 197 a.C.", "Batalha de Cinoscéfalos."],
          ["196 a.C.", "Nos [[Jogos Ístmicos|jogos ístmicos]], Flaminino proclama a liberdade das cidades gregas."]
        ]},
        "Na primavera de 197 a.C., Filipe tinha perdido quase tudo fora da Macedônia e da Tessália. Os dois exércitos se encontraram perto de Feras, mas o terreno ali não servia para a falange. Filipe marchou para Escotussa, onde havia grão. Os romanos o seguiram do outro lado de uma cadeia de colinas baixas, as colinas de Cinoscéfalos, 'cabeças de cão'."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Tito Quíncio Flaminino" },
        "Cônsul em 198 a.C., ainda bem jovem, por volta dos 30 anos. Era um admirador da cultura grega e um diplomata esperto. Queria ganhar a guerra e, depois, aparecer como libertador dos gregos, o que tornava a vitória em campo parte de um plano maior. Na batalha, comandou pessoalmente a esquerda e mandou a direita atacar na hora certa.",
        { h: "Filipe V da Macedônia" },
        "Rei desde 221 a.C., da dinastia dos [[antigônidas]]. Em 197 a.C., tinha uma falange numerosa mas desigual: parte dos soldados era muito jovem ou muito velha, por causa da falta de homens. A falange só funcionava bem em terreno plano, e Filipe acabou lutando num terreno que não escolheu.",
        { h: "Os outros nomes" },
        "Do lado romano, Arquedamo comandava os etólios e Amínandro, rei da Atamânia, tinha 1.200 homens. Do lado macedônio, Heráclides de Girton comandava a cavalaria tessália, Atenágoras os mercenários, e Nicanor, chamado o Elefante, o segundo corpo da infantaria. Um tribuno romano decidiu a batalha, e a fonte não diz o nome dele."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo as fontes antigas, o exército romano e aliado tinha cerca de 26.000 homens: duas legiões completas, 6.000 etólios de infantaria e 400 de cavalaria, 1.200 atamanes e elefantes da Numídia. O de Filipe tinha cerca de 25.500: 16.000 falangistas, 2.000 [[peltastas]], 4.000 trácios e trálios, 1.500 mercenários e 2.000 cavaleiros macedônios e tessálios. Os números vêm de Políbio e de Lívio.",
        { h: "O terreno" },
        "Uma cadeia de colinas baixas na Tessália, cortada por vales e encostas irregulares. Era terreno ruim para a falange, que precisava de chão plano para manter as fileiras alinhadas, e bom para a [[legião]], dividida em [[manípulos|manípulo]] pequenos que se arrumam mais facilmente.",
        { h: "O dia" },
        "Choveu muito na marcha, e na manhã seguinte um nevoeiro cobria as colinas. Filipe, com falta de comida, mandou metade da infantaria pesada buscar provisões. Com medo de uma emboscada, mandou a tropa leve e metade da cavalaria ocupar as colinas. Flaminino, sem saber onde Filipe estava, mandou 1.000 soldados de tropa leve e 300 cavaleiros explorar. Os dois grupos se esbarraram no nevoeiro.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, a luta começou em corpo a corpo, não em troca de dardos, e os romanos, em menor número, começaram a perder. Pediram ajuda a Flaminino, que mandou mais 2.000 de tropa leve e 500 cavaleiros. Só mandou isso porque o nevoeiro o impedia de ver quantos eram os inimigos.",
        "Segundo, os reforços deram vantagem aos romanos, que empurraram os macedônios para as cumeadas. Filipe, com medo de uma armadilha, esperou. Quando o nevoeiro levantou, viu que só a tropa leve romana e a cavalaria estavam lutando.",
        "Terceiro, Filipe mandou Atenágoras, com 1.500 mercenários e 1.500 cavaleiros. Os romanos foram empurrados do alto, mas a cavalaria etólia impediu que fossem expulsos de vez, e a luta virou um empurra-empurra diante do acampamento romano.",
        "Quarto, chegaram a Filipe notícias exageradas: dizia-se que os romanos estavam em fuga. Mesmo sem querer lutar nas colinas, ele mandou 8.000 falangistas e 4.000 peltastas avançar e mandou Nicanor trazer o resto da falange o mais rápido possível.",
        "Quinto, Flaminino saiu do acampamento e formou a linha. Pôs os elefantes na frente da ala direita. Os manípulos, com espaços entre eles, deixaram passar os soldados que recuavam. Flaminino levou pessoalmente a legião da esquerda e guardou a direita como reserva.",
        "Sexto, Filipe chegou, viu que as notícias eram exageradas e reuniu seus homens na crista. Segundo Políbio, apertou as fileiras e aumentou a profundidade da falange. Como não podia esperar Nicanor, mandou a falange da direita atacar a esquerda romana, e ela empurrou os romanos morro abaixo, devagar.",
        "Sétimo, a esquerda macedônia, de Nicanor, ainda chegava à crista em desordem, em coluna. Flaminino correu para a sua direita e mandou atacar, com os elefantes na frente, os aliados italianos e 4.000 soldados gregos atrás. Os macedônios foram dispersados e empurrados morro abaixo.",
        "Oitavo, enquanto a direita romana perseguia, um tribuno, de que não se sabe o nome, viu que a falange da direita de Filipe estava exposta por trás. Destacou 20 manípulos, cerca de 2.500 homens, e os levou para as costas dela. A falange, em formação rígida, não conseguiu virar e se desfez.",
        "Nono, Filipe, que tinha subido ao alto com uma pequena escolta para ver melhor, viu a direita ruir e a esquerda fugir, e escapou com os cavaleiros para a Macedônia. Muitos falangistas levantaram as sarissas para mostrar rendição. Os romanos ignoraram o gesto, ou não o entenderam, e continuaram a matar até Flaminino intervir. Segundo Plutarco, os etólios saquearam o acampamento macedônio durante a perseguição, e os romanos o encontraram vazio. Plutarco culpa os etólios pela fuga de Filipe."
      ]},
      { n: "04", title: "Legado", blocks: [
        "Políbio e Lívio falam em 8.000 macedônios mortos e 5.000 capturados, e em 700 a 750 romanos mortos. Lívio avisa que outros autores davam 32.000 mortos macedônios, e que um deles, que ele acusa de exagero sem limite, falava em 40.000. Ele conclui que Políbio é o mais confiável nesse ponto.",
        "A paz de 196 a.C. deixou a Filipe o reino, mas tirou dele quase tudo mais. Ele teve de retirar as guarnições das cidades fora da Macedônia, pagar 1.000 talentos de prata (metade na hora, o resto em dez anos), entregar quase todos os navios de guerra, limitar o exército a 5.000 homens, sem elefantes, e não fazer guerra fora da Macedônia sem licença do Senado. Flaminino levou Demétrio, filho do rei, como refém, e a Macedônia virou aliada de Roma.",
        { h: "A liberdade dos gregos" },
        "Em 196 a.C., nos jogos ístmicos, Flaminino anunciou que as cidades antes controladas por Filipe eram livres e se governariam sozinhas. A multidão, segundo a tradição, aplaudiu com enorme entusiasmo. Roma passava a ser vista como a protetora da Grécia.",
        { note: "A batalha é muitas vezes citada como prova de que a legião, flexível, superava a falange, rígida, como depois em Pidna (168 a.C.), quando acabou o reino da Macedônia. Alguns historiadores discordam: a vitória teria vindo sobretudo porque a esquerda de Nicanor não estava formada. O argumento, porém, também pode ser lido como prova do defeito da falange, que depende de tempo e de terreno para se formar." }
      ]}
    ]
  },

  magnesia: {
    war: "Guerra romano-síria (192–188 a.C.)",
    hook: "Um exército que as fontes antigas contam em 72.000 homens se desfez sob uma carga de cavalaria e uma chuva de flechas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Antíoco III refez o império selêucida. Subiu ao leste até as fronteiras da Índia, tomou a [[celessíria]] do Egito em 198 a.C. e depois se virou para a Ásia Menor e a Trácia. Roma, atenta a esses movimentos, recebeu os pedidos de ajuda de cidades gregas ameaçadas. Em 196 a.C., em Lisimáquia, os dois lados conversaram e não se entenderam.",
        "Por volta de 195 a.C., Aníbal, exilado de Cartago, chegou à corte de Antíoco, em Éfeso. Os etólios, descontentes com Roma, empurravam os gregos à revolta, e em 192 a.C. Antíoco desembarcou na Grécia. Filipe V da Macedônia ficou do lado de Roma. Nas Termópilas, em abril de 191 a.C., os romanos o derrotaram, e ele voltou para Éfeso.",
        { h: "O caminho até Magnésia" },
        { timeline: [
          ["192 a.C.", "Antíoco desembarca na Grécia."],
          ["Abr 191 a.C.", "Os romanos vencem nas Termópilas."],
          ["191–190 a.C.", "Roma e Rodes vencem no mar, em Corico, no Eurimedonte e em Mionesos."],
          ["Mai 190 a.C.", "Antíoco invade o reino de Pérgamo, e Eumenes volta da Grécia para defendê-lo."],
          ["190 a.C.", "Os romanos passam à Ásia e se juntam ao exército de Eumenes."],
          ["Dez 190 ou jan 189 a.C.", "Batalha de Magnésia."]
        ]},
        "A frota romana e a de Rodes derrotaram a frota selêucida em Corico, no Eurimedonte (onde estava Aníbal) e em Mionesos. Com o mar livre, os romanos atravessaram o Helesponto, passaram por Dárdano e chegaram ao rio Caico, onde Eumenes II de Pérgamo juntou o seu exército ao deles."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Lúcio Cornélio Cipião" },
        "Cônsul em 190 a.C., comandante formal do exército romano. Seu irmão mais famoso, Cipião Africano, vencedor de Aníbal em Zama, veio com ele como conselheiro, mas, segundo Lívio, estava doente e fora do campo no dia da batalha. A vitória deu a Lúcio o apelido de 'Asiático'.",
        { h: "Eumenes II de Pérgamo" },
        "Rei de Pérgamo, aliado de Roma. Seu reino era o primeiro na linha de ataque de Antíoco, e ele tinha razão pessoal para querer ver o selêucida derrotado. Em Magnésia, comandou a cavalaria da ala direita romana, e sua carga decidiu a primeira parte da luta.",
        { h: "Antíoco III, o Grande" },
        "Cerca de 50 anos. Tinha vencido no Oriente e reuniu um exército enorme, com todos os tipos de tropa do império, contando com a superioridade numérica. Comandou pessoalmente a ala direita, a mais forte, e estava longe do centro quando ele cedeu.",
        { h: "Os outros nomes" },
        "Do lado romano, o legado Gneu Domício Aenobarbo comandava a ala esquerda. Do lado selêucida, Seleuco, filho do rei, e Antípatro, sobrinho, comandavam a ala esquerda, e Filipe, mestre dos elefantes, a falange. Aníbal, segundo as fontes, não teve papel de destaque na batalha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes antigas, Lívio e Apiano, dão cerca de 30.000 homens e 16 elefantes africanos aos romanos e seus aliados, e cerca de 72.000 homens e 54 elefantes a Antíoco. Os historiadores modernos discordam: para uns, os números antigos valem. Para outros, os dois exércitos tinham perto de 50.000 homens. Lívio, a fonte principal, tende a engrandecer Roma.",
        "O centro selêucida era uma falange de cerca de 16.000 homens, em dez blocos de 1.600, com 20 elefantes nos intervalos. A ala esquerda tinha, na frente, [[carros com foices]] e [[arqueiros em camelos]], e atrás [[catafratários]], cavalaria gaulesa e tropa leve. A direita, de Antíoco, tinha catafratários, a guarda a cavalo, os [[argiráspides]] e arqueiros a cavalo. Do lado romano, a infantaria pesada ficava na esquerda e no centro, a cavalaria de Eumenes na direita, e na frente havia cerca de 3.000 soldados de tropa leve e 800 arqueiros. Atrás ficavam voluntários trácios e macedônios e os elefantes.",
        { h: "O terreno e os dias antes" },
        "Os romanos marcharam de Pérgamo, esperando achar Antíoco, que tinha recuado para um acampamento a cerca de 15 km a nordeste de Magnésia. Seguiram-no por cinco dias e acamparam ao norte do rio Hermo. Mudaram depois para uma planície em ferradura, cercada por três lados pelos rios Frígio e Hermo, que atrapalhava a cavalaria selêucida. Durante uns cinco dias os dois exércitos se alinharam sem lutar. Cipião não queria atacar um acampamento fortificado e não podia esperar muito, porque as provisões acabavam e um novo cônsul era esperado de Roma. Avançou então até onde o rio Frígio faz uma curva para o norte e deixa a direita romana sem proteção. Antíoco aceitou a batalha ao amanhecer do terceiro dia depois disso.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, os exércitos se alinharam. A esquerda romana ficou apoiada no rio, e a direita, de Eumenes, ficou aberta. Antíoco pôs a sua melhor tropa na direita, em frente ao rio.",
        "Segundo, Eumenes mandou arqueiros, fundibulários e lanceiros contra os carros com foices. Os carros, atingidos, entraram em pânico.",
        "Terceiro, os carros em fuga desorganizaram os camelos e os catafratários que estavam atrás. Eumenes atacou antes que os catafratários se reorganizassem, e a cavalaria romana e a de Pérgamo quebraram a esquerda selêucida.",
        "Quarto, a infantaria gaulesa, a capadócia e os mercenários, ao lado da falange, foram atingidos pelo centro e pela direita romanos e cederam, o que expôs o flanco da falange.",
        "Quinto, Antíoco atacou a infantaria romana da esquerda com os catafratários e a guarda, e os argiráspides atacaram os legionários. A infantaria romana cedeu e recuou até o acampamento, onde os voluntários trácios e macedônios a reforçaram e o tribuno Marco Emílio Lépido a reorganizou.",
        "Sexto, a cavalaria pesada de Antíoco não conseguiu tomar o acampamento e ficou presa diante dele.",
        "Sétimo, no centro, a falange aguentou os legionários, mas não podia responder às flechas e às pedras. Começou uma retirada em ordem, mas os elefantes, atingidos, entraram em pânico e romperam a formação.",
        "Oitavo, os falangistas largaram as armas e deixaram o campo. A cavalaria de Antíoco voltou ao centro tarde demais. O rei juntou os sobreviventes e recuou para Sardes, enquanto os romanos saqueavam o acampamento."
      ]},
      { n: "04", title: "Legado", blocks: [
        "Lívio dá 53.000 selêucidas mortos, 1.400 prisioneiros e 15 elefantes capturados, contra 349 romanos mortos e muitos feridos. Historiadores modernos estimam cerca de 10.000 mortos selêucidas e 5.000 romanos, números que também são discutidos.",
        "As guarnições de Sardes, Éfeso e outras cidades se renderam, e a frota selêucida saiu de Éfeso. Em janeiro de 189 a.C., Antíoco aceitou uma trégua em Sardes. Roma partiu então contra os [[galácios]], e em 188 a.C. o [[tratado de Apameia]] fixou os termos: Antíoco deixou a Ásia Menor a oeste dos montes Tauro, entregou Aníbal e outros inimigos de Roma e vinte reféns, reduziu a frota a dez navios e pagou indenização e grão. Rodes e Pérgamo receberam boa parte das terras. Antíoco morreu em 187 a.C., no leste do império.",
        { note: "Uma anedota antiga diz que Antíoco mostrou o exército a Aníbal e perguntou se bastava para os romanos, e que Aníbal respondeu que bastava, por mais gananciosos que fossem. Pode ser invenção posterior. Aníbal, aliás, não tem papel de destaque na batalha em nenhuma das fontes que usamos." },
        { note: "A batalha é muitas vezes vista como o fim do predomínio da falange macedônia nos campos helenísticos. Alguns historiadores acham que o exército selêucida, feito de camponeses e mercenários, tinha problemas de treino que explicam a derrota, mais do que a falange em si." }
      ]}
    ]
  },

  arausio: {
    war: "Guerra Cimbria (113–101 a.C.)",
    hook: "Dois comandantes romanos que se recusavam a acampar juntos entregaram dois exércitos aos cimbros.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Por volta de 120 a 115 a.C., os [[cimbros]] deixaram a terra deles, perto do mar do Norte, e saíram em busca de outra. Levavam famílias, carroças e rebanhos, e foram absorvendo outros povos pelo caminho. Os [[teutões]] se juntaram a eles. Era um povo inteiro em marcha, e Roma não sabia o que fazer com ele.",
        "Em 113 a.C., os cimbros derrotaram os romanos em Noreia. Em 109 a.C., venceram de novo no Ródano, e em 107 a.C. houve outra derrota na Aquitânia. Em 106 a.C., Quinto Servílio Cepião retomou Tolosa, que tinha se revoltado, e se instalou ali. Em 105 a.C., o cônsul Gneu Málio Máximo marchou para o norte para se juntar a ele. O outro cônsul, Públio Rutílio Rufo, ficou em Roma.",
        { h: "O caminho até Arausio" },
        { timeline: [
          ["113 a.C.", "Os cimbros derrotam os romanos em Noreia."],
          ["109 a.C.", "Nova derrota romana, no Ródano."],
          ["106 a.C.", "Cepião retoma Tolosa, onde, segundo a tradição, encontra um tesouro."],
          ["105 a.C.", "Málio, cônsul, leva suas legiões ao Ródano."],
          ["6 out 105 a.C.", "Batalha de Arausio."]
        ]},
        "A passagem dos cimbros agitou a Gália meridional, conquistada por Roma poucos anos antes, e arrastou outras tribos, como os helvécios. A emboscada a tropas romanas e a revolta de Tolosa levaram Roma a reunir forças na região."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gneu Málio Máximo" },
        "Cônsul de 105 a.C. e um [[homem novo|homem novo]]: era o primeiro da família a chegar ao consulado, sem os antepassados ilustres que a nobreza exigia. Tinha pouca experiência militar. Pela lei, devia comandar os dois exércitos, porque o cônsul tinha mais autoridade que um [[procônsul]].",
        { h: "Quinto Servílio Cepião" },
        "Procônsul e nobre de família tradicional. Tinha retomado Tolosa e, segundo a tradição, encontrado nela uma grande quantidade de ouro e prata, o chamado [[ouro de Tolosa|ouro de tolosa]]. A prata chegou a Roma, o ouro sumiu, e correu que ele o tinha desviado. Cepião se recusou a servir sob as ordens de Málio.",
        { h: "Os outros nomes" },
        "Marco Aurélio Escauro, [[legado|legado romano]] de Málio, comandou um destacamento que foi o primeiro a encontrar os cimbros. Foi capturado e levado ao rei Boiorix. A tradição diz que Escauro aconselhou o rei a não entrar na Itália e foi morto por isso. Também lutou em Arausio, segundo Plutarco, o jovem Quinto Sertório, que, ferido, atravessou o Ródano a nado com a armadura."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números romanos vêm de Valério Antias, citado por Lívio: cerca de 80.000 soldados em dez a doze legiões e 40.000 auxiliares e acompanhantes do exército, num total de uns 120.000. Os historiadores os tratam com cautela. O número de cimbros é desconhecido. Se os números forem verdadeiros, foi pior em mortos do que Canas.",
        { h: "O terreno" },
        "A margem do Ródano, perto de Arausio, a atual Orange. O acampamento de Málio ficava com o rio nas costas, uma posição ruim, porque fechava a retirada.",
        { h: "A discórdia" },
        "Cepião acampou na outra margem do Ródano, separado de Málio. Só atravessou depois de uma ordem direta do Senado, e mesmo então insistiu em manter um acampamento próprio e ignorou as ordens do cônsul. Os dois exércitos ficaram lado a lado e sem comando comum, e o inimigo estava a poucos quilômetros.",
        { h: "O dia, em quatro tempos" },
        "Primeiro, o destacamento de Escauro encontrou uma coluna avançada dos cimbros e foi destruído. O próprio Escauro foi capturado.",
        "Segundo, em 6 de outubro, Cepião atacou. O historiador Theodor Mommsen supôs que ele temia que Málio fechasse um acordo com os cimbros e ficasse com o crédito. Isso é uma interpretação, não um fato registrado.",
        "Terceiro, o ataque apressado de Cepião falhou diante da resistência cimbra. Os cimbros invadiram o acampamento dele, que quase não tinha defesa. O próprio Cepião escapou sem ferimentos.",
        "Quarto, animados, os cimbros se viraram contra o exército de Málio, com o rio nas costas. Poucos romanos escaparam. Os acompanhantes do exército, que não podiam lutar, também foram mortos.",
        { note: "As fontes antigas sobre Arausio são curtas, e a ordem dos fatos vem em boa parte de reconstruções modernas." }
      ]},
      { n: "04", title: "Legado", blocks: [
        "A derrota deixou Roma assustada. Os Alpes estavam abertos, e o público culpou a arrogância de Cepião. Os cimbros, porém, não marcharam logo para a Itália. Lutaram contra os arvernos e foram para os Pireneus, o que deu a Roma tempo para se reorganizar.",
        "O Senado e o povo passaram por cima da regra que proibia reeleger um cônsul logo em seguida, e Gaio Mário foi eleito cônsul várias vezes. Ele derrotaria os teutões e ambrões em Aquae Sextiae, em 102 a.C. Muitos autores ligam a derrota a mudanças no exército, as chamadas [[reformas de Mário|reformas de mário]].",
        { h: "O julgamento" },
        "Em Roma, o povo tirou o comando de Cepião, e ele perdeu o assento no Senado. Foi absolvido da acusação de roubar o ouro de Tolosa, mas condenado depois pela perda do exército, apesar da defesa do orador Crasso. A pena foi o exílio, com [[interdição de água e fogo|interdição de água e fogo]] num raio de 800 milhas de Roma, e uma multa enorme que nunca foi cobrada. A versão mais aceita é que viveu o resto da vida em Esmirna. Málio foi julgado em 103 a.C., perante o povo, e também condenado ao exílio. Os [[tribunos da plebe|tribuno da plebe]] Lúcio Apuleio Saturnino e Gaio Norbano se destacaram nas acusações.",
        { note: "A data e a forma da morte de Cepião são incertas, e uma versão diz que morreu na prisão. O destino do ouro de Tolosa também nunca foi esclarecido. E a ideia de que Mário reformou o exército de uma vez só é discutida: muitos historiadores veem um processo mais lento." }
      ]}
    ]
  },

  aquaesextiae: {
    war: "Guerra Cimbria (113–101 a.C.)",
    hook: "Mário esperou dentro do acampamento até o inimigo se cansar, e depois deixou que ele atacasse morro acima.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Arausio, Roma tinha perdido dois exércitos e o orgulho. Gaio Mário, que tinha vencido Jugurta na Numídia, foi eleito cônsul sem estar em Roma e recebeu o comando contra os cimbros e os teutões em 104 a.C. Os germanos, em vez de marchar para a Itália, tinham ido para a Hispânia, e isso deu a Mário tempo para campanhas locais e para reformar as legiões da Gália. Ele reuniu cerca de 30.000 romanos e 40.000 aliados e se instalou perto de Aquae Sextiae.",
        { h: "O caminho até Aquae Sextiae" },
        { timeline: [
          ["104 a.C.", "Mário é eleito cônsul e recebe o comando na Gália."],
          ["103 a.C.", "Mário treina o exército e reconstrói as legiões."],
          ["102 a.C.", "Os teutões e os [[ambrões]] entram na Gália meridional, e os cimbros vão para a Itália."],
          ["102 a.C.", "Batalha de Aquae Sextiae."],
          ["Jul 101 a.C.", "Mário e Catulo vencem os cimbros em Vercelas."]
        ]},
        "Em 102 a.C., os teutões e os ambrões, sob o rei Teutobod, entraram na Gália meridional enquanto os cimbros seguiam para a Itália por outro caminho. Catulo ficou na Itália, e Mário os esperava no Ródano."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Caio Mário, cerca de 55 anos" },
        "Também era um [[homem novo|homem novo]], de Arpino, e se orgulhava disso. Tinha vencido na África e sabia ser paciente: durante dois anos treinou os soldados, e em Aquae Sextiae usou essa paciência como arma. Não aceitou provocação nenhuma até chegar o momento em que o terreno estava a seu favor.",
        { h: "Teutobod" },
        "Rei dos teutões. Comandava, junto com os ambrões, um povo enorme, com mulheres e crianças, que estava em marcha. As fontes dizem pouco sobre ele além do nome e do destino: foi capturado depois da batalha.",
        { h: "Os outros nomes" },
        "Cláudio Marcelo comandava os cerca de 3.000 homens que Mário escondeu. Os [[lígures|lígures]], auxiliares de Mário, deram início à primeira luta, quase sem querer."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os romanos tinham de 32.000 a 40.000 homens, entre seis legiões e auxiliares. Do lado germano, os ambrões na primeira luta eram cerca de 30.000 guerreiros. Na batalha principal, as estimativas modernas citadas vão de 100.000 a 200.000 guerreiros, e uns 250.000 contando as famílias. Os números dos povos em migração são muito incertos.",
        { h: "O acampamento" },
        "Mário fortificou um acampamento numa colina junto ao Ródano, abastecido para um longo cerco. Os teutões e ambrões atravessaram o Durança e chegaram. Provocaram os romanos, e um guerreiro desafiou Mário para um duelo. Mário riu e ofereceu um gladiador veterano, porque um cônsul não lutava com um brigão qualquer. Depois de assaltar o acampamento por três dias sem sucesso, os germanos seguiram em frente, e Mário os acompanhou a certa distância, fortificando um acampamento novo a cada noite.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, Mário acampou perto dos ambrões, que tinham se separado dos teutões, e os dois exércitos ficaram separados por um rio.",
        "Segundo, os [[calones]] romanos foram buscar água e encontraram ambrões se banhando no rio. Os ambrões chamaram os companheiros, que comiam e bebiam no acampamento.",
        "Terceiro, os auxiliares lígures de Mário, sem ordem nenhuma, pegaram as armas e foram ajudar os servos. Segundo Plutarco, gritavam 'Ambrões!', o mesmo grito dos inimigos, e por isso todos se confundiram.",
        "Quarto, Mário trouxe as legiões, que lançaram os [[pilos|pilo]], sacaram as espadas e avançaram. Os ambrões, muitos de barriga cheia, seminus ou bêbados, foram empurrados contra o rio. Segundo Plutarco, as mulheres ambrãs lutaram a seu lado, com espadas e machados, perto das carroças. As perdas romanas foram leves.",
        "Quinto, Mário proibiu comemorações, porque os teutões estavam perto. Mandou um grupo fazer barulho no mato durante a noite para não deixar o inimigo dormir. Depois enviou Cláudio Marcelo com cerca de 3.000 homens, para se esconderem e esperarem um sinal para atacar a retaguarda inimiga.",
        "Sexto, Mário desceu para a planície perto de Aquae Sextiae e tomou o alto. Disse aos homens que os atacantes estariam em desvantagem subindo o morro. Para parecer maior, fez os servos e os animais de carga marcharem com o exército, com as mulas arrumadas como se fossem cavalos de cavalaria.",
        "Sétimo, os ambrões que tinham sobrado e os teutões atacaram morro acima. Os legionários lançaram os pilos e depois fecharam a formação, com as espadas na mão. A luta durou boa parte da manhã, e os legionários foram empurrando os inimigos morro abaixo.",
        "Oitavo, os homens de Marcelo atacaram pela retaguarda. Os guerreiros ficaram presos em duas frentes, romperam-se e fugiram. Muitos foram mortos na confusão, e a perseguição seguiu até a tarde."
      ]},
      { n: "04", title: "Legado", blocks: [
        "Teutobod e os seus escaparam do campo, mas foram capturados pelos séquanos, que os entregaram a Mário. Estimativas modernas falam em 100.000 a 120.000 mortos do lado germano. As perdas romanas são desconhecidas. Os sobreviventes, inclusive mulheres e crianças, seriam vendidos como escravos. Segundo Floro, 300 mulheres teutãs se mataram, e aos filhos, para não serem entregues. A tradição romana as fez heroínas germânicas.",
        "Mário deu o lucro da venda aos seus soldados e oficiais, o que aumentou ainda mais sua popularidade. Roma comemorou, e Mário foi reeleito cônsul, de novo ausente. Em julho de 101 a.C., ele e Catulo derrotaram os cimbros em Vercelas, e a ameaça acabou.",
        { note: "Plutarco conta que os habitantes de [[Massália|massália]], a uns 30 km, cercaram os campos com os ossos dos mortos, e que a terra, adubada pelos corpos, deu colheitas excepcionais por anos. É uma tradição, não um fato comprovado. Os detalhes dos truques de Mário, como o dos animais disfarçados, vêm de autores que escreveram muito depois." },
        { note: "Uma lenda local liga o monte Sainte-Victoire à vitória de Mário, mas ela foi rejeitada por estudiosos, como o poeta Frédéric Mistral. Pesquisas modernas, como as de Evans, dizem que o aperto dos guerreiros cercados, que não conseguiam lutar, explica boa parte do número de mortos." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  rafia: {
    terrain: [{ t: "note", x: 8, y: 66, l: "Deserto do Sinai ao fundo" }],
    units: [
      { id: "pPol", s: "a", k: "cav", w: 10, h: 4, l: "Polícrates (cavalaria)" },
      { id: "pLeft", s: "a", k: "inf", w: 14, h: 4, l: "Cretenses, guarda e peltastas" },
      { id: "pPhM", s: "a", k: "inf", w: 14, h: 5, l: "Falange macedônia" },
      { id: "pPhE", s: "a", k: "inf", w: 15, h: 5, l: "Falange egípcia" },
      { id: "pMerc", s: "a", k: "inf", w: 9, h: 4, l: "Fóxidas (mercenários gregos)" },
      { id: "pGaul", s: "a", k: "inf", w: 9, h: 4, l: "Gauleses e trácios" },
      { id: "pEch", s: "a", k: "cav", w: 12, h: 4, l: "Equécrates (cavalaria)" },
      { id: "pEleL", s: "a", k: "ele", w: 12, h: 3, l: "40 elefantes (Ptolomeu)" },
      { id: "pEleR", s: "a", k: "ele", w: 10, h: 3, l: "33 elefantes" },
      { id: "aRcav", s: "b", k: "cav", w: 10, h: 4, l: "Antíoco e a cavalaria" },
      { id: "aRinf", s: "b", k: "inf", w: 14, h: 4, l: "Cretenses, mercenários e macedônios" },
      { id: "aPh", s: "b", k: "inf", w: 28, h: 5, l: "Falange (argiráspides e Nicarco)" },
      { id: "aLinf", s: "b", k: "inf", w: 22, h: 4, l: "Árabes, medos e tropa leve" },
      { id: "aLcav", s: "b", k: "cav", w: 12, h: 4, l: "Temísson (cavalaria)" },
      { id: "aEleR", s: "b", k: "ele", w: 14, h: 3, l: "60 elefantes (Filipe)" },
      { id: "aEleL", s: "b", k: "ele", w: 12, h: 3, l: "42 elefantes (Miísco)" }
    ],
    steps: [
      { t: "Os dois reis põem a falange no centro, a cavalaria nas pontas e os elefantes na frente. Ptolomeu fica na esquerda, onde enfrenta Antíoco, que fica na direita dele.",
        p: { pPol: [8, 50], pLeft: [22, 50], pPhM: [37, 50], pPhE: [51.5, 50], pMerc: [64, 50], pGaul: [73.5, 50], pEch: [87, 50], pEleL: [18, 43], pEleR: [85, 43],
             aRcav: [8, 18], aRinf: [22, 18], aPh: [44, 18], aLinf: [70, 18], aLcav: [87, 18], aEleR: [14, 26], aEleL: [87, 26] } },
      { t: "Os elefantes se encontram primeiro. Só poucos dos de Ptolomeu chegam a lutar de frente.",
        p: { pEleL: [18, 38], aEleR: [16, 33], pEleR: [85, 38], aEleL: [86, 33] } },
      { t: "Os elefantes africanos, menores, fogem dos indianos e caem sobre a própria infantaria. A guarda de Ptolomeu cede.",
        p: { pEleL: [30, 50], pLeft: [26, 53], aEleR: [18, 42] }, x: ["pEleL"] },
      { t: "Antíoco contorna os elefantes com a cavalaria e ataca a de Polícrates. Os mercenários de Antíoco atacam os peltastas de Ptolomeu. A esquerda ptolomaica é empurrada para trás.",
        p: { aRcav: [9, 46, 35], pPol: [8, 56], aRinf: [24, 41], pLeft: [27, 57], aEleR: [14, 46] } },
      { t: "Na direita, Equécrates espera, depois manda Fóxidas avançar e dá a volta no flanco inimigo com a cavalaria.",
        p: { pEch: [92, 32, -40], pMerc: [64, 38], pGaul: [74, 40], aLcav: [85, 22] } },
      { t: "A cavalaria de Antíoco naquela ponta é derrotada. A infantaria de Fóxidas faz os árabes e medos fugirem. A ala esquerda de Antíoco desaba.",
        p: { aLcav: [90, 10], aLinf: [70, 24], pMerc: [66, 28], pEch: [90, 18] }, x: ["aLcav", "aLinf"] },
      { t: "No centro, as duas falanges estão intactas. Ptolomeu, que recuou atrás da sua, reaparece. A falange avança, com Andrômaco e Sosíbio.",
        p: { pPhM: [37, 38], pPhE: [51.5, 38], aPh: [44, 30] } },
      { t: "A falange de Nicarco foge. Quem resistiu mais, os escolhidos da elite, cede também.",
        p: { pPhM: [37, 28], pPhE: [51.5, 28], aPh: [44, 20] }, x: ["aPh"] },
      { t: "Antíoco ainda persegue na direita. Vê a poeira avançando para o seu acampamento, volta e encontra o exército em fuga. Recua para dentro de Ráfia.",
        p: { aRcav: [18, 34, -10], aRinf: [24, 26] }, x: ["aRinf", "aRcav"] }
    ]
  },

  cinoscefalos: {
    terrain: [{ t: "hill", x: 50, y: 33, rx: 44, ry: 9, l: "Colinas de Cinoscéfalos" }],
    units: [
      { id: "rSkir", s: "a", k: "inf", w: 12, h: 3, l: "Tropa leve e cavalaria romanas" },
      { id: "rLeft", s: "a", k: "inf", w: 16, h: 5, l: "Legião da esquerda (Flaminino)" },
      { id: "rTrib", s: "a", k: "inf", w: 8, h: 4, l: "20 manípulos do tribuno" },
      { id: "rRight", s: "a", k: "inf", w: 16, h: 5, l: "Ala direita (reserva)" },
      { id: "rEle", s: "a", k: "ele", w: 10, h: 3, l: "Elefantes" },
      { id: "rAet", s: "a", k: "cav", w: 10, h: 4, l: "Cavalaria etólia" },
      { id: "rCamp", s: "a", k: "camp", w: 14, h: 5, l: "Acampamento romano" },
      { id: "mSkir", s: "b", k: "inf", w: 14, h: 3, l: "Tropa leve e mercenários" },
      { id: "mCav", s: "b", k: "cav", w: 10, h: 4, l: "Cavalaria macedônia" },
      { id: "mPelt", s: "b", k: "inf", w: 10, h: 4, l: "Peltastas" },
      { id: "mPhR", s: "b", k: "inf", w: 22, h: 5, l: "Falange da direita (Filipe)" },
      { id: "mNic", s: "b", k: "inf", w: 14, h: 7, l: "Falange da esquerda, em coluna (Nicanor)" }
    ],
    steps: [
      { t: "Chuva, depois nevoeiro. Os exércitos se perdem. Filipe manda a tropa leve ocupar as colinas, e Flaminino manda 1.000 soldados de tropa leve e 300 cavaleiros. Eles se esbarram na crista.",
        p: { rSkir: [40, 44], rLeft: [22, 62], rTrib: [46, 62], rRight: [64, 62], rEle: [78, 62], rAet: [90, 56], rCamp: [50, 66],
             mSkir: [40, 36], mCav: [8, 10], mPelt: [20, 10], mPhR: [38, 10], mNic: [75, 8] } },
      { t: "Os romanos, em menor número, começam a perder. Flaminino manda 2.000 soldados de tropa leve e 500 cavaleiros. Os macedônios são empurrados para as cumeadas.",
        p: { rSkir: [40, 38], mSkir: [40, 29], rAet: [52, 38] } },
      { t: "Filipe manda Atenágoras, com 1.500 mercenários e 1.500 cavaleiros. Os romanos são empurrados do alto, mas a cavalaria etólia impede que sejam expulsos de vez.",
        p: { mSkir: [40, 38], rSkir: [38, 48], mCav: [30, 30] } },
      { t: "Chegam notícias exageradas de uma fuga romana. Filipe manda 8.000 falangistas e 4.000 peltastas avançar e chama Nicanor com o resto.",
        p: { mPhR: [38, 30], mPelt: [20, 30], mNic: [70, 16] } },
      { t: "Flaminino sai do acampamento e forma a linha, com os elefantes na frente da direita. Leva a legião da esquerda e guarda a direita como reserva.",
        p: { rLeft: [22, 54], rTrib: [46, 58], rRight: [64, 56], rEle: [76, 50], rSkir: [40, 56] } },
      { t: "Filipe, com a falange mais apertada e mais funda, ataca a esquerda romana morro abaixo, e a empurra devagar.",
        p: { mPhR: [30, 42], mPelt: [14, 42], mCav: [4, 40], rLeft: [24, 58] } },
      { t: "A esquerda macedônia, de Nicanor, ainda chega à crista em coluna. Flaminino manda atacar a direita, com os elefantes, os aliados e 4.000 soldados gregos. Os macedônios se dispersam.",
        p: { rEle: [74, 32], rRight: [66, 38], rAet: [88, 36], mNic: [80, 12] }, x: ["mNic"] },
      { t: "Um tribuno, de nome desconhecido, vê a direita de Filipe exposta por trás. Leva 20 manípulos para as costas da falange.",
        p: { rTrib: [34, 22] } },
      { t: "A falange, rígida, não consegue virar e se desfaz. Muitos levantam as sarissas, e os romanos continuam matando. Filipe foge com a cavalaria.",
        p: { mCav: [8, 4] }, x: ["mPhR", "mPelt", "mCav", "mSkir"] }
    ]
  },

  magnesia: {
    terrain: [{ t: "note", x: 8, y: 68, l: "Rio Frígio (cobre a esquerda romana)" }],
    units: [
      { id: "rLeft", s: "a", k: "inf", w: 20, h: 5, l: "Infantaria da esquerda (Domício)" },
      { id: "rCen", s: "a", k: "inf", w: 26, h: 5, l: "Infantaria do centro (Cipião)" },
      { id: "rRcav", s: "a", k: "cav", w: 16, h: 4, l: "Cavalaria de Eumenes" },
      { id: "rLight", s: "a", k: "inf", w: 18, h: 3, l: "Tropa leve e arqueiros" },
      { id: "rRes", s: "a", k: "inf", w: 10, h: 4, l: "Voluntários trácios e macedônios" },
      { id: "rCamp", s: "a", k: "camp", w: 14, h: 5, l: "Acampamento romano" },
      { id: "bRcav", s: "b", k: "cav", w: 18, h: 5, l: "Antíoco: catafratários e guarda" },
      { id: "bPh", s: "b", k: "inf", w: 30, h: 6, l: "Falange de 16.000" },
      { id: "bEle", s: "b", k: "ele", w: 22, h: 3, l: "20 elefantes" },
      { id: "bGal", s: "b", k: "inf", w: 14, h: 4, l: "Gálatas e infantaria aliada" },
      { id: "bLcav", s: "b", k: "cav", w: 18, h: 5, l: "Seleuco: catafratários e cavalaria" },
      { id: "bChar", s: "b", k: "car", w: 16, h: 3, l: "Carros com foices e camelos" },
      { id: "bCamp", s: "b", k: "camp", w: 14, h: 5, l: "Acampamento selêucida" }
    ],
    steps: [
      { t: "A infantaria romana ocupa a esquerda e o centro, com a esquerda apoiada no rio. Eumenes fica com a cavalaria na direita, aberta. Antíoco, na direita dele, tem a melhor tropa. A esquerda selêucida tem carros e camelos na frente.",
        p: { rLeft: [14, 52], rCen: [38, 52], rRcav: [62, 52], rLight: [72, 44], rRes: [50, 60], rCamp: [14, 66],
             bRcav: [10, 16], bPh: [44, 16], bEle: [44, 23], bGal: [68, 17], bLcav: [88, 16], bChar: [88, 26], bCamp: [50, 6] } },
      { t: "Eumenes manda arqueiros, fundibulários e lanceiros contra os carros com foices.",
        p: { rLight: [82, 40], bChar: [88, 34] } },
      { t: "Os carros, atingidos, entram em pânico e desorganizam os camelos e os catafratários que estão atrás.",
        p: { bChar: [78, 36], rLight: [80, 34] }, x: ["bChar"] },
      { t: "Eumenes ataca antes que os catafratários se reorganizem. A cavalaria romana e a de Pérgamo quebram a esquerda selêucida.",
        p: { rRcav: [84, 30, -20], bLcav: [92, 20] }, x: ["bLcav"] },
      { t: "A infantaria gaulesa e os mercenários, ao lado da falange, são atingidos pelo centro e pela direita romanos e cedem. O flanco da falange fica exposto.",
        p: { bGal: [68, 26], rCen: [40, 40] }, x: ["bGal"] },
      { t: "Na outra ponta, Antíoco ataca a infantaria romana da esquerda com os catafratários e a guarda, e os argiráspides atacam os legionários. A esquerda romana recua até o acampamento.",
        p: { bRcav: [14, 38, 15], rLeft: [12, 58], rRes: [22, 60] } },
      { t: "Os voluntários trácios e macedônios reforçam o acampamento, e o tribuno Lépido reorganiza os fugitivos. A cavalaria pesada de Antíoco não consegue tomar o acampamento e fica presa diante dele.",
        p: { bRcav: [14, 50, 15] } },
      { t: "No centro, a falange aguenta os legionários, mas não tem resposta para flechas e pedras. Os elefantes, atingidos, entram em pânico e rompem a formação.",
        p: { bPh: [44, 28], bEle: [44, 30], rCen: [40, 36] }, x: ["bEle"] },
      { t: "Os falangistas largam as armas. A cavalaria de Antíoco volta tarde demais. O rei recua para Sardes, e os romanos saqueiam o acampamento.",
        p: { bRcav: [26, 34], rCen: [44, 12], rLeft: [18, 28] }, x: ["bPh", "bRcav"] }
    ]
  },

  aquaesextiae: {
    terrain: [
      { t: "hill", x: 50, y: 58, rx: 44, ry: 10, l: "Colina de Mário" },
      { t: "note", x: 12, y: 32, l: "Rio" }
    ],
    units: [
      { id: "rLeg", s: "a", k: "inf", w: 40, h: 5, l: "Legiões de Mário" },
      { id: "rLig", s: "a", k: "inf", w: 10, h: 3, l: "Auxiliares lígures" },
      { id: "rServ", s: "a", k: "inf", w: 18, h: 3, l: "Servos e mulas" },
      { id: "rMar", s: "a", k: "inf", w: 10, h: 3, l: "Marcelo, 3.000 homens" },
      { id: "rCamp", s: "a", k: "camp", w: 14, h: 5, l: "Acampamento de Mário" },
      { id: "tAmb", s: "b", k: "inf", w: 22, h: 6, l: "Ambrões" },
      { id: "tTeu", s: "b", k: "inf", w: 40, h: 6, l: "Teutões e ambrões" }
    ],
    steps: [
      { t: "Mário fortifica um acampamento no alto e espera. Os ambrões acampam além do rio, e os teutões um pouco atrás.",
        p: { rLeg: [50, 56], rLig: [66, 50], rServ: [80, 60], rMar: [18, 62], rCamp: [30, 66], tAmb: [30, 18], tTeu: [72, 10] } },
      { t: "Servos romanos vão buscar água e encontram ambrões se banhando. Os ambrões chamam os companheiros.",
        p: { rServ: [52, 38], tAmb: [38, 26] } },
      { t: "Os lígures atacam por conta própria, e os ambrões formam linha. Mário traz as legiões.",
        p: { rLig: [46, 36], rLeg: [50, 46] } },
      { t: "Os legionários lançam os pilos e avançam com as espadas. Os ambrões, desprevenidos, são empurrados contra o rio.",
        p: { tAmb: [30, 24], rLeg: [48, 40] }, x: ["tAmb"] },
      { t: "Dias depois, Mário desce à planície e toma o alto. Manda Marcelo com 3.000 homens se esconder para atacar a retaguarda. Servos e mulas marcham com o exército, para parecer maior.",
        p: { rMar: [92, 36], rServ: [66, 56], rLeg: [50, 50], rLig: [30, 52], tTeu: [50, 16] } },
      { t: "Os teutões e os ambrões que sobraram atacam morro acima. Os legionários lançam os pilos e fecham a formação.",
        p: { tTeu: [50, 36], rMar: [90, 16] } },
      { t: "A luta dura horas. Os legionários empurram os guerreiros morro abaixo.",
        p: { tTeu: [50, 30], rLeg: [50, 44] } },
      { t: "Os homens de Marcelo saem do mato e atacam pela retaguarda. Os guerreiros ficam presos em duas frentes.",
        p: { rMar: [62, 14], tTeu: [50, 26] } },
      { t: "Os teutões cedem, e a perseguição vai até a tarde. Teutobod escapa, mas é capturado e entregue a Mário.",
        p: { tTeu: [50, 22], rLeg: [50, 36] }, x: ["tTeu"] }
    ]
  }
});
