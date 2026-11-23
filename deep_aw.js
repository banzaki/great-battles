// In-depth battles, batch aw: jena, koniggratz, okinawa (great-battles pack, part 1).
// Checked against the English, French, German and Portuguese Wikipedia articles on Jena-Auerstedt, Koniggratz and
// Okinawa, the Wikipedia order-of-battle notes, History of War's account of Koniggratz, and the works those pages cite.
// Where sources disagree the text says so.
// Gallipoli and the Battle of Britain were part of the brief, but they already exist (ids "galipoli" and "inglaterra"),
// so they are not written again. Auerstedt is told in the text of "jena" but is not drawn: the diagram follows the
// better-documented fight at Jena (a second diagram would not fit the 100 x 70 canvas next to it).

Object.assign(GLOSSARY, {
  "quarta coalizão": "Aliança de 1806 contra a França, formada por Prússia, Rússia, Reino Unido, Saxônia e Suécia. A Prússia entrou em outubro e foi derrotada em poucas semanas.",
  "marcha forçada": "Marcha mais longa e rápida que o normal, com poucas paradas. Cansa os soldados, mas pode pôr um exército onde o inimigo não espera.",
  "ordem de batalha": "A lista de quais unidades um exército tem e quem comanda cada uma. Também se diz do modo como elas são postas no terreno.",
  "carregamento pela boca": "Modo antigo de recarregar: o soldado enfia a pólvora e a bala pela boca do cano com uma vareta. Em pé, é lento e deixa o atirador exposto.",
  "kikusui": "'Crisântemos flutuantes', em japonês: o nome dado aos grandes ataques aéreos em massa contra a frota americana em Okinawa. Foram dez, entre abril e junho de 1945.",
  "seppuku": "Suicídio ritual japonês, com uma lâmina, tradicional entre os samurais. Em 1945, oficiais japoneses o usaram para não se render."
});

Object.assign(DEEP, {
  jena: {
    war: "Guerra da Quarta Coalizão (1806–1807)",
    hook: "No mesmo dia, em dois campos de batalha, Napoleão derrubou o exército de Frederico, o Grande, e um dos seus marechais fez o resto sozinho.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1806, a Prússia se achava dona do melhor exército da Europa. Era a herança de Frederico, o Grande, que tinha lutado a [[guerra dos sete anos]] mais de 40 anos antes, e os oficiais prussianos viviam dessa fama. Napoleão, por sua vez, tinha derrotado a Áustria e a Rússia em Austerlitz, em dezembro de 1805, e, em 1806, criado a [[confederação do reno]], que a Prússia viu como uma ameaça.",
        "A Prússia, que tinha ficado de fora das guerras anteriores, entrou na [[quarta coalizão]] em 1806. No começo de outubro, exigiu que os franceses recuassem para além do Reno. A resposta foi a [[grande armée]], que já estava no sul da Alemanha.",
        { h: "O caminho até Jena" },
        { timeline: [
          ["Agosto de 1806", "A Prússia mobiliza o exército, mas demora mais de um mês para fechar a [[ordem de batalha]]."],
          ["Início de outubro", "A Prússia exige a retirada francesa para o outro lado do Reno."],
          ["8 a 10 de outubro", "A Grande Armée cruza a Floresta da Turíngia em três colunas, em [[marcha forçada]]."],
          ["10 de outubro", "Em Saalfeld, o marechal Lannes vence a vanguarda prussiana. O príncipe Luís Fernando, primo do rei, morre na luta."],
          ["13 de outubro", "Napoleão chega a Jena, e Lannes e a Guarda ocupam à noite o morro de Landgrafenberg."]
        ]},
        "Nesse momento, Napoleão acreditava ter à sua frente o grosso do exército prussiano. Estava enganado: o grosso, comandado pelo duque de Brunswick, estava mais ao norte, e os dois exércitos iam se encontrar em dois lugares diferentes, no mesmo dia."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão Bonaparte, 37 anos" },
        "Imperador dos franceses havia dois anos. Em Jena, comandou pessoalmente e foi bem: percebeu que os prussianos tinham ficado parados e jogou contra eles tudo o que tinha. Mas errou no principal: convencido de que o inimigo estava todo diante dele, mandou Davout apenas completar a manobra pelo norte.",
        { h: "Louis-Nicolas Davout, 36 anos" },
        "[[marechal]] da França e comandante do 3º [[corpo de exército]]. Duro, metódico e míope. Em Auerstedt, enfrentou sozinho o exército principal do inimigo e não recuou.",
        { h: "Do lado prussiano" },
        "O rei Frederico Guilherme III era indeciso. O duque de Brunswick, de 71 anos, comandava o exército principal. O príncipe Hohenlohe comandava o corpo em Jena, e o general Rüchel guardava Weimar com uns 15.000 homens. O comando era dividido, cheio de conselheiros e sem um chefe que mandasse de verdade, e foi esse vício, mais do que a coragem dos soldados, que decidiu o dia.",
        { h: "Os outros nomes" },
        "Do lado francês: Lannes, Soult, Ney, Augereau e Murat, o comandante da cavalaria. E o marechal Bernadotte, que devia marchar com Davout e acabou não aparecendo em nenhum dos dois campos de batalha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam muito conforme a fonte. Em Jena, Napoleão tinha cerca de 40.000 a 56.000 homens de manhã, e o número subiu até quase 96.000 ao longo do dia. Mas só uns 54.000 chegaram a combater. Hohenlohe tinha cerca de 38.000 prussianos e saxões, e Rüchel, em Weimar, outros 15.000 que chegaram tarde.",
        "Em Auerstedt, Davout tinha cerca de 27.300 homens e 44 canhões. O exército principal prussiano, com Brunswick, era de uns 50.000, ou 64.000 segundo outros historiadores, com uma cavalaria muito mais forte: cerca de 8.800 cavaleiros contra 1.300 franceses.",
        { h: "O terreno" },
        "Jena fica num vale fundo do rio Saale, e acima dela, a leste, sobe o morro de Landgrafenberg, que dá para uma meseta aberta onde os prussianos acampavam. Quem tomasse o morro dominava a saída do vale. Auerstedt fica uns 20 km ao norte, perto da estrada que vem de Naumburg, com a aldeia de Hassenhausen no meio do campo.",
        { h: "A noite antes" },
        "Os prussianos não ocuparam o Landgrafenberg. Lannes e a Guarda subiram na noite de 13 para 14 de outubro, e às 4h Napoleão falou aos soldados. Quando o dia nasceu, havia neblina espessa sobre a meseta.",
        { h: "Jena em quatro movimentos" },
        { formation: true },
        "Primeiro, às 6h da manhã, Lannes atacou em meio à neblina o corpo prussiano de Tauentzien, perto de Closewitz. Ele tomou a aldeia e empurrou Tauentzien para trás, em direção a Vierzehnheiligen. Pela direita, a divisão de Saint-Hilaire, do corpo de Soult, apareceu de um terreno escondido e atingiu o [[flanco]] do pequeno corpo de Holtzendorff, que desmanchou por volta das 10h.",
        "Segundo, um erro francês. Ney avançou sem ordem com a cavalaria ligeira e cinco batalhões, tomou uma bateria e ficou longe de qualquer apoio, de [[quadrado]] formado, sob fogo. Napoleão mandou socorro e ordenou a Lannes que rompesse até Vierzehnheiligen. Foi o pior momento da manhã.",
        "Terceiro, a hesitação de Hohenlohe. Ele percebeu pelas 9h que enfrentava o exército principal e pediu ajuda a Rüchel, mas, esperando-o, deixou cerca de 20.000 soldados de infantaria parados, a céu aberto, durante umas duas horas. Foi o tempo de que Napoleão precisava: as outras divisões francesas chegaram, e ele passou a ter em campo cerca de 96.000 homens, embora só uns 54.000 tenham chegado a lutar.",
        "Quarto, por volta das 13h, o ataque geral. Augereau, Soult, Lannes e Ney avançaram juntos, a linha prussiana cedeu, e a [[cavalaria]] de Murat varreu a infantaria que recuava. Rüchel chegou a Kapellendorf perto da uma da tarde, tarde demais, e foi esmagado. Murat entrou em Weimar depois das 16h.",
        { h: "Enquanto isso, em Auerstedt" },
        "Davout saiu de Naumburg de manhã cedo, com neblina. A divisão de Gudin encontrou a cavalaria e a artilharia prussianas e se pôs em defesa em Hassenhausen. Blücher atacou com a cavalaria e fez Gudin recuar. Perto das 9h30 chegou a divisão de Friant, que formou [[quadrado]]s, e Davout escondeu parte das tropas atrás de uma crista, no [[terreno morto]], para atacar a cavalaria de Blücher quando ela subisse.",
        "Pouco antes das 10h, Brunswick mandou um ataque geral a Hassenhausen e levou um tiro na cabeça, que o cegou. Schmettau e Wartensleben foram feridos, e ninguém assumiu o comando. A divisão de Morand chegou e cobriu o flanco de Gudin. Às 11h, Davout contra-atacou. Ao meio-dia o centro prussiano quebrou, e o rei mandou recuar. A reserva de Kalckreuth, que incluía a cavalaria da Guarda, nunca entrou na luta.",
        { note: "A comparação: Davout tinha pouco mais da metade dos homens do inimigo e quase nenhuma cavalaria, e perdeu cerca de um quarto do corpo (7.000 a 7.400 homens). Mesmo assim, ganhou. Os historiadores apontam a firmeza dele e a confusão do comando prussiano, que perdeu três generais em poucas horas." },
        { note: "Bernadotte: o marechal estava com seu corpo perto e não marchou para Auerstedt. Napoleão o culpou depois, mas ninguém achou uma ordem escrita de ir com Davout, e é possível que o imperador tenha jogado a culpa em outro para esconder seu próprio erro. Davout e Bernadotte ficaram inimigos." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Em Jena, os franceses perderam entre 5.000 e 7.500 homens, e os prussianos e saxões entre 10.000 e 12.000 mortos e feridos, mais 10.000 a 15.000 prisioneiros. Em Auerstedt, os franceses perderam de 7.000 a 7.400 e os prussianos cerca de 13.000. Segundo muitos relatos, os prussianos que fugiam dos dois campos se cruzaram na estrada de Weimar, e o recuo virou desordem.",
        "A perseguição foi o que arrasou a Prússia. Erfurt capitulou em 16 de outubro. Davout entrou em Berlim em 25 de outubro, por ordem de Napoleão, que entrou dois dias depois. Hohenlohe se rendeu em 28 de outubro, perto de Prenzlau. Blücher, encurralado em Lübeck, se rendeu em 7 de novembro com uns 9.000 homens. Magdeburgo caiu em 11 de novembro. O rei fugiu para a Prússia Oriental.",
        { h: "Por que importa" },
        "Em Tilsit, em julho de 1807, a Prússia perdeu cerca de metade do território. Em 1808, foi obrigada a limitar o exército a 42.000 homens e a pagar uma indenização de 120 milhões de francos. A derrota abriu os olhos de uma geração: Scharnhorst, Gneisenau e Clausewitz serviram em Jena e dali tiraram as reformas que, sete anos depois, em 1813, ajudaram a derrotar Napoleão.",
        "Davout recebeu o título de duque de Auerstedt. Em Paris, Napoleão mandou construir a ponte de Iéna para lembrar a vitória.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome: Napoleão julgou ter enfrentado o exército principal em Jena. Hoje os historiadores juntam os dois nomes, porque foi em Auerstedt que Davout encontrou o grosso do exército prussiano." },
        { note: "Conta-se que, quando soube de Davout, Napoleão teria dito: 'Seu marechal está vendo dobrado!'. A piada se apoiava na miopia de Davout. É uma anedota; não há como confirmar as palavras exatas." },
        { note: "Os números: os historiadores discordam em quase tudo. Por exemplo, os prussianos em Auerstedt vão de 50.000 a 64.000, e os franceses em campo em Jena, de 40.000 a 96.000. Usamos as faixas, e dizemos de quem é cada uma quando a diferença importa." }
      ]}
    ]
  },

  koniggratz: {
    war: "Guerra Austro-Prussiana (junho a agosto de 1866)",
    hook: "Uma tarde de chuva e névoa decidiu a guerra e tirou a Áustria do comando do mundo alemão.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de 1815, o mundo alemão era uma coleção de 39 estados reunidos numa Confederação Germânica presidida pela Áustria. A Prússia, que crescia em indústria e ferrovias, queria mandar. Em 1864, os dois países tinham tomado juntos da Dinamarca os ducados de Schleswig e Holstein, e a divisão do prêmio azedou a relação.",
        "O primeiro-ministro da Prússia, Otto von Bismarck, queria a guerra e a preparou: fez uma aliança com a Itália, que queria a Venécia, que era austríaca. A Áustria, por sua vez, tinha o apoio da maioria dos estados alemães, entre eles a Saxônia, o Hanôver e a Baviera.",
        { h: "O caminho até Königgrätz" },
        { timeline: [
          ["Junho de 1866", "A Prússia ocupa Holstein e invade a Saxônia, o Hanôver e Hesse. A guerra começa."],
          ["27 de junho", "O exército de Hanôver vence em Langensalza, mas, cercado, se rende dois dias depois."],
          ["Fim de junho", "Três exércitos prussianos entram na Boêmia por passagens diferentes e travam combates de fronteira."],
          ["Início de julho", "Benedek concentra o Exército do Norte numa linha de colinas perto da fortaleza de Königgrätz."],
          ["3 de julho", "A grande batalha, a maior da Europa desde Leipzig, em 1813."]
        ]},
        "A ideia de Moltke era atravessar as montanhas em colunas separadas, que se uniriam no campo de batalha. Costuma-se resumi-la na frase 'marchar separados, bater juntos'. Funcionava, mas deixava os exércitos longe uns dos outros e dependia do telégrafo."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Helmuth von Moltke, 65 anos" },
        "Chefe do [[estado-maior]] prussiano desde 1857. Era um planejador frio e metódico. Usou as ferrovias para pôr os soldados na fronteira depressa e o telégrafo para mandar as ordens.",
        { h: "Ludwig von Benedek, 61 anos" },
        "General respeitado, veterano da guerra na Itália (Solferino, em 1859). Conhecia a Itália, não a Boêmia nem as suas tropas, e aceitou a contragosto o comando do Exército do Norte. Depois da batalha, disse ao imperador que a catástrofe que ele havia previsto tinha acontecido.",
        { h: "Do lado prussiano" },
        "O rei Guilherme I, de 69 anos, e Bismarck assistiram à batalha de perto. O Primeiro Exército era do príncipe Friedrich Karl, o Exército do Elba do general Herwarth von Bittenfeld, e o Segundo Exército do príncipe herdeiro Frederico Guilherme.",
        { h: "Do lado austríaco" },
        "Benedek comandava o Exército do Norte, com os saxões do príncipe Alberto à esquerda. Entre os generais de corpo, Festetics (4º Corpo) e Thun (2º Corpo), cujos movimentos abriram uma brecha na linha ao norte."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números diferem conforme a fonte. A Prússia tinha cerca de 220.000 homens e 700 canhões, divididos em três exércitos. A Áustria e a Saxônia reuniam entre 205.000 e 215.000, com cerca de 23.000 saxões e uns 600 a 650 canhões. As duas armas pesavam: o [[fuzil de agulha]] Dreyse, prussiano, era de [[retrocarga]] e deixava o soldado atirar deitado. O fuzil Lorenz, austríaco, era de [[carregamento pela boca]]. Em compensação, a artilharia austríaca tinha mais alcance e dominou a primeira metade do dia.",
        { note: "O peso do fuzil de agulha é discutido. Durante muito tempo se disse que ele ganhou a batalha. Hoje os historiadores dão mais peso à organização prussiana, ao comando e às ferrovias, e lembram que a artilharia austríaca dominou a primeira metade do dia." },
        { h: "O terreno" },
        "Uma região de colinas suaves, aldeias e campos de trigo entre o riacho Bistritz, a oeste, e o rio Elba, a leste, com a fortaleza de Königgrätz atrás da linha austríaca. A linha de Benedek corria pelas colinas de Lipa e Chlum, no centro, com os saxões ao sul, em Problus, e dois corpos de exército ao norte, na direção do bosque de Swiepwald. Os austríacos tinham fortificado a linha em parte e posto os canhões nas colinas, de onde cobriam o riacho.",
        { h: "A noite antes" },
        "Na noite de 2 de julho, os prussianos souberam que Benedek estava parado ali. Moltke ordenou que o Primeiro Exército e o do Elba atacassem pela frente, e que o Segundo Exército, mais ao norte, marchasse sobre o [[flanco]] direito austríaco. Por causa de uma linha telegráfica cortada, a ordem só chegou ao príncipe herdeiro por volta das 4h. O Primeiro Exército saiu do acampamento às 2h, sob chuva.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, de manhã cedo, a divisão de Horn tomou Sadová e cruzou o Bistritz. A artilharia austríaca, na colina, abriu fogo e segurou o avanço. Perto das 8h30, a divisão de Fransecky entrou no bosque de Swiepwald, no flanco esquerdo prussiano, e lutou ali contra os corpos de Festetics e de Thun. Os austríacos retomaram boa parte do bosque por volta das 11h. Em volta do meio-dia, a luta no bosque tinha amainado.",
        "Segundo, a demora do Exército do Elba. Ele devia atacar os saxões pelo sul, mas só tinha duas divisões do outro lado do riacho às 11h. O Primeiro Exército ficou sozinho debaixo dos canhões durante horas. Uma parte dos historiadores critica que ele não tenha lançado a cavalaria nessa hora; ninguém sabe se teria funcionado.",
        "Terceiro, a chegada do Segundo Exército. Por volta de 13h, a Guarda prussiana, com a divisão de Hiller, atacou a colina de Chlum pelo norte, e às 14h45 estava dentro da aldeia. Chlum era uma das colinas principais da linha de Benedek, e perdê-la rompeu a posição. Benedek, ao saber, ainda contra-atacou e mandou o 6º Corpo, que limpou Rosberitz, mas não passou dali.",
        "Quarto, o desmoronamento. Ao sul, os saxões contra-atacaram por volta das 14h e foram empurrados para fora de Problus. Por volta das 15h, Benedek aceitou a derrota e mandou o exército recuar para as pontes do Elba. A cavalaria austríaca investiu em carga para cobrir a retirada, ao preço de cerca de 2.000 homens, e a artilharia segurou a perseguição por um tempo. Moltke mandou parar às 18h30 e deu o dia 4 de julho de descanso.",
        { note: "Moltke queria cercar o inimigo, e não conseguiu: parte do exército austríaco escapou pelas pontes. Mesmo assim, foi a maior vitória da Prússia." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Prússia perdeu cerca de 9.200 homens, entre eles 1.935 mortos. A Áustria e a Saxônia perderam entre 31.000 e 44.000, conforme a fonte, contando cerca de 20.000 a 22.000 prisioneiros. Os austríacos deixaram também de 116 a 187 canhões, conforme a fonte. Benedek foi afastado e mandado ficar calado sobre a batalha.",
        "As negociações foram rápidas. A paz preliminar de Nikolsburg saiu em 26 de julho, e o Tratado de Praga, em 23 de agosto. Segundo os relatos, Bismarck insistiu numa paz branda com a Áustria, contra o rei e os generais, que queriam ir mais longe. Foi ele quem venceu a discussão.",
        { h: "Por que importa" },
        "A Áustria saiu da Alemanha. A Prússia anexou o Hanôver, Hesse-Kassel, Nassau e Frankfurt, e criou a [[confederação do norte da alemanha]], em 1867, sob sua liderança. A Áustria cedeu a Venécia à Itália e, em 1867, fez um acordo com os húngaros e virou a Áustria-Hungria.",
        "A França viu na vitória um perigo para si e passou a falar em 'vingança por Sadová'. Em 1870, essa tensão levou à guerra franco-prussiana, e dela nasceu o Império Alemão.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números de baixas variam muito: 9.172 prussianos mortos, feridos e desaparecidos é a soma mais citada, mas as baixas austríacas e saxãs vão de 31.000 a 44.000, dependendo de quem conta e de como conta os prisioneiros." },
        { note: "A frase 'Os prussianos não atiram tão depressa assim!' virou ditado alemão ligado a esta batalha. Há várias explicações para a origem dela, e não se sabe qual é a verdadeira." },
        { note: "O combate no Swiepwald não estava nos planos de Benedek: pelo menos uma fonte diz que um comandante de corpo austríaco decidiu ocupar o bosque por iniciativa própria, e a luta ali desgastou a ala direita da linha." }
      ]}
    ]
  },

  okinawa: {
    war: "Segunda Guerra Mundial, Guerra do Pacífico (1945)",
    hook: "A mais sangrenta batalha do Pacífico: 82 dias numa ilha onde viviam centenas de milhares de civis.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo de 1945, o Japão já tinha perdido as Filipinas, e os americanos tinham acabado de tomar Iwo Jima. Faltava o último passo antes do arquipélago principal: Okinawa, uma ilha de uns 100 km de comprimento no sul do Japão, anexada pelo país em 1879 e habitada por okinawanos, com língua e cultura próprias.",
        "Os americanos queriam Okinawa como base aérea e ponto de partida para uma possível invasão do arquipélago principal. A operação, de codinome Iceberg, foi a maior operação anfíbia do Pacífico.",
        { h: "O caminho até Okinawa" },
        { timeline: [
          ["26 de março de 1945", "Tropas tomam as ilhas Kerama, a oeste de Okinawa, para ter um fundeadouro."],
          ["1º de abril", "O desembarque principal, em Hagushi, na costa oeste. Os campos de pouso de Yontan e Kadena são tomados em poucas horas."],
          ["6 e 7 de abril", "Primeiro grande ataque kamikaze e saída do encouraçado Yamato. O Yamato é afundado em 7 de abril."],
          ["Abril e maio", "Dois meses de combates em torno da linha de Shuri, no sul."],
          ["29 de maio", "Shuri cai, mas os japoneses já tinham se retirado mais ao sul."],
          ["18 de junho", "O general Buckner morre por fogo de artilharia."],
          ["21 e 22 de junho", "Fim da resistência organizada."]
        ]},
        "O Japão sabia que não ia ganhar. O objetivo agora era custar tanto aos americanos que eles aceitassem uma paz negociada."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Simon Bolivar Buckner Jr., 58 anos" },
        "General do Décimo Exército e filho de um general confederado. Foi morto em 18 de junho, quando observava a linha de frente, por estilhaços de coral levantados por um tiro de artilharia. Foi o oficial americano de maior patente morto por fogo inimigo na guerra.",
        { h: "Mitsuru Ushijima, 57 anos" },
        "Comandante do 32º Exército japonês. O coronel Hiromichi Yahara, chefe de operações, queria uma defesa de desgaste no sul, nas cavernas. O chefe do estado-maior, Isamu Chō, queria atacar. Ushijima seguiu Chō em abril, perdeu muita gente e voltou ao plano de Yahara.",
        { h: "Outros nomes" },
        "O almirante Raymond Spruance comandava a Quinta Frota, e o vice-almirante Richmond Turner, a fase do desembarque. O almirante Marc Mitscher comandava os porta-aviões. Do lado japonês, o contra-almirante Minoru Ōta comandava os cerca de 9.000 marinheiros que combatiam em terra. O vice-almirante Seiichi Itō comandava a missão do Yamato."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são os mais discutidos. O Décimo Exército americano tinha cerca de 183.000 combatentes no início. Outra contagem chega a uns 541.000, o que provavelmente inclui quem serviu na frota e no apoio. A Marinha tinha, segundo uma contagem, 18 couraçados, 27 cruzadores e 39 porta-aviões, e a frota britânica entrou com 251 aviões. Os japoneses tinham cerca de 100.000 homens: 67.000 a 77.000 do 32º Exército, 9.000 marinheiros e uns 39.000 recrutas okinawanos, os boeitai.",
        { h: "O terreno" },
        "O norte de Okinawa é montanhoso e coberto de mata. O sul é de colinas de calcário cheias de cavernas, com tumbas de família escavadas na rocha. O castelo de Shuri, antiga sede dos reis de Ryukyu, ficava no meio da linha de defesa. Foi o chão ideal para uma [[defesa em profundidade]] subterrânea, e os japoneses a prepararam por meses.",
        { h: "A estratégia de Ushijima" },
        "O 32º Exército não defendeu as praias. Ushijima deixou os americanos fazerem o [[desembarque anfíbio]] e os esperou no sul, onde cada colina era um [[bunker]]. Era a ideia do coronel Yahara: uma [[guerra de atrito]], para custar o máximo possível ao inimigo.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, o desembarque, em 1º de abril, domingo de Páscoa. A frota despejou fogo, e dezenas de milhares de soldados foram para a terra na praia de Hagushi, quase sem tiros. Os campos de Yontan e Kadena foram tomados em poucas horas. A 6ª Divisão de [[fuzileiros navais]] seguiu para o norte e limpou a península de Motobu e o monte Yae-Dake. Ie Shima, uma ilha ao lado, foi tomada em 21 de abril.",
        "Segundo, a frota debaixo de fogo. Entre abril e junho, os japoneses fizeram dez grandes ataques aéreos em massa, os [[kikusui]], com cerca de 1.400 a 1.500 saídas em larga escala, mais as de pilotos individuais, muitas de [[kamikaze]]. Em 7 de abril, o Yamato e outros nove navios saíram do Japão para uma missão suicida. Aviões de porta-aviões afundaram o Yamato e outros cinco navios antes de chegarem a Okinawa. Morreram de 3.700 a 4.000 homens da força. A frota aliada perdeu 36 navios afundados, segundo uma das contagens (outras dão menos), e teve 368 danificados, entre eles o porta-aviões Bunker Hill, em 11 de maio, com cerca de 400 mortos e desaparecidos.",
        "Terceiro, a linha de Shuri. Em 12 de abril e em 4 de maio, os japoneses contra-atacaram em toda a frente, e em 4 de maio tentaram até desembarques atrás das linhas americanas. Os dois ataques fracassaram, e o 32º Exército voltou a se defender. Os americanos atacaram em 19 de abril, com uma barragem de 324 canhões, mas a investida de tanques contra o morro de Kakazu falhou e custou 22 tanques. O avanço foi de morro em morro, com [[lança-chamas]] e granadas, contra cavernas: Kakazu, Maeda (o 'Hacksaw Ridge'), Sugar Loaf, Conical. Em fins de maio, as monções transformaram o campo de batalha em lama.",
        "Quarto, o fim no sul. Os japoneses abandonaram Shuri, e os fuzileiros tomaram o castelo em 29 de maio. O 32º Exército recuou para a península de Kiyan, na ponta sul. Em 13 de junho, o almirante Ōta e uns 4.000 marinheiros se mataram nos túneis de Oroku. Buckner morreu em 18 de junho. A resistência organizada acabou em 21 de junho, e Ushijima e Chō cometeram [[seppuku]] em seu quartel-general no morro 89.",
        { note: "Os okinawanos chamam a batalha de 'tufão de aço', pela quantidade de projéteis. Costuma ser descrita como a maior batalha combinada de terra, mar e ar da história." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os Estados Unidos tiveram cerca de 12.500 mortos e, no total, cerca de 50.000 baixas em combate. Os japoneses perderam entre cerca de 94.000 e 110.000 homens, e a conta maior inclui recrutas okinawanos. Foi a primeira vez no Pacífico em que milhares de soldados japoneses se renderam, muitos deles okinawanos recrutados à força.",
        "Os civis pagaram o preço mais alto. As estimativas vão de uns 42.000 (cálculo americano) a cerca de 150.000 (cálculo de historiadores okinawanos), e a prefeitura fala em mais de 100.000. Muitos morreram no fogo cruzado, de fome ou escondidos em cavernas. Houve suicídios em massa, que sobreviventes dizem terem sido ordenados ou incentivados pelos soldados, que distribuíam granadas. Cerca de 90% dos prédios da ilha foram destruídos.",
        { h: "Por que importa" },
        "Os americanos ficaram com a ilha até 1972, e Kadena continua sendo uma das maiores bases americanas na Ásia. A presença militar é, até hoje, motivo de protestos dos moradores.",
        { h: "Curiosidades e controvérsias" },
        { note: "A bomba atômica: alguns historiadores dizem que o custo de Okinawa levou os americanos a preferir as bombas a uma invasão. Outros apontam várias causas para a rendição do Japão, entre elas a entrada da União Soviética na guerra. O debate segue aberto." },
        { note: "Os estudantes: o exército recrutou cerca de 1.780 meninos de 14 a 17 anos para as unidades Tekketsu Kinnōtai, e perto de metade morreu. Estudantes mulheres serviram como enfermeiras, entre elas o grupo Himeyuri. Mais ou menos 2.000 estudantes de 21 escolas morreram." },
        { note: "Os mortos: o memorial Pedra Angular da Paz, em Mabuni, inaugurado em 1995, grava os nomes de todos os que morreram, de todas as nacionalidades, inclusive os dos japoneses e dos americanos. Passa de 240.000 nomes." },
        { note: "Fontes: o general Yahara sobreviveu e escreveu um relato do lado japonês. As fontes divergem ainda sobre quantos kamikazes partiram de Taiwan e de Kyushu, sobre as perdas navais e sobre o número exato de civis mortos." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  jena: {
    terrain: [
      { t: "hill", x: 82, y: 38, rx: 13, ry: 20, l: "Landgrafenberg" },
      { t: "note", x: 84, y: 66, l: "Jena e o rio Saale" },
      { t: "note", x: 48, y: 5, l: "Auerstedt: outra batalha, 20 km ao norte" },
      { t: "note", x: 4, y: 64, l: "Weimar" },
      { t: "note", x: 42, y: 66, l: "Vierzehnheiligen" }
    ],
    units: [
      { id: "lan", s: "a", k: "inf", w: 5, h: 12, l: "Lannes (5º Corpo)" },
      { id: "sou", s: "a", k: "inf", w: 5, h: 11, l: "Soult e Saint-Hilaire" },
      { id: "aug", s: "a", k: "inf", w: 5, h: 10, l: "Augereau" },
      { id: "ney", s: "a", k: "inf", w: 4, h: 7, l: "Ney" },
      { id: "gua", s: "a", k: "inf", w: 4, h: 6, l: "Guarda Imperial" },
      { id: "mur", s: "a", k: "cav", w: 5, h: 12, l: "Murat (cavalaria)" },
      { id: "ten", s: "b", k: "inf", w: 4, h: 9, l: "Tauentzien" },
      { id: "hol", s: "b", k: "inf", w: 4, h: 7, l: "Holtzendorff" },
      { id: "hoh", s: "b", k: "inf", w: 5, h: 20, l: "Hohenlohe (Grawert e Zechwitz)" },
      { id: "cvp", s: "b", k: "cav", w: 5, h: 10, l: "Cavalaria prussiana e saxã" },
      { id: "rue", s: "b", k: "inf", w: 5, h: 13, l: "Rüchel (vem de Weimar)" }
    ],
    steps: [
      { t: "Na noite de 13 para 14 de outubro, Lannes e a Guarda ocupam o morro de Landgrafenberg, que os prussianos deixaram vazio. Os outros corpos franceses vêm atrás, pelas estradas. Os prussianos de Hohenlohe estão na meseta, e Rüchel, em Weimar. Há neblina cerrada.",
        p: { lan: [76, 36], gua: [84, 38], sou: [80, 22], aug: [86, 54], ney: [92, 44], mur: [92, 30], ten: [56, 36], hol: [58, 8], hoh: [38, 38], cvp: [38, 56], rue: [14, 52] } },
      { t: "6h: Lannes ataca na neblina o corpo de Tauentzien, perto de Closewitz, e toma a aldeia. Tauentzien recua para Vierzehnheiligen.",
        p: { lan: [64, 36], ten: [54, 36] } },
      { t: "Por volta das 9h, a neblina sobe e Hohenlohe percebe que enfrenta o exército principal. Pede ajuda a Rüchel e manda a infantaria de Grawert avançar.",
        p: { hoh: [44, 38], ten: [52, 34], lan: [60, 36] } },
      { t: "Por volta das 10h, a divisão de Saint-Hilaire sai de um terreno escondido e bate no flanco de Holtzendorff, que se desmancha e foge.",
        p: { sou: [64, 16], hol: [52, 8] }, x: ["hol"] },
      { t: "Um erro: Ney avança sem ordem, longe de qualquer apoio, e fica cercado, em quadrado. Napoleão manda socorro e ordena que Lannes avance. Hohenlohe hesita por umas duas horas.",
        p: { ney: [56, 28], lan: [57, 37], hoh: [43, 38] } },
      { t: "Por volta de 11h30, Augereau ataca pelo sul, no desfiladeiro, e as outras divisões francesas chegam. Napoleão passa a ter em campo cerca de 96.000 homens, embora só uns 54.000 cheguem a lutar.",
        p: { aug: [56, 52], sou: [54, 24], lan: [52, 37], ney: [54, 30], gua: [70, 38] } },
      { t: "Às 13h, ataque geral. A linha prussiana cede. Hohenlohe manda recuar, e a cavalaria de Murat varre a infantaria que foge.",
        p: { lan: [46, 37], aug: [48, 52], sou: [46, 24], mur: [44, 36], hoh: [30, 42], cvp: [30, 54] }, x: ["ten", "hoh"] },
      { t: "Rüchel chega a Kapellendorf, tarde demais, e é esmagado pela infantaria e pelos couraceiros. Murat entra em Weimar depois das 16h. A batalha de Jena está decidida.",
        p: { rue: [20, 50], mur: [10, 54], lan: [34, 40], ney: [38, 34] }, x: ["rue", "cvp"] }
    ]
  },

  koniggratz: {
    terrain: [
      { t: "sea", x: 36, y: 0, w: 2, h: 70, l: "" },
      { t: "note", x: 34, y: 68, l: "Bistritz" },
      { t: "sea", x: 96, y: 0, w: 6, h: 70, l: "" },
      { t: "note", x: 91, y: 68, l: "Elba" },
      { t: "hill", x: 66, y: 30, rx: 9, ry: 9, l: "Chlum e Lipa" },
      { t: "note", x: 44, y: 14, l: "Bosque de Swiepwald" },
      { t: "note", x: 50, y: 52, l: "Problus" },
      { t: "note", x: 28, y: 36, l: "Sadová" }
    ],
    units: [
      { id: "p1", s: "a", k: "inf", w: 5, h: 18, l: "Primeiro Exército (Friedrich Karl)" },
      { id: "pSw", s: "a", k: "inf", w: 6, h: 7, l: "Fransecky (7ª Divisão)" },
      { id: "pEl", s: "a", k: "inf", w: 5, h: 13, l: "Exército do Elba (Herwarth)" },
      { id: "p2", s: "a", k: "inf", w: 12, h: 5, l: "Segundo Exército (príncipe herdeiro)" },
      { id: "pG", s: "a", k: "inf", w: 8, h: 4, l: "Guarda (Hiller)" },
      { id: "pCv", s: "a", k: "cav", w: 5, h: 10, l: "Cavalaria prussiana" },
      { id: "bSax", s: "b", k: "inf", w: 5, h: 10, l: "Saxões (Problus)" },
      { id: "bCe", s: "b", k: "inf", w: 5, h: 14, l: "3º e 10º Corpos (Lipa e Chlum)" },
      { id: "bNo", s: "b", k: "inf", w: 5, h: 11, l: "2º e 4º Corpos" },
      { id: "bRe", s: "b", k: "inf", w: 5, h: 14, l: "Reserva (1º e 6º Corpos)" },
      { id: "bAr", s: "b", k: "art", w: 3, h: 16, l: "Artilharia na colina" },
      { id: "bCv", s: "b", k: "cav", w: 5, h: 12, l: "Cavalaria austríaca" },
      { id: "fort", s: "b", k: "camp", w: 7, h: 6, l: "Königgrätz" }
    ],
    steps: [
      { t: "3 de julho, de madrugada, sob chuva. Benedek espera nas colinas atrás do Bistritz, com a fortaleza de Königgrätz às costas. O Primeiro Exército, no centro, sai do acampamento às 2h. O Exército do Elba vem do sul. O Segundo Exército está mais ao norte e só recebeu a ordem por volta das 4h.",
        p: { p1: [24, 36], pSw: [28, 16], pEl: [24, 56], p2: [58, 3], pG: [48, 3], pCv: [14, 36], bSax: [52, 56], bCe: [62, 34], bNo: [62, 14], bRe: [76, 30], bAr: [56, 32], bCv: [84, 50], fort: [90, 40] } },
      { t: "Por volta das 8h, a divisão de Horn toma Sadová e cruza o riacho. A artilharia austríaca, na colina, abre fogo e segura o avanço.",
        p: { p1: [32, 36], bAr: [57, 32] } },
      { t: "Às 8h30, a divisão de Fransecky entra no bosque de Swiepwald e luta contra os corpos de Festetics e Thun. Os austríacos retomam boa parte do bosque até as 11h.",
        p: { pSw: [44, 16], bNo: [54, 14] } },
      { t: "O Exército do Elba demora. Às 11h só tem duas divisões do outro lado do riacho, e os saxões seguram Problus. O Primeiro Exército fica horas sob os canhões, e Benedek não lança a cavalaria.",
        p: { pEl: [36, 54], p1: [38, 36], bSax: [54, 54] } },
      { t: "Por volta da 13h, o Segundo Exército chega do norte e bate no flanco direito de Benedek. A Guarda segue para Chlum.",
        p: { p2: [70, 7], pG: [64, 14], bNo: [58, 16] } },
      { t: "Às 14h45, a Guarda toma Chlum, uma das colinas principais da linha austríaca. A posição de Benedek está rompida.",
        p: { pG: [66, 26], bCe: [70, 36] } },
      { t: "Benedek contra-ataca com a reserva e retoma Rosberitz, mas não passa dali. Ao sul, os saxões contra-atacam por volta das 14h e são empurrados para fora de Problus.",
        p: { bRe: [74, 28], bSax: [60, 56], pEl: [48, 54] } },
      { t: "Por volta das 15h, Benedek manda recuar para as pontes do Elba. A cavalaria austríaca investe para cobrir a retirada e perde cerca de 2.000 homens. Moltke para a batalha às 18h30.",
        p: { bCe: [82, 38], bNo: [78, 20], bSax: [74, 56], bRe: [84, 28], bAr: [78, 36], bCv: [72, 34], p1: [54, 36], pG: [70, 28], p2: [74, 14], pEl: [62, 54] } }
    ]
  },

  okinawa: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 52, h: 78, l: "Mar da China Oriental" },
      { t: "sea", x: 82, y: -2, w: 30, h: 78, l: "Oceano Pacífico" },
      { t: "note", x: 50, y: 20, l: "Yontan e Kadena" },
      { t: "note", x: 50, y: 8, l: "Motobu" },
      { t: "note", x: 60, y: 46, l: "Linha de Shuri" },
      { t: "note", x: 46, y: 62, l: "Oroku" },
      { t: "note", x: 56, y: 68, l: "Kiyan" }
    ],
    units: [
      { id: "fleet", s: "a", k: "ship", w: 6, h: 2.6, l: "Quinta Frota (Spruance)" },
      { id: "mar6", s: "a", k: "inf", w: 5, h: 5, l: "6ª Divisão de Fuzileiros" },
      { id: "mar1", s: "a", k: "inf", w: 5, h: 5, l: "1ª Divisão de Fuzileiros" },
      { id: "army", s: "a", k: "inf", w: 6, h: 6, l: "24º Corpo (Exército)" },
      { id: "j32", s: "b", k: "inf", w: 12, h: 6, l: "32º Exército (Ushijima)" },
      { id: "jNav", s: "b", k: "inf", w: 5, h: 4, l: "Marinha (Ōta)" },
      { id: "jYam", s: "b", k: "ship", w: 6, h: 2.6, l: "Yamato" },
      { id: "jAir", s: "b", k: "air", w: 3, h: 3, l: "Kamikazes" }
    ],
    steps: [
      { t: "Fim de março de 1945. A frota americana chega diante da costa oeste de Okinawa. Ushijima não defende as praias: espera no sul, na linha de Shuri, em cavernas e túneis, com cerca de 100.000 homens.",
        p: { fleet: [26, 30], mar6: [36, 26], mar1: [36, 33], army: [34, 40], j32: [60, 52], jNav: [48, 60], jYam: [86, 3], jAir: [70, 3] } },
      { t: "1º de abril, domingo de Páscoa. Os americanos desembarcam em Hagushi quase sem tiros e tomam os campos de pouso de Yontan e Kadena antes do fim do dia.",
        p: { mar6: [46, 26], mar1: [46, 33], army: [46, 40], fleet: [30, 30] } },
      { t: "A 6ª Divisão de Fuzileiros segue para o norte e limpa a península de Motobu. O Exército vira para o sul.",
        p: { mar6: [52, 10], army: [54, 44] } },
      { t: "6 e 7 de abril: começam os ataques kamikaze, e o Yamato sai do Japão para uma missão suicida. Aviões de porta-aviões afundam o Yamato antes de chegar. Os ataques em massa continuam até junho.",
        p: { jYam: [50, 2], jAir: [32, 26] }, x: ["jYam"] },
      { t: "Abril e maio: o avanço no sul é lento, de morro em morro: Kakazu, Maeda, Sugar Loaf. Os japoneses contra-atacam em 12 de abril e em 4 de maio, e fracassam.",
        p: { army: [58, 46], mar1: [52, 46], j32: [60, 52], jAir: [30, 40] } },
      { t: "Fim de maio: as monções transformam o campo em lama. Os fuzileiros tomam Sugar Loaf, e o Exército, Conical Hill. Os dois lados do núcleo de Shuri ficam expostos.",
        p: { mar1: [54, 49], army: [62, 49] } },
      { t: "29 de maio: o castelo de Shuri é tomado. O 32º Exército já recuou para o extremo sul, na península de Kiyan.",
        p: { mar1: [54, 54], army: [62, 54], j32: [58, 64] } },
      { t: "4 a 13 de junho: o almirante Ōta e cerca de 4.000 marinheiros se matam nos túneis de Oroku.",
        p: { mar1: [50, 58] }, x: ["jNav"] },
      { t: "18 de junho: o general Buckner é morto por fogo de artilharia. A resistência organizada acaba em 21 de junho, e Ushijima e Chō se matam.",
        p: { army: [60, 62], mar1: [52, 62], j32: [58, 68] }, x: ["j32"] }
    ]
  }
});
