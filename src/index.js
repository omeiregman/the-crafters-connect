import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/main.css';
import App from './App';
import './include/bootstrap';
import { unregister } from './registerServiceWorker';

//require('dotenv').config();

ReactDOM.render( <App />, document.getElementById('root'));
unregister();
