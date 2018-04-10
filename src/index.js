import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Index from './views/index/Index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
