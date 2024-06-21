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

  document.addEventListener("DOMContentLoaded", function () {
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
});

// add active apply form
function addActivate(event) {
  event.preventDefault();
  document.getElementById("apply-form").classList.add("active");
}

// remove active apply form
function removeActive(event) {
  var applyForm = document.getElementById("apply-form");
  if (applyForm.classList.contains("active")) {
    applyForm.classList.remove("active");
  }
 const successBox = document.querySelector(".success-box");
 successBox.style.display = "none";
 const applyFormBox = document.querySelector(".apply-box");
  applyFormBox.style.display = "block";

  const formCareer = document.querySelector(".wpcf7-form");
  formCareer.reset()
}


// header
window.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("myHeader");
  var headerOffset;

  function updateHeaderOffset() {
    headerOffset = header.offsetTop;
  }

  function stickyHeaderOnScroll() {
    var windowTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowTop >= headerOffset) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", stickyHeaderOnScroll);
  window.addEventListener("resize", updateHeaderOffset);
  updateHeaderOffset();
});

// xóa toggled trong menu
function hide(element) {
  var targetId = element.getAttribute("href");
  var targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  var navbarCollapse = document.querySelector(".navbar-collapse");
  var menuIcon = document.querySelector(".menu-icon-btn");

  navbarCollapse.style.display = "none";
  menuIcon.classList.remove("toggled");
}

// header color
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("ul li a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      links.forEach(function (otherLink) {
        otherLink.classList.remove("active-menu");
      });
      this.classList.add("active-menu");
    });
  });

  // search 
  document.getElementById('advanced-searchform').addEventListener('submit', (event) => {
      event.preventDefault();
    
      // Construct the search URL
      var searchParams = new URLSearchParams();
      searchParams.append('search', 'advanced');
      searchParams.append('s', document.getElementById('name').value);
    
      window.location.href = 'listjobs.html?' + searchParams.toString();
  });
  
});







 









