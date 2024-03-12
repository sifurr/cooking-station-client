import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Dashboard from "../src/pages/Dashboard/Dashboard"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Dashboard />
  </React.StrictMode>,
)
