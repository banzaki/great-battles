// In-depth battles, batch be: vicksburg, bunkerhill, gatepa.
// Checked against the English and Portuguese Wikipedia articles on the Siege and Campaign of Vicksburg, the Battle of
// Bunker Hill, the Tauranga campaign and Gate Pa, NZHistory (Battle of Pukehinahina, Gate Pa, the Maori rules of
// war), Te Ara (Taratoa, Pene Taka), Vincent O'Malley's account of the rules, and the works those pages cite.
// Where sources disagree the text says so. Gate Pa: officers killed are not named because the sources consulted give
// only the count; Vicksburg and Bunker Hill diagrams are schematic and show the sectors, not every regiment.

Object.assign(GLOSSARY, {
  "plano anaconda": "Estratégia da União no começo da guerra: bloquear os portos do Sul e tomar o rio Mississippi, para apertar a Confederação como uma serpente aperta a presa.",
  "redan": "Fortim de terra em forma de V, com a ponta virada para o inimigo. Em Vicksburg, os redans de terra amarela ficavam nos pontos mais altos da linha.",
  "abrigo antibombas": "Buraco cavado no morro, às vezes com paredes de madeira, onde as pessoas se escondiam dos tiros de canhão. Em Vicksburg, os moradores cavaram mais de 500 na argila.",
  "libertação sob palavra": "Soltar um prisioneiro depois de ele prometer não voltar a lutar até ser trocado por outro. Em Vicksburg, Grant usou isso para não ter de alimentar uns 30.000 presos.",
  "infantaria leve": "Companhias de soldados mais rápidos e treinados para escaramuçar, que ficavam na ponta esquerda de cada regimento britânico.",
  "cerca de ripas": "Cerca de campo feita de varas ou ripas de madeira presas em postes. Em Bunker Hill, os colonos a encheram de feno e terra para fazer uma proteção.",
  "carcaça incendiária": "Projétil de ferro furado e cheio de material que queima, disparado por canhão para pôr fogo em casas e navios. Foi o que queimou Charlestown.",
  "vitória de pirro": "Vitória que custa tanto ao vencedor que quase equivale a uma derrota. O nome vem do rei Pirro, do Épiro, que venceu os romanos em 279 a.C. com perdas enormes.",
  "pā": "Aldeia ou fortaleza fortificada dos Māori, com trincheiras, paliçadas e abrigos. Os melhores pās dos anos 1860 eram feitos para resistir à artilharia.",
  "rua": "Abrigo subterrâneo cavado dentro de um pā, onde os defensores se protegiam do bombardeio e de onde podiam atirar quando os atacantes chegavam perto.",
  "mere": "Clava curta e achatada dos Māori, de madeira, osso ou pedra, usada no combate corpo a corpo.",
  "iwi": "Tribo ou grande grupo de descendentes comuns na sociedade Māori. Os Ngāi Te Rangi são um iwi de Tauranga.",
  "hapū": "Subgrupo de um iwi, formado por várias famílias, que muitas vezes decidia sozinho se entrava numa guerra.",
  "movimento kīngitanga": "O movimento do Rei Māori, criado em 1858, em que várias tribos escolheram um rei próprio para segurar suas terras. O governo colonial o via como rebelião e invadiu o Waikato em 1863.",
  "brigada naval": "Marinheiros e fuzileiros dos navios de guerra, desembarcados para lutar em terra junto com o exército.",
  "canhão armstrong": "Canhão britânico de aço, de carregar pela culatra e com cano raiado, mais preciso e de maior alcance que os de antes. Foi usado em grande número na Nova Zelândia."
});

