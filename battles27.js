// Great-battles pack (part 2): Poitiers, Varna, White Mountain, Lützen, Naseby.
// Uses add() from battles2.js. Chronicle and disputed numbers are flagged as uncertain.
// Checked against the English, Portuguese, Polish, Czech and Swedish Wikipedia articles and the works they cite.
// Lützen is dated on the Gregorian calendar (6 November on the Julian calendar used in Sweden then).

// ---------- The Hundred Years' War ----------
add("poitiers", "Poitiers", 1356, "19 de setembro de 1356", "medieval", "Floresta de Nouaillé, perto de Poitiers, França", 46.522, 0.403,
  ["Exército anglo-gascão", "Eduardo, o Príncipe Negro", "≈ 6.000 (cerca de 3.000 homens de armas, 2.000 arqueiros e 1.000 infantes gascões)", 6000], ["Reino da França", "João II", "≈ 14.000 a 16.000 (estimativa dos historiadores modernos)", 15000], "a",
  "O Príncipe Negro saqueava o sul da França com um exército pequeno. O rei João II correu atrás dele e o alcançou perto de Poitiers.",
  ["Os ingleses se entrincheiraram atrás de uma sebe, com um pântano de um lado. Os franceses, quase todos a pé, atacaram em quatro levas.",
   "Duas levas foram rechaçadas, e metade da terceira foi embora do campo. Na quarta, o rei João avançou com a oriflama, o sinal de que não haveria prisioneiros.",
   "Uma pequena força montada, comandada pelo captal de Buch, deu a volta e apareceu na retaguarda francesa. A linha do rei se quebrou."],
  "O rei João II e seu filho Filipe foram capturados. Morreram cerca de 2.500 homens de armas franceses, contra umas poucas dezenas de homens de armas ingleses.",
  "A França ficou sem rei e entrou em crise: veio a Jacquerie, e o resgate de 3 milhões de escudos fez parte do tratado de Brétigny (1360).");

// ---------- The Crusade of Varna ----------
add("varna", "Varna", 1444, "10 de novembro de 1444", "medieval", "Perto de Varna, atual Bulgária", 43.22, 27.86,
  ["Cruzados (Hungria e Polônia)", "Rei Ladislau III e João Hunyadi", "≈ 16.000 a 20.000 (as fontes variam)", 18000], ["Império Otomano", "Sultão Murad II", "≈ 40.000 a 60.000 (as fontes variam)", 50000], "b",
  "Os húngaros e poloneses tinham assinado uma trégua de dez anos com os otomanos, mas o legado papal convenceu o rei de que ela não valia. Eles marcharam até o mar Negro.",
  ["Os cruzados ficaram encurralados entre o mar, um lago e o exército do sultão. Hunyadi e o rei rejeitaram a defesa atrás de carroças proposta pelo cardeal Cesarini.",
   "A ala direita cristã se desfez, e o cardeal morreu. Na esquerda, o ataque otomano foi rechaçado por um tempo.",
   "Sem esperar Hunyadi, o rei Ladislau galopou com cerca de 500 cavaleiros poloneses até perto da tenda do sultão. Seu cavalo caiu, e ele sumiu."],
  "O exército cruzado foi quase aniquilado e o rei morreu. As baixas são muito discutidas; os otomanos também sofreram perdas pesadas.",
  "Sem o rei, a Hungria e a Polônia ficaram sem comando. A derrota desanimou a Europa e ninguém mandou ajuda séria a Constantinopla, que caiu em 1453.");

