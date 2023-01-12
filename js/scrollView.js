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
let widthImgTranNhan = 393 / 750;
let heightImgTranNhan = 330 / 1000;
let widthImgLeLinh = 146 / 750;
let heightImgLeLinh = 405 / 1000;
let widthImgPhucDuong = 324 / 750;
let heightImgPhucDuong = 556 / 1000;
let widthImgManhTien = 576 / 750;
let heightImgManhTien = 473 / 1000;

const changeCoords = (areaID) => {
  let newCoords;
  const radiusImg = 100 / 750;
  if (areaID == "trannhan") {
    newCoords = `${widthImgTranNhan * width}, ${heightImgTranNhan * height}, ${radiusImg * width}`;
  } else if (areaID == "lelinh") {
    newCoords = `${widthImgLeLinh * width}, ${heightImgLeLinh * height}, ${
      radiusImg * width
    }`;
  } else if (areaID == "phucduong") {
    newCoords = `${widthImgPhucDuong * width}, ${heightImgPhucDuong * height}, ${
      radiusImg * width
    }`;
  } else {
    newCoords = `${widthImgManhTien * width}, ${heightImgManhTien * height}, ${
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
    elTranNhan.style.left = `${widthImgTranNhan * width - widthTranNhan}px`;
    elTranNhan.style.top = `${heightImgTranNhan * height - heightTranNhan}px`;
  } else if (el.id == "lelinh" && x.matches(":hover")) {
    elLeLinh.style.display = "block";
    const widthLeLinh = elLeLinh.clientWidth / 2;
    const heightLeLinh =
      elLeLinh.clientHeight + elLeLinh.clientHeight / 2 + size;
    elLeLinh.style.left = `${widthImgLeLinh * width - widthLeLinh}px`;
    elLeLinh.style.top = `${heightImgLeLinh * height - heightLeLinh}px`;
  } else if (el.id == "manhtien" && x.matches(":hover")) {
    elManhTien.style.display = "block";
    const widthManhTien = elManhTien.clientWidth / 2;
    const heightManhTien =
      elManhTien.clientHeight + elManhTien.clientHeight / 2 + size;
    elManhTien.style.left = `${widthImgManhTien * width - widthManhTien}px`;
    elManhTien.style.top = `${heightImgManhTien * height - heightManhTien}px`;
  } else if (el.id == "phucduong" && x.matches(":hover")) {
    elPhucDuong.style.display = "block";
    const widthPhucDuong = elPhucDuong.clientWidth / 2;
    const heightPhucDuong =
      elPhucDuong.clientHeight + elPhucDuong.clientHeight / 2 + size;
    elPhucDuong.style.left = `${widthImgPhucDuong * width - widthPhucDuong}px`;
    elPhucDuong.style.top = `${heightImgPhucDuong * height - heightPhucDuong}px`;
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


function goToByScroll(id){
  const scrollTo = document.getElementById(id);
  const topPos = scrollTo.offsetTop;
  console.log(topPos);
  window.scroll(0, topPos);
}