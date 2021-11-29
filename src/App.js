import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './firebase/firebaseUtils';
import { doc, onSnapshot } from '@firebase/firestore';

import Header from './components/Header/Header';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        await createUserProfileDocument(userAuth);

        const userRef = doc(firestore, 'user', userAuth.uid);

        onSnapshot(userRef, doc => {
          this.setState({
            currentUser: {
              id: doc.id,
              photoURL: userAuth.photoURL,
              ...doc.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Outlet />
      </div>
    );
  }
}

export default App;
