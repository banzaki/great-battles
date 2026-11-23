// In-depth battles, batch bp: beaumonthamel, vimy, dieppe (Canadian pack).
// Checked against the English Wikipedia articles on the First day on the Somme, the Capture of Beaumont-Hamel, the
// Royal Newfoundland Regiment, the Beaumont-Hamel Newfoundland Memorial, the Battle of Vimy Ridge and the Dieppe Raid,
// the pages of Veterans Affairs Canada and Valour Canada on Beaumont-Hamel and Vimy, and the works those pages cite
// (Philpott, Edmonds, Nicholson, Cook, McKay and Swift, Granatstein, Reynolds, Villa, O'Keefe). Where sources
// disagree the text says so.

Object.assign(GLOSSARY, {
  "terra de ninguém": "O terreno aberto entre as trincheiras dos dois lados. Quem o atravessa na frente de metralhadoras e artilharia quase não tem onde se esconder.",
  "mina de túnel": "Túnel cavado por baixo das linhas inimigas e enchido de explosivo. Na Primeira Guerra, sapadores cavavam dezenas deles e os faziam explodir pouco antes do ataque, para abrir crateras e abalar os defensores.",
  "trincheira de apoio": "Trincheira atrás da linha da frente, onde ficam as tropas que ainda não atacaram. Para chegar à linha da frente, os soldados atravessam outras trincheiras.",
  "trincheira de ligação": "Trincheira que liga a retaguarda à linha da frente. Em dia de ataque, ela enche de soldados, munição e feridos, e os movimentos ficam lentos.",
  "foguete de sinalização": "Foguete que sobe e abre uma luz colorida, usado para mandar um aviso sem rádio. As cores e os horários combinados queriam dizer coisas como 'chegamos' ou 'precisamos de artilharia'.",
  "bombardeio preparatório": "Tiro de artilharia que dura horas ou dias antes do ataque, para destruir arame farpado e abrigos. Em 1916, ele falhou onde os alemães tinham abrigos fundos.",
  "brigada de infantaria": "Grupo de quatro batalhões de infantaria que lutam juntos, no exército britânico de 1916. Três brigadas formavam uma divisão.",
  "divisão de infantaria": "Grande unidade de mais de dez mil homens, com infantaria, artilharia e serviços próprios, sob um só general. Nos exércitos britânico e canadense da Primeira Guerra, uma divisão tinha três brigadas.",
  "dominion": "Colônia britânica que governava a si mesma e tinha seu próprio governo, mas ainda fazia parte do Império Britânico. Canadá, Austrália e Terra Nova eram dominions em 1914.",
  "galeria de acesso": "Túnel cavado sob o terreno para levar soldados e munição à frente sem serem vistos nem atingidos. Em Vimy havia doze, o maior com cerca de 1,2 km.",
  "linhas de objetivo": "Linhas traçadas no mapa antes do ataque, uma atrás da outra. Quando a infantaria chega a uma, para, reorganiza-se e espera a barragem seguir. Em Vimy tinham as cores preta, vermelha, azul e marrom.",
  "incursão de trincheira": "Ataque pequeno e rápido a uma trincheira inimiga, para prender soldados, tomar documentos e testar as defesas. Os canadenses fizeram 55 antes de Vimy.",
  "paredão": "Muro baixo de pedra ou concreto, ao longo de uma praia, que protege a cidade do mar. Os soldados que desembarcavam em Dieppe ficavam presos junto a ele.",
  "seixos": "Pedras redondas e lisas, do tamanho de um punho, que cobrem certas praias. As esteiras de um tanque patinam nelas, e foi isso que prendeu muitos tanques em Dieppe.",
  "tanque churchill": "Tanque britânico pesado, de ritmo lento e blindagem grossa, concebido para acompanhar a infantaria. Em Dieppe foi usado pela primeira vez em combate.",
  "bateria costeira": "Grupo de canhões pesados em terra, para atirar em navios inimigos. Em Dieppe, alguns ficavam em túneis nos penhascos, e os planejadores aliados não sabiam de boa parte deles.",
  "cortina de fumaça": "Fumaça espalhada de propósito, por aviões ou navios, para que o inimigo não veja as tropas que se aproximam.",
  "operações combinadas": "Nome britânico das operações em que marinha, exército e aviação agem juntos, como um desembarque. O Quartel-General de Operações Combinadas planejou o ataque a Dieppe.",
  "porto mulberry": "Porto artificial, feito de peças pré-fabricadas, rebocado pelo Canal da Mancha em 1944 e montado ao largo da Normandia. Dispensava a tomada de um porto francês inteiro e intacto.",
  "blindados de hobart": "Tanques adaptados pelo general britânico Percy Hobart para as praias, com lança-chamas, tapetes que se desenrolavam sobre a areia mole e outras ferramentas. Os soldados os apelidaram de 'funnies' (engraçados).",
  "ordem de comandos": "Ordem secreta de Hitler, de outubro de 1942, que mandava matar os comandos aliados capturados, mesmo que estivessem vestindo uniforme e tivessem se rendido."
});

