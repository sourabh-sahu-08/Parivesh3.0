const getStatusClass = (status) => {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    case "Under Review":
      return "bg-blue-100 text-blue-700";
    case "Pending Documents":
      return "bg-yellow-100 text-yellow-700";
    case "Inspection Scheduled":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ApplicationManagementTable = ({
  applications,
  selectedApplication,
  onSelectApplication,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Applications</h2>
        <span className="text-sm text-gray-500">
          {applications.length} records
        </span>
      </div>

      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3 px-2">ID</th>
            <th className="py-3 px-2">Project</th>
            <th className="py-3 px-2">Applicant</th>
            <th className="py-3 px-2">Type</th>
            <th className="py-3 px-2">Category</th>
            <th className="py-3 px-2">Status</th>
            <th className="py-3 px-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr
                key={app._id}
                className={`border-b hover:bg-gray-50 ${
                  selectedApplication?._id === app._id ? "bg-green-50" : ""
                }`}
              >
                <td className="py-4 px-2 font-medium text-gray-800">
                  {app._id.slice(-6).toUpperCase()}
                </td>
                <td className="py-4 px-2 text-gray-700">{app.projectName}</td>
                <td className="py-4 px-2 text-gray-700">
                  {app.applicant?.name || "-"}
                </td>
                <td className="py-4 px-2 text-gray-700">{app.projectType}</td>
                <td className="py-4 px-2 text-gray-700">
                  {app.industryCategory}
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
                <td className="py-4 px-2">
                  <button
                    onClick={() => onSelectApplication(app)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="py-6 text-center text-gray-500">
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationManagementTable;