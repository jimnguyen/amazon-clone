import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNjzYk92VsQX6v71lWtO_KaVbBEFHZ5nc",
  authDomain: "clone-4d425.firebaseapp.com",
  projectId: "clone-4d425",
  storageBucket: "clone-4d425.appspot.com",
  messagingSenderId: "387513916348",
  appId: "1:387513916348:web:7848aba3e6f005aac8e9b9",
  measurementId: "G-V1T0H0ZX5W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
