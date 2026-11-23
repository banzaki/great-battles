// In-depth battle, batch bj: karnal (1739).
// Checked against the English and Portuguese Wikipedia articles on the Battle of Karnal and on Nader Shah's invasion
// of the Mughal Empire, the Britannica entry on Karnal, and the works those pages cite (Axworthy, Lockhart, Tucker).
// Where sources disagree (date, numbers, who led the second sortie) the text says so.

Object.assign(GLOSSARY, {
  "dinastia afsárida": "A família de Nader Shah, da tribo afshar. Governou a Pérsia de 1736 a 1796, mas só Nader teve poder de verdade: depois da morte dele, o reino se despedaçou.",
  "jazayerchi": "Mosqueteiros de Nader Shah, com uniforme e treino. Eram a base da sua infantaria e atiravam em salvas.",
  "trono do pavão": "Trono de ouro e joias dos imperadores mogóis, em Délhi, famoso por seu valor e por um pavão de pedras preciosas. Nader o levou para a Pérsia em 1739.",
  "koh-i-noor": "Famoso diamante indiano, 'Montanha de Luz'. Nader o tomou em Délhi em 1739. Passou por vários donos e acabou entre as joias da Coroa britânica.",
  "rupia mogol": "Moeda de prata do Império Mogol. Os cronistas calculam o butim de Nader em Délhi em cerca de 700 milhões de rupias, um número que hoje ninguém consegue confirmar."
});

