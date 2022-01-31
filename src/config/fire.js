import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyC2YiYpAZWyo6WMb1qKBU_VY77mL3Rv-mM",
    authDomain: "login-app-ee91a.firebaseapp.com",
    projectId: "login-app-ee91a",
    storageBucket: "login-app-ee91a.appspot.com",
    messagingSenderId: "158031600863",
    appId: "1:158031600863:web:8a827f0c44f5a2a5221d6a",
    measurementId: "G-6HTJBYP079"
  };
  
  // Initialize Firebase
  const fire = initializeApp(firebaseConfig);
  
  export default fire;
