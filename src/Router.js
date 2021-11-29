import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import App from './App';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import NotFound from './components/NotFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUp />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
