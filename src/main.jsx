import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';
import {AuthProvider} from "./hooks/auth.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
      <AuthProvider>
          <App />
      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
