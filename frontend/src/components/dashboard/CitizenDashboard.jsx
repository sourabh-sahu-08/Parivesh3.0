import QuickActions from "./QuickActions";
import RecentApplications from "./RecentApplications";
import DashboardWelcomeCard from "./DashboardWelcomeCard";

const CitizenDashboard = ({ stats, applications, loading }) => {
  return (
    <section className="space-y-8">
      <DashboardWelcomeCard />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold bg-green-100 text-green-700">
            Applications Submitted
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-5">{stats.total}</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold bg-yellow-100 text-yellow-700">
            Pending Review
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-5">
            {stats.pending}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold bg-blue-100 text-blue-700">
            Approved
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-5">
            {stats.approved}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold bg-red-100 text-red-700">
            Rejected
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-5">
            {stats.rejected}
          </h3>
        </div>
      </div>

      <QuickActions />

      {loading ? (
        <div className="bg-white rounded-2xl shadow-md p-6 text-gray-600">
          Loading applications...
        </div>
      ) : (
        <RecentApplications applications={applications} />
      )}
    </section>
  );
};

export default CitizenDashboard;