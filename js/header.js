const navCol = document.querySelector(".navbar-collapse");
const btnMenu = document.querySelector(".menu-icon-btn");



btnMenu &&
  btnMenu.addEventListener("click", () => {

    navCol && navCol.classList.toggle("navbar-collapse-active");
  });


  function hide(element){
    navCol && navCol.classList.toggle("navbar-collapse-active");
 }