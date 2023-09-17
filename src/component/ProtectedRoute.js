import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import config from "../config/routes";

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to={config.home} replace />;
  }

  return children ? children : <Outlet />;
};
