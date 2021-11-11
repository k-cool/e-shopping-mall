import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Homepage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
