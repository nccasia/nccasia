let valueDisplays = document.querySelectorAll(".num-count");
let interval = 900;
const areaTranNhan = document.getElementById("trannhan");
const areaLeLinh = document.getElementById("lelinh");
const areaManhTien = document.getElementById("manhtien");
const areaPhucDuong = document.getElementById("phucduong");

const elTranNhan = document.querySelector(".text_TranNhan");
const elLeLinh = document.querySelector(".text_LeLinh");
const elManhTien = document.querySelector(".text_ManhTien");
const elPhucDuong = document.querySelector(".text_PhucDuong");

function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}
function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
          if (el.classList.contains("scrollBox2")) {
            valueDisplays.forEach((valueDisplay, index) => {
              setTimeout(function () {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                  startValue += 1;
                  valueDisplay.textContent = startValue;
                  if (startValue == endValue) {
                    clearInterval(counter);
                  }
                }, duration);
              }, index * 300);
            });
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}
scrollTrigger(".scrollBox", {
  rootMargin: "00px",
});

scrollTrigger(".scrollBox2", {
  rootMargin: "00px",
});
//animation number cout
let width;
let height;
let imgTopX = 393 / 750;
let imgTopY = 330 / 1000;
let imgLeftX = 146 / 750;
let imgLeftY = 405 / 1000;
let imgBottomX = 324 / 750;
let imgBottomY = 556 / 1000;
let imgRightX = 576 / 750;
let imgRightY = 473 / 1000;

const changeCoords = (areaID) => {
  let newCoords;
  const radiusImg = 100 / 750;
  if (areaID == "trannhan") {
    newCoords = `${imgTopX * width}, ${imgTopY * height}, ${radiusImg * width}`;
  } else if (areaID == "lelinh") {
    newCoords = `${imgLeftX * width}, ${imgLeftY * height}, ${
      radiusImg * width
    }`;
  } else if (areaID == "phucduong") {
    newCoords = `${imgBottomX * width}, ${imgBottomY * height}, ${
      radiusImg * width
    }`;
  } else {
    newCoords = `${imgRightX * width}, ${imgRightY * height}, ${
      radiusImg * width
    }`;
  }
  const x = document.getElementById(areaID);
  x.setAttribute("coords", newCoords);
};

const setHoverArea = (el) => {
  const x = document.getElementById(el.id);
  let documentSize = document.body.clientWidth;
  let size = 20;
  if (documentSize <= 680 && documentSize >= 600) {
    size = 50;
  } else if (documentSize < 600 && documentSize >= 530) {
    size = 40;
  } else if (documentSize < 530 && documentSize >= 450) {
    size = 25;
  } else if (documentSize < 450) {
    size = 10;
  }
  if (el.id == "trannhan" && x.matches(":hover")) {
    elTranNhan.style.display = "block";
    const widthTranNhan = elTranNhan.clientWidth / 2;
    const heightTranNhan =
      elTranNhan.clientHeight + elTranNhan.clientHeight / 2 + size;
    elTranNhan.style.left = `${imgTopX * width - widthTranNhan}px`;
    elTranNhan.style.top = `${imgTopY * height - heightTranNhan}px`;
  } else if (el.id == "lelinh" && x.matches(":hover")) {
    elLeLinh.style.display = "block";
    const widthLeLinh = elLeLinh.clientWidth / 2;
    const heightLeLinh =
      elLeLinh.clientHeight + elLeLinh.clientHeight / 2 + size;
    elLeLinh.style.left = `${imgLeftX * width - widthLeLinh}px`;
    elLeLinh.style.top = `${imgLeftY * height - heightLeLinh}px`;
  } else if (el.id == "manhtien" && x.matches(":hover")) {
    elManhTien.style.display = "block";
    const widthManhTien = elManhTien.clientWidth / 2;
    const heightManhTien =
      elManhTien.clientHeight + elManhTien.clientHeight / 2 + size;
    elManhTien.style.left = `${imgRightX * width - widthManhTien}px`;
    elManhTien.style.top = `${imgRightY * height - heightManhTien}px`;
  } else if (el.id == "phucduong" && x.matches(":hover")) {
    elPhucDuong.style.display = "block";
    const widthPhucDuong = elPhucDuong.clientWidth / 2;
    const heightPhucDuong =
      elPhucDuong.clientHeight + elPhucDuong.clientHeight / 2 + size;
    elPhucDuong.style.left = `${imgBottomX * width - widthPhucDuong}px`;
    elPhucDuong.style.top = `${imgBottomY * height - heightPhucDuong}px`;
  }
};

const mapboss = document.getElementById("mapboss");
function setCoordIntoAreaElement() {
  Array.from(mapboss.children).forEach((el) => changeCoords(el.id));
}

function setSizeBrower() {
  let img = document.querySelector(".our-image img");
  width = img.clientWidth;
  height = img.clientHeight;
}

function setHover() {
  areaTranNhan.addEventListener("mousemove", function checkHover() {
    setHoverArea(areaTranNhan);
  });

  areaLeLinh.addEventListener("mousemove", function checkHover() {
    setHoverArea(areaLeLinh);
  });

  areaPhucDuong.addEventListener("mousemove", function checkHover() {
    setHoverArea(areaPhucDuong);
  });

  areaManhTien.addEventListener("mousemove", function checkHover() {
    setHoverArea(areaManhTien);
  });

  areaTranNhan.addEventListener("mouseout", function checkHover() {
    elTranNhan.style.display = "none";
  });

  areaLeLinh.addEventListener("mouseout", function checkHover() {
    elLeLinh.style.display = "none";
  });

  areaPhucDuong.addEventListener("mouseout", function checkHover() {
    elPhucDuong.style.display = "none";
  });

  areaManhTien.addEventListener("mouseout", function checkHover() {
    elManhTien.style.display = "none";
  });
}

setSizeBrower();
setHover();
window.addEventListener("resize", () => {
  elTranNhan.style.display = "none";
  elLeLinh.style.display = "none";
  elPhucDuong.style.display = "none";
  elManhTien.style.display = "none";
  setSizeBrower();
  setHover();
  setCoordIntoAreaElement();
});
setCoordIntoAreaElement();
