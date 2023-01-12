const checkboxWeb = document.getElementById("web");
const checkboxMobile = document.getElementById("mobile");
const checkboxGame = document.getElementById("game");
const checkboxOther = document.getElementById("other");

const elLine1 = document.getElementById("line1");
const elLine2 = document.getElementById("line2");
const elLine3 = document.getElementById("line3");
const elLine4 = document.getElementById("line4");
const elLine5 = document.getElementById("line5");
const elLineGame = document.getElementById("lineGame");

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

const formGame1 = document.querySelector(".ncc_project-form_game1");
const formGame2 = document.querySelector(".ncc_project-form_game2");
const formGame3 = document.querySelector(".ncc_project-form_game3");
const formGame4 = document.querySelector(".ncc_project-form_game4");
const formGame5 = document.querySelector(".ncc_project-form_game5");
const btnSubmitGame1 = document.getElementById("button-submit_game1");
const btnSubmitGame2 = document.getElementById("button-submit_game2");
const btnSubmitGame3 = document.getElementById("button-submit_game3");
const btnSubmitGame4 = document.getElementById("button-submit_game4");
const btnSubmitGame5 = document.getElementById("button-submit_game5");
const btnBackGame1 = document.getElementById("button-back_game1");
const btnBackGame2 = document.getElementById("button-back_game2");
const btnBackGame3 = document.getElementById("button-back_game3");
const btnBackGame4 = document.getElementById("button-back_game4");
const btnBackGame5 = document.getElementById("button-back_game5");

const elReactjs = document.getElementById("reactjs");
const elAngularjs = document.getElementById("angularjs");
const elDotnet = document.getElementById("dotnet");
const elNodejs = document.getElementById("nodejs");
const elK8S = document.getElementById("K8S");
const elVuejs = document.getElementById("vuejs");
const elJava = document.getElementById("java");
const elPhp = document.getElementById("php");
const elServerless = document.getElementById("serverless");
const elRequirement = document.getElementById("requirement");

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

//game
const elCocos = document.getElementById("cocos");
const elUnity = document.getElementById("unity");
const elUe = document.getElementById("ue");
const elRequirementGame = document.getElementById("requirementGame");
const elWebGame = document.getElementById("webGame");
const elIos = document.getElementById("ios");
const elAndroid = document.getElementById("android");
const elDesktop = document.getElementById("desktop");

const elPurchase = document.getElementById("purchase");
const elQuest = document.getElementById("quest");
const elIllustrator = document.getElementById("illustrator");
const elPvp = document.getElementById("pvp");
const elServer = document.getElementById("server");
const elBattles = document.getElementById("battles");
const elApplication = document.getElementById("application");
const elUsage = document.getElementById("Usage");

const elCasualKids = document.getElementById("casualKids");
const elRpgAction = document.getElementById("rpgAction");
const elAutoBattler = document.getElementById("autoBattler");
const elQuizzes = document.getElementById("quizzes");

const elIdeaGame = document.getElementById("ideaGame");
const elSketchesGame = document.getElementById("sketchesGame");
const elPrototypes = document.getElementById("prototypes");
const elExisting = document.getElementById("existing");
const elMaintenanceProduct = document.getElementById("maintenanceProduct");

