import { createBrowserRouter } from "react-router-dom";
import AddCamp from "../dashboard/addCamp/AddCamp";
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
      {
        path: "/dashboard/add-camp",
        element: <AddCamp />,
      },
    ],
  },
]);

export default router;
