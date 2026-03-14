const ReviewSubmitStep = ({ formData }) => {
  const documentEntries = Object.entries(formData.documents);

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Review & Submit
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Project Information
          </h3>

          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Project Name:</span> {formData.projectName || "-"}</p>
            <p><span className="font-semibold">Project Type:</span> {formData.projectType || "-"}</p>
            <p><span className="font-semibold">Industry Category:</span> {formData.industryCategory || "-"}</p>
            <p><span className="font-semibold">Location:</span> {formData.location || "-"}</p>
            <p><span className="font-semibold">Applicant Name:</span> {formData.applicantName || "-"}</p>
            <p><span className="font-semibold">Contact Number:</span> {formData.contactNumber || "-"}</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Environmental Information
          </h3>

          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Land Area:</span> {formData.landArea || "-"}</p>
            <p><span className="font-semibold">Water Usage:</span> {formData.waterUsage || "-"}</p>
            <p><span className="font-semibold">Air Pollution:</span> {formData.airPollution || "-"}</p>
            <p><span className="font-semibold">Water Pollution:</span> {formData.waterPollution || "-"}</p>
            <p><span className="font-semibold">Noise Level:</span> {formData.noiseLevel || "-"}</p>
            <p><span className="font-semibold">Waste Type:</span> {formData.wasteType || "-"}</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Uploaded Documents
        </h3>

        {documentEntries.length > 0 ? (
          <div className="space-y-3">
            {documentEntries.map(([key, file]) => (
              <div
                key={key}
                className="flex items-center justify-between border border-gray-100 rounded-xl p-4 bg-gray-50"
              >
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-sm text-green-700 font-semibold">
                  {file?.name || "No file"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No documents uploaded yet.</p>
        )}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5">
        <p className="text-blue-800 font-medium">
          Submit karne ke baad next step me AI document verification, officer review
          aur application tracking available hoga.
        </p>
      </div>
    </div>
  );
};

export default ReviewSubmitStep;