// Battle data. Troop numbers are historians' estimates; ancient sources often exaggerate.
// era: "antiga" (before 500), "medieval" (500-1500), "moderna" (1500-1900), "contemporanea" (1900+)
const BATTLES = [
  {
    id: "maratona", name: "Maratona", year: -490, date: "Setembro de 490 a.C.", era: "antiga",
    place: "Planície de Maratona, Grécia", lat: 38.118, lng: 23.978,
    a: { side: "Atenas e Plateia", leader: "Milcíades", troops: "≈ 10.000", n: 10000 },
    b: { side: "Império Persa", leader: "Dátis e Artafernes", troops: "≈ 20.000 a 25.000", n: 22500 },
    winner: "a",
    summary: "Os persas desembarcaram a 40 km de Atenas para punir a cidade por apoiar revoltas gregas na Ásia. Os atenienses, sozinhos com Plateia, decidiram atacar em vez de esperar.",
    phases: [
      "Milcíades afinou o centro da linha grega e reforçou as pontas, para cobrir a mesma largura que o exército persa.",
      "Os hoplitas avançaram correndo os últimos metros, para escapar das flechas persas.",
      "O centro grego recuou, mas as pontas venceram e se fecharam por trás dos persas, que fugiram para os navios."
    ],
    result: "Segundo Heródoto, morreram 6.400 persas e 192 atenienses.",
    legacy: "Foi a primeira grande vitória grega sobre a Pérsia. Diz a lenda que um mensageiro correu até Atenas para dar a notícia, e daí vem o nome da prova de corrida."
  },
  {
    id: "termopilas", name: "Termópilas", year: -480, date: "Agosto de 480 a.C.", era: "antiga",
    place: "Desfiladeiro das Termópilas, Grécia", lat: 38.796, lng: 22.536,
    a: { side: "Aliança grega", leader: "Leônidas I de Esparta", troops: "≈ 7.000 (300 espartanos)", n: 7000 },
    b: { side: "Império Persa", leader: "Xerxes I", troops: "≈ 100.000 a 150.000", n: 120000 },
    winner: "b",
    summary: "Xerxes invadiu a Grécia com um dos maiores exércitos da Antiguidade. Os gregos tentaram segurá-lo num desfiladeiro estreito entre a montanha e o mar.",
    phases: [
      "Por dois dias, a passagem estreita anulou a vantagem numérica persa. Nem os Imortais, a guarda de elite de Xerxes, conseguiram passar.",
      "Um grego chamado Efialtes mostrou aos persas uma trilha pelas montanhas que dava na retaguarda grega.",
      "Leônidas mandou embora a maior parte do exército e ficou com cerca de 300 espartanos, 700 téspios e outros aliados. Todos morreram lutando."
    ],
    result: "Vitória persa. Atenas foi incendiada semanas depois.",
    legacy: "Virou o maior símbolo de resistência contra todas as chances. A frota persa foi derrotada em Salamina no mesmo ano."
  },
  {
    id: "gaugamela", name: "Gaugamela", year: -331, date: "1º de outubro de 331 a.C.", era: "antiga",
    place: "Perto de Mosul, atual Iraque", lat: 36.36, lng: 43.25,
    a: { side: "Macedônia", leader: "Alexandre, o Grande", troops: "≈ 47.000", n: 47000 },
    b: { side: "Império Persa", leader: "Dario III", troops: "≈ 50.000 a 100.000", n: 75000 },
    winner: "a",
    summary: "Dario escolheu uma planície aberta e mandou aplanar o terreno para seus carros de guerra com foices nas rodas. Queria acabar com Alexandre de uma vez.",
    phases: [
      "Alexandre avançou em diagonal para a direita, puxando a cavalaria persa para fora do terreno preparado.",
      "Os carros com foices atacaram, mas a infantaria macedônia abriu corredores e deixou que eles passassem sem causar estrago.",
      "Abriu-se um buraco no centro persa. Alexandre atacou por ali com a cavalaria dos Companheiros, direto em Dario, que fugiu."
    ],
    result: "Vitória decisiva da Macedônia. Dario foi assassinado pelos próprios nobres no ano seguinte.",
    legacy: "Foi o fim do Império Persa aquemênida, que tinha 200 anos. Alexandre virou senhor do Egito à Índia."
  },
  {
    id: "canas", name: "Canas", year: -216, date: "2 de agosto de 216 a.C.", era: "antiga",
    place: "Apúlia, sul da Itália", lat: 41.306, lng: 16.132,
    a: { side: "Cartago", leader: "Aníbal Barca", troops: "≈ 50.000", n: 50000 },
    b: { side: "República Romana", leader: "Varrão e Emílio Paulo", troops: "≈ 86.000", n: 86000 },
    winner: "a",
    summary: "Aníbal tinha atravessado os Alpes com elefantes e já derrotara Roma duas vezes. Roma juntou o maior exército da sua história para esmagá-lo.",
    phases: [
      "Aníbal formou o centro em arco, curvado para frente, com gauleses e hispânicos. Nas pontas, pôs sua melhor infantaria africana.",
      "Os romanos empurraram o centro, que recuou de propósito, e foram sendo sugados para dentro do arco.",
      "Os africanos fecharam pelos lados e a cavalaria cartaginesa atacou por trás. Os romanos ficaram cercados e apertados demais até para lutar."
    ],
    result: "Morreram cerca de 50.000 romanos, entre eles o cônsul Emílio Paulo.",
    legacy: "É o exemplo mais famoso de cerco duplo, estudado até hoje nas academias militares. Mesmo assim Roma não se rendeu e venceu a guerra 14 anos depois."
  },
  {
    id: "alesia", name: "Alésia", year: -52, date: "Setembro de 52 a.C.", era: "antiga",
    place: "Borgonha, França", lat: 47.537, lng: 4.5,
    a: { side: "República Romana", leader: "Júlio César", troops: "≈ 60.000", n: 60000 },
    b: { side: "Tribos gaulesas", leader: "Vercingetórix", troops: "≈ 80.000 sitiados + exército de socorro", n: 180000 },
    winner: "a",
    summary: "Vercingetórix uniu as tribos gaulesas contra Roma e se refugiou na fortaleza de Alésia, no alto de um morro.",
    phases: [
      "César cercou o morro com cerca de 18 km de muralhas, fossos e armadilhas, para matar os gauleses de fome.",
      "Quando soube que um enorme exército gaulês vinha socorrer a cidade, construiu um segundo anel, de uns 21 km, virado para fora.",
      "Os romanos lutaram entre os dois anéis, atacados de dentro e de fora ao mesmo tempo. César levou a cavalaria pessoalmente ao ponto mais fraco e virou a batalha."
    ],
    result: "Vercingetórix se rendeu. Foi exibido em Roma e executado anos depois.",
    legacy: "Foi o fim da Gália independente. A vitória deu a César o prestígio que ele usou para tomar o poder em Roma."
  },
  {
    id: "teutoburgo", name: "Floresta de Teutoburgo", year: 9, date: "Setembro de 9 d.C.", era: "antiga",
    place: "Kalkriese, Alemanha", lat: 52.408, lng: 8.13,
    a: { side: "Tribos germânicas", leader: "Armínio", troops: "≈ 15.000 a 20.000", n: 17500 },
    b: { side: "Império Romano", leader: "Públio Quintílio Varo", troops: "3 legiões, ≈ 15.000 a 20.000", n: 17500 },
    winner: "a",
    summary: "Armínio era um germânico criado em Roma e oficial do exército romano. Varo confiava nele, e ele o traiu.",
    phases: [
      "Armínio convenceu Varo a desviar a marcha para reprimir uma suposta revolta, por um caminho de floresta e pântano.",
      "Com chuva forte, a coluna romana se esticou por quilômetros numa trilha estreita, sem conseguir entrar em formação.",
      "Os germânicos atacaram durante três dias seguidos. Varo se matou, e as três legiões foram destruídas."
    ],
    result: "As legiões XVII, XVIII e XIX foram aniquiladas e nunca mais receberam esses números.",
    legacy: "Roma desistiu de conquistar a Germânia, e o rio Reno virou fronteira por 400 anos. Dizem que Augusto gritava: \"Varo, devolve minhas legiões!\""
  },
  {
    id: "penhascos", name: "Penhascos Vermelhos", year: 208, date: "Inverno de 208 d.C.", era: "antiga",
    place: "Rio Yangtzé, China", lat: 29.88, lng: 113.62,
    a: { side: "Aliança de Sun Quan e Liu Bei", leader: "Zhou Yu", troops: "≈ 50.000", n: 50000 },
    b: { side: "Cao Cao", leader: "Cao Cao", troops: "≈ 200.000 (segundo as fontes)", n: 200000 },
    winner: "a",
    summary: "Cao Cao dominava o norte da China e desceu o Yangtzé com uma frota gigante para conquistar o sul.",
    phases: [
      "O exército de Cao Cao, vindo do norte, sofria com doenças e com a falta de costume de lutar na água.",
      "Um general aliado, Huang Gai, fingiu querer se render e foi até a frota de Cao Cao com barcos cheios de lenha e óleo.",
      "Perto da frota, os barcos foram incendiados. O vento espalhou o fogo pelos navios inimigos e pelos acampamentos na margem."
    ],
    result: "Cao Cao recuou para o norte com grandes perdas.",
    legacy: "A China ficou dividida em três reinos por décadas. A batalha é uma das cenas centrais do clássico \"Romance dos Três Reinos\"."
  },
  {
    id: "ainjalut", name: "Ain Jalut", year: 1260, date: "3 de setembro de 1260", era: "medieval",
    place: "Vale de Jezreel, atual Israel", lat: 32.55, lng: 35.36,
    a: { side: "Sultanato Mameluco do Egito", leader: "Qutuz e Baibars", troops: "≈ 15.000 a 20.000", n: 17500 },
    b: { side: "Império Mongol", leader: "Kitbuqa", troops: "≈ 10.000 a 20.000", n: 15000 },
    winner: "a",
    summary: "Os mongóis tinham acabado de destruir Bagdá e pareciam impossíveis de parar. O Egito era o próximo alvo.",
    phases: [
      "Baibars atacou com uma vanguarda e depois fingiu fugir, a velha tática dos próprios mongóis.",
      "Kitbuqa perseguiu os fugitivos até o vale, onde o grosso do exército mameluco estava escondido nas colinas.",
      "Os mamelucos fecharam o cerco. Kitbuqa foi capturado e executado."
    ],
    result: "Vitória mameluca.",
    legacy: "Foi a primeira grande derrota mongol numa batalha campal, e o avanço deles no Oriente Médio parou ali."
  },
  {
    id: "hastings", name: "Hastings", year: 1066, date: "14 de outubro de 1066", era: "medieval",
    place: "Sussex, Inglaterra", lat: 50.912, lng: 0.487,
    a: { side: "Normandos", leader: "Guilherme, duque da Normandia", troops: "≈ 7.000 a 8.000", n: 7500 },
    b: { side: "Reino da Inglaterra", leader: "Haroldo II", troops: "≈ 7.000 a 8.000", n: 7500 },
    winner: "a",
    summary: "Haroldo tinha acabado de vencer uma invasão viking no norte quando Guilherme desembarcou no sul. Marchou 400 km para enfrentá-lo.",
    phases: [
      "Os ingleses formaram uma parede de escudos no alto de uma colina e resistiram durante horas.",
      "Os normandos fingiram fugir mais de uma vez. Parte dos ingleses desceu a colina para persegui-los e foi cercada.",
      "Haroldo morreu no fim da tarde, segundo a tradição com uma flecha no olho, e a defesa inglesa desmoronou."
    ],
    result: "Guilherme foi coroado rei da Inglaterra no Natal de 1066.",
    legacy: "A conquista normanda mudou a Inglaterra: a nobreza, a arquitetura e até a língua, que absorveu milhares de palavras francesas."
  },
  {
    id: "azincourt", name: "Azincourt", year: 1415, date: "25 de outubro de 1415", era: "medieval",
    place: "Norte da França", lat: 50.463, lng: 2.142,
    a: { side: "Reino da Inglaterra", leader: "Henrique V", troops: "≈ 6.000 a 9.000 (maioria arqueiros)", n: 7500 },
    b: { side: "Reino da França", leader: "Charles d'Albret", troops: "≈ 12.000 a 15.000", n: 13500 },
    winner: "a",
    summary: "O exército inglês, cansado e doente, tentava voltar para casa quando os franceses o encurralaram, durante a Guerra dos Cem Anos.",
    phases: [
      "O campo era estreito, entre dois bosques, e estava encharcado de lama depois de uma noite de chuva.",
      "Os cavaleiros franceses, com armaduras pesadas, atolaram na lama debaixo de uma chuva de flechas dos arcos longos ingleses.",
      "As ondas francesas se amontoaram umas sobre as outras. Os arqueiros largaram os arcos e lutaram com machados e espadas."
    ],
    result: "Vitória inglesa, com milhares de nobres franceses mortos ou capturados.",
    legacy: "Foi a vitória do arco longo sobre a cavalaria pesada. Shakespeare a imortalizou em \"Henrique V\"."
  },
  {
    id: "lepanto", name: "Lepanto", year: 1571, date: "7 de outubro de 1571", era: "moderna",
    place: "Golfo de Patras, Grécia", lat: 38.25, lng: 21.3,
    a: { side: "Liga Santa (Espanha, Veneza, Papado)", leader: "D. João da Áustria", troops: "≈ 200 galés", n: 212 },
    b: { side: "Império Otomano", leader: "Ali Paxá", troops: "≈ 210 galés e 60 a 90 galiotas", n: 270 },
    winner: "a",
    summary: "Os otomanos tinham tomado Chipre de Veneza. As potências católicas se uniram para enfrentar a frota turca.",
    phases: [
      "As duas frotas se enfrentaram em linhas de quilômetros. A Liga pôs à frente seis galeaças, navios enormes cheios de canhões.",
      "As galeaças desorganizaram a frota otomana antes do choque principal.",
      "As capitânias se abordaram como num campo de batalha flutuante. Ali Paxá foi morto, e a frota turca se desfez."
    ],
    result: "Os otomanos perderam a maior parte da frota.",
    legacy: "Foi uma das últimas grandes batalhas de galés a remo. Miguel de Cervantes, autor de Dom Quixote, lutou nela e perdeu os movimentos da mão esquerda."
  },
  {
    id: "guararapes", name: "Guararapes", year: 1648, date: "19 de abril de 1648", era: "moderna",
    place: "Jaboatão dos Guararapes, Pernambuco", lat: -8.16, lng: -34.94,
    a: { side: "Luso-brasileiros", leader: "Francisco Barreto, Vidal de Negreiros, Henrique Dias, Filipe Camarão", troops: "≈ 2.200", n: 2200 },
    b: { side: "Holanda (WIC)", leader: "Sigismund von Schkoppe", troops: "≈ 4.500", n: 4500 },
    winner: "a",
    summary: "Os holandeses dominavam o Nordeste açucareiro havia quase 20 anos. Uma insurreição local resolveu expulsá-los.",
    phases: [
      "Os luso-brasileiros, em menor número, ocuparam os morros e os pântanos dos Guararapes, que conheciam bem.",
      "Os holandeses, treinados para lutar em campo aberto, se atrapalharam no terreno estreito.",
      "Brancos, indígenas (com Filipe Camarão) e negros (com Henrique Dias) atacaram juntos, em táticas de guerrilha."
    ],
    result: "Vitória luso-brasileira. Uma segunda batalha no mesmo lugar, em 1649, confirmou o resultado.",
    legacy: "Os holandeses saíram do Brasil em 1654. A data de 19 de abril é comemorada como o Dia do Exército Brasileiro."
  },
  {
    id: "waterloo", name: "Waterloo", year: 1815, date: "18 de junho de 1815", era: "moderna",
    place: "Perto de Bruxelas, Bélgica", lat: 50.68, lng: 4.41,
    a: { side: "Coalizão (Reino Unido, Prússia e aliados)", leader: "Wellington e Blücher", troops: "≈ 68.000 + 50.000 prussianos", n: 118000 },
    b: { side: "Império Francês", leader: "Napoleão Bonaparte", troops: "≈ 73.000", n: 73000 },
    winner: "a",
    summary: "Napoleão fugiu do exílio em Elba e retomou o poder. A Europa se uniu outra vez contra ele.",
    phases: [
      "A chuva da noite atrasou o início do ataque francês, o que deu tempo para os prussianos se aproximarem.",
      "Os franceses atacaram durante horas a fazenda de Hougoumont e o centro de Wellington, sem conseguir romper.",
      "Os prussianos chegaram pelo flanco. O ataque final da Guarda Imperial foi repelido, e o exército francês fugiu."
    ],
    result: "Napoleão abdicou quatro dias depois e foi exilado em Santa Helena, onde morreu.",
    legacy: "Foi o fim da era napoleônica. \"Waterloo\" virou sinônimo de derrota definitiva."
  },
  {
    id: "riachuelo", name: "Riachuelo", year: 1865, date: "11 de junho de 1865", era: "moderna",
    place: "Rio Paraná, perto de Corrientes, Argentina", lat: -27.55, lng: -58.8,
    a: { side: "Império do Brasil", leader: "Almirante Barroso", troops: "9 navios", n: 9 },
    b: { side: "Paraguai", leader: "Pedro Ignacio Meza", troops: "8 vapores + 6 ou 7 chatas e artilharia na margem", n: 14 },
    winner: "a",
    summary: "No início da Guerra do Paraguai, a frota paraguaia tentou surpreender a esquadra brasileira ancorada no rio Paraná.",
    phases: [
      "Os paraguaios atacaram de manhã, com apoio de canhões escondidos nas barrancas do rio.",
      "Segundo a tradição, Barroso mandou o sinal: \"O Brasil espera que cada um cumpra o seu dever\".",
      "Na fragata Amazonas, ele usou o próprio casco como aríete e afundou ou inutilizou vários navios inimigos."
    ],
    result: "A frota paraguaia foi praticamente destruída.",
    legacy: "O Paraguai perdeu a esquadra e o controle do Paraná, e a vitória definiu o rumo da guerra. O 11 de junho é a Data Magna da Marinha do Brasil."
  },
  {
    id: "midway", name: "Midway", year: 1942, date: "4 a 7 de junho de 1942", era: "contemporanea",
    place: "Atol de Midway, Oceano Pacífico", lat: 28.2, lng: -177.37,
    a: { side: "Estados Unidos", leader: "Nimitz e Spruance", troops: "3 porta-aviões", n: 3 },
    b: { side: "Japão", leader: "Yamamoto e Nagumo", troops: "4 porta-aviões (na força de ataque)", n: 4 },
    winner: "a",
    summary: "Seis meses depois de Pearl Harbor, o Japão quis atrair a frota americana para uma armadilha em Midway.",
    phases: [
      "Os americanos tinham decifrado parte do código naval japonês e sabiam onde e quando seria o ataque.",
      "Os primeiros ataques americanos fracassaram, mas deixaram a defesa aérea japonesa ocupada lá embaixo.",
      "Em poucos minutos, os bombardeiros de mergulho americanos acertaram três porta-aviões cheios de aviões e combustível. O quarto afundou horas depois."
    ],
    result: "O Japão perdeu 4 porta-aviões, e os EUA perderam 1, o Yorktown.",
    legacy: "Foi a virada da guerra no Pacífico. A partir dali, o Japão passou a se defender."
  },
  {
    id: "stalingrado", name: "Stalingrado", year: 1942, date: "Agosto de 1942 a fevereiro de 1943", era: "contemporanea",
    place: "Volgogrado, Rússia", lat: 48.708, lng: 44.513,
    a: { side: "União Soviética", leader: "Jukov, Tchuikov", troops: "mais de 1 milhão (ao longo da batalha)", n: 1100000 },
    b: { side: "Alemanha e aliados do Eixo", leader: "Friedrich Paulus", troops: "≈ 1 milhão (ao longo da batalha)", n: 1000000 },
    winner: "a",
    summary: "Hitler queria a cidade que tinha o nome de Stálin e o controle do rio Volga, no caminho do petróleo do Cáucaso.",
    phases: [
      "Os alemães tomaram quase toda a cidade, mas a luta virou um combate de rua, de prédio em prédio, às vezes de andar em andar.",
      "Em 19 de novembro de 1942, a Operação Urano atacou os flancos, defendidos por romenos, e cercou o 6º Exército alemão.",
      "Sem suprimentos, no inverno russo, Paulus se rendeu em 31 de janeiro de 1943, e o último bolsão, em 2 de fevereiro."
    ],
    result: "Cerca de 91.000 alemães foram capturados. Somando os dois lados, as baixas passam de 1,5 milhão, segundo estimativas.",
    legacy: "É uma das batalhas mais sangrentas da história e a virada da guerra no front oriental."
  },
  {
    id: "normandia", name: "Dia D (Normandia)", year: 1944, date: "6 de junho de 1944", era: "contemporanea",
    place: "Costa da Normandia, França", lat: 49.37, lng: -0.87,
    a: { side: "Aliados (EUA, Reino Unido, Canadá e outros)", leader: "Dwight Eisenhower", troops: "≈ 156.000 no primeiro dia", n: 156000 },
    b: { side: "Alemanha", leader: "Erwin Rommel e von Rundstedt", troops: "≈ 50.000 na costa atacada", n: 50000 },
    winner: "a",
    summary: "O maior desembarque anfíbio da história, para abrir uma frente no oeste e libertar a França ocupada.",
    phases: [
      "Na madrugada, paraquedistas caíram atrás das linhas para tomar pontes e cruzamentos.",
      "De manhã, as tropas desembarcaram em cinco praias: Utah, Omaha, Gold, Juno e Sword. Omaha foi a mais sangrenta.",
      "Uma operação de despistamento tinha convencido Hitler de que o ataque principal seria em Calais, e as reservas alemãs demoraram a chegar."
    ],
    result: "No fim do dia, os Aliados tinham uma cabeça de praia na França.",
    legacy: "Paris foi libertada em agosto, e a Alemanha se rendeu 11 meses depois."
  }
];
