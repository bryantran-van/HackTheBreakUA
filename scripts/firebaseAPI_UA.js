//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBj42BJURk4LvOOWPH-skwIC1_zOIhMiLY",
    authDomain: "hackthebreakua.firebaseapp.com",
    projectId: "hackthebreakua",
    storageBucket: "hackthebreakua.appspot.com",
    messagingSenderId: "1068651861074",
    appId: "1:1068651861074:web:fb9386c865f3684e34bb8b",
    measurementId: "G-NEN0JC99XJ"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const analytics = getAnalytics(app);