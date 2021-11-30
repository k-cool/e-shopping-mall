import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './firebase/firebaseUtils';
import { doc, onSnapshot } from '@firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';

import Header from './components/Header/Header';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        await createUserProfileDocument(userAuth);

        const userRef = doc(firestore, 'user', userAuth.uid);

        onSnapshot(userRef, doc => {
          setCurrentUser({
            id: doc.id,
            photoURL: userAuth.photoURL,
            ...doc.data(),
          });
        });
      } else {
        setCurrentUser({ userAuth });
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
