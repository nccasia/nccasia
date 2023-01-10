const formOther = document.querySelector(".ncc_project-form_other");
const formOther1 = document.querySelector(".ncc_project-form_other1");
const formOther2 = document.querySelector(".ncc_project-form_other2");
const formOther3 = document.querySelector(".ncc_project-form_other3");
const formOther4 = document.querySelector(".ncc_project-form_other4");
const formOther5 = document.querySelector(".ncc_project-form_other5");
const btnSubmitOther = document.getElementById("button-submit_other");
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

function handleActiveFormOther() {
  formOther.style.display = "none";
  formOther1.style.display = "block";
}
btnSubmitOther.addEventListener("click", function (e) {
  handleActiveFormOther();
});

function handleDeactiveFormOther1() {
  formOther.style.display = "block";
  formOther1.style.display = "none";
}
btnBackOther1.addEventListener("click", function (e) {
  handleDeactiveFormOther1();
});

function handleActiveFormOther1() {
  formOther1.style.display = "none";
  formOther2.style.display = "block";
}
btnSubmitOther1.addEventListener("click", function (e) {
  handleActiveFormOther1();
});

function handleDeactiveFormOther2() {
  formOther1.style.display = "block";
  formOther2.style.display = "none";
}
btnBackOther2.addEventListener("click", function (e) {
  handleDeactiveFormOther2();
});

function handleActiveFormOther2() {
  formOther2.style.display = "none";
  formOther3.style.display = "block";
}
btnSubmitOther2.addEventListener("click", function (e) {
  handleActiveFormOther2();
});

function handleDeactiveFormOther3() {
  formOther2.style.display = "block";
  formOther3.style.display = "none";
}
btnBackOther3.addEventListener("click", function (e) {
  handleDeactiveFormOther3();
});

function handleActiveFormOther3() {
  formOther3.style.display = "none";
  formOther4.style.display = "block";
}
btnSubmitOther3.addEventListener("click", function (e) {
  handleActiveFormOther3();
});

function handleDeactiveFormOther4() {
  formOther3.style.display = "block";
  formOther4.style.display = "none";
}
btnBackOther4.addEventListener("click", function (e) {
  handleDeactiveFormOther4();
});

function handleActiveFormOther4() {
  formOther4.style.display = "none";
  formOther5.style.display = "block";
}
btnSubmitOther4.addEventListener("click", function (e) {
  handleActiveFormOther4();
});

function handleDeactiveFormOther5() {
  formOther4.style.display = "block";
  formOther5.style.display = "none";
}
btnBackOther5.addEventListener("click", function (e) {
  handleDeactiveFormOther5();
});

function handleActiveFormOther5() {
  formOther5.style.display = "none";
}
btnSubmitOther5.addEventListener("click", function (e) {
  handleActiveFormOther5();
});
