import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuA12Xci-dISzAq02V4ciGw2LlpwZ8Gn8",
  authDomain: "signal-clone-yt-build-50df0.firebaseapp.com",
  projectId: "signal-clone-yt-build-50df0",
  storageBucket: "signal-clone-yt-build-50df0.appspot.com",
  messagingSenderId: "663868530977",
  appId: "1:663868530977:web:9e1cd6c69705a4665a9e60",
  measurementId: "G-CQ7W8YNHRZ",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
