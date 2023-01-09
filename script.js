const menu_btn = document.querySelector('.burger_menu');
const mobile_menu = document.querySelector('.mobile_menu');
const close_menu_btn = document.querySelector(".mobile_menu__close_btn");
const searchbar = document.querySelector(".searchbar__input");
const loupe = document.querySelector(".loupe");

if(loupe){
    loupe.addEventListener("click", () => toggleShowElement(searchbar));
}
menu_btn.addEventListener("click", ()=>toggleShowElement(mobile_menu));
close_menu_btn.addEventListener("click", () => toggleShowElement(mobile_menu));

function toggleShowElement(element) {
    element.classList.toggle('hide')
}
