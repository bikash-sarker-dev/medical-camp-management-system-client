import { createBrowserRouter } from "react-router-dom";
import AddCamp from "../dashboard/addCamp/AddCamp";
import AllParticipant from "../dashboard/allUser/AllParitcipant";
import HomeDashboard from "../dashboard/homeDashboard/HomeDashboard";
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
import PrivateOrganizerRoutes from "./PrivateOrganizerRoutes";
import PrivateParticipantRoutes from "./PrivateParticipantRoutes";

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
    element: (
      <PrivateParticipantRoutes>
        <DashboardLayout />
      </PrivateParticipantRoutes>
    ),
    children: [
      // participant route
      {
        path: "/dashboard/registered-camps",
        element: (
          <PrivateParticipantRoutes>
            <RegisteredCampManage />
          </PrivateParticipantRoutes>
        ),
      },
      {
        path: "/dashboard/registered-camps/payment/:id",
        element: (
          <PrivateParticipantRoutes>
            <Payment />
          </PrivateParticipantRoutes>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateParticipantRoutes>
            <PaymentHistory />
          </PrivateParticipantRoutes>
        ),
      },
      {
        path: "/dashboard/analytics",
        element: (
          <PrivateParticipantRoutes>
            <Analytics />
          </PrivateParticipantRoutes>
        ),
      },

      // organizer route
      {
        path: "/dashboard/home",
        element: (
          <PrivateOrganizerRoutes>
            <HomeDashboard />
          </PrivateOrganizerRoutes>
        ),
      },
      {
        path: "/dashboard/add-camp",
        element: (
          <PrivateOrganizerRoutes>
            <AddCamp />
          </PrivateOrganizerRoutes>
        ),
      },
      {
        path: "/dashboard/all-participant",
        element: (
          <PrivateOrganizerRoutes>
            <AllParticipant />
          </PrivateOrganizerRoutes>
        ),
      },
      {
        path: "/dashboard/manage-camps",
        element: (
          <PrivateOrganizerRoutes>
            <ManageCamps />
          </PrivateOrganizerRoutes>
        ),
      },
      {
        path: "/dashboard/manage-registered-camps",
        element: (
          <PrivateOrganizerRoutes>
            <ManageRegisteredCamps />
          </PrivateOrganizerRoutes>
        ),
      },
      {
        path: "/dashboard/manage-profile",
        element: (
          <PrivateParticipantRoutes>
            <ManageProfile />
          </PrivateParticipantRoutes>
        ),
      },
    ],
  },
]);

export default router;
