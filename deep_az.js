// In-depth battles, batch az: sinai1967, hue, fazendachinesa, khorramshahr, cuitocuanavale (contemporary wars pack).
// Checked against the English Wikipedia articles on the Six-Day War, the Battle of Abu-Ageila, the Battle of Hue and the
// Massacre at Hue, the Battle of the Chinese Farm, the Battle of Khorramshahr (1982), Operation Beit ol-Moqaddas, the
// Iran-Iraq War and the Battle of Cuito Cuanavale, plus the works those pages cite (Pike, Willbanks, Bowden, Karsh,
// Pollack, Razoux, Polack, Herbst, Vanneman, Hampson). Where sources or the two sides disagree the text says so.
// Diagrams: Sinai, Hue and the Chinese Farm. Khorramshahr and Cuito Cuanavale have no diagram because the sources
// consulted do not describe their deployments and moves in enough detail.

Object.assign(GLOSSARY, {
  "estreito de tiran": "Passagem estreita entre o Sinai e a Arábia Saudita, na entrada do golfo de Ácaba. É a única saída do porto israelense de Eilat para o mar Vermelho.",
  "força de paz da onu": "Tropas da ONU (a UNEF) postas no Sinai e em Gaza depois da crise de 1956 para ficar entre o Egito e Israel. O Egito pediu a saída delas em maio de 1967.",
  "ataque preventivo": "Ataque lançado antes que o inimigo ataque, para impedi-lo. Quem ataca diz que foi defesa, e quem sofre diz que foi agressão. Os historiadores discordam sobre cada caso.",
  "centurion": "Carro de combate britânico com canhão de 105 mm, muito usado por Israel em 1967.",
  "t-34": "Carro de combate soviético da Segunda Guerra Mundial. O T-34/85, com canhão de 85 mm, ainda servia no exército egípcio em 1967.",
  "caça-tanques": "Veículo blindado com um canhão potente, sem torre giratória, feito para destruir carros de combate. O SU-100 egípcio era um deles.",
  "meia-lagarta": "Veículo militar com rodas na frente e esteiras atrás, usado para levar soldados em terreno difícil.",
  "tet": "O Ano-Novo lunar do Vietnã, a maior festa do país, com uma trégua combinada entre os lados. Em 1968, os comunistas atacaram durante ela.",
  "ofensiva do tet": "Ataque simultâneo do Vietnã do Norte e do Vietcongue, a partir de 30 e 31 de janeiro de 1968, contra dezenas de cidades e bases do Sul. Militarmente fracassou, mas abalou a confiança do público americano.",
  "vietcongue": "Guerrilheiros comunistas do Sul do Vietnã, aliados do Vietnã do Norte.",
  "pavn": "Exército Popular do Vietnã, as tropas regulares do Vietnã do Norte (em inglês, PAVN).",
  "arvn": "Exército da República do Vietnã, as tropas regulares do Vietnã do Sul, aliado dos Estados Unidos.",
  "macv": "Comando de Assistência Militar dos EUA no Vietnã, que dirigia a presença americana. Em Huế, o complexo do MACV abrigava cerca de cem conselheiros.",
  "cidadela de huế": "Recinto murado na margem norte do rio dos Perfumes, com cerca de 2,5 km de lado. Guardava a Cidade Imperial, o palácio dos imperadores Nguyễn, e abrigava metade da população.",
  "combate casa a casa": "Luta dentro de uma cidade, rua por rua e cômodo por cômodo. O atacante perde a vantagem dos blindados e da artilharia, e cada esquina pode ter um atirador.",
  "linha bar-lev": "Cadeia de fortes de areia que Israel mantinha na margem leste do canal de Suez, desde a guerra de 1967.",
  "operação badr": "Nome da travessia do canal de Suez pelo Egito, em 6 de outubro de 1973, que abriu a Guerra do Yom Kippur.",
  "ponte rolante": "Ponte de aço em seções, feita para ser rebocada por terra até a beira da água e estendida de uma margem à outra. Israel levava uma para o canal de Suez.",
  "guarda revolucionária": "Força armada criada depois da revolução de 1979, separada do Exército e fiel ao regime islâmico do Irã.",
  "basij": "Milícia de voluntários ligada à Guarda Revolucionária. Reunia homens muito jovens e muito velhos, com pouco treino.",
  "shatt al-arab": "Rio formado pelo encontro do Tigre e do Eufrates, que corre até o golfo Pérsico e marca parte da fronteira entre o Irã e o Iraque. Os iranianos o chamam de Arvand Rud.",
  "rio karun": "Rio do sudoeste do Irã que desemboca no Shatt al-Arab, junto de Khorramshahr.",
  "fapla": "Forças Armadas Populares de Libertação de Angola, o exército do governo angolano do MPLA.",
  "unita": "Movimento angolano de oposição ao governo do MPLA, chefiado por Jonas Savimbi, apoiado pela África do Sul e pelos Estados Unidos.",
  "sadf": "Forças de Defesa Sul-Africanas, o exército da África do Sul.",
  "regime do apartheid": "Sistema de segregação racial da África do Sul, que dava todo o poder à minoria branca. Terminou nos anos 1990.",
  "obus g5": "Canhão de artilharia sul-africano de 155 mm e longo alcance, capaz de atirar a dezenas de quilômetros.",
  "triângulo de tumpo": "Faixa de terra a leste da cidade de Cuito Cuanavale, entre os rios Cuito, Tumpo e Dala, onde as tropas angolanas e cubanas se entrincheiraram atrás de campos minados.",
  "acordos de nova york": "Acordos de 22 de dezembro de 1988 entre Angola, Cuba e África do Sul, mediados pelos Estados Unidos. Previram a independência da Namíbia e a saída das tropas cubanas de Angola.",
  "guerra por procuração": "Guerra em que potências maiores lutam por meio de aliados menores, sem se enfrentar diretamente. A Guerra Fria teve várias, em Angola entre elas."
});

