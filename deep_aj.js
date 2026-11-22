// batch aj: berlim, huaihai, inchon, dienbienphu, baiadosporcos
Object.assign(GLOSSARY, {
  "katyusha": "Lançador soviético de foguetes, montado num caminhão. Dispara dezenas de foguetes em poucos segundos e virou símbolo da artilharia do Exército Vermelho.",
  "volkssturm": "A 'tempestade do povo': milícia criada pela Alemanha nazista no fim da guerra, com homens velhos e meninos que ainda não tinham sido convocados, quase sem treino e com armas improvisadas.",
  "frente": "No Exército Vermelho, um grupo de exércitos que cobria um setor da linha de combate, sob um só comandante. Em Berlim atacaram três frentes: a de Jukov, a de Konev e a de Rokossovski.",
  "exército de tanques": "Grande unidade soviética formada em volta de tanques e infantaria motorizada. Era lançada pelo buraco que a artilharia abria, para correr atrás da linha inimiga e cercar.",
  "grupo de exércitos": "Vários exércitos reunidos sob um único comando, cobrindo um setor grande do front.",
  "desembarque anfíbio": "Ataque em que tropas saem de navios direto para uma praia inimiga. É uma das operações mais difíceis da guerra: os soldados chegam expostos, e tudo depende de hora, maré e coordenação.",
  "napalm": "Gasolina em gel, que gruda no que atinge e queima. Lançada de avião, foi muito usada na Guerra da Coreia.",
  "cabeça de praia": "A faixa de terra que as tropas de um desembarque tomam e seguram, para que o resto do exército possa chegar atrás delas.",
  "paraquedistas": "Soldados lançados de avião, de paraquedas. Chegam atrás ou dentro da linha inimiga, mas sem artilharia pesada.",
  "ponto de apoio": "Posição fortificada, com trincheiras, arame farpado e abrigos de concreto ou terra, capaz de resistir sozinha mesmo cercada. Dien Bien Phu era um conjunto de pontos de apoio com nomes de mulher.",
  "ponte aérea": "Abastecimento feito só por aviões, quando as estradas estão cortadas. Funciona enquanto a pista de pouso e os aviões aguentam.",
  "viet minh": "Frente criada em 1941 por comunistas e nacionalistas para lutar pela independência do Vietnã. Em 1954, seu exército, comandado por Giáp, combatia a França.",
  "legião estrangeira": "Corpo do exército francês formado por voluntários de muitos países, sob oficiais franceses. Lutou em Dien Bien Phu.",
  "tirailleurs": "Soldados recrutados nas colônias francesas, como Argélia e Marrocos, sob oficiais franceses.",
  "sapa": "Trincheira cavada em zigue-zague até bem perto da posição inimiga, para chegar ao ataque protegido do tiro. Foi o método dos vietnamitas em Dien Bien Phu.",
  "fogo direto": "Tiro de canhão apontado em linha reta para o alvo que se enxerga. Os vietnamitas faziam isso de dentro de túneis nas colinas, o que os franceses não esperavam.",
  "contrabateria": "Tiro da artilharia contra a artilharia inimiga, para calar seus canhões. Em Dien Bien Phu os franceses não conseguiram fazer isso.",
  "kuomintang": "O Partido Nacionalista chinês, liderado por Chiang Kai-shek, que governava a China e lutou contra os comunistas na guerra civil.",
  "exército de libertação popular": "O exército do Partido Comunista Chinês. Na Campanha de Huaihai, seus dois grandes grupos eram o Exército de Campo da China Oriental e o das Planícies Centrais.",
  "campanha": "Conjunto de combates ligados por um mesmo objetivo, numa região e num período. Huaihai foi uma campanha de 66 dias, não uma batalha de um dia.",
  "brigada 2506": "A força de exilados cubanos treinada pela CIA para invadir Cuba, com cerca de 1.400 homens.",
  "cia": "Agência de espionagem dos Estados Unidos. Planejou, treinou e financiou a invasão da Baía dos Porcos.",
  "guerra fria": "Disputa política, econômica e militar entre Estados Unidos e União Soviética depois de 1945, sem guerra direta entre os dois.",
  "embargo": "Proibição de comércio com um país, usada como pressão política.",
  "guerrilha": "Guerra de grupos pequenos e móveis, que atacam de surpresa e somem na mata ou no meio da população."
});

Object.assign(DEEP, {
  berlim: {
    war: "Segunda Guerra Mundial, frente europeia: a ofensiva soviética sobre Berlim (16 de abril a 2 de maio de 1945)",
    hook: "A cidade que Hitler mandou defender até o fim virou, em duas semanas, o campo da última grande batalha da guerra na Europa.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em janeiro de 1945, o Exército Vermelho lançou a ofensiva Vístula–Oder e avançou centenas de quilômetros pela Polônia, até parar no rio Oder, a algumas dezenas de quilômetros a leste de Berlim. Ali ficou parado durante cerca de três meses, juntando munição, tanques e homens. Do outro lado, a Alemanha já não tinha como ganhar a guerra: seu último grande contra-ataque, na Hungria, tinha falhado em meados de março.",
        "Os aliados ocidentais, que estavam do outro lado da Alemanha, não tinham plano para tomar Berlim. A cidade ficou para os soviéticos, e Stalin tinha pressa de chegar lá, segundo muitos historiadores antes que os americanos e os britânicos mudassem de ideia.",
        { h: "O caminho até Berlim" },
        { timeline: [
          ["12 jan 1945", "Começa a ofensiva soviética Vístula–Oder, que para no rio Oder."],
          ["6 mar", "Helmuth Reymann assume a defesa da cidade de Berlim."],
          ["20 mar", "Gotthard Heinrici assume o Grupo de Exércitos Vístula, no lugar de Heinrich Himmler."],
          ["1º abr", "Stalin chama Jukov e Konev a Moscou e acerta o plano e a data do ataque."],
          ["13 abr", "Viena cai nas mãos dos soviéticos."],
          ["16 abr", "Começa a Operação de Berlim, com o ataque às colinas de Seelow."]
        ]},
        "Heinrici era um especialista em defesa. Em vez de aguentar o primeiro golpe na margem do rio, onde a artilharia soviética cairia com tudo, planejou defender as colinas de Seelow, atrás do Oder. O vale do rio foi alagado, virando pântano, e foram cavadas três linhas de defesa, a última delas a cerca de 16 a 24 km atrás da frente, em direção a Berlim.",
        "Em 9 de março foi fixado o plano de defesa da própria cidade, chamado Clausewitz. Era uma cidade enorme para defender com tropas escassas: restavam divisões gastas do exército e da Waffen-SS, e milícias improvisadas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Georgi Jukov, 48 anos" },
        "Comandante da 1ª Frente Bielorrussa, a que atacaria Berlim pelo leste, de frente. Tinha sido o homem de Stalin nas maiores vitórias do Exército Vermelho, de Moscou a Stalingrado. Depois da guerra, escreveu que Stalin lhe havia prometido a honra de tomar Berlim. Konev não se lembrava de nada disso.",
        { h: "Ivan Konev, 47 anos" },
        "Comandante da 1ª Frente Ucraniana, ao sul de Jukov. Sabia que a linha de separação entre as duas frentes, desenhada pelo Estado-Maior, terminava perto de uma cidadezinha chamada Lübben. Konev contou depois que tinha insistido nisso, e Jukov contestou. O que é certo é que o mapa foi apagado a partir de Lübben, deixando a corrida em aberto. É difícil saber quem disse o quê, porque os dois marechais escreveram suas memórias depois da guerra e tinham interesse em sair bem na história.",
        { h: "Gotthard Heinrici e Helmuth Weidling" },
        "Heinrici comandava o Grupo de Exércitos Vístula, a defesa no Oder, e foi dispensado do comando no fim de abril. Weidling assumiu o comando da defesa da cidade de Berlim por volta de 23 de abril (as fontes dão o dia 23, 24 ou 26). Herdou uma guarnição pequena, formada por restos de divisões, pela Juventude Hitlerista e por velhos do Volkssturm.",
        { h: "Adolf Hitler" },
        "Estava no bunker, sob a Chancelaria do Reich, dando ordens a unidades que muitas vezes já não existiam. Se matou na tarde de 30 de abril, junto com Eva Braun."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os soviéticos reuniram, em três [[frentes|frente]], cerca de 2,5 milhões de homens (inclusive uns 78.500 soldados poloneses), 6.250 tanques, 41.600 canhões e morteiros, 3.255 lançadores [[katyusha]] e 7.500 aviões. Só a frente de Jukov, que atacaria Seelow, tinha perto de um milhão de homens.",
        "Os alemães tinham muito menos. Em Seelow, o 9º Exército de Theodor Busse tinha cerca de 110.000 homens, 14 divisões e 587 tanques. Dentro de Berlim, Weidling tinha uns 45.000 soldados e cerca de 40.000 do [[volkssturm]]. Havia ainda policiais e jovens da Juventude Hitlerista. Os números exatos variam muito de um historiador para outro, e os alemães tinham mais tropas espalhadas ao norte e ao sul.",
        { note: "As contagens variam: o que se chama de 'forças alemãs em Berlim' às vezes inclui só a guarnição da cidade, às vezes todo o exército nas três frentes da operação. Aqui, usamos cada número para o que ele realmente mede." },
        { h: "O terreno" },
        "Do Oder até Berlim, o terreno era campo plano, cortado por canais, rios, lagos e florestas. As colinas de Seelow se erguem uns 48 metros acima do vale do Oder. Parece pouco, mas, depois que os alemães alagaram a várzea, os tanques soviéticos só podiam subir por poucos caminhos, e a artilharia alemã dominava a encosta.",
        { h: "A batalha em dez movimentos" },
        { formation: true },
        "Primeiro, o ataque a Seelow. Na madrugada de 16 de abril, uns 9.000 canhões e katyushas dispararam mais de 500.000 projéteis em 30 minutos, e mais de cem holofotes foram acesos para cegar os defensores. Quase nada disso deu certo: os alemães tinham recuado para a segunda linha, e a poeira e a fumaça cegaram os próprios holofotes. Ao fim do dia, a frente de Jukov tinha avançado de 4 a 6 km, bem menos do que o plano previa, e a segunda linha de defesa ainda segurava.",
        "Segundo, Jukov jogou na luta mais cedo do que o previsto seus [[exércitos de tanques|exército de tanques]], que deveriam esperar a infantaria abrir o caminho. Stalin avisou a Jukov que Konev mandaria seus tanques para o norte, na direção de Berlim, se a frente de Jukov não andasse. No dia 17, Konev, que tinha atravessado o Neisse, atacou o setor do sul e enfraqueceu a posição de Heinrici.",
        "Terceiro, no dia 19 de abril a última linha de defesa se rompeu, e o 9º Exército ficou envolvido. O caminho de Berlim ficou aberto. A conta de mortos em Seelow é discutida: de menos de 10.000 até mais de 30.000 soviéticos, segundo o historiador, e uns 12.000 alemães. Os soviéticos perderam pelo menos 727 tanques ali.",
        "Quarto, em 20 de abril, aniversário de Hitler, a artilharia de Jukov começou a bombardear o centro da cidade, e não parou mais até a rendição. Ao mesmo tempo, os tanques de Konev avançavam pelo sul, na direção dos bairros do sul de Berlim.",
        "Quinto, o cerco. Pelos dias 24 e 25 de abril, os dois exércitos de tanques se encontraram a oeste da cidade, perto de Ketzin, e Berlim ficou isolada. No dia 25, mais ao sul, soldados soviéticos e americanos se encontraram em Torgau, no rio Elba, cortando a Alemanha em duas.",
        { h: "O bolsão de Halbe" },
        "Sexto e sétimo movimentos. O 9º Exército, de uns 80.000 homens (contando civis), ficou cercado na floresta do Spree, a sudeste de Berlim. Entre 24 de abril e 1º de maio, tentou sair para o oeste, na direção do 12º Exército de Walther Wenck. Foram três tentativas, a terceira, na noite do dia 28, abriu um corredor perto de Halbe. A conta de quem escapou varia: de uns 25.000 a uns 30.000. Cerca de 24.000 alemães estão enterrados no cemitério de Halbe.",
        { h: "Dentro da cidade" },
        "Oitavo, a luta rua por rua. No dia 26 de abril os soviéticos atacaram o aeroporto de Tempelhof, e, no começo do dia 29, o 3º Exército de Choque atravessou a ponte Moltke, rumo ao Reichstag. A luta era de bairro em bairro.",
        "Nono, o Reichstag. Na manhã de 30 de abril, a artilharia apoiou o ataque ao prédio do parlamento, onde os soviéticos entraram na noite do mesmo dia. O prédio só ficou totalmente sob controle soviético em 2 de maio. Na tarde de 30, Hitler e Eva Braun se mataram no bunker.",
        "Décimo, a rendição. Na madrugada de 1º de maio, o general Hans Krebs procurou o general soviético Tchuikov para falar de rendição. Goebbels e a mulher se mataram naquela tarde. Na noite de 1º para 2 de maio, parte dos defensores tentou romper o cerco. Na manhã do dia 2, os soviéticos tomaram a Chancelaria do Reich, e Weidling se rendeu, às 6 horas."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A guarnição de Berlim se rendeu em 2 de maio, mas a luta continuou a oeste, a noroeste e a sudoeste até 8 de maio, quando a Alemanha assinou a rendição geral (9 de maio, pelo horário de Moscou). Entre 2 e 3 de maio, dois generais alemães se renderam aos americanos, e Wenck cruzou o Elba para se render aos americanos em 7 de maio.",
        "As perdas soviéticas, segundo o historiador russo Krivosheev, foram de 361.367 homens, dos quais 81.116 mortos ou desaparecidos. Outro historiador, John Erickson, dá 304.877. Do lado alemão, estima-se de 92.000 a 100.000 mortos, e os soviéticos disseram ter capturado perto de 480.000 prisioneiros. Cerca de 125.000 civis morreram.",
        { h: "Por que importa" },
        "Foi a última grande batalha da guerra na Europa e o fim do Terceiro Reich. Berlim ficou em ruínas, com mais de um milhão de pessoas sem casa, e em junho de 1945, cada morador recebia, em média, 64% de uma ração diária de 1.240 calorias. A cidade foi dividida em setores entre os vencedores. Com a Guerra Fria, virou duas cidades, separadas, de 1961 a 1989, por um muro.",
        "Do lado soviético, 402 militares receberam o título de Herói da União Soviética por Berlim, e cerca de 1,1 milhão ganhou a medalha 'Pela Tomada de Berlim'.",
        { h: "Curiosidades e controvérsias" },
        { note: "A corrida: a ideia de que Stalin jogou Jukov e Konev um contra o outro vem das memórias dos próprios marechais e de historiadores como Antony Beevor. É verossímil, mas os detalhes (quem pediu a linha em Lübben, quem prometeu Berlim a quem) são contestados." },
        { note: "O custo de Seelow: houve críticos que diziam que Jukov devia ter contornado as colinas. O historiador Isaev diz que atacar Seelow era o caminho mais rápido para se encontrar com Konev e cortar o 9º Exército." },
        { note: "Os holofotes: várias fontes falam em 143, e um memorial de Seelow fala em 120. Eles deviam cegar os alemães, mas a poeira cegou os próprios holofotes e, segundo o memorial, a luz acabou mostrando os atacantes." },
        { note: "Os civis: muitas mulheres alemãs sofreram violência sexual dos soldados soviéticos durante a tomada da cidade. É um fato bem documentado, mas o número de vítimas é muito discutido, e por isso não damos um número aqui." }
      ]}
    ]
  },

  huaihai: {
    war: "Guerra Civil Chinesa (1945–1949): a Campanha de Huaihai, de 6 de novembro de 1948 a 10 de janeiro de 1949",
    hook: "Em 66 dias, os comunistas engoliram, um pedaço de cada vez, o maior exército nacionalista que restava na China.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois que o Japão se rendeu, em 1945, a China voltou a ser palco de uma guerra entre dois lados que já se enfrentavam havia quase vinte anos: o [[kuomintang]], de Chiang Kai-shek, que governava o país, e o Partido Comunista de Mao Zedong. Em 1948, os comunistas estavam tomando a Manchúria e preparavam a marcha para o sul.",
        "O nome da campanha junta duas palavras de lugares: o rio Huai e Haizhou, na costa. O plano partiu de um dos comandantes comunistas, Su Yu. Em 24 de setembro de 1948, os comunistas tomaram Jinan, na província de Shandong, e Su Yu propôs avançar para o sul, em direção à região entre o rio Huai e o mar. Mao aprovou e acrescentou um objetivo: destruir o 7º Exército nacionalista, em Xin'an.",
        { h: "O caminho até Huaihai" },
        { timeline: [
          ["24 set 1948", "Os comunistas tomam Jinan."],
          ["22 e 24 out", "Caem Zhengzhou e Kaifeng, para o Exército de Campo das Planícies Centrais."],
          ["1º nov", "Chen Yi e Deng Xiaoping recebem o comando das operações."],
          ["5 nov", "Chiang Kai-shek decide fazer a defesa a partir de Xuzhou."],
          ["6 nov", "Começa a campanha."]
        ]},
        "Xuzhou era o ponto de encontro de duas ferrovias, uma de leste a oeste (Longhai) e outra de norte a sul, entre Tianjin e Pukou, perto de Nanquim. Quem a controlasse cortava a ligação entre o norte e o sul, e os nacionalistas reuniram ali muitas tropas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Do lado comunista" },
        "Mao Zedong aprovou o plano e acompanhou de longe. Quem comandou a operação no campo foi a dupla Chen Yi e Deng Xiaoping, que em 1º de novembro receberam o comando, e que reuniam pela primeira vez dois grandes exércitos de campo (o da China Oriental, de Su Yu e Chen Yi, e o das Planícies Centrais, de Liu Bocheng e Deng Xiaoping). Era a primeira operação conjunta de tanto tamanho dos comunistas. O objetivo declarado não era tomar território, mas destruir exércitos inimigos.",
        { h: "Do lado nacionalista" },
        "Chiang Kai-shek decidia as grandes linhas, e chegou a mandar por avião uma ordem escrita à mão a Du, em 3 de dezembro. Em Xuzhou, Liu Zhi era o comandante do quartel-general de defesa, e Du Yuming o comandante de campo. Du queria atacar o Exército das Planícies Centrais, mas Chiang e Liu Zhi acharam o plano arriscado demais e mandaram socorrer diretamente o 7º Exército. Os dois comandantes cujos exércitos acabaram cercados foram Huang Baitao (7º Exército) e Huang Wei (12º Exército).",
        { h: "Os que mudaram de lado" },
        "Em vários momentos, oficiais nacionalistas que na verdade trabalhavam para os comunistas foram decisivos. He Jifeng e Zhang Kexia, generais nacionalistas infiltrados, levaram seus corpos de exército para o outro lado. Mais tarde, o general Liao Yunzhou, que era secretamente membro do Partido Comunista, fez o mesmo com a sua 110ª Divisão."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são os mais discutidos de toda a campanha. Os nacionalistas tinham cerca de 800.000 homens. Os comunistas aparecem com números muito diferentes: cerca de 600.000 em muitas contagens, e até 1.060.000 se somados os irregulares (660.000 regulares e 400.000 irregulares), número que a Wikipedia tira da mesma tese de 2015 que usa para os nacionalistas.",
        { note: "Os números de tropas e de baixas dessa campanha vêm em boa parte de fontes chinesas oficiais e são usados com cautela pelos historiadores." },
        { h: "O terreno" },
        "Uma planície vasta, ao norte de Nanquim, cortada por rios, canais e ferrovias, nas províncias de Shandong, Jiangsu, Anhui e Henan. As aldeias dos camponeses foram a base de apoio dos comunistas.",
        { h: "A campanha em dez movimentos" },
        { formation: true },
        "Primeiro, as posições. Em 5 de novembro, Chiang decide centrar a defesa em Xuzhou. Os comunistas já estavam em volta: o Exército de Campo da China Oriental a leste, e o das Planícies Centrais a oeste e ao sul.",
        "Segundo, a traição de 8 de novembro. Na noite do dia 8, comandantes nacionalistas infiltrados comunistas (He Jifeng e Zhang Kexia) levaram seus corpos de exército para o outro lado, cerca de 23.000 homens, segundo uma fonte. Isso cortou a ferrovia de Longhai, e o 7º Exército não tinha mais por onde fugir.",
        "Terceiro, Nianzhuang. O 7º Exército de Huang Baitao foi cercado na aldeia de Nianzhuang, a uns 30 km a leste de Xuzhou. Em poucos dias, o 63º Corpo foi destruído, e o exército dividido em dois.",
        "Quarto, o socorro que não chegou. De 13 a 22 de novembro, as colunas de socorro mandadas de Xuzhou foram barradas. Ao sul, Suxian caiu entre 13 e 15 de novembro, isolando ainda mais Xuzhou.",
        "Quinto, em 22 de novembro, Huang Baitao se matou, e o 7º Exército foi destruído. As contas variam: cerca de 25.000 mortos e uns 80.000 feridos ou prisioneiros, segundo uma fonte; outra fala em cerca de 100.000 homens destruídos em 15 dias. Só de 2.000 a 3.000 escaparam.",
        { h: "O 12º Exército em Shuangduiji" },
        "Sexto, a armadilha do sul. O 12º Exército de Huang Wei, de cerca de 120.000 homens, marchou para o norte, com o objetivo de reabrir a ferrovia entre Xuzhou e Bengbu. No dia 24 de novembro, atravessou o rio Kuai e caiu numa armadilha. No dia 25, estava cercado numa área de 7,5 km em volta da aldeia de Shuangduiji, por mais de 280.000 comunistas. Na tentativa de rompimento, a 110ª Divisão, comandada por Liao Yunzhou, mudou de lado, e as outras divisões que a seguiram foram emboscadas e empurradas de volta.",
        "Sétimo, em 28 de novembro, Chiang mandou evacuar Xuzhou, e a saída começou na noite de 30 de novembro. Du Yuming saiu com seus exércitos para o sudoeste. Era uma retirada de inverno, com os comunistas em volta.",
        "Oitavo, Chenguanzhuang. No começo de dezembro, os exércitos de Du Yuming foram parados e cercados em Chenguanzhuang. Uma tentativa de fuga, em 6 de dezembro, foi repelida, e o 16º Exército perdeu cerca de 30.000 homens, mortos ou presos. O mau tempo de inverno atrapalhou a entrega de suprimentos por avião.",
        "Nono, o fim do 12º Exército. Em 6 de dezembro os comunistas lançaram o ataque final, por três lados, com a técnica de 'trincheiras contra trincheiras'. Liu Bocheng e Chen Yi mandaram um ultimato, que Huang Wei recusou. Em 15 de dezembro, ao anoitecer, o 12º Exército foi destruído, e Huang Wei capturado, depois que seu tanque quebrou numa última tentativa de fuga. Segundo a Wikipedia, mais de 46.000 nacionalistas morreram e mais de 50.000 foram presos, e os comunistas ficaram com 870 canhões e 15 tanques.",
        "Décimo, o fim de Du Yuming. O ataque final a Chenguanzhuang começou em 6 de janeiro de 1949 e terminou em 10 de janeiro. Du Yuming foi capturado. Li Mi, outro comandante, escapou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os nacionalistas perderam cerca de 555.000 homens, dos quais uns 327.000 foram presos ou mudaram de lado. As perdas comunistas ficaram em torno de 134.000. As duas contas têm problemas de fonte e devem ser lidas como estimativas.",
        { h: "Por que importa" },
        "Foi a segunda das três grandes campanhas que decidiram a guerra civil (Liaoshen, na Manchúria, Huaihai e Pingjin, em Pequim e Tianjin), e a que causou as perdas mais pesadas ao Kuomintang. Chiang anunciou que se afastaria e deixou o cargo em 21 de janeiro de 1949. A ajuda militar americana foi minguando. O Exército de Libertação Popular seguiu para o rio Yangtzé, e em 1º de outubro de 1949 foi proclamada a República Popular da China.",
        "Do lado vencedor, a campanha virou um mito de mobilização popular. Segundo uma frase atribuída ao comandante Chen Yi, a vitória foi 'empurrada em carrinhos de mão' pelos camponeses. A mídia estatal chinesa fala em 5,43 milhões de camponeses mobilizados, cerca de seis para cada soldado.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números do povo: o 5,43 milhões de camponeses vem de uma única fonte, a mídia estatal chinesa, e não de um estudo independente. A importância dos carregadores é consenso, o número exato não." },
        { note: "Nomes e grafias: os nomes chineses aparecem em sistemas de transcrição diferentes, e Du Yuming aparece às vezes como 'Du Yiming'." },
        { note: "A morte de Qiu Qingquan, comandante nacionalista do 2º Exército: o texto da Wikipedia fala em 'morto', e o quadro da mesma página diz suicídio. As fontes lidas não concordam." }
      ]}
    ]
  },

  inchon: {
    war: "Guerra da Coreia (1950–1953): o desembarque em Incheon, 15 de setembro de 1950",
    hook: "Um general apostou tudo no pior porto possível, justamente porque ninguém acreditava que alguém seria louco o bastante para atacar ali.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 25 de junho de 1950, a Coreia do Norte invadiu a Coreia do Sul. Em poucas semanas, as forças sul-coreanas e as americanas que chegaram para ajudar foram empurradas até o canto sudeste da península, no chamado Perímetro de Pusan. Em agosto, os norte-coreanos atacaram o perímetro e falharam. A última grande ofensiva, a Grande Ofensiva de Naktong, começou em 1º de setembro e também falhou, mas deixou os dois lados exaustos.",
        "O general Douglas MacArthur, comandante das forças da ONU, queria um desembarque anfíbio para retomar a região de Seul. Mas os planos anteriores, Bluehearts (julho) e Chromite (23 de julho), foram abandonados porque as tropas que seriam usadas foram mandadas ao perímetro. MacArthur reuniu então o que sobrava: a 7ª Divisão do Exército, a última reserva dos Estados Unidos no Extremo Oriente, e os fuzileiros navais.",
        { h: "O caminho até Incheon" },
        { timeline: [
          ["25 jun 1950", "A Coreia do Norte invade o Sul."],
          ["23 ago", "MacArthur apresenta em Tóquio o plano de desembarque em Incheon."],
          ["28 ago", "Os chefes do Estado-Maior americano aprovam o plano."],
          ["1º set", "O tenente Eugene Clark desembarca numa ilha perto de Incheon para espionar."],
          ["5 a 13 set", "Bombardeios e uma operação de despiste em Kunsan, mais ao sul."],
          ["15 set", "Dia D: o desembarque."]
        ]},
        "A ideia de MacArthur era simples e arriscada. Em vez de tentar romper o perímetro de frente, ele desembarcaria bem atrás da linha de frente inimiga, num porto perto de Seul, e cortaria de uma vez o fornecimento dos norte-coreanos. O lugar escolhido era Incheon, que tinha todos os defeitos possíveis."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Douglas MacArthur, 70 anos" },
        "O general mais famoso dos Estados Unidos. Seus argumentos eram dois: Incheon era tão mal situado que o inimigo não ia esperar o ataque, e um desembarque ali evitaria um inverno longo de combates. Na reunião de 23 de agosto, disse que um desembarque em Kunsan, a opção segura que a Marinha preferia, não ia 'envolver' o inimigo: só empurrá-lo para o norte.",
        { h: "Os céticos" },
        "O general J. Lawton Collins, chefe do Estado-Maior do Exército, e o almirante Forrest Sherman, chefe de operações navais, foram à reunião de 23 de agosto, e muitos oficiais ficaram céticos. A Marinha listou os problemas: dois canais estreitos que podiam ser minados, correntes de 3 a 8 nós, marés enormes e muralhas altas em volta do porto. O comandante Arlie Capps disse que o porto tinha todas as desvantagens naturais e geográficas possíveis. O plano foi aprovado em 28 de agosto, depois que MacArthur ganhou Sherman pelo apelo à sua afeição pela Marinha. O almirante James Doyle, que comandava a força de invasão, teria ficado furioso.",
        { h: "Edward Almond e o 10º Corpo" },
        "O general Almond, chefe de Estado-Maior de MacArthur, foi nomeado para comandar o 10º Corpo, criado só para o desembarque. Ele achava que a operação acabaria com a guerra rapidamente.",
        { h: "Eugene Clark, o espião da maré" },
        "O tenente da Marinha Eugene Clark e uma equipe desembarcaram em 1º de setembro na ilha de Yonghung-do, ao largo de Incheon, e passaram cerca de duas semanas coletando informações sobre as praias, a lama, as muralhas e as posições de artilharia inimigas. Descobriu que as tábuas de maré americanas estavam erradas e que as japonesas eram boas, e que os norte-coreanos não tinham minado os canais direito. Na noite do desembarque, sua equipe acendeu o farol da ilha de Palmido, às 00h50 de 15 de setembro."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado das Nações Unidas, as fontes falam em cerca de 75.000 homens e 261 navios (Estados Unidos, Coreia do Sul, Reino Unido, Canadá e outros países), ou em cerca de 40.000 soldados de infantaria, conforme a conta. A defesa norte-coreana era de uns 6.500 homens, com artilharia na ilha de Wolmi-do, em frente ao porto.",
        { h: "O terreno" },
        "Incheon tinha todos os problemas que a Marinha apontou. A diferença entre maré alta e baixa é de, em média, 8,8 metros, e já foi medida em 11 metros. Na maré baixa, a baía vira um mar de lama. Não há praias de verdade: há muralhas altas em volta do porto. Os navios tinham que entrar por um canal estreito, o Flying Fish Channel, e tudo dependia de poucas horas de maré alta.",
        { h: "O desembarque em dez movimentos" },
        { formation: true },
        "Primeiro, o despiste. Desde 5 de setembro, aviões americanos bombardearam Kunsan, mais ao sul, e em 6 de setembro a Marinha a bombardeou também. Em 11 de setembro, bombardeiros B-29 se juntaram e, em 12 e 13 de setembro, um navio britânico, o HMS Whitesand Bay, desembarcou tropas lá. O objetivo era fazer os norte-coreanos esperarem o ataque em Kunsan.",
        "Segundo, o bombardeio de Wolmi-do. Em 10 de setembro, 43 aviões jogaram 93 recipientes de [[napalm]] na ilha. Em 13 de setembro, destróieres entraram no canal, às 7 horas da manhã, e dispararam quase mil tiros. A artilharia da ilha respondeu e acertou três navios: o Collett (sete vezes), o Gurke (três vezes) e o Lyman K. Swenson (duas vezes). Os destróieres descobriram minas e as explodiram a tiros. Em 14 de setembro, o bombardeio recomeçou.",
        "Terceiro, na manhã de 15 de setembro, às 6h30, o 3º Batalhão do 5º Regimento de Fuzileiros desembarcou em Wolmi-do, na chamada Praia Verde, com nove tanques M26. A ilha foi tomada às 11h15 e estava segura ao meio-dia. Do lado das Nações Unidas, houve 14 baixas. Os norte-coreanos perderam mais de 200 mortos e 136 prisioneiros.",
        "Quarto, a espera. Depois de tomar a ilha, os fuzileiros tiveram que esperar a maré encher de novo, ao fim da tarde. Foi o preço de escolher um lugar com marés assim: o primeiro ataque podia ser feito de manhã, e o principal só à tarde.",
        "Quinto, a tarde. Às 17h24, oito barcos de desembarque com os fuzileiros cruzaram a linha de partida para a Praia Vermelha, ao norte da cidade. Eles tiveram que subir as muralhas com escadas. O tenente Baldomero Lopez foi morto cobrindo uma granada ativa com o corpo, e recebeu depois a Medalha de Honra. Às 17h30, as primeiras ondas do 1º Regimento de Fuzileiros, de Lewis 'Chesty' Puller, chegaram à Praia Azul, ao sul, atravessando 4 km de lama em 172 veículos anfíbios, apoiados por foguetes disparados de barcos especiais.",
        "Sexto, a noite. A artilharia dos fuzileiros estava em posição às 21h50. A cidade de Incheon foi tomada em menos de 24 horas, com poucas dezenas de americanos mortos.",
        { h: "De Incheon a Seul" },
        "Sétimo, o aeroporto de Kimpo, a leste, foi cercado na tarde de 17 de setembro e tomado na manhã do dia 18. Os norte-coreanos deixaram alguns aviões intactos. Em 22 de setembro, já tinham desembarcado 6.629 veículos, 53.882 soldados e cerca de 23.000 toneladas de suprimentos. A 7ª Divisão chegou por mar a partir do dia 18.",
        "Oitavo, o Oitavo Exército, comandado por Walton Walker, saiu do Perímetro de Pusan em 16 de setembro. Os norte-coreanos estavam em retirada total no dia 22. Dos cerca de 70.000 soldados que cercavam o perímetro, de 36.000 a 41.000 foram mortos ou presos entre 1º e 15 de setembro, e uns 30.000 escaparam para o norte.",
        "Nono, Seul. Os fuzileiros entraram na cidade em 20 de setembro. A luta foi mais lenta do que se esperava: onze dias para andar uns 30 km. Na noite de 25 de setembro, Almond declarou a cidade libertada, e MacArthur repetiu o anúncio no dia seguinte.",
        "Décimo, em 28 de setembro, os últimos norte-coreanos foram expulsos ou destruídos em Seul. Em um mês, os americanos tinham capturado 135.000 prisioneiros norte-coreanos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A batalha foi barata para os vencedores: 224 mortos e 809 feridos do lado das Nações Unidas, contra cerca de 1.350 mortos norte-coreanos, segundo uma contagem. Seul foi retomada em 13 dias.",
        { h: "Por que importa" },
        "O desembarque destruiu a posição norte-coreana no sul, e em 30 de setembro as forças das Nações Unidas começaram a avançar para dentro da Coreia do Norte. Poucas semanas depois, a China entrou na guerra e empurrou as forças da ONU para trás. A guerra terminou em 1953, com a fronteira mais ou menos no mesmo lugar de antes.",
        "O historiador Spencer Tucker disse que Incheon foi a única operação de grande porte dos Estados Unidos que deu certo sem ambiguidade nos 40 anos seguintes. É até hoje um modelo de desembarque anfíbio.",
        { h: "Curiosidades e controvérsias" },
        { note: "Um crítico, o historiador Russell Stolfi, diz que a lentidão dos 11 dias até Seul tirou grande parte do efeito do desembarque. Incheon em si foi tomada em 24 horas." },
        { note: "O vazamento: um chefe de uma rede de espionagem norte-coreana e japonesa, preso no começo de setembro, tinha uma cópia do plano." },
        { note: "Os fuzileiros não foram convidados para a reunião em que MacArthur apresentou o plano, embora fossem eles quem ia liderar o desembarque, e isso causou atrito." }
      ]}
    ]
  },

  dienbienphu: {
    war: "Guerra da Indochina (1946–1954): o cerco de Dien Bien Phu, 13 de março a 7 de maio de 1954",
    hook: "Os franceses escolheram o vale; o general vietnamita escolheu as colinas em volta e arrastou os canhões até lá.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Desde 1946, a França lutava no Vietnã contra o [[viet minh]], que queria a independência. Em 1953, a guerra já se arrastava, e os vietnamitas tinham invadido partes do Laos. O novo comandante francês, o general Henri Navarre, assumiu em maio de 1953 com uma única ordem: criar condições para uma saída política honrosa.",
        "Navarre escolheu lutar. A ideia veio de outro oficial, o coronel Louis Berteil: construir uma base fortificada, abastecida só por avião, que tapasse os caminhos do Viet Minh para o Laos e os obrigasse a atacá-la. O modelo era a batalha de Nà Sản, em 1952, onde os franceses aguentaram numa base assim. O lugar escolhido, no fim, foi o vale de Dien Bien Phu, no noroeste do Vietnã.",
        { h: "O caminho até o vale" },
        { timeline: [
          ["Mai 1953", "Navarre assume o comando francês."],
          ["20 nov", "Começa a Operação Castor: cerca de 9.000 soldados são lançados de paraquedas e de avião em três dias."],
          ["9 dez", "Sai de Lai Châu uma coluna de 2.100 homens para reforçar a base. Só 185 chegam."],
          ["25–26 jan 1954", "O ataque rápido planejado por Giáp é cancelado."],
          ["13 mar", "Começa a batalha."],
          ["7 mai", "A base se rende."]
        ]},
        "Havia uma diferença decisiva em relação a Nà Sản. Em Dien Bien Phu, os vietnamitas dominavam as colinas ao redor, eram cerca de quatro vezes mais numerosos e tinham muito mais artilharia do que os franceses imaginavam. E a base de abastecimento dos franceses, em Hanói, ficava a uns 250 km."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Võ Nguyên Giáp, 42 anos" },
        "Foi professor de História antes da guerra, e virou o general do Viet Minh. Planejou o ataque como uma operação 'de golpe rápido, vitória rápida', marcada para 25 de janeiro. Mas o plano foi descoberto pelos franceses, e Giáp o cancelou e mudou a estratégia para 'luta firme, avanço firme', um cerco lento. Giáp chamou essa de a decisão mais difícil da sua vida.",
        { h: "Christian de Castries, comandante da base" },
        "Comandante da guarnição, organizou, a partir de dezembro, os pontos de apoio em volta do centro. Com o passar dos dias, a liderança na prática passou ao coronel Pierre Langlais, a partir de 24 de março, segundo relatos, embora a data seja disputada.",
        { h: "Charles Piroth, o homem dos canhões" },
        "Chefe da artilharia francesa, tinha um braço só. Garantiu a seus colegas que o Viet Minh nunca conseguiria levar canhões pesados até as colinas. Quando os canhões abriram fogo, em 13 de março, ele viu que estava errado. Matou-se por volta de 15 de março.",
        { h: "Marcel Bigeard e Geneviève de Galard" },
        "Marcel Bigeard, comandante de paraquedistas, foi um dos oficiais que mais resistiu. Geneviève de Galard era uma das 15 mulheres dos voos de evacuação. Ficou presa na base quando seu avião foi destruído, e trabalhou no hospital de campanha até a rendição. Os historiadores discordam do apelido 'Anjo de Dien Bien Phu'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Em 13 de março, a guarnição francesa era de uns 10.800 homens, dos quais cerca de 9.000 de combate, e subiu para uns 14.000 até 7 de maio (perto de 16.000, contando reforços lançados de paraquedas). Eram paraquedistas, a [[legião estrangeira]], [[tirailleurs]] argelinos e marroquinos, e soldados vietnamitas, laosianos e cambojanos. Tinham 10 tanques leves M24 e seis baterias de canhões de 105 mm, mais uma bateria de quatro obuseiros de 155 mm.",
        "O Viet Minh reuniu uns 49.500 combatentes e 15.000 homens de apoio, em cinco divisões: 304ª, 308ª, 312ª, 316ª e a 351ª, só de artilharia pesada. Os canhões e as armas antiaéreas, na maior parte de origem soviética, e alguns obuseiros americanos de 105 mm, tudo vindo pela China, eram em torno de quatro para cada um dos franceses. As fontes falam em 144 a 200 peças pesadas.",
        { h: "A logística" },
        "O Viet Minh levou tudo isso por trilhas na mata e nas montanhas, de noite, escondido dos aviões. O número de pessoas é discutido: as fontes falam de 100.000 a 200.000 carregadores, e de 20.000 a 60.000 bicicletas, empurradas, e não pedaladas, com cerca de 200 kg de carga cada, segundo relatos. Havia também cerca de 600 caminhões soviéticos, segundo uma fonte. Os canhões foram levados desmontados, em boa parte à mão, pelas encostas.",
        { note: "Os números da logística são os que mais variam entre as fontes, em parte porque a história virou lenda de propaganda. Que foi uma façanha de logística, isso todos concordam." },
        { h: "O terreno" },
        "Um vale cercado de colinas e mata, com os rios e a pista de pouso no meio. Os franceses ocuparam o fundo do vale, em pontos de apoio de nomes femininos: Gabrielle ao norte, Béatrice a nordeste, Anne-Marie a noroeste, Huguette a oeste, Claudine ao sul, Dominique a nordeste do centro, Eliane, que virou uma posição-chave perto do centro, e Isabelle, a uns 6 km ao sul, para proteger a pista de reserva. Os vietnamitas tomaram as colinas em volta.",
        { h: "O cerco em dez movimentos" },
        { formation: true },
        "Primeiro, a posição. Os franceses esperavam que o Viet Minh atacasse e se arrebentasse contra os pontos de apoio. Os vietnamitas cavaram túneis e abrigos nas encostas, e colocaram os canhões nas encostas de trás das colinas, de onde saíam para atirar e voltavam para se esconder. Atiravam em [[fogo direto]], de abrigos camuflados, e os franceses não conseguiam fazer [[contrabateria]].",
        "Segundo, Béatrice. Em 13 de março, os canhões abriram fogo, e o ponto de apoio, ao nordeste, caiu depois da 1h da manhã de 14 de março. Os dois comandantes do local, o major Paul Pégot e o tenente-coronel Jules Gaucher, morreram logo no começo.",
        "Terceiro, Gabrielle. A pista de pouso foi fechada em 14 de março, e os suprimentos passaram a cair só de paraquedas. Gabrielle, ao norte, caiu às 8h de 15 de março, depois de um contra-ataque francês que falhou.",
        "Quarto, em 17 de março, as tropas tai que defendiam Anne-Marie, a noroeste, desertaram ou sumiram na neblina, e os franceses abandonaram o posto. Seguiu-se uma calmaria até 30 de março. Em 28 de março, os franceses destruíram 17 metralhadoras antiaéreas do Viet Minh.",
        "Quinto, Dominique e Eliane. De 30 de março a 5 de abril, os vietnamitas atacaram em massa. Dominique 1 e 2 caíram em 30 de março. Bigeard se recusou a abandonar Eliane 4. Os ataques custaram muito aos vietnamitas, e, depois de 5 de abril, Giáp passou a usar a [[sapa]]: trincheiras cada vez mais perto das posições francesas.",
        "Sexto, abril. Os franceses retomaram Eliane 1 em 10 de abril. Em 18 de abril, abandonaram Huguette 6, e Huguette 1 caiu em 22 de abril. Com isso, o Viet Minh passou a controlar mais de 90% da pista de pouso. Isabelle, isolada desde 30 de março, ficava sem água e munição.",
        "Sétimo, 1º de maio. Os vietnamitas tomaram Eliane 1, Dominique 3 e Huguette 5.",
        "Oitavo, 6 de maio. O Viet Minh usou pela primeira vez os lançadores [[katyusha]], e explodiu uma mina cavada por baixo de Eliane 2.",
        "Nono, 7 de maio. O ataque geral começou. Cerca das 17h, De Castries disse ao general Cogny, em Hanói, que a situação era grave. O último ponto de apoio se rendeu depois das 18h20.",
        "Décimo, Isabelle, no sul. Ficou isolada até o fim. Cerca de 70 homens escaparam para o Laos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Do lado francês, houve 1.142 mortos em combate (até 2.293, pela conta de outros historiadores), 429 que morreram de ferimentos, 1.606 desaparecidos e 11.721 prisioneiros, dos quais 4.436 feridos. Perderam também 62 aviões e 10 tanques. Do lado vietnamita, as contas vão de 8.000 mortos e 15.000 feridos (estimativa ocidental) a 23.000 a 25.000 baixas (historiadores asiáticos). Os números oficiais vietnamitas falam em 13.930 baixas (4.020 mortos).",
        "Dos prisioneiros, a Cruz Vermelha evacuou 858 dos feridos mais graves no fim de maio. Só 3.290 foram devolvidos, quatro meses depois, e a taxa de mortes no cativeiro é calculada em cerca de 60%, embora esse número seja contestado. Uns 200 franceses conseguiram escapar.",
        { h: "Por que importa" },
        "A Conferência de Genebra começou em 8 de maio, um dia depois da rendição. Em julho, o acordo dividiu o Vietnã no paralelo 17. O governo francês de Joseph Laniel caiu em junho, e Pierre Mendès France assumiu. Foi o fim do domínio francês na Indochina. Na Argélia, a Frente de Libertação Nacional viu no resultado uma prova de que um exército colonial podia ser derrotado.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os Estados Unidos pagavam cerca de 80% dos gastos franceses na Indochina, e deram aviões, armas e mecânicos. Trinta e nove pilotos americanos de uma empresa ligada à CIA (a CAT) voaram 682 missões de abastecimento, e dois deles, James McGovern e Wallace Buford, morreram. As fontes dão números diferentes de pilotos (24 ou 39). Um plano de bombardeio americano, a Operação Abutre, nunca foi executado: o almirante Radford achou que já era tarde." },
        { note: "A duração: a conta de '56 dias' vale a partir do primeiro ataque, 13 de março. A guarnição francesa, porém, ficou no vale 167 dias, desde a Operação Castor, em novembro." },
        { note: "O abastecimento: Dien Bien Phu recebeu cerca de 7.000 toneladas por via aérea nos 56 dias do cerco, uma média de uns 120 toneladas por dia, contra as 200 de que a base precisava, e ficava a uns 250 km de Hanói. Anos depois, em Khe Sanh (1968), os americanos, a uns 60 a 70 km de Dong Ha, receberam cerca de 17.000 toneladas em 77 ou 78 dias, conforme a contagem." }
      ]}
    ]
  },

  baiadosporcos: {
    war: "Guerra Fria: a invasão da Baía dos Porcos, em Cuba (17 a 19 de abril de 1961)",
    hook: "Cerca de 1.400 exilados cubanos desembarcaram para derrubar Fidel Castro e, em três dias, estavam mortos, presos ou encurralados numa praia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1952, Fulgencio Batista tomou o poder em Cuba, e vários grupos pegaram em armas contra ele. Um deles era o Movimento 26 de Julho, de Fidel Castro, que lutou numa [[guerrilha]] na Sierra Maestra. Batista renunciou e fugiu em 31 de dezembro de 1958.",
        "O novo governo nacionalizou empresas americanas e se aproximou da União Soviética. Os Estados Unidos reagiram com um [[embargo]] (em outubro de 1960) e cortaram relações. Em 17 de março de 1960, a [[cia]] apresentou ao Conselho de Segurança Nacional um plano para trocar o governo de Castro por outro, com um orçamento aprovado de 13 milhões de dólares. Documentos da biblioteca do presidente Eisenhower mostram que ele não tinha ordenado nem aprovado um desembarque.",
        { h: "O caminho até a praia" },
        { timeline: [
          ["17 mar 1960", "A CIA apresenta o plano ao Conselho de Segurança Nacional. Em abril começa o recrutamento dos exilados."],
          ["Out 1960", "Os Estados Unidos impõem o embargo a Cuba."],
          ["18 nov", "Allen Dulles e Richard Bissell, da CIA, explicam o plano ao presidente eleito, John Kennedy."],
          ["28 jan 1961", "Kennedy é informado do plano de desembarque em Trinidad, que acabaria rejeitado."],
          ["4 abr", "Kennedy aprova o plano da Baía dos Porcos, com uma pista de pouso mais longa e menos envolvimento visível dos EUA."],
          ["15 abr", "Aviões B-26 bombardeiam aeroportos cubanos."],
          ["17 abr", "Os exilados desembarcam."]
        ]},
        "Os exilados formaram a [[brigada 2506]], o braço armado da Frente Democrática Revolucionária Cubana, financiada pela CIA e treinada na Guatemala. A região da baía, no sul de Cuba, é cercada por um grande pântano, com poucos caminhos."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "John F. Kennedy, 43 anos" },
        "Presidente havia menos de três meses. Herdou um plano que tinha sido feito por seus antecessores e pela CIA, e quis dar a ele menos visibilidade americana. Depois que os primeiros ataques aéreos causaram escândalo nas Nações Unidas, cancelou os ataques seguintes, em 16 de abril. Isso deixou intacta parte da força aérea de Castro, que seria decisiva.",
        { h: "Fidel Castro, 34 anos" },
        "Foi acordado de madrugada, por volta das 3h15 de 17 de abril, colocou a milícia de prontidão, mandou a aviação atacar e foi para a frente de batalha. Chegou ao engenho de açúcar mais perto da baía às 4h de 18 de abril. O comando inicial do contra-ataque ficou com José Ramón Fernández, mas Castro depois assumiu pessoalmente.",
        { h: "Os exilados" },
        "José Pérez San Román comandava a brigada, e Erneido Oliva era o segundo no comando. Os dois ficaram sem rádio logo no começo, quando os aparelhos molharam. Os pilotos dos B-26 eram em parte exilados, em parte americanos contratados pela CIA e voluntários da Guarda Aérea Nacional do Alabama.",
        { h: "Os planejadores" },
        "Allen Dulles, diretor da CIA, e Richard Bissell, o responsável pelo plano, foram forçados a deixar o cargo no começo de 1962, junto com o vice-diretor Charles Cabell."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A brigada tinha mais de 1.400 homens em cinco batalhões de infantaria e um de [[paraquedistas]], cinco tanques leves M41, 16 bombardeiros B-26, cinco navios de carga e quatro de transporte de tropas. Do outro lado estavam cerca de 25.000 soldados do exército cubano, uns 200.000 milicianos, 9.000 policiais, tanques T-34-85 de fabricação soviética e canhões autopropulsados SU-100. Depois do ataque de 15 de abril, a Força Aérea de Castro ainda tinha pelo menos quatro jatos T-33, quatro caças Sea Fury a hélice e cinco ou seis B-26.",
        { h: "O terreno" },
        "A região é uma costa baixa, de pântano e recifes de coral, com a Baía dos Porcos (Bahía de Cochinos) entrando na terra. Havia duas praias principais: Playa Girón, ao sul, que os invasores chamavam de Praia Azul, e Playa Larga, a uns 35 km a noroeste, a Praia Vermelha. Poucas estradas atravessavam o pântano.",
        { h: "A invasão em três dias" },
        "Em 15 de abril, oito B-26 atacaram três aeroportos perto de Havana e um em Santiago, e voltaram. O governo americano negou qualquer envolvimento: Adlai Stevenson, embaixador na ONU, negou, e depois se soube que a CIA tinha mentido a ele. Parte da força aérea cubana sobreviveu.",
        "Na noite de 16 para 17 de abril, uma falsa operação perto de Bahía Honda desviou a atenção de Castro. À meia-noite, os navios entraram na baía. Por volta da 1h, mergulhadores e soldados desembarcaram em Playa Girón. Em Playa Larga, o desembarque foi iluminado por holofotes, e o local foi trocado às pressas. Os recifes de coral e as falhas nos motores atrasaram o desembarque. Uma briga com um jipe de milicianos deu o alarme.",
        "A partir das 6h30, os aviões de Castro atacaram os navios. O Houston foi atingido às 6h50 e encalhado duas horas depois, com só uns 270 soldados em terra. Às 9h30, o Río Escondido, que levava combustível, munição, comida, remédios e o rádio que ligava a brigada aos aviões, foi afundado por foguetes. Por volta das 7h30, cerca de 177 paraquedistas foram lançados. Uns 30 caíram longe do alvo e perderam o equipamento nos pântanos, mas outros grupos seguraram bloqueios de estrada por dois dias.",
        "Durante a noite de 17 para 18, as tropas da Praia Vermelha sofreram contra-ataques sucessivos com a munição acabando. À 1h, cerca de 2.100 cubanos atacaram uns 370 homens da brigada. Oliva mandou recuar até as 5h, e Playa Larga caiu por volta das 10h30 do dia 18. Oliva propôs fugir para as montanhas do Escambray e lutar como guerrilha, mas San Román decidiu segurar a cabeça de praia.",
        "Em 18 de abril, às 14h, Kennedy recebeu um telegrama do primeiro-ministro soviético, Nikita Khrushchev, avisando os Estados Unidos para não entrarem em Cuba. Naquela tarde, B-26 pilotados por americanos contratados e por tripulantes exilados atacaram uma coluna de ônibus e caminhões blindados.",
        "Em 19 de abril, a última missão aérea, chamada Mad Dog Flight, teve cinco B-26, quatro deles pilotados por americanos. Dois foram derrubados, e quatro americanos morreram. Jatos da Marinha dos Estados Unidos, sem marcas, voaram em patrulha, mas não entraram em combate. Às 10h começou uma batalha de tanques. Às 14h, Oliva mandou recuar para Girón, e a brigada ficou sem munição de morteiro e bazuca. À noite, os destróieres USS Eaton e Murray tentaram retirar sobreviventes, mas recuaram sob fogo de tanques cubanos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A brigada se rendeu em 19 ou 20 de abril, conforme a fonte. Foram cerca de 1.200 prisioneiros (1.202, segundo a Wikipedia). Entre 67 e 114 homens da brigada morreram em combate, conforme a conta, e outros foram executados. Quatro americanos morreram. Do lado cubano, 176 mortos em combate e cerca de 2.000 milicianos mortos ou feridos, número que a própria fonte chama de vago.",
        "Em dezembro de 1962, Castro e o advogado James Donovan combinaram a troca de 1.113 prisioneiros por 53 milhões de dólares em comida e remédios. Os homens voltaram para Miami no fim daquele mês, e o presidente Kennedy recebeu a brigada em 29 de dezembro.",
        { h: "Por que importa" },
        "O fracasso fez de Castro herói nacional e jogou Cuba mais perto da União Soviética. Em 1962, veio a crise dos mísseis. Em 21 de abril de 1961, Kennedy disse em entrevista que a vitória tem cem pais, e a derrota é órfã, e que ele era o responsável. Em 22 de abril, criou uma comissão sob o general Maxwell Taylor, que, em junho, apontou, entre as causas, a falta de aviões, os limites ao armamento e aos ataques aéreos, a perda de navios importantes e a falta de munição.",
        "Depois da invasão, Kennedy mandou o Pentágono desenhar operações secretas contra Castro, a Operação Mangusto. Dulles, Cabell e Bissell perderam seus cargos.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quanto apoio aéreo houve de fato: Kennedy cancelou o segundo ataque, em 16 de abril, mas em 18 e 19 de abril autorizou uma missão limitada de B-26 com pilotos americanos e a patrulha de jatos sem marcas. Por isso é impreciso dizer que não houve nenhum apoio aéreo depois do cancelamento." },
        { note: "As datas: a Wikipedia em inglês fala em rendição em 20 de abril. Em Cuba, a vitória em Girón é comemorada a 19 de abril." },
        { note: "Os prisioneiros: em 8 de setembro de 1961, 14 deles foram condenados por crimes anteriores à invasão, e cinco foram executados. Em março e abril de 1962, 1.179 foram julgados por traição e condenados a 30 anos. Nove morreram sufocados num caminhão, durante o transporte para Havana." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  berlim: {
    terrain: [
      { t: "hill", x: 68, y: 31, rx: 5, ry: 12, l: "Colinas de Seelow" },
      { t: "note", x: 92, y: 68, l: "Oder e Neisse" },
      { t: "note", x: 4, y: 68, l: "Rio Elba" }
    ],
    units: [
      { id: "zhk", s: "a", k: "inf", w: 14, h: 6, l: "1ª Frente Bielorrussa (Jukov)" },
      { id: "kon", s: "a", k: "inf", w: 14, h: 6, l: "1ª Frente Ucraniana (Konev)" },
      { id: "rok", s: "a", k: "inf", w: 14, h: 5, l: "2ª Frente Bielorrussa" },
      { id: "zTk", s: "a", k: "car", w: 9, h: 3.5, l: "Tanques de Jukov" },
      { id: "kTk", s: "a", k: "car", w: 9, h: 3.5, l: "Tanques de Konev" },
      { id: "g9", s: "b", k: "inf", w: 12, h: 6, l: "9º Exército (Busse)" },
      { id: "gBer", s: "b", k: "inf", w: 10, h: 6, l: "Berlim (Weidling)" },
      { id: "g3", s: "b", k: "inf", w: 14, h: 5, l: "3º Exército Panzer" },
      { id: "gC", s: "b", k: "inf", w: 14, h: 5, l: "Grupo de Exércitos Centro" },
      { id: "g12", s: "b", k: "inf", w: 12, h: 5, l: "12º Exército (Wenck)" }
    ],
    steps: [
      { t: "Meados de abril: três frentes soviéticas na linha do Oder e do Neisse, com 2,5 milhões de homens. Heinrici concentrou a defesa nas colinas de Seelow, atrás do vale alagado.",
        p: { zhk: [88, 30], kon: [88, 54], rok: [88, 8], zTk: [98, 40], kTk: [98, 62], g9: [67, 31], gBer: [44, 36], g3: [62, 9], gC: [66, 57], g12: [8, 46] } },
      { t: "16 de abril, de madrugada: cerca de 9.000 canhões e katyushas disparam mais de 500.000 projéteis em 30 minutos, com holofotes. Os alemães já tinham recuado para a segunda linha, a poeira cega os holofotes, e Jukov avança só 4 a 6 km.",
        p: { zhk: [78, 31] } },
      { t: "Jukov joga na luta os exércitos de tanques mais cedo que o previsto. Ao sul, Konev atravessa o Neisse e rompe o setor de Schörner. Stalin já deixou aberta a corrida entre os dois.",
        p: { zTk: [76, 36], kon: [76, 55], kTk: [74, 50] } },
      { t: "19 de abril: a última linha alemã rompe, e o 9º Exército fica envolvido. O caminho para Berlim está aberto. Ao norte, Rokossovski prende o 3º Exército Panzer.",
        p: { zhk: [64, 29], zTk: [60, 36], g9: [66, 42], rok: [78, 10] } },
      { t: "20 de abril, aniversário de Hitler: a artilharia de Jukov começa a atirar no centro da cidade. Os tanques de Konev avançam para os bairros do sul, por trás do 9º Exército.",
        p: { zTk: [54, 32], kTk: [54, 48], kon: [62, 55], zhk: [60, 30] } },
      { t: "24 e 25 de abril: os dois exércitos de tanques se encontram a oeste de Berlim, perto de Ketzin, e a cidade fica cercada. No dia 25, soldados soviéticos e americanos se encontram em Torgau, no Elba.",
        p: { zTk: [30, 30], kTk: [30, 44] } },
      { t: "Bolsão de Halbe (24 de abril a 1º de maio): o 9º Exército, cerca de 80.000 homens contando civis, fica cercado na floresta a sudeste de Berlim.",
        p: { g9: [58, 54], zhk: [56, 32], kon: [54, 46], kTk: [44, 54] } },
      { t: "O 9º Exército tenta sair para o oeste, na direção do 12º Exército de Wenck, em três tentativas. Entre 25.000 e 30.000 homens chegam lá. O resto morre ou é preso.",
        p: { g9: [22, 50] }, x: ["g9"] },
      { t: "26 a 29 de abril: luta rua por rua. Os soviéticos atacam Tempelhof, ao sul, e o 3º Exército de Choque atravessa a ponte Moltke, no norte, em direção ao Reichstag.",
        p: { zhk: [52, 31], kon: [48, 43], zTk: [38, 28], kTk: [38, 46] } },
      { t: "30 de abril: soviéticos entram no Reichstag à noite. Hitler e Eva Braun se matam no bunker. Em 2 de maio, às 6h, Weidling se rende, e a guarnição de Berlim cai.",
        p: { zhk: [48, 33], kon: [46, 42], gBer: [44, 38] }, x: ["gBer"] }
    ]
  },

  inchon: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 34, h: 70, l: "Mar Amarelo" },
      { t: "hill", x: 40, y: 30, rx: 4, ry: 5, l: "Wolmi-do" },
      { t: "note", x: 58, y: 36, l: "Incheon" },
      { t: "note", x: 56, y: 14, l: "Praia Vermelha" },
      { t: "note", x: 60, y: 52, l: "Praia Azul" },
      { t: "note", x: 72, y: 12, l: "Kimpo" },
      { t: "note", x: 92, y: 4, l: "Seul" },
      { t: "note", x: 14, y: 69, l: "Kunsan (isca)" }
    ],
    units: [
      { id: "fleet", s: "a", k: "ship", w: 10, h: 5, l: "Esquadra (261 navios)" },
      { id: "m35", s: "a", k: "inf", w: 6, h: 3, l: "3º Btl, 5º Fuzileiros" },
      { id: "m5", s: "a", k: "inf", w: 6, h: 3, l: "5º Fuzileiros" },
      { id: "m1", s: "a", k: "inf", w: 6, h: 3, l: "1º Fuzileiros (Puller)" },
      { id: "m7", s: "a", k: "inf", w: 8, h: 3, l: "7ª Divisão" },
      { id: "m8", s: "a", k: "inf", w: 12, h: 4, l: "8º Exército (Pusan)" },
      { id: "kW", s: "b", k: "inf", w: 5, h: 3, l: "" },
      { id: "kI", s: "b", k: "inf", w: 8, h: 4, l: "Defensores de Incheon" },
      { id: "kS", s: "b", k: "inf", w: 10, h: 4, l: "Tropas em Seul" },
      { id: "kP", s: "b", k: "inf", w: 14, h: 5, l: "Exército norte-coreano no sul" }
    ],
    steps: [
      { t: "Antes do dia D: bombardeios e um desembarque de despiste em Kunsan, no sul, para os norte-coreanos olharem para o lugar errado. No perímetro de Pusan, o 8º Exército aguenta, e o grosso do exército norte-coreano está lá.",
        p: { fleet: [14, 58], m35: [26, 50], m5: [10, 48], m1: [24, 62], m7: [6, 66], m8: [74, 66], kW: [40, 31], kI: [56, 31], kS: [88, 14], kP: [90, 58] } },
      { t: "10 a 14 de setembro: a frota entra no canal Flying Fish. Aviões jogam napalm em Wolmi-do, destróieres atiram e destroem as minas. A artilharia da ilha acerta três navios.",
        p: { fleet: [26, 34], m35: [28, 42], m5: [18, 42], m1: [16, 50], m7: [8, 58] } },
      { t: "15 de setembro, 6h30: o 3º Batalhão do 5º Regimento de Fuzileiros desembarca em Wolmi-do, com nove tanques. A ilha cai antes do meio-dia, e os fuzileiros ficam lá.",
        p: { m35: [38, 30] }, x: ["kW"] },
      { t: "A espera: a maré baixa vira lama, e só enche de novo à tarde. Os fuzileiros aguardam, e os barcos se alinham para a segunda onda.",
        p: { fleet: [30, 36], m5: [28, 20], m1: [28, 50] } },
      { t: "17h30: o 5º Regimento chega à Praia Vermelha e sobe as muralhas com escadas. Ao mesmo tempo, o 1º Regimento, de Puller, atravessa a lama da Praia Azul em veículos anfíbios.",
        p: { m5: [50, 22], m1: [52, 46] } },
      { t: "À noite, as duas praias se juntam, a artilharia dos fuzileiros está em posição, e Incheon é tomada em menos de 24 horas. Os defensores são derrotados.",
        p: { m5: [52, 30], m1: [54, 38] }, x: ["kI"] },
      { t: "17 e 18 de setembro: os fuzileiros cercam e tomam o aeroporto de Kimpo. A 7ª Divisão do Exército começa a desembarcar. Em 22 de setembro, já eram 53.882 soldados e 6.629 veículos em terra.",
        p: { m5: [72, 18], m7: [32, 50] } },
      { t: "16 a 23 de setembro: o 8º Exército sai do perímetro de Pusan e os norte-coreanos recuam para o norte, correndo o risco de ficar presos entre as duas forças.",
        p: { m8: [78, 48], kP: [90, 40] } },
      { t: "20 a 25 de setembro: os fuzileiros entram em Seul e lutam casa por casa. Almond declara a cidade libertada na noite de 25.",
        p: { m5: [82, 12], m1: [76, 22], m7: [48, 42] } },
      { t: "28 de setembro: os últimos norte-coreanos são expulsos ou destruídos em Seul. Dos cerca de 70.000 que cercavam Pusan, uns 30.000 escaparam para o norte. Em um mês, 135.000 foram presos.",
        p: { m8: [84, 34], kS: [96, 6] }, x: ["kS", "kP"] }
    ]
  },

  dienbienphu: {
    terrain: [
      { t: "hill", x: 40, y: 3, rx: 30, ry: 5, l: "" },
      { t: "hill", x: 94, y: 30, rx: 10, ry: 28, l: "Colinas a leste" },
      { t: "hill", x: 6, y: 36, rx: 10, ry: 24, l: "Colinas a oeste" },
      { t: "note", x: 44, y: 41, l: "pista de pouso" }
    ],
    units: [
      { id: "v308", s: "a", k: "inf", w: 9, h: 4, l: "308ª Divisão" },
      { id: "v312", s: "a", k: "inf", w: 9, h: 4, l: "312ª Divisão" },
      { id: "v316", s: "a", k: "inf", w: 9, h: 4, l: "316ª Divisão" },
      { id: "v304", s: "a", k: "inf", w: 9, h: 4, l: "304ª Divisão" },
      { id: "v351", s: "a", k: "inf", w: 10, h: 3, l: "351ª (artilharia)" },
      { id: "fGab", s: "b", k: "inf", w: 6, h: 3.5, l: "Gabrielle" },
      { id: "fBea", s: "b", k: "inf", w: 6, h: 3.5, l: "Béatrice" },
      { id: "fAnn", s: "b", k: "inf", w: 6, h: 3.5, l: "Anne-Marie" },
      { id: "fDom", s: "b", k: "inf", w: 6, h: 3.5, l: "Dominique" },
      { id: "fEli", s: "b", k: "inf", w: 6, h: 3.5, l: "Eliane" },
      { id: "fHQ", s: "b", k: "camp", w: 8, h: 4, l: "Comando (De Castries)" },
      { id: "fHug", s: "b", k: "inf", w: 6, h: 3.5, l: "Huguette" },
      { id: "fCla", s: "b", k: "inf", w: 6, h: 3.5, l: "Claudine" },
      { id: "fIsa", s: "b", k: "inf", w: 6, h: 3.5, l: "Isabelle" }
    ],
    steps: [
      { t: "Março de 1954: uns 10.800 franceses no fundo do vale, em pontos de apoio com nomes de mulher. Em volta, nas colinas, cinco divisões do Viet Minh, com cerca de 49.500 combatentes, e muito mais canhões do que os franceses esperavam.",
        p: { v308: [30, 2], v312: [78, 4], v316: [92, 40], v304: [6, 46], v351: [88, 20], fGab: [46, 10], fBea: [68, 14], fAnn: [22, 16], fDom: [70, 28], fEli: [60, 36], fHQ: [46, 33], fHug: [32, 34], fCla: [46, 48], fIsa: [48, 64] } },
      { t: "13 de março: os canhões abrem fogo, de dentro das colinas, com tiro direto. Béatrice cai depois da 1h da manhã do dia 14. Os dois comandantes do posto morrem logo no começo.",
        p: { v312: [74, 12] }, x: ["fBea"] },
      { t: "14 e 15 de março: a pista de pouso é fechada, e os suprimentos passam a vir só de paraquedas. Gabrielle cai às 8h de 15 de março, depois de um contra-ataque que falhou. O chefe da artilharia, Piroth, se mata.",
        p: { v308: [40, 12] }, x: ["fGab"] },
      { t: "17 de março: as tropas tai de Anne-Marie desertam ou somem na neblina, e os franceses abandonam o posto. Segue-se uma calmaria de duas semanas.",
        p: { v308: [28, 16] }, x: ["fAnn"] },
      { t: "30 de março a 5 de abril: ataques em massa a Dominique e Eliane. Dominique 1 e 2 caem em 30 de março, mas Bigeard segura Eliane 4. Depois de pesadas perdas, Giáp passa à sapa: trincheiras cada vez mais perto.",
        p: { v312: [72, 22], v316: [70, 38] } },
      { t: "Abril: os franceses retomam Eliane 1 em 10 de abril. Huguette 6 é abandonada em 18 de abril, e Huguette 1 cai em 22 de abril. O Viet Minh passa a controlar mais de 90% da pista.",
        p: { v304: [26, 38], v316: [66, 38] }, x: ["fHug"] },
      { t: "1º de maio: os vietnamitas tomam Eliane 1, Dominique 3 e Huguette 5. A base fica reduzida a uma área pequena. Isabelle, isolada desde 30 de março, está sem água e sem munição.",
        p: { v312: [68, 28], v316: [62, 38] }, x: ["fDom"] },
      { t: "6 de maio: o Viet Minh usa pela primeira vez os lançadores katyusha, e explode uma mina cavada sob Eliane 2.",
        p: { v351: [80, 26], v316: [58, 36] }, x: ["fEli"] },
      { t: "7 de maio: ataque geral. Cerca das 17h, De Castries diz a Cogny, em Hanói, que a situação é grave. O centro e Claudine caem no fim da tarde, e o último ponto de apoio se rende depois das 18h20.",
        p: { v308: [46, 28], v312: [56, 30], v304: [40, 40] }, x: ["fHQ", "fCla"] },
      { t: "Isabelle, ao sul, fica isolada até o fim. Cerca de 70 homens conseguem escapar para o Laos.",
        p: { v304: [44, 58] }, x: ["fIsa"] }
    ]
  },

  huaihai: {
    terrain: [
      { t: "sea", x: 94, y: 0, w: 14, h: 70, l: "Mar" },
      { t: "note", x: 76, y: 38, l: "Nianzhuang" },
      { t: "note", x: 44, y: 63, l: "Shuangduiji" },
      { t: "note", x: 26, y: 50, l: "Chenguanzhuang" },
      { t: "note", x: 50, y: 69, l: "Bengbu e rio Huai" },
      { t: "note", x: 50, y: 4, l: "Jinan e o norte" }
    ],
    units: [
      { id: "pE", s: "a", k: "inf", w: 14, h: 5, l: "Exército da China Oriental" },
      { id: "pC", s: "a", k: "inf", w: 14, h: 5, l: "Exército das Planícies Centrais" },
      { id: "kDu", s: "b", k: "inf", w: 12, h: 6, l: "Xuzhou (Du Yuming)" },
      { id: "kRel", s: "b", k: "inf", w: 8, h: 4, l: "Tropas de socorro" },
      { id: "k7", s: "b", k: "inf", w: 10, h: 5, l: "7º Exército" },
      { id: "kPZ", s: "b", k: "inf", w: 8, h: 4, l: "Zona de Pacificação" },
      { id: "k12", s: "b", k: "inf", w: 10, h: 5, l: "12º Exército (Huang Wei)" }
    ],
    steps: [
      { t: "5 de novembro de 1948: Chiang centra a defesa em Xuzhou, nó das ferrovias. Os comunistas já estão em volta: o Exército da China Oriental a leste, o das Planícies Centrais a oeste.",
        p: { pE: [86, 18], pC: [16, 34], kDu: [50, 26], kRel: [62, 28], k7: [74, 26], kPZ: [64, 14], k12: [12, 62] } },
      { t: "8 de novembro: comandantes nacionalistas infiltrados pelos comunistas (He Jifeng e Zhang Kexia) levam seus corpos de exército, cerca de 23.000 homens, para o outro lado. A ferrovia de Longhai é cortada, e o 7º Exército fica sem saída.",
        p: { pE: [72, 20] }, x: ["kPZ"] },
      { t: "O 7º Exército de Huang Baitao é cercado na aldeia de Nianzhuang, a leste de Xuzhou. O 63º Corpo é destruído em poucos dias.",
        p: { pE: [78, 32], k7: [74, 30] } },
      { t: "13 a 22 de novembro: as tropas de socorro mandadas de Xuzhou são barradas. Ao sul, o Exército das Planícies Centrais toma Suxian e corta a ferrovia para Bengbu.",
        p: { kRel: [66, 28], pC: [54, 46] } },
      { t: "22 de novembro: Huang Baitao se mata, e o 7º Exército é destruído. De cerca de 100.000 homens, só 2.000 a 3.000 escapam, segundo uma das fontes.",
        p: {}, x: ["k7"] },
      { t: "23 a 25 de novembro: o 12º Exército, de uns 120.000 homens, marcha para o norte, atravessa o rio Kuai e cai numa armadilha. Em 25 de novembro, está cercado perto de Shuangduiji por mais de 280.000 comunistas.",
        p: { k12: [42, 58], pC: [44, 50] } },
      { t: "26 e 27 de novembro: na tentativa de fuga, a 110ª Divisão muda de lado. Chiang manda evacuar Xuzhou em 28 de novembro, e a coluna de Du Yuming sai para o sudoeste na noite de 30.",
        p: { kDu: [38, 40], kRel: [44, 34], pE: [58, 34] } },
      { t: "Início de dezembro: Du Yuming é parado e cercado em Chenguanzhuang. A fuga de 6 de dezembro é repelida, e o 16º Exército perde uns 30.000 homens, mortos ou presos. O inverno atrapalha o abastecimento por avião.",
        p: { kDu: [30, 46], kRel: [36, 40], pE: [44, 38] } },
      { t: "15 de dezembro: o 12º Exército é destruído ao anoitecer, e Huang Wei é capturado depois que seu tanque quebra numa última tentativa de fuga.",
        p: {}, x: ["k12"] },
      { t: "6 a 10 de janeiro de 1949: último ataque a Chenguanzhuang. Du Yuming é capturado. O caminho para o sul está aberto.",
        p: { pE: [38, 44], pC: [30, 52] }, x: ["kDu", "kRel"] }
    ]
  }
});
