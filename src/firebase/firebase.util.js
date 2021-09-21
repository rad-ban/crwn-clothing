
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBivto2-qV8W0NCySGU2jRpxzkKC7Y2eI8",
  authDomain: "crown-clothing-b42d4.firebaseapp.com",
  projectId: "crown-clothing-b42d4",
  storageBucket: "crown-clothing-b42d4.appspot.com",
  messagingSenderId: "720498240881",
  appId: "1:720498240881:web:91cf2f048cb87edf845ad0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;