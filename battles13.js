// Early Islamic pack, part 1: Badr, Uhud, the Trench (Medina, 624-627), al-Qadisiyyah (636) and Nahavand (642).
// Uses add() from battles2.js. Almost everything we know comes from Arabic works written generations after the
// events (the sira of Ibn Ishaq, al-Waqidi, al-Tabari), so numbers are flagged as traditional and uncertain dates are flagged.
// The Wikidata seeds for Badr, Uhud and the Trench (battles_wd.js) only show up with ?todas; these cards are the written ones.

// ---------- Muhammad in Medina ----------
add("badr", "Badr", 624, "13 de março de 624 (17 do Ramadã do ano 2 da Hégira; data tradicional)", "medieval", "Badr, a sudoeste de Medina, Arábia Saudita", 23.733, 38.767,
  ["Comunidade de Medina", "Maomé", "≈ 313 homens (segundo a tradição)", 313], ["Coraixitas de Meca", "Amr ibn Hisham (Abu Jahl)", "≈ 950 a 1.300 (segundo a tradição)", 1000], "a",
  "Maomé saiu de Medina para interceptar uma grande caravana de Meca que voltava da Síria. A caravana desviou, e quem apareceu foi um exército coraixita.",
  ["O chefe da caravana, Abu Sufyan, mudou de rota e pediu ajuda a Meca. Um exército saiu para defendê-la e seguiu até Badr, mesmo depois de a caravana estar a salvo.",
   "Os muçulmanos ocuparam o poço mais próximo dos inimigos. Pela tradição, a luta começou com três duelos entre campeões, e os de Medina venceram a maioria deles.",
   "Houve troca de flechas e uma carga coraixita. O contra-ataque muçulmano rompeu a linha, e a batalha durou poucas horas."],
  "Cerca de 70 coraixitas morreram e outros 70 foram capturados. Do lado muçulmano, morreram 14.",
  "Foi a primeira grande vitória da comunidade de Medina e abriu a guerra com Meca. Muitos chefes coraixitas morreram, e Abu Sufyan passou a liderar a cidade.");

add("uhud", "Uhud", 625, "23 de março de 625 (7 do Shawwal do ano 3 da Hégira; data tradicional)", "medieval", "Monte Uhud, ao norte de Medina, Arábia Saudita", 24.503, 39.612,
  ["Coraixitas de Meca", "Abu Sufyan, com Khalid ibn al-Walid na cavalaria", "≈ 3.000 (segundo a tradição)", 3000], ["Comunidade de Medina", "Maomé", "≈ 700 (≈ 1.000 antes da saída de um terço, segundo a tradição)", 700], "a",
  "Um ano depois de Badr, Meca reuniu cerca de 3.000 homens para se vingar e marchou até Medina.",
  ["Maomé posicionou os muçulmanos na encosta do monte Uhud e pôs 50 arqueiros numa colina rochosa, com ordem de não sair dali de jeito nenhum.",
   "Os muçulmanos avançaram e pareciam vencer. Muitos arqueiros desceram para recolher o butim.",
   "A cavalaria de Khalid ibn al-Walid deu a volta, dominou a colina e atacou a retaguarda. Correu o boato de que Maomé tinha morrido, mas ele só estava ferido."],
  "Morreram de 62 a 75 muçulmanos e de 22 a 35 coraixitas (números tradicionais). Os coraixitas não tentaram entrar em Medina e voltaram para casa.",
  "Os historiadores divergem: para uns foi uma vitória coraixita, para outros um empate sem resultado. Meca não destruiu Maomé, e a lição dos arqueiros ficou no Alcorão.");

