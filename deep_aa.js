// batch aa: Paraguayan War (riachuelo, tuiuti, curupaiti, humaita, avai) and Magdala
Object.assign(GLOSSARY, {
  "canhoneira": "Navio pequeno e de calado raso, com poucos canhões, feito para operar em rios e perto da costa.",
  "chata": "Barcaça de fundo chato, sem motor, rebocada por vapores. Na Guerra do Paraguai, algumas levavam um único canhão pesado e serviam de bateria flutuante.",
  "abalroar": "Bater com a proa de um navio no casco de outro para o danificar ou afundar. O mesmo que usar o navio como aríete.",
  "paiol": "Compartimento onde se guarda a pólvora. Se o paiol de um navio explode, o navio inteiro vai pelos ares.",
  "artilharia revólver": "Apelido dado aos canhões do tenente-coronel Mallet em Tuiuti, porque atiravam tão depressa e em tantas direções que pareciam um revólver gigante.",
  "foguete de congreve": "Foguete de guerra inventado pelo inglês William Congreve no começo do século XIX. Tinha alcance de cerca de 2 km, voava de modo irregular e valia mais pelo susto do que pela pontaria.",
  "estero": "Palavra espanhola para terreno baixo e alagadiço, com água parada e capim, comum no Paraguai e no norte da Argentina. No Brasil do Sul, banhado.",
  "chaco": "Vasta planície quente e alagadiça na margem direita do rio Paraguai, do lado oposto de Humaitá e de Assunção. Quase sem estradas, tinha fama de intransitável.",
  "cólera": "Doença que se pega bebendo água contaminada e que mata por desidratação. Nos acampamentos lotados da Guerra do Paraguai, matou mais gente do que muitas batalhas.",
  "refém": "Pessoa mantida presa para forçar o outro lado a ceder ou a negociar.",
  "morteiro": "Canhão curto e de cano largo, que atira para o alto e faz a bala cair de cima, de um jeito que passa por cima de muros.",
  "tabot": "Réplica sagrada da Arca da Aliança, guardada em cada igreja ortodoxa etíope. Só os sacerdotes podem vê-la, e por isso os tabots levados pelos britânicos são um dos pontos mais sensíveis do pedido de devolução."
});

