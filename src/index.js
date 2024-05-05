import "./style.css";
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
console.log(home);
let content = document.getElementById('content');
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',()=>{
    content.innerHTML='';
    content.appendChild(home);
});
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click',()=>{
    content.innerHTML='';
    content.appendChild(menu);
});
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click',()=>{
    content.innerHTML='';
    content.appendChild(about);
});

