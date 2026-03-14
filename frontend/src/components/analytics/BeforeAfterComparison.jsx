const BeforeAfterComparison = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Environment Comparison
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="font-semibold text-gray-700 mb-2">
            Before Monitoring
          </p>

          <div className="h-48 bg-red-100 rounded-xl flex items-center justify-center">
            <span className="text-red-700 font-semibold">
              High Pollution
            </span>
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-700 mb-2">
            After Compliance
          </p>

          <div className="h-48 bg-green-100 rounded-xl flex items-center justify-center">
            <span className="text-green-700 font-semibold">
              Improved Environment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;