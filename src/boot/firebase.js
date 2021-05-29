import firebase from "firebase";

//set vars for process.env
const firebaseConfig = {
    apiKey: "AIzaSyCYSpgPVmvZYZNrWz2whxMcQ0qulqQ1wx4",
    // apiKey: process.env.VUE_API_KEY,
    // apiKey: process.env.API_KEY,
    authDomain: "quasar--auth.firebaseapp.com",
    // authDomain: process.env.AUTH_DOMAIN,
    projectId: "quasar--auth",
    // projectId: process.env.PROJECT_ID,
    storageBucket: "quasar--auth.appspot.com",
    // storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: "608023091006",
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: "1:608023091006:web:abb0169ff10f48c8173e6f"
    // appId: process.env.APP_ID
  };
  firebase.initializeApp(firebaseConfig);
  // console.log('firebaseConfig', firebaseConfig),
  // console.log('vue app mode', process.env.VUE_APP_MODE)


firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    })
  };

export default firebase
