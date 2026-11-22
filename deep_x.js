// batch x: maipu, boyaca, carabobo, pichincha, piraja, jenipapo
Object.assign(GLOSSARY, {
  "baioneta": "Lâmina presa na ponta do fuzil. Transforma a arma de fogo numa lança curta e permite lutar corpo a corpo depois de a arma ser descarregada.",
  "llaneros": "Vaqueiros dos llanos, as planícies imensas da Venezuela e da Colômbia. Cavalgavam desde crianças e lutavam com lança. Lutaram primeiro pelo rei, depois, sob José Antonio Páez, pela independência.",
  "lanceiros": "Cavaleiros armados com lança. Na América do Sul, eram a cavalaria típica dos llanos: rápidos, baratos e muito eficazes numa carga.",
  "realistas": "Os que lutavam pela Coroa espanhola nas guerras de independência. Muitos soldados realistas eram americanos, nascidos na própria América do Sul, e não espanhóis.",
  "patriotas": "Os que lutavam pela independência das colônias contra o domínio europeu.",
  "páramo": "Planalto frio, úmido e ventoso dos Andes, acima de uns 3.000 metros, coberto de capim e neblina e sem árvores.",
  "legião britânica": "Voluntários britânicos e irlandeses, muitos deles veteranos das guerras contra Napoleão, que vieram lutar ao lado de Bolívar. Um dos batalhões deles ficou conhecido como Albión.",
  "granadeiros a cavalo": "Regimento de cavalaria de elite criado por San Martín, que lutou em Chacabuco e em Maipú.",
  "armistício": "Acordo para parar de lutar por um tempo combinado, sem ainda ser a paz.",
  "capitulação": "Rendição negociada, com condições combinadas entre os dois lados, como entregar as armas e a bandeira.",
  "milícia": "Cidadãos armados em tempo de guerra, com pouco treino e equipamento. Servem perto de casa e reforçam o exército regular.",
  "caçadores": "Nome de unidades de infantaria ou cavalaria ligeira, mais móveis que a tropa comum, usadas para abrir o combate e proteger os flancos.",
  "gran colômbia": "República criada em 1819 pelos patriotas, reunindo Venezuela, Nova Granada (a Colômbia de hoje) e, depois, Quito (o Equador). Durou até 1830.",
  "exército dos andes": "O exército montado por San Martín em Mendoza, que atravessou a cordilheira em 1817 para libertar o Chile.",
  "corneteiro": "Soldado que toca a corneta, o jeito de passar ordens como avançar, recuar ou atacar no meio do barulho da batalha.",
  "chuço": "Pau comprido com uma ponta de ferro, uma lança improvisada.",
  "vaqueiro": "Homem que cuida do gado a cavalo no sertão. Acostumado ao mato e ao cavalo, mas sem treino militar."
});

