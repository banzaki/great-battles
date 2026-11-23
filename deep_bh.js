// In-depth battles, batch bh: edessa, arsuf, bouvines, legnica, courtrai (great-battles pack).
// Checked against the English, French, Polish and Dutch Wikipedia articles on the five battles, on Valerian and on the
// Res Gestae Divi Saporis, and the works those pages cite (Hughes, Potter, Bennett, Contamine, Chambers, Hildinger, Labuda,
// Fegley, Van Caenegem). Where sources disagree the text says so; chronicle numbers and legends are flagged.
// No diagram for Edessa: the sources describe no deployment and no moves of the battle itself.

Object.assign(GLOSSARY, {
  "sassânida": "Da dinastia persa que governou o Irã de 224 a 651 e tomou o lugar dos partas. Seus reis se chamavam 'reis dos reis'.",
  "prefeito do pretório": "Alto oficial romano, chefe da guarda do imperador e, na prática, seu principal ministro e comandante auxiliar.",
  "peste de cipriano": "Epidemia que castigou o Império Romano em meados do século III. O nome vem de Cipriano, bispo de Cartago, que a descreveu.",
  "res gestae": "Em latim, 'feitos'. Aqui, a inscrição em que Sapor I contou suas vitórias sobre Roma, em persa médio, parta e grego, gravada na rocha de Naqsh-e Rustam, perto de Persépolis.",
  "besteiro": "Soldado armado de besta, um arco preso a uma coronha que dispara virotes. Exigia pouco treino e perfurava muita armadura.",
  "ayúbida": "Da dinastia fundada por Saladino, que governou o Egito, a Síria e outras terras do Oriente Médio nos séculos XII e XIII.",
  "pique com gancho": "Haste longa com uma lâmina e um gancho de ferro, usada para puxar um cavaleiro de cima do cavalo.",
  "sargento medieval": "Soldado profissional abaixo do cavaleiro, a pé ou a cavalo, com armamento mais leve e soldo em vez de feudo.",
  "goedendag": "Cacete de madeira comprido com uma ponta de ferro, usado pelas milícias flamengas. Em holandês, a palavra quer dizer 'bom dia'.",
  "mangudai": "Cavaleiros leves da vanguarda mongol, que abriam a luta e provocavam o inimigo para que ele quebrasse a formação.",
  "margrave": "Título alemão de quem governa uma região de fronteira, parecido com o de marquês.",
  "cavalaria leve": "Cavaleiros sem armadura pesada, em cavalos ligeiros, que atiram flechas ou dardos, cansam o inimigo e perseguem quem foge."
});

