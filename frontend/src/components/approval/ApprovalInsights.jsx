const ApprovalInsights = ({ result }) => {
  if (!result) return null;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          AI Insights
        </h2>

        <div className="space-y-4">
          {result.insights.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 bg-gray-50 text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Recommendations
        </h2>

        <ul className="space-y-3 list-disc pl-5 text-gray-700">
          {result.recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApprovalInsights;