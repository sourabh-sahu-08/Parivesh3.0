import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import VerificationScore from "../components/documents/VerificationScore";
import DocumentsTable from "../components/documents/DocumentsTable";
import MissingDocumentsAlert from "../components/documents/MissingDocumentsAlert";
import {
  getVerificationSummary,
  runVerification,
} from "../services/verificationService";

const Documents = () => {
  const [applicationId, setApplicationId] = useState("");
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRunVerification = async () => {
    if (!applicationId.trim()) {
      alert("Please enter application ID");
      return;
    }

    try {
      setLoading(true);
      const data = await runVerification(applicationId.trim());
      setVerificationData(data);
      alert("AI verification completed");
    } catch (error) {
      alert(error.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleFetchSummary = async () => {
    if (!applicationId.trim()) {
      alert("Please enter application ID");
      return;
    }

    try {
      setLoading(true);
      const data = await getVerificationSummary(applicationId.trim());
      setVerificationData(data);
    } catch (error) {
      alert(error.response?.data?.message || "Could not fetch summary");
    } finally {
      setLoading(false);
    }
  };

  const verificationScore =
    verificationData?.verificationSummary?.verificationScore || 0;

  const missingDocs =
    verificationData?.verificationSummary?.missingDocuments || [];

  const documents =
    verificationData?.documents?.map((doc) => ({
      name: doc.documentType,
      file: doc.fileName,
      status: doc.verificationStatus,
      note: doc.aiNote,
    })) || [];

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            Document Verification
          </h1>

          <p className="text-gray-600 max-w-3xl">
            AI system uploaded documents ko verify karta hai aur missing
            documents ya issues highlight karta hai.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Fetch Verification by Application ID
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
              placeholder="Enter application ID"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={handleFetchSummary}
              className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
            >
              Get Summary
            </button>

            <button
              onClick={handleRunVerification}
              className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700"
            >
              Run AI Verification
            </button>
          </div>

          {loading && (
            <p className="text-sm text-gray-500">Please wait...</p>
          )}
        </div>

        {verificationData && (
          <>
            <VerificationScore score={verificationScore} />
            <MissingDocumentsAlert missingDocs={missingDocs} />
            <DocumentsTable documents={documents} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Documents;