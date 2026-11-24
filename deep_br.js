// In-depth battles, batch br: helsingborg, milnebay (reader-suggested pack).
// Checked against the English, Swedish and Portuguese Wikipedia articles on the Battle of Helsingborg (1710) and the
// Battle of Milne Bay, the Wikipedia articles on the Kokoda Track campaign and the Battle of the Tenaru, the Australian
// War Memorial and Department of Veterans' Affairs pages on Milne Bay, and the works those pages cite (Coulthard-Clark,
// McCarthy, Tanaka, Brune). Where sources disagree the text says so.
// Helsingborg: sources describe the movements but not each regiment's exact place, so the diagram is schematic.
// Aircraft are not drawn in the Milne Bay diagram (unit_kinds.js is not edited here).

Object.assign(GLOSSARY, {
  "calendário sueco": "Calendário que a Suécia usou entre 1700 e 1712, um dia à frente do juliano. Por isso 28 de fevereiro de 1710 na Suécia é 27 de fevereiro no juliano e 10 de março no gregoriano.",
  "calendário gregoriano": "O calendário que usamos hoje. A Dinamarca o adotou em 1700; por isso os dinamarqueses datam Helsingborg de 10 de março.",
  "escânia": "Região no extremo sul da Suécia, a poucos quilômetros da Dinamarca. Foi dinamarquesa por séculos e passou para a Suécia em 1658.",
  "paz de travendal": "Tratado de 1700 que tirou a Dinamarca da Grande Guerra do Norte, depois de o jovem Carlos XII ameaçar Copenhague.",
  "pedágio do sund": "Taxa que a Dinamarca cobrava dos navios que passavam pelo estreito do Sund, entre ela e a Escânia. Era uma grande fonte de renda.",
  "ala do exército": "Cada lado da linha de batalha. A ala esquerda e a ala direita ficam nas pontas, geralmente com a cavalaria.",
  "guarda real a pé": "Regimento de infantaria de elite, encarregado de proteger o rei. Os dinamarqueses chamavam o seu de Livgarde til Fods.",
  "força naval especial de desembarque": "Unidade de infantaria da Marinha japonesa (em inglês, SNLF), usada em desembarques. Era mais leve e menos treinada para combate terrestre longo que o exército.",
  "pista de pouso": "Faixa de terra limpa e nivelada onde os aviões decolam e pousam. Em Milne Bay, a chuva e a lama faziam disso um trabalho enorme.",
  "placas marston": "Placas de aço furadas, encaixadas umas nas outras, que formavam uma pista de pouso rápida sobre terreno mole.",
  "kittyhawk": "Caça americano P-40, usado pelos esquadrões australianos. Era robusto e carregava bombas e metralhadoras, boa combinação para atacar barcaças e tropas.",
  "brigada australiana": "Grupo de três batalhões de infantaria, cerca de 2.000 a 3.000 homens, mais apoio, sob um brigadeiro.",
  "malária": "Doença transmitida por mosquitos, com febre alta e fraqueza. Em Milne Bay, mais de um sexto da tropa aliada adoeceu, incluindo o comandante."
});

