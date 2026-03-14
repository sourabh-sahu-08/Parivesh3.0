import RiskBadge from "./RiskBadge";

const AdvisorResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              AI Recommendation Summary
            </h2>
            <p className="text-gray-600 mt-2">
              Project details ke basis par probable permissions aur compliance
              requirements generate kiye gaye hain.
            </p>
          </div>

          <RiskBadge risk={result.riskLevel} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 mb-2">Project Category</p>
            <h3 className="text-xl font-bold text-blue-700">
              {result.projectCategory}
            </h3>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 mb-2">Estimated Timeline</p>
            <h3 className="text-xl font-bold text-green-700">
              {result.timeline}
            </h3>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 mb-2">Approval Complexity</p>
            <h3 className="text-xl font-bold text-purple-700">
              {result.complexity}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            Required Permissions
          </h3>

          <div className="space-y-4">
            {result.permissions.map((permission, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50"
              >
                <p className="font-semibold text-green-700">{permission}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            Required Documents
          </h3>

          <div className="space-y-4">
            {result.documents.map((document, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50"
              >
                <p className="font-semibold text-blue-700">{document}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          AI Notes & Guidance
        </h3>

        <ul className="space-y-3 list-disc pl-5 text-gray-700">
          {result.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-5">Next Steps</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {result.nextSteps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-4">
                {index + 1}
              </div>
              <p className="font-medium text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisorResult;