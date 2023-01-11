const btnPopup = document.getElementsByClassName("sub-button");
const btnSendProject = document.getElementsByClassName("button-primary");
const popup = document.querySelector(".modal");
const btnSendPopup = document.querySelector(".modal_popup_main button");
const inputPopup = document.querySelector(".modal-input");
// Click Send btn
btnSendPopup.addEventListener("click", function () {
  popup.classList.add("hidePopup");
});

// Click outside Popup
let category = 0;
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
  btnPopup[i].addEventListener("click", function (e) {
    handleTogglePopup();
    category = e.target.dataset.id;
  });
}

//event add animation when close
popup.addEventListener("animationend", function () {
  if (this.classList.contains("hidePopup")) {
    this.style.display = "none";
    this.classList.remove("hidePopup");
  }
});

const formSendEmail = document.querySelector(".send-email");
formSendEmail.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email-project").value;
  if (email === "") {
    return printMess("emailError", "Please fill out all required fields.");
  }

  fetch("https://email.ncc.asia/ncc-site-api-sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      type: "case_study",
      category: `${category}`,
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
});
