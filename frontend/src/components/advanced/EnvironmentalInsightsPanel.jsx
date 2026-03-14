const insights = [
  "AI observation: Raipur industrial belt me particulate emission concentration comparatively high detect ho raha hai.",
  "Bilaspur zone me medium-risk industrial clusters ko additional monitoring ki zarurat hai.",
  "Sensitive locations near water bodies ko stricter discharge compliance framework me rakhna chahiye.",
  "Satellite-style monitoring se land disturbance aur vegetation change detect kiya ja sakta hai.",
];

const EnvironmentalInsightsPanel = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        AI Environmental Insights
      </h2>

      <div className="space-y-4">
        {insights.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-4 bg-gray-50 text-gray-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalInsightsPanel;