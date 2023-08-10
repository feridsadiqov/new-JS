// const mobileMenu= document.querySelector('.container');
// const btn= document.querySelector('.btt');
// const button= document.querySelector('.closebtn');

// btn.addEventListener('click',() => {
//     mobileMenu.classList.toggle('show')
// })



// button.addEventListener('click',() => {
//     mobileMenu.classList.remove('show')
// })


document.addEventListener("DOMContentLoaded", function () {
    const bttButton = document.querySelector(".btt");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const closeButton = document.querySelector(".cls-menu");

    bttButton.addEventListener("click", function () {
        hamburgerMenu.style.right = "0";
    });

    closeButton.addEventListener("click", function () {
        hamburgerMenu.style.right = "-100%";
    });
});




// JavaScript kodu

const plusButton = document.getElementById('plus')

const subMenu = document.querySelector('.sub-menu')
  
plusButton.addEventListener('click',function(){
    subMenu.classList.toggle('sub-menu-active')
    if (plusButton.getAttribute("class") === "fa-solid fa-plus") {
        plusButton.setAttribute("class", "fa-solid fa-minus");
    } else {
        plusButton.setAttribute("class", "fa-solid fa-plus");
    }
})
  