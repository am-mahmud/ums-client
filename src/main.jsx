import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes';
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router/dom";
import AuthProvider from './contexts/AuthProvider';
import { ThemeProvider } from './contexts/ThemeContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>

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
