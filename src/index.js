import React from 'react';
import ReactDOM from 'react-dom';
import App from './bootstrap';
import registerServiceWorker from './bootstrap/registerServiceWorker';
import './style/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
