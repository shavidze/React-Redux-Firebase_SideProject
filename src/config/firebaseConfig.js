import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAOVwa8RRHd8oXOKxIYFeMtF_UBmnufnZ8",
  authDomain: "pmanagement-system.firebaseapp.com",
  databaseURL: "https://pmanagement-system.firebaseio.com",
  projectId: "pmanagement-system",
  storageBucket: "pmanagement-system.appspot.com",
  messagingSenderId: "324636520428",
  appId: "1:324636520428:web:035046dd2593a186035ac9",
  measurementId: "G-V8Y71YJQV8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
