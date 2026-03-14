import { Link } from "react-router-dom";
import EmptyState from "../ui/EmptyState";

const getStatusClass = (status) => {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-700";

    case "Submitted":
    case "Pending Documents":
      return "bg-yellow-100 text-yellow-700";

    case "Rejected":
      return "bg-red-100 text-red-700";

    case "Under Review":
    case "Inspection Scheduled":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const RecentApplications = ({ applications = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Recent Applications
        </h2>

        <span className="text-sm text-gray-500">
          Latest submitted records
        </span>
      </div>

      {applications.length === 0 ? (
        <EmptyState
          title="No Applications Yet"
          description="You have not submitted any environmental clearance applications."
        />
      ) : (
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3 px-2 text-gray-600 font-semibold">
                Application ID
              </th>

              <th className="py-3 px-2 text-gray-600 font-semibold">
                Project Name
              </th>

              <th className="py-3 px-2 text-gray-600 font-semibold">
                Category
              </th>

              <th className="py-3 px-2 text-gray-600 font-semibold">
                Status
              </th>

              <th className="py-3 px-2 text-gray-600 font-semibold">
                Date
              </th>

              <th className="py-3 px-2 text-gray-600 font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app._id}
                className="border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-2 font-medium text-gray-800">
                  {app._id.slice(-6).toUpperCase()}
                </td>

                <td className="py-4 px-2 text-gray-700">
                  {app.projectName}
                </td>

                <td className="py-4 px-2 text-gray-700">
                  {app.projectType}
                </td>

                <td className="py-4 px-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(
                      app.currentStatus
                    )}`}
                  >
                    {app.currentStatus}
                  </span>
                </td>

                <td className="py-4 px-2 text-gray-700">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>

                <td className="py-4 px-2">
                  <Link
                    to={`/applications/${app._id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecentApplications;