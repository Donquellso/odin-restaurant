import './style.css';
import dish1 from './menu-img/1.jpeg';
import dish2 from './menu-img/2.jpeg';
import dish3 from './menu-img/3.jpeg';
import dish4 from './menu-img/4.jpeg';
import dish5 from './menu-img/5.jpeg';
import dish6 from './menu-img/6.jpeg';

let menu = document.createElement('div');
menu.classList.add('menu');

let tile1 = document.createElement('div');
tile1.classList.add('tile');
menu.appendChild(tile1);

let tilename = document.createElement('h3');
let tilediv = document.createElement('div');
tilediv.classList.add('tilediv');
tilename.textContent = 'Krewetki w sosie czosnkowym';
tilename.classList.add('tilename');
let tileprice = document.createElement('h3');
tileprice.textContent = '28 zł'; 
tileprice.classList.add('tileprice');
let tileimg = document.createElement('img');
tileimg.src = dish1;
tileimg.classList.add('tileimg');
tileimg.style.width = '100%';
tileimg.style.height = 'auto';

tilediv.appendChild(tilename);
tilediv.appendChild(tileprice);

tile1.appendChild(tileimg);
tile1.appendChild(tilediv);

let tile2 = document.createElement('div');
tile2.classList.add('tile');
menu.appendChild(tile2);

let tilename2 = document.createElement('h3');
let tilediv2 = document.createElement('div');
tilediv2.classList.add('tilediv');
tilename2.textContent = 'Stek wołowy z puree ziemniaczanym';
tilename2.classList.add('tilename');
let tileprice2 = document.createElement('h3');
tileprice2.textContent = '65 zł'; 
tileprice2.classList.add('tileprice');
let tileimg2 = document.createElement('img');
tileimg2.src = dish2;
tileimg2.classList.add('tileimg');
tileimg2.style.width = '100%';
tileimg2.style.height = 'auto';

tilediv2.appendChild(tilename2);
tilediv2.appendChild(tileprice2);

tile2.appendChild(tileimg2);
tile2.appendChild(tilediv2);

let tile3 = document.createElement('div');
tile3.classList.add('tile');
menu.appendChild(tile3);

let tilename3 = document.createElement('h3');
let tilediv3 = document.createElement('div');
tilediv3.classList.add('tilediv');
tilename3.textContent = 'Ratatouille z grillowanym serem feta';
tilename3.classList.add('tilename');
let tileprice3 = document.createElement('h3');
tileprice3.textContent = '49 zł'; 
tileprice3.classList.add('tileprice');
let tileimg3 = document.createElement('img');
tileimg3.src = dish3;
tileimg3.classList.add('tileimg');
tileimg3.style.width = '100%';
tileimg3.style.height = 'auto';

tilediv3.appendChild(tilename3);
tilediv3.appendChild(tileprice3);

tile3.appendChild(tileimg3);
tile3.appendChild(tilediv3);

let tile4 = document.createElement('div');
tile4.classList.add('tile');
menu.appendChild(tile4);

let tilename4 = document.createElement('h3');
let tilediv4 = document.createElement('div');
tilediv4.classList.add('tilediv');
tilename4.textContent = 'Krewetki w czerwonym curry';
tilename4.classList.add('tilename');
let tileprice4 = document.createElement('h3');
tileprice4.textContent = '55 zł'; 
tileprice4.classList.add('tileprice');
let tileimg4 = document.createElement('img');
tileimg4.src = dish4;
tileimg4.classList.add('tileimg');
tileimg4.style.width = '100%';
tileimg4.style.height = 'auto';

tilediv4.appendChild(tilename4);
tilediv4.appendChild(tileprice4);

tile4.appendChild(tileimg4);
tile4.appendChild(tilediv4);

let tile5 = document.createElement('div');
tile5.classList.add('tile');
menu.appendChild(tile5);

let tilename5 = document.createElement('h3');
let tilediv5 = document.createElement('div');
tilediv5.classList.add('tilediv');
tilename5.textContent = 'Makaron Alfredo';
tilename5.classList.add('tilename');
let tileprice5 = document.createElement('h3');
tileprice5.textContent = '28 zł'; 
tileprice5.classList.add('tileprice');
let tileimg5 = document.createElement('img');
tileimg5.src = dish5;
tileimg5.classList.add('tileimg');
tileimg5.style.width = '100%';
tileimg5.style.height = 'auto';

tilediv5.appendChild(tilename5);
tilediv5.appendChild(tileprice5);

tile5.appendChild(tileimg5);
tile5.appendChild(tilediv5);

let tile6 = document.createElement('div');
tile6.classList.add('tile');
menu.appendChild(tile6);

let tilename6 = document.createElement('h3');
let tilediv6 = document.createElement('div');
tilediv6.classList.add('tilediv');
tilename6.textContent = 'Pizza Margherita';
tilename6.classList.add('tilename');
let tileprice6 = document.createElement('h3');
tileprice6.textContent = '35 zł'; 
tileprice6.classList.add('tileprice');
let tileimg6 = document.createElement('img');
tileimg6.src = dish6;
tileimg6.classList.add('tileimg');
tileimg6.style.width = '100%';
tileimg6.style.height = 'auto';

tilediv6.appendChild(tilename6);
tilediv6.appendChild(tileprice6);

tile6.appendChild(tileimg6);
tile6.appendChild(tilediv6);






// <div id="tile">
//   <h3>Dania Główne:</h3>
//   <ul>
//     <li>Stek wołowy z puree ziemniaczanym - Soczysty stek wołowy z dodatkiem sosu pieprzowego, podany z kremowym puree ziemniaczanym i sałatką z rukoli. Cena: 65 zł.</li>
//     <li>Krewetki w czerwonym curry - Krewetki duszone w aromatycznym sosie curry z dodatkiem warzyw sezonowych i ryżu basmati. Cena: 55 zł.</li>
//     <li>Ratatouille z grillowanym serem feta - Klasyczne francuskie danie z duszonych warzyw podane z grillowanym serem feta i świeżym pieczywem. Cena: 45 zł.</li>
//   </ul>
// </div>

// <div id="tile">
//   <h3>Dania Dla Dzieci:</h3>
//   <ul>
//     <li>Kurczak Nuggets z frytkami - Krakersowe kawałki kurczaka podawane z chrupiącymi frytkami i ketchupem. Cena: 30 zł.</li>
//     <li>Makaron Alfredo - Makaron penne w sosie śmietanowym z serem parmezan i kawałkami kurczaka. Cena: 28 zł.</li>
//   </ul>
// </div>

// <div id="tile">
//   <h3>Desery:</h3>
//   <ul>
//     <li>Tiramisu - Tradycyjne włoskie tiramisu z delikatnym kakaowym pyłem na wierzchu. Cena: 20 zł.</li>
//     <li>Sernik New York - Klasyczny sernik z dodatkiem sosu malinowego i bitą śmietaną. Cena: 18 zł.</li>
//   </ul>
// </div>

// <div id="tile">
//   <h3>Napoje:</h3>
//   <ul>
//     <li>Wino Czerwone / Białe / Różowe - Wybór z naszej bogatej karty win. Cena: od 30 zł za butelkę.</li>
//     <li>Koktajle Owocowe - Świeże i orzeźwiające koktajle z sezonowych owoców. Cena: 15 zł.</li>
//   </ul>
// </div>

// <div id="tile">
//   <h3>Zupy:</h3>
//   <ul>
//     <li>Zupa krem z dyni - Klasyczna zupa krem z dyni podawana z prażonymi pestkami dyni. Cena: 18 zł.</li>
//     <li>Rosół z makaronem - Domowy rosół z kawałkami kurczaka i makaronem. Cena: 16 zł.</li>
//   </ul>
// </div>
// `;

export default menu;
