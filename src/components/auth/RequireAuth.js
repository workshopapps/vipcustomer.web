import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthStore } from "store/contexts/AuthContext";

export default function RequireAuth() {
  const { user } = AuthStore();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
