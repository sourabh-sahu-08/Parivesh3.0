const stats = [
  {
    title: "Applications Submitted",
    value: "12",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Pending Review",
    value: "4",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Approved",
    value: "6",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Rejected",
    value: "2",
    color: "bg-red-100 text-red-700",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div key={item.title} className="bg-white rounded-2xl shadow-md p-6">
          <div
            className={`inline-flex px-4 py-2 rounded-lg text-sm font-semibold ${item.color}`}
          >
            {item.title}
          </div>

          <h3 className="text-3xl font-bold text-gray-800 mt-5">{item.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;