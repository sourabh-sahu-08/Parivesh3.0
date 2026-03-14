const ApprovalSummaryCards = ({ result }) => {
  if (!result) return null;

  const approvalColor =
    result.approvalProbability >= 75
      ? "bg-green-100 text-green-700 border border-green-200"
      : result.approvalProbability >= 50
      ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
      : "bg-red-100 text-red-700 border border-red-200";

  const rejectionColor =
    result.rejectionRisk === "High"
      ? "bg-red-100 text-red-700 border border-red-200"
      : result.rejectionRisk === "Medium"
      ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
      : "bg-green-100 text-green-700 border border-green-200";

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className={`rounded-2xl p-6 ${approvalColor}`}>
        <p className="text-sm mb-2">Approval Probability</p>
        <h3 className="text-3xl font-bold">{result.approvalProbability}%</h3>
      </div>

      <div className={`rounded-2xl p-6 ${rejectionColor}`}>
        <p className="text-sm mb-2">Rejection Risk</p>
        <h3 className="text-3xl font-bold">{result.rejectionRisk}</h3>
      </div>

      <div className="rounded-2xl p-6 bg-blue-100 text-blue-700 border border-blue-200">
        <p className="text-sm mb-2">Estimated Processing Time</p>
        <h3 className="text-2xl font-bold">{result.processingTime}</h3>
      </div>

      <div className="rounded-2xl p-6 bg-purple-100 text-purple-700 border border-purple-200">
        <p className="text-sm mb-2">Workload Impact</p>
        <h3 className="text-2xl font-bold">{result.workloadImpact}</h3>
      </div>
    </div>
  );
};

export default ApprovalSummaryCards;