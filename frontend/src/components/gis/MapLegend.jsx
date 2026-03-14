const legendItems = [
  { label: "High Risk Zone", color: "bg-red-500" },
  { label: "Medium Risk Zone", color: "bg-yellow-500" },
  { label: "Low Risk Zone", color: "bg-green-500" },
];

const MapLegend = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Map Legend</h2>

      <div className="space-y-3">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className={`w-4 h-4 rounded-full ${item.color}`}></span>
            <span className="text-gray-700 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapLegend;