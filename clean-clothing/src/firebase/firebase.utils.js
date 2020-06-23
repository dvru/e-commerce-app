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

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();
    console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });

    if(!snapShot.exists) {  
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      console.log(collectionRef);
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