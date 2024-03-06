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
        headerFix.style.display = "none";
        headerTopMb.style.display = "none";
        headerTop.style.display = "flex";
        headerFix.classList.remove("scrolled");
      }
    }
  });

  // menu-toggler
  document
    .querySelector(".menu-toggler.simple")
    .addEventListener("click", function () {
      var navHolder = document.getElementById("nav-holder");
      var menu = document.getElementById("m-menu");
      var headerFix = document.querySelector(".header-fix");
      var headerTop = document.querySelector(".header-top");
      var headerTopMb = document.querySelector(".header-top-mb");
      var siteContent = document.querySelector(".site-content");
      var footer = document.querySelector(".footer");
      var listJobs = document.querySelector(".page-list-jobs");

      // var headerTopMb = document.querySelector(".header-top-mb");

      if (navHolder.style.display === "none") {
        navHolder.style.display = "block";
        menu.style.display = "block";
        headerTopMb.style.display = "block";
        headerTop.style.display = "none";
        siteContent.style.display = "none";
        footer.style.display = "none";
        listJobs.style.display = "none";
      } else {
        navHolder.style.display = "none";
      }
    });

  // menu-toggler-fix
  document
    .querySelector(".menu-toggler-fix.simple")
    .addEventListener("click", function () {
      var navHolder = document.getElementById("nav-holder");
      var menu = document.getElementById("m-menu");
      var insider = document.getElementById("insider");
      var headerTop = document.querySelector(".header-top");
      var headerTopMb = document.querySelector(".header-top-mb");
      var siteContent = document.querySelector(".site-content");
      var footer = document.querySelector(".footer");
      var headerFix = document.querySelector(".header-fix");
      var listJobs = document.querySelector(".page-list-jobs");
      var navHolderDisplay = window.getComputedStyle(navHolder).display;

      if (navHolderDisplay === "none") {
        navHolder.style.display = "block";
        menu.style.display = "block";
        headerTopMb.style.display = "block";

        // Thêm lớp mới vào headerFix
        headerFix.classList.add("flex-display");

        headerTop.style.display = "none";
        siteContent.style.display = "none";
        footer.style.display = "none";
        listJobs.style.display = "none";
      } else {
        navHolder.style.display = "none";
        siteContent.style.display = "block";
        footer.style.display = "block";
      }
    });

  // Tạo một thẻ style mới
  var style = document.createElement("style");
  style.innerHTML = ".flex-display { display: flex !important; }";

  // Chèn thẻ style vào phần head của trang
  document.head.appendChild(style);

  // menu-toggler-mb
  document
    .querySelector(".menu-toggler-mb.simple")
    .addEventListener("click", function () {
      var navHolder = document.getElementById("nav-holder");
      var menu = document.getElementById("m-menu");
      var insider = document.getElementById("insider");
      var headerTop = document.querySelector(".header-top");
      var headerTopMb = document.querySelector(".header-top-mb");
      var siteContent = document.querySelector(".site-content");
      var footer = document.querySelector(".footer");

      if (navHolder.style.display === "block") {
        navHolder.style.display = "none";
        menu.style.display = "block";
        headerTop.style.display = "flex";
        headerTopMb.style.display = "none";
        siteContent.style.display = "block";
        footer.style.display = "block";
      }
    });
});
