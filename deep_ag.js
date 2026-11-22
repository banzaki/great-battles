// batch ag: Dunkirk, Battle of Britain, Pearl Harbor, Moscow, Leningrad, Tobruk
Object.assign(GLOSSARY, {
  "blitzkrieg": "'Guerra relâmpago', nome dado ao estilo alemão de 1939 a 1941: tanques e aviões furam um ponto da linha inimiga, avançam fundo e cortam suas ligações, em vez de lutar frente a frente.",
  "panzer": "Tanque, em alemão (de Panzerkampfwagen, 'veículo de combate blindado'). Uma divisão panzer reunia tanques, infantaria motorizada e artilharia.",
  "wehrmacht": "As forças armadas da Alemanha nazista: exército, marinha e força aérea.",
  "luftwaffe": "A força aérea alemã da Segunda Guerra Mundial.",
  "radar": "Aparelho que manda ondas de rádio e capta o eco que volta dos aviões. Mostra onde está um avião a dezenas de quilômetros, mesmo de noite ou com nuvens.",
  "porta-aviões": "Navio com um convés comprido em cima, de onde decolam e pousam aviões. Permite atacar um alvo a centenas de quilômetros sem precisar de um aeroporto por perto.",
  "torpedo": "Projétil submarino com motor, lançado de navios, submarinos ou aviões. Explode ao bater no casco, abaixo da linha d'água.",
  "bombardeiro de mergulho": "Avião que despenca quase na vertical sobre o alvo antes de soltar a bomba, o que dá muita pontaria. O alemão Stuka e o japonês Val eram deste tipo.",
  "perímetro": "A linha que contorna a área defendida. Em Dunquerque e Tobruk, era o anel de defesa em volta do porto.",
  "rasputitsa": "Palavra russa para a época de lama, na primavera e no outono, quando a chuva e o degelo transformam as estradas de terra em atoleiros.",
  "eixo": "A aliança de Alemanha, Itália e Japão na Segunda Guerra Mundial, mais alguns países menores.",
  "aliados": "No caso da Segunda Guerra Mundial, os países em guerra contra o Eixo: Reino Unido, França, União Soviética, Estados Unidos e muitos outros.",
  "caça": "Avião rápido e ágil, feito para combater outros aviões. O Spitfire e o Hurricane britânicos e o Bf 109 alemão eram caças.",
  "bombardeiro": "Avião grande, lento e pesado, feito para carregar bombas até o alvo. Precisava de caças de escolta.",
  "contratorpedeiro": "Navio de guerra pequeno e veloz, usado para escoltar outros navios, caçar submarinos e atacar com torpedos.",
  "ração": "A quantidade de comida que cada pessoa recebe por dia numa situação de escassez, medida e distribuída por uma autoridade.",
  "canhão antitanque": "Canhão de cano longo, pequeno e baixo, feito para furar a blindagem de tanques. Escondido no chão, é difícil de ver.",
  "tanque": "Veículo de combate blindado sobre esteiras, com um canhão em cima.",
  "silêncio de rádio": "Regra de não usar nenhum rádio para que o inimigo não escute e descubra onde está a frota.",
  "evacuação": "Retirada organizada de pessoas de um lugar perigoso, neste caso de soldados cercados."
});

