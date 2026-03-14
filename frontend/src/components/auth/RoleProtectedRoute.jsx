import { Navigate } from "react-router-dom";
import { getStoredUser, isAuthenticated } from "../../utils/auth";

const RoleProtectedRoute = ({ children, allowedRoles = [] }) => {
  const loggedIn = isAuthenticated();
  const user = getStoredUser();

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RoleProtectedRoute;