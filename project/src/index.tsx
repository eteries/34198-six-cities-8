import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import { offers } from './mocks/offers';
import { reducer } from './store/reducer';

const OFFERS_NUM = 5;

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersNum={OFFERS_NUM} offers={offers} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
