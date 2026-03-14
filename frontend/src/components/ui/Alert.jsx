const Alert = ({ type = "info", message }) => {
  const styles = {
    success: "bg-green-100 text-green-700 border-green-200",
    error: "bg-red-100 text-red-700 border-red-200",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
    info: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <div
      className={`border rounded-xl px-4 py-3 mb-4 font-medium ${styles[type]}`}
    >
      {message}
    </div>
  );
};

export default Alert;