let content = "";
let newVal = 1;
let checkedForm = 0;
function setTextHtml(id, sum) {
  headingTitle.innerHTML = "";
  let textH3;
  if (sum) {
    textH3 = document.createTextNode(`Progress (${id}/${sum})`);
  } else {
    textH3 = document.createTextNode(`Progress (${id}/5)`);
  }
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
  if (
    checkboxWeb.checked &&
    !checkboxMobile.checked &&
    !checkboxGame.checked &&
    !checkboxOther.checked
  ) {
    elLineGame.style.display = "none";
    checkedForm = 0;
    handleActiveFormOther();
  } else if (
    checkboxMobile.checked &&
    !checkboxWeb.checked &&
    !checkboxGame.checked &&
    !checkboxOther.checked
  ) {
    elLineGame.style.display = "none";
    checkedForm = 0;
    handleActiveFormOther();
  } else if (
    checkboxGame.checked &&
    !checkboxMobile.checked &&
    !checkboxWeb.checked &&
    !checkboxOther.checked
  ) {
    elLineGame.style.display = "block";
    checkedForm = 1;
    handleActiveFormGame();
  } else if (
    checkboxOther.checked &&
    !checkboxMobile.checked &&
    !checkboxGame.checked &&
    !checkboxWeb.checked
  ) {
    elLineGame.style.display = "none";
    checkedForm = 0;
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
    content = content + "Reactjs\n";
  }
  if (elAngularjs.checked) {
    content = content + "AngularJs\n";
  }
  if (elDotnet.checked) {
    content = content + "Dotnet Framework\n";
  }
  if (elNodejs.checked) {
    content = content + "NodeJS Stack\n";
  }
  if (elK8S.checked) {
    content = content + "K8S\n";
  }
  if (elVuejs.checked) {
    content = content + "VueJs\n";
  }
  if (elJava.checked) {
    content = content + "Java Spring Boot\n";
  }
  if (elPhp.checked) {
    content = content + "PHP\n";
  }
  if (elServerless.checked) {
    content = content + "Serverlesss\n";
  }
  if (elRequirement.checked) {
    content = content + "Can be anything that fit project requirement\n";
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
  setTextHtml(1);
}
btnBackOther2.addEventListener("click", function (e) {
  handleDeactiveFormOther2();
});

function handleActiveFormOther2() {
  formOther2.style.display = "none";
  formOther3.style.display = "block";
  elLine3.style.backgroundColor = "var(--blue-color)";
  let contentOther2 = "\n- What features do you need on your project?";
  content = content + contentOther2 + "\n";
  if (elAuthentication.checked) {
    content = content + "Normal Authentication\n";
  }
  if (elDashboard.checked) {
    content = content + "Dashboard\n";
  }
  if (elCamera.checked) {
    content = content + "Camera/Photos/Videos\n";
  }
  if (elCart.checked) {
    content = content + "Shopping Cart\n";
  }
  if (elManagement.checked) {
    content = content + "Security Management\n";
  }
  if (elSocial.checked) {
    content = content + "Social network Authentication\n";
  }
  if (elLocations.checked) {
    content = content + "Maps/Directions/Locations\n";
  }
  if (elSimplified.checked) {
    content = content + "Simplified/Extended Chat\n";
  }
  if (elGateway.checked) {
    content = content + "Payment Gateway\n";
  }
  if (elMigration.checked) {
    content = content + "Integration/Migration\n";
  }
  const features = document.getElementById("features").value;
  if (features !== "") {
    content = content + features + "\n";
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
  setTextHtml(2);
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
    content = content + "Idea\n";
  }
  if (elSketches.checked) {
    content = content + "Sketches\n";
  }
  if (elDetailed.checked) {
    content = content + "Detailed Prototypes\n";
  }
  if (elRebuild.checked) {
    content = content + "Rebuild existing product\n";
  }
  if (elMaintenance.checked) {
    content = content + "Maintenance of product\n";
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
  setTextHtml(3);
}
btnBackOther4.addEventListener("click", function (e) {
  handleDeactiveFormOther4();
});

function setTextSlider() {
  if (newVal == 1) {
    content =
      content +
      "\n- Your expected timeline to finish the project?\n" +
      `0${newVal} Month` +
      "\n";
  } else if (newVal == 10) {
    content =
      content +
      "\n- Your expected timeline to finish the project?\n" +
      `0${newVal} Months` +
      "\n";
  } else {
    content =
      content +
      "\n- Your expected timeline to finish the project?\n" +
      `${newVal} Months` +
      "\n";
  }
}

function handleActiveFormOther4(id) {
  el = `elLine${id}`;
  formOther4.style.display = "none";
  formOther5.style.display = "block";
  if (el == "elLine5") {
    elLine5.style.backgroundColor = "var(--blue-color)";
  }
  let contentOther4 = "\n- What features do you need on your project?";
  content = content + contentOther4 + "\n";
  if (elCms.checked) {
    content = content + "CMS\n";
  }
  if (elEducation.checked) {
    content = content + "Education\n";
  }
  if (elTournament.checked) {
    content = content + "Esport/Tournament\n";
  }
  if (elProducts.checked) {
    content = content + "Showroom of products\n";
  }
  if (elMedia.checked) {
    content = content + "Social Media\n";
  }
  if (elCommerce.checked) {
    content = content + "E-commerce\n";
  }
  if (elStock.checked) {
    content = content + "Stock/Crypto Currency/Financial Market\n";
  }
  if (elTravel.checked) {
    content = content + "Travel\n";
  }
  const description = document.getElementById("description").value;
  if (description !== "") {
    content =
      content +
      "\n- Can you give us other short description of your project?\n" +
      description +
      "\n";
  }
  const websites = document.getElementById("websites").value;
  if (websites !== "") {
    content =
      content +
      "\n- Are there websites that you want us to based on?\n" +
      websites +
      "\n";
  }
  const improve = document.getElementById("improve").value;
  if (improve !== "") {
    content =
      content +
      "\n- What do you expect to improve from those website?\n" +
      improve +
      "\n";
  }
  setTextSlider();
  setTextHtml(5);
}
btnSubmitOther4.addEventListener("click", function (e) {
  handleActiveFormOther4(5);
});

function handleDeactiveFormOther5(id) {
  if (checkedForm == 0) {
    el = `elLine${id}`;
    formOther4.style.display = "block";
    formOther5.style.display = "none";
    if (el == "elLine5") {
      elLine5.style.backgroundColor = "var(--white-color)";
    }
    setTextHtml(4);
  } else {
    formGame5.style.display = "block";
    formOther5.style.display = "none";
    elLine5.style.backgroundColor = "var(--white-color)";
    setTextHtml(5, 6);
  }
}
btnBackOther5.addEventListener("click", function (e) {
  handleDeactiveFormOther5(5);
});

const validateEmailSur = (email) => {
  return email.match(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );
};

const validatePhoneSurvey = (phoneSurvey) => {
  return phoneSurvey.match(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );
};

function handleActiveFormOther5(data) {
  fetch("https://email.ncc.asia/ncc-site-api-sendmail", {
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
          "nameSuccessSurvey",
          "Thank you, your submission has been received."
        );
        formEl.reset();
      } else {
        printMess("nameErrorSurvey", `${result.message}`);
      }
    })
    .catch((err) => {
      printMess(
        "nameErrorSurvey",
        "Oops, something went wrong. Please try again later."
      );
    });
  formOther5.style.display = "none";
  timeline.style.display = "none";
  form.style.display = "block";
  elLineGame.style.backgroundColor = "var(--white-color)";
  elLine5.style.backgroundColor = "var(--white-color)";
  elLine4.style.backgroundColor = "var(--white-color)";
  elLine3.style.backgroundColor = "var(--white-color)";
  elLine2.style.backgroundColor = "var(--white-color)";
  elLine1.style.backgroundColor = "var(--white-color)";
  content = "";
  checkedForm = 0;
}
btnSubmitOther5.addEventListener("click", function (e) {
  const fullName = document.getElementById("nameSurvey").value;
  const email = document.getElementById("mailSurvey").value;
  const phone = document.getElementById("phoneSurvey").value;
  const textMail = document.getElementById("contentSurvey").value;
  const contentEmail = `\nsend: Name: ${fullName}, Phone: ${phone}, Content: ${textMail}`;
  content = content + contentEmail;
  const data = {
    email: email,
    content: content,
  };

  if (!validatePhoneSurvey(phone)) {
    return;
  }
  if (!validateEmailSur(email)) {
    return;
  }
  handleActiveFormOther5(data);
});

