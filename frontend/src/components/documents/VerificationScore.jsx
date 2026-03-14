const VerificationScore = ({ score }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        AI Verification Score
      </h2>

      <div className="flex items-center gap-6">
        <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700">
          {score}%
        </div>

        <div>
          <p className="text-gray-600 mb-2">
            Documents verification result
          </p>

          <div className="w-64 bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationScore;