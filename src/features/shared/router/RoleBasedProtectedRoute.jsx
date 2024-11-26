import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const RoleBasedProtectedRoute = ({ allowedRoles = [], children }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  // If not logged in or no user data
  if (!authStatus || !userData) {
    return <Navigate to="/login" replace />;
  }

  // Check roles
  const hasRequiredRole =
    allowedRoles.length === 0 || allowedRoles.includes(userData.userType);

  // Redirect if no required role
  if (!hasRequiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render children or nested routes
  return children ? children : <Outlet />;
};