//game
function handleActiveFormGame() {
  form.style.display = "none";
  timeline.style.display = "block";
  formGame1.style.display = "block";
  setTextHtml(1, 6);
  elLine1.style.backgroundColor = "var(--blue-color)";
}

function handleDeactiveFormGame1() {
  form.style.display = "block";
  formGame1.style.display = "none";
  elLine1.style.backgroundColor = "var(--white-color)";
  timeline.style.display = "none";
}
btnBackGame1.addEventListener("click", function (e) {
  handleDeactiveFormGame1();
});

function handleActiveFormGame1() {
  let contentGame1 = "- Which technology do you prefer for the project? \n";
  formGame1.style.display = "none";
  formGame2.style.display = "block";
  elLine2.style.backgroundColor = "var(--blue-color)";
  if (elCocos.checked) {
    content = content + "Cocos\n";
  }
  if (elUnity.checked) {
    content = content + "Unity\n";
  }
  if (elUe.checked) {
    content = content + "ue4/5\n";
  }
  if (elRequirementGame.checked) {
    content = content + "Can be anything that fit game requirement\n";
  }
  const technologysGame = document.getElementById("technologysGame").value;
  if (technologysGame !== "") {
    content = content + technologysGame + "\n";
  }
  content = content + "\nWhich plattform do you want to use?\n";
  if (elWebGame.checked) {
    content = content + "Web\n";
  }
  if (elIos.checked) {
    content = content + "Ios\n";
  }
  if (elAndroid.checked) {
    content = content + "Android\n";
  }
  if (elDesktop.checked) {
    content = content + "Desktop\n";
  }
  const plattforms = document.getElementById("plattforms").value;
  if (plattforms !== "") {
    content = content + plattforms;
  }
  if (content !== "") {
    content = contentGame1 + content + "\n";
  }
  setTextHtml(2, 6);
}
btnSubmitGame1.addEventListener("click", function (e) {
  handleActiveFormGame1();
});

