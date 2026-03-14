import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Apply from "../pages/Apply";
import Track from "../pages/Track";
import Advisor from "../pages/Advisor";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import NotFound from "../pages/NotFound";
import Documents from "../pages/Documents";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import RiskMap from "../pages/RiskMap";
import Analytics from "../pages/Analytics";
import Predictor from "../pages/Predictor";
import IotDashboard from "../pages/IotDashboard";
import ApprovalPrediction from "../pages/ApprovalPrediction";
import ApplicationManagement from "../pages/ApplicationManagement";
import ApplicationDetail from "../pages/ApplicationDetail";
import AdvancedIntelligence from "../pages/AdvancedIntelligence";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import RoleProtectedRoute from "../components/auth/RoleProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track" element={<Track />} />
      <Route path="/advisor" element={<Advisor />} />
      <Route path="/risk-map" element={<RiskMap />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/predictor" element={<Predictor />} />
      <Route path="/iot-monitoring" element={<IotDashboard />} />
      <Route path="/approval-prediction" element={<ApprovalPrediction />} />
      <Route path="/advanced-intelligence" element={<AdvancedIntelligence />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/apply"
        element={
          <RoleProtectedRoute allowedRoles={["citizen", "consultant"]}>
            <Apply />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/documents"
        element={
          <RoleProtectedRoute allowedRoles={["citizen", "consultant"]}>
            <Documents />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/dashboard/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications/:id"
        element={
          <ProtectedRoute>
            <ApplicationDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-applications"
        element={
          <RoleProtectedRoute
            allowedRoles={[
              "department_officer",
              "senior_approver",
              "field_inspector",
              "admin",
            ]}
          >
            <ApplicationManagement />
          </RoleProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;