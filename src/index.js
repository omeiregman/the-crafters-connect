import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/main.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
