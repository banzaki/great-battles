// Great-battles pack (part 31): Plevna (1877), Port Arthur (1904-05), Mukden (1905), Brusilov Offensive (1916), Caporetto (1917).
// Uses add() from battles2.js. Troop numbers are historians' estimates and sources disagree; ranges are flagged as such.
// Mukden (1905) and Caporetto (1917) have only hidden stubs in battles_wd.js (ids wd...), so they are written here with new ids.
// Dates for Plevna are in the Gregorian calendar (Russian sources of the time used the Julian one, 12 days behind).

add("plevna", "Cerco de Plevna", 1877, "20 de julho a 10 de dezembro de 1877", "moderna", "Plevna (Pleven), Bulgária", 43.417, 24.617,
  ["Rússia e Romênia", "Grão-duque Nicolau, Carol I da Romênia e Eduard Totleben", "≈ 100.000 a 130.000 no auge (fontes divergem)", 115000], ["Império Otomano", "Osman Nuri Pasha", "≈ 35.000 a 50.000 (fontes divergem)", 42000], "a",
  "Em 1877, a Rússia atravessou o Danúbio para libertar os cristãos dos Bálcãs do domínio otomano. Osman Pasha chegou antes e transformou a cidade de Plevna numa fortaleza de trincheiras e redutos.",
  ["Três assaltos de frente, em 20 de julho, 30 de julho e 11 de setembro, fracassaram com perdas pesadas. No terceiro, russos e romenos tomaram alguns redutos, mas só conseguiram manter um.",
   "O general Totleben, o engenheiro que defendera Sebastopol na Guerra da Crimeia, mandou parar os assaltos e cercar a cidade por completo. Ao fim de outubro, a estrada de abastecimento estava cortada.",
   "Sem comida nem munição, Osman tentou romper o cerco na noite de 9 para 10 de dezembro. Foi ferido, os otomanos recuaram e ele se rendeu."],
  "Osman e a guarnição se renderam em 10 de dezembro, com mais de 40.000 prisioneiros (entre eles civis). Os russos seguiram para o sul.",
  "Plevna abriu o caminho para Constantinopla e para a independência da Bulgária. Seus defensores, com fuzis de repetição e trincheiras, mostraram à Europa como a infantaria de frente estava ficando vulnerável.");

add("portarthur", "Cerco de Port Arthur", 1904, "1º de agosto de 1904 a 2 de janeiro de 1905", "moderna", "Port Arthur (Lüshun), Manchúria, atual China", 38.8, 121.25,
  ["Japão", "General Nogi Maresuke (3º Exército)", "≈ 90.000 a 150.000 (fontes divergem)", 120000], ["Império Russo", "General Anatoli Stessel, com Roman Kondratenko", "≈ 50.000 homens, incluindo marinheiros, e ≈ 500 canhões", 50000], "a",
  "Port Arthur era a base da frota russa do Pacífico. Enquanto ela existisse, a frota ameaçava as linhas de transporte do exército japonês na Manchúria, e a base tinha de cair.",
  ["Em agosto de 1904, os assaltos de frente do general Nogi contra as colinas e os fortes do leste custaram mais de 18.000 homens e quase nada renderam. Ele passou então a cavar trincheiras e túneis até os fortes.",
   "No fim de outubro, um novo assalto geral falhou. De 26 de novembro a 5 de dezembro, depois de muitas mortes, os japoneses tomaram a colina de 203 Metros, de onde dava para ver o porto.",
   "Obuses de 280 mm, guiados por observadores no alto da colina, afundaram a frota russa ancorada. Stessel pediu a rendição em 2 de janeiro de 1905, e o acordo foi assinado em 5 de janeiro."],
  "Os japoneses tomaram a base e a frota. A Rússia perdeu ≈ 31.000 homens (mortos e feridos) e ≈ 24.000 prisioneiros. O Japão perdeu ≈ 57.800 homens (mortos, feridos e desaparecidos), além de dezenas de milhares de doentes.",
  "O Terceiro Exército ficou livre para marchar para o norte e lutar em Mukden. Foi um ensaio de trincheiras, arame farpado, metralhadoras e artilharia pesada, que a Europa veria em escala maior dez anos depois.");