Object.assign(DEEP, {
  edessa: {
    war: "Guerras romano-sassânidas (século III), campanha de Sapor I de 260",
    hook: "Pela primeira vez, um imperador romano foi capturado por um inimigo e nunca voltou para casa.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No século III, o Império Romano passava pela pior fase da sua história. Imperadores subiam e caíam em poucos anos, em geral assassinados pelos próprios soldados, e as fronteiras eram atacadas ao mesmo tempo no Reno, no Danúbio e no Oriente. No Oriente, o inimigo mudou em 224: a dinastia [[sassânida]] derrubou os partas e criou um Estado mais organizado e mais agressivo. Seu segundo rei, Sapor I, tratou a fronteira romana como terra para conquistar e saquear.",
        "Sapor já tinha vencido Roma mais de uma vez. Em 244, depois da morte do imperador Gordiano III, o sucessor Filipe, o Árabe, fez a paz pagando 500.000 denários, segundo a inscrição do próprio Sapor. Entre 252 e 256 (a data é discutida), Sapor diz ter destruído em Barbalisso um exército romano de 60.000 homens e tomado 36 cidades. Antioquia, a maior cidade romana do Oriente, também foi saqueada, em 253 ou 256.",
        { h: "O caminho até Edessa" },
        { timeline: [
          ["224", "Os sassânidas derrubam a dinastia parta e criam o novo império persa."],
          ["244", "Filipe, o Árabe, compra a paz de Sapor I com 500.000 denários, segundo Sapor."],
          ["253", "Valeriano é proclamado imperador e faz do filho Galieno seu co-imperador."],
          ["253 ou 256", "Sapor saqueia Antioquia."],
          ["254–255", "Valeriano chega ao Oriente e aos poucos restabelece a ordem."],
          ["c. 259", "Uma invasão de godos por mar atinge o Ponto e a Capadócia, e uma [[peste|peste de cipriano]] mata muitos soldados romanos."],
          ["260, provavelmente no começo da primavera", "Sapor invade o norte da Mesopotâmia."]
        ]},
        "Valeriano tentou interceptar os godos a partir de Antioquia, mas a peste enfraqueceu o seu exército e o plano falhou. Foi nesse estado, com tropas doentes, que ele teve de enfrentar o rei persa."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Valeriano, na casa dos 60 anos" },
        "Era um senador respeitado, escolhido imperador em 253 durante uma guerra civil. Fez de seu filho Galieno co-imperador, e dividiu o trabalho: Galieno ficou no Ocidente, Valeriano foi para o Oriente. Perseguiu os cristãos por decreto, e esse decreto Galieno cancelaria em 260. Depois de seis anos no comando, tinha restabelecido a ordem no Oriente, mas estava velho e comandava um exército doente.",
        { h: "Sapor I, rei dos reis" },
        "Fez da propaganda uma arma: mandou gravar suas vitórias em pedra, na rocha de Naqsh-e Rustam, perto das tumbas dos reis aquemênidas. A inscrição, a [[Res Gestae Divi Saporis|res gestae]], é a nossa fonte mais próxima dos fatos e também a mais interessada. Sapor ali conta que Valeriano veio contra ele com 70.000 homens, que o venceu e que o prendeu 'com as nossas próprias mãos'.",
        { h: "Os outros nomes" },
        "Galieno, filho de Valeriano, ficou com o Império. Macriano, oficial de Valeriano, controlava o tesouro do imperador e depois proclamou imperadores os seus dois filhos. Balista, oficial romano, e Odenato, senhor de Palmira, são os que reagem depois da derrota."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "A inscrição de Sapor diz que o exército de Valeriano tinha 70.000 homens de quase todas as províncias, mais aliados germânicos. É o único número que temos, e vem do vencedor. As perdas romanas na primeira batalha são estimadas pelo historiador Ian Hughes em cerca de 10.000 mortos; outros autores, como Potter e a Britannica, falam em quase todo o exército ou mais de 60.000. O tamanho do exército persa é desconhecido.",
        { note: "Os números de Edessa vêm quase todos de Sapor, que tinha motivo para engrandecer a vitória. Trate-os como ordem de grandeza, não como contagem." },
        { h: "O terreno" },
        "A planície da Alta Mesopotâmia, entre as cidades de Carras e Edessa, hoje no sudeste da Turquia. Fontes antigas e modernas não descrevem as posições dos exércitos nem os movimentos da batalha. Por isso este verbete não tem diagrama: qualquer desenho seria invenção.",
        { h: "O que sabemos da batalha" },
        "Valeriano marchou para o leste e os exércitos se encontraram entre Carras e Edessa. Os romanos foram completamente derrotados. Segundo Hughes, o resto do exército recuou para Edessa e acabou se rendendo para salvar a vida.",
        "A captura do imperador é contada de jeitos diferentes. As fontes romanas falam de um exército derrotado e cercado, de Valeriano negociando e depois sendo preso. Alguns autores antigos dizem que Sapor quebrou uma trégua e prendeu o imperador numa reunião. O artigo da Wikipédia lembra que os relatos romanos de derrota costumam culpar generais incompetentes e estrangeiros traiçoeiros, por isso é bom desconfiar. Sapor, por sua vez, diz que o pegou pessoalmente, e um camafeu persa mostra a cena.",
        { h: "Depois da batalha" },
        "Sapor dividiu o exército em pelo menos cinco colunas para saquear a Anatólia, passando pela Cilícia, Capadócia, Panfília e Licaônia. Tomou Tarso e Cesareia da Capadócia, e diz ter deportado 400.000 pessoas, número que também vem dele. Balista deteve uma coluna em Pompeiópolis e teria matado 3.000 persas. Quando os persas voltaram para o Eufrates, Odenato os fustigou e matou muita gente."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "O destino de Valeriano" },
        "O que aconteceu com ele depois é motivo de debate. O escritor cristão Lactâncio, muito hostil aos persas, escreveu que Sapor o usava de degrau para montar a cavalo e que recusou um resgate enorme. Aurélio Vítor fala numa jaula. Outra versão diz que ele foi esfolado, com a pele recheada de palha e exposta num templo. Essas cenas são tradição hostil e podem ter sido inventadas por historiadores cristãos da Antiguidade tardia.",
        "O historiador Touraj Daryaee defende o contrário: Valeriano e parte dos soldados foram levados para Bishapur e viveram em condições relativamente boas. Outros prisioneiros trabalharam em obras de engenharia, como a barragem de Band-e Kaisar, perto de Shushtar. O relevo de Naqsh-e Rustam mostra Valeriano preso pelo pulso. A data da sua morte é desconhecida: em 260 ou depois.",
        { h: "O império em pedaços" },
        "Ele foi o primeiro imperador romano capturado por um inimigo. Com ele no cativeiro, Galieno ficou sozinho no poder, e o império quase se desfez. Macriano usou o tesouro de Valeriano para proclamar imperadores os filhos, Macriano Menor e Quieto. No Danúbio, Ingênuo e Regaliano também se proclamaram imperadores. No Ocidente, Póstumo matou Salonino, o herdeiro de Galieno, e criou o que viria a ser o Império Gaulês. Galieno sobreviveu até 268, quando foi assassinado.",
        { h: "Por que importa" },
        "Edessa mostrou que Roma podia perder, e do pior jeito. A derrota marca o ponto mais baixo da crise do século III e ajuda a explicar as reformas que vieram depois, no fim daquele século. Em Naqsh-e Rustam, o imperador capturado ficou gravado na pedra para sempre.",
        { note: "A cena clássica de Sapor pisando em Valeriano para subir no cavalo é lenda, no sentido de que só aparece em autores cristãos hostis, e os historiadores modernos ficam com um pé atrás. O que está gravado em pedra, nos relevos persas, é um imperador preso pelo pulso." }
      ]}
    ]
  },

  arsuf: {
    war: "Terceira Cruzada (1189–1192)",
    hook: "Saladino queria destruir uma coluna em marcha, e o rei Ricardo a manteve em ordem sob dias de flechas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1187, Saladino destruiu o exército dos reinos cruzados em Hattin e tomou Jerusalém. A Europa respondeu com a Terceira Cruzada, a dos três reis: o imperador alemão, o rei da França, Filipe II, e o rei da Inglaterra, Ricardo I. O imperador morreu no caminho, em 1190, e o exército alemão se dispersou. Ricardo e Filipe chegaram a Acre, que os cruzados cercavam havia quase dois anos.",
        "Acre caiu em julho de 1191. Filipe voltou para a França pouco depois, e Ricardo ficou com o comando. Quando Saladino demorou a pagar o resgate dos prisioneiros da guarnição, Ricardo mandou executá-los. O próximo objetivo era Jafa, o porto de onde um exército podia ameaçar Jerusalém. Entre Acre e Jafa, havia mais de 100 quilômetros de costa e um inimigo que ninguém conseguia fazer lutar.",
        { h: "O caminho até Arsuf" },
        { timeline: [
          ["1187", "Hattin e a queda de Jerusalém."],
          ["12 jul 1191", "Acre se rende."],
          ["ago 1191", "O exército cruzado deixa Acre e segue para o sul, pela costa."],
          ["25 ago", "A retaguarda quase é isolada num desfiladeiro, mas fecha a formação a tempo."],
          ["30 ago – 7 set", "Saladino acompanha a coluna, esperando a chance."],
          ["6 set", "Os cruzados acampam perto do pântano na foz do Nahr al-Falaik."],
          ["7 set", "Batalha de Arsuf."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Ricardo I da Inglaterra, 33 anos" },
        "Rei desde 1189 e famoso por sua coragem, ganhou o apelido de Coração de Leão. Tinha mais cabeça do que fama sugere: lembrava-se de que o calor e a sede tinham arruinado os cruzados em Hattin. Marchou só de manhã, descansou muito e nunca se afastou da água. Sua aposta era simples: manter a coluna unida e deixar que Saladino se cansasse primeiro.",
        { h: "Saladino, mais de 50 anos" },
        "Sultão do Egito e da Síria, tinha reunido o mundo muçulmano contra os cruzados. Sabia que o assédio de arqueiros não bastava para parar a coluna e que Ricardo, com os navios ao lado, não podia ser privado de suprimentos. Queria uma batalha aberta, mas com seus homens escondidos no bosque e atacando o ponto fraco do inimigo. Seu irmão Saphadin (al-Adil) o ajudava na linha de frente.",
        { h: "Os outros nomes" },
        "Do lado cruzado, Roberto de Sablé comandava a vanguarda dos [[templários|templários]] e Garnier de Nablus, mestre dos [[hospitalários]], a retaguarda. Henrique de Champanhe explorava os morros, e Guido de Lusinhão e Hugo de Borgonha tinham seus próprios contingentes. Entre os aiúbidas, Taqi al-Din, sobrinho de Saladino, liderava a guarda pessoal. Quem registrou o dia do lado muçulmano foi Baha al-Din ibn Shaddad, que servia Saladino, e do lado cristão, as crônicas Itinerarium e Ambroise."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "As crônicas cristãs, como o Itinerarium, dão a Saladino uma vantagem de três para um, com números de 100.000 a 300.000 que ninguém leva a sério. Hoje se estima o exército de Saladino em cerca de 25.000, quase todos cavaleiros, entre [[arqueiros a cavalo|arqueiro a cavalo]] turcos, beduínos, arqueiros núbios e alguma cavalaria pesada. Do lado cruzado, as estimativas vão de 10.000 a 20.000 homens, com cerca de 1.200 cavaleiros pesados, segundo um dos atlas citados.",
        { note: "As fontes não batem nem entre si nem entre os historiadores modernos. Use estas faixas como ordem de grandeza." },
        { h: "A coluna e o terreno" },
        "O exército marchava em ordem estrita, com doze grupos de cerca de cem cavaleiros no centro, a infantaria (inclusive [[besteiros|besteiro]]) do lado de terra e a bagagem do lado do mar. A frota acompanhava a costa e protegia a direita. No fim do trajeto, os 10 últimos quilômetros até Arsuf corriam numa planície estreita, entre 1,5 e 3 quilômetros de largura, entre o mar e morros cobertos de mato. Era ali que Saladino queria agir: o bosque escondia seus homens até a hora do ataque.",
        { h: "A batalha em seis momentos" },
        { formation: true },
        "Primeiro, a ordem de marcha. Na frente iam os templários. No centro, angevinos e bretões, depois os poitevinos e, por fim, os ingleses e normandos, que guardavam o estandarte do rei numa carroça. Franceses, flamengos e os barões do Oriente vinham depois. Na retaguarda, os hospitalários, com seus [[turcopolos]]. Ao amanhecer, os cruzados viram batedores por todos os lados e entenderam que o exército de Saladino estava por perto.",
        "Segundo, os escaramuçadores. Beduínos, núbios e turcos atiraram flechas e dardos contra toda a coluna, sem parar. Os besteiros cruzados respondiam quando podiam, mas a ordem era não quebrar a formação. A marcha continuou.",
        "Terceiro, Saladino deslocou o peso do ataque para a retaguarda. Atacados pelo flanco e por trás, muitos soldados a pé dos hospitalários andavam de costas para encarar o inimigo. O próprio Saladino e Saphadin animavam os homens perto da luta.",
        "Quarto, a carga. No meio da tarde, a vanguarda chegava a Arsuf, e os besteiros hospitalários, ao recarregar e recuar, perderam o contato com o grupo. Garnier de Nablus pedia repetidamente para atacar, mas Ricardo mandou esperar o sinal: seis toques de trombeta, o aviso de carga geral. Segundo o relato tradicional, o marechal da ordem e um cavaleiro da casa de Ricardo, Balduíno le Carron, não aguentaram e saíram à carga, e os outros hospitalários vieram atrás. Cavaleiros franceses do grupo vizinho também entraram. Historiadores como Bennett contestam essa leitura: talvez Ricardo tenha dado liberdade aos subordinados para aproveitar a chance, e talvez ninguém ouvisse a trombeta no barulho dos címbalos e gongos aiúbidas.",
        "Quinto, Ricardo percebeu que a carga só daria certo se o exército inteiro a apoiasse, e deu o sinal geral. A infantaria abriu passagens para os cavaleiros, e o ataque se espalhou da retaguarda para a frente. A ala direita aiúbida, que estava em combate e apertada, foi atingida com força, e alguns cavaleiros estavam a pé, atirando. A fuga se estendeu ao centro e à esquerda. Baha al-Din escreveu que a derrota foi completa.",
        "Sexto, a perseguição controlada. Ricardo a interrompeu depois de uns 1,5 quilômetro, porque ir longe demais contra uma cavalaria móvel como aquela era perigoso. Mesmo assim, alguns aiúbidas se viraram e mataram cavaleiros que tinham avançado demais, entre eles Tiago de Avesnes. Taqi al-Din atacou o flanco esquerdo de Ricardo com 700 homens da guarda de Saladino, e Ricardo contra-atacou e os venceu. Depois de se reagrupar, Ricardo fez uma terceira carga, e os aiúbidas se dispersaram pelo bosque e pelos morros. Os cruzados voltaram a Arsuf, onde a infantaria já estava acampada.",
        { note: "A tradição diz que os hospitalários desobedeceram a uma ordem direta de Ricardo. O historiador Bennett acha possível que Ricardo tenha delegado a decisão, e que a ideia de um sinal de trombeta ouvido no meio da batalha seja irreal." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Vitória cruzada. As crônicas cristãs dizem que morreram 32 emires e 7.000 homens de Saladino, e Ambroise fala em milhares de corpos no campo. Baha al-Din só nomeia três chefes mortos. Do lado de Ricardo, as crônicas dão no máximo 700 mortos, com Tiago de Avesnes como o único líder importante. Os números são das crônicas, e os historiadores modernos os tratam com cuidado.",
        { h: "O que mudou" },
        "O exército de Saladino não foi destruído, mas fugiu, algo que o próprio mundo muçulmano considerou vergonhoso. Para os cruzados, foi um enorme reforço de moral. Alguns contemporâneos achavam que uma carga mais controlada teria destruído Saladino de vez. Saladino evitou outra batalha em campo aberto e voltou às escaramuças. Arrasou várias fortalezas do sul, inclusive Ascalon, Gaza, Blanche-Garde, Lida e Ramla, e só guarneceu Darum, que Ricardo tomou. Ricardo ocupou Jafa e reconstruiu suas muralhas.",
        "Mas Jerusalém não foi retomada. Em 1192, o Tratado de Jafa firmou uma trégua de três anos, com acesso de peregrinos cristãos a Jerusalém e a costa até Jafa nas mãos dos cruzados. Ricardo foi embora para defender suas terras contra Filipe II.",
        { h: "Curiosidades" },
        "O campo de batalha só foi localizado com precisão neste século. Rafael Lewis, da Universidade de Haifa, cruzou textos medievais, mapas, fotos aéreas e modelos do ambiente para achá-lo na planície de Sharon, ao nordeste de Apolônia-Arsuf. Nas prospecções de 2013 e 2014, com detectores de metal, apareceram partes de arreios, um prego de ferradura e duas pontas de flecha, uma para furar armadura e outra, chata, para ferir cavalos. O desenvolvimento moderno já tinha estragado boa parte do local."
      ]}
    ]
  },

  bouvines: {
    war: "Guerra anglo-francesa de 1213–1214",
    hook: "Num domingo de julho, um rei francês foi derrubado do cavalo, se levantou e ganhou uma batalha que mudou três reinos.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No começo do século XIII, o rei da Inglaterra também era senhor de metade da França: Normandia, Anjou, Aquitânia. Filipe II Augusto, rei da França, foi tomando esses territórios do rei João. Em 1204, tinha conquistado a Normandia e a maior parte do norte.",
        "João queria recuperar o que perdeu, e para isso juntou aliados contra Filipe: seu sobrinho, o imperador Otão IV, e nobres dos Países Baixos. Entre eles, o conde Ferrando de Flandres, que tinha rompido com Filipe depois que o rei lhe tomou as cidades de Aire e Saint-Omer. Também o conde Renaud de Dammartin, um nobre francês que ficou do lado de João. O plano era um ataque em duas frentes: João subiria do sul, e Otão e os aliados desceriam pelo norte, até Paris.",
        { h: "O caminho até Bouvines" },
        { timeline: [
          ["1204", "Filipe Augusto conquista a Normandia."],
          ["fev 1214", "João desembarca em La Rochelle e ataca pelo sul."],
          ["2 jul 1214", "Em La Roche-aux-Moines, o príncipe Luís, filho de Filipe, faz João levantar o cerco e fugir."],
          ["jul 1214", "Otão se concentra em Valenciennes, sem João. Filipe volta para o norte."],
          ["27 jul 1214, domingo", "Batalha de Bouvines."]
        ]},
        "João recuou para a Aquitânia em 3 de julho depois de dois choques com os franceses, e deixou os aliados do norte sozinhos. Filipe então correu para o norte e escolheu o terreno: a planície a leste de Bouvines, entre o rio Marque e os pântanos, boa para a cavalaria."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Filipe II Augusto, 48 anos" },
        "Foi o rei que fez da França uma monarquia forte e que transformou Paris numa capital de verdade. Era cuidadoso e frio e preferia cercos a batalhas. Em Bouvines, não teve escolha. Ficou no centro, no meio dos seus cavaleiros, e foi derrubado do cavalo por soldados inimigos, segundo as crônicas.",
        { h: "Otão IV, imperador do Sacro Império" },
        "Era filho de Henrique, o Leão, da casa dos guelfos, e sobrinho de João da Inglaterra, que o financiava. Tinha sido coroado imperador em 1209, mas o papa o excomungou e apoiava seu rival, Frederico II. Precisava de uma grande vitória.",
        { h: "Ferrando de Flandres e Renaud de Dammartin" },
        "Ferrando era o conde de Flandres. Renaud, o conde de Boulogne, era um nobre francês que foi amigo de Filipe e depois seu inimigo mortal. Tinha rompido com Filipe e dificilmente teria perdão, por isso lutou até o fim.",
        { h: "Os outros nomes" },
        "Do lado francês, Eudes III da Borgonha comandava a direita, e Roberto de Dreux, a esquerda. Gaucher de Châtillon liderou as cargas que seguraram os flamengos. Entre os aliados, o conde de Salisbury, Guilherme Longa-Espada, meio-irmão de João, comandava os ingleses. Galon de Montigny levava o estandarte real."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são discutidos. Estimativas modernas dão aos franceses 6.000 a 7.000 homens, com 1.200 a 1.360 cavaleiros e 300 [[sargentos|sargento medieval]] a cavalo, mais cerca de 3.160 soldados das cidades e, talvez, 2.000 mercenários. Os aliados teriam entre 8.800 e 9.000 homens, com 1.300 a 1.500 cavaleiros e uns 7.500 a pé. A velha tese de que os aliados eram três vezes mais numerosos é contestada por Philippe Contamine. Os números das crônicas, como os de Guilherme, o Bretão, são mais altos e pouco confiáveis.",
        { h: "O terreno e as posições" },
        "O campo ficava a leste de Bouvines, entre o rio Marque e os pântanos. A ponte de Bouvines era a única passagem, guardada por 150 sargentos, que eram a reserva dos franceses. Os franceses tinham Eudes da Borgonha na direita, com cavaleiros da Borgonha e da Champanha, e Roberto de Dreux e Guilherme de Ponthieu na esquerda, com bretões e milícias. No centro, Filipe, com seus cavaleiros mais próximos e cerca de 2.150 soldados das cidades da Île-de-France e da Normandia. Os aliados tinham os flamengos de Ferrando na esquerda, Otão no centro, com alemães e brabantinos, e Renaud de Dammartin e o conde de Salisbury na direita.",
        { note: "A descrição em 'centro' e 'alas' vem de Guilherme, o Bretão, e alguns historiadores acham que ela é um recurso retórico: a batalha teria sido bem mais confusa do que o desenho sugere." },
        { h: "A batalha em seis momentos" },
        { formation: true },
        "Primeiro, a abertura. Cerca de 150 cavaleiros leves, da abadia de Soissons, abriram a luta e foram rechaçados. Alguns flamengos os perseguiram e foram atingidos por 180 cavaleiros da Champanha. Ferrando então lançou todos os seus homens, mas as cargas de Gaucher de Châtillon os detiveram.",
        "Segundo, o centro. Os cavaleiros e a infantaria de Otão dispersaram as milícias francesas e chegaram quase até Filipe. Soldados a pé, com [[piques com gancho|pique com gancho]], o derrubaram do cavalo. A armadura desviou uma lança, e Galon de Montigny ergueu o estandarte real para pedir socorro. Alguns historiadores duvidam que Filipe tenha caído de verdade e veem aí talvez só um empurrão.",
        "Terceiro, a reação. Os cavaleiros franceses contra-atacaram. Estevão de Longchamp foi morto a punhaladas pela infantaria, e Pedro Mauvoisin quase prendeu Otão, cujo cavalo morreu. Otão fugiu com poucos homens, enquanto seus cavaleiros alemães lutaram até o fim. O estandarte imperial foi capturado.",
        "Quarto, a esquerda francesa. Os homens de Roberto de Dreux foram pressionados no começo. O conde de Salisbury foi derrubado e preso, e os ingleses fugiram, num relato que a Wikipédia marca como pouco documentado. Mateus de Montmorency teria tomado doze bandeiras imperiais, outra história de uma só fonte, de 1848.",
        "Quinto, o fim da ala flamenga. Depois de umas três horas de luta, Ferrando foi ferido, derrubado e preso, e o moral dos flamengos desabou.",
        "Sexto, o último reduto. Renaud de Dammartin resistiu num círculo de piqueiros brabantinos, até que uma carga de cerca de 50 cavaleiros e de 1.000 a 2.000 soldados a pé, sob Tomás de Saint-Valery, os varreu. Renaud foi preso. A escuridão e o medo de que os prisioneiros escapassem puseram fim à perseguição, e as trombetas chamaram os franceses de volta."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Os aliados perderam 169 cavaleiros mortos e 131 presos, mais centenas de soldados a pé: entre 400 e 700 brabantinos mortos, segundo uma estimativa. Foram presos Ferrando, Renaud, Salisbury, 25 barões e mais de cem cavaleiros. As perdas francesas são pequenas, mas os números divergem: uma fonte fala em apenas 2 cavaleiros mortos, outra em cerca de mil mortos de cada lado.",
        "Ferrando ficou preso por mais de uma década. Salisbury foi trocado por um prisioneiro francês importante. Renaud ficou acorrentado e se matou em 1227. Filipe voltou a Paris em triunfo, com os prisioneiros.",
        { h: "Consequências" },
        "Otão fugiu para Harzburg e foi deposto. Frederico II, que já era reconhecido no sul, ficou com o trono imperial. João fez uma trégua de cinco anos, em condições suaves, e perdeu qualquer esperança de recuperar o império angevino na França. Enfraquecido, teve de aceitar a Magna Carta em 15 de junho de 1215, um ano depois. A Wikipédia liga as duas coisas, mas a relação é discutida.",
        "Filipe fundou a abadia de Notre-Dame de la Victoire, e Bouvines virou símbolo da monarquia francesa. Para o historiador Jean Favier, foi uma das batalhas mais decisivas e simbólicas da história da França, e Ferdinand Lot a chamou de 'Austerlitz medieval'. Uma boa parte dessa leitura nacional é construção do século XIX.",
        { note: "O estandarte, a queda do rei e as doze bandeiras de Montmorency são os episódios mais contados e os menos seguros. A queda de Filipe vem das crônicas francesas e é questionada por alguns historiadores; a história das bandeiras de Montmorency aparece numa fonte só, de 1848." }
      ]}
    ]
  },

  legnica: {
    war: "Invasão mongol da Europa (1241–1242)",
    hook: "Uma coluna mongol de uns poucos milhares de cavaleiros acabou com o exército de um duque polonês em uma tarde, e seguiu em frente.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 1241, os mongóis já dominavam da China ao rio Volga. Depois que os cumanos fugiram para a Hungria e o rei Bela IV recusou entregá-los, Subotai planejou invadir a Europa. Batu e Subotai atacariam a Hungria. Uma terceira força, de Baidar, Orda e Kadan, invadiria a Polônia como diversão, para impedir que os exércitos do norte da Europa fossem ajudar os húngaros.",
        { h: "O caminho até Legnica" },
        { timeline: [
          ["início de 1241", "Orda ataca o norte da Polônia. Baidar e Kadan saqueiam Sandomierz, para atrair os exércitos do norte."],
          ["3 mar", "Derrota de um exército polonês em Tursko."],
          ["18 mar", "Outra derrota polonesa, em Chmielnik."],
          ["24 mar", "Os mongóis tomam e queimam Cracóvia."],
          ["fim de mar", "Falham em tomar Breslávia (Wrocław)."],
          ["9 abr", "Batalha de Legnica."],
          ["11 abr", "Batu e Subotai vencem os húngaros em Mohi."]
        ]},
        "Enquanto os mongóis consideravam cercar Breslávia, souberam que o rei Venceslau I da Boêmia estava a dois dias, com um exército mais que o dobro do de Henrique. Viraram então para interceptar Henrique antes que as duas forças se juntassem, e o alcançaram perto de Legnica."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Henrique II, o Piedoso, duque da Silésia" },
        "Governava a Silésia e, por herança do pai, também reivindicava o título de duque da Cracóvia, o primeiro entre os príncipes poloneses. Queria se unir a Venceslau, mas os mongóis o forçaram a lutar antes. Seu exército era uma mistura de silesianos, poloneses de outras regiões, moravianos, mineiros bávaros e um pequeno contingente de [[templários]], de uns 68 a 88 homens.",
        { h: "Baidar e Kadan" },
        "Eram príncipes da família de Gengis Khan, que comandavam a coluna. Há dúvida sobre o papel exato de Kadan, e as fontes divergem sobre quem comandava o quê. O que se sabe é que o plano mongol era manter ocupados os exércitos do norte, não conquistar a Polônia.",
        { h: "Os outros nomes" },
        "Do lado europeu, Boleslau, [[margrave]] da Morávia, Sulisław, que levou os recrutas da Grande Polônia e alguns de Cracóvia, e Mieszko II, o Gordo, duque de Opole, comandavam as outras divisões. Venceslau I da Boêmia, que vinha de socorro, não chegou a tempo."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Os números são discutidos e quase todos vêm de fontes tardias. Para os mongóis, as estimativas vão de 3.000 a 8.000 cavaleiros, com outras que chegam a 25.000. O franciscano C. de Bridia, que escreveu pouco depois, fala em cerca de 10.000, reduzidos a uns 8.000 depois das batalhas anteriores. Relatos de mais de 100.000 são vistos como exagero. Do lado aliado, Chambers calcula no máximo 25.000 homens, provavelmente menos, e muitos mal treinados. Cetwiński fala em 2.000, e Labuda, em 7.000 a 8.000. A Wikipédia polonesa dá 6.000 a 7.000.",
        { note: "A presença dos Cavaleiros Teutônicos é duvidosa: a informação vem do cronista Długosz, escrevendo muito depois, e historiadores como Labuda a rejeitam. A participação dos templários é considerada bastante segura." },
        { h: "O terreno" },
        "A tradição situa a batalha em Legnickie Pole (Wahlstatt), perto de Legnica. A Wikipédia polonesa diz que o local pode ser Dobre Pole, uns 7 quilômetros a sudeste da cidade, e que o nome tradicional não é confirmado pelas fontes. As fontes não descrevem o terreno em detalhe. O dia também é discutido: algumas fontes dizem 8 de abril.",
        { h: "A batalha em seis movimentos" },
        { formation: true },
        "Primeiro, Henrique dividiu o exército em quatro divisões: os mineiros bávaros e os moravianos de Boleslau; os recrutas da Grande Polônia e alguns de Cracóvia, de Sulisław; o exército de Opole, de Mieszko II; e a divisão do próprio Henrique, com silesianos, moravianos e templários. A ordem exata na linha não é dada pelas fontes, e o desenho é aproximado.",
        "Segundo, o primeiro choque. Os relatos divergem sobre quem atacou: para Chambers, foi a cavalaria silesiana; para Hildinger, os recrutas de Boleslau. Em todo caso, o ataque contra a vanguarda mongol, os [[mangudai]], foi repelido.",
        "Terceiro, a contra-carga. Sulisław e a cavalaria de Opole atacaram em seguida, e a vanguarda mongol fez uma [[retirada fingida]]. Os cavaleiros poloneses a perseguiram e se afastaram da sua infantaria.",
        "Quarto, a armadilha. Enquanto isso, a [[cavalaria leve]] mongol cercou os poloneses pelos flancos, com uma cortina de fumaça que escondia seus movimentos e confundia os europeus. Depois a cavalaria pesada atacou de frente, e os arqueiros atiraram sobre os poloneses.",
        "Quinto, a debandada. Na versão de Hildinger, um cavaleiro gritou 'Fujam! Fujam!' em polonês, e Mieszko, confuso, retirou o contingente de Opole. A Wikipédia polonesa também diz que a fuga repentina de Mieszko contribuiu para a derrota. Henrique mandou então a sua reserva, tarde demais, segundo essa versão.",
        "Sexto, o fim. Henrique e Boleslau da Morávia morreram. Henrique foi derrubado e decapitado quando tentava fugir com três guarda-costas. A cabeça teria sido levada numa lança diante dos muros de Legnica, detalhe que o artigo inglês marca como sem fonte segura.",
        { note: "Uma história muito repetida diz que os mongóis cortaram a orelha direita de cada morto e encheram nove sacos com elas, para contar os mortos. É uma lenda: não há prova, e historiadores a tratam como tão duvidosa quanto os números europeus sobre o tamanho do exército mongol." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "O exército aliado foi quase todo destruído, e as estimativas de mortos vão de 2.000 a 40.000, uma faixa tão larga que mostra como as fontes são fracas. Labuda fala em uns 2.000 mortos poloneses. As perdas mongóis são desconhecidas. O mestre dos templários, Ponce d'Aubon, contou a Luís IX da França que a ordem tinha perdido cerca de 500 pessoas em Legnica e nos ataques seguintes, número que provavelmente inclui camponeses.",
        "Segundo a tradição, o corpo de Henrique foi reconhecido pelos seis dedos do pé esquerdo.",
        { h: "O que aconteceu depois" },
        "Os mongóis não atacaram o exército da Boêmia. Venceslau, a um dia de marcha, recuou para juntar reforços da Turíngia e da Saxônia, e a vanguarda mongol foi derrotada pela cavalaria boêmia em Kłodzko. Baidar e Kadan tinham a missão de ser uma diversão, e por isso evitaram uma batalha maior, saquearam cidades menores em grupos e depois foram para o sul, para se juntar a Batu e Subotai, na Hungria. Dois dias depois de Legnica, em 11 de abril, os húngaros foram destruídos em Mohi.",
        "Os mongóis deixaram a Europa em 1242, e as razões continuam em debate. A Polônia e a Hungria ficaram fora da esfera da Horda Dourada, embora tenham sofrido outros ataques depois, em 1259–1260 e em 1287.",
        { h: "Por que importa" },
        "Legnica é um dos exemplos mais claros de como a tática mongol, com retirada fingida, mobilidade e fumaça, derrotava os cavaleiros europeus em seu próprio terreno. Não foi uma conquista, e sim uma campanha de diversão que cumpriu o seu objetivo."
      ]}
    ]
  },

  courtrai: {
    war: "Guerra Franco-Flamenga (1297–1305)",
    hook: "Tecelões e açougueiros de Flandres derrubaram a flor da cavalaria francesa num campo de fossos e lama.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "A Flandres era um condado rico, parte da França no papel, mas bastante autônomo, cujas cidades prosperavam com o comércio de tecidos. Filipe IV, o Belo, queria controlá-la diretamente. Depois que o conde Guido de Dampierre se aliou à Inglaterra, a França invadiu a Flandres em 1297 e passou a governar as cidades, em 1300. Nas cidades, as famílias ricas, os 'leliaards', apoiavam os franceses, e os artesãos, os 'liebaards', apoiavam o conde.",
        { h: "O caminho até Courtrai" },
        { timeline: [
          ["1297", "A França invade a Flandres."],
          ["1300", "Os franceses ocupam o condado, e o conde Guido fica preso."],
          ["18 mai 1302", "Em Bruges, os rebeldes matam os franceses da cidade: as 'Matinas de Bruges'."],
          ["26 jun", "Os flamengos cercam o castelo de Courtrai, que tinha guarnição francesa."],
          ["jul", "Roberto de Artois chega à frente de um exército de socorro."],
          ["11 jul 1302", "Batalha de Courtrai."]
        ]},
        "Quase toda a nobreza de Flandres ficou com a França. A revolta foi liderada por dois filhos do conde preso, João e Guido de Namur, e por homens das cidades. Filipe mandou o conde Roberto II de Artois com uma tropa de uns 8.000 homens, de olho em acabar com a revolta de uma vez."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Roberto II, conde de Artois" },
        "Sobrinho de Luís IX e cavaleiro de renome, era um dos grandes senhores da França. Confiava na cavalaria pesada e, segundo a Wikipédia francesa, recusou uma sugestão de atacar pelo flanco. Era orgulhoso, e o orgulho lhe custou a vida.",
        { h: "Guido de Namur e Guilherme de Jülich" },
        "Guido, filho do conde preso, chefiava a revolta. Guilherme de Jülich, nobre alemão, comandou o exército flamengo. Havia uma dúvida entre as fontes: as tropas de Namur teriam chegado tarde ou chegado e não lutado.",
        { h: "Pieter de Coninck e Jan Breydel" },
        "Pieter de Coninck, um tecelão, liderava o grupo de Bruges. Jan Breydel, açougueiro, ficou famoso por um romance do século XIX, e hoje se considera que seu papel foi exagerado. Também são citados Jan van Renesse, com 500 homens de Ypres, e Jan Borluut, com cerca de 700 voluntários de Gante."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Estimativas modernas dão aos flamengos de 8.000 a 10.000 homens, quase todos a pé, de milícias urbanas, com uns 400 nobres como oficiais e uns 900 [[besteiros|besteiro]]. Os franceses teriam cerca de 2.500 cavaleiros, 1.000 besteiros e mais 5.000 a 6.000 soldados a pé, entre 8.000 e 10.000 homens. As crônicas medievais chegam a 50.000 franceses, o que se considera impossível. Os Anais de Gante falam em apenas dez cavaleiros flamengos.",
        { note: "As fontes divergem em quase tudo: o tamanho dos exércitos, o papel da infantaria francesa e até o que fez a retaguarda de Artois. O que segue é o núcleo comum aos relatos modernos." },
        { h: "O terreno" },
        "Os flamengos ocuparam uma área aberta ao lado do riacho Groeninge, num planalto entre o rio Lys e um pântano. Tinham cavado fossos, alguns alimentados pelo Lys, outros escondidos sob terra e galhos. O chão irregular tirava o impulso da cavalaria. A posição era funda, quase quadrada, com uma curva do rio protegendo a retaguarda. Quando os franceses tentaram fazer pontes de tábuas sobre o pântano, foram expulsos.",
        { h: "A batalha em seis momentos" },
        { formation: true },
        "Primeiro, os besteiros. Cerca de 1.000 besteiros franceses atacaram os uns 900 flamengos e os empurraram para trás. Os virotes atingiram a frente flamenga, mas fizeram pouco estrago.",
        "Segundo, a decisão de Artois. Numa das versões, Artois, preocupado com os riachos e com sua infantaria em menor número, chamou os soldados a pé de volta e mandou cerca de 2.300 cavaleiros pesados, em duas ondas, atravessar os riachos. Alguns cavalos caíram, mas a travessia deu certo. Na versão da Wikipédia francesa, a infantaria francesa avançou até o fosso, e a luta a favor dela fez os flamengos recuarem. Os relatos concordam que os cavaleiros, confiantes, partiram para a carga.",
        "Terceiro, a carga. Os franceses atacaram a trote, com lanças. Os piqueiros flamengos seguraram o terreno e usaram os [[goedendags|goedendag]] contra as falhas da armadura. Parte da cavalaria hesitou, e a maioria dos que passaram foi derrotada pelas reservas flamengas. Os cavaleiros caíam nos fossos escondidos e atolavam no pântano.",
        "Quarto, a retaguarda. Artois mandou avançar a retaguarda de uns 700 homens e foi com ela. Parte voltou para proteger a bagagem, e o grupo de Artois ficou sem apoio, foi cercado e ele morreu. A Wikipédia francesa conta uma versão diferente, em que a retaguarda do conde de Saint-Pol recuou sem lutar.",
        "Quinto, o massacre. Os cavaleiros que sobraram foram empurrados para o pântano, onde atolaram e foram atacados. Uma saída da guarnição do castelo, para reforçá-los, caiu numa emboscada.",
        "Sexto, a fuga. A infantaria francesa que restava quebrou e fugiu, e os flamengos a perseguiram por mais de 10 quilômetros. Poucos cavaleiros foram presos para resgate. O castelo de Courtrai se rendeu dois dias depois, em 13 de julho."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Morreram de 1.000 a 1.500 cavaleiros e homens de armas franceses. Os Anais de Gante falam em mais de mil, entre eles 75 nobres. Entre os mortos, Roberto de Artois, o condestável Raoul de Nesle, o marechal Guy de Clermont, Jacques de Châtillon e Pierre Flote. Uma fonte moderna, Fegley, fala em mais de 60 condes e barões. As perdas flamengas variam de 100 a 300 mortos, segundo a fonte.",
        { h: "As esporas" },
        "O nome da batalha vem das esporas douradas dos cavaleiros mortos, tiradas como troféu e penduradas na igreja de Notre-Dame, em Courtrai. O número tradicional é de 500 pares, e Fegley estima de 500 a 700. As esporas teriam sido recuperadas pelos franceses depois da batalha de Roosebeke, em 1382, quando Carlos VI saqueou Courtrai de vingança, mas essa parte é contada sem fonte segura.",
        { h: "Consequências" },
        "João de Namur entrou em Gante em 14 de julho. Os governos das famílias ricas, que apoiavam os franceses, caíram em Gante e Ypres, e as corporações de ofício ganharam reconhecimento oficial. A vitória, porém, durou pouco. Em 1304, os franceses destruíram a frota flamenga em Zierikzee e venceram em Mons-en-Pévèle. A Paz de Athis-sur-Orge, em junho de 1305, obrigou a Flandres a pagar um tributo pesado à França.",
        { h: "Por que importa" },
        "Foi uma das primeiras vezes em que uma infantaria de cidadãos derrotou a elite da cavalaria feudal em campo aberto, e fez o mundo ver que o cavaleiro de armadura não era invencível. No século XIX e no XX, a batalha virou o símbolo do movimento flamengo, graças ao romance O Leão de Flandres, de Hendrik Conscience, de 1838. Desde 1973, 11 de julho é o feriado oficial da Comunidade Flamenga.",
        { note: "Os historiadores debatem a importância real da batalha e o peso dos mitos românticos que a cercam. O papel de Jan Breydel, por exemplo, é bem menor nas fontes do que na tradição. Algumas fontes dizem que os flamengos se recusaram a aceitar rendições, o que seria uma ruptura com os costumes da época; outras notam que quase não houve prisioneiros de resgate." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  arsuf: {
    terrain: [
      { t: "sea", x: 0, y: 60, w: 100, h: 10, l: "Mar (a frota cruzada acompanha a costa)" },
      { t: "note", x: 3, y: 6, l: "Bosque de Arsuf (escondia o exército de Saladino)" },
      { t: "note", x: 88, y: 56, l: "Sul: Arsuf →" }
    ],
    units: [
      { id: "tem", s: "a", k: "cav", w: 9, h: 5, l: "Templários (vanguarda)" },
      { id: "cen", s: "a", k: "cav", w: 20, h: 5, l: "Angevinos, poitevinos, ingleses e normandos" },
      { id: "fr", s: "a", k: "cav", w: 14, h: 5, l: "Franceses, flamengos, barões do Oriente" },
      { id: "hos", s: "a", k: "cav", w: 11, h: 5, l: "Hospitalários (retaguarda)" },
      { id: "inf", s: "a", k: "inf", w: 56, h: 3, l: "Infantaria e besteiros (lado de terra)" },
      { id: "bag", s: "a", k: "camp", w: 30, h: 3, l: "Bagagem (lado do mar)" },
      { id: "ric", s: "a", k: "cav", w: 8, h: 4, l: "Ricardo e Hugo de Borgonha" },
      { id: "fle", s: "a", k: "ship", w: 14, h: 4, l: "Frota" },
      { id: "esc", s: "b", k: "cav", w: 18, h: 4, l: "Escaramuçadores: beduínos, núbios, turcos" },
      { id: "dir", s: "b", k: "cav", w: 16, h: 5, l: "Ala direita (contra a retaguarda)" },
      { id: "cs", s: "b", k: "cav", w: 14, h: 5, l: "Saladino e o centro" },
      { id: "esq", s: "b", k: "cav", w: 14, h: 5, l: "Ala esquerda" },
      { id: "taq", s: "b", k: "cav", w: 10, h: 4, l: "Taqi al-Din e 700 da guarda" }
    ],
    steps: [
      { t: "Ao amanhecer, a coluna cruzada marcha para o sul, junto ao mar: templários na frente, depois o centro, os franceses e, na retaguarda, os hospitalários. Saladino espera escondido no bosque.",
        p: { tem: [88, 47], cen: [68, 47], fr: [50, 47], hos: [34, 47], inf: [58, 40], bag: [56, 54], ric: [44, 35], fle: [50, 65],
             esc: [58, 20], dir: [28, 14], cs: [52, 10], esq: [76, 14], taq: [40, 8] } },
      { t: "Escaramuçadores beduínos, núbios e turcos atiram flechas e dardos contra toda a coluna. Os besteiros respondem, mas a ordem é manter a formação e seguir marchando.",
        p: { esc: [58, 33], ric: [42, 36] } },
      { t: "Saladino desloca o peso do ataque para a retaguarda. Atacados de lado e por trás, os infantes hospitalários andam de costas para encarar o inimigo.",
        p: { dir: [32, 33], cs: [42, 26], esc: [46, 31], hos: [33, 46] } },
      { t: "No meio da tarde, a vanguarda chega a Arsuf. Garnier de Nablus pede para atacar, mas Ricardo manda esperar o sinal das seis trombetas.",
        p: { tem: [92, 47], cen: [73, 47], fr: [55, 47], dir: [32, 35] } },
      { t: "O marechal dos hospitalários e Balduíno le Carron saem à carga, e os outros hospitalários vêm atrás. Cavaleiros franceses do grupo vizinho entram também. (Segundo a tradição, contra a ordem de Ricardo; Bennett contesta.)",
        p: { hos: [30, 38, -10], fr: [48, 40, -10], dir: [28, 30] } },
      { t: "Ricardo percebe que a carga precisa do exército todo e dá o sinal geral. A infantaria abre passagem, e o ataque se espalha da retaguarda para a frente. A ala direita aiúbida, apertada, cede.",
        p: { hos: [26, 30, -10], fr: [40, 32, -10], cen: [60, 38, -10], ric: [34, 28], dir: [22, 20], esc: [44, 22] }, x: ["dir"] },
      { t: "A fuga chega ao centro e à esquerda. Ricardo interrompe a perseguição depois de uns 1,5 quilômetro.",
        p: { cen: [56, 28], tem: [80, 32], cs: [40, 12], esq: [70, 10], esc: [48, 14] }, x: ["dir", "esc", "cs"] },
      { t: "Alguns aiúbidas se viram e matam cavaleiros que foram longe demais, entre eles Tiago de Avesnes. Taqi al-Din ataca o flanco esquerdo de Ricardo com 700 homens da guarda.",
        p: { taq: [58, 22], ric: [52, 28] } },
      { t: "Ricardo contra-ataca e os vence, e então faz uma terceira carga que dispersa os aiúbidas pelo bosque. Os cruzados voltam a Arsuf, onde a infantaria já acampou.",
        p: { ric: [46, 16], taq: [56, 8], esq: [74, 6] }, x: ["taq", "esq"] }
    ]
  },

  bouvines: {
    terrain: [
      { t: "note", x: 3, y: 58, l: "Rio Marque e ponte de Bouvines (150 sargentos)" },
      { t: "note", x: 70, y: 4, l: "Pântanos" }
    ],
    units: [
      { id: "fR", s: "a", k: "cav", w: 18, h: 5, l: "Eudes de Borgonha (Borgonha e Champanha)" },
      { id: "fM", s: "a", k: "inf", w: 20, h: 4, l: "Milícias das cidades" },
      { id: "fK", s: "a", k: "cav", w: 12, h: 4, l: "Filipe e seus cavaleiros" },
      { id: "fL", s: "a", k: "cav", w: 18, h: 5, l: "Roberto de Dreux e Guilherme de Ponthieu" },
      { id: "fB", s: "a", k: "inf", w: 9, h: 3, l: "150 sargentos na ponte" },
      { id: "aF", s: "b", k: "cav", w: 18, h: 5, l: "Ferrando e os flamengos" },
      { id: "aO", s: "b", k: "cav", w: 18, h: 5, l: "Otão e os alemães" },
      { id: "aI", s: "b", k: "inf", w: 16, h: 4, l: "Infantaria alemã e brabantina" },
      { id: "aR", s: "b", k: "inf", w: 14, h: 4, l: "Renaud de Dammartin e os piqueiros" },
      { id: "aS", s: "b", k: "cav", w: 10, h: 4, l: "Salisbury e os ingleses" }
    ],
    steps: [
      { t: "Os dois exércitos se encaram na planície a leste de Bouvines. Os franceses têm Eudes na direita, Filipe no centro e Dreux na esquerda, com a ponte às costas. Os flamengos de Ferrando ficam à frente de Eudes.",
        p: { fR: [76, 44], fM: [50, 47], fK: [50, 52], fL: [24, 44], fB: [14, 63],
             aF: [76, 22], aO: [50, 17], aI: [50, 24], aR: [28, 18], aS: [18, 24] } },
      { t: "Cerca de 150 cavaleiros leves da abadia de Soissons abrem a luta e são rechaçados. Os flamengos os perseguem, e 180 cavaleiros da Champanha os atingem.",
        p: { aF: [76, 29], fR: [76, 38] } },
      { t: "Ferrando lança todos os seus homens. As cargas de Gaucher de Châtillon os detêm, e a luta dura umas três horas.",
        p: { aF: [76, 33], fR: [76, 38] } },
      { t: "No centro, os cavaleiros e a infantaria de Otão dispersam as milícias francesas e chegam até Filipe. Soldados com piques de gancho o derrubam do cavalo.",
        p: { aO: [50, 33], aI: [50, 38], fM: [50, 54], fK: [50, 46] }, x: ["fM"] },
      { t: "Os cavaleiros franceses contra-atacam. Otão perde o cavalo e foge com poucos homens, enquanto seus cavaleiros alemães lutam até o fim. O estandarte imperial é capturado.",
        p: { fK: [50, 38], aO: [50, 22], aI: [50, 28] }, x: ["aO"] },
      { t: "Na esquerda francesa, os homens de Dreux são pressionados no começo. Salisbury é derrubado e preso, e os ingleses fogem (relato pouco documentado).",
        p: { aS: [22, 34], fL: [24, 42] }, x: ["aS"] },
      { t: "Ferrando é ferido, derrubado e preso. Os flamengos perdem o ânimo e debandam.",
        p: { aF: [80, 30], fR: [78, 33] }, x: ["aF"] },
      { t: "Renaud de Dammartin resiste num círculo de piqueiros. Uma carga de uns 50 cavaleiros e 1.000 a 2.000 soldados a pé, sob Tomás de Saint-Valery, o vence e o prende.",
        p: { aR: [28, 26], fL: [26, 32], fB: [22, 40] }, x: ["aR"] },
      { t: "Ao anoitecer, as trombetas chamam os franceses de volta. A vitória é francesa.",
        p: { fK: [50, 40], fR: [70, 36], fL: [30, 34] } }
    ]
  },

  legnica: {
    terrain: [
      { t: "note", x: 3, y: 4, l: "Posições aproximadas: as fontes não dão a ordem exata na linha" }
    ],
    units: [
      { id: "pB", s: "a", k: "inf", w: 16, h: 5, l: "Boleslau (moravianos, mineiros bávaros)" },
      { id: "pS", s: "a", k: "cav", w: 16, h: 5, l: "Sulisław (Grande Polônia, Cracóvia)" },
      { id: "pO", s: "a", k: "cav", w: 16, h: 5, l: "Mieszko II (Opole)" },
      { id: "pH", s: "a", k: "cav", w: 18, h: 5, l: "Henrique (silesianos, moravianos, templários)" },
      { id: "mV", s: "b", k: "cav", w: 12, h: 4, l: "Vanguarda (mangudai)" },
      { id: "mL", s: "b", k: "cav", w: 14, h: 4, l: "Cavalaria leve (flanco esquerdo)" },
      { id: "mR", s: "b", k: "cav", w: 14, h: 4, l: "Cavalaria leve (flanco direito)" },
      { id: "mH", s: "b", k: "cav", w: 20, h: 5, l: "Cavalaria pesada e arqueiros" }
    ],
    steps: [
      { t: "Henrique divide seu exército em quatro divisões, em linha, com a de Boleslau, a de Sulisław e a de Mieszko na frente e a sua própria atrás. Os mongóis esperam em frente, em menor número.",
        p: { pB: [26, 50], pS: [46, 50], pO: [66, 50], pH: [46, 60], mV: [46, 22], mL: [24, 14], mR: [68, 14], mH: [46, 10] } },
      { t: "Primeiro choque: um ataque polonês contra a vanguarda mongol (cavalaria silesiana, segundo Chambers; os recrutas de Boleslau, segundo Hildinger) é repelido.",
        p: { pB: [26, 40], mV: [28, 30] } },
      { t: "Sulisław e a cavalaria de Opole contra-atacam. A vanguarda mongol faz uma retirada fingida e puxa os cavaleiros poloneses para longe da infantaria.",
        p: { pS: [44, 36], pO: [64, 38], mV: [46, 20], pB: [26, 46] } },
      { t: "Cobertos por uma cortina de fumaça, os mongóis de cavalaria leve fecham pelos dois flancos.",
        p: { mL: [22, 30], mR: [74, 28], pS: [44, 32], pO: [64, 33] } },
      { t: "A cavalaria pesada mongol ataca de frente, e os arqueiros atiram sobre os poloneses, já cercados.",
        p: { mH: [46, 24], mV: [46, 26] } },
      { t: "Na versão de Hildinger, alguém grita 'Fujam!' em polonês, e Mieszko tira o contingente de Opole da luta. A Wikipédia polonesa também aponta a fuga dele como causa da derrota.",
        p: { pO: [78, 58] }, x: ["pO"] },
      { t: "Henrique manda a sua reserva, tarde demais. Os poloneses são envolvidos por todos os lados.",
        p: { pH: [46, 44], mL: [28, 40], mR: [66, 40] } },
      { t: "O exército aliado é destruído. Henrique e Boleslau da Morávia morrem. Henrique é derrubado e decapitado quando tenta fugir.",
        p: { pH: [46, 40], mH: [46, 32] }, x: ["pB", "pS", "pH"] }
    ]
  },

  courtrai: {
    terrain: [
      { t: "note", x: 4, y: 64, l: "Rio Lys, atrás dos flamengos" },
      { t: "note", x: 64, y: 36, l: "Riacho Groeninge e fossos escondidos" }
    ],
    units: [
      { id: "fC", s: "a", k: "inf", w: 12, h: 2.5, l: "Besteiros flamengos" },
      { id: "fM", s: "a", k: "inf", w: 34, h: 5, l: "Milícias de Bruges, Ypres e do Franco" },
      { id: "fR", s: "a", k: "inf", w: 16, h: 4, l: "Reserva (Jan van Renesse)" },
      { id: "bC", s: "b", k: "inf", w: 14, h: 2.5, l: "Besteiros franceses" },
      { id: "bI", s: "b", k: "inf", w: 22, h: 4, l: "Infantaria francesa" },
      { id: "b1", s: "b", k: "cav", w: 20, h: 5, l: "Primeira onda de cavaleiros" },
      { id: "b2", s: "b", k: "cav", w: 20, h: 5, l: "Segunda onda de cavaleiros" },
      { id: "bA", s: "b", k: "cav", w: 12, h: 4, l: "Retaguarda (Artois)" }
    ],
    steps: [
      { t: "Os flamengos esperam a pé, numa posição funda, com o rio Lys atrás e o riacho Groeninge e fossos à frente. Os franceses chegam em frente, com a cavalaria atrás da infantaria.",
        p: { fC: [46, 44], fM: [46, 52], fR: [46, 60], bC: [46, 20], bI: [38, 14], b1: [32, 8], b2: [58, 8], bA: [46, 3] } },
      { t: "Cerca de 1.000 besteiros franceses atacam os uns 900 flamengos e os empurram para trás.",
        p: { bC: [46, 32], fC: [46, 46] } },
      { t: "A infantaria francesa avança até os fossos. Depois, segundo a versão mais citada, Artois a chama de volta para dar passagem aos cavaleiros.",
        p: { bI: [36, 30] } },
      { t: "Cerca de 2.300 cavaleiros, em duas ondas, atravessam os riachos. Alguns cavalos caem, mas a travessia dá certo.",
        p: { b1: [34, 32], b2: [58, 26], bI: [34, 22], bC: [46, 22] } },
      { t: "Os franceses atacam a trote, de lança. Os piqueiros flamengos aguentam e atingem com os goedendags as falhas das armaduras. Cavalos atolam em fossos escondidos.",
        p: { b1: [38, 40], b2: [56, 34], fM: [46, 50] } },
      { t: "As reservas flamengas derrotam os cavaleiros que furaram a linha.",
        p: { fR: [46, 54], b1: [38, 42] }, x: ["b1"] },
      { t: "Artois avança com a retaguarda de uns 700 homens. Parte volta para guardar a bagagem, e ele fica sem apoio. Cercado, morre.",
        p: { bA: [46, 30], b2: [56, 38] }, x: ["b2"] },
      { t: "Os cavaleiros que sobram são empurrados para o pântano, onde atolam. Uma saída do castelo, para reforçá-los, cai numa emboscada.",
        p: { bA: [48, 40] }, x: ["bA"] },
      { t: "A infantaria francesa quebra e foge. Os flamengos a perseguem por mais de 10 quilômetros.",
        p: { bI: [34, 12], bC: [46, 10], fM: [46, 40] }, x: ["bI", "bC"] }
    ]
  }
});
