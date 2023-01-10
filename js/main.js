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

const elReactjs = document.getElementById("reactjs");
const elVuejs = document.getElementById("vuejs");
const elAngularjs = document.getElementById("angularjs");
const elRequirement = document.getElementById("requirement");
const elTechnologys = document.getElementById("technologys");

const elAuthentication = document.getElementById("authentication");
const elDashboard = document.getElementById("dashboard");
const elCamera = document.getElementById("camera");
const elCart = document.getElementById("cart");
const elManagement = document.getElementById("management");
const elSocial = document.getElementById("social");
const elLocations = document.getElementById("locations");
const elSimplified = document.getElementById("simplified");
const elGateway = document.getElementById("gateway");
const elMigration = document.getElementById("migration");

const elIdea = document.getElementById("idea");
const elSketches = document.getElementById("sketches");
const elDetailed = document.getElementById("detailed");
const elRebuild = document.getElementById("rebuild");
const elMaintenance = document.getElementById("maintenance");

const elCms = document.getElementById("cms");
const elEducation = document.getElementById("education");
const elTournament = document.getElementById("tournament");
const elProducts = document.getElementById("products");
const elMedia = document.getElementById("media");
const elCommerce = document.getElementById("commerce");
const elStock = document.getElementById("stock");
const elTravel = document.getElementById("travel");

let content = "";
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
  let contentOther1 = "- Which technology do you prefer for the project? \n";
  formOther1.style.display = "none";
  formOther2.style.display = "block";
  elLine2.style.backgroundColor = "var(--blue-color)";
  if (elReactjs.checked) {
    content = content + "Reactjs, ";
  }
  if (elVuejs.checked) {
    content = content + "VueJs, ";
  }
  if (elAngularjs.checked) {
    content = content + "VueJs, ";
  }
  if (elRequirement.checked) {
    content = content + "requirment, ";
  }
  const technologys = document.getElementById("technologys").value;
  if (technologys !== "") {
    content = content + technologys;
  }
  if (content !== "") {
    content = contentOther1 + content + "\n";
  }
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
  let contentOther2 = "- What features do you need on your project?";
  content = content + contentOther2 + "\n";
  if (elAuthentication.checked) {
    content = content + "Normal Authentication, ";
  }
  if (elDashboard.checked) {
    content = content + "Dashboard, ";
  }
  if (elCamera.checked) {
    content = content + "Camera/Photos/Videos, ";
  }
  if (elCart.checked) {
    content = content + "Shopping Cart, ";
  }
  if (elManagement.checked) {
    content = content + "Security Management, ";
  }
  if (elSocial.checked) {
    content = content + "Social network Authentication, ";
  }
  if (elLocations.checked) {
    content = content + "Maps/Directions/Locations, ";
  }
  if (elSimplified.checked) {
    content = content + "Simplified/Extended Chat, ";
  }
  if (elGateway.checked) {
    content = content + "Payment Gateway, ";
  }
  if (elMigration.checked) {
    content = content + "Integration/Migration, ";
  }
  const features = document.getElementById("features").value;
  if (features !== "") {
    content = content + features;
  }
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
  let contentOther3 = "\n- Can we know about the state of project?";
  content = content + contentOther3 + "\n";
  if (elIdea.checked) {
    content = content + "Idea, ";
  }
  if (elSketches.checked) {
    content = content + "Sketches, ";
  }
  if (elDetailed.checked) {
    content = content + "Detailed Prototypes, ";
  }
  if (elRebuild.checked) {
    content = content + "Rebuild existing product, ";
  }
  if (elMaintenance.checked) {
    content = content + "Maintenance of product, ";
  }
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
  elLine3.style.backgroundColor = "var(--blue-color)";
  let contentOther4 = "\n- What features do you need on your project?";
  content = content + contentOther4 + "\n";
  if (elCms.checked) {
    content = content + "CMS, ";
  }
  if (elEducation.checked) {
    content = content + "Education, ";
  }
  if (elTournament.checked) {
    content = content + "Esport/Tournament, ";
  }
  if (elProducts.checked) {
    content = content + "Showroom of products, ";
  }
  if (elMedia.checked) {
    content = content + "Social Media, ";
  }
  if (elCommerce.checked) {
    content = content + "E-commerce, ";
  }
  if (elStock.checked) {
    content = content + "Stock/Crypto Currency/Financial Market, ";
  }
  if (elTravel.checked) {
    content = content + "Travel, ";
  }
  const description = document.getElementById("description").value;
  if (description !== "") {
    content =
      content +
      "\n- Can you give us other short description of your project?\n" +
      description;
  }
  const websites = document.getElementById("websites").value;
  if (websites !== "") {
    content =
      content +
      "\n- Are there websites that you want us to based on?\n" +
      websites;
  }
  const improve = document.getElementById("improve").value;
  if (improve !== "") {
    content =
      content +
      "\n- What do you expect to improve from those website?\n" +
      improve +
      "\n";
  }
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
  const fullName = document.getElementById("nameSurvey").value;
  const email = document.getElementById("mailSurvey").value;
  const phone = document.getElementById("phoneSurvey").value;
  const textMail = document.getElementById("contentSurvey").value;
  const contentEmail = `Name: ${fullName}, Phone: ${phone}, Content: ${textMail}`;
  content = content + contentEmail;
  const data = {
    type: "survey",
    email: email,
    content: content,
  };
  fetch("http://localhost:8800/ncc-site-api-sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
