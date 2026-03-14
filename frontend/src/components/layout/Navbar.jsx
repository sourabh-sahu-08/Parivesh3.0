import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getStoredUser,
  isAuthenticated,
  logoutUser,
} from "../../utils/auth";
import { getUnreadNotificationCount } from "../../services/notificationService";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();
  const user = getStoredUser();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const officerRoles = [
    "department_officer",
    "senior_approver",
    "field_inspector",
    "admin",
  ];

  const isOfficer = officerRoles.includes(user?.role);

  useEffect(() => {
    const fetchUnreadCount = async () => {
      if (!loggedIn) return;

      try {
        const data = await getUnreadNotificationCount();
        setUnreadCount(data.unreadCount || 0);
      } catch (error) {
        console.error("Failed to fetch unread notifications:", error);
      }
    };

    fetchUnreadCount();
  }, [loggedIn]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-700">
          PARIVESH 3.0
        </Link>

        <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          <Link className="hover:text-green-600" to="/">
            Home
          </Link>

          <Link className="hover:text-green-600" to="/track">
            Track
          </Link>

          <Link className="hover:text-green-600" to="/advisor">
            AI Advisor
          </Link>

          <Link className="hover:text-green-600" to="/risk-map">
            Risk Map
          </Link>

          <Link className="hover:text-green-600" to="/analytics">
            Analytics
          </Link>

          {loggedIn && (
            <Link className="hover:text-green-600" to="/dashboard">
              Dashboard
            </Link>
          )}

          {!isOfficer && loggedIn && (
            <Link className="hover:text-green-600" to="/apply">
              Apply
            </Link>
          )}

          {isOfficer && loggedIn && (
            <Link className="hover:text-green-600" to="/manage-applications">
              Manage Apps
            </Link>
          )}

          {loggedIn && (
            <Link
              className="relative hover:text-green-600"
              to="/dashboard/notifications"
            >
              Notifications
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-4 min-w-[20px] h-5 px-1 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {loggedIn ? (
            <>
              <span className="text-sm text-gray-600 font-medium">
                {user?.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-white border border-green-600 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden bg-green-600 text-white px-3 py-2 rounded-lg"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-3">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block text-gray-700 font-medium hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/track"
            onClick={closeMobileMenu}
            className="block text-gray-700 font-medium hover:text-green-600"
          >
            Track
          </Link>

          <Link
            to="/advisor"
            onClick={closeMobileMenu}
            className="block text-gray-700 font-medium hover:text-green-600"
          >
            AI Advisor
          </Link>

          <Link
            to="/risk-map"
            onClick={closeMobileMenu}
            className="block text-gray-700 font-medium hover:text-green-600"
          >
            Risk Map
          </Link>

          <Link
            to="/analytics"
            onClick={closeMobileMenu}
            className="block text-gray-700 font-medium hover:text-green-600"
          >
            Analytics
          </Link>

          <Link className="hover:text-green-600" to="/advanced-intelligence">
            AI + GIS
          </Link>

          {loggedIn && (
            <Link
              to="/dashboard"
              onClick={closeMobileMenu}
              className="block text-gray-700 font-medium hover:text-green-600"
            >
              Dashboard
            </Link>
          )}

          {!isOfficer && loggedIn && (
            <Link
              to="/apply"
              onClick={closeMobileMenu}
              className="block text-gray-700 font-medium hover:text-green-600"
            >
              Apply
            </Link>
          )}

          {isOfficer && loggedIn && (
            <Link
              to="/manage-applications"
              onClick={closeMobileMenu}
              className="block text-gray-700 font-medium hover:text-green-600"
            >
              Manage Applications
            </Link>
          )}

          {loggedIn && (
            <Link
              to="/dashboard/notifications"
              onClick={closeMobileMenu}
              className="block text-gray-700 font-medium hover:text-green-600"
            >
              Notifications {unreadCount > 0 ? `(${unreadCount})` : ""}
            </Link>
          )}



          <div className="pt-3 border-t">
            {loggedIn ? (
              <>
                <p className="text-sm text-gray-600 mb-3">
                  Logged in as: <span className="font-semibold">{user?.name}</span>
                </p>
                <button
                  onClick={() => {
                    closeMobileMenu();
                    handleLogout();
                  }}
                  className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="w-full text-center bg-white border border-green-600 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;