Object.assign(DEEP, {
  dunquerque: {
    war: "Campanha da França, na Segunda Guerra Mundial (maio e junho de 1940)",
    hook: "Um exército derrotado, cercado e encostado no mar voltou para casa em nove dias, em navios de guerra e em barcos de passeio.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em setembro de 1939, a Alemanha invadiu a Polônia, e o Reino Unido e a França declararam guerra. Durante meses, na frente ocidental, quase nada aconteceu. O Reino Unido mandou para a França a Força Expedicionária Britânica, com dez divisões em três corpos, sob o comando de Lorde Gort.",
        "O plano alemão original para atacar a França lembrava o de 1914. Mas o general Erich von Manstein propôs outra coisa: mandar os tanques pelas Ardenas, uma região de florestas que os franceses achavam difícil demais para blindados, e correr até o Canal da Mancha. Hitler aprovou uma versão desse plano em 17 de fevereiro de 1940. Depois ele ficou conhecido como Sichelschnitt, o 'golpe de foice'.",
        { h: "O caminho até a praia" },
        { timeline: [
          ["10 de maio", "A Alemanha ataca a Holanda e a Bélgica. Os melhores exércitos aliados avançam para a Bélgica. Três corpos de [[panzer]] do Grupo de Exércitos A seguem pelas Ardenas."],
          ["20 de maio", "Os tanques alemães chegam ao Canal da Mancha e partem os exércitos aliados em dois."],
          ["21 de maio", "Um contra-ataque aliado perto de Arras não consegue cortar a ponta alemã."],
          ["23 e 24 de maio", "Os alemães param o avanço sobre Dunquerque. Calais, sitiada, cai em 26 de maio."],
          ["26 de maio", "Churchill ordena a Operação Dínamo, a retirada pelo mar."],
          ["28 de maio", "O exército belga se rende."],
          ["4 de junho", "Os alemães entram em Dunquerque. A evacuação termina."]
        ]},
        "Em 19 de maio, Gort se encontrou com o general francês Billotte e descobriu que não havia nenhuma tropa francesa entre os alemães e o mar. Na mesma época, no Reino Unido, o almirante Bertram Ramsay começou a planejar a retirada, a partir de Dover. Os franceses não foram avisados. Em 21 de maio, os exércitos aliados do norte estavam encurralados na costa: a Força Britânica, o que sobrava da Bélgica e três exércitos franceses."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Lorde Gort, comandante da Força Expedicionária Britânica" },
        "Soldado condecorado na Primeira Guerra Mundial, Gort viu depressa que a situação era perdida. O general Weygand, comandante supremo francês desde 18 de maio, queria um contra-ataque para o sul. Gort preferiu salvar o exército: mandou as tropas para a costa já em 25 de maio e preparou a retirada antes de ter ordem para isso. A decisão foi tomada sem consultar os franceses e deixou ressentimento duradouro.",
        { h: "Bertram Ramsay, o almirante de Dover" },
        "Comandava a operação naval de uma sala escavada no subsolo do castelo de Dover, ao lado de uma sala de máquinas elétricas. Segundo a versão mais contada, o nome da operação, Dínamo, vem dessa sala, mas o English Heritage diz que não há prova disso. Ramsay recebeu pouquíssimo tempo e pouquíssimos navios para uma tarefa que ninguém tinha feito antes.",
        { h: "Hitler e Rundstedt" },
        "O general Gerd von Rundstedt comandava o Grupo de Exércitos A. Preocupado com os flancos, com a linha de suprimentos, com o terreno encharcado de canais e com as perdas de tanques, ele aprovou uma ordem de parada na noite de 23 de maio. Hitler a confirmou em 24 de maio e deixou a [[luftwaffe]], de Göring, acabar com os cercados. A ordem foi cancelada na tarde de 26 de maio.",
        { h: "Churchill" },
        "Era primeiro-ministro havia duas semanas. Em 26 de maio ordenou a Operação Dínamo e, em 4 de junho, pronunciou no Parlamento um discurso que misturava dois sentimentos: chamou o episódio de 'desastre militar colossal', mas também de 'milagre de libertação', e avisou que 'guerras não se ganham com evacuações'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado alemão, cerca de 800.000 homens na região, com tanques que estavam cansados e tinham tido muitas perdas. Do lado aliado, cerca de 400.000 homens: a Força Britânica, três exércitos franceses e o que restava do exército belga. Os números variam um pouco conforme a fonte.",
        { h: "O terreno" },
        "Dunquerque é um porto na costa norte da França, junto à fronteira belga. O chão em volta é plano, cortado por canais e áreas alagáveis, ruim para tanques. As praias são largas e de águas rasas: navios grandes não chegam perto, e os soldados precisavam esperar na areia e dentro d'água até a cintura ou o ombro.",
        "O [[perímetro]] defendido era um semicírculo, com os franceses a oeste e os britânicos a leste. Ia da costa belga, perto de Nieuwpoort, até Gravelines, passando por Bergues. Ele foi encolhendo aos poucos até o fim de maio.",
        { h: "A pausa dos tanques" },
        "Quando os tanques pararam, o porto estava ao alcance deles. A parada deu tempo para os aliados organizarem a defesa e a retirada. Por que ela aconteceu é discutido até hoje. Rundstedt e o general Kluge propuseram juntar forças e deixar a destruição do bolsão para a Luftwaffe. Göring prometeu que seus aviões fariam o serviço. Segundo o historiador Liddell Hart, Hitler achava que os britânicos nunca voltariam à Europa.",
        { note: "Houve quem dissesse que Hitler deixou os britânicos escaparem de propósito. A maioria dos historiadores desconfia dessa tese: os próprios chefes do exército alemão lamentaram a pausa depois. Guderian, comandante de tanques, escreveu mais tarde que não atacar Dunquerque foi um grande erro. A duração da pausa também muda conforme a fonte: da noite de 23 até a tarde de 26 de maio, ou seja, entre dois e três dias." },
        { h: "A retirada pela praia" },
        "O porto de Dunquerque foi destruído por bombardeios logo no começo. Por isso, o oficial naval William Tennant, que dirigia o embarque, usou os dois molhes, estruturas compridas de concreto e madeira que avançam mar adentro, feitas para atracar barcas e não navios de guerra. Cerca de 200.000 homens embarcaram pelo molhe leste. Nas praias de De Panne e Bray-Dunes, os soldados chegaram a montar píeres improvisados com caminhões abandonados.",
        "O que ajudou muito foram os barcos pequenos: iates, barcas de rio, pesqueiros, botes salva-vidas, lanchas de passeio. Alguns foram requisitados, e muitos atravessaram com tripulação civil. Chegaram a partir de 28 de maio, cruzaram o Canal e levaram os soldados da praia até os navios maiores, que ficavam mais ao largo.",
        { timeline: [
          ["27 de maio", "7.669 homens embarcam. Cerca de 1.000 civis morrem no bombardeio da cidade."],
          ["28 de maio", "17.804 embarcam."],
          ["29 de maio", "47.310 embarcam. Depois desse dia, a Marinha retira para a defesa de casa seus oito melhores contratorpedeiros."],
          ["30 de maio", "53.823 embarcam."],
          ["31 de maio", "O dia de pico: 68.014 embarcam. Em Lille, os franceses se rendem, depois de segurar sete divisões alemãs por quatro dias."],
          ["1º de junho", "64.429 embarcam."],
          ["2 a 4 de junho", "Cerca de 26.000 por dia. Os britânicos partem em 3 de junho. Na noite seguinte, a Marinha volta para buscar a retaguarda francesa."]
        ]},
        "Os números por dia somam 338.226 homens, 98.671 deles pelas praias e 239.555 pelos molhes e pelo porto. Mais de 100.000 eram franceses. Foram usadas 861 embarcações, segundo uma das contagens, das quais 243 afundaram. A Marinha Real perdeu seis contratorpedeiros e a francesa, três.",
        { h: "O céu" },
        "Muitos soldados culparam a Força Aérea Real por não vê-la sobre as praias. Na verdade, a maior parte dos combates aéreos acontecia longe, sobre o interior, e os soldados embaixo não enxergavam. A RAF perdeu 145 aviões, ao menos 42 deles Spitfires. A Luftwaffe perdeu 156, incluindo 35 derrubados por navios da Marinha.",
        { h: "Lille e a retaguarda" },
        "Entre 28 e 31 de maio, o Primeiro Exército francês, cercado perto de Lille, segurou sete divisões alemãs, três delas blindadas. Segundo uma estimativa, isso ajudou a salvar cerca de 100.000 soldados aliados. Os alemães concederam aos defensores as honras de guerra. A rendição em Lille, em 31 de maio, rendeu entre 35.000 e 40.000 prisioneiros, conforme a fonte. Em 4 de junho, depois dos últimos embarques, cerca de 35.000 soldados que ainda estavam na praia, a maioria franceses da 2ª Divisão Mecanizada Ligeira e da 68ª de Infantaria, também foram capturados."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Alemanha tomou o porto e capturou a maior parte do equipamento. A Força Expedicionária Britânica deixou para trás 2.472 canhões, cerca de 20.000 motocicletas e perto de 65.000 veículos, e quase todos os cerca de 445 tanques que tinha levado à França. Para cada sete homens que escaparam, um ficou prisioneiro de guerra, e muitos foram levados a pé para a Alemanha. Entre 10 de maio e 22 de junho, o exército britânico teve cerca de 68.000 baixas.",
        "Mas os 338.226 homens que voltaram eram o núcleo de um exército que ainda podia lutar. Em 22 de junho a França assinou o armistício. Outra operação, a Aerial, tirou mais de 190.000 soldados aliados de outros portos franceses entre 15 e 25 de junho.",
        { h: "Por que importa" },
        "Dunquerque foi uma derrota militar que virou um símbolo de resistência. Para o Reino Unido, ficou como 'o espírito de Dunquerque': a ideia de que um povo comum se mobiliza quando a situação é desesperadora. Esse retrato 'de guerra do povo', difundido por livros e filmes, foi o que ficou na memória popular. Os historiadores lembram que outras batalhas aconteceram ao mesmo tempo, em Calais, Boulogne e Lille, e que as tropas desses lugares compraram o tempo que a retirada usou.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os franceses sentiram que foram abandonados. A decisão de evacuar em vez de contra-atacar para o sul foi dos britânicos, tomada sem consultá-los. Depois, o almirante Darlan mandou dar prioridade aos britânicos e só em 31 de maio ordenou que os franceses embarcassem em igualdade." },
        { note: "As contagens de perdas variam. Uma das mais usadas dá para o lado aliado cerca de 61.774 mortos, feridos e capturados, mas a mesma página traz outros números para os franceses (18.000 mortos e 40.000 prisioneiros) e britânicos (68.111 baixas, incluindo cerca de 41.000 prisioneiros). Elas medem períodos e coisas diferentes e não devem ser somadas sem cuidado." }
      ]}
    ]
  },

  inglaterra: {
    war: "Segunda Guerra Mundial: a campanha aérea sobre a Grã-Bretanha (julho a outubro de 1940)",
    hook: "Pela primeira vez, uma grande campanha militar foi decidida só no ar, e quem ganhou foi quem enxergava o inimigo chegando.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em junho de 1940, a França caiu, e o Reino Unido ficou sozinho contra a Alemanha. Hitler esperava que Londres negociasse a paz. Churchill se recusou. Em 18 de junho, ele disse no Parlamento: 'Espero que a Batalha da Inglaterra esteja para começar'. O nome da batalha, portanto, é anterior a ela.",
        "Em 19 de julho, Hitler fez um discurso oferecendo conversas, e o governo britânico rejeitou. Três dias antes, em 16 de julho, ele havia assinado a Diretiva nº 16, que mandava preparar para meados de agosto a invasão do Reino Unido, a Operação Leão-Marinho. A marinha alemã alertou que atravessar o Canal sem controle do ar era arriscado demais. Por isso, tudo dependia de a [[luftwaffe]] derrotar a Força Aérea Real (RAF).",
        { h: "O caminho até o céu de agosto" },
        { timeline: [
          ["10 de julho", "Começa, pela data oficial britânica, a batalha. Nas primeiras semanas, os alemães atacam comboios e portos no Canal."],
          ["1º de agosto", "A Diretiva nº 17 manda a Luftwaffe destruir a RAF."],
          ["13 de agosto", "Adlertag, o 'Dia da Águia': começa o grande ataque, adiado pelo mau tempo."],
          ["24 de agosto a 6 de setembro", "O período de maior pressão sobre os aeroportos de Fighter Command."],
          ["7 de setembro", "Os alemães passam a atacar Londres. Começa a Blitz, que vai até 11 de maio de 1941."],
          ["15 de setembro", "O maior dia de combates. Dois dias depois, Hitler adia a invasão."],
          ["31 de outubro", "Fim oficial da batalha."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hugh Dowding, chefe do Comando de Caças" },
        "Dowding chefiava o Fighter Command desde a reestruturação de 1936. Rejeitou a ideia, muito aceita na época, de que 'o bombardeiro sempre passa', e apostou nos caças e no radar. Quando os franceses pediram mais esquadrões em maio de 1940, ele se opôs a mandá-los, porque enfraqueceria a defesa de casa. Sua preocupação central não era a falta de aviões, e sim a de pilotos treinados.",
        { h: "Keith Park e Trafford Leigh-Mallory" },
        "Park comandava o 11º Grupo, no sudeste da Inglaterra, que levou o peso dos ataques. Leigh-Mallory comandava o 12º Grupo, mais ao norte, que cobria os aeroportos do 11º. Os dois discordaram sobre a tática: Leigh-Mallory defendia as 'grandes alas', grupos de vários esquadrões atacando juntos; Park preferia mandar esquadrões isolados, mais rápidos para subir. As fontes divergem sobre o valor da grande ala, e a briga é ligada à substituição de Dowding, em novembro de 1940.",
        { h: "Hermann Göring e a Luftwaffe" },
        "Chefe da Luftwaffe e figura central do regime, Göring dividiu a campanha entre três frotas aéreas, com chefes que discordavam sobre os alvos. Sperrle preferia atacar a estrutura de defesa aérea britânica, e Kesselring, atacar Londres. A inteligência alemã errava muito: superestimava as perdas britânicas e subestimava a força dos caças da RAF."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A RAF tinha cerca de 1.963 aviões, e a Luftwaffe, cerca de 2.550, nas contagens mais citadas. Nos primeiros meses, o Hurricane era o caça mais numeroso da RAF, na proporção de uns dois para um em relação ao Spitfire. O alemão Bf 109E era até 65 km/h mais rápido que um Hurricane com certas hélices, dependendo da altitude, e tinha dois canhões de 20 mm e duas metralhadoras. Os britânicos tinham oito metralhadoras de calibre .303. O Bf 110, caça de dois motores, era um mau escolta e sofreu muito. Os bombardeiros de mergulho Stuka tiveram perdas tão altas em 18 de agosto que quase deixaram de ser usados.",
        "O problema da RAF eram os pilotos. Em 1º de julho a RAF podia reunir cerca de 1.103 pilotos de caça. No total, 2.936 pilotos voaram ao menos uma missão operacional durante a batalha, e 595 deles não eram britânicos, incluindo 145 poloneses e 88 tchecoslovacos. O 303º Esquadrão, polonês, foi o de maior número de vitórias, apesar de ter entrado na luta cerca de dois meses depois do começo.",
        { h: "O sistema Dowding" },
        "O que mais separava os dois lados era a informação. Estações de [[radar]] na costa, as Chain Home, e o Corpo de Observadores, voluntários que acompanhavam os aviões a olho nu e por telefone, enviavam o que viam ao quartel-general em Bentley Priory. Lá, uma sala de filtro juntava os relatos num mapa único, e os dados desciam para os grupos e para os setores, de onde os controladores mandavam os caças por rádio. A RAF só decolava onde e quando precisava.",
        "O radar via só o que estava à frente das antenas, em geral sobre o mar, e quem cobria a terra eram os observadores. Antes da guerra, uma taxa de interceptação de 30% a 50% era considerada ótima. Durante a batalha, as interceptações davam certo em mais de 75% das vezes, segundo uma estimativa, e em cerca de 90%, segundo outra.",
        { h: "Agosto: os aeroportos" },
        "Depois de semanas de ataques aos navios no Canal, o Adlertag, em 13 de agosto, abriu a fase central. A Luftwaffe passou a atacar os aeroportos, as estações de radar e as fábricas de aviões. Nos piores dias, caças Bf 109 recebiam a ordem de proteger 300 a 400 bombardeiros. Mas o alcance do 109 era limitado, e sobre Londres sobrava pouco combustível para combater.",
        { h: "O fim de agosto e o começo de setembro" },
        "Entre 24 de agosto e 6 de setembro, a pressão sobre os aeroportos do sudeste foi enorme. Os historiadores discordam sobre o perigo real. Wood e Dempster contam, para esse período, 295 caças destruídos e 103 pilotos mortos ou desaparecidos, e acham que a RAF correu risco sério. Bungay, Dye e Overy afirmam que a RAF nunca ficou sem pilotos e que os ataques aos aeroportos causaram pouco dano duradouro.",
        { h: "7 de setembro: o alvo muda" },
        "Segundo muitos historiadores, depois que bombardeiros britânicos atacaram Berlim no fim de agosto, Hitler passou a dar mais atenção a Londres e aos bombardeios noturnos. O primeiro grande ataque diurno à capital foi em 7 de setembro e matou ou feriu cerca de 1.600 civis. O efeito militar foi o contrário do que os alemães queriam: os aeroportos do 11º Grupo ganharam fôlego, e a RAF pôde se reconstituir.",
        { h: "15 de setembro" },
        "Os alemães planejavam uma grande ofensiva diurna sobre Londres para forçar a RAF a uma batalha decisiva. Por volta de 475 aviões alemães participaram da raid da tarde, e a RAF chegou a ter cerca de 276 caças no ar ao mesmo tempo. Churchill, na sala de operações do 11º Grupo em Uxbridge, perguntou a Park se ainda havia reservas. Park respondeu que não havia nenhuma. A nuvem dispersou muitas formações alemãs, e a raid causou menos estrago do que se queria.",
        "Os pilotos britânicos declararam 81 aviões abatidos só na fase do meio-dia, e a RAF no total disse ter derrubado 77 bombardeiros e 29 caças. As perdas reais da Alemanha foram bem menores: cerca de 21 a 23 bombardeiros e ao menos 12 caças. Foi um exagero, comum nos dois lados, e não mudou o resultado. Em 17 de setembro, Hitler adiou a Leão-Marinho."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A RAF perdeu cerca de 1.744 aviões e a Luftwaffe, cerca de 1.977, nas contagens mais citadas. As contagens de mortos variam conforme o que se inclui: 1.542 britânicos e 2.585 alemães é uma das mais citadas, e outros 925 alemães foram capturados. A Luftwaffe passou aos bombardeios noturnos, a Blitz, que durou até maio de 1941. A invasão nunca aconteceu. Bombardeiros britânicos tinham atacado as barcaças de invasão nos portos do Canal e afundado cerca de 200 até 19 de setembro.",
        { h: "Por que importa" },
        "Foi a primeira grande campanha militar travada inteiramente por forças aéreas. Mostrou que a defesa, com radar e comunicação, podia vencer um atacante maior. Impediu a invasão e manteve o Reino Unido como base de onde, depois, os aliados atacariam a Europa. Em 20 de agosto, Churchill disse no Parlamento, sobre os pilotos, que nunca, no campo dos conflitos humanos, tanto foi devido por tantos a tão poucos.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os 'poucos' de Churchill vinham de muitos países. Dos 2.936 pilotos reconhecidos, 595 não eram britânicos." },
        { note: "Os números de pilotos e aviões variam por fonte e por período. As cifras acima são as mais citadas. A cifra de civis mortos também depende de onde se corta a contagem: a Blitz continuou depois do fim oficial da batalha." },
        { note: "Dowding foi substituído em novembro de 1940, por Sholto Douglas, depois da vitória. Sua saída é associada à disputa com Leigh-Mallory sobre as grandes alas." }
      ]}
    ]
  },

  pearlharbor: {
    war: "Início da guerra no Pacífico (dezembro de 1941)",
    hook: "Num domingo de manhã, seis porta-aviões que ninguém viu chegar tentaram acabar com a frota americana em duas horas, e despertaram o país que decidiu a guerra.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Desde 1937, o Japão estava em guerra na China. O país, pobre em petróleo, dependia de importá-lo. Em 1941, depois que o Japão ocupou a Indochina francesa, os Estados Unidos cortaram as exportações de petróleo para ele. O Japão passou a mirar o petróleo das Índias Orientais Holandesas, no Sudeste Asiático, e temia que a frota americana, no Havaí, interviesse.",
        "O almirante Isoroku Yamamoto, chefe da Frota Combinada, começou a estudar uma ideia no começo de 1941: destruir os encouraçados americanos de uma vez, antes que pudessem reagir. Os planejadores estudaram o ataque britânico à frota italiana em Taranto, em 1940, feito com aviões lançados de porta-aviões.",
        { h: "O caminho até Pearl Harbor" },
        { timeline: [
          ["Julho de 1941", "Os Estados Unidos cortam as exportações de petróleo para o Japão."],
          ["5 de novembro", "O imperador Hirohito aprova o plano. A autorização final vem em 1º de dezembro."],
          ["20 de novembro", "O Japão faz uma última proposta: sair do sul da Indochina em troca de combustível de aviação e do fim das sanções."],
          ["26 de novembro", "Os Estados Unidos respondem com a nota Hull, que exige que o Japão saia da China. No mesmo dia, a frota japonesa parte dos Curilas, antes de a nota chegar."],
          ["7 de dezembro", "Domingo. O ataque."]
        ]},
        "A diplomacia continuou enquanto a frota navegava."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Isoroku Yamamoto, o idealizador" },
        "Almirante, tinha vivido nos Estados Unidos e conhecia seu poder industrial. Queria um golpe tão forte, logo no início, que desse tempo ao Japão no Pacífico. Uma frase atribuída a um oficial japonês, Hara, resume o resultado de forma amarga: o Japão ganhou uma grande vitória tática em Pearl Harbor e, com isso, perdeu a guerra. A origem exata da frase não é clara.",
        { h: "Chūichi Nagumo, o comandante da frota de ataque" },
        "Nagumo comandou a força-tarefa com os seis porta-aviões. Foi dele a decisão, depois do ataque, de não mandar uma terceira onda.",
        { h: "Minoru Genda e Mitsuo Fuchida" },
        "Genda foi o planejador aéreo que ajudou a montar a operação. Fuchida liderou a primeira onda de aviões. Shigekazu Shimazaki comandou a segunda.",
        { h: "Husband Kimmel e Walter Short" },
        "Kimmel comandava a frota americana do Pacífico, e Short, o exército no Havaí. Ambos foram depois criticados por não terem se preparado para um ataque aéreo e foram afastados dos cargos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A força japonesa, a Kido Butai, tinha seis porta-aviões, dois encouraçados, três cruzadores, onze contratorpedeiros e oito petroleiros. Ela levava, no total, 353 aviões que participaram das duas ondas. A primeira onda teve cerca de 180 aviões, a segunda, cerca de 170. Os planejadores previam deixar 48 caças como patrulha aérea sobre a frota.",
        "No porto estavam oito encouraçados americanos, vários cruzadores e contratorpedeiros. Os três porta-aviões da frota do Pacífico, Enterprise, Lexington e Saratoga, estavam fora de Pearl Harbor naquele dia.",
        { h: "A travessia" },
        "Em 26 de novembro de 1941, a frota partiu da baía de Hitokappu, na ilha de Etorofu, nas Curilas. Seguiu em [[silêncio de rádio]] por uma rota ao norte, para chegar a um ponto ao norte do Havaí. A ideia era lançar os aviões de lá, em duas ondas.",
        { h: "Antes do amanhecer" },
        { formation: true },
        "Cinco submarinos maiores levaram minissubmarinos até perto de Oahu, e os lançaram em torno de 1h da manhã. Às 3h42, o caça-minas Condor avistou um periscópio e avisou o contratorpedeiro Ward. O Ward afundou um minissubmarino às 6h37. Foram os primeiros tiros americanos da guerra do Pacífico. Um segundo minissubmarino seria afundado pelo Monaghan às 8h43.",
        { h: "O aviso que não foi levado a sério" },
        "A primeira onda foi detectada pelo [[radar]] do Exército em Opana Point, a mais de 200 km (as fontes citam entre 130 e 140 milhas). O aparelho estava em treinamento, e dois soldados, Elliott e Lockard, avisaram o centro de informações. O tenente Kermit Tyler achou que eram seis bombardeiros B-17 que deviam chegar da Califórnia. Os operadores acharam o sinal muito maior do que o normal, mas Tyler disse que não se preocupassem.",
        { h: "O ataque" },
        "A onda de Fuchida atacou às 7h48, hora do Havaí. Os aviões de [[torpedo]] foram direto aos encouraçados, ancorados em pares ao lado da ilha Ford. Os bombardeiros de nível jogaram bombas perfurantes, e os [[bombardeiros de mergulho|bombardeiro de mergulho]] e [[caças|caça]] atacaram os aeroportos, para destruir os aviões americanos no chão.",
        "O Arizona foi atingido por quatro bombas perfurantes e explodiu, com um paiol de proa. Morreram 1.177 homens, quase metade de todas as mortes americanas. O Oklahoma virou, com 429 mortos. O Nevada encalhou, e o West Virginia afundou.",
        "A segunda onda, com cerca de 170 aviões, veio mais ou menos uma hora depois e atacou principalmente aeroportos e navios que ainda flutuavam. Ao todo, a ação durou cerca de 90 minutos.",
        { h: "A terceira onda que não saiu" },
        "Nagumo recolheu os aviões e partiu sem mandar uma terceira onda. Entre as razões: os tiros antiaéreos americanos ficaram mais fortes, não se sabia onde estavam os porta-aviões americanos, havia o risco de bombardeiros baseados em terra, pousar à noite em porta-aviões era difícil, o combustível era limitado e ele achava o objetivo principal cumprido. Os capitães dos outros cinco porta-aviões disseram estar prontos para outro ataque. Yamamoto apoiou Nagumo, mas disse depois que não ter ordenado a terceira onda foi um grande erro.",
        "O estaleiro, as oficinas e os grandes tanques de combustível ficaram intactos. Para muitos historiadores, isso foi mais importante do que os encouraçados. O almirante Nimitz disse que, se eles tivessem sido destruídos, a guerra teria durado mais dois anos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Morreram 2.403 americanos: 2.008 marinheiros, 109 fuzileiros, 218 soldados e 68 civis. Foram 1.178 feridos. Dos oito encouraçados, quatro afundaram e todos sofreram danos. Seis voltaram ao serviço, entre eles o Nevada, em outubro de 1942, e o West Virginia, em julho de 1944. O Arizona e o Oklahoma não voltaram. Mais de 180 aviões americanos foram destruídos, 188 segundo a contagem mais citada.",
        "O Japão perdeu 29 aviões, deixou 74 danificados e teve cerca de 129 mortos. Um piloto de minissubmarino, Kazuo Sakamaki, foi o primeiro prisioneiro de guerra japonês dos Estados Unidos.",
        { h: "Por que importa" },
        "Em 8 de dezembro, o presidente Roosevelt disse ao Congresso que 7 de dezembro era 'uma data que viverá na infâmia'. O Congresso votou a declaração de guerra em cerca de uma hora. Em 11 de dezembro, a Alemanha e a Itália declararam guerra aos Estados Unidos, e a guerra no Pacífico virou parte de uma guerra mundial só.",
        "A tática foi brilhante, mas a estratégia falhou. Os Estados Unidos, que estavam longe de entrar na guerra, entraram unidos. Os porta-aviões que escaparam seriam peça central da guerra no Pacífico.",
        { h: "Curiosidades e controvérsias" },
        { note: "A declaração de guerra do Japão devia ser entregue antes do ataque. A mensagem, em 14 partes, foi decifrada pelos americanos antes, mas os atrasos de comunicação impediram o aviso. Foi entregue mais de uma hora depois que o ataque começou. O historiador Takeo Iguchi mostrou em 1999 que o exército e a marinha japoneses resistiram a avisar com antecedência, o que desmente a ideia antiga de que foi só acidente." },
        { note: "Teorias da conspiração dizem que americanos e britânicos sabiam do ataque e deixaram acontecer. Os historiadores em geral as rejeitam, por falta de provas." },
        { note: "A contagem de aviões e de minissubmarinos varia por fonte. Há contagens de 353 e de 414 aviões, e de quatro ou cinco minissubmarinos perdidos. Usamos os valores mais citados." }
      ]}
    ]
  },

  moscou: {
    war: "Frente Oriental da Segunda Guerra Mundial: Operação Tufão (1941 a 1942)",
    hook: "A 30 quilômetros do Kremlin, o exército que tinha vencido a Europa parou. A lama, o frio e as divisões da Sibéria fizeram o resto.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 22 de junho de 1941, a Alemanha invadiu a União Soviética na Operação Barbarossa. O Grupo de Exércitos Centro avançou em direção a Moscou e tomou Smolensk em 16 de julho. Então Hitler fez uma escolha que os generais criticaram: mandou parte das forças para o norte, rumo a Leningrado, e para o sul, rumo à Ucrânia. Os chefes do exército, como Brauchitsch e Halder, queriam um golpe direto em Moscou. Brauchitsch ouviu que só 'cérebros ossificados' poderiam pensar diferente.",
        "O desvio deu certo em Kiev: a Wehrmacht fechou um enorme bolsão em setembro, e o Exército Vermelho, só ali, perdeu perto de 700.000 homens entre mortos, feridos e prisioneiros, até 26 de setembro. Depois disso, com o verão acabando, Hitler voltou a Moscou. A Operação Tufão recomeçou o avanço em 30 de setembro.",
        { h: "O caminho até Moscou" },
        { timeline: [
          ["22 de junho", "Começa a invasão da União Soviética."],
          ["16 de julho", "Os alemães tomam Smolensk."],
          ["26 de setembro", "Termina a batalha de Kiev, com perdas soviéticas enormes."],
          ["30 de setembro", "A Operação Tufão começa. A data oficial da batalha é 2 de outubro."],
          ["10 de outubro", "Os tanques se encontram em Viazma. Jukov assume a defesa de Moscou."],
          ["7 de novembro", "Desfile na Praça Vermelha, com as tropas indo direto para a frente."],
          ["5 de dezembro", "Começa a contraofensiva soviética."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Fedor von Bock, Grupo de Exércitos Centro" },
        "Marechal experiente, Bock comandava três exércitos de infantaria, três grupos de [[panzer]] e a frota aérea Luftflotte 2. Entre os subordinados estavam Guderian, com o 2º Grupo Panzer, e Hoepner, com o 4º. O plano era cercar as forças soviéticas à frente de Moscou, em bolsões, e só então avançar sobre a cidade. Bock acabou removido, 'por motivos de saúde', depois do fracasso.",
        { h: "Gueorgui Jukov, defensor de Moscou" },
        "Jukov assumiu a defesa em 10 de outubro, com Konev como adjunto. Concentrou forças em quatro pontos e depois discordou de Stálin sobre contra-ataques cedo demais, por falta de reservas. Quando chegou a hora, comandou a contraofensiva.",
        { h: "Stálin" },
        "Em 15 de outubro, Stálin mandou evacuar o governo e o partido para Kuibichev. Houve pânico na cidade. Ele, porém, ficou em Moscou, e a notícia de que estava lá teve peso enorme. Em 7 de novembro, mandou fazer o desfile habitual na Praça Vermelha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado alemão, até dois milhões de homens, entre 1.000 e 2.470 tanques e canhões de assalto e cerca de 14.000 canhões foram usados, nas contagens mais citadas, com a Luftflotte 2 em apenas 549 aviões em condições de voar. Do lado soviético, três frentes (Oeste, Reserva e Bryansk), com cerca de 1,25 milhão de homens, 1.000 tanques e 7.600 canhões. Os números variam conforme a fonte e o recorte.",
        { h: "Viazma e Bryansk" },
        "No começo de outubro, os grupos de panzers fecharam dois bolsões, em Viazma e em Bryansk, e seus pontos de ataque se encontraram em Viazma em 10 de outubro. Quatro exércitos soviéticos foram cercados. As estimativas de prisioneiros divergem: avaliações alemãs falam em 673.000, pesquisas recentes em cerca de 514.000. Os alemães precisaram de 28 divisões para eliminar os bolsões.",
        { h: "A lama" },
        "Por volta de 7 de outubro, a primeira neve derreteu e as estradas viraram lama. É a [[rasputitsa]]. Os tanques e caminhões alemães desaceleraram e o Exército Vermelho ganhou tempo para se reorganizar. A linha de defesa de Mojaisk, improvisada, tinha no início só cerca de 90.000 soldados. Os alemães tomaram Mojaisk em 18 de outubro e Volokolamsk em 27 de outubro. Em Tula, ao sul, o ataque de Guderian chegou aos arredores em 26 de outubro, mas a defesa resistiu em 29 de outubro, e a cidade nunca foi tomada. Em 31 de outubro, o comando alemão parou as ofensivas até melhorar o abastecimento.",
        { note: "Os cavadores de Moscou eram, em grande parte, mulheres e adolescentes. Eles moveram quase três milhões de metros cúbicos de terra para fazer as defesas da cidade." },
        { h: "O último avanço" },
        "A terra congelou por volta de 15 de novembro, e os panzers puderam avançar de novo, em direção a Klin, Solnechnogorsk e Istra. Em 27 de novembro, os alemães tinham uma cabeça de ponte sobre o canal Moscou-Volga, a menos de 35 km do Kremlin. Krasnaia Poliana ficava a cerca de 29 km do Kremlin. Em 2 de dezembro, um batalhão de reconhecimento chegou a Khimki, a uns 30 km, o ponto mais próximo que os alemães atingiram.",
        "O inverno chegou sem roupas de inverno para os alemães. Bock registrou −45 °C em 30 de novembro, mas os registros oficiais soviéticos mostram mínima de −28,8 °C em dezembro. Foram relatados mais de 130.000 casos de congelamento entre os alemães. Os soviéticos, mais bem equipados, às vezes aproveitavam as roupas dos mortos alemães. Em 5 de dezembro, Guderian parou suas tropas e escreveu que a ofensiva fracassara e que o inimigo tinha sido subestimado.",
        { h: "A contraofensiva" },
        "Os reforços vieram da Sibéria e do Extremo Oriente: cerca de 18 divisões, 1.700 tanques e mais de 1.500 aviões, depois que o espião Richard Sorge informou que o Japão não pretendia atacar a União Soviética. Em 5 de dezembro, as frentes Kalinin, Oeste e Noroeste atacaram. Solnechnogorsk foi retomada em 12 de dezembro, Klin em 15 de dezembro, e Tula foi libertada em 16 de dezembro.",
        "Em 8 de dezembro, Hitler publicou a Diretiva 39, de defesa. Em 20 de dezembro, cancelou os recuos planejados e mandou defender cada palmo de terra. Brauchitsch foi demitido em 19 de dezembro, e Hitler assumiu o comando pessoal do exército. Guderian, Hoepner e Strauss também foram afastados até 25 de dezembro. A ofensiva soviética parou em 7 de janeiro de 1942, depois de empurrar os alemães de 100 a 250 km."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As estimativas de baixas alemãs na ofensiva somam 174.194 mortos, feridos ou desaparecidos, mas as fontes soviéticas e alemãs divergem. Do lado soviético, uma estimativa dá cerca de 581.000 baixas, enquanto os números por fase, publicados em outras fontes, somam mais de um milhão, e a diferença vem de modos diferentes de contar.",
        { h: "Por que importa" },
        "Foi a primeira vez que o exército alemão foi detido e empurrado para trás em grande escala, e acabou com a ideia de uma vitória rápida sobre a União Soviética. Os motivos do fracasso alemão, segundo os historiadores, foram: começar tarde, por causa do desvio para Kiev, a lama, o abastecimento esticado ao limite, a falta de roupa e equipamento de inverno e a subestimação das reservas soviéticas. As decisões de Hitler em dezembro também contaram.",
        { h: "Curiosidades e controvérsias" },
        { note: "A história dos '28 homens de Panfilov', que teriam detido uma coluna de tanques perto de Moscou, foi um dos grandes mitos da guerra soviética. Uma investigação do procurador militar, em 1948, concluiu que a história era invenção de jornalistas do jornal Estrela Vermelha. O relatório ficou secreto e só foi publicado em 2015." },
        { note: "As temperaturas são discutidas. Bock falou em −45 °C, os registros soviéticos mostram −28,8 °C em dezembro." },
        { note: "A importância da batalha de Mtsensk, em 6 de outubro, onde T-34 emboscaram Panzer IV, é debatida. O historiador Zetterling observa que os alemães perderam só nove tanques." }
      ]}
    ]
  },

  leningrado: {
    war: "Frente Oriental da Segunda Guerra Mundial: o cerco de Leningrado (1941 a 1944)",
    hook: "Durante 872 dias, uma cidade de mais de três milhões de pessoas resistiu a um cerco feito para matá-la de fome, e nunca se rendeu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Leningrado, hoje São Petersburgo, tinha sido capital da Rússia e era o berço da Revolução. Era sede da frota soviética do Báltico e produziu, em 1939, 11% da indústria do país. Para Hitler, tinha um valor simbólico, e ele não queria a cidade viva. Em uma diretiva de 29 de setembro de 1941, o comando alemão escreveu que, depois da derrota da União Soviética, 'não pode haver interesse na continuação da existência desse grande centro urbano'. O plano era arrasar a cidade e entregar a terra ao norte do rio Neva à Finlândia.",
        "O Grupo de Exércitos Norte, sob o marechal Wilhelm von Leeb, tinha 26 divisões, e Leeb achava que precisaria de 35. Em 21 de setembro de 1941, o comando alemão descartou a ocupação da cidade, porque então teria de alimentar a população. Escolheram o cerco e a fome.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["Agosto de 1941", "Os finlandeses chegam a cerca de 20 km dos subúrbios do norte. Em 31 de agosto, o marechal Mannerheim para a ofensiva, na fronteira de 1939."],
          ["30 de agosto", "A última ferrovia é cortada."],
          ["8 de setembro", "Os alemães chegam ao lago Ladoga, em Shlisselburg. Começa o cerco."],
          ["7 de outubro", "Hitler reafirma: nenhuma rendição deve ser aceita."],
          ["Dezembro de 1941", "Um contra-ataque soviético expulsa os alemães de Tikhvin, em 9 de dezembro."],
          ["18 de janeiro de 1943", "Uma ofensiva abre um corredor estreito por terra."],
          ["27 de janeiro de 1944", "O cerco é rompido de vez."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Wilhelm von Leeb, Georg von Küchler e os alemães" },
        "Leeb comandava o Grupo de Exércitos Norte, e Küchler, o 18º Exército. A tarefa deles não era invadir a cidade, e sim cercá-la e esperar. Não havia plano de tomar a cidade rua por rua.",
        { h: "Carl Gustaf Mannerheim e a Finlândia" },
        "A Finlândia lutava ao lado da Alemanha, para retomar territórios perdidos na guerra de 1939 a 1940. Mannerheim parou o avanço na antiga fronteira em 31 de agosto de 1941, e o comando finlandês recusou pedidos alemães para atacar Leningrado pelo ar. Os finlandeses chegaram ao rio Svir em 7 de setembro e não foram mais para o sul. A participação finlandesa continua discutida.",
        { h: "Jukov, Govorov e Jdanov" },
        "Gueorgui Jukov foi quem organizou a defesa nas semanas decisivas de setembro. Leonid Govorov comandou depois a frente de Leningrado e conduziu a artilharia da cidade. Andrei Jdanov era o chefe do Partido na cidade. Entre os comandantes soviéticos também estavam Voroshilov, Popov, Meretskov e o almirante Tributs, da frota do Báltico.",
        { h: "Os moradores" },
        "A população antes da guerra era de cerca de 3,2 milhões. Mais de um milhão de civis foram mobilizados para cavar defesas, incluindo 700 km de valas antitanque. Os canhões do cruzador Aurora foram tirados do navio e levados para a defesa da cidade."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A força inicial era de cerca de 725.000 homens do lado do Eixo e 930.000 do lado soviético, nas contagens mais citadas. Os números de baixas, 579.985 para o Eixo e 3.473.066 para os soviéticos, cobrem toda a campanha na região, não só a cidade.",
        { h: "A fome" },
        "O primeiro inverno foi o pior. A [[ração]] de pão chegou a 125 gramas por dia entre novembro de 1941 e fevereiro de 1942, e o pão levava de 50% a 60% de serragem e outros aditivos. As mortes chegaram a cerca de 100.000 por mês em janeiro e fevereiro de 1942, quase todas por fome.",
        "A polícia política registrou o primeiro caso de carne humana usada como alimento em 13 de dezembro de 1941. Até dezembro de 1942, 2.105 pessoas foram presas por canibalismo, e 1.216 assassinatos por cartões de ração foram registrados só no primeiro semestre de 1942. Os historiadores lembram que o canibalismo era raro perto da escala da fome.",
        { h: "A Estrada da Vida" },
        "O único caminho aberto era o lago Ladoga. No verão, barcos. No inverno, caminhões sobre o gelo, a chamada Estrada da Vida, até Osinovets, e dali por uma ferrovia suburbana de 45 km. Ela levava comida para dentro e tirava gente para fora, sob bombas e tiros de artilharia. Em 19 de setembro de 1941, um ataque aéreo com 276 bombardeiros matou cerca de 1.000 civis. No total, bombardeios e tiros de artilharia mataram 5.723 e feriram 20.507, segundo a mesma contagem.",
        { h: "A Sétima Sinfonia" },
        "Dmitri Shostakovich começou a Sétima Sinfonia em Leningrado e a terminou em Kuibichev, em dezembro de 1941. A estreia foi lá, em 5 de março de 1942. Em 9 de agosto de 1942, a Orquestra da Rádio de Leningrado, regida por Karl Eliasberg, tocou a obra na cidade sitiada. Só restavam cerca de 15 músicos, e foram procurar os outros em apartamentos frios e escuros. Músicos receberam ração extra. A partitura foi trazida de avião, em julho.",
        "Os alto-falantes transmitiram o concerto por toda a cidade e na direção das linhas alemãs. Antes, o general Govorov ordenou um bombardeio de artilharia sobre as posições alemãs para silenciá-las, a Operação Tempestade (Squall), com cerca de três mil projéteis. Segundo uma versão, a data foi escolhida porque Hitler havia planejado um banquete no hotel Astoria para comemorar a queda da cidade naquele dia."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A cidade nunca se rendeu. O cerco foi rompido de vez em 27 de janeiro de 1944, depois de 872 dias. O número de mortos é discutido. Uma das contagens cita 642.000 mortes de civis durante o cerco, mais 400.000 durante as evacuações, e estimativas totais de 1,3 milhão (Salisbury) a 1,5 milhão, e de 1,6 a 2 milhões (Glantz). Cerca de 1,4 milhão a 1,7 milhão foram evacuados, conforme a fonte.",
        { h: "Por que importa" },
        "O cerco é um dos mais longos e mortais da história. Hitler tinha escolhido a fome de propósito, e alguns historiadores o classificam como genocídio por causa disso. A resistência manteve presa uma parte do exército alemão por quase três anos e se tornou um símbolo central da memória da guerra na Rússia.",
        { h: "Curiosidades e controvérsias" },
        { note: "O número de mortos varia de 600 mil a mais de um milhão e meio, e a diferença vem de como se conta: mortes no cerco, na evacuação, só civis, só a cidade." },
        { note: "A origem da Sétima Sinfonia é disputada. A versão oficial diz que Shostakovich a escreveu em resposta à invasão. O violinista Rostislav Dubinsky disse que o primeiro movimento estava pronto um ano antes, e o livro Testemunho, de Solomon Volkov, afirma que o tema da 'invasão' já tinha outros alvos. A confiabilidade do livro é discutida." },
        { note: "A Divisão Azul, formada por voluntários espanhóis, aparece na ordem de batalha alemã na região." }
      ]}
    ]
  },

  tobruk: {
    war: "Campanha do Deserto Ocidental, no Norte da África (1941)",
    hook: "Num porto cercado no deserto, soldados australianos aguentaram os tanques de Rommel e adotaram como medalha o insulto que a propaganda alemã lhes deu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim de 1940, os britânicos e seus aliados tinham expulsado os italianos de boa parte da Líbia. A Operação Compass, entre dezembro de 1940 e fevereiro de 1941, empurrou o 10º Exército italiano. Tobruk, um porto na costa da Cirenaica, foi tomado dos italianos em janeiro de 1941.",
        "Depois disso, muitas tropas britânicas foram mandadas para a Grécia e para a Síria. Ficou na Cirenaica uma força de esqueleto, com pouco equipamento e transporte. O comandante britânico Wavell achava que os alemães não poderiam atacar antes de maio. A Alemanha, porém, mandou tropas para ajudar os italianos (Operação Girassol, de fevereiro a maio de 1941), sob o comando de Erwin Rommel, e Wavell se mostrou enganado.",
        { h: "O caminho até Tobruk" },
        { timeline: [
          ["Janeiro de 1941", "Os aliados tomam Tobruk dos italianos."],
          ["Fevereiro a maio de 1941", "Chegam as tropas alemãs de Rommel (Operação Girassol)."],
          ["10 a 11 de abril", "As tropas do Eixo cercam Tobruk. Começa o cerco."],
          ["13 e 14 de abril", "Primeiro grande ataque alemão, com tanques."],
          ["Junho de 1941", "Fracassa a Operação Battleaxe, de socorro."],
          ["Agosto a outubro", "As tropas australianas são trocadas por outras."],
          ["18 a 27 de novembro", "A Operação Crusader abre caminho até Tobruk."]
        ]},
        "Rommel não podia seguir para o Egito sem o porto de Tobruk: sem ele, o abastecimento do Eixo ficava preso a Trípoli e Benghazi, muito longe. Deixar uma guarnição aliada atrás da sua linha era arriscado demais."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Leslie Morshead, o comandante" },
        "General australiano que comandava a 9ª Divisão e a guarnição inteira. Mandou que qualquer penetração inimiga fosse eliminada na hora, e a defesa ganhou uma segunda linha atrás da primeira.",
        { h: "Erwin Rommel" },
        "Comandante do Afrika Korps, com a 5ª Divisão Leve e a 15ª Divisão Panzer, mais as divisões italianas Ariete, Brescia e Trento. O general italiano Gariboldi, comandante italiano no teatro, chegou em 28 de abril. O abastecimento do Eixo passava por Trípoli, Benghazi e Tobruk e sofria com a escassez e com as perdas de navios.",
        { h: "Wavell e Auchinleck" },
        "Archibald Wavell comandava o Oriente Médio. Depois do fracasso da Operação Battleaxe, em junho, ele foi substituído por Claude Auchinleck."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Em abril, havia cerca de 36.000 pessoas em Tobruk, mas cerca de um terço eram unidades de base, refugiados ou prisioneiros. Outra conta fala em cerca de 35.000 aliados, 14.000 deles australianos. A guarnição tinha a 9ª Divisão australiana, a 18ª Brigada, quatro regimentos de artilharia britânicos e a 3ª Brigada Motorizada indiana. A defesa antiaérea, a 4ª Brigada, tinha 16 canhões pesados e 59 leves, a maioria em volta do porto.",
        "Os números do Eixo são incertos e variam conforme a fonte.",
        { h: "O terreno" },
        "O perímetro, herdado dos italianos, era um duplo semicírculo de pontos fortes de concreto a 13 a 14 km do porto, com cerca de 48 km de extensão. Tinha uma vala antitanque por dentro, arame farpado e armadilhas em alguns trechos. Os aliados fizeram uma segunda linha, uns 3 km atrás. Cada batalhão cobria cerca de 8 km de frente.",
        { h: "O ataque de abril" },
        "Em 13 e 14 de abril, a infantaria alemã abriu passagem pelas valas e pelo arame na estrada de El Adem, e 36 [[tanques|tanque]] do 5º Regimento Panzer passaram pela brecha. Cerca de 3 km depois, foram parados por [[artilharia]], por [[canhões antitanque|canhão antitanque]] e por tanques Crusader enterrados. Em um relato, o regimento perdeu 17 tanques em vinte minutos. Esse número vem de uma só fonte secundária e deve ser lido como estimativa.",
        "Em 16 de abril, em Ras el Medauar, os australianos contra-atacaram e capturaram mais de 800 prisioneiros.",
        { h: "O saliente" },
        "Entre 30 de abril e 3 de maio, o Eixo ocupou uma faixa de cerca de 5 km de frente, com até 3 km de profundidade. Foi o maior ganho do cerco, pago com cerca de 650 baixas alemãs e 500 italianas. A guarnição reagiu e fechou a brecha.",
        { h: "O cerco, de maio a novembro" },
        "A Operação Brevity (15 e 16 de maio) tentou romper o cerco e quase não manteve nada, apesar de brevemente tomar o desfiladeiro de Halfaya. A Operação Battleaxe (15 a 17 de junho) também falhou, com 969 baixas aliadas e perda de muitos tanques. Em julho, o 8º Comando atacou o ponto chamado Twin Pimples, e tomou.",
        "O abastecimento vinha pelo mar, num serviço de balsas que também dava apoio de tiro, levava tropas frescas e tirava os feridos. A Marinha teve 780 baixas (539 mortos ou desaparecidos e 241 feridos). Foram afundados 26 navios de guerra e outras embarcações, além de seis navios mercantes, e 23 foram danificados. Um dos afundados foi o contratorpedeiro Waterhen, atingido por Stukas.",
        { h: "A troca das tropas" },
        "O general Blamey e o governo australiano pediram a retirada da 9ª Divisão, citando a saúde das tropas e o desejo de juntar todos os australianos sob um comando. Auchinleck concordou em princípio, mas demorou, porque a troca exigia navios rápidos em noites sem lua e os recursos estavam voltados para a Operação Crusader. Os primeiros-ministros australianos Fadden e depois Curtin recusaram os pedidos de Churchill para reverter. Poloneses e tchecos desembarcaram de 19 a 29 de agosto, e a 70ª Divisão britânica chegou em setembro e outubro. O comando passou de Morshead para Scobie.",
        { h: "O fim do cerco" },
        "A Operação Crusader começou em 18 de novembro. Em 21 de novembro, a guarnição saiu pelo flanco e abriu um corredor de uns 13 km de largura. Em 27 de novembro, tomou Ed Duda e se ligou aos neozelandeses do 8º Exército. Rommel decidiu abandonar Tobruk em 5 de dezembro, e o cerco foi levantado de vez no mesmo mês. Os alemães retomaram o porto em 21 de junho de 1942, depois da derrota britânica em Gazala."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As baixas aliadas em terra, de 10 de abril a 27 de novembro, somaram 5.989, incluindo 3.194 australianos (744 mortos, 1.974 feridos, 476 desaparecidos). As do Eixo, de 15 de fevereiro a 18 de novembro, incluíram 1.130 italianos mortos, 4.255 feridos e 3.851 desaparecidos, e cerca de 538 alemães mortos, 1.657 feridos e 681 desaparecidos. Os aviões do Eixo derrubados ficam entre 74 e 150, conforme a fonte.",
        { h: "Por que importa" },
        "Costuma-se dizer que foi a primeira vez na guerra em que unidades [[panzer]] foram paradas. Mostrou que o estilo de guerra de movimento alemão podia ser contido por uma defesa bem organizada, perto do mar, que se abastecia pelo mar. Prendeu em Tobruk tropas e suprimentos que Rommel queria usar na ofensiva para o Egito.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome 'Ratos de Tobruk' é atribuído a William Joyce, o 'Lord Haw-Haw', que nas transmissões alemãs descrevia os soldados vivendo como ratos em abrigos subterrâneos. Os australianos adotaram o nome com orgulho. O cabo Leslie Dufton fez uma medalha não oficial com a imagem de um rato, usando metal de um bombardeiro alemão derrubado pela guarnição com armas capturadas." },
        { note: "Quanto tempo durou o cerco? Entre 10 de abril e 27 de novembro são 231 dias. A cifra de 241 dias, repetida em outros lugares, só fecha se o fim for contado em dezembro, perto de 10 de dezembro, data em que o cerco é dado por levantado em algumas fontes." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  pearlharbor: {
    terrain: [
      { t: "hill", x: 52, y: 50, rx: 38, ry: 14, l: "Oahu (esquema sem escala)" },
      { t: "note", x: 90, y: 5, l: "Norte ↑" }
    ],
    units: [
      { id: "kb", s: "a", k: "ship", w: 14, h: 5, l: "Frota japonesa (6 porta-aviões)" },
      { id: "w1", s: "a", k: "ele", w: 10, h: 3, l: "1ª onda" },
      { id: "w2", s: "a", k: "ele", w: 10, h: 3, l: "2ª onda" },
      { id: "sub", s: "a", k: "ship", w: 7, h: 2, l: "Minissubmarinos" },
      { id: "bb", s: "b", k: "ship", w: 18, h: 4, l: "Encouraçados" },
      { id: "yard", s: "b", k: "camp", w: 12, h: 4, l: "Estaleiro e combustível" },
      { id: "fld", s: "b", k: "camp", w: 14, h: 4, l: "Aeroportos" },
      { id: "cv", s: "b", k: "ship", w: 15, h: 4, l: "Porta-aviões americanos (fora)" },
      { id: "ward", s: "b", k: "ship", w: 7, h: 2, l: "Ward" }
    ],
    steps: [
      { t: "A frota japonesa chegou, em silêncio de rádio, ao norte do Havaí. No porto estão os oito encouraçados, ancorados na ilha Ford. Os três porta-aviões americanos estão longe. As cápsulas são ondas de aviões.",
        p: { kb: [50, 6], w1: [42, 12], w2: [58, 12], sub: [40, 68], bb: [52, 50], yard: [34, 54], fld: [72, 54], cv: [14, 22], ward: [52, 64] } },
      { t: "Antes do amanhecer, os minissubmarinos chegam perto da entrada do porto. Às 6h37, o contratorpedeiro Ward afunda um deles: são os primeiros tiros americanos da guerra.",
        p: { sub: [48, 60] } },
      { t: "O radar de Opana detecta a primeira onda a mais de 200 km. O tenente de serviço acredita que são bombardeiros B-17 americanos, e ninguém dá o alarme.",
        p: { w1: [50, 28] } },
      { t: "Cerca das 7h50, a primeira onda ataca. Aviões lançam torpedos nos encouraçados, enquanto bombardeiros e caças atacam os aeroportos para destruir os aviões no chão.",
        p: { w1: [52, 46], bb: [52, 50, -4] } },
      { t: "O Arizona explode, com 1.177 mortos. O Oklahoma vira, com 429. Parte dos aviões japoneses voa sobre os aeroportos e destrói quase 190 aviões americanos.",
        p: { w1: [70, 50] } },
      { t: "Cerca de uma hora depois, chega a segunda onda, com cerca de 170 aviões. Os americanos já respondem com tiros antiaéreos mais fortes.",
        p: { w2: [52, 44] } },
      { t: "Depois de uns 90 minutos, as duas ondas voltam para os porta-aviões. O Japão perdeu 29 aviões.",
        p: { w1: [44, 14], w2: [56, 14] } },
      { t: "Nagumo não manda uma terceira onda e vira de volta para o norte. O estaleiro e os tanques de combustível ficam intactos, e os porta-aviões americanos estão a salvo.",
        p: { kb: [50, 2] } }
    ]
  }
});
