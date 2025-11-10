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
        path: '/billdetails/:id',
        element: <BillDetails></BillDetails>
      },
      {
        path: '/mybills',
        element: <MyBills></MyBills>
      },
      {
        path: '/addbills',
        element: <AddBill></AddBill>
      }
    ]
  },
]);

export default router;