// More battles (antiquity and middle ages), in a compact form.
// add(id, name, year, date, era, place, lat, lng, [side, leader, troops, n], [side, leader, troops, n], winner, summary, phases, result, legacy)
// winner: "a", "b", or "" when the outcome was indecisive. Troop numbers are historians' estimates.
function add(id, name, year, date, era, place, lat, lng, a, b, winner, summary, phases, result, legacy) {
  const side = s => ({ side: s[0], leader: s[1], troops: s[2], n: s[3] });
  BATTLES.push({ id, name, year, date, era, place, lat, lng, a: side(a), b: side(b), winner, summary, phases, result, legacy });
}

// ---------- Antiquity ----------
add("megido", "Megido", -1457, "c. 1457 a.C.", "antiga", "Vale de Jezreel, atual Israel", 32.585, 35.185,
  ["Egito", "Tutmés III", "≈ 10.000 a 20.000", 15000], ["Coalizão cananeia", "Rei de Kadesh", "≈ 10.000 a 15.000", 12500], "a",
  "Cidades de Canaã se rebelaram contra o Egito. O jovem faraó Tutmés III marchou para esmagar a revolta.",
  ["Havia três caminhos até Megido. Contra o conselho dos generais, Tutmés escolheu o mais perigoso: um desfiladeiro estreito, onde ninguém o esperava.",
   "O exército egípcio saiu do desfiladeiro em frente à cidade e pegou os cananeus de surpresa.",
   "Os cananeus fugiram para dentro das muralhas. Os egípcios pararam para saquear e tiveram de cercar a cidade por sete meses."],
  "Megido se rendeu, e o Egito dominou Canaã.",
  "É a primeira batalha da história registrada em detalhes confiáveis. O nome Megido deu origem à palavra Armagedom.");

add("kadesh", "Kadesh", -1274, "Maio de 1274 a.C.", "antiga", "Rio Orontes, atual Síria", 34.557, 36.52,
  ["Egito", "Ramsés II", "≈ 20.000", 20000], ["Império Hitita", "Muwatalli II", "≈ 40.000 e milhares de carros de guerra", 40000], "",
  "Egito e hititas disputavam a Síria. Foi provavelmente a maior batalha de carros de guerra da história.",
  ["Espiões falsos disseram a Ramsés que os hititas estavam longe. Ele avançou com só uma parte do exército.",
   "Os carros hititas saíram de trás da cidade e destroçaram uma divisão egípcia em marcha.",
   "Ramsés contra-atacou pessoalmente e foi salvo pela chegada de reforços. Os hititas pararam para saquear o acampamento e perderam o impulso."],
  "Empate: os dois lados cantaram vitória. Kadesh continuou hitita.",
  "Anos depois, os dois impérios assinaram o tratado de paz mais antigo que se conhece. Uma cópia fica na sede da ONU.");

add("salamina", "Salamina", -480, "Setembro de 480 a.C.", "antiga", "Estreito de Salamina, Grécia", 37.95, 23.57,
  ["Aliança grega", "Temístocles e Euribíades", "≈ 370 navios", 370], ["Império Persa", "Xerxes I", "≈ 600 a 800 navios", 700], "a",
  "Depois das Termópilas, Atenas foi incendiada. A última esperança grega era a frota.",
  ["Temístocles mandou uma mensagem falsa a Xerxes, dizendo que os gregos iam fugir. Os persas entraram no estreito para pegá-los.",
   "No canal apertado, os navios persas se atrapalharam uns nos outros e não puderam usar a vantagem numérica.",
   "As trirremes gregas atacaram com os esporões. Xerxes assistiu a tudo de um trono no alto de um morro."],
  "Os persas perderam centenas de navios, e Xerxes voltou para a Ásia.",
  "Sem frota, o exército persa não conseguia se abastecer. A invasão terminou no ano seguinte, em Plateia.");

add("plateia", "Plateia", -479, "Agosto de 479 a.C.", "antiga", "Beócia, Grécia", 38.22, 23.27,
  ["Aliança grega", "Pausânias de Esparta", "≈ 40.000 hoplitas e tropas leves", 40000], ["Império Persa", "Mardônio", "≈ 70.000 a 120.000", 90000], "a",
  "Xerxes foi embora, mas deixou o general Mardônio com um grande exército para terminar a conquista da Grécia.",
  ["Os dois exércitos se encararam por mais de dez dias, sem que ninguém quisesse atacar primeiro.",
   "Os gregos tentaram mudar de posição à noite e se desorganizaram. Mardônio achou que era fuga e atacou.",
   "Os espartanos aguentaram o ataque e mataram Mardônio. Sem o chefe, o exército persa desmoronou."],
  "Vitória grega decisiva.",
  "Foi o fim das invasões persas. Depois dela começou a era de ouro de Atenas.");

add("leuctra", "Leuctra", -371, "Julho de 371 a.C.", "antiga", "Beócia, Grécia", 38.265, 23.175,
  ["Tebas", "Epaminondas", "≈ 6.000 a 7.000", 6500], ["Esparta", "Rei Cleômbroto I", "≈ 10.000", 10000], "a",
  "Esparta era considerada invencível em terra havia séculos. Tebas resolveu desafiá-la.",
  ["Epaminondas quebrou a regra da época: em vez de uma linha igual, juntou uma coluna de 50 fileiras de profundidade na ala esquerda.",
   "Essa coluna, com o Batalhão Sagrado na frente, atacou direto o ponto onde estavam o rei e a elite espartana.",
   "O resto da linha tebana ficou recuado, em diagonal, sem lutar. O rei Cleômbroto morreu, e os espartanos recuaram."],
  "Dos 700 cidadãos espartanos presentes, cerca de 400 morreram.",
  "Foi o fim da supremacia de Esparta. A 'ordem oblíqua' de Epaminondas foi copiada por generais durante 2.000 anos.");

add("queroneia", "Queroneia", -338, "Agosto de 338 a.C.", "antiga", "Beócia, Grécia", 38.495, 22.845,
  ["Macedônia", "Filipe II", "≈ 32.000", 32000], ["Atenas e Tebas", "Cares e Teágenes", "≈ 35.000", 35000], "a",
  "Filipe II da Macedônia vinha dominando a Grécia aos poucos. Atenas e Tebas se uniram para detê-lo.",
  ["Filipe recuou de propósito a ala direita, e os atenienses avançaram atrás dele, abrindo um buraco na linha grega.",
   "Na outra ponta, a cavalaria entrou pelo buraco. Quem a comandava era o filho de Filipe, Alexandre, de 18 anos.",
   "O Batalhão Sagrado de Tebas, 300 soldados de elite, não recuou e foi destruído."],
  "Vitória macedônia.",
  "As cidades gregas perderam a independência. Dois anos depois, Alexandre herdou o exército e partiu para conquistar a Pérsia.");

add("isso", "Isso", -333, "Novembro de 333 a.C.", "antiga", "Golfo de Iskenderun, atual Turquia", 36.84, 36.21,
  ["Macedônia", "Alexandre, o Grande", "≈ 40.000", 40000], ["Império Persa", "Dario III", "≈ 50.000 a 100.000", 75000], "a",
  "Foi o primeiro encontro entre Alexandre e o rei Dario em pessoa.",
  ["Dario apareceu pela retaguarda de Alexandre, mas numa planície estreita entre o mar e as montanhas, onde seus números não cabiam.",
   "Alexandre atacou com a cavalaria pela direita e rompeu a esquerda persa.",
   "Depois virou em direção a Dario, que fugiu de carro e depois a cavalo."],
  "Dario deixou para trás a mãe, a esposa e as filhas, que foram capturadas e bem tratadas.",
  "Dario ofereceu metade do império em troca de paz. Alexandre recusou e venceu de vez em Gaugamela.");

add("hidaspes", "Hidaspes", -326, "Maio de 326 a.C.", "antiga", "Rio Jhelum, atual Paquistão", 32.83, 73.64,
  ["Macedônia", "Alexandre, o Grande", "≈ 40.000 (só parte atravessou o rio)", 40000], ["Reino de Paurava", "Rei Poro", "≈ 30.000 e até 200 elefantes", 30000], "a",
  "Na fronteira da Índia, o rei Poro esperava Alexandre do outro lado de um rio cheio pelas monções.",
  ["Alexandre fez barulho e falsos preparativos por várias noites, até Poro parar de reagir.",
   "Numa noite de tempestade, atravessou o rio quase 30 km acima com parte do exército.",
   "Os elefantes assustaram os cavalos, mas, feridos por lanças e flechas, pisotearam as próprias tropas indianas."],
  "Vitória macedônia. Alexandre admirou a coragem de Poro e o manteve como rei.",
  "Foi a última grande batalha de Alexandre. Pouco depois, seus soldados se recusaram a seguir em frente, e ele voltou.");

add("changping", "Changping", -260, "262 a 260 a.C.", "antiga", "Gaoping, Shanxi, China", 35.8, 112.92,
  ["Estado de Qin", "Bai Qi", "centenas de milhares (segundo as fontes)", 500000], ["Estado de Zhao", "Zhao Kuo", "centenas de milhares (segundo as fontes)", 450000], "a",
  "No período dos Reinos Combatentes, Qin e Zhao eram as duas maiores potências militares da China.",
  ["Por dois anos, o velho general de Zhao se recusou a sair das fortificações. O rei o trocou por Zhao Kuo, jovem que só conhecia a guerra pelos livros.",
   "Zhao Kuo atacou. Bai Qi fingiu recuar e fechou o exército de Zhao num vale, cortando a comida.",
   "Depois de 46 dias de fome, Zhao Kuo morreu tentando furar o cerco, e o exército se rendeu."],
  "As fontes antigas dizem que 400.000 prisioneiros foram executados. O número é provavelmente exagerado.",
  "Zhao nunca se recuperou. Qin unificou a China em 221 a.C., e o nome 'China' vem de 'Qin'.");

add("trasimeno", "Lago Trasimeno", -217, "21 de junho de 217 a.C.", "antiga", "Úmbria, Itália", 43.19, 12.1,
  ["Cartago", "Aníbal Barca", "≈ 50.000", 50000], ["República Romana", "Caio Flamínio", "≈ 25.000 a 30.000", 27500], "a",
  "Aníbal estava solto na Itália, e o cônsul Flamínio saiu atrás dele com pressa.",
  ["Aníbal escondeu o exército inteiro nas colinas ao lado da estrada que beirava o lago.",
   "Os romanos entraram no caminho estreito de manhã cedo, em coluna de marcha, no meio da neblina.",
   "Os cartagineses desceram de todos os lados ao mesmo tempo. Sem espaço para formar, muitos romanos foram empurrados para dentro do lago."],
  "Cerca de 15.000 romanos morreram em três horas, entre eles o cônsul Flamínio.",
  "É considerada a maior emboscada da história militar. Um ano depois veio Canas.");

add("zama", "Zama", -202, "Outubro de 202 a.C.", "antiga", "Perto de Siliana, atual Tunísia", 36.3, 9.45,
  ["República Romana", "Cipião", "≈ 35.000", 35000], ["Cartago", "Aníbal Barca", "≈ 40.000 e 80 elefantes", 40000], "a",
  "Em vez de enfrentar Aníbal na Itália, Cipião levou a guerra para a África. Cartago chamou Aníbal de volta.",
  ["Aníbal abriu com 80 elefantes. Cipião tinha deixado corredores entre as tropas, e os animais passaram direto.",
   "A cavalaria romana e númida, do rei Massinissa, expulsou a cavalaria cartaginesa do campo.",
   "As infantarias lutaram de igual para igual até a cavalaria voltar e atacar os veteranos de Aníbal pelas costas."],
  "Foi a única derrota de Aníbal em batalha campal. Cartago pediu a paz.",
  "Fim da Segunda Guerra Púnica. Roma virou dona do Mediterrâneo ocidental, e Cipião ganhou o apelido de 'Africano'.");

add("pidna", "Pidna", -168, "22 de junho de 168 a.C.", "antiga", "Macedônia, Grécia", 40.37, 22.58,
  ["República Romana", "Lúcio Emílio Paulo", "≈ 38.000", 38000], ["Macedônia", "Rei Perseu", "≈ 44.000", 44000], "a",
  "Era o teste final entre os dois melhores sistemas militares da Antiguidade: a legião romana e a falange macedônia.",
  ["De frente, a falange era imbatível: um paredão de lanças de seis metros que empurrou os romanos para trás.",
   "Ao avançar por terreno irregular, a falange abriu brechas entre as fileiras.",
   "Emílio Paulo mandou pequenos grupos entrarem pelas brechas. De perto, a espada curta romana venceu a lança comprida."],
  "Cerca de 20.000 macedônios morreram em uma hora.",
  "Foi o fim do reino de Alexandre. Curiosidade: o general romano era filho do cônsul morto em Canas.");

add("gaixia", "Gaixia", -202, "Dezembro de 202 a.C.", "antiga", "Lingbi, Anhui, China", 33.3, 117.4,
  ["Han", "Liu Bang e Han Xin", "≈ 300.000 (segundo as fontes)", 300000], ["Chu", "Xiang Yu", "≈ 100.000", 100000], "a",
  "Depois da queda da dinastia Qin, dois rebeldes disputaram a China: o nobre guerreiro Xiang Yu e o camponês Liu Bang.",
  ["O general Han Xin cercou o exército de Chu por todos os lados.",
   "À noite, mandou os soldados cantarem canções da terra de Chu. Os homens de Xiang Yu acharam que sua terra já tinha caído e desertaram em massa.",
   "Xiang Yu furou o cerco com 800 cavaleiros, chegou ao rio Wu quase sozinho e se matou."],
  "Liu Bang virou imperador.",
  "Nasceu a dinastia Han, que durou 400 anos. Até hoje a maioria étnica da China se chama 'han'.");

add("carras", "Carras", -53, "Junho de 53 a.C.", "antiga", "Harran, atual Turquia", 36.86, 39.03,
  ["Império Parta", "Surena", "≈ 10.000 cavaleiros", 10000], ["República Romana", "Marco Licínio Crasso", "≈ 40.000", 40000], "a",
  "Crasso, o homem mais rico de Roma, queria glória militar igual à de César e Pompeu. Invadiu a Pártia sem motivo.",
  ["No deserto aberto, os arqueiros a cavalo partas cercaram as legiões e atiraram de longe, sem parar.",
   "Os romanos esperaram as flechas acabarem. Não acabaram: mil camelos traziam flechas novas.",
   "Quando os romanos avançavam, os partas fugiam atirando para trás, o famoso 'tiro parta'."],
  "Cerca de 20.000 romanos morreram e 10.000 foram capturados. Crasso foi morto numa negociação.",
  "Uma das piores derrotas de Roma. Sem Crasso, César e Pompeu ficaram frente a frente, e veio a guerra civil.");

add("farsalia", "Farsália", -48, "9 de agosto de 48 a.C.", "antiga", "Tessália, Grécia", 39.3, 22.38,
  ["César", "Júlio César", "≈ 22.000", 22000], ["Pompeu e o Senado", "Pompeu Magno", "≈ 45.000", 45000], "a",
  "César tinha atravessado o Rubicão. A guerra civil romana ia se decidir na Grécia.",
  ["Pompeu contava com sua cavalaria, sete vezes maior, para dar a volta na ala direita de César.",
   "César adivinhou o plano e escondeu uma quarta linha de infantaria atrás da ala.",
   "A cavalaria de Pompeu deu de cara com essa linha, entrou em pânico e fugiu. A mesma tropa atacou então o flanco de Pompeu."],
  "Pompeu fugiu para o Egito, onde foi assassinado ao desembarcar.",
  "César virou senhor de Roma. Foi o começo do fim da República.");

add("accio", "Áccio", -31, "2 de setembro de 31 a.C.", "antiga", "Mar Jônico, Grécia", 38.93, 20.72,
  ["Otaviano", "Marco Agripa", "≈ 400 navios", 400], ["Marco Antônio e Cleópatra", "Marco Antônio", "≈ 230 navios", 230], "a",
  "Depois da morte de César, seus dois herdeiros disputaram o mundo romano: Otaviano no Ocidente, Antônio e Cleópatra no Oriente.",
  ["Agripa bloqueou a frota de Antônio no golfo por meses. A fome e as doenças enfraqueceram as tripulações.",
   "Antônio tentou furar o bloqueio com navios grandes e pesados contra os navios leves de Agripa.",
   "No meio do combate, Cleópatra escapou com 60 navios e o tesouro. Antônio foi atrás dela e abandonou a frota."],
  "A frota e o exército de Antônio se renderam. Ele e Cleópatra se mataram no ano seguinte.",
  "Otaviano virou Augusto, o primeiro imperador. Acabou a República Romana e o Egito dos faraós.");

