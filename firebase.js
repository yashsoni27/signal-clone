// import * as firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaM-lG64uE8ecC-HSLOTlHIK1t3mmMY6M",
  authDomain: "signal-clone-fb27d.firebaseapp.com",
  projectId: "signal-clone-fb27d",
  storageBucket: "signal-clone-fb27d.appspot.com",
  messagingSenderId: "139955975082",
  appId: "1:139955975082:web:6dea9f0ef8fae21ca431d3",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth  = firebase.auth();

export { db, auth };