// Army deployment diagrams, as data. Canvas is 100 x 70 units. Schematic, not to scale.
// units: id, s (side "a" | "b"), k (kind: inf | cav | ele | car | ship | camp), w, h, l (label)
// steps: t (caption), p (unit id -> [x, y, rotation]); positions carry over from the previous step.
//        x lists the units that are broken or routed from this step on (drawn faded).
//        sw (unit id -> "a" | "b") switches a unit to the other side from this step on (a defection).
// terrain: sea {x,y,w,h,l} | hill {x,y,rx,ry,l} | note {x,y,l}
const FORMATIONS = {
  maratona: {
    terrain: [{ t: "sea", x: 0, y: 0, w: 100, h: 8, l: "Mar (navios persas)" }],
    units: [
      { id: "gL", s: "a", k: "inf", w: 18, h: 7, l: "Ala reforçada" },
      { id: "gC", s: "a", k: "inf", w: 26, h: 3.5, l: "Centro fino" },
      { id: "gR", s: "a", k: "inf", w: 18, h: 7, l: "Ala reforçada" },
      { id: "pL", s: "b", k: "inf", w: 18, h: 6, l: "" },
      { id: "pC", s: "b", k: "inf", w: 26, h: 6, l: "Melhores tropas persas" },
      { id: "pR", s: "b", k: "inf", w: 18, h: 6, l: "" }
    ],
    steps: [
      { t: "Milcíades afina o centro e reforça as duas alas, para ficar da largura do exército persa.",
        p: { gL: [22, 56], gC: [50, 56], gR: [78, 56], pL: [22, 24], pC: [50, 24], pR: [78, 24] } },
      { t: "Os gregos avançam correndo os últimos metros, para ficar pouco tempo debaixo das flechas.",
        p: { gL: [22, 36], gC: [50, 36], gR: [78, 36] } },
      { t: "O centro grego cede e recua. Mas as alas, mais fortes, vencem as alas persas.",
        p: { gC: [50, 48], pC: [50, 37], gL: [22, 27], gR: [78, 27], pL: [22, 14], pR: [78, 14] }, x: ["pL", "pR"] },
      { t: "As alas gregas viram para dentro e fecham o centro persa. Os persas fogem para os navios.",
        p: { gL: [32, 33, 65], gR: [68, 33, -65], gC: [50, 46] }, x: ["pC"] }
    ]
  },

  leuctra: {
    units: [
      { id: "tSB", s: "a", k: "inf", w: 10, h: 4, l: "Batalhão Sagrado" },
      { id: "tCol", s: "a", k: "inf", w: 10, h: 16, l: "Coluna de 50 fileiras" },
      { id: "t2", s: "a", k: "inf", w: 16, h: 4, l: "" },
      { id: "t3", s: "a", k: "inf", w: 16, h: 4, l: "Linha recuada, em diagonal" },
      { id: "t4", s: "a", k: "inf", w: 16, h: 4, l: "" },
      { id: "tCav", s: "a", k: "cav", w: 9, h: 4, l: "Cavalaria" },
      { id: "sK", s: "b", k: "inf", w: 14, h: 6, l: "Rei e elite espartana" },
      { id: "s2", s: "b", k: "inf", w: 16, h: 5, l: "Aliados" },
      { id: "s3", s: "b", k: "inf", w: 16, h: 5, l: "Aliados" },
      { id: "s4", s: "b", k: "inf", w: 16, h: 5, l: "Aliados" },
      { id: "sCav", s: "b", k: "cav", w: 9, h: 4, l: "Cavalaria" }
    ],
    steps: [
      { t: "Epaminondas junta sua força numa coluna muito funda, à esquerda, bem em frente ao rei espartano. O resto fica para trás, em diagonal.",
        p: { tSB: [18, 42], tCol: [18, 54], t2: [37, 50], t3: [56, 55], t4: [75, 60], tCav: [40, 38],
             sK: [18, 16], s2: [38, 16], s3: [56, 16], s4: [74, 16], sCav: [40, 27] } },
      { t: "A cavalaria tebana vence a espartana, que recua e atrapalha a própria infantaria.",
        p: { tCav: [38, 29], sCav: [30, 20] }, x: ["sCav"] },
      { t: "A coluna bate no ponto onde está o rei. São 50 fileiras empurrando contra 12.",
        p: { tSB: [18, 24], tCol: [18, 36] } },
      { t: "O rei Cleômbroto morre e a elite espartana cede. Os aliados de Esparta, que nem lutaram, vão embora.",
        p: { sK: [18, 8], tSB: [18, 17], tCol: [18, 29], s2: [38, 8], s3: [56, 8], s4: [74, 8] }, x: ["sK"] }
    ]
  },

  gaugamela: {
    units: [
      { id: "mLeft", s: "a", k: "cav", w: 10, h: 5, l: "Tessálios (Parmênio)" },
      { id: "mPh", s: "a", k: "inf", w: 26, h: 5, l: "Falange" },
      { id: "mHyp", s: "a", k: "inf", w: 8, h: 4, l: "Hipaspistas" },
      { id: "mComp", s: "a", k: "cav", w: 10, h: 5, l: "Companheiros (Alexandre)" },
      { id: "mAgr", s: "a", k: "inf", w: 9, h: 2, l: "Agrianos" },
      { id: "mPrd", s: "a", k: "cav", w: 7, h: 4, l: "Peônios e pródromos" },
      { id: "mMerc", s: "a", k: "cav", w: 7, h: 4, l: "Menidas" },
      { id: "mRes", s: "a", k: "inf", w: 34, h: 3, l: "Segunda linha" },
      { id: "camp", s: "a", k: "camp", w: 14, h: 5, l: "Acampamento" },
      { id: "pR", s: "b", k: "cav", w: 18, h: 5, l: "Mazeu" },
      { id: "pC", s: "b", k: "inf", w: 22, h: 6, l: "Dario e a guarda" },
      { id: "pInd", s: "b", k: "cav", w: 8, h: 4, l: "Persas e indianos" },
      { id: "pL", s: "b", k: "cav", w: 18, h: 5, l: "Besso (báctrios e citas)" },
      { id: "pCh", s: "b", k: "car", w: 26, h: 2.5, l: "Carros com foices" }
    ],
    steps: [
      { t: "A linha persa é muito mais larga. Alexandre põe uma segunda linha atrás da primeira e recua as duas pontas, em ângulo, para não ser cercado.",
        p: { mLeft: [22, 52, -20], mPh: [44, 50], mHyp: [62, 50], mComp: [72, 50], mAgr: [72, 44], mPrd: [82, 46], mMerc: [88, 50, 20],
             mRes: [50, 59], camp: [50, 67], pR: [18, 15], pC: [48, 14], pInd: [62, 20], pL: [80, 15], pCh: [50, 24] } },
      { t: "Alexandre começa a andar em diagonal para a direita, saindo do chão que Dario mandou aplanar. Besso acompanha com a cavalaria, para não ser ultrapassado.",
        p: { mComp: [80, 46], mAgr: [80, 40], mHyp: [68, 47], mPh: [50, 47, -6], mPrd: [88, 42], mMerc: [93, 47, 20], pL: [90, 19] } },
      { t: "Alexandre manda os cavaleiros mercenários de Menidas segurar a cavalaria de Besso. Os báctrios e citas, mais numerosos, os empurram para trás.",
        p: { mMerc: [93, 36], pL: [92, 28] } },
      { t: "Entram os peônios e a cavalaria leve de Aretes. A luta de cavalaria na ponta direita fica equilibrada e prende Besso longe do centro.",
        p: { mPrd: [89, 33], mMerc: [95, 40], pL: [92, 24] } },
      { t: "Dario solta os carros com foices. Os agrianos atiram dardos nos cavalos e nos condutores. A infantaria abre corredores, e os carros que chegam passam direto.",
        p: { pCh: [55, 58], mAgr: [74, 34] }, x: ["pCh"] },
      { t: "Com Besso puxado para a direita, abre-se um buraco entre ele e o centro persa.",
        p: { pInd: [70, 22], pC: [46, 14] } },
      { t: "Alexandre vira de repente. Os companheiros entram em cunha pelo buraco, com os hipaspistas e a falange logo atrás, direto em Dario.",
        p: { mComp: [66, 24, -45], mHyp: [62, 31], mPh: [50, 32, -6], mAgr: [76, 28] } },
      { t: "Dario foge, e o centro persa vai atrás dele.",
        p: { pC: [40, 4], mComp: [55, 15, -45], mHyp: [58, 22], mPh: [48, 24, -6] }, x: ["pC"] },
      { t: "Na outra ponta, Mazeu aperta Parmênio. Cavaleiros persas e indianos atravessam a linha e vão saquear o acampamento, onde a segunda linha os expulsa.",
        p: { pR: [18, 40], mLeft: [24, 52, -20], pInd: [44, 64], mRes: [44, 58] }, x: ["pInd"] },
      { t: "Alexandre larga a perseguição e volta para socorrer Parmênio. Quando chega, Mazeu já recua. A vitória é completa.",
        p: { mComp: [32, 36, -120], pR: [12, 18] }, x: ["pR", "pL"] }
    ]
  },

  canas: {
    units: [
      { id: "cG", s: "a", k: "inf", w: 24, h: 5, l: "Gauleses e hispânicos" },
      { id: "cAfL", s: "a", k: "inf", w: 6, h: 12, l: "Africanos" },
      { id: "cAfR", s: "a", k: "inf", w: 6, h: 12, l: "Africanos" },
      { id: "cCavL", s: "a", k: "cav", w: 9, h: 5, l: "Cavalaria pesada" },
      { id: "cCavR", s: "a", k: "cav", w: 9, h: 5, l: "Númidas" },
      { id: "rInf", s: "b", k: "inf", w: 34, h: 12, l: "Legiões" },
      { id: "rCavL", s: "b", k: "cav", w: 9, h: 5, l: "Cavalaria romana" },
      { id: "rCavR", s: "b", k: "cav", w: 9, h: 5, l: "Cavalaria aliada" }
    ],
    steps: [
      { t: "Aníbal põe o centro para a frente, em arco, com as tropas mais fracas. A melhor infantaria fica nas pontas, recuada.",
        p: { cG: [50, 44], cAfL: [26, 54], cAfR: [74, 54], cCavL: [9, 50], cCavR: [91, 50], rInf: [50, 20], rCavL: [9, 24], rCavR: [91, 24] } },
      { t: "As legiões empurram o centro, que recua devagar. Na ponta, a cavalaria pesada cartaginesa destrói a romana.",
        p: { rInf: [50, 33], cG: [50, 49], cCavL: [9, 28], rCavL: [9, 10] }, x: ["rCavL"] },
      { t: "Os romanos entram cada vez mais fundo no arco. Os africanos viram para dentro e atacam pelos lados.",
        p: { rInf: [50, 42], cG: [50, 54], cAfL: [29, 42], cAfR: [71, 42], cCavL: [78, 12], rCavR: [96, 10] }, x: ["rCavR"] },
      { t: "A cavalaria volta e fecha a retaguarda. Os romanos ficam cercados e apertados demais até para erguer as armas.",
        p: { cCavL: [40, 30], cCavR: [60, 30] } }
    ]
  },

  zama: {
    units: [
      { id: "rInf", s: "a", k: "inf", w: 36, h: 6, l: "Legiões, com corredores entre as tropas" },
      { id: "rCavL", s: "a", k: "cav", w: 10, h: 5, l: "Cavalaria romana" },
      { id: "rCavR", s: "a", k: "cav", w: 10, h: 5, l: "Massinissa (númidas)" },
      { id: "cEle", s: "b", k: "ele", w: 36, h: 3, l: "80 elefantes" },
      { id: "c1", s: "b", k: "inf", w: 36, h: 4, l: "Mercenários" },
      { id: "c2", s: "b", k: "inf", w: 36, h: 4, l: "Cartagineses" },
      { id: "c3", s: "b", k: "inf", w: 36, h: 4, l: "Veteranos de Aníbal" },
      { id: "cCavL", s: "b", k: "cav", w: 10, h: 5, l: "" },
      { id: "cCavR", s: "b", k: "cav", w: 10, h: 5, l: "" }
    ],
    steps: [
      { t: "Aníbal põe os elefantes na frente e três linhas de infantaria, com os veteranos por último.",
        p: { rInf: [50, 54], rCavL: [15, 54], rCavR: [85, 54], cEle: [50, 36], c1: [50, 27], c2: [50, 18], c3: [50, 9], cCavL: [15, 27], cCavR: [85, 27] } },
      { t: "Os elefantes atacam e passam pelos corredores, sem causar estrago. A cavalaria romana expulsa a cartaginesa do campo.",
        p: { cEle: [50, 66], rCavL: [8, 12], rCavR: [92, 12], cCavL: [5, 3], cCavR: [95, 3] }, x: ["cEle", "cCavL", "cCavR"] },
      { t: "As legiões vencem as duas primeiras linhas e encaram os veteranos de Aníbal. A luta fica equilibrada.",
        p: { rInf: [50, 30], c1: [22, 40], c2: [78, 40], c3: [50, 21] }, x: ["c1", "c2"] },
      { t: "A cavalaria volta da perseguição e ataca os veteranos pelas costas.",
        p: { rCavL: [40, 11], rCavR: [60, 11] }, x: ["c3"] }
    ]
  },

  trafalgar: {
    terrain: [{ t: "note", x: 86, y: 6, l: "Norte ↑" }],
    units: [
      { id: "f1", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f2", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f3", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f4", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f5", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f6", s: "b", k: "ship", w: 4, h: 9, l: "Frota franco-espanhola (33)" },
      { id: "n1", s: "a", k: "ship", w: 9, h: 4, l: "" },
      { id: "n2", s: "a", k: "ship", w: 9, h: 4, l: "Coluna de Nelson" },
      { id: "n3", s: "a", k: "ship", w: 9, h: 4, l: "" },
      { id: "c1", s: "a", k: "ship", w: 9, h: 4, l: "" },
      { id: "c2", s: "a", k: "ship", w: 9, h: 4, l: "Coluna de Collingwood" },
      { id: "c3", s: "a", k: "ship", w: 9, h: 4, l: "" }
    ],
    steps: [
      { t: "A frota franco-espanhola navega numa linha única. Nelson vem em duas colunas, de frente para ela. Cada símbolo vale vários navios.",
        p: { f1: [72, 7], f2: [72, 18], f3: [72, 29], f4: [72, 40], f5: [72, 51], f6: [72, 62],
             n1: [36, 24], n2: [24, 24], n3: [12, 24], c1: [36, 46], c2: [24, 46], c3: [12, 46] } },
      { t: "Na aproximação, os navios da frente levam fogo sem poder responder. É o risco do plano.",
        p: { n1: [58, 24], n2: [46, 24], n3: [34, 24], c1: [58, 46], c2: [46, 46], c3: [34, 46] } },
      { t: "As duas colunas furam a linha e a cortam em três pedaços. Ao passar, atiram de ponta a ponta nos navios inimigos.",
        p: { n1: [80, 23.5], n2: [68, 23.5], n3: [56, 23.5], c1: [80, 45.5], c2: [68, 45.5], c3: [56, 45.5] } },
      { t: "O centro e a retaguarda são cercados e vencidos de perto. A vanguarda demora a voltar e chega tarde.",
        p: { n1: [80, 32, 90], n2: [64, 32, 90], n3: [64, 40, 90], c1: [80, 54, 90], c2: [64, 54, 90], c3: [80, 62, 90], f1: [72, 4] },
        x: ["f3", "f4", "f5", "f6"] }
    ]
  },

  austerlitz: {
    terrain: [
      { t: "hill", x: 64, y: 38, rx: 15, ry: 12, l: "Planalto de Pratzen" },
      { t: "sea", x: 40, y: 65, w: 30, h: 5, l: "Lagos congelados" },
      { t: "note", x: 90, y: 5, l: "Norte ↑" }
    ],
    units: [
      { id: "fN", s: "a", k: "inf", w: 6, h: 14, l: "Lannes e Murat" },
      { id: "fC", s: "a", k: "inf", w: 6, h: 14, l: "Soult (na neblina)" },
      { id: "fS", s: "a", k: "inf", w: 5, h: 8, l: "Ala direita fraca" },
      { id: "fD", s: "a", k: "inf", w: 5, h: 8, l: "Davout" },
      { id: "fG", s: "a", k: "inf", w: 6, h: 9, l: "Guarda" },
      { id: "aN", s: "b", k: "inf", w: 6, h: 14, l: "Bagration" },
      { id: "aP", s: "b", k: "inf", w: 8, h: 14, l: "Centro aliado" },
      { id: "aS1", s: "b", k: "inf", w: 6, h: 10, l: "Colunas de ataque" },
      { id: "aS2", s: "b", k: "inf", w: 6, h: 10, l: "" }
    ],
    steps: [
      { t: "Napoleão larga o planalto e mostra a ala direita fraca, como isca. Os aliados ocupam o alto.",
        p: { fN: [30, 14], fC: [34, 36], fS: [32, 56], fD: [8, 60], fG: [16, 30], aN: [62, 14], aP: [64, 38], aS1: [70, 54], aS2: [80, 48] } },
      { t: "Os aliados mordem a isca: descem do planalto para atacar a direita francesa. Davout chega a marcha forçada para segurá-la.",
        p: { aP: [58, 52], aS1: [46, 56], aS2: [56, 62, 90], fS: [30, 56], fD: [22, 62] } },
      { t: "O sol fura a neblina. Soult sobe o planalto quase vazio e corta o exército aliado em dois.",
        p: { fC: [62, 37], fG: [44, 34] } },
      { t: "Do alto, os franceses viram para o sul e prendem a ala aliada contra os lagos. No norte, Bagration recua.",
        p: { fC: [58, 46, 90], fG: [60, 34], aN: [78, 10], fN: [50, 14] }, x: ["aP", "aS1", "aS2"] }
    ]
  },

  isandlwana: {
    terrain: [{ t: "hill", x: 50, y: 64, rx: 14, ry: 5, l: "Monte Isandlwana" }],
    units: [
      { id: "zC", s: "a", k: "inf", w: 26, h: 6, l: "Peito" },
      { id: "zL", s: "a", k: "inf", w: 14, h: 5, l: "Chifre esquerdo" },
      { id: "zR", s: "a", k: "inf", w: 14, h: 5, l: "Chifre direito" },
      { id: "zRes", s: "a", k: "inf", w: 18, h: 4, l: "Lombo (reserva)" },
      { id: "bLine", s: "b", k: "inf", w: 44, h: 2.5, l: "Linha britânica, esticada demais" },
      { id: "bCamp", s: "b", k: "camp", w: 16, h: 6, l: "Acampamento" }
    ],
    steps: [
      { t: "A formação zulu imita um búfalo: o peito ataca de frente, os dois chifres cercam, e o lombo espera atrás.",
        p: { zC: [50, 16], zL: [76, 13], zR: [24, 13], zRes: [50, 5], bLine: [50, 42], bCamp: [50, 54] } },
      { t: "O peito avança e prende a atenção da linha britânica. Os chifres correm por fora, longe dos fuzis.",
        p: { zC: [50, 32], zL: [90, 32, 70], zR: [10, 32, -70], zRes: [50, 18] } },
      { t: "O chifre direito dá a volta por trás do monte. O esquerdo fecha o outro lado. A munição britânica está longe, no acampamento.",
        p: { zL: [82, 54, 80], zR: [22, 66, -20], bLine: [50, 46] } },
      { t: "A linha quebra, e o búfalo se fecha sobre o acampamento.",
        p: { zC: [50, 45], zL: [70, 56, 80], zR: [34, 62, -40], zRes: [50, 34] }, x: ["bLine", "bCamp"] }
    ]
  },

  hastings: {
    terrain: [{ t: "hill", x: 50, y: 17, rx: 44, ry: 10, l: "Colina de Senlac" }],
    units: [
      { id: "eA", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "eB", s: "b", k: "inf", w: 26, h: 5, l: "Parede de escudos (Haroldo)" },
      { id: "eC", s: "b", k: "inf", w: 18, h: 5, l: "" },
      { id: "nArc", s: "a", k: "inf", w: 50, h: 2.5, l: "Arqueiros" },
      { id: "nInf", s: "a", k: "inf", w: 50, h: 4, l: "Infantaria" },
      { id: "nCavL", s: "a", k: "cav", w: 14, h: 5, l: "Bretões" },
      { id: "nCavC", s: "a", k: "cav", w: 16, h: 5, l: "Guilherme" },
      { id: "nCavR", s: "a", k: "cav", w: 14, h: 5, l: "Franceses e flamengos" }
    ],
    steps: [
      { t: "Os ingleses lutam a pé, numa parede de escudos no alto da colina. Guilherme tem arqueiros, infantaria e cavalaria, em três linhas.",
        p: { eA: [27, 19], eB: [50, 19], eC: [73, 19], nArc: [50, 42], nInf: [50, 50], nCavL: [22, 60], nCavC: [50, 60], nCavR: [78, 60] } },
      { t: "As flechas batem nos escudos. A infantaria e depois a cavalaria atacam morro acima, e a parede aguenta.",
        p: { nInf: [50, 28], nCavL: [22, 36], nCavC: [50, 36], nCavR: [78, 36] } },
      { t: "Os bretões recuam. Parte dos ingleses desce a colina atrás deles, sai da formação e é cercada pela cavalaria.",
        p: { nCavL: [14, 54], eA: [24, 40], nCavC: [38, 46, -35], nInf: [56, 30] }, x: ["eA"] },
      { t: "A parede fica curta e fina. No fim da tarde, Haroldo é morto e a defesa desmorona.",
        p: { nCavL: [22, 30], nCavC: [50, 26], nCavR: [76, 26], nInf: [50, 33] }, x: ["eB", "eC"] }
    ]
  },

  waterloo: {
    terrain: [{ t: "hill", x: 48, y: 15, rx: 46, ry: 8, l: "Crista de Mont-Saint-Jean" }],
    units: [
      { id: "wL", s: "a", k: "inf", w: 60, h: 5, l: "Wellington, atrás da crista" },
      { id: "wH", s: "a", k: "camp", w: 8, h: 5, l: "Hougoumont" },
      { id: "wS", s: "a", k: "camp", w: 6, h: 4, l: "La Haye Sainte" },
      { id: "pr", s: "a", k: "inf", w: 8, h: 14, l: "Prussianos" },
      { id: "fR", s: "b", k: "inf", w: 16, h: 5, l: "Reille" },
      { id: "fE", s: "b", k: "inf", w: 22, h: 5, l: "D'Erlon" },
      { id: "fCav", s: "b", k: "cav", w: 18, h: 5, l: "Cavalaria de Ney" },
      { id: "fG", s: "b", k: "inf", w: 12, h: 5, l: "Guarda Imperial" },
      { id: "fLob", s: "b", k: "inf", w: 8, h: 5, l: "Lobau" }
    ],
    steps: [
      { t: "Wellington esconde a maior parte da tropa atrás da crista, com duas fazendas fortificadas na frente. Os franceses atacam Hougoumont o dia inteiro, sem tomá-la.",
        p: { wL: [48, 17], wH: [20, 32], wS: [48, 29], pr: [104, 44], fR: [22, 42], fE: [68, 50], fCav: [44, 58], fG: [50, 67], fLob: [74, 60] } },
      { t: "D'Erlon ataca o centro-esquerda aliado em colunas grandes e é repelido por uma carga da cavalaria britânica.",
        p: { fE: [68, 27] } },
      { t: "Ney lança a cavalaria, sem infantaria junto, contra os quadrados britânicos. Não rompe nenhum. Os prussianos aparecem no flanco.",
        p: { fE: [68, 44], fCav: [38, 25], pr: [90, 46], fLob: [80, 52, 90] } },
      { t: "Última cartada: a Guarda Imperial sobe a crista e recua, pela primeira vez na história. Wellington manda avançar, e os prussianos entram pelo lado.",
        p: { fCav: [42, 48], fG: [36, 27], wL: [48, 21], pr: [80, 54] }, x: ["fCav", "fG", "fE", "fR", "fLob"] }
    ]
  }
};
