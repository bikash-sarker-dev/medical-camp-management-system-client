import { createBrowserRouter } from "react-router-dom";
import AddCamp from "../dashboard/addCamp/AddCamp";
import AllParticipant from "../dashboard/allUser/AllParitcipant";
import ManageCamps from "../dashboard/ManageCams/ManageCams";
import ManageRegisteredCamps from "../dashboard/manageRegisteredCapms/ManageRegisteredCapms";
import ManageProfile from "../dashboard/MangeProfile/ManageProfile";
import Analytics from "../dashboard/participant/analytics/Analytics";
import Payment from "../dashboard/participant/payment/Payment";
import PaymentHistory from "../dashboard/participant/paymentHistory/PaymentHistory";
import RegisteredCampManage from "../dashboard/participant/registeredCampManage/RegisteredCampManage";
import DashboardLayout from "../layouts/DashboardLayout";
import DetailsLayout from "../layouts/DetailsLayout";
import RootLayout from "../layouts/RootLayout";
import AvailableCampPage from "../pages/AvailableCampPage";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/details/:id",
        element: <DetailsLayout />,
        children: [{ path: "/details/:id", element: <DetailsPage /> }],
      },
      {
        path: "/availableCamp",
        element: <AvailableCampPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // participant route
      {
        path: "/dashboard/registered-camps",
        element: <RegisteredCampManage />,
      },
      {
        path: "/dashboard/registered-camps/payment/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },

      // organizer route
      {
        path: "/dashboard/add-camp",
        element: <AddCamp />,
      },
      {
        path: "/dashboard/all-participant",
        element: <AllParticipant />,
      },
      {
        path: "/dashboard/manage-camps",
        element: <ManageCamps />,
      },
      {
        path: "/dashboard/manage-registered-camps",
        element: <ManageRegisteredCamps />,
      },
      {
        path: "/dashboard/manage-profile",
        element: <ManageProfile />,
      },
    ],
  },
]);

export default router;
