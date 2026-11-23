// In-depth battles, batch bn: passchendaele, amiens, sakarya, annual, taierzhuang (great-battles pack, helper 32).
// Checked against the English, Spanish and Turkish Wikipedia articles on the Battle of Passchendaele, Broodseinde, the
// Second Battle of Passchendaele, the Battle of Amiens, the Battle of the Sakarya (and its order of battle), the Disaster
// of Annual and the Battle of Taierzhuang, the HistoryNet account of Sakarya, and the works those pages cite.
// Where sources disagree the text says so. No diagram for Passchendaele (a three-month series of limited attacks, not one
// deployment) or Annual (the sources give no reliable positions for the retreat). The Sakarya diagram is a schematic.
// Tanks are not drawn as units (unit_kinds.js is not edited here); they appear in the captions.

Object.assign(GLOSSARY, {
  "casamata de concreto": "Pequena construção de concreto armado, com paredes grossas e fendas para metralhadoras. Os alemães espalharam muitas pelo terreno de Flandres. A artilharia comum quase não as abalava.",
  "divisão eingreif": "Em alemão, 'de intervenção'. Divisão mantida atrás da linha de frente, fora do alcance da artilharia inimiga, para contra-atacar quando o atacante chegasse cansado às posições alemãs.",
  "morder e segurar": "Método de atacar em avanços curtos e limitados (a 'mordida'), parar, fortificar o terreno conquistado e esperar o contra-ataque sob a proteção da própria artilharia. É o oposto de tentar romper a frente de uma só vez.",
  "passadiço de tábuas": "Caminho de tábuas ou grades de madeira estendido sobre a lama. Em Flandres era muitas vezes a única via para levar soldados, munição e feridos.",
  "whippet": "Tanque britânico médio, mais leve e rápido que os tanques pesados do tipo 'Mark'. Foi pensado para explorar a brecha aberta pelos tanques pesados, rodando atrás das linhas inimigas.",
  "ofensiva dos cem dias": "Série de ataques aliados na Frente Ocidental, de 8 de agosto a 11 de novembro de 1918, que começou em Amiens e terminou com o armistício.",
  "defesa em superfície": "Ideia de Mustafa Kemal: em vez de manter uma linha fixa, que se rompe de uma vez, defender uma área larga. As unidades podem ceder terreno, se reorganizar e voltar a lutar, enquanto o atacante se espalha e se afasta dos seus suprimentos.",
  "gazi": "Título turco de honra, dado a quem vence os inimigos em guerra. A Assembleia o concedeu a Mustafa Kemal depois de Sakarya.",
  "tekâlif-i millîye": "'Deveres nacionais': decretos da Assembleia de Ancara, em 1921, que mandaram entregar ao exército armas, munição, alimentos, tecidos e animais de transporte da população.",
  "grande deserto salgado": "Região seca e salgada ao redor do Lago Salgado (Tuz Gölü), no centro da Anatólia. Tem pouca água e quase nenhum alimento.",
  "tratado de sèvres": "Tratado de 1920, imposto ao Império Otomano derrotado na Primeira Guerra Mundial. Dava à Grécia a região de Esmirna e retalhava a Anatólia. O movimento nacionalista de Ancara nunca o aceitou.",
  "venizelistas": "Partidários de Eleftherios Venizelos, político liberal grego que levou o país à Ásia Menor. Em 1920 ele perdeu o poder e o rei Constantino voltou ao trono. No exército, oficiais venizelistas e monarquistas desconfiavam uns dos outros.",
  "dağ": "Palavra turca para 'montanha'. Mangal Dağı, Yıldız Dağı, Ardız Dağı e Çal Dağı são as colinas que dominam o campo de batalha de Sakarya.",
  "blocao": "Posto militar pequeno e fortificado, de pedra e terra, com poucos soldados. Na guerra do Rife, os espanhóis espalharam centenas deles, longe uns dos outros.",
  "trem blindado": "Trem com vagões protegidos por chapas de aço e armados com canhões e metralhadoras. Corria sobre os trilhos e dava apoio de fogo ao longo da ferrovia.",
  "esquadrão suicida": "Grupo de voluntários que, segundo relatos da batalha, se aproximava dos tanques com granadas e explosivos presos ao corpo. No exército chinês, eram chamados de unidades 'ousadas em morrer'.",
  "tanqueta": "Pequeno veículo blindado de esteiras, de um ou dois tripulantes, armado com metralhadora. O exército japonês usava muitas em 1938.",
  "gás lacrimogêneo": "Gás que faz os olhos e as vias respiratórias arderem e lacrimejarem. Dificulta a visão e a respiração, mas em geral não mata.",
  "quinta zona de guerra": "Uma das regiões militares em que a China dividiu a frente contra o Japão. A Quinta cobria Shandong e o norte de Jiangsu e era comandada por Li Zongren."
});

Object.assign(DEEP, {
  passchendaele: {
    war: "Primeira Guerra Mundial, Frente Ocidental (1917)",
    hook: "Três meses e dez dias de lama para chegar a uma aldeia que os obuses já tinham varrido do mapa.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No verão de 1917, a guerra na Frente Ocidental estava empacada havia quase três anos. O exército francês passava por motins depois de uma ofensiva fracassada na primavera, e os submarinos alemães afundavam navios que levavam comida e carvão para a Grã-Bretanha. O comandante da Força Expedicionária Britânica, o marechal Douglas Haig, queria atacar em Flandres, onde o terreno ficava entre o mar e a fronteira holandesa.",
        "Os objetivos dele, segundo o plano do quartel-general, eram desgastar o exército alemão, tomar a costa belga, de onde saíam submarinos, e chegar à crista de Passchendaele, de onde seria possível avançar até Roulers e, no fim, até a fronteira com os Países Baixos. A crista também tinha uma razão prática: quem a tivesse dominaria os arredores de Ypres, onde os britânicos viviam dentro de um [[saliente]] cercado de colinas ocupadas pelos alemães.",
        { h: "O caminho até Passchendaele" },
        { timeline: [
          ["7 de junho de 1917", "Batalha de Messines: 19 minas explodem sob a crista ao sul de Ypres e os britânicos tomam a posição."],
          ["31 de julho", "Começa a ofensiva principal, a Terceira Batalha de Ypres, na crista de Pilckem."],
          ["20 de setembro", "Menin Road: primeiro grande ataque do Segundo Exército de Plumer."],
          ["4 de outubro", "Broodseinde, o ataque mais bem-sucedido de toda a campanha."],
          ["26 de outubro a 10 de novembro", "O Corpo Canadense toma a aldeia de Passchendaele."]
        ]},
        "A decisão foi discutida. O primeiro-ministro David Lloyd George e o marechal francês Foch tinham dúvidas. Os historiadores ainda debatem por que Flandres foi escolhida, se Gough era o general certo para comandar o ataque principal, e quanto os motins franceses pesaram na escolha de atacar justamente ali."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Douglas Haig, comandante da Força Expedicionária Britânica" },
        "Marechal de campo, de formação em cavalaria, que acreditava em desgastar o exército alemão até ele ceder. Queria uma ofensiva em Flandres. Em 25 de agosto de 1917, tirou o ataque principal das mãos do Quinto Exército e o entregou ao Segundo.",
        { h: "Hubert Gough e Herbert Plumer" },
        "Gough comandava o Quinto Exército, que fez o primeiro ataque, em 31 de julho. Plumer, do Segundo Exército, tinha preparado com cuidado o ataque de Messines. A partir do fim de agosto, usou o método que os historiadores chamam de [[morder e segurar]]: avanços curtos, frentes estreitas, mais artilharia e pausas de cerca de seis dias entre os ataques.",
        { h: "Arthur Currie" },
        "Comandante do Corpo Canadense. Suas quatro divisões receberam a tarefa de tomar a aldeia em outubro e novembro.",
        { h: "Fritz von Loßberg, do lado alemão" },
        "Chefe do estado-maior do Quarto Exército alemão, de Friedrich Sixt von Armin. Recusou recuar e organizou uma [[defesa em profundidade]]: várias posições sucessivas (as linhas Albrechtstellung, Wilhelmstellung e Flandern), povoados fortificados, [[casamatas de concreto|casamata de concreto]] e, atrás das cristas, [[divisões eingreif|divisão eingreif]] prontas para contra-atacar."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado aliado, cerca de 50 divisões britânicas e do Império (incluindo australianos, neozelandeses e canadenses) e seis francesas na ala norte. Do lado alemão, entre 77 e 83 divisões, conforme a contagem, porque as unidades eram retiradas cansadas e substituídas por outras ao longo dos meses.",
        { h: "O terreno" },
        "Flandres é uma planície baixa cortada por riachos como o Steenbeek e o Ravebeek. A drenagem tinha sido destruída por três anos de guerra e só foi restaurada em parte. As cristas, de pouca altura, davam vista para tudo ao redor. Quem as tinha enxergava a movimentação de quem atacava.",
        { h: "Pilckem, 31 de julho" },
        "O ataque começou às 3h50, sob nuvens baixas. No norte, o XIV Corpo e o Primeiro Exército francês avançaram de 2.500 a 3.000 jardas (cerca de 2,3 a 2,7 km) até o Steenbeek. Perto do meio-dia, um contra-ataque alemão empurrou três brigadas britânicas de volta, com cerca de 70% de baixas. A chuva começou naquela noite: de 18h de 31 de julho a 18h de 4 de agosto caíram cerca de 63 mm. Em todo agosto choveu 127 mm, e 84 mm vieram em apenas cinco dias.",
        { note: "Na época, o chefe de inteligência de Haig, John Charteris, dizia que havia uma pausa regular de chuvas no início de agosto. Estudos sobre 30 anos de registros de tempo não encontraram esse padrão. A drenagem destruída pela guerra agravou a lama." },
        { h: "Os três avanços de Plumer" },
        "Em 25 de agosto, Haig passou a ação principal ao Segundo Exército. O ataque de Menin Road, de 20 a 25 de setembro, foi feito numa frente de 14.500 jardas (cerca de 13 km) e tomou a maior parte dos objetivos, até uns 1.500 jardas (1,4 km) de profundidade. Seguiram-se Polygon Wood (26 de setembro a 3 de outubro) e Broodseinde, em 4 de outubro.",
        { h: "Broodseinde, 4 de outubro" },
        "É a batalha mais bem-sucedida da campanha para os aliados. Os alemães planejavam, para o mesmo dia, um contra-ataque próprio, a operação Höhensturm, e tinham tropas reunidas na frente. A barragem britânica caiu sobre elas, e as divisões eingreif ficaram em boa parte para trás. Participaram os corpos [[anzac]], com divisões australianas e a Divisão Neozelandesa. Os aliados tomaram em média cerca de 1.000 jardas (910 m) e algo como 4.700 a 5.000 prisioneiros. A história oficial alemã chamou aquele de 'o dia negro de 4 de outubro'.",
        "Plumer não explorou o sucesso: oito divisões alemãs descansadas estavam atrás do campo de batalha, e ele preferiu esperar os contra-ataques.",
        { h: "A lama volta: Poelcappelle e o 12 de outubro" },
        "A chuva voltou em 2 de outubro e ficou torrencial. Em 9 de outubro, o ataque a Poelcappelle foi feito numa frente de 13.500 jardas (cerca de 12 km). Em 12 de outubro, o Primeiro Passchendaele custou cerca de 13.000 baixas aliadas, incluindo 2.735 neozelandeses, e não tomou a aldeia. A artilharia fazia buracos que se enchiam de água, e a lama travava as armas e quebrava as barragens.",
        { h: "Os canadenses, 26 de outubro a 10 de novembro" },
        "O Corpo Canadense, sob Currie, rendeu os corpos anzac. Currie queria atrasar o ataque até 29 de outubro, para trazer mais artilharia. Haig queria menos demora, em parte para apoiar o ataque francês de Malmaison, marcado para 23 de outubro. O ataque foi fixado para 26 de outubro, em quatro etapas.",
        "Os canadenses prepararam o terreno com cuidado: cerca de 2 milhas (3 km) de estrada de tábuas duplas, mais de 4.000 jardas de linha de bonde e centenas de animais de carga, além de [[passadiços de tábuas|passadiço de tábuas]] até a frente. A artilharia divisional canadense recebeu 210 canhões de campanha, 190 obuseiros e 26 peças pesadas.",
        { timeline: [
          ["26 de outubro", "Primeira etapa, às 5h40, atrás de uma [[barragem rolante]]."],
          ["30 de outubro", "Tomam Crest Farm e entram em Passchendaele, de onde os alemães se retiram."],
          ["6 de novembro", "A 2ª Divisão canadense toma a aldeia em menos de três horas."],
          ["10 de novembro", "Última ação: o cruzamento e Venture Farm, perto da colina 52."]
        ]},
        "Os alemães tinham muitas divisões diferentes em frente, incluindo as 4ª, 7ª, 11ª, 27ª, 39ª e 185ª, entre outras, sob o Grupo Ypern, do general Alfred Graf zu Dohna-Schlobitten.",
        { h: "O fim" },
        "Em 24 de outubro, a vitória austro-alemã em Caporetto, na Itália, levou Grã-Bretanha e França a mandar tropas para lá. A ofensiva terminou antes de Westroosebeke, a crista seguinte. A data usada por mais fontes para o fim é 10 de novembro, com ataques locais depois."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os britânicos e seus aliados ficaram com a crista de Passchendaele e a aldeia, e tomaram mais de 24.000 prisioneiros (número que ninguém contesta). Não romperam a frente e não chegaram à costa belga. Os canadenses tiveram 15.654 baixas só no Segundo Passchendaele.",
        { h: "As baixas: um dos números mais discutidos da guerra" },
        "Cada historiador conta de um jeito. Do lado britânico, o historiador oficial Edmonds deu 244.897; outros chegam a 448.688 (Wolff), e Terraine refutou esse número em 1977. Prior e Wilson dão cerca de 275.000. Do lado alemão, os números vão de pouco menos de 200.000 a 400.000: a história oficial alemã (Foerster) dá 217.000, e Sheldon chega a 217.194 de 1º de junho a 10 de novembro, ou 399.590 se contar doentes e feridos leves. Sheffield, citando Holmes, fala em cerca de 260.000 de cada lado.",
        { h: "Por que importa" },
        "O nome Passchendaele virou sinônimo de guerra de lama e de sacrifício difícil de justificar. Lloyd George, nas memórias de 1938, chamou a batalha de 'um dos maiores desastres da guerra'. Sheldon argumenta o contrário: o que importa não é quem perdeu mais homens, mas que a Alemanha não tinha como pagar aquela troca. Em 20 de novembro, em Cambrai, os britânicos usaram tanques e artilharia de outra forma, e a guerra de posições começou a mudar.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: a data de aprovação da operação pelo Gabinete de Guerra aparece como 21 de junho em uma parte da Wikipédia e como 25 de julho em outra. Ilustra o quanto até os fatos básicos são debatidos." },
        { note: "Os mortos: o Portão de Menin, em Ypres, lembra os mortos do Império sem túmulo conhecido, mas apenas os britânicos anteriores a 16 de agosto de 1917. Os britânicos e neozelandeses mortos depois estão nomeados no cemitério de Tyne Cot." },
        { note: "Passchendaele canadense: o Memorial de Passchendaele, em Crest Farm, lembra o Segundo Passchendaele. Nove Cruzes Vitória foram dadas por ações naquela batalha, e outras nove por ações em Broodseinde." }
      ]}
    ]
  },

  amiens: {
    war: "Primeira Guerra Mundial, Frente Ocidental (Ofensiva dos Cem Dias, 1918)",
    hook: "O dia em que o exército alemão perdeu menos terreno do que a vontade de lutar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 21 de março de 1918, a Alemanha lançou a operação Michael, a primeira de uma série de ofensivas para vencer a guerra antes que os americanos chegassem em massa. A frente britânica cedeu, mas o avanço parou em 4 de abril em Villers-Bretonneux, perto de Amiens. As ofensivas seguintes (Georgette, Blücher-Yorck, Gneisenau e Marne-Reims) também não romperam. O marechal Foch ordenou então um contra-ataque que levou à vitória aliada no Segundo Marne, e os alemães recuaram para o norte.",
        { h: "O caminho até Amiens" },
        { timeline: [
          ["Julho de 1918", "Rawlinson, do Quarto Exército britânico, apresenta a Haig os planos de Monash, e Haig os envia a Foch."],
          ["24 de julho", "Foch aceita o plano, com a condição de que os franceses participem. A data passa de 10 para 8 de agosto."],
          ["6 de agosto", "A 27ª Divisão alemã, de assalto, avança cerca de 730 m ao norte do Somme e obriga os aliados a ajustar o plano."],
          ["7 de agosto", "O Corpo Canadense termina de chegar à frente, sem ser detectado."],
          ["8 de agosto", "Começa o ataque, às 4h20, em nevoeiro denso."]
        ]},
        "O plano exigia surpresa. Não houve longo bombardeio preparatório, só fogo pouco antes do avanço. As ordens traziam o aviso 'mantenha a boca fechada', e o ataque era chamado de 'incursão', não de ofensiva. Para enganar os alemães, dois batalhões de infantaria, uma unidade de rádio e um hospital de campanha foram mandados perto de Ypres, como se todo o Corpo Canadense estivesse indo para Flandres."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Henry Rawlinson, Quarto Exército britânico" },
        "Comandava o exército que daria o golpe, na frente que se estende dos dois lados do Somme. Apresentou a Haig as propostas de Monash.",
        { h: "John Monash e Arthur Currie" },
        "Monash comandava o Corpo Australiano, e Currie, o Canadense. Os dois corpos, no centro da linha, eram a ponta de lança. Foram as propostas de Monash que Rawlinson levou a Haig.",
        { h: "Marie-Eugène Debeney, Primeiro Exército francês" },
        "Atacava à direita dos britânicos, 45 minutos depois deles.",
        { h: "Georg von der Marwitz e Erich Ludendorff" },
        "Von der Marwitz comandava o Segundo Exército alemão. Ludendorff era um dos principais chefes militares alemães. Os alemães esperavam ataques em outros lugares: Saint-Mihiel, Kemmel, o Lys ou Albert, não Amiens."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O Quarto Exército tinha 1.386 canhões de campanha e obuseiros e 684 peças pesadas, num total de 2.070. Quase 600 tanques participaram. Os corpos Canadense e Australiano tinham, cada um, 108 tanques pesados do tipo Mark V, 36 Mark V 'Star' e 24 de suprimento. O III Corpo britânico tinha um batalhão de Mark V, e o Corpo de Cavalaria, dois batalhões de [[tanques Whippet|whippet]]. Os franceses tinham um batalhão de 72 Whippets.",
        "Do lado alemão, o Segundo Exército tinha seis divisões na linha (duas diante dos franceses) e duas de reserva imediata. A moral estava baixa: Ludendorff mesmo admitiu que muitos soldados se renderam.",
        { h: "O terreno" },
        "Uma região de planalto suave e campos abertos a leste de Amiens, cortada pelo rio Somme, que dividia o ataque: o III Corpo ao norte do rio, o Australiano no centro, o Canadense ao sul dos australianos e os franceses mais ao sul.",
        { h: "O dia 8 de agosto em seis movimentos" },
        { formation: true },
        "Primeiro, às 4h20, a barragem caiu de uma vez sobre os alemães. O nevoeiro era tão denso que os aviões ficaram quase todos no chão, e os alemães só começaram a responder cinco minutos depois. O plano de artilharia mirava 504 das 530 peças alemãs já no minuto zero.",
        "Segundo, atrás da barragem rolante e dos tanques, australianos e canadenses avançaram. Entre eles estavam as 2ª e 3ª divisões australianas e as 1ª, 2ª e 3ª canadenses. Às 11h, o centro tinha avançado 4,8 km.",
        "Terceiro, 45 minutos depois, os franceses entraram, a partir da direita.",
        "Quarto, o Corpo de Cavalaria e os Whippets passaram pelas brechas. Aviões da RAF e carros blindados atiraram contra tropas alemãs em retirada, que não conseguiam se reorganizar.",
        "Quinto, ao norte do Somme, o III Corpo foi parado antes da colina de Chipilly. Era a ponta mais fraca da linha.",
        "Sexto, no fim do dia: os canadenses tinham avançado 13 km, os australianos 11 km, os franceses 8 km e os britânicos 3,2 km. A média foi cerca de 11 km, uma das maiores penetrações da guerra, e abriu-se uma brecha de 24 km ao sul do Somme. Muitos alemães se renderam.",
        { h: "9 a 12 de agosto: o avanço pesa" },
        "No dia seguinte, a infantaria já ia além do alcance da artilharia, e as estradas ficaram congestionadas. Os mais de 500 tanques do início caíram para seis prontos para combate em quatro dias. Em Chipilly, em 9 de agosto à tarde, três batalhões da 33ª Divisão americana atacaram a colina às 17h30. O cabo Jake Allex ganhou a Medalha de Honra pela ação. No sul, a luta francesa é chamada de Batalha de Montdidier. Em 10 de agosto, apareceram sinais de que os alemães abandonavam o saliente da operação Michael. Em 13 de agosto, os britânicos tinham avançado 19 km."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória aliada. As fontes não concordam sobre as baixas: um texto fala em cerca de 12.000 baixas aliadas e mais de 15.000 prisioneiros alemães, outro em 45.000 mortos e feridos aliados (24.232 franceses e 22.202 britânicos) e 29.873 prisioneiros. A estimativa para os alemães é de uns 30.000 só em 8 de agosto.",
        { h: "O 'dia negro'" },
        "Ludendorff chamou 8 de agosto de 'o dia negro do exército alemão'. Não foi pelo terreno perdido, e sim porque a moral dos soldados desabou: tropas em retirada gritavam com os oficiais, e muitos se renderam. Hindenburg anotou que o corte das linhas de comunicação isolou os postos de comando e impediu contra-ataques.",
        { h: "Por que importa" },
        "Foch queria continuar, mas Haig recusou e preferiu uma nova ofensiva, mais ao norte, do Terceiro Exército de Byng, a Segunda Batalha do Somme (21 de agosto a 3 de setembro). Os historiadores veem Amiens como a virada que devolveu a iniciativa aos aliados e abalou o moral alemão. Abriu a [[ofensiva dos cem dias]], que terminou com o armistício em 11 de novembro.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números de tanques variam. Quase 600 participaram, e um relato fala em 342 Mark V, 72 Whippets e 22 de suprimento. Usamos a soma por corpo que aparece na maior parte das fontes." },
        { note: "Dois voluntários do 207º Esquadrão voaram em plena neblina com bombardeiros Handley Page para encobrir o barulho dos tanques, e receberam a Cruz de Voo Distinto. A maioria dos aviões ficou parada." }
      ]}
    ]
  },

  sakarya: {
    war: "Guerra greco-turca / guerra de independência turca (1919–1922)",
    hook: "Um exército grego chegou a 50 km de Ancara e foi parado por uma ideia: defender não uma linha, mas toda uma região.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois da Primeira Guerra Mundial, o [[tratado de sèvres]] (1920) retalhou o Império Otomano e deu à Grécia a região de Esmirna. Os nacionalistas turcos, reunidos em Ancara em torno de Mustafa Kemal, nunca aceitaram o tratado, e a Grécia mandou o exército avançar pela Anatólia. Os gregos esperavam que uma grande vitória forçasse a Assembleia de Ancara a aceitá-lo.",
        { h: "O caminho até o Sakarya" },
        { timeline: [
          ["Janeiro a abril de 1921", "Os turcos resistem aos gregos nas duas batalhas de Inönü."],
          ["Meados de julho de 1921", "Uma ofensiva grega rompe as linhas turcas em Kütahya e Eskişehir. Eskişehir cai em 17 de julho."],
          ["Depois de 17 de julho", "O exército turco recua para o leste do rio Sakarya, a cerca de 80 km de Ancara."],
          ["3 de agosto", "Fevzi Çakmak assume como chefe do estado-maior, no lugar de İsmet, que continua comandando a Frente Ocidental."],
          ["5 de agosto", "A Assembleia dá a Mustafa Kemal o comando supremo por três meses."]
        ]},
        "Depois da derrota, a Assembleia estava descontente com o comando de İsmet e queria Kemal e Fevzi na frente. A Assembleia também aprovou os [[tekâlif-i millîye]], decretos que mandavam o povo entregar armas, munição e suprimentos ao exército. Segundo um relato da batalha, foram requisitados quase metade do tecido, couro, farinha, sabão e velas disponíveis e um quinto dos cavalos e carroças.",
        "O alto-comando turco chegou a planejar uma retirada ainda mais para o leste, até Kayseri."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Mustafa Kemal, 40 anos" },
        "Oficial otomano que se destacou em Galípoli, em 1915, e depois liderou o movimento nacionalista. Presidia a Assembleia de Ancara e, a partir de 5 de agosto, também o exército. Sua ordem central, no auge da crise: não há uma linha de defesa, há uma [[defesa em superfície]] ('hatt-ı müdafaa yoktur, sath-ı müdafaa vardır'). Em seu discurso de 1927, ele disse que nem um palmo do país devia ser abandonado antes de ser encharcado com o sangue dos cidadãos.",
        { h: "Fevzi Çakmak e İsmet" },
        "Fevzi era o chefe do estado-maior e também ministro. İsmet continuava comandando a Frente Ocidental. Segundo um relato, em 26 de agosto İsmet propôs recuar, e Fevzi ordenou manter o monte Çal.",
        { h: "Anastasios Papoulas e o rei Constantino" },
        "Papoulas comandava o Exército da Ásia Menor. Segundo a Wikipédia em turco, no início ele se opunha ao avanço sobre Ancara, por achar a ideia arriscada, mas ordenou o ataque sob pressão política e pública. O rei Constantino I era o comandante supremo das forças gregas na Ásia. O príncipe André da Grécia comandava o II Corpo, e o general Trikoupis, um grupo de divisões ao sul. Havia ainda, no exército grego, a divisão entre [[venizelistas]] e monarquistas."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam muito. A Wikipédia em inglês dá cerca de 77.000 gregos contra 101.727 turcos. Um relato da HistoryNet dá cerca de 100.000 gregos contra uns 90.000 turcos depois das novas convocações. Os gregos tinham mais artilharia, metralhadoras, aviões e caminhões. Os turcos tinham as linhas interiores, uma cavalaria forte e um território que conheciam.",
        { h: "O terreno" },
        "O Sakarya faz curvas que formam uma barreira natural, com margens íngremes e apenas duas pontes no trecho de frente. A leste, o planalto de Haymana, a uns 900 m de altitude, é dominado por colinas ([[dağlar|dağ]]): Mangal, Yıldız, Ardız e Çal. Kemal esperava o esforço principal grego pelo sul, e concentrou a maior parte das tropas ao longo do Ilıca Özü, a ala esquerda recuada do seu dispositivo.",
        { h: "A marcha" },
        "Os gregos começaram a avançar por volta de 14 de agosto, em três colunas. Marcharam cerca de uma semana (algumas fontes dizem nove dias) pelo [[grande deserto salgado]], onde comida e água quase não existiam, e requisitaram mantimentos nas aldeias. Os turcos perceberam a manobra, e os gregos perderam a surpresa.",
        { h: "Os combates em oito movimentos" },
        { formation: true },
        "Primeiro, o esquema inicial: gregos a oeste do rio, turcos nas colinas a leste, e Ancara ao fundo.",
        "Segundo, o plano grego era envolver a ala esquerda turca, a do sul, por uma marcha larga pelo deserto salgado.",
        "Terceiro, em 23 e 24 de agosto, os gregos atacaram. Segundo um relato, o I Corpo tomou o Mangal Dağı no primeiro dia com pouca resistência. Os ataques a sudeste do Mangal e em direção a Haymana não tiveram o mesmo êxito, e a batalha se fragmentou em lutas locais. Em 26 de agosto, a cavalaria turca quase capturou Papoulas.",
        "Quarto, a cavalaria turca atacou as linhas de comunicação gregas. Por vários dias, nem munição nem comida chegaram à frente.",
        "Quinto, em 30 de agosto, o III Corpo tomou o Yıldız Dağı, e o I Corpo, o Ardız Dağı.",
        "Sexto, em 2 e 3 de setembro, os gregos tomaram o monte Çal, a altura mais próxima de Ancara, e algumas unidades chegaram a uns 50 km da cidade. O avanço foi de uns 16 km em dez dias, segundo uma fonte.",
        "Sétimo, as tentativas gregas de abrir caminho até Haymana fracassaram, e em 9 de setembro o estado-maior grego suspendeu a ofensiva. Kemal passou seu quartel-general para Polatlı.",
        "Oitavo, entre 8 e 10 de setembro os turcos retomaram o Çal (as fontes dão datas diferentes, e Kemal participou pessoalmente de um contra-ataque). Entre 11 e 14 de setembro, os gregos recuaram para o outro lado do Sakarya, queimando ferrovias, pontes e aldeias. A perseguição turca foi só de cavalaria. O príncipe André advertiu que metralhadoras turcas do outro lado do rio teriam causado destruição total nas travessias, onde as tropas gregas se embolaram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O avanço grego a Ancara fracassou. Os gregos voltaram às suas linhas e nunca mais lançaram uma grande ofensiva. Os turcos retomaram Sivrihisar (20 de setembro), Aziziye (22 de setembro), Bolvadin e Çay (24 de setembro).",
        { h: "As baixas" },
        "Pelos números mais citados, os turcos tiveram 5.713 mortos, 18.480 feridos, 828 prisioneiros e 14.268 desaparecidos (39.289 no total), e os gregos 3.758 mortos, 18.955 feridos e 354 desaparecidos (23.007). Outros relatos dão cerca de 3.700 mortos e 18.000 feridos aos turcos e 4.000 mortos e 19.000 feridos aos gregos, além de uns 15.000 prisioneiros e desertores gregos. A perda de oficiais foi tão alta que a batalha ficou conhecida na Turquia como Batalha dos Oficiais.",
        { h: "Por que importa" },
        "Em outubro de 1921, os tratados de Kars (com a Rússia) e de Ancara (com a França) aliviaram os turcos em outras frentes. Kemal recebeu da Assembleia o posto de marechal e o título de [[gazi]]. Papoulas renunciou em maio de 1922, e Hatzianestis o substituiu. Em agosto de 1922, a ofensiva turca de Dumlupınar levou à tomada de Esmirna, e o Tratado de Lausanne (24 de julho de 1923) fixou o fim da presença grega na Ásia Menor.",
        { h: "Curiosidades e controvérsias" },
        { note: "O resultado: a Wikipédia em inglês chama a batalha de empate militar em um lugar e de vitória turca em outro. Os historiadores concordam em que o avanço grego fracassou. O historiador Sayen acha que o plano grego foi cauteloso demais: os gregos esperaram uns 20 dias e usaram cerca de 70% das forças, contra 85% dos turcos. Edward Erickson dá crédito a Papoulas por ter mantido o exército inteiro na retirada, e Ernest Tucker diz que ele entrou em pânico." },
        { note: "Um jornalista turco, İsmail Habip Sevük, notou que a retirada otomana que começou em Viena em 13 de setembro de 1683 foi parada 238 anos depois, em outro 13 de setembro." },
        { note: "As datas e os lugares: as fontes diferem em quando o Çal foi retomado (8 ou 10 de setembro), em quando os gregos começaram a recuar (11 a 14 de setembro) e em que corpo grego atacou onde. O diagrama é um esquema, não um mapa preciso." }
      ]}
    ]
  },

  annual: {
    war: "Guerra do Rife (1921–1926)",
    hook: "Um general que avançou 130 km sem reservas e, em uma tarde, perdeu o que levou dois anos para conquistar.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Desde 1912, a Espanha tinha um [[protetorado]] no norte do Marrocos, mas dominava pouco do interior montanhoso do Rife. Em 1920 e 1921, o general Manuel Fernández Silvestre, comandante-geral de Melilla, decidiu avançar para o oeste, com o objetivo de chegar à baía de Alhucemas, vista como a chave para controlar a região.",
        "A tática foi avançar sem grande resistência e fixar posições. Entre maio de 1920 e junho de 1921, as tropas progrediram cerca de 130 km e criaram 46 novos postos, num total de cerca de 144 [[blocaos|blocao]] e posições, abastecidos por comboios de mulas. Annual, onde Silvestre fez a base, foi ocupada em 15 de janeiro de 1921, segundo a Wikipédia.",
        { h: "O caminho até Annual" },
        { timeline: [
          ["1º de junho de 1921", "Abarrán: os espanhóis tomam o monte, e os rifenhos o retomam no mesmo dia, com 141 mortos espanhóis."],
          ["Junho", "A tropa (harka) de Abd el-Krim cresce de cerca de 3.000 para cerca de 11.000 homens."],
          ["14 a 21 de julho", "Cerco ao posto avançado de Igueriben, a sul de Annual. Cai em 21 ou 22 de julho."],
          ["22 de julho", "Silvestre manda recuar de Annual, e a retirada vira derrota."],
          ["9 de agosto", "Rendição de Monte Arruit."]
        ]},
        "Os pontos fracos eram conhecidos: linhas de abastecimento longas demais, falta de reservas, pouca água, e tribos aliadas armadas e de lealdade duvidosa. Silvestre estava cada vez mais ansioso. Pediu reforços a Berenguer, o alto-comissário, dizendo que a situação era 'algo delicada'."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Manuel Fernández Silvestre" },
        "General espanhol de Melilla, o autor do avanço. Sua morte é incerta: uma versão diz que se matou na tenda, outra que foi morto com o coronel Manella, e um mensageiro marroquino disse ter visto o corpo oito dias depois. Os restos nunca foram encontrados.",
        { h: "Dámaso Berenguer e Felipe Navarro" },
        "Berenguer era o alto-comissário, a autoridade espanhola no protetorado. Navarro, segundo no comando em Melilla, liderou os sobreviventes até Monte Arruit.",
        { h: "Abd el-Krim" },
        "Rifenho que tinha sido tradutor e funcionário dos espanhóis. Reuniu as tribos numa [[harka]] e usou a [[guerrilha]] do terreno montanhoso. Mais tarde disse que o maior erro da sua vida foi não ter atacado Melilla depois da vitória."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam muito. Para os espanhóis: entre 18.000 e 23.000 homens no comando de Melilla, espalhados em muitos postos, com 24 peças de artilharia, e em Annual, segundo o texto, mais de 5.000 (ou mais de 10.000, segundo a Wikipédia em espanhol). Para os rifenhos, entre 3.000 e 18.000, dos quais só cerca de 8.000 com fuzis, e destes 3.450 Mauser. As duas Wikipédias não se reconciliam.",
        { h: "O terreno" },
        "Montanhas áridas, desfiladeiros e rios secos. Os rifenhos ocupavam as alturas ao redor dos postos espanhóis, e a água era trazida por mulas.",
        { h: "Igueriben" },
        "O posto, ocupado em junho, protegia o sul de Annual. Segundo a Wikipédia em espanhol, seus cerca de 350 defensores caíram em 21 ou 22 de julho depois de cinco dias de colunas de socorro que não chegaram. Em inglês, são cerca de 300 homens, dos quais 33 sobreviveram.",
        { h: "A retirada, 22 de julho" },
        "Com munição acabando, Silvestre ordenou a retirada de Annual, por volta das 10h ou 11h, em duas colunas: uma de mulas e suprimentos, outra de tropas, feridos e armas pesadas. As alturas já estavam nas mãos dos rifenhos. A polícia nativa e as tropas aliadas desertaram, e em alguns casos mataram os oficiais espanhóis. A coluna ficou sem flanqueadores e sem retaguarda, e virou uma debandada.",
        "Duas unidades seguraram a retirada. Os [[regulares]] do comandante Llamas ocuparam as alturas ao sul, o que deixou muitos passarem pelo desfiladeiro de Izumar. O regimento de cavalaria Cazadores de Alcántara, sob o tenente-coronel Fernando Primo de Rivera, cobriu a retirada com metralhadoras e cargas repetidas: de 691 cavaleiros, 471 morreram (cerca de 70%).",
        { h: "De Annual a Monte Arruit" },
        "Navarro levou os sobreviventes para Dar Drius, depois Batel e Tistutin, e por fim Monte Arruit. Ali cerca de 3.017 homens ficaram sem água e sem suprimentos, com a moral em ruínas. Nador se rendeu em 2 de agosto, e sua guarnição foi a única poupada. Zeluán se rendeu em 3 de agosto, e os sobreviventes foram torturados e mortos. Segundo a Wikipédia em espanhol, o Berenguer autorizou a rendição de Monte Arruit em 9 de agosto. As armas foram entregues, e então os rifenhos atacaram e mataram quase todos. Os oficiais foram separados e mantidos para resgate.",
        { note: "Quantos foram mortos depois da rendição de Monte Arruit é incerto. Um jornal fala em cerca de 3.000 assassinados, e a Wikipédia em espanhol diz que foram quase todos os cerca de 3.000. A fonte em inglês avisa que isso não é confirmado por fontes independentes." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A maior derrota do exército espanhol na era moderna, chamada na Espanha de Desastre de Annual. Mais de 130 [[blocaos|blocao]] foram tomados, e no fim de agosto a Espanha tinha perdido todo o território conquistado desde 1909. Navarro, 534 militares e 53 civis ficaram prisioneiros: 326 sobreviveram a 18 meses de cativeiro e foram soltos em 27 de janeiro de 1923, por um resgate de 4 milhões de pesetas.",
        { h: "As baixas" },
        "Os números das mortes espanholas variam: 7.875 (Caballero Poveda, 1984), 8.180 (Palma Moreno, 2001), 8.668 (Indalecio Prieto, em outubro de 1921), 13.192 (o número oficial apresentado às Cortes) e 13.363 (Expediente Picasso, incluindo tropas nativas). As perdas rifenhas são desconhecidas. Um autor fala em cerca de 800 mortos e feridos. Foram perdidos cerca de 20.000 fuzis, 400 metralhadoras e 129 canhões, segundo uma fonte.",
        { h: "Por que importa" },
        "O governo de Allendesalazar caiu, e Antonio Maura formou um governo de concentração nacional em agosto de 1921. Indalecio Prieto acusou o rei nas Cortes em 27 de outubro de 1921. O Expediente Picasso, apresentado em julho de 1922, apontou negligência de Berenguer e Navarro e conduta temerária de Silvestre. O golpe de Primo de Rivera, em 13 de setembro de 1923, paralisou o relatório e a comissão das Cortes. Berenguer foi anistiado em 1924. A Espanha reconquistou boa parte do Rife em 1922, e a guerra só terminou depois do desembarque em Alhucemas, em 1925, feito junto com a França.",
        { h: "Curiosidades e controvérsias" },
        { note: "O rei: correu o boato de que Afonso XIII teria mandado a Silvestre um telegrama dizendo 'Olé los hombres, el 25 te espero', ligando o dia 25 de julho a uma vitória. Várias pessoas diziam tê-lo visto, mas nenhuma cópia foi encontrada. Os historiadores Tusell e García Queipo de Llano dizem que não há prova de que o rei incentivou o avanço." },
        { note: "Em 2 de julho de 2012, o regimento Cazadores de Alcántara recebeu a Cruz Laureada de São Fernando, coletiva, pela ação de retaguarda." }
      ]}
    ]
  },

  taierzhuang: {
    war: "Segunda Guerra Sino-Japonesa (1937–1945)",
    hook: "A primeira vez em que a China derrotou o exército japonês em uma grande batalha: dentro de uma cidade murada, rua por rua.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo de 1938, a China já tinha perdido Xangai e Nanquim, e sua aviação e sua marinha estavam quase destruídas. O alto-comando japonês não planejava novas ofensivas, mas os comandantes no campo insistiram em avançar para o norte. Em fevereiro, os dois governos retiraram os embaixadores. O alvo era Xuzhou, o nó ferroviário que unia as linhas norte-sul e leste-oeste. Se os japoneses o tomassem, juntariam as forças do norte e do sul da China.",
        { h: "O caminho até Taierzhuang" },
        { timeline: [
          ["Início de 1938", "A 10ª Divisão japonesa atravessa o rio Amarelo, toma Jinan quase sem luta e segue para o sul pela ferrovia Jinpu."],
          ["13 a 18 de março", "O 59º Exército de Zhang Zizhong ataca perto de Linyi e força a 5ª Divisão japonesa, que desembarcou em Qingdao, a recuar."],
          ["15 a 19 de março", "A 10ª Divisão rompe as linhas chinesas em Tengxian e Lincheng e avança sobre Taierzhuang."],
          ["24 de março", "Os japoneses entram em Taierzhuang pelo portão nordeste."],
          ["7 de abril", "A linha japonesa se rompe."]
        ]},
        "A 5ª Divisão tinha sido atrasada por mais de um mês pela 39ª Divisão de Pang Bingxun. Os chineses, por sua vez, tinham melhorado a disciplina depois da execução do general Han Fuju, que abandonou Shandong. Chegar a Taierzhuang, uma pequena cidade murada perto do [[grande canal]], era a última etapa do avanço da 10ª Divisão."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Li Zongren, Quinta Zona de Guerra" },
        "Comandante da [[quinta zona de guerra]], com Bai Chongxi como adjunto. Segundo algumas fontes, o plano de cercar os japoneses, quando eles estivessem comprometidos com a conquista da cidade, era dele. Chamou a vitória de 'símbolo do renascimento nacional'.",
        { h: "Sun Lianzhong, Tang Enbo e Chi Fengcheng" },
        "Sun Lianzhong comandava o 2º Grupo de Exércitos e, em 31 de março, assumiu o comando da luta na cidade. Tang Enbo comandava o 20º Corpo, que virou ao sul. Chi Fengcheng comandava a 31ª Divisão, que defendia a cidade. Sun Zhen, do 22º Grupo de Exércitos, tinha marchado mais de 1.400 km até ali.",
        { h: "Isogai Rensuke e Itagaki Seishirō" },
        "Isogai comandava a 10ª Divisão japonesa, com a Força-Tarefa Seya. Itagaki comandava a 5ª Divisão, com a Força-Tarefa Sakamoto. As duas faziam parte do Segundo Exército da Área do Exército da China do Norte."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Wikipédia em inglês dá cerca de 72.278 homens no 20º Corpo chinês e unidades ligadas e de 17.000 a 60.000 japoneses, com 7 tanques e 39 [[tanquetas|tanqueta]]. Os números são discutidos, e os dos chineses, somando todas as tropas na área, chegam a muito mais.",
        { h: "O terreno" },
        "Uma cidade com muralha e ruas estreitas, perto do Grande Canal. As ruas apertadas anulavam a vantagem japonesa em artilharia, aviação e gás.",
        { h: "A batalha em nove movimentos" },
        { formation: true },
        "Primeiro, os japoneses descem pela ferrovia ao norte, e a 5ª Divisão se aproxima pelo leste. Na cidade está a 31ª Divisão, com o 2º Grupo de Exércitos ao redor. O 20º Corpo está a nordeste, perto de Yixian, e os 85º e 52º Exércitos vêm do sul.",
        "Segundo, em 24 de março, uma força japonesa rompe o portão nordeste e é cercada no templo de Chenghuang, onde é queimada.",
        "Terceiro, em 25 de março, um [[trem blindado]] chinês embosca os japoneses, e cerca de 3.000 soldados chineses fazem uma investida noturna e os empurram para trás.",
        "Quarto, de 26 a 28 de março, o 20º Corpo toma Yixian e vira para o sul contra o flanco japonês. O 55º Exército corta a ferrovia perto de Lincheng. A artilharia chinesa chega em 28 de março.",
        "Quinto, os japoneses abrem a muralha na noite de 29 de março, e a luta passa a ser casa por casa. Em 31 de março, Sun Lianzhong assume o comando.",
        "Sexto, em 1º de abril, uma brigada japonesa de socorro é bloqueada e atacada pela retaguarda. Onze tanques japoneses atacam ao amanhecer: os canhões antitanque chineses destroem oito, e, segundo relatos, [[esquadrões suicidas|esquadrão suicida]] destroem outros.",
        "Sétimo, de 2 a 5 de abril, os japoneses usam [[gás lacrimogêneo]] e um ataque de 30 tanques e 60 carros blindados, que empurra a 27ª Divisão chinesa até o Grande Canal. Os chineses seguram o portão sul, o que permite reabastecer a cidade. Os japoneses controlam dois terços dela, mas não conseguem se reabastecer. Em 5 de abril, sete divisões chinesas estão ao norte dos japoneses e quatro ao sul.",
        "Oitavo, em 6 de abril, os 85º e 52º Exércitos se encontram em Taodun, e o cerco se fecha.",
        "Nono, em 7 de abril, a linha japonesa desmorona. A 5ª e a 10ª Divisões recuam, deixando muitos mortos e equipamento. Cerca de 2.000 japoneses teriam escapado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória chinesa, a primeira de grande porte na guerra, parte da Batalha de Xuzhou. A 31ª Divisão chinesa, por exemplo, tinha só 2.000 dos 9.000 homens aptos para a chamada depois da batalha.",
        { h: "As baixas: números muito discutidos" },
        "Os japoneses, em seus registros, falam em 411 mortos e 1.319 feridos na Força-Tarefa Seya, e o historiador Jiang Keshi estima menos de 2.500 baixas no total. Os relatos chineses falam em mais de 20.000 mortos e feridos japoneses, e um deles em mais de 24.000 mortos. Fontes ocidentais variam: cerca de 8.000 mortos (Mitter, Frank, Van de Ven), 15.000 a 20.000 (MacKinnon), cerca de 16.000 (Dorn). As perdas chinesas: 20.342 no 20º Corpo, 9.675 no 2º Grupo de Exércitos e 2.415 no 22º Grupo; Dorn fala em mais de 30.000 no total.",
        { h: "Por que importa" },
        "A vitória abalou o mito da invencibilidade japonesa e levantou muito o moral chinês. O Japão a negou no início. Mas durou pouco: Xuzhou caiu em maio de 1938, e os chineses romperam o cerco e se reagruparam para defender Wuhan. Em 2006, o campo de batalha de Taierzhuang foi declarado sítio nacional protegido.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os esquadrões 'ousados em morrer', com dinamite e granadas contra tanques, aparecem em livros de divulgação e se repetem de um para outro. São relatos, não fatos confirmados por registros detalhados." },
        { note: "As datas: a Wikipédia dá 22 de março a 7 de abril, e outras fontes começam em 24 de março. Usamos 24 de março, quando os japoneses entraram na cidade." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  amiens: {
    terrain: [
      { t: "sea", x: -8, y: 19, w: 116, h: 3.5, l: "Rio Somme" },
      { t: "note", x: 8, y: 36, l: "Amiens" },
      { t: "note", x: 40, y: 4, l: "Colina de Chipilly" },
      { t: "note", x: 92, y: 74, l: "Norte ↑" }
    ],
    units: [
      { id: "iii", s: "a", k: "inf", w: 5, h: 12, l: "III Corpo britânico" },
      { id: "aus", s: "a", k: "inf", w: 5, h: 12, l: "Corpo Australiano (Monash)" },
      { id: "can", s: "a", k: "inf", w: 5, h: 14, l: "Corpo Canadense (Currie)" },
      { id: "fr", s: "a", k: "inf", w: 5, h: 14, l: "Primeiro Exército francês" },
      { id: "cavC", s: "a", k: "cav", w: 7, h: 5, l: "Corpo de Cavalaria e Whippets" },
      { id: "gN", s: "b", k: "inf", w: 5, h: 12, l: "Alemães ao norte do Somme" },
      { id: "gA", s: "b", k: "inf", w: 5, h: 12, l: "Alemães (frente australiana)" },
      { id: "gB", s: "b", k: "inf", w: 5, h: 14, l: "Alemães (frente canadense)" },
      { id: "gF", s: "b", k: "inf", w: 5, h: 14, l: "Alemães (frente francesa)" }
    ],
    steps: [
      { t: "Antes do amanhecer de 8 de agosto. Do norte para o sul: o III Corpo, os australianos, os canadenses e os franceses. Os canadenses só chegaram em 7 de agosto, em segredo.",
        p: { iii: [28, 10], aus: [28, 30], can: [28, 45], fr: [26, 59], cavC: [14, 38], gN: [45, 10], gA: [45, 30], gB: [45, 45], gF: [45, 59] } },
      { t: "4h20: a barragem rolante cai de uma vez sobre os alemães, em nevoeiro denso. Os alemães só respondem depois de cinco minutos, e a artilharia aliada já mira quase todas as peças inimigas.",
        p: { aus: [32, 30], can: [32, 45] } },
      { t: "Australianos e canadenses avançam atrás da barragem e dos tanques. Às 11h, o centro avançou 4,8 km.",
        p: { aus: [41, 30], can: [41, 45], gA: [52, 30], gB: [52, 45] } },
      { t: "45 minutos depois dos britânicos, os franceses entram, à direita.",
        p: { fr: [34, 59], gF: [50, 59] } },
      { t: "O Corpo de Cavalaria e os Whippets passam pelas brechas. Aviões e carros blindados atiram contra tropas alemãs que tentam se reorganizar.",
        p: { cavC: [48, 38], aus: [47, 30], can: [47, 45] } },
      { t: "Ao norte do Somme, o III Corpo é parado antes da colina de Chipilly. Esta é a ponta mais fraca da linha.",
        p: { iii: [33, 10] } },
      { t: "Fim do dia: canadenses 13 km, australianos 11 km, franceses 8 km, britânicos 3,2 km. Muitos alemães se rendem. Abre-se uma brecha de 24 km ao sul do Somme.",
        p: { aus: [58, 30], can: [64, 45], fr: [51, 59], iii: [38, 10], cavC: [60, 38], gA: [66, 30], gB: [72, 45] }, x: ["gA", "gB"] },
      { t: "Em 9 de agosto, a infantaria passa à frente da artilharia e as estradas congestionam. Em quatro dias, dos mais de 500 tanques restam seis prontos. Em Chipilly, a 33ª Divisão americana ataca às 17h30 e toma a colina.",
        p: { iii: [41, 10], aus: [60, 30], can: [66, 45] } }
    ]
  },

  sakarya: {
    terrain: [
      { t: "hill", x: 56, y: 52, rx: 7, ry: 6, l: "Mangal Dağı" },
      { t: "hill", x: 66, y: 24, rx: 6, ry: 5, l: "Yıldız Dağı" },
      { t: "hill", x: 76, y: 42, rx: 6, ry: 5, l: "Ardız Dağı" },
      { t: "hill", x: 86, y: 32, rx: 6, ry: 5, l: "Çal Dağı" },
      { t: "note", x: 38, y: 6, l: "Rio Sakarya" },
      { t: "note", x: 90, y: 8, l: "Ancara →" },
      { t: "note", x: 20, y: 66, l: "Grande deserto salgado" },
      { t: "note", x: 70, y: 66, l: "Haymana" },
      { t: "note", x: 10, y: 74, l: "Esquema: posições aproximadas" }
    ],
    units: [
      { id: "gIII", s: "a", k: "inf", w: 6, h: 14, l: "III Corpo grego" },
      { id: "gII", s: "a", k: "inf", w: 6, h: 14, l: "II Corpo grego" },
      { id: "gI", s: "a", k: "inf", w: 6, h: 14, l: "I Corpo grego" },
      { id: "tLine", s: "b", k: "inf", w: 6, h: 26, l: "Turcos nas colinas" },
      { id: "tLeft", s: "b", k: "inf", w: 16, h: 5, l: "Ala esquerda turca (Ilıca Özü)" },
      { id: "tCav", s: "b", k: "cav", w: 9, h: 5, l: "Cavalaria turca" }
    ],
    steps: [
      { t: "Meados de agosto. Os gregos estão a oeste do Sakarya, em três colunas. Os turcos ocupam as colinas a leste, com a ala esquerda recuada ao longo do Ilıca Özü.",
        p: { gIII: [14, 20], gII: [14, 36], gI: [14, 52], tLine: [52, 30], tLeft: [60, 58], tCav: [66, 12] } },
      { t: "Os gregos tentam envolver a ala esquerda turca, a do sul, por uma marcha de cerca de uma semana pelo deserto salgado, com pouca água e pouca comida.",
        p: { gI: [30, 62, 20] } },
      { t: "23 e 24 de agosto: o ataque grego. O I Corpo toma o Mangal Dağı. Os ataques a sudeste do Mangal e a Haymana não passam, e a luta se fragmenta.",
        p: { gI: [50, 52], gII: [32, 38], gIII: [32, 20], tLeft: [64, 60] } },
      { t: "A cavalaria turca ataca as linhas de abastecimento gregas pela retaguarda. Por vários dias, nem munição nem comida chegam à frente.",
        p: { tCav: [24, 34] } },
      { t: "30 de agosto: o III Corpo toma o Yıldız Dağı, e o I Corpo, o Ardız Dağı.",
        p: { gIII: [60, 24], gI: [70, 44], gII: [44, 36] } },
      { t: "2 e 3 de setembro: os gregos tomam o Çal Dağı, a altura mais próxima de Ancara. Algumas unidades chegam a uns 50 km da cidade.",
        p: { gI: [82, 34] } },
      { t: "Os ataques gregos a Haymana fracassam. Em 9 de setembro, o estado-maior grego suspende a ofensiva. Kemal leva o quartel-general para Polatlı.",
        p: { gII: [52, 40] } },
      { t: "8 a 10 de setembro: os turcos, num contra-ataque em que Kemal participa, retomam o Çal Dağı.",
        p: { gI: [70, 40] } },
      { t: "11 a 14 de setembro: os gregos recuam para o outro lado do Sakarya, queimando pontes, ferrovias e aldeias. Só a cavalaria turca os persegue.",
        p: { gI: [16, 50], gII: [14, 36], gIII: [14, 20], tCav: [30, 34] } }
    ]
  },

  taierzhuang: {
    terrain: [
      { t: "note", x: 50, y: 33, l: "Taierzhuang" },
      { t: "note", x: 14, y: 6, l: "Ferrovia Jinpu e Lincheng" },
      { t: "note", x: 16, y: 53, l: "Grande Canal" },
      { t: "note", x: 90, y: 74, l: "Norte ↑" },
      { t: "note", x: 12, y: 74, l: "Esquema: posições aproximadas" }
    ],
    units: [
      { id: "j10", s: "a", k: "inf", w: 14, h: 6, l: "10ª Divisão (Isogai)" },
      { id: "j5", s: "a", k: "inf", w: 12, h: 6, l: "5ª Divisão (Itagaki)" },
      { id: "c31", s: "b", k: "inf", w: 12, h: 6, l: "31ª Divisão na cidade" },
      { id: "c2g", s: "b", k: "inf", w: 12, h: 6, l: "2º Grupo de Exércitos (Sun Lianzhong)" },
      { id: "c20", s: "b", k: "inf", w: 12, h: 6, l: "20º Corpo (Tang Enbo)" },
      { id: "c55", s: "b", k: "inf", w: 10, h: 5, l: "55º Exército" },
      { id: "c85", s: "b", k: "inf", w: 12, h: 6, l: "85º Exército" },
      { id: "c52", s: "b", k: "inf", w: 12, h: 6, l: "52º Exército" }
    ],
    steps: [
      { t: "Meados de março. A 10ª Divisão japonesa desce pela ferrovia, ao norte. A 5ª se aproxima pelo leste. A 31ª Divisão chinesa guarda a cidade, com o 2º Grupo de Exércitos ao lado, o 20º Corpo a nordeste. Os 85º e 52º Exércitos vêm do sul.",
        p: { j10: [50, 14], j5: [90, 28], c31: [50, 38], c2g: [28, 40], c20: [78, 14], c55: [30, 14], c85: [62, 62], c52: [38, 62] } },
      { t: "24 de março: uma força japonesa rompe o portão nordeste e é cercada no templo de Chenghuang, onde é queimada.",
        p: { j10: [50, 28] } },
      { t: "25 de março: um trem blindado chinês embosca os japoneses, e cerca de 3.000 soldados chineses fazem uma investida noturna que os empurra para trás.",
        p: { j10: [50, 22] } },
      { t: "26 a 28 de março: o 20º Corpo toma Yixian e vira para o sul contra o flanco japonês. O 55º Exército corta a ferrovia perto de Lincheng, atrás deles.",
        p: { c20: [68, 22], c55: [50, 8] } },
      { t: "Noite de 29 de março a 1º de abril: os japoneses abrem a muralha, e a luta é casa por casa. Em 31 de março, Sun Lianzhong assume o comando.",
        p: { j10: [50, 32], c31: [50, 42], c2g: [34, 40] } },
      { t: "1º de abril: uma brigada japonesa de socorro é bloqueada e atacada pela retaguarda. Onze tanques atacam ao amanhecer, e os canhões antitanque chineses destroem oito.",
        p: { j5: [80, 26], c20: [72, 26] } },
      { t: "2 a 5 de abril: os japoneses usam gás lacrimogêneo e 30 tanques com 60 carros blindados. Os chineses mantêm o portão sul e reabastecem a cidade, mas os japoneses não. Sete divisões chinesas estão ao norte, e quatro ao sul.",
        p: { j10: [50, 34], c85: [62, 56], c52: [38, 56] } },
      { t: "6 de abril: os 85º e 52º Exércitos se encontram em Taodun. O cerco se fecha.",
        p: { c85: [54, 48], c52: [46, 48] } },
      { t: "7 de abril: a linha japonesa desmorona. A 5ª e a 10ª Divisões recuam, deixando muitos mortos e equipamento. Cerca de 2.000 japoneses teriam escapado.",
        p: { j5: [90, 20], j10: [50, 24] }, x: ["j10", "j5"] }
    ]
  }
});
