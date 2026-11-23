// In-depth battles, batch bm: plevna, portarthur, brusilov, mukden, caporetto (great-battles pack).
// Checked against the English and French Wikipedia articles on the Siege of Plevna, the Siege of Port Arthur and the Brusilov
// Offensive (plus the Portuguese article on Brusilov), and the English Wikipedia biographies of Osman Nuri Pasha, Eduard
// Totleben, Mikhail Skobelev and Aleksei Brusilov. Where sources disagree the text says so.
// No FORMATIONS entry for plevna: the sources read describe the assaults only in outline (no reliable moves by column),
// so a Gaugamela-level diagram would have meant inventing detail. Port Arthur and Brusilov are drawn schematically.
// Plevna dates are Gregorian (Russian sources of the time used the Julian calendar, 12 days behind).

Object.assign(GLOSSARY, {
  "fuzil de repetição": "Fuzil com um depósito de cartuchos, que permite atirar várias vezes sem recarregar a cada tiro. Os fuzis de um tiro só, como os que a maioria dos russos usava em 1877, atiravam bem mais devagar.",
  "obus de 280 mm": "Canhão curto e pesado, que lança uma bala enorme em arco, por cima de colinas e muralhas. Os japoneses usaram em Port Arthur obuses de 11 polegadas (280 mm), capazes de furar o convés de um navio de guerra a vários quilômetros.",
  "observador de artilharia": "Soldado que fica num ponto alto, vê onde caem os tiros e corrige a pontaria por telefone ou sinais. Sem ele, um canhão não acerta um alvo que não enxerga.",
  "escorbuto": "Doença causada pela falta de vitamina C, comum entre soldados e marinheiros que ficavam semanas sem frutas ou verduras frescas. Enfraquece o corpo e faz as gengivas sangrarem.",
  "beribéri": "Doença causada pela falta de vitamina B1, comum onde se come só arroz polido. Enfraquece as pernas e o coração. Matou milhares de soldados japoneses nessa guerra.",
  "preparação de artilharia": "Bombardeio que vem antes do ataque da infantaria, para destruir arame farpado, trincheiras e canhões inimigos. Em 1916, costumava durar dias. Brusilov a fez curta e precisa.",
  "grupo de assalto": "Pequena unidade de soldados escolhidos, treinados para entrar por uma brecha no sistema de defesa e atacar pontos fracos, em vez de avançar em massa numa linha só.",
  "tropas de assalto": "Soldados escolhidos e treinados para romper as linhas inimigas em pequenos grupos, com granadas, metralhadoras leves e lança-chamas. Os alemães as usaram em 1917 e 1918, com a tática de infiltração.",
  "tática de infiltração": "Em vez de atacar em linha, pequenos grupos de soldados se infiltram pelos pontos fracos, passam ao largo dos pontos fortes e seguem para a retaguarda, deixando os resistentes para os que vêm atrás.",
  "gás de combate": "Substância tóxica lançada em cilindros ou projéteis de artilharia contra as trincheiras inimigas. Na Primeira Guerra Mundial, matava ou cegava quem não tinha máscara a tempo.",
  "envolvimento pelo flanco": "Manobra em que parte do exército dá a volta por um lado do inimigo e ataca de lado ou por trás, enquanto o resto o prende de frente.",
  "tratado de santo estêvão": "Acordo assinado em 3 de março de 1878, em San Stefano, perto de Constantinopla, pelo qual o Império Otomano reconhecia uma grande Bulgária autônoma. As outras potências europeias o consideraram favorável demais à Rússia.",
  "congresso de berlim": "Conferência das grandes potências europeias, em junho e julho de 1878, que revisou o tratado de Santo Estêvão e reduziu o tamanho da Bulgária.",
  "tratado de portsmouth": "Acordo de paz entre Rússia e Japão, assinado em 1905 nos Estados Unidos, com o presidente Theodore Roosevelt como mediador."
});

Object.assign(DEEP, {
  plevna: {
    war: "Guerra Russo-Turca de 1877–1878",
    hook: "Um general otomano cavou trincheiras numa cidade búlgara e parou o exército do tsar por cinco meses.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1877, a Bulgária era uma província do Império Otomano. A repressão otomana a uma revolta ali, em 1876, chocara a Europa, e a Rússia, que se via como protetora dos cristãos ortodoxos dos Bálcãs, declarou guerra em abril de 1877. A Romênia, ainda formalmente sob o sultão, ficou do lado dos russos.",
        "O plano russo era atravessar o Danúbio, cruzar a Bulgária e chegar aos Bálcãs e a Constantinopla. A travessia, no fim de junho, correu bem. Mas o general otomano Osman Nuri Pasha, que estava em Vidin, a oeste, recebeu a ordem de reforçar a cidade de Nicópolis. Quando soube que ela caíra, em 16 de julho, desviou o exército para Plevna, uma cidadezinha de vinhedos, num vale cercado de colinas, onde várias estradas se cruzam. Chegou poucas horas antes dos russos.",
        { h: "O caminho até Plevna" },
        { timeline: [
          ["abr 1877", "A Rússia declara guerra ao Império Otomano."],
          ["fim de jun", "O exército russo atravessa o Danúbio."],
          ["16 jul", "Nicópolis cai. Osman Pasha ocupa Plevna."],
          ["20 jul", "Primeiro assalto russo a Plevna."],
          ["30–31 jul", "Segundo assalto."],
          ["11–12 set", "Terceiro assalto."],
          ["24 out", "Os russos tomam o reduto de Gorni Dubnik, na estrada que abastecia Plevna."],
          ["9–10 dez", "Osman tenta romper o cerco e se rende."]
        ]},
        { note: "As datas deste texto seguem o calendário gregoriano, o nosso. Os russos da época usavam o [[calendário juliano]], 12 dias atrasado: por isso muitos livros russos dão 8 de julho para o primeiro assalto e 28 de novembro para a rendição." },
        "Os russos acharam que Plevna seria um obstáculo pequeno. Foi o contrário: a cidade ficava no flanco da linha de avanço, e deixá-la para trás era arriscado."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Osman Nuri Pasha, 45 anos" },
        "Nascido em Tokat, em 1832, era um comandante otomano experiente. Em Plevna, mostrou que sabia tirar tudo do terreno: construiu uma rede de [[redutos|reduto]], trincheiras e posições de canhão ao redor da cidade. Depois da batalha, recebeu o título de Gazi, que quer dizer algo como 'vitorioso', e a Turquia ainda toca uma marcha em sua honra.",
        { h: "Eduard Totleben, 59 anos" },
        "Engenheiro militar russo, tinha ficado famoso na Guerra da Crimeia pelas defesas de terra que levantou em Sebastopol, a cidade que resistiu quase um ano a franceses, ingleses e otomanos. Não recebeu comando no começo da guerra. Foi chamado depois dos primeiros fracassos em Plevna e concluiu que só um cerco completo, com obras de engenharia, venceria Osman.",
        { h: "Os outros nomes" },
        "O comandante em chefe russo era o grão-duque Nicolau Nikolaievitch, irmão do tsar Alexandre II, que acompanhava o exército. O general Schilder-Schuldner liderou o primeiro assalto, e o general Krüdener, o segundo. No terceiro, o general Pavel Zotov dirigiu a batalha na prática, enquanto o príncipe Carol da Romênia tinha o comando nominal das tropas russas e romenas. Mikhail Skobelev, de 33 anos, que vestia branco e montava um cavalo branco, ficou conhecido como o 'general branco'. O coronel romeno Mihail Cerchez recebeu a rendição de Osman."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam muito conforme a fonte e o dia. No primeiro assalto, uns 6.500 russos atacaram, segundo uma fonte, contra entre 11.000 e 20.000 otomanos, conforme quem conta. No segundo, os russos tinham cerca de 35.000 homens contra uns 20.000 a 22.000. No terceiro, os aliados chegaram a algo entre 83.000 e 95.000, com mais de 420 canhões, contra 35.000 homens de Osman. No auge do cerco, os russos e romenos somaram perto de 100.000 a 130.000, e os otomanos, entre 48.000 e 50.000.",
        "Os otomanos tinham fuzis modernos: os Peabody-Martini, os Winchester de repetição e canhões Krupp de retrocarga. A maioria dos russos usava fuzis de um tiro só, como o Krnka, e passava para o Berdan, também de um tiro. A diferença de [[fuzis de repetição|fuzil de repetição]] e de cadência de tiro pesou muito.",
        { h: "O terreno" },
        "Plevna fica num vale no meio de colinas e ravinas, cortado pelo rio Vit. Osman usou tudo: cavou trincheiras e redutos nas colinas, tirou madeira da região para cobrir as posições e deu a cada uma a visão de tiro das vizinhas. Ao norte e ao leste ficavam os redutos de Grivitsa; ao sul, as chamadas Colinas Verdes.",
        { h: "Os três assaltos" },
        "Primeiro, em 20 de julho, o general Schilder-Schuldner chegou com cerca de 6.500 homens. Tomou três linhas de trincheiras por um instante, mas os otomanos contra-atacaram, e os russos perderam entre 3.000 e 4.000 homens, contra cerca de 1.000 a 2.000 dos otomanos (as fontes divergem).",
        "Segundo, em 30 de julho, o general Krüdener veio com o IX Corpo: 27.000 soldados de infantaria, 2.200 de cavalaria e 140 canhões. Atacou o norte, em Grivitsa, e o sul, nas Colinas Verdes, onde Skobelev comandou a brigada de cossacos do Cáucaso. Os russos tomaram duas trincheiras e três fortes, mas não o principal [[reduto]]. No fim do dia, tinham perdido 7.300 homens e os otomanos cerca de 2.000.",
        "Terceiro, depois disso a Rússia pediu ajuda romena e reuniu forças muito maiores. Antes do ataque, Skobelev tomou a cidade de Lovech, a uns 20 km, cortando um caminho de reforço. Em 11 e 12 de setembro, os aliados atacaram em frente. Skobelev tomou dois redutos do sul, nas Colinas Verdes. Os otomanos os retomaram no dia seguinte. Ao norte, a 4ª Divisão romena do general George Manu, com a presença do príncipe Carol, tomou o reduto de Grivitsa depois de quatro assaltos e repeliu três contra-ataques. Foi o único ganho que ficou.",
        { note: "As perdas do terceiro assalto são incertas. Um autor fala em cerca de 20.000 baixas aliadas e 5.000 otomanas desde o início de setembro; outra fonte dá 15.000 russos e 5.000 romenos mortos e feridos. Todos concordam que foi uma derrota cara." },
        { h: "O cerco" },
        "Totleben chegou e disse que não valia a pena atacar mais. Ele mandou fechar o círculo em volta da cidade e cortar a estrada que a ligava a Sófia, de onde vinham os suprimentos. Em 24 de outubro, os russos tomaram Gorni Dubnik, um reduto nessa estrada. O cerco ficou completo no fim de outubro. Osman pediu permissão para recuar, e o alto-comando otomano recusou.",
        "Os otomanos tentaram socorrer Plevna de fora, sem sucesso. No inverno, a comida e a munição foram acabando.",
        { h: "A tentativa de fuga" },
        "Na noite de 9 de dezembro, os otomanos atravessaram o rio Vit numa frente de uns 3 km e conseguiram romper a primeira linha de trincheiras russa. Os russos e romenos os empurraram de volta. Osman foi atingido na perna, e seu cavalo foi morto. Os boatos de que morrera espalharam pânico entre as tropas. Em 10 de dezembro, ele entregou a cidade, a guarnição e sua espada ao coronel Cerchez. No dia seguinte, rendeu-se formalmente ao grão-duque Nicolau. Segundo uma legenda do cerco, o tsar Alexandre II devolveu-lhe a espada, em respeito. Muitos prisioneiros morreram na neve, na marcha para o cativeiro."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Mais de 40.000 otomanos se renderam, entre soldados e não combatentes. As perdas totais são discutidas e nenhuma estimativa fecha as contas: uma fonte soma cerca de 50.000 baixas aliadas e 25.000 otomanas, mais os prisioneiros; outras falam em 38.000 contra 15.000. Fica claro que os aliados perderam muito mais gente no ataque do que Osman na defesa.",
        "Livres, os russos seguiram para o sul. Em janeiro de 1878, chegaram aos arredores de Constantinopla. O [[tratado de Santo Estêvão|tratado de santo estêvão]], de 3 de março, criou uma grande Bulgária autônoma. As outras potências europeias reagiram, e o [[Congresso de Berlim|congresso de berlim]], em 1878, reduziu a Bulgária.",
        { h: "Por que importa" },
        "A Bulgária moderna nasceu dessa guerra, e Plevna é lembrada lá como o episódio decisivo. O historiador A. J. P. Taylor escreveu que Plevna é um dos poucos combates que mudaram o curso da história, porque deu ao Império Otomano mais uns quarenta anos de vida. Militarmente, os observadores europeus viram o que trincheiras e fuzis de repetição faziam com a infantaria que avançava em massa, e o cerco foi lido, depois, como um aviso do que viria em 1914.",
        { h: "Curiosidades e controvérsias" },
        { note: "Osman voltou do cativeiro russo depois do Tratado de Berlim, em 1878, e teve recepção de herói em Constantinopla. Foi ministro da Guerra quatro vezes." },
        { note: "Na Bulgária, o Panorama de Plevna, museu aberto em 1977, mostra a batalha. Em Moscou, uma capela inaugurada em 1882 homenageia os russos mortos. Cidades como Plevna, em Montana (EUA), e Plevna, em Ontário (Canadá), receberam o nome do cerco." },
        { note: "Os números do cerco vêm de fontes que não batem entre si: o total de otomanos varia de 8.000 a 50.000 conforme a tabela, e as perdas por assalto, somadas, não fecham com os totais gerais. Usamos faixas, não valores exatos." }
      ]}
    ]
  },

  portarthur: {
    war: "Guerra Russo-Japonesa (1904–1905)",
    hook: "Os japoneses perderam dezenas de milhares de homens para tomar uma colina de onde dava para ver o porto, e então afundaram a frota russa com obuses.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século XX, a Rússia e o Japão disputavam a Manchúria e a Coreia. A Rússia tinha arrendado a península de Liaodong, na China, e fizera de Port Arthur, o atual Lüshun, uma base naval no Pacífico, um porto que não congelava no inverno. Em 8 de fevereiro de 1904, o Japão atacou por surpresa a frota russa ali e a guerra começou.",
        "Os russos ficaram com a frota presa no porto. Em 10 de agosto, ela tentou sair e foi derrotada na batalha do Mar Amarelo. Mas as naus que voltaram continuaram a existir, e enquanto existissem, o Japão não podia ter certeza de que dominava o mar e de que suas linhas de transporte para a Manchúria estavam seguras. Por isso, o Terceiro Exército japonês, sob o general Nogi, foi mandado tomar a base por terra.",
        { h: "O caminho até a colina" },
        { timeline: [
          ["8 fev 1904", "O Japão ataca por surpresa a frota russa em Port Arthur."],
          ["7–9 ago", "Os japoneses tomam as colinas avançadas do leste."],
          ["19–24 ago", "Primeiro assalto geral fracassa: mais de 18.000 baixas japonesas."],
          ["19 set", "Começa o cerco formal, com trincheiras e túneis."],
          ["fim de out", "Novo assalto geral à frente leste fracassa."],
          ["26 nov–5 dez", "Os japoneses tomam a colina de 203 Metros."],
          ["5–9 dez", "Os obuses afundam a frota russa no porto."],
          ["15 dez", "Morre o general Kondratenko, a alma da defesa."],
          ["2 jan 1905", "Stessel pede a rendição. O acordo é assinado em 5 de janeiro."]
        ]},
        "O ataque era urgente por outra razão. A frota do Báltico, que a Rússia estava preparando para mandar ao Pacífico, só ajudaria se Port Arthur ainda existisse quando ela chegasse."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Nogi Maresuke, 55 anos" },
        "General japonês que tomara Port Arthur em poucos dias na guerra contra a China, em 1894. Em 1904, insistiu em atacar pelo leste, onde os superiores duvidavam, e ordenou assaltos antes de as trincheiras de aproximação estarem prontas. O historiador Danny Orbach o vê como rígido e irresponsável; o japonês Chōnan Masayoshi o defende, dizendo que as ordens eram fixas e que o lado oeste era mais bem defendido. Segundo parte das fontes, foi o general Kodama Gentarō quem apontou a importância da colina de 203 Metros. Dois filhos de Nogi morreram na guerra, e o último, na colina. Ele chorou diante do imperador e pediu para se matar, mas foi recusado. Em setembro de 1912, depois do funeral do imperador Meiji, ele e a esposa se mataram ao modo tradicional, o seppuku.",
        { h: "Anatoli Stessel e Roman Kondratenko" },
        "O general Stessel comandava a fortaleza. O general Kondratenko, que dirigia a defesa de terra, era o oficial que os soldados mais respeitavam. Ele morreu em 15 de dezembro, no forte Tongchikuan. Stessel o substituiu pelo general Alexander Fok, que a fonte principal descreve como incompetente.",
        { h: "Os outros nomes" },
        "O coronel Nikolai Tretiakov segurou a colina de 174 Metros em agosto e depois a de 203 Metros, onde foi gravemente ferido. O capitão Nikolai Essen afundou o couraçado Sevastopol em 2 de janeiro para impedir que os japoneses o aproveitassem. O almirante Tōgō, que comandava a frota japonesa, mandou contratorpedeiros contra os navios russos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam. Nogi tinha cerca de 150.000 homens no início segundo uma fonte, e 474 canhões; outras dão de 80.000 a 120.000 em momentos diferentes. A guarnição russa somava quase 50.000, incluindo marinheiros, com cerca de 500 canhões. Os fortes, ligados por estradas cobertas, tinham [[metralhadoras|metralhadora]] bem escondidas, que a inteligência japonesa subestimou.",
        { h: "O terreno" },
        "Port Arthur é um porto protegido, cercado de colinas. A frente de terra da fortaleza tinha um lado leste, um norte e um oeste, com fortes e redutos nas alturas. A colina de 203 Metros ficava no oeste, e de lá se via o porto, a uns 5 km, onde ancorava a frota.",
        { h: "O cerco em nove tempos" },
        { formation: true },
        "Primeiro, os japoneses se reuniram ao norte e ao leste, e os russos se fecharam dentro dos fortes, com a frota no porto.",
        "Segundo, em agosto, depois de tomar as colinas avançadas, Nogi atacou a frente leste. Entre 19 e 24 de agosto, os japoneses perderam mais de 18.000 homens e ganharam a colina de 174 Metros e pouco mais. A inteligência subestimara as metralhadoras e a estrada coberta entre os fortes.",
        "Terceiro, Nogi passou ao cerco regular: sapadores cavaram mais de 8 km de trincheiras e túneis. Em 19 de setembro, tomaram o reduto do Reservatório de Água e depois o do Templo. Um primeiro assalto à colina de 203 Metros, entre 20 e 22 de setembro, falhou.",
        "Quarto, no fim de outubro, os japoneses atacaram de novo a frente leste, com ajuda de túneis. Falharam porque os fossos eram mais largos do que se sabia, e a artilharia, aquecida, perdeu a pontaria. As datas variam entre as fontes (26 e 30 de outubro).",
        "Quinto, em novembro chegaram 18 obuses de 11 polegadas, puxados por equipes de cerca de 800 homens ao longo de uma ferrovia estreita. A artilharia passou a ser dirigida por telefone. Nogi deslocou o esforço para o oeste e para a colina de 203 Metros.",
        "Sexto, em 26 de novembro um ataque de 2.600 homens fracassou; as perdas oficiais japonesas foram de 4.000, e estimativas não oficiais falam no dobro. Mais de mil bombas pesadas caíram num só dia, 28 de novembro. Uma bandeira chegou ao topo em 30 de novembro, mas os russos retomaram a posição no dia seguinte. A colina caiu em 5 de dezembro. Os japoneses perderam mais de 8.000 homens no assalto final, e os russos, que nunca tiveram mais de 1.500 homens ao mesmo tempo na colina, mais de 6.000.",
        "Sétimo, com [[observadores de artilharia|observador de artilharia]] no topo, os [[obuses de 280 mm|obus de 280 mm]] passaram a acertar os navios ancorados. Em 5 de dezembro afundou o Poltava; em 7, o Retvizan; em 9, o Pobeda, o Peresvet, o Pallada e o Bayan. O Sevastopol, atingido cinco vezes, sobreviveu e resistiu a seis ataques de contratorpedeiros japoneses, que lançaram 124 torpedos em cerca de três semanas.",
        "Oitavo, enquanto isso as [[minas subterrâneas|mina subterrânea]] destruíam os fortes do leste: o forte Chikuan em 18 de dezembro, o Erhlung em 28 de dezembro e o Sungshu em 31 de dezembro. Em 1º de janeiro, caiu o forte de Wantai.",
        "Nono, em 1º de janeiro Stessel e Fok ofereceram a rendição sem consultar os outros oficiais. Os generais Smirnov e Tretiakov ficaram indignados. O Sevastopol foi afundado por seus próprios homens em 2 de janeiro. A rendição foi assinada em 5 de janeiro."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os russos perderam 31.306 homens, mortos e feridos (ao menos 6.000 mortos), e 24.369 foram capturados, mais 8.956 marinheiros. Perderam toda a frota do porto. Os japoneses tiveram 57.780 baixas (cerca de 14.000 mortos) e mais de 33.000 doentes, 21.023 deles de [[beribéri]]. Estimativas antigas, como a história oficial russa de 1908, falavam em 94.000 a 110.000 baixas japonesas, mas foram feitas antes de os registros médicos japoneses se tornarem acessíveis.",
        "Os japoneses encontraram grandes estoques de comida e munição. Isso sugere que a guarnição poderia ter resistido mais, e Stessel, Fok e Smirnov foram julgados em São Petersburgo. Stessel foi condenado à morte, a pena foi trocada por dez anos de prisão, e o tsar o perdoou em 1909.",
        { h: "Por que importa" },
        "A queda de Port Arthur, seguida das vitórias japonesas em Mukden e Tsushima, deu ao Japão uma posição dominante, e o [[tratado de Portsmouth|tratado de portsmouth]] foi mediado por Roosevelt. A derrota contribuiu para a revolução russa de 1905. O Japão se firmou como a primeira potência não europeia a vencer uma grande potência europeia numa guerra moderna.",
        "Militarmente, muitos historiadores veem o cerco como um ensaio da Primeira Guerra Mundial: [[trincheiras|trincheira]], [[arame farpado]], metralhadoras, obuses pesados e fogo indireto por telefone.",
        { h: "Curiosidades e controvérsias" },
        { note: "Segundo uma tradição, Nogi lançou o assalto de 29 de outubro como presente de aniversário para o imperador Meiji. O assalto custou 124 oficiais e 3.611 soldados e falhou. O relato não é confirmado em todas as fontes." },
        { note: "Os soldados russos chamavam os projéteis de 280 mm de 'trens rugindo'. Mais de 35.000 deles foram disparados durante o cerco." },
        { note: "Os números do cerco divergem entre as fontes, até nos tamanhos dos exércitos (150.000 ou 120.000 japoneses; 50.000 ou 101.000 russos, conforme se contem civis e voluntários). Usamos faixas." }
      ]}
    ]
  },

  brusilov: {
    war: "Frente Oriental da Primeira Guerra Mundial (1916)",
    hook: "Quatro exércitos atacaram de uma vez, e em quatro dias um dos exércitos austro-húngaros tinha perdido cerca de dois terços dos homens.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim de 1915, a Rússia, a França, a Grã-Bretanha e a Itália combinaram, em Chantilly, atacar juntas as Potências Centrais no verão seguinte. Em fevereiro de 1916, os alemães começaram a bater em Verdun, e a França pediu ajuda. A Rússia tentou atacar em março, perto do lago Naroch, e foi um fracasso: as perdas alemãs foram cerca de um quinto das russas.",
        "Na Áustria-Hungria, o chefe do estado-maior, Conrad von Hötzendorf, tirou divisões da frente oriental e dos Bálcãs para atacar a Itália, e muitas delas eram veteranas. O front austro-húngaro na Galícia ficou mais fraco do que antes.",
        { h: "O caminho até o 4 de junho" },
        { timeline: [
          ["dez 1915", "Os aliados combinam ataques simultâneos para 1916."],
          ["mar 1916", "A ofensiva russa do lago Naroch fracassa."],
          ["29 mar", "Brusilov assume a Frente Sudoeste."],
          ["26 mai", "O tsar manda antecipar o ataque, em resposta a apelos italianos."],
          ["4 jun", "Começa a ofensiva."],
          ["6–8 jun", "Os russos entram em Lutsk."],
          ["17 jun", "Os russos tomam Czernowitz."],
          ["28 jul", "Tomada de Brody."],
          ["9 ago", "Brusilov desiste de tomar Kovel."],
          ["20 set", "Fim da ofensiva."]
        ]},
        "O plano do alto-comando russo era que a Frente Oeste, do general Evert, desse o golpe principal. Brusilov propôs outro: atacar com a Frente Sudoeste, com quatro exércitos, em vários pontos, para deixar o inimigo sem saber onde estava a ameaça. O tsar Nicolau II aprovou. Os pedidos de Brusilov por ataques de apoio das frentes de Evert e de Kuropatkin foram negados."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Aleksei Brusilov, 62 anos" },
        "Nascido em Tbilisi em 1853, de uma família de oficiais, era um oficial de cavalaria. Assumiu a Frente Sudoeste em 29 de março de 1916. Em 1917, foi comandante em chefe por pouco tempo e, depois da guerra civil, aderiu aos bolcheviques e ajudou a organizar o Exército Vermelho. Morreu em Moscou em 1926.",
        { h: "Os generais ao lado" },
        "O 8º Exército, de Aleksei Kaledin, no norte, foi o que deu o golpe mais forte, em direção a Lutsk e Kovel. Vladimir Sakharov comandava o 11º, Dmitri Shcherbachev o 7º e Platon Lechitski o 9º, no sul.",
        { h: "Do outro lado" },
        "O arquiduque José Fernando comandava o 4º Exército austro-húngaro, o principal alvo do ataque. Também estavam ali Eduard von Böhm-Ermolli, com o 2º Exército, Karl von Pflanzer-Baltin, com o 7º, e o general alemão Alexander von Linsingen, que comandava o Exército do Bug e recebeu reforços alemães. Conrad estava longe, na frente italiana."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Frente Sudoeste tinha quatro exércitos, com cerca de 40 divisões de infantaria e 15 de cavalaria: perto de 573.000 homens a pé e 60.000 a cavalo no início. Os defensores tinham 39 divisões de infantaria e 10 de cavalaria, cerca de 450.000 homens a pé e 30.000 a cavalo. No setor do 4º Exército austro-húngaro, 148 batalhões russos enfrentavam 53.",
        { h: "O terreno" },
        "Planícies e colinas da Volínia e da Galícia Oriental, hoje na Ucrânia, cortadas por rios como o Styr e o Stokhod. O objetivo eram as cidades de Kovel e Lviv (Lemberg), perdidas pelos russos em 1915.",
        { h: "O método de Brusilov" },
        "Brusilov manteve as reservas perto do front e usou canhões falsos e rádio falso para esconder o ponto de ataque. Mandou cavar trincheiras até uns 100 metros das austro-húngaras, e túneis sob o seu próprio arame. Cada um dos quatro exércitos atacou em um setor de uns 15 km, em ondas de corpos reforçados, em vez de uma massa só. A [[preparação de artilharia|preparação de artilharia]] foi curta e precisa: a brigada de artilharia de Winogradsky, com canhões de 76 mm, abriu 24 brechas, e os canhões pesados bateram os pontos fortes. A infantaria avançava em [[grupos de assalto|grupo de assalto]].",
        { h: "A ofensiva em nove tempos" },
        { formation: true },
        "Primeiro, na véspera do ataque, os quatro exércitos russos estavam postados de frente para os exércitos austro-húngaros, do norte ao sul. Evert, ao norte, ficou parado.",
        "Segundo, em 4 de junho a artilharia abriu fogo, e a infantaria dos quatro exércitos avançou ao mesmo tempo, cada um no seu setor.",
        "Terceiro, no dia 5, Kaledin já tinha tomado a primeira e a segunda linhas austro-húngaras. O arquiduque José Fernando, quase sem munição, pediu ajuda a Linsingen. Entre 6 e 8 de junho, os russos entraram em Lutsk, e em quatro dias o 4º Exército caiu de 117.800 para cerca de 35.000 homens.",
        "Quarto, no sul, o 9º Exército de Lechitski avançou contra Pflanzer-Baltin, que recuou. Os russos tomaram Czernowitz em 17 de junho e Kolomea no dia 18. Até 14 de junho, os austro-húngaros tinham perdido cerca de 205.000 homens, 150.000 deles prisioneiros.",
        "Quinto, Linsingen reuniu forças alemãs e austro-húngaras e contra-atacou perto de Lutsk a partir de 15 de junho. Em três dias, a linha quase não mudou. A Alemanha mandou divisões de outras frentes, e cinco divisões alemãs foram organizadas perto de Kovel.",
        "Sexto, Evert só atacou depois, e mal. As fontes dão datas diferentes, entre meados de junho e 2 de julho. Ele suspendeu o ataque em 9 de julho, depois de perder uns 80.000 homens para avançar cerca de 5 km. Os alemães ganharam tempo para mandar reforços.",
        "Sétimo, em 4 a 6 de julho, o 3º Exército e o 8º atacaram e empurraram Linsingen de volta ao rio Stokhod. Em 28 de julho, o 11º Exército de Sakharov tomou Brody.",
        "Oitavo, em agosto, os russos tentaram Kovel de novo, em 7 a 9 de agosto, mas os alemães e austro-húngaros os pararam, e Brusilov desistiu da cidade em 9 de agosto. No sul, Lechitski tomou Stanislau em 11 de agosto.",
        "Nono, as chuvas de outono transformaram as estradas em lama. A ofensiva terminou em 20 de setembro, quando as tropas russas foram desviadas para ajudar a Romênia, que entrara na guerra no fim de agosto."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A Rússia conquistou toda a Galícia Oriental e parte da Bucovina do norte. As baixas são muito discutidas. Um cálculo de arquivo russo dá 497.967 baixas russas (62.155 mortos, 376.910 feridos e 59.802 desaparecidos) só nas primeiras seis semanas. Para a ofensiva inteira, as estimativas vão de cerca de 1 milhão (Keegan) a 1,44 milhão (Tucker). Do lado austro-húngaro, os números variam de 616.000 a mais de 900.000, com 400.000 a 470.000 prisioneiros. As baixas alemãs vão de 148.000 a 350.000.",
        { h: "Por que importa" },
        "Foi o maior esforço do exército russo na guerra. Obrigou a Alemanha a parar o ataque a Verdun e a mandar tropas para o leste. A Áustria-Hungria sofreu perdas que não conseguiu recuperar e passou a depender cada vez mais da ajuda alemã. John Keegan chamou a ofensiva de a maior vitória em qualquer frente desde que as trincheiras foram cavadas no Aisne, dois anos antes.",
        "Mas o preço foi enorme, e a Rússia não conseguiu lançar outra ofensiva igual. Muitos historiadores acham que as perdas contribuíram para o colapso do exército em 1917 e para a revolução. A Romênia, animada com o sucesso, entrou na guerra e foi derrotada na campanha seguinte.",
        "Em tática, Brusilov usou pequenas unidades especializadas para explorar pontos fracos, em vez de ondas humanas. Isso lembra o que os alemães fariam em 1918 com as [[tropas de assalto]]. Os outros comandantes russos não adotaram o método.",
        { h: "Curiosidades e controvérsias" },
        { note: "Entre 27 de junho e 3 de julho, Brusilov, por iniciativa própria, deportou cerca de 13.000 civis alemães das áreas conquistadas da Volínia." },
        { note: "Em 11 de junho, um destacamento russo cruzou por engano a fronteira com a Romênia e dominou um posto de guarda. Retirou-se logo, sem intenção de pressionar a Romênia." },
        { note: "As baixas da ofensiva são das mais incertas da guerra. Aqui usamos faixas, com o nome de quem dá cada uma. Nenhuma fonte inclui uma conta final aceita por todos." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  portarthur: {
    terrain: [
      { t: "sea", x: 0, y: 59, w: 100, h: 11, l: "Mar Amarelo" },
      { t: "hill", x: 26, y: 38, rx: 8, ry: 5, l: "Colina de 203 Metros" },
      { t: "note", x: 68, y: 40, l: "Frente leste" },
      { t: "note", x: 10, y: 66, l: "Esquema: posições aproximadas" }
    ],
    units: [
      { id: "jN", s: "a", k: "inf", w: 30, h: 5, l: "3º Exército (Nogi)" },
      { id: "jW", s: "a", k: "inf", w: 12, h: 5, l: "Assalto à colina" },
      { id: "jH", s: "a", k: "inf", w: 10, h: 4, l: "Obuses de 280 mm" },
      { id: "rE", s: "b", k: "inf", w: 26, h: 5, l: "Fortes do leste" },
      { id: "rW", s: "b", k: "inf", w: 10, h: 4, l: "Defensores da 203" },
      { id: "rF", s: "b", k: "ship", w: 18, h: 4, l: "Frota russa no porto" }
    ],
    steps: [
      { t: "Os japoneses de Nogi ficam ao norte e ao leste da fortaleza. Os russos se fecham nos fortes. A frota está no porto, ao sul.",
        p: { jN: [60, 8], jW: [20, 8], jH: [86, 14], rE: [68, 34], rW: [26, 38], rF: [46, 52] } },
      { t: "Agosto: depois de tomar as colinas avançadas, Nogi ataca a frente leste. Entre 19 e 24 de agosto perde mais de 18.000 homens e ganha pouco.",
        p: { jN: [62, 22] } },
      { t: "Setembro e outubro: o cerco regular, com mais de 8 km de trincheiras e túneis. O primeiro assalto à colina, em 20 a 22 de setembro, falha.",
        p: { jN: [64, 27], jW: [28, 22] } },
      { t: "Fim de outubro: novo assalto geral à frente leste. Falha de novo.",
        p: { jN: [62, 25] } },
      { t: "Novembro: chegam 18 obuses de 11 polegadas. Nogi passa o esforço para o oeste e a colina de 203 Metros.",
        p: { jW: [28, 30], jN: [54, 16], jH: [38, 18] } },
      { t: "De 26 de novembro a 5 de dezembro, a luta pela colina: um primeiro ataque fracassa, a bandeira sobe em 30 de novembro e é arrancada. A colina cai em 5 de dezembro.",
        p: { jW: [26, 35], rW: [24, 42] }, x: ["rW"] },
      { t: "No alto da colina, os observadores japoneses dirigem os obuses para o porto. Entre 5 e 9 de dezembro, o Poltava, o Retvizan, o Pobeda, o Peresvet, o Pallada e o Bayan afundam.",
        p: { jH: [34, 28], rF: [46, 54] }, x: ["rF"] },
      { t: "Dezembro: Kondratenko morre em 15 de dezembro, e as minas destroem os fortes do leste um a um. Wantai cai em 1º de janeiro.",
        p: { jN: [64, 32], rE: [68, 38] }, x: ["rE"] },
      { t: "Em 2 de janeiro de 1905, Stessel pede a rendição. A capitulação é assinada em 5 de janeiro.",
        p: { jN: [60, 38], jW: [38, 38] } }
    ]
  },

  brusilov: {
    terrain: [
      { t: "note", x: 20, y: 4, l: "Kovel" },
      { t: "note", x: 26, y: 12, l: "Lutsk" },
      { t: "note", x: 24, y: 28, l: "Brody" },
      { t: "note", x: 14, y: 52, l: "Stanislau" },
      { t: "note", x: 22, y: 64, l: "Czernowitz" },
      { t: "note", x: 92, y: 66, l: "Norte ↑" },
      { t: "note", x: 50, y: 68, l: "Esquema: posições aproximadas" }
    ],
    units: [
      { id: "r8", s: "a", k: "inf", w: 6, h: 14, l: "8º Exército (Kaledin)" },
      { id: "r11", s: "a", k: "inf", w: 6, h: 12, l: "11º (Sakharov)" },
      { id: "r7", s: "a", k: "inf", w: 6, h: 10, l: "7º (Shcherbachev)" },
      { id: "r9", s: "a", k: "inf", w: 6, h: 14, l: "9º (Lechitski)" },
      { id: "r3", s: "a", k: "inf", w: 6, h: 10, l: "3º Exército (reforço)" },
      { id: "rW", s: "a", k: "inf", w: 8, h: 8, l: "Frente Oeste (Evert)" },
      { id: "a4", s: "b", k: "inf", w: 6, h: 14, l: "4º Exército (José Fernando)" },
      { id: "a2", s: "b", k: "inf", w: 6, h: 20, l: "2º Exército (Böhm-Ermolli)" },
      { id: "a7", s: "b", k: "inf", w: 6, h: 16, l: "7º Exército (Pflanzer-Baltin)" },
      { id: "ge", s: "b", k: "inf", w: 7, h: 12, l: "Reforços alemães (Linsingen)" }
    ],
    steps: [
      { t: "4 de junho, antes do ataque: quatro exércitos russos de frente para os exércitos austro-húngaros, do norte ao sul. Evert, mais ao norte, está parado.",
        p: { r8: [62, 12], r11: [62, 28], r7: [62, 41], r9: [62, 55], r3: [78, 12], rW: [88, 12], a4: [38, 12], a2: [38, 30], a7: [38, 54], ge: [8, 14] } },
      { t: "4 de junho: depois de uma preparação de artilharia curta, os quatro exércitos atacam ao mesmo tempo, cada um no seu setor de uns 15 km.",
        p: { r8: [56, 12], r11: [56, 28], r7: [56, 41], r9: [56, 55] } },
      { t: "5 a 8 de junho: Kaledin rompe as duas primeiras linhas. O 4º Exército recua até o Styr, e os russos entram em Lutsk. Em quatro dias, o exército do arquiduque cai de 117.800 para cerca de 35.000 homens.",
        p: { r8: [34, 12], a4: [20, 18] } },
      { t: "9 a 18 de junho: no sul, Lechitski avança e Pflanzer-Baltin recua. Czernowitz cai em 17 de junho, e Kolomea no dia 18.",
        p: { r9: [34, 58], a7: [18, 56], r7: [50, 41], r11: [50, 28] } },
      { t: "A partir de 15 de junho: Linsingen reúne tropas alemãs e austro-húngaras e contra-ataca perto de Lutsk e Kovel. A linha quase não muda.",
        p: { ge: [22, 8], a4: [22, 20] } },
      { t: "Fim de junho a 9 de julho: Evert ataca tarde e mal, ao norte, e para depois de perder uns 80.000 homens por cerca de 5 km. Os alemães ganham tempo.",
        p: { rW: [80, 10], r3: [68, 14] } },
      { t: "4 a 6 de julho: o 3º Exército e o 8º empurram Linsingen para trás, até o Stokhod.",
        p: { r3: [44, 8], r8: [40, 14], ge: [16, 6] } },
      { t: "28 de julho: o 11º Exército toma Brody e empurra o 2º austro-húngaro para oeste.",
        p: { r11: [32, 28], a2: [20, 30] } },
      { t: "Agosto: o ataque a Kovel é tentado de novo, em 7 a 9 de agosto, e para. Lechitski toma Stanislau em 11 de agosto. Com as chuvas de outono, a ofensiva se esgota em 20 de setembro.",
        p: { r9: [30, 52], r8: [38, 12], a7: [14, 52] } }
    ]
  }
});

