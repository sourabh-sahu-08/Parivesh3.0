const cards = [
  {
    title: "Total Projects",
    value: "128",
    color: "bg-blue-100 text-blue-700"
  },
  {
    title: "Compliant Projects",
    value: "96",
    color: "bg-green-100 text-green-700"
  },
  {
    title: "Violation Detected",
    value: "21",
    color: "bg-red-100 text-red-700"
  },
  {
    title: "Under Monitoring",
    value: "11",
    color: "bg-yellow-100 text-yellow-700"
  }
];

const ComplianceCards = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-2xl shadow-md p-6">
          <div
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${card.color}`}
          >
            {card.title}
          </div>

          <h3 className="text-3xl font-bold text-gray-800 mt-4">
            {card.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ComplianceCards;