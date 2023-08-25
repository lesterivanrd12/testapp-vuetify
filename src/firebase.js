// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrmhXTpN0kQnoDFScBiMrlv5iV-8RppMs",
  authDomain: "testapp-vuetify.firebaseapp.com",
  projectId: "testapp-vuetify",
  storageBucket: "testapp-vuetify.appspot.com",
  messagingSenderId: "465410603822",
  appId: "1:465410603822:web:d3847d25c89f89dc6298bf",
  measurementId: "G-BMN5WVM5HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const database = getFirestore(app)

export default database
