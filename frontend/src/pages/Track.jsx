import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TrackSearch from "../components/track/TrackSearch";
import ProjectSummaryCard from "../components/track/ProjectSummaryCard";
import StatusTimeline from "../components/track/StatusTimeline";
import OfficerRemarks from "../components/track/OfficerRemarks";
import AIVerificationCard from "../components/track/AIVerificationCard";
import AcknowledgementCard from "../components/track/AcknowledgementCard";

const mockApplications = {
  PV3001: {
    id: "PV3001",
    projectName: "Brick Manufacturing Unit",
    projectType: "Industrial",
    category: "Red",
    applicantName: "Yashwant Sahu",
    location: "Bilaspur, Chhattisgarh",
    submittedOn: "12 Mar 2026",
    currentStatus: "Under Review",
    timeline: [
      { title: "Application Submitted", date: "12 Mar 2026", completed: true },
      { title: "AI Document Verification", date: "13 Mar 2026", completed: true },
      { title: "Officer Review Started", date: "14 Mar 2026", completed: true },
      { title: "Site Inspection", date: "Pending", completed: false },
      { title: "Final Approval", date: "Pending", completed: false },
    ],
    remarks: [
      {
        officer: "District Environmental Officer",
        date: "14 Mar 2026",
        message:
          "Initial review completed. Site inspection is required before final recommendation.",
      },
      {
        officer: "Verification Desk",
        date: "13 Mar 2026",
        message:
          "Uploaded project report and land ownership document are readable and valid.",
      },
    ],
    verification: {
      score: 92,
      documentStatus: "Verified",
      riskFlag: "Medium",
      findings: [
        "All mandatory documents were uploaded successfully.",
        "Project report is readable and clear.",
        "Pollution control plan is available.",
        "Site inspection required for final validation.",
      ],
    },
  },
  PV3002: {
    id: "PV3002",
    projectName: "Stone Crusher Plant",
    projectType: "Industrial",
    category: "Red",
    applicantName: "Ravi Verma",
    location: "Raipur, Chhattisgarh",
    submittedOn: "10 Mar 2026",
    currentStatus: "Approved",
    timeline: [
      { title: "Application Submitted", date: "10 Mar 2026", completed: true },
      { title: "AI Document Verification", date: "11 Mar 2026", completed: true },
      { title: "Officer Review Started", date: "12 Mar 2026", completed: true },
      { title: "Site Inspection", date: "13 Mar 2026", completed: true },
      { title: "Final Approval", date: "15 Mar 2026", completed: true },
    ],
    remarks: [
      {
        officer: "Senior Approver",
        date: "15 Mar 2026",
        message:
          "Application approved after satisfactory document review and field inspection.",
      },
    ],
    verification: {
      score: 96,
      documentStatus: "Verified",
      riskFlag: "Low",
      findings: [
        "Documents matched required checklist.",
        "Inspection report satisfied approval conditions.",
        "No critical compliance issue found.",
      ],
    },
  },
};

const Track = () => {
  const [applicationId, setApplicationId] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const cleanedId = applicationId.trim().toUpperCase();
    const foundApplication = mockApplications[cleanedId] || null;

    setSelectedApplication(foundApplication);
    setSearched(true);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            Track Application Status
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Application ID ke through aap apne proposal ka progress, AI verification,
            officer remarks aur acknowledgement details dekh sakte hain.
          </p>
        </div>

        <TrackSearch
          applicationId={applicationId}
          setApplicationId={setApplicationId}
          handleSearch={handleSearch}
        />

        {searched && !selectedApplication && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-6 font-medium">
            No application found for this ID. Example IDs try karo: PV3001, PV3002
          </div>
        )}

        {selectedApplication && (
          <div className="space-y-8">
            <ProjectSummaryCard application={selectedApplication} />
            <StatusTimeline timeline={selectedApplication.timeline} />
            <AIVerificationCard verification={selectedApplication.verification} />
            <OfficerRemarks remarks={selectedApplication.remarks} />
            <AcknowledgementCard application={selectedApplication} />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Track;