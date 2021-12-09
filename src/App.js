import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './firebase/firebaseUtils';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';

import Header from './components/Header/Header';

import './App.scss';

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        await createUserProfileDocument(userAuth);

        const userRef = doc(firestore, 'user', userAuth.uid);

        const snapShot = await getDoc(userRef);
        setCurrentUser({
          id: snapShot.id,
          photoURL: userAuth.photoURL,
          ...snapShot.data(),
        });
      } else {
        setCurrentUser(null);
      }
    });
    console.log('app render!');
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
