import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ApplicationManagementTable from "../components/admin/ApplicationManagementTable";
import ApplicationDetailPanel from "../components/admin/ApplicationDetailPanel";
import ApplicationStatusManager from "../components/admin/ApplicationStatusManager";
import {
  getAllApplications,
  updateApplicationStatus,
} from "../services/applicationService";
import { getStoredUser } from "../utils/auth";

const ApplicationManagement = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentUser = getStoredUser();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getAllApplications();
        const fetchedApps = data.applications || [];
        setApplications(fetchedApps);

        if (fetchedApps.length > 0) {
          setSelectedApplication(fetchedApps[0]);
        }
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.message || "Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleStatusUpdated = (updatedApplication) => {
    setApplications((prev) =>
      prev.map((app) =>
        app._id === updatedApplication._id ? updatedApplication : app
      )
    );

    setSelectedApplication(updatedApplication);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            Officer / Admin Application Management
          </h1>
          <p className="text-gray-600 max-w-4xl">
            Yahan se officers aur admins sabhi applications review kar sakte hain,
            status update kar sakte hain aur remarks add kar sakte hain.
          </p>
        </div>

        {loading ? (
          <div className="bg-white rounded-2xl shadow-md p-6 text-gray-600">
            Loading applications...
          </div>
        ) : (
          <>
            <ApplicationManagementTable
              applications={applications}
              selectedApplication={selectedApplication}
              onSelectApplication={setSelectedApplication}
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <ApplicationDetailPanel application={selectedApplication} />

              <ApplicationStatusManager
                application={selectedApplication}
                onStatusUpdated={handleStatusUpdated}
                updateStatusApi={updateApplicationStatus}
                currentUser={currentUser}
              />
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ApplicationManagement;