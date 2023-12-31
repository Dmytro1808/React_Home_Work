import { Outlet, Navigate } from "react-router-dom";
import React from "react";

function PrivateRoute() {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
