import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import NotFound from './components/NotFound/NotFound';

const Router = ({ currentUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route
            path='/signin'
            element={
              currentUser ? <Navigate replace to='/' /> : <SignInAndSignUp />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = rootState => ({
  currentUser: rootState.user.currentUser,
});

export default connect(mapStateToProps)(Router);
