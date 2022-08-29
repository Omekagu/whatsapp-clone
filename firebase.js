import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRN3Lu4Lnm5gpyfytcZGF4NyV4iH2sTzg',
  authDomain: 'whatsapp-2-ad063.firebaseapp.com',
  projectId: 'whatsapp-2-ad063',
  storageBucket: 'whatsapp-2-ad063.appspot.com',
  messagingSenderId: '586394018956',
  appId: '1:586394018956:web:6b7f600bf81372eb9607a9',
};

const app = !firebaseConfig.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
