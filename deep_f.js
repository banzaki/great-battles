// In-depth battles, batch f: feishui, catalaunicos, salsu, yarmuk, heliopolis, dafei.
// Checked against Wikipedia (EN) and the works it cites, Britannica, and the ancient and medieval chronicles.

Object.assign(GLOSSARY, {
  "dinastia": "Uma família que governa um país por várias gerações, passando o poder de pai para filho (ou de irmão para irmão).",
  "exército beifu": "O exército profissional da dinastia Jin Oriental, formado a partir das tropas hereditárias de famílias poderosas do norte. Era bem treinado e unido, ao contrário dos exércitos de recrutas.",
  "federados": "Povos que lutavam pelo Império Romano em troca de terras e pagamento, sob o comando dos seus próprios chefes. Em 451, boa parte do exército romano da Gália era assim.",
  "mestre dos soldados": "Em latim, magister militum. O título do general em chefe do exército romano do Ocidente. Aécio o usava.",
  "godos": "Povo germânico que se dividiu em dois ramos: os visigodos, que se instalaram no sul da Gália, e os ostrogodos, que ficaram sob domínio dos hunos até a morte de Átila.",
  "alanos": "Povo nômade de origem iraniana, famoso pela cavalaria. Parte deles se instalou no vale do Loire, na Gália, como aliada de Roma.",
  "gépidas": "Povo germânico que vivia na região do Danúbio e era súdito de Átila. Seu rei, Ardarico, era um dos conselheiros de confiança do huno.",
  "retirada fingida": "Truque antigo: fingir que se foge para atrair o inimigo para um lugar ruim, para longe da sua comida ou para dentro de uma emboscada.",
  "logística": "Tudo o que mantém um exército de pé: comida, água, armas, transporte e caminhos. Muitas guerras foram perdidas por falta de logística, e não por falta de coragem.",
  "bizantinos": "Nome moderno dos romanos do Oriente. O Império Bizantino era a metade oriental do Império Romano, com capital em Constantinopla, e sempre se chamou de romano.",
  "califa": "Sucessor de Maomé na liderança da comunidade muçulmana. Era ao mesmo tempo chefe religioso e chefe do Estado.",
  "califado rashidun": "O primeiro califado (632 a 661), governado pelos quatro primeiros sucessores de Maomé: Abu Bakr, Umar, Uthman e Ali. 'Rashidun' quer dizer 'os bem guiados'.",
  "uádi": "Vale profundo e encaixado, de paredes íngremes, escavado por um rio (ou por chuvas raras) no deserto. Em árabe, wadi.",
  "guarda móvel": "A cavalaria de elite de Khalid ibn al-Walid, mantida em reserva para correr até o ponto da linha que estivesse cedendo, ou para dar o golpe decisivo.",
  "cavalaria pesada": "Cavaleiros com armadura e lança, treinados para o choque. Fortes de frente, mas mais lentos que a cavalaria leve.",
  "protetorado": "Território que um império controla e protege sem governar diretamente, em geral por meio de guarnições militares e governantes locais.",
  "tibetanos": "Povo do planalto do Tibete que, no século VII, formou um império poderoso. Chamado de Tubo nas fontes chinesas, chegou a disputar com a China a Ásia Central."
});

