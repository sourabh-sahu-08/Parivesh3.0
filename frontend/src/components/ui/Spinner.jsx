const Spinner = ({ size = "md" }) => {
  const sizeClass =
    size === "sm"
      ? "w-5 h-5"
      : size === "lg"
      ? "w-12 h-12"
      : "w-8 h-8";

  return (
    <div className="flex items-center justify-center py-10">
      <div
        className={`animate-spin rounded-full border-4 border-green-500 border-t-transparent ${sizeClass}`}
      />
    </div>
  );
};

export default Spinner;