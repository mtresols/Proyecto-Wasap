import React from 'react'
import ReactDom from  'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ThemeContextProvider from './Context/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </ThemeContextProvider>
)

