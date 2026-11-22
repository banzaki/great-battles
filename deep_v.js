// batch v: yorktown, valmy, piramides, copenhague, assaye, trafalgar
Object.assign(GLOSSARY, {
  "navio de linha": "O grande navio de guerra da era das velas, de madeira, com dois ou três conveses de canhões (de 64 a mais de 100 peças). Duas frotas de navios de linha se enfrentavam em fila, lado a lado.",
  "linha de batalha": "Formação em que os navios seguem em fila, um atrás do outro, para que todos atirem ao mesmo tempo com os canhões de um dos lados. Foi a tática naval padrão por mais de 150 anos.",
  "sotavento": "O lado para onde o vento sopra, o oposto de barlavento. Quem está a sotavento está 'embaixo' do vento em relação ao outro.",
  "fogo em enfiada": "Tiro dado no sentido do comprimento de um navio, pela popa ou pela proa. A bala atravessa o navio inteiro, e quem atira não leva resposta, porque os canhões do inimigo apontam para os lados.",
  "carronada": "Canhão curto e pesado, de pouco alcance e efeito terrível de perto. Atirava balas grandes ou metralha contra a tripulação no convés.",
  "fragata": "Navio de guerra de velas, menor e mais rápido que o navio de linha. Servia para explorar, levar mensagens e acompanhar a frota.",
  "bateria flutuante": "Casco ancorado e carregado de canhões, usado para defender um porto. Não anda, mas é uma plataforma de tiro difícil de afundar.",
  "baioneta": "Lâmina presa na ponta do mosquete ou do fuzil, que transforma a arma numa lança para o combate corpo a corpo.",
  "vau": "Trecho raso de um rio, onde dá para atravessar a pé ou a cavalo.",
  "trincheira": "Vala cavada no chão, com a terra amontoada na frente, que protege os soldados do fogo inimigo.",
  "paralela": "No cerco clássico, uma trincheira longa cavada paralelamente às defesas do inimigo. O sitiante cava a primeira a uma distância segura e depois outra mais perto, e instala canhões em cada uma.",
  "abatis": "Barreira de troncos e galhos cortados, com as pontas afiadas viradas para fora, posta diante de uma fortificação para atrasar quem ataca.",
  "cipaios": "Soldados indianos a serviço de exércitos europeus, armados e treinados à moda europeia, com oficiais britânicos. A maior parte do exército da Companhia das Índias Orientais era de cipaios.",
  "maratas": "Povo e confederação de chefes guerreiros do centro-oeste da Índia, que dominaram boa parte do subcontinente no século XVIII, depois do declínio do Império Mogol.",
  "pindaris": "Cavaleiros irregulares do centro da Índia, que viviam do saque e serviam aos chefes maratas.",
  "peshwa": "Título do primeiro-ministro dos maratas, que na prática virou o governante hereditário da confederação. Em 1803 era Baji Rao II.",
  "companhia das índias orientais": "Empresa comercial britânica que, com exército próprio, passou a governar boa parte da Índia. Era uma empresa e um Estado ao mesmo tempo.",
  "liga da neutralidade armada": "Aliança de países do norte da Europa (Rússia, Dinamarca-Noruega, Suécia e Prússia) para proteger o comércio dos neutros contra as buscas e os bloqueios da marinha britânica.",
  "bloqueio naval": "Cercar os portos de um país com navios de guerra para impedir que navios entrem ou saiam.",
  "armistício": "Acordo para parar de lutar por um tempo, enquanto se negocia a paz.",
  "convenção nacional": "A assembleia eleita que governou a França de setembro de 1792 a 1795. Foi ela que aboliu a monarquia e proclamou a República.",
  "primeira coalizão": "A aliança de monarquias europeias (Áustria, Prússia e, depois, Grã-Bretanha e outras) contra a França revolucionária, a partir de 1792.",
  "emigrados": "Nobres franceses que fugiram da Revolução e se juntaram a exércitos estrangeiros para tentar restaurar o rei.",
  "felás": "Camponeses do Egito. Na batalha, muitos foram recrutados à força como infantaria, sem treino militar de verdade.",
  "milícia": "Cidadãos armados que servem por períodos curtos, sem a carreira nem o treino dos soldados profissionais.",
  "hessianos": "Soldados alemães, em geral do principado de Hesse, alugados por seus príncipes ao governo britânico para lutar na América.",
  "beys": "Chefes mamelucos do Egito. Eram os verdadeiros governantes do país, apesar de o sultão otomano ser o senhor nominal."
});

