import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXev1KuHLPM-h3qnc43V1seYSC9VgtnFY",
    authDomain: "mascotienda-f1ba9.firebaseapp.com",
    projectId: "mascotienda-f1ba9",
    storageBucket: "mascotienda-f1ba9.appspot.com",
    messagingSenderId: "74165459732",
    appId: "1:74165459732:web:d24713dbb159c539594001"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore(){
      return firebase.firestore(app)
  }