add("brusilov", "Ofensiva Brusilov", 1916, "4 de junho a 20 de setembro de 1916", "contemporanea", "Volínia e Galícia Oriental, atual Ucrânia", 50.75, 25.33,
  ["Império Russo", "General Aleksei Brusilov (Frente Sudoeste)", "≈ 630.000 no início (573.000 de infantaria e 60.000 de cavalaria)", 630000], ["Áustria-Hungria, com reforços alemães", "Arquiduque José Fernando, Böhm-Ermolli, Linsingen e outros", "≈ 480.000 no início (450.000 de infantaria e 30.000 de cavalaria)", 480000], "a",
  "Em 1916, os aliados combinaram ataques simultâneos contra as Potências Centrais. O general Brusilov propôs atacar a Áustria-Hungria em toda a sua frente, em vez de concentrar tudo num só ponto.",
  ["Em 4 de junho, quatro exércitos russos atacaram ao mesmo tempo, depois de uma preparação de artilharia curta e precisa. Os austro-húngaros, surpreendidos, perderam as duas primeiras linhas e Lutsk em poucos dias.",
   "Em duas semanas, os austro-húngaros tinham perdido cerca de 205.000 homens, 150.000 deles prisioneiros. A Alemanha mandou divisões para o leste, e o ataque que a Frente Oeste russa devia fazer, ao norte, foi fraco e tardio.",
   "A ofensiva perdeu força em julho e agosto diante de Kovel, e parou no fim de setembro, em chuva e lama, depois de ganhar a Galícia Oriental e parte da Bucovina."],
  "Vitória russa, a maior sobre as Potências Centrais desde o começo da guerra de trincheiras, segundo o historiador John Keegan. As baixas são muito discutidas: de 1 a 1,4 milhão de russos, e mais de 600.000 austro-húngaros, além de 150.000 a 350.000 alemães.",
  "Obrigou a Alemanha a parar o ataque a Verdun e quebrou o exército austro-húngaro, que passou a depender dos alemães. Convenceu a Romênia a entrar na guerra, com resultado desastroso. Foi o último grande esforço do exército russo antes da revolução.");

add("mukden", "Batalha de Mukden", 1905, "20 de fevereiro a 10 de março de 1905", "moderna", "Mukden (Shenyang), Manchúria, atual China", 41.8, 123.4,
  ["Japão", "Marechal Ōyama Iwao", "≈ 270.000", 270000], ["Império Russo", "General Aleksei Kuropatkin", "≈ 250.000 a 340.000 (fontes divergem)", 295000], "a",
  "Depois da queda de Port Arthur, o Japão podia reforçar seu exército com o Terceiro Exército de Nogi. Ōyama quis acabar com o exército russo antes que chegassem reforços pela ferrovia Transiberiana.",
  ["Em 20 de fevereiro, o exército japonês atacou o lado leste da linha russa, que tinha uns 140 km, e Kuropatkin, que temia mais esse lado, mandou tropas para lá.",
   "Em 27 de fevereiro, o Terceiro Exército de Nogi, escondido atrás de outro exército, deu a volta pelo oeste, enquanto Nozu prendia o centro com artilharia pesada.",
   "Kuropatkin ficou trocando tropas de um lado para o outro, e o contra-ataque russo de 5 de março falhou. Em 9 de março, ele mandou recuar. Os japoneses entraram em Mukden em 10 de março."],
  "Vitória japonesa, mas incompleta: o exército russo escapou de ser destruído. Perdas: ≈ 70.000 japoneses e ≈ 89.000 russos (mortos, feridos e desaparecidos), entre eles 20.000 a 25.000 prisioneiros.",
  "Foi a maior batalha da guerra e a maior batalha moderna antes de 1914. Kuropatkin foi substituído, e a derrota russa preparou o terreno para o desastre naval de Tsushima, quatro meses depois.");

add("caporetto", "Batalha de Caporetto", 1917, "24 de outubro a 19 de novembro de 1917", "contemporanea", "Caporetto (Kobarid), Eslovênia, na época Áustria-Hungria", 46.25, 13.58,
  ["Áustria-Hungria e Alemanha", "General Otto von Below (14º Exército)", "≈ 353.000 no ataque inicial (fontes divergem)", 353000], ["Itália", "General Luigi Cadorna, com Luigi Capello (2º Exército)", "≈ 257.000 do 2º Exército no combate (≈ 670.000 no exército todo)", 257000], "a",
  "Depois da 11ª batalha do Isonzo, a Áustria-Hungria estava exausta e pediu ajuda à Alemanha. Os alemães mandaram divisões e escolheram um setor calmo, em Caporetto, para um golpe de surpresa.",
  ["Às 2h de 24 de outubro, os alemães lançaram gás sobre o norte do setor. Às 6h41, mais de 2.000 canhões abriram fogo e, às 8h, a infantaria avançou, com tropas de assalto que se infiltravam pelos pontos fracos.",
   "A linha do 2º Exército italiano foi rompida, e alguns atacantes avançaram uns 25 km no primeiro dia. Em 30 de outubro, Cadorna ordenou a retirada para o Tagliamento.",
   "Os italianos levaram quatro dias para atravessar o Tagliamento e, por volta de 10 de novembro, se firmaram no Piave e no monte Grappa."],
  "Vitória das Potências Centrais, que avançaram uns 150 km. Os italianos perderam cerca de 10.000 a 13.000 mortos, 30.000 feridos e 265.000 a 300.000 prisioneiros, e milhares de canhões.",
  "É a maior derrota da história militar italiana e deu à língua italiana a palavra 'Caporetto', sinônimo de desastre. Cadorna foi substituído por Armando Diaz, e a linha do Piave aguentou.");
