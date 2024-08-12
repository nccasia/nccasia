import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDK9mFMiiI7c3wB_BPzYW8Qs1F7PAn5gwU",
    authDomain: "nccfirebase-73262.firebaseapp.com",
    databaseURL: "https://nccfirebase-73262-default-rtdb.firebaseio.com",
    projectId: "nccfirebase-73262",
    storageBucket: "nccfirebase-73262.appspot.com",
    messagingSenderId: "526479590712",
    appId: "1:526479590712:web:c2ea75cf757d2d9ea66dcd"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const formCareer = document.querySelector(".wpcf7-form");
const textInputs = formCareer.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="file"]'
);
const closeButton = document.querySelector(".close-button");
formCareer.addEventListener("submit", function (event) {
    event.preventDefault();
    handleSaveFormCareer();
});

function fetchDataAndRender() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');

    fetch(`https://career.ncc.asia/wp-json/wp/v2/posts/${jobId}`)
        .then((response) => response.json())
        .then((data) => {
            renderJobDetails(data);
            renderSimilarJobs(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}
fetchDataAndRender();

function renderJobDetails(job) {
    if (job) {
        const breadcrumbLast = document.querySelector('.breadcrumb_last');
        breadcrumbLast.textContent = job.title.rendered;
        const nccthemeTitle = document.querySelector('.ncctheme-title');
        nccthemeTitle.textContent = job.title.rendered;

        // jobDetail
        const jobDetail = document.querySelector('.left-content');
        jobDetail.innerHTML = job.content.rendered;
        document.getElementById('viewCount').innerText = job.meta.post_views_count;

    } else {
        console.error(`Job with id ${jobId} not found.`);
    }
}
async function renderSimilarJobs() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const jobId = parseInt(urlParams.get('id'));
        const response = await fetch('https://career.ncc.asia/wp-json/wp/v2/posts');
        const data = await response.json();

        const currentJob = data.find(job => job.id === jobId);
        if (!currentJob) {
            console.error(`Job with id ${jobId} not found.`);
            return;
        }

        const similarJobsContainer = document.querySelector('.similar-jobs');
        similarJobsContainer.innerHTML = '';

        const similarJobs = data.filter(job => job.id !== jobId && job.type === currentJob.type);
        similarJobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('short-description');

            jobElement.innerHTML = `
                <h5 class="title">
                    <a href="/jobdetails.html?id=${job.id}">${job.meta.name_job}</a>
                </h5>
                <div class="description">
                    ${job.meta.short_description}
                </div>
                <a href="/jobdetails.html?id=${job.id}">Read More</a>
            `;

            similarJobsContainer.appendChild(jobElement);
        });
    } catch (error) {
        console.error('Error fetching similar jobs:', error);
    }
}

function validateInputs() {
    let isValid = true;

    textInputs.forEach((input) => {
        // Check if input is required and empty
        if (
            input.value.trim().length <= 0 &&
            input.classList.contains("wpcf7-validates-as-required")
        ) {
            input.parentNode.querySelector(".wpcf7-not-valid-tip").style.display = "block";
            isValid = false;
        } else {
            input.parentNode.querySelector(".wpcf7-not-valid-tip").style.display = "none";
        }

        // Check email format
        if (input.type === "email" && input.value.trim().length > 0) {
            const emailRegex =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(input.value.trim())) {
                input.parentNode.querySelector(".email-error").style.display =
                    "block";
                isValid = false;
            } else {
                input.parentNode.querySelector(".email-error").style.display = "none";
            }
        }
    });
    return isValid;
}

async function handleSaveFormCareer() {
    const fields = {
        fullName: 'your-name',
        email: 'your-email',
        jobTitle: 'text-111',
        office: 'menu-618',
        file: 'file-297',
    };

    const formData = {};

    Object.keys(fields).forEach(key => {
        const field = fields[key];
        formData[key] = formCareer.querySelector(`input[name="${field}"], select[name="${field}"]`).value;
    });

    const { fullName, email, jobTitle, office } = formData;
    const fileInput = formCareer.querySelector('input[name="file-297"]');
    const fileToUpload = fileInput.files[0];

    const inputsAreValid = validateInputs();
    if (!inputsAreValid) {
        event.preventDefault();
        return;
    }

    // Disable submit button and show loading spinner
    const submitButton = formCareer.querySelector('input[type="submit"]');
    submitButton.disabled = true;
    const loadingSpinner = document.querySelector('.svg-spinners--bars-rotate-fade');
    loadingSpinner.style.display = 'block';
    try {
        // Upload file to Firebase Storage
        const fileRef = storageRef(storage, `files/${fileToUpload.name}`);
        await uploadBytes(fileRef, fileToUpload);

        const downloadURL = await getDownloadURL(fileRef);

        await addDoc(collection(firestore, "career"), {
            fullName: fullName,
            email: email,
            jobTitle: jobTitle,
            office: office,
            fileURL: downloadURL,
        });

        await push(ref(database, "career"), {
            fullName: fullName,
            email: email,
            jobTitle: jobTitle,
            office: office,
            fileURL: downloadURL,
        });

        const successBox = document.querySelector(".success-box");
        successBox.style.display = "block";
        const applyBox = document.getElementById("apply-form");
        applyBox.style.display = "flex";
        applyBox.style.alignItems = "center";

    } catch (error) {
        console.error("Error handling form submission:", error);
    } finally {
        // Enable submit button and hide loading spinner
        loadingSpinner.style.display = 'none';
        submitButton.disabled = false;
    }
}

closeButton.addEventListener("click", removeActive);
function removeActive() {
    var applyForm = document.getElementById("apply-form");
    if (applyForm.classList.contains("active")) {
        applyForm.classList.remove("active");
    }
    const successBox = document.querySelector(".success-box");
    successBox.style.display = "none";
    applyForm.style.display = "none";
    const formCareer = document.querySelector(".wpcf7-form");
    formCareer.reset()
}

// click icon menu
var menuBtn = document.querySelector(".menu-icon-btn");
menuBtn.addEventListener("click", function () {
    var menuIcon = document.querySelector(".menu-icon-btn");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    if (!menuIcon.classList.contains("toggled")) {
        menuIcon.classList.add("toggled");
        navbarCollapse.style.display = "block";
    } else {
        menuIcon.classList.remove("toggled");
        navbarCollapse.style.display = "none";
    }
});

// close popup
window.addEventListener('click', function (event) {
    var applyForm = document.getElementById('apply-form');
    var container = document.querySelector('.container-apply-form');

    if (event.target.contains(applyForm) || event.target.contains(container)) {
        removeActive();
    }
});

document.querySelector('input[type="file"]').addEventListener('change', function (event) {
    var fileName = event.target.files[0].name;
    document.querySelector('.contact-form__file-name').innerText = fileName;
});