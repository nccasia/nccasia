function printMess(elemId, message) {
  document.getElementById(elemId).innerHTML = message;
}
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const content = document.getElementById("content").value;
  const gresponse = grecaptcha.getResponse();

  grecaptcha.ready(function () {
    if (
      fullName === "" ||
      email === "" ||
      phone === "" ||
      content === "" ||
      gresponse === ""
    ) {
      document.getElementById("nameMiss").innerHTML =
        "Please fill out all required fields.";
      return;
    }

    Array.from(formEl.elements).forEach(
      (formElement) => (formElement.disabled = true)
    );
    const data = {
      email: email,
      content: `Name: ${fullName}\n Phone: ${phone}\n Content: ${content}`,
      gresponse: gresponse,
    };
    const btnSubmit = formEl.querySelector('button[type="submit"]');
    const btnLoading = formEl.querySelector('button[type="button"]');
    btnSubmit.classList.add("d-none");
    btnLoading.classList.remove("d-none");

    fetch("https://email.ncc.asia/ncc-site-api-sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.data.success) {
          printMess(
            "nameSuccess",
            "Thank you, your submission has been received."
          );
          formEl.reset();
        } else {
          printMess("nameError", `${result.data.message}`);
        }
      })
      .catch((err) => {
        printMess(
          "nameError",
          "Oops, something went wrong. Please try again later."
        );
      })
      .finally(() => {
        formEl.reset();
        Array.from(formEl.elements).forEach(
          (formElement) => (formElement.disabled = false)
        );
        btnSubmit.classList.remove("d-none");
        btnLoading.classList.add("d-none");
      });
  });
});
