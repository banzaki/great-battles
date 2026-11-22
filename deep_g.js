// In-depth battles, batch g: guadalete, tours, talas, suiyang, hafrsfjord, lechfeld.
// Checked against the English and Portuguese Wikipedia articles, the Norwegian Wikipedia article on Hafrsfjord,
// the Heimskringla text and the sources those articles cite (Chronicle of 754, Widukind, Hornklofi, Tang histories).

Object.assign(GLOSSARY, {
  "visigodos": "Povo germânico que governou a maior parte da Península Ibérica, a partir de Toledo, depois da queda do Império Romano do Ocidente. Eram cristãos, e sua nobreza vivia disputando o trono.",
  "omíadas": "Dinastia de califas que governou o mundo muçulmano a partir de Damasco, de 661 a 750. No seu tempo o domínio árabe se estendeu do Atlântico ao vale do Indo.",
  "califa": "Chefe político e religioso da comunidade muçulmana, considerado sucessor do profeta Maomé.",
  "berberes": "Povos nativos do norte da África, conquistados pelos árabes no fim do século VII. Muitos se converteram ao islã e formaram a maior parte das tropas que invadiram a Península Ibérica.",
  "mozárabe": "Cristão que vivia sob domínio muçulmano na Península Ibérica. A Crônica de 754, nossa melhor fonte sobre a invasão, foi escrita por um mozárabe.",
  "francos": "Povo germânico que dominava a Gália (a atual França) e parte da Alemanha. Seu reino foi a base do futuro império de Carlos Magno.",
  "mordomo do palácio": "O cargo mais alto da corte dos reis francos. No século VIII os reis eram figuras fracas, e os mordomos, como Carlos Martel, governavam de fato.",
  "muralha de escudos": "Formação em que os soldados ficam lado a lado, com os escudos encostados, formando uma parede contínua de madeira e ferro.",
  "abássidas": "Dinastia de califas que derrubou os omíadas em 750 e passou a governar a partir de Bagdá. O nome vem de Abbas, tio do profeta Maomé.",
  "carlucos": "Confederação de tribos turcas da Ásia Central, conhecida por seus ferreiros e suas armas de ferro. Servia aos chineses, mas em Talas acabou do lado abássida.",
  "jiedushi": "Governador militar de uma região da China dos Tang, com poder sobre soldados, impostos e administração. O próprio An Lushan era um deles.",
  "saga": "Narrativa em prosa da Islândia medieval, escrita a partir do século XII, sobre reis e famílias do mundo nórdico. Mistura história, tradição oral e invenção.",
  "escaldo": "Poeta de corte nórdico, que compunha versos difíceis em louvor dos reis. Esses versos passavam de boca em boca e costumam ser mais antigos que as sagas.",
  "fiorde": "Braço de mar estreito e fundo, entre montanhas, típico da Noruega.",
  "drácar": "Navio de guerra viking, comprido e raso, com a proa enfeitada por uma cabeça de animal. A palavra vem de 'dragão'.",
  "berserker": "Guerreiro nórdico que, segundo as sagas, lutava em fúria, com pouca armadura e sem sentir dor. Os 'ulfhednar' vestiam peles de lobo.",
  "jarl": "Título nórdico de chefe ou nobre, abaixo do rei. Deu origem à palavra inglesa earl.",
  "magiares": "Povo de língua húngara que chegou à bacia do Danúbio por volta de 895 e dali atacou a Europa por mais de meio século. São os antepassados dos húngaros.",
  "harka": "O terceiro título do principado húngaro, depois do grão-príncipe e do gyula. Quem o tinha podia comandar campanhas militares.",
  "cota de malha": "Camisa de pequenos anéis de ferro entrelaçados, que protegia o corpo contra cortes e flechas.",
  "sacro império": "O Sacro Império Romano-Germânico, que se costuma contar a partir da coroação de Oto I em 962 e durou até 1806. Reunia, de forma frouxa, boa parte da atual Alemanha e da Itália."
});