add("pontemilvia", "Ponte Mílvia", 312, "28 de outubro de 312", "antiga", "Roma, Itália", 41.935, 12.467,
  ["Constantino", "Constantino I", "≈ 40.000", 40000], ["Maxêncio", "Maxêncio", "número maior, incerto", 60000], "a",
  "Dois imperadores rivais disputavam o Ocidente romano. Maxêncio tinha Roma, e Constantino vinha da Gália.",
  ["Segundo a tradição, Constantino teve uma visão antes da batalha: um sinal no céu e as palavras 'com este sinal vencerás'. Mandou pintar o símbolo cristão nos escudos.",
   "Maxêncio saiu das muralhas e formou o exército de costas para o rio Tibre.",
   "A cavalaria de Constantino rompeu a linha. Na fuga, a ponte improvisada de barcos cedeu, e Maxêncio morreu afogado."],
  "Constantino entrou em Roma como único imperador do Ocidente.",
  "No ano seguinte, o Édito de Milão deu liberdade aos cristãos. O cristianismo começou a virar a religião do império.");

add("adrianopolis", "Adrianópolis", 378, "9 de agosto de 378", "antiga", "Edirne, atual Turquia", 41.68, 26.56,
  ["Godos", "Fritigerno", "≈ 15.000 a 20.000", 17500], ["Império Romano do Oriente", "Imperador Valente", "≈ 15.000 a 30.000", 22500], "a",
  "Fugindo dos hunos, os godos entraram no império como refugiados. Maltratados e famintos, eles se revoltaram.",
  ["Valente não quis esperar os reforços do Ocidente, para não dividir a glória.",
   "Os romanos marcharam horas no calor e atacaram, cansados, o círculo de carroças dos godos.",
   "A cavalaria goda, que estava fora buscando comida, voltou e bateu no flanco romano."],
  "Dois terços do exército romano morreram, junto com o imperador.",
  "Roma teve de aceitar povos armados dentro das fronteiras. O Império do Ocidente caiu menos de cem anos depois.");

add("catalaunicos", "Campos Cataláunicos", 451, "20 de junho de 451", "antiga", "Champagne, França", 48.95, 4.36,
  ["Romanos e visigodos", "Aécio e Teodorico I", "dezenas de milhares (incerto)", 50000], ["Hunos e aliados", "Átila", "dezenas de milhares (incerto)", 50000], "a",
  "Átila, o 'flagelo de Deus', invadiu a Gália. O general romano Aécio juntou antigos inimigos de Roma para enfrentá-lo.",
  ["A luta começou pela posse de uma colina no meio do campo, que os aliados tomaram primeiro.",
   "O rei visigodo Teodorico morreu no combate, mas seus guerreiros atacaram com mais fúria ainda.",
   "Átila recuou para o acampamento e mandou erguer uma pira de selas para se queimar caso fosse derrotado."],
  "Átila se retirou da Gália.",
  "Foi uma das últimas vitórias do Império Romano do Ocidente. Átila morreu dois anos depois, e seu império se desfez.");

// ---------- Middle Ages ----------
add("yarmuk", "Yarmuk", 636, "Agosto de 636", "medieval", "Rio Yarmuk, fronteira entre Síria e Jordânia", 32.81, 35.95,
  ["Califado Rashidun", "Khalid ibn al-Walid", "≈ 20.000 a 40.000", 30000], ["Império Bizantino", "Vahan", "≈ 40.000 a 100.000 (fontes divergem)", 70000], "a",
  "Poucos anos depois da morte de Maomé, os exércitos árabes entraram na Síria bizantina.",
  ["Por cinco dias os bizantinos atacaram, e a linha árabe cedeu e voltou várias vezes.",
   "Khalid juntou toda a cavalaria numa reserva móvel, que tapava cada buraco da linha.",
   "No sexto dia ele contra-atacou, tomou a única ponte sobre o desfiladeiro e deixou o exército bizantino sem saída."],
  "O exército bizantino foi destruído.",
  "A Síria e a Palestina passaram ao domínio árabe. Khalid ibn al-Walid nunca perdeu uma batalha.");

add("guadalete", "Guadalete", 711, "Julho de 711", "medieval", "Andaluzia, Espanha", 36.6, -6.0,
  ["Califado Omíada", "Tariq ibn Ziyad", "≈ 7.000 a 12.000", 10000], ["Reino Visigodo", "Rei Rodrigo", "≈ 25.000 (incerto)", 25000], "a",
  "Tariq atravessou o estreito a partir da África. O rochedo onde desembarcou ganhou seu nome: Jabal Tariq, Gibraltar.",
  ["O reino visigodo estava dividido por uma disputa pelo trono.",
   "No meio da batalha, as alas comandadas por rivais do rei Rodrigo o abandonaram.",
   "O centro visigodo foi cercado. Rodrigo desapareceu, e seu corpo nunca foi encontrado."],
  "O reino visigodo desmoronou em poucos anos.",
  "Começaram quase 800 anos de presença muçulmana na Península Ibérica. O português guarda centenas de palavras árabes dessa época.");

add("tours", "Tours (Poitiers)", 732, "Outubro de 732", "medieval", "Entre Tours e Poitiers, França", 46.74, 0.48,
  ["Francos", "Carlos Martel", "≈ 15.000 a 20.000", 17500], ["Califado Omíada", "Abd al-Rahman al-Ghafiqi", "≈ 15.000 a 20.000", 17500], "a",
  "Um exército vindo da Espanha muçulmana avançou pela França em direção à rica abadia de Tours.",
  ["Carlos pôs sua infantaria num terreno alto e arborizado, formada em quadrado, e esperou.",
   "A cavalaria omíada atacou várias vezes, sem conseguir romper a parede de escudos.",
   "Correu a notícia de que os francos atacavam o acampamento com o saque. Parte da cavalaria voltou, e Abd al-Rahman morreu tentando segurar a tropa."],
  "O exército omíada se retirou durante a noite.",
  "Carlos ganhou o apelido 'Martel', o martelo. Seu neto foi Carlos Magno.");

