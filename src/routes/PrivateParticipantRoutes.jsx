import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import useAuth from "./../hooks/useAuth";

const PrivateParticipantRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingPage />;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateParticipantRoutes;
