import DashboardWelcomeCard from "./DashboardWelcomeCard";

const officerStats = [
  {
    title: "Pending Reviews",
    value: "18",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "AI Flagged Cases",
    value: "6",
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Approved Today",
    value: "9",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Field Inspections",
    value: "4",
    color: "bg-blue-100 text-blue-700",
  },
];

const officerApplications = [
  {
    id: "PVX102",
    project: "Stone Crusher Plant",
    district: "Raipur",
    status: "Under Review",
    priority: "High",
  },
  {
    id: "PVX103",
    project: "Chemical Storage Unit",
    district: "Korba",
    status: "Pending Documents",
    priority: "High",
  },
  {
    id: "PVX104",
    project: "Rice Mill Expansion",
    district: "Durg",
    status: "Inspection Scheduled",
    priority: "Medium",
  },
];

const getPriorityClass = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-green-100 text-green-700";
  }
};

const OfficerDashboard = () => {
  return (
    <section className="space-y-8">
      <DashboardWelcomeCard />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {officerStats.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl shadow-md p-6">
            <div
              className={`inline-flex px-4 py-2 rounded-lg text-sm font-semibold ${item.color}`}
            >
              {item.title}
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mt-5">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            Priority Review Queue
          </h3>
          <span className="text-sm text-gray-500">Officer view</span>
        </div>

        <div className="space-y-4">
          {officerApplications.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-2xl p-5 bg-gray-50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    {item.project}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    {item.id} • {item.district}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                    {item.status}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityClass(
                      item.priority
                    )}`}
                  >
                    {item.priority} Priority
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficerDashboard;