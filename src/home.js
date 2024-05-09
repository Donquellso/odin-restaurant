let home = document.createElement('div');
home.classList.add('home');

let titleupper = document.createElement('h2');
let titledown = document.createElement('h1');
titleupper.textContent = `Witaj w restauracji`;
titledown.textContent = "Smaki świata";
titleupper.classList.add('titleupper');
titledown.classList.add('titledown');
home.appendChild(titleupper);
home.appendChild(titledown);

let desc = document.createElement('p');
desc.textContent = `Jesteśmy miejscem, gdzie pasja do kulinariów łączy się z miłością do podróży.`;
desc.classList.add('desc');
home.appendChild(desc);

let btn = document.createElement('button');
btn.textContent = "Menu";
btn.classList.add('homebtn');
home.appendChild(btn);

export {home, btn};