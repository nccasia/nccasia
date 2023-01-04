const navCol = document.querySelector(".navbar-collapse");
const btnMenu = document.querySelector(".menu-icon-btn");

btnMenu &&
  btnMenu.addEventListener("click", () => {
    if (navCol.classList.contains("navbar-collapse-active")) {
      navCol.classList.add("hidePopup");
      navCol && navCol.classList.remove("navbar-collapse-active");
      btnMenu.classList.toggle("toggled");
    } else {
      navCol.style.display = "block";
      navCol && navCol.classList.add("navbar-collapse-active");
      btnMenu.classList.toggle("toggled");
    }
  });

navCol.addEventListener("animationend", function () {
  if (this.classList.contains("hidePopup")) {
    this.style.display = "none";
    this.classList.remove("hidePopup");
  }
});
function hide(element) {
  navCol && navCol.classList.toggle("navbar-collapse-active");
  navCol.classList.add("hidePopup");
  btnMenu.classList.toggle("toggled");
}
