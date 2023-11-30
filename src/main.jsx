import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';
import {AuthProvider} from "./hooks/auth.jsx";
import {CookiesProvider} from "react-cookie";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
      <CookiesProvider>
          <AuthProvider>
              <App />
          </AuthProvider>
      </CookiesProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
