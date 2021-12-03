import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/userSelectors';

import App from './App';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import NotFound from './components/NotFound/NotFound';
import CollectionsOverview from './components/CollectionsOverview/CollectionsOverview';
import Collection from './components/Collection/Collection';

const Router = ({ currentUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />}>
            <Route path='/shop' element={<CollectionsOverview />} />
            <Route path='/shop/:categoryUrl' element={<Collection />} />
          </Route>
          <Route path='/checkout' element={<CheckoutPage />} />
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
  currentUser: selectCurrentUser(rootState),
});

export default connect(mapStateToProps)(Router);