add("talas", "Talas", 751, "Julho de 751", "medieval", "Rio Talas, entre Cazaquistão e Quirguistão", 42.52, 72.23,
  ["Califado Abássida", "Ziyad ibn Salih", "dezenas de milhares (fontes divergem)", 30000], ["China da dinastia Tang", "Gao Xianzhi", "dezenas de milhares (fontes divergem)", 30000], "a",
  "Os dois maiores impérios da época, o árabe e o chinês, se encontraram no meio da Ásia Central.",
  ["A batalha durou cinco dias, sem vantagem clara.",
   "Os carlucos, aliados turcos dos chineses, mudaram de lado e atacaram o exército Tang pelas costas.",
   "Gao Xianzhi escapou com poucos milhares de homens."],
  "Vitória abássida. A expansão chinesa para o oeste parou ali.",
  "A Ásia Central se tornou muçulmana. Segundo a tradição, prisioneiros chineses ensinaram a fazer papel em Samarcanda, e de lá a técnica chegou à Europa.");

add("lechfeld", "Lechfeld", 955, "10 de agosto de 955", "medieval", "Augsburgo, Alemanha", 48.37, 10.9,
  ["Reino Germânico", "Oto I", "≈ 8.000 cavaleiros pesados", 8000], ["Magiares", "Bulcsú e Lél", "≈ 8.000 a 10.000 arqueiros a cavalo", 9000], "a",
  "Havia mais de 50 anos os cavaleiros magiares saqueavam a Europa, da Alemanha à Espanha.",
  ["Os magiares cercavam Augsburgo quando Oto chegou com cavaleiros de todos os ducados alemães.",
   "Um grupo magiar atacou a retaguarda e parou para saquear a bagagem. Foi destruído.",
   "Oto avançou com a cavalaria pesada e manteve a formação, sem cair nas fugas fingidas."],
  "O exército magiar foi destruído na batalha e na perseguição.",
  "Os magiares se fixaram, viraram cristãos e fundaram a Hungria. Oto foi coroado imperador em 962.");

add("manzikert", "Manzikert", 1071, "26 de agosto de 1071", "medieval", "Malazgirt, atual Turquia", 39.146, 42.54,
  ["Império Seljúcida", "Alp Arslan", "≈ 20.000 a 30.000", 25000], ["Império Bizantino", "Romano IV Diógenes", "≈ 40.000 (metade ausente)", 40000], "a",
  "Os turcos seljúcidas faziam incursões na Anatólia, o coração do Império Bizantino. O imperador foi enfrentá-los.",
  ["Romano dividiu o exército, e metade dele nunca apareceu na batalha.",
   "Os arqueiros a cavalo turcos recuaram o dia todo, cansando os bizantinos.",
   "Na hora da retirada, um general rival do imperador levou a reserva embora. Os turcos cercaram o centro."],
  "O imperador foi capturado. Foi tratado com respeito e solto.",
  "A Anatólia se abriu para os turcos e virou a futura Turquia. O pedido de socorro bizantino levou às Cruzadas.");

add("jerusalem1099", "Cerco de Jerusalém", 1099, "7 de junho a 15 de julho de 1099", "medieval", "Jerusalém", 31.777, 35.23,
  ["Cruzados", "Godofredo de Bulhão e Raimundo de Toulouse", "≈ 12.000", 12000], ["Califado Fatímida", "Iftikhar al-Dawla", "alguns milhares", 5000], "a",
  "Depois de três anos de marcha desde a Europa, a Primeira Cruzada chegou ao seu destino.",
  ["Os cruzados chegaram sem comida, sem água e sem madeira para máquinas de cerco.",
   "Navios genoveses trouxeram madeira, e eles construíram duas torres de assalto.",
   "Na noite anterior, mudaram uma torre para um trecho fraco da muralha. Os homens de Godofredo passaram para o muro."],
  "A cidade caiu, e a população muçulmana e judia foi massacrada.",
  "Nasceu o Reino de Jerusalém, que durou 88 anos, até Saladino.");

add("hattin", "Hattin", 1187, "4 de julho de 1187", "medieval", "Galileia, atual Israel", 32.8, 35.44,
  ["Sultanato Aiúbida", "Saladino", "≈ 30.000", 30000], ["Reino de Jerusalém", "Guy de Lusignan", "≈ 20.000", 20000], "a",
  "Saladino tinha unido o Egito e a Síria e cercou a cidade de Tiberíades para atrair o exército cruzado.",
  ["Os cruzados marcharam em pleno verão por uma planície sem água.",
   "Os homens de Saladino atormentaram a coluna o dia todo e, à noite, puseram fogo no capim seco.",
   "De manhã, com sede e sufocados pela fumaça, os cruzados foram cercados num morro de dois picos."],
  "Quase todo o exército cruzado foi morto ou capturado, e a relíquia da Vera Cruz foi tomada.",
  "Jerusalém se rendeu a Saladino três meses depois. A Europa respondeu com a Terceira Cruzada, de Ricardo Coração de Leão.");

