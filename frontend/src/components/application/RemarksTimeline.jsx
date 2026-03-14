const RemarksTimeline = ({ remarks = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Officer Remarks Timeline
      </h2>

      {remarks.length > 0 ? (
        <div className="space-y-6">
          {remarks.map((remark, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                {index !== remarks.length - 1 && (
                  <div className="w-1 h-16 bg-gray-300 mt-2 rounded"></div>
                )}
              </div>

              <div className="pt-1 bg-gray-50 border border-gray-200 rounded-2xl p-4 flex-1">
                <h3 className="text-lg font-semibold text-green-700">
                  {remark.officer || "Officer"}
                </h3>
                <p className="text-gray-700 mt-2">{remark.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(remark.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No officer remarks available yet.</p>
      )}
    </div>
  );
};

export default RemarksTimeline;