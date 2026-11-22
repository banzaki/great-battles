// batch ah: Midway, Stalingrado, El Alamein, Guadalcanal, Singapura, Kursk
Object.assign(GLOSSARY, {
  "porta-aviões": "Navio de guerra com convés plano, de onde decolam e pousam aviões. Em 1942 tinha tomado o lugar do encouraçado como peça principal das frotas, e quem achava a frota inimiga primeiro tinha grande vantagem.",
  "bombardeiro de mergulho": "Avião que despenca quase na vertical sobre o alvo e solta a bomba de perto, o que dá uma pontaria muito boa. Os americanos usavam o SBD Dauntless; os japoneses, o D3A.",
  "avião torpedeiro": "Avião que voa baixo e devagar para lançar um torpedo na água contra um navio. Precisa chegar perto e em linha reta, por isso é muito vulnerável a caças e a tiros antiaéreos.",
  "patrulha aérea de combate": "Caças que ficam no ar em volta da frota, prontos para interceptar os aviões inimigos. Quando são puxados para baixo, a frota fica sem proteção no alto.",
  "caça": "Avião rápido e ágil, feito para combater outros aviões e escoltar bombardeiros.",
  "cruzador": "Navio de guerra rápido e bem armado, menor que o encouraçado e maior que o destróier.",
  "destróier": "Navio pequeno e veloz, usado para escoltar frotas, caçar submarinos e lançar torpedos.",
  "criptoanalista": "Especialista em decifrar mensagens secretas sem ter a chave do código.",
  "atol": "Ilha baixa de coral, em forma de anel, em volta de uma lagoa.",
  "tanque": "Veículo de combate blindado sobre esteiras, com um canhão giratório. O T-34 era o tanque soviético mais comum; os alemães usavam os Panzer, o Tiger e o Panther.",
  "blindado": "Veículo de combate protegido por placas de aço: um tanque ou um carro blindado.",
  "panzer": "Palavra alemã para 'blindado'. Uma divisão panzer é uma divisão de tanques, com infantaria e artilharia motorizadas.",
  "tiger": "Tanque pesado alemão, muito bem blindado e com um canhão de 88 mm. Era caro e difícil de fabricar, então havia poucos.",
  "panther": "Tanque médio alemão feito para enfrentar o T-34. Estreou em Kursk, em 1943.",
  "luftwaffe": "A força aérea da Alemanha nazista.",
  "eixo": "A aliança entre Alemanha, Itália e Japão na Segunda Guerra Mundial, com aliados menores, como a Romênia e a Hungria.",
  "stavka": "O alto-comando militar da União Soviética, que respondia a Stálin.",
  "grupo de exércitos": "Comando que reúne vários exércitos numa mesma região. Os alemães tinham, em 1942, os grupos A, B e Don no sul da frente soviética.",
  "ponte aérea": "Abastecer um lugar por avião, quando não há caminho por terra. Precisa de muitos aviões e de boa pista, e é fácil de interromper.",
  "franco-atirador": "Soldado treinado para acertar alvos distantes, um de cada vez, escondido. Em Stalingrado, eram muito úteis no meio das ruínas.",
  "destacamentos de bloqueio": "Unidades soviéticas postadas atrás da linha de frente, com ordem de deter quem fugisse sem autorização. Alguns desertores foram fuzilados por elas.",
  "campo minado": "Terreno cheio de minas, bombas enterradas que explodem quando um soldado ou um veículo passa por cima. Obriga o atacante a parar, ou a perder tempo abrindo caminho.",
  "defesa em profundidade": "Defender em várias faixas, uma atrás da outra, em vez de uma única linha fina. O atacante gasta força em cada faixa e chega cansado às últimas.",
  "canhão antitanque": "Canhão de cano longo, feito para furar a blindagem de tanques. Escondido e bem posicionado, é muito perigoso.",
  "contraofensiva": "Grande ofensiva do defensor, depois de aguentar e desgastar o ataque inimigo.",
  "barragem de artilharia": "Chuva de tiros de muitos canhões ao mesmo tempo sobre uma área, para esmagar as defesas antes de a infantaria avançar.",
  "afrika korps": "A força alemã enviada à África do Norte em 1941, sob Rommel. Em 1942, junto com tropas italianas, formava o Exército Panzer da África.",
  "ultra": "Nome dado pelos britânicos às mensagens alemãs interceptadas e decifradas, como as da máquina Enigma. Mostravam planos, posições e a situação de combustível do inimigo.",
  "diversão": "Ataque ou movimento falso, feito para o inimigo olhar para o lugar errado.",
  "desembarque anfíbio": "Ataque em que as tropas saem de navios direto para a praia inimiga.",
  "fuzileiros navais": "Os Marines americanos: soldados da marinha treinados para desembarcar e lutar em terra.",
  "tokyo express": "Apelido americano dos comboios noturnos de destróieres japoneses, que levavam tropas a Guadalcanal. Os japoneses chamavam o serviço de 'transporte de ratos'.",
  "força z": "Pequena esquadra britânica, com o encouraçado Prince of Wales e o cruzador de batalha Repulse, enviada a Singapura em 1941. Aviões japoneses a afundaram em 10 de dezembro.",
  "estreito de johor": "O canal estreito, de cerca de um a dois quilômetros, entre a ilha de Singapura e a ponta sul da península da Malásia."
});

Object.assign(DEEP, {

  midway: {
    war: "Guerra do Pacífico (1941–1945)",
    hook: "Um código decifrado, uma hesitação de almirante e poucos minutos de mergulho mudaram a guerra no Pacífico.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 7 de dezembro de 1941, o Japão atacou a base americana de Pearl Harbor. Nos meses seguintes, tomou as Filipinas, a Malásia, Singapura e as ilhas holandesas do Sudeste Asiático. Os [[porta-aviões]] americanos, que não estavam no porto no dia do ataque, continuavam vivos, e era isso que mais preocupava o almirante Isoroku Yamamoto, o chefe da frota japonesa.",
        "Duas coisas aumentaram a pressa dele. Em 18 de abril de 1942, bombardeiros americanos lançados de um porta-aviões bombardearam Tóquio, o chamado Raid Doolittle. Pouco dano, mas muito susto: a ilha 'intocável' tinha sido alcançada. E em maio, na batalha do Mar de Coral, os dois lados trocaram golpes só com aviões, sem que os navios se vissem. Os japoneses saíram dali com um porta-aviões danificado e outro sem aviões suficientes, e os dois ficaram fora do que viria.",
        { h: "O caminho até Midway" },
        { timeline: [
          ["7 dez. 1941", "Ataque japonês a Pearl Harbor. Começa a guerra entre o Japão e os Estados Unidos."],
          ["18 abr. 1942", "O Raid Doolittle bombardeia Tóquio. Yamamoto passa a querer destruir os porta-aviões americanos o quanto antes."],
          ["4–8 mai. 1942", "Batalha do Mar de Coral. Dois porta-aviões japoneses ficam fora de Midway, e o americano Yorktown sai danificado."],
          ["3 jun. 1942", "Os japoneses começam o ataque às ilhas Aleutas, ao norte. Um avião americano avista a força de invasão de Midway."],
          ["4 jun. 1942", "O dia decisivo: os quatro porta-aviões de Nagumo são atacados."]
        ]},
        "O plano de Yamamoto era tomar o atol de Midway, a 1.300 milhas (cerca de 2.100 km) a noroeste do Havaí. Ele esperava que a frota americana corresse para retomá-lo, e então a destruiria. Era um plano complexo: a frota foi dividida em vários grupos, e os encouraçados de Yamamoto ficaram centenas de milhas atrás dos porta-aviões, longe demais para ajudá-los. Um ataque às Aleutas, ao norte, devia servir de distração.",
        "Mas os americanos sabiam do plano. Em Pearl Harbor, o grupo de criptoanalistas do comandante Joseph Rochefort, a Estação HYPO, já lia parte do código naval japonês. Para ter certeza de que 'AF' era Midway, mandaram avisar por um canal fácil de interceptar que a usina de água de Midway tinha quebrado. Pouco depois, os japoneses transmitiram que 'AF' estava com falta de água."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Chester Nimitz, comandante da Frota do Pacífico" },
        "Nimitz assumira a frota logo depois de Pearl Harbor, quando ela estava no seu pior momento. Tomou a decisão arriscada de confiar nos decifradores de Rochefort e de pôr em jogo os poucos porta-aviões que tinha. Ele calculou que os três porta-aviões, somados à base de Midway, davam equilíbrio aos quatro de Yamamoto, porque os grupos aéreos americanos eram maiores.",
        { h: "Frank Fletcher e Raymond Spruance" },
        "Fletcher comandava o Yorktown e o conjunto da força americana. Spruance comandava o Enterprise e o Hornet, no lugar do almirante Halsey, que ficou doente e não pôde ir. Era um almirante de cruzadores, e não de aviação, e mesmo assim tomou as duas decisões mais importantes do dia: lançar os aviões de longe, sem esperar a formação, e, à noite, não correr atrás da frota japonesa para dentro de uma possível armadilha.",
        { h: "Isoroku Yamamoto" },
        "Era o autor do plano de Pearl Harbor, e sabia que o Japão não podia vencer uma guerra longa contra os Estados Unidos. Por isso queria uma batalha decisiva, cedo. Seu plano tinha muitas peças, e todas precisavam funcionar.",
        { h: "Chuichi Nagumo e Tamon Yamaguchi" },
        "Nagumo comandava a força de porta-aviões, a mesma de Pearl Harbor. Naquela manhã, ficou entre as ordens de Yamamoto, os pedidos de seus pilotos e as notícias que chegavam atrasadas. O contra-almirante Yamaguchi, chefe da divisão do Hiryu, queria lançar um ataque imediato contra os americanos, com o que tivesse. Nagumo preferiu esperar. Yamaguchi morreu com o seu navio no dia seguinte."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A força de porta-aviões japonesa tinha quatro porta-aviões (Akagi, Kaga, Soryu e Hiryu), com 248 aviões, mais dois encouraçados, cruzadores e destróieres. Os americanos tinham três porta-aviões (Enterprise, Hornet e Yorktown), cerca de 230 aviões embarcados, e mais de 120 aviões baseados em Midway, entre caças, bombardeiros e hidroaviões.",
        { note: "O número de aviões muda de fonte para fonte. Usamos os da Wikipédia em inglês, que traz 233 aviões embarcados e 127 baseados em terra para os americanos. No dia 4 de junho, a base de Midway tinha 122." },
        { h: "O terreno" },
        "Nenhum. Era mar aberto, ao norte e ao noroeste do atol de Midway, que tem duas ilhotas planas, Sand e Eastern, com uma pista de pouso. Quem achasse o inimigo primeiro ganhava a chance de atacar primeiro, e por isso os aviões de busca e a informação contaram tanto quanto as armas.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na manhã de 3 de junho, um hidroavião americano avistou a força de invasão japonesa, a oeste de Midway. Na madrugada de 4 de junho, às 4h30, Nagumo lançou 108 aviões contra a ilha e mandou mais sete a procurar navios. Às 5h34, um hidroavião americano avistou dois porta-aviões japoneses. O radar de Midway detectou o ataque a 93 milhas náuticas (cerca de 170 km).",
        "Segundo, os caças dos fuzileiros navais em Midway decolaram para interceptar e foram muito castigados: em minutos, só dois estavam em condições de voar. A base foi bombardeada e muito danificada. O chefe do ataque japonês avisou Nagumo que, se quisesse desembarcar tropas até 7 de junho, seria preciso um segundo ataque.",
        "Terceiro, aviões de Midway, que incluíam seis torpedeiros Avenger, quatro bombardeiros B-26, bombardeiros de mergulho e B-17, atacaram os porta-aviões japoneses de forma desencontrada. Não acertaram nada, e muitos foram abatidos, mas mantiveram os caças japoneses ocupados. Às 7h15, Nagumo mandou trocar os torpedos dos aviões que guardava de reserva por bombas para atacar a ilha. Às 7h40, um avião de busca avisou que havia navios americanos a leste. Nagumo mandou reverter a troca, o que deixou o convés cheio de aviões, bombas e combustível. À 8h20, chegou a notícia de que havia um porta-aviões entre eles.",
        "Quarto, os americanos já estavam a caminho. Spruance mandou lançar os aviões do Enterprise e do Hornet logo depois das 7h, a uma distância que considerava extrema, sem esperar que se reunissem. Os do Hornet seguiram o rumo errado, e os caças que os escoltavam ficaram sem combustível. O esquadrão de torpedeiros do Hornet, o VT-8, do tenente-comandante John Waldron, se separou e achou os japoneses sozinho, sem caças. Por volta das 9h20, os 15 aviões foram abatidos, sem acertar nenhum torpedo. Só o alferes George Gay sobreviveu, dos 30 tripulantes. Depois vieram os torpedeiros do Enterprise (que perderam 9 de 14) e do Yorktown (10 de 12), todos sem resultado.",
        "Quinto, e decisivo. Os torpedeiros morreram, mas a [[patrulha aérea de combate]] japonesa desceu para o nível do mar, atrás deles. Nesse momento, os [[bombardeiros de mergulho|bombardeiro de mergulho]] do Enterprise, do comandante Wade McClusky, chegaram do alto. Ele tinha continuado a procura quando a frota japonesa não estava onde esperado e a achou ao ver o destróier Arashi. Às 10h22, os dois esquadrões do Enterprise foram, por um mal-entendido, para o Kaga, enquanto o tenente Richard Best, com alguns aviões, mergulhou no Akagi. O Soryu foi atingido pelos bombardeiros do Yorktown. Os convés estavam cheios de aviões armados e combustível, e em minutos os três porta-aviões estavam em chamas. Nagumo passou para o cruzador Nagara às 10h46.",
        "Sexto, o Hiryu, que estava mais afastado e escapou, lançou dois ataques contra o Yorktown. O primeiro, com 18 bombardeiros de mergulho e 6 caças, acertou três bombas. O segundo, com 10 torpedeiros e 6 caças, acertou dois torpedos. O Yorktown ficou muito danificado.",
        "Sétimo, no fim da tarde, o Enterprise lançou 24 bombardeiros de mergulho. Quatro ou cinco bombas acertaram o Hiryu, que foi abandonado e afundou na manhã seguinte, com o seu comandante e o contra-almirante Yamaguchi a bordo.",
        "Oitavo, Spruance, ao cair da noite, assumiu o comando operacional e se afastou para o leste, em parte por causa de um relato vago de um submarino sobre 'quatro navios grandes'. Yamamoto cancelou a invasão. Em 6 de junho, aviões americanos afundaram o cruzador Mikuma, que tinha batido no Mogami durante a retirada. No mesmo dia, o submarino japonês I-168 torpedeou o Yorktown e o destróier Hammann. O Hammann afundou, e o Yorktown virou e afundou às 7h01 de 7 de junho."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O Japão perdeu os quatro porta-aviões (Akagi, Kaga, Soryu e Hiryu), o cruzador Mikuma e 248 aviões. Morreram 3.057 japoneses, dos quais 2.181 nos porta-aviões. Os americanos perderam o Yorktown, o destróier Hammann, cerca de 150 aviões e 307 homens, entre eles o major-general Clarence Tinker, que morreu num acidente de avião.",
        "O número que mais pesou foi o dos pilotos: Parshall e Tully estimam que os japoneses perderam 110 aviadores veteranos, cerca de um quarto dos que estavam nos porta-aviões. O Japão perdeu quatro dos seis grandes porta-aviões que tinha em 1941, e não conseguiu substituí-los tão depressa quanto os Estados Unidos.",
        { h: "Por que importa" },
        "Midway acabou com a iniciativa japonesa no Pacífico. Dois meses depois, os americanos desembarcaram em Guadalcanal, e foi o Japão que passou a reagir. Para a opinião pública japonesa, a batalha foi uma grande vitória: só o imperador e a cúpula da marinha souberam das perdas verdadeiras.",
        "Também mostrou a importância da informação. Os americanos venceram em grande parte porque sabiam onde os japoneses estariam e quando, e porque o plano de Yamamoto, cheio de peças dispersas, dependia de segredo.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os destroços: o Yorktown foi achado em 1998, a mais de 5.000 metros de profundidade. Os do Kaga e do Akagi foram achados em outubro de 2019, em profundidade parecida." },
        { note: "A versão clássica: a história dos 'cinco minutos', em que os aviões americanos chegaram quando os japoneses estavam prestes a decolar, vem em grande parte do relato de Mitsuo Fuchida, que estava a bordo do Akagi. Os historiadores Jonathan Parshall e Anthony Tully, em 'Shattered Sword', usaram fontes japonesas para contestá-lo, e o debate sobre as escolhas de Nagumo continua." },
        { note: "O nome do campo de pouso de Guadalcanal, Henderson Field, homenageia o major Lofton Henderson, comandante do esquadrão de bombardeiros dos fuzileiros navais morto em Midway." }
      ]}
    ]
  },

  stalingrado: {
    war: "Frente oriental da Segunda Guerra Mundial (1941–1945)",
    hook: "Uma cidade com o nome de Stálin virou a ratoeira que prendeu um exército alemão inteiro.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1941, a Alemanha invadiu a União Soviética e chegou perto de Moscou, mas não a tomou. Em 1942, Hitler preferiu um golpe mais ao sul. A ofensiva de verão, a Operação Azul, queria os campos de petróleo do Cáucaso e o rio Volga, por onde o petróleo e muita coisa subia para o norte da União Soviética. Hitler dividiu o grupo de exércitos em dois: o Grupo A foi para o Cáucaso, e o Grupo B, com o 6º Exército, de Friedrich Paulus, foi para o Volga.",
        "Stalingrado era uma cidade industrial comprida e estreita na margem oeste do Volga, com fábricas de tratores e de aço. Tinha esse nome desde 1925, em honra a Stálin, e isso a tornava, aos olhos dos dois ditadores, um prêmio político muito maior do que o seu valor militar.",
        { h: "O caminho até Stalingrado" },
        { timeline: [
          ["17 jul. 1942", "Primeiro choque entre tropas alemãs e soviéticas nas aproximações da cidade."],
          ["27 jul. 1942", "Ordem 227, de Stálin, ameaça com tribunal quem recuar sem ordem. É o 'Nem um passo atrás'."],
          ["23 ago. 1942", "A Luftwaffe bombardeia a cidade, e o 6º Exército ataca."],
          ["Meados de set. 1942", "O general Tchuikov assume o 62º Exército, que defende a cidade."],
          ["19 nov. 1942", "A Operação Urano cai sobre os flancos romenos."],
          ["23 nov. 1942", "O cerco se fecha em volta do 6º Exército."],
          ["2 fev. 1943", "Os últimos alemães em Stalingrado se rendem."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Friedrich Paulus, comandante do 6º Exército" },
        "Oficial de estado-maior, mais conhecido pelo planejamento do que pelo comando de tropas. Obedeceu a Hitler até o fim. Em 30 de janeiro de 1943, Hitler o promoveu a marechal, o que muitos interpretaram como um convite ao suicídio, já que nenhum marechal alemão jamais se rendera. Paulus se rendeu no dia seguinte.",
        { h: "Vasily Tchuikov, comandante do 62º Exército" },
        "Assumiu a defesa da cidade em setembro de 1942. Disse que a cidade seria defendida ou ele morreria tentando. Sua tática era 'abraçar' o inimigo: manter as linhas tão próximas das alemãs que a artilharia e os aviões da Luftwaffe não podiam atirar sem acertar os próprios soldados.",
        { h: "Zhukov e Vasilevsky" },
        "Os dois prepararam, para a [[Stavka|stavka]], a contraofensiva que cercou os alemães. Zhukov chegou a adiar o início em dois dias porque a aviação não estava pronta. Em 17 de novembro, Vasilevsky quis cancelar a operação por causa de um pedido de adiamento de um comandante de corpo. Os demais comandantes o contrariaram.",
        { h: "Hitler e Manstein" },
        "Hitler proibiu o rompimento do cerco, e o bolsão ficou preso. O marechal Erich von Manstein, no comando do Grupo Don, tentou salvar o 6º Exército em dezembro, e fracassou."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam. No início da ofensiva, os alemães e aliados tinham, segundo as fontes, de 187.000 a 270.000 homens, cerca de 2.200 a 3.000 canhões e 400 a 500 tanques. Na contraofensiva, os soviéticos juntaram entre 1 milhão e 1,14 milhão de homens, de 640 a 894 tanques e mais de 13.000 canhões. Só a Operação Urano usou cerca de 1,1 milhão de homens, 804 tanques e 13.400 canhões, segundo a Wikipédia.",
        "Ao norte e ao sul do 6º Exército, a linha era segurada pelos exércitos da Romênia, e não por alemães. O 3º Exército romeno cobria cerca de 140 km, e o 4º, cerca de 270 km. Eles tinham poucos canhões antitanque, e os de 37 mm eram velhos e estavam sem munição. A Alemanha mandou apenas seis canhões de 75 mm por divisão.",
        { h: "O terreno" },
        "A cidade se estendia por dezenas de quilômetros pela margem oeste do Volga, com a colina de Mamaev Kurgan no meio, grandes fábricas e um elevador de grãos. Atrás dos soviéticos ficava o rio, sem pontes: reforços e munição atravessavam de barco, sob fogo. Ao redor, a estepe aberta, onde um golpe de blindados podia correr por centenas de quilômetros.",
        { h: "A batalha em nove movimentos" },
        { formation: true },
        "Primeiro, a luta na cidade. Em 23 de agosto, a Luftwaffe bombardeou e reduziu boa parte dela a ruínas. Os alemães entraram, e a batalha virou combate de rua: casa a casa, andar a andar, o que os soldados alemães chamavam de 'guerra dos ratos'. A Casa de Pavlov, um prédio de apartamentos, foi defendida por um pelotão por cerca de dois meses. No elevador de grãos, cerca de cinquenta homens aguentaram cinco dias. O franco-atirador Vasily Zaitsev foi creditado com 225 mortes. No meio de novembro, os alemães tinham empurrado os soviéticos para faixas estreitas junto ao rio.",
        "Segundo, em 19 de novembro, às 7h20, começou a Operação Urano. Do norte, o 5º Exército de Tanques, com o 21º e o 65º Exércitos, atacou o 3º Exército romeno, que não aguentou.",
        "Terceiro, em 20 de novembro, a Frente de Stalingrado atacou pelo sul, com o 51º e o 57º Exércitos, sobre o flanco defendido pelos romenos. Os dois ataques corriam em direção a Kalach, a oeste da cidade, onde havia uma ponte sobre o Don.",
        "Quarto, em 22 de novembro, os soviéticos atravessaram o Don em Kalach, e em 23 de novembro, perto de Sovetsky, às 16h, os dois grupos se encontraram. O 6º Exército e parte do 4º Exército Panzer estavam cercados num [[bolsão]]: de 250.000 a 300.000 homens, com cerca de 100 tanques, 2.000 canhões e morteiros e 10.000 caminhões. Foi um [[cerco duplo]].",
        "Quinto, Hitler proibiu o rompimento. Entre 23 e 24 de novembro, ordenou uma defesa em todas as direções, a 'Fortaleza Stalingrado', e prometeu abastecer o bolsão pelo ar. Era preciso entre 680 e 750 toneladas por dia. A [[ponte aérea]] entregou, em média, 105. No começo de dezembro, o 6º Exército recebia menos de um quinto do que precisava.",
        "Sexto, em dezembro, Manstein tentou romper o cerco por fora, com a Operação Tempestade de Inverno, e chegou, em 18 de dezembro, a 48 km do bolsão. Paulus não foi ao encontro dele: tinha pouco combustível, e a ordem de Hitler era ficar.",
        "Sétimo, em 16 de dezembro, a Operação Pequeno Saturno atacou outro setor do front, mais a oeste, e forçou os alemães a abandonar a tentativa de socorro em 23 de dezembro. No dia seguinte, os soviéticos tomaram o aeroporto de Tatsinskaya, de onde saíam os aviões de transporte.",
        "Oitavo, em 10 de janeiro de 1943, a Operação Anel começou com cerca de 7.000 canhões e morteiros atirando. O aeroporto de Pitomnik caiu em 16 de janeiro, e o de Gumrak, na noite de 21 para 22. Mais tarde, o bolsão ficou cortado em dois.",
        "Nono, em 31 de janeiro, o bolsão do sul caiu, com Paulus. O do norte, comandado pelo general Strecker, se rendeu em 2 de fevereiro. Quase 91.000 homens, entre eles 22 generais, foram capturados."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O 6º Exército deixou de existir. Foi a primeira vez que um exército de campanha de Hitler se rendeu. O governo alemão só admitiu a derrota no fim de janeiro, e Goebbels, em 18 de fevereiro, fez no Palácio de Esportes de Berlim o discurso da 'guerra total'.",
        "As perdas são muito discutidas. As baixas do Eixo (mortos, feridos e prisioneiros) ficam entre 800.000 e 1,5 milhão, segundo as fontes, entre alemães, italianos, romenos, húngaros e voluntários russos. As soviéticas são de 1.129.619 nos arquivos (478.741 mortos ou desaparecidos) e de 1.347.214 em números revistos. No total, cerca de 235.000 alemães e aliados foram capturados durante toda a batalha. Dos cerca de 91.000 do fim, 35.000 foram enviados em transportes e 17.000 deles não sobreviveram. Só entre 5.000 e 6.000 voltaram para casa, em 1955.",
        { h: "Por que importa" },
        "A Alemanha perdeu a iniciativa na frente oriental e nunca mais conseguiu fazer uma grande ofensiva de verão na União Soviética. É a batalha que a maioria dos historiadores considera a virada da guerra na Europa. Para os soviéticos, a confiança mudou: Stálin foi feito marechal, e a cidade recebeu o título de Cidade Heroica em 1945.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números de Stalingrado variam muito por fonte e por critério: o que conta como 'baixa', onde a batalha começa e termina, quem entra na conta. As faixas acima são dos arquivos e de historiadores citados pela Wikipédia, e nenhuma é definitiva." },
        { note: "A ordem 227 e os [[destacamentos de bloqueio|destacamentos de bloqueio]]: os destacamentos das frentes de Stalingrado e do Don deteram 51.758 homens, e 980 foram executados. No 62º Exército, houve 203 prisões e 49 execuções. O historiador Antony Beevor falou em 13.500 fuzilados no total, número contestado. Os historiadores discutem também se o que sustentou os soldados foi a coerção ou o patriotismo." },
        { note: "Hoje a cidade se chama Volgogrado. Em Mamaev Kurgan fica o monumento 'A Pátria-Mãe Chama', inaugurado em 1967. Todo ano ainda são encontrados e enterrados os corpos de centenas de soldados." }
      ]}
    ]
  },

  elalamein: {
    war: "Campanha do Deserto Ocidental, Segunda Guerra Mundial (1940–1943)",
    hook: "Doze dias de desgaste num corredor de areia e minas, entre o mar e o nada.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1942, a guerra no deserto da Líbia e do Egito já tinha ido e voltado várias vezes pelo mesmo caminho. Quem tinha mais abastecimento avançava, e quem avançava demais ficava sem combustível e recuava. Em julho, Erwin Rommel chegou a cerca de 100 km de Alexandria, ameaçando o Canal de Suez e o petróleo do Oriente Médio. O general Claude Auchinleck o parou na Primeira Batalha de El Alamein. Em 30 de agosto, na batalha de Alam el Halfa, Rommel tentou de novo e não passou.",
        "Churchill queria uma vitória, e queria um general novo. Auchinleck foi substituído por Harold Alexander no comando do Oriente Médio. O general William Gott, escolhido para comandar o 8º Exército, morreu quando seu avião foi abatido, e foi Bernard Montgomery quem chegou, em agosto, para o lugar dele.",
        { h: "O caminho até El Alamein" },
        { timeline: [
          ["Jul. 1942", "Primeira Batalha de El Alamein: Auchinleck para o avanço de Rommel."],
          ["30 ago. 1942", "Batalha de Alam el Halfa: o último avanço de Rommel é contido."],
          ["23 set. 1942", "Rommel sai de licença por doença. Georg Stumme assume."],
          ["23 out. 1942", "Às 21h40, 882 canhões abrem a Segunda Batalha de El Alamein."],
          ["4 nov. 1942", "Os britânicos rompem a linha. Rommel ordena a retirada."],
          ["8 nov. 1942", "Desembarque anglo-americano no Marrocos e na Argélia (Operação Tocha)."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Bernard Montgomery, comandante do 8º Exército" },
        "Chegou em agosto de 1942 e fez questão de planejar tudo com calma. Reuniu, antes de lutar, tanques novos, canhões antitanque melhores e uma força aérea que dominava o céu. Esperava uma batalha de 12 dias, em três fases: abertura, luta de desgaste e golpe final. Foi aproximadamente o que aconteceu.",
        { h: "Erwin Rommel, a 'Raposa do Deserto'" },
        "O mais famoso general alemão no deserto. Estava doente e fora do campo quando a batalha começou: voltou em 25 de outubro, um dia depois da morte do substituto, Georg Stumme, de um ataque do coração. Sabia que não tinha combustível para manobrar, e planejou uma defesa de campos de minas, no lugar de um golpe de mobilidade.",
        { h: "Os outros nomes" },
        "Alexander era o chefe de Montgomery, no comando do Oriente Médio. Wilhelm von Thoma, que assumiu quando Stumme morreu, comandava o Afrika Korps. Hitler, de longe, mandou Rommel não ceder nem um metro de terreno."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os aliados tinham cerca de 195.000 homens, 1.029 tanques, 892 a 908 canhões e 1.451 canhões antitanque, com 730 a 750 aviões. O Eixo tinha cerca de 116.000 homens, 547 tanques, 552 canhões e de 770 a 900 aviões. A vantagem aliada era também de qualidade: tanques Sherman, canhões antitanque de 6 libras e caças Spitfire.",
        { h: "O terreno" },
        "A linha de El Alamein ficava entre o Mediterrâneo, ao norte, e a depressão de Qattara, de areia mole, que os tanques não atravessavam, ao sul, numa frente de cerca de 60 km. Não dava para dar a volta: era preciso furar. Rommel encheu a frente de [[campos minados|campo minado]], cerca de meio milhão de minas, em faixas e nos chamados 'jardins do diabo'. E dividiu seus blindados em dois grupos, norte e sul, por falta de combustível para movê-los depressa.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, o engano. Na Operação Bertram, os britânicos usaram tanques e canhões de mentira, depósitos falsos e um oleoduto de mentira para sugerir um ataque mais ao sul, dois dias depois da data real. Os suprimentos de verdade eram levados para a frente à noite.",
        "Segundo, em 23 de outubro, às 21h40, 882 canhões de campanha e médios dispararam cerca de 529.000 tiros em cinco horas e meia. A infantaria do XXX Corpo avançou nos campos de minas para abrir dois corredores. No sul, o XIII Corpo fez ataques de [[diversão]].",
        "Terceiro, os tanques do X Corpo deveriam passar pelos corredores, mas ficaram presos na poeira e nos engarrafamentos. Os engenheiros não conseguiram limpar o caminho planejado. A crista de Miteirya foi tomada às 8h de 24 de outubro, mas nenhum tanque passou. No fim da tarde, mais de 100 tanques se enfrentaram perto de Kidney, e metade foi destruída antes do escuro. Stumme morreu naquele dia, e Rommel voltou na noite de 25.",
        "Quarto, de 26 a 28 de outubro, a aviação aliada afundou os petroleiros que levavam combustível ao Eixo em Tobruk (Proserpina e Tergestea no dia 26, Luisiano no dia 28). Em 27 de outubro, no posto de Snipe, o Rifle Brigade destruiu 22 tanques alemães e 10 italianos. Em 28 de outubro, a última grande tentativa de Rommel de tomar a iniciativa fracassou, e ele avisou que, sem combustível, o exército não conseguia se retirar.",
        "Quinto, a Operação Supercharge começou na madrugada de 2 de novembro, perto de Tel el Aqqaqir, depois de sete horas de bombardeio aéreo e de uma barragem de 360 canhões, com 15.000 tiros. A 9ª Brigada Blindada partiu com 132 tanques e chegou à linha de partida com 94. Em meia hora, só 24 estavam em condições de lutar. Dos cerca de 400 homens do ataque, 230 foram mortos, feridos ou capturados. Foi o golpe que preparou a brecha do dia 4.",
        "Sexto, em 2 de novembro, Thoma avisou que teria no máximo 35 tanques no dia seguinte, e Rommel decidiu recuar para Fuka. Em 3 de novembro, Hitler respondeu que o exército devia ficar e 'não ceder nem um metro'. Rommel disse que a ordem exigia o impossível.",
        "Sétimo, em 4 de novembro, os britânicos abriram uma brecha de cerca de 19 km. Às 17h30, Rommel ordenou a retirada sem esperar resposta de Hitler. Por falta de caminhões, a infantaria italiana foi em grande parte deixada para trás, e as divisões Ariete, Littorio e Trieste foram destruídas.",
        "Oitavo, o 8º Exército perseguiu devagar e não conseguiu cortar Rommel em Fuka nem em Mersa Matruh. A 7ª Divisão Blindada terminou os dias 4 e 5 a cerca de 30 km do seu objetivo. Em 11 de novembro, os neozelandeses tomaram o desfiladeiro de Halfaya e 600 prisioneiros italianos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam 13.560 homens: 2.350 mortos, 8.950 feridos e 2.260 desaparecidos. Dessas baixas, 58% eram britânicos, 22% australianos, 10% neozelandeses e 6% sul-africanos. Perderam de 332 a 500 tanques, mas cerca de 300 foram consertados. As perdas do Eixo variam muito entre as fontes: de 41.800 a 73.000 homens, contando mortos, feridos e prisioneiros, e cerca de 500 tanques. Em 4 de novembro, restavam 36 dos 249 tanques alemães do início.",
        { h: "Por que importa" },
        "Acabou a ameaça ao Egito, ao Canal de Suez e ao Oriente Médio. Poucos dias depois, em 8 de novembro, o desembarque anglo-americano no Marrocos e na Argélia abriu uma segunda frente no norte da África. Rommel recuou pela Líbia, e as forças do Eixo na África se renderam em maio de 1943.",
        "Foi o primeiro grande sucesso aliado desde a Operação Crusader, no fim de 1941. Para o moral britânico, importou muito: Alexander sugeriu a Churchill que mandasse tocar os sinos das igrejas.",
        { h: "Curiosidades e controvérsias" },
        { note: "As frases de Churchill: em 10 de novembro de 1942, ele disse que aquilo talvez fosse 'o fim do começo'. A frase 'Antes de Alamein, nunca tivemos uma vitória. Depois de Alamein, nunca tivemos uma derrota' vem das memórias dele, publicadas em 1950, e não do calor da hora." },
        { note: "O Ultra: os britânicos liam as mensagens do Eixo e sabiam a ordem de batalha, a situação de abastecimento e as intenções de Rommel. Em 25 de outubro, o Exército Panzer tinha combustível para cerca de três dias." },
        { note: "A perseguição: Montgomery é criticado por ter sido lento depois da vitória, deixando Rommel escapar. Os historiadores também discutem por que Rommel tinha chegado tão longe: Martin van Creveld enfatiza os limites de abastecimento, e Remy enfatiza a pressão de Hitler e Mussolini." }
      ]}
    ]
  },

  guadalcanal: {
    war: "Guerra do Pacífico (1941–1945)",
    hook: "Por uma pista de pouso na selva, americanos e japoneses lutaram seis meses em terra, no mar e no ar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Midway, os americanos quiseram passar à ofensiva. O alvo não era grande: Guadalcanal, uma ilha de selva e de chuva nas Ilhas Salomão, perto de onde os japoneses estavam construindo uma pista de pouso em Lunga Point. De lá, aviões japoneses ameaçariam as rotas de navios entre os Estados Unidos e a Austrália.",
        "Era um terreno que nenhum dos lados conhecia bem, e os dois entraram na luta apressados. Os americanos chamaram a operação de Watchtower (torre de vigia). Era a primeira grande ofensiva dos aliados em terra contra o Japão, num [[desembarque anfíbio]].",
        { h: "O caminho até Guadalcanal" },
        { timeline: [
          ["Jul. 1942", "Os japoneses constroem a pista de Lunga Point. Havia cerca de 2.800 pessoas na ilha, entre elas 2.200 trabalhadores coreanos."],
          ["7 ago. 1942", "Cerca de 11.000 fuzileiros navais desembarcam em Guadalcanal e tomam Tulagi e as ilhas vizinhas."],
          ["8–9 ago. 1942", "Batalha de Savo: cruzadores japoneses afundam quatro cruzadores aliados."],
          ["21 ago. 1942", "Batalha de Tenaru: o regimento de Ichiki é destruído."],
          ["12–14 set. 1942", "Batalha da Crista de Edson."],
          ["12–15 nov. 1942", "Batalha Naval de Guadalcanal."],
          ["1–7 fev. 1943", "Os japoneses evacuam a ilha. A Operação Ke tira 10.652 homens."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Alexander Vandegrift" },
        "Comandava a 1ª Divisão de Fuzileiros Navais, a tropa dos desembarques. Tinha pouca coisa: cerca de 11.000 homens na ilha no começo, depois que os navios foram embora com parte dos suprimentos. Segurou a área em volta da pista, que ganhou o nome de Henderson Field. Foi substituído pelo general Alexander Patch em 9 de dezembro de 1942.",
        { h: "Robert Ghormley e William Halsey" },
        "Ghormley comandou a campanha no Pacífico Sul até 18 de outubro de 1942, quando Halsey o substituiu.",
        { h: "Harukichi Hyakutake e Isoroku Yamamoto" },
        "Hyakutake comandava o 17º Exército, que tentou retomar a ilha em ataques sucessivos, todos repelidos. Yamamoto comandava a frota, que tentou várias vezes destruir a americana e acabou perdendo muitos navios.",
        { h: "Os dois lados na ilha" },
        "Os [[fuzileiros navais]] defenderam a pista. Do outro lado, os soldados japoneses chegavam à noite, em navios rápidos, e a comida e a munição que traziam nunca eram suficientes."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "No total, os japoneses mandaram cerca de 31.400 soldados do exército e 4.800 da marinha. Os aliados, sobretudo americanos, tinham cerca de 11.000 homens no começo e passaram de 50.000 em janeiro de 1943. As tropas de ambos os lados não estavam todas ao mesmo tempo na ilha.",
        { h: "O terreno" },
        "Selva densa, calor, chuva, malária e rios cheios de lama. A pista de Lunga Point era o centro de tudo: quem a controlasse comandava o céu da região. Os navios, no mar em volta, lutavam de noite. O canal entre Guadalcanal e as ilhas vizinhas ficou tão cheio de naufrágios que os americanos o chamam de 'Ironbottom Sound', o 'Estreito do Fundo de Ferro'.",
        { h: "A campanha em seis momentos" },
        "Primeiro, em 7 de agosto, os fuzileiros desembarcaram de surpresa. Tulagi caiu em 8 de agosto e as ilhotas Gavutu e Tanambogo, até o dia 9. Em Guadalcanal, a pista foi tomada às 16h do dia 8, e em 18 de agosto estava pronta para operar. Em 12 de agosto, ganhou o nome de Henderson Field.",
        "Segundo, na noite de 8 para 9 de agosto, na batalha de Savo, os cruzadores do almirante Gunichi Mikawa surpreenderam a frota aliada e afundaram um cruzador australiano e três americanos. O almirante Turner retirou os navios aliados, deixando os fuzileiros com menos suprimentos e equipamento do que deviam ter.",
        "Terceiro, os japoneses tentaram retomar a pista aos poucos. Em 21 de agosto, no rio Tenaru (Alligator Creek), o primeiro grupo do regimento de Ichiki, com 917 homens, atacou e foi destruído: 789 morreram. Em 12 a 14 de setembro, o general Kawaguchi atacou a crista que dá acesso à pista e perdeu cerca de 850 homens, contra 104 dos fuzileiros.",
        "Quarto, a luta no ar e no mar. Na noite de 14 de outubro, dois encouraçados japoneses dispararam 973 granadas de 14 polegadas contra a pista e destruíram 48 dos 90 aviões da Cactus Air Force, a aviação que defendia a base. Os soldados chamaram a noite de 'The Night'. Em 23 a 26 de outubro, a 2ª Divisão de Maruyama atacou pelo sul e perdeu entre 2.200 e 3.000 homens, contra cerca de 80 mortos americanos. Em 26 de outubro, na batalha de Santa Cruz, o porta-aviões Hornet foi afundado.",
        "Quinto, em 12 a 15 de novembro, a Batalha Naval de Guadalcanal. Os contra-almirantes Callaghan e Scott, americanos, morreram. O encouraçado Hiei foi afundado depois de ataques aéreos, e o Kirishima foi muito danificado pelo encouraçado americano Washington. Os transportes japoneses foram encalhados e destruídos, e só de 2.000 a 3.000 soldados chegaram em terra. Em 30 de novembro, em Tassafaronga, torpedos japoneses afundaram um cruzador americano e danificaram três.",
        "Sexto, os japoneses cederam. A Marinha propôs abandonar a ilha em 12 de dezembro, o comando imperial concordou em 26, e o imperador aprovou em 31 de dezembro. Nessa altura, restavam menos de 15.000 japoneses na ilha, cada vez mais fracos. Na Operação Ke, de 1 a 7 de fevereiro de 1943, destróieres tiraram 10.652 homens. Patch declarou a ilha segura em 9 de fevereiro."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam cerca de 7.100 homens, 29 navios (entre eles 2 porta-aviões, 6 cruzadores pesados, 2 cruzadores leves e 17 destróieres) e 615 aviões. O Japão perdeu cerca de 19.200 soldados do exército, dos quais cerca de 8.500 em combate, e o resto de fome e doença, além de 38 navios e 683 aviões. Houve sete grandes batalhas navais em volta da ilha.",
        { h: "Por que importa" },
        "A campanha marcou a passagem dos aliados da defesa ao ataque e deu a eles a iniciativa no Pacífico. O Japão perdeu navios e aviões que não conseguia substituir com a mesma rapidez, e também perdeu pilotos experientes (cerca de 150 pilotos veteranos de porta-aviões só em Santa Cruz).",
        "Também mostrou o custo da selva: o Japão perdeu mais homens de doença e de fome do que em combate.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números de tropas variam. A Wikipédia lista cerca de 60.000 para o lado aliado e 36.200 para o japonês. O total de mortos japoneses também varia: fala-se em 19.200 do exército e, em outra conta, em cerca de 30.000 contando a marinha, dos quais cerca de três quartos por causas fora do combate." },
        { note: "Os comboios noturnos de destróieres japoneses ficaram conhecidos pelos americanos como [[Tokyo Express|tokyo express]]. Equipamento pesado, a maior parte da comida e da munição não podiam ser levados dessa maneira, o que ajuda a explicar a fome." },
        { note: "A pista recebeu o nome de Henderson Field em 12 de agosto, em homenagem ao major Lofton Henderson, aviador dos fuzileiros navais morto na batalha de Midway." }
      ]}
    ]
  },

  singapura: {
    war: "Campanha da Malásia e de Singapura (1941–1942)",
    hook: "Uma fortaleza feita para enfrentar navios caiu diante de soldados que chegaram a pé e de bicicleta.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Singapura era a principal base militar britânica na Ásia, na ponta sul da península da Malásia. Entre as décadas de 1920 e 1930, os britânicos construíram ali uma grande base naval em Sembawang, uma doca seca enorme, aberta em 1938, e canhões de costa, entre eles cinco canhões de 15 polegadas. Por causa disso, a cidade ganhou o apelido de 'Gibraltar do Oriente'.",
        "O plano tinha um ponto fraco: contava com uma frota que viria da Europa. O tempo de viagem foi estimado em 42 dias em 1919 e em 180 dias em 1939. Em 1940, com a guerra na Europa, os chefes militares disseram que não havia frota disponível para o Extremo Oriente. Também se achava que a selva era quase impossível de atravessar. Um exercício do general Dobbie, no sul da Malásia, mostrou que era 'longe de intransponível'.",
        { h: "O caminho até Singapura" },
        { timeline: [
          ["8 dez. 1941", "Os japoneses desembarcam em Kota Bharu, na Malásia, e começa a campanha."],
          ["10 dez. 1941", "A [[Força Z|força z]], com os navios Prince of Wales e Repulse, é afundada por aviões japoneses."],
          ["Dez. 1941–jan. 1942", "Os japoneses descem a península, com infantaria de bicicleta e tanques leves, contornando as linhas britânicas várias vezes."],
          ["31 jan. 1942", "Os britânicos explodem a estrada que liga a ilha ao continente."],
          ["8 fev. 1942", "À noite, os japoneses atravessam o estreito de Johor."],
          ["15 fev. 1942", "Percival se rende."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Tomoyuki Yamashita, comandante do 25º Exército" },
        "Comandou a campanha da Malásia e ficou famoso como o 'Tigre da Malásia'. Chegou a Singapura com tropas cansadas, com pouca munição e menos homens do que os britânicos, e sabia disso. Depois da guerra, disse que o ataque foi um blefe, e que temia que os britânicos descobrissem sua fraqueza numérica e de suprimentos.",
        { h: "Arthur Percival, comandante britânico na Malásia" },
        "Chefiava cerca de 85.000 homens, mas muitos eram novos, mal treinados ou mal equipados. Esperava o ataque principal no nordeste e espalhou as tropas pela costa, o que deixou cada setor fraco. Quando as ordens de Wavell e de Churchill chegaram, não lhe deixavam espaço para negociar.",
        { h: "Wavell, Churchill e Gordon Bennett" },
        "O general Wavell era o comandante aliado da região. Em 10 de fevereiro, Churchill telegrafou a Wavell que 'não deve haver, nesta fase, nenhum pensamento de salvar as tropas ou poupar a população', e que 'comandantes e oficiais superiores devem morrer com suas tropas'. O general australiano Gordon Bennett, comandante da 8ª Divisão, deixou a ilha de barco depois de passar o comando, e isso virou uma polêmica."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os britânicos e aliados (britânicos, indianos, australianos e tropas locais) tinham cerca de 85.000 homens em Singapura. Os japoneses tinham entre 30.000 e 36.000, conforme a fonte. Os japoneses dominavam o ar: o último avião aliado saiu de Singapura em 9 ou 10 de fevereiro.",
        { h: "O terreno" },
        "Uma ilha de cerca de 40 km por 20 km, separada do continente pelo [[estreito de Johor|estreito de johor]], de um a dois quilômetros de largura. No meio dela ficava a colina de Bukit Timah, com os depósitos de comida e combustível, e os reservatórios de água que abasteciam a cidade. Ao sul, a cidade, com cerca de um milhão de civis, mais os refugiados do continente.",
        { note: "A ideia de que os canhões de Singapura só apontavam para o mar é um exagero. Três dos canhões de 15 polegadas giravam 360 graus e foram usados contra os japoneses no norte. O problema era a munição: eram supridos sobretudo de granadas perfurantes, feitas para navios, e tinham poucas granadas explosivas, mais úteis contra soldados." },
        { h: "A batalha em seis movimentos" },
        "Primeiro, antes da luta. Em 31 de janeiro, os britânicos explodiram a estrada sobre o estreito, o que atrasou os japoneses por mais de uma semana. Percival esperava o ataque no nordeste e espalhou as tropas pela costa.",
        "Segundo, em 8 de fevereiro, pouco antes das 20h30, as primeiras ondas da 5ª e da 18ª Divisões japonesas começaram a atravessar o estreito, no noroeste, não no nordeste. Cerca de 13.000 homens, em 16 batalhões de assalto, atacaram a 22ª Brigada australiana, que tinha cerca de 3.000. Cada divisão tinha 150 barcos. Naquela primeira noite desembarcaram 13.000 homens, e outros 10.000 depois do amanhecer. A artilharia japonesa disparou 88.000 granadas em quinze horas, a partir das 23h.",
        "Terceiro, a Linha de Jurong ruiu quando duas brigadas indianas se retiraram, por falta de comunicação e de ordens claras. Em 10 de fevereiro, Churchill mandou lutar até o fim.",
        "Quarto, em 11 de fevereiro, os japoneses tomaram a região de Bukit Timah, com os principais depósitos de comida e combustível. Yamashita escreveu a Percival pedindo que abandonasse 'essa resistência inútil e desesperada'. Os australianos da 22ª Brigada estavam reduzidos a algumas centenas.",
        "Quinto, em 12 e 13 de fevereiro, os britânicos recuaram para um perímetro de cerca de 45 km em volta da cidade. Os japoneses tomaram os reservatórios em 13 de fevereiro, mas não cortaram a água. O problema era que muita água se perdia em canos quebrados, e a população estava concentrada em cerca de 1% da ilha. Em 14 de fevereiro, soldados japoneses mataram funcionários e pacientes do Hospital Alexandra, e cerca de 200 homens foram baionetados depois de serem mantidos sem água.",
        "Sexto, em 15 de fevereiro, às 9h30, os comandantes britânicos concluíram que um contra-ataque era impossível. Percival se rendeu pouco depois das 17h15, na fábrica da Ford, onde Yamashita ditaria as condições. O fogo cessaria às 20h30, e os britânicos poderiam manter 1.000 homens armados para evitar saques."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Cerca de 80.000 a 85.000 soldados se renderam em Singapura, somando-se a cerca de 50.000 já capturados na Malásia: no total, cerca de 130.000 na campanha. As baixas aliadas em combate foram de cerca de 5.000 mortos ou feridos, a maioria australianos. As japonesas foram de cerca de 1.700 mortos e entre 2.800 e 3.400 feridos. Muitos prisioneiros morreram depois, de maus-tratos, doença e trabalho forçado.",
        "Os civis sofreram muito: entre 31.000 e 57.000 morreram durante a batalha e no massacre Sook Ching, que se seguiu e atingiu sobretudo a população de origem chinesa. Singapura foi renomeada Syonan-to e ficou sob ocupação japonesa até o fim da guerra.",
        { h: "Por que importa" },
        "Foi a maior rendição da história britânica, na expressão de Churchill, 'o pior desastre' militar do país. Junto com a perda de Hong Kong e o afundamento dos dois grandes navios, abalou muito o prestígio europeu na Ásia, e é visto como um dos fatores que levaram ao fim do domínio colonial britânico na região.",
        { h: "Curiosidades e controvérsias" },
        { note: "A culpa: Wavell, em seu relatório, culpou os australianos. Historiadores posteriores apontam deserções, o mau treino dos reforços e a própria estratégia de Singapura. Alguns também sustentam que um contra-ataque poderia ter dado certo." },
        { note: "O blefe: Yamashita disse depois que o ataque foi um blefe, que ele estava no limite do abastecimento e queria evitar combate casa a casa. É a versão dele, contada depois da guerra." },
        { note: "O número de tropas japonesas varia: a Wikipédia dá pouco mais de 30.000 no texto e 36.000 na ficha. Os números de civis mortos também variam muito, de 31.000 a 57.000." }
      ]}
    ]
  },

  kursk: {
    war: "Frente oriental da Segunda Guerra Mundial (1941–1945)",
    hook: "Os alemães atacaram uma armadilha que os soviéticos tinham passado meses preparando.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Stalingrado, o Exército Vermelho avançou durante o inverno de 1942 para 1943. Em fevereiro e março, o marechal Erich von Manstein respondeu com um contra-ataque, que retomou Kharkov e Belgorod e deixou, na linha de frente, um enorme [[saliente]] soviético em volta da cidade de Kursk, que entrava como uma cunha no território controlado pelos alemães.",
        "Os alemães viram nele uma chance: atacar de dois lados, norte e sul, e cortá-lo na base, prendendo as tropas soviéticas dentro. Foi a Operação Cidadela. Mas Hitler adiou várias vezes, à espera dos novos tanques [[Panther|panther]] e de mais [[Tiger|tiger]], e deu tempo aos soviéticos.",
        { h: "O caminho até Kursk" },
        { timeline: [
          ["Fev.–mar. 1943", "Contra-ataque de Manstein retoma Kharkov e Belgorod e deixa o saliente de Kursk."],
          ["15 abr. 1943", "Hitler autoriza os preparativos da Operação Cidadela."],
          ["6 mai. 1943", "O alto-comando do exército marca a data para 12 de junho. Depois, adia."],
          ["20 jun. 1943", "Hitler recusa abandonar a operação e fixa 5 de julho."],
          ["5 jul. 1943", "Começa a ofensiva alemã."],
          ["12 jul. 1943", "Choque de Prokhorovka. Hitler manda parar a Cidadela."],
          ["23 ago. 1943", "Os soviéticos retomam Kharkov."]
        ]},
        "Os soviéticos sabiam do plano: a inteligência britânica e a rede de espiões 'Lucy' os informaram. Zhukov defendia que a melhor resposta era esperar e desgastar os tanques alemães numa defesa preparada, antes de contra-atacar. Foi o que fizeram."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Adolf Hitler" },
        "Aprovou a operação em abril e a adiou até julho. O general Heinz Guderian, que cuidava dos tanques, era contra a operação. Em 12 de julho, em Görlitz, com Kluge e Manstein, Hitler ordenou parar a Cidadela, dois dias depois do desembarque aliado na Sicília.",
        { h: "Erich von Manstein e Walter Model" },
        "Model comandava o 9º Exército, que atacava pelo norte. Manstein comandava o Grupo de Exércitos Sul, com o 4º Exército Panzer, de Hermann Hoth, e o Destacamento Kempf. Manstein criticou, em suas memórias, a decisão de parar a ofensiva.",
        { h: "Georgy Zhukov e os comandantes soviéticos" },
        "Zhukov defendeu a defesa preparada. Rokossovski comandava a Frente Central, ao norte do saliente, e Vatutin, a Frente de Voronej, ao sul. A Frente das Estepes, de Konev, ficou na reserva. O general Pavel Rotmistrov comandava o 5º Exército de Tanques da Guarda, que atacou em Prokhorovka."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os alemães tinham, no começo, entre 777.000 e 780.900 homens, de 2.450 a 2.930 tanques e canhões autopropulsados e de 7.400 a 10.000 canhões e morteiros. Os soviéticos, dentro do saliente, tinham cerca de 1,3 milhão de homens, 3.600 tanques, 20.000 peças de artilharia e 2.792 aviões, com mais tropas na reserva. Contando as reservas, algumas fontes chegam a cerca de 1,9 milhão de homens e 5.000 tanques.",
        { h: "O terreno" },
        "Estepe aberta e ondulada, cortada por rios pequenos. Os soviéticos construíram uma [[defesa em profundidade|defesa em profundidade]]: três faixas muito fortificadas, com [[campos minados|campo minado]], valas antitanque e posições de [[canhão antitanque|canhão antitanque]], e mais três atrás, menos ocupadas. Segundo a Wikipédia, a defesa tinha cerca de 300 km de profundidade; outras fontes falam em oito faixas ao longo de cerca de 160 km. Uma análise de documentos soviéticos conta ao menos 290.000 minas antitanque e 294.000 minas antipessoais.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, a situação. Os alemães preparavam um ataque de duas pontas, o 9º Exército ao norte e o 4º Exército Panzer e o Destacamento Kempf ao sul. Os soviéticos tinham duas frentes na linha de combate e uma de reserva por trás.",
        "Segundo, por volta das 2h de 5 de julho, Zhukov mandou uma [[barragem de artilharia]] contra as posições alemãs. Atrasou algumas formações, mas não causou as perdas que ele esperava. Os dois ataques alemães começaram.",
        "Terceiro, ao norte, o ataque de Model emperrou em volta de Ponyri e Olkhovatka, de 7 a 10 de julho. A frente de ataque, de 45 km, tinha encolhido para 15 km em 7 de julho. Nos dias 8 e 9, avançou apenas 2 km. Em 10 de julho, os soviéticos o tinham parado. Ponyri trocou de mãos várias vezes.",
        "Quarto, ao sul, o ataque foi mais longe. O 2º Corpo Panzer SS rompeu a primeira faixa soviética em 5 de julho e avançou cerca de 29 km em 8 de julho. O 4º Exército Panzer chegou ao rio Psel em 9 de julho, e Hoth virou o corpo para nordeste, em direção a Prokhorovka. Em 8 de julho, o contra-ataque de Vatutin, em partes e desencontrado, falhou.",
        "Quinto, em 12 de julho, às 8h30, Rotmistrov deu a ordem de atacar com a palavra 'Aço, Aço, Aço'. Cerca de 500 tanques e canhões autopropulsados soviéticos atacaram em duas ondas (430 e 70) o 2º Corpo Panzer SS, que tinha 294 tanques e canhões de assalto utilizáveis na noite anterior. Uma vala antitanque de cerca de 4,6 m de profundidade, ao pé da colina 252.2, atrapalhou o avanço soviético. Nenhum dos dois lados atingiu o objetivo. Ao fim do dia, os soviéticos estavam nas mesmas posições.",
        "Sexto, no mesmo dia, 12 de julho, os soviéticos lançaram a Operação Kutuzov contra o saliente de Orel, ao norte, e Hitler ordenou parar a Cidadela. No sul, a Operação Roland ainda se estendeu de 14 a 17 de julho.",
        "Sétimo, em 3 de agosto, começou a Operação Rumyantsev, a ofensiva soviética de Belgorod a Kharkov. Belgorod foi libertada em 5 de agosto.",
        "Oitavo, em 23 de agosto, os soviéticos retomaram Kharkov, e os soviéticos recuperaram território numa frente de cerca de 2.000 km. Foi a primeira vez, na guerra, que uma ofensiva estratégica alemã foi parada antes de romper as linhas inimigas, e a primeira em que uma ofensiva soviética de verão deu certo."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas soviéticas, nas duas fases (a defesa e as contraofensivas), foram de cerca de 863.000 homens: cerca de 254.000 mortos, capturados ou desaparecidos e cerca de 609.000 feridos ou doentes. Só na fase da defesa, os dados de Krivosheev dão 177.877. As alemãs, segundo dados médicos, foram de 165.000 a 203.000 homens. Em tanques e canhões autopropulsados, os soviéticos perderam de 6.064 a 7.000 e os alemães, pelo menos 2.952 danificados ou destruídos, dos quais de 760 a 1.200 destruídos.",
        { h: "Por que importa" },
        "O Exército Vermelho manteve a iniciativa estratégica até o fim da guerra e libertou Belgorod e Kharkov. Também foi uma vitória industrial e de inteligência: os soviéticos sabiam, se prepararam e aguentaram.",
        { h: "Curiosidades e controvérsias" },
        { note: "Prokhorovka como 'a maior batalha de tanques da história' é um mito, segundo muitos historiadores. Veio dos relatos soviéticos, sobretudo de Rotmistrov. Em 12 de julho, os soviéticos perderam cerca de 340 tanques e canhões autopropulsados (destruídos ou danificados), e os alemães, de 43 a 80, segundo a Wikipédia. O historiador russo Valeriy Zamulin chega a uma conta parecida (até 80 tanques alemães contra cerca de 400 soviéticos) e diz que a maior batalha de tanques da guerra foi outra, um desastre soviético. O alemão Karl-Heinz Frieser vê em Prokhorovka uma vitória tática alemã, enquanto Ben Wheatley sustenta que foi uma vitória soviética, apesar das perdas pesadas. Os números são muito discutidos." },
        { note: "Os soviéticos tiveram muitas perdas. Rotmistrov disse que o 29º Corpo de Tanques perdeu 60% dos blindados e o 18º, 30%. Stálin ficou furioso, mandou Zhukov ao quartel de Vatutin, formou uma comissão, e chegou a pensar em tribunal militar para Rotmistrov, até Vasilevsky intervir." },
        { note: "Os números de Kursk variam muito por fonte e por critério: onde a batalha começa e termina, se contam as duas contraofensivas soviéticas, o que é tanque 'perdido' (destruído ou só danificado). Por isso damos faixas." }
      ]}
    ]
  }

});

