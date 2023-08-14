const menu = document.querySelector(".nav-items");
const menuBtn = document.querySelector(".header-icon");
const menuBtnIcon = document.querySelector(".header-icon i");

menuBtn.addEventListener("click" , function (){
    if (menuBtnIcon.classList.contains(`fa-bars`)){
        menu.style.left = "0"
        menuBtnIcon.classList.remove(`fa-bars`)
        menuBtnIcon.classList.add(`fa-times`)
    } else {
        menu.style.left = "-288px"
        menuBtnIcon.classList.remove(`fa-times`)
        menuBtnIcon.classList.add(`fa-bars`)
    }
})