Object.assign(DEEP, {
  maipu: {
    war: "Guerras de independência da América do Sul: campanha do Chile (1817–1818)",
    hook: "Em 17 dias, um exército derrotado e disperso se refez e destruiu os espanhóis que vinham atrás dele.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1818, a América do Sul espanhola estava em guerra. Entre 1810 e 1814, o Chile tinha se governado por conta própria, mas os [[realistas]] retomaram o país na batalha de Rancagua, em outubro de 1814. Os [[patriotas]] que escaparam atravessaram os Andes e se refugiaram em Mendoza, onde o governador José de San Martín começou a montar um exército para voltar.",
        "Esse [[exército dos andes]] cruzou a cordilheira no começo de 1817 e venceu em Chacabuco, em 12 de fevereiro. Bernardo O'Higgins ficou como Diretor Supremo do Chile, e a independência foi proclamada um ano depois, em 12 de fevereiro de 1818. Mas a Espanha ainda mandava tropas do Peru para recuperar o país.",
        { h: "O caminho até Maipú" },
        { timeline: [
          ["Outubro de 1814", "Os realistas vencem em Rancagua e reconquistam o Chile."],
          ["12 de fevereiro de 1817", "San Martín vence em Chacabuco, depois de atravessar os Andes."],
          ["12 de fevereiro de 1818", "O Chile proclama a independência."],
          ["19 de março de 1818", "Na noite de Cancha Rayada, o general espanhol Mariano Osorio derrota e dispersa o exército patriota. O'Higgins é ferido."],
          ["2 de abril", "Os patriotas saem do acampamento de Ochagavía e ocupam as colinas baixas perto de Maipú."],
          ["4 de abril", "Osorio se instala em Lo Espejo, a uns sete quilômetros dali, ao anoitecer."]
        ]},
        "Depois de Cancha Rayada, o exército patriota estava espalhado e Santiago, em pânico, com Osorio marchando sobre a capital. Em pouco mais de duas semanas, San Martín reuniu os soldados e reorganizou tudo em três divisões. O'Higgins, mesmo ferido, juntou armas, acelerou os suprimentos e organizou um campo de treino."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "José de San Martín, 40 anos" },
        "Nascido na atual Argentina, serviu mais de 20 anos no exército espanhol antes de voltar à América para lutar contra a Espanha. Tinha um plano de longo prazo: libertar o Chile e, de lá, atacar o Peru, centro do poder espanhol. Perder o Chile seria perder o plano inteiro. Em Maipú, esperou os espanhóis nas colinas e guardou uma [[reserva]] para jogar quando a luta empacasse.",
        { h: "Bernardo O'Higgins, 39 anos" },
        "Chileno, Diretor Supremo e comandante da parte chilena do exército. Foi ferido em Cancha Rayada e ainda se recuperava. Reuniu em Santiago cerca de mil milicianos e chegou ao campo já no fim da batalha.",
        { h: "Mariano Osorio" },
        "General espanhol, vencedor em Cancha Rayada. Perseguiu os patriotas até Lo Espejo, onde chegou ao anoitecer de 4 de abril, e se posicionou na defensiva no dia seguinte. Saiu do campo antes do fim da batalha.",
        { h: "Os outros nomes" },
        "Do lado patriota, Juan Gregorio de Las Heras comandava a primeira divisão (a direita), Rudecindo Alvarado a segunda (a esquerda) e Hilarión de la Quintana a reserva. José Matías Zapiola comandava os [[granadeiros a cavalo]] e Manuel Blanco Encalada e Borgoño, a [[artilharia]]. O exército realista tinha três brigadas: José Ordóñez na direita, Lorenzo López de Morla no centro e Joaquín Primo de Rivera na esquerda."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os dois exércitos tinham perto de 5.000 homens. Os patriotas, 21 canhões; os realistas, 12. As estimativas variam bastante: de 4.600 a 9.000 patriotas e de 4.500 a 10.000 realistas, conforme se contem ou não as milícias.",
        { note: "Usamos 'cerca de 5.000' para cada lado, o número mais comum nas obras de referência. As milícias de O'Higgins chegaram só no fim da batalha." },
        { h: "O terreno" },
        "As colinas baixas perto de Maipú, a poucos quilômetros de Santiago, com a estrada para Valparaíso passando ao lado. Os patriotas ocuparam as colinas do seu lado ao amanhecer de 5 de abril, com Santiago atrás. Osorio se posicionou numa elevação perto da fazenda de Lo Espejo. A fazenda, com suas casas, ia importar no fim.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, os canhões. Por volta das 11h30 da manhã, a artilharia patriota abriu fogo e a realista respondeu, sem que nenhum dos lados sofresse baixas. San Martín viu que os realistas tinham ficado na defensiva.",
        "Segundo, o avanço. Meia hora depois, mandou Las Heras e Alvarado para a frente. A infantaria marchou em colunas, sem atirar. Las Heras bateu na esquerda realista, em Primo de Rivera; Alvarado, na direita, em Ordóñez. Os granadeiros de Zapiola foram atingidos pela cavalaria espanhola e recuaram sob fogo pesado, mas voltaram reforçados e dispersaram os cavaleiros inimigos.",
        "Terceiro, o impasse. Os ataques de frente empacaram. San Martín soltou então a reserva de Quintana contra o centro e os [[flancos|flanco]]. Os esquadrões de caçadores a cavalo de Freire derrotaram a cavalaria espanhola do outro lado do campo, e nessa carga morreu o coronel Santiago Bueras.",
        "Quarto, a quebra. Las Heras e alguns granadeiros tomaram a colina da esquerda realista. Essa pressão, somada a um ataque oblíquo contra a direita e o centro, partiu a linha espanhola. Alguns historiadores comparam a manobra com a [[linha oblíqua]] de Epaminondas, o general tebano. Osorio deixou o campo com a cavalaria e o comando passou a Ordóñez.",
        "Quinto, a resistência. Ordóñez não aceitou a derrota. Reuniu os batalhões que restavam (entre eles Burgos, Arequipa, Concepción e Infante Dom Carlos), que se formaram em [[quadrado]] e aguentaram várias cargas de cavalaria. Recuaram em ordem para a fazenda de Lo Espejo, mesmo sob a [[metralha]] dos canhões patriotas. Segundo relatos, o Burgos se gabava de ter 18 vitórias e nenhuma derrota.",
        "Sexto, a fazenda. O batalhão de Coquimbo atacou a posição de frente e foi rechaçado com muitas perdas. Os milicianos de O'Higgins chegaram nessa altura. San Martín então concentrou cerca de 17 canhões contra as casas de Lo Espejo e mandou o assalto final. Ordóñez e Primo de Rivera se renderam, e as milícias prenderam os soldados espalhados pelo campo."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os números variam muito. Entre os espanhóis, as obras de referência falam em 1.000 a 2.000 mortos e entre 1.400 e 2.300 prisioneiros. Relatos da época chegam a 3.000 prisioneiros e 2.000 mortos, o que os historiadores consideram exagero. Os patriotas perderam entre 1.000 e 1.900 homens, mortos e feridos, cerca de um terço do exército. Osorio chegou a Talcahuano com cerca de 600 homens, segundo um relato; outros dizem que, com as deserções, sobraram só uns 90.",
        "Maipú pôs fim às grandes operações espanholas no Chile. A notícia chegou a Buenos Aires poucos dias depois e foi recebida com festa.",
        { h: "Por que importa" },
        "Com o Chile garantido, chilenos e argentinos puderam preparar a ofensiva pela costa do Pacífico contra o Peru, a fortaleza do poder espanhol. Os historiadores costumam colocar Maipú ao lado de Boyacá e Ayacucho entre as batalhas que decidiram a independência sul-americana. Todo 5 de abril há um desfile em Maipú, e a data é o Dia dos Blindados do exército chileno.",
        { h: "Curiosidades e controvérsias" },
        { note: "O abraço de Maipú: segundo a tradição, no fim do dia O'Higgins, ainda ferido, abraçou San Martín e disse 'Glória ao salvador do Chile!'. A cena virou símbolo da aliança entre Chile e Argentina, e até um refúgio na Antártida leva o nome." },
        { note: "Os Húsares da Morte: os historiadores discutem se o corpo comandado por Manuel Rodríguez participou da batalha ou ficou de fora. Fontes antigas e novas discordam." },
        { note: "O respeito pelo inimigo: San Martín elogiou a resistência dos realistas, dizendo que uma tenacidade assim raramente se via." }
      ]}
    ]
  },

  boyaca: {
    war: "Campanha Libertadora da Nova Granada (1819)",
    hook: "Depois de atravessar os Andes, os patriotas desmontaram uma divisão espanhola numa tarde e perderam 13 homens.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1819, a guerra de independência já durava nove anos. A Nova Granada (a Colômbia de hoje) era um vice-reino espanhol, governado pelo vice-rei Juan de Sámano. Simón Bolívar e José Antonio Páez resistiam nos llanos, as planícies do interior da Venezuela.",
        "Bolívar decidiu fazer o que ninguém esperava: atravessar os Andes e cair sobre Bogotá, capital da Nova Granada, vindo por um caminho que os espanhóis não vigiavam. A marcha começou nos llanos, na época das chuvas, com rios cheios e terra alagada. O pior estava mais adiante.",
        { h: "O caminho até Boyacá" },
        { timeline: [
          ["Início de julho de 1819", "O exército cruza o [[páramo]] de Pisba, a perto de 4.000 metros de altitude, e chega a Socha em péssimo estado."],
          ["25 de julho", "No Pantano de Vargas, Bolívar vence por pouco o coronel espanhol José María Barreiro."],
          ["3 de agosto", "Bolívar finge que vai cruzar o rio Chicamocha, volta de noite e toma a estrada de Toca, rumo a Tunja."],
          ["4 de agosto", "Os patriotas ocupam Tunja e capturam cerca de 600 fuzis."],
          ["7 de agosto", "Batalha da ponte de Boyacá."]
        ]},
        "A travessia de Pisba custou caro. Segundo uma das fontes, morreram uns 100 homens, uns 500 adoeceram e o exército perdeu cavalos, gado e munição. Em Vargas, os espanhóis atacaram antes de os patriotas receberem os reforços que vinham da região de Boyacá e Santander. A tomada de Tunja cortou a comunicação dos espanhóis com Bogotá."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Simón Bolívar, 36 anos" },
        "Nascido em Caracas, tinha perdido a Venezuela duas vezes e recomeçado duas vezes. A campanha de 1819 era uma aposta: sem uma vitória na Nova Granada, a guerra ficaria presa nos llanos. Em Boyacá, a ideia foi a de sempre: aparecer onde o inimigo não esperava e cortar o caminho até a capital.",
        { h: "Francisco de Paula Santander e José Antonio Anzoátegui" },
        "Santander, de 27 anos, neogranadino, comandava a vanguarda. Anzoátegui, venezuelano, comandava a retaguarda. Os dois foram promovidos a general de divisão depois da vitória. O chefe do Estado-Maior era Carlos Soublette.",
        { h: "José María Barreiro" },
        "Coronel espanhol, comandante da Terceira Divisão do exército expedicionário. O vice-rei Sámano o mandou barrar Bolívar antes de Bogotá. Depois de Vargas, perdeu a corrida para Tunja e acabou tentando voltar a Bogotá por um caminho em que o inimigo já esperava.",
        { h: "Outros nomes" },
        "Do lado patriota, o tenente-coronel Juan José Rondón comandava os lanceiros, os [[llaneros]] que tinham virado o jogo em Vargas. Do lado espanhol, Francisco Jiménez comandava a vanguarda, Víctor Sierra a cavalaria e o coronel Juan Tolrá uma das colunas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os patriotas tinham cerca de 2.850 homens: uns 1.000 na vanguarda de Santander, 1.050 na retaguarda de Anzoátegui e 800 na reserva de Bolívar. Entre eles, soldados da [[legião britânica]] e llaneros. Os realistas tinham cerca de 2.670, numa das contagens (2.300 de infantaria, 350 de cavalaria e 20 artilheiros). As estimativas antigas falam em 2.000 patriotas e 2.900 realistas; as modernas, em 2.850 a 2.900 e 2.670 a 3.500.",
        { note: "Usamos os números mais citados: cerca de 2.850 patriotas e 2.670 realistas. Outras contagens divergem, sobretudo para os realistas." },
        { h: "O terreno" },
        "A ponte de Boyacá, sobre o riacho Teatinos, onde a estrada de Samacá encontra o Caminho Real entre Tunja e Bogotá. Bolívar soube por espiões que os espanhóis voltariam a Bogotá por Samacá e decidiu esperá-los na ponte. Perto dali ficava a Casa de Teja, onde aconteceu o primeiro choque.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, a marcha. Barreiro saiu de Motavita às 3h30 da manhã de 7 de agosto, rumo a Casa de Teja. Bolívar, que olhava dos altos de San Lázaro, mandou Santander e Anzoátegui interceptá-lo. Perto do meio-dia, a vanguarda espanhola de Jiménez parou para descansar e comer perto da ponte.",
        "Segundo, o choque. Por volta das 14h, uma patrulha patriota do capitão Andrés Ibarra esbarrou na vanguarda espanhola em Casa de Teja. Santander chegou com a [[vanguarda]] patriota e empurrou os espanhóis de volta para o outro lado da ponte.",
        "Terceiro, a divisão. O corpo principal de Barreiro apareceu pela estrada de Samacá e esbarrou na [[retaguarda]] de Anzoátegui. Havia agora dois combates ao mesmo tempo, um perto da ponte e outro na planície. O exército espanhol estava cortado em dois, pelo riacho e pela coluna patriota que ficou no meio. Os patriotas, ao contrário, se comunicavam bem entre si.",
        "Quarto, o centro. Rondón atacou pelo centro com seus [[lanceiros]], e a cavalaria espanhola se desfez. Barreiro e seus oficiais desmontaram para tentar reagrupar a tropa.",
        "Quinto, a manobra decisiva. Santander mandou os guias de Casanare, de José María Ruiz, atravessar o riacho e atacar a vanguarda de Jiménez pelas costas. Dois esquadrões realistas foram derrotados. Em seguida, os batalhões de [[caçadores]] e o Primeiro de Linha, de Joaquín París e Antonio Obando, tomaram a ponte. Santander liderou uma carga de [[baioneta]] pela ponte, e o coronel Tolrá morreu ali.",
        "Sexto, o cerco. Barreiro se manteve na defensiva, mas suas tropas estavam cercadas. A vanguarda e a retaguarda espanholas se renderam. A batalha terminou um pouco depois das 16h30. Barreiro foi capturado no mesmo dia."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os patriotas perderam 13 mortos e 53 feridos. Os realistas, mais de 100 mortos, 150 feridos e cerca de 1.600 prisioneiros. A Terceira Divisão deixou de existir. A maioria dos prisioneiros eram soldados americanos, venezuelanos e neogranadinos, e muitos acabaram no exército patriota.",
        "Sámano soube da derrota por volta das 22h de 8 de agosto e fugiu de Bogotá no dia 9, disfarçado de camponês, deixando para trás documentos e cerca de 900.000 pesos. Bolívar entrou na cidade no dia 10, sem resistência. Barreiro e outros 37 ou 38 oficiais espanhóis foram executados em Bogotá em 11 de outubro de 1819, por ordem de Santander.",
        { h: "Por que importa" },
        "O poder espanhol na região central da Nova Granada desmoronou. Em dezembro de 1819, foi criada a [[gran colômbia]]. O caminho estava aberto para Carabobo, Pichincha, Junín e Ayacucho. O 7 de agosto é feriado nacional na Colômbia e Dia do Exército.",
        { h: "Curiosidades e controvérsias" },
        { note: "O menino que prendeu o comandante: segundo a tradição, Pedro Pascasio Martínez, de 11 anos, e um soldado chamado José capturaram Barreiro, e o menino recusou um suborno em ouro. Prometeram a ele 300 pesos que nunca chegaram. A idade é tratada como lenda." },
        { note: "As horas: a batalha costuma ser descrita como de 'pouco mais de duas horas', mas os horários citados (de cerca das 14h até depois das 16h30) somam mais de duas horas e meia." },
        { note: "O salvador de Vargas: segundo o relato tradicional, em 25 de julho Bolívar achava a batalha perdida quando Rondón disse que seus lanceiros ainda não tinham lutado. Bolívar mandou: 'Coronel, salve a pátria!'. A carga que veio em seguida virou o jogo." }
      ]}
    ]
  },

  carabobo: {
    war: "Guerras de independência da América do Sul: campanha da Venezuela (1821)",
    hook: "Uma trilha pelo flanco, um punhado de britânicos e os lanceiros dos llanos: a batalha que fez a Venezuela independente.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1821, a guerra na Venezuela já durava onze anos. Depois de perder o país pela segunda vez, em 1814, Bolívar recomeçou do zero, e em 1819, depois de Boyacá, os patriotas criaram a [[gran colômbia]]. A Espanha, por sua vez, estava enfraquecida: em 1820, a revolta liberal de Riego desfez a expedição que ia reforçar a América.",
        "Naquele ano, Bolívar fechou um [[armistício]] com o general espanhol Pablo Morillo. Ele terminou em 28 de abril de 1821 sem que se chegasse à paz. Do lado espanhol, quem comandava era agora o marechal de campo Miguel de la Torre.",
        { h: "O caminho até Carabobo" },
        { timeline: [
          ["1819", "Boyacá liberta a Nova Granada e nasce a Gran Colômbia."],
          ["1820", "Armistício entre Bolívar e Morillo."],
          ["28 de abril de 1821", "O armistício acaba. Bolívar reúne as forças em San Carlos."],
          ["15 de junho", "Bolívar reorganiza o exército em três divisões: Páez, Cedeño e Plaza."],
          ["23 de junho", "As divisões se reúnem em Tinaquillo."],
          ["24 de junho", "Batalha de Carabobo."]
        ]},
        "Enquanto Bolívar se concentrava em San Carlos, outros comandantes patriotas preparavam o terreno. Bermúdez fez uma manobra de diversão em direção a Caracas, que atraiu parte das tropas realistas. Páez avançou do Apure e Urdaneta tomou Barquisimeto. Plaza tomou Barinas e seguiu para o centro do país."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Simón Bolívar, 37 anos" },
        "Em Carabobo, ele fez o que sabia: olhou o terreno e mudou o plano ao ver a posição inimiga. Em vez de atacar de frente uma linha que considerava inacessível, deslocou as divisões para virar a direita realista.",
        { h: "José Antonio Páez, cerca de 30 anos" },
        "Comandante dos [[llaneros]], os vaqueiros dos llanos de Apure. Comandava a primeira divisão, com o batalhão Bravos de Apure, o batalhão britânico e 1.500 cavaleiros. Segundo o relatório de Bolívar, foi promovido a general em chefe no próprio campo de batalha.",
        { h: "Miguel de la Torre" },
        "Marechal de campo espanhol, com cerca de 5.000 a 6.300 homens, a maioria venezuelanos. Cobria as estradas para San Carlos e El Pao, a partir de posições nas alturas. Seus subordinados incluíam Francisco Tomás Morales e Tomás García.",
        { h: "Os outros nomes" },
        "Manuel Cedeño comandava a segunda divisão e Ambrosio Plaza, a terceira, com o regimento de lanceiros do coronel Rondón. A [[legião britânica]], com cerca de 350 homens, tinha como comandante o coronel Ferriar (o nome aparece escrito de várias formas)."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As estimativas variam muito. Os patriotas aparecem com 6.500 a 8.000 homens numa obra e com cerca de 10.000 em outra; Bolívar escreveu que os dois exércitos eram iguais em número, e que um quinto do dele decidiu a batalha. Os realistas: de 5.000 a 6.300, e mais de 6.000 segundo Bolívar. A divisão de Páez tinha os Bravos de Apure, o batalhão britânico e 1.500 cavaleiros; a de Cedeño, o batalhão Tiradores, o Boyacá e o Vargas e o Esquadrão Sagrado; a de Plaza, os batalhões Rifles, Granadeiros, Vencedor de Boyacá e Anzoátegui e a cavalaria de Rondón.",
        { note: "Os números de Carabobo variam muito entre as fontes. Usamos as faixas das obras de referência e o relatório de Bolívar, que é a fonte direta mais próxima do fato." },
        { h: "O terreno" },
        "Uma região acidentada perto de Valencia, onde os realistas ocupavam as alturas e cobriam as estradas de San Carlos e El Pao. De Buenavista, Bolívar avaliou o terreno e julgou que a frente e o sul eram inacessíveis. Sobrava o flanco leste: a direita do exército realista.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, a decisão. Na manhã de 24 de junho, Bolívar examinou a posição inimiga e mudou o plano: as divisões deslocaram-se para o leste, para virar a direita realista, enquanto Plaza avançava em direção ao centro.",
        "Segundo, o flanco. Por volta das 11h, segundo o relatório de Bolívar, o exército passou pela frente inimiga sob fogo e atravessou um riacho estreito. Páez, com dois batalhões e a cavalaria de Muñoz, avançou contra a direita do inimigo. Relatos regionais dizem que moradores da região mostraram o caminho e abriram uma trilha, o que permitiu surpreender os espanhóis por trás.",
        "Terceiro, o contra-ataque. La Torre mandou o batalhão Burgos contra os Bravos de Apure, que recuaram duas vezes. O batalhão britânico segurou o Burgos e perdeu o comandante e 17 oficiais superiores. Isso deu tempo aos Bravos de se reorganizarem e contra-atacarem.",
        "Quarto, o centro. A divisão de Cedeño ficou presa pelo terreno, e só uma parte do batalhão Tiradores, sob o comandante Heras, chegou a entrar. Cedeño carregou sozinho contra uma massa de infantaria e morreu. Plaza carregou contra um batalhão para obrigá-lo a se render e também morreu. Bolívar elogiou os dois em seu relatório.",
        "Quinto, a quebra. A cavalaria patriota entrou pelo norte, e a cavalaria realista se retirou ou desobedeceu a ordens. A direita realista desmoronou, atacada pela frente e pelo flanco. Segundo Bolívar, o inimigo foi cercado e cortado em meia hora.",
        "Sexto, a fuga. O 1.º batalhão de Valencey formou em [[quadrado]] e recuou em ordem. O resto do exército fugiu em direção a Valencia e Puerto Cabello, com os patriotas atrás. Segundo Bolívar, uns 400 homens entraram em Puerto Cabello naquele dia."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas realistas foram de 2.908 entre mortos, feridos e prisioneiros. As patriotas, de 200 a 300 mortos e feridos, segundo Bolívar e as obras modernas, embora o número mais baixo seja considerado pouco plausível. Uma das fontes fala em 119 mortos entre os britânicos. O coronel Rangel foi mandado a Puerto Cabello para montar uma linha de cerco.",
        { h: "Por que importa" },
        "Os historiadores consideram Carabobo a batalha mais importante para a independência da Venezuela. O que sobrou do exército realista recuou para Puerto Cabello, que só caiu em novembro de 1823; a vitória naval no lago Maracaibo veio em julho de 1823. A Venezuela passou a fazer parte da Gran Colômbia. O 24 de junho é feriado nacional e Dia do Exército.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os dois Carabobos: o nome também designa uma batalha de 1814, e por isso a de 1821 aparece em alguns livros como 'segunda batalha de Carabobo'." },
        { note: "O nome do coronel britânico: aparece como Ferriar, Ferrier e Farriar nas fontes. Bolívar o cita no relatório como Farriar." },
        { note: "O elogio: Bolívar escreveu que aquele era o maior e mais belo exército que já tinha lutado na Colômbia. Segundo uma das fontes, Bolívar chamou a Legião Britânica de 'salvadores da minha pátria'." }
      ]}
    ]
  },

  pichincha: {
    war: "Guerras de independência da América do Sul: campanha do Equador (1820–1822)",
    hook: "Subiram um vulcão de noite, na chuva, e a batalha foi decidida por um batalhão que chegou atrasado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Quito, a capital da antiga Real Audiência, tinha tentado se libertar em 1809, mas o levante foi esmagado. A ideia de independência voltou em 1820: Guayaquil declarou-se independente em 9 de outubro e Cuenca a seguiu em 3 de novembro, com um exército de mais de mil homens. Mas as duas primeiras campanhas contra os [[realistas]], em 1820 e 1821, falharam.",
        "Para a terceira, Bolívar mandou o general Antonio José de Sucre, seu braço direito. Sucre escolheu um caminho indireto, evitando as posições espanholas fortificadas.",
        { h: "O caminho até Pichincha" },
        { timeline: [
          ["9 de outubro de 1820", "Guayaquil declara a independência."],
          ["21 de fevereiro de 1822", "Sucre retoma Cuenca."],
          ["28 de abril", "O exército sai de Riobamba rumo a Ambato e Latacunga. Sucre evita a posição espanhola de Tiopullo, seguindo pelo flanco esquerdo."],
          ["17 de maio", "Chega perto de Sangolquí e recebe o general José Mires, que tinha escapado do cativeiro em Quito."],
          ["22 de maio", "Acampa em Chillogallo, ao sul de Quito."],
          ["23 de maio", "Marcha de noite para subir o Pichincha."]
        ]},
        "Os realistas, comandados por Melchor Aymerich, presidente da Real Audiência, perceberam o movimento e voltaram para Quito para reorganizar a defesa. Sucre ficou diante de posições defensivas nas colinas de Puengasí e no Panecillo, e decidiu dar a volta por trás."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Antonio José de Sucre, 27 anos" },
        "Venezuelano, o jovem tenente de Bolívar. O plano de Pichincha era dele: não atacar as posições fortificadas, chegar por trilhas pouco usadas às encostas do Pichincha, atrás do inimigo, e impedir que o batalhão Cataluña, que vinha do norte, reforçasse Aymerich.",
        { h: "Melchor Aymerich" },
        "Presidente da Real Audiência de Quito e comandante realista. Tinha recebido a informação de que o inimigo demoraria mais a chegar, e a estimativa se mostrou errada: os espanhóis tiveram de combater antes do previsto.",
        { h: "Os outros nomes" },
        "Andrés de Santa Cruz comandava a divisão peruana e o batalhão Trujillo. O batalhão Albión era formado por voluntários britânicos e de outros países. O tenente Abdón Calderón, jovem de cerca de 17 anos, ficou famoso pela coragem."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Sucre tinha cerca de 2.971 homens, vindos da Grã-Colômbia, do Peru, de Guayaquil, da Argentina e do Chile, mais voluntários britânicos. Aymerich mandou subir a montanha com 1.894 homens, segundo uma das fontes. As estimativas variam: de menos de 2.000 a 3.500 homens para cada lado, dependendo da obra.",
        { note: "Usamos 'cerca de 3.000' e 'cerca de 1.900', que são os números mais citados." },
        { h: "O terreno" },
        "As encostas do vulcão Pichincha, a uns 3.500 metros de altitude, ao lado de Quito. Havia só uma faixa estreita e inclinada, que descartava cavalaria e artilharia. A batalha foi decidida por infantaria com fuzis e baionetas, em ar rarefeito.",
        { h: "A batalha em quatro movimentos" },
        "Primeiro, a subida. A coluna saiu de Chillogallo de noite, com o batalhão Alto Magdalena na frente, seguido do Trujillo, do Piura, do Yaguachi e do Paya. Na retaguarda iam o Albión, a cavalaria e a [[artilharia]]. A chuva e a altitude tornaram o avanço lento. Ao nascer do sol, os realistas viram os patriotas.",
        "Segundo, o choque. Por volta das 8h, as primeiras tropas patriotas chegaram a El Campamento. Uma descarga realista atingiu a [[vanguarda]]. Os batalhões da frente, entre eles Paya, Trujillo e Yaguachi, sofreram muitas baixas e recuaram, e a situação ficou crítica. As tropas foram entrando no combate aos poucos, dos dois lados.",
        "Terceiro, o Albión. O batalhão Aragón, o melhor do exército espanhol, tinha subido acima da linha patriota e estava prestes a atacar suas costas, quando o Albión, que vinha atrás, chegou e o deteve. O Magdalena se juntou à luta. O Aragón se desfez, e a linha realista cedeu.",
        "Quarto, a vitória. Perto do meio-dia, depois de cerca de três horas de combate, Aymerich ordenou a retirada. Os realistas se refugiaram no forte do Panecillo, e Sucre lhes ofereceu uma [[capitulação]]."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas variam de uma fonte para outra: cerca de 200 mortos e 140 feridos entre os patriotas; cerca de 400 mortos, 190 feridos e 1.260 prisioneiros entre os realistas, segundo uma obra. Sucre, em relatório do dia seguinte, falou em 1.100 prisioneiros, entre eles 160 oficiais.",
        "Aymerich aceitou a capitulação em 25 de maio, no Panecillo, entregando armas e bandeira. Sucre entrou em Quito no mesmo dia, e Bolívar chegou em 16 de junho. Guayaquil foi incorporada à Gran Colômbia em 31 de julho de 1822.",
        { h: "Por que importa" },
        "Quito e o território da antiga Real Audiência passaram a fazer parte da [[gran colômbia]]. Em 1830, Quito, Guayaquil e Cuenca se separaram e formaram a República do Equador. O exército seguiu para o Peru, até as vitórias de Junín e Ayacucho.",
        { h: "Curiosidades e controvérsias" },
        { note: "Abdón Calderón: o jovem tenente recebeu quatro ferimentos de bala e morreu 14 dias depois. Sucre o destacou no relatório, e Bolívar o promoveu a capitão depois de morto." },
        { note: "O nome do vencedor: o sucre foi a moeda do Equador até 2000, quando o país passou a usar o dólar." },
        { note: "O horário: as fontes divergem sobre a hora do primeiro tiro, entre 8h e 9h30. Podem estar contando momentos diferentes, a chegada às alturas e a troca de tiros." }
      ]}
    ]
  },

  piraja: {
    war: "Guerra de Independência do Brasil: a luta pela Bahia (1822–1823)",
    hook: "O maior combate da Independência na Bahia ficou famoso por um toque de corneta que talvez nunca tenha existido.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1822, Salvador estava nas mãos de tropas portuguesas. Em fevereiro, com a chegada do novo comandante das armas, Inácio Luís Madeira de Melo, a tensão com os brasileiros explodiu: em 19 de fevereiro, houve tiros no forte de São Pedro e a freira Joana Angélica foi morta no Convento da Lapa. Quando Dom Pedro proclamou a independência, em 7 de setembro, a Bahia já estava em guerra.",
        "Os brasileiros controlavam o Recôncavo, a região em volta da baía. Em 25 de junho, a câmara de Cachoeira, no Recôncavo, votou a favor de Dom Pedro. Em outubro, chegou à Bahia o general Pierre Labatut, oficial francês contratado por Dom Pedro (nomeado em 3 de julho) para comandar o Exército Pacificador. Os portugueses receberam reforços em agosto: 750 homens.",
        { h: "O caminho até Pirajá" },
        { timeline: [
          ["19 de fevereiro de 1822", "Tiros no forte de São Pedro. A freira Joana Angélica morre no Convento da Lapa."],
          ["25 de junho", "A câmara de Cachoeira reconhece Dom Pedro."],
          ["Outubro", "Labatut chega à Bahia com reforços do Rio de Janeiro."],
          ["3 de novembro", "Labatut divide o exército em duas brigadas."],
          ["8 de novembro", "Batalha de Pirajá."]
        ]},
        "A área que contava era a do Cabrito, de Campinas e de Pirajá, passagem obrigatória do gado e dos alimentos que vinham do sertão. Quem segurasse as alturas de Pirajá controlava a estrada de que a cidade dependia para comer."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Pierre Labatut" },
        "General francês, nomeado por Dom Pedro para comandar o Exército Pacificador. Dividiu o exército em duas brigadas: a da esquerda, do coronel Felisberto Gomes Caldeira, em Itapuã; e a da direita, do major José de Barros Falcão de Lacerda, entre Cabrito, Campinas e Pirajá.",
        { h: "José de Barros Falcão de Lacerda" },
        "Major (depois coronel) e comandante da brigada de cerca de 1.300 soldados de Pernambuco, Bahia e Rio de Janeiro que defendeu Pirajá. Foi dele a ordem de recuar, segundo a versão tradicional.",
        { h: "Inácio Luís Madeira de Melo" },
        "Comandante português de Salvador. Queria romper o bloqueio dos caminhos que ligavam a cidade ao resto do Brasil.",
        { h: "O corneteiro Luís Lopes" },
        "Cabo e [[corneteiro]], segundo a tradição um português que tinha aderido à causa brasileira. É o personagem mais famoso da batalha, mas sua história é discutida (veja adiante)."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A brigada de Barros Falcão tinha cerca de 1.300 homens. O exército brasileiro inteiro tinha de 1.300 a 2.000, conforme a fonte. Os portugueses atacantes são calculados em cerca de 1.900. Entre as forças brasileiras estavam a [[milícia]] da Casa da Torre, índios flecheiros e um corpo de soldados negros, o dos Henrique Dias.",
        { note: "Os números de Pirajá são incertos. Os brasileiros costumam ser contados entre 1.500 e 2.000 e os portugueses entre 1.900 e mais de 3.000 (o total em Salvador)." },
        { h: "O terreno" },
        "Pirajá fica a uns 24 quilômetros do centro histórico de Salvador, no alto da estrada do gado. Quem desembarcava nas praias do subúrbio tinha de subir a encosta até a estrada. A luta se espalhou entre Pirajá, Campinas e o Alto do Cabrito.",
        { h: "A batalha" },
        "Na manhã de 8 de novembro, os portugueses atacaram quase todas as posições brasileiras por terra e por mar. Parte deles desembarcou nas praias do subúrbio. A principal luta foi na área de Pirajá e do Cabrito, onde a brigada de Barros Falcão repeliu três ataques.",
        "O combate foi longo: as fontes falam em oito a dez horas. Num certo momento, com os brasileiros prestes a perder, Barros Falcão ordenou a retirada.",
        "Segundo a tradição, o corneteiro Luís Lopes, em vez do toque de recuar, tocou 'cavalaria, avançar' e depois 'degolar'. Os portugueses, achando que vinha reforço de cavalaria, se assustaram e recuaram para Salvador pelas praias por onde tinham desembarcado. Os brasileiros, sobretudo os pernambucanos, atacaram com novo ânimo e venceram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas nunca foram confirmadas. Labatut escreveu que morreram cerca de 200 pessoas, sem separar os lados, e no dia seguinte falou em 633. O jornal carioca O Espelho deu 375 portugueses mortos e 221 feridos. Outras fontes dão 30, 64, 70 ou 80 portugueses mortos. A imprensa portuguesa de Salvador falou em menos de 100 baixas. Do lado brasileiro, o historiador Titara contou cerca de 10 soldados mortos, entre eles dois oficiais.",
        "Os portugueses voltaram para Salvador e a cidade ficou cercada. Em abril ou maio de 1823, a esquadra de lorde Cochrane bloqueou o porto. Na noite de 1º para 2 de julho de 1823, Madeira de Melo deixou Salvador com cerca de 4.500 homens em 83 navios, e o exército brasileiro entrou na cidade.",
        { h: "Por que importa" },
        "Foi o maior combate da Independência na Bahia e consolidou a derrota militar e política portuguesa na província. O 2 de Julho, a data da independência da Bahia, é celebrado até hoje, e muitos pesquisadores veem nela um alicerce da independência efetiva do Brasil.",
        { h: "Curiosidades e controvérsias" },
        { note: "O corneteiro Lopes: a história aparece pela primeira vez no livro de Ladislau dos Santos Titara, de 1835, que fala em 'decisão, ou engano'. Não há documento que a confirme. Há historiadores que defendem sua existência e outros que a veem como lenda popular." },
        { note: "A cavalaria que não existia: os céticos lembram que não havia cavalaria brasileira no combate, por isso o toque não faria sentido. Os defensores da história respondem que os portugueses recuaram mesmo sem reforço." },
        { note: "O local: algumas fontes colocam o combate no Sítio do Cabrito; outras, em Pirajá e Campinas. A região ficou toda envolvida." }
      ]}
    ]
  },

  jenipapo: {
    war: "Guerra de Independência do Brasil: o Piauí e o Maranhão (1822–1823)",
    hook: "Vaqueiros e lavradores com facões enfrentaram canhões, perderam o campo e, mesmo assim, o major português não chegou aonde queria.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Quando Dom Pedro proclamou a independência, em 7 de setembro de 1822, nem todas as províncias aceitaram na hora. No Piauí, o poder estava dividido entre quem queria se separar de Portugal e as autoridades leais à Coroa. Em Oeiras, a capital, mandava o major João José da Cunha Fidié, português, veterano das guerras napoleônicas, governador das armas.",
        "Parnaíba, no litoral, aderiu à independência em 19 de outubro de 1822. Fidié marchou para lá e chegou em 18 de dezembro. Enquanto isso, em janeiro de 1823, Oeiras proclamou a independência sob Manuel de Sousa Martins. Fidié voltou para o interior, e Campo Maior virou o centro da resistência, sob Leonardo Castelo Branco.",
        { h: "O caminho até o Jenipapo" },
        { timeline: [
          ["19 de outubro de 1822", "Parnaíba adere à independência."],
          ["18 de dezembro", "Fidié chega a Parnaíba."],
          ["Janeiro de 1823", "Oeiras proclama a independência."],
          ["12 de fevereiro", "O capitão Luís Rodrigues Chaves chega a Campo Maior e recebe a ordem de enfrentar Fidié."],
          ["13 de março", "Batalha do Jenipapo."]
        ]},
        "Fidié precisava voltar a Oeiras antes que a revolta se espalhasse. Sua rota passava por Campo Maior, e os moradores resolveram barrá-lo."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "João José da Cunha Fidié" },
        "Major português, descrito como disciplinado e sensato. Era soldado profissional, tinha tropa treinada e artilharia. Seu objetivo era manter o norte do Brasil leal à Coroa.",
        { h: "Os comandantes brasileiros" },
        "Luís Rodrigues Chaves, capitão, e João da Costa Alecrim comandavam a resistência. Entre os outros nomes aparecem Inácio Francisco de Araújo Costa, Salvador Cardoso de Oliveira e o cearense Alexandre Nereu. As fontes divergem em alguns nomes, e o capitão Costa aparece também como Francisco Inácio da Costa.",
        { h: "Os sertanejos" },
        "A tropa era um exército improvisado: [[vaqueiros|vaqueiro]], roceiros, comerciantes, até vereadores, um juiz, idosos e adolescentes, do Piauí, do Ceará e do Maranhão. Sem uniforme e sem treino, lutavam com foices, facões, machados, [[chuços|chuço]], paus e pedras, e com poucas espingardas de caça."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os brasileiros eram cerca de 2.000, segundo a maioria das fontes, com poucas armas de fogo (uma obra fala em 2 canhões). Os portugueses, cerca de 1.600 soldados com 11 canhões. Há divergências: uma fonte dá mais de mil piauienses e uns quinhentos cearenses para o lado brasileiro; outra dá 1.100 homens para Fidié em fevereiro.",
        { note: "Os números do Jenipapo variam de obra para obra, principalmente os das baixas. Usamos as faixas mais citadas e indicamos onde há divergência." },
        { h: "O terreno" },
        "O riacho Jenipapo, quase seco, com mato baixo e várzeas abertas, sem lugar para se esconder. O caminho dos brasileiros se bifurcava, e eles se entrincheiraram sem saber por qual lado Fidié viria.",
        { h: "A batalha" },
        "De manhã, uma patrulha brasileira foi enviada para sondar. Fidié dividiu a tropa em dois grupos, um para cada caminho: a infantaria à esquerda e a cavalaria à direita.",
        "Por volta das 9h, os brasileiros toparam com a cavalaria portuguesa na direita. Ela recuou, e os brasileiros a perseguiram, abandonando as trincheiras. Fidié aproveitou a brecha.",
        "Fidié atravessou o riacho pela esquerda, montou barricadas, colocou a artilharia e ocupou as trincheiras que os brasileiros tinham deixado. Os brasileiros atacaram de vários lados, nas margens do riacho, em combates corpo a corpo, com muitas baixas.",
        "Ao meio-dia, estavam exaustos e sem condições de vencer. Por volta das 14h, retiraram-se em desordem. Os portugueses, esgotados e sob um calor forte, não os perseguiram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Cerca de 200 brasileiros morreram e mais de 500 foram presos (542, numa contagem), um terço do exército improvisado. As baixas portuguesas variam: de 16 ou 19 mortos e 60 feridos até 116 mortos, conforme a obra.",
        "Fidié ficou dois dias enterrando os mortos e, em 16 de março, partiu para o Estanhado, na divisa do Maranhão. Em vez de seguir para Oeiras, atravessou o Parnaíba e se refugiou em Caxias, no Maranhão, onde foi cercado. Rendeu-se em 31 de julho de 1823, foi levado a Oeiras, depois ao Rio de Janeiro e, por fim, a Portugal, onde recebeu a Ordem de Avis.",
        { h: "Por que importa" },
        "Os portugueses venceram a batalha, mas Fidié não conseguiu restabelecer o controle do Piauí. O historiador Laurentino Gomes chamou o resultado de 'uma vitória com sabor de derrota'. A batalha mostrou a disposição de lutar por Dom Pedro mesmo sem armas nem organização. Em Campo Maior, há um monumento e um museu no local, e o Cemitério do Batalhão guarda restos dos combatentes. A data de 13 de março de 1823 aparece na bandeira do Piauí.",
        { h: "Curiosidades e controvérsias" },
        { note: "A bagagem: dizem que os brasileiros capturaram a bagagem de Fidié. Uma fonte atribui isso aos cearenses de Nereu durante a retirada; outra fala num ataque ao acampamento depois da batalha. Não há consenso." },
        { note: "Derrota tática, efeito estratégico: historiadores separam a derrota dos brasileiros no campo das consequências mais amplas, que enfraqueceram a presença portuguesa no Piauí." },
        { note: "As fontes: muitos trechos dos relatos sobre a batalha dependem de textos pouco documentados, e os números de mortos e de combatentes mudam bastante de uma obra para outra." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  maipu: {
    terrain: [
      { t: "hill", x: 76, y: 20, rx: 14, ry: 6, l: "Colina da esquerda realista" },
      { t: "note", x: 50, y: 69, l: "Santiago fica atrás dos patriotas" }
    ],
    units: [
      { id: "aLH", s: "a", k: "inf", w: 20, h: 5, l: "Las Heras (direita)" },
      { id: "aAlv", s: "a", k: "inf", w: 20, h: 5, l: "Alvarado (esquerda)" },
      { id: "aQui", s: "a", k: "inf", w: 26, h: 4, l: "Reserva (Quintana)" },
      { id: "aArt", s: "a", k: "inf", w: 10, h: 3, l: "Canhões" },
      { id: "aGra", s: "a", k: "cav", w: 9, h: 4, l: "Granadeiros (Zapiola)" },
      { id: "aCaz", s: "a", k: "cav", w: 9, h: 4, l: "Caçadores a cavalo (Freire)" },
      { id: "aMil", s: "a", k: "inf", w: 12, h: 3, l: "Milícias (O'Higgins)" },
      { id: "bPri", s: "b", k: "inf", w: 20, h: 5, l: "Primo de Rivera (esquerda)" },
      { id: "bMor", s: "b", k: "inf", w: 20, h: 5, l: "Morla (centro)" },
      { id: "bOrd", s: "b", k: "inf", w: 20, h: 5, l: "Ordóñez (direita)" },
      { id: "bCavR", s: "b", k: "cav", w: 9, h: 4, l: "Cavalaria realista" },
      { id: "bCavL", s: "b", k: "cav", w: 9, h: 4, l: "Cavalaria realista" },
      { id: "bFarm", s: "b", k: "camp", w: 12, h: 5, l: "Fazenda Lo Espejo" }
    ],
    steps: [
      { t: "Os patriotas ocupam as colinas, com Las Heras na direita, Alvarado na esquerda e a reserva de Quintana atrás. Os realistas ficam numa elevação perto de Lo Espejo, com Primo de Rivera na esquerda, Morla no centro e Ordóñez na direita.",
        p: { aLH: [72, 50], aAlv: [28, 50], aQui: [50, 60], aArt: [50, 52], aGra: [88, 50], aCaz: [10, 50], aMil: [14, 65],
             bPri: [74, 17], bMor: [50, 17], bOrd: [26, 17], bCavR: [91, 22], bCavL: [8, 22], bFarm: [50, 6] } },
      { t: "Por volta das 11h30, os canhões dos dois lados abrem fogo, sem baixas. San Martín vê que os realistas ficaram na defensiva e manda Las Heras e Alvarado avançarem em colunas, sem atirar.",
        p: { aLH: [72, 38], aAlv: [28, 38], aArt: [50, 44], aGra: [88, 38], aCaz: [10, 38] } },
      { t: "Las Heras bate em Primo de Rivera e Alvarado em Ordóñez. Os granadeiros de Zapiola são repelidos pela cavalaria espanhola, mas voltam reforçados e a dispersam.",
        p: { aLH: [72, 27], aAlv: [28, 27], aGra: [88, 26], bCavR: [92, 12] }, x: ["bCavR"] },
      { t: "O ataque de frente empaca. San Martín solta a reserva de Quintana contra o centro e os flancos. Os caçadores de Freire derrotam a cavalaria realista do outro lado.",
        p: { aQui: [50, 34], aCaz: [10, 24], bCavL: [6, 12] }, x: ["bCavL"] },
      { t: "Las Heras e parte dos granadeiros tomam a colina da esquerda realista. Com a pressão oblíqua sobre o centro e a direita, a linha espanhola se parte. Osorio deixa o campo e o comando passa para Ordóñez.",
        p: { aLH: [76, 21], aGra: [88, 16], bPri: [80, 10], aAlv: [34, 22], aQui: [52, 26] }, x: ["bPri"] },
      { t: "Ordóñez reúne os batalhões que restam. Em quadrados, eles aguentam várias cargas de cavalaria e recuam em ordem para a fazenda de Lo Espejo.",
        p: { bOrd: [42, 10], bMor: [58, 10], aQui: [50, 20], aAlv: [34, 18], aLH: [72, 18] } },
      { t: "O batalhão de Coquimbo ataca a fazenda de frente e é rechaçado. Os milicianos de O'Higgins chegam ao campo.",
        p: { aMil: [30, 34], aAlv: [36, 16] } },
      { t: "San Martín concentra cerca de 17 canhões contra as casas de Lo Espejo. No assalto final, Ordóñez e Primo de Rivera se rendem. A vitória é completa.",
        p: { aArt: [50, 18], aQui: [50, 14], aMil: [30, 22] }, x: ["bOrd", "bMor", "bFarm"] }
    ]
  },

  boyaca: {
    terrain: [
      { t: "sea", x: 58, y: 0, w: 4, h: 70, l: "" },
      { t: "hill", x: 50, y: 60, rx: 9, ry: 5, l: "Colina de Bolívar" },
      { t: "note", x: 60, y: 5, l: "Riacho Teatinos" },
      { t: "note", x: 60, y: 34, l: "Ponte" },
      { t: "note", x: 44, y: 46, l: "Casa de Teja" },
      { t: "note", x: 46, y: 3, l: "Estrada de Samacá" },
      { t: "note", x: 86, y: 30, l: "Rumo a Bogotá" },
      { t: "note", x: 8, y: 30, l: "De Tunja" }
    ],
    units: [
      { id: "aRes", s: "a", k: "inf", w: 10, h: 4, l: "Reserva (Bolívar)" },
      { id: "aRear", s: "a", k: "inf", w: 12, h: 4, l: "Retaguarda (Anzoátegui)" },
      { id: "aVan", s: "a", k: "inf", w: 12, h: 4, l: "Vanguarda (Santander)" },
      { id: "aLan", s: "a", k: "cav", w: 9, h: 4, l: "Lanceiros (Rondón)" },
      { id: "aGui", s: "a", k: "cav", w: 9, h: 3.5, l: "Guias de Casanare" },
      { id: "bVan", s: "b", k: "inf", w: 12, h: 4, l: "Vanguarda (Jiménez)" },
      { id: "bMain", s: "b", k: "inf", w: 16, h: 4.5, l: "Corpo principal (Barreiro)" },
      { id: "bCav", s: "b", k: "cav", w: 9, h: 4, l: "Cavalaria (Sierra)" }
    ],
    steps: [
      { t: "Barreiro sai de Motavita de madrugada. A vanguarda de Jiménez para para comer perto da ponte, enquanto o corpo principal vem pela estrada de Samacá. Os patriotas chegam de Tunja pelo Caminho Real: Santander na frente, Anzoátegui atrás, Bolívar com a reserva.",
        p: { aRes: [8, 36], aRear: [22, 36], aVan: [36, 36], aLan: [22, 46], aGui: [36, 46],
             bVan: [51, 34], bMain: [46, 14], bCav: [32, 16] } },
      { t: "Por volta das 14h, a patrulha do capitão Ibarra esbarra na vanguarda espanhola em Casa de Teja. Santander a empurra de volta para o outro lado da ponte.",
        p: { aVan: [46, 36], aRear: [34, 36], bVan: [72, 34] } },
      { t: "O corpo principal de Barreiro surge pela estrada de Samacá e esbarra na retaguarda de Anzoátegui. Há dois combates ao mesmo tempo, e o exército espanhol fica cortado em dois.",
        p: { bMain: [42, 24], bCav: [30, 24], aRear: [36, 33] } },
      { t: "Rondón ataca o centro com os lanceiros, e a cavalaria espanhola se desfaz. Barreiro e os oficiais desmontam para tentar reagrupar a tropa.",
        p: { aLan: [38, 28], bCav: [24, 18] }, x: ["bCav"] },
      { t: "Santander manda os guias de Casanare atravessarem o riacho e atacarem a vanguarda de Jiménez pelas costas. Dois esquadrões espanhóis são derrotados.",
        p: { aGui: [72, 44], bVan: [78, 32] } },
      { t: "Os batalhões de caçadores e o Primeiro de Linha tomam a ponte. Santander lidera uma carga de baioneta, e o coronel Tolrá morre.",
        p: { aVan: [60, 36], aRes: [34, 38] } },
      { t: "Presa entre a ponte e os guias, a vanguarda de Jiménez se rende.",
        p: { aVan: [68, 34] }, x: ["bVan"] },
      { t: "Cercado, o corpo principal de Barreiro se rende. Cerca de 1.600 prisioneiros, e Barreiro é capturado no mesmo dia.",
        p: { aRear: [44, 26], aLan: [40, 22], aRes: [40, 32] }, x: ["bMain"] }
    ]
  },

  carabobo: {
    terrain: [
      { t: "hill", x: 50, y: 15, rx: 38, ry: 9, l: "Alturas realistas" },
      { t: "note", x: 50, y: 68, l: "Buenavista" }
    ],
    units: [
      { id: "aApu", s: "a", k: "inf", w: 10, h: 4, l: "Bravos de Apure" },
      { id: "aBri", s: "a", k: "inf", w: 9, h: 4, l: "Batalhão britânico" },
      { id: "aPCav", s: "a", k: "cav", w: 10, h: 4, l: "Cavalaria de Páez" },
      { id: "aCed", s: "a", k: "inf", w: 14, h: 4, l: "Cedeño" },
      { id: "aPla", s: "a", k: "inf", w: 14, h: 4, l: "Plaza" },
      { id: "bLin", s: "b", k: "inf", w: 28, h: 5, l: "1.ª divisão (García)" },
      { id: "bBur", s: "b", k: "inf", w: 10, h: 4, l: "Burgos" },
      { id: "bVal", s: "b", k: "inf", w: 9, h: 4, l: "Valencey" },
      { id: "bCav", s: "b", k: "cav", w: 10, h: 4, l: "Cavalaria realista" }
    ],
    steps: [
      { t: "La Torre ocupa as alturas e cobre as estradas de San Carlos e El Pao. Bolívar examina a posição de Buenavista com as divisões de Páez, Cedeño e Plaza.",
        p: { aApu: [28, 62], aBri: [38, 62], aPCav: [16, 62], aCed: [58, 62], aPla: [78, 62],
             bLin: [50, 19], bBur: [34, 9], bVal: [66, 9], bCav: [80, 19] } },
      { t: "Bolívar julga a frente e o sul inacessíveis e desloca as divisões para virar a direita realista. Plaza avança em direção ao centro.",
        p: { aApu: [16, 48], aBri: [26, 48], aPCav: [8, 50], aCed: [40, 52], aPla: [60, 46] } },
      { t: "Por volta das 11h, o exército passa pela frente inimiga sob fogo. Páez, com dois batalhões e cavalaria, atravessa um riacho e sobe pelo flanco da direita realista, por uma trilha.",
        p: { aApu: [14, 33], aBri: [24, 31], aPCav: [6, 34] } },
      { t: "La Torre manda o batalhão Burgos contra os Bravos de Apure, que recuam duas vezes.",
        p: { bBur: [20, 22], aApu: [12, 38] } },
      { t: "O batalhão britânico segura o Burgos e perde o comandante e mais de uma dezena de oficiais. Isso dá tempo aos Bravos de se reorganizarem.",
        p: { aBri: [22, 27], bBur: [22, 21] } },
      { t: "Os Bravos contra-atacam. Na divisão de Cedeño, só parte dos Tiradores consegue entrar em combate. Cedeño e Plaza morrem em cargas contra a infantaria inimiga.",
        p: { aApu: [14, 27], aCed: [38, 38], aPla: [54, 34] } },
      { t: "A cavalaria patriota entra pelo norte, e a cavalaria realista se retira ou desobedece. A direita realista desmorona.",
        p: { aPCav: [10, 20], bBur: [22, 14] }, x: ["bBur", "bCav"] },
      { t: "O batalhão Valencey forma em quadrado e recua em ordem. O resto do exército foge para Valencia e Puerto Cabello. Segundo Bolívar, uns 400 homens chegam a Puerto Cabello.",
        p: { bVal: [68, 3], aApu: [20, 16], aBri: [30, 18], aPla: [56, 22] }, x: ["bLin"] }
    ]
  }
});