function handleDeactiveFormGame2() {
  formGame1.style.display = "block";
  formGame2.style.display = "none";
  elLine2.style.backgroundColor = "var(--white-color)";
  setTextHtml(1, 6);
}
btnBackGame2.addEventListener("click", function (e) {
  handleDeactiveFormGame2();
});

function handleActiveFormGame2() {
  formGame2.style.display = "none";
  formGame3.style.display = "block";
  elLine3.style.backgroundColor = "var(--blue-color)";
  let contentGame2 = "\n- What features do you need on your project?";
  content = content + contentGame2 + "\n";
  if (elPurchase.checked) {
    content = content + "In app purchase\n";
  }
  if (elQuest.checked) {
    content = content + "Daily/Achievement Quest\n";
  }
  if (elIllustrator.checked) {
    content = content + "3D illustrator\n";
  }
  if (elPvp.checked) {
    content = content + "Real Time PvP\n";
  }
  if (elServer.checked) {
    content = content + "Server/Private Chat\n";
  }
  if (elBattles.checked) {
    content = content + "Battles\n";
  }
  if (elApplication.checked) {
    content = content + "Damage/Level/… calculation and application\n";
  }
  if (elUsage.checked) {
    content = content + "Offline Usage\n";
  }
  setTextHtml(3, 6);
}
btnSubmitGame2.addEventListener("click", function (e) {
  handleActiveFormGame2();
});

function handleDeactiveFormGame3() {
  formGame2.style.display = "block";
  formGame3.style.display = "none";
  elLine3.style.backgroundColor = "var(--white-color)";
  setTextHtml(2, 6);
}
btnBackGame3.addEventListener("click", function (e) {
  handleDeactiveFormGame3();
});

