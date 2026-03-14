const DocumentStatusBadge = ({ status }) => {
  const getClass = () => {
    switch (status) {
      case "Verified":
        return "bg-green-100 text-green-700 border border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Rejected":
        return "bg-red-100 text-red-700 border border-red-200";
      case "Missing":
        return "bg-gray-100 text-gray-700 border border-gray-200";
      default:
        return "";
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getClass()}`}>
      {status}
    </span>
  );
};

export default DocumentStatusBadge;