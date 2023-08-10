import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> <BrowserRouter>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={1000} />
 
  </BrowserRouter></div>
);

