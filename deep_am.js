// In-depth battles, batch am: parwan, kondurcha, bulanty, anrakay.
// Checked against the English Wikipedia articles on Parwan, Kondurcha, Bulanty, Anyrakay and the Kazakh-Dzungar Wars,
// the Wikipedia pages on Jalal ad-Din Mingburnu, Umar Shaikh Mirza I and Muhammad Sultan Mirza, the Russian Wikipedia
// article on Kondurcha (Mirgaleev), Matbabaev and Oparin (Archaeology of the Eurasian Steppes, 2024, quoting Shami),
// Warfare History Network on Timur, e-history.kz on Anrakay, and the works those pages cite
// (Juvayni, Ibn al-Athir, Rashid ad-Din, Erofeeva 2007, Divaev 1905, Tynyshpaev 1927/1929).
// Only terms not defined elsewhere are added to the glossary.

Object.assign(GLOSSARY, {
  "estandarte": "Bandeira de guerra de um chefe. Marcava onde ele estava e servia de ponto de reunião: quando caía ou sumia, os soldados podiam achar que o comandante tinha morrido.",
  "batyr": "Guerreiro de fama, herói de batalha entre os povos turcos da Ásia Central. Os batyrs cazaques lideravam tropas e contavam com grande prestígio.",
  "juz": "As três grandes federações de tribos cazaques, também chamadas de hordas: a Grande (no sudeste), a Média (no centro e norte) e a Pequena (no oeste). Cada uma tinha seus próprios chefes.",
  "kurultai": "Assembleia de chefes e nobres dos povos turcos e mongóis, convocada para escolher um cã ou decidir sobre uma guerra.",
  "calmucos": "Nome que russos e cazaques davam aos oirates, os mongóis do oeste, dos quais faziam parte os zungares. Nas tradições cazaques, 'calmuco' costuma querer dizer 'zungar'."
});

