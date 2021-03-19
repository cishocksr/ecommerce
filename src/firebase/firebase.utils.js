import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBmyYPpOC9_1gLQXnZSkYeOGPnOeszytao',
  authDomain: 'ecommerce-app-d1d41.firebaseapp.com',
  projectId: 'ecommerce-app-d1d41',
  storageBucket: 'ecommerce-app-d1d41.appspot.com',
  messagingSenderId: '544127989931',
  appId: '1:544127989931:web:5dcc7d544ce8af688edfee',
  measurementId: 'G-4056D099JE',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
