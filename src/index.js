import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "aos/dist/aos.css";
import AOS from "aos";

// AOS Animations Initialize
AOS.init({
  duration: 1000, // Animation speed (1s)
  once: true,      // Animation runs only once
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();