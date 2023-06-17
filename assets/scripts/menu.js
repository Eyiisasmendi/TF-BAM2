//variables 
const  ham =document.querySelector('.ham')//clase ham btn
const enlaces =document.querySelector('.enlaceMenu')//clase del nav
const barra =document.querySelectorAll('.ham span')

ham.addEventListener('click',()=>{
    enlaces.classList.toggle('activado');
    barra.forEach(child => {child.classList.toggle('animado')});
});
