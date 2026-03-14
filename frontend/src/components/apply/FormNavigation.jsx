const FormNavigation = ({
  currentStep,
  handleBack,
  handleNext,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <button
        type="button"
        onClick={handleBack}
        disabled={currentStep === 1}
        className={`px-6 py-3 rounded-xl font-semibold transition ${
          currentStep === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-700 text-white hover:bg-gray-800"
        }`}
      >
        Back
      </button>

      {currentStep < 4 ? (
        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition"
        >
          Save & Next
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      )}
    </div>
  );
};

export default FormNavigation;