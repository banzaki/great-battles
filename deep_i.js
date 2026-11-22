// In-depth battles, batch i: qatwan, dannoura, hattin, tarain, yehuling, navas.
// Checked against the English, Portuguese and Spanish Wikipedia articles and the works they cite (Biran, Nowell,
// Turnbull, Sansom, Minhaj-i-Siraj and Firishta via translations, Alvira Cabrer, García Fitz), plus Nippon.com,
// EBSCO and Artelino. Where the sources disagree, the text gives the range and says who says what.

Object.assign(GLOSSARY, {
  "qara khitai": "Império fundado na Ásia Central pelos khitans que fugiram da China depois de 1125. Os chineses o chamam de Liao Ocidental. Durou quase um século, até a chegada dos mongóis.",
  "khitans": "Povo que governou o norte da China como dinastia Liao, até ser derrubado pelos Jin em 1125.",
  "gürkhan": "Título que Yelü Dashi adotou em 1132 e que seus sucessores mantiveram. Quer dizer mais ou menos 'khan universal'.",
  "transoxiana": "A região da Ásia Central em volta de Samarcanda e Bucara, no atual Uzbequistão, entre os rios Amu Daria e Sir Daria.",
  "karakhânidas": "Dinastia turca muçulmana que governava a Ásia Central. Na época de Qatwan estava dividida em um ramo do leste e um do oeste, e o do oeste obedecia aos seljúcidas.",
  "preste joão": "Rei cristão lendário do Oriente, que na Idade Média os europeus esperavam que viesse ajudar contra os muçulmanos.",
  "dinar": "Moeda de ouro do mundo islâmico medieval.",
  "samurai": "Guerreiro profissional japonês, a serviço de um senhor e de um clã. ",
  "clã": "Família grande, com parentes, aliados e seguidores, que age como um grupo só. No Japão da época, os principais eram os Taira e os Minamoto.",
  "xogum": "Chefe militar do Japão, nomeado pelo imperador. Na prática, quem mandava era ele, e o imperador ficava como figura sagrada. O governo do xogum chama-se xogunato.",
  "três tesouros": "As insígnias do imperador japonês: um espelho, uma joia e a espada Kusanagi. Quem as tinha era visto como imperador legítimo.",
  "templários": "Ordem militar cristã, de monges guerreiros, criada para proteger os peregrinos da Terra Santa. Seus cavaleiros eram dos melhores do exército cruzado.",
  "hospitalários": "Ordem militar cristã que nasceu cuidando de doentes em Jerusalém e passou a combater. Foi, com os templários, a tropa de elite dos reinos cruzados.",
  "turcopolos": "Cavaleiros leves, muitas vezes de origem turca ou árabe, que lutavam a serviço dos cruzados e atiravam com arco.",
  "vera cruz": "A relíquia que se acreditava ser um pedaço da cruz de Jesus. Os cruzados a levavam à frente do exército, como um estandarte sagrado.",
  "aiúbidas": "A dinastia curda fundada por Saladino, que governou o Egito e a Síria no século 12 e no 13.",
  "reino de jerusalém": "O principal Estado cruzado, criado pela Primeira Cruzada na Palestina. Governava Jerusalém e parte da costa.",
  "rajputs": "Clãs guerreiros do norte e do oeste da Índia, que governavam vários reinos.",
  "guridas": "A dinastia turco-afegã das montanhas de Ghor, no atual Afeganistão, que no fim do século 12 conquistou o norte da Índia.",
  "sultanato de déli": "Estado muçulmano do norte da Índia, fundado em 1206 por Qutb al-Din Aibak, um ex-escravo militar dos guridas.",
  "jin": "A dinastia dos jürchens, povo da Manchúria, que dominou o norte da China até ser destruída em 1234. A capital, Zhongdu, ficava onde hoje é Pequim.",
  "estepe": "Grande planície seca e sem árvores, com capim, onde viviam os povos nômades criadores de cavalos.",
  "almóadas": "Dinastia berbere do Marrocos que dominava o norte da África e o sul da Península Ibérica no tempo de Las Navas.",
  "reconquista": "O longo processo, de séculos, em que os reinos cristãos do norte da Península Ibérica tomaram as terras governadas por muçulmanos.",
  "ordens militares": "Irmandades de monges guerreiros, como Santiago, Calatrava e os templários. Tinham castelos, terras e cavaleiros próprios, e lutavam na linha de frente da Reconquista.",
  "mesnada": "Tropa pessoal de um rei ou nobre na Idade Média ibérica, formada por seus cavaleiros e vassalos.",
  "concelhos": "Cidades e vilas medievais da Península Ibérica, que tinham autonomia e mandavam suas milícias de cidadãos para a guerra do rei.",
  "guarda negra": "A guarda pessoal do califa almóada, de soldados vindos da África ao sul do Saara, armados com grandes lanças."
});

