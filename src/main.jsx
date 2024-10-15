import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShoppinCartProvider from './components/Context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShoppinCartProvider>
    <App />
    </ShoppinCartProvider>
  </BrowserRouter>,
)
