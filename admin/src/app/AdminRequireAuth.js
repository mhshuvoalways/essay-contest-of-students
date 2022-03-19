import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth({ children }) {
  const auth = useSelector((store) => store.adminUserReducer.isAuthenticate);
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
