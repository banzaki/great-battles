// In-depth battles, batch bk: sebastopol1854 (Siege of Sevastopol), buxar, wagram, bullrun1, shiloh.
// Checked against the English, Portuguese and French Wikipedia articles on the Siege of Sevastopol, the Battle of
// Malakoff and the Battle of the Great Redan, and the works they cite (Fletcher and Ishchenko, Clodfelter, Gooch).
// Dates are New Style (Gregorian); Russian sources use the Julian calendar, twelve days behind in the 1850s.
// Where sources disagree (bombardment dates, deaths from disease, the Little Redan) the text says so.

Object.assign(GLOSSARY, {
  "malakoff": "Colina a leste do porto de Sebastopol, com um reduto de terra no alto. Os russos a chamam de Malakhov Kurgan. Era a chave das defesas: quem a tomasse via a cidade e a baía inteira de cima.",
  "mamelon": "Pequena colina fortificada à frente do Malakoff. Os russos a fortificaram em fevereiro de 1855, e os franceses a tomaram em junho, para chegar mais perto do reduto.",
  "gabiões": "Cestos cilíndricos de vime ou de metal, cheios de terra. Empilhados, formavam um parapeito que aguentava bem o tiro de canhão."
});

Object.assign(DEEP, {
  sebastopol1854: {
    war: "Guerra da Crimeia (1853–1856)",
    hook: "Os aliados queriam tomar Sebastopol em dias. Levaram onze meses, e o inverno matou mais gente do que as balas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1853, a Rússia entrou em guerra com o Império Otomano. A Grã-Bretanha e a França temiam que os russos dominassem o mar Negro e, depois, o caminho para o Mediterrâneo, e entraram na guerra ao lado dos otomanos em 1854. Mais tarde, o reino de Piemonte-Sardenha também mandou tropas. O alvo escolhido foi Sebastopol, na ponta sul da península da Crimeia, a base da frota russa do mar Negro.",
        "Os aliados desembarcaram em Evpatória em 14 de setembro de 1854, com cerca de 50.000 homens. Em 20 de setembro, venceram os russos no rio Alma, a primeira grande batalha da guerra, que custou cerca de 6.000 homens aos russos. Em vez de atacar a cidade pelo norte, contornaram-na e se instalaram ao sul, nas colinas de Quersoneso. Os britânicos usavam o porto de Balaclava como base. O comandante francês, Saint-Arnaud, adoeceu e morreu pouco depois do Alma, e foi substituído por Canrobert.",
        { h: "O caminho até as muralhas" },
        { timeline: [
          ["14 set 1854", "Os aliados desembarcam em Evpatória."],
          ["20 set", "Vitória aliada no Alma."],
          ["17 out", "Primeiro grande bombardeio. Morre o almirante Kornilov."],
          ["25 out e 5 nov", "Batalhas de Balaclava e de Inkerman, fora das linhas do cerco."],
          ["Fim de mar 1855", "Uma estrada de ferro liga Balaclava às trincheiras."],
          ["Jun 1855", "Os franceses tomam o Mamelon. Em 18 de junho, o ataque ao Malakoff e ao Grande Redan fracassa."],
          ["16 ago", "O exército russo de campanha ataca no rio Tchernaia e é repelido."],
          ["5 set", "Começa o sexto e mais forte bombardeio."],
          ["8 set", "Assalto final: os franceses tomam o Malakoff."],
          ["9 set", "Os russos deixam a parte sul da cidade."]
        ]},
        "Os aliados esperavam um [[cerco]] curto. Os russos usaram o tempo que tinham de modo muito melhor do que se previa, e o cerco virou um duelo de trincheiras e canhões durante um inverno terrível."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Eduard Totleben, tenente-coronel" },
        "Engenheiro militar do exército russo e responsável pelas obras de defesa. Os aliados viram os muros da cidade e os acharam fracos. Totleben fez o contrário do que se esperava: em vez de depender de muralhas de pedra, ergueu em semanas um anel de fortes de terra, com [[gabiões]], parapeitos grossos e canhões bem posicionados, que absorviam o tiro inimigo e eram consertados à noite. O [[malakoff]], o Grande [[redan]] e o Pequeno Redan viraram os pontos centrais.",
        { h: "Kornilov e Nakhimov" },
        "O vice-almirante Vladimir Kornilov organizou a defesa. O príncipe Menshikov, comandante do exército russo, ficava fora da cidade. Kornilov morreu em 17 de outubro de 1854, no primeiro bombardeio, segundo as fontes depois que fogo britânico atingiu um depósito de munição no reduto de Malakoff. O vice-almirante Pavel Nakhimov assumiu e se tornou a alma da resistência, circulando pelas linhas de frente. Foi ferido na cabeça por um franco-atirador aliado em julho de 1855 e morreu dias depois. Segundo a tradição, a última ordem de Kornilov foi defender Sebastopol; as fontes não concordam sobre as palavras exatas.",
        { h: "Do lado aliado" },
        "O general francês François Canrobert comandou até maio de 1855 e foi substituído por Aimable Pélissier, mais duro e disposto a atacar. Entre os britânicos, o comandante era lorde Raglan, que morreu de doença em 28 de junho de 1855, dez dias depois do fracasso de 18 de junho. O general James Simpson assumiu o lugar. O general Patrice de MacMahon comandou a divisão francesa que tomou o Malakoff em setembro. O general John Fox Burgoyne, engenheiro britânico, foi quem apontou o Malakoff como a chave da cidade."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam muito conforme a fonte e a data. Os aliados tinham cerca de 67.000 homens em outubro de 1854 e cerca de 175.000 em julho de 1855, segundo as contagens da Wikipédia: cerca de 75.000 franceses, 35.000 britânicos, 60.000 otomanos e 15.000 piemonteses. Em agosto de 1855, chegaram ainda 22.000 homens da força anglo-otomana, e legiões alemã, suíça, polonesa e italiana, com cerca de 15.500 no total. Os russos tinham cerca de 37.000 homens na guarnição em outubro de 1854 e cerca de 43.000 em maio de 1855, além de um exército de campanha de cerca de 42.000 fora da cidade. Grande parte desses defensores eram marinheiros da frota, que lutavam em terra com seus canhões.",
        { h: "O terreno" },
        "Sebastopol fica na margem sul de uma baía comprida e funda, que corta a cidade em duas. Os aliados cavaram suas [[paralelas|paralela]] e [[sapas|sapa]] nas colinas de Quersoneso, ao sul e a leste, sobre solo duro e rochoso, o que tornava as trincheiras lentas e penosas. A linha russa formava um arco de fortes de terra. De oeste para leste: o [[bastião]] de Flagstaff, o Bastião Central, o Grande Redan (o terceiro bastião), o Malakoff e o Pequeno Redan. À frente do Malakoff, o [[mamelon]] servia de posto avançado. Do outro lado da baía, na margem norte, ficava o resto da guarnição e a saída para o interior.",
        { h: "Onze meses de cerco" },
        "O primeiro bombardeio, em 17 de outubro de 1854, não deu o resultado esperado. Os canhões aliados em terra tiveram duelos de [[bateria]] contra os russos, e a esquadra aliada atirou por cerca de seis horas contra os fortes do porto, com poucos danos e cerca de 340 baixas nos navios. Kornilov morreu nesse dia, mas o ataque de infantaria que os aliados tinham planejado foi adiado e acabou nunca acontecendo. Os russos usaram os meses seguintes para reforçar suas defesas.",
        "Em 25 de outubro e em 5 de novembro, os russos atacaram os flancos aliados em Balaclava e em Inkerman. Não romperam as linhas aliadas, mas mostraram que os aliados não podiam atacar a cidade e se defender ao mesmo tempo. No meio de novembro, uma tempestade danificou os acampamentos e as linhas de suprimento. Seguiu-se um inverno terrível, com frio, lama, fome e [[cólera]]. Os britânicos sofreram mais do que os franceses, e em toda a campanha morreram muito mais soldados aliados de doença do que em combate. Entre os britânicos, por exemplo, foram 2.755 mortos em combate e 16.323 mortos de doença, segundo as contagens da Wikipédia. Para os franceses, as fontes dão de 50.000 a 75.000 mortos de doença, e ainda 10.240 mortos em combate e cerca de 20.000 mortos de feridas.",
        "Na primavera, o quadro mudou. Uma estrada de ferro, concluída no fim de março de 1855, passou a levar suprimentos e canhões de Balaclava até as trincheiras, mais de 500 canhões, segundo a Wikipédia em inglês. Novos bombardeios vieram em abril, em junho e em agosto. Canrobert deixou o comando francês em maio, e Pélissier decidiu tomar as obras avançadas dos russos. No começo de junho, os franceses tomaram o Mamelon. Em 18 de junho, aniversário de Waterloo, os franceses e os britânicos atacaram o Malakoff e o Grande Redan, mas foram repelidos com muitas baixas. Raglan morreu dez dias depois. Em 16 de agosto, o exército de campanha russo tentou aliviar a cidade atacando os aliados no rio Tchernaia e foi repelido.",
        { h: "O assalto final, 8 de setembro de 1855" },
        "Em 5 de setembro, começou o sexto e mais forte bombardeio: segundo a Wikipédia, 307 canhões dispararam cerca de 150.000 tiros, e os russos perdiam de 2.000 a 3.000 homens por dia. Ao meio-dia de 8 de setembro, cerca de 60.000 soldados aliados saíram das trincheiras. A Wikipédia em francês descreve o assalto francês ao Malakoff como perfeitamente coordenado. O diagrama mostra os movimentos em nove tempos (esquema sem escala).",
        { formation: true },
        "Primeiro, na manhã de 8 de setembro, depois de três dias de bombardeio, os aliados estão nas trincheiras diante do arco de fortes russos. Os franceses ocupam o Mamelon, à direita, diante do Malakoff, os britânicos o centro, diante do Grande Redan, e outro corpo francês, a esquerda.",
        "Segundo, ao meio-dia, os [[zuavos]] e a infantaria da divisão de MacMahon saem das trincheiras e correm em direção ao Malakoff. Outros franceses avançam ao mesmo tempo sobre o Pequeno Redan.",
        "Terceiro, os franceses entram no Malakoff e o tomam. Um zuavo, Eugène Libaut, teria hasteado a bandeira francesa. Os russos contra-atacam e não conseguem retomá-lo. A queda do Malakoff mudou o destino da cidade, porque dali os canhões aliados dominavam o resto da defesa.",
        "Quarto, ao receber o sinal combinado, os britânicos saem da trincheira para atacar o Grande Redan. A brigada do general Shirley e a do general Windham, que comandava interinamente a brigada da 2ª Divisão, cruzam um terreno aberto, de cerca de 400 metros, debaixo de fogo.",
        "Quinto, a brigada de Windham chega ao Grande Redan, sobe o parapeito e toma a obra, desfazendo o regimento Vladimirski que a defendia. Parece uma vitória.",
        "Sexto, mas o apoio não chega. Os franceses da esquerda, comandados pelo general La Salle, deveriam atacar o bastião de Flagstaff e o Bastião Central ao ver os foguetes de sinal. Demoram, e os canhões desses fortes varrem o terreno e param as tropas de reforço britânicas. As fontes divergem sobre o que ocorreu com o Pequeno Redan: algumas dizem que foi tomado no início, outras que o ataque foi repelido.",
        "Sétimo, os homens de Windham, sem munição e sem reforços, aguentam por cerca de duas horas. O coronel Ventsel lança uma carga à baioneta com os regimentos Selenguinski e Iakutski, cerca de 3.000 russos. Windham manda recuar para o fosso, e os russos retomam o Grande Redan. Os franceses fazem um ataque hesitante e o interrompem.",
        "Oitavo, o general Simpson planeja renovar o ataque na manhã seguinte. Mas, com o Malakoff perdido, o príncipe Mikhail Gorchakov, comandante russo, decide abandonar a parte sul da cidade. Tinha preparado uma [[ponte de barcas]] por cima da baía até a margem norte. A retirada começa por volta das 19h e dura a noite inteira. Por volta das 23h, os russos explodem os paióis e incendeiam os fortes.",
        "Nono, na manhã de 9 de setembro, os britânicos ocupam o Grande Redan sem luta, e os aliados entram numa cidade vazia e em chamas. Os russos continuam do outro lado da baía, na margem norte, mas a base naval está perdida."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O assalto de 8 de setembro foi o dia decisivo do cerco. Segundo Fletcher e Ishchenko, citados na Wikipédia, os franceses tiveram 1.634 mortos, 4.513 feridos e 1.410 desaparecidos; os russos, 2.684 mortos, 7.243 feridos e 1.739 desaparecidos; os britânicos, 390 mortos, 2.043 feridos e 177 desaparecidos. Pelo menos 19 generais caíram naquele dia. Outras fontes dão totais diferentes, de 7.500 a 13.000 baixas, e não há consenso sobre as baixas do cerco inteiro. Somando as cifras citadas, os aliados teriam perdido cerca de 100.000 homens por todas as causas, a maioria de doença.",
        { h: "Por que importa" },
        "O czar Nicolau I morrera em março de 1855, e seu filho Alexandre II aceitou negociar. Em 26 de fevereiro de 1856 houve um [[armistício]], e em 30 de março o Tratado de Paris encerrou a guerra. O mar Negro foi neutralizado: ficou proibido de ter navios de guerra e arsenais militares na costa, o que a Rússia só conseguiu desfazer em 1871. A guerra também mostrou como os exércitos aliados eram mal preparados para cuidar de seus soldados no inverno.",
        { h: "Curiosidades e controvérsias" },
        { note: "O jovem oficial de artilharia Liev Tolstói serviu em Sebastopol e escreveu ali os 'Contos de Sebastopol', publicados em 1855 e 1856, que contam o cerco do ponto de vista de quem o viveu. O fotógrafo britânico Roger Fenton registrou o exército aliado na Crimeia em 1855, numa das primeiras reportagens fotográficas de guerra." },
        { note: "Datas: os russos usavam o calendário juliano, doze dias atrasado em relação ao nosso. Por isso o assalto final aparece como 27 de agosto em fontes russas e o início do cerco, às vezes, em 5 de outubro de 1854. Neste texto, todas as datas seguem o calendário atual." },
        { note: "Números: as fontes divergem nas mortes de doença dos franceses (50.000 numa, 75.000 noutra), no dia exato da morte de Nakhimov e nos totais do assalto final. Não há contagem russa confiável de todo o cerco, por isso o texto não dá um total." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  sebastopol1854: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 12, l: "Baía de Sebastopol (margem norte acima)" },
      { t: "note", x: 52, y: 15, l: "Ponte de barcas" },
      { t: "note", x: 86, y: 66, l: "Sul ↓ (esquema, sem escala)" },
      { t: "hill", x: 77, y: 41, rx: 4, ry: 2.5, l: "Mamelon (franceses)" }
    ],
    units: [
      { id: "rFl", s: "b", k: "inf", w: 6, h: 3, l: "Flagstaff" },
      { id: "rCe", s: "b", k: "inf", w: 6, h: 3, l: "Bastião Central" },
      { id: "rRe", s: "b", k: "inf", w: 7, h: 3, l: "Grande Redan (Vladimirski)" },
      { id: "rMa", s: "b", k: "inf", w: 7, h: 3, l: "Malakoff" },
      { id: "rLi", s: "b", k: "inf", w: 6, h: 3, l: "Pequeno Redan" },
      { id: "rRs", s: "b", k: "inf", w: 8, h: 3, l: "Reserva russa (Selenguinski, Iakutski)" },
      { id: "fFl", s: "a", k: "inf", w: 8, h: 3, l: "Franceses da esquerda (La Salle)" },
      { id: "bSh", s: "a", k: "inf", w: 6, h: 3, l: "Shirley" },
      { id: "bWi", s: "a", k: "inf", w: 6, h: 3, l: "Windham" },
      { id: "bSu", s: "a", k: "inf", w: 7, h: 3, l: "Apoio britânico" },
      { id: "fMa", s: "a", k: "inf", w: 7, h: 3, l: "MacMahon (zuavos)" },
      { id: "fLi", s: "a", k: "inf", w: 6, h: 3, l: "Franceses (Pequeno Redan)" },
      { id: "bHi", s: "a", k: "inf", w: 6, h: 3, l: "Highlanders (reserva)" }
    ],
    steps: [
      { t: "8 de setembro de 1855, de manhã. Depois de três dias de bombardeio, os aliados estão nas trincheiras diante do arco de fortes de terra: Flagstaff, Central, Grande Redan, Malakoff e Pequeno Redan. Os franceses ocupam o Mamelon, à frente do Malakoff.",
        p: { rFl: [18, 30], rCe: [34, 30], rRe: [54, 30], rMa: [74, 28], rLi: [89, 30], rRs: [58, 20],
             fFl: [26, 52], bSh: [47, 50], bWi: [58, 50], bSu: [53, 59], fMa: [74, 52], fLi: [89, 50], bHi: [40, 62] } },
      { t: "Ao meio-dia, a infantaria francesa de MacMahon sai das trincheiras e corre para o Malakoff. Outros franceses avançam ao mesmo tempo contra o Pequeno Redan.",
        p: { fMa: [74, 37], fLi: [89, 37] } },
      { t: "Os franceses entram no Malakoff e o tomam. Os contra-ataques russos não o recuperam. É a chave da cidade: dali, o resto da linha fica exposto.",
        p: { fMa: [74, 29], rMa: [78, 21] }, x: ["rMa"] },
      { t: "Ao sinal combinado, os britânicos saem das trincheiras contra o Grande Redan: a brigada de Shirley e a de Windham, com o apoio atrás. Têm cerca de 400 metros de terreno aberto, sob fogo.",
        p: { bSh: [47, 40], bWi: [58, 40], bSu: [53, 48] } },
      { t: "A brigada de Windham chega ao Grande Redan, sobe o parapeito e desfaz o regimento Vladimirski. A obra está em mãos britânicas.",
        p: { bWi: [54, 30], rRe: [54, 23], bSh: [47, 36] } },
      { t: "Mas o apoio não chega. Os franceses da esquerda, de La Salle, demoram a atacar o Flagstaff e o Bastião Central, e os canhões desses fortes varrem o terreno e param os reforços britânicos. As fontes divergem sobre o Pequeno Redan.",
        p: { fFl: [26, 42], bSu: [53, 42], bSh: [46, 38] } },
      { t: "Durante cerca de duas horas, os britânicos seguram o Grande Redan, sem munição e sem reforços. Os russos lançam a reserva, de cerca de 3.000 homens, à baioneta. Windham recua para o fosso, e os russos retomam a obra.",
        p: { rRs: [54, 31], rRe: [54, 30], bWi: [56, 38], bSh: [47, 41], bSu: [53, 48] } },
      { t: "Perdido o Malakoff, o príncipe Gorchakov manda abandonar a parte sul da cidade. A retirada começa por volta das 19h, pela ponte de barcas sobre a baía, e dura a noite inteira. Por volta das 23h os russos explodem os paióis e incendeiam os fortes.",
        p: { rFl: [20, 14], rCe: [36, 14], rRe: [54, 14], rLi: [88, 14], rRs: [58, 9] } },
      { t: "9 de setembro. Os aliados entram numa cidade vazia e em chamas, e os britânicos ocupam o Grande Redan sem luta. Os russos ficam na margem norte. A base naval está perdida.",
        p: { bHi: [54, 29], bWi: [54, 31], bSh: [44, 30], fFl: [30, 30], bSu: [38, 36], fLi: [89, 30] }, x: ["rFl", "rCe", "rRe", "rLi", "rRs"] }
    ]
  }
});

