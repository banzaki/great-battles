// In-depth battles, batch av: philippi, stamfordbridge, nicopolis, chaldiran, leuthen (great-battles pack).
// Checked against the English, Portuguese, German and French Wikipedia articles on each battle, Britannica's
// entries where reachable, and the sources those pages cite (Appian, Plutarch and Cassius Dio for Philippi; the
// Anglo-Saxon Chronicle, Heimskringla, Henry of Huntingdon and Orderic Vitalis for Stamford Bridge; Schiltberger,
// Froissart and Nicolle for Nicopolis; Finkel, Savory and the Iranian and Ottoman accounts as summarised on
// Wikipedia and Wikishia for Chaldiran; Duffy and Rohdich as cited for Leuthen).
// Where sources disagree the text says so. Chaldiran gets no diagram: the sources contradict each other on which
// wing was where.

Object.assign(GLOSSARY, {
  "libertadores": "Nome que Brutus e Cássio davam ao seu partido: os que tinham 'libertado' Roma de um tirano ao matar Júlio César em 44 a.C.",
  "via egnatia": "A grande estrada romana que ligava o Adriático ao Egeu pela Macedônia. Atravessava o campo de batalha de Filipos.",
  "liberto": "Ex-escravo que ganhou a liberdade, mas continuava ligado ao antigo dono por deveres de lealdade. Muitos eram secretários e ajudantes de confiança.",
  "proscrições": "Listas públicas de inimigos políticos condenados à morte, com os bens confiscados. Os triúnviros mandaram matar assim centenas de pessoas, entre elas Cícero.",
  "colônia de veteranos": "Cidade fundada por Roma para dar terra a soldados aposentados, que também serviam de guarnição leal em território conquistado.",
  "huscarls": "Guarda pessoal profissional de um rei ou grande nobre anglo-saxão e dinamarquês, armada com cota de malha e o grande machado de duas mãos.",
  "earl": "Título inglês de quem governava uma grande região em nome do rei, como a Nortúmbria. Mais tarde virou o 'conde' inglês.",
  "heimskringla": "Coleção de sagas dos reis da Noruega, escrita pelo islandês Snorri Sturluson por volta de 1230, quase 170 anos depois de Stamford Bridge.",
  "crônica anglo-saxônica": "Anais em inglês antigo, escritos por monges em vários mosteiros a partir do século IX. É a fonte inglesa mais próxima dos fatos de 1066.",
  "akinji": "Cavalaria leve irregular otomana, que ia à frente do exército para saquear, explorar o terreno e atrasar o inimigo.",
  "qizilbash": "Os 'cabeças vermelhas': guerreiros tribais turcomanos devotos dos xás safávidas, que usavam um barrete vermelho. Eram a cavalaria da dinastia.",
  "xiita": "Ramo do islã que segue os descendentes de Ali, genro do Profeta. Os safávidas o impuseram no Irã, onde virou a religião do Estado.",
  "murshid": "Guia espiritual de uma ordem sufi. Os qizilbash tratavam o xá Ismail como murshid: obedeciam a ele como a um mestre quase infalível.",
  "safávidas": "Dinastia persa fundada por Ismail I em 1501, em Tabriz. Governou o Irã até 1736 e fez do xiismo a religião do Estado.",
  "muralha de carroças": "Linha de carroças postas lado a lado e, às vezes, presas por correntes, que protegia atiradores e canhões contra a cavalaria.",
  "hussardos": "Cavalaria leve de origem húngara, usada para reconhecer o terreno, perseguir fugitivos e atacar a retaguarda inimiga.",
  "fogo de enfiada": "Tiro disparado ao longo da linha inimiga, de lado, e não de frente. Cada bala pode atingir vários soldados.",
  "coral luterano": "Hino cantado em alemão pelos fiéis da Igreja luterana, a religião da maioria dos soldados prussianos.",
  "silésia": "Província rica do centro da Europa, hoje no sudoeste da Polônia. A Prússia a tomou da Áustria em 1740.",
  "marechal de campo": "O posto mais alto do exército prussiano e do austríaco, equivalente a marechal."
});

