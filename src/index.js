import React from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import './components/app/main.scss';

import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
