import { useState } from "react";
import { runOCRScan } from "../../services/ocrService";

const OCRScanPanel = () => {
  const [applicationId, setApplicationId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!applicationId.trim()) {
      alert("Please enter application ID");
      return;
    }

    try {
      setLoading(true);
      const data = await runOCRScan(applicationId.trim());
      setResult(data);
    } catch (error) {
      alert(error.response?.data?.message || "OCR scan failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        OCR Document Scan
      </h2>

      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <input
          type="text"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          placeholder="Enter application ID"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleScan}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          {loading ? "Scanning..." : "Run OCR Scan"}
        </button>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 font-medium">
            {result.message}
          </div>

          <div className="space-y-3">
            {result.extractedText.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50"
              >
                <p className="font-semibold text-gray-800">{item.documentType}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Preview: {item.extractedPreview}
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  Quality: {item.quality}
                </p>
              </div>
            ))}
          </div>

          {result.issues?.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-bold text-red-700 mb-2">OCR Issues</h3>
              <ul className="list-disc pl-5 text-red-700 space-y-1">
                {result.issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OCRScanPanel;