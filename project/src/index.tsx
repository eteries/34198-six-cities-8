import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const OFFERS_NUM = 5;

ReactDOM.render(
  <React.StrictMode>
    <App offersNum={OFFERS_NUM} />
  </React.StrictMode>,
  document.getElementById('root'));
