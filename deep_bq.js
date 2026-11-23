// In-depth battles, batch bq: lexingtonconcord, iadrang, fallujah2004 (requested by a college history instructor).
// Checked against the English and Portuguese Wikipedia articles on the Battles of Lexington and Concord, the Battle of
// Ia Drang and the Second Battle of Fallujah, the Modern War Institute (West Point) case study on Fallujah, and the
// works those pages cite. Where sources disagree the text says so.
// The three diagrams are schematic. Lexington and Concord is drawn on a stylized west-to-east map (not to scale);
// Ia Drang shows the companies and the PAVN axes the sources describe, not every platoon; Fallujah shows the two
// regimental combat teams, the Army battalions and the main insurgent concentrations, not every battalion.

Object.assign(GLOSSARY, {
  "minutemen": "Milicianos escolhidos entre os mais jovens e bem treinados, que prometiam estar prontos 'em um minuto'. Em 1775, as companhias de minutemen e as de milícia comum se misturaram ao longo do dia.",
  "munhão": "Cada um dos dois pinos laterais de um canhão, onde ele se apoia no carro de rodas. Sem os munhões, o canhão não pode ser montado e não serve para nada.",
  "flanqueadores": "Soldados mandados para as laterais de uma coluna em marcha, para vigiar o terreno e afastar atiradores escondidos.",
  "leis intoleráveis": "Nome dado pelos colonos às leis de 1774 com que o Parlamento britânico puniu Massachusetts depois do Motim do Chá de Boston. Os historiadores usam também 'Leis Coercitivas'.",
  "zona de pouso": "Clareira onde helicópteros pousam para descarregar tropas, que os americanos chamavam de LZ e batizavam com uma letra do alfabeto fonético, como X-Ray ou Albany.",
  "cavalaria aérea": "Unidade do Exército americano que se deslocava de helicóptero. A 1ª Divisão de Cavalaria (Aeromóvel) conservava o nome da cavalaria, mas os cavalos tinham virado helicópteros.",
  "pelotão": "Grupo de soldados menor que uma companhia, com algumas dezenas de homens, comandado por um tenente.",
  "b-52": "Bombardeiro americano de grande porte. Em Ia Drang foi usado pela primeira vez para apoiar tropas em combate, e não só para atacar alvos distantes.",
  "contagem de corpos": "Prática americana de medir o sucesso na guerra do Vietnã pelo número de inimigos mortos. Os números eram inflados: em Ia Drang, os próprios comandantes admitiram exageros.",
  "cupinzeiro": "Monte de terra feito por cupins. No X-Ray, um cupinzeiro grande no meio da clareira serviu de posto de comando para Hal Moore, e outro abrigava uma metralhadora inimiga.",
  "capim-elefante": "Capim alto, de folhas cortantes, que no Vietnã passava da altura do peito. Em Albany, escondia o inimigo e impedia os soldados de se enxergar.",
  "insurgentes": "Combatentes que lutam contra um governo ou contra tropas estrangeiras sem formar um exército regular, em geral escondidos entre a população.",
  "combate urbano": "Luta dentro de uma cidade. Cada prédio, cada esquina e cada janela é um possível ponto de tiro, e o atacante precisa limpar tudo, casa por casa.",
  "linha de fase": "Linha traçada no mapa, com um nome de código, para marcar até onde as tropas devem chegar e para coordenar quem avança ao lado de quem. A Linha Fran de Faluja era a Rodovia 10.",
  "artefato explosivo improvisado": "Bomba feita à mão com material comum, como granadas, bujões de gás ou obuses antigos, e escondida em estradas, casas ou veículos. Os americanos usavam a sigla IED.",
  "fósforo branco": "Substância que pega fogo ao tocar o ar e solta fumaça densa. Serve para iluminar e esconder tropas, mas queima a pele, e seu uso como arma contra pessoas é discutido.",
  "atirador de elite": "Soldado treinado para acertar alvos distantes com um único tiro e para observar sem ser visto. Em Faluja, equipes deles protegiam a entrada das tropas.",
  "seabees": "Engenheiros de construção da Marinha americana. Em Faluja, seus tratores blindados limparam as ruas cheias de entulho."
});

Object.assign(DEEP, {
  lexingtonconcord: {
    war: "Início da Guerra de Independência dos Estados Unidos (1775–1783)",
    hook: "Uma marcha para apreender canhões virou uma retirada sob fogo, e a guerra que os dois lados diziam não querer começou.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Desde 1768, soldados britânicos ocupavam Boston. Em 1773, colonos jogaram chá no porto, e o Parlamento britânico respondeu em 1774 com as [[leis intoleráveis]], que puniam Massachusetts. Líderes do condado de Suffolk, onde fica Boston, adotaram então as Resoluções de Suffolk, que declaravam as leis inconstitucionais e pediam que cada um se preparasse para defender a colônia. O Primeiro Congresso Continental as aprovou em 17 de setembro de 1774. Fora de Boston, quem mandava de fato era um governo provisório dos colonos, o Congresso Provincial de Massachusetts.",
        "O general Thomas Gage, governador militar da colônia, tinha cerca de 3.000 soldados em Boston e perdera o controle do resto do território. Seu plano era evitar uma guerra aberta com golpes pequenos, secretos e rápidos, para tirar das [[milícias|milícia]] os depósitos de armas. Nas chamadas 'Powder Alarms', os britânicos tomaram pólvora em alguns lugares, mas os colonos esconderam o resto, e quase não houve sangue.",
        { h: "O caminho até Lexington" },
        { timeline: [
          ["17 set 1774", "O Congresso Continental aprova as Resoluções de Suffolk."],
          ["fev 1775", "O Parlamento declara que Massachusetts está em estado de rebelião."],
          ["14 abr 1775", "Gage recebe de Londres a ordem de desarmar os rebeldes e prender seus líderes."],
          ["18 abr, noite", "Revere e Dawes saem de Boston para avisar as milícias, e os soldados embarcam para Cambridge."],
          ["19 abr, 2h", "A coluna britânica começa a marcha de 27 km até Concord."],
          ["19 abr, ~5h", "Tiros em Lexington."],
          ["19 abr, ~11h", "Combate na ponte Norte, em Concord."],
          ["19 abr, ~14h", "O reforço de Percy chega a Lexington."],
          ["19 abr, anoitecer", "Os britânicos chegam a Charlestown."]
        ]},
        "Os colonos tinham informações. Semanas antes, souberam que seus depósitos corriam risco e levaram a maior parte do material de Concord para outros lugares. Na noite de 18 de abril, o médico Joseph Warren mandou Paul Revere e William Dawes avisarem Lexington e as cidades vizinhas. Uma ou duas lanternas na torre da Old North Church indicariam se os soldados iam por terra ou por mar. A Wikipédia lembra que há quem suspeite de que a fonte de informação tenha sido Margaret Gage, a esposa do general, mas isso é só suposição."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Thomas Gage, general britânico" },
        "Comandante-chefe das tropas britânicas na América do Norte e governador militar de Massachusetts. Em 14 de abril, recebeu de Londres a ordem de agir. Mandou o tenente-coronel Smith apreender e destruir o material militar em Concord, com a recomendação de que os soldados não saqueassem nem danificassem a propriedade de ninguém. Não pôs por escrito a ordem de prender os líderes rebeldes, por medo de provocar um levante.",
        { h: "Francis Smith, John Pitcairn e Hugh Percy" },
        "O tenente-coronel Francis Smith comandava a expedição e só abriu as ordens depois da partida. O major John Pitcairn, dos fuzileiros navais, era seu auxiliar e comandou a vanguarda. O brigadeiro Hugh Percy comandou a coluna de socorro. Smith e Pitcairn foram feridos no caminho de volta, e Percy acabou conduzindo a retirada.",
        { h: "John Parker, James Barrett e Isaac Davis" },
        "O capitão John Parker, veterano da Guerra dos Sete Anos na América, comandava os milicianos de Lexington e tinha tuberculose, com uma voz tão rouca que era difícil ouvi-lo. Em Concord, o coronel James Barrett comandava as milícias reunidas. O capitão Isaac Davis, de Acton, aceitou liderar o avanço até a ponte e disse, segundo o relato: 'Não tenho medo de ir, e não tenho um homem que tenha'. Foi morto ali.",
        { h: "Os mensageiros" },
        "Revere foi capturado em Lincoln por uma patrulha britânica, e Dawes caiu do cavalo. Só o jovem Samuel Prescott escapou e chegou a Concord. Revere, portanto, nunca chegou lá, ao contrário do que diz o famoso poema de Longfellow."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Cerca de 700 soldados regulares saíram de Boston, tirados de 11 dos 13 regimentos de infantaria da guarnição. Eram 10 companhias de [[infantaria ligeira]], sob Pitcairn, e 11 de [[granadeiros|granadeiros]], sob o tenente-coronel Benjamin Bernard. A tropa era um grupo montado às pressas, com oficiais que não conheciam os soldados, e isso atrapalhou a comunicação. Depois, Percy trouxe cerca de 1.000 homens e dois canhões, e as tropas juntas chegaram a cerca de 1.700.",
        "Os colonos mobilizaram cerca de 4.000 homens ao longo do dia, vindos de umas 30 cidades. Chegaram aos poucos, em grupos, e não houve um comando único. Havia companhias de [[minutemen]] e de milícia comum. Tanto os britânicos quanto os colonos tinham [[mosquetes|mosquete]] de cano liso, cujo tiro mirado só alcança uns 75 a 90 metros (80 a 100 jardas).",
        { h: "O terreno" },
        "A estrada de Boston a Concord tem cerca de 27 km, com cercas de pedra, bosques, casas e curvas que escondiam os atiradores. Os rios estavam cheios pela primavera, e a ponte Norte, em Concord, era um estreito caminho de acesso. Os soldados marcharam a noite toda, e muitos estavam molhados desde que saltaram na água em Cambridge.",
        { h: "O dia em movimentos" },
        { formation: true },
        "Primeiro, Lexington. Ao amanhecer, a vanguarda de Pitcairn chegou à praça, onde uns 77 a 80 milicianos de Parker estavam em formação, em campo aberto, sem bloquear a estrada para Concord. Parker sabia que a maior parte do material de Concord já estava escondida e não queria sacrificar seus homens à toa. Mandou-os se dispersar e não atirar. Os britânicos avançaram para a praça, gritaram para os milicianos largarem as armas, e então um tiro soou. Seguiu-se uma descarga britânica. Morreram oito homens de Lexington, e dez ficaram feridos. Um soldado britânico foi ferido na coxa.",
        { note: "Quem atirou primeiro em Lexington é discutido há mais de dois séculos. David Hackett Fischer escreve que Parker e Pitcairn mandaram seus homens segurar o fogo e que um tiro partiu de alguém que não se sabe quem era. Trinta e quatro milicianos juraram depois que não atiraram primeiro. O tenente britânico John Barker afirmou que os milicianos deram dois tiros antes. A maioria das testemunhas das duas partes diz que não viu quem foi." },
        "Segundo, o caminho até Concord. Smith pôs a tropa de novo em ordem e seguiu. Em Concord, os milicianos locais, uns 250, tinham saído ao encontro dos britânicos, mas voltaram ao ver que os regulares eram 700. Barrett levou-os para além da ponte Norte, numa colina a cerca de 1,5 km, e esperou os reforços das cidades vizinhas.",
        "Terceiro, a busca. Os granadeiros revistaram a vila. Em Concord, destruíram os [[munhões|munhão]] de três canhões de 24 libras, queimaram carros de canhão e jogaram na água barris de farinha e cerca de 250 kg de balas de mosquete. O fogo chegou ao prédio da assembleia, e uma moradora, Martha Moulton, convenceu os soldados a ajudar a apagá-lo. De resto, os soldados trataram os civis com cuidado, pagando por comida e bebida, e os moradores usaram isso para despistar a busca nos esconderijos menores. O capitão Parsons levou quatro companhias à fazenda de Barrett, a uns 3 km além da ponte, e achou muito pouco.",
        "Quarto, a ponte Norte, por volta das 11h. Barrett viu a fumaça que subia da vila e mandou seus homens descerem a colina até uns 270 metros da ponte. Os britânicos recuaram para o outro lado. De um lado, pelo menos 400 colonos. Do outro, entre 90 e 95 soldados, sob o capitão Walter Laurie. Os minutemen de Acton, os únicos com baionetas, lideraram o avanço em coluna de dois, pela estrada, porque a água cobria o resto. Laurie formou os soldados para 'fogo de rua', uma formação para ruas estreitas, errada para defender uma ponte, e a confusão tomou conta. Um tiro, provavelmente um aviso de um soldado assustado do 43º, foi seguido por uma descarga irregular. Davis e um outro minuteman de Acton morreram na hora, e quatro ficaram feridos. O major John Buttrick gritou: 'Fogo, pelo amor de Deus, camaradas, fogo!'. Os colonos atiraram. Dos oito oficiais e sargentos britânicos na frente, quatro foram feridos, e ao menos três soldados morreram. Os britânicos fugiram de volta à vila.",
        "Quinto, a volta. Depois do meio-dia, Smith mandou a coluna de volta a Boston. Na Meriam's Corner, dois soldados britânicos morreram e cerca de seis ficaram feridos, e a milícia não teve baixas. A cada curva ou colina, mais homens chegavam, em companhias de cidades diferentes, e atiravam de muros, árvores e casas. A coluna foi perdendo gente. Perto de Lexington, Smith foi ferido na coxa, e o cavalo de Pitcairn disparou e o derrubou, ferindo seu braço. Pitcairn assumiu o comando.",
        "Sexto, a coluna de socorro. Smith tinha pedido reforço às 4h da manhã. Percy chegou a Lexington por volta das 14h e pôs os canhões em posição. Os soldados de Smith estavam marchando desde as 2h da madrugada. Percy tinha deixado Boston sem munição extra, apesar do conselho do responsável pela artilharia, e cada homem tinha só 36 cartuchos. Duas carroças de munição que foram depois, com um oficial e 13 homens, foram emboscadas por velhos milicianos da 'lista de alarme' (homens com mais de 60 anos), e seis soldados jogaram as armas num lago e se renderam.",
        "Sétimo, de Lexington a Menotomy. Percy deixou Lexington às 15h30, com cerca de 1.700 homens, e pôs [[flanqueadores]] dos lados e atrás. O brigadeiro William Heath e Joseph Warren, que tinham chegado, mandaram os milicianos evitar formações cerradas, que atrairiam os canhões, e cercar a coluna com um anel móvel de atiradores à distância. Em Menotomy (hoje Arlington), os colonos atiraram das casas, e os britânicos tiveram de limpar o caminho casa por casa. A luta mais intensa do dia foi ali, na casa de Jason Russell. Cerca de metade das mortes de cada lado ocorreu em Menotomy e Cambridge: ali os colonos perderam 25 mortos e 9 feridos, e os britânicos, 40 mortos e 80 feridos. Os oficiais perderam o controle dos soldados, cansados e furiosos, e alguns mataram civis dentro das casas.",
        "Oitavo, Charlestown. Em Cambridge, Percy usou os canhões e os flanqueadores em Watson's Corner contra milicianos recém-chegados. Heath tinha mandado desmontar a Great Bridge, e uma multidão de milicianos esperava na margem. Percy, porém, virou por uma trilha estreita rumo à estrada de Charlestown e rompeu o cerco de fogo. Uma força de Salem e Marblehead, sob o coronel Timothy Pickering, parou na colina Winter Hill e deixou os britânicos passarem. Pickering foi acusado de tê-lo feito para evitar a guerra. Disse mais tarde que obedecia a Heath, e Heath negou. Perto do anoitecer, os fuzileiros de Pitcairn repeliram um último ataque na entrada de Charlestown. Gage mandou o 10º e o 64º regimentos fortificar a cidade."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A expedição britânica fracassou: apreendeu pouca coisa, e as lutas que ela deveria evitar acabaram acontecendo. Só o dano aos três canhões de Concord teve importância. Segundo a Wikipédia, os britânicos tiveram 73 mortos, 174 feridos e 53 desaparecidos, e os colonos, 49 mortos, 39 feridos e 5 desaparecidos. Os números variam um pouco conforme a fonte. Na manhã seguinte, mais de 15.000 milicianos cercavam Boston, e começou o cerco que duraria quase um ano.",
        { h: "Por que importa" },
        "Foi a primeira ação militar importante da Guerra de Independência. Depois dela, a questão deixou de ser como negociar e passou a ser quem venceria. Menos de dois meses depois, na Batalha de Bunker Hill, os dois lados voltaram a se enfrentar, e dessa vez perto de Boston.",
        "A disputa pela opinião pública começou no mesmo dia. Em quatro dias, o Congresso Provincial reuniu dezenas de depoimentos juramentados de milicianos e de prisioneiros britânicos. Quando soube que Gage mandava seu relatório oficial a Londres, enviou também um pacote desses depoimentos. O governo americano nascente queria mostrar a culpa britânica e a inocência dos colonos: os depoimentos desfavoráveis foram devolvidos, e os quadros mostravam Lexington como um massacre. No século XIX, a memória mudou: os veteranos passaram a dizer que os britânicos atiraram primeiro e os quadros passaram a mostrar a milícia lutando. O poema 'Concord Hymn', de Ralph Waldo Emerson (1837), fixou a expressão 'o tiro que ecoou pelo mundo'.",
        { h: "Curiosidades e controvérsias" },
        { note: "Entre os feridos de Lexington estava Prince Estabrook, um homem escravizado que servia na milícia." },
        { note: "O Dia dos Patriotas (Patriots' Day) é feriado em Massachusetts na terceira segunda-feira de abril, com encenações em Lexington e na ponte Norte. O último veterano vivo, Jonathan Harrington Jr., que tocara pífaro na companhia de Parker, morreu em 26 de março de 1854." },
        { note: "Os números de milicianos variam: de 50 a 70 em Lexington, segundo alguns historiadores, e perto de 500 em Concord. O nome 'Bloody Angle', usado para uma curva da estrada, só apareceu depois da Guerra Civil, e hoje é considerado impreciso." }
      ]}
    ]
  },

  iadrang: {
    war: "Campanha de Pleiku, Guerra do Vietnã (1965)",
    hook: "Americanos e norte-vietnamitas se enfrentaram pela primeira vez em batalha de verdade, e cada lado achou que tinha aprendido como vencer.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1965, a maior parte do campo no Vietnã do Sul estava sob controle parcial do Vietcongue, que já recebia o reforço de soldados regulares do Vietnã do Norte (o Exército Popular, chamado de PAVN). Os Estados Unidos aumentaram suas tropas no verão daquele ano. No Planalto Central, uma região de poucas estradas e muita mata, o Norte tinha criado a Frente B3 e reunido três regimentos, o 32º, o 33º e o 66º, mais um batalhão local. Dali, ataques para o sudoeste ameaçavam cortar o Vietnã do Sul ao meio.",
        "A 1ª Divisão de Cavalaria (Aeromóvel) era uma novidade: uma unidade da [[cavalaria aérea|cavalaria aérea]] que usava helicópteros para pousar tropas onde o inimigo estava. Em 19 de outubro, o PAVN atacou o acampamento de Plei Me e foi repelido. Em novembro, o comando americano mandou procurar as tropas do PAVN junto ao maciço de Chu Pong, na fronteira com o Camboja.",
        { h: "O caminho até a clareira" },
        { timeline: [
          ["19 out 1965", "O PAVN ataca o acampamento de Plei Me, sem sucesso."],
          ["13 nov", "O coronel Brown manda Hal Moore fazer um assalto de helicóptero na manhã seguinte."],
          ["14 nov, 10h48", "Os primeiros homens de Moore pousam na zona de pouso X-Ray."],
          ["15 nov", "Ataques ao amanhecer; às 16h, o primeiro bombardeio de B-52."],
          ["16 nov", "O combate no X-Ray termina."],
          ["17 nov, 13h15", "A coluna do 2º Batalhão do 7º de Cavalaria cai na emboscada de Albany."],
          ["18–19 nov", "Os americanos recolhem os mortos e saem de Albany."]
        ]},
        "Para a missão, o coronel Thomas Brown, comandante da 3ª Brigada, escolheu o 1º Batalhão do 7º de Cavalaria, do tenente-coronel Hal Moore, com a ordem de não subir a montanha. Moore escolheu como zona de pouso uma clareira que chamou de X-Ray."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hal Moore, tenente-coronel americano" },
        "Comandava o 1º Batalhão do 7º de Cavalaria (1/7). Planejou os pousos em ondas, com a companhia Bravo primeiro, e se recusou a deixar o batalhão, primeiro quando o coronel Brown quis assumir o comando do campo de batalha e depois quando o quartel-general de Westmoreland o chamou a Saigon. Mais tarde escreveu, com o jornalista Joseph Galloway, o livro 'We Were Soldiers Once... And Young'.",
        { h: "Brown, McDade e Tully" },
        "O coronel Thomas Brown comandava a 3ª Brigada. O tenente-coronel Robert McDade comandava o 2/7 e o tenente-coronel Robert Tully, o 2º Batalhão do 5º de Cavalaria (2/5). McDade e o 2/7 marcharam para Albany, e Tully, com o 2/5, para outra clareira, a Columbus.",
        { h: "Nguyễn Hữu An e Chu Huy Mân, do lado norte-vietnamita" },
        "O major-general Chu Huy Mân comandava a Frente B3. O coronel Nguyễn Hữu An (a Wikipédia também o chama de tenente-coronel) era o comandante avançado. Depois do X-Ray, An passou a ordem que ficou famosa: 'Entrem na coluna, agarrem pelo cinto e assim evitem as baixas por artilharia e aviões.'",
        { h: "Ernie Savage" },
        "O sargento Ernie Savage herdou o comando do pelotão de Henry Herrick quando este morreu no primeiro dia. Seu grupo ficou isolado e ficou conhecido como o 'pelotão perdido'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Moore tinha, no começo, uns 450 dos 765 homens do batalhão, levados em ondas por 16 helicópteros Huey. A clareira X-Ray tinha o tamanho de um campo de futebol mal desenhado, uns 100 metros de comprimento, e só cabiam oito helicópteros de uma vez. O PAVN tinha, segundo a Wikipédia, cerca de 2.500 homens no total na campanha. Perto do X-Ray estava o 9º Batalhão do 66º Regimento, a uns 200 metros da clareira, e os outros regimentos estavam na área.",
        { h: "O terreno" },
        "O X-Ray ficava ao pé leste do maciço de Chu Pong, cercado de árvores baixas, com um leito de riacho seco a oeste. O rio Ia Drang corria a uns 2 km a noroeste. No meio da clareira havia um grande [[cupinzeiro]], que virou o posto de comando de Moore. Mais ao norte e nordeste ficava Albany, em meio a [[capim-elefante]] da altura do peito.",
        { h: "A batalha em dez momentos" },
        { formation: true },
        "Primeiro, os pousos. Às 10h48 de 14 de novembro, depois de cerca de meia hora de preparo com fogo, os primeiros homens da companhia Bravo desceram. Cada onda levava pouco menos de uma companhia e demorava uns 30 minutos. O plano de Moore era mandar Bravo e Alpha para noroeste, além do riacho seco, e Charlie para o sul, em direção à montanha, enquanto Delta ficava de reserva.",
        "Segundo, o pelotão perdido. Por volta de meio-dia, o 1º pelotão de Bravo, do tenente Al Devney, avançou uns 100 metros a oeste do riacho e foi preso ao chão. O 2º pelotão, do tenente Henry Herrick, seguiu pelo lado direito, perseguiu os atacantes e foi cortado, a uns 100 metros do batalhão. Herrick e outros líderes morreram, e o sargento Savage segurou uma pequena colina, pedindo fogo de artilharia várias vezes. De 29 homens, 9 morreram e 13 ficaram feridos, até serem alcançados na tarde de 15 de novembro.",
        "Terceiro, o riacho seco e o sul. Cerca de 150 soldados do PAVN desceram pelo leito do riacho contra o 3º pelotão de Alpha. O tenente Bob Taft foi morto, e o sargento Lorenzo Nathan parou o avanço. O 2º pelotão de Alpha, do tenente Walter Marm, barrou um ataque pelo flanco. Às 13h32 chegou a companhia Charlie, do capitão Bob Edwards, que ficou de frente para a montanha, e às 14h30 desembarcaram os últimos homens de Charlie e os primeiros de Delta, sob fogo. Um ataque de 175 a 200 homens contra Charlie foi detido pela artilharia e por ataques aéreos até as 15h.",
        "Quarto, a noite. Alpha e Delta foram atacadas pelo lado esquerdo. Moore mandou Alpha e Bravo recuarem, para evacuar os feridos, e a luta virou um [[perímetro|perímetro]] fechado em círculo, de 360 graus, em volta da clareira. Um segundo avanço para socorrer o pelotão de Savage ganhou só uns 70 metros e parou diante de uma metralhadora num cupinzeiro. Marm correu sozinho contra ela e recebeu a Medalha de Honra. No fim da tarde, a companhia Bravo do 2/7 chegou como reforço, e à noite o grupo de Savage repeliu três ataques. Os norte-vietnamitas se comunicavam por cornetas.",
        "Quinto, o amanhecer de 15 de novembro. Por volta das 6h50, patrulhas de Charlie foram atacadas, e mais de 200 soldados do PAVN avançaram contra o lado sul do perímetro. Os 1º e 2º pelotões de Charlie sofreram muito, e os tenentes Neil Kroger e John Geoghegan morreram. O capitão Edwards foi gravemente ferido, e o comando passou de mão em mão. O batalhão era atacado por três lados. Moore mandou dizer 'Broken Arrow', o código que significa que uma unidade americana está para ser tomada, e todos os aviões disponíveis no Vietnã do Sul foram chamados. Um avião F-100 largou [[napalm]] perto do posto de comando de Moore por engano e feriu ou matou alguns americanos. Charlie perdeu 42 mortos e 20 feridos em duas horas e meia.",
        "Sexto, os reforços e o B-52. A Alpha do 2/7, do capitão Joel Sugdinis, chegou às 9h10, e o 2/5 de Tully, que saíra a pé da zona Victor, às 12h05. Com os dois batalhões, Moore montou o terceiro avanço, que enfim alcançou o pelotão de Savage, a tarde. Às 16h, os primeiros [[B-52|b-52]] bombardearam as encostas do maciço, a uns 7 km a oeste.",
        "Sétimo, a madrugada de 16 de novembro. Perto das 4h22, o PAVN atacou a companhia Bravo do 2/7, do capitão Myron Diduryk. Foram quatro ataques, o último perto das 6h30. O observador avançado, tenente Bill Lund, dirigiu o fogo de quatro baterias de artilharia, e Diduryk teve só seis feridos leves, e nenhum morto. O 1/7 foi retirado, mas o general Westmoreland mandou o 2/7 e o 2/5 ficarem, para não parecer uma retirada.",
        "Oitavo, a marcha. Em 17 de novembro, o 2/5 saiu a pé para Columbus, e o 2/7 de McDade, para Albany, para dar lugar a mais um bombardeio de B-52. Os soldados estavam havia quase 60 horas sem dormir. O primeiro sinal do inimigo foi visto pelo esquadrão de ponta: pegadas de sandália, setas de bambu apontando para o norte, capim amassado e grãos de arroz. O capim-elefante limitava a visão, e a coluna se estendia por cerca de 500 metros.",
        "Nono, a emboscada. O pelotão de reconhecimento capturou dois soldados do PAVN, e McDade mandou parar para interrogá-los. Os comandantes de companhia foram chamados à frente, com seus operadores de rádio. Às 13h15, o PAVN atacou a cabeça da coluna e correu pelo lado direito, em forma de L. A 6ª companhia do 8º Batalhão do 66º Regimento atacou de frente, a 1ª e a 2ª companhias do 1º Batalhão do 33º atacaram pelos flancos, e a 8ª do 8º/66º deu a volta e atacou por trás. McDade e seu grupo ficaram isolados num bosque entre duas clareiras. A companhia Charlie e a Alpha perderam 70 homens nos primeiros minutos. A luta durou cerca de 16 horas, e americanos e norte-vietnamitas ficaram tão misturados que aviões e artilharia podem ter acertado os dois lados. O comandante do 8º Batalhão, Lê Xuân Phối, foi ferido de morte.",
        "Décimo, o socorro. A companhia Alpha do 1/5, do capitão George Forrest, que ficara na retaguarda da coluna, formou um perímetro a uns 500 a 700 metros ao sul. A companhia Bravo do 1/5, do capitão Buse Tully, saiu de Columbus às 14h55 e encontrou Forrest às 16h30. A Bravo do 2/7, do capitão Diduryk, veterana do X-Ray, desembarcou de helicóptero no capim às 18h45, com o tenente Rick Rescorla à frente, e os feridos foram retirados a partir das 22h30."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "No X-Ray, os americanos tiveram 79 mortos e 121 feridos, segundo a Wikipédia. Em Albany, 155 mortos ou desaparecidos e 124 feridos. No total, os EUA contam entre 234 e 237 mortos. O lado americano relatou 634 corpos do PAVN encontrados no X-Ray e outros 1.215 mortos a distância, e 403 em Albany. Os próprios comandantes admitiram o exagero: Moore reduziu de 834 para 634 a contagem de seus homens, e McDade disse não ter visto nem 200 corpos em Albany. O relatório de 1966 da Frente do Planalto Central do PAVN fala em 559 mortos e 669 feridos em cinco combates principais.",
        "Cada lado reivindicou a vitória. Moore escreveu que os soldados norte-vietnamitas 'tinham lutado contra os americanos até um empate', e que, para eles, empatar com uma potência assim equivalia a ganhar.",
        { h: "Por que importa" },
        "A batalha virou o modelo da guerra. Os americanos apostaram em mobilidade aérea, artilharia e apoio aéreo, e a batalha foi uma das primeiras a popularizar a [[contagem de corpos|contagem de corpos]] como medida de sucesso, com uma proporção alegada de quase 10 mortos inimigos para 1. O PAVN percebeu que podia anular esse poder de fogo lutando a poucos metros dos americanos. Quase toda a baixa americana veio de tiros de fuzil e de morteiros leves, e Moore notou a pontaria precisa dos soldados do Norte e sua tática de mirar nos oficiais.",
        "Três anos depois, a batalha de Huế, durante a Ofensiva do Tet, mostrou o PAVN e o Vietcongue lutando dentro de uma grande cidade, e os americanos obrigados a retomá-la rua por rua.",
        { h: "Curiosidades e controvérsias" },
        { note: "Foi a primeira vez que B-52 apoiaram tropas em combate, segundo a Wikipédia. Depois da batalha, Westmoreland mandou seus chefes de inteligência e de operações trazer um ataque de B-52 em até sete horas depois de obter informação adequada." },
        { note: "O general Giap, segundo a Wikipédia, disse depois da batalha que, se os norte-vietnamitas derrotassem a tática dos americanos, os helicópteros, poderiam derrotar a estratégia deles. A Wikipédia não dá a data nem a fonte direta da frase." },
        { note: "Naquela época, o Exército americano não tinha equipes para avisar as famílias das mortes. Os telegramas eram entregues por motoristas de táxi. Julia Moore, esposa de Moore, acompanhou as entregas nas casas das viúvas de Fort Benning, e suas queixas levaram o Exército a criar equipes de um oficial e um capelão." }
      ]}
    ]
  },

  fallujah2004: {
    war: "Guerra do Iraque (2003–2011)",
    hook: "Seis semanas de luta casa a casa numa cidade que a maioria dos moradores já tinha deixado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Faluja, na província de Anbar, tinha cerca de 300.000 habitantes e muitas mesquitas. Em fevereiro de 2004, a 1ª Divisão de Fuzileiros Navais americana assumiu a área. Em 31 de março, quatro contratados da empresa Blackwater foram mortos numa emboscada na cidade, e as imagens dos corpos rodaram o mundo. Comandantes no Iraque achavam que as mortes não tinham importância militar, mas os políticos americanos pediram uma resposta forte.",
        "A resposta foi a Operação Vigilant Resolve, em 5 de abril de 2004. Terminou em 28 de abril sem retomar a cidade: um acordo deixou o controle com uma força local, a Brigada de Faluja, sob um ex-oficial baathista, Muhammed Latif. A insurgência cresceu. Em setembro, um oficial americano disse à ABC que capturar Abu Musab al-Zarqawi, que se dizia estar em Faluja, era a 'maior prioridade'. O objetivo declarado da nova operação era enfraquecer a insurgência antes das eleições iraquianas de janeiro de 2005.",
        { h: "O caminho até a ofensiva" },
        { timeline: [
          ["fev 2004", "A 1ª Divisão de Fuzileiros assume Faluja."],
          ["31 mar 2004", "Quatro contratados da Blackwater são mortos na cidade."],
          ["5–28 abr 2004", "Primeira batalha: Vigilant Resolve termina com um acordo."],
          ["7 nov, noite", "Ataque de diversão pelo oeste e pelo sul."],
          ["8 nov", "Corte de energia, bombardeio e ataque principal pelo norte."],
          ["9 nov, noite", "As tropas chegam à Rodovia 10."],
          ["13–16 nov", "Os combates mais duros diminuem."],
          ["23 dez", "Fim dos combates esparsos."]
        ]},
        "A operação se chamou Phantom Fury para os americanos, e foi rebatizada Al-Fajr ('a Alvorada', em árabe) pelo governo iraquiano. As fontes divergem sobre quem deu o novo nome: o primeiro-ministro ou o ministro da Defesa."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Do lado da coalizão" },
        "Quem comandou a operação foi a 1ª Divisão de Fuzileiros Navais, sob o general Richard Natonski, dentro da I Força Expedicionária de Fuzileiros, do tenente-general John Sattler. Duas equipes de combate regimentais (as RCT-1 e RCT-7) fizeram o ataque. Havia ainda unidades do Exército americano, cerca de 2.000 soldados iraquianos e o 1º Batalhão do regimento britânico Black Watch, com uns 850 homens.",
        { h: "Do lado dos insurgentes" },
        "Vários grupos estavam em Faluja: a Al-Qaeda no Iraque, o Exército Islâmico do Iraque, o Ansar al-Sunna, o Exército de Maomé e outros. Três deles tinham o quartel-general nacional ali. Segundo a Wikipédia, sunitas e xiitas lutaram lado a lado, e a cidade não teve as brigas internas entre insurgentes vistas em outros lugares. Os combatentes incluíam iraquianos e estrangeiros. As estimativas variam: 3.000 é um número frequente, e outras fontes citam mais. Vários líderes saíram antes do ataque, e acredita-se que Zarqawi tenha escapado.",
        { h: "Condecorados" },
        "O sargento David Bellavia, do Exército (Força-Tarefa 2-2), recebeu a Medalha de Honra. O sargento Rafael Peralta, dos fuzileiros navais, recebeu a Cruz da Marinha. A Wikipédia lista dez fuzileiros com esta condecoração."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A coalizão reuniu cerca de 13.500 homens, com cerca de 6.500 fuzileiros e 1.500 soldados do Exército americano, mais 2.500 marinheiros em funções de apoio e uns 2.000 iraquianos. As [[fuzileiros|fuzileiros navais]] se dividiam em duas equipes regimentais: a RCT-1, com os batalhões 3/1 e 3/5 e o 2º Batalhão do 7º de Cavalaria (Exército), e a RCT-7, com o 1/8, o 1/3 e o 2º Batalhão do 2º de Infantaria (Exército), entre outros. Os [[insurgentes]], segundo as estimativas, eram cerca de 3.000. A coalizão teve apoio de F-15, F-16, A-10, B-52 e AC-130, além de drones Predator.",
        { h: "O terreno e a preparação" },
        "A cidade foi cercada por postos de controle para impedir que alguém entrasse ou saísse. A coalizão fez mapas por imagens aéreas, usou panfletos e transmissões para pedir que os civis saíssem, e a maioria foi embora. Os militares americanos estimaram que 70 a 90% dos 300.000 moradores saíram, o que deixou de 30.000 a 90.000 na cidade. Agências de notícias disseram que homens em idade militar foram impedidos de sair.",
        "Os insurgentes se prepararam para o ataque. Cavaram túneis e trincheiras e esconderam muitos [[artefatos explosivos improvisados|artefato explosivo improvisado]]. Em algumas casas, encheram os cômodos de botijões de gás e galões de gasolina ligados a um detonador remoto. Fecharam ruas com barreiras de concreto e até colocaram barreiras dentro das casas. Fecharam com tijolos as escadas para os telhados, para atrair os soldados a áreas de tiro preparadas.",
        { h: "A batalha em oito momentos" },
        { formation: true },
        "Primeiro, o isolamento e o engano. Em 8 de novembro, um bombardeio aéreo de 12 horas se concentrou no sul e no sudeste, onde os insurgentes tinham as defesas mais fortes, para reforçar a impressão de que o ataque viria dali. Houve também panfletos, uma base falsa e ataques de sondagem. A energia da cidade foi cortada por engenheiros da Marinha, os [[seabees]], que desligaram duas subestações.",
        "Segundo, a diversão. Na noite de 7 de novembro, a Força-Tarefa Wolfpack, com uma companhia mecanizada do Exército e o 36º Batalhão de Comandos iraquiano, atacou pela península do oeste, na curva do Eufrates. Tomou o hospital geral de Faluja, a ponte Blackwater e a área da ponte de Jurf Kas Sukr. Dois fuzileiros morreram quando um trator caiu no rio. Segundo a Wikipédia, 42 insurgentes morreram na beira do rio.",
        "Terceiro, o ataque pelo norte. Na madrugada de 8 de novembro, depois de uma barragem de cerca de 2.500 projéteis de 155 mm e de ataques aéreos, as duas equipes regimentais atacaram ao longo de uma linha de uns 5 km no norte da cidade: a RCT-1 a noroeste, a RCT-7 a nordeste. Os batalhões mecanizados do Exército, o 2-7 e a Força-Tarefa 2-2, iam na frente, e os quatro batalhões de fuzileiros vinham atrás, para limpar os prédios. O 1º Batalhão do Black Watch patrulhou as rodovias a leste.",
        "Quarto, a estação e os bairros. As tropas tomaram a estação de trem, usada depois como base, e à tarde entraram nos bairros de Hay Naib al-Dubat e al-Naziza. Os seabees vinham em tratores blindados e empurravam o entulho para abrir as ruas. Segundo o estudo do Modern War Institute, os pontos de suprimento ficavam logo ao norte da cidade e avançavam junto com as tropas, de modo que o ataque não parou para se reabastecer.",
        "Quinto, a Rodovia 10. Depois do anoitecer de 9 de novembro, algumas unidades chegaram à [[Linha de Fase Fran|linha de fase]], que era a Rodovia 10, quase na metade da cidade. Os insurgentes lutavam de dentro dos prédios, em grupos de quatro a doze, com armas leves, lança-granadas e bombas, e faziam buracos nas paredes para passar de casa em casa.",
        "Sexto, a limpeza metódica. De 10 a 14 de novembro, as tropas avançaram devagar. A sequência padrão era ataque aéreo, depois artilharia ou morteiros, depois equipes com blindados, infantaria e engenheiros descendo a rua. Infantaria e engenheiros arrombavam os prédios e os limpavam cômodo por cômodo. Tanques e carros Bradley foram muito usados: uma companhia de tanques disparou cerca de 1.600 tiros de canhão em oito dias, a maioria contra alvos a menos de 200 metros. O estudo do Modern War Institute aponta um problema: as unidades não avançavam no mesmo ritmo. A Força-Tarefa 2-2, com blindados próprios, andava mais depressa que o 1/3 de fuzileiros, que perdera tempo numa brecha que deu errado, e a emenda entre elas foi explorada pelos insurgentes.",
        "Sétimo, o sul. Perto de 13 de novembro, a maior parte da luta tinha diminuído, mas ficaram focos de resistência. Em 16 de novembro, depois de nove dias, o comando dos fuzileiros falava em limpar bolsões. As tropas desceram pelo sul e voltaram ao norte para varrer o que sobrou. Os insurgentes quase não atacavam à noite, e os soldados podiam descansar.",
        "Oitavo, o fim. Os combates esparsos continuaram até 23 de dezembro. No meio de dezembro, os moradores voltaram, depois de identificação biométrica. Em meados de janeiro de 2005, cerca de 10% dos habitantes tinham voltado, e no fim de março, cerca de 30%."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A coalizão ocupou a cidade. As fontes divergem nas perdas. A Wikipédia soma 107 mortos e 613 feridos da coalizão: 95 americanos mortos e 560 feridos (54 mortos e 425 feridos entre 7 e 16 de novembro), 8 iraquianos mortos e 43 feridos, e 4 britânicos mortos e 10 feridos em dois ataques na periferia. O estudo do Modern War Institute cita 38 americanos mortos e cerca de 275 feridos, o que mostra que a contagem depende do que se inclui. Dos insurgentes, as estimativas de mortos vão de cerca de 1.000 a 1.200 até mais de 2.000, sem número oficial, e cerca de 1.500 foram capturados.",
        "Dos civis, o Iraq Body Count registra de 581 a 670 mortos, e a Cruz Vermelha estimou cerca de 800. Outras estimativas, citadas na imprensa, foram maiores. Dos cerca de 50.000 edifícios, de 7.000 a 10.000 foram destruídos, e metade a dois terços dos demais ficaram bastante danificados. Cerca de 60 mesquitas foram destruídas ou muito danificadas. Um relato fala em 200.000 deslocados pelas duas ofensivas de 2004.",
        { h: "Por que importa" },
        "A Wikipédia descreve a batalha como a mais sangrenta e feroz de toda a guerra do Iraque. Do ponto de vista militar, o resultado foi menos decisivo do que os americanos esperavam: Zarqawi e outros combatentes de fora teriam escapado antes. Em 2005 e 2006, houve novos atentados e novas operações na cidade, e em 2007 ela passou ao controle iraquiano. O Estado Islâmico a tomou no início de 2014, e as forças iraquianas a retomaram em junho de 2016.",
        "Para o estudo de combate urbano, o caso deixa lições. O Modern War Institute destaca o tempo de planejamento, que em 2004 foi de meses, ao contrário da pressa política de abril. Destaca também a integração de notícias e a presença de repórteres para convencer civis a sair, o levantamento de informações até os níveis mais baixos, o isolamento da cidade, a ligação entre abastecimento e avanço e o treino conjunto de unidades do Exército e dos fuzileiros. Anos depois, a Batalha de Mosul (2016–2017) voltou a mostrar combate urbano em larga escala na região.",
        { h: "Curiosidades e controvérsias" },
        { note: "O fósforo branco: o Washington Post informou em 10 de novembro de 2004, com base em repórteres que acompanhavam a Força-Tarefa 2-2 da RCT-7, que ele foi usado na batalha. Em 8 de novembro de 2005, a emissora italiana RAI exibiu o documentário 'Fallujah, The Hidden Massacre', que dizia que fósforo branco e bombas incendiárias MK-77 teriam sido usados e mostrava civis queimados, e que isso violaria o Protocolo III da Convenção sobre Certas Armas Convencionais, que os EUA só assinaram em 2009. Em 15 de novembro de 2005, o embaixador americano Robert Tuttle negou, numa carta ao jornal The Independent, que a substância tivesse sido usada como arma. No mesmo dia, o porta-voz do Pentágono, tenente-coronel Barry Venable, confirmou à BBC que o fósforo branco foi usado como arma incendiária, para expulsar insurgentes de posições cobertas e depois acertá-los com explosivos. A Organização para a Proibição de Armas Químicas, citada no documentário, disse que a substância pode ser usada para iluminar e pelo calor, mas não como arma química ofensiva." },
        { note: "O ferido morto: em 16 de novembro de 2004, a rede NBC exibiu imagens em que um fuzileiro matava um insurgente ferido, que disse estar 'fingindo de morto'. Os investigadores do serviço de investigação da Marinha concluíram depois que ele agiu em legítima defesa." },
        { note: "Os homens que não puderam sair: agências de notícias disseram que os americanos impediram homens de cerca de 15 a 50 anos de deixar a cidade antes do ataque. O jornalista George Monbiot escreveu no Guardian que os fuzileiros trataram a cidade como se só combatentes vivessem nela." },
        { note: "O urânio empobrecido: forças americanas usaram munição desse material. Estudos de 2009 a 2012 relataram mais câncer e defeitos de nascimento em Faluja, e alguns ligaram isso ao urânio. Outra revisão, de 2012, não encontrou aumento claro de defeitos de nascimento ligado a ele, e a causa continua em disputa." },
        { note: "Os números variam: as perdas de insurgentes e de civis aparecem em faixas muito largas, e não existe contagem oficial dos primeiros. As fontes citadas usam períodos diferentes, e por isso as perdas americanas vão de 38 a 95 mortos." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lexingtonconcord: {
    terrain: [
      { t: "hill", x: 8, y: 14, rx: 8, ry: 6, l: "Colina Punkatasset" },
      { t: "sea", x: 17, y: 12, w: 2.4, h: 26, l: "" },
      { t: "note", x: 24, y: 8, l: "Rio Concord e ponte Norte" },
      { t: "note", x: 33, y: 47, l: "Concord" },
      { t: "note", x: 60, y: 47, l: "Lexington" },
      { t: "note", x: 92, y: 47, l: "Charlestown" },
      { t: "note", x: 80, y: 66, l: "Boston ↘ (mapa esquemático)" }
    ],
    units: [
      { id: "lex", s: "a", k: "inf", w: 7, h: 3, l: "Milícia de Lexington (Parker)" },
      { id: "conc", s: "a", k: "inf", w: 12, h: 4, l: "Milícias de Concord, Acton e Lincoln (Barrett)" },
      { id: "act", s: "a", k: "inf", w: 6, h: 3, l: "Minutemen de Acton (Davis)" },
      { id: "ring1", s: "a", k: "inf", w: 12, h: 3, l: "Milicianos de outras cidades" },
      { id: "ring2", s: "a", k: "inf", w: 12, h: 3, l: "" },
      { id: "adv", s: "b", k: "inf", w: 9, h: 3, l: "Vanguarda de Pitcairn" },
      { id: "main", s: "b", k: "inf", w: 14, h: 4, l: "Coluna de Smith (granadeiros)" },
      { id: "laurie", s: "b", k: "inf", w: 7, h: 3, l: "Companhias de Laurie (90 a 95)" },
      { id: "pars", s: "b", k: "inf", w: 8, h: 3, l: "Destacamento de Parsons" },
      { id: "perc", s: "b", k: "inf", w: 14, h: 4, l: "Coluna de Percy (≈ 1.000 e 2 canhões)" }
    ],
    steps: [
      { t: "Amanhecer de 19 de abril. A vanguarda de Pitcairn chega a Lexington, onde uns 77 a 80 milicianos de Parker esperam em formação, em campo aberto e fora da estrada. Atrás vem a coluna de Smith, e Percy ainda está em Boston.",
        p: { lex: [60, 38], conc: [36, 36], act: [28, 30], ring1: [84, 6], ring2: [84, 62], adv: [74, 38], main: [88, 38], laurie: [92, 31], pars: [92, 44], perc: [96, 58] } },
      { t: "Os britânicos avançam para a praça, mandam largar as armas, e um tiro ecoa. Uma descarga mata oito milicianos e fere dez. Os outros se dispersam. Quem atirou primeiro é discutido.",
        p: { lex: [56, 30], adv: [64, 38], main: [82, 38] } },
      { t: "Smith refaz a coluna e segue para Concord. Os milicianos de Concord, uns 250, recuam à frente dos britânicos e, comandados por Barrett, passam para a colina além da ponte Norte.",
        p: { lex: [52, 25], adv: [46, 38], main: [58, 38], conc: [11, 14] }, x: ["lex"] },
      { t: "Em Concord, os granadeiros revistam a vila, quebram canhões e queimam carros de canhão. A companhia de Parsons vai à fazenda de Barrett, e as de Laurie guardam a ponte Norte.",
        p: { main: [34, 36], adv: [32, 40], pars: [6, 3], laurie: [15, 22], act: [10, 20] } },
      { t: "Barrett vê a fumaça e desce a colina com mais de 400 homens. Os minutemen de Acton, os únicos com baionetas, vão à frente. Laurie recua para o outro lado da ponte.",
        p: { conc: [12, 20], act: [14, 24], laurie: [24, 24] } },
      { t: "Um tiro parte do lado britânico, e vem uma descarga irregular: morrem Isaac Davis e outro minuteman. Buttrick manda atirar. Os britânicos, com oficiais atingidos, fogem para a vila.",
        p: { conc: [18, 24], act: [19, 26], laurie: [30, 32], pars: [10, 8] } },
      { t: "Depois do meio-dia, a coluna sai de Concord. Milicianos de dezenas de cidades chegam e atiram de muros e bosques. Smith e Pitcairn são feridos perto de Lexington.",
        p: { main: [52, 38], adv: [44, 36], laurie: [42, 40], pars: [38, 36], conc: [34, 28], act: [34, 46], ring1: [58, 26], ring2: [58, 50] } },
      { t: "Por volta das 14h, a coluna de Percy chega a Lexington com dois canhões. Os homens de Smith, de pé desde as 2h da madrugada, descansam atrás dela. Juntos, são cerca de 1.700.",
        p: { perc: [66, 38], main: [60, 40], adv: [54, 38], conc: [40, 28], ring1: [66, 26], ring2: [66, 52] } },
      { t: "Às 15h30 a marcha recomeça, com flanqueadores. Em Menotomy e Cambridge, atiradores nas casas e um anel móvel de milicianos causam a maior parte das baixas do dia. Percy escapa por uma trilha para Charlestown e chega ao anoitecer.",
        p: { perc: [92, 38], main: [86, 40], adv: [82, 38], conc: [70, 28], ring1: [80, 26], ring2: [80, 52] } }
    ]
  },

  iadrang: {
    terrain: [
      { t: "hill", x: 10, y: 38, rx: 13, ry: 28, l: "Maciço de Chu Pong" },
      { t: "sea", x: 0, y: 0, w: 100, h: 3, l: "" },
      { t: "note", x: 55, y: 6, l: "Rio Ia Drang (noroeste)" },
      { t: "note", x: 90, y: 6, l: "Norte ↑" },
      { t: "note", x: 38, y: 46, l: "X-Ray" },
      { t: "note", x: 66, y: 22, l: "Albany" },
      { t: "note", x: 84, y: 30, l: "Columbus" },
      { t: "note", x: 72, y: 66, l: "Victor" }
    ],
    units: [
      { id: "bR", s: "a", k: "inf", w: 6, h: 3, l: "Bravo, 1/7" },
      { id: "aL", s: "a", k: "inf", w: 6, h: 3, l: "Alpha, 1/7" },
      { id: "cH", s: "a", k: "inf", w: 6, h: 3, l: "Charlie, 1/7" },
      { id: "dL", s: "a", k: "inf", w: 6, h: 3, l: "Delta, 1/7 (reserva)" },
      { id: "lost", s: "a", k: "inf", w: 4, h: 3, l: "Pelotão de Herrick e Savage" },
      { id: "b27", s: "a", k: "inf", w: 6, h: 3, l: "Bravo, 2/7" },
      { id: "t25", s: "a", k: "inf", w: 8, h: 3, l: "2º Batalhão do 5º de Cavalaria (Tully)" },
      { id: "c27", s: "a", k: "inf", w: 4, h: 18, l: "Coluna do 2/7 (McDade)" },
      { id: "a15", s: "a", k: "inf", w: 6, h: 3, l: "Alpha, 1/5 (retaguarda)" },
      { id: "pW", s: "b", k: "inf", w: 8, h: 4, l: "PAVN: 66º Regimento" },
      { id: "pS", s: "b", k: "inf", w: 10, h: 4, l: "PAVN vindos do sul e da montanha" },
      { id: "p8", s: "b", k: "inf", w: 6, h: 4, l: "8º Batalhão do 66º" },
      { id: "p33", s: "b", k: "inf", w: 6, h: 4, l: "1º Batalhão do 33º" }
    ],
    steps: [
      { t: "14 de novembro, 10h48. Moore pousa na clareira X-Ray, ao pé leste do maciço de Chu Pong. Bravo desce primeiro, depois Alpha, Charlie e Delta. Uns 450 homens, e só cabem oito helicópteros por vez.",
        p: { bR: [42, 42], aL: [47, 40], cH: [48, 50], dL: [50, 45], lost: [42, 42], b27: [62, 58], t25: [74, 66], c27: [70, 62], a15: [74, 62], pW: [26, 44], pS: [32, 58], p8: [60, 14], p33: [70, 12] } },
      { t: "Bravo e Alpha avançam para noroeste, além do riacho seco. O pelotão de Herrick persegue os atacantes e fica isolado, a uns 100 metros do batalhão.",
        p: { bR: [38, 38], aL: [44, 34], lost: [30, 34] } },
      { t: "Cerca de 150 soldados do PAVN descem pelo leito do riacho contra Alpha. Charlie pousa às 13h32, de frente para a montanha. Sargento Savage segura sua colina com artilharia.",
        p: { pW: [34, 40], pS: [38, 54], cH: [46, 52] } },
      { t: "Ao cair da tarde, Moore recua Alpha e Bravo e fecha um perímetro de 360 graus. À noite chega o reforço da Bravo do 2/7, e o pelotão isolado repele três ataques.",
        p: { bR: [42, 40], aL: [47, 37], b27: [52, 44], pW: [32, 38] } },
      { t: "15 de novembro, 6h50. Mais de 200 soldados do PAVN atacam o sul, contra Charlie, e a luta se estende a três lados do perímetro. Moore pede 'Broken Arrow', e os aviões são chamados.",
        p: { pS: [47, 58], cH: [48, 53], pW: [30, 38] } },
      { t: "O 2/5 de Tully chega a pé do ponto Victor às 12h05, e a Alpha do 2/7 reforça Charlie. O pelotão isolado é alcançado à tarde. Às 16h, o B-52 bombardeia as encostas do maciço.",
        p: { t25: [52, 55], lost: [38, 38], pS: [40, 62], pW: [14, 40] }, x: ["pS"] },
      { t: "16 de novembro, 4h22. Quatro ataques contra a Bravo do 2/7, com o fogo de quatro baterias dirigido por Lund. Seis feridos leves e nenhum morto. O combate no X-Ray acaba.",
        p: { b27: [47, 36], pW: [24, 34] }, x: ["pW"] },
      { t: "17 de novembro. O 2/5 vai a pé para Columbus, e o 2/7 de McDade vai para Albany, numa coluna de uns 500 metros. Estão há quase 60 horas sem dormir, e o capim-elefante limita a visão.",
        p: { t25: [82, 28], c27: [62, 32], a15: [60, 46], bR: [44, 44], aL: [46, 38] } },
      { t: "13h15. O PAVN ataca a cabeça da coluna e corre pelo lado direito, em L. O 66º vem de frente e por trás, e o 33º pelos flancos. McDade e o grupo de comando ficam isolados num bosque.",
        p: { p8: [64, 24], p33: [70, 34], c27: [62, 28], a15: [60, 46] } },
      { t: "Três companhias americanas chegam para reforçar os sobreviventes: a Alpha do 1/5 forma um perímetro ao sul, a Bravo do 1/5 sai de Columbus, e a Bravo do 2/7 pousa de helicóptero às 18h45. A luta durou cerca de 16 horas.",
        p: { a15: [60, 40], t25: [76, 32], b27: [60, 26], p8: [68, 18], p33: [76, 34] }, x: ["p8", "p33"] }
    ]
  },

  fallujah2004: {
    terrain: [
      { t: "sea", x: 13, y: 0, w: 5, h: 70, l: "Rio Eufrates" },
      { t: "note", x: 6, y: 42, l: "Hospital e pontes" },
      { t: "note", x: 90, y: 6, l: "Norte ↑" },
      { t: "note", x: 50, y: 34, l: "Rodovia 10 (Linha de Fase Fran)" },
      { t: "note", x: 52, y: 67, l: "Postos de controle ao sul" }
    ],
    units: [
      { id: "rct1", s: "a", k: "inf", w: 22, h: 3.5, l: "RCT-1 (noroeste)" },
      { id: "rct7", s: "a", k: "inf", w: 22, h: 3.5, l: "RCT-7 (nordeste)" },
      { id: "tf27", s: "a", k: "inf", w: 10, h: 3, l: "2-7 Cav (Exército)" },
      { id: "tf22", s: "a", k: "inf", w: 10, h: 3, l: "TF 2-2 Inf (Exército)" },
      { id: "wolf", s: "a", k: "inf", w: 8, h: 3, l: "Wolfpack e comandos iraquianos" },
      { id: "bw", s: "a", k: "inf", w: 4, h: 14, l: "Black Watch (rodovias a leste)" },
      { id: "ckS", s: "a", k: "inf", w: 44, h: 2, l: "" },
      { id: "iN", s: "b", k: "inf", w: 40, h: 4, l: "Insurgentes ao norte" },
      { id: "iC", s: "b", k: "inf", w: 36, h: 4, l: "Insurgentes no centro" },
      { id: "iS", s: "b", k: "inf", w: 34, h: 5, l: "Defesas mais fortes (sul e sudeste)" },
      { id: "iH", s: "b", k: "inf", w: 8, h: 3, l: "Insurgentes no hospital" }
    ],
    steps: [
      { t: "Antes do ataque. Postos de controle fecham a cidade, e a maioria dos civis já saiu. Os fuzileiros se alinham ao norte, com o Exército à frente. Os insurgentes esperam um ataque pelo sul e pelo sudeste, onde as defesas são mais fortes.",
        p: { rct1: [38, 3], rct7: [64, 3], tf27: [34, 8], tf22: [62, 8], wolf: [6, 26], bw: [92, 34], ckS: [52, 64], iN: [50, 17], iC: [50, 28], iS: [58, 48], iH: [6, 34] } },
      { t: "Noite de 7 de novembro. A Força-Tarefa Wolfpack e comandos iraquianos atacam pelo oeste e pelo sul, como diversão, e tomam o hospital e duas pontes.",
        p: { wolf: [6, 34] }, x: ["iH"] },
      { t: "8 de novembro. Cortada a energia, e depois de cerca de 2.500 projéteis de 155 mm, as duas equipes regimentais atacam de uma só vez, ao longo de uns 5 km de frente. O Exército vai na frente.",
        p: { rct1: [38, 14], rct7: [64, 14], tf27: [34, 19], tf22: [62, 19] } },
      { t: "Os Marines tomam a estação de trem e, à tarde, os bairros de Hay Naib al-Dubat e al-Naziza. Os tratores blindados dos seabees abrem as ruas cheias de entulho.",
        p: { rct1: [38, 20], rct7: [64, 20], tf27: [34, 25], tf22: [62, 25] }, x: ["iN"] },
      { t: "Noite de 9 de novembro. As primeiras unidades chegam à Rodovia 10, quase no meio da cidade.",
        p: { rct1: [38, 30], rct7: [64, 30], tf27: [34, 34], tf22: [62, 34] } },
      { t: "10 a 14 de novembro. As tropas avançam devagar, com ataque aéreo, artilharia e depois blindados, infantaria e engenheiros, limpando cômodo por cômodo. Os insurgentes lutam de dentro dos prédios, em grupos de quatro a doze.",
        p: { rct1: [38, 40], rct7: [64, 40], tf27: [34, 44], tf22: [62, 44] }, x: ["iC"] },
      { t: "Perto de 13 a 16 de novembro, a maior parte da luta diminui. As tropas chegam ao sul, onde ficavam as defesas mais fortes, e limpam os bolsões que restam.",
        p: { rct1: [38, 52], rct7: [64, 52], tf27: [34, 56], tf22: [62, 56] }, x: ["iS"] },
      { t: "Até 23 de dezembro restam focos isolados. As tropas varrem a cidade de novo, do sul ao norte. No meio de dezembro, os moradores começam a voltar, depois de identificação biométrica.",
        p: { rct1: [38, 44], rct7: [64, 44], tf27: [34, 48], tf22: [62, 48] } }
    ]
  }
});
