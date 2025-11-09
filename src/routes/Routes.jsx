import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import ResetPassword from "../pages/Auth/ResetPassword";
import ErrorPage from "../pages/Error/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/bills',
        element: <Bills></Bills>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/resetpassword",
        element: <ResetPassword></ResetPassword>
      },
    ]
  },
]);

export default router;