import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import CitizenDashboard from "../components/dashboard/CitizenDashboard";
import OfficerDashboard from "../components/dashboard/OfficerDashboard";
import { getMyApplications } from "../services/applicationService";
import { getStoredUser } from "../utils/auth";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = getStoredUser();

  const officerRoles = [
    "department_officer",
    "senior_approver",
    "field_inspector",
    "admin",
  ];

  const isOfficerView = officerRoles.includes(user?.role);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!isOfficerView) {
          const data = await getMyApplications();
          setApplications(data.applications || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [isOfficerView]);

  const stats = useMemo(() => {
    const total = applications.length;
    const pending = applications.filter(
      (app) =>
        app.currentStatus === "Submitted" ||
        app.currentStatus === "Under Review" ||
        app.currentStatus === "Pending Documents" ||
        app.currentStatus === "Inspection Scheduled"
    ).length;
    const approved = applications.filter(
      (app) => app.currentStatus === "Approved"
    ).length;
    const rejected = applications.filter(
      (app) => app.currentStatus === "Rejected"
    ).length;

    return { total, pending, approved, rejected };
  }, [applications]);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <DashboardSidebar />
          {isOfficerView ? (
            <OfficerDashboard />
          ) : (
            <CitizenDashboard
              stats={stats}
              applications={applications}
              loading={loading}
            />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;