import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGZrI2mp4l-xi2rx0T-VBdm-XqaK4rE8o",
  authDomain: "dever-de-casa-71-1.firebaseapp.com",
  projectId: "dever-de-casa-71-1",
  storageBucket: "dever-de-casa-71-1.appspot.com",
  messagingSenderId: "301024948794",
  appId: "1:301024948794:web:3b8006f60d42d14b587b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
