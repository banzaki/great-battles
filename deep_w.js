// batch w: Austerlitz, Borodino, Leipzig, Waterloo, Nova Orleans, Chacabuco

Object.assign(GLOSSARY, {
  "grande armée": "O exército de Napoleão. Nasceu em 1805 do exército que esperava em Boulogne para invadir a Inglaterra. Em 1812 passou de meio milhão de homens, de muitas nacionalidades.",
  "corpo de exército": "Grande unidade que reúne várias divisões, com infantaria, cavalaria e artilharia próprias. Napoleão marchava com os corpos separados, mas perto o bastante para se juntarem antes da batalha.",
  "guarda imperial": "Tropa de elite de Napoleão, formada pelos veteranos mais bravos. Era a última reserva: só entrava no fim, para dar o golpe final. Por isso era tão importante quando recuava.",
  "bateria": "Grupo de canhões que atira junto, sob o mesmo comando.",
  "grande bateria": "Dezenas de canhões postos lado a lado, para martelar um ponto da linha inimiga antes do ataque da infantaria. Era uma marca de Napoleão, que começou a carreira como oficial de artilharia.",
  "flechas": "Fortificações de terra em forma de seta (flèche, em francês), abertas na parte de trás. Os russos fizeram três delas em Borodino para proteger a ala esquerda.",
  "coluna de ataque": "Formação em que os soldados marcham em blocos estreitos e fundos, com muitas fileiras. Dá força para o choque, mas expõe os homens da frente ao fogo de canhões e de fuzis em linha.",
  "milícia": "Tropa formada por cidadãos que pegam em armas quando é preciso, sem serem soldados de profissão. Costuma ter menos treino que o exército regular.",
  "armistício": "Acordo para parar de lutar por um tempo, sem ser ainda a paz. Serve para negociar ou para o exército respirar.",
  "confederação do reno": "Aliança de estados alemães sob a proteção de Napoleão, criada em 1806. Deu a ele soldados e um escudo contra a Áustria e a Prússia. Desapareceu depois de Leipzig.",
  "granadeiros": "Infantaria de elite. O nome vem dos soldados que antes jogavam granadas e eram escolhidos entre os mais altos e fortes. Na Guarda de Napoleão, os granadeiros eram o corpo mais prestigiado.",
  "terra queimada": "Tática de destruir ou levar embora tudo o que o inimigo pode usar (comida, abrigo, forragem) ao recuar. O invasor avança num país vazio e passa fome.",
  "parapeito": "Muro baixo de terra ou pedra na frente de uma posição. O soldado atrás dele atira de pé, mas fica protegido do fogo inimigo.",
  "baioneta": "Lâmina presa na ponta do fuzil, para o combate corpo a corpo. Uma carga de baionetas é um ataque correndo, sem parar para atirar.",
  "tratado de gante": "O tratado que encerrou a guerra de 1812 entre os Estados Unidos e a Grã-Bretanha, assinado em 24 de dezembro de 1814. Só valeu depois de ratificado pelos dois governos.",
  "realistas": "Na América espanhola, os que defendiam o rei da Espanha, em oposição aos patriotas, que queriam a independência.",
  "patriotas": "Na América espanhola, os que lutavam pela independência da Espanha.",
  "granadeiros a cavalo": "Regimento de cavalaria criado por San Martín em 1812. Foi a tropa de choque do Exército dos Andes.",
  "escaramuça": "Combate curto e pequeno, antes ou durante uma batalha maior."
});