add("dannoura", "Dan-no-ura", 1185, "25 de abril de 1185", "medieval", "Estreito de Shimonoseki, Japão", 33.96, 130.95,
  ["Clã Minamoto", "Minamoto no Yoshitsune", "≈ 800 barcos", 800], ["Clã Taira", "Taira no Tomomori", "≈ 500 barcos", 500], "a",
  "Foi a batalha final da guerra entre os dois grandes clãs de samurais do Japão.",
  ["Os Taira conheciam as correntes do estreito e começaram ganhando.",
   "No meio do dia a maré virou e passou a empurrar os barcos Taira. Um general Taira mudou de lado.",
   "Os arqueiros Minamoto miraram nos remadores e timoneiros, e os barcos ficaram à deriva."],
  "O imperador menino Antoku, de seis anos, se afogou nos braços da avó. Muitos Taira se jogaram ao mar.",
  "Os Minamoto criaram o primeiro xogunato. Os samurais governaram o Japão por quase 700 anos.");

add("navas", "Navas de Tolosa", 1212, "16 de julho de 1212", "medieval", "Jaén, Espanha", 38.28, -3.58,
  ["Reinos cristãos ibéricos", "Afonso VIII de Castela, Pedro II de Aragão, Sancho VII de Navarra", "≈ 12.000 a 14.000", 13000], ["Califado Almóada", "Muhammad al-Nasir", "≈ 22.000 a 30.000", 26000], "a",
  "Os almóadas dominavam o sul da Península. Os reis cristãos, que viviam brigando entre si, se uniram numa cruzada.",
  ["Os almóadas bloqueavam o desfiladeiro. Segundo a tradição, um pastor mostrou aos cristãos um caminho escondido pela serra.",
   "A primeira linha cristã quase cedeu. Afonso VIII entrou na luta com toda a reserva.",
   "Sancho de Navarra chegou até a tenda do califa, protegida por guardas acorrentados uns aos outros."],
  "O califa fugiu, e o exército almóada se desfez.",
  "Foi a virada da Reconquista. As correntes da tenda estão até hoje no brasão de Navarra.");

add("kirina", "Kirina", 1235, "c. 1235", "medieval", "Região de Koulikoro, Mali", 12.3, -8.15,
  ["Povos mandingas", "Sundiata Keita", "desconhecido", 0], ["Reino Sosso", "Sumanguru Kanté", "desconhecido", 0], "a",
  "O rei-ferreiro Sumanguru dominava os povos mandingas. Sundiata, um príncipe exilado, voltou para libertá-los.",
  ["O que sabemos vem da tradição oral dos griôs, os contadores de história da África Ocidental.",
   "Sundiata uniu doze reinos mandingas contra os sossos.",
   "Segundo a epopeia, Sumanguru era protegido por magia e só podia ser ferido por uma flecha com esporão de galo branco."],
  "Sumanguru foi derrotado e desapareceu nas montanhas.",
  "Nasceu o Império do Mali, um dos mais ricos da história. Mansa Musa, sobrinho-neto de Sundiata, é citado como o homem mais rico de todos os tempos.");

add("mohi", "Mohi", 1241, "11 de abril de 1241", "medieval", "Rio Sajó, Hungria", 47.98, 20.91,
  ["Império Mongol", "Batu Khan e Subutai", "≈ 30.000 (incerto)", 30000], ["Reino da Hungria", "Rei Béla IV", "≈ 25.000 a 50.000 (incerto)", 35000], "a",
  "Os mongóis invadiram a Europa em várias colunas ao mesmo tempo. Dois dias antes, outra coluna tinha vencido os poloneses em Legnica.",
  ["Batu atacou a ponte do rio com catapultas, o que prendeu a atenção dos húngaros.",
   "Durante a noite, Subutai atravessou o rio mais abaixo e apareceu pela retaguarda.",
   "Os mongóis cercaram o acampamento, mas deixaram uma saída aberta de propósito. Quem fugiu por ela foi caçado por dias."],
  "O exército húngaro foi destruído, e o país foi devastado.",
  "A Europa estava aberta, mas em 1242 os mongóis voltaram para casa depois da morte do grande khan Ogedei.");

add("peipus", "Lago Peipus", 1242, "5 de abril de 1242", "medieval", "Fronteira entre Estônia e Rússia", 58.68, 27.48,
  ["República de Novgorod", "Alexandre Nevsky", "≈ 5.000", 5000], ["Ordem Livônia (cavaleiros teutônicos)", "Hermann de Dorpat", "≈ 2.600", 2600], "a",
  "Cavaleiros cruzados alemães avançavam sobre as terras russas, que já sofriam com os mongóis.",
  ["Alexandre esperou os cavaleiros na margem do lago congelado.",
   "Os cavaleiros atacaram em cunha e furaram o centro russo.",
   "As alas russas se fecharam sobre a cunha, e a cavalaria atacou por trás."],
  "Os cavaleiros fugiram pelo gelo.",
  "A cruzada no leste parou ali. A cena do gelo quebrando ficou famosa no filme de Eisenstein, de 1938, mas é provavelmente lenda.");

add("bagda", "Cerco de Bagdá", 1258, "29 de janeiro a 10 de fevereiro de 1258", "medieval", "Bagdá, Iraque", 33.34, 44.4,
  ["Império Mongol", "Hulagu Khan", "≈ 120.000 a 150.000", 135000], ["Califado Abássida", "Califa al-Mustasim", "≈ 50.000", 50000], "a",
  "Bagdá era a capital do mundo islâmico havia 500 anos, e uma das maiores cidades do planeta.",
  ["O califa se recusou a se submeter e não preparou a defesa.",
   "Os mongóis romperam diques para inundar o exército que saiu da cidade e depois cercaram as muralhas com paliçadas e catapultas.",
   "Em menos de duas semanas a muralha leste caiu, e a cidade se rendeu."],
  "Bagdá foi saqueada por uma semana, e o califa foi executado.",
  "A Casa da Sabedoria e suas bibliotecas foram destruídas. Diz a tradição que o rio Tigre correu preto com a tinta dos livros.");

