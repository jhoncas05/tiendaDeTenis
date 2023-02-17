
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCRb02_fFVd7Qbqrf-qWv0XJJ7-QRb28IM",
    authDomain: "tiendasurajc.firebaseapp.com",
    projectId: "tiendasurajc",
    storageBucket: "tiendasurajc.appspot.com",
    messagingSenderId: "286603163266",
    appId: "1:286603163266:web:e41269e7083f08e92ae69b",
    measurementId: "G-N6KJP42W1R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