Object.assign(DEEP, {
  mukden: {
    war: "Guerra Russo-Japonesa (1904–1905)",
    hook: "Meio milhão de homens, uma frente de 140 km e um rio congelado: a maior batalha do mundo antes de 1914.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1904, o Japão e a Rússia lutavam pela Manchúria e pela Coreia. Em agosto e setembro, em Liaoyang, os japoneses forçaram os russos a recuar, mas não os destruíram: parte dos homens e dos canhões pesados japoneses tinha sido desviada para o cerco de Port Arthur. Os russos recuaram em boa ordem para o rio Sha-ho, ao sul de Mukden.",
        "Os russos tentaram contra-atacar no Sha-ho, em outubro, e em Sandepu, em janeiro de 1905. As duas tentativas falharam. No começo de 1905, o Japão estava com o exército cansado e sem reservas, mas Port Arthur tinha caído, e o Terceiro Exército de Nogi estava livre para ir ao norte.",
        { h: "O caminho até Mukden" },
        { timeline: [
          ["25 ago–4 set 1904", "Batalha de Liaoyang: os russos recuam em boa ordem."],
          ["12–14 out", "Contra-ataque russo no Sha-ho falha."],
          ["25–29 jan 1905", "Outro contra-ataque, em Sandepu, falha."],
          ["20 fev", "O 5º Exército japonês ataca o leste e começa a batalha."],
          ["27 fev", "O 4º Exército ataca o centro, e o 3º de Nogi começa a volta pelo oeste."],
          ["5 mar", "Contra-ataque russo no oeste falha."],
          ["9 mar, 18h45", "Kuropatkin manda recuar para o norte."],
          ["10 mar, 10h", "Os japoneses entram em Mukden."]
        ]},
        "Os dois lados sabiam que seria a batalha decisiva em terra. Mas o Japão tinha pouco tempo: a cada mês, a ferrovia Transiberiana trazia mais soldados russos."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Aleksei Kuropatkin, 56 anos" },
        "Ministro da Guerra russo antes do conflito, comandava o exército da Manchúria. Tinha uma linha de uns 140 km, com pouca profundidade, e temia sobretudo o lado leste, onde ficavam as colinas. Isso o levou a gastar tropas ali e a mexer nelas várias vezes, o que desorganizou as unidades. Depois da batalha, foi substituído por Linevich.",
        { h: "Ōyama Iwao, 62 anos" },
        "Marechal japonês, comandava os cinco exércitos. Seu plano era formar um arco em volta de Mukden, para cercar a cidade e cortar a retirada russa. Mandou evitar combater dentro da própria cidade.",
        { h: "Os outros nomes" },
        "Do lado russo, o 1º Exército de Linevich ficava nas colinas do leste, o 3º de Bilderling no centro e o 2º de Kaulbars no oeste, na planície. Rennenkampf comandava a cavalaria do leste e segurou o avanço de Kawamura no frio. Do lado japonês, Kawamura comandava o 5º Exército (com reservistas, perto do Yalu), Kuroki o 1º, Nozu o 4º, Oku o 2º e Nogi o 3º, vindo de Port Arthur."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo o artigo em inglês da Wikipédia, os japoneses tinham cerca de 270.000 homens. Os russos tinham de 250.000 a 292.000, conforme a fonte, e o artigo em francês fala em 340.000. Os russos tinham mais de 900 canhões. Os números mudam porque as fontes contam as tropas de maneiras diferentes.",
        { h: "O terreno" },
        "Uma planície manchu, com colinas ao leste e o rio Hun ao norte, no inverno, congelado. A neve e o frio, de até −22 °C, atrapalharam as duas partes. O degelo demorou, e o rio ficou congelado, o que deixou os japoneses atravessarem com facilidade.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, a linha russa, de uns 140 km, com os três exércitos, de leste a oeste, e os japoneses ao sul, em arco. O 3º Exército de Nogi, de Port Arthur, ficou escondido atrás do 2º de Oku.",
        "Segundo, em 20 de fevereiro, Kawamura e Kuroki atacaram o leste, que Kuropatkin mais temia. O destacamento de Alekseev recuou, mas Rennenkampf voltou ao comando e parou Kawamura no frio extremo.",
        "Terceiro, em 27 de fevereiro, Nozu prendeu Bilderling no centro com 108 canhões pesados, incluindo obuses de 28 cm, sem atacar de frente.",
        "Quarto, no mesmo dia, Nogi saiu de trás de Oku e deu a volta pelo oeste, com um grande movimento circular ao noroeste de Mukden, uma manobra de [[envolvimento pelo flanco]]. Oku empurrou Kaulbars para trás. Kuropatkin começou a mandar tropas de um lado para o outro.",
        "Quinto, em 1º de março, o avanço de Nogi, em Ssu-fang-tai, custou cerca de 700 mortos, e os japoneses perderam o ritmo.",
        "Sexto, em 5 de março, o general Gerngross atrasou o contra-ataque russo em cinco horas e só mandou um quarto de seus homens. Falhou.",
        "Sétimo, entre 5 e 9 de março, Ōyama trocou a ordem de 'atacar' para 'perseguir e destruir'. Nogi tomou a margem norte do rio Hun e ameaçou envolver a ala direita russa. Kuropatkin tirou tropas do leste para tentar socorrer o oeste e assumiu pessoalmente o comando, e as unidades russas se misturaram.",
        "Oitavo, o rio Hun congelado deixou os japoneses cruzá-lo com facilidade. Kuroki cortou a estrada de Mukden para o norte. Às 18h45 de 9 de março, Kuropatkin mandou recuar.",
        "Nono, os japoneses entraram em Mukden às 10h de 10 de março. A perseguição parou uns 20 a 30 km adiante, em parte por falta de suprimentos, e o exército russo escapou de ser aniquilado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo o artigo em inglês, o Japão perdeu 70.029 homens (16.553 mortos e 53.476 feridos), e a Rússia 89.423 (8.705 mortos, 51.388 feridos e 29.330 desaparecidos, entre os quais 20.000 a 25.000 prisioneiros, a maioria nas últimas 28 a 48 horas). O artigo em francês dá números um pouco diferentes: 15.892 mortos e 59.612 feridos japoneses. Juntos, passaram de 150.000 baixas.",
        { h: "Por que importa" },
        "Foi a maior batalha da guerra e a maior batalha moderna até 1914. Os japoneses dispararam cerca de 20 milhões de cartuchos de fuzil e metralhadora e 279.394 projéteis de artilharia em pouco mais de dez dias. A Rússia foi expulsa do sul da Manchúria, mas o exército de Kuropatkin sobreviveu, porque as linhas de suprimento japonesas estavam esticadas demais para a perseguição.",
        "Quatro meses depois, veio Tsushima. A vitória japonesa chocou as potências europeias, porque mostrou que um exército não europeu podia derrotar um europeu em campo aberto. Em 10 de março, o Japão passou a comemorar o Dia do Exército.",
        { h: "Curiosidades e controvérsias" },
        { note: "O Japão ganhou, mas não do jeito que Ōyama queria: o plano era cercar e destruir o exército russo, e ele escapou. Os dois lados estavam no limite." },
        { note: "Os números de tropas variam de 250.000 a 340.000 para os russos. Usamos faixas e dizemos quem dá cada uma." }
      ]}
    ]
  },

  caporetto: {
    war: "Frente Italiana da Primeira Guerra Mundial (1915–1918)",
    hook: "Em um dia, alemães e austro-húngaros avançaram 25 km, e a Itália perdeu um quarto de milhão de homens como prisioneiros.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Itália entrou na guerra em 1915, ao lado dos aliados, e passou dois anos lançando ofensivas contra a Áustria-Hungria ao longo do rio Isonzo, hoje na Eslovênia. Foram onze batalhas, ganhando poucos quilômetros a um custo enorme. A 11ª, em agosto de 1917, foi um sucesso italiano que deixou o exército austro-húngaro à beira do colapso.",
        "O imperador Carlos pediu ajuda ao kaiser Guilherme II. Em agosto, Hindenburg e Arz concordaram em tirar divisões da frente oriental. Ludendorff era contra, mas foi vencido. Especialistas alemães escolheram o setor calmo de Caporetto (Kobarid) para um ataque de surpresa com [[gás|gás de combate]]. Formou-se um novo 14º Exército, sob o general Otto von Below, com nove divisões austro-húngaras e de seis a oito alemãs.",
        { h: "O caminho até Caporetto" },
        { timeline: [
          ["1915–ago 1917", "Onze batalhas do Isonzo, com pequenos avanços italianos."],
          ["ago 1917", "Hindenburg e Arz concordam em mandar divisões alemãs para a Itália."],
          ["24 out, 2h", "Os alemães lançam gás perto de Bovec (Plezzo)."],
          ["24 out, 6h41", "Mais de 2.000 canhões abrem fogo. Às 8h, a infantaria avança."],
          ["30 out", "Cadorna ordena a retirada para o Tagliamento."],
          ["5–7 nov", "Conferência de Rapallo entre os aliados."],
          ["~10 nov", "Os italianos formam nova linha no Piave e no monte Grappa."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Luigi Cadorna" },
        "Chefe do estado-maior italiano, conhecido pela disciplina dura. Segundo o artigo em inglês, demitira 217 generais, 255 coronéis e 355 comandantes de batalhão, e a moral da tropa era baixa. Dirigiu a batalha a uns 30 km da frente e acabou recuando uns 160 km, até Pádua. Foi forçado a renunciar e substituído por Armando Diaz.",
        { h: "Luigi Capello e Pietro Badoglio" },
        "Capello comandava o 2º Exército, o que foi rompido. Estava doente, com febre, e deixou o posto em 4 de outubro, segundo a Wikipédia em italiano, mas depois pediu para recuar ao Tagliamento e foi recusado. Badoglio comandava o XXVII Corpo, um dos que foram rapidamente vencidos.",
        { h: "Otto von Below e Erwin Rommel" },
        "Below comandava o 14º Exército. Um jovem oficial alemão, Erwin Rommel, comandava tropas do Batalhão de Montanha de Württemberg e ganhou a medalha Pour le Mérite por ações nas montanhas, relatadas em seu livro 'Infantry Attacks'. Boa parte do que se conta sobre as ações dele vem de suas próprias memórias."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os atacantes somavam cerca de 353.000 homens, segundo a Wikipédia em italiano: o 14º Exército tinha cerca de 98.400 e o 2º Exército do Isonzo uns 21.600. Do lado italiano, o 2º Exército tinha cerca de 257.400 homens em combate e mais de 667.000 no exército todo.",
        "Os números de canhões variam: de 2.147 canhões e 371 morteiros (texto) a 2.518 (quadro) para os atacantes, e de 997 canhões e 345 morteiros a 1.342 para os italianos engajados.",
        { h: "O terreno" },
        "O vale do rio Isonzo, entre montanhas, com Bovec (Plezzo) ao norte, Tolmino ao sul e Caporetto no meio. As cristas de Kolovrat e do Matajur dominam o vale e a planície do Friuli, atrás.",
        { h: "A ruptura" },
        "Primeiro, às 2h de 24 de outubro, os alemães lançaram gás em cilindros no setor de Bovec, e a Wikipédia em inglês fala em 500 a 600 defensores mortos. Às 6h41, cerca de 2.200 canhões abriram fogo, e às 8h explodiram minas e a infantaria avançou.",
        "Segundo, em vez de atacar em linha, as [[tropas de assalto]] e os grupos de montanha usaram a [[tática de infiltração]]: passaram pelos vales e pelos pontos fracos, ignoraram os pontos fortes e foram para a retaguarda. A 12ª Divisão alemã subiu o vale do Isonzo e chegou a Caporetto na tarde do mesmo dia. Alguns atacantes avançaram uns 25 km no primeiro dia.",
        "Terceiro, a linha do 2º Exército foi rompida entre os corpos IV e XXVII. Os cabos de comunicação foram cortados, e o fogo da artilharia italiana ficou desordenado. Com a moral baixa, muitos soldados se renderam sem lutar.",
        "Quarto, nas cristas, o Batalhão de Württemberg de Rommel tomou o Kolovrat e, entre 25 e 27 de outubro, o monte Matajur. Segundo uma fonte, capturaram 9.000 italianos em pouco mais de dois dias, número que vem sobretudo das memórias de Rommel.",
        "Quinto, Capello pediu para recuar ao Tagliamento, e Cadorna recusou. Só em 30 de outubro ele ordenou a retirada. A travessia do rio levou quatro dias, e as emboscadas dos perseguidores ficaram conhecidas como a batalha de Pozzuolo. Em 2 de novembro, a 55ª Divisão austro-húngara fez uma [[cabeça de ponte]] no Tagliamento.",
        "Sexto, os italianos se firmaram numa nova linha no rio Piave e no monte Grappa por volta de 10 de novembro, e a linha aguentou."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os italianos perderam entre 10.000 e 13.000 mortos, cerca de 30.000 feridos e de 265.000 a quase 300.000 prisioneiros, além de 3.152 canhões, 3.000 metralhadoras e 1.712 morteiros, segundo o artigo em inglês. As perdas das Potências Centrais foram de cerca de 70.000, segundo o mesmo artigo, ou de 6.000 a 7.000 no primeiro dia, segundo o em italiano. Entre 600.000 e mais de 1 milhão de civis fugiram.",
        { h: "Por que importa" },
        "O historiador Brian Sullivan chamou Caporetto de a maior derrota da história militar italiana. Os aliados reagiram: de 5 a 7 de novembro, a conferência de Rapallo criou um Conselho Supremo de Guerra, e a França e a Grã-Bretanha mandaram seis e cinco divisões, que não lutaram. A linha do Piave segurou, e em 1918 a Itália venceu a Áustria-Hungria em Vittorio Veneto.",
        "Militarmente, Caporetto é um dos primeiros exemplos de [[tropas de assalto]] e infiltração dando a vitória na Primeira Guerra Mundial.",
        { h: "Curiosidades e controvérsias" },
        { note: "Em italiano, 'Caporetto' virou sinônimo de desastre total. A derrota levou à busca de culpados e a uma comissão de inquérito, em 1919." },
        { note: "O romance 'Adeus às armas', de Ernest Hemingway, tem a retirada de Caporetto como parte da história." },
        { note: "Os números variam muito, tanto de tropas como de baixas. Usamos faixas e dizemos quem dá cada uma." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  mukden: {
    terrain: [
      { t: "hill", x: 82, y: 34, rx: 14, ry: 6, l: "Colinas do leste" },
      { t: "note", x: 50, y: 20, l: "Mukden" },
      { t: "note", x: 50, y: 6, l: "Rio Hun (congelado)" },
      { t: "note", x: 90, y: 66, l: "Norte ↑" },
      { t: "note", x: 20, y: 66, l: "Esquema: posições aproximadas" }
    ],
    units: [
      { id: "kaw", s: "a", k: "inf", w: 14, h: 4, l: "5º (Kawamura)" },
      { id: "kur", s: "a", k: "inf", w: 16, h: 4, l: "1º (Kuroki)" },
      { id: "noz", s: "a", k: "inf", w: 16, h: 4, l: "4º (Nozu)" },
      { id: "oku", s: "a", k: "inf", w: 14, h: 4, l: "2º (Oku)" },
      { id: "nog", s: "a", k: "inf", w: 14, h: 4, l: "3º (Nogi)" },
      { id: "r1", s: "b", k: "inf", w: 26, h: 5, l: "1º Exército (Linevich)" },
      { id: "r3", s: "b", k: "inf", w: 24, h: 5, l: "3º (Bilderling)" },
      { id: "r2", s: "b", k: "inf", w: 26, h: 5, l: "2º (Kaulbars)" },
      { id: "rc", s: "b", k: "cav", w: 14, h: 4, l: "Cavalaria (Rennenkampf)" }
    ],
    steps: [
      { t: "Uma linha russa de uns 140 km, com três exércitos, de frente para os cinco exércitos japoneses, em arco. Nogi se esconde atrás de Oku.",
        p: { r1: [80, 32], r3: [52, 32], r2: [24, 32], rc: [86, 40], kaw: [92, 50], kur: [76, 48], noz: [54, 48], oku: [32, 48], nog: [30, 58] } },
      { t: "20 de fevereiro: Kawamura e Kuroki atacam o leste, o lado que Kuropatkin mais teme. Os russos recuam, e a cavalaria de Rennenkampf segura Kawamura no frio de até −22 °C.",
        p: { kaw: [90, 42], kur: [76, 41], r1: [80, 29] } },
      { t: "27 de fevereiro: Nozu prende o centro com 108 canhões pesados, sem atacar de frente.",
        p: { noz: [54, 40] } },
      { t: "No mesmo dia, Nogi sai de trás de Oku e começa a dar a volta pelo oeste. Oku empurra Kaulbars para trás.",
        p: { nog: [10, 44], oku: [30, 40], r2: [22, 30] } },
      { t: "Kuropatkin tira tropas do leste e as manda para o oeste e depois de volta. As unidades se misturam.",
        p: { rc: [70, 36], r1: [76, 30] } },
      { t: "1º de março: Nogi ataca em Ssu-fang-tai, com cerca de 700 mortos, e continua pelo noroeste.",
        p: { nog: [8, 30] } },
      { t: "5 de março: o contra-ataque russo no oeste, de Gerngross, atrasa cinco horas, avança com um quarto dos homens e fracassa.",
        p: { r2: [20, 28], nog: [10, 26] } },
      { t: "Entre 5 e 9 de março, Ōyama muda a ordem para 'perseguir e destruir'. Nogi toma a margem norte do rio Hun e ameaça envolver o oeste russo. O rio congelado deixa os japoneses cruzar com facilidade.",
        p: { nog: [30, 12], oku: [28, 30], kur: [70, 28], noz: [52, 30] } },
      { t: "9 de março, 18h45: Kuropatkin manda recuar para o norte. Em 10 de março, às 10h, os japoneses entram em Mukden. Os russos escapam do cerco total, deixando 20.000 a 25.000 prisioneiros.",
        p: { r1: [78, 8], r3: [52, 4], r2: [24, 4], rc: [88, 12], noz: [50, 24] } }
    ]
  }
});