Object.assign(DEEP, {
  austerlitz: {
    war: "Guerra da Terceira Coalizão (1805)",
    hook: "Napoleão largou de propósito o terreno mais forte do campo, esperou o inimigo ocupá-lo e, no auge da batalha, o tomou de volta.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 2 de dezembro de 1804, Napoleão tinha se coroado imperador dos franceses na catedral de Notre-Dame. Um ano depois, no mesmo dia, ele estava no meio da Morávia, hoje na República Tcheca, numa batalha que podia custar o trono. A Europa estava em guerra com a França, quase sem pausa, desde 1792. A paz com a Grã-Bretanha, assinada em Amiens em 1802, tinha durado pouco: em 1803 a guerra recomeçou.",
        "Os britânicos juntaram aliados na Terceira Coalizão: Rússia, Áustria e outros. Napoleão tinha um exército de uns 150.000 homens acampado em Boulogne, na costa do Canal da Mancha, pronto para invadir a Inglaterra. Quando a Áustria se mexeu, ele virou tudo para o leste. Esse exército passou a se chamar [[Grande Armée|grande armée]], com cerca de 350.000 homens divididos em sete [[corpos de exército|corpo de exército]].",
        { h: "O caminho até Austerlitz" },
        { timeline: [
          ["25 set. 1805", "Cerca de 200.000 franceses começam a atravessar o Reno, numa frente de uns 260 km."],
          ["20 out. 1805", "Em Ulm, o general austríaco Mack se rende com cerca de 23.000 homens, quase sem batalha."],
          ["21 out. 1805", "Em Trafalgar, a frota franco-espanhola é derrotada pela britânica. Em terra, Napoleão continua vencendo."],
          ["Nov. 1805", "Napoleão ocupa Viena e fica com as pontes sobre o Danúbio inteiras, além de cerca de 100.000 mosquetes e 500 canhões."],
          ["2 dez. 1805", "Batalha de Austerlitz."]
        ]},
        "A situação de Napoleão, porém, era mais frágil do que parecia. Estava longe de casa, com as linhas de abastecimento esticadas. A Prússia, ainda neutra, ameaçava entrar na guerra contra ele. Precisava de uma vitória rápida e completa, e precisava que o inimigo aceitasse lutar."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão Bonaparte, 36 anos" },
        "Oficial de artilharia nascido na Córsega, general aos 24 anos, imperador aos 35. Sabia que o inimigo tinha mais homens e mais canhões. Para compensar, fez um plano de teatro: mostrou fraqueza para ser atacado onde queria. Mandou o general Savary ao czar com propostas de paz, deixou transparecer hesitação e abandonou o planalto de Pratzen, o melhor terreno do campo. O objetivo era fazer os aliados acreditarem que ele temia a batalha.",
        { h: "Alexandre I da Rússia, 27 anos, e Francisco II da Áustria" },
        "O jovem czar e o imperador austríaco acompanhavam o exército. Alexandre e seus oficiais mais jovens queriam uma batalha e viam em Napoleão um general que hesitava. A pressa deles foi o melhor aliado do francês.",
        { h: "Kutuzov, 60 anos, e Weyrother" },
        "O velho general russo Mikhail Kutuzov, que comandava o exército aliado, queria recuar para os Cárpatos e esperar reforços. Foi voto vencido. O plano de batalha foi escrito pelo austríaco Weyrother, e o czar tirou de Kutuzov o comando efetivo, que ficou com Weyrother. Kutuzov continuou como comandante no papel e dirigiu uma das colunas.",
        { h: "Os marechais" },
        "Do lado francês, Soult (IV Corpo) levaria o golpe decisivo. Davout (III Corpo) tinha de segurar o sul, Lannes (V Corpo) e Murat (cavalaria) o norte. A [[guarda imperial]] e o I Corpo de Bernadotte ficaram de reserva. Do lado russo, o príncipe Bagration comandava o flanco direito aliado, ao norte."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam conforme a fonte. Os franceses tinham entre 65.000 e 75.000 homens, com cerca de 157 canhões. Mas uns 7.000 deles, do corpo de Davout, ainda marchavam do sul. Os aliados tinham entre 73.000 e 89.000 homens, uns 70% russos, e cerca de 318 canhões. Uma conta comum é de cerca de 73.000 franceses contra 85.000 aliados.",
        { h: "O terreno" },
        "O campo fica uns 10 km a sudeste de Brno. O centro dele é o planalto de Pratzen, uma colina suave e larga. Ao norte ficam os morros de Santon e Žuráň, ao lado da estrada de Olmütz. Ao sul, os riachos e as aldeias de Telnitz e Sokolnitz, e os lagos congelados de Satschan. Entre a elevação e o lado francês corre o riacho Goldbach.",
        { h: "O plano francês: a isca" },
        { formation: true },
        "Napoleão deixou o planalto vazio e escondeu a maior parte do exército atrás do riacho Bosenitz, em terreno baixo, longe da vista. Fortificou o morro de Santon, no norte, com 18 canhões. E enfraqueceu de propósito a ala direita, ao sul, para convidar os aliados a atacá-la. Davout, que vinha de Viena, devia segurar essa ala. Tinha cerca de 5.000 homens no início, que chegaram a 12.500, contra os cerca de 43.000 de Buxhoeveden. Davout marchou uns 110 km em 48 horas para chegar a tempo.",
        "Cerca de dois terços das forças francesas ficaram concentradas para o golpe no centro, numa frente de uns 3 km. O sucesso dependia de uma coisa fora do controle dele: a neblina. Ela tinha de cobrir a subida dos franceses e se dissipar no momento certo.",
        { h: "O plano aliado" },
        "O plano de Weyrother, adotado em 1º de dezembro, mandava atacar a ala direita francesa com quatro colunas, enquanto outros ataques de apoio iam no norte. A Guarda Imperial russa ficaria de reserva e Bagration guardaria a direita aliada. Era um plano que supunha que Napoleão ficaria parado esperando.",
        { h: "De manhã: o sul" },
        "Por volta das 8 da manhã, os aliados atacaram Telnitz. A aldeia era defendida pelo 3º Regimento de Linha. Os primeiros homens de Davout chegaram, expulsaram os aliados e, depois de contra-ataques de hussardos, as baterias francesas seguraram o resto. O ponto mais disputado foi Sokolnitz, onde o bombardeio de Langeron expulsou os franceses e a divisão de Friant acabou retomando a vila.",
        "Os aliados atacavam mais devagar que o previsto. Parte da cavalaria teve de ser desviada de outra ala, o que atrasou uma das colunas. E Kutuzov queria manter o planalto, mas o czar mandou a coluna dele sair do alto, contra a vontade do velho general. O centro aliado afinou.",
        { h: "O golpe: Pratzen" },
        "Por volta das 8h45, a neblina começava a levantar. Napoleão perguntou a Soult quanto tempo seus homens precisariam para chegar ao alto. Segundo o relato tradicional, Soult respondeu que menos de vinte minutos. Napoleão esperou uns quinze minutos mais e deu a ordem.",
        "A divisão de Saint-Hilaire subiu a encosta na neblina, e o sol saiu quando eles chegavam ao topo. Os comandantes aliados no alto foram pegos de surpresa. Houve mais de uma hora de combate duro pelas colinas, com a entrada de unidades austríacas da segunda coluna. Ao norte, a divisão de Vandamme atacou a vinha de Staré Vinohrady e quebrou vários batalhões aliados. Napoleão passou seu posto de comando do morro de Žuráň para a capela de Santo Antônio, no planalto.",
        "O grão-duque Constantino, irmão do czar, mandou a Guarda Imperial russa contra Vandamme. Os franceses perderam uma bandeira, de um batalhão do 4º Regimento de Linha. Napoleão mandou então a cavalaria pesada da sua Guarda. Houve um grande choque de cavalaria, em que a divisão de Drouet, do I Corpo, serviu de abrigo para os cavaleiros franceses, e a artilharia a cavalo da Guarda causou grandes perdas. Os russos se quebraram e foram perseguidos.",
        { h: "O norte e o sul, depois do golpe" },
        "No norte, a cavalaria pesada de Liechtenstein atacou a de Kellermann, e as divisões de couraceiros de d'Hautpoul e Nansouty venceram depois de um longo corpo a corpo. Lannes empurrou Bagration para fora do campo. Murat não quis perseguir, e Napoleão cancelou o ataque.",
        "No sul, Saint-Hilaire e parte do corpo de Davout romperam em Sokolnitz. Kienmayer, Langeron e Buxhoeveden fugiram. Os soldados de Dokhturov, que cobriam a retirada, foram bombardeados perto de Augezd. O gelo dos lagos de Satschan quebrou, e homens e canhões afundaram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam cerca de 36.000 dos 89.000 homens (uns 38%), contando mortos, feridos e prisioneiros, além de 186 canhões e 45 bandeiras. Os franceses perderam cerca de 9.000 de 66.000 (uns 13%). As contas dos historiadores dão aos aliados entre 27.000 e 36.000 baixas, e aos franceses algo entre 8.500 e 9.300.",
        "A Áustria pediu uma trégua, assinada em 4 de dezembro. Em 26 de dezembro, o Tratado de Pressburg tirou os austríacos da guerra: eles reconheceram as perdas de terras na Itália e na Alemanha, cederam Veneza ao Reino da Itália e pagaram 40 milhões de francos. Os russos receberam passagem livre para voltar para casa.",
        { h: "Por que importa" },
        "Em 1806, Napoleão criou a [[Confederação do Reno|confederação do reno]], um colchão de estados alemães entre a França e o leste, e o [[Sacro Império|sacro império]], com cerca de mil anos, deixou de existir: Francisco II ficou só como imperador da Áustria. A Prússia, preocupada com a influência francesa na Alemanha, entrou em guerra em 1806. Austerlitz também não resolveu tudo: a Grã-Bretanha e a Rússia continuaram a guerra.",
        "Os historiadores a colocam entre as obras-primas táticas de Napoleão, ao lado de Canas e Gaugamela: um plano de isca e golpe, feito com um exército menor e em terreno escolhido por ele. Napoleão deu dois milhões de francos em ouro aos oficiais superiores e 200 francos a cada soldado, e adotou os órfãos dos mortos.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome 'Batalha dos Três Imperadores' vem de Napoleão, Alexandre I e Francisco II. Mas alguns autores lembram que Francisco não estava no campo de batalha, e que a própria carta de Napoleão a Josefina fala dos 'dois imperadores' comandando o exército inimigo." },
        { note: "A lenda do gelo: no relato de Napoleão, os canhões franceses quebraram o gelo dos lagos e milhares de russos se afogaram. Os historiadores acham isso exagerado. Os números de mortos variam de 200 a 2.000 conforme a fonte, e quando os lagos foram esvaziados, dias depois, acharam só dois ou três corpos e uns 150 cavalos. O próprio czar Alexandre, mais tarde, reconheceu que o episódio aconteceu." },
        { note: "O 'Sol de Austerlitz' é uma imagem consagrada, mas lendária. O que as fontes de fato registram é a neblina que cobriu a subida e começou a levantar na hora em que Napoleão precisava." },
        { note: "Tolstói fez de Austerlitz o fim do primeiro volume de Guerra e Paz, e uma cena da batalha está esculpida no Arco do Triunfo, em Paris. O bicentenário, em 2005, gerou polêmica porque o governo francês não participou de nenhuma cerimônia." }
      ]}
    ]
  },

  borodino: {
    war: "Invasão francesa da Rússia (1812)",
    hook: "O dia mais sangrento das Guerras Napoleônicas: cerca de 70.000 mortos e feridos em um só dia, e nenhum dos dois lados saiu vencedor de verdade.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 24 de junho de 1812, Napoleão atravessou o rio Niemen e invadiu a Rússia à frente de uma [[Grande Armée|grande armée]] de mais de 450.000 homens na primeira onda, que depois chegou a bem mais de 600.000, de muitas nações. O czar Alexandre I tinha rompido com o sistema de Napoleão, e ele queria obrigá-lo a voltar, com uma grande batalha rápida.",
        "Só que os russos não deram essa batalha. O general Barclay de Tolly recuava, trocava espaço por tempo, e o exército francês ia se desgastando em marchas, doenças e fome. Em agosto, em Smolensk, houve uma batalha de dois dias, mas os exércitos russos escaparam do cerco. Depois de Smolensk, o czar tirou Barclay do comando e pôs no lugar o velho Kutuzov. A relação de forças tinha caído de uns 3 contra 1 para uns 5 contra 4.",
        { h: "O caminho até Borodino" },
        { timeline: [
          ["24 jun. 1812", "Napoleão atravessa o Niemen."],
          ["16 a 18 ago.", "Batalha de Smolensk: os russos escapam e continuam recuando."],
          ["5 a 6 set.", "Combate pelo reduto de Shevardino, um posto avançado da esquerda russa. Os franceses tomam a posição, com perdas pesadas dos dois lados."],
          ["7 set. 1812", "Batalha de Borodino."]
        ]},
        "Os russos usam o [[calendário juliano|calendário juliano]], doze dias atrás do nosso. Por isso, nos livros russos, a batalha é de 26 de agosto."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão, 43 anos" },
        "No auge do poder e, naquele dia, com um resfriado, segundo alguns relatos. Queria uma batalha decisiva, daquelas que acabavam as guerras. Em vez de manobrar, atacou de frente as posições fortificadas dos russos.",
        { h: "Kutuzov, 66 anos" },
        "Veterano de muitas guerras contra os turcos e de Austerlitz, onde tinha sido contra a batalha. Escolheu parar e lutar numa posição fortificada, a uns 120 km de Moscou. Depois da batalha, declarou vitória, e os livros soviéticos o pintaram como um mestre tático. Os historiadores modernos discutem quanto da luta foi realmente dirigida por ele.",
        { h: "Os outros nomes" },
        "Do lado russo, Barclay de Tolly comandava a direita e o centro, e o príncipe Bagration, a ala esquerda, que levou o maior golpe. Raevski defendia o grande reduto do centro. Do lado francês, os marechais Davout e Ney atacaram a esquerda russa, o vice-rei da Itália, Eugène de Beauharnais, o centro, e o príncipe polonês Poniatowski, a extrema esquerda, junto a Utitsa. A cavalaria era de Murat."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os russos tinham cerca de 155.000 homens, com 637 canhões, além de uns 43.000 irregulares que não lutaram. Os franceses, cerca de 128.000, com 587 canhões. A Guarda Imperial francesa, uns 18.500 homens, nunca entrou em combate.",
        { h: "O terreno" },
        "A posição russa formava um arco de uns 8 km, do rio Moskva até a aldeia de Utitsa, passando pelo riacho Kolocha. Havia bosques na esquerda e no centro, que atrapalhavam o avanço francês, e o Kolocha tinha margens íngremes. No centro-direita ficava o grande reduto de Raevski, de terra, aberto atrás, com cerca de 19 canhões. Na esquerda, três [[flechas]] de Bagration, também abertas atrás.",
        { h: "A batalha" },
        { formation: true },
        "Às 6 da manhã, uma [[grande bateria]] francesa de cerca de 100 canhões abriu fogo contra o centro russo. Por volta das 7h30, os homens de Davout tomaram as três flechas. Bagration contra-atacou, e Ney as retomou. Foram sete assaltos franceses ao todo, e as flechas mudaram de mãos várias vezes. Nesse tempo, os cossacos de Platov acharam um vau na direita russa e pediram permissão para um raide.",
        "Por volta das 11h, Bagration foi ferido na perna por estilhaços de uma bala de canhão. Ficou em campo por um tempo, mas a notícia de que o comandante da ala esquerda estava caído espalhou-se e derrubou o moral do 2º Exército. Dokhturov assumiu o comando daquele setor. (Bagration morreu da ferida, em 24 de setembro.) Ao sul, os poloneses de Poniatowski tomaram Utitsa, que os russos incendiaram, e o general Tuchkov foi mortalmente ferido num contra-ataque. Kutuzov se recusou a mandar reforços para lá.",
        "Perto do meio-dia, Uvarov e Platov, com uns 8.000 cavaleiros e 12 canhões, sem infantaria, deram a volta e chegaram à retaguarda do IV Corpo de Eugène, que teve de recuar. O raide foi visto na hora como um fracasso, mas atrasou o ataque francês por umas duas horas. Deu tempo para os russos se reorganizarem e trazerem reforços. Alguns historiadores acham que isso também influenciou a decisão de Napoleão sobre a Guarda.",
        "Às 14h, Napoleão renovou o assalto ao reduto de Raevski, com as divisões de Broussier, Morand e Gérard. O reduto caiu por volta das 15h30. O general russo Likhachov foi capturado e o general francês Caulaincourt morreu na carga dos couraceiros. A cavalaria da Guarda russa conteve o avanço francês depois do reduto.",
        { h: "O fim do dia" },
        "Vários marechais e generais, entre eles Ney, Berthier e Rapp, pediram a Napoleão que mandasse a Guarda. Ele não mandou. Disse que estava seguro de vencer sem ela, e alguns relatos falam em doença. A Guarda russa, em contraste, aguentou o fogo dos canhões franceses, parada, das 16 às 18 horas. À noite, os dois exércitos estavam exaustos. Kutuzov recuou em ordem no dia 8."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas são muito discutidas. Os franceses perderam algo entre 28.000 e 35.000 homens, incluindo 49 generais, conforme a conta. Os russos, entre 44.000 e 52.000, incluindo 22 a 29 generais, segundo a fonte. Somando, são uns 68.000 a 73.000 em um dia, o recorde das guerras napoleônicas. O segundo, Waterloo, teve cerca de 55.000.",
        "A maioria dos historiadores a descreve como empate ou vitória pírrica francesa: os franceses ficaram com o campo e Napoleão ocupou Moscou em 14 de setembro, mas a Rússia não se rendeu. Kutuzov, em Fili, em 13 de setembro, decidiu entregar a cidade para salvar o exército.",
        "Moscou estava deserta e logo pegou fogo. Quem mandou incendiá-la é discutido; o governador, Rostopchin, é o suspeito tradicional. Napoleão esperou cerca de cinco semanas por uma proposta de paz do czar, que nunca veio. Deixou Moscou em 19 de outubro, perdeu a batalha de Maloyaroslavets e teve de voltar pelo mesmo caminho devastado, enfrentando a [[terra queimada]] deixada pelos russos. A neve e o frio de novembro, a fome e os ataques de cossacos e camponeses fizeram o resto.",
        { h: "Por que importa" },
        "Dos mais de 600.000 homens que entraram na Rússia, só cerca de 110.000 a 120.000 voltaram, segundo as estimativas. A campanha da Rússia quebrou a Grande Armée e, no ano seguinte, a Europa se levantou contra Napoleão, até Leipzig. O próprio Napoleão escreveu que os franceses se mostraram dignos da vitória e os russos, de serem invencíveis.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem ganhou? Kutuzov se declarou vencedor, em parte por razões políticas. Os livros soviéticos o pintaram como um mestre tático. Historiadores mais recentes, como Riehn e Mikaberidze, dizem que Bagration e Barclay fizeram a maior parte da luta. Chandler defende que Kutuzov manteve o controle, ainda que admita que os generais cometeram muitos erros. Há quem diga ainda que a decisão de Napoleão de não usar a Guarda poupou os russos de um desastre como o de Austerlitz." },
        { note: "O nome: os franceses a chamam de Batalha do Moskva (la Moskova), pelo rio, e Napoleão deu a Ney o título de Príncipe da Moskova por causa dela. O oficial britânico Robert Wilson, que acompanhava o exército russo, a chamou de Batalha dos Generais, pelo número de generais mortos e feridos." },
        { note: "Na cultura: Tolstói a descreve em Guerra e Paz, Tchaikovsky escreveu a Abertura 1812 e Lermontov um poema. A Rússia reencena a batalha todos os anos, e o pintor Franz Roubaud fez um panorama dela em 1912, para o centenário." }
      ]}
    ]
  },

  leipzig: {
    war: "Guerra da Sexta Coalizão (1813)",
    hook: "Mais de meio milhão de soldados, quatro dias, e uma ponte explodida cedo demais: a batalha que expulsou Napoleão da Alemanha.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1812, Napoleão invadiu a Rússia com cerca de 600.000 homens e perdeu quase todos. Na Espanha, Wellington ganhou em Vitória, em 1813. A Prússia e a Rússia se uniram contra a França na Sexta Coalizão, e a Alemanha, que Napoleão dominava, começou a se agitar.",
        "Napoleão levantou outro exército, grande mas feito de jovens recrutas sem experiência. Ganhou em Lützen (2 de maio) e Bautzen (20 e 21 de maio). Veio então um [[armistício]], durante o qual os aliados se prepararam. Os aliados combinaram, no castelo de Trachenberg, um plano: evitar o próprio Napoleão, recuar quando ele avançasse e atacar os marechais dele. Em 12 de agosto, a Áustria se juntou à coalizão.",
        { h: "O caminho até Leipzig" },
        { timeline: [
          ["Maio 1813", "Napoleão vence em Lützen (2 de maio) e Bautzen (20 e 21 de maio) com um exército de jovens recrutas."],
          ["12 ago. 1813", "A Áustria entra na guerra contra a França."],
          ["26 e 27 ago.", "Napoleão vence em Dresden."],
          ["Ago. e set.", "Os aliados vencem seus marechais em Großbeeren, Kulm, Katzbach e Dennewitz, como o plano mandava."],
          ["16 a 19 out. 1813", "Batalha de Leipzig."]
        ]},
        "No outono, os aliados fecharam o círculo em torno dele. Os soldados saxões e westfalianos que lutavam com os franceses davam sinais de revolta, e alguns já tinham trocado de lado em Großbeeren e Dennewitz."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão, 44 anos" },
        "Estava numa posição central: tinha Leipzig e suas pontes, e podia mandar tropas de um setor a outro mais rápido que os aliados. Esperava vencer um exército de cada vez, antes que os outros chegassem, como tantas vezes antes. Não conseguiu.",
        { h: "Schwarzenberg, Blücher e Bernadotte" },
        "O príncipe Karl von Schwarzenberg, austríaco, comandava o maior exército, o da Boêmia, e era o comandante geral da coalizão. O prussiano Blücher, de 70 anos, comandava o Exército da Silésia, e era o mais agressivo. O Exército do Norte era do sueco Carlos João, que tinha sido marechal de Napoleão com o nome de Bernadotte. O general Bennigsen trazia o Exército da Polônia, reserva russa. Os três soberanos, o czar Alexandre I, o imperador Francisco I da Áustria e o rei Frederico Guilherme III da Prússia, acompanhavam o exército.",
        { h: "Poniatowski" },
        "O príncipe Józef Poniatowski, polonês, comandava os poloneses ao lado de Napoleão, que o promoveu a marechal da França durante a batalha. Seu fim, no último dia, é um dos símbolos de Leipzig."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Nos dias 16 e 17, os aliados tinham cerca de 257.000 homens e 1.145 canhões, contra cerca de 177.000 franceses e 700 canhões. Nos dias 18 e 19, com os reforços, passaram a cerca de 359.000 homens e 1.500 canhões, contra cerca de 195.000 e 900. No total, eram uns 560.000 soldados, e a Rússia tinha 150.000, a Áustria 115.000, a Prússia 90.000 e a Suécia 30.000. Do lado francês, só uns 160.000 eram franceses: o resto eram poloneses, italianos, napolitanos, saxões e homens de Baden, Württemberg, Hesse e Westfália.",
        { h: "O terreno" },
        "Os rios Pleiße e Parthe se juntam em Leipzig e dividem o terreno em quatro setores. Quem segurava a cidade e suas pontes, no caso Napoleão, podia deslocar tropas entre os setores mais rápido. A oeste ficava Lindenau, ao sul Liebertwolkwitz e Wachau, a sudeste Probstheida e a leste Paunsdorf e Schönefeld. Em Möckern, no norte, havia um dique de uns 4 metros ao longo do rio Elster.",
        { h: "16 de outubro: dia do empate" },
        "No sul, Napoleão queria atacar entre o Pleiße e o Parthe. O austríaco Merveldt atacou na direção de Connewitz e Dölitz, e acabou ferido e capturado. Em Liebertwolkwitz, os austríacos de Klenau expulsaram os franceses e foram contra-atacados. Napoleão ordenou a formação de uma [[grande bateria]] de Drouot, de cerca de 150 canhões, e Murat lançou cerca de 10.000 cavaleiros franceses, italianos e saxões em colunas. A cavalaria aliada, menor, os empurrou de volta, e eles foram salvos pelos dragões da Guarda.",
        "No norte, em Möckern, os russos de Langeron e os prussianos de Yorck, do Exército da Silésia, lutaram contra o VI Corpo de Marmont. As perdas foram cerca de 9.000 aliados e 7.000 franceses, mais 2.000 prisioneiros franceses. O dia terminou empatado: os aliados perderam cerca de 30.000 e os franceses, uns 25.000.",
        { h: "17 de outubro: a pausa" },
        "Foi um dia de calma, com só dois combates pequenos. Nesses dias, Napoleão tentou negociar: mandou de volta, sob palavra, o general Merveldt, que tinha capturado, com uma proposta de armistício (entregar as fortalezas do Oder e do Vístula em troca da retirada atrás do rio Saale). Os três soberanos recusaram. As fontes divergem sobre o dia exato. Os reforços eram muito desiguais: os franceses recebiam uns 14.000 homens, do general Reynier, e os aliados, cerca de 145.000, do Exército do Norte e de Bennigsen.",
        { h: "18 de outubro: o cerco" },
        "Os aliados fecharam o círculo. O ponto mais sangrento foi Probstheida, onde ataques prussianos, russos e a carga de Raevski falharam contra a artilharia da Guarda francesa. Em Breitenfeld, Carlos João e Blücher se encontraram. Em Paunsdorf, o Exército do Norte usou os foguetes Congreve de uma brigada britânica, e cerca de 5.000 a 6.000 saxões do VII Corpo de Reynier mudaram de lado no meio do combate, junto com cavalaria de Württemberg. A linha francesa recuou. Em Lindenau, a oeste, o IV Corpo de Bertrand expulsou os austríacos de Gyulay e manteve aberta a estrada para a retirada.",
        { h: "19 de outubro: a ponte" },
        "Os aliados descobriram a evacuação às 7 da manhã e atacaram entre 8 e 9. A retaguarda, com cerca de 30.000 homens sob Oudinot e outros comandantes, lutou rua por rua em Leipzig. Até os caçadores suecos entraram no assalto final.",
        "A única ponte sobre o Elster Branco, que os franceses precisavam atravessar, estava preparada para ser dinamitada depois que todos passassem. A ordem foi passada do general Dulauloy a um coronel, e deste a um cabo. O cabo acendeu o pavio por volta da 1 da tarde, quando a ponte ainda estava cheia de franceses e a retaguarda ainda estava na cidade. A explosão causou um pânico: milhares morreram e uns 30.000 foram capturados. O marechal Macdonald atravessou o rio a nado. Poniatowski, ferido, se afogou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam cerca de 54.000 homens dos 360.000 (Schwarzenberg uns 34.000, Blücher uns 12.000, e Carlos João e Bennigsen uns 4.000 cada). Napoleão perdeu cerca de 38.000 entre mortos e feridos. Os aliados capturaram uns 15.000 homens sãos, 21.000 feridos ou doentes, 325 canhões e 28 águias ou bandeiras. Seis generais franceses morreram, 12 foram feridos e 36 capturados, incluindo Lauriston e Reynier.",
        "O poder francês a leste do Reno acabou. Baden, a Saxônia e Württemberg passaram para o lado da coalizão, e a [[Confederação do Reno|confederação do reno]] se desfez. Em Hanau, em 30 e 31 de outubro, ele ainda abriu caminho à força contra austríacos e bávaros. Na volta a Paris, teria dito que, um ano antes, toda a Europa marchava com ele, e agora marchava contra ele.",
        { h: "Por que importa" },
        "A coalizão invadiu a França no começo de 1814, e Paris caiu em 31 de março. Napoleão abdicou em 6 de abril e foi para a ilha de Elba. Foi a maior batalha da Europa até a Primeira Guerra Mundial, segundo muitos historiadores, e é a que a Alemanha lembra como a Völkerschlacht, o começo da libertação da tutela francesa. Em 1913, no centenário, foi inaugurado em Leipzig o Monumento à Batalha das Nações.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome: Batalha das Nações, em francês Bataille des Nations e em alemão Völkerschlacht, porque lutaram juntos soldados de muitos países, de russos e suecos a poloneses, italianos e alemães de vários estados, dos dois lados." },
        { note: "Os 30.000 da ponte: o número que aparece em muitos livros é de prisioneiros, feitos na cidade e na ponte, e inclui muitos feridos e doentes. Os aliados contaram cerca de 15.000 homens sãos e 21.000 feridos ou doentes capturados em todo o Leipzig. Quantos morreram na explosão, as fontes não dizem com segurança." },
        { note: "Os foguetes Congreve: a brigada britânica de foguetes do Exército do Norte ajudou a expulsar os franceses de Paunsdorf. O capitão Bogue foi morto por um atirador." }
      ]}
    ]
  },

  waterloo: {
    war: "Os Cem Dias (1815)",
    hook: "Napoleão escapou de Elba, retomou a França quase sem disparar um tiro e perdeu tudo num domingo, em Waterloo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em abril de 1814, depois de Leipzig e da invasão da França, Napoleão abdicou e foi para a ilha de Elba. A Europa voltou a ser governada por reis, e a França teve de novo um Bourbon, Luís XVIII, no trono. Mas o novo rei tinha pouco apoio entre os antigos soldados de Napoleão, e ele ficou sabendo.",
        "Em 26 de fevereiro de 1815, ele saiu de Elba com cerca de mil homens e desembarcou na França em 1º de março. Os regimentos mandados para prendê-lo mudaram de lado, um a um. Entrou em Paris em 20 de março, sem batalha, e o rei fugiu. Começaram os Cem Dias. Em 13 de março, o Congresso de Viena já o tinha declarado fora da lei, e em 17 de março Reino Unido, Rússia, Áustria e Prússia se mobilizaram contra ele, na Sétima Coalizão.",
        { h: "O caminho até Waterloo" },
        { timeline: [
          ["15 jun. 1815", "Napoleão atravessa a fronteira da Bélgica, perto de Charleroi, para atacar os exércitos aliados antes de se juntarem."],
          ["16 jun.", "Em Ligny, vence os prussianos de Blücher. Ao mesmo tempo, Ney luta contra Wellington em Quatre Bras, que Wellington segura."],
          ["17 jun.", "Os prussianos recuam para o norte, em direção a Wavre. Wellington recua para a crista de Mont-Saint-Jean, perto de Waterloo. Napoleão manda Grouchy, com 33.000 homens, atrás dos prussianos. Chove a noite inteira."],
          ["18 jun. 1815", "Batalha de Waterloo."]
        ]},
        "A ideia de Napoleão era simples: bater os dois exércitos aliados separadamente, antes que se encontrassem. Ele foi bem em Ligny. Mas deixou os prussianos escaparem, e Grouchy os perdeu de vista."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão, 45 anos" },
        "Estava de volta ao poder, com um exército de veteranos e sem recrutamento forçado nessa campanha. Entregou a Ney o comando tático de boa parte do exército. Uma decisão que pesou muito foi esperar o chão secar na manhã de 18 de junho, o que atrasou o ataque e deu tempo aos prussianos.",
        { h: "Wellington, 46 anos" },
        "O duque de Wellington, que tinha lutado na Península Ibérica e nunca tinha enfrentado Napoleão pessoalmente, era mestre da defesa: escondia as tropas atrás de uma crista para que o inimigo não visse nem batesse nelas com artilharia. Seu exército era misto, com britânicos, hanoverianos, holandeses, belgas, brunsvicenses e nassauenses.",
        { h: "Blücher, 72 anos" },
        "O velho marechal prussiano tinha acabado de perder em Ligny e tinha sido derrubado do cavalo. Mesmo assim, prometeu a Wellington que viria com três corpos, e veio.",
        { h: "Ney e Grouchy" },
        "O marechal Ney, 'o bravo dos bravos', era o chefe de grande parte da linha de frente francesa. Grouchy, com cerca de um terço do exército, devia manter os prussianos longe e fracassou."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os franceses tinham de 72.000 a 74.500 homens e uns 250 canhões. Wellington tinha cerca de 68.000 (a conta mais usada), ou até 74.000, e 156 canhões, mais uns 17.000 deixados em Halle para proteger um flanco. Os prussianos eram cerca de 50.000, com 126 canhões, e chegaram aos poucos durante a tarde. Wellington ainda tinha pouca cavalaria pesada, mas deu a Uxbridge liberdade para usar a cavalaria como achasse melhor.",
        { h: "O terreno" },
        "A crista de Mont-Saint-Jean cruza a estrada de Bruxelas. Na frente dela, Wellington tinha duas fazendas fortificadas: Hougoumont, à direita, e La Haye Sainte, no centro. Atrás da crista, a infantaria ficava fora da vista. Os franceses ficaram do outro lado de um vale, com a estrada de Bruxelas no meio.",
        { h: "A manhã: a espera" },
        "A chuva da noite deixou o chão encharcado, e Napoleão esperou para ele secar, por causa da artilharia e da cavalaria. Perto de 11h, deu a ordem geral: Jérôme atacaria Hougoumont, a [[grande bateria]] bombardearia a partir das 13h, e d'Erlon e Reille atacariam a esquerda de Wellington. Enquanto isso, o IV Corpo prussiano de Bülow saía devagar de Wavre, atrasado por um incêndio.",
        { h: "O dia" },
        { formation: true },
        "Hougoumont. O ataque começou por volta das 11h30. O general Bauduin, que liderava o primeiro ataque, morreu. O tenente Legros arrombou o portão norte com um machado, e soldados da Guarda de Coldstream e da Guarda Escocesa fecharam o portão atrás dos franceses que tinham entrado, que foram mortos. Napoleão mandou bombardear a casa, que pegou fogo, menos a capela. Ele jogou ali 33 batalhões, cerca de 14.000 homens. Wellington gastou 21 batalhões, cerca de 12.000, para mantê-la. Hougoumont resistiu até o fim.",
        "A grande bateria. Cerca de 80 canhões abriram fogo por volta do meio-dia (as horas variam nas fontes, de 11h50 às 13h30). Por volta das 13h15, Napoleão viu colunas prussianas se aproximando de Lasne, a uns 6 a 8 km da sua direita.",
        "O ataque de d'Erlon. Por volta das 13h30, cerca de 14.000 homens do I Corpo avançaram em [[colunas de ataque|coluna de ataque]], contra uns 6.000 defensores à esquerda de Wellington. O general Picton morreu logo depois de ordenar um contra-ataque. Os franceses quase romperam, e por volta das 14h Napoleão parecia estar ganhando. Mas as brigadas pesadas de cavalaria britânica, a Household e a União, com os Scots Greys, de Uxbridge, atacaram e rechaçaram as colunas. Os Greys tomaram a águia do 45º de Linha. Mas, sem controle, se perderam na carga: as duas brigadas pesadas perderam 1.205 homens e 1.303 cavalos.",
        "As cargas de Ney. Um pouco antes das 16h, Ney viu movimento entre os feridos no centro de Wellington e o tomou por uma retirada. Atacou com a cavalaria, sem infantaria junto. A primeira onda tinha uns 4.800 sabres. Com mais cavalaria, chegaram a cerca de 9.000 cavaleiros em 67 esquadrões. A infantaria de Wellington formou [[quadrados|quadrado]], e as testemunhas contam 12 assaltos, sem romper nenhum. Napoleão teria dito que a carga foi uma hora cedo demais, mas não a parou. A cavalaria pesada da Guarda perdeu 47% dos homens.",
        "Os prussianos. O IV Corpo de Bülow chegou em força por volta das 16h30. Atacou Plancenoit, na direita francesa. Napoleão mandou os oito batalhões da Jovem Guarda e depois dois da Velha Guarda. Plancenoit trocou de mãos cinco vezes. A Jovem Guarda teve perdas de uns 96%, e dois terços do corpo de Lobau deixaram de existir.",
        "La Haye Sainte. A fazenda resistiu quase a tarde toda. Quando a munição da Legião Alemã do Rei acabou, ela caiu. A artilharia francesa passou a atirar metralha à queima-roupa contra os quadrados. Ney ainda mandou infantaria, cerca de 6.500 homens, com cavalaria, mas a cavalaria de Uxbridge os deteve.",
        { h: "O fim: a Guarda" },
        "O I Corpo prussiano de Zieten chegou no fim da tarde. Müffling o convenceu a virar para a esquerda de Wellington, e não a ir ajudar Bülow. Por volta das 19h30, a linha francesa já era uma ferradura. Napoleão jogou então a última carta: cinco batalhões da Guarda Média, com três da Velha Guarda de reserva, com Ney à frente.",
        "Foi um desastre. A divisão holandesa de Chassé atacou o flanco da Guarda. Uma bateria de artilharia a cavalo atirou no flanco dos granadeiros, que se quebraram. Os Guardas a pé de Maitland se levantaram e deram salvas contra os caçadores. O 52º, de Colborne, contra-atacou. A Guarda recuou, o que, segundo a tradição, nunca tinha acontecido. O grito 'La Garde recule!' correu pela linha, e Wellington mandou o exército inteiro avançar. O exército francês fugiu. Napoleão foi tirado do campo por seus ajudantes.",
        "Segundo a tradição, Wellington e Blücher se encontraram por volta das 21h perto da fazenda La Belle Alliance. Blücher queria dar o nome da batalha a ela. Wellington preferiu o nome da aldeia de Waterloo, onde tinha dormido e escreveu o relatório. Os franceses a chamam de Mont-Saint-Jean."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército de Wellington perdeu cerca de 17.000 homens (3.500 mortos, 10.200 feridos e 3.300 desaparecidos), e o de Blücher, cerca de 7.000. Os franceses perderam de 24.000 a 26.000 mortos e feridos, mais 6.000 a 8.000 prisioneiros, e uns 15.000 desertaram depois. Foram capturados cerca de 220 canhões, segundo as contas mais comuns. Pelo menos 7.000 cavalos foram mortos ou feridos.",
        "Napoleão chegou a Paris em 21 de junho e abdicou entre os dias 22 e 24. Os aliados entraram na capital em 7 de julho. Em 15 de julho, ele se entregou ao capitão Maitland, do navio britânico HMS Bellerophon, e foi mandado para Santa Helena, uma ilha no Atlântico Sul, onde morreu em 1821.",
        { h: "Por que importa" },
        "Foi o fim do Primeiro Império francês e das guerras que começaram em 1792. A Europa seguiu o desenho do Congresso de Viena, e o segundo Tratado de Paris, de 20 de novembro de 1815, impôs condições mais duras à França. Foi a segunda batalha mais sangrenta de um só dia das guerras napoleônicas, depois de Borodino. E 'encontrar seu Waterloo' virou sinônimo de uma derrota que não tem volta.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem ganhou? Wellington, no relatório, elogiou a ajuda 'cordial e oportuna' dos prussianos. Jomini achou a chegada de Blücher a causa mais importante da derrota. Um historiador moderno escreve que Blücher 'merece todo o crédito por evitar uma derrota britânica'. Outro defende que a chegada dos prussianos forçou Napoleão a se apressar e deixou Wellington passar à ofensiva. Clausewitz achava que um ataque pela manhã teria decidido a batalha antes de os prussianos chegarem." },
        { note: "As causas da derrota: Jomini apontou quatro (Blücher e o erro de Grouchy, a firmeza da infantaria inglesa, a chuva que atrasou o ataque e as colunas fundas). Clausewitz recusou a ideia de acaso ou traição e falou de 'erros enormes' e de ambição demais." },
        { note: "O 'palavrão de Cambronne': a resposta atribuída ao general Cambronne, 'Merda!', quando lhe pediram que se rendesse, é discutida. Cartas ao Times, em 1932, sugerem que ele já estava prisioneiro e que quem disse pode ter sido o general Michel. Outra frase que se atribui a ele, 'A Guarda morre, mas não se rende', também é discutida." },
        { note: "Wellington disse que foi 'por um fio' (em inglês, the nearest run thing he had ever seen). O Leão de Waterloo, um morro artificial, foi feito com cerca de 300.000 m³ de terra tirada da crista do centro do campo, o que rebaixou a estrada. Victor Hugo lamentou que o campo foi 'desfigurado para ser glorificado'. A frase atribuída a Wellington, 'Mudaram meu campo de batalha!', não tem registro." }
      ]}
    ]
  },

  novaorleans: {
    war: "Guerra de 1812 (Estados Unidos contra a Grã-Bretanha)",
    hook: "Cerca de 2.000 baixas britânicas contra 71 americanas, numa batalha travada 15 dias depois de o tratado de paz ter sido assinado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1812, os Estados Unidos declararam guerra à Grã-Bretanha, por causa do bloqueio ao comércio americano, do recrutamento forçado de marinheiros e do apoio britânico aos indígenas que resistiam à expansão americana. Em 1814, depois da queda de Napoleão, a Grã-Bretanha pôde mandar mais tropas e queimou Washington em agosto. Para o fim do ano, planejou uma expedição contra o litoral do Golfo do México.",
        "A campanha do Golfo durou de setembro de 1814 a fevereiro de 1815. O objetivo era tomar Nova Orleans, que controlava a foz do rio Mississippi e, com isso, o comércio de todo o interior americano. Alguns historiadores acham que os britânicos queriam ficar com a Luisiana. Outros, como Jon Latimer, discordam, e Carr conclui que a Grã-Bretanha tinha pressa de acabar a guerra.",
        { h: "O caminho até Nova Orleans" },
        { timeline: [
          ["14 dez. 1814", "Cerca de 980 marinheiros e fuzileiros navais britânicos, sob o capitão Lockyer, capturam cinco canhoneiras americanas no lago Borgne."],
          ["23 dez.", "Cerca de 1.800 soldados britânicos chegam à margem do Mississippi, a uns 14 km (9 milhas) de Nova Orleans. Jackson os ataca de noite, com cerca de 2.100 homens, e ganha tempo."],
          ["24 dez.", "Na Europa, o [[Tratado de Gante|tratado de gante]] é assinado. A notícia leva semanas para chegar."],
          ["25 dez.", "Pakenham chega e assume o comando britânico."],
          ["1º jan. 1815", "Duelo de artilharia de umas três horas. Pakenham cancela o ataque."],
          ["8 jan. 1815", "Batalha de Nova Orleans."]
        ]},
        "O Tratado de Gante só valia depois de ratificado pelos dois governos. Os Estados Unidos o ratificaram em 16 de fevereiro de 1815. Além disso, o ministro britânico Bathurst tinha mandado Pakenham continuar a guerra, mesmo que ouvisse rumores de paz."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Andrew Jackson, 47 anos" },
        "General de milícia do Tennessee, duro e teimoso, chamado de 'Old Hickory'. Foi avisado do desembarque britânico pelo major Gabriel Villeré, que escapou de um ataque à sua casa. Atacou os britânicos de noite, na mesma hora, para ganhar tempo, e depois recuou uns 3 km para uma posição boa para defender: o canal Rodriguez.",
        { h: "Edward Pakenham, 36 anos" },
        "Veterano das guerras de Wellington na Espanha e cunhado dele. Chegou dois dias depois do primeiro combate, e já encontrou o inimigo entrincheirado. Em vez de procurar outro caminho, decidiu atacar de frente.",
        { h: "Os outros nomes" },
        "Os generais britânicos Samuel Gibbs e John Keane comandavam as duas colunas de ataque, e John Lambert estava com a reserva. O coronel William Thornton atravessaria o rio pela margem oeste. Do lado americano, havia o general John Coffee, do Tennessee, os comandantes dos batalhões de homens livres de cor, Savary, Lacoste e Daquin, e o corsário Jean Lafitte, com os baratarianos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam. As contas mais usadas dão cerca de 5.700 americanos e 8.000 britânicos no total da campanha. Em 8 de janeiro, Jackson tinha 4.698 homens na margem leste e 546 na oeste. Os britânicos atacaram com cerca de 5.400 homens.",
        "A tropa americana era uma mistura: soldados regulares, [[milícias|milícia]] do Tennessee, do Kentucky (chegaram cerca de 2.250, mas só uns 550 tinham armas) e da Luisiana, cavalaria do Mississippi, dois batalhões de homens livres de cor (uns 500, segundo uma fonte), cerca de 60 indígenas choctaw e uns 50 baratarianos, que operavam os canhões. A tradição diz que o que decidiu foram os atiradores com rifles do Kentucky. Desde os anos 1960, os historiadores mostram que o papel das milícias foi menor, e que a artilharia causou a maior parte das perdas britânicas.",
        { h: "O terreno" },
        "A linha de Jackson corria do rio Mississippi, por três quartos de milha (uns 1,2 km), até um pântano de ciprestes. Era um [[parapeito|parapeito]] de terra, de uns 2 metros de altura, atrás do canal Rodriguez, que tinha de 3 a 6 metros de largura e de 1,2 a 2,4 de profundidade. Escravizados ajudaram a construir. Na outra margem do rio, ficava uma bateria da marinha.",
        { h: "A batalha" },
        { formation: true },
        "Em 27 de dezembro, o navio americano Carolina foi afundado por um tiro de bala em brasa. Em 28 de dezembro, uma tentativa de reconhecimento britânica falhou. Em 1º de janeiro, houve um duelo de artilharia de três horas, e a casa que servia de quartel a Jackson foi destruída, mas ele saiu ileso. Pakenham desistiu do ataque, às 15h.",
        "O plano de 8 de janeiro tinha duas partes. A principal, o ataque frontal à linha, por duas colunas, a de Gibbs e a de Keane. A outra, pela margem oeste: o coronel Thornton atravessaria o rio e tomaria a bateria americana ali. O ataque começou ao amanhecer, no meio da neblina.",
        "Dois erros pesaram. O coronel Thomas Mullins, do 44º, devia levar as escadas e as [[fascinas|fascinas]] para atravessar o canal e subir o parapeito, mas parou seu regimento no reduto errado. As escadas chegaram tarde demais. E o canal que devia levar os barcos de Thornton ao outro lado do rio desabou, e a correnteza os levou a uns 900 metros rio abaixo. Só 560 homens chegaram, um terço do plano.",
        "Na margem leste, a artilharia e os fuzis americanos arrasaram as colunas. Pakenham foi morto, Gibbs foi mortalmente ferido, e Rennie também morreu. Keane foi ferido. De cerca de 3.000 homens sob Gibbs e Keane, uns 2.000 caíram em menos de 30 minutos. O ataque principal durou uns 30 minutos, e a luta inteira umas duas horas.",
        "Na margem oeste, Thornton levou a melhor: os 560 homens expulsaram a milícia do Kentucky e da Luisiana, que fugiu, e tomaram a bateria. Mas Lambert, que assumiu o comando, mandou recuar, e o oficial de artilharia Dickson tinha avaliado que seriam precisos 2.000 homens para segurá-la."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os americanos tiveram 13 mortos, 39 feridos e 19 desaparecidos ou capturados: 71 baixas. Os britânicos tiveram cerca de 290 mortos, 1.260 feridos e 484 desaparecidos ou capturados, em torno de 2.040 (as contas diferem um pouco entre as fontes). Os britânicos ficaram na margem oeste até 9 de janeiro. Deixaram o campo entre 18 e 19 de janeiro e embarcaram de volta até 27. A frota ainda tomou o forte Bowyer, em Mobile, em 12 de fevereiro, e então chegou a notícia do tratado.",
        { h: "Por que importa" },
        "A batalha não mudou o resultado da guerra, que já estava resolvido no papel. Mas fez de Jackson um herói nacional e deu aos americanos a sensação de terem derrotado o Império Britânico numa 'segunda guerra de independência'. O 8 de janeiro foi feriado federal de 1828 a 1861. Jackson foi eleito presidente e tomou posse em 1829. A vitória destruiu o Partido Federalista, cuja delegação da Convenção de Hartford chegou a Washington depois da notícia, e levou ao período de partido único da 'Era dos Bons Sentimentos'.",
        "Alan Taylor argumenta que a vitória teve consequências enormes: deu aos americanos a primazia no continente e deixou as nações indígenas desprotegidas.",
        { h: "Curiosidades e controvérsias" },
        { note: "O mito dos atiradores: a canção 'The Hunters of Kentucky' foi usada na campanha de Jackson em 1824 e 1828 e fez a fama dos rifles de Kentucky. Mas só de 800 a 1.200 rifles particulares foram usados, e a maioria dos homens tinha mosquetes. Os engenheiros, os escravizados que levantaram os parapeitos e os artilheiros treinados tiveram seu papel diminuído." },
        { note: "'Beleza e Butim': em 1815, uma carta do político George Poindexter dizia que os britânicos usaram 'Booty and Beauty' como senha, isto é, a permissão para saque e abuso. Em 1833, cinco oficiais britânicos assinaram uma negação. Muitos consideram o assunto encerrado." },
        { note: "A batalha também ganhou cultura popular: em 1959, a canção de Jimmy Driftwood, gravada por Johnny Horton, foi número 1 na parada Billboard Hot 100. Estátuas de Pakenham e Gibbs estão na Catedral de São Paulo, em Londres. Lambert, que assumiu o comando em Nova Orleans, lutaria depois em Waterloo." }
      ]}
    ]
  },

  chacabuco: {
    war: "Guerras de independência da América do Sul: a libertação do Chile (1817)",
    hook: "San Martín atravessou os Andes com um exército e caiu sobre os espanhóis do outro lado, em duas colunas que não chegaram juntas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em outubro de 1814, em Rancagua, os espanhóis venceram os patriotas chilenos e acabaram com o período da 'Pátria Velha'. Os que escaparam fugiram para o outro lado dos Andes, para a província de Cuyo, na atual Argentina, governada pelo general José de San Martín.",
        "San Martín tinha um plano maior que o Chile: libertar o Chile e, dali, atacar o Peru por mar. Para isso, tinha antes de atravessar os Andes.",
        { h: "A travessia" },
        { timeline: [
          ["1814 a 1816", "San Martín monta, em Mendoza, o Exército dos Andes. Bernardo O'Higgins e Ramón Freire ajudam a organizá-lo. Ele liberta escravizados que se alistam."],
          ["14 a 23 jan. 1817", "O exército parte em colunas, por vários passos, numa frente de uns 800 km."],
          ["9 fev. 1817", "As colunas principais se juntam em Curimón, no lado chileno."],
          ["12 fev. 1817", "Batalha de Chacabuco."]
        ]},
        "Eram seis colunas. A principal, com cerca de 2.650 combatentes e 7 canhões, atravessou pelo passo de Los Patos com San Martín, O'Higgins e Soler. Uma segunda, de uns 680 homens, passou por Uspallata, sob Juan Gregorio de Las Heras. Colunas menores, mais ao norte e ao sul, ocuparam cidades como Copiapó e Coquimbo. A rota principal tinha mais de 500 km, com altura média de uns 3.000 metros, e alguns passos passavam de 4.500 metros.",
        "O exército foi estimado em cerca de 4.000 soldados, mais auxiliares: cerca de 5.400 pessoas ao todo, segundo uma reconstrução. Levava cerca de 9.300 mulas e uns 1.200 a 1.600 cavalos, e entre 16 e 21 peças de artilharia (as fontes divergem), que o frade Luis Beltrán ajudou a fabricar e a transportar. Só cerca de 4.300 mulas e 500 cavalos chegaram ao Chile. Algumas fontes em inglês falam em até um terço dos homens perdidos, número que outras fontes não confirmam."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "José de San Martín, 38 anos" },
        "Nascido onde hoje é a Argentina, lutou no exército espanhol por mais de 20 anos antes de voltar à América em 1812. Era o cérebro da operação: planejou a travessia, o abastecimento e o engano. Espalhou, por espiões e conversas com os indígenas pehuenches, o boato de que passaria mais ao sul. Os pehuenches contaram isso aos espanhóis, que dispersaram suas forças.",
        { h: "Bernardo O'Higgins, 38 anos" },
        "Chileno, filho de um irlandês que chegou a vice-rei do Peru, tinha sido um dos chefes da Pátria Velha e lutou em Rancagua. Era valente, e foi o ataque dele, antes da hora, que virou o ponto mais discutido do dia.",
        { h: "Soler e os outros" },
        "O general Miguel Estanislao Soler comandava a ala direita. José Matías Zapiola chefiava os esquadrões de [[granadeiros a cavalo|granadeiros a cavalo]] da coluna de O'Higgins, a cavalaria de choque de San Martín. Do lado espanhol, o governador Casimiro Marcó del Pont tinha tropas espalhadas pelo país. O coronel Rafael Maroto, que comandou em Chacabuco, queria recuar para o sul, mas Marcó del Pont ordenou que fechasse o caminho de Santiago. Maroto assumiu uma posição defensiva perto da fazenda de Chacabuco."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam. O Exército dos Andes tinha entre 3.500 e 4.000 homens no combate, e as colunas de Soler e O'Higgins somavam uns 3.500: cerca de 2.000 a 2.100 de Soler e 1.500 de O'Higgins. Os [[realistas|realistas]] tinham entre 1.400 e 2.450 homens: o regimento Talavera, os batalhões Chiloé e Valdivia, e cavalaria dos Húsares da Concórdia e dos Carabineiros de Abascal.",
        { h: "O terreno" },
        "Chacabuco fica ao norte de Santiago, num vale cercado de morros. Os patriotas vinham do norte, descendo as encostas. Os realistas esperavam no alto, perto da fazenda, com a cidade de Santiago atrás deles.",
        { h: "O plano" },
        { formation: true },
        "Em 11 de fevereiro, San Martín dividiu cerca de 3.500 homens em duas colunas, uma de cada lado do morro. Soler iria pela direita, pela estrada de Montenegro, a oeste. O'Higgins, pela esquerda, pela Cuesta Vieja, a leste. San Martín atacaria de frente. A ideia era um ataque em pinça ao amanhecer: Soler cortaria o flanco e a retirada dos espanhóis.",
        "Os patriotas começaram a descer à meia-noite, para atacar ao amanhecer. O caminho de Soler era mais estreito e difícil, e ele se atrasou. O'Higgins chegou antes e atacou, antes que as ordens chegassem a Soler. San Martín mandou um mensageiro mandar Soler atacar logo.",
        "Segundo os relatos, por volta das 11h45, O'Higgins mandou a infantaria atacar de baioneta, contra as ordens de San Martín. A cavalaria caiu num barranco que não tinha visto e recuou. O'Higgins e Crámer atacaram de novo, com a cavalaria no flanco direito realista e a infantaria no centro. Zapiola rompeu um quadrado do Talavera e contornou a direita dos espanhóis. Um segundo ataque dispersou a infantaria e a cavalaria inimigas. A tropa de Soler chegou, envolveu a esquerda e a retaguarda realista e tomou uma posição de artilharia. Os realistas formaram um quadrado em torno da fazenda, e a luta acabou em corpo a corpo. A batalha terminou por volta das 14h. Maroto escapou a cavalo, ligeiramente ferido."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os realistas perderam cerca de 500 mortos e 600 prisioneiros. O relatório oficial de San Martín falou em 450 mortos e 600 prisioneiros. Os patriotas tiveram cerca de 12 mortos e 120 feridos, segundo as contas mais citadas, e o relatório de San Martín fala em menos de 100 baixas. San Martín não perseguiu os que fugiram: cerca de 1.600 soldados embarcaram para o Peru e foram a base da expedição de Osorio. Alguns historiadores acham que uma perseguição teria encurtado a guerra.",
        "Os patriotas entraram em Santiago em 14 de fevereiro. Marcó del Pont fugiu. Uma assembleia ofereceu o governo a San Martín, que recusou, e nomeou então O'Higgins Diretor Supremo do Chile, cargo que ele ocupou até 1823. A independência do Chile foi proclamada em 12 de fevereiro de 1818, um ano depois da batalha. O que faltava foi decidido em Maipú, em abril de 1818.",
        { h: "Por que importa" },
        "Chacabuco abriu a porta do Chile e, com ela, o caminho por mar até o Peru. A travessia dos Andes é muitas vezes comparada à de Aníbal nos Alpes. Boa parte do sucesso veio antes da batalha, da logística e do engano: os espanhóis, avisados pelos boatos de San Martín, tinham dispersado suas forças.",
        { h: "Curiosidades e controvérsias" },
        { note: "O ataque antecipado de O'Higgins é o ponto mais discutido. Em alguns relatos, a carga foi rechaçada com muitas baixas e só a chegada de Soler salvou o dia. O'Higgins disse que os realistas tinham começado a avançar contra seus homens." },
        { note: "Quem lutou? A composição do Exército dos Andes, argentino ou chileno, é disputada. As estimativas da participação chilena vão de cerca de 30% da tropa a cerca de 1.200 soldados, e não sobrou um registro oficial." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  austerlitz: {
    terrain: [
      { t: "hill", x: 62, y: 36, rx: 15, ry: 13, l: "Planalto de Pratzen" },
      { t: "sea", x: 36, y: 64, w: 34, h: 6, l: "Lagos congelados" },
      { t: "note", x: 90, y: 5, l: "Norte ↑" }
    ],
    units: [
      { id: "fN", s: "a", k: "inf", w: 6, h: 14, l: "Lannes (norte)" },
      { id: "fCav", s: "a", k: "cav", w: 6, h: 10, l: "Murat" },
      { id: "fC", s: "a", k: "inf", w: 6, h: 14, l: "Soult (na neblina)" },
      { id: "fS", s: "a", k: "inf", w: 5, h: 8, l: "Ala direita fraca" },
      { id: "fD", s: "a", k: "inf", w: 5, h: 8, l: "Davout" },
      { id: "fG", s: "a", k: "inf", w: 6, h: 9, l: "Guarda e Bernadotte" },
      { id: "aN", s: "b", k: "inf", w: 6, h: 14, l: "Bagration" },
      { id: "aP", s: "b", k: "inf", w: 8, h: 14, l: "Centro aliado" },
      { id: "aS1", s: "b", k: "inf", w: 6, h: 10, l: "Colunas de ataque" },
      { id: "aS2", s: "b", k: "inf", w: 6, h: 10, l: "" },
      { id: "aGd", s: "b", k: "inf", w: 7, h: 9, l: "Guarda russa" }
    ],
    steps: [
      { t: "Napoleão larga o planalto e esconde o grosso do exército atrás do riacho. Só a ala direita, ao sul, parece fraca. Os aliados ocupam o alto.",
        p: { fN: [30, 14], fCav: [38, 22], fC: [34, 38], fS: [30, 56], fD: [8, 60], fG: [20, 32], aN: [66, 12], aP: [64, 36], aS1: [74, 54], aS2: [84, 46], aGd: [82, 26] } },
      { t: "Por volta das 8h, os aliados descem para atacar Telnitz e Sokolnitz. Davout, que marchou uns 110 km em 48 horas, chega a tempo de segurar a direita francesa.",
        p: { aS1: [50, 58], aS2: [58, 62, 90], fS: [30, 56], fD: [20, 62] } },
      { t: "Kutuzov queria manter o planalto, mas o czar manda a coluna dele sair do alto. O centro aliado afina, e a neblina cobre o vale.",
        p: { aP: [56, 50] } },
      { t: "Cerca de 8h45. Napoleão pergunta a Soult quanto tempo precisa. Menos de vinte minutos. Quinze minutos depois, dá a ordem de subir.",
        p: { fC: [48, 40] } },
      { t: "O sol fura a neblina quando as divisões de Saint-Hilaire e Vandamme chegam ao alto. Os aliados são pegos de surpresa, e a luta pelo planalto dura mais de uma hora.",
        p: { fC: [60, 38], fG: [46, 32] } },
      { t: "O grão-duque Constantino lança a Guarda russa contra Vandamme. Napoleão manda a cavalaria pesada da Guarda, e os russos se quebram.",
        p: { aGd: [68, 30], fG: [62, 30] }, x: ["aGd"] },
      { t: "No norte, Lannes e a cavalaria de Murat empurram Bagration para fora do campo.",
        p: { fN: [52, 14], fCav: [54, 20], aN: [82, 10] }, x: ["aN"] },
      { t: "No sul, Soult e parte do corpo de Davout viram sobre Sokolnitz por trás e prendem as colunas aliadas contra os lagos.",
        p: { fC: [58, 48, 90], fG: [58, 36], fS: [34, 58] }, x: ["aP"] },
      { t: "Os que fogem vão para os lagos de Satschan. Segundo Napoleão, o gelo quebra sob eles (os historiadores acham exagero). Os aliados perdem uns 36.000 homens, e os franceses cerca de 9.000.",
        p: { aS1: [46, 66], aS2: [58, 66, 90], fS: [36, 60], fD: [26, 62] }, x: ["aS1", "aS2"] }
    ]
  },

  borodino: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 5, l: "Rio Moskva" },
      { t: "hill", x: 66, y: 25, rx: 8, ry: 6, l: "Reduto de Raevski" },
      { t: "hill", x: 60, y: 46, rx: 7, ry: 5, l: "Flechas de Bagration" },
      { t: "note", x: 90, y: 66, l: "Utitsa" }
    ],
    units: [
      { id: "fE", s: "a", k: "inf", w: 6, h: 16, l: "Eugène (IV Corpo)" },
      { id: "fDN", s: "a", k: "inf", w: 6, h: 18, l: "Davout e Ney" },
      { id: "fPo", s: "a", k: "inf", w: 6, h: 12, l: "Poniatowski" },
      { id: "fBat", s: "a", k: "inf", w: 3, h: 14, l: "Grande bateria" },
      { id: "fCav", s: "a", k: "cav", w: 5, h: 14, l: "Murat" },
      { id: "fGd", s: "a", k: "inf", w: 6, h: 10, l: "Guarda (reserva)" },
      { id: "rB", s: "b", k: "inf", w: 6, h: 16, l: "Barclay (centro e direita)" },
      { id: "rBag", s: "b", k: "inf", w: 6, h: 14, l: "Bagration (esquerda)" },
      { id: "rTu", s: "b", k: "inf", w: 6, h: 10, l: "Tuchkov (Utitsa)" },
      { id: "rGd", s: "b", k: "inf", w: 6, h: 10, l: "Reserva e Guarda" },
      { id: "rCo", s: "b", k: "cav", w: 8, h: 4, l: "Uvarov e Platov" }
    ],
    steps: [
      { t: "Os russos fazem um arco de uns 8 km, do rio Moskva até Utitsa, atrás do riacho Kolocha, com um reduto no centro e três flechas na esquerda. Os franceses vêm do oeste.",
        p: { fE: [36, 24], fDN: [38, 46], fPo: [40, 62], fBat: [44, 36], fCav: [30, 40], fGd: [12, 36],
             rB: [70, 20], rBag: [62, 46], rTu: [72, 62], rGd: [84, 34], rCo: [88, 10] } },
      { t: "Às 6h, uma grande bateria de cerca de 100 canhões abre fogo contra o centro russo.",
        p: { fBat: [48, 34] } },
      { t: "Por volta das 7h30, Davout toma as flechas. Bagration contra-ataca e Ney as retoma. Haverá sete assaltos franceses, e as flechas mudam de mãos várias vezes.",
        p: { fDN: [52, 46], rBag: [66, 46] } },
      { t: "Ao sul, Poniatowski toma a aldeia de Utitsa. Tuchkov é mortalmente ferido num contra-ataque, e Kutuzov se recusa a mandar reforços para lá.",
        p: { fPo: [58, 62], rTu: [76, 62] } },
      { t: "Por volta das 11h, Bagration é ferido por estilhaços de canhão. A notícia derruba o moral da ala esquerda, que recua. Dokhturov assume.",
        p: { fDN: [60, 44], rBag: [74, 44] } },
      { t: "Perto do meio-dia, cerca de 8.000 cavaleiros de Uvarov e Platov dão a volta pela direita e chegam atrás do corpo de Eugène. O ataque francês atrasa umas duas horas.",
        p: { rCo: [46, 12, 90], fE: [32, 26] } },
      { t: "Às 14h, Napoleão renova o assalto ao reduto de Raevski. Por volta das 15h30, ele cai. Os couraceiros franceses perdem Caulaincourt na carga.",
        p: { fE: [58, 28], fCav: [52, 34], rB: [76, 22] } },
      { t: "Ney, Berthier e Rapp pedem que a Guarda entre. Napoleão recusa. A Guarda russa aguenta o fogo de canhões das 16h às 18h. Kutuzov recua em ordem no dia seguinte.",
        p: { fGd: [14, 36], rGd: [84, 34] } }
    ]
  },

  waterloo: {
    terrain: [{ t: "hill", x: 48, y: 15, rx: 46, ry: 8, l: "Crista de Mont-Saint-Jean" }],
    units: [
      { id: "wL", s: "a", k: "inf", w: 60, h: 5, l: "Wellington, atrás da crista" },
      { id: "wH", s: "a", k: "camp", w: 8, h: 5, l: "Hougoumont" },
      { id: "wS", s: "a", k: "camp", w: 6, h: 4, l: "La Haye Sainte" },
      { id: "wCav", s: "a", k: "cav", w: 14, h: 4, l: "Cavalaria de Uxbridge" },
      { id: "pB", s: "a", k: "inf", w: 8, h: 12, l: "Prussianos (Bülow)" },
      { id: "pZ", s: "a", k: "inf", w: 8, h: 10, l: "Prussianos (Zieten)" },
      { id: "fR", s: "b", k: "inf", w: 16, h: 5, l: "Reille e Jérôme" },
      { id: "fE", s: "b", k: "inf", w: 22, h: 5, l: "D'Erlon" },
      { id: "fCav", s: "b", k: "cav", w: 18, h: 5, l: "Cavalaria de Ney" },
      { id: "fG", s: "b", k: "inf", w: 12, h: 5, l: "Guarda Imperial" },
      { id: "fLob", s: "b", k: "inf", w: 8, h: 5, l: "Lobau e Jovem Guarda" }
    ],
    steps: [
      { t: "Depois de uma noite de chuva, Napoleão espera o chão secar. Wellington esconde o grosso da tropa atrás da crista, com duas fazendas fortificadas na frente. Os prussianos ainda estão longe.",
        p: { wL: [48, 17], wH: [20, 32], wS: [48, 29], wCav: [76, 18], pB: [106, 50], pZ: [106, 26],
             fR: [22, 46], fE: [68, 48], fCav: [44, 58], fG: [50, 67], fLob: [78, 60] } },
      { t: "Por volta do meio-dia, Jérôme ataca Hougoumont e a grande bateria de 80 canhões abre fogo. Napoleão joga ali cada vez mais homens, e a fazenda não cai.",
        p: { fR: [22, 38] } },
      { t: "Napoleão vê colunas prussianas ao longe e manda Lobau cobrir a direita. Por volta das 13h30, d'Erlon ataca a esquerda de Wellington com cerca de 14.000 homens.",
        p: { fE: [68, 28], fLob: [84, 52, 90] } },
      { t: "A cavalaria pesada britânica carrega e rechaça as colunas, mas se perde na carga e sofre perdas enormes.",
        p: { wCav: [66, 26], fE: [68, 44] } },
      { t: "Pouco antes das 16h, Ney lança cerca de 9.000 cavaleiros, sem infantaria, contra os quadrados britânicos. Doze assaltos, e nenhum quadrado cede.",
        p: { wCav: [76, 18], fCav: [40, 24] } },
      { t: "Às 16h30, o IV Corpo prussiano de Bülow ataca Plancenoit, na direita francesa. A vila troca de mãos cinco vezes, e Napoleão gasta a Jovem Guarda ali.",
        p: { pB: [90, 48], fLob: [82, 50, 90] } },
      { t: "La Haye Sainte cai quando acaba a munição da Legião Alemã. O centro de Wellington quase cede, mas ele ainda tem a linha atrás da crista.",
        p: { fCav: [44, 42], fE: [58, 32] }, x: ["wS"] },
      { t: "Zieten chega à esquerda de Wellington. Por volta das 19h30, a linha francesa já é uma ferradura. Napoleão manda a Guarda Média, com Ney à frente.",
        p: { pZ: [90, 28], fG: [44, 34] } },
      { t: "Chassé, a Guarda de Maitland e o 52º de Colborne quebram a Guarda. 'La Garde recule!' Wellington manda o exército inteiro avançar.",
        p: { fG: [42, 26], wL: [48, 23] }, x: ["fG"] },
      { t: "O exército francês se desfaz. Os prussianos entram pelo lado. Segundo a tradição, Wellington e Blücher se encontram perto de La Belle Alliance.",
        p: { pB: [76, 54], pZ: [76, 36], fR: [22, 56], fE: [58, 46], fCav: [44, 54], fLob: [82, 58, 90] }, x: ["fR", "fE", "fCav", "fLob"] }
    ]
  },

  novaorleans: {
    terrain: [
      { t: "sea", x: 10, y: 0, w: 8, h: 70, l: "Mississippi" },
      { t: "note", x: 90, y: 38, l: "Pântano de ciprestes" },
      { t: "note", x: 55, y: 5, l: "Nova Orleans ↑" },
      { t: "note", x: 55, y: 68, l: "Chalmette" }
    ],
    units: [
      { id: "uL", s: "a", k: "inf", w: 68, h: 3, l: "Linha Jackson: parapeito e canal" },
      { id: "uA", s: "a", k: "camp", w: 10, h: 3, l: "Artilharia" },
      { id: "uW", s: "a", k: "inf", w: 6, h: 4, l: "Milícia da margem oeste" },
      { id: "bG", s: "b", k: "inf", w: 20, h: 6, l: "Coluna de Gibbs" },
      { id: "bK", s: "b", k: "inf", w: 16, h: 6, l: "Coluna de Keane" },
      { id: "bF", s: "b", k: "camp", w: 7, h: 3, l: "Escadas e fascinas" },
      { id: "bR", s: "b", k: "inf", w: 16, h: 5, l: "Reserva de Lambert" },
      { id: "bT", s: "b", k: "inf", w: 6, h: 4, l: "Thornton" }
    ],
    steps: [
      { t: "Jackson tem um parapeito de terra atrás do canal Rodriguez, do rio ao pântano. Os britânicos estão em campo aberto, a uns 1,2 km.",
        p: { uL: [58, 22], uA: [40, 22], uW: [4, 24], bG: [60, 56], bK: [34, 56], bF: [48, 64], bR: [50, 66], bT: [4, 56] } },
      { t: "Antes: em 1º de janeiro, um duelo de artilharia de três horas não resolve nada, e Pakenham cancela o ataque.",
        p: { bG: [60, 52], bK: [34, 52] } },
      { t: "Antes do ataque principal, Thornton tenta atravessar o rio. O canal que devia levar os barcos desaba, e a correnteza os leva para longe. Só 560 homens chegam.",
        p: { bT: [4, 42] } },
      { t: "Ao amanhecer, no meio da neblina, as colunas de Gibbs e Keane avançam. O 44º, que devia levar as escadas e as fascinas, para no reduto errado.",
        p: { bG: [60, 44], bK: [34, 44], bF: [46, 62] } },
      { t: "A artilharia e os fuzis americanos arrasam as colunas. Os britânicos chegam ao canal sem as escadas.",
        p: { bG: [60, 32], bK: [34, 32] } },
      { t: "Pakenham e Gibbs morrem, e Keane é ferido. De cerca de 3.000 homens, uns 2.000 caem em menos de 30 minutos.",
        p: { bG: [60, 38], bK: [34, 38] }, x: ["bG", "bK"] },
      { t: "Na margem oeste, os 560 homens de Thornton expulsam a milícia e tomam a bateria.",
        p: { bT: [4, 28], uW: [4, 16] }, x: ["uW"] },
      { t: "Lambert assume o comando e manda recuar. Os britânicos deixam o campo entre 18 e 19 de janeiro.",
        p: { bR: [50, 62], bT: [4, 40] } }
    ]
  },

  chacabuco: {
    terrain: [
      { t: "hill", x: 50, y: 46, rx: 40, ry: 9, l: "Morros de Chacabuco" },
      { t: "note", x: 10, y: 6, l: "Andes ↑" },
      { t: "note", x: 50, y: 68, l: "Santiago ↓" }
    ],
    units: [
      { id: "sS", s: "a", k: "inf", w: 16, h: 5, l: "Soler (direita, 2.000)" },
      { id: "sM", s: "a", k: "inf", w: 10, h: 4, l: "San Martín" },
      { id: "sO", s: "a", k: "inf", w: 16, h: 5, l: "O'Higgins (esquerda, 1.500)" },
      { id: "sC", s: "a", k: "cav", w: 10, h: 4, l: "Granadeiros a cavalo (Zapiola)" },
      { id: "rM", s: "b", k: "inf", w: 16, h: 5, l: "Maroto: Talavera, Chiloé, Valdivia" },
      { id: "rC", s: "b", k: "cav", w: 12, h: 4, l: "Cavalaria realista" },
      { id: "rA", s: "b", k: "camp", w: 8, h: 4, l: "Fazenda de Chacabuco" }
    ],
    steps: [
      { t: "Noite de 11 para 12 de fevereiro. Os patriotas vêm do norte, em duas colunas, uma de cada lado do morro. Os realistas esperam no alto, perto da fazenda.",
        p: { sS: [24, 12], sM: [50, 10], sO: [76, 12], sC: [80, 6], rM: [50, 44], rC: [66, 48], rA: [50, 54] } },
      { t: "Desde a meia-noite, as colunas descem para atacar ao amanhecer. O caminho de Soler, a oeste, é mais estreito, e ele se atrasa.",
        p: { sS: [20, 26], sO: [76, 26], sM: [50, 20], sC: [78, 20] } },
      { t: "O'Higgins chega antes ao contato, antes de Soler ter alcançado o flanco inimigo. San Martín manda um mensageiro mandar Soler atacar logo.",
        p: { sO: [72, 38], sC: [76, 32], sS: [22, 34] } },
      { t: "Por volta das 11h45, O'Higgins manda a infantaria atacar de baioneta. A cavalaria cai num barranco que não tinha visto e recua.",
        p: { sO: [66, 42], sC: [82, 28] } },
      { t: "O'Higgins e Crámer atacam de novo. Zapiola rompe um quadrado do Talavera e contorna a direita realista.",
        p: { sO: [58, 44], sC: [62, 38, -40], rC: [70, 56] }, x: ["rC"] },
      { t: "A vanguarda de Soler chega, envolve a esquerda e a retaguarda realista e toma uma posição de artilharia.",
        p: { sS: [34, 48, 30], rM: [50, 50] } },
      { t: "Os realistas formam um quadrado em volta da fazenda. O'Higgins bate no centro, e Soler fecha a retaguarda.",
        p: { sM: [50, 34], sO: [56, 50], sS: [40, 56, 30], rM: [50, 54] } },
      { t: "A luta acaba em corpo a corpo, por volta das 14h. Cerca de 500 realistas morrem e 600 são presos. Maroto escapa a cavalo. Dois dias depois, os patriotas entram em Santiago.",
        p: { sM: [50, 46], sS: [38, 58], sO: [62, 56] }, x: ["rM", "rA"] }
    ]
  }
});
