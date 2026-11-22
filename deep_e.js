// In-depth battles, batch e: accio, teutoburgo, guandu, penhascos, pontemilvia, adrianopolis.
// Checked against Wikipedia (EN and PT), Britannica where reachable, and the ancient sources they cite
// (Plutarch, Cássio Dio, Velleius Paterculus, Ammianus Marcellinus, Lactantius, Eusebius, Sanguozhi and Pei Songzhi).

Object.assign(GLOSSARY, {
  "triunvirato": "Aliança de três homens que dividiam o poder em Roma. O segundo triunvirato (Antônio, Otaviano e Lépido) foi renovado em 37 a.C. por cinco anos e venceu no fim de 33 a.C.",
  "liburnas": "Navios de guerra romanos pequenos, leves e rápidos, de origem ilíria. Eram mais fáceis de manobrar do que as galeras gigantes de Antônio.",
  "quinquerreme": "Grande navio de guerra a remo, com várias fileiras de remadores. Era pesado e forte, mas lento para virar.",
  "abordagem": "Ataque em que um navio encosta no outro e os soldados passam para o convés inimigo, lutando como numa batalha em terra.",
  "tribuno": "Oficial superior de uma legião romana. Cada legião tinha seis, e vários eram jovens de famílias ricas.",
  "águia": "A águia de prata ou de ouro (aquila) era o estandarte sagrado de cada legião romana. Perdê-la era a maior das vergonhas.",
  "auxiliares": "Tropas romanas formadas por não cidadãos das províncias. Faziam o que a legião fazia pior: cavalaria, arco, tropa leve.",
  "senhor da guerra": "Comandante que controla um território e seu próprio exército, quase sempre sem obedecer de verdade a nenhum governo central.",
  "catapulta de tração": "Máquina de arremesso movida por muitos homens puxando cordas, que lançava pedras. Os chineses a usaram em Guandu para derrubar as torres de arqueiros inimigas.",
  "dinastia han": "A dinastia imperial que governou a China de 202 a.C. a 220 d.C. No fim, os imperadores eram fracos e os generais mandavam de verdade.",
  "tetrarquia": "Sistema criado pelo imperador Diocleciano: quatro governantes dividiam o Império Romano (dois Augustos e dois Césares). Quando ele abdicou, em 305, o sistema desabou em guerras.",
  "usurpador": "Quem toma o poder sem ser reconhecido como governante legítimo.",
  "pretorianos": "A guarda pessoal dos imperadores romanos, baseada em Roma. Maxêncio a usava como núcleo de seu exército.",
  "pontão": "Ponte improvisada de barcos ou de tábuas sobre barcas, montada em pouco tempo e sem a solidez de uma ponte de pedra.",
  "federados": "Povos estrangeiros aceitos dentro do Império Romano, com terras e pagamento em troca de lutar por Roma, mas sob seus próprios chefes.",
  "círculo de carroças": "Os godos viajavam com famílias e bens em carroças e, para acampar, formavam um anel com elas. Servia de fortaleza improvisada.",
  "crisma": "O monograma de Cristo, formado pelas letras gregas khi e rô (Χ e Ρ) sobrepostas. Aparece nos escudos e estandartes que a tradição liga a Constantino."
});

