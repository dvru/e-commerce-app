import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-8vNZfBx1k-u-aLSZ8xNOFVQjO4XWGwQ",
    authDomain: "clean-db-cdbf9.firebaseapp.com",
    databaseURL: "https://clean-db-cdbf9.firebaseio.com",
    projectId: "clean-db-cdbf9",
    storageBucket: "clean-db-cdbf9.appspot.com",
    messagingSenderId: "637938925167",
    appId: "1:637938925167:web:5a710b28337171dc54179a",
    measurementId: "G-E2151JYQNP"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;