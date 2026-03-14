const RiskBadge = ({ risk }) => {
  const getClasses = () => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-700 border border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "High":
        return "bg-red-100 text-red-700 border border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  return (
    <span className={`inline-flex px-4 py-2 rounded-full font-semibold ${getClasses()}`}>
      {risk} Risk
    </span>
  );
};

export default RiskBadge;