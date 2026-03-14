const steps = [
  "Register or Login",
  "Fill the Application Form",
  "Upload Required Documents",
  "AI Verification & Review",
  "Track Status and Approval",
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>

            <p className="text-gray-700 font-medium">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;