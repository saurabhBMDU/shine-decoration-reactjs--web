import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assest/css/style.css'
import './assest/css/responsive.css'
// import './assest/js/main.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
