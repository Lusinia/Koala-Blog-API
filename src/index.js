import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './bootstrap';
import registerServiceWorker from './bootstrap/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/global.scss';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
