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
import About from "../pages/About/About";
import MyProfile from "../pages/Profile/MyProfile";
import UpdateProfile from "../pages/Profile/UpdateProfile";


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
        path: "/profile",
        element: <PrivetRoutes>
          <MyProfile></MyProfile>
        </PrivetRoutes>
      },
      {
        path: "/updateprofile",
        element: <PrivetRoutes>
          <UpdateProfile></UpdateProfile>
        </PrivetRoutes>
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

      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);

export default router;