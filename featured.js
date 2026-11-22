// Battles checked against sources, and connections between battles.
// FEATURED entries override the base data (place, coordinates, troop figures) and add a narrative,
// losses and the list of sources. Checked on 2026-11-22 against the English Wikipedia articles
// (infobox figures) and the books those articles cite.
const FEATURED = {
  gaugamela: {
    place: "Provavelmente Tel Gomel, perto de Erbil, no Curdistão iraquiano", lat: 36.56, lng: 43.44,
    a: { troops: "≈ 47.000 (40.000 a pé e 7.000 a cavalo)", n: 47000 },
    b: { troops: "50.000 a 250.000, nas estimativas modernas", n: 100000 },
    narrative: "Dario III teve dois anos para se preparar depois da derrota em Isso. Escolheu uma planície larga, onde seus números contariam, e mandou aplanar o chão para os carros com foices. Alexandre chegou com cerca de 47.000 homens. Quantos persas havia, ninguém sabe: Arriano, a fonte antiga, fala em um milhão de soldados a pé, e os historiadores modernos ficam entre 50.000 e 250.000. Alexandre respondeu com manobra: puxou a batalha para a direita, abriu um buraco na linha persa e entrou por ele em cunha, direto no rei. Dario fugiu. Em vez de persegui-lo, Alexandre voltou para socorrer Parmênio, que estava em apuros na ala esquerda.",
    losses: "Macedônios: 1.100 a 1.500. Persas: 40.000 a 90.000. As fontes antigas divergem muito entre si.",
    sources: [
      ["Peter Green, Alexander of Macedon, 356–323 B.C. (2013)"],
      ["Hans Delbrück, History of the Art of War (1990)"],
      ["Arriano, Anábase de Alexandre (fonte antiga)"],
      ["Wikipedia em inglês: Battle of Gaugamela", "https://en.wikipedia.org/wiki/Battle_of_Gaugamela"]
    ]
  },
  canas: {
    a: { troops: "≈ 50.000 (40.000 a pé e 10.000 a cavalo)", n: 50000 },
    b: { troops: "≈ 86.400, contando os aliados e a guarda do acampamento", n: 86400 },
    narrative: "Roma juntou oito legiões, cerca de 86.000 homens com os aliados, para acabar com Aníbal de uma vez. Ele tinha uns 50.000. Os cônsules Varrão e Emílio Paulo formaram a infantaria mais funda que o normal, para furar o centro inimigo à força. Aníbal contava com isso. Pôs gauleses e hispânicos num arco virado para a frente, com seu irmão Magão, e guardou os africanos nas pontas. O centro recuou devagar, os romanos entraram no bolsão, os africanos fecharam pelos lados e a cavalaria de Asdrúbal fechou por trás. Políbio fala em 70.000 romanos mortos, e Lívio, em 48.200. Mesmo assim, Roma não pediu a paz.",
    losses: "Romanos: 48.200 mortos segundo Lívio, 70.000 segundo Políbio. Cartagineses: 5.700 (Políbio) a 8.000 (Lívio).",
    sources: [
      ["Adrian Goldsworthy, Cannae (2001)"],
      ["Gregory Daly, Cannae: The Experience of Battle in the Second Punic War (2002)"],
      ["Políbio e Tito Lívio (fontes antigas)"],
      ["Wikipedia em inglês: Battle of Cannae", "https://en.wikipedia.org/wiki/Battle_of_Cannae"]
    ]
  },
  waterloo: {
    a: { troops: "≈ 68.000 com Wellington e ≈ 50.000 prussianos", n: 118000 },
    b: { troops: "≈ 73.000", n: 73000 },
    narrative: "Napoleão precisava vencer Wellington antes que os prussianos de Blücher chegassem. Tinha uns 73.000 homens contra 68.000 do exército aliado, e havia 50.000 prussianos a caminho. A chuva da noite atrasou o ataque até o fim da manhã. Wellington escondeu a infantaria atrás de uma crista e segurou duas fazendas à frente, Hougoumont e La Haye Sainte. Os franceses atacaram em sequência: Hougoumont, as colunas de D'Erlon, a cavalaria de Ney e, por fim, a Guarda Imperial. Nada rompeu a linha. Por volta das 16h30, os prussianos de Bülow atacaram o flanco direito francês. À noite, o exército de Napoleão fugia. Wellington disse que foi 'a coisa mais apertada que você já viu na vida'.",
    losses: "Franceses: cerca de 25.000 mortos e feridos e 8.000 presos. Exército de Wellington: cerca de 17.000. Prussianos: cerca de 7.000.",
    sources: [
      ["Alessandro Barbero, The Battle: A New History of Waterloo (2005)"],
      ["David Chandler, The Campaigns of Napoleon (1966)"],
      ["Wikipedia em inglês: Battle of Waterloo", "https://en.wikipedia.org/wiki/Battle_of_Waterloo"]
    ]
  }
};

// Connections between battles (same war, same commander, or cause and consequence). Read in both directions.
const LINKS = {
  maratona: ["termopilas", "salamina", "plateia"],
  termopilas: ["salamina", "plateia"],
  queroneia: ["leuctra", "isso"],
  isso: ["gaugamela", "hidaspes"],
  trasimeno: ["canas", "zama"],
  canas: ["zama", "pidna"],
  farsalia: ["alesia", "carras", "accio"],
  yarmuk: ["guadalete", "tours"],
  hattin: ["jerusalem1099", "ainjalut"],
  mohi: ["bagda", "ainjalut", "hakata"],
  crecy: ["azincourt", "orleans"],
  aljubarrota: ["alcacerquibir"],
  alcacerquibir: ["guararapes"],
  guararapes: ["jenipapo"],
  constantinopla: ["ankara", "mohacs", "lepanto", "viena"],
  nagashino: ["sekigahara", "hansan"],
  austerlitz: ["trafalgar", "borodino", "leipzig", "waterloo"],
  saratoga: ["yorktown"],
  riachuelo: ["tuiuti"],
  grunwald: ["tannenberg"],
  marne: ["verdun", "somme"],
  pearlharbor: ["midway", "guadalcanal", "iwojima"],
  moscou: ["stalingrado", "kursk", "berlim"],
  normandia: ["ardenas", "berlim", "montecastelo"]
};