Object.assign(DEEP, {
  sinai1967: {
    war: "Guerra dos Seis Dias (5–10 de junho de 1967)",
    hook: "Em quatro dias, Israel tomou o Sinai inteiro, e a guerra foi decidida nas primeiras horas, no ar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Desde a crise de Suez, em 1956, uma [[força de paz da ONU|força de paz da onu]] ficava no Sinai e em Gaza, entre o Egito e Israel. Em 1967, as tensões voltaram. Em novembro de 1966, Egito e Síria tinham assinado um pacto de defesa. Em meados de maio, o presidente egípcio Gamal Abdel Nasser mandou tropas para o Sinai e pediu a saída da força da ONU, que saiu em 19 de maio. O Egito ocupou as posições que ela deixou, inclusive Sharm el-Sheikh.",
        "O passo seguinte foi o mais grave. Em 22 e 23 de maio, Nasser mandou fechar o [[estreito de Tiran]] aos navios israelenses. Israel já tinha dito que isso seria motivo de guerra. Em 30 de maio, o Egito assinou também um pacto com a Jordânia. Israel formou um governo de unidade nacional em 1º de junho e, em 4 de junho, decidiu atacar.",
        { h: "O caminho até 5 de junho" },
        { timeline: [
          ["nov 1966", "Egito e Síria assinam um pacto de defesa."],
          ["meados de mai 1967", "Nasser manda tropas ao Sinai."],
          ["19 mai", "A força de paz da ONU deixa o Sinai e Gaza."],
          ["22–23 mai", "Nasser manda fechar o estreito de Tiran aos navios israelenses."],
          ["1º jun", "Israel forma um governo de unidade nacional."],
          ["4 jun", "Israel decide atacar."],
          ["5 jun, 7h45", "Começa o ataque aéreo israelense."]
        ]},
        "Este texto trata só da frente do Sinai, a maior das três da guerra. A Jordânia e a Síria também lutaram, e Israel tomou a Cisjordânia, Jerusalém Oriental e as colinas de Golã."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gamal Abdel Nasser" },
        "Presidente do Egito e o líder árabe de maior prestígio da época. Em maio de 1967, tirou a força da ONU do Sinai e fechou Tiran. Antes da guerra, o rei Hussein da Jordânia o criticou por 'se esconder atrás da ONU'. Depois da derrota, Nasser renunciou, e as multidões nas ruas o fizeram voltar.",
        { h: "Abdel Hakim Amer" },
        "Marechal e comandante das forças armadas egípcias. Segundo a Wikipédia, foi ele quem ordenou a retirada do Sinai ao saber da queda de Abu Ageila, e Nasser aprovou. A ordem mandava sair em 24 horas, sem instruções detalhadas.",
        { h: "Do lado israelense" },
        "Yeshayahu Gavish chefiava o Comando Sul. Moshe Dayan era o ministro da Defesa. As três divisões blindadas do Sinai eram comandadas por Israel Tal (norte), Ariel Sharon (centro) e Avraham Yoffe, que cobria o espaço entre os dois. O coronel Danny Matt comandava os [[paraquedistas]] que Sharon usou em Abu Ageila."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo a Wikipédia, o Egito tinha cerca de 100.000 dos seus 160.000 soldados no Sinai, em sete divisões, com 900 a 950 carros de combate, cerca de 1.100 veículos blindados de transporte e mais de mil peças de artilharia. Israel tinha cerca de 70.000 homens e 700 carros no Sinai, em três divisões blindadas. As armas israelenses tinham canhões melhores e mais alcance: mais de cem [[Centurions|centurion]] e Super Shermans, com canhão de 105 mm, contra os [[T-34/85|t-34]] e os [[caça-tanques]] SU-100 da divisão egípcia em Abu Ageila.",
        { h: "O terreno" },
        "O Sinai é uma península de deserto, em forma de triângulo, com pouquíssimas estradas. Havia três eixos de avanço: a estrada da costa, de Rafah a El Arish; o eixo central, por Abu Ageila e Jebel Libni; e o sul. Entre as dunas e os morros, o fim da linha eram os desfiladeiros de Mitla e de Gidi, gargalos obrigatórios para quem queria chegar ao canal de Suez. Os egípcios tinham montado a defesa em camadas: a 7ª Divisão em Rafah, a 2ª em Um-Katef, a 3ª perto de Jebel Libni, e a 4ª Divisão Blindada mais atrás, na região de Bir Gifgafa e Bir Thamada.",
        { h: "Os primeiros dias em nove tempos" },
        { formation: true },
        "Primeiro, às 7h45 de 5 de junho, quase todos os caças israelenses (todos menos 12, de quase 200) atacaram aeródromos egípcios. A Wikipédia cita 338 aviões egípcios destruídos, número disputado, e outras fontes dão de 282 a 350. A rádio estatal egípcia chegou a anunciar, falsamente, a queda de 70 aviões israelenses no primeiro dia.",
        "Segundo, às 7h50, a divisão de Tal entrou pelo desfiladeiro de Rafah. Chegou ao entroncamento de Khan Yunis em pouco mais de quatro horas e atacou Sheikh Zuweid, defendida por duas brigadas egípcias. O desfiladeiro de Jiradi, no caminho, saiu caro: a Wikipédia dá 66 mortos, 93 feridos e 28 carros perdidos ali.",
        "Terceiro, no centro, Sharon atacou Um-Katef, em Abu Ageila, a cerca de 25 km da fronteira. As trincheiras, em três linhas paralelas com abrigos de concreto, estavam cobertas por artilharia e por um batalhão de carros de reserva. Os israelenses tinham cerca de 14.000 homens e 150 carros. Quanto aos egípcios, a Wikipédia dá 16.000 homens num artigo e 8.000 em outro, e as fontes não se acertam. O ataque frontal de carros da manhã de 5 de junho, baseado em informação de que a posição estava fraca, parou diante de um [[campo minado|campo minado]] e custou sete Centurions.",
        "Quarto, Sharon mudou o plano. Mandou carros pelas dunas, até a represa de Ruafa, e ordenou um ataque noturno de infantaria contra Um-Katef. Os paraquedistas de Matt deveriam descer atrás das linhas e calar a artilharia egípcia, mas só havia helicópteros para uma parte da força, e metade se perdeu no caminho.",
        "Quinto, na noite de 5 para 6 de junho, depois de uma barragem de artilharia de cerca de 6.000 tiros em menos de vinte minutos, a infantaria entrou nas trincheiras. Os engenheiros abriram caminho no campo minado até as 4h. A Wikipédia dá o início do ataque às 22h num artigo e à meia-noite em outro.",
        "Sexto, na manhã de 6 de junho, os carros israelenses atacaram os batalhões blindado e antitanque egípcios pelos dois lados. Em cerca de três horas, foram destruídos. Perto do meio-dia, Abu Ageila estava nas mãos de Israel, e a estrada para o centro do Sinai, aberta. No norte, a divisão de Tal entrou em El Arish na manhã de 6 de junho.",
        "Sétimo, a ordem de retirada egípcia, dada depois da queda de Abu Ageila, mandava sair em 24 horas e não dizia como. Muitas unidades largaram o equipamento pesado, e Israel capturou boa parte dele intacto. Yoffe avançou por areias que os egípcios consideravam intransitáveis e chegou ao entroncamento de Bir Lahfan, por onde os egípcios precisavam passar.",
        "Oitavo, de 6 para 7 de junho, as três divisões israelenses correram para o oeste. Uma coluna de Yoffe, pelo caminho de Bir Hasana e Bir Thamada, montou um bloqueio na boca leste do desfiladeiro de Mitla. Segundo uma das fontes, a divisão de Sharon foi para o sul e depois para o oeste até Mitla, e partes da de Yoffe se juntaram a ela. Só Gidi foi tomado antes de os egípcios chegarem. Os aviões israelenses, com [[napalm]], atacaram as colunas em retirada. O diplomata egípcio Mahmoud Riad afirmou que 10.000 homens morreram num só dia, número que não se confirma por fonte independente. Muitos outros morreram de sede, a pé, ao longo de uns 200 km até o canal.",
        "Nono, as unidades de Tal pararam em vários pontos do canal. Em 7 de junho, ao meio-dia e quinze, Dayan declarou o estreito de Tiran uma via internacional. Paraquedistas e comandos desceram em Sharm el-Sheikh, em grande parte abandonada, e, em 8 de junho, a infantaria chegou a Ras Sudar. O Egito aceitou o cessar-fogo em 8 de junho."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Israel ocupou, no total, cerca de 70.000 km²: o Sinai e Gaza, a Cisjordânia com Jerusalém Oriental, e as colinas de Golã. As perdas variam. Israel teve de 776 a 983 mortos em todas as frentes. O Egito teve de 9.800 (Gammasy) a 15.000 (Herzog) mortos ou desaparecidos, e 4.338 prisioneiros. Quanto aos carros, Nasser falou em 700 perdidos, e Israel contou 509 destruídos.",
        { h: "Por que importa" },
        "A vitória mudou o mapa do Oriente Médio e deixou questões abertas que ainda marcam a região. O Egito perdeu o Sinai, e o canal de Suez ficou fechado de 1967 a 1975. A derrota e a ocupação pesaram na guerra de 1973. O Sinai só voltou ao Egito com o tratado de paz de 1979.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem atacou primeiro? Os dois lados disseram, no começo, que o outro atacou. Israel depois admitiu ter atingido primeiro e chamou o golpe de [[ataque preventivo]]: afirmou que o Egito estava prestes a invadir. A visão árabe foi que o ataque não se justificava. Entre os estudiosos, muitos veem uma defesa preventiva, e outros, uma guerra de agressão." },
        { note: "Os números do ar: as perdas aéreas egípcias aparecem entre cerca de 280 e 350 aviões, conforme a fonte, e o número de 338 é o mais repetido. Também as baixas em Um-Katef variam entre os artigos que consultamos: 42 mortos israelenses e cerca de 2.000 baixas egípcias num, e 14 mortos israelenses e 300 mortos egípcios no outro." },
        { note: "A retirada: a ordem de Amer e Nasser, sem plano, transformou uma derrota em desastre. Segundo os relatos, muitas das mortes egípcias aconteceram na retirada." }
      ]}
    ]
  },

  hue: {
    war: "Guerra do Vietnã, Ofensiva do Tet (1968)",
    hook: "Em plena trégua da festa do Tet, a antiga capital imperial virou campo de batalha por mais de um mês.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Huế foi a capital dos imperadores Nguyễn de 1802 a 1945 e continuava sendo o coração cultural do Vietnã. Tinha quase 140.000 habitantes, era a terceira maior cidade do Vietnã do Sul e ficava dividida pelo rio dos Perfumes. Ao norte, a Cidadela, murada, com cerca de 2,5 km de lado. Ao sul, a cidade nova, com bairros, escolas, hospital e o complexo dos conselheiros americanos.",
        "Em 30 e 31 de janeiro de 1968, na festa do [[Tet|tet]], o Vietnã do Norte e o Vietcongue lançaram a [[Ofensiva do Tet|ofensiva do tet]] contra dezenas de cidades do Sul. Muitos soldados sul-vietnamitas estavam de licença, e Huế estava pouco defendida. Nos dias anteriores, os comandantes aliados tinham subestimado o número de atacantes: depois do fato, a inteligência estimou de 16 a 18 batalhões, entre 8.000 e 11.000 homens.",
        { h: "O caminho até Huế" },
        { timeline: [
          ["30–31 jan 1968", "Começa a Ofensiva do Tet. Em Huế, os atacantes entram na cidade às 2h33 de 31 de janeiro."],
          ["31 jan", "Os fuzileiros americanos chegam ao complexo do MACV, na margem sul."],
          ["2 fev", "A prisão da província é invadida, e cerca de 2.500 presos são soltos."],
          ["6–10 fev", "Os fuzileiros tomam a sede da província e o estádio."],
          ["15–16 fev", "Os fuzileiros tomam o portão de Dong Ba. O governo sul-vietnamita libera todo o poder de fogo contra a Cidadela."],
          ["24 fev", "A bandeira sul-vietnamita volta à torre da Cidadela."],
          ["2 mar", "Termina a operação de limpeza."]
        ]},
        "O MACV, o comando americano, mandou uma força de fuzileiros a partir da base de Phu Bai, 11 km ao sul. Os sul-vietnamitas tinham o quartel-general da 1ª Divisão no forte de Mang Ca, dentro da Cidadela."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ngô Quang Trưởng" },
        "General de brigada, comandante da 1ª Divisão sul-vietnamita, com quartel-general em Mang Ca. Coube a ele, com os batalhões da divisão e os paraquedistas, a limpeza do norte e do oeste da Cidadela. Em 5 de fevereiro, trocou as unidades que tinham parado.",
        { h: "Os fuzileiros americanos" },
        "O coronel Stanley Hughes comandava o 1º Regimento de Fuzileiros. O capitão Gordon Batcheller chegou com a Companhia A ao complexo do MACV. O tenente-coronel Marcus Gravel liderou uma companhia até a ponte Trường Tiền, e o tenente-coronel Ernie Cheatham montou, na universidade, uma base de ataque para a luta na cidade. O sargento John Canley assumiu a companhia de Batcheller quando este foi ferido.",
        { h: "Do outro lado" },
        "O lado comunista tinha forças do PAVN e do Vietcongue, comandadas pela região de Trị-Thiên-Huế. Segundo a Wikipédia, tinham listas de alvos entre soldados, funcionários e estrangeiros."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia lista, do lado aliado, 11 batalhões sul-vietnamitas, 4 do Exército americano e 4 dos Fuzileiros, cerca de 15.000 homens, mais apoio aéreo. Do lado comunista, 4 batalhões do PAVN e 8 do Vietcongue, 10.000 homens ou mais, e centenas de milicianos locais.",
        { h: "O terreno" },
        "O rio dos Perfumes separa a cidade nova, ao sul, da Cidadela, ao norte. Duas das pontes principais, a An Cuu e a Trường Tiền, foram destruídas nos primeiros dias, e atravessar de uma margem a outra ficou difícil. Dentro da Cidadela, a Cidade Imperial, com muralhas grossas e o palácio, era uma fortaleza ideal para quem defendia. A partir de 2 de fevereiro, chuva e teto baixo atrapalharam o apoio aéreo e de artilharia, e houve restrições a atacar edifícios históricos até meados do mês.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, antes do amanhecer de 31 de janeiro, os atacantes entraram na cidade. Às 2h33, um sinal luminoso marcou o começo. Uma equipe de [[sapadores]] abriu o portão de Chánh Tây, depois de matar os guardas com uniformes sul-vietnamitas, e o PAVN entrou na Cidadela.",
        "Segundo, às 8h, uma bandeira de libertação subiu na torre da Cidadela. Em 1º de fevereiro, uma coluna sul-vietnamita de socorro foi detida a uns 400 metros da muralha, e só ao meio-dia uma força de paraquedistas chegou a Mang Ca.",
        "Terceiro, na margem sul, a Companhia A do 1º Batalhão do 1º Regimento de Fuzileiros chegou ao complexo do MACV por volta das 15h15 de 31 de janeiro, depois de lutar casa a casa. A companhia de Gravel, que tentava a ponte Trường Tiền, foi repelida pelo fogo da muralha. Ao anoitecer, duas companhias tinham tido 10 mortos e 56 feridos.",
        "Quarto, de 2 a 4 de fevereiro, o ataque dos fuzileiros chegou à universidade e depois ao Tesouro, aos Correios e a duas escolas. Na noite de 2 de fevereiro, o PAVN invadiu a prisão da província e soltou cerca de 2.500 presos. No dia 4, a Companhia A perdeu mais da metade dos seus 147 homens, mortos ou feridos. À noite, sabotadores explodiram a ponte An Cuu.",
        "Quinto, dentro da Cidadela, a 1ª Divisão sul-vietnamita limpava o norte e o oeste com batalhões de infantaria e de paraquedistas. O 4º Batalhão do 2º Regimento, vindo de Mang Ca para o sul, em direção ao palácio, tinha matado mais de 700 inimigos até 4 de fevereiro. Em 5 de fevereiro, Trưởng trocou as unidades, porque esse batalhão tinha parado. Em 6 de fevereiro, os fuzileiros tomaram, sala por sala, a sede da província, onde ficava o posto de comando do 4º Regimento do PAVN. Em 7 de fevereiro, a ponte Trường Tiền foi destruída.",
        "Sexto, em 10 de fevereiro os fuzileiros tomaram o estádio e construíram uma ponte de [[pontões|pontão]] sobre o canal Phu Cam. Entre 11 e 13 de fevereiro, as últimas posições do sul foram sendo limpas, e uma força de fuzileiros vietnamitas foi transportada até Mang Ca.",
        "Sétimo, em 15 de fevereiro, fuzileiros americanos tomaram o portão de Dong Ba, na muralha da Cidadela, depois de seis horas de luta: 6 mortos e 50 feridos, contra 20 inimigos mortos. Em 16 de fevereiro, o vice-presidente Nguyễn Cao Kỳ autorizou o uso de toda a força necessária, sem poupar construções históricas.",
        "Oitavo, na noite de 20 de fevereiro, o PAVN começou a recuar por fases. Em 22 de fevereiro, a muralha sul estava em mãos aliadas. Rangers sul-vietnamitas varreram a ilha de Gia Hoi, de 22 a 25 de fevereiro, e prenderam centenas de quadros do Vietcongue.",
        "Nono, às 5h de 24 de fevereiro, a bandeira da República do Vietnã subiu na torre da Cidadela. À tarde, o palácio imperial foi retomado. Em 25 de fevereiro, o último foco, no canto sudoeste, foi eliminado. A operação Huế City, dos fuzileiros, terminou em 2 de março."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A batalha foi uma vitória aliada, e a cidade ficou arrasada: cerca de 80% foi destruída, e 116.000 dos 140.000 moradores perderam a casa. Do lado aliado, a Wikipédia dá 458 mortos e cerca de 2.700 feridos sul-vietnamitas. Para os americanos, Bowden dá 250 mortos e 1.554 feridos, e Hastings, 216 mortos e 1.584 feridos. O lado comunista aparece com 1.042 mortos na cidade (segundo um documento capturado do PAVN) ou 2.400 mortos e 3.000 feridos (segundo uma fonte do PAVN). O MACV afirmou ter matado 5.113.",
        "Entre os civis, Willbanks fala em 5.800 mortos ou desaparecidos, e Bowden, em mais de 8.000. Esses números incluem os mortos pelos combates e pelas execuções.",
        { h: "Por que importa" },
        "Militarmente, foi uma vitória aliada, mas a opinião pública americana se voltou contra a guerra nos meses seguintes. As primeiras declarações do MACV à imprensa minimizaram a luta. Em 27 de fevereiro, o apresentador Walter Cronkite pediu negociações num comentário muito citado. A tradição de que o presidente Johnson teria reagido a isso é questionada por historiadores.",
        { h: "Curiosidades e controvérsias" },
        { note: "O massacre de Huế: durante a ocupação, os comunistas executaram civis e prisioneiros. A estimativa é de 2.800 a 6.000 mortos. Douglas Pike, em 1970, contou cerca de 2.800 corpos achados em valas entre 1968 e 1969, e o governo sul-vietnamita listou 4.062 mortos ou sequestrados. Um documento capturado do Vietcongue falava em 2.720 pessoas 'eliminadas'." },
        { note: "O que dizem os outros lados: em 1968, Hanói disse que os mortos eram 'lacaios' com 'dívidas de sangue'. Em 1988, um coronel vietnamita afirmou que civis morreram 'por acidente, no fogo cruzado'. Alguns pesquisadores, como Ngô Vĩnh Long, dão números bem menores (710). Historiadores como Willbanks, Karnow e Kiernan concluem que houve execuções em massa." },
        { note: "As represálias: segundo estimativas, de 200 a 2.000 civis foram mortos por forças sul-vietnamitas depois da retomada. Os números são incertos." }
      ]}
    ]
  },

  fazendachinesa: {
    war: "Guerra do Yom Kippur (1973)",
    hook: "O corredor até o canal passava por uma estação agrícola, e foi preciso uma noite e um dia de luta para abri-lo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 6 de outubro de 1973, dia do Yom Kippur, o Egito atravessou o canal de Suez na [[operação Badr]] e rompeu a [[linha Bar-Lev|linha bar-lev]]. A Síria atacou no mesmo dia no Golã. Nos primeiros dias, Israel recuou nas duas frentes.",
        "Em 14 de outubro, Sadat mandou uma ofensiva egípcia no Sinai, que fracassou. No mesmo dia, o chefe do Estado-Maior, David Elazar, apresentou ao governo um plano de contra-travessia, e o gabinete o aprovou por unanimidade. O Comando Sul tinha mudado de comando: Chaim Bar-Lev assumira no lugar de Shmuel Gonen, que ficou como seu auxiliar. A travessia foi marcada para a noite de 15 para 16 de outubro.",
        { h: "O caminho até a Fazenda Chinesa" },
        { timeline: [
          ["6 out 1973", "O Egito atravessa o canal (operação Badr)."],
          ["14 out", "A ofensiva egípcia fracassa. Israel aprova o plano de travessia."],
          ["15 out, 17h", "A brigada de Raviv ataca pelo leste, como diversão."],
          ["16 out, 1h35", "Os paraquedistas de Matt começam a cruzar o canal."],
          ["16 out", "O dia mais duro: a brigada de Reshef sangra, e Adan avança."],
          ["17 out, 16h", "O pontão fica pronto."],
          ["18 out, manhã", "A ponte rolante é posta no canal."]
        ]},
        "O plano se chamava operação Abirey-Halev, algo como 'os de coração forte'. A ideia era abrir um corredor até o canal, em Deversoir, ao norte do Grande Lago Amargo, e lançar pontes por ele."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ariel Sharon" },
        "Comandava a 143ª Divisão, a que devia abrir o corredor e levar as pontes. Nesta batalha, discutiu com Gonen e Bar-Lev sobre como e quando cruzar, e as divergências ficaram registradas.",
        { h: "Os israelenses em campo" },
        "Amnon Reshef comandava a 14ª Brigada Blindada, que tinha as tarefas decisivas. Tuvia Raviv, a 600ª Brigada, que fazia a diversão. O coronel Danny Matt, a 243ª Brigada de Paraquedistas, e Haim Erez, a brigada que levava a ponte rolante. Avraham Adan comandava a 162ª Divisão, que cruzaria depois. O coronel Uzi Yairi comandou a 35ª Brigada de Paraquedistas, e Ehud Barak, futuro primeiro-ministro, conduziu o esforço blindado para retirar os paraquedistas.",
        { h: "Do lado egípcio" },
        "O general Abd Rab el-Nabi Hafez comandava a 16ª Divisão de Infantaria, e o coronel Abd el-Hamid, a 16ª Brigada de Infantaria. O general Ibrahim Oraby comandava a 21ª Divisão Blindada. Entre os oficiais egípcios estava um tenente-coronel que comandava um batalhão de infantaria, Mohamed Hussein Tantawi, depois ministro da Defesa."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A 21ª Divisão Blindada egípcia começou com 136 carros de combate. A brigada de Reshef começou com 97. Os dois lados tinham infantaria com armas antitanque. Na região estavam a 16ª Divisão de Infantaria e a 21ª Divisão Blindada, esta com a 1ª e a 14ª Brigadas Blindadas e a 18ª Mecanizada.",
        { h: "O terreno" },
        "As estradas Akavish e Tirtur corriam de leste a oeste, da estrada da Artilharia até a estrada Lexicon, que corria de norte a sul, paralela ao canal. A Fazenda Chinesa era uma estação agrícola egípcia, com equipamento de fabricação japonesa. Os soldados israelenses viram escritos em japonês e acharam que eram em chinês, daí o nome. Perto dali, o povoado de al-Galaa e a colina Missouri, ao noroeste, davam ao defensor um ponto alto.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, na tarde de 15 de outubro, a 143ª Divisão estava reunida a leste. O plano dava a Reshef as tarefas decisivas: contornar ao sul da Akavish, tomar os fortes Lakekan e Matzmed e limpar as estradas Akavish e Tirtur. A brigada de Erez levava a ponte rolante, e a de paraquedistas de Matt faria a primeira travessia.",
        "Segundo, às 17h, a brigada de Raviv atacou o centro da cabeça de ponte egípcia pelo leste. O ataque foi repelido, como se esperava, mas cumpriu o papel de [[diversão]].",
        "Terceiro, Reshef entrou sem oposição no corredor, tomou Lakekan e Matzmed sem tiros e informou que a Akavish estava livre. Enquanto isso, a brigada de Matt, que se movia desde as 16h30, ficou presa em engarrafamentos e perdeu horas.",
        "Quarto, uma companhia de carros mandada ao cruzamento Lexicon-Tirtur foi destruída pela infantaria egípcia, e seu comandante morreu. A artilharia israelense lançou cerca de 70 toneladas de munição na margem oeste, que estava vazia. A travessia dos paraquedistas começou à 1h35 de 16 de outubro, mais de cinco horas atrasada. Às 9h, 2.000 paraquedistas e um batalhão de uns 30 carros tinham passado e garantido uma [[cabeça de ponte]] de 4 km.",
        "Quinto, a Akavish tinha sido fechada de novo pela infantaria egípcia. Reshef mandou um batalhão limpá-la e empurrou três batalhões blindados e três mecanizados para o norte, em direção a Tirtur e à Fazenda Chinesa. Dois batalhões blindados que avançaram pela Lexicon perderam 27 carros para fogo antitanque. À noite, a brigada esbarrou no parque de veículos e de suprimentos das divisões 16 e 21, e os dois lados abriram fogo. Os egípcios contra-atacaram.",
        "Sexto, ainda em 16 de outubro, a 1ª Brigada Blindada egípcia, em al-Galaa, destruiu uns 15 carros israelenses e vários [[meias-lagartas|meia-lagarta]]. Às 4h, Reshef tinha perdido 56 dos 97 carros, restando 41, e ao meio-dia, 27. Sharon teve cerca de 300 mortos e 1.000 feridos naquela noite, segundo a Wikipédia. Depois do amanhecer, Reshef tomou o cruzamento Lexicon-Tirtur, mas foi detido ao tentar Tirtur, com fogo vindo da colina Missouri.",
        "Sétimo, o comando discutia. Dayan sugeriu retirar a brigada de Matt e cancelar a operação, mas Gonen recusou, e Bar-Lev concordou com ele. Sharon propôs mandar a divisão de Adan por balsas, e Bar-Lev proibiu novas travessias antes que as pontes estivessem prontas. Gonen disse que Sharon os tinha decepcionado e encarregou Adan de levar o pontão ao canal.",
        "Oitavo, na noite de 16 para 17, a 35ª Brigada de Paraquedistas, de Yairi, atacou Tirtur sem blindados, sem reconhecimento adequado e sem observadores de artilharia. Às 2h45, foi detida pelo batalhão da esquerda de Abd el-Hamid, e a maioria dos comandantes de companhia e de pelotão caiu. Em 14 horas, teve de 40 a 70 mortos e uns 100 feridos. Às 3h, uma companhia de meias-lagartas achou a Akavish aberta, e Adan arriscou mandar os pontões por ela. Em 17 de outubro, o Egito contra-atacou com a 1ª Brigada e seus 53 carros restantes. O ataque foi rechaçado, e a luta foi e voltou até as 21h. O pontão ficou pronto por volta das 16h.",
        "Nono, às 17h30, Abd el-Hamid informou que sua brigada estava sem munição e sem artilharia, e recebeu ordem de recuar. Na noite de 17 para 18, os egípcios saíram da Fazenda Chinesa, e as estradas Tirtur e Akavish ficaram livres. A colina Missouri continuou egípcia. A ponte rolante foi posta no canal ao amanhecer de 18 de outubro."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Wikipédia chama a batalha de vitória israelense e diz que as perdas dos dois lados foram pesadas, sem totais firmes. Pelos números do texto: a brigada de Reshef perdeu 56 dos 97 carros em cerca de doze horas, a divisão de Sharon teve cerca de 300 mortos e 1.000 feridos numa noite, e os paraquedistas de Yairi, de 40 a 70 mortos. A 21ª Divisão egípcia ficou com no máximo 40 dos 136 carros em 18 de outubro (sem contar 21 de reforço), e a 16ª Divisão, com uns 20 no batalhão de carros próprio. As fontes egípcias, como Hammad (2002), dizem que a 21ª destruiu mais de 50 carros e blindados israelenses em 16 de outubro.",
        { h: "Por que importa" },
        "Na tarde de 18 de outubro, a divisão de Adan cruzou o canal, e a de Magen a seguiu. Adan chegou a Suez e isolou duas divisões do Terceiro Exército egípcio. A tentativa de Sharon de chegar a Ismailia falhou. A guerra terminou com um cessar-fogo no fim de outubro, com um exército israelense na margem oeste e tropas egípcias na margem leste.",
        { h: "Curiosidades e controvérsias" },
        { note: "A batalha ficou famosa pela dureza. Segundo a Wikipédia, Dayan teria descrito o campo como um enorme campo de matança." },
        { note: "O erro egípcio: por cerca de 24 horas, os egípcios acharam que o ataque israelense era contra o flanco direito do Segundo Exército, e não uma travessia do canal." },
        { note: "Dois futuros ministros da Defesa lutaram em lados opostos nesse campo: Tantawi, no Egito, e Barak, em Israel." }
      ]}
    ]
  },

  khorramshahr: {
    war: "Guerra Irã-Iraque (1980–1988)",
    hook: "Depois de 19 meses nas mãos do Iraque, a cidade foi retomada em menos de dois dias.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em setembro de 1980, o Iraque invadiu o sul do Irã, depois de abandonar o acordo de fronteira de Argel, de 1975. Khorramshahr, o maior porto do Irã, no encontro dos rios Karun e [[Shatt al-Arab]], foi tomada em 26 de outubro de 1980, depois de um combate longo e sangrento. Entre os iranianos, a cidade ficou conhecida como 'Khuninshahr', a cidade do sangue.",
        "A guerra virou a favor do Irã em 1982. Na operação Fath ol-Mobin, em março, helicópteros iranianos pousaram atrás das linhas iraquianas, e o Irã empurrou o Iraque para fora da maior parte do Cuzistão, incluindo Shush, Dezful e Ahvaz. A etapa seguinte era Khorramshahr.",
        { h: "O caminho até a cidade" },
        { timeline: [
          ["26 out 1980", "O Iraque toma Khorramshahr."],
          ["mar 1982", "Operação Fath ol-Mobin: o Irã retoma a maior parte do Cuzistão."],
          ["24 abr 1982", "Começa a operação Beit ol-Moqaddas."],
          ["20 mai", "Contra-ataque iraquiano, rechaçado."],
          ["23–24 mai", "O Irã atravessa o Karun e retoma Khorramshahr."],
          ["20 jun", "Saddam oferece um cessar-fogo."]
        ]},
        "Para Teerã, a derrota iraquiana trouxe uma questão: parar ali, com o território reconquistado, ou invadir o Iraque."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Os comandantes iranianos" },
        "A operação foi dirigida por um quartel-general conjunto, o 'Karbala', chefiado por Mohsen Rezaee, da [[Guarda Revolucionária|guarda revolucionária]], e pelo coronel Ali Sayyad Shirazi, do Exército.",
        { h: "Do lado iraquiano" },
        "O coronel Ahmad Zeidan comandava a defesa da cidade. A Wikipédia diz que ele morreu numa mina que tinha mandado colocar, quando tentava fugir. Entre os comandantes listados, o brigadeiro Jawad Shitnah aparece como executado depois da derrota.",
        { h: "Os líderes" },
        "Saddam Hussein presidia o Iraque e reagiu à derrota com raiva: mandou executar vários generais, entre eles o comandante da 9ª Divisão Blindada. O aiatolá Khomeini, líder do Irã, rejeitou a oferta de cessar-fogo e decidiu continuar a guerra."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo a Wikipédia, na operação inteira o Irã teve cerca de 70.000 homens da Guarda Revolucionária, do Basij e do Exército, numa soma que outra fonte põe em 65.000. A infobox da batalha dá 100.000 iranianos e 400 carros contra 80.000 iraquianos e 100 carros (Razoux, 2015). Para o conjunto da operação, ela lista os iraquianos em 200.000 homens. As fontes divergem, e não dá para fixar um número só.",
        { h: "O terreno" },
        "Khorramshahr fica na margem do [[rio Karun|rio karun]], junto de onde ele deságua no Shatt al-Arab, na fronteira com o Iraque. Os iraquianos tinham recuado até o Karun e mantinham só a cidade e algumas áreas ao redor.",
        { h: "A operação em cinco tempos" },
        "Primeiro, em 24 de abril de 1982, cerca de 70.000 soldados da Guarda e do Basij, e tropas do Exército, atacaram em vários pontos entre Ahvaz e Susangerd. O quartel-general Karbala contava com cerca de 2.161 surtidas aéreas e uns 96 helicópteros do Exército. O Irã empurrou os iraquianos para trás, com perdas pesadas. Os iraquianos recuaram para Khorramshahr e a reforçaram.",
        "Segundo, em 20 de maio, o Iraque lançou um contra-ataque vigoroso, que fracassou.",
        "Terceiro, a partir de 23 de maio, o Irã atravessou o Karun e atacou em força. Rompeu duas linhas defensivas iraquianas, perto de Pol-e Now e Shalamcheh, e se aproximou do Shatt al-Arab. Uma ponte móvel iraquiana, que ligava as ilhas de Bowarin e Umm Rasas à margem sul do rio, foi inutilizada por combatentes iranianos, e os iraquianos ficaram sem a saída.",
        "Quarto, em menos de 48 horas, a cidade caiu. Cerca de 19.000 soldados iraquianos se renderam.",
        "Quinto, no conjunto da operação, segundo a Wikipédia (que cita Karsh e Pollack), cerca de 33.000 iraquianos foram capturados e mais de 450 carros e blindados se perderam, e o exército iraquiano caiu de 210.000 para 150.000 homens."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Wikipédia dá, para o Iraque, cerca de 8.000 mortos, 15.000 feridos e 19.000 prisioneiros, e para o Irã, de 12.000 a 15.000 mortos e 25.000 feridos. Outra passagem fala em cerca de 10.000 baixas iraquianas e 30.000 iranianas. Um site iraniano ligado ao governo (Imam Khomeini) fala em 6.000 iranianos mortos. O número de 8.000 mortos iraquianos, segundo a própria Wikipédia, se apoia numa fonte fraca, um fórum em árabe. O que se repete, em todas as fontes, é o número de uns 19.000 prisioneiros.",
        { h: "Por que importa" },
        "A retomada de Khorramshahr é vista como a virada da guerra. Em 20 de junho, Saddam ofereceu cessar-fogo imediato e retirada do território iraniano em duas semanas. Khomeini rejeitou: a guerra só acabaria com a queda de Saddam e o pagamento de indenizações. O governo iraniano se dividiu: Mousavi e Khamenei queriam aceitar, mas uma facção chefiada por Rafsanjani defendeu a invasão, e Khomeini a apoiou. A guerra durou mais seis anos.",
        "No Irã, 24 de maio é lembrado como o dia da libertação, e um sistema de defesa aérea e uma nota de 2.000 riais levam o nome ou a imagem da batalha.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: as perdas dos dois lados vêm de fontes diferentes e quase nunca batem. A Wikipédia nota que os dados de blindados e artilharia da infobox valem para todos os setores, e não só para Khorramshahr." },
        { note: "Um comandante que não viu o fim: Mohammad Jahanara, da Guarda Revolucionária, morreu num acidente de avião em 24 de maio, dia da libertação, antes de ver a cidade livre. Ele é lembrado numa canção popular persa." }
      ]}
    ]
  },

  cuitocuanavale: {
    war: "Guerra Civil de Angola e Guerra de Fronteira da África do Sul (1987–1988)",
    hook: "Os dois lados disseram que venceram, e os dois tinham razões para dizer.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Desde a independência, em 1975, Angola vivia uma guerra civil. O governo do MPLA, com as Forças Armadas Populares de Libertação de Angola ([[FAPLA|fapla]]), tinha o apoio de Cuba e da União Soviética. A [[UNITA|unita]], de Jonas Savimbi, tinha o apoio da África do Sul e dos Estados Unidos. A África do Sul, sob o [[regime do apartheid]], também enfrentava ali guerrilheiros pela independência da Namíbia, território que ela controlava. Foi uma [[guerra por procuração]] típica da Guerra Fria.",
        "Em agosto de 1987, a FAPLA, com conselheiros soviéticos, lançou a operação Saudando Outubro para tomar Mavinga, base da UNITA, no sudeste. Era uma ofensiva grande, com brigadas atravessando o rio Lomba. A África do Sul respondeu com a operação Moduler, para detê-la.",
        { h: "O caminho até Cuito Cuanavale" },
        { timeline: [
          ["ago 1987", "A FAPLA lança a operação Saudando Outubro."],
          ["9 set–7 out", "Combates no rio Lomba. A 47ª Brigada é destruída."],
          ["9–25 nov", "Operação Hooper: ataques sul-africanos às brigadas da FAPLA a leste do rio Cuito."],
          ["5 dez", "Chegam os reforços cubanos."],
          ["fev–mar 1988", "Ataques ao triângulo de Tumpo (operação Packer)."],
          ["jun 1988", "Combate na frente sudoeste, em Calueque."],
          ["22 dez 1988", "Assinatura dos Acordos de Nova York."]
        ]},
        "Depois do Lomba, a FAPLA recuou até Cuito Cuanavale, cidade na margem oeste do rio Cuito, e passou a defender a posição. O nome da batalha, aliás, é visto como impreciso: não houve ataque direto à cidade, e a luta se deu a leste do rio."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Do lado da FAPLA e de Cuba" },
        "António França, chefe do Estado-Maior angolano, tinha o comando geral. O general cubano Arnaldo Ochoa dirigia a defesa de Cuito Cuanavale, e Leopoldo Cintra Frías também aparece entre os comandantes cubanos. Entre os soviéticos, Pyotr Gusev dirigia as operações, e cerca de mil conselheiros soviéticos estavam em Angola.",
        { h: "Do lado sul-africano e da UNITA" },
        "Magnus Malan era o ministro da Defesa, e Jannie Geldenhuys chefiava as forças armadas. O coronel Deon Ferreira comandava as operações no campo. A UNITA tinha comandantes como Arlindo Pena 'Ben-Ben'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A infobox da Wikipédia dá, para a FAPLA, 6.000 combatentes no início e até 18.000, com uns 150 carros T-55 e T-62. A África do Sul, 700 combatentes no início e até 3.000, com 13 Olifant, 120 blindados Ratel e baterias de [[obus G5|obus g5]]. Cuba, 3.000 combatentes até fevereiro de 1988, com 32 carros, e conselheiros. Ela lista ainda a UNITA com dezenas de milhares de homens. Algumas estimativas, citadas na Wikipédia a partir de Gleijeses e Jaster, falam em apenas 10.000 a 20.000 cubanos envolvidos.",
        { h: "O terreno" },
        "Uma região de savana e de rios no sudeste de Angola, com poucas estradas. A cidade de Cuito Cuanavale fica na margem oeste do rio Cuito. A leste, o [[triângulo de Tumpo|triângulo de tumpo]], entre os rios Cuito, Tumpo e Dala, onde a FAPLA e os cubanos se entrincheiraram atrás de campos minados.",
        { h: "A campanha em cinco tempos" },
        "Primeiro, em agosto de 1987, a FAPLA avançou em direção a Mavinga. A África do Sul e a UNITA os encontraram no rio Lomba, em combates de 9 de setembro a 7 de outubro, e a 47ª Brigada foi aniquilada. Nessa fase, a Wikipédia dá 1.059 mortos e 2.118 feridos à FAPLA, 155 e 622 à UNITA e 19 e 41 à África do Sul.",
        "Segundo, a FAPLA recuou para Cuito Cuanavale. Em 9 e 11 de novembro, os sul-africanos atacaram a 16ª Brigada, e em 17 de novembro, a 21ª. Em 25 de novembro, o último ataque foi abandonado.",
        "Terceiro, Cuba mandou reforços a partir de 5 de dezembro, cerca de 1.500 homens em janeiro de 1988. A ONU exigiu a retirada sul-africana até 10 de dezembro.",
        "Quarto, na operação Packer, entre fevereiro e abril de 1988, a África do Sul e a UNITA fizeram seis ataques ao triângulo de Tumpo, e todos fracassaram. A cidade nunca foi atacada. Uma pequena força sul-africana continuou a bombardear a cidade até o fim de agosto de 1988, na operação Displace.",
        "Quinto, em junho de 1988, abriu-se uma segunda frente, no sudoeste, perto de Calueque e Ruacana. Um ataque de MiG-23 cubanos à represa de Calueque matou 12 soldados sul-africanos. Os sul-africanos se retiraram entre 27 e 30 de junho. Um acordo foi assinado em Ruacana em 22 de agosto de 1988."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado: o que cada lado diz" },
        "A África do Sul diz que cumpriu seu objetivo: deteve a ofensiva sobre Mavinga, protegeu a UNITA e escolheu não tomar Cuito Cuanavale. Angola e Cuba dizem que venceram, porque seguraram a posição. Castro afirmou que foi uma vitória esmagadora, que acabou com as agressões externas e levou a África do Sul à mesa de negociação. Mandela a chamou de virada para a libertação do continente e de seu povo.",
        "Os historiadores se dividem. Vanneman vê um resultado sem vitória decisiva de nenhum lado. Hampson fala em empate de uns nove meses e diz que Castro explorou a situação como propaganda. Gourgoumis acha que a África do Sul tomou alguns objetivos táticos mas fracassou no estratégico, ao não empurrar a FAPLA para o outro lado do Cuito. Herbst disse que foi a 'Dunquerque dos angolanos', e não o 'Stalingrado dos cubanos'. O funcionário americano Chester Crocker descreveu a campanha de 1987 como uma humilhação para o armamento e a estratégia soviéticos.",
        { h: "Perdas" },
        "Os números vêm quase todos de lados interessados. A FAPLA aparece com 4.768 mortos e mais de 10.000 feridos (números da SADF e de Weigert), e com 94 carros perdidos (SADF) ou 61 (Weigert). A UNITA, com cerca de 3.000 mortos (Marcum). A SADF anunciou 31 mortos e 90 feridos, número que sobe para 38 com os mortos fora de combate, e para até uns 86 se contados outros combates em Angola em 1987 e 1988. Cuba, 42 soldados e 7 pilotos mortos, e 3 pilotos presos. Os conselheiros soviéticos tiveram 3 mortos e 5 feridos.",
        { h: "Por que importa" },
        "A luta contribuiu para as negociações de paz mediadas pelos Estados Unidos. Os [[Acordos de Nova York|acordos de nova york]], de 22 de dezembro de 1988, levaram à independência da Namíbia e à saída dos soldados cubanos e sul-africanos de Angola, até 1991. A guerra civil angolana continuou.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem venceu? É o maior debate sobre a batalha. A resposta depende do que se mede: o objetivo militar de cada lado, ou o efeito político nas negociações. Os fatos que quase ninguém contesta: a ofensiva da FAPLA foi detida em 1987, e a cidade não caiu." },
        { note: "A questão do nome: alguns autores chamam 'batalha de Cuito Cuanavale' de nome impreciso, porque as ofensivas da África do Sul e da UNITA foram a leste do rio, e a cidade não foi atacada." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  sinai1967: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 116, h: 8, l: "Mar Mediterrâneo" },
      { t: "sea", x: -8, y: -2, w: 11, h: 78, l: "" },
      { t: "note", x: 3, y: 71, l: "Canal de Suez" },
      { t: "hill", x: 72, y: 27, rx: 7, ry: 5, l: "Um-Katef (Abu Ageila)" },
      { t: "hill", x: 46, y: 30, rx: 6, ry: 4, l: "Jebel Libni" },
      { t: "hill", x: 14, y: 52, rx: 6, ry: 4, l: "Desfiladeiro de Mitla" },
      { t: "hill", x: 27, y: 60, rx: 5, ry: 3, l: "Desfiladeiro de Gidi" },
      { t: "note", x: 90, y: 12, l: "Rafah" },
      { t: "note", x: 62, y: 11, l: "El Arish" },
      { t: "note", x: 24, y: 33, l: "Bir Gifgafa" },
      { t: "note", x: 93, y: 68, l: "Israel" }
    ],
    units: [
      { id: "iT", s: "a", k: "tank", w: 10, h: 4, l: "Divisão de Tal" },
      { id: "iS", s: "a", k: "tank", w: 10, h: 4, l: "Divisão de Sharon" },
      { id: "iY", s: "a", k: "tank", w: 10, h: 4, l: "Divisão de Yoffe" },
      { id: "iP", s: "a", k: "inf", w: 7, h: 3, l: "Paraquedistas de Matt" },
      { id: "e7", s: "b", k: "inf", w: 12, h: 4, l: "7ª Divisão (Rafah)" },
      { id: "e2", s: "b", k: "inf", w: 12, h: 4, l: "2ª Divisão (Um-Katef)" },
      { id: "e3", s: "b", k: "inf", w: 12, h: 4, l: "3ª Divisão (Jebel Libni)" },
      { id: "e4", s: "b", k: "tank", w: 12, h: 4, l: "4ª Divisão Blindada" }
    ],
    steps: [
      { t: "Manhã de 5 de junho de 1967. O Egito defende o Sinai em camadas: a 7ª Divisão em Rafah, a 2ª em Um-Katef, a 3ª perto de Jebel Libni e a 4ª Blindada mais atrás, na região de Bir Gifgafa. Israel tem três divisões na fronteira. Este esquema é simplificado.",
        p: { iT: [90, 12], iS: [92, 28], iY: [90, 42], iP: [94, 20], e7: [80, 12], e2: [70, 32], e3: [46, 36], e4: [24, 42] } },
      { t: "7h45: a aviação israelense ataca os aeródromos egípcios. A Wikipédia cita 338 aviões egípcios destruídos, número discutido. Os aviões não aparecem no diagrama, mas decidem a guerra: dali em diante, as colunas egípcias não têm cobertura aérea.",
        p: {} },
      { t: "7h50: a divisão de Tal entra por Rafah. Chega a Khan Yunis em pouco mais de quatro horas e ataca Sheikh Zuweid, defendida por duas brigadas egípcias.",
        p: { iT: [80, 9] } },
      { t: "No centro, Sharon ataca Um-Katef de frente, com carros, na manhã de 5 de junho. O ataque para diante de um campo minado e custa sete Centurions. Uma segunda tentativa, à tarde, também falha.",
        p: { iS: [82, 28] } },
      { t: "Sharon muda o plano: carros pelas dunas até a represa de Ruafa e ataque noturno de infantaria. Só há helicópteros para parte dos paraquedistas de Matt, e metade se perde.",
        p: { iS: [78, 31], iP: [68, 24] } },
      { t: "Noite de 5 para 6 de junho: barragem de uns 6.000 tiros em menos de vinte minutos, e a infantaria entra nas trincheiras. Na manhã de 6, os carros israelenses destroem os batalhões blindado e antitanque egípcios. Abu Ageila cai por volta do meio-dia. Tal entra em El Arish, e a 7ª Divisão é desfeita.",
        p: { iS: [68, 31], iP: [66, 26], iT: [64, 10] }, x: ["e2", "e7"] },
      { t: "Ao saber da queda de Abu Ageila, Amer manda recuar, sem plano. Yoffe passa pelas areias que os egípcios achavam intransitáveis e chega a Bir Lahfan. A 3ª Divisão sai de Jebel Libni.",
        p: { iY: [58, 24], iS: [58, 32], e3: [40, 42], e4: [20, 46] } },
      { t: "De 6 para 7 de junho, as divisões israelenses correm para o oeste. Um bloqueio é montado na boca leste de Mitla, e só Gidi é tomado antes de os egípcios chegarem. Os aviões atacam as colunas, e muitos soldados morrem de sede a caminho do canal.",
        p: { iY: [24, 50], iS: [36, 52], iT: [44, 16], e3: [30, 50], e4: [14, 48] }, x: ["e3"] },
      { t: "7 e 8 de junho: Tal para em vários pontos do canal, e Sharm el-Sheikh, em grande parte abandonada, é ocupada. Em 8 de junho, Israel controla todo o Sinai, e o Egito aceita o cessar-fogo.",
        p: { iT: [12, 12], iY: [14, 54], iS: [26, 58] }, x: ["e4"] }
    ]
  },

  hue: {
    terrain: [
      { t: "sea", x: -8, y: 36, w: 116, h: 5, l: "Rio dos Perfumes" },
      { t: "hill", x: 52, y: 17, rx: 38, ry: 15, l: "Cidadela e Cidade Imperial" },
      { t: "note", x: 16, y: 58, l: "Cidade nova (margem sul)" },
      { t: "note", x: 52, y: 74, l: "Base de Phu Bai, 11 km ao sul" },
      { t: "note", x: 92, y: 74, l: "Norte ↑" }
    ],
    units: [
      { id: "aMc", s: "a", k: "camp", w: 8, h: 5, l: "Mang Ca: 1ª Divisão sul-vietnamita" },
      { id: "aMv", s: "a", k: "camp", w: 8, h: 5, l: "Complexo do MACV" },
      { id: "aM1", s: "a", k: "inf", w: 10, h: 4, l: "Fuzileiros (1º Regimento)" },
      { id: "aM2", s: "a", k: "inf", w: 10, h: 4, l: "Fuzileiros (5º Regimento)" },
      { id: "aAv", s: "a", k: "inf", w: 12, h: 4, l: "Sul-vietnamitas: infantaria e paraquedistas" },
      { id: "aVm", s: "a", k: "inf", w: 9, h: 4, l: "Fuzileiros vietnamitas" },
      { id: "aUs", s: "a", k: "inf", w: 10, h: 4, l: "Fuzileiros americanos (Cidadela)" },
      { id: "bC", s: "b", k: "inf", w: 22, h: 6, l: "PAVN e Vietcongue (Cidadela)" },
      { id: "bS", s: "b", k: "inf", w: 20, h: 5, l: "PAVN e Vietcongue (margem sul)" }
    ],
    steps: [
      { t: "Madrugada de 31 de janeiro de 1968, durante a trégua do Tet. Os sul-vietnamitas têm o quartel-general em Mang Ca, na Cidadela. Na margem sul há só o complexo do MACV. Os fuzileiros americanos estão em Phu Bai, 11 km ao sul. Muitos soldados sul-vietnamitas estão de licença.",
        p: { aMc: [82, 9], aMv: [50, 46], aM1: [42, 70], aM2: [58, 70], aAv: [74, 20], aVm: [92, 62], aUs: [76, 68], bC: [14, 14], bS: [14, 52] } },
      { t: "2h33: um sinal luminoso marca o começo do ataque. Uma equipe de sapadores abre o portão de Chánh Tây, e o PAVN entra na Cidadela. Às 8h, uma bandeira de libertação sobe na torre. Na margem sul, os atacantes cercam o MACV.",
        p: { bC: [48, 15], bS: [44, 52] } },
      { t: "Tarde de 31 de janeiro: a Companhia A dos fuzileiros chega ao MACV, às 15h15, depois de lutar casa a casa. Outra companhia tenta a ponte Trường Tiền e é repelida pelo fogo da muralha.",
        p: { aM1: [48, 50] } },
      { t: "De 2 a 4 de fevereiro, os fuzileiros avançam até a universidade, o Tesouro e os Correios. Na noite de 2 de fevereiro, o PAVN invade a prisão e solta cerca de 2.500 presos. Em 4 de fevereiro, a Companhia A perde mais da metade dos 147 homens.",
        p: { aM1: [40, 52], aM2: [56, 52], bS: [30, 54] } },
      { t: "Dentro da Cidadela, os sul-vietnamitas limpam o norte e o oeste. O 4º Batalhão do 2º Regimento mata mais de 700 inimigos até 4 de fevereiro, mas para diante do palácio. Em 6 de fevereiro, os fuzileiros tomam a sede da província, e a ponte Trường Tiền é destruída no dia 7.",
        p: { aAv: [66, 12], aM1: [44, 56], aM2: [58, 56] } },
      { t: "Em 10 de fevereiro, os fuzileiros tomam o estádio. Entre 11 e 13, as últimas posições do sul vão sendo limpas, e uma força de fuzileiros vietnamitas é transportada até Mang Ca.",
        p: { aM1: [52, 60], aM2: [64, 56], bS: [22, 56], aVm: [80, 14] } },
      { t: "15 de fevereiro: fuzileiros americanos tomam o portão de Dong Ba, na muralha da Cidadela. No dia 16, o vice-presidente Kỳ libera toda a força necessária, sem poupar edifícios históricos.",
        p: { aUs: [86, 26], aVm: [76, 14], bC: [46, 16] } },
      { t: "Na noite de 20 de fevereiro, o PAVN começa a recuar por fases. Em 22 de fevereiro, a muralha sul está em mãos aliadas.",
        p: { bC: [28, 12], aUs: [74, 24], aAv: [58, 22], aVm: [68, 16] } },
      { t: "5h de 24 de fevereiro: a bandeira sul-vietnamita volta à torre. À tarde, o palácio é retomado. Em 25 de fevereiro cai o último foco, no canto sudoeste, e a operação de limpeza termina em 2 de março.",
        p: { aUs: [54, 22], aAv: [46, 20], aVm: [62, 18] }, x: ["bC", "bS"] }
    ]
  },

  fazendachinesa: {
    terrain: [
      { t: "sea", x: -8, y: -2, w: 14, h: 78, l: "" },
      { t: "sea", x: 0, y: 61, w: 108, h: 18, l: "Grande Lago Amargo" },
      { t: "note", x: 2, y: 8, l: "Canal de Suez" },
      { t: "note", x: 12, y: 56, l: "Deversoir" },
      { t: "hill", x: 36, y: 11, rx: 7, ry: 4, l: "Colina Missouri" },
      { t: "note", x: 44, y: 28, l: "Fazenda Chinesa" },
      { t: "note", x: 20, y: 22, l: "Al-Galaa" },
      { t: "note", x: 20, y: 37, l: "Estrada Lexicon" },
      { t: "note", x: 90, y: 40, l: "Tirtur" },
      { t: "note", x: 90, y: 50, l: "Akavish" }
    ],
    units: [
      { id: "iDi", s: "a", k: "tank", w: 9, h: 4, l: "600ª Brigada (Raviv): diversão" },
      { id: "iRe", s: "a", k: "tank", w: 10, h: 4, l: "14ª Brigada (Reshef)" },
      { id: "iPa", s: "a", k: "inf", w: 9, h: 3, l: "Paraquedistas de Matt (243ª)" },
      { id: "iBr", s: "a", k: "car", w: 9, h: 3, l: "Pontes (Erez e Adan)" },
      { id: "iYa", s: "a", k: "inf", w: 9, h: 3, l: "Paraquedistas de Yairi (35ª)" },
      { id: "iAd", s: "a", k: "tank", w: 10, h: 4, l: "Divisão de Adan" },
      { id: "e16", s: "b", k: "inf", w: 16, h: 6, l: "16ª Divisão de Infantaria" },
      { id: "e21", s: "b", k: "tank", w: 16, h: 5, l: "21ª Divisão Blindada" },
      { id: "e18", s: "b", k: "inf", w: 10, h: 4, l: "18ª Brigada mecanizada" }
    ],
    steps: [
      { t: "Tarde de 15 de outubro de 1973. As forças israelenses estão a leste. A 16ª Divisão egípcia de infantaria segura a área da Fazenda Chinesa e do cruzamento Tirtur-Lexicon, com a 21ª Divisão Blindada ao norte. O objetivo é abrir um corredor até o canal, em Deversoir.",
        p: { iDi: [82, 34], iRe: [86, 44], iPa: [90, 55], iBr: [94, 50], iYa: [97, 64], iAd: [96, 58], e16: [46, 36], e21: [44, 14], e18: [54, 22] } },
      { t: "17h: a brigada de Raviv ataca o centro da cabeça de ponte egípcia, pelo leste. O ataque é repelido, como se esperava, mas desvia a atenção dos egípcios.",
        p: { iDi: [68, 34] } },
      { t: "Reshef entra sem oposição, toma Lakekan e Matzmed sem tiros e informa que a estrada Akavish está livre. A brigada de Matt, presa em engarrafamentos, atrasa.",
        p: { iRe: [64, 50], iPa: [76, 52] } },
      { t: "Uma companhia de carros mandada ao cruzamento Lexicon-Tirtur é destruída pela infantaria egípcia. À 1h35 de 16 de outubro, com mais de cinco horas de atraso, os paraquedistas começam a cruzar o canal. Às 9h, 2.000 paraquedistas e uns 30 carros garantem uma cabeça de ponte de 4 km.",
        p: { iPa: [22, 56], iBr: [60, 52], iRe: [56, 50] } },
      { t: "A Akavish é fechada de novo pela infantaria egípcia. Reshef empurra seus batalhões para o norte, em direção a Tirtur e à Fazenda Chinesa. Dois batalhões perdem 27 carros na Lexicon. À noite, esbarram no parque de veículos das divisões egípcias, e os dois lados abrem fogo.",
        p: { iRe: [42, 42], e16: [46, 34], e21: [42, 20] } },
      { t: "16 de outubro: a 1ª Brigada Blindada egípcia, em al-Galaa, destrói uns 15 carros israelenses. Às 4h, Reshef tinha 41 dos 97 carros. Ao meio-dia, 27. Depois do amanhecer, ele toma o cruzamento Lexicon-Tirtur, mas é detido ao atacar Tirtur, sob fogo da colina Missouri.",
        p: { iRe: [34, 40], e21: [36, 24], e18: [50, 28] } },
      { t: "Noite de 16 para 17: os paraquedistas de Yairi atacam Tirtur sem blindados nem observadores de artilharia. Pregados no chão pelo fogo egípcio, têm de 40 a 70 mortos e uns 100 feridos em catorze horas.",
        p: { iYa: [48, 40], iRe: [38, 46], e16: [46, 34] } },
      { t: "3h de 17 de outubro: uma companhia de meias-lagartas acha a Akavish aberta, e Adan manda os pontões por ela. O Egito contra-ataca com a 1ª Brigada e 53 carros, e é rechaçado. Por volta das 16h, o pontão fica pronto.",
        p: { iBr: [30, 56], iAd: [50, 52], iYa: [56, 46], e21: [38, 28] } },
      { t: "Na noite de 17 para 18, a brigada de Abd el-Hamid, sem munição, abandona a Fazenda Chinesa, e as estradas Tirtur e Akavish ficam livres. A ponte rolante é posta ao amanhecer de 18 de outubro, e a divisão de Adan cruza o canal.",
        p: { e16: [52, 20], iAd: [20, 56], iBr: [14, 56], iRe: [40, 44] } }
    ]
  }
});