Object.assign(DEEP, {
  qatwan: {
    war: "Expansão dos Qara Khitai na Ásia Central (1130–1143)",
    hook: "Um príncipe exilado da China derrotou o sultão mais poderoso do islã, e a notícia chegou à Europa transformada em lenda.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1125, a dinastia Jin, formada por jürchens da Manchúria, destruiu o império [[khitans]] da China do norte, a dinastia Liao. Alguns príncipes khitans fugiram. Um deles, Yelü Dashi, parente distante do fundador da dinastia, juntou seguidores e foi para o oeste. Era um homem culto, que tinha passado no maior exame imperial chinês em 1115, e também bom arqueiro e cavaleiro.",
        "No outro lado da Ásia, o mundo muçulmano era governado em boa parte pelos [[seljúcidas]]. O [[sultão]] Ahmad Sanjar era o soberano seljúcida e tinha como [[vassalos|vassalo]] os [[karakhânidas]] da Transoxiana, a região de Samarcanda. Entre Sanjar e Yelü Dashi havia estepes, desertos e pequenos reinos turcos, e um deles foi o estopim.",
        { h: "O caminho até Qatwan" },
        { timeline: [
          ["1124", "Yelü Dashi sai do território da China e vai para o noroeste. Em Kedun, no rio Orkhon, junta cerca de 20.000 cavaleiros de tribos locais."],
          ["1130", "Parte para o oeste com menos de 20.000 homens e se instala perto do rio Emil."],
          ["1132", "Os seguidores o proclamam [[Gürkhan|gürkhan]]."],
          ["1134", "Toma Balasagun, no atual Quirguistão, e faz dela a capital. Herda ali mais de 16.000 khitans que serviam ao antigo governante."],
          ["1137", "Derrota em Khujand o ramo ocidental dos karakhânidas, vassalo dos seljúcidas."],
          ["1141", "Sanjar chega a Samarcanda com seu exército. Em 9 de setembro, os dois lados se encontram."]
        ]},
        "O governante de Samarcanda, Mahmud II, pediu proteção a Sanjar depois de Khujand. Pelo que a Wikipédia resume de Michal Biran, os khitans também foram convidados por outros, os corásmios, que eram vassalos dos seljúcidas, e responderam ao pedido dos karluques, tribos turcas em conflito com os karakhânidas e os seljúcidas. Ou seja, a guerra nasceu de disputas entre os povos turcos da região, e os khitans entraram nela por convite."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Yelü Dashi, o Gürkhan" },
        "Nasceu em 1087 ou 1094, as fontes divergem. Escrevia o khitan e o chinês, foi governador de duas cidades e, antes da queda da Liao, escapou do cativeiro dos Jin depois de cinco meses. O que ele fez a seguir é mais incomum do que qualquer batalha: pegou um exército de refugiados e um punhado de tribos e criou, no outro lado do continente, um Estado que durou quase um século. Juvaini, historiador persa, escreveu sobre a tomada de Balasagun, em 1134, que ele subiu num trono que não lhe custou nada. Ele era budista.",
        { h: "Ahmad Sanjar, sultão seljúcida" },
        "Era o soberano dos seljúcidas e, pelo relato de al-Husayni, não tinha o apoio unido dos seus emires. Quando a luta apertou, as tropas começaram a recuar e o deixaram com poucos soldados.",
        { h: "Outros nomes" },
        "Do lado seljúcida, o emir Kumach e sua mulher, Turkan-Khatun, foram capturados. Abu'l Fadl, um conselheiro, aparece na história de como Sanjar escapou. Do lado khitan, os nomes dos comandantes não chegaram a nós de forma segura."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Ninguém sabe quantos eram. Ibn al-Athir, historiador muçulmano, dá 300.000 cavaleiros a Yelü Dashi e 100.000 a Sanjar. A historiadora Michal Biran lembra que esse tipo de número serve para explicar uma derrota ou valorizar uma vitória e não deve ser lido ao pé da letra. Os historiadores modernos citam desde 20.000 (M. S. Asimov) até 300.000 ou 700.000 (os números exagerados das fontes muçulmanas) para os khitans. Biran dá aos karluques, que reforçaram os khitans, de 30.000 a 50.000 cavaleiros.",
        { note: "As fontes que descrevem a batalha em detalhe são poucas e foram escritas por muçulmanos, do lado derrotado, em geral muitos anos depois. A disposição das tropas e o plano de Yelü Dashi não são conhecidos com segurança, por isso não há diagrama." },
        { h: "O terreno" },
        "A batalha foi na estepe de Qatwan, ao norte de Samarcanda, em 9 de setembro de 1141. O nome de um ponto se salvou: o uádi de Dargham, uma vala seca a uns 12 km da cidade.",
        { h: "O que se sabe da batalha" },
        "Segundo o resumo da Wikipédia, os khitans atacaram o exército seljúcida por vários lados ao mesmo tempo e o cercaram. O centro seljúcida foi empurrado para dentro do uádi de Dargham, e ali o exército foi destruído. Quantos morreram também é incerto: as fontes falam de 11.000 a 100.000 mortos.",
        "O resto vem de al-Husayni. Nele, os emires de Sanjar divergiam sobre o que fazer, e as tropas começaram a se retirar, deixando o sultão com poucos homens. Abu'l Fadl, o conselheiro, sugeriu que um soldado comum ficasse no lugar de Sanjar para que ele escapasse. Sanjar fez isso. Abu'l Fadl ficou com o substituto e foi capturado logo depois.",
        "Sanjar escapou por pouco, e Yelü Dashi não o perseguiu. Segundo a mesma fonte, quando o sultão tentava chegar a Balkh, o Gürkhan mandou seus homens não bloquearem o caminho, porque um inimigo sem saída luta com desespero.",
        { h: "Os prisioneiros" },
        "Turkan-Khatun, mulher de Sanjar, foi resgatada por 500.000 dinares. O emir Kumach e o filho, por 100.000. Abu'l Fadl foi solto sem resgate, depois que Yelü Dashi soube que os filhos do governante de Segestão tinham tomado os bens do pai. Pelo relato, o Gürkhan também comentou que um homem tão valente não devia ser executado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Yelü Dashi passou 90 dias em Samarcanda, aceitou a lealdade dos nobres muçulmanos e pôs no governo da cidade Ibrahim, irmão de Mahmud. A família Burhan continuou governando Bucara. Em 1142, mandou Erbuz atacar o Corásmia, e o governante Atsiz concordou em pagar 30.000 [[dinares|dinar]] por ano. Yelü Dashi morreu em 1143 (a data de 1144 também aparece), e a esposa, Xiao Tabuyan, assumiu como regente.",
        "Os seljúcidas perderam a [[transoxiana]]. Sanjar ainda viveu até 1157, mas o seu poder encolheu. Em 1153, os oguzes se revoltaram no Corasão, e ele foi capturado. Fugiu em 1156, sem conseguir restaurar a autoridade, e morreu no ano seguinte.",
        { h: "Por que importa" },
        "Com Qatwan, o Qara Khitai (ou Liao Ocidental) passou a mandar na Transoxiana, e o poder seljúcida entrou em declínio. Khwarazm e os karakhânidas viraram vassalos dos khitans.",
        { h: "Curiosidades e controvérsias" },
        { note: "O Preste João: em 1145, um bispo de Jabala, na Síria, chegou ao papa dizendo que um rei cristão chamado João, de além da Pérsia, tinha derrotado os muçulmanos. Otto de Freising registrou a história. Os historiadores modernos associam o boato a Qatwan (é a explicação do estudo de Charles Nowell, de 1953). Só que os vencedores de Qatwan eram os khitans, budistas, e não um rei cristão. A lenda do [[Preste João|preste joão]] nasceu dessa confusão." },
        { note: "Os números: uns 300.000 cavaleiros khitans contra 100.000 seljúcidas aparecem em Ibn al-Athir, mas Nowell chama o primeiro número de exagero óbvio." }
      ]}
    ]
  },

  dannoura: {
    war: "Guerra Genpei (1180–1185)",
    hook: "Num estreito de correntes traiçoeiras, a maré virou à tarde e levou consigo um clã inteiro e um imperador de seis anos.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século 12, o imperador do Japão reinava em Quioto, mas quem mandava de verdade eram os clãs de [[samurai]]. Dois [[clãs|clã]] se odiavam: os Taira, que tinham o poder na corte, e os Minamoto, que tinham sido quase destruídos por eles na rebelião de Heiji, em 1159–1160. Em 1180, o chefe dos Taira, Taira no Kiyomori, pôs no trono o neto, o imperador Antoku, que tinha então uns dois anos de idade. Era demais para os rivais.",
        "A guerra que começou ali chama-se Guerra Genpei, nome formado a partir dos dois clãs. Durou seis anos. Os Minamoto, liderados por Minamoto no Yoritomo, ganharam terreno, e em 1183 os Taira fugiram de Quioto levando o menino imperador e as insígnias imperiais, os [[três tesouros|três tesouros]]. Quem os tinha era visto como o governante legítimo, e por isso eles viraram refém e fardo ao mesmo tempo.",
        { h: "O caminho até Dan-no-ura" },
        { timeline: [
          ["1180", "Kiyomori coloca Antoku no trono. Começa a guerra, com a batalha de Uji."],
          ["1183", "Os Taira são derrotados em Kurikara e fogem de Quioto."],
          ["1184", "Em Ichi-no-Tani, Yoshitsune e Noriyori atacam por duas direções e empurram os Taira de volta para o mar."],
          ["Início de 1185", "Em Yashima, o ataque de Yoshitsune, aparentemente por terra, faz os Taira fugirem de navio, com Antoku e as insígnias."],
          ["25 de abril de 1185", "Os dois lados se enfrentam no estreito de Shimonoseki."]
        ]},
        "Sobre a data: a conta tradicional dá o 24º dia do terceiro mês do calendário lunar japonês, que corresponde a 25 de abril no nosso calendário. A página oficial de Shimonoseki usa 24 de março, provavelmente por não converter o mês."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Minamoto no Yoshitsune" },
        "Meio-irmão de Yoritomo e comandante das forças navais, é lembrado como o grande general da guerra. Foi ele quem venceu Yoshinaka em Awazu e os Taira em Ichi-no-Tani e Yashima. Em Dan-no-ura, ele mesmo lutou. O Heike Monogatari conta que Taira no Noritsune tentou arrastá-lo para o mar e que ele escapou pulando para outro barco. O pulo, na obra, é um só. Relatos posteriores o inflaram até virar o famoso salto por oito barcos.",
        { h: "Taira no Tomomori" },
        "Comandante dos Taira. Segundo a tradição, depois de ver a família e os seus homens se afogarem, tirou a própria vida. Nas versões posteriores, do teatro nô e do kabuki, ele aparece segurando uma âncora.",
        { h: "Os outros nomes" },
        "Do lado Minamoto: Noriyori comandava as forças em terra. Kajiwara Kagetoki cuidava da espionagem. Do lado Taira: Taira no Tokiko, viúva de Kiyomori, avó do imperador. E Taguchi Shigeyoshi, general Taira cujo filho estava preso pelos Minamoto. Mesmo com conselheiros mandando afastá-lo ou executá-lo, o comandante Taira confiou nele, e foi traído."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes não concordam. O Azuma Kagami, crônica do governo Minamoto, dá 800 navios aos Minamoto e 500 aos Taira. O Heike Monogatari dá 3.000 e 1.000. Nas duas versões, os Minamoto tinham mais barcos. Baixas: as fontes só dizem que os Taira foram aniquilados.",
        { h: "O terreno e a maré" },
        "O estreito de Kanmon, em Shimonoseki, é a passagem estreita entre as ilhas de Honshu e Kyushu. A corrente muda de sentido quatro vezes por dia e chega a uns 18 km/h perto de Hayatomonoseto. Os Taira conheciam esses movimentos, e esse era o seu trunfo. Os Taira levaram o imperador menino, com os cortesãos em trajes de gala, para mostrar legitimidade e levantar o ânimo.",
        { h: "O dia" },
        "Os Taira dividiram a frota em três esquadras. Os Minamoto vieram juntos, com os navios lado a lado e os arqueiros prontos. A batalha começou com uma troca de flechas à distância. A corrente da manhã favorecia os Taira, que tentaram usá-la para cercar os barcos Minamoto.",
        "Os Minamoto aguentaram, e a luta se prolongou. Quando as embarcações se encostavam, os guerreiros passavam de um barco para o outro e lutavam com espadas e punhais, num combate de [[abordagem]]. Por volta da tarde, a maré virou, e a vantagem passou aos Minamoto. Um resumo cita 15h como a hora da virada, mas os horários dos relatos não são seguros.",
        "Foi então que Taguchi Shigeyoshi mudou de lado. Passou a atacar os Taira pela retaguarda e, segundo as fontes, mostrou aos Minamoto em qual navio estava o imperador. Os arqueiros de Yoshitsune passaram a mirar nos timoneiros e remadores do barco imperial e de outras naves Taira. Sem eles, os barcos ficaram à deriva, e a esquadra Taira se desfez. Muitos Taira se mataram.",
        { h: "O fim de Antoku" },
        "O imperador, de uns seis anos (oito pela contagem japonesa), morreu com a avó. A tradição conta que Taira no Tokiko o pegou nos braços e, dizendo que sob as ondas havia uma capital, mergulhou com ele. A mãe, Tokuko, também se jogou, mas há relatos de que sobreviveu e virou freira.",
        "As insígnias também estavam a bordo. Os Taira tentaram jogá-las ao mar para os Minamoto não as pegarem. A espada Kusanagi e a joia chegaram à água. Mergulhadores recuperaram a joia. A espada, segundo a maior parte dos relatos, se perdeu, mas uma espada nova apareceu depois e foi guardada no santuário de Atsuta. Há várias explicações: uma réplica, uma peça recuperada do mar, uma peça entregue por milagre."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os Taira foram destruídos. Morreram Tomomori, Noritsune, Norimori, Tsunemori, Sukemori, Arimori e Yukimori. Taira no Munemori foi executado. Taira Tokitada foi exilado. Taira no Kagekiyo foi preso. Antoku e a avó morreram.",
        "Em dezembro de 1185, Go-Shirakawa deu a Yoritomo o poder de cobrar impostos e nomear administradores e policiais em todas as províncias. Em 1192, Yoritomo recebeu o título de Sei-i Tai [[Xogum|xogum]], e começou o xogunato de Kamakura (Quioto continuou capital de direito). Os samurais governaram o Japão por quase 700 anos, e o imperador ficou como figura cerimonial.",
        "Yoshitsune, o herói da vitória, não ficou bem com o irmão. Yoritomo o perseguiu, e ele morreu por suicídio ritual em 1189.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os caranguejos Heike: segundo a lenda, os caranguejos do estreito de Shimonoseki guardam o espírito dos guerreiros Taira." },
        { note: "As fontes: os dois relatos principais, o Heike Monogatari (um poema épico) e o Azuma Kagami (crônica do governo de Kamakura), foram escritos mais tarde e não concordam em números. Os horários e os detalhes da luta devem ser lidos como tradição." }
      ]}
    ]
  },

  hattin: {
    war: "Guerra entre Saladino e o Reino de Jerusalém (1187)",
    hook: "Numa colina sem água, em pleno julho, o exército do Reino de Jerusalém deixou de existir em dois dias.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O [[Reino de Jerusalém|reino de jerusalém]], criado pelos cruzados, estava dividido. Depois da morte do pequeno rei Balduíno V, em 1186, Guy de Lusignan virou rei ao se casar com a princesa Sibila. Ele tinha contra si uma parte dos nobres, liderada por Raimundo III de Trípoli, que se opusera à sua escolha. Do lado de Guy ficavam Reinaldo de Châtillon, Gérard de Ridefort, mestre dos [[templários]], e a própria rainha.",
        "Do outro lado estava Saladino. Ele tinha sido vizir do Egito em 1169, tomara Damasco em 1174 e Aleppo em 1183. Agora cercava os Estados cruzados pelo sul e pelo leste, Uma trégua de 1185 mantinha a paz.",
        { h: "O caminho até Hattin" },
        { timeline: [
          ["1186", "Guy de Lusignan é coroado rei de Jerusalém. O reino se divide em duas facções."],
          ["Durante a trégua", "Reinaldo de Châtillon ataca uma caravana de peregrinos muçulmanos. Saladino jura matá-lo."],
          ["Maio de 1187", "Em Cresson, os templários de Gérard são destruídos: perdem uns 150 cavaleiros e 300 soldados a pé."],
          ["30 de junho", "Saladino atravessa o rio Jordão com seu exército."],
          ["2 de julho", "Ataca Tiberíades, onde está a mulher de Raimundo, Eschiva. Uma torre é minada e desaba, mas ela resiste na cidadela. À noite, o exército cruzado, em La Saphorie, se reúne em conselho."],
          ["3–4 de julho", "O exército cruzado marcha para o leste e é destruído."]
        ]},
        "O conselho de guerra foi a decisão que perdeu o reino. Raimundo, que tinha mais a perder (era a sua mulher que estava em Tiberíades), aconselhou a não ir: o exército devia ficar onde havia água e esperar Saladino chegar. Os hospitalários concordaram. Gérard e Reinaldo disseram que isso era covardia, e Guy decidiu marchar. O historiador Norman Housley lembra que o rei tinha gastado em reunir o exército o dinheiro enviado pelo rei Henrique II da Inglaterra, e isso pesou. Os relatos do conselho vêm de cronistas que tinham seus lados na briga, e devem ser lidos com cuidado."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Saladino, sultão do Egito e da Síria" },
        "Tinha juntado o Egito e a Síria sob o seu comando. Sua estratégia em 1187 foi simples: atacar Tiberíades para provocar o exército cruzado a sair do lugar onde era forte e lutar onde ele escolhesse. Funcionou. Segundo os cronistas, quando a tenda real caiu, ele se prostrou em agradecimento e chorou de alegria.",
        { h: "Guy de Lusignan, rei de Jerusalém" },
        "Rei havia menos de um ano, discutido pelos nobres, precisava mostrar autoridade. Seguiu o conselho dos mais agressivos, e a decisão virou sua marca na história. Foi capturado em Hattin e solto em 1188.",
        { h: "Raimundo III de Trípoli" },
        "Era o líder da facção dos nobres e principal opositor de Guy. Nas fontes muçulmanas há rumores, não comprovados, de que tinha feito acordo com Saladino. Quando as linhas se romperam, ele abriu caminho e escapou. Morreu de pleurisia ainda em 1187.",
        { h: "Reinaldo de Châtillon" },
        "O senhor que, na trégua, atacou uma caravana de peregrinos. Saladino tinha jurado matá-lo.",
        { h: "Os outros nomes" },
        "Do lado cruzado: Balian de Ibelin, Joscelin III de Edessa, Raimundo de Antioquia, Amalrico (irmão de Guy) e Humphrey IV de Toron. Do lado muçulmano: Gökböri na ala esquerda, al-Muzaffar Umar na direita, e al-Afdal, filho de Saladino, então com 17 anos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os historiadores Konstam e Riley-Smith dão ao exército cruzado entre 18.000 e 20.000 homens, com 1.200 cavaleiros dos reinos de Jerusalém e Trípoli e mais 50 de Antioquia. Outro quadro detalha 1.200 cavaleiros, 3.000 homens de armas, 500 [[turcopolos]] e 15.000 soldados a pé. Era um exército maior que o normal, porque a convocação atingiu todos os homens capazes de lutar. À frente ia a [[vera cruz]], levada pelo bispo de Acre no lugar do patriarca, que estava doente.",
        "O exército de Saladino tinha cerca de 40.000 homens, dos quais uns 12.000 eram cavalaria regular (France e Tibble). Outras estimativas vão de 20.000 a 40.000. O ponto é que os muçulmanos tinham muito mais cavalaria leve e arqueiros a cavalo, e isso, em terreno aberto e sem água, decidia a batalha.",
        { h: "O terreno" },
        "A Galileia em julho: colinas secas, capim alto, calor de verão. O lago de Tiberíades fica ao leste, mas o caminho até ele atravessava um planalto sem água. A única água boa era a das fontes, controladas pelos muçulmanos. Perto, fica uma colina de dois picos, os Chifres de Hattin.",
        { h: "Dia 3: a marcha" },
        { formation: true },
        "Os cruzados saíram de La Saphorie e marcharam para o leste em coluna, debaixo de flechas dos arqueiros a cavalo muçulmanos, que atacavam, recuavam e voltavam. Passaram as fontes de Turan, que eram insuficientes para tanta gente. Ao meio-dia, Raimundo e Guy viraram à esquerda, rumo às fontes de Hattin, a uns 10 km. Os muçulmanos cortaram o caminho para a água. O exército parou no planalto árido perto de Meskenah. O cronista Ibn al-Athir escreveu que o cerco foi tão fechado que nem um gato escaparia.",
        { h: "A noite" },
        "Durante a noite, os muçulmanos rezavam, cantavam, batiam tambores e gritavam, para quebrar o moral dos cristãos. Atearam fogo ao capim seco, e a fumaça cobriu o acampamento e secou ainda mais as gargantas. Uma caravana de camelos de Saladino trouxe odres de água do lago, e os arqueiros de Gökböri receberam 400 cargas de flechas.",
        { h: "Dia 4: a batalha" },
        "De manhã, os cruzados, cegos pela fumaça, foram atingidos pelas flechas de Gökböri. Gérard e Reinaldo pediram a Guy que formasse e atacasse. Amalrico liderou o ataque. Raimundo comandava a primeira divisão, junto com Raimundo de Antioquia. Balian e Joscelin ficaram na retaguarda. O exército levantou acampamento e tentou chegar às fontes de Hattin, mas Saladino tinha bloqueado o caminho.",
        "Raimundo fez duas cargas para chegar à água do lago. A segunda funcionou: as linhas muçulmanas se abriram e ele escapou para Tiro. A maior parte da infantaria fugiu em massa para os Chifres de Hattin e não participou mais da luta. Sede e ferimentos mataram muita gente. Cinco cavaleiros de Raimundo foram até os chefes muçulmanos pedir para ser mortos.",
        "Guy tentou levantar tendas para barrar a cavalaria. Os cavaleiros que restavam fizeram três cargas desesperadas, mas foram cercados e vencidos. O filho de Saladino, al-Afdal, de 17 anos, estava ao lado do pai e descreveu as cargas. Quando a tenda real caiu, Saladino desmontou, se prostrou em agradecimento e chorou de alegria.",
        { h: "A tenda de Saladino" },
        "Guy e Reinaldo foram levados à tenda de Saladino. O sultão ofereceu água a Guy, gesto que, entre os árabes, significava poupar a vida. Guy passou a taça a Reinaldo, e Saladino a afastou, dizendo que não tinha oferecido nada àquele homem e não o pouparia por isso. Acusou-o de ter quebrado a trégua. Sobre como Reinaldo morreu, as fontes divergem. Baha al-Din diz que Saladino o matou com um golpe de espada. Outros dizem que foi um guarda, por ordem dele. Guy ouviu que reis não matam reis."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Quase todo o exército cruzado foi perdido. Só uns 200 cavaleiros escaparam, segundo France. Os templários e os hospitalários capturados, cerca de 200, foram decapitados por ordem de Saladino, menos o mestre templário. Os turcopolos presos foram executados, porque Saladino achava que eram muçulmanos convertidos, o que era crime de morte. Os soldados a pé foram escravizados, e um deles teria sido trocado em Damasco por um par de sandálias. A Vera Cruz, segundo os relatos, foi levada a Damasco pendurada de cabeça para baixo numa lança. Outros nobres, como Humphrey de Toron e Guilherme V de Monferrato, foram poupados e tratados bem.",
        "Em 5 de julho, Saladino marchou até Tiberíades, e Eschiva se rendeu e saiu para Trípoli com a família e os bens. Cinquenta e duas cidades e fortalezas caíram depois da vitória. Em setembro, Acre, Nablus, Jaffa, Sídon, Beirute e Ascalon estavam em mãos muçulmanas. Tiro resistiu, salva por Conrado de Monferrato. Jerusalém, defendida pela rainha Sibila, pelo patriarca Heráclio e por Balian, se rendeu em 2 de outubro de 1187.",
        { h: "Por que importa" },
        "A perda de Jerusalém chocou a Europa. O cronista Ernoul diz que o papa Urbano III morreu de choque ao saber, e o sucessor, Gregório VIII, convocou logo uma nova cruzada com a bula Audita tremendi. Na Inglaterra e na França foi cobrado o dízimo de Saladino. A Terceira Cruzada começou em 1189, com Ricardo Coração de Leão, e recuperou muitas posses cristãs. A força militar do Reino de Jerusalém só terminou de colapsar em La Forbie, em 1244.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: as fontes de época exageram. A Wikipédia em português, por exemplo, dá em um trecho 60.000 cruzados e 70.000 muçulmanos, e em outro 20.000 e 30.000. As estimativas modernas ficam em 18.000–20.000 cruzados e 20.000–40.000 muçulmanos." },
        { note: "O acordo: Ibn al-Athir registra o rumor de que Raimundo estava em rebelião aberta contra Guy e fizera um trato com Saladino. Isso nunca foi provado." },
        { note: "O conselho de guerra: os relatos cristãos foram escritos por gente que tinha lado na briga entre Guy e Raimundo, e por isso a culpa por ter ido ao encontro de Saladino é discutida até hoje." }
      ]}
    ]
  },

  tarain: {
    war: "Conquista do norte da Índia pelos guridas (1191–1206)",
    hook: "Um ano depois de fugir ferido do mesmo campo, Muhammad de Ghor voltou, cansou o inimigo com flechas e abriu a Índia ao islã.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século 12, o norte da Índia era um mosaico de reinos [[rajputs]]. Um dos mais fortes era o de Prithviraj Chauhan, da dinastia Chauhan (ou Chahamana), com capital em Ajmer. Do outro lado do Indo, nas montanhas do Afeganistão, uma dinastia turco-afegã, os [[guridas]], comandada por Muhammad de Ghor (também chamado Mu'izz al-Din), olhava para a planície indiana.",
        { h: "O caminho até a segunda batalha" },
        { timeline: [
          ["1191", "Primeira batalha de Tarain. Os guridas atacam, mas os rajputs os cercam por três lados e vencem. Muhammad, ferido no braço pelo adversário Govind Rai, é levado a salvo por um jovem soldado, segundo Minhaj."],
          ["1191–1192", "Muhammad deixa uma guarnição de uns 2.000 homens na fortaleza de Tabarhinda (talvez Bathinda). Prithviraj a cerca por cerca de 13 meses e a toma."],
          ["1192", "Muhammad volta a Tarain com um exército muito maior."]
        ]},
        "Prithviraj não perseguiu o inimigo que fugia. Em 1192, o campo era o mesmo, e o adversário tinha aprendido a lição."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Muhammad de Ghor" },
        "Governante gurida e general. Tinha sido ferido em Tarain em 1191. Em 1192 evitou a batalha de choque, que quase lhe custou a vida, e usou o que os seus faziam melhor: cavalaria leve de arqueiros, com a reserva pesada guardada para o fim.",
        { h: "Prithviraj Chauhan" },
        "Rei da dinastia Chauhan, vencedor de 1191. Os poemas sobre ele, como o Prithviraj Raso, são tidos como pouco confiáveis como fonte histórica.",
        { h: "Os outros nomes" },
        "No lado gurida, Qutb al-Din Aibak, um ex-escravo militar que, segundo a Wikipédia sobre ele, comandou o dispositivo do exército. Anos depois, ele fundou o Sultanato de Déli. No lado rajput, Govind Rai, o adversário que feriu Muhammad em 1191, comandava a vanguarda; Bhola, a ala esquerda; e Badamsa Rawal, a direita (segundo a ordem de batalha de Isami, crônica do século 14)."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números das crônicas são conhecidos e não merecem confiança. Minhaj-i-Siraj, que escreveu em 1260, fala em 120.000 homens de armadura do lado de Muhammad, com uns 40.000 de cavalaria de elite sob seu comando direto. Firishta, no século 16 ou 17, fala em 300.000 cavaleiros e mais de 3.000 elefantes para Prithviraj. O historiador Kaushik Roy diz que os 300.000 provavelmente eram o total que todos os reinos rajputs poderiam, em teoria, mobilizar, não o exército que apareceu. Satish Chandra aponta que esses números serviam para valorizar o desafio e a vitória. O Prithviraj Raso, pouco confiável, dá uns 83.000 para a última batalha. Hasan Nizami chega a dizer que os rajputs perderam 100.000.",
        { note: "Nenhum número sobre o tamanho dos exércitos é seguro. Os historiadores só concordam que as crônicas exageram, e discordam sobre qual lado era maior." },
        { h: "A trégua falsa" },
        "Segundo Firishta, Muhammad respondeu a Prithviraj que não podia recuar sem ordens e que aceitava uma trégua até receber instruções. Hasan Nizami acrescenta uma oferta de paz em que os guridas ficariam com Tarhind, Punjab e Multan. Firishta, Aufi e Nizami concordam que a conversa foi um truque. Enquanto os rajputs relaxavam, Muhammad planejava um ataque.",
        { h: "O ataque antes do amanhecer" },
        "Os guridas atacaram antes do nascer do sol, quando o acampamento rajput dormia ou fazia as primeiras tarefas do dia. Segundo Minhaj, Muhammad deixou o centro do exército, com a bagagem, alguns quilômetros atrás e dividiu o resto em cinco corpos. Quatro eram de arqueiros a cavalo, que atacavam pela direita, pela esquerda, pela frente e por trás. As traduções discordam se eram 10.000 ao todo ou 10.000 em cada corpo.",
        { h: "Atira, foge, volta" },
        "As ordens aos arqueiros eram de não chegar ao corpo a corpo. Atiravam, fingiam fugir numa [[retirada fingida]], e os rajputs, com seus elefantes, seus cavalos e sua infantaria, corriam atrás. Era o tipo de luta em que o lado mais pesado se cansava sem alcançar ninguém. Por horas, segundo Minhaj, a manobra repetiu-se, até o fim da tarde, quando os rajputs estavam esgotados.",
        { h: "A carga final" },
        "Então Muhammad lançou o quinto corpo. Para Firishta, ele pôs-se à frente de 12.000 cavaleiros e atacou com toda a força, e o caos tomou conta dos rajputs. Aqui há uma observação. O número de 12.000 vem de Firishta e da Wikipédia, mas nenhuma fonte que consultei diz que eram cavaleiros pesados. O resto do exército foi atrás, e os rajputs se romperam em pânico.",
        { note: "O jejum: o historiador Jadunath Sarkar sugeriu que os rajputs lutaram de estômago vazio, por terem sido atacados de manhã cedo. É uma opinião só dele e não é aceita por todos." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória decisiva dos guridas. Segundo Minhaj, Prithviraj desceu do elefante, montou num cavalo e fugiu, mas foi capturado perto de Sursuti. O fim dele é contado de três jeitos. Minhaj diz que foi morto logo. Hasan Nizami diz que foi poupado e executado depois, ao ser descoberto numa intriga. A maioria das fontes medievais diz que foi levado a Ajmer, onde Muhammad queria recolocá-lo como vassalo. Govind Rai morreu na batalha, segundo Minhaj e Firishta.",
        "Os guridas deixaram Govindaraja IV, filho de Prithviraj, em Ajmer como vassalo. Em 1192, o irmão de Prithviraj, Hariraja, expulsou o sobrinho e recuperou parte do reino, mas Qutb al-Din Aibak o derrotou. Aibak tomou Délhi ainda em 1192.",
        { h: "Por que importa" },
        "Tarain abriu o norte da Índia aos guridas. Em 1194, os guridas venceram Jayachandra, dos Gahadavala, em Chandawar, e as conquistas chegaram à Bengala. Muhammad foi assassinado em março de 1206. Aibak assumiu em 25 de junho de 1206 e firmou-se como governante em Lahore. Nasceu o [[Sultanato de Déli|sultanato de déli]], que governou boa parte da Índia por três séculos e deixou obras como o Qutb Minar, começado por Aibak em 1199.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem foi Aibak: nasceu na Ásia Central, foi vendido ainda criança como escravo e comprado em Nishapur por um juiz, que o educou. Revendido a Muhammad em Ghazni, subiu até chefe dos estábulos reais. Ele morreu em 1210, caindo do cavalo num jogo de polo. A dinastia chamada de dos escravos é apelidada assim, mas só três de seus reis foram escravos." },
        { note: "As fontes: o relato principal da segunda batalha é muçulmano, por Hasan Nizami e Minhaj-i-Siraj. O lado hindu, em obras como o Hammira Mahakavya e o Prithviraj Raso, mistura história e poesia." }
      ]}
    ]
  },

  yehuling: {
    war: "Conquista mongol da dinastia Jin (1211–1234)",
    hook: "Numa incursão de saque, Gêngis Khan destruiu o melhor exército Jin e deixou o norte da China exposto.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1206, o chefe tribal Temüjin reuniu as tribos mongóis numa assembleia, o quriltai, e foi proclamado Gêngis Khan. Em 1209–1210, atacou os Xia Ocidentais e os forçou a pagar tributo. O alvo seguinte era o grande vizinho do sul: a dinastia [[jin]], dos jürchens, que dominava o norte da China. Nos anos 1190, os Jin tinham dado títulos a Temüjin em troca de tributo, como a um vassal.",
        "Os Jin tinham uma política de dividir para reinar entre as tribos da [[estepe]]. Aliaram-se aos tártaros e executaram Ambaghai, antigo khan dos mongóis. Gêngis tinha motivos pessoais: vingar Ambaghai e responder ao imperador Wanyan Yongji, que o insultara. Em 1210, parou de pagar tributo, o que, na prática, era declarar guerra.",
        { h: "O caminho até Yehuling" },
        { timeline: [
          ["Primavera de 1211", "O exército mongol se junta no rio Kerulen. Tomam Dashuibo e Fengli, numa sondagem."],
          ["Verão", "O exército se divide: uma ala sob Jochi, Chagatai e Ögedei ataca a região de Hohhot. Gêngis vai em direção à capital Jin, Zhongdu, com Jebe na vanguarda."],
          ["Agosto a outubro", "Os combates principais, em Wusha, Yehuling e depois Huihe."]
        ]},
        "A campanha não tinha como objetivo conquistar terra. Era um ataque para saquear, colher informação e enfraquecer a defesa Jin, antes de voltar para a Mongólia. Os mongóis tinham aliados na fronteira, como as tribos Onggud, e informantes: desertores Jin e mercadores, como Ja'far Khwaja, que traziam notícias."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gêngis Khan" },
        "Em 1211 já tinha unido as tribos e vencido os Xia. Para esta guerra, contou com aliados da fronteira, informantes e desertores.",
        { h: "Muqali e Jebe" },
        "Muqali comandava a unidade Balu. Antes do ataque, segundo a tradição, prometeu a Gêngis que não voltaria vivo se falhasse. Jebe comandava a vanguarda no avanço sobre Zhongdu.",
        { h: "Do lado Jin" },
        "O chanceler Duji Sizhong comandou o primeiro exército, mas foi substituído por Wanyan Chengyu. O comandante de campo era Wanyan Jiujin. O imperador Wanyan Yongji ficou em Zhongdu. Um oficial khitan, Shimo Ming'an, foi mandado para negociar e acabou mudando de lado."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O historiador Paul Ratchnevsky conta cerca de 65.000 mongóis, mais 10.000 auxiliares Onggud, e do lado Jin 500.000 soldados a pé e 120.000 cavaleiros, quase dez vezes mais. Mas outro historiador, Carl Sverdrup, estima o exército de campanha Jin em só 30.000 a 50.000 homens. Os dois números convivem na própria Wikipédia sem serem conciliados. Outras fontes falam em 90.000 a 100.000 mongóis.",
        { note: "As fontes principais (a História Secreta dos Mongóis, o Shengwu qinzheng lu, Rashid al-Din e a História dos Yuan) são imprecisas e se contradizem. Elas também resumiram campanhas que cruzaram o fim do ano chinês. A data e a ordem dos combates em 1211 são, por isso, discutidas: uma fonte põe o conflito entre março e junho, outra entre agosto e outubro." },
        { h: "A fronteira se rompe" },
        "O chanceler Duji Sizhong levou o exército principal Jin para a fronteira noroeste. Gêngis atacou a fortaleza de Wusha e tomou o acampamento de Wuyue, o que rompeu a linha de defesa dos Jin. Wanyan Chengyu assumiu o comando e mandou abandonar várias cidades, como Hengzhou, Changzhou e Fuzhou, e recuar para perto de Yehuling, onde as montanhas atrapalhariam a cavalaria mongol.",
        { h: "O desertor" },
        "Os Jin mandaram Shimo Ming'an, um khitan a seu serviço, abrir conversas de paz. Gêngis o convenceu a passar para o lado mongol, e Ming'an entregou a posição do exército Jin. Uma outra versão diz que foi o comandante Wanyan Jiujin quem mandou um mensageiro até ele, e que Ming'an então contou aos mongóis onde os Jin esperavam, do outro lado do desfiladeiro.",
        { h: "Yehuling" },
        "Muqali conduziu a unidade Balu pela passagem de Huan'erzui, o Focinho de Texugo, num ataque de surpresa. O terreno não deixava usar plenamente a cavalaria, e os mongóis desmontaram e lutaram a pé, com o moral alto. Romperam o centro Jin e foram até o acampamento de Wanyan Chengyu. Os flancos Jin, mal comunicados, não socorreram o centro. Wanyan Jiujin morreu, o exército se desfez e foi massacrado. As crônicas dizem que os corpos se estenderam por mais de 100 milhas (uns 160 km).",
        { h: "Huihe" },
        "Wanyan Chengyu juntou os sobreviventes na fortaleza de Huihe. Os mongóis os cercaram, e a luta durou três dias. Gêngis liderou pessoalmente uma carga de 3.000 cavaleiros, e o resto do exército o seguiu. O exército Jin foi aniquilado, e Chengyu escapou por pouco. Tushan Yi o substituiu como chanceler."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas mongóis são descritas como leves, e as dos Jin como devastadoras. Nenhuma fonte que consultei dá números. Cerca de dez cidades Jin foram saqueadas, e os mongóis chegaram diante de Zhongdu. O imperador Yongji foi assassinado pelo general Hushahu, que tomou o controle da capital.",
        "Em 1213 os mongóis passaram o desfiladeiro de Juyong, e em 1214 os Jin se comprometeram a pagar tributo, incluindo uma princesa dada a Gêngis. Depois, a corte mudou a capital para Kaifeng. Zhongdu caiu em 1º de junho de 1215.",
        { h: "Por que importa" },
        "Os Jin sobreviveram mais ou menos duas décadas, mas com o centro enfraquecido. Passaram a dar prioridade à guerra contra os Song do sul, e não à defesa da fronteira. Os Song acabaram se aliando aos mongóis e ajudaram a destruir os Jin em 1234.",
        { h: "Curiosidades e controvérsias" },
        { note: "A batalha também é chamada de Wild Fox Ridge, que traduz o nome Yehuling, e de Badger Mouth (Huan'erzui), por causa da passagem." },
        { note: "O desertor: a Wikipédia dá versões diferentes sobre quem convenceu quem, e a participação exata de Ming'an na vitória é incerta." }
      ]}
    ]
  },

  navas: {
    war: "Reconquista (cruzada de 1212)",
    hook: "Três reis cristãos contra um califa, numa tarde de julho: o dia em que a maré da Reconquista começou a virar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1195, em Alarcos, os [[almóadas]] tinham esmagado o exército de Afonso VIII de Castela. Os reinos cristãos da Península, que viviam brigando entre si, ficaram expostos. Leão e Navarra chegaram a se aliar ao califa contra Castela, e em 1197 Afonso assinou com os almóadas uma trégua de dez anos.",
        "A trégua acabou, e em 1211 o novo califa, Muhammad al-Nasir, desembarcou do Marrocos e tomou o castelo de Salvatierra, bastião da Ordem de Calatrava. Afonso VIII mandou o arcebispo de Toledo, Rodrigo Jiménez de Rada, pedir ao papa Inocêncio III uma [[cruzada]]. O arcebispo a pregou na Itália, na Alemanha e na França.",
        { h: "O caminho até as Navas" },
        { timeline: [
          ["Maio de 1212", "O exército se reúne em Toledo. Afonso VIII tem a seu lado, em pessoa, Pedro II de Aragão e Sancho VII de Navarra. Afonso IX de Leão não vai, mas voluntários leoneses e portugueses vão. O rei Afonso II de Portugal manda um contingente."],
          ["20 de junho", "Diego López de Haro lidera a vanguarda para fora de Toledo."],
          ["24 de junho e 1º de julho", "Tomam Malagón e Calatrava. Muitos cruzados estrangeiros vão embora: calor, doença, falta de saque, e protestos contra o tratamento brando de judeus e muçulmanos."],
          ["13 de julho", "O exército chega às Navas de Tolosa e encontra o caminho bloqueado."],
          ["14 e 15 de julho", "Escaramuças. Os cristãos atravessam a serra pelo Puerto del Rey, guiados por um pastor."],
          ["16 de julho", "A batalha."]
        ]},
        "A decisão de al-Nasir de bloquear a entrada do vale deixou os cristãos cercados de montanhas, com pouco espaço de manobra. O guia que os tirou dali é parte da tradição: um pastor local. Segundo as crônicas castelhanas, a versão mais comum o chama de Martín Alhaja, que ganhou o título hereditário de Cabeza de Vaca, mas outras versões dizem que era Santo Isidoro. É um debate que rendeu discussões até o século 18."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Afonso VIII de Castela" },
        "Derrotado em Alarcos em 1195, buscou uma batalha decisiva. Conseguiu a aliança de Pedro II de Aragão e, com mais dificuldade, a de Sancho VII de Navarra. Na batalha, segundo a Wikipédia em espanhol, foi ele quem mandou conter os flancos e depois lançou toda a retaguarda.",
        { h: "Muhammad al-Nasir, o califa" },
        "Califa almóada, chamado de Miramamolín nas crônicas espanholas. Sua tenda ficava num palenque no alto de uma colina. Depois da derrota, voltou a Marrakech, se fechou no palácio e morreu cerca de um ano depois.",
        { h: "Os outros nomes" },
        "Diego López de Haro, senhor da Biscaia, comandava a vanguarda. Pedro II de Aragão ficou na esquerda. Sancho VII de Navarra, na direita, é conhecido pela lenda das correntes. Entre os mortos importantes: Gomes Ramires, mestre dos templários na Península, que liderava os portugueses; Pedro Gómez de Acevedo, porta-estandarte de Calatrava; Pedro Arias, mestre de Santiago, morto de ferimentos em 3 de agosto."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As crônicas exageram muito. Rodrigo Jiménez de Rada fala em 80.000 cavaleiros e um sem-número de soldados a pé. A historiografia recente (García Fitz, Alvira Cabrer) estima 12.000 a 14.000 homens do lado cristão e 22.000 a 30.000 do lado almóada. Há quem discorde: um resumo de enciclopédia dá 130.000 cristãos, número muito fora do que a pesquisa atual aceita.",
        { h: "O terreno" },
        "Las Navas de Tolosa, na província de Jaén. Era um vale fechado por serras, e o acesso estava vigiado por homens de al-Nasir. Os cristãos entraram pelo Puerto del Rey, a oeste, e saíram numa área plana.",
        { h: "A disposição" },
        "Do lado almóada, segundo a Wikipédia em espanhol, vinha na frente uma linha de voluntários da jihad, com peões de dardos, de qualidade fraca. Atrás, arqueiros, bestas, cavalaria leve e arqueiros a cavalo. No núcleo, a cavalaria andaluza e as tropas berberes e árabes. Na retaguarda, a [[guarda negra]] do califa, com grandes lanças. O palenque do califa, um cercado feito de bagagem, aljavas, animais de carga e camelos, ficava numa colina, talvez o cerro dos Olivares.",
        "Do lado cristão, segundo a mesma fonte, a vanguarda era de Diego López de Haro, com voluntários, occitanos e leoneses. As [[ordens militares]] e a [[mesnada]] castelhana estavam no centro, Pedro II à esquerda, Sancho VII com as milícias dos [[concelhos]] à direita, e Afonso VIII na retaguarda, com a mesnada real e os bispos. Aqui as fontes divergem: a Wikipédia em português põe Afonso no centro, e outro resumo põe Haro no centro e Afonso na reserva.",
        { formation: true },
        { h: "O ataque" },
        "A vanguarda de Haro rompeu a primeira linha muçulmana e fez os voluntários fugirem. Os almóadas responderam com o tornafuye, uma [[retirada fingida]] da cavalaria leve e dos arqueiros, e o centro avançou. Haro mandou manter a linha em vez de perseguir os fugitivos, por medo de ficar cercado.",
        "Perto do meio-dia, o centro almóada pressionava uma linha cristã que já cedia, e a cavalaria andaluza tentava cercar os cristãos. A luta foi tão de perto que, segundo a Crônica Latina, não havia espaço para arqueiros. Os milicianos portugueses lutaram bem. Rodrigo de Toledo elogiou o 'ataque audacioso', e Lucas de Tuy escreveu que correram para o combate como para uma festa.",
        "Afonso VIII mandou conter os flancos e firmar o centro, com a cavalaria aragonesa à esquerda e a navarra e das milícias à direita. Já à tarde, a retaguarda inteira avançou em bloco, com a cavalaria pesada. As linhas islâmicas cederam, e veio a debandada. Segundo a Wikipédia em inglês, foi a Ordem de Santiago que rompeu a linha de defesa e abriu brechas.",
        { h: "O palenque" },
        "Os cristãos chegaram ao palenque, e o califa fugiu às pressas para Jaén, deixando um enorme espólio. A perseguição durou até o pôr do sol, por uns 20 a 25 km."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas cristãs foram de uns 2.000 homens, mais do que a lenda dizia. As muçulmanas são estimadas em 11.000 a 15.000 entre mortos, feridos e prisioneiros (Wikipédia em espanhol), ou cerca de 20.000 (Nutter, 2023). A carta de Afonso VIII ao papa fala de 100.000 homens armados mortos, número que nenhuma fonte independente confirma. A tenda e o estandarte do califa foram mandados a Inocêncio III.",
        "No mesmo ano, Baeza foi evacuada e Úbeda foi cercada e tomada. Segundo a carta de Afonso, 60.000 muçulmanos morreram em Úbeda. A Crônica Latina diz que quase 100.000 foram capturados, mulheres e crianças incluídas. Os dois números não coincidem e são tidos como exagero.",
        { h: "Por que importa" },
        "A vitória não deu conquistas imediatas, mas rompeu o poder almóada na Península. Fernando III tomou Córdoba em 1236, Jaén em 1246 e Sevilha em 1248. Jaime I conquistou as Baleares e Valência, em 1238. Os merínidas dominaram o Marrocos em 1269. A batalha do Salado, em 1340, foi o último grande choque entre exércitos cristãos e muçulmanos na Península. O Emirado de Granada, vassalo de Castela, resistiu até 1492.",
        { h: "Curiosidades e controvérsias" },
        { note: "As correntes de Navarra: diz a tradição que Sancho VII foi o primeiro a entrar no acampamento do califa e quebrou as correntes que prendiam os guardas negros, e por isso o brasão de Navarra tem correntes. Os historiadores modernos duvidam. A Wikipédia em inglês e a em português dizem que a ideia de guardas acorrentados provavelmente vem de uma má tradução da palavra inglesa serried (cerrado, em formação compacta). A Wikipédia em espanhol diz que a lenda é posterior e que castelhanos pela direita e aragoneses pela esquerda entraram no palenque quase ao mesmo tempo. O emblema pessoal de Sancho só virou brasão da dinastia a partir de 1260, com Teobaldo II." },
        { note: "O pendão do califa, guardado no mosteiro de Las Huelgas, em Burgos, foi atribuído à batalha. Um estudo o data do século 14 e o liga aos merínidas, embora não se exclua origem nasrida." },
        { note: "O pastor: uns dizem Martín Alhaja, outros, Santo Isidoro. A Wikipédia em inglês trata a história com cautela." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  hattin: {
    terrain: [
      { t: "sea", x: 86, y: 0, w: 14, h: 70, l: "Lago de Tiberíades" },
      { t: "hill", x: 64, y: 12, rx: 11, ry: 7, l: "Chifres de Hattin" },
      { t: "note", x: 8, y: 68, l: "Oeste ←  → Leste (lago)" }
    ],
    units: [
      { id: "sC", s: "a", k: "cav", w: 14, h: 5, l: "Saladino (centro)" },
      { id: "sL", s: "a", k: "cav", w: 12, h: 4, l: "Gökböri (arqueiros)" },
      { id: "sR", s: "a", k: "cav", w: 12, h: 4, l: "al-Muzaffar Umar" },
      { id: "sW", s: "a", k: "camp", w: 12, h: 4, l: "Camelos com água" },
      { id: "bV", s: "b", k: "cav", w: 12, h: 5, l: "Raimundo de Trípoli" },
      { id: "bC", s: "b", k: "cav", w: 14, h: 5, l: "Guy e a Vera Cruz" },
      { id: "bI", s: "b", k: "inf", w: 16, h: 5, l: "Infantaria" },
      { id: "bR", s: "b", k: "cav", w: 12, h: 5, l: "Retaguarda (Balian)" }
    ],
    steps: [
      { t: "3 de julho de 1187. O exército cruzado sai de La Saphorie e marcha para o leste em coluna. Raimundo está na frente. Os arqueiros a cavalo de Saladino atiram dos dois lados, recuam e voltam.",
        p: { bV: [40, 36], bC: [28, 36], bI: [28, 46], bR: [14, 38], sC: [64, 38], sL: [30, 22], sR: [30, 54], sW: [90, 60] } },
      { t: "Ao meio-dia, Raimundo e Guy viram à esquerda, rumo às fontes de Hattin. Os muçulmanos cortam o caminho para a água.",
        p: { bV: [50, 28], bC: [40, 30], bI: [40, 40], bR: [28, 32], sC: [62, 26], sL: [42, 18], sR: [42, 48] } },
      { t: "O exército para no planalto seco perto de Meskenah. Saladino fecha o cerco em volta. A noite passa com tambores, gritos e o capim seco em chamas. Os camelos levam água do lago para os muçulmanos.",
        p: { bV: [52, 30], bC: [46, 34], bI: [46, 42], bR: [38, 36], sC: [66, 34], sL: [50, 20], sR: [50, 52] } },
      { t: "4 de julho. De manhã, os cruzados, cegos pela fumaça, são atingidos pelas flechas de Gökböri. Gérard e Reinaldo pedem a Guy que forme e ataque. O exército sai do acampamento rumo às fontes, mas Saladino bloqueia o caminho.",
        p: { bV: [58, 28], bC: [52, 34], bI: [52, 42], bR: [44, 36], sC: [70, 32], sL: [56, 20], sR: [56, 48] } },
      { t: "Raimundo faz duas cargas para chegar à água do lago. Na segunda, as linhas muçulmanas se abrem, e ele passa.",
        p: { bV: [78, 40], sC: [72, 30] } },
      { t: "Raimundo escapa para Tiro. A maior parte da infantaria foge em massa para os Chifres de Hattin e não luta mais.",
        p: { bV: [10, 6], bI: [64, 14] }, x: ["bI"] },
      { t: "Guy tenta armar tendas para barrar a cavalaria. Os cavaleiros que restam fazem três cargas desesperadas. Cada uma é repelida.",
        p: { bC: [60, 30], bR: [52, 34], sC: [66, 34], sL: [58, 24], sR: [58, 44] } },
      { t: "Cercados e sem água, os últimos cavaleiros caem. A tenda real é derrubada, e Saladino desmonta e agradece a Deus. Guy e Reinaldo são levados à tenda dele.",
        p: { bC: [62, 30], bR: [56, 34], sC: [66, 32] }, x: ["bC", "bR"] }
    ]
  },

  navas: {
    terrain: [
      { t: "hill", x: 50, y: 8, rx: 22, ry: 6, l: "Colina do palenque do califa" },
      { t: "note", x: 8, y: 68, l: "Serra (Puerto del Rey)" }
    ],
    units: [
      { id: "cVan", s: "a", k: "cav", w: 16, h: 5, l: "Vanguarda (Haro)" },
      { id: "cMid", s: "a", k: "cav", w: 14, h: 5, l: "Ordens militares e Castela" },
      { id: "cL", s: "a", k: "cav", w: 14, h: 5, l: "Aragão (Pedro II)" },
      { id: "cR", s: "a", k: "cav", w: 14, h: 5, l: "Navarra (Sancho VII) e concelhos" },
      { id: "cRear", s: "a", k: "cav", w: 20, h: 5, l: "Retaguarda (Afonso VIII)" },
      { id: "mVol", s: "b", k: "inf", w: 40, h: 3, l: "Voluntários e peões" },
      { id: "mArc", s: "b", k: "cav", w: 34, h: 4, l: "Arqueiros e cavalaria leve" },
      { id: "mCore", s: "b", k: "cav", w: 36, h: 5, l: "Núcleo almóada, árabes e andaluzes" },
      { id: "mCamp", s: "b", k: "camp", w: 16, h: 6, l: "Palenque do califa" },
      { id: "mGuard", s: "b", k: "inf", w: 12, h: 3, l: "Guarda negra" }
    ],
    steps: [
      { t: "16 de julho de 1212. Os cristãos passaram a serra pelo Puerto del Rey e se formam na planície: vanguarda na frente, Aragão à esquerda, Navarra à direita, Afonso VIII atrás. Os almóadas esperam em linhas, com o califa numa colina, dentro de um cercado de bagagem.",
        p: { cVan: [50, 50], cMid: [50, 56], cL: [22, 54], cR: [78, 54], cRear: [50, 62],
             mVol: [50, 36], mArc: [50, 30], mCore: [50, 23], mGuard: [50, 14], mCamp: [50, 8] } },
      { t: "A vanguarda de Haro rompe a primeira linha, e os voluntários fogem.",
        p: { cVan: [50, 42], cMid: [50, 50] }, x: ["mVol"] },
      { t: "Os almóadas fingem recuar, o tornafuye. O centro avança e a cavalaria andaluza tenta envolver os cristãos. Haro manda manter a linha, em vez de perseguir.",
        p: { mArc: [50, 36], mCore: [50, 30], cVan: [50, 40] } },
      { t: "Perto do meio-dia, a linha cristã quase cede. Os dois lados lutam tão de perto que não há espaço para arqueiros.",
        p: { mCore: [50, 34], cVan: [50, 41], cMid: [50, 48] } },
      { t: "Afonso VIII manda conter os flancos e firmar o centro. A cavalaria aragonesa segura a esquerda, a navarra e dos concelhos, a direita.",
        p: { cL: [22, 44], cR: [78, 44], cRear: [50, 54] } },
      { t: "No fim da tarde, toda a retaguarda avança em bloco, com a cavalaria pesada.",
        p: { cRear: [50, 40], cMid: [50, 40], cVan: [46, 36] } },
      { t: "As linhas almóadas cedem, e a debandada começa. As alas cristãs fecham pelos lados. Segundo a Wikipédia em inglês, foi a Ordem de Santiago que rompeu a linha.",
        p: { cL: [30, 24], cR: [70, 24], cRear: [50, 30], cMid: [50, 34], mArc: [50, 24], mCore: [50, 18] }, x: ["mArc", "mCore"] },
      { t: "Cristãos entram no palenque, e a guarda do califa cai. Segundo a tradição, Sancho VII foi o primeiro, mas isso é lenda posterior. O califa foge para Jaén, e a perseguição dura até o pôr do sol, por uns 20 a 25 km.",
        p: { cL: [34, 12], cR: [66, 12], cRear: [50, 20], mGuard: [50, 10], mCamp: [50, 8] }, x: ["mGuard", "mCamp"] }
    ]
  }
});
