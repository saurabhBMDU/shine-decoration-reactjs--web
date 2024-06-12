// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import './assest/css/style.css'
// import './assest/css/responsive.css'
// import { Provider } from 'react-redux';
// import Store from './Store/store.js';

// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assest/css/style.css';
import './assest/css/responsive.css';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjusted import

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

