// In-depth battles, batch q: lepanto, nagashino, haldighati, alcacerquibir, chuvash, armada.
// Checked against the English, Portuguese, Spanish, Japanese and (where it loaded) other Wikipedia articles on each battle,
// its commanders and its war, plus Britannica-level summaries found by web search. Where sources disagree (numbers, dates,
// who was where), the text gives the range and says so.

Object.assign(GLOSSARY, {
  "galeaça": "Galé gigante, mais larga e pesada que as outras, com muitos canhões na proa e nas laterais. As seis que Veneza levou a Lepanto eram como fortes flutuantes.",
  "galiota": "Galé pequena e rápida, com poucos remos e pouca gente. Era muito usada pelos corsários do norte da África.",
  "capitânia": "O navio onde fica o comandante de uma frota ou de um esquadrão, e de onde saem as ordens.",
  "liga santa": "A aliança de 1571 entre Espanha, Veneza e o Papado, com a ajuda de outros Estados italianos e da Ordem de Malta, para enfrentar o Império Otomano no Mediterrâneo. Foi organizada pelo papa Pio V.",
  "paliçada": "Cerca de estacas ou troncos fincados no chão, para segurar cavalos ou proteger tiradores.",
  "terço": "Unidade de infantaria espanhola e portuguesa do século 16, com milhares de homens: piqueiros, arcabuzeiros e outros soldados misturados num mesmo corpo. Foi a base dos exércitos ibéricos da época.",
  "maharana": "O título dos reis de Mewar, no Rajastão. Quer dizer algo como 'grande rana', o mesmo que 'grande rei' entre os rajputs.",
  "bhil": "Povo das colinas e florestas do Rajastão, famoso pelos arqueiros. Durante séculos foram aliados fiéis dos reis de Mewar.",
  "saadianos": "A dinastia que governou o Marrocos de 1549 a 1659. Seus sultões se diziam descendentes do Profeta e tinham uma disputa constante com os otomanos e os ibéricos.",
  "sebastianismo": "A crença de que D. Sebastião não morreu em Alcácer-Quibir e voltaria um dia para salvar Portugal. Atravessou séculos, e no Brasil reapareceu em movimentos populares do interior.",
  "galeão": "Navio de guerra a vela do século 16, alto, comprido e com muitos canhões nas laterais. Nas mãos dos ingleses, foi mais baixo e mais ágil.",
  "barlavento": "O lado de onde vem o vento. Quem está a barlavento do inimigo escolhe quando e a que distância atacar, porque pode se aproximar ou se afastar à vontade.",
  "cossacos": "Homens livres das estepes da Ucrânia e da Rússia, armados e acostumados à guerra, que viviam de saques e de serviço a quem pagasse. Muitos foram a ponta de lança da expansão russa.",
  "canato": "Reino governado por um cã, o título de chefe dos povos turcos e mongóis.",
  "tsar": "O título do soberano da Rússia. Ivan IV, o Terrível, foi o primeiro a ser coroado tsar, em 1547."
});

Object.assign(DEEP, {
  lepanto: {
    war: "Guerra de Chipre, entre Veneza e o Império Otomano (1570–1573)",
    hook: "A maior batalha de galés da história durou poucas horas e não devolveu Chipre a ninguém.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1571, o Império Otomano era a maior potência do Mediterrâneo oriental. Tinha tomado Constantinopla em 1453, e o sultão governava do Danúbio ao norte da África. Veneza, uma república de mercadores, ainda segurava ilhas e portos no mar, mas vivia espremida: precisava do comércio com o Oriente e, ao mesmo tempo, vivia sob a ameaça do vizinho turco.",
        "Chipre era a joia que faltava aos otomanos. Pertencia a Veneza desde o século 15, ficava a poucos dias de navegação da costa da Turquia e da Síria, e era a última ilha cristã grande da região. Em 1570, os otomanos desembarcaram. Nicósia caiu em setembro desse ano. Restou Famagusta, que resistiu até o começo de agosto de 1571. O comandante otomano, Lala Mustafá Paxá, prometeu aos defensores uma saída honrosa e não cumpriu: mandou prender os venezianos e executou o governador Marcantonio Bragadin de forma atroz, segundo as fontes, esfolando-o vivo.",
        { h: "O caminho até Lepanto" },
        { timeline: [
          ["1570", "Os otomanos desembarcam em Chipre. Nicósia cai em setembro."],
          ["20 e 25 de maio de 1571", "A [[liga santa]], promovida pelo papa Pio V, é acertada e anunciada. Espanha e Veneza são as principais potências."],
          ["Julho e agosto de 1571", "Os navios da Liga se juntam em Messina, na Sicília. Famagusta se rende no início de agosto."],
          ["7 de outubro de 1571", "As duas frotas se encontram na entrada do golfo de Patras, na Grécia."]
        ]},
        "A Liga foi difícil de montar. Cada aliado queria uma coisa: Veneza queria salvar Chipre, e a Espanha, que pagava a maior parte da conta, tinha muitos inimigos no norte da África e guardava parte de suas galés para eles. Filipe II foi aceitando aos poucos. O papa foi quem empurrou a aliança, tratando a guerra como [[cruzada]]."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "D. João da Áustria, 24 anos" },
        "Filho ilegítimo do imperador Carlos V e meio-irmão do rei Filipe II, foi escolhido para o comando geral da Liga. Era jovem e não tinha comandado nada daquele tamanho. Sua [[capitânia]], a Real, ficou no centro da linha, onde a batalha ia ser decidida. Em torno dele, a Liga arrumou outros comandantes de peso, cada um de uma potência: Marcantonio Colonna, capitão do Papa, e Sebastiano Veniero, o veneziano.",
        { h: "Ali Paxá, comandante otomano" },
        "Müezzinzade Ali Paxá era o comandante-em-chefe da frota do sultão e comandava o centro, na [[capitânia]] Sultana. Perto dele, Mehmed Siroco (Sirocco) comandava a ala direita, e Uluç Ali, um corsário que tinha nascido cristão e passado ao serviço do sultão, a ala esquerda. Os otomanos não tinham perdido uma grande batalha naval desde o século 15.",
        { h: "Os outros nomes" },
        "O veneziano Agostino Barbarigo comandou a ala esquerda da Liga, ao longo da costa. O genovês Gianandrea Doria comandou a direita, mar adentro. A reserva ficou com o espanhol Álvaro de Bazán, o marquês de Santa Cruz. Entre os soldados da Liga estava um jovem de 24 anos chamado Miguel de Cervantes, que anos depois escreveria Dom Quixote."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As contas variam de uma fonte para outra, e as estimativas de hoje fazem as duas frotas parecerem quase iguais. A Liga tinha cerca de 206 [[galés|galé]] e 6 [[galeaças|galeaça]], e uns 30.000 soldados (cerca de 7.000 espanhóis, 7.000 alemães, 6.000 italianos e 5.000 venezianos), mais uns 40.000 marinheiros e remadores. Veneza deu mais da metade dos navios: 109 galés e as 6 galeaças.",
        "Os otomanos tinham cerca de 211 galés e 63 [[galiotas|galiota]], segundo a Wikipedia em inglês (a em espanhol dá 210 galés e 87 galiotas). Levavam entre 25.000 e 34.000 soldados, entre eles os [[janízaros]], e quase todos os remadores, uns 37.000 a 41.000, eram escravos. A Liga tinha mais canhões, cerca de 1.800, contra uns 750 dos turcos, que ainda por cima tinham pouca munição.",
        { note: "Os números de gente e de navios são os mais incertos da batalha: as fontes dão de 85.000 a mais de 120.000 homens para um dos lados. Usamos as faixas das enciclopédias, sem fingir precisão." },
        { h: "O terreno" },
        "A batalha é chamada pelo nome da cidade de Lepanto (hoje Náfpaktos), mas foi travada no mar, perto das ilhas Oxia, na entrada do golfo de Patras, na costa oeste da Grécia. Para uma batalha de galés, o ideal é mar calmo e vento fraco, porque o que manda é o remo. O vento só importava para um detalhe: no começo, soprava contra a Liga, e por volta do meio-dia mudou a favor dela, o que deixou a maior parte dos esquadrões chegar às suas posições.",
        { h: "A manhã de 7 de outubro" },
        "D. João passou entre os navios para inspecionar a frota. Foram dados os sacramentos, e os remadores cristãos foram soltos das correntes e armados. A Liga se arrumou em quatro grupos: ao norte, colado à costa, Barbarigo, com 53 galés; no centro, D. João, com 62; ao sul, Doria, com 53; e atrás, de reserva, Santa Cruz, com 38. Cada ala recebeu duas galeaças, postas à frente da linha. Do outro lado, os turcos vinham em forma de meia-lua: Siroco à direita, Ali Paxá ao centro (88 galés e 8 galiotas) e Uluç Ali à esquerda, mais para o mar aberto.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, as galeaças. À frente da linha cristã, elas abriram fogo a curta distância contra as galés turcas da frente. Eram navios enormes, cheios de canhões, e a linha otomana, que vinha em ordem, se desfez antes do choque principal.",
        "Segundo, o norte. Siroco tentou passar entre Barbarigo e a costa, usando o conhecimento das profundidades. A manobra quase deu certo, e Barbarigo morreu, atingido por uma flecha no olho, segundo os relatos. Mas a ala aguentou, e a reserva de Santa Cruz chegou e estabilizou a situação. Siroco foi morto.",
        "Terceiro, o centro. A Sultana de Ali Paxá se chocou contra a Real de D. João, e as duas capitânias viraram um campo de batalha flutuante: os janízaros subiram à proa da Real e foram repelidos pelos soldados espanhóis e italianos. Durante cerca de uma hora, os dois lados lutaram de espada, lança e arcabuz no convés. Colonna entrou na briga com um contra-ataque, a Sultana foi tomada, e Ali Paxá foi morto. Segundo a tradição, a cabeça dele foi erguida numa lança, e a vista disso desmoralizou o centro turco.",
        "Quarto, o sul. Doria, em vez de ficar na posição que lhe tinham dado, desceu para o sul, e seus próprios capitães entenderam aquilo como traição. Uluç Ali aproveitou a brecha, atacou o flanco do centro e ameaçou as galés da Ordem de Malta, capturando uma bandeira. A reserva de Santa Cruz acudiu de novo, e Uluç Ali recuou com cerca de 30 navios. Os outros turcos foram batidos, e em poucas horas a luta acabou. Alguns remadores gregos se amotinaram e entregaram os próprios navios à Liga."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Liga capturou cerca de 117 galés e afundou ou destruiu cerca de 83, ou seja, uns 200 navios otomanos fora de combate, segundo a Wikipedia em inglês. Perdeu 13 galés. As mortes são o ponto mais disputado: de 7.500 a 10.000 do lado cristão e de 20.000 a 40.000 do lado turco. Cerca de 8.000 a 10.000 turcos foram presos, e entre 12.000 e 15.000 cristãos escravizados foram libertados dos remos turcos.",
        "O resultado político foi bem menor que o militar. O papa Pio V morreu em maio de 1572, e a Liga se desmanchou. Os turcos reconstruíram a frota em cerca de seis meses, com mais de 150 galés e 8 galeaças. Em março de 1573, Veneza fez a paz sozinha: entregou Chipre e pagou 300.000 ducados. Em 1574, os otomanos retomaram Tunis. O grão-vizir Sokollu Mehmed Paxá teria dito ao embaixador veneziano que a perda de Chipre foi um braço cortado, enquanto Lepanto só tinha raspado a barba, e que a barba cresce de novo.",
        { h: "Por que importa" },
        "Lepanto foi a maior batalha naval do mundo ocidental desde a Antiguidade e a última importante travada quase só com navios a remo. Quebrou o mito de que os otomanos eram invencíveis no mar, e os cristãos de toda a Europa festejaram: Pio V criou a festa de Nossa Senhora da Vitória, hoje chamada de Nossa Senhora do Rosário. Muitos historiadores acham, porém, que o golpe real foi nos marinheiros: a perda de tripulações experientes deixou os otomanos com mais dificuldade nos mares depois de 1580. Nas décadas seguintes, o navio a vela, o [[galeão]], tomou o lugar da galé como navio principal.",
        { h: "Curiosidades e controvérsias" },
        { note: "Cervantes: segundo a Wikipedia em espanhol, ele estava na galé Marquesa, foi ferido e perdeu o movimento da mão esquerda, o que lhe deu o apelido de 'manco de Lepanto'. Anos depois, ele chamou a batalha de a ocasião mais alta e memorável que os séculos tinham visto." },
        { note: "Doria: ao descer para o sul em vez de ficar na posição que lhe tinham dado, ele fez seus próprios capitães pensarem em traição. A Wikipedia em inglês registra a suspeita, e o assunto continua sendo discutido." },
        { note: "Quem venceu de verdade? Para uns historiadores, Lepanto 'deteve a expansão otomana no Mediterrâneo'. Para outros, foi um triunfo sem consequências: a Liga não recuperou nenhum território que os turcos tinham tomado antes." }
      ]}
    ]
  },

  nagashino: {
    war: "Guerras do período Sengoku: Oda e Tokugawa contra os Takeda (1573–1582)",
    hook: "A cavalaria mais temida do Japão correu contra uma cerca de madeira e uma fileira de arcabuzes.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No Japão do século 16, não havia um governo forte. O [[xogum]] era uma figura fraca, e o país tinha virado um mosaico de senhores da guerra, os [[daimiô]], que brigavam entre si. É o chamado período [[sengoku]], o 'país em guerra'. Em volta de Kyoto e do centro do país, Oda Nobunaga tinha ficado forte e queria unificar tudo à força. Seu aliado, Tokugawa Ieyasu, dominava a região de Mikawa, na costa do Pacífico.",
        "Ao leste, ficava o [[clã]] Takeda, da província de Kai, nas montanhas. Os Takeda tinham a fama de ter a melhor cavalaria do Japão, e seu chefe, Takeda Shingen, era um dos senhores que Nobunaga mais respeitava. Em maio de 1573, durante uma campanha em Mikawa, Shingen adoeceu e o exército voltou para Kai. A morte dele foi escondida por um tempo, e o filho, Takeda Katsuyori, assumiu.",
        { h: "O caminho até Nagashino" },
        { timeline: [
          ["Maio de 1573", "Shingen adoece em campanha e depois morre. Katsuyori assume o clã Takeda."],
          ["1573–1574", "Ieyasu, com a ajuda de famílias locais, recupera terras no norte de Mikawa e retoma o castelo de Nagashino."],
          ["Junho de 1575", "Katsuyori cerca Nagashino com cerca de 15.000 homens. O castelo tem uns 500 defensores."],
          ["Fim de junho de 1575", "Nobunaga e Ieyasu chegam com um exército de uns 38.000 homens e se postam diante dos Takeda, do outro lado de um riacho."]
        ]},
        "Katsuyori queria mostrar que continuava forte como o pai. Os generais mais velhos do clã, ainda leais, tinham dúvidas. A guerra contra Nobunaga e Ieyasu era uma aposta."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Oda Nobunaga, 41 anos" },
        "Senhor da província de Owari, tinha vencido os Imagawa em Okehazama e destruído templos fortificados que se opunham a ele. Não gostava de tradição por tradição: gostava do que funcionava. Foi dos primeiros daimiô a investir pesado em armas de fogo, que os portugueses tinham trazido ao Japão em 1543.",
        { h: "Takeda Katsuyori, 29 anos" },
        "Quarto filho de Shingen, chegou ao comando do clã quando o pai morreu e queria provar que era digno dele. Para os historiadores de hoje, o ataque dele em Nagashino não foi tão tolo quanto parece: era a tática comum da época e tinha dado certo antes. Ele não tinha como saber que a cerca e as armas mudariam o resultado.",
        { h: "Os outros nomes" },
        "Tokugawa Ieyasu, 33 anos, aliado de Nobunaga, mobilizou uns 8.000 homens. Okudaira Nobumasa defendeu o castelo de Nagashino. Sakai Tadatsugu, general de Ieyasu, propôs o ataque noturno que decidiu a batalha. Do lado Takeda, os veteranos de Shingen estavam quase todos lá: Yamagata Masakage, Baba Nobuharu, Naito Masatoyo e os irmãos Sanada, entre outros."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado de Nobunaga e Ieyasu, a conta tradicional é de uns 38.000 homens: cerca de 30.000 de Nobunaga e uns 8.000 de Ieyasu. Já historiadores modernos propõem menos, como 12.000 a 13.000 para os Oda e 4.000 a 5.000 para os Tokugawa. Os Takeda tinham cerca de 15.000 no total, mas só uns 12.000 foram para o campo de batalha, porque cerca de 3.000 ficaram cercando o castelo.",
        "Os [[arcabuzes|arcabuz]] são o centro da lenda. A tradição diz que Nobunaga tinha 3.000 arcabuzeiros. O registro mais confiável da época, a crônica Shinchō Kōki, escrita por um vassalo de Nobunaga, fala em cerca de 1.000, e só em versões copiadas depois o número virou 3.000. Os Takeda também tinham armas de fogo, talvez entre 1.000 e 1.500, e tinham usado muitas em outras batalhas. Os historiadores também notam que os exércitos dos dois lados eram parecidos: misturavam cavaleiros, infantaria e atiradores.",
        { note: "O número 3.000 e a imagem dos três turnos de tiro vêm de uma biografia romanceada de Nobunaga, do período Edo (Shinchōki, de Oze Hoan), e não do registro da época. A história foi repetida nos livros escolares do século 19 e virou 'fato'." },
        { h: "O terreno" },
        "A batalha foi em Shitaragahara, uma planície com cerca de 4 km a oeste do castelo, cortada por um riacho, o rio Rengo. Nobunaga escolheu uma depressão que escondia o tamanho de seu exército. Por ordem dele, os soldados construíram uma longa cerca de madeira contra cavalos, atrás de valas e aterros. Os historiadores acham essa cerca incomum para o Japão da época e discutem se teria influência de fortificações europeias.",
        { h: "O ataque noturno" },
        "Na noite de 28 para 29 de junho, por conselho de Sakai Tadatsugu, cerca de 4.000 homens, entre eles uns 500 arcabuzeiros, saíram do acampamento e deram a volta pelas montanhas. Segundo uma tradição, Nobunaga rejeitou a ideia em público e a aprovou em segredo, para não deixar o plano vazar. O alvo era o forte do monte Tobigasu, que ficava atrás dos Takeda.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, o ataque pelas costas. Na madrugada, a força de Sakai tomou o forte e vários fortes menores. Com isso, a guarnição do castelo saiu e ajudou a expulsar os Takeda que cercavam Nagashino. Katsuyori perdeu a rota de retirada. Voltar atrás era difícil, e ficar parado, pior. Ele decidiu atacar de frente.",
        "Segundo, as ondas. Os Takeda avançaram contra a cerca em onda após onda, mais ou menos de manhã. Yamagata Masakage liderou o primeiro ataque e foi abatido. Os atiradores de Nobunaga, em unidades sob o comando de cinco comissários, esperaram atrás da cerca. Cada vez que a cavalaria se aproximava, os tiros e os cercados quebravam o ímpeto.",
        "Terceiro, o desgaste. A luta durou muitas horas, até a tarde, cerca de oito horas segundo uma fonte. Baba Nobuharu, Naito Masatoyo e os irmãos Sanada estiveram entre os que morreram nas investidas contra a cerca, e a cada onda a cavalaria diminuía.",
        "Quarto, a derrota. Por volta das 14 horas, a linha Takeda se quebrou, e as tropas de Nobunaga saíram da cerca para perseguir. Segundo as crônicas, a maioria dos mortos Takeda caiu na fuga, não no combate. Katsuyori escapou com poucos homens e voltou a Kai."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os Takeda perderam entre 10.000 e 12.000 homens, segundo a Shinchō Kōki e a Wikipedia em inglês (ela chegou a ser contestada: um diário da época fala em pouco mais de mil). Os aliados tiveram umas 6.000 baixas. Morreram quase todos os generais mais velhos do clã, entre eles Yamagata, Baba, Naito, Hara Masatane, Saegusa Moritomo, Tsuchiya Masatsugu e os dois irmãos Sanada.",
        "Katsuyori não conseguiu manter as terras que tinha conquistado, e Ieyasu recuperou os castelos perdidos. O clã Takeda sobreviveu mais sete anos, mas sem força. Em 1582, foi destruído por Nobunaga e seus aliados, e Katsuyori morreu.",
        { h: "Por que importa" },
        "A batalha é vista como a virada em que o caminho de Nobunaga para unificar o Japão passou a parecer seguro. O que ela provou foi a força de uma fórmula: um exército grande, bem abastecido, com fortificação de campo e armas de fogo, contra uma carga de cavalaria. Também é uma das batalhas japonesas mais conhecidas fora do país, graças ao filme 'Kagemusha', de Akira Kurosawa.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os três turnos de tiro: até os anos 1980, quase todos os livros diziam que Nobunaga organizou os arcabuzeiros em três fileiras que se revezavam, sem pausa. O historiador Fujimoto Masayuki desafiou a história em 1980, e experimentos com reconstituições mostraram que ela não funciona na prática. Hoje, a maioria dos estudiosos duvida." },
        { note: "A cavalaria Takeda: a imagem de samurais a cavalo contra armas de fogo é um clichê. Estudos modernos dizem que os Takeda também usavam armas de fogo, que a cavalaria deles era menor do que o mito diz e que os cavalos não eram desacostumados ao barulho. Também sugerem que os Oda tinham mais acesso a chumbo importado, e os Takeda recorreram a cobre derretido de moedas." },
        { note: "Torii Suneemon: a tradição conta que um soldado do castelo furou o cerco para pedir socorro a Ieyasu, foi capturado na volta e crucificado depois de gritar que a ajuda estava a caminho. A história não aparece na crônica mais confiável e foi acrescentada em versões posteriores." },
        { note: "A data: no calendário japonês, a batalha foi no 21º dia do 5º mês do ano Tenshō 3. A Wikipedia em japonês a converte para 29 de junho de 1575 no calendário juliano; muitas fontes em inglês dão 28 de junho." }
      ]}
    ]
  },

  haldighati: {
    war: "Akbar contra Mewar (1568–1597)",
    hook: "Os dois lados dizem que ganharam, e um deles tem razão: o campo foi mogol, mas o rei fugiu e continuou lutando por vinte anos.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1576, o imperador mogol Akbar tinha 33 anos e governava um império em plena expansão no norte da Índia. A cada ano, os [[mogóis]] anexavam um reino ou compravam a lealdade de outro. Akbar usava a força, mas também a diplomacia: casava-se com princesas [[rajputs]] e dava a seus parentes cargos altos na corte. Quase todos os reis rajputs, orgulhosos guerreiros hindus do Rajastão, tinham aceitado esse acordo.",
        "Mewar era a exceção. Seu reino ocupava a região de colinas cobertas de mata da cordilheira Aravalli, no sul do Rajastão, e ficava no caminho para as ricas terras de Gujarat, que Akbar queria ligar ao resto do império. Em 1568, Akbar tinha tomado Chittor, a grande fortaleza de Mewar, e com ela o leste fértil do reino. O rei da época, Udai Singh II, tinha fugido para as colinas, onde fundou a cidade de Udaipur.",
        { h: "O caminho até Haldighati" },
        { timeline: [
          ["1568", "Akbar toma Chittor depois de um longo cerco. Mewar perde a parte mais rica do reino."],
          ["1572", "Pratap Singh é coroado [[maharana]] de Mewar e se recusa a aceitar Akbar como senhor."],
          ["1572–1573", "Akbar manda vários embaixadores a Pratap, entre eles Man Singh de Amber, Bhagwant Das e Todar Mal. Todos fracassam."],
          ["18 de junho de 1576", "O exército mogol de Man Singh e o de Pratap se enfrentam em Haldighati."]
        ]},
        "Pratap era um rei sem muitas terras, mas com um prestígio enorme entre os rajputs. Aceitar Akbar significaria entrar para a corte mogol, como os outros. Recusar significava a guerra."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Maharana Pratap, cerca de 36 anos" },
        "Pratap Singh nasceu em 1540 e era o filho mais velho de Udai Singh II. Foi coroado em 1572, depois de uma disputa pela sucessão. Pelo que contam as tradições dos rajputs, ele preferiu viver nas montanhas, com pouco, a servir ao imperador. Os historiadores modernos matizam: para o historiador Satish Chandra, o que estava em jogo era a honra pessoal de Pratap, e não uma causa de todos os rajputs ou de todos os hindus.",
        { h: "Man Singh de Amber, cerca de 25 anos" },
        "Hindu e rajput, como Pratap, mas do outro lado. Seu reino, Amber, estava aliado de Akbar havia anos, e ele era um dos generais mais confiáveis do imperador. A tradição rajput conta que, numa visita a Pratap, ele foi insultado num banquete, mas muitos historiadores acham a história exagerada. Mais tarde, Man Singh venceria muitas guerras para os mogóis, de Cabul à Bengala.",
        { h: "Os outros nomes" },
        "Do lado de Pratap, havia comandantes de peso: Hakim Khan Sur, um muçulmano de origem afegã, no comando da vanguarda; Ram Shah Tomar, que lutou com seus filhos; Bida Jhala, na ala esquerda (alguns autores o identificam com Jhala Man Singh, de quem se fala adiante); e Punja, o chefe dos arqueiros [[bhils|bhil]]. Do lado mogol, estavam Asaf Khan e Jagannath Kachhwaha na vanguarda, Madho Singh Kachhwaha na reserva e Mihtar Khan na retaguarda. Isso importa: a batalha não foi 'hindus contra muçulmanos'. Em cada lado, havia hindus e muçulmanos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Aqui as fontes brigam. A tradição de Mewar fala em 20.000 homens de Pratap contra 80.000 mogóis, e o historiador Jadunath Sarkar chama esses números de exagero. O cronista Badayuni, da corte mogol, diz que Pratap tinha cerca de 3.000 cavaleiros e 400 arqueiros bhil, e que Man Singh tinha cerca de 10.000, dos quais 4.000 kachhwahas (a gente de Man Singh), mil de outros hindus e 5.000 muçulmanos. Satish Chandra fala em 5.000 a 10.000 para os mogóis.",
        "Os dois lados tinham [[elefantes de guerra]]. Os mogóis tinham mosquetes, mas não tinham artilharia. Os rajputs não tinham armas de fogo.",
        { h: "O terreno" },
        "Haldighati é um desfiladeiro estreito numa ponta das colinas Aravalli, perto de Gogunda. O nome quer dizer 'passagem da terra amarela', por causa da cor das rochas. A aldeia de Khamnor fica a cerca de 23 km ao norte de Gogunda. As fontes mogóis colocam a luta decisiva perto de Khamnor, e Badayuni, perto de Gogunda. Badayuni data o encontro de 21 de junho, e as outras fontes dão 18 de junho de 1576. A luta começou três horas depois do nascer do sol.",
        { h: "A batalha em quatro movimentos" },
        "Primeiro, o ataque de Pratap. A carga dos rajputs foi tão forte que rompeu as alas e o centro mogóis. Segundo o cronista Abul Fazl, os mogóis recuaram até um lugar chamado Rati Talai, que depois ganhou o nome de Rakt Talai, o 'lago de sangue', antes de se reagrupar. Foi o melhor momento de Pratap.",
        "Segundo, a reação. Man Singh mandou a retaguarda imperial. Mihtar Khan, segundo uma tradição, bateu os tambores e espalhou o boato de que reforços do imperador estavam a caminho, o que levantou o ânimo dos mogóis e abalou o dos rajputs. Os mosqueteiros mogóis quebraram a carga dos elefantes de guerra de Mewar.",
        "Terceiro, a retirada. Ferido, Pratap foi convencido pelos nobres a deixar o campo. Para dar tempo a ele, um dos chefes, Jhala Man Singh, pôs os emblemas reais e atraiu os ataques mogóis para si. Foi morto. Pratap escapou.",
        "Quarto, o fim. Sem o rei, os homens de Mewar começaram a abandonar o campo. A batalha durou mais de três horas. Man Singh ficou com o campo, mas não perseguiu Pratap. Para a historiadora Rima Hooja, a razão foi o respeito pessoal que ele tinha pelo adversário. Akbar o repreendeu por isso e, segundo uma fonte, afastou-o da corte por um tempo."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As baixas são outro ponto controverso. Abul Fazl e Nizamuddin Ahmad dão cerca de 150 mogóis mortos e 350 feridos, e cerca de 500 mortos de Mewar. Badayuni fala em 500 mortos no total, dos quais 120 muçulmanos. Sarkar, usando fontes de Mewar, calcula que cerca de 46% dos uns 3.400 homens de Pratap morreram ou ficaram feridos. As crônicas rajputs posteriores falam em até 20.000 mortos, número que os historiadores consideram inflado.",
        "Man Singh tomou Gogunda em poucos dias, e em setembro de 1576 o próprio Akbar liderou uma campanha. Gogunda, Udaipur e Kumbhalgarh passaram ao controle mogol. Nos anos seguintes, os ataques de Shahbaz Khan empurraram Pratap para as montanhas. Mas depois de 1579 a pressão diminuiu, e em 1584 Pratap repeliu outra expedição, a de Jagannath Kachhwaha. Quando a atenção de Akbar foi para outros lugares, Pratap recuperou cerca de 36 postos, entre eles Udaipur e Gogunda. Chittor e Mandalgarh continuaram mogóis. Sua corte ficou em Chavand, onde ele protegeu poetas e artistas. Pratap morreu ali, em 19 de janeiro de 1597, depois de um acidente de caça. Tinha 56 anos.",
        { h: "Por que importa" },
        "Para muitos indianos, Pratap é o símbolo da resistência e do orgulho,. A figura de Man Singh, do outro lado, lembra que a história dos rajputs e dos mogóis era muito mais complicada do que uma briga entre hindus e muçulmanos.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem ganhou? A maioria dos historiadores, entre eles D. N. Jha, Tanuja Kothiyal e Rima Hooja, registra uma vitória mogol no campo. Satish Chandra chamou a batalha de 'vitória inútil' para os mogóis, porque não conseguiram capturar nem Pratap nem sua família, e Akbar ainda precisou fazer campanha depois. Autoridades de alguns governos do Rajastão afirmam que Pratap venceu, e os historiadores rejeitam isso." },
        { note: "Chetak: segundo a tradição, o cavalo de Pratap saltou um riacho com o dono ferido e morreu logo depois. A cena em que Pratap, montado em Chetak, ataca o elefante de Man Singh é tratada por Sarkar como lenda." },
        { note: "O elefante Ram Prasad: Akbar pediu várias vezes esse elefante a Pratap. Os mogóis o capturaram em Haldighati e o levaram ao imperador. Alguns historiadores leem a recusa anterior de Pratap em entregá-lo como sinal de que ele não pretendia se submeter." }
      ]}
    ]
  },

  alcacerquibir: {
    war: "Intervenção portuguesa na guerra civil do Marrocos (1576–1578)",
    hook: "Em uma tarde de agosto, Portugal perdeu o rei, a nobreza e, dois anos depois, a independência.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século 16, Portugal tinha um império que ia do Brasil à Índia e ao Japão, mas, no norte da África, estava empacado. As praças que tinha conquistado no Marrocos, como Ceuta, Tânger e Arzila, eram caras de manter e valiam pouco. Do outro lado do Mediterrâneo, o poder estava com os otomanos, que já dominavam a Argélia e a Tunísia e podiam ameaçar a Península Ibérica.",
        "O Marrocos era governado pela dinastia [[saadiana|saadianos]]. Em 1576, o sultão Abu Abdallah Mohammed II, que os portugueses chamavam de Mulei Mohamed, foi derrubado pelo tio, Abd al-Malik (Mulei Maluco, nos textos portugueses), que tinha apoio otomano. Mulei Mohamed fugiu e pediu ajuda a Portugal, oferecendo, segundo as fontes em português, entregar praças como Larache, Arzila e Tetuão em troca de apoio militar.",
        { h: "O caminho até Alcácer-Quibir" },
        { timeline: [
          ["1554", "Nasce D. Sebastião, neto do rei D. João III, duas semanas depois da morte do pai. Vira rei aos 3 anos, em 1557."],
          ["1568", "Sebastião, com 14 anos, assume o governo. É devoto e sonha com uma cruzada na África."],
          ["1576", "Abd al-Malik derruba o sobrinho, Mulei Mohamed, que pede ajuda a Portugal."],
          ["Início de junho de 1578", "O exército sai de Lisboa. Desembarca em Arzila no fim de junho."],
          ["3 e 4 de agosto de 1578", "Chegam ao rio Mocazém (Wadi al-Makhazin), perto de Alcácer-Quibir, e se enfrentam no dia seguinte."]
        ]},
        "Filipe II da Espanha, tio de Sebastião, quis limitar a aventura. Nas conversas de Guadalupe (as fontes divergem entre o inverno de 1576 para 1577 e o Natal de 1577), ele ofereceu galés e soldados, mas com condições: uma campanha rápida e a conta paga por Portugal. Portugal não cumpriu o prazo de 1577, e a Espanha se considerou livre do acordo."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "D. Sebastião, 24 anos" },
        "Criado por jesuítas e muito religioso, nunca se casou e não tinha filhos. Tinha o sonho de uma grande vitória contra o islamismo, a mesma ideia de [[cruzada]] que movia os reis medievais. A mãe e o tio, Filipe II, tentaram dissuadi-lo. Seus comandantes também aconselharam cautela. Ele quis ir mesmo assim.",
        { h: "Abd al-Malik, o sultão doente" },
        "Chegou ao trono com apoio otomano e governava como vassalo de Istambul. No dia da batalha, estava gravemente doente e foi levado numa liteira. Ele não viu o fim: morreu durante o combate. As causas são incertas: os relatos falam em doença, esforço, e alguns em envenenamento por uma conspiração interna.",
        { h: "Os outros nomes" },
        "Mulei Mohamed, o sultão deposto, que ia junto com os portugueses e morreu afogado no rio ao fugir. Thomas Stukeley, um aventureiro inglês, comandava um contingente de cerca de 600 italianos que tinham sido reunidos para uma invasão da Irlanda. Do lado marroquino, o irmão de Abd al-Malik, Ahmad al-Mansur, assumiu o trono logo depois e passou à história como o grande sultão saadiano."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números do exército português variam muito. Segundo a Wikipedia em português, eram de 17.000 a 20.000 homens: uns 12.000 portugueses, 2.000 espanhóis, 2.800 alemães e valões, 600 italianos e 650 mouros aliados. A Wikipedia em inglês dá cerca de 23.000, contando 6.000 mouros aliados. Esse exército levava uns 40 canhões, muitos servos e civis, e cerca de 500 carros de bagagem.",
        "O exército marroquino é calculado entre 40.000 e 60.000 homens (as fontes mais altas falam em até 100.000), com cerca de 34 canhões. Tinha muita cavalaria, de 10.000 a 20.000 cavaleiros nas alas, uns 15.000 atiradores e cerca de mil arcabuzeiros a cavalo. Entre os soldados, havia andaluzes, renegados cristãos, e uma guarda de turcos.",
        { note: "O papel dos otomanos é discutido. Alguns historiadores dizem que os saadianos venceram sem ajuda direta dos turcos. Outros descrevem janízaros e infantaria de mosquete turca no campo. Fontes turcas modernas falam em tropas de Ramazã Paxá, mas elas tendem a exagerar." },
        { h: "O terreno" },
        "Uma planície junto ao rio Mocazém, perto da cidade de Alcácer-Quibir (Ksar el-Kebir), no norte do Marrocos. O exército português marchou por cerca de uma semana desde Arzila, no calor de agosto, e se afastou do litoral e dos navios, que podiam levá-lo de volta ou trazer socorro.",
        { h: "A véspera" },
        "Em 3 de agosto, os portugueses atravessaram o rio, quase seco. Ao meio-dia, de 10.000 a 12.000 cavaleiros saadianos apareceram na retaguarda, e os portugueses formaram um grande esquadrão. Por duas horas, os dois exércitos ficaram frente a frente sem combater, e depois os marroquinos se retiraram. Os portugueses acamparam entre trincheiras. Informantes disseram que o sultão tinha 100.000 homens e estava doente, numa liteira.",
        "Na manhã seguinte, por volta das 7 horas, houve conselho de guerra. Discutiu-se recuar até Larache ou esperar. Sebastião recusou: disse que não tinha ido só a Larache, mas para dar batalha ao sultão. O poeta e soldado Francisco de Aldana apoiou. Decidiu-se lutar.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, o desenho dos exércitos. Os portugueses se arrumaram num grande bloco: na frente, os aventureiros portugueses, espanhóis, alemães, valões e italianos; atrás, os [[terços|terço]] de Vasco da Silveira, com cerca de 5.000 homens; ao lado, os carros de bagagem; e na retaguarda, os terços de Francisco de Távora e Miguel de Noronha. Os marroquinos formaram três linhas de atiradores no centro, com a artilharia camuflada por ramos de tamargueira, e deixaram a cavalaria nas pontas, em forma de crescente. O sultão ficou atrás, numa liteira, protegido por uns 200 turcos.",
        "Segundo, o começo. Por volta das 11 horas, os jesuítas abençoaram a tropa, e os soldados se ajoelharam. Os portugueses atiraram. A artilharia marroquina se revelou e respondeu. Thomas Stukeley foi morto por uma bala de canhão cedo, segundo a Wikipedia em português. A cavalaria marroquina rodeou os portugueses pelos lados e pela retaguarda.",
        "Terceiro, o bom momento português. Cerca de meio-dia, Sebastião carregou com uns 600 cavaleiros pesados pelo flanco esquerdo, enquanto os aventureiros avançaram. O duque de Aveiro atacou a cavalaria saadiana junto ao rio. A cavalaria do rei rompeu a frente marroquina, e foi nesse intervalo que Abd al-Malik morreu. Os oficiais esconderam a morte dos soldados, o que evitou o pânico.",
        "Quarto, a virada. Álvaro Pires de Távora foi atingido, e uma ordem de recuo foi mal entendida pelas primeiras fileiras, que se quebraram. Os saadianos jogaram sobre os portugueses 200 a 300 turcos da guarda real, e a cavalaria das pontas fechou o crescente. Por volta das 14 horas, a vanguarda e a segunda linha estavam destruídas. O exército perdeu a coesão. Sebastião carregou ainda duas vezes com uns 200 cavaleiros. Os saadianos tomaram a artilharia e atingiram os carros de bagagem, onde estavam os não combatentes, e houve pânico. Um carro de barris de pólvora explodiu. A retaguarda foi a última força organizada, e quando Francisco de Távora morreu, seus homens depuseram as armas. A luta durou cerca de quatro horas, entre as 11 e as 17."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As cifras variam muito. Segundo estudos citados pela Wikipedia em português, morreram entre 8.000 e 10.000 homens do lado de Sebastião, e cerca de 17.000 foram capturados, contando também os que acompanhavam o exército. Fontes espanholas falam em mais mortos, e fontes portuguesas, em menos. Quase toda a nobreza portuguesa morreu ou foi presa.",
        "Três reis morreram: Sebastião, Abd al-Malik e o sultão deposto, Mulei Mohamed, que se afogou no rio. Por isso a batalha também é chamada de Batalha dos Três Reis. O corpo de Sebastião não foi reconhecido com certeza: uma versão diz que ele carregou até desaparecer entre os inimigos, e outra, mais ligada às fontes da época, diz que tentou sair do campo e foi alcançado e morto. Um corpo foi identificado formalmente em 5 de agosto de 1578 por alguns fidalgos, mas a identificação continua discutida.",
        { h: "O resgate e a coroa" },
        "Os fidalgos prisioneiros foram resgatados. Para oitenta deles, acertou-se um valor de 400.000 cruzados, cerca de 5.000 por pessoa, segundo o historiador Disney. O embaixador D. Francisco da Costa ficou em Marrakesh como fiador e morreu lá, em 1591, sem que a dívida fosse resolvida. A coroa já tinha gasto mais de um milhão de cruzados na expedição. Essa conta quase quebrou Portugal.",
        "O novo rei foi o tio-avô de Sebastião, o cardeal D. Henrique, já velho. Ele reinou de 1578 a 1580 e morreu sem herdeiros. Filipe II da Espanha, sobrinho do rei morto, invadiu, derrotou o prior do Crato em Alcântara, em 1580, e foi aclamado rei de Portugal em Tomar, em 1581. Portugal e suas colônias, o Brasil entre elas, ficaram sob os reis da Espanha até 1640.",
        { h: "Por que importa" },
        "Foi o fim das tentativas portuguesas de conquistar o Marrocos e o maior desastre militar da história de Portugal. No Marrocos, o novo sultão Ahmad al-Mansur ficou riquíssimo com os resgates, consolidou o poder e depois mandou um exército atravessar o Saara contra o Império Songhai, no atual Mali. E nasceu o [[sebastianismo]]: a esperança de que o rei desaparecido voltaria para salvar o país.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os impostores: durante a União Ibérica, quatro homens se disseram o rei Sebastião de volta. Um foi enforcado em 1603, depois de ser entregue por Veneza, e o último, em 1619." },
        { note: "Os números não fecham: a Wikipedia em português dá 17.000 a 20.000 soldados portugueses e, ao mesmo tempo, 8.000 mortos e 16.000 capturados. A conta só bate se os capturados incluírem muitos não combatentes (servos, mercadores, gente de acompanhamento)." },
        { note: "A morte de Abd al-Malik: segundo uma versão, ele morreu por doença e esforço; outra, que foi envenenado; todos concordam que a morte foi escondida da tropa até a vitória estar garantida." }
      ]}
    ]
  },

  chuvash: {
    war: "Conquista russa da Sibéria (1581–1598)",
    hook: "Algumas centenas de cossacos com arcabuzes derrubaram um reino inteiro e abriram o caminho para o Pacífico.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1582, a Sibéria era um mundo à parte. Para os russos, o território além dos montes Urais era quase desconhecido. Lá viviam povos de caçadores e pescadores, como os khantys e os mansis, e outros de origem turca e mongol. Na região do rio Irtysh, um [[canato]] muçulmano dominava os arredores: o Canato da Sibéria, com capital em Qashliq, também chamada de Isker ou Sibir. Foi dessa palavra que veio o nome Sibéria.",
        "O chefe desse canato era Kuchum. Descendente de Gengis Cã por linha indireta, tomou o trono em 1563, depois de derrotar o rival Yadigar. Nos anos 1570, apoiou a islamização, trazendo religiosos e colonos de Bukhara e de Kazan. Do outro lado dos Urais, a família Stroganov, riquíssima e dona de terras e salinas no rio Kama, tinha recebido uma concessão enorme do tsar em 1558. Em 1573, o cã mandou um sobrinho atacar as terras dos Stroganov.",
        { h: "O caminho até o rio Irtysh" },
        { timeline: [
          ["1558", "A família Stroganov recebe do [[tsar]] Ivan IV uma grande concessão na região do Kama e dos Urais."],
          ["1563", "Kuchum derrota Yadigar e vira cã da Sibéria."],
          ["1573", "Um sobrinho de Kuchum ataca terras dos Stroganov."],
          ["1579 a 1582", "Os Stroganov recrutam cossacos. As datas variam: uma carta do começo de 1579 convoca o bando, e a campanha começa entre 1579 e 1582, conforme o autor."],
          ["Outubro de 1582", "Combate de Chuvash Cape, perto de Qashliq. Os cossacos tomam a capital."]
        ]},
        "Ivan IV, o Terrível, estava ocupado com a Guerra da Livônia no oeste. Segundo uma versão, ele primeiro culpou Yermak pelos ataques de povos locais na região de Perm e exigiu que o chamassem de volta. Só depois da vitória mudou de ideia."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Yermak Timofeyevich" },
        "Um [[cossaco|cossacos]] de origem obscura: a data e o lugar de nascimento são discutidos. Segundo as fontes, nasceu por volta de 1532, perto do rio Chusovaya, e foi barqueiro dos Stroganov antes de virar pirata de rio, o que lhe deu o apelido. Era um líder de bando acostumado a rios, barcos e emboscadas. Comandava uns 540 homens, mais cerca de 300 enviados pelos Stroganov, no total de 840 (os autores divergem sobre os números).",
        { h: "Kuchum e Mametkul" },
        "O cã Kuchum era um senhor muçulmano de uma terra de povos muito diferentes e nem todos leais. Seu sobrinho Mametkul (Mahmet-kul) era o comandante principal na campanha. Alguns relatos dizem 'filho'; a maioria diz 'sobrinho'.",
        { h: "Os outros nomes" },
        "Ivan Koltso, cossaco de confiança de Yermak, levou ao tsar as notícias da vitória e peles de presente. Karacha, antigo funcionário de Kuchum, é um personagem que depois entrou em cena nos anos seguintes, contra Yermak."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado dos cossacos, a conta é de 540 a 840 homens, armados com arcabuzes (a Wikipedia em inglês cita 540 homens e cerca de 200 que se juntaram depois). Do lado do cã, ninguém sabe: a Wikipedia em inglês dá 3.400 homens, mas marca o número como sem fonte. Eram tártaros da corte, mais guerreiros khantys e mansis, em geral caçadores sem experiência contra armas de fogo.",
        { note: "A ideia de que os siberianos não conheciam armas de fogo é disputada. Há relatos de que os tártaros tinham canhões em posição, mas que eles não dispararam na batalha." },
        { h: "A viagem" },
        "A tropa saiu da região de Perm e desceu o Chusovaya em barcos. Depois, atravessou os Urais, transportando barcos e carga por terra até o rio Tagil, e desceu o Tura e o Tobol. Pelo caminho, derrotou príncipes locais e tomou pequenas fortificações. A data de partida é discutida: 1579, 1581 ou setembro de 1582. Um autor observa que, se foi em 1582, sobrou pouco tempo para construir os barcos.",
        { h: "A batalha em dois movimentos" },
        "A localização é disputada: uns a colocam em Chuvash Cape, no Irtysh, perto da capital, e outros mais perto do rio Tobol. O que as fontes concordam é o desenho geral. Os guerreiros de Kuchum esperavam atrás de uma barreira de troncos cortados, na margem do rio, e preferiram lutar ali a esperar um cerco.",
        "Primeiro, o tiro. Os cossacos chegaram à margem e atiraram. Os siberianos responderam com flechas, e o fogo russo causou poucas baixas, porque os tártaros estavam escondidos entre as árvores caídas. Alguns relatos falam em três dias de luta e em um primeiro ataque que falhou, seguido de outro, dias depois.",
        "Segundo, a debandada. Mametkul contra-atacou. Os cossacos formaram um quadrado, com os atiradores no meio, e o fogo disciplinado quebrou a carga. Os khantys e os mansis, que nunca tinham enfrentado armas de fogo, entraram em pânico e fugiram primeiro, e depois os tártaros, que continuaram atacando, sofreram perdas pesadas. Mametkul foi ferido, quase capturado e levado de barco. Sem o chefe, os siberianos se dispersaram. Kuchum fugiu de Qashliq na mesma noite."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo a Wikipedia, os cossacos tiveram cerca de 107 baixas. Os números dos siberianos (2.800) não têm fonte confiável. Os cossacos entraram em Qashliq entre 23 e 26 de outubro do calendário juliano, conforme a fonte. Kuchum fugiu para a estepe de Baraba, e a maioria dos moradores se recusou a segui-lo. Os chefes locais começaram a se submeter.",
        "Yermak mandou Ivan Koltso a Moscou com peles. O tsar perdoou os cossacos, mandou presentes, entre eles armaduras com a águia de duas cabeças, e reforços de 300 ou 500 soldados, segundo a fonte, e deu a Yermak o título de 'príncipe da Sibéria'. Mas a posição era frágil: Mametkul voltou a atacar, e Koltso e cerca de 40 homens foram mortos numa emboscada. Yermak morreu em agosto de 1584 ou 1585, conforme a fonte, quando seu acampamento numa ilha do Irtysh foi surpreendido numa noite de tempestade. Pela lenda, ele se afogou com o peso da armadura que ganhou do tsar.",
        { h: "Por que importa" },
        "O Canato da Sibéria acabou. Os russos construíram fortes em Tiumen (1586), Tobolsk (1587) e Tara (1594), e Kuchum foi vencido pela última vez por volta de 1598. Menos de 60 anos depois de Chuvash Cape, os russos chegaram ao Pacífico: em 1639, a expedição de Ivan Moskvitin alcançou o mar de Okhotsk, na foz do rio Ulya, e o povoado de Okhotsk foi fundado em 1647. A Sibéria virou parte da Rússia, e seu comércio de peles financiou boa parte do Estado russo. Alguns autores comparam o caso à conquista espanhola da América, de poucos homens com armas de fogo sobre um império grande e dividido.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes são confusas: as crônicas da Sibéria foram escritas muito depois e se contradizem em datas, números e até em quem organizou a expedição. Historiadores discutem até que ponto os Stroganov mandaram em Yermak." },
        { note: "Qashliq ficou desabitada depois da conquista e foi ocupada de novo por pouco tempo, de 1584 a 1586. A capital russa na região passou a ser Tobolsk." }
      ]}
    ]
  },

  armada: {
    war: "Guerra anglo-espanhola (1585–1604)",
    hook: "A frota mais poderosa do mundo foi derrotada, e quase tanto pela tempestade quanto pelos canhões ingleses.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século 16, a Espanha de Filipe II era a potência dominante da Europa. Depois de 1580, quando assumiu o trono de Portugal, o rei da Espanha controlava também o império português, e a prata americana pagava seus exércitos. A Inglaterra de Elizabeth I era bem menor, protestante, e vivia de piratas, os corsários, que atacavam navios e colônias espanholas. Filipe via em Elizabeth uma herege e uma usurpadora.",
        "A guerra aberta começou em 1585, quando a Inglaterra mandou tropas para ajudar os holandeses rebeldes contra a Espanha. Em fevereiro de 1587, Elizabeth mandou executar Maria Stuart, a rainha católica da Escócia, que muitos católicos viam como a legítima rainha da Inglaterra. Em abril de 1587, Francis Drake entrou no porto de Cádis e destruiu ou capturou cerca de 30 navios e muitos suprimentos, o que atrasou os preparativos espanhóis em cerca de um ano.",
        { h: "O caminho até o Canal" },
        { timeline: [
          ["1585", "Começa a guerra anglo-espanhola. A Inglaterra apoia a revolta dos holandeses."],
          ["Fevereiro de 1587", "Maria Stuart é executada."],
          ["Abril de 1587", "Drake ataca Cádis."],
          ["Fevereiro de 1588", "Morre o marquês de Santa Cruz, o autor do plano. O duque de Medina Sidônia assume."],
          ["Fim de maio de 1588", "A frota sai de Lisboa. Para na Corunha e volta ao mar em julho."],
          ["29 de julho de 1588", "A Armada é avistada perto do cabo Lizard, na Cornualha."]
        ]},
        "O plano de Filipe tinha duas partes. A frota subiria o Canal da Mancha até a costa da Holanda espanhola. Lá, o duque de Parma, comandante do Exército de Flandres, embarcaria seus soldados em barcaças, e a frota os escoltaria na travessia até a Inglaterra. A fraqueza do plano ficou à vista depois: a frota e o exército precisavam se encontrar no mar, e os dois não tinham como se falar."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Filipe II da Espanha, 61 anos" },
        "Governava o maior império do mundo de Madri, por cartas e ordens escritas. Tratou a invasão como uma missão religiosa, e o papa Sisto V prometeu ajuda em dinheiro caso a força desembarcasse. Quando soube do fracasso, segundo a tradição, disse: 'Mandei a frota contra os homens, não contra os ventos e as ondas.'",
        { h: "O duque de Medina Sidônia" },
        "Alonso Pérez de Guzmán, 7º duque, foi escolhido depois da morte de Santa Cruz. Era um bom administrador, mas não tinha experiência no mar e duvidava do plano. Segundo as fontes, suas objeções nunca chegaram ao rei. Mesmo assim, manteve a formação em crescente durante o Canal.",
        { h: "Os ingleses" },
        "Lord Charles Howard, o almirante da Inglaterra, comandava a frota inglesa. Com ele, Francis Drake, um corsário famoso e o mais temido pelos espanhóis, e outros capitães, como John Hawkins e Martin Frobisher. Elizabeth I, aos 54 anos, ficou em terra, e a tradição lhe atribui um discurso às tropas em Tilbury."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As contas diferem. A Armada tinha entre 122 e 137 navios: uns 24 galeões de guerra feitos para isso, 44 mercantes armados, dezenas de navios auxiliares e de suprimentos. Levava cerca de 10.000 marinheiros e 19.000 soldados, e mais de 2.000 canhões. A frota inglesa tinha de 197 a 226 navios, mas só 34 eram da marinha real, com cerca de 16.000 homens. Os espanhóis tinham mais artilharia no total, mas os ingleses tinham canhões de maior alcance e navios mais manobráveis.",
        "O exército de Parma é outro número incerto: de 30.000 a 60.000 homens, segundo a fonte. Por doença, estava reduzido a cerca de 16.000 quando a frota chegou a Calais, segundo a Wikipedia em inglês.",
        { note: "As datas aqui seguem o calendário gregoriano, usado pela Espanha. A Inglaterra usava o calendário juliano, dez dias atrasado, e por isso nos documentos ingleses as mesmas datas aparecem dez dias antes." },
        { h: "O terreno" },
        "O Canal da Mancha, o estreito que separa a Inglaterra da França e da Holanda. É um mar de ventos fortes e correntes, e perto da costa de Flandres há bancos de areia que podem prender navios grandes. A Armada não tinha um porto fundo à disposição no lado de Flandres, e esse foi um dos problemas.",
        { h: "O Canal" },
        "Em 29 de julho, a Armada foi avistada, e fogueiras avisaram Londres. A tradição diz que Drake jogava boliche em Plymouth e disse que havia tempo para terminar. A história só apareceu anos depois e é lenda. A maré prendeu a frota inglesa no porto. Mas Medina Sidônia, com ordens do rei de não atacar, seguiu adiante.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, a perseguição. Entre 30 e 31 de julho, perto das rochas Eddystone, os ingleses tomaram a posição de [[barlavento]] e atacaram à distância, com os canhões, sem se aproximar. Os espanhóis mantinham o crescente, com os galeões no centro e nas pontas, e preferiam lutar de perto, por [[abordagem]]. Nenhum navio se perdeu no primeiro dia. Em 1º de agosto, perto de Portland, o Nuestra Señora del Rosario bateu em outros navios e ficou à deriva. Drake o capturou, junto com o almirante Pedro de Valdés, pólvora e 50.000 ducados. O San Salvador teve o paiol explodido e também foi capturado.",
        "Segundo, Calais. Medina Sidônia queria abrigar a frota perto da ilha de Wight, mas os ingleses atacaram em quatro grupos e ele seguiu em frente. Em 7 de agosto, a Armada ancorou perto de Calais, em formação fechada, para esperar Parma. Parma só soube do local naquele dia.",
        "Terceiro, os [[brulotes|brulote]]. Na noite de 7 para 8 de agosto, os ingleses sacrificaram oito de seus navios: incendiaram-nos e os soltaram com a corrente, direto para a frota ancorada. Os espanhóis conseguiram desviar três com pequenos barcos. O resto passou entre os navios. Nenhum navio espanhol pegou fogo, mas o crescente se rompeu: os capitães cortaram as âncoras e se dispersaram. A frota perdeu quase todas as âncoras e não conseguia mais voltar contra o vento.",
        "Quarto, Gravelines. Em 8 de agosto, ao amanhecer, a capitânia espanhola e mais quatro navios enfrentaram toda a frota inglesa. Os ingleses ficaram fora do alcance de abordagem e atiraram à distância, com o vento a favor, por cerca de oito horas, até acabar a munição. Os canhões espanhóis eram mais difíceis de recarregar, e as escavações de naufrágios na Irlanda mostram que boa parte da munição espanhola ficou sem uso. Por volta das 16 horas, os ingleses fizeram os últimos tiros. Três navios foram perdidos nos baixios de Flandres. Depois, o vento mudou para o sul, livrou a Armada dos bancos de areia e deixou-a seguir para o norte."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Howard interrompeu a perseguição em 12 de agosto, na altura do estuário do Forth, na Escócia. Para voltar à Espanha, a Armada não tinha outro caminho senão dar a volta pelo norte da Escócia e pela Irlanda. Em 20 de agosto, ainda tinha cerca de 110 navios. Foi aí que o clima fez o trabalho. Tempestades fortes, as mais fortes que se lembravam, jogaram muitos navios nas costas da Irlanda e da Escócia. A maior parte dos cerca de 28 navios perdidos em tempestades naufragou na costa oeste da Irlanda. Cerca de 5.000 homens morreram afogados, de fome ou mortos pela população local. A galeaça Girona naufragou em 26 de outubro na costa da Irlanda do Norte, com cerca de 1.300 pessoas a bordo: só 9 sobreviveram.",
        "Os números das perdas variam por autor: de 35 a 63 navios perdidos, a maioria entre 44 e 51. Dos 25.696 homens que saíram da Corunha, 13.399 voltaram, segundo registros espanhóis, o que dá uns 12.000 mortos. As estimativas mais baixas falam em 9.000 mortos, e as fontes espanholas, em até 11.000.",
        { h: "Por que importa" },
        "A Inglaterra protestante sobreviveu, e seus marinheiros ganharam confiança. A maior parte dos historiadores militares vê em Gravelines o início de uma mudança duradoura no equilíbrio naval, a favor dos ingleses, graças à diferença em tecnologia de canhões e em tática. Mas a guerra continuou por mais 16 anos, e a Espanha se recuperou. Em 1589, a 'Armada inglesa' de Drake e Norris, que tentava destruir a frota espanhola e tomar os Açores, fracassou, com perdas enormes. As armadas espanholas de 1596 e 1597 também foram arruinadas por tempestades. A paz só veio em 1604.",
        { h: "Curiosidades e controvérsias" },
        { note: "Elizabeth em Tilbury: em 18 de agosto, ela foi a cavalo, de armadura, ao acampamento de cerca de 4.500 soldados na foz do Tâmisa. Na versão mais famosa de seu discurso, ela disse ter o corpo de uma mulher fraca, mas o coração e o estômago de um rei. A frase só foi escrita muito depois, e as versões variam." },
        { note: "Quem venceu? Um historiador a chamou de 'uma grande vitória de propaganda inglesa', mas estrategicamente 'essencialmente indecisiva'. Os primeiros relatos ingleses diziam que Deus tinha favorecido os protestantes. O que fica claro é que o clima foi decisivo: mais navios e marinheiros foram perdidos para as tempestades que para o combate." },
        { note: "O nome: o título oficial da frota, em espanhol, era 'Grande e Felicíssima Armada'. 'Invencível' é o apelido que ficou famoso depois." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lepanto: {
    terrain: [
      { t: "note", x: 88, y: 4, l: "Norte ↑ (costa grega)" },
      { t: "note", x: 12, y: 66, l: "Mar aberto, ao sul" }
    ],
    units: [
      { id: "aN", s: "a", k: "ship", w: 8, h: 14, l: "Barbarigo" },
      { id: "aC", s: "a", k: "ship", w: 8, h: 14, l: "D. João e Colonna" },
      { id: "aS", s: "a", k: "ship", w: 8, h: 14, l: "Doria" },
      { id: "aR", s: "a", k: "ship", w: 6, h: 12, l: "Santa Cruz (reserva)" },
      { id: "gN", s: "a", k: "ship", w: 5, h: 5, l: "" },
      { id: "gC", s: "a", k: "ship", w: 5, h: 5, l: "Galeaças" },
      { id: "gS", s: "a", k: "ship", w: 5, h: 5, l: "" },
      { id: "bN", s: "b", k: "ship", w: 8, h: 14, l: "Siroco" },
      { id: "bC", s: "b", k: "ship", w: 8, h: 18, l: "Ali Paxá" },
      { id: "bS", s: "b", k: "ship", w: 8, h: 20, l: "Uluç Ali" }
    ],
    steps: [
      { t: "Esquema da linha. A Liga Santa forma em quatro grupos: Barbarigo ao norte, colado à costa; D. João no centro; Doria ao sul, mar adentro; e Santa Cruz atrás, de reserva. Os otomanos vêm em meia-lua, e Uluç Ali, na ponta sul, tem uma linha mais longa.",
        p: { aN: [28, 14], aC: [28, 36], aS: [28, 56], aR: [14, 36], gN: [38, 14], gC: [38, 36], gS: [38, 56],
             bN: [72, 14], bC: [74, 38], bS: [72, 60] } },
      { t: "As galeaças vão à frente e atiram a curta distância contra as galés turcas. A linha otomana, que vinha em ordem, se desfaz antes do choque.",
        p: { gN: [48, 14], gC: [48, 36], gS: [48, 56], bN: [64, 14], bC: [64, 38], bS: [64, 60] } },
      { t: "No norte, Siroco tenta passar entre Barbarigo e a costa. Barbarigo é ferido de morte, mas a ala aguenta. Siroco é morto.",
        p: { aN: [40, 12], bN: [48, 11], gN: [44, 20] } },
      { t: "No centro, a Sultana de Ali Paxá se choca com a Real. Os janízaros sobem à proa e são repelidos. A luta de abordagem dura cerca de uma hora.",
        p: { aC: [50, 36], bC: [56, 36], gC: [44, 28] } },
      { t: "No sul, Doria se afasta para o mar aberto. Uluç Ali aproveita a brecha e ataca o flanco do centro cristão.",
        p: { aS: [30, 64], bS: [44, 52, -25], gS: [38, 58] } },
      { t: "A reserva de Santa Cruz sobe para ajudar onde o aperto é maior, primeiro no norte e depois no sul.",
        p: { aR: [34, 50] } },
      { t: "O centro turco cai. Ali Paxá é morto, e a Sultana é tomada. Os turcos da ala norte também são batidos.",
        p: { aC: [58, 34], bC: [64, 34] }, x: ["bC", "bN"] },
      { t: "Uluç Ali recua com cerca de 30 navios, levando uma bandeira da Ordem de Malta. O resto da frota otomana é capturado ou destruído.",
        p: { bS: [86, 66, -10], aR: [50, 54] } }
    ]
  },

  nagashino: {
    terrain: [
      { t: "sea", x: 52, y: 4, w: 3, h: 62, l: "Rio Rengo" },
      { t: "hill", x: 88, y: 58, rx: 9, ry: 6, l: "Forte de Tobigasu" }
    ],
    units: [
      { id: "oFence", s: "a", k: "camp", w: 2.5, h: 46, l: "Cerca e valas" },
      { id: "oGun", s: "a", k: "inf", w: 6, h: 34, l: "Arcabuzeiros" },
      { id: "oMain", s: "a", k: "inf", w: 14, h: 30, l: "Oda e Tokugawa" },
      { id: "oRaid", s: "a", k: "inf", w: 6, h: 10, l: "Sakai (4.000)" },
      { id: "castle", s: "a", k: "camp", w: 8, h: 8, l: "Castelo de Nagashino" },
      { id: "tA", s: "b", k: "cav", w: 6, h: 14, l: "Yamagata" },
      { id: "tB", s: "b", k: "cav", w: 6, h: 14, l: "Baba, Naito e Sanada" },
      { id: "tC", s: "b", k: "inf", w: 8, h: 18, l: "Katsuyori" },
      { id: "tSiege", s: "b", k: "inf", w: 6, h: 14, l: "Cerco (3.000)" }
    ],
    steps: [
      { t: "Esquema da posição. Nobunaga e Ieyasu ficam atrás de uma cerca e de valas, do lado oeste de um riacho. Katsuyori tem cerca de 12.000 homens na frente deles, e 3.000 cercam o castelo, mais atrás.",
        p: { oFence: [44, 35], oGun: [38, 35], oMain: [26, 35], oRaid: [26, 62], castle: [92, 34], tA: [62, 24], tB: [62, 46], tC: [74, 35], tSiege: [86, 20] } },
      { t: "Na noite de 28 para 29 de junho, 4.000 homens de Sakai, com cerca de 500 arcabuzeiros, saem do acampamento e contornam o inimigo por trás das montanhas.",
        p: { oRaid: [58, 64] } },
      { t: "Ao amanhecer, Sakai toma o forte de Tobigasu, atrás dos Takeda. A guarnição do castelo sai e ajuda a expulsar os que o cercavam.",
        p: { oRaid: [84, 60], tSiege: [86, 14] }, x: ["tSiege"] },
      { t: "Katsuyori perde a retirada e decide atacar de frente. A cavalaria Takeda atravessa o riacho em direção à cerca.",
        p: { tA: [54, 25], tB: [54, 45], tC: [66, 35] } },
      { t: "Yamagata lidera a primeira onda. Os atiradores esperam atrás da cerca e atiram quando os cavaleiros chegam perto. Yamagata é abatido.",
        p: { tA: [47, 28] }, x: ["tA"] },
      { t: "Baba, Naito e os irmãos Sanada atacam a cerca em outras ondas. Os que chegam perto são recebidos pelos tiros e pelas lanças.",
        p: { tB: [47, 42], tC: [58, 35] } },
      { t: "Por volta das 14 horas, a linha Takeda se quebra. A maioria dos mortos cai na fuga.",
        p: { tC: [70, 30] }, x: ["tB"] },
      { t: "Nobunaga ordena a perseguição. As tropas saem da cerca, e Katsuyori foge com poucos homens para Kai.",
        p: { oMain: [44, 33], oGun: [48, 35], oRaid: [76, 52], tC: [94, 20] }, x: ["tC"] }
    ]
  },

  alcacerquibir: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 5, h: 70, l: "Rio Mocazém" }
    ],
    units: [
      { id: "mCavL", s: "a", k: "cav", w: 14, h: 5, l: "Cavalaria marroquina" },
      { id: "mCavR", s: "a", k: "cav", w: 14, h: 5, l: "Cavalaria marroquina" },
      { id: "mGun", s: "a", k: "inf", w: 26, h: 5, l: "Atiradores e artilharia" },
      { id: "mSul", s: "a", k: "inf", w: 12, h: 4, l: "Sultão e guarda turca" },
      { id: "pVan", s: "b", k: "inf", w: 28, h: 6, l: "Vanguarda (aventureiros, espanhóis, alemães)" },
      { id: "pSil", s: "b", k: "inf", w: 26, h: 5, l: "Terços de Silveira" },
      { id: "pRear", s: "b", k: "inf", w: 22, h: 4, l: "Retaguarda" },
      { id: "pWag", s: "b", k: "car", w: 3, h: 14, l: "Carros" },
      { id: "pCav", s: "b", k: "cav", w: 10, h: 5, l: "D. Sebastião" },
      { id: "pAve", s: "b", k: "cav", w: 8, h: 4, l: "Duque de Aveiro" }
    ],
    steps: [
      { t: "Esquema das posições em 4 de agosto. Os portugueses formam um bloco: vanguarda, depois os terços de Silveira e, atrás, a retaguarda, com os carros de bagagem ao lado. Os marroquinos têm atiradores no centro e a cavalaria nas pontas, em crescente. O sultão fica atrás, numa liteira.",
        p: { mCavL: [22, 22], mCavR: [78, 22], mGun: [50, 24], mSul: [50, 8], pVan: [50, 42], pSil: [50, 50], pRear: [50, 58], pWag: [76, 52], pCav: [30, 50], pAve: [14, 50] } },
      { t: "Por volta das 11 horas, a artilharia marroquina se revela e atira. A cavalaria das pontas avança e começa a rodear os portugueses.",
        p: { mCavL: [24, 36, 20], mCavR: [76, 36, -20], mGun: [50, 28] } },
      { t: "Cerca do meio-dia, D. Sebastião carrega com uns 600 cavaleiros pelo flanco esquerdo, e o duque de Aveiro ataca a cavalaria junto ao rio. A vanguarda avança.",
        p: { pCav: [32, 36], pAve: [14, 38], pVan: [50, 36] } },
      { t: "É o bom momento português: a frente marroquina cede. Nessa hora morre o sultão Abd al-Malik, e seus oficiais escondem a morte.",
        p: { pVan: [50, 30], pCav: [36, 28], mGun: [50, 22], mCavL: [20, 28, 20] } },
      { t: "Álvaro Pires de Távora é atingido, uma ordem de recuo é mal entendida e a vanguarda se quebra. A guarda de turcos e a cavalaria das pontas atacam.",
        p: { pVan: [50, 40], mSul: [50, 20], mCavL: [26, 42, 40], mCavR: [74, 42, -40], mGun: [50, 30] } },
      { t: "Os dois braços do crescente se fecham pela retaguarda. Os marroquinos tomam a artilharia e atingem os carros, onde estão os não combatentes. Há pânico.",
        p: { mCavL: [26, 58, 70], mCavR: [74, 60, -70], pVan: [50, 46], pSil: [50, 52] }, x: ["pWag"] },
      { t: "Entre as 14 e as 17 horas, a vanguarda e a segunda linha caem, e os terços de Silveira e da retaguarda se rendem, um depois do outro. D. Sebastião desaparece no meio da luta.",
        p: { pCav: [40, 46] }, x: ["pVan", "pSil", "pRear", "pAve", "pCav"] }
    ]
  },

  armada: {
    terrain: [
      { t: "hill", x: 18, y: 0, rx: 26, ry: 5, l: "Costa da Inglaterra" },
      { t: "hill", x: 98, y: 44, rx: 5, ry: 20, l: "Flandres" },
      { t: "note", x: 90, y: 5, l: "Norte ↑" }
    ],
    units: [
      { id: "aH", s: "a", k: "ship", w: 9, h: 4, l: "Frota inglesa" },
      { id: "aD", s: "a", k: "ship", w: 8, h: 4, l: "" },
      { id: "aF", s: "a", k: "ship", w: 6, h: 3, l: "8 brulotes" },
      { id: "bL", s: "b", k: "ship", w: 8, h: 4, l: "" },
      { id: "bC", s: "b", k: "ship", w: 9, h: 4, l: "Armada espanhola" },
      { id: "bR", s: "b", k: "ship", w: 8, h: 4, l: "" }
    ],
    steps: [
      { t: "Esquema da viagem. Em 29 de julho, a Armada entra no Canal em crescente, com os galeões no centro e nas pontas. Os ingleses ficam atrás, a barlavento.",
        p: { bC: [48, 36], bL: [40, 22], bR: [40, 50], aH: [22, 28], aD: [24, 44], aF: [8, 60] } },
      { t: "De 30 de julho a 1º de agosto, os ingleses atiram de longe e a Armada segue em formação. Perto de Portland, o Rosário e o San Salvador são perdidos.",
        p: { bC: [62, 36], bL: [54, 22], bR: [54, 50], aH: [38, 28], aD: [40, 44] } },
      { t: "Em 7 de agosto, a Armada ancora perto de Calais, em formação fechada, à espera do duque de Parma. Os ingleses se aproximam e preparam brulotes.",
        p: { bC: [84, 36], bL: [80, 22], bR: [80, 50], aH: [66, 28], aD: [68, 44], aF: [52, 42] } },
      { t: "Na noite de 7 para 8 de agosto, oito navios em chamas descem a corrente contra a frota ancorada.",
        p: { aF: [74, 36] } },
      { t: "Os capitães cortam as âncoras e se espalham. O crescente se rompe, mas nenhum navio espanhol pega fogo.",
        p: { bC: [90, 36], bL: [86, 14], bR: [86, 58], aF: [80, 36] }, x: ["aF"] },
      { t: "Em 8 de agosto, em Gravelines, os ingleses atiram por cerca de oito horas, de longe e a barlavento. A Armada é empurrada para os bancos de areia de Flandres.",
        p: { aH: [76, 24], aD: [76, 46], bC: [92, 32], bL: [90, 16], bR: [90, 54] } },
      { t: "O vento muda e a Armada escapa para o norte. Howard interrompe a perseguição em 12 de agosto. Sem outro caminho, os espanhóis dão a volta pela Escócia e pela Irlanda, e as tempestades fazem o resto.",
        p: { bC: [68, 4, 180], bL: [78, 4, 180], bR: [58, 4, 180], aH: [76, 20], aD: [82, 28] } }
    ]
  }
});
