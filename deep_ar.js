// In-depth battles, batch ar: legnano, montaperti, campaldino, fornovo, ravenna (regional pack, part C: northern Italy).
// Checked against the English and Italian Wikipedia articles on the battles of Legnano, Montaperti, Campaldino, Fornovo
// and Ravenna (1512), the Italian article on the Compagnia della Morte and Alberto da Giussano, and the works they cite
// (Giovanni Villani for Campaldino, Dante's Inferno X and XXXII and Purgatorio V, Guicciardini for Fornovo and Ravenna).
// Chronicle numbers and legends are flagged in the text. No diagram for Fornovo: the sources do not describe the moves.

Object.assign(GLOSSARY, {
  "carroccio": "Grande carro de quatro rodas, puxado por bois, que as cidades italianas da Idade Média levavam à guerra como símbolo do exército. Carregava o estandarte da cidade e muitas vezes um altar. Perdê-lo era uma vergonha, e por isso os soldados se juntavam em volta dele para defendê-lo.",
  "comuna": "Cidade italiana medieval que se governava sozinha, com cônsules ou magistrados eleitos, muralhas e milícia própria. No norte da Itália, as comunas eram ricas e formalmente súditas do imperador, mas queriam ser livres.",
  "guelfos": "Partido italiano que, nos séculos XII a XIV, apoiava o papa contra o imperador. Os guelfos eram fortes entre os comerciantes e banqueiros de cidades como Florença.",
  "gibelinos": "Partido italiano que apoiava o imperador do Sacro Império contra o papa. Eram fortes entre a nobreza de campo e em cidades como Siena, Pisa e Arezzo. Na prática, as cidades também usavam os dois nomes para as suas brigas locais.",
  "cisma": "Divisão da Igreja em dois papas rivais. Entre 1159 e 1177, Frederico Barbarossa apoiou papas escolhidos por ele contra Alexandre III, que as cidades lombardas defendiam.",
  "liga lombarda": "Aliança de cidades do norte da Itália, formada em 1167 e liderada por Milão, para resistir ao imperador Frederico Barbarossa. Teve o apoio do papa Alexandre III.",
  "podestà": "Magistrado estrangeiro, escolhido por uma cidade italiana medieval para governar, julgar e comandar o exército, justamente por não pertencer a nenhuma das famílias rivais locais.",
  "feditori": "Os cavaleiros da primeira fila de um exército italiano medieval, escolhidos entre os mais corajosos. Quebravam o primeiro choque, e muitos morriam.",
  "estradiotas": "Cavaleiros leves vindos dos Bálcãs (Grécia e Albânia), contratados por Veneza. Eram rápidos e mestres em atacar, fugir e saquear.",
  "lansquenetes": "Infantaria mercenária alemã, com piques e espadas largas. Criada nos anos 1480, virou uma das tropas mais temidas das Guerras Italianas.",
  "rodeleiros": "Soldados espanhóis protegidos por escudo redondo (rodela) e armados de espada curta. Eram bons no corpo a corpo, onde os piques compridos atrapalhavam.",
  "alabarda": "Arma de haste com uma lâmina de machado e uma ponta de lança. Os suíços a usavam em formações compactas, e ela rachava armaduras.",
  "guerras italianas": "Série de guerras entre 1494 e 1559, em que França, Espanha e o Império lutaram pelo controle da Itália, então dividida em muitas cidades e reinos ricos.",
  "liga de cambrai": "Aliança formada em 1508 por França, papa, Espanha e Império contra Veneza. Em 1511, o papa Júlio II mudou de lado e formou a Liga Santa contra a França.",
  "gendarmes": "Cavaleiros pesados franceses, de armadura completa, organizados em companhias permanentes do rei. Cada um vinha com ajudantes e arqueiros montados."
});

