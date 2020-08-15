import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8gwZx3o3CL-8bIbol3vEqcNO-d6iGBb0",
    authDomain: "slack-f67f6.firebaseapp.com",
    databaseURL: "https://slack-f67f6.firebaseio.com",
    projectId: "slack-f67f6",
    storageBucket: "slack-f67f6.appspot.com",
    messagingSenderId: "140225722200",
    appId: "1:140225722200:web:4337622b846b9500af172d",
    measurementId: "G-5QFGZ31WKM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;