add("hakata", "Baía de Hakata", 1281, "Junho a agosto de 1281", "medieval", "Kyushu, Japão", 33.62, 130.35,
  ["Japão (xogunato Kamakura)", "Hojo Tokimune", "número desconhecido", 0], ["Império Mongol (dinastia Yuan)", "Kublai Khan", "≈ 140.000 em 3.500 a 4.400 navios (segundo as fontes)", 140000], "a",
  "Kublai Khan já tinha tentado invadir o Japão em 1274. Voltou sete anos depois com uma das maiores frotas da história.",
  ["Os japoneses tinham construído um muro de pedra de 20 km ao longo da baía.",
   "Sem conseguir desembarcar, a frota ficou semanas ancorada, atacada à noite por pequenos barcos de samurais.",
   "Em agosto, um tufão atingiu os navios amarrados uns aos outros."],
  "A maior parte da frota afundou.",
  "Os japoneses chamaram o tufão de 'kamikaze', vento divino. O Japão nunca foi conquistado pelos mongóis.");

add("bannockburn", "Bannockburn", 1314, "23 e 24 de junho de 1314", "medieval", "Stirling, Escócia", 56.093, -3.937,
  ["Reino da Escócia", "Robert the Bruce", "≈ 6.000 a 7.000", 6500], ["Reino da Inglaterra", "Eduardo II", "≈ 20.000 a 25.000", 22500], "a",
  "Os ingleses marcharam para socorrer o castelo de Stirling, cercado pelos escoceses.",
  ["No primeiro dia, um cavaleiro inglês atacou Bruce sozinho. Bruce desviou e o matou com um golpe de machado, diante dos dois exércitos.",
   "Os escoceses lutaram em 'schiltrons', blocos fechados de lanceiros que pareciam ouriços.",
   "A cavalaria inglesa ficou espremida entre riachos e pântanos, sem espaço para atacar."],
  "Eduardo II fugiu do campo, e seu exército se desfez.",
  "A Inglaterra reconheceu a independência da Escócia em 1328.");

add("crecy", "Crécy", 1346, "26 de agosto de 1346", "medieval", "Norte da França", 50.257, 1.887,
  ["Reino da Inglaterra", "Eduardo III", "≈ 12.000 a 14.000", 13000], ["Reino da França", "Filipe VI", "≈ 20.000 a 30.000", 25000], "a",
  "Foi a primeira grande batalha em terra da Guerra dos Cem Anos.",
  ["Os ingleses ocuparam o alto de uma colina, com os cavaleiros a pé e os arqueiros nas pontas.",
   "Os besteiros genoveses, a serviço da França, atiraram primeiro, mas o arco longo inglês alcançava mais longe e era muito mais rápido.",
   "Os cavaleiros franceses atacaram morro acima cerca de quinze vezes, passando por cima dos próprios besteiros."],
  "Milhares de franceses morreram, entre eles grande parte da nobreza.",
  "Arqueiros plebeus derrotaram a cavalaria nobre. O príncipe herdeiro inglês, o Príncipe Negro, lutou ali aos 16 anos.");

add("kulikovo", "Kulikovo", 1380, "8 de setembro de 1380", "medieval", "Rio Don, Rússia", 53.65, 38.65,
  ["Principados russos", "Dmitri de Moscou", "6.000 a 36.000 (estimativas modernas)", 21000], ["Horda Dourada", "Mamai", "até 30.000 (estimativas modernas)", 25000], "a",
  "Os principados russos pagavam tributo aos mongóis havia 140 anos. Dmitri de Moscou parou de pagar.",
  ["Dmitri atravessou o Don e mandou destruir as pontes, para ninguém poder recuar.",
   "A cavalaria da Horda foi empurrando a ala esquerda russa para trás.",
   "Um regimento russo estava escondido num bosque. Saiu na hora certa e atacou os mongóis pelas costas."],
  "Mamai fugiu. Dmitri ganhou o nome de 'Donskoi', do Don.",
  "O domínio mongol ainda durou cem anos, mas Moscou virou a líder das terras russas.");

add("aljubarrota", "Aljubarrota", 1385, "14 de agosto de 1385", "medieval", "Centro de Portugal", 39.64, -8.84,
  ["Reino de Portugal", "D. João I e Nuno Álvares Pereira", "≈ 6.500", 6500], ["Reino de Castela", "Juan I de Castela", "≈ 30.000", 30000], "a",
  "O rei de Portugal morreu sem filho homem, e o rei de Castela reclamou o trono. Os portugueses aclamaram D. João, mestre de Avis.",
  ["Nuno Álvares escolheu uma colina estreita, protegida por riachos nos lados.",
   "Os portugueses cavaram fossos e covas escondidas na frente da posição, com arqueiros ingleses nas alas.",
   "A cavalaria castelhana atacou pela frente apertada, caiu nas armadilhas e se amontoou."],
  "O exército castelhano fugiu em menos de uma hora de luta principal.",
  "Portugal garantiu a independência. A dinastia de Avis lançou as navegações que chegaram ao Brasil.");

add("kosovo", "Kosovo", 1389, "15 de junho de 1389", "medieval", "Campo dos Melros, Kosovo", 42.69, 21.12,
  ["Império Otomano", "Sultão Murad I", "≈ 27.000 a 40.000", 33000], ["Principado da Sérvia e aliados", "Príncipe Lázaro", "≈ 12.000 a 30.000", 21000], "",
  "Os otomanos avançavam pelos Bálcãs. Os sérvios e seus vizinhos tentaram barrá-los.",
  ["A cavalaria pesada sérvia rompeu a ala esquerda otomana.",
   "Os otomanos contra-atacaram pelo outro lado, comandados por Bayezid, filho do sultão.",
   "O sultão Murad foi morto, segundo a tradição por um cavaleiro sérvio, Miloš Obilić, que fingiu desertar. O príncipe Lázaro foi capturado e executado."],
  "Os dois chefes morreram e os dois exércitos saíram arrasados. Mas os sérvios não tinham como repor as perdas.",
  "A Sérvia virou vassala dos otomanos. A batalha é o centro da memória nacional sérvia até hoje.");

