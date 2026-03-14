const DecisionMeter = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Decision Confidence Meter
          </h2>
          <p className="text-gray-600">
            AI model ke basis par current application ki approval confidence.
          </p>
        </div>

        <div className="w-full max-w-md">
          <div className="w-full h-5 rounded-full bg-gray-200 overflow-hidden">
            <div
              className={`h-full ${
                result.approvalProbability >= 75
                  ? "bg-green-600"
                  : result.approvalProbability >= 50
                  ? "bg-yellow-500"
                  : "bg-red-600"
              }`}
              style={{ width: `${result.approvalProbability}%` }}
            ></div>
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-700">
            Confidence: {result.approvalProbability}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default DecisionMeter;