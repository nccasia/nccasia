// back-to-top
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add("is-visible");
    } else {
      backToTopButton.classList.remove("is-visible");
    }
  });

  if (window.pageYOffset <= 100) {
    backToTopButton.classList.remove("is-visible");
  }

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//scroll header
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const headerTop = document.querySelector(".header-top");
  const headerFix = document.querySelector(".header-fix");
  const mheadInsider = document.querySelector("#mhead .insider");
  const mheadFixInsider = document.querySelector("#mhead-fix .insider");

  headerTop.classList.toggle("scrolled", scrollPosition > 0);
  headerFix.classList.toggle("scrolled", scrollPosition > 0);
  mheadInsider.classList.toggle("scrolled", scrollPosition > 0);
  mheadFixInsider.classList.toggle("scrolled", scrollPosition > 0);
});
