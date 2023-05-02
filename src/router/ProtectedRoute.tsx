

import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from "./utils";

export const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/sign-in" />
}