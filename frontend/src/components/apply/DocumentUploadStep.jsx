const requiredDocuments = [
  "Land Ownership Document",
  "Project Report",
  "Pollution Control Plan",
  "Site Layout Map",
  "Identity Proof",
];

const DocumentUploadStep = ({ formData, handleFileChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Upload Documents
      </h2>

      <div className="space-y-6">
        {requiredDocuments.map((doc) => {
          const inputName = doc.replace(/\s+/g, "").toLowerCase();

          return (
            <div
              key={doc}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50"
            >
              <label className="block mb-2 font-medium text-gray-700">{doc}</label>

              <input
                type="file"
                name={inputName}
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg bg-white px-3 py-2"
              />

              {formData.documents[inputName] && (
                <p className="mt-2 text-sm text-green-700 font-medium">
                  Selected: {formData.documents[inputName].name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentUploadStep;