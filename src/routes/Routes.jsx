import { createBrowserRouter } from "react-router-dom";
import DetailsLayout from "../layouts/DetailsLayout";
import RootLayout from "../layouts/RootLayout";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

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
    ],
  },
]);

export default router;
