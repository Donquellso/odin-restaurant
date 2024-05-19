import map from './menu-img/mapa.jpeg';
let content = document.getElementById('content');
let contact = document.createElement('div');
contact.classList.add('contact');
let h2contact = document.createElement('h2');
h2contact.textContent = `Contact us`;
contact.appendChild(h2contact);

let leftcontact = document.createElement('div');
leftcontact.classList.add('contactleft');
contact.appendChild(leftcontact);
let rightcontact = document.createElement('div');
rightcontact.classList.add('contactright');
let mapa = document.createElement('img');
mapa.src = map;
mapa.classList.add(map);
rightcontact.appendChild(mapa);
contact.appendChild(rightcontact);



let pcontact1 = document.createElement('p');
pcontact1.textContent = `Restauracja Smaki Świata`;

let pcontact2 = document.createElement('p');
pcontact2.textContent = `Adres:
ul. Przykładowa 123
00-000 Warszawa`;

let pcontact3 = document.createElement('p');
pcontact3.textContent = `Godziny otwarcia:
Poniedziałek - Piątek: 12:00 - 22:00
Sobota - Niedziela: 11:00 - 23:00`;

let pcontact4 = document.createElement('p');
pcontact4.textContent = `Telefon:
+48 123 456 789`

let pcontact5 = document.createElement('p');
pcontact5.textContent = `E-mail:
kontakt@smakiswiata.pl`

let pcontact6 = document.createElement('p');
pcontact6.textContent = `Rezerwacje:
Aby dokonać rezerwacji, prosimy o kontakt telefoniczny lub wysłanie wiadomości e-mail. Możesz także skorzystać z naszego formularza rezerwacji online tutaj.`;
leftcontact.appendChild(pcontact1);
leftcontact.appendChild(pcontact2);
leftcontact.appendChild(pcontact3);
leftcontact.appendChild(pcontact4);
leftcontact.appendChild(pcontact5);
leftcontact.appendChild(pcontact6);

export default contact;