Object.assign(DEEP, {
  vicksburg: {
    war: "Guerra de Secessão (1861–1865), campanha de Vicksburg (1862–1863)",
    hook: "Quarenta e sete dias de cerco, uma cidade escondida em cavernas e a última chave do rio Mississippi.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Na Guerra de Secessão, o rio Mississippi era a estrada do meio dos Estados Unidos. Quem o controlasse podia mover tropas e carga de norte a sul e separar o Texas, o Arkansas e a Louisiana do resto da Confederação. Tomar o rio fazia parte do [[plano anaconda]] da União. Em 1863, quase todo o curso já estava em mãos da União, menos um trecho entre Vicksburg e Port Hudson. Vicksburg ficava numa barranca alta, numa curva do rio, e seus canhões comandavam a água.",
        "Grant passou o inverno de 1862 para 1863 tentando chegar à cidade por caminhos que não deram em nada. Cavou um canal para desviar o rio. Tentou entrar por riachos e canais do norte, o Yazoo Pass e o Steele's Bayou, onde a frota foi barrada por um forte e por árvores derrubadas pelos confederados. Tudo falhou, entre janeiro e abril.",
        { h: "O caminho até Vicksburg" },
        { timeline: [
          ["Jan a abr de 1863", "Canal, Yazoo Pass, Steele's Bayou, Lake Providence e Duckport: nenhum plano chega a Vicksburg."],
          ["16 de abril", "Sete canhoneiras e três transportes vazios descem o rio sob os canhões de Vicksburg, numa noite sem lua. Treze feridos, nenhum morto."],
          ["Abril", "A cavalaria do coronel Grierson percorre o Mississippi e desvia a atenção dos confederados."],
          ["29–30 de abril", "Cerca de 17.000 soldados cruzam o rio em Bruinsburg, ao sul da cidade."],
          ["1º a 14 de maio", "Vitórias em Port Gibson e Raymond. Em 14 de maio, Grant toma Jackson, a capital do estado."],
          ["16 e 17 de maio", "Pemberton perde em Champion Hill e na ponte do rio Big Black, onde 1.800 confederados são capturados, e se fecha em Vicksburg."]
        ]},
        "Foi a maior operação anfíbia dos Estados Unidos até o desembarque na Normandia, em 1944. Grant largou a base de suprimentos e levou o exército para o interior, tomando comida das fazendas pelo caminho. Em 18 de maio, estava diante de Vicksburg."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ulysses S. Grant, 41 anos" },
        "General do Exército do Tennessee. Tinha vencido em Forte Donelson e Shiloh, mas era criticado pelas perdas e por boatos sobre bebida. Em Vicksburg, mostrou o que o distinguia: depois de cada fracasso, tentava outro caminho, e escolheu o plano mais ousado, o de cortar o próprio fio de suprimento e viver do que encontrasse. Quando os assaltos falharam, aceitou que a cidade só cairia pelo cerco.",
        { h: "John C. Pemberton, 49 anos" },
        "Tenente-general confederado, nascido no Norte, na Filadélfia, que tinha escolhido o lado do Sul. Recebeu a ordem de Jefferson Davis de segurar Vicksburg a todo custo, e seu superior Johnston mandou o contrário: abandonar a cidade e salvar o exército. Pemberton ficou. A Wikipédia nota que ele, sendo nortista de nascimento, talvez temesse a condenação pública se saísse.",
        { h: "Os outros nomes" },
        "William T. Sherman, amigo de Grant e comandante de corpo, liderou o primeiro assalto, em 19 de maio, e depois vigiou Johnston. James McPherson e John McClernand comandavam os outros dois corpos. McClernand escreveu relatos que exageravam seu sucesso no assalto de 22 de maio, e Grant o afastou em 18 de junho. O almirante David Porter comandava as canhoneiras. Joseph E. Johnston reunia um exército de socorro em Jackson, que nunca foi forte o bastante para romper o cerco."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O Exército do Tennessee tinha cerca de 44.500 homens no início da campanha e chegou a uns 75.000 a 77.000 no auge do cerco, com a chegada de reforços em meados de junho. Pemberton comandava o Exército do Mississippi, de uns 30.000 homens (fontes dão até 33.000), em quatro divisões: as de Stevenson, Forney, Smith e Bowen.",
        { h: "O terreno" },
        "A cidade ficava no alto de morros de argila amarela, cortados por ravinas fundas e cobertos de mato. As defesas formavam um arco de cerca de 10 km (seis milhas e meia), com [[redans|redan]], redutos e fortes ligados por trincheiras. Entre eles estavam o Stockade Redan, o Third Louisiana Redan e o Great Redoubt. Para o atacante, cada ravina era uma armadilha, e o fogo vinha sempre de cima.",
        { h: "O cerco em oito movimentos" },
        { formation: true },
        "Primeiro, o arco. Depois de Big Black, Pemberton fechou suas quatro divisões na linha defensiva. Os três corpos de Grant cercaram a cidade pelo leste, com Sherman ao norte, McPherson no centro e McClernand ao sul, e a frota de Porter fechou o rio. Grant tinha pressa: queria acabar antes que Johnston juntasse um exército.",
        "Segundo, o assalto de 19 de maio. As tropas de Sherman atacaram o Stockade Redan sem um bom reconhecimento. Perderam 157 mortos, 777 feridos e 8 desaparecidos. Do lado confederado, foram 8 mortos e 62 feridos.",
        "Terceiro, o assalto de 22 de maio. Depois de um bombardeio de artilharia e da frota, Grant atacou toda a linha, numa frente de cerca de cinco quilômetros. Sherman, McPherson e McClernand falharam. A União perdeu 502 mortos, 2.550 feridos e 147 desaparecidos em um dia. As perdas confederadas foram estimadas em menos de 500. Foi a prova de que o cerco seria o único caminho.",
        "Quarto, o cerco metódico. Em 25 de maio, as Special Orders nº 140 mandaram os corpos avançar por trincheiras de [[sapa]], zigue-zague a zigue-zague, até perto das linhas inimigas. Em 11, 12 e 14 de junho chegaram os reforços de Herron, Washburn e do IX Corpo de Parke, e a linha da União ficou fechada de rio a rio.",
        "Quinto, a cidade sob fogo. As canhoneiras dispararam mais de 22.000 projéteis contra Vicksburg, e a artilharia do exército disparou mais ainda. Os moradores cavaram mais de 500 [[abrigos antibombas|abrigo antibombas]] no morro, e os soldados da União apelidaram a cidade de 'Vila dos Cães-da-pradaria'. Menos de uma dúzia de civis são conhecidos como mortos. Em 28 de maio, a bateria confederada apelidada de 'Whistling Dick' afundou a canhoneira USS Cincinnati.",
        "Sexto, os dois lados de fora. A oeste, no Mississippi, as forças confederadas de John Walker atacaram a base de Milliken's Bend em 7 de junho. Os defensores, em boa parte soldados negros recém-alistados, perderam 652 homens contra 185 dos atacantes, e a base resistiu. A leste, Sherman foi destacado para vigiar Johnston, que chegou ao rio Big Black em 1º de julho e recuou sem lutar.",
        "Sétimo, a mina. Em 25 de junho, os mineiros da União explodiram 2.200 libras de pólvora, cerca de uma tonelada, debaixo do Third Louisiana Redan, abrindo uma cratera de uns 12 metros de largura por 3,7 de fundo. O 45º de Illinois entrou e ficou preso pelo fogo. Uma segunda mina, em 1º de julho, explodiu sem ataque de acompanhamento.",
        "Oitavo, a fome. Em fins de junho, cerca de metade dos homens de Pemberton estava doente ou internada, com escorbuto, malária e disenteria. Fontes dizem que chegaram a comer couro de sapato. Em 3 de julho, Pemberton escreveu a Grant sobre termos. Grant pediu rendição incondicional e depois ofereceu [[libertar sob palavra|libertação sob palavra]] todos os prisioneiros, em parte para não ter de alimentar uns 30.000 presos. A rendição foi acertada em 4 de julho, perto de um velho carvalho. Pemberton entregou 172 canhões e 50.000 fuzis."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "No cerco, a União teve 4.835 baixas (766 mortos, 3.793 feridos e 276 capturados ou desaparecidos). A Confederação teve 32.697: 3.202 mortos, feridos ou desaparecidos, mais 29.495 que se renderam. Somando a campanha inteira, a União perdeu 10.142 homens.",
        "Em 9 de julho, Port Hudson se rendeu a Banks. A União passou a controlar todo o Mississippi e partiu a Confederação em duas: o Arkansas, a Louisiana e o Texas ficaram isolados do resto do Sul.",
        { h: "Por que importa" },
        "Lincoln tinha chamado Vicksburg de 'a chave da guerra', e depois escreveu que o 'Pai das Águas' voltava a correr, sem estorvo, até o mar. A queda de Vicksburg, um dia depois da vitória de Meade em Gettysburg, é vista por muitos historiadores como a virada da guerra. Para Grant, foi o passo para o comando de todos os exércitos da União, em 1864.",
        { h: "Curiosidades e controvérsias" },
        { note: "A libertação sob palavra deu errado depois: o governo confederado contestou os termos, e a maioria dos homens libertados voltou a servir em agosto de 1863. A disputa acabou travando a troca de prisioneiros até janeiro de 1865." },
        { note: "Uma tradição diz que Vicksburg só voltou a comemorar o 4 de julho na Segunda Guerra Mundial. A Wikipédia lembra que isso é impreciso: já havia grandes festas em 1907, e o historiador Michael Ballard diz que a história tem pouca base." },
        { note: "O local virou o Parque Militar Nacional de Vicksburg, criado em 1899, com 1.325 monumentos e marcos, 144 canhões e a canhoneira USS Cairo restaurada." }
      ]}
    ]
  },

  bunkerhill: {
    war: "Guerra de Independência dos Estados Unidos (1775–1783), cerco de Boston",
    hook: "Os britânicos tomaram o morro e perderam mais de mil homens para isso: uma vitória que custou o preço de uma derrota.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 19 de abril de 1775, os primeiros tiros da guerra, em Lexington e Concord, deram em perseguição: milhares de milicianos da Nova Inglaterra seguiram os britânicos de volta a Boston e cercaram a cidade. Eram cerca de 15.000, sob Artemas Ward. Controlavam a estrada por terra, pelo istmo de Roxbury, mas não podiam enfrentar a frota britânica no porto.",
        "O general Thomas Gage mantinha em Boston uns 6.000 soldados, abastecidos por mar. Em fins de maio chegaram os generais Howe, Burgoyne e Clinton, com reforços. Ao norte da cidade, do outro lado do rio Charles, ficava a península de Charlestown. Nela havia duas colinas: a Bunker Hill, de uns 34 metros, ao fundo, e a Breed's Hill, de uns 19 metros, mais perto de Boston. Quem tivesse artilharia ali poderia bombardear a cidade.",
        { h: "O caminho até Bunker Hill" },
        { timeline: [
          ["19 de abril de 1775", "Lexington e Concord. Boston fica cercada por milícias."],
          ["Fim de maio", "Howe, Burgoyne e Clinton chegam a Boston com reforços."],
          ["12 de junho", "Gage planeja tomar as colinas de Dorchester, depois atacar Roxbury e depois ocupar as alturas de Charlestown. Data marcada: 18 de junho."],
          ["15 de junho", "Os colonos sabem do plano por um relato indireto. O Comitê de Segurança de Massachusetts manda fortificar a península."],
          ["Noite de 16 de junho", "Cerca de 1.200 homens, sob William Prescott, cavam um reduto na colina Breed's."]
        ]},
        "Os britânicos pretendiam ocupar as colinas por conta própria. Os colonos chegaram primeiro, por uma noite, e Gage resolveu não esperar."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "William Prescott, coronel da milícia" },
        "Veterano de uma guerra anterior, comandou a construção do reduto e a defesa dele. Ficou entre os últimos a sair e, no fim, lutou de espada contra as baionetas.",
        { h: "Israel Putnam e Joseph Warren" },
        "Putnam, general de Connecticut, ajudou a escolher o local e depois tentou reunir os fugitivos em Bunker Hill. Sua atuação é discutida: os relatos pós-guerra se contradizem, e o historiador Harold Murdock chamou um deles de cheio de 'afirmações absurdas'. Joseph Warren, médico e líder político de Massachusetts, tinha uma patente de general, mas lutou como soldado comum. Morreu na retirada, com um tiro no rosto.",
        { h: "John Stark e Thomas Knowlton" },
        "Os dois seguraram a ponta esquerda dos colonos, junto da cerca. Stark trouxe homens de New Hampshire e fincou uma estaca à frente da cerca: ninguém atirava até os britânicos passarem dela. Na retirada, os dois foram a retaguarda e evitaram o cerco. Burgoyne elogiou o recuo.",
        { h: "William Howe e Robert Pigot" },
        "Howe liderou o assalto e achava o morro fácil de tomar. Pigot atacou o reduto. O general Henry Clinton queria cortar a retirada dos colonos pelo istmo, mas os outros generais o venceram na votação, preferindo o ataque de frente. Burgoyne chamou os colonos de 'ralé sem treino'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado colonial, cerca de 1.200 homens na primeira noite e uns 2.400 ao longo do dia, entre eles o capitão-engenheiro Richard Gridley e as tropas de Connecticut e New Hampshire. Do lado britânico, Howe desembarcou com cerca de 1.500 homens e depois pediu mais. As fontes divergem, e algumas dão mais de 3.000 envolvidos ao longo do dia. Nenhum dos dois lados tinha números exatos, e a Wikipédia reconhece a dificuldade.",
        { h: "O terreno" },
        "O reduto, de uns 40 metros de lado, com paredes de cerca de 1,8 metro, ficava na Breed's Hill. Ao amanhecer, Prescott notou que o reduto podia ser contornado pelo flanco e mandou fazer uma trincheira e uma [[cerca de ripas]] recheada de feno e terra, descendo a colina para leste. O lado oeste ficou desguarnecido, e uma lacuna que a maré baixa abriu ao norte foi fechada com um muro curto de pedra. A encosta de grama alta, atravessada por cercas, ia ser o pior inimigo dos atacantes.",
        { note: "Os colonos tinham ordens de fortificar a Bunker Hill. Prescott, Putnam e Gridley escolheram a Breed's Hill, mais perto de Boston e mais fácil de defender. Se isso foi desobediência é assunto de debate entre os historiadores. É por isso que a batalha leva o nome da colina errada." },
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, o amanhecer. Por volta das 4h, o navio HMS Lively abriu fogo contra o reduto. O almirante Graves mandou parar, mas Gage o contrariou, e a frota e as baterias da Copp's Hill bombardearam o local, com pouco efeito: o fogo matou um americano. Howe desembarcou no cabo Moulton's Point, viu muitos colonos em Bunker Hill, supôs que fossem reforços e pediu mais tropas. Deixou os homens comerem enquanto esperavam. O ataque só começou depois das 14h.",
        "Segundo, os reforços colonos. Stark e Reed chegaram com seus homens de New Hampshire e foram para a cerca. Warren e Pomeroy também vieram. Enquanto isso, atiradores colonos em Charlestown incomodavam os britânicos que se reuniam. Graves mandou uma [[carcaça incendiária]] contra a vila, e os soldados a incendiaram. A fumaça foi para longe do campo de batalha, e Charlestown ardeu o dia todo.",
        "Terceiro, o avanço. Howe, com [[granadeiros]] e [[infantaria leve]], atacou pelo lado leste, contra a cerca de Stark e Knowlton, esperando uma luta fácil. Pigot fez um movimento de distração contra o reduto. A artilharia que devia preparar o ataque tinha munição do calibre errado. Os soldados subiam por grama na altura da cintura, entre cercas, com mochilas pesadas e uniformes de lã no calor.",
        "Quarto, a primeira investida. Os colonos seguraram o fogo até os britânicos chegarem a uns 50 passos e atiraram à queima-roupa. As companhias leves se romperam, e James Abercrombie, que comandava os granadeiros, foi ferido de morte. O ataque de Pigot também falhou. Os britânicos perderam cerca de 96 homens nessa investida.",
        "Quinto, a segunda investida. Os regulares se refizeram entre mortos e feridos e repetiram o ataque: Pigot contra o reduto, Howe contra Knowlton. De novo foram repelidos, depois de uns trinta minutos de salvas inúteis.",
        "Sexto, a terceira investida. Clinton mandou uns 400 homens, dos fuzileiros navais e do 63º, e uns 200 feridos leves se juntaram a eles. Howe mandou largar as mochilas e formou colunas fechadas, para atacar só com baioneta. O ataque à cerca virou distração, e o golpe foi no reduto.",
        "Sétimo, o reduto cai. Os colonos tinham agora uns 700 a 800 homens no morro, cerca de 150 no reduto, e a munição acabou. A luta virou combate corpo a corpo. Os britânicos tinham baionetas, e a maioria dos colonos não. O major Pitcairn, dos fuzileiros, morreu nas últimas salvas. Cerca de trinta defensores foram mortos na luta dentro do reduto.",
        "Oitavo, a retirada. Stark e Knowlton recuaram em ordem ao longo da cerca, o que evitou o cerco e salvou a maior parte dos feridos. Warren morreu nesse recuo. Putnam tentou reunir gente em Bunker Hill, mas os colonos deixaram para trás o canhão e as ferramentas. Por volta das 17h, estavam do outro lado do istmo, em Cambridge, e os britânicos ocupavam a península."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As baixas britânicas foram de 1.054: 226 mortos e 828 feridos, cerca de 40% dos atacantes, com 19 oficiais mortos. Foi o maior número de baixas britânicas num único combate de toda a guerra. As dos colonos, segundo a mesma fonte, foram 138 mortos, 305 feridos e 30 capturados, um total de 473. Algumas fontes arredondam para cerca de 450, e muitos prisioneiros morreram sob custódia. Os colonos perderam cinco de seus seis canhões.",
        { h: "Por que importa" },
        "Os britânicos ganharam o chão, mas Clinton escreveu em seu diário, de um jeito que lembrava o rei Pirro, que mais algumas vitórias como essa acabariam com o domínio britânico na América. É uma [[vitória de pirro]] clássica. Um oficial britânico em Boston escreveu que os americanos, bem comandados, seriam soldados tão bons quanto os deles.",
        "A notícia chegou aos colonos como derrota, porque o inimigo ficou com a colina. Mas Washington, a caminho de assumir o comando, ouviu em Nova York como os milicianos tinham se portado e se animou. O relatório de Gage chegou à Inglaterra em 20 de julho, assustou o alto comando e endureceu a posição do rei Jorge III, o que pode ter contribuído para a recusa da Petição do Ramo de Oliveira. Gage foi demitido, e Howe o substituiu em outubro de 1775. Gage tinha recomendado contratar soldados estrangeiros, e isso levou aos mercenários alemães, os 'hessianos'.",
        { h: "Curiosidades e controvérsias" },
        { note: "A frase 'não atirem até verem o branco dos olhos deles' é considerada hoje uma lenda. Putnam, Stark, Prescott e Gridley já foram apontados como autores, e as fontes não concordam. A ideia é mais antiga: ordens parecidas foram dadas em Dettingen (1743) e por Wolfe em Quebec (1759). O que é certo é que os chefes coloniais mandavam economizar tiros, porque a munição era pouca." },
        { note: "Os historiadores discutem se os britânicos podiam ter vencido com menos custo. John Ferling argumenta que Gage devia ter usado a frota para fechar o istmo de Charlestown, o que cortaria os colonos sem um ataque de frente. Howe é criticado pela demora, pelo otimismo e pelas investidas diretas." },
        { note: "O Monumento de Bunker Hill, um obelisco de 67 metros, fica na Breed's Hill, não na Bunker. A pedra fundamental foi lançada por Lafayette em 17 de junho de 1825, no 50º aniversário, com discurso de Daniel Webster." }
      ]}
    ]
  },

  gatepa: {
    war: "Guerras da Nova Zelândia (1845–1872), campanha de Tauranga (1864)",
    hook: "Cerca de 230 guerreiros num pā de terra e madeira derrotaram quase 1.700 soldados britânicos, depois de lhes escrever as regras da guerra.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Nos anos 1860, a Nova Zelândia estava sendo disputada entre colonos europeus (os Pākehā) e os Māori, que perdiam terra sem parar. Em 1858, várias tribos tinham escolhido um rei próprio, no [[movimento kīngitanga]], para segurar o que ainda tinham. O governo colonial viu aí uma rebelião. Em julho de 1863, tropas britânicas invadiram o Waikato, o coração do movimento.",
        "Os Ngāi Te Rangi, o [[iwi]] de Tauranga, mandaram guerreiros ajudar o Waikato. Em janeiro de 1864, o general Duncan Cameron enviou uma expedição por mar a Tauranga, porque acreditava que homens e suprimentos para o Waikato passavam por ali. O governador George Grey temia uma guerra maior e pediu cautela ao comandante local, o brigadeiro Carey. O primeiro-ministro Frederick Whitaker queria agressão, apoiado nas leis de confisco de terra de 1863.",
        { h: "O caminho até Pukehinahina" },
        { timeline: [
          ["Julho de 1863", "Tropas britânicas invadem o Waikato."],
          ["Janeiro de 1864", "Expedição britânica desembarca em Tauranga."],
          ["Fim de março", "Os Ngāi Te Rangi mandam uma carta com regras de guerra e um desafio ao coronel Greer, com 1º de abril como dia da luta. Os britânicos a ignoram, em grande parte."],
          ["16 de abril", "Começa a construção do pā em Pukehinahina, a uns 5 km da base britânica."],
          ["28 de abril", "Bombardeio britânico à tarde. À noite, Greer leva 700 homens pelo pântano até a retaguarda do pā."],
          ["29 de abril", "Bombardeio de oito horas e assalto às 16h."]
        ]},
        "Os europeus chamaram o lugar de 'The Gate', o Portão, por causa de uma cerca com portão que os Māori usavam para barrar invasores. O nome Māori é Pukehinahina."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Rāwiri Puhirake, chefe dos defensores" },
        "Chefe dos Ngāi Te Rangi, provocou o comandante britânico e levou a luta para um terreno de sua escolha. Segundo o relato de Hōri Ngātai, um dos defensores, ele mandou que ninguém dissesse uma palavra nem disparasse até a hora certa. Morreu em Te Ranga, em junho.",
        { h: "Henare Wiremu Taratoa" },
        "Jovem leitor leigo anglicano, educado no St John's College, em Auckland. Várias fontes, entre elas o NZHistory, dizem que redigiu o código de conduta que os Māori mandaram aos britânicos. Outras fontes dizem que o texto veio de chefes católicos de Tauranga. Morreu em Te Ranga com uma cópia das regras no corpo, encabeçada por uma frase de Romanos 12:20: se o teu inimigo tem fome, dá-lhe de comer; se tem sede, dá-lhe de beber.",
        { h: "Pene Taka Tuaia" },
        "Veterano da guerra do Norte (1845–46), que tinha visto os pās de Kawiti em Ōhaeawai e Ruapekapeka. Segundo o NZHistory, foi ele quem projetou o pā de Pukehinahina.",
        { h: "Duncan Cameron e Henry Greer" },
        "Cameron comandava as tropas britânicas na Nova Zelândia desde 1861. Greer, coronel do 68º, comandava em Te Papa e liderou a manobra pelo pântano. O tenente-coronel H. G. Booth comandava o 43º no assalto, e o comandante Hay, a brigada naval. Segundo a Wikipédia, Cameron foi perdendo o gosto pela guerra e achou mais coragem e cavalheirismo entre os Māori do que entre os colonos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Ao amanhecer de 29 de abril, Cameron tinha cerca de 1.650 homens (a Wikipédia dá 1.700 no quadro): 700 do 68º, 420 da [[brigada naval]], 300 do 43º, 50 da artilharia real e 180 do 12º, 14º, 40º e 65º. Do lado Māori, uns 230 homens, segundo a Wikipédia. A mesma página também fala em 250 combatentes dos Ngāi Te Rangi, e as fontes não concordam. Cerca de 30 homens dos Ngāti Koheriki e uns 10 de Piri-Rikau e outros [[hapū]] ocupavam o reduto menor. Havia uma só mulher no pā, Hēni Te Kiri Karamū.",
        { h: "O terreno e o pā" },
        "O pā ficava no topo de uma colina, entre pântanos. Eram dois redutos, com trincheiras em zigue-zague e um conjunto de abrigos subterrâneos, as [[rua]], feitos para aguentar a artilharia. A [[paliçada]] era fraca, porque faltava madeira, mas a posição no alto e a extensão davam uma ideia de mais força do que havia. Os oficiais britânicos o subestimaram: visto de cima, parecia pouca coisa.",
        { note: "Os Māori tinham mandado aos britânicos regras para a guerra: feridos que parassem de lutar seriam poupados, os que se rendessem seriam aceitos, e civis, inclusive mulheres e crianças Pākehā, não seriam atacados. Alguns autores notam semelhanças com a primeira Convenção de Genebra, de 1864. É uma comparação, não prova de influência." },
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, o pā e os canhões. Os britânicos armaram quatro baterias a 350 a 800 metros: um Armstrong de 110 libras, dois de 40 e dois de 6, dois obuses de 24 libras, dois morteiros de 8 polegadas e seis morteiros Coehorn. Eram os [[canhões Armstrong|canhão armstrong]] de carregar pela culatra.",
        "Segundo, a tarde de 28 de abril. O bombardeio durou uma hora. Segundo relatos de Hēni Te Kiri Karamū e Hōri Ngātai, as primeiras vítimas foram pastores anglicanos que rezavam. À noite, com chuva, Greer levou uns 700 homens do 68º pelo pântano até a retaguarda do pā, para cortar a retirada.",
        "Terceiro, o bombardeio de 29 de abril. Do amanhecer até a tarde, mais de oito horas, cerca de 30 toneladas de projéteis caíram sobre o pā e em volta. A paliçada foi destruída, e o fogo Māori, abafado. Uma fonte estima que cerca de 15 defensores morreram no bombardeio.",
        "Quarto, o assalto. Por volta das 16h, Cameron mandou 300 homens da brigada naval, sob o comandante Hay, e do 43º, sob Booth, avançarem quatro lado a lado, de baionetas caladas. Outros 300 seguiram como reserva.",
        "Quinto, a entrada. Alguns atacantes foram baleados ao entrar. Dentro do reduto, a luta foi corpo a corpo, contra homens com espingardas de cano duplo e [[mere]]. Houve uma pausa de uns cinco minutos, e o capitão Greaves informou a Cameron que o reduto estava tomado e as perdas eram leves.",
        "Sexto, a virada. Minutos depois, o 68º chegou à retaguarda do pā. A luta ficou feroz, e a força britânica entrou em pânico e saiu em debandada. A sequência exata não é clara, e os historiadores dão explicações diferentes. Um marinheiro da época disse que o avanço do 68º foi confundido com reforços Māori. James Belich defende que a maior parte da guarnição estava escondida nos abrigos e abriu fogo a curta distância sobre homens quase em cima deles: uma armadilha deliberada, segundo ele. Os autores Mikaere e Simons, que escreveram um livro sobre a batalha, discordam dessa leitura e veem o resultado como fruto de como a luta se desenrolou.",
        "Sétimo, os feridos. O tenente-coronel Booth ficou gravemente ferido. Segundo o NZHistory, Hēni Te Kiri Karamū contou, cerca de 30 anos depois, que lhe levou água, e Booth teria dito ao cirurgião que uma mulher Māori que falava inglês lhe dera de beber. Outras versões dizem que foi o próprio Taratoa ou um homem chamado Te Ipu. Os despachos britânicos dizem que Booth morreu na noite seguinte.",
        "Oitavo, a noite. Esperando um novo ataque ao amanhecer, a guarnição deixou o pā e escapou pelas linhas do 68º, atravessando o pântano."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os britânicos perderam 31 mortos, 10 deles oficiais, e 80 feridos: mais de um terço da força de assalto. (O quadro da Wikipédia, com 44 mortos e 119 feridos, cobre a campanha inteira, não só este dia.) Do lado Māori, ao menos 25 a 30 mortos ou desaparecidos, segundo a Wikipédia. Outra estimativa fala em 19 a 32 mortos e 25 feridos. Os mortos incluíram chefes como Te Reweti, Eru Puhirake e Te Wharepouri. Foi a derrota mais pesada dos britânicos em toda a guerra.",
        "Em 12 de maio, Grey foi a Tauranga e procurou uma paz negociada com mediadores Māori. Em 15 de maio, Cameron disse que ia parar as operações ofensivas e partiu para Auckland. Mas em 21 de junho, em Te Ranga, a 5 km dali, Greer atacou uma nova posição ainda em construção. Dessa vez foram os britânicos que venceram: de 83 a 120 Māori mortos, entre eles Puhirake e Taratoa. Os Ngāi Te Rangi acabaram entregando cerca de 50.000 acres e 81 armas. Cerca de 290.000 acres foram declarados sob a lei de assentamentos de 1863.",
        { h: "Por que importa" },
        "Gate Pā mostrou que um pā bem desenhado podia resistir a um bombardeio pesado. Para os Māori, tornou-se símbolo de coragem e de conduta cavalheiresca, que desmente a imagem de selvagens que os colonos faziam deles. Parte do local virou reserva, e o 150º aniversário foi lembrado em 2014. Um memorial a Puhirake, com um friso de mármore, fica no cemitério da Missão, em Tauranga.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números variam: 31 mortos e 80 feridos (Wikipédia e NZHistory) contra 44 e 119 (quadro da Wikipédia, que parece somar a campanha). O Te Ara dá 111 entre mortos e feridos britânicos e 25 mortos Māori. Segundo o NZHistory, as perdas Māori não foram registradas na época." },
        { note: "Quem deu água a Booth é disputado. A versão mais forte aponta Hēni Te Kiri Karamū, que a confirmou cerca de 30 anos depois, mas há versões com Taratoa. As fontes que consultamos não resolvem isso." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  vicksburg: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 12, h: 70, l: "Rio Mississippi" },
      { t: "note", x: 28, y: 4, l: "Vicksburg" },
      { t: "note", x: 86, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "uFleet", s: "a", k: "ship", w: 5, h: 10, l: "Frota de Porter" },
      { id: "uSh", s: "a", k: "inf", w: 6, h: 14, l: "Sherman" },
      { id: "uMc", s: "a", k: "inf", w: 6, h: 14, l: "McPherson" },
      { id: "uCl", s: "a", k: "inf", w: 6, h: 14, l: "McClernand" },
      { id: "uRe", s: "a", k: "inf", w: 6, h: 12, l: "Reforços (Herron, Washburn, IX Corpo)" },
      { id: "cN", s: "b", k: "inf", w: 6, h: 14, l: "Defesa norte" },
      { id: "cC", s: "b", k: "inf", w: 6, h: 14, l: "Defesa central" },
      { id: "cS", s: "b", k: "inf", w: 6, h: 14, l: "Defesa sul" },
      { id: "cJ", s: "b", k: "inf", w: 8, h: 12, l: "Johnston (socorro)" }
    ],
    steps: [
      { t: "Depois de Champion Hill e Big Black, Pemberton se fecha em Vicksburg, num arco de uns 10 km. Os três corpos de Grant cercam a cidade pelo leste, e a frota fecha o rio. Johnston, em Jackson, tenta juntar um exército.",
        p: { uFleet: [7, 34], uSh: [38, 14], uMc: [38, 34], uCl: [38, 54], uRe: [94, 60], cN: [26, 14], cC: [26, 34], cS: [26, 54], cJ: [90, 34] } },
      { t: "19 de maio: Sherman ataca o Stockade Redan sem bom reconhecimento. Perde 157 mortos, 777 feridos e 8 desaparecidos. Os confederados perdem 8 mortos e 62 feridos.",
        p: { uSh: [32, 14] } },
      { t: "22 de maio: depois de bombardeio, Grant ataca toda a linha. Sherman, McPherson e McClernand falham. A União perde 502 mortos, 2.550 feridos e 147 desaparecidos, e os confederados, menos de 500.",
        p: { uSh: [31, 14], uMc: [31, 34], uCl: [31, 54] } },
      { t: "Grant adota o cerco. Os corpos avançam por trincheiras de sapa, e entre 11 e 14 de junho chegam os reforços. A linha da União se fecha de rio a rio.",
        p: { uSh: [33, 14], uMc: [33, 34], uCl: [33, 54], uRe: [50, 44] } },
      { t: "A frota e a artilharia bombardeiam a cidade, mais de 22.000 projéteis só dos navios. Os moradores vivem em cavernas cavadas no morro.",
        p: { uFleet: [7, 28] } },
      { t: "Johnston chega ao rio Big Black em 1º de julho, mas não ataca e recua para Jackson. Sherman foi destacado para vigiá-lo, e os reforços cobrem o lado de fora do cerco.",
        p: { cJ: [80, 34], uRe: [64, 40], uSh: [62, 22] } },
      { t: "25 de junho: os mineiros da União explodem 2.200 libras de pólvora sob o Third Louisiana Redan. O 45º de Illinois entra e fica preso pelo fogo.",
        p: { uMc: [29, 34], cC: [24, 34], cJ: [90, 34] } },
      { t: "Metade da guarnição está doente e passa fome. Em 3 de julho, Pemberton negocia. Em 4 de julho, rende-se com cerca de 29.500 homens, 172 canhões e 50.000 fuzis.",
        p: { uSh: [62, 22], uMc: [30, 34], uCl: [30, 54], cN: [24, 14], cC: [24, 34], cS: [24, 54] }, x: ["cN", "cC", "cS"] }
    ]
  },

  bunkerhill: {
    terrain: [
      { t: "sea", x: 0, y: 62, w: 100, h: 8, l: "Rio Charles e Boston" },
      { t: "sea", x: 92, y: 0, w: 8, h: 62, l: "Rio Mystic" },
      { t: "hill", x: 40, y: 38, rx: 12, ry: 7, l: "Breed's Hill" },
      { t: "hill", x: 30, y: 12, rx: 13, ry: 7, l: "Bunker Hill" },
      { t: "note", x: 14, y: 52, l: "Charlestown" },
      { t: "note", x: 8, y: 6, l: "Norte ↑" }
    ],
    units: [
      { id: "bHowe", s: "a", k: "inf", w: 18, h: 4, l: "Howe: granadeiros e infantaria leve" },
      { id: "bPig", s: "a", k: "inf", w: 14, h: 4, l: "Pigot" },
      { id: "bRes", s: "a", k: "inf", w: 12, h: 4, l: "Reforços de Clinton (fuzileiros e 63º)" },
      { id: "bShip", s: "a", k: "ship", w: 10, h: 4, l: "Navios e Copp's Hill" },
      { id: "aRed", s: "b", k: "inf", w: 10, h: 8, l: "Prescott (reduto)" },
      { id: "aFen", s: "b", k: "inf", w: 24, h: 3, l: "Stark e Knowlton (cerca)" },
      { id: "aPut", s: "b", k: "inf", w: 12, h: 4, l: "Putnam (Bunker Hill)" }
    ],
    steps: [
      { t: "Por volta das 4h, os navios abrem fogo contra o reduto que 1.200 homens cavaram na noite anterior. Howe desembarca com 1.500 homens e pede mais, vendo muita gente em Bunker Hill.",
        p: { bShip: [24, 66], bHowe: [76, 56], bPig: [60, 58], bRes: [86, 64], aRed: [40, 38], aFen: [64, 40], aPut: [30, 14] } },
      { t: "Prescott estende uma trincheira e uma cerca de ripas, recheada de feno e terra, para o leste, até o Mystic. Chegam Stark, Knowlton e os de New Hampshire, que se posicionam na cerca.",
        p: { aFen: [68, 42], aPut: [34, 20] } },
      { t: "Charlestown pega fogo, e a fumaça cobre o campo. Depois das 14h, Howe avança pela margem do Mystic, contra a cerca. Pigot faz uma finta contra o reduto.",
        p: { bHowe: [76, 50], bPig: [56, 50] } },
      { t: "Primeira investida: os colonos seguram o fogo até uns 50 passos. As companhias leves se rompem, Abercrombie cai ferido de morte, e Pigot recua.",
        p: { bHowe: [76, 54], bPig: [56, 56] } },
      { t: "Segunda investida: os britânicos se refazem e atacam de novo, Pigot contra o reduto e Howe contra a cerca. São repelidos de novo.",
        p: { bHowe: [76, 51], bPig: [52, 50] } },
      { t: "Clinton manda 400 homens e uns 200 feridos leves. Howe manda largar as mochilas e forma colunas para a baioneta. O ataque à cerca vira distração, e o golpe vai para o reduto.",
        p: { bRes: [52, 54], bPig: [48, 49], bHowe: [70, 50] } },
      { t: "Sem munição, os colonos lutam com coronhas contra as baionetas. O reduto cai. O major Pitcairn morre nas últimas salvas.",
        p: { bPig: [43, 41], bRes: [44, 45], aRed: [40, 38] }, x: ["aRed"] },
      { t: "Stark e Knowlton recuam em ordem pela cerca e salvam os feridos. Warren morre na retirada. Por volta das 17h, os colonos cruzam o istmo para Cambridge.",
        p: { aFen: [66, 30], aPut: [18, 6], bHowe: [60, 40], bPig: [42, 40] }, x: ["aPut"] }
    ]
  },

  gatepa: {
    terrain: [
      { t: "note", x: 8, y: 6, l: "Te Papa (base britânica)" },
      { t: "note", x: 84, y: 8, l: "Pântano" },
      { t: "hill", x: 58, y: 36, rx: 22, ry: 10, l: "Cume de Pukehinahina" }
    ],
    units: [
      { id: "bBat", s: "a", k: "inf", w: 10, h: 12, l: "4 baterias (Armstrong, obuses, morteiros)" },
      { id: "bSt", s: "a", k: "inf", w: 6, h: 14, l: "Brigada naval e 43º (300)" },
      { id: "bRe", s: "a", k: "inf", w: 6, h: 14, l: "Reserva (300)" },
      { id: "bGr", s: "a", k: "inf", w: 12, h: 5, l: "68º de Greer (700)" },
      { id: "pMain", s: "b", k: "inf", w: 16, h: 8, l: "Reduto principal (Ngāi Te Rangi)" },
      { id: "pSm", s: "b", k: "inf", w: 8, h: 6, l: "Reduto menor (Ngāti Koheriki e outros)" }
    ],
    steps: [
      { t: "O pā ocupa o cume, com dois redutos, trincheiras em zigue-zague e abrigos subterrâneos. Cerca de 230 Māori. Os britânicos armam quatro baterias a 350 a 800 metros.",
        p: { bBat: [34, 36], bSt: [22, 28], bRe: [14, 40], bGr: [22, 58], pMain: [60, 34], pSm: [48, 42] } },
      { t: "28 de abril à tarde: uma hora de bombardeio. À noite, com chuva, Greer leva 700 homens do 68º pelo pântano, até o leste do pā, para cortar a retirada.",
        p: { bGr: [74, 56] } },
      { t: "29 de abril, de manhã: mais de oito horas de fogo, cerca de 30 toneladas de projéteis. A paliçada cai. Os defensores se abrigam nas rua e ficam quietos.",
        p: { bGr: [78, 52] } },
      { t: "Por volta das 16h, 300 homens da brigada naval e do 43º avançam, quatro lado a lado, de baionetas caladas, com 300 de reserva atrás.",
        p: { bSt: [38, 40], bRe: [28, 40] } },
      { t: "Os atacantes entram no reduto menor. A luta é corpo a corpo. Greaves informa que o reduto foi tomado, com poucas perdas. Segue-se uma pausa de uns cinco minutos.",
        p: { bSt: [48, 42], bRe: [36, 40] } },
      { t: "O 68º chega à retaguarda. Segundo Belich, os defensores escondidos abrem fogo a curta distância; outros veem só confusão. Os britânicos entram em pânico e fogem.",
        p: { bGr: [66, 40], bSt: [34, 44], bRe: [24, 44] }, x: ["bSt"] },
      { t: "Os britânicos perdem 31 mortos, 10 deles oficiais, e 80 feridos, mais de um terço da força de assalto. Booth, gravemente ferido, recebe água de alguém no pā.",
        p: { bRe: [22, 46], bBat: [32, 36] } },
      { t: "Esperando novo ataque ao amanhecer, a guarnição sai à noite, passa pelas linhas do 68º e atravessa o pântano.",
        p: { pMain: [88, 20], pSm: [92, 28], bGr: [66, 40] }, x: ["pMain", "pSm"] }
    ]
  }
});
