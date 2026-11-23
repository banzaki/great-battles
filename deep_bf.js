// In-depth battles, batch bf: lachish, aegospotami, siracusa, mantineia, ipsos.
// Checked against the English, Portuguese and Italian Wikipedia articles on the Siege of Lachish, the Battle of
// Aegospotami, the Sicilian Expedition, the Battle of Mantinea (362 BC) and the Battle of Ipsus, against Xenophon's
// Hellenica (book 2 and book 7.5, Perseus and Livius translations), Thucydides book 7 (Crawley translation),
// Plutarch's Life of Demetrius, Diodorus Siculus, and the Lachish excavation reports as summarised by Ussishkin and
// the 2021 Garfinkel and others study of the siege ramp. Where sources disagree the text says so.
// Formation diagrams are schematic: ancient authors give the moves, not exact positions.

Object.assign(GLOSSARY, {
  "diádocos": "Os 'sucessores' de Alexandre, o Grande: generais macedônios que, depois da morte dele em 323 a.C., brigaram durante décadas pelos pedaços do império.",
  "rampa de cerco": "Plano inclinado de terra e pedras construído até o alto da muralha, para que aríetes e soldados subam por ele. Dá muito trabalho e o inimigo tenta atrapalhar.",
  "contrarrampa": "Rampa que os defensores constroem por dentro da muralha, no mesmo lugar, para subir a altura da defesa na mesma velocidade que a rampa do atacante sobe.",
  "talento": "Medida de peso usada como moeda no mundo antigo. Era uma quantidade enorme de prata: um talento pagava cerca de um mês do salário de toda a tripulação de uma trirreme.",
  "navarco": "Almirante da frota de Esparta. A lei espartana só permitia um mandato, e por isso Lisandro comandou como 'vice-almirante' em 405 a.C.",
  "hermas": "Pilares de pedra com a cabeça do deus Hermes, postos nas esquinas e portas de Atenas. Em 415 a.C., quase todos amanheceram com o rosto quebrado, e a cidade viu nisso mau agouro e conspiração.",
  "epípolas": "O platô alto e inclinado que domina Siracusa por trás. Quem o controlava dominava a cidade, e por isso o cerco girou em torno dele.",
  "proa reforçada": "Proa curta e grossa, com vigas por fora, que os siracusanos usaram para atingir de frente as proas mais finas das trirremes atenienses sem quebrar a própria.",
  "latomias": "As pedreiras de pedra de Siracusa: fossos fundos e a céu aberto, usados como prisão depois da batalha. Faziam um calor de dia e um frio de noite que matavam os fracos.",
  "hegemonia": "Liderança de uma cidade sobre as outras, sem ser um império formal. Atenas, Esparta e Tebas tiveram a sua vez de ser a potência dominante da Grécia.",
  "coluna profunda": "Formação em que os soldados ficam em muitas fileiras em vez de poucas. Perde o comprimento, mas ganha força de choque num ponto só.",
  "hamippoi": "Infantaria leve que lutava misturada com a cavalaria, correndo ao lado dos cavaleiros e dando apoio a eles. Os tebanos e tessálios usaram esse recurso em Mantineia.",
  "deportação": "Retirar à força uma população do seu lugar e levá-la para longe. Os assírios faziam isso de propósito, para quebrar a resistência e tirar a identidade dos povos vencidos."
});

