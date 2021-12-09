import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';
import { fetchCollectionsStart } from './redux/shop/shopActions';

import App from './App';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import NotFound from './components/NotFound/NotFound';
import CollectionsOverviewContainer from './components/CollectionsOverview/CollectionsOverview.container';
import CollectionContainer from './components/Collection/Collection.container';

const Router = props => {
  const { currentUser, fetchCollectionsStart } = props;

  useEffect(() => {
    fetchCollectionsStart();
    console.log('router render!');
  }, [fetchCollectionsStart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />}>
            <Route path='' element={<CollectionsOverviewContainer />} />
            <Route path=':categoryUrl' element={<CollectionContainer />} />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
