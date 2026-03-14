import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RemarksTimeline from "../components/application/RemarksTimeline";
import { getSingleApplication } from "../services/applicationService";

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

const ApplicationDetail = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const data = await getSingleApplication(id);
        setApplication(data.application);
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.message || "Failed to fetch application");
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [id]);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {loading ? (
          <div className="bg-white rounded-2xl shadow-md p-8 text-gray-600">
            Loading application details...
          </div>
        ) : application ? (
          <>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-green-700">
                    {application.projectName}
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Application ID: {application._id}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusClass(
                    application.currentStatus
                  )}`}
                >
                  {application.currentStatus}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                <p>
                  <span className="font-semibold">Project Type:</span>{" "}
                  {application.projectType}
                </p>
                <p>
                  <span className="font-semibold">Industry Category:</span>{" "}
                  {application.industryCategory}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {application.location}
                </p>
                <p>
                  <span className="font-semibold">Land Area:</span>{" "}
                  {application.landArea || "-"}
                </p>
                <p>
                  <span className="font-semibold">Water Usage:</span>{" "}
                  {application.waterUsage || "-"}
                </p>
                <p>
                  <span className="font-semibold">Air Pollution:</span>{" "}
                  {application.airPollution || "-"}
                </p>
                <p>
                  <span className="font-semibold">Water Pollution:</span>{" "}
                  {application.waterPollution || "-"}
                </p>
                <p>
                  <span className="font-semibold">Noise Level:</span>{" "}
                  {application.noiseLevel || "-"}
                </p>
                <p>
                  <span className="font-semibold">Waste Type:</span>{" "}
                  {application.wasteType || "-"}
                </p>
                <p>
                  <span className="font-semibold">Pollution Risk:</span>{" "}
                  {application.pollutionRisk || "-"}
                </p>
                <p>
                  <span className="font-semibold">Approval Prediction:</span>{" "}
                  {application.approvalPrediction || 0}%
                </p>
                <p>
                  <span className="font-semibold">Submitted On:</span>{" "}
                  {new Date(application.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Uploaded Documents
              </h2>

              {application.documents?.length > 0 ? (
                <div className="space-y-4">
                  {application.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-2xl p-5 bg-gray-50"
                    >
                      <h3 className="font-semibold text-gray-800">
                        {doc.documentType}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        File: {doc.fileName || "Not uploaded"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Status: {doc.verificationStatus}
                      </p>
                      <p className="text-sm text-gray-600">
                        AI Note: {doc.aiNote || "-"}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No documents uploaded yet.</p>
              )}
            </div>

            <RemarksTimeline remarks={application.officerRemarks || []} />
          </>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-8 text-red-600">
            Application not found.
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ApplicationDetail;