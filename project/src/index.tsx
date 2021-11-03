import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const OFFERS_NUM = 5;

ReactDOM.render(
  <React.StrictMode>
    <App offersNum={OFFERS_NUM} offers={offers} />
  </React.StrictMode>,
  document.getElementById('root'));
