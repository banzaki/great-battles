// In-depth battles, batch bd: shimbrakure, kircholm, noryang, shiroyama, saragarhi (great-battles pack).
// Checked against the English, Polish, Portuguese, Japanese and Korean Wikipedia articles on each battle and its war
// (Ethiopian-Adal war, Ahmad ibn Ibrahim al-Ghazi, Polish-Swedish war, Imjin War, Yi Sun-sin, Satsuma Rebellion,
// Saigo Takamori), the National Geographic profile of Saigo, and the HistoryNet account of Saragarhi.
// Where sources disagree the text says so. No diagram for Shimbra Kure (the Ethiopian dispositions are not described)
// and none for Saragarhi (no dispositions or moves beyond the fall of one small post).

Object.assign(GLOSSARY, {
  "imã de adal": "Título religioso e militar de Ahmad ibn Ibrahim, o líder muçulmano do sultanato de Adal, que comandava o exército.",
  "malassay": "Nome das tropas de elite do exército de Adal, que ficaram no centro do dispositivo, junto do imã.",
  "tributo de jizia": "Imposto que os Estados muçulmanos cobravam de súditos ou vizinhos não muçulmanos. Alguns historiadores dizem que a recusa de Adal em pagá-lo a um imperador cristão ajudou a causar a guerra.",
  "futuh al-habasha": "A 'Conquista da Abissínia', crônica árabe da guerra escrita por um participante, Arab Faqih. É a fonte mais detalhada sobre Shimbra Kure e, por ser de um lado só, exagera em favor dele.",
  "hetman": "Comandante supremo do exército na Polônia-Lituânia. O hetman da Lituânia comandava as tropas do Grão-Ducado.",
  "reiters": "Cavaleiros alemães armados com pistolas, que atiravam em fileiras, uma depois da outra. No lado sueco, eram a cavalaria das alas; Chodkiewicz também tinha alguns, enviados pelo duque da Curlândia.",
  "formação em tabuleiro": "Blocos de infantaria em fileiras alternadas, com espaço entre eles, como as casas pretas de um tabuleiro de xadrez. Os blocos da fila de trás cobrem os vãos da fila da frente.",
  "meio-regimento": "Unidade sueca da época, de algumas centenas de homens, que o exército usava como peça básica de seus blocos de combate.",
  "wajo": "Forte costeiro de pedra que os japoneses construíram na Coreia, perto do mar, para guardar o porto e receber navios de reforço.",
  "kaishakunin": "O 'segundo' do seppuku: um amigo de confiança que corta a cabeça de quem se mata, para encurtar o sofrimento.",
  "bushido": "O 'caminho do guerreiro', conjunto de ideais atribuídos aos samurais, como lealdade e honra. Foi muito idealizado depois que os samurais deixaram de existir como classe.",
  "conscrição": "Serviço militar obrigatório, em que homens de qualquer origem são chamados ao exército. No Japão começou com a lei de 1873.",
  "restauração meiji": "A revolução de 1868 que derrubou o xogunato e devolveu o poder ao imperador, que reinou como Meiji. Abriu a era de modernização do Japão.",
  "satsuma": "Antigo domínio do sul do Japão, hoje a província de Kagoshima. Foi um dos que derrubaram o xogunato em 1868 e tinha fama de guerreiros ferozes.",
  "snider-enfield": "Fuzil britânico de carregar pela culatra, usado por muitos exércitos nos anos 1860 e 1870. Atirava mais rápido que um mosquete de boca.",
  "havildar": "Sargento no exército britânico da Índia.",
  "naik": "Cabo no exército britânico da Índia.",
  "sipaio": "Soldado indiano de infantaria a serviço do exército britânico da Índia.",
  "pachtuns": "Povo das montanhas entre o Afeganistão e o atual Paquistão, dividido em tribos como os afridis e os orakzais. A fronteira que os britânicos traçaram cortou suas terras ao meio.",
  "fronteira noroeste": "A região montanhosa no extremo noroeste da Índia britânica, de fronteira com o Afeganistão, onde os britânicos estavam sempre em guerra com as tribos locais.",
  "ordem indiana do mérito": "Condecoração por bravura dada a soldados indianos do exército britânico. Até 1911, quando a Cruz Vitória passou a valer também para eles, era o prêmio mais alto que podiam receber."
});

Object.assign(DEEP, {
  shimbrakure: {
    war: "Guerra Etiópia–Adal (1529–1543)",
    hook: "A primeira vez que os exércitos do imperador cristão da Etiópia foram derrotados por um jovem imã, numa batalha que ninguém consegue contar em números.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século 16, o planalto da Etiópia era governado por um imperador cristão, da dinastia salomônica, e as terras baixas do leste eram dominadas por Adal, um sultanato muçulmano com porto em Zeila. As duas potências viviam em guerra de fronteira havia séculos.",
        "O imperador Lebna Dengel, que tinha o nome de trono de Dawit II, reinava desde 1508 e já tinha vencido uma guerra contra Adal: em 1516, em Fatagar, matou o imã Mahfuz, que ameaçava suas terras. Depois disso, Adal caiu numa guerra civil, da qual saiu um líder novo, Ahmad ibn Ibrahim al-Ghazi, que ficou com o título de [[imã de adal]]. Em 1527, há registro de uma incursão de um chefe etíope em território muçulmano.",
        { h: "O caminho até Shimbra Kure" },
        { timeline: [
          ["1516", "Em Fatagar, Lebna Dengel mata o imã Mahfuz, de Adal."],
          ["c. 1525", "Depois de uma guerra civil, Ahmad ibn Ibrahim assume o poder real em Adal."],
          ["1527", "Um chefe etíope, Dagalhan, ataca território muçulmano na fronteira."],
          ["c. 1527–1529", "Ahmad junta somalis, harlas, argobbas, afares e árabes e compra armas de fogo pelo porto de Zeila."],
          ["9 mar 1529", "Os dois exércitos se encontram em Shimbra Kure, em Dawaro."]
        ]},
        "Por que a guerra começou? As crônicas etíopes, que são religiosas, falam de castigo divino. Os historiadores modernos apontam outras causas: a recusa de Adal em pagar o [[tributo de jizia]] a um imperador cristão, a pressão econômica sobre o comércio e o fervor religioso que cercava o novo imã. Não há consenso."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ahmad ibn Ibrahim al-Ghazi, cerca de 23 anos" },
        "Nascido por volta de 1506, começou como soldado de um chefe rebelde e se casou com a filha de Mahfuz. Depois de um jogo de alianças e assassinatos, passou a mandar em Adal. Os etíopes o chamam de Gragn, 'o canhoto'; os somalis, de Gurey. Era disciplinado: proibiu vinho, jogo e certas danças, e reuniu um exército de povos diferentes, que ele manteve unido pela religião. O cronista que o acompanhou é Arab Faqih, que escreveu o [[futuh al-habasha]].",
        { h: "Lebna Dengel (Dawit II), no trono desde 1508" },
        "Subiu ao trono ainda criança e governou por mais de 30 anos. Tinha poucas armas de fogo, compradas dos turcos: nos anos 1520, apenas dois canhões giratórios e catorze mosquetes. Em Shimbra Kure confiou no que sempre tinha funcionado, uma enorme massa de cavalaria e infantaria. Era uma força imponente, mas muito lenta.",
        { h: "Os outros nomes" },
        "Do lado de Adal, Matan ibn Uthman comandava os somalis da esquerda, e Ahmad Girri, outro oficial, também segurou a posição. Abu Bakr, chamado Arshuta, é o homem que o cronista diz ter discursado para os soldados. Do lado etíope, o cunhado do imperador, Takla Madhen, foi capturado e depois resgatado por 250 onças de ouro."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são o ponto mais incerto, e as versões diferem por uma ordem de grandeza. O cronista árabe dá a Adal 12.560 homens e ao imperador 16.000 cavaleiros e 200.000 de infantaria, num total de mais de 216.000. As crônicas etíopes dizem o contrário: mais de 3.000 cavaleiros e uma infantaria 'incontável' para o imperador, e só 300 cavaleiros para o invasor. Cada lado tinha motivo para inflar o inimigo e diminuir a si mesmo. Nenhum desses números é confiável.",
        { note: "Não use esses números como contagem. O cronista árabe diz que o exército etíope era muito maior que o de Adal, mas ninguém sabe quanto, e os etíopes contam outra história." },
        { h: "O terreno" },
        "Shimbra Kure fica em Dawaro, no sudeste do atual território etíope. O local exato não é conhecido. Os relatos só mencionam uma grande nuvem de poeira, que cobriu o campo durante a luta.",
        { h: "O plano de Ahmad" },
        "O imã dividiu o exército em três partes. À direita, as tribos harlas; à esquerda, os somalis de Matan ibn Uthman; no centro, a tropa de elite que o cronista chama de [[malassay]], com o próprio Ahmad. Antes de começar, mandou todos rezarem e fez um discurso: cada um devia manter a posição e deixar os etíopes atacarem primeiro.",
        { h: "A batalha" },
        "O imperador mandou atacar, e a luta foi muito sangrenta. Na direita de Adal, os harlas resistiram aos ataques. Na esquerda, os somalis, em muito menor número, foram esmagados: segundo o cronista, muitos fugiram e uns 3.000 morreram, mas Matan ibn Uthman e Ahmad Girri seguraram a posição.",
        "No meio da luta, a poeira ficou tão densa que, segundo o cronista, alguns etíopes se atacaram uns aos outros. Foi nesse momento que a batalha virou. O historiador Merid Wolde Aregay diz que o centro de Adal, com apoio de cavaleiros árabes, virou o jogo e empurrou os etíopes de volta. O cronista diz que, no fim, os feridos etíopes eram mais numerosos que os de Adal.",
        { note: "As armas de fogo: o historiador Richard Pankhurst atribui a vitória a uma tropa de elite de atiradores de [[arcabuz]], e seria a primeira vez que um exército etíope enfrentava armas de fogo em batalha. Merid Wolde Aregay discorda: diz que Adal não recebeu uma quantidade importante de armas de fogo e artilharia dos otomanos antes de 1539. Os dois concordam que o resultado não foi decidido só por isso." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Adal ficou com o campo e com um enorme saque de armas, cavalos, espadas e cotas de malha. O cronista conta cerca de 5.000 mortos em Adal, incluindo alguns comandantes. Do lado etíope, fala em mortos incontáveis, entre eles um governador, uns 10.000 nobres e 114 'patrícios'. São números de um cronista que escrevia para o vencedor.",
        "O imã quis tomar o palácio do imperador, em Badeqe, mas não seguiu: suas tropas estavam cansadas e inquietas, e ele recuou das terras altas. Durante dois anos, não enfrentou o exército imperial de frente. A batalha seguinte foi em 23 de fevereiro de 1531, em Antukyah, onde Adal derrotou de novo os etíopes, e pouco depois seus homens entraram na capital imperial.",
        { h: "Por que importa" },
        "Shimbra Kure abriu uma guerra que quase destruiu o Império Etíope. Adal conquistou boa parte do planalto, tomou Aksum e chegou ao norte do país. O imperador Lebna Dengel passou os últimos anos fugindo e morreu em 1540, num mosteiro, Debre Damo. Só a chegada de uns 400 mosqueteiros portugueses, em 1541, e a morte de Ahmad em Wayna Daga, em 1543, mudaram o rumo da guerra.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: o dia 9 de março de 1529 é o mais citado, mas algumas fontes dão o dia 7. A guerra só é contada a partir de 1529 nas crônicas etíopes, porque os dois lados trataram os choques anteriores como incursões de fronteira." },
        { note: "Os harares: o estudioso Enrico Cerulli diz que os soldados de Harar recusaram a ordem de Ahmad de conquistar toda a Abissínia, por tradição e por medo de mudar a base muçulmana de lugar. É uma hipótese, e as fontes são partidárias." },
        { note: "As fontes: quase tudo vem do Futuh al-Habasha, de Arab Faqih, que era do lado de Adal e acompanhou o imã. Os relatos etíopes são mais curtos e foram escritos depois. Não há fonte neutra para a batalha." }
      ]}
    ]
  },

  kircholm: {
    war: "Guerra Polaco-Sueca (1600–1611)",
    hook: "Menos de 4.000 homens contra mais de 10.000, e a batalha foi decidida por cargas de cavalaria em poucas horas, ou até em 20 minutos, dependendo de quem conta.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século 17, o Báltico era disputado por todo mundo. A Livônia, região que hoje é a Letônia e a Estônia, estava dividida entre a Comunidade Polaco-Lituana, a Suécia e a Rússia. Para complicar, o rei da Polônia, Sigismundo III Vasa, era sueco: tinha sido rei da Suécia até 1599, quando seu tio Carlos o derrubou. Uma guerra de família virou guerra entre países.",
        "A guerra começou em 1600. Em 1605, Carlos, que se tornara rei da Suécia em 1604, levou um exército grande à Livônia e foi sitiar Riga, o principal porto da região. A Coroa polonesa não tinha financiado a defesa. Quem foi socorrer a cidade foi o grão-[[hetman]] da Lituânia, que, segundo se conta, pagou o soldo de muita gente com a própria fortuna.",
        { h: "O caminho até Kircholm" },
        { timeline: [
          ["1599", "Sigismundo III perde o trono sueco para o tio, Carlos."],
          ["1600", "Começa a guerra pela Livônia."],
          ["1605", "Carlos IX cerca Riga com um exército muito maior que o dos defensores."],
          ["26–27 set 1605", "Os suecos marcham de noite para surpreender Chodkiewicz. Não conseguem."],
          ["27 set 1605", "Os dois exércitos se encontram em Kircholm, a uns 18 km de Riga."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Jan Karol Chodkiewicz, por volta de 45 anos" },
        "Grão-hetman da Lituânia e veterano das guerras da Livônia. Chegou a Kircholm sem verba da Coroa e com muito menos gente que o inimigo, mas com tropas descansadas. Sua tática foi atrair os suecos para fora da posição forte que ocupavam.",
        { h: "Carlos IX, 54 anos" },
        "Regente e depois rei da Suécia, tinha tomado o trono do próprio sobrinho. Comandava um exército grande, com mercenários alemães, holandeses e escoceses. Seu filho, Gustavo Adolfo, seria um dos grandes reformadores militares do século.",
        { h: "Os outros nomes" },
        "Do lado polaco-lituano, Jan Piotr Sapieha comandava a ala direita e Tomasz Dąbrowa a esquerda. O hussardo Wincenty Woyna chefiava uma companhia de 300 [[hussardos alados]], e Teodor Lacki comandava a reserva. Friedrich Kettler, duque da Curlândia, mandou [[reiters]] que se juntaram ao exército antes da batalha. Do lado sueco, Joachim Friedrich von Mansfeld comandava a cavalaria da direita, e o coronel Henryk Brandt a da esquerda. O duque Frederico de Lüneburg e Anders Lennartsson, outros comandantes suecos, estavam no campo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam entre os historiadores. Para os polaco-lituanos, entre 3.400 e 4.350 homens; o valor mais citado é cerca de 3.600, com uns 2.600 cavaleiros e 1.000 de infantaria, além de 4 a 7 canhões. Para os suecos, entre 10.000 e 14.000; as estimativas mais comuns ficam perto de 10.000 a 11.000 (10.868, segundo Frost, o autor mais citado em inglês), com 11 canhões. Em resumo, os suecos eram cerca de três vezes mais numerosos.",
        { note: "Cada historiador dá um número diferente, e todos os totais são estimativas. Use os números como ordens de grandeza: algo como 3.500 contra 10.000." },
        { h: "O terreno" },
        "Uma colina junto ao rio Daugava, a cerca de 18 km a sudeste de Riga, com o povoado de Kircholm ao lado. Os suecos ocuparam a crista. Os polaco-lituanos ficaram embaixo, a cerca de 1 km, com o acampamento, um cordão de carroças e uns poucos canhões junto ao rio, à esquerda.",
        { h: "Os dois dispositivos" },
        "Carlos IX armou o exército em [[formação em tabuleiro]]: blocos de infantaria (sete [[meio-regimentos|meio-regimento]] na primeira linha), com piqueiros no meio e mosqueteiros nas pontas, em quatro linhas que se alternavam com a cavalaria, e os canhões na frente. A frente tinha uns 800 metros. Era uma formação moderna para a época.",
        "Chodkiewicz usou o dispositivo polonês tradicional, mais profundo: a ala esquerda, de Dąbrowa, mais forte, para atacar ao longo do rio e romper a direita sueca; a direita, de Sapieha, de hussardos; no centro, infantaria leve e a companhia de Woyna, e atrás uma reserva. O hetman ainda mandou os serviçais do acampamento ficarem atrás da linha, para parecer que havia reforço.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, os dois exércitos ficam frente a frente. Durante horas, Chodkiewicz manda a cavalaria leve provocar os suecos em escaramuças, para irritá-los e ganhar tempo.",
        "Segundo, o hetman manda recuar, numa [[retirada fingida]]. Carlos ordena que a primeira linha desça a encosta atrás deles, com a cavalaria da segunda linha cobrindo os lados.",
        "Terceiro, a infantaria sueca desce para o vale e começa a subir na direção dos polacos. Ao se afastar do resto do exército, perde o apoio. Chodkiewicz então para o recuo. A artilharia e os mosqueteiros polacos atiram, e os arcabuzeiros curlandeses de Kettler também.",
        "Quarto, a companhia de hussardos de Woyna ataca o centro e quebra a coesão da infantaria sueca. A segunda linha sueca não consegue chegar a tempo.",
        "Quinto, na esquerda polaca, Dąbrowa atinge a direita sueca, junto ao rio. Os hussardos rompem os reiters de Mansfeld e depois a infantaria. Na confusão, Frederico de Lüneburg é ferido de morte e Lennartsson morre.",
        "Sexto, na direita polaca, Sapieha encara a esquerda sueca. Carlos manda sua reserva de cavalaria, uns 700 a 1.000 homens, contra Sapieha. Os polacos aguentam o choque até chegarem reforços.",
        "Sétimo, Chodkiewicz manda a reserva, os hussardos de Lacki. Lacki dá a volta, ataca o flanco dos suecos e os derrota. Depois ele reagrupa e ataca de novo, chegando à retaguarda dos suecos que ainda seguravam as casas de Kircholm.",
        "Oitavo, os cavaleiros suecos fogem e atropelam a própria infantaria. Os soldados a pé, sem a cavalaria, ficam à mercê dos hussardos e do fogo polaco. A infantaria polaca avança em onda larga.",
        "Nono, o exército sueco se desfaz. Os que fogem rumo a Riga e à frota ancorada na costa são perseguidos, e muitos se afogam no Daugava. Camponeses letões se juntam à caçada para se vingar dos saques. Carlos escapa porque um nobre livônio, Henryk Wrede, lhe dá seu cavalo, depois que o do rei foi morto a tiros. Wrede foi cercado e morto."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas polaco-lituanas foram pequenas, cerca de 100 mortos e 200 feridos, segundo as fontes mais citadas, além de uns 150 cavalos. As suecas variam muito. Um historiador sueco, Sundberg, dá pelo menos 5.000 mortos e 500 prisioneiros; outro, Barkman, de 7.600 a 8.000 entre mortos, capturados e dispersos. Um cronista livônio, Viecken, registrou 20 valas comuns com 7.919 corpos; Chodkiewicz disse 9.000, número que se considera exagerado. Os suecos perderam todo o acampamento, os canhões e dezenas de bandeiras.",
        "A maior parte dos mortos suecos caiu na fuga, nas matas e nos pântanos a caminho de Riga. Os mercenários estrangeiros foram soltos depois de jurar que não lutariam contra o rei da Polônia.",
        { h: "Por que importa" },
        "Carlos IX levantou o cerco de Riga e voltou à Suécia por mar. Mas a Comunidade não conseguiu aproveitar a vitória. O exército, sem pagamento, não tinha como comprar comida e forragem, as tropas se dispersaram, e o soldo atrasado levou a confederações de soldados rebeldes. Os suecos voltaram em 1607. Uma trégua só veio em 1611, e a guerra recomeçou em 1617. Em 1621, o filho de Carlos, Gustavo Adolfo, tomou Riga.",
        "Para os poloneses, Kircholm virou símbolo da cavalaria alada. A data está gravada no Túmulo do Soldado Desconhecido, em Varsóvia: 'Kircholm 27 IX 1605'.",
        { h: "Curiosidades e controvérsias" },
        { note: "A duração: um relato diz que a batalha foi decidida em 20 minutos pela carga dos hussardos; outro diz que a cavalaria sueca estava em fuga depois de 30 minutos; a historiografia polonesa fala em cerca de três horas de combate. A diferença é que alguns contam só a carga decisiva, e outros contam desde o início das escaramuças e a perseguição." },
        { note: "A fama: segundo a Wikipédia em polonês, o papa Paulo V, o rei Jaime I da Inglaterra, o sultão Ahmed I e o xá Abas, da Pérsia, mandaram felicitações pela vitória." },
        { note: "O fim de Brandt: o coronel Henryk Brandt foi capturado e, mais tarde, executado em Cracóvia, por ter trocado de lado e servido aos suecos." }
      ]}
    ]
  },

  noryang: {
    war: "Guerra Imjin: invasões japonesas da Coreia (1592–1598)",
    hook: "A última batalha de Yi Sun-sin: ele morreu no meio da vitória e pediu que a frota não soubesse.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1592, o senhor da guerra japonês Toyotomi Hideyoshi invadiu a Coreia, em teoria para chegar à China. A guerra durou sete anos, com uma trégua no meio. O exército coreano foi vencido em terra, mas a marinha de Yi Sun-sin destruiu as frotas japonesas uma vez após outra e cortou as linhas de abastecimento. Em 1597, Hideyoshi invadiu de novo. Yi, que tinha sido destituído e preso por intrigas da corte, foi chamado de volta depois que o seu substituto perdeu quase toda a frota em Chilcheollyang, e venceu em Myeongnyang com 13 navios.",
        "Em 1598, os japoneses tinham recuado para fortes costeiros, os [[wajo]], enquanto os exércitos chineses da dinastia Ming ajudavam os coreanos. Em junho, Hideyoshi mandou parte dos soldados para casa. Em 18 de setembro, ele morreu. O Conselho dos Cinco Anciãos mandou todo mundo voltar. O general Konishi Yukinaga, com uns 14.000 soldados, estava no forte de Sunch'on, bloqueado por Yi e pelo almirante chinês Chen Lin. O caminho de casa passava pela frota aliada.",
        { h: "O caminho até Noryang" },
        { timeline: [
          ["1592", "Hideyoshi invade a Coreia. Yi Sun-sin vence vários combates navais."],
          ["1597", "Segunda invasão. Yi volta ao comando e vence em Myeongnyang."],
          ["18 set 1598", "Hideyoshi morre. O governo japonês ordena a retirada."],
          ["fim de 1598", "Yi e Chen Lin bloqueiam Konishi em Sunch'on."],
          ["15 dez 1598", "A frota de socorro de Shimazu Yoshihiro se reúne na baía de Sacheon. Yi e Chen esperam no estreito de Noryang."],
          ["16 dez 1598", "A batalha começa de madrugada."]
        ]},
        "Segundo alguns relatos, Konishi tentou subornar Chen Lin para levantar o [[bloqueio naval]], e Chen chegou a aceitar recuar. Yi se recusou, argumentando que isso deixaria Konishi escapar. Quando a frota de socorro japonesa apareceu, Yi e Chen, com cerca de 150 navios, foram esperá-la."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Yi Sun-sin, 53 anos" },
        "O almirante que, entre 1592 e 1598, venceu todas as batalhas navais que comandou, segundo a tradição coreana; o número de batalhas varia entre 23 e mais de 60, dependendo de como se conta. Sua arma principal era a [[panokseon]], o navio alto e de casco forte da Coreia, que aguentava muitos canhões. Em Noryang, queria impedir a fuga dos japoneses, e não só ganhar a batalha.",
        { h: "Chen Lin, comandante chinês" },
        "Almirante Ming à frente do esquadrão de Guangdong. Segundo alguns relatos, estava mais disposto que Yi a negociar com os japoneses. Mas lutou em Noryang, e sua [[capitânia]] foi atacada. Quando soube da morte de Yi, segundo a tradição, caiu no chão três vezes e chorou, batendo no peito.",
        { h: "Os outros nomes" },
        "Do lado japonês, Shimazu Yoshihiro comandava a frota de socorro, com Sō Yoshitoshi, Wakizaka Yasuharu e outros chefes. Konishi, preso em Sunch'on, queria sair por conta própria. Do lado aliado, Deng Zilong, comandante Ming, morreu na batalha. Yi Hoe, filho de Yi, Yi Wan, sobrinho, e o ajudante Song Hui-rip estavam junto dele quando morreu."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Aqui as fontes divergem muito, e nenhum número é seguro. Segundo a Wikipédia em inglês, os aliados tinham cerca de 148 navios e 16.000 homens: 82 panokseon coreanas, 6 grandes [[juncos|junco]] chineses, 57 [[galés|galé]] mais leves e 2 panokseon emprestadas por Yi a Chen. Os japoneses tinham cerca de 500 navios, muitos deles de transporte, com uns 20.000 homens. Outra fonte dá só 300 navios japoneses. A Wikipédia coreana dá números bem maiores nos dois lados: 160 navios coreanos, 300 chineses e mais de 500 japoneses, com até 60.000 homens.",
        { note: "Em todas as versões, os aliados eram menos numerosos, mas tinham canhões mais fortes e navios mais firmes. O que os historiadores discutem é quanto os japoneses eram mais numerosos." },
        { h: "O terreno" },
        "O estreito de Noryang separa a ilha de Namhae do continente, no sul da Coreia. É estreito, o que limitava as manobras da frota japonesa, bem mais numerosa. A frota japonesa estava na baía de Sacheon, na ponta leste do estreito, e queria passar para o oeste, para encontrar Konishi em Sunch'on. Os aliados esperavam na ponta oeste.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, em 15 de dezembro, Shimazu reúne a frota em Sacheon, sem saber ao certo se os aliados ainda bloqueavam Konishi ou esperavam na outra ponta do estreito. Yi e Chen esperam na ponta oeste.",
        "Segundo, por volta das 2h da madrugada de 16 de dezembro (a Wikipédia coreana diz 4h), a frota japonesa entra no estreito.",
        "Terceiro, os canhões coreanos e chineses abrem fogo, e os japoneses não conseguem responder bem no início.",
        "Quarto, com a frota japonesa danificada, Chen manda atacar de perto. Isso dá aos japoneses a chance de usar [[arcabuzes|arcabuz]] e [[abordagens|abordagem]]. Os coreanos jogam lenha em chamas nos conveses inimigos.",
        "Quinto, vários grupos japoneses abordam a nau de Chen Lin, e o filho dele é ferido ao defendê-lo. Deng Zilong passa para uma panokseon de Yi para ajudar, mas navios Ming a confundem com um navio japonês e a danificam. Os japoneses sobem a bordo e matam todos, inclusive Deng.",
        "Sexto, o navio de Yi, que acaba entrando na luta corpo a corpo, vai socorrer o de Chen.",
        "Sétimo, ao amanhecer, os aliados dominam. Cerca de metade da frota japonesa está afundada ou capturada. A nau de Shimazu afunda, e ele é salvo por outros navios. O resto da frota inimiga recua.",
        "Oitavo, os aliados perseguem os japoneses ao longo da costa sul de Namhae, rumo a Busan. É na perseguição que um tiro de arcabuz acerta Yi, perto da axila esquerda. Ele percebe que o ferimento é fatal. Segundo a tradição, disse algo como: a luta está no auge, vistam minha armadura, toquem meus tambores de guerra, não anunciem minha morte. Só três pessoas viram: o filho, o sobrinho e o ajudante. Yi Wan vestiu a armadura do tio e continuou tocando o tambor, e a frota seguiu lutando."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A frota japonesa foi destroçada. As fontes coreanas falam em mais de 200 navios afundados e uns 100 capturados. Alguns relatos dizem que só cerca de 50 navios escaparam; outros, que cerca de 200 chegaram a Busan. Do lado aliado, as perdas foram cerca de 500 homens e alguns navios, além de Yi e Deng.",
        "Konishi saiu de Sunch'on em 16 de dezembro e escapou. Segundo a Wikipédia em inglês, ele passou pelo sul da ilha de Namhae e não entrou na batalha. A Wikipédia coreana diz que a frota Ming o enfrentou. Os generais japoneses se reuniram em Busan, e o último navio partiu em 24 de dezembro.",
        { h: "Por que importa" },
        "Foi a última grande batalha da guerra. Os japoneses saíram da Coreia na mesma semana, e as invasões acabaram. O corpo de Yi foi levado para Asan, onde está enterrado ao lado do pai. Recebeu um título póstumo de ministro e, em 1643, o título de Chungmugong. Chen Lin fez um elogio fúnebre. Uma força Ming de 3.000 a 4.000 homens ficou na Coreia até 1601 para ajudar a reconstruir o exército.",
        "Para os coreanos, Yi Sun-sin é um dos grandes heróis nacionais, e seu nome ainda é estudado por historiadores navais.",
        { h: "Curiosidades e controvérsias" },
        { note: "As últimas palavras: a frase de Yi aparece nas crônicas coreanas e é repetida em quase todos os relatos, mas quem a transmite são só as três testemunhas, e o texto exato muda de versão para versão. O sentido é o mesmo: esconder a morte para não desmoralizar a frota." },
        { note: "A posição dos aliados: a Wikipédia em inglês diz que os aliados esperaram na ponta oeste do estreito e lutaram até a ponta leste. A coreana diz que Yi se escondeu no porto de Gwaneumpo e atraiu os japoneses para lá. As fontes consultadas não resolvem a diferença, e por isso o diagrama é um esquema, não um mapa." },
        { note: "O suborno de Chen Lin e a hesitação dele aparecem em fontes que não são unânimes, e a Wikipédia coreana trata a história como avaliação posterior, sem fonte. É seguro dizer que Chen e Yi discordaram sobre o que fazer, e que Yi insistiu em atacar." }
      ]}
    ]
  },

  shiroyama: {
    war: "Rebelião de Satsuma (1877)",
    hook: "Poucas centenas de samurais contra dezenas de milhares de soldados, e a lenda do 'último samurai' esconde uma história mais interessante.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1868, a [[restauração meiji]] derrubou o xogunato e devolveu o poder ao imperador. Os samurais de [[satsuma]], no sul do Japão, tinham sido o braço militar da revolução. Mas o novo governo, para modernizar o país, foi acabando com os privilégios deles: a classe samurai perdeu os estipêndios em arroz, o direito de andar de espada e, em 1873, o monopólio das armas, com a [[conscrição]], que chamava camponeses e filhos de comerciantes para o exército.",
        "Saigō Takamori, o maior herói da Restauração, via a modernização como inevitável e até desejável. Mas não conseguia abandonar os samurais que tinham lutado com ele. Em 1873, propôs uma guerra contra a Coreia, para reviver o espírito samurai. Foi derrotado no governo, renunciou e voltou para Kagoshima, onde abriu escolas privadas que ensinavam letras e treino militar. Por volta de 1876, Satsuma estava praticamente fora do controle de Tóquio.",
        { h: "O caminho até Shiroyama" },
        { timeline: [
          ["1873", "Saigō é derrotado na disputa sobre a guerra com a Coreia e se demite."],
          ["1874", "Abre escolas privadas de treino militar em Kagoshima."],
          ["jan 1877", "O governo tenta remover as armas do arsenal de Kagoshima. Alunos de Saigō atacam arsenais, e Saigō assume o comando."],
          ["fev–abr 1877", "Cerco ao castelo de Kumamoto. Os rebeldes não tomam o castelo e recuam."],
          ["ago 1877", "O exército rebelde, já reduzido a uns 3.000, é cercado. Saigō foge com algumas centenas."],
          ["1º set 1877", "Os rebeldes ocupam Shiroyama, um monte sobre Kagoshima."],
          ["24 set 1877", "Ataque final."]
        ]},
        "Segundo a maioria dos relatos, Saigō assumiu o comando da revolta com relutância, quando os alunos já tinham atacado os arsenais. Seu exército marchou rumo a Tóquio, mas parou diante do castelo de Kumamoto."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Saigō Takamori, 49 anos" },
        "Nascido em Kagoshima em 1828, ajudou a derrubar o xogunato, a montar o exército nacional depois de 1871 e a governar o Japão. É o paradoxo da história: lutou para construir o Estado que acabou por derrotá-lo. Para o povo, virou um herói trágico.",
        { h: "Yamagata Aritomo" },
        "Comandante do exército imperial no cerco, ligado à criação da conscrição. Em Shiroyama, cercou o monte com fortificações, usou cinco navios de guerra no bombardeio e ordenou que qualquer posição atacada pelo inimigo fosse coberta de fogo, mesmo que houvesse baixas entre os próprios soldados.",
        { h: "Os outros nomes" },
        "O almirante Kawamura Sumiyoshi comandava os fuzileiros e foi quem enviou o ultimato de rendição. Do lado rebelde, Beppu Shinsuke era companheiro de Saigō e foi quem o decapitou, e Murata Shinpachi lutou na defesa do forte de Iwasaki."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O exército imperial somava cerca de 30.000 homens em volta de Shiroyama, segundo a Wikipédia em inglês; um relato japonês fala em 50.000. Eram sobretudo conscritos, com a Guarda Imperial, a polícia militarizada e unidades de ex-samurais recrutados como policiais, como os espadachins do Batto-tai. Os rebeldes eram uns 300 a 500 homens: um relato japonês diz 372. Tinham [[fuzis Snider-Enfield|snider-enfield]] e pouca munição, e fundiram até estátuas de metal para fazer balas.",
        { note: "Os números do fim são incertos. Seis meses antes, a força de Saigō tinha cerca de 20.000 homens, segundo a Wikipédia em inglês. Os defensores de Shiroyama são o que sobrou depois de deserções, mortes e capturas." },
        { h: "O terreno" },
        "Shiroyama é um monte de uns 100 metros, coberto de mata, que domina a cidade de Kagoshima, a baía e o antigo castelo dos senhores de Satsuma. Os rebeldes ocuparam o topo, e depois, quando o bombardeio apertou, fizeram um quartel numa caverna no vale de Iwasaki, a leste. A caverna é hoje chamada de Caverna de Saigō.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, em 1º de setembro, Saigō ocupa Shiroyama com algumas centenas de homens. Os imperiais cercam o monte e vão cavando trincheiras e fortificações em volta, uma depois da outra.",
        "Segundo, em 23 de setembro, Kawamura exige rendição incondicional, prometendo poupar a vida dos homens se entregarem Saigō. O prazo é 17h. Saigō manda dizer que não precisa responder.",
        "Terceiro, na noite de 23 para 24, cinco navios de guerra e a artilharia bombardeiam o monte. Os rebeldes, quase sem munição, se abrigam na caverna.",
        "Quarto, às 4h da manhã, com três tiros de canhão como sinal, segundo um relato japonês, os imperiais sobem o monte por todos os lados.",
        "Quinto, os samurais saem das trincheiras e correm de espada na mão contra as linhas imperiais. Por alguns minutos, a surpresa e a habilidade com a espada desorganizam parte das tropas. Mas os imperiais são muito mais numerosos e empurram os rebeldes de volta.",
        "Sexto, Saigō é ferido na coxa e no abdômen (os relatos variam). É carregado por Beppu Shinsuke, que procura um lugar para o seppuku. A tradição dá como última frase de Saigō: 'Shinsuke, acho que este lugar serve'. Beppu o decapita, como [[kaishakunin]], e esconde a cabeça.",
        "Sétimo, Beppu assume o comando. Os últimos samurais, sem munição, descem o monte de espada na mão, e Beppu morre atingido por um tiro. Os rebeldes que defendem o forte de Iwasaki, como Murata Shinpachi, resistem mais algum tempo.",
        "Oitavo, por volta das 7h da manhã, cessam os tiros em Shiroyama. A rebelião acabou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As contas dos rebeldes variam: a Wikipédia em inglês diz que os cerca de 500 morreram; um relato japonês fala em cerca de 160 mortos e 200 rendidos. A Wikipédia em inglês cita só 30 mortos no lado imperial nesta última fase. A guerra toda, de fevereiro a setembro, matou e feriu dezenas de milhares de homens, e custou tanto ao governo que, segundo a Wikipédia em inglês, ele passou a imprimir papel-moeda.",
        { h: "Por que importa" },
        "A vitória do exército de conscritos mostrou que o Japão podia ter um exército moderno sem a classe samurai. Em 1889, o imperador Meiji perdoou Saigō. Estátuas dele hoje estão no parque Ueno, em Tóquio, e perto do castelo de Kagoshima. O povo o via como herói trágico e exemplo de [[bushido]].",
        { h: "Curiosidades e controvérsias" },
        { note: "O 'último samurai': a lenda diz que Shiroyama foi o fim dos samurais contra a modernidade estrangeira. Os fatos são outros. O governo vinha desmontando os privilégios da classe samurai desde 1871. Os rebeldes tinham fuzis, canhões e morteiros, e o outro lado também tinha ex-samurais, como os policiais recrutados para o Batto-tai. O próprio Saigō ajudou a montar o exército que o derrotou. A National Geographic chama de 'visão idealizada' a imagem do guerreiro tradicional contra a modernidade. O filme O Último Samurai (2003) termina com uma batalha inspirada em Shiroyama, mas seus personagens e seu enredo são inventados." },
        { note: "A morte de Saigō: a tradição diz que ele fez seppuku e foi decapitado por Beppu. Mas há dúvida. A Wikipédia em inglês observa que uma autópsia não achou ferimento no abdômen que combinasse com seppuku, e que Beppu pode tê-lo decapitado porque os ferimentos o impediam de fazer o ritual. Um artigo acadêmico de 2010 chama o suicídio de apócrifo. A National Geographic registra duas versões: uma em que ele pediu para ser decapitado, outra em que fez seppuku." },
        { note: "A cabeça: segundo a Wikipédia em inglês, Beppu escondeu a cabeça, mas, como a decapitação foi apressada, um carregador a encontrou." }
      ]}
    ]
  },

  saragarhi: {
    war: "Revolta pachtum de 1897, na fronteira noroeste da Índia britânica",
    hook: "21 soldados sikhs num posto de sinalização, milhares de atacantes, e uma história em que é preciso separar o que se sabe do que se repete.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século 19, a [[fronteira noroeste]] da Índia britânica era um território de montanhas e guerra constante. Os [[pachtuns]], divididos em tribos como os afridis e os orakzais, viviam ali, e a fronteira traçada pelos britânicos com o Afeganistão cortava suas terras. Em 1897, uma onda de revoltas varreu a região.",
        "Os britânicos controlavam a cordilheira de Samana com uma linha de fortes. O Forte Lockhart ficava na crista de Samana, e o Forte Gulistan, na cordilheira vizinha de Sulaiman. Os dois não se viam, e por isso os britânicos construíram, no meio do caminho, Saragarhi, um pequeno posto fortificado para retransmitir mensagens por [[heliógrafo]]. A [[guarnição]] era de soldados do 36º Sikhs, um regimento de infantaria formado só por sikhs.",
        { h: "O caminho até Saragarhi" },
        { timeline: [
          ["verão de 1897", "As tribos pachtuns se revoltam em toda a fronteira."],
          ["3 e 9 set", "Os tribais atacam o Forte Gulistan e são repelidos."],
          ["após o dia 9", "Uma coluna de socorro reforça Saragarhi: o posto passa a ter 21 homens."],
          ["12 set, por volta das 9h", "Milhares de atacantes cercam Saragarhi."],
          ["12 set", "O posto cai."],
          ["13–14 set", "Chegam reforços a Gulistan, e o posto é retomado."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ishar Singh, havildar" },
        "O [[havildar]] Ishar Singh, sargento, comandava os 21 homens. Na lista dos defensores, constam também o [[naik]] Lal Singh e o lance-naik (cabo auxiliar) Chanda Singh. Os demais eram [[sipaios|sipaio]], isto é, soldados rasos. Segundo o relato mais conhecido, quando o posto foi invadido, mandou os homens para a parte interna e ficou para cobrir a retirada.",
        { h: "Gurmukh Singh, sinaleiro" },
        "Era o soldado que operava o heliógrafo. Foi ele quem manteve o Forte Lockhart informado da luta, enquanto ela acontecia. É também o personagem em torno do qual cresceu a maior parte das histórias.",
        { h: "Os outros nomes" },
        "No Forte Lockhart, o tenente-coronel John Haughton comandava o 36º Sikhs e recebia as mensagens. Do outro lado estavam os chefes das tribos afridi e orakzai, que as fontes não nomeiam com precisão."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os defensores eram 21: três graduados e 18 soldados. O número de atacantes é uma estimativa, e as estimativas variam muito. Haughton, que via de longe, sinalizou de 10.000 a 14.000 homens. Num relatório posterior, falou em 12.000 a 20.000 tribais em toda a área. Há quem diga que só 6.000 a 10.000 chegaram ao posto. Um autor, Sharma, fala em cerca de 10.000.",
        { note: "Os atacantes de Saragarhi não foram contados. Todos os números vêm de estimativas feitas de longe, durante o combate, e depois repetidas. É razoável dizer que foram milhares, e que a conta de '21 contra 10.000' é um símbolo, não uma contagem." },
        { h: "O terreno" },
        "Saragarhi ficava na cordilheira de Samana, no meio do caminho entre os dois fortes, para que um enxergasse o outro por heliógrafo. Era um posto pequeno, com um muro e um portão.",
        { h: "A batalha" },
        "Por volta das 9h, milhares de homens chegaram ao posto e o cercaram. Gurmukh Singh avisou o Forte Lockhart. Haughton respondeu que não podia mandar ajuda imediata.",
        "Segundo a tradição, os defensores decidiram lutar até o fim, para impedir que o inimigo chegasse aos fortes. A luta durou várias horas (um relato fala em quase sete). O primeiro a morrer foi o sipaio Bhagwan Singh, e o naik Lal Singh foi gravemente ferido. Os atacantes tentaram forçar o portão várias vezes, sem sucesso, e acabaram por abrir uma brecha no muro. Daí a luta foi corpo a corpo.",
        "Depois que os defensores foram caindo, Gurmukh Singh ficou sozinho. Segundo a tradição, mandou uma mensagem avisando que os atacantes estavam entrando e pediu licença para largar o heliógrafo e pegar o fuzil. Os atacantes incendiaram o posto e, só então, o último defensor caiu.",
        { note: "O que ele mandou, palavra por palavra, e quantos inimigos matou, não está bem documentado. Os relatos falam em cerca de 20 ou 40 mortos, sem fonte clara. O mesmo vale para o grito de guerra sikh, 'Bole So Nihal', que se diz que ele gritou." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os 21 defensores morreram. Do lado atacante, os números variam: cerca de 450 mortos e feridos (estimativa de dois autores); uns 180 mortos, que os próprios pachtuns teriam admitido mais tarde, segundo uma carta; e uns 600 corpos que teriam sido vistos fora do posto, número que não é confirmado.",
        "Os tribais se voltaram contra Gulistan, mas foram atrasados. Os reforços chegaram na noite de 13 para 14 de setembro, e o posto foi retomado, segundo uma fonte, com intenso fogo de artilharia, que pode ter causado parte das baixas inimigas.",
        { h: "Por que importa" },
        "Os 21 receberam postumamente a [[ordem indiana do mérito]], que então era o prêmio mais alto que um soldado indiano podia receber. Dizem que equivale à Cruz Vitória britânica, mas a equivalência é uma comparação popular. Com os tijolos queimados do posto, os britânicos ergueram um obelisco, e foram construídos templos sikhs em Amritsar e Ferozepur. Todo 12 de setembro, o Regimento Sikh marca o dia com cerimônias nos dois templos.",
        "Militarmente, o que se costuma destacar é que a resistência atrasou os atacantes: depois de Saragarhi, eles se voltaram contra Gulistan, mas perderam tempo, e os reforços chegaram.",
        { h: "Curiosidades e controvérsias" },
        { note: "'Ensinada no mundo todo': uma matéria de 1999 disse que Saragarhi é estudada em escolas do mundo, principalmente na França. Não há prova disso, e a batalha não está no currículo nacional francês. O que existe é o ensino da batalha em escolas do Punjab, na Índia, desde 2000." },
        { note: "Quem eram os atacantes: algumas fontes chamam de 'afegãos', mas eram sobretudo orakzais e afridis, tribos pachtuns da região de fronteira que os britânicos governavam em teoria." },
        { note: "Quem venceu: os tribais tomaram o posto e mataram todos os defensores, mas não tomaram os dois fortes, e o posto foi retomado dois dias depois. Por isso, alguns relatos chamam o resultado de vitória deles, e outros de vitória britânica. Aqui, o posto caiu, e é isso que a ficha da batalha registra." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  kircholm: {
    terrain: [
      { t: "hill", x: 50, y: 12, rx: 46, ry: 12, l: "Colina sueca" },
      { t: "sea", x: 0, y: 0, w: 5, h: 70, l: "Rio Daugava" }
    ],
    units: [
      { id: "aCamp", s: "a", k: "camp", w: 12, h: 5, l: "Acampamento e carroças" },
      { id: "aDab", s: "a", k: "cav", w: 15, h: 5, l: "Ala esquerda (Dąbrowa)" },
      { id: "aInf", s: "a", k: "inf", w: 20, h: 4, l: "Infantaria" },
      { id: "aWoy", s: "a", k: "cav", w: 9, h: 4, l: "Hussardos de Woyna" },
      { id: "aKet", s: "a", k: "cav", w: 7, h: 4, l: "Reiters de Kettler" },
      { id: "aSap", s: "a", k: "cav", w: 17, h: 5, l: "Ala direita (Sapieha)" },
      { id: "aLac", s: "a", k: "cav", w: 9, h: 4, l: "Reserva (Lacki)" },
      { id: "bInf1", s: "b", k: "inf", w: 40, h: 5, l: "Infantaria sueca, 1ª linha" },
      { id: "bMan", s: "b", k: "cav", w: 14, h: 5, l: "Cavalaria (Mansfeld)" },
      { id: "bBra", s: "b", k: "cav", w: 14, h: 5, l: "Cavalaria (Brandt)" },
      { id: "bInf2", s: "b", k: "inf", w: 34, h: 5, l: "2ª linha" },
      { id: "bRes", s: "b", k: "cav", w: 18, h: 4, l: "Reserva de cavalaria" }
    ],
    steps: [
      { t: "Os suecos ocupam a colina, em blocos alternados, a cerca de 1 km dos polaco-lituanos. O rio Daugava fica à esquerda de Chodkiewicz e à direita de Carlos IX. Os suecos são cerca de três vezes mais numerosos.",
        p: { aCamp: [12, 64], aDab: [22, 52], aInf: [48, 54], aWoy: [48, 48], aKet: [34, 50], aSap: [76, 52], aLac: [52, 62],
             bInf1: [50, 24], bMan: [22, 16], bBra: [78, 16], bInf2: [50, 13], bRes: [50, 5] } },
      { t: "Depois de horas de escaramuças, Chodkiewicz finge recuar. Carlos manda a primeira linha descer a encosta atrás dele.",
        p: { aDab: [20, 58], aInf: [48, 57], aSap: [78, 56], bInf1: [50, 32], bMan: [24, 24], bBra: [76, 24], bInf2: [50, 20], bRes: [50, 10] } },
      { t: "A infantaria sueca desce para o vale e se afasta do resto do exército. Chodkiewicz para o recuo, e a artilharia e os mosqueteiros polacos atiram nos suecos que sobem a encosta.",
        p: { bInf1: [50, 40], aKet: [36, 50] } },
      { t: "Os hussardos de Woyna atacam o centro e desorganizam a infantaria sueca. A segunda linha não chega a tempo.",
        p: { aWoy: [48, 43] } },
      { t: "Na esquerda polaca, os hussardos de Dąbrowa rompem a cavalaria de Mansfeld, junto ao rio, e atingem a infantaria sueca.",
        p: { aDab: [26, 30], bMan: [12, 38] }, x: ["bMan"] },
      { t: "Na direita, Sapieha enfrenta a esquerda sueca. Carlos manda a reserva de cavalaria, e os polacos aguentam o choque.",
        p: { aSap: [76, 34], bBra: [74, 28], bRes: [66, 24] } },
      { t: "Chodkiewicz manda a reserva. Lacki dá a volta pelo flanco e derrota a cavalaria sueca que enfrenta Sapieha.",
        p: { aLac: [88, 26, -60], bBra: [88, 18], bRes: [78, 10] }, x: ["bBra", "bRes"] },
      { t: "Os cavaleiros suecos fogem e atropelam a própria infantaria. Sem apoio, ela fica à mercê dos hussardos e do fogo polaco. Toda a linha polaca avança.",
        p: { aInf: [48, 38], aWoy: [46, 32], aDab: [30, 22], bInf1: [50, 34], bInf2: [50, 20] }, x: ["bInf1", "bInf2"] },
      { t: "O exército sueco se desfaz. Os fugitivos correm para o Daugava e para Riga, e muitos se afogam. Carlos escapa no cavalo de Henryk Wrede, que morre.",
        p: { bInf1: [10, 30], bInf2: [10, 14], bMan: [8, 8], bBra: [20, 6], bRes: [34, 4], aDab: [20, 18], aWoy: [30, 24], aSap: [60, 16] } }
    ]
  },

  noryang: {
    terrain: [
      { t: "hill", x: 50, y: 5, rx: 50, ry: 5, l: "Costa do continente" },
      { t: "hill", x: 50, y: 66, rx: 48, ry: 7, l: "Ilha de Namhae" },
      { t: "note", x: 12, y: 22, l: "← Sunch'on (Konishi)" },
      { t: "note", x: 88, y: 22, l: "Baía de Sacheon →" }
    ],
    units: [
      { id: "yK", s: "a", k: "ship", w: 12, h: 5, l: "Frota coreana (82 panokseon)" },
      { id: "yF", s: "a", k: "ship", w: 5, h: 3, l: "Nau de Yi" },
      { id: "cM", s: "a", k: "ship", w: 12, h: 5, l: "Frota Ming (Chen Lin)" },
      { id: "cF", s: "a", k: "ship", w: 5, h: 3, l: "Nau de Chen" },
      { id: "dZ", s: "a", k: "ship", w: 5, h: 3, l: "Deng Zilong" },
      { id: "jA", s: "b", k: "ship", w: 18, h: 9, l: "Frota de Shimazu" },
      { id: "jB", s: "b", k: "ship", w: 14, h: 8, l: "Retaguarda japonesa" }
    ],
    steps: [
      { t: "Em 15 de dezembro, a frota de Shimazu se reúne na baía de Sacheon, no leste do estreito. Os aliados esperam na ponta oeste. Cada símbolo vale vários navios.",
        p: { yK: [16, 36], yF: [24, 36], cM: [16, 50], cF: [24, 50], dZ: [10, 56], jA: [80, 38], jB: [92, 44] } },
      { t: "Por volta das 2h de 16 de dezembro, a frota japonesa entra no estreito, rumo a Konishi.",
        p: { jA: [62, 40], jB: [76, 44] } },
      { t: "Os canhões coreanos e chineses abrem fogo e castigam a frota japonesa, que quase não consegue responder.",
        p: { yK: [26, 36], yF: [33, 36], cM: [26, 50], jA: [50, 40], jB: [64, 44] } },
      { t: "Chen manda atacar de perto. Com arcabuzes e abordagens, os japoneses ganham a chance de lutar corpo a corpo.",
        p: { yK: [34, 38], cM: [34, 48], jA: [44, 42], jB: [56, 44] } },
      { t: "Os japoneses abordam a nau de Chen. Deng Zilong vai ajudar numa panokseon de Yi, mas navios Ming a confundem com um inimigo. Deng morre.",
        p: { cF: [36, 48], dZ: [38, 43] }, x: ["dZ"] },
      { t: "O navio de Yi entra na luta corpo a corpo e socorre o de Chen.",
        p: { yF: [38, 45], jA: [46, 42] } },
      { t: "Ao amanhecer, mais ou menos metade da frota japonesa está afundada ou capturada. A nau de Shimazu afunda, e ele é salvo por outros navios. O resto recua.",
        p: { jB: [68, 52] }, x: ["jA"] },
      { t: "Os aliados perseguem os japoneses pela costa sul de Namhae, rumo a Busan. Na perseguição, um tiro de arcabuz atinge Yi. Ele pede que sua morte não seja anunciada.",
        p: { yK: [58, 48], yF: [56, 52], cM: [52, 56], cF: [50, 54], jB: [84, 56] } }
    ]
  },

  shiroyama: {
    terrain: [
      { t: "hill", x: 50, y: 34, rx: 22, ry: 15, l: "Monte Shiroyama" },
      { t: "sea", x: 0, y: 62, w: 100, h: 8, l: "Baía de Kagoshima" }
    ],
    units: [
      { id: "iN", s: "a", k: "inf", w: 44, h: 4, l: "Exército imperial (norte)" },
      { id: "iW", s: "a", k: "inf", w: 4, h: 22, l: "Imperiais (oeste)" },
      { id: "iE", s: "a", k: "inf", w: 4, h: 22, l: "Imperiais (leste)" },
      { id: "iMar", s: "a", k: "inf", w: 14, h: 4, l: "Marinha (Kawamura)" },
      { id: "iShip", s: "a", k: "ship", w: 20, h: 4, l: "5 navios de guerra" },
      { id: "sMain", s: "b", k: "inf", w: 14, h: 8, l: "Rebeldes de Satsuma" },
      { id: "sSai", s: "b", k: "inf", w: 3, h: 3, l: "Saigō" },
      { id: "sCave", s: "b", k: "camp", w: 8, h: 4, l: "Caverna de Iwasaki" }
    ],
    steps: [
      { t: "Em 1º de setembro, Saigō ocupa o monte com algumas centenas de homens. Os imperiais, muito mais numerosos, cercam Shiroyama e levantam fortificações em volta.",
        p: { iN: [50, 10], iW: [14, 34], iE: [86, 34], iMar: [50, 55], iShip: [50, 65], sMain: [50, 34], sSai: [45, 34], sCave: [60, 44] } },
      { t: "Em 23 de setembro, Kawamura exige rendição até as 17h. Saigō manda dizer que não precisa responder.",
        p: { iN: [50, 14], iW: [18, 34], iE: [82, 34] } },
      { t: "Na noite de 23 para 24, os navios e a artilharia bombardeiam o monte. Os rebeldes têm pouca munição, e o quartel passa para uma caverna.",
        p: { sMain: [52, 38], sSai: [50, 41] } },
      { t: "Às 4h, ao sinal de três tiros de canhão, os imperiais sobem o monte por todos os lados.",
        p: { iN: [50, 20], iW: [27, 34], iE: [73, 34], iMar: [50, 49] } },
      { t: "Os samurais saem de espada na mão e correm contra as linhas imperiais. Por alguns minutos, desorganizam parte delas. Depois são empurrados de volta.",
        p: { sMain: [50, 27], sSai: [47, 29] } },
      { t: "Saigō é ferido. Beppu Shinsuke o carrega para achar um lugar onde morrer. Segundo a tradição, ele é decapitado, e a cabeça é escondida.",
        p: { sMain: [50, 32], sSai: [55, 42] }, x: ["sSai"] },
      { t: "Beppu assume o comando. Os últimos rebeldes, sem munição, descem o monte de espada na mão sob o fogo. Beppu morre.",
        p: { sMain: [52, 46, 15], iMar: [56, 53] } },
      { t: "Por volta das 7h, o último foco de resistência cai. A rebelião acabou.",
        p: { iN: [50, 26], iW: [32, 34], iE: [68, 34] }, x: ["sMain", "sCave"] }
    ]
  }
});