Object.assign(DEEP, {
  lachish: {
    war: "Campanha de Senaqueribe contra Judá (701 a.C.)",
    hook: "Os assírios fizeram uma rampa de milhões de pedras, e os defensores responderam com outra do lado de dentro. O cerco ficou gravado em pedra.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "No fim do século VIII a.C., a Assíria era a maior potência do Oriente Médio. Seu exército, de ferro e de disciplina, tinha dobrado quase todos os reinos da região, que pagavam tributo todo ano. Quando morreu o rei Sargão II, em 705 a.C., vários reinos acharam que era a hora de parar de pagar.",
        "Entre os rebeldes estava Ezequias, rei de Judá, um pequeno reino montanhoso em volta de Jerusalém. Ele fortificou cidades, guardou água e procurou aliados, em especial o Egito. O novo rei assírio, Senaqueribe, passou os primeiros anos resolvendo problemas na Babilônia. Em 701 a.C., marchou para o oeste.",
        { h: "O caminho até Laquis" },
        { timeline: [
          ["705 a.C.", "Morre Sargão II. Reinos do Oriente Médio, entre eles Judá, deixam de pagar tributo."],
          ["701 a.C.", "Senaqueribe marcha para o oeste, pela costa. Submete as cidades fenícias e derrota os rebeldes de Ecron, na Filisteia."],
          ["701 a.C.", "Entra em Judá e ataca suas cidades fortificadas. Laquis, a segunda mais importante do reino, é a maior delas no caminho de Jerusalém."],
          ["701 a.C.", "Enquanto cerca Laquis, Senaqueribe manda um emissário a Jerusalém para exigir a rendição de Ezequias."]
        ]},
        "As fontes não permitem dizer em que mês o cerco começou nem quanto durou. Sabe-se apenas que ele aconteceu antes de Jerusalém ser ameaçada."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Senaqueribe, rei da Assíria" },
        "Filho de Sargão II, chegou ao trono em 705 a.C. e mudou a capital para Nínive, onde construiu um palácio enorme. Depois do cerco, mandou gravar a conquista de Laquis nas paredes de uma sala desse palácio, como se fosse a vitória mais importante do seu reinado. Seus anais, por outro lado, falam de 46 cidades de Judá conquistadas e de Ezequias 'preso como um pássaro numa gaiola' em Jerusalém.",
        { h: "Ezequias, rei de Judá" },
        "Reinou num reino pequeno e tentou jogar o jogo dos grandes. A Bíblia lhe dá o papel de rei piedoso e fortificador de Jerusalém. Em Laquis, não era ele quem comandava: o nome do oficial que dirigiu a defesa não chegou até nós.",
        { h: "Os dois exércitos" },
        "Os assírios tinham uma máquina de guerra especializada em cercos: arqueiros, lanceiros com escudos de vime, fundibulários, aríetes e engenheiros. Do lado de Judá havia a guarnição da cidade, reforçada por milícias locais e mercenários. Não se conhecem números de nenhum dos dois."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "O terreno" },
        "Laquis ficava sobre uma colina isolada, o tel, num ponto estratégico da Sefelá, o pé de montanha entre a costa e as montanhas de Judá. Tinha duas muralhas, uma de tijolos de barro no alto e outra mais abaixo, e uma grande entrada fortificada. As escavações, dirigidas por David Ussishkin entre 1973 e 1994, mostram que o ataque principal caiu sobre o canto sudoeste.",
        { h: "O cerco em oito movimentos" },
        { formation: true },
        "Primeiro, os assírios cercaram a colina. Os arqueiros e os fundibulários se aproximaram em fileiras, protegidos por lanceiros com escudos grandes de vime. Sua função era limpar os defensores das muralhas com chuva de flechas e pedras, para que os engenheiros pudessem trabalhar.",
        "Segundo, os engenheiros construíram a [[rampa de cerco]]. É a parte mais impressionante do cerco: um estudo publicado em 2021 por Garfinkel e outros estimou que a rampa levou cerca de 3 milhões de pedras e que centenas de trabalhadores, dia e noite, levariam cerca de três semanas para erguê-la. Ainda hoje ela existe, e é a única rampa assíria conhecida.",
        "Terceiro, os defensores reagiram. Ussishkin encontrou, dentro da muralha, no ponto da rampa, os restos de uma [[contrarrampa]]: uma estrutura de terra e pedras que os defensores ergueram para que o topo da muralha ficasse sempre acima do da rampa. Foi uma corrida entre engenheiros, sob fogo de flechas.",
        "Quarto, aríetes subiram a rampa. Os relevos mostram os aríetes sobre a rampa, com soldados que despejam água sobre as máquinas para apagar o fogo atirado pelos defensores. No alto da muralha, os judaítas atiravam flechas, pedras e tochas acesas, e as pontas de flecha e as pedras de funda achadas pelos arqueólogos combinam com a cena.",
        "Quinto, a muralha cedeu. Os assírios invadiram a cidade, e os defensores recuaram ou tentaram fugir pelo outro lado da colina. Depois da queda, a cidade foi incendiada: as escavações encontraram uma camada de destruição, com cinza e restos de armas.",
        { h: "O que veio depois da queda" },
        "Os relevos de Nínive continuam com cenas depois da queda: prisioneiros marchando para o exílio com famílias e bagagem, soldados levando saque, e Senaqueribe sentado num trono diante da cidade, recebendo os despojos. Os relevos mostram também homens sendo executados de maneira cruel, entre eles dois esfolados, e uma legenda identifica a cidade como Laquis. Não se sabe quantos moradores foram deportados.",
        { note: "O túmulo coletivo: numa caverna perto de Laquis foram achados os ossos de muitas centenas, talvez cerca de 1.500 pessoas. Muitos ligam o achado à destruição de 701 a.C., mas a ligação e o número são discutidos entre os especialistas, e nenhum relatório de escavação os confirma de forma conclusiva." }
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Laquis foi destruída, e boa parte de Judá, devastada. Senaqueribe, ainda em Laquis, recebeu de Ezequias um tributo pesado: segundo os anais assírios, 30 [[talentos|talento]] de ouro e 800 de prata; segundo a Bíblia, 30 de ouro e 300 de prata. Mesmo assim mandou um emissário a Jerusalém exigir a rendição da cidade. Jerusalém não caiu.",
        "Como e por que Jerusalém foi poupada é uma das maiores controvérsias da história antiga. A Bíblia fala de uma intervenção divina que matou o exército assírio. Os anais assírios não dizem nada disso: contam que Ezequias pagou e ficou preso na cidade 'como um pássaro numa gaiola'. Os historiadores discutem as duas versões.",
        { h: "Por que importa" },
        "Poucas batalhas da Antiguidade foram documentadas de tantos ângulos: a Bíblia, os anais assírios, os relevos do palácio de Nínive, hoje no Museu Britânico, e as escavações de Laquis. O que mais impressiona é que as fontes diferentes combinam em muitos detalhes. Os relevos são a imagem mais completa de um cerco de toda a Antiguidade.",
        "A [[deportação]] dos moradores também faz parte do método assírio: tirar um povo da sua terra para quebrar a identidade e a vontade de se rebelar. Pouco mais de um século depois, em 586 a.C., Judá seria destruída pela Babilônia, que também deportou seus habitantes.",
        { h: "Curiosidades e controvérsias" },
        { note: "A cara riscada: no relevo, o rosto do rei Senaqueribe foi arranhado. Alguns estudiosos pensam que isso aconteceu na queda de Nínive, em 612 a.C., quando o palácio foi saqueado." },
        { note: "As fontes bíblicas: o cerco de Laquis é citado em 2 Reis 18 e 2 Crônicas 32. A Bíblia fala menos do cerco do que dos acontecimentos em Jerusalém. O Prisma de Senaqueribe, um cilindro de argila com os anais do rei, não descreve o cerco de Laquis. O que ligou a cena dos relevos a Laquis foram as legendas escritas nos próprios relevos." }
      ]}
    ]
  },

  aegospotami: {
    war: "Guerra do Peloponeso: fase final (413–404 a.C.)",
    hook: "Os atenienses saíram quatro dias seguidos para provocar o inimigo. No quinto, o inimigo veio buscá-los na praia.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 405 a.C., a guerra entre Atenas e Esparta já durava 26 anos. Depois do desastre na Sicília, em 413, Atenas tinha perdido uma frota inteira e metade dos aliados, mas ainda lutava. Esparta, que antes só tinha exército de terra, aprendeu a construir navios com dinheiro da Pérsia, aliada nova e muito rica.",
        "O homem que fez essa virada foi Lisandro, almirante espartano e amigo do príncipe persa Ciro. Em 406 a.C., os atenienses ainda venceram uma batalha naval em Arginusas, mas em Atenas seis dos generais vitoriosos foram condenados à morte, e a frota perdeu comandantes experientes. Em 405 a.C., Lisandro assumiu de novo o comando da frota espartana.",
        { h: "O caminho até Egospótamos" },
        { timeline: [
          ["413 a.C.", "Desastre ateniense na Sicília."],
          ["406 a.C.", "Atenas vence em Arginusas, mas condena seis dos seus generais à morte."],
          ["405 a.C.", "Lisandro assume de novo o comando. Passa pelo Egeu e entra no Helesponto, o estreito dos Dardanelos."],
          ["405 a.C.", "Toma Lâmpsaco, na margem asiática, e ameaça o caminho do trigo que vinha do mar Negro."],
          ["405 a.C.", "Os atenienses seguem Lisandro e acampam do outro lado do estreito, em Egospótamos."]
        ]},
        "O Helesponto era a artéria de Atenas: a cidade dependia do trigo do mar Negro para comer. Quem controlasse o estreito controlava a fome de Atenas."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Lisandro de Esparta" },
        "Homem de origem modesta, tinha ambição e um dom raro entre os espartanos: a paciência política. Como a lei espartana só permitia ao [[navarco]] um mandato, ele foi nomeado como 'vice-almirante' do comandante oficial. Em 405 a.C., escolheu não lutar: esperou o erro do inimigo.",
        { h: "Os generais atenienses" },
        "A frota ateniense estava sob vários comandos: Conon, o mais competente, Filocles, Adimanto, Tideu e Menandro. Eram homens de coragem, mas deixaram a rotina engolir a prudência. Nenhum deles tinha autoridade para obrigar os outros.",
        { h: "Alcibíades, o exilado" },
        "O antigo general de Atenas, que tinha fugido da cidade dez anos antes, vivia num castelo seu perto do acampamento. Segundo Xenofonte, ele foi até os generais e aconselhou que a frota se mudasse para Sesto, onde havia porto e cidade, em vez de ficar numa praia aberta. Os generais o mandaram embora. Ele morreria pouco depois, ainda no exílio."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças e o terreno" },
        "Xenofonte conta que a frota ateniense tinha 180 navios; o número dos espartanos não é dado por ele e é incerto. O estreito do Helesponto, nesse ponto, tem cerca de 2,5 quilômetros de largura. Lisandro tinha o porto de Lâmpsaco, com a cidade atrás, para onde levar provisões. Os atenienses tinham só uma praia, em Egospótamos, e a cidade mais próxima onde buscar comida era Sesto.",
        { h: "A rotina de quatro dias" },
        { formation: true },
        "Primeiro, os dois lados se posicionaram, frente a frente, nas duas margens. Segundo, todos os dias, os atenienses saíam de manhã em formação de batalha e esperavam diante do porto, e Lisandro não saía. Ao fim do dia, voltavam. Lisandro mandava navios rápidos atrás deles, para ver onde desembarcavam, e só depois deixava seus homens descansarem.",
        "Terceiro, Alcibíades pediu aos generais para saírem dali. Eles não o ouviram. Quarto, os atenienses, sem porto, tinham de mandar os homens longe em busca de comida e água. No quinto dia, a rotina foi igual até o fim da tarde: os atenienses voltaram e se espalharam em terra.",
        "Quinto, foi o sinal que Lisandro esperava. Segundo Xenofonte, seus navios de vigia levantaram um escudo, e a frota inteira atravessou o estreito em direção à praia. Os atenienses, com a maioria das tripulações em terra, não tiveram tempo de fazer nada.",
        "Sexto, a maior parte dos navios foi capturada na praia, vazia ou quase vazia. Não houve propriamente batalha naval. Houve uma captura: Xenofonte diz que Lisandro tomou quase todos os navios e muitos homens.",
        "Sétimo, escaparam nove navios: Conon, com o seu e mais sete, e a trirreme sagrada Paralus. Conon, sabendo que nada o esperava em Atenas, foi para Chipre. O Paralus levou a notícia a Atenas.",
        { note: "Duas versões: Xenofonte, que escreveu pouco depois dos fatos, diz que não houve combate no mar. Diodoro Sículo, bem mais tarde, conta que Filocles saiu com 30 navios, foi derrotado e o resto da frota foi pego despreparado. Diodoro é considerado menos confiável, mas ambos concordam sobre o resultado." },
        { h: "Os prisioneiros" },
        "Segundo a tradição que vem de Xenofonte, cerca de 3.000 atenienses foram capturados e mortos. Lisandro justificou o ato lembrando que Filocles teria jogado ao mar as tripulações de dois navios inimigos. Adimanto, um dos generais, foi o único poupado, o que fez antigos e modernos suspeitarem de traição. Nunca foi provado."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Atenas perdeu quase toda a frota que ainda tinha. O Paralus chegou ao Pireu à noite com a notícia, e Xenofonte descreve o lamento que passou de casa em casa, do porto para a cidade: todos temiam receber o mesmo tratamento que Atenas tinha dado aos habitantes de Melos e de outras cidades.",
        "Lisandro tomou as cidades aliadas de Atenas uma a uma e fechou o cerco por mar e por terra. Sem trigo, Atenas passou fome durante meses e se rendeu na primavera de 404 a.C. As muralhas foram derrubadas ao som de flautas, segundo Xenofonte, e a democracia foi substituída por uma oligarquia pró-Esparta, os Trinta Tiranos.",
        { h: "Por que importa" },
        "Foi a última batalha da Guerra do Peloponeso e a que a decidiu. A guerra tinha durado 27 anos. Esparta virou a potência dominante da Grécia, mas a [[hegemonia]] espartana durou pouco mais de 30 anos, até Leuctras, em 371 a.C.",
        "Também é um exemplo clássico do que acontece com comandantes que repetem a mesma rotina diante de um inimigo paciente.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os números: Xenofonte fala em 180 navios atenienses, e outros textos modernos em 170. Para os espartanos, não há número seguro." },
        { note: "Houve traição? Antigos como o orador Lísias acusaram Adimanto de ter entregue a frota. Alguns historiadores modernos acham a suspeita plausível, mas não há prova, e a negligência dos generais basta para explicar o desastre." }
      ]}
    ]
  },

  siracusa: {
    war: "Guerra do Peloponeso: a Expedição à Sicília (415–413 a.C.)",
    hook: "Atenas mandou ao mar sua maior expedição. Nenhum dos barcos voltou, e quase nenhum dos homens.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Em 421 a.C., Atenas e Esparta assinaram uma paz, a Paz de Nícias, que não resolveu nada. Seis anos depois, em 416 a.C., a cidade siciliana de Segesta pediu ajuda a Atenas contra sua vizinha Selinunte, aliada de Siracusa. Os enviados prometeram muita prata. Em Atenas, o jovem Alcibíades viu a chance de conquistar a Sicília, rica em trigo, e de fazer fama.",
        "O velho general Nícias, o político mais prudente de Atenas, foi contra. Tentou desencorajar a assembleia exagerando o tamanho do que seria necessário: pediu uma força imensa. O tiro saiu pela culatra, e a assembleia votou exatamente essa força: mais de 100 navios e milhares de soldados. Segundo Tucídides, a frota que partiu tinha 134 trirremes e cerca de 5.100 hoplitas, com arqueiros, fundibulários e uns 30 cavaleiros.",
        { h: "O caminho até Siracusa" },
        { timeline: [
          ["416 a.C.", "Segesta pede ajuda a Atenas."],
          ["415 a.C.", "Antes da partida, as [[hermas]] de Atenas amanhecem mutiladas. Alcibíades é acusado, e depois de chegar à Sicília é chamado de volta. Ele foge para Esparta."],
          ["415 a.C.", "Primeira batalha perto de Siracusa. Os atenienses vencem, mas a cavalaria inimiga impede a perseguição."],
          ["414 a.C.", "Os atenienses tomam as Epípolas e começam a murar a cidade. O general Lâmaco morre num combate. Chega o espartano Gilipo."],
          ["413 a.C.", "Chegam os reforços de Demóstenes. Ataque noturno fracassa. Frota derrotada no Porto Grande."],
          ["413 a.C.", "Retirada por terra e desastre no rio Assinaro."]
        ]}
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Nícias, general ateniense" },
        "Rico, religioso e cuidadoso, tinha sido contra a expedição, e foi obrigado a comandá-la. Estava doente durante o cerco e escrevia cartas a Atenas dizendo que a situação era pior do que se pensava. Tucídides o descreve como um homem muito dado a presságios e adivinhações, o que pesaria no fim.",
        { h: "Alcibíades e Lâmaco" },
        "Alcibíades, brilhante e ambicioso, queria uma campanha de diplomacia e ataques escolhidos. Lâmaco, soldado direto, queria atacar Siracusa de surpresa, antes que a cidade se preparasse; segundo estudiosos modernos, era talvez o melhor plano. Alcibíades foi chamado de volta cedo demais, e Lâmaco morreu em 414 a.C. Sobrou Nícias, o mais cauteloso dos três.",
        { h: "Hermócrates e Gilipo" },
        "Do lado de Siracusa, Hermócrates organizou a defesa e pediu ajuda a Esparta e a Corinto. Esparta mandou um só comandante, Gilipo, com poucos soldados, mas ele reuniu aliados pela ilha e deu aos siracusanos o que lhes faltava: um plano e a confiança de lutar.",
        { h: "Demóstenes" },
        "Famoso general ateniense, chegou em 413 a.C. com uma segunda frota. Viu logo que só um golpe rápido salvaria o exército, e por isso tentou o ataque noturno às Epípolas. Quando falhou, queria partir imediatamente."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças e o terreno" },
        "Os números são os de Tucídides: 134 trirremes e cerca de 5.100 hoplitas na partida. Em 413 a.C., os reforços de Demóstenes e Euriméedon somaram cerca de 73 navios e quase 5.000 hoplitas. Os siracusanos tinham muita cavalaria, o que os atenienses quase não tinham. Os números do exército de Siracusa não são seguros.",
        "Siracusa ficava no litoral, com a ilha de Ortígia na ponta e um grande porto, o Porto Grande, ao sul. Atrás da cidade subia o platô das [[Epípolas|epípolas]], que dominava a cidade. Quem o tivesse, tinha Siracusa.",
        { h: "O cerco em nove movimentos" },
        { formation: true },
        "Primeiro, em 414 a.C., os atenienses ocuparam as Epípolas e começaram a construir um muro de cerco, o 'Círculo', para isolar a cidade por terra. Segundo, os siracusanos construíram contramuros para cruzar o caminho, e o Círculo ficou sem poder fechar. Lâmaco morreu nesse trabalho.",
        "Terceiro, Gilipo chegou por terra e terminou o contramuro. A partir daí, o muro ateniense deixou de ter função, e os atenienses passaram a viver em acampamento, longe da cidade. Quarto, em 413 a.C. Gilipo tomou Plemírio, a ponta sul do porto, onde os atenienses guardavam provisões e equipamentos.",
        "Quinto, a frota ateniense foi acuada no Porto Grande, onde não tinha espaço para suas manobras. Os siracusanos, com conselho do piloto coríntio Aríston, usaram [[proas reforçadas|proa reforçada]] para bater de frente e armaram uma isca na hora da refeição: quando os atenienses desembarcaram para comer, os siracusanos voltaram a atacar. As tripulações, em jejum, foram pegas de surpresa, e sete navios foram a pique.",
        "Sexto, chegou Demóstenes com 73 navios e quase 5.000 hoplitas. Sétimo, ele tentou o golpe noturno: tomou o forte de Euríalo e fez os siracusanos recuarem, mas na escuridão os atenienses se confundiram e lutaram uns contra os outros. Os beócios fizeram a primeira resistência e o ataque fracassou, com muitos mortos e feridos.",
        "Oitavo, houve um eclipse lunar, em 27 de agosto de 413 a.C. Nícias, que preparava a retirada, esperou 'três vezes nove dias', como mandaram os adivinhos. Nesse tempo, os siracusanos fecharam a boca do porto. Na batalha final, em setembro, os atenienses, com cerca de 110 navios contra cerca de 76, foram derrotados no próprio porto.",
        "Nono, o exército, com cerca de 40.000 pessoas, segundo Tucídides, incluindo os não combatentes, partiu por terra, deixando feridos e mortos. Demóstenes, com cerca de 6.000 homens, foi cercado e se rendeu. Nícias chegou ao rio Assinaro, onde os soldados, sedentos, se jogaram n'água, atropelados e atacados dos dois lados. Nícias se entregou a Gilipo.",
        { h: "Os prisioneiros" },
        "Cerca de 7.000 prisioneiros, segundo Tucídides, foram jogados nas [[latomias]], as pedreiras, por 70 dias, com pouca comida e água, no calor e no frio. Muitos morreram. Os sobreviventes foram vendidos como escravos. Nícias e Demóstenes foram executados, contra a vontade de Gilipo, segundo Tucídides."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Atenas perdeu perto de 200 navios e dezenas de milhares de homens, entre mortos, escravizados e prisioneiros. Os remadores experientes foram a perda mais difícil de repor. Quando a notícia chegou, segundo Plutarco, a primeira pessoa a trazê-la foi um barbeiro, que foi tratado como inventor de boatos até que a verdade se confirmou.",
        { h: "Por que importa" },
        "Tucídides, que viveu a guerra, considera esse o episódio mais importante da guerra inteira. Depois dele, aliados de Atenas se revoltaram, a Pérsia entrou do lado de Esparta e, em 411 a.C., a democracia foi derrubada por pouco tempo. Atenas ainda lutou nove anos, mas a partir dali não teve mais a mesma força.",
        "Os historiadores discutem as causas. Alguns responsabilizam a indecisão de Nícias, e outros a decisão de chamar Alcibíades de volta. Outros ainda acham que a expedição já nasceu grande demais para os objetivos.",
        { h: "Curiosidades e controvérsias" },
        { note: "A data do eclipse: o eclipse lunar é de 27 de agosto de 413 a.C., segundo o cálculo dos astrônomos. Algumas fontes modernas citam 28 de agosto." },
        { note: "Os números: os dados de forças vêm de Tucídides, que viveu o conflito, mas as estimativas modernas diferem. Há autores que dão ao exército ateniense mais cavalaria do que Tucídides." }
      ]}
    ]
  },

  mantineia: {
    war: "Hegemonia de Tebas na Grécia (371–362 a.C.)",
    hook: "A coluna de Epaminondas rompeu a linha inimiga como a proa de um navio. Ele morreu no momento da vitória, e com ele morreu a grandeza de Tebas.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Durante quase um século, Esparta mandou na Grécia. Em 371 a.C., em Leuctras, um exército tebano comandado por Epaminondas destruiu a infantaria espartana, matou o rei Cleômbroto e acabou com o mito de que os espartanos eram invencíveis. Nos anos seguintes, Epaminondas invadiu a Lacônia, libertou os messênios e criou na Arcádia uma liga de cidades para cercar Esparta.",
        "A [[hegemonia]] de Tebas, porém, tinha inimigos. Atenas se aproximou de Esparta, e as cidades arcádias se dividiram. Mantineia e outras ficaram contra Tebas. Em 362 a.C., Epaminondas voltou ao Peloponeso com seu exército para resolver a questão.",
        { h: "O caminho até Mantineia" },
        { timeline: [
          ["371 a.C.", "Tebanos vencem Esparta em Leuctras."],
          ["370–369 a.C.", "Epaminondas invade a Lacônia e liberta a Messênia."],
          ["362 a.C.", "Marcha ao Peloponeso. Tenta tomar Esparta de surpresa, mas Agesilau volta a tempo."],
          ["362 a.C.", "Tenta surpreender Mantineia, mas a cavalaria ateniense chega e o impede."],
          ["362 a.C.", "Batalha na planície de Mantineia."]
        ]},
        "A data exata da batalha é desconhecida: dá-se o verão de 362 a.C. Algumas fontes modernas citam 4 de julho."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Epaminondas de Tebas" },
        "Filósofo e soldado, vindo de uma família pobre e de pouca fama, foi um dos maiores generais da Grécia. Inventou táticas novas: em vez de espalhar as forças pela linha, concentrava a melhor tropa num ponto só. Xenofonte, que não era tebano, diz que o exército dele aguentava qualquer esforço. Em Mantineia, segundo o mesmo Xenofonte, ele achava que precisava de uma vitória decisiva, porque a sua fama estava abalada pelos fracassos diante de Esparta e Mantineia.",
        { h: "O outro lado" },
        "Do lado aliado estavam Esparta, Atenas, Mantineia, Élis e Acaia. Agesilau, rei de Esparta, já tinha salvado a cidade do ataque de Epaminondas dias antes. Os comandantes incluíam Podares, de Mantineia, que morreu na batalha. Cada cidade levava seu próprio contingente, o que tornava a resposta aliada menos coordenada, mas as fontes não nos dão um quadro completo dos comandos."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Segundo Diodoro, os tebanos e aliados somavam cerca de 30.000 soldados a pé e 3.000 cavaleiros, e os inimigos, cerca de 20.000 e 2.000. São números de um historiador tardio e devem ser lidos com cuidado. Xenofonte, que estava vivo na época, não os dá.",
        { h: "O terreno e a manobra" },
        "A planície de Mantineia fica na Arcádia, entre duas cadeias de montanhas. Epaminondas, vindo de Tegeia, ao sul, montou a linha e a conduziu em direção às montanhas a oeste, como se fosse acampar. Parou os soldados ao pé das encostas, mandou que baixassem as armas e desfez a ordem de batalha. Os inimigos, achando que não haveria luta naquele dia, relaxaram.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, o exército tebano marchou aparentemente sem pressa. Segundo, Epaminondas, sem aviso, deslocou companhias para a esquerda, reforçando a ala. Segundo Diodoro, essa coluna tinha 50 fileiras de profundidade, o que não consta de Xenofonte. Era uma [[coluna profunda]], pensada para furar num ponto só.",
        "Terceiro, os aliados, pegos de surpresa, correram para armar-se e montar. Quarto, a coluna avançou 'como uma trirreme, com o esporão na frente', a imagem de Xenofonte, enquanto as tropas mais fracas da direita ficaram bem atrás, longe do contato. Era uma [[linha oblíqua]], em que o ponto forte chega primeiro.",
        "Quinto, na cavalaria, Epaminondas formou uma coluna funda de cavaleiros misturados com infantaria ligeira, os [[hamippoi]]. A cavalaria inimiga estava em seis fileiras, sem infantaria no meio. Além disso, pôs cavaleiros e hoplitas numa colina, ameaçando o flanco dos atenienses, para que não pudessem ajudar os vizinhos.",
        "Sexto, a coluna bateu. Xenofonte diz que a linha inimiga foi rompida no ponto do choque e que todo o exército aliado acabou fugindo. Sétimo, Epaminondas caiu. Segundo Diodoro, foi atingido no peito por uma lança, cuja ponta ficou na ferida. Os nomes dados para quem o feriu variam nas fontes.",
        "Oitavo, com o general fora de ação, os tebanos pararam. Os hoplitas não perseguiram, e a cavalaria tampouco. Na outra ponta, os cavaleiros e hamippoi que tinham ido contra os atenienses foram, na maioria, mortos. Os atenienses foram os únicos aliados que mantiveram o terreno.",
        { h: "A morte de Epaminondas" },
        "Segundo Diodoro, Epaminondas foi levado para fora do combate, e antes de morrer aconselhou os tebanos a fazer a paz. A frase de que deixava 'duas filhas, Leuctras e Mantineia', é tradição de autores posteriores, que a repetem sem prova."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Xenofonte termina assim: os dois lados ergueram troféus, os dois devolveram os mortos sob trégua, os dois disseram que tinham vencido, e ninguém ganhou território, cidade ou poder. Os gregos, acrescenta, ficaram em mais confusão depois da batalha do que antes. O tebano venceu no campo, mas perdeu o único homem capaz de aproveitar a vitória.",
        { h: "Por que importa" },
        "A hegemonia de Tebas acabou em Mantineia. Esparta nunca recuperou os soldados que perdeu, e Atenas já tinha pouca força. As três grandes cidades ficaram esgotadas, e foi esse vazio que a Macedônia de Filipe II ocupou. Filipe tinha vivido em Tebas como refém, entre 368 e 365 a.C., e, segundo uma tradição, aprendeu ali com Epaminondas. Seu filho, Alexandre, herdaria o exército que ele criou.",
        { h: "Curiosidades e controvérsias" },
        { note: "O Batalhão Sagrado: o grupo de elite de Tebas é muito citado em Leuctras. Em Mantineia, alguns autores modernos o colocam na coluna, mas Xenofonte não o menciona. Usamos apenas o que as fontes antigas confirmam." },
        { note: "Quem feriu Epaminondas: os nomes variam (Anticrates, Maquerião, Grilo, filho de Xenofonte). Grilo, filho de Xenofonte, morreu no combate de cavalaria que antecedeu a batalha, e a identificação como autor do golpe é discutida." }
      ]}
    ]
  },

  ipsos: {
    war: "Guerras dos Diádocos (322–281 a.C.)",
    hook: "O filho carregou tão rápido que não conseguiu voltar. Quando voltou, o pai estava morto, e o império de Alexandre, enterrado.",
    chapters: [
      { n: "01", title: "O mundo antes", blocks: [
        "Quando Alexandre, o Grande, morreu, em 323 a.C., não deixou um herdeiro capaz de governar. Seus generais, os [[diádocos]], dividiram o império em províncias e logo começaram a brigar. Antígono, apelidado Monoftalmo, 'o de um olho só', era um dos mais fortes e queria o império inteiro.",
        "Em 306 a.C., Antígono e o filho Demétrio se proclamaram reis. Nos anos seguintes, os rivais fizeram o mesmo: Ptolomeu no Egito, Seleuco na Babilônia, Lisímaco na Trácia, Cassandro na Macedônia. Quatro reis tinham interesse em derrubar o quinto.",
        { h: "O caminho até Ipsos" },
        { timeline: [
          ["323 a.C.", "Morre Alexandre. Seus generais se dividem."],
          ["306 a.C.", "Antígono e Demétrio se proclamam reis. Os outros generais imitam."],
          ["302 a.C.", "Cassandro, Lisímaco, Seleuco e Ptolomeu formam uma coalizão contra Antígono."],
          ["301 a.C.", "Seleuco, vindo do leste, e Lisímaco, da Trácia, se juntam na Frígia. Ptolomeu fica no Egito."],
          ["301 a.C.", "Batalha de Ipsos."]
        ]},
        "Ptolomeu tinha invadido a Síria, mas recuou para o Egito ao saber, por um boato falso, que Antígono tinha vencido. Por isso, não esteve em Ipsos."
      ]},
      { n: "02", title: "Protagonistas", blocks: [
        { h: "Antígono Monoftalmo, cerca de 81 anos" },
        "Tinha servido Filipe II e Alexandre e era o mais velho dos diádocos. Grande, forte e respeitado pelos soldados, tinha o sonho de reunir o império de Alexandre sob um só comando, o dele. Em Ipsos, estava velho, mas lutava na linha de frente.",
        { h: "Demétrio Poliorceta" },
        "O filho, 'o conquistador de cidades', era um dos generais mais brilhantes e ousados da época, e também um dos mais impetuosos. Comandava a cavalaria pesada, a força mais temida de Antígono.",
        { h: "Seleuco e Lisímaco" },
        "Seleuco, rei da Babilônia, trouxe do leste um enorme grupo de [[elefantes de guerra]]. Segundo Diodoro, 480, e segundo Plutarco, o total aliado foi de 400. Segundo uma tradição, ele os recebeu de Chandragupta, rei da Índia, em troca de territórios a leste. Lisímaco, rei da Trácia, veio com seu exército, e a força de Cassandro estava sob o comando de Prepelau e de Plistarco, seu irmão."
      ]},
      { n: "03", title: "Passo a passo", blocks: [
        { h: "As forças" },
        "Plutarco dá: Antígono com cerca de 70.000 soldados a pé, 10.000 cavaleiros e 75 elefantes; coalizão com 64.000 a pé, 10.500 cavaleiros, 400 elefantes e 120 carros com foices. São números de uma fonte escrita uns 400 anos depois. Outros textos antigos divergem: Diodoro diz que só a cavalaria de Seleuco tinha 12.000, e os historiadores modernos calculam a cavalaria aliada em cerca de 15.000.",
        { h: "O terreno" },
        "A batalha foi na Frígia, perto da cidade de Ipsos, na atual província de Afyonkarahisar, na Turquia. A localização exata é incerta.",
        { h: "A batalha em oito movimentos" },
        { formation: true },
        "Primeiro, os dois lados se posicionaram à moda macedônia: as [[falanges|falange]] no centro, os cavaleiros nas pontas e os elefantes na frente. Antígono ficou no centro, e Demétrio comandava a cavalaria pesada da direita antigônida, de frente para o filho de Seleuco, Antíoco, segundo Plutarco.",
        "Segundo, os elefantes se chocaram primeiro. Terceiro, Demétrio atacou a cavalaria aliada e a rompeu. Quarto, e foi o erro fatal, ele a perseguiu longe demais e se afastou do campo.",
        "Quinto, Seleuco, de acordo com Plutarco, jogou os elefantes no caminho de volta de Demétrio, e a cavalaria não pôde voltar. Alguns historiadores acreditam que Seleuco guardou muitos elefantes como reserva exatamente para isso, o que seria incomum; as fontes não confirmam. Não há registro de quem deu a ordem, e a ideia de que foi Seleuco é dedução.",
        "Sexto, sem a cavalaria, a falange de Antígono ficou com os flancos expostos. A cavalaria aliada e os arqueiros a cavalo passaram a rodeá-la, atirando, sem carga frontal. Segundo Plutarco, Seleuco cavalgava em volta, e isso levou muitos soldados antigônidas a mudar de lado.",
        "Sétimo, Antígono foi atingido por vários dardos de soldados ligeiros e morreu. Plutarco diz que, ao ouvir que os inimigos vinham em sua direção, ele respondeu que esperava a ajuda do filho. A frase é uma anedota de Plutarco, e não há como confirmar. Com a morte do rei, o exército se dissolveu.",
        "Oitavo, Demétrio conseguiu escapar com cerca de 9.000 homens, 5.000 de infantaria e 4.000 de cavalaria, e foi para Éfeso."
      ]},
      { n: "04", title: "Legado", blocks: [
        { h: "Resultado" },
        "Antígono morreu, e seu exército se desfez. Demétrio tentou se refugiar em Atenas, mas a cidade fechou as portas. Deixou Pirro de Epiro como seu representante na Grécia e foi para a Trácia.",
        "Os vencedores dividiram o império. Ptolomeu ficou com o Egito, Seleuco com a Síria e o leste da Ásia Menor, e Lisímaco com o resto da Ásia Menor. Cassandro continuou na Macedônia.",
        { h: "Por que importa" },
        "Ipsos acabou com a ideia de um único império herdeiro de Alexandre. O mundo grego ficou dividido em grandes reinos rivais, os reinos helenísticos, que existiram por quase três séculos, até o avanço de Roma. A dinastia dos Selêucidas, fundada por Seleuco, governou a Síria e boa parte do Oriente. Os Ptolomeus governaram o Egito até Cleópatra.",
        "Foi uma das maiores batalhas com [[elefantes de guerra]] e mostrou que, em mãos hábeis, eles podiam decidir o dia.",
        { h: "Curiosidades e controvérsias" },
        { note: "Os elefantes: as fontes dão 400, 480 ou 500 elefantes à coalizão. Segundo Diodoro, 480 eram de Seleuco. Os números são discutidos, e alguns historiadores acham que são exagerados." },
        { note: "As fontes: Diodoro Sículo, cuja narrativa da batalha se perdeu em grande parte, e Plutarco, na Vida de Demétrio, que é o único relato completo. Plutarco escreve cerca de 400 anos depois e se interessa mais pela lição moral do que pela tática." }
      ]}
    ]
  }
});

