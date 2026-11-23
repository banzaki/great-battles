// In-depth battles, batch aq: castillon, toulon, barcelona, girona, ebro (regional pack, part B: Aquitaine, Provence and Catalonia).
// Checked against the English, Portuguese, French, Spanish and Catalan Wikipedia articles on Castillon, the Siege of Toulon,
// the Siege of Barcelona (1713-1714), the Third Siege of Girona and the Battle of the Ebro, Britannica, and the works those pages cite.
// Where sources disagree the text says so. No diagram for Girona: the sources do not describe the deployments and moves well enough.

Object.assign(GLOSSARY, {
  "guiena": "A Guiena (ou Aquitânia) era o sudoeste da França, em volta de Bordeaux. Pertencia aos reis ingleses desde 1152, quando Leonor da Aquitânia casou com Henrique Plantageneta, futuro rei da Inglaterra.",
  "campo entrincheirado": "Posição de combate cercada de vala, terra amontoada e estacas, onde o exército espera o ataque do inimigo em vez de sair para lutar em campo aberto.",
  "mestre da artilharia": "Oficial do rei da França encarregado de canhões, pólvora e balas. Jean Bureau ocupava esse posto e transformou a artilharia num trunfo.",
  "guerra das rosas": "Guerra civil inglesa (1455–1485) entre duas famílias da realeza, Lancaster e York, que disputavam o trono. Os símbolos eram uma rosa vermelha e uma rosa branca.",
  "espontão": "Lança curta com ponta larga, usada por oficiais e sargentos de infantaria no século XVIII. Dava para ferir de perto, como uma baioneta comprida.",
  "rada": "Baía protegida onde os navios ficam ancorados. Toulon tem duas: a pequena rada, junto da cidade, e a grande rada, mais aberta.",
  "representante em missão": "Deputado da Convenção francesa enviado aos exércitos com poder para nomear e demitir oficiais e dar ordens, em nome da República.",
  "jacobinos": "O clube político mais radical da Revolução Francesa. Seus membros dominaram a Convenção e o governo em 1793 e 1794.",
  "bórbons": "Dinastia real da França. Em 1700, um neto de Luís XIV, Filipe V, herdou o trono da Espanha, e os Bórbons passaram a reinar em Paris e em Madri.",
  "habsburgos": "Dinastia da Áustria que reinou na Espanha até 1700. Na Guerra da Sucessão Espanhola, apoiou o arquiduque Carlos, o rival de Filipe V ao trono espanhol.",
  "tratado de utrecht": "Conjunto de tratados de 1713 e 1714 que encerrou a Guerra da Sucessão Espanhola. A Grã-Bretanha reconheceu Filipe V como rei da Espanha e abandonou os catalães.",
  "junta de braços": "Assembleia de emergência da Catalunha, com os três 'braços' do país (nobreza, clero e cidades). Em 1713 decidiu continuar a guerra.",
  "coronela": "Milícia da cidade de Barcelona, formada por artesãos e comerciantes organizados por ofícios. Seu chefe era o conseller en cap, o primeiro magistrado da cidade.",
  "conseller en cap": "O primeiro dos cinco magistrados que governavam Barcelona. Em 1714 era Rafael Casanova, que também comandava a Coronela.",
  "bastião": "Saliência em forma de ponta de lança nos cantos de uma muralha moderna. De lá, os canhões atiram ao longo da muralha e cobrem o terreno dos dois lados.",
  "brecha na muralha": "Abertura feita na muralha por canhões ou minas. É por ela que a infantaria tenta entrar na cidade.",
  "nova planta": "Série de decretos do rei Filipe V, de 1716 em diante, que aboliram as instituições e as leis próprias da Catalunha e impuseram o modelo de Castela.",
  "guerra peninsular": "A guerra de 1808 a 1814 em que a Espanha e Portugal, com ajuda britânica, lutaram contra a ocupação napoleônica. Os espanhóis a chamam de Guerra da Independência.",
  "exército de cobertura": "Força que fica de fora de uma cidade sitiada para proteger os sitiantes de qualquer ataque externo e interceptar socorro.",
  "guerra civil espanhola": "A guerra de 1936 a 1939 entre o governo republicano e os militares rebeldes liderados por Franco. Terminou com a vitória de Franco, que governou a Espanha até 1975.",
  "nacionalistas": "Nome que os partidários de Franco davam a si mesmos na guerra civil espanhola: militares, monarquistas, a Falange e a Igreja, apoiados pela Alemanha nazista e pela Itália fascista.",
  "república espanhola": "O governo legal da Espanha desde 1931, apoiado por socialistas, comunistas, anarquistas e liberais. Recebeu ajuda militar da União Soviética e voluntários estrangeiros.",
  "brigadas internacionais": "Voluntários de dezenas de países, muitos comunistas e antifascistas, que lutaram pela República na guerra civil espanhola. Foram retirados em setembro de 1938.",
  "legião condor": "Unidade de aviões e tropas que a Alemanha nazista mandou para apoiar Franco. É lembrada pelo bombardeio de Guernica, em 1937.",
  "quinta do biberão": "Jovens de 17 e 18 anos, da classe de 1941, chamados às pressas pela República em 1938. O apelido, 'quinta del biberón' em espanhol, vem de mamadeira."
});

Object.assign(DEEP, {
  castillon: {
    war: "Guerra dos Cem Anos (1337–1453)",
    hook: "Um velho guerreiro inglês atacou um campo cheio de canhões, e a guerra mais longa da Europa acabou numa tarde.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Havia três séculos que os reis ingleses governavam a [[guiena]], o sudoeste da França em volta de Bordeaux. A região vendia vinho para a Inglaterra e não queria ser francesa: preferia reis distantes, que cobravam pouco. A [[guerra dos cem anos]] tinha começado em 1337, justamente por causa de quem mandava onde. Em 1429, Joana d'Arc virou a maré a favor de Carlos VII da França. Depois disso, os franceses retomaram região por região.",
        "Em 1450 a Normandia caiu. Em 1451 foi a vez de Bordeaux e Bayonne, e a Guiena inteira passou para a França. Mas a população de Bordeaux se arrependeu logo: os impostos novos eram pesados e o comércio de vinho sofreu. Em outubro de 1452, a cidade se revoltou e pediu ajuda à Inglaterra. Veio um exército pequeno, de cerca de 3.000 homens, sob o comando de John Talbot, conde de Shrewsbury, que tomou Bordeaux em 23 de outubro e reconquistou boa parte da região.",
        { h: "O caminho até Castillon" },
        { timeline: [
          ["17 out 1452", "Talbot desembarca perto de Bordeaux com cerca de 3.000 homens."],
          ["23 out 1452", "Bordeaux o recebe, e boa parte da Guiena volta para o lado inglês."],
          ["1453", "Carlos VII invade a Guiena com três exércitos, todos apontados para Bordeaux."],
          ["8 jul 1453", "Os franceses cercam Castillon, no rio Dordonha, e montam um campo ao lado."],
          ["16 jul", "Talbot sai de Bordeaux às pressas com os homens que tinha à mão."],
          ["17 jul", "Batalha de Castillon."]
        ]},
        "A decisão francesa de ir sobre Bordeaux foi também uma aposta com a artilharia. Carlos VII tinha investido em canhões como nenhum rei antes dele, e agora ia usá-los em campo aberto, não só contra muralhas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "John Talbot, conde de Shrewsbury" },
        "O mais famoso comandante inglês da época, tão temido que, segundo a tradição, as mães francesas assustavam os filhos com o nome dele. Tinha sido capturado em Patay, em 1429, e passou anos prisioneiro. Rumores diziam que tinha 75 ou 80 anos, mas os historiadores acham que tinha por volta de 66, o que já era idade avançada para a guerra. Segundo a tradição, por um juramento feito ao ser libertado, ele lutou em Castillon sem armadura. Era também orgulhoso: o historiador A. J. Pollard atribui em parte ao seu orgulho e à sua honra a decisão de continuar o ataque quando já era claro que o inimigo era forte.",
        { h: "Jean Bureau e os chefes franceses" },
        "O [[mestre da artilharia]] francês, Jean Bureau, era um burguês, não um nobre, e foi quem escolheu o terreno e desenhou o campo. O exército francês foi, na prática, comandado por um comitê de chefes, entre os quais Jean de Bueil, Jacques de Chabannes e o duque Pedro II da Bretanha, que comandava a cavalaria bretã. Carlos VII, o rei, não estava na batalha.",
        { h: "Os que vinham de longe" },
        "Do lado inglês havia o filho de Talbot, John, visconde de Lisle, que chegou com reforços, e o conde de Kendal, John de Foix, um gascão leal à Inglaterra. Do lado francês, uma massa de arqueiros e artilheiros, mais do que cavaleiros nobres, e por isso uma batalha que não parecia as de antes."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os franceses tinham entre 7.000 e 9.000 homens, incluindo cerca de 1.000 cavaleiros bretões, e uma artilharia enorme: a Wikipédia fala em até 300 bocas de fogo de vários tamanhos, número que convém tratar com cautela, porque as crônicas são pouco precisas. Os ingleses, segundo as fontes, entre 5.000 e 10.000, mas boa parte nunca chegou: Talbot saiu de Bordeaux em 16 de julho e chegou a Libourne ao anoitecer com cerca de 500 [[homens de armas|homem de armas]] e 800 arqueiros montados, tendo deixado o grosso do exército para trás.",
        { h: "O terreno" },
        "O campo que Bureau construiu era um [[campo entrincheirado]]: uma vala funda e um aterro reforçado com troncos, protegidos por uma [[paliçada]] em três lados e, no quarto, pela margem íngreme do riacho Lidoire. A linha era ondulada, de modo que os canhões podiam atirar de lado nos atacantes. O campo ficava fora do alcance dos canhões da cidade de Castillon.",
        { note: "A localização exata do campo é discutida. A hipótese mais antiga, de Léo Drouyn, o põe ao norte do Dordonha, atrás de um antigo braço do Lidoire. Outra o põe na frente de Castillon, a cerca de 200 metros da cidade. Como o riacho mudou de curso depois de 1496, a primeira hipótese perdeu força. O diagrama é, por isso, um esquema." },
        { h: "A batalha" },
        { formation: true },
        "Em 17 de julho, Talbot chegou perto de Castillon com sua vanguarda e derrotou um pequeno destacamento de arqueiros franceses num priorado. Viu então uma nuvem de poeira e achou que os franceses estavam em retirada. Era, na verdade, a gente que seguia o exército, como carroceiros e acompanhantes, deixando o campo antes da luta.",
        "Talbot avançou. Ao ver o campo, entendeu a situação, mas mandou continuar o ataque: parar teria sido recuar diante do inimigo, e ele não fazia isso. Seus homens chegaram à vala sob o fogo dos canhões. Os reforços foram chegando aos poucos, em fila, como Talbot os trazia de Libourne, e cada grupo era destroçado ao se aproximar. Segundo os relatos, cada tiro de canhão podia matar até seis homens.",
        "A luta durou mais de uma hora. Então a cavalaria bretã, de cerca de mil homens, comandada pelo duque Pedro II da Bretanha, bateu no flanco direito inglês. A linha se desfez. Talbot, o único inglês que seguia a cavalo, teve o cavalo atingido por um tiro de canhão e ficou preso debaixo dele. Um arqueiro francês o matou com um machado, segundo uma das versões da sua morte, que é discutida. O filho dele, Lisle, também morreu.",
        "Os sobreviventes correram para Castillon. O conde de Kendal foi um dos que se refugiaram no castelo. No dia seguinte, Bureau bombardeou a fortaleza, e a guarnição se rendeu em 19 de julho."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os franceses perderam cerca de 100 homens, e os ingleses, cerca de 4.000, entre mortos e presos. São estimativas modernas; as crônicas da época variam. O domínio inglês na Guiena desmoronou. Bordeaux, a cidade que tinha chamado Talbot, se rendeu em 19 de outubro de 1453.",
        { h: "Por que importa" },
        "Foi a primeira grande batalha europeia vencida sobretudo com artilharia de campanha. Na época, ninguém disse que a [[guerra dos cem anos]] tinha acabado: não houve tratado, e os dois reis continuaram se chamando de reis da França por muito tempo. Mas a Inglaterra nunca voltou a lutar pela Guiena, e no continente só Calais continuou inglesa, até 1558.",
        "Há quem relacione o fim da guerra com a crise seguinte: o rei Henrique VI, que perdeu a razão no fim de 1453, e a longa guerra civil inglesa, a [[guerra das rosas]], que começou poucos anos depois. A ligação direta é só especulação.",
        { h: "Curiosidades e controvérsias" },
        { note: "A morte de Talbot: o cavalo morto por uma bala e o machado do arqueiro são a versão mais repetida, mas as fontes divergem sobre como ele caiu." },
        { note: "Os números: os 300 canhões e os 4.000 ingleses mortos ou presos vêm de estimativas que não são firmes. Fique com a ideia de que a artilharia francesa fez a maior parte do trabalho." },
        { note: "O fim da guerra é uma data de livro de história. Quem viveu em 1453 não sabia que a guerra de 116 anos tinha acabado." }
      ]}
    ]
  },

  toulon: {
    war: "Guerras da Revolução Francesa, Primeira Coalizão (1792–1797)",
    hook: "Um oficial de artilharia desconhecido apontou os canhões para um forte na colina e a frota inimiga teve de fugir.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1793, a França revolucionária estava em guerra com quase toda a Europa, a chamada [[primeira coalizão]]. Dentro do país, a Revolução também tinha inimigos: no verão, várias cidades do sul se revoltaram contra a [[convenção nacional]] em Paris. Toulon, o maior porto de guerra da França no Mediterrâneo, onde ficava mais ou menos um terço dos navios de linha do país, entrou na revolta. Seus chefes eram [[realistas]], e eles abriram as portas para os inimigos da República.",
        "O almirante britânico Samuel Hood entrou na baía no fim de agosto, com navios britânicos e espanhóis, e a eles se juntaram tropas de Nápoles e da Sardenha. Os aliados ocuparam os fortes da entrada e as colinas em volta. Os realistas proclamaram rei o filho de Luís XVI, preso em Paris, como Luís XVII. Perder o porto e a frota significava perder o Mediterrâneo.",
        { h: "O caminho até a vitória" },
        { timeline: [
          ["fim de ago 1793", "A cidade e a frota francesa são entregues aos britânicos e espanhóis."],
          ["setembro", "O exército republicano cerca Toulon. Bonaparte assume a artilharia."],
          ["1º out", "Um ataque ao forte do monte Faron falha."],
          ["15 nov", "O ataque ao Forte Mulgrave, ordenado por Doppet, falha."],
          ["17 nov", "Dugommier assume o comando do cerco."],
          ["30 nov", "Os aliados fazem uma surtida, tomam uma bateria e perdem o general O'Hara, que é capturado."],
          ["16–17 dez", "O assalto ao 'Pequeno Gibraltar'."],
          ["18–19 dez", "Os aliados abandonam a cidade pelo mar."]
        ]},
        "O cerco teve três comandantes antes de acabar bem. O primeiro, o pintor-soldado Carteaux, não tinha plano. O segundo, o médico Doppet, perdeu o ataque de novembro e foi substituído em poucos dias. O terceiro, Dugommier, era um velho soldado de verdade, e foi com ele que o cerco virou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Napoleão Bonaparte, 24 anos" },
        "Corso, de uma família modesta, era oficial de artilharia sem fama. Foi o [[representante em missão]] Saliceti, também corso, quem lhe deu o comando da artilharia do cerco em setembro. Em outubro ele subiu a chefe de batalhão, e as fontes divergem quanto à data exata. Era [[jacobino|jacobinos]] de convicção e tinha escrito um panfleto a favor da República, que impressionou Saliceti. O que Bonaparte fez bem foi pensar o cerco como um problema de artilharia: onde pôr os canhões para tornar a baía inútil para os navios. A ideia de tomar os fortes que dominam a passagem entre as duas [[radas|rada]] era dele.",
        { h: "Dugommier" },
        "O general Jacques Dugommier, veterano de mais de 50 anos, chegou em 17 de novembro, escutou o plano de Bonaparte e o apoiou. Reuniu os soldados espalhados, organizou o ataque e comandou a ofensiva final.",
        { h: "Hood e os aliados" },
        "O almirante Samuel Hood, em Toulon, e o espanhol Juan de Lángara, com sua frota, tinham sob suas ordens os soldados do general britânico Charles O'Hara e de outros comandantes. Eram tropas de vários países, nem sempre bem coordenadas, e o forte que construíram na colina de Caire, o Forte Mulgrave, recebeu o apelido de 'Pequeno Gibraltar'."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo a Wikipédia, os aliados tinham cerca de 22.000 homens, entre britânicos, espanhóis, napolitanos, sardos e uns 1.500 realistas franceses, e dezenas de navios. Os republicanos tinham cerca de 32.000, um número que fontes diferentes não conseguem conciliar. Bonaparte chegou a reunir, segundo a Wikipédia francesa, cerca de cinquenta [[baterias|bateria]] de seis canhões.",
        { h: "O terreno" },
        "Toulon é um porto fechado por colinas. O monte Faron domina a cidade pelo norte. A oeste, uma península com dois fortes, L'Éguillette e Balaguier, fica na passagem estreita entre a pequena e a grande [[rada]]. Na colina de Caire, acima desses fortes, os aliados construíram o Forte Mulgrave, um grande [[reduto]] de terra, apoiado por três redutos menores. Quem tivesse canhões ali podia atirar nos navios ancorados.",
        { h: "O plano e o ataque" },
        { formation: true },
        "Bonaparte defendia que o ataque devia ir direto ao Pequeno Gibraltar. Tomado o forte, os canhões republicanos alcançariam os navios e os fortes de L'Éguillette e Balaguier, e a frota teria de sair. Primeiro foi construindo baterias, com nomes como 'da Montanha', 'dos Sans-Culottes' e 'da Convenção'. Em novembro e dezembro, Dugommier acrescentou outras, entre elas a 'dos Jacobinos' e a 'dos Homens Sem Medo'.",
        "Na noite de 16 para 17 de dezembro, depois de um bombardeio forte, as colunas atacaram o Forte Mulgrave. A luta foi corpo a corpo e durou a noite toda. Bonaparte foi ferido na coxa por um [[espontão]] manejado por um sargento britânico. Ao amanhecer, o forte estava tomado.",
        "No mesmo ataque, o general La Poype tomou o monte Faron e outras posições a leste. Os republicanos instalaram canhões contra L'Éguillette e Balaguier, e os aliados abandonaram esses fortes sem lutar. Em 18 de dezembro os aliados decidiram partir.",
        { h: "A fuga e as chamas" },
        "Era preciso evacuar milhares de soldados e civis, e queimar o que não desse para levar. O comodoro britânico Sidney Smith se ofereceu para incendiar os navios franceses e o arsenal. Dois navios carregados de pólvora explodiram sem aviso quando os botes de Smith passaram, o fogo ficou mais violento do que o planejado, e nem tudo foi destruído. Pelas listas da Wikipédia francesa, os britânicos queimaram completamente oito navios de linha e algumas fragatas, e levaram quatro navios. Os franceses recuperaram cerca de catorze, muitos danificados. Os britânicos recolheram cerca de 15.000 toulonenses, que fugiram com medo das represálias. A esquadra de Elphinstone tirou todos os soldados aliados sem perder um homem."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os republicanos entraram em Toulon em 19 de dezembro. As perdas das duas partes são pouco claras: a Wikipédia dá cerca de 4.600 homens para os aliados (entre mortos, feridos e presos) e cerca de 1.700 a 2.000 mortos ou feridos para os republicanos.",
        "Veio então a vingança. Os representantes Barras e Fréron comandaram a repressão. Segundo as fontes, entre 700 e 800 pessoas foram fuziladas no Champ de Mars nas semanas seguintes. A Convenção rebatizou a cidade de 'Port-la-Montagne'. A população caiu para cerca de 7.000 habitantes.",
        { h: "Por que importa" },
        "A França recuperou o seu maior porto no Mediterrâneo, e a ameaça britânica no sul diminuiu. Para Bonaparte, o cerco foi o trampolim: foi promovido a general de brigada em dezembro (a data exata, 19 ou 22, é discutida) e passou a comandar a artilharia do Exército da Itália. Não estava em Toulon quando as execuções começaram.",
        "Toulon mostrou também o método que ele repetiria por duas décadas: ver onde um ponto decisivo está, concentrar fogo ali e deixar o resto cair.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quem tomou o general O'Hara na surtida de 30 de novembro? As fontes não concordam: alguns relatos citam Bonaparte, outros apontam outro oficial. É um dos muitos detalhes que cresceram depois que ele ficou famoso." },
        { note: "A data do assalto: algumas fontes põem na noite de 16 para 17 de dezembro, outras falam em 17 de dezembro. O texto segue a primeira." },
        { note: "O papel de Bonaparte: ele foi decisivo na artilharia, mas o plano de ataque foi discutido com Dugommier e outros oficiais. A lenda posterior exagerou a sua parte." }
      ]}
    ]
  },

  barcelona: {
    war: "Guerra da Sucessão Espanhola (1701–1714)",
    hook: "A Europa fez a paz e deixou uma cidade sozinha. Ela resistiu por mais de um ano.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1700, o rei da Espanha, Carlos II, morreu sem filhos. Duas casas europeias reclamaram o trono: os [[bórbons]] da França, com Filipe V, e os [[habsburgos]] da Áustria, com o arquiduque Carlos. Era a [[guerra da sucessão espanhola]], que envolveu a Europa inteira. A Catalunha, de início, aceitou Filipe, mas se afastou dele, porque o novo governo ignorou as leis e os privilégios catalães e perseguiu quem os defendia. Em 1705, Barcelona se pôs ao lado do arquiduque Carlos.",
        "Em 1711 o arquiduque herdou o Império e saiu da Espanha para ser imperador. As potências europeias, cansadas da guerra, fizeram a paz. O [[tratado de utrecht]] reconheceu Filipe V como rei, e a Catalunha foi deixada de fora. Em 1713 as tropas aliadas saíram. Em julho, a [[junta de braços]] decidiu continuar a luta sozinha.",
        { h: "O caminho até o assalto" },
        { timeline: [
          ["25 jul 1713", "As tropas bourbônicas chegam às muralhas de Barcelona e cercam a cidade."],
          ["6 jul 1714", "O duque de Berwick substitui o duque de Popoli no comando do cerco."],
          ["12–13 jul", "Abrem-se as primeiras trincheiras de aproximação."],
          ["12–14 ago", "Dois assaltos pelas brechas do nordeste são repelidos."],
          ["início de set", "Berwick propõe a rendição. A cidade recusa."],
          ["11 set, de madrugada", "Assalto geral."],
          ["12–13 set", "A cidade decide capitular e é ocupada."]
        ]},
        "No começo, o cerco era frouxo: Popoli não tinha artilharia suficiente nem queria um assalto sangrento, e os catalães conseguiam mandar e receber algumas provisões. Em 1714, com o conflito em outras frentes encerrado, a França mandou ao cerco cerca de 20.000 soldados, canhões de grosso calibre e o duque de Berwick."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Rafael Casanova" },
        "Advogado, tornou-se, em 30 de novembro de 1713, [[conseller en cap]], o primeiro magistrado da cidade, e comandante da [[coronela]]. Não era soldado de carreira, e sim um dirigente civil que aceitou ir à frente quando a cidade precisou. Em 11 de setembro foi ferido na coxa. Sobreviveu e morreu em 1743.",
        { h: "Antoni de Villarroel" },
        "General do exército catalão, soldado de carreira, tinha lutado na guerra por anos. Em meio à crise chegou a renunciar, mas assumiu de novo o comando para o assalto de 11 de setembro. Foi ferido naquele dia, preso depois e morreu em 1726, na Corunha.",
        { h: "James Fitz-James, duque de Berwick" },
        "Filho ilegítimo do rei inglês Jaime II, serviu à França como marechal. Conhecia bem a guerra de sítio: aplicou o método de Vauban e levou o cerco à conclusão."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os bourbônicos tinham cerca de 40.000 homens, segundo a Wikipédia, mas as fontes divergem: os números vão de 39.000 a mais de 80.000, conforme se contem os que ocupavam o resto da Catalunha. Os defensores eram cerca de 10.000: tropas regulares, a [[coronela]], com 4.700 milicianos, e voluntários de outros territórios da Coroa de Aragão.",
        { h: "O terreno" },
        "A muralha de Barcelona tinha vários [[bastiões|bastião]]. Os pontos fracos ficavam a nordeste, entre os bastiões de Llevant, Santa Clara e Portal Nou, onde o terreno plano permitia cavar trincheiras. Villarroel construiu atrás da muralha uma linha interna de defesa. Do lado do mar, a frota francesa fechava o porto.",
        { note: "O diagrama é um esquema, sem escala, das posições." },
        { h: "O assalto" },
        { formation: true },
        "Com Berwick no comando, os franceses cavaram [[paralelas|paralela]] e [[sapas|sapa]] cada vez mais perto da muralha. Em 12 e 13 de agosto, a artilharia abriu duas [[brechas|brecha na muralha]] entre Portal Nou e Santa Clara, e os atacantes tentaram entrar. Os catalães os repeliram com perdas grandes (um relato dá 196 defensores e 900 atacantes mortos) e, no dia 14, ganharam também a luta pelo bastião de Santa Clara.",
        "Berwick continuou. No começo de setembro propôs a rendição, e a cidade respondeu que só aceitaria se suas leis fossem mantidas. Em 11 de setembro, de madrugada, a artilharia concentrada entre Llevant e Portal Nou abriu várias brechas, sete segundo uma fonte, e as colunas francesas e espanholas entraram. Casanova foi ao bastião de Portal Nou levando a bandeira de Santa Eulàlia, a santa padroeira da cidade, e os representantes da Diputació levaram a de São Jorge. Segundo a tradição, a bandeira de Santa Eulàlia só era erguida em momento de perigo extremo.",
        "Berwick lançou um ultimato às 6 da manhã, e a luta seguiu pelas ruas até a tarde. Casanova foi ferido por volta do meio-dia. Quando a frente se estabilizou, por volta das 14 horas, os chefes catalães se reuniram. Às 15 horas, o governo da cidade ainda chamou os cidadãos a lutar, dizendo que, se não viessem em número suficiente, pediria a capitulação. Villarroel foi encarregado de negociar, e Berwick aceitou uma trégua até o dia seguinte.",
        { h: "A rendição" },
        "Em 12 de setembro, o governo da cidade decidiu entregá-la. As tropas entraram em 13 de setembro. Berwick prometeu a vida e a propriedade dos habitantes, mas, segundo os historiadores catalães, as garantias não foram cumpridas: houve prisões e represálias. A [[capitulação]] do castelo de Cardona, em setembro, fechou a guerra na Catalunha."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas são incertas e as fontes divergem muito. A Wikipédia em catalão cita cerca de 6.850 mortos ou feridos do lado catalão e cerca de 15.000 do lado bourbônico, e adverte que os registros bourbônicos são contraditórios. A guerra ainda continuou em Mallorca, que caiu em 11 de julho de 1715.",
        { h: "Por que importa" },
        "Em 1716, os decretos de [[nova planta]] extinguiram as instituições e as leis próprias da Catalunha, e o catalão perdeu o uso nos atos oficiais. O bairro da Ribera, ao lado da muralha, foi demolido, e no lugar levantaram uma cidadela, a Ciutadella, para vigiar a cidade. As ruínas de casas da Ribera estão hoje debaixo do Mercat del Born. Os mortos da defesa foram enterrados onde hoje é o Fossar de les Moreres.",
        "O 11 de setembro é hoje a Diada, o Dia Nacional da Catalunha. É também a data em que a memória catalã se concentra, mesmo tendo sido uma derrota.",
        { h: "Curiosidades e controvérsias" },
        { note: "Por que lutavam? Os defensores serviam o arquiduque Carlos, que se dizia rei da Espanha, e os historiadores discutem se defendiam uma Catalunha à parte ou outro modelo de Espanha. A memória política de hoje costuma simplificar o debate." },
        { note: "A tradição da bandeira de Santa Eulàlia, erguida só em perigo extremo, é transmitida como tradição, e os detalhes de quem a levou e onde variam entre os relatos." },
        { note: "O almirante Ducasse teria se recusado a bombardear as praias sem uma ordem direta do rei, mas o episódio é relatado sem confirmação independente." }
      ]}
    ]
  },

  girona: {
    war: "Guerra Peninsular (1808–1814)",
    hook: "Uma cidade com muralhas medievais e um governador que ameaçava de morte quem falasse em rendição prendeu um exército francês por sete meses.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1808, Napoleão tirou a família real espanhola do trono e colocou o irmão, José Bonaparte, no lugar. A Espanha se levantou, e começou a [[guerra peninsular]], que os espanhóis chamam de Guerra da Independência. Na Catalunha, a cidade de Girona ficava na principal estrada entre a França e Barcelona. Quem a segurasse controlava o abastecimento dos exércitos franceses na região.",
        "Girona já tinha resistido a dois cercos franceses em 1808. O de 1809 é o terceiro, e o mais longo. Os franceses voltaram com um exército grande e a decisão de acabar com o problema.",
        { h: "O caminho até o cerco" },
        { timeline: [
          ["1º fev 1809", "Mariano Álvarez de Castro assume o governo militar de Girona."],
          ["1º abr", "Álvarez publica um edital que ordena a execução imediata de quem falar em rendição."],
          ["maio–jun", "Os franceses cercam a cidade (a data exata do início varia entre as fontes)."],
          ["13–14 jun", "Começa o bombardeio pesado."],
          ["7 jul", "Verdier ataca o forte de Montjuïc e é repelido."],
          ["11 ago", "Os defensores abandonam Montjuïc e explodem o castelo."],
          ["19 set", "O grande assalto francês às brechas é repelido."],
          ["12 out", "O marechal Augereau assume o comando francês."],
          ["10–12 dez", "Girona capitula."]
        ]},
        "A cidade tinha cerca de 13.000 a 14.000 habitantes. A guarnição era de cerca de 5.700 soldados e milicianos, mais 1.100 civis armados e 3.600 reforços, segundo a Wikipédia em inglês, que também dá um número maior, de cerca de 9.000, em outra parte do texto. Entre os defensores estava o regimento Ultônia, de origem irlandesa."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Mariano Álvarez de Castro" },
        "Oficial veterano, em 1809 era governador militar de Girona. Impôs disciplina dura: o edital de 1º de abril mandava executar quem falasse em render a cidade. Organizou civis, clérigos e mulheres para a defesa, e deu à cidade um ar de resistência até o fim. Quando adoeceu, delirante, passou o comando ao brigadeiro Juan Bolívar.",
        { h: "Os generais franceses" },
        "A mudança de comando foi um dos problemas do cerco. Reille começou, depois assumiu Verdier. O [[exército de cobertura]], de cerca de 15.000 homens, era do general Saint-Cyr, que, irritado por ter sido substituído, saiu no fim de setembro. Por alguns dias as tropas ficaram sem um comandante geral, até Augereau assumir, em 12 de outubro.",
        { h: "A Companhia de Santa Bárbara" },
        "As mulheres da cidade se organizaram nessa companhia: cuidaram dos feridos, levaram munição aos postos e participaram da defesa. Ela virou um dos símbolos do cerco."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os franceses reuniram cerca de 17.000 a 18.000 homens para o cerco (a Wikipédia em espanhol diz 18.000, o infobox em espanhol, 16.000) e um exército de cobertura de cerca de 15.000. Em sete meses, dispararam cerca de 20.000 bombas e granadas e 80.000 balas de canhão contra a cidade e o forte de Montjuïc, segundo um dos relatos; outros dão números menores.",
        { h: "O terreno" },
        "As muralhas eram velhas e finas, medievais em boa parte. O castelo de Montjuïc, numa colina ao sul, tinha canhões em número suficiente, mas menos de 300 homens que soubessem usá-los. Entre as obras da cidade estavam também os fortes de La Merced, Santa Maria, dos Capuchinhos e o do Calvário.",
        { h: "O desenrolar" },
        "O bombardeio começou na noite de 13 para 14 de junho. Em 12 de junho, Álvarez já tinha recusado um pedido de trégua. Em 7 de julho, Verdier atacou o forte de Montjuïc com 2.500 homens e perdeu mais de mil, por tiro de mosquete. Depois de semanas de bombardeio, a guarnição abandonou o forte em 11 de agosto e explodiu o castelo.",
        "Com Montjuïc perdido, os franceses concentraram o ataque no lado norte da muralha. Em 19 de setembro lançaram o grande assalto. A luta nas [[brechas|brecha na muralha]] foi corpo a corpo e sangrenta, e os franceses recuaram. Os números dessa jornada, segundo a Wikipédia, foram 624 mortos e feridos franceses contra 251 espanhóis. A data é lembrada em Girona como o 'Grande Dia', e foi pintada por Ramón Martí Alsina, em 1864.",
        "Depois de 19 de setembro, a fome e as doenças pesaram cada vez mais. Faltaram comida e remédios. Álvarez, doente, perdeu a lucidez. Em dezembro, o brigadeiro Bolívar assumiu o comando e a cidade se rendeu."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os franceses perderam cerca de 14.000 homens, mais da metade por doença. Do lado espanhol, calcula-se cerca de 10.000 mortos entre soldados e civis, quase todos de fome e doença. Dos cerca de 14.000 habitantes de antes, só cerca de 8.000 sobreviveram. Cerca de 3.000 soldados famintos se entregaram. Os números variam muito entre as fontes.",
        "Álvarez de Castro foi preso e levado à França, depois ao castelo de Sant Ferran, em Figueres, para ser julgado por traição. Foi encontrado morto na cela em janeiro de 1810, logo depois de chegar. A causa da morte nunca foi esclarecida.",
        { h: "Por que importa" },
        "O cerco segurou um grande exército francês durante uma temporada inteira de campanha na Catalunha. Álvarez virou herói nacional. A cidade ficou quase inabitável, e o historiador Charles Oman, que escreveu a história da guerra, descreveu um quadro de ruínas e doença.",
        { h: "Curiosidades e controvérsias" },
        { note: "Quando começou o cerco? A Wikipédia em inglês e a em espanhol dizem 6 de maio de 1809, mas o bombardeio pesado só começou em 13–14 de junho. Outras fontes dão junho." },
        { note: "A data da rendição aparece como 10, 11 ou 12 de dezembro. O dia 12 é o mais usado." },
        { note: "Não há diagrama para Girona. As fontes que consultamos descrevem bem o cerco, mas não as posições e movimentos de cada unidade no dia do grande assalto." }
      ]}
    ]
  },

  ebro: {
    war: "Guerra civil espanhola (1936–1939)",
    hook: "A República atravessou um rio de surpresa e depois passou quatro meses sem poder sair do outro lado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em julho de 1936, parte do exército espanhol se levantou contra o governo da [[república espanhola]]. Começava a [[guerra civil espanhola]]. Os rebeldes, os [[nacionalistas]], tinham o general Francisco Franco como chefe e recebiam armas e aviões da Alemanha e da Itália. A República era ajudada pela União Soviética e por voluntários de muitos países, as [[brigadas internacionais]], mas as potências ocidentais ficaram de fora, na política chamada de não intervenção.",
        "Em 1938 a República estava em má situação. Tinha perdido o norte do país e sofreu uma derrota em Teruel. Em abril, as tropas de Franco chegaram ao Mediterrâneo em Vinaròs e partiram o território republicano em dois: a Catalunha de um lado, Valência e o centro do outro. Franco então avançou sobre Valência.",
        { h: "O caminho até o rio" },
        { timeline: [
          ["mar 1938", "A França reabre a fronteira, e chega material de guerra à República."],
          ["abr 1938", "Franco chega ao mar em Vinaròs e divide a República."],
          ["15 mai", "Forma-se o Exército do Ebro, sob o tenente-coronel Juan Modesto."],
          ["24–25 jul", "À meia-noite, o exército republicano começa a atravessar o Ebro."],
          ["1º ago", "A XV Brigada Internacional ataca a cota 481, perto de Gandesa, e é repelida."],
          ["ago–nov", "Os nacionalistas contra-atacam, serra por serra."],
          ["16 nov", "Os últimos republicanos voltam à margem norte."]
        ]},
        "O plano era do general Vicente Rojo e foi aprovado pelo primeiro-ministro Juan Negrín. Atravessar o Ebro de surpresa, ocupar uma [[cabeça de ponte]] e forçar Franco a mandar tropas para lá, aliviando Valência. Havia também um objetivo político: mostrar às potências que a República ainda era capaz de lutar, e contar que uma guerra mais longa traria ajuda de fora."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Vicente Rojo e Juan Modesto" },
        "Rojo, chefe do estado-maior republicano, era um militar de carreira, estudioso e metódico, e desenhou a operação. Modesto, comunista, tinha começado como operário e subiu de posto pela própria guerra. Comandava o Exército do Ebro. Sob ele, Manuel Tagüeña (XV Corpo) e Enrique Líster (V Corpo) conduziram os ataques.",
        { h: "Francisco Franco" },
        "Franco dirigiu pessoalmente a campanha. Rejeitou a ideia de deixar os republicanos avançar e depois cercá-los. Escolheu a [[guerra de atrito]]: concentrar aviões e artilharia em pequenas áreas, destruir as pontes, e só mandar a infantaria quando o terreno estivesse arrasado. Era o mais lento e o mais caro em vidas, mas ele podia pagar mais do que o inimigo.",
        { h: "Yagüe e García Valiño" },
        "O general Juan Yagüe comandava o Corpo Marroquino, com as divisões que sustentaram o peso dos combates. O general Rafael García Valiño, do Corpo do Maestrazgo, chegou como reforço."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são incertos e variam conforme a fonte. A República tinha cerca de 80.000 a 90.000 homens na travessia e chegou a cerca de 100.000 a 130.000 no fim, segundo a Wikipédia em espanhol, com cerca de 250 canhões, 120 blindados e pouco mais de 200 aviões. Os nacionalistas começaram com cerca de 98.000 e chegaram a cerca de 185.000, com cerca de 550 canhões e mais de 300 aviões, entre eles os da [[legião condor]] alemã e da Aviação Legionária italiana.",
        { h: "O terreno" },
        "A batalha se deu na Terra Alta, na curva do Ebro, entre Mequinenza e Amposta. O rio é largo e fundo. Do outro lado, uma região de morros secos e serras: Pàndols, Cavalls, Gaeta, e, no centro, a cidade de Gandesa, nó das estradas. No verão, o calor passava dos 35 graus e quase não havia sombra nem água.",
        { note: "O diagrama é um esquema, sem escala. O rio e as serras estão simplificados." },
        { h: "A travessia" },
        { formation: true },
        "A travessia começou à 0h15 de 25 de julho, numa noite sem lua. Comandos mataram sentinelas e fixaram cabos para os barcos. Cerca de noventa barcos de dez homens cada, mais passarelas e três pontes de [[pontões|pontão]], levaram a infantaria. A surpresa foi quase total: só no primeiro dia, cerca de 4.000 homens da 50ª divisão nacionalista foram feitos prisioneiros. Tagüeña atravessou entre Mequinenza e Ascó, e Líster, em dezesseis pontos entre Benissanet e Amposta. Em 26 de julho, os republicanos ocupavam cerca de 800 km² e estavam nos arredores de Gandesa. Um ataque secundário, perto de Amposta, falhou.",
        "Foi então que a batalha virou. Franco mandou oito divisões e centenas de aviões. Os nacionalistas abriram as represas de Tremp e Camarasa, o que fez o rio subir e levou as pontes. Os engenheiros republicanos as refizeram, e a Legião Condor as bombardeou todos os dias. Só cerca de 22 tanques T-26 e poucos canhões conseguiram passar. A infantaria chegou a pé a Gandesa, exausta, sem canhões e sem tanques. Em 1º de agosto, a XV Brigada Internacional atacou a cota 481, diante de Gandesa, e teve muitas baixas. No dia 2, a ofensiva parou, e os republicanos começaram a cavar trincheiras.",
        "Daí em diante foi um combate de desgaste. Em 11 a 14 de agosto, os nacionalistas atacaram a serra de Pàndols, defendida por Líster. Tomaram Santa Magdalena, mas não a serra. Em 19 de agosto, Yagüe atacou o monte Gaeta. Entre 31 de agosto e 4 de setembro, com oito divisões, cerca de 300 canhões, 500 aviões e 100 tanques, atacaram a serra de Cavalls, e Corbera caiu em 4 de setembro. A ordem de Modesto foi: nem um metro de terreno ao inimigo.",
        "Em 21 de setembro, Negrín anunciou na Liga das Nações a retirada unilateral das Brigadas Internacionais. Em outubro, os nacionalistas tomaram Lavall e a cota 666. Em 30 de outubro, a serra de Cavalls caiu, em um dia, com cerca de mil prisioneiros. Em 2 de novembro foi Pàndols, e em 3 de novembro eles chegaram ao Ebro. Móra la Nova caiu em 7 de novembro. Em 16 de novembro, os últimos homens da 35ª divisão atravessaram de volta o rio, em Flix."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As perdas são muito discutidas. Pelas contas citadas por Preston, os republicanos tiveram cerca de 7.150 mortos, 20.000 feridos e 19.563 presos. Pelas contas de Thomas e Jackson, os nacionalistas tiveram entre 5.000 e 6.500 mortos e cerca de 30.000 feridos. Estimativas do total de perdas dos dois lados vão de 50.000–60.000 a 110.000. A República perdeu entre 130 e 150 aviões, segundo as estimativas.",
        "O exército republicano deixou de existir como força eficaz. Os nacionalistas também perderam oficiais e material experientes. Em 23 de dezembro Franco lançou a ofensiva da Catalunha, e Barcelona caiu em 26 de janeiro de 1939. A guerra acabou em 1º de abril.",
        { h: "Por que importa" },
        "Foi a maior e a mais longa batalha da guerra civil, e a maior em homens e material já travada em solo espanhol. Os historiadores discordam sobre o seu sentido. Antony Beevor vê na ofensiva uma decisão ditada em parte pela propaganda comunista, que destruiu o exército republicano para pouco ganho. Paul Preston e Helen Graham dizem que ela deteve o ataque a Valência, causou muitas perdas e prolongou a guerra por meses, mas que o Acordo de Munique, no fim de setembro, acabou com a esperança de ajuda ocidental e transformou um ganho político em derrota militar.",
        { h: "Curiosidades e controvérsias" },
        { note: "A [[quinta do biberão]]: entre os soldados havia rapazes de 17 e 18 anos, convocados às pressas em 1938. O apelido é mamadeira." },
        { note: "As represas: a história de que os nacionalistas abriram as comportas de Tremp e Camarasa para inundar as pontes é repetida em várias fontes, mas a ligação com um engenheiro que teria revelado a informação não tem confirmação independente." },
        { note: "A canção 'Ay Carmela', de origem mais antiga, ficou ligada à batalha do Ebro na memória republicana." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  castillon: {
    terrain: [
      { t: "sea", x: -8, y: 60, w: 116, h: 14, l: "Rio Dordonha" },
      { t: "sea", x: 88, y: 8, w: 4, h: 54, l: "Lidoire" },
      { t: "note", x: 12, y: 54, l: "Castillon" },
      { t: "note", x: 50, y: 6, l: "Esquema: a localização do campo é discutida" }
    ],
    units: [
      { id: "fCamp", s: "a", k: "camp", w: 28, h: 14, l: "Campo de Bureau" },
      { id: "fGuns", s: "a", k: "art", w: 18, h: 3, l: "Canhões (até ≈ 300, incerto)" },
      { id: "fPri", s: "a", k: "inf", w: 8, h: 3, l: "Arqueiros no priorado" },
      { id: "fBret", s: "a", k: "cav", w: 12, h: 4, l: "Cavalaria bretã" },
      { id: "eVan", s: "b", k: "inf", w: 14, h: 4, l: "Talbot e a vanguarda" },
      { id: "eRef", s: "b", k: "inf", w: 12, h: 3, l: "Reforços (Lisle)" }
    ],
    steps: [
      { t: "Início de julho de 1453. Os franceses cercam Castillon. Jean Bureau monta um campo com vala, aterro e estacas, e põe os canhões dentro. Talbot está longe, em Bordeaux.",
        p: { fCamp: [66, 34], fGuns: [66, 31], fPri: [32, 40], fBret: [78, 52], eVan: [6, 46], eRef: [6, 54] } },
      { t: "Em 16 de julho Talbot sai de Bordeaux às pressas com os homens que tem à mão. Na manhã de 17, chega perto de Castillon e derrota os arqueiros franceses do priorado.",
        p: { eVan: [26, 40], fPri: [32, 40] }, x: ["fPri"] },
      { t: "Talbot vê poeira e acha que os franceses estão em retirada. É a gente que seguia o exército saindo do campo. Ele avança sem esperar o resto da tropa.",
        p: { eVan: [42, 38] } },
      { t: "Ao ver o campo, Talbot não recua. Os ingleses chegam à vala sob o fogo dos canhões, atirando de lado pelo aterro ondulado.",
        p: { eVan: [50, 36], fGuns: [64, 31] } },
      { t: "Os reforços chegam aos poucos, em fila, e cada grupo é destroçado pela artilharia ao se aproximar. A luta dura mais de uma hora.",
        p: { eRef: [34, 40], eVan: [50, 37] } },
      { t: "A cavalaria bretã, de cerca de mil homens, bate no flanco direito inglês. A linha se desfaz.",
        p: { fBret: [52, 48, -30], eVan: [50, 38], eRef: [38, 40] } },
      { t: "O cavalo de Talbot é atingido por um tiro de canhão, e ele morre sob o ataque francês. Seu filho, Lisle, também morre. É o fim da resistência inglesa no campo.",
        p: { eVan: [46, 38], eRef: [38, 42] }, x: ["eVan", "eRef"] },
      { t: "Os sobreviventes correm para Castillon. Bureau bombardeia o castelo no dia seguinte, e a guarnição se rende em 19 de julho.",
        p: { fBret: [30, 50, -60], fCamp: [66, 34] } }
    ]
  },

  toulon: {
    terrain: [
      { t: "sea", x: 36, y: 46, w: 72, h: 28, l: "Grande rada" },
      { t: "sea", x: 40, y: 34, w: 24, h: 10, l: "Pequena rada" },
      { t: "hill", x: 24, y: 40, rx: 14, ry: 14, l: "Colina de Caire" },
      { t: "hill", x: 60, y: 10, rx: 20, ry: 7, l: "Monte Faron" },
      { t: "note", x: 50, y: 28, l: "Toulon" }
    ],
    units: [
      { id: "rW", s: "a", k: "inf", w: 16, h: 5, l: "Divisão do Oeste (Dugommier)" },
      { id: "rArt", s: "a", k: "art", w: 12, h: 4, l: "Baterias de Bonaparte" },
      { id: "rE", s: "a", k: "inf", w: 14, h: 5, l: "Divisão do Leste (La Poype)" },
      { id: "aMul", s: "b", k: "camp", w: 12, h: 8, l: "Forte Mulgrave" },
      { id: "aBal", s: "b", k: "camp", w: 10, h: 6, l: "L'Éguillette e Balaguier" },
      { id: "aFar", s: "b", k: "camp", w: 10, h: 5, l: "Forte do Faron" },
      { id: "aFleet", s: "b", k: "ship", w: 14, h: 4, l: "Frota de Hood e Lángara" }
    ],
    steps: [
      { t: "Setembro de 1793. Os aliados ocupam Toulon, os fortes da entrada e o Forte Mulgrave, na colina de Caire. A frota fica na rada. Os republicanos cercam por oeste e leste.",
        p: { rW: [8, 28], rArt: [10, 40], rE: [78, 12], aMul: [24, 40], aBal: [36, 50], aFar: [60, 12], aFleet: [60, 58] } },
      { t: "Bonaparte, no comando da artilharia, junta baterias em volta da colina de Caire. A ideia é alcançar os navios com os canhões.",
        p: { rArt: [14, 42] } },
      { t: "Os ataques do começo falham: no Faron (1º de outubro) e no Forte Mulgrave (15 de novembro).",
        p: { rE: [72, 14], rW: [10, 32] } },
      { t: "Dugommier assume em 17 de novembro, apoia o plano e acrescenta baterias. Em 30 de novembro, os aliados fazem uma surtida e tomam uma bateria, mas são rechaçados, e o general O'Hara é capturado.",
        p: { rArt: [16, 42], rW: [12, 34] } },
      { t: "Entre 16 e 17 de dezembro, depois de bombardeio forte, as colunas atacam o Forte Mulgrave. A luta é corpo a corpo, a noite toda. Bonaparte é ferido na coxa.",
        p: { rW: [20, 38], rArt: [18, 42] } },
      { t: "Ao amanhecer, o Forte Mulgrave está tomado. A leste, La Poype toma o monte Faron.",
        p: { rW: [24, 40], rE: [62, 14] }, x: ["aMul", "aFar"] },
      { t: "Com canhões na colina, os republicanos ameaçam a rada. Os aliados abandonam L'Éguillette e Balaguier sem lutar.",
        p: { rArt: [30, 46] }, x: ["aBal"] },
      { t: "Em 18 de dezembro os aliados decidem partir. Queimam parte da frota e do arsenal e evacuam. Os republicanos entram em Toulon em 19.",
        p: { aFleet: [92, 66], rW: [44, 32] } }
    ]
  },

  barcelona: {
    terrain: [
      { t: "sea", x: 70, y: 40, w: 38, h: 34, l: "Mar" },
      { t: "sea", x: -8, y: 62, w: 80, h: 12, l: "Mar" },
      { t: "note", x: 34, y: 48, l: "Barcelona" },
      { t: "note", x: 46, y: 22, l: "Portal Nou" },
      { t: "note", x: 58, y: 28, l: "Santa Clara" },
      { t: "note", x: 68, y: 36, l: "Llevant" }
    ],
    units: [
      { id: "bTr", s: "a", k: "inf", w: 22, h: 5, l: "Trincheiras de Berwick" },
      { id: "bArt", s: "a", k: "art", w: 12, h: 4, l: "Artilharia pesada francesa" },
      { id: "bCol", s: "a", k: "inf", w: 14, h: 5, l: "Colunas de assalto" },
      { id: "bFl", s: "a", k: "ship", w: 12, h: 4, l: "Frota francesa" },
      { id: "cWall", s: "b", k: "inf", w: 22, h: 5, l: "Defensores da muralha" },
      { id: "cInn", s: "b", k: "inf", w: 16, h: 4, l: "Linha interna (Villarroel)" },
      { id: "cCor", s: "b", k: "inf", w: 12, h: 4, l: "Coronela (Casanova)" }
    ],
    steps: [
      { t: "Verão de 1714. Berwick cerca Barcelona por terra, pelo norte e nordeste. A frota francesa fecha o porto. O ponto fraco da muralha fica entre Santa Clara e Portal Nou.",
        p: { bTr: [48, 6], bArt: [30, 8], bCol: [66, 8], bFl: [84, 66], cWall: [50, 30], cInn: [46, 42], cCor: [58, 38] } },
      { t: "Em 12 e 13 de julho abrem-se as primeiras trincheiras, em paralelas cada vez mais perto da muralha.",
        p: { bTr: [48, 14], bArt: [32, 14] } },
      { t: "Em 12 e 13 de agosto a artilharia abre duas brechas entre Portal Nou e Santa Clara. Os atacantes entram, mas os catalães os repelem, com perdas altas nos dois lados.",
        p: { bCol: [52, 22], cWall: [50, 30] } },
      { t: "Recuo dos atacantes. No dia 14, os catalães também vencem a luta pelo bastião de Santa Clara.",
        p: { bCol: [60, 10] } },
      { t: "Em 11 de setembro, de madrugada, a artilharia concentrada entre Llevant e Portal Nou abre várias brechas, sete segundo uma fonte.",
        p: { bArt: [58, 18], bTr: [54, 14] } },
      { t: "As colunas atacam as brechas. Casanova leva a bandeira de Santa Eulàlia ao bastião de Portal Nou, segundo a tradição.",
        p: { bCol: [54, 26], cCor: [52, 32], cWall: [50, 30] } },
      { t: "A luta passa para as ruas. Casanova e Villarroel são feridos. A linha interna segura a frente por volta das 14 horas.",
        p: { bCol: [52, 34], cInn: [48, 40], cCor: [52, 38] } },
      { t: "Às 15 horas o governo ainda chama a cidade a lutar, mas depois aceita negociar. Em 12 de setembro decide entregar a cidade, que é ocupada no dia 13.",
        p: { bCol: [44, 44], cWall: [40, 36], cCor: [40, 48] }, x: ["cWall", "cInn", "cCor"] }
    ]
  },

  ebro: {
    terrain: [
      { t: "sea", x: -8, y: 8, w: 72, h: 4, l: "Rio Ebro" },
      { t: "sea", x: 60, y: 8, w: 4, h: 50, l: "" },
      { t: "sea", x: 60, y: 54, w: 48, h: 4, l: "" },
      { t: "hill", x: 48, y: 34, rx: 7, ry: 8, l: "Serra de Pàndols" },
      { t: "hill", x: 50, y: 48, rx: 7, ry: 6, l: "Serra de Cavalls" },
      { t: "note", x: 24, y: 44, l: "Gandesa" },
      { t: "note", x: 38, y: 58, l: "Corbera" },
      { t: "note", x: 8, y: 5, l: "Mequinenza / Fayón" },
      { t: "note", x: 84, y: 48, l: "Amposta" },
      { t: "note", x: 24, y: 68, l: "Esquema sem escala" }
    ],
    units: [
      { id: "n50", s: "a", k: "inf", w: 16, h: 4, l: "50ª divisão (Campos)" },
      { id: "nGan", s: "a", k: "inf", w: 10, h: 4, l: "Gandesa" },
      { id: "nYag", s: "a", k: "inf", w: 14, h: 5, l: "Corpo Marroquino (Yagüe)" },
      { id: "nVal", s: "a", k: "inf", w: 14, h: 5, l: "Corpo do Maestrazgo (García Valiño)" },
      { id: "rTag", s: "b", k: "inf", w: 14, h: 5, l: "XV Corpo (Tagüeña)" },
      { id: "rLis", s: "b", k: "inf", w: 14, h: 5, l: "V Corpo (Líster)" },
      { id: "rInt", s: "b", k: "inf", w: 10, h: 4, l: "XV Brigada Internacional" },
      { id: "rTan", s: "b", k: "tank", w: 8, h: 3, l: "22 tanques T-26" }
    ],
    steps: [
      { t: "Noite de 24 para 25 de julho de 1938. O Exército do Ebro espera na margem leste e norte. Do outro lado, a 50ª divisão nacionalista guarda o rio. Gandesa fica atrás, no centro das estradas.",
        p: { n50: [44, 26], nGan: [24, 40], nYag: [10, 62], nVal: [28, 66], rTag: [72, 10], rLis: [84, 40], rInt: [76, 24], rTan: [90, 28] } },
      { t: "À 0h15 de 25 de julho, a travessia, em cerca de noventa barcos, sem lua. Tagüeña cruza entre Mequinenza e Ascó, e Líster em dezesseis pontos, entre Benissanet e Amposta.",
        p: { rTag: [56, 18], rLis: [58, 44], rInt: [58, 28] } },
      { t: "A surpresa é quase total. Só no primeiro dia, cerca de 4.000 homens da 50ª divisão são feitos prisioneiros.",
        p: { rTag: [50, 22], rLis: [54, 40], rInt: [50, 30], n50: [38, 30] }, x: ["n50"] },
      { t: "Em 26 de julho, os republicanos ocupam cerca de 800 km² e chegam aos arredores de Gandesa, a pé e sem canhões. Só uns 22 tanques conseguem atravessar.",
        p: { rTag: [40, 28], rLis: [42, 42], rInt: [34, 34], rTan: [58, 36] } },
      { t: "Franco manda oito divisões, bombardeia as pontes dia após dia e abre as represas de Tremp e Camarasa. A cheia leva as passarelas, e os suprimentos dos republicanos quase param.",
        p: { nYag: [14, 56], nVal: [30, 58], rTan: [62, 36] } },
      { t: "Em 1º de agosto, a XV Brigada Internacional ataca a cota 481, diante de Gandesa, e é repelida com perdas pesadas. No dia 2, a ofensiva republicana para.",
        p: { rInt: [28, 36], rTag: [36, 26], rLis: [38, 44] } },
      { t: "De 11 a 19 de agosto, os nacionalistas atacam as serras de Pàndols e Gaeta, e tomam Santa Magdalena, mas não a serra de Pàndols.",
        p: { nYag: [24, 52], nVal: [40, 56], rLis: [46, 38] } },
      { t: "De 31 de agosto a 4 de setembro, depois de forte barragem de canhões e aviões, os nacionalistas atacam Cavalls e tomam Corbera. Modesto manda não ceder um metro.",
        p: { nYag: [34, 52], nVal: [44, 54], rLis: [48, 46] } },
      { t: "Em outubro e novembro, os nacionalistas tomam Lavall, Cavalls e Pàndols e chegam ao rio. Em 16 de novembro, os últimos republicanos recuam para a margem norte, em Flix.",
        p: { nYag: [48, 40], nVal: [50, 52], rTag: [66, 14], rLis: [70, 36], rInt: [66, 24], rTan: [74, 30] } }
    ]
  }
});