Object.assign(FORMATIONS, {

  midway: {
    terrain: [{ t: "note", x: 92, y: 6, l: "Norte ↑" }],
    units: [
      { id: "aMid", s: "a", k: "camp", w: 12, h: 5, l: "Atol de Midway" },
      { id: "aAir", s: "a", k: "cav", w: 7, h: 3, l: "Aviões de Midway" },
      { id: "aTF16", s: "a", k: "ship", w: 10, h: 4, l: "Enterprise e Hornet (Spruance)" },
      { id: "aTF17", s: "a", k: "ship", w: 7, h: 3.5, l: "Yorktown (Fletcher)" },
      { id: "aTorp", s: "a", k: "cav", w: 7, h: 3, l: "Torpedeiros" },
      { id: "aDive", s: "a", k: "cav", w: 7, h: 3, l: "Bombardeiros de mergulho" },
      { id: "bKB", s: "b", k: "ship", w: 12, h: 4.5, l: "Akagi, Kaga e Soryu (Nagumo)" },
      { id: "bHir", s: "b", k: "ship", w: 7, h: 3.5, l: "Hiryu" },
      { id: "bAir", s: "b", k: "cav", w: 7, h: 3, l: "Aviões japoneses" },
      { id: "bOcc", s: "b", k: "ship", w: 9, h: 3, l: "Força de invasão" },
      { id: "bYam", s: "b", k: "ship", w: 10, h: 4, l: "Encouraçados de Yamamoto" }
    ],
    steps: [
      { t: "Antes da batalha. Os americanos sabem pelo código onde os japoneses vão atacar e esperam a nordeste de Midway. Os japoneses chegam pelo noroeste, em quatro grupos muito separados. Os encouraçados de Yamamoto ficam centenas de milhas atrás.",
        p: { aMid: [50, 58], aAir: [46, 52], aTF16: [72, 30], aTF17: [80, 40], aTorp: [66, 25], aDive: [76, 23],
             bKB: [24, 26], bHir: [34, 14], bAir: [28, 32], bOcc: [10, 54], bYam: [8, 8] } },
      { t: "4 de junho, 4h30. Nagumo lança 108 aviões contra Midway. A base é bombardeada. O chefe do ataque pede um segundo ataque à ilha.",
        p: { bAir: [47, 50] } },
      { t: "Aviões de Midway atacam os porta-aviões japoneses de forma desencontrada e não acertam nada. Nagumo troca as armas dos aviões da reserva, depois desfaz a troca. Os conveses ficam cheios. Os porta-aviões americanos se aproximam.",
        p: { aAir: [32, 30], bAir: [28, 30], aTF16: [64, 32], aTF17: [72, 40] }, x: ["aAir"] },
      { t: "Os torpedeiros dos três porta-aviões chegam sem escolta, um esquadrão de cada vez. Quase todos são abatidos, sem acertar um torpedo. Mas puxam os caças japoneses para o nível do mar.",
        p: { aTorp: [30, 24] }, x: ["aTorp"] },
      { t: "10h22. Os bombardeiros de mergulho chegam do alto. Em poucos minutos, Akagi, Kaga e Soryu pegam fogo, com os conveses cheios de aviões armados e combustível.",
        p: { aDive: [26, 20] }, x: ["bKB"] },
      { t: "O Hiryu, mais afastado, escapa e lança dois ataques. Atinge o Yorktown com três bombas e dois torpedos. Os bombardeiros americanos voltam aos seus navios.",
        p: { bAir: [74, 44], aDive: [66, 26] } },
      { t: "No fim da tarde, 24 bombardeiros de mergulho do Enterprise atacam o Hiryu e o incendeiam. Ele afunda na manhã seguinte.",
        p: { aDive: [36, 16], bAir: [34, 18] }, x: ["bHir"] },
      { t: "Spruance se afasta para o leste, e Yamamoto manda recuar. Em 6 de junho, o cruzador Mikuma é afundado. O submarino I-168 torpedeia o Yorktown, que afunda em 7 de junho.",
        p: { aTF16: [84, 22], aDive: [80, 24], bYam: [4, 22], bOcc: [4, 58] }, x: ["aTF17"] }
    ]
  },

  stalingrado: {
    terrain: [
      { t: "sea", x: 76, y: 0, w: 5, h: 70, l: "Volga" },
      { t: "note", x: 92, y: 6, l: "Norte ↑" },
      { t: "note", x: 58, y: 20, l: "Stalingrado" },
      { t: "note", x: 38, y: 43, l: "Kalach" }
    ],
    units: [
      { id: "s62", s: "a", k: "inf", w: 4, h: 14, l: "62º Exército (Tchuikov)" },
      { id: "sN", s: "a", k: "car", w: 14, h: 6, l: "Frentes do Sudoeste e do Don" },
      { id: "sS", s: "a", k: "car", w: 10, h: 6, l: "Frente de Stalingrado" },
      { id: "g6", s: "b", k: "inf", w: 12, h: 18, l: "6º Exército (Paulus)" },
      { id: "r3", s: "b", k: "inf", w: 6, h: 14, l: "3º Exército romeno" },
      { id: "r4", s: "b", k: "inf", w: 12, h: 5, l: "4º Exército romeno" },
      { id: "gRel", s: "b", k: "car", w: 10, h: 5, l: "Socorro de Manstein" }
    ],
    steps: [
      { t: "Novembro de 1942. Os alemães tomaram quase toda a cidade, e os soviéticos seguram uma faixa estreita junto ao Volga. Os flancos do 6º Exército são guardados por romenos, com poucos canhões antitanque.",
        p: { s62: [73, 36], sN: [28, 8], sS: [66, 64], g6: [60, 36], r3: [30, 26], r4: [50, 60], gRel: [26, 66] } },
      { t: "19 de novembro, 7h20. A Operação Urano começa pelo norte, contra o 3º Exército romeno.",
        p: { sN: [32, 16] } },
      { t: "20 de novembro. Do sul, a Frente de Stalingrado ataca o flanco do 4º Exército romeno. O 3º Exército romeno não aguenta.",
        p: { sS: [58, 62] }, x: ["r3"] },
      { t: "22 e 23 de novembro. Os dois grupos se encontram a oeste da cidade, perto de Kalach e Sovetsky. Cerca de 250.000 a 300.000 homens ficam cercados.",
        p: { sN: [44, 36], sS: [48, 48] }, x: ["r3", "r4"] },
      { t: "Hitler manda o 6º Exército ficar e promete abastecê-lo pelo ar. A ponte aérea entrega cerca de 105 toneladas por dia, bem menos do que as 680 a 750 necessárias.",
        p: {} },
      { t: "12 a 18 de dezembro. Manstein tenta romper o cerco por fora e chega a 48 km do bolsão. Paulus não vai ao encontro dele.",
        p: { gRel: [40, 54] } },
      { t: "Dezembro. A Operação Pequeno Saturno ataca mais a oeste, e o socorro é abandonado em 23 de dezembro. Os soviéticos tomam o aeroporto de Tatsinskaya.",
        p: { gRel: [24, 68] } },
      { t: "10 de janeiro de 1943. A Operação Anel começa, com cerca de 7.000 canhões e morteiros. O bolsão encolhe. Os aeroportos de Pitomnik e Gumrak caem.",
        p: { sN: [50, 32], sS: [54, 46], g6: [63, 36] } },
      { t: "31 de janeiro, o bolsão do sul cai, com Paulus. O do norte se rende em 2 de fevereiro. Quase 91.000 homens são capturados.",
        p: { sN: [58, 28], sS: [58, 46] }, x: ["g6"] }
    ]
  },

  elalamein: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 6, l: "Mar Mediterrâneo" },
      { t: "hill", x: 48, y: 69, rx: 44, ry: 6, l: "Depressão de Qattara (areia mole)" },
      { t: "note", x: 92, y: 12, l: "Norte ↑" }
    ],
    units: [
      { id: "a30", s: "a", k: "inf", w: 7, h: 20, l: "XXX Corpo (infantaria)" },
      { id: "a10", s: "a", k: "car", w: 7, h: 14, l: "X Corpo (blindados)" },
      { id: "a13", s: "a", k: "inf", w: 6, h: 14, l: "XIII Corpo (sul)" },
      { id: "bMine", s: "b", k: "camp", w: 5, h: 50, l: "Campos minados" },
      { id: "bInf", s: "b", k: "inf", w: 5, h: 40, l: "Infantaria alemã e italiana" },
      { id: "bPzN", s: "b", k: "car", w: 6, h: 10, l: "Blindados (norte)" },
      { id: "bPzS", s: "b", k: "car", w: 6, h: 10, l: "Blindados (sul)" }
    ],
    steps: [
      { t: "A frente tem cerca de 60 km, entre o mar e a depressão de Qattara. Rommel enche o terreno de campos minados e divide os blindados em dois grupos, norte e sul.",
        p: { a30: [62, 18], a10: [78, 20], a13: [62, 50], bMine: [44, 33], bInf: [36, 33], bPzN: [26, 18], bPzS: [26, 48] } },
      { t: "23 de outubro, 21h40. 882 canhões abrem fogo por cinco horas e meia. A infantaria avança sobre as minas para abrir dois corredores. No sul, o XIII Corpo faz uma ação de diversão.",
        p: { a30: [50, 16], a13: [53, 50] } },
      { t: "24 e 25 de outubro. Os blindados ficam presos na poeira e nos engarrafamentos dos corredores. Stumme morre. Rommel volta. Mais de 100 tanques se enfrentam no fim do dia 24, e metade é destruída.",
        p: { a10: [57, 22], bPzN: [35, 18] } },
      { t: "26 a 28 de outubro. A aviação afunda os petroleiros do Eixo. O Eixo faz sua última grande tentativa de retomar a iniciativa, e fracassa. Rommel avisa que, sem combustível, não consegue se retirar.",
        p: { bPzN: [40, 22] } },
      { t: "2 de novembro, madrugada. Operação Supercharge, em Tel el Aqqaqir. A 9ª Brigada Blindada sofre muito, mas abre uma brecha.",
        p: { a10: [45, 26], a30: [47, 22] } },
      { t: "Rommel fica com poucos tanques e decide recuar. Em 3 de novembro, Hitler ordena não ceder terreno.",
        p: { bPzS: [22, 42] }, x: ["bPzN"] },
      { t: "4 de novembro. Os britânicos abrem uma brecha de cerca de 19 km. Rommel ordena a retirada às 17h30, sem esperar Hitler. A infantaria italiana é deixada para trás.",
        p: { a10: [30, 26], bPzS: [12, 44] }, x: ["bInf"] },
      { t: "A perseguição é lenta e Rommel escapa. Seis meses depois, as forças do Eixo na África se rendem na Tunísia.",
        p: { a10: [14, 28], a30: [34, 28], bPzS: [2, 44] } }
    ]
  },

  kursk: {
    terrain: [
      { t: "note", x: 92, y: 6, l: "Norte ↑" },
      { t: "note", x: 52, y: 37, l: "Kursk" },
      { t: "note", x: 70, y: 56, l: "Prokhorovka" }
    ],
    units: [
      { id: "sCen", s: "a", k: "inf", w: 28, h: 7, l: "Frente Central (Rokossovski)" },
      { id: "sVor", s: "a", k: "inf", w: 28, h: 7, l: "Frente de Voronej (Vatutin)" },
      { id: "sSte", s: "a", k: "inf", w: 10, h: 16, l: "Frente das Estepes (reserva)" },
      { id: "s5GT", s: "a", k: "car", w: 10, h: 6, l: "5º Exército de Tanques (Rotmistrov)" },
      { id: "sKut", s: "a", k: "inf", w: 16, h: 5, l: "Operação Kutuzov (Orel)" },
      { id: "gN", s: "b", k: "car", w: 28, h: 6, l: "9º Exército (Model)" },
      { id: "gS1", s: "b", k: "car", w: 16, h: 6, l: "4º Exército Panzer (Hoth)" },
      { id: "gS2", s: "b", k: "car", w: 12, h: 6, l: "Destacamento Kempf" }
    ],
    steps: [
      { t: "Junho de 1943. O saliente de Kursk entra no território alemão. Os alemães preparam um ataque de duas pontas, uma por cima e outra por baixo. Os soviéticos sabem, cavaram faixas de defesa e guardam uma reserva.",
        p: { sCen: [48, 24], sVor: [48, 48], sSte: [80, 36], s5GT: [82, 52], sKut: [78, 6], gN: [48, 8], gS1: [36, 62], gS2: [62, 62] } },
      { t: "5 de julho. Zhukov dispara uma barragem de artilharia antes do ataque. Os alemães atacam mesmo assim, pelo norte e pelo sul.",
        p: { gN: [48, 15], gS1: [38, 56], gS2: [62, 56] } },
      { t: "Ao norte, Model emperra em Ponyri e Olkhovatka. Avança só 2 km por dia, e os soviéticos o param em 10 de julho.",
        p: { gN: [46, 20] } },
      { t: "Ao sul, o 2º Corpo Panzer SS rompe a primeira faixa, chega ao rio Psel em 9 de julho e vira para Prokhorovka. A reserva soviética se aproxima.",
        p: { gS1: [56, 47], gS2: [66, 50], s5GT: [78, 50] } },
      { t: "12 de julho, 8h30. O 5º Exército de Tanques ataca em Prokhorovka, com cerca de 500 tanques. Nenhum dos lados atinge o objetivo. Os soviéticos perdem muito mais.",
        p: { s5GT: [68, 50] } },
      { t: "Hitler manda parar a Cidadela, dois dias depois do desembarque aliado na Sicília. No mesmo dia, os soviéticos começam a Operação Kutuzov, contra o saliente de Orel.",
        p: { sKut: [62, 7], gN: [46, 10] } },
      { t: "3 de agosto. Operação Rumyantsev: os soviéticos atacam de Belgorod a Kharkov. Belgorod é libertada em 5 de agosto.",
        p: { sVor: [50, 58], sSte: [66, 62], gS1: [40, 66], gS2: [62, 66] } },
      { t: "23 de agosto. Kharkov é retomada. Os soviéticos recuperam território numa frente de cerca de 2.000 km e mantêm a iniciativa até o fim da guerra.",
        p: { sVor: [48, 66], sSte: [62, 66], gS1: [32, 68] } }
    ]
  }

});