Object.assign(DEEP, {
  yorktown: {
    war: "Guerra de Independência dos Estados Unidos (1775–1783), campanha da Virgínia em 1781",
    hook: "Um exército britânico ficou preso num porto da Virgínia porque a frota que devia buscá-lo não chegou a tempo.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1781, a guerra entre os Estados Unidos e a Grã-Bretanha já durava seis anos, e ninguém estava ganhando. Os americanos tinham declarado independência em 1776, e a França entrou ao lado deles em 1778, em parte por rivalidade com a Grã-Bretanha. Os britânicos, cansados de lutar no norte, tinham levado a guerra para o sul, onde esperavam contar com a ajuda dos colonos leais ao rei.",
        "Foi no sul que o general Charles Cornwallis perdeu o fôlego. Depois de uma vitória cara em Guilford Courthouse, na Carolina do Norte, marchou para a Virgínia e chegou a Petersburg em 20 de maio de 1781. As ordens que recebia de Henry Clinton, o comandante britânico em Nova York, eram confusas. Acabou mandado para Yorktown, uma vila na margem da baía de Chesapeake, para construir ali um porto de águas profundas onde a marinha britânica pudesse ancorar.",
        { h: "O caminho até Yorktown" },
        { timeline: [
          ["20 mai 1781", "Cornwallis chega a Petersburg, na Virgínia."],
          ["6 jul", "Washington e Rochambeau, comandante do exército francês, se encontram em White Plains e discutem o próximo golpe."],
          ["14 ago", "Chega uma carta do almirante de Grasse: vai levar sua frota à Virgínia, mas só pode ficar até 14 de outubro."],
          ["19 ago", "Os exércitos aliados começam a marchar para o sul."],
          ["5 set", "A frota francesa vence a britânica na entrada da baía de Chesapeake."],
          ["28 set", "O exército aliado sai de Williamsburg e começa a cercar Yorktown."],
          ["19 out", "Cornwallis se rende."]
        ]},
        "Washington queria atacar Nova York. A carta de de Grasse mudou tudo: era a chance de pegar um exército britânico num lugar onde a marinha inimiga não poderia socorrê-lo, mas só se tudo desse certo em poucas semanas. Para que Clinton não adivinhasse o destino, Washington usou despachos falsos que sugeriam um ataque a Nova York. A marcha toda, contando a partir de Newport, onde os franceses estavam, tem cerca de 1.090 km (680 milhas) e durou 14 semanas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "George Washington, 49 anos" },
        "Comandante-chefe do exército continental. Em Yorktown, deu o primeiro golpe de picareta na trincheira e disparou o primeiro canhão do cerco. Ao passar por Mount Vernon, em setembro, estava vendo sua casa pela primeira vez em seis anos.",
        { h: "O conde de Rochambeau, 56 anos" },
        "Veterano do exército francês, foi mandado pelo rei Luís XVI em 1780 com cerca de 5.300 homens. Teve de coordenar com Washington um exército francês e outro americano, e a boa relação entre os dois foi parte do que fez a aliança funcionar. Segundo o relato, quando o oficial britânico quis entregar a espada a ele, apontou para Washington.",
        { h: "O conde de Grasse" },
        "Almirante francês. Foi ele quem decidiu levar a frota ao Chesapeake e fechar o mar. Sem essa decisão, não haveria Yorktown.",
        { h: "Lorde Cornwallis, 42 anos" },
        "General britânico de boa reputação militar, ousado, mas com ordens fracas e dependente de uma marinha que não veio. Seu exército estava doente: a malária atacou suas tropas, e ele mesmo estimou que metade dos homens não podia lutar na hora da rendição.",
        { h: "Outros nomes" },
        "O marquês de Lafayette, de 24 anos, tinha passado o verão seguindo Cornwallis com uma força americana que chegou a cerca de 4.500 homens, e comandou a Divisão Ligeira no cerco. Alexander Hamilton liderou o assalto americano a um dos redutos. O conde de Deux-Ponts liderou o francês. Do lado britânico, o coronel Charles O'Hara, que entregou a espada de Cornwallis, e Banastre Tarleton, o cavaleiro mais famoso do exército britânico no sul, que foi ferido."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os aliados somavam entre 17.000 e 19.000 homens, segundo as contas mais usadas. Os números exatos variam: uma conta dá 8.000 a 9.000 americanos, dos quais cerca de 5.900 soldados regulares e 3.100 de [[milícia]], e uns 7.800 franceses em terra. Os britânicos tinham entre 8.000 e 9.000 homens: cerca de 5.000 britânicos e menos de 3.000 alemães ([[hessianos]] e outros). Por isso alguns historiadores alemães chamam o cerco de 'a batalha alemã'.",
        { h: "A armadilha no mar" },
        "Em 5 de setembro, de Grasse saiu da baía com 24 [[navios de linha|navio de linha]] e encontrou a esquadra do almirante Graves, com 19. A luta durou cerca de duas horas e foi tática e inconclusiva: os franceses miraram nos mastros e velas, e os britânicos ficaram com mais estragos, cerca de 90 mortos e 246 feridos, e perderam um navio, afundado depois. Mas o resultado estratégico foi enorme. A esquadra de Barras chegou por volta de 10 de setembro com artilharia de cerco, e Graves, depois de um conselho em 13 de setembro, decidiu não atacar e voltou para Nova York. Cornwallis ficou sem saída pelo mar.",
        { h: "O terreno" },
        "Yorktown fica na margem sul do rio York, e do outro lado, em Gloucester Point, os britânicos tinham mais uma bateria que cobria a passagem estreita do rio. A linha de Cornwallis tinha sete [[redutos|reduto]] ligados por trincheiras de terra. O terreno em frente era pantanoso, e os aliados precisavam construir pontes para trazer os canhões. Dois redutos eram a chave: o número 10, perto do rio, e o número 9, cerca de 400 metros para dentro, protegidos por [[abatis]] e fossos.",
        { h: "O cerco" },
        "Entre 28 de setembro e 5 de outubro, os aliados ocuparam posições abandonadas pelos britânicos e prepararam as baterias. Na noite de 6 de outubro começaram a [[primeira paralela|paralela]], uma trincheira de cerca de 1,8 km, e em 9 de outubro as baterias estavam prontas, e Washington disparou o primeiro canhão. Em 11 e 12 de outubro cavaram a segunda paralela, uns 365 metros mais perto. Daí em diante, o fogo sobre os redutos e as trincheiras britânicas era contínuo.",
        { h: "A noite de 14 de outubro" },
        "Para tomar os dois redutos, os aliados atacaram à noite. Hamilton liderou cerca de 400 soldados de infantaria ligeira americana contra o reduto 10, defendido por uns 70 homens. O ataque durou cerca de 25 minutos, com 9 americanos mortos e 25 feridos. Ao mesmo tempo, cerca de 400 franceses sob Deux-Ponts cortaram o abatis e tomaram o reduto 9, defendido por uns 120. Com os dois redutos nas mãos, a linha britânica ficou aberta ao fogo dos aliados.",
        { h: "O fim" },
        "Em 15 de outubro, o tenente-coronel Abercromby saiu com uns 350 homens para encravar os canhões aliados. Os franceses os rechaçaram. Na noite de 16, Cornwallis tentou uma saída desesperada: passar o exército pelo rio, de barco, para Gloucester Point. A primeira leva atravessou, mas uma tempestade pegou os barcos na volta, e a fuga fracassou. Em 17 de outubro, um tambor e um oficial com um lenço branco apareceram, e o fogo parou. As negociações aconteceram em 18 de outubro, na casa Moore, e a rendição, em 19 de outubro, às duas da tarde."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Cornwallis alegou doença e não apareceu na cerimônia. O general O'Hara tentou entregar a espada primeiro a Rochambeau, que apontou para Washington, e Washington, por sua vez, indicou o general Benjamin Lincoln. Foi Lincoln, que tinha se rendido aos britânicos em Charleston, em 1780, quem aceitou a espada. Por vingança, Washington recusou aos britânicos as honras de guerra que tinham dado a Lincoln em Charleston: os soldados marcharam com as bandeiras enroladas.",
        "Os aliados capturaram cerca de 7.000 a 8.000 soldados (a conta varia segundo a fonte), 214 peças de artilharia e 24 navios de transporte. As perdas aliadas foram de 88 mortos e 301 feridos. As britânicas e alemãs variam muito entre as fontes: de 142 a 309 mortos e de 326 a 595 feridos.",
        { h: "Por que importa" },
        "A frota britânica de Graves chegou em 24 de outubro, cinco dias tarde demais, e voltou para Nova York. Em Londres, o primeiro-ministro lorde North teria exclamado: 'Oh, meu Deus, acabou tudo'. Em 4 de março de 1782, a Câmara dos Comuns votou para encerrar as operações ofensivas na América, e o governo de North caiu em 20 de março. A guerra continuou por mais tempo no mar, mas a paz veio com o Tratado de Paris, em 3 de setembro de 1783, que reconheceu a independência dos Estados Unidos.",
        "Yorktown mostra também o que a aliança fazia: sem a frota francesa, sem os soldados e a artilharia de cerco franceses, os americanos sozinhos não teriam conseguido.",
        { h: "Curiosidades e controvérsias" },
        { note: "A música: diz a tradição que a banda britânica tocou 'The World Turned Upside Down' (O mundo de cabeça para baixo) na marcha de rendição. Mas nenhum registro da época diz quais músicas foram tocadas, e a história só aparece quase cem anos depois." },
        { note: "A espada: muita gente acredita que a espada de Cornwallis está na Casa Branca. O historiador Jerome Green diz que O'Hara entregou a espada a Lincoln, que a devolveu na hora." },
        { note: "Os escravizados: milhares de pessoas escravizadas tinham fugido para as linhas britânicas, em busca de liberdade. Em 25 de outubro, Washington mandou que os fugitivos fossem recolhidos e devolvidos aos senhores. O historiador Gregory Urwin diz que isso transformou os soldados continentais em caçadores de escravos." },
        { note: "Os leais ao rei: Washington recusou um artigo do acordo que protegeria os colonos que tinham se juntado aos britânicos. Mas o artigo VIII deixou o navio Bonetta partir 'sem exame', o que pode ter permitido a fuga de alguns leais e desertores." }
      ]}
    ]
  },

  valmy: {
    war: "Guerras Revolucionárias Francesas: Guerra da Primeira Coalizão (1792–1797)",
    hook: "Uma tarde de canhonaço, com poucas centenas de mortos, mudou o rumo de uma revolução.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1792, a Revolução Francesa tinha três anos, e os reis da Europa estavam assustados. O rei Luís XVI, ainda no trono, era visto com desconfiança em Paris, e a França declarou guerra à Áustria em abril. A Prússia, o reino militar mais respeitado do continente, entrou ao lado da Áustria. Foi a [[Primeira Coalizão|primeira coalizão]].",
        "O exército francês estava em péssimo estado. Boa parte dos oficiais, nobres, tinha fugido do país como [[emigrados]], e muitos dos soldados eram voluntários recém-chegados, com pouco treino. As primeiras campanhas foram desastres. O que sobrou de melhor foi a artilharia, herdada do exército do rei, com oficiais e artilheiros profissionais.",
        { h: "A invasão" },
        { timeline: [
          ["Abr 1792", "A França declara guerra à Áustria."],
          ["25 jul", "O duque de Brunswick, comandante prussiano, assina um manifesto ameaçando Paris."],
          ["10 ago", "O povo de Paris invade o palácio das Tulherias, e o rei é preso."],
          ["23 ago", "Os prussianos tomam Longwy."],
          ["2 set", "Tomam Verdun, a última fortaleza antes de Paris."],
          ["19 set", "Kellermann se junta a Dumouriez em Sainte-Menehould."],
          ["20 set", "Batalha de Valmy."]
        ]},
        "Depois de Verdun, o caminho para Paris, a uns 200 km, parecia aberto. Foi o general Charles Dumouriez quem decidiu ocupar as passagens da floresta de Argonne, uma região de bosques e colinas, para barrar os prussianos. Os prussianos contornaram a posição, e Dumouriez se viu obrigado a girar o exército. Em 19 de setembro, o general François Kellermann chegou com seu exército a Sainte-Menehould e se juntou a ele. Os dois exércitos franceses somavam cerca de 54.000 homens. Os prussianos, ao contornar, tinham deixado os franceses atrás de si, e viraram para lutar."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "O duque de Brunswick, 57 anos" },
        "Comandante da coalizão. Era um general respeitado, formado na escola de Frederico, o Grande, e conhecido pela cautela. Tinha o rei da Prússia, Frederico Guilherme II, ao lado no campo. O manifesto que levava seu nome, em julho, ameaçava Paris com destruição se o rei fosse maltratado, e provocou o contrário: radicalizou a revolução.",
        { h: "François Kellermann, 57 anos" },
        "Veterano de muitas guerras, comandava o exército que enfrentou diretamente os prussianos. Em Valmy, teve seu cavalo morto debaixo dele. Mais tarde, Napoleão o fez duque de Valmy, em 1808.",
        { h: "Charles Dumouriez, 53 anos" },
        "Comandou o exército francês que ocupou a Argonne e foi quem armou a defesa. Em 1793, depois de uma derrota, passou para o lado inimigo.",
        { h: "Outros nomes" },
        "O general d'Aboville comandava a artilharia francesa. O duque de Chartres, de 18 anos, futuro rei Luís Filipe, comandava uma brigada de dragões e acalmou batalhões que fugiram. E o poeta Johann Wolfgang von Goethe, de 43 anos, estava com o exército prussiano e viu a batalha do campo inimigo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Kellermann tinha cerca de 36.000 homens e 40 canhões. Os prussianos tinham cerca de 34.000 e entre 54 e 58 canhões, dependendo da fonte. Os números são parecidos, mas não é a história toda: os austríacos e os emigrados do exército coalizado estavam longe, atrasados na marcha, e só os prussianos enfrentaram os franceses. Os franceses eram uma mistura de soldados do rei, que sabiam lutar, e voluntários que nunca tinham ouvido tiro de verdade.",
        { h: "O terreno" },
        "Uma região de colinas baixas e campos de giz, na Champanha, com lama depois de dias de chuva. Kellermann pôs sua linha, em forma de arco para fora, nas encostas perto da aldeia de Valmy, em torno de um moinho. Os prussianos ocuparam a colina do Cabaret de la Lune, a cerca de 2,4 km do moinho, de onde enxergavam a linha francesa a uns 1,2 km.",
        { h: "De manhã" },
        "A manhã começou com chuva e neblina. Os hussardos prussianos, avançando às cegas, levaram tiros perto da estalagem de La Lune, e foi o primeiro disparo do dia. O general Chazot tentou retomar a colina por ordem de Dumouriez, mas os canhões prussianos chegaram antes. A colina virou a âncora da linha prussiana. Kellermann mandou destruir o moinho de Valmy, para que o inimigo não o usasse de ponto de mira.",
        { h: "O canhonaço" },
        "No fim da manhã o vento levou a neblina embora, e as duas linhas se viram. A artilharia prussiana atirou sobre o moinho. Um tiro matou o cavalo de Kellermann, e vários oficiais ao redor dele foram mortos ou feridos. Por volta das 14 horas, um projétil prussiano acertou uma carroça de munição francesa, e a explosão atingiu mais duas. Dois batalhões de infantaria francesa fugiram, e os condutores das carroças, camponeses recrutados, saíram correndo com as carroças carregadas. O duque de Chartres reorganizou os batalhões, e d'Aboville trouxe mais munição.",
        "Brunswick viu a confusão e mandou a infantaria avançar, em colunas. Debaixo do fogo da artilharia francesa, ela avançou pouco e foi chamada de volta.",
        { h: "O grito" },
        "Foi nesse momento, segundo a tradição, que Kellermann levantou o chapéu na ponta da espada e gritou 'Viva a Nação!'. Os soldados repetiram o grito, e cantaram a Marselhesa e o 'Ça ira'. As fontes não dizem a hora exata. Às 16 horas, os prussianos formaram para um segundo avanço contra Valmy, que também parou e foi cancelado. Brunswick reuniu um conselho rápido com o rei e os oficiais e disse, segundo o relato: 'Aqui, nós não lutamos'. O fogo parou por volta das 18 horas, depois de cerca de 20.000 tiros de canhão.",
        { note: "As perdas foram pequenas: as contagens mais usadas dão cerca de 300 franceses e entre 180 e 200 prussianos mortos ou feridos. Para uma batalha tão famosa, foi um combate de baixas muito leves." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Naquela noite, os franceses deixaram as fogueiras acesas e recuaram para uma linha ao sul. Os prussianos, por sua vez, ficaram sem comida e com disenteria: cerca de 12.000 dos 42.000 homens ficaram doentes, e muitos morreram. Brunswick esperou dez dias em La Lune e levantou acampamento em 30 de setembro. No começo de outubro, os prussianos devolveram Verdun, e o exército da coalizão deixou a França.",
        "No mesmo dia da batalha, 20 de setembro, reunia-se em Paris a [[Convenção Nacional|convenção nacional]]. No dia seguinte, aboliu a monarquia, e a República foi proclamada logo depois. Em outubro, os franceses tomaram Mainz, e em novembro, Dumouriez ganhou a batalha de Jemappes, na Bélgica.",
        { h: "Por que importa" },
        "Valmy não foi uma grande batalha em termos de mortos. Foi grande pelo que significou: a primeira vitória do exército revolucionário contra a melhor tropa da Europa, e a prova de que a Revolução não ia cair de uma vez. Virou símbolo do 'exército cidadão', embora os historiadores lembrem que foram os soldados profissionais, sobretudo os artilheiros, que seguraram a linha.",
        { h: "Curiosidades e controvérsias" },
        { note: "Goethe, que estava no campo prussiano, escreveu em 1822, trinta anos depois, que disse naquela noite que dali e daquele dia começava uma nova época na história do mundo, e que quem estava lá podia dizer que tinha estado presente no nascimento dela. As palavras exatas variam de uma fonte para outra, e há historiadores que duvidam de que a frase tenha sido dita na hora." },
        { note: "Por que Brunswick parou? Os historiadores não chegaram a uma resposta única. Entre as explicações: a posição forte dos franceses, os reforços que chegavam, a preocupação da Prússia com a invasão russa da Polônia e a cautela do próprio duque. Corre também a história de que ele teria sido subornado ou teria recebido um apelo secreto de Luís XVI, mas o historiador Munro Price não achou prova convincente." },
        { note: "O moinho de Valmy: a versão mais comum diz que Kellermann o mandou destruir ou queimar no dia da batalha. Alguns relatos o colocam como posto de comando francês, e o moinho que se vê hoje é reconstruído." }
      ]}
    ]
  },

  piramides: {
    war: "Campanha do Egito (1798–1801)",
    hook: "Uma elite de cavaleiros de séculos de tradição contra quadrados de fuzis e canhões: acabou numa tarde.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1798, a França revolucionária estava em guerra com a Grã-Bretanha, e o governo, o Diretório, queria atingir o inimigo onde doía: o caminho para a Índia. O jovem general Napoleão Bonaparte, de 28 anos, famoso pelas vitórias na Itália, propôs conquistar o Egito. Saiu de Toulon em maio, tomou Malta no caminho e desembarcou perto de Alexandria no começo de julho.",
        "O Egito era uma província do Império Otomano, mas quem mandava de fato eram os [[mamelucos]], uma casta militar que governava o país havia séculos. Seus dois chefes, os [[beys]] Murad e Ibrahim, dividiam o poder no Cairo. Os mamelucos eram cavaleiros treinados desde a infância, de armadura pesada, e tinham fama de temíveis.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["Jul 1798", "Os franceses desembarcam perto de Alexandria e tomam a cidade."],
          ["Jul 1798", "O exército atravessa o deserto rumo ao Cairo, em marcha forçada, no calor."],
          ["21 jul", "Batalha perto de Embabeh, na margem oeste do Nilo."],
          ["24 jul", "Napoleão entra no Cairo."]
        ]},
        "Murad Bey decidiu esperar os franceses na margem oeste do Nilo, em frente ao Cairo. Ibrahim Bey ficou com seu exército do outro lado do rio, na margem leste."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão Bonaparte, 28 anos" },
        "General corso, comandava o exército que tinha vencido na Itália. Para ele, o Egito era também uma aventura intelectual: levou na expedição mais de cem cientistas, engenheiros e artistas. Antes da batalha, na ordem do dia, escreveu a frase mais famosa da campanha: 'Do alto destas pirâmides, quarenta séculos vos contemplam'.",
        { h: "Murad Bey" },
        "Um dos dois chefes mamelucos. Comandava o exército egípcio no campo. Seu plano era simples: prender os franceses nas pontas fortificadas e dar o golpe com a cavalaria no centro.",
        { h: "Os outros nomes" },
        "Do lado francês, cinco divisões, da direita para a esquerda, sob Louis Desaix, Jean Reynier, Charles Dugua, Honoré Vial e Louis André Bon. Do lado mameluco, Ayyub Bey, o defterdar (tesoureiro), liderou o ataque principal."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os franceses tinham entre 20.000 e 25.000 homens, segundo os historiadores: cerca de 17.000 de infantaria, 3.000 de cavalaria e mais artilharia. Os números dos egípcios são bem mais incertos. Um historiador dá cerca de 6.000 mamelucos a cavalo e 15.000 de infantaria; outro, 6.000 mamelucos e 54.000 irregulares árabes; outro, 50.000 homens no total. Os de infantaria eram, em boa parte, [[felás]] recrutados à força, de qualidade muito inferior à dos franceses.",
        { h: "O terreno" },
        "A planície do Nilo, na margem oeste, em frente ao Cairo. Murad ancorou sua direita no rio, na aldeia de Embabeh, fortificada com infantaria e artilharia. Sua esquerda se apoiava na aldeia de Biktil, também com canhões. No centro, a cavalaria mameluca. As pirâmides de Gizé ficavam a vários quilômetros dali. Napoleão deu à batalha o nome delas, mas no Egito ela também é chamada de batalha de Embabeh.",
        { h: "O quadrado" },
        { formation: true },
        "Os franceses tinham marchado a noite toda. Cada divisão formou um [[quadrado]] oco: a infantaria nos quatro lados, com a cavalaria e a bagagem no meio e os canhões nos cantos. Os cinco quadrados avançaram para o sul, em escalão: a direita (Desaix) um pouco mais à frente, a esquerda (Bon) protegida pelo Nilo. Era uma formação feita contra cavalaria: a cavalaria não consegue romper uma parede de baionetas, e o fogo de mosquete e de canhão de todos os lados castiga quem se aproxima.",
        { h: "As cargas" },
        "Desaix mandou um destacamento ocupar Biktil, e alguns mamelucos tentaram atacá-lo, sem sucesso. Murad lançou então a cavalaria contra os quadrados, carga após carga. Um cavaleiro de armadura chegou a poucos passos das linhas francesas e desafiou alguém para um duelo, e foi derrubado a tiros. Por volta das 15h30, Murad mandou Ayyub Bey liderar um ataque geral. Desaix, Reynier e Dugua seguraram.",
        { h: "Embabeh" },
        "Enquanto a cavalaria mameluca se desfazia contra os quadrados, a divisão de Bon se organizou em colunas de ataque e assaltou Embabeh. A guarnição quebrou. Muitos tentaram escapar pelo Nilo, e centenas se afogaram. Ibrahim, na outra margem, viu tudo e não pôde fazer nada. Murad, ferido de sabre numa face, fugiu para o Alto Egito com alguns milhares de cavaleiros."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo os relatórios franceses, as perdas foram de 29 mortos e 260 feridos. Do lado egípcio, as estimativas falam em milhares de mortos e feridos, e alguns historiadores chegam a 10.000, dos quais cerca de 7.000 mamelucos mortos. Os números dos dois lados vêm de relatos de parte interessada, e são provavelmente imprecisos.",
        "Napoleão entrou no Cairo em 24 de julho. O exército mameluco se dispersou, e parte dele fugiu para a Síria. Murad ainda guerreou no Alto Egito, até ser derrotado por Desaix no fim de 1799.",
        { h: "Por que importa" },
        "Foi o começo do fim do domínio mameluco no Egito. Mas a vitória durou pouco: em 1º de agosto, apenas onze dias depois, Nelson destruiu a frota francesa na baía de Abukir (a batalha do Nilo), e o exército de Napoleão ficou isolado da França. A expedição teve também um lado científico duradouro: os estudiosos que o acompanhavam fundaram o Instituto do Egito, no Cairo, e em julho de 1799 soldados franceses acharam, perto de Roseta, a pedra que permitiria a Champollion decifrar os hieróglifos, mais de vinte anos depois.",
        "Napoleão deixou o Egito em agosto de 1799, sem o exército, e em novembro estava no poder na França.",
        { h: "Curiosidades e controvérsias" },
        { note: "O nome: 'batalha das Pirâmides' é uma criação de Napoleão. A luta foi em Embabeh, a vários quilômetros das pirâmides, que mal se enxergavam." },
        { note: "A frase: 'quarenta séculos vos contemplam' é a mais famosa de Napoleão, mas é a versão registrada na ordem do dia e nas memórias. Ninguém sabe ao certo como foi dita de viva voz." },
        { note: "O filme: o 'Napoleão' de Ridley Scott, de 2023, foi criticado pelas liberdades que tomou ao mostrar esta batalha." }
      ]}
    ]
  },

  copenhague: {
    war: "Guerras Revolucionárias Francesas, a Liga da Neutralidade Armada (1800–1801)",
    hook: "Um almirante pôs a luneta no olho ruim e disse que não via o sinal de retirada.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1801, a Grã-Bretanha estava em guerra com a França e usava seus navios para bloquear os portos inimigos e revistar os navios de países neutros. Isso irritava os países do norte da Europa, que viviam do comércio. Em dezembro de 1800, o czar Paulo I da Rússia chefiou uma aliança: a [[liga da neutralidade armada]], com a Dinamarca-Noruega, a Suécia e a Prússia.",
        "O medo britânico era que a Dinamarca-Noruega se aliasse de vez à França, e que as frotas do Báltico, juntas, formassem uma força perigosa. Londres decidiu mandar uma frota ao Báltico para forçar a Dinamarca a sair da liga.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["12 mar 1801", "A frota britânica parte de Yarmouth, sob o almirante Hyde Parker, com Nelson como segundo em comando."],
          ["23–24 mar", "O czar Paulo I é assassinado. Os dinamarqueses ainda não sabem."],
          ["30 mar", "A frota passa o estreito do Sund. O castelo de Kronborg atira, e os canhões suecos, do outro lado, ficam calados."],
          ["1 abr", "O esquadrão de Nelson desce o canal externo e ancora a cerca de 3 km da linha dinamarquesa."],
          ["2 abr", "Batalha de Copenhague."]
        ]},
        "Hyde Parker era cauteloso. Nelson queria atacar logo, antes que os dinamarqueses se preparassem. Na noite de 30 de março, num conselho de guerra, a maioria dos oficiais era pelo atraso, mas Nelson se ofereceu para atacar com dez navios de linha, e Parker lhe deu doze e a direção do ataque."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Horatio Nelson, 42 anos" },
        "Já era o herói da batalha do Nilo, em 1798. Agressivo, popular com os marinheiros e dado à desobediência quando achava que sabia melhor. Perdeu a visão do olho direito em Calvi, em 1794, e é por isso que ficou famoso o episódio do sinal. Seu método era dar liberdade de ação aos capitães, que ele conhecia e em quem confiava.",
        { h: "Sir Hyde Parker" },
        "O comandante da frota. Ficou com a reserva, à distância, e de lá viu o combate. Preocupado com as perdas, mandou o sinal de retirada. Foi chamado de volta a Londres em 5 de maio.",
        { h: "Olfert Fischer e o príncipe Frederico" },
        "Fischer comandava a defesa naval dinamarquesa. Em terra, quem governava era o príncipe herdeiro Frederico, o regente. Foi com ele que Nelson negociou a trégua.",
        { h: "Outros nomes" },
        "O capitão Thomas Foley comandava o Elephant, nau de Nelson, e Thomas Hardy sondou o canal na noite anterior. O capitão Edward Riou, das fragatas, foi morto na batalha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os britânicos tinham 12 [[navios de linha|navio de linha]] no ataque, mais [[fragatas|fragata]], navios menores, bombardeiros e brulotes. Os dinamarqueses e noruegueses tinham sete navios de linha, quatro fragatas e vários cascos menores, além de [[baterias flutuantes|bateria flutuante]] e do forte de Trekroner, na entrada do porto. Muitos dos navios dinamarqueses eram cascos velhos, sem mastros, usados só como plataformas de canhões, e isso é parte do que fez a defesa tão difícil de vencer.",
        { h: "O terreno" },
        "A defesa de Copenhague estava ancorada ao longo do canal do Rei, uma passagem estreita e rasa com bancos de areia, no lado leste da cidade. Era um lugar onde navios grandes tinham pouco espaço e podiam encalhar.",
        { h: "A noite antes" },
        "Hardy sondou o canal durante a noite. Nelson ditou o plano até cerca de uma da manhã: cada navio britânico deveria ancorar diante de um navio dinamarquês e lutar com ele. Os capitães receberam as ordens às 8 da manhã.",
        { h: "O ataque" },
        { formation: true },
        "Os navios levantaram âncora às 9h30. O Edgar, na frente, ancorou diante do Jylland, e o Ardent e o Glatton vieram atrás, o Glatton diante do Dannebrog, a nau capitânia dinamarquesa. Mas o canal era traiçoeiro: o Bellona e o Russell encalharam no banco do meio, e o Agamemnon ancorou longe demais, a leste, e nem entrou na luta. O Bellona e o Russell, ainda assim, atiraram do banco. O Defiance chegou à posição diante de Trekroner por volta das 11h30.",
        "As baterias dinamarquesas abriram fogo por volta das 10h05, e às 11h30 a luta era geral. Era uma luta de canhão contra canhão, a curta distância, com os navios parados.",
        { h: "O sinal" },
        "Por volta das 13h30, Parker, que via a luta de longe e achava que as perdas eram altas demais, içou o sinal de retirada. Um oficial foi mandado a Nelson com autorização para recuar se achasse melhor, mas o sinal subiu antes que ele chegasse. Segundo o relato do coronel Stewart, Nelson levou a luneta ao olho cego e disse que tinha direito a ser cego às vezes, e ordenou que o sinal de 'combate cerrado' continuasse içado. Foi uma história muito contada, e as palavras exatas variam de uma fonte para outra.",
        "Os capitães das fragatas de Riou, que viam melhor o sinal de Parker, obedeceram e começaram a se afastar. O navio de Riou foi atingido, e ele morreu.",
        { h: "O fim" },
        "Por volta das 14h, o fogo dinamarquês foi ficando mais fraco (alguns historiadores dinamarqueses falam em 14h30). Dois navios dinamarqueses, o Nyborg e o Aggershuus, tentaram fugir para o porto e afundaram. Nelson mandou uma carta ao príncipe Frederico, sob bandeira de trégua, e por volta das 15h o príncipe respondeu e o fogo parou. Numa segunda carta, Nelson ofereceu devolver os feridos dinamarqueses e retirar os prisioneiros sãos, e tomar ou queimar os navios que tinham se rendido. Por volta das 16h30, o Dannebrog explodiu, e mais de 250 homens morreram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Dos 18 navios dinamarqueses envolvidos, dois afundaram, um explodiu e 12 foram capturados. Os britânicos queimaram 11 dos capturados e levaram um, o Holsteen, para a Inglaterra. As perdas humanas variam entre as fontes. Pelos números oficiais britânicos, 274 mortos e 737 feridos do lado deles; outra fonte dá 253 e 688. Do lado dinamarquês, um estudo do Museu Naval Real da Dinamarca, de 1994, estima 367 mortos, 635 feridos e 1.779 prisioneiros; outro relato fala em cerca de 790 mortos e 910 feridos.",
        { h: "Por que importa" },
        "Nelson foi a Copenhague conversar com o príncipe em 3 de abril. Em 8 ou 9 de abril, conforme a fonte, fechou-se um [[armistício]] de 14 semanas (originalmente 16), em que a Dinamarca saía da liga. O assassinato do czar tinha acabado com a liga de qualquer jeito, e o novo czar, Alexandre, afastou-se dela. Parker foi chamado de volta, e Nelson assumiu o comando. Em maio, foi até Reval, na Estônia, e encontrou a frota russa recolhida em Kronstadt. A paz definitiva com a Dinamarca foi assinada em 23 de outubro de 1801. Nelson foi feito visconde.",
        "Foi uma vitória cara e discutida, e mostrou até onde Nelson aceitava ir.",
        { h: "Curiosidades e controvérsias" },
        { note: "O olho: Nelson perdeu a visão do olho direito em Calvi, em 1794, mas o olho continuava com aparência normal. Algumas análises modernas sugerem que a lesão era menos grave do que a lenda diz." },
        { note: "Quem ganhou? Os britânicos ficaram com a posição e a trégua, mas os dinamarqueses lutaram com bravura e a defesa quase os venceu. O próprio Nelson teria dito que foi a batalha mais dura de sua vida, mas essa frase, na forma exata, não aparece nas fontes que consultamos." },
        { note: "A ordem de Parker: há quem diga que o sinal dava a Nelson a opção de continuar. As fontes que consultamos dizem que era uma ordem geral para todos os navios, e que o que Nelson fez foi desobedecer." }
      ]}
    ]
  },

  assaye: {
    war: "Segunda Guerra Anglo-Marata (1803–1805)",
    hook: "Poucos milhares de soldados regulares atacaram um exército de dezenas de milhares com cem canhões, e Wellington nunca esqueceu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No início do século XIX, a [[Companhia Britânica das Índias Orientais|companhia das índias orientais]] controlava Bengala, Madras e partes importantes da Índia, e os [[maratas]] eram os maiores rivais no caminho. A confederação marata, governada por chefes poderosos, como Daulatrao Scindia, de Gwalior, e Raghuji II Bhonsle, de Berar, tinha exércitos treinados por oficiais europeus, com infantaria à europeia e muita artilharia.",
        "A briga estourou em dezembro de 1802, com o Tratado de Bassein. O [[peshwa]] Baji Rao II, expulso de Poona pelos rivais, assinou com os britânicos, que o recolocaram no trono sob sua proteção. Scindia e Bhonsle viram nisso uma humilhação e juntaram forças perto da fronteira do Nizam de Hiderabade, aliado britânico.",
        { h: "O caminho até Assaye" },
        { timeline: [
          ["Dez 1802", "Tratado de Bassein: os britânicos restauram o peshwa em Poona."],
          ["Ago 1803", "Scindia se recusa a recuar. Wellesley declara guerra a ele e a Berar."],
          ["Set 1803", "Wellesley e o coronel Stevenson avançam em colunas separadas, com o plano de se juntar para atacar o exército marata."],
          ["23 set", "Wellesley descobre que os maratas estão mais perto do que esperava e ataca sem esperar Stevenson."]
        ]},
        "O plano era atacar juntos em 24 de setembro. Mas, quando Wellesley soube que o exército marata estava por perto, escolheu não esperar. Mais tarde, o funcionário britânico Thomas Munro o criticaria por isso. Wellesley respondeu que a informação que recebera era errada."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Arthur Wellesley, 34 anos" },
        "Irmão do governador-geral da Índia, tinha uma carreira de oficial até então sem grandes batalhas campais. Em Assaye, teve dois cavalos mortos debaixo dele. Mais tarde seria o duque de Wellington, o vencedor de Waterloo.",
        { h: "Daulatrao Scindia e Raghuji II Bhonsle" },
        "Os chefes maratas de Gwalior e de Berar. Scindia tinha um exército moderno, com brigadas de infantaria treinadas por europeus.",
        { h: "Anthony Pohlmann" },
        "O oficial europeu que comandava a infantaria marata treinada à moda europeia. Foi ele quem girou a linha a 90 graus quando Wellesley atravessou o rio.",
        { h: "Os outros nomes" },
        "O coronel Patrick Maxwell comandava a cavalaria britânica, o 19º de Dragões Leves, e morreu numa carga. O tenente-coronel William Orrock, do lado britânico, entendeu mal uma ordem e desorganizou a direita da linha."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Wellesley tinha cerca de 4.500 soldados de infantaria e cavalaria regulares, 17 canhões e mais uns 5.000 cavaleiros aliados (de Maiçor e outros), que quase não lutaram. Eram os regimentos 74º e 78º de highlanders, o 19º de Dragões Leves e batalhões de [[cipaios]] de Madras. Os maratas tinham cerca de 50.000 homens, com estimativas até 70.000: uns 10.800 de infantaria treinada à europeia, em três brigadas, mais 10.000 a 20.000 de infantaria irregular de Berar, 30.000 a 40.000 cavaleiros irregulares (muitos [[pindaris]]) e mais de 100 canhões.",
        { h: "O terreno" },
        "Os rios Kaitna e Juah emolduravam a posição marata. O único vau que os guias de Wellesley conheciam ficava bem na frente da linha inimiga. Mas Wellesley reparou que duas aldeias, Peepulgaon e Waroor, ficavam uma de cada lado do rio, bem além da esquerda marata, e deduziu que devia haver um vau ali. Seu engenheiro-chefe, o capitão John Johnson, foi verificar e confirmou.",
        { h: "A travessia" },
        { formation: true },
        "Por volta das 15 horas, os britânicos atravessaram sem oposição, naquele vau, e formaram linha na margem norte, do lado esquerdo do inimigo. Pohlmann reagiu depressa: girou a linha marata a 90 graus para encarar o novo inimigo, e Wellesley estendeu a sua para acompanhar.",
        { h: "A artilharia" },
        "Os canhões marata fizeram um estrago enorme nos soldados que avançavam e deixaram os canhões britânicos fora de ação. Wellesley mandou abandonar a artilharia e fez a infantaria avançar de [[baionetas|baioneta]] caladas, direto sobre os canhões inimigos.",
        { h: "A esquerda e a direita" },
        "Na esquerda britânica, os highlanders do 78º e os batalhões de Madras chegaram aos canhões marata e quebraram a direita inimiga, e o resto da linha cedeu. Mas na direita deu errado: o tenente-coronel Orrock leu mal as ordens e levou seus homens em direção à aldeia de Assaye, abrindo um buraco na linha. Os piquetes foram quase destruídos, e o 74º formou um quadrado para se defender.",
        "O coronel Maxwell, com o 19º de Dragões Leves, atacou e salvou o 74º, empurrando as tropas marata de volta para o outro lado do rio Juah.",
        { h: "Os mortos que se levantaram" },
        "Alguns artilheiros marata tinham se deitado fingindo estar mortos. Quando os britânicos passaram, voltaram aos canhões e atiraram contra a retaguarda do 74º. Wellesley liderou ele mesmo uma carga de cavalaria para retomar as peças. Maxwell morreu numa carga posterior, atingido por metralha. Por volta das 18 horas, a infantaria irregular de Berar deixou a aldeia de Assaye. A cavalaria marata, em sua maior parte pindaris, quase não entrou na luta. Os britânicos estavam exaustos demais para perseguir. A cavalaria aliada se recusou a ir sozinha."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os britânicos perderam 428 mortos, 1.138 feridos e 18 desaparecidos, mais de um terço dos homens engajados. Os maratas perderam 98 canhões e sete bandeiras. Quanto às baixas deles, o relatório britânico fala em cerca de 1.200 mortos, e alguns historiadores modernos calculam cerca de 6.000 entre mortos e feridos. Stevenson só chegou à noite do dia seguinte, 24 de setembro.",
        "Wellesley continuou a campanha com vitórias em Argaon e Gawilghur, e os chefes maratas pediram a paz.",
        { h: "Por que importa" },
        "Foi a primeira grande vitória de Wellesley e ajudou a ampliar o domínio britânico sobre a Índia. O 74º ganhou o apelido de 'regimento de Assaye', e a honra da batalha foi concedida às unidades que lutaram nela.",
        "Wellesley chamou Assaye de a batalha mais sangrenta, para o número de homens, que ele já tinha visto. Já velho, segundo conversas registradas, considerava Assaye a melhor coisa que fez em combate.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: as estimativas das forças variam. Os 4.500 regulares são a conta mais usada; somando os cavaleiros aliados, chega-se a cerca de 9.500. As estimativas das baixas marata, por sua vez, variam entre 1.200 e 6.000." },
        { note: "O vau: a história de que Wellesley deduziu a existência do vau ao ver as duas aldeias é a mais contada. Uma fonte diz que ele mesmo achou a passagem, outra que o engenheiro Johnson a confirmou depois da dedução." },
        { note: "A decisão de atacar: Thomas Munro criticou Wellesley por não esperar Stevenson e pelas perdas pesadas. Wellesley se defendeu dizendo que a informação sobre a posição inimiga estava errada." }
      ]}
    ]
  },

  trafalgar: {
    war: "Guerras Napoleônicas: Guerra da Terceira Coalizão (1805)",
    hook: "Nelson abriu mão da linha de batalha clássica, e a Grã-Bretanha ficou dona do mar por um século.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1805, Napoleão estava em guerra com a Grã-Bretanha e tinha um plano: invadir a Inglaterra. Reuniu perto de Boulogne, na costa do Canal da Mancha, um grande exército. Faltava uma coisa: cruzar o canal exigia que a frota francesa dominasse o mar por alguns dias, e a Royal Navy era a maior marinha do mundo.",
        "A frota francesa tentou iludir a britânica: foi e voltou do Caribe, e juntou-se à frota espanhola. Em 22 de julho, travou um combate sem resultado ao largo do cabo Finisterra, e o vice-almirante Pierre-Charles Villeneuve se refugiou em Cádiz. Os britânicos mandaram Nelson para cuidar do bloqueio, e ele assumiu o comando em 28 de setembro.",
        { h: "O caminho até Trafalgar" },
        { timeline: [
          ["22 jul 1805", "Combate do cabo Finisterra. Villeneuve se refugia em Cádiz."],
          ["28 set", "Nelson chega e assume o bloqueio de Cádiz."],
          ["9 out", "Nelson escreve o memorando com seu plano de ataque aos capitães."],
          ["18–20 out", "Villeneuve sai de Cádiz com a frota franco-espanhola."],
          ["21 out", "Batalha de Trafalgar."]
        ]},
        "Villeneuve estava relutante em sair. Suas tripulações eram mal treinadas e os suprimentos curtos. Mas Napoleão queria que ele partisse para o Mediterrâneo, e, segundo a maioria dos relatos, ele saiu também ao saber que seria substituído. Nesse meio tempo, o exército de Boulogne já tinha sido mandado contra a Áustria, e a invasão da Inglaterra estava, na prática, abandonada."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Horatio Nelson, 47 anos" },
        "Vice-almirante, o oficial mais famoso da marinha britânica. Perdeu a visão de um olho e um braço em combate. Era ousado e carismático, e seu estilo de comando era dar a ideia geral e deixar os capitães decidirem: 'Nenhum capitão pode errar muito se puser seu navio ao lado do inimigo', disse a eles. Depois de Trafalgar, virou o maior herói naval da Grã-Bretanha.",
        { h: "Pierre-Charles Villeneuve, 42 anos" },
        "Vice-almirante francês. Tinha sobrevivido à batalha do Nilo, em 1798, e conhecia a força dos britânicos. Tinha pouca vontade de enfrentar a Royal Navy. Foi capturado em Trafalgar. Libertado em 1806, foi achado morto num quarto de hotel, em circunstâncias que a história oficial chamou de suicídio.",
        { h: "Os outros nomes" },
        "Cuthbert Collingwood, de 57 anos, comandava a segunda coluna britânica no Royal Sovereign. O capitão Thomas Hardy comandava o Victory. O almirante espanhol Federico Gravina era o segundo da frota aliada e saiu ferido. O contra-almirante Pierre Dumanoir comandava a vanguarda franco-espanhola. O capitão Jean-Jacques Lucas comandava o Redoutable, famoso pela luta ao lado do Victory."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A Grã-Bretanha tinha 27 [[navios de linha|navio de linha]], com cerca de 2.148 canhões e 17.000 homens. A frota franco-espanhola tinha 33, com algo entre 2.568 e 2.632 canhões e cerca de 30.000 homens, incluindo alguns dos maiores navios do mundo, como o Santísima Trinidad, espanhol, de quatro conveses.",
        { h: "O plano" },
        "A [[linha de batalha]] clássica punha as duas frotas lado a lado, em fileiras paralelas, trocando tiros de lado a lado. Era um jeito de lutar que quase nunca dava vitória decisiva. Nelson decidiu fazer diferente. Dividiu a frota em duas colunas e atacou de frente, perpendicular à linha inimiga, para cortá-la em três pedaços. A ordem de navegação já era a ordem de batalha, para não perder tempo formando linha.",
        "O custo era alto: os navios da frente levariam fogo sem poder responder, porque seus canhões ficam nos lados. Nelson mandou usar todo o pano disponível para encurtar esse tempo. Uma fonte chama o plano de 'aposta bem calculada'.",
        { h: "A manhã" },
        { formation: true },
        "Por volta das 5h40 da manhã, os britânicos estavam cerca de 21 milhas a noroeste do cabo Trafalgar. Às 8 horas, Villeneuve mandou a frota dar meia-volta e retornar a Cádiz, o que deixou a linha esticada e irregular. O vento era muito fraco e o mar tinha um mar de fundo forte, que balançava os navios e atrapalhava a pontaria de franceses e espanhóis. Os navios se arrastavam. A coluna de Nelson, a de barlavento, tinha o Victory na frente, seguido por Téméraire, Conqueror e Neptune. A de Collingwood, a de [[sotavento]], tinha o Royal Sovereign na frente e o Belleisle em segundo.",
        "Por volta das 11h45, Nelson mandou o sinal 'A Inglaterra espera que cada homem cumpra o seu dever'. Era uma versão modificada: Nelson tinha escrito 'confia', e o oficial Pasco sugeriu 'espera'. Foram necessárias 12 subidas de bandeira.",
        { h: "O Royal Sovereign" },
        "Ao meio-dia, o Fougueux, francês, deu o primeiro tiro contra o Royal Sovereign. Collingwood teria dito a seus oficiais: 'Vamos fazer hoje algo de que o mundo vá falar depois'. O Royal Sovereign deixou o resto da frota para trás e cortou a linha aliada logo atrás do Santa Ana, nau capitânia do almirante espanhol Álava.",
        { h: "O Victory" },
        "O Victory ficou cerca de 40 minutos sob fogo de vários navios inimigos sem poder responder. O timão foi estraçalhado por uma bala, e o navio teve de ser governado por baixo, na cana do leme. Às 12h45, passou entre o Bucentaure e o Redoutable e disparou, de perto e com balas triplas, uma [[descarga em enfiada|fogo em enfiada]] na popa do Bucentaure, a nau de Villeneuve. A frota inimiga estava cortada.",
        "O Victory acabou preso ao Redoutable, cujos homens tentaram abordar o navio britânico. As granadas francesas expulsaram os artilheiros do convés, e o Victory parou de atirar por um tempo. O Téméraire chegou pela proa do Redoutable e disparou uma [[carronada]] contra os franceses no convés, bem na hora em que se preparavam para a [[abordagem]]. Causou muitas baixas.",
        { h: "A morte de Nelson" },
        "Um atirador no mastro do Redoutable acertou Nelson no ombro esquerdo. A bala atravessou a coluna e parou perto da omoplata direita. Nelson foi levado para baixo. As fontes não dão a hora exata do tiro: a conta mais comum é entre 13h15 e 13h30. Ele morreu às 16h30, sabendo que a vitória estava ganha. Disse ao cirurgião Beatty: 'Graças a Deus cumpri o meu dever'. O capelão Scott anotou como últimas palavras: 'Deus e meu país'.",
        { h: "O fim da batalha" },
        "O Redoutable se rendeu às 13h55, com 99 homens aptos de uma tripulação de 643. O Santísima Trinidad se rendeu depois de três horas de luta. Dumanoir, que comandava a vanguarda, quase não lutou e saiu com quatro navios (Formidable, Scipion, Duguay-Trouin e Mont-Blanc), que seriam capturados em 4 de novembro no cabo Ortegal. Gravina, ferido, voltou a Cádiz com os navios que conseguiu."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "No dia da batalha, a conta mais usada é de 17 navios aliados capturados e 1 destruído, o Achille, que explodiu. Somando os quatro de Dumanoir, são 22 dos 33 navios perdidos ao todo. Os britânicos não perderam nenhum navio. As perdas humanas foram de 458 mortos e 1.208 feridos para os britânicos e 4.395 mortos, 2.541 feridos e de 7.000 a 8.000 prisioneiros para os franco-espanhóis.",
        "Depois, uma tempestade destruiu a maior parte dos navios capturados. Alguns afundaram, outros foram queimados ou afundados de propósito, e alguns foram retomados na confusão. Do lado aliado, 11 navios chegaram a Cádiz, mas só uns poucos estavam em condição de navegar. Gravina morreu meses depois, em consequência dos ferimentos.",
        { h: "Por que importa" },
        "Trafalgar acabou com qualquer chance real de Napoleão invadir a Inglaterra, e confirmou o domínio britânico dos mares, que não foi seriamente desafiado por mais de um século. Napoleão respondeu por terra: em 2 de dezembro de 1805, venceu em Austerlitz e, depois, tentou sufocar a Grã-Bretanha com o bloqueio continental.",
        "O tenente Lapenotière levou a notícia da vitória (e da morte de Nelson) num pequeno navio, o Pickle, até Falmouth, e de lá por terra, de carruagem, até o Almirantado, em Londres.",
        { h: "Curiosidades e controvérsias" },
        { note: "O sinal: a frase mais famosa da história naval inglesa foi 'A Inglaterra espera que cada homem cumpra o seu dever'. A original, escrita por Nelson, dizia 'confia'. A mudança foi sugestão do oficial de sinais. A frase serviu de modelo para o sinal do almirante Barroso em Riachuelo, em 1865, no Brasil." },
        { note: "Foi tática ou foi preparo? O plano de Nelson era arriscado, e a aproximação lenta custou caro aos primeiros navios. Mas há historiadores que atribuem a diferença de perdas mais ao treino, à prontidão e ao moral das tripulações britânicas do que à tática de Nelson. A pontaria francesa e espanhola, afetada pelo mar grosso e pelo pouco treino, foi mesmo ruim." },
        { note: "O corpo: segundo a tradição, o corpo de Nelson foi conservado num barril de aguardente para a viagem de volta à Inglaterra." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  trafalgar: {
    terrain: [{ t: "note", x: 86, y: 6, l: "Norte ↑" }],
    units: [
      { id: "f1", s: "b", k: "ship", w: 4, h: 9, l: "Vanguarda (Dumanoir)" },
      { id: "f2", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f3", s: "b", k: "ship", w: 4, h: 9, l: "Bucentaure (Villeneuve)" },
      { id: "f4", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f5", s: "b", k: "ship", w: 4, h: 9, l: "" },
      { id: "f6", s: "b", k: "ship", w: 4, h: 9, l: "Frota franco-espanhola (33)" },
      { id: "n1", s: "a", k: "ship", w: 9, h: 4, l: "Victory (Nelson)" },
      { id: "n2", s: "a", k: "ship", w: 9, h: 4, l: "Coluna de Nelson" },
      { id: "n3", s: "a", k: "ship", w: 9, h: 4, l: "" },
      { id: "c1", s: "a", k: "ship", w: 9, h: 4, l: "Royal Sovereign (Collingwood)" },
      { id: "c2", s: "a", k: "ship", w: 9, h: 4, l: "Coluna de Collingwood" },
      { id: "c3", s: "a", k: "ship", w: 9, h: 4, l: "" }
    ],
    steps: [
      { t: "Às 8h, Villeneuve manda a frota dar meia-volta para Cádiz, e a linha fica esticada e irregular. Nelson vem do oeste em duas colunas, de frente para ela. Cada símbolo vale vários navios.",
        p: { f1: [72, 7], f2: [72, 18], f3: [72, 29], f4: [72, 40], f5: [72, 51], f6: [72, 62],
             n1: [36, 24], n2: [24, 24], n3: [12, 24], c1: [36, 46], c2: [24, 46], c3: [12, 46] } },
      { t: "O vento é fraco, e o mar tem ondulação forte. Os britânicos levam horas para chegar, com todo o pano içado para encurtar o tempo sob fogo.",
        p: { n1: [50, 24], n2: [38, 24], n3: [26, 24], c1: [54, 46], c2: [42, 46], c3: [30, 46] } },
      { t: "Ao meio-dia, o Royal Sovereign de Collingwood chega na frente do resto da frota e corta a linha na retaguarda, atrás do Santa Ana. Os navios aliados abrem fogo cerrado.",
        p: { c1: [70, 45.5], c2: [58, 46], c3: [46, 46], n1: [58, 24], n2: [46, 24], n3: [34, 24] } },
      { t: "O Victory, que passou cerca de 40 minutos sob fogo sem responder, corta a linha às 12h45, entre o Bucentaure e o Redoutable. Dispara de ponta a ponta na popa da nau de Villeneuve.",
        p: { n1: [70, 23.5], n2: [60, 24], n3: [48, 24], c1: [78, 45.5] } },
      { t: "A luta vira um emaranhado de navios colados, a tiros de curta distância. O Victory fica preso ao Redoutable, que tenta abordá-lo, e o Téméraire atira uma carronada sobre o convés francês e o salva.",
        p: { n1: [72, 30, 90], n2: [64, 30, 90], n3: [64, 40, 90], c1: [80, 52, 90], c2: [64, 54, 90], c3: [80, 62, 90] } },
      { t: "Por volta das 13h15 ou 13h30, um atirador do Redoutable acerta Nelson. O Redoutable se rende às 13h55, com 99 homens aptos de 643. Nelson morre às 16h30.",
        p: { n1: [72, 31, 90], n2: [64, 31, 90] }, x: ["f3"] },
      { t: "O centro e a retaguarda se rendem, um a um. Dumanoir e a vanguarda, que quase não lutaram, saem para o norte com quatro navios, e serão capturados em 4 de novembro.",
        p: { f1: [72, 3], c2: [64, 55, 90] }, x: ["f3", "f4", "f5", "f6"] },
      { t: "No fim do dia, 17 navios aliados estão capturados e 1 explodiu. Onze, com Gravina, voltam a Cádiz. Nenhum navio britânico foi perdido. Uma tempestade depois destrói a maior parte dos prêmios.",
        p: { n1: [76, 33, 90], n2: [66, 33, 90], n3: [66, 43, 90] }, x: ["f3", "f4", "f5", "f6"] }
    ]
  },

  assaye: {
    terrain: [
      { t: "sea", x: 0, y: 36, w: 100, h: 5, l: "Rio Kaitna" },
      { t: "sea", x: 0, y: 0, w: 100, h: 4, l: "Rio Juah" },
      { t: "note", x: 84, y: 32, l: "Waroor" },
      { t: "note", x: 84, y: 45, l: "Peepulgaon" },
      { t: "note", x: 4, y: 67, l: "Stevenson só chega no dia seguinte" }
    ],
    units: [
      { id: "bI1", s: "a", k: "inf", w: 14, h: 4, l: "78º e cipaios (esquerda)" },
      { id: "bI2", s: "a", k: "inf", w: 10, h: 4, l: "74º e piquetes (direita)" },
      { id: "bGun", s: "a", k: "inf", w: 7, h: 3, l: "17 canhões" },
      { id: "bCav", s: "a", k: "cav", w: 10, h: 4, l: "Maxwell (19º Dragões)" },
      { id: "bAl", s: "a", k: "cav", w: 10, h: 4, l: "Cavalaria aliada" },
      { id: "mIn", s: "b", k: "inf", w: 28, h: 5, l: "Infantaria de Pohlmann" },
      { id: "mGun", s: "b", k: "inf", w: 20, h: 2, l: "100+ canhões" },
      { id: "mBer", s: "b", k: "inf", w: 12, h: 4, l: "Irregulares de Berar" },
      { id: "mCav", s: "b", k: "cav", w: 18, h: 5, l: "Cavalaria marata" },
      { id: "vil", s: "b", k: "camp", w: 8, h: 4, l: "Assaye" }
    ],
    steps: [
      { t: "Os maratas estão alinhados ao longo do Kaitna, de frente para o sul, onde fica o único vau que os britânicos conhecem. Wellesley chega do sul com os regulares, sem esperar Stevenson.",
        p: { mIn: [38, 30], mGun: [38, 33.5], mBer: [62, 27], mCav: [14, 22], vil: [60, 12],
             bI1: [24, 57], bI2: [44, 57], bGun: [34, 52], bCav: [34, 64], bAl: [60, 66] } },
      { t: "Wellesley deduz, ao ver as aldeias de Peepulgaon e Waroor, uma de cada lado do rio, que há um vau ali, além da esquerda marata. O engenheiro Johnson confirma, e a coluna vai para lá.",
        p: { bI1: [82, 50], bI2: [90, 50], bGun: [86, 56], bCav: [86, 62], bAl: [70, 62] } },
      { t: "Por volta das 15h, os britânicos cruzam sem oposição e formam linha na margem norte. Pohlmann gira sua linha em 90 graus para encarar o novo inimigo.",
        p: { bI1: [84, 29, 90], bI2: [84, 17, 90], bGun: [80, 23, 90], bCav: [95, 22, 90], bAl: [96, 34],
             mIn: [60, 24, 90], mGun: [66, 24, 90], mBer: [58, 12] } },
      { t: "Os canhões marata arrasam a infantaria e os canhões britânicos. Wellesley manda abandonar a artilharia e a infantaria avança de baionetas contra os canhões inimigos.",
        p: { bI1: [72, 29, 90], bI2: [72, 17, 90] }, x: ["bGun"] },
      { t: "Na esquerda, os highlanders do 78º e os batalhões de Madras chegam aos canhões e quebram a direita marata. O resto da linha vai cedendo.",
        p: { bI1: [67, 29, 90] }, x: ["bGun", "mIn"] },
      { t: "Na direita, o coronel Orrock lê mal as ordens e se desvia para a aldeia de Assaye. Abre-se um buraco, e os piquetes são quase destruídos. O 74º forma um quadrado.",
        p: { bI2: [66, 14] } },
      { t: "A cavalaria do coronel Maxwell carrega, salva o 74º e empurra os maratas de volta para o outro lado do Juah.",
        p: { bCav: [62, 16, 90], mBer: [58, 6] } },
      { t: "Os artilheiros que fingiam estar mortos voltam aos canhões e atiram nas costas do 74º. Wellesley lidera uma carga de cavalaria e retoma as peças. Dois cavalos foram mortos debaixo dele no dia.",
        p: { bCav: [66, 24, 90] }, x: ["bGun", "mIn", "mGun"] },
      { t: "Por volta das 18h, os irregulares de Berar deixam Assaye. A cavalaria marata quase não lutou. Os britânicos, exaustos e com mais de um terço de baixas, não perseguem.",
        p: { mBer: [50, 3] }, x: ["bGun", "mIn", "mGun", "mBer"] }
    ]
  },

  piramides: {
    terrain: [
      { t: "sea", x: 0, y: 0, w: 9, h: 70, l: "Nilo" },
      { t: "note", x: 84, y: 4, l: "Pirâmides, a vários km" }
    ],
    units: [
      { id: "dDes", s: "a", k: "inf", w: 11, h: 8, l: "Desaix" },
      { id: "dRey", s: "a", k: "inf", w: 11, h: 8, l: "Reynier" },
      { id: "dDug", s: "a", k: "inf", w: 11, h: 8, l: "Dugua" },
      { id: "dVia", s: "a", k: "inf", w: 11, h: 8, l: "Vial" },
      { id: "dBon", s: "a", k: "inf", w: 11, h: 8, l: "Bon" },
      { id: "dBik", s: "a", k: "inf", w: 5, h: 4, l: "Destac. (Biktil)" },
      { id: "mEmb", s: "b", k: "inf", w: 13, h: 6, l: "Embabeh: infantaria e canhões" },
      { id: "mCav", s: "b", k: "cav", w: 30, h: 6, l: "Cavalaria mameluca (Murad)" },
      { id: "mBik", s: "b", k: "inf", w: 9, h: 5, l: "Biktil" }
    ],
    steps: [
      { t: "Murad ancora a direita no Nilo, na aldeia fortificada de Embabeh, e a esquerda em Biktil. A cavalaria mameluca fica no centro. Ibrahim Bey observa da outra margem. Cada divisão francesa forma um quadrado.",
        p: { dDes: [78, 50], dRey: [65, 54], dDug: [52, 58], dVia: [39, 62], dBon: [26, 66], dBik: [88, 54],
             mEmb: [18, 14], mCav: [52, 18], mBik: [82, 14] } },
      { t: "Os franceses avançam para o sul em escalão: a direita (Desaix) à frente, e a esquerda (Bon) protegida pelo Nilo. Marcharam a noite toda.",
        p: { dDes: [78, 42], dRey: [65, 46], dDug: [52, 50], dVia: [39, 54], dBon: [26, 58], dBik: [88, 46] } },
      { t: "Desaix manda um destacamento ocupar Biktil. Alguns mamelucos tentam atacá-lo, sem sucesso.",
        p: { dBik: [84, 28] } },
      { t: "Murad lança a cavalaria contra os quadrados, carga após carga. O fogo de mosquete e dos canhões nos cantos castiga quem se aproxima.",
        p: { mCav: [52, 34] } },
      { t: "Um cavaleiro de armadura chega a poucos passos das linhas francesas, desafia para um duelo e é derrubado a tiros. As cargas se quebram.",
        p: { mCav: [54, 31] } },
      { t: "Por volta das 15h30, Murad manda Ayyub Bey liderar um ataque geral. Desaix, Reynier e Dugua seguram.",
        p: { mCav: [56, 38] } },
      { t: "A divisão de Bon se organiza em colunas de ataque e assalta Embabeh.",
        p: { dBon: [22, 30] }, x: ["mEmb"] },
      { t: "A defesa quebra. Centenas de mamelucos se afogam no Nilo. Murad, ferido na face, foge para o Alto Egito.",
        p: { mCav: [62, 12] }, x: ["mEmb", "mCav", "mBik"] }
    ]
  },

  copenhague: {
    terrain: [
      { t: "note", x: 4, y: 30, l: "Copenhague" },
      { t: "note", x: 84, y: 6, l: "Parker, na reserva" },
      { t: "note", x: 86, y: 62, l: "Norte ↑" }
    ],
    units: [
      { id: "dS", s: "b", k: "ship", w: 4, h: 9, l: "Sul: Jylland" },
      { id: "dC", s: "b", k: "ship", w: 4, h: 9, l: "Centro: Dannebrog" },
      { id: "dN", s: "b", k: "ship", w: 4, h: 9, l: "Norte" },
      { id: "dF", s: "b", k: "camp", w: 12, h: 5, l: "Fortaleza Trekroner" },
      { id: "bLead", s: "a", k: "ship", w: 4, h: 9, l: "Edgar, Ardent, Glatton" },
      { id: "bMid", s: "a", k: "ship", w: 4, h: 9, l: "Elephant (Nelson)" },
      { id: "bDef", s: "a", k: "ship", w: 4, h: 9, l: "Defiance" },
      { id: "bGr", s: "a", k: "ship", w: 4, h: 9, l: "Bellona e Russell" },
      { id: "bAg", s: "a", k: "ship", w: 4, h: 9, l: "Agamemnon" },
      { id: "bFr", s: "a", k: "ship", w: 3, h: 6, l: "Fragatas (Riou)" }
    ],
    steps: [
      { t: "Os dinamarqueses estão ancorados ao longo do canal do Rei, com o forte de Trekroner ao norte. Nelson ancora ao sul, a cerca de 3 km, na noite de 1º de abril, e Hardy sonda o canal.",
        p: { dS: [30, 48], dC: [30, 36], dN: [30, 24], dF: [34, 9],
             bLead: [56, 62], bMid: [50, 62], bDef: [44, 62], bGr: [62, 62], bAg: [68, 62], bFr: [38, 66] } },
      { t: "Às 9h30, os navios levantam âncora e sobem o canal, com o Edgar na frente.",
        p: { bLead: [46, 44], bMid: [46, 52], bDef: [46, 60], bGr: [54, 50], bAg: [54, 58], bFr: [38, 60] } },
      { t: "Cada navio britânico ancora diante de um adversário: o Edgar diante do Jylland, o Glatton diante do Dannebrog. O Defiance chega diante de Trekroner por volta das 11h30.",
        p: { bLead: [42, 42], bMid: [42, 30], bDef: [42, 18], bFr: [38, 12] } },
      { t: "O canal é traiçoeiro. O Bellona e o Russell encalham no banco do meio, mas continuam atirando. O Agamemnon ancora longe demais e quase não entra na luta.",
        p: { bGr: [52, 48, 25], bAg: [58, 58] } },
      { t: "Por volta das 13h30, Parker, na reserva, manda o sinal de retirada. Nelson leva a luneta ao olho ruim e não vê o sinal. As fragatas de Riou, que o viam melhor, obedecem e se afastam. Riou morre.",
        p: { bFr: [38, 40] } },
      { t: "Por volta das 14h, o fogo dinamarquês enfraquece. O Nyborg e o Aggershuus tentam fugir para o porto e afundam.",
        p: { }, x: ["dS"] },
      { t: "Nelson manda uma carta ao príncipe Frederico, sob bandeira de trégua, e por volta das 15h o fogo para. Às 16h30, o Dannebrog explode, e mais de 250 homens morrem.",
        p: { }, x: ["dS", "dC"] }
    ]
  }
});
