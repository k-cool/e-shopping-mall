import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './firebase/firebaseUtils';
import { doc, onSnapshot, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';

import Header from './components/Header/Header';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
