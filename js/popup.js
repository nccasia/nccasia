const btnPopup = document.getElementsByClassName("sub-button");
const popup = document.querySelector(".modal");
const btnSendPopup = document.querySelector(".modal_popup_main button");
const inputPopup = document.querySelector(".modal-input");
// Click Send btn
btnSendPopup.addEventListener("click", function () {
  popup.classList.add("hidePopup");
  inputPopup.value = "";
});

// Click outside Popup
popup.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    popup.classList.add("hidePopup");
    inputPopup.value = "";
  }
});

//Event Click  show popup
function handleTogglePopup() {
  popup.style.display = "block";
}
for (var i = 0; i < btnPopup.length; i++) {
  btnPopup[i].addEventListener("click", handleTogglePopup);
}

//event add animation when close
popup.addEventListener("animationend", function () {
  if (this.classList.contains("hidePopup")) {
    this.style.display = "none";
    this.classList.remove("hidePopup");
  }
});
