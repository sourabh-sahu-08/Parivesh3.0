const OfficerRemarks = ({ remarks }) => {
  if (!remarks || remarks.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Officer Remarks
      </h2>

      <div className="space-y-4">
        {remarks.map((remark, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 bg-gray-50"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="font-semibold text-green-700">{remark.officer}</h3>
              <span className="text-sm text-gray-500">{remark.date}</span>
            </div>

            <p className="text-gray-700">{remark.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficerRemarks;