let menu = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navber.classList.toggle('action');
};

window.onscroll =  () => {
    menu.classList.remove('bx-x');
    navber.classList.remove('action');
};