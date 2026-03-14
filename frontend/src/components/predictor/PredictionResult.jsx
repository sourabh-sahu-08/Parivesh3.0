const PredictionResult = ({ result }) => {

  if (!result) return null;

  const getColor = () => {
    if (result.risk === "High") return "text-red-600";
    if (result.risk === "Medium") return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        AI Prediction Result
      </h2>

      <p className={`text-2xl font-bold ${getColor()}`}>
        {result.risk} Pollution Risk
      </p>

      <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
        {result.recommendations.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

    </div>
  );
};

export default PredictionResult;