// In-depth battles, batch o: otumba, tenochtitlan, mactan, panipat, mohacs, cajamarca.
// Checked against the English, Spanish, Portuguese and (for Mohacs) Hungarian Wikipedia articles on each battle and
// their leaders (Cortes, Cuauhtemoc, Magellan, Lapulapu, Babur, Ibrahim Lodi, Louis II, Tomori, Pizarro, Atahualpa),
// plus the Hungarian Ministry of Defence history article on Mohacs, HistoryOfWar.org and the EBSCO Research Starters on
// Panipat and Cajamarca, and the Warfare History Network article on Otumba. The works those pages cite (Diaz del
// Castillo, Gomara, Pigafetta, Chandra, Sarkar, Hemming, MacQuarrie, Brodarics, Perjes, Hassig, Thomas) were read only
// through those summaries. Britannica and the Pigafetta text itself could not be opened.

Object.assign(GLOSSARY, {
  "conquistador": "Soldado ou aventureiro espanhol que, no século 16, conquistou terras na América em nome do rei da Espanha, quase sempre por conta própria e atrás de ouro e de glória.",
  "tlaxcaltecas": "Povo de Tlaxcala, uma região independente que os astecas nunca conseguiram dominar. Depois de lutar contra Cortés, aliou-se a ele e forneceu a maior parte dos soldados que conquistaram o México.",
  "cihuacóatl": "Cargo alto do governo asteca, uma das principais autoridades da cidade, abaixo do imperador.",
  "tlatoani": "O governante supremo de uma cidade asteca. O de Tenochtitlán era o imperador.",
  "varíola": "Doença contagiosa e muito grave, que deixa feridas na pele. Os europeus a trouxeram para a América, onde ninguém tinha defesa contra ela, e ela matou muita gente.",
  "noite triste": "Nome da fuga dos espanhóis de Tenochtitlán, na noite de 30 de junho para 1º de julho de 1520. Perderam muitos homens, todos os canhões e boa parte do ouro.",
  "arcabuz": "Arma de fogo portátil do século 16, de cano comprido, acendida com um pavio. Era lenta de recarregar e pouco precisa, mas assustava quem nunca tinha ouvido um tiro.",
  "bergantim": "Barco a vela e a remo, leve e rápido, com um canhão na proa. Cortés mandou construir treze deles para dominar o lago em volta de Tenochtitlán.",
  "calçada": "Aterro elevado e largo, que ligava a ilha de Tenochtitlán à margem do lago. Tinha cortes cobertos por pontes de madeira, que podiam ser tiradas na hora de uma defesa.",
  "recife": "Faixa de pedra ou de coral que fica logo abaixo da água, perto da costa. Impede os barcos de se aproximar da praia.",
  "datu": "Chefe local nas ilhas Visayas, nas Filipinas, no século 16. Governava um povoado ou um grupo deles, sem ser um rei no estilo europeu.",
  "mosquete": "Arma de fogo de cano longo, disparada do ombro. A mais antiga, de mecha, precisava de um pavio aceso para atirar, e por isso era lenta de preparar.",
  "mantelete": "Escudo grande de madeira, apoiado no chão ou sobre rodas, atrás do qual os atiradores se abrigavam.",
  "tulughma": "Tática turco-mongol de envolvimento: alas rápidas de cavalaria dão a volta pelos lados do inimigo e o atacam pela retaguarda, enquanto o centro o segura de frente.",
  "mogóis": "A dinastia muçulmana fundada por Babur, que governou grande parte da Índia a partir de 1526. O nome vem de 'mongol', porque Babur descendia de Gêngis Khan.",
  "voivoda": "Título de governante militar em partes da Europa Central e Oriental. O voivoda da Transilvânia comandava essa província pelo rei da Hungria.",
  "akinci": "Cavaleiro leve e irregular do exército otomano. Fazia incursões à frente do exército para saquear, espalhar o medo e cercar o inimigo.",
  "requerimento": "Texto que os espanhóis liam aos povos americanos antes de atacar. Exigia que aceitassem o rei da Espanha e a fé cristã e, se recusassem, avisava que seriam combatidos. Quase ninguém o entendia.",
  "liteira": "Cadeira ou plataforma carregada nos ombros de vários homens, em que se transportava um personagem importante.",
  "falconete": "Canhão pequeno e leve, que atirava balas de uns poucos centímetros.",
  "garrote": "Método de execução por estrangulamento, com uma corda ou uma argola de ferro apertada no pescoço. Era considerado menos cruel que a fogueira.",
  "curaca": "Chefe local entre os incas, responsável por um povoado ou uma região e pelos trabalhos que ele devia ao Estado."
});

Object.assign(DEEP, {
  otumba: {
    war: "Conquista do México por Hernán Cortés (1519–1521)",
    hook: "Feridos, famintos e sem canhões, algumas centenas de espanhóis foram cercados numa planície por um exército inteiro, e tudo se decidiu numa carga contra um só homem.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1519, Hernán Cortés desembarcou na costa do México com algumas centenas de [[conquistadores|conquistador]]. Depois de lutar contra os [[tlaxcaltecas]], fez deles seus aliados, e com eles marchou até Tenochtitlán, a capital dos astecas, no meio de um lago. Em novembro de 1519 entrou na cidade, recebido pelo imperador Moctezuma II, e logo o transformou em refém.",
        "Em 1520, tudo desandou. O governador de Cuba, Diego Velázquez, mandou Pánfilo de Narváez prender Cortés, e Cortés saiu da cidade para derrotá-lo, em maio, e incorporou seus homens. Enquanto estava fora, Pedro de Alvarado atacou nobres astecas durante uma cerimônia religiosa, e a cidade se revoltou. Cortés voltou a uma capital em guerra.",
        { h: "A Noite Triste" },
        "Na noite de 30 de junho para 1º de julho de 1520, os espanhóis tentaram fugir pela calçada de Tlacopan, debaixo de chuva. Foram descobertos e atacados por guerreiros a pé e em canoas. Perderam todos os canhões, cerca de 46 cavalos e boa parte do tesouro, e muitos soldados se afogaram carregados de ouro. Quantos morreram, ninguém sabe: Cortés fala em 154 espanhóis e mais de 2.000 aliados; Bernal Díaz del Castillo, em cerca de 450 numa passagem e 860 em outra (incluindo os de Otumba); Gómara, em 450 espanhóis e 4.000 aliados.",
        { h: "O caminho até Otumba" },
        { timeline: [
          ["Novembro de 1519", "Cortés entra em Tenochtitlán e é recebido por Moctezuma II."],
          ["Maio de 1520", "Derrota Narváez e volta a uma cidade em revolta."],
          ["30 de junho a 1º de julho de 1520", "A [[Noite Triste|noite triste]]: a fuga pela calçada de Tlacopan."],
          ["Cerca de uma semana", "Marcha de fuga, para o norte e depois para o leste, rumo a Tlaxcala, sempre perseguidos."],
          ["7 de julho de 1520", "A batalha."]
        ]},
        "Os fugitivos descansaram em Popotla e em Tlacopan e depois fizeram uma volta ao norte do lago, passando por Cuautitlán e Tepotzotlán, para evitar os lugares mais povoados. Perto de Zumpango, mataram um cavalo e o comeram: foi a primeira carne em dias. Em volta, guerreiros mexicas os atacavam sem parar. Eles tinham de chegar a Tlaxcala, no leste, e para isso precisavam atravessar a planície de Otumba."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hernán Cortés, cerca de 35 anos" },
        "Nascido por volta de 1485 em Medellín, na Extremadura, tinha chegado ao México quase sem soldados e tinha tomado uma capital. Agora estava com a cabeça ferida, sem canhões e quase sem cavalos. O que o salvou em Otumba foi um conselho que, segundo uma das versões, veio dos tlaxcaltecas: entre os astecas, uma batalha se decidia quando o comandante caía e seu estandarte era tomado.",
        { h: "Matlatzincátzin, o comandante mexica" },
        "Quase nada se sabe dele. As fontes o chamam de [[cihuacóatl]], um dos cargos mais altos do governo asteca, e a Wikipédia em inglês também o descreve, num trecho, como sumo sacerdote. Ele comandava o exército que veio ao encontro dos fugitivos, e andava com o estandarte de penas que o fazia reconhecível de longe.",
        { h: "Os outros nomes" },
        "Do lado espanhol, os capitães de cavalaria que, segundo os relatos, carregaram com Cortés: Gonzalo de Sandoval, Cristóbal de Olid, Pedro de Alvarado e Alonso Dávila. E Juan de Salamanca, o homem da lança, de quem se fala no final. Do lado indígena, os guerreiros de Tlaxcala, que Bernal Díaz elogia por lutarem 'como leões'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são muito incertos. Os espanhóis, segundo os historiadores, eram entre 340 (Hugh Thomas), 440 (Bernal Díaz) e 600 (Chavero), incluindo algumas mulheres, e com poucos cavaleiros (as fontes falam em 13 a 20). Quase não tinham armas de fogo: uma das listas fala em 7 arcabuzes e 12 bestas. Com eles vinham tlaxcaltecas, a maioria dos historiadores diz que menos de mil; Chavero chegava a 3.000.",
        "Os mexicas eram muito mais. Os cronistas Gómara, Solís e Alva Ixtlilxóchitl falam em cerca de 200.000, com 20.000 mortos. Historiadores do século 19, como Orozco y Berra e Chavero, acharam esses números exagerados. Hoje as faixas mais citadas vão de 10.000 a 20.000 guerreiros. Bernal Díaz e o próprio Cortés descrevem uma multidão confusa, sem dar número.",
        { note: "Os números de Otumba dependem quase só dos relatos de quem lutou do lado espanhol. As contagens exatas não existem, e as faixas acima são as dos historiadores, não as dos cronistas." },
        { h: "O terreno" },
        "Uma planície aberta perto da atual Otumba, no Vale do México, conhecida como Temalcatitlán (ou Tonampoco). Em campo aberto, a vantagem dos mexicas em número era total, porque podiam cercar os espanhóis por todos os lados.",
        { h: "A batalha" },
        "Quando os espanhóis chegaram à planície, encontraram um grande exército mexica. Os guerreiros, apesar de mais numerosos e de terem diante de si homens esgotados, não atacaram logo.",
        "Em combate, os mexicas procuravam prender os inimigos vivos para sacrificá-los, e não matá-los, o que, segundo a Wikipédia em espanhol, dificultava um combate coordenado. Os espanhóis formaram um círculo, com os lanceiros por fora, e aguentaram por horas, rompendo o cerco várias vezes. Bernal Díaz diz que foi a cavalaria que abriu caminho, com os rodeleros (soldados com escudo e espada) e os tlaxcaltecas atrás. Mesmo assim, a multidão quase os engoliu.",
        "Então Cortés viu o estandarte de penas e a armadura do comandante, e chamou os cavaleiros mais próximos para segui-lo. Ele e seus capitães investiram direto naquele ponto. Segundo a Wikipédia em espanhol, Cortés derrubou Matlatzincátzin, e Juan de Salamanca o matou com a lança e tomou as penas e o estandarte, que entregou a Cortés. Outras versões dizem que foi o próprio Cortés quem o matou.",
        "Sem comando e sem estandarte, o exército mexica se desfez e recuou. Os espanhóis e os tlaxcaltecas perseguiram os fugitivos, e pegaram armaduras, escudos e penas. Uma crônica asteca citada pela Warfare History Network descreve a matança dos que fugiam."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os espanhóis perderam cerca de 60 homens, segundo a Wikipédia em inglês (a em espanhol fala em 73). Entre os tlaxcaltecas, houve muitos mortos e feridos, sem número. As perdas mexicas são desconhecidas, e os cronistas falam em 20.000. Cortés saiu ferido na cabeça e na mão.",
        "No dia seguinte, 8 de julho, os sobreviventes chegaram a Tlaxcala. Descansaram cerca de vinte dias. Os chefes de Tlaxcala recusaram uma oferta de paz do novo imperador, Cuitláhuac, e continuaram aliados de Cortés. Dali, ele organizaria a volta, que acabaria com a queda de Tenochtitlán em agosto de 1521.",
        { h: "Por que importa" },
        "Se Otumba tivesse sido perdida, os espanhóis teriam morrido na planície, e a conquista do México teria terminado ali. Para o historiador Juan Miralles, citado na Wikipédia em espanhol, foi o ponto em que a maré virou, uma opinião que até os maiores críticos de Cortés costumam dividir. O rei Carlos I permitiu depois que Salamanca pusesse as penas do estandarte em seu brasão.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: os cronistas não concordam. Cortés dá a entender que foi em 8 de julho, os historiadores Orozco y Berra, Chavero e Pereyra usam 7 de julho, e Bernal Díaz fala em 14 de julho. O calendário da época era o juliano; no gregoriano, o dia 7 seria 17 de julho." },
        { note: "Quem matou o comandante: Cortés, Salamanca ou outro cavaleiro, a depender do relato. O Códice Ramírez, por sua vez, dá o crédito de grande parte da luta a Ixtlilxóchitl, de Texcoco, e fala de Cortés matando um único capitão, sem enfrentar superioridade esmagadora." },
        { note: "As fontes: a luta é descrita por Cortés (em suas cartas ao rei), por Bernal Díaz del Castillo, por Gómara (que nem estava lá) e por relatos indígenas. Cada um tinha motivos para engrandecer a sua parte." }
      ]}
    ]
  },

  tenochtitlan: {
    war: "Conquista do México por Hernán Cortés (1519–1521)",
    hook: "Uma capital construída no meio de um lago caiu depois de dois meses e meio de cerco, de uma epidemia e de uma aliança de povos cansados do domínio asteca.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Tenochtitlán, a capital asteca, ficava numa ilha do lago Texcoco, ligada à margem por [[calçadas|calçada]] elevadas. Em julho de 1520, depois da Noite Triste e da vitória em Otumba, Cortés chegou a Tlaxcala quase sem nada. Nos meses seguintes, o equilíbrio mudou por três razões.",
        "A primeira foi a doença. No fim de outubro de 1520, uma epidemia de [[varíola]] começou em Tenochtitlán e durou cerca de sessenta dias. Matou muita gente, entre elas o novo imperador, Cuitláhuac, que tinha governado por uns oitenta dias. Estima-se que a doença tenha matado cerca de 40% da população nativa da região em um ano. Segundo a Wikipédia em inglês, os espanhóis, em geral, adoeceram bem menos porque tinham imunidade adquirida. A segunda foi a sucessão: no começo de 1521, Cuauhtémoc, de uns 25 anos, foi escolhido [[tlatoani]]. A terceira foi a preparação de Cortés: mandou construir treze [[bergantins|bergantim]] em Tlaxcala, para dominar o lago.",
        { h: "O caminho até a queda" },
        { timeline: [
          ["Julho de 1520", "Depois de Otumba, os espanhóis chegam a Tlaxcala e se refazem."],
          ["Fim de outubro de 1520", "Começa a epidemia de varíola em Tenochtitlán. Cuitláhuac morre."],
          ["Início de 1521", "Cuauhtémoc é escolhido tlatoani."],
          ["Fim de abril de 1521", "Cortés reúne as tropas e os treze bergantins em Texcoco."],
          ["22 a 26 de maio de 1521", "Os espanhóis tomam posição nas calçadas. O cerco começa."],
          ["30 de junho", "Cortés perde muita gente num ataque a Tlatelolco."],
          ["Julho e agosto", "Chegam reforços. Os espanhóis tomam a cidade bairro a bairro."],
          ["13 de agosto de 1521", "Cuauhtémoc é capturado. A cidade se rende."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hernán Cortés, cerca de 36 anos" },
        "Tinha tudo a perder, porque tinha desobedecido ao governador de Cuba. Sua estratégia foi paciente: não atacar a ilha de frente, mas cercá-la, cortar a comida e a água, ganhar o lago e deixar que o tempo e as doenças enfraquecessem a cidade. Ao entrar em cada bairro, mandava derrubar as casas e usava os escombros para encher os canais, de modo que a infantaria e a cavalaria pudessem avançar em formação.",
        { h: "Cuauhtémoc, cerca de 25 anos" },
        "O último imperador asteca. Chegou ao poder com a cidade já cercada pela doença e pela guerra, e a defendeu até o fim. Foi capturado em 13 de agosto de 1521, quando tentava fugir da cidade de canoa. Segundo fontes espanholas, pediu a Cortés que o matasse, e Cortés respondeu que ele tinha defendido sua capital como um guerreiro valente.",
        { h: "Os outros nomes" },
        "Pedro de Alvarado comandava o acampamento de Tlacopan; Cristóbal de Olid, o de Coyoacán; Gonzalo de Sandoval, o de Iztapalapa. Cortés ficou com os bergantins. Do lado indígena, o grande aliado era Tlaxcala, mas também Texcoco, Chalco e Huexotzinco. Bernal Díaz dá crédito especial a Malinche, ou Doña Marina, a intérprete de Cortés, pela vitória."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números das forças de Cortés, na Wikipédia, são: de 900 a 1.300 soldados de infantaria espanhóis, 86 cavaleiros (90 a 100 em outra versão), 16 canhões, 13 bergantins e de 50.000 a 200.000 aliados indígenas. A faixa dos aliados é enorme, e ninguém sabe ao certo. Do lado asteca, o número citado é de cerca de 80.000 guerreiros e 400 canoas de guerra, sem fonte clara.",
        { note: "Os números dessa campanha vêm de poucos cronistas, como Cortés e Bernal Díaz del Castillo, e variam muito de uma fonte para outra." },
        { h: "O terreno" },
        "Uma cidade-ilha, cercada de água por todos os lados e ligada à margem por calçadas. Atacar por terra exigia ir pelas calçadas, onde as canoas inimigas podiam atacar os soldados pelos dois lados. Sem controlar o lago, os espanhóis estariam presos nas calçadas.",
        { h: "A tomada de posição" },
        "Em 22 de maio de 1521, os espanhóis ocuparam suas posições: Alvarado em Tlacopan, Olid em Coyoacán, Sandoval em Iztapalapa. Alvarado e Olid foram primeiro a Chapultepec, de onde vinha parte da água da cidade por um aqueduto, e o cortaram. Cada capitão tinha cerca de 8.000 aliados (Alvarado e Olid de Tlaxcala, Sandoval de Chalco e de Huexotzinco), segundo as contagens de Bernal Díaz.",
        { h: "O lago" },
        "Cortés lançou os bergantins de Texcoco. Mais de mil canoas vieram ao seu encontro, segundo Bernal Díaz, mas um vento favorável permitiu que os barcos virassem muitas delas. Cortés abriu uma brecha numa calçada para os bergantins passarem de um lado a outro, e os astecas perderam o ataque pela lateral. Mas os astecas puseram estacas e armadilhas no raso, capturaram dois barcos e mataram os capitães Juan de la Portilla e Pedro Barba. Uma emboscada de trinta canoas foi respondida por uma contraemboscada de seis barcos.",
        { h: "Colhuacatonco: o revés" },
        "Em 30 de junho (a Wikipédia dá 24 de junho em outro artigo), Cortés mandou um grande ataque ao mercado de Tlatelolco, em três colunas. Ele avançou, mas parou para ver se os buracos da calçada tinham sido tapados, e os astecas, escondidos nas casas, atacaram. Cuauhtémoc soou uma grande corneta e mandou lutar até a vitória ou a morte. Cortés foi ferido e quase capturado, e Cristóbal de Olea morreu salvando-o. Cerca de 40 a 66 espanhóis foram presos (Gómara fala em 40, os informantes de Sahagún em 53, Bernal Díaz em 66) e sacrificados nos dias seguintes; cerca de 2.000 aliados morreram. Os astecas mandaram cabeças aos acampamentos espanhóis e a cidades rebeldes, para mostrar que os espanhóis podiam ser vencidos.",
        "Muitos aliados achavam que a guerra estava perdida e foram embora. Ixtlilxóchitl II, de Texcoco, e o comandante tlaxcalteca ficaram e insistiram com Cortés para continuar. Ele ficou quatro dias sem atacar. Depois os espanhóis aprenderam a destruir as estacas, retomaram o lago, e muitos aliados voltaram.",
        { h: "O fim" },
        "No meio de julho chegaram pólvora e reforços. Os espanhóis entraram no mercado de Tlatelolco por volta de 1º de agosto e o tomaram quatro dias depois. Na cidade, a água ficou salobra e a disenteria se espalhou. Em 13 de agosto, Cuauhtémoc tentou fugir de canoa com a mulher, a família e amigos, e foi capturado. A cidade se rendeu no mesmo dia."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas espanholas aparecem de 450 a 860 mortos nas listas da Wikipédia; outros relatos falam em apenas 40 mortos no cerco, ou em pouco mais de 100, e Gómara estima 450. Os aliados indígenas perderam cerca de 20.000 homens, segundo uma estimativa sem fonte clara. Do lado asteca, as estimativas vão de 100.000 a 240.000 mortos, entre guerreiros e civis, e é impossível separar quem morreu de varíola, de fome ou na luta.",
        "Depois da rendição, os aliados indígenas continuaram a matar e a saquear. Cortés escreveu ao rei que seus homens não conseguiram impedir que os tlaxcaltecas matassem e sacrificassem mais de 15.000 pessoas naquele dia. Quase toda a nobreza asteca estava morta, e os sobreviventes eram sobretudo mulheres jovens e crianças.",
        "Cortés exigiu o ouro perdido na Noite Triste. Cuauhtémoc e o senhor de Tacuba, torturados com fogo, disseram que o tinham jogado no lago, mas quase nada foi achado. Cuauhtémoc foi mantido como chefe de fachada até 1525, quando Cortés o mandou enforcar durante uma expedição a Honduras, acusado de planejar uma conspiração. Os relatos de Ixtlilxóchitl, descendente da nobreza de Texcoco, dizem que a conspiração foi inventada.",
        { h: "Por que importa" },
        "Acabou o Império Asteca. Dos escombros nasceu a Cidade do México, capital da Nova Espanha, e o domínio espanhol se espalhou depois pelo resto da América. Para alguns historiadores, como Israel Charny, John Cox e Norman Naimark, o cerco foi um genocídio. É uma interpretação. A Wikipédia em português lembra que a maior parte das mortes entre os indígenas veio das doenças trazidas pelos europeus, como a varíola, e não da luta.",
        { h: "Curiosidades e controvérsias" },
        { note: "O papel dos aliados: a maior parte dos soldados que tomaram Tenochtitlán era de povos indígenas inimigos dos astecas. É difícil imaginar a vitória espanhola sem eles, e o que se chama de 'conquista espanhola' foi também, em grande parte, uma guerra entre povos indígenas." },
        { note: "As perdas: Cortés afirmou ter perdido apenas 15 espanhóis, número que a Wikipédia dá como reivindicação dele e que não é aceito. Gómara fala em 450." },
        { note: "A morte de Cuauhtémoc: os relatos espanhóis (Cortés, Bernal Díaz, que achou a execução injusta) e os indígenas (Ixtlilxóchitl) não concordam sobre se houve uma conspiração de verdade." }
      ]}
    ]
  },

  mactan: {
    war: "A viagem de Magalhães e Elcano, a primeira volta ao mundo (1519–1522)",
    hook: "O comandante da primeira volta ao mundo morreu numa praia das Filipinas, numa briga que ele mesmo tinha ido procurar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A expedição partiu da Espanha em 1519, sob o comando do navegador português Fernão de Magalhães, a serviço do rei espanhol. Ela procurava um caminho para as ilhas das especiarias, as Molucas, navegando para o oeste. Saíram cinco navios, com cerca de 270 homens. Um navio naufragou no inverno, outro desertou no estreito que hoje leva o nome de Magalhães, e em março de 1521 os outros três chegaram às Filipinas.",
        { h: "O caminho até Mactan" },
        { timeline: [
          ["16 de março de 1521", "A frota avista a ilha de Samar. É a primeira chegada europeia documentada ao arquipélago."],
          ["28 de março", "Chega a Limasawa. A primeira missa nas Filipinas é celebrada em 31 de março."],
          ["7 de abril", "Chega a Cebu."],
          ["Abril", "O rajá Humabon e a rainha são batizados, como Carlos e Juana. Magalhães diz ter feito cerca de 2.200 convertidos."],
          ["27 de abril de 1521", "A batalha de Mactan."]
        ]},
        "Em Cebu, Magalhães fez uma aliança com o rajá Humabon, que aceitou o batismo. Chefes vizinhos passaram a fornecer comida e a se converter. Mas Lapulapu, um [[datu]] da ilha vizinha de Mactan, recusou-se a reconhecer a autoridade de Humabon e a jurar lealdade ao rei da Espanha. Segundo Pigafetta, que escreveu o relato, ele chegou a impedir que um outro chefe da ilha, Zula, mandasse um filho com presentes para Magalhães. Humabon e Zula sugeriram então que Magalhães o obrigasse a obedecer. Magalhães aceitou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Fernão de Magalhães, cerca de 41 anos" },
        "Nascido por volta de 1480, comandava a expedição a serviço do rei da Espanha. Tinha achado a passagem pelo sul da América, cruzado o Pacífico e conseguido a aliança de Cebu. Em Mactan, queria forçar Lapulapu a obedecer. Além do pedido de Humabon e de Zula, o motivo exato é discutido.",
        { h: "Lapulapu" },
        "Pigafetta o chama de 'Çilapulapu', e é a única fonte direta que o nomeia. Não existe registro confiável da sua origem. A tradição oral de Cebu diz que seu pai era o datu Mangal, de Opong, e que ele o sucedeu. O historiador William Henry Scott argumenta que Magalhães entendeu mal a sociedade das Visayas, que não era formada por reinos como os da Europa: Lapulapu seria um datu poderoso, que não devia nada a Humabon. Quase tudo o que se diz dele além disso é tradição ou lenda.",
        { h: "Os outros nomes" },
        "Humabon e Zula, aliados de Magalhães, que ficaram olhando de longe, a pedido dele. Antonio Pigafetta, italiano que acompanhou a viagem e escreveu o principal relato de testemunha da batalha. Juan Sebastián Elcano, que mais tarde levaria o último navio de volta à Espanha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo Pigafetta, Magalhães levou cerca de 60 europeus, dos quais 49 desembarcaram e 11 ficaram nos barcos. Humabon ofereceu guerreiros, e algumas fontes falam em 20 a 30 barcos de guerra de Cebu, que Magalhães pediu que apenas observassem. Os guerreiros de Mactan eram cerca de 1.500, segundo Pigafetta; outros historiadores falam em até 3.000. Usavam espadas largas, escudos, arcos, lanças de ponta de ferro e varas endurecidas no fogo.",
        { note: "Quase tudo o que se sabe da batalha vem de Pigafetta, que estava lá. Mesmo assim, historiadores filipinos notam que ele pode ter embelezado a narrativa, e que detalhes como as formações dos guerreiros podem ser dele." },
        { h: "O terreno" },
        "Uma praia em Mactan, hoje parte da província de Cebu. Entre os navios e a areia havia um [[recife]], que impedia os barcos de chegar perto. Os canhões dos navios não alcançavam a praia, e os homens tiveram de desembarcar na água e andar até a terra, carregando armadura e armas.",
        { h: "A batalha" },
        "Magalhães chegou de madrugada e mandou dizer a Lapulapu que ele podia aceitar o rei da Espanha e pagar tributo, ou lutar. Segundo uma versão, Lapulapu pediu que a luta esperasse o dia. Pela manhã, os espanhóis desembarcaram e foram atacados de frente e dos dois lados por flechas, lanças e pedras.",
        "A armadura protegeu a maioria, e poucos morreram, mas o ataque desanimava. Os besteiros e os homens com mosquetes atiraram dos barcos, de longe, com pouco efeito, até acabar a munição, depois de cerca de meia hora. Magalhães mandou queimar casas para aliviar a pressão, o que enfureceu ainda mais os defensores.",
        "Foi então que as coisas pioraram. As fontes divergem em detalhes: uma flecha envenenada o acertou numa perna, onde não tinha proteção, e depois uma ferida no braço e outra, provavelmente de espada, na perna esquerda, o fez cair. Os guerreiros se concentraram nele. Seus homens, segundo Pigafetta, desobedeceram à ordem de recuar, e a luta durou mais de uma hora. Magalhães foi morto a lançadas. Pigafetta e outros conseguiram escapar. Alguns espanhóis morreram, e também alguns cebuanos convertidos que tinham ido ajudar."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os guerreiros de Mactan recuperaram o corpo de Magalhães. Humabon ofereceu em troca dele e de outros mortos tantas mercadorias quanto os guerreiros quisessem, mas eles recusaram. Os números de mortos são incertos: uma fonte filipina diz que Pigafetta contou 15 mortos do lado de Mactan, e a Wikipédia em inglês mostra 15 e 12 mortos sem dizer de que lado.",
        "Depois da batalha, o rajá Humabon se virou contra os espanhóis. Em um banquete, matou parte dos que tinham sobrado (os relatos falam em envenenamento). Faltavam homens para tripular três navios, e a expedição abandonou o Concepción. Em novembro de 1521 chegou às Molucas. O único navio que voltou, o Victoria, sob Juan Sebastián Elcano, chegou à Espanha em 6 de setembro de 1522. Dos cerca de 270 homens que tinham partido, voltaram 18.",
        { h: "Por que importa" },
        "Para os filipinos, Lapulapu é visto como o primeiro herói nacional, um símbolo de resistência ao domínio espanhol, embora essa leitura seja posterior: ele era um chefe local. A conquista espanhola veio só em 1564–1565, com a expedição de Legazpi, uns 44 anos mais tarde. Hoje, o 27 de abril é o Dia de Lapulapu, declarado em 2017, e a cidade de Opon foi rebatizada de Lapu-Lapu. Há também um monumento, o Santuário de Mactan, onde a batalha é reencenada.",
        { h: "Curiosidades e controvérsias" },
        { note: "A origem de Lapulapu: um livro de 1952, o Aginid, o descreve como um estrangeiro de Bornéu que virou pirata. A maioria dos historiadores o trata como ficção ou farsa. Alguns relatos de Sulu e de Mindanau o dizem muçulmano, mas Pigafetta descreve as Visayas como não muçulmanas, e a maioria dos historiadores rejeita essa ideia." },
        { note: "A grafia: Pigafetta escreve 'Çilapulapu'. Por muito tempo se usou 'Lapu-Lapu', com hífen; a grafia 'Lapulapu', sem hífen, foi recomendada em 2019 e adotada oficialmente em 2021." },
        { note: "Como Magalhães foi ferido: os relatos divergem. Um fala em flecha envenenada na perna, outro em lança de bambu, e a Wikipédia em inglês, num trecho, em flecha no pescoço. Todos concordam que ele caiu depois de um combate longo e foi morto a lançadas." },
        { note: "A maré: muita gente conta que a maré estava baixa. As fontes que resumem o relato de Pigafetta falam em um recife entre os navios e a praia, sem mencionar a maré." }
      ]}
    ]
  },

  panipat: {
    war: "Invasão do norte da Índia por Babur (1519–1526)",
    hook: "Doze mil homens e uma fileira de carroças amarradas com corda derrotaram um exército muitas vezes maior e abriram caminho para o Império Mogol.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O norte da Índia, em 1525, era governado pelo [[sultanato de Déli|sultanato de déli]], sob a dinastia Lodi. O sultão, Ibrahim Lodi, tinha subido ao trono em 1517 e estava em guerra com seus próprios nobres. Os rajás [[rajputs]], como Rana Sanga de Mewar, eram rivais. Era um Estado fraco por dentro, e Babur sabia disso.",
        "Babur, nascido em 14 de fevereiro de 1483 em Andijan, descendia de Tamerlão por parte de pai e de Gêngis Khan por parte de mãe. Tinha tomado Samarcanda três vezes e a perdido nas três. Em 1504, tomou Cabul, e dali começou a olhar para o sudeste. Chegou ao rio Chenab, no Punjab, em 1519. O governador do Punjab, Daulat Khan Lodi, se ofereceu para passar para o seu lado, e um tio do sultão, Alam Khan, também buscou sua ajuda. Em 1524, Babur chegou a Lahore e derrotou o exército Lodi que saiu a seu encontro.",
        { h: "O caminho até Panipat" },
        { timeline: [
          ["1504", "Babur toma Cabul."],
          ["1519", "Chega ao rio Chenab, no Punjab."],
          ["1524", "Toma Lahore e derrota o exército enviado contra ele."],
          ["Dezembro de 1525", "Atravessa o Indo e marcha para Déli, com cerca de 12.000 homens."],
          ["26 de fevereiro de 1526", "Seu filho Humayun vence um destacamento de Ibrahim em Hisar-Firuza."],
          ["2 de abril de 1526", "Babur derrota outra parte do exército de Ibrahim."],
          ["Cerca de uma semana", "Os dois exércitos ficam frente a frente diante da cidade de Panipat."],
          ["21 de abril de 1526", "A batalha."]
        ]},
        "A batalha aconteceu em Panipat, a cerca de 80 km ao norte de Déli, numa planície que mais tarde veria outras duas batalhas decisivas. Alguns relatos dão 20 de abril como a data da batalha."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Babur, 43 anos" },
        "Soldado e escritor: seu diário, o Baburnama, é uma das grandes memórias da época. Tinha perdido seu reino de origem, na Ásia Central, e precisava de outro. Em Panipat, apostou numa tática que ele mesmo chamou de 'estilo otomano': amarrar carroças em fila e pôr os atiradores atrás delas.",
        { h: "Ibrahim Lodi, cerca de 45 anos" },
        "Nascido por volta de 1480 em Déli, tinha desconfiança dos nobres afegãos e turcos. Prendeu alguns, esmagou uma rebelião, e perdeu apoio. Tinha também sido derrotado por Rana Sanga, o que lhe custou prestígio. Em Panipat, tinha um exército imenso, mas sem pólvora, e esperou muito antes de atacar.",
        { h: "Os outros nomes" },
        "Do lado de Babur, os artilheiros otomanos Ustad Ali Quli e Mustafa Rumi, que dirigiram os canhões, e Humayun, seu filho. Do lado Lodi, o raja Vikramaditya de Gwalior, aliado do sultão, a quem se liga o diamante que Humayun recebeu depois em Agra."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Babur tinha cerca de 12.000 homens quando atravessou o Indo, e segundo ele mesmo, menos quando chegou a Déli. Parte deles tinha [[mosquetes|mosquete]] de mecha, e havia cavaleiros que atiravam flechas a galope. As fontes divergem sobre os canhões: de 15 a 20 segundo a Wikipédia em inglês, e só dois pequenos, segundo o próprio Babur, o que pode se referir a duas baterias.",
        "Ibrahim tinha, segundo os historiadores Chandra e Sarkar, de 50.000 a 70.000 homens e cerca de 1.000 [[elefantes de guerra|elefantes de guerra]], mas nenhuma arma de pólvora. Uma outra contagem dá 30.000 de infantaria e 40.000 de cavalaria, metade irregular. Babur escreveu que eram 100.000, e há estimativas de 40.000.",
        { note: "O número de Babur, 100.000, é de alguém que queria mostrar o tamanho do que tinha enfrentado. Os historiadores modernos ficam entre 40.000 e 70.000, e todos concordam que os Lodi eram muito mais numerosos." },
        { h: "O terreno e a posição de Babur" },
        "Uma planície aberta, que Babur preparou. Em linha, ele pôs cerca de 700 carroças amarradas umas às outras com cordas de couro cru, no 'estilo otomano' (os otomanos usavam correntes). Entre elas, [[manteletes|mantelete]] de madeira cobriam os mosqueteiros; os relatos divergem sobre quantos entre cada par de carroças. Deixou aberturas de 100 a 200 cavaleiros de largura, para que a cavalaria saísse e voltasse.",
        "A ala direita se apoiava na cidade de Panipat; a esquerda, num fosso cheio de galhos, contra a cavalaria. Ele guardou uma [[reserva|reserva]] e pôs destacamentos de cavalaria nas pontas extremas da linha, prontos para o envolvimento ao estilo da [[tulughma]].",
        { h: "A espera" },
        "Os dois exércitos ficaram frente a frente cerca de uma semana. Todo dia, homens de Babur chegavam perto do acampamento de Ibrahim, atiravam flechas e tentavam provocar um ataque. Ibrahim não mordeu a isca. Babur mandou então 4.000 a 5.000 homens num ataque noturno, que deu errado: ao amanhecer, estavam expostos perto das linhas inimigas. Humayun e uma vanguarda foram ajudá-los, e o exército todo foi atrás. Ibrahim formou como se fosse perseguir, mas não perseguiu. Depois, um falso alarme perturbou o acampamento de Babur.",
        { h: "O dia 21 de abril" },
        { formation: true },
        "De manhã, Ibrahim saiu do acampamento e avançou contra as linhas de Babur. Mas a frente que Babur oferecia era estreita demais para que ele usasse seus números. Seu exército se espremeu, e as alas não tinham como atacar nem recuar. O centro, sozinho, batia nas carroças e não passava.",
        "O fogo dos mosquetes e dos canhões prendeu o centro. O barulho dos canhões assustou os elefantes, o que aumentou as baixas. Os destacamentos das pontas, a cavalaria de Babur, deram a volta e atingiram a retaguarda, e as alas esquerda e direita bateram nos flancos. Babur dá o maior crédito a seus arqueiros, que atiravam da esquerda, da direita e de trás.",
        "O combate mais duro durou do começo da manhã até por volta do meio-dia. Ibrahim morreu, e seu corpo só foi achado à tarde. Segundo Babur, em meio dia o exército inimigo foi reduzido a pó."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas dos Lodi são incertas: os homens de Babur contaram de 15.000 a 16.000 mortos; o historiador Chandra fala em cerca de 20.000, e os moradores de Agra, em 40.000 a 50.000. Muitos prisioneiros foram tomados, e milhares morreram na fuga. As perdas de Babur não são conhecidas.",
        "Babur mandou uma força para Agra, e Humayun foi com tropas maiores tomar a cidade e o tesouro de Ibrahim. Três dias depois da batalha, Babur entrou em Déli. Achou a mãe e a família de Ibrahim e as tratou bem, como aos prisioneiros. Em Agra, Humayun recebeu um diamante de cerca de 186 quilates, ligado ao raja de Gwalior, que ficou conhecido como o diamante de Babur e, mais tarde, como o Koh-i-Noor.",
        { h: "Por que importa" },
        "O poder de Babur, no início, era limitado ao Punjab, a Agra e a Déli. Ele ainda precisou vencer Rana Sanga e os rajputs em Khanwa, em 1527, e os afegãos do leste no rio Ghaghra, em 1529. Morreu em 1530. Mas Panipat foi o começo do Império [[mogóis|mogol]], que durou mais de trezentos anos e chegou ao seu ponto mais alto com seus descendentes, como Akbar e o construtor do Taj Mahal.",
        "Militarmente, é lembrada como uma das primeiras batalhas do subcontinente com armas de pólvora, embora o próprio Babur dê o maior crédito aos seus arqueiros a cavalo.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: os historiadores dão 20 ou 21 de abril de 1526. A Wikipédia em inglês usa o dia 21." },
        { note: "Os canhões: a Wikipédia fala em 15 a 20. O próprio Babur, no que descreve da batalha, só menciona dois pequenos. Quanto aos Lodi, uma das fontes acha pouca evidência de que tivessem canhões ou mosquetes." },
        { note: "O Koh-i-Noor: a ligação entre o diamante dado a Humayun e o Koh-i-Noor de hoje vem de uma das fontes que consultamos. Não a vimos confirmada em outras." }
      ]}
    ]
  },

  mohacs: {
    war: "Guerras otomano-húngaras, campanha de Solimão de 1526",
    hook: "Numa tarde de agosto, a cavalaria húngara carregou contra um inimigo ainda se organizando, e em duas horas o reino medieval da Hungria deixou de existir.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século 16, o Reino da Hungria era a principal fronteira cristã entre o Império Otomano e a Europa Central. Mas era um reino fraco por dentro. O poder do rei era pequeno, e o exército de mercenários que Matias Corvino tinha criado havia se desfeito. Em 1521, os otomanos tomaram Belgrado, a grande fortaleza do Danúbio.",
        "Em 1522, o jovem rei Luís II casou com Maria de Habsburgo, o que aproximava a Hungria dos Habsburgo. Os otomanos viam isso como uma ameaça, e uma aliança de Solimão com a França o encorajou a atacar.",
        { h: "O caminho até Mohács" },
        { timeline: [
          ["16 de abril de 1526", "Solimão sai de Constantinopla, segundo a Wikipédia em inglês."],
          ["13 de julho", "Começa o cerco de Pétervárad, que acaba se rendendo."],
          ["20 de julho", "Luís II sai de Buda."],
          ["14 a 23 de agosto", "Os otomanos chegam ao rio Drava e o atravessam."],
          ["26 de agosto", "Conselho de guerra: decide-se lutar em Mohács."],
          ["29 de agosto", "A batalha."]
        ]},
        "O exército húngaro foi reunido devagar. Os nobres demoraram a responder, e muitos contingentes nem chegaram. Havia três forças: uma da Transilvânia, de 8.000 a 13.000 homens, sob o [[voivoda|voivoda]] João Zápolya; uma da Croácia, de uns 5.000, sob Cristóvão Frankopan; e a principal, com o rei. A de Zápolya não chegou a tempo. A da Croácia só chegou parcialmente, e o ban Ferenc Batthyány apareceu na manhã da batalha com cerca de 4.000 homens, mais ou menos um terço do prometido."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Luís II da Hungria, 20 anos" },
        "Nascido em 1º de julho de 1506, foi coroado rei da Hungria com quase 2 anos e rei da Boêmia no ano seguinte. Em 1526, deixou Buda em meados de julho, decidido, diz-se, a repelir os invasores ou ser esmagado de uma vez. Segundo uma versão, ele chegou a defender a retirada na hora, mas a pressão dos nobres e das tropas de fronteira o levou a lutar.",
        { h: "Pál Tomori, cerca de 51 anos" },
        "Nascido por volta de 1475, servia a uma família nobre e fez carreira em castelos da Transilvânia, antes de entrar para os franciscanos em 1520 e se tornar arcebispo de Kalocsa em 1523. Era o capitão da fronteira sul e um comandante hábil. Em Mohács, foi nomeado comandante-chefe, junto com György Szapolyai, por votação, e foi quem de fato conduziu o ataque.",
        { h: "Solimão e o vizir Ibrahim" },
        "Solimão I, o Magnífico, comandava pessoalmente a campanha. O [[vizir|vizir]] Pargalı Ibrahim Paxá comandava a vanguarda e, na batalha, o centro. Bali Bey e Hüsrev Bey, comandantes da cavalaria leve de [[akinci|akinci]], foram mandados cercar os flancos húngaros.",
        { h: "Os outros nomes" },
        "Do lado húngaro, o chanceler Stephen Brodarics, que escreveu um relato da batalha e a estimou em cerca de 25.000 húngaros; Ferenc Batthyány na ala direita; Péter Perényi na esquerda; e Lenart Gnoiński, chefe de estado-maior e líder dos infantes poloneses, que propôs um forte de carroças, como o de Hunyadi em Kosovo, ideia que não foi adotada."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os húngaros eram cerca de 25.000, segundo Brodarics, que estava lá, e as estimativas dos historiadores vão de 25.000 a 30.000. Alguns autores chegam a 50.000–60.000. A composição divide as fontes: uma lista fala em cerca de 3.000 cavaleiros nobres, 1.000 da guarda real, 4.500 de cavalaria leve, 6.700 húngaros a pé, 5.300 infantes alemães pagos pelo papa e 1.500 poloneses; outra fala em cerca de 15.000 cavaleiros e 10.000 de infantaria. A artilharia: 85 canhões, dos quais cerca de 53 foram usados.",
        "Os otomanos eram bem mais, e o número é discutido. A Wikipédia em inglês dá cerca de 45.000 combatentes; fontes húngaras falam em 60.000 a 80.000, e o limite é de 100.000, contando o exército inteiro. Brodarics estimou o acampamento em 200.000, dos quais 80.000 combatentes. Eram [[janízaros]], cavalaria dos sipahis, tropas dos Bálcãs, e cerca de 300 canhões.",
        { note: "Os números têm faixas largas. Uma das fontes fala em otomanos duas ou três vezes mais numerosos, e todas dão a eles muito mais artilharia." },
        { h: "O terreno" },
        "Um campo a uns 7 km ao sul de Mohács, limitado a leste pelos pântanos do Danúbio. Ao sul e a oeste, um terraço de 25 a 30 metros de altura (os historiadores discutem a inclinação) bordejava o campo. Um riacho, o Borza, o cortava, e o chão era irregular, com cristas e vales que limitavam a visão. Os húngaros ficaram a 2 a 2,5 km do terraço.",
        { h: "As escolhas húngaras" },
        "No conselho de guerra, o chanceler Brodarics aconselhou esperar os reforços, que estavam a dias de distância. Mas nobres impacientes convenceram o rei a lutar logo. O palatino Báthori recusou o comando por causa de gota, e quem foi escolhido foi György Szapolyai, irmão mais novo do voivoda e sem experiência de comando, e o relutante Tomori.",
        { h: "A tarde de 29 de agosto" },
        { formation: true },
        "Ao amanhecer, os húngaros se formaram em duas linhas paralelas ao terraço. Na primeira, a maior parte da infantaria, cerca de 10.000, no centro, com Batthyány à direita e Perényi à esquerda, com cavalaria pesada, e os canhões espalhados pela linha. Na segunda, o rei, com uns 3.000 cavaleiros pesados e as guardas. O exército não tinha profundidade: qualquer coisa menos que uma carga perfeita o condenaria.",
        "Os otomanos marcharam cerca de 12 km, quase sete horas. Segundo o diário de Solimão, chegaram à borda do terraço por volta das duas da tarde. O vizir Ibrahim desceu primeiro com o corpo da Rumélia, os janízaros e a artilharia, e armou baterias protegidas por estacas. A cavalaria leve de Bali Bey e Hüsrev Bey foi mandada aos flancos. O sultão e o corpo da Anatólia ainda estavam atrás. Solimão mandou que os da Rumélia armassem acampamento, e os húngaros podem ter entendido isso como sinal de que não haveria batalha naquele dia.",
        "Entre as três e as quatro da tarde (as fontes divergem: a Wikipédia em inglês fala só em 'começo da tarde', e a em português dá 13h e 14h para a chegada dos dois corpos otomanos), Tomori foi até o rei, conseguiu a aprovação e mandou a ala direita e a infantaria do centro atacarem. Queria derrotar o corpo da Rumélia antes que o exército principal se formasse. O ataque jogou os da Rumélia em confusão.",
        "A artilharia da Rumélia atirou por cima dos cavaleiros que avançavam, e as salvas dos janízaros pararam a cavalaria diante dos canhões. A infantaria húngara, que precisava de meia hora para chegar, demorou, e isso deu tempo aos otomanos de se reorganizar. A cavalaria leve fingiu recuar, e a segunda linha húngara carregou. O centro de Ibrahim recuou em forma de [[crescente]], segundo a Wikipédia em inglês, o que expôs os flancos da cavalaria que avançava; a leitura de que foi uma [[retirada fingida|retirada fingida]] planejada é a de uma das fontes, e não de todas.",
        "Enquanto isso, o corpo da Anatólia se formou ao pé do terraço, e os otomanos passaram a ser muito mais numerosos no campo. Tomori perdeu contato com Perényi, e o comando se desfez. A ala esquerda de Perényi atacou os anatólios, que já estavam em ordem, e as salvas dos janízaros a derrubaram. A infantaria lutou até ser destruída, com a cavalaria leve otomana fechando as saídas. Tomori foi morto tentando reunir a cavalaria em fuga. A Wikipédia em inglês diz que Solimão foi atingido por balas que bateram na sua couraça.",
        "Tudo acabou em cerca de duas horas. O rei Luís tentou fugir. Ao tentar subir a margem íngreme do riacho Csele, caiu do cavalo para trás, na água, e se afogou, preso pela armadura. Seu corpo só foi achado semanas depois."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas húngaras passaram de 14.000 homens, e as estimativas vão a 20.000: cerca de 4.000 de cavalaria e 10.000 de infantaria, segundo o historiador Géza Perjés. Morreram mais de mil nobres, incluindo sete prelados e 28 barões. Cerca de 10.000 homens foram capturados, e uns 2.000 foram executados nos dias seguintes. As perdas otomanas são desconhecidas e provavelmente foram altas: a Wikipédia em português fala em 2.000 a 3.000, mas o número não tem fonte clara.",
        "A notícia chegou a Buda em 30 de agosto, e a rainha Maria fugiu. Solimão ficou quatro dias em Mohács e entrou em Buda em 11 de setembro, onde saqueou o castelo e queimou Buda e Pest. Bali Bey devastou a região em incursões. Um grupo de cerca de 25.000 pessoas, segundo a Wikipédia em inglês, foi massacrado num acampamento perto de Dömös. Sem deixar guarnição, o sultão voltou para casa e chegou a Constantinopla em novembro.",
        { h: "Por que importa" },
        "Em 1526, os nobres húngaros elegeram dois reis rivais: João Zápolya e o Habsburgo Fernando I. Os otomanos tomaram Buda em 1541, e a Hungria foi dividida em três partes: uma sob o domínio otomano, uma sob os Habsburgo e a Transilvânia semi-independente. O domínio otomano em boa parte do país durou até o fim do século 17. Na memória húngara, Mohács é o fim do reino medieval, e há um ditado que diz: 'Mais se perdeu em Mohács.'",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: 29 de agosto era o dia no calendário juliano. No gregoriano, o aniversário cai em 8 de setembro." },
        { note: "A ausência de Zápolya: o voivoda tinha escrito ao rei pedindo que não lutasse antes de sua chegada, e chegou apenas a Szeged, em 27 de agosto, atrasado pela chuva. Um dos estudos que consultamos acha que ele provavelmente não chegaria a tempo nem com ordens claras." },
        { note: "A tática: o historiador Géza Perjés disse que a formação húngara era 'boa para nada, exceto uma carga desesperada'. Já a ideia de que Ibrahim planejou uma retirada para atrair os cavaleiros é de uma parte das fontes e é discutida." },
        { note: "As fontes: o relato húngaro mais próximo é o de Brodarics, e há ainda o diário de Solimão. Os números das duas partes foram discutidos por séculos." }
      ]}
    ]
  },

  cajamarca: {
    war: "Conquista do Império Inca por Francisco Pizarro (1532–1572)",
    hook: "Numa tarde de novembro, 168 espanhóis capturaram um imperador no meio de milhares de homens e, em meia hora, decidiram o destino do maior império da América.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O Império Inca, o maior da América antes da chegada dos europeus, se estendia pelos Andes. Em 1532, estava saindo de uma guerra civil entre dois meios-irmãos, Huáscar e Atahualpa. Atahualpa foi capturado em Tumebamba, escapou, venceu várias batalhas e, na última, em Quipaipán, em abril de 1532, prendeu Huáscar. A guerra e as doenças tinham enfraquecido o império.",
        "Foi nesse momento que chegaram os espanhóis. Francisco Pizarro, filho ilegítimo de uma família pobre de Trujillo, na Extremadura, nunca aprendeu a ler. Tinha ido para a América em 1509 e, em 1524, se associou a Diego de Almagro e a Hernando de Luque para conquistar o que ficava ao sul do Panamá. Tentou duas vezes. Em 1529, o rei Carlos I o nomeou governador das terras que conquistasse. Saiu do Panamá no fim de 1530 e, em 1532, fundou a cidade de San Miguel de Piura.",
        { h: "O caminho até Cajamarca" },
        { timeline: [
          ["1529 a 1532", "Guerra civil inca entre Huáscar e Atahualpa."],
          ["Julho de 1529", "O rei da Espanha nomeia Pizarro governador das terras a conquistar."],
          ["Fevereiro de 1532", "Pizarro chega a Tumbes e a encontra em parte destruída pela guerra civil."],
          ["Abril de 1532", "Atahualpa vence em Quipaipán e prende Huáscar."],
          ["15 de novembro de 1532", "Os espanhóis chegam a Cajamarca."],
          ["16 de novembro de 1532", "A batalha, ou, como preferem muitos historiadores, o massacre."]
        ]},
        "Pizarro subiu os Andes com cerca de 168 homens: 106 a pé e 62 a cavalo. Atahualpa poderia tê-los emboscado nas montanhas. Deixou que chegassem. Seu exército estava acampado em Pultumarca, a cerca de uma légua de Cajamarca, hoje Baños del Inca. A cidade, de uns 2.000 habitantes, estava quase vazia."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Francisco Pizarro, perto dos 55 anos" },
        "Seu ano de nascimento é incerto, entre 1475 e 1478. Com 168 homens, não tinha como vencer o exército inca em campo aberto. Seu plano era a surpresa: levar o imperador a uma praça fechada e capturá-lo de uma vez. Sem ele, o império, onde tudo dependia do imperador, ficaria sem direção.",
        { h: "Atahualpa, cerca de 30 anos" },
        "Tinha acabado de vencer a guerra civil e estava no auge. Aceitou visitar os espanhóis em Cajamarca. Por quê, os historiadores discutem: talvez estivesse confiante demais, talvez achasse que podia controlá-los. Não imaginou que 168 homens pudessem ser perigosos para uma multidão de milhares.",
        { h: "Os outros nomes" },
        "Hernando Pizarro, irmão de Francisco, e Hernando de Soto comandavam a cavalaria; Juan Pizarro, outro irmão, comandava parte da infantaria. Soto foi ao acampamento de Atahualpa, leu um discurso por meio de um intérprete e fez demonstração de equitação. O frade Vicente de Valverde, com o intérprete Felipillo (ou Martinillo, conforme o cronista), leu o [[requerimento]]. Pedro de Candía ficou numa torre com um [[falconete]]. Do lado inca, o general Rumiñahui esperava fora da cidade com cerca de 8.000 homens."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os espanhóis eram 168, segundo a maioria das fontes, embora se falem também em 180 e 175. Havia alguns [[arcabuzes|arcabuz]], cerca de 12, e armas de fogo pequenas: as fontes falam em dois, três ou quatro canhões.",
        "O exército inca, em Pultumarca, é dado como de cerca de 80.000 homens por John Hemming, e de uns 30.000 pela Wikipédia em espanhol. Mas o que importava era o que entrou na praça. Atahualpa chegou com uma comitiva de 3.000 a 8.000 pessoas, segundo os historiadores modernos. Jared Diamond diz que eram servidores e nobres, e John Michael Francis, guardas com armas cerimoniais. Os cronistas antigos falavam em 30.000 a 40.000. Os que estavam armados tinham, segundo uma fonte, pequenos machados de enfeite.",
        { note: "A comitiva de Atahualpa é um dos números mais discutidos: de 3.000 a 40.000, segundo a fonte. O que quase todos aceitam é que eram muito mais que os espanhóis, e que quase não tinham armas." },
        { h: "O terreno" },
        "A praça de Cajamarca era um grande espaço aberto, cercado de edifícios onde os espanhóis se esconderam. Havia uma torre sobre a praça.",
        { h: "A emboscada" },
        "Pizarro dividiu a cavalaria entre Hernando Pizarro e Soto, e pôs guizos nos cavalos. Dividiu a infantaria entre ele e Juan Pizarro. Candía foi para a torre com três soldados, dois trombeteiros e dois falconetes, um deles inutilizado. Os espanhóis não sabiam que os incas não costumavam lutar à noite, e a espera, com a procissão lenta de Atahualpa, os deixava nervosos. Pedro Pizarro conta que muitos urinaram de medo.",
        "Atahualpa chegou perto do anoitecer, numa [[liteira]] coberta de penas de papagaio e parcialmente de prata, carregada por uns 80 nobres, com outras liteiras atrás. Surpreendeu-se por não ver nenhum espanhol na praça.",
        "Valverde, com o intérprete, avançou e leu o [[requerimento]]: o inca devia aceitar a fé cristã e o rei Carlos I como soberano. Atahualpa recusou-se a ser tributário. As fontes divergem no que veio depois. Pela versão mais conhecida, ele pediu para ver o livro de Valverde (um breviário ou uma Bíblia), não conseguiu ler e o jogou no chão. Jerez conta que ele pediu para ver o livro; o único relato inca, de Titu Cusi Yupanqui, ditado décadas depois, não menciona livro nenhum. Valverde correu para Pizarro e pediu que atacasse.",
        "Soaram as trombetas, e Candía disparou o falconete contra a multidão. A cavalaria carregou gritando 'Santiago', e os arcabuzeiros atiraram. A comitiva, quase sem armas, entrou em pânico, e a multidão derrubou um muro para fugir. Os espanhóis miravam os nobres e os [[curacas|curaca]]. Cortaram as mãos dos carregadores da liteira, que tombou. Atahualpa foi puxado para fora. Pizarro impediu um soldado de matá-lo e foi ferido na mão. A luta durou cerca de meia hora. O exército de Rumiñahui, a uma distância curta, se dispersou, e não há prova de que os incas tenham combatido os espanhóis depois."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os números dos mortos incas variam muito: 2.000 (Wikipédia em inglês e em português), de 2.000 a 3.000 mortos e 7.000 presos (infobox em inglês), de 4.000 a 5.000 mortos e uns 7.000 feridos ou presos (Wikipédia em espanhol), e de 6.000 a 7.000 (Gonzalo Portocarrero). Do lado espanhol, a maioria das fontes fala em nenhum morto; a Wikipédia dá um escravo negro morto e um espanhol ferido, e outras falam em até cinco mortos.",
        "No dia seguinte, os espanhóis saquearam o acampamento inca. Atahualpa ofereceu encher um quarto de ouro uma vez e de prata duas vezes, em dois meses. O quarto media cerca de 6,7 por 5,2 metros, com 2,4 de altura. O ouro começou a chegar de Cusco em 20 de dezembro de 1532, e em 3 de maio de 1533 Pizarro tinha recebido tudo, que foi derretido em barras. Hemming argumenta que Atahualpa ofereceu o resgate para salvar a vida, e que nenhum cronista antigo registra uma promessa de libertá-lo.",
        "Pizarro armou um julgamento, enquanto Soto estava fora procurando um exército escondido que não existia. As acusações: revolta contra os espanhóis, idolatria, a morte de Huáscar, e, segundo alguns relatos, poligamia e incesto. A pena era a fogueira. Valverde propôs que, se aceitasse o batismo, seria estrangulado. Atahualpa foi batizado, com o nome de Francisco, e executado por [[garrote]] em 26 de julho de 1533, segundo a Wikipédia sobre ele. Outros textos dão 29 de agosto.",
        { h: "Por que importa" },
        "Em 15 de novembro de 1533, Pizarro entrou em Cusco, o coração do império, com cerca de 500 espanhóis. Manco Inca foi posto no trono como fantoche. A conquista completa levou uns quarenta anos: o último inca, Túpac Amaru, foi capturado e executado em 1572. A captura de Atahualpa deixou sem cabeça um império em que tudo dependia do imperador, e que a guerra civil e as doenças já tinham enfraquecido.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome: muitos historiadores preferem 'massacre de Cajamarca' a 'batalha', porque do lado inca quase não houve luta." },
        { note: "O livro no chão: é a cena mais famosa, mas depende dos cronistas espanhóis. O relato de Titu Cusi Yupanqui, o único inca, não a menciona. A Wikipédia em inglês propõe duas explicações: pouca importância para os incas, ou confusão com o dia anterior." },
        { note: "A execução: a Wikipédia dá 26 de julho de 1533 como data, e nota que algumas fontes falam em 29 de agosto, data que pesquisas posteriores consideram errada." },
        { note: "As fontes: Francisco de Jerez, Miguel de Estete e Pedro Pizarro eram espanhóis e escreveram do seu ponto de vista. Juan de Betanzos entrevistou guardas incas, e o único relato inca, o de Titu Cusi Yupanqui, foi ditado décadas depois." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  panipat: {
    terrain: [
      { t: "note", x: 91, y: 38, l: "Cidade de Panipat" },
      { t: "note", x: 9, y: 38, l: "Fosso com galhos" }
    ],
    units: [
      { id: "bCar", s: "a", k: "car", w: 44, h: 2.5, l: "700 carroças amarradas" },
      { id: "bGun", s: "a", k: "inf", w: 38, h: 3, l: "Mosqueteiros e canhões" },
      { id: "bRes", s: "a", k: "cav", w: 14, h: 4, l: "Reserva" },
      { id: "bWL", s: "a", k: "cav", w: 11, h: 4, l: "Ala esquerda" },
      { id: "bWR", s: "a", k: "cav", w: 11, h: 4, l: "Ala direita" },
      { id: "bFL", s: "a", k: "cav", w: 10, h: 4, l: "Destacamento da ponta esquerda" },
      { id: "bFR", s: "a", k: "cav", w: 10, h: 4, l: "Destacamento da ponta direita" },
      { id: "lC", s: "b", k: "inf", w: 34, h: 7, l: "Centro de Ibrahim" },
      { id: "lL", s: "b", k: "cav", w: 14, h: 5, l: "Ala esquerda" },
      { id: "lR", s: "b", k: "cav", w: 14, h: 5, l: "Ala direita" },
      { id: "lE", s: "b", k: "ele", w: 20, h: 4, l: "Elefantes" }
    ],
    steps: [
      { t: "Babur amarra cerca de 700 carroças em fila, com mosqueteiros atrás e aberturas para a cavalaria sair. Uma ponta se apoia na cidade, a outra num fosso com galhos. Ibrahim acampa à frente, com muito mais homens.",
        p: { bCar: [50, 44], bGun: [50, 49], bRes: [50, 60], bWL: [24, 54], bWR: [76, 54], bFL: [10, 56], bFR: [90, 56],
             lC: [50, 14], lL: [22, 14], lR: [78, 14], lE: [50, 23] } },
      { t: "Por cerca de uma semana, cavaleiros de Babur chegam perto do acampamento e atiram flechas, para provocar um ataque. Ibrahim não cai na isca.",
        p: { bWL: [26, 34], bWR: [74, 34] } },
      { t: "Na manhã de 21 de abril, Ibrahim finalmente sai do acampamento e avança contra o centro de Babur.",
        p: { bWL: [24, 54], bWR: [76, 54], lC: [50, 26], lL: [24, 25], lR: [76, 25], lE: [50, 34] } },
      { t: "A frente de Babur é estreita demais para os números de Ibrahim. O exército se espreme, e as alas não têm onde atacar nem como recuar.",
        p: { lC: [50, 31], lL: [34, 30], lR: [66, 30], lE: [50, 36] } },
      { t: "Os mosquetes e os canhões prendem o centro diante das carroças. O barulho assusta os elefantes, que pisoteiam os próprios soldados.",
        p: { lE: [50, 33] }, x: ["lE"] },
      { t: "Os destacamentos das pontas extremas de Babur correm por fora, em volta das alas, na direção da retaguarda inimiga.",
        p: { bFL: [10, 28, 70], bFR: [90, 28, -70] } },
      { t: "As alas de Babur batem nos flancos do inimigo, enquanto os destacamentos chegam por trás. Ibrahim está cercado.",
        p: { bWL: [32, 32, 50], bWR: [68, 32, -50], bFL: [30, 14, 90], bFR: [70, 14, -90] } },
      { t: "Os arqueiros de Babur atiram da esquerda, da direita e de trás. A luta mais dura vai até cerca do meio-dia.",
        p: { bFL: [38, 18, 90], bFR: [62, 18, -90], lL: [34, 28], lR: [66, 28] }, x: ["lL", "lR"] },
      { t: "Ibrahim morre, e seu corpo só é achado à tarde. O exército inteiro se desfaz.",
        p: { lC: [50, 22] }, x: ["lC", "lL", "lR", "lE"] }
    ]
  },

  mohacs: {
    terrain: [
      { t: "hill", x: 50, y: 70, rx: 52, ry: 9, l: "Terraço de 25 a 30 m" },
      { t: "sea", x: 91, y: 0, w: 9, h: 58, l: "Pântano do Danúbio" }
    ],
    units: [
      { id: "hL", s: "b", k: "cav", w: 15, h: 5, l: "Ala esquerda (Perényi)" },
      { id: "hI", s: "b", k: "inf", w: 22, h: 5, l: "Infantaria e canhões" },
      { id: "hR", s: "b", k: "cav", w: 15, h: 5, l: "Ala direita (Batthyány)" },
      { id: "hK", s: "b", k: "cav", w: 20, h: 5, l: "Segunda linha: o rei e 3.000 cavaleiros" },
      { id: "oRum", s: "a", k: "cav", w: 18, h: 5, l: "Corpo da Rumélia" },
      { id: "oJan", s: "a", k: "inf", w: 16, h: 4, l: "Janízaros e canhões" },
      { id: "oAn", s: "a", k: "cav", w: 18, h: 5, l: "Corpo da Anatólia" },
      { id: "oBL", s: "a", k: "cav", w: 11, h: 4, l: "Cavalaria leve de Hüsrev" },
      { id: "oBR", s: "a", k: "cav", w: 11, h: 4, l: "Cavalaria leve de Bali" }
    ],
    steps: [
      { t: "Ao amanhecer, os húngaros se formam em duas linhas, paralelas ao terraço. Os otomanos ainda estão marchando, atrás dele.",
        p: { hL: [24, 36], hI: [49, 36], hR: [74, 36], hK: [49, 22],
             oRum: [50, 66], oJan: [30, 68], oAn: [74, 68], oBL: [12, 66], oBR: [88, 66] } },
      { t: "Por volta das duas da tarde, o vizir Ibrahim desce o terraço com os da Rumélia, os janízaros e os canhões, e arma baterias com estacas. A cavalaria leve vai para os flancos. O sultão manda armar acampamento.",
        p: { oRum: [50, 56], oJan: [50, 61], oBL: [14, 54], oBR: [86, 54] } },
      { t: "Tomori vê os otomanos separados e pede ao rei para atacar. A ala direita e a infantaria do centro carregam contra os da Rumélia.",
        p: { hR: [62, 48, 30], hI: [50, 46] } },
      { t: "Os canhões da Rumélia atiram por cima dos cavaleiros, e as salvas dos janízaros param a cavalaria diante das baterias. Os húngaros perdem muita gente ao tentar contornar.",
        p: { oJan: [50, 54], hR: [66, 52, 30], oRum: [38, 58] } },
      { t: "O centro otomano recua em crescente, e a cavalaria leve finge fugir. A segunda linha húngara, com o rei, carrega. Atrás, o corpo da Anatólia se forma ao pé do terraço.",
        p: { oAn: [64, 60], hK: [50, 38], oBR: [82, 46, -40], oBL: [18, 48, 40] } },
      { t: "Tomori perde contato com Perényi. A ala esquerda ataca os anatólios, já em ordem, e é derrubada pelas salvas dos janízaros.",
        p: { hL: [34, 52, -20] }, x: ["hL"] },
      { t: "A cavalaria leve fecha as saídas, e o exército húngaro fica cercado. A infantaria luta até ser destruída. Tomori é morto tentando reunir a cavalaria em fuga.",
        p: { oBR: [82, 30, -80], oBL: [18, 30, 80], hR: [70, 44], hI: [50, 42] }, x: ["hR", "hI"] },
      { t: "O rei Luís tenta fugir pelo pântano, cai do cavalo no riacho Csele e se afoga, preso pela armadura. Em cerca de duas horas, a Hungria medieval acabou.",
        p: { hK: [88, 14] }, x: ["hK"] }
    ]
  }
});