Object.assign(DEEP, {
  riachuelo: {
    war: "Guerra do Paraguai (1864–1870)",
    hook: "Numa manhã de domingo, a Marinha do Brasil virou uma batalha mal começada em vitória, usando o próprio navio como arma.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O Paraguai de Francisco Solano López não tem saída para o mar. Tudo o que ele vende e compra passa pelos rios Paraguai e Paraná, e foi nesses rios que a guerra começou. Em novembro de 1864, López mandou capturar um vapor brasileiro, o Marquês de Olinda, e em dezembro invadiu o Mato Grosso. Em abril de 1865, depois de a Argentina negar licença para atravessar a província de Corrientes, ocupou a própria cidade de Corrientes.",
        "A resposta foi a [[tríplice aliança]]: em 1º de maio de 1865, Brasil, Argentina e Uruguai assinaram um tratado contra López. O Brasil tinha uma arma que o Paraguai não podia igualar, a esquadra, e o plano era [[bloquear|bloqueio naval]] os rios para sufocar o país.",
        { h: "O caminho até Riachuelo" },
        { timeline: [
          ["Nov. 1864", "López captura o vapor brasileiro Marquês de Olinda. É o começo da guerra."],
          ["Dez. 1864", "Os paraguaios invadem o Mato Grosso."],
          ["Abr. 1865", "Tropas paraguaias ocupam Corrientes, na Argentina."],
          ["1º maio 1865", "Assinado o tratado da Tríplice Aliança."],
          ["10 jun. 1865", "À noite, a frota paraguaia sai de Humaitá rio abaixo, em direção a Corrientes."],
          ["11 jun. 1865", "A batalha."]
        ]},
        "A esquadra brasileira estava ancorada no Paraná, perto de Corrientes. Para López, ela era a maior ameaça: se os navios dominassem o rio, o exército paraguaio na região ficaria isolado."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Francisco Manoel Barroso, comandante brasileiro" },
        "Chefe de divisão da Marinha Imperial, comandava a esquadra a bordo da fragata Amazonas. O almirante Tamandaré, chefe geral da força naval, o tinha mandado rio acima. Em Riachuelo, quando a linha brasileira se desfez, Barroso fez do próprio Amazonas uma arma: em vez de só atirar, passou a abalroar os navios inimigos.",
        { h: "Pedro Ignacio Meza, comandante paraguaio" },
        "Capitão de marinha, comandava a frota paraguaia a bordo do Tacuarí. A ordem de López era chegar antes do amanhecer, colocar cada vapor ao lado de um navio brasileiro e tomá-lo por abordagem, com soldados de infantaria a bordo. Meza se afastou dessa ordem na hora e preferiu passar atirando. Foi ferido no peito e morreu oito dias depois, no hospital de Humaitá.",
        { h: "López" },
        "Queria capturar os navios brasileiros e trazê-los de volta. A ideia da abordagem de surpresa dependia de chegar de madrugada e com a frota unida, e isso não aconteceu: um dos vapores quebrou no caminho e atrasou todos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O Brasil tinha nove navios a vapor e uns 58 ou 59 canhões, segundo as fontes: a fragata Amazonas, quatro corvetas (Belmonte, Jequitinhonha, Beberibe e Parnaíba) e quatro [[canhoneiras|canhoneira]] (Ipiranga, Araguari, Iguatemi e Mearim). Eram cerca de 2.300 homens, entre marinheiros, fuzileiros e soldados do exército.",
        "Do lado paraguaio, oito vapores armados com 38 ou 39 canhões, mais sete [[chatas|chata]] (as fontes falam em seis ou sete), cada uma com um canhão pesado. Em terra, na barranca do Riachuelo, o tenente-coronel Bruguez mantinha uns 22 canhões, duas baterias de [[foguetes de Congreve|foguete de congreve]] e cerca de 1.200 homens. Um nono vapor, o Yberá, quebrou o motor no caminho e ficou para trás, o que atrasou a frota.",
        { h: "O terreno" },
        "O Paraná ali é largo, mas o canal navegável fica estreito perto da foz do arroio Riachuelo, entre bancos de areia e uma ilha. Quem passava por ele ficava a poucas dezenas de metros das barrancas, de onde os canhões paraguaios batiam de cima para baixo.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, o atraso estragou o plano. A frota paraguaia devia chegar antes do amanhecer, com os brasileiros dormindo. Só chegou depois das 9 da manhã, num domingo de Santíssima Trindade em que os navios se preparavam para a missa. Meza, em vez de abordar, preferiu passar atirando.",
        "Segundo, às 9h25 os paraguaios abriram fogo. Os brasileiros levantaram âncora e responderam. Algumas chatas foram atingidas, e um vapor paraguaio, o Jejuy, ficou muito avariado. Depois os paraguaios seguiram rio abaixo, passaram pelos brasileiros, viraram e fundearam as chatas atravessadas no canal, perto das baterias da margem, para fechar a passagem.",
        "Terceiro, a linha brasileira se desfez. As fontes divergem nos detalhes dessas manobras. Barroso desceu o rio para atacar, e a Belmonte, na frente, tomou fogo de tudo o que havia e encalhou numa ilha. A Jequitinhonha também encalhou. A Parnaíba, que saiu da formação para socorrê-la, bateu num banco e perdeu o leme.",
        "Quarto, o momento mais perigoso. Três vapores paraguaios abordaram a Parnaíba, e a bandeira brasileira chegou a ser baixada. Houve cerca de uma hora de luta corpo a corpo no convés, em que morreram o guarda-marinha Greenhalgh, o marinheiro Marcílio Dias e outros. Segundo os relatos, o comandante mandou preparar a explosão do [[paiol]] em vez de entregar o navio. As canhoneiras Araguari e Beberibe chegaram em socorro, e os paraguaios recuaram.",
        "Quinto, a virada. Barroso fez o Amazonas dar meia-volta e [[abalroou|abalroar]] um navio inimigo atrás do outro, cada um com a proa de ferro. As fontes divergem sobre a ordem e sobre quais afundaram: entre os atingidos estão o Paraguarí, o Salto Oriental, o Jejuy e o Marquês de Olinda, aquele vapor que López tinha capturado em 1864. Uma chata também foi a pique. A Parnaíba voltou a hastear a bandeira.",
        "Sexto, o fim. Os vapores paraguaios que ainda flutuavam fugiram rio acima, perseguidos pela Beberibe e pela Araguari até o fim da tarde. A batalha acabou por volta das 17h30."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O Paraguai perdeu quatro vapores e entre quatro e sete chatas. As baixas paraguaias ficam entre 750 e mais de 900, conforme a fonte (uma delas fala em 351 mortos e 567 feridos). As brasileiras foram de 104 mortos, 123 a 142 feridos e 20 desaparecidos. O Brasil perdeu um navio, a Jequitinhonha, incendiada para não cair em mãos paraguaias.",
        { h: "Por que importa" },
        "A frota paraguaia nunca mais foi uma força ofensiva no Paraná. O Paraguai ainda dominava o seu próprio rio, mas perdeu a chance de expulsar a esquadra, e os aliados passaram a controlar a bacia do Prata até a fronteira paraguaia, com abastecimento por água. Foi o começo da virada da guerra, que ainda duraria mais de quatro anos.",
        "Barroso virou barão do Amazonas, e o 11 de junho é a Data Magna da Marinha do Brasil.",
        { h: "Curiosidades e controvérsias" },
        { note: "O sinal: a frase 'O Brasil espera que cada um cumpra o seu dever', que lembra a de Nelson em Trafalgar, é atribuída a Barroso. Há quem diga que o sinal realmente içado foi outro: 'Sustentar o fogo que a vitória é nossa'. As duas versões circulam nas fontes brasileiras." },
        { note: "Os números: as fontes divergem sobre quantos navios e chatas o Paraguai levou e sobre quantas chatas afundaram. Uma delas conta oito vapores, outra nove. Os números de gente também mudam muito de uma fonte para outra." },
        { note: "A morte de Meza: segundo uma das fontes, quando López soube que Meza morrera, disse que, se ele não tivesse morrido de um tiro, teria de morrer de quatro, e proibiu os oficiais de comparecer ao enterro." },
        { note: "O Marquês de Olinda e o Paraguarí: o primeiro tinha sido capturado dos brasileiros em 1864 e lutou pelo Paraguai. Do Pirabebé, outro vapor paraguaio, restam peças restauradas, e a caldeira e a roda de pás do Yporá também estão expostas hoje." }
      ]}
    ]
  },

  tuiuti: {
    war: "Guerra do Paraguai (1864–1870)",
    hook: "A maior batalha campal da América do Sul foi decidida por canhões escondidos num fosso.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Riachuelo, o Paraguai perdeu a iniciativa no rio e acabou se retirando de Corrientes. Em setembro de 1865, o exército paraguaio que tinha invadido o Rio Grande do Sul se rendeu em Uruguaiana. Os aliados estavam prontos para entrar no Paraguai, e López sabia que quem o atacasse tinha de passar por pântanos, matas e riachos, terreno que ele conhecia e eles não.",
        { h: "O caminho até Tuiuti" },
        { timeline: [
          ["Set. 1865", "Os paraguaios que invadiram o Rio Grande do Sul se rendem em Uruguaiana."],
          ["Abr. 1866", "O exército aliado cruza o rio Paraná e entra no território paraguaio."],
          ["Início de maio 1866", "Os paraguaios atacam no Estero Bellaco e são rechaçados."],
          ["20 maio 1866", "Os aliados avançam e acampam em Tuiuti."],
          ["24 maio 1866", "López ataca o acampamento aliado."]
        ]},
        "O acampamento aliado ocupava uma faixa de chão seco de uns 4 por 2,4 km, apertada para 32.000 homens. Era cercado de [[esteros|estero]] e banhados. Os aliados não tinham mapas bons e não sabiam que os paraguaios tinham uma linha de trincheiras, em Sauce, bem perto.",
        "López soube que os aliados pretendiam atacar no dia 25. Resolveu atacar primeiro, no dia 24."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Solano López" },
        "Planejou uma ratoeira: atacar o acampamento ao mesmo tempo pelos lados e por trás, empurrando os aliados de volta para o rio Paraná. O plano era ousado para a época, porque a cavalaria vinha na frente. Mas tinha defeitos: sem comando único, as colunas agiram por conta própria, e uma delas atrasou o ataque em cerca de cinco horas.",
        { h: "Osório e Mitre" },
        "O general argentino Bartolomé Mitre era o comandante-em-chefe dos aliados. Na hora do choque, quem decidiu o lado brasileiro foi o general Manuel Luís Osório, que comandava os brasileiros: ele juntou os soldados que fugiam, mandou as reservas para onde a linha cedia e sacrificou alguns batalhões para impedir que o inimigo dobrasse o acampamento. O general uruguaio Venancio Flores comandava os uruguaios, no centro.",
        { h: "Mallet e Sampaio" },
        "O tenente-coronel Emílio Luís Mallet, nascido na França, comandava a artilharia brasileira. Na noite anterior, mandou cavar um fosso fundo, escondido, em frente aos seus canhões. O general Antônio de Sampaio, à frente de uma divisão de infantaria, segurou o flanco debaixo de fogo e foi ferido por um estilhaço de granada. Morreu de gangrena em 6 de julho, a bordo de um navio-hospital.",
        { h: "Os comandantes paraguaios" },
        "Quatro colunas: José Eduvigis Díaz, no centro; Vicente Barrios, contra a esquerda aliada, a dos brasileiros; Francisco Isidoro Resquín, com a cavalaria, contra a direita, a dos argentinos; e Hilario Marcó, na reserva."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os aliados tinham de 32.000 a 35.000 homens, conforme a fonte: cerca de 21.000 a 22.000 brasileiros, 9.700 a 11.800 argentinos e uns 1.200 a 1.300 uruguaios. A cavalaria aliada não passava de 1.700 homens. Os paraguaios tinham entre 24.000 e 26.000, com muita cavalaria, uns 8.500, mas as somas das quatro colunas não fecham com o total, e uma reserva de cerca de 6.000 homens não chegou ao combate.",
        { note: "Nenhum número desta batalha é certo. Os historiadores se apoiam em relatos que divergem, e as listas de colunas paraguaias somam mais do que o total dado para o exército." },
        { h: "O terreno" },
        "Uma planície arenosa e pantanosa, de capim e mato baixo, difícil de atravessar em ordem. O mato e a névoa escondiam a aproximação dos paraguaios.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, a neblina. Os paraguaios se aproximaram escondidos pelo mato e pela névoa. Por volta do meio-dia, um [[foguete de congreve]] subiu e deu o sinal do ataque.",
        "Segundo, o centro cedeu. A coluna de Díaz caiu sobre os uruguaios de Flores e sobre batalhões brasileiros de voluntários, e alguns soldados fugiram.",
        "Terceiro, o fosso de Mallet. A cavalaria paraguaia, que vinha em massa, parou diante do fosso, ao alcance dos canhões, que atiravam [[metralha]] em fogo rápido e cruzado. Foi essa cadência que deu à artilharia o apelido de [[artilharia revólver]]. Uma fonte conta 28 canhões, outras falam em uns 30.",
        "Quarto, a esquerda aliada. Barrios empurrou os brasileiros quase até o acampamento. Osório jogou as reservas e a 3ª Divisão de Sampaio segurou o flanco. A cavalaria do general João Manuel Mena Barreto foi mandada para a esquerda, cercou os atacantes e os destruiu.",
        "Quinto, a direita. Resquín derrotou a cavalaria argentina dos generais Cáceres e Hornos, mas não chegou a decidir a batalha. Era uma sucessão de cargas e contracargas, e a força de fogo dos aliados prevaleceu.",
        "Sexto, a retirada. Por volta das 16h ou 16h30, os paraguaios se retiraram. Os aliados não os perseguiram: tinham poucos cavalos, pouco transporte e poucos suprimentos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas aliadas ficaram entre 3.900 e 4.300, com cerca de 1.000 mortos, a maior parte brasileiros. As do Paraguai são muito mais incertas: cerca de 13.000 entre mortos e feridos, segundo as fontes mais citadas, com uns 6.000 mortos. As estimativas de mortos vão de 'mais de 3.000', numa ordem de Osório, a uns 7.000.",
        { h: "Por que importa" },
        "Foi o último grande ataque paraguaio em campo aberto. A partir daí López passou a defender, entrincheirado, a linha de fortalezas de Curuzú, Curupaiti e Humaitá. Os aliados ficaram acampados até setembro, e a [[cólera]] e outras doenças mataram cerca de 10.000 deles.",
        "Hoje o Brasil chama Tuiuti de 'Batalha dos Patronos': Osório é o patrono da cavalaria, Sampaio, da infantaria, e Mallet, da artilharia, todos no mesmo campo de batalha.",
        { h: "Curiosidades e controvérsias" },
        { note: "A 'maior batalha' da América do Sul: é uma afirmação muito repetida, com mais de 50.000 homens envolvidos. Como as fontes divergem sobre os números, é um título que se repete, mais do que se mede." },
        { note: "A ordem de não perseguir: oficiais como Antônio de Sena Madureira e Bernardino Bormann criticaram forte o fato de os aliados não terem perseguido os paraguaios. Os comandantes responderam que faltavam cavalos, transporte e suprimentos." },
        { note: "O Dia do Exército: durante cerca de quatro décadas, o 24 de maio foi a grande data de comemoração do Exército Brasileiro." }
      ]}
    ]
  },

  curupaiti: {
    war: "Guerra do Paraguai (1864–1870)",
    hook: "Vinte mil homens avançaram ao som de bandas contra um fosso que ninguém tinha visto.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Tuiuti, os aliados ficaram meses parados no acampamento, comidos pela doença e pela lama. O caminho para Assunção passava por Humaitá, a grande fortaleza paraguaia, e Humaitá só podia ser alcançada passando por uma sequência de posições na margem do rio. A última dessas posições antes da fortaleza era Curupaiti.",
        { h: "O caminho até Curupaiti" },
        { timeline: [
          ["24 maio 1866", "Tuiuti: López perde o último grande ataque em campo aberto e passa a defender."],
          ["Início de set. 1866", "Os aliados tomam o forte de Curuzú, na margem do rio."],
          ["8 set. 1866", "Mitre e López se encontram em Yataytí-Corá. Não há acordo, e alguns pensam que López só queria ganhar tempo para fortificar Curupaiti."],
          ["22 set. 1866", "A batalha de Curupaiti."]
        ]},
        "Curupaiti ficava a uns 5,5 km ao sul de Humaitá. Seu lado direito se apoiava no rio Paraguai, e do outro lado havia mato denso e chão alagado. Não era possível desembarcar por ali, e por terra o terreno era charco."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "José Eduvigis Díaz, comandante paraguaio" },
        "Comandava a posição com cerca de 5.000 homens. Tinha fortificado Curupaiti com duas linhas de [[trincheiras|trincheira]] e canhões bem escondidos. Seu forte ficava a uns 5,5 km de Humaitá e era a última defesa antes dela.",
        { h: "Bartolomé Mitre, presidente da Argentina e comandante dos aliados" },
        "Comandava o exército aliado em Curupaiti. Depois do bombardeio naval, acreditou que as posições paraguaias estavam destruídas e mandou avançar. Foi o erro central do dia: a ordem partiu do que ele presumia, não do que tinha visto.",
        { h: "Almirante Tamandaré" },
        "Comandava a esquadra brasileira, que devia bombardear o forte antes do ataque. A frota atirou durante horas, mas o forte estava alto, sobre uma barranca, e as balas passaram por cima."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado aliado, cerca de 20.000 homens (11.000 brasileiros e 9.000 argentinos, segundo uma fonte), apoiados por oito encouraçados e três canhoneiras. Do paraguaio, uns 5.000 homens e entre 49 e 90 canhões, conforme a fonte: uma delas fala em 49, outra, em 32 a 35 canhões contra o rio e 58 contra a terra.",
        { h: "A fortificação" },
        "Duas linhas de trincheiras protegiam a artilharia. A de fora era estreita, e a de dentro, mais funda e mais larga. Do lado de fora havia uma barreira de árvores com as pontas afiadas, o [[abatis]]. O forte ficava num ponto alto, acima do rio, e isso tirava a pontaria dos navios.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, a esquadra. Por volta das sete da manhã os navios começaram a bombardear e continuaram por umas cinco horas. Foram cerca de 5.000 tiros e destruíram um canhão. Os navios tinham de ficar longe do alcance dos canhões de Humaitá, e isso piorava a pontaria.",
        "Segundo, o engano. O fim do bombardeio foi lido pelos comandantes aliados como sinal de que as defesas tinham sido destruídas. Era mentira: os canhões paraguaios, em grande parte escondidos, estavam intactos.",
        "Terceiro, o avanço. Por volta do meio-dia, as colunas, argentinas e brasileiras, avançaram em ordem de parada, ao som de bandas e clarinetes, com os oficiais de uniforme de gala. O terreno era alagado, lamacento e coberto de mato.",
        "Quarto, a primeira trincheira. Sob fogo de metralha, as tropas aliadas atravessaram a primeira trincheira, que era estreita. Os brasileiros se surpreenderam com a segunda, mais funda e larga, e ficaram presos entre as duas, na lama, debaixo de tiro.",
        "Quinto, o segundo erro. Mitre achou que os brasileiros já tinham passado a linha principal e mandou uma segunda onda de argentinos. Foi um massacre. Cerca de 40 a 60 homens chegaram a tocar o parapeito, e foram mortos. Há divergência sobre se alguns entraram no forte e tomaram canhões.",
        "Sexto, a retirada. O ataque foi abandonado por volta das 14h, e ao anoitecer as colunas voltavam a Curuzú em desordem. Mitre só formalizou a ordem de retirada depois que ela já estava acontecendo."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A diferença nas perdas é enorme. Os aliados perderam, segundo a fonte mais citada, 4.227 homens (2.225 argentinos e 2.002 brasileiros), cerca de um quinto da força. Outra lista dá 3.368 (998 mortos e 2.370 feridos). Há estimativas muito maiores. Os paraguaios perderam entre 92 e cerca de 250, conforme a fonte.",
        { h: "Por que importa" },
        "Foi a maior derrota aliada da guerra. As operações ficaram paradas por cerca de dez meses, até julho de 1867. Em 10 de outubro de 1866, o marquês de Caxias foi nomeado comandante das forças brasileiras. A derrota abriu brigas dentro da aliança: o general brasileiro Porto Alegre culpou Mitre, a Argentina pensou em negociar uma trégua, e d. Pedro II recusou qualquer paz com López fora do tratado.",
        "Para o Paraguai, a vitória deu moral e virou símbolo de união nacional. López, porém, não contra-atacou. Curupaiti só caiu em março de 1868.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números do Paraguai: as fontes dão 49 ou 90 canhões e perdas de 92 ou de cerca de 250 homens. Sobre o lado aliado, as contagens vão de uns 3.400 a mais de 4.000, e há estimativas bem maiores." },
        { note: "Os desertores: depois da batalha, López decretou que as famílias dos desertores seriam executadas, o que, segundo uma fonte, reduziu as deserções." },
        { note: "O Yataytí-Corá: a conferência de 8 de setembro, em que López e Mitre se encontraram, pode ter sido uma manobra de López para ganhar tempo e acabar as fortificações. Os historiadores discutem." }
      ]}
    ]
  },

  humaita: {
    war: "Guerra do Paraguai (1864–1870)",
    hook: "De madrugada, seis navios de ferro passaram por uma das maiores fortalezas da América do Sul e a guerra mudou de rumo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Humaitá era a chave do Paraguai. A fortaleza ficava numa curva fechada do rio Paraguai, em forma de ferradura, com umas 2.500 jardas (cerca de 2,3 km) de rio entre as margens. Os canhões, em cima de uma barranca, cobriam toda a curva. Ficou conhecida como a 'Sebastopol da América', numa comparação com a fortaleza russa da Guerra da Crimeia.",
        "A fortaleza tinha, do lado de terra, uns 13 km de trincheiras e terrenos alagados. Era guarnecida por um número enorme de canhões: as fontes falam em mais de uma centena a cerca de 400. Uma corrente de ferro, apoiada em pontões, podia fechar o rio.",
        { h: "O caminho até a passagem" },
        { timeline: [
          ["22 set. 1866", "A derrota de Curupaiti trava os aliados."],
          ["10 out. 1866", "O marquês de Caxias é nomeado comandante das forças brasileiras."],
          ["1867", "Os encouraçados passam por Curupaiti e ficam parados diante de Humaitá. O almirante Inácio hesita em avançar."],
          ["Fev. 1868", "Chegam três monitores: Alagoas, Pará e Rio Grande."],
          ["19 fev. 1868", "A passagem de Humaitá."],
          ["Jul. 1868", "A fortaleza é abandonada pelos paraguaios e ocupada pelos aliados."]
        ]},
        "O governo brasileiro pressionava o almirante Inácio, que preferia esperar. Quem assumiu a operação foi seu genro, Delfim Carlos de Carvalho. Caxias, em abril de 1867, tinha dito que um ataque frontal a Humaitá seria loucura e levaria à derrota certa."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Delfim Carlos de Carvalho" },
        "Oficial de marinha, genro do almirante Inácio. Recebeu a missão de forçar a passagem e a cumpriu. Por isso virou Barão da Passagem.",
        { h: "Caxias" },
        "Comandante das forças brasileiras desde outubro de 1866, achava que um ataque de frente a Humaitá seria loucura. Seu plano foi cercar a fortaleza por terra, enquanto a esquadra cortava o rio.",
        { h: "Solano López" },
        "Tinha fortificado Humaitá por anos e a considerava inexpugnável. Depois da passagem, López escapou com boa parte do exército e da artilharia pelo Chaco e montou novas posições na outra margem, deixando em Humaitá só uma força pequena."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Seis navios de ferro: os [[encouraçados|encouraçado]] Barroso, Bahia e Tamandaré, mais fortes, e os [[monitores|monitor]] Rio Grande, Alagoas e Pará. Os três encouraçados rebocavam os monitores, e cada dupla foi amarrada lado a lado.",
        { h: "O terreno" },
        "O rio, que estava excepcionalmente cheio, com 12 a 15 pés de água por cima das correntes. Isso, segundo parte das fontes, foi decisivo. O [[chaco]], na margem oposta a Humaitá, era uma planície alagadiça, e os paraguaios tinham posto lá, em Timbó, uma bateria com canhões de 8 polegadas e de 32 libras.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, os navios se preparam e as tropas de terra fazem uma manobra de distração. O general Argolo ataca o reduto de Cierva. O ataque custa à infantaria brasileira cerca de 1.200 homens, segundo uma fonte, e serve para desviar a atenção.",
        "Segundo, por volta das 4 da manhã, a primeira dupla, Barroso e Rio Grande, entra na curva, com um foguete dando o sinal. Os paraguaios acendem fogueiras e lançam foguetes na margem do Chaco, para confundir os pilotos.",
        "Terceiro, a segunda dupla, Bahia e Alagoas, vem logo atrás. Um tiro corta o cabo que as unia, e o Alagoas tenta sozinho, com o motor danificado. Consegue avançar e passa por volta das 5h30.",
        "Quarto, a terceira dupla, Tamandaré e Pará, passa debaixo do fogo. O Tamandaré é atingido três vezes na proa e começa a fazer água.",
        "Quinto, depois de Humaitá, os navios enfrentam a bateria de Timbó, mais perigosa do que a própria fortaleza, porque ficava perto da superfície da água. Uma tabela registra cerca de 110 impactos de Timbó só no Tamandaré. Canoas paraguaias tentam abordar o Alagoas.",
        "Sexto, os seis passam. O Tamandaré é encalhado de propósito em Tayí, para não afundar. Três navios param para reparos e três seguem rumo a Assunção, que López já mandara esvaziar."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os seis navios passaram. As baixas entre as tripulações foram pequenas (uma fonte fala em dez feridos), embora uma tabela some mais de 300 impactos nos navios. Os danos foram principalmente nas partes superiores dos monitores Alagoas e Pará.",
        { h: "Por que importa" },
        "Com os navios acima de Humaitá, a fortaleza deixou de ser a única porta do rio, e López mandou o exército atravessar o Chaco para novas posições. Humaitá foi abandonada e ocupada em julho de 1868. O caminho para Assunção ficou aberto, mas López escapou com a maior parte do exército, e a guerra durou mais dois anos, até a morte dele em Cerro Corá, em 1º de março de 1870.",
        "A passagem recuperou o prestígio da esquadra brasileira, que vinha sob pressão do governo para avançar, e alguns autores a veem como ponto de virada da guerra. O comandante foi premiado com o título de barão.",
        { h: "Curiosidades e controvérsias" },
        { note: "A corrente: as fontes não concordam sobre ela. Um observador britânico fala em três grandes correntes sobre dez pontões. Outro, em três barcaças. O inglês Thompson, que servia a López, diz que as correntes foram afundando aos poucos, ao longo de meses, e acabaram enterradas na lama, sem fechar o rio." },
        { note: "Monitores ou encouraçados: algumas fontes chamam os seis de monitores, mas o Barroso e o Tamandaré eram encouraçados de defesa costeira, e só os outros três eram monitores." },
        { note: "O ataque falso: o ataque de distração a Cierva custou cerca de 1.200 homens à infantaria brasileira, segundo uma fonte. O mesmo quadro dá cerca de 150 baixas do lado paraguaio." }
      ]}
    ]
  },

  avai: {
    war: "Guerra do Paraguai (1864–1870), a campanha de Piquissiri",
    hook: "Num temporal que molhou a pólvora, a infantaria e a cavalaria brasileiras terminaram a luta no aço.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em julho de 1868, Humaitá caiu, mas López escapou com o exército e se entrincheirou numa nova linha, no arroio Piquissiri.",
        "Caxias, então marquês, resolveu dar a volta por trás. Em novembro de 1868, engenheiros abriram uma estrada pelo [[chaco]], de uns 11 km (outras fontes dizem mais), em cerca de 23 dias. O exército atravessou o rio e voltou a embarcar para desembarcar na margem paraguaia, atrás da linha de Piquissiri.",
        { h: "A Dezembrada" },
        { timeline: [
          ["Jul. 1868", "Humaitá é ocupada, mas López escapa e se entrincheira em Piquissiri."],
          ["Nov. 1868", "Caxias manda abrir a estrada do Chaco para contornar a linha paraguaia."],
          ["6 dez. 1868", "Itororó: os brasileiros tomam a ponte. Algumas fontes dão o dia 5."],
          ["11 dez. 1868", "Avaí."],
          ["21–27 dez. 1868", "Lomas Valentinas, o último reduto de López."],
          ["30 dez. 1868", "Rende-se a guarnição de Angostura."],
          ["1º jan. 1869", "Os aliados entram em Assunção."]
        ]},
        "O conjunto dos combates de dezembro ficou conhecido como a Dezembrada. Avaí foi o do meio, e o que acabou com as divisões do general Caballero."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Caxias" },
        "Luís Alves de Lima e Silva, então marquês de Caxias, comandava as forças brasileiras desde outubro de 1866. A manobra de Piquissiri foi a sua marca: em vez de atacar a posição, ele a contornou. Só em março de 1869 virou duque.",
        { h: "Osório" },
        "O general Manuel Luís Osório comandava o 3º Corpo, que fazia a vanguarda. Em Avaí abriu o ataque pelo centro e foi ferido no rosto por uma bala de fuzil. A tradição fala em queixo ou maxilar. Continuou no comando da cavalaria até o fim.",
        { h: "Andrade Neves e Mena Barreto" },
        "Joaquim de Andrade Neves e João Manuel Mena Barreto eram oficiais de cavalaria. Atacaram os dois flancos da posição paraguaia e cortaram a retirada.",
        { h: "Bernardino Caballero" },
        "Comandava a força paraguaia que defendia a passagem do arroio Avaí, depois de ter lutado em Itororó uma semana antes e recuado. Sua missão era segurar os brasileiros enquanto López juntava forças em Lomas Valentinas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os brasileiros tinham cerca de 18.900 homens e 26 canhões, em três corpos de exército: o 3º, de Osório, na vanguarda; o 2º, de José Luís Mena Barreto, no centro; e o 1º, de Jacinto Machado Bittencourt, na retaguarda, com quatro divisões de cavalaria em apoio. Os paraguaios, de 5.000 a 7.000 homens e 18 canhões, conforme a fonte.",
        { h: "O terreno" },
        "Caballero esperava do outro lado do arroio Avaí, numa posição escolhida com o mesmo critério de Itororó: o riacho entre ele e os brasileiros.",
        { h: "A batalha em cinco movimentos" },
        "Primeiro, na noite de 10 de dezembro, o exército brasileiro acampou em território paraguaio, em Porto Ipané. Ao amanhecer, Caxias mandou marchar rumo a Villeta. Encontrou Caballero do outro lado do arroio Avaí.",
        "Segundo, Caxias mandou atacar de imediato. Osório abriu o combate pelo centro, e os paraguaios resistiram com muita energia.",
        "Terceiro, caiu um temporal violento, no pior momento do combate. O chão alagou, o arroio subiu e a pólvora dos atacantes molhou. Os brasileiros tiveram de lutar com arma branca. Vários oficiais morreram à frente de cargas.",
        "Quarto, Caxias dirigiu pessoalmente um forte ataque do 2º Corpo sobre a direita paraguaia. Andrade Neves e João Manuel Mena Barreto, com a cavalaria, bateram os dois flancos e romperam a posição.",
        "Quinto, a luta durou cerca de cinco horas. Quando a cavalaria fechou a retirada, a força de Caballero foi destruída. Os brasileiros descansaram em Villeta, na margem do rio Paraguai."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas brasileiras ficaram em cerca de 1.663 homens (297 mortos e 1.366 feridos), segundo uma fonte. As paraguaias, em cerca de 3.600 (3.000 mortos e 600 feridos). Outras contagens dizem que só uns 200 homens de Caballero sobreviveram, e uma delas, que menos de 50 voltaram a Lomas Valentinas. As fontes não concordam.",
        { h: "Por que importa" },
        "Avaí destruiu a força de Caballero. Dez dias depois, a Dezembrada continuou com Lomas Valentinas e a rendição de Angostura. Assunção foi ocupada em 1º de janeiro de 1869. A guerra, porém, não acabou: López fugiu para o interior e resistiu até março de 1870.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: a maioria das fontes dá 11 de dezembro de 1868, mas uma delas dá 15 de dezembro, e um relato confunde as datas com as de Itororó, em 6 de dezembro." },
        { note: "Os números: o tamanho da força paraguaia varia de 5.000 a 7.000 homens, e o número de sobreviventes, de menos de 50 a 200." },
        { note: "A pintura: o pintor Pedro Américo fez 'A Batalha do Avaí' em cerca de cinco anos (1872–1877), numa tela de 6 por 11 metros. Está hoje no Museu Nacional de Belas Artes, no Rio de Janeiro." }
      ]}
    ]
  },

  magdala: {
    war: "Expedição britânica à Abissínia (1867–1868)",
    hook: "A Grã-Bretanha mandou 13.000 soldados, 44 elefantes e uma ferrovia atrás de um punhado de reféns.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No meio do século XIX, a Etiópia (então chamada Abissínia pelos europeus) era um reino cristão cercado de vizinhos muçulmanos e dividido entre senhores regionais. Em 1855, um chefe de bandos armados, Kassa Hailu, venceu os rivais e foi coroado imperador com o nome de Tewodros II (Teodoro, em português). Ele queria unir o país, criar um exército profissional e modernizar as armas.",
        "Para isso precisava de técnicos europeus. Por volta de 1862, escreveu à rainha Vitória pedindo artesãos que ensinassem a fazer armas. A carta ficou sem resposta nos arquivos do Foreign Office. Irritado, Teodoro prendeu o cônsul britânico Charles Cameron, o missionário Henry Stern e outros europeus, e depois também a missão de Hormuzd Rassam, enviada para negociá-los. Os europeus foram obrigados a trabalhar numa fundição de canhões.",
        { h: "O caminho até Magdala" },
        { timeline: [
          ["1855", "Kassa Hailu é coroado imperador como Tewodros II."],
          ["c. 1862", "Escreve à rainha Vitória pedindo técnicos. A carta fica sem resposta."],
          ["21 ago. 1867", "A rainha aprova uma expedição militar para libertar os reféns."],
          ["Dez. 1867", "Os britânicos desembarcam em Annesley Bay, no Mar Vermelho."],
          ["Fev. 1868", "Começa a marcha para o interior, a partir de Senafe."],
          ["10 abr. 1868", "Arogye: primeiro combate aberto."],
          ["13 abr. 1868", "Assalto a Magdala."]
        ]},
        "A expedição foi uma operação logística gigantesca. Cerca de 13.000 soldados britânicos e indianos, 26.000 carregadores e outros que acompanhavam o exército, mais de 40.000 animais, entre eles 44 elefantes vindos da Índia para carregar os canhões pesados. Foram transportados por cerca de 280 navios. Os engenheiros construíram um píer, uma ferrovia curta (as fontes falam de 10 a 32 km) e uma estrada até Senafe. O comandante, o general Robert Napier, era engenheiro, uma escolha incomum para uma campanha. Os britânicos pagaram os suprimentos em táleres de Maria Teresa, em vez de saquear."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Tewodros II, imperador da Etiópia" },
        "Nascido por volta de 1818, começou como chefe de bandidos e subiu pela força. Tinha planos grandes: governadores e juízes pagos, exército permanente, impostos regulares. Isso lhe criou inimigos, sobretudo na Igreja, quando tentou taxar as terras eclesiásticas. Mudou a capital de Gondar para Debre Tabor e depois para a fortaleza de Magdala. Em 1868, seu exército tinha encolhido: de cerca de 10.000 homens em meados de 1867 para uns 4.000 na hora final, pelas deserções.",
        { h: "Robert Napier" },
        "Engenheiro militar, comandou a expedição. Conquistou o apoio de Kassai, o futuro imperador Yohannes IV, e outros senhores locais bloquearam rotas de fuga. Quando acabou, foi feito barão Napier de Magdala."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Napier tinha cerca de 13.000 homens, mas só uns 4.000 foram para o assalto final. Levava canhões Armstrong de carregar pela culatra, fuzis Snider e foguetes. Os 44 elefantes carregavam os canhões pesados em terreno de montanha. Teodoro tinha entre 4.000 e 10.000 homens, conforme a fonte, com alguns canhões e um grande [[morteiro]] de bronze.",
        { h: "O terreno" },
        "Magdala ficava num rochedo de uns 90 m de altura sobre a planície em volta, a uns 630 km do Mar Vermelho. Antes de chegar a ela, os britânicos tinham de limpar as alturas vizinhas do planalto de Islamgee, entre elas Selassie e Fala.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, em 10 de abril, uma Sexta-feira Santa, as colunas britânicas desceram ao rio Bashilo e subiram o planalto de Arogye, diante do monte Fala. Teodoro observava das alturas.",
        "Segundo, por volta das 4 da tarde, Teodoro atacou pelo planalto com cerca de 6.000 homens, sob o fitawrari Gebreye, apoiados pelos canhões. Os artilheiros perderam a distância logo no começo.",
        "Terceiro, os fuzis Snider, os canhões Armstrong e os foguetes dos britânicos fizeram a diferença. Em cerca de uma hora e meia, os etíopes recuaram. As perdas foram de uns 500 a 700 mortos e muitos feridos. Os britânicos tiveram uns 20 feridos.",
        "Quarto, depois da derrota, Teodoro mandou soltar os [[reféns|refém]] europeus, mas recusou a rendição incondicional. Napier lhe prometeu tratamento digno, e ele não aceitou ficar prisioneiro.",
        "Quinto, a cavalaria britânica cercou a montanha de Magdala para fechar a fuga, e a infantaria e os canhões subiram o monte Selassie.",
        "Sexto, em 13 de abril, depois que o prazo de uma trégua terminou, os britânicos bombardearam a fortaleza e avançaram. Um grupo de assalto do 33º Regimento, apoiado por engenheiros e sapadores, chegou ao portão sob fogo. Os engenheiros descobriram que tinham esquecido a pólvora para explodi-lo. Um soldado do 33º achou outro jeito: escalou o muro, e os homens que o seguiram dominaram os defensores do portão.",
        "Sétimo, o portão foi aberto e a força principal entrou. A guarnição se rendeu.",
        "Oitavo, dentro do segundo portão os britânicos encontraram Teodoro morto. Ele tinha se matado com um tiro de pistola, uma pistola que a rainha Vitória lhe tinha dado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os reféns foram libertados. Em combate, as perdas britânicas foram pequenas: cerca de 20 feridos em Arogye e pouquíssimos na tomada de Magdala. Os etíopes perderam uns 700 mortos e 1.200 feridos em Arogye. A expedição custou perto de 9 milhões de libras, segundo um historiador, uma fortuna para a época.",
        "Magdala foi saqueada e queimada. Os britânicos deixaram a Etiópia até meados de junho.",
        { h: "Por que importa" },
        "Dois soldados do 33º, Bergin e Magner, receberam a Cruz Vitória pelo assalto. Foi uma das operações mais caras e ambiciosas do exército britânico no século XIX, e mostrou que as potências europeias podiam levar uma força inteira a um planalto distante. Napier deu cerca de 500.000 libras em armas e suprimentos a Kassai, que venceu a disputa pelo trono e virou o imperador Yohannes IV. O filho de Teodoro, o príncipe Alemayehu, foi levado para a Inglaterra, educado em Rugby e Sandhurst e morreu em 1879, aos 19 anos.",
        { h: "Curiosidades e controvérsias" },
        { note: "O saque: o espólio, que incluía manuscritos, coroas e objetos religiosos, foi leiloado, e o Museu Britânico ficou com mais de 300 manuscritos. A Etiópia pede de volta até hoje o que sobrou: alguns itens foram devolvidos em 1924, nos anos 1960, em 2019, 2021 e 2023, e o Museu Britânico ainda guarda 11 [[tabots|tabot]]. A Etiópia também pede os restos mortais de Alemayehu, que estão em Windsor." },
        { note: "Os prisioneiros etíopes: segundo os relatos, Teodoro mandou jogar do penhasco centenas de prisioneiros do seu próprio povo (uma fonte fala em cerca de 300), o que endureceu a atitude de Napier." },
        { note: "A morte de Teodoro: a maioria das fontes dá o 13 de abril, mas uma biografia diz 15 de abril. Usamos o dia do assalto." },
        { note: "Os números: as fontes dão o exército britânico como 12.000 a 13.000 homens e o de Teodoro, de 4.000 a 10.000 (uma lista chega a 32.000–40.000 para o de Napier). A distância marchada vai de 400 milhas a uns 640 km." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  riachuelo: {
    terrain: [
      { t: "sea", x: 30, y: 0, w: 46, h: 70, l: "Rio Paraná" },
      { t: "note", x: 2, y: 9, l: "Corrientes" },
      { t: "note", x: 2, y: 47, l: "Barrancas do Riachuelo" },
      { t: "note", x: 86, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "bAm", s: "a", k: "ship", w: 4, h: 9, l: "Amazonas (Barroso)" },
      { id: "bFl", s: "a", k: "ship", w: 4, h: 9, l: "Demais navios" },
      { id: "bBel", s: "a", k: "ship", w: 4, h: 8, l: "Belmonte" },
      { id: "bJeq", s: "a", k: "ship", w: 4, h: 8, l: "Jequitinhonha" },
      { id: "bPar", s: "a", k: "ship", w: 4, h: 8, l: "Parnaíba" },
      { id: "pVap", s: "b", k: "ship", w: 4, h: 9, l: "Vapores (Meza)" },
      { id: "pCha", s: "b", k: "ship", w: 14, h: 3, l: "Chatas" },
      { id: "pBat", s: "b", k: "camp", w: 18, h: 8, l: "Baterias de Bruguez" }
    ],
    steps: [
      { t: "A frota paraguaia desce o Paraná de Humaitá. A esquadra brasileira está ancorada perto de Corrientes, com parte das tripulações em terra, e ainda não sabe de nada.",
        p: { bAm: [44, 24], bFl: [56, 22], bBel: [50, 30], bJeq: [62, 28], bPar: [38, 30],
             pVap: [54, 3], pCha: [54, 8], pBat: [14, 56] } },
      { t: "Perto das 9h, os paraguaios aparecem. Em vez de abordar, passam atirando, rio abaixo, e deixam as chatas atravessadas no canal, junto às baterias da margem.",
        p: { pVap: [54, 36], pCha: [54, 46] } },
      { t: "Os brasileiros levantam âncora e descem o rio para atacar. A Belmonte, na frente, leva fogo de todos os lados e encalha. A Jequitinhonha também encalha.",
        p: { bBel: [38, 44], bJeq: [66, 42], bAm: [46, 36], bFl: [56, 33], bPar: [42, 38] } },
      { t: "A Parnaíba perde o leme ao tentar socorrer a Jequitinhonha. Três vapores paraguaios a abordam e a luta corpo a corpo no convés dura cerca de uma hora.",
        p: { bPar: [52, 40], pVap: [52, 44] } },
      { t: "Barroso faz o Amazonas dar meia-volta e começa a abalroar os vapores inimigos, um depois do outro. As canhoneiras Araguari e Beberibe vêm em socorro da Parnaíba.",
        p: { bAm: [52, 46, 0], bFl: [58, 38], pVap: [56, 48] }, x: ["pCha"] },
      { t: "Os paraguaios fogem rio acima, perseguidos até o fim da tarde. Perdem quatro vapores e boa parte das chatas.",
        p: { pVap: [54, 8], bFl: [54, 24], bAm: [50, 34] }, x: ["pVap", "pCha"] },
      { t: "Fim da batalha, por volta das 17h30. A Jequitinhonha, encalhada, será perdida. A Belmonte está alagada. A frota paraguaia não voltará a ser uma ameaça no Paraná.",
        p: {}, x: ["pVap", "pCha", "bJeq"] }
    ]
  },

  tuiuti: {
    terrain: [
      { t: "sea", x: 0, y: 66, w: 100, h: 4, l: "Rio Paraná" },
      { t: "note", x: 86, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "aBr", s: "a", k: "inf", w: 22, h: 5, l: "Brasileiros (Osório)" },
      { id: "aSam", s: "a", k: "inf", w: 9, h: 4, l: "3ª Divisão (Sampaio)" },
      { id: "aMen", s: "a", k: "cav", w: 12, h: 4, l: "Cavalaria (Mena Barreto)" },
      { id: "aUr", s: "a", k: "inf", w: 12, h: 5, l: "Uruguaios (Flores)" },
      { id: "aMal", s: "a", k: "inf", w: 8, h: 2, l: "Mallet, atrás do fosso" },
      { id: "aAr", s: "a", k: "inf", w: 16, h: 5, l: "Argentinos" },
      { id: "aArC", s: "a", k: "cav", w: 12, h: 4, l: "Cavalaria argentina" },
      { id: "camp", s: "a", k: "camp", w: 26, h: 5, l: "Acampamento aliado" },
      { id: "pBar", s: "b", k: "inf", w: 20, h: 5, l: "Barrios" },
      { id: "pDia", s: "b", k: "inf", w: 14, h: 5, l: "Díaz" },
      { id: "pRes", s: "b", k: "cav", w: 20, h: 5, l: "Resquín (cavalaria)" },
      { id: "pMar", s: "b", k: "inf", w: 14, h: 4, l: "Marcó (reserva)" }
    ],
    steps: [
      { t: "Os aliados estão no acampamento, entre pântanos. Mallet cavou na véspera um fosso escondido diante dos seus canhões. As colunas paraguaias esperam no mato, ao norte.",
        p: { aBr: [20, 46], aSam: [36, 46], aMen: [20, 56], aUr: [50, 46], aMal: [50, 40], aAr: [76, 46], aArC: [88, 56], camp: [50, 62],
             pBar: [18, 12], pDia: [50, 10], pRes: [82, 12], pMar: [50, 3] } },
      { t: "Perto do meio-dia, um foguete dá o sinal. As três colunas paraguaias avançam ao mesmo tempo, uma contra cada ponta do acampamento e uma contra o centro.",
        p: { pBar: [18, 28], pDia: [50, 26], pRes: [82, 28] } },
      { t: "No centro, a coluna de Díaz cai sobre os uruguaios e sobre batalhões brasileiros de voluntários. Alguns recuam, outros fogem.",
        p: { pDia: [50, 36], aUr: [50, 50] } },
      { t: "A cavalaria paraguaia chega ao fosso de Mallet. A metralha em fogo cruzado a para ali. Foi a artilharia revólver.",
        p: { pDia: [50, 33], aMal: [50, 39] }, x: ["pDia"] },
      { t: "À esquerda, Barrios empurra os brasileiros quase até o acampamento. Osório joga as reservas, e a 3ª Divisão de Sampaio segura o flanco.",
        p: { pBar: [20, 38], aBr: [20, 48], aSam: [32, 44] } },
      { t: "A cavalaria de Mena Barreto cerca a coluna de Barrios e a destrói.",
        p: { aMen: [18, 38, -30] }, x: ["pBar"] },
      { t: "À direita, Resquín derrota a cavalaria argentina, mas não decide a batalha. A força de fogo aliada prevalece.",
        p: { pRes: [84, 40], aArC: [92, 52] }, x: ["aArC"] },
      { t: "Por volta das 16h, os paraguaios se retiram. Os aliados, com poucos cavalos, não os perseguem.",
        p: { pRes: [84, 18], pMar: [50, 3] }, x: ["pBar", "pDia", "pRes"] }
    ]
  },

  curupaiti: {
    terrain: [
      { t: "sea", x: 86, y: 0, w: 14, h: 70, l: "Rio Paraguai" },
      { t: "note", x: 4, y: 6, l: "Humaitá ↑" },
      { t: "note", x: 8, y: 68, l: "Curuzú ↓" }
    ],
    units: [
      { id: "pIn", s: "a", k: "camp", w: 40, h: 5, l: "Trincheira interna e canhões" },
      { id: "pOut", s: "a", k: "inf", w: 44, h: 2, l: "Fosso externo e estacas" },
      { id: "bFle", s: "b", k: "ship", w: 4, h: 12, l: "Esquadra brasileira" },
      { id: "bAr1", s: "b", k: "inf", w: 12, h: 5, l: "Argentinos" },
      { id: "bBr1", s: "b", k: "inf", w: 12, h: 5, l: "Brasileiros" },
      { id: "bAr2", s: "b", k: "inf", w: 12, h: 5, l: "2ª onda argentina" },
      { id: "bBr2", s: "b", k: "inf", w: 12, h: 5, l: "" }
    ],
    steps: [
      { t: "O forte tem duas linhas de trincheiras, com canhões bem escondidos, e fica alto sobre o rio. Os aliados estão em Curuzú, a alguns quilômetros.",
        p: { pIn: [48, 18], pOut: [48, 26], bFle: [90, 58], bAr1: [20, 66], bBr1: [60, 66], bAr2: [36, 70], bBr2: [76, 70] } },
      { t: "De manhã, a esquadra bombardeia por cerca de cinco horas. Como o forte é alto, as balas passam por cima, e só um canhão é destruído.",
        p: { bFle: [90, 40] } },
      { t: "O fim do bombardeio é lido como sinal de que as defesas foram destruídas. Por volta do meio-dia, as colunas avançam em ordem de parada, ao som de bandas, por um terreno alagado.",
        p: { bAr1: [28, 54], bBr1: [62, 54], bFle: [90, 30] } },
      { t: "Debaixo da metralha, os brasileiros chegam à primeira trincheira e a atravessam.",
        p: { bAr1: [28, 40], bBr1: [60, 40] } },
      { t: "Surpresa: uma segunda trincheira, mais funda e larga, os prende na lama, entre as duas linhas.",
        p: { bBr1: [60, 33] } },
      { t: "Mitre acha que os brasileiros passaram e manda uma segunda onda de argentinos. É um massacre.",
        p: { bAr1: [28, 32], bAr2: [34, 44], bBr2: [70, 44] } },
      { t: "Alguns poucos, entre 40 e 60, chegam ao parapeito e são mortos. O ataque é abandonado por volta das 14h.",
        p: { bAr1: [30, 29] }, x: ["bAr1", "bBr1", "bAr2", "bBr2"] },
      { t: "Ao anoitecer, as colunas voltam a Curuzú em desordem. Os aliados perderam de 3.400 a 4.200 homens, e os paraguaios, algumas centenas, no máximo.",
        p: { bAr1: [20, 66], bBr1: [60, 66], bAr2: [36, 70], bBr2: [76, 70] }, x: ["bAr1", "bBr1", "bAr2", "bBr2"] }
    ]
  },

  humaita: {
    terrain: [
      { t: "sea", x: 36, y: 0, w: 28, h: 70, l: "Rio Paraguai" },
      { t: "note", x: 6, y: 36, l: "Humaitá" },
      { t: "note", x: 78, y: 18, l: "Chaco" },
      { t: "note", x: 86, y: 4, l: "Norte ↑" }
    ],
    units: [
      { id: "n1", s: "a", k: "ship", w: 6, h: 12, l: "Barroso + Rio Grande" },
      { id: "n2", s: "a", k: "ship", w: 6, h: 12, l: "Bahia + Alagoas" },
      { id: "n3", s: "a", k: "ship", w: 6, h: 12, l: "Tamandaré + Pará" },
      { id: "aInf", s: "a", k: "inf", w: 12, h: 5, l: "Ataque de distração" },
      { id: "pHum", s: "b", k: "camp", w: 16, h: 18, l: "Baterias de Humaitá" },
      { id: "pTim", s: "b", k: "camp", w: 14, h: 8, l: "Bateria de Timbó" },
      { id: "pCor", s: "b", k: "car", w: 28, h: 1.6, l: "Correntes" },
      { id: "pCie", s: "b", k: "camp", w: 12, h: 5, l: "Reduto de Cierva" }
    ],
    steps: [
      { t: "Noite de 18 para 19 de fevereiro. O rio está cheio. Os seis navios, amarrados em três pares, esperam abaixo de Humaitá. A fortaleza e a corrente de ferro fecham a curva.",
        p: { n1: [44, 64], n2: [50, 66], n3: [56, 64], aInf: [14, 64], pHum: [20, 40], pTim: [78, 24], pCor: [50, 36], pCie: [14, 50] } },
      { t: "Ataque de distração: a infantaria brasileira investe contra o reduto de Cierva e perde cerca de 1.200 homens, segundo uma fonte.",
        p: { aInf: [14, 56] } },
      { t: "Por volta das 4h, um foguete dá o sinal e a primeira dupla, Barroso e Rio Grande, entra na curva. Os paraguaios acendem fogueiras no Chaco para confundir os pilotos.",
        p: { n1: [46, 46] } },
      { t: "Os primeiros navios passam por cima da corrente, que as fontes descrevem de formas diferentes, mas que não fecha o rio cheio. A fortaleza atira de cima.",
        p: { n1: [46, 30], n2: [50, 52] } },
      { t: "A segunda dupla, Bahia e Alagoas, vem logo atrás. Um tiro corta o cabo, e o Alagoas segue sozinho, com o motor avariado.",
        p: { n2: [50, 34], n3: [56, 54] } },
      { t: "A terceira dupla, Tamandaré e Pará, passa debaixo do fogo. O Tamandaré é atingido três vezes na proa e começa a fazer água.",
        p: { n3: [56, 36], n1: [46, 18], n2: [52, 28] } },
      { t: "Mais acima, a bateria de Timbó, no Chaco, atira de perto. É mais perigosa do que a própria fortaleza.",
        p: { n1: [46, 8], n2: [52, 16], n3: [56, 26] } },
      { t: "Passaram os seis. O Tamandaré encalha de propósito em Tayí para não afundar, e três navios seguem rumo a Assunção. Humaitá está cortada do rio e será abandonada em julho.",
        p: { n3: [58, 8], n1: [44, 3], n2: [52, 3] }, x: ["pHum", "pCor"] }
    ]
  },

  magdala: {
    terrain: [
      { t: "hill", x: 70, y: 14, rx: 22, ry: 10, l: "Magdala" },
      { t: "hill", x: 32, y: 36, rx: 28, ry: 12, l: "Planalto de Arogye" },
      { t: "note", x: 8, y: 68, l: "Rio Bashilo" },
      { t: "note", x: 86, y: 64, l: "Norte ↑" }
    ],
    units: [
      { id: "aCol", s: "a", k: "inf", w: 16, h: 5, l: "Colunas de Napier" },
      { id: "aArt", s: "a", k: "ele", w: 10, h: 4, l: "Armstrong e elefantes" },
      { id: "aCav", s: "a", k: "cav", w: 10, h: 4, l: "Cavalaria" },
      { id: "a33", s: "a", k: "inf", w: 9, h: 3, l: "33º e engenheiros" },
      { id: "pTew", s: "b", k: "inf", w: 20, h: 5, l: "Exército de Teodoro" },
      { id: "pMag", s: "b", k: "camp", w: 14, h: 5, l: "Guarnição de Magdala" }
    ],
    steps: [
      { t: "Em 10 de abril, Sexta-feira Santa, os britânicos estão no vale do rio Bashilo. Teodoro vigia das alturas.",
        p: { aCol: [24, 62], aArt: [12, 62], aCav: [38, 62], a33: [50, 64], pTew: [62, 30], pMag: [72, 14] } },
      { t: "As colunas sobem o planalto de Arogye, com os canhões Armstrong carregados por elefantes.",
        p: { aCol: [28, 46], aArt: [18, 46], aCav: [40, 48], a33: [48, 58] } },
      { t: "Por volta das 4 da tarde, Teodoro ataca pelo planalto com cerca de 6.000 homens, apoiado pelos seus canhões, que perdem a distância.",
        p: { pTew: [44, 36] } },
      { t: "Fuzis Snider, canhões Armstrong e foguetes britânicos decidem. Em cerca de uma hora e meia, os etíopes recuam, com 500 a 700 mortos.",
        p: { pTew: [62, 26] }, x: ["pTew"] },
      { t: "Teodoro solta os reféns europeus e recusa a rendição. A cavalaria britânica contorna a montanha de Magdala para fechar a fuga.",
        p: { aCav: [56, 30, -30], aCol: [40, 36], aArt: [30, 38] } },
      { t: "Em 13 de abril, os britânicos bombardeiam a fortaleza. O grupo de assalto do 33º chega ao portão sob fogo.",
        p: { aCol: [56, 26], aArt: [48, 28], a33: [64, 22] } },
      { t: "Os engenheiros esqueceram a pólvora. Um soldado do 33º escala o muro, e os que o seguem dominam os defensores e abrem o portão.",
        p: { a33: [70, 17] }, x: ["pMag"] },
      { t: "A força principal entra. Teodoro é encontrado morto, dentro do segundo portão, com a pistola que a rainha Vitória lhe tinha dado.",
        p: { aCol: [66, 18], aArt: [58, 22], aCav: [74, 20] } }
    ]
  }
});
