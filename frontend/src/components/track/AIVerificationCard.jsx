const AIVerificationCard = ({ verification }) => {
  if (!verification) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        AI Verification Status
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Verification Score</p>
          <h3 className="text-3xl font-bold text-green-700">
            {verification.score}%
          </h3>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Document Status</p>
          <h3 className="text-xl font-bold text-blue-700">
            {verification.documentStatus}
          </h3>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">Risk Flag</p>
          <h3 className="text-xl font-bold text-yellow-700">
            {verification.riskFlag}
          </h3>
        </div>
      </div>

      <div className="mt-6 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-3">AI Findings</h4>
        <ul className="space-y-2 text-gray-700 list-disc pl-5">
          {verification.findings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIVerificationCard;