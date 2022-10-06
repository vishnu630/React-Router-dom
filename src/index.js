import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Route, Routes} from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
   
);