// ---------- Buxar, Wagram, First Bull Run, Shiloh ----------
// Buxar: English Wikipedia (Battle of Buxar, Treaty of Allahabad) and the works it cites (Fortescue, Black, Biddulph).
// Wagram: English Wikipedia (Battle of Wagram) and the works it cites. Bull Run: English Wikipedia (First Battle of
// Bull Run). Shiloh: English Wikipedia (Battle of Shiloh). Sources thin out on Buxar's deployment, so it has no diagram.

Object.assign(GLOSSARY, {
  "lobau": "Ilha grande no Danúbio, perto de Viena. Napoleão a transformou em base fortificada, de onde seu exército cruzou o rio em 1809.",
  "marchfeld": "Planície aberta ao norte do Danúbio, perto de Viena. Sem morros nem florestas, era um campo ideal para grandes massas de soldados e de canhões.",
  "voluntários de noventa dias": "Soldados que se alistaram por apenas três meses, no início da guerra civil americana. Muitos deles iam para casa quando o prazo acabava, mesmo no meio da campanha.",
  "ninho de vespas": "Apelido de um trecho de mata e de um caminho afundado em Shiloh. Segundo os soldados, as balas passavam zunindo como vespas irritadas.",
  "estrada afundada": "Caminho de terra mais baixo que o terreno em volta, por onde carroças passavam tantas vezes que o solo cedia. Funcionava como uma trincheira pronta.",
  "desembarcadouro": "Pequeno porto à beira do rio, onde barcos descarregam gente e mercadorias. O de Pittsburg Landing, no rio Tennessee, era o ponto de abastecimento do exército de Grant."
});

