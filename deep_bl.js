// In-depth battles, batch bl: fredericksburg, chancellorsville, chickamauga, atlanta, gravelotte (great-battles pack).
// Checked against the English, Portuguese and French Wikipedia articles on each battle, the American Battlefield Trust
// and National Park Service summaries (Atlanta, Chickamauga), the HistoryNet account of Gravelotte-Saint-Privat, and the
// works those pages cite (Howard, Elliot-Wright, Cozzens, Connelly). Where sources disagree the text says so.
// Aircraft and tanks do not appear. Artillery uses the "art" kind directly.

Object.assign(GLOSSARY, {
  "grande divisão": "Grupo de dois corpos de exército reunido sob um só general. Burnside dividiu o Exército do Potomac em três, em vez de comandar todos os corpos diretamente.",
  "mitrailleuse": "Arma francesa de muitos canos, que disparava rajadas quando o artilheiro girava uma manivela. Era um antepassado da metralhadora, mas ficava sobre uma carreta de canhão e era usada como artilharia.",
  "artilharia a cavalo": "Canhões leves puxados por cavalos, com os artilheiros também montados. Mudam de lugar depressa e atiram de surpresa, por exemplo no flanco do inimigo.",
  "flanco no ar": "Ponta de uma linha que não se apoia em rio, morro, mata ou outra tropa. O inimigo pode contorná-la e atacar por ali.",
  "guarda prussiana": "Corpo de elite do exército da Prússia, formado pelos regimentos mais tradicionais e por soldados escolhidos.",
  "marcha de flanco": "Marcha de um corpo de exército por um caminho escondido, em volta da linha inimiga, para atacá-la pelo lado ou por trás."
});

