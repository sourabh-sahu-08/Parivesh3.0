const ApplicationDetailPanel = ({ application }) => {
  if (!application) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Application Details
        </h2>
        <p className="text-gray-600">
          Table se kisi application ko select karke details dekhiye.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Application Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700">
        <p>
          <span className="font-semibold">Project Name:</span>{" "}
          {application.projectName}
        </p>
        <p>
          <span className="font-semibold">Project Type:</span>{" "}
          {application.projectType}
        </p>
        <p>
          <span className="font-semibold">Applicant:</span>{" "}
          {application.applicant?.name || "-"}
        </p>
        <p>
          <span className="font-semibold">Applicant Email:</span>{" "}
          {application.applicant?.email || "-"}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {application.location}
        </p>
        <p>
          <span className="font-semibold">Industry Category:</span>{" "}
          {application.industryCategory}
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
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Uploaded Documents
        </h3>

        {application.documents?.length > 0 ? (
          <div className="space-y-3">
            {application.documents.map((doc, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50"
              >
                <p className="font-semibold text-gray-800">
                  {doc.documentType}
                </p>
                <p className="text-sm text-gray-600 mt-1">
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
          <p className="text-gray-500">No documents available</p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Officer Remarks History
        </h3>

        {application.officerRemarks?.length > 0 ? (
          <div className="space-y-3">
            {application.officerRemarks.map((remark, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-blue-50"
              >
                <p className="font-semibold text-blue-700">
                  {remark.officer || "Officer"}
                </p>
                <p className="text-gray-700 mt-1">{remark.message}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(remark.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No remarks added yet</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetailPanel;