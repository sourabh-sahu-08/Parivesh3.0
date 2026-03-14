import { Link, useLocation } from "react-router-dom";
import { getStoredUser } from "../../utils/auth";

const DashboardSidebar = () => {
  const location = useLocation();
  const user = getStoredUser();

  const officerRoles = [
    "department_officer",
    "senior_approver",
    "field_inspector",
    "admin",
  ];

  const isOfficer = officerRoles.includes(user?.role);

  const citizenMenu = [
    { name: "Overview", path: "/dashboard" },
    { name: "New Application", path: "/apply" },
    { name: "Documents", path: "/dashboard/documents" },
    { name: "Notifications", path: "/dashboard/notifications" },
    { name: "Profile", path: "/dashboard/profile" },
  ];

  const officerMenu = [
    { name: "Overview", path: "/dashboard" },
    { name: "Manage Applications", path: "/manage-applications" },
    { name: "Notifications", path: "/dashboard/notifications" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Risk Map", path: "/risk-map" },
    { name: "Analytics", path: "/analytics" },
  ];

  const menuItems = isOfficer ? officerMenu : citizenMenu;

  return (
    <aside className="w-full lg:w-72 bg-white rounded-2xl shadow-md p-6 h-fit">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-700">
          {isOfficer ? "Officer Panel" : "Applicant Panel"}
        </h2>
        <p className="text-sm text-gray-500 mt-1">PARIVESH 3.0 Dashboard</p>
        <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Logged in as</p>
          <p className="font-semibold text-gray-800">{user?.name || "User"}</p>
          <p className="text-sm text-green-700 capitalize">
            {user?.role?.replaceAll("_", " ") || "citizen"}
          </p>
        </div>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`block rounded-xl px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;