Object.assign(DEEP, {
  feishui: {
    war: "Invasão do sul da China pelo Qin Anterior (383)",
    hook: "Um exército que ouvia soldados no vento e em grous, e foi destruído por medo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No ano 383, a China estava dividida em dois. O norte era disputado por povos nômades e reinos de vida curta. O sul era governado pela [[dinastia]] Jin Oriental, protegida pelo rio Yangtzé.",
        "Quem juntou o norte foi Fu Jian, imperador do Qin Anterior, do povo di. Ele tomou o reino de Yan em 370, arrancou Sichuan dos Jin em 373 e capturou Xiangyang em 379. Por volta de 381, controlava todo o norte e preparava a invasão do sul. O que faltava era o Yangtzé, que ele achava pouco para pará-lo: segundo a tradição, disse que bastaria seus soldados jogarem os chicotes dos cavalos no rio para represá-lo.",
        { h: "O caminho até o rio Fei" },
        { timeline: [
          ["Maio de 383", "O general Jin Huan Chong tenta retomar Xiangyang com 100.000 homens e é repelido por um socorro Qin de 50.000."],
          ["Agosto a setembro de 383", "Fu Rong, duque de Yangping, parte na frente com 300.000 homens. Fu Jian segue de Chang'an com a força principal."],
          ["Outubro de 383", "Fu Rong toma Shouyang (a atual Lu'an, em Anhui), na região do rio Huai."],
          ["Novembro de 383", "Os dois exércitos se encaram dos dois lados do rio Fei."],
          ["384 a 385", "O Qin Anterior se desfaz em rebeliões. Fu Jian é morto em 385."]
        ]},
        "Fu Jian convocou, segundo o Livro de Jin, seis em cada dez homens aptos do seu reino, e mais 30.000 guardas de elite. A maior parte era de gente tirada de povos recém-conquistados, como os xianbei e os xiongnu, com pouca lealdade e pouco treino. Muitos conselheiros, incluindo o próprio Fu Rong, eram contra a guerra. Fu Jian a fez mesmo assim."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Fu Jian, imperador do Qin Anterior" },
        "Era um governante enérgico e ambicioso, que unificou o norte com sucesso e achava que a grandeza do exército resolveria o resto. Seu erro, segundo a tradição, foi confundir tamanho com força. Um exército feito de povos recém-vencidos e sem laços entre si é enorme no papel e frágil no combate.",
        { h: "Xie An, Xie Shi e Xie Xuan" },
        "Do lado Jin, a estratégia geral estava com o primeiro-ministro Xie An. Ele mandou o irmão mais novo, Xie Shi, e o sobrinho Xie Xuan comandar o [[exército beifu]], com cerca de 80.000 homens. Era uma tropa bem treinada e unida, formada por contingentes hereditários de famílias poderosas do norte que tinham fugido para o sul.",
        "Xie An tinha fama de calmo. Quando Huan Chong, preocupado com a capital, mandou 3.000 soldados de elite para reforçá-la, Xie An os devolveu, dizendo que a defesa da corte já estava arrumada. Quando Xie Xuan perguntou que instruções dar, só disse que daria mais instruções depois. Parecia indiferença; era confiança.",
        { h: "Fu Rong, Zhu Xu e Liu Laozhi" },
        "Fu Rong, duque de Yangping, tinha se oposto à guerra e mesmo assim a liderou na frente. Zhu Xu era um funcionário Jin capturado, que Fu Jian mandou convencer Xie Shi a se render. Em vez disso, ele avisou os Jin de que o grosso do exército Qin ainda não tinha chegado. Liu Laozhi era o comandante que, junto com Xie Xuan, aproveitou o aviso."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O Livro de Jin dá ao Qin 870.000 homens, soma dos 270.000 cavaleiros e 600.000 soldados a pé que o texto atribui a Fu Jian. Esse número vem de uma crônica escrita para exaltar a vitória, e os historiadores modernos o consideram muito exagerado. Um estudo de 2012, de Thilo Diefenbach, conclui que a escala foi 'dramaticamente exagerada', embora a batalha tenha mesmo acontecido. Do lado Jin, o número de 80.000 do exército beifu é mais aceito.",
        { note: "Houve um tempo em que se duvidou que a batalha tivesse existido: um artigo de 1968, de Michael Rogers, a questionava, mas Hans Bielenstein refutou essa visão em 1996. Hoje o consenso é que ela aconteceu, mas em escala menor que a das crônicas." },
        { h: "O terreno" },
        "O rio Fei, que hoje não existe mais, corria perto de Lu'an, em Anhui, na região do rio Huai. As fontes dizem pouco mais sobre o chão. O que importa é que havia um rio entre os dois exércitos, e que o lado Qin acampou na margem oeste, os Jin na margem leste.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, Fu Jian deixou o grosso do exército em Xiangcheng e foi na frente com 8.000 cavaleiros leves, juntar-se a Fu Rong. Mandou Zhu Xu a Xie Shi com a proposta de rendição. Zhu Xu aconselhou o contrário: atacar as unidades da frente antes que o resto chegasse.",
        "Segundo, Xie Xuan e Liu Laozhi atacaram a vanguarda Qin com 5.000 homens de elite e mataram 15.000. Os Jin depois se alinharam numa frente longa, para parecerem mais numerosos, e Fu Jian superestimou a força do inimigo.",
        "Terceiro, os dois exércitos chegaram ao rio Fei, os Qin a oeste e os Jin a leste, e os Jin não conseguiam avançar. Xie Xuan mandou um recado a Fu Rong propondo que os Qin recuassem um pouco, para os Jin atravessarem e lutarem. A maioria dos generais Qin era contra, mas Fu Jian decidiu aceitar, com a ideia de atacar no meio da travessia, quando os Jin estivessem vulneráveis. Fu Rong concordou e mandou recuar.",
        "Quarto, a ordem de recuar deu errado. Num exército grande, sem laços e cansado, uma retirada vira fuga com facilidade. Zhu Xu, que estava entre os Qin, gritou que o exército tinha sido derrotado. A retirada virou pânico. Xie Xuan, Xie Yan e Huan Yi cruzaram o rio e atacaram.",
        "Quinto, Fu Rong tentou conter a fuga, mas seu cavalo caiu e ele foi morto pelos soldados Jin. Os comandantes Jin leram os rastros e as marcas de rodas confusos como sinal de desordem total, não de retirada, e perseguiram. O exército Qin se desfez e abandonou grandes depósitos de comida e suprimentos.",
        "Sexto, a fuga durou dias. Segundo o Livro de Jin, na biografia de Xie Xuan, os que escapavam ouviam o vento e o canto dos grous e achavam que eram os Jin atrás deles, e corriam dia e noite. Dali saiu a expressão chinesa [[fengsheng helì|chengyu]], 'som do vento e grito do grou', que hoje descreve um nervosismo extremo. Fu Jian foi atingido por uma flecha perdida e escapou até o exército de Murong Chui, um dos poucos que não tinham se desfeito."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os Jin venceram com perdas leves. Os Qin perderam grande parte do exército na fuga, por combate, fome e frio, mas não existe um número confiável. Fu Jian voltou a Luoyang escoltado por Murong Chui, que se recusou a matá-lo, apesar de o filho e o irmão insistirem.",
        { h: "A queda do Qin Anterior" },
        "A notícia da derrota acendeu rebeliões. Em 384, Murong Chui se revoltou e fundou o Yan Posterior. Yao Chang, outro general do antigo exército, fundou o Qin Posterior. Fu Jian foi capturado depois da queda de Chang'an e, no outono de 385, estrangulado por soldados de Yao Chang. O Qin Anterior ainda durou até 394, mas nunca se recuperou.",
        "Os Jin avançaram até o rio Amarelo e recuperaram boa parte do coração do norte, segundo a Wikipedia.",
        { h: "Por que importa" },
        "A vitória preservou o sul da China como um Estado independente e deu aos Jin a base para retomar parte do norte, no período das dinastias do Sul e do Norte. Se Fu Jian tivesse vencido, o sul teria sido absorvido por um império do norte, feito de povos misturados. A Wikipedia a chama de uma das batalhas mais decisivas da história chinesa.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: a Wikipedia em inglês dá 30 de novembro de 383 na caixa de informações, mas no texto fala só em 'outono'. As duas coisas não batem, e a fonte não explica a diferença." },
        { note: "O jogo de Xie An: segundo a tradição, quando chegou a notícia da vitória, Xie An jogava um jogo de tabuleiro com um convidado. Disse apenas: 'Os garotos venceram uma batalha.' Só depois, em seu quarto, quebrou o salto de uma sandália na soleira da porta sem perceber, de tanta empolgação. As fontes variam sobre qual era o jogo: a Wikipedia diz xiangqi, mas a história costuma ser contada com go, e o xiangqi talvez nem existisse em 383." },
        { note: "O pânico: o Livro de Jin é a fonte da expressão do vento e dos grous. Foi escrito muito tempo depois dos fatos, e parte do quadro pode ser literatura. Mas o resultado, o colapso do Qin Anterior, é um fato." }
      ]}
    ]
  },

  catalaunicos: {
    war: "Invasão da Gália por Átila (451)",
    hook: "A batalha em que romanos e godos se uniram contra Átila, e que mesmo assim ninguém sabe dizer quem venceu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 451, quem defendia a Gália para o Império Romano do Ocidente era o general Flávio Aécio, o [[mestre dos soldados]], a serviço do imperador Valentiniano III. Na Gália, o poder romano dependia de povos aliados: visigodos, burgúndios, francos e [[alanos]] que viviam dentro do império como [[federados]].",
        "Do outro lado do Reno estava Átila, rei dos hunos. Vários povos germânicos, como os [[gépidas]] e os ostrogodos, eram seus súditos. Em 450, voltou os olhos para o Ocidente. Segundo a tradição, Honória, irmã do imperador, confinada pela família, mandou o eunuco Jacinto pedir ajuda a Átila. Ele leu o pedido como proposta de casamento e exigiu metade do império como dote. Valentiniano recusou. Ian Hughes sugere uma leitura diferente: Honória teria usado Átila, que era general honorário romano, como peça de uma disputa política.",
        { h: "O caminho até os Campos Cataláunicos" },
        { timeline: [
          ["450", "O episódio da carta e do anel de Honória, que Átila usa como pretexto."],
          ["Início de 451", "Átila atravessa o Reno com seus aliados. Metz cai em 7 de abril, segundo as fontes, embora haja dúvidas."],
          ["Junho de 451", "Átila cerca Orléans, onde os alanos de Sangiban resistem."],
          ["14 de junho de 451", "O exército romano aliado chega a Orléans e Átila se retira."],
          ["Cerca de 20 de junho", "Batalha nos Campos Cataláunicos, a data proposta por J. B. Bury."],
          ["452", "Átila invade a Itália. Em 453 morre; em 454, seu império se desfaz."]
        ]},
        "Aécio primeiro tentou convencer o rei visigodo Teodorico I, que, segundo a tradição, achou as forças romanas fracas demais e preferiu defender suas terras. Quem o convenceu, e a outros povos hesitantes, foi Avito, um nobre da Gália. O rei alano Sangiban prometeu abrir as portas de Orléans a Átila, mas os habitantes recusaram, e a cidade resistiu até os aliados chegarem. Para Hughes e outros historiadores, a defesa de Orléans foi o que realmente decidiu a campanha."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Átila, rei dos hunos" },
        "Governava um conjunto de povos súditos e aliados, entre eles gépidas e [[godos]] ostrogodos. Em 451 voltou-se contra o Ocidente, depois do pretexto da carta de Honória.",
        { h: "Aécio, mestre dos soldados" },
        "O general romano que comandava o que restava das forças do Ocidente na Gália. Segundo Sidonius Apollinaris, seu exército era pequeno e disperso, embora a Wikipedia note que isso pode ser exagero a favor de Avito. Sua missão era difícil: manter unidos aliados que desconfiavam uns dos outros.",
        { h: "Teodorico I, Torismundo e Sangiban" },
        "Teodorico I, rei dos visigodos, tinha um reino próprio na Gália. Seu filho Torismundo lutou a seu lado. Sangiban, rei dos alanos, tinha lealdade duvidosa. Segundo Hughes, Aécio o pôs no centro justamente por saber que os alanos eram bons contra a tática dos hunos, e talvez por querer vigiá-lo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Aqui os números dependem de quem se lê. O historiador Jordanes, que escreveu bem depois e se apoiou em Cassiodoro, fala de 165.000 mortos, sem contar uma escaramuça na noite anterior. O cronista Hidácio diz que 'quase 300.000' caíram. Os historiadores modernos acham tudo isso impossível. Schultheis calcula que Átila tinha cerca de 70.000 homens, e que os federados germânicos de Aécio não passavam de 50.000. Heather estima que os visigodos sozinhos podiam pôr cerca de 25.000.",
        { note: "A lista de povos é longa. Jordanes enumera, do lado de Aécio, francos, sármatas, armoricanos, burgúndios, saxões e outros, além de alanos e visigodos; do lado de Átila, gépidas de Ardarico e godos amali de Valamir. Thompson duvida de que alguns desses nomes tenham realmente estado lá." },
        { h: "O terreno" },
        "Ninguém sabe onde foi. O lugar fica perto de Châlons-en-Champagne ou de Troyes, e os candidatos vão de Méry-sur-Seine a La Cheppe e à crista de Montgueux, a mais bem estudada hoje. O que Jordanes descreve é uma planície que sobe de um lado por uma encosta íngreme até uma crista. Essa crista foi o centro da luta.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na manhã do dia, os adivinhos de Átila examinaram as entranhas dos animais e previram um desastre para os hunos, embora um chefe inimigo fosse morrer. Hughes acha que isso pode ser invenção posterior. Átila esperou até a hora nona, mais ou menos as 14h30, para atacar, dizem que porque o pôr do sol ajudaria o exército a fugir se perdesse.",
        "Segundo, o campo estava arrumado assim: os hunos tomaram a direita da crista, os romanos de Aécio a esquerda, deixando o alto vazio entre eles. Os visigodos ficaram na direita da linha aliada e os alanos de Sangiban no centro. Hughes defende que Átila pôs seus súditos nas alas e os próprios hunos no centro.",
        "Terceiro, a luta pela crista. Os hunos tentaram tomá-la e foram batidos pelos romanos de Aécio e pelos godos de Torismundo.",
        "Quarto, Teodorico, atacando os godos amali de Valamir, foi morto sem que seus homens vissem. Jordanes dá duas versões: caiu do cavalo e foi pisoteado, ou foi atravessado pela lança de um amali chamado Andag.",
        "Quinto, os visigodos, mais rápidos que os alanos, investiram contra a guarda pessoal de Átila. O rei dos hunos recuou para seu acampamento, fortificado com carroças.",
        "Sexto, veio a noite. Torismundo, voltando às suas linhas, entrou por engano no acampamento huno e foi ferido antes que seus homens o resgatassem. Aécio ficou separado dos seus e passou a noite entre os godos.",
        "Sétimo, no segundo dia o campo estava cheio de corpos e os hunos não saíram. Romanos e godos cercaram o acampamento. Átila, segundo a tradição, mandou fazer uma pira de selas para se atirar nas chamas em vez de ser capturado.",
        "Oitavo, os visigodos acharam o corpo de Teodorico e o levaram. Torismundo queria atacar o acampamento, mas Aécio o dissuadiu: aconselhou que voltasse logo a Toulouse e assumisse o trono antes que os irmãos o fizessem. Torismundo voltou e foi rei sem resistência. Segundo Gregório de Tours, Aécio mandou os francos para casa do mesmo modo e ficou com os despojos do campo.",
        { note: "Hughes propõe outra versão: os hunos chegaram primeiro à direita, Aécio repeliu os gépidas, Torismundo atacou o centro huno e quase matou Átila, e a escuridão deixou os dois lados sem saber quem tinha vencido até a manhã." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A resposta honesta é que as fontes contemporâneas não dizem claramente. Próspero diz apenas que os hunos se retiraram, depois de perder a vontade de lutar. A tradição de uma vitória romana começa com Cassiodoro, no século VI, e é a que Jordanes seguiu. Para os historiadores modernos, a batalha foi tática e estrategicamente indecisa ou, na leitura de Kim, até favorável a Átila; a opinião de Schultheis é que a narrativa da vitória gótica cresceu com o tempo.",
        "Em 452, Átila invadiu a Itália. Destruiu Aquileia depois de três meses de cerco e devastou o vale do Pó. Uma embaixada, que incluía o papa Leão I, o convenceu a recuar, provavelmente por causa da fome e da doença no seu exército. Átila morreu em 453. Em 454, após a batalha de Nedao, seu império se desfez. O próprio Aécio foi assassinado por Valentiniano III.",
        { h: "Por que importa" },
        "Para Gibbon, foi a última vitória conquistada em nome do Império Romano do Ocidente. Creasy a viu como a Europa cristã derrotando invasores pagãos da Ásia, e essa foi a imagem que ficou. J. B. Bury, ao contrário, achou que Átila já se retirava, que a verdadeira virada foi a defesa de Orléans e que uma vitória huna não teria mudado tanto a história. Kim, por sua vez, acha que a batalha enfraqueceu o poder romano no norte da Gália e favoreceu os francos sálios e os burgúndios.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: 20 de junho é uma proposta de Bury, apoiada pelo cronista Hidácio, que situa a batalha entre duas aparições do cometa Halley. Alguns autores propuseram a primeira semana de julho ou 27 de setembro." },
        { note: "O tesouro de Pouan, encontrado em 1842 e por muito tempo ligado ao enterro de Teodorico, não tem conexão comprovada com a batalha." },
        { note: "Jordanes depende muito de Cassiodoro, e estudiosos como Whately e Barnish acham que ele estava fazendo política, ligada às guerras de Justiniano contra os godos. Kim vê ecos de Heródoto e de Maratona. Altheim duvidou da narrativa inteira." }
      ]}
    ]
  },

  salsu: {
    war: "Guerra Sui–Goguryeo (598–614)",
    hook: "Um general coreano mandou um poema ao inimigo, e 300.000 chineses foram embora para morrer.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século VI, a China era governada pela [[dinastia]] Sui. Seu imperador Yang queria mostrar a força do império. O problema estava ao nordeste: Goguryeo, um reino entre a Manchúria e a Coreia, que não se rendia à China.",
        "A guerra não começou em 612. Em 598, Goguryeo atacou além do rio Liao, e a retaliação do imperador Wen fracassou. Yang decidiu acabar com a questão com uma força que, segundo as crônicas, foi uma das maiores já reunidas.",
        { timeline: [
          ["598", "Goguryeo ataca além do rio Liao. A retaliação do imperador Wen falha."],
          ["612", "Yang invade Goguryeo. O rio Liao é atravessado, e as fortalezas de Liaodong são cercadas."],
          ["612, junho", "O general Eulji Mundeok vai ao acampamento Sui e depois manda seu poema ao general Yu Zhongwen."],
          ["612, julho", "Os Sui, em retirada, são atacados no rio Salsu."],
          ["613 e 614", "Duas novas invasões de Yang também fracassam. A dinastia Sui entra em colapso."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Eulji Mundeok, general de Goguryeo" },
        "Sobre ele, as fontes principais são coreanas, em especial o Samguk Sagi, de Kim Busik, escrito em 1145, mais de 500 anos depois. O que se sabe é que era um general de Goguryeo e que, em 612, fez uma coisa muito inteligente: foi ao acampamento Sui fingindo se render e depois escapou, depois de ver de perto o exército inimigo. Assim avaliou o moral dos Sui antes de atraí-los para dentro do seu território.",
        { h: "Yu Zhongwen e Yuwen Shu" },
        "Os dois generais Sui. Yang, que mandava em tudo, tinha ordenado em segredo que prendessem o rei Yeongyang ou Eulji, se tivessem a chance. Liu Shilong, que aconselhou deixar Eulji partir para negociar, foi mais tarde executado por desobedecer à ordem do imperador. Yu se arrependeu e tentou chamar Eulji de volta, mas ele recusou.",
        { h: "O imperador Yang" },
        "Exigia que seus generais pedissem sua aprovação antes de agir. Em Yodong, uma rendição precisava de uma resposta do imperador, que demorava; quando chegava, os defensores já estavam prontos de novo. Esse controle à distância atrasava e atrapalhava os generais no campo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As crônicas, o Livro de Sui e o Samguk Sagi, falam em 1.133.800 combatentes e cerca de dois milhões de homens de apoio. A Wikipedia observa que historiadores da época Tang podem ter exagerado, e o historiador David Graff estima 670.000. O número de 305.000 soldados mandados para Pyongyang também vem das crônicas. Do lado de Goguryeo não há número confiável.",
        { note: "O exército Sui levou cerca de 40 dias para sair, e sua coluna se estendia por uns 300 km. É um sinal do tamanho e do problema: um exército assim precisa de uma [[logística]] enorme." },
        { h: "O terreno" },
        "As fortalezas de Liaodong, na fronteira, o rio Yalu e, mais ao sul, o Salsu, que se identifica com o atual rio Chongchon, na Coreia do Norte. Mas é só uma identificação provável.",
        { h: "A campanha em movimentos" },
        "O rei Yeongyang abandonou a zona de proteção conquistada em 598 e recuou para trás do rio Liao. O rio descongelou cedo, e os Sui tiveram de construir pontes. As primeiras ficaram curtas demais, e Goguryeo segurou o primeiro ataque. Depois as pontes foram estendidas, o rio foi atravessado, e as fortalezas foram cercadas. Depois de cinco meses, nenhum castelo ou fortaleza tinha caído.",
        "Yang então mudou de plano: manteve as forças diante das fortalezas e mandou um exército principal, cerca de 305.000 homens, direto a Pyongyang. Uma frota Sui, comandada por Lai Hu'er, chegou antes à baía do rio Daedong. Goguryeo mandou poucas tropas, que fingiram derrota e se retiraram para a cidade. Lai entrou com mais de 40.000 homens num castelo externo aparentemente vazio. Enquanto saqueavam, 500 soldados de Goguryeo os atacaram de surpresa, e Lai fugiu de volta para os navios, com o exército reduzido a poucos milhares.",
        "Enquanto isso, o exército de terra tinha seu próprio problema. Os soldados carregavam a própria comida, o que os atrasava, e muitos a jogaram fora no caminho. Perto do Yalu, os mantimentos já eram curtos. Eulji, depois do seu 'teatro' de rendição, passou a atacar e recuar, sete vezes num único dia, segundo a tradição, atraindo os Sui para o sul. É a [[retirada fingida]] repetida até o limite.",
        "Os Sui chegaram a cerca de 20 km de Pyongyang. Ali Yu Zhongwen concluiu que a cidade não podia ser tomada e que seus homens estavam exaustos. Foi então que Eulji lhe mandou um poema, que o Samguk Sagi data de junho de 612.",
        "O poema tem quatro versos. Em resumo: seus planos alcançam o céu, seus cálculos abarcam a terra, você já venceu todas as batalhas e já tem grande mérito, então por que não se dar por satisfeito e encerrar a guerra? Era um elogio que fazia o papel de insulto: dizia que a glória já estava ganha e sugeria a retirada. Eulji ofereceu ainda a submissão do rei Yeongyang se os Sui se retirassem. Yu aceitou e voltou.",
        { h: "O rio Salsu" },
        "Com o inimigo em marcha para trás, Goguryeo o seguiu e atacou. No rio Salsu, os soldados Sui, que atravessavam a água, foram cortados quando estavam mais vulneráveis. Uma tradição diz que fugiram quase 200 km num só dia. Dos cerca de 305.000 que tinham atravessado o Liao, voltaram só cerca de 2.700, segundo o Zizhi Tongjian e o Samguk Sagi.",
        { note: "A represa: a imagem mais famosa, de Eulji soltando água de uma represa sobre os Sui no rio, é popular na Coreia, e aparece num texto de Sin Chaeho, de 1931, e numa novela de TV de 2007. Mas nenhuma fonte da época fala de represa ou de inundação. É uma lenda moderna." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O Livro de Sui lista 302.300 baixas, o que, somado aos 2.700 sobreviventes, bate com a conta de 305.000. É um número redondo demais para ser exato, e muitos desses homens morreram de doença e fome. Yu Zhongwen e Yuwen Shu perderam seus cargos; Yu morreu pouco depois de voltar à China.",
        "Yang tentou de novo em 613 e 614. Em 613, uma rebelião de Yang Xuangan o obrigou a voltar. Em 614, quebrou a primeira linha de defesa, mas não passou do Liao por causa dos ataques às suas linhas de suprimento. Yeongyang ofereceu a paz e devolveu um fugitivo, e Yang aceitou, embora Yeongyang nunca tenha ido jurar lealdade.",
        { h: "Por que importa" },
        "As perdas em vidas, em recursos e em confiança pública ajudaram a derrubar a dinastia Sui. Revoltas se espalharam, o filho de Yuwen Shu liderou um golpe que matou Yang, e o duque de Tang fundou a dinastia seguinte. Os Tang continuaram a guerra contra Goguryeo. Na Coreia, a história de Eulji e do Salsu continua sendo contada, inclusive numa novela de TV de 2007.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: tanto as crônicas chinesas quanto as coreanas dão números gigantescos. Os historiadores modernos os reduzem, mas não há acordo sobre o quanto." },
        { note: "Os nomes: o comandante da frota aparece como Lai Hu'er e como Lai Huni. A identificação do rio com o Chongchon também é só provável." }
      ]}
    ]
  },

  yarmuk: {
    war: "Conquista muçulmana da Síria (634–638)",
    hook: "Seis dias de batalha, uma cavalaria guardada para o dia certo, e o fim do domínio romano na Síria.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 610, Heráclio se tornou imperador do Império [[Bizantino|bizantinos]] depois de derrubar o tirano Focas. A Pérsia, rival de séculos, aproveitou a desordem e invadiu a Síria em 611, depois a Palestina e o Egito. Heráclio contra-atacou a partir de 622 e venceu em Nínive, em 627. O rei persa Cosroes II foi deposto, e Heráclio devolveu a Verdadeira Cruz a Jerusalém em 629. As duas potências saíram exaustas.",
        "Enquanto isso, na Arábia, Maomé tinha unido as tribos. Quando morreu, em junho de 632, o primeiro [[califa]], Abu Bakr, esmagou as revoltas em poucos meses e mandou exércitos para o norte, contra a Síria bizantina e o Iraque persa. Começava o [[califado rashidun]].",
        { h: "O caminho até o Yarmuk" },
        { timeline: [
          ["632", "Morre Maomé. Abu Bakr vira califa e domina as revoltas das tribos."],
          ["634", "Os árabes vencem em Ajnadayn (julho) e tomam Damasco (setembro). Abu Bakr morre; Umar assume e substitui Khalid por Abu Ubayda."],
          ["635", "Yazdegerd III, da Pérsia, propõe a Heráclio um ataque coordenado. A aliança não se realiza."],
          ["Início de 636", "Os árabes tomam Emesa (outra fonte diz que a abandonam na primavera). Heráclio junta um grande exército em Antioquia."],
          ["15 a 20 de agosto de 636", "A batalha, ao longo de seis dias."]
        ]},
        "Heráclio planejou atacar os árabes divididos, um corpo de cada vez, com cinco exércitos coordenados. Mas os árabes, aconselhados por Khalid ibn al-Walid, concentraram suas forças, que estavam espalhadas pela Palestina, Jordânia e Síria. Recuaram até a planície do rio Yarmuk e montaram uma linha de acampamentos."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Khalid ibn al-Walid" },
        "O grande comandante árabe da época. Tinha conquistado parte do Iraque e vindo para a Síria. Umar o tinha tirado do comando-geral, mas ele continuava no exército. Em Yarmuk, Abu Ubayda, que era o comandante supremo, passou o comando a Khalid num conselho de guerra. Ele organizou 36 regimentos de infantaria e quatro de cavalaria, e guardou a cavalaria de elite como uma [[guarda móvel]], em reserva.",
        { h: "Vahan, Teodoro Trithyrius e os outros" },
        "O comandante bizantino em campo era Vahan, armênio e antigo comandante da guarnição de Emesa. Teodoro Trithyrius dividia a chefia dos cinco exércitos. Qanatir, um príncipe eslavo, comandava os eslavos. Jabalah ibn al-Aiham, rei dos ghassânidas, comandava árabes cristãos. Gregório e Dairjan chefiavam os contingentes europeus. Os comandantes brigavam entre si pelo poder, e havia também querelas religiosas entre monofisitas e calcedonianos, que atrapalhavam a coordenação. Heráclio supervisionava de Antioquia.",
        { h: "O lado árabe" },
        "Amr ibn al-As comandava a ala direita, Yazid ibn Abi Sufyan a esquerda, Shurahbil ibn Hasana o centro direito, Dirar ibn al-Azwar a cavalaria móvel, quando Khalid estava ocupado. Umar mandou ainda cerca de 6.000 homens de reforço, a maioria do Iêmen, incluindo 1.000 companheiros de Maomé."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Aqui os números mais brigam. As crônicas árabes dão aos bizantinos de 100.000 a 200.000 homens, e aos árabes de 24.000 a 40.000. Os historiadores modernos propõem entre 15.000 e 40.000 árabes (provavelmente por volta de 36.000) e de 20.000 a 40.000 bizantinos. Warren Treadgold defende 80.000 a 100.000 ou mais para os bizantinos, pela capacidade do Estado. Muitos autores evitam dar um número. A única fonte bizantina antiga é Teófanes, escrito cerca de um século depois.",
        { h: "O terreno" },
        "A planície do Hauran, a sudeste das colinas de Golã. A batalha foi travada a leste do uádi Ruqqad, que se junta ao rio Yarmuk ao sul. As margens do uádi chegam a ter de 30 a 200 metros de altura. A estrada de Jabiyah ficava ao norte. Havia uma ponte romana, perto de Ayn Dhakar, que era a principal passagem. A planície tinha água e pasto e era boa para cavalaria.",
        { h: "Os seis dias" },
        { formation: true },
        "Dia 1 (15 de agosto). Os exércitos se alinham a menos de 1,6 km um do outro. Começam os duelos de campeões. Ao meio-dia, Vahan ataca com um terço da infantaria, sem decisão, e ao pôr do sol os dois lados recuam.",
        "Dia 2 (16 de agosto). Vahan planeja um ataque antes do amanhecer, na hora da oração, para fixar o centro e enrolar as alas. Mas Khalid tinha posto postos avançados à noite. Os eslavos de Qanatir empurram a direita árabe, até a cavalaria de Amr contra-atacar. Khalid então bate o flanco esquerdo bizantino pelo norte e pelo sul. Já a ala esquerda de Yazid, sem apoio da guarda móvel, é derrotada e recua até o acampamento. As mulheres, segundo a tradição, lideradas por Hind, receberam os fugitivos com estacas de tenda. A infantaria de Gregório fechou-se numa formação que a tradição muçulmana descreve como homens acorrentados, e os historiadores modernos sugerem ter sido um [[testudo]]. Dirar ataca Dairjan, e a guarda móvel bate no flanco de Gregório. Dairjan morre.",
        "Dias 3 e 4 (17 e 18 de agosto). Vahan muda de plano e passa a atacar a direita e o centro direito árabes, onde sua cavalaria rende mais que no terreno acidentado da esquerda. A direita árabe cede, as mulheres a fazem parar, e Khalid, com a guarda móvel, ataca o flanco e a retaguarda do centro esquerdo bizantino. No dia seguinte, Khalid divide a guarda em duas e fere os flancos do inimigo, enquanto Abu Ubayda e Yazid atacam pela esquerda. À tarde, arqueiros a cavalo bizantinos cegam muitos árabes, e o dia ficou conhecido como o 'Dia dos Olhos Perdidos'. Ikrimah, com cerca de 400 cavaleiros, cobriu a retirada e foi ferido de morte.",
        "Dia 5 (19 de agosto). Vahan manda um enviado pedir trégua, provavelmente para reagrupar um exército desmoralizado. Khalid, sentindo a vitória, recusa. Reúne toda a cavalaria numa só força de cerca de 8.000 cavaleiros. Durante a noite, Dirar leva 500 cavaleiros em volta do flanco norte bizantino e toma a ponte de Ayn Dhakar sobre o uádi Ruqqad.",
        "Dia 6 (20 de agosto). Khalid carrega em volta da ala esquerda bizantina: parte da cavalaria enfrenta a cavalaria dessa ala, o resto bate na infantaria por trás, e a ala esquerda desmorona. Vahan tenta reagrupar a cavalaria pesada, mas Khalid volta e a atinge de frente e de lado, antes que se forme. A cavalaria foge para o norte e deixa a infantaria exposta. Khalid bate o centro bizantino pela retaguarda. A retirada geral para o oeste, rumo à ponte, está bloqueada, porque Dirar já a tinha. Muitos caem nos desfiladeiros ou morrem na fuga, embora muitos escapem. As fontes citam também um vento de poeira do deserto e o sol batendo nos olhos dos bizantinos.",
        { note: "O Dia dos Olhos Perdidos, as mulheres com estacas de tenda e os soldados acorrentados vêm de crônicas muçulmanas escritas bem depois. A Wikipedia as trata com cautela, e esta página também. Algumas fontes dizem inclusive que a batalha durou um só dia." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Teodoro Trithyrius morreu no campo. Niketas chegou a Emesa. Jabalah escapou, fez uma paz breve com os muçulmanos e voltou ao lado bizantino. Vahan escapou da batalha, mas provavelmente morreu depois, nos combates perto de Damasco.",
        "As baixas dependem da fonte. Al-Tabari dá 120.000 romanos mortos; Ibn Ishaq e al-Baladhuri, 70.000. A Britannica lista 40.000 bizantinos e aliados e 5.000 árabes. Estimativas modernas falam em mais de 30.000 mortos bizantinos. Do lado árabe, uma fonte cita 9.000 mortos, outra de 2.500 a 17.000 baixas no total. A diferença mostra quanto não sabemos.",
        { h: "Por que importa" },
        "Khalid perseguiu os sobreviventes e entrou em Damasco, onde foi bem recebido. Em Antioquia, Heráclio, abatido, atribuiu a derrota ao castigo de Deus, e, segundo a tradição, se despediu da Síria com palavras de adeus à sua bela província. A Armênia bizantina caiu em 638 e 639. Amr, que comandara a direita árabe em Yarmuk, invadiu o Egito entre 639 e 642.",
        "A Britannica e a Wikipedia a chamam de maior vitória de Khalid, o fim do domínio bizantino na Síria e o ponto alto da primeira onda de conquistas muçulmanas. Nafziger a chama de uma das batalhas mais decisivas da história humana, afirmação que alguns acham forte demais.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data de início: a Wikipedia e a EBSCO dão 15 a 20 de agosto. A Britannica diz que a batalha começou em 20 de agosto e durou seis dias, o que não bate com as outras." },
        { note: "As fontes: quase tudo o que sabemos vem de relatos árabes, escritos muito depois. Teófanes é a única fonte bizantina da época, e escreveu cem anos depois. Uma nota da Wikipedia diz que Akram confundiu uma ponte com um vau, o que mostra que até a geografia da batalha é discutida." }
      ]}
    ]
  },

  heliopolis: {
    war: "Conquista muçulmana do Egito (639–642)",
    hook: "Dois destacamentos escondidos, uma emboscada pelas costas e o Egito perdido.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O Egito era a província mais rica do Império [[Bizantino|bizantinos]] e o celeiro de Constantinopla. Em 640, Maomé estava morto havia oito anos, e o califa Umar, desde 634, tinha transformado os ataques árabes em invasões completas. A Síria tinha caído entre 634 e 638. Heráclio, já velho, lutava para reorganizar as províncias do leste que havia recuperado dos persas.",
        { timeline: [
          ["639", "Amr ibn al-As entra no Egito com cerca de 4.000 homens, vindos da Síria. Toma Farama (Pelúsio) e fica quase um mês parado em Bilbeis."],
          ["639 a 640", "Amr manda um pequeno destacamento cercar a fortaleza de Babilônia, perto do atual Cairo. Cerca Umm Dunein e depois segue para o Faium."],
          ["6 de junho de 640", "Um segundo exército, por ordem de Umar, chega a Heliópolis (Ain Shams). Amr atravessa o Nilo de volta para se juntar a ele."],
          ["Julho de 640", "Batalha de Heliópolis. A Wikipedia dá 6 de julho na caixa de informações e 'início a meados de julho' no texto."],
          ["4 de novembro de 641", "Alexandria se rende, depois de cerca de um ano e meio de manobras e cercos."]
        ]},
        "Amr tinha poucos homens para uma província tão grande. Sua aposta foi a velocidade e a ajuda de reforços que Umar mandaria do Iraque e da Síria."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Amr ibn al-As" },
        "Comandante árabe, que em Yarmuk tinha liderado a ala direita. Em Heliópolis, era o general que assumiu o comando geral. Em Heliópolis, venceu com surpresa e com o uso do terreno, e não com um choque frontal contra um inimigo maior.",
        { h: "Teodoro e os bizantinos" },
        "Teodoro era o comandante-chefe bizantino no Egito. Anastásio, prefeito de Alexandria, e Teodósio, prefeito de Arcádia Egíptica, comandavam a cavalaria. A Wikipedia observa que os bizantinos não mantiveram batedores eficazes, o que teve consequências diretas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números dependem do relato. Segundo as fontes muçulmanas, Amr entrou com cerca de 4.000 homens e chegou a cerca de 8.000 com reforços. A tradição de al-Kindi fala em 15.500 (3.500 mais 12.000 de reforço), e o texto da Wikipedia fala em 'aproximadamente 15.000'. Os bizantinos têm 'bem mais de 20.000' no mesmo texto, uma estimativa moderna de cerca de 20.000, e não há número bizantino confiável. A faixa de 4.000 a 15.500 para os árabes mostra o tamanho da dúvida.",
        { h: "O terreno" },
        "Uma planície junto ao Nilo, perto do atual Cairo, com colinas ao leste e a fortaleza de Babilônia ao sul. Heliópolis ficava onde hoje é Ain Shams. O local exato da luta é discutido, e as fontes não descrevem com detalhe o campo de batalha.",
        { h: "A emboscada" },
        "Primeiro, com os exércitos árabes juntos, os batedores avisaram que uma força bizantina se aproximava, e os árabes saíram para encontrá-la. Segundo, Amr dividiu seu exército em três. Um destacamento, comandado por Kharija, marchou para leste e se escondeu em colinas próximas. Outro foi posto ao sul, na provável rota de fuga dos bizantinos se a batalha desse errado.",
        "Terceiro, quando os bizantinos atacaram, o destacamento escondido caiu em cima da retaguarda deles. O resultado foi o caos. Quarto, na fuga para o sul, os bizantinos deram com o terceiro destacamento, que completou a derrota.",
        "Ao mesmo tempo, segundo a Wikipedia, Zubayr e alguns homens escolhidos escalaram um ponto sem guarda na muralha de Heliópolis, dominaram os guardas e abriram os portões. A guarnição de Tendunias foi tomada. Dos soldados bizantinos que estavam lá, 300 sobreviveram e se retiraram para Babilônia. Alguns fugiram até Nikiû de barco. Teodoro, Teodósio e Anastásio sobreviveram.",
        { note: "Esta é uma batalha em que a Wikipedia, as fontes e os historiadores dão relatos curtos e pouco detalhados. Por isso esta página não tem diagrama: sabemos que houve emboscada em três partes, mas não onde cada uma estava." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas muçulmanas foram 'poucas', e as bizantinas 'pesadas', segundo a Wikipedia, sem números. Nas semanas seguintes, o governador do Faium, Domentianus, abandonou seu acampamento em Abûît e fugiu para Nikiû sem avisar a população. Amr tomou o Faium com pouca resistência, e a cidade foi saqueada e sua população escravizada. Depois seguiu para Delas, onde o pagarca Apa Ciro foi obrigado a fornecer barcos. George, prefeito de Babilônia, construiu pontes em Qalyub, Athribis, Menouf e Babilônia.",
        "Muitos comandantes bizantinos fugiram para Alexandria. A cidade se rendeu em 4 de novembro de 641. O cerco de Babilônia durou meses, e as fontes divergem sobre quando terminou: dependendo da fonte, entre dezembro de 640 e abril de 641.",
        { h: "Por que importa" },
        "O Egito dava ao império grãos e receita. Sem ele, o Mediterrâneo, que fora um lago romano, passou a ser disputado entre o Califado e Bizâncio. Walter Scott escreveu que o destino da África bizantina se decidiu em Heliópolis. O império se salvou nas muralhas de Constantinopla e nas montanhas da Anatólia, mas nunca mais recuperou a província.",
        { h: "Curiosidades e controvérsias" },
        { note: "A tradição de culpar a traição dos coptas, defendida por Butler em 1902, e a de culpar a incompetência dos generais bizantinos disputam com a de Gibbon, que dá mais crédito à habilidade de Amr. João de Nikiû, que escreveu um relato hostil, conta violências de Amr contra a população." },
        { note: "As fontes árabes que contam a conquista (como Ibn Abd al-Hakam e al-Kindi) são posteriores. A cronologia é discutida: a Wikipedia dá 6 de junho de 640 para a chegada do segundo exército a Heliópolis e 6 de julho para a batalha, sem explicar a diferença." }
      ]}
    ]
  },

  dafei: {
    war: "Guerra Tang–Tibete pelo Tarim e Qinghai (670)",
    hook: "Um general chinês lendário, um subordinado que não obedeceu e uma bagagem que ficou para trás.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século VII, a China dos Tang era a maior potência da Ásia. Mas, no planalto a oeste, surgiu um rival: o Império [[Tibetano|tibetanos]], que já disputava a Ásia Central com a China. O que estava em jogo era o controle de duas regiões: Tuyuhun, na atual Qinghai, e a bacia do Tarim, no oeste. Os Tang a administravam por meio do [[protetorado]] de Anxi.",
        { timeline: [
          ["663", "Segundo uma fonte, Tuyuhun já está sob controle tibetano. Outras fontes datam a conquista em 669."],
          ["668", "Os tibetanos erguem defesas ao longo do rio Dafei (Jima Gol)."],
          ["670, primavera", "O Tibete ataca o oeste do Tarim, com ajuda de Khotan, e toma Aksu. Só Kucha e Agni continuam Tang."],
          ["3 de maio de 670", "O imperador Gaozong nomeia Xue Rengui para comandar o exército Tang."],
          ["Meados de 670", "Batalha do rio Dafei."],
          ["692", "Os chineses retomam a região."]
        ]},
        "As fontes não estão de acordo sobre muitos detalhes. A conquista de Tuyuhun pelo Tibete é datada de 663 numa fonte e de 669 em outra. Esta é uma das batalhas menos bem documentadas deste mapa."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Xue Rengui" },
        "Um dos generais mais famosos da China Tang, quase uma lenda. Em 645, no cerco de Ansi, ainda oficial de baixa patente, liderou uma carga que quebrou a formação de Goguryeo, e foi promovido pelo imperador Taizong. Em 661, matou três dos dez campeões da coalizão Tiele com flechas, e os Tiele se renderam. Depois mandou executar os rendidos, foi preso e libertado porque seus feitos pesavam mais que o crime.",
        { h: "Guo Daifeng" },
        "Filho do veterano Guo Xiaoke. Tinha a mesma patente de Xue e, segundo a tradição, considerava uma desonra servir sob ele. Desobedecia com frequência.",
        { h: "Gar Trinring Tsendro" },
        "Em chinês, Lun Qinling. Segundo filho do ministro Gar Tongtsen Yülsung e uma das figuras mais poderosas do Tibete. Foi enviado a Azha (Tuyuhun), recém-conquistada. Mais tarde se tornou primeiro-ministro. Em 699, o rei Tridu Songtsen, vendo no clã Gar uma ameaça à sua autoridade, armou uma caçada e se voltou contra a família. Os exércitos de Trinring o traíram, e ele se matou."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são uma bagunça. A Wikipedia cita 400.000 tibetanos contra os 50.000 de Xue (no artigo sobre Gar Trinring) e fala em 400.000 tibetanos atacando Anxi (no artigo sobre Xue). Beckwith cita 200.000 e Kuzmin 100.000, sem que a página diga a qual lado cada um se refere. Para os Tang, a caixa de informações dá de 50.000 a 100.000 homens. Números tão redondos e altos são suspeitos.",
        { h: "O que aconteceu" },
        "Aqui as versões divergem, e é honesto mostrar isso. Na versão do artigo sobre a batalha, Xue avançou com a coluna principal em direção ao lago Qinghai, deixando para trás a bagagem lenta e 20.000 soldados sob Guo Daifeng. Os tibetanos atacaram e tomaram a bagagem e depois derrotaram a coluna de Xue.",
        "Na versão do artigo sobre Xue Rengui, o plano era Xue avançar e abrir a passagem, depois dar o sinal para Guo vir do lago Qinghai, onde estavam os suprimentos. Guo avançou sem esperar o sinal, foi interceptado por um exército tibetano de cerca de 200.000 e seu exército se desfez. Só depois Gar Trinring atacou Xue no rio Dafei. Xue 'infligiu pesadas perdas aos tibetanos', mas recuou.",
        "Na versão do artigo sobre a conquista do Tarim, Xue começou bem, derrotando uma unidade tibetana perto do Dafei e tomando gado. Mas Guo não fortificou as linhas de suprimento. Os tibetanos emboscaram o exército Tang, quase o aniquilaram e o obrigaram a recuar.",
        { note: "As três versões concordam no essencial: a bagagem e o apoio foram perdidos, Guo é culpado, e os Tang recuaram. Discordam sobre o que Xue fez e sobre as perdas tibetanas. Por isso esta página não tem diagrama: não há descrição segura das posições nem dos movimentos. O artigo da Wikipedia sobre a batalha também tem uma marca de disputa de neutralidade." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A batalha foi uma vitória tibetana. O imperador Gaozong mandou prender Xue, Guo e Ashina Daozhen. Foram soltos ao chegar a Chang'an, mas perderam os cargos. Por volta de 675, Xue foi afastado por motivos que os registros não explicam bem e exilado. Voltou em 681 e, em 682, venceu Ashide Yuanzhen.",
        "As baixas Tang são descritas só como 'pesadas'. As tibetanas, desconhecidas, ou, segundo o artigo sobre Gar Trinring, 'enormes'.",
        { h: "Por que importa" },
        "Segundo Beckwith, a derrota marcou o fim de vinte anos de controle chinês sobre a bacia do Tarim. A capital do protetorado de Anxi foi mudada de Kucha para Turfan, vista como mais segura. O Tibete dominou a área de fato por cerca de 20 anos, até os chineses a retomarem, em 692. Depois da batalha, as negociações falharam: a China queria que o Tibete saísse de Azha, e o Tibete queria que a China saísse do Tarim.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os nomes mudam de fonte para fonte: Gar Trinring Tsendro, Mgar Khri-brin, Lun Qinling. Guo Daifeng aparece como Kuo Tai-feng na transcrição de Beckwith. É o mesmo homem, numa grafia diferente." },
        { note: "As fontes principais são o Velho Livro de Tang, o Novo Livro de Tang e o Zizhi Tongjian, todos chineses. O artigo sobre Gar Trinring cita também os Anais Tibetanos Antigos, mas sobre esta batalha em si as fontes são escassas." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  yarmuk: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 8, h: 70, l: "Uádi Ruqqad" },
      { t: "sea", x: 8, y: 63, w: 92, h: 7, l: "Rio Yarmuk" },
      { t: "note", x: 9, y: 10, l: "Ponte de Ayn Dhakar" }
    ],
    units: [
      { id: "aR", s: "a", k: "inf", w: 7, h: 15, l: "Direita (Amr)" },
      { id: "aC", s: "a", k: "inf", w: 7, h: 15, l: "Centro (Abu Ubayda)" },
      { id: "aL", s: "a", k: "inf", w: 7, h: 15, l: "Esquerda (Yazid)" },
      { id: "aG", s: "a", k: "cav", w: 7, h: 12, l: "Guarda móvel (Khalid)" },
      { id: "aD", s: "a", k: "cav", w: 5, h: 5, l: "Dirar" },
      { id: "bL", s: "b", k: "inf", w: 7, h: 15, l: "Esquerda (Qanatir)" },
      { id: "bC", s: "b", k: "inf", w: 7, h: 15, l: "Centro (Gregório, Dairjan)" },
      { id: "bR", s: "b", k: "inf", w: 7, h: 15, l: "Direita" },
      { id: "bV", s: "b", k: "cav", w: 7, h: 10, l: "Cavalaria pesada (Vahan)" }
    ],
    steps: [
      { t: "Dia 1. Os exércitos se alinham a menos de 1,6 km um do outro, os árabes a leste, virados para oeste. Há duelos e um ataque tímido de Vahan, sem decisão.",
        p: { aR: [72, 14], aC: [72, 31], aL: [72, 48], aG: [86, 30], aD: [88, 12], bL: [44, 14], bC: [44, 31], bR: [44, 48], bV: [32, 26] } },
      { t: "Dia 2. Vahan ataca antes do amanhecer. Os eslavos de Qanatir empurram a direita árabe. Khalid, que tinha posto postos avançados, bate o flanco esquerdo bizantino.",
        p: { bL: [54, 14], aR: [78, 14], aG: [64, 8] } },
      { t: "A esquerda de Yazid, sem apoio da guarda móvel, é derrotada e recua. Depois a guarda bate no flanco de Gregório, e Dairjan morre. Ao pôr do sol os dois lados voltam às suas linhas.",
        p: { aL: [82, 50], bR: [58, 48], aG: [58, 40] } },
      { t: "Dias 3 e 4. Vahan concentra o ataque na direita árabe, onde a cavalaria rende mais. A direita cede, mas Khalid, com a guarda dividida em duas, bate nos flancos e na retaguarda do centro esquerdo bizantino.",
        p: { aR: [80, 18], bL: [56, 18], aG: [56, 28], aL: [72, 48], bR: [44, 48], aC: [72, 31], bC: [46, 31] } },
      { t: "Dia 5. Vahan pede uma trégua, e Khalid recusa. Reúne toda a cavalaria numa só força de cerca de 8.000. À noite, Dirar leva 500 cavaleiros pelo norte até a ponte de Ayn Dhakar e a toma.",
        p: { aG: [84, 14], aD: [14, 12], bL: [44, 14], bC: [44, 31] } },
      { t: "Dia 6. Khalid carrega em volta da ala esquerda bizantina. Parte da cavalaria enfrenta a cavalaria dela, o resto bate na infantaria por trás. A ala esquerda desmorona.",
        p: { aG: [40, 8], bL: [38, 14], aR: [58, 16] }, x: ["bL"] },
      { t: "Vahan tenta reagrupar a cavalaria pesada, mas Khalid volta e a atinge de frente e de lado antes que se forme. Ela foge para o norte e deixa a infantaria exposta.",
        p: { bV: [30, 5], aG: [36, 14] }, x: ["bL", "bV"] },
      { t: "A cavalaria árabe bate o centro bizantino pela retaguarda, enquanto a direita e o centro árabes avançam de frente.",
        p: { aG: [34, 31], aC: [58, 31], aR: [52, 18], aL: [58, 48], bC: [36, 31] }, x: ["bL", "bV", "bC"] },
      { t: "A retirada geral para a ponte está fechada por Dirar. Muitos caem nos desfiladeiros do uádi ou morrem na fuga, embora muitos escapem. A Síria está perdida para Bizâncio.",
        p: { bC: [14, 34], bR: [18, 52], aG: [24, 36], aL: [40, 50], aC: [44, 32], aR: [40, 18], aD: [12, 12] }, x: ["bL", "bV", "bC", "bR"] }
    ]
  },

  catalaunicos: {
    terrain: [
      { t: "hill", x: 50, y: 35, rx: 16, ry: 9, l: "Crista" }
    ],
    units: [
      { id: "rA", s: "a", k: "inf", w: 22, h: 5, l: "Romanos (Aécio)" },
      { id: "rAl", s: "a", k: "cav", w: 14, h: 5, l: "Alanos (Sangiban)" },
      { id: "rV", s: "a", k: "inf", w: 22, h: 5, l: "Visigodos (Teodorico, Torismundo)" },
      { id: "hG", s: "b", k: "inf", w: 22, h: 5, l: "Gépidas (Ardarico)" },
      { id: "hH", s: "b", k: "cav", w: 18, h: 5, l: "Hunos de Átila" },
      { id: "hO", s: "b", k: "inf", w: 22, h: 5, l: "Godos amali (Valamir)" },
      { id: "camp", s: "b", k: "camp", w: 14, h: 5, l: "Acampamento de carroças" }
    ],
    steps: [
      { t: "Os dois lados se armam em volta de uma crista no meio da planície. Os alanos ficam no centro aliado e os visigodos na direita. Átila só ataca por volta das 14h30.",
        p: { rA: [22, 56], rAl: [50, 56], rV: [78, 56], hG: [22, 14], hH: [50, 14], hO: [78, 14], camp: [50, 5] } },
      { t: "Corrida pela crista. Os hunos tentam tomá-la e são batidos pelos romanos de Aécio e pelos godos de Torismundo.",
        p: { rA: [30, 42], rV: [68, 42], hG: [28, 26], hO: [72, 26] } },
      { t: "Os visigodos atacam os godos amali de Valamir. Teodorico morre no combate, sem que seus homens vejam. Há duas versões: caiu do cavalo e foi pisoteado, ou foi morto pela lança do amali Andag.",
        p: { rV: [76, 34], hO: [76, 28] } },
      { t: "Os visigodos, mais rápidos que os alanos, investem contra a guarda de Átila.",
        p: { rV: [60, 28], rAl: [50, 46], hH: [50, 18] } },
      { t: "Átila recua para o acampamento fortificado com carroças.",
        p: { hH: [50, 10], hG: [24, 18], hO: [76, 18], rV: [60, 22] } },
      { t: "Noite. Torismundo, voltando às suas linhas, entra por engano no acampamento huno e é ferido antes de ser resgatado. Aécio, separado dos seus, passa a noite entre os godos.",
        p: { rV: [56, 14], rA: [30, 40] } },
      { t: "Segundo dia. O campo está cheio de corpos, e os hunos não saem. Romanos e godos cercam o acampamento. Átila, segundo a tradição, manda fazer uma pira de selas.",
        p: { rA: [28, 14], rV: [72, 14], rAl: [50, 24] } },
      { t: "Aécio convence Torismundo a voltar a Toulouse para assumir o trono antes dos irmãos. Os aliados se retiram, os hunos também. Quem venceu é discutido até hoje.",
        p: { rA: [22, 58], rV: [78, 60], rAl: [50, 58], hH: [50, 6], hG: [22, 6], hO: [78, 6] } }
    ]
  },

  feishui: {
    terrain: [
      { t: "sea", x: 46, y: 0, w: 8, h: 70, l: "Rio Fei" }
    ],
    units: [
      { id: "jM", s: "a", k: "inf", w: 12, h: 40, l: "Exército Beifu (Xie Shi, Xie Xuan)" },
      { id: "qF", s: "b", k: "inf", w: 12, h: 40, l: "Tropas de Fu Rong" },
      { id: "qJ", s: "b", k: "cav", w: 10, h: 14, l: "Fu Jian e a retaguarda" },
      { id: "qM", s: "b", k: "inf", w: 8, h: 14, l: "Murong Chui" }
    ],
    steps: [
      { t: "Os Qin acampam na margem oeste do rio Fei. Os Jin ficam na margem leste e não conseguem avançar. Antes, uma vanguarda Jin de 5.000 homens tinha matado 15.000 Qin.",
        p: { jM: [76, 35], qF: [26, 35], qJ: [8, 24], qM: [10, 58] } },
      { t: "Xie Xuan manda dizer a Fu Rong que recue um pouco, para os Jin atravessarem e lutarem. Os generais Qin são contra, mas Fu Jian aceita, pensando em atacar no meio da travessia.",
        p: {} },
      { t: "Fu Rong manda recuar. O exército Qin, enorme e sem laços, começa a andar para trás.",
        p: { qF: [18, 35] } },
      { t: "Zhu Xu, funcionário Jin que estava entre os Qin, grita que o exército foi derrotado. A retirada vira pânico.",
        p: { qF: [12, 35], qJ: [6, 20] }, x: ["qF"] },
      { t: "Xie Xuan, Xie Yan e Huan Yi atravessam o rio e atacam.",
        p: { jM: [52, 35] } },
      { t: "Fu Rong tenta conter a fuga, cai do cavalo e é morto. Os Jin leem os rastros confusos como sinal de desordem total e perseguem. O exército se desfaz e abandona seus suprimentos.",
        p: { jM: [34, 35], qF: [6, 30], qJ: [4, 18] }, x: ["qF", "qJ"] },
      { t: "Fu Jian, ferido por uma flecha perdida, escapa até Murong Chui, cujos 30.000 homens foram dos poucos que não se desfizeram. Os fugitivos ouvem o vento e os grous e pensam que são os Jin.",
        p: { jM: [26, 35], qJ: [10, 52] }, x: ["qF"] },
      { t: "Murong Chui o escolta até Luoyang. Em 384 se revolta, e o Qin Anterior se desfaz.",
        p: { jM: [20, 35], qM: [8, 60] }, x: ["qF"] }
    ]
  }
});
