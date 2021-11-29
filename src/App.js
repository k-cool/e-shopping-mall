import React from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from './firebase/firebaseUtils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({ currentUser: user });
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
