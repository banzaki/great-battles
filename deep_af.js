// batch af: Jutlândia, Varsóvia, Boquerón, Xangai 1937, Khalkhin Gol, Suomussalmi
Object.assign(GLOSSARY, {
  "dreadnought": "Encouraçado moderno, no estilo do HMS Dreadnought (1906): todos os canhões grandes iguais, em torres giratórias. A partir dele, os navios anteriores ficaram ultrapassados.",
  "pré-dreadnought": "Encouraçado da geração anterior ao Dreadnought: mais lento e com menos canhões grandes. A Alemanha ainda levou seis para Jutlândia.",
  "cruzador de batalha": "Navio quase tão grande e armado quanto um encouraçado, mas com menos blindagem, para andar mais depressa. Em Jutlândia, três deles britânicos explodiram.",
  "cruzador": "Navio de guerra grande e rápido, menor que um encouraçado. Servia para explorar, escoltar e atacar o comércio inimigo.",
  "destróier": "Navio pequeno e veloz que protege a frota e ataca navios maiores com torpedos. Os britânicos o chamavam de 'destroyer'.",
  "torpedo": "Projétil que anda debaixo d'água sozinho até o alvo. Um único acerto pode afundar um navio grande, por isso as frotas temiam os destróieres.",
  "cruzar o t": "Manobra naval clássica: a linha de navios de um lado atravessa à frente da linha inimiga, formando um T. Todos os canhões do primeiro lado atiram, e só os da frente do segundo conseguem responder.",
  "sala 40": "O serviço secreto de decifração do Almirantado britânico na Primeira Guerra. Lia parte das mensagens de rádio alemãs.",
  "cordite": "Pólvora em forma de cordões, usada para lançar os projéteis dos canhões navais. Quando pegava fogo no paiol, a chama descia pelos corredores e a explosão rasgava o navio.",
  "guerra submarina irrestrita": "Afundar qualquer navio que entre numa zona de guerra, sem aviso. A Alemanha a adotou em 1917, e isso contribuiu para a entrada dos Estados Unidos na guerra.",
  "bolcheviques": "O partido de Lênin, que tomou o poder na Rússia em 1917 e criou a União Soviética. O Exército Vermelho era o seu exército.",
  "frente": "Na guerra soviética, um grupo de exércitos sob um só comando, responsável por uma região inteira.",
  "cabeça de ponte": "Posição que se segura do outro lado de um rio, para poder atravessar tropas ou atacar a partir dela.",
  "ulanos": "Cavalaria polonesa armada de lança. Os regimentos de ulanos eram o orgulho do exército polonês.",
  "legiões polonesas": "Unidades de voluntários poloneses formadas por Piłsudski na Primeira Guerra, quando a Polônia ainda não existia como país. Os veteranos viraram a base do exército da nova Polônia.",
  "internados": "Soldados que fogem para um país neutro e são desarmados e retidos ali até o fim da guerra, ou até que o país decida soltá-los.",
  "fortim": "Pequeno posto militar, quase sempre de troncos e terra, para guardar um ponto no meio do mato. No Chaco havia dezenas, muitos a quilômetros uns dos outros.",
  "tajamar": "Pequena represa escavada na terra para guardar a água da chuva. No Chaco, onde quase não há rios, era a fonte de água de cada posto.",
  "metralhadora": "Arma que dispara muitos tiros por minuto, em rajada. Uma única metralhadora bem posicionada segura dezenas de atacantes a pé.",
  "baixas": "Soldados tirados do combate: mortos, feridos, desaparecidos e prisioneiros. Quando se diz 'baixas', não se sabe só quantos morreram.",
  "concessão internacional": "Bairros de Xangai administrados por potências estrangeiras, com polícia e leis próprias. A Concessão Internacional (britânicos e americanos) e a Francesa ficaram em pé no meio da batalha.",
  "kuomintang": "O Partido Nacionalista da China, liderado por Chiang Kai-shek, que governava o país em 1937 e tinha o Exército Nacional como braço armado.",
  "exército de kwantung": "O exército japonês na Manchúria. Agia com muita independência de Tóquio, e muitas vezes criou crises por conta própria.",
  "manchukuo": "Estado fantoche criado pelo Japão em 1932 na Manchúria, com um imperador chinês sem poder real. Os soviéticos e mongóis o tratavam como parte do Japão.",
  "duplo envolvimento": "Cercar o inimigo pelos dois lados ao mesmo tempo, com duas pontas de lança que se encontram atrás dele. É a 'pinça' dos manuais militares.",
  "tanque": "Veículo de guerra blindado, com esteiras e canhão. Um tanque atravessa trincheira e arame farpado, e protege quem vai dentro das balas de fuzil.",
  "motti": "Palavra finlandesa para uma pilha de lenha medida, deixada na floresta para ser recolhida depois. Os finlandeses chamavam assim cada pedaço de coluna inimiga cortado e isolado, para ser 'recolhido' quando desse.",
  "cozinha de campanha": "Fogão sobre rodas que prepara a comida quente do exército. Com frio extremo, perder as cozinhas era perder a única comida quente."
});

Object.assign(DEEP, {
  jutlandia: {
    war: "Primeira Guerra Mundial: a guerra naval no Mar do Norte (1914–1918)",
    hook: "O único grande choque entre as frotas de encouraçados da Primeira Guerra, e as duas saíram dizendo que tinham vencido.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1916, a Grã-Bretanha mandava no mar e usava isso como arma. Sua Grande Frota, baseada no norte da Escócia, mantinha um [[bloqueio naval]] que impedia a chegada de comida e matéria-prima à Alemanha. Os alemães tinham uma frota de alto-mar grande e moderna, mas muito menor: 16 [[dreadnoughts|dreadnought]] contra 28. Numa batalha em campo aberto, não tinham chance.",
        "O almirante Reinhard Scheer assumiu a Frota de Alto-Mar em janeiro de 1916, no lugar do almirante Pohl. Seu plano era astuto: atrair uma parte da frota britânica para uma armadilha, onde seria destruída por uma força superior e por submarinos, e só depois enfrentar o resto em condições melhores. Dez submarinos foram postados diante das bases britânicas. Quando o mau tempo cancelou o ataque a Sunderland, a operação virou uma saída para o estreito do Skagerrak, entre a Noruega e a Dinamarca.",
        { h: "O caminho até Jutlândia" },
        { timeline: [
          ["Janeiro de 1916", "Scheer assume a frota alemã e prepara uma estratégia mais agressiva."],
          ["28 de maio", "A [[sala 40]] intercepta mensagens que mostram a frota alemã em movimento."],
          ["30 de maio", "O Almirantado intercepta a ordem de Scheer para 31 de maio e avisa Jellicoe de que a frota alemã pode sair na manhã seguinte."],
          ["31 de maio, 14h28", "Primeiros tiros: cruzadores leves britânicos encontram torpedeiras alemãs."],
          ["31 de maio, 15h48", "Começa a 'corrida para o sul': Beatty e Hipper trocam tiros em movimento."],
          ["1º de junho, madrugada", "Scheer escapa pelo escuro e volta para o porto."]
        ]},
        "A sala 40 lia parte dos códigos alemães, e por isso a Grande Frota inteira foi para o mar, e não só os navios de Beatty. Mas houve um engano que quase custou a vantagem: o Almirantado perguntou onde estava o indicativo de chamada que a frota alemã usava no porto, e disseram a Jellicoe que Scheer continuava em Wilhelmshaven. Na verdade, ele usava outro indicativo no mar, e já tinha zarpado."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Sir John Jellicoe, comandante da Grande Frota" },
        "Um oficial cauteloso por temperamento e por obrigação. Ele comandava a Grande Frota, e dela dependia o bloqueio. Segundo a frase que se atribui a Churchill, era o único homem dos dois lados que podia perder a guerra numa tarde. Por isso preferia uma vitória limpa a uma aventura.",
        { h: "Sir David Beatty, comandante dos cruzadores de batalha" },
        "O oposto: ousado e popular, comandava os [[cruzadores de batalha|cruzador de batalha]] e queria a luta imediata. Em Jutlândia, as críticas contra ele são pesadas: manteve fogo parado por mais de dez minutos quando já tinha o inimigo ao alcance, não organizou seus navios com cuidado, e seus sinais de bandeira e de lâmpada não chegaram a quem precisavam chegar.",
        { h: "Reinhard Scheer e Franz Hipper" },
        "Scheer era o autor do plano e comandava a frota alemã. Hipper comandava o Grupo de Reconhecimento, os cruzadores de batalha alemães que serviram de isca para Beatty. Do outro lado, nomes que não voltaram: o contra-almirante Horace Hood, comandante do 3º Esquadrão de Cruzadores de Batalha, morreu com o Invincible, e o contra-almirante Sir Robert Arbuthnot morreu com o Defence."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os britânicos levaram 151 navios de combate: 28 dreadnoughts, 9 cruzadores de batalha, 8 cruzadores blindados, 26 cruzadores leves, cerca de 78 [[destróieres|destróier]] e um porta-hidroaviões. Os alemães levaram 99: 16 dreadnoughts, 6 [[pré-dreadnoughts|pré-dreadnought]], 5 cruzadores de batalha, 11 cruzadores leves e 61 torpedeiras. Se todos disparassem de uma vez, a salva britânica pesaria cerca de 150 toneladas, contra cerca de 61 dos alemães.",
        { note: "As fontes dão 78 ou 79 destróieres britânicos. Usamos 'cerca de 78'." },
        { h: "O terreno" },
        "Mar aberto, ao largo da costa oeste da Dinamarca (a Jutlândia), sem ilhas nem acidentes. Não havia onde se esconder: a visibilidade, que mudava com a névoa e a fumaça de milhares de chaminés e canhões, era quase tudo.",
        { h: "A batalha em oito momentos" },
        { formation: true },
        "Primeiro, a corrida para o sul. Em 31 de maio, às 14h32, Beatty mudou de rumo, mas o sinal não chegou ao almirante Evan-Thomas, que comandava os quatro encouraçados rápidos da classe Queen Elizabeth, com canhões de 15 polegadas. O 5º Esquadrão de Encouraçados ficou para trás justamente quando seria mais útil. Hipper, às 15h22, avistou Beatty e recuou, atraindo-o para o sudeste, na direção de Scheer.",
        "Segundo, as explosões. Às 16h, a torre 'Q' do Lion foi atingida e só não explodiu porque o paiol foi inundado a tempo. Dois minutos depois, o Indefatigable foi atingido pelo Von der Tann e explodiu: só dois de seus 1.019 homens sobreviveram. Entre 16h25 e 16h26, o Queen Mary foi atingido pelo Derfflinger e/ou pelo Seydlitz, e explodiu também: só nove de 1.275 sobreviveram. Foi então que Beatty disse ao capitão do Lion, Chatfield, a frase que ficou famosa, em tradução livre: 'Parece haver algo errado com nossos malditos navios hoje.'",
        "Terceiro, a virada para o norte. Às 16h30, o cruzador Southampton avistou os encouraçados de Scheer, a primeira notícia de que a frota alemã inteira estava no mar. Às 16h40, Beatty deu meia-volta e passou a atrair Hipper e Scheer na direção de Jellicoe. Às 16h48, os primeiros encouraçados alemães abriram fogo contra os britânicos, de longe.",
        "Quarto, uma das decisões de comando mais importantes de toda a guerra: a de Jellicoe. Ele vinha com a frota em colunas e tinha de passar para a linha de batalha sem saber exatamente onde estava o inimigo. Às 18h15, mandou a frota se abrir para o leste, e por aquele movimento o [[T|cruzar o t]] dos alemães foi cruzado, com a Grande Frota entre eles e a Alemanha.",
        "Quinto, o ponto que os britânicos apelidaram de 'Windy Corner'. Às 18h19, o Warspite emperrou o leme e levou 13 acertos. O Defence foi destruído com todos os 903 homens, inclusive Arbuthnot. Por volta das 18h30, o Invincible foi afundado pelo Lützow e pelo Derfflinger em cerca de 90 segundos: só seis dos 1.032 homens sobreviveram, e Hood morreu. Ao mesmo tempo, Jellicoe cruzava o T de Scheer. O Iron Duke acertou o König sete vezes, mas só cerca de 10 dos 24 dreadnoughts britânicos chegaram a disparar, por causa da má visibilidade.",
        "Sexto, a meia-volta de Scheer. Às 18h33, ele fez uma 'meia-volta em batalha' de 180 graus para fugir. Às 18h54 o Marlborough foi torpedeado e reduziu a 16 nós. E às 18h55 Scheer voltou para o leste, o que o levou de novo na direção da linha de Jellicoe. Às 19h02, o destróier Shark afundou depois de lutar até o fim, e seu comandante, Loftus Jones, recebeu a Cruz Vitória. Às 19h15, Jellicoe cruzou o T de novo, agora com um arco de fogo mais fechado, e danificou vários navios alemães.",
        "Sétimo, a 'cavalgada da morte'. Às 19h17, Scheer deu outra meia-volta. Hipper já estava a bordo de uma torpedeira, e o Derfflinger liderou a carga dos cruzadores de batalha alemães para cobrir a fuga. Nessa fase, os alemães sofreram 37 acertos pesados contra dois, e o Derfflinger sozinho levou 14. Foram lançados 31 [[torpedos|torpedo]] contra a frota britânica, e Jellicoe os evitou todos, afastando-se deles: uma cautela muito discutida depois, porque poupou a frota e deixou Scheer escapar.",
        "Oitavo, a noite. Jellicoe decidiu não brigar no escuro, esperar o amanhecer e bloquear o caminho de casa. Scheer, em vez de esperar, cruzou a esteira da frota britânica e correu para o Cabo Horns Reef, no sudeste. Entre 23h20 e cerca de 2h15, destróieres britânicos atacaram a linha alemã e perderam cinco navios, mas torpedearam o cruzador Rostock e o antigo encouraçado Pommern, que afundou às 3h10 com todos os 839 homens. O cruzador blindado Black Prince, perdido do resto, entrou sem querer na linha alemã pouco depois da meia-noite e afundou com todos os 857 homens. O Lützow, já abandonado, foi torpedeado pelos próprios alemães às 1h45.",
        "Pior para a Grã-Bretanha, o Almirantado não repassou a Jellicoe sete mensagens importantes interceptadas. Ele só soube onde Scheer estava às 4h15, quando já era tarde: os alemães tinham passado e o mar estava vazio."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os britânicos perderam três cruzadores de batalha, três cruzadores blindados e oito destróieres, cerca de 113.300 toneladas, e 6.094 homens mortos. Os alemães perderam um cruzador de batalha, um pré-dreadnought, quatro cruzadores leves e cinco torpedeiras, cerca de 62.300 toneladas, e 2.551 mortos. Ou seja, a Grã-Bretanha perdeu quase o dobro de navios em toneladas e mais que o dobro de homens.",
        "Mas a conta que importava era outra. Um mês depois, a Grande Frota estava mais forte que antes da batalha, com 23 dreadnoughts e quatro cruzadores de batalha prontos, contra 10 dreadnoughts alemães. A frota alemã saiu só mais três vezes, em agosto de 1916, outubro de 1916 e abril de 1918, sem jamais enfrentar de novo os encouraçados britânicos, e passou boa parte do resto da guerra no Báltico. O bloqueio continuou.",
        "Como resposta, a Alemanha apostou em outra arma: a [[guerra submarina irrestrita]], que contribuiu para a entrada dos Estados Unidos na guerra, em abril de 1917.",
        { h: "O que a Grã-Bretanha aprendeu" },
        "Três cruzadores de batalha britânicos foram perdidos não porque o casco foi perfurado, mas porque o fogo chegou aos paióis. O manuseio da [[cordite]] era inseguro, e depois da batalha o comitê de Beatty recomendou proteções contra flashes. A blindagem foi reforçada, e o futuro cruzador de batalha Hood ganhou cerca de 5.000 toneladas de blindagem extra. Os projéteis perfurantes britânicos também falharam muitas vezes ao tentar penetrar a blindagem alemã, e os telêmetros alemães eram melhores.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem venceu: os dois disseram que ganharam. Em 2 de junho, a Alemanha anunciou uma grande vitória, e o Kaiser falou num novo capítulo da história mundial. A Alemanha escondeu a perda de Lützow, Elbing e Rostock. A primeira notícia chegou a Londres pelas transmissões alemãs, e a imprensa britânica chegou a noticiar uma derrota. Em navios e em homens, a Alemanha perdeu menos, mas não destruiu a Grande Frota nem quebrou o bloqueio." },
        { note: "A frase de Beatty: a versão popular acrescenta uma ordem, 'vire dois pontos para bombordo', que não tem registro oficial. A frase sobre os 'malditos navios' é a parte confiável." },
        { note: "O nome: os britânicos chamam a batalha de Jutlândia, a região da Dinamarca perto da qual ela aconteceu. Os alemães a chamam de Batalha do Skagerrak." },
        { note: "As baixas: as fontes dão números levemente diferentes de toneladas e de homens. Usamos 6.094 mortos britânicos e 2.551 alemães." }
      ]}
    ]
  },

  varsovia: {
    war: "Guerra Polaco-Soviética (1919–1921)",
    hook: "Em meados de agosto de 1920, o Exército Vermelho chegou a 13 km de Varsóvia. Uma semana depois, estava em fuga.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Polônia tinha desaparecido do mapa no fim do século XVIII, dividida entre a Rússia, a Prússia e a Áustria. Ela renasceu em 1918, quando as três potências caíram na Primeira Guerra Mundial. Mas as fronteiras do novo país não estavam definidas, e a Rússia, agora governada pelos [[bolcheviques]], tinha outras ideias. Lênin queria levar a revolução para o oeste, e a Polônia estava no caminho entre a Rússia e a Alemanha.",
        "O chefe de Estado polonês era o marechal Józef Piłsudski, veterano das [[legiões polonesas]], que sonhava com uma Polônia forte no leste, aliada à Ucrânia independente. Em 21 de abril de 1920, aliou-se ao líder ucraniano Symon Petlura.",
        { h: "O caminho até Varsóvia" },
        { timeline: [
          ["7 de maio de 1920", "Tropas polonesas e ucranianas entram em Kiev."],
          ["Início de junho", "O Exército Vermelho contra-ataca: a 1ª Armada de Cavalaria de Budionni rompe as linhas polonesas."],
          ["4 de julho", "Tukhachevsky lança a ofensiva da [[Frente Ocidental|frente]], a partir do rio Berezina."],
          ["19, 22 e 28 de julho", "Caem Grodno, Brest-Litovsk (Brześć) e Białystok."],
          ["Início de agosto", "Falham as negociações de paz em Baranavichy."],
          ["12 de agosto", "Começa a batalha às portas de Varsóvia."]
        ]},
        "Os poloneses recuavam sem parar, e os diplomatas estrangeiros começaram a deixar a capital. A maioria das embaixadas foi transferida para Poznań, a oeste. O núncio papal, o arcebispo Achille Ratti, o futuro papa Pio XI, ficou em Varsóvia, e várias fontes dizem que foi o único diplomata a ficar, embora outras apontem que a delegação britânica também permaneceu."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Józef Piłsudski, marechal da Polônia" },
        "Líder dos poloneses desde a independência, em 1918, e comandante em chefe. Em 5 e 6 de agosto, concebeu um plano ousado: recuar para trás do Vístula, segurar [[cabeças de ponte|cabeça de ponte]] em Varsóvia e no rio Wieprz, e atacar de lá, pelo sul, uma força reunida em segredo, que cortaria os dois grandes exércitos soviéticos um do outro. Ele mesmo a comandaria. Era uma aposta: se falhasse, não havia segunda chance.",
        { h: "Mikhail Tukhachevsky, comandante da Frente Ocidental" },
        "Jovem e brilhante, planejou atravessar o Vístula a noroeste de Varsóvia, para cercar a capital pelo lado de trás, num movimento parecido com o do marechal russo Paskevich, que tomou Varsóvia em 1831. Tinha 24 divisões em quatro exércitos para isso. A ideia era boa, mas ele estava longe e mal informado, porque os poloneses leram suas mensagens de rádio.",
        { h: "Os outros nomes" },
        "O tenente Jan Kowalewski, criptógrafo polonês, decifrou os códigos russos desde setembro de 1919 e recebeu a Virtuti Militari em 1921. O general Władysław Sikorski comandou o 5º Exército, que defendeu o norte perto de Modlin. O general Józef Haller deteve as forças soviéticas nos arredores de Varsóvia, e Edward Rydz-Śmigły comandou o grupo de ataque do Wieprz, sob Piłsudski. Do lado soviético, Semion Budionni e a Frente Sudoeste, onde Stalin era comissário político, estavam longe, a combater perto de Lviv."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Polônia tinha três frentes, sete exércitos e 32 divisões, de 113.000 a 135.000 soldados. Os soviéticos tinham de 104.000 a 140.000. Tukhachevsky ainda tinha o flanco sul fraco: o Grupo de Mozyr tinha apenas uma divisão de cerca de 8.000 homens, porque a maior parte da Frente Sudoeste lutava perto de Lviv.",
        { h: "O terreno" },
        "A planície polonesa, plana e cortada por rios. O Vístula passa por Varsóvia de sul a norte e vira para noroeste perto de Modlin. A cidade fica na margem esquerda (oeste), e Praga, o bairro a leste, tem as pontes. Quem controlasse o rio controlaria a capital, e por isso Tukhachevsky queria atravessá-lo ao norte, e Piłsudski escolheu o Wieprz, ao sul, como base de partida.",
        { h: "A batalha em oito momentos" },
        { formation: true },
        "Primeiro, os dois planos. De um lado, a pinça de Tukhachevsky: o 16º Exército, de frente, a leste de Varsóvia, e outros exércitos a noroeste, rumo ao Vístula. Do outro, Piłsudski, com o 5º Exército ao norte, o 1º a leste e a força de ataque escondida no sul. Mais de 100.000 civis também se alistaram, segundo o Instituto da Memória Nacional.",
        "Segundo, Radzymin e Ossów. Em 12 de agosto, o 16º Exército atacou Radzymin, que mudou de mãos várias vezes e caiu nas mãos soviéticas em 14 de agosto. Nesses dias, uma divisão soviética chegou a Izabelin, a 13 km de Varsóvia, o ponto mais próximo que as tropas vermelhas alcançaram. Perto dali, em Ossów, os soviéticos tomaram a vila durante o dia e foram expulsos em contra-ataque à noite. O capelão Ignacy Skorupka morreu nessa luta: segundo a tradição, avançou à frente dos soldados, cruz na mão, e as fontes divergem sobre os detalhes de como morreu.",
        "Terceiro, a reação no norte. A cavalaria polonesa, os [[ulanos]] do 203º Regimento, fez uma incursão atrás das linhas soviéticas perto de Ciechanów que desorganizou o comando soviético (o chamado 'Milagre de Ciechanów'). E os criptógrafos poloneses conseguiram bloquear a última frequência de rádio que o 4º Exército ainda usava. Piłsudski adiantou o contra-ataque em 24 horas.",
        "Quarto, a virada em Radzymin. Em 14 e 15 de agosto, o 5º Exército cruzou o rio Wkra e atacou o flanco soviético, com combates duros em Nasielsk. Em 15 de agosto, os poloneses retomaram Radzymin e o avanço soviético parou. Depois, o 5º Exército passou a avançar cerca de 30 km por dia.",
        "Quinto, o golpe de Piłsudski. Em 16 de agosto, o grupo de ataque saiu do Wieprz para o norte, quase sem encontrar resistência. Percorreu cerca de 70 km em 36 horas, e naquela noite libertou Włodawa. O ponto fraco que Piłsudski tinha descoberto, a brecha entre a Frente Ocidental e a Frente Sudoeste, foi exatamente por onde ele passou.",
        "Sexto, a retirada soviética. Em 18 de agosto, Tukhachevsky, em Minsk, percebeu que a batalha estava perdida e mandou recuar. Mas muitas ordens chegaram tarde ou não chegaram, porque os poloneses atrapalhavam as comunicações.",
        "Sétimo, a perseguição. A 1ª Divisão de Infantaria das Legiões percorreu 262 km, de Lubartów a Białystok, em seis dias, cortando o caminho de parte do Exército Vermelho. O 15º Exército foi derrotado em 19 e 20 de agosto, e em 21 de agosto a resistência organizada soviética tinha acabado.",
        "Oitavo, o fim. O 3º Corpo de Cavalaria soviético, de Gai Bzhishkyan, ficou sem saída e cruzou a fronteira para a Prússia Oriental, onde foi [[internado|internados]]. Entre 25.000 e 30.000 soldados soviéticos chegaram à fronteira alemã, foram desarmados, e depois liberados com as armas. Já a 1ª Armada de Cavalaria de Budionni, no sul, só foi derrotada em Komarów, em 31 de agosto."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Polônia perdeu cerca de 4.500 mortos, 22.000 feridos e 10.000 desaparecidos, (outra contagem fala em 26.000 feridos). O Exército Vermelho perdeu cerca de 15.000 mortos, 10.000 feridos e 65.000 prisioneiros, mais os de 25.000 a 30.000 internados na Prússia Oriental. Os poloneses capturaram cerca de 231 canhões e 1.023 metralhadoras.",
        "Depois da batalha, os soviéticos perderam também na batalha do Niemen (15 a 21 de setembro). O cessar-fogo veio em outubro de 1920, e o Tratado de Riga, assinado em 18 de março de 1921, fixou a fronteira cerca de 200 km a leste da chamada Linha Curzon. Lênin chamou o resultado de 'uma derrota enorme'.",
        { h: "Por que importa" },
        "Acabou o sonho soviético de levar a revolução para a Europa Central, e a Polônia sobreviveu como país independente. Só em 17 de setembro de 1939, vinte anos depois, o Exército Vermelho invadiria a Polônia de novo. A batalha também é um dos grandes exemplos de inteligência militar: sem as mensagens decifradas por Kowalewski, a manobra do Wieprz teria sido um tiro no escuro.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome 'Milagre do Vístula' vem de quem viu proteção divina na vitória: 15 de agosto, dia decisivo, é a festa da Assunção de Maria e hoje é o Dia das Forças Armadas polonesas. Mas os historiadores lembram que houve planejamento, decifração de mensagens e muita coragem." },
        { note: "De quem era o plano: durante anos, a imprensa atribuiu a vitória ao general francês Weygand, chefe da missão militar da França, ou ao chefe do Estado-Maior, Rozwadowski. A missão francesa teria proposto um contra-ataque menor, com duas divisões. Weygand, mais tarde, reconheceu que o plano e a vitória foram poloneses." },
        { note: "Stalin e Budionni: historiadores recentes dizem que Stalin desobedeceu a ordens ao continuar atacando Lviv em vez de apoiar Tukhachevsky. Mas Thomas Fiddick (1973) considerou infundados os boatos de insubordinação de Budionni ou de Stalin. A questão continua em debate." },
        { note: "Os números de baixas variam de fonte para fonte, e as fontes polonesas e soviéticas também discordam. Aqui damos uma contagem, com a ressalva dos feridos." }
      ]}
    ]
  },

  boqueron: {
    war: "Guerra do Chaco (1932–1935)",
    hook: "Vinte dias de cerco num lugar onde a água valia mais que a munição.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "O Chaco Boreal era uma planície de mato seco e espinhoso, quase sem rios, que a Bolívia e o Paraguai diziam ser seu. A Bolívia tinha perdido a costa do Pacífico para o Chile em 1879, e depois do Tratado de Lima, em 1929, perdeu também a esperança de um corredor para lá. Queria então uma saída para o Atlântico pelo rio Paraguai. O Paraguai, que tinha perdido muito território na Guerra da Tríplice Aliança, dependia desse rio.",
        "Havia também o petróleo. Companhias rivais apoiavam cada lado (a Standard Oil a Bolívia, a Royal Dutch Shell o Paraguai), e muita gente acreditava que o Chaco escondia reservas. Os historiadores discordam do peso disso. Stephen Cote lembra que não havia depósitos conhecidos na região.",
        { h: "O caminho até Boquerón" },
        { timeline: [
          ["15 de junho de 1932", "Soldados bolivianos tomam o fortim paraguaio Carlos Antonio López, na lagoa Pitiantuta."],
          ["16 de julho", "Os paraguaios retomam o fortim."],
          ["27 a 31 de julho", "Em represália, a Bolívia ocupa Corrales, Toledo e Boquerón. Numa emboscada paraguaia em Boquerón, morre um tenente-coronel boliviano."],
          ["2 de agosto", "O Paraguai decreta mobilização geral."],
          ["24 de agosto", "Estigarribia é nomeado comandante do 1º Corpo de Exército paraguaio."],
          ["9 de setembro", "O Paraguai ataca Boquerón."]
        ]},
        "O comando boliviano, representado pelo general Filiberto Osorio, ordenou que Boquerón não fosse abandonado 'de maneira nenhuma'. Em 3 de setembro, um comerciante avisou o general Quintanilla de que 6.000 paraguaios se preparavam para atacar. Quintanilla não acreditou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "José Félix Estigarribia, tenente-coronel" },
        "Oficial paraguaio, que acabou promovido a coronel depois de Boquerón e chegaria a marechal. Comandava o 1º Corpo de Exército desde 24 de agosto. Depois do primeiro ataque falho, decidiu sitiar o fortim e cortar sua ligação com o resto do exército boliviano, em vez de insistir no assalto frontal.",
        { h: "Manuel Marzana, coronel" },
        "Comandava a guarnição boliviana. No dia do primeiro ataque, mandou um relatório triunfalista, que exagerou a vitória e escondeu o tamanho do inimigo. Em 28 de setembro, foi ele que propôs capitular. Às 6h do dia 29, dois grupos bolivianos saíram do fortim com bandeiras brancas, e os soldados paraguaios entenderam que era a rendição e entraram.",
        { h: "Os outros nomes" },
        "O coronel Peñaranda tentou romper o cerco por fora entre 13 e 16 de setembro, sem sucesso. O general Quintanilla e o general Osorio, do alto comando boliviano, discutiram e se culparam mutuamente. Do lado boliviano, o futuro presidente Germán Busch, então tenente, deixou um diário que registra a sede e a retirada de suas tropas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números do cerco variam muito. Uma contagem fala em 448 defensores cercados, outra em 619 homens dentro do fortim no dia 10, com mais gente entrando depois. A força boliviana de socorro tinha cerca de 3.500 homens. Do lado paraguaio, os atacantes eram cerca de 5.000 no primeiro assalto e, no fim, mais de 14.000 em volta do fortim.",
        { note: "As cifras de cada lado dependem da fonte. Usamos faixas e dizemos de onde vêm. Os números de prisioneiros e de mortos são ainda mais disputados (veja o Legado)." },
        { h: "O terreno" },
        "O mato do Chaco: baixo, fechado, cheio de espinhos, sem estradas, com calor forte e quase nenhuma água. Os postos, os [[fortins|fortim]], ficavam a quilômetros uns dos outros, com poços e [[tajamares|tajamar]] como únicas fontes de água. Nesse tipo de terreno, quem controla a água controla a batalha.",
        { h: "O cerco em quatro tempos" },
        "Primeiro, o ataque que falhou. Em 9 de setembro, os paraguaios atacaram com cerca de 5.000 homens e foram repelidos, com muitas baixas, pelas posições bolivianas, que eram dispersas mas tinham [[metralhadoras|metralhadora]]. O comando paraguaio, em vez de repetir, decidiu cercar o fortim. Os paraguaios também sofriam de sede nos primeiros dias, e tiveram de recuar para beber. Há relatos de soldados que assaltaram os caminhões de água, e a solução foi levar a água para perto da frente.",
        "Segundo, o cerco fechado. Em 10 de setembro, os paraguaios cortaram a linha de telefone e tomaram posições em volta. A coluna boliviana de Lairana caiu numa emboscada e perdeu uma companhia inteira. Mas outras companhias bolivianas conseguiram entrar no fortim com comida, munição e duas metralhadoras. Em 12 de setembro, uma coluna de socorro de cerca de 3.500 bolivianos foi repelida perto do posto de Yucra. Entre 13 e 16 de setembro, o coronel Peñaranda tentou romper o cerco sem sucesso, e no dia 16 o comandante informou que não havia mais munição nem comida.",
        "Terceiro, o fim das reservas. Os aviões bolivianos jogaram suprimentos, com pouco resultado: o que se recuperou foi só 916 cartuchos, um saco de pão e cerca de 50 kg de carne seca. Os poços bolivianos foram contaminados pelos corpos dos mortos, e os cadáveres perto do fortim chegaram a contaminar o tajamar. Entre 17 e 19 de setembro, chegou ao lado paraguaio o regimento 'Boquerón', de cerca de 1.600 homens, e cadetes. Entre 20 e 23 de setembro, o comandante do fortim avisou que a tropa estava desmoralizada, e uma saída noturna fracassou. O comando em Muñoz, em 27 de setembro, teve uma reunião tensa, em que um tenente-coronel chegou a apontar uma pistola para Quintanilla.",
        "Quarto, o último assalto. A água do lado paraguaio, que vinha da lagoa de Isla Poí, a cerca de 50 km, começou a faltar por excesso de uso. Estigarribia ordenou então um ataque decisivo em 26 de setembro, numa frente de cerca de 200 metros, que avançou apenas alguns metros. Em 28, Marzana propôs a capitulação. Às 6h de 29 de setembro, os bolivianos saíram com bandeiras brancas. Segundo uma das contagens, cerca de 240 defensores, na maioria feridos, se renderam."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O Paraguai retomou o fortim, e a Bolívia recuou para Arce. As perdas são muito discutidas. Segundo González e Querejazu, os bolivianos tiveram 1.000 mortos e 466 prisioneiros (20 oficiais e 446 soldados). Segundo Mazacotte, 844 prisioneiros. Para os paraguaios, González e Querejazu falam em cerca de 2.000 mortos em setembro, enquanto outras fontes dão 1.410 ou 1.513 baixas, e o registro sanitário paraguaio, 1.890. Em 1º de outubro, o governo boliviano, que tinha ficado sem notícias, soube da queda de Boquerón por um voo de reconhecimento.",
        { h: "Por que importa" },
        "Foi a primeira grande batalha da Guerra do Chaco, e os paraguaios a consideram a vitória que recuperou a confiança no exército. A guerra seguiu até um cessar-fogo em 12 de junho de 1935. Em julho de 1938, a conferência de paz de Buenos Aires deu ao Paraguai três quartos do Chaco, cerca de 52.000 km2, e à Bolívia direitos de navegação nos rios Paraguai e Paraná. A guerra matou, segundo as estimativas mais citadas, de 35.000 a 50.000 paraguaios e de 50.000 a 80.000 bolivianos, e é considerada a guerra mais sangrenta da América do Sul no século XX. Na Bolívia, a derrota deu origem à 'Geração do Chaco', que contribuiu para a Revolução de 1952.",
        { h: "Curiosidades e controvérsias" },
        { note: "A Bolívia apresentou a resistência de Marzana como um sucesso, para esconder uma derrota estratégica. Vários historiadores acham que retirar o destacamento antes, como se cogitou no dia 19, teria salvado muitos soldados." },
        { note: "As tanquetas Carden-Loyd e os tanques Vickers que a Bolívia tinha comprado serviram muito pouco no mato do Chaco." },
        { note: "As datas: algumas fontes põem o começo em 7 de setembro, mas a data mais repetida, e a da maioria dos historiadores, é 9 de setembro. Algumas fontes marcam o início da Guerra do Chaco no mesmo dia do ataque a Boquerón. Outras contam a guerra desde o choque de Pitiantuta, em junho." },
        { note: "A sede: os soldados levavam erva-mate nos bornais e a usavam para filtrar água. O historiador Fabián Chamorro conta, segundo relatos, que nos momentos extremos alguns bebiam a própria urina filtrada na erva. No Paraguai, 29 de setembro é feriado desde 1933 (Lei 1.370)." }
      ]}
    ]
  },

  xangai1937: {
    war: "Segunda Guerra Sino-Japonesa (1937–1945)",
    hook: "Chiang Kai-shek escolheu lutar na cidade mais internacional da China, com o mundo olhando. O mundo olhou e não veio ajudar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1937, o Japão já mandava na Manchúria, que havia transformado em [[manchukuo]], e queria mais da China. Xangai era a maior cidade do país e seu porto mais rico, e parte dela estava nas mãos de estrangeiros: a [[concessão internacional]] e a Concessão Francesa, administradas por potências europeias e americanas. A cidade já tinha sido palco de combates em 1932, e a tensão nunca tinha saído dali.",
        "Em 9 de agosto de 1937, um oficial naval japonês e seu motorista foram mortos perto do aeroporto de Hongqiao. Os relatos do incidente de Ōyama divergem, e o historiador Peter Harmsen sustenta que ele foi encenado pelos próprios japoneses, para esconder um assassinato cometido por chineses. As negociações, em Xangai e Nanquim, falharam em seguida, e o Japão acusou a China de reunir tropas demais em volta da cidade.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["1932", "Primeiro combate entre chineses e japoneses em Xangai."],
          ["9 de agosto de 1937", "O incidente de Ōyama, perto do aeroporto de Hongqiao."],
          ["13 de agosto", "Começam os combates em Xangai."],
          ["14 de agosto", "Bombas chinesas, destinadas ao cruzador japonês Izumo, caem na Concessão Internacional e matam muitos civis."],
          ["23 de agosto", "O Japão desembarca reforços na costa."],
          ["26 de novembro", "Termina a batalha, com a retirada chinesa."]
        ]},
        "Chiang Kai-shek decidiu lutar em Xangai por razões políticas e militares. O campo de batalha ficava longe do norte, onde o Japão já avançava, e o combate perto das concessões estrangeiras podia chamar a atenção das potências. Havia mesmo uma conferência das nove potências em Bruxelas, e Chiang esperava manter uma presença chinesa em Xangai para estimular uma intervenção ocidental."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Chiang Kai-shek, líder do Kuomintang" },
        "Governava a China pelo [[kuomintang]] e tinha seu melhor exército em Xangai: divisões treinadas por assessores alemães, que tinham estudado Verdun e o Somme para montar as defesas. Chiang queria empurrar os japoneses para dentro do rio Huangpu e, depois, lutar ao sul do riacho Suzhou, causando o máximo de baixas. Generais como Li Zongren, Bai Chongxi e Zhang Fakui, preocupados em proteger Nanquim, pediam para recuar mais cedo, mas Chiang insistiu em segurar a linha.",
        { h: "Iwane Matsui, comandante japonês" },
        "Comandava o Exército Expedicionário de Xangai, que reuniu quatro divisões, cerca de 60.000 homens, numa frente de 10 km. As divisões mais usadas foram a 3ª, a 9ª, a 11ª, a 13ª e a 101ª, e depois o 10º Exército, trazido do norte. O Japão tinha o apoio da marinha, que atirava do rio, e o domínio do ar.",
        { h: "Xie Jinyuan, coronel" },
        "Comandou o 1º Batalhão do 524º Regimento, que segurou um armazém, o Sihang, entre 26 de outubro e 1º de novembro, quando o resto do exército chinês já se retirava. Tornou-se símbolo de resistência."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os chineses chegaram a ter mais de 700.000 homens na frente de Xangai no início de outubro, mas armados quase só com armas leves, com poucas armas pesadas e uma força aérea pequena e dependente de aviões importados. Os japoneses, entre cerca de 200.000 e 300.000 homens conforme a fonte, tinham artilharia naval, tanques e domínio do ar. O Japão usou gás venenoso pelo menos 13 vezes.",
        { h: "O terreno" },
        "Uma cidade enorme, com bairros densos, fábricas, armazéns e canais, cortada pelo rio Huangpu, que serve de porto, e pelo riacho Suzhou. No meio ficavam as concessões estrangeiras. Do lado do mar, a costa e a baía de Hangzhou davam aos japoneses lugares para desembarcar tropas.",
        { h: "A batalha em quatro fases" },
        "Primeiro, o ataque chinês (13 a 22 de agosto). Chiang tentou empurrar os japoneses para dentro do Huangpu. Em 14 de agosto, a aviação chinesa atacou o [[cruzador]] Izumo, mas as bombas caíram na Concessão Internacional e mataram civis: as estimativas vão de 700 a 950 mortos até cerca de 2.000. A ofensiva 'Punho de Ferro', de 17 de agosto, e o ataque contra as docas de Hueishan sofreram perdas pesadas, porque os tanques foram usados sem infantaria suficiente, e foram cancelados em 18 de agosto.",
        "Segundo, a trincheira (23 de agosto a 26 de outubro). Os japoneses desembarcaram reforços na costa a partir de 23 de agosto, o que obrigou os chineses a deslocar tropas da cidade. A defesa de Baoshan terminou com a queda da cidade em 6 de setembro, depois de os defensores serem quase aniquilados. Em Luodian, a luta foi tão cara que ganhou o apelido de 'moedor de carne e sangue', e a vila caiu no final de setembro. Seguiram-se meses de ataques e contra-ataques em Liujiahang, Gujiazhai e no riacho Wusong, e a 9ª Divisão japonesa, segundo relatos, teve 94% de baixas.",
        "Terceiro, o armazém (26 de outubro a 1º de novembro). O batalhão do coronel Xie segurou o armazém Sihang, às margens do riacho Suzhou, à vista das concessões. Foram 411 homens, embora a propaganda tenha divulgado 'oitocentos heróis'. Pouco mais de 30 morreram, e os demais foram internados na concessão. Xie disse ter matado mais de 100 japoneses, e o historiador Stephen Robinson estima cerca de 200.",
        "Quarto, o desembarque ao sul (5 de novembro em diante). O 10º Exército japonês, trazido de Taiyuan, desembarcou em Jinshanwei, na baía de Hangzhou, defendida por apenas duas companhias da 63ª Divisão, a cerca de 40 km das posições do riacho Suzhou, que ameaçavam ficar cercadas. Em 8 de novembro, veio a ordem de retirada geral. A linha Wufu foi rompida em 19 de novembro, e a Xicheng abandonada em 26 de novembro. A retirada foi desorganizada, e algumas defesas ficaram inúteis porque as autoridades já tinham fugido."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O Japão tomou Xangai, menos as concessões estrangeiras. A China perdeu muitas de suas melhores divisões, treinadas por alemães, e nenhuma potência interveio. Os números de [[baixas]] são muito discutidos. Um relatório chinês de 5 de novembro dava 187.200 mortos e feridos. As estimativas modernas das baixas chinesas vão de cerca de 240.000 a cerca de 300.000, e uma delas chega a 333.500. As baixas japonesas oficiais foram 9.115 mortos e 31.257 feridos, e as estimativas independentes vão de cerca de 60.000 a 99.000.",
        "Chiang perdeu cerca de 10.000 de seus 25.000 jovens oficiais formados em Whampoa, e as unidades de elite chegaram a cerca de 60% de baixas. A 88ª Divisão ficou com cerca de 7.000 homens antes de defender Nanquim. A perda dos melhores corpos do Exército Central também enfraqueceu o controle de Chiang sobre os exércitos dos senhores da guerra regionais.",
        { h: "Por que importa" },
        "A queda de Xangai abriu o caminho para Nanquim, que os japoneses alcançaram no começo de dezembro, e que depois sofreria um dos piores massacres da guerra. Mas a batalha mostrou também o que o Japão não esperava: que a China lutaria. O ministro da Guerra japonês teria dito ao imperador que tudo estaria acabado em cerca de três meses. A guerra durou oito anos. Para o historiador Peter Harmsen, foi a maior batalha urbana antes de Stalingrado e um prenúncio da guerra moderna nas cidades.",
        { h: "Curiosidades e controvérsias" },
        { note: "As baixas: as fontes divergem muito, e os números vêm de relatórios de guerra, de memórias e de estimativas posteriores. Usamos faixas e dizemos quem afirma o quê." },
        { note: "O bombardeio de 14 de agosto: as bombas chinesas, destinadas ao Izumo, caíram na concessão, perto da Rua Nanquim. As estimativas de mortos vão de 700–950 a cerca de 2.000." },
        { note: "Civis: há registros de que aviões e tropas japonesas metralharam multidões de refugiados perto da ponte de Jessfield e atacaram ambulâncias. Os chineses usaram a tática de terra arrasada, e destruíram propriedades." }
      ]}
    ]
  },

  khalkhingol: {
    war: "Conflitos de fronteira entre a União Soviética e o Japão (1939)",
    hook: "A batalha esquecida em que um general desconhecido destruiu uma divisão japonesa e, sem querer, mudou o rumo da Segunda Guerra.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1931, o Japão ocupou a Manchúria e, no ano seguinte, criou ali o [[manchukuo]]. Em 1936, a União Soviética e a Mongólia assinaram um pacto de ajuda mútua, e o Japão respondeu assinando o Pacto Anti-Comintern. O [[exército de kwantung]], que ocupava a Manchúria, agia com muita independência de Tóquio, e a fronteira entre Manchukuo e Mongólia, no leste da estepe, era mal definida. Os dois lados discordavam sobre onde ela passava: os japoneses diziam que era o rio Khalkhin, e os soviéticos e mongóis diziam que ficava uns quilômetros a leste, perto da vila de Nomonhan.",
        { h: "O caminho até agosto" },
        { timeline: [
          ["11 de maio de 1939", "Começam as escaramuças na fronteira."],
          ["Fim de maio", "Uma força japonesa do tenente-coronel Azuma é cercada e destruída, com cerca de 63% de baixas."],
          ["5 de junho", "Zhukov chega com forças blindadas e motorizadas."],
          ["27 de junho", "Ataque aéreo japonês à base de Tamsak-Bulak, que Tóquio não tinha autorizado."],
          ["Julho", "Falha o ataque japonês em duas pontas; o destacamento Yasuoka perde mais da metade dos blindados e é dissolvido depois de um contra-ataque, em 9 de julho."],
          ["23 a 25 de julho", "Novo ataque japonês, à ponte de Kawatama, também falha."],
          ["20 de agosto", "Zhukov lança a ofensiva decisiva."]
        ]},
        "A frente ficava a centenas de quilômetros da ferrovia soviética mais próxima. Os planejadores japoneses acreditavam que isso tornava impossível uma grande operação do outro lado. E Tóquio tentou segurar o Kwantung: depois do ataque aéreo de 27 de junho, que não tinha autorizado, proibiu novos ataques a bases soviéticas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gueorgui Zhukov, comandante soviético" },
        "Chegou à Mongólia em 5 de junho, ainda desconhecido do grande público, e preparou a ofensiva de agosto com cuidado. Era metódico: juntou blindados, artilharia, aviação e milhares de caminhões, e escondeu tudo do inimigo. Foi sua primeira vitória de peso e rendeu-lhe o primeiro título de Herói da União Soviética. Seus métodos depois foram usados em Stalingrado.",
        { h: "Michitarō Komatsubara, comandante japonês" },
        "Comandou a 23ª Divisão, que era o essencial da força japonesa em Nomonhan. Ela estava gasta pelos combates de maio a julho. Em agosto, era pouco mais de uma divisão contra um adversário muito mais forte em blindados e artilharia. Foi afastado em novembro de 1939, aposentou-se e morreu cerca de dez meses depois.",
        { h: "Os outros nomes" },
        "Do lado soviético, o coronel Potapov comandou o grupo do sul e o coronel Alekseenko o do norte. Pelo lado mongol, o líder era Khorloogiin Choibalsan. Dois comandantes que participaram dessa vitória, Grigori Shtern e Yakov Smushkevich, foram executados nos expurgos de 1941. Do lado japonês, o tenente-coronel Ioki, que segurou Fui, recebeu depois a ordem de se matar e obedeceu."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes divergem. Uma contagem dá aos soviéticos e mongóis entre 61.860 e 73.961 soldados, 500 tanques e 809 aviões no conjunto da campanha, e aos japoneses e manchukuo entre 30.000 e 38.000 homens, 135 tanques e 250 aviões. Para a ofensiva de agosto, fala-se em mais de 50.000 soldados soviéticos e, para meados de agosto, em cerca de quatro divisões de infantaria, duas de cavalaria, 216 canhões, 498 blindados e 581 aviões. Os japoneses tinham pouco mais que uma divisão.",
        { h: "A logística" },
        "A tarefa de Zhukov foi trazer munição, combustível e comida por entre 650 e 750 km de estepe sem estrada, a partir da ferrovia mais próxima (uma fonte dá 748 km, outra cerca de 400 milhas, perto de 650 km). Para isso o distrito militar do Transbaikal reuniu mais de 4.200 caminhões, que moveram cerca de 55.000 toneladas de material. Os japoneses calculavam que operações grandes eram impossíveis a mais de 200 a 280 km da ferrovia, e tinham apenas cerca de 800 caminhões em todo o Manchukuo.",
        { h: "O engano" },
        "O estado-maior de Zhukov fez tráfego de rádio e telefone falso sobre a construção de defesas, distribuiu panfletos e pôs alto-falantes tocando de noite sons de motores de tanque e de avião. No começo, os japoneses atiravam nos alto-falantes. Depois, ignoraram o barulho, e os movimentos de verdade passaram quase sem ser notados.",
        { h: "A batalha em oito momentos" },
        { formation: true },
        "Primeiro, o plano. Zhukov dividiu a força em três grupos. O central, sob seu comando direto, atacaria de frente para prender o grosso da 23ª Divisão. Os grupos do norte e do sul, com a maior parte dos blindados, contornariam os flancos para fechar um [[duplo envolvimento]].",
        "Segundo, 20 de agosto, a abertura. Às 5h45, cerca de 200 bombardeiros atacaram, seguidos de cerca de duas horas e três quartos de artilharia e de 15 minutos de fogo final. Os blindados e a infantaria avançaram às 9h, na névoa perto do rio, que os deixou chegar ao alcance de tiro de fuzil. A artilharia japonesa só respondeu por volta das 10h15, quando algumas posições da frente já tinham sido invadidas.",
        "Terceiro, os flancos. No primeiro dia, o grupo do sul de Potapov derrotou a cavalaria de Manchukuo que guardava o flanco sul japonês e avançou cerca de 13 km. O grupo central avançou só cerca de 800 metros, mas prendeu a infantaria japonesa. O grupo do norte de Alekseenko derrotou a cavalaria de Manchukuo do outro lado, mas as colinas de Fui resistiram como ponto forte japonês.",
        "Quarto, o bloqueio. Em 21 e 22 de agosto, o grupo de Potapov se fixou cerca de 18 km a leste do rio, cortando a rota de fuga japonesa pelo sul. O centro japonês cedia terreno devagar.",
        "Quinto, o contra-ataque que falhou. Em 23 e 24 de agosto, Komatsubara contra-atacou com o 72º Regimento e com o 28º Regimento da 7ª Divisão. O 72º encontrou um ataque de tanques e foi destroçado. O 28º foi imobilizado pela artilharia, sem poder avançar nem recuar. Os dois regimentos ficaram muito feridos.",
        "Sexto, Fui. Zhukov dispensou Alekseenko e seu adjunto, por não terem tomado as colinas depressa, e reforçou o ataque com a 212ª Brigada Aeroterrestre, mais artilharia e tanques lança-chamas. O tenente-coronel Ioki e cerca de 200 sobreviventes recuaram sem ordens.",
        "Sétimo, o cerco. O grupo do norte desceu na direção sudeste. Sua 11ª Brigada de Tanques se encontrou com a 8ª Brigada de Tanques do grupo do sul perto de Nomonhan, fechando o anel, por volta de 25 e 26 de agosto.",
        "Oitavo, o fim. A 7ª Divisão japonesa chegou ao anel em 27 de agosto, mas não conseguiu romper os blindados soviéticos em um dia de combate, e recuou. Dentro do cerco, os japoneses sofriam com um calor de cerca de 38 graus e com os cantis vazios, e alguns beberam água dos radiadores dos veículos. Os soviéticos fecharam o círculo entre 27 e 28 de agosto, e a 23ª Divisão foi destruída, com poucos prisioneiros. Em 30 de agosto, Komatsubara e cerca de 400 sobreviventes escaparam, numa pausa dos soviéticos. Em 31 de agosto, não havia mais japoneses do lado mongol da fronteira."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O cessar-fogo entrou em vigor em 16 de setembro, e no dia seguinte o Exército Vermelho invadiu a Polônia. Stalin parecia querer a frente leste calma antes de agir no oeste. As baixas variam muito segundo a fonte. Dados médicos do 6º Exército japonês indicam cerca de 19.714 perdas japonesas e 162 aviões. Registros soviéticos recentes dão cerca de 24.903 baixas em combate, 250 aviões e 253 tanques destruídos ou avariados, e a Mongólia, entre 556 e 990. Outra contagem dá aos japoneses 8.440 mortos e 8.766 feridos, e aos soviéticos 9.703 mortos e 15.251 feridos.",
        { h: "Por que importa" },
        "Em 23 de agosto, no meio da batalha, a União Soviética assinou o pacto de não agressão com a Alemanha, e a notícia chegou a Tóquio quando o fim do combate se aproximava. Isso acabou com a esperança japonesa de uma aliança com os alemães contra os soviéticos. O Japão passou a olhar para o sul, e em abril de 1941 assinou com a União Soviética um pacto de neutralidade. Líderes do exército japonês relutaram em juntar-se à guerra alemã contra os soviéticos em 1941, e o Japão escolheu o rumo do sul, que levou a Pearl Harbor. Stalin pôde, então, deslocar divisões do Extremo Oriente para defender Moscou.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os soviéticos venceram, mas, segundo os registros que se usam hoje, tiveram mais baixas que os japoneses. A vitória veio de blindados, artilharia, aviação e logística, e não de superioridade de homens: o Japão tinha pouco mais de uma divisão e os soviéticos, pelo menos quatro de infantaria e duas de cavalaria." },
        { note: "O nome: os soviéticos e mongóis falam em Khalkhin Gol, o rio. Os japoneses falam no Incidente de Nomonhan, a vila. O mesmo evento, dois nomes e duas memórias." },
        { note: "Debate: nem todos os historiadores concordam que o Japão mudou de rumo por causa de Nomonhan. O pacto germano-soviético e o desenrolar da guerra na Europa também pesaram. Há também historiadores japoneses que sustentam que Nomonhan não foi uma derrota de mão única para o Japão." },
      ]}
    ]
  },

  suomussalmi: {
    war: "Guerra de Inverno (1939–1940)",
    hook: "Duas divisões soviéticas entraram na floresta finlandesa para cortar o país ao meio. Em pouco mais de cinco semanas, deixaram de existir.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 30 de novembro de 1939, a União Soviética invadiu a Finlândia. Além do ataque principal no sul, no istmo da Carélia, os soviéticos mandaram tropas pela fronteira oriental, no meio das florestas e lagos do norte. Em Suomussalmi, o objetivo era chegar a Oulu, na costa do golfo de Bótnia, e cortar a Finlândia ao meio. Isso interromperia a ferrovia com a Suécia, a ligação do país com o mundo.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["30 de novembro de 1939", "A 163ª Divisão soviética cruza a fronteira, partindo de Ukhta, na direção de Suomussalmi."],
          ["7 e 8 de dezembro", "Os soviéticos chegam à vila, que os finlandeses tinham queimado."],
          ["9 e 11 de dezembro", "Chega o regimento de Siilasvuo e, em 11 de dezembro, corta a estrada de Raate, a leste."],
          ["Meados de dezembro", "A 44ª Divisão soviética chega pela estrada de Raate para socorrer a 163ª."],
          ["25 a 29 de dezembro", "Ofensiva finlandesa decisiva; a 163ª Divisão desmorona."],
          ["1º a 7 de janeiro de 1940", "A 44ª Divisão é cortada em pedaços e destruída na estrada de Raate."]
        ]},
        "Os finlandeses tinham muito menos gente na região. No começo, eram dois batalhões separados, o 15º (mais de 1.600 homens) e o 16º (mais de 1.700), mais companhias soltas e um destacamento da guarda de fronteira. A missão inicial do 15º era guardar a fronteira da estrada de Raate."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hjalmar Siilasvuo, coronel finlandês" },
        "Em 7 de dezembro, o comando geral pôs o 27º Regimento de Infantaria sob o Grupo Norte, e Siilasvuo foi encarregado de comandar as forças na região: era o Grupo Siilasvuo. Em 25 de dezembro, suas forças foram reorganizadas como a 9ª Divisão. Sua tática foi atacar pelos flancos e cortar as colunas inimigas em pedaços.",
        { h: "Paavo Susitaival, tenente-coronel" },
        "Comandava o Grupo Susi, que a partir de 25 de dezembro atacou desde Piispajärvi e derrotou o 662º Regimento soviético. O general Wiljo Tuompo comandava de Kajaani o Grupo Susi e o de Siilasvuo, mas Siilasvuo e Susitaival, segundo o site oficial finlandês da guerra, não tinham contato entre si durante a luta.",
        { h: "Do outro lado" },
        "O brigadeiro Andrei Zelentsov comandava a 163ª Divisão, e Alexei Vinogradov, a 44ª. Entre os comandantes soviéticos do exército que os dirigia estava Vasily Chuikov, o futuro herói de Stalingrado. Do lado soviético, as comunicações falhavam e passavam por linhas telefônicas sem proteção."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes divergem. Uma contagem dá à Finlândia cerca de 11.000 homens e à União Soviética de 45.000 a 55.000, com duas divisões e uma brigada de tanques. Outra dá cerca de 17.000 finlandeses (Grupo Norte, com os grupos Susi e Siilasvuo e a 9ª Divisão) e cerca de 48.000 soviéticos (o 9º Exército, com a 163ª e a 44ª Divisões e parte do 47º Corpo).",
        { h: "O terreno" },
        "Floresta, lagos congelados e neve profunda, com muito poucas estradas. Quem tinha de ficar na estrada, como os soviéticos, fazia uma coluna fina e comprida, que não podia se espalhar nem manobrar, e que não podia sair para os lados. Os finlandeses, no esqui, podiam. A maior parte da 163ª Divisão não usou a estrada: seguiu pela rota norte, vinda de Juntusranta, por terreno sem estrada, onde construiu um caminho de inverno.",
        { h: "A batalha em oito momentos" },
        { formation: true },
        "Primeiro, a invasão. A 163ª Divisão atacou Suomussalmi pelos dois lados, pela estrada de Raate (o 759º Regimento) e por Juntusranta. Durante a primeira semana de guerra, tomou a vila, que os finlandeses tinham queimado, e as colunas chegaram a ela por volta de 8 de dezembro.",
        "Segundo, o freio. Em 9 de dezembro, chegou o regimento de Siilasvuo (JR 27). Em 11 de dezembro, ele tentou cercar a vila e retomá-la. Não conseguiu, mas bloqueou a estrada de Raate, a leste, a rota pela qual a 163ª receberia ajuda e suprimentos. O 16º Batalhão separado, trazido de Kuusamo, segurou o avanço do 662º Regimento soviético em Piispajärvi.",
        "Terceiro, a 44ª Divisão. Em meados de dezembro, ela se aproximou pela estrada de Raate. A 21 de dezembro, o destacamento do capitão Simo Mäkinen, com pouco menos de um batalhão, deteve a vanguarda soviética no istmo entre os lagos Kuomajärvi e Kuivasjärvi. A divisão ficou esticada ao longo de cerca de 30 km (20 milhas) de estrada, da fazenda de Haukila até a fronteira.",
        "Quarto, o Grupo Susi. Em 25 de dezembro, atacou desde Piispajärvi e derrotou o 662º Regimento. Em 27 de dezembro, tomou Palovaara, isolando o que restava do regimento.",
        "Quinto, o colapso da 163ª. Em 27 de dezembro, o Grupo Kari atacou Hulkonniemi pelo oeste, e a resistência soviética desmoronou. Em 28 de dezembro, segundo uma das fontes, a divisão deixou de existir como força organizada. Segundo o site oficial finlandês da guerra, ela deixou a vila em 29 de dezembro, atravessando o gelo do lago Kiantajärvi na direção de Juntusranta. Um relato diz que a debandada virou matança.",
        "Sexto, a estrada de Raate. Em 1º de janeiro de 1940, Siilasvuo pôs quatro grupos de ataque nos flancos. Naquela noite, os finlandeses dominaram um batalhão de artilharia soviético perto da fazenda de Haukila. Cortaram a estrada em pedaços, os [[motti]], e atacaram as [[cozinhas de campanha|cozinha de campanha]] e as fogueiras, na noite gelada. Tomaram a fazenda de Sanginlampi (2 a 3 de janeiro) e Eskola (4 de janeiro).",
        "Sétimo, a tentativa de romper. Em 6 de janeiro, os [[tanques|tanque]] soviéticos atacaram os bloqueios finlandeses e perderam muitos. Às 21h30, Vinogradov ordenou recuar para a fronteira. Em 7 de janeiro, os finlandeses retomaram uma ponte estratégica, e a resistência soviética acabou antes do meio-dia. A limpeza seguiu por mais dois dias.",
        "Oitavo, o fim. Em 8 de janeiro, a batalha estava terminada. Os finlandeses ficaram com uma montanha de material."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Finlândia teve cerca de 2.700 baixas na batalha toda. As soviéticas variam muito: de cerca de 12.972 (Kiselev, 2014: 2.303 mortos, 4.001 feridos, 3.868 desaparecidos e 2.800 congelados) a 29.100, com estimativas intermediárias de 22.500 e 27.000. Na estrada de Raate, só a última fase, os finlandeses tiveram 310 mortos, 618 feridos e 92 desaparecidos. Os dados soviéticos (comissão do Stavka) dão 4.674 baixas, e as estimativas finlandesas, de 7.000 a 9.000 soviéticos mortos e cerca de 1.300 prisioneiros.",
        "O material capturado foi enorme: 43 tanques, 70 canhões de campo, 29 canhões antitanque, 278 caminhões, 1.170 cavalos, cerca de 300 metralhadoras e 6.000 fuzis.",
        { h: "Por que importa" },
        "A vitória impediu os soviéticos de chegar a Oulu, evitou que a Finlândia fosse cortada ao meio e poupou a ferrovia com a Suécia. Deu também um impulso decisivo ao moral do exército finlandês. Hoje é lembrada como o exemplo de um exército pequeno vencendo um grande com o terreno, o clima e a mobilidade.",
        { h: "Curiosidades e controvérsias" },
        { note: "O destino de Vinogradov: depois da derrota, ele e dois oficiais foram julgados por tribunal militar, condenados à morte e executados, por terem recuado em momentos decisivos. Um veterano conta que prisioneiros devolvidos pela Finlândia foram executados pela NKVD no verão de 1940." },
        { note: "Os motti: a palavra finlandesa quer dizer pilha de lenha. Era o nome que os finlandeses davam a cada pedaço isolado de coluna. Cortada em motti, a estrada soviética deixava de ser uma força e virava uma fila de grupos que só podiam esperar." },
        { note: "As datas: os soviéticos cruzaram a fronteira em 30 de novembro e tomaram a vila em 7 ou 8 de dezembro. A batalha, para a maioria das fontes, vai de 30 de novembro a 8 de janeiro. Algumas fontes datam o colapso da 163ª em 28 de dezembro, e o site oficial finlandês fala em 29 de dezembro." },
        { note: "O memorial: o arquiteto Alvar Aalto desenhou um monumento aos soldados finlandeses mortos. No campo de batalha há também o Monumento da Guerra de Inverno, com pedras em memória dos soviéticos mortos." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  jutlandia: {
    terrain: [
      { t: "note", x: 86, y: 6, l: "Norte ↑ (sem escala)" },
      { t: "note", x: 88, y: 66, l: "Costa da Dinamarca →" }
    ],
    units: [
      { id: "bGF", s: "a", k: "ship", w: 24, h: 4, l: "Jellicoe (24 encouraçados)" },
      { id: "bHood", s: "a", k: "ship", w: 8, h: 3, l: "Hood" },
      { id: "bInv", s: "a", k: "ship", w: 5, h: 3, l: "Invincible" },
      { id: "bBC", s: "a", k: "ship", w: 14, h: 3, l: "Beatty (4 cruz. de batalha)" },
      { id: "bIQ", s: "a", k: "ship", w: 7, h: 3, l: "Indefatigable e Queen Mary" },
      { id: "b5BS", s: "a", k: "ship", w: 10, h: 3, l: "Evan-Thomas (4 encouraçados)" },
      { id: "bBP", s: "a", k: "ship", w: 5, h: 3, l: "Black Prince" },
      { id: "gH", s: "b", k: "ship", w: 14, h: 3, l: "Hipper (5 cruz. de batalha)" },
      { id: "gS", s: "b", k: "ship", w: 22, h: 4, l: "Scheer (16 encouraçados)" },
      { id: "gPom", s: "b", k: "ship", w: 6, h: 3, l: "Pommern" }
    ],
    steps: [
      { t: "Em 31 de maio, Beatty segue para o sudeste com seus cruzadores de batalha, e o 5º Esquadrão fica para trás, porque o sinal de mudança de rumo não chegou a Evan-Thomas. Hipper vem à frente de Scheer. Jellicoe está longe, ao norte.",
        p: { bGF: [14, 10], bHood: [28, 14], bInv: [34, 15], bBC: [42, 30], bIQ: [52, 34], b5BS: [30, 38], bBP: [20, 20], gH: [66, 42], gS: [78, 62], gPom: [88, 60] } },
      { t: "Corrida para o sul (15h48 a 16h54): Hipper atrai Beatty. Às 16h02 o Indefatigable explode, e às 16h26 o Queen Mary também. Beatty diz que há algo errado com 'nossos malditos navios'.",
        p: { bBC: [48, 36], b5BS: [38, 42], gH: [68, 46] }, x: ["bIQ"] },
      { t: "Às 16h30 o Southampton avista os encouraçados de Scheer. Às 16h40 Beatty vira para o norte e passa a atrair os alemães na direção de Jellicoe.",
        p: { bBC: [40, 28, -25], b5BS: [34, 33, -25], gH: [60, 36, -25], gS: [68, 54, -25], gPom: [78, 52, -25] } },
      { t: "Às 18h15 Jellicoe, sem saber exatamente onde está o inimigo, desdobra a frota em linha de batalha rumo ao leste. O Defence, de Arbuthnot, é destruído às 18h19, com todos os 903 homens.",
        p: { bGF: [34, 20, 8], bHood: [60, 14], bInv: [66, 16], bBC: [58, 22], b5BS: [74, 26], gH: [60, 38], gS: [54, 48], gPom: [64, 50], bBP: [46, 28] } },
      { t: "Cerca de 18h30: Jellicoe cruza o T de Scheer. O Invincible, atingido pelo Lützow e pelo Derfflinger, afunda em cerca de 90 segundos, com Hood. Só 10 dos 24 dreadnoughts britânicos conseguem disparar, por causa da má visibilidade.",
        p: { bGF: [36, 24, 8], gH: [56, 36], gS: [50, 44] }, x: ["bInv"] },
      { t: "Às 18h33, Scheer faz uma meia-volta de 180 graus. Às 18h55 volta para o leste, e às 19h15 Jellicoe cruza o T de novo. Às 19h17, nova meia-volta; os cruzadores de batalha alemães cobrem a fuga. Os 31 torpedos lançados contra a frota britânica são evitados.",
        p: { gH: [46, 36, -60], gS: [38, 50, 170], gPom: [44, 54, 170] } },
      { t: "Noite: Jellicoe prefere esperar o amanhecer. Scheer cruza a esteira da frota britânica e corre para Horns Reef. Destróieres britânicos atacam entre 23h20 e 2h15. O Black Prince entra por engano na linha alemã e afunda com todos os 857 homens. O Pommern afunda às 3h10, com 839.",
        p: { bGF: [34, 40, 90], gS: [64, 56, 20], gH: [58, 52, 20], gPom: [66, 58, 20] }, x: ["bBP", "gPom"] },
      { t: "Ao amanhecer de 1º de junho o mar está vazio. Os britânicos perderam 14 navios e 6.094 homens, os alemães 11 navios e 2.551. A Grande Frota continua mandando no mar, e a frota alemã quase não sai mais.",
        p: { bGF: [30, 46], gS: [88, 64, 0], gH: [82, 60, 0], bBC: [44, 30], b5BS: [40, 38] } }
    ]
  },

  varsovia: {
    terrain: [
      { t: "note", x: 86, y: 6, l: "Norte ↑ (sem escala)" },
      { t: "sea", x: 41, y: 0, w: 2, h: 70, l: "" },
      { t: "note", x: 41, y: 68, l: "Vístula" },
      { t: "note", x: 16, y: 68, l: "Budionni e a Frente Sudoeste, longe, perto de Lviv" }
    ],
    units: [
      { id: "city", s: "a", k: "camp", w: 10, h: 8, l: "Varsóvia" },
      { id: "p5", s: "a", k: "inf", w: 16, h: 4, l: "5º Exército (Sikorski)" },
      { id: "p1", s: "a", k: "inf", w: 8, h: 14, l: "1º Exército" },
      { id: "pWie", s: "a", k: "inf", w: 14, h: 5, l: "Grupo do Wieprz (Rydz-Śmigły, sob Piłsudski)" },
      { id: "s16", s: "b", k: "inf", w: 8, h: 14, l: "16º Exército" },
      { id: "s15", s: "b", k: "inf", w: 14, h: 4, l: "15º Exército" },
      { id: "sN", s: "b", k: "cav", w: 14, h: 4, l: "4º Exército e Corpo de Cavalaria de Gai" },
      { id: "sMoz", s: "b", k: "inf", w: 10, h: 4, l: "Grupo de Mozyr (cerca de 8.000)" }
    ],
    steps: [
      { t: "Em 12 de agosto, Tukhachevsky quer atravessar o Vístula a noroeste e envolver a capital. Piłsudski segura o rio com o 5º e o 1º Exércitos e esconde ao sul, atrás do Wieprz, uma força de ataque. O flanco sul soviético é frágil.",
        p: { city: [34, 36], p5: [30, 14], p1: [52, 36], pWie: [68, 64], s16: [74, 36], s15: [62, 12], sN: [20, 6], sMoz: [78, 54] } },
      { t: "Entre 12 e 14 de agosto o 16º Exército toma Radzymin e uma divisão chega a Izabelin, a 13 km de Varsóvia. Em Ossów, os soviéticos tomam a vila e são expulsos à noite.",
        p: { s16: [62, 36], p1: [52, 36], s15: [56, 18] } },
      { t: "Ulanos poloneses fazem uma incursão perto de Ciechanów e desorganizam o comando soviético. Os decifradores bloqueiam a última frequência de rádio do 4º Exército. Piłsudski adianta o contra-ataque em 24 horas.",
        p: { sN: [22, 10], p5: [32, 12] } },
      { t: "Em 14 e 15 de agosto, o 5º Exército cruza o Wkra e ataca o flanco soviético. Os poloneses retomam Radzymin em 15 de agosto, e o avanço soviético para.",
        p: { p5: [34, 8], s15: [66, 12], s16: [70, 36], p1: [56, 36] } },
      { t: "Em 16 de agosto, o grupo do Wieprz sai para o norte e anda cerca de 70 km em 36 horas, quase sem resistência, pela brecha entre as duas frentes soviéticas.",
        p: { pWie: [68, 44], sMoz: [82, 56] } },
      { t: "Em 18 de agosto, Tukhachevsky percebe a derrota e ordena a retirada, mas muitas ordens chegam tarde ou nunca chegam.",
        p: { pWie: [76, 24], s16: [80, 36], s15: [74, 8] } },
      { t: "A 1ª Divisão das Legiões percorre 262 km, de Lubartów a Białystok, em seis dias, cortando a retirada. O 15º Exército é derrotado em 19 e 20 de agosto, e em 21 de agosto cessa a resistência organizada.",
        p: { pWie: [88, 10], s15: [86, 6] }, x: ["s15", "s16"] },
      { t: "O corpo de cavalaria de Gai cruza para a Prússia Oriental, onde é internado. Entre 25.000 e 30.000 soviéticos chegam à fronteira alemã. É a derrota do avanço vermelho sobre a Europa Central.",
        p: { sN: [6, 3] }, x: ["sN"] }
    ]
  },

  khalkhingol: {
    terrain: [
      { t: "note", x: 86, y: 6, l: "Norte ↑ (sem escala)" },
      { t: "sea", x: 27, y: 0, w: 2, h: 70, l: "" },
      { t: "note", x: 27, y: 68, l: "Rio Khalkhin" },
      { t: "note", x: 84, y: 40, l: "Nomonhan" },
      { t: "hill", x: 50, y: 8, rx: 8, ry: 4, l: "Colinas de Fui" }
    ],
    units: [
      { id: "zC", s: "a", k: "inf", w: 6, h: 20, l: "Grupo Central (Zhukov)" },
      { id: "zN", s: "a", k: "cav", w: 10, h: 6, l: "Grupo Norte (Alekseenko)" },
      { id: "zS", s: "a", k: "cav", w: 10, h: 6, l: "Grupo Sul (Potapov)" },
      { id: "jDiv", s: "b", k: "inf", w: 10, h: 24, l: "23ª Divisão japonesa" },
      { id: "jMN", s: "b", k: "cav", w: 6, h: 10, l: "Cavalaria de Manchukuo" },
      { id: "jMS", s: "b", k: "cav", w: 6, h: 10, l: "Cavalaria de Manchukuo" },
      { id: "jFui", s: "b", k: "inf", w: 8, h: 3, l: "" },
      { id: "jRel", s: "b", k: "inf", w: 8, h: 12, l: "7ª Divisão (reforço)" }
    ],
    steps: [
      { t: "Antes de 20 de agosto, Zhukov concentra três grupos a oeste do rio, depois de uma longa marcha e de um engano com rádio e alto-falantes. A 23ª Divisão japonesa está a leste, com cavalaria de Manchukuo em cada flanco.",
        p: { zC: [20, 36], zN: [18, 14], zS: [18, 58], jDiv: [50, 36], jMN: [50, 14], jMS: [50, 58], jFui: [50, 12], jRel: [95, 20] } },
      { t: "Em 20 de agosto, 200 bombardeiros e cerca de duas horas e três quartos de artilharia abrem a ofensiva. Às 9h os blindados e a infantaria avançam na névoa, e o grupo central prende o grosso japonês.",
        p: { zC: [36, 36] } },
      { t: "No primeiro dia, os grupos do norte e do sul derrotam a cavalaria de Manchukuo dos flancos e entram pelos lados. Só as colinas de Fui resistem.",
        p: { zN: [42, 20], zS: [42, 52], jMN: [54, 14], jMS: [54, 56] }, x: ["jMN", "jMS"] },
      { t: "Em 21 e 22 de agosto, o grupo do sul se fixa cerca de 18 km a leste do rio e corta a rota de fuga japonesa. O centro japonês cede devagar.",
        p: { zS: [64, 52], zN: [50, 20] } },
      { t: "Em 23 e 24 de agosto, Komatsubara contra-ataca com o 72º Regimento e com o 28º da 7ª Divisão. O 72º encontra tanques e é destroçado, e o 28º fica preso pela artilharia.",
        p: { jDiv: [52, 36], jRel: [90, 22] } },
      { t: "Zhukov demite o comandante do grupo norte e reforça Fui com paraquedistas, artilharia e tanques lança-chamas. Os cerca de 200 sobreviventes japoneses recuam sem ordens.",
        p: { zN: [62, 24] }, x: ["jFui"] },
      { t: "Por volta de 25 e 26 de agosto, a 11ª Brigada de Tanques, do norte, e a 8ª, do sul, se encontram perto de Nomonhan e fecham o anel em volta da 23ª Divisão.",
        p: { zN: [76, 32], zS: [76, 42] } },
      { t: "Em 27 de agosto, a 7ª Divisão tenta romper o anel por fora e falha em um dia. Dentro dele, os japoneses sofrem com calor e sede. A 23ª Divisão é destruída, e em 31 de agosto não resta japonês do lado mongol. O cessar-fogo vem em 16 de setembro.",
        p: { jRel: [96, 10] }, x: ["jDiv", "jRel"] }
    ]
  },

  suomussalmi: {
    terrain: [
      { t: "note", x: 86, y: 6, l: "Norte ↑ (sem escala)" },
      { t: "sea", x: 28, y: 4, w: 12, h: 20, l: "Lago Kiantajärvi" },
      { t: "note", x: 52, y: 8, l: "Juntusranta" },
      { t: "note", x: 14, y: 40, l: "Suomussalmi" },
      { t: "note", x: 90, y: 50, l: "Fronteira soviética →" },
      { t: "note", x: 20, y: 68, l: "Piispajärvi" },
      { t: "note", x: 60, y: 50, l: "Estrada de Raate" }
    ],
    units: [
      { id: "fS", s: "a", k: "inf", w: 10, h: 6, l: "Siilasvuo (JR 27, depois 9ª Divisão)" },
      { id: "fSu", s: "a", k: "inf", w: 10, h: 5, l: "Grupo Susi" },
      { id: "fK", s: "a", k: "inf", w: 9, h: 5, l: "Grupo Kari" },
      { id: "fM", s: "a", k: "inf", w: 6, h: 4, l: "Destac. Mäkinen" },
      { id: "s163", s: "b", k: "inf", w: 12, h: 8, l: "163ª Divisão" },
      { id: "s662", s: "b", k: "inf", w: 8, h: 4, l: "662º Regimento" },
      { id: "s44", s: "b", k: "inf", w: 28, h: 3, l: "44ª Divisão (na estrada)" }
    ],
    steps: [
      { t: "Em 30 de novembro a 163ª Divisão cruza a fronteira, e por volta de 7 e 8 de dezembro toma a vila de Suomussalmi, que os finlandeses queimaram. Os finlandeses são poucos: dois batalhões separados e companhias soltas.",
        p: { s163: [24, 40], s662: [24, 56], s44: [94, 50], fS: [6, 38], fSu: [14, 66], fK: [8, 24], fM: [6, 50] } },
      { t: "Em 9 de dezembro chega o regimento de Siilasvuo. Em 11 de dezembro tenta retomar a vila e não consegue, mas corta a estrada de Raate, a leste, isolando a 163ª.",
        p: { fS: [40, 46] } },
      { t: "Em meados de dezembro, a 44ª Divisão avança pela estrada para socorrer a 163ª, esticada em cerca de 30 km. Em 21 de dezembro o destacamento de Mäkinen detém sua vanguarda no istmo entre dois lagos.",
        p: { s44: [76, 50], fM: [62, 48] } },
      { t: "Em 25 de dezembro, o Grupo Susi ataca desde Piispajärvi e derrota o 662º Regimento. Em 27 de dezembro toma Palovaara. No mesmo dia, as forças de Siilasvuo viram a 9ª Divisão.",
        p: { fSu: [22, 52] }, x: ["s662"] },
      { t: "Em 27 de dezembro, o Grupo Kari ataca Hulkonniemi pelo oeste. A 163ª Divisão desmorona e, em 28 ou 29 de dezembro, o que resta dela foge pelo gelo do lago na direção de Juntusranta.",
        p: { fK: [18, 38], s163: [44, 12] }, x: ["s163"] },
      { t: "Em 1º de janeiro de 1940, a 9ª Divisão ataca os flancos da 44ª com quatro grupos. Os finlandeses cortam a coluna em pedaços, os motti, e atacam as cozinhas de campanha e as fogueiras.",
        p: { fS: [54, 44], fSu: [60, 54], fK: [48, 54], fM: [68, 44] } },
      { t: "Em 6 de janeiro, os tanques soviéticos atacam os bloqueios e perdem muitos. Às 21h30 Vinogradov manda recuar para a fronteira. Em 7 de janeiro, a resistência acaba antes do meio-dia.",
        p: { s44: [84, 50], fS: [64, 46] }, x: ["s44"] },
      { t: "A batalha termina em 8 de janeiro. A Finlândia teve cerca de 2.700 baixas. A União Soviética teve de 13.000 a 29.000, e ainda perdeu 43 tanques, 70 canhões e 278 caminhões, capturados.",
        p: {} }
    ]
  }
});
