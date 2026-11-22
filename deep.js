// In-depth battles: the editorial model agreed with Bruno and Tony (2026-11-22).
// Each entry: war, hook (one line), chapters [{ n, title, blocks }].
// A block is a paragraph string, or { h: subtitle }, { timeline: [[when, what], ...] }, { formation: true },
// or { note: text } for uncertainty and controversy.
// Terms in [[double brackets]] link to the glossary; [[shown text|key]] when the text differs from the key.
const GLOSSARY = {
  "falange": "Bloco compacto de infantaria pesada, com várias fileiras de profundidade. A macedônia usava a sarissa, uma lança de cerca de 5 a 6 metros, e parecia um paredão de pontas.",
  "sarissa": "Lança macedônia de cerca de 5 a 6 metros, segurada com as duas mãos. As primeiras cinco fileiras da falange apontavam as lanças para a frente.",
  "hipaspistas": "Infantaria de elite de Alexandre, mais leve e ágil que a falange. Fazia a ligação entre a falange e a cavalaria.",
  "companheiros": "Os Hetairoi, cavalaria pesada da nobreza macedônia. Alexandre lutava à frente deles, em formação de cunha.",
  "cunha": "Formação em forma de triângulo, com a ponta para a frente. Concentra a força num ponto pequeno e serve para furar uma linha inimiga.",
  "flanco": "A lateral de um exército. É o ponto mais fraco, porque os soldados olham e lutam para a frente.",
  "flanquear": "Atacar o inimigo pela lateral (o flanco) em vez de pela frente.",
  "carros com foices": "Carros de guerra persas puxados por cavalos, com lâminas presas nas rodas e no eixo. Assustavam muito, mas eram fáceis de evitar se a infantaria abrisse espaço.",
  "imortais": "Guarda de elite dos reis persas. Segundo Heródoto, eram sempre 10.000: quem morria era substituído na hora.",
  "sátrapa": "Governador de uma província (satrapia) do Império Persa. Muitos eram parentes do rei e comandavam suas próprias tropas.",
  "linha oblíqua": "Avançar com uma ponta do exército na frente e a outra recuada, em diagonal. Assim a parte forte chega primeiro e a fraca evita o combate.",
  "reserva": "Tropas guardadas atrás da linha, sem lutar, para tapar um buraco ou dar o golpe final no momento certo.",
  "aquemênida": "A dinastia que governou o Império Persa de cerca de 550 a 330 a.C., de Ciro, o Grande, a Dario III. Foi o maior império do mundo até então."
};