function handleActiveFormGame3() {
  formGame3.style.display = "none";
  formGame4.style.display = "block";
  elLine4.style.backgroundColor = "var(--blue-color)";
  let contentGame3 = "\n- What is the expertise of the game?";
  content = content + contentGame3 + "\n";
  if (elCasualKids.checked) {
    content = content + "EDUCATION/CASUAL/KIDS\n";
  }
  if (elRpgAction.checked) {
    content = content + "RPG/ACTION/ADVENTURE\n";
  }
  if (elAutoBattler.checked) {
    content = content + "AUTO BATTLER\n";
  }
  if (elQuizzes.checked) {
    content = content + "IQ/QUIZZES\n";
  }
  setTextHtml(4, 6);
}
btnSubmitGame3.addEventListener("click", function (e) {
  handleActiveFormGame3();
});

function handleDeactiveFormGame4() {
  formGame3.style.display = "block";
  formGame4.style.display = "none";
  elLine4.style.backgroundColor = "var(--white-color)";
  setTextHtml(3, 6);
}
btnBackGame4.addEventListener("click", function (e) {
  handleDeactiveFormGame4();
});

function handleActiveFormGame4() {
  formGame4.style.display = "none";
  formGame5.style.display = "block";
  let contentGame4 = "\n- Can we know about the state of project?";
  content = content + contentGame4 + "\n";
  if (elIdeaGame.checked) {
    content = content + "Idea\n";
  }
  if (elSketchesGame.checked) {
    content = content + "Sketches\n";
  }
  if (elPrototypes.checked) {
    content = content + "Detailed Prototypes\n";
  }
  if (elExisting.checked) {
    content = content + "Rebuild existing product\n";
  }
  if (elMaintenanceProduct.checked) {
    content = content + "Maintenance of product\n";
  }
  elLineGame.style.display = "block";
  elLineGame.style.backgroundColor = "var(--blue-color)";
  setTextHtml(5, 6);
}
btnSubmitGame4.addEventListener("click", function (e) {
  handleActiveFormGame4();
});

function handleDeactiveFormGame5() {
  formGame4.style.display = "block";
  formGame5.style.display = "none";
  elLineGame.style.backgroundColor = "var(--white-color)";
  setTextHtml(4, 6);
}
btnBackGame5.addEventListener("click", function (e) {
  handleDeactiveFormGame5();
});

function handleActiveFormGame5() {
  formGame5.style.display = "none";
  formOther5.style.display = "block";
  elLine5.style.backgroundColor = "var(--blue-color)";
  let contentGame5 = "\n- Can we know more about your game?";
  content = content + contentGame5 + "\n";
  const contentDesGame = document.getElementById("contentDesGame").value;
  if (contentDesGame !== "") {
    content =
      content +
      "\n- Can you give us other short description of your project?\n" +
      contentDesGame +
      "\n";
  }
  const contentSimilarGame =
    document.getElementById("contentSimilarGame").value;
  if (contentSimilarGame !== "") {
    content =
      content +
      "\n- Is there similar game that you want to base on?\n" +
      contentSimilarGame +
      "\n";
  }
  const contentLikeGame = document.getElementById("contentLikeGame").value;
  if (contentLikeGame !== "") {
    content =
      content +
      "\n- What do you like/dislike about the similar game that you want to improve in your game?\n" +
      contentLikeGame +
      "\n";
  }
  setTextSlider();
  setTextHtml(6, 6);
}

btnSubmitGame5.addEventListener("click", function (e) {
  handleActiveFormGame5();
});

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("check");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

const slider = document.getElementById("myinput"),
  tickMarkContainer = document.querySelector(".ticks"),
  tickMarks = Array.prototype.slice.call(document.querySelectorAll(".tick"));