// ---------- The Thirty Years' War ----------
add("montanhabranca", "Montanha Branca", 1620, "8 de novembro de 1620", "moderna", "Perto de Praga, atual Tchéquia", 50.078, 14.319,
  ["Habsburgos e Liga Católica", "Conde de Bucquoy e conde de Tilly", "≈ 23.000 a 33.000 (as fontes variam)", 28000], ["Estados boêmios e Palatinado", "Cristiano de Anhalt", "≈ 15.000 a 21.000", 18000], "a",
  "Os nobres protestantes da Boêmia tinham expulsado os Habsburgos e coroado Frederico V do Palatinado. O imperador Fernando II mandou o exército para retomar o reino.",
  ["Os boêmios esperaram numa colina baixa, a oeste de Praga, com a ala direita encostada no muro de um parque de caça.",
   "O primeiro ataque imperial foi rechaçado, mas a cavalaria húngara, que estava na reserva, se retirou, e a ala esquerda boêmia desabou.",
   "Os imperiais avançaram sobre o resto da linha e tomaram a artilharia. A batalha durou pouco mais de uma hora, segundo as fontes."],
  "A Boêmia foi derrotada e Frederico fugiu de Praga. Os mortos são muito discutidos: de uns 1.600 a mais de 4.000 boêmios, e de algumas centenas a cerca de 2.000 imperiais.",
  "A revolta acabou. Em 1621, 27 líderes foram executados em Praga, e a nobreza protestante foi para o exílio. A Boêmia foi recatolicizada, e a Guerra dos Trinta Anos se espalhou.");

add("lutzen", "Lützen", 1632, "16 de novembro de 1632 (6 de novembro no calendário juliano)", "moderna", "Lützen, Saxônia, atual Alemanha", 51.242, 12.14,
  ["Suécia e aliados protestantes", "Rei Gustavo Adolfo", "≈ 19.000 homens e 60 canhões", 19000], ["Império e Liga Católica", "Albrecht von Wallenstein", "≈ 13.000 a 15.000 no início, mais cerca de 5.800 de Pappenheim chegando depois (as fontes variam)", 18000], "a",
  "Gustavo Adolfo avançava pela Saxônia, e Wallenstein veio detê-lo. Achando que o ano de campanha tinha acabado, Wallenstein mandou Pappenheim com parte das tropas para Halle.",
  ["Uma neblina densa, somada à fumaça de Lützen em chamas, atrasou o ataque sueco até cerca das 11h.",
   "Gustavo Adolfo morreu no meio da fumaça, depois que a cavalaria de Pappenheim chegou e a luta virou uma confusão. Pappenheim também foi mortalmente ferido.",
   "Bernardo de Saxe-Weimar assumiu e tomou a bateria dos moinhos. Ao anoitecer, Wallenstein se retirou e deixou os canhões."],
  "A maior parte dos historiadores dá a vitória aos suecos, que ficaram com o campo e os canhões, mas a um custo enorme. As baixas são discutidas: perto de 5.000 de cada lado, segundo muitas contagens.",
  "A morte do rei foi um golpe para os protestantes. Mesmo assim, o chanceler Oxenstierna manteve a Suécia na guerra. Wallenstein foi assassinado em 1634.");

// ---------- The English Civil War ----------
add("naseby", "Naseby", 1645, "14 de junho de 1645", "moderna", "Naseby, Northamptonshire, Inglaterra", 52.4, -0.98,
  ["Parlamento (Exército de Novo Modelo)", "Sir Thomas Fairfax e Oliver Cromwell", "≈ 13.500 a 14.000 (inclusive 700 a 1.000 dragões)", 13700], ["Realistas", "Rei Carlos I e príncipe Rupert", "≈ 7.400 a 8.600", 8000], "a",
  "O Exército de Novo Modelo, recém-criado, perseguia o exército do rei, que acabara de tomar Leicester. O rei resolveu lutar.",
  ["A infantaria realista atacou primeiro e empurrou a infantaria do Parlamento. Rupert varreu a cavalaria de Ireton e saiu atrás dela até a bagagem inimiga.",
   "Na outra ponta, Cromwell derrotou a cavalaria de Langdale e virou contra o centro realista. Os dragões de Okey, escondidos nas sebes, atacaram o flanco.",
   "A infantaria do rei, sem a cavalaria de Rupert, foi cercada. Quando ele voltou, já era tarde."],
  "O exército do rei foi destruído: mais de 4.500 prisioneiros, quase toda a infantaria e toda a artilharia. O Parlamento perdeu algumas centenas de homens.",
  "O rei nunca mais teve um exército de campo igual. Os papéis dele, tomados na bagagem, foram publicados e provaram que negociava com católicos irlandeses e estrangeiros. A guerra acabou em um ano.");
