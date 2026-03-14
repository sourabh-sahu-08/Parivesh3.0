const steps = [
  "Project Details",
  "Environmental Details",
  "Upload Documents",
  "Review & Submit",
];

const ApplicationStepper = ({ currentStep }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep > index + 1;

          return (
            <div key={step} className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-3 ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </div>

              <p
                className={`text-sm font-medium ${
                  isActive || isCompleted ? "text-gray-800" : "text-gray-500"
                }`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationStepper;