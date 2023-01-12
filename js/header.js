const navCol = document.querySelector(".navbar-collapse");
const btnMenu = document.querySelector(".menu-icon-btn");
const home = document.querySelector(".home");
const listMenu = document.getElementsByClassName("list-menu");

for (let i = 0; i <= listMenu.length; i += 1) {
  listMenu[i] &&
    listMenu[i].addEventListener("click", function (e) {
      for (let i = 0; i <= listMenu.length; i += 1) {
        listMenu[i] && listMenu[i].classList.remove("active-menu");
      }
      listMenu[i].classList.add("active-menu");
    });
}

home &&
  home.addEventListener("click", () => {
    for (let i = 0; i <= listMenu.length; i += 1) {
      listMenu[i] && listMenu[i].classList.remove("active-menu");
    }
  });

btnMenu &&
  btnMenu.addEventListener("click", () => {
    if (navCol.classList.contains("navbar-collapse-active")) {
      navCol.classList.add("hidePopup");
      navCol && navCol.classList.remove("navbar-collapse-active");
      btnMenu.classList.remove("toggled");
    } else {
      navCol && navCol.classList.add("navbar-collapse-active");
      btnMenu.classList.add("toggled");
    }
  });

navCol.addEventListener("animationend", function () {
  if (this.classList.contains("hidePopup")) {
    this.classList.remove("hidePopup");
  }
});
function hide(element) {
  navCol && navCol.classList.toggle("navbar-collapse-active");
  navCol.classList.add("hidePopup");
  btnMenu.classList.remove("toggled");
}
