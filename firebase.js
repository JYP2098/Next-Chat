import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUF8lvCF7Uu5CVT6oUyaMGLPh-sPLIIoA",
    authDomain: "whatsapp-2-c25cb.firebaseapp.com",
    projectId: "whatsapp-2-c25cb",
    storageBucket: "whatsapp-2-c25cb.appspot.com",
    messagingSenderId: "538383291841",
    appId: "1:538383291841:web:0566e3327a7ba16d198b40",
    measurementId: "G-R5CFF7JNHE"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};