Object.assign(DEEP, {
  fredericksburg: {
    war: "Guerra Civil Americana (1861–1865)",
    hook: "Sete divisões da União atacaram um muro de pedra, uma depois da outra, e nenhuma chegou a ele.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim de 1862, o presidente Abraham Lincoln precisava de uma vitória. As invasões confederadas do Kentucky e de Maryland tinham sido barradas, mas os exércitos do Sul continuavam inteiros. Em 5 de novembro, Lincoln tirou o general George McClellan do comando do Exército do Potomac, que ele achava lento demais. Em 7 de novembro, assumiu Ambrose Burnside, que duvidava ser a pessoa certa para o posto.",
        "O plano de Burnside era simples: fingir que ia para o oeste, depois atravessar depressa o rio Rappahannock em Fredericksburg e seguir pela ferrovia até Richmond, a capital confederada. Lincoln aprovou em 14 de novembro, sem muita fé de que Lee reagiria como Burnside esperava. O plano dependia de velocidade. Mas as [[pontes de pontões|pontão]] que o exército precisava para cruzar o rio chegaram atrasadas, por erros administrativos: só uma parte estava em Falmouth em 25 de novembro, e o resto chegou no fim do mês.",
        { h: "O caminho até Fredericksburg" },
        { timeline: [
          ["5–7 nov 1862", "Lincoln demite McClellan. Burnside assume o Exército do Potomac."],
          ["14 nov", "Lincoln aprova o plano de cruzar o rio em Fredericksburg."],
          ["23 nov", "O corpo de Longstreet já ocupa a colina de Marye, atrás da cidade."],
          ["29 nov", "O corpo de Jackson chega, depois de uma marcha forçada desde Winchester."],
          ["9 dez", "Burnside decide cruzar o rio bem em frente à cidade."]
        ]},
        "Enquanto Burnside esperava as pontes, Lee concentrou seu exército. Primeiro achou que os federais atravessariam e depois recuariam. Quando viu que eles estavam lentos, reuniu as tropas em Fredericksburg."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ambrose Burnside" },
        "Era um general leal e querido pelos soldados, mas dizia que não tinha preparo para comandar um exército inteiro, e foi o primeiro a avisar isso a Lincoln. Em Fredericksburg, tomou uma decisão e não a mudou: quando viu que o ataque pela frente falhava, mandou repeti-lo. Suas ordens aos generais de ala eram vagas, e isso pesou no resultado.",
        { h: "Robert E. Lee" },
        "Comandava o Exército da Virgínia do Norte desde junho. Escolheu o chão com cuidado e esperou. Dizem que, ao ver o ataque federal desmoronar da colina que hoje leva seu nome, ele disse: 'É bom que a guerra seja tão terrível, ou acabaríamos gostando demais dela.' A frase é famosa, mas o texto exato é discutido.",
        { h: "Os outros nomes" },
        "Do lado confederado, James Longstreet, com seu corpo na colina de Marye, disse a Lee que poderia destruir qualquer força que atacasse aquele ponto. Thomas 'Stonewall' Jackson cobria o sul, na colina Prospect. Do lado da União, Burnside tinha dividido o exército em três [[grandes divisões|grande divisão]]: a direita, de Edwin Sumner; o centro, de Joseph Hooker; e a esquerda, de William Franklin."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A União tinha cerca de 120.000 homens, dos quais cerca de 114.000 entraram em combate. Os confederados somavam cerca de 78.500, com cerca de 72.500 em combate. Mais da metade do exército de Lee nem chegou a lutar.",
        { h: "O terreno" },
        "Fredericksburg fica na margem sul do Rappahannock. Do outro lado, nas colinas de Stafford, os federais puseram cerca de 220 canhões, que cobriam a cidade. Atrás da cidade, a planície corria cerca de 550 metros (600 jardas) até a colina de Marye, de 12 a 15 metros acima do chão. Um canal, a cerca de 180 metros (200 jardas) da cidade, cortava o caminho, e ele só podia ser cruzado por três pontes estreitas, que obrigavam as tropas a marchar em coluna. No pé da colina, a Telegraph Road passava numa [[estrada funda]], protegida por um muro de pedra de cerca de 1,2 metro, reforçado com troncos e [[abatis]]. Ao sul, a linha de Jackson corria ao longo da colina Prospect.",
        { h: "Atravessando o rio" },
        "Antes do amanhecer de 11 de dezembro, os engenheiros começaram a montar seis pontes. Os [[atiradores|franco-atirador]] da brigada do Mississippi, de William Barksdale, atiravam dos porões das casas e impediram o trabalho. Por volta das 15h, soldados do 7º de Michigan e do 19º e 20º de Massachusetts atravessaram em barcos e limparam a cidade rua por rua. Em 12 de dezembro, o resto do exército cruzou. Os soldados saquearam a cidade, o que irritou Lee.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, no sul, na manhã de 13 de dezembro. Uma neblina espessa cobria o campo até cerca das 10h30. A divisão de George Meade, com cerca de 4.500 homens, e a de John Gibbon avançaram às 8h30. Os canhões de John Pelham, [[montados|artilharia a cavalo]] na estrada de Richmond, atiraram no flanco de Meade, e as baterias de Walker, na colina Prospect, o detiveram por quase duas horas.",
        "Segundo, por volta das 13h, os homens de Meade atravessaram um buraco de cerca de 550 metros (600 jardas) na linha de A. P. Hill e desmancharam a brigada de Maxcy Gregg, que foi ferido de morte. Era a chance de partir a linha de Jackson. Mas Franklin não mandou reforços, embora tivesse cerca de 20.000 homens à mão. Os reservas de Jubal Early e de William Taliaferro contra-atacaram e empurraram Meade de volta. O ataque de Gibbon falhou, e Gibbon foi ferido. As perdas ali foram de cerca de 5.000 homens da União e 3.400 confederados.",
        "Terceiro, ao norte, do meio-dia até as 14h. Os homens de Sumner atacaram a colina de Marye em sequência: as divisões de French, Hancock, Howard e Sturgis. Cada uma saiu da cidade, cruzou o canal em coluna e foi destroçada pelo fogo do muro e da artilharia de Porter Alexander, no alto. A divisão de McLaws tinha cerca de 2.000 homens na linha da frente e cerca de 7.000 de reserva. A Brigada Irlandesa perdeu 545 de cerca de 1.200 homens. A divisão de Hancock teve 2.032 baixas, a maior da União naquele dia. Thomas Cobb, comandante confederado no muro, foi ferido de morte, e Joseph Kershaw o substituiu.",
        "Quarto, das 15h30 até escurecer. Hooker foi falar com Burnside para pedir que parasse os ataques e foi ordenado a continuar. As divisões de Griffin, Humphreys e Getty atacaram e foram repelidas. Ao todo, sete divisões fizeram catorze investidas, e nenhuma chegou perto do muro. As perdas da União na colina de Marye foram de 6.000 a 8.000 homens, contra cerca de 1.200 confederados.",
        { note: "Longstreet escreveu mais tarde que as cargas federais eram 'inúteis', sem esperança de sucesso." },
        { h: "A noite e a retirada" },
        "Em 14 de dezembro, Burnside pensou em comandar pessoalmente o IX Corpo num novo ataque, mas foi dissuadido. Pediu um cessar-fogo para recolher os feridos, e Lee concedeu. Na noite de 15 de dezembro, o exército da União atravessou o rio de volta e terminou a campanha."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A União perdeu 12.653 homens (1.284 mortos, 9.600 feridos e 1.769 prisioneiros ou desaparecidos). Os confederados perderam 5.377 (608 mortos, 4.116 feridos e 653 prisioneiros ou desaparecidos). Dois generais da União, George Bayard e Conrad Jackson, e dois confederados, Maxcy Gregg e Thomas Cobb, morreram de ferimentos.",
        "Burnside foi dispensado cerca de um mês depois, em janeiro de 1863, depois de uma tentativa de marcha de inverno, a 'Marcha da Lama', que o mau tempo transformou em fracasso. Joseph Hooker assumiu.",
        { h: "Por que importa" },
        "A batalha foi uma das mais desiguais da guerra. Em Fredericksburg, o lado que atacava perdeu mais que o dobro do outro, sem ganhar um metro. A derrota derrubou o moral no Norte. Lincoln teria dito: 'Se existe um lugar pior que o inferno, eu estou nele.' O governador da Pensilvânia, Andrew Curtin, visitou a Casa Branca e contou que Lincoln estava arrasado.",
        { h: "Curiosidades e controvérsias" },
        { note: "O 'Anjo da colina de Marye': o sargento Richard Kirkland, do 2º da Carolina do Sul, teria dado água aos feridos federais caídos diante do muro. A história foi registrada só em 1880 e pode ter sido embelezada." },
        { note: "A frase de Lee sobre a guerra ser terrível aparece em relatos de pessoas que a ouviram da colina. O texto exato é discutido, e a Wikipédia em inglês aponta que ela foi popularizada por Douglas Southall Freeman." },
        { note: "Burnside usava costeletas compridas, e a palavra inglesa 'sideburns' vem do nome dele." }
      ]}
    ]
  },

  chancellorsville: {
    war: "Guerra Civil Americana (1861–1865)",
    hook: "Lee dividiu seu exército duas vezes diante de um inimigo com mais que o dobro de homens, e ganhou.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em janeiro de 1863, depois de Fredericksburg e da Marcha da Lama, Joseph Hooker assumiu o Exército do Potomac. Ele reorganizou o exército, melhorou o moral e montou um serviço de informações melhor. Na primavera, tinha cerca de 134.000 homens e um plano.",
        "Um primeiro plano, baseado num raide de cavalaria de George Stoneman, falhou em abril por causa da chuva. O segundo era uma manobra dupla: parte do exército, sob John Sedgwick, ficaria diante de Fredericksburg para prender Lee, enquanto o grosso cruzava o rio Rappahannock rio acima e o atacava pelo oeste.",
        { h: "O caminho até Chancellorsville" },
        { timeline: [
          ["Jan 1863", "Hooker assume o Exército do Potomac."],
          ["30 abr", "O grosso do exército federal, depois de cruzar o rio rio acima, chega a Chancellorsville."],
          ["1 mai", "Lee deixa uma força pequena em Fredericksburg e vai atacar Hooker. Hooker recua para a mata do Wilderness."],
          ["2 mai", "Marcha de flanco de Jackson e ataque ao XI Corpo."],
          ["3 mai", "O dia mais sangrento. Hooker é ferido e o exército federal recua."],
          ["5–6 mai", "Os federais cruzam o rio de volta."]
        ]},
        "Lee tinha cerca de 60.000 homens. As divisões de Longstreet estavam longe, perto de Norfolk, uma ausência que Lee depois chamou de erro grave."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Joseph Hooker" },
        "Apelidado 'Fighting Joe', chegou ao posto com fama de agressivo. Em Chancellorsville, o que parou foi justamente a vontade de lutar: depois do primeiro dia, ele recuou para a defensiva, e muitos subordinados protestaram. Segundo uma frase que lhe é atribuída, antes da batalha, 'Meus planos são perfeitos. Que Deus tenha piedade do general Lee, porque eu não terei.' Não é possível confirmar a autoria.",
        { h: "Robert E. Lee" },
        "Ao ver um inimigo mais que o dobro do seu, não esperou. Dividiu o exército, deixando Jubal Early e uma pequena força em Fredericksburg, e foi com cerca de quatro quintos do exército atacar Hooker. Depois, dividiu de novo, mandando Jackson para o flanco. Os dois riscos eram enormes, e ele os assumiu juntos.",
        { h: "Thomas 'Stonewall' Jackson" },
        "Comandava o II Corpo, com cerca de 28.000 homens. Conduziu a marcha de flanco, tirou da jogada o XI Corpo e, à noite, foi baleado pelos próprios soldados.",
        { h: "Os outros nomes" },
        "Do lado federal, Oliver Howard comandava o XI Corpo, que ficou na ponta direita da linha. Daniel Sickles comandava o III Corpo e ocupava Hazel Grove. Do lado confederado, J. E. B. Stuart, da cavalaria, assumiu o corpo de Jackson depois que ele foi ferido."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A União tinha cerca de 133.868 homens presentes. Os confederados tinham cerca de 60.298. Os números são os da Wikipédia em inglês.",
        { h: "O terreno" },
        "Chancellorsville era só uma casa numa encruzilhada, no meio do Wilderness, uma mata cerrada e baixa em que era difícil enxergar, formar linha ou usar a artilharia. Era um bom lugar para um exército menor. Hazel Grove, uma clareira alta, dava vantagem de tiro a quem a ocupasse.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, em 1º de maio, Lee dividiu o exército e atacou o avanço de Hooker. Hooker interrompeu a ofensiva e recuou para o Wilderness, para defender Chancellorsville. Alguns historiadores veem nisso o erro decisivo da campanha.",
        "Segundo, em 2 de maio, Jackson fez uma [[marcha de flanco]] de cerca de 19 km com seus 28.000 homens, de 7h-8h da manhã até o meio da tarde. O proprietário da fornalha de Catharine, Charles Wellford, mostrou ao cartógrafo de Jackson, Jedediah Hotchkiss, uma estrada recém-aberta na mata. A cavalaria de Fitzhugh Lee descobriu que o XI Corpo de Howard estava com o [[flanco no ar]], acampado na estrada Orange Turnpike, com só dois canhões virados para a mata. Hooker tinha sido avisado, mas o corpo não estava preparado.",
        "Terceiro, por volta das 17h30, Jackson perguntou a Rodes: 'General, o senhor está pronto?' e mandou atacar. O XI Corpo se desfez. Depois de escurecer, Jackson voltava de um reconhecimento quando o 18º de Carolina do Norte, achando que eram cavaleiros federais, atirou nele. Jackson levou três balas, e seu braço esquerdo foi amputado.",
        "Quarto, em 3 de maio. Hooker mandou Sickles deixar Hazel Grove, e os confederados puseram ali 30 canhões, sob Porter Alexander. Às 9h15, uma bala de canhão atingiu a coluna de madeira em que Hooker se apoiava; ele provavelmente teve uma concussão e ficou desacordado por mais de uma hora. Fairview foi abandonada às 10h, e o exército federal começou a recuar para o rio. Foi o segundo dia mais sangrento da guerra.",
        { h: "Fredericksburg outra vez" },
        "Enquanto isso, Sedgwick atacou e venceu a pequena força confederada na colina de Marye, avançou para o oeste e foi detido em Salem Church. Hooker, depois, o culpou por não obedecer a uma ordem. Lee se virou contra Sedgwick, e este recuou em 5 de maio. Hooker cruzou o rio de volta na noite de 5 para 6 de maio."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A União perdeu cerca de 17.287 homens (1.606 mortos, 9.762 feridos e 6.919 prisioneiros ou desaparecidos). Os confederados perderam cerca de 12.764 (1.665 mortos, 9.081 feridos e 2.018 prisioneiros ou desaparecidos).",
        "Jackson morreu de pneumonia em 10 de maio. Lee comparou a perda à de seu braço direito.",
        { h: "Por que importa" },
        "Muitos historiadores chamam Chancellorsville de a 'batalha perfeita' de Lee, fruto de sua ousadia e das decisões hesitantes de Hooker. Mas a vitória custou Jackson. Um mês depois, Lee marchou para o norte, na campanha de Gettysburg, sem seu melhor comandante de corpo.",
        { h: "Curiosidades e controvérsias" },
        { note: "Longstreet ausente: duas de suas divisões estavam longe, perto de Norfolk. Lee depois considerou isso um grave erro de cálculo." },
        { note: "A ordem de recuar de 1º de maio é vista por muitos historiadores como o erro decisivo de Hooker, mas há quem aponte também o XI Corpo despreparado. As causas da derrota ainda são discutidas." }
      ]}
    ]
  },

  chickamauga: {
    war: "Guerra Civil Americana (1861–1865), campanha de Chickamauga",
    hook: "Uma ordem mal entendida abriu um buraco de poucos minutos, e por ele passou um exército.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1863, Chattanooga, no Tennessee, era uma das chaves da guerra: um nó ferroviário que ligava o Sul ao interior da Geórgia. Depois da campanha de Tullahoma, o general William Rosecrans, do Exército do Cumberland, avançou sobre a cidade. O general Braxton Bragg, do Exército do Tennessee, a evacuou no início de setembro.",
        "Rosecrans perseguiu Bragg e acabou com os corpos espalhados por cerca de 65 km. Bragg recebeu reforços do Mississippi e duas divisões de James Longstreet, que vieram da Virgínia de trem. Ele queria atacar os corpos federais antes que eles se juntassem. O exército de Rosecrans escapou por pouco de uma derrota em Davis's Cross Roads, em 11 de setembro, e se reuniu.",
        { h: "O caminho até Chickamauga" },
        { timeline: [
          ["Jun–ago 1863", "Rosecrans manobra e força Bragg a sair do centro do Tennessee."],
          ["Início de set", "Bragg abandona Chattanooga. Os corpos federais se espalham pela região."],
          ["11 set", "Os federais escapam por pouco de um ataque em Davis's Cross Roads."],
          ["19 set", "Primeiro dia de batalha, perto do riacho West Chickamauga."],
          ["20 set", "Segundo dia: o buraco na linha federal e a defesa de Thomas."]
        ]},
        "O nome vem do riacho West Chickamauga. A tradução popular, 'rio da morte', é uma tradução livre, segundo o historiador Peter Cozzens. Outras fontes dão 'água parada', 'boa terra' ou uma palavra chickasaw que quer dizer 'ser bom'."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "William Rosecrans" },
        "Comandava o Exército do Cumberland. Tinha tomado Chattanooga com manobras, quase sem lutar. Em Chickamauga, dependia de ordens ditadas rapidamente a oficiais, e uma delas saiu mal.",
        { h: "Braxton Bragg" },
        "Comandava o Exército do Tennessee. Depois da batalha, não perseguiu os federais, e o historiador Thomas Connelly o critica por ter perdido a chance de fechar a saída para Chattanooga. Brigou com Longstreet, a quem disse que não havia na ala direita 'um homem que tivesse luta dentro de si'.",
        { h: "George H. Thomas" },
        "Comandava o XIV Corpo, na ala esquerda federal. Segurou a linha duas vezes: de manhã, contra os ataques de Breckinridge e Cleburne, e à tarde, na colina Snodgrass e na Horseshoe Ridge.",
        { h: "James Longstreet" },
        "Chegou da Virgínia com duas divisões e comandou a ala esquerda confederada. Seu ataque, conduzido pelas divisões de Bushrod Johnson e de John Bell Hood, abriu a brecha por onde o exército federal quebrou."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O Exército do Cumberland tinha cerca de 60.000 homens: o XIV Corpo, de Thomas (22.781), o XX, de McCook (13.156), o XXI, de Crittenden (14.660), o [[Corpo de Reserva|reserva]], de Gordon Granger (7.372) e a cavalaria (10.078). O Exército do Tennessee tinha cerca de 65.000, divididos em duas alas: a direita, de Leonidas Polk, e a esquerda, de Longstreet. Os números são os da Wikipédia em inglês. Há estimativas um pouco diferentes em outros livros.",
        { h: "O terreno" },
        "Uma região coberta de mata fechada e clareiras, cortada pela estrada Lafayette, que corria de norte a sul, e pelo riacho West Chickamauga. Era um terreno em que os comandantes enxergavam pouco, e as tropas se perdiam, o que explica boa parte da confusão.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, em 19 de setembro, a luta começou quase por acaso, quando tropas federais e confederadas se encontraram perto de Jay's Mill e da ponte de Reed. Os ataques confederados foram desencontrados e não romperam a linha, embora tenham ganhado terreno perto dos campos de Brotherton e Viniard. A estimativa de Cozzens é de cerca de 6.000 a 9.000 baixas confederadas e cerca de 7.000 federais naquele dia, números difíceis de separar dos totais.",
        "Segundo, em 20 de setembro, o plano de Bragg de atacar a esquerda federal atrasou por confusão no comando. Os ataques de Breckinridge e Cleburne contra a linha de Thomas falharam.",
        "Terceiro, a ordem fatal. Rosecrans ditou a Thomas J. Wood a ordem: 'O general comandante determina que o senhor se feche sobre Reynolds o mais rápido possível e o apoie.' Wood tirou sua divisão da linha, e abriu-se um buraco. Às 11h10, a coluna de Longstreet, à frente as divisões de Bushrod Johnson e de Hood, atravessou o buraco no campo de Brotherton e destroçou as unidades federais ali. Hood foi baleado na coxa e perdeu a perna, amputada quase na altura do quadril. Rosecrans, James Garfield (seu chefe de estado-maior), McCook e Crittenden fugiram para Chattanooga. Cerca de um terço do exército federal foi desbaratado.",
        "Quarto, Thomas. Seus homens formaram uma linha na colina Snodgrass e na Horseshoe Ridge e repeliram ataque após ataque. Gordon Granger mandou a divisão de James Steedman para a Horseshoe Ridge sem ordens explícitas, e ela chegou à retaguarda justo quando Bushrod Johnson atacava. O 21º de Ohio, com fuzis Colt de repetição, gastou cerca de 43.550 cartuchos. Três regimentos que ficaram sem munição foram cercados e se renderam. Ao anoitecer, Thomas recuou para Chattanooga.",
        { note: "Garfield mandou a Rosecrans a mensagem 'Thomas está firme como uma rocha', e o apelido 'Rocha de Chickamauga' pegou." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A União perdeu 16.170 homens (1.657 mortos, 9.756 feridos e 4.757 prisioneiros ou desaparecidos). Os confederados perderam 18.454 (2.312 mortos, 14.674 feridos e 1.468 prisioneiros ou desaparecidos). Foi a segunda batalha mais sangrenta da guerra, depois de Gettysburg, e a maior derrota da União no Oeste.",
        "Bragg não perseguiu os federais com eficácia. Cercou Chattanooga. Rosecrans foi dispensado em 19 de outubro, e Thomas assumiu. Longstreet foi mandado a Knoxville, o que enfraqueceu Bragg. Em novembro, Grant rompeu o cerco, em Lookout Mountain (23 de novembro) e Missionary Ridge (25 de novembro), e abriu caminho para a campanha de Atlanta, de Sherman, em 1864.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: a Wikipédia dá 60.000 federais e 65.000 confederados. Outras fontes variam um pouco, e os limites de cada corpo também." },
        { note: "As datas: o quadro da Wikipédia indica 18 a 20 de setembro, o que provavelmente inclui as escaramuças do dia 18. A batalha em si foi em 19 e 20 de setembro." }
      ]}
    ]
  },

  atlanta: {
    war: "Guerra Civil Americana (1861–1865), campanha de Atlanta",
    hook: "Hood mandou um corpo inteiro dar a volta na retaguarda de Sherman, mas a marcha atrasou e o golpe perdeu a surpresa.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em maio de 1864, o general William T. Sherman saiu de Chattanooga rumo a Atlanta, na Geórgia, o grande nó ferroviário do Sul. Depois de semanas de manobras, o presidente confederado Jefferson Davis perdeu a paciência com o general Joseph Johnston, que recuava sempre, e o trocou por John Bell Hood, em 17-18 de julho. A data varia: a Wikipédia em inglês dá 17 e o American Battlefield Trust dá 18.",
        "Hood era agressivo. Atacou logo em Peachtree Creek, em 20 de julho, e perdeu mais de 2.500 homens sem resultado. Dois dias depois, tentou de novo, com um plano muito mais ambicioso.",
        { h: "O caminho até Atlanta" },
        { timeline: [
          ["Mai 1864", "Sherman avança de Chattanooga contra o Exército do Tennessee, de Johnston."],
          ["17–18 jul", "Hood substitui Johnston."],
          ["20 jul", "Hood ataca em Peachtree Creek e fracassa."],
          ["21–22 jul", "Durante a noite, o corpo de Hardee marcha em volta de Atlanta."],
          ["22 jul", "Batalha de Atlanta."]
        ]},
        "Sherman apertava Atlanta pelo norte e pelo leste. O Exército do Tennessee, de James McPherson, vinha do leste, por Decatur, e era a ponta esquerda federal."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "William T. Sherman" },
        "Comandava todas as forças federais da região. Primeiro achou que Hood estava evacuando Atlanta. Quando soube que não, mandou McPherson usar o XVI Corpo, de Grenville Dodge, para destruir a ferrovia da Geórgia. McPherson temia um ataque ao flanco esquerdo, e Sherman aceitou adiar a ordem até 13h. O ataque de Hardee começou antes de a ordem chegar.",
        { h: "James B. McPherson" },
        "Comandava o Exército do Tennessee. Percebeu o perigo antes que ele chegasse, e morreu por causa dele.",
        { h: "John Bell Hood" },
        "Substituiu Johnston poucos dias antes da batalha e queria acabar com o recuo. Planejou o ataque em três partes: o corpo de William Hardee faria uma marcha em volta da esquerda federal, a cavalaria de Joseph Wheeler atacaria os comboios perto de Decatur, e o corpo de Benjamin Cheatham atacaria de frente a partir das trincheiras de Atlanta.",
        { h: "Os outros nomes" },
        "John Logan, do XV Corpo, assumiu o Exército do Tennessee quando McPherson morreu. Frank Blair comandava o XVII Corpo, e Mortimer Leggett, uma de suas divisões. Do lado confederado, Patrick Cleburne e William Walker comandavam divisões do corpo de Hardee."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia em inglês dá 34.863 federais e 40.438 confederados presentes para o serviço, e, numa nota que cita Livermore, 30.477 e 36.934 efetivos. A variação vem do que cada fonte conta como 'presente'. Outras fontes dizem que só cerca de 9.000 dos 14.000 homens de Hardee chegaram a tempo.",
        { h: "O terreno" },
        "A linha federal olhava para Atlanta pelo leste, ao longo da ferrovia da Geórgia, com a esquerda, ao sul, [[aberta|flanco no ar]]. O ponto mais forte dessa esquerda era Bald Hill, uma colina sem árvores que dominava o campo, ocupada pela divisão de Leggett. Também é chamada de Leggett's Hill, por causa do general que a defendeu.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, a marcha atrasada. Hardee deixou as linhas durante a noite de 21 para 22 de julho, numa marcha de cerca de 24 km (15 milhas). A noite era quente, as estradas, empoeiradas, e os homens, exaustos, e as quatro divisões não chegaram à retaguarda de McPherson de manhã, como planejado. Ao se posicionar, William Walker foi morto por um atirador federal. O ataque começou um pouco depois do meio-dia.",
        "Segundo, as duas divisões da direita de Hardee, entre elas a de Walker, bateram na divisão de Thomas Sweeny, do XVI Corpo, que por acaso estava no lugar certo, e foram repelidas. Wheeler tomou Decatur, mas não conseguiu capturar o comboio.",
        "Terceiro, a brecha. A divisão de Cleburne se infiltrou entre o XVI e o XVII Corpos. McPherson, que cavalgava para ver o corpo de Blair, deu com parte dessa linha. Capitão Richard Beard, do 5º de infantaria confederado, disse ter feito sinal para que ele se rendesse. McPherson virou o cavalo e fugiu, e foi baleado e morto. Logan assumiu. Cleburne e Maney atacaram o XVII Corpo pela frente e por trás, e a linha federal dobrou-se num L, com a divisão de Leggett segurando Bald Hill até depois do escuro.",
        "Quarto, por volta das 15h, Hood mandou Cheatham atacar das [[trincheiras|trincheira]] de Atlanta. Seus homens, com as divisões de Brown e de Clayton, furaram a linha do XV Corpo na casa de Troup Hurt, junto à ferrovia, e tomaram uma bateria. Cerca de 20 canhões perto do quartel de Sherman atiraram neles, e Logan contra-atacou e refez a linha. Ao entardecer, os confederados tinham voltado ao ponto de partida.",
        { h: "Decatur" },
        "A leste, Wheeler entrou em Decatur pela Fayetteville Road. A brigada do coronel John Sprague, do XVI Corpo, segurou a cidade e salvou os comboios dos corpos XV, XVI, XVII e XX. Com o fracasso de Hardee, Wheeler recuou. Sprague recebeu a Medalha de Honra."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A União perdeu cerca de 3.700 homens (3.722 no relatório de Logan; outra fonte diz 3.641). Os confederados perderam cerca de 5.500 (5.000 a 5.500, segundo a fonte), mais algumas centenas na cavalaria de Wheeler.",
        "Hood não esmagou o flanco de Sherman. Sherman virou para o oeste em 27 de julho, para cortar a ferrovia de Macon. Houve outra luta, em Ezra Church (28 de julho), vitória federal. Em 31 de agosto, em Jonesboro, os federais tomaram a ferrovia de Macon. Hood evacuou Atlanta em 1º de setembro, destruindo depósitos e pondo fogo em 81 vagões de munição. Em 2 de setembro, o prefeito James Calhoun entregou a cidade. Sherman telegrafou: 'Atlanta é nossa, e ganha com justiça.'",
        { h: "Por que importa" },
        "A queda de Atlanta animou o Norte numa época em que a guerra parecia sem fim. Lincoln, que temia perder a eleição, foi reeleito com 212 de 233 votos no colégio eleitoral. Em 15 de novembro, Sherman saiu de Atlanta para a Marcha ao Mar.",
        { h: "Curiosidades e controvérsias" },
        { note: "A culpa: Hood acusou Hardee de não ter atacado a retaguarda federal. Para outros relatos, o que decidiu foi a posição do XVI Corpo e a firmeza do XVII." },
        { note: "O nome da colina: Bald Hill ('colina careca') e Leggett's Hill são a mesma posição, e o segundo nome vem do general que a defendeu." }
      ]}
    ]
  },

  gravelotte: {
    war: "Guerra Franco-Prussiana (1870–1871)",
    hook: "A Guarda prussiana atacou em campo aberto e perdeu quase metade dos homens, mas a batalha prendeu o exército francês em Metz.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A guerra de 1870 começou em julho, quando a França declarou guerra à Prússia. Os alemães, mais bem organizados, entraram rápido na Lorena. Em 16 de agosto, em Mars-la-Tour, barraram o caminho do [[marechal]] François Bazaine, comandante do Exército do Reno, para Verdun. Bazaine recuou e ocupou uma posição forte a oeste da fortaleza de Metz.",
        "A linha francesa corria de Rozerieulles, ao sul, até Saint-Privat, ao norte, sobre colinas suaves a leste do rio Mosela. Os franceses cavaram o que puderam durante a noite, com poucas ferramentas, e se abrigaram em cercas, muros baixos, aldeias e fazendas. Bazaine achava a posição quase impossível de tomar.",
        { h: "O caminho até Gravelotte" },
        { timeline: [
          ["Jul 1870", "A França declara guerra à Prússia."],
          ["16 ago", "Mars-la-Tour: os alemães barram a retirada de Bazaine para Verdun."],
          ["18 ago", "Batalha de Gravelotte-Saint-Privat."],
          ["19 ago", "O Exército do Reno recua para dentro de Metz."],
          ["2 set", "Sedan: Napoleão III se rende."],
          ["27 out", "Metz se rende depois de dois meses de [[cerco]]."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Helmuth von Moltke" },
        "Chefe do [[estado-maior]] prussiano, planejou a campanha. Em Gravelotte, o plano era um 'golpe de foice': o Segundo Exército cortaria a direita francesa, enquanto o Primeiro Exército avançava em Mance. O rei Guilherme I estava no campo.",
        { h: "Os generais prussianos" },
        "Karl von Steinmetz comandava o Primeiro Exército. Segundo o relato do HistoryNet e a Wikipédia em francês, desobedeceu a Moltke, que o mandara só usar artilharia, e mandou a infantaria atravessar a ravina. O príncipe Frederico Carlos comandava o Segundo Exército, e o príncipe Augusto de Württemberg, a Guarda. O príncipe herdeiro Alberto da Saxônia comandava os saxões do XII Corpo.",
        { h: "François Bazaine e seus corpos" },
        "Bazaine achava que o ataque principal viria contra a esquerda e o centro, e pôs ali a [[guarda imperial]] de reserva. Não tinha plano de contra-ataque geral. O marechal Canrobert comandava o VI Corpo em Saint-Privat, e o general Charles Bourbaki, a Guarda. Os historiadores discutem se a passividade de Bazaine foi incompetência ou cálculo.",
        { h: "Os dois exércitos" },
        "Os franceses tinham o [[chassepot]], fuzil de alcance maior que o [[fuzil de agulha]] prussiano, e a [[mitrailleuse]]. Os alemães tinham os canhões de aço da [[krupp]], mais precisos e de maior alcance."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia em inglês dá 188.332 alemães, com 210 batalhões de infantaria, 133 esquadrões de cavalaria e 732 canhões. Os franceses tinham 112.800 homens e 520 canhões. Um relato do HistoryNet fala em menos de 200.000 alemães e cerca de 110.000 franceses.",
        { h: "O terreno" },
        "As aldeias de Gravelotte, Amanvillers e Saint-Privat-la-Montagne marcavam a linha. À frente da esquerda francesa, ficava a ravina de Mance, que as tropas alemãs tiveram de atravessar sob fogo. Perto de Saint-Privat, a encosta era aberta, sem abrigo, e esse foi o ponto da maior matança.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, de manhã. Às 8h, Guilherme I e Moltke mandaram o Primeiro e o Segundo Exércitos avançar. O comando alemão acreditava que a direita francesa terminava perto de Amanvillers. Por volta do meio-dia, Manstein pôs a artilharia da 25ª Divisão para atirar perto de Amanvillers, e o fogo de chassepots e mitrailleuses deteve os alemães antes que os fuzis de agulha pudessem responder.",
        "Segundo, na tarde, ao sul. Às 14h30, Steinmetz mandou o VIII Corpo atravessar a ravina de Mance. Foi detido pelo fogo de fuzil e de mitrailleuse. Às 15h, os canhões Krupp do VII e do VIII Corpos abriram fogo. Às 16h, Steinmetz mandou adiante o VII Corpo e a 1ª Divisão de Cavalaria. Falhou também. Perto de 18h30, grande parte dos dois corpos entrou em pânico e recuou para Rezonville.",
        "Terceiro, ao norte, em Saint-Privat. O príncipe Frederico Carlos percebeu, por volta do meio-dia, que a linha francesa se estendia mais ao norte do que se pensava, e mandou a Guarda esperar os saxões. Cerca de 200 canhões bombardearam as posições francesas por horas, segundo um relato. Canrobert pediu reforços e recebeu só algumas centenas de cartuchos de artilharia. Bazaine, que via a luta como secundária, não mandou reservas. Às 16h50, a [[guarda prussiana]] atacou Saint-Privat, em campo aberto, brigada após brigada (17h15, 17h45, 18h15). Os ataques pararam a cerca de 900 metros (1.000 jardas) das linhas francesas, e alguns homens chegaram a cerca de 550 metros (600 jardas). Ao todo, perdeu cerca de 8.000 dos 18.000 homens. O batalhão de caçadores da Guarda perdeu 19 oficiais e 431 de 700 homens.",
        "Quarto, a volta. Às 19h, a 3ª Divisão do II Corpo atravessou a ravina, os saxões limparam Roncourt e viraram o flanco direito francês, e os sobreviventes da Guarda atacaram de novo. Entre 19h30 e 20h, Saint-Privat caiu, depois de um combate corpo a corpo no cemitério. Canrobert recuou com os restos de seu corpo. O resto do exército francês se retirou da direita para a esquerda. Alguns oficiais franceses queriam um contra-ataque, mas Bourbaki recusou-se a lançar a Guarda: havia pouca munição, a artilharia prussiana os flanqueava, e ele tinha perdido um quarto de seus homens. Os tiros pararam por volta das 22h. Os alemães não perseguiram.",
        { note: "A hora exata da queda de Saint-Privat varia: a Wikipédia em inglês dá 20h, outro relato dá cerca de 19h30." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os alemães perderam cerca de 20.160 homens (5.237 mortos, 14.430 feridos e 493 prisioneiros ou desaparecidos; o texto da Wikipédia dá 20.163). Os franceses perderam 12.275 (1.146 mortos, 6.709 feridos e 4.420 prisioneiros ou desaparecidos, metade deles feridos), mas os registros são incompletos. A maior parte das baixas alemãs veio do chassepot, e a maior parte das francesas, da artilharia.",
        "Na manhã de 19 de agosto, o Exército do Reno recuou para Metz. Em 20 de agosto, os alemães completaram o cerco, cortando o telégrafo e a ferrovia para Thionville. Steinmetz foi mais tarde afastado do comando.",
        { h: "Por que importa" },
        "Foi a maior batalha da guerra. Fechou a última saída do Exército do Reno para o oeste. Duas semanas depois, em Sedan, o próprio Napoleão III se rendeu, e em 27 de outubro Bazaine fez o mesmo em Metz. Para os militares, mostrou o poder do fogo de fuzil contra a infantaria em formação cerrada e o valor da artilharia de aço.",
        { h: "Curiosidades e controvérsias" },
        { note: "A decisão da Guarda: muitos historiadores criticam o ataque frontal da Guarda a Saint-Privat, em campo aberto, antes de os saxões terem chegado ao flanco." },
        { note: "O nome: os alemães chamam a batalha de Gravelotte, os franceses, de Saint-Privat." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  fredericksburg: {
    terrain: [
      { t: "sea", x: -5, y: 11, w: 110, h: 5, l: "Rio Rappahannock" },
      { t: "hill", x: 14, y: 36, rx: 9, ry: 15, l: "Colina de Marye" },
      { t: "hill", x: 80, y: 50, rx: 11, ry: 8, l: "Colina Prospect" },
      { t: "note", x: 3, y: 3, l: "Colinas de Stafford" },
      { t: "note", x: 27, y: 20, l: "Fredericksburg" },
      { t: "note", x: 90, y: 3, l: "Norte ↑" }
    ],
    units: [
      { id: "aGun", s: "a", k: "art", w: 26, h: 3, l: "Artilharia federal em Stafford (≈ 220 canhões)" },
      { id: "aII", s: "a", k: "inf", w: 10, h: 4, l: "II Corpo (French, Hancock, Howard)" },
      { id: "aIX", s: "a", k: "inf", w: 10, h: 4, l: "Sturgis (IX Corpo)" },
      { id: "aHk", s: "a", k: "inf", w: 12, h: 4, l: "Hooker: Griffin, Humphreys, Getty" },
      { id: "aMe", s: "a", k: "inf", w: 10, h: 4, l: "Meade" },
      { id: "aGi", s: "a", k: "inf", w: 8, h: 4, l: "Gibbon" },
      { id: "aFr", s: "a", k: "inf", w: 12, h: 4, l: "Reserva de Franklin (≈ 20.000)" },
      { id: "bBa", s: "b", k: "inf", w: 6, h: 3, l: "Barksdale (atiradores nas casas)" },
      { id: "bMa", s: "b", k: "inf", w: 4, h: 12, l: "Cobb e Kershaw (muro de pedra)" },
      { id: "bAl", s: "b", k: "art", w: 8, h: 3, l: "Artilharia de Alexander" },
      { id: "bHi", s: "b", k: "inf", w: 10, h: 4, l: "A. P. Hill (Gregg)" },
      { id: "bEa", s: "b", k: "inf", w: 10, h: 4, l: "Early e Taliaferro (reservas)" },
      { id: "bPe", s: "b", k: "art", w: 6, h: 3, l: "Pelham (artilharia a cavalo)" }
    ],
    steps: [
      { t: "11 de dezembro de 1862, antes do amanhecer. A União está do lado norte do rio, sob os canhões de Stafford. Os confederados ocupam a colina de Marye, atrás da cidade, e a colina Prospect, ao sul, onde está Jackson.",
        p: { aGun: [30, 4], aII: [22, 7], aIX: [34, 7], aHk: [48, 7], aMe: [66, 7], aGi: [76, 7], aFr: [88, 7],
             bBa: [28, 24], bMa: [14, 36], bAl: [18, 28], bHi: [78, 46], bEa: [88, 56], bPe: [66, 40] } },
      { t: "Os engenheiros federais começam a lançar as pontes. Os atiradores de Barksdale, escondidos nos porões da cidade, atiram neles e impedem o trabalho.",
        p: { aII: [27, 13], aIX: [34, 13] } },
      { t: "Por volta das 15h, soldados atravessam em barcos e limpam a cidade rua por rua. Em 12 de dezembro, o resto do exército cruza as pontes, enquanto Franklin cruza ao sul. Barksdale recua para a colina.",
        p: { aII: [28, 22], aIX: [34, 23], aHk: [46, 15], aMe: [70, 18], aGi: [78, 18], aFr: [88, 18], bBa: [18, 32] } },
      { t: "13 de dezembro, de manhã, no sul. Na neblina, a divisão de Meade avança sobre a colina Prospect. A artilharia a cavalo de Pelham atira no flanco dela e as baterias da colina a seguram por quase duas horas.",
        p: { aMe: [72, 36], aGi: [80, 34], bPe: [92, 34] } },
      { t: "Por volta das 13h, os homens de Meade passam por um buraco na linha de A. P. Hill e desmancham a brigada de Gregg. É a chance de partir a linha de Jackson.",
        p: { aMe: [78, 48], aGi: [82, 44], bHi: [84, 54] } },
      { t: "Franklin não manda os cerca de 20.000 homens da reserva. Early e Taliaferro contra-atacam e empurram Meade de volta. O ataque de Gibbon falha.",
        p: { bEa: [80, 46], aMe: [72, 34], aGi: [78, 32], bHi: [86, 54] } },
      { t: "No norte, desde o meio-dia. As divisões de Sumner saem da cidade, cruzam o canal em coluna e atacam o muro de pedra na colina de Marye, uma depois da outra. Cada uma é destroçada.",
        p: { aII: [26, 33], aIX: [27, 38] } },
      { t: "Das 15h30 ao anoitecer. Hooker discute com Burnside e é mandado atacar. Griffin, Humphreys e Getty tentam e são repelidos. Ao todo, sete divisões fazem catorze investidas, e nenhuma chega ao muro.",
        p: { aHk: [27, 28], aII: [30, 26] } },
      { t: "Burnside pensa em atacar de novo em 14 de dezembro, mas desiste. Lee concede uma trégua para os feridos. Na noite de 15 de dezembro, o exército federal volta para o outro lado do rio.",
        p: { aII: [22, 7], aIX: [34, 7], aHk: [48, 7], aMe: [66, 7], aGi: [76, 7], aFr: [88, 7] } }
    ]
  },

  chancellorsville: {
    terrain: [
      { t: "sea", x: -5, y: 2, w: 110, h: 5, l: "Rio Rappahannock" },
      { t: "hill", x: 54, y: 46, rx: 5, ry: 4, l: "Hazel Grove" },
      { t: "note", x: 38, y: 36, l: "Chancellorsville" },
      { t: "note", x: 84, y: 14, l: "Fredericksburg" },
      { t: "note", x: 2, y: 66, l: "Norte ↑" }
    ],
    units: [
      { id: "aXI", s: "a", k: "inf", w: 10, h: 4, l: "XI Corpo (Howard)" },
      { id: "aMn", s: "a", k: "inf", w: 12, h: 5, l: "Corpos de Hooker em Chancellorsville" },
      { id: "aSk", s: "a", k: "inf", w: 8, h: 4, l: "III Corpo (Sickles, Hazel Grove)" },
      { id: "aSe", s: "a", k: "inf", w: 10, h: 4, l: "Sedgwick (VI Corpo)" },
      { id: "bLe", s: "b", k: "inf", w: 10, h: 5, l: "Lee (Anderson e McLaws)" },
      { id: "bJk", s: "b", k: "inf", w: 12, h: 5, l: "Corpo de Jackson (≈ 28.000)" },
      { id: "bFL", s: "b", k: "cav", w: 8, h: 4, l: "Cavalaria de Fitzhugh Lee" },
      { id: "bEa", s: "b", k: "inf", w: 9, h: 4, l: "Early e Barksdale (Fredericksburg)" },
      { id: "bWi", s: "b", k: "inf", w: 7, h: 4, l: "Wilcox (Salem Church)" }
    ],
    steps: [
      { t: "Fim de abril de 1863. Hooker, com ≈ 134.000 homens, cruza o rio rio acima e chega a Chancellorsville. Sedgwick fica diante de Fredericksburg. Lee tem ≈ 60.000 e deixa Early e Barksdale lá.",
        p: { aXI: [24, 30], aMn: [44, 32], aSk: [54, 42], aSe: [86, 20], bLe: [74, 34], bJk: [70, 42], bFL: [62, 54], bEa: [88, 30], bWi: [80, 40] } },
      { t: "1º de maio. Lee dividiu o exército e ataca o avanço de Hooker. Hooker interrompe a ofensiva e recua para dentro do Wilderness. Muitos veem nisso o erro decisivo.",
        p: { bLe: [60, 36], bJk: [58, 42], aMn: [44, 32] } },
      { t: "Noite de 1º de maio. Lee e Jackson decidem dividir de novo. A cavalaria de Fitzhugh Lee descobre que o XI Corpo está com o flanco no ar, na ponta oeste da linha.",
        p: { bFL: [34, 46] } },
      { t: "2 de maio, da manhã até o meio da tarde. Jackson marcha cerca de 19 km, por uma estrada de floresta, em volta da linha federal, rumo ao oeste. Lee fica com pouco mais que uma cortina de tropas diante de Hooker.",
        p: { bJk: [30, 58], bFL: [22, 46] } },
      { t: "Por volta das 17h30, Jackson cai sobre o XI Corpo, que estava de costas para a mata. O corpo se desfaz.",
        p: { bJk: [20, 32], aXI: [26, 30] }, x: ["aXI"] },
      { t: "Ao anoitecer, o ataque perde força. Depois de escurecer, Jackson, que voltava de um reconhecimento, é baleado pelos próprios soldados, perde o braço esquerdo e passa o comando a Stuart.",
        p: { bJk: [30, 34] } },
      { t: "3 de maio. Hooker manda Sickles deixar Hazel Grove, e os confederados põem ali 30 canhões. Lee ataca por dois lados. Às 9h15, uma bala de canhão atinge uma coluna ao lado de Hooker, e ele fica desacordado. Os federais recuam para o rio.",
        p: { bJk: [48, 44], bLe: [54, 36], aMn: [44, 14], aSk: [50, 14] } },
      { t: "Em Fredericksburg, Sedgwick vence a pequena força na colina de Marye e avança para o oeste. Wilcox o detém em Salem Church.",
        p: { aSe: [76, 24], bEa: [90, 34], bWi: [80, 28] } },
      { t: "Lee se vira contra Sedgwick, que recua em 5 de maio. Na noite de 5 para 6 de maio, Hooker cruza o rio de volta.",
        p: { aSe: [80, 8], aMn: [44, 8], aSk: [52, 8], bLe: [76, 28] } }
    ]
  },

  chickamauga: {
    terrain: [
      { t: "hill", x: 30, y: 36, rx: 7, ry: 6, l: "Colina Snodgrass e Horseshoe Ridge" },
      { t: "note", x: 3, y: 3, l: "Para Chattanooga ↑" },
      { t: "note", x: 47, y: 3, l: "Estrada Lafayette" },
      { t: "note", x: 46, y: 10, l: "Campo Kelly" },
      { t: "note", x: 48, y: 46, l: "Campo Brotherton" },
      { t: "note", x: 90, y: 66, l: "Norte ↑" }
    ],
    units: [
      { id: "aTh", s: "a", k: "inf", w: 4, h: 14, l: "XIV Corpo (Thomas)" },
      { id: "aCr", s: "a", k: "inf", w: 4, h: 10, l: "XXI Corpo (Crittenden)" },
      { id: "aWo", s: "a", k: "inf", w: 4, h: 6, l: "Divisão de Wood" },
      { id: "aMc", s: "a", k: "inf", w: 4, h: 12, l: "Ala direita (McCook)" },
      { id: "aGr", s: "a", k: "inf", w: 8, h: 4, l: "Reserva (Granger e Steedman)" },
      { id: "bPo", s: "b", k: "inf", w: 4, h: 14, l: "Ala direita (Polk): Breckinridge, Cleburne" },
      { id: "bLg", s: "b", k: "inf", w: 4, h: 14, l: "Ala esquerda (Longstreet): B. Johnson e Hood" }
    ],
    steps: [
      { t: "19 de setembro de 1863. A linha federal corre ao longo da estrada Lafayette, com Thomas ao norte e McCook ao sul. Os confederados chegam pelo leste. A luta começa quase por acaso, perto de Jay's Mill.",
        p: { aTh: [42, 16], aCr: [42, 32], aWo: [42, 43], aMc: [42, 54], aGr: [30, 4], bPo: [58, 16], bLg: [66, 44] } },
      { t: "Ao longo do dia, os ataques confederados são desencontrados e não rompem a linha, embora ganhem terreno nos campos de Brotherton e Viniard. Longstreet, com duas divisões vindas da Virgínia, chega à noite.",
        p: { bPo: [54, 16], bLg: [58, 44] } },
      { t: "20 de setembro, de manhã. O plano de Bragg de atacar a esquerda federal atrasa. Breckinridge e Cleburne atacam a linha de Thomas e são repelidos.",
        p: { bPo: [48, 14], aCr: [42, 34] } },
      { t: "Rosecrans manda Wood se fechar sobre Reynolds. Wood tira a divisão da linha, e abre-se um buraco perto do campo de Brotherton.",
        p: { aWo: [41, 24], bLg: [52, 44] } },
      { t: "Às 11h10, a coluna de Longstreet, com as divisões de Bushrod Johnson e de Hood à frente, atravessa o buraco e destroça a ala direita federal.",
        p: { bLg: [44, 46], aMc: [38, 54] }, x: ["aMc"] },
      { t: "Rosecrans, McCook e Crittenden fogem para Chattanooga. Hood é ferido na coxa e perde a perna. Cerca de um terço do exército federal está desfeito.",
        p: { bLg: [36, 46], aCr: [32, 44] } },
      { t: "Thomas forma uma defesa na colina Snodgrass e na Horseshoe Ridge. Steedman, da reserva de Granger, chega à retaguarda sem ordens explícitas e reforça a linha. Os confederados atacam várias vezes e falham.",
        p: { aTh: [30, 30], aWo: [31, 36], aCr: [31, 40], aGr: [30, 22], bPo: [42, 22], bLg: [40, 40] } },
      { t: "Ao anoitecer, Thomas se retira para Chattanooga. Os confederados ocupam as colinas e cercam a cidade.",
        p: { aTh: [20, 6], aWo: [22, 8], aCr: [24, 10], aGr: [26, 4], bPo: [32, 24], bLg: [32, 36] } }
    ]
  },

  atlanta: {
    terrain: [
      { t: "hill", x: 50, y: 46, rx: 5, ry: 5, l: "Bald Hill" },
      { t: "note", x: 2, y: 30, l: "Atlanta" },
      { t: "note", x: 28, y: 26, l: "Ferrovia da Geórgia" },
      { t: "note", x: 84, y: 12, l: "Decatur" },
      { t: "note", x: 90, y: 3, l: "Norte ↑" }
    ],
    units: [
      { id: "aXV", s: "a", k: "inf", w: 5, h: 14, l: "XV Corpo (Logan)" },
      { id: "aXVII", s: "a", k: "inf", w: 5, h: 14, l: "XVII Corpo (Blair)" },
      { id: "aLeg", s: "a", k: "inf", w: 5, h: 5, l: "Leggett (Bald Hill)" },
      { id: "aXVI", s: "a", k: "inf", w: 5, h: 8, l: "XVI Corpo (Dodge)" },
      { id: "aSw", s: "a", k: "inf", w: 6, h: 5, l: "Sweeny (XVI Corpo)" },
      { id: "aGun", s: "a", k: "art", w: 6, h: 3, l: "≈ 20 canhões (quartel de Sherman)" },
      { id: "aSp", s: "a", k: "inf", w: 6, h: 4, l: "Sprague (Decatur, comboios)" },
      { id: "bCh", s: "b", k: "inf", w: 5, h: 14, l: "Cheatham (Brown e Clayton)" },
      { id: "bWB", s: "b", k: "inf", w: 10, h: 4, l: "Divisões da direita de Hardee (Walker)" },
      { id: "bCl", s: "b", k: "inf", w: 10, h: 4, l: "Cleburne e Maney (Hardee)" },
      { id: "bWh", s: "b", k: "cav", w: 8, h: 4, l: "Cavalaria de Wheeler" }
    ],
    steps: [
      { t: "22 de julho de 1864. A linha federal olha para Atlanta pelo leste: XV Corpo ao norte, XVII no meio, XVI ao sul. A esquerda está aberta. Hardee deixou a cidade durante a noite e marcha em volta, pelo sul, enquanto a cavalaria de Wheeler segue para Decatur.",
        p: { aXV: [44, 20], aXVII: [46, 36], aLeg: [50, 46], aXVI: [52, 58], aSw: [58, 62], aGun: [36, 12], aSp: [84, 18],
             bCh: [20, 22], bWB: [30, 66], bCl: [20, 66], bWh: [66, 66] } },
      { t: "A marcha atrasa: a noite é quente, as estradas estão empoeiradas e os homens, exaustos. Hardee não chega à retaguarda a tempo e ataca assim que a alcança. Perto do meio-dia, Walker é morto por um atirador. As divisões da direita de Hardee batem no XVI Corpo, que por acaso estava no lugar certo, e são repelidas.",
        p: { bWB: [48, 62], bCl: [34, 62], bWh: [78, 36] } },
      { t: "Cleburne descobre uma brecha entre o XVI e o XVII Corpos e se infiltra. McPherson cavalga justamente para lá, recebe voz de rendição, foge e é morto. Logan assume o exército.",
        p: { bCl: [46, 51] } },
      { t: "Cleburne e Maney atacam o XVII Corpo pela frente e por trás. A linha federal se dobra em forma de L, e a divisão de Leggett segura Bald Hill até depois do escuro.",
        p: { aXVII: [40, 36], aLeg: [50, 45], bCl: [52, 50] } },
      { t: "Por volta das 15h, Hood manda Cheatham atacar das trincheiras de Atlanta. Seus homens furam a linha do XV Corpo junto à ferrovia, na casa de Troup Hurt, e tomam canhões.",
        p: { bCh: [38, 22], aXV: [44, 20], aGun: [38, 14] } },
      { t: "Cerca de 20 canhões perto do quartel de Sherman atiram nos atacantes. Logan contra-ataca e refaz a linha do XV Corpo. Ao fim da tarde, os confederados voltaram ao ponto de partida.",
        p: { bCh: [22, 22], aXV: [40, 22] } },
      { t: "Em Decatur, Wheeler pega a Fayetteville Road e entra na cidade, mas a brigada de Sprague segura os comboios dos corpos XV, XVI, XVII e XX.",
        p: { bWh: [84, 24], aSp: [84, 18] } },
      { t: "Hardee continua atacando Bald Hill até o anoitecer, sem tomá-la. Wheeler recua. A União perde cerca de 3.700 homens e os confederados, cerca de 5.500.",
        p: { bWh: [66, 40], bCl: [56, 50] } }
    ]
  },

  gravelotte: {
    terrain: [
      { t: "hill", x: 74, y: 14, rx: 6, ry: 7, l: "Saint-Privat" },
      { t: "note", x: 66, y: 32, l: "Amanvillers" },
      { t: "note", x: 30, y: 62, l: "Gravelotte" },
      { t: "note", x: 44, y: 56, l: "Ravina de Mance" },
      { t: "note", x: 78, y: 3, l: "Roncourt" },
      { t: "note", x: 2, y: 28, l: "Sainte-Marie-aux-Chênes" },
      { t: "note", x: 90, y: 63, l: "Metz" },
      { t: "note", x: 2, y: 3, l: "Norte ↑" }
    ],
    units: [
      { id: "aI", s: "a", k: "inf", w: 14, h: 5, l: "VII e VIII Corpos (Steinmetz)" },
      { id: "aIX", s: "a", k: "inf", w: 12, h: 5, l: "IX Corpo (Manstein)" },
      { id: "aG", s: "a", k: "inf", w: 12, h: 5, l: "Guarda prussiana (Augusto de Württemberg)" },
      { id: "aSx", s: "a", k: "inf", w: 12, h: 5, l: "XII Corpo saxão" },
      { id: "aGn", s: "a", k: "art", w: 14, h: 3, l: "≈ 200 canhões contra Saint-Privat" },
      { id: "aII", s: "a", k: "inf", w: 10, h: 5, l: "II Corpo (chega à noite)" },
      { id: "bII", s: "b", k: "inf", w: 5, h: 10, l: "II Corpo (Frossard)" },
      { id: "bIII", s: "b", k: "inf", w: 5, h: 10, l: "III Corpo (Le Boeuf)" },
      { id: "bIV", s: "b", k: "inf", w: 5, h: 10, l: "IV Corpo (Ladmirault)" },
      { id: "bVI", s: "b", k: "inf", w: 6, h: 10, l: "VI Corpo (Canrobert) em Saint-Privat" },
      { id: "bGd", s: "b", k: "inf", w: 8, h: 5, l: "Guarda Imperial (Bourbaki, reserva)" }
    ],
    steps: [
      { t: "18 de agosto de 1870, de manhã. A linha francesa corre de Rozerieulles, ao sul, a Saint-Privat, ao norte, com a Guarda de reserva. Os alemães chegam do oeste. Moltke acredita que a direita francesa termina perto de Amanvillers.",
        p: { aI: [30, 54], aIX: [32, 38], aG: [26, 22], aSx: [20, 10], aGn: [44, 24], aII: [14, 46],
             bII: [72, 54], bIII: [72, 42], bIV: [72, 32], bVI: [74, 18], bGd: [84, 40] } },
      { t: "Por volta do meio-dia, a artilharia de Manstein abre fogo perto de Amanvillers. Os chassepots e as mitrailleuses detêm os alemães antes que os fuzis de agulha possam responder.",
        p: { aIX: [48, 38] } },
      { t: "Às 14h30, Steinmetz manda o VIII Corpo atravessar a ravina de Mance, e às 16h manda o VII. Os dois são detidos pelo fogo francês. Os franceses não contra-atacam.",
        p: { aI: [50, 54] } },
      { t: "Ao norte, o príncipe Frederico Carlos percebe que a linha francesa vai além do esperado. A Guarda espera os saxões, que passam por Sainte-Marie-aux-Chênes. Cerca de 200 canhões castigam Saint-Privat por horas. Canrobert pede reforços e quase não recebe nada.",
        p: { aSx: [36, 8], aG: [36, 22], aGn: [50, 20] } },
      { t: "Às 16h50, a Guarda prussiana ataca Saint-Privat em campo aberto, brigada após brigada. O fogo francês os detém a cerca de 900 metros da linha. Perde cerca de 8.000 de 18.000 homens.",
        p: { aG: [60, 20] } },
      { t: "Por volta das 18h30, boa parte do VII e do VIII Corpos entra em pânico e recua para Rezonville. Bourbaki mantém a Guarda Imperial na reserva.",
        p: { aI: [28, 60] } },
      { t: "Por volta das 19h, os saxões limpam Roncourt e dobram o flanco direito francês. O II Corpo prussiano atravessa a ravina de Mance. Os sobreviventes da Guarda atacam de novo.",
        p: { aSx: [74, 4], aII: [42, 52], aG: [64, 20] } },
      { t: "Entre 19h30 e 20h, Saint-Privat cai, depois de um combate corpo a corpo no cemitério. Canrobert recua, e o resto do exército francês se retira da direita para a esquerda. Os alemães não perseguem.",
        p: { bVI: [84, 26], bIV: [78, 32], aG: [72, 18], aSx: [76, 10] } },
      { t: "19 de agosto de manhã. O Exército do Reno, esgotado, recua para dentro de Metz. Em 20 de agosto, os alemães fecham o cerco. Em 27 de outubro, Bazaine se rende.",
        p: { bII: [88, 54], bIII: [88, 46], bIV: [88, 38], bVI: [88, 30], bGd: [92, 42] } }
    ]
  }
});
