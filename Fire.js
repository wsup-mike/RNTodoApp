import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHVjQJnx8BHVC9nO0isGhSWRGr2bQ2GAk",
  authDomain: "rntodoapp-db596.firebaseapp.com",
  projectId: "rntodoapp-db596",
  storageBucket: "rntodoapp-db596.appspot.com",
  messagingSenderId: "869624146801",
  appId: "1:869624146801:web:c4fa223290b71a751264d0",
};

class Fire {
  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {});
      }
    });
  }
}

export default Fire;
