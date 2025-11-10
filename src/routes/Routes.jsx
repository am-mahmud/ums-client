import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
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
    ]
  },
]);

export default router;