let about = document.createElement('div');
about.classList.add('about');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
const tabh2 = [];
const tabp = [];
let tab = [div1, div2, div3, div4];
tab.forEach((div) => {
    div.classList.add('aboutdiv');
    about.appendChild(div);
    let h2 = document.createElement('h2');
    tabh2.push(h2);
    div.appendChild(h2);
    let p = document.createElement('p');
    tabp.push(p);
    div.appendChild(p);
});
tabh2[0].textContent = `Smaki świata`;
tabp[0].textContent = `Jesteśmy miejscem, gdzie pasja do kulinariów łączy się z miłością do podróży. Nasza restauracja to miejsce, w którym każdy znajdzie coś dla siebie. Nasze dania to połączenie smaków z różnych zakątków świata, które zaskoczą nawet najbardziej wymagających smakoszy.`;
tabh2[1].textContent = `Kulinarne Podróże: Smakowite Ekspedycje w Świecie Kuchni`;
tabp[1].textContent = `W naszej restauracji nie ma stałego menu, ale coś zaskakującego czeka na Ciebie za każdym razem! Przygotowujemy dania inspirowane kuchniami z całego świata, podróżując od wschodnich smaków Azji po serca Medyny. Doświadcz różnorodności kulinarnych doznań w naszym nieustannie zmieniającym się menu.`;
tabh2[2].textContent = `Sezonowe Skarby: Świeże Inspiracje z Lokalnych Źródeł`;
tabp[2].textContent = `U nas nie ma miejsca na nudę! Nasza kuchnia opiera się na sezonowych produktach lokalnych dostawców, co oznacza, że każda wizyta to nowe odkrycie smaków. Pozwól nam zainspirować Cię świeżością i autentycznością naszych sezonowych skarbów.`;

export default about;