Object.assign(DEEP, {
  philippi: {
    war: "Guerra civil dos libertadores (43–42 a.C.)",
    hook: "Duas batalhas, vinte dias de intervalo e dois suicídios: assim a República Romana perdeu a última chance de voltar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 15 de março de 44 a.C., um grupo de senadores liderado por Brutus e Cássio matou Júlio César, que se tornara ditador vitalício. Eles se viam como [[libertadores]] de um tirano e esperavam que Roma voltasse a ser uma república. Não voltou. O povo gostava de César, e seus soldados também.",
        "Quem herdou a causa foi Otaviano, sobrinho-neto e filho adotivo de César, com cerca de 20 anos, e Marco Antônio, o lugar-tenente dele, um soldado experiente. Em novembro de 43 a.C. os dois se uniram a Lépido no [[triunvirato]] e ordenaram [[proscrições]] contra os inimigos. Cícero foi uma das vítimas. Enquanto isso, Brutus e Cássio tomaram o Oriente, juntaram dinheiro e montaram um exército de 17 legiões.",
        { h: "O caminho até Filipos" },
        { timeline: [
          ["15 de março de 44 a.C.", "Júlio César é assassinado no Senado."],
          ["Novembro de 43 a.C.", "Antônio, Otaviano e Lépido formam o triunvirato e começam as proscrições."],
          ["Verão de 42 a.C.", "Os triúnviros atravessam o Adriático com 28 legiões. Brutus e Cássio os esperam na Macedônia."],
          ["3 de outubro", "Primeira batalha de Filipos."],
          ["23 de outubro", "Segunda batalha de Filipos."]
        ]},
        "A situação era esta: os libertadores dominavam o mar, com uma frota de cerca de 130 navios sob Domício Aenobarbo, e podiam esperar. Os triúnviros, com o abastecimento ameaçado pelo mar, precisavam de uma batalha rápida."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Brutus, cerca de 43 anos" },
        "Filósofo, de família que se dizia descendente do fundador da República. César o tinha perdoado depois de uma guerra civil e, mesmo assim, ele o matou, por princípio. Era honesto e idealista, mas não era o melhor soldado do seu exército. Plutarco o mostra dizendo que se sentia mais comandado do que comandando, pressionado pelos oficiais.",
        { h: "Cássio" },
        "Cunhado de Brutus e o mais experiente dos dois na guerra. Sua morte, no fim do primeiro dia, tirou a segurança do exército.",
        { h: "Marco Antônio, cerca de 41 anos" },
        "Veterano de César e o verdadeiro comandante militar dos triúnviros. Foi ele quem tomou a decisão ousada da calçada pelo pântano. Filipos foi o auge da sua carreira.",
        { h: "Otaviano, cerca de 20 anos" },
        "Doente durante a campanha, ficou para trás em Dirráquio. Chegou a Filipos, mas não foi o herói da batalha. Em suas memórias, falou de um sonho que o teria avisado, e Plínio diz que ele se escondeu no pântano. Seria, mais tarde, Augusto, o primeiro imperador."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes antigas não dão totais. Segundo Apiano, os triúnviros tinham 19 legiões quase completas e cerca de 13.000 cavaleiros. Os libertadores tinham 17 legiões, 8 de Brutus e 9 de Cássio, e cerca de 20.000 cavaleiros, entre eles 5.000 arqueiros a cavalo do Oriente. O historiador moderno Adrian Goldsworthy acha que, na prática, cada lado teria entre 40.000 e 50.000 legionários, porque as legiões não estavam completas. As estimativas gerais variam de 53.000 a 108.000 para os triúnviros e de 60.000 a 105.000 para os libertadores.",
        { note: "Os números são o ponto mais incerto da batalha. Mostramos as legiões que as fontes citam e as faixas dos historiadores modernos." },
        { h: "O terreno" },
        "A planície a cerca de 3,5 km a oeste de Filipos, cortada ao meio pela [[via egnatia]]. Os libertadores ficaram nas colinas, com um pântano tido como intransponível ao sul e as colinas ao norte, e cercaram o acampamento com valos e muros. Brutus ficou ao norte da estrada, Cássio ao sul. Os triúnviros ficaram na planície: Otaviano ao norte, Antônio ao sul. Antônio ofereceu batalha várias vezes, e os libertadores, que podiam esperar, recusaram.",
        { h: "A primeira batalha, 3 de outubro" },
        { formation: true },
        "Primeiro, Antônio resolveu forçar a situação. Em segredo, abriu uma calçada através do pântano, para cair sobre o flanco de Cássio. Cássio percebeu, levou parte do exército para o sul e construiu um muro transversal para cortar a calçada.",
        "Segundo, Antônio atacou o muro. Rompeu a linha e tomou o acampamento de Cássio. Os homens de Cássio que tinham avançado para o sul foram repelidos.",
        "Terceiro, na outra ponta da linha, as tropas de Brutus, provocadas pelos soldados de Otaviano, atacaram antes do sinal combinado, que era a palavra 'Liberdade'. Deu certo: os soldados de Otaviano fugiram. Messala, um oficial de Brutus, tomou o acampamento de Otaviano, e três legiões perderam seus estandartes. Otaviano não estava na tenda.",
        "Quarto, a poeira e o tamanho do campo impediram que as duas alas se vissem. Cássio, de uma colina, achou que tinha sido derrotado e que Brutus também. Segundo Plutarco, ele mandou o amigo Titínio verificar se os cavaleiros que se aproximavam eram aliados; de longe, viu Titínio cercado e achou que fora capturado. Mandou o [[liberto]] Píndaro matá-lo. Titínio voltou, encontrou o corpo e se matou também. Brutus o chamou de 'o último dos romanos' e evitou um funeral público, para não abater o moral do exército.",
        "As perdas do dia, segundo as fontes, foram de cerca de 8.000 homens do lado de Cássio e 16.000 do de Otaviano.",
        { h: "Vinte dias" },
        "No mesmo dia da primeira batalha, a frota dos libertadores interceptou e destruiu reforços dos triúnviros, comandados por Domício Calvino. Brutus talvez nem soubesse. Antônio avançou devagar para o sul e fortificou uma colina perto do antigo acampamento de Cássio. Brutus alongou a linha, mas ficou com o flanco leste fraco. Havia deserções de aliados orientais e de mercenários. Depois da primeira batalha, ele tinha prometido mais 1.000 denários a cada soldado, mas as tropas estavam inquietas. Na tarde de 23 de outubro, atacou.",
        { h: "A segunda batalha, 23 de outubro" },
        "Foi um combate corpo a corpo, sobretudo de espadas. Segundo Dião Cássio, quase não se usaram armas de arremesso. A ala de Brutus rompeu a esquerda dos triúnviros e a perseguiu. Mas o centro, fino, cedeu ao primeiro choque, e os triúnviros viraram contra o flanco e a retaguarda de Brutus. As reservas dele não chegaram a tempo, e os soldados de Otaviano tomaram os portões do acampamento. Brutus fugiu para as colinas com cerca de quatro legiões de homens."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Com a derrota inevitável, Brutus se matou, ajudado por um amigo, Estratão, segundo Plutarco. Dião Cássio conta que ele citou uma tragédia grega, dizendo que a Virtude era só um nome. Antônio cobriu o corpo dele com seu manto de púrpura. Morreram também muitos jovens aristocratas, entre eles o filho de Catão, o Jovem. Alguns nobres, como Bíbulo e Messala, se renderam a Antônio. Cerca de 14.000 soldados libertadores foram incorporados ao exército dos vencedores. A estimativa mais citada para os dois combates é de cerca de 40.000 mortos, sem dividir por batalha.",
        { h: "Por que importa" },
        "A república perdeu seu último exército capaz de defendê-la. Os triúnviros seguiram caminhos separados: Antônio ficou com o Oriente, que o levaria a Cleópatra, e Otaviano voltou à Itália para assentar os veteranos. Filipos virou uma [[colônia de veteranos]]. Em 31 a.C., Otaviano derrotaria Antônio em Áccio e, em 27 a.C., viraria Augusto.",
        { h: "Curiosidades e controvérsias" },
        { note: "Segundo Plutarco, Brutus viu duas vezes um espectro, que lhe disse que era o seu mau espírito e que o veria em Filipos. É tradição literária, não fato verificado." },
        { note: "O que aconteceu com Otaviano no primeiro dia é discutido. Plínio diz que ele se escondeu no pântano; as memórias dele falam de um sonho que o avisou." },
        { note: "As fontes principais, Apiano, Plutarco e Dião Cássio, escreveram de 140 a 260 anos depois e se contradizem em detalhes, como os números e o que Cássio viu da sua colina." }
      ]}
    ]
  },

  stamfordbridge: {
    war: "Invasões de 1066: a crise da sucessão inglesa",
    hook: "Três semanas antes de Hastings, um rei inglês cavalgou cerca de 300 quilômetros para destruir um exército viking.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 5 de janeiro de 1066, morreu Eduardo, o Confessor, rei da Inglaterra, sem filhos. No dia seguinte Haroldo Godwinson, o homem mais poderoso do reino, foi coroado. Mas tinha rivais. O duque Guilherme da Normandia dizia que Eduardo lhe prometera o trono. E Haroldo Hardrada, rei da Noruega, alegava um direito que vinha de um acordo antigo entre antecessores dele e o rei da Dinamarca e Inglaterra.",
        "Havia ainda um terceiro ator, o irmão de Haroldo, Tostig. Governava a Nortúmbria como [[earl]], mas foi expulso pelos nortenhos em 1065 e, como Haroldo não o apoiou, ficou exilado. Passou o início de 1066 atacando a costa inglesa e acabou se aliando a Hardrada.",
        { h: "O caminho até Stamford Bridge" },
        { timeline: [
          ["5 de janeiro de 1066", "Morre Eduardo, o Confessor. Haroldo é coroado."],
          ["Verão", "Haroldo espera, no sul, a invasão de Guilherme."],
          ["Setembro", "Hardrada e Tostig desembarcam em Riccall, perto de York, com uma frota de cerca de 300 navios (número da crônica)."],
          ["20 de setembro", "Os noruegueses vencem os condes Edwin e Morcar em Fulford, perto de York. York se rende."],
          ["25 de setembro", "Haroldo chega de surpresa a Stamford Bridge."]
        ]},
        "Os noruegueses esperavam reféns e provisões da região de York, e marcaram o encontro em Stamford Bridge. Haroldo, que estava no sul esperando Guilherme, soube do desembarque e cavalgou para o norte, cerca de 185 milhas (quase 300 km) em quatro dias."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Haroldo Godwinson, cerca de 44 anos" },
        "Filho do conde Godwin, era [[earl]] de Wessex e, desde janeiro, rei. A marcha ao norte foi tão rápida que pegou o inimigo desprevenido. Esperava o ataque do sul e teve de decidir, quase sem tempo, qual perigo era maior. Escolheu bater em Hardrada primeiro.",
        { h: "Haroldo Hardrada, cerca de 51 anos" },
        "O apelido quer dizer 'governante duro'. Passou anos na guarda varegue do imperador de Bizâncio e foi um dos guerreiros mais famosos do norte. Era um comandante experiente, mas, em Stamford Bridge, foi surpreendido.",
        { h: "Tostig Godwinson" },
        "O irmão rebelde. Segundo a saga, recebeu antes da luta uma oferta de reconciliação (veja as controvérsias, no fim) e a recusou, preferindo ficar com Hardrada. Morreu na batalha.",
        { h: "Os outros nomes" },
        "Eystein Orre, um dos chefes noruegueses, comandava os homens deixados com os navios, em Riccall. Os condes Edwin e Morcar, derrotados em Fulford, não estavam em Stamford Bridge."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os historiadores calculam entre 7.000 e 9.000 noruegueses, contando reforços das Órcades. A Crônica Anglo-Saxônica diz que a frota tinha 300 navios; Snorri Sturluson, mais de 200 navios de guerra, fora os de carga. Os autores podem ter contado transportes junto com navios de guerra, e por isso os números dos navios são mais inseguros que os de homens. Dos ingleses não há total confiável.",
        { note: "Parte do exército norueguês, Orre com ela, estava a cerca de 16 milhas (25 km) dali, nos navios, em Riccall. Por isso, em Stamford Bridge lutou só uma parte dele." },
        { h: "O terreno" },
        "Stamford Bridge, no leste de Yorkshire, onde uma ponte cruza o rio Derwent. Os ingleses vieram de York. A Crônica diz que a luta foi 'além da ponte', mas Charles Plummer sugeriu que isso é escrito do ponto de vista dos noruegueses, e Henrique de Huntingdon também coloca a luta a oeste. O local exato é desconhecido: achados de detectores de metal, perto de Low Catton, ainda não foram confirmados.",
        { h: "A batalha" },
        { formation: true },
        "Primeiro, a surpresa. Os noruegueses não sabiam que Haroldo estava perto. Segundo a saga, muitos tinham deixado a armadura nos navios, por causa do calor.",
        "Segundo, a ponte. A chegada dos ingleses foi retardada ali, o que deu tempo aos noruegueses para formar uma [[parede de escudos]]. A Crônica Anglo-Saxônica e Henrique de Huntingdon contam que um único norueguês barrou a ponte e matou vários ingleses, até um deles o atacar de baixo, por entre as tábuas. É lenda.",
        "Terceiro, os ingleses atravessaram, formaram seu próprio muro de escudos e atacaram. A saga de Snorri descreve a formação dos noruegueses em círculo e diz que Haroldo atacou com cavalaria. Segundo a mesma saga, os noruegueses, na pressa, quebraram a formação para perseguir os que recuavam.",
        "Quarto, a morte do rei. Hardrada foi atingido por uma flecha na garganta e morreu. Tostig também caiu.",
        "Quinto, a corrida de Orre. Os homens de Eystein Orre vieram correndo dos navios, em armas, e atacaram os ingleses numa investida que a tradição norueguesa chama de 'tempestade de Orre'. Alguns, segundo a saga, morreram de cansaço ao chegar. Detiveram os ingleses por um tempo, mas Orre morreu, e os noruegueses foram dispersados. Fugitivos se afogaram nos rios, segundo a Crônica.",
        { h: "O fim do dia" },
        "Haroldo aceitou uma trégua com os sobreviventes, entre eles Olavo, filho de Hardrada, e Paulo Thorfinnsson, conde das Órcades, que prometeram não atacar a Inglaterra de novo. Segundo a Crônica, bastaram 24 navios para levá-los de volta, dos mais de 300 que tinham vindo."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os noruegueses perderam entre 6.000 e 8.000 homens, mortos ou desaparecidos, segundo estimativas modernas. Não se sabe quantos ingleses morreram. Os sobreviventes passaram o inverno nas Órcades, e Olavo voltou à Noruega na primavera. Foi a última grande invasão norueguesa da Inglaterra, e alguns historiadores veem Stamford Bridge como o fim simbólico da Era Viking.",
        "Mas Haroldo não teve tempo de comemorar. Em 28 de setembro, três dias depois, Guilherme desembarcou em Pevensey, no sul. Haroldo marchou de volta. Em 14 de outubro, 19 dias depois de Stamford Bridge, foi derrotado e morto em Hastings.",
        { h: "Por que importa" },
        "A pergunta é se o esforço das semanas anteriores custou Hastings a Haroldo. Os historiadores se dividem: o exército perdeu homens e chegou cansado, mas Hastings foi uma batalha disputada o dia inteiro. De qualquer forma, o resultado foi um dos cortes mais profundos da história inglesa: a conquista normanda.",
        { h: "Curiosidades e controvérsias" },
        { note: "A oferta ao irmão: segundo Snorri Sturluson, antes da luta um cavaleiro (que seria Haroldo) ofereceu a Tostig o antigo condado dele. Quando perguntaram o que Hardrada ganharia, respondeu: seis pés de terra. É a [[saga]], escrita muito tempo depois, e é lenda." },
        { note: "Os ossos: Orderic Vitalis, que escreveu décadas depois, diz que o campo ainda estava coberto de ossos. Ele pode estar repetindo uma tradição." },
        { note: "As fontes: a [[crônica anglo-saxônica]] (versões C, D e E) é a mais próxima dos fatos; a [[heimskringla]], de Snorri, foi escrita por volta de 1230 e mistura história e lenda." }
      ]}
    ]
  },

  nicopolis: {
    war: "Cruzada de Nicópolis (1396)",
    hook: "A última grande cruzada da Idade Média foi perdida numa discussão sobre quem entraria primeiro na batalha.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois da batalha do Kosovo, em 1389, os otomanos dominavam a maior parte dos Bálcãs. Em 1394 o sultão Bayezid I começou a cercar Constantinopla, e a fortaleza búlgara de Nicópolis, no Danúbio, era dele desde 1393. A Hungria ficava logo ao norte, e o rei húngaro, Sigismundo, pediu ajuda à Europa.",
        "O papa Bonifácio IX proclamou uma [[cruzada]] em 1394, embora a Igreja estivesse dividida pelo Cisma do Ocidente. A expedição foi movida sobretudo pelo duque de Borgonha, Filipe, o Ousado, que queria prestígio, e atraiu centenas de nobres franceses. Borgonha e os duques de Orléans e de Lancaster acabaram ficando em casa. O comando passou ao filho de Filipe, João, conde de Nevers, de cerca de 25 anos, com Enguerrand de Coucy como conselheiro principal.",
        { h: "O caminho até Nicópolis" },
        { timeline: [
          ["1394", "O papa proclama a cruzada."],
          ["30 de abril de 1396", "Os cruzados franceses saem de Dijon."],
          ["Verão", "Descem o Danúbio por Buda. Vidin se rende; Oryahovo é saqueada mesmo depois de se render."],
          ["12 de setembro", "Chegam a Nicópolis e a cercam."],
          ["25 de setembro", "Bayezid chega, e a batalha acontece."]
        ]},
        "Os cruzados não tinham máquinas de cerco e tentaram vencer o governador Doğan Bey pela fome. Também não posicionaram sentinelas. Enquanto isso, Bayezid marchava de Adrianópolis pela passagem de Shipka."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Sigismundo de Luxemburgo, cerca de 28 anos" },
        "Rei da Hungria desde 1387, conhecia o exército turco, que atacava suas fronteiras. Propôs um plano simples: os soldados valáquios, que enfrentavam os turcos havia anos, iriam na frente, e os cavaleiros franceses ficariam atrás, como segunda linha. Os franceses recusaram. Mais tarde Sigismundo seria imperador do Sacro Império.",
        { h: "João de Nevers e os franceses" },
        "João era jovem e estava ali para ganhar fama. O peso do comando estava com os veteranos: Filipe d'Eu, [[condestável]] da França, Jean le Maingre, o 'Boucicaut', [[marechal]], e o almirante Jean de Vienne. A cadeia de comando era confusa, e isso foi um fator importante na derrota.",
        { h: "Bayezid I" },
        "O sultão otomano, chamado 'Yıldırım', o Raio. Tinha vencido vários vizinhos e chegou em marcha rápida. Entre os vassalos dele estava o príncipe sérvio Stefan Lazarević, seu cunhado.",
        { h: "Os outros nomes" },
        "Mircea I, príncipe da Valáquia, aliado de Sigismundo. Philibert de Naillac, grão-mestre dos [[hospitalários]], que lutou ao lado dos húngaros."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Ninguém sabe quantos eram. Johann Schiltberger, que estava lá, com 16 anos, e foi capturado, fala em 16.000 a 17.000 cruzados contra 200.000 turcos. O cronista otomano Şükrullah, na década de 1460, dá 130.000 cruzados contra 60.000 turcos. Historiadores alemães do século XIX calcularam entre 7.500 e 15.000 cruzados e entre 12.000 e 20.000 otomanos. David Nicolle propõe 16.000 contra 15.000. O contingente francês teria cerca de 5.000 cavaleiros e escudeiros e 6.000 arqueiros e soldados a pé. Do lado otomano havia cerca de 1.500 cavaleiros sérvios de Stefan.",
        { note: "Os números dos cronistas medievais, nos dois lados, são provavelmente muito exagerados. Usamos as estimativas modernas." },
        { h: "O terreno" },
        "Os cruzados estavam diante das colinas, com Nicópolis e o Danúbio atrás. Os otomanos desceram do sul. A encosta e o planalto no alto foram o cenário da carga francesa.",
        { h: "O conselho de guerra, 24 de setembro" },
        "Na véspera, Sigismundo e Mircea propuseram o plano dos valáquios na frente. O condestável d'Eu recusou, por achar a ideia desonrosa para cavaleiros franceses, e exigiu a vanguarda.",
        { h: "A batalha" },
        { formation: true },
        "Primeiro, na manhã do dia 25, Sigismundo pediu duas horas para observar a vanguarda inimiga. D'Eu o acusou de querer guardar a glória para si e avançou. Vienne e Coucy pediram prudência e foram ignorados.",
        "Segundo, os franceses, com os arqueiros montados, investiram sozinhos contra os otomanos que desciam do sul. Passaram por cima da primeira linha, de soldados convocados, que fugiu.",
        "Terceiro, atrás dessa linha, escondida pelos [[akinji]], havia uma [[paliçada]] de estacas afiadas na altura do peito dos cavalos, com arqueiros dos [[janízaros]] atrás, segundo uma das fontes. As estacas e as flechas derrubaram muitos cavalos.",
        "Quarto, os franceses subiram a pé o resto da encosta e chegaram, exaustos, ao planalto. Ali encontraram a reserva de Bayezid, os [[sipahis]], que os atacaram com trombetas e tambores. Vienne morreu, e Nevers foi capturado depois que a guarda dele pediu pela sua vida. Os franceses se renderam.",
        "Quinto, os sipahis envolveram os flancos dos aliados. Transilvanos e valáquios se retiraram. A tropa de Stefan Lazarević, de 1.500 cavaleiros sérvios, reforçou os turcos num momento decisivo.",
        "Sexto, Sigismundo, o mestre dos hospitalários e as tropas alemãs lutaram até o fim. O rei fugiu de barco pelo Danúbio para os navios venezianos, enquanto a tropa de Hermann de Cilli cobria sua fuga. A rendição de Garai ajudou a pôr fim à luta."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A maior parte do exército cruzado morreu ou foi capturada. Muitos que fugiram se afogaram no Danúbio ou morreram de fome no caminho. Na manhã do dia 26, Bayezid mandou trazer os prisioneiros. O cavaleiro francês Jacques de Helly identificou os nobres que valiam [[resgate]]. Vários milhares de prisioneiros comuns foram amarrados e executados em grupos, da manhã até o fim da tarde, em vingança, segundo as fontes, pelo massacre dos reféns de Oryahovo. As estimativas vão de 300 a 3.000 execuções, e algumas fontes falam em até 10.000.",
        "Jacques de Helly levou a notícia a Paris no Natal de 1396. Os franceses negociaram um resgate de 200.000 florins de ouro, e uma entrada de 75.000 libertou os nobres em 24 de junho de 1397. Coucy morreu antes, em fevereiro, e d'Eu também.",
        { h: "Por que importa" },
        "A derrota acabou com a esperança de uma cruzada capaz de expulsar os otomanos da Europa. A Europa ocidental só voltaria a enfrentá-los a sério nos Bálcãs na década de 1440. O que restava da Bulgária independente acabou: o último czar, Ivan Sratsimir, foi capturado. Bayezid seria derrotado por Tamerlão em 1402, e seu império quase desabou.",
        { h: "Curiosidades e controvérsias" },
        { note: "Culpa: Sigismundo culpou o orgulho dos franceses. O cronista Froissart comparou a derrota à de Roncesvales. O historiador holandês Huizinga a viu como resultado de uma 'aventura de cavalaria' inadequada à política." },
        { note: "Segundo a Chronica Hungarorum, Sigismundo se gabou de que os húngaros segurariam o céu se ele caísse. É a tradição; a frase não é verificável." },
        { note: "A tradição sérvia retrata o nobre Vuk Branković, que lutou ao lado dos cristãos, como um traidor, um 'Judas'. É folclore." },
        { note: "Muitas histórias sobre bebedeira e imoralidade no acampamento cruzado vêm de cronistas hostis e não são verificáveis. A presença de 3.000 cavaleiros ingleses, que alguns autores citam, é improvável; talvez fossem apenas hospitalários da 'língua' inglesa." }
      ]}
    ]
  },

  chaldiran: {
    war: "Guerras otomano-safávidas (1514–1555)",
    hook: "Uma cavalaria acostumada a vencer foi de encontro aos canhões. O resultado mudou o mapa do Oriente Médio.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1501, o jovem Ismail, de cerca de 14 anos, proclamou-se xá em Tabriz e fez do islã [[xiita]] a religião oficial do Irã. Fundou a dinastia dos [[safávidas]]. Seus soldados, os [[qizilbash]], eram guerreiros turcomanos que o viam não só como rei, mas como [[murshid]], um mestre espiritual. Ismail vinha de uma série de vitórias, e a fama de invencível ajudava.",
        "O problema é que muitos qizilbash e simpatizantes viviam na Anatólia, dentro do Império Otomano, sunita. Em 1512, Selim I tomou o trono otomano depois de afastar o pai e vencer os irmãos. Viu nos safávidas uma ameaça política e religiosa. Segundo as fontes, mandou matar cerca de 40.000 qizilbash na Anatólia, número provavelmente exagerado, e obteve um parecer religioso que declarava Ismail e os qizilbash hereges.",
        { h: "O caminho até Chaldiran" },
        { timeline: [
          ["1501", "Ismail se proclama xá em Tabriz."],
          ["1512", "Selim I chega ao trono otomano."],
          ["Primavera de 1514", "Selim marcha para o leste com um grande exército."],
          ["23 de agosto de 1514", "Batalha de Chaldiran."],
          ["7 de setembro", "Selim entra em Tabriz."]
        ]},
        "Ismail evitou o combate e deixou a terra queimada pelo caminho, enquanto os uzbeques de Bukhara atacavam o leste do seu reino. Os otomanos sofreram com a falta de comida e o terreno difícil das montanhas armênias, e muitos soldados relutavam em lutar contra outros muçulmanos. Os janízaros chegaram a atirar contra a tenda do sultão em protesto. Selim, ao saber que os safávidas estavam em Chaldiran, avançou depressa, em parte para acabar com o descontentamento."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Selim I, mais de 40 anos" },
        "Chamado depois de 'Yavuz', o Severo. Tomou o poder pela força e era visto pelos seus como um escolhido por Deus. Mandou a Ismail uma carta que misturava a reivindicação do califado com acusações de heresia. Levou entre 100 e 200 canhões.",
        { h: "Ismail I, cerca de 26 anos" },
        "Jovem, carismático e confiante depois de uma série de vitórias. Para os qizilbash, era quase um santo. Segundo relatos iranianos, ele e seus homens consideravam as armas de fogo uma arma covarde, e isso pesou no resultado.",
        { h: "Os outros nomes" },
        "Do lado otomano, comandantes como Bıyıklı Mehmed Paxá e Dukaginzade Ahmed Paxá; Hasan Paxá morreu na batalha. Do lado safávida, Durmish Khan Shamlu, Nur-Ali Khalifa e Muhammad Khan Ustajlu, que morreu. As fontes divergem sobre a função de cada um e sobre quem comandava cada ala."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As estimativas são vagas. Os números mais citados dão de 60.000 a 100.000 otomanos, com 100 a 200 canhões e cerca de 100 morteiros, e de 40.000 a 80.000 safávidas, sem artilharia. Algumas fontes iranianas dão números menores, perto de 20.000 safávidas.",
        { note: "Os números variam muito entre fontes otomanas, iranianas e europeias. Não há total aceito por todos. Mostramos as faixas." },
        { h: "O terreno" },
        "A planície de Chaldiran, no noroeste do atual Irã, perto de Maku. Era terreno aberto, bom para a cavalaria. Selim se posicionou numa colina, no centro do exército.",
        { h: "O dia da batalha" },
        "Segundo os relatos safávidas, Muhammad Khan Ustajlu e Nur-Ali Khalifa pediram para atacar logo, antes de os otomanos, cansados, descansarem e se organizarem. Durmish Khan chamou a ideia de covardia, e Ismail concordou. Os otomanos ganharam tempo para se preparar.",
        { h: "A batalha" },
        "Os otomanos puseram a artilharia e milhares de [[janízaros]] com [[armas de fogo|arcabuz]] atrás de uma barreira de carroças. Historiadores iranianos falam numa [[muralha de carroças]] presa por correntes; outras fontes mencionam uma trincheira rasa. Na frente ficava a infantaria irregular. Os safávidas confiavam na cavalaria com arcos e maças. Atacaram as alas, para evitar a artilharia do centro.",
        "Segundo uma das versões, o ataque começou bem: Ismail, à frente da ala direita, teria rompido a ala esquerda otomana e avançado em direção à retaguarda. Mas a ala esquerda dele foi destroçada pelo fogo de canhão, e o centro e a direita também cederam. As fontes se contradizem sobre qual ala era qual, e por isso não mostramos um diagrama.",
        "A [[artilharia]] otomana, mais móvel do que se esperava, e as armas de fogo dos janízaros foram o fator decisivo. A cavalaria safávida sofreu perdas enormes.",
        "Ismail foi ferido, e seu cavalo atolou. Segundo relatos safávidas, um qizilbash parecido com ele, Mirza Sultan Ali, se passou pelo xá, e um homem coxo, Khidr Aqa, deu o cavalo ao rei. Ismail fugiu por Tabriz para Darjazin.",
        "Selim, desconfiando de uma armadilha, não deixou perseguir. Os otomanos só saquearam o acampamento safávida depois do anoitecer."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas são muito discutidas. A maioria das fontes iranianas fala em cerca de 5.000 mortos no total, 3.000 otomanos e 2.000 safávidas. Alguns pesquisadores turcos falam em 30.000 otomanos e o dobro de iranianos, número que parece improvável.",
        "Em 7 de setembro, Selim entrou em Tabriz, saqueou o tesouro e levou artesãos para Istambul. Cerca de uma semana depois partiu: os janízaros estavam descontentes, e ele não podia ir mais longe. Cavaleiros leves georgianos atormentaram a retirada. Ismail perdeu duas esposas e o harém para Selim.",
        { h: "Por que importa" },
        "Os otomanos anexaram o leste da Anatólia e parte da Alta Mesopotâmia. O controle mudou de mãos várias vezes, até a Paz de Amásia, em 1555, e a fronteira só se firmou em 1639. A batalha abriu 41 anos de guerra entre os dois impérios. O prestígio de Ismail como líder infalível sofreu. Ele se afastou dos negócios do Estado e não liderou mais nenhuma campanha. Os safávidas passaram a usar armas de fogo, e seu filho Tahmasp usaria canhões. Os mamelucos do Egito se recusaram a congratular Selim, que se voltou contra eles em 1516 e conquistou o Egito em 1517. Vários chefes curdos mudaram de lado, dos safávidas para os otomanos.",
        { h: "Curiosidades e controvérsias" },
        { note: "Segundo relatos posteriores, Ismail passou a beber e ficou abatido, e ninguém mais o viu sorrir depois da batalha. Não é verificável." },
        { note: "Fontes iranianas dizem que Selim prometeu não usar artilharia e quebrou a promessa. É um relato de um lado só e não foi confirmado por outras fontes." },
        { note: "Conta-se que Selim mandou cortar o nariz dos enviados de Ismail que foram buscar a esposa capturada, casada com um juiz otomano. Não há confirmação independente." },
        { note: "Os relatos mais antigos incluem notícias venezianas e uma crônica judaica, que não concordam com as versões otomana e safávida em vários detalhes." }
      ]}
    ]
  },

  leuthen: {
    war: "Guerra dos Sete Anos (1756–1763)",
    hook: "Com metade dos homens, Frederico, o Grande, fingiu atacar por um lado e bateu pelo outro. É uma das batalhas mais estudadas da história militar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1740, Frederico II da Prússia tomou da Áustria a rica província da [[silésia]]. A paz de 1748 confirmou a conquista, mas a imperatriz Maria Teresa não aceitou. Em 1756 começou a Guerra dos Sete Anos, com a Prússia, pequena e pobre, contra Áustria, França e Rússia ao mesmo tempo.",
        "No fim de 1757 a situação de Frederico parecia perdida. Em 5 de novembro, porém, ele derrotou franceses e imperiais em Rossbach. Enquanto isso, o príncipe Carlos de Lorena tinha tomado Schweidnitz e Breslau, na Silésia, e vencido os prussianos que estavam lá, em 22 de novembro.",
        { h: "O caminho até Leuthen" },
        { timeline: [
          ["5 de novembro", "Frederico vence em Rossbach."],
          ["22 de novembro", "Os austríacos tomam Breslau e vencem os prussianos da Silésia."],
          ["Fim de novembro", "Frederico marcha cerca de 274 km em 12 dias e reúne o que restava do exército da Silésia."],
          ["5 de dezembro", "Batalha de Leuthen."]
        ]},
        "Antes da batalha, Frederico reuniu os generais no acampamento de Parchwitz e fez um discurso, em que teria dito que atacaria os austríacos mesmo em posição forte. O texto foi registrado depois, e as palavras variam. É uma tradição famosa: o pintor Adolph von Menzel começou um grande quadro do momento."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Frederico II, 45 anos" },
        "Rei e general ao mesmo tempo. Sua grande aposta em Leuthen foi mover um exército pequeno com tanta velocidade e disciplina que o inimigo não conseguisse reagir. Segundo a Wikipédia alemã, ele estimava o adversário em apenas 39.000 homens, quando eram mais de 65.000.",
        { h: "Carlos de Lorena e Daun" },
        "O príncipe Carlos, cunhado de Maria Teresa, comandava o exército, com o marechal Leopold von Daun a seu lado. Seu erro foi acreditar na falsa ameaça ao flanco direito e não vigiar o esquerdo. Depois da batalha, foi substituído por Daun e acabou governador dos Países Baixos austríacos.",
        { h: "Os outros nomes" },
        "Do lado prussiano: o príncipe Moritz de Anhalt-Dessau, que comandava a infantaria e virou [[marechal de campo]] naquela noite; Hans Joachim von Zieten, da cavalaria; Wedell, que liderou o primeiro ataque; Driesen, que comandou a cavalaria na hora decisiva; e Möllendorff, com a Guarda. Do lado austríaco: Franz Leopold von Nádasdy e o general de cavalaria Joseph Lucchesi, que morreu na batalha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os prussianos eram cerca de 33.000 a 36.000, com 167 canhões, conforme a fonte. Os austríacos eram cerca de 65.000 a 66.000, com 210 a 250 canhões, também conforme a fonte. A artilharia pesada austríaca ficara em Breslau.",
        { h: "O terreno" },
        "Uma planície ondulada e fértil, com pouco desnível, solo mole e alguns brejos. Colinas baixas, como o Schleierberg e o Sophienberg, escondiam os movimentos prussianos. Os austríacos formaram uma linha de quase 9 km, de Nypern, ao norte, até Sagschütz, ao sul, com a aldeia de Leuthen no centro. Carlos instalou o posto de comando na torre da igreja de Leuthen. Os prussianos vinham do oeste, pela estrada de Neumarkt a Breslau.",
        { h: "A batalha em nove movimentos" },
        { formation: true },
        "Primeiro, os prussianos avançaram até Borne e derrotaram a tropa austríaca que estava lá. Depois, Frederico subiu numa colina e viu a linha inimiga.",
        "Segundo, Frederico mandou parte da cavalaria e da infantaria fingir um ataque ao flanco direito austríaco, o mais forte. Carlos levou as reservas para lá, e a linha dele se esticou para quase 10 km.",
        "Terceiro, protegidos pela neblina e pelas colinas, os prussianos marcharam para o sul em colunas, fora da vista inimiga. Zieten ficou com a cavalaria perto de Radaxdorf.",
        "Quarto, por volta do meio-dia, eles viraram e se alinharam em duas linhas, em ângulo reto com o flanco esquerdo austríaco. Era a [[linha oblíqua]]: a ala que atacava chegava primeiro, e a outra ficava para trás.",
        "Quinto, Wedell atacou em direção a Sagschütz, com a cavalaria de Zieten ao lado, que venceu a cavalaria austríaca. Os württemberguenses, parte da primeira linha austríaca, resistiram por um tempo e então cederam, levando junto os bávaros. A artilharia pesada prussiana, no Butterberg, bombardeou a linha e, depois, as tropas em retirada com [[fogo de enfiada]].",
        "Sexto, Carlos tentou refazer a linha em torno de Leuthen, mas as manobras foram confusas. Os [[granadeiros]] e a Guarda de Möllendorff passaram pelo muro do cemitério e tomaram a igreja. A luta nas ruas foi corpo a corpo. O capitão Charles-Joseph de Ligne, do lado austríaco, escreveu que seu batalhão ficou com menos de 200 homens.",
        "Sétimo, os austríacos ainda se firmaram por um momento numa bateria na elevação ao norte, mas os canhões pesados prussianos do Butterberg a quebraram.",
        "Oitavo, o último lance. Lucchesi atacou com cerca de 70 [[esquadrões|esquadrão]] o flanco prussiano que parecia exposto. Driesen, que tinha mantido uns 50 esquadrões de reserva, atingiu o flanco de Lucchesi no fim da tarde, sem receber ordem. Os dragões de Bayreuth e os [[hussardos]] de Puttkamer também atacaram. Lucchesi morreu, segundo uma fonte secundária, por um tiro de canhão.",
        "Nono, a cavalaria austríaca, empurrada contra a própria infantaria, que levava ataques de [[baioneta]], desmanchou a linha inteira. A infantaria recuou para Breslau.",
        { h: "Depois da batalha" },
        "Frederico interrompeu a perseguição por causa da neve e descansou em Lissa, onde oficiais austríacos estavam reunidos no castelo. A cavalaria de Zieten seguiu o exército de Carlos até a Boêmia e pegou mais uns 2.000 prisioneiros."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os austríacos perderam cerca de 22.000 homens: 3.000 mortos, 7.000 feridos e 12.000 prisioneiros, além de 116 canhões e 51 bandeiras. O historiador Gaston Bodart calculou mais 17.000 perdidos por captura ou deserção. Os prussianos perderam 6.344: 1.141 mortos, 5.118 feridos e 85 capturados, e nenhum canhão. Dois generais prussianos morreram de ferimentos. Entre os austríacos, além de Lucchesi, morreram generais como Otterwolf e o príncipe Stolberg.",
        "Frederico sitiou Breslau, cuja guarnição de cerca de 17.000 homens se rendeu em 19 e 20 de dezembro. A Silésia voltou ao controle prussiano.",
        { h: "Por que importa" },
        "A vitória salvou a Prússia no inverno de 1757 e a manteve na guerra. Napoleão a elogiou mais tarde. Os militares a estudam por mostrar um comandante que engana o adversário, esconde o ponto de ataque e o atinge no flanco. A ideia não era nova (Epaminondas usara algo parecido em Leuctra, em 371 a.C.), mas Frederico a aplicou melhor que ninguém no século XVIII. Ajudaram o treinamento prussiano, que dava mais tiros por minuto, as carroças de munição que seguiam as linhas e a artilharia a cavalo.",
        { h: "Curiosidades e controvérsias" },
        { note: "O coral: segundo a tradição, depois da batalha o exército cantou o [[coral luterano]] 'Nun danket alle Gott' ('Agora agradeçam todos a Deus'). Os historiadores consideram a história apócrifa." },
        { note: "A piada de Lissa: diz a tradição que Frederico cumprimentou os oficiais austríacos no castelo com uma brincadeira educada, como se pedisse hospedagem. Não há registro contemporâneo seguro." },
        { note: "Os números: as fontes variam bastante. Alguns textos dão 33.000 prussianos, outros 36.000, e os canhões austríacos aparecem como 210 ou 250. Preferimos mostrar as faixas." },
        { note: "A coluna de Heidau, erguida em 1854 para lembrar a vitória, foi dinamitada depois da Segunda Guerra Mundial. Só restou o pedestal." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  philippi: {
    terrain: [
      { t: "hill", x: 84, y: 12, rx: 16, ry: 9, l: "Colinas (acampamento de Brutus)" },
      { t: "sea", x: 0, y: 60, w: 100, h: 10, l: "Pântano" },
      { t: "note", x: 8, y: 37, l: "Via Egnatia ⇄" },
      { t: "note", x: 92, y: 4, l: "Norte ↑" }
    ],
    units: [
      { id: "aOct", s: "a", k: "inf", w: 5, h: 22, l: "Otaviano" },
      { id: "aAnt", s: "a", k: "inf", w: 5, h: 18, l: "Antônio" },
      { id: "aCav", s: "a", k: "cav", w: 4, h: 14, l: "Cavalaria aliada" },
      { id: "aCamp", s: "a", k: "camp", w: 12, h: 5, l: "Acampamento de Otaviano" },
      { id: "aCause", s: "a", k: "inf", w: 12, h: 2.5, l: "Calçada de Antônio" },
      { id: "bBru", s: "b", k: "inf", w: 5, h: 22, l: "Brutus" },
      { id: "bCas", s: "b", k: "inf", w: 5, h: 18, l: "Cássio" },
      { id: "bWall", s: "b", k: "inf", w: 2.5, h: 12, l: "Muro de Cássio" },
      { id: "bCamp", s: "b", k: "camp", w: 12, h: 5, l: "Acampamento de Cássio" }
    ],
    steps: [
      { t: "Os libertadores ocupam as colinas, com o pântano ao sul. Os triúnviros ficam na planície: Otaviano ao norte da estrada, Antônio ao sul. Antônio oferece batalha, e Brutus e Cássio recusam.",
        p: { aOct: [30, 18], aAnt: [30, 46], aCav: [21, 32], aCamp: [12, 10], aCause: [26, 56], bBru: [64, 18], bCas: [64, 46], bWall: [78, 54], bCamp: [86, 40] } },
      { t: "Em segredo, Antônio abre uma calçada pelo pântano para atacar o flanco de Cássio.",
        p: { aCause: [40, 57], aAnt: [34, 46] } },
      { t: "Cássio vê a obra, leva parte do exército para o sul e levanta um muro transversal para cortar a calçada.",
        p: { bCas: [62, 48], bWall: [54, 56] } },
      { t: "Dia 3 de outubro: Antônio ataca o muro, atravessa-o e rompe a linha de Cássio.",
        p: { aAnt: [52, 52], aCause: [46, 57] }, x: ["bWall"] },
      { t: "Antônio toma o acampamento de Cássio. Os homens de Cássio que tinham avançado para o sul são empurrados de volta.",
        p: { aAnt: [76, 44], bCas: [68, 36] }, x: ["bCamp"] },
      { t: "No norte, as tropas de Brutus atacam antes do sinal combinado ('Liberdade'). Os soldados de Otaviano fogem, e Messala toma o acampamento deles. Otaviano não estava lá.",
        p: { bBru: [40, 18], aOct: [20, 20], aCav: [14, 32] }, x: ["aCamp"] },
      { t: "A poeira esconde cada ala da outra. Cássio acha que perdeu tudo e manda o liberto Píndaro matá-lo. Brutus recompõe o exército e recua para as colinas.",
        p: { bBru: [58, 18], bCas: [66, 40], aAnt: [70, 46] } },
      { t: "Vinte dias depois, com deserções e tropas inquietas, Brutus ataca. A ala dele, no norte, rompe a esquerda dos triúnviros e a persegue.",
        p: { aOct: [28, 14], bBru: [44, 20], aAnt: [38, 48], bCas: [58, 46], aCav: [16, 28] } },
      { t: "Mas o centro de Brutus, fino, cede ao primeiro choque. Os triúnviros viram contra o flanco e a retaguarda dele e tomam os portões do acampamento. Brutus foge para as colinas e se mata.",
        p: { aAnt: [52, 36], aOct: [52, 14], bBru: [76, 12], bCas: [64, 34] }, x: ["bCas"] }
    ]
  },

  stamfordbridge: {
    terrain: [
      { t: "sea", x: 46, y: 0, w: 5, h: 70, l: "Rio Derwent" },
      { t: "note", x: 38, y: 34, l: "Ponte" },
      { t: "note", x: 92, y: 4, l: "Norte ↑" }
    ],
    units: [
      { id: "eFyrd", s: "a", k: "inf", w: 6, h: 18, l: "Exército de Haroldo" },
      { id: "eHus", s: "a", k: "inf", w: 4, h: 8, l: "Huscarls" },
      { id: "eCav", s: "a", k: "cav", w: 5, h: 8, l: "Cavaleiros (segundo a saga)" },
      { id: "nHar", s: "b", k: "inf", w: 12, h: 12, l: "Hardrada: círculo de escudos" },
      { id: "nTos", s: "b", k: "inf", w: 5, h: 10, l: "Tostig" },
      { id: "nBridge", s: "b", k: "inf", w: 2.5, h: 2.5, l: "Defensor da ponte (lenda)" },
      { id: "nOrre", s: "b", k: "inf", w: 8, h: 8, l: "Eystein Orre" },
      { id: "nShips", s: "b", k: "camp", w: 14, h: 5, l: "Navios em Riccall" }
    ],
    steps: [
      { t: "25 de setembro. Haroldo chega de York, a oeste, sem ser esperado. Os noruegueses estão do outro lado do rio, muitos sem armadura, e parte do exército está nos navios, em Riccall.",
        p: { eFyrd: [10, 34], eHus: [18, 28], eCav: [18, 42], nHar: [68, 28], nTos: [76, 42], nBridge: [80, 10], nOrre: [84, 60], nShips: [88, 64] } },
      { t: "A ponte atrasa os ingleses. Segundo a Crônica, um único norueguês a segura e mata vários, até ser morto de baixo, por entre as tábuas. É lenda.",
        p: { nBridge: [48, 34], eFyrd: [32, 34], eHus: [38, 30], eCav: [34, 44], nHar: [62, 30] } },
      { t: "Os ingleses atravessam. Os noruegueses formam uma parede de escudos, que a saga descreve como um círculo.",
        p: { eHus: [54, 30], eFyrd: [46, 38], eCav: [52, 44], nHar: [64, 32], nTos: [72, 40] }, x: ["nBridge"] },
      { t: "Segundo a saga, a cavalaria inglesa ataca o círculo. Os noruegueses quebram a formação para perseguir os que recuam.",
        p: { eCav: [60, 36], nHar: [68, 36, 20], nTos: [74, 34] } },
      { t: "Hardrada é atingido por uma flecha na garganta e morre. Tostig também cai. Os ingleses avançam.",
        p: { eHus: [64, 32], eFyrd: [56, 38], nHar: [70, 38], nTos: [76, 36] } },
      { t: "Chega Orre, que corre de Riccall, a 16 milhas, em armas. A 'tempestade de Orre' detém os ingleses por um tempo.",
        p: { nOrre: [74, 48], eFyrd: [60, 40], eHus: [64, 34] } },
      { t: "Orre morre. Os noruegueses são dispersados, e muitos se afogam na fuga.",
        p: { eHus: [72, 36], eFyrd: [66, 40], eCav: [72, 48] }, x: ["nHar", "nTos", "nOrre"] },
      { t: "Haroldo oferece uma trégua aos sobreviventes. Bastam 24 navios (dos mais de 300) para levá-los de volta. Três dias depois, Guilherme desembarca no sul.",
        p: { nShips: [88, 62] } }
    ]
  },

  nicopolis: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 7, l: "Rio Danúbio" },
      { t: "hill", x: 58, y: 54, rx: 36, ry: 14, l: "Colinas e planalto" },
      { t: "note", x: 12, y: 12, l: "Nicópolis (cercada)" }
    ],
    units: [
      { id: "aFr", s: "a", k: "cav", w: 20, h: 5, l: "Cavaleiros franceses" },
      { id: "aHun", s: "a", k: "cav", w: 18, h: 5, l: "Húngaros, alemães e hospitalários (Sigismundo)" },
      { id: "aWal", s: "a", k: "cav", w: 14, h: 4, l: "Valáquios e transilvanos" },
      { id: "bAk", s: "b", k: "cav", w: 26, h: 3, l: "Akinji (cavalaria leve)" },
      { id: "bSt", s: "b", k: "inf", w: 24, h: 3, l: "Estacas e arqueiros" },
      { id: "bSip", s: "b", k: "cav", w: 16, h: 5, l: "Sipahis (reserva)" },
      { id: "bSer", s: "b", k: "cav", w: 12, h: 4, l: "Sérvios de Stefan Lazarević" }
    ],
    steps: [
      { t: "Os cruzados, com Nicópolis e o Danúbio atrás, esperam os turcos que vêm do sul. No conselho, Sigismundo quis pôr os valáquios na frente. O condestável francês recusou e exigiu a vanguarda.",
        p: { aFr: [46, 26], aHun: [72, 26], aWal: [22, 26], bAk: [50, 44], bSt: [50, 51], bSip: [48, 62], bSer: [78, 62] } },
      { t: "Os franceses avançam sozinhos e passam por cima dos soldados convocados que formam a primeira linha otomana, que foge.",
        p: { aFr: [48, 38] }, x: ["bAk"] },
      { t: "Atrás deles, os franceses encontram estacas afiadas, com arqueiros por trás. As flechas e as estacas derrubam muitos cavalos.",
        p: { aFr: [49, 47] } },
      { t: "Os franceses sobem a pé o resto da encosta e chegam exaustos ao planalto.",
        p: { aFr: [49, 56] } },
      { t: "No alto, encontram a reserva de Bayezid, os sipahis, que atacam com trombetas e tambores. O almirante Vienne morre, Nevers é capturado, e os franceses se rendem.",
        p: { aFr: [48, 58], bSip: [51, 58] }, x: ["aFr"] },
      { t: "Os sipahis envolvem os flancos dos aliados. Os transilvanos e valáquios se retiram.",
        p: { bSip: [64, 40, -30], aWal: [10, 16] }, x: ["aWal"] },
      { t: "A cavalaria sérvia de Stefan Lazarević reforça os turcos e ataca os húngaros e alemães, que lutam até o fim.",
        p: { bSer: [74, 38, -20], aHun: [74, 28] } },
      { t: "Sigismundo foge de barco pelo Danúbio para os navios venezianos. O exército cruzado está destruído. No dia seguinte, os prisioneiros comuns serão executados.",
        p: { aHun: [80, 8] }, x: ["aHun"] }
    ]
  },

  leuthen: {
    terrain: [
      { t: "hill", x: 24, y: 28, rx: 9, ry: 5, l: "Schleierberg e Sophienberg" },
      { t: "hill", x: 48, y: 40, rx: 6, ry: 4, l: "Butterberg" },
      { t: "note", x: 70, y: 6, l: "Nypern" },
      { t: "note", x: 70, y: 38, l: "Leuthen" },
      { t: "note", x: 70, y: 66, l: "Sagschütz" },
      { t: "note", x: 8, y: 4, l: "Norte ↑" }
    ],
    units: [
      { id: "pVan", s: "a", k: "inf", w: 8, h: 4, l: "Vanguarda (blefe)" },
      { id: "pMain", s: "a", k: "inf", w: 22, h: 5, l: "Grosso do exército" },
      { id: "pZie", s: "a", k: "cav", w: 14, h: 4, l: "Cavalaria de Zieten" },
      { id: "pDri", s: "a", k: "cav", w: 12, h: 4, l: "Cavalaria de Driesen" },
      { id: "pArt", s: "a", k: "inf", w: 8, h: 3, l: "Artilharia pesada" },
      { id: "pLeft", s: "a", k: "inf", w: 12, h: 4, l: "Ala esquerda (Retzow)" },
      { id: "aR", s: "b", k: "inf", w: 5, h: 22, l: "Ala direita (a mais forte)" },
      { id: "aC", s: "b", k: "inf", w: 5, h: 16, l: "Centro, em Leuthen" },
      { id: "aL", s: "b", k: "inf", w: 5, h: 18, l: "Ala esquerda (württemberguenses e bávaros)" },
      { id: "aCavL", s: "b", k: "cav", w: 5, h: 10, l: "Cavalaria da ala esquerda" },
      { id: "aLuc", s: "b", k: "cav", w: 5, h: 16, l: "Cavalaria de Lucchesi" }
    ],
    steps: [
      { t: "Os austríacos formam uma linha de quase 9 km, de Nypern a Sagschütz, com Leuthen no centro. Os prussianos chegam do oeste pela estrada de Breslau.",
        p: { pVan: [24, 14], pMain: [16, 24], pZie: [14, 34], pDri: [10, 30], pArt: [18, 40], pLeft: [26, 20], aR: [76, 14], aC: [74, 38], aL: [76, 56], aCavL: [84, 62], aLuc: [86, 24] } },
      { t: "Frederico finge atacar o flanco direito austríaco. Carlos leva reservas para lá, e a linha dele se estica.",
        p: { pVan: [50, 14], pLeft: [38, 20], aLuc: [84, 16] } },
      { t: "Escondidos pela neblina e pelas colinas, os prussianos marcham para o sul, fora da vista do inimigo.",
        p: { pMain: [24, 48], pZie: [32, 58], pArt: [22, 54], pDri: [14, 38] } },
      { t: "Por volta do meio-dia, viram e se alinham em ângulo reto com o flanco esquerdo austríaco. É a ordem oblíqua: a ala que ataca chega primeiro, e a outra fica atrás.",
        p: { pMain: [48, 58], pZie: [46, 66], pArt: [44, 46], pLeft: [36, 30] } },
      { t: "Wedell ataca em direção a Sagschütz. A cavalaria de Zieten vence a cavalaria austríaca. Os württemberguenses resistem e cedem, levando junto os bávaros.",
        p: { pMain: [62, 58], pZie: [62, 66], aL: [78, 52] }, x: ["aCavL"] },
      { t: "A artilharia pesada, no Butterberg, bombardeia a linha austríaca de lado, e a infantaria prussiana avança.",
        p: { pArt: [50, 42], pMain: [66, 52, -20], aL: [80, 46] } },
      { t: "Carlos tenta refazer a linha em torno de Leuthen. Os granadeiros e a Guarda passam pelo muro do cemitério e tomam a igreja, numa luta casa a casa.",
        p: { pMain: [70, 46, -30], aC: [78, 36], aR: [80, 20] } },
      { t: "A cavalaria de Lucchesi, com cerca de 70 esquadrões, ataca o flanco prussiano que parecia exposto. Driesen, com uns 50 esquadrões de reserva, bate no flanco dela, sem ordem.",
        p: { aLuc: [58, 30], pDri: [52, 34], pLeft: [44, 26] } },
      { t: "Empurrada contra a própria infantaria, a cavalaria austríaca desfaz a linha. Os austríacos recuam para Breslau, e a perseguição só termina com a neve.",
        p: { pMain: [76, 36], pZie: [76, 56], pDri: [68, 28] }, x: ["aLuc", "aC", "aR", "aL"] }
    ]
  }
});
