const legend = [
  { label: "Very High Pollution", color: "bg-red-600" },
  { label: "High Pollution", color: "bg-orange-500" },
  { label: "Moderate Pollution", color: "bg-yellow-400" },
  { label: "Low Pollution", color: "bg-green-500" },
];

const HeatmapLegend = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Pollution Heatmap Legend
      </h2>

      <div className="space-y-3">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className={`w-5 h-5 rounded-full ${item.color}`}></span>
            <span className="text-gray-700 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatmapLegend;