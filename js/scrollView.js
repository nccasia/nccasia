let valueDisplays = document.querySelectorAll(".num-count");
let interval = 900;
const areaTranNhan = document.getElementById("trannhan");
const areaLeLinh = document.getElementById("lelinh");
const areaTungNguyen = document.getElementById("tungnguyen");
const areaPhucDuong = document.getElementById("phucduong");

const elTranNhan = document.querySelector(".text_TranNhan");
const elLeLinh = document.querySelector(".text_LeLinh");
const elTungNguyen = document.querySelector(".text_TungNguyen");
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

const changeCoords = (areaID) => {
  let newCoords;
  const radiusImg = 100 / 750;
  if (areaID == "trannhan") {
    const imgTopX = 393 / 750;
    const imgTopY = 330 / 1000;
    newCoords = `${imgTopX * width}, ${imgTopY * height}, ${radiusImg * width}`;
  } else if (areaID == "lelinh") {
    const imgLeftX = 146 / 750;
    const imgLeftY = 405 / 1000;
    newCoords = `${imgLeftX * width}, ${imgLeftY * height}, ${
      radiusImg * width
    }`;
  } else if (areaID == "phucduong") {
    const imgRightX = 324 / 750;
    const imgRightY = 556 / 1000;
    newCoords = `${imgRightX * width}, ${imgRightY * height}, ${
      radiusImg * width
    }`;
  } else {
    const imgBottomX = 576 / 750;
    const imgBottomY = 473 / 1000;
    newCoords = `${imgBottomX * width}, ${imgBottomY * height}, ${
      radiusImg * width
    }`;
  }
  const x = document.getElementById(areaID);
  x.setAttribute("coords", newCoords);
};

const setHoverArea = (el) => {
  const x = document.getElementById(el.id);
  if (el.id == "trannhan" && x.matches(":hover")) {
    elTranNhan.style.display = "block";
  } else if (el.id == "lelinh" && x.matches(":hover")) {
    elLeLinh.style.display = "block";
  } else if (el.id == "tungnguyen" && x.matches(":hover")) {
    elTungNguyen.style.display = "block";
  } else if (el.id == "phucduong" && x.matches(":hover")) {
    elPhucDuong.style.display = "block";
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

areaTranNhan.addEventListener("mousemove", function checkHover() {
  setHoverArea(areaTranNhan);
});

areaLeLinh.addEventListener("mousemove", function checkHover() {
  setHoverArea(areaLeLinh);
});

areaPhucDuong.addEventListener("mousemove", function checkHover() {
  setHoverArea(areaPhucDuong);
});

areaTungNguyen.addEventListener("mousemove", function checkHover() {
  setHoverArea(areaTungNguyen);
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

areaTungNguyen.addEventListener("mouseout", function checkHover() {
  elTungNguyen.style.display = "none";
});

setSizeBrower();
window.addEventListener("resize", () => {
  setSizeBrower();
  setCoordIntoAreaElement();
});
setCoordIntoAreaElement();