Object.assign(DEEP, {
  beaumonthamel: {
    war: "Primeira Guerra Mundial, batalha do Somme (1916)",
    hook: "Em cerca de meia hora, um regimento de uma ilha do Atlântico Norte perdeu quase todos os homens, e a Terra Nova ainda guarda esse dia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1914, a Terra Nova era um [[dominion]] britânico, uma ilha do Atlântico Norte que governava a si mesma e não fazia parte do Canadá. Quando a Grã-Bretanha entrou na guerra, a ilha também entrou, e voluntários formaram o Regimento da Terra Nova. Os primeiros, cerca de quinhentos, ficaram conhecidos como os 'First Five Hundred'. Em setembro de 1915, o regimento lutou em Galípoli, e no início de 1916 foi para a França, onde entrou na 88ª [[brigada de infantaria|brigada de infantaria]] da 29ª [[divisão de infantaria|divisão de infantaria]].",
        "No verão de 1916, os Aliados prepararam uma grande ofensiva no rio Somme. A batalha do Somme como um todo tem página própria neste site. Aqui o assunto é um pedaço dela: o ataque da 29ª Divisão diante de Beaumont-Hamel, uma aldeia protegida por uma colina fortificada, a de Hawthorn, e por um vale fundo em forma de Y.",
        { h: "O caminho até 1º de julho" },
        { timeline: [
          ["Ago 1914", "A Terra Nova forma um regimento de voluntários."],
          ["Set 1915", "O regimento chega a Galípoli e entra na 88ª Brigada da 29ª Divisão."],
          ["Início de 1916", "Vai para a frente ocidental, na França."],
          ["1º jul, 7h20", "Uma mina explode sob o reduto alemão de Hawthorn."],
          ["1º jul, 7h30", "A infantaria da 29ª Divisão ataca e é detida."],
          ["1º jul, ≈ 9h15", "O Regimento da Terra Nova sai da trincheira de apoio."],
          ["2 jul", "Só 68 homens respondem à chamada."]
        ]},
        "Os comandantes britânicos esperavam que sete dias de bombardeio destruíssem arame e abrigos alemães. Em muitos pontos da frente do Somme, isso não aconteceu."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Aylmer Hunter-Weston" },
        "Tenente-general, comandava o VIII Corpo, que incluía a 29ª Divisão. O ataque do corpo na margem norte do rio Ancre foi, segundo os historiadores, um dos mais caros fracassos do primeiro dia: mais de 14.000 baixas, segundo Philpott a partir de Edmonds. O diário do comandante-chefe, Douglas Haig, chegou a sugerir, erradamente, que poucos homens do VIII Corpo tinham saído das trincheiras.",
        { h: "Beauvoir De Lisle" },
        "Major-general, comandava a 29ª Divisão. Quando viu foguetes brancos alemães e achou que eram sinais de sucesso britânico, mandou a 88ª Brigada avançar da reserva. Depois da batalha, elogiou a 'valentia treinada e disciplinada' do Regimento da Terra Nova e escreveu que o ataque não foi adiante porque homens mortos não podem avançar mais.",
        { h: "Arthur Hadow e os homens do regimento" },
        "O tenente-coronel Arthur Lovell Hadow comandava o regimento. Entre os mortos havia 14 pares de irmãos, entre eles quatro tenentes da família Ayre, de St. John's.",
        { h: "Os defensores" },
        "O Regimento de Infantaria de Reserva 119, da 26ª Divisão de Reserva, defendia a aldeia. Seus soldados esperaram o bombardeio dentro de abrigos fundos escavados sob a aldeia e, quando a artilharia parou, subiram e atiraram da ruína das trincheiras e da ravina em Y, que os alemães chamavam de Leiling Schlucht."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Pelo lado britânico, a 29ª Divisão atacava com a 86ª e a 87ª Brigadas na frente. A 88ª Brigada, com o Regimento da Terra Nova e o 1º Regimento Essex, ficou na reserva. As fontes divergem sobre quantos homens do regimento atacaram: uma fonte fala em 22 oficiais e 758 praças (780); outra contagem muito repetida, em 801; Veterans Affairs Canada, em cerca de 800.",
        { h: "O terreno" },
        "A aldeia ficava numa encosta atrás de um [[reduto]] alemão, o de Hawthorn, no topo de um espigão. Ao norte, a ravina em Y (a de Leiling) servia de abrigo e de posição de tiro. Entre as trincheiras dos dois lados ficava a [[terra de ninguém]], onde havia [[arame farpado]] que o bombardeio não tinha cortado em todos os pontos.",
        "O regimento esperava na St. John's Road, uma [[trincheira de apoio]] cerca de 200 metros atrás da linha da frente britânica. Depois dela, os homens teriam de atravessar a linha e mais de 500 metros de arame e campo aberto até as trincheiras alemãs. A meio caminho, uma árvore morta e retorcida servia de ponto de referência. Os soldados a chamavam de Danger Tree (árvore do perigo), e foi ali que a artilharia alemã passou a atirar.",
        { h: "A batalha em oito tempos" },
        { formation: true },
        "Primeiro, às 7h20, a [[mina|mina de túnel]] sob o reduto de Hawthorn explodiu, com cerca de 18 toneladas de explosivo (a conta é de 40.000 libras). Ela foi detonada dez minutos antes do ataque, para que os britânicos ocupassem a cratera, mas a explosão só avisou os alemães, e eles tomaram a borda mais distante da cratera antes dos britânicos.",
        "Segundo, às 7h30, as brigadas da frente atacaram e foram detidas pela [[metralhadora]] e pela artilharia. Terceiro, os alemães lançaram foguetes brancos, que os britânicos entenderam como sinais de sucesso. O general De Lisle mandou a 88ª Brigada avançar.",
        "Quarto, por volta das 9h15, o Regimento da Terra Nova e o 1º Essex saíram da trincheira de apoio. Para fugir das [[trincheiras de ligação|trincheira de ligação]], que estavam entupidas, os newfoundlanders cruzaram o campo aberto atrás da linha britânica. Muitos já foram atingidos antes de chegar à linha da frente.",
        "Quinto, os que passaram para a terra de ninguém foram para a Danger Tree. A artilharia e as metralhadoras alemãs varreram o terreno. Sexto, alguns cruzaram a terra de ninguém perto da ravina em Y, mas o arame que ainda estava de pé os segurou, sob fogo.",
        "Sétimo, o ataque parou. Oitavo, na noite e no dia seguinte, o que sobrou do regimento foi contado. Uma contagem muito repetida diz que, de 801 homens, 255 morreram, 386 foram feridos e 91 desapareceram. Outra fonte dá 710 baixas (91%). Todas concordam em um número: 68 homens responderam à chamada em 2 de julho.",
        "O regimento voltou à linha da frente, perto de Auchonvillers, em 14 de julho, com reforços."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "O resultado" },
        "O ataque falhou. O VIII Corpo teve mais de 14.000 baixas, entre elas 5.240 da 29ª Divisão. Em todo o front do Somme, o primeiro dia custou ao exército britânico 57.470 baixas, 19.240 delas mortos. Beaumont-Hamel só caiu em 13 de novembro de 1916, na batalha do Ancre, quando a 51ª Divisão (Highland) atacou no nevoeiro, com cooperação muito melhor entre infantaria e artilharia.",
        { h: "O regimento depois" },
        "O regimento se reconstruiu e lutou em Gueudecourt, em outubro de 1916, e em Monchy-le-Preux, em 23 de abril de 1917, onde perdeu 485 homens num dia, mas segurou um ataque alemão. O rei lhe concedeu o título de 'Royal', o único dado a um regimento britânico durante a guerra. As fontes divergem sobre a data: dezembro de 1917 ou 25 de janeiro de 1918. Mais de 6.200 newfoundlanders serviram na guerra, e mais de 1.300 morreram.",
        { h: "A memória" },
        "A Terra Nova comprou o terreno em 1921, por iniciativa do padre Thomas Nangle, que servira no regimento. Em 1925, o conde Haig inaugurou o memorial do caribu, o emblema do regimento, feito por Basil Gotto. O monumento traz os nomes de mais de 800 homens sem túmulo. O parque, com trincheiras preservadas, é Sítio Histórico Nacional do Canadá, e a UNESCO o reconheceu como Patrimônio Mundial em 2023. 1º de julho é o Dia da Memória em Terra Nova e Labrador.",
        { note: "A Terra Nova só se juntou ao Canadá em 1949. Antes, em 1934, a ilha tinha entregue o governo a uma comissão nomeada, em meio a uma crise financeira. Alguns historiadores incluem a dívida de guerra entre as causas dessa crise, mas o peso dela é debatido." },
        { note: "O 1º de julho de 1916 é o dia em que o exército britânico mais perdeu: cerca de 57.000 baixas. Entre os mortos do Regimento da Terra Nova havia 14 pares de irmãos." }
      ]}
    ]
  },

  vimy: {
    war: "Primeira Guerra Mundial, batalha de Arras (1917)",
    hook: "Quatro divisões canadenses atacaram juntas pela primeira vez e tomaram uma crista numa manhã de neve. O que isso significa para o Canadá ainda se discute.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A crista de Vimy é uma elevação de cerca de sete quilômetros, no norte da França, que domina a planície de Douai. Os alemães a ocupavam desde 1914. Franceses e britânicos tinham atacado ali sem conseguir manter a posse dela, e a região virou um cemitério.",
        "Em 1917, os Aliados planejaram duas ofensivas ligadas: a britânica, em Arras, e a francesa de Nivelle, no Aisne. O ataque em Vimy fazia parte da primeira. Ele devia proteger o flanco do Primeiro e do Terceiro Exércitos britânicos ao sul, expostos ao fogo vindo da crista, e atrair as reservas alemãs para longe do Aisne.",
        { h: "O caminho até a crista" },
        { timeline: [
          ["Janeiro de 1917", "Os oficiais canadenses estudam a experiência francesa em Verdun."],
          ["5 mar", "O general Horne aprova o plano."],
          ["Nos 4 meses antes", "O Corpo Canadense faz 55 [[incursões de trincheira|incursão de trincheira]]."],
          ["2 abr", "Começa a semana de bombardeio, que os alemães chamaram de 'semana do sofrimento'."],
          ["9 abr, 5h30", "Ataque, na segunda-feira de Páscoa. Estava marcado para 8 de abril, mas foi adiado 24 horas a pedido dos franceses."],
          ["12 abr", "A 4ª Divisão toma a última posição, a colina Pimple."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Julian Byng" },
        "General britânico que comandava o Corpo Canadense. O plano do corpo foi aprovado em março pelo general Horne, comandante do Primeiro Exército. Foi o primeiro ataque em que o corpo lutou como unidade única.",
        { h: "Arthur Currie" },
        "Canadense, comandava a 1ª Divisão. Mais tarde, em 1917, assumiu o comando do corpo. É lembrado pela atenção ao planejamento e ao uso da artilharia.",
        { h: "O lado alemão" },
        "O 6º Exército de Ludwig von Falkenhausen tinha cerca de vinte divisões. A crista era defendida pelo Grupo Vimy, montado em torno do I Corpo Bávaro de Reserva, de Karl von Fasbender. Os alemães tinham adotado a [[defesa em profundidade]], mas em Vimy pouco da nova doutrina tinha sido posto em prática, e as companhias estavam com cerca de 150 homens, abaixo do efetivo. Depois da batalha, uma comissão alemã culpou o quartel-general do 6º Exército por ter ignorado os avisos, e Falkenhausen perdeu o comando."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças e o preparo" },
        "O Corpo Canadense reunia quatro divisões canadenses e a 5ª Divisão britânica, mais tropas de artilharia, engenharia e trabalho, num total de cerca de 170.000 homens, dos quais 97.184 canadenses. Tinha cerca de três vezes a artilharia normal de um [[corpo de exército]] e 1,6 milhão de granadas reservadas. Na semana anterior, a [[contrabateria]] gastou 125.900 granadas. A aviação britânica pôs 25 esquadrões, com 365 aviões, e perdeu 131 aeronaves só na primeira semana de abril.",
        "Sapadores cavaram doze [[galerias de acesso|galeria de acesso]], com até 1,2 km, a cerca de 10 metros de profundidade, para a infantaria chegar à frente sem ser vista. Túneis de minas foram escavados sob as posições alemãs. As tropas ensaiaram sobre maquetes do terreno e receberam mais de 40.000 mapas. A [[barragem rolante]] avançaria em degraus de uns 100 metros.",
        { h: "O terreno" },
        "Quatro [[linhas de objetivo]] foram marcadas no mapa: preta, vermelha, azul e marrom. A 1ª Divisão atacava no sul, onde a distância era maior, a 2ª tomaria o vilarejo de Thélus, a 3ª atacaria La Folie, no centro, e a 4ª ficava no norte, incluindo a Colina 145, o ponto mais alto, e depois a Pimple. Do lado alemão, a 79ª Divisão de Reserva segurava o centro, inclusive a Colina 145, e a 16ª Divisão Bávara, o norte. As reservas alemãs estavam a cerca de 24 km, longe demais para chegar a tempo.",
        { h: "A batalha em nove tempos" },
        { formation: true },
        "Primeiro, às 5h30 do dia 9 de abril, a barragem começou. Cerca de 30 segundos depois, as minas sob a terra de ninguém explodiram. O tempo, frio, virou neve e granizo, soprando no rosto dos defensores.",
        "Segundo, até 6h25, as divisões 1ª, 2ª e 3ª chegaram à linha preta. Terceiro, entre 7h00 e 7h30, chegaram à vermelha. Na 3ª Divisão, às 9h, soube-se que seu flanco esquerdo estava exposto. Quarto, a 4ª Divisão, no norte, tinha sido parada quase de imediato: as [[metralhadoras|metralhadora]] estavam em trincheiras que o bombardeio não destruíra, e ela só concluiu o primeiro objetivo horas depois.",
        "Quinto, ataques de reserva empurraram os alemães para fora da parte sudoeste da Colina 145, quando eles ficaram sem munição. Por volta das 18h, os alemães contra-atacaram e tiraram os canadenses das ruínas do vilarejo de Vimy, mas não retomaram a terceira linha ao sul dele.",
        "Sexto, em 10 de abril, brigadas descansadas chegaram até as 9h30. Thélus e a linha azul, com a Colina 135, caíram por volta das 11h. A barragem parou por uma hora e meia para trazer as metralhadoras para a frente. A linha marrom foi tomada por volta das 14h, mas o avanço apoiado por tanques rumo a Farbus foi parado pelo fogo alemão.",
        "Sétimo, por volta das 15h15, a 4ª Divisão tomou por pouco tempo a metade norte da Colina 145, e um contra-ataque a retomou. Oitavo, com o saliente contornado, os alemães se retiraram da crista para a linha Oppy–Méricourt.",
        "Nono, em 12 de abril, depois de uma tentativa que falhou de madrugada e de uma barragem de projéteis de gás sobre Givenchy-en-Gohelle, a 10ª Brigada tomou a Pimple inteira por volta das 18h, ajudada pela neve e pelo vento."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "O resultado" },
        "Os canadenses tiveram 10.602 baixas, 3.598 mortos e 7.004 feridos. As baixas alemãs são incertas: as primeiras estimativas falavam em cerca de 20.000. O serviço histórico alemão deu 79.418 baixas ao 6º Exército em abril e maio, incluindo 22.792 desaparecidos, e o príncipe herdeiro Rupprecht falou em 85.000, mas esses números cobrem toda a frente e um período maior que o da batalha. Cerca de 4.000 alemães foram presos. Os alemães nunca tentaram retomar a crista, nem em 1918.",
        "Os próprios alemães não viam Vimy como uma derrota decisiva: não houve ruptura da frente. A batalha de Arras continuou, e a ofensiva francesa de Nivelle, a que Vimy devia servir, falhou. Os historiadores atribuem o sucesso canadense ao planejamento, à artilharia, ao treino e à falha alemã de aplicar a própria doutrina nova.",
        { h: "Vimy e a identidade do Canadá" },
        "Vimy foi a primeira vez em que as quatro divisões canadenses lutaram juntas, e virou símbolo nacional. Uma das frases mais citadas é a atribuída ao brigadeiro-general Alexander Ross, que esteve em Vimy: 'nesses minutos testemunhei o nascimento de uma nação'. Não há acordo sobre quando ele a disse. O site Valour Canada a data de 1967, no cinquentenário da batalha e no centenário da Confederação, enquanto outros a situam anos depois da guerra.",
        "Os que defendem a ideia lembram que foi a primeira vez em que as quatro divisões canadenses lutaram juntas e que o planejamento foi cuidadoso. Os críticos respondem de várias formas. O historiador Jack Granatstein diz, segundo o Valour Canada, que Vimy não ganhou a guerra e não mudou nada, e acha curioso que ela tenha permanecido como referência. Ian McKay e Jamie Swift, no livro The Vimy Trap, sustentam que a tese do 'nascimento de uma nação' é muito contestada e surgiu quando a maioria dos participantes já tinha morrido. Outros lembram que a França e a Grã-Bretanha já tinham lutado ali, que uma divisão britânica atacou ao lado, que o corpo estava sob o comando britânico e que a barragem rolante, por exemplo, já era conhecida e tinha sido usada antes, no Somme.",
        { h: "O memorial" },
        "A França deu ao Canadá o uso perpétuo do terreno em 1922. O arquiteto e escultor torontino Walter Allward projetou o Memorial Nacional do Canadá em Vimy, que ele chamou de 'sermão contra a futilidade da guerra'. Levou onze anos para ser construído e custou 1,5 milhão de dólares. Foi inaugurado em 26 de julho de 1936 por Eduardo VIII, com o presidente francês Albert Lebrun, diante de mais de 50.000 pessoas (a conta do Museu da Guerra do Canadá é de 100.000). O primeiro-ministro Mackenzie King não foi. O memorial foi restaurado em 2004, a rainha Elizabeth II o reinaugurou em 2007, e em 9 de abril de 2017, no centenário, estiveram lá o primeiro-ministro Justin Trudeau, o príncipe de Gales e o presidente François Hollande.",
        { note: "Quase todo o terreno do parque continua fechado ao público, por causa de túneis, crateras e munição que não explodiu." }
      ]}
    ]
  },

  dieppe: {
    war: "Segunda Guerra Mundial, frente ocidental (1942)",
    hook: "Um ataque de um dia contra um porto francês custou ao Canadá quase 3.400 homens, e ainda se discute o que o Dia D aprendeu com ele.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1942, a Alemanha lutava na União Soviética, e Stalin pedia aos aliados ocidentais que abrissem uma segunda frente na Europa. A Grã-Bretanha ainda não podia invadir a França. Mas podia testar, com uma incursão, como seria desembarcar contra defesas alemãs, e mostrar aos soviéticos e ao público que o esforço continuava.",
        "Os objetivos do ataque a Dieppe, segundo as fontes, eram testar a tomada de um porto num [[desembarque]] com oposição, colher informações, destruir defesas costeiras, instalações do porto e prédios importantes, levantar o moral, apoiar os soviéticos e atrair a Luftwaffe para uma batalha em condições favoráveis à RAF. Os canadenses, que estavam na Inglaterra e ainda não tinham lutado na Europa, foram escolhidos para a maior parte da tropa.",
        { h: "Do Rutter ao Jubilee" },
        { timeline: [
          ["4 mar 1942", "Louis Mountbatten se torna chefe das Operações Combinadas."],
          ["5 jul", "O bombardeio aéreo pesado sobre Dieppe é cancelado."],
          ["7 jul", "A Operação Rutter, o primeiro plano, é cancelada depois que bombardeiros alemães atingem dois navios de assalto."],
          ["Agosto", "Mountbatten reativa o plano como Operação Jubilee."],
          ["19 ago, 3h48", "Os navios aliados esbarram num comboio alemão."],
          ["19 ago, ≈ 4h50", "Começam os desembarques."]
        ]},
        "O plano de Jubilee era quase o mesmo do Rutter, mas sem o bombardeio pesado. Arthur Harris, do Comando de Bombardeiros, era contra o ataque aéreo previsto. O Primeiro Lorde do Mar, Dudley Pound, não quis arriscar navios maiores em águas sem superioridade aérea, e o apoio de fogo naval ficou com seis contratorpedeiros da classe Hunt."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Louis Mountbatten" },
        "Chefe das [[operações combinadas]] desde março de 1942, era carismático e tinha pouca experiência de combate. Pressionou para relançar a operação depois do cancelamento do Rutter e depois sustentou que a incursão tinha valido a pena. Churchill apoiou o ataque e revisou o plano com Mountbatten.",
        { h: "Os outros nomes" },
        "O capitão John Hughes-Hallett comandava a parte naval. O general John Roberts, a 2ª Divisão canadense, e os generais Andrew McNaughton e Harry Crerar apoiavam a participação canadense. Montgomery recomendou cancelar o plano. Entre os comandantes de [[comandos]], Lord Lovat chefiava o nº 4, e John Durnford-Slater, o nº 3. O tenente-coronel Charles Merritt, dos South Saskatchewan, o tenente-coronel Dollard Ménard, dos Fusiliers Mont-Royal, e o capelão John Weir Foote, dos Royal Hamilton Light Infantry, aparecem de novo mais adiante. Do lado alemão, a 302ª Divisão de Infantaria era comandada pelo general Konrad Haase."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Desembarcaram 6.086 homens, cerca de 5.000 canadenses. A 2ª Divisão canadense mandou o Royal Regiment of Canada, o Royal Hamilton Light Infantry, o Essex Scottish, os Fusiliers Mont-Royal, o South Saskatchewan Regiment e o Queen's Own Cameron Highlanders. O Calgary Regiment trouxe os [[tanques Churchill|tanque churchill]]. Vieram também os comandos britânicos nº 3, 4, 10 e 40, o A Commando dos Royal Marines, 50 soldados americanos dos Rangers e 15 comandos franceses. A força naval somava 237 navios e lanchas, com cobertura de 56 esquadrões de caça. O número de tanques é incerto: o texto de uma fonte fala em 58 planejados, e outra em 29.",
        "Do lado alemão, a 302ª Divisão tinha entre 1.500 homens na região (uma fonte) e cerca de 6.000 (o historiador Tim Saunders). A Organização Todt tinha construído muitas fortificações, entre elas artilharia pesada em túneis nos penhascos, que os planejadores britânicos quase não conheciam. Os alemães estavam em alerta, por causa de agentes duplos e do aumento do tráfego de rádio e de navios.",
        { h: "O terreno e os erros de informação" },
        "Dieppe fica numa baía de [[paredão]] e praia de [[seixos]], entre dois penhascos altos. Os planejadores confundiram a divisão alemã, subestimaram sua força, erraram a posição do quartel-general e não perceberam boa parte das [[baterias costeiras|bateria costeira]]. A inclinação das praias foi avaliada, em parte, por fotografias de férias. Muitos veteranos acreditavam que a artilharia dos penhascos foi o que mais pesou para deter o ataque.",
        { h: "A batalha em dez tempos" },
        { formation: true },
        "Primeiro, de madrugada, a frota e os cinco grupos se aproximaram no escuro. Segundo, às 3h48, um comboio alemão esbarrou nas lanchas do nº 3 Commando, e o alarme soou. O radar alemão em Pourville tinha identificado colunas de navios parados às 3h45, mas o comando naval só acreditou no aviso às 4h35.",
        "Terceiro, às 4h50, o nº 3 Commando tentou desembarcar em Yellow (Berneval), foi quase todo rechaçado, e seus homens se renderam. O major Peter Young desembarcou com 18 homens, mas não conseguiu destruir a bateria. No ponto Orange (Varengeville), Lord Lovat atacou e silenciou a bateria Hess, o único sucesso da operação.",
        "Quarto, às 4h52, o South Saskatchewan chegou sem ser notado em Green (Pourville), mas a maior parte desembarcou a oeste do rio Scie, e teve de cruzar a única ponte para entrar em Pourville. Metralhadoras e canhões antitanque a detiveram ali. O tenente-coronel Merritt atravessou várias vezes a ponte, de pé, para mostrar que era possível, e recebeu a Cruz Vitória.",
        "Quinto, em Blue (Puys), o Royal Regiment of Canada e três pelotões do Black Watch desembarcaram uns 20 minutos atrasados, quando a [[cortina de fumaça]] já tinha se dissipado e a escuridão se fora. Presos junto ao paredão e varridos por um [[bunker]], tiveram, de 556 homens, cerca de 200 mortos e 264 presos.",
        "Sexto, na praia principal (Red e White), o Essex Scottish e o Royal Hamilton atacaram de frente. Quatro contratorpedeiros atiraram, e cinco esquadrões de Hurricanes lançaram fumaça. As fontes divergem sobre a hora do ataque principal, mas ele veio por volta das 5h20. Sétimo, os tanques chegaram tarde. Dos 29 que tentaram desembarcar, dois afundaram e doze atolaram nos seixos. Quinze passaram o paredão, mas nenhum voltou à Inglaterra.",
        "Oitavo, em Pourville, os Camerons chegaram mais longe do que qualquer outra tropa naquele dia, mas foram forçados a recuar. Só 341 homens chegaram às lanchas. O resto se rendeu. Nono, às 7h, os Fusiliers Mont-Royal, do tenente-coronel Ménard, partiram em 26 lanchas e foram destruídos por tiro pesado, com poucos homens chegando à cidade. Os Royal Marines foram mandados em apoio, e o tenente-coronel Phillipps os mandou voltar e foi morto momentos depois.",
        "Décimo, a retirada das praias principais começou por volta das 9h40 e acabou por volta das 14h. O capelão Foote escolheu ser preso para cuidar dos prisioneiros, e recebeu a Cruz Vitória."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Os números" },
        "Dos cerca de 5.000 canadenses, 3.367 foram mortos, feridos ou presos: 68%. As contagens dão 907 mortos, 2.460 feridos e entre 1.874 e 1.946 prisioneiros. Alguns citam só os mortos, cerca de 18%, o que alguns historiadores criticam como uma medida seletiva. O Essex Scottish voltou com 52 de 553 homens, e o Royal Regiment of Canada teve 94% de baixas. Os comandos perderam 247. A marinha perdeu um contratorpedeiro, o HMS Berkeley, e 33 lanchas, e teve cerca de 550 mortos e feridos. A RAF perdeu 106 aeronaves (outra soma, por tipo, dá 100). Do lado alemão, a conta é de cerca de 600 baixas.",
        { h: "Dieppe ensinou o Dia D?" },
        "Churchill e Mountbatten disseram que as lições compensaram o custo. Mountbatten chegou a dizer que a batalha da Normandia foi ganha nas praias de Dieppe, mas essa frase não tem fonte segura. Entre as lições citadas estão o bombardeio prévio, o valor da surpresa, a informação sobre as fortificações, o perigo de atacar um porto defendido de frente e a necessidade de lanchas de retirada. Também se atribui a Dieppe o impulso para os [[portos Mulberry|porto mulberry]], para os [[blindados de Hobart]], para estudos da geologia das praias e para uma aviação tática mais integrada ao exército.",
        "Os críticos respondem em quatro pontos. Primeiro, o bombardeio prévio já era prática comum dos Aliados. Segundo, as operações Torch, Husky e Avalanche, e a batalha de Tarawa, ensinaram mais ao Dia D. Terceiro, a ideia dos Mulberry é atribuída por alguns a Hughes-Hallett, mas ele próprio disse que Churchill a propusera meses antes de Dieppe. Quarto, o capitão Patrick Porteous, que recebeu a Cruz Vitória por Dieppe, chamou a frase de Mountbatten de absurdo e disse que se aprenderia o mesmo numa praia da Inglaterra.",
        { h: "As consequências" },
        "Os alemães encararam Dieppe como uma lição e investiram em defesas costeiras. O plano de ataque de uma brigada canadense, que o brigadeiro Southam tentou enterrar e os alemães capturaram, mandava acorrentar prisioneiros. Em 8 de outubro de 1942, os alemães amarraram prisioneiros britânicos e canadenses em represália, e houve contrarrepresálias. Em outubro, Hitler emitiu a [[ordem de comandos]], que citava Dieppe e a ilha de Sark como justificativa.",
        { note: "O historiador David O'Keefe defende que Dieppe foi também um disfarce para capturar uma máquina Enigma de quatro rotores. Eric Grove respondeu que a tese reflete mais o fascínio atual por segredos de inteligência do que provas. Leah Garrett achou um relatório sobre uma missão do X-Troop, que fracassou. Sobre os alemães terem sido avisados, Roskill, em 1964, achava que os avisos eram coincidência, e James Shelley, em 2023, não achou prova de aviso específico." },
        { note: "Os historiadores também discordam sobre se Mountbatten agiu sem autorização ao relançar a operação, já que os Chefes de Estado-Maior tinham aprovado o plano original, o Rutter. A pergunta de fundo é a mesma desde 1942: o que se ganhou, e se o preço era necessário." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  beaumonthamel: {
    terrain: [
      { t: "hill", x: 72, y: 31, rx: 15, ry: 5, l: "Espigão de Hawthorn" },
      { t: "note", x: 12, y: 33, l: "Linha alemã" },
      { t: "note", x: 12, y: 47, l: "Linha britânica" },
      { t: "note", x: 12, y: 55, l: "St. John's Road" },
      { t: "note", x: 47, y: 41, l: "Danger Tree" },
      { t: "note", x: 88, y: 5, l: "Leste ↑" }
    ],
    units: [
      { id: "b86", s: "a", k: "inf", w: 16, h: 3, l: "86ª Brigada" },
      { id: "b87", s: "a", k: "inf", w: 16, h: 3, l: "87ª Brigada" },
      { id: "nf", s: "a", k: "inf", w: 12, h: 3, l: "Regimento da Terra Nova" },
      { id: "ess", s: "a", k: "inf", w: 10, h: 3, l: "1º Essex" },
      { id: "gRed", s: "b", k: "camp", w: 12, h: 4, l: "Reduto de Hawthorn" },
      { id: "gLine", s: "b", k: "inf", w: 22, h: 3, l: "Infantaria alemã (RIR 119)" },
      { id: "gRav", s: "b", k: "camp", w: 12, h: 4, l: "Ravina em Y" },
      { id: "gVil", s: "b", k: "inf", w: 34, h: 4, l: "Reservas e abrigos sob a aldeia" }
    ],
    steps: [
      { t: "Esquema, fora de escala. A 86ª e a 87ª Brigadas estão na linha da frente. O Regimento da Terra Nova e o 1º Essex esperam atrás, na St. John's Road. Os alemães aguardam em abrigos fundos.",
        p: { b86: [72, 47], b87: [40, 47], nf: [50, 55], ess: [68, 55], gRed: [74, 30], gLine: [48, 34], gRav: [30, 26], gVil: [50, 14] } },
      { t: "7h20: a mina sob o reduto de Hawthorn explode. Isso só avisa os alemães, que tomam a borda mais distante da cratera antes dos britânicos.",
        p: { b86: [72, 43], gRed: [74, 31] } },
      { t: "7h30: as brigadas da frente atacam e são detidas pelas metralhadoras e pela artilharia.",
        p: { b86: [72, 40], b87: [40, 40] }, x: ["b86", "b87"] },
      { t: "Os alemães lançam foguetes brancos, que os britânicos entendem como sinais de sucesso. O general De Lisle manda a 88ª Brigada avançar da reserva.",
        p: { nf: [50, 54], ess: [68, 54] } },
      { t: "Por volta das 9h15, o Regimento da Terra Nova e o 1º Essex saem da St. John's Road. Para evitar as trincheiras de ligação entupidas, atravessam campo aberto atrás da linha britânica. Muitos são atingidos ali.",
        p: { nf: [50, 47], ess: [68, 47] } },
      { t: "Os que passam entram na terra de ninguém e se concentram na Danger Tree. A artilharia e as metralhadoras alemãs varrem o terreno.",
        p: { nf: [48, 41], ess: [66, 41] } },
      { t: "Alguns chegam perto da ravina em Y, mas o arame ainda de pé os prende sob o fogo.",
        p: { nf: [42, 37], ess: [66, 40] }, x: ["ess"] },
      { t: "O ataque pára. No dia seguinte, só 68 homens do regimento respondem à chamada.",
        p: { nf: [42, 37] }, x: ["b86", "b87", "ess", "nf"] }
    ]
  },

  vimy: {
    terrain: [
      { t: "hill", x: 62, y: 34, rx: 8, ry: 31, l: "Crista de Vimy" },
      { t: "note", x: 70, y: 10, l: "Colina 145" },
      { t: "note", x: 70, y: 3, l: "Pimple" },
      { t: "note", x: 70, y: 38, l: "Thélus" },
      { t: "note", x: 88, y: 66, l: "Norte ↑" }
    ],
    units: [
      { id: "d5", s: "a", k: "inf", w: 6, h: 7, l: "5ª Div. (brit.)" },
      { id: "d1", s: "a", k: "inf", w: 6, h: 10, l: "1ª Div." },
      { id: "d2", s: "a", k: "inf", w: 6, h: 10, l: "2ª Div." },
      { id: "d3", s: "a", k: "inf", w: 6, h: 10, l: "3ª Div." },
      { id: "d4", s: "a", k: "inf", w: 6, h: 10, l: "4ª Div." },
      { id: "gS", s: "b", k: "inf", w: 6, h: 10, l: "Div. alemã (sul)" },
      { id: "g79", s: "b", k: "inf", w: 6, h: 10, l: "79ª Div. de Reserva" },
      { id: "g16", s: "b", k: "inf", w: 6, h: 10, l: "16ª Div. Bávara" },
      { id: "gRes", s: "b", k: "inf", w: 6, h: 14, l: "Reservas (≈ 24 km)" }
    ],
    steps: [
      { t: "Esquema, fora de escala. Quatro divisões canadenses e a 5ª britânica, lado a lado, de sul a norte. Do outro lado da crista ficam três divisões alemãs, e as reservas estão longe.",
        p: { d5: [14, 62], d1: [14, 52], d2: [14, 40], d3: [14, 28], d4: [14, 15], gS: [72, 52], g79: [72, 28], g16: [72, 13], gRes: [94, 34] } },
      { t: "9 de abril, 5h30: a barragem começa e, meio minuto depois, as minas explodem. Neva e venta no rosto dos alemães. As quatro divisões saem juntas.",
        p: { d5: [22, 62], d1: [22, 52], d2: [22, 40], d3: [22, 28], d4: [22, 15] } },
      { t: "Até 6h25, a 1ª, a 2ª e a 3ª chegam à linha preta. A 4ª, no norte, é parada por metralhadoras em trincheiras intactas.",
        p: { d1: [36, 52], d2: [36, 40], d3: [36, 28], d4: [26, 15], d5: [32, 62] } },
      { t: "Entre 7h e 7h30, as três divisões do sul e do centro chegam à linha vermelha. A 3ª descobre, às 9h, que seu flanco esquerdo está exposto.",
        p: { d1: [48, 52], d2: [48, 40], d3: [50, 28], d4: [30, 15], g79: [74, 28] } },
      { t: "Reservas da 4ª Divisão empurram os alemães da parte sudoeste da Colina 145, quando eles ficam sem munição. Por volta das 18h, um contra-ataque alemão tira os canadenses do vilarejo de Vimy.",
        p: { d4: [42, 14], g16: [76, 13] } },
      { t: "10 de abril: brigadas descansadas chegam. Thélus e a linha azul caem por volta das 11h. A barragem pára por uma hora e meia, para trazer as metralhadoras.",
        p: { d1: [58, 52], d2: [62, 40], d3: [60, 28], d5: [40, 62] } },
      { t: "A linha marrom é tomada por volta das 14h, mas o avanço com tanques para Farbus é detido. Às 15h15, a 4ª Divisão toma por pouco tempo a metade norte da Colina 145 e perde-a num contra-ataque.",
        p: { d1: [68, 52], d2: [68, 40], d3: [66, 28], d4: [58, 13] } },
      { t: "Com o saliente contornado, os alemães se retiram da crista para a linha Oppy–Méricourt.",
        p: { gS: [88, 52], g79: [88, 28], g16: [88, 13] }, x: ["gS", "g79", "g16"] },
      { t: "12 de abril: depois de uma tentativa que falha de madrugada e de uma barragem de projéteis de gás, a 10ª Brigada toma a Pimple inteira por volta das 18h, ajudada pela neve e pelo vento.",
        p: { d4: [64, 5] } }
    ]
  },

  dieppe: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 100, h: 21, l: "Canal da Mancha" },
      { t: "note", x: 10, y: 23, l: "Orange" },
      { t: "note", x: 28, y: 23, l: "Green" },
      { t: "note", x: 47, y: 23, l: "Red e White" },
      { t: "note", x: 64, y: 23, l: "Blue" },
      { t: "note", x: 90, y: 23, l: "Yellow" }
    ],
    units: [
      { id: "fleet", s: "a", k: "ship", w: 14, h: 2.5, l: "Contratorpedeiros" },
      { id: "orng", s: "a", k: "inf", w: 10, h: 3, l: "nº 4 Commando" },
      { id: "grn", s: "a", k: "inf", w: 12, h: 3, l: "S. Saskatchewan e Camerons" },
      { id: "main", s: "a", k: "inf", w: 12, h: 3, l: "Essex Scottish e RHLI" },
      { id: "blue", s: "a", k: "inf", w: 12, h: 3, l: "Royal Regt e Black Watch" },
      { id: "yell", s: "a", k: "inf", w: 10, h: 3, l: "nº 3 Commando" },
      { id: "tnk", s: "a", k: "tank", w: 10, h: 3, l: "Tanques (Calgary Regt)" },
      { id: "fmr", s: "a", k: "inf", w: 12, h: 3, l: "Fusiliers Mont-Royal" },
      { id: "mar", s: "a", k: "inf", w: 9, h: 3, l: "Royal Marines" },
      { id: "conv", s: "b", k: "ship", w: 8, h: 2.5, l: "Comboio alemão" },
      { id: "hess", s: "b", k: "camp", w: 9, h: 3, l: "Bateria Hess" },
      { id: "wHead", s: "b", k: "camp", w: 10, h: 3, l: "Canhões do penhasco oeste" },
      { id: "eHead", s: "b", k: "camp", w: 10, h: 3, l: "Canhões do penhasco leste" },
      { id: "pBun", s: "b", k: "camp", w: 8, h: 3, l: "Bunker de Puys" },
      { id: "yBat", s: "b", k: "camp", w: 9, h: 3, l: "Bateria de Berneval" },
      { id: "town", s: "b", k: "inf", w: 16, h: 4, l: "Guarnição na cidade (302ª Div.)" }
    ],
    steps: [
      { t: "Esquema, fora de escala. De madrugada, a força naval chega no escuro. Cinco grupos se dirigem às praias: dois de comandos nas pontas, a infantaria canadense no centro.",
        p: { fleet: [50, 4], orng: [10, 12], grn: [28, 12], main: [47, 12], blue: [64, 12], yell: [90, 12], tnk: [52, 17], fmr: [36, 17], mar: [76, 17], conv: [96, 6], hess: [10, 34], wHead: [38, 32], eHead: [55, 31], pBun: [66, 31], yBat: [90, 34], town: [47, 40] } },
      { t: "3h48: um comboio alemão esbarra nas lanchas do nº 3 Commando, e o alarme soa. O radar alemão em Pourville tinha visto os navios às 3h45, mas só às 4h35 o comando naval acredita no aviso.",
        p: { conv: [88, 9], yell: [88, 13] } },
      { t: "4h50: o nº 3 Commando é quase todo rechaçado em Yellow. Em Orange, Lord Lovat desembarca e silencia a bateria Hess, o único sucesso do dia.",
        p: { yell: [90, 25], orng: [10, 27], hess: [10, 36] }, x: ["yell", "hess"] },
      { t: "4h52: o South Saskatchewan chega sem ser visto a Green, mas a maior parte desembarca a oeste do rio Scie e fica presa na única ponte de Pourville. O tenente-coronel Merritt cruza a ponte várias vezes, de pé, para mostrar que dá.",
        p: { grn: [28, 27] } },
      { t: "Em Blue (Puys), o Royal Regiment desembarca uns 20 minutos atrasado, sem fumaça nem escuridão. Preso junto ao paredão, perde de 556 homens cerca de 200 mortos e 264 presos.",
        p: { blue: [64, 27] }, x: ["blue"] },
      { t: "Por volta das 5h20, o Essex Scottish e o Royal Hamilton atacam de frente a praia principal, cobertos por quatro contratorpedeiros e por fumaça.",
        p: { main: [47, 27] } },
      { t: "Os tanques chegam atrasados. Dos 29 que tentam, dois afundam e doze atolam nos seixos. Quinze passam o paredão, mas nenhum volta.",
        p: { tnk: [50, 29] }, x: ["tnk", "main"] },
      { t: "Em Pourville, os Camerons chegam mais longe do que qualquer outra tropa no dia, mas são forçados a recuar. Só 341 homens chegam às lanchas.",
        p: { grn: [30, 37] }, x: ["grn"] },
      { t: "Às 7h, os Fusiliers Mont-Royal partem em 26 lanchas e são destruídos pelo tiro. Os Royal Marines, mandados em apoio, voltam atrás por ordem do tenente-coronel Phillipps, que morre pouco depois.",
        p: { fmr: [44, 26], mar: [70, 13] }, x: ["fmr"] },
      { t: "A retirada das praias principais começa por volta das 9h40 e acaba por volta das 14h. Os navios levam os sobreviventes de volta à Inglaterra.",
        p: { fleet: [50, 10], orng: [10, 14], mar: [70, 9] } }
    ]
  }
});
