import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContextProvider from './Context/ContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
