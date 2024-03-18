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

  // click icon menu
  var menuBtn = document.querySelector(".menu-icon-btn");
  menuBtn.addEventListener("click", function () {
    var menuIcon = document.querySelector(".menu-icon-btn");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    if (!menuIcon.classList.contains("toggled")) {
      menuIcon.classList.add("toggled");
      navbarCollapse.style.display = "block";
    } else {
      menuIcon.classList.remove("toggled");
      navbarCollapse.style.display = "none";
    }
  });

  document
    .querySelector(".see-more-button")
    .addEventListener("click", function () {
      var benefits = document.querySelector(".benefits");
      var benefitIcon = document.querySelector(".benefit-icon");
      var seeMore = document.querySelector(".see-more-button");

      event.preventDefault();
      if (benefits.style.display === "none" || benefits.style.display === "") {
        benefits.style.display = "block";
        benefitIcon.style.display = "none";
        seeMore.style.display = "none";
      } else {
        benefits.style.display = "none";
        benefitIcon.style.display = "grid";
      }
    });

  //scroll header
  window.addEventListener("scroll", function () {
    var headerFix = document.querySelector(".header-fix");
    var headerTopMb = document.querySelector(".header-top-mb");
    var headerTop = document.querySelector(".header-top");

    if (headerFix) {
      var scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        headerFix.style.display = "flex";
        headerFix.classList.add("scrolled");
      } else {
        headerFix.style.display = "none ";
        headerTopMb.style.display = "none";
        headerTop.style.display = "flex";
        headerFix.classList.remove("scrolled");
      }
    }
  });

  // Chèn thẻ style vào phần head của trang
  document.head.appendChild(style);

  // add class active
  document.addEventListener("DOMContentLoaded", function () {
    var applyForm = document.getElementById("apply-form");
    applyForm.classList.remove("active");

    document
      .querySelector(".menu-action")
      .addEventListener("click", function () {
        applyForm.classList.add("active");
      });
  });

  // add display: block
});
