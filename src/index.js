import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import "./assets/lib/animate/animate.css"
import "./assets/lib/animate/animate.min.css"
import "./assets/lib/owlcarousel/assets/owl.carousel.css"
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css"
import "./assets/lib/owlcarousel/assets/owl.theme.default.css"
import "./assets/lib/owlcarousel/assets/owl.theme.default.min.css"
import "./assets/lib/owlcarousel/assets/owl.theme.green.css"
import "./assets/lib/owlcarousel/assets/owl.theme.green.min.css"
import "./assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.css"
import "./assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
