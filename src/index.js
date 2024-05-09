
import "./style.css";
import {home,btn}  from './home.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js'; 
let content = document.getElementById('content');
content.appendChild(home);
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',()=>{
    content.innerHTML='';
    content.appendChild(home);
});
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click',clickMenu);
btn.addEventListener('click',clickMenu);
function clickMenu(){
    content.innerHTML='';
    content.appendChild(menu);
}
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click',()=>{
    content.innerHTML='';
    content.appendChild(about);
});
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click',()=>{
    content.innerHTML='';
    content.appendChild(contact);
});








