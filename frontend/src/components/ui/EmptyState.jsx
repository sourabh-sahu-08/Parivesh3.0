const EmptyState = ({ title, description }) => {
  return (
    <div className="text-center py-12 bg-white rounded-2xl shadow-md">
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default EmptyState;