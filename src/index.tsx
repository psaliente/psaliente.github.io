import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';
import 'animate.css/animate.compat.css';
import './index.css';
import './assets/app.scss';

ReactGA.initialize('G-6NYDTZ48TT');
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(undefined);
