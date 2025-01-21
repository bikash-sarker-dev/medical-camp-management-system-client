import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useOrganizer from "../hooks/useOrganizer";
import LoadingPage from "../pages/LoadingPage";
import useAuth from "./../hooks/useAuth";

const PrivateOrganizerRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isOrganize, isLoading] = useOrganizer();

  if (loading && isLoading) {
    return <LoadingPage />;
  }

  if (user && user?.email && isOrganize) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateOrganizerRoutes;
