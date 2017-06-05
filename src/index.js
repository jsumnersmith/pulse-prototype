import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Page from './base/Page';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