add("khandaq", "Batalha da Trincheira (Cerco de Medina)", 627, "Março a abril de 627 (data tradicional; alguns autores indicam janeiro)", "medieval", "Medina, Arábia Saudita", 24.467, 39.6,
  ["Comunidade de Medina", "Maomé; trincheira proposta por Salman, o Persa", "≈ 3.000 (segundo a tradição)", 3000], ["Confederados (Meca, Ghatafan e aliados)", "Abu Sufyan", "≈ 7.500 a 10.000 (segundo a tradição)", 8750], "a",
  "Meca juntou tribos aliadas e marchou contra Medina com um exército muito maior que o dos defensores.",
  ["Por sugestão de Salman, o Persa, os muçulmanos cavaram uma trincheira em seis dias. A cavalaria dos atacantes não conseguiu atravessá-la.",
   "O cerco durou cerca de três semanas, só com trocas de flechas e insultos. Os alimentos acabaram dos dois lados, e os atacantes passaram a desconfiar uns dos outros.",
   "Uma tempestade apagou as fogueiras e derrubou as tendas dos atacantes. Na noite seguinte, eles foram embora."],
  "Os confederados recuaram sem tomar a cidade. As baixas foram mínimas: de 5 a 6 muçulmanos e 3 atacantes.",
  "Meca perdeu prestígio e o comércio com a Síria. Depois, os muçulmanos cercaram a tribo judaica Banu Qurayza, que tinha sido acusada de se aliar aos atacantes.");

// ---------- The conquest of Persia ----------
add("qadisiyya", "Al-Qadisiyyah", 636, "16 a 19 de novembro de 636 (data tradicional; fontes dão de 635 a 637)", "medieval", "Perto de Cufa, Iraque", 31.9, 44.4,
  ["Califado Rashidun", "Sa'd ibn Abi Waqqas", "≈ 30.000 a 36.000 (segundo as crônicas)", 33000], ["Império Sassânida", "Rostam Farrokhzad", "≈ 30.000 a 60.000 (as crônicas falam em mais)", 45000], "a",
  "Depois da morte de Maomé, os árabes tinham tomado a Síria dos bizantinos. O califa Umar mandou o exército de Sa'd contra o Iraque, a região mais rica do Império Persa.",
  ["Rostam, o comandante persa, atravessou um canal e atacou. Os persas tinham cerca de 33 elefantes, que levaram os cavalos árabes ao pânico no primeiro dia.",
   "No segundo dia chegaram reforços da Síria, vindos da batalha de Yarmuk, e no terceiro os árabes cegaram os elefantes. A luta seguiu a noite inteira.",
   "No quarto dia, durante uma tempestade de areia, Rostam foi morto. A linha persa se desfez e fugiu para a ponte."],
  "O exército persa foi destruído. Ctesifonte, a capital, caiu em março de 637.",
  "O Iraque passou aos árabes e a Pérsia ficou aberta à conquista. A data é incerta: as crônicas dão anos diferentes, e o dia a dia da batalha vem de relatos muito posteriores.");

add("nahavand", "Nahavand", 642, "642 (data incerta; alguns autores indicam dezembro de 641)", "medieval", "Nahavand, perto de Hamadã, Irã", 34.19, 48.37,
  ["Califado Rashidun", "Nu'man ibn Muqarrin", "≈ 30.000 (estimativa moderna)", 30000], ["Império Sassânida", "Firuzan (Piruz Khosrow)", "≈ 50.000 a 150.000 (fontes divergem)", 100000], "a",
  "Depois de Qadisiyyah e da queda de Ctesifonte, o xá Yazdegerd III recuou para o planalto iraniano e montou um novo exército em Nahavand.",
  ["Os persas ocuparam uma posição forte, que os árabes não queriam atacar de frente.",
   "Depois de dias de escaramuças, os árabes recuaram de propósito para atrair os persas para o campo aberto.",
   "Os persas saíram atrás deles e se esticaram pelo terreno acidentado. Os árabes deram meia-volta e os cercaram."],
  "O exército sassânida foi quase todo destruído. Nu'man morreu na luta, assim como (segundo alguns relatos) o comandante persa.",
  "Os muçulmanos a chamaram de 'vitória das vitórias'. Foi a última grande batalha dos sassânidas: Yazdegerd fugiu para o leste e morreu em 651, sem reaver o império.");
