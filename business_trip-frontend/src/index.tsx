import dotenv from 'dotenv';
import * as React from 'react';
import { render } from 'react-dom';
import App from './app/App';

import "./styles/index.scss";

render(<App />, document.getElementById('root'));