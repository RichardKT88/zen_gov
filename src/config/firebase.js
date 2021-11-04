import { initializeApp } from "firebase/app";
// import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOtIp7-mi8UneNoOsqc15D0U6-r87hATA",
  authDomain: "zengov-da7c8.firebaseapp.com",
  projectId: "zengov-da7c8",
  storageBucket: "zengov-da7c8.appspot.com",
  messagingSenderId: "785661588633",
  appId: "1:785661588633:web:11ed0ea16734138fd77408"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
export default firebase;