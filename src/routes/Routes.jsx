import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import ErrorPage from "../pages/Error/ErrorPage";
import Signin from "../pages/Auth/Signin";
import Register from "../pages/Auth/Register";
import BillDetails from "../pages/Bills/BillDetails";
import MyBills from "../pages/MyBills/MyBills";
import AddBill from "../pages/AddBill/AddBill";
import PrivetRoutes from "./PrivetRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/resetpassword',
      },
      {
        path: '/bill-details/:id',
        element:
          <PrivetRoutes>
            <BillDetails></BillDetails>
          </PrivetRoutes>



      },
      {
        path: '/mybills',
        element: <PrivetRoutes>
          <MyBills></MyBills>
        </PrivetRoutes>

      },
      {

        path: '/addbills',
        element: <PrivetRoutes>
          <AddBill></AddBill>
        </PrivetRoutes>

      }
    ]
  },
]);

export default router;