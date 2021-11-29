import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD7cBrramWdlO_GUSB55FARQvqFEMJMSSY',
  authDomain: 'eshoppingm-c3c5c.firebaseapp.com',
  projectId: 'eshoppingm-c3c5c',
  storageBucket: 'eshoppingm-c3c5c.appspot.com',
  messagingSenderId: '942939085365',
  appId: '1:942939085365:web:aac0d984cde0705e9c2f7c',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `/user/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName: displayName || additionalData.displayName,
        email: email,
        createdAt: createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return userRef;
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// get features that you need
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebaseApp;
