import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const RoleBasedProtectedRoute = ({ allowedRoles = [], children }) => {
  const authStatus = useSelector((state) => state.auth?.status);
  const userData = useSelector((state) => state.auth?.userData?.data);

  if (!authStatus || !userData) {
    return <Navigate to="/" replace />;
  }

  const hasRequiredRole =
    allowedRoles.length === 0 || allowedRoles.includes(userData?.userType);

  if (!hasRequiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children ? children : <Outlet />;
};