Object.assign(DEEP, {
  karnal: {
    war: "Invasão persa da Índia mogol (1738–1739)",
    hook: "Cavaleiros com pequenos canhões nas costas de camelos desfizeram, em menos de três horas, o maior império da Índia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1739, o Império [[mogol]] ainda era um dos Estados mais ricos do mundo. Governava quase toda a Índia, de Cabul a Bengala, e sua capital, Délhi, tinha centenas de milhares de habitantes. Mas a riqueza escondia a fraqueza: o imperador Muhammad Shah, no trono desde 1719, gostava de música e festas, e os governadores das províncias, os [[nababos|nababo]], obedeciam cada vez menos. Os exércitos eram enormes, mas pouco treinados, e cada chefe só queria proteger a si mesmo.",
        "Do outro lado das montanhas, a Pérsia tinha acabado de ganhar um homem fora de série. Nader nasceu em 1688, no Khorasan, de família da tribo afshar. Começou como chefe de bando e se tornou general do [[xá]] safávida Tahmasp II. Expulsou os afegãos que tinham tomado a Pérsia, derrotou os otomanos e, em 1736, deixou de lado os safávidas e se coroou, fundando a [[dinastia afsárida]].",
        { h: "O caminho até Karnal" },
        { timeline: [
          ["1738", "Nader toma Kandahar, no Afeganistão, e depois Cabul. No começo diz que só procura afegãos fugitivos."],
          ["1738", "O enviado de Nader é barrado em território mogol e morto, enquanto o imperador não responde às suas cartas."],
          ["Setembro de 1738", "Nader contorna o exército de Nasir Khan no desfiladeiro de Khyber, o destrói e ocupa Peshawar."],
          ["8 de janeiro de 1739", "Atravessa o rio Chenab, no Punjab. O caminho para Délhi está aberto."],
          ["Fevereiro de 1739", "Muhammad Shah e seus nobres chegam a Karnal e se fortificam."]
        ]},
        "Por que Nader invadiu é discutido. Lockhart vê um conquistador que precisava das riquezas da Índia, porque a Pérsia estava quase falida depois de tantas guerras. Tucker lembra que a crise financeira persa vinha de antes. Axworthy diz que Nader queria dinheiro para pagar o exército e fôlego antes de voltar a lutar contra os otomanos. Fontes indianas da época culpam os próprios nobres mogóis, que teriam conspirado contra o imperador."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Nader Shah, 50 anos" },
        "Soldado de carreira, sem sangue real, sabia fazer três coisas muito bem: escolher o terreno, manter o exército em movimento e pagar os soldados. Seus homens eram quase todos cavaleiros, mas levavam armas de fogo: mosqueteiros e canhões leves que podiam ser levados em camelos. Em Karnal, ele não quis atacar um acampamento fortificado. Queria que os mogóis saíssem de lá aos pedaços.",
        { h: "Muhammad Shah, 37 anos" },
        "O imperador mogol não era covarde, mas nunca tinha comandado uma guerra de verdade. Ficou no acampamento durante a batalha e deixou as decisões para os nobres, que não se entendiam.",
        { h: "Os nobres mogóis" },
        "O [[nababo]] Saadat Khan, de Awadh, chegou a Karnal depois de um mês de marcha, com os homens exaustos, e quis ir para a luta na hora. Khan Dauran era o chefe do centro. Nizam-ul-Mulk, o velho governante do Decão, era o mais experiente e aconselhou paciência, mas não foi ouvido. A rivalidade entre esses chefes explica boa parte do desastre."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são incertos. Para os persas, a estimativa mais citada é de uns 55.000 cavaleiros (o cronista Mirza Mahdi diz que Nader saiu da Pérsia com cerca de 80.000, mas deixou guarnições pelo caminho). Algumas descrições falam em cerca de 20.000 [[jazayerchi]] entre eles, e centenas de [[zamburaks|zamburak]], os canhões giratórios.",
        "Os mogóis tinham cerca de 75.000 combatentes em campo, entre eles uns 50.000 cavaleiros, e um enorme séquito. As fontes falam em até 300.000 pessoas no acampamento, 2.000 [[elefantes de guerra]] e 3.000 canhões. A [[artilharia]] mogol era grande e pesada demais, e quase nenhuma peça saiu do acampamento. Os elefantes faziam dos comandantes alvos fáceis.",
        { note: "Os números dos dois lados vêm de cronistas e de estimativas modernas que não coincidem. Usamos o valor mais citado para cada lado." },
        { h: "O terreno e as posições" },
        "Karnal fica numa planície ao norte de Délhi, entre o rio Jamuna e um canal. Os mogóis ficaram num acampamento fortificado, com [[trincheiras|trincheira]] e muro de barro, com um bosque na frente e o canal protegendo um flanco. Nader montou seu acampamento ao norte, perto de Kunjpura, com o Jamuna garantindo água. Não atacou: preferiu cortar o caminho entre os mogóis e Délhi e esperar um erro.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, Saadat Khan chegou à noite com parte da coluna, e a bagagem ficou para trás. Patrulhas persas tomaram uns 500 camelos. Na manhã seguinte, num conselho, Nizam-ul-Mulk sugeriu esperar, porque os homens de Awadh estavam cansados. Saadat Khan não quis ouvir e saiu com cavaleiros e infantaria, sem artilharia. As fontes dão de 2.000 a 5.000 homens.",
        "Segundo, a cavalaria leve persa fingiu recuar, a clássica [[retirada fingida]]. Saadat Khan a perseguiu por cerca de três quilômetros, longe do acampamento. De repente a cortina de cavaleiros se abriu, e centenas de zamburaks e [[mosquetes|mosquete]] dispararam à queima-roupa. A vanguarda dele se desfez.",
        "Terceiro, por sugestão do Nizam, Khan Dauran saiu de elefante com cerca de 8.000 cavaleiros. Seu grupo ficou a mais de um quilômetro do de Saadat, sem poder ajudá-lo, e caiu no fogo cruzado de uma [[emboscada]] preparada pela ala esquerda persa, perto de Kunjpura. Khan Dauran foi gravemente ferido e levado para o acampamento. Algumas fontes citam, nesse ponto, outro nobre mogol como chefe da saída; a versão com Khan Dauran é a dos relatos mais citados.",
        "Quarto, cerca de mil homens de Khan Dauran desmontaram, amarraram as abas dos casacos umas nas outras e lutaram a pé até morrer.",
        "Quinto, Saadat Khan lutou até o fim. Ferido por flechas e preso pelo próprio elefante, que entrou em pânico, foi pego por um soldado persa de Nishapur, que subiu até a [[howdah]]. Segundo um relato, convenceu o nobre a se render falando o nome de uma pessoa da sua terra.",
        "Sexto, sem os dois chefes, o exército mogol se desmanchou. Os cavaleiros persas perseguiram os fugitivos até o canal. Nader não atacou o acampamento do imperador, que era forte: preferiu cercá-lo e esperar a rendição. A batalha inteira, segundo as fontes, durou menos de três horas.",
        { note: "Uma imagem famosa, de camelos com fogo nas costas para assustar os elefantes, aparece em ilustrações e tapetes, mas os historiadores a tratam com cautela e dizem que provavelmente é dramatização. O que as fontes confirmam é o uso de zamburaks em camelos." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os mogóis perderam cerca de 20.000 homens, segundo o número mais repetido. Axworthy fala em uns 10.000, e outras fontes citam até 30.000. Cerca de 400 oficiais teriam morrido. Os persas perderam muito pouco: cerca de 1.100, dos quais 400 mortos, segundo Axworthy.",
        "Khan Dauran morreu dos ferimentos, e Saadat Khan foi para o campo de Nader como prisioneiro. Em 26 de fevereiro, Muhammad Shah foi visitar Nader e se entregou. Nader entrou em Délhi em 20 de março, com o imperador a seu lado.",
        { h: "O saque de Délhi" },
        "Na noite de 21 de março, correu em Délhi o boato de que Nader tinha sido morto, e a população atacou soldados persas. De manhã, Nader mandou os homens matarem. Segundo a tradição, ergueu a espada na mesquita de Roshan-ud-Daulah como sinal. As estimativas de mortos vão de 20.000 a 30.000 em umas seis horas, e um representante holandês fala em cerca de 10.000 mulheres e crianças escravizadas. Não há números certos. A matança só parou quando Muhammad Shah pediu clemência.",
        "Nader tomou o tesouro, o [[trono do pavão]] e os diamantes [[koh-i-noor]] e Darya-i-Noor, além de uma multa de 20 milhões de rupias sobre a cidade. O butim é estimado em cerca de 700 milhões de [[rupias|rupia mogol]]. Deixou Muhammad Shah no trono, mas ficou com os territórios a oeste do rio Indo. Em maio saiu da Índia, e durante a volta sikhs atacaram a coluna, libertaram prisioneiros e tomaram parte do butim.",
        { h: "Por que importa" },
        "Foi a maior vitória de Nader. O Império Mogol ficou sem tesouro e sem prestígio, e os governadores passaram a agir quase como reis. Para Axworthy, sem esse golpe a conquista britânica da Índia poderia ter vindo mais tarde ou de outra forma. Para a Pérsia, o dinheiro foi tanto que Nader suspendeu os impostos por três anos. Foi assassinado por seus próprios oficiais em 1747, e seu império se desfez.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data: algumas fontes dão 13 de fevereiro, outras 24. Parece ser o mesmo dia em dois calendários, o juliano e o gregoriano, que diferiam em 11 dias nessa época. A terça-feira da batalha corresponde a 24 de fevereiro no calendário gregoriano." },
        { note: "O aviso: dizem que os oficiais do acampamento mogol só souberam da chegada de Nader quando os coletores de capim voltaram feridos, gritando que ele tinha chegado." },
        { note: "A ausência: Khan Dauran pediu ajuda aos chefes rajputs e aos marathas, que não vieram." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  karnal: {
    terrain: [
      { t: "sea", x: 92, y: 0, w: 8, h: 70, l: "Rio Jamuna" },
      { t: "note", x: 8, y: 5, l: "Norte ↑" },
      { t: "note", x: 20, y: 17, l: "Kunjpura" },
      { t: "note", x: 20, y: 66, l: "Karnal" }
    ],
    units: [
      { id: "pCen", s: "a", k: "cav", w: 16, h: 5, l: "Nasrullah (centro)" },
      { id: "pRig", s: "a", k: "cav", w: 12, h: 5, l: "Tahmasp Khan (direita)" },
      { id: "pAmb", s: "a", k: "cav", w: 12, h: 5, l: "Fath Ali e Lotf Ali (emboscada)" },
      { id: "pLgt", s: "a", k: "cav", w: 12, h: 4, l: "Cavalaria leve (isca)" },
      { id: "pGun", s: "a", k: "art", w: 12, h: 3, l: "Zamburaks e mosquetes" },
      { id: "pNad", s: "a", k: "cav", w: 8, h: 4, l: "Nader e 1.000 afshares" },
      { id: "pCmp", s: "a", k: "camp", w: 12, h: 5, l: "Acampamento persa" },
      { id: "mSaa", s: "b", k: "cav", w: 14, h: 5, l: "Saadat Khan (Awadh)" },
      { id: "mDau", s: "b", k: "ele", w: 14, h: 4, l: "Khan Dauran" },
      { id: "mNiz", s: "b", k: "cav", w: 12, h: 4, l: "Nizam-ul-Mulk" },
      { id: "mEmp", s: "b", k: "cav", w: 14, h: 5, l: "Muhammad Shah" },
      { id: "mVaz", s: "b", k: "cav", w: 12, h: 5, l: "Vizir (esquerda)" },
      { id: "mArt", s: "b", k: "art", w: 12, h: 3, l: "Artilharia pesada" },
      { id: "mCmp", s: "b", k: "camp", w: 30, h: 6, l: "Acampamento mogol" }
    ],
    steps: [
      { t: "Os mogóis estão num acampamento com trincheiras e muro de barro, ao sul. Os persas ficam ao norte, perto de Kunjpura, com o rio Jamuna garantindo água.",
        p: { pCen: [46, 22], pRig: [62, 20], pAmb: [28, 20], pLgt: [46, 30], pGun: [46, 36], pNad: [72, 24], pCmp: [84, 10],
             mSaa: [20, 70], mDau: [66, 58], mNiz: [50, 56], mEmp: [50, 63], mVaz: [34, 58], mArt: [50, 52], mCmp: [50, 66] } },
      { t: "Saadat Khan chega de noite, com os homens exaustos e a bagagem para trás. Patrulhas persas tomam uns 500 camelos da coluna.",
        p: { pLgt: [28, 40], mSaa: [22, 62] } },
      { t: "Pela manhã, o Nizam aconselha esperar. Saadat Khan não ouve e sai do acampamento sem artilharia, com cavaleiros e infantaria.",
        p: { mSaa: [30, 52] } },
      { t: "A cavalaria leve persa finge fugir e atrai Saadat Khan para longe do acampamento, cerca de três quilômetros.",
        p: { pLgt: [40, 38], mSaa: [36, 46] } },
      { t: "A cortina se abre. Zamburaks e mosquetes disparam à queima-roupa, e a vanguarda de Saadat Khan se desfaz.",
        p: { pGun: [40, 34], pLgt: [30, 38], pCen: [44, 30], mSaa: [36, 40] } },
      { t: "Khan Dauran sai de elefante com uns 8.000 cavaleiros e perde contato com Saadat Khan. A ala esquerda persa o espera em emboscada.",
        p: { mDau: [56, 46], pAmb: [32, 28] } },
      { t: "Khan Dauran cai no fogo cruzado, é ferido e levado de volta. Cerca de mil dos seus desmontam e lutam a pé até morrer.",
        p: { mDau: [52, 52], pAmb: [38, 32], pRig: [54, 28], pNad: [60, 34] } },
      { t: "O elefante de Saadat Khan entra em pânico e prende o dono. Um soldado persa sobe na howdah e o captura.",
        p: { mSaa: [36, 38] }, x: ["mSaa"] },
      { t: "Sem os dois chefes, o exército mogol se desfaz. Nader não ataca o acampamento: fecha o caminho para Délhi e espera a rendição.",
        p: { mDau: [52, 56], mNiz: [50, 58], mVaz: [34, 60], pNad: [50, 46], pCen: [44, 40], pRig: [60, 40] }, x: ["mDau"] }
    ]
  }
});

// ---------- Malplaquet, Culloden, Rossbach, Kunersdorf ----------
// Malplaquet: English and French Wikipedia on the battle, Britannica, the works they cite (Churchill, Falkner).
// Culloden: English and French Wikipedia, National Trust for Scotland, Cumberland's dispatch in the London Gazette.
// Rossbach: English and French Wikipedia, Britannica (Frederick's own account, Bodart, Tucker for the losses).
// Kunersdorf: English and French Wikipedia and the works they cite (Duffy, the Prussian General Staff history).
// Numbers differ a lot between sources for all four battles, and the text gives the range.

Object.assign(GLOSSARY, {
  "casa militar do rei": "As tropas de elite que guardavam o rei da França, a cavalaria entre elas. Seus oficiais e muitos soldados eram nobres, e a unidade era a joia do exército francês.",
  "redente": "Trecho de fortificação em forma de dente ou de ângulo saliente, que permite atirar de lado nos atacantes que chegam à parede.",
  "coluna de marcha": "Formação em fila longa e estreita, boa para andar depressa e péssima para lutar: um exército atacado assim só consegue usar a frente e uma parte das tropas.",
  "jacobitas": "Partidários dos Stuarts, a antiga dinastia real da Inglaterra e da Escócia, expulsa em 1688. Queriam devolver o trono ao rei exilado e à sua família. O nome vem de Jacobus, Tiago em latim.",
  "carga highland": "O ataque dos clãs escoceses: correr em massa contra o inimigo logo depois de uma salva de tiros e lutar de perto, com espada larga e escudo. Funcionou em Prestonpans, em 1745, mas falhou contra metralha e baionetas em Culloden.",
  "piquetes irlandeses": "Unidades de soldados irlandeses a serviço da França, enviadas em apoio aos jacobitas. Eram pequenas e, em Culloden, cobriram a retirada."
});

Object.assign(DEEP, {
  malplaquet: {
    war: "Guerra da Sucessão Espanhola (1701–1714)",
    hook: "A batalha mais sangrenta do século XVIII: os aliados ficaram com o campo, mas foi a França que saiu de cabeça erguida.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1700 morreu Carlos II, rei da Espanha, sem filhos. Seu testamento deixou o trono para um neto do rei francês Luís XIV. Inglaterra, Províncias Unidas (a Holanda) e Áustria temiam ver França e Espanha sob a mesma família e formaram a [[grande aliança]] para impedir isso. A guerra começou em 1701 e se arrastou por toda a Europa e pelas colônias.",
        "Do lado aliado, dois generais viraram lenda: o inglês John Churchill, duque de Marlborough, e o príncipe Eugênio de Saboia, a serviço da Áustria. Juntos venceram os franceses em Blenheim (1704), Ramillies (1706) e Oudenarde (1708). Em 1709 a França estava quase falida e o inverno foi tão duro que a fome provocou motins. As negociações de paz em Haia fracassaram em abril, e a guerra continuou.",
        { h: "O caminho até Malplaquet" },
        { timeline: [
          ["Abril de 1709", "As conversas de paz em Haia fracassam."],
          ["3 de setembro", "Os aliados tomam Tournai e marcham sobre Mons."],
          ["9 de setembro", "Chuva forte atrasa os aliados, e o marechal Villars usa o dia para cavar trincheiras."],
          ["11 de setembro", "Batalha de Malplaquet."],
          ["21 de outubro", "Mons se rende aos aliados."]
        ]},
        "Luís XIV mandou Villars evitar a queda de Mons. Villars não conseguiu impedir o cerco, mas escolheu lutar assim mesmo: disse ao rei que o exército se desmancharia de fome e de desânimo se não lutasse."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Marlborough, 59 anos, e Eugênio, 45" },
        "Marlborough comandava o exército aliado e era um mestre da logística e da manobra. Eugênio, de origem francesa e inimigo pessoal de Luís XIV, comandava a ala direita. Os dois tinham vencido tantas vezes que acreditavam que a França não aguentaria mais um golpe.",
        { h: "Villars, 56 anos, e Boufflers, 65" },
        "Claude de Villars era o melhor general que restava à França: ousado, vaidoso e muito querido pelos soldados. O marechal de Boufflers, bem mais velho, era famoso pela defesa de Lille em 1708. Com a França em ruínas, aceitou servir sob as ordens de Villars, embora fosse mais antigo no posto, e foi ele quem comandou a retirada.",
        { h: "O príncipe de Orange e os holandeses" },
        "Os holandeses, que pagavam parte da guerra e sofriam com ela, atacaram a ala esquerda aliada sob as ordens do príncipe de Orange. Insistiram no ataque mesmo com perdas altíssimas, e Marlborough assumiu a culpa de não tê-lo vigiado mais de perto."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os aliados tinham entre 86.000 e 110.000 homens, conforme a fonte, e cerca de 100 canhões. Os franceses tinham entre 75.000 e 90.000 e cerca de 80 canhões. Havia soldados de muitos países nos dois lados: bávaros, irlandeses e suíços entre os franceses, britânicos, holandeses, alemães, dinamarqueses e também suíços entre os aliados.",
        { note: "Malplaquet foi a última batalha em que mercenários suíços lutaram diretamente uns contra os outros, até Bailén, em 1808." },
        { h: "O terreno" },
        "Os franceses ocupavam a brecha de Malplaquet, um espaço aberto entre dois bosques: o Bois de Sars, à esquerda deles, e o Bois de Lanière, à direita. Villars aproveitou o dia extra para cavar trincheiras e levantar [[redutos|reduto]] e [[redentes|redente]] no centro, e entrincheirou também a borda dos dois bosques. A cavalaria, inclusive a [[casa militar do rei]], ficava atrás da infantaria.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, às 7h os canhões aliados abriram fogo até umas 8h30. Depois Eugênio atacou o Bois de Sars com os alemães e dinamarqueses do general Lottum e do general Schulenburg. A luta no bosque foi dura, com muitas perdas dos dois lados, e Eugênio foi ferido de leve, mas ficou no campo.",
        "Segundo, por volta das 9h os holandeses atacaram a direita francesa, onde estava Boufflers. Foram rechaçados e voltaram com 17 batalhões de reforço. Tomaram a fazenda de Blairon e foram jogados de novo para a linha de partida. Os homens de Boufflers não contra-atacaram, e a [[casa militar do rei]] ficou cerca de uma hora e meia debaixo de fogo, sem se mexer.",
        "Terceiro, a pressão de Eugênio fez Villars tirar tropas do centro para reforçar a esquerda. Nesse momento chegou a coluna do general Withers, com 21 batalhões vindos de Tournai, que fez uma volta pelo Bois de Sars e atacou a esquerda francesa pelo flanco. Villars mandou mais 12 batalhões para lá. Por volta do meio-dia, uma bala o atingiu no joelho. Ele passou o comando a Boufflers e foi levado para fora do campo.",
        "Quarto, com o centro enfraquecido, a infantaria britânica do conde de Orkney avançou e tomou os redentes. Aí veio o maior choque de cavalaria do século: a cavalaria aliada entrou pela brecha e foi atacada pela [[casa militar do rei]]. Os aliados foram empurrados, mas a infantaria britânica rechaçou os franceses, e os aliados avançaram de novo.",
        "Quinto, a esquerda francesa começou a ceder sob os ataques de Withers e Schulenburg, e o general Puységur, que assumira o comando dali, mandou recuar. Só depois que a cavalaria holandesa ameaçou a retaguarda é que a infantaria holandesa tomou as trincheiras do lado direito.",
        "Sexto, por volta das 15h Boufflers percebeu que a cavalaria não aguentaria mais e mandou a retirada geral, em boa ordem e com a artilharia, em direção a Le Quesnoy e Valenciennes. Os aliados, exaustos, não perseguiram."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam em geral de 21.000 a 25.000 mortos e feridos, e as estimativas vão de 15.000 a 30.000. Só os holandeses perderam 8.462. Os franceses perderam de 11.000 a 14.000, e alguns dão números menores ou maiores. O conde de Orkney escreveu que os mortos ficaram tão juntos quanto um rebanho de ovelhas. Os franceses também perderam 16 canhões.",
        "Quase todos os historiadores consideram Malplaquet uma vitória aliada, porque a França deixou o campo. Mas foi uma [[vitória de pirro]]. Boufflers escreveu ao rei que nunca o infortúnio fora acompanhado de tanta glória, e Villars disse a Luís XIV que, se Deus lhes desse outra derrota igual, os inimigos estariam destruídos.",
        { h: "Por que importa" },
        "Mons se rendeu em 21 de outubro, e os aliados tomaram outras praças, mas não conseguiram entrar na França. O exército francês recuperou a confiança depois de anos de derrotas, e a França acabou conseguindo condições melhores no [[tratado de utrecht]], em 1713. Na Inglaterra, as perdas ajudaram a oposição tory a ganhar as eleições de outubro de 1710. Marlborough foi substituído por Ormonde em 1711.",
        { h: "Curiosidades e controvérsias" },
        { note: "Segundo a tradição, boatos sobre a morte de Marlborough depois de Malplaquet inspiraram a canção francesa 'Malbrough s'en va-t-en guerre', ainda cantada como cantiga de ninar." },
        { note: "Os números de baixas variam tanto que algumas fontes francesas dão só 6.000 perdas para a França, enquanto as mais citadas em inglês dão de 11.000 a 14.000." },
        { note: "Marlborough ofereceu transporte para os feridos franceses e, segundo Churchill, mal dormiu naquela noite por causa do sofrimento dos feridos." }
      ]}
    ]
  },

  culloden: {
    war: "Levante jacobita de 1745–1746",
    hook: "Em menos de uma hora, a última batalha em solo britânico acabou com o sonho dos Stuarts e com o mundo dos clãs.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1688 o rei católico Jaime II foi expulso da Inglaterra, e o trono foi para os protestantes. Desde então, os [[jacobitas]] sonhavam com a volta dos Stuarts. Em 1714, com a morte da rainha Ana, o trono passou à casa alemã de Hanôver. A Escócia ainda tinha muitos descontentes, em especial nas Terras Altas, onde os [[clãs|clã]] eram a base da sociedade.",
        "Em 1745, o jovem Charles Edward Stuart, neto de Jaime II e criado no exílio, desembarcou na Escócia, quase sem dinheiro e sem a ajuda prometida da França. Os chefes dos clãs o seguiram mesmo assim. O que se seguiu foi uma campanha espantosa.",
        { h: "O caminho até Culloden" },
        { timeline: [
          ["Agosto de 1745", "Charles ergue sua bandeira em Glenfinnan e reúne os clãs."],
          ["Setembro de 1745", "Toma Edimburgo e vence o exército do governo em Prestonpans, com uma [[carga highland]]."],
          ["Dezembro de 1745", "Avança até Derby, a uns 200 km de Londres, mas os chefes votam por recuar."],
          ["Janeiro de 1746", "Vence outra vez em Falkirk."],
          ["12 de abril de 1746", "O duque de Cumberland, filho do rei Jorge II, atravessa o rio Spey com o exército do governo."],
          ["15 a 16 de abril", "Os jacobitas tentam um ataque noturno que fracassa. Na manhã seguinte, lutam em Culloden."]
        ]},
        "O rei Jorge II mandou seu filho Cumberland, de 25 anos, acabar com a revolta. Depois de Derby, os jacobitas recuaram para o norte, e Cumberland os seguiu pelo litoral até Inverness."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Charles Edward Stuart, 25 anos" },
        "O 'Bonnie Prince Charlie' era corajoso e carismático, mas sem experiência militar. Brigava com seus oficiais, preferia os conselhos de seu secretário irlandês John O'Sullivan e queria lutar em Culloden mesmo contra o parecer de Lord George Murray.",
        { h: "Lord George Murray, 51 anos" },
        "O melhor general jacobita, escocês experiente, tinha vencido em Prestonpans e Falkirk. Rejeitou o terreno de Culloden por favorecer o governo, que tinha artilharia e cavalaria. A alternativa que propôs, perto do castelo de Daviot, foi recusada por outros chefes por ser 'pantanosa e mole'.",
        { h: "O duque de Cumberland, 25 anos" },
        "Filho de Jorge II, ferido em Dettingen e derrotado em Fontenoy, era um soldado disciplinado, de pouco carisma. Segundo muitos relatos, treinou os soldados para um truque simples contra a [[carga highland]]: cada homem deveria espetar com a [[baioneta]] o inimigo à sua direita, e não o da frente, para escapar do escudo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "O governo tinha entre 6.900 e 7.200 homens e cerca de 10 canhões: infantaria britânica, alguns escoceses das Terras Baixas, cavalaria e artilharia. Os jacobitas tinham entre 5.000 e 6.000, a maioria [[highlanders]], além de umas centenas de franceses e irlandeses a serviço da França, os [[piquetes irlandeses]], e poucos canhões.",
        { note: "Os números variam bastante conforme a fonte. As faixas acima são as mais usadas pelos historiadores. O exército jacobita estava, além disso, abaixo da sua força normal, porque muitos homens tinham se afastado em busca de comida." },
        { h: "A noite antes" },
        "Na noite de 15 de abril, Charles tentou um ataque surpresa ao acampamento de Cumberland, em Nairn, só com espadas, adagas e baionetas. A marcha foi desorganizada, e Murray cancelou a operação. Parte da coluna, o grupo do duque de Perth, com 1.200 homens, nem recebeu a ordem e continuou até esbarrar nas sentinelas do governo. Os homens voltaram a Culloden exaustos, e muitos tinham se espalhado para dormir ou procurar comida.",
        { h: "O terreno" },
        "Uma charneca aberta, a Drummossie Moor, com pasto comum, chão encharcado por chuva e neve, e o rio Nairn a cerca de 1 km. Os jacobitas ficaram com o flanco esquerdo ancorado nos muros do parque de Culloden e a direita junto aos muros de Culwhiniac. Foi um terreno bom para a artilharia e a cavalaria do governo, e ruim para uma carga.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, as duas armas se enfrentaram em linha. Os jacobitas puseram os regimentos das Terras Altas na primeira linha, com Murray à direita e Perth à esquerda, e os regimentos das Terras Baixas e os franceses atrás. Cumberland formou duas linhas de infantaria, a artilharia entre os batalhões, e a cavalaria nas pontas.",
        "Segundo, começou o duelo de artilharia. Os canhões do governo eram muito melhores e causaram baixas pesadas, enquanto a artilharia jacobita, fraca, quase não respondeu. As fontes divergem sobre quanto tempo os jacobitas esperaram sob esse fogo: de poucos minutos a uns 20.",
        "Terceiro, Charles mandou atacar. A artilharia do governo passou a atirar [[metralha]], e morteiros leves entraram em ação.",
        "Quarto, a direita jacobita, com os homens de Atholl, os Camerons de Lochiel e os de Appin, atacou a esquerda do governo. Os batalhões se apertaram, vários chefes caíram, e Lochiel teve os tornozelos quebrados pela metralha.",
        "Quinto, a esquerda jacobita, formada pelos MacDonalds, atravessou chão alagado e avançou devagar. Parou e atirou à distância, sem efeito. O chefe Keppoch morreu e Clanranald foi ferido.",
        "Sexto, a direita jacobita atingiu os regimentos de Barrell (o 4º) e Dejean (o 37º), que levaram o grosso do choque. O general Huske reagiu com a brigada de Sempill e o 20º regimento e envolveu os atacantes por três lados.",
        "Sétimo, a cavalaria do governo tentou cair sobre a esquerda jacobita, mas foi retida pelo pântano e acabou lutando contra os piquetes irlandeses.",
        "Oitavo, os jacobitas se desfizeram. Os franceses e irlandeses cobriram a retirada, e O'Sullivan mandou que um capitão tirasse Charles do campo. Os dragões de Bland perseguiram os fugitivos pela estrada de Inverness. Segundo um relato da época, Bland deu quartel só a cerca de cinquenta franceses."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Cumberland informou 50 mortos e 259 feridos do governo. Os jacobitas perderam entre 1.500 e 2.000 mortos e feridos, muitos na perseguição, e 376 foram capturados. A batalha durou, segundo a maioria dos relatos, menos de uma hora.",
        "Charles ordenou que o exército se dispersasse até chegar ajuda francesa, e em 18 de abril quase ninguém restava. Fugiu para as Hébridas e só embarcou de volta à França em 19 de setembro. Nunca voltou. Dos 3.471 prisioneiros jacobitas, cerca de 1.200 foram deportados, 905 foram soltos por uma lei de indulto, 362 foram trocados com a França e 120 foram executados.",
        { h: "Por que importa" },
        "Foi a última batalha campal em solo britânico. O governo reagiu com leis duras em 1746, que proibiram armas e o traje típico das Terras Altas e tiraram dos chefes de clã o poder de julgar. O velho sistema dos clãs foi desfeito. Cumberland ficou conhecido, ao menos na Escócia, como 'o Açougueiro'.",
        { h: "Curiosidades e controvérsias" },
        { note: "A 'ordem de não dar quartel': há uma disputa antiga sobre uma ordem desse tipo e sobre quem a teria dado. O que os relatos mostram é que houve mortes de feridos e de prisioneiros no campo e na perseguição." },
        { note: "O que ficou: em 1881 Duncan Forbes, dono das terras, ergueu um monumento e lápides nas valas comuns. Hoje o campo é cuidado pelo National Trust for Scotland, que abriu um centro de visitantes em 2007." }
      ]}
    ]
  },

  rossbach: {
    war: "Guerra dos Sete Anos (1756–1763)",
    hook: "Em uma hora e meia, 22.000 prussianos derrotaram quase o dobro de franceses e imperiais, e a Europa mudou de opinião sobre Frederico.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Guerra dos Sete Anos começou em 1756, quando Frederico II da Prússia invadiu a Saxônia. Contra ele se juntaram a Áustria, a França, a Rússia, a Suécia e a própria Saxônia. Só a Grã-Bretanha era sua aliada. Em 1757 a Prússia estava cercada por todos os lados.",
        "Naquele ano, um exército francês entrou na Alemanha ocidental e derrotou o duque de Cumberland, aliado de Frederico, em Hastenbeck. Pela Convenção de Klosterzeven, os hanoverianos saíram da guerra. No outono, a França e um exército do Império, o Reichsarmee, marchavam em direção à Saxônia, onde Frederico estava.",
        { h: "O caminho até Rossbach" },
        { timeline: [
          ["Junho de 1757", "Frederico perde em Kolín, contra os austríacos."],
          ["Setembro de 1757", "A Convenção de Klosterzeven tira Hanôver da guerra."],
          ["Outubro de 1757", "Frederico marcha para o oeste contra os franceses e o exército do Império."],
          ["5 de novembro", "Batalha de Rossbach."],
          ["5 de dezembro", "Frederico derrota os austríacos em Leuthen."]
        ]},
        "O exército aliado tinha dois comandantes que não se entendiam: o príncipe de Soubise, francês, e o príncipe de Saxe-Hildburghausen, comandante do Reichsarmee. Hildburghausen queria lutar, e Soubise hesitava."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Frederico II, 45 anos" },
        "O rei da Prússia, de 45 anos, estava em uma situação desesperada. Mas era um mestre em ler o campo e agir rápido, e confiava no exército disciplinado que seu pai tinha criado. Em Rossbach, ele esperou o inimigo errar.",
        { h: "Friedrich Wilhelm von Seydlitz, 36 anos" },
        "O comandante da cavalaria prussiana, ainda jovem, era famoso pela ousadia. Ele esperou atrás da colina de Pölzen e atacou na hora exata. Foi ferido na batalha.",
        { h: "Soubise e Hildburghausen" },
        "Soubise, de 42 anos, devia o posto mais à amizade com a corte, e a Madame de Pompadour o apoiava, do que à fama militar. Hildburghausen, de uns 55, comandava um exército de contingentes de vários estados alemães, mal treinados e mal organizados."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os prussianos tinham cerca de 22.000 homens e 79 canhões. Os aliados tinham cerca de 41.000: uns 30.000 franceses e 11.000 do exército do Império. As fontes dão de 45 a 114 canhões para eles, conforme o que contam.",
        { h: "O terreno" },
        "Um planalto largo, quase sem árvores, com manchas de areia e de pântano. Pequenas colinas, como a Janus e a Pölzen, ficam entre Rossbach e Reichardtswerben. Elas escondiam os movimentos prussianos.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na manhã de 5 de novembro, o acampamento prussiano ficava entre Rossbach e Bedra, e o aliado entre Branderoda e Mücheln. Hildburghausen queria marchar para Zeuchfeld, ao flanco esquerdo de Frederico, e se pôr de frente para o norte, entre Reichardtswerben e Pettstädt. Soubise só queria uma ação limitada para cortar Frederico do rio Saale.",
        "Segundo, os aliados marcharam em [[colunas|coluna de marcha]], sem mandar batedores. As colunas estavam desordenadas: a cavalaria da direita na frente, a da esquerda atrás, a infantaria de reserva espremida no meio e a artilharia travada. Frederico, de um telhado em Rossbach, primeiro pensou que os aliados só mudavam de lugar para se abastecer. Um capitão, von Gaudi, avisou que as colunas viravam para leste, e Frederico decidiu lutar.",
        "Terceiro, ele deixou um pequeno destacamento em frente à vanguarda francesa, protegido pela colina de Schortau, e levou o resto do exército para longe, a uma velocidade duas vezes maior que a do inimigo, atrás das colinas Janus e Pölzen.",
        "Quarto, os aliados, vendo os prussianos sumirem para leste, aceleraram. Mandaram a primeira linha e a cavalaria da direita para Reichardtswerben e arrastaram parte da cavalaria da esquerda. Foi um erro grave.",
        "Quinto, às 15h15 o coronel Moller abriu fogo com 18 canhões pesados da colina Janus. Os aliados acharam que era uma cobertura para a retirada prussiana.",
        "Sexto, às 15h30 Seydlitz, com 38 esquadrões, saiu de trás da colina de Pölzen e atacou a cabeça e o flanco direito das colunas. A cavalaria aliada se desfez. Seydlitz foi gravemente ferido lutando na fileira, e seus homens se reuniram numa depressão atrás da linha, perto de Tagewerben.",
        "Sétimo, a infantaria prussiana, com o príncipe Henrique, desceu a colina Janus contra a infantaria aliada em confusão. Os franceses formaram colunas e atacaram com baionetas, mas os canhões de Moller e as salvas rápidas dos prussianos destruíram o ataque. Só sete batalhões prussianos chegaram a lutar.",
        "Oitavo, Seydlitz voltou com seus esquadrões reunidos e atacou de novo a massa desordenada pelo flanco e pela retaguarda. A infantaria aliada se desfez e fugiu. O colapso final levou menos de 15 minutos. Soubise e Hildburghausen foram feridos, e a perseguição durou até escurecer.",
        { note: "Frederico teria comentado que venceu a batalha com a maior parte da infantaria de mosquete no ombro, isto é, sem usá-la." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os prussianos perderam cerca de 169 mortos e de 379 a 430 feridos, segundo Bodart e Tucker. Os aliados tiveram de 8.000 a 10.000 homens fora de combate, mortos, feridos e prisioneiros: cerca de 6.600 franceses e 3.500 imperiais, segundo uma fonte. Os prussianos tomaram 72 canhões, 21 bandeiras e oito generais franceses.",
        "Frederico não perseguiu os franceses. Marchou para a Silésia, cerca de 274 km em uns 12 dias, e em 5 de dezembro derrotou os austríacos em Leuthen.",
        { h: "Por que importa" },
        "Em termos militares, o efeito foi limitado, porque a Áustria continuou sendo o principal inimigo. Mas o efeito moral foi enorme: o exército francês, tido por muitos como o melhor da Europa, foi derrotado por prussianos em menos de duas horas. A França perdeu o interesse na guerra alemã, e a Grã-Bretanha passou a ajudar mais a Prússia, com dinheiro e um comandante, o príncipe Fernando de Brunswick. Frederico virou herói na Inglaterra e, mais tarde, um símbolo para o nacionalismo alemão.",
        { h: "Curiosidades e controvérsias" },
        { note: "O destino de Soubise: ele foi feito marechal da França mesmo depois de perder a batalha, enquanto d'Estrées foi chamado de volta depois de vencer em Hastenbeck. Frederico fez ironia com isso. Em Paris circularam versos zombando de Soubise." },
        { note: "O monumento: Napoleão mandou destruir o monumento prussiano de Rossbach depois da vitória em Iena, em 1806." }
      ]}
    ]
  },

  kunersdorf: {
    war: "Guerra dos Sete Anos (1756–1763)",
    hook: "A pior derrota de Frederico, o Grande: em um dia, o exército prussiano perdeu mais de um terço dos homens.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1759, a Guerra dos Sete Anos entrava no quarto ano. A Prússia lutava contra a Áustria, a Rússia e a França. Frederico II tinha ganho fama de invencível em Rossbach e Leuthen, em 1757, mas as forças dos inimigos eram muito maiores.",
        "No verão, um exército russo sob o general Pyotr Saltykov avançou pela Silésia e pelo Brandemburgo. Em 23 de julho derrotou um corpo prussiano em Kay, e em seguida se juntou aos austríacos de Ernst Gideon von Laudon perto de Frankfurt an der Oder, a uns 80 km de Berlim.",
        { h: "O caminho até Kunersdorf" },
        { timeline: [
          ["23 de julho de 1759", "Os russos vencem os prussianos em Kay."],
          ["Início de agosto", "Russos e austríacos se juntam perto de Frankfurt an der Oder."],
          ["Agosto", "Frederico atravessa o rio Oder e marcha contra o inimigo."],
          ["12 de agosto", "Batalha de Kunersdorf."]
        ]},
        "Frederico queria destruir o exército aliado antes que ele ameaçasse Berlim. Era uma aposta: se perdesse, não haveria segundo exército."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Frederico II, 47 anos" },
        "Atacou com pressa um inimigo bem entrincheirado, sem muito reconhecimento do terreno. Mesmo depois de a ofensiva ficar claramente travada, e contra o parecer de seus generais, insistiu em atacar de novo.",
        { h: "Pyotr Saltykov, perto dos 60 anos" },
        "O comandante russo fortificou a crista com obras de terra e, quando viu os prussianos tomarem posição em outro lado, virou as alas do exército para enfrentá-los.",
        { h: "Laudon, 42 anos" },
        "O comandante do corpo austríaco, Ernst Gideon von Laudon, era agressivo e experiente. Seu contra-ataque de cavalaria no fim do dia foi decisivo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os aliados tinham cerca de 41.000 russos e 18.500 austríacos, uns 59.500 no total, com cerca de 250 canhões. Algumas fontes antigas dão mais, mas os historiadores atuais dizem que não há documentos que as apoiem. Os prussianos tinham cerca de 50.900 homens e 230 canhões, segundo a estimativa mais citada. Outros estudos dão mais.",
        { h: "O terreno" },
        "Uma sequência de colinas baixas, a leste do Oder: Judenberge, Mühlberge, Walkberge e Spitzberge. Entre elas ficavam pântanos, lagoas e a ravina de Kuhgrund. A leste, a floresta de Reppen cobria a aproximação. Os russos tinham fortificado a crista com redutos, [[abatis]] e árvores derrubadas contra a cavalaria.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, Frederico mandou o corpo de Finck fazer uma demonstração de frente e levou o exército principal num grande arco pela floresta de Reppen, para atacar o flanco aliado. Mandou pouquíssimos batedores.",
        "Segundo, Saltykov percebeu o movimento e virou as alas do exército. A marcha atrasou, e as lagoas obrigaram os prussianos a se apertar em colunas estreitas.",
        "Terceiro, por volta das 8h o exército principal saiu da floresta, e a artilharia prussiana bombardeou a esquerda russa.",
        "Quarto, por volta do meio-dia, a infantaria prussiana, com os [[granadeiros]], tomou a Mühlberge de assalto, de perto, e capturou de 80 a 100 canhões. A esquerda russa recuou até Kunersdorf, e no caos alguns russos chegaram a atirar nos próprios aliados.",
        "Quinto, Saltykov mandou as reservas, entre elas os granadeiros austríacos, e a linha se firmou.",
        "Sexto, à tarde os ataques à ravina de Kuhgrund e ao Spitzberge pararam sob fogo pesado. Generais pediram a Frederico que parasse, mas ele insistiu em atacar.",
        "Sétimo, no começo da noite, Seydlitz liderou uma carga de cavalaria contra o centro russo. Falhou, e ele foi gravemente ferido. A cavalaria do general Platen, que tentou continuar o ataque, foi destroçada por Laudon, com a cavalaria austríaca.",
        "Oitavo, por volta das 19h, infantaria austríaca descansada entrou na luta, e a linha prussiana cedeu. O exército se desfez. Cossacos cercaram Frederico, e só o capitão de cavalaria Joachim Bernhard von Prittwitz, com um esquadrão de [[hussardos]], conseguiu tirá-lo de lá."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam de 16.000 a 20.500 homens, conforme a fonte (os dados do lado russo e do austríaco não coincidem). Os prussianos perderam de 18.600 a 21.000, e algumas estimativas dão até 25.000, entre mortos, feridos, desaparecidos e desertores. Perderam também 172 canhões e cerca de 60% da cavalaria.",
        "Frederico escreveu ao ministro Finckenstein, seu antigo tutor, que de um exército de 48.000 só lhe restavam 3.000. Era um exagero de desespero: soldados espalhados voltaram às fileiras nos dias seguintes. Ele passou o comando a Finck, nomeou seu irmão Henrique generalíssimo e fez os generais jurarem fidelidade ao sobrinho de 14 anos, o futuro Frederico Guilherme II.",
        { h: "Por que importa" },
        "Berlim, a 80 km, estava aberta. Mas Saltykov e Laudon não avançaram: os russos e os austríacos desconfiavam uns dos outros, e Saltykov criticava a cautela do comandante austríaco Daun. Faltavam suprimentos aos russos. Em 1º de setembro, Frederico chamou essa inação de milagre, numa carta ao irmão Henrique. A rainha Isabel da Rússia promoveu Saltykov a marechal de campo, e Laudon recebeu uma espada de honra.",
        "A Prússia sobreviveu até a guerra terminar, em 1763, e a Rússia só saiu do conflito quando uma mudança no trono, em 1762, a levou à paz.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números de perdas variam muito, porque milhares de soldados prussianos se dispersaram e voltaram depois. Por isso os historiadores dão faixas, e não um número único." },
        { note: "O poeta: Ewald Christian von Kleist, oficial prussiano e um dos poetas alemães mais lidos da época, morreu dos ferimentos recebidos em Kunersdorf." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  malplaquet: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Esquema, sem escala" },
      { t: "note", x: 84, y: 14, l: "Bois de Sars" },
      { t: "note", x: 12, y: 14, l: "Bois de Lanière" }
    ],
    units: [
      { id: "aEug", s: "a", k: "inf", w: 24, h: 6, l: "Eugênio (alemães e dinamarqueses)" },
      { id: "aOrk", s: "a", k: "inf", w: 16, h: 6, l: "Orkney (britânicos)" },
      { id: "aOra", s: "a", k: "inf", w: 22, h: 6, l: "Orange (holandeses)" },
      { id: "aWit", s: "a", k: "inf", w: 12, h: 4, l: "Withers (21 batalhões)" },
      { id: "aCav", s: "a", k: "cav", w: 24, h: 5, l: "Cavalaria aliada" },
      { id: "fL", s: "b", k: "inf", w: 22, h: 6, l: "Esquerda francesa (Sars)" },
      { id: "fC", s: "b", k: "inf", w: 18, h: 6, l: "Centro entrincheirado" },
      { id: "fR", s: "b", k: "inf", w: 22, h: 6, l: "Boufflers (direita)" },
      { id: "fCav", s: "b", k: "cav", w: 24, h: 5, l: "Casa do Rei e cavalaria" },
      { id: "fGun", s: "b", k: "art", w: 12, h: 3, l: "Artilharia francesa" }
    ],
    steps: [
      { t: "Os franceses ocupam a brecha entre os dois bosques, com trincheiras e redutos no centro. A cavalaria fica atrás. Os aliados se alinham em frente, com Eugênio à direita, os britânicos no centro e os holandeses à esquerda.",
        p: { aEug: [78, 50], aOrk: [50, 52], aOra: [22, 50], aWit: [88, 62], aCav: [50, 62], fL: [78, 20], fC: [50, 22], fR: [22, 20], fCav: [50, 11], fGun: [30, 26] } },
      { t: "Depois do bombardeio, Eugênio ataca o Bois de Sars com alemães e dinamarqueses. A luta no bosque é dura, com perdas pesadas dos dois lados.",
        p: { aEug: [78, 34] } },
      { t: "Por volta das 9h os holandeses atacam a direita francesa, onde está Boufflers, e são rechaçados.",
        p: { aOra: [22, 34] } },
      { t: "Reforçados por 17 batalhões, os holandeses tomam a fazenda de Blairon e são jogados de volta à linha de partida. Os franceses não contra-atacam, e a Casa do Rei fica sob fogo.",
        p: { aOra: [22, 42], fCav: [30, 13] } },
      { t: "A pressão de Eugênio obriga Villars a tirar tropas do centro. A coluna de Withers dá a volta pelo Bois de Sars e ataca a esquerda francesa pelo flanco.",
        p: { aWit: [90, 28], fC: [58, 22], fL: [82, 22] } },
      { t: "Perto do meio-dia Villars é ferido no joelho e entrega o comando a Boufflers.",
        p: { fL: [78, 24] } },
      { t: "Com o centro enfraquecido, a infantaria britânica de Orkney avança e toma os redentes.",
        p: { aOrk: [50, 30], fC: [50, 18] } },
      { t: "O maior choque de cavalaria do século: a cavalaria aliada entra pela brecha e a Casa do Rei contra-ataca. Os aliados recuam, mas a infantaria britânica rechaça os franceses.",
        p: { aCav: [50, 36], fCav: [50, 24] } },
      { t: "Cedendo na esquerda, por volta das 15h Boufflers manda a retirada geral, em boa ordem e com os canhões, rumo a Le Quesnoy. Os aliados exaustos não perseguem.",
        p: { fL: [78, 10], fC: [52, 8], fR: [22, 8], fCav: [40, 6], fGun: [30, 4], aEug: [76, 30], aOra: [24, 36] } }
    ]
  },

  culloden: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Esquema, sem escala" },
      { t: "note", x: 6, y: 26, l: "Muros de Culwhiniac" },
      { t: "note", x: 74, y: 26, l: "Muros do parque de Culloden" }
    ],
    units: [
      { id: "gL1", s: "a", k: "inf", w: 44, h: 4, l: "Primeira linha do governo" },
      { id: "gL2", s: "a", k: "inf", w: 44, h: 4, l: "Segunda linha" },
      { id: "gArt", s: "a", k: "art", w: 20, h: 3, l: "Artilharia (cerca de 10 canhões)" },
      { id: "gCavR", s: "a", k: "cav", w: 12, h: 4, l: "Dragões" },
      { id: "gCavL", s: "a", k: "cav", w: 12, h: 4, l: "Dragões" },
      { id: "gArg", s: "a", k: "inf", w: 8, h: 3, l: "Milícia de Argyll" },
      { id: "jR", s: "b", k: "inf", w: 20, h: 5, l: "Atholl, Camerons e Appin (Murray)" },
      { id: "jC", s: "b", k: "inf", w: 22, h: 5, l: "Frasers, Mackintosh e outros" },
      { id: "jL", s: "b", k: "inf", w: 24, h: 5, l: "MacDonalds (Perth)" },
      { id: "jRes", s: "b", k: "inf", w: 34, h: 4, l: "Segunda linha e franceses" },
      { id: "jPic", s: "b", k: "inf", w: 10, h: 4, l: "Piquetes irlandeses" },
      { id: "jArt", s: "b", k: "art", w: 12, h: 3, l: "Artilharia jacobita" }
    ],
    steps: [
      { t: "Dois exércitos frente a frente na charneca alagada. Os jacobitas, com as Terras Altas na primeira linha, ficam entre os muros de Culloden e de Culwhiniac. O governo tem duas linhas, artilharia entre os batalhões e dragões nas pontas.",
        p: { gL1: [50, 56], gL2: [50, 63], gArt: [50, 52], gCavR: [86, 58], gCavL: [16, 58], gArg: [4, 62], jR: [26, 18], jC: [48, 18], jL: [72, 18], jRes: [48, 11], jPic: [82, 12], jArt: [50, 26] } },
      { t: "Começa o duelo de artilharia. Os canhões do governo são melhores e abrem buracos nas fileiras jacobitas, que esperam parados sob o fogo.",
        p: { gArt: [50, 46] } },
      { t: "Charles manda atacar. A artilharia do governo muda para metralha, e os morteiros leves entram em ação.",
        p: { gArt: [50, 44], jR: [26, 26], jC: [48, 26], jL: [72, 26] } },
      { t: "A direita jacobita, com Atholl, Camerons e Appin, corre contra a esquerda do governo. Os batalhões se apertam no avanço, e vários chefes caem, entre eles Lochiel, com os tornozelos quebrados.",
        p: { jR: [30, 38], jC: [46, 32] } },
      { t: "A esquerda, dos MacDonalds, atravessa chão alagado, avança devagar e para para atirar à distância, sem efeito. O chefe Keppoch morre.",
        p: { jL: [70, 34] } },
      { t: "A direita jacobita bate nos regimentos de Barrell e de Dejean. A segunda linha do governo avança para o flanco e envolve os atacantes por três lados.",
        p: { jR: [32, 48], gL2: [38, 56] } },
      { t: "A cavalaria do governo ataca pela esquerda jacobita, mas é retida pelo pântano e luta contra os piquetes irlandeses.",
        p: { gCavR: [78, 42], jPic: [76, 32] } },
      { t: "Os jacobitas se desfazem. Franceses e irlandeses cobrem a retirada, e os dragões de Bland perseguem os fugitivos pela estrada de Inverness.",
        p: { gCavL: [24, 40], jR: [32, 54], jC: [48, 36], jL: [68, 30], jRes: [48, 8] }, x: ["jR", "jC", "jL"] }
    ]
  },

  rossbach: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Esquema, sem escala" },
      { t: "hill", x: 56, y: 56, rx: 8, ry: 4, l: "Colina Janus" },
      { t: "hill", x: 78, y: 54, rx: 8, ry: 4, l: "Colina Pölzen" },
      { t: "note", x: 10, y: 66, l: "Rossbach" },
      { t: "note", x: 84, y: 30, l: "Reichardtswerben" }
    ],
    units: [
      { id: "pCmp", s: "a", k: "camp", w: 14, h: 5, l: "Acampamento prussiano" },
      { id: "pSey", s: "a", k: "cav", w: 20, h: 5, l: "Seydlitz (38 esquadrões)" },
      { id: "pGun", s: "a", k: "art", w: 12, h: 3, l: "Moller (18 canhões)" },
      { id: "pInf", s: "a", k: "inf", w: 22, h: 5, l: "Infantaria (príncipe Henrique)" },
      { id: "pScr", s: "a", k: "inf", w: 8, h: 3, l: "Destacamento em Rossbach" },
      { id: "aCavR", s: "b", k: "cav", w: 20, h: 5, l: "Cavalaria da direita" },
      { id: "aInf", s: "b", k: "inf", w: 26, h: 5, l: "Colunas de infantaria" },
      { id: "aGun", s: "b", k: "art", w: 12, h: 3, l: "Artilharia e reserva" },
      { id: "aCavL", s: "b", k: "cav", w: 16, h: 5, l: "Cavalaria da esquerda" }
    ],
    steps: [
      { t: "De manhã, o acampamento prussiano fica em Rossbach. Os aliados, a sudoeste, começam a marchar para leste, para contornar a esquerda de Frederico.",
        p: { pCmp: [14, 60], pSey: [28, 62], pGun: [30, 56], pInf: [24, 66], pScr: [10, 52], aCavR: [40, 20], aInf: [22, 22], aGun: [8, 24], aCavL: [8, 12] } },
      { t: "As colunas aliadas se esticam e se desordenam: a cavalaria da direita na frente, a artilharia travada atrás, sem batedores. Frederico observa de um telhado em Rossbach.",
        p: { aCavR: [54, 20], aInf: [38, 22], aGun: [20, 24], aCavL: [24, 12] } },
      { t: "Frederico percebe que as colunas viram para leste. Deixa um pequeno destacamento em Rossbach e leva o exército para trás das colinas, depressa.",
        p: { pCmp: [40, 66], pSey: [54, 64], pGun: [56, 62], pInf: [46, 66], pScr: [10, 52] } },
      { t: "Os aliados, vendo os prussianos sumirem, aceleram e pendem para Reichardtswerben, sem formar linha.",
        p: { aCavR: [70, 24], aInf: [54, 24], aGun: [36, 24], aCavL: [44, 14] } },
      { t: "Às 15h15 os 18 canhões de Moller abrem fogo da colina Janus. Os aliados acham que é cobertura de retirada.",
        p: { pGun: [56, 54], pInf: [48, 62], pSey: [74, 58] } },
      { t: "Às 15h30 Seydlitz sai de trás da Pölzen e ataca a cabeça e o flanco das colunas. A cavalaria aliada se desfaz.",
        p: { pSey: [74, 34], aCavR: [78, 24] }, x: ["aCavR"] },
      { t: "A infantaria prussiana desce a colina Janus. Os franceses atacam em colunas com baionetas, mas os canhões e as salvas rápidas destroem o ataque.",
        p: { pInf: [58, 42], pGun: [56, 50], aInf: [58, 28] } },
      { t: "Seydlitz volta com os esquadrões reunidos e ataca a massa desordenada pelo flanco e pela retaguarda. A infantaria aliada foge, e a perseguição dura até escurecer.",
        p: { pSey: [48, 30], aInf: [40, 22], aCavL: [30, 10], aGun: [20, 20] }, x: ["aInf", "aCavL", "aGun"] }
    ]
  },

  kunersdorf: {
    terrain: [
      { t: "note", x: 8, y: 5, l: "Esquema, sem escala" },
      { t: "hill", x: 76, y: 22, rx: 11, ry: 5, l: "Mühlberge" },
      { t: "hill", x: 24, y: 22, rx: 10, ry: 5, l: "Spitzberge" },
      { t: "note", x: 44, y: 28, l: "Kuhgrund (ravina)" },
      { t: "note", x: 84, y: 62, l: "Floresta de Reppen" }
    ],
    units: [
      { id: "rL", s: "a", k: "inf", w: 22, h: 5, l: "Esquerda russa" },
      { id: "rC", s: "a", k: "inf", w: 20, h: 5, l: "Centro russo" },
      { id: "rRes", s: "a", k: "inf", w: 16, h: 4, l: "Reservas e granadeiros austríacos" },
      { id: "aCav", s: "a", k: "cav", w: 14, h: 4, l: "Cavalaria austríaca (Laudon)" },
      { id: "aInf", s: "a", k: "inf", w: 14, h: 4, l: "Infantaria austríaca" },
      { id: "pFin", s: "b", k: "inf", w: 16, h: 4, l: "Finck (demonstração)" },
      { id: "pMai", s: "b", k: "inf", w: 26, h: 5, l: "Exército principal" },
      { id: "pGun", s: "b", k: "art", w: 12, h: 3, l: "Artilharia prussiana" },
      { id: "pSey", s: "b", k: "cav", w: 16, h: 5, l: "Seydlitz" },
      { id: "pPla", s: "b", k: "cav", w: 12, h: 4, l: "Platen" }
    ],
    steps: [
      { t: "Os russos estão entrincheirados na crista, com redutos e árvores derrubadas. Finck faz uma demonstração de frente. O exército principal marcha em arco pela floresta de Reppen para atacar o flanco.",
        p: { rL: [76, 20], rC: [50, 20], rRes: [60, 12], aCav: [20, 14], aInf: [30, 22], pFin: [20, 50], pMai: [84, 62], pGun: [74, 66], pSey: [92, 58], pPla: [66, 68] } },
      { t: "Saltykov vira as alas para enfrentar o novo ataque. A marcha atrasa, e as lagoas obrigam os prussianos a se espremer em colunas estreitas.",
        p: { rL: [78, 22], rC: [56, 20], pMai: [80, 52], pGun: [72, 54] } },
      { t: "Por volta das 8h o exército principal sai da floresta, e a artilharia bombardeia a esquerda russa.",
        p: { pMai: [78, 40], pGun: [70, 40] } },
      { t: "Perto do meio-dia, a infantaria prussiana toma a Mühlberge de assalto e captura de 80 a 100 canhões. A esquerda russa recua para Kunersdorf.",
        p: { pMai: [76, 28], rL: [64, 16] } },
      { t: "Saltykov manda reservas, entre elas os granadeiros austríacos, e a linha russa se firma.",
        p: { rRes: [70, 20], rL: [66, 18] } },
      { t: "À tarde, os ataques à ravina de Kuhgrund e ao Spitzberge param sob fogo pesado. Frederico insiste em atacar, apesar do conselho dos generais.",
        p: { pMai: [56, 32], pFin: [28, 36], aInf: [30, 22] } },
      { t: "Seydlitz carrega contra o centro russo, falha e é ferido. A cavalaria de Platen é destroçada pelo contra-ataque de Laudon.",
        p: { pSey: [54, 26], pPla: [44, 30], aCav: [38, 26] }, x: ["pSey", "pPla"] },
      { t: "Por volta das 19h, infantaria austríaca descansada entra na luta e a linha prussiana se desfaz. Cossacos cercam Frederico, e um esquadrão de hussardos de Prittwitz o tira dali.",
        p: { aInf: [46, 28], rC: [56, 26], rL: [66, 24], pMai: [66, 38], pGun: [62, 44], pFin: [24, 42] }, x: ["pMai", "pGun", "pFin"] }
    ]
  }
});
