import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBUunj96WwfAJ9tI9-HDaSMgdaCvLkvGFs",
  authDomain: "e-ride-91580.firebaseapp.com",
  projectId: "e-ride-91580",
  storageBucket: "e-ride-91580.appspot.com",
  messagingSenderId: "741921088103",
  appId: "1:741921088103:web:6981f34a8a36798bcdeac2"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


