import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getFirestore, addDoc, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
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
  // Kiểm tra dữ liệu trong Firestore
async function checkFirestoreData() {
  const careerCollection = collection(firestore, "career");
  const snapshot = await getDocs(careerCollection);
  snapshot.forEach(doc => {
    console.log(doc.id, "=>", doc.data());
  });
}

// Kiểm tra dữ liệu trong Realtime Database
async function checkRealtimeData() {
  const careerRef = ref(database, "career");
  const snapshot = await get(careerRef);
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}

checkFirestoreData();
checkRealtimeData();
  const storage = getStorage(app);

  const formCareer = document.querySelector(".wpcf7-form");
  const textInputs = formCareer.querySelectorAll(
    'input[type="text"], input[type="tel"], input[type="email"], input[type="file"]'
  );

  formCareer.addEventListener("submit", function (event) {
    event.preventDefault();
    handleSaveFormCareer();
  });


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
      phoneNumber: 'tel-577',
      email: 'your-email',
      jobTitle: 'text-111',
      office: 'menu-618',
      position: 'menu-718',
      aboutJob: 'text-628',
      file: 'file-297',
    };
    
    const formData = {};

    Object.keys(fields).forEach(key => {
      const field = fields[key];
      formData[key] = formCareer.querySelector(`input[name="${field}"], select[name="${field}"]`).value;
    });
    
    const { fullName, phoneNumber, email, jobTitle, office, position, aboutJob } = formData;
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
        phoneNumber: phoneNumber,
        email: email,
        jobTitle: jobTitle,
        office: office,
        position: position,
        aboutJob: aboutJob,
        fileURL: downloadURL,
      });

      await push(ref(database, "career"), {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        jobTitle: jobTitle,
        office: office,
        position: position,
        aboutJob: aboutJob,
        fileURL: downloadURL,
      });

      const applyForm = document.querySelector(".apply-box");
      applyForm.style.display = "none";
  
      const successBox = document.querySelector(".success-box");
      successBox.style.display = "block";
        
    } catch (error) {
      console.error("Error handling form submission:", error);
    } finally{
      // Enable submit button and hide loading spinner
      submitButton.disabled = false;
      loadingSpinner.style.display = 'none';
    }
  }

