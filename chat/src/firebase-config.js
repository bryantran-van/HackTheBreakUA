/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBj42BJURk4LvOOWPH-skwIC1_zOIhMiLY",
  authDomain: "hackthebreakua.firebaseapp.com",
  projectId: "hackthebreakua",
  storageBucket: "hackthebreakua.appspot.com",
  messagingSenderId: "1068651861074",
  appId: "1:1068651861074:web:fb9386c865f3684e34bb8b",
  measurementId: "G-NEN0JC99XJ"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}