add("ankara", "Ancara", 1402, "20 ou 28 de julho de 1402", "medieval", "Ancara, Turquia", 40.07, 32.95,
  ["Império Timúrida", "Tamerlão (Timur)", "≈ 140.000", 140000], ["Império Otomano", "Sultão Bayezid I", "≈ 85.000", 85000], "a",
  "Dois conquistadores turcos se enfrentaram: Bayezid, o 'Relâmpago', e Tamerlão, que já tinha tomado da Índia à Síria.",
  ["Tamerlão deu a volta no exército otomano e ocupou a posição dele, com a água.",
   "Os otomanos chegaram exaustos e com sede, depois de marchar no calor de julho.",
   "Durante a batalha, os cavaleiros tártaros de Bayezid passaram para o lado de Tamerlão."],
  "Bayezid foi capturado e morreu no cativeiro.",
  "O Império Otomano mergulhou em onze anos de guerra civil. Constantinopla ganhou meio século de sobrevida.");

add("grunwald", "Grunwald", 1410, "15 de julho de 1410", "medieval", "Norte da Polônia", 53.483, 20.094,
  ["Polônia e Lituânia", "Ladislau II Jagelão e Vytautas", "16.000 a 39.000 (estimativas)", 27500], ["Ordem Teutônica", "Ulrich von Jungingen", "11.000 a 27.000 (estimativas)", 19000], "a",
  "Os Cavaleiros Teutônicos, uma ordem de monges guerreiros, dominavam o Báltico. Polônia e Lituânia se uniram contra eles.",
  ["O grão-mestre mandou duas espadas de presente ao rei polonês, como provocação para começar logo.",
   "A cavalaria lituana recuou. Parte dos teutônicos saiu atrás dela e deixou a formação.",
   "Os lituanos voltaram. O grão-mestre atacou com a reserva e morreu cercado."],
  "A liderança da Ordem foi quase toda morta.",
  "Uma das maiores batalhas da Europa medieval. A Ordem Teutônica nunca recuperou o poder.");

add("orleans", "Cerco de Orléans", 1429, "Outubro de 1428 a 8 de maio de 1429", "medieval", "Orléans, França", 47.9, 1.91,
  ["Reino da França", "Joana d'Arc e Jean de Dunois", "≈ 6.400 soldados e os moradores", 6400], ["Reino da Inglaterra", "Conde de Suffolk e John Talbot", "≈ 5.000", 5000], "a",
  "A França estava perdendo a Guerra dos Cem Anos. Orléans era a última barreira antes do sul.",
  ["Depois de seis meses de cerco, chegou uma camponesa de 17 anos que dizia ouvir vozes de santos.",
   "Joana convenceu os capitães a atacar os fortes ingleses um a um, em vez de só defender.",
   "No assalto ao forte principal, levou uma flechada no ombro e voltou à luta no mesmo dia."],
  "O cerco foi quebrado nove dias depois da chegada de Joana.",
  "Dois meses depois, Carlos VII foi coroado em Reims. Joana foi queimada pelos ingleses em 1431, e a França ganhou a guerra em 1453.");

add("constantinopla", "Queda de Constantinopla", 1453, "6 de abril a 29 de maio de 1453", "medieval", "Istambul, Turquia", 41.013, 28.95,
  ["Império Otomano", "Sultão Mehmed II", "≈ 80.000", 80000], ["Império Bizantino", "Constantino XI", "≈ 7.000", 7000], "a",
  "Do Império Romano do Oriente restava pouco mais que a capital, protegida pelas muralhas mais famosas do mundo.",
  ["Mehmed, de 21 anos, trouxe canhões gigantes, que bateram nas muralhas por semanas.",
   "Uma corrente fechava o porto. Os otomanos arrastaram cerca de 70 navios por terra, sobre troncos untados, e os puseram na água atrás dela.",
   "No assalto final, o comandante genovês da defesa foi ferido, e os janízaros entraram por uma brecha."],
  "A cidade caiu. O último imperador morreu lutando nas muralhas.",
  "Acabou o Império Romano, depois de quase 1.500 anos. Muitos historiadores marcam ali o fim da Idade Média.");

add("granada", "Tomada de Granada", 1492, "Abril de 1491 a 2 de janeiro de 1492", "medieval", "Granada, Espanha", 37.177, -3.588,
  ["Castela e Aragão", "Fernando e Isabel", "≈ 50.000 a 80.000", 65000], ["Emirado de Granada", "Boabdil (Muhammad XII)", "guarnição e moradores da cidade (número desconhecido)", 0], "a",
  "Granada era o último reino muçulmano da Península Ibérica.",
  ["Os Reis Católicos cercaram a cidade para vencê-la pela fome.",
   "Quando o acampamento pegou fogo, eles o reconstruíram em pedra, como uma cidade inteira, Santa Fé, para mostrar que não iam embora.",
   "Sem esperança de socorro, Boabdil negociou a rendição."],
  "Boabdil entregou as chaves da Alhambra em 2 de janeiro de 1492.",
  "Foi o fim da Reconquista, depois de 780 anos. No mesmo acampamento, meses depois, a rainha Isabel aprovou a viagem de Colombo.");
