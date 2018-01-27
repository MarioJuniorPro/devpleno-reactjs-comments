import React from 'react';
import ReactDOM from 'react-dom';
import base, { auth, providers }from './base'

// import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App base={base} auth={auth} providers={providers}/>, document.getElementById('root'));
// registerServiceWorker();
