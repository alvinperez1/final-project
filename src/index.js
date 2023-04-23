import React from 'react'
import {createRoot} from 'react-dom/client'
// https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app

import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { BrowserRouter } from 'react'

import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))
root.render(
 // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 // </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
