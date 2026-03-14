const insightCards = [
  {
    title: "High Risk Zones",
    value: "08",
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Monitored Projects",
    value: "42",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Low Risk Zones",
    value: "17",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "AI Alerts Generated",
    value: "13",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const EnvironmentalInsightCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {insightCards.map((card) => (
        <div key={card.title} className="bg-white rounded-2xl shadow-md p-6">
          <div
            className={`inline-flex px-4 py-2 rounded-lg text-sm font-semibold ${card.color}`}
          >
            {card.title}
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-5">
            {card.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default EnvironmentalInsightCards;