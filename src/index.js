import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Room_detail from './pages/Room_detail';
import Bookingform from './pages/Bookingform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}

    <Routes>
      <Route path="/" element={<App />}/>
        {/* <Route index element={<Home />} /> */}
        <Route path="Roomenquiry/:id" element={<Room_detail />}/>
        <Route path="Roombooking/:id" element={<Bookingform />}/>
      
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
