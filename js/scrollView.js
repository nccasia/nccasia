let valueDisplays = document.querySelectorAll(".num-count");
let interval = 900;

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
              }, index * 600);
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
let width 
let height

const changeCoords = (areaID) => {
  let newCoords;
  const radiusImg = 100 / 750;
  if (areaID == "trannhan") {
    const imgTopX = 393 / 750;
    const imgTopY = 330 / 1000;
    newCoords = `${imgTopX * width }, ${imgTopY * height }, ${radiusImg * width  }`;
  } else if (areaID == "lelinh") {
    const imgLeftX = 146 / 750;
    const imgLeftY = 405 / 1000;
    newCoords = `${imgLeftX * width }, ${imgLeftY * height}, ${radiusImg * width }`;
  } else if (areaID == "tungnguyen") {
    const imgRightX = 324 / 750;
    const imgRightY = 556 / 1000;
    newCoords = `${imgRightX * width}, ${imgRightY * height}, ${radiusImg * width }`;
  } else {
    const imgBottomX = 576 / 750;
    const imgBottomY = 473 / 1000;
    newCoords = `${imgBottomX * width }, ${imgBottomY * height }, ${radiusImg * width }`;
  }
  const x = document.getElementById(areaID);
  x.setAttribute("coords", newCoords);
};

function setCoordIntoAreaElement () {
  const mapboss = document.getElementById("mapboss")
  Array.from(mapboss.children).forEach(el => changeCoords(el.id))
}

function setSizeBrower () {
  let img = document.querySelector('.our-image img');
  width = img.clientWidth;
  height = img.clientHeight;
}

setSizeBrower()
window.addEventListener('resize', () => {setSizeBrower() ; setCoordIntoAreaElement()})
setCoordIntoAreaElement()

