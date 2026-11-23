// In-depth battles, batch au: mastros, karbala, constantinopla717, covadonga, granico (great-battles pack).
// Checked against the English, French, Spanish and Portuguese Wikipedia articles on the Battle of the Masts, Karbala,
// the Siege of Constantinople (717-718), Covadonga, Pelagius of Asturias, Alqama and the Granicus, and the works they cite
// (Theophanes, al-Tabari, Abu Mikhnaf via Tabari, Arrian, Plutarch, Diodorus, the Asturian chronicles, Haldon, Treadgold,
// Madelung, Devine, Hammond, Cosentino, Christides). Where sources disagree the text says so.
// No FORMATIONS entry for mastros (sources give no dispositions beyond "ships lashed together") nor for covadonga
// (the chronicles give no deployment or sequence of moves, only a cave, a narrow valley and a legendary landslide).

Object.assign(GLOSSARY, {
  "teófanes": "Monge bizantino (cerca de 760 a 818), autor da principal crônica grega dos séculos VII e VIII. Escreveu uns 150 anos depois dos fatos, copiando fontes mais antigas que se perderam.",
  "al-tabari": "Historiador persa (839 a 923) que escreveu em árabe a grande história do mundo muçulmano. Reuniu relatos de gerações anteriores, hoje perdidos, e muitas vezes põe versões diferentes lado a lado.",
  "primeira fitna": "A primeira guerra civil muçulmana (656 a 661), que começou com o assassinato do califa Uthman e terminou com Mu'awiya como califa. 'Fitna' quer dizer 'provação' ou 'discórdia'.",
  "xiitas": "Muçulmanos que acreditam que a liderança da comunidade cabia a Ali, primo e genro de Maomé, e aos descendentes dele. São uma minoria entre os muçulmanos e vivem sobretudo no Irã e no Iraque.",
  "ashura": "O décimo dia de Muharram, o primeiro mês do calendário islâmico. Os xiitas o dedicam ao luto por Husayn, com procissões, leituras e peças de teatro religioso. Muitos sunitas jejuam nesse dia.",
  "calendário da hégira": "O calendário islâmico, que conta os anos a partir da ida de Maomé de Meca para Medina, em 622. Tem 12 meses lunares, e por isso o ano é uns 11 dias mais curto que o nosso.",
  "abu mikhnaf": "Historiador de Cufa, morto por volta de 774, autor do relato mais antigo e detalhado de Karbala. O livro dele se perdeu, mas Tabari e outros copiaram longos trechos.",
  "tawwabin": "'Os penitentes': partidários de Ali em Cufa que se arrependeram de não ter ajudado Husayn e se levantaram contra os omíadas em 684 e 685. Foram derrotados em Ayn al-Warda.",
  "corno de ouro": "O braço de mar estreito que corta Constantinopla pelo norte e forma o porto da cidade. Fechá-lo com uma corrente impedia a entrada de navios inimigos.",
  "búlgaros": "Povo de origem nômade que se misturou aos eslavos e formou, no fim do século VII, um reino nos Bálcãs, ao norte do Império Bizantino. Era ora inimigo, ora aliado de Constantinopla.",
  "cristãos coptas": "Os cristãos do Egito, descendentes dos antigos egípcios. Na época das conquistas árabes, a maioria continuava cristã e pagava imposto aos novos governantes.",
  "wali (governador)": "Governador de uma província no califado, nomeado pelo califa ou por um governador acima dele.",
  "jizya": "Imposto que os governantes muçulmanos cobravam dos súditos não muçulmanos, em troca de proteção e de isenção do serviço militar.",
  "astures": "Povo das montanhas do noroeste da Península Ibérica, na atual Astúrias, que os romanos e depois os visigodos nunca chegaram a dominar por completo.",
  "sarracenos": "Nome que os cristãos medievais davam aos muçulmanos do Mediterrâneo. Nas crônicas asturianas, é como os árabes e berberes aparecem.",
  "prodromoi": "Cavalaria leve macedônia, armada de lança, usada para reconhecer o terreno e abrir caminho. O nome quer dizer 'os que correm na frente'.",
  "agrianos": "Lanceiros e arremessadores de dardo da Agriânia, uma região dos Bálcãs ao norte da Macedônia. Eram a tropa leve de elite de Alexandre.",
  "peônios": "Povo da Peônia, ao norte da Macedônia, aliado de Alexandre. Fornecia cavalaria leve.",
  "arriano": "Arriano de Nicomédia (século II d.C.), historiador grego e oficial romano. Sua história de Alexandre é a mais confiável que se conserva, mas foi escrita uns 450 anos depois, a partir de relatos de oficiais do rei, como Ptolomeu."
});

Object.assign(DEEP, {
  mastros: {
    war: "Guerras árabo-bizantinas (a partir de 634)",
    hook: "Pela primeira vez uma frota árabe enfrentou a marinha bizantina em mar aberto, e o imperador quase morreu.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em poucos anos, depois da morte de Maomé em 632, os exércitos árabes tomaram a Síria e o Egito, que eram dos [[bizantinos]], e destruíram o Império Persa. Bizâncio perdeu o Egito de vez em 642. Mas os árabes eram homens de deserto e de cavalo, e o Mediterrâneo continuava sendo um lago bizantino. Quem tinha navios, tripulações e portos era o imperador.",
        "Isso começou a mudar com Mu'awiya, governador da Síria. Em 649 ele organizou um ataque por mar a Chipre. No Egito, o governador Abdallah ibn Sa'd, que governava desde 645, construiu uma marinha forte. Em 646, ele repeliu um contra-ataque bizantino a Alexandria.",
        { h: "O caminho até a batalha" },
        { timeline: [
          ["642", "Os bizantinos abandonam o Egito de vez."],
          ["649", "Mu'awiya ataca Chipre por mar."],
          ["654", "Os árabes voltam a atacar ilhas do Egeu, entre elas Rodes. Uma frota segue pela costa sul da Anatólia."],
          ["654 ou 655", "Constante II sai ao mar com a frota imperial. As duas frotas se encontram ao largo da Lícia."],
          ["656", "Começa a [[primeira fitna]], a guerra civil muçulmana."]
        ]},
        "A data da batalha não é segura. [[Al-Tabari]] conta duas: o ano 31 da Hégira (651 a 652), por um informante, e o ano 34 (654 a 655), por outro. A crônica do armênio Sebeos e a de [[Teófanes, o Confessor|teófanes]] apontam para a data mais tardia, que a maioria dos historiadores segue."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Constante II, cerca de 25 anos" },
        "Neto do imperador Heráclio, chegou ao trono em 641, ainda menino. Governava um império que tinha perdido a Síria, o Egito e boa parte da riqueza, e que precisava impedir a chegada dos árabes ao mar Egeu. Por isso saiu ele mesmo ao mar. Segundo Teófanes, antes da batalha o imperador sonhou que estava em Tessalônica. Um intérprete leu o nome em grego como 'dá a vitória a outro'.",
        { h: "Do lado árabe" },
        "As fontes divergem sobre quem comandava a frota. Muitos relatos apontam Abdallah ibn Sa'd, o governador do Egito, que tinha criado a marinha. Outros citam Abu al-A'war, um general de Mu'awiya. Mu'awiya, que mais tarde se tornaria califa, era quem impulsionava a guerra no mar e, em 654, comandava ele mesmo uma campanha por terra na Capadócia.",
        { note: "Por que a lista de comandantes muda de fonte para fonte? Os relatos árabes foram escritos mais de um século depois e muitas vezes são versões que se contradizem. Aqui seguimos o que os historiadores modernos dizem: o comando é incerto." }
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Ninguém sabe ao certo quantos navios havia. Teófanes fala em 1.000 navios bizantinos, número que os historiadores consideram exagerado. Estimativas modernas ficam por volta de 500, ou de 300 se não contarmos os navios de apoio. Para o lado árabe, a estimativa que mais circula é de uns 200 navios. Em todos os casos, o que importa é que os bizantinos tinham mais navios e muito mais tradição.",
        { h: "O terreno" },
        "O mar aberto ao largo da costa da Lícia, no sul da atual Turquia, perto do porto de Fênix (hoje Finike). Era raro uma grande batalha naval em mar aberto, longe de um estreito ou de uma enseada. As fontes não descrevem ilhas, baixios ou ventos que ajudassem um dos lados. O nome vem do árabe, Dhat al-Sawari, 'a dos mastros'.",
        { h: "A batalha" },
        "O que sabemos é pouco. Segundo Tabari, os dois lados se alinharam, e os navios foram presos uns aos outros, de modo que a luta virou uma [[abordagem]] em grande escala: soldados lutando nos conveses como se estivessem em terra. Isso, segundo vários autores, favorecia os árabes, que tinham mais experiência de combate corpo a corpo do que de manobra no mar.",
        "As fontes divergem sobre o tempo: Tabari fala de mar agitado, e alguns estudos modernos descrevem calmaria. O que elas dizem em comum é que a luta foi muito dura e que as perdas foram pesadas nos dois lados. Os árabes venceram. A frota bizantina ficou muito reduzida, e o número de navios perdidos é incerto: o número mais repetido, 500, é uma estimativa moderna sem fonte clara.",
        "Segundo Teófanes, Constante II só escapou trocando de roupa com um de seus oficiais. É o tipo de detalhe que os historiadores tratam com cuidado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Foi a primeira grande vitória naval árabe sobre Bizâncio e a primeira vez que o mar deixou de ser território exclusivo dos bizantinos. Mas os árabes não tiraram proveito imediato. Em 656, o califa Uthman foi assassinado, e os muçulmanos entraram em guerra entre si. O ataque a Constantinopla só voltou com força nos anos 670, no primeiro grande cerco árabe da cidade.",
        "O armênio Sebeos conta que a frota árabe seguiu até Constantinopla, que uma tempestade afundou navios carregados de máquinas de cerco e que o exército de Mu'awiya chegou a Calcedônia, em frente à capital, mas teve de voltar. O historiador Ibn Kathir diz que Mu'awiya avançou até Crisópolis. As fontes árabes mais antigas não falam disso.",
        { h: "Por que importa" },
        "A batalha mostra que o poder naval não ficou nas mãos de Bizâncio por lei natural: bastou uma geração para os árabes montarem uma marinha. Constante II sobreviveu: em 663 mudou-se para a Itália e foi assassinado em Siracusa, em 668.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: Teófanes escreveu cerca de 150 anos depois, e Tabari, mais de 250. O relato mais próximo dos fatos é o do armênio Sebeos, de cerca de 660, que fala sobretudo do que veio depois." },
        { note: "Os historiadores discutem por que os árabes foram à Lícia. Alguns, como Stratos e Lombard, pensam que buscavam madeira para navios na Ásia Menor. Vassilios Christides acha essa explicação pouco fundamentada." }
      ]}
    ]
  },

  karbala: {
    war: "Segunda Fitna (680 a 692)",
    hook: "Em um dia de outono de 680, cerca de 72 homens recusaram jurar lealdade ao califa, e o massacre que se seguiu ainda é lembrado todos os anos.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 661, Mu'awiya, governador da Síria, tornou-se califa e fundou a dinastia dos [[omíadas]], com capital em Damasco. Fez algo que muita gente não aceitou: indicou o filho, Yazid, como sucessor. O cargo passava a ser hereditário, como num reino. Para quem lembrava que o califa devia ser escolhido entre os próprios muçulmanos, aquilo era uma ruptura.",
        "Um dos que recusaram foi Husayn, neto do profeta Maomé, filho de Ali e de Fátima. Quando Mu'awiya morreu, em 680, Yazid exigiu que Husayn jurasse lealdade. Husayn não jurou. Foi para Meca, e de lá chegaram cartas de partidários dele em Cufa, no Iraque, convidando-o a liderar uma revolta.",
        { h: "O caminho até Karbala" },
        { timeline: [
          ["680", "Morre Mu'awiya. Yazid sucede e exige que Husayn jure lealdade."],
          ["Antes de setembro", "Husayn manda o primo Muslim ibn Aqil a Cufa. O governador Ibn Ziyad esmaga a revolta e mata Muslim."],
          ["9 set 680", "Husayn deixa Meca com cerca de 50 homens e a família. Alguns se juntam a ele no caminho, e muitos o abandonam quando chega a notícia da morte de Muslim."],
          ["2 out", "Interceptado por uma vanguarda de cerca de 1.000 homens, Husayn chega a Karbala."],
          ["3 out", "Chega Umar ibn Sa'd, com cerca de 4.000 homens."],
          ["Dias seguintes", "O acesso ao Eufrates é cortado por cerca de três dias. As negociações fracassam."],
          ["9 de Muharram (9 out)", "À tarde, os homens de Ibn Sa'd avançam para o acampamento. Husayn pede uma noite de prazo, e eles aceitam."],
          ["10 de Muharram (10 out)", "A batalha."]
        ]},
        "Husayn seguia para Cufa quando a revolta de lá já tinha sido esmagada. Quando soube da morte de Muslim, pensou em voltar, mas foi convencido a continuar. Antes, Ibn Abbas e Ibn al-Zubayr, dois notáveis de Meca, tinham tentado dissuadi-lo de ir, ou ao menos de levar mulheres e crianças. As datas seguem o [[calendário islâmico|calendário da hégira]]: o dia 10 de Muharram do ano 61 corresponde a 10 de outubro de 680."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Husayn ibn Ali" },
        "Neto de Maomé, filho de Ali, o quarto califa, e de Fátima, a filha do profeta. Era respeitado por pertencer à família do profeta. Os historiadores discutem o que ele queria. Julius Wellhausen o via como um pretendente ambicioso e mal preparado. Wilferd Madelung e Laura Veccia Vaglieri, ao contrário, destacam a convicção religiosa dele. Syed Husain Jafri defende que Husayn buscou o martírio.",
        { h: "Yazid I e Ubayd Allah ibn Ziyad" },
        "Yazid era o califa que herdou o trono do pai. Ibn Ziyad, governador de Cufa, é o homem que as fontes mostram agindo: esmagou a revolta de Muslim, mandou cortar o acesso ao rio e exigiu a submissão de Husayn antes de qualquer acordo. Depois do massacre, Yazid teria amaldiçoado Ibn Ziyad, dizendo que teria poupado Husayn. Wellhausen e Madelung acham que isso foi um gesto para tirar o próprio califa do centro da culpa.",
        { h: "Os outros nomes" },
        "Do lado omíada, Umar ibn Sa'd comandava os cerca de 4.000 soldados, Amr ibn al-Hajjaj conduzia a ala direita, Shimr ibn Dhi al-Jawshan, a esquerda. Foi Shimr quem pressionou por um ataque. Al-Hurr ibn Yazid, que comandava a vanguarda de mil homens que interceptou Husayn, trocou de lado na manhã da batalha. Do lado de Husayn, Zuhayr ibn al-Qayn comandava a ala direita, Habib ibn Muzahir a esquerda, e seu meio-irmão Abbas carregava o estandarte."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A maior parte dos relatos fala em cerca de 72 homens com Husayn: 32 a cavalo e 40 a pé. Algumas fontes falam em 45 cavaleiros e 100 a pé. Com eles havia mulheres e crianças. Do lado omíada, a maioria das fontes fala em cerca de 4.000 homens, com cavalaria blindada e uns 500 arqueiros. Fontes xiitas dão números muito maiores, até 30.000.",
        { h: "O terreno" },
        "Uma planície árida a oeste do Eufrates, perto de Karbala, hoje no Iraque. O acampamento de Husayn ficava afastado do rio. Os homens de Ibn Sa'd, ao posicionar cerca de 500 cavaleiros no caminho da água, cortaram o acesso. Husayn mandou amarrar as tendas umas às outras e encher de lenha uma vala atrás delas, para acender se fosse atacado.",
        { h: "A noite antes" },
        "Em 9 de Muharram, Husayn mandou Abbas pedir uma noite de prazo para rezar. Ibn Sa'd aceitou. Husayn disse a seus homens que quem quisesse podia partir no escuro, pois só ele era procurado. Poucos foram. A noite passou em oração.",
        { h: "A batalha em nove momentos" },
        { formation: true },
        "Primeiro, o alinhamento. Husayn pôs Zuhayr na ala direita e Habib na esquerda, com o estandarte nas mãos de Abbas. Do outro lado, Ibn Sa'd pôs Amr ibn al-Hajjaj numa ala, Shimr na outra, e a cavalaria e os arqueiros no meio.",
        "Segundo, o discurso. Depois da oração da manhã, Husayn montou e falou aos homens de Cufa: lembrou quem era, reprovou os que o tinham chamado e agora lutavam contra ele, e pediu para ser deixado ir embora. Os homens de Ibn Sa'd responderam que antes teria de se submeter a Yazid, e ele recusou. As palavras comoveram al-Hurr, que atravessou o campo e se juntou a Husayn.",
        "Terceiro, as flechas e os duelos. A luta começou com chuvas de flechas, seguidas de combates individuais. Zuhayr tentou dissuadir os homens de Ibn Sa'd, sem sucesso.",
        "Quarto, os primeiros ataques. Amr ibn al-Hajjaj atacou pela ala de Zuhayr, e Shimr pela de Habib. Os dois ataques foram rechaçados.",
        "Quinto, a cavalaria. Os omíadas lançaram ataques de cavalaria. Os cavaleiros de Husayn acabaram lutando a pé, depois que os cavalos foram feridos.",
        "Sexto, o fogo. Ibn Sa'd mandou queimar as tendas, menos a de Husayn. O fogo atrapalhou o avanço dos próprios omíadas por algum tempo.",
        "Sétimo, a tarde. Depois da oração do meio-dia, os companheiros de Husayn estavam cercados, e quase todos foram mortos.",
        "Oitavo, os parentes. Então os familiares entraram na luta. Ali al-Akbar, filho de Husayn, foi morto, assim como meios-irmãos dele e filhos de seus irmãos. Tabari e Baladhuri, que copiam Abu Mikhnaf, não descrevem a morte de Abbas. Al-Mufid, um estudioso xiita do século XI, conta que Abbas foi separado de Husayn perto do rio, cercado e morto. Uma criança pequena que Husayn segurava no colo foi atingida por uma flecha e morreu.",
        "Nono, o fim. Husayn foi atingido por uma flecha na boca quando tentava chegar ao rio e, depois, por golpes na cabeça, na mão e no ombro. Caiu e foi morto por Sinan ibn Anas, que o decapitou, segundo os relatos mais citados. O corpo tinha mais de 60 ferimentos.",
        { note: "A fonte principal é o Maqtal al-Husayn de [[Abu Mikhnaf|abu mikhnaf]], que se perdeu: o que temos vem de trechos copiados por Tabari e Baladhuri. Henri Lammens achava que a luta foi curta e pouco mais que um massacre. Vaglieri e Madelung consideram os relatos detalhados confiáveis e acham que a luta durou boa parte do dia." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Do lado de Husayn morreram 70 ou 72 homens, cerca de vinte deles descendentes de Abu Talib. Ibn Sa'd teria perdido 88 homens, que mandou enterrar antes de partir. Os pertences de Husayn foram saqueados. A família e as cabeças dos mortos foram levadas a Ibn Ziyad, em Cufa, e depois a Yazid, em Damasco. O filho de Husayn, Ali Zayn al-Abidin, foi poupado depois do apelo da tia, Zaynab. Alguns dias depois, as mulheres foram compensadas pelo que tinham perdido e mandadas de volta a Medina.",
        { h: "Consequências" },
        "A morte do neto do profeta chocou muitos muçulmanos e alimentou a segunda guerra civil. Em 684 e 685, os [[Tawwabin|tawwabin]] se levantaram em Cufa contra os omíadas e foram derrotados em Ayn al-Warda. Pouco depois, Mukhtar al-Thaqafi tomou boa parte do Iraque por cerca de 18 meses, mandou executar Umar ibn Sa'd e Shimr, entre outros, e foi morto em 687. Seus seguidores deram origem a movimentos que, mais tarde, ajudaram a derrubar os omíadas, em 750.",
        { h: "Por que importa" },
        "Karbala é o centro da memória dos [[xiitas]]. Todo ano, no dia do [[Ashura|ashura]], os xiitas lembram a morte de Husayn, com procissões, leituras e peças de teatro religioso chamadas ta'ziyeh. O santuário em Karbala recebe peregrinos o ano todo, e em especial no Arba'in, quarenta dias depois do Ashura. Muitos sunitas também respeitam Husayn como neto do profeta, mas o peso do episódio na vida religiosa é muito maior no xiismo.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: 72 combatentes contra 4.000 é a conta que mais se repete, mas as fontes xiitas e as sunitas não coincidem, e os cronistas não tinham como contar. O que quase todos aceitam é que a diferença de forças era enorme." },
        { note: "As fontes: Abu Mikhnaf era de Cufa e costuma ser descrito como simpatizante da causa de Ali, e Tabari o copiou. Isso é motivo de cautela, mas quase todos os historiadores modernos tratam o relato como a base mais sólida que temos." }
      ]}
    ]
  },

  constantinopla717: {
    war: "Guerras árabo-bizantinas (a partir de 634)",
    hook: "Um ano de cerco, fogo grego, neve e fome: o último grande ataque árabe a Constantinopla terminou em desastre.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Nos cerca de 80 anos desde a primeira conquista árabe de terras bizantinas, o Império perdeu a Síria, o Egito e o norte da África. Constantinopla já tinha resistido a um primeiro cerco, entre 674 e 678. Agora o califado omíada, que ia do Atlântico ao vale do Indo, estava no auge, e o califa Sulayman decidiu tomar a capital de vez, o que deixaria o Império sem cabeça.",
        "Do outro lado, Bizâncio vinha de décadas de caos: entre 695 e 717, uma série de golpes derrubou imperador após imperador, período que os historiadores chamam de Vinte Anos de Anarquia. O último deles, Teodósio III, foi derrubado por um general, Leão, que se aliou aos árabes enquanto lhes foi útil e depois os enganou. Leão entrou em Constantinopla em 25 de março de 717 e foi coroado imperador.",
        { h: "O caminho até as muralhas" },
        { timeline: [
          ["25 mar 717", "Leão III entra em Constantinopla depois da abdicação de Teodósio III."],
          ["Verão 717", "Maslama atravessa o Helesponto, em Abidos, e devasta a Trácia."],
          ["Meados de julho ou agosto", "O exército árabe chega às muralhas e começa o cerco por terra."],
          ["1º set", "A frota árabe chega. Dois dias depois, entra no Bósforo."],
          ["Set 717", "O califa Sulayman morre, e Umar II o sucede."],
          ["Inverno 717-718", "Neve por mais de três meses, fome e doença no acampamento árabe."],
          ["Primavera 718", "Chegam as frotas do Egito e da África, que são destruídas."],
          ["15 ago 718", "Os árabes levantam o cerco."]
        ]},
        "As fontes divergem sobre o começo exato do cerco. O patriarca Nicéforo sugere meados de julho, e outras fontes apontam agosto. O dia 15 de agosto é certo para o fim, e é possível que Teófanes tenha repetido essa data no começo."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Leão III, o Isauro" },
        "Um general que chegou ao trono poucos meses antes de os árabes aparecerem diante da cidade. Sabia negociar e enganar. Segundo fontes árabes, ofereceu a Maslama uma moeda de ouro por habitante em troca de levantar o cerco, e foi recusado. Numa versão, depois disso, enganou Maslama para que ele entregasse a maior parte do trigo do exército. Em outra, convenceu-o a queimá-lo, para mostrar à cidade que o ataque seria imediato. Em ambas, o acampamento árabe ficou com menos provisões.",
        { h: "Maslama ibn Abd al-Malik" },
        "Irmão do califa Sulayman, veterano de campanhas contra os bizantinos. Como o califa estava doente demais para comandar, Maslama assumiu o exército, reunido em Dabiq, na Síria. Entre os árabes, ficou como o grande comandante do cerco, e a tradição posterior encheu sua história de lendas.",
        { h: "Os outros nomes" },
        "Tervel, cã dos [[búlgaros]], tinha feito um tratado com Leão em 716, que possivelmente incluía uma aliança contra os árabes. Umar II, o califa que sucedeu a Sulayman em setembro de 717, mandou as frotas de reforço na primavera e, depois do fracasso, ordenou a retirada."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números árabes dos cronistas são impossíveis. Al-Mas'udi, no século X, fala em 120.000 homens. O sírio Miguel, no século XII, em 200.000 e 5.000 navios. Teófanes dá 1.800 navios à frota principal. Os historiadores modernos não propõem um número, mas concordam que o exército era enorme para a época: segundo Warren Treadgold, talvez maior que todo o exército bizantino. Dos defensores, uma estimativa moderna fala em cerca de 15.000 homens. Os búlgaros teriam cerca de 12.000, segundo um estudo de 2019.",
        { h: "O terreno" },
        "Constantinopla fica numa península: o mar de Mármara ao sul, o [[Corno de Ouro|corno de ouro]] ao norte, o Bósforo a leste. Pelo lado de terra, a oeste, tinha as [[muralhas de Teodósio|muralhas de teodósio]]. Quem quisesse tomar a cidade tinha de vencer as muralhas ou matar os defensores de fome, e os sitiantes também precisavam impedir que os navios bizantinos abastecessem a cidade pelo mar.",
        { h: "O cerco, passo a passo" },
        { formation: true },
        "Primeiro, a muralha dupla. Maslama construiu duas muralhas de pedra, uma voltada para a cidade e outra para a Trácia, e acampou no meio. Era uma [[circunvalação]] clássica, que fechava a cidade por terra.",
        "Segundo, a frota. Em 1º de setembro a frota árabe chegou. Dois dias depois, entrou no Bósforo.",
        "Terceiro, o fogo grego. Quando a retaguarda árabe, com vinte navios pesados e cerca de 2.000 soldados, passava junto à cidade, o vento do sul virou e jogou os navios contra as muralhas. Um esquadrão bizantino os atacou com [[fogo grego|fogo grego]]. Segundo Teófanes, alguns navios afundaram com todos a bordo, e outros queimaram até as ilhas dos Príncipes.",
        "Quarto, a corrente. Naquela noite, Leão fechou o [[Corno de Ouro|corno de ouro]] com uma grande corrente entre a cidade e Gálata. A frota árabe se retirou para o porto de Sostênio, no Bósforo.",
        "Quinto, o inverno. O inverno de 717 para 718 foi muito duro. A neve cobriu o chão por mais de três meses. Quando as provisões acabaram, os soldados comeram cavalos, camelos e outros animais, depois casca de árvore, folhas e raízes. Os cronistas dizem que houve até canibalismo. Epidemias atingiram o exército. Os búlgaros, por sua vez, atacavam os acampamentos. As fontes divergem sobre se eles atacaram primeiro ou se os árabes entraram no território deles.",
        "Sexto, as frotas de reforço. Na primavera de 718, Umar II mandou cerca de 400 navios do Egito, sob Sufyan, e 360 da África, sob Izid, segundo os cronistas. A frota egípcia ancorou no golfo de Nicomédia, e a africana ao sul de Calcedônia. As tripulações eram em boa parte de [[cristãos coptas|cristãos coptas]], que começaram a desertar para os bizantinos.",
        "Sétimo, a destruição das frotas. A frota de Leão atacou com fogo grego e destruiu ou capturou os navios de reforço.",
        "Oitavo, a emboscada. Um exército árabe enviado por terra, sob Mardasan, foi emboscado nas colinas de Sophon, ao sul de Nicomédia, e destruído.",
        "Nono, a retirada. Em 15 de agosto de 718, depois de treze meses, Maslama levantou o cerco por ordem de Umar II. A frota, na volta, foi castigada por uma tempestade no mar de Mármara.",
        { note: "Os cronistas bizantinos descrevem as perdas árabes de modo grandioso. Segundo Teófanes, só cinco navios teriam chegado à Síria, e os búlgaros teriam matado 22.000 árabes numa batalha. Fontes árabes falam em 150.000 mortos, e o cronista ocidental Paulo Diácono, em 300.000. O historiador John Haldon diz que 150.000 é 'certamente inflado', mas mostra 'a enormidade do desastre aos olhos medievais'." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O cerco fracassou. O califado desistiu de tomar Constantinopla, e a fronteira se estabilizou nas montanhas do Tauro, no sul da Anatólia. O Império Bizantino, apesar das fraquezas, resistiu mais 735 anos, até 1453.",
        { h: "Por que importa" },
        "Muitos historiadores veem no cerco uma virada. O historiador alemão Eickhoff diz que um califa vitorioso em Constantinopla teria tido consequências 'incalculáveis' para a Europa cristã. O historiador Davis diz que a Europa 'permaneceu em mãos cristãs'. É comum compará-lo à batalha de Tours, em 732, que também freou a expansão muçulmana, mas essas comparações têm mais de debate do que de consenso.",
        "Para Bizâncio, o cerco consolidou Leão III no trono e fez dele o fundador da dinastia isaura, que governou até 802.",
        { h: "Curiosidades e controvérsias" },
        { note: "As fontes: as principais são Teófanes e Nicéforo, no lado bizantino, e cronistas árabes e sírios mais tardios. Elas se contradizem com frequência, e os números de mortos são considerados exagerados por quase todos os historiadores." },
        { note: "A lenda: na tradição árabe e turca, figuras como Abdallah al-Battal viraram heróis populares. A memória de Maslama também ficou cercada de histórias, como a de que teria entrado triunfante em Constantinopla." }
      ]}
    ]
  },

  covadonga: {
    war: "Conquista omíada da Península Ibérica e rebelião asturiana (711 a c. 722)",
    hook: "Uma batalha pequena, ou talvez nem tanto, que mais de um século depois virou a origem de um reino e de uma ideia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 711, um exército árabe e berbere atravessou o estreito de Gibraltar e derrotou o rei visigodo Rodrigo. Em poucos anos, a maior parte da Península Ibérica passou ao domínio dos [[omíadas]], governada por um [[wali|wali (governador)]] com sede em Córdoba. O reino dos [[visigodos]] desapareceu.",
        "O norte montanhoso, porém, interessava pouco aos novos senhores. Era pobre, frio e difícil de percorrer, e os próprios romanos e visigodos nunca o tinham dominado por completo. Os [[astures]] viviam ali. Os olhos dos governadores estavam voltados para a Gália, para onde avançavam: em 721 foram derrotados em Toulouse.",
        { h: "O que as crônicas contam" },
        "A história de Covadonga vem de crônicas escritas em Oviedo, no reino das Astúrias, perto de 880, mais de um século e meio depois. Segundo elas, os visigodos refugiados no norte e os astures elegeram Pelágio como seu príncipe. Munuza, o governador da região, a quem a tradição põe em Gijón, impôs tributos pesados. Pelágio se recusou a pagá-los e se rebelou. Munuza pediu reforços, e o wali mandou uma expedição.",
        { timeline: [
          ["711", "Conquista muçulmana da Península Ibérica; queda do reino visigodo."],
          ["c. 718", "Segundo as crônicas, os astures elegem Pelágio como líder."],
          ["721", "Os muçulmanos são derrotados em Toulouse."],
          ["c. 722", "Combate de Covadonga, segundo a datação mais citada."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Pelágio (Pelayo)" },
        "Segundo a crônica, filho do duque Fáfila e de sangue real visigodo. Alguns historiadores modernos, como Manzano Moreno, duvidam que ele fosse mesmo nobre visigodo. A crônica o põe dizendo, ao ser chamado a se render, que a Igreja é como a Lua, que míngua mas sempre volta a crescer, e que não faria aliança com os árabes nem se submeteria a eles. Esse discurso provavelmente foi escrito mais de cem anos depois.",
        { h: "Alqama e o bispo Oppas" },
        "Alqama é o comandante muçulmano que as crônicas mandam contra Pelágio e dão como morto na luta. Com ele, dizem as crônicas cristãs, ia Oppas, bispo de Sevilha e filho do rei visigodo Witiza, que tenta convencer Pelágio a se render. A presença de Oppas na expedição é tida como lenda.",
        { h: "Munuza" },
        "O governador a quem Pelágio se opôs. Segundo a tradição, foi derrotado e morto pouco depois, perto de Proaza. Roger Collins notou que, se Munuza ficava mesmo em Gijón, o poder muçulmano já chegava às Astúrias, e Pelágio não seria apenas um chefe local resistindo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Não temos números confiáveis. A crônica albeldense dá ao exército de Alqama 187.000 homens, cifra que os historiadores veem como simbólica, parecida com as cifras da Bíblia. O contingente de Pelágio é descrito como minúsculo, e alguns autores modernos falam em uns 300 homens. No lado muçulmano, o cronista al-Maqqari, do século XVII, diz que os árabes consideravam os rebeldes 'trinta burros selvagens'. Nenhum número vale como dado.",
        { h: "O terreno" },
        "Os Picos da Europa, a cordilheira que fica a algumas dezenas de quilômetros do mar, perto de Cangas de Onís. O local é o monte Auseva, com um vale estreito e uma gruta, hoje a Santa Cueva de Covadonga. É um lugar em que um exército grande não consegue se abrir, e em que quem está nas encostas domina quem está no vale.",
        { h: "O que as crônicas contam da batalha" },
        "Segundo as crônicas, Alqama acampou com seu exército perto de onde Pelágio estava e mandou Oppas propor a rendição. Pelágio recusou. Alqama então mandou suas melhores tropas para dentro do vale. Os astures atacaram das encostas com flechas e pedras. Na hora decisiva, Pelágio saiu da gruta com seus homens, Alqama morreu e o exército recuou.",
        "A tradição acrescentou milagres: a crônica albeldense conta que um monte em Liébana desabou sobre os soldados, por juízo de Deus. A tradição posterior acrescentou a intercessão da Virgem Maria e ligou a gruta ao santuário atual. Esses são elementos de lenda, e nenhuma fonte contemporânea os confirma.",
        "Sobre o resto, as fontes são ainda mais silenciosas. Não sabemos como os rebeldes se posicionaram nem em que ordem fizeram o que fizeram. Por isso não há diagrama de disposição para esta batalha."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os muçulmanos recuaram, e Pelágio ficou com as montanhas. Os governantes de Córdoba tinham outras prioridades, como a Gália, e o norte montanhoso não era uma delas. Segundo a tradição, o reino das Astúrias nasceu ali, com Pelágio como primeiro rei, e foi o núcleo de onde saíram, séculos depois, os reinos cristãos do norte. Pelágio foi enterrado em Abamia, e Afonso X mandou transferir seus restos para a Santa Cueva.",
        { h: "Por que importa" },
        "Para os reis das Astúrias, Covadonga era o começo. Eles apresentavam o seu reino como a continuação dos visigodos, e a [[reconquista]] como uma guerra de restauração. Por isso a batalha entrou na tradição espanhola como o primeiro passo desse processo, que só terminaria em 1492. A Santa Cueva virou lugar de peregrinação até hoje.",
        { h: "Curiosidades e controvérsias" },
        { note: "A escala da batalha é muito discutida. As crônicas cristãs falam em massacre, e a tradição muçulmana, em escaramuça sem importância. Para Claudio Sánchez-Albornoz, foi a faísca da resistência cristã. Historiadores como García Moreno e Valdeón a aceitam como fato local. José Luis Corral acha que nunca aconteceu e foi invenção da corte de Afonso III. Henry Kamen não descarta que tenha havido, na região, um incidente militar de alguma importância que freou os muçulmanos." },
        { note: "A data: Sánchez-Albornoz a põe em 722, no governo do wali Anbasa, depois da derrota de Toulouse. Outros, como Montenegro e del Castillo, defendem 718, sob al-Hurr. Uma leitura da crônica albeldense a coloca nos anos 740. A data de 722 é a mais citada, mas está longe de ser consenso." },
        { note: "O lugar: Pedro Chalmeta sugeriu em 2022 que a batalha famosa nem teria ocorrido nas Astúrias, e que ela teria semelhanças com um combate nos Pireneus, em 754. Nenhuma fonte muçulmana de época a menciona, e o silêncio da Crônica Mozárabe de 754 é um dos argumentos dos céticos." }
      ]}
    ]
  },

  granico: {
    war: "Conquista do Império Persa por Alexandre (334 a 330 a.C.)",
    hook: "Alexandre atravessou um rio sob uma chuva de dardos para vencer a primeira batalha da sua campanha, e quase morreu nela.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois do assassinato do pai, Filipe II, em 336 a.C., Alexandre, com 20 anos, teve de esmagar revoltas nos Bálcãs e na Grécia antes de poder pensar em outra coisa. A [[liga de Corinto]], que Filipe tinha criado, o aclamou como comandante da guerra contra a Pérsia, a vingança prometida desde a invasão persa de 150 anos antes.",
        "Na primavera de 334 a.C., Alexandre atravessou o Helesponto com cerca de 32.000 soldados a pé e 5.000 a cavalo, segundo as fontes. Dario III estava longe, e a defesa da Ásia Menor ficou com os governadores locais, os [[sátrapa]]s.",
        { h: "O caminho até o rio" },
        { timeline: [
          ["336 a.C.", "Filipe II é assassinado. Alexandre sobe ao trono."],
          ["334 a.C., primavera", "Alexandre atravessa o Helesponto e desembarca perto do cabo Sigeu."],
          ["Maio de 334 a.C.", "Os sátrapas se reúnem em Zeleia, e Mêmnon propõe evitar a batalha."],
          ["Maio de 334 a.C.", "Batalha do Granico."],
          ["Verão de 334 a.C.", "Sardes se rende, Éfeso é abandonada e Mileto é sitiada."]
        ]},
        "No conselho de guerra dos persas, em Zeleia, Mêmnon de Rodes, general grego a serviço da Pérsia, aconselhou a não lutar em campo aberto: devia-se queimar as colheitas e deixar Alexandre sem comida. Arsites e os outros recusaram, em parte para proteger os bens de seus súditos e em parte porque desconfiavam de Mêmnon. Os historiadores modernos, como Pierre Briant, discutem se a reunião foi mesmo assim e se o que estava em jogo era estratégia ou apenas tática."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Alexandre III da Macedônia, 21 anos" },
        "Estava na primeira grande batalha da sua vida como rei. Lutava, como sempre, na frente dos companheiros, e foi quase morto por isso. Escolheu atacar na hora, em vez de esperar.",
        { h: "Parmênio" },
        "General veterano de Filipe, comandava a ala esquerda. Segundo [[Arriano|arriano]], aconselhou Alexandre a acampar na margem e atravessar o rio ao amanhecer do dia seguinte. Alexandre recusou e mandou atacar na hora.",
        { h: "Os persas" },
        "Arsites, sátrapa da Frígia do Helesponto, é considerado o comandante provável. Entre os outros estavam Espitrídates, sátrapa da Lídia e da Jônia, Arsames, Reomitres e Mêmnon de Rodes. Mêmnon ficou na linha de frente, e alguns historiadores acham que foi porque os outros comandantes desconfiavam dele."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os historiadores modernos calculam que Alexandre tinha cerca de 18.000 homens no campo: uns 12.000 de infantaria pesada, 1.000 de infantaria leve e cerca de 5.100 cavaleiros. Dos persas, Arriano fala em quase 20.000 cavaleiros e outros tantos mercenários gregos a pé. Diodoro dá 10.000 cavaleiros e 100.000 soldados a pé, e Justino chega a 600.000 no total. Quase ninguém aceita essas cifras. O historiador Brian Devine estima, para os persas, entre 14.000 e 15.000 homens, dos quais 4.000 a 5.000 eram mercenários.",
        { h: "O terreno" },
        "O Granico, um rio do noroeste da atual Turquia. Os persas ficaram na margem leste, mais alta e íngreme, com a cavalaria na frente, à beira dos barrancos, e a infantaria de mercenários gregos mais atrás. Os antigos insistem em dizer que o rio era difícil de atravessar, mas observadores modernos acham que não era tanto, e talvez os autores tenham exagerado. O ponto exato da travessia é discutido: Nicholas Hammond o põe entre Gümüşçay e Çeşmealtı.",
        { h: "O dia" },
        "Segundo Plutarco, alguns oficiais objetaram a lutar no mês de Daisios, por motivos religiosos, e Alexandre, para contornar a objeção, declarou o mês anterior repetido, um 'segundo Artemísio'. Em seguida, Parmênio aconselhou esperar. Alexandre ordenou o ataque.",
        { h: "A batalha em nove momentos" },
        { formation: true },
        "Primeiro, as linhas. Os persas puseram a cavalaria ao longo da margem, com os mercenários gregos de Omares atrás. Alexandre comandava a ala direita, com a maior parte dos [[companheiros|companheiros]], os arqueiros e os [[agrianos]], os [[prodromoi]], os [[peônios]] e os [[hipaspistas]]. No centro vinha a [[falange]], em seis grupos, com Perdicas, Cenos, Crátero e outros comandantes. Parmênio, na esquerda, tinha a cavalaria tessália, a trácia e a grega aliada.",
        "Segundo, o deslocamento persa. Ao ver Alexandre diante da ala esquerda deles, os persas juntaram a cavalaria daquele lado. Era ali, segundo Arriano, que estava a melhor cavalaria persa.",
        "Terceiro, o primeiro ataque. Amintas, filho de Arrabeu, com o esquadrão de companheiros de Ptolomeu, filho de Filipe, e depois os peônios, os prodromoi e parte da infantaria, entraram no rio na ponta esquerda dos persas. Os dardos persas, lançados do alto das margens, os repeliram. Cerca de 25 companheiros morreram nesse primeiro ataque.",
        "Quarto, Alexandre atravessa. Alexandre atacou com o resto da ala direita. Os historiadores divergem sobre o caminho: alguns, como Fuller e Bosworth, veem um avanço em diagonal contra o centro persa. Outros, como Badian e Hammond, o veem contra a ala esquerda, com um desvio para manter a linha unida. Devine acha que o primeiro ataque pode ter sido uma isca para tirar os persas de formação.",
        "Quinto, o corpo a corpo na margem. A luta foi dura. Alexandre quebrou a lança e pediu outra. O escudeiro dele também tinha quebrado a sua, e Demarato de Corinto lhe deu a própria. Alexandre matou Mitrídates, genro de Dario, e foi atingido no elmo por Rosaces, que matou em seguida.",
        "Sexto, Clito. Espitrídates estava prestes a golpeá-lo por trás quando Clito, o Negro, cortou o braço dele com a espada.",
        "Sétimo, a cavalaria persa cede. Os macedônios ganharam a margem e romperam a cavalaria persa, primeiro na ala esquerda, depois no centro. Os persas fugiram.",
        "Oitavo, os mercenários. Os mercenários gregos, que tinham ficado parados, foram atacados de frente pela falange e pelos lados pela cavalaria. A maioria morreu. Segundo Plutarco, eles se recusaram a se render, e foram eles que causaram a maior parte das baixas macedônias.",
        "Nono, a esquerda. Do outro lado, na ala de Parmênio, a cavalaria persa também recuou.",
        { note: "As fontes divergem muito. Para Diodoro, a batalha foi bem diferente: os exércitos acamparam dos dois lados, Alexandre atravessou sem oposição ao amanhecer, e houve duas lutas separadas, de cavalaria e de infantaria. Peter Green propôs em 1974 conciliar os dois relatos, com uma primeira travessia fracassada que depois teria sido encoberta. Em 2013, admitiu que a contradição não tem explicação. A maioria dos historiadores prefere Arriano e Plutarco, porque os macedônios sempre combinavam infantaria e cavalaria, e uma travessia de noite ou ao amanhecer seria vista." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Segundo Arriano, os macedônios perderam 115 homens, dos quais 25 companheiros no primeiro ataque. Plutarco dá 34, e Justino, 129. Do lado persa, Arriano conta cerca de 1.000 cavaleiros mortos e 2.000 mercenários capturados. Plutarco fala em 2.500 cavaleiros e 20.000 soldados a pé mortos, e Diodoro em 2.000 cavaleiros e 10.000 soldados a pé mortos e 20.000 capturados. Devine considera essas cifras impossíveis e estima, no total, de 5.000 a 6.000 baixas persas.",
        "Os 2.000 mercenários capturados foram mandados à Macedônia para trabalhar como escravos. Alexandre justificou a pena dizendo que eles tinham lutado ao lado dos persas contra a Grécia. Ele mandou 300 armaduras persas para Atenas, como oferenda, com uma inscrição que excluía os espartanos. Para os 25 companheiros mortos, encomendou ao escultor Lisipo um grupo de bronze, que foi levado a Roma em 146 a.C.",
        { h: "Consequências" },
        "Arsites fugiu e, mais tarde, se matou, culpado pela derrota. Dascílio foi evacuada, Sardes se rendeu, e Éfeso foi abandonada. Mileto resistiu e foi sitiada. O grosso do exército persa se recolheu em Halicarnasso. As perdas militares persas não foram catastróficas, mas a queda de Sardes deixou a posição do império na Ásia Menor frágil.",
        { h: "Por que importa" },
        "Foi a primeira de três grandes batalhas entre Alexandre e o Império Persa, depois de Isso e Gaugamela. Mostrou como Alexandre agia: ataque rápido, em primeira pessoa, contra a parte mais forte do inimigo. E deu à campanha um começo que não deixou dúvidas sobre quem tinha a iniciativa.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: maio de 334 a.C., no mês macedônio de Daisios. Alguns historiadores dão o início de junho, e os autores antigos não registram o dia." },
        { note: "As fontes: Arriano escreveu uns 450 anos depois, mas usou o relato de Ptolomeu, que estava lá. Plutarco e Diodoro tiveram outras fontes. Os números das perdas persas variam tanto que só os de Arriano são considerados razoáveis." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  karbala: {
    terrain: [
      { t: "sea", x: 90, y: 0, w: 10, h: 70, l: "Rio Eufrates" },
      { t: "note", x: 40, y: 4, l: "Planície de Karbala (esquematizada, fora de escala)" }
    ],
    units: [
      { id: "uAmr", s: "a", k: "cav", w: 5, h: 12, l: "Ala de Amr ibn al-Hajjaj" },
      { id: "uShm", s: "a", k: "cav", w: 5, h: 12, l: "Ala de Shimr" },
      { id: "uCen", s: "a", k: "inf", w: 6, h: 14, l: "Infantaria e arqueiros (Umar ibn Sa'd)" },
      { id: "uCav", s: "a", k: "cav", w: 5, h: 10, l: "Cavalaria blindada" },
      { id: "uRiv", s: "a", k: "cav", w: 4, h: 8, l: "500 cavaleiros no caminho do rio" },
      { id: "hZuh", s: "b", k: "inf", w: 4, h: 9, l: "Ala direita (Zuhayr)" },
      { id: "hHab", s: "b", k: "inf", w: 4, h: 9, l: "Ala esquerda (Habib)" },
      { id: "hHus", s: "b", k: "cav", w: 4, h: 8, l: "Husayn, Abbas e parentes" },
      { id: "uHur", s: "a", k: "cav", w: 3, h: 4, l: "Al-Hurr" },
      { id: "hTen", s: "b", k: "camp", w: 8, h: 26, l: "Tendas amarradas e vala com lenha" }
    ],
    steps: [
      { t: "Manhã de 10 de Muharram (10 de outubro de 680). Cerca de 72 homens estão alinhados diante das tendas: Zuhayr na direita, Habib na esquerda, Abbas com o estandarte. Do outro lado, cerca de 4.000 homens, com cavaleiros postados no caminho do rio.",
        p: { hTen: [10, 35], hZuh: [27, 47], hHab: [27, 23], hHus: [24, 35], uHur: [50, 33],
             uAmr: [54, 48], uShm: [54, 22], uCen: [62, 35], uCav: [48, 35], uRiv: [82, 40] } },
      { t: "Husayn cavalga à frente e fala aos homens de Cufa: lembra quem é e pede para ser deixado partir. Respondem que antes terá de se submeter a Yazid. Al-Hurr, que comandou a vanguarda, atravessa o campo e passa para o lado de Husayn.",
        p: { hHus: [30, 35], uHur: [29, 31] } },
      { t: "A luta começa com chuvas de flechas, seguidas de duelos. Zuhayr tenta dissuadir os homens de Ibn Sa'd, sem sucesso.",
        p: { uCen: [52, 35], uCav: [44, 35] } },
      { t: "Amr ibn al-Hajjaj ataca a ala de Zuhayr, e Shimr, a de Habib. Os dois ataques são rechaçados.",
        p: { uAmr: [40, 46], uShm: [40, 24] } },
      { t: "A cavalaria omíada ataca. Os cavaleiros de Husayn, com os cavalos feridos, passam a lutar a pé.",
        p: { uCav: [36, 35], uAmr: [34, 46], uShm: [34, 24], hHus: [26, 35] } },
      { t: "Ibn Sa'd manda queimar as tendas, menos a de Husayn. O fogo atrapalha o avanço dos próprios omíadas por algum tempo.",
        p: { uCen: [42, 35] } },
      { t: "Depois da oração do meio-dia, os companheiros estão cercados e quase todos morrem.",
        p: { uAmr: [28, 44], uShm: [28, 26], uCav: [30, 35], uCen: [36, 35] }, x: ["hZuh", "hHab"] },
      { t: "Os parentes de Husayn entram na luta. Ali al-Akbar, seu filho, e vários meios-irmãos e sobrinhos morrem, entre eles Abbas, segundo al-Mufid.",
        p: { uCav: [26, 35], uCen: [32, 35] } },
      { t: "Husayn, ferido por flechas e golpes, cai e é morto. Mais de 60 ferimentos são contados no corpo. As mulheres e as crianças são levadas cativas a Cufa e a Damasco.",
        p: { uCav: [20, 35], uCen: [26, 35], uAmr: [20, 42], uShm: [20, 28] }, x: ["hHus"] }
    ]
  },

  constantinopla717: {
    terrain: [
      { t: "sea", x: 0, y: 50, w: 100, h: 20, l: "Mar de Mármara" },
      { t: "sea", x: 80, y: 0, w: 8, h: 50, l: "Bósforo" },
      { t: "sea", x: 40, y: 7, w: 40, h: 6, l: "Corno de Ouro" },
      { t: "note", x: 10, y: 4, l: "Trácia (oeste)" },
      { t: "note", x: 94, y: 30, l: "Ásia" },
      { t: "note", x: 84, y: 5, l: "corrente" }
    ],
    units: [
      { id: "city", s: "a", k: "camp", w: 34, h: 24, l: "Constantinopla (Leão III)" },
      { id: "bul", s: "a", k: "inf", w: 12, h: 5, l: "Búlgaros (Tervel)" },
      { id: "bFl", s: "a", k: "ship", w: 14, h: 3, l: "Frota bizantina, com fogo grego" },
      { id: "aLn", s: "b", k: "camp", w: 14, h: 26, l: "Acampamento de Maslama entre duas muralhas" },
      { id: "aFl", s: "b", k: "ship", w: 16, h: 4, l: "Frota árabe (1º de setembro)" },
      { id: "aRr", s: "b", k: "ship", w: 8, h: 3, l: "Retaguarda: 20 navios pesados" },
      { id: "eFl", s: "b", k: "ship", w: 12, h: 3.5, l: "Frota do Egito (≈ 400)" },
      { id: "fFl", s: "b", k: "ship", w: 12, h: 3.5, l: "Frota da África (≈ 360)" },
      { id: "mar", s: "b", k: "inf", w: 6, h: 7, l: "Exército de Mardasan" }
    ],
    steps: [
      { t: "Verão de 717. Maslama atravessou o Helesponto, devastou a Trácia e fechou a cidade por terra com uma muralha dupla. Acampou entre as duas. A cidade tem as muralhas de Teodósio, o mar aberto ao sul e o Corno de Ouro ao norte.",
        p: { city: [60, 31], aLn: [30, 31], bul: [14, 14], bFl: [60, 10], aFl: [10, 60], aRr: [4, 66], eFl: [92, 62], fFl: [78, 66], mar: [95, 40] } },
      { t: "1º de setembro. A frota árabe chega ao mar de Mármara. Dois dias depois, entra no Bósforo.",
        p: { aFl: [60, 58], aRr: [44, 56] } },
      { t: "A retaguarda árabe, com 20 navios pesados e 2.000 soldados, passa junto às muralhas. O vento do sul vira e a empurra contra a cidade. Um esquadrão bizantino a ataca com fogo grego: alguns navios afundam, outros queimam.",
        p: { aRr: [52, 49], bFl: [50, 46] }, x: ["aRr"] },
      { t: "Na mesma noite, Leão fecha o Corno de Ouro com uma corrente entre a cidade e Gálata. A frota árabe se retira para o porto de Sostênio, no Bósforo.",
        p: { aFl: [84, 12], bFl: [62, 10] } },
      { t: "Inverno de 717 para 718. Neve por mais de três meses. O acampamento passa fome: comem cavalos, camelos, casca e raízes, e as fontes falam até de canibalismo. As epidemias agravam tudo.",
        p: { aLn: [30, 31] } },
      { t: "Os búlgaros atacam os acampamentos árabes durante o cerco. As fontes divergem sobre se atacaram primeiro ou se os árabes entraram no território deles. Teófanes fala em 22.000 árabes mortos numa batalha.",
        p: { bul: [26, 20] } },
      { t: "Primavera de 718. Chegam as frotas de reforço do Egito (≈ 400 navios) e da África (≈ 360), segundo os cronistas. Uma ancora no golfo de Nicomédia e a outra ao sul de Calcedônia. As tripulações, em boa parte coptas, desertam para os bizantinos.",
        p: { eFl: [88, 56], fFl: [82, 60] } },
      { t: "A frota de Leão ataca com fogo grego e destrói ou captura as frotas de reforço.",
        p: { bFl: [84, 54] }, x: ["eFl", "fFl"] },
      { t: "Um exército árabe enviado por terra, sob Mardasan, é emboscado e destruído nas colinas de Sophon, ao sul de Nicomédia.",
        p: { mar: [95, 44] }, x: ["mar"] },
      { t: "15 de agosto de 718. Por ordem do califa Umar II, Maslama levanta o cerco depois de treze meses. A frota que volta é castigada por uma tempestade no mar de Mármara.",
        p: { aLn: [14, 31], aFl: [20, 58] }, x: ["aLn", "aFl"] }
    ]
  },

  granico: {
    terrain: [
      { t: "sea", x: 0, y: 30, w: 100, h: 6, l: "Rio Granico" },
      { t: "note", x: 8, y: 66, l: "Margem oeste (macedônios)" },
      { t: "note", x: 8, y: 4, l: "Margem leste, mais alta (persas)" }
    ],
    units: [
      { id: "mLef", s: "a", k: "cav", w: 14, h: 5, l: "Esquerda: tessálios e aliados (Parmênio)" },
      { id: "mPh", s: "a", k: "inf", w: 30, h: 5, l: "Falange (seis grupos)" },
      { id: "mHyp", s: "a", k: "inf", w: 8, h: 4, l: "Hipaspistas" },
      { id: "mCom", s: "a", k: "cav", w: 12, h: 5, l: "Companheiros (Alexandre)" },
      { id: "mAgr", s: "a", k: "inf", w: 10, h: 3, l: "Arqueiros e agrianos" },
      { id: "mPro", s: "a", k: "cav", w: 10, h: 5, l: "Prodromoi, peônios e esquadrão de Amintas" },
      { id: "pRig", s: "b", k: "cav", w: 22, h: 5, l: "Direita: medos e báctrios" },
      { id: "pCen", s: "b", k: "cav", w: 26, h: 5, l: "Centro" },
      { id: "pLef", s: "b", k: "cav", w: 24, h: 5, l: "Esquerda: Mêmnon, Arsames, Espitrídates" },
      { id: "pMer", s: "b", k: "inf", w: 40, h: 5, l: "Mercenários gregos (Omares)" }
    ],
    steps: [
      { t: "Maio de 334 a.C. A cavalaria persa ocupa a margem leste, mais alta, com os mercenários gregos atrás. Alexandre fica na direita, com os companheiros. A falange está no centro. Parmênio comanda a esquerda.",
        p: { mLef: [14, 55], mPh: [42, 55], mHyp: [64, 55], mCom: [74, 54], mAgr: [74, 48], mPro: [90, 54],
             pRig: [14, 24], pCen: [42, 24], pLef: [76, 24], pMer: [50, 10] } },
      { t: "Ao ver Alexandre diante da ala esquerda deles, os persas juntam a cavalaria daquele lado. Parmênio aconselha acampar e atravessar de manhã. Alexandre manda atacar na hora.",
        p: { pCen: [54, 24], pLef: [82, 24] } },
      { t: "O primeiro ataque: Amintas e o esquadrão de Ptolomeu, com peônios, prodromoi e parte da infantaria, entra no rio na ponta esquerda persa.",
        p: { mPro: [88, 34], mAgr: [78, 38] } },
      { t: "Os dardos persas, lançados do alto da margem, repelem o ataque. Cerca de 25 companheiros morrem nesse momento.",
        p: { mPro: [90, 47], pLef: [84, 28] } },
      { t: "Alexandre atravessa com o resto da ala direita, com os arqueiros e os agrianos na frente. A luta na margem é corpo a corpo.",
        p: { mCom: [78, 33], mAgr: [80, 31], mHyp: [68, 40], mPh: [46, 46] } },
      { t: "Alexandre quebra a lança e recebe outra de Demarato de Corinto. Mata Mitrídates. Rosaces o atinge no elmo e é morto. Espitrídates ergue a espada por trás dele, e Clito, o Negro, corta seu braço.",
        p: { mCom: [80, 28], pLef: [84, 22] } },
      { t: "Os macedônios ganham a margem e rompem a cavalaria persa, primeiro na esquerda, depois no centro. A cavalaria persa foge.",
        p: { mCom: [74, 20], mHyp: [66, 28], mPh: [46, 36], pLef: [90, 14], pCen: [56, 14] }, x: ["pLef", "pCen"] },
      { t: "Os mercenários gregos, que não se moveram, são atacados de frente pela falange e pelos lados pela cavalaria. A maioria morre, e cerca de 2.000 são capturados, segundo Arriano.",
        p: { mPh: [48, 18], mCom: [66, 10], mHyp: [62, 16], pMer: [50, 8] }, x: ["pMer"] },
      { t: "Na outra ponta, a ala de Parmênio atravessa, e a cavalaria persa da direita também recua.",
        p: { mLef: [16, 36], pRig: [12, 14] }, x: ["pRig"] }
    ]
  }
});
