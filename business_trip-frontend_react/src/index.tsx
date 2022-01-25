import dotenv from 'dotenv';
import 'regenerator-runtime/runtime.js';
import * as React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import Provider from './store';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