function setActive() {
  tickMarks.map(function (tick) {
    var tickIndex = parseInt(tick.getAttribute("data-range"));
    tick.classList.remove("active");
    tick.classList.remove("passed");
    if (tickIndex <= Math.floor(slider.value)) {
      tick.classList.add("passed");
      if (tickIndex === Math.round(slider.value)) {
        tick.classList.add("active");
      }
    }
  });
}

function updateSlider() {
  const oneMonthTick = document.querySelector(".tick:nth-child(1)");
  const twoMonthTick = document.querySelector(".tick:nth-child(2)");
  const threeMonthTick = document.querySelector(".tick:nth-child(3)");
  const fourMonthTick = document.querySelector(".tick:nth-child(4)");
  const fiveMonthTick = document.querySelector(".tick:nth-child(5)");
  const sixMonthTick = document.querySelector(".tick:nth-child(6)");
  const sevenMonthTick = document.querySelector(".tick:nth-child(7)");
  const eightMonthTick = document.querySelector(".tick:nth-child(8)");
  const nineMonthTick = document.querySelector(".tick:nth-child(9)");
  const tenMonthTick = document.querySelector(".tick:nth-child(10)");
  const novemberMonthTick = document.querySelector(".tick:nth-child(11)");
  const decemberMonthTick = document.querySelector(".tick:nth-child(12)");
  const textFace = document.querySelector(".rage_face");
  const textMonth = document.querySelector(".rage_value");

  (min = this.getAttribute("min")),
    (perc = (100 / 12) * this.value - 5),
    (currentRange = Math.floor(this.value));

  this.style.backgroundImage =
    "-webkit-gradient(linear, left top, right top, " +
    "color-stop(" +
    perc +
    "%, #b8b8b8), " +
    "color-stop(" +
    perc +
    "%, #3b3a3b" +
    ")";
  this.style.backgroundImage =
    "linear-gradient(to right, #3E50AF " + perc + "%, #FFFFFF " + perc + "%)";

  textFace.style.left = `${perc - 2}%`;
  if (this.value == 1) {
    textMonth.innerHTML = `0${this.value} Month`;
  } else if (this.value >= 10) {
    textMonth.innerHTML = `${this.value} Months`;
  } else {
    textMonth.innerHTML = `0${this.value} Months`;
  }

  if (currentRange == 1) {
    oneMonthTick.textContent = "1";
  } else {
    oneMonthTick.textContent = "";
  }

  if (currentRange == 2) {
    twoMonthTick.textContent = "2";
  } else {
    twoMonthTick.textContent = "";
  }

  if (currentRange == 3) {
    threeMonthTick.textContent = "3";
  } else {
    threeMonthTick.textContent = "";
  }

  if (currentRange == 4) {
    fourMonthTick.textContent = "4";
  } else {
    fourMonthTick.textContent = "";
  }

  if (currentRange == 5) {
    fiveMonthTick.textContent = "5";
  } else {
    fiveMonthTick.textContent = "";
  }

  if (currentRange == 6) {
    sixMonthTick.textContent = "6";
  } else {
    sixMonthTick.textContent = "";
  }

  if (currentRange == 7) {
    sevenMonthTick.textContent = "7";
  } else {
    sevenMonthTick.textContent = "";
  }

  if (currentRange == 8) {
    eightMonthTick.textContent = "8";
  } else {
    eightMonthTick.textContent = "";
  }

  if (currentRange == 9) {
    nineMonthTick.textContent = "9";
  } else {
    nineMonthTick.textContent = "";
  }

  if (currentRange == 10) {
    tenMonthTick.textContent = "10";
  } else {
    tenMonthTick.textContent = "";
  }

  if (currentRange == 12) {
    decemberMonthTick.textContent = "12";
  } else {
    decemberMonthTick.textContent = "";
  }

  if (currentRange == 11) {
    novemberMonthTick.textContent = "11";
  } else {
    novemberMonthTick.textContent = "";
  }

  setActive();
}

slider.addEventListener("change", updateSlider);