Object.assign(DEEP, {
  helsingborg: {
    war: "Grande Guerra do Norte (1700–1721)",
    hook: "A Dinamarca desembarcou para retomar a Escânia e saiu dela cinco dias depois de uma batalha que começou no meio do nevoeiro.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A [[escânia]] é a ponta sul da Suécia. Foi dinamarquesa por séculos e passou para a Suécia em 1658. Os dinamarqueses nunca aceitaram, e tentaram retomá-la à força em 1676, quando foram derrotados em Lund. Aquela guerra terminou sem mudar a fronteira.",
        "A Grande Guerra do Norte começou em 1700, quando a Dinamarca, a Rússia e a Polônia atacaram a Suécia ao mesmo tempo. O jovem Carlos XII tirou a Dinamarca da guerra logo no começo, com a [[paz de travendal]]. Mas em 8 de julho de 1709 ele perdeu o exército em Poltava e fugiu para o Império Otomano. A Dinamarca viu a chance, declarou guerra de novo e desembarcou na Escânia.",
        { h: "O caminho até Helsingborg" },
        { timeline: [
          ["1658", "A Escânia passa da Dinamarca para a Suécia."],
          ["1676", "Os dinamarqueses tentam retomá-la e perdem em Lund."],
          ["1700", "A paz de Travendal tira a Dinamarca da guerra."],
          ["8 jul 1709", "O rei sueco perde em Poltava."],
          ["2 nov 1709", "Cerca de 15.000 dinamarqueses desembarcam em Råå, ao lado de Helsingborg."],
          ["Jan 1710", "Os dinamarqueses derrotam uma força sueca menor perto de Kristianstad."],
          ["28 fev 1710", "A batalha, no calendário sueco."],
          ["5 mar 1710", "Os últimos dinamarqueses deixam a Escânia."]
        ]},
        "A Dinamarca dizia que a Suécia fugia do [[pedágio do sund]] e maltratava a população local. Na prática, com o rei sueco longe e o exército perdido, a Escânia estava mal defendida, e a Dinamarca queria aproveitar."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Magnus Stenbock" },
        "General sueco, escolhido para defender a Escânia enquanto o rei estava no exílio. Não tinha o exército de que precisava: montou um com recrutas e regimentos novos, em Växjö, mais uma unidade pronta e os regimentos de cavalaria da Escânia, recriados depois de destruídos em Poltava. O inimigo já estava dentro do país, e ele tinha poucas semanas.",
        { h: "Jørgen Rantzau" },
        "Comandante dinamarquês. Assumiu o exército em meados de fevereiro, quando o general Reventlow adoeceu. Descrito como um cavaleiro corajoso, mais acostumado a liderar cargas do que a dirigir uma batalha. Na manhã de 28 de fevereiro, decidiu que os suecos não se mexeriam com aquele nevoeiro. Estava errado.",
        { h: "Os outros nomes" },
        "Do lado sueco, Jacob Burensköld, o amigo mais próximo de Stenbock e veterano da cavalaria, liderou os primeiros combates em Brohuset; Wilhelm Bennet liderou a vanguarda de cerca de 1.000 cavaleiros. Do lado dinamarquês, Christian Rodsteen comandava a ala direita e tinha avisado, sem ser ouvido, que ela seria atacada; Frantz Joachim von Dewitz, elogiado por Reventlow como o único bom chefe que recebera, comandava o oeste da linha; e Valentin von Eickstedt acabou ordenando a retirada."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Cada lado tinha cerca de 14.000 homens. Segundo a ficha mais usada, os suecos tinham 9.000 a pé, 5.000 a cavalo e 34 canhões; os dinamarqueses, 10.000 a pé, 4.000 a cavalo e 32 canhões. Não há acordo perfeito: o estado-maior dinamarquês contou 13.100 homens, e o próprio Stenbock calculou 13.800.",
        "A diferença estava na qualidade. Muitos regimentos suecos eram novos e nunca tinham lutado, com cavalos piores que os dinamarqueses; os recrutas tinham treinado no gelo de um lago perto de Växjö. Os dinamarqueses tinham veteranos da Guerra de Sucessão Espanhola, embora com algumas [[milícia]]s mais fracas, e reforçaram as pontas da linha com infantaria, coisa que os suecos não faziam. A linha dinamarquesa tinha quase 3 km.",
        { h: "O terreno" },
        "As colinas de Ringstorp, a nordeste de Helsingborg, com a cidade e suas fortificações atrás dos dinamarqueses. A ala esquerda deles ficava entre o vale de Pålsjö, perto do mar, e as colinas, onde estava a maior parte da artilharia.",
        { h: "O nevoeiro" },
        "Stenbock saiu por volta das 2h da manhã, em cinco colunas, com a artilharia no centro, a infantaria nos lados e a cavalaria nas pontas. Foi para oeste e depois para o sul, de modo que chegou pelo norte, e não pelo lado em que os dinamarqueses esperavam. Às 6h, Rantzau saiu para observar e não via três comprimentos de cavalo à frente. Concluiu que ninguém atacaria tão cedo e tratou os avisos de movimento ao norte como pequenos grupos de saque.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, a vanguarda de Bennet pegou uma patrulha dinamarquesa de dez homens e um suboficial, e o exército sueco se formou. Quando o nevoeiro levantou, por volta do meio-dia, a artilharia dinamarquesa abriu fogo das colinas.",
        "Segundo, Rantzau reforçou a [[ala|ala do exército]] esquerda, que parecia a mais ameaçada. Stenbock não atacou ali: mandou a cavalaria para o leste, para contornar a direita dinamarquesa.",
        "Terceiro, Rantzau mandou ao encontro dela a cavalaria da sua ala direita. Era um movimento só daquela ponta, mas o centro o tomou por um avanço geral, e o exército dinamarquês largou a posição protegida e virou-se para o norte. A linha se esticou e abriu buracos que as reservas não conseguiram tapar.",
        "Quarto, em Brohuset, a luta de cavalaria foi e voltou. Burensköld foi preso logo no início, mas reforços suecos empurraram os dinamarqueses.",
        "Quinto, no centro, os canhões leves dos regimentos suecos ([[artilharia de regimento]]) foram gastando a infantaria dinamarquesa.",
        "Sexto, Rantzau lutou em pessoa e levou um tiro no pulmão. Correu o boato de que a ala direita estava cercada, e ela se quebrou em direção a Helsingborg. Sem o comandante, o centro dinamarquês ficou sem direção.",
        "Sétimo, a guarda e os [[granadeiros]], postos nas pontas, não conseguiram segurar o centro. Von Dewitz tinha recebido ordem de ir para o leste e não estava onde devia, o que abriu uma brecha entre o centro e o oeste. A cavalaria sueca entrou por ela e cercou os granadeiros que restavam. Quando a cavalaria dinamarquesa recuou, a infantaria foi junto.",
        "Oitavo, só a [[guarda real a pé]] e os granadeiros continuaram resistindo antes de se retirar. Eickstedt ordenou a retirada geral, e os dinamarqueses correram para as fortificações de Helsingborg. A cavalaria sueca fez várias cargas e matou muitos dos que fugiam.",
        { note: "As baixas: as fontes dão cerca de 2.800 a 3.000 baixas suecas (897 mortos e 2.098 feridos na contagem mais detalhada) e, entre os dinamarqueses, 1.500 mortos, 3.500 feridos e 2.677 presos." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército dinamarquês perdeu mais de 7.500 homens e se fechou em Helsingborg. Stenbock decidiu não tomar a cidade de assalto. Um conselho de guerra sueco achou o exército fraco demais para isso, e ele a bombardeou. Von Dewitz recusou a rendição. Em 5 de março, os dinamarqueses abandonaram a Escânia, depois de matar os cavalos e inutilizar os canhões.",
        "A cidade ficou em ruínas. Cadáveres de gente e de animais contaminaram os poços, e uma epidemia de peste se espalhou pela região.",
        { h: "Por que importa" },
        "Foi a última tentativa dinamarquesa de reconquistar a Escânia pela força. A região é sueca desde então. O rei Frederico IV, que tinha ido a Helsingborg em 23 de fevereiro e voltou a Copenhague no dia seguinte, depois de mandar reforços, não estava lá.",
        "Stenbock virou herói nacional e, em maio de 1710, o Conselho do Reino o nomeou marechal de campo. Anos depois ele seria preso pelos dinamarqueses e morreria em cativeiro em Copenhague, em 1717.",
        { h: "Curiosidades e controvérsias" },
        { note: "As datas: em 1710 a Suécia usava o [[calendário sueco]], um dia à frente do juliano, e a Dinamarca já usava o [[calendário gregoriano]]. O mesmo dia é 28 de fevereiro para os suecos e 10 de março para os dinamarqueses. Os dois nomes aparecem nos livros." },
        { note: "As fontes: os relatos são em grande parte suecos e dinamarqueses, escritos depois por quem queria explicar a derrota ou a vitória. Os números de baixas variam um pouco de uma fonte para outra." }
      ]}
    ]
  },

  milnebay: {
    war: "Campanha de Papua (1942–1943), Segunda Guerra Mundial",
    hook: "Os japoneses desembarcaram achando que enfrentariam poucas centenas de homens e encontraram milhares, com aviões. Foi a primeira vez que o Japão largou um objetivo em terra e recuou.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo de 1942, o Japão tinha avançado por toda a Ásia e o Pacífico. A ponta leste da Nova Guiné, território sob administração australiana, ficava entre ele e a Austrália. Os japoneses queriam tomar Port Moresby, a base aliada na costa sul, e, em julho, desembarcaram na costa norte e começaram a atravessar as montanhas pela trilha de Kokoda.",
        "Os aliados, por sua vez, vinham construindo pistas de pouso na baía de Milne, uma enseada comprida na ponta da ilha, de onde os caças alcançariam as bases e os navios japoneses em Rabaul e nas ilhas Salomão. Os japoneses decidiram tomá-las.",
        { h: "O caminho até a baía de Milne" },
        { timeline: [
          ["25 jun 1942", "Chegam as primeiras tropas aliadas à baía."],
          ["22 e 25 jul", "Os primeiros Kittyhawk pousam na pista nº 1."],
          ["7 ago", "Os fuzileiros americanos desembarcam em Guadalcanal, o que desvia a atenção japonesa."],
          ["12–21 ago", "Chega a 18ª Brigada, de veteranos de Tobruk."],
          ["24 ago", "Os Kittyhawk destroem as barcaças de um grupo japonês que iria desembarcar em Taupota, perto da ilha Goodenough."],
          ["25 ago", "O comboio japonês chega à baía. É a batalha."],
          ["5 set", "Os japoneses ordenam a retirada."],
          ["7 set", "Termina a luta."]
        ]},
        "A baía de Milne é um lugar terrível para combater. São cerca de 5.100 mm de chuva por ano, com pântanos de mangue e rios que enchem de repente. A [[malária]] era tão comum que mais de um sexto da tropa aliada adoeceu, incluindo o comandante. O chão firme se concentra na cabeceira da baía, e por ele passa uma estrada de terra pelas plantações."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Cyril Clowes" },
        "Major-general australiano, comandante da Milne Force. Assumiu formalmente o comando em 22 de agosto, três dias antes do desembarque. Também adoeceu de malária.",
        { h: "Shojiro Hayashi" },
        "Comandante japonês da 5ª Força Naval Especial de Desembarque de Kure. Morreu no ataque à pista nº 3, na madrugada de 31 de agosto. Quem assumiu foi o comandante Minoru Yano, que acabou ferido. Em 2 de setembro, Yano avisou por rádio: 'Chegamos à pior situação possível'.",
        { h: "Os outros nomes" },
        "Do lado aliado, o brigadeiro John Field, da 7ª Brigada, e o brigadeiro George Wootten, da 18ª; o cabo John French, que ganhou postumamente a Cruz Vitória. Do lado japonês, o contra-almirante Mitsuharu Matsuyama comandava as forças navais, e o vice-almirante Gunichi Mikawa, a 8ª Frota, em Rabaul."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os aliados tinham cerca de 8.800 homens: 7.459 australianos e 1.365 americanos, dos quais uns 4.500 eram infantaria. A 7ª [[brigada australiana]] era de [[milícia]] (9º, 25º e 61º batalhões); a 18ª era de veteranos de Tobruk (2/9º, 2/10º e 2/12º). Os americanos eram sobretudo engenheiros, que construíam as [[pistas|pista de pouso]], e artilheiros antiaéreos. Os esquadrões 75 e 76 da RAAF voavam os [[kittyhawk]].",
        "Na primeira noite os japoneses desembarcaram entre cerca de 800 e mais de 1.000 homens das forças navais de Kure e Sasebo ([[SNLF|força naval especial de desembarque]]), com dois tanques leves. A contagem total, com os reforços, é de 1.943. O plano japonês supunha de 300 a 600 defensores.",
        { note: "Os números japoneses são os mais incertos: as fontes dão de cerca de 800 a mais de 1.000 homens na primeira noite e 1.943 no total, e esses valores não se conciliam bem." },
        { h: "O terreno" },
        "A planície na cabeceira da baía, com as pistas nº 1 (perto de Gili Gili) e nº 3 (perto de Kilarbo), cortada por rios e mangues, com a baía ao sul e as serras Stirling ao norte. A pista nº 1 tinha [[placas marston]] só num trecho e muitas vezes ficava debaixo d'água. A nº 3 ainda estava em obra.",
        { h: "A batalha em nove movimentos" },
        { formation: true },
        "Primeiro, na noite de 25 para 26 de agosto, o comboio japonês desembarcou cerca de 3 km a leste do ponto previsto. Os Kittyhawk atacaram durante o dia mas fizeram pouco dano. Os lugres que levavam a companhia D do 61º, atrasada em sua retirada, cruzaram com as barcaças e trocaram tiros.",
        "Segundo, em 26 de agosto os japoneses avançaram para o oeste com os dois tanques e esbarraram na companhia B do 61º Batalhão, na missão KB. Os australianos contra-atacaram, recuaram e, depois de um ataque noturno, se retiraram até o rio Gama. Os aviões queimaram suprimentos e barcaças encalhadas.",
        "Terceiro, em 27 de agosto, o 2/10º Batalhão, com cerca de 420 homens, foi mandado ao rio Gama. À noite, dois tanques com faróis acesos atacaram, e em poucas horas os japoneses estavam dentro da posição. Os australianos recuaram.",
        "Quarto, em 28 de agosto, o ataque com tanques empurrou o 2/10º até a pista nº 3, onde o 25º Batalhão segurou a linha. Ao amanhecer, os tanques atolaram na lama e foram abandonados. Os japoneses recuaram uns 2 km. Ao entardecer apareceram navios de reforço, e Clowes cancelou o contra-ataque que planejava e tirou os Kittyhawk da área, por precaução.",
        "Quinto, na noite de 29 de agosto, chegaram os reforços japoneses: 567 homens da 3ª Força de Kure e 200 da 5ª de Yokosuka, desembarcados em Waga Waga.",
        "Sexto, às 3h de 31 de agosto, os japoneses atacaram a pista nº 3. Metralhadoras, morteiros e artilharia os pararam em duas cargas [[banzai]]. Hayashi morreu. Yano tentou contornar a crista de Stephen, mas recuou antes do amanhecer.",
        "Sétimo, no mesmo dia, o 2/12º Batalhão contra-atacou pela costa norte e chegou à missão KB ao fim da tarde, depois de lutas à baioneta. À noite, uns 300 japoneses atacaram o rio Gama, e os australianos calcularam até 90 mortos.",
        "Oitavo, de 1º a 4 de setembro, o 2/9º foi levado de barcaça até a missão KB e avançou para leste. Em Goroni, em 4 de setembro, o cabo French destruiu dois ninhos de metralhadora com granadas e atacou um terceiro com uma submetralhadora. Foi mortalmente ferido. A essa altura, a força de Yano tinha cerca de 50 homens em condições de lutar, e todos os comandantes de companhia estavam mortos.",
        "Nono, em 5 de setembro, o comando japonês ordenou a retirada, feita por mar na mesma noite. Em 6 de setembro, o cruzador Tenryū e o contratorpedeiro Arashi bombardearam o porto e deixaram o cargueiro Anshun virado de lado. No dia 7, a luta terminou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Dos 1.943 japoneses desembarcados, navios da 18ª Divisão de Cruzadores retiraram 1.318, 311 deles feridos. As baixas japonesas são estimadas em cerca de 700 a 750 mortos pelas fontes australianas e 625 pela fonte japonesa (Tanaka). Os aliados tiveram 373 baixas, 167 delas mortos ou desaparecidos, mais 14 americanos mortos. Uns 350 japoneses ficaram presos na ilha Goodenough até o fim de outubro.",
        "A baía virou uma base importante para as operações seguintes, e a moral aliada subiu. O chefe de estado-maior da Frota Combinada japonesa, Ugaki, julgou que a tropa desembarcada era de baixa qualidade, com muitos homens mais velhos e de pouco ânimo.",
        { h: "Por que importa" },
        "O marechal britânico William Slim disse que os australianos 'infligiram aos japoneses a sua primeira derrota indiscutível em terra'. A ressalva é que revezes anteriores, como o de Tenaru, não tinham feito os japoneses largar a operação. Em Milne Bay, pela primeira vez, eles abandonaram o objetivo e recuaram.",
        { h: "Curiosidades e controvérsias" },
        { note: "O que 'primeira derrota' quer dizer: houve um revés japonês anterior, em 21 de agosto, quando os fuzileiros americanos destruíram o destacamento de Ichiki em Tenaru, em Guadalcanal. E no mesmo mês os australianos estavam sendo empurrados pela trilha de Kokoda, rumo a Port Moresby. A retirada japonesa de Kokoda só começou em 26 de setembro, entre outras razões por causa do fracasso em retomar Guadalcanal. Milne Bay foi um passo, não a virada sozinha." },
        { note: "Os japoneses cometeram atrocidades contra civis papuas durante a batalha: pelo menos 59 civis foram assassinados entre 25 de agosto e 6 de setembro. O historiador Mark Johnston argumenta que isso endureceu a atitude dos australianos até o fim da guerra. Nenhum japonês foi processado por Milne Bay." },
        { note: "O erro de cálculo: o plano japonês supunha de 300 a 600 defensores, e havia cerca de 4.500 homens de infantaria." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  helsingborg: {
    terrain: [
      { t: "sea", x: -4, y: 40, w: 14, h: 34, l: "Öresund" },
      { t: "hill", x: 34, y: 48, rx: 14, ry: 6, l: "Colinas de Ringstorp" },
      { t: "note", x: 12, y: 64, l: "Helsingborg" },
      { t: "note", x: 84, y: 38, l: "Brohuset" }
    ],
    units: [
      { id: "sInf", s: "a", k: "inf", w: 28, h: 5, l: "Infantaria sueca e canhões" },
      { id: "sCavW", s: "a", k: "cav", w: 14, h: 4, l: "Cavalaria sueca (oeste)" },
      { id: "sCavE", s: "a", k: "cav", w: 16, h: 4, l: "Cavalaria sueca (leste)" },
      { id: "dCavW", s: "b", k: "cav", w: 12, h: 4, l: "Cavalaria (Pålsjö)" },
      { id: "dInfW", s: "b", k: "inf", w: 16, h: 5, l: "Infantaria da esquerda (Dewitz)" },
      { id: "dInfC", s: "b", k: "inf", w: 22, h: 5, l: "Infantaria do centro" },
      { id: "dGd", s: "b", k: "inf", w: 12, h: 4, l: "Guarda a pé e granadeiros" },
      { id: "dCavE", s: "b", k: "cav", w: 14, h: 4, l: "Cavalaria da direita (Rodsteen)" }
    ],
    steps: [
      { t: "No nevoeiro, Stenbock chega pelo norte em cinco colunas. Os dinamarqueses esperavam o ataque em outra direção e estão numa linha de quase 3 km, com a artilharia nas colinas.",
        p: { sInf: [50, 12], sCavW: [27, 13], sCavE: [76, 13], dCavW: [14, 52], dInfW: [30, 56], dInfC: [54, 56], dGd: [70, 58], dCavE: [86, 52] } },
      { t: "O nevoeiro levanta e a artilharia dinamarquesa abre fogo. Rantzau reforça a ala esquerda, a oeste.",
        p: { dInfC: [50, 55], dInfW: [28, 53] } },
      { t: "Stenbock não ataca a ala esquerda: manda a cavalaria para o leste, para contornar a direita dinamarquesa.",
        p: { sCavE: [84, 24], sInf: [50, 18] } },
      { t: "Rantzau manda a cavalaria da direita ao encontro dela. O centro entende como avanço geral, e a linha dinamarquesa sai da posição protegida e vira para o norte.",
        p: { dCavE: [86, 36], dInfC: [52, 48], dInfW: [30, 50], dGd: [72, 52] } },
      { t: "Em Brohuset, a cavalaria luta nos dois sentidos. Burensköld é preso cedo, mas reforços suecos empurram os dinamarqueses para trás.",
        p: { sCavE: [84, 32], dCavE: [88, 42] } },
      { t: "No centro, os canhões dos regimentos suecos desgastam a infantaria dinamarquesa.",
        p: { sInf: [50, 28], dInfC: [52, 42] } },
      { t: "Rantzau é baleado no pulmão. Corre o boato de que a ala direita está cercada, e ela se quebra em direção a Helsingborg.",
        p: { dCavE: [78, 62] }, x: ["dCavE"] },
      { t: "Abre-se uma brecha entre o centro e o oeste. A cavalaria sueca entra por ela, e a cavalaria dinamarquesa recua; a infantaria do centro se desfaz.",
        p: { sCavW: [32, 40], dCavW: [14, 62], dInfC: [46, 58] }, x: ["dCavW", "dInfC"] },
      { t: "A guarda a pé e os granadeiros resistem por último. Eickstedt manda a retirada geral, e os dinamarqueses correm para as fortificações de Helsingborg.",
        p: { sInf: [50, 40], sCavE: [70, 46], dGd: [58, 52], dInfW: [26, 62] }, x: ["dGd", "dInfW"] }
    ]
  },

  milnebay: {
    terrain: [
      { t: "sea", x: -4, y: 52, w: 108, h: 24, l: "" },
      { t: "note", x: 50, y: 66, l: "Baía de Milne" },
      { t: "hill", x: 50, y: 2, rx: 54, ry: 10, l: "Serras Stirling" },
      { t: "note", x: 10, y: 34, l: "Gili Gili" },
      { t: "note", x: 34, y: 34, l: "Pista nº 3" },
      { t: "note", x: 52, y: 34, l: "Rio Gama" },
      { t: "note", x: 70, y: 34, l: "Missão KB" },
      { t: "note", x: 90, y: 34, l: "Waga Waga" }
    ],
    units: [
      { id: "aBase", s: "a", k: "camp", w: 14, h: 5, l: "Pista nº 1 e base aérea" },
      { id: "a61", s: "a", k: "inf", w: 9, h: 4, l: "61º Batalhão (milícia)" },
      { id: "a25", s: "a", k: "inf", w: 9, h: 4, l: "25º Batalhão" },
      { id: "a210", s: "a", k: "inf", w: 9, h: 4, l: "2/10º Batalhão" },
      { id: "a212", s: "a", k: "inf", w: 9, h: 4, l: "2/12º Batalhão" },
      { id: "a29", s: "a", k: "inf", w: 9, h: 4, l: "2/9º Batalhão" },
      { id: "jMain", s: "b", k: "inf", w: 12, h: 5, l: "Força japonesa (SNLF)" },
      { id: "jTank", s: "b", k: "car", w: 6, h: 3, l: "Dois tanques leves" },
      { id: "jRein", s: "b", k: "inf", w: 10, h: 4, l: "Reforços (29 ago)" },
      { id: "jShip", s: "b", k: "ship", w: 3.4, h: 3.4, l: "Comboio japonês" }
    ],
    steps: [
      { t: "Na noite de 25 para 26 de agosto, o comboio japonês desembarca cerca de 3 km a leste do ponto previsto. Os australianos estão espalhados da pista nº 1 à missão KB.",
        p: { aBase: [10, 42], a61: [66, 40], a25: [36, 42], a210: [22, 44], a212: [14, 46], a29: [10, 48], jMain: [86, 40], jTank: [92, 44], jShip: [88, 60], jRein: [97, 56] }, },
      { t: "Em 26 de agosto, os japoneses avançam para oeste com os tanques e batem na companhia B do 61º, na missão KB. Os australianos recuam até o rio Gama, e os aviões queimam suprimentos e barcaças.",
        p: { jMain: [70, 40], jTank: [76, 43], a61: [54, 40] } },
      { t: "Em 27 de agosto, o 2/10º é mandado ao rio Gama. À noite, dois tanques com faróis acesos atacam, e os japoneses entram na posição. Os australianos recuam.",
        p: { a210: [50, 42], jMain: [54, 40], jTank: [58, 43], a61: [44, 42] } },
      { t: "Em 28 de agosto, o 2/10º é empurrado até a pista nº 3, onde o 25º segura a linha. Ao amanhecer, os tanques atolam na lama e são abandonados.",
        p: { a210: [38, 42], a25: [34, 40], a61: [30, 44], jMain: [44, 40], jTank: [40, 43] }, x: ["jTank"] },
      { t: "Os japoneses recuam uns 2 km. Na noite de 29 de agosto, chegam os reforços e desembarcam em Waga Waga.",
        p: { jMain: [58, 40], jRein: [90, 42], jShip: [92, 60] } },
      { t: "Às 3h de 31 de agosto, os japoneses atacam a pista nº 3. Metralhadoras, morteiros e artilharia os param em duas cargas banzai. Hayashi morre.",
        p: { jMain: [44, 40], jRein: [70, 40] } },
      { t: "No mesmo dia, o 2/12º contra-ataca pela costa norte e chega à missão KB, depois de lutas à baioneta.",
        p: { a212: [66, 40], jMain: [78, 42], jRein: [88, 42] } },
      { t: "De 1º a 4 de setembro, o 2/9º avança para leste, de barcaça e a pé. Em Goroni, o cabo French destrói ninhos de metralhadora e morre. Restam uns 50 japoneses em condições de lutar.",
        p: { a29: [74, 42], a212: [82, 40], jMain: [92, 42], jRein: [96, 44] } },
      { t: "Em 5 de setembro, o comando japonês ordena a retirada, feita por mar na mesma noite. Em 6 de setembro, o cruzador Tenryū bombardeia o porto, e em 7 de setembro a luta termina.",
        p: { jShip: [94, 60] }, x: ["jMain", "jRein"] }
    ]
  }
});
