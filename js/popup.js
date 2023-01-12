const btnPopup = document.getElementsByClassName("sub-button");
const btnPopupMobile = document.querySelector(".sub-button2");
const btnSendProject = document.getElementsByClassName("button-primary");
const btnCancelPopupMobile = document.querySelector(".btn-cancel");
const popup = document.querySelector(".modal");
const popupMobile = document.querySelector(".mobile-modal");
const btnSendPopup = document.querySelector(".modal_popup_main button");
const inputPopup = document.querySelector(".modal-input");
const inputPopupMobile = document.querySelector(".modal-input-mb");

const btnCheck = document.getElementsByClassName("cbPopup");
//Function
const handleClosePopUp = () => {
  popup.style.display = "none";
  popup.classList.remove("hidePopup");
};
const handleClosePopUpMobile = () => {
  popupMobile.style.display = "none";
  popupMobile.classList.remove("hidePopup");
};
const handleOpenPopUp = () => {
  popup.style.display = "block";
};
const handleOpenPopUpMobile = () => {
  popupMobile.style.display = "block";
};
const resetPopUp = () => {
  category = [];
  inputPopup.value = "";
};
const resetPopUpMobile = () => {
  category = [];
  inputPopupMobile.value = "";
};
const validateEmail = (email) => {
  return email.match(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );
};
// Function end

// Click Send btn
// btnSendPopup.addEventListener("click", function () {
//   popup.classList.add("hidePopup");
// });
btnCancelPopupMobile.addEventListener("click", function () {
  popupMobile.classList.add("hidePopup");
});
// Click outside Popup
let category = [];
popup.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    popup.classList.add("hidePopup");
    resetPopUp();
  }
});

//Event Click  show popup
for (var i = 0; i < btnPopup.length; i++) {
  btnPopup[i].addEventListener("click", function (e) {
    handleOpenPopUp();
    resetPopUp();
    category.push(Number(e.target.dataset.id));
  });
}
//Event Click  show popup mobile
btnPopupMobile.addEventListener("click", function () {
  handleOpenPopUpMobile();
  resetPopUpMobile();
  for (var i = 0; btnCheck[i]; ++i) {
    btnCheck[i].checked = false;
  }
});
//event add animation when close
popup.addEventListener("animationend", function () {
  if (this.classList.contains("hidePopup")) {
    handleClosePopUp();
    resetPopUp();
  }
});
//event add animation when close Popup mobile
popupMobile.addEventListener("animationend", function () {
  if (this.classList.contains("hidePopup")) {
    handleClosePopUpMobile();
    resetPopUpMobile();
  }
});
// sendApi for PC screen
const formSendEmail = document.querySelector(".send-email");
formSendEmail.addEventListener("click", (event) => {
  const email = document.getElementById("email-project").value;
  if (!validateEmail(email)) {
    return;
  } else {
    handleClosePopUp();
    sendApi(email);
  }
});
// sendApi for Mobile screen
const formSendEmailMobile = document.querySelector(".send-email-mb");
formSendEmailMobile.addEventListener("click", (event) => {
  const emailMobile = document.getElementById("email-project-mb").value;
  if (!validateEmail(emailMobile)) {
    return;
  } else {
    for (var i = 0; btnCheck[i]; ++i) {
      if (btnCheck[i].checked) {
        category.push(Number(btnCheck[i].value));
      }
    }
    handleClosePopUpMobile();
    sendApi(emailMobile);
  }
});

function sendApi(email) {
  fetch("https://email.ncc.asia/ncc-site-api-sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      type: "case_study",
      category: category,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.success) {
        printMess(
          "nameSuccess",
          "Thank you, your submission has been received."
        );
        formEl.reset();
      } else {
        printMess("nameError", `${result.message}`);
      }
    })
    .catch((err) => {
      printMess(
        "nameError",
        "Oops, something went wrong. Please try again later."
      );
    });
}