Object.assign(DEEP, {
  buxar: {
    war: "Guerra de Bengala (1763–1765)",
    hook: "Em poucas horas, uma companhia de comércio com 7.000 homens derrotou um imperador e um nababo, e ganhou o direito de cobrar os impostos de Bengala.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1757, em Plassey, a Companhia Inglesa das Índias Orientais pôs Mir Jafar no trono de nababo de Bengala. Em 1760, trocou-o por Mir Qasim, seu genro. Mir Qasim logo se mostrou mais independente do que a Companhia esperava: reorganizou o exército, transferiu a corte para Munger e tentou controlar as finanças.",
        "O atrito principal era o comércio. Funcionários da Companhia usavam permissões de comércio, os dastaks, para negociar por conta própria sem pagar os impostos que os comerciantes indianos pagavam. Mir Qasim reagiu abolindo as taxas internas de trânsito, o que tirava a vantagem dos ingleses. Em 1763, o conflito virou guerra. A Companhia venceu, trouxe Mir Jafar de volta, e Mir Qasim fugiu para Awadh, depois de mandar matar prisioneiros britânicos em Patna.",
        "No exílio, Mir Qasim se aliou a Shuja-ud-Daula, nababo de Awadh, e a Shah Alam II, imperador mogol, que também estava na região. Juntos, reuniram um grande exército para expulsar a Companhia de Bengala e de Bihar.",
        { h: "O caminho até Buxar" },
        { timeline: [
          ["1757", "Plassey: a Companhia põe Mir Jafar no trono de Bengala."],
          ["1760", "Mir Qasim substitui Mir Jafar."],
          ["1763", "Guerra entre Mir Qasim e a Companhia. Mir Qasim perde e foge para Awadh."],
          ["1764", "O major Hector Munro comanda o exército da Companhia. Os aliados avançam pelo Ganges."],
          ["22 out 1764", "Batalha de Buxar."],
          ["Ago 1765", "Tratado de Allahabad: a Companhia recebe o diwani de Bengala, Bihar e Orissa."]
        ]},
        "Os aliados não tinham o mesmo objetivo. Mir Qasim queria o trono de Bengala de volta, Shuja-ud-Daula queria impedir que a Companhia chegasse a Awadh, e o imperador, sem poder real, esperava recuperar prestígio. Essa falta de unidade pesou depois."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Hector Munro" },
        "Major escocês do exército britânico, comandava as forças da Companhia em 1764. Sua tropa era pequena diante da inimiga.",
        { h: "Shuja-ud-Daula" },
        "Nababo de Awadh, um dos três chefes aliados. Quando a batalha se perdeu, explodiu os próprios paióis e destruiu a ponte atrás de si, deixando o imperador e parte de seus soldados para trás.",
        { h: "Shah Alam II e Mir Qasim" },
        "Shah Alam II era o imperador mogol, com pouco poder real. Depois da derrota, entregou-se aos britânicos. Mir Qasim fugiu, foi exilado por Shuja-ud-Daula e morreu na pobreza em 1777, segundo a Wikipédia em inglês. Mirza Najaf Khan comandava a ala direita mogol. O maharaja Balwant Singh, de Benares, também estava com os aliados."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Companhia tinha 7.072 homens, cerca de 1.800 britânicos e 5.300 [[sipaios]], indianos recrutados e treinados por ela. Os aliados são estimados em mais de 40.000 (a Wikipédia dá 40.112), com muitos canhões. Essas estimativas são incertas: o número aliado inclui contingentes de três exércitos que nunca lutaram juntos antes.",
        { h: "O terreno" },
        "Buxar fica na margem do Ganges, no atual estado de Bihar, a cerca de 130 km a oeste de Patna, perto do ponto onde o rio Karmanasa chega ao Ganges.",
        { h: "A batalha" },
        "As fontes descrevem pouco as posições. Os aliados estavam em campo, e o exército da Companhia marchava para encontrá-los. Ao amanhecer de 22 de outubro de 1764, Mirza Najaf Khan, na ala direita mogol, atacou. As linhas da Companhia se formaram em cerca de vinte minutos e frearam o ataque.",
        "Por volta do meio-dia, a luta estava terminada. Ao retirar-se, Shuja-ud-Daula mandou explodir grandes carros de munição e três paióis de pólvora, para não deixá-los ao inimigo.",
        "Munro o perseguiu até o rio Karmanasa. Shuja atravessou por uma ponte de barcas e a destruiu atrás de si, o que deixou o imperador e parte de seus soldados do lado de cá, nas mãos dos britânicos. Os vencedores tomaram 133 canhões e mais de um milhão de rupias em dinheiro.",
        "Os oficiais britânicos mortos que as fontes citam são o tenente Francis Spilsbury, do 96º Regimento, e o alferes Richard Thompson, do Batalhão Europeu de Bengala."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas são incertas. O historiador John Fortescue dá 847 baixas britânicas, mas os números que ele lista somam 873, e dá cerca de 2.000 mortos entre os aliados. Outra fonte, de Black, dá 69 europeus e 664 sipaios como baixas da Companhia, e 6.000 do lado mogol. A Wikipédia em inglês usa, no quadro, 289 mortos, 499 feridos e 85 desaparecidos para os britânicos, e 2.000 mortos e 4.000 feridos para os aliados.",
        { h: "Por que importa" },
        "Shah Alam II se rendeu. Shuja-ud-Daula fugiu e acabou se rendendo também. Em agosto de 1765, Robert Clive assinou o Tratado de Allahabad. Awadh foi devolvido a Shuja-ud-Daula, sem Allahabad e Kora, e ele pagou uma indenização de 50 lakhs de rupias. O imperador recebeu a proteção da Companhia e, em troca, lhe deu o [[diwani]] de Bengala, Bihar e Orissa: o direito de cobrar os impostos das províncias mais ricas da Índia. Em 1772, a Companhia assumiu o controle completo de Bengala e Bihar.",
        "Muitos historiadores consideram Buxar mais decisiva do que Plassey: em Plassey, houve mais intriga do que combate, enquanto em Buxar a Companhia derrotou em campo o imperador e o nababo de Awadh. A empresa de comércio virou, de fato, um Estado com exército e com receita própria.",
        { h: "Curiosidades e controvérsias" },
        { note: "A batalha tem duas datas nas fontes: 22 de outubro de 1764, a mais comum, e 22 a 23 de outubro. Os números das duas forças também variam muito entre os autores." },
        { note: "Os aliados contavam com mais gente e mais canhões, mas não com unidade. Segundo a Wikipédia, a Companhia tomou 133 canhões, número que mostra o tamanho da artilharia aliada." }
      ]}
    ]
  },

  wagram: {
    war: "Guerra da Quinta Coalizão (1809)",
    hook: "Foi a maior batalha da Europa até então, e Napoleão a venceu com uma muralha de canhões.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em abril de 1809, a Áustria atacou a Baviera, aliada de Napoleão, esperando que a França, ocupada com a guerra na Espanha, não reagisse. Napoleão voltou depressa, venceu em Eckmühl e entrou em Viena em 13 de maio. Mas o exército do arquiduque Carlos recuou para a margem norte do Danúbio, e Napoleão teve de atravessar o rio.",
        "Em 21 e 22 de maio, na batalha de Aspern-Essling, os franceses foram barrados no meio da travessia, quando as pontes se romperam, e recuaram para a ilha de [[Lobau]]. Costuma ser contada como a primeira derrota de Napoleão numa grande batalha. Nas seis semanas seguintes, ele transformou Lobau numa base fortificada, com pontes sólidas, e reuniu reforços.",
        { h: "O caminho até Wagram" },
        { timeline: [
          ["Abr 1809", "A Áustria ataca a Baviera. Napoleão vence em Eckmühl."],
          ["13 mai", "Napoleão entra em Viena."],
          ["21–22 mai", "Aspern-Essling: os franceses são barrados no Danúbio."],
          ["4 jul, à noite", "Sob uma tempestade, o exército francês atravessa o rio a partir de Lobau."],
          ["5 jul", "Escaramuças e ataques do fim da tarde, que falham."],
          ["6 jul", "Batalha principal. O arquiduque Carlos recua."],
          ["Meados de jul", "Armistício de Znaim."]
        ]},
        "O arquiduque Carlos usou o tempo para fortificar a planície do [[Marchfeld]], na margem norte, e para chamar reforços, entre eles um segundo exército, o do arquiduque João. Seu plano era esperar Napoleão atravessar e atacá-lo nos flancos."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão, 39 anos" },
        "Depois de Aspern-Essling, precisava de uma vitória decisiva. Reuniu tudo o que tinha, inclusive tropas aliadas: bávaros, saxões, italianos e outros. Decidiu atravessar à noite, sob uma tempestade que escondeu a manobra, e depois usar os canhões em massa.",
        { h: "Arquiduque Carlos, 38 anos" },
        "Irmão do imperador Francisco e o melhor general da Áustria, tinha derrotado Napoleão em Aspern-Essling. Em Wagram, tentou envolver os dois flancos franceses e quase rompeu a esquerda.",
        { h: "Os marechais" },
        "Davout comandava o III Corpo, na ala direita francesa. Masséna, do IV Corpo, estava na esquerda. Segundo relatos, andava de carruagem por causa de um tombo de cavalo. Bernadotte comandava os saxões do IX Corpo e foi demitido por Napoleão depois da batalha. Macdonald, Oudinot, Marmont, Bessières e Lauriston também tiveram papéis importantes. Do lado austríaco, os generais Bellegarde, Klenau, Rosenberg, Hohenzollern, Kollowrat e Liechtenstein comandavam os corpos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia em inglês dá cerca de 172.000 homens e de 584 a 617 canhões para os franceses e aliados, e cerca de 136.000 homens e de 388 a 414 canhões para os austríacos. Nos números de campo do segundo dia, os austríacos tinham 113.500 homens de infantaria, 14.600 de cavalaria e 414 canhões, e os franceses 140.500, 28.000 e 488, com mais 8.500 homens e 129 canhões ainda em Lobau. O arquiduque João, com cerca de 13.000 homens, não estava no campo de manhã.",
        { h: "O terreno" },
        "O Marchfeld é uma planície aberta ao norte do Danúbio. Os austríacos ocuparam os terrenos mais altos ao norte do riacho Russbach, perto de Deutsch-Wagram, de onde viam todo o campo. Os franceses ficaram ao sul do riacho, com as aldeias de Aderklaa, Baumersdorf e Markgrafneusiedl em disputa. A esquerda francesa, junto a Aspern e Essling, ficava perto do Danúbio.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, na noite de 4 de julho, sob uma forte tempestade, Napoleão atravessou o Danúbio a partir de Lobau. A tropa de Oudinot foi à frente, e a de Masséna chegou à outra margem por volta das 23h. Davout atravessou um pouco depois das 2h. Na manhã de 5 de julho, a cabeça de ponte estava segura. Os austríacos recuaram para as alturas do Russbach, e os franceses se alinharam na planície. Por volta das 18h, o exército francês estava todo desdobrado.",
        "Segundo, por volta das 19h do dia 5, Napoleão ordenou um ataque. Oudinot atacou Baumersdorf e foi repelido por uma carga de cavalaria. O V Corpo, do Exército da Itália, com Macdonald, avançou contra o planalto de Wagram, escondido pela fumaça, mas as tropas saxãs, de uniforme branco, foram confundidas com austríacos e levaram fogo amigo. Os franceses recuaram, e Bellegarde e o arquiduque Carlos os empurraram de volta às posições de partida.",
        "Terceiro, os saxões de Bernadotte atacaram Deutsch-Wagram por volta das 21h. Na fumaça, os soldados atiraram uns nos outros, e por volta das 22h30 os saxões se romperam e recuaram. Davout atacou Markgrafneusiedl a partir das 21h, mas a cavalaria de Nostitz repeliu a dele, e às 22h ele suspendeu o ataque. A noite terminou com os franceses ainda de pé, mas com a linha desorganizada.",
        "Quarto, ao amanhecer de 6 de julho, o arquiduque Carlos atacou toda a linha. Rosenberg, na esquerda austríaca, atacou Davout às 4h e foi repelido por volta das 5h ou 6h, com cerca de 1.100 baixas. Bellegarde ocupou Aderklaa, vazia, e esperou ordens.",
        "Quinto, Klenau, na direita austríaca, empurrou a divisão de Boudet para fora de Aspern e de Essling, entre 7h30 e 10h. Não explorou a vantagem. Masséna chegou a Aderklaa às 7h30, e Napoleão mandou retomar a aldeia. Molitor a tomou de volta por volta das 9h45.",
        "Sexto, o ataque de Davout contra Markgrafneusiedl começou entre 9h30 e 10h, depois de cerca de duas horas de duelo de artilharia. A torre da igreja caiu por volta do meio-dia. A esquerda austríaca começou a ser empurrada para o norte.",
        "Sétimo, entre 11h e meio-dia, os couraceiros de Nansouty carregaram perto de Süssenbrunn, e o general Lauriston reuniu a grande bateria, de 84 canhões, que castigou o centro austríaco. Por volta das 13h, a coluna de Macdonald, com cerca de 8.000 homens, avançou contra Süssenbrunn, protegida pela [[grande bateria]]. Foi detida por quadrados e cavalaria austríacos, com muitas baixas. Napoleão, mesmo assim, fez Macdonald marechal ali, no campo de batalha, o único marechal promovido assim, segundo a Wikipédia em inglês. Entre as 12h30 e as 14h, Masséna retomou Essling e Aspern e perseguiu Klenau.",
        "Oitavo, por volta das 13h, Rosenberg começou a recuar combatendo, e na tarde, com a esquerda quebrada, o arquiduque Carlos admitiu a derrota. Por volta das 16h, o exército austríaco estava em retirada, mas em boa ordem.",
        "Nono, por volta das 17h, o arquiduque João chegou com cerca de 13.000 homens, tarde demais para mudar o resultado. Napoleão não perseguiu com força: seus soldados estavam exaustos e as caixas de munição vazias, depois de 90.000 a 100.000 tiros de canhão."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Mais de 300.000 homens lutaram, e houve pelo menos 72.000 baixas, a batalha mais sangrenta das guerras da Revolução e de Napoleão até então. Napoleão registrou oficialmente 6.901 mortos e 26.757 feridos, cerca de 24% de seu exército, e outras estimativas são maiores. A Wikipédia dá 35.060 baixas francesas e 38.870 austríacas. Cinco generais franceses e 238 outros oficiais morreram. Os austríacos registraram 51.626 desaparecidos, número que inclui a luta posterior.",
        { h: "Por que importa" },
        "O arquiduque Carlos pediu um armistício por conta própria, em Znaim, depois de uma batalha em que o corpo de Marmont resistiu até Napoleão chegar com reforços. Napoleão aceitou, apesar das objeções de comandantes como Berthier, que queriam continuar. Em outubro de 1809, o Tratado de Schönbrunn tirou da Áustria cerca de um sexto de seus súditos.",
        "A vitória foi cara e não decisiva como Napoleão queria. Somadas às perdas de Aspern-Essling, as de Wagram eram difíceis de repor, em parte porque morreram soldados veteranos e mais de trinta generais. A demissão de Bernadotte teve efeito de longo prazo: ele foi eleito herdeiro do trono da Suécia e acabou lutando contra a França.",
        { h: "Curiosidades e controvérsias" },
        { note: "Segundo relatos, depois de demitir Bernadotte em Raasdorf, Napoleão disse: 'Um incompetente como você não me serve'. A frase vem de memórias, e as palavras exatas variam." },
        { note: "Macdonald foi o único marechal promovido no próprio campo de batalha. Napoleão também censurou Marmont por chegar devagar e Oudinot por atacar sem ordens." },
        { note: "As fontes divergem em alguns detalhes do ataque de Macdonald e nos números das perdas, que variam bastante conforme a contagem e o que se inclui nela." }
      ]}
    ]
  },

  bullrun1: {
    war: "Guerra Civil Americana (1861–1865)",
    hook: "Os civis de Washington saíram de carruagem com cestas de piquenique para ver a vitória do Norte. Voltaram correndo, no meio de um exército em fuga.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em abril de 1861, depois do ataque confederado ao Forte Sumter, a guerra civil começou. Onze estados do Sul tinham formado a [[confederação]], e o Norte, a [[união]], queria trazê-los de volta. A capital confederada, Richmond, ficava a pouco mais de 150 km de Washington. A imprensa do Norte gritava 'Para Richmond!', e o presidente Lincoln, pressionado, ordenou um avanço.",
        "O general Irvin McDowell recebeu o comando do exército. Ele sabia que seus soldados eram novatos, muitos deles [[voluntários de noventa dias]], e pediu mais tempo, mas não conseguiu. Em 16 de julho, saiu de Washington com cerca de 35.000 homens. A cerca de 50 km dali, em Manassas, o general P. G. T. Beauregard o esperava com o Exército do Potomac, de cerca de 22.000 homens, ao longo de um riacho chamado Bull Run.",
        { h: "O caminho até Bull Run" },
        { timeline: [
          ["16 jul 1861", "McDowell sai de Washington com cerca de 35.000 homens."],
          ["18 jul", "Escaramuça em Blackburn's Ford. Os federais são rechaçados."],
          ["18–21 jul", "Johnston leva tropas do vale do Shenandoah, de trem, até Manassas."],
          ["21 jul, 2h30", "Duas divisões federais saem de Centreville para flanquear a esquerda confederada."],
          ["21 jul, tarde", "Colina Henry House: a brigada de Jackson resiste."],
          ["21 jul, 17h", "O exército federal se desfaz em fuga."]
        ]},
        "A diferença decisiva estava longe do campo de batalha. O general Robert Patterson, com cerca de 18.000 federais, devia manter ocupado no vale do Shenandoah o general confederado Joseph E. Johnston. Não conseguiu, e Johnston pôde levar suas tropas de trem até Manassas, uma das primeiras vezes em que uma ferrovia decidiu o rumo de uma batalha."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Irvin McDowell" },
        "General federal, comandante do exército em campanha. Planejou bem: um ataque de flanco pela esquerda confederada, enquanto uma divisão distraía a frente. O plano falhou por falta de experiência de tropas e oficiais, e a marcha, lenta, deu tempo ao inimigo.",
        { h: "Beauregard e Johnston" },
        "P. G. T. Beauregard comandava o exército confederado em Manassas. Joseph E. Johnston era mais antigo, mas, na prática, deixou a direção do combate em grande parte a Beauregard. Ambos trabalharam bem juntos, e os trens de Johnston foram decisivos.",
        { h: "Thomas J. Jackson" },
        "Ex-professor de academia militar, comandava uma brigada da Virgínia. Por sua resistência na colina Henry House, ganhou o apelido que o tornaria famoso: 'Stonewall' (muro de pedra), ou assim se diz. Outros nomes importantes foram Nathan Evans, Barnard Bee e Francis Bartow, e do lado federal Daniel Tyler, David Hunter, Samuel Heintzelman e William T. Sherman."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia em inglês dá cerca de 35.000 homens a McDowell, dos quais cerca de 18.000 combateram. Do lado confederado, Beauregard tinha 21.883 homens efetivos, Johnston trouxe 8.884 do Shenandoah, e a brigada de Holmes somava mais 1.465, com cerca de 18.000 em combate. Os números efetivos variam um pouco conforme o autor.",
        { h: "O terreno" },
        "O riacho Bull Run corre por uma mata fechada, com poucas travessias. A ponte de pedra (Stone Bridge) leva a estrada de Warrenton a Manassas. Mais ao norte, o vau de Sudley permite cruzar o riacho. A colina Matthews fica ao sul do vau, e a colina Henry House, onde ficava a casa da viúva Judith Henry, perto dali, a sudeste.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, às 2h30 de 21 de julho, as divisões de Hunter e de Heintzelman, cerca de 12.000 homens, saíram de Centreville para um grande desvio, em direção ao vau de Sudley, para atacar a esquerda confederada. A divisão de Tyler, de cerca de 8.000 homens, foi até a Stone Bridge e chegou por volta das 6h, para distrair.",
        "Segundo, a marcha do desvio atrasou: estradas bloqueadas e tropas cansadas. Os homens só começaram a atravessar o riacho às 9h30. Mas o capitão E. P. Alexander, sinaleiro confederado, viu a coluna e mandou aviso a Evans: 'Cuidado com sua esquerda, sua posição foi contornada.' Evans, com cerca de 1.100 homens, levou 900 para a colina Matthews.",
        "Terceiro, na colina Matthews, Evans, depois reforçado por Bee e Bartow, segurou a primeira onda federal. Por volta das 10h, Sherman atravessou o riacho por um vau sem guarda, e pouco depois das 11h30 a linha confederada desmoronou. Os sobreviventes fugiram para a colina Henry House.",
        "Quarto, por volta do meio-dia, a brigada de Jackson chegou à colina com a Legião de Hampton, de cerca de 600 homens, e a cavalaria de Stuart. Jackson pôs 13 canhões no alto. As baterias federais de Ricketts e de Griffin, com 11 canhões, duelaram com eles a cerca de 300 jardas. Bee tentou reunir os homens em volta de Jackson. A frase 'Lá está Jackson, como um muro de pedra' é a mais citada, mas a origem do apelido é disputada.",
        "Quinto, por volta das 15h, a 33ª infantaria da Virgínia, que os federais tomaram por amigos, avançou sobre os canhões de Griffin e os capturou. Uma bateria de Imboden, com quatro canhões de 6 libras, ajudou a segurar os federais por um tempo.",
        "Sexto, por volta das 16h, a brigada de Cocke expulsou os últimos federais da colina. No mesmo horário, as brigadas de Early e de Kirby Smith, sob o comando de Elzey, que chegavam de trem e por marcha, atingiram o flanco direito federal na Chinn Ridge e destroçaram a brigada de Howard.",
        "Sétimo, às 17h, o exército federal se desfez. Uma carroça virou na ponte do riacho Cub Run, e o pânico se espalhou. Muitos soldados foram capturados. Os civis de Washington, que tinham vindo assistir, bloquearam as estradas. Os federais perderam 25 canhões.",
        "Oitavo, os confederados não perseguiram a fundo. O presidente Jefferson Davis, que chegou ao campo, queria perseguir, mas a tentativa de interceptar os fugitivos fracassou, e o general Bonham mandou parar. A debandada foi até Washington."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas confederadas, concordes nas fontes: 387 mortos, 1.582 feridos e 13 desaparecidos. As da União variam: o quadro principal da Wikipédia dá 2.708 (481 mortos, 1.011 feridos e 1.216 desaparecidos), e o texto dá outros números, com 460 mortos, 1.124 feridos e 1.312 desaparecidos ou capturados. Morreram o coronel James Cameron, pelo Norte, e o coronel Bartow, pelo Sul, e o general Bee morreu no dia seguinte.",
        { h: "Por que importa" },
        "Em 22 de julho, Lincoln sancionou uma lei para alistar mais 500.000 homens por até três anos. Em 25 de julho, McDowell foi substituído por George B. McClellan. Beauregard foi promovido a general pleno. Uma comissão do Congresso investigou a derrota, e a falha de Patterson em segurar Johnston entrou no relatório. Os historiadores veem Bull Run como um ponto de virada: mostrou aos dois lados que a guerra não seria curta.",
        { h: "Curiosidades e controvérsias" },
        { note: "A confusão entre a bandeira confederada e a da União, que na fumaça parecia a mesma, levou o Sul a adotar a bandeira de batalha, de fundo vermelho, que se tornou famosa." },
        { note: "O apelido 'Stonewall' tem origem disputada: as fontes divergem sobre quem disse a frase, e o que Bee quis dizer. Há quem a leia como elogio e quem a leia como crítica." },
        { note: "Os números da União variam entre o resumo e o quadro detalhado da fonte. O texto usa os dois e avisa quando divergem." }
      ]}
    ]
  },

  shiloh: {
    war: "Guerra Civil Americana (1861–1865)",
    hook: "Os confederados surpreenderam Grant no café da manhã, e a batalha mais sangrenta da guerra até então virou numa noite de chuva e canhoneiras.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No início de 1862, o Norte avançava no Oeste. Em fevereiro, o general Ulysses S. Grant tinha tomado os fortes Henry e Donelson, e abrira aos federais o rio Tennessee. Os confederados recuaram para o sul. O general Albert Sidney Johnston reuniu seu exército em Corinth, no Mississippi, um importante entroncamento ferroviário.",
        "Grant acampou com o Exército do Tennessee em Pittsburg Landing, na margem do rio, perto de uma pequena igreja chamada Shiloh. Esperava o Exército do Ohio, de Don Carlos Buell, para atacar Corinth juntos. Os soldados de Grant eram em boa parte novos e não cavaram trincheiras: não esperavam ser atacados.",
        { h: "O caminho até Shiloh" },
        { timeline: [
          ["Fev 1862", "Grant toma os fortes Henry e Donelson."],
          ["Mar 1862", "Grant acampa em Pittsburg Landing, à espera de Buell."],
          ["3 abr", "Johnston sai de Corinth com o exército."],
          ["6 abr, amanhecer", "Ataque de surpresa aos acampamentos federais."],
          ["6 abr, 14h30", "Johnston é morto."],
          ["6 abr, 17h30", "Prentiss se rende no Ninho de Vespas."],
          ["6 abr, noite", "Chegam as tropas de Buell e de Lew Wallace."],
          ["7 abr", "A União contra-ataca. Beauregard recua para Corinth."]
        ]},
        "O plano de Johnston era atacar antes de Buell chegar e empurrar Grant para longe do rio, para os pântanos do riacho Owl Creek. Era arriscado, mas se desse certo, destruiria um exército e salvaria Corinth."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ulysses S. Grant" },
        "Comandante federal, tinha 39 anos. No início, estava em Savannah, rio abaixo, e foi para o campo ao ouvir os canhões. Seus críticos disseram depois que ele foi pego de surpresa. Grant respondeu com o que faria a vida inteira: ficar firme, reorganizar e atacar no dia seguinte.",
        { h: "Albert Sidney Johnston" },
        "Comandante confederado, general de grande prestígio, considerado por Jefferson Davis o melhor do Sul. Morreu no primeiro dia, e Davis o chamaria de 'ponto de virada da nossa sorte' no Oeste. P. G. T. Beauregard assumiu o comando.",
        { h: "Os outros nomes" },
        "Entre os federais, o general William T. Sherman comandava a divisão do acampamento perto da igreja de Shiloh, e o general Benjamin Prentiss, a que foi surpreendida primeiro. W. H. L. Wallace, John McClernand e Stephen Hurlbut comandavam outras divisões. Don Carlos Buell vinha de Nashville com o Exército do Ohio, e Lew Wallace estava em Crump's Landing, ao norte. Pelos confederados, Hardee, Bragg, Polk e Breckinridge comandavam os corpos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia em inglês dá 66.812 homens à União (48.894 no Exército do Tennessee e 17.918 no Exército do Ohio), com 119 canhões, e 44.699 aos confederados (Exército do Mississippi), com 117 canhões. Nem todos estavam no campo no primeiro dia: o Exército do Ohio só chegou à noite.",
        { h: "O terreno" },
        "O campo fica na margem oeste do rio Tennessee, entre os riachos Owl Creek, ao norte, e Lick Creek, ao sul. O [[desembarcadouro]] de Pittsburg Landing era o único ponto de abastecimento e de fuga dos federais, com o rio atrás deles. O terreno era de mata fechada, com clareiras e fazendas. Uma [[estrada afundada]] no centro, cercada de mato, serviria de abrigo natural.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, no amanhecer de 6 de abril, os confederados, em três linhas sucessivas, avançaram do sudoeste. Uma patrulha federal, do major James Powell, tocou o inimigo em Fraley Field e deu o alarme, que chegou tarde.",
        "Segundo, os acampamentos de Prentiss e de Sherman foram invadidos logo no começo. Muitos federais foram atacados ainda no acampamento. Sherman e Prentiss recuaram, e as alas da União foram empurradas para trás. Grant chegou de manhã.",
        "Terceiro, os federais refizeram a linha ao longo da estrada afundada, o [[ninho de vespas]]. Prentiss e W. H. L. Wallace seguraram ali por horas contra assaltos repetidos, e deram tempo a Grant de montar uma nova linha. Hurlbut ficou perto, no pomar de pêssegos.",
        "Quarto, por volta das 14h30, Johnston foi mortalmente ferido, segundo relatos de testemunhas, por uma bala na perna que ele não notou a tempo, e Beauregard assumiu o comando. As canhoneiras federais entraram na luta à tarde.",
        "Quinto, os confederados reuniram cerca de 50 canhões contra o Ninho de Vespas. Os flancos federais cederam, e Prentiss se rendeu por volta das 17h30 com cerca de 2.200 homens. W. H. L. Wallace foi mortalmente ferido.",
        "Sexto, Grant montou então a 'última linha', com canhões e apoio das canhoneiras, no desembarcadouro. Beauregard parou os ataques pouco depois das 18h.",
        "Sétimo, à noite, as tropas de Buell começaram a chegar do outro lado do rio, e a divisão de Lew Wallace, que se perdera no caminho por uma estrada errada, chegou às 19h15. Choveu, e as canhoneiras bombardearam os confederados durante a noite.",
        "Oitavo, em 7 de abril, a União contra-atacou. O Exército do Ohio, de Buell, começou por volta das 5h, e o ataque geral de Grant veio às 10h30. Os confederados, que esperavam reforços de Van Dorn que não vieram, foram empurrados para trás.",
        "Nono, por volta das 13h, Beauregard começou a recuar para Corinth. O corpo de Breckinridge ficou na retaguarda perto da igreja de Shiloh, por volta das 14h, e a última artilharia saiu por volta das 15h30. Grant e Buell não perseguiram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A União teve 13.047 baixas (1.754 mortos, 8.408 feridos e 2.885 capturados ou desaparecidos), e a Confederação, 10.699 (1.728 mortos, 8.012 feridos e 959 capturados ou desaparecidos). Somadas, passam de 23.700, e a conta pode estar subestimada: alguns historiadores estimam cerca de 14.500 para a União e 12.000 para a Confederação.",
        { h: "Por que importa" },
        "A vitória federal abriu o vale do Mississippi. Corinth foi achada abandonada em 30 de maio, e Memphis e outras cidades do rio caíram para a União nos meses seguintes. As perdas acabaram com a ideia de uma guerra curta no Oeste.",
        "Grant foi muito criticado pela imprensa, em parte por um relato de Whitelaw Reid, e Buell foi tratado como herói. O general Henry Halleck assumiu o comando em 11 de abril. Segundo a tradição, Lincoln respondeu a quem pedia a cabeça de Grant: 'Não posso dispensar este homem; ele luta.' Em 1863, Grant tomaria Vicksburg. Lew Wallace foi criticado pela demora e acabou afastado do exército de Grant, mas Grant concluiu depois que a rota escolhida por ele se justificava.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome Shiloh vem de uma igreja do local, e a palavra, de origem hebraica, costuma ser traduzida como 'lugar de paz'. Um nome irônico para uma das batalhas mais sangrentas da guerra." },
        { note: "O debate sobre a 'surpresa': Grant não mandou cavar trincheiras, e muitos soldados foram atacados no acampamento. Sherman recebeu mais elogios do que críticas, e Grant foi o mais criticado. Os historiadores ainda discutem de quem foi a culpa." },
        { note: "O Parque Militar Nacional de Shiloh foi criado pelo Congresso americano em 27 de dezembro de 1894. As frases atribuídas a Lincoln e a Davis são citadas de segunda mão, e as palavras variam conforme o autor." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  wagram: {
    terrain: [
      { t: "sea", x: 0, y: 63, w: 100, h: 9, l: "Danúbio" },
      { t: "hill", x: 40, y: 62, rx: 12, ry: 3, l: "Ilha de Lobau" },
      { t: "note", x: 2, y: 33, l: "Riacho Russbach (esquema, sem escala)" },
      { t: "note", x: 12, y: 54, l: "Aspern e Essling" },
      { t: "note", x: 36, y: 31, l: "Aderklaa" },
      { t: "note", x: 52, y: 14, l: "Wagram" },
      { t: "note", x: 80, y: 31, l: "Markgrafneusiedl" }
    ],
    units: [
      { id: "fMa", s: "a", k: "inf", w: 7, h: 3, l: "Masséna (IV Corpo)" },
      { id: "fBe", s: "a", k: "inf", w: 7, h: 3, l: "Bernadotte (saxões)" },
      { id: "fMd", s: "a", k: "inf", w: 7, h: 3, l: "Macdonald (Exército da Itália)" },
      { id: "fOu", s: "a", k: "inf", w: 7, h: 3, l: "Oudinot (II Corpo)" },
      { id: "fDa", s: "a", k: "inf", w: 8, h: 3, l: "Davout (III Corpo)" },
      { id: "fCa", s: "a", k: "cav", w: 6, h: 3, l: "Cavalaria (Nansouty, Bessières)" },
      { id: "fGB", s: "a", k: "inf", w: 8, h: 2.5, l: "Grande bateria (Lauriston, 84 canhões)" },
      { id: "aKl", s: "b", k: "inf", w: 7, h: 3, l: "Klenau (VI Corpo)" },
      { id: "aBe", s: "b", k: "inf", w: 7, h: 3, l: "Bellegarde (I Corpo)" },
      { id: "aHo", s: "b", k: "inf", w: 8, h: 3, l: "Hohenzollern e Kollowrat" },
      { id: "aRo", s: "b", k: "inf", w: 7, h: 3, l: "Rosenberg (IV Corpo)" },
      { id: "aLi", s: "b", k: "cav", w: 6, h: 3, l: "Liechtenstein (cavalaria)" },
      { id: "aJo", s: "b", k: "inf", w: 6, h: 3, l: "Arquiduque João (13.000)" }
    ],
    steps: [
      { t: "5 de julho de 1809, fim da tarde. Os franceses, desdobrados ao sul, atravessaram o Danúbio a partir de Lobau. Os austríacos do arquiduque Carlos ocupam as alturas ao norte do riacho Russbach, de Aspern até Markgrafneusiedl.",
        p: { fMa: [20, 48], fBe: [38, 44], fMd: [52, 44], fOu: [66, 44], fDa: [82, 48], fCa: [50, 54], fGB: [30, 56],
             aKl: [18, 24], aBe: [36, 22], aHo: [56, 20], aRo: [82, 22], aLi: [66, 12], aJo: [93, 60] } },
      { t: "Entre as 19h e as 23h, os ataques franceses falham. Oudinot é repelido em Baumersdorf, o Exército da Itália recua com fogo amigo na fumaça, os saxões de Bernadotte se desfazem e Davout para diante de Markgrafneusiedl.",
        p: { fOu: [62, 36], fMd: [50, 34], fBe: [38, 50], fDa: [80, 38], fMa: [20, 50] } },
      { t: "6 de julho, ao amanhecer, o arquiduque Carlos ataca a linha toda. Rosenberg investe contra Davout, Bellegarde ocupa Aderklaa, e Klenau avança pela esquerda francesa, junto ao Danúbio.",
        p: { aRo: [78, 36], aBe: [36, 33], aKl: [18, 40], fDa: [80, 44], fBe: [38, 52], fMd: [52, 46], fOu: [66, 46] } },
      { t: "De manhã, Klenau empurra a divisão de Boudet para fora de Aspern e Essling. Masséna vai para Aderklaa, e Molitor retoma a aldeia por volta das 9h45. A esquerda francesa quase cede.",
        p: { aKl: [16, 48], fMa: [34, 38], aBe: [38, 30], fBe: [44, 46] } },
      { t: "Napoleão fecha o buraco: os couraceiros de Nansouty carregam, e Lauriston reúne a grande bateria de 84 canhões diante do centro austríaco. Davout toma Markgrafneusiedl depois de duas horas de duelo de artilharia.",
        p: { fGB: [52, 38], fCa: [58, 40], fDa: [80, 30], aRo: [84, 24] } },
      { t: "Por volta das 13h, a coluna de Macdonald, com cerca de 8.000 homens, avança contra Süssenbrunn, protegida pela grande bateria. Os quadrados e a cavalaria austríacos a detêm, com muitas baixas.",
        p: { fMd: [52, 28], fGB: [52, 36], aHo: [56, 22] } },
      { t: "Davout empurra a esquerda austríaca para o norte, e Masséna retoma Essling e Aspern e persegue Klenau. A direita e a esquerda austríacas se curvam.",
        p: { fDa: [78, 22], aRo: [90, 14], fMa: [22, 36], aKl: [18, 22] } },
      { t: "Por volta das 16h, o arquiduque Carlos, com a esquerda quebrada, admite a derrota e recua em boa ordem para o norte.",
        p: { aBe: [36, 12], aHo: [56, 10], aLi: [66, 6], aKl: [18, 12], aRo: [86, 8] } },
      { t: "Por volta das 17h, o arquiduque João chega com cerca de 13.000 homens, tarde demais. Napoleão, com os soldados exaustos e as caixas de munição vazias, não persegue com força.",
        p: { aJo: [94, 38] } }
    ]
  },

  bullrun1: {
    terrain: [
      { t: "sea", x: 0, y: 34, w: 100, h: 3.5, l: "Riacho Bull Run (esquema, sem escala)" },
      { t: "hill", x: 36, y: 46, rx: 7, ry: 3.5, l: "Colina Matthews" },
      { t: "hill", x: 52, y: 54, rx: 7, ry: 4, l: "Colina Henry House" },
      { t: "note", x: 14, y: 30, l: "Vau de Sudley" },
      { t: "note", x: 66, y: 30, l: "Stone Bridge" },
      { t: "note", x: 84, y: 5, l: "Centreville" },
      { t: "note", x: 4, y: 66, l: "← Manassas" }
    ],
    units: [
      { id: "uTy", s: "a", k: "inf", w: 7, h: 3, l: "Tyler (distração)" },
      { id: "uHu", s: "a", k: "inf", w: 7, h: 3, l: "Hunter" },
      { id: "uHe", s: "a", k: "inf", w: 7, h: 3, l: "Heintzelman" },
      { id: "uRi", s: "a", k: "inf", w: 7, h: 3, l: "Baterias de Ricketts e Griffin" },
      { id: "cEv", s: "b", k: "inf", w: 6, h: 3, l: "Evans" },
      { id: "cBe", s: "b", k: "inf", w: 7, h: 3, l: "Bee e Bartow" },
      { id: "cJa", s: "b", k: "inf", w: 7, h: 3, l: "Jackson (13 canhões)" },
      { id: "cBr", s: "b", k: "inf", w: 8, h: 3, l: "Beauregard (direita)" },
      { id: "cKS", s: "b", k: "inf", w: 8, h: 3, l: "Kirby Smith e Early (de trem)" }
    ],
    steps: [
      { t: "21 de julho de 1861, 2h30. McDowell faz um grande desvio com Hunter e Heintzelman, de Centreville ao vau de Sudley, para atacar a esquerda confederada. Tyler vai à Stone Bridge para distrair.",
        p: { uTy: [70, 24], uHu: [80, 10], uHe: [88, 10], uRi: [76, 16],
             cEv: [68, 42], cBe: [56, 62], cJa: [48, 66], cBr: [88, 44], cKS: [18, 66] } },
      { t: "Por volta das 6h, Tyler chega à Stone Bridge e dispara. A coluna do desvio atrasa e só começa a atravessar às 9h30. Um aviso a Evans chega a tempo: ele leva cerca de 900 homens para a colina Matthews.",
        p: { uTy: [70, 28], uHu: [40, 8], uHe: [48, 8], cEv: [40, 44] } },
      { t: "Entre as 10h e as 11h30, Evans, reforçado por Bee e Bartow, segura a primeira onda na colina Matthews. Sherman cruza um vau sem guarda e a linha confederada cede, com os sobreviventes correndo para a colina Henry House.",
        p: { uHu: [26, 30], uHe: [34, 34], cEv: [38, 46], cBe: [40, 50], uTy: [66, 34] } },
      { t: "Por volta do meio-dia, a brigada de Jackson, com 13 canhões, firma-se na colina Henry House. As baterias federais de Ricketts e de Griffin duelam com ele a cerca de 300 jardas. Bee reúne os homens atrás dele. É aí que nasce o apelido 'Stonewall', segundo a tradição.",
        p: { cJa: [52, 52], cBe: [46, 58], cEv: [42, 56], uRi: [44, 44], uHu: [38, 40], uHe: [46, 40] } },
      { t: "Por volta das 15h, a 33ª infantaria da Virgínia, tomada por amiga, captura os canhões de Griffin. A linha federal oscila.",
        p: { cJa: [52, 50], uRi: [48, 46] }, x: ["uRi"] },
      { t: "Por volta das 16h, Cocke expulsa os últimos federais da colina, e as brigadas de Early e de Kirby Smith, chegadas de trem de Shenandoah, atingem o flanco direito federal na Chinn Ridge.",
        p: { cKS: [66, 52], cJa: [52, 46], cBr: [76, 46] } },
      { t: "Às 17h o exército federal se desfaz. Uma carroça vira na ponte do Cub Run e o pânico toma a estrada, cheia de civis de Washington que tinham ido assistir. Os federais perdem 25 canhões.",
        p: { uHu: [46, 24], uHe: [58, 24], uTy: [74, 22], cJa: [50, 40], cBe: [46, 44] }, x: ["uHu", "uHe", "uTy"] },
      { t: "Os confederados não perseguem a fundo. Davis, no campo, quer perseguir, mas a tentativa de interceptar os fugitivos fracassa, e Bonham manda parar. Os federais chegam a Washington na manhã seguinte.",
        p: { cJa: [50, 38], cKS: [64, 44] } }
    ]
  },

  shiloh: {
    terrain: [
      { t: "sea", x: 90, y: 0, w: 12, h: 72, l: "Rio Tennessee" },
      { t: "note", x: 2, y: 4, l: "Owl Creek (norte)" },
      { t: "note", x: 52, y: 64, l: "Lick Creek (sul)" },
      { t: "note", x: 2, y: 64, l: "← Corinth (esquema, sem escala)" },
      { t: "note", x: 34, y: 20, l: "Igreja de Shiloh" },
      { t: "hill", x: 50, y: 40, rx: 5, ry: 2.5, l: "Ninho de Vespas" },
      { t: "note", x: 66, y: 48, l: "Pomar de pêssegos" },
      { t: "note", x: 78, y: 54, l: "Pittsburg Landing" }
    ],
    units: [
      { id: "uSh", s: "a", k: "inf", w: 6, h: 3, l: "Sherman" },
      { id: "uMc", s: "a", k: "inf", w: 6, h: 3, l: "McClernand" },
      { id: "uPr", s: "a", k: "inf", w: 6, h: 3, l: "Prentiss" },
      { id: "uWa", s: "a", k: "inf", w: 6, h: 3, l: "W. H. L. Wallace" },
      { id: "uHu", s: "a", k: "inf", w: 6, h: 3, l: "Hurlbut" },
      { id: "uBu", s: "a", k: "inf", w: 6, h: 3, l: "Buell (Exército do Ohio)" },
      { id: "uLw", s: "a", k: "inf", w: 6, h: 3, l: "Lew Wallace" },
      { id: "uGb", s: "a", k: "ship", w: 5, h: 2.5, l: "Canhoneiras" },
      { id: "cHa", s: "b", k: "inf", w: 7, h: 3, l: "Hardee" },
      { id: "cBr", s: "b", k: "inf", w: 7, h: 3, l: "Bragg" },
      { id: "cPo", s: "b", k: "inf", w: 7, h: 3, l: "Polk" },
      { id: "cBk", s: "b", k: "inf", w: 7, h: 3, l: "Breckinridge (reserva)" }
    ],
    steps: [
      { t: "Domingo, 6 de abril de 1862, amanhecer. Os federais acampam desprevenidos ao redor da igreja de Shiloh, com o rio Tennessee atrás. Os confederados, em linhas sucessivas, chegam do sudoeste.",
        p: { uSh: [38, 24], uMc: [52, 24], uPr: [40, 38], uWa: [54, 40], uHu: [64, 50], uBu: [96, 20], uLw: [60, 6], uGb: [88, 58],
             cHa: [20, 30], cBr: [14, 38], cPo: [8, 30], cBk: [6, 44] } },
      { t: "Os confederados atacam de surpresa. Os acampamentos de Prentiss e de Sherman são invadidos, e as alas federais são empurradas para trás. Grant chega ao campo de manhã.",
        p: { cHa: [34, 32], cBr: [30, 40], cPo: [26, 28], uPr: [46, 40], uSh: [48, 30], uMc: [58, 30] } },
      { t: "Prentiss e W. H. L. Wallace seguram a estrada afundada, o Ninho de Vespas, por horas, contra assaltos repetidos, e dão a Grant tempo para montar a linha nova. Hurlbut fica no pomar de pêssegos.",
        p: { uPr: [50, 42], uWa: [54, 44], uHu: [64, 46], cBr: [42, 42], cBk: [30, 46] } },
      { t: "Por volta das 14h30, Johnston é mortalmente ferido e Beauregard assume o comando. As canhoneiras federais entram na luta.",
        p: { cPo: [58, 54], uGb: [86, 52] } },
      { t: "Os confederados reúnem cerca de 50 canhões contra o Ninho de Vespas. Os flancos cedem, W. H. L. Wallace é ferido de morte, e Prentiss se rende por volta das 17h30 com cerca de 2.200 homens.",
        p: { cBr: [52, 44], cHa: [54, 36], cBk: [44, 48], uWa: [60, 46], uMc: [68, 36] }, x: ["uPr"] },
      { t: "Grant forma a 'última linha' junto ao desembarcadouro, com canhões e canhoneiras. Pouco depois das 18h, Beauregard para os ataques.",
        p: { uMc: [74, 46], uWa: [76, 52], uHu: [72, 56], uSh: [70, 40], cBr: [60, 46], cHa: [62, 38], cBk: [56, 50] } },
      { t: "À noite, as tropas de Buell chegam do outro lado do rio. A divisão de Lew Wallace, que errou o caminho, chega às 19h15. Chove, e as canhoneiras castigam os confederados a noite toda.",
        p: { uBu: [82, 60], uLw: [68, 34], uGb: [86, 46] } },
      { t: "7 de abril. A União contra-ataca. O exército de Buell começa por volta das 5h, e o ataque geral de Grant vem às 10h30. Os confederados são empurrados para trás.",
        p: { uBu: [66, 44], uLw: [54, 30], uSh: [52, 36], uMc: [58, 42], uHu: [62, 50], cBr: [40, 44], cHa: [38, 36], cBk: [34, 48], cPo: [44, 52] } },
      { t: "Por volta das 13h, Beauregard recua para Corinth. Breckinridge faz a retaguarda perto da igreja por volta das 14h, e a última artilharia sai por volta das 15h30. Grant e Buell não perseguem.",
        p: { cBk: [24, 38], cBr: [14, 44], cHa: [16, 34], cPo: [12, 50] } }
    ]
  }
});
