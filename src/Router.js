import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/userSelectors';
import { collection, onSnapshot } from 'firebase/firestore';
import { updateCollections } from './redux/shop/shopActions';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from './firebase/firebaseUtils';

import App from './App';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import NotFound from './components/NotFound/NotFound';
import CollectionsOverview from './components/CollectionsOverview/CollectionsOverview';
import Collection from './components/Collection/Collection';

const Router = ({ currentUser, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeFromSnapshot = null;
    const collectionRef = collection(firestore, 'collections');

    unsubscribeFromSnapshot = onSnapshot(collectionRef, async snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      setLoading(false);

      return unsubscribeFromSnapshot();
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />}>
            <Route
              path=''
              element={<CollectionsOverview isLoading={loading} />}
            />
            <Route
              path=':categoryUrl'
              element={<Collection isLoading={loading} />}
            />
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

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
