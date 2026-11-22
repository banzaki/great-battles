// batch z: chapultepec, solferino, puebla, antietam, gettysburg, nanquim1864
Object.assign(GLOSSARY, {
  "voltigeurs": "Regimento de infantaria ligeira do exército americano, criado em 1847 para a guerra contra o México.",
  "escada de assalto": "Escada de madeira que os atacantes levam para subir muros e parapeitos. O ataque trava se ela atrasar, e quem a carrega fica exposto ao fogo.",
  "cadete": "Aluno de uma escola militar, em geral um adolescente ou jovem que estuda para ser oficial.",
  "contra-ataque": "Ataque do defensor contra um atacante que acabou de avançar e está cansado e desorganizado.",
  "estrada funda": "Estrada de terra rebaixada pelo uso e pela chuva, que funciona como uma trincheira natural.",
  "união": "Os estados do Norte, que continuaram fiéis ao governo dos Estados Unidos na Guerra Civil. Também se diz 'o Norte'.",
  "confederação": "Os onze estados do Sul que se separaram dos Estados Unidos em 1861 e formaram um país próprio, em defesa da escravidão. Também se diz 'o Sul'.",
  "proclamação de emancipação": "Decreto de Lincoln que declarou livres os escravizados dos estados rebeldes. A versão preliminar saiu em 22 de setembro de 1862 e passou a valer em 1º de janeiro de 1863.",
  "saliente": "Trecho da linha que avança à frente do resto e pode ser atacado por mais de um lado. Parece forte, mas é difícil de defender.",
  "cavalaria desmontada": "Cavalaria que luta a pé: os soldados descem dos cavalos e atiram com carabinas, enquanto os animais ficam atrás.",
  "risorgimento": "'Ressurgimento', em italiano: o movimento que unificou a Itália no século XIX. O reino da Itália foi proclamado em 1861.",
  "quadrilátero": "Os quatro fortes austríacos do norte da Itália (Mântua, Peschiera, Verona e Legnago). Quem se fechava ali aguentava muito tempo, e atacá-los saía caríssimo.",
  "cruz vermelha": "Organização fundada em Genebra, em 1863, para socorrer feridos de guerra de qualquer lado. O símbolo é uma cruz vermelha sobre fundo branco.",
  "taiping": "Movimento religioso e político criado por Hong Xiuquan, que misturava cristianismo e ideias próprias. 'Taiping' quer dizer 'grande paz'. Montou um Estado rival do Império Qing.",
  "exército de hunan": "Exército regional formado por Zeng Guofan com voluntários da província de Hunan, porque as tropas regulares do império tinham falhado contra os Taiping. Também se chama Exército Xiang."
});

