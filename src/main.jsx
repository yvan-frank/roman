import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';
import {AuthProvider} from "./hooks/auth.jsx";
import {CookiesProvider} from "react-cookie";
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
      <CookiesProvider>
          <AuthProvider>
              <QueryClientProvider client={queryClient}>
                  <App />
              </QueryClientProvider>
          </AuthProvider>
      </CookiesProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
