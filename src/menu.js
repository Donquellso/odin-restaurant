import './style.css';

let menu = document.createElement('div');
menu.classList.add('menu');
menu.innerHTML = `
<div id="tile">
  <h3>Przystawki</h3>
  <ul>
    <li>Krewetki w sosie czosnkowym - Soczyste krewetki smażone na maśle i podane w aromatycznym sosie czosnkowym. Cena: 28 zł.</li>
    <li>Sałatka Caprese - Świeże plastry pomidorów, mozzarelli i bazylii polane delikatnym sosem balsamicznym. Cena: 22 zł.</li>
  </ul>
</div>

<div id="tile">
  <h3>Dania Główne:</h3>
  <ul>
    <li>Stek wołowy z puree ziemniaczanym - Soczysty stek wołowy z dodatkiem sosu pieprzowego, podany z kremowym puree ziemniaczanym i sałatką z rukoli. Cena: 65 zł.</li>
    <li>Krewetki w czerwonym curry - Krewetki duszone w aromatycznym sosie curry z dodatkiem warzyw sezonowych i ryżu basmati. Cena: 55 zł.</li>
    <li>Ratatouille z grillowanym serem feta - Klasyczne francuskie danie z duszonych warzyw podane z grillowanym serem feta i świeżym pieczywem. Cena: 45 zł.</li>
  </ul>
</div>

<div id="tile">
  <h3>Dania Dla Dzieci:</h3>
  <ul>
    <li>Kurczak Nuggets z frytkami - Krakersowe kawałki kurczaka podawane z chrupiącymi frytkami i ketchupem. Cena: 30 zł.</li>
    <li>Makaron Alfredo - Makaron penne w sosie śmietanowym z serem parmezan i kawałkami kurczaka. Cena: 28 zł.</li>
  </ul>
</div>

<div id="tile">
  <h3>Desery:</h3>
  <ul>
    <li>Tiramisu - Tradycyjne włoskie tiramisu z delikatnym kakaowym pyłem na wierzchu. Cena: 20 zł.</li>
    <li>Sernik New York - Klasyczny sernik z dodatkiem sosu malinowego i bitą śmietaną. Cena: 18 zł.</li>
  </ul>
</div>

<div id="tile">
  <h3>Napoje:</h3>
  <ul>
    <li>Wino Czerwone / Białe / Różowe - Wybór z naszej bogatej karty win. Cena: od 30 zł za butelkę.</li>
    <li>Koktajle Owocowe - Świeże i orzeźwiające koktajle z sezonowych owoców. Cena: 15 zł.</li>
  </ul>
</div>

<div id="tile">
  <h3>Zupy:</h3>
  <ul>
    <li>Zupa krem z dyni - Klasyczna zupa krem z dyni podawana z prażonymi pestkami dyni. Cena: 18 zł.</li>
    <li>Rosół z makaronem - Domowy rosół z kawałkami kurczaka i makaronem. Cena: 16 zł.</li>
  </ul>
</div>
`;

export default menu;
