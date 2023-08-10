import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ auth: { isLogIn }, children }) => {
  return isLogIn ? children : <Navigate to="/login" />;
};

const PrivateWrapped = ({ auth: { isLogIn } }) => {
  return isLogIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