Object.assign(DEEP, {
  legnano: {
    war: "Guerras de Frederico Barbarossa contra as cidades lombardas (1154–1183)",
    hook: "O imperador que arrasou Milão caiu do cavalo diante da infantaria milanesa e sumiu por dias.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século XII, o norte da Itália era a região mais rica da Europa. Cidades como Milão, Pavia e Cremona, as [[comunas|comuna]], tinham comércio, muralhas e milícias próprias. Em teoria, todas obedeciam ao imperador do [[Sacro Império|sacro império]]. Na prática, cada uma se governava sozinha, e as vizinhas viviam brigando entre si.",
        "Frederico I, chamado Barbarossa (barba-ruiva), foi coroado imperador em 1155 e quis acabar com isso. Para ele, as cidades italianas deviam dinheiro, tropas e obediência. Desceu à Itália cinco vezes. Em 1162, depois de um cerco longo, mandou arrasar Milão. A destruição, em vez de assustar, uniu os vizinhos.",
        { h: "O caminho até Legnano" },
        { timeline: [
          ["1162", "Frederico toma e destrói Milão."],
          ["1167", "Cidades do norte formam a [[Liga Lombarda|liga lombarda]]. Uma epidemia força o exército imperial a recuar de Roma."],
          ["1168", "A Liga funda Alessandria, batizada em homenagem ao papa Alexandre III, inimigo do imperador."],
          ["1174–75", "Quinta campanha de Frederico: o cerco de Alessandria falha e as negociações em Montebello também."],
          ["28–29 mai 1176", "Frederico deixa a região de Como com a cavalaria. Em 29 de maio, encontra o exército da Liga perto de Legnano."]
        ]},
        "A Liga tinha ainda uma segunda razão para lutar: o [[cisma|cisma]] da Igreja. Frederico apoiava papas rivais de Alexandre III, e as cidades lombardas ficaram do lado do papa legítimo, na visão delas. Em 1176, o imperador precisava de reforços alemães. Eles vieram sob o comando de Filipe de Colônia e de Wichmann de Magdeburgo, cerca de 2.000 cavaleiros, menos do que ele queria. Frederico foi buscá-los em Como e marchou para Pavia, onde se uniria a outros aliados. A Liga saiu de Milão para interceptá-lo."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Frederico I Barbarossa, cerca de 54 anos" },
        "Imperador desde 1155, era um guerreiro experiente, convicto de que o império valia o que cada cidade devia a ele. Já tinha vencido Milão uma vez. Em Legnano, a pressa o traiu: para chegar logo a Pavia, deixou a infantaria para trás e marchou só com a cavalaria pesada.",
        { h: "A Liga e seus comandantes" },
        "Não havia um rei do lado italiano. A Liga era uma aliança de cidades, e o comando era dividido. Os historiadores consideram que Guido da Landriano, político milanês, foi provavelmente o comandante no campo, mas é uma dedução: nenhuma fonte da época o diz com todas as letras. A espinha dorsal do exército era a infantaria de Milão, que defendia o [[carroccio]] da cidade.",
        { h: "Os outros nomes" },
        "Do lado imperial, além de Filipe de Colônia e Wichmann de Magdeburgo, havia os cavaleiros da cidade de Como, aliada de Frederico, que sofreram muito na batalha. Entre os prisioneiros ilustres estavam o conde Bertoldo IV de Zähringen e Filipe da Alsácia, citados numa carta de Milão a Bolonha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As estimativas modernas dão a Frederico cerca de 3.000 cavaleiros pesados, quase todos alemães, além dos aliados de Como. A Liga teria entre 12.000 e 15.000 homens: a maior parte infantaria milanesa, com 2.000 a 3.000 cavaleiros de Milão e das cidades aliadas. Nenhum cronista da época deu números seguros, então são estimativas, não dados.",
        { h: "O terreno" },
        "A região entre Milão e Como, a noroeste da primeira, cortada pelo rio Olona e por bosques e campos. Legnano e Borsano ficam a alguns quilômetros uma da outra. O Ticino, que corre para o oeste, era a rota de fuga de quem queria chegar a Pavia.",
        { h: "A batalha" },
        { formation: true },
        "Em 29 de maio, Frederico marchava para sudoeste, e a Liga subia de Milão. Perto de Borsano, uns 700 cavaleiros da Liga toparam com uns 300 imperiais, a vanguarda. Os alemães recuaram, e os italianos os seguiram. Foi uma armadilha involuntária: atrás da vanguarda vinha o grosso da cavalaria, que atacou e expulsou os cavaleiros da Liga do campo.",
        "Os cavaleiros alemães perseguiram os fugitivos e deram com o [[carroccio]], plantado numa elevação acima do Olona. Em volta dele, a infantaria milanesa formou um semicírculo de escudos e lanças compridas. Há quem diga que o ataque foi uma decisão racional: o carro e a infantaria bloqueavam o caminho de Pavia. Também deve ter pesado a honra: a vitória sobre um carroccio era quase uma vitória sobre a cidade inteira.",
        "A infantaria resistiu. As fontes divergem sobre se foram duas ou quatro linhas que quebraram, mas o núcleo em torno do carro não cedeu. Durante horas, os cavaleiros alemães carregaram, recuaram e carregaram de novo, e cada carga custou homens e cavalos. Nessa hora a cavalaria da Liga, reorganizada, voltou e atacou pelos lados e por trás.",
        "O porta-estandarte imperial foi morto, e o estandarte, perdido. Frederico entrou na luta, foi derrubado do cavalo e desapareceu de vista. A notícia de que o imperador morrera correu pelo campo, e o exército se desfez.",
        { h: "A fuga" },
        "Os imperiais fugiram para o oeste, rumo ao Ticino, por Dairago e Turbigo. Muitos foram mortos, presos ou se afogaram ao tentar atravessar o rio. Os cavaleiros de Como foram os que mais sofreram. A Liga ficou com a insígnia, a bagagem, os cavalos e o equipamento.",
        { note: "As baixas são uma estimativa moderna: algo entre 1.500 e 2.500 imperiais mortos, feridos ou presos, e poucas centenas do lado da Liga. Nenhum cronista da época deu um total confiável." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Frederico sobreviveu. Segundo as fontes, a imperatriz Beatriz, em Pavia, chorava o marido como morto quando ele apareceu às portas da cidade alguns dias depois (uns dizem três dias, outros uma semana). Tinha perdido armadura, espada, lança e tesouro no campo. A quinta campanha estava acabada, e ele já não tinha forças para outra.",
        "O imperador passou a negociar. Em 1177, na Paz de Veneza, reconheceu Alexandre III como papa e encerrou o cisma. Com as cidades fez só uma trégua de seis anos. A paz definitiva veio em 1183, em Constança: as comunas ficaram sujeitas ao imperador no nome, mas com direito de governar, fortificar-se e julgar por conta própria. Alessandria, a cidade do papa, foi rebatizada Cesareia para agradar a Frederico.",
        { h: "Por que importa" },
        "Legnano mostrou que uma infantaria bem postada, em torno de um símbolo que ninguém queria perder, podia segurar a cavalaria pesada. Politicamente, deu às comunas do norte da Itália a autonomia que sustentaria seu crescimento nos séculos seguintes.",
        { h: "Curiosidades e controvérsias" },
        { note: "A Companhia da Morte: segundo a lenda, um grupo de jovens jurou morrer em volta do carroccio, liderado por Alberto da Giussano. Nenhum dos dois aparece nas crônicas do século XII. Alberto surge só no século XIV, na obra do cronista Galvano Fiamma, quase 150 anos depois da batalha." },
        { note: "O juramento de Pontida: a tradição diz que as cidades juraram aliança em 1167, na abadia de Pontida. Os historiadores duvidam, porque as fontes só o mencionam a partir de 1505." },
        { note: "Uma batalha reinventada: no século XIX, durante a unificação da Itália, Legnano virou símbolo da resistência a estrangeiros. A ópera de Verdi 'A Batalha de Legnano' é de 1849, e o hino nacional italiano cita o nome da cidade. Foi uma leitura moderna: em 1176, a briga era entre comunidades dentro do mesmo império, não entre nações." }
      ]}
    ]
  },

  montaperti: {
    war: "Rivalidade entre Florença e Siena na luta de guelfos e gibelinos (1250–1270)",
    hook: "Siena entregou a cidade à Virgem, atacou um exército bem maior e, segundo Dante, tingiu um rio de vermelho.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século XIII, a Itália estava dividida em dois partidos, os [[guelfos]] (do papa) e os [[gibelinos]] (do imperador). As cidades usavam os nomes para as suas brigas. Florença, rica de banqueiros e lã, era guelfa. Siena, rival na Toscana, era gibelina, e tinha seus próprios banqueiros.",
        "Em 1258, os guelfos expulsaram de Florença os últimos gibelinos poderosos. Os exilados foram para Siena. Manfredo, rei da Sicília, filho do imperador Frederico II e líder do lado gibelino, mandou ajuda: em 1259, cavaleiros alemães sob o comando de Giordano d'Agliano chegaram a Siena. Começaram com uns 100, aceitos por conselho de Farinata degli Uberti, um dos exilados florentinos.",
        { h: "O caminho até Montaperti" },
        { timeline: [
          ["1258", "Os guelfos expulsam os gibelinos de Florença. Os exilados vão para Siena."],
          ["1259", "Chegam a Siena os primeiros cavaleiros alemães de Manfredo."],
          ["18–20 mai 1260", "Uma liga guelfa de cerca de 35.000 homens cerca Siena e levanta o cerco dois dias depois."],
          ["2 set", "Os guelfos acampam perto do rio Arbia, em Montaperti, e mandam um ultimato."],
          ["2–3 set", "Siena se consagra à Virgem e marcha até as colinas diante do acampamento inimigo."],
          ["4 set", "A batalha."]
        ]},
        "Depois do cerco falho, Manfredo mandou cerca de 800 cavaleiros alemães a mais, e Pisa e outros gibelinos da Toscana também ajudaram Siena. Os guelfos voltaram. Siena recusou o ultimato, mas a decisão não foi unânime: alguns conselheiros queriam negociar. Para convencer os alemães a lutar, os dirigentes sieneses pagaram a eles soldo em dobro, com dinheiro de Salimbene dei Salimbeni. Em procissão, a cidade foi consagrada à Virgem Maria."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Farinata degli Uberti" },
        "Líder dos gibelinos de Florença, exilado em Siena. Foi ele que convenceu os sieneses a aceitar a ajuda de Manfredo. Depois da vitória, em Empoli, impediu que a sua cidade natal fosse arrasada. Dante o encontra no Inferno, mas por heresia, não por causa da batalha.",
        { h: "Giordano d'Agliano" },
        "Comandante da cavalaria alemã de Manfredo. Seus cavaleiros, pesados e disciplinados, eram o martelo do exército gibelino.",
        { h: "Bocca degli Abati" },
        "Cavaleiro florentino, supostamente guelfo, mas gibelino em segredo. Segundo as crônicas, cortou a mão do porta-estandarte florentino em plena batalha. Dante o pôs no gelo do último círculo do Inferno, entre os traidores.",
        { h: "Os outros nomes" },
        "Do lado de Siena, Aldobrandino Aldobrandeschi comandava a infantaria sienesa, e Niccolò da Bigozzi, a guarda do carroccio. O conde de Arras, capitão alemão a serviço de Manfredo, conduzia o destacamento que atacou por trás. Do lado de Florença, o comandante é incerto: as crônicas citam Jacopino Rangoni, de Módena, que teria morrido no fim da batalha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo as crônicas, os guelfos teriam uns 30.000 infantes e 3.000 cavaleiros, e os gibelinos uns 18.000 a 20.000: cerca de 8.000 sieneses, 3.000 pisanos, 2.000 infantes e 800 cavaleiros alemães de Manfredo, além de outros aliados. Como quase toda cifra de cronista medieval, são números que os historiadores usam com cautela.",
        { h: "O terreno" },
        "Uma região de colinas baixas perto do rio Arbia, a poucos quilômetros de Siena. O acampamento guelfo ficava em terreno alto, o Poggio delle Cortine. Para chegar a ele, os gibelinos tinham de atravessar o rio e subir a encosta.",
        { note: "Há uma lenda de que, para parecer mais numerosos, os sieneses teriam desfilado três vezes diante do inimigo, trocando de cores. Não é confirmada por documentos." },
        { h: "A batalha" },
        { formation: true },
        "Os gibelinos atravessaram o Arbia em quatro corpos. Os relatos divergem sobre os números de cada um, mas o plano é claro: um corpo, os alemães do conde de Arras, ficaria escondido para cair sobre a retaguarda guelfa, e os outros, de Giordano, de Aldobrandeschi e de Bigozzi (que guardava o carroccio), formariam a frente. Esperaram o sol subir, de modo que a luz batesse nos olhos dos florentinos, que estavam em cima do morro.",
        "Por volta das dez da manhã, os cavaleiros alemães atacaram morro acima e empurraram a ala direita guelfa. A infantaria sienesa subiu junto. Até cerca das três da tarde, segundo as crônicas, os florentinos, mais numerosos e em terreno alto, ganharam terreno. Niccolò da Bigozzi, que devia guardar o carroccio, entrou na luta e firmou a linha sienesa.",
        "Então veio a traição. Bocca degli Abati, segundo os cronistas, cortou a mão do porta-estandarte florentino, Jacopo de' Pazzi. O estandarte caiu, e o desânimo se espalhou. Simpatizantes dos gibelinos tentaram tomar o carroccio florentino e não conseguiram, mas a confusão já corria.",
        "No fim da tarde, os alemães do conde de Arras saíram da emboscada gritando 'São Jorge' e atacaram a retaguarda. O comandante florentino morreu, a cavalaria foi quase toda destruída, o acampamento foi saqueado e o carroccio, tomado. O exército guelfo se desfez, e a perseguição durou até a noite.",
        { h: "As baixas" },
        "As fontes divergem muito. Estimativas modernas falam em cerca de 2.500 florentinos mortos e 1.500 presos. As crônicas chegam a 10.000 mortos e 15.000 prisioneiros entre todos os guelfos, números que quase certamente passam do real. Do lado gibelino, uns 600 mortos. Segundo os relatos, muitos florentinos tiraram as insígnias e se misturaram aos aliados para escapar."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Em 13 de setembro, os guelfos de Florença fugiram para Bolonha e Lucca. Em 27 de setembro, os gibelinos voltaram ao poder. Os cidadãos tiveram de jurar fidelidade a Manfredo, e as torres e casas dos guelfos foram demolidas. Num conselho em Empoli, os aliados gibelinos queriam destruir Florença. Farinata se opôs, e a cidade foi poupada.",
        "O domínio gibelino durou pouco. Em 1266, Manfredo morreu em Benevento, e os guelfos, com ajuda do papa e de Carlos de Anjou, retomaram a Toscana. Em 1269, Siena perdeu para Florença em Colle, e o chefe sienês Provenzano Salvani foi morto.",
        { h: "Por que importa" },
        "Montaperti foi uma das batalhas mais sangrentas da Itália medieval. Para os sieneses, é a vitória sobre Florença que ainda se lembra: toda noite de 4 de setembro, uma procissão de tochas sobe ao monumento no morro. Para a literatura, ela entrou na Divina Comédia: Dante escreveu, no Inferno, que a batalha fez o Arbia ficar 'colorido de vermelho', e a frase ficou.",
        { h: "Curiosidades e controvérsias" },
        { note: "O Livro de Montaperti: os sieneses tomaram no acampamento florentino o registro administrativo do exército, um documento raro sobre como uma cidade medieval organizava seus soldados." },
        { note: "A igreja de São Jorge: diz-se que os alemães usaram parte do soldo para fundar uma igreja em Siena, em agradecimento a São Jorge, cujo nome tinham gritado." },
        { note: "As histórias de guerra: conta-se que o gonfalão florentino foi arrastado na poeira, preso à cauda de um burro, e que uma vivandeira chamada Usilia capturou e salvou 36 florentinos. São relatos tradicionais, sem confirmação sólida." }
      ]}
    ]
  },

  campaldino: {
    war: "Guerras entre guelfos e gibelinos na Toscana (século XIII)",
    hook: "Dante tinha 24 anos e estava na primeira fila; décadas depois, pôs um inimigo derrotado dentro do Purgatório.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Na Toscana do fim do século XIII, os [[guelfos]] tinham vencido. Depois de Benevento (1266), onde Carlos de Anjou matou Manfredo, a Itália gibelina perdera o apoio de um rei. Florença era guelfa e rica, e queria fechar as contas com as cidades gibelinas vizinhas.",
        "Arezzo era a mais forte delas. O bispo Guglielmino degli Ubertini, um nobre que lutava de maça na mão, era a figura mais forte da cidade, que abrigava exilados gibelinos de várias partes. No Casentino, o vale do alto rio Arno, o conde Guido Novello, senhor de Poppi e podestà de Arezzo, estava do mesmo lado. O gatilho, segundo o cronista Giovanni Villani, foram os ataques guelfos às terras de Guido Novello e a ameaça sobre a fortaleza de Bibbiena.",
        { h: "O caminho até Campaldino" },
        { timeline: [
          ["1260", "Siena, gibelina, vence Florença em Montaperti."],
          ["1266", "Manfredo morre em Benevento, e os guelfos retomam a Toscana."],
          ["primavera de 1289", "Uma liga guelfa reúne um exército e entra no Casentino pelo passo de Consuma, evitando a rota do Valdarno."],
          ["11 jun 1289", "Os dois exércitos se enfrentam na planície de Campaldino, no dia de São Barnabé."],
          ["fim de junho", "Os guelfos cercam Arezzo, sem tomá-la."]
        ]},
        "O exército guelfo vinha de Florença, mas reunia contingentes de Lucca, Siena, Pistoia, Prato, Bolonha e de guelfos da Romanha, além de cerca de 400 cavaleiros franceses do rei de Nápoles, comandados por Amerigo di Narbona. Os aretinos eram menos numerosos e de qualidade melhor: boa parte era nobreza feudal com séquito próprio."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Buonconte da Montefeltro" },
        "Capitão gibelino, filho de Guido da Montefeltro, um dos grandes chefes de guerra da época. Segundo as fontes, ele e o bispo achavam que era melhor não aceitar a batalha. Quando ela se tornou inevitável, foi Buonconte quem montou o plano. Morreu no campo.",
        { h: "Guglielmino degli Ubertini, bispo de Arezzo" },
        "Chefe político e militar de Arezzo. Segundo Villani, foi posto no cavalo quase à força e levado à batalha, onde caiu. Foi enterrado com os outros mortos perto do convento de Certomondo.",
        { h: "Corso Donati e Vieri de' Cerchi" },
        "Dois nobres florentinos, e rivais entre si. Cerchi comandou os cavaleiros da primeira linha, os [[feditori]]. Donati, na época [[podestà]] de Pistoia, ficou na reserva. Uma década depois, eles seriam os chefes das duas facções, os Negros (Donati) e os Brancos (Cerchi), que despedaçaram Florença.",
        { h: "Dante Alighieri, 24 anos" },
        "O futuro poeta lutou do lado guelfo, na cavalaria, entre os homens de Vieri de' Cerchi, na primeira linha. Anos depois, escreveu o relato que ainda se lê: no Purgatório, o espírito de Buonconte conta como morreu.",
        { h: "Os outros nomes" },
        "O comando nominal guelfo era de Amerigo di Narbona, mas quem conduzia o exército de fato era Guillaume de Durfort, que morreu no campo. Do lado aretino, o conde Guido Novello comandava a cavalaria de reserva."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números das fontes variam. O lado guelfo teria cerca de 10.000 infantes e entre 1.600 e 2.000 cavaleiros. O lado gibelino, cerca de 8.000 a 10.000 infantes e uns 800 cavaleiros. A cavalaria de Florença era numerosa, mas inexperiente e indisciplinada. A infantaria era sólida.",
        { h: "O terreno e as formações" },
        "A planície de Campaldino, no Casentino, entre Pratovecchio e Poppi. Os florentinos armaram uma formação em forma de crescente: na frente, uma cavalaria de choque; no centro, a cavalaria principal; nas duas pontas, a infantaria, com [[bestas|besta]] e [[pavês]], um pouco adiantada; atrás, as carroças da bagagem; no fim, uma [[reserva]] de infantaria e cavalaria.",
        "Os aretinos formaram em quatro linhas: duas de cavalaria, uma de infantaria e uma última, a reserva, de cavalaria.",
        { h: "A batalha" },
        { formation: true },
        "Os aretinos atacaram primeiro, com as três primeiras linhas. A carga dispersou a cavalaria da frente florentina e empurrou o corpo principal para trás, em direção às carroças. Foi o momento mais perigoso para os guelfos.",
        "Mas a formação em crescente funcionou como uma armadilha. As infantarias das pontas fecharam sobre os atacantes e os atingiram dos dois lados, com virotes de besta. A cavalaria aretina perdeu o ímpeto e ficou espremida.",
        "Então entrou a reserva. Corso Donati tinha ordem de não se mexer. Segundo Villani, ele disse que, se perdessem, morreria no campo com seus concidadãos. Atacou o flanco aretino. O golpe separou a cavalaria da infantaria. Guido Novello, vendo a batalha perdida, levou a reserva de volta para Poppi, e a cavalaria de Arezzo foi cercada. A infantaria, sozinha, foi destruída.",
        "O bispo e Buonconte morreram. No fim da tarde, uma tempestade caiu, e a perseguição parou.",
        { note: "Nos relatos de Villani, Corso Donati desobedece a uma ordem e vira herói. Como Villani escreveu décadas depois e era do partido guelfo, o episódio pode ter sido moldado para glorificar Florença, e os historiadores o tomam com cuidado." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os guelfos tiveram cerca de 300 mortos. Os aretinos, cerca de 1.700 mortos e entre 1.000 e 2.000 prisioneiros (a cifra de 2.000 é atribuída a Dante). Os mortos foram enterrados em valas comuns perto do convento de Certomondo. Prisioneiros que ninguém resgatou morreram nas cadeias de Florença. O podestà de Florença, Ugolino de' Rossi, entrou na cidade sob um baldaquino de pano de ouro.",
        { h: "Por que importa" },
        "Campaldino garantiu o poder guelfo na Toscana e enfraqueceu Arezzo. Pouco depois, Florença se dividiu em Brancos e Negros, e Dante, que era Branco, foi exilado em 1302 e nunca mais voltou. A Divina Comédia foi escrita no exílio.",
        { h: "Curiosidades e controvérsias" },
        { note: "Buonconte no Purgatório: no canto V, o espírito de Buonconte conta que, ferido na garganta, fugiu a pé até um rio e caiu, e que uma tempestade fez o rio engrossar e levar o corpo embora, sem que ninguém o achasse. É uma versão poética: não se sabe até que ponto reflete o que de fato aconteceu." },
        { note: "Os ossos do bispo: em 2008 foram achados restos de ossos na igreja de Certomondo, que se acredita serem do bispo Guglielmino." }
      ]}
    ]
  },

  fornovo: {
    war: "Primeira Guerra Italiana (1494–1498)",
    hook: "Os dois lados cantaram vitória: o rei francês escapou, e a liga italiana ficou com a bagagem dele.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século XV, a Itália era um mosaico de cidades e reinos ricos e brigões: Milão, Veneza, Florença, o papado, Nápoles. Eram ricos e, comparados aos reinos da França e da Espanha, militarmente frágeis. O rei francês Carlos VIII, de 24 anos, tinha uma pretensão antiga ao trono de Nápoles. Em 1494, aceitou o convite de Ludovico Sforza, de Milão, que queria ajuda contra os napolitanos, e cruzou os Alpes com um exército de primeira linha, com artilharia de bronze que as cidades italianas não sabiam enfrentar.",
        "As [[guerras italianas|Guerras Italianas]] começaram assim. Carlos atravessou a Itália quase sem lutar, passou por Florença e Roma e entrou em Nápoles em 22 de fevereiro de 1495. Mas conquistar era mais fácil do que manter. O papa, Veneza, Milão (que mudou de lado), o imperador e a Espanha formaram uma liga contra ele, proclamada em Veneza em 31 de março.",
        { h: "O caminho até Fornovo" },
        { timeline: [
          ["1494", "Carlos VIII entra na Itália com o exército francês."],
          ["22 fev 1495", "Carlos entra em Nápoles."],
          ["31 mar 1495", "Proclamada em Veneza a liga contra a França."],
          ["maio de 1495", "Carlos deixa Nápoles e volta para o norte com parte do exército."],
          ["6 jul 1495", "A liga fecha o caminho no vale do Taro. Batalha de Fornovo."],
          ["15 jul", "Carlos chega a Asti, em território amigo."],
          ["out 1495", "Carlos deixa a Itália."]
        ]},
        "O rei precisava voltar para casa com o que tinha. A liga, com mais gente e o poder de cortar-lhe o caminho, queria acabar com o exército francês antes que cruzasse os Alpes. Mas faltava um aliado: o contingente alemão do imperador Maximiliano nunca chegou, porque ele estava preso à Dieta de Worms."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Carlos VIII da França, 25 anos" },
        "Jovem e cheio de sonhos de cruzada, viu na conquista de Nápoles o primeiro passo para atacar os turcos. Em Fornovo, seu objetivo era mais simples: chegar em casa.",
        { h: "Francisco II Gonzaga, marquês de Mântua, 29 anos" },
        "Comandante-geral da liga. Veneza o contratara como capitão-geral, e o Senado veneziano estava dividido sobre lutar ou não. Dividiu o exército em nove corpos, com um plano em que dois deles prenderiam a frente e o centro francês, enquanto o resto contornaria a retaguarda. Seu tio Rodolfo morreu na batalha.",
        { h: "Os outros nomes" },
        "Do lado francês, o marechal de Gié e o milanês Gian Giacomo Trivulzio, que servia à França, comandavam a primeira divisão. Do lado da liga, o conde de Caiazzo, a ala direita, e Bernardino Fortebraccio, a esquerda. Os [[estradiotas]] venezianos, cavaleiros leves vindos dos Bálcãs, atuavam como tropa de escaramuça."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os franceses eram de 10.000 a 11.000 homens, incluindo mercenários suíços, com muita artilharia. A liga tinha entre 14.500 e 21.500, segundo as fontes, e mais cavaleiros, mas sem artilharia comparável. A diferença entre os números dos historiadores é grande, e quase todos reconhecem que a liga era superior em homens.",
        { h: "O terreno" },
        "O vale do rio Taro, perto de Fornovo, a uns 30 km a sudoeste de Parma. A liga ocupava a margem direita; os franceses desciam pela margem esquerda, em direção à planície. Uma tempestade tinha deixado o chão lamacento.",
        { h: "A batalha" },
        "Antes do combate, uma patrulha francesa de reconhecimento tinha sido destruída pelos estradiotas. Em 6 de julho, a coluna francesa desceu o vale com a artilharia à frente, protegendo o flanco do rio. Os canhões abriram fogo, mas fizeram pouco estrago: uma testemunha contou menos de dez mortos de bala de canhão em ambos os lados. Quando começou a chover, a pólvora francesa molhou e os canhões se calaram.",
        "A cavalaria pesada francesa atacou, e as fileiras italianas, desorganizadas, se dispersaram em minutos. Os [[alabardeiros|alabarda]] suíços seguraram a cavalaria milanesa. Francisco Gonzaga lutou na primeira fila e, segundo relatos, capturou o Bastardo de Bourbon. Rodolfo Gonzaga foi morto.",
        "Enquanto isso, os estradiotas e outros cavaleiros leves caíram sobre a bagagem francesa. Muitos soldados da liga pararam de lutar para saquear. Bernardino Fortebraccio disse depois ao Senado veneziano que a liga poderia ter vencido se seus homens tivessem ficado no combate.",
        "Depois de pouco mais de uma hora, os franceses recuaram para uma colina, e os dois lados acamparam. Mais tarde, o rei pediu uma trégua e saiu à noite.",
        { h: "As baixas" },
        "Os números variam muito. A liga perdeu entre 2.000 e 4.000 homens; os franceses, entre 100 e 1.200. O cronista Paolo Giovio falou em 4.000 mortos da liga e 1.000 franceses, e um historiador moderno, Santosuosso, considera esses números os mais próximos da realidade. Outras estimativas são menores. A bagagem tomada pela liga foi avaliada em cerca de 300.000 ducados, estimativa que cada fonte conta de um jeito."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Quem venceu? Veneza celebrou, com a captura de Mathieu de Bourbon e a bagagem do rei. Francisco Gonzaga também se disse vencedor e encomendou a Mantegna a 'Madonna da Vitória' (hoje no Louvre), para uma igreja de Mântua. Mas o exército francês saiu do vale, chegou a Asti em 15 de julho e voltou à França. O historiador Guicciardini escreveu que a opinião geral dava a vitória aos franceses. Gonzaga, em particular, reconheceu que foi por pouco.",
        "Em Nápoles, Fernando II voltou à cidade um dia depois da batalha. Carlos perdeu tudo o que tinha conquistado. Morreu em 1498, depois de bater a cabeça num batente de porta, e deixou dívidas.",
        { h: "Por que importa" },
        "Fornovo mostrou aos reis da Europa o quanto a Itália era rica e frágil. Nas décadas seguintes, França, Espanha e o Império brigaram pelo controle da península, e a Itália virou campo de batalha.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem ganhou: depende do critério. Se vencer era destruir o exército de Carlos ou prendê-lo, a liga fracassou. Se era ficar com o campo e a bagagem, ela venceu. A maioria dos historiadores dá a vantagem aos franceses." },
        { note: "A artilharia: apesar da fama dos canhões franceses, em Fornovo o fogo de artilharia matou poucos. A chuva molhou a pólvora, e o que decidiu o dia foram os cavaleiros e os suíços." }
      ]}
    ]
  },

  ravenna: {
    war: "Guerra da Liga de Cambrai (1508–1516)",
    hook: "O general francês de 22 anos ganhou a batalha e morreu nela.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1508, o papa Júlio II, a França, a Espanha e o Império formaram a [[liga de Cambrai|liga de cambrai]] para tomar terras de Veneza. Veneza perdeu muito território. Mas o papa temeu a França mais do que Veneza e, em 1511, mudou de lado: formou a [[Liga Santa|liga santa]] com a Espanha e Veneza, para expulsar os franceses da Itália.",
        "O rei Luís XII mandou seu sobrinho Gaston de Foix, duque de Nemours, de 22 ou 23 anos, para a Itália. Em poucas semanas, no inverno de 1512, Gaston socorreu Bolonha, tomou Brescia, onde houve massacre da guarnição e de civis, e fez Bérgamo pagar para ser poupada. O exército espanhol e papal, comandado por Ramón de Cardona, evitava o combate até ter uma posição forte. Os franceses o seguiram até Ravena.",
        { h: "O caminho até Ravena" },
        { timeline: [
          ["1508", "Liga de Cambrai contra Veneza."],
          ["1511", "O papa Júlio II forma a Liga Santa contra a França."],
          ["fev 1512", "Gaston de Foix toma Brescia."],
          ["9 abr 1512", "O bombardeio francês não rompe as muralhas de Ravena."],
          ["11 abr 1512", "Batalha de Ravena, no domingo de Páscoa."],
          ["jun–ago 1512", "Os suíços descem sobre a Lombardia, e os franceses deixam a Itália."]
        ]},
        "Ravena era a última praça do papa na Romanha, e Júlio II exigiu que o exército a socorresse. Gaston, por sua vez, tinha pressa: o rei Henrique VIII da Inglaterra ameaçava invadir a França, e boa parte das tropas teria de voltar. Depois que o bombardeio de 9 de abril falhou, ele decidiu combater em campo aberto."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gaston de Foix, duque de Nemours" },
        "Sobrinho do rei, brilhante e impaciente. Em poucas semanas percorreu o norte da Itália. Em Ravena, precisava de uma batalha rápida e a conseguiu. Morreu ao perseguir uma coluna em retirada com pouquíssimos homens.",
        { h: "Alfonso d'Este, duque de Ferrara" },
        "Aliado francês e senhor de uma das melhores artilharias da Europa, com cerca de 50 canhões. Seu uso do fogo no flanco decidiu a primeira fase da batalha.",
        { h: "Ramón de Cardona e Pedro Navarro" },
        "Cardona era vice-rei de Nápoles e comandava o exército de socorro. Navarro, nascido em Navarra, engenheiro e comandante da infantaria, projetou o campo entrincheirado.",
        { h: "Os outros nomes" },
        "Do lado francês, Jacques de La Palice e Yves d'Alègre, que comandava a retaguarda e morreu na batalha, além do cavaleiro Bayard. Do lado espanhol e papal, Fabrizio Colonna, comandante da cavalaria pontifícia, e Fernando d'Ávalos, marquês de Pescara, da cavalaria ligeira."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números das fontes divergem. Os franceses e ferrarenses teriam de 21.000 a 26.000 homens: [[gendarmes]], [[lansquenetes]] alemães sob Jacob Empser, infantaria gascã e picarda, italianos e 40 a 50 canhões. O exército de socorro teria de 16.000 a 17.000: infantaria espanhola, italianos, cavalaria e cerca de 30 canhões. Havia mais 5.000 homens dentro de Ravena.",
        { h: "O terreno" },
        "Ao sul de Ravena, junto ao rio Ronco. Os espanhóis se entrincheiraram num campo em semicírculo, com o rio de um lado e um fosso e um talude nos outros. Na frente, cerca de 30 carroças com lâminas, lanças e pequenos canhões, projetadas por Navarro. O espaço, segundo os historiadores, era apertado e mal protegido contra artilharia.",
        { h: "A batalha" },
        { formation: true },
        "Os franceses pararam a uns 200 passos do campo. Começou um canhoneio que durou mais de duas horas, descrito por um historiador moderno como o mais violento entre dois exércitos em campo que o mundo já vira. Os espanhóis causaram muitas baixas na infantaria francesa.",
        "Alfonso d'Este então tirou uns 24 canhões da frente e os levou para o flanco, de onde atiravam contra a cavalaria. A infantaria espanhola se deitou no chão para se proteger, e a cavalaria ficou exposta. D'Alègre ainda mandou dois canhões pesados atravessar o Ronco, para bater a cavalaria de Colonna por trás.",
        "Sob esse fogo, a cavalaria espanhola não aguentou ficar parada. Fabrizio Colonna atacou, contra a ordem de Navarro. Carvajal, Pescara e outros avançaram. A cavalaria francesa resistiu. Quando d'Alègre chegou com [[gendarmes]] frescos, a cavalaria espanhola quebrou. Pescara foi preso, e Cardona fugiu para o sul.",
        "Enquanto isso, os lansquenetes assaltaram o campo e foram castigados pelos [[rodeleiros]] espanhóis no corpo a corpo. Empser morreu. Os gascões e picardos pressionaram os italianos, e a cavalaria francesa passou a atacar a infantaria por vários lados. Navarro foi preso, e Colonna se rendeu a Alfonso d'Este, com a condição de não ser entregue aos franceses.",
        "A maior parte da infantaria espanhola recuou em boa ordem, com um batalhão intacto. Gaston, que perseguia a retirada com cerca de quinze homens, foi cercado e morto. Segundo os cronistas, o corpo tinha mais de cem ferimentos. Seu primo Odet de Foix ficou gravemente ferido.",
        { note: "As baixas são incertas e muito grandes: as estimativas somam de 15.000 a 20.000 mortos nos dois lados, com cerca de 7.000 do lado espanhol e papal e de 3.000 a 4.500 do lado francês, segundo uma das fontes." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Foi uma vitória francesa, e a morte de Gaston a esvaziou. Guicciardini escreveu que o valor e a ferocidade do exército se perderam em grande parte sem ele. La Palice assumiu o comando, não perseguiu os derrotados e voltou ao cerco de Ravena. A cidade se rendeu e foi saqueada por três dias. As estimativas de mortos entre a população variam de cerca de 2.000 a 17.000.",
        "Os franceses não tiveram tempo de colher o que ganharam. Em junho, os suíços, contratados pelo papa e conduzidos pelo cardeal Schiner, entraram na Lombardia, e em agosto os franceses tinham deixado a Itália. Os Sforza voltaram a Milão. A França só voltaria a vencer em Marignano, em 1515.",
        { h: "Por que importa" },
        "Ravena foi uma das batalhas mais sangrentas das Guerras Italianas e mostrou o poder da artilharia contra um campo entrincheirado. Mostrou também que um comandante brilhante podia ganhar uma batalha e perder a campanha.",
        { h: "Curiosidades e controvérsias" },
        { note: "O Monstro de Ravena: um mês antes, um nascimento monstruoso, com chifre, asas e um olho no joelho, foi registrado pelo florentino Luca Landucci e lido como presságio. Mais tarde, o cirurgião Ambroise Paré o viu como sinal da ira de Deus contra o exército de Luís XII." },
        { note: "O túmulo: o corpo de Gaston foi levado a Milão e enterrado na catedral. Um monumento de Bambaja foi começado, mas nunca terminado. Em 1557, uma coluna foi erguida perto do campo de batalha, a Coluna dos Franceses." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  legnano: {
    terrain: [
      { t: "note", x: 86, y: 5, l: "Como (norte)" },
      { t: "note", x: 12, y: 66, l: "Milão (sul)" },
      { t: "note", x: 8, y: 20, l: "← rumo ao Ticino" }
    ],
    units: [
      { id: "lInf", s: "a", k: "inf", w: 24, h: 6, l: "Infantaria milanesa" },
      { id: "lCar", s: "a", k: "camp", w: 9, h: 5, l: "Carroccio" },
      { id: "lCav", s: "a", k: "cav", w: 14, h: 5, l: "Cavalaria da Liga" },
      { id: "iVan", s: "b", k: "cav", w: 7, h: 3.5, l: "Vanguarda imperial" },
      { id: "iMain", s: "b", k: "cav", w: 22, h: 5, l: "Cavalaria alemã (Frederico)" }
    ],
    steps: [
      { t: "Frederico vem do norte a caminho de Pavia, só com cavalaria: deixou a infantaria para trás para ir mais rápido. A Liga sai de Milão com a infantaria e o carroccio, e põe a cavalaria na frente.",
        p: { iMain: [70, 9], iVan: [62, 16], lCav: [44, 46], lInf: [30, 54], lCar: [30, 61] } },
      { t: "Perto de Borsano, uns 700 cavaleiros da Liga encontram uns 300 imperiais, a vanguarda.",
        p: { iVan: [56, 28], lCav: [48, 36] } },
      { t: "A vanguarda recua e puxa a Liga para perto do grosso. Então toda a cavalaria alemã ataca e expulsa a cavalaria da Liga do campo.",
        p: { iVan: [46, 32], iMain: [54, 30], lCav: [14, 56] } },
      { t: "Os alemães perseguem até o carroccio, plantado numa elevação. A infantaria milanesa forma um semicírculo de escudos e lanças compridas.",
        p: { iMain: [32, 42], iVan: [24, 44] } },
      { t: "Carga após carga, os cavaleiros não quebram o núcleo da infantaria. É uma luta de resistência, que dura horas.",
        p: { iMain: [34, 44], iVan: [22, 45], lInf: [30, 52] } },
      { t: "A cavalaria da Liga se reorganiza e volta, atacando os imperiais pelos lados e por trás.",
        p: { lCav: [52, 38, -30], iMain: [34, 43] } },
      { t: "O porta-estandarte imperial é morto e o estandarte se perde. Frederico cai do cavalo e some de vista. Corre a notícia de que o imperador morreu.",
        p: { lCav: [44, 38], iMain: [32, 42], iVan: [22, 44] } },
      { t: "A cavalaria imperial foge para oeste, rumo ao Ticino. Muitos são mortos, presos ou se afogam. Frederico escapa e reaparece em Pavia dias depois.",
        p: { iMain: [18, 22], iVan: [12, 28], lCav: [34, 34] }, x: ["iMain", "iVan"] }
    ]
  },

  montaperti: {
    terrain: [
      { t: "hill", x: 50, y: 12, rx: 44, ry: 10, l: "Colina de Montaperti (acampamento guelfo)" },
      { t: "sea", x: 0, y: 44, w: 100, h: 3, l: "Rio Arbia" },
      { t: "note", x: 84, y: 67, l: "O sol bate nos olhos dos florentinos" }
    ],
    units: [
      { id: "sArr", s: "a", k: "cav", w: 8, h: 4, l: "Conde de Arras (emboscada)" },
      { id: "sGio", s: "a", k: "cav", w: 16, h: 5, l: "Alemães de Giordano" },
      { id: "sAld", s: "a", k: "inf", w: 22, h: 5, l: "Infantaria sienesa" },
      { id: "sBig", s: "a", k: "camp", w: 10, h: 5, l: "Carroccio de Siena (Bigozzi)" },
      { id: "fInf", s: "b", k: "inf", w: 34, h: 6, l: "Infantaria guelfa" },
      { id: "fCav", s: "b", k: "cav", w: 16, h: 5, l: "Cavalaria guelfa" },
      { id: "fCar", s: "b", k: "camp", w: 9, h: 5, l: "Carroccio de Florença" },
      { id: "fCamp", s: "b", k: "camp", w: 14, h: 5, l: "Acampamento guelfo" }
    ],
    steps: [
      { t: "Os guelfos esperam em terreno alto. Os sieneses atravessam o Arbia em quatro corpos e esperam o sol subir. O corpo do conde de Arras fica escondido num flanco.",
        p: { fInf: [50, 22], fCav: [22, 24], fCar: [50, 12], fCamp: [82, 10], sArr: [92, 52], sGio: [28, 56], sAld: [60, 56], sBig: [50, 64] } },
      { t: "Por volta das dez, os cavaleiros alemães de Giordano atacam morro acima, e a infantaria sienesa sobe junto. A ala direita guelfa é empurrada.",
        p: { sGio: [26, 36], sAld: [58, 36], fCav: [20, 24] } },
      { t: "Até cerca das três da tarde, segundo as crônicas, os florentinos, em terreno alto e mais numerosos, ganham terreno.",
        p: { fInf: [50, 28], sAld: [58, 40], sGio: [28, 40] } },
      { t: "Niccolò da Bigozzi, que devia guardar o carroccio, entra na luta e firma a linha sienesa.",
        p: { sBig: [50, 48] } },
      { t: "Bocca degli Abati, supostamente guelfo, corta a mão do porta-estandarte florentino. A confusão cresce, e uma tentativa de tomar o carroccio de Florença falha.",
        p: { fCar: [50, 14], sBig: [52, 42] } },
      { t: "No fim da tarde, os alemães do conde de Arras saem da emboscada gritando 'São Jorge' e atacam pela retaguarda. O comandante florentino morre.",
        p: { sArr: [68, 12], fInf: [50, 30] } },
      { t: "O exército guelfo se desfaz. A cavalaria é quase toda destruída, o acampamento é saqueado e o carroccio é tomado.",
        p: { sArr: [50, 14], sGio: [30, 30], sAld: [60, 32], sBig: [50, 18] }, x: ["fInf", "fCav", "fCar", "fCamp"] },
      { t: "A perseguição dura até a noite. Dante escreveu que o Arbia ficou colorido de vermelho.",
        p: { sGio: [24, 20], sAld: [64, 22], sArr: [48, 10] } }
    ]
  },

  campaldino: {
    terrain: [
      { t: "note", x: 84, y: 5, l: "Rumo a Poppi ↑" },
      { t: "note", x: 14, y: 67, l: "Rumo a Pratovecchio" }
    ],
    units: [
      { id: "gFed", s: "a", k: "cav", w: 16, h: 3.5, l: "Feditori (cavalaria da frente)" },
      { id: "gCav", s: "a", k: "cav", w: 22, h: 5, l: "Cavalaria florentina" },
      { id: "gInfL", s: "a", k: "inf", w: 10, h: 12, l: "Infantaria e bestas" },
      { id: "gInfR", s: "a", k: "inf", w: 10, h: 12, l: "Infantaria e bestas" },
      { id: "gWag", s: "a", k: "camp", w: 20, h: 4, l: "Carroças e bagagem" },
      { id: "gRes", s: "a", k: "cav", w: 14, h: 5, l: "Reserva (Corso Donati)" },
      { id: "aC1", s: "b", k: "cav", w: 22, h: 4, l: "Aretinos, 1ª linha" },
      { id: "aC2", s: "b", k: "cav", w: 22, h: 4, l: "2ª linha" },
      { id: "aInf", s: "b", k: "inf", w: 26, h: 4, l: "3ª linha: infantaria" },
      { id: "aRes", s: "b", k: "cav", w: 14, h: 4, l: "Reserva (Guido Novello)" }
    ],
    steps: [
      { t: "Florença forma um crescente: cavalaria de choque na frente, a principal no centro, infantaria nas pontas, carroças atrás e uma reserva. Arezzo forma quatro linhas: cavalaria, cavalaria, infantaria, cavalaria.",
        p: { gFed: [50, 36], gCav: [50, 42], gInfL: [28, 40], gInfR: [72, 40], gWag: [50, 54], gRes: [50, 63], aC1: [50, 22], aC2: [50, 16], aInf: [50, 10], aRes: [50, 4] } },
      { t: "Os aretinos atacam primeiro, com as três primeiras linhas.",
        p: { aC1: [50, 32], aC2: [50, 26], aInf: [50, 20], aRes: [66, 8] } },
      { t: "A carga dispersa a cavalaria da frente e empurra a cavalaria principal de volta para as carroças.",
        p: { gFed: [50, 40], gCav: [50, 48], aC1: [50, 38], aC2: [50, 33], aInf: [50, 28] }, x: ["gFed"] },
      { t: "As infantarias das pontas fecham sobre os atacantes e atiram neles pelos dois lados, com bestas.",
        p: { gInfL: [38, 38], gInfR: [62, 38] } },
      { t: "Corso Donati, que devia ficar na reserva, desobedece e ataca o flanco aretino. Segundo Villani, disse que, se perdessem, morreria com seus concidadãos.",
        p: { gRes: [70, 34, -50] } },
      { t: "A cavalaria aretina fica cercada e separada da infantaria. Guido Novello vê a batalha perdida e leva sua reserva de volta para Poppi.",
        p: { aRes: [86, 4], aC1: [48, 40], aC2: [48, 35], gInfL: [40, 36], gInfR: [60, 36] }, x: ["aC1", "aC2"] },
      { t: "A infantaria aretina, sozinha, é envolvida pelas pontas e destruída.",
        p: { aInf: [50, 30], gInfL: [42, 32], gInfR: [58, 32], gCav: [50, 38] }, x: ["aInf"] },
      { t: "O bispo Guglielmino e Buonconte da Montefeltro morrem. Uma tempestade põe fim à perseguição.",
        p: { gCav: [50, 30], gRes: [60, 24, -50] } }
    ]
  },

  ravenna: {
    terrain: [
      { t: "sea", x: 90, y: 0, w: 4, h: 70, l: "Rio Ronco" },
      { t: "note", x: 12, y: 5, l: "Ravena (cercada)" }
    ],
    units: [
      { id: "fVan", s: "a", k: "cav", w: 20, h: 5, l: "Gendarmes (La Palice)" },
      { id: "fInf", s: "a", k: "inf", w: 20, h: 5, l: "Lansquenetes (Empser)" },
      { id: "fGas", s: "a", k: "inf", w: 16, h: 5, l: "Gascões e picardos" },
      { id: "fArt", s: "a", k: "art", w: 14, h: 4, l: "Artilharia de Ferrara (d'Este)" },
      { id: "fRear", s: "a", k: "cav", w: 14, h: 5, l: "Reserva (d'Alègre)" },
      { id: "fFox", s: "a", k: "cav", w: 6, h: 3.5, l: "Gaston de Foix" },
      { id: "sCamp", s: "b", k: "camp", w: 36, h: 5, l: "Campo entrincheirado (fosso, talude e carroças)" },
      { id: "sInf", s: "b", k: "inf", w: 26, h: 5, l: "Infantaria espanhola (Navarro)" },
      { id: "sCol", s: "b", k: "cav", w: 14, h: 5, l: "Cavalaria de Colonna" },
      { id: "sPes", s: "b", k: "cav", w: 12, h: 5, l: "Cavalaria ligeira (Pescara)" }
    ],
    steps: [
      { t: "Os espanhóis se entrincheiram junto ao rio Ronco, com Colonna perto da água e Pescara no outro flanco. Os franceses chegam em linha, com a artilharia de Ferrara na frente.",
        p: { sCamp: [42, 12], sInf: [42, 19], sCol: [76, 20], sPes: [16, 26], fVan: [46, 52], fInf: [30, 44], fGas: [62, 44], fArt: [46, 38], fRear: [68, 62], fFox: [46, 64] } },
      { t: "As duas artilharias trocam fogo a uns 200 passos, por mais de duas horas. Os tiros espanhóis fazem muitos estragos na infantaria francesa.",
        p: { fArt: [46, 33], fInf: [30, 39], fGas: [62, 39] } },
      { t: "D'Este leva uns 24 canhões para o flanco e passa a bater a cavalaria espanhola. A infantaria, deitada, se protege, mas a cavalaria fica exposta.",
        p: { fArt: [72, 34, -50] } },
      { t: "Dois canhões pesados de d'Alègre cruzam o Ronco e batem a cavalaria de Colonna por trás. Cardona não responde.",
        p: { fRear: [96, 34] } },
      { t: "Sob esse fogo, a cavalaria espanhola ataca (Colonna, contra a ordem de Navarro). Os gendarmes aguentam.",
        p: { sCol: [68, 34], sPes: [30, 36], fVan: [48, 44] } },
      { t: "Chega a cavalaria descansada de d'Alègre, e a cavalaria espanhola quebra. Pescara é preso, e Cardona foge para o sul.",
        p: { fRear: [72, 30], sPes: [20, 30] }, x: ["sPes"] },
      { t: "Os lansquenetes assaltam o campo e sofrem no corpo a corpo com os rodeleiros espanhóis. Empser morre. Os gascões e picardos atacam os italianos, e a cavalaria francesa ataca a infantaria por vários lados.",
        p: { fInf: [38, 22], fGas: [58, 24], fVan: [46, 28] } },
      { t: "Navarro é preso, e Colonna se rende a Alfonso d'Este. A maior parte da infantaria espanhola recua em ordem.",
        p: { sInf: [16, 8], sCamp: [42, 10] }, x: ["sCol", "sCamp"] },
      { t: "Gaston de Foix ataca com poucos homens uma coluna espanhola em retirada e é morto.",
        p: { fFox: [20, 10] }, x: ["fFox"] }
    ]
  }
});
