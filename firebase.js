
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXVIfSlIhq17FzeeHwZcerRdgjNzs_8x4",
    authDomain: "whatsapp-clone-c8e8c.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c8e8c.firebaseio.com",
    projectId: "whatsapp-clone-c8e8c",
    storageBucket: "whatsapp-clone-c8e8c.appspot.com",
    messagingSenderId: "611609516823",
    appId: "1:611609516823:web:c93cb84dd06a930a4fb552",
    measurementId: "G-LSTQCKWH06"
  } 

  const firebaseApp = firebase.initializeApp 
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 