Object.assign(DEEP, {
  accio: {
    war: "Guerra civil entre Otaviano e Marco Antônio (32–30 a.C.)",
    hook: "A batalha naval em que a rainha do Egito saiu de cena no meio da luta, e o homem que a seguiu perdeu o mundo romano.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 44 a.C., Júlio César foi assassinado e deixou como herdeiro, em testamento, o sobrinho-neto Otaviano. Dez anos depois, Roma era governada por um [[triunvirato]]: Otaviano controlava o Ocidente e Marco Antônio, o Oriente. A conta não fechava. Dois homens e uma só república não cabiam juntos.",
        "Antônio tinha ligado sua vida política a Cleópatra, rainha do Egito. Em 34 a.C., nas cerimônias que ficaram conhecidas como as Doações de Alexandria, os dois deram a Cesário, filho de Cleópatra e de César, então com 13 anos, o título de 'Rei dos Reis'. Otaviano usou isso na propaganda: dizia que Antônio queria virar monarca oriental e mudar a capital de Roma para Alexandria.",
        { h: "O caminho até Áccio" },
        { timeline: [
          ["37 a.C.", "O triunvirato é renovado por cinco anos, em Tarento."],
          ["34 a.C.", "Doações de Alexandria: Cesário recebe o título de Rei dos Reis."],
          ["Fim de 33 a.C.", "O triunvirato vence. Antônio escreve ao Senado que não quer ser reconduzido."],
          ["32 a.C.", "Os dois cônsules do ano ficam do lado de Antônio e deixam Roma. Antônio se divorcia de Otávia, irmã de Otaviano, e vai com Cleópatra para Éfeso. Otaviano consegue que Antônio seja destituído e que o Senado declare guerra a Cleópatra, o que todos entendiam como guerra contra Antônio."],
          ["Inverno de 32–31 a.C.", "Antônio tenta ir para a Itália, encontra o mar guardado por uma esquadra inimiga e passa o inverno em Patras, com a maior parte da frota no golfo de Ambrácia."]
        ]},
        "Na primavera e no verão de 31 a.C., Marco Agripa, o melhor almirante de Otaviano, tomou Metone, no Peloponeso, e fez ataques a cidades gregas. O exército de Otaviano desembarcou no norte do estreito em agosto e ganhou escaramuças de cavalaria. Antônio recuou para o acampamento do sul. Sem poder avançar nem receber suprimentos pelo mar, ele estava preso no golfo."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Otaviano e Agripa" },
        "Otaviano era o herdeiro político de César, e a guerra, para ele, era também uma questão de legitimidade: lutar contra uma rainha estrangeira era mais fácil de vender aos romanos do que lutar contra outro romano. Mas quem comandou a frota foi Agripa, seu amigo e general. Era Agripa quem tinha o plano: cortar o mar de Antônio e esperar que a fome e as doenças fizessem o trabalho. Segundo Cássio Dio, Otaviano chegou a pensar em deixar Antônio escapar para atacá-lo depois, e foi Agripa quem o convenceu a dar batalha.",
        { h: "Marco Antônio" },
        "Antônio era o grande soldado romano de sua geração, mais forte em terra do que no mar. Mesmo assim, aceitou lutar no mar, porque Cleópatra queria. Plutarco diz que ele escolheu a batalha naval 'para agradar' a rainha, e que o general Canídio Crasso, comandante do exército de terra, defendeu lutar em terra, onde Antônio era mais forte. Cleópatra venceu a discussão.",
        { h: "Cleópatra" },
        "Cleópatra pagava boa parte da guerra: segundo Plutarco, ela forneceu 200 navios, 20.000 talentos e provisões. Seu esquadrão ficou atrás da linha de Antônio. Plutarco diz que ela já planejava a fuga antes da batalha. Cássio Dio conta que ela estava abalada por maus presságios: andorinhas fizeram ninho perto de sua tenda, e raios acertaram estátuas dela e de Antônio.",
        { h: "Os outros nomes" },
        "Do lado de Otaviano, Lúcio Arrúncio comandava o centro, Marco Lúrio a direita e Tito Estatílio Tauro o exército que acompanhava de terra. Do lado de Antônio, Caio Sósio comandava a esquerda, Marco Otávio e Marco Ínsteio o centro, e Lúcio Gélio Publícola a direita, ao lado de Antônio."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são um problema. Plutarco dá a Antônio cerca de 500 navios de guerra, 100.000 soldados a pé e 12.000 cavaleiros, e a Otaviano 250 navios e 80.000 soldados. Os historiadores modernos dão faixas bem diferentes: de 250 a 400 galeras para Otaviano e de 250 a 500 para Antônio. O que se sabe é que Antônio chegou com muitos navios que não conseguia tripular, por causa de deserções e doenças. Plutarco diz que ele recrutou viajantes, trabalhadores e rapazes para encher os bancos de remo, e que queimou a maior parte dos navios egípcios, ficando com 60.",
        { note: "Os números de Áccio são um dos casos em que as fontes antigas e as modernas mais discordam. Cássio Dio não dá totais. A diferença que importa não é o número, e sim o tipo: os navios de Antônio eram maiores e mais altos, com torres para arqueiros, mas pesados e lentos." },
        "Os navios de Antônio eram grandes, com marinheiros de infantaria pesada, arqueiros e catapultas a bordo. Eram difíceis de abordar, mas pouco manobráveis. As [[liburnas]] de Otaviano eram menores, mais rápidas e mais bem tripuladas. Cássio Dio descreve as táticas: investir, bater nos remos e nos lemes e recuar, sem se deixar prender.",
        { h: "O terreno" },
        "A batalha aconteceu no mar Jônio, diante do cabo de Áccio, na entrada do golfo de Ambrácia, na costa oeste da Grécia. O estreito era estreito demais para a frota de Antônio manobrar. O exército dele acampou perto do promontório, e o de Otaviano ficou na margem norte.",
        { h: "A decisão" },
        "Por que Antônio saiu? O que as fontes dizem é que ele estava cercado e que a espera só piorava a situação. Plutarco conta que, nos dias anteriores, Antônio queimou navios, e que o general romano Domício desertou e morreu logo depois, e que alguns reis aliados também o abandonaram. Plutarco narra ainda que um centurião cheio de cicatrizes implorou a Antônio que lutasse em terra, e que Antônio respondeu apenas com um gesto mudo de encorajamento.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, depois de dias de tempestade, no quinto dia o mar acalmou. Antônio saiu pelo estreito e formou a linha, com Cleópatra atrás. Otaviano esperava no mar aberto. Segundo Cássio Dio, avançou suas alas em forma de meia-lua para tentar envolver a linha inimiga. Antônio mandou os seus ficarem parados no golfo estreito e não romperem a formação.",
        "Segundo, a ala esquerda de Antônio, sob Sósio, avançou. Plutarco diz que Otaviano mandou a sua direita recuar para atrair os navios inimigos para mar aberto. Os navios pesados de Antônio não conseguiam abalroar bem, e a luta virou algo parecido com um cerco: abordagem, flechas e catapultas. Os homens de Otaviano usaram fogo, com setas incendiárias e potes de carvão e piche, segundo Dio, e o fogo se espalhou entre os navios de Antônio.",
        "Terceiro, Agripa estendeu a ala esquerda para flanquear a direita de Antônio. Publícola foi atrás e se separou do centro, que ficou desorganizado.",
        "Quarto, e decisivo: os 60 navios de Cleópatra içaram as velas e saíram pelo meio da luta, rumo ao Peloponeso. Cássio Dio diz que ela, vendo a luta de longe, perdeu a paciência e fugiu com o vento a favor. Antônio, achando que a frota estava perdida, abandonou o combate e a seguiu, num navio menor, com poucos acompanhantes. Plutarco diz que ele passou três dias sozinho na proa, sem falar com ninguém.",
        "Quinto, o resto da frota continuou a lutar. Os homens, sem velas, atiraram as torres e o equipamento ao mar para ficar mais leves. Segundo Plutarco, a frota resistiu até o vento e o mar forte a obrigarem a se render, na décima hora do dia (no fim da tarde).",
        "Sexto, o exército de terra. Plutarco conta que Antônio mandou Canídio levar o exército pela Macedônia até a Ásia. Ele tinha 19 legiões e 12.000 cavaleiros, que, segundo Plutarco, resistiram sete dias. Na noite em que Canídio fugiu, os soldados se renderam ao vencedor. Outras versões dizem que cerca de 19 legiões e 12.000 cavaleiros desertaram antes de qualquer combate em terra.",
        { h: "As versões da fuga" },
        "O historiador J. M. Carter propõe que a fuga de Antônio e Cleópatra não foi uma deserção, e sim um plano: Antônio sabia que estava cercado, formou uma linha em ferradura perto da costa, mandou os navios do norte abrirem a formação de Otaviano e Sósio ao sul, e abriu uma brecha pela qual os dois escaparam, deixando o resto para trás. Já Lange defende o oposto: Antônio teria vencido se Cleópatra não tivesse recuado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Plutarco diz que o próprio Otaviano reportou não mais de 5.000 mortos e 300 navios capturados. Estimativas modernas falam em mais de 200 navios afundados ou capturados. A frota de Antônio deixou de existir, e as legiões se renderam. Otaviano passou o inverno em Samos e na Grécia e Ásia, e em 30 a.C. atacou o Egito por dois lados.",
        "Antônio ainda ganhou uma escaramuça em Alexandria, mas perdeu o ataque geral em 31 de julho ou 1º de agosto de 30 a.C. (as fontes variam). Falsamente informado de que Cleópatra tinha morrido, se apunhalou e morreu nos braços dela. Cleópatra se matou em 12 de agosto de 30 a.C. Otaviano mandou matar Cesário e Antilo, filho de Antônio, mas poupou os outros filhos do casal.",
        { h: "Por que importa" },
        "O Egito virou província romana. Em 27 a.C., Otaviano recebeu o título de Augusto, e os historiadores costumam ver em Áccio a passagem da República para o Império. Otaviano fundou perto dali a cidade de Nicópolis ('cidade da vitória') em 29 a.C., com monumentos no campo de batalha decorados com esporões de bronze dos navios capturados, e celebrou um triunfo triplo em Roma: pela Ilíria, por Áccio e pelo Egito.",
        { h: "Curiosidades e controvérsias" },
        { note: "A propaganda: quase tudo o que sabemos vem de autores que escreveram sob Augusto ou depois dele. Por isso a imagem de Antônio como um romano enfeitiçado por uma rainha estrangeira e a de Cleópatra como a traidora que fugiu foram ajudadas pela versão do vencedor." },
        { note: "Os presságios: segundo Plutarco, Otaviano encontrou, antes da batalha, um homem conduzindo um burro, que se chamava Afortunado, e o burro, Vitorioso. Depois da vitória, mandou fazer estátuas de bronze dos dois." },
        { note: "'Água morta': pesquisadores estudam se o fenômeno da água morta (água doce sobre água salgada, que cria um arrasto forte nos navios) teria retido a frota egípcia. É só uma hipótese." }
      ]}
    ]
  },

  teutoburgo: {
    war: "Campanhas romanas na Germânia (11 a.C. – 16 d.C.)",
    hook: "Três legiões entraram na floresta atrás de um aliado de confiança e nenhuma voltou.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século I, Roma achava que a Germânia entre o Reno e o Elba estava quase conquistada. Druso fez campanhas ali de 11 a 9 a.C., e depois dele Tibério e Lúcio Domício Aenobarbo, que chegou a cruzar o Elba. Cássio Dio conta que os romanos tinham soldados em quartéis de inverno, e que os germanos aprendiam o jeito romano, faziam feiras e conviviam em paz, sem largar seus costumes nem suas armas.",
        "Em 6 d.C., um grande exército foi mandado contra Maroboduo, rei dos marcomanos. Uma revolta na Ilíria obrigou Tibério a fazer as pazes e a deslocar oito legiões para os Bálcãs. Sobraram três no Reno. Foi nesse momento que o novo governador chegou: Públio Quintílio Varo, em 7 d.C.",
        { h: "O caminho até a floresta" },
        { timeline: [
          ["11–9 a.C.", "Druso avança pela Germânia até perto do Elba."],
          ["4 d.C.", "Armínio, depois de uma educação romana, serve como oficial na Panônia."],
          ["6 d.C.", "A revolta ilíria obriga a deslocar oito legiões para os Bálcãs."],
          ["7 d.C.", "Varo assume o comando na Germânia."],
          ["Verão de 9 d.C.", "Armínio prepara a armadilha: relatos de revolta atraem Varo para longe do Reno."],
          ["8 a 11 de setembro de 9 d.C.", "A emboscada, ao longo de vários dias, segundo a datação mais usada."]
        ]},
        "Varo tinha sido governador da África e da Síria, era próximo de Augusto e ligado por casamento à família de Agripa. Segundo Cássio Dio, tratava os germanos como escravos e cobrava impostos como se fossem uma província antiga. Os chefes queriam o poder de volta, e a base preferia os velhos costumes. Como havia muitos soldados romanos por perto, ninguém se revoltou abertamente."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Armínio, chefe dos queruscos" },
        "Armínio nasceu entre os queruscos e, ainda criança, por volta de 8 a.C., foi levado como refém para o lado romano depois da vitória de Druso sobre sua tribo. Recebeu educação romana, cidadania e a posição de cavaleiro, e por volta de 4 d.C. servia na Panônia. O historiador McNally sugere que as lições da infância moldaram seu plano: os romanos só podiam ser batidos quando sua disciplina e flexibilidade não tinham como funcionar. Armínio comia à mesa de Varo, ao lado de Segimero, e tinha a confiança dele.",
        { h: "Públio Quintílio Varo" },
        "Varo era um político e administrador, não um general experiente. Há quem diga que foi mandado para a Germânia por sua habilidade política, e não militar. Segestes, sogro de Armínio e aliado dos romanos, avisou Varo da traição. Varo não acreditou, talvez porque Segestes desaprovasse o casamento da filha e tivesse mágoas. Segundo Dio, Varo repreendia quem o alertava, chamando-os de alarmistas que difamavam seus amigos.",
        { h: "Os outros nomes" },
        "Lúcio Asprenas, sobrinho de Varo, ficou em Mogúncia com duas legiões. Numônio Vala, comandante da cavalaria, era o oficial mais próximo de Varo. Do lado germano, além de Armínio e Segimero, a coalizão incluía os brúcteros, os angrivários, os marsos e outros povos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Varo tinha três legiões, a XVII, a XVIII e a XIX, com cerca de 15.000 homens, mais unidades [[auxiliares]]: as fontes modernas falam em nove unidades de uns 4.500 homens, ou em seis coortes e três alas de cavalaria. Havia ainda servos, mulheres, crianças e carroças, o que tornava a coluna lenta e comprida. As estimativas para o total romano vão de 14.000 a 22.752 (Powell); McNally calcula 21.000, incluindo cerca de 3.800 servos.",
        "Do lado germano, as estimativas variam de 18.000 a 30.000 guerreiros. Uma estimativa lista 5.000 angrivários, 8.000 brúcteros e 8.000 queruscos. O ponto importante é que os germanos lutavam com armas leves e sabiam o terreno.",
        { note: "Todos os números são estimativas modernas. As fontes antigas (Veleio Patérculo, Tácito e Cássio Dio) não dão totais confiáveis." },
        { h: "A armadilha" },
        "Varo planejava marchar de Vetera (Xanten) até o território dos queruscos, montar um acampamento de verão (provavelmente perto de Minden) e voltar ao quartel de inverno. Em julho, aliados fizeram ataques, e Varo mandou destacamentos para sufocar a agitação. No fim do verão, notícias de uma revolta, que teriam sido inventadas por Armínio, atraíram Varo para o lado dos angrivários. Armínio argumentou que o caminho seria mais curto e que os romanos poderiam esmagar a revolta. Na noite de 7 de setembro, saiu do acampamento, prometendo voltar em dois ou três dias, e deixou guias queruscos que eram, na verdade, espiões.",
        { h: "Os dias na floresta" },
        "Cássio Dio descreve o terreno como cheio de ravinas e árvores altas e fechadas. Os romanos tinham de derrubar madeira, abrir estradas e fazer pontes, e a coluna, cheia de carroças, animais, mulheres e crianças, se esticava por 15 a 20 km. Chuva e vento deixaram o chão escorregadio. Os germanos atacavam dos matos, primeiro de longe e depois de perto, quando os romanos, misturados a pessoas sem armas, não conseguiam formar fileiras.",
        "No primeiro dia, os brúcteros atacaram ao longo da coluna, cansando os romanos e atingindo os suprimentos. Uma tempestade forte parou a marcha, e Varo mandou fortificar um acampamento e fez um conselho de guerra. Os romanos queimaram ou abandonaram a maioria das carroças.",
        "No segundo dia, avançaram em melhor ordem e chegaram a um campo aberto, mas sofreram perdas. Ao voltar para a mata, lutaram em espaços tão apertados que cavalaria e infantaria esbarravam entre si e nas árvores.",
        "No quarto dia, um temporal molhou os escudos e estragou os arcos e dardos. Os germanos, mais leves e cada vez mais numerosos, porque atraía quem queria saque, sofreram menos. Os romanos tentaram escapar numa marcha noturna e deram na armadilha de Kalkriese, na passagem estreita entre a colina e o Grande Pântano, com cerca de 100 metros de largura. Lá os germanos tinham construído um muro de turfa e areia ao longo do caminho, de onde atacavam protegidos. Os romanos não conseguiram tomá-lo.",
        "Numônio Vala saiu cavalgando com a cavalaria para escapar. Foi alcançado e morto, segundo Veleio. Varo, ferido, se matou. Segundo Veleio, o prefeito Ceiônio se rendeu e depois se suicidou, e o prefeito Eggio morreu lutando. Quando a notícia da morte de Varo se espalhou, o resto do exército desistiu: alguns imitaram o comandante, outros largaram as armas e esperaram a morte. Dio diz que todos os homens e cavalos foram abatidos.",
        { h: "O forte que resistiu" },
        "Os germanos tomaram todas as fortificações romanas, menos uma, que não conseguiram reduzir, porque não sabiam fazer cercos e os arqueiros romanos os repeliam. Quando a comida acabou, a guarnição saiu numa noite de tempestade. Passaram os dois primeiros postos, mas no terceiro as mulheres e crianças, exaustas e assustadas, chamaram os soldados e foram descobertas. Os germanos estavam ocupados saqueando e não perseguiram de imediato. Os trombeteiros tocaram um sinal que fez o inimigo pensar que Asprenas chegava com reforços, e a perseguição parou. Asprenas, de fato, veio ajudar depois."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "As estimativas modernas dão de 15.000 a 20.000 romanos mortos. Alguns prisioneiros foram resgatados, e soldados comuns parecem ter sido escravizados. Segundo Tácito, oficiais foram sacrificados em rituais germânicos. Armínio mandou a cabeça de Varo a Maroboduo, propondo uma aliança contra Roma. Maroboduo recusou, mandou a cabeça a Roma para ser enterrada e ficou neutro.",
        "Segundo Suetônio, Augusto batia a cabeça nas paredes do palácio e gritava: 'Quintílio Varo, devolve-me as minhas legiões!'. Cássio Dio conta que ele rasgou as roupas e temeu uma invasão da Itália. Como quase não restavam homens em idade militar, sorteou um em cada cinco com menos de 35 anos e um em cada dez com mais, e quem foi sorteado perdeu bens e direitos. As legiões XVII, XVIII e XIX nunca mais foram recriadas.",
        { h: "A vingança e a águia" },
        "De 14 a 16 d.C., Germânico, general romano, fez campanhas contra os germanos. Em 15 d.C., os romanos encontraram no lugar da batalha ossos branqueados e crânios pregados em árvores, e os enterraram. Thusnelda, mulher de Armínio, foi capturada. Em 16 d.C., Germânico derrotou Armínio em Idistaviso e depois no Muro dos Angrivários, mas foi chamado de volta, e Tibério ordenou que parasse. Tácito culpou o ciúme de Tibério. Duas das três [[águias|águia]] perdidas foram recuperadas: uma dos marsos em 14 d.C. e a da XIX dos brúcteros em 15 d.C., por Lúcio Estertínio. A terceira só voltou em 41 d.C., recuperada de uma tribo dos caucos por Públio Gabínio.",
        "Armínio morreu em 21 d.C., envenenado, possivelmente por parentes que temiam seu poder crescente.",
        { h: "Por que importa" },
        "O Reno virou a fronteira de Roma por séculos. Estudiosos mais recentes afirmam que a logística e o custo econômico de conquistar a Germânia pesaram tanto quanto a derrota em si. Mesmo assim, Teutoburgo marcou o limite da expansão romana na Europa do Norte.",
        { h: "Curiosidades e controvérsias" },
        { note: "Onde foi? Por quase 2.000 anos o local não foi identificado. O Monumento a Hermann (Armínio), construído entre 1838 e 1875 perto de Detmold, marcava o lugar que então se acreditava ser o certo. Hoje se aceita que a batalha final ocorreu em Kalkriese, a uns 80 km de lá, perto de Bramsche, onde as escavações sistemáticas começaram em 1987. Acharam cerca de 6.000 peças de equipamento romano, moedas com a contramarca VAR (de Varo) e um muro de turfa. Mas existe uma discussão sobre se Kalkriese é o palco de toda a batalha ou só do final." },
        { note: "O nome 'Hermann' vem de uma tradução errada de 'Armin'; o erro é muitas vezes atribuído a Lutero, mas sem razão." },
        { note: "O nome da floresta: na Idade Média ela se chamava Osning. O nome 'Teutoburgo' surgiu depois, a partir de um trecho de Tácito." },
        { note: "O mito nacional: no século XIX, a batalha virou um símbolo do nacionalismo alemão, que via em Armínio um herói fundador." }
      ]}
    ]
  },

  guandu: {
    war: "Guerras do fim da dinastia Han: Cao Cao contra Yuan Shao (200 d.C.)",
    hook: "Com bem menos homens, Cao Cao esperou, aguentou e queimou a comida do inimigo numa noite.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século II, a [[dinastia han]] já não mandava em nada. O imperador era uma figura de cerimônia, e a China era dividida entre [[senhores da guerra|senhor da guerra]]. Dois deles se destacavam no norte: Yuan Shao, que controlava as terras ao norte do Rio Amarelo (a região de Hebei), e Cao Cao, que dominava a maior parte do que ficava ao sul do rio e tinha em seu poder o imperador Xian, instalado na nova capital, Xu.",
        "A guerra entre os dois parecia inevitável desde 196. Os conselheiros de Yuan Shao, Ju Shou e Tian Feng, o aconselharam a atacar cedo, enquanto Cao Cao ainda juntava forças. Yuan não quis, porque Cao Cao ainda era, no papel, seu aliado.",
        { h: "O caminho até Guandu" },
        { timeline: [
          ["199", "Cao Cao derrota Lü Bu em Xiapi e fica dono de quase todo o sul do rio. Posta tropas em Guandu."],
          ["Início de 200", "Liu Bei se revolta, mata o inspetor da província de Xu e toma a província. Cao Cao vira para o leste e o derrota."],
          ["Início de 200", "Chen Lin escreve uma condenação pública de Cao Cao, que funciona como declaração de guerra. O exército de Yuan marcha para Liyang."],
          ["Depois", "Escaramuças em Boma e no Vau de Yan."],
          ["Oitavo e nono meses (calendário chinês)", "Guerra de trincheiras em Guandu."],
          ["Décimo mês", "A incursão a Wuchao e a derrota de Yuan."]
        ]},
        "Cao Cao tinha posto guarnições nos vaus do Rio Amarelo: Yu Jin no Vau de Yan, Xiahou Dun no Vau de Meng, Cheng Yu em Juancheng. Yuan Shao, depois de prender Tian Feng por 'desanimar o exército' (ele havia aconselhado esperar), avançou."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Cao Cao" },
        "Cao Cao tinha menos homens, mas controlava o imperador e tinha uma máquina de governo funcionando. Seus conselheiros mais importantes eram Xun Yu, Xun You, Jia Xu e Cheng Yu. O historiador Carl Leban atribui a vitória à escolha de Guandu como ponto de resistência: ali, a linha de suprimentos de Yuan ficava esticada ao máximo. Num momento de falta de comida, Cao Cao pensou em recuar, mas Xun Yu lhe escreveu uma carta mandando ficar, comparando a situação à luta entre Chu e Han, e ele ficou.",
        { h: "Yuan Shao" },
        "Yuan Shao era mais forte em homens e terras, e a tradição o descreve como orgulhoso e lento em decidir. O historiador Rafe de Crespigny discorda da imagem do indeciso: argumenta que o domínio de Yuan sobre seus territórios era mais frágil que o de Cao Cao e que ele não tinha homens de sobra para operações secundárias. O historiador Sima Guang atribuiu a derrota à teimosia, apesar da generosidade e da capacidade.",
        { h: "Os outros nomes" },
        "Do lado de Yuan, Ju Shou propôs uma guerra de desgaste e foi ignorado. Shen Pei e Guo Tu eram os conselheiros que Yuan mais ouvia. Zhang He e Gao Lan comandavam tropas. Xu You, antigo conselheiro de Yuan, desertou para Cao Cao depois de Shen Pei prender a família dele, e fez a diferença."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As fontes dão a Yuan Shao cerca de 110.000 homens, incluindo 10.000 de cavalaria. Para Cao Cao, as estimativas vão de uns 20.000 a 40.000. Os números de Yuan são geralmente vistos como exagerados nas fontes antigas, e os de Cao Cao são incertos.",
        { note: "Os números de mortos também variam: Pei Songzhi, comentarista do Sanguozhi (as 'Crônicas dos Três Reinos'), registra que Cao Cao teria matado 70.000 ou 80.000 homens de Yuan. Sima Guang escolheu 70.000, e o próprio relatório de Cao Cao ao imperador fala em cerca de 70.000 cabeças cortadas. É provável que sejam exageros de propaganda." },
        { h: "As escaramuças" },
        "Yan Liang, general de Yuan, cercou Boma. Por conselho de Xun You, Cao Cao simulou um ataque ao Vau de Yan. Yuan tirou tropas de Liyang para enfrentar a ameaça, e Yan Liang ficou sem apoio. Cao Cao atacou o leste, levantou o cerco, e Guan Yu matou Yan Liang. Wen Chou e Liu Bei perseguiram com 6.000 cavaleiros. Cao Cao mandou os homens largarem os bens pelo caminho. Enquanto a cavalaria de Yuan parava para pegar o saque, 600 cavaleiros de elite de Zhang Liao e Xu Huang caíram sobre ela. Wen Chou foi morto, e Liu Bei fugiu.",
        { h: "A guerra de trincheiras" },
        "Yuan avançou para Yangwu e construiu fortificações. Ignorou os 700 homens de Cheng Yu em Juancheng, que lhe dariam um ataque ao flanco leste de Cao Cao. Entre os planos propostos, Ju Shou defendeu o desgaste e Xu You, a captura do imperador. Yuan escolheu o avanço direto. No oitavo mês, o exército de Yuan avançou ao sul. Construiu rampas e plataformas altas para arqueiros, e os homens de Cao Cao se protegeram com escudos e destruíram as plataformas com [[catapultas de tração|catapulta de tração]]. Yuan tentou cavar túneis sob o forte, mas Cao Cao cavou um fosso para bloqueá-los. No nono mês, Xu Huang e Shi Huan atacaram o depósito de Han Meng em Gushi e queimaram carroças de grãos.",
        { h: "Wuchao" },
        "No décimo mês, Chunyu Qiong escoltou 10.000 homens e grandes reservas de comida até Wuchao, a cerca de 40 li de Guandu. Ju Shou pediu uma guarda externa, e Yuan recusou. Xu You, que tinha desertado, contou a Cao Cao onde estava a comida. Os generais duvidaram, mas Xun You e Jia Xu o convenceram.",
        "À noite, Cao Cao saiu com Yue Jin e 5.000 homens de infantaria e cavalaria, disfarçados de reforços de Yuan. Cao Hong e Xun You ficaram no acampamento principal. As defesas de Chunyu Qiong foram vencidas. Ele foi capturado por Yue Jin, que cortou seu nariz, e a maior parte da comida foi queimada.",
        "Zhang He pediu para reforçar Wuchao. Guo Tu preferiu atacar Guandu, para obrigar Cao Cao a voltar. Yuan escolheu o plano de Guo Tu e mandou Zhang He e Gao Lan contra Guandu, com apenas uma pequena unidade de cavalaria para Wuchao. Cao Cao se recusou a dividir as forças e lutou até o fim. Zhang He e Gao Lan não conseguiram romper e se renderam a Cao Hong. O exército de Yuan desabou. Yuan Shao fugiu para o norte, atravessando o Rio Amarelo com cerca de 800 cavaleiros, o que restava de seu exército. Ju Shou foi capturado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Uma estimativa moderna dá cerca de 8.000 mortos para Cao Cao e 80.000 para Yuan, mas esses números são pouco confiáveis. Yuan Shao morreu em junho de 202. O filho caçula, Yuan Shang, foi nomeado herdeiro, e o mais velho, Yuan Tan, ficou ressentido. Os irmãos brigaram, e Cao Cao aproveitou. Em 207, Yuan Shang e Yuan Xi fugiram para Gongsun Kang, em Liaodong, que os matou e mandou as cabeças a Cao Cao. A essa altura, a maior parte do norte da China estava nas mãos de Cao Cao.",
        { h: "Por que importa" },
        "Guandu é o exemplo clássico da vitória do mais fraco pela logística. Cao Cao não ganhou no combate direto, e sim aguentando e atingindo a comida do inimigo. A batalha abriu o caminho para a reunificação gradual do norte e, mais tarde, para o reino de Cao Wei, um dos Três Reinos.",
        { h: "Curiosidades e controvérsias" },
        { note: "As leituras da história: a tradição nacionalista julgou a batalha por personalidades (Cao Cao decidido, Yuan Shao lento e arrogante). Mao Zedong usou Guandu como exemplo de recuo estratégico: o inimigo forte comete erros fatais quando o fraco espera. Historiadores marxistas viam um conflito de classes entre os latifundiários-funcionários de Yuan e os médios e pequenos proprietários de Cao." },
        { note: "O sucesso do ataque a Wuchao depende, nas fontes, da deserção de Xu You. Se ele não tivesse desertado depois que sua família foi presa, talvez a batalha tivesse outro resultado." }
      ]}
    ]
  },

  penhascos: {
    war: "Campanha de Cao Cao no sul da China (208–209 d.C.)",
    hook: "O maior exército do norte da China parou num rio, e um incêndio decidiu o resto.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Depois de vencer Yuan Shao em Guandu, em 200, e derrotar os wuhuan na Montanha do Lobo Branco no inverno de 207, Cao Cao controlava o norte da China. Em 208, voltou a Ye e foi nomeado chanceler por recomendação própria, o que lhe deu controle efetivo do governo. No outono desse ano, começou a campanha do sul.",
        "O primeiro alvo era o curso do Yangtzé na província de Jing, e a base naval de Jiangling era a chave. Liu Biao, governador de Jing, morreu poucas semanas depois do início da campanha. Seus filhos Liu Qi e Liu Cong disputavam a sucessão. Liu Cong levou a melhor e se rendeu a Cao Cao, entregando uma frota considerável e Jiangling como base avançada.",
        { h: "O caminho até os Penhascos Vermelhos" },
        { timeline: [
          ["Outono de 208", "Cao Cao começa a campanha do sul. Liu Biao morre; Liu Cong se rende."],
          ["208", "A cavalaria de elite de Cao Cao alcança Liu Bei em Changban e o derrota. Liu Bei foge para Xiakou."],
          ["208", "Zhuge Liang vai a Chaisang negociar a aliança com Sun Quan."],
          ["Fim de 208", "Batalha dos Penhascos Vermelhos."],
          ["Fim de 209", "Zhou Yu toma Jiangling."]
        ]},
        "Liu Bei, derrotado, encontrou em Xiakou Lu Su, enviado de Sun Quan, senhor de Jiangdong, ao sul do Yangtzé. Zhuge Liang, conselheiro de Liu Bei, foi a Chaisang propor a aliança. Cao Cao tinha mandado uma carta a Sun Quan dizendo ter um exército de 800.000 homens e sugerindo que ele se rendesse."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Cao Cao" },
        "Cao Cao vinha de vitórias seguidas. Jia Xu o aconselhou a dar descanso a um exército sobrecarregado, e Cao Cao não ouviu. Zhou Yu observou que a maioria dos comandantes e soldados de Cao vinha da cavalaria e da infantaria, com poucos veteranos de navios, e que o terreno do sul não tinha sido conquistado de verdade.",
        { h: "Sun Quan e Zhou Yu" },
        "No tribunal de Sun Quan, o secretário-chefe Zhang Zhao defendeu a rendição, por causa da diferença de forças. Lu Su e Zhou Yu, comandante-chefe de Sun Quan, defenderam a guerra. Sun Quan cortou um canto de sua mesa durante a assembleia e avisou que quem falasse em render-se teria o mesmo destino que a mesa.",
        { h: "Liu Bei e Zhuge Liang" },
        "Liu Bei, sem território, era o parceiro menor da aliança, mas Zhuge Liang convenceu Sun Quan dizendo, segundo as fontes, que Liu Bei e Liu Qi tinham 10.000 homens cada. Zhuge Liang também observou que uma flecha poderosa, no fim de seu voo, não consegue furar nem seda.",
        { h: "Os outros nomes" },
        "Huang Gai, comandante de divisão de Sun Quan, foi o autor do ataque de fogo. Cheng Pu dividiu o comando com Zhou Yu. Cao Ren ficou em Jiangling com Xu Huang, e Yue Jin em Xiangyang."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Cao Cao afirmou ter 800.000 homens. Zhou Yu estimou 220.000 a 240.000, e é esse o número usado por muitos autores. Desses, de 70.000 a 80.000 eram homens recém-recrutados, de lealdade duvidosa. Entre eles havia não combatentes, incluindo esposas e filhos de soldados. A aliança tinha cerca de 50.000 homens: 30.000 de Sun Quan (sob Zhou Yu, Cheng Pu e Lu Su) e uns 20.000 de Liu Bei.",
        { note: "Os números de Cao Cao são os que mais variam. O de 800.000 é do próprio Cao Cao numa carta de ameaça, e o de Zhou Yu, feito para convencer Sun Quan, tem o mesmo motivo de exagerar. A diferença entre as duas forças existia, mas é incerta em quanto." },
        { h: "O terreno" },
        "O Yangtzé, grande demais para ser atravessado a pé e com margens pantanosas ao norte do lago Dongting. O local exato não é conhecido. O candidato mais aceito é a cidade de Chibi (antiga Puqi), em Hubei, que fica do outro lado do rio em relação a Wulin e tem inscrições nos penhascos entre as dinastias Tang e Song. Há outras propostas: o lugar de Huangzhou, onde o poeta Su Dongpo escreveu sobre os penhascos vermelhos (rejeitado por quase todos os especialistas), a área de Wuhan e o condado de Jiayu, em Xianning, defendido por Rafe de Crespigny, entre outros, com base num texto geográfico antigo.",
        { h: "A batalha em quatro movimentos" },
        "Primeiro, a abertura. As forças de Cao Cao tentaram abrir uma cabeça de ponte no Yangtzé e fracassaram. A frota aliada subiu o rio a partir de Xiakou ou Fankou até os Penhascos Vermelhos e encontrou a vanguarda de Cao Cao. Os soldados do norte, enfraquecidos por doenças e marchas forçadas, não ganharam vantagem. Cao Cao recuou para Wulin, na margem norte, e os aliados voltaram para a margem sul.",
        "Segundo, os navios amarrados. O texto diz que Cao Cao amarrou seus navios uns aos outros, possivelmente para reduzir o enjoo dos soldados do norte.",
        "Terceiro, o fogo. Huang Gai mandou uma carta fingindo se render e preparou um esquadrão de grandes navios de guerra (os mengchong doujian), cheios de lenha, juncos secos e óleo. Quando chegaram ao meio do rio, as tripulações atearam fogo e fugiram em barcos pequenos. O vento sudeste empurrou os navios em chamas, sem tripulantes, para a frota de Cao Cao. Muitos homens e cavalos queimaram ou se afogaram. As fontes discordam sobre quantos navios eram: 'várias dezenas' nas Crônicas dos Três Reinos, dez no Zizhi Tongjian.",
        "Quarto, a perseguição. Zhou Yu e os aliados atacaram com tropas leves, e o exército de Cao Cao desabou. Ele mandou uma retirada geral e destruiu parte dos navios que restavam. A estrada de Huarong, pelo pântano ao norte do lago Dongting, virou lama com a chuva. Soldados doentes carregaram feixes de capim para cobrir o chão, e muitos se afogaram ou foram pisoteados. Zhou Yu e Liu Bei perseguiram até a comandância de Nan. Gan Ning abriu uma cabeça de ponte em Yiling, e a defesa de Cao Ren em Jiangling evitou um desastre maior. Cao Cao voltou para Ye."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Não há números confiáveis de baixas. As perdas de Cao Cao foram pesadas. Ao fim de 209, Zhou Yu tomou Jiangling, e as fronteiras de Cao Cao recuaram uns 160 km, até a região de Xiangyang. Liu Qi foi nomeado inspetor de Jing mas morreu de doença poucos meses depois, e Sun Quan absorveu suas terras. Liu Bei reivindicou o título e ocupou boa parte de Jing, incluindo quatro comandâncias ao sul do Yangtzé. Zhou Yu morreu em 210.",
        { h: "Por que importa" },
        "Cao Cao nunca mais comandou uma frota tão grande. O controle de Jing deu a Liu Bei acesso à província de Yi, e a aliança que venceu em Chibi preparou o terreno para os reinos de Shu Han e Wu Oriental, nos Três Reinos (220–280). Foi o começo de uma divisão entre norte e sul que durou séculos.",
        { h: "Curiosidades e controvérsias" },
        { note: "História e romance: o Romance dos Três Reinos, atribuído a Luo Guanzhong (cerca de 1315 a 1400), é, segundo o historiador Zhang Xuecheng, uns 70% fato e 30% ficção. Cenas famosas do romance, como Zhuge Liang pedindo emprestadas flechas com barcos de palha, Zhuge Liang 'invocando' o vento do leste e Guan Yu deixando Cao Cao fugir na estrada de Huarong, não aparecem nas crônicas. O plano do fogo, nas crônicas, é de Huang Gai, e não de Zhuge Liang." },
        { note: "Cao Cao nunca aceitou que Zhou Yu tivesse vencido. Segundo as fontes, ele disse que queimou os navios e recuou por causa da doença, e que não era justo Zhou Yu levar o crédito." },
        { note: "As causas da derrota: sem base segura no sul, com pouco apoio local, um exército de infantaria e cavalaria transformado em marinha com poucos dias de treino, enjoo e doenças tropicais. Zhuge Liang resumiu: a flecha que chega ao fim do voo não fura a seda." }
      ]}
    ]
  },

  pontemilvia: {
    war: "Guerras civis da Tetrarquia (306–324)",
    hook: "Um exército romano foi empurrado para dentro do Tibre, e o império mudou de religião.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1º de maio de 305, o imperador Diocleciano abdicou. A [[tetrarquia]] que ele criou, com quatro governantes, não tinha regra clara de sucessão, e seus herdeiros brigaram quase de imediato.",
        "Em 25 de julho de 306, Constâncio, imperador do Ocidente, morreu em York. As tropas proclamaram Augusto o filho dele, Constantino. Galério, o outro imperador sênior, o reconheceu só como César. Em 28 de outubro do mesmo ano, em Roma, Maxêncio, filho do ex-imperador Maximiano, tomou o título. Galério o tratou como [[usurpador]].",
        { h: "O caminho até a Ponte Mílvia" },
        { timeline: [
          ["305", "Diocleciano abdica."],
          ["306", "Constantino é proclamado em York. Maxêncio toma Roma."],
          ["307", "Severo, mandado por Galério, é abandonado pelas tropas e executado. Galério marcha sobre Roma no outono e fracassa."],
          ["Primavera de 312", "Constantino cruza os Alpes com cerca de 40.000 homens."],
          ["312", "Vitórias perto de Turim e em Verona; o prefeito pretoriano Ruricio Pompeiano morre."],
          ["28 de outubro de 312", "Batalha da Ponte Mílvia."]
        ]},
        "Em 312, as relações tinham azedado de vez, embora Constantino fosse casado com Fausta, irmã de Maxêncio. Segundo os historiadores, Constantino cruzou os Alpes Cócios com cerca de 40.000 homens, uma parte do exército. Tomou Segúsio, venceu em Turim e avançou por Milão, Bréscia e Verona. Aquileia, Mutina e Ravena vieram depois, e o caminho para Roma ficou aberto."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Constantino" },
        "Constantino tinha cerca de 40 anos (a data mais aceita para seu nascimento é 27 de fevereiro de 272). Era um general experiente, ligado ao exército de seu pai, e vinha da Gália. Sua decisão central foi marchar sobre Roma sem esperar que Maxêncio viesse até ele, o que obrigava o inimigo a decidir. Seu papel religioso depois da batalha é a parte mais discutida de sua vida.",
        { h: "Maxêncio" },
        "Maxêncio tinha Roma, fartura de comida estocada e, em duas ocasiões (contra Severo e contra Galério), tinha vencido só esperando atrás das muralhas. Era o esperado de novo. Em vez disso, saiu para lutar. As fontes explicam de formas diferentes: Lactâncio e Eusébio, ambos cristãos, falam em intervenção divina; Zósimo, pagão, em superstição.",
        { h: "Os outros nomes" },
        "O prefeito pretoriano Ruricio Pompeiano, o general mais importante de Maxêncio, morreu em Verona. A [[guarda pretoriana|pretorianos]] seria o núcleo do exército de Maxêncio no último dia."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As estimativas modernas dão a Constantino de 20.000 a 25.000 homens (ou cerca de 40.000, conforme o autor) e a Maxêncio cerca de 25.000. Zósimo afirma 90.000 soldados de infantaria e 8.000 cavaleiros para Constantino e 170.000 mais 18.000 cavaleiros para Maxêncio, números que os historiadores consideram bastante implausíveis.",
        { note: "As fontes antigas são parciais. Lactâncio e Eusébio escreveram como cristãos, e o relato mais antigo da visão é posterior à batalha. Os números de Zósimo não devem ser levados a sério." },
        { h: "O terreno" },
        "A ponte Mílvia levava a Via Flamínia sobre o Tibre, ao norte de Roma. Maxêncio cortou as pontes do Tibre e mandou construir um [[pontão]] ao lado, provavelmente depois de danificar parcialmente a ponte de pedra. Zósimo descreve uma ponte em duas partes unidas por fixações de ferro. As fontes divergem sobre se a ponte foi uma armadilha deliberada.",
        { h: "A visão" },
        "Segundo Lactâncio, na noite anterior à batalha Constantino foi mandado em sonho marcar os escudos dos soldados com o 'sinal celeste', provavelmente um staurograma (uma cruz com a ponta de cima arredondada como um P), embora Lactâncio não seja preciso. Segundo Eusébio, em seu primeiro relato (a História Eclesiástica), Deus ajudou Constantino, mas sem visão. Na Vida de Constantino, Eusébio descreve outra cena: durante a marcha, em lugar não definido, Constantino viu uma cruz de luz acima do sol com as palavras gregas que se traduzem por 'Com este sinal, vencerás', e depois sonhou que devia usar o sinal. É nesse relato que aparece o labarum com o [[crisma]].",
        { h: "A decisão de Maxêncio" },
        "A batalha caiu no aniversário da subida de Maxêncio ao poder. Segundo relatos, os Livros Sibilinos teriam dito que em 28 de outubro um inimigo dos romanos morreria, e Maxêncio leu isso a seu favor. Lactâncio acrescenta que o povo aclamou Constantino nos jogos do circo. Maxêncio formou o exército com o Tibre às costas, o que, segundo Nixon e Rodgers, deixou pouco espaço para se reagrupar.",
        { h: "A batalha em quatro movimentos" },
        "Primeiro, Constantino, que acampou perto de Prima Porta, aproximou-se pela Via Flamínia. Sua cavalaria atacou a cavalaria de Maxêncio primeiro e a rompeu.",
        "Segundo, a infantaria de Constantino avançou. As tropas de Maxêncio lutaram bem, mas foram empurradas em direção ao Tibre.",
        "Terceiro, Maxêncio mandou recuar para se reagrupar em Roma. A ponte era a única saída, e os homens de Constantino causaram grandes perdas aos que recuavam. O pontão ao lado da Ponte Mílvia desabou sob a multidão, e os que ficaram na margem norte foram capturados ou mortos. A guarda pretoriana resistiu na margem norte até o fim, segundo o relato, 'cobrindo com seus corpos o lugar que escolheram para combater'.",
        "Quarto, a morte de Maxêncio. Ele se afogou no Tibre, tentando atravessar a nado ou depois de cair do cavalo. Lactâncio diz que fugiu para a ponte quebrada e foi empurrado ao rio pela multidão."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Constantino entrou em Roma em 29 de outubro, numa cerimônia de chegada com aclamação popular. O corpo de Maxêncio foi tirado do Tibre e decapitado, e a cabeça desfilou nas ruas e foi mandada a Cartago como prova. A África não resistiu mais. Constantino visitou o Senado e prometeu restaurar os privilégios dos senadores e não se vingar dos partidários de Maxêncio. A memória de Maxêncio foi condenada, e suas leis anuladas. Constantino assumiu as obras dele, como o Templo de Rômulo e a Basílica de Maxêncio.",
        "A guarda pretoriana e os equites singulares foram dissolvidos. Acredita-se que Constantino os tenha substituído por unidades de cavalaria chamadas Scholae Palatinae.",
        { h: "Por que importa" },
        "No ano seguinte, Constantino e Licínio emitiram o Édito de Milão, que reconheceu e tolerou oficialmente o cristianismo. Para o historiador Paul K. Davis, a vitória deu a Constantino o controle total do Ocidente e abriu caminho para o domínio do cristianismo. O Arco de Constantino, erguido para celebrar a vitória, atribui o triunfo à intervenção divina, mas não traz símbolos abertamente cristãos, e um friso mostra a cavalaria de Constantino empurrando os homens de Maxêncio para o Tibre.",
        { h: "Curiosidades e controvérsias" },
        { note: "A visão aconteceu? John Julius Norwich argumentou que a visão da cruz 'nunca ocorreu', já que nenhuma história da época a menciona, mas admitiu que Constantino provavelmente teve 'alguma experiência espiritual profunda'. Alguns estudiosos ligam a visão a um fenômeno solar, o halo de cão-do-sol. Em 313, as moedas de Constantino ainda o mostravam com o Sol Invicto." },
        { note: "O sinal: o crisma e o labarum só aparecem com clareza por volta de 317, numa moeda de prata, e foram usados mais amplamente depois, na guerra contra Licínio." },
        { note: "No cortejo da entrada em Roma, os relatos não dizem que Constantino tenha parado no Templo de Júpiter Capitolino para o sacrifício tradicional. Mas esse silêncio não prova que ele já fosse cristão." }
      ]}
    ]
  },

  adrianopolis: {
    war: "Guerra Gótica (376–382)",
    hook: "O imperador que não quis esperar reforços perdeu o exército e a vida numa tarde de verão.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 376, os tervíngios, um povo godo, chegaram ao Danúbio pedindo asilo. Os hunos os tinham expulsado de suas terras. Os chefes Alavivo e Fritigerno pediram ao imperador do Oriente, Valente, para se instalar no território romano. Valente aceitou, como [[federados]], esperando que fossem lavradores e soldados.",
        "Depois da travessia, os comandantes romanos da província, Lupicino e Máximo, os maltrataram, e os godos se revoltaram. Valente pediu ajuda a Graciano, imperador do Ocidente e seu sobrinho, que mandou Frigerido e Ricomeres. Por dois anos, as duas partes travaram combates sem vitória clara.",
        { h: "O caminho até Adrianópolis" },
        { timeline: [
          ["376", "Os godos cruzam o Danúbio e logo se revoltam."],
          ["376–378", "Dois anos de combates sem vencedor claro."],
          ["30 de maio de 378", "Valente chega a Constantinopla."],
          ["6 de agosto de 378", "Batedores avisam que cerca de 10.000 godos avançam, a 25 km ao norte de Adrianópolis."],
          ["8 de agosto de 378", "Fritigerno manda um emissário oferecer paz. Valente recusa."],
          ["9 de agosto de 378", "A batalha."]
        ]},
        "Em 378, Valente assumiu o comando pessoal da campanha, trazendo tropas da Síria. Mandou Sebastiano, recém-chegado da Itália, reorganizar os exércitos da Trácia. Sebastiano pegou 2.000 legionários e emboscou pequenos grupos de godos. Graciano derrotou os alamanos lentienses perto de Argentária antes de seguir para o leste. Valente se fortificou perto de Adrianópolis com fossos e muralha de estacas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Valente" },
        "Segundo Amiano Marcelino, Valente tinha ciúme do sucesso do jovem sobrinho Graciano e queria vencer antes que ele chegasse. Ricomeres trouxe uma carta de Graciano pedindo que esperasse, e o oficial Vítor também aconselhou a esperar. Sebastiano e os cortesãos pressionaram pela batalha imediata. Valente decidiu lutar.",
        { h: "Fritigerno" },
        "Chefe dos tervíngios, Fritigerno sabia que o tempo trabalhava a seu favor: sua cavalaria, saída para forragear, voltaria. Por isso mandou, na véspera, um emissário a Valente, um presbítero cristão, oferecendo paz e uma aliança em troca de terras na Trácia. No dia da batalha, ficou enrolando, com pedidos de reféns.",
        { h: "Os outros nomes" },
        "Alateu e Safrax lideravam os greutungos, que incluíam alanos. Do lado romano, Bacúrio, o ibero, comandava arqueiros e escudeiros, e Trajano, que tinha sido comandante da infantaria, estava com Valente."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são muito incertos. Para os romanos, Peter Heather dá cerca de 15.000 (10.000 de infantaria e 5.000 de cavalaria), e Williams e Friell, 30.000. Para os godos, Delbrück dá de 12.000 a 15.000, e Williams e Friell, 20.000. Valente reuniu sete legiões de 700 a 1.000 homens cada, arqueiros a cavalo e as scholae, a guarda imperial.",
        { note: "Quanto de cavalaria os godos tinham é uma discussão histórica. Charles Oman (1885) defendeu que a cavalaria era a maior parte da força gótica. T. S. Burns (1973) e outros mais recentes dizem que a maioria era de infantaria, embora a cavalaria de Fritigerno tenha sido decisiva." },
        { h: "O terreno" },
        "O local exato não é conhecido. Há três propostas: ao norte da cidade, a oeste do rio Tonzos e a leste do Hebros; ao norte, a leste do Tonzos, perto de Muratçalı; ou a leste de Adrianópolis, perto de Demirhanlı. Os godos estavam numa colina, com o [[círculo de carroças]] guardando famílias e bens.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, na manhã de 9 de agosto, Valente deixou Adrianópolis, com o tesouro e a administração sob guarda, e marchou por terreno difícil. Chegou ao campo godo, segundo Amiano, pela oitava hora do dia, no início da tarde, com os soldados cansados e com sede. Colocou a cavalaria à frente, na direita; a cavalaria da esquerda ainda vinha pelas estradas.",
        "Segundo, os godos tinham um plano: enrolar. Queimaram os campos para sufocar os romanos com fumaça e calor e começaram a negociar. Valente rejeitou os primeiros enviados, de baixa posição, e exigiu chefes. Fritigerno então pediu reféns de alta posição, e Ricomeres se ofereceu para ir.",
        "Terceiro, quando Ricomeres se aproximava, os arqueiros e escudeiros de Bacúrio e Cássio, sem ordem, atacaram cedo. Foram repelidos e recuaram desordenados, o que impediu o emissário de passar e deu ao combate um péssimo início.",
        "Quarto, a ala esquerda romana, que avançou até as carroças, chegou tarde demais e foi abandonada pelo resto da cavalaria.",
        "Quinto, a cavalaria gótica, com Alateu, Safrax e alguns alanos, voltou da forragem 'como um raio', segundo Amiano, e atacou. Os godos se uniram: Fritigerno com os tervíngios, Alateu e Safrax com os greutungos.",
        "Sexto, a cavalaria romana foi desbaratada, e a infantaria, apertada e sem espaço, foi empurrada para trás. Amiano diz que ficou tão apertada que não conseguia sacar a espada. Poeira e flechas escureciam o céu.",
        "Sétimo, no calor da tarde, com os soldados exaustos e com sede, a linha romana quebrou e todos fugiram. As armaduras pesadas e os escudos longos impediam os romanos de manobrar.",
        "Oitavo, a noite. Os romanos fugiram, foram pisoteados ou mortos pelos próprios companheiros, e a cavalaria gótica matou até o escurecer.",
        { h: "O fim de Valente" },
        "Segundo Amiano, Valente foi atingido por uma flecha ao anoitecer, no meio de soldados comuns, e o corpo nunca foi achado. Numa segunda versão, ele foi levado ferido a uma casa de campo fortificada com guarda-costas e alguns eunucos. Os godos, sem saber quem era, atearam fogo na casa depois que flechas disparadas da sacada barraram o ataque. Um guarda-costas pulou da janela, foi capturado, e depois escapou para contar a história."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Peter Heather estima de 10.000 a 15.000 romanos mortos, e Williams e Friell, 20.000, o que seria cerca de dois terços da força. Amiano diz que 'mal um terço' do exército escapou, e só compara o desastre a Canas. Morreram Valente, Sebastiano, Trajano, Equício (parente de Valente), Valeriano (mestre da cavalariça), Potêncio (tribuno) e 35 [[tribunos|tribuno]]. Ricomeres e Saturnino sobreviveram.",
        "Os godos foram a Adrianópolis, onde estavam o tesouro e as insígnias imperiais, e tentaram tomá-la. Fracassaram, e Amiano conta tentativas, uma tempestade e a retirada.",
        { h: "Por que importa" },
        "Amiano chama a derrota de a pior desde Edessa. Ela destruiu o núcleo do exército romano do Oriente, matou administradores valiosos e esvaziou os arsenais das províncias do Danúbio. Teodósio I, sucessor de Valente, domou parcialmente os godos e os readmitiu como federados: eles nunca foram expulsos, exterminados nem assimilados.",
        { h: "Curiosidades e controvérsias" },
        { note: "Foi o começo do fim? A batalha é 'muitas vezes considerada' o início da série de eventos que levou à queda do Império do Ocidente, mas é uma afirmação discutida: o império não acabou ali, porque o poder militar só ficou temporariamente prejudicado." },
        { note: "A tese da cavalaria: em 1885, Charles Oman argumentou que a cavalaria pesada derrotou a infantaria romana e inaugurou a era do cavaleiro medieval. Burns contestou em 1973. O cavaleiro medieval só surgiria vários séculos depois." },
        { note: "Amiano compara o fim de Valente, queimado numa torre sem sepultura, ao do segundo Cipião. Ele também menciona que Décio, o César, teria caído do cavalo num pântano e se afogado." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  accio: {
    terrain: [
      { t: "sea", x: 16, y: 0, w: 84, h: 70, l: "Mar Jônico" },
      { t: "note", x: 8, y: 36, l: "Costa" },
      { t: "note", x: 90, y: 66, l: "Peloponeso ↓" }
    ],
    units: [
      { id: "aR", s: "a", k: "ship", w: 20, h: 3, l: "Lúrio (direita)" },
      { id: "aC", s: "a", k: "ship", w: 20, h: 3, l: "Arrúncio (centro)" },
      { id: "aL", s: "a", k: "ship", w: 20, h: 3, l: "Agripa (esquerda)" },
      { id: "aCamp", s: "a", k: "camp", w: 12, h: 5, l: "Exército de Tauro" },
      { id: "bL", s: "b", k: "ship", w: 20, h: 3, l: "Sósio (esquerda)" },
      { id: "bC", s: "b", k: "ship", w: 20, h: 3, l: "Otávio e Ínsteio (centro)" },
      { id: "bA", s: "b", k: "ship", w: 8, h: 3, l: "Antônio" },
      { id: "bR", s: "b", k: "ship", w: 16, h: 3, l: "Publícola (direita)" },
      { id: "bCl", s: "b", k: "ship", w: 14, h: 3, l: "Cleópatra (60 navios)" },
      { id: "bCamp", s: "b", k: "camp", w: 12, h: 5, l: "Exército de Canídio" }
    ],
    steps: [
      { t: "Depois de dias de tempestade, o mar acalma. Antônio sai pelo estreito e forma a linha: Sósio na esquerda, Otávio e Ínsteio no centro, Publícola e ele mesmo na direita. Cleópatra fica atrás. Otaviano espera no mar aberto.",
        p: { aR: [34, 14], aC: [58, 12], aL: [86, 14], aCamp: [9, 9], bL: [30, 42], bC: [54, 42], bA: [70, 42], bR: [86, 42], bCl: [56, 57], bCamp: [9, 60] } },
      { t: "Segundo Dio, Otaviano avança as alas em meia-lua para tentar envolver a linha inimiga. Antônio manda os seus ficarem parados no golfo estreito e não romperem a formação.",
        p: { aR: [32, 25, -8], aC: [58, 20], aL: [88, 25, 8] } },
      { t: "Sósio avança pela esquerda de Antônio. Plutarco diz que Otaviano manda recuar a sua direita, para atrair os navios inimigos para mar aberto.",
        p: { bL: [28, 36], aR: [26, 18, -8] } },
      { t: "Os navios altos e pesados de Antônio abalroam mal, e a luta vira uma espécie de cerco, com abordagem, flechas e catapultas. Os homens de Otaviano lançam fogo, e as chamas se espalham.",
        p: { aC: [58, 30], bC: [54, 36], bL: [30, 32], aR: [30, 26, -8] } },
      { t: "Agripa estende a ala esquerda para flanquear a direita de Antônio. Publícola o segue e se separa do centro, que fica em desordem.",
        p: { aL: [92, 36, 25], bR: [92, 46, 15], bC: [52, 38] } },
      { t: "Os 60 navios de Cleópatra içam as velas e saem pelo meio da luta, rumo ao sul. Segundo Dio, ela perdeu a paciência. Para outros, era parte de um plano de fuga.",
        p: { bCl: [76, 42] } },
      { t: "Antônio acha que a batalha está perdida, deixa o navio de comando para um menor e segue Cleópatra, com poucos acompanhantes.",
        p: { bCl: [94, 62], bA: [82, 56] } },
      { t: "A frota sem comandante continua a lutar. Os homens jogam as torres ao mar para ficar mais leves. No fim da tarde, com o mar forte, ela se rende. Plutarco cita as contas de Otaviano: não mais de 5.000 mortos e 300 navios capturados.",
        p: { aC: [54, 38], aR: [30, 34, -8], aL: [88, 40, 25] }, x: ["bL", "bC", "bR"] },
      { t: "O exército de Antônio, com 19 legiões segundo Plutarco, espera sete dias por Canídio. Quando ele foge de noite, os soldados se rendem ao vencedor.",
        p: { aCamp: [9, 54], bCamp: [9, 64] }, x: ["bCamp"] }
    ]
  },

  adrianopolis: {
    terrain: [
      { t: "hill", x: 50, y: 13, rx: 38, ry: 11, l: "Colina gótica" },
      { t: "note", x: 8, y: 67, l: "Adrianópolis ↓ (tesouro imperial)" }
    ],
    units: [
      { id: "gWag", s: "a", k: "camp", w: 20, h: 8, l: "Círculo de carroças" },
      { id: "gInf", s: "a", k: "inf", w: 30, h: 5, l: "Tervíngios (Fritigerno)" },
      { id: "gCav", s: "a", k: "cav", w: 14, h: 5, l: "Cavalaria de Alateu e Safrax" },
      { id: "rRC", s: "b", k: "cav", w: 16, h: 5, l: "Cavalaria da direita" },
      { id: "rInf", s: "b", k: "inf", w: 30, h: 5, l: "Infantaria romana" },
      { id: "rLC", s: "b", k: "cav", w: 16, h: 5, l: "Cavalaria da esquerda" },
      { id: "rArch", s: "b", k: "inf", w: 12, h: 3, l: "Arqueiros de Bacúrio e Cássio" }
    ],
    steps: [
      { t: "Os godos estão numa colina, com as famílias no círculo de carroças. A cavalaria deles saiu para forragear. Os romanos chegam ao meio da tarde, cansados e com sede, e a cavalaria da esquerda ainda vem pelas estradas.",
        p: { gWag: [50, 8], gInf: [50, 21], gCav: [92, 5], rRC: [78, 46], rInf: [50, 50], rLC: [14, 62], rArch: [50, 44] } },
      { t: "Os godos queimam os campos para sufocar os romanos de fumaça e calor, e Fritigerno enrola, pedindo reféns. Ele espera a cavalaria voltar.",
        p: { rInf: [50, 45], rRC: [78, 42], rLC: [26, 56], rArch: [50, 39] } },
      { t: "Quando Ricomeres vai como refém, os arqueiros de Bacúrio e Cássio atacam sem ordem, são repelidos e recuam em desordem.",
        p: { rArch: [50, 30] } },
      { t: "A ala esquerda romana avança até as carroças, mas chega tarde e fica isolada do resto.",
        p: { rArch: [50, 36], rLC: [30, 18], rInf: [50, 41] } },
      { t: "A cavalaria gótica volta da forragem e ataca 'como um raio', diz Amiano.",
        p: { gCav: [86, 26] } },
      { t: "A cavalaria romana é desbaratada. A infantaria, apertada, fica sem espaço para usar as espadas.",
        p: { gCav: [72, 38], rRC: [80, 48], rInf: [50, 44] }, x: ["rRC"] },
      { t: "A ala esquerda isolada é esmagada. Pelo meio da tarde, a linha romana se parte.",
        p: { gInf: [42, 26], rLC: [24, 24], rInf: [50, 47] }, x: ["rLC", "rArch"] },
      { t: "Os romanos fogem. A cavalaria gótica mata até a noite. Dois terços do exército morrem e Valente nunca é achado.",
        p: { gCav: [60, 56], gInf: [48, 36], rInf: [44, 62] }, x: ["rInf"] }
    ]
  }
});