Object.assign(DEEP, {
  chapultepec: {
    war: "Guerra Mexicano-Americana (1846–1848)",
    hook: "Um castelo no alto de um morro, uma escola militar dentro dele e uma lenda que o México repete até hoje.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1845, os Estados Unidos anexaram o Texas, que tinha se separado do México em 1836. A fronteira ficou em disputa, e em abril de 1846 começou a guerra. O presidente americano queria também a Califórnia e o território entre ela e o Texas, que eram mexicanos.",
        "Em 1847, o general americano Winfield Scott desembarcou um exército pequeno no litoral e marchou para o interior, rumo à capital. Ele venceu uma batalha atrás da outra, mas cada uma custava homens que não tinham reposição. Quando chegou perto da Cidade do México, tinha cerca de 7.200 soldados.",
        { h: "O caminho até Chapultepec" },
        { timeline: [
          ["Março de 1847", "Scott toma o porto de Veracruz e começa a marcha para a capital."],
          ["Abril a agosto de 1847", "Vitórias em Cerro Gordo, Contreras e Churubusco. A capital fica a poucos quilômetros."],
          ["8 de setembro", "Molino del Rey, uma batalha cara para os americanos, a um passo do morro de Chapultepec."],
          ["11 de setembro", "Conselho de guerra: Scott decide atacar o castelo de Chapultepec."],
          ["12 e 13 de setembro", "Bombardeio e assalto ao morro."],
          ["14 de setembro", "Os americanos entram na Cidade do México."]
        ]},
        "O castelo ficava num morro de uns 60 metros de altura, na beira da cidade. Tinha sido construído na década de 1780 como residência de luxo e, desde 1841, abrigava o Colégio Militar do México. Um muro de uns 4,5 metros de altura e 1,5 quilômetro de comprimento cercava a base. Quem o tomasse podia chegar às portas da cidade."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Winfield Scott" },
        "General do exército americano, veterano da guerra de 1812. Em 11 de setembro, reuniu os oficiais para decidir onde atacar. Quase todos preferiam os portões do sul. Scott queria o castelo, e só o general Twiggs concordou de início. O general Franklin Pierce, que também preferia o sul, mudou o voto depois de um discurso de P. G. T. Beauregard, e Scott decidiu atacar o castelo.",
        { h: "Antonio López de Santa Anna" },
        "Presidente e comandante do exército mexicano, dizia ter uns 25.000 homens na região. Esperava o ataque principal pelo sul, e só percebeu o erro quando os americanos já subiam o morro. Depois da derrota, foi culpado pela perda da capital e deixou a presidência em 26 de setembro.",
        { h: "Nicolás Bravo e os defensores" },
        "O general Bravo comandava a guarnição do castelo: cerca de 830 homens e sete canhões. O Batalhão San Blas, comandado por Felipe Santiago Xicoténcatl, ajudou a segurar o morro, e Xicoténcatl morreu ali. No dia 11, Bravo mandou a maior parte dos cerca de 200 [[cadetes|cadete]] do colégio sair do castelo, mas uns 50 ficaram, com ex-alunos recém-formados e funcionários. Os números variam muito conforme o autor: de 47 a algumas centenas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são incertos. Scott tinha cerca de 7.200 homens em todo o exército, e só parte deles atacou o morro. Os defensores do castelo eram uns 830, contra um exército mexicano maior, mas espalhado pela cidade. Os americanos tinham artilharia melhor e soldados mais bem treinados. Os mexicanos tinham o morro, o muro e a vantagem de estar em casa. Em 1847, os sinos das igrejas da cidade foram derretidos para fazer balas de canhão, e os defensores reforçaram os muros com sacos de areia, vigas e valas rasas.",
        { h: "O bombardeio" },
        { formation: true },
        "Às 7h da manhã de 12 de setembro, a artilharia americana abriu fogo contra o castelo e continuou o dia todo, parando só ao escurecer. Na manhã seguinte, recomeçou ao amanhecer.",
        { h: "O assalto de 13 de setembro" },
        "Por volta das 8h, o bombardeio parou e Scott mandou a infantaria avançar em três colunas. Os atacantes chegaram ao pé do muro e travaram: as [[escadas|escada de assalto]] ainda não tinham chegado. Ali morreu o coronel Truman Ransom, do 9º Regimento, e o general Gideon Pillow foi ferido no pé e passou o comando.",
        "Quitman mandou reforços, e a brigada que levava as escadas chegou pela encosta oeste. Os atacantes subiram o muro, e os [[voltigeurs]] foram os primeiros a plantar uma bandeira no parapeito. Perto das 9h, Bravo se rendeu e a bandeira americana subiu no castelo.",
        { h: "Os Meninos Heróis" },
        "Seis defensores são lembrados pelo México como os Niños Héroes: o tenente Juan de la Barrera e os cadetes Agustín Melgar, Juan Escutia, Vicente Suárez, Francisco Márquez e Fernando Montes de Oca, de uns 13 a 20 anos. Segundo a tradição, recusaram-se a deixar o castelo e morreram lutando. Pela versão mais conhecida, Escutia se enrolou na bandeira mexicana e se jogou do alto para ela não ser capturada.",
        { note: "A história dos cadetes é um dos mitos nacionais mais fortes do México. Historiadores recentes dizem que não há prova do salto de Escutia, e que ele talvez fosse um soldado de 20 anos do Batalhão San Blas, não um cadete. A versão oficial ganhou força a partir de 1852. O número de cadetes presentes e a identificação dos restos mortais encontrados em 1947 também são discutidos. Cerca de 40 cadetes sobreviventes foram presos." },
        { h: "Depois do morro" },
        "Com o castelo tomado, Scott mandou duas colunas pelas calçadas que levam à cidade. À 1h20, Quitman abriu o portão de Belén, que era uma finta. Por volta das 16h, o general Worth começou a avançar pela calçada de San Cosme e, às 18h, rompeu o portão, e os defensores se dispersaram, muitos para a Ciudadela, o forte principal da capital. Em San Cosme, o tenente Ulysses Grant levou um obus para a torre de uma igreja.",
        "Na madrugada de 14 de setembro, Santa Anna tirou o exército da cidade. Às 7h, a bandeira americana já estava na Ciudadela."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo a Wikipédia em inglês, os americanos tiveram 138 mortos, 673 feridos e 29 desaparecidos nos combates desses dias. Do lado mexicano, uns 200 mortos e 632 feridos ou presos, além de cerca de 3.700 prisioneiros no total. Scott escreveu que uns 20.000 soldados mexicanos desertaram.",
        "A Cidade do México caiu em 14 de setembro. A guerra terminou com o Tratado de Guadalupe Hidalgo, assinado em 2 de fevereiro de 1848: o México reconheceu a perda do Texas e cedeu a Califórnia e boa parte do que hoje é o oeste americano, quase metade do seu território, por 15 milhões de dólares.",
        { h: "Por que importa" },
        "Foi a batalha que decidiu a guerra, e o México nunca esqueceu o preço. Em 13 de setembro, o país lembra os Niños Héroes. Do lado americano, o hino dos fuzileiros ('From the Halls of Montezuma') faz referência à campanha.",
        "Muitos oficiais jovens que lutaram ali viraram generais na Guerra Civil americana, dos dois lados: Ulysses Grant, Robert E. Lee, Thomas Jackson, James Longstreet e George Pickett. Quase todos aparecem nas outras batalhas desta coleção.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os San Patricios: um grupo de americanos que desertou do exército durante a campanha de Taylor formou o Batalhão de São Patrício, que lutou pelo México. Os capturados em Churubusco foram enforcados, cerca de 30 deles, na hora em que a bandeira dos Estados Unidos subiu no castelo, segundo a Wikipédia em inglês." },
        { note: "Em 1947, o presidente americano Harry Truman depositou uma coroa de flores no monumento aos Niños Héroes, cem anos depois da batalha." },
        { note: "A tradição de que a faixa vermelha das calças dos fuzileiros americanos lembra o sangue derramado em Chapultepec é falsa: só 7 dos cerca de 400 a 450 fuzileiros morreram ali." }
      ]}
    ]
  },

  solferino: {
    war: "Segunda Guerra de Independência Italiana (1859)",
    hook: "A batalha que ninguém planejou, e cujo horror deu origem à Cruz Vermelha.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1859, a Itália ainda não existia como país. A região era um mosaico de reinos, ducados e Estados do Papa, e boa parte do norte, a Lombardia e o Vêneto, pertencia ao Império Austríaco. O reino do Piemonte-Sardenha, governado por Vítor Emanuel II, era o único Estado italiano forte e independente, e queria expulsar os austríacos. Seu primeiro-ministro, o conde de Cavour, sabia que sozinho não conseguiria.",
        "Em 21 de julho de 1858, Cavour se encontrou em segredo com Napoleão III, imperador da França, em Plombières. Combinaram que a França ajudaria o Piemonte contra a Áustria, em troca de Nice e Sabóia. O tratado de aliança foi assinado em janeiro de 1859. Cavour provocou Viena com manobras na fronteira, e a Áustria enviou um ultimato em 23 de abril. A guerra começou três dias depois.",
        { h: "O caminho até Solferino" },
        { timeline: [
          ["20 de maio", "Primeiro choque importante, em Montebello."],
          ["4 de junho", "Os austríacos perdem em Magenta, e o imperador Francisco José assume pessoalmente o comando no lugar de Gyulai."],
          ["Junho", "Os franco-piemonteses entram em Milão e avançam para leste."],
          ["22 e 23 de junho", "Os dois exércitos atravessam rios, um em direção ao outro."],
          ["24 de junho", "Eles se encontram e lutam: é a batalha de Solferino."]
        ]},
        "Depois de Magenta, o general austríaco Gyulai recuou para leste do rio Mincio e foi substituído pelo próprio imperador. Francisco José, de 28 anos, decidiu voltar a atravessar o rio e atacar. Napoleão III também avançava, e os dois exércitos esbarraram um no outro, num lugar que ninguém tinha escolhido."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão III, 50 anos" },
        "Sobrinho de Napoleão Bonaparte e imperador dos franceses, tinha pouca experiência de batalha e dependia de comandantes veteranos da Argélia e da Crimeia, como MacMahon, Canrobert, Niel e Baraguey d'Hilliers. Tinha ligação antiga com a causa italiana: na juventude, tinha participado de revoltas na Itália.",
        { h: "Vítor Emanuel II, 39 anos" },
        "Rei do Piemonte-Sardenha, comandava o exército sardo ao lado do ministro da Guerra, La Marmora. Seu reino tinha sido derrotado pela Áustria em 1849, e a guerra de 1859 era a chance de mudar esse resultado.",
        { h: "Francisco José, 28 anos" },
        "Imperador da Áustria desde os 18 anos, tinha assumido o comando depois de Magenta. Seu chefe de estado-maior, Heinrich von Hess, e o ajudante Karl von Grünne, segundo a Wikipédia, viviam brigando.",
        { h: "Ludwig von Benedek" },
        "Comandante do VIII Corpo austríaco, de uns 39.000 homens, no norte do campo de batalha. Em San Martino, continuou lutando mesmo depois de receber ordem de recuar."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam conforme a fonte. Os austríacos eram cerca de 129.000 homens com 429 canhões, divididos em dois exércitos. Os franceses tinham cerca de 92.000 homens, com 240 canhões, em quatro [[corpos|corpo de exército]] mais a [[guarda imperial]]. Os sardos somavam uns 38.500, com 80 canhões. No total, os aliados tinham de 130.000 a 133.000 homens. Os dois lados eram quase do mesmo tamanho.",
        { h: "O terreno" },
        "Colinas baixas ao sul do lago de Garda, entre Milão e Verona. Os austríacos ocupavam as vilas de Solferino, Cavriana e Volta Mantovana, ao centro, e Medole e Guidizzolo, ao sul. No norte, em San Martino e Pozzolengo, o terreno era mais acidentado. A frente de batalha passava dos 15 quilômetros.",
        { h: "Uma batalha em três lutas" },
        { formation: true },
        "Como nenhum dos dois lados tinha um plano fixo, a batalha se dividiu em três combates quase separados.",
        "Ao sul, em Medole, por volta das 4h da manhã, o general Niel, do 4º Corpo francês, encontrou uma tropa austríaca e atacou na hora. Segurou uma linha fina, de uns 5 quilômetros, e com isso os corpos austríacos III, IX e XI não puderam reforçar Solferino. Só à tarde, quando esses corpos chegaram em força, ele recuou de Guidizzolo, depois de duas horas de luta.",
        "No centro, em Solferino, a vanguarda do 1º Corpo francês encostou no inimigo por volta das 4h30, e MacMahon, às 5h, esbarrou em unidades húngaras. Os austríacos aguentaram o dia todo contra ataques repetidos e receberam reforços do I Corpo. Napoleão III jogou na luta as divisões da Guarda Imperial. Por volta das 14h, o cemitério e a vila estavam cercados.",
        "Ao norte, em San Martino, os sardos enfrentaram o corpo de Benedek a partir das 7h. A vila trocou de mãos várias vezes: das 7h às 17h, os piemonteses a tomaram três vezes e os austríacos a retomaram. Benedek ignorou uma ordem de recuo e continuou lutando. Só ao quarto ataque, por volta das 20h, os sardos ficaram com ela, e os austríacos recuaram depois de um [[contra-ataque]] que falhou. Essa luta prendeu o corpo de Benedek o dia todo e impediu que ele reforçasse o centro.",
        "Por volta das 15h, o 3º Corpo de Canrobert e a Guarda atacaram Cavriana, a vila que sustentava o centro austríaco. Ela caiu às 18h. O centro rompido forçou todo o exército austríaco a recuar.",
        { h: "Depois de tudo" },
        "Os austríacos se retiraram para o [[quadrilátero]], os quatro fortes que defendiam o Vêneto, e a campanha acabou ali."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os austríacos tiveram 22.310 baixas: 2.386 mortos, 10.634 feridos e 9.290 desaparecidos. Os aliados tiveram entre 16.700 e 17.200, conforme a tabela da Wikipédia em inglês, que dá dois conjuntos de números que não batem. Entre os dois lados, são cerca de 40.000 mortos, feridos e desaparecidos num único dia.",
        "Napoleão III ficou chocado com a carnificina. Além disso, havia ameaça de intervenção prussiana e oposição dos católicos franceses dentro do país. Em 11 de julho, ele assinou com Francisco José o armistício de Villafranca. O Piemonte ficou com a Lombardia, mas o Vêneto continuou austríaco. Cavour, furioso, se demitiu.",
        { h: "Por que importa" },
        "Em 1860, os Estados do centro da Itália se uniram ao Piemonte e a França recebeu Nice e Sabóia. O reino da Itália foi proclamado em 1861, e o [[risorgimento]] continuou até Roma e Veneza.",
        "Mas o legado mais famoso nasceu do horror. O empresário suíço Henry Dunant estava na região e, depois da batalha, passou pelo campo, onde milhares de feridos de todos os lados morriam sem socorro. Em Castiglione delle Stiviere, ele organizou o atendimento nas igrejas com a ajuda de moradoras, que repetiam que todos eram irmãos. Em 1862, publicou 'Uma lembrança de Solferino', e em 1863 foi criada a [[cruz vermelha]]. Em 1864, veio a primeira Convenção de Genebra, que protege feridos e quem os cuida.",
        { h: "Curiosidades e controvérsias" },
        { note: "Diz-se que foi a última grande batalha da história em que todos os exércitos estavam sob o comando pessoal dos seus soberanos: Napoleão III, Vítor Emanuel II e Francisco José." },
        { note: "O Vêneto só foi para a Itália em 1866, e Roma, em 1870." }
      ]}
    ]
  },

  puebla: {
    war: "Segunda Intervenção Francesa no México (1861–1867)",
    hook: "O dia em que um exército mexicano mal equipado parou, por um ano, o que se dizia ser o melhor exército do mundo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O México de 1861 estava quebrado. Depois de anos de guerras, o último conflito, a Guerra da Reforma, entre liberais e conservadores, tinha acabado de terminar. O presidente liberal Benito Juárez suspendeu por dois anos o pagamento da dívida externa. Foi a desculpa para França, Espanha e Reino Unido assinarem a Convenção de Londres e mandarem tropas para cobrar.",
        "Os três exércitos desembarcaram em Veracruz entre o fim de 1861 e janeiro de 1862. Mas os franceses tinham outros planos. Napoleão III queria acesso aos recursos do México, principalmente prata, e um México aliado para equilibrar a influência dos Estados Unidos, então ocupados com a Guerra Civil. Os conservadores mexicanos, derrotados na guerra interna, queriam um rei estrangeiro. Quando ficou claro que a França pretendia invadir, a Espanha e o Reino Unido se retiraram, em abril de 1862.",
        { h: "O caminho até Puebla" },
        { timeline: [
          ["Julho de 1861", "Juárez suspende o pagamento da dívida externa."],
          ["Dezembro de 1861", "A Espanha toma Veracruz. Franceses e britânicos chegam em janeiro."],
          ["Abril de 1862", "A aliança se rompe. Espanha e Reino Unido se retiram, e os franceses seguem sozinhos."],
          ["17 de abril", "O general conservador Juan Almonte publica um manifesto a favor dos franceses."],
          ["2 a 4 de maio", "Os franceses chegam a Amozoc e acampam à vista de Puebla."],
          ["5 de maio", "Batalha de Puebla."]
        ]},
        "Os franceses tomaram Orizaba depois de vencer uma pequena força mexicana, e Porfirio Díaz e Ignacio Zaragoza recuaram para Puebla, uma cidade a meio caminho da capital."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ignacio Zaragoza, 33 anos" },
        "General liberal e comandante do exército mexicano de leste. Tinha pouco mais de 3.500 homens e poucos recursos. Morreu de tifo uns quatro meses depois da batalha.",
        { h: "Charles de Lorencez" },
        "Conde e general francês, comandava o corpo expedicionário. Segundo o relato tradicional, subestimou o inimigo. O plano dele era tomar os fortes de Loreto e Guadalupe, nos morros ao norte da cidade. Dois conselheiros, Almonte e Antonio de Haro y Tamariz, aconselharam outros planos, que foram ignorados.",
        { h: "Os outros nomes" },
        "Miguel Negrete comandou a divisão que ocupou os dois fortes em 4 de maio. Felipe Berriozábal também esteve entre os comandantes mexicanos. As tropas de Porfirio Díaz, que anos depois seria presidente, contra-atacaram."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam: segundo a Wikipédia em inglês, uns 5.730 franceses contra cerca de 3.800 mexicanos, mas outras fontes falam em até 4.500 do lado mexicano. Os franceses tinham mais treino, melhores armas e artilharia mais pesada. Os mexicanos tinham os fortes, o terreno e a motivação de defender o próprio país.",
        { h: "O terreno" },
        "Puebla ficava num vale, e ao norte dela havia dois morros com fortes: Loreto e Guadalupe, o mais alto. Quem os tomasse dominava a cidade. Os mexicanos ocuparam os dois fortes e o terreno em volta.",
        { h: "A batalha" },
        { formation: true },
        "O ataque começou por volta do meio-dia de 5 de maio. Primeiro, a artilharia francesa bombardeou os fortes por umas duas horas. Depois, uma coluna de infantaria subiu pelo lado norte em direção ao forte de Guadalupe.",
        "Os mexicanos receberam a coluna com tiros de fuzis e de canhões, e as tropas de Díaz fizeram um [[contra-ataque]]. Os franceses repetiram o assalto, e todos foram repelidos. A conta mais repetida é de três ataques. Muitos relatos falam de uma chuva forte que transformou a encosta em lama, o que dificultou a subida. Uma carga da cavalaria mexicana impediu que a infantaria francesa se reagrupasse.",
        "A luta durou até umas 19h. Os franceses recuaram para Los Alamos e, em 8 de maio, para Orizaba, onde esperaram reforços."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo a Wikipédia em inglês, os mexicanos perderam 87 mortos, 252 feridos e 12 desaparecidos. Os franceses, 131 mortos e 345 feridos. É uma vitória com baixas pequenas, mas com grande efeito moral.",
        "O Congresso agradeceu a Zaragoza, e a cidade passou a se chamar Puebla de Zaragoza. Napoleão III mandou mais tropas e demitiu Lorencez. O general Forey voltou em 16 de março de 1863 e cercou Puebla. A cidade se rendeu em 17 de maio de 1863, sem munição nem comida. Em junho de 1863, os franceses entraram na Cidade do México, e em 1864 Maximiliano da Áustria chegou para ser imperador.",
        { h: "Por que importa" },
        "A vitória de Puebla atrasou os franceses em quase um ano e ajudou os mexicanos a continuar a luta. Em 1866, a França começou a retirar tropas, pressionada pelos Estados Unidos e pela ameaça prussiana na Europa. Sem elas, o Império caiu. Maximiliano foi fuzilado em 19 de junho de 1867.",
        "Díaz, que escapou de ser preso pelos franceses, tornou-se presidente em 1876.",
        { h: "Curiosidades e controvérsias" },
        { note: "O Cinco de Mayo não é o dia da independência do México, que é 16 de setembro. A data é comemorada sobretudo no estado de Puebla. Nos Estados Unidos, a festa cresceu a partir das décadas de 1950 e 1960 e virou uma celebração da cultura mexicana, mais popular que no próprio México." },
        { note: "As fontes divergem sobre os números das tropas e das baixas: a Wikipédia em inglês dá números diferentes em duas páginas diferentes. Aqui usamos os da página específica da batalha." }
      ]}
    ]
  },

  antietam: {
    war: "Guerra Civil Americana (1861–1865), Campanha de Maryland",
    hook: "O dia mais sangrento da história dos Estados Unidos começou com três charutos e um papel perdido.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1862, os Estados Unidos estavam em guerra consigo mesmos. O Sul tinha formado a [[confederação]] para defender a escravidão, e o Norte, a [[união]], tentava trazê-lo de volta. No fim de agosto, o general confederado Robert E. Lee tinha vencido a Segunda Batalha de Bull Run, perto de Washington. Ele decidiu aproveitar o impulso e invadir o Norte pela primeira vez.",
        "Em 3 de setembro, o Exército da Virgínia do Norte, de uns 55.000 homens, entrou em Maryland. Lee esperava ser bem recebido, mas encontrou muita gente fiel à União, principalmente no oeste do estado.",
        { h: "O caminho até Antietam" },
        { timeline: [
          ["3 de setembro", "Lee atravessa o rio Potomac e entra em Maryland."],
          ["9 de setembro", "Lee divide o exército em várias partes, com a Ordem Especial 191."],
          ["13 de setembro", "Soldados da União acham uma cópia da ordem em um campo, enrolada em três charutos."],
          ["14 de setembro", "Combate em South Mountain: os confederados seguram o inimigo o bastante para se concentrar."],
          ["15 de setembro", "Jackson toma o forte de Harpers Ferry com milhares de soldados da União."],
          ["17 de setembro", "Batalha de Antietam, perto de Sharpsburg."]
        ]},
        "O cabo Barton Mitchell e o sargento John Bloss, de Indiana, acharam o papel. Ele mostrava que Lee tinha dividido o exército. O general McClellan, comandante da União, esperou cerca de 18 horas antes de agir. Segundo os historiadores, foi uma chance perdida de derrotar Lee de vez."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "George McClellan" },
        "Comandante do Exército do Potomac, foi um excelente organizador e era adorado pelos soldados. Mas era cauteloso e achava sempre que o inimigo tinha mais homens do que tinha. Em Antietam, acreditava que Lee tinha até 100.000 soldados. Mandou os corpos de exército atacarem um de cada vez, sem coordenação, e deixou as reservas paradas.",
        { h: "Robert E. Lee" },
        "Comandante confederado, decidiu ficar e lutar com o rio Potomac nas costas e uma força bem menor, em torno de um para dois. Jogou o exército todo na luta e segurou o dia inteiro.",
        { h: "Os outros nomes" },
        "Do lado da União, Joseph Hooker (I Corpo), Joseph Mansfield (XII), Edwin Sumner (II) e Ambrose Burnside (IX). Do lado confederado, Thomas 'Stonewall' Jackson, na esquerda; James Longstreet, na direita; D. H. Hill, no centro; e A. P. Hill, que chegou de Harpers Ferry no fim da tarde."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A União tinha uns 87.000 homens presentes, mas só uns 72.000 disponíveis para combater, e cerca de 53.600 entraram na luta. Cerca de um quarto do exército era inexperiente. A artilharia era superior, com uns 275 canhões. Os confederados tinham de 30.600 a 37.600 homens, conforme a fonte, com muitos armamentos antigos. A doença e os soldados que se perdiam no caminho tinham reduzido o exército de Lee.",
        { h: "O terreno" },
        "O riacho Antietam tinha 18 a 30 metros de largura, em alguns pontos dava para atravessar a pé, e três pontes de pedra, a cerca de 1,6 quilômetro uma da outra. A linha confederada corria ao longo de uma crista baixa perto de Sharpsburg, com cercas de pedra e madeira e afloramentos de calcário. Três lugares ficaram famosos: o milharal de Miller, de uns 230 por 360 metros; a [[estrada funda]], com uns 700 metros, que funcionava como trincheira natural; e a ponte de pedra do sul, que depois levaria o nome de Burnside. Atrás de Lee estava o Potomac, e a única passagem próxima era o vau de Boteler, perto de Shepherdstown.",
        { h: "A batalha em três horários" },
        { formation: true },
        "O combate foi feito de três ataques separados, ao longo do dia, de norte a sul.",
        { h: "De manhã: o milharal" },
        "Por volta das 5h30, o I Corpo de Hooker atacou em direção à igreja dos Dunkers, que ficava num pequeno planalto. O milharal virou um moedor: mudou de mãos várias vezes, e o 12º Regimento de Massachusetts perdeu 67% dos seus homens. A divisão de Hood, reforçada por brigadas de Hill e de Early, rechaçou a União por volta das 7h, mas perdeu cerca de 60%. Hooker foi atingido no pé por um atirador e saiu do campo.",
        "O XII Corpo de Mansfield atacou entre 7h30 e 9h. Mansfield, novo no comando, foi mortalmente ferido. A divisão de Greene chegou a ficar perto da igreja. Perto das 9h, Sumner mandou a divisão de Sedgwick em colunas fechadas, e ela foi atacada pelo flanco e perdeu mais de 2.200 homens. A manhã terminou com uns 13.000 mortos e feridos dos dois lados.",
        { h: "No meio do dia: a estrada funda" },
        "A partir das 9h30, a divisão de French atacou a posição de D. H. Hill, na estrada funda, em assaltos de uma brigada de cada vez. O primeiro foi destruído. Depois chegou a divisão de Richardson, e a Brigada Irlandesa atacou e perdeu uns 540 homens. Perto do meio-dia, a brigada de Caldwell avançou, e dois regimentos de Nova York, o 61º e o 64º, ocuparam uma posição de onde atiravam ao longo da estrada. A linha confederada desabou, ajudada por uma confusão de ordens. A estrada custou uns 5.600 mortos e feridos.",
        "O VI Corpo de Franklin estava pronto para explorar a brecha, mas Sumner mandou parar, e McClellan o apoiou. A chance passou.",
        { h: "De tarde: a ponte" },
        "Burnside recebeu a ordem de atacar a ponte às 10h. Cerca de 400 georgianos, de Robert Toombs, a defendiam das encostas. Vários regimentos falharam. Por volta das 12h30, o 51º de Nova York e o 51º da Pensilvânia atravessaram correndo, e Toombs, temendo um flanco, recuou por volta de 13h. Burnside gastou mais duas horas com a logística e às 15h avançou com uns 8.000 homens.",
        "Nesse momento, A. P. Hill chegou. Sua Divisão Ligeira tinha marchado uns 27 quilômetros desde Harpers Ferry, cruzou o vau de Boteler e entrou no campo às 15h30. Às 15h40, os soldados da Carolina do Sul de Maxcy Gregg bateram no flanco de Burnside, e o 16º de Connecticut desabou. Os homens de Burnside recuaram até o riacho.",
        "McClellan ainda tinha duas reservas descansadas, o V e o VI Corpos, e recusou-se a usá-las. A batalha terminou por volta das 17h30."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A União perdeu 12.410 homens e os confederados, 10.316: cerca de 22.700 mortos, feridos e desaparecidos em um dia, o mais sangrento da história americana. A União perdeu uns 25% do exército e a Confederação, uns 31%. Morreram ou foram mortalmente feridos os generais Mansfield, Richardson e Rodman, da União, e Branch e Starke, do Sul. A enfermeira Clara Barton levou suprimentos ao campo.",
        "Em 18 de setembro, os dois exércitos ficaram parados, Lee esperando um ataque que não veio. À noite, ele atravessou o Potomac de volta. McClellan não o perseguiu de 17 de setembro a 26 de outubro. Lincoln o demitiu em 5 de novembro, e Burnside assumiu em 9 de novembro.",
        { h: "Por que importa" },
        "Em 22 de setembro, Lincoln divulgou a versão preliminar da [[proclamação de emancipação]], que passou a valer em 1º de janeiro de 1863. O secretário de Estado Seward tinha aconselhado esperar uma vitória de verdade, e Antietam era o que havia. A batalha também desencorajou a Inglaterra e a França de reconhecer a Confederação, porque nenhum dos dois queria parecer apoiar a escravidão.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem ganhou? Taticamente, a batalha foi inconclusiva, e Lee foi o primeiro a recuar, o que na definição técnica o torna o perdedor. Estrategicamente, acabou com a invasão do Norte e é vista como uma virada para a União. Por isso a ficha desta batalha não declara vencedor." },
        { note: "A frase famosa de que o general Porter negou reforços dizendo que estava guardando a 'última reserva' provavelmente é ficção, segundo o historiador Scott Hartwig." },
        { note: "Os historiadores também discutem o ataque de Sumner pela manhã: a maioria o condena como imprudente, mas M. V. Armstrong defende que o reconhecimento que ele fez o justificava." }
      ]}
    ]
  },

  gettysburg: {
    war: "Guerra Civil Americana (1861–1865), Campanha de Gettysburg",
    hook: "Três dias de julho em que a maior batalha da Guerra Civil americana virou o jogo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em maio de 1863, Robert E. Lee venceu a batalha de Chancellorsville, na Virgínia, contra um exército da [[união]] bem maior. Nada parecia poder parar o Exército da Virgínia do Norte. Mas Lee tinha perdido ali seu melhor general, Stonewall Jackson, e precisou reorganizar o exército em três corpos, sob James Longstreet, Richard Ewell e A. P. Hill. A cavalaria continuou sob J. E. B. Stuart.",
        "Lee decidiu invadir o Norte pela segunda vez, depois de Antietam. Os objetivos eram aliviar a pressão sobre Vicksburg, no rio Mississippi, alimentar o exército nas fazendas do Norte, ameaçar Filadélfia, Baltimore e Washington e reforçar o movimento pela paz entre os nortistas.",
        { h: "O caminho até Gettysburg" },
        { timeline: [
          ["Maio de 1863", "Vitória de Lee em Chancellorsville. Jackson morre depois, ferido por fogo amigo."],
          ["9 de junho", "Brandy Station, a maior batalha de cavalaria da guerra, sem vencedor claro."],
          ["Junho", "Lee marcha para o norte, para Maryland e a Pensilvânia."],
          ["28 de junho", "Meade substitui Hooker no comando do Exército do Potomac."],
          ["1º a 3 de julho", "Batalha de Gettysburg."]
        ]},
        "Joseph Hooker se demitiu em junho depois de uma briga sobre a guarnição de Harpers Ferry, e Lincoln escolheu George Meade, que assumiu três dias antes da batalha. Stuart, por sua vez, saiu com as três melhores brigadas de cavalaria numa volta em torno do exército da União e ficou fora de contato. Lee, sem os olhos da cavalaria, avançou quase às cegas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Robert E. Lee, 56 anos" },
        "Vinha da vitória em Chancellorsville, contra um exército da União bem maior que o seu. Em Gettysburg, atacou três dias seguidos, e no terceiro insistiu no ataque ao centro mesmo depois de Longstreet discordar.",
        { h: "George Meade, 47 anos" },
        "Engenheiro militar de carreira, tinha só três dias de comando quando a batalha começou. Manteve a linha e mandou reforços para os pontos ameaçados, como Little Round Top. Depois foi criticado por não atacar Lee em 4 de julho.",
        { h: "Os outros nomes" },
        "Do lado da União, John Buford, cuja cavalaria abriu a luta; John Reynolds, do I Corpo, que morreu no primeiro dia; Winfield Hancock, do II Corpo, que organizou a defesa; Daniel Sickles, do III Corpo, que avançou sem ordem; e Strong Vincent e Joshua Chamberlain, em Little Round Top. Do lado confederado, James Longstreet, que discordou do plano de Lee, e Richard Ewell, que perdeu uma chance no primeiro dia."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A União tinha entre 93.500 e 104.000 homens, com uns 360 canhões. Os confederados tinham de 65.000 a 75.000, com uns 270 canhões e 9.500 cavaleiros. Os números variam conforme a fonte.",
        { h: "O terreno" },
        "A oeste da cidade ficavam três cristas paralelas: Herr, McPherson e Seminary. Ao sul, os morros Cemetery Hill e Culp's Hill e a Cemetery Ridge, uma crista comprida que ia para o sul até os morros Little Round Top e Big Round Top. A linha da União tomou a forma de um anzol. Mais à frente da linha da União ficavam o Devil's Den, o pomar de pêssegos, o trigal e a estrada de Emmitsburg, onde se lutou no segundo dia.",
        { h: "Primeiro dia: 1º de julho" },
        { formation: true },
        "Por volta das 7h30, duas brigadas confederadas de Heth encontraram a [[cavalaria desmontada]] de Buford, que atrasou o avanço com carabinas. Perto das 10h20, o I Corpo de Reynolds chegou. Reynolds foi morto logo no começo da luta. A Brigada de Ferro lutou bem e capturou o general Archer, mas foi flanqueada e recuou.",
        "À tarde, os corpos de Ewell chegaram pelo norte. Por volta das 14h, as divisões de Rodes e Early flanquearam o I e o XI Corpos, e a divisão de Barlow foi esmagada. Howard recuou para Cemetery Hill, e Hancock, mandado por Meade, achou o lugar forte o bastante para lutar.",
        "Lee mandou Ewell tomar Cemetery Hill 'se possível'. Ewell achou que não era, e os historiadores consideram essa uma grande chance perdida.",
        { h: "Segundo dia: 2 de julho" },
        "O plano de Lee era atacar o lado esquerdo da União com Longstreet, enquanto Ewell atacava o direito. As ordens só saíram por volta das 11h, e as divisões de Longstreet levaram horas para chegar às posições.",
        "Enquanto isso, Sickles, sem ordem, avançou o III Corpo até o pomar de pêssegos, criando um [[saliente]] exposto. As divisões de Hood e McLaws atacaram. Meade mandou uns 20.000 homens de reforço, incluindo o V Corpo.",
        "Em Little Round Top, a brigada de Strong Vincent, enviada minutos antes por Warren, segurou o morro contra os homens de Law. O 20º Maine, de Chamberlain, fez a famosa carga de baioneta. Vincent foi mortalmente ferido e promovido a general no leito de morte. No trigal e no pomar, o III Corpo foi quase destruído, e Sickles perdeu uma perna. O 1º Minnesota fez um contra-ataque caro que deu tempo para os reforços chegarem.",
        "Às 18h, Ewell atacou Culp's Hill e East Cemetery Hill. A brigada de Greene segurou Culp's Hill, embora tenha perdido algumas trincheiras. Hays e Avery chegaram às defesas de East Cemetery Hill, mas recuaram quando Rodes não os apoiou.",
        { h: "Terceiro dia: 3 de julho" },
        "De manhã, os dois lados lutaram de novo por Culp's Hill, e por volta das 11h a linha da União continuava inteira. Lee decidiu então atacar o centro, em Cemetery Ridge, defendido pelo II Corpo, com a divisão de Pickett e seis brigadas de Hill. Longstreet disse que eram poucos homens, mas Lee insistiu.",
        "Por volta das 13h, de 150 a 170 canhões confederados abriram fogo. A artilharia da União esperou, depois respondeu com uns 80 canhões. A munição confederada era pouca, e o fogo fez pouco estrago.",
        "Por volta das 15h, de 10.500 a 12.500 homens avançaram cerca de 1,2 quilômetro por campo aberto. É a Carga de Pickett. A artilharia e os fuzis da União abriram buracos na linha. Parte da linha romperam no Ângulo, mas reforços fecharam a brecha. A brigada de Armistead foi mais longe, perto de um bosque de árvores baixas. É o ponto mais alto da Confederação. Armistead foi mortalmente ferido, e quase metade dos atacantes não voltou. A divisão de Pickett perdeu cerca de dois terços dos homens.",
        { note: "Longstreet disse na hora que o ataque precisava de muito mais homens, e nas memórias voltou a criticar a decisão de Lee." },
        "Na mesma hora, a uns cinco quilômetros a nordeste, Stuart enfrentou a cavalaria de Gregg e de Custer, num empate que o impediu de chegar à retaguarda da União."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Entre 46.000 e 51.000 mortos, feridos e desaparecidos, o maior número de uma batalha da guerra. A União perdeu 23.055 homens (3.155 mortos, 14.531 feridos e 5.369 desaparecidos). Para a Confederação, as estimativas vão de 23.000 a 28.000. Morreram mais generais do que em qualquer outra batalha da guerra, incluindo Armistead, Garnett, Barksdale, Semmes, Pender e Pettigrew.",
        "Em 4 de julho, sob chuva forte, os exércitos se encaram. Meade não atacou. À noite, Lee começou a retirada para a Virgínia. No mesmo dia, a 1.500 quilômetros dali, Vicksburg se rendeu a Ulysses Grant.",
        { h: "Por que importa" },
        "A invasão de Lee foi a última. Com Vicksburg, a Confederação perdeu o controle do rio Mississippi. Em 19 de novembro de 1863, Lincoln foi à inauguração do cemitério nacional de Gettysburg e fez o discurso que ficou conhecido, de 271 palavras, que redefiniu o propósito da guerra.",
        { h: "Curiosidades e controvérsias" },
        { note: "A cidade de uns 2.400 habitantes cuidou de uns 14.000 feridos da União e 8.000 prisioneiros confederados. A única civil morta, que se saiba, foi Ginnie Wade. Uns 3.000 a 5.000 cavalos morreram e foram queimados ao sul da cidade." },
        { note: "As causas da derrota são discutidas há mais de 150 anos: Ewell e Cemetery Hill, a demora de Longstreet, a ausência de Stuart, o avanço de Sickles e a cautela de Meade em 4 de julho." }
      ]}
    ]
  },

  nanquim1864: {
    war: "Rebelião Taiping (1850–1864)",
    hook: "A capital de um homem que dizia ser irmão mais novo de Jesus caiu com uma explosão debaixo da muralha.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Hong Xiuquan nasceu numa família do grupo hakka e queria ser funcionário do império. Depois de reprovar pela quarta vez nos exames imperiais, em 1843, leu folhetos cristãos e concluiu que Deus era o seu pai e Jesus, seu irmão mais velho. Ou seja: ele era o irmão mais novo de Jesus.",
        "O movimento começou em Guangxi, no fim de 1850. Em janeiro de 1851, os rebeldes venceram as tropas imperiais em Jintian, e Hong se declarou Rei Celestial. Era o começo do movimento [[taiping]], contra a dinastia [[qing]], de origem [[manchu|manchus]]. Em 19 de março de 1853, tomaram Nanquim, rebatizada de Tianjing, 'Capital Celestial'. Segundo a Wikipédia, cerca de 40.000 civis manchus foram mortos depois da conquista.",
        { h: "O caminho até a queda" },
        { timeline: [
          ["1853", "Os Taiping tomam Nanquim e a fazem sua capital."],
          ["1861", "O [[exército de hunan]], de Zeng Guofan, toma Anqing."],
          ["Maio de 1862", "Os imperiais começam a cercar Nanquim."],
          ["20 de dezembro de 1863", "O general Li Xiucheng pede a Hong que abandone a cidade. Ele recusa."],
          ["2 de março de 1864", "O [[cerco]] está completo."],
          ["1º de junho de 1864", "Hong morre."],
          ["19 de julho de 1864", "A muralha explode e a cidade cai."]
        ]},
        "O império Qing ia mal e não conseguia vencer sozinho: seu exército regular tinha falhado. A tarefa passou para Zeng Guofan, funcionário de Hunan que formou um exército próprio com voluntários das aldeias. Esse exército tomou Anqing em 1861 e, desde maio de 1862, cercava Nanquim."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hong Xiuquan, cerca de 50 anos" },
        "Rei Celestial. Quando a comida acabou, mandou o povo comer o que chamava de 'maná', que na tradução aparece como 'orvalho doce e erva medicinal'. Ele mesmo juntava e comia ervas no terreno do palácio. Adoeceu em abril de 1864 e morreu em 1º de junho, talvez por causa das ervas. A maioria dos autores fala de doença. Alguns sugerem suicídio por veneno. Foi enterrado sem caixão.",
        { h: "Li Xiucheng" },
        "O melhor general Taiping. Em dezembro de 1863, tentou convencer Hong a deixar a cidade, e o rei respondeu que mataria quem desobedecesse. Assumiu o comando de tudo cinco dias depois da morte de Hong, tarde demais.",
        { h: "Zeng Guofan e Zeng Guoquan" },
        "Zeng Guofan era o comandante-chefe imperial e o criador do exército de Hunan. Seu irmão mais novo, Zeng Guoquan, comandou o cerco em campo. Zeng Guofan só chegou a Nanquim em 28 de julho, depois da queda.",
        { h: "Hong Tianguifu" },
        "Filho de Hong, de uns 15 anos, sucedeu o pai. Escapou da cidade, mas foi capturado e executado."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O tamanho da guarnição Taiping é muito incerto: a Wikipédia em inglês chega a citar 370.000 defensores, número que não é confirmado por outras fontes que consultamos. Do lado imperial, uns 60.000 homens entraram na cidade na hora do assalto final. O exército de Hunan era mal pago e mal alimentado.",
        { h: "O cerco" },
        "O cerco avançou em etapas. Em junho de 1863, os imperiais tomaram a ilha de Jiufu e cortaram a margem norte do rio Yangtzé. No outono e inverno de 1863, Zeng Guoquan ocupou posições a sudeste e sudoeste da cidade, com apoio da marinha. Em 28 de fevereiro de 1864, tomaram o Castelo de Tianbao, no pico mais alto da Montanha Púrpura. Em 2 de março, a cidade estava cercada.",
        "Em 14 de março, Zeng Guoquan fez o primeiro assalto, com escadas, e foi rechaçado. Depois, os imperiais cavaram dez túneis, perto dos portões Chaoyang, Shence e Jinchuan. Os defensores responderam com [[contraminas|contramina]] e levantaram uma segunda muralha atrás da primeira.",
        "Em 3 de julho, caiu o Forte Dibao, o 'Pescoço do Dragão', na Montanha Púrpura. Dali, a artilharia imperial passou a bombardear a cidade. Os imperiais também aterraram o vão entre a muralha e a encosta e cavaram túneis a uns 60 metros do muro para colocar explosivos.",
        { h: "19 de julho" },
        "Na noite do dia 18, Li Xiucheng mandou mais de 1.000 homens disfarçados de atacantes destruir o túnel, mas foram repelidos. Na tarde do dia 19, por volta das 13h, os imperiais explodiram a [[mina]] debaixo do Portão Taiping. A explosão derrubou um grande trecho da muralha e matou várias centenas de pessoas. Os cerca de 60.000 atacantes entraram em quatro frentes. À noite, os imperiais controlavam todos os portões.",
        "Li Xiucheng voltou ao palácio de Hong, levou o filho do rei e tentou fugir pelo Portão Hanxi, mas as tropas imperiais o empurraram de volta. Naquela noite, cerca de 1.000 homens de Li escaparam disfarçados de soldados imperiais, aproveitando o saque."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército de Hunan, sem soldo, perdeu a disciplina. Seus soldados mataram, estupraram, roubaram e incendiaram, e muitos civis foram tratados como rebeldes. A cidade queimou até 26 de julho. Segundo os relatos de Zeng Guofan citados na Wikipédia em inglês, de 200.000 a 300.000 pessoas foram mortas na cidade, mas não está claro o quanto esse número é confiável.",
        "Li Xiucheng foi capturado em 22 de julho, perto de Fangshan. Zeng Guofan chegou em 28 de julho e o mandou escrever uma confissão. Li foi executado em 7 de agosto. O corpo de Hong foi desenterrado, decapitado e queimado em 30 de julho, e as cinzas, disparadas de um canhão. O líder Lai Wenguang fugiu com uns 3.000 cavaleiros e se juntou à rebelião Nian, onde lutou por mais quatro anos.",
        { h: "Por que importa" },
        "A queda de Nanquim acabou com a capital dos Taiping, e a rebelião, embora ainda tenha lutado até 1866, estava perdida. A estimativa mais citada para os mortos de toda a guerra é de 20 a 30 milhões de pessoas, a maioria por fome e doenças. Alguns autores falam em até 100 milhões. É considerada a guerra civil mais mortal da história.",
        "Segundo a Wikipédia em inglês, o conflito também serviu de campo de testes para armas de fogo modernas, e o primeiro fuzil de ferrolho de tiro único fabricado na China apareceu em 1864.",
        { h: "Curiosidades e controvérsias" },
        { note: "A morte de Hong: a maioria dos historiadores aceita doença, talvez agravada pelas ervas que ele comia. O suicídio por veneno é uma hipótese sugerida, sem prova." },
        { note: "O número de mortos civis em Nanquim e o tamanho exato da guarnição vêm em grande parte dos relatórios do próprio Zeng Guofan, e não encontramos nas fontes consultadas uma contagem independente." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  chapultepec: {
    terrain: [
      { t: "hill", x: 50, y: 30, rx: 26, ry: 16, l: "Morro de Chapultepec" },
      { t: "note", x: 90, y: 5, l: "San Cosme" },
      { t: "note", x: 90, y: 66, l: "Portão de Belén" }
    ],
    units: [
      { id: "usArt", s: "a", k: "inf", w: 14, h: 3, l: "Artilharia" },
      { id: "usP", s: "a", k: "inf", w: 14, h: 5, l: "Pillow" },
      { id: "usQ", s: "a", k: "inf", w: 14, h: 5, l: "Quitman" },
      { id: "usW", s: "a", k: "inf", w: 12, h: 4, l: "Worth" },
      { id: "mCas", s: "b", k: "inf", w: 18, h: 6, l: "Castelo (Bravo)" },
      { id: "mSB", s: "b", k: "inf", w: 10, h: 4, l: "San Blas" },
      { id: "mSA", s: "b", k: "inf", w: 12, h: 6, l: "Santa Anna" }
    ],
    steps: [
      { t: "O castelo, com o Colégio Militar, fica no alto do morro, cercado por um muro. Scott põe as divisões de Pillow e de Quitman diante dele e guarda a de Worth. Santa Anna espera o golpe principal pelo sul.",
        p: { usArt: [50, 62], usP: [24, 56], usQ: [68, 58], usW: [48, 68], mCas: [50, 30], mSB: [64, 40], mSA: [90, 36] } },
      { t: "12 de setembro, às 7h: a artilharia americana bombardeia o castelo o dia todo e para ao escurecer. Recomeça ao amanhecer do dia 13.",
        p: { usArt: [50, 54] } },
      { t: "13 de setembro, por volta das 8h: o bombardeio para e a infantaria avança em três colunas pelo lado oeste e pelo sul.",
        p: { usP: [30, 46], usQ: [66, 48] } },
      { t: "No pé do muro, os atacantes travam à espera das escadas. Pillow é ferido, e o coronel Ransom morre.",
        p: { usP: [34, 40], usQ: [62, 44] } },
      { t: "Quitman manda reforços e uma brigada traz as escadas pela encosta oeste. Os voltigeurs plantam sua bandeira no parapeito.",
        p: { usP: [40, 32], usQ: [58, 36] } },
      { t: "Por volta das 9h, Bravo se rende. Xicoténcatl morreu, e os últimos defensores, entre eles cadetes, caem lutando.",
        p: { usP: [48, 28], usQ: [54, 30] }, x: ["mCas", "mSB"] },
      { t: "À 1h20, Quitman abre o portão de Belén, que era uma finta. Por volta das 16h, Worth avança pela calçada de San Cosme.",
        p: { usQ: [80, 54], usW: [80, 16] } },
      { t: "Às 18h, Worth rompe o portão de San Cosme e os defensores se dispersam, muitos para a Ciudadela. Na manhã do dia 14, a bandeira americana está na Ciudadela.",
        p: { usQ: [76, 46], usW: [76, 26] }, x: ["mSA"] }
    ]
  },

  puebla: {
    terrain: [
      { t: "hill", x: 50, y: 44, rx: 30, ry: 14, l: "Cerros de Loreto e Guadalupe" },
      { t: "note", x: 92, y: 6, l: "Norte ↑" },
      { t: "note", x: 50, y: 68, l: "Cidade de Puebla" }
    ],
    units: [
      { id: "mFG", s: "a", k: "inf", w: 10, h: 5, l: "Forte de Guadalupe" },
      { id: "mFL", s: "a", k: "inf", w: 10, h: 5, l: "Forte de Loreto" },
      { id: "mNeg", s: "a", k: "inf", w: 14, h: 4, l: "Negrete" },
      { id: "mDz", s: "a", k: "inf", w: 12, h: 4, l: "Díaz" },
      { id: "mCav", s: "a", k: "cav", w: 12, h: 4, l: "Cavalaria mexicana" },
      { id: "fArt", s: "b", k: "inf", w: 10, h: 3, l: "Artilharia francesa" },
      { id: "fCol", s: "b", k: "inf", w: 12, h: 6, l: "Coluna de ataque" },
      { id: "fRes", s: "b", k: "inf", w: 14, h: 4, l: "Reserva francesa" },
      { id: "fCamp", s: "b", k: "camp", w: 12, h: 4, l: "Los Alamos" }
    ],
    steps: [
      { t: "Em 4 de maio, a divisão de Negrete ocupa os fortes de Loreto e Guadalupe, nos morros ao norte da cidade. Os franceses acampam à vista de Puebla.",
        p: { mFG: [66, 42], mFL: [34, 46], mNeg: [50, 54], mDz: [82, 52], mCav: [20, 54], fArt: [50, 18], fCol: [64, 14], fRes: [40, 10], fCamp: [20, 6] } },
      { t: "5 de maio, por volta do meio-dia: a artilharia francesa bombardeia os fortes por cerca de duas horas.",
        p: { fArt: [50, 26] } },
      { t: "Uma coluna de infantaria sobe pelo lado norte em direção ao forte de Guadalupe. Os mexicanos atiram com fuzis e canhões.",
        p: { fCol: [64, 30], fRes: [52, 20] } },
      { t: "Os franceses repetem o assalto, e a conta mais repetida é de três ataques. Cada um é repelido. Relatos falam de chuva forte e de encosta de lama.",
        p: { fCol: [64, 36] } },
      { t: "As tropas de Díaz fazem um contra-ataque e empurram a coluna para trás.",
        p: { mDz: [70, 32], fCol: [62, 26] } },
      { t: "A cavalaria mexicana carrega e impede que os franceses se reagrupem.",
        p: { mCav: [54, 28], fCol: [60, 20] }, x: ["fCol"] },
      { t: "Por volta das 19h, os franceses recuam para Los Alamos.",
        p: { fCol: [30, 10], fRes: [34, 8], fArt: [38, 12] } },
      { t: "Em 8 de maio, os franceses seguem para Orizaba, esperar reforços. Voltarão em 1863 e tomarão a cidade.",
        p: { fCol: [84, 12], fRes: [88, 20], fArt: [82, 6], fCamp: [92, 12] } }
    ]
  },

  antietam: {
    terrain: [
      { t: "sea", x: 56, y: 0, w: 2.5, h: 70, l: "" },
      { t: "note", x: 70, y: 3, l: "Riacho Antietam" },
      { t: "note", x: 16, y: 4, l: "Igreja Dunker" },
      { t: "note", x: 42, y: 5, l: "Milharal" },
      { t: "note", x: 38, y: 26, l: "Estrada funda" },
      { t: "note", x: 68, y: 68, l: "Ponte de Burnside" }
    ],
    units: [
      { id: "aI", s: "a", k: "inf", w: 6, h: 12, l: "I Corpo (Hooker)" },
      { id: "aXII", s: "a", k: "inf", w: 6, h: 10, l: "XII Corpo (Mansfield)" },
      { id: "aII", s: "a", k: "inf", w: 6, h: 12, l: "II Corpo (Sumner)" },
      { id: "aRes", s: "a", k: "inf", w: 8, h: 10, l: "V e VI Corpos (reserva)" },
      { id: "aIX", s: "a", k: "inf", w: 6, h: 12, l: "IX Corpo (Burnside)" },
      { id: "bJ", s: "b", k: "inf", w: 6, h: 12, l: "Jackson" },
      { id: "bH", s: "b", k: "inf", w: 6, h: 9, l: "D. H. Hill" },
      { id: "bL", s: "b", k: "inf", w: 6, h: 12, l: "Longstreet" },
      { id: "bT", s: "b", k: "inf", w: 5, h: 5, l: "Toombs" },
      { id: "bAP", s: "b", k: "inf", w: 6, h: 10, l: "A. P. Hill" }
    ],
    steps: [
      { t: "17 de setembro, de madrugada. Lee, com o Potomac nas costas, alinha o exército numa crista baixa perto de Sharpsburg: Jackson na esquerda, Hill no centro e Longstreet na direita. A União está do outro lado do riacho. A divisão de A. P. Hill ainda está longe, em Harpers Ferry.",
        p: { aI: [74, 14], aXII: [84, 22], aII: [78, 40], aRes: [92, 50], aIX: [76, 58], bJ: [24, 14], bH: [24, 34], bL: [24, 52], bT: [49, 64], bAP: [8, 64] } },
      { t: "Por volta das 5h30, o I Corpo de Hooker ataca em direção à igreja dos Dunkers, através do milharal.",
        p: { aI: [40, 14] } },
      { t: "A divisão de Hood, com brigadas de Hill e de Early, contra-ataca por volta das 7h e empurra a União de volta. O milharal vira um moedor. Hooker é ferido.",
        p: { aI: [48, 14], bJ: [32, 14] } },
      { t: "Entre 7h30 e 9h, o XII Corpo de Mansfield entra na luta. Mansfield é mortalmente ferido, mas a divisão de Greene chega perto da igreja.",
        p: { aXII: [42, 22], bJ: [28, 16] } },
      { t: "Por volta das 9h, Sumner manda a divisão de Sedgwick em colunas fechadas. Ela é atacada pelo flanco e perde mais de 2.200 homens.",
        p: { aII: [38, 26], bJ: [30, 20] } },
      { t: "A partir das 9h30, a União ataca a estrada funda em assaltos de uma brigada de cada vez. Perto do meio-dia, a linha confederada desaba. Franklin tem a reserva pronta, mas Sumner manda esperar.",
        p: { aII: [48, 36] }, x: ["bH"] },
      { t: "No sul, a ponte de Burnside é defendida por uns 400 georgianos de Toombs. Depois de vários ataques fracassados, por volta das 12h30 dois regimentos a atravessam, e Toombs recua por volta das 13h.",
        p: { aIX: [52, 62] }, x: ["bT"] },
      { t: "Às 15h30, A. P. Hill chega de Harpers Ferry, depois de uma marcha de uns 27 quilômetros, e bate no flanco de Burnside. A União recua até o riacho.",
        p: { bAP: [38, 60], aIX: [56, 62] } },
      { t: "McClellan não usa o V e o VI Corpos, descansados. A batalha acaba por volta das 17h30, depois de cerca de 22.700 baixas.",
        p: { aRes: [86, 48] } },
      { t: "No dia 18, os dois lados ficam parados. À noite, Lee atravessa o Potomac de volta. McClellan não o persegue.",
        p: { bJ: [10, 14], bL: [10, 52], bAP: [8, 64] } }
    ]
  },

  gettysburg: {
    terrain: [
      { t: "hill", x: 78, y: 20, rx: 5, ry: 4, l: "Colina Culp" },
      { t: "hill", x: 62, y: 22, rx: 6, ry: 4, l: "Colina do Cemitério" },
      { t: "hill", x: 58, y: 42, rx: 4, ry: 14, l: "Crista do Cemitério" },
      { t: "hill", x: 62, y: 64, rx: 5, ry: 4, l: "Little Round Top" },
      { t: "note", x: 42, y: 14, l: "Gettysburg" },
      { t: "note", x: 20, y: 40, l: "Crista do Seminário" },
      { t: "note", x: 46, y: 47, l: "Pomar de pêssegos" }
    ],
    units: [
      { id: "aBuf", s: "a", k: "cav", w: 10, h: 4, l: "Buford" },
      { id: "aGr", s: "a", k: "cav", w: 10, h: 4, l: "Cavalaria (Gregg)" },
      { id: "aI", s: "a", k: "inf", w: 10, h: 4, l: "I Corpo" },
      { id: "aXI", s: "a", k: "inf", w: 10, h: 4, l: "XI Corpo" },
      { id: "aII", s: "a", k: "inf", w: 10, h: 4, l: "II Corpo (Hancock)" },
      { id: "aXII", s: "a", k: "inf", w: 10, h: 4, l: "XII Corpo" },
      { id: "aIII", s: "a", k: "inf", w: 10, h: 4, l: "III Corpo (Sickles)" },
      { id: "aV", s: "a", k: "inf", w: 10, h: 4, l: "V Corpo" },
      { id: "aVin", s: "a", k: "inf", w: 10, h: 4, l: "Vincent" },
      { id: "bHeth", s: "b", k: "inf", w: 12, h: 4, l: "Heth e Pender" },
      { id: "bEw", s: "b", k: "inf", w: 12, h: 4, l: "Ewell" },
      { id: "bLg", s: "b", k: "inf", w: 12, h: 4, l: "Longstreet" },
      { id: "bPk", s: "b", k: "inf", w: 12, h: 4, l: "Pickett" },
      { id: "bStu", s: "b", k: "cav", w: 10, h: 4, l: "Stuart" }
    ],
    steps: [
      { t: "1º de julho, por volta das 7h30: duas brigadas de Heth encontram a cavalaria desmontada de Buford a oeste da cidade e ela atrasa o avanço com carabinas. Os outros corpos ainda estão a caminho.",
        p: { aBuf: [30, 24], bHeth: [14, 24], aGr: [92, 4], aI: [92, 13], aXI: [92, 22], aII: [92, 31], aXII: [92, 40], aIII: [92, 49], aV: [92, 58], aVin: [92, 67], bEw: [44, 3], bLg: [8, 50], bPk: [8, 62], bStu: [72, 3] } },
      { t: "Por volta das 10h20, chega o I Corpo de Reynolds, que morre logo no começo. A Brigada de Ferro luta bem, mas é flanqueada e recua. O XI Corpo corre para o norte da cidade e os corpos de Ewell chegam pelo norte.",
        p: { aI: [36, 26], aXI: [50, 12], bHeth: [24, 26], bEw: [50, 3] } },
      { t: "Por volta das 14h, Rodes e Early flanqueiam o I e o XI Corpos e esmagam a divisão de Barlow. Howard recua para a Colina do Cemitério. Hancock acha o lugar forte. Lee manda Ewell tomá-la se for possível, e Ewell acha que não.",
        p: { aI: [58, 26], aXI: [66, 18], bHeth: [40, 26], bEw: [52, 10] }, x: ["aBuf"] },
      { t: "2 de julho. A linha da União forma um anzol: Culp, a Colina do Cemitério e a crista até Little Round Top. Lee quer que Longstreet ataque a esquerda da União e Ewell a direita, mas as ordens saem só por volta das 11h e as tropas demoram horas para chegar.",
        p: { aXII: [78, 22], aII: [58, 36], aIII: [56, 52], aV: [74, 56], bHeth: [28, 36], bLg: [22, 52], bEw: [56, 8] } },
      { t: "Sickles, sem ordem, avança o III Corpo até o pomar de pêssegos, criando um saliente. As divisões de Hood e McLaws atacam. Meade manda uns 20.000 homens de reforço.",
        p: { aIII: [46, 52], bLg: [34, 52] } },
      { t: "Na Little Round Top, a brigada de Vincent chega minutos antes dos homens de Law e segura o morro. O 20º Maine, de Chamberlain, faz a carga de baioneta. No trigal e no pomar, o III Corpo é quase destruído.",
        p: { aVin: [62, 62], aV: [64, 54], bLg: [50, 60] }, x: ["aIII"] },
      { t: "Às 18h, Ewell ataca Culp e a Colina do Cemitério Leste. A brigada de Greene segura Culp. Hays e Avery chegam às trincheiras da União, mas recuam quando Rodes não os apoia.",
        p: { bEw: [72, 12] } },
      { t: "3 de julho. Depois de uma preparação de 150 a 170 canhões, por volta das 15h, de 10.500 a 12.500 homens da divisão de Pickett e de brigadas de Hill avançam cerca de 1,2 quilômetro por campo aberto, em direção ao II Corpo na crista.",
        p: { bPk: [50, 42], bHeth: [48, 34] } },
      { t: "A artilharia e os fuzis da União abrem buracos. A brigada de Armistead chega ao ponto mais fundo, no Ângulo, mas reforços fecham a brecha. Quase metade dos atacantes não volta. A leste, a cavalaria de Stuart é parada pela de Gregg.",
        p: { aGr: [84, 12], bStu: [78, 4] }, x: ["bPk", "bHeth"] },
      { t: "4 de julho, sob chuva. Meade não ataca. À noite, Lee começa a retirada para a Virgínia. No mesmo dia, Vicksburg se rende a Grant.",
        p: { bLg: [14, 50], bEw: [14, 10], bHeth: [14, 30], bPk: [8, 62], bStu: [30, 3] } }
    ]
  },

  solferino: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 5, l: "Lago de Garda (norte)" },
      { t: "hill", x: 58, y: 38, rx: 9, ry: 14, l: "Colinas de Solferino" }
    ],
    units: [
      { id: "aSar", s: "a", k: "inf", w: 6, h: 14, l: "Sardos (San Martino)" },
      { id: "aBar", s: "a", k: "inf", w: 6, h: 12, l: "Baraguey d'Hilliers" },
      { id: "aMac", s: "a", k: "inf", w: 6, h: 10, l: "MacMahon" },
      { id: "aNiel", s: "a", k: "inf", w: 6, h: 12, l: "Niel (Medole)" },
      { id: "aCan", s: "a", k: "inf", w: 6, h: 10, l: "Canrobert" },
      { id: "aGd", s: "a", k: "inf", w: 6, h: 10, l: "Guarda Imperial" },
      { id: "bBen", s: "b", k: "inf", w: 6, h: 14, l: "Benedek" },
      { id: "bC", s: "b", k: "inf", w: 6, h: 18, l: "Centro austríaco" },
      { id: "bS", s: "b", k: "inf", w: 6, h: 14, l: "III, IX e XI Corpos" }
    ],
    steps: [
      { t: "24 de junho. Os dois exércitos, de cerca de 130.000 homens cada, se encontram sem plano. A batalha se divide em três lutas ao longo de uns 15 quilômetros: San Martino ao norte, Solferino ao centro e Medole ao sul.",
        p: { aSar: [30, 14], aBar: [30, 30], aMac: [30, 44], aNiel: [30, 58], aCan: [14, 52], aGd: [14, 36], bBen: [78, 14], bC: [78, 36], bS: [78, 58] } },
      { t: "Por volta das 4h, em Medole, Niel encontra uma tropa austríaca e ataca na hora. Segura uma linha fina de uns 5 quilômetros e impede que os corpos III, IX e XI reforcem Solferino.",
        p: { aNiel: [48, 58], bS: [66, 58] } },
      { t: "Entre 4h30 e 5h, no centro, o corpo de Baraguey d'Hilliers e o de MacMahon encontram as tropas austríacas. Os austríacos seguram o dia todo contra ataques repetidos.",
        p: { aBar: [46, 30], aMac: [47, 44], bC: [68, 38] } },
      { t: "Às 7h, ao norte, os sardos atacam o corpo de Benedek em San Martino. A vila trocará de mãos várias vezes, e Benedek ignorará uma ordem de recuar.",
        p: { aSar: [48, 14], bBen: [66, 14] } },
      { t: "Por volta das 14h, Napoleão III põe na luta as divisões da Guarda Imperial. O cemitério e a vila de Solferino estão cercados.",
        p: { aGd: [52, 38], aBar: [54, 30], aMac: [55, 44], bC: [72, 38] } },
      { t: "Por volta das 15h, Canrobert e a Guarda atacam Cavriana. No sul, Niel recua de Guidizzolo depois de duas horas, quando os corpos III e XI chegam.",
        p: { aCan: [56, 52], aNiel: [44, 58], bS: [66, 60] } },
      { t: "Às 18h, Cavriana cai. O centro austríaco se rompe, e o exército todo recua.",
        p: { aCan: [66, 46], aGd: [64, 36], bC: [90, 38], bS: [88, 58] }, x: ["bC"] },
      { t: "Por volta das 20h, no quarto ataque, os sardos tomam San Martino, e Benedek se retira. Os austríacos vão para o quadrilátero dos fortes. Ficam cerca de 40.000 mortos, feridos e desaparecidos no campo.",
        p: { aSar: [64, 14], bBen: [88, 14] }, x: ["bBen"] }
    ]
  }
});
