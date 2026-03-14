const getZoneColor = (intensity) => {
  switch (intensity) {
    case "Very High":
      return "bg-red-500/60";
    case "High":
      return "bg-orange-500/60";
    case "Moderate":
      return "bg-yellow-400/60";
    default:
      return "bg-green-500/60";
  }
};

const HeatmapPanel = ({ mapMode, setMapMode, heatmap = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Pollution Heatmap
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Advanced GIS heat intensity preview
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setMapMode("standard")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              mapMode === "standard"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Standard Map
          </button>

          <button
            onClick={() => setMapMode("satellite")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              mapMode === "satellite"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Satellite View
          </button>
        </div>
      </div>

      <div
        className={`relative h-[430px] rounded-2xl overflow-hidden border border-gray-200 ${
          mapMode === "satellite"
            ? "bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500"
            : "bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100"
        }`}
      >
        {heatmap.map((zone, index) => (
          <div
            key={zone.id}
            className={`absolute rounded-full blur-sm ${
              index % 2 === 0 ? "w-24 h-24" : "w-28 h-28"
            } ${getZoneColor(zone.intensity)}`}
            style={{
              top: `${15 + (index * 17) % 60}%`,
              left: `${15 + (index * 19) % 65}%`,
            }}
            title={`${zone.zoneName} - ${zone.intensity}`}
          ></div>
        ))}

        <div className="absolute top-4 left-4 bg-white/90 rounded-xl px-4 py-2 text-sm font-semibold text-gray-800 shadow">
          {mapMode === "satellite" ? "Satellite Layer Active" : "Standard GIS Layer"}
        </div>

        <div className="absolute bottom-4 right-4 bg-white/90 rounded-xl px-4 py-2 text-sm text-gray-700 shadow">
          {heatmap.length} heat zones loaded
        </div>
      </div>
    </div>
  );
};

export default HeatmapPanel;