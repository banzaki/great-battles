// In-depth battles, batch bo: bagration, chosin, marcoral, marfilipinas, montecassino (great-battles pack).
// Checked against the English and Portuguese Wikipedia articles on Operation Bagration, the Vitebsk-Orsha, Bobruysk
// and Minsk offensives, the Parade of the Vanquished, and on the Battle of Chosin Reservoir, plus the works those pages
// cite (Frieser, Zaloga, Glantz and House for Bagration; Appleman, Roe, Millett, Yu Bin and PLA estimates for Chosin; the English Wikipedia articles on Coral Sea, Philippine Sea and Monte Cassino).

Object.assign(GLOSSARY, {
  "maskirovka": "Palavra russa para o engano militar: esconder as tropas verdadeiras, mostrar tropas falsas e fazer o inimigo olhar para o lugar errado. Os soviéticos a tratavam como parte do plano, não como enfeite.",
  "praça-forte alemã": "Em alemão, 'Fester Platz': cidade que Hitler mandava defender até o fim, mesmo cercada, para travar o avanço soviético. Na prática, prendia as guarnições onde elas seriam cercadas.",
  "partisans soviéticos": "Guerrilheiros que atuavam atrás das linhas alemãs na União Soviética ocupada. Em 1944 receberam ordem de explodir trilhos e cortar telefones na noite do ataque.",
  "grupo de cavalaria e mecanizados": "Unidade soviética mista, com cavalaria e tropas motorizadas, usada para entrar em terreno ruim (pântanos, florestas) por onde os tanques pesados não passavam.",
  "equipe de combate regimental": "Em inglês, 'Regimental Combat Team' (RCT): um regimento americano reforçado com artilharia e outros apoios, montado para uma missão. A RCT-31 foi formada às pressas no fim de 1950.",
  "geladura": "Lesão da pele e dos músculos causada pelo frio extremo, que pode levar à perda de dedos, mãos e pés. No inverno de 1950 na Coreia, matou e inutilizou milhares de soldados.",
  "voluntários do povo chinês": "Nome oficial das tropas chinesas enviadas à Coreia em 1950. A China dizia que eram voluntários, para não declarar guerra aos Estados Unidos. Eram, de fato, divisões do exército regular.",
  "katusa": "Sigla de 'Korean Augmentation to the US Army': soldados sul-coreanos que serviam dentro de unidades americanas.",
  "comandos reais": "Os 'Royal Marines Commandos': unidade britânica de elite de fuzileiros, treinada para missões difíceis. O 41º Comando lutou em Chosin ao lado dos americanos.",
  "ponte treadway": "Ponte desmontável, em seções de aço que se encaixam. Em Chosin, as seções foram lançadas de paraquedas para consertar a ponte destruída."
});

Object.assign(DEEP, {
  bagration: {
    war: "Frente Oriental da Segunda Guerra Mundial (1941–1945)",
    hook: "Em poucas semanas, o Exército Vermelho destruiu um grupo de exércitos alemão inteiro e libertou a Bielorrússia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 22 de junho de 1941, a Alemanha invadiu a União Soviética. Três anos depois, a guerra tinha virado. O Exército Vermelho vencera em Stalingrado e em Kursk, e no começo de 1944 reconquistou boa parte da Ucrânia. Mas, no centro da frente, a Bielorrússia continuava ocupada. Ali estava o Grupo de Exércitos Centro alemão, entre florestas, rios e pântanos, com a estrada Moscou–Minsk como eixo.",
        "Em 6 de junho de 1944, os Aliados desembarcaram na Normandia. O alto-comando soviético, a [[Stavka]], escolheu a Bielorrússia. A operação recebeu o nome de Bagration, general russo da guerra de 1812 contra Napoleão. A data não foi acaso: 22 de junho, o terceiro aniversário da invasão alemã.",
        { h: "O caminho até junho de 1944" },
        { timeline: [
          ["Fim de 1943", "O Exército Vermelho recupera Kiev e avança na Ucrânia, mas é barrado na Bielorrússia."],
          ["Primavera de 1944", "A Stavka decide que o golpe principal será no centro, não no sul."],
          ["31 mai.", "Uma diretiva da Stavka fixa os objetivos de cada frente."],
          ["6 jun.", "Desembarque aliado na Normandia."],
          ["19–20 jun.", "Os guerrilheiros atacam ferrovias e linhas de comunicação atrás das linhas alemãs."],
          ["22 jun.", "Começa a Operação Bagration."]
        ]},
        "A parte mais engenhosa foi o engano. Os soviéticos fizeram a [[maskirovka]] de modo que o comando alemão olhasse para o sul. Quatro exércitos de tanques ficaram na região de Lvov, e os alemães foram deixados à vontade para descobri-los. Hitler e o alto-comando concluíram que a ofensiva viria na Ucrânia, e as reservas panzer ficaram lá. Os soviéticos conseguiram ainda esconder as reservas estratégicas reunidas para o centro."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "O lado soviético" },
        "A Stavka mandou dois representantes para coordenar as frentes: o marechal Aleksandr Vasilevski e o marechal Georgi Zhukov. Cada [[frente]] tinha o seu comandante. Ivan Bagramian chefiava a 1ª Frente Báltica, ao norte. Ivan Tcherniakhovski, a 3ª Frente Bielorrussa, que cercaria Vitebsk e iria para Minsk. Gueórgui Zakharov, a 2ª Frente Bielorrussa, no meio. Konstantin Rokossovski, a 1ª Frente Bielorrussa, ao sul, com a missão mais difícil: atravessar terreno de pântanos para chegar a Bobruisk. O marechal de blindados Pavel Rotmistrov comandava o 5º Exército de Tanques da Guarda, uma das lanças da ofensiva.",
        { h: "O lado alemão" },
        "O marechal de campo Ernst Busch comandava o Grupo de Exércitos Centro. Seus principais subordinados eram Georg-Hans Reinhardt (3º Exército Panzer, em Vitebsk), Kurt von Tippelskirch (4º Exército, no meio) e Hans Jordan (9º Exército, em Bobruisk). Em 28 de junho, Hitler demitiu Busch e pôs no lugar Walter Model, um general conhecido por consertar frentes em colapso. Jordan também caiu: foi substituído por Nikolaus von Vormann em 27 de junho.",
        "Hitler mandou que Vitebsk, Orsha, Mogilev, Bobruisk e outras cidades virassem [[praças-fortes alemãs|praça-forte alemã]]: seriam defendidas até o fim, mesmo cercadas. Os generais da linha de frente protestaram. Jordan avisou que, ou o exército passava a uma defesa móvel, ou veria a frente despedaçada. Foi o que aconteceu."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam conforme a fonte. Segundo Frieser, o Grupo de Exércitos Centro tinha, no começo, cerca de 486.000 combatentes (849.000 contando os serviços de apoio), 118 tanques e 452 canhões de assalto, 3.236 peças de artilharia e 920 aviões (só 602 em condições de voar, segundo outra contagem). Do lado soviético, Frieser e Glantz e House dão cerca de 1,67 milhão de homens no começo, 3.841 tanques, 1.977 canhões de assalto, mais de 32.000 canhões, morteiros e lançadores de foguetes ([[katyusha]]) e quase 8.000 aviões. Contando as reservas, Frieser fala em até 2,5 milhões de soviéticos. A diferença em artilharia era de dez para um; no ar, era ainda maior.",
        { h: "O terreno" },
        "A Bielorrússia era um país de florestas densas e pântanos, com poucas estradas e rios largos: o Dvina, o Dnieper e o Berezina. O sul era dominado pelos pântanos do Pripiat, que os alemães achavam intransponíveis para tanques. Por isso a defesa alemã era mais fraca ali, e por isso Rokossovski mandou uma força por lá.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na noite de 19 para 20 de junho, os [[partisans soviéticos]] explodiram trilhos e cortaram comunicações. Em 22 de junho, depois de uma preparação de artilharia, o ataque começou em quatro pontos. Ao norte e ao sul de Vitebsk, a 1ª Frente Báltica e a 3ª Frente Bielorrussa romperam a linha em poucas horas. O 3º Exército Panzer de Reinhardt se desfez.",
        "Segundo, em Orsha, no eixo da estrada Moscou–Minsk, o 11º Exército da Guarda atacou em 23 de junho. Os engenheiros soviéticos foram na frente, com tanques que arrastavam rolos para detonar minas. Em 24 de junho, a 1ª Divisão de Fuzileiros da Guarda abriu uma brecha num trecho de pântano pouco defendido. Os grupos mecanizados e de cavalaria passaram por ela, e a linha alemã se rompeu em 25 de junho. Orsha foi libertada na noite de 26. O 5º Exército de Tanques da Guarda atravessou a brecha e correu para o Berezina.",
        "Terceiro, em 24 de junho, a 1ª Frente Bielorrussa atacou o 9º Exército alemão. Cerca de 7.000 canhões, morteiros e lançadores de foguetes abriram fogo. O 3º Exército, de Gorbatov, atacou de Rogatchov, e o 65º Exército, de Batov, do sul. Segundo a tradição soviética, Rokossovski quis dois golpes e Stalin preferia um só; o plano foi para frente com os dois. Ao mesmo tempo, o [[grupo de cavalaria e mecanizados|grupo de cavalaria e mecanizados]] de Pliev entrou pela borda dos pântanos do Pripiat, tomou Sluck e cortou as saídas do 9º Exército pelo sul.",
        "Quarto, em Vitebsk, o 43º e o 39º Exércitos fecharam o cerco atrás da cidade e prenderam o LIII Corpo alemão. As divisões que tentaram romper o cerco foram destruídas em 25 e 26 de junho. O OKH negou o pedido de evacuação e Hitler mandou até um oficial de estado-maior de paraquedas para impor a ordem. Reinhardt só conseguiu revogá-la ao ameaçar saltar também. O general Gollwitzer retirou o que pôde da guarnição, desobedecendo, quando os soviéticos já entravam na cidade. Em 27 de junho, o LIII Corpo estava destruído: cerca de 28.000 a 30.000 homens, quase todos mortos ou prisioneiros.",
        "Quinto, em Bobruisk, em 27 de junho, cinco divisões do XXXV Corpo estavam presas a leste do Berezina, com parte do XXXXI Corpo Panzer. A aviação e a artilharia soviéticas bateram nas colunas que tentavam romper o cerco. O 9º Exército foi dado como destruído em 28 de junho. Bobruisk caiu em 29 de junho depois de combate nas ruas. Cerca de 12.000 alemães escaparam, a maioria sem armas. Os soviéticos fecharam o caminho do sul até Minsk.",
        "Sexto, em Mogilev, o 49º Exército atravessou o Dnieper em 27 de junho e tomou a cidade. Hitler só autorizou Busch a recuar para o Berezina em 26 de junho, tarde demais. O grosso do 4º Exército chegou às travessias em 30 de junho e atravessou em 2 de julho, sob bombardeio pesado. As vanguardas do 5º Exército de Tanques da Guarda já estavam no Berezina em 28 de junho. Nesse dia, Model assumiu o grupo de exércitos.",
        "Sétimo, em 3 de julho, o 2º Corpo de Tanques da Guarda entrou em Minsk de madrugada. O 5º Exército de Tanques e o 65º Exército fecharam o anel a oeste da cidade, e o 4º Exército alemão e restos do 9º ficaram presos num [[bolsão]] a leste. A 5ª Divisão Panzer, mandada de reforço, não conseguiu salvar a cidade. Minsk foi libertada em 4 de julho. Calcula-se que cerca de 100.000 alemães ficaram no bolsão, dos quais uns 40.000 foram mortos ou desapareceram, e a maior parte do resto foi capturada. O general Vincenz Müller, que comandava os cercados, foi preso em 8 de julho e ordenou a rendição; muitos grupos continuaram tentando fugir até meados do mês.",
        "Oitavo, a ofensiva seguiu para oeste sem parar. A 1ª Frente Báltica limpou Polotsk em 4 de julho. Molodechno caiu em 5 de julho, e Vilnius foi cercada em 8. A 6ª Divisão Panzer contra-atacou em 12 de julho e abriu por pouco tempo um corredor de fuga, mas a cidade caiu em 13 de julho. A 1ª Frente Bielorrussa, em outra operação, a ofensiva de Lublin–Brest, tomou Lublin em 24 de julho e Brest em 28 de julho, e em 2 de agosto já tinha cabeças de ponte no Vístula. A ofensiva diminuiu em agosto, quando as linhas de suprimento esticaram demais e os alemães, com tropas trazidas de todos os lados, fecharam o buraco entre os grupos de exércitos Centro e Norte."
      ]},
      { n: "04", title: "Legado", blocks: [
        "A operação durou de 22 de junho a 19 de agosto de 1944. O Grupo de Exércitos Centro perdeu cerca de 28 divisões. Entre 22 de junho e 4 de julho, perdeu 25 divisões e 300.000 homens, e outros 100.000 nas semanas seguintes, segundo a Wikipédia em inglês. O Exército Vermelho retomou toda a Bielorrússia, a maior parte da Lituânia e uma faixa do leste da Polônia.",
        { h: "O desfile dos derrotados" },
        "Em 17 de julho de 1944, cerca de 57.000 prisioneiros alemães, em sua maioria do bolsão de Minsk, foram obrigados a marchar pelas ruas de Moscou. Vinte homens em cada fila, levaram uns 90 minutos para passar. Ficou conhecido como o 'desfile dos derrotados', e Stalin quis mostrar ao mundo que a guerra estava vencida.",
        { h: "As perdas" },
        { note: "As perdas alemãs são discutidas. Frieser conta 399.102 baixas alemãs (26.397 mortos, 109.776 feridos e 262.929 desaparecidos ou prisioneiros). Zaloga fala em 300.000 a 375.000 entre mortos, desaparecidos e prisioneiros. Glantz e House estimam em torno de 450.000 baixas de combate, e Isayev em cerca de 500.000. Do lado soviético, Glantz e House dão cerca de 770.000 baixas no total, contando os feridos. Segundo Krivosheev, os soviéticos perderam 2.957 tanques e canhões de assalto, 2.447 canhões e 822 aviões." },
        { h: "Consequências" },
        "Os soviéticos chegaram ao Vístula, a poucos quilômetros de Varsóvia. Em 1º de agosto, a resistência polonesa começou o levante de Varsóvia, que durou até outubro. O Exército Vermelho não entrou na cidade, e os historiadores discutem até hoje se foi por falta de fôlego e de suprimentos ou por cálculo político. A destruição do Grupo de Exércitos Centro deixou a Alemanha sem reservas para defender as fronteiras no leste, e em janeiro de 1945 a ofensiva soviética chegaria ao rio Oder.",
        { note: "Uma ajuda de fora. Um autor americano diz que mais de 220.000 caminhões Dodge e Studebaker, fornecidos pelos Estados Unidos, motorizaram a infantaria soviética. É a afirmação de um autor, não um número consensual." }
      ]}
    ]
  },

  chosin: {
    war: "Guerra da Coreia (1950–1953)",
    hook: "Cercados no fim do mundo, a −38 °C, uns 30.000 homens da ONU abriram caminho a pé até o mar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Guerra da Coreia começou em junho de 1950, quando a Coreia do Norte invadiu o sul. Os americanos, em nome da ONU, vieram em socorro. Em setembro, o general Douglas MacArthur desembarcou em Inchon e virou a guerra. As tropas da ONU cruzaram o paralelo 38 e avançaram pelo norte, rumo ao rio Yalu, a fronteira com a China.",
        "A China avisou que não ficaria parada. Em 19 de outubro, tropas chinesas atravessaram o Yalu em segredo. Os americanos não acreditaram na dimensão da ameaça. No fim de novembro, MacArthur ordenou a 'ofensiva do Natal', com a promessa de que a guerra acabaria até o fim do ano. O X Corpo americano, comandado pelo general Edward Almond, devia avançar a oeste do reservatório de Chosin para cortar uma linha de suprimento chinesa. Tinha uma frente de uns 640 quilômetros a defender, espalhado demais.",
        { h: "O caminho até Chosin" },
        { timeline: [
          ["Set. 1950", "Desembarque em Inchon e virada da guerra."],
          ["19 out.", "Tropas chinesas atravessam o Yalu em segredo."],
          ["2 nov.", "A 1ª Divisão de Fuzileiros enfrenta a 124ª Divisão chinesa perto de Wonsan."],
          ["17 nov.", "O 9º Corpo chinês chega à região do reservatório sem ser notado."],
          ["21 nov.", "Almond formula o plano de avanço a oeste por Yudam-ni."],
          ["27 nov.", "Os chineses atacam. No dia seguinte, Yudam-ni, Sinhung-ni, Hagaru-ri e Koto-ri estão isoladas."]
        ]},
        "O único caminho de volta era uma estrada de uns 126 quilômetros, que ia de Hungnam, no litoral, até o reservatório, e subia por desfiladeiros estreitos. Quem controlasse a estrada controlaria a retirada."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Oliver P. Smith e Edward Almond" },
        "O major-general Oliver P. Smith comandava a 1ª Divisão de Fuzileiros. Acreditava, ao contrário de Tóquio, que havia muitos chineses na Coreia do Norte. Almond o achava cauteloso demais, mas Smith desacelerou o avanço, manteve a maior parte da divisão reunida em Yudam-ni e montou depósitos e pistas de pouso em Hagaru-ri e Koto-ri. Essa cautela salvou a divisão. Almond, comandante do X Corpo, estava mais perto do otimismo de MacArthur.",
        { h: "Song Shilun" },
        "Do lado chinês, Mao Zedong mandou, em 31 de outubro, destruir quatro divisões da ONU. O comandante do 9º Corpo era Song Shilun. Os [[voluntários do povo chinês|voluntários do povo chinês]], sob o comando geral de Peng Dehuai, chegaram em marcha, quase sem agasalho, sem comida suficiente e sem artilharia pesada. Dois corpos, o 20º e o 27º, formavam o ataque principal, e o 26º ficou em reserva por falta de comida.",
        { h: "Os homens da linha de frente" },
        "O capitão William Barber comandava a Companhia Fox do 7º Regimento de Fuzileiros, que ficou presa numa colina sobre o desfiladeiro de Toktong. O coronel Allan MacLean e o tenente-coronel Don Faith lideravam a RCT-31 do Exército, a leste do reservatório. O tenente-coronel Douglas Drysdale comandava a força-tarefa com o 41º Comando britânico. Os coronéis Homer Litzenberg (7º Regimento) e Raymond Murray (5º) comandavam os fuzileiros em Yudam-ni."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A 1ª Divisão de Fuzileiros tinha cerca de 25.500 homens no começo, e as forças da ONU chegaram a uns 30.000, com o 41º Comando britânico e o equivalente a dois regimentos das 3ª e 7ª Divisões do Exército. Os chineses tinham 12 divisões de cerca de 10.000 homens cada, segundo a estimativa usual de 120.000. Alguns historiadores revisam esse total para baixo, até 60.000, porque os prisioneiros falavam em 6.500 a 7.000 por divisão. A aviação dos fuzileiros e dos porta-aviões da Força-Tarefa 77 podia fazer uns 230 voos por dia, e a Força Aérea lançava cerca de 250 toneladas de suprimento por dia.",
        { h: "O terreno e o frio" },
        "Montanhas íngremes, estradas de terra de uma só faixa e um frio que chegou a −38 °C, depois de uma frente siberiana em 14 de novembro. O plasma sanguíneo congelava, as armas travavam, a graxa virava gel e as baterias morriam. Os médicos descongelavam as ampolas de morfina na boca. Os chineses sofriam mais ainda: mal agasalhados, tiveram 700 baixas por [[geladura]] só no dia em que entraram na Coreia. Segundo a Wikipédia em inglês, mais chineses morreram de frio do que em combate e nos ataques aéreos.",
        { h: "A batalha em nove movimentos" },
        { formation: true },
        "Primeiro, no fim de novembro, a divisão estava esticada ao longo da estrada: os 5º e 7º Regimentos em Yudam-ni, a oeste do reservatório; batalhões em Hagaru-ri, no sul; batalhões do 1º Regimento em Koto-ri; e a RCT-31 do Exército, formada às pressas, na margem leste. Os chineses estavam escondidos nas colinas.",
        "Segundo, na noite de 27 para 28 de novembro, três regimentos da 79ª Divisão chinesa atacaram as cristas ao norte e a noroeste de Yudam-ni. Os fuzileiros seguraram a linha, e ao amanhecer ninguém tinha cedido. O mesmo aconteceu em volta de Hagaru-ri, onde os regimentos 172º e 173º chineses tomaram a colina do leste. A estrada foi cortada em vários pontos.",
        "Terceiro, em 29 de novembro, o tenente-coronel Drysdale saiu de Koto-ri em direção a Hagaru-ri com 921 homens do 41º Comando, de uma companhia de fuzileiros e de outra do Exército, por uma estrada que ficou chamada de 'Vale do Fogo do Inferno'. Chegou com uns 300 infantes e teve 162 mortos ou desaparecidos e 159 feridos. No mesmo dia, o coronel MacLean desapareceu no gelo, na margem leste, depois de ir ao encontro de soldados que tomou por americanos. Fontes chinesas dizem que foi morto na hora, e prisioneiros da ONU disseram que morreu depois, ferido.",
        "Quarto, em 30 de novembro, os coronéis Litzenberg e Murray ordenaram a saída de Yudam-ni. Em 1º de dezembro, a RCT-31 tentou romper o cerco, na margem leste. O tenente-coronel Faith, atingido por uma granada ao liderar o ataque a uma barreira sob a colina 1221, morreu dos ferimentos. Dos cerca de 2.500 homens da RCT-31, uns 1.050 chegaram a Hagaru-ri, e só 385 estavam em condições de lutar. A unidade só recebeu a condecoração presidencial em 1999.",
        "Quinto, em Hagaru-ri, quase todos foram para a linha: fuzileiros, engenheiros e homens do apoio. A pista de pouso, em obras, abriu em 1º de dezembro. Em 2 de dezembro, a Companhia Fox, que aguentou cinco dias contra a 59ª Divisão chinesa, ajudada pela artilharia de Hagaru-ri e pelos caças Corsair, juntou-se ao 1º Batalhão do 7º Regimento e o desfiladeiro de Toktong foi liberado.",
        "Sexto, a coluna de Yudam-ni, com o 7º Regimento na frente e o 5º cobrindo a retaguarda, chegou a Hagaru-ri na tarde de 3 de dezembro. A retirada de Yudam-ni terminou em 4 de dezembro. A frase mais famosa da campanha é atribuída ao general Smith nesse momento: 'Retirada, nada! Não estamos recuando, estamos só avançando em outra direção.' Ela aparece em relatos de 1950, mas convém tratá-la como atribuição, não como transcrição.",
        "Sétimo, em 6 de dezembro, a coluna saiu de Hagaru-ri, com o 7º Regimento na frente e o 5º na retaguarda. Em 7 de dezembro chegou a Koto-ri. Os feridos, em parte, saíram de avião e de helicóptero.",
        "Oitavo, em Funchilin, o 180º Regimento chinês, na colina 1081, explodiu a ponte de concreto e duas pontes improvisadas, achando que não haveria conserto. Os americanos lançaram de paraquedas oito seções de [[ponte treadway|ponte treadway]], de 18 pés (5,5 m) cada, de aviões C-119. Em 9 de dezembro, engenheiros do Corpo de Fuzileiros e do Exército montaram quatro seções, com extensões de madeira. No mesmo dia, o 1º Batalhão do 1º Regimento tomou a colina 1081, onde os defensores lutaram até o último homem. Os últimos soldados saíram do desfiladeiro em 11 de dezembro e chegaram a Hungnam às 21h.",
        "Nono, o general MacArthur mandou evacuar o X Corpo em 8 de dezembro. Uma frota de 193 navios levou tropas, equipamentos e uma parte dos refugiados coreanos. O último soldado da ONU saiu às 14h36 de 24 de dezembro, e o porto foi destruído. O cargueiro SS Meredith Victory, feito para uns 12 passageiros, levou cerca de 14.000 refugiados. Ao todo, cerca de 105.000 soldados, 98.000 civis, 17.500 veículos e 350.000 toneladas de suprimentos foram para Pusan."
      ]},
      { n: "04", title: "Legado", blocks: [
        "O X Corpo e o I Corpo sul-coreano registraram 10.495 baixas em combate: 4.385 fuzileiros americanos, 3.163 soldados do Exército, 2.812 sul-coreanos e 78 fuzileiros reais britânicos. A 1ª Divisão de Fuzileiros contou ainda 7.338 baixas sem ser em combate, sobretudo por frio, e o total chegou a 17.833. Do lado chinês, uma estimativa do Exército chinês de 1988 fala em 21.366 baixas em combate (7.304 mortos) e 30.732 fora de combate, um total de 52.098. Roe cita até 60.000.",
        { h: "Quem venceu?" },
        "Os historiadores discordam. Appleman diz que os dois lados podem reclamar a vitória. Millett chama de uma 'vitória geográfica' chinesa que não destruiu a divisão de fuzileiros. A Academia de Ciências Militares chinesa diz que o 9º Corpo venceu, ao proteger o flanco do leste e causar mais de 10.000 baixas à ONU. Cohen o vê como uma vitória da ONU, pois deixou o 9º Corpo fora de combate até março de 1951. Para Yu Bin, o corpo virou 'um hospital gigante' e não destruiu as tropas da ONU, como planejava.",
        { note: "O custo para os chineses. A ordem de batalha chinesa caiu de 30 divisões de infantaria, em 16 de novembro, para 18, em 31 de dezembro. Oito divisões de elite dos 20º e 27º Corpos ficaram enfraquecidas, e duas foram dissolvidas. O 9º Corpo chinês ficou fora de combate por cerca de três meses, segundo Yan Xue." },
        { note: "Honras. A 1ª Divisão de Fuzileiros, o 41º Comando e a RCT-31 receberam a Citação Presidencial de Unidade. Quatorze fuzileiros, dois soldados do Exército e um piloto da Marinha receberam a Medalha de Honra por Chosin: 17 ao todo, e 78 Cruzes de Serviço." },
        { note: "Os 'Chosin Few'. Os veteranos americanos da batalha ficaram conhecidos assim. Para muitos historiadores, foi uma das batalhas mais duras da história americana, pelo frio, pela distância e pelo número de baixas." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  bagration: {
    terrain: [
      { t: "hill", x: 50, y: 66, rx: 30, ry: 6, l: "Pântanos do Pripiat" },
      { t: "note", x: 60, y: 41, l: "Rio Berezina" },
      { t: "note", x: 80, y: 41, l: "Rio Dnieper" },
      { t: "note", x: 62, y: 3, l: "Rio Dvina" },
      { t: "note", x: 14, y: 69, l: "Esquema, sem escala" },
      { t: "note", x: 96, y: 69, l: "Norte ↑" }
    ],
    units: [
      { id: "a1B", s: "a", k: "inf", w: 4, h: 8, l: "1ª Frente Báltica (Bagramian)" },
      { id: "a3B", s: "a", k: "inf", w: 4, h: 8, l: "3ª Bielorrussa (Tcherniakhovski)" },
      { id: "a2B", s: "a", k: "inf", w: 4, h: 8, l: "2ª Bielorrussa (Zakharov)" },
      { id: "a1Bel", s: "a", k: "inf", w: 4, h: 10, l: "1ª Bielorrussa (Rokossovski)" },
      { id: "a5T", s: "a", k: "tank", w: 6, h: 3, l: "5º Exército de Tanques (Rotmistrov)" },
      { id: "aPl", s: "a", k: "cav", w: 6, h: 3, l: "Grupo de Pliev" },
      { id: "b3P", s: "b", k: "inf", w: 4, h: 10, l: "3º Exército Panzer" },
      { id: "b4A", s: "b", k: "inf", w: 4, h: 12, l: "4º Exército" },
      { id: "b9A", s: "b", k: "inf", w: 4, h: 10, l: "9º Exército" },
      { id: "bVit", s: "b", k: "camp", w: 5, h: 3, l: "Vitebsk" },
      { id: "bOrs", s: "b", k: "camp", w: 5, h: 3, l: "Orsha" },
      { id: "bMog", s: "b", k: "camp", w: 5, h: 3, l: "Mogilev" },
      { id: "bBob", s: "b", k: "camp", w: 5, h: 3, l: "Bobruisk" },
      { id: "bMin", s: "b", k: "camp", w: 5, h: 3, l: "Minsk" },
      { id: "bRes", s: "b", k: "tank", w: 6, h: 3, l: "Reservas panzer" }
    ],
    steps: [
      { t: "Antes do ataque, junho de 1944. O Grupo de Exércitos Centro está em linha, com cidades transformadas em praças-fortes: Vitebsk, Orsha, Mogilev e Bobruisk. Quatro frentes soviéticas esperam a leste, e os tanques ainda estão atrás. Os alemães esperam o golpe no sul.",
        p: { a1B: [84, 7, 0], a3B: [86, 19, 0], a2B: [86, 31, 0], a1Bel: [84, 48, 0], a5T: [92, 24, 0], aPl: [84, 58, 0],
             b3P: [76, 10, 0], b4A: [78, 29, 0], b9A: [74, 49, 0], bVit: [71, 12, 0], bOrs: [73, 24, 0], bMog: [72, 33, 0], bBob: [64, 46, 0], bMin: [47, 33, 0], bRes: [38, 42, 0] } },
      { t: "22 e 23 de junho. Depois dos guerrilheiros cortarem as ferrovias, a 1ª Frente Báltica e a 3ª Bielorrussa atacam ao norte e ao sul de Vitebsk e rompem a linha em poucas horas. No eixo da estrada Moscou–Minsk, o ataque a Orsha começa em 23 de junho. A 2ª Bielorrussa vai a Mogilev.",
        p: { a1B: [72, 6, 90], a3B: [76, 18, 90], a2B: [80, 32, 0] } },
      { t: "24 de junho. A 1ª Frente Bielorrussa ataca o 9º Exército: o 3º Exército de Gorbatov vem do norte, o 65º de Batov, do sul. O grupo de Pliev entra pela borda dos pântanos do Pripiat para fechar a saída. O 5º Exército de Tanques da Guarda espera atrás da brecha de Orsha.",
        p: { a1Bel: [70, 44, 90], aPl: [66, 59, 0], a5T: [86, 24, 0] } },
      { t: "25 a 27 de junho. Em Vitebsk, o 43º e o 39º Exércitos fecham o cerco e destroem o LIII Corpo (cerca de 28.000 a 30.000 homens). Orsha é libertada em 26 de junho, e o 5º Exército de Tanques passa pela brecha rumo ao Berezina.",
        p: { a1B: [68, 8, 90], a3B: [71, 15, 90], a5T: [70, 25, 0], b3P: [76, 6, 0] }, x: ["bVit", "bOrs"] },
      { t: "27 a 29 de junho. Em Bobruisk, cinco divisões do XXXV Corpo ficam presas a leste do Berezina. A aviação e a artilharia soviéticas atingem as colunas que tentam fugir. O 9º Exército é dado como destruído em 28 de junho, e Bobruisk cai em 29. Cerca de 12.000 alemães escapam, quase sem armas.",
        p: { a1Bel: [64, 46, 90], aPl: [56, 54, 0] }, x: ["b9A", "bBob"] },
      { t: "28 de junho a 2 de julho. As vanguardas do 5º Exército de Tanques chegam ao Berezina em 28 de junho. Busch é demitido, e Model assume. Mogilev cai. O 4º Exército, enfim autorizado a recuar, corre para as travessias do Berezina sob bombardeio.",
        p: { a5T: [58, 28, 0], a2B: [68, 33, 90], b4A: [62, 32, 90] }, x: ["bMog"] },
      { t: "3 e 4 de julho. O 2º Corpo de Tanques da Guarda entra em Minsk de madrugada, e o 5º Exército de Tanques e o 65º Exército fecham o anel a oeste. O 4º Exército alemão e restos do 9º ficam presos num bolsão a leste de Minsk, cerca de 100.000 homens, dos quais uns 40.000 mortos ou desaparecidos. Minsk é libertada em 4 de julho.",
        p: { a5T: [40, 30, 0], aPl: [48, 48, 0], a1Bel: [56, 44, 0], a3B: [56, 28, 90], b4A: [52, 32, 0] }, x: ["bMin"] },
      { t: "4 a 13 de julho. A 1ª Frente Báltica toma Polotsk em 4 de julho. Molodechno cai em 5, e Vilnius é cercada em 8. A 6ª Divisão Panzer contra-ataca em 12 de julho e abre por pouco tempo um corredor, mas a cidade cai em 13. Em 17 de julho, cerca de 57.000 prisioneiros desfilam em Moscou.",
        p: { a1B: [58, 12, 90], a3B: [30, 22, 90], a5T: [34, 26, 0], bRes: [27, 28, 0] }, x: ["b4A"] },
      { t: "Fim de julho e agosto. A 1ª Frente Bielorrussa, na ofensiva de Lublin–Brest, toma Lublin em 24 de julho e Brest em 28 de julho, e chega ao Vístula. A operação termina em 19 de agosto, com os soviéticos exaustos e os alemães sem reservas.",
        p: { a1Bel: [14, 58, 90], aPl: [18, 54, 0], a2B: [40, 36, 0], a1B: [48, 8, 90], a5T: [24, 36, 0] } }
    ]
  },

  chosin: {
    terrain: [
      { t: "sea", x: 40, y: 4, w: 16, h: 34, l: "Reservatório de Chosin" },
      { t: "sea", x: 84, y: 40, w: 28, h: 36, l: "Mar do Japão" },
      { t: "hill", x: 56, y: 58, rx: 8, ry: 6, l: "Funchilin" },
      { t: "note", x: 22, y: 26, l: "Estrada de Yudam-ni" },
      { t: "note", x: 96, y: 4, l: "Norte ↑" },
      { t: "note", x: 12, y: 68, l: "Esquema, sem escala" }
    ],
    units: [
      { id: "m5", s: "a", k: "inf", w: 5, h: 3, l: "5º Fuzileiros (Yudam-ni)" },
      { id: "m7", s: "a", k: "inf", w: 5, h: 3, l: "7º Fuzileiros" },
      { id: "fox", s: "a", k: "camp", w: 4, h: 2.5, l: "Cia. Fox (Toktong)" },
      { id: "rct", s: "a", k: "inf", w: 5, h: 3, l: "RCT-31 (MacLean e Faith)" },
      { id: "hag", s: "a", k: "camp", w: 6, h: 4, l: "Hagaru-ri" },
      { id: "kot", s: "a", k: "camp", w: 6, h: 4, l: "Koto-ri" },
      { id: "dry", s: "a", k: "inf", w: 4, h: 2.5, l: "Força-tarefa Drysdale" },
      { id: "hun", s: "a", k: "camp", w: 6, h: 4, l: "Hungnam" },
      { id: "shp", s: "a", k: "ship", w: 5, h: 2.5, l: "Frota de evacuação" },
      { id: "p79", s: "b", k: "inf", w: 5, h: 3, l: "79ª Divisão" },
      { id: "p59", s: "b", k: "inf", w: 5, h: 3, l: "59ª Divisão" },
      { id: "pE", s: "b", k: "inf", w: 5, h: 3, l: "Divisões chinesas (leste)" },
      { id: "p172", s: "b", k: "inf", w: 5, h: 3, l: "172º e 173º Regimentos" },
      { id: "p180", s: "b", k: "inf", w: 5, h: 3, l: "180º Regimento" }
    ],
    steps: [
      { t: "Fim de novembro de 1950. A divisão está esticada ao longo da única estrada: os 5º e 7º Regimentos em Yudam-ni, uma companhia (a Fox) no desfiladeiro de Toktong, batalhões em Hagaru-ri, o 1º Regimento em Koto-ri e a RCT-31, do Exército, na margem leste. O porto de Hungnam está a 126 km. Os chineses esperam escondidos nas colinas.",
        p: { m5: [26, 13, 0], m7: [30, 19, 0], fox: [38, 28, 0], rct: [62, 14, 0], hag: [48, 41, 0], kot: [48, 53, 0], dry: [52, 55, 0], hun: [80, 62, 0], shp: [96, 52, 0],
             p79: [20, 6, 0], p59: [34, 20, 0], pE: [72, 8, 0], p172: [58, 34, 0], p180: [64, 50, 0] } },
      { t: "27 e 28 de novembro, à noite, a −38 °C. Os chineses atacam todos os pontos de uma vez: Yudam-ni, a Companhia Fox, a RCT-31 e Hagaru-ri. A estrada é cortada em vários lugares. Em Yudam-ni, os fuzileiros seguram a linha, e em Hagaru-ri os chineses tomam a colina do leste.",
        p: { p79: [24, 11, 0], p59: [37, 25, 0], pE: [64, 12, 0], p172: [52, 37, 0] } },
      { t: "29 de novembro. A força-tarefa Drysdale, com o 41º Comando britânico, sai de Koto-ri e abre caminho pela estrada até Hagaru-ri, sob fogo dos dois lados. Chega com uns 300 infantes e perde 162 mortos ou desaparecidos e 159 feridos. Na margem leste, o coronel MacLean desaparece no gelo.",
        p: { dry: [48, 46, 0], rct: [62, 18, 0] } },
      { t: "30 de novembro e 1º de dezembro. Os fuzileiros recebem a ordem de sair de Yudam-ni. A RCT-31, a leste, tenta romper o cerco ao longo da margem congelada. O tenente-coronel Faith morre em 1º de dezembro. De uns 2.500 homens, só cerca de 1.050 chegam a Hagaru-ri, e 385 podem lutar.",
        p: { rct: [58, 32, 0], m5: [28, 15, 0], m7: [32, 21, 0] } },
      { t: "1º e 2 de dezembro. A pista de Hagaru-ri abre em 1º de dezembro, e os feridos passam a sair de avião. Em 2 de dezembro, a Companhia Fox, que aguentou cinco dias, e o 1º Batalhão do 7º Regimento liberam o desfiladeiro de Toktong, abrindo a estrada entre Yudam-ni e Hagaru-ri.",
        p: { rct: [52, 43, 0], m7: [36, 25, 0], fox: [38, 27, 0] } },
      { t: "3 e 4 de dezembro. A coluna de Yudam-ni, com o 7º Regimento na frente e o 5º na retaguarda, chega a Hagaru-ri na tarde de 3 de dezembro. A retirada termina em 4 de dezembro. Por essa época se atribui a Smith: 'Estamos só avançando em outra direção'.",
        p: { m7: [46, 38, 0], m5: [40, 31, 0], fox: [42, 34, 0], p79: [30, 15, 0], p59: [38, 27, 0] } },
      { t: "6 e 7 de dezembro. A coluna sai de Hagaru-ri e chega a Koto-ri em 7 de dezembro, com os chineses atacando os flancos e a retaguarda ao longo da estrada.",
        p: { m7: [50, 52, 0], m5: [48, 46, 0], dry: [45, 50, 0], fox: [47, 44, 0], p172: [54, 44, 0] } },
      { t: "9 a 11 de dezembro. Em Funchilin, o 180º Regimento chinês dinamita a ponte. Seções de ponte lançadas de paraquedas são montadas em 9 de dezembro, o mesmo dia em que a colina 1081 é tomada. Os últimos homens saem do desfiladeiro em 11 de dezembro.",
        p: { m7: [60, 58, 0], m5: [54, 54, 0], dry: [57, 56, 0], p180: [62, 52, 0] }, x: ["p180"] },
      { t: "11 a 24 de dezembro. No perímetro de Hungnam, 193 navios levam cerca de 105.000 soldados, 98.000 civis, 17.500 veículos e 350.000 toneladas de suprimentos. O último soldado da ONU parte às 14h36 de 24 de dezembro. O Meredith Victory levou uns 14.000 refugiados.",
        p: { m5: [76, 62, 0], m7: [78, 66, 0], dry: [74, 64, 0], shp: [90, 58, 0] } }
    ]
  }
});

Object.assign(GLOSSARY, {
  "grupo aéreo embarcado": "Conjunto de aviões de um porta-aviões: caças, bombardeiros de mergulho e aviões torpedeiros. Cada porta-aviões tinha o seu, com algumas dezenas de aparelhos.",
  "vapor de gasolina": "A gasolina de aviação evapora fácil, e o vapor explode com uma simples faísca. Em um navio, um vazamento nos tanques de combustível pode virar uma bomba horas depois do ataque.",
  "frota móvel japonesa": "Nome da principal força de porta-aviões da Marinha Imperial japonesa, a partir de 1944, sob o almirante Ozawa.",
  "petroleiro de esquadra": "Navio-tanque que acompanha a esquadra para reabastecer os outros navios no mar. Sem ele, os porta-aviões e os cruzadores não ficam muito tempo longe da base.",
  "submarino de esquadra": "Submarino grande, feito para acompanhar esquadras e atacar navios de guerra. Os americanos os usavam como sentinelas e caçadores.",
  "linha gustav": "Linha de defesa alemã que cortava a Itália central de lado a lado, apoiada em montanhas e rios. A cidade de Cassino e o monte acima dela eram o seu ponto mais forte.",
  "gurcas": "Soldados do Nepal que serviam no exército britânico e indiano, famosos pela coragem e pelo facão curvo, o kukri.",
  "goumiers": "Soldados marroquinos das tropas francesas, recrutados nas montanhas do Atlas. Em 1944, ficaram famosos por marchar por montanhas que os alemães julgavam intransponíveis.",
  "linha hitler": "Segunda linha de defesa alemã, atrás da Gustav, no vale do rio Liri. Os alemães a construíram para ter onde recuar.",
  "abadia de cassino": "Mosteiro beneditino fundado por São Bento por volta de 529, no alto do monte Cassino. Dominava a cidade e a estrada para Roma."
});

Object.assign(DEEP, {
  marcoral: {
    war: "Guerra do Pacífico (1941–1945)",
    hook: "Duas esquadras de porta-aviões lutaram sem nunca se ver, e o Japão foi barrado pela primeira vez.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Pearl Harbor, o Japão conquistou em poucos meses as Filipinas, a Malásia, as Índias Orientais Holandesas e boa parte do Pacífico. Em 1942, quis dar mais um passo: a Operação MO. O plano era tomar Tulagi, nas ilhas Salomão, e Port Moresby, na Nova Guiné, de onde os japoneses ficariam perto da Austrália. A operação era comandada pelo vice-almirante Shigeyoshi Inoue.",
        "Mas os americanos já tinham decifrado os códigos navais japoneses e sabiam do plano. O almirante Frank Jack Fletcher foi mandado ao mar de Coral com os porta-aviões Yorktown e Lexington.",
        { h: "O caminho até o mar de Coral" },
        { timeline: [
          ["3 mai. 1942", "Os japoneses ocupam Tulagi, que estava sem defesa."],
          ["4 mai.", "Os aviões do Yorktown atacam Tulagi e afundam um contratorpedeiro e vários varredores de minas."],
          ["5–6 mai.", "Os dois lados se procuram sem se achar. Os porta-aviões chegam a ficar a uns 130 km um do outro, de noite."],
          ["7 mai.", "Os dois lados atacam alvos errados. Os americanos afundam o porta-aviões leve Shoho."],
          ["8 mai.", "Os porta-aviões se atacam. O Lexington é perdido, o Shokaku é danificado."]
        ]},
        "Era a primeira vez na história que dois grupos de porta-aviões lutavam entre si, e os navios nunca chegaram a se ver nem a se atirar. Toda a batalha foi feita por aviões, a dezenas de quilômetros de distância."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "O lado americano e australiano" },
        "O contra-almirante Frank Jack Fletcher comandava a Força-Tarefa 17 (porta-aviões Yorktown) e era o comandante geral. O contra-almirante Aubrey Fitch comandava a Força-Tarefa 11, com o Lexington. O contra-almirante John Crace chefiava um grupo de cruzadores australianos e americanos.",
        { h: "O lado japonês" },
        "O vice-almirante Inoue comandava a Operação MO de longe. O vice-almirante Takeo Takagi liderava a força de ataque dos porta-aviões, com o Shokaku e o Zuikaku. O contra-almirante Chuichi Hara comandava os aviões embarcados. O contra-almirante Aritomo Goto cobria a força de Tulagi com o porta-aviões leve Shoho.",
        { h: "Um piloto" },
        "Robert Dixon, piloto do Lexington, deu o sinal de que o ataque ao Shoho tinha dado certo, com a mensagem que ficou famosa: 'Scratch one flat top!' (Risquem um porta-aviões!)."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "No dia 7 de maio, os dois porta-aviões americanos levavam cerca de 128 aviões (66 no Lexington e 62 no Yorktown), o [[grupo aéreo|grupo aéreo embarcado]] de cada um, segundo uma contagem. Os três japoneses tinham cerca de 139 (58 no Shokaku, 63 no Zuikaku e 18 no Shoho). Os números reais de cada dia variam com os aviões danificados e perdidos.",
        { h: "O terreno" },
        "Um mar aberto, entre a Nova Guiné, as ilhas Salomão e a costa nordeste da Austrália, com céu nublado em alguns trechos. As nuvens ajudaram os dois lados a se esconder e atrapalharam as buscas, e foi uma das razões dos erros de identificação dos dois dias.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, em 3 de maio, os japoneses ocuparam Tulagi sem luta. O comboio de invasão de Port Moresby saiu de Rabaul, com os porta-aviões em apoio.",
        "Segundo, em 4 de maio, o Yorktown, informado pelos códigos, mandou aviões a Tulagi e afundou o contratorpedeiro Kikuzuki e vários varredores de minas.",
        "Terceiro, em 5 e 6 de maio, os grupos americanos se juntaram e reabasteceram. Os dois lados procuraram o inimigo sem achar. Numa das noites, os porta-aviões chegaram a ficar a cerca de 70 milhas náuticas um do outro.",
        "Quarto, em 7 de maio, a manhã foi de erros. Aviões japoneses acharam o petroleiro Neosho e o contratorpedeiro Sims e os tomaram por porta-aviões. O Sims partiu-se em dois e afundou, e só 14 dos 192 tripulantes se salvaram. O Neosho, atingido por sete bombas, ficou à deriva.",
        "Quinto, às 10h40, aviões americanos acharam o Shoho. Os do Lexington o acertaram com duas bombas de 1.000 libras e cinco torpedos, e os do Yorktown acrescentaram mais. O Shoho afundou às 11h35, e só 203 dos 834 tripulantes foram recolhidos.",
        "Sexto, à tarde, bombardeiros japoneses de Rabaul atacaram os cruzadores de Crace e, achando que tinham afundado um encouraçado, só os danificaram de leve. Crace avisou Fletcher que não podia cumprir a missão sem cobertura aérea. Na noite, os caças americanos, guiados por radar, derrubaram sete aviões torpedeiros e um bombardeiro de mergulho japoneses, e o ataque foi cancelado.",
        "Sétimo, em 8 de maio, às 8h20, um piloto do Lexington achou os porta-aviões japoneses. Dois minutos depois, um avião do Shokaku achou os americanos. Os japoneses lançaram 69 aviões e os americanos, 75. O Shokaku levou três bombas e teve a pista destruída, e se retirou às 12h10. O Yorktown levou uma bomba, que matou ou feriu gravemente 66 homens. O Lexington levou dois torpedos e duas bombas.",
        "Oitavo, os incêndios no Lexington pareciam controlados, mas às 12h47 uma faísca acendeu o [[vapor de gasolina]] dos tanques rompidos, e houve explosões. A tripulação abandonou o navio às 17h07, e o contratorpedeiro Phelps o afundou com torpedos às 19h15. Fletcher, achando que enfrentava forças maiores, retirou-se. Takagi disse a Inoue que tinha afundado dois porta-aviões, mas, sem aviões suficientes, não podia cobrir a invasão. Inoue mandou o comboio voltar."
      ]},
      { n: "04", title: "Legado", blocks: [
        "Os americanos perderam o Lexington, o Sims e o Neosho (41.826 toneladas longas). Os japoneses perderam o Shoho, um contratorpedeiro e vários navios pequenos (cerca de 19.000 toneladas). Em aviadores, o Japão perdeu 90 e os Estados Unidos, 35. A Wikipédia em inglês dá cerca de 715 mortos aliados e 966 japoneses, e cerca de 69 aviões destruídos de cada lado (69 a 97, no caso dos japoneses).",
        { h: "Vitória tática, derrota estratégica" },
        "Em navios afundados, os japoneses ganharam. Mas era a primeira vez, desde o início da guerra, que um grande avanço japonês era barrado: Inoue cancelou o desembarque em Port Moresby. E o custo apareceu um mês depois. O Shokaku precisava de dois a três meses de reparos, e o Zuikaku ficou sem aviões e pilotos. Nenhum dos dois estava em Midway. O Yorktown foi consertado em três dias e foi para lá.",
        { note: "Quem venceu? Os historiadores falam em vitória tática japonesa e vitória estratégica aliada. Os próprios comandantes não tinham certeza: Takagi achou que tinha afundado dois porta-aviões americanos, e Fletcher recuou temendo forças maiores. Segundo a Wikipédia em inglês, o almirante Yamamoto ainda mandou Inoue completar a invasão, mas Inoue manteve a ordem de recuo." },
        { note: "Erros de identificação. Em 7 de maio, os japoneses atacaram um petroleiro e um contratorpedeiro, tomados por porta-aviões. A batalha mostra como era difícil achar e identificar navios do ar, com mau tempo e relatórios errados." }
      ]}
    ]
  },

  marfilipinas: {
    war: "Campanha das Marianas, Guerra do Pacífico (1944)",
    hook: "Em dois dias, o Japão perdeu cerca de 90% dos aviões dos seus porta-aviões.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 15 de junho de 1944, os fuzileiros navais americanos desembarcaram em Saipan, nas ilhas Marianas. De Saipan, os bombardeiros americanos alcançariam o Japão. Para o Japão, perder as Marianas era perder a defesa do país. A Marinha Imperial adotou então a Operação A-Go, um plano para uma batalha decisiva contra a esquadra americana, baseado nos documentos que os americanos recuperaram depois da morte do almirante Koga.",
        { h: "O caminho até as Marianas" },
        { timeline: [
          ["Início de jun. 1944", "O Japão adota a Operação A-Go."],
          ["15 jun.", "Os americanos desembarcam em Saipan."],
          ["19 jun.", "Quatro ondas de ataque japonesas. Os submarinos Albacore e Cavalla afundam o Taiho e o Shokaku."],
          ["20 jun.", "Os americanos atacam ao entardecer, no limite do alcance. Os aviões voltam de noite."]
        ]},
        "O plano japonês era usar aviões baseados em terra, nas Marianas, e os dos porta-aviões. Os americanos já estavam em Saipan, e o plano dependia de pilotos treinados, e o Japão tinha poucos."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Raymond Spruance e Marc Mitscher" },
        "O almirante Raymond Spruance comandava a 5ª Frota, e o vice-almirante Marc Mitscher, a Força-Tarefa 58, com os porta-aviões. Willis Lee comandava a linha de encouraçados. O capitão Arleigh Burke era o chefe de estado-maior de Mitscher. Spruance era cauteloso, e sua missão era proteger o desembarque em Saipan.",
        { h: "Jisaburo Ozawa" },
        "O almirante Jisaburo Ozawa comandava a Frota Móvel japonesa, com o Taiho como capitânia. Ele precisava de uma vitória decisiva, mas seus pilotos tinham pouco treino, e os aviões eram inferiores aos novos Hellcat americanos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Força-Tarefa 58 tinha 7 porta-aviões de esquadra, 8 leves, 7 encouraçados e cerca de 900 aviões embarcados. A Frota Móvel tinha 3 porta-aviões de esquadra, 6 leves, 5 encouraçados e cerca de 450 aviões embarcados, mais uns 300 aviões baseados em terra.",
        { h: "O terreno" },
        "Mar aberto, a oeste das Marianas. Os americanos ficaram entre os japoneses e Saipan.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, depois do desembarque em Saipan, o plano japonês entrou em marcha. A [[frota móvel japonesa]] veio do oeste, e a Força-Tarefa 58 ficou a oeste de Saipan, para proteger o desembarque.",
        "Segundo, em 19 de junho, os japoneses lançaram quatro ataques. O primeiro, com 68 aviões, foi quase destruído pelos Hellcat. O segundo, com 107 aviões, perdeu 97. O terceiro foi quase todo barrado, e o quarto foi apanhado sobre o campo de Orote, em Guam.",
        "Terceiro, a destruição dos aviões japoneses foi tão grande que ficou conhecida como 'Great Marianas Turkey Shoot', o 'tiro ao peru' das Marianas. O artigo da Wikipédia em inglês fala em mais de 350 aviões japoneses perdidos nesse dia, e entre 23 e 30 americanos.",
        "Quarto, enquanto isso, os [[submarinos|submarino de esquadra]] americanos atacavam. O Albacore acertou o Taiho, que mais tarde explodiu, quando o vapor nos hangares se incendiou. O Cavalla afundou o Shokaku com três torpedos.",
        "Quinto, Mitscher pediu para ir para o oeste durante a noite, atrás dos japoneses, mas Spruance recusou, principalmente para proteger a frota de invasão. Muitos aviadores criticaram a cautela dele.",
        "Sexto, em 20 de junho, às 15h40, um avião achou a Frota Móvel. Mitscher lançou 226 aviões no limite do alcance. Os aviões afundaram um [[petroleiro|petroleiro de esquadra]] e, segundo o artigo, o Hiyo, e danificaram o Zuikaku, o Junyo, o Chiyoda e o encouraçado Haruna.",
        "Sétimo, os aviões voltaram de noite, sem combustível. Mitscher mandou acender as luzes da frota, e os pilotos puderam pousar em qualquer convés. Vinte aviões foram perdidos em combate, e 80 na volta. Cerca de três quartos dos tripulantes foram resgatados.",
        "Oitavo, a Frota Móvel se retirou. Os japoneses tinham perdido os porta-aviões Taiho, Shokaku e Hiyo, e quase todos os aviões embarcados."
      ]},
      { n: "04", title: "Legado", blocks: [
        "Dos 373 aviões embarcados lançados nos quatro ataques, 243 se perderam, segundo a Wikipédia em inglês. Ao todo, perto de 480 aviões foram abatidos, segundo o texto do artigo, e a ficha dá entre 550 e 645 aviões japoneses destruídos. Os americanos perderam cerca de 123 aviões e, segundo a ficha (sem fonte), cerca de 109 homens. O Japão perdeu cerca de 2.987 mortos (estimativa).",
        { h: "Por que o Japão perdeu" },
        "O Japão tinha perdido muitos pilotos em batalhas anteriores e tinha poucos substitutos treinados. Seus aviões, como o Zero e o D4Y, eram superados pelo Hellcat. O Japão perdeu cerca de 90% dos aviões embarcados em dois dias, e a Marinha nunca recuperou a força dos porta-aviões.",
        { note: "A cautela de Spruance. O almirante John Towers exigiu que Spruance fosse afastado, mas Nimitz recusou. King e Turner o apoiaram. Spruance protegeu Saipan, mas deixou escapar a maior parte da frota japonesa." },
        { note: "Os números variam. O artigo da Wikipédia em inglês dá totais diferentes no texto e na ficha: 346 aviões japoneses perdidos em 19 de junho e nunca menos de 480 no total, contra 550 a 645 na ficha. Por isso damos faixas." }
      ]}
    ]
  },

  montecassino: {
    war: "Campanha da Itália, Segunda Guerra Mundial (1943–1945)",
    hook: "Quatro ataques em quatro meses para tomar um monte, e a abadia de 1.400 anos virou ruínas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1943, os Aliados desembarcaram na Itália, e a Itália mudou de lado. Mas os alemães não foram embora: ocuparam o país e montaram, no centro, uma linha de defesa, a [[linha Gustav]]. O ponto mais forte era a cidade de Cassino, sob o monte Cassino, no alto do qual ficava a [[abadia de cassino]]. A estrada para Roma passava ao pé do monte.",
        { h: "Quatro batalhas" },
        { timeline: [
          ["17 jan. 1944", "Primeira batalha: o X Corpo britânico atravessa o Garigliano."],
          ["20 jan.", "A 36ª Divisão americana tenta atravessar o rio Gari e fracassa."],
          ["15 fev.", "Segunda batalha: bombardeio da abadia."],
          ["15 mar.", "Terceira batalha: bombardeio da cidade."],
          ["11 mai.", "Quarta batalha: Operação Diadem."],
          ["18 mai.", "Uma bandeira polonesa é hasteada sobre as ruínas."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Os comandantes aliados" },
        "O general Harold Alexander comandava o conjunto dos exércitos aliados na Itália. O general americano Mark Clark comandava o 5º Exército, e o britânico Oliver Leese, o 8º Exército. O general Alphonse Juin comandava o Corpo Expedicionário Francês, o neozelandês Bernard Freyberg, o Corpo da Nova Zelândia, e o polonês Władysław Anders, o II Corpo polonês.",
        { h: "Os alemães" },
        "O marechal Albert Kesselring comandava o conjunto das forças alemãs na Itália. O general Heinrich von Vietinghoff comandava o 10º Exército, e Fridolin von Senger und Etterlin, o XIV Corpo Panzer, que defendia Cassino. A defesa foi feita em boa parte pela 1ª Divisão de Paraquedistas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A ficha da Wikipédia em inglês dá cerca de 240.000 aliados, com 1.900 tanques e 4.000 aviões, contra cerca de 140.000 alemães.",
        { h: "O terreno" },
        "O vale do rio Liri, fechado por montanhas dos dois lados. A leste, o rio Gari (ou Rapido), e ao fundo o monte Cassino, com a abadia no alto e a cidade aos pés. Ao sul, os montes Aurunci. Quem tinha o monte via todo o vale.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, no começo de janeiro de 1944, a linha Gustav estava montada, com os paraquedistas alemães nas encostas e na cidade.",
        "Segundo, em 17 de janeiro, o X Corpo britânico atravessou o Garigliano. Em 20 de janeiro, a 36ª Divisão americana atacou através do Gari e fracassou: o 141º Regimento foi quase destruído, e só uns 40 homens voltaram. A 34ª Divisão atacou ao norte de Cassino a partir de 24 de janeiro e foi retirada em 11 de fevereiro, com cerca de 2.200 baixas. Em 22 de janeiro, os Aliados desembarcaram em Anzio, atrás das linhas alemãs, para forçar a saída.",
        "Terceiro, em 15 de fevereiro, 142 B-17, 47 B-25 e 40 B-26 bombardearam a abadia, com cerca de 1.150 toneladas de bombas. A abadia foi destruída. Cerca de 230 civis italianos que se abrigavam nela morreram, e não há provas de que o bombardeio tenha matado soldados alemães. Os paraquedistas ocuparam as ruínas. A 4ª Divisão indiana atacou e fracassou, e o ataque foi cancelado em 18 de fevereiro. O Regimento Royal Sussex perdeu 12 dos 15 oficiais e 162 dos 313 homens em duas noites.",
        "Quarto, em 15 de março, aviões lançaram cerca de 750 toneladas de bombas sobre a cidade. O Corpo da Nova Zelândia atacou. Em 17 de março, o 1º Batalhão do 9º Regimento de Gurcas segurava a colina do Carrasco (Hangman's Hill, ponto 435), a uns 230 metros da abadia. O ataque foi cancelado em 22 ou 23 de março. A 4ª Divisão indiana perdeu 3.000 homens, e a 2ª Divisão neozelandesa, 1.600.",
        "Quinto, às 23h de 11 de maio começou a Operação Diadem, com 1.060 canhões na frente do 8º Exército e 600 na do 5º. Atacaram o XIII Corpo britânico, o II Corpo americano, o Corpo Expedicionário Francês (com cerca de 7.800 [[goumiers]]) e o II Corpo polonês.",
        "Sexto, em 14 de maio, os goumiers contornaram a defesa alemã pelos montes Aurunci, paralelos ao vale do Liri.",
        "Sétimo, os poloneses tomaram o monte Calvário e o perderam para um contra-ataque dos paraquedistas. O ataque de três dias custou ao II Corpo polonês 281 oficiais e 3.503 outros postos. Anders atacou de novo em 17 de maio, e os alemães recuaram para a [[linha Hitler]]. Em 18 de maio, uma patrulha do 12º Regimento de Cavalaria da Podólia hasteou uma bandeira polonesa sobre as ruínas, às 10h20.",
        "Oitavo, os canadenses romperam a linha Hitler em 24 de maio, e os poloneses tomaram Piedimonte em 25 de maio. Roma caiu em 4 de junho de 1944 (5 de junho, segundo uma seção do artigo)."
      ]},
      { n: "04", title: "Legado", blocks: [
        "As perdas são discutidas. A ficha da Wikipédia em inglês dá de 55.000 a 105.000 baixas aliadas e de 20.000 a 80.000 alemãs, e cerca de 2.000 civis mortos. O artigo fala em mais de 43.000 baixas aliadas na tomada final do monte e cerca de 51.000 alemãs. Segundo uma fonte citada, 1.052 poloneses morreram na batalha.",
        { h: "O bombardeio da abadia" },
        { note: "Os alemães estavam na abadia? Em dezembro de 1943, os alemães combinaram com o Vaticano não ocupar o mosteiro. A história oficial britânica conclui que os alemães não fizeram uso militar dos prédios até depois do bombardeio. A versão oficial americana mudou: a frase que dava como 'irrefutável' o uso alemão foi retirada em 1961, e o registro final do Exército, de 1969, concluiu que a abadia estava, de fato, desocupada." },
        { note: "Os tesouros salvos. No outono de 1943, o capitão Maximilian Becker e o tenente-coronel Julius Schlegel, da Divisão Hermann Göring, organizaram a retirada de obras de arte da abadia para o Vaticano e o Castel Sant'Angelo, concluída nos primeiros dias de novembro. Entre elas havia obras de Ticiano, El Greco e Goya." },
        { h: "A memória" },
        "O cemitério militar polonês é o cemitério aliado mais próximo da abadia, que foi reconstruída e é visível dele. Em 1944, Feliks Konarski escreveu a canção 'Czerwone maki na Monte Cassino' ('As papoulas vermelhas de Monte Cassino'), que virou um hino para os poloneses."
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  marcoral: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 16, y: 4, rx: 24, ry: 8, l: "Nova Guiné" },
      { t: "hill", x: 90, y: 6, rx: 16, ry: 6, l: "Ilhas Salomão" },
      { t: "hill", x: 52, y: 22, rx: 12, ry: 3, l: "Ilhas Louisiade" },
      { t: "note", x: 20, y: 68, l: "Austrália ↓" },
      { t: "note", x: 96, y: 69, l: "Norte ↑" }
    ],
    units: [
      { id: "aY", s: "a", k: "ship", w: 5, h: 2.5, l: "Yorktown (Fletcher)" },
      { id: "aL", s: "a", k: "ship", w: 5, h: 2.5, l: "Lexington (Fitch)" },
      { id: "aC", s: "a", k: "ship", w: 6, h: 2.5, l: "Cruzadores de Crace" },
      { id: "aSN", s: "a", k: "ship", w: 4, h: 2, l: "Sims e Neosho" },
      { id: "aAir", s: "a", k: "air", w: 3.5, h: 3.5, l: "Aviões americanos" },
      { id: "bShk", s: "b", k: "ship", w: 5, h: 2.5, l: "Shokaku" },
      { id: "bZui", s: "b", k: "ship", w: 5, h: 2.5, l: "Zuikaku" },
      { id: "bSho", s: "b", k: "ship", w: 4, h: 2.2, l: "Shoho" },
      { id: "bInv", s: "b", k: "ship", w: 6, h: 2, l: "Comboio de Port Moresby" },
      { id: "bTul", s: "b", k: "ship", w: 5, h: 2, l: "Força de Tulagi" },
      { id: "bAir", s: "b", k: "air", w: 3.5, h: 3.5, l: "Aviões japoneses" }
    ],
    steps: [
      { t: "3 de maio de 1942. Os japoneses ocupam Tulagi, nas Salomão, sem luta. O comboio de invasão de Port Moresby sai de Rabaul, com o porta-aviões leve Shoho em cobertura, e os porta-aviões Shokaku e Zuikaku vêm atrás. Os americanos esperam ao sul, avisados pelos códigos.",
        p: { aY: [62, 50, 0], aL: [60, 56, 0], aC: [46, 46, 0], aSN: [68, 61, 0], aAir: [68, 50, 0], bShk: [78, 22, 0], bZui: [82, 26, 0], bSho: [62, 14, 0], bInv: [52, 10, 0], bTul: [84, 14, 0], bAir: [76, 16, 0] } },
      { t: "4 de maio. Os aviões do Yorktown atacam Tulagi e afundam o contratorpedeiro Kikuzuki e vários varredores de minas.",
        p: { aY: [76, 34, 0], aAir: [82, 20, 0] } },
      { t: "5 e 6 de maio. Os grupos americanos se juntam e reabastecem. Os dois lados se procuram e não se acham. De noite, os porta-aviões chegam a ficar a cerca de 70 milhas náuticas um do outro.",
        p: { aY: [62, 50, 0], aL: [62, 54, 0], aAir: [64, 46, 0], bShk: [72, 34, 0], bZui: [76, 38, 0], bAir: [72, 30, 0] } },
      { t: "7 de maio, de manhã. Aviões japoneses acham o petroleiro Neosho e o contratorpedeiro Sims e os tomam por porta-aviões. O Sims afunda e o Neosho fica à deriva.",
        p: { bAir: [68, 56, 0] }, x: ["aSN"] },
      { t: "7 de maio, 10h40 às 11h35. Aviões americanos acham o Shoho e o afundam. Dixon manda a mensagem 'Scratch one flat top!'.",
        p: { aAir: [58, 22, 0], aY: [62, 44, 0], aL: [62, 48, 0] }, x: ["bSho"] },
      { t: "7 de maio, à tarde. Bombardeiros de Rabaul atacam os cruzadores de Crace e causam só danos leves. À noite, os caças americanos, guiados por radar, desfazem um ataque japonês.",
        p: { bAir: [46, 40, 0], aAir: [66, 40, 0] } },
      { t: "8 de maio. Os porta-aviões se atacam à distância. O Shokaku leva três bombas e se retira. O Yorktown leva uma bomba. O Lexington leva dois torpedos e duas bombas.",
        p: { aY: [68, 36, 0], aL: [68, 40, 0], aAir: [72, 28, 0], bShk: [74, 22, 0], bZui: [82, 26, 0], bAir: [70, 34, 0] } },
      { t: "8 de maio, tarde e noite. Explosões de vapor de gasolina condenam o Lexington, afundado por um contratorpedeiro às 19h52. Fletcher se retira. Inoue manda o comboio de invasão voltar, e Port Moresby fica para depois. O Shokaku vai ao Japão para reparos.",
        p: { aY: [58, 58, 0], bShk: [90, 8, 0], bZui: [84, 12, 0], bInv: [54, 4, 0], aAir: [60, 54, 0], bAir: [80, 16, 0] }, x: ["aL"] }
    ]
  },

  marfilipinas: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 78, l: "" },
      { t: "hill", x: 10, y: 20, rx: 4, ry: 6, l: "Saipan" },
      { t: "hill", x: 10, y: 44, rx: 4, ry: 5, l: "Guam" },
      { t: "note", x: 96, y: 69, l: "Norte ↑" },
      { t: "note", x: 20, y: 69, l: "Esquema, sem escala" }
    ],
    units: [
      { id: "aCV", s: "a", k: "ship", w: 8, h: 4, l: "Porta-aviões americanos (Mitscher)" },
      { id: "aBB", s: "a", k: "ship", w: 4, h: 12, l: "Encouraçados (Lee)" },
      { id: "aSub", s: "a", k: "ship", w: 3, h: 1.6, l: "Submarinos Albacore e Cavalla" },
      { id: "aAir", s: "a", k: "air", w: 3.5, h: 3.5, l: "Hellcat e aviões de ataque" },
      { id: "bTai", s: "b", k: "ship", w: 5, h: 2.5, l: "Taiho (Ozawa)" },
      { id: "bShk", s: "b", k: "ship", w: 5, h: 2.5, l: "Shokaku" },
      { id: "bCV", s: "b", k: "ship", w: 8, h: 4, l: "Outros porta-aviões japoneses" },
      { id: "bAir", s: "b", k: "air", w: 3.5, h: 3.5, l: "Ataques japoneses" },
      { id: "bGuam", s: "b", k: "air", w: 3, h: 3, l: "Aviões de Guam" }
    ],
    steps: [
      { t: "15 a 18 de junho de 1944. Os americanos desembarcam em Saipan. A Força-Tarefa 58 fica a oeste da ilha, protegendo o desembarque. A Frota Móvel japonesa vem do oeste, com 9 porta-aviões e cerca de 450 aviões embarcados.",
        p: { aCV: [24, 26, 0], aBB: [34, 24, 0], aSub: [60, 34, 0], aAir: [24, 30, 0], bTai: [86, 28, 0], bShk: [88, 34, 0], bCV: [82, 24, 0], bAir: [80, 30, 0], bGuam: [12, 44, 0] } },
      { t: "19 de junho, de manhã. Os japoneses lançam quatro ataques. O primeiro, com 68 aviões, é quase todo destruído pelos Hellcat. O segundo, com 107, perde 97.",
        p: { bAir: [52, 28, 0], aAir: [44, 28, 0] } },
      { t: "19 de junho. O terceiro ataque é quase todo barrado, e o quarto é apanhado sobre o campo de Orote, em Guam. O dia ficou conhecido como 'Great Marianas Turkey Shoot'. Os japoneses perdem mais de 350 aviões em um dia.",
        p: { bAir: [36, 28, 0], bGuam: [14, 42, 0], aAir: [30, 30, 0] }, x: ["bGuam"] },
      { t: "19 de junho. Os submarinos americanos atacam. O Albacore acerta o Taiho, que explode depois com os vapores nos hangares. O Cavalla afunda o Shokaku com três torpedos.",
        p: { aSub: [78, 30, 0], bAir: [60, 28, 0] }, x: ["bTai", "bShk"] },
      { t: "Noite de 19 para 20. Mitscher quer ir para o oeste atrás dos japoneses, mas Spruance recusa, para proteger Saipan. Os aviadores criticam a cautela.",
        p: { aCV: [28, 26, 0], aBB: [36, 26, 0], bCV: [88, 24, 0] } },
      { t: "20 de junho, 15h40. Um avião acha a Frota Móvel. Mitscher lança 226 aviões no limite do alcance. Eles afundam um petroleiro e o Hiyo e danificam o Zuikaku, o Junyo, o Chiyoda e o Haruna.",
        p: { aAir: [76, 26, 0], aCV: [46, 26, 0], aBB: [52, 28, 0], bCV: [84, 24, 0] } },
      { t: "20 de junho, à noite. Os aviões voltam sem combustível. Mitscher manda acender as luzes da frota, e os pilotos pousam em qualquer convés. Vinte aviões se perdem em combate e 80 na volta. Cerca de três quartos dos tripulantes são resgatados.",
        p: { aAir: [50, 26, 0], aCV: [48, 28, 0] } },
      { t: "Depois. A Frota Móvel se retira. O Japão perdeu três porta-aviões (Taiho, Shokaku e Hiyo) e cerca de 90% dos aviões embarcados. A Marinha japonesa nunca recuperou a força dos porta-aviões.",
        p: { bCV: [96, 22, 0], aCV: [40, 26, 0] } }
    ]
  },

  montecassino: {
    terrain: [
      { t: "hill", x: 44, y: 24, rx: 9, ry: 9, l: "Monte Cassino (abadia)" },
      { t: "hill", x: 24, y: 50, rx: 18, ry: 10, l: "Montes Aurunci" },
      { t: "sea", x: -8, y: 58, w: 36, h: 18, l: "Mar Tirreno" },
      { t: "note", x: 60, y: 44, l: "Rio Gari" },
      { t: "note", x: 96, y: 69, l: "Norte ↑" }
    ],
    units: [
      { id: "aX", s: "a", k: "inf", w: 8, h: 3, l: "X Corpo britânico" },
      { id: "a36", s: "a", k: "inf", w: 6, h: 3, l: "36ª Div. americana" },
      { id: "a34", s: "a", k: "inf", w: 6, h: 3, l: "34ª Div. americana" },
      { id: "a4I", s: "a", k: "inf", w: 6, h: 3, l: "4ª Div. indiana" },
      { id: "aNZ", s: "a", k: "inf", w: 6, h: 3, l: "Corpo neozelandês" },
      { id: "aPol", s: "a", k: "inf", w: 6, h: 3, l: "II Corpo polonês (Anders)" },
      { id: "aFr", s: "a", k: "inf", w: 6, h: 3, l: "Corpo francês e goumiers" },
      { id: "aBr", s: "a", k: "inf", w: 6, h: 3, l: "XIII Corpo britânico" },
      { id: "aBmb", s: "a", k: "air", w: 3.5, h: 3.5, l: "Bombardeiros aliados" },
      { id: "bGus", s: "b", k: "inf", w: 3, h: 38, l: "Linha Gustav (paraquedistas)" },
      { id: "bAb", s: "b", k: "camp", w: 6, h: 3, l: "Abadia" },
      { id: "bCas", s: "b", k: "camp", w: 6, h: 3, l: "Cassino" },
      { id: "bHit", s: "b", k: "inf", w: 2, h: 24, l: "Linha Hitler" }
    ],
    steps: [
      { t: "Janeiro de 1944. A linha Gustav corta a Itália central. Os paraquedistas alemães ocupam as encostas do monte Cassino e a cidade. Os Aliados estão a leste e ao sul. Mais atrás, os alemães preparam a linha Hitler.",
        p: { aX: [72, 62, 0], a36: [68, 50, 0], a34: [64, 14, 0], a4I: [74, 24, 0], aNZ: [74, 36, 0], aPol: [78, 12, 0], aFr: [66, 56, 0], aBr: [78, 48, 0], aBmb: [86, 40, 0],
             bGus: [44, 36, 0], bAb: [44, 24, 0], bCas: [48, 40, 0], bHit: [28, 44, 0] } },
      { t: "17 de janeiro a 11 de fevereiro. Primeira batalha. O X Corpo britânico atravessa o Garigliano. A 36ª Divisão americana ataca pelo Gari em 20 de janeiro e fracassa. A 34ª Divisão, ao norte, perde cerca de 2.200 homens. Em 22 de janeiro, os Aliados desembarcam em Anzio.",
        p: { aX: [60, 62, 0], a36: [56, 46, 0], a34: [54, 18, 0] } },
      { t: "15 a 18 de fevereiro. Segunda batalha. Em 15 de fevereiro, 142 B-17, 47 B-25 e 40 B-26 bombardeiam a abadia (cerca de 1.150 toneladas). Ela é destruída. A 4ª Divisão indiana ataca e fracassa, e o ataque é cancelado em 18 de fevereiro.",
        p: { aBmb: [46, 20, 0], a4I: [56, 24, 0] } },
      { t: "15 a 23 de março. Terceira batalha. Bombardeio da cidade, com cerca de 750 toneladas. O Corpo neozelandês ataca. Os gurcas seguram a colina do Carrasco, a pouco mais de 200 metros da abadia. O ataque termina em 22 ou 23 de março. A 4ª Div. indiana perdeu 3.000 homens, e a 2ª Div. neozelandesa, 1.600.",
        p: { aBmb: [50, 38, 0], aNZ: [56, 36, 0], a4I: [54, 28, 0] } },
      { t: "11 de maio, 23h. Quarta batalha, Operação Diadem. Começa com 1.060 canhões na frente do 8º Exército e 600 na do 5º. Atacam o XIII Corpo britânico, o II Corpo americano, o Corpo Expedicionário Francês (com cerca de 7.800 goumiers) e o II Corpo polonês.",
        p: { aBr: [62, 48, 0], aFr: [50, 58, 0], aPol: [60, 12, 0], a36: [60, 52, 0] } },
      { t: "14 de maio. Os goumiers contornam a defesa alemã pelos montes Aurunci, ao lado do vale do Liri.",
        p: { aFr: [32, 52, 0], aBr: [54, 46, 0] } },
      { t: "11 a 18 de maio. Os poloneses tomam e perdem o monte Calvário. O ataque de três dias custa 281 oficiais e 3.503 outros postos. Em 17 de maio, Anders ataca de novo, e os alemães recuam. Em 18 de maio, às 10h20, uma patrulha hasteia uma bandeira polonesa sobre as ruínas.",
        p: { aPol: [46, 20, 0], a4I: [54, 24, 0] }, x: ["bAb", "bCas", "bGus"] },
      { t: "24 de maio a 4 de junho. Os canadenses rompem a linha Hitler em 24 de maio, e os poloneses tomam Piedimonte em 25 de maio. Roma cai em 4 de junho (5 de junho, segundo uma seção do artigo).",
        p: { aBr: [26, 44, 0], aFr: [22, 48, 0], aPol: [30, 22, 0] }, x: ["bHit"] }
    ]
  }
});