const DEEP = {
  gaugamela: {
    war: "Conquista do Império Persa por Alexandre (334–330 a.C.)",
    hook: "A tarde em que um exército de 47.000 homens derrubou o maior império do mundo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 331 a.C., o Império Persa ia do Egito até a Índia. Era o maior Estado que o mundo já tinha visto, governado havia mais de 200 anos pela dinastia [[aquemênida]]. Na beira oeste desse império, a Grécia era um punhado de cidades pequenas e brigonas, que tinham resistido aos persas 150 anos antes, em Maratona e Salamina, e nunca tinham esquecido.",
        "Quem mudou esse equilíbrio foi a Macedônia, um reino do norte da Grécia que os atenienses consideravam meio bárbaro. O rei Filipe II transformou camponeses e pastores num exército profissional e submeteu as cidades gregas em Queroneia, em 338 a.C. Seu plano seguinte era invadir a Pérsia. Foi assassinado antes, e o plano passou para o filho de 20 anos, Alexandre.",
        { h: "O caminho até Gaugamela" },
        { timeline: [
          ["334 a.C.", "Alexandre atravessa para a Ásia e vence os sátrapas persas no rio Granico."],
          ["333 a.C.", "Em Isso, vence o próprio rei Dario III, que foge e deixa a família para trás."],
          ["332 a.C.", "Toma Tiro depois de sete meses de cerco e entra no Egito sem lutar."],
          ["331 a.C.", "Volta para o leste, atravessa o Eufrates e o Tigre e encontra Dario perto de Gaugamela."]
        ]},
        "Depois de Isso, Dario ofereceu a Alexandre todo o território a oeste do Eufrates, uma fortuna em ouro e a mão de uma filha. Alexandre recusou: queria o império inteiro. Dario usou os dois anos seguintes para juntar soldados de todas as províncias, do Mar Negro ao Afeganistão."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Alexandre III da Macedônia, 25 anos" },
        "Aluno de Aristóteles na adolescência, comandou a cavalaria em Queroneia aos 18 anos. Lutava sempre na frente, o que inspirava os soldados e assustava os oficiais. Em Gaugamela, seu objetivo não era vencer o exército persa inteiro, o que seria impossível: era chegar até Dario. Num império em que tudo dependia do rei, ele sabia que o rei em fuga valia mais que mil soldados mortos.",
        { h: "Dario III, cerca de 50 anos" },
        "Chegou ao trono em 336 a.C., depois de uma série de assassinatos na corte, e tinha fama de guerreiro corajoso. Aprendeu com Isso que o terreno estreito o tinha prejudicado, e por isso escolheu uma planície larga e mandou aplanar o chão para os [[carros com foices]]. Era um plano sensato. O problema é que deixava a iniciativa para Alexandre.",
        { h: "Os outros nomes" },
        "Do lado macedônio, o velho general Parmênio, de cerca de 65 anos, comandava a ala esquerda, que tinha a missão mais ingrata: aguentar. Do lado persa, Besso, [[sátrapa]] da Báctria e parente do rei, comandava a cavalaria da esquerda; Mazeu, sátrapa da Babilônia, a da direita."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Alexandre tinha cerca de 47.000 homens: uns 40.000 a pé e 7.000 a cavalo. O coração era a [[falange]], com a [[sarissa]], ao lado dos [[hipaspistas]] e da cavalaria dos [[companheiros]].",
        "Quantos eram os persas, ninguém sabe. O historiador antigo Arriano fala em 40.000 cavaleiros e um milhão de soldados a pé, número impossível de alimentar. Os historiadores modernos ficam entre 50.000 e 250.000, e muitos ficam perto de 100.000. Havia cavaleiros da Báctria e da Cítia, os [[imortais]], mercenários gregos, cerca de 200 carros com foices e 15 elefantes indianos, que parecem não ter entrado na luta.",
        { note: "Os números persas são o ponto mais incerto da batalha. Usamos as faixas dos historiadores modernos, não as das fontes antigas." },
        { h: "O terreno" },
        "Uma planície aberta perto de Erbil, no atual Curdistão iraquiano. O local exato ainda é discutido: o candidato mais aceito é Tel Gomel. O chão plano era bom para os persas, que tinham mais cavalaria e queriam [[flanquear]] o exército macedônio pelos dois lados.",
        { h: "A noite antes" },
        "Os persas ficaram a noite toda acordados e em formação, com medo de um ataque noturno. Parmênio sugeriu exatamente isso a Alexandre, que respondeu, segundo Plutarco, que não ia 'roubar a vitória'. Alexandre dormiu, e dizem que tão pesado que precisaram acordá-lo de manhã.",
        { h: "A batalha em quatro movimentos" },
        { formation: true },
        "Primeiro, Alexandre arrumou o exército com uma segunda linha atrás da primeira, virada para fora. Se fosse cercado, ela viraria para lutar de costas. As duas pontas ficaram recuadas, em ângulo.",
        "Segundo, em vez de avançar em frente, Alexandre começou a andar em diagonal para a direita, numa [[linha oblíqua]]. Estava saindo do chão aplanado. Para não ser ultrapassado, Besso mandou sua cavalaria acompanhar, e a linha persa foi se esticando. A cavalaria cita e báctria era excelente e chegou a vencer os mercenários de Menidas, até a cavalaria leve macedônia equilibrar a luta.",
        "Terceiro, Dario soltou os carros com foices. Os arqueiros e lanceiros agrianos acertaram cavalos e condutores. Os carros que chegaram encontraram a infantaria abrindo corredores e passaram direto, e os palafreneiros e os hipaspistas cuidaram deles lá atrás.",
        "Quarto, e decisivo: com a cavalaria de Besso puxada para a direita, abriu-se um buraco entre ela e o centro persa. Alexandre virou de repente com os companheiros em [[cunha]] e entrou pelo buraco, com a falange logo atrás, direto em Dario. O rei persa fugiu, e o centro foi atrás dele.",
        { h: "Enquanto isso, na outra ponta" },
        "Mazeu apertava Parmênio, e parte da cavalaria persa e indiana atravessou a linha e foi saquear o acampamento macedônio, onde foi rechaçada pela [[reserva]]. Parmênio mandou pedir socorro. Alexandre largou a perseguição a Dario e voltou, num combate de cavalaria duro em que morreram cerca de 60 companheiros. Quando chegou, Mazeu já recuava."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas macedônias ficaram entre 1.100 e 1.500 homens. As persas, entre 40.000 e 90.000, segundo as estimativas, a maior parte na fuga. A Babilônia se rendeu semanas depois. Persépolis, a capital cerimonial, foi tomada e incendiada no ano seguinte.",
        "Dario fugiu para o leste, tentando reunir outro exército. Em 330 a.C., foi preso e assassinado pelo próprio Besso. Alexandre deu a ele um enterro de rei e mandou executar Besso no ano seguinte.",
        { h: "Por que importa" },
        "Acabou o Império Persa [[aquemênida]], e Alexandre seguiu até a Índia. Depois da sua morte, seus generais dividiram o império em reinos gregos, que espalharam a língua e a cultura grega do Egito ao Afeganistão. É o mundo helenístico, de onde vieram a biblioteca de Alexandria e o grego do Novo Testamento.",
        "Militarmente, Gaugamela é estudada como o exemplo clássico de criar uma brecha e atacar por ela o centro de comando do inimigo.",
        { h: "Curiosidades e controvérsias" },
        { note: "As datas: um eclipse da Lua, registrado 11 dias antes pelos astrônomos da Babilônia, permite datar a batalha com precisão rara para a época: 1º de outubro de 331 a.C." },
        { note: "O nome: Gaugamela quer dizer algo como 'casa do camelo'. Por muito tempo a batalha foi chamada de Arbela, a cidade grande mais próxima, hoje Erbil." },
        { note: "As fontes: os relatos mais completos (Arriano, Plutarco, Diodoro, Cúrcio) foram escritos 300 a 400 anos depois, a partir de memórias de oficiais de Alexandre que se perderam." }
      ]}
    ]
  }
};
