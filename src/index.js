import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Routers/Mainpageroute.js';
import Categories from './Routers/Categoriesroute.js';
import AppleDevices from './Routers/Device/DevicePersonaRoute.js';
import FooterLinks from './Routers/FooterLinks.js';
import reportWebVitals from './reportWebVitals';
import ReviewPages from './Routers/ReviewPages/ReviewPages.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Main />
    <Categories />
    <AppleDevices />
    <FooterLinks />
    <ReviewPages />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
