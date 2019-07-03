import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { Context } from './store/Context';
import { store } from './store/Store';

import './index.css';
import App from './App';


const newStore = store();

ReactDOM.render(
  <Context.Provider value={newStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
  , document.getElementById('root'));

module.hot.accept();