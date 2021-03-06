import firebase from "firebase/app";
import "firebase/auth";

//set vars for process.env
const firebaseConfig = {
    apiKey: "AIzaSyCYSpgPVmvZYZNrWz2whxMcQ0qulqQ1wx4",
    authDomain: "quasar--auth.firebaseapp.com",
    projectId: "quasar--auth",
    storageBucket: "quasar--auth.appspot.com",
    messagingSenderId: "608023091006",
    appId: "1:608023091006:web:abb0169ff10f48c8173e6f"
  };

// if firebase isn't already initialize, initialize using the above credentials
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    })
  };

export default firebase
