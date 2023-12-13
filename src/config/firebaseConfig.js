// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1mQ3Q6STpJ2Ne1OK03fOQKwFlDhacVw",
  authDomain: "cocktailapp-7f1f6.firebaseapp.com",
  projectId: "cocktailapp-7f1f6",
  storageBucket: "cocktailapp-7f1f6.appspot.com",
  messagingSenderId: "266611918861",
  appId: "1:266611918861:web:07d16cb3bac38b1ae5ad44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
