import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes';
import { ToastContainer } from "react-toastify";

import { RouterProvider } from "react-router/dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <RouterProvider router={router} />
   

    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
    />
  </StrictMode>,
)
