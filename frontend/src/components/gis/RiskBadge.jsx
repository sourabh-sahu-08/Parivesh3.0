const RiskBadge = ({ level }) => {
  const getClasses = () => {
    switch (level) {
      case "High":
        return "bg-red-100 text-red-700 border border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-700 border border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${getClasses()}`}>
      {level} Risk
    </span>
  );
};

export default RiskBadge;