import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import StoreContexProvider from './context/StoredContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StoreContexProvider>
      <App />
    </StoreContexProvider>
  </BrowserRouter>

)