Object.assign(DEEP, {
  parwan: {
    war: "Conquista da Corásmia pelos mongóis (1219–1223)",
    hook: "Os mongóis perderam em campo aberto, num vale estreito. Mas os vencedores brigaram pelo saque e jogaram a vitória fora.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1219, Gêngis Khan invadiu a [[corásmia]] para vingar uma caravana de comerciantes mongóis, morta na cidade de Otrar, e porque o [[xá]] Muhammad II se recusou a punir o governador que a tinha mandado matar. O xá apostou em defender as cidades, uma por uma, atrás das muralhas. Não funcionou: as cidades foram caindo, e ele fugiu. Morreu em dezembro de 1220, numa ilha do mar Cáspio, e deixou o título ao filho, Jalal ad-Din.",
        "Jalal ad-Din, ao contrário do pai, queria lutar em campo aberto. Em 1221 ele montou uma base em Ghazni, no atual Afeganistão, e foi juntando tropas de todo canto. As fontes não concordam sobre quantas: o cronista Juzjani fala em 60.000, e uma fonte moderna lembra que ele chegou a reunir uns 80.000 em Ghazni, contando 30.000 trazidos por Temur Malik, o homem que tinha defendido a cidade de Khojand.",
        { h: "O caminho até Parwan" },
        { timeline: [
          ["1219", "Gêngis Khan invade a Corásmia."],
          ["Dezembro de 1220", "Morre o xá Muhammad II. Jalal ad-Din herda o título e junta forças no Afeganistão."],
          ["Cerca de 1221", "Em Valiyan, ao norte de Cabul, Jalal ad-Din ataca uma força mongol que sitiava a cidade e mata uns mil homens."],
          ["Setembro de 1221 (data discutida)", "Batalha de Parwan, no vale do Hindu Kush."],
          ["Fim de 1221", "Gêngis Khan alcança Jalal ad-Din no rio Indo."]
        ]},
        "Gêngis Khan estava mais ao norte, nas montanhas. Ao saber de Valiyan, mandou contra Jalal ad-Din um exército sob o comando de Shigi Qutuqu, seu filho adotivo, que já tinha vencido algumas batalhas na campanha."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Jalal ad-Din Mingburnu" },
        "O filho do xá era o comandante corásmio que ainda queria lutar de verdade. Sabia que seu exército era de infantaria em grande parte, mal equipado perto do mongol, e que não podia vencer um combate de manobra em campo aberto. Por isso escolheu o terreno, e escolheu bem: um vale tão apertado que a vantagem dos mongóis, a velocidade, deixava de contar.",
        { h: "Shigi Qutuqu" },
        "Filho adotivo de Gêngis Khan, um dos seus homens de confiança, e depois juiz-chefe do império. Tinha vencido várias batalhas pequenas naquele ano e, segundo as fontes, entrou em Parwan confiante demais. Subestimou o inimigo e o terreno.",
        { h: "Os chefes de Jalal ad-Din" },
        "Jalal ad-Din dividiu o exército em alas, e os nomes dos comandantes aparecem nas crônicas. Malik Khan comandava a ala direita. Saif ad-Din Ighraq liderava os afegãos, soldados das montanhas. Amin Malik, tio materno de Jalal ad-Din, comandava os turcos. Entre os dois últimos, a briga que viria depois decidiu a campanha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são muito discutidos. Para os mongóis, o cronista persa Juvayni fala em 30.000, Juzjani em 45.000 e al-Umari em 70.000. Entre os modernos, a faixa vai de 30.000 (Dupuy e De Hartog) a 70.000 (Şahin). Para o lado de Jalal ad-Din, os cronistas medievais repetem 60.000, enquanto os modernos vão de 30.000 a 120.000. O historiador Sverdrup propõe números bem menores, uns 15.000 corásmios, em grande parte a pé.",
        { note: "Os números dos dois lados vêm de cronistas que escreviam muito tempo depois, e quase todos são redondos. O que as fontes concordam é no desenho geral: um exército corásmio com muita infantaria contra uma cavalaria mongol, num vale apertado." },
        { h: "O terreno" },
        "Um vale estreito e pedregoso na região de Parwan, ao norte de Cabul, nas montanhas do Hindu Kush. O lugar exato não é certo. Para cavaleiros mongóis, acostumados à planície, era o pior terreno possível: não dava para correr em volta do inimigo, e o chão de pedra atrapalhava os cavalos.",
        { h: "A batalha em movimentos" },
        { formation: true },
        "Primeiro, Jalal ad-Din mandou que parte dos seus [[arqueiros a cavalo|arqueiro a cavalo]] descesse dos cavalos e lutasse a pé, atirando do chão. Era o contrário do que os mongóis esperavam, e uma solução para o espaço apertado: infantaria presa ao terreno, em vez de cavaleiros que precisassem correr.",
        "Segundo, o combate começou com o choque das duas alas. A ala direita de Malik Khan empurrou a ala esquerda mongol de volta até a sua base. No centro, as cargas mongóis esbarraram nos arqueiros a pé e perderam força.",
        "Terceiro, o truque. Shigi Qutuqu mandou fazer bonecos, que as fontes descrevem como de feltro (ou de palha, segundo uma versão), e os pôs montados nos cavalos de reserva, para parecer que tinha mais tropas do que tinha. Jalal ad-Din não caiu na isca.",
        "Quarto, a ala direita mongol atacou os afegãos de Ighraq. Os afegãos responderam a pé, com arcos, e os mongóis fizeram uma [[retirada fingida]]. Os homens de Ighraq foram atrás e foram pegos: os mongóis viraram e mataram uns 500.",
        "Quinto, o momento decisivo. Jalal ad-Din liderou pessoalmente um contra-ataque pelo centro. Os mongóis cederam, a retirada virou fuga, e muitos dos que foram capturados acabaram executados. Segundo Tanner, Shigi Qutuqu perdeu mais da metade do seu exército.",
        { note: "A duração da batalha varia: muitos resumos falam em dois dias, mas a descrição mais detalhada distribui os combates por três. O desfecho é o mesmo em todas." },
        { h: "Depois da vitória" },
        "À noite, a briga. Segundo uma tradição, a causa foi um cavalo branco capturado dos mongóis, que dois comandantes quiseram para si. Amin Malik bateu em Ighraq com o chicote, e Jalal ad-Din não puniu o tio. Ofendido, Ighraq foi embora no meio da noite com os afegãos, os khalaj e parte dos qanqli, e levou boa parte do exército.",
        "Jalal ad-Din ainda tentou reconquistar os aliados, sem sucesso. Com o que sobrou, uns 30.000 homens segundo Tucker, ele deixou Parwan e foi para a Índia."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Foi uma das poucas derrotas mongóis em batalha campal na conquista do mundo muçulmano, e as crônicas muçulmanas a celebraram. Houve revoltas em Merv, Herat e Bucara. Mas Gêngis Khan reagiu rápido: foi pessoalmente ao campo de batalha. Segundo Rashid ad-Din, culpou Shigi Qutuqu e os comandantes por não terem estudado o terreno. Depois, marchou para o sul à procura de Jalal ad-Din.",
        "Jalal ad-Din, segundo Ibn al-Athir, mandou a Gêngis uma mensagem provocadora, perguntando onde ele queria lutar. Sem o exército inteiro, porém, não aguentou. Em novembro de 1221, os mongóis o alcançaram na margem do Indo e destruíram a maior parte da sua tropa. Ele saltou no rio a cavalo, armado, e chegou à outra margem. Segundo a tradição, Gêngis Khan, impressionado, proibiu que atirassem nele.",
        { h: "Por que importa" },
        "Parwan mostra que os mongóis podiam ser vencidos quando perdiam sua principal arma, a mobilidade. Jalal ad-Din combateu na Índia, na Pérsia e no Cáucaso até agosto de 1231, quando um curdo o matou nas montanhas de Silvan. É lembrado como o último grande defensor da Corásmia.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data e o local: a batalha costuma ser datada de setembro de 1221, mas alguns textos a colocam antes, e o lugar exato (em Parwan, ao norte de Cabul) é incerto. Ibn al-Athir fala de outra derrota mongol perto de Cabul, e Sverdrup diz que pode ter havido mais de um combate nessa região." },
        { note: "Os bonecos: o truque de pôr figuras nos cavalos de reserva aparece em vários relatos de guerra mongol. Não sabemos se aqui foi de feltro, de palha ou os dois, nem em qual dia." },
        { note: "Os cronistas medievais (Juvayni, Nasawi, Ibn al-Athir, Juzjani) escreveram anos depois e divergem em detalhes, o que explica os números e as datas tão diferentes." }
      ]}
    ]
  },

  kondurcha: {
    war: "Guerra entre Timur e Tokhtamysh (1389–1395)",
    hook: "Timur atravessou a estepe por quatro meses atrás de um inimigo que fugia, e só o alcançou quando já quase não tinha comida.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Tokhtamysh e Timur eram, antes, amigos. Em 1378, Timur ajudou Tokhtamysh, um descendente de Gêngis Khan, a conquistar o trono da Horda Branca. Dois anos depois, Tokhtamysh juntou a Horda Branca com a [[horda dourada]] e se tornou o governante de uma das maiores potências do leste da Europa. Em 1382, saqueou Moscou.",
        "Os dois tinham o mesmo problema: queriam as mesmas terras. Timur tomou o Azerbaijão, que Tokhtamysh considerava seu, e o cã respondeu atacando os domínios de Timur, onde chegou a cercar Samarcanda por pouco tempo, antes de ser rechaçado. Timur decidiu acabar com a ameaça de vez.",
        { h: "O caminho até o Kondurcha" },
        { timeline: [
          ["1378", "Timur apoia Tokhtamysh na conquista do trono da Horda Branca."],
          ["1385", "Tokhtamysh ataca o Azerbaijão. Começa a luta aberta com Timur."],
          ["Fevereiro de 1391", "Timur parte de Tashkent para as estepes do norte."],
          ["Cerca de quatro meses depois", "Timur atravessa o rio Yaik (Ural) e força o combate."],
          ["18 de junho de 1391", "Batalha do rio Kondurcha."]
        ]},
        "A campanha de 1391 foi uma das maiores expedições militares da Idade Média. Timur partiu de Tashkent com mais de 100.000 homens, subiu uns mil quilômetros para o norte, entrou na [[estepe]] e depois seguiu para o oeste numa frente larga. No norte, os dias de verão eram longos demais, e os soldados muçulmanos reclamavam que isso atrapalhava o horário das orações. Por mais de quatro meses ele perseguiu um inimigo que não aparecia."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Timur (Tamerlão), cerca de 55 anos" },
        "Governante da [[transoxiana]] e conquistador de boa parte da Ásia. Não era descendente de Gêngis Khan, e por isso nunca usou o título de cã: governava em nome de um fantoche da linhagem. Era um comandante cuidadoso, que preparava a logística com meses de antecedência. Ordenou que cada soldado levasse comida para um ano, segundo os cronistas Abd ar-Razzaq e Mirkhond.",
        { h: "Tokhtamysh" },
        "Cã legítimo, descendente de Gêngis Khan, e por isso com mais prestígio que Timur entre os povos da estepe. Sabia que, num ataque direto, perderia. Sua estratégia foi a do deserto: recuar para o norte, queimar o capim, acender fogueiras falsas para parecer maior e fazer o inimigo se esgotar. Quase funcionou.",
        { h: "Os generais de Timur" },
        "Três parentes dele comandavam o exército. Segundo a Wikipédia, Umar Shaykh, seu filho, estava na ala esquerda. Miran Shah, outro filho, comandava a ala direita. O neto Muhammad Sultan, que tinha começado a campanha como batedor, comandava o centro. O próprio Timur ficou na retaguarda."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são muito vagos. Para Timur, a Wikipédia fala em cerca de 100.000, a Wikipédia russa (citando Mirgaleev) em 300.000 a 400.000, e um pesquisador russo diz que não podiam passar de 80.000. Para a Horda, as estimativas vão de 180.000 a 300.000. Entre os aliados de Tokhtamysh havia alanos, circassianos e russos. Os mortos são dados como uns 100.000 nos dois lados. Os cronistas de ambos os lados gostavam de números enormes.",
        { note: "Os números dos dois exércitos são o ponto mais incerto. A conta dos mortos vem de um cronista de Adrianópolis (Muhammad ibn Muhammad) e de um mapa do século XV. Usamos as faixas, não um valor." },
        { h: "O terreno" },
        "O rio Kondurcha, afluente do Sok, que corre para o Volga, na atual região de Samara. A planície era larga, com uma leve inclinação. O local exato é discutido: há três hipóteses, e a mais recente a põe perto da confluência dos rios Kondurcha e Sok. Desde 2023 um projeto russo-uzbeque procura vestígios do campo de batalha. Um texto russo dá a data como 18 de julho, mas a data mais aceita é 18 de junho.",
        { h: "A marcha" },
        "Tokhtamysh sabia da invasão e chamou as tropas das duas alas. Sua vanguarda incomodava o inimigo, acendia fogueiras falsas e queimava a pastagem. Planejou uma emboscada na travessia de Kryk-Kul, no Yaik, mas Timur cruzou o rio sem ser visto, mais acima, e o cã teve que recuar. O exército de Timur passou a ter fome: contam que os soldados ficaram reduzidos a mingau e caldo. Num conselho de guerra, Timur mandou à frente uma força de uns 20.000 cavaleiros sob Umar Shaykh, que alcançou Tokhtamysh e o obrigou a lutar.",
        { h: "A batalha em movimentos" },
        { formation: true },
        "Primeiro, Timur dispôs o exército em alas: Umar Shaykh à esquerda, Muhammad Sultan no centro, Miran Shah à direita. Segundo Shami, citado por pesquisadores modernos, mandou também os mais bravos avançarem a pé e armou uma tenda e tapetes à vista de todos, como se não tivesse pressa. Era um truque psicológico para dar coragem aos seus e provocar o inimigo.",
        "Segundo, a Horda atacou com fúria e tentou [[flanquear]] o exército de Timur pelos dois lados, o velho método de envolvimento dos povos da estepe, a [[tulughma]]. O ataque foi forte.",
        "Terceiro, o momento de perigo: o corpo de Umar Shaykh ficou separado do resto e quase foi destruído. Tropas da Horda chegaram à retaguarda do exército de Timur, e ele precisou virar as forças para trás. Por um tempo, a vitória pareceu estar com a Horda.",
        "Quarto, a Horda falhou. Alguns [[emires|emir]] que comandavam os corpos das alas recuaram depois do cerco, e a frente da Horda ficou esticada, sem coordenação, com um buraco. A Wikipédia russa dá como causa principal da derrota o suborno de comandantes e porta-[[estandartes|estandarte]] da Horda, mas essa é a leitura de um historiador (Mirgaleev), e não uma certeza.",
        "Quinto, a defesa de Timur segurou, e vieram os contra-ataques de Miran Shah e Muhammad Sultan contra o centro e a ala da Horda. Tokhtamysh deixou o campo, o que causou pânico entre suas tropas. Muitos foram perseguidos e mortos, e boa parte, encurralada entre o inimigo e o Volga, foi capturada ou morta.",
        { note: "Em resumos populares, a batalha acaba quando a bandeira de Tokhtamysh cai. As fontes consultadas falam em estandartes subornados e em recuos de emires, não numa bandeira que caiu." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória de Timur. Tokhtamysh escapou com parte do exército, mas a [[horda dourada]] perdeu uma parte enorme de suas forças. Timur ficou mais de um mês no Volga, em festas, e voltou para casa sem tentar dominar a região. Tokhtamysh manteve o trono. Quatro anos depois, em abril de 1395, Timur o derrotou de novo, no rio Terek, e dessa vez as cidades da Horda (Sarai, Astracã e outras) foram destruídas. Tokhtamysh perdeu o trono, e o emir Edigu o substituiu.",
        { h: "Por que importa" },
        "A [[horda dourada]] nunca se recuperou por inteiro. Muitos historiadores (Vernadsky, Gumilev e outros) veem em Kondurcha e no Terek o começo do fim do poder mongol na Rússia. Egorov discorda: acha que a economia da Horda continuou forte e que Tokhtamysh manteve o poder. De qualquer jeito, a campanha foi uma proeza de logística: atravessar a estepe com 100.000 homens ou mais.",
        { h: "Curiosidades e controvérsias" },
        { note: "O local: duas outras hipóteses pedem a batalha no distrito de Sergievsk ou perto de Koshki. Em 2024, os arqueólogos Matbabaev e Oparin propuseram a confluência dos rios Kondurcha e Sok, onde existe um fosso de uns 13 km, de origem muito antiga, que Timur pode ter reaproveitado. É uma hipótese, ainda sem prova." },
        { note: "As fontes: o relato mais detalhado vem dos cronistas de Timur, como Shami e Yazdi, que escreviam para glorificá-lo." }
      ]}
    ]
  },

  bulanty: {
    war: "Guerra entre cazaques e zungares (1723–1730)",
    hook: "Dizem que foi o dia em que os cazaques, depois de anos de fuga, voltaram a vencer. Mas ninguém escreveu isso na época.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1723, depois de um inverno duro, os zungares atacaram os cazaques. O [[canato]] zungar, dos [[oirates]], era o último grande império nômade da estepe, e seu cã Tsewang Rabtan mandou uma força de mais de 30.000 homens, sob o filho Lobsangsür. Os [[zungares]] tomaram Turquestão, Sayram e Tashkent. Os cazaques chamam esses anos de Aqtaban Shubyryndy, a 'fuga dos pés descalços': famílias inteiras fugiram para o sul, sem tempo de pegar nada.",
        "Os cazaques eram divididos em três [[juz]], as hordas, que muitas vezes agiam por conta própria. A Grande e a Média sofreram mais. A Pequena fugiu para o oeste, na direção de Khiva e Bucara.",
        { timeline: [
          ["1723", "Invasão zungar. Começa a 'fuga dos pés descalços'."],
          ["1726", "Em Ordabasy, um [[kurultai]] escolhe Abulkhair como comandante dos cazaques."],
          ["1726 a 1728 (data discutida)", "Batalha de Bulanty, na região de Ulytau."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        "Abulkhair, cã da Horda Pequena, foi o comandante escolhido pelo kurultai. Ao lado dele, a tradição cita o [[batyr]] Bogenbai, entre outros heróis. Do lado zungar, as fontes não dão nome nenhum para esta batalha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "O que se conta" },
        "Segundo a tradição, os chefes cazaques se juntaram contra o inimigo comum, e Abulkhair atacou os zungares nas margens do rio Bulanty, perto das montanhas de Ulytau, no centro do atual Cazaquistão. Os zungares foram vencidos e expulsos da região. Não existem números de nenhum dos lados, nem relato dos movimentos.",
        { note: "Esta batalha não aparece em documentos da época. A lenda foi registrada pela primeira vez em 1905, por A. Divaev, cerca de 175 anos depois. A historiadora I. Erofeeva (2007) lembra que muitos livros recentes sobre as guerras cazaque-zungares se apoiam em folclore sem citar a fonte, e que esse relato tem traços de mito. Por isso não há diagrama de manobras: nenhuma fonte descreve a disposição das tropas." },
        { note: "A data: costuma ser dada como 1727 (primavera), mas outras obras falam em 1726, e há quem dê 1728. Ninguém sabe ao certo." }
      ]},
      { n: "04", title: "Legado", blocks: [
        "Na memória cazaque, Bulanty é a primeira grande vitória depois dos anos de derrota, e o lugar ficou conhecido como 'onde os calmucos morreram' ([[calmucos]] é o nome que os cazaques davam aos zungares). A guerra continuou: a batalha seguinte, Anrakay, é contada como a maior vitória. Os zungares só foram destruídos de vez por outro império, o Qing da China, entre 1755 e 1757."
      ]}
    ]
  },

  anrakay: {
    war: "Guerra entre cazaques e zungares (1723–1730)",
    hook: "É a maior vitória da memória cazaque. Os documentos da época nem a mencionam.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de Bulanty, a guerra continuou. Em 1729 os zungares entraram em guerra com a China dos Qing, o que levou suas forças para o leste e enfraqueceu sua posição no oeste. Para o lado cazaque, a oportunidade era retomar as terras do sul, na região de Jetisu, perto do lago Balkhash (Jetisu quer dizer 'sete rios').",
        { timeline: [
          ["1723", "Invasão zungar."],
          ["1726", "Kurultai de Ordabasy. Abulkhair é escolhido comandante."],
          ["1729", "Os zungares entram em guerra com os Qing."],
          ["Entre dezembro de 1729 e abril de 1730 (data discutida)", "Batalha de Anrakay."],
          ["1731", "Abulkhair pede proteção à Rússia."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        "Abulkhair, cã da Horda Pequena, comandava os cazaques. As narrativas populares citam também os batyrs Bogenbai, Kabanbai e outros. Do lado zungar, a tradição fala em Galdan Tseren, o governante, e em um genro dele, com nomes escritos de várias maneiras."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "O que se conta" },
        "A narrativa popular, que não tem documentos por trás, diz o seguinte. Em vez de avançar pela grande estrada dos calmucos, onde os zungares eram mais fortes, os cazaques chegaram pelo sudeste do lago Balkhash. Três destacamentos de cavalaria participaram: dois fecharam os vales de Sarybulak e Kapaly, e um atacou o forte zungar de Kalmyktobe. Fuzileiros cazaques de mecha forçaram os zungares a fugir, e os que correram para o desfiladeiro de Anrakay encontraram arqueiros. O ataque inesperado quebrou os zungares.",
        "Quantos eram? Um texto fala em 2.000 a 3.000 cazaques contra alguns milhares de zungares, e em 30.000 a 40.000 homens no total. A Wikipédia russa dá até 30.000 cazaques. Esses números são estimativas modernas. Um autor diz que a luta durou um mês e meio, outros falam em dias.",
        { note: "A batalha não aparece em documentos da época, nem nos poetas populares Bukhar, Umbetai e Tatikara, nem nos pesquisadores do século XIX, como Vlangali e Valikhanov. A lenda foi registrada em 1905 por A. Divaev. M. Tynyshpaev tentou localizar os eventos em 1927 e 1929. A historiadora I. Erofeeva (2007) critica a literatura recente: diz que muita coisa sobre local, números e nomes é fantasia, moldada por ideologia e pela construção da identidade nacional. Por isso não fazemos diagrama de movimentos." },
        { note: "A data varia: dezembro de 1729 a janeiro de 1730, abril de 1730, ou apenas 1729 ou 1730, conforme o autor. Um texto prefere 1730 porque a guerra com a China, em 1729, teria tirado os zungares do oeste." }
      ]},
      { n: "04", title: "Legado", blocks: [
        "Segundo a tradição, os cazaques expulsaram os zungares do noroeste de Jetisu e voltaram a ocupar a região do rio Ili. A narrativa popular conta que, logo depois da vitória, os chefes das hordas brigaram pela liderança e a aliança se desfez. Em 1731, Abulkhair pediu a proteção da Rússia, um passo que dividiu os cazaques.",
        "Hoje, Anrakay é símbolo de união nacional no Cazaquistão: um monumento lembra a batalha, e, segundo a tradição, o nome quer dizer algo como 'lugar do gemido' do inimigo. A guerra com os zungares só acabou com a destruição do canato pelos Qing, em 1755–1757."
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  parwan: {
    terrain: [
      { t: "hill", x: 5, y: 35, rx: 6, ry: 28, l: "Encosta" },
      { t: "hill", x: 95, y: 35, rx: 6, ry: 28, l: "Encosta" },
      { t: "note", x: 50, y: 68, l: "Vale estreito e pedregoso (posições simplificadas)" }
    ],
    units: [
      { id: "jL", s: "a", k: "inf", w: 16, h: 5, l: "Ighraq e os afegãos" },
      { id: "jC", s: "a", k: "inf", w: 22, h: 5, l: "Jalal ad-Din (centro)" },
      { id: "jR", s: "a", k: "inf", w: 16, h: 5, l: "Malik Khan" },
      { id: "jT", s: "a", k: "cav", w: 12, h: 4, l: "Amin Malik e os turcos" },
      { id: "mR", s: "b", k: "cav", w: 16, h: 5, l: "Ala direita mongol" },
      { id: "mC", s: "b", k: "cav", w: 22, h: 5, l: "Shigi Qutuqu (centro)" },
      { id: "mL", s: "b", k: "cav", w: 16, h: 5, l: "Ala esquerda mongol" },
      { id: "mS", s: "b", k: "cav", w: 14, h: 3, l: "Cavalos de reserva (bonecos)" }
    ],
    steps: [
      { t: "Jalal ad-Din fecha o vale com arqueiros desmontados, que atiram do chão. Os mongóis chegam com a cavalaria, que no espaço apertado não consegue manobrar.",
        p: { jL: [22, 50], jC: [50, 52], jR: [78, 50], jT: [50, 61], mR: [22, 16], mC: [50, 14], mL: [78, 16], mS: [50, 5] } },
      { t: "A ala de Malik Khan empurra a ala esquerda mongol de volta até a sua base.",
        p: { jR: [78, 38], mL: [86, 12] } },
      { t: "Shigi Qutuqu manda cargas pelo centro. Os arqueiros a pé de Jalal ad-Din atiram sem parar, e as cargas perdem força.",
        p: { mC: [50, 26], jC: [50, 46] } },
      { t: "Shigi Qutuqu põe bonecos nos cavalos de reserva, para parecer que tem reforços.",
        p: { mS: [50, 16], mC: [50, 24] } },
      { t: "Jalal ad-Din não se assusta. Mantém a linha e a tropa fica firme.",
        p: { jC: [50, 42], jT: [50, 54] } },
      { t: "A ala direita mongol ataca os afegãos de Ighraq, que respondem a pé, com arcos.",
        p: { mR: [24, 34], jL: [22, 44] } },
      { t: "Os mongóis fingem fugir. Os homens de Ighraq correm atrás, e os mongóis viram e matam cerca de 500 deles.",
        p: { mR: [24, 24], jL: [22, 30] } },
      { t: "Jalal ad-Din lidera pessoalmente um contra-ataque pelo centro.",
        p: { jC: [50, 30], jT: [58, 38], mC: [50, 18] } },
      { t: "Os mongóis cedem e fogem. Shigi Qutuqu perde mais da metade do exército, segundo Tanner.",
        p: { mC: [50, 4], mL: [88, 5], mR: [14, 5], mS: [50, 3], jC: [50, 20], jR: [78, 26], jL: [24, 22] }, x: ["mC", "mL", "mR", "mS"] },
      { t: "À noite, uma briga pelo saque separa Ighraq de Amin Malik. Ighraq vai embora com os afegãos, e Jalal ad-Din perde boa parte do exército.",
        p: { jL: [8, 64], jC: [50, 30], jR: [78, 30], jT: [58, 38] } }
    ]
  },

  kondurcha: {
    terrain: [
      { t: "note", x: 50, y: 69, l: "Rio Kondurcha (o local exato é discutido; posições simplificadas)" }
    ],
    units: [
      { id: "tL", s: "a", k: "cav", w: 16, h: 5, l: "Umar Shaykh" },
      { id: "tC", s: "a", k: "cav", w: 20, h: 5, l: "Muhammad Sultan (centro)" },
      { id: "tR", s: "a", k: "cav", w: 16, h: 5, l: "Miran Shah" },
      { id: "tT", s: "a", k: "cav", w: 18, h: 4, l: "Timur (retaguarda)" },
      { id: "hW", s: "b", k: "cav", w: 20, h: 5, l: "Ala oeste da Horda" },
      { id: "hC", s: "b", k: "cav", w: 22, h: 5, l: "Tokhtamysh (centro)" },
      { id: "hE", s: "b", k: "cav", w: 20, h: 5, l: "Ala leste da Horda" }
    ],
    steps: [
      { t: "Timur põe Umar Shaykh na ala esquerda, Muhammad Sultan no centro e Miran Shah na direita. Ele fica na retaguarda. A Horda se estende à frente.",
        p: { tL: [20, 52], tC: [50, 50], tR: [80, 52], tT: [50, 62], hW: [18, 16], hC: [50, 15], hE: [82, 16] } },
      { t: "Timur manda os mais bravos avançarem a pé e arma uma tenda com tapetes à vista de todos, para mostrar calma e provocar a Horda (relato de Shami).",
        p: { tC: [50, 46] } },
      { t: "A Horda ataca com fúria e tenta cercar o exército de Timur pelos dois lados.",
        p: { hW: [12, 38], hE: [90, 36], hC: [50, 24] } },
      { t: "O corpo de Umar Shaykh se separa do resto e quase é destruído. Tropas da Horda chegam à retaguarda.",
        p: { tL: [20, 44], hW: [14, 54] } },
      { t: "Timur precisa virar as forças para trás e enfrentar a Horda na retaguarda.",
        p: { tT: [32, 60, -30], hW: [14, 60] } },
      { t: "Emires das alas da Horda recuam depois do cerco. A frente fica esticada, sem coordenação, e abre-se um buraco entre as alas e o centro.",
        p: { hW: [8, 40], hE: [92, 20], hC: [50, 20] } },
      { t: "Miran Shah e Muhammad Sultan contra-atacam o centro e a ala da Horda.",
        p: { tR: [74, 32], tC: [52, 36], tL: [22, 46] } },
      { t: "Tokhtamysh deixa o campo. Sem o cã, as tropas entram em pânico.",
        p: { hC: [50, 6], tC: [52, 26] }, x: ["hC"] },
      { t: "A Horda foge e é perseguida pelos timúridas. Muitos ficam encurralados entre o inimigo e o Volga.",
        p: { hW: [10, 14], hE: [92, 8], tL: [22, 34], tC: [52, 20], tR: [76, 22] }, x: ["hW", "hE"] }
    ]
  }
});
