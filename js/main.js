const checkboxWeb = document.getElementById("web");
const checkboxMobile = document.getElementById("mobile");
const checkboxGame = document.getElementById("game");
const checkboxOther = document.getElementById("other");

const elLine1 = document.getElementById("line1");
const elLine2 = document.getElementById("line2");
const elLine3 = document.getElementById("line3");
const elLine4 = document.getElementById("line4");
const elLine5 = document.getElementById("line5");

const timeline = document.querySelector(".timeline");
const headingTitle = document.getElementById("text_progress");
const form = document.querySelector(".ncc_project-form");
const formOther1 = document.querySelector(".ncc_project-form_other1");
const formOther2 = document.querySelector(".ncc_project-form_other2");
const formOther3 = document.querySelector(".ncc_project-form_other3");
const formOther4 = document.querySelector(".ncc_project-form_other4");
const formOther5 = document.querySelector(".ncc_project-form_other5");
const btnSubmit = document.getElementById("button-submit");
const btnSubmitOther1 = document.getElementById("button-submit_other1");
const btnSubmitOther2 = document.getElementById("button-submit_other2");
const btnSubmitOther3 = document.getElementById("button-submit_other3");
const btnSubmitOther4 = document.getElementById("button-submit_other4");
const btnSubmitOther5 = document.getElementById("button-submit_other5");
const btnBackOther1 = document.getElementById("button-back_other1");
const btnBackOther2 = document.getElementById("button-back_other2");
const btnBackOther3 = document.getElementById("button-back_other3");
const btnBackOther4 = document.getElementById("button-back_other4");
const btnBackOther5 = document.getElementById("button-back_other5");

function setTextHtml(id) {
  headingTitle.innerHTML = "";
  const textH3 = document.createTextNode(`Progress (${id}/5)`);
  headingTitle.appendChild(textH3);
}

function handleActiveFormOther() {
  form.style.display = "none";
  timeline.style.display = "block";
  formOther1.style.display = "block";
  setTextHtml(1);
  elLine1.style.backgroundColor = "var(--blue-color)";
}
btnSubmit.addEventListener("click", function (e) {
  if (checkboxWeb.checked) {
    handleActiveFormOther();
  } else if (checkboxMobile.checked) {
    handleActiveFormOther();
  } else if (checkboxGame.checked) {
  } else if (checkboxOther.checked) {
    handleActiveFormOther();
  }
});

function handleDeactiveFormOther1() {
  form.style.display = "block";
  formOther1.style.display = "none";
  elLine1.style.backgroundColor = "var(--white-color)";
  timeline.style.display = "none";
}
btnBackOther1.addEventListener("click", function (e) {
  handleDeactiveFormOther1();
});

function handleActiveFormOther1() {
  formOther1.style.display = "none";
  formOther2.style.display = "block";
  elLine2.style.backgroundColor = "var(--blue-color)";
  setTextHtml(2);
}
btnSubmitOther1.addEventListener("click", function (e) {
  handleActiveFormOther1();
});

function handleDeactiveFormOther2() {
  formOther1.style.display = "block";
  formOther2.style.display = "none";
  elLine2.style.backgroundColor = "var(--white-color)";
}
btnBackOther2.addEventListener("click", function (e) {
  handleDeactiveFormOther2();
});

function handleActiveFormOther2() {
  formOther2.style.display = "none";
  formOther3.style.display = "block";
  elLine3.style.backgroundColor = "var(--blue-color)";
  setTextHtml(3);
}
btnSubmitOther2.addEventListener("click", function (e) {
  handleActiveFormOther2();
});

function handleDeactiveFormOther3() {
  formOther2.style.display = "block";
  formOther3.style.display = "none";
  elLine3.style.backgroundColor = "var(--white-color)";
}
btnBackOther3.addEventListener("click", function (e) {
  handleDeactiveFormOther3();
});

function handleActiveFormOther3() {
  formOther3.style.display = "none";
  formOther4.style.display = "block";
  elLine4.style.backgroundColor = "var(--blue-color)";
  setTextHtml(4);
}
btnSubmitOther3.addEventListener("click", function (e) {
  handleActiveFormOther3();
});

function handleDeactiveFormOther4() {
  formOther3.style.display = "block";
  formOther4.style.display = "none";
  elLine4.style.backgroundColor = "var(--white-color)";
}
btnBackOther4.addEventListener("click", function (e) {
  handleDeactiveFormOther4();
});

function handleActiveFormOther4() {
  formOther4.style.display = "none";
  formOther5.style.display = "block";
  elLine5.style.backgroundColor = "var(--blue-color)";
  setTextHtml(5);
}
btnSubmitOther4.addEventListener("click", function (e) {
  handleActiveFormOther4();
});

function handleDeactiveFormOther5() {
  formOther4.style.display = "block";
  formOther5.style.display = "none";
  elLine5.style.backgroundColor = "var(--white-color)";
}
btnBackOther5.addEventListener("click", function (e) {
  handleDeactiveFormOther5();
});

function handleActiveFormOther5() {
  formOther5.style.display = "none";
  timeline.style.display = "none";
  form.style.display = "block";
  elLine5.style.backgroundColor = "var(--white-color)";
  elLine4.style.backgroundColor = "var(--white-color)";
  elLine3.style.backgroundColor = "var(--white-color)";
  elLine2.style.backgroundColor = "var(--white-color)";
  elLine1.style.backgroundColor = "var(--white-color)";
}
btnSubmitOther5.addEventListener("click", function (e) {
  handleActiveFormOther5();
});
