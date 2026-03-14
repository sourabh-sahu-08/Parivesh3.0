const StatusTimeline = ({ timeline }) => {
  if (!timeline || timeline.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Status Timeline</h2>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  item.completed ? "bg-green-600" : "bg-gray-400"
                }`}
              >
                {index + 1}
              </div>
              {index !== timeline.length - 1 && (
                <div className="w-1 h-14 bg-gray-300 mt-2 rounded"></div>
              )}
            </div>

            <div className="pt-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.date}</p>
              <p
                className={`text-sm mt-1 font-medium ${
                  item.completed ? "text-green-700" : "text-yellow-700"
                }`}
              >
                {item.completed ? "Completed" : "Pending"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusTimeline;