// Deployment diagrams with a side switch: Leipzig (Saxons and Wurttemberg change sides) and Talas (Karluks change sides).
// Side "a" = Coalition / Abbasid Caliphate, side "b" = French Empire / Tang China, as in the battle cards.
Object.assign(FORMATIONS, {
  leipzig: {
    terrain: [
      { t: "note", x: 50, y: 31, l: "Leipzig" },
      { t: "note", x: 30, y: 8, l: "Rio Elster" },
      { t: "note", x: 30, y: 47, l: "Ponte única" }
    ],
    units: [
      { id: "aSil", s: "a", k: "inf", w: 18, h: 5, l: "Silésia (Blücher)" },
      { id: "aNor", s: "a", k: "inf", w: 16, h: 5, l: "Norte (Carlos João)" },
      { id: "aBoh", s: "a", k: "inf", w: 26, h: 5, l: "Boêmia (Schwarzenberg)" },
      { id: "aPol", s: "a", k: "inf", w: 16, h: 5, l: "Polônia (Bennigsen)" },
      { id: "aGy", s: "a", k: "inf", w: 12, h: 5, l: "Austríacos (Gyulay)" },
      { id: "fMar", s: "b", k: "inf", w: 14, h: 5, l: "Marmont" },
      { id: "fNap", s: "b", k: "inf", w: 12, h: 5, l: "Napoleão e a Guarda" },
      { id: "fRear", s: "b", k: "inf", w: 10, h: 4, l: "Retaguarda (Oudinot)" },
      { id: "fSou", s: "b", k: "inf", w: 20, h: 5, l: "Sul (Victor, Poniatowski)" },
      { id: "fCav", s: "b", k: "cav", w: 12, h: 4, l: "Cavalaria de Murat" },
      { id: "sax", s: "b", k: "inf", w: 12, h: 5, l: "Saxões (Reynier)" },
      { id: "wur", s: "b", k: "cav", w: 9, h: 4, l: "Württemberg" },
      { id: "fBer", s: "b", k: "inf", w: 12, h: 5, l: "Bertrand (Lindenau)" }
    ],
    steps: [
      { t: "Napoleão ocupa o centro, com Leipzig e suas pontes atrás. Os aliados chegam de três lados: o Exército da Boêmia pelo sul, o da Silésia pelo norte, e os do Norte e da Polônia ainda longe, a leste. O desenho é esquemático.",
        p: { aSil: [38, 6], aNor: [86, 6], aBoh: [50, 65], aPol: [88, 62], aGy: [12, 56],
             fMar: [40, 17], fNap: [57, 40], fRear: [44, 38], fSou: [50, 50], fCav: [64, 48], sax: [70, 33], wur: [78, 40], fBer: [18, 40] } },
      { t: "16 de outubro, no sul: Schwarzenberg ataca Wachau e Liebertwolkwitz. Napoleão responde com a grande bateria de Drouot e a carga de milhares de cavaleiros de Murat. A cavalaria aliada os empurra de volta.",
        p: { aBoh: [50, 57], fSou: [50, 48], fCav: [56, 53], fNap: [55, 43] } },
      { t: "No mesmo dia, no norte, em Möckern, Blücher luta contra o VI Corpo de Marmont. Os dois lados têm muitas baixas. O dia termina empatado.",
        p: { aSil: [38, 12], fMar: [40, 18] } },
      { t: "17 de outubro: pausa. Napoleão propõe um armistício, que os soberanos aliados recusam. Os aliados recebem reforços muito maiores do que os franceses: os Exércitos do Norte e da Polônia chegam de leste. As fontes divergem sobre o dia exato da proposta.",
        p: { aNor: [80, 22], aPol: [80, 52] } },
      { t: "18 de outubro: o cerco se fecha. O ponto mais sangrento é Probstheida, onde os ataques aliados falham contra a artilharia da Guarda. Em Lindenau, a oeste, Bertrand segura a estrada da retirada.",
        p: { aBoh: [50, 52], aSil: [38, 22], aNor: [72, 26], aPol: [70, 48], aGy: [14, 52], fSou: [49, 45], fMar: [42, 25] } },
      { t: "Em Paunsdorf, no meio do combate, os soldados saxões de Reynier (cerca de 5.000 a 6.000) e a cavalaria de Württemberg mudam de lado. Passam de Napoleão para os aliados.",
        p: { sax: [68, 33], wur: [74, 38] }, sw: { sax: "a", wur: "a" } },
      { t: "Sem os saxões, o flanco leste francês se abre. A linha francesa recua para mais perto de Leipzig, e a retirada para o oeste fica decidida.",
        p: { sax: [62, 34], wur: [66, 40], aNor: [64, 29], fSou: [48, 42], fCav: [54, 47], fNap: [54, 40] } },
      { t: "19 de outubro: o exército francês atravessa o Elster pela única ponte. Os aliados descobrem a evacuação de manhã e atacam a cidade. A retaguarda, de cerca de 30.000 homens, luta rua por rua.",
        p: { fNap: [14, 40], fSou: [24, 42], fMar: [26, 34], fCav: [22, 48], fBer: [18, 34], fRear: [42, 38],
             aBoh: [48, 46], aSil: [40, 24], aNor: [58, 30], aPol: [58, 46], sax: [54, 34], wur: [54, 41] } },
      { t: "Por volta da uma da tarde, a ponte explode cedo demais, com os franceses ainda em cima dela e a retaguarda ainda na cidade. A retaguarda fica presa do outro lado. Milhares morrem, e cerca de 30.000 franceses acabam prisioneiros, muitos deles feridos e doentes. Poniatowski se afoga no rio.",
        p: { fRear: [34, 38], aBoh: [44, 42], aSil: [38, 28] }, x: ["fRear"] }
    ]
  },

  talas: {
    terrain: [
      { t: "note", x: 50, y: 5, l: "Rio Talas (posição exata incerta)" },
      { t: "hill", x: 94, y: 6, rx: 14, ry: 11, l: "Tian Shan" }
    ],
    units: [
      { id: "arV", s: "a", k: "inf", w: 6, h: 14, l: "Vanguarda (Sa'd)" },
      { id: "arM", s: "a", k: "inf", w: 8, h: 22, l: "Ziyad ibn Salih" },
      { id: "tT", s: "b", k: "inf", w: 8, h: 14, l: "Tang (Gao)" },
      { id: "tK", s: "b", k: "cav", w: 8, h: 18, l: "Carlucos" }
    ],
    steps: [
      { t: "Os árabes de Ziyad ibn Salih vêm do oeste. Gao Xianzhi vem do leste, com soldados Tang e carlucos aliados. Os números variam muito entre as fontes, e a disposição exata das tropas não é conhecida. O desenho é esquemático.",
        p: { arV: [36, 36], arM: [24, 36], tT: [64, 28], tK: [64, 50] } },
      { t: "A vanguarda árabe cava trincheiras e forma uma linha densa de escudos e lanças. Quando o grosso de Ziyad chega, os Tang recuam na direção de Taraz.",
        p: { arV: [42, 36], arM: [32, 36], tT: [68, 30] } },
      { t: "Por cinco dias os dois lados trocam flechas, muralhas de escudos e cargas ocasionais de cavalaria. Nenhum rompe o outro.",
        p: { arM: [42, 34], arV: [47, 36], tT: [62, 32] } },
      { t: "No quinto dia, os carlucos mudam de lado. Pelo relato mais usado, eram cerca de dois terços do exército Tang. Fontes árabes dizem que sempre tinham sido aliados dos abássidas.",
        p: { tK: [74, 34] }, sw: { tK: "a" } },
      { t: "Atacados pela frente e por trás, os Tang aguentam até a noite. Gao se retira para o acampamento e quer lutar de novo no dia seguinte. Li Siye o convence de que isso destruiria o exército.",
        p: { arM: [52, 34], arV: [56, 36], tT: [66, 32], tK: [72, 32] } },
      { t: "O exército Tang recua para o leste, rumo às montanhas do Tian Shan. Na travessia, antigos aliados de Fergana o atacam.",
        p: { tT: [84, 24], arM: [64, 30], arV: [68, 32], tK: [78, 30] } },
      { t: "Li Siye abre caminho com a cavalaria blindada, e Gao e muitos oficiais escapam. A maior parte da tropa é capturada. Menos de 2.000 homens teriam voltado à Ásia Central.",
        p: { tT: [90, 16], arM: [72, 28], arV: [76, 30] }, x: ["tT"] },
      { t: "As perdas Tang são incertas: 20.000 a 30.000 mortos, segundo fontes chinesas, e 45.000 a 50.000, segundo fontes árabes. Os carlucos não se voltaram mais contra os chineses: em 753 submeteram-se aos Tang.",
        p: { arM: [70, 30], arV: [74, 32], tK: [78, 40] }, x: ["tT"] }
    ]
  }
});
