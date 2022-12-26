const menu_btn = document.querySelector('.burger_menu');
const mobile_menu = document.querySelector('.mobile_menu');
const close_menu_btn = document.querySelector(".mobile_menu__close_btn");

menu_btn.addEventListener("click", showMenu);
close_menu_btn.addEventListener("click", hideMenu);

function showMenu() {
    console.log('show')
    mobile_menu.classList.remove('hide');
}
function hideMenu() {
    mobile_menu.classList.add('hide')
}