Object.assign(DEEP, {
  guadalete: {
    war: "Conquista muçulmana da Península Ibérica (711–718)",
    hook: "Num verão de 711, um reino de séculos começou a ruir, e a Península Ibérica ficou por mais de sete séculos, em boa parte, sob domínio muçulmano.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século VIII, a Península Ibérica, chamada então de Hispânia, era governada pelos [[visigodos]] a partir de Toledo. Era um reino cristão, mas frágil: o trono passava de mão em mão por golpes e rivalidades entre famílias nobres. Do outro lado do estreito de Gibraltar, o império dos [[califas|califa]] [[omíadas]] tinha acabado de conquistar todo o norte da África. Por volta de 705–706 os muçulmanos tomaram Tânger e, provavelmente a partir daí, bandos de [[berberes]] começaram a cruzar o estreito para saquear cidades do sul da Hispânia.",
        "Quem comandava o lado muçulmano era Musa ibn Nusayr, governador da província da África do Norte (Ifriqiya). O homem que ele mandou atravessar o estreito foi Tariq ibn Ziyad, que muitos historiadores modernos acreditam ter sido um berbere liberto, antigo servo de Musa, e que aparece nas fontes como governador de Tânger.",
        { h: "O caminho até Guadalete" },
        { timeline: [
          ["705–706", "Os muçulmanos tomam Tânger. Começam as incursões berberes contra o sul da Hispânia."],
          ["710–711", "Roderico toma o trono depois da morte do rei Vitiza, num golpe. A Crônica de 754 diz que ele invadiu o reino 'tumultuosamente'."],
          ["Primavera de 711", "Tariq desembarca com seu exército perto do rochedo que ganhou o nome dele, Jabal Tariq, 'o monte de Tariq', depois Gibraltar."],
          ["Julho de 711", "Batalha de Guadalete. A data mais citada é 19 de julho; fontes árabes mais tardias dão 25 ou 26."],
          ["712", "Musa atravessa com reforços, que as fontes calculam entre 12.000 e 18.000 homens, e junta-se a Tariq."],
          ["714", "O califa al-Walid I chama os dois de volta a Damasco."]
        ]},
        "É preciso avisar logo uma coisa: quase tudo que sabemos sobre essa campanha vem de duas fontes de qualidade ruim para o historiador. A única contemporânea, a Crônica de 754, foi escrita por um [[mozárabe]], é confiável, mas vaga. Os relatos árabes que dão os detalhes foram escritos 150 anos ou mais depois, e os cronistas cristãos medievais encheram a história de lendas. Por isso vamos separar o que é bem apoiado do que é história contada para explicar uma queda tão rápida."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Roderico, último rei visigodo" },
        "Provavelmente nasceu depois de 687. Antes do trono, pode ter sido duque da Bética, a região de Sevilha. Ao chegar ao poder, foi contestado: arqueologia e moedas mostram que, no nordeste, outro rei, Áquila II, governava ao mesmo tempo, possivelmente um filho de Vitiza. Roderico dominava o sudoeste e Toledo. Os dois nunca parecem ter lutado entre si, provavelmente porque Roderico estava ocupado demais com os ataques vindos do sul. A Crônica de 754 o chama de usurpador.",
        { h: "Tariq ibn Ziyad, cerca de 670 – cerca de 720" },
        "De origem berbere, segundo a maioria dos historiadores modernos, subordinado de Musa. Foi ele quem comandou a invasão e, segundo as fontes, tomou Toledo. Dividiu o exército em quatro colunas, e uma delas, sob Mughith al-Rumi, tomou Córdoba. Quanto ao relacionamento com Musa, as fontes divergem: algumas falam em inveja, e al-Baladhuri diz apenas que Musa mandou uma 'carta severa' e que os dois se reconciliaram depois.",
        { h: "Musa ibn Nusayr" },
        "Governador da província e chefe de Tariq, tinha feito reconhecimentos e incursões em 710, e as notícias de saque e prisioneiros animaram a invasão. Provavelmente não esteve na batalha: a Crônica de 754 diz que ele atravessou com um grande exército em 711 e ficou cerca de quinze meses, mas não é claro se chegou antes ou depois de Guadalete. As fontes árabes tardias dizem que só veio depois do sucesso de Tariq.",
        { h: "Os que talvez traíram" },
        "Os relatos cristãos tardios dizem que dois grupos ajudaram os invasores: o conde Julião, senhor de Ceuta, que teria fornecido navios para vingar a filha, e os filhos do rei Vitiza, que teriam abandonado Roderico na batalha. Os historiadores desconfiam muito dessas histórias. A Crônica de 754 menciona não Julião, mas um berbere católico chamado Urbano, que pode ser a base real do personagem. Os filhos de Vitiza são, para estudiosos como Roger Collins, uma invenção posterior. O irmão do rei, Oppa, é histórico e foi encontrado por Musa em Toledo, mas o papel dele na batalha é incerto."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números das fontes não merecem confiança. A tradição árabe diz que Tariq desembarcou com 7.000 homens a cavalo e pediu mais 5.000, o que dá até 12.000. Roderico teria 100.000, número que os historiadores consideram absurdamente alto. A Crônica de Afonso III, do fim do século IX, chega a falar em 187.000 muçulmanos. Entre os modernos, David Levering Lewis calcula uns 12.000 homens de Tariq contra cerca de 33.000 visigodos. Roger Collins pensa em números muito menores, de alguns milhares de cada lado, e acha que o exército visigodo provavelmente não era muito maior que o invasor.",
        { note: "O único ponto de acordo é que os números das fontes antigas são exagerados. Por isso não usamos um número só." },
        { h: "O terreno" },
        "Ninguém sabe onde foi a batalha. As fontes árabes a colocam perto de 'Shedunya', provavelmente Medina Sidonia, junto de um lago chamado Wadi Lakka, que pode ser o rio Guadalete, o Barbate ou a região da Janda. A Crônica de 754 fala em 'promontórios Transductinos'. Thomas Hodgkin, seguindo um cronista medieval, apontou Jerez de la Frontera. Outros propõem as margens do Guadarranque ou do rio Almodóvar, na província de Cádiz. O nome 'Guadalete' ficou pela tradição, não por prova.",
        { h: "O que provavelmente aconteceu" },
        "Segundo a reconstrução de Lewis, a batalha foi precedida por cerca de uma semana de escaramuças perto da Janda. Os muçulmanos atacavam e recuavam depressa; os visigodos manobravam em massa, mais pesados. Na batalha principal, uma ala de cavalaria visigoda, que havia combinado em segredo abandonar o rei, ficou parada e abriu um buraco na linha.",
        "Por esse buraco entrou a cavalaria de Tariq, os mujaffafa, cerca de um terço do exército, em cotas de [[malha|cota de malha]] leve e turbantes sobre capacetes de metal. Atrás deles veio a infantaria. O exército visigodo se desfez, e o rei morreu nas últimas horas.",
        "A Crônica de 754 confirma só o essencial: alguns rivais de Roderico se juntaram ao exército 'com falsidade' e por 'ambição de reinar', e Roderico perdeu o reino. Os historiadores se perguntam se esses rivais planejaram abandoná-lo e foram também mortos, porque quase todos morreram na batalha ou na fuga, ou se Roderico os tinha matado antes, enfraquecendo o próprio lado. Ninguém tem a resposta.",
        { note: "A famosa fala de Tariq, em que o mar está atrás dos soldados e o inimigo na frente, aparece só séculos depois, em Ibn Khallikan (1274) e al-Maqqari (século XVI). Os estudiosos não a consideram palavras dele. A história de que ele queimou os navios para impedir a retirada aparece pela primeira vez mais de 400 anos depois, em al-Idrisi." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas muçulmanas, segundo Lewis, foram de cerca de 3.000 homens, um quarto da força, enquanto os visigodos sofreram muito mais, entre eles boa parte da nobreza. Roderico morreu, embora a Crônica não diga onde nem como. Lendas dizem que ele chegou numa carruagem puxada por oito mulas brancas e que sua sandália de ouro foi achada no rio Guadalete. Um cronista do século IX conta de uma lápide com o nome dele em Egitânia, hoje Idanha-a-Velha, em Portugal. Nada disso é confiável.",
        "Toledo, a capital, caiu logo depois. O metropolita Sindered fugiu e passou o resto da vida exilado em Roma, e a Crônica o critica por ter sido 'um assalariado, e não um pastor'. Musa chegou em 712 com reforços e, juntos, os dois tomaram Sevilha, derrotaram partidários de Roderico em Mérida e, em 713, avançaram para Galiza, Léon, Astorga e Saragoça. Em poucos anos dois terços da Península estavam sob domínio muçulmano.",
        "Nem tudo foi conquista pela espada. Pelo Tratado de Tudmir (713), o conde visigodo Teodomiro manteve o governo da região de Múrcia e o respeito à religião cristã, mediante um tributo. Esse acordo virou modelo para outras cidades. Só o pequeno reino das Astúrias e as terras bascas ficaram de fora do domínio muçulmano.",
        { h: "Por que importa" },
        "Começou o Al-Andalus, que durou até 1492, mais de 780 anos. O português guarda muitas palavras árabes dessa convivência, como 'azeite', 'açúcar', 'alface' e 'oxalá'.",
        { h: "Curiosidades e controvérsias" },
        { note: "A explicação tradicional para a queda rápida, a 'decadência' dos visigodos, não é aceita pelos especialistas hoje. Os historiadores mais cuidadosos lembram, em vez disso, que o trono já estava disputado, com Roderico de um lado e Áquila do outro, e que o rei estava ocupado com os ataques vindos do sul." },
        { note: "A lenda de Florinda (chamada também de Cava), filha do conde Julião, que teria sido seduzida ou violentada por Roderico, é tardia. O nome Florinda foi inventado depois. Julião aparece nas fontes árabes, mas a história da vingança não está nos relatos mais antigos." },
        { note: "Há tradições posteriores segundo as quais judeus da Península lutaram ao lado dos muçulmanos. A Crônica de 754 não diz isso, e os historiadores recebem o relato com cautela." }
      ]}
    ]
  },

  tours: {
    war: "Choque entre francos e omíadas na Gália (719–759)",
    hook: "Uma batalha que alguns chamam de salvação da Europa e outros de uma incursão que deu errado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 711, os exércitos omíadas atravessaram o estreito de Gibraltar e derrubaram o reino visigodo em poucos anos. A conquista não parou nos Pireneus. Em 719 eles tomaram a Septimânia, uma região do sul da Gália, e em 720 fizeram de Narbona sua base na Gália. Dali partiam incursões de saque para o norte.",
        "Do lado de lá estava o reino dos [[francos]], que na prática já não era governado pelos reis, mas por um [[mordomo do palácio]]. No sul da Gália, o duque Eudes da Aquitânia tinha se tornado independente durante a guerra civil de 715, e era ele quem levava os primeiros golpes.",
        { h: "O caminho até Tours" },
        { timeline: [
          ["719–720", "Os omíadas tomam a Septimânia e fazem de Narbona a sua capital na Gália."],
          ["721", "Eudes levanta o cerco muçulmano de Toulouse. O comandante inimigo, al-Samh, morre de ferimentos."],
          ["Cerca de 730", "Eudes, ameaçado pelos francos ao norte, alia-se ao chefe berbere Munuza e lhe dá a filha em casamento."],
          ["731", "Munuza se revolta contra Córdoba. Abd al-Rahman esmaga a revolta e depois derrota Eudes, em Bordeaux e no rio Garona."],
          ["Outubro de 732", "Batalha entre Tours e Poitiers."],
          ["735–739", "Eudes morre. Os omíadas retomam a ofensiva e Carlos faz campanhas na Septimânia."],
          ["759", "Pepino, o Breve, filho de Carlos, toma Narbona. É o fim da presença muçulmana na Gália."]
        ]},
        "Eudes, derrotado, não tinha para onde ir. Pediu ajuda ao rival, Carlos, e a condição foi se submeter à autoridade franca. Foi assim que dois rivais acabaram do mesmo lado."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Carlos Martel, cerca de 45 anos" },
        "Nascido por volta de 686–690, era filho de Pepino de Herstal, o mordomo que governou os francos antes dele. Quando o pai morreu, em 714, a viúva Plectrude, que queria que o neto dela herdasse, prendeu Carlos em Colônia. Ele escapou, foi aclamado mordomo da Austrásia antes do fim de 715 e, depois de vencer rivais em Amblève (716), Vinchy (717) e Soissons (718), tornou-se o governante de fato dos francos. O apelido 'Martel', o martelo, aparece em crônicas posteriores.",
        { h: "Abd al-Rahman al-Ghafiqi" },
        "Governador de al-Andalus, a Espanha muçulmana. Em 731, derrotou Munuza e Eudes e saqueou Bordeaux. Em 732 avançou para o Loire com um exército que, segundo as fontes, tinha andado mais depressa que seus carros de suprimento e se dividira em grupos de saque. O que ele buscava, segundo uma das fontes francas, era a abadia de São Martinho de Tours, cheia de tesouros.",
        { h: "Eudes, duque da Aquitânia" },
        "Depois de derrotado em Bordeaux e no Garona, ele pediu socorro a Carlos e se submeteu à autoridade franca para consegui-lo. Foi esse pedido que levou o exército de Carlos ao sul."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são um dos pontos mais disputados. A Crônica de 754 diz que os austrasianos, o povo de Carlos, eram mais numerosos. Muitas fontes ocidentais dizem o contrário: 30.000 francos, menos da metade dos muçulmanos. Os historiadores modernos dão faixas muito diferentes: os omíadas entre 20.000 e 80.000 e os francos entre 15.000 e 30.000. Edward Schoenfeld lembra que mais de 50.000 soldados muçulmanos seriam logisticamente impossíveis de alimentar tão longe de casa. Victor Davis Hanson põe os dois lados em torno de 20.000 a 30.000.",
        "O exército de Carlos era formado, em sua maioria, por infantaria experiente da Austrásia, com apoio de francos do Reno e de turíngios, alamanos, bávaros e frísios. Segundo as fontes, ele não tinha cavalaria pesada.",
        { h: "O terreno" },
        "O encontro aconteceu entre Tours e Poitiers, perto da junção dos rios Clain e Vienne. O local mais citado é Moussais-la-Bataille, e algumas fontes apontam Vouneuil-sur-Vienne. Carlos escolheu um terreno alto, com árvores na frente, o que, segundo as fontes árabes, atrapalhava as cargas de cavalaria.",
        { h: "Uma semana de espera e um dia de luta" },
        "Carlos surpreendeu os omíadas ao aparecer na frente deles e preferiu esperar. Durante cerca de uma semana houve só escaramuças. Abd al-Rahman, que queria saquear Tours, tinha que passar pelo exército que o esperava na colina. No sétimo dia, com o inverno chegando e a impaciência crescendo, ele decidiu atacar.",
        "A cavalaria omíada atacou várias vezes durante o dia, morro acima e entre as árvores. Os francos formaram uma [[muralha de escudos]] densa, parecida com uma falange. Fontes árabes dizem que a cavalaria chegou a abrir o quadrado mais de uma vez, mas os francos fecharam o buraco e seguraram a posição. A luta foi até a noite.",
        "A Crônica de 754 diz que os austrasianos mataram o chefe muçulmano, Abd al-Rahman, ao encontrá-lo, com um golpe no peito. A Crônica de 754 conta ainda que, ao amanhecer, os francos viram as tendas do inimigo ainda armadas, no mesmo lugar. Sem saber que estavam vazias, mandaram oficiais explorar o campo e descobriram que o exército omíada tinha se retirado em silêncio durante a noite.",
        { note: "Uma tradição, de relatos francos posteriores, diz que, no meio do dia, correu entre os muçulmanos o boato de que os francos ameaçavam o acampamento com o saque de Bordeaux, e que parte da cavalaria voltou para protegê-lo, o que abriu a linha. As fontes que consultei não permitem confirmar isso." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas reais são desconhecidas. A estimativa moderna mais usada dá cerca de 1.000 mortos e feridos francos e uns 12.000 omíadas mortos, feridos ou capturados. Os cronistas posteriores falam em 1.500 francos mortos contra 375.000 muçulmanos, mas os historiadores notam que esses números foram copiados do relato da vitória de Eudes em Toulouse, em 721, e são quase uma fórmula, não uma contagem.",
        "Os omíadas recuaram para além dos Pireneus. Mas não foram destruídos: a Vida de Pardulfo conta que, na volta, eles saquearam o Limousin. Eles mantiveram partes da Septimânia por mais cerca de 27 anos. Eudes morreu por volta de 735, e Carlos reconheceu seu filho Hunaldo como duque. Em 735 um novo governador de al-Andalus, Uqba ibn al-Hajjaj, invadiu a Gália e tomou Arles e Avinhão. Carlos fez campanhas na Septimânia em 736 e 739, tomou Avinhão e Nîmes, derrotou um exército de socorro no rio Berre (737), mas falhou diante de Narbona (737). Narbona caiu só em 759, nas mãos do filho dele, Pepino.",
        { h: "Por que importa" },
        "Para os francos, a campanha confirmou Carlos como o grande general do reino. O filho dele, Pepino, tornou-se o primeiro rei carolíngio, e o neto, Carlos Magno, o primeiro imperador do Ocidente desde a queda de Roma. Em 750, antes disso, o califado omíada tinha sido derrubado pelos [[abássidas]], e o poder muçulmano na Espanha passou para um emirado independente em Córdoba.",
        { h: "Curiosidades e controvérsias" },
        { note: "É uma das batalhas mais discutidas da história. Gibbon, no século XVIII, argumentou que uma vitória muçulmana teria levado o islã muito mais longe pela Europa. Muitos historiadores dos séculos XIX e XX concordaram. Mas há uma corrente revisionista, com nomes como Bernard Lewis, que lembra que as fontes árabes tratam o caso como um combate menor e que a campanha pode ter sido um grande saque, não uma invasão." },
        { note: "A data tradicional é 10 de outubro de 732, um sábado, segundo as crônicas. As fontes árabes chamam o campo de batalha de 'caminho dos mártires' (Balat al-Shuhada)." },
        { note: "O historiador Lynn White Jr. propôs que a adoção do estribo pela cavalaria teria impulsionado o feudalismo sob Carlos Martel e seus herdeiros. Já Heinrich Brunner dizia, no século XIX, que Carlos tomou terras da Igreja para financiar reformas militares; Paul Fouracre acha que não há provas suficientes de uma mudança tão decisiva." }
      ]}
    ]
  },

  talas: {
    war: "Disputa pela Ásia Central entre o império Tang e os árabes (715–751)",
    hook: "Dois impérios no auge se encontraram no meio da Ásia, e a batalha foi decidida por um aliado que trocou de lado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século VIII, a Ásia Central era uma colcha de pequenos reinos de oásis, cheios de caravanas da Rota da Seda. Dois grandes impérios queriam essas cidades ao mesmo tempo. Do leste vinha a dinastia Tang, que em 692 tinha tomado a bacia do Tarim aos tibetanos e vivia dos impostos dos oásis. Do oeste vinham os árabes, que já controlavam a região de Samarcanda e queriam avançar mais.",
        "As fricções começaram cedo. Em 715, um exército árabe e tibetano, aliado a uma facção local, ameaçou o reino de Fergana. Cerca de 10.000 soldados Tang o derrotaram em Namangan. Em 717, forças Tang e carlucos derrotaram outro ataque árabe e tibetano em Aksu. Em 735, chineses e omíadas chegaram a ser aliados contra os turgueses.",
        { h: "O caminho até Talas" },
        { timeline: [
          ["715", "Os Tang derrotam árabes e tibetanos em Namangan e restauram o rei de Fergana."],
          ["747", "Gao Xianzhi conquista Gilgit, no Himalaia."],
          ["748", "Abu Muslim toma Merv e começa a revolução abássida."],
          ["750", "Os abássidas derrubam os omíadas no rio Zab. Gao Xianzhi ataca o reino de Shash (Tashkent), e o rei é levado a Chang'an e executado."],
          ["Maio de 751", "O filho do rei de Shash pede ajuda aos abássidas. Abu Muslim manda reforços a Ziyad ibn Salih, que comandava os árabes em Samarcanda."],
          ["Julho de 751", "Batalha do rio Talas."]
        ]},
        "A faísca foi a decisão de Gao de atacar Shash depois de fazer a paz. O rei se rendeu, a cidade foi saqueada e o imperador Xuanzong mandou executá-lo na capital. Gao ainda enriqueceu com o saque, o que irritou os vizinhos. O filho do rei chamou os árabes."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Gao Xianzhi" },
        "Filho de um general de Goguryeo capturado pelos Tang quando esse reino caiu, em 668, nasceu na fronteira ocidental e ali subiu depressa. Chegou ao comando de toda a região em 748. Em 747 tinha tomado o Pequeno Bolü (região de Gilgit), aliado dos tibetanos. Ousado, mas pouco confiável: em Shash quebrou a paz depois de fazê-la, e lucrou com o saque. Em 755, na revolta de An Lushan, foi executado por ordem do imperador, acusado de covardia e corrupção, depois de defender o passo de Tong. Ele protestou inocência.",
        { h: "Ziyad ibn Salih" },
        "Comandante das forças árabes em Samarcanda. Sabemos pouco dele; as fontes só o descrevem como comandante da tropa que recebeu o reforço enviado pelo líder abássida Abu Muslim.",
        { h: "Li Siye" },
        "Tenente de Gao. Quando o exército se desfez, foi ele quem abriu caminho com a cavalaria blindada e salvou os sobreviventes. Foi ele quem convenceu Gao a não tentar lutar um sexto dia.",
        { h: "Os carlucos" },
        "Uma federação de tribos turcas famosa por seus ferreiros e suas armas de ferro. Gao os recrutou em Fergana para formar seu exército. Eram uma parte grande da tropa Tang, e sua lealdade dependia do lado que parecesse ganhar."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números variam muito conforme quem conta. Fontes chinesas dizem que os abássidas tinham 200.000 homens, incluindo tibetanos. Fontes árabes dizem que os chineses tinham 100.000. As próprias fontes chinesas dão ao lado Tang 30.000 homens: cerca de 10.000 soldados Tang e 20.000 [[carlucos]] mercenários. Outras versões trazem 20.000 chineses e 10.000 carlucos. Uma estimativa moderna fica em torno de 30.000 para cada lado.",
        { note: "Os números do lado árabe são os mais incertos. Os 200.000 vêm de fontes chinesas e são considerados exagerados." },
        { h: "O terreno" },
        "O rio Talas corre pela atual fronteira entre Cazaquistão e Quirguistão, perto da cidade de Taraz. Gao voltava de uma expedição pelos Pamires quando soube que os árabes avançavam em direção às Quatro Guarnições de Anxi, as bases Tang na bacia do Tarim. Deu meia-volta e os alcançou na margem sul do rio, perto de Taraz.",
        { h: "Cinco dias" },
        "A vanguarda árabe, sob Sa'd ibn Hameed, cavou trincheiras e formou uma linha densa de escudos e lanças. Aguentou até a chegada do grosso do exército de Ziyad, e os Tang recuaram na direção de Taraz. Daí em diante a batalha durou cinco dias, com muralhas de escudos, chuvas de flechas e cargas ocasionais de cavalaria. Nenhum lado rompeu o outro.",
        { h: "A traição" },
        "No quinto dia, os carlucos, que segundo o relato mais usado eram cerca de dois terços do exército Tang, mudaram de lado. Atacaram os Tang pelas costas enquanto os abássidas pressionavam pela frente. Gao resistiu até a noite e se retirou para o acampamento.",
        "Ele queria lutar de novo no dia seguinte. Li Siye argumentou que isso destruiria o exército. O exército Tang recuou para o leste, em direção às montanhas do Tian Shan. Na travessia, antigos aliados de Fergana o atacaram. Li Siye abriu caminho com a cavalaria blindada, e Gao e muitos oficiais escaparam, mas a maior parte da tropa foi capturada. Menos de 2.000 homens teriam voltado à Ásia Central. Num último gesto, Li Siye atacou os perseguidores árabes e lhes causou muitas baixas.",
        { note: "Fontes árabes contam diferente. Elas dizem que os Tang vieram ajudar os omíadas depostos contra os abássidas em Bucara e na Sogdiana, e alegam que Gao foi morto na batalha, o que é falso: ele morreu em 756. O historiador al-Dhahabi, do século XIII, diz que os carlucos sempre tinham sido aliados dos abássidas. Filippo Donvito supõe que esperavam uma ocasião para se libertar do domínio chinês." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A perda Tang foi pesada, mas as fontes divergem. Fontes chinesas falam em 20.000 a 30.000 mortos (o Tongdian, de 801, dá 30.000; o Livro Antigo de Tang, de 945, 20.000). Fontes árabes falam em 45.000 a 50.000 chineses mortos e 20.000 a 25.000 capturados. O geógrafo al-Maqdisi diz que Abu Muslim levou cerca de 5.000 prisioneiros chineses.",
        "Os abássidas ocuparam Shash e forçaram os Tang a sair da região de Gilgit. Mas o resto foi mais discreto do que se pensa. Em 753, o general Feng Changqing retomou parte de Gilgit, e Shash voltou a pagar tributo. Quatro embaixadas árabes chegaram a Chang'an entre 752 e 753, e as relações voltaram ao normal depressa. Em 756, o califa al-Mansur mandou de 3.000 a 4.000 soldados para ajudar o imperador contra An Lushan.",
        "Os carlucos nunca mais se voltaram contra os chineses. Em 753 submeteram-se aos Tang e receberam títulos. Só no meio do século X, com Satuq Bughra Khan, a maior parte deles se converteu ao islã.",
        { h: "Por que importa" },
        "A questão é saber se foi um divisor de águas. Para o historiador russo Vasily Bartold, a batalha decidiu se a civilização chinesa ou a muçulmana dominaria o Turquestão. Outros a chamam de choque de fronteira: as linhas quase não mudaram, e o que acabou com a presença Tang na Ásia Central foi a rebelião de An Lushan, em 755, que obrigou o império a recolher suas guarnições.",
        { h: "Curiosidades e controvérsias" },
        { note: "O papel: o historiador al-Tha'alibi, do século XI, conta que prisioneiros chineses de Talas ensinaram a fazer papel em Samarcanda. Os historiadores contestam: já havia papel na Ásia Central muito antes (fragmentos dos séculos IV e V foram achados perto de Turfan), e Jonathan Bloom acha que se fazia papel em Samarcanda décadas antes da batalha. Nenhuma fonte chinesa registra a transferência. O que se sabe é que a primeira fábrica de papel de Bagdá foi aberta em 794 ou 795." },
        { note: "Um dos prisioneiros foi Du Huan, que chegou a Bagdá, descreveu artesãos chineses de seda por lá e, libertado em 762, escreveu um relato de suas viagens." },
        { note: "Os soldados que al-Mansur mandou à China em 756 não voltaram todos: alguns se fixaram por lá, e há historiadores que ligam isso às origens da comunidade muçulmana chinesa." }
      ]}
    ]
  },

  suiyang: {
    war: "Rebelião de An Lushan (755–763)",
    hook: "Uma cidade com poucos milhares de soldados segurou mais de cem mil durante quase dez meses, e pagou um preço que ainda divide os historiadores.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em meados do século VIII, a China da dinastia Tang era o maior e mais rico império do mundo. Em dezembro de 755, An Lushan, um [[jiedushi]] do nordeste, marchou com seu exército contra o imperador. Em 756 tomou as duas capitais, Luoyang e Chang'an, e proclamou uma nova dinastia, a Yan. O imperador fugiu para Sichuan.",
        "Mas o norte inteiro nas mãos dos rebeldes não bastava. O Tang continuava vivo no sul, a bacia do Yangtzé, que fornecia o arroz e os impostos. Para chegar lá, o exército Yan tinha que passar por uma série de cidades ao longo do Grande Canal, e uma delas era Suiyang, a atual Shangqiu, na província de Henan, entre Kaifeng e Xuzhou.",
        { h: "O caminho até Suiyang" },
        { timeline: [
          ["Dez. 755", "An Lushan se revolta."],
          ["Início de 756", "Os rebeldes tomam Luoyang e proclamam a dinastia Yan."],
          ["Primavera de 756", "Zhang Xun resiste cerca de 60 dias em Yongqiu a um exército de 40.000."],
          ["Janeiro de 757", "An Lushan é assassinado pelo filho An Qingxu, que ordena a Yin Ziqi o cerco de Suiyang."],
          ["Fevereiro de 757", "Começa o cerco, segundo a datação que usamos."],
          ["Agosto de 757", "Nan Jiyun rompe o cerco para pedir socorro."],
          ["Fim de 757", "A cidade cai. Fontes dão de outubro a 24 de novembro."]
        ]},
        "Em Suiyang, o administrador Xu Yuan tinha guardado comida para um ano, mas um governador vizinho o fez dividir os estoques com outras fortalezas, e a reserva caiu muito. A cidade ainda tinha cerca de 60.000 habitantes, incluindo soldados, segundo as histórias dos Tang."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Zhang Xun, 48 anos" },
        "Nasceu em 709, passou nos exames imperiais e foi magistrado de condados pequenos. Quando a rebelião estourou, a sua chefia o obrigou a liderar uma delegação para se submeter ao general rebelde. Em vez disso, ele levou o grupo a um templo de Laozi e jurou lealdade aos Tang. Com 1.000 homens, assumiu a defesa de Yongqiu e resistiu cerca de 60 dias. No inverno de 756, depois que os suprimentos foram cortados, retirou-se para Ningling e juntou-se a Xu Yuan, em Suiyang.",
        { h: "Xu Yuan" },
        "Administrador da prefeitura de Suiyang, cuidava de suprimentos e reparos. Pediu ajuda a Zhang quando Yin Ziqi chegou e entregou a ele o comando militar, ficando com a logística.",
        { h: "Nan Jiyun" },
        "Oficial de Zhang, o arqueiro que acertou o olho esquerdo de Yin Ziqi, e o homem que tentou furar o cerco para buscar socorro.",
        { h: "Yin Ziqi" },
        "O general rebelde que recebeu a ordem de tomar Suiyang. Segundo as fontes, admirou Zhang e quis poupá-lo, mas seus subordinados temiam um motim."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Do lado Yan, 130.000 soldados no início, mais 20.000 de reforço, segundo os relatos chineses. São números de fontes antigas, difíceis de conferir. Do lado Tang, 6.800 homens, incluindo 3.000 que Zhang trouxe, mais 3.000 emprestados depois por um governador vizinho, dos quais só cerca de 1.000 chegaram.",
        { h: "O cerco" },
        "No início de 757, Yin Ziqi cercou a cidade. Zhang, com muito menos homens, usou truques. À noite, mandava tocar os tambores de guerra, e os rebeldes ficavam em alerta, sem dormir. Quando eles pararam de reagir, Zhang mandou uma dúzia de oficiais, entre eles Nan Jiyun e Lei Wanchun, com 50 cavaleiros cada um. O ataque, segundo as fontes, matou 5.000 inimigos.",
        "Outro episódio: Zhang mandou dar aos arqueiros pacotes de flechas feitas de capim. Espiões levaram a notícia a Yin de que os defensores estavam sem flechas. Num ataque, os Tang atiraram flechas de verdade, Zhang identificou Yin no meio dos soldados e mandou Nan Jiyun atirar. A flecha acertou o olho esquerdo de Yin, que sobreviveu, e a confusão ficou grande. Segundo as fontes, após 16 dias de combate os Yan tinham perdido 20.000 homens e Yin se retirou para reunir tropas. Voltou em julho, com mais 20.000 homens.",
        { note: "O famoso truque dos bonecos de palha vestidos de preto, descidos pelas muralhas para atrair flechas, aparece nas fontes ligado ao cerco anterior, o de Yongqiu (756), e não ao de Suiyang. Muitos relatos populares misturam os dois." },
        { h: "A fome" },
        "Em julho a comida estava acabando. Os soldados recebiam um pouco de arroz e catavam bichos, insetos, raízes. Em agosto não restava vegetação nem animal dentro das muralhas. Comeram chá, papel, cavalos, e depois pessoas. As Histórias dos Tang (de cerca de 945 e 1060) dizem que cerca de metade da população foi comida e dão números que vão de 20.000 a 50.000. O historiador David Graff considera esses números altos, porque os soldados comiam primeiro e muitos civis já devem ter morrido antes. Ele nota também algo que choca: era uma operação organizada, com uma hierarquia em que os primeiros eram as mulheres, depois os velhos e os meninos, e os homens em idade de lutar eram poupados. A Velha História dos Tang conta que Zhang matou a própria concubina e mandou os soldados comê-la, para mostrar que o sacrifício valia a pena.",
        { h: "O pedido de socorro" },
        "Em agosto, Zhang mandou Nan Jiyun com 29 homens tentar furar o cerco, e 27 conseguiram. Helan Jinming, governador de Linhuai, que tinha ciúme de Zhang e queria preservar suas tropas, recusou ajudar e ofereceu um banquete. Nan cortou um dedo da própria mão como prova da urgência, atirou uma flecha numa estátua de Buda e jurou matar Helan depois de vencer o inimigo. Lian Huan emprestou 3.000 soldados, e só cerca de 1.000 chegaram ao forte. A guarnição, com uns 1.600 homens e desesperada, decidiu aguentar.",
        { h: "A queda" },
        "Zhang e Xu decidiram não fugir, porque abandonar a cidade abriria o caminho para a região do Huai e do baixo Yangtzé. Lutaram até restarem menos de 400 vivos, fracos demais para esticar um arco. Yin perguntou a Zhang por que seus dentes estavam quebrados, e só três ou quatro estavam inteiros; Zhang respondeu que queria 'engolir os traidores rebeldes'. Yin tentou recrutar Zhang, Nan e Xu, e os três recusaram. Zhang, Nan e outros oficiais, uns 36 no total, foram executados. Xu foi morto em Yanshi, a caminho de Luoyang. Um exército de socorro Tang chegou três dias depois da queda."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "A cidade caiu, mas o cerco deu certo. As fontes chinesas dizem que Yin perdeu 120.000 soldados em mais de 400 combates, número que é quase certamente exagerado. O total de mortos Tang aparece como mais de 9.400. O que importa é o tempo: com Yin preso a Suiyang até o fim do ano, os rebeldes não conseguiram avançar para o sul, e o Yangtzé quase não foi tocado. Isso deu à corte tempo para reunir tropas e recursos. Por isso o cerco é considerado por muitos um ponto de virada da rebelião, embora os rebeldes o tenham vencido.",
        "Os Tang recuperaram as capitais ainda em 757, com ajuda de tropas uigures. A rebelião só terminou em fevereiro de 763, quando o último imperador Yan se matou.",
        { h: "Por que importa" },
        "Para os Tang, Zhang Xun virou herói de lealdade. A corte aceitou o argumento de Li Han, um dos jovens eruditos que o defendeu, de que o canibalismo foi o último recurso e que a defesa manteve o inimigo fora da região do Huai e do baixo Yangtzé. Zhang e Xu ganharam títulos póstumos e santuários em Suiyang e no Pavilhão Lingyan, em Chang'an. Poetas e escritores famosos, como Han Yu e Wang Anshi, enfeitaram a coragem dos defensores. O general Song Wen Tianxiang os citou como exemplo quando os mongóis invadiram.",
        { h: "Curiosidades e controvérsias" },
        { note: "Nem todos aceitaram. Alguns cortesãos da época diziam que seria melhor ter abandonado a cidade do que comer o povo que se devia proteger. Séculos depois, o erudito Wang Fuzhi e o poeta Yuan Mei criticaram duramente os defensores. Wang escreveu que matar pessoas para comer não é aceitável nem em caso de vida ou morte. David Graff vê o caso como um símbolo: Zhang virou ícone de lealdade, na leitura dele, 'não apesar do canibalismo, mas por causa dele', porque mostrava que a lealdade à dinastia vinha antes de tudo." },
        { note: "As datas: a Wikipédia em inglês dá o cerco como 18 de fevereiro a 24 de novembro de 757, mas o artigo sobre a rebelião dá de janeiro a outubro. As fontes antigas usam o calendário lunar, e a conversão não é exata." },
        { note: "A população: o censo chinês de 755 contou cerca de 52,9 milhões de pessoas. O de 764 contou 16,9 milhões. Parte dos historiadores atribui a queda a falhas administrativas e à perda do controle de províncias, não a mortes. Por isso as estimativas do total de mortos na rebelião, de 13 a 36 milhões segundo autores que usam esses dados, são muito discutidas." }
      ]}
    ]
  },

  hafrsfjord: {
    war: "Unificação da Noruega, segundo as sagas (séculos IX–X)",
    hook: "Uma batalha naval que as sagas transformaram na fundação da Noruega, e que os historiadores ainda discutem.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século IX, a Noruega não era um país. Era uma costa comprida e recortada, dividida em pequenos reinos de chefes locais, que viviam de pesca, agricultura e saques no exterior. A ligação entre eles era o mar: quem tinha navios mandava. É nesse mundo que as [[sagas|saga]] colocam Harald, que teria herdado o pequeno reino de Vestfold e começado a anexar vizinhos.",
        "Aqui é preciso cuidado com as fontes. Só existe um texto que pode ser da época: um poema atribuído ao [[escaldo]] Torbjörn Hornklofi, o Haraldskvæði, também chamado de Hrafnsmál, que só sobrevive dentro de sagas posteriores. O resto vem das sagas, escritas mais de 300 anos depois. A mais detalhada é a Heimskringla, de Snorri Sturluson, de cerca de 1230. Desde 1976, com Peter Sawyer, os historiadores duvidam de boa parte dessas histórias, e hoje alguns veem a tradição de Harald como mito de origem.",
        { h: "A data e a lenda" },
        { timeline: [
          ["Cerca de 850", "Nascimento de Harald, data aproximada. Os anos de vida e reinado variam muito: a Íslendingabók diz que viveu 80 anos e reinou 70."],
          ["872", "Data tradicional da batalha, fixada no século XIX por historiadores noruegueses. Foi a usada nas comemorações de 1872."],
          ["870–875", "Faixa proposta por Ólafía Einarsdóttir, nos anos 1970."],
          ["Cerca de 900", "Data defendida por Halvdan Koht e, depois, por Claus Krag."],
          ["1872 e 1983", "Os monumentos de Haraldshaugen e Sverd i fjell são inaugurados."]
        ]},
        "A incerteza vem da falta de fontes e do hábito das sagas de contar o tempo em invernos, não em anos de Cristo. Hoje a maioria dos estudiosos aceita que houve uma batalha, mas não concorda sobre quando e nem sobre quem estava de cada lado.",
        { note: "A lenda do cabelo: segundo a Heimskringla, Gyda, filha de Eirik de Hordaland, só aceitaria casar com Harald quando ele fosse rei de toda a Noruega. Ele jurou não cortar nem pentear o cabelo até conseguir. Passados uns dez anos, o jarl Ragnvald o cortou e Harald ganhou o apelido 'Cabelo Belo' (as versões variam). Antes disso, o poema de Hornklofi o chama de Lúfa, 'o desgrenhado'. Os historiadores desconfiam dessa história." }
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Harald Cabelo Belo" },
        "Era filho de Halfdan, segundo as sagas. O poema de Hornklofi o mostra como um rei guerreiro, cercado por berserkers e guerreiros com pele de lobo. Quanto à origem, Snorri o põe em Vestfold, no sudeste, mas os historiadores têm preferido o oeste da Noruega, onde ficam as cinco grandes propriedades reais que as sagas lhe atribuem, entre elas Utstein e Avaldsnes. Um detalhe que complica as coisas: os versos sobre a batalha nunca dizem o nome de Harald, e se Lúfa é Harald é discutido.",
        { h: "Os reis do oeste" },
        "Snorri lista os adversários: Eirik, rei de Hordaland; Sulke, rei de Rogaland, e seu irmão, o [[jarl]] Sote; Kjotve, o Rico, rei de Agder, e seu filho Thor Haklang, que a saga descreve como grande [[berserker]]; e Hroald Hryg e Had, o Duro, dois irmãos de Telemark. Os historiadores consideram que a maior parte dessa lista de reis pequenos é invenção de Snorri. Do que se pode confiar, o poema só nomeia Kjotve e Haklang."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes não dão número nenhum de navios ou de homens. A batalha pode ter sido a maior da Noruega até então, e por muito tempo depois, mas isso é uma suposição.",
        { h: "O terreno" },
        "Hafrsfjord é um [[fiorde]] pequeno na costa de Rogaland, onde hoje ficam Stavanger e Sola, no sudoeste da Noruega. A batalha foi essencialmente naval, e os navios eram [[drácares|drácar]]. Em volta do fiorde existem quatro antigos fortes locais, não datados e não escavados, e a arqueologia nunca achou na região túmulos de chefes ou armas ligadas à batalha. Uma pesquisa de sonar feita entre 2016 e 2020 encontrou formas no fundo do mar interpretadas como possíveis naufrágios, mas elas podem ser restos de criação de ostras do século XIX.",
        { h: "A batalha, segundo Snorri" },
        "Os reis do sudoeste juntaram navios e homens contra Harald. Ao saber, Harald preparou sua frota e navegou para o sul ao longo da costa, recrutando guerreiros em cada região. Eirik, de Hordaland, soube disso quando Harald já estava ao sul de Stad. Reuniu os homens que pôde e foi para o sul, ao encontro dos reforços que vinham do leste. A frota unida se encontrou ao norte de Jæren e entrou em Hafrsfjord, onde Harald os esperava.",
        "A batalha foi longa e dura, mas Harald ganhou. Eirik, Sulke e o jarl Sote morreram. Thor Haklang, berserker famoso, encostou seu navio no de Harald e atacou com fúria, até ele cair e seu navio ser esvaziado de homens. Kjotve fugiu para uma pequena ilha bem defensável perto da costa. Seus homens se espalharam: uns para os navios, outros para a terra, e quem foi para a terra fugiu para o sul, pela região de Jæren.",
        "Os versos de Hornklofi, citados por Snorri, dão a cor da cena: proas de dragão, escudos pendurados na borda dos navios, guerreiros de pele de lobo, os feridos deitados no fundo dos barcos e homens protegendo as costas com escudos contra uma chuva de pedras. A frase final conta os sobreviventes cruzando o mar até suas casas e bebendo hidromel para esquecer o susto.",
        { note: "Os versos e a saga não contam exatamente a mesma coisa. Nos versos, Kjotve chega com navios mercantes (knarrar) vindos do leste e os fugitivos voltam para o leste; há ainda menção a um campo de areia e a luta em terra. A lista de reis do sudoeste é de Snorri, e o historiador Johan Schreiner achava que ele reconstruiu o episódio com liberdade." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo as sagas, Harald encerrou a resistência do oeste da Noruega, principalmente de Rogaland, com alguns chefes da região do Sognefjord, e se proclamou rei de todos os noruegueses. Pode ter cobrado impostos de boa parte do país. Os historiadores de hoje veem isso de outra forma: a unificação foi um processo de séculos, que só se completou depois, com reis como Canuto e Harald Hardrada. Parte do leste, além disso, pode ter estado sob o rei dinamarquês antes da batalha.",
        "O norueguês Claus Krag defende que a batalha pode ter sido uma defesa do território de Harald contra inimigos do leste, e não uma guerra de conquista.",
        { h: "Por que importa" },
        "Hafrsfjord é, na tradição norueguesa, o momento em que o país nasce. Foi por isso que, em 1872, mil anos depois da data tradicional, o monumento de Haraldshaugen foi inaugurado em Haugesund, num momento de luta pela independência da Noruega. O morro, tradicionalmente tido como túmulo de Harald, não é comprovado. Em 1983, no próprio fiorde, em Stavanger, o artista Fritz Røed inaugurou o 'Sverd i fjell', as 'espadas na rocha': grandes espadas fincadas na rocha, à beira do fiorde.",
        { h: "Curiosidades e controvérsias" },
        { note: "A fuga para a Islândia: as sagas contam que muitos derrotados que não aceitaram Harald emigraram e povoaram a Islândia. Mas a Íslendingabók, mais antiga, diz que Harald cobrou impostos para impedir as pessoas de partirem e esvaziarem a Noruega. O historiador Sverrir Jakobsson acha que a história da fuga da tirania reflete as ansiedades da Islândia no começo do século XIII, quando a Noruega tentava dominar a ilha." },
        { note: "Os filhos de Harald: as sagas citam entre 11 e 20. Só cinco são confirmados por poemas da época: Érico Machado Sangrento, Haakon, o Bom, Ragnvald, Bjørn e Halvdan." },
        { note: "Uma pedra rúnica do final do século X, encontrada em Bregninge, na ilha dinamarquesa de Lolland, menciona o 'filho (ou neto) de Toka Haklang'. Koht achou que podia estar ligada a um participante da batalha, mas é só uma hipótese." }
      ]}
    ]
  },

  lechfeld: {
    war: "Incursões magiares na Europa (cerca de 899–955)",
    hook: "Em três dias de agosto de 955, os cavaleiros de Oto I acabaram com mais de meio século de ataques magiares à Europa.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Por mais de 50 anos, a Europa ocidental viveu sob o medo de um tipo de ataque que ela não sabia enfrentar: os [[magiares]], antepassados dos húngaros, instalados na planície do Danúbio desde cerca de 895, saíam de lá em bandos de cavaleiros arqueiros, saqueavam uma região e sumiam antes que os exércitos pesados se reunissem. Em batalha, atiravam flechas e fingiam recuar, para tirar os perseguidores da formação e matá-los aos poucos.",
        "Os ataques chegaram longe. Em 899 eles derrotaram o rei Berengário no norte da Itália. Em 907, em Pressburg, destruíram um exército bávaro, e o chefe dele morreu. Em 910 venceram em Augsburgo e no Rednitz. Depois chegaram à Borgonha, à Provença e até aos Pireneus. Em 937 alcançaram o Atlântico, e em 942, a Catalunha.",
        "Na Germânia, o pai de Oto, Henrique, o Passarinheiro, tinha vencido os magiares em Riade, em 933. Mas o filho tinha os próprios problemas. Em 953, o duque Liudolfo da Suábia, filho dele, e Conrado, duque da Lorena, genro dele, se revoltaram. Em 954 chamaram os magiares, que saquearam o Reno e atravessaram a França antes de voltar para casa por Borgonha e Itália.",
        { h: "O caminho até Lechfeld" },
        { timeline: [
          ["899", "Os magiares vencem o rei Berengário em Brenta e começam a saquear a Itália."],
          ["907", "Destroem um exército bávaro em Pressburg."],
          ["910", "Vencem em Augsburgo, na primeira batalha do Lechfeld, e no Rednitz."],
          ["933", "Henrique, o Passarinheiro, derrota os magiares em Riade."],
          ["953–954", "Liudolfo e Conrado se revoltam e chamam os magiares."],
          ["Início de julho de 955", "Embaixadores húngaros visitam Oto. Ele os despede com poucos presentes. Pouco depois, a invasão começa."],
          ["8 de agosto de 955", "Os magiares atacam a porta leste de Augsburgo. O bispo Ulrico lidera uma saída e eles recuam."],
          ["10 de agosto de 955", "Batalha do Lechfeld."],
          ["15 de agosto de 955", "Os chefes magiares são executados em Regensburg."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Oto I, 42 anos" },
        "Nascido em 23 de novembro de 912, rei da Francônia Oriental (a Germânia) desde 936, tinha um ano que começou mal. No começo de 955, o arcebispo de Salzburgo tinha passado para o lado dos rebeldes. Oto venceu os revoltosos em Mühldorf e tomou Regensburg depois de um cerco, em que os defensores se renderam por fome. Quando chegou a notícia da invasão, escolheu Ulm como ponto de encontro e concentrou as tropas no Danúbio, perto de Neuburg e Ingolstadt.",
        { h: "Conrado, o Vermelho" },
        "Nascido por volta de 922, filho do conde Werner V, foi duque da Lorena de 944 a 953 e casou-se em 947 com Liutgarda, filha de Oto. Sentiu-se traído quando Oto cedeu a Marca de Verona a Henrique da Baviera, e juntou-se à revolta de Liudolfo. Perdeu o ducado na Dieta de Fritzlar e acabou se submetendo ao rei. Em 955 comandava os francônios na batalha. Lutou, assim, ao lado do rei que tinha enfrentado.",
        { h: "Ulrico, bispo de Augsburgo" },
        "O bispo que dirigiu a defesa da cidade. Proibiu qualquer saída em campo aberto e reforçou o portão sul. No ataque de 8 de agosto, liderou ele mesmo a contra-ofensiva, e o comandante magiar morreu.",
        { h: "Bulcsú, Lél e Súr" },
        "Bulcsú (por volta de 910–955) era [[harka]], terceiro título do principado húngaro, e não pertencia à dinastia Árpád. Em 948 foi a Constantinopla, onde foi batizado na Hagia Sophia, com o imperador Constantino VII como padrinho, e recebeu o título de patrício. Em 954 comandou uma incursão contra os reinos francos do leste e do oeste, em que Worms pagou resgate. Em 955 liderou o cerco de Augsburgo, tendo Lél (ou Lehel) e Súr como comandantes subordinados."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os alemães tinham oito divisões, segundo o cronista Widukind de Corvey: três da Baviera, duas da Suábia, uma da Francônia, sob Conrado, uma da Boêmia, comandada por um filho do duque Boleslau I, e a divisão do rei, formada por saxões, turíngios e a guarda real. Se cada uma tinha cerca de 1.000 homens, como numa legião romana tardia, são 7.000 a 9.000. Os magiares, segundo os historiadores, eram 8.000 a 10.000 arqueiros a cavalo, além de infantaria e máquinas de cerco. Há quem lembre que a criação de cavalos limitava o seu número e que a chuva enfraquecia os arcos.",
        { note: "Os números do lado magiar são estimativas de historiadores, não contagens. As fontes da época não dão uma contagem confiável." },
        { h: "O terreno" },
        "O Lechfeld é a planície de inundação do rio Lech, ao sul de Augsburgo. O ponto exato é desconhecido. Parte da marcha alemã atravessou bosques, que escondiam os movimentos dos homens. Na historiografia húngara, o combate é chamado de segunda batalha de Augsburgo, porque a primeira, em 910, foi na mesma região.",
        { h: "Do cerco à batalha" },
        "Os magiares cercavam Augsburgo havia dias. Em 8 de agosto atacaram a porta leste e foram repelidos pela saída do bispo. O cerco recomeçou, mas foi levantado quando um traidor, Berchtold de Risinesburg, avisou que Oto estava perto. Nesse meio-tempo, o conde Dietpald de Dillingen escapou da cidade e foi ao acampamento do rei.",
        { formation: true },
        "Os alemães marchavam em fila pelo bosque: os bávaros na frente, depois os francônios de Conrado, a divisão do rei no centro, os suábios, e na retaguarda os boêmios, guardando a bagagem. Arqueiros magiares atravessaram o Lech e atacaram o flanco dos boêmios, que foram desbaratados. As duas divisões suábias foram muito feridas.",
        "Os magiares então pararam para saquear a bagagem. Foi o erro deles. Conrado atacou, os dispersou e voltou ao rei com estandartes capturados. O relato de Widukind é curto, e os detalhes dessa carga são incertos.",
        "Oto reuniu os homens, disse que suas armas eram melhores e atacou o grosso dos magiares. Reconstruções baseadas no manual de guerra romano de Vegécio sugerem que a infantaria atacou o centro, Conrado segurou a esquerda, a divisão real atacou pela direita, e Conrado então fez a curva para envolver o inimigo. É uma reconstrução, não o que dizem as fontes.",
        "Os magiares recuaram em formação, atravessando o Lech para o leste. Os alemães tomaram o acampamento e libertaram prisioneiros. Oto não perseguiu longe. O calor e as pesadas perdas, com três divisões da retaguarda quase destruídas, fizeram dessa tarde um empate. Oto passou a noite em Augsburgo.",
        { h: "A morte de Conrado" },
        "Widukind conta que Conrado afrouxou a [[cota de malha]] para respirar no calor, e uma flecha o atravessou na garganta, matando-o na hora. Seu corpo foi levado a Worms, onde o filho, Oto de Worms, o enterrou na catedral, uma honra então reservada a bispos e reis.",
        { h: "A perseguição" },
        "A destruição veio nos dias seguintes. Em 11 de agosto, Oto mandou guardar todas as travessias do rio. O duque Henrique da Baviera capturou vários líderes magiares. Alguns fugitivos se afogaram. Em 12 de agosto, chuva forte e enchentes atrasaram os fugitivos, e tropas alemãs que operavam a partir das fortificações construídas por Henrique, o Passarinheiro, mataram quase todos."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Bulcsú, Lél e Súr foram capturados e executados. As fontes ocidentais falam em enforcamento, e as bizantinas em empalamento ou crucificação. O local mais citado é Regensburg, e a data, 15 de agosto. Lél foi preso perto de Ebersberg por forças boêmias, em 11 de agosto. Outros prisioneiros foram mortos ou mandados de volta ao príncipe Taksony sem orelhas e sem nariz. Uma estimativa fala em cerca de 5.000 magiares mortos, mas as fontes antigas dizem que quase todos os fugitivos foram mortos. Os alemães tiveram também perdas altas, entre elas Conrado.",
        "O exército aclamou Oto como 'pai da pátria' e imperador. Em 2 de fevereiro de 962, o papa João XII o coroou imperador em Roma. Fundava-se, na prática, o [[sacro império]].",
        { h: "Por que importa" },
        "As incursões magiares ao Ocidente acabaram. O grão-príncipe Fajsz foi deposto e substituído por Taksony, e Oto não fez novas campanhas contra a Hungria. Os magiares se fixaram na bacia do Danúbio, aceitaram o cristianismo e, por volta do ano 1000, fundaram o reino da Hungria. Para Kristó, a derrota foi catastrófica, e ele e Makk perguntam por que os magiares abandonariam mais de meio século de saques se ela tivesse sido pequena. Para outros, foi o triunfo simbólico da cavalaria pesada sobre as forças nômades leves.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: a principal é uma biografia do bispo Ulrico, escrita em Augsburgo, que dá a visão alemã. A outra, mais curta, é a de Widukind. O historiador Hans Delbrück argumentou que os saxões não teriam chegado a tempo." },
        { note: "A lenda de Lehel: a Crônica Iluminada húngara conta que, antes de ser enforcado, Lehel bateu na testa do imperador com seu chifre, matando-o, e disse que Oto o serviria no além. É uma lenda popular, não história, provavelmente criada para suavizar a derrota, mostrando os chefes morrendo com honra." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lechfeld: {
    terrain: [
      { t: "sea", x: 92, y: 0, w: 8, h: 70, l: "Lech" },
      { t: "note", x: 72, y: 5, l: "Augsburgo (sob cerco)" },
      { t: "note", x: 50, y: 68, l: "Esquema fora de escala" }
    ],
    units: [
      { id: "gBav", s: "a", k: "cav", w: 14, h: 5, l: "Bávaros" },
      { id: "gFra", s: "a", k: "cav", w: 11, h: 5, l: "Francônios (Conrado)" },
      { id: "gKing", s: "a", k: "cav", w: 12, h: 5, l: "Divisão do rei" },
      { id: "gSwa", s: "a", k: "cav", w: 11, h: 5, l: "Suábios" },
      { id: "gBoh", s: "a", k: "cav", w: 10, h: 5, l: "Boêmios" },
      { id: "gBag", s: "a", k: "camp", w: 8, h: 5, l: "Bagagem" },
      { id: "hMain", s: "b", k: "cav", w: 20, h: 6, l: "Exército magiar" },
      { id: "hRaid", s: "b", k: "cav", w: 13, h: 5, l: "Arqueiros do ataque à retaguarda" }
    ],
    steps: [
      { t: "Os magiares cercam Augsburgo. Oto marcha em coluna pelos bosques: bávaros na frente, depois francônios, a divisão do rei, os suábios e, na retaguarda, os boêmios com a bagagem.",
        p: { hMain: [76, 14], hRaid: [58, 14], gBav: [76, 56], gFra: [62, 56], gKing: [48, 56], gSwa: [35, 56], gBoh: [23, 56], gBag: [12, 56] } },
      { t: "Avisado por um traidor de que Oto está perto, o chefe magiar levanta o cerco. Um grupo de arqueiros se separa, atravessa o Lech e vai atrás da coluna.",
        p: { hMain: [70, 32], hRaid: [38, 30] } },
      { t: "10 de agosto: os arqueiros atacam o flanco da retaguarda. Os boêmios são desbaratados, e as duas divisões suábias sofrem muito.",
        p: { hRaid: [20, 46] }, x: ["gBoh"] },
      { t: "Os magiares param para saquear a bagagem. É o erro que lhes custa caro.",
        p: { hRaid: [12, 52] }, x: ["gBag"] },
      { t: "Conrado volta com os francônios, ataca os saqueadores e os dispersa. Retorna ao rei com estandartes capturados.",
        p: { gFra: [22, 48], hRaid: [8, 44] }, x: ["hRaid"] },
      { t: "Oto reúne o exército, faz um discurso e vira a coluna para enfrentar o grosso dos magiares.",
        p: { gBav: [78, 46], gKing: [56, 46], gFra: [36, 46], gSwa: [26, 52], hMain: [66, 28] } },
      { t: "A cavalaria pesada alemã avança em formação cerrada. Segundo a reconstrução com base em Vegécio, a divisão real ataca pela direita e Conrado envolve pela esquerda.",
        p: { gBav: [76, 38], gKing: [56, 38], gFra: [38, 36], hMain: [66, 26] } },
      { t: "Os magiares recuam em ordem para o Lech. Conrado morre com uma flecha na garganta. Os alemães tomam o acampamento e libertam prisioneiros.",
        p: { hMain: [86, 22], gBav: [80, 34], gKing: [62, 34], gFra: [44, 34] } },
      { t: "11 e 12 de agosto: as travessias do rio são guardadas, e a chuva e as cheias atrasam os fugitivos. Quase todos são mortos, e os chefes são capturados.",
        p: { hMain: [95, 40], gBav: [84, 38], gKing: [70, 38] }, x: ["hMain"] }
    ]
  }
});
