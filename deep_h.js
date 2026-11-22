// In-depth battles, batch h: hastings, manzikert, jerusalem1099, svolder, stiklestad, dandanaqan.
// Checked against the English and Portuguese Wikipedia articles, the saga text of Heimskringla (via wisdomlib),
// Learn Persian Online (Dandanaqan, after Bayhaqi) and the works those pages cite.

Object.assign(GLOSSARY, {
  "parede de escudos": "Formação de infantaria em que os soldados ficam ombro a ombro, com os escudos encostados ou sobrepostos, formando um muro. Quem está atrás ataca por cima ou pelos espaços.",
  "housecarls": "Guerreiros profissionais a serviço direto do rei ou de um grande nobre inglês. Eram bem armados e bem treinados, e muitos lutavam com o grande machado de duas mãos, de origem dinamarquesa.",
  "fyrd": "A milícia inglesa: homens livres convocados da região para lutar por um tempo limitado. Eram menos treinados que os housecarls e precisavam voltar para a colheita.",
  "witenagemot": "O conselho de nobres e bispos que aconselhava o rei da Inglaterra e participava da escolha de quem herdaria o trono.",
  "retirada fingida": "Tática em que um exército finge fugir para atrair o inimigo, que quebra a formação para perseguir e é atacado de volta quando está desorganizado.",
  "tapeçaria de bayeux": "Longo bordado em tecido que conta a conquista normanda da Inglaterra em cenas, com legendas em latim. Hoje fica em Bayeux, na França.",
  "tagmata": "Os regimentos profissionais do exército bizantino, pagos pelo Império e baseados nas províncias do leste e do oeste. Eram a parte mais confiável do exército.",
  "varegues": "A guarda pessoal do imperador bizantino, formada por mercenários vindos do norte da Europa, no início quase todos nórdicos. Depois de 1066, muitos ingleses se juntaram a ela.",
  "seljúcidas": "Os turcos seljúcidas: um povo de origem nômade da Ásia Central, convertido ao islã sunita, que no século 11 criou um grande império do Irã até a Anatólia.",
  "crescente": "Formação de combate em forma de lua crescente: o centro recua e as pontas avançam para cercar o inimigo que vem de frente.",
  "turcomanos": "Povos turcos nômades, criadores de cavalos e de ovelhas, que viviam em tribos. Lutavam a cavalo, com arco.",
  "sultão": "Título de governante muçulmano, usado pelos chefes seljúcidas. Significa mais ou menos 'o que tem autoridade'.",
  "gaznévidas": "A dinastia turca que governou a partir da cidade de Ghazni, no atual Afeganistão, entre os séculos 10 e 12. Chegou a controlar o Irã oriental, a Ásia Central e o norte da Índia.",
  "corasão": "Região do nordeste do Irã e do oeste da Ásia Central, com cidades ricas como Nishapur e Merv. Era a joia do mundo islâmico oriental.",
  "jarl": "Título nórdico de um chefe poderoso, logo abaixo do rei. É a origem da palavra inglesa earl, conde.",
  "saga": "Narrativa em prosa da Islândia medieval, escrita em geral muitos séculos depois dos fatos, que mistura história, tradição oral e fantasia.",
  "escaldo": "Poeta de corte nórdico. Os poemas dos escaldos, feitos em versos difíceis, foram decorados e depois citados nas sagas, e por isso são vistos como as fontes mais antigas.",
  "navio-dragão": "Navio de guerra viking, comprido, de remos e vela, com uma cabeça de dragão ou serpente na proa.",
  "hird": "A guarda pessoal de um rei nórdico: guerreiros escolhidos que viviam na corte e lutavam a seu lado.",
  "lendmann": "Chefe nórdico de uma região, que servia ao rei em troca de terras e prestígio. Alguns lendmenn mudaram de lado contra Olavo em Stiklestad.",
  "cruzada": "Expedição militar cristã, lançada pelo papa, para tomar ou defender a Terra Santa. Quem participava fazia um voto e levava uma cruz costurada na roupa.",
  "fatímidas": "A dinastia muçulmana xiita que governava o Egito, a partir do Cairo, e disputava a Palestina e a Síria com os turcos seljúcidas.",
  "torre de assalto": "Torre de madeira com rodas, mais alta que a muralha. Os soldados subiam por dentro, ficavam protegidos e saltavam para o topo da muralha por uma ponte.",
  "aríete": "Tronco grosso, muitas vezes com ponta de ferro, usado para bater portas e muralhas até quebrá-las.",
  "fogo grego": "Mistura inflamável, difícil de apagar, usada em guerras do Mediterrâneo. Contra as torres de assalto, os defensores usavam fogo; por isso elas eram cobertas com peles molhadas."
});

Object.assign(DEEP, {
  hastings: {
    war: "Conquista normanda da Inglaterra (1066)",
    hook: "Um dia inteiro de luta numa colina de Sussex decidiu quem falaria o quê na Inglaterra pelos próximos mil anos.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O rei Eduardo, o Confessor, morreu em 5 de janeiro de 1066 sem deixar filhos (algumas fontes dizem 4 de janeiro). Quem herdaria o trono? Harold Godwinson, o conde de Wessex e homem mais poderoso do reino, foi escolhido pelo [[witenagemot]] e coroado ainda em janeiro. Mas dois estrangeiros também se achavam herdeiros: Guilherme, duque da Normandia, que dizia que Eduardo lhe prometera o trono e que Harold jurara aceitar isso, e Harald Hardrada, rei da Noruega, que se baseava num acordo antigo entre reis do Norte.",
        "Harold ficou entre dois fogos. Guilherme levou quase nove meses para preparar a invasão, porque teve de construir a frota do nada, e ficou pronto para atravessar por volta de 12 de agosto. Mas o vento, ou o medo da frota inglesa, o segurou na França. Em 8 de setembro, com a colheita chegando e os soldados precisando voltar para casa, Harold dispensou a milícia e a frota da costa sul. Pouco depois, vindo do norte, Hardrada invadiu.",
        { h: "O caminho até Hastings" },
        { timeline: [
          ["Abril de 1066", "O cometa Halley cruza o céu. A Tapeçaria de Bayeux o liga à coroação de Harold."],
          ["20 de setembro", "Hardrada, com mais de 300 navios, vence os condes do norte em Fulford e toma York."],
          ["25 de setembro", "Harold surpreende e destrói os noruegueses em Stamford Bridge. Hardrada morre. Só 24 dos 300 navios foram necessários para levar os sobreviventes."],
          ["28 de setembro", "Guilherme desembarca em Pevensey, no sul, sem encontrar resistência."],
          ["Depois de 25 de setembro", "Harold, com o exército machucado pela luta no norte, para cerca de uma semana em Londres e marcha para o sul, uns 320 km."],
          ["13 de outubro", "Harold acampa na colina de Caldbec, a uns 13 km do castelo que Guilherme levantou em Hastings."]
        ]},
        "A marcha dá uma média de uns 43 km por dia. Harold deixou parte do exército no norte, inclusive os condes Edwin e Morcar. Os historiadores discutem por quê: talvez por desconfiança depois da derrota de Tostig, talvez porque quisesse chegar logo para impedir Guilherme de sair da praia e continuar saqueando o sul. Guilherme, enquanto isso, construiu um castelo de madeira em Hastings e usou-o como base para atacar a região em volta."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Harold II, rei dos ingleses" },
        "Conde de Wessex e o homem mais poderoso do reino antes de virar rei, Harold tinha acabado de derrotar os noruegueses em Stamford Bridge. Perto dele estavam os irmãos Gyrth e Leofwine. Esperava, ao que tudo indica, pegar Guilherme de surpresa. Algumas fontes francesas dizem que ele mandou um emissário ao duque, sem resultado. Muitos historiadores o criticam por ter corrido para o sul sem esperar reforços, embora a batalha tenha durado um dia inteiro, e isso sugere que seus homens não estavam esgotados.",
        { h: "Guilherme, duque da Normandia" },
        "Para os historiadores, era o comandante mais experiente dos dois. Montou um exército misto, com infantaria, arqueiros e cavalaria, e a ideia era simples: os arqueiros enfraquecem o inimigo, a infantaria abre buracos e a cavalaria entra por eles e persegue. Só Guilherme de Poitiers, um cronista a favor dele, conta que o papa Alexandre II lhe mandou um estandarte, e por isso a informação é duvidosa.",
        { h: "Os outros nomes" },
        "Do lado normando, a ala esquerda era de Alan, o Ruivo, parente do conde da Bretanha; a direita, de Guilherme fitzOsbern e Eustácio II, conde de Bolonha. Do lado inglês, só uns 20 nomes de pessoas presentes são conhecidos com alguma certeza; entre eles, os dois irmãos de Harold. Entre os normandos, só 35 companheiros do duque são identificados, e cinco morreram em Hastings, entre eles Taillefer."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes normandas falam em 400.000 a 1.200.000 ingleses, números absurdos. Os historiadores modernos propõem de 5.000 a 13.000 ingleses, e a maioria fica perto de 7.000 a 8.000. O exército de Harold era quase só de infantaria. O núcleo eram os [[housecarls]], guerreiros profissionais com machado de duas mãos, e em volta deles a milícia, o [[fyrd]]. Arqueiros quase não havia.",
        "Guilherme levava mais ou menos metade de infantaria, um quarto de cavalaria e um quarto de arqueiros e bestas. As estimativas modernas vão de 7.000 a 12.000 homens, com 1.000 a 3.000 cavaleiros. Tinha gente da Normandia, da Bretanha e de Flandres.",
        { note: "As fontes contemporâneas dão números de 14.000 a 150.000 para os normandos. Os historiadores atuais os rejeitam como exagero." },
        { h: "O terreno" },
        "A batalha foi perto da atual cidade de Battle, em Sussex, no sul da Inglaterra, cerca de 11 km ao norte-noroeste de Hastings. O campo ficava entre a colina de Caldbec, ao norte, e a de Telham, ao sul, com bosque e um trecho encharcado na frente. O nome 'Senlac', que muitos conhecem, vem de Orderico Vital, e o historiador Edward Freeman o popularizou, gostando da semelhança com o francês 'sanguelac', lago de sangue. A Crônica Anglo-Saxônica chama o lugar de 'a velha macieira cinzenta', e o Domesday Book, de 1086, já fala simplesmente em 'a batalha de Hastings'. O declive foi bastante alterado quando se construiu a abadia, e hoje é bem menos íngreme que em 1066.",
        { h: "A batalha em dez movimentos" },
        { formation: true },
        "Os ingleses formaram a [[parede de escudos]] no alto da colina, a pé, com os flancos protegidos por bosque e terreno molhado. Atrás da primeira fileira havia machadeiros, lançadores de dardos e, talvez, alguns arqueiros. Guilherme organizou três divisões: bretões, angevinos, poitevinos e cenomanos à esquerda; normandos no centro, com ele próprio; franceses, picardos, flamengos e homens de Bolonha à direita. Na frente os arqueiros, depois os lanceiros, e a cavalaria atrás.",
        "A luta começou por volta das 9h de sábado, 14 de outubro. As flechas normandas, atiradas morro acima, quase não adiantaram: batiam nos escudos ou passavam por cima. A infantaria subiu e foi recebida com lanças, machados e pedras. A cavalaria subiu para ajudar e também não furou o muro.",
        "Aí veio o momento de maior perigo para Guilherme. A divisão da esquerda, dos bretões, recuou, e a retirada se espalhou. Correu o boato de que o duque estava morto. Ele cavalgou entre os seus de rosto descoberto, gritando que estava vivo, e contra-atacou. Parte dos ingleses tinha descido a colina para perseguir e acabou isolada e destruída numa elevação menor. Não se sabe se Harold deu essa ordem. O poeta Wace afirma que ele mandou ficar em formação.",
        "A Tapeçaria de Bayeux mostra Gyrth e Leofwine morrendo logo antes dessa luta, e isso sugere que eles tenham comandado a perseguição. Guilherme de Poitiers os põe mortos perto do irmão, e isso sugere que tenham morrido no fim. Outro poema, o Carmen, diz que o próprio Guilherme matou Gyrth.",
        "Seguiu-se uma pausa, provavelmente no começo da tarde. Depois, segundo Guilherme de Poitiers, os normandos usaram duas vezes a [[retirada fingida]]: fugiam, parte dos ingleses saía do muro atrás deles e era cortada. Alguns historiadores acham que a história foi inventada depois, mas a maioria aceita que a tática foi usada. O efeito foi desgastar os housecarls, que eram substituídos por homens do fyrd, e o muro continuou de pé, só mais curto. Os arqueiros voltaram a atirar, e fontes do século 12 dizem que em arco alto, por cima dos escudos, embora os relatos da época não registrem isso. O Carmen diz que Guilherme perdeu dois cavalos; Poitiers, três.",
        "No fim da tarde, Harold morreu. Os housecarls ao redor do corpo lutaram até o fim, e o resto do exército fugiu. Em um local chamado Malfosse, 'a vala maldita', uma retaguarda inglesa feriu gravemente Eustácio de Bolonha antes de ser destruída."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Ninguém sabe quantos morreram. Alguns historiadores estimam cerca de 2.000 normandos e o dobro de ingleses, e Peter Marren fala em 2.000 e 4.000. Orderico Vital diz que 15.000 dos 60.000 de Guilherme morreram, e o número é considerado muito exagerado, embora a proporção de um em quatro possa estar certa. O corpo de Harold foi reconhecido no dia seguinte, por armadura ou marcas. Seu estandarte foi mandado ao papa.",
        "A Inglaterra não caiu logo. O witenagemot proclamou rei Edgar Ætheling. Guilherme derrotou uma força inglesa em Southwark, mas não conseguiu tomar a Ponte de Londres. Cruzou o Tâmisa em Wallingford, onde o arcebispo Stigand se submeteu, e chegou a Londres pelo noroeste. Os líderes ingleses se renderam em Berkhamsted. Guilherme foi coroado na abadia de Westminster em 25 de dezembro de 1066, pelo arcebispo Ealdred.",
        "Houve revoltas por anos: Exeter em 1067, os filhos de Harold em 1068, a Nortúmbria, a invasão dinamarquesa de 1069, a devastação do Norte entre 1069 e 1070, e Hereward em Ely em 1070. Alguns ingleses derrotados foram servir na [[Guarda Varegue|varegues]], em Constantinopla, e em 1081 enfrentaram os normandos de novo, em Dirráquio, e perderam outra vez.",
        { h: "Por que importa" },
        "A nobreza, a arquitetura e a língua da Inglaterra mudaram. O inglês absorveu milhares de palavras francesas, e a terra passou das mãos da antiga aristocracia para os companheiros de Guilherme. Do ponto de vista militar, o historiador David Nicolle diz que a batalha mostrou a superioridade da combinação normanda de cavalaria e infantaria sobre a tradição anglo-saxã de lutar só a pé, 'mas não sem dificuldade'.",
        { h: "Curiosidades e controvérsias" },
        { note: "A morte de Harold. A cena famosa da flecha no olho aparece por escrito pela primeira vez nos anos 1080, em Amato de Montecassino, que não é confiável (ele também dá 100.000 soldados a Guilherme). Guilherme de Malmesbury fala numa flecha e num cavaleiro que o feriu ao mesmo tempo. O Carmen diz que foi Guilherme que o matou. Guilherme de Jumièges diz que foi de manhã. A Crônica de Battle Abbey diz que ninguém sabia. Na [[tapeçaria de bayeux]], uma figura com flecha no olho está ao lado de um homem caindo, golpeado por espada, e a legenda diz só 'Aqui o rei Harold foi morto'. Não se sabe qual dos dois é Harold, e uma restauração do século 19 pode ter mudado a flecha." },
        { note: "A retirada fingida. Foi tática deliberada ou invenção posterior? A maioria dos historiadores acredita que foi usada, mas não há consenso." },
        { note: "Os normandos marcharam de Hastings naquela manhã ou já estavam no campo na véspera? A maioria dos historiadores prefere a primeira ideia. Guilherme de Jumièges conta que o exército dormiu armado, e M. K. Lawson defende que ele está certo." },
        { note: "A abadia. O costume diz que Guilherme prometeu fundar a Abadia de Battle e pôs o altar onde Harold caiu. Hoje se acha mais provável que os legados do papa a tenham imposto, em 1070." }
      ]}
    ]
  },

  manzikert: {
    war: "Guerras bizantino-seljúcidas (século 11)",
    hook: "Um imperador capturado, um general que foi embora no momento errado e uma derrota que a história exagerou, mas que abriu a Anatólia para os turcos.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em meados do século 11, o Império Bizantino ainda era a maior potência cristã do leste, mas vinha se desfazendo por dentro. Por volta de 1053, o imperador Constantino IX dissolveu o 'Exército da Ibéria', cerca de 50.000 homens segundo o cronista Skylitzes, para economizar. O cronista Atalíates e o autor Cecaumeno concordam que isso enfraqueceu a defesa do leste. Ao mesmo tempo, os turcos [[seljúcidas]] avançavam do Irã. Uma trégua durou até 1064, quando o sultão Alp Arslan tomou a cidade de Ani, na Armênia, depois de 25 dias de cerco.",
        { h: "O caminho até Manzikert" },
        { timeline: [
          ["c. 1053", "Constantino IX dissolve o Exército da Ibéria."],
          ["1064", "Alp Arslan toma Ani depois de 25 dias de cerco."],
          ["1068", "Romano IV Diógenes toma o trono e retoma Hierápolis."],
          ["1069 ou 1070", "Manuel Comneno é derrotado em Sebasteia por Arisighi, cunhado de Alp Arslan, que depois passa para o lado bizantino."],
          ["Junho de 1071", "O exército bizantino chega a Teodosiópolis (hoje Erzurum), na Armênia."],
          ["23 de agosto de 1071", "Romano toma a fortaleza de Manzikert."]
        ]},
        "Romano IV tomou o poder em 1068, retomou Hierápolis nesse mesmo ano e passou a campanhar contra os seljúcidas e seus aliados, com resultado limitado. Tinha um rival na corte, João Ducas. Em 1071, depois que Alp Arslan falhou em tomar Edessa e foi sitiar Alepo, Romano marchou para a Armênia para recuperar as fortalezas perdidas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Romano IV Diógenes, o imperador" },
        "Foi ele quem decidiu marchar para a Armênia e quem decidiu dividir o exército. Historiadores como Holt o culpam por quatro coisas: dividir as tropas, escolher Andronico Ducas para um posto de confiança, trabalhar com informação ruim e comandar mal quando a luta começou.",
        { h: "Alp Arslan, sultão dos seljúcidas" },
        "Tinha tomado Ani em 1064 e, em 1071, estava sitiando Alepo. Na manhã da batalha, vestiu um manto branco, como uma mortalha, em sinal de que estava pronto para morrer. Seus arqueiros a cavalo evitavam o corpo a corpo e atiravam de longe. Em 1072, um ano depois, foi apunhalado por um comandante de fortaleza durante uma campanha no Turquestão. Morreu quatro dias depois, em 24 de novembro, aos 43 anos, e foi enterrado em Merv.",
        { h: "Os outros nomes" },
        "Andronico Ducas, filho do rival de Romano, comandava a reserva da retaguarda. Nicéforo Briênio comandava a esquerda e Teodoro Aliates, a direita. José Tarcaniota foi mandado com parte das tropas na direção de Khliat. Roussel de Bailleul chefiava uns 500 mercenários francos e normandos. O armênio Basilaces comandou uma saída de cavalaria na véspera e foi capturado."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O exército bizantino tinha cerca de 40.000 homens, segundo Haldon. Outras estimativas vão de 35.000 a 50.000 (Markham, Sevim e Hillenbrand) e até 70.000. Havia tropas profissionais das [[tagmata]] do leste e do oeste, mercenários francos e normandos, turcos uzes e pechenegues, búlgaros, georgianos e armênios, infantaria do duque de Antioquia e uma parte da [[Guarda Varegue|varegues]].",
        "Dos seljúcidas, as estimativas modernas mais comuns ficam entre 20.000 e 30.000 homens. As fontes antigas, como Mateus de Edessa e alguns autores muçulmanos, falam em mais de 200.000, o que não se leva a sério.",
        { h: "Os dias antes" },
        "Romano dividiu o exército. Mandou Tarcaniota, com tropas regulares, varegues, pechenegues e francos, na direção de Khliat, e foi para Manzikert com o resto, uns 20.000 homens para cada lado. Fontes islâmicas dizem que Alp Arslan destruiu a coluna de Tarcaniota. As bizantinas não falam disso, e Atalíates sugere que ele fugiu. Em qualquer caso, a coluna não esteve na batalha.",
        "Em 24 de agosto, os homens de Briênio, que saíram para buscar comida, toparam com o exército seljúcida e recuaram. Basilaces saiu com a cavalaria, foi vencido e capturado, e a ala de Briênio quase foi cercada. Na noite de 24 para 25, os seljúcidas se esconderam nas colinas. Em 25 de agosto, mercenários turcos do lado bizantino desertaram para parentes seus no lado inimigo, e Romano recusou uma proposta de paz de Alp Arslan.",
        { h: "A batalha" },
        { formation: true },
        "Em 26 de agosto, uma sexta-feira, os bizantinos avançaram em três grupos: Briênio à esquerda, Aliates à direita, Romano no centro. Andronico Ducas ficou atrás, na reserva. Os seljúcidas esperavam em [[crescente]], a uns 4 km de distância. Arqueiros a cavalo atiravam sem parar. O centro do crescente recuava e as pontas tentavam cercar.",
        "No fim da tarde, os bizantinos tinham tomado o acampamento de Alp Arslan, mas as alas estavam muito machucadas pelas flechas. Os turcos fugiam de qualquer combate corpo a corpo, num estilo parecido com o dos partas. Ao entardecer, Romano mandou voltar.",
        "Foi aí que tudo desmoronou. A ala direita entendeu mal a ordem, e Andronico Ducas, em vez de cobrir a retirada, voltou para o acampamento em Manzikert. Os seljúcidas atacaram a confusão. A direita bizantina se desfez, talvez achando que fora traída por armênios ou por turcos aliados, e a esquerda de Briênio também. O centro, onde estavam o imperador e os varegues, ficou cercado. Romano, ferido, foi capturado. A perseguição durou a noite inteira."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Haldon dá de 2.000 a 8.000 bizantinos mortos, uns 4.000 prisioneiros e, de forma geral, cerca de 20.000 desertores ao longo da campanha. Os seljúcidas não perseguiram o resto do exército e nem retomaram Manzikert de imediato. As perdas bizantinas foram relativamente baixas, e a maioria dos comandantes sobreviveu.",
        "Alp Arslan não acreditou, a princípio, que o prisioneiro sujo e ensanguentado fosse o imperador. Quando confirmou, pôs a bota no pescoço de Romano e o fez beijar o chão, uma humilhação ritual. Depois o tratou com cortesia, e o imperador ficou cerca de uma semana como hóspede. O resgate pedido foi de 10 milhões de moedas de ouro, que Romano recusou. Ficou em 1,5 milhão de início e 360.000 por ano, mais a cessão de Antioquia, Edessa, Hierápolis e Manzikert e um casamento entre os filhos dos dois. Romano voltou com uma escolta de dois emires e cem mamelucos.",
        "Em casa, o império já tinha trocado de dono. Andronico Ducas voltou a Constantinopla e proclamou seu primo Miguel VII. Romano, derrotado três vezes pelos Ducas, foi deposto, cegado e exilado na ilha de Prote, e morreu pouco depois, de uma infecção causada pelo ferimento.",
        { h: "Por que importa" },
        "Os turcos só entraram de verdade na Anatólia depois da morte de Alp Arslan, em 1072. Em 1077 já tinham capital em Niceia, e por volta de 1080 controlavam cerca de 78.000 km². Alexis I Comneno recuperou a estabilidade entre 1081 e 1118. O pedido de ajuda bizantino ao Ocidente é visto por alguns historiadores, como Madden, como uma das origens da Primeira Cruzada, que começa em 1095.",
        { h: "Curiosidades e controvérsias" },
        { note: "Foi mesmo o fim do império? Runciman chamou de o desastre mais decisivo da história bizantina, e Norwich, o maior da história do império. Asbridge diz que os historiadores já não o veem como cataclismo absoluto. Markham defende que o massacre foi menor do que se pensava, que muitas unidades sobreviveram e que a guerra civil que veio depois fez mais mal do que a batalha." },
        { note: "O número dos seljúcidas continua em aberto: a faixa de 20.000 a 30.000 é a mais usada, mas não é consenso, e as fontes antigas dizem outra coisa." },
        { note: "Segundo uma tradição famosa, Alp Arslan perguntou a Romano o que ele teria feito se os papéis fossem invertidos. Romano respondeu que o teria matado ou desfilado por Constantinopla, e o sultão disse que o castigo dele seria mais pesado, mas o perdoou. A cena é contada de formas diferentes pelas fontes." }
      ]}
    ]
  },

  jerusalem1099: {
    war: "Primeira Cruzada (1096–1099)",
    hook: "Depois de três anos de marcha e de cinco semanas de cerco, as torres de madeira chegaram à muralha. O que veio depois ainda pesa na memória de três religiões.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1095, no Concílio de Clermont, o papa Urbano II chamou os cristãos da Europa para uma [[cruzada]]: ajudar Bizâncio contra os turcos e libertar Jerusalém. Os cruzados saíram de Constantinopla em abril de 1097 e sitiaram Antioquia de outubro de 1097 a junho de 1098. Lá, derrotaram um exército de socorro comandado por Kerboga. Balduíno de Bolonha fundou o condado de Edessa em 1098.",
        "A disputa entre Boemundo de Taranto e Raimundo IV de Toulouse, as epidemias e a falta de comida atrasaram a marcha. Raimundo a retomou em janeiro de 1099. O exército evitou cercos longos no litoral, fez acordos ou pagou tributo a governantes locais, e deixou Jafa no fim de maio de 1099.",
        { h: "O caminho até Jerusalém" },
        { timeline: [
          ["1095", "Urbano II convoca a cruzada em Clermont."],
          ["Abril de 1097", "Os cruzados saem de Constantinopla."],
          ["Outubro de 1097 a junho de 1098", "Cerco de Antioquia e derrota de Kerboga."],
          ["1098", "Os [[fatímidas]] do Egito retomam Jerusalém dos turcos (as fontes variam entre julho e agosto)."],
          ["Janeiro de 1099", "Raimundo de Toulouse retoma a marcha para o sul."],
          ["7 de junho de 1099", "O exército chega diante de Jerusalém."]
        ]},
        "Jerusalém tinha passado de mão em mão. Era governada pelos fatímidas desde o século 10, tinha sido tomada pelos turcos seljúcidas em 1073 e foi retomada pelos fatímidas em 1098, um ano antes da chegada dos cruzados. Era a cidade santa de judeus, cristãos e muçulmanos."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Os chefes cruzados" },
        "Raimundo IV, conde de Toulouse, tinha retomado a marcha em janeiro, depois de brigar com Boemundo de Taranto. Godofredo de Bulhão, Roberto II da Normandia, Roberto II de Flandres e Tancredo comandavam os outros contingentes. Segundo Raimundo de Aguilers, Tancredo e Godofredo estavam na vanguarda quando a cidade caiu. Eram chefes independentes, sem um comandante único, e os acordos entre eles eram tensos.",
        { h: "O governador de Jerusalém" },
        "Iftikhar ad-Dawla governava para os fatímidas. Foi cuidadoso: expulsou os cristãos sírios da cidade (os judeus puderam ficar), negou água e recursos aos sitiantes e mandou usar madeira e corda para fazer mais catapultas. Mandou também preparar sacos de palha para amortecer as pedras que viessem contra os muros. Tinha uma guarnição pequena, mas um bom plano de defesa.",
        { h: "Os outros nomes" },
        "Guglielmo Embriaco, de Gênova, e Gastão de Béarn lideraram a construção das torres. Pedro Desidério, capelão do conde Isoard I de Die, afirmou ter visto em sonho Adhémar, o legado do papa, pedindo jejum e uma procissão descalça em volta da cidade. O vizir do Cairo, al-Afdal, era o homem de quem os cruzados mais temiam o exército: corria o boato de que ele reunia uma força de socorro."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os cruzados somavam de 12.000 a 14.000 homens, com 1.200 a 1.300 cavaleiros, segundo uma estimativa; outra fala em 12.000 a 20.000 de infantaria. Muitos estavam sem armas e sem provisões. A guarnição fatímida tinha cerca de mil árabes e sudaneses e uns 400 cavaleiros egípcios de elite. Há quem estime o total de defensores em 3.000 a 4.500.",
        { h: "O terreno" },
        "As muralhas de Jerusalém tinham cerca de 4 km, 3 m de espessura e 15 m de altura, e cinco portões grandes. Vales fundos protegiam três lados. Dentro havia um muro interno, construído depois de um terremoto em 1033, um fosso e um muro externo. A água era o maior problema dos sitiantes: a maioria dos poços e cisternas fora do muro estava inutilizada, e só a fonte de Giom, que seca no verão, restava. Calor, sem sombra, e o vento seco do deserto pioravam as coisas.",
        { h: "O cerco em oito passos" },
        { formation: true },
        "Roberto da Normandia ficou no muro norte, diante do Portão das Flores. Roberto de Flandres ficou à direita dele, diante do Portão da Coluna (de Damasco). Godofredo cobriu o canto noroeste até o Portão de Jafa, e Tancredo se juntou a ele. Raimundo ficou ao sul e depois se mudou para o monte Sião. O leste e o sudeste ficaram sem tropas.",
        "Em 13 de junho houve um primeiro assalto, depois de uma profecia de um eremita. Os cruzados derrubaram parte do muro externo a picareta, mas não foi o bastante. Dois dias depois, os líderes viram que um cerco longo era inviável e que precisavam de máquinas.",
        "Em 17 de junho chegou a notícia de que navios genoveses e ingleses estavam em Jafa com materiais. Achou-se madeira a mais de 50 km, perto de Nablus, e Tancredo teria achado cerca de 400 vigas numa caverna. Em quase três semanas, os cruzados construíram duas [[torres de assalto|torre de assalto]] sobre rodas, um [[aríete]] com ponta de ferro, escadas e proteções de vime. As torres foram cobertas com peles molhadas em vinagre contra o [[fogo grego]].",
        "No começo de julho veio a visão de Pedro Desidério. Em 8 de julho, uma procissão descalça, comandada por bispos e padres, deu a volta pelas muralhas e foi até o monte das Oliveiras. Segundo um relato, os defensores zombavam do alto dos muros.",
        "O ataque foi marcado para a noite de 13 para 14 de julho: o golpe principal viria do monte Sião e da parte leste do muro norte, com uma finta no canto noroeste. Em 14 de julho, ao som de trombetas, o exército do norte pôs o aríete no lugar e danificou o muro, mas a máquina emperrou, e o ataque parou à noite. Na sexta-feira, 15 de julho, ao meio-dia, o assalto recomeçou. A torre de Godofredo chegou ao muro, e os homens passaram para o alto da muralha. Alberto de Aachen conta que uma cruz dourada foi posta na torre.",
        "Segundo uma das crônicas, os primeiros a entrar foram Letoldo e Gilberto de Tournai, depois Godofredo, seu irmão Eustácio e Tancredo. Outros autores dão o crédito a Tancredo. A torre de Raimundo foi detida por um fosso, mas, quando os outros entraram, os guardas do portão que ele atacava se renderam."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os cruzados tiveram perdas pesadas durante o cerco, talvez de um quinto a um quarto dos exércitos ocidentais. Depois de entrar, mataram muita gente: muçulmanos, judeus e cristãos orientais, durante a tarde de 15 de julho e a manhã seguinte. Muitos se refugiaram na mesquita de al-Aqsa. Testemunhas cristãs, muçulmanas e judaicas descrevem um banho de sangue em que mulheres e crianças não foram poupadas. Os judeus que tinham defendido a cidade ao lado dos muçulmanos foram queimados em sua sinagoga, segundo Ibn al-Qalanisi.",
        "Iftikhar ad-Dawla e seus homens se refugiaram na Torre de Davi. As fontes divergem sobre o que ocorreu. A versão mais citada é que ele se rendeu a Raimundo, em troca de passagem segura até Ascalão. Os mortos: fontes árabes falam em 70.000 ou até 100.000, mas a cidade tinha cerca de 30.000 habitantes. As estimativas modernas ficam entre 3.000 e 10.000 mortos.",
        "Em 22 de julho, um conselho escolheu como governar. Raimundo recusou o título de rei. Godofredo aceitou o poder, mas não o título, e ficou como Advocatus Sancti Sepulchri, defensor do Santo Sepulcro. Em 12 de agosto de 1099, ele derrotou um exército fatímida na batalha de Ascalão. Godofredo morreu em 18 de julho de 1100. Seu irmão Balduíno foi coroado no Natal de 1100, na Igreja da Natividade, em Belém, primeiro rei de Jerusalém.",
        { h: "Por que importa" },
        "Nasceu o Reino Latino de Jerusalém, com Balduíno como primeiro rei. A memória do massacre e da cidade perdida marcou as relações entre cristãos, muçulmanos e judeus por séculos.",
        { h: "Curiosidades e controvérsias" },
        { note: "O massacre. Os cronistas cristãos que estiveram lá, como Raimundo de Aguilers, o Anônimo e Alberto de Aachen, não mostram remorso. Guilherme de Tiro, que escreveu uns 90 anos depois, sim. Por isso os historiadores leem o episódio com cuidado." },
        { note: "Quem entrou primeiro, quantos morreram e o que aconteceu na Torre de Davi são pontos em que as fontes não concordam. As datas, ao contrário, são bem fixadas: 15 de julho de 1099 foi uma sexta-feira." },
        { note: "Os cronistas citados: Raimundo de Aguilers, Alberto de Aachen, o autor anônimo dos Gesta, Raul de Caen e Ibn al-Qalanisi, de Damasco." }
      ]}
    ]
  },

  svolder: {
    war: "Disputa pela Noruega entre Olavo Tryggvason e seus inimigos (995–1000)",
    hook: "Onze navios contra dezenas: a batalha em que um rei viking, segundo as sagas, preferiu desaparecer a se render.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Até o século 9, a Noruega era um mosaico de pequenos reinos. Harald Cabelo-Belo começou a unificá-la, ao menos na tradição, e a Dinamarca, ao sul, reivindicava partes do território e queria vassalos noruegueses. O jarl Haakon Sigurdsson governava de Lade, apoiado por Harald Dente-Azul, rei da Dinamarca, a quem pagava tributo. Permaneceu pagão. Foi deposto em 995.",
        "Nesse mesmo ano, Olavo Tryggvason foi aclamado rei. Recusou a autoridade dinamarquesa e se dedicou a converter a Noruega e suas colônias do oeste ao cristianismo, com ameaça, tortura e execução. Fez muitos inimigos. O jarl Eirik, filho de Haakon, e o rei Sueno Barba-Bifurcada da Dinamarca sentiram que Olavo os tinha privado de uma parte da Noruega.",
        { h: "O caminho até Svolder" },
        { timeline: [
          ["995", "Olavo Tryggvason é aclamado rei da Noruega; Haakon de Lade é deposto."],
          ["Entre 995 e 1000", "Olavo impõe o cristianismo e entra em choque com Eirik e Sueno. As sagas contam também casos de casamento, como o de Sigrid, a Orgulhosa."],
          ["Setembro de 1000 (ou 999)", "Svolder. As fontes variam, e a data de 9 de setembro vem de uma saga tardia."]
        ]},
        "As sagas dão causas pessoais. Olavo teria proposto casamento a Sigrid, a Orgulhosa, se ela se convertesse. Ela recusou, e ele a teria atingido com uma luva. Sigrid avisou que isso podia custar a vida dele. Adão de Bremen diz que Thyri, a mulher dinamarquesa de Olavo e irmã de Sueno, o empurrou para a guerra por causa de um dote que o irmão não pagava. Os historiadores acham que as sagas exageram o papel de Thyri. É mais provável que Olavo estivesse voltando da Vendlândia (costa sul do Báltico) buscando aliados e esperando a guerra."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Olavo Tryggvason, rei da Noruega" },
        "Um rei guerreiro e missionário à força. As sagas o veneram como o homem que levou o cristianismo ao Norte, e a morte dramática contra a maioria esmagadora fez dele um herói. No dia da batalha, segundo as sagas, ele podia ter escapado à vela e a remo, mas preferiu lutar com os onze navios que tinha.",
        { h: "Sueno Barba-Bifurcada, Olavo da Suécia e o jarl Eirik" },
        "Sueno era rei da Dinamarca, e Olavo Skötkonung, rei da Suécia, talvez fosse seu vassal. O jarl Eirik tinha perdido a herança do pai. Foi Eirik, que conhecia os noruegueses, quem segurou os dinamarqueses e suecos impacientes e identificou os navios de Olavo que passavam, um a um, para que não confundissem os menores com o grande.",
        { h: "Sigvaldi" },
        "Segundo Oddr Snorrason e a Heimskringla, o jarl Sigvaldi atraiu Olavo para a armadilha, garantindo que os boatos de emboscada eram falsos. A poesia dos escaldos apoia a ideia de que ele traiu. A Wikipédia, porém, avisa que o caráter e o papel de Sigvaldi continuam incertos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Em todas as fontes que dão números, Olavo tem 11 navios. O total dos aliados varia muito: 139 em Oddr Snorrason (Olavo da Suécia 60, Eirik 19, Sueno 60), 82 no Ágrip, 71 na Historia Norwegie, 70 em Teodorico e 80 no poema Rekstefja. Um poema de Halldórr diz que Olavo tinha 71 navios quando partiu do sul. As sagas explicam a diferença: alguns navios eram de Sigvaldi, que desertou, e outros passaram antes da armadilha ser fechada.",
        { note: "Os números de navios e todos os detalhes de combate vêm de sagas escritas mais de 200 anos depois, e os historiadores avisam que não são história confiável. Os poemas dos escaldos são mais antigos, mas só chegaram até nós citados nas sagas." },
        { h: "Os navios" },
        "A Heimskringla descreve o Crane (a Garça), grande e rápido, com 30 bancos de remo, e a Serpent (a Serpente Curta). A Ormen Lange, a Serpente Longa, é descrita como o melhor navio já construído na Noruega, com 34 compartimentos, cabeça e rabo dourados e bordas altas (o Ágrip diz 32 lugares de remo). Do lado dos aliados, só um navio é descrito: o Járnbarðinn, de Eirik, com chapas de ferro e uma viga de ferro sob a proa, talvez um aríete.",
        { h: "O lugar" },
        "Ninguém sabe ao certo onde foi. Adão de Bremen diz Øresund. O Ágrip e a Historia Norwegie dizem perto da Zelândia. Teodorico fala de uma ilha chamada Svǫldr, perto da Eslávia, e a Fagrskinna a põe diante da costa da Vendlândia. Um verso fala da 'foz do Svolder', o que sugere que ele pode ter sido um rio, e que a ilha das sagas nasceu de uma confusão de nórdicos com a geografia dos vendos. Hoje os historiadores se dividem entre Rügen e o Øresund. Por isso o local no mapa é só aproximado.",
        { h: "A batalha em sete movimentos" },
        { formation: true },
        "A frota de Olavo passou pelo ancoradouro dos aliados numa coluna longa e desordenada, sem esperar ataque. Eirik segurou os dinamarqueses e suecos até que os navios importantes aparecessem. Olavo podia ter fugido, mas decidiu lutar.",
        "Amarrou seus navios lado a lado, com a Serpente Longa no meio e a proa saindo da linha. Era uma espécie de forte flutuante: os homens lutavam à vontade, remos e vergas serviam de barreira e o inimigo só podia atacar com poucos de cada vez. Como a Serpente Longa era alta, os defensores levavam vantagem nos dardos.",
        "Dinamarqueses e suecos atacaram a frente da linha e foram repelidos, com muitas baixas e perda de navios. Eirik atacou o flanco com o Járnbarðinn e foi limpando os navios um a um, até sobrar a Serpente Longa.",
        "Há um detalhe de combate nas sagas: Einar Tambarskelfir, um arqueiro de Olavo, tentou atirar em Eirik e errou. Fin, outro arqueiro, partiu o arco de Einar ao meio quando ele o puxava. Olavo ofereceu o seu, e Einar disse que era fraco demais, e lutou de espada e escudo."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "A morte de Olavo" },
        "Adão de Bremen diz que ele se jogou no mar, 'fim digno de sua vida'. Saxo Gramático diz que preferiu o suicídio a morrer nas mãos do inimigo e pulou de armadura. O Ágrip conta que ele foi visto vivo na popa alta da Serpente Longa quando a luta diminuía e, quando Eirik chegou, um clarão brilhou e ele sumiu. Outras sagas dizem que chegou a nado à costa, com ajuda de anjos, ou que um navio dos vendos o resgatou. A Saga Mais Longa (c. 1300) registra 'aparições' de Olavo na Terra Santa, a última nos anos 1040.",
        { h: "A Noruega dividida" },
        "Segundo a Heimskringla, Olavo da Suécia ficou com quatro distritos de Trøndelag, mais Møre, Romsdal e Rånrike, e os deu ao jarl Svein Hákonarson, seu genro, como vassalo. Sueno ficou com Viken. Eirik ficou com o resto, como vassalo de Sueno. A Fagrskinna fala de uma divisão um pouco diferente.",
        "Eirik e Sueno governaram bem e a época foi próspera. A maioria das fontes diz que se disseram cristãos, mas deram liberdade de culto, e a reação desfez muito do que Olavo tinha feito. O Ágrip e a Historia Norwegie, em contraste, dizem que os jarls trabalharam ativamente para arrancar o cristianismo. A disputa pela Noruega continuou por décadas, e levou às batalhas de Nesjar e de Stiklestad. Só em 1035, com Magnus, o Bom, a Noruega foi independente e cristã.",
        { h: "Curiosidades e controvérsias" },
        { note: "Olavo se tornou, como Carlos Magno e Frederico Barba-Ruiva, um rei de quem se esperava a volta. A Heimskringla é a versão mais famosa, e a Saga Mais Longa chama Svolder de a batalha mais famosa já travada nas terras do Norte." },
        { note: "A data: Íslendingabók (c. 1128) a põe no verão. Oddr Snorrason diz que se comemora no terceiro ou quarto dia antes dos idos de setembro (10 ou 11 de setembro), e a Saga Mais Longa dá 9 de setembro. Alguns autores medievais contavam o ano a partir de setembro, e por isso pode ser 999 pelo nosso calendário." },
        { note: "A memória: Longfellow escreveu 'A Saga do Rei Olavo' em 1863, e a balada faroesa 'Ormurin langi', de Jens Christian Djurhuus (c. 1830), é uma das mais populares das Ilhas Faroé. Em setembro de 2000, mil anos depois, estreou uma ópera sobre Olavo, de Ragnar Søderlind." }
      ]}
    ]
  },

  stiklestad: {
    war: "Retomada do trono norueguês por Olavo II (1030)",
    hook: "O rei voltou do exílio para pegar a coroa de volta e morreu numa fazenda do vale de Verdal. Virou santo, e a Noruega virou cristã de verdade.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Quando Olavo Haraldsson voltou de expedições vikings, em 1015, foi eleito rei da Noruega. Em junho de 1016 venceu em Nesjar os jarls de Lade, a família que governara o país com apoio da Dinamarca. Seu reinado terminou quando chefes noruegueses, aliados de Canuto, o expulsaram.",
        "Em 1028, Canuto, o Grande, rei da Inglaterra e da Dinamarca, se aliou aos Lade, e Olavo foi para o exílio na Rus de Kiev. Em 1029, o último jarl de Lade, Haakon Ericsson, se afogou. Olavo viu a chance de voltar. O rei sueco Anund Jacob lhe deu 400 homens e guias pela região de Dalarna. Dag Hringsson, nobre norueguês exilado e governador de Anund, juntou-se a ele com a condição de que suas terras fossem devolvidas. Olavo também recrutou bandoleiros e se reuniu em Jämtland.",
        { h: "O caminho até Stiklestad" },
        { timeline: [
          ["1015", "Olavo Haraldsson volta à Noruega e é eleito rei."],
          ["Junho de 1016", "Vence os jarls de Lade em Nesjar."],
          ["1028", "Canuto, o Grande, se alia aos Lade. Olavo foge para a Rus de Kiev."],
          ["1029", "O último jarl de Lade, Haakon Ericsson, se afoga. Olavo se prepara para voltar."],
          ["1030", "Olavo atravessa a Suécia, cruza as montanhas e desce para o vale de Verdal, a uns 80 km ao norte de Trondheim."]
        ]},
        "Por que ele foi direto para a região mais hostil, Trøndelag, em vez de juntar aliados no leste da Noruega? Não se sabe ao certo. O museu de Stiklestad conta que a resistência dinamarquesa no leste o empurrou para o caminho de Jämtland e Verdal, mas os historiadores seguem sem uma resposta clara."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Olavo II Haraldsson" },
        "Os historiadores o descrevem como teimoso, impulsivo e inclinado à violência. Em Stiklestad, ele tinha a seu lado Dag Hringsson e seu meio-irmão Harald Hardrada, então com cerca de 15 anos. Segundo algumas fontes, Harald deveria ficar no acampamento e convenceu o irmão a deixá-lo lutar. Foi ferido e fugiu, e os moradores o esconderam sem saber quem era.",
        { h: "Os chefes dos camponeses" },
        "Kalv Arnesson, de Egge, tinha sido aliado do rei e chefiava os camponeses de Trøndelag. Quatro irmãos dele estavam ao lado do rei. Kalv diz a Olavo, antes da luta, que se separaram para que os camponeses buscassem a paz, e sugere que cada um fique onde está. O irmão Fin, que está com o rei, avisa: quando Kalv fala bonito, é para fazer o mal. Tore Hund, de Bjarkøy, conhecido por um casaco de pele de rena em que as espadas não cortavam, e Harek de Tjøtta também lideravam.",
        { h: "Os outros nomes" },
        "Bjørn, o marechal, era o homem do rei. Torstein Knarresmed, construtor de navios, tinha uma mágoa: Olavo tomara um grande navio mercante dele como pagamento de uma multa por homicídio. Pediu para lutar na tropa de Tore Hund, querendo ser o primeiro a atingir o rei. Tord Folason era o porta-estandarte de Olavo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Tudo que sabemos dos números vem das sagas, em especial da Heimskringla de Snorri Sturluson, escrita cerca de 200 anos depois. O exército do rei é dado em torno de 3.600 homens na marcha, e perto de 6.600 contando o hird e os auxiliares suecos. Os camponeses eram, segundo Snorri, 'cem vezes cem', mas em centos longos, ou seja, 14.400. Uma tradução fala em ao menos 10.000. O escaldo Sigvatr, contemporâneo, diz que o rei era menos da metade do inimigo. As perdas, segundo a Wikipédia, seriam de 4.200 do lado do rei e 4.600 do lado dos camponeses, mas as próprias sagas não são fonte segura de números.",
        { note: "O tamanho dos exércitos nas sagas provavelmente nunca vai ser determinado. O exército camponês parece ter sido reunido às pressas." },
        { h: "O terreno e a disposição" },
        "O campo fica na fazenda de Stiklestad, no baixo vale de Verdal, hoje uma região de Trøndelag. Em 2008, levantamentos com georradar mostraram grandes construções antigas, mas nenhum traço claro do campo de batalha. Por isso o local exato da luta é incerto.",
        "Segundo Snorri, os camponeses formaram assim: Kalv Arnesson levantou seu estandarte com os criados da casa e com Harek de Tjøtta. Tore Hund e sua tropa ficaram à frente do estandarte principal, com camponeses escolhidos dos dois lados. A linha principal era longa e densa, de gente de Trøndelag e de Hålogaland. Outra formação ficou à direita. À esquerda do centro estavam homens de Rogaland, Hordaland, dos fiordes e de Sogn, com o terceiro estandarte. O rei esperava em terreno mais alto.",
        { h: "O dia" },
        "A batalha, pela tradição, foi numa quarta-feira, 29 de julho de 1030. Snorri dá o dia como o quarto antes das calendas de agosto. Os dois lados se encararam por um tempo. Os camponeses esperavam os retardatários, e Tore Hund chegou por último. O rei esperava Dag e seus homens, que apareceram. O grito dos camponeses era 'Adiante, adiante, camponeses!', e o dos homens do rei, 'Adiante, adiante, cristãos, homens da cruz, homens do rei!'. Alguns camponeses, nas pontas, repetiram o grito do rei e foram atacados pelos próprios, por engano, até se reconhecerem.",
        "Tore Hund avançou à frente do estandarte e chamou os camponeses. Houve troca de flechas e lanças. O dia, que começara claro e ensolarado, ficou avermelhado quando a luta começou e, antes do fim, escuro como a noite. O exército do rei, em terreno alto, desceu e empurrou os camponeses para trás. Muitos começaram a fugir, mas os lendmenn e seus homens seguraram, e a luta endureceu. Os camponeses atacavam por todos os lados, com espadas na frente, lanças atrás e flechas, pedras, machadinhas e estacas nas últimas fileiras.",
        "Logo no começo, Arnljot Gelline, Gauka-Thorer e Afrafaste caíram com todos os seus homens. As fileiras diante do estandarte do rei rarearam, e Olavo mandou Tord avançar com o estandarte, seguindo atrás com sua tropa escolhida, os mais bem armados. Saiu de trás da parede de escudos e, segundo Snorri, os camponeses, ao ver seu rosto, se assustaram e baixaram as armas. Ele lutou na frente, e abateu Torgeir de Kviststad, um lendmann. Tord enfiou a haste do estandarte tão fundo no chão que ela ficou de pé, e caiu morto debaixo dele.",
        "O sol sumiu, embora o céu estivesse limpo, e escureceu. Dag Hringsson chegou com seus homens, formou e levantou o estandarte, mas o escuro tornou difícil saber quem era o inimigo, e o ataque foi lento. Foi contra os homens de Hordaland e Rogaland.",
        "No centro, o rei atingiu Tore Hund nos ombros, mas a espada não cortou o casaco de pele de rena. Tore o feriu nas mãos. O rei mandou o marechal Bjørn matar 'o cão': Bjørn bateu no ombro de Tore com o lado do martelo do machado, e Tore cambaleou. Tore então perfurou Bjørn com a lança e disse que era assim que se caçava o urso (bjørn quer dizer urso). Torstein Knarresmed acertou a perna esquerda do rei, acima do joelho, e Fin Arnason o matou logo. O rei, ferido, apoiou-se numa pedra, largou a espada e pediu ajuda a Deus. Tore Hund o atravessou com a lança por baixo da cota de malha, na barriga. Kalv o atingiu no lado esquerdo do pescoço, embora nem todas as fontes concordem que foi ele. Esses três golpes mataram Olavo.",
        "Dag continuou lutando, mas, quando o flanco do rei desabou, Kalv e Tore o atacaram em cunha e o forçaram a recuar com o resto do exército."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O corpo foi enterrado em segredo, na margem arenosa do rio Nidelva, ao sul de Trondheim. Segundo Snorri, Tore Hund voltou ao campo no quinto dia, uma quinta-feira, mas não encontrou o corpo, e muita gente espalhou que Olavo tinha escapado e voltaria com um exército.",
        "No ano seguinte, a sepultura foi aberta e, segundo Snorri, o corpo estava intacto, com cabelo e unhas crescidos. O caixão foi levado para a igreja de São Clemente, em Trondheim. O bispo Grimkell, um dos que Olavo trouxe da Inglaterra, iniciou a beatificação em 3 de agosto (a Wikipédia não dá o ano). Sobre a canonização, a Wikipédia dá versões diferentes: o papa Alexandre III o teria declarado santo em 1164, mas o corpo do artigo diz que foi o bispo de Nidaros, cerca de um ano depois da morte. A catedral de Nidaros foi construída cerca de um século depois no local do primeiro túmulo.",
        "Depois da morte do rei, a mulher de Canuto, Ælfgifu de Northampton, e o filho dos dois, Svein, governaram com dureza. O culto ao mártir cresceu e ajudou a alimentar a revolta contra o domínio dinamarquês. Svein governou a Noruega por cinco anos. Quando Magnus, o Bom, filho ilegítimo de Olavo, reivindicou o trono, Canuto cedeu. Seguiu-se um século de prosperidade.",
        { h: "Por que importa" },
        "Olavo virou o padroeiro da Noruega, e o rex perpetuus Norvegiae, o rei eterno. Seu culto teria unido o país e completado a conversão. Há uma igreja em Stiklestad sobre a pedra em que ele caiu, e a pedra estaria dentro do altar. O relicário de prata foi derretido na Reforma, e os restos foram enterrados em algum lugar da catedral, que ninguém sabe qual.",
        "Na cultura, o poema 'Tord Foleson', de Per Sivle (1901), conta a história do porta-estandarte que finca a bandeira antes de morrer. Desde 1954, todo fim de julho, o Drama de São Olavo é encenado em Stiklestad, o maior teatro ao ar livre da Escandinávia.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data e o eclipse: Snorri diz que o sol escureceu durante a batalha, e a ideia é de um eclipse. O eclipse real, porém, ocorreu em 31 de agosto de 1030, mais de um mês depois de 29 de julho. Alguns estudiosos propuseram mudar a batalha para 31 de agosto, outros mantiveram julho e sugerem que a lembrança de um eclipse posterior foi misturada à história, e outros evitaram escolher. A data mais usada continua sendo 29 de julho." },
        { note: "A fonte principal, Snorri, escreve duzentos anos depois e gosta do grandioso. O número de homens é inseguro, e as cenas (a pele de rena, o marechal Bjørn e o urso) têm um jeito de saga." }
      ]}
    ]
  },

  dandanaqan: {
    war: "Guerras entre seljúcidas e gaznévidas (1035–1040)",
    hook: "Pastores nômades contra o exército mais rico do Oriente: venceu quem soube usar a sede.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século 11, o Irã oriental e a Ásia Central eram dominados pelo império dos [[gaznévidas]], uma dinastia turca de Ghazni (hoje no Afeganistão). Seu sultão Masud I, filho do famoso Mahmud de Ghazni, tinha o exército maior e mais bem equipado da região: cavalaria pesada, infantaria, uma longa coluna de bagagem e elefantes de guerra. Era um exército pensado para batalhas campais e cercos como os que Mahmud fizera na Índia.",
        "Do outro lado estavam os [[turcomanos]] seljúcidas, nômades de uma tribo oguz que andavam de um lado para outro com seus rebanhos. Em 1034, os cara-canidas os expulsaram da Transoxiana, e eles se instalaram em Corásmia sob um governador gaznévida, Harun. Em 1035, depois do assassinato de Harun, fugiram pelo deserto de Kara Kum na direção de Merv e acabaram em Nasa, na beira do [[corasão]].",
        { h: "O caminho até Dandanaqan" },
        { timeline: [
          ["1034", "Os cara-canidas expulsam os seljúcidas da Transoxiana."],
          ["1035", "Os seljúcidas fogem para Nasa. Masud manda o general Iltughdi, que a princípio os vence e depois perde a disciplina na disputa pelo saque. Chaghri volta e destrói o exército desorganizado."],
          ["1037–1038", "Os seljúcidas tomam Merv e Nishapur, segundo uma das fontes."],
          ["1039", "Masud retoma Nishapur e passa o inverno ali. A cidade sofre com fome."],
          ["23 de maio de 1040", "Dandanaqan."]
        ]},
        "Masud tentou apaziguar: deu aos seljúcidas três cidades no Corasão, Dihistan, Nasa e Farawa. Mas as incursões continuaram até Balkh, e eles acabaram com todo o Corasão. O sultão decidiu acabar com isso de vez."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Masud I, sultão gaznévida" },
        "Comandava um exército feito para outro tipo de guerra. Segundo Bayhaqi, secretário de chancelaria que estava lá e escreveu um relato dia a dia, Masud se recusava a ouvir conselhos. Bayhaqi escreveu cerca de vinte anos depois e era um funcionário leal ao regime, então tinha motivo para culpar maus conselheiros e traições.",
        { h: "Tughril e Chaghri, chefes seljúcidas" },
        "Eram irmãos e comandavam os seljúcidas. Depois da vitória, repartiram as terras: Tughril foi proclamado governante do Corasão e avançou para oeste, na direção de Rey e do Irã central; Chaghri ficou com Merv e o leste; outros parentes ficaram com Herat, Sistão e as fronteiras, segundo uma das fontes."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são incertos. O exército gaznévida vai de 16.000 a 50.000 homens, segundo as fontes, e os elefantes, de 12 ou 60 a 100 e até 300. Os seljúcidas, de 16.000 (Lambton) a 20.000. C. E. Bosworth, que estudou a fundo os gaznévidas, acha que Masud não levou 50.000 homens nem 300 elefantes ao Corasão. E que, na hora da batalha, os gaznévidas, famintos e desmoralizados, eram provavelmente do mesmo tamanho que os seljúcidas.",
        { h: "A guerra da sede" },
        "Os seljúcidas evitaram a batalha campal que Masud queria. Atacavam as colunas, cortavam o abastecimento, tiravam suas famílias e rebanhos do caminho e atiravam de longe, com arcos, para depois recuar. No inverno de 1039, o Corasão já estava esgotado pelos impostos gaznévidas e pelos dois exércitos.",
        "Na primavera de 1040, Masud decidiu atacar Merv, a base seljúcida, marchando de Sarakhs pelo deserto e pela estepe seca. Os turcomanos tinham destruído ou bloqueado os poços do caminho. O exército marchava em pleno calor de fim de maio, com pouca água, perseguido por arqueiros a cavalo. A disciplina começou a se perder. Os comandantes discutiam, e as unidades turcas da guarda reclamavam do tratamento.",
        { h: "A batalha" },
        "Masud esperava achar água no pequeno forte de Dandanaqan, entre Merv e Sarakhs, mas a tropa já estava exausta quando os exércitos se encontraram. Segundo a narrativa de Bayhaqi, os seljúcidas atacaram um exército cansado, com sede e sem coesão. Algumas unidades se romperam, outras desertaram ou fugiram, e a linha gaznévida desabou. Masud lutou, mas escapou só com parte da guarda. O acampamento, a bagagem e o tesouro foram para os seljúcidas.",
        { note: "Os relatos que chegaram até nós descrevem a batalha em linhas gerais, sem dizer onde cada tropa estava nem como se moveu. Por isso não há diagrama de formação aqui: seria inventar." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas gaznévidas são desconhecidas, mas foram provavelmente pesadas. Masud voltou a Ghazni, julgou que não podia defendê-la e partiu para a Índia com o tesouro. No fim de 1040, as tropas se amotinaram, tomaram o tesouro e devolveram o trono ao irmão dele, Muhammad, que estava cego. Masud foi preso e morto no começo de 1041. Seu filho Mawdud o vingou e restaurou a linhagem, mas os gaznévidas ficaram reduzidos às terras altas do Afeganistão e ao Punjab.",
        "Os seljúcidas tomaram Herat, Sistão, Pushang e Ghur, e cercaram Balkh. Mandaram uma carta ao califa abássida al-Qa'im, em Bagdá, anunciando a vitória e se apresentando como bons muçulmanos sunitas, o que preparou a entrada de Tughril em Bagdá, em 1055. Em 1047, ele já cunhava moedas em Nishapur com os títulos de 'o grande sultão' e 'rei dos reis' (Shahanshah).",
        { h: "Por que importa" },
        "A batalha acabou com o domínio gaznévida no Grande Corasão. Em cerca de quinze anos, os seljúcidas conquistaram o resto do planalto iraniano, e em 1071 já enfrentavam os bizantinos em Manzikert. O Corasão passou aos corásmios em 1138 e aos gúridas em 1173.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os elefantes: as fontes falam em 12, em 60, em 100 (Bosworth) e em 300 (Sicker). Os números não batem." },
        { note: "Também há divergência sobre o início da guerra: uma fonte diz que os seljúcidas tomaram Merv e Nishapur em 1037–1038. A outra diz que, em 1035, Masud deu a eles três cidades, e que só depois, com as incursões até Balkh, tomaram todo o Corasão." },
        { note: "A imagem mais conhecida da batalha vem de um manuscrito de 1543, escrito em Samarcanda. Não é da época." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  hastings: {
    terrain: [{ t: "hill", x: 50, y: 17, rx: 44, ry: 10, l: "Colina de Senlac (ou Caldbec)" }],
    units: [
      { id: "eA", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "eB", s: "b", k: "inf", w: 26, h: 5, l: "Parede de escudos (Haroldo)" },
      { id: "eC", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "nArc", s: "a", k: "inf", w: 50, h: 2.5, l: "Arqueiros" },
      { id: "nInf", s: "a", k: "inf", w: 50, h: 4, l: "Infantaria" },
      { id: "nCavL", s: "a", k: "cav", w: 14, h: 5, l: "Bretões (Alan, o Ruivo)" },
      { id: "nCavC", s: "a", k: "cav", w: 16, h: 5, l: "Guilherme" },
      { id: "nCavR", s: "a", k: "cav", w: 14, h: 5, l: "Franceses e flamengos" }
    ],
    steps: [
      { t: "Sábado, 14 de outubro de 1066. Os ingleses lutam a pé, numa parede de escudos no alto da colina, com bosque e chão molhado nas pontas. Guilherme tem três divisões: arqueiros na frente, lanceiros atrás e cavalaria na reserva.",
        p: { eA: [27, 19], eB: [50, 19], eC: [73, 19], nArc: [50, 43], nInf: [50, 50], nCavL: [22, 60], nCavC: [50, 60], nCavR: [78, 60] } },
      { t: "Por volta das 9h, os arqueiros avançam e atiram morro acima. As flechas batem nos escudos ou passam por cima, com pouco efeito.",
        p: { nArc: [50, 34], nInf: [50, 44] } },
      { t: "A infantaria sobe e é recebida com lanças, machados e pedras. A cavalaria sobe para ajudar. A parede aguenta.",
        p: { nInf: [50, 28], nCavL: [22, 38], nCavC: [50, 38], nCavR: [78, 38] } },
      { t: "A ala esquerda, dos bretões, recua, e a retirada se espalha. Corre o boato de que Guilherme morreu.",
        p: { nCavL: [10, 54], nInf: [50, 40], nCavC: [50, 50], nCavR: [80, 50] } },
      { t: "Guilherme cavalga entre os seus, de rosto descoberto, e contra-ataca. Parte dos ingleses desce a colina para perseguir e é cercada. A Tapeçaria mostra Gyrth e Leofwine morrendo por aqui, mas outras fontes os põem mortos perto de Haroldo, no fim.",
        p: { eA: [22, 40], nCavC: [34, 44, -35], nCavL: [16, 40] }, x: ["eA"] },
      { t: "Pausa no começo da tarde. Os normandos se reorganizam ao pé da colina.",
        p: { nCavL: [22, 44], nCavC: [50, 44], nCavR: [78, 44], nInf: [50, 36], nArc: [50, 40] } },
      { t: "Segundo Guilherme de Poitiers, os normandos fingem fugir duas vezes. Parte dos ingleses sai do muro para persegui-los.",
        p: { nCavR: [88, 50], eC: [80, 34] } },
      { t: "Os que saíram são cortados. O muro perde housecarls, que são trocados por homens do fyrd, e fica mais curto, mas continua de pé. Os arqueiros voltam a atirar.",
        p: { nCavR: [78, 36, -35], nArc: [50, 30], nInf: [50, 26] }, x: ["eC"] },
      { t: "No fim da tarde, Haroldo morre. As fontes discordam: flecha no olho, golpe de espada, ou ninguém sabia dizer. Os housecarls lutam em volta do corpo.",
        p: { nCavL: [28, 28], nCavC: [50, 28], nCavR: [72, 28], nInf: [50, 24] }, x: ["eB"] },
      { t: "Sem líder, o exército inglês se desfaz e foge. Em Malfosse, uma retaguarda ainda fere Eustácio de Bolonha antes de ser destruída.",
        p: { nCavL: [26, 14], nCavC: [50, 12], nCavR: [74, 14], nInf: [50, 20] } }
    ]
  },

  manzikert: {
    terrain: [
      { t: "hill", x: 50, y: 8, rx: 46, ry: 7, l: "Colinas perto de Manzikert" },
      { t: "note", x: 86, y: 70, l: "Norte ↑" }
    ],
    units: [
      { id: "sC", s: "a", k: "cav", w: 20, h: 5, l: "Arqueiros a cavalo (centro)" },
      { id: "sL", s: "a", k: "cav", w: 16, h: 5, l: "" },
      { id: "sR", s: "a", k: "cav", w: 16, h: 5, l: "" },
      { id: "sCamp", s: "a", k: "camp", w: 10, h: 5, l: "Acampamento de Alp Arslan" },
      { id: "bL", s: "b", k: "inf", w: 20, h: 5, l: "Briênio" },
      { id: "bC", s: "b", k: "inf", w: 22, h: 5, l: "Romano e varegues" },
      { id: "bR", s: "b", k: "inf", w: 20, h: 5, l: "Aliates" },
      { id: "bRes", s: "b", k: "inf", w: 16, h: 4, l: "Reserva (Andronico Ducas)" },
      { id: "bCamp", s: "b", k: "camp", w: 10, h: 5, l: "Manzikert" }
    ],
    steps: [
      { t: "26 de agosto de 1071. Os bizantinos estão em três grupos, com a reserva de Andronico Ducas atrás. Os seljúcidas esperam, em crescente, a uns 4 km de distância.",
        p: { sC: [50, 22], sL: [20, 28, -20], sR: [80, 28, 20], sCamp: [50, 6], bL: [26, 52], bC: [50, 52], bR: [74, 52], bRes: [50, 62], bCamp: [10, 64] } },
      { t: "Os bizantinos avançam. Os arqueiros a cavalo atiram sem parar. O centro do crescente recua, e as pontas fecham pelos lados.",
        p: { bL: [26, 42], bC: [50, 40], bR: [74, 42], bRes: [50, 56], sC: [50, 14], sL: [14, 34, -45], sR: [86, 34, 45] } },
      { t: "O dia todo, os turcos recuam e atiram, e evitam o corpo a corpo. As alas bizantinas sofrem com as flechas.",
        p: { bL: [26, 30], bC: [50, 26], bR: [74, 30], bRes: [50, 52], sL: [8, 40, -70], sR: [92, 40, 70] } },
      { t: "No fim da tarde, os bizantinos tomam o acampamento de Alp Arslan. Mas as alas, as mais atingidas pelas flechas, quase se romperam ao tentar forçar uma batalha de verdade, e os turcos continuam fugindo do corpo a corpo.",
        p: { bC: [50, 12], sC: [50, 24] } },
      { t: "Ao anoitecer, Romano manda voltar. A ala direita entende mal a ordem, e Andronico Ducas, em vez de cobrir a retirada, volta para o acampamento.",
        p: { bC: [50, 28, 180], bL: [26, 34], bR: [74, 34], bRes: [24, 64] } },
      { t: "Os seljúcidas atacam a confusão. A ala direita bizantina se desfaz, talvez achando que foi traída por armênios ou por turcos aliados.",
        p: { sL: [34, 40, -20], sR: [78, 40, 20], sC: [58, 34] }, x: ["bR"] },
      { t: "A esquerda de Briênio também cai. O centro, com o imperador e os varegues, fica cercado. Romano, ferido, é capturado. A perseguição dura a noite toda.",
        p: { sL: [36, 28], sR: [64, 28], sC: [50, 38] }, x: ["bL"] },
      { t: "Os seljúcidas não perseguem o resto. Muitas unidades sobrevivem, e o exército se reagrupa em Dokeia, onde Romano o encontra depois de solto. A derrota foi menor do que a lenda diz, e a guerra civil que veio depois fez mais estrago.",
        p: { bRes: [20, 64] }, x: ["bC"] }
    ]
  },

  jerusalem1099: {
    terrain: [
      { t: "hill", x: 50, y: 34, rx: 24, ry: 14, l: "Jerusalém (muralhas)" },
      { t: "note", x: 20, y: 44, l: "Torre de Davi" },
      { t: "note", x: 50, y: 70, l: "Monte Sião" },
      { t: "note", x: 94, y: 10, l: "Monte das Oliveiras" },
      { t: "note", x: 8, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "cNor", s: "a", k: "inf", w: 14, h: 5, l: "Roberto da Normandia" },
      { id: "cFla", s: "a", k: "inf", w: 14, h: 5, l: "Roberto de Flandres" },
      { id: "cGod", s: "a", k: "inf", w: 14, h: 5, l: "Godofredo" },
      { id: "cTan", s: "a", k: "cav", w: 10, h: 5, l: "Tancredo" },
      { id: "cRay", s: "a", k: "inf", w: 16, h: 5, l: "Raimundo de Toulouse" },
      { id: "tGod", s: "a", k: "camp", w: 6, h: 6, l: "Madeira e torre (Godofredo)" },
      { id: "tRay", s: "a", k: "camp", w: 6, h: 6, l: "Madeira e torre (Raimundo)" },
      { id: "fGar", s: "b", k: "inf", w: 22, h: 5, l: "Guarnição fatímida (Iftikhar)" }
    ],
    steps: [
      { t: "7 de junho de 1099. Roberto da Normandia fica ao norte, diante do Portão das Flores. Roberto de Flandres fica à direita dele. Godofredo e Tancredo cobrem o canto noroeste. Raimundo fica ao sul. O leste não é vigiado. Dentro, uns mil soldados e 400 cavaleiros de elite.",
        p: { cNor: [64, 12], cFla: [46, 12], cGod: [28, 14], cTan: [14, 20], cRay: [38, 58], tGod: [6, 30], tRay: [24, 64], fGar: [50, 34] } },
      { t: "13 de junho: primeiro assalto, com escadas e picaretas contra o muro externo. Não basta.",
        p: { cNor: [64, 18], cFla: [46, 18], cGod: [28, 20] } },
      { t: "Os líderes veem que não adianta cercar sem máquinas. Água quase não há, e o calor é forte. Em 17 de junho chegam notícias de navios em Jafa, e acha-se madeira longe dali. Em quase três semanas, as torres são montadas.",
        p: { cNor: [64, 10], cFla: [46, 10], cGod: [28, 12], tGod: [18, 28], tRay: [30, 62] } },
      { t: "8 de julho: procissão descalça de padres e bispos em volta das muralhas até o monte das Oliveiras. Do alto dos muros, os defensores zombam.",
        p: { cNor: [90, 22], cFla: [90, 30], cGod: [88, 40], cTan: [92, 48], cRay: [80, 56] } },
      { t: "Noite de 13 para 14 de julho. O exército do norte muda para o canto nordeste, com a torre de Godofredo. Raimundo ataca pelo sul, no monte Sião. Tancredo faz uma finta no noroeste.",
        p: { cNor: [86, 14], cFla: [58, 10], cGod: [70, 12], cTan: [22, 16], cRay: [50, 58], tGod: [74, 16], tRay: [50, 52], fGar: [64, 28] } },
      { t: "14 de julho, ao som de trombetas: o aríete danifica o muro, mas emperra. O ataque para à noite.",
        p: { cGod: [70, 17], tGod: [74, 19], cNor: [86, 18], cFla: [58, 15] } },
      { t: "Sexta-feira, 15 de julho, meio-dia: o assalto recomeça. A torre de Godofredo encosta no muro, e os homens passam para o alto. Os defensores recuam em confusão.",
        p: { cGod: [70, 22], tGod: [74, 21], cNor: [84, 22], cFla: [58, 20], fGar: [54, 32] } },
      { t: "A cidade cai. Os cruzados matam muita gente. Iftikhar se refugia na Torre de Davi e, segundo a versão mais citada, se rende a Raimundo e sai com escolta para Ascalão.",
        p: { cGod: [60, 32], cNor: [74, 34], cFla: [48, 30], cTan: [40, 38], cRay: [26, 40] }, x: ["fGar"] }
    ]
  },

  svolder: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 76, l: "Mar (local incerto)" },
      { t: "hill", x: 78, y: 12, rx: 14, ry: 7, l: "Ilha" }
    ],
    units: [
      { id: "oVan", s: "b", k: "ship", w: 12, h: 6, l: "Navios de Olavo" },
      { id: "oSerp", s: "b", k: "ship", w: 18, h: 5, l: "Serpente Longa" },
      { id: "oRear", s: "b", k: "ship", w: 12, h: 6, l: "" },
      { id: "aDan", s: "a", k: "ship", w: 12, h: 5, l: "Dinamarqueses (Sueno)" },
      { id: "aSwe", s: "a", k: "ship", w: 12, h: 5, l: "Suecos (Olavo)" },
      { id: "aEir", s: "a", k: "ship", w: 12, h: 5, l: "Járnbarðinn (Eirik)" }
    ],
    steps: [
      { t: "Segundo as sagas, Olavo volta do sul numa coluna longa e desordenada, sem esperar ataque. Os aliados esperam ancorados atrás de uma ilha.",
        p: { oRear: [8, 52], oSerp: [26, 52], oVan: [46, 52], aDan: [66, 6], aSwe: [88, 6], aEir: [78, 22] } },
      { t: "Eirik segura os impacientes e vai identificando os navios que passam. Os aliados saem do abrigo. Olavo podia fugir, mas decide lutar com seus 11 navios.",
        p: { aDan: [64, 26], aSwe: [88, 26], aEir: [76, 38], oVan: [54, 52] } },
      { t: "Olavo amarra os navios lado a lado, com a Serpente Longa no meio e a proa saindo da linha. É um forte flutuante, e a Serpente Longa, alta, leva vantagem nos dardos.",
        p: { oVan: [40, 40], oSerp: [44, 49], oRear: [40, 58] } },
      { t: "Dinamarqueses e suecos atacam a frente da linha, perdem navios e muita gente, e são repelidos.",
        p: { aDan: [66, 40], aSwe: [66, 58], aEir: [80, 49] } },
      { t: "Eirik ataca o flanco com o Járnbarðinn, de ferro, e vai limpando os navios de Olavo um por um.",
        p: { aEir: [40, 28, 90] }, x: ["oVan"] },
      { t: "Só sobra a Serpente Longa. Einar Tambarskelfir tenta flechar Eirik e erra, e o arqueiro Fin parte o arco dele ao meio.",
        p: { aEir: [40, 66, 90], aDan: [58, 40], aSwe: [58, 58] }, x: ["oRear"] },
      { t: "A Serpente Longa é tomada. Olavo, segundo as sagas, some da popa: se jogou ao mar, ou foi salvo, ou virou lenda.",
        p: { aDan: [52, 44], aSwe: [52, 54] }, x: ["oSerp"] }
    ]
  }
});