Object.assign(FORMATIONS, {
  lachish: {
    terrain: [
      { t: "hill", x: 62, y: 24, rx: 36, ry: 22, l: "Colina e muralhas de Laquis" },
      { t: "note", x: 90, y: 66, l: "Norte ↑" }
    ],
    units: [
      { id: "aArch", s: "a", k: "inf", w: 14, h: 4, l: "Arqueiros e fundibulários" },
      { id: "aSpear", s: "a", k: "inf", w: 12, h: 4, l: "Lanceiros com escudos de vime" },
      { id: "aRam", s: "a", k: "inf", w: 8, h: 4, l: "Aríetes" },
      { id: "aRamp", s: "a", k: "camp", w: 16, h: 5, l: "Rampa de cerco" },
      { id: "aKing", s: "a", k: "camp", w: 12, h: 5, l: "Senaqueribe" },
      { id: "bWall", s: "b", k: "inf", w: 22, h: 4, l: "Defensores nas muralhas" },
      { id: "bCount", s: "b", k: "camp", w: 10, h: 4, l: "Contrarrampa" },
      { id: "bPop", s: "b", k: "inf", w: 10, h: 3, l: "Habitantes de Laquis" }
    ],
    steps: [
      { t: "Os assírios chegam do sudoeste. Laquis fica sobre a colina, com duas muralhas. Os defensores guarnecem o alto das paredes.",
        p: { aArch: [12, 60], aSpear: [26, 62], aRam: [10, 50], aRamp: [22, 66], aKing: [10, 14], bWall: [36, 38], bCount: [56, 32], bPop: [68, 22] } },
      { t: "Arqueiros e fundibulários avançam, protegidos por lanceiros com escudos de vime. Querem limpar a muralha para que os engenheiros trabalhem.",
        p: { aArch: [22, 52], aSpear: [30, 54] } },
      { t: "Os engenheiros assírios constroem a rampa de cerco no canto sudoeste: cerca de 3 milhões de pedras, segundo um estudo de 2021.",
        p: { aRamp: [28, 46, -30], aArch: [18, 56] } },
      { t: "Dentro da muralha, os defensores constroem uma contrarrampa, para que o topo da defesa continue acima da rampa inimiga.",
        p: { bCount: [38, 40, -30] } },
      { t: "Os aríetes sobem a rampa. Do alto, os defensores jogam pedras, flechas e tochas acesas.",
        p: { aRam: [32, 44, -30], aSpear: [24, 50] } },
      { t: "A muralha cede. Os soldados assírios entram pela brecha.",
        p: { aRam: [38, 38], aSpear: [36, 36], bWall: [46, 32] } },
      { t: "Os defensores recuam ou tentam fugir pelo outro lado da colina. A cidade cai e é incendiada.",
        p: { aSpear: [46, 30], aArch: [34, 42], bWall: [62, 18] }, x: ["bWall"] },
      { t: "Os habitantes são levados como prisioneiros. Senaqueribe, sentado num trono diante da cidade, recebe os despojos, como mostram os relevos de Nínive.",
        p: { bPop: [24, 56], aKing: [14, 42] } }
    ]
  },

  aegospotami: {
    terrain: [
      { t: "sea", x: 34, y: -2, w: 32, h: 76, l: "Helesponto" },
      { t: "hill", x: 12, y: 35, rx: 20, ry: 34, l: "Quersoneso (Europa)" },
      { t: "hill", x: 90, y: 35, rx: 22, ry: 34, l: "Ásia" },
      { t: "note", x: 22, y: 20, l: "Egospótamos" },
      { t: "note", x: 84, y: 20, l: "Lâmpsaco" },
      { t: "note", x: 14, y: 66, l: "Sesto" }
    ],
    units: [
      { id: "aFleet", s: "a", k: "ship", w: 5, h: 14, l: "Frota ateniense (≈ 180 navios)" },
      { id: "aCrew", s: "a", k: "inf", w: 5, h: 8, l: "Marinheiros procurando comida" },
      { id: "aConon", s: "a", k: "ship", w: 3.5, h: 3.5, l: "Conon e 7 navios" },
      { id: "aParal", s: "a", k: "ship", w: 3, h: 3, l: "Paralus" },
      { id: "bFleet", s: "b", k: "ship", w: 5, h: 14, l: "Frota de Lisandro" },
      { id: "bScout", s: "b", k: "ship", w: 3, h: 3, l: "Navios de vigia" },
      { id: "bInf", s: "b", k: "inf", w: 6, h: 6, l: "Tropas de Tórax" }
    ],
    steps: [
      { t: "Os atenienses acampam numa praia aberta, sem porto, em Egospótamos. Lisandro mantém a frota ancorada em Lâmpsaco, com a cidade atrás.",
        p: { aFleet: [30, 38], aCrew: [22, 38], aConon: [30, 26], aParal: [30, 52], bFleet: [70, 38], bScout: [66, 30], bInf: [82, 40] } },
      { t: "Todo dia, de manhã, os atenienses saem em formação de batalha e esperam diante do porto inimigo. Lisandro não sai.",
        p: { aFleet: [48, 38], aConon: [48, 26], aParal: [48, 52] } },
      { t: "À tarde, os atenienses voltam. Navios rápidos de Lisandro os seguem de longe para ver onde desembarcam, e só então os espartanos descansam.",
        p: { aFleet: [30, 38], aConon: [30, 26], aParal: [30, 52], bScout: [48, 38] } },
      { t: "Alcibíades, exilado, avisa os generais de que devem mudar-se para Sesto, que tem porto. Os generais o mandam embora. A rotina se repete por quatro dias.",
        p: { bScout: [66, 30] } },
      { t: "No quinto dia, os atenienses saem de novo, voltam à tarde e os marinheiros se espalham em terra à procura de comida.",
        p: { aCrew: [14, 44], aFleet: [30, 38] } },
      { t: "Os navios de vigia levantam um escudo: é o sinal. A frota de Lisandro atravessa o estreito a toda velocidade.",
        p: { bFleet: [46, 38], bScout: [44, 30] } },
      { t: "A frota espartana chega à praia e captura quase todos os navios atenienses, vazios ou mal tripulados. Não há batalha naval de verdade.",
        p: { bFleet: [32, 38], bInf: [26, 40], aCrew: [12, 48] }, x: ["aFleet"] },
      { t: "Só nove navios escapam. Conon vai para Chipre, e o Paralus leva a notícia a Atenas. Lisandro manda matar cerca de 3.000 prisioneiros.",
        p: { aConon: [24, 6], aParal: [30, 66] }, x: ["aCrew", "aConon", "aParal"] }
    ]
  },

  siracusa: {
    terrain: [
      { t: "sea", x: 50, y: 30, w: 54, h: 44, l: "Porto Grande" },
      { t: "hill", x: 42, y: 12, rx: 34, ry: 10, l: "Platô das Epípolas" },
      { t: "hill", x: 30, y: 38, rx: 12, ry: 9, l: "Siracusa" },
      { t: "hill", x: 94, y: 64, rx: 7, ry: 7, l: "Plemírio" },
      { t: "note", x: 14, y: 64, l: "Rio Anapo" },
      { t: "note", x: 8, y: 6, l: "Euríalo" }
    ],
    units: [
      { id: "aArmy", s: "a", k: "inf", w: 16, h: 5, l: "Exército ateniense" },
      { id: "aWall", s: "a", k: "camp", w: 22, h: 2, l: "Muro ateniense (o 'Círculo')" },
      { id: "aFleet", s: "a", k: "ship", w: 10, h: 4, l: "Frota ateniense" },
      { id: "aCamp", s: "a", k: "camp", w: 10, h: 5, l: "Acampamento e Plemírio" },
      { id: "aDemo", s: "a", k: "ship", w: 8, h: 4, l: "Demóstenes: 73 navios, 5.000 hoplitas" },
      { id: "bArmy", s: "b", k: "inf", w: 14, h: 5, l: "Siracusanos" },
      { id: "bCounter", s: "b", k: "camp", w: 24, h: 2, l: "Contramuro siracusano" },
      { id: "bCav", s: "b", k: "cav", w: 8, h: 4, l: "Cavalaria siracusana" },
      { id: "bGyl", s: "b", k: "inf", w: 10, h: 5, l: "Gilipo e peloponésios" },
      { id: "bFleet", s: "b", k: "ship", w: 10, h: 4, l: "Frota siracusana" }
    ],
    steps: [
      { t: "414 a.C.: os atenienses desembarcam e ocupam as Epípolas. Começam a murar Siracusa por terra, o 'Círculo'.",
        p: { aArmy: [34, 22], aWall: [30, 28], aFleet: [78, 50], aCamp: [18, 54], aDemo: [92, 68], bArmy: [28, 38], bCounter: [20, 12], bCav: [40, 40], bGyl: [8, 4], bFleet: [62, 42] } },
      { t: "Os siracusanos constroem contramuros para cortar o caminho do Círculo. Lâmaco morre num combate.",
        p: { aWall: [34, 30], bCounter: [32, 20] } },
      { t: "Gilipo, enviado por Esparta, chega por terra e termina o contramuro. O muro ateniense não pode mais fechar a cidade.",
        p: { bGyl: [30, 14], bCounter: [38, 24], aArmy: [24, 50] } },
      { t: "413 a.C.: Gilipo toma Plemírio, onde os atenienses guardavam provisões e equipamento.",
        p: { bGyl: [88, 56] }, x: ["aCamp"] },
      { t: "No Porto Grande, a frota ateniense não tem espaço para manobrar. Os siracusanos, com proas reforçadas, batem de frente e usam a hora da refeição para surpreender.",
        p: { bFleet: [66, 46], aFleet: [74, 50] } },
      { t: "Chega Demóstenes, com 73 navios e quase 5.000 hoplitas.",
        p: { aDemo: [76, 58] } },
      { t: "Ataque noturno às Epípolas: toma o forte de Euríalo, mas na escuridão os atenienses se confundem, os beócios resistem e o ataque falha.",
        p: { aArmy: [36, 14], bArmy: [30, 28] } },
      { t: "Depois do eclipse, Nícias espera quase um mês. Os siracusanos fecham a boca do porto e destroem a frota ateniense em setembro.",
        p: { bFleet: [86, 52] }, x: ["aFleet", "aDemo"] },
      { t: "O exército foge por terra e é destruído perto do rio Assinaro. Demóstenes se rende com cerca de 6.000 homens. Cerca de 7.000 prisioneiros vão para as pedreiras.",
        p: { aArmy: [8, 40], bCav: [8, 30], bArmy: [22, 34] }, x: ["aArmy"] }
    ]
  },

  mantineia: {
    terrain: [
      { t: "hill", x: 86, y: 34, rx: 9, ry: 7, l: "Colina" },
      { t: "note", x: 50, y: 5, l: "Mantineia (norte)" },
      { t: "note", x: 50, y: 67, l: "Tegeia (sul)" }
    ],
    units: [
      { id: "aCol", s: "a", k: "inf", w: 14, h: 12, l: "Coluna tebana (ala esquerda)" },
      { id: "aRight", s: "a", k: "inf", w: 22, h: 4, l: "Ala direita tebana, recuada" },
      { id: "aCav", s: "a", k: "cav", w: 10, h: 5, l: "Cavalaria tebana e infantaria ligeira" },
      { id: "aHill", s: "a", k: "cav", w: 7, h: 4, l: "Cavaleiros e hoplitas na colina" },
      { id: "bSp", s: "b", k: "inf", w: 16, h: 5, l: "Esparta, Mantineia e arcádios" },
      { id: "bMid", s: "b", k: "inf", w: 20, h: 5, l: "Aliados (Élis, Acaia)" },
      { id: "bAth", s: "b", k: "inf", w: 16, h: 5, l: "Atenienses (esquerda aliada)" },
      { id: "bCavL", s: "b", k: "cav", w: 10, h: 4, l: "Cavalaria aliada" },
      { id: "bCavR", s: "b", k: "cav", w: 10, h: 4, l: "Cavalaria aliada" }
    ],
    steps: [
      { t: "Os tebanos marcham de Tegeia em direção às montanhas a oeste, como se fossem acampar. Os aliados, em linha na planície, acham que não haverá luta naquele dia.",
        p: { aCol: [28, 56], aRight: [62, 56], aCav: [10, 56], aHill: [86, 44], bSp: [30, 20], bMid: [56, 20], bAth: [80, 20], bCavL: [10, 16], bCavR: [94, 18] } },
      { t: "Epaminondas para ao pé das encostas e manda baixar as armas, como se acampasse. Desfaz a ordem aparente de batalha.",
        p: { aCol: [24, 56], aRight: [58, 56] } },
      { t: "De repente, desloca companhias para a esquerda e reforça a ala. Segundo Diodoro, a coluna chega a 50 fileiras de profundidade.",
        p: { aCol: [26, 52] } },
      { t: "Os aliados correm para pegar as armas e montar.",
        p: { bSp: [30, 22], bMid: [56, 22] } },
      { t: "A coluna avança 'como uma trirreme, com o esporão na frente', enquanto as tropas mais fracas da direita ficam longe do contato. A linha vai em diagonal.",
        p: { aCol: [28, 38], aRight: [64, 54], aCav: [12, 38] } },
      { t: "A cavalaria tebana, com infantaria ligeira misturada, enfrenta a cavalaria inimiga, que está em seis fileiras e sem infantaria. Cavaleiros e hoplitas na colina ameaçam os atenienses.",
        p: { aCav: [12, 28], aHill: [84, 30], bCavL: [10, 22] } },
      { t: "A coluna bate no ponto onde está a elite inimiga. A linha é rompida e o exército aliado foge.",
        p: { aCol: [30, 26], aCav: [12, 22], bSp: [28, 14] }, x: ["bSp", "bCavL"] },
      { t: "Epaminondas cai. Os tebanos param e não perseguem. Na outra ponta, os cavaleiros e a infantaria ligeira que atacaram os atenienses são, na maioria, mortos.",
        p: { aCol: [30, 24], aHill: [80, 24], bAth: [80, 18], bMid: [56, 16] }, x: ["aHill", "bMid"] }
    ]
  },

  ipsos: {
    terrain: [
      { t: "note", x: 50, y: 4, l: "Frígia" }
    ],
    units: [
      { id: "aPh", s: "a", k: "inf", w: 34, h: 5, l: "Falange de Antígono" },
      { id: "aEle", s: "a", k: "ele", w: 30, h: 3, l: "75 elefantes" },
      { id: "aDem", s: "a", k: "cav", w: 14, h: 5, l: "Demétrio e a cavalaria pesada" },
      { id: "aLeft", s: "a", k: "cav", w: 10, h: 5, l: "Cavalaria da esquerda" },
      { id: "bPh", s: "b", k: "inf", w: 36, h: 5, l: "Falange da coalizão" },
      { id: "bEleF", s: "b", k: "ele", w: 28, h: 3, l: "Elefantes da linha" },
      { id: "bEleR", s: "b", k: "ele", w: 18, h: 3, l: "Elefantes de reserva (segundo alguns)" },
      { id: "bCavL", s: "b", k: "cav", w: 14, h: 5, l: "Cavalaria de Antíoco" },
      { id: "bCavR", s: "b", k: "cav", w: 10, h: 5, l: "Cavalaria aliada" },
      { id: "bSk", s: "b", k: "cav", w: 12, h: 4, l: "Arqueiros a cavalo e cavalaria ligeira" }
    ],
    steps: [
      { t: "As duas falanges ficam no centro, com os elefantes na frente. Antígono está no centro. Demétrio comanda a cavalaria pesada na direita antigônida, de frente para a cavalaria de Antíoco.",
        p: { aPh: [50, 52], aEle: [50, 44], aDem: [82, 50], aLeft: [14, 50], bPh: [50, 20], bEleF: [50, 28], bEleR: [76, 8], bCavL: [82, 20], bCavR: [14, 20], bSk: [92, 10] } },
      { t: "Os elefantes das duas linhas se chocam primeiro.",
        p: { aEle: [50, 38], bEleF: [50, 32] } },
      { t: "Demétrio carrega contra a cavalaria aliada e a rompe.",
        p: { aDem: [80, 28], bCavL: [86, 20] } },
      { t: "Ele a persegue longe demais e se afasta do campo de batalha.",
        p: { aDem: [92, 8], bCavL: [96, 4] }, x: ["bCavL"] },
      { t: "Os elefantes de Seleuco são postos no caminho de volta de Demétrio. A cavalaria não consegue voltar.",
        p: { bEleR: [82, 16] } },
      { t: "Sem a cavalaria, a falange de Antígono fica com o flanco exposto. Arqueiros a cavalo e cavaleiros aliados a rodeiam e a atacam à distância. Muitos soldados trocam de lado.",
        p: { bSk: [70, 40], aPh: [50, 46] } },
      { t: "Antígono é atingido por vários dardos e morre. O exército se desfaz.",
        p: { aEle: [50, 36] }, x: ["aPh", "aEle", "aLeft"] },
      { t: "Demétrio escapa com cerca de 9.000 homens e vai para Éfeso.",
        p: { aDem: [96, 2] }, x: ["aDem"] }
    ]
  }
});
