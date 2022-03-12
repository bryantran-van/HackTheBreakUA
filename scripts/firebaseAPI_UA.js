//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBj42BJURk4LvOOWPH-skwIC1_zOIhMiLY",
    authDomain: "hackthebreakua.firebaseapp.com",
    projectId: "hackthebreakua",
    storageBucket: "hackthebreakua.appspot.com",
    messagingSenderId: "1068651861074",
    appId: "1:1068651861074:web:18b7206dc235092e34bb8b",
    measurementId: "G-MPLFXFWDEF"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();