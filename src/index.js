import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
