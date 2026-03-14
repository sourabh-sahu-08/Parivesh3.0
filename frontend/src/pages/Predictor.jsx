import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PredictorForm from "../components/predictor/PredictorForm";
import PredictionChart from "../components/predictor/PredictionChart";
import PredictionResult from "../components/predictor/PredictionResult";

const Predictor = () => {

  const [formData, setFormData] = useState({
    industry: "",
    capacity: "",
    distance: "",
    control: ""
  });

  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = () => {

    let risk = "Low";

    if (
      formData.industry === "Stone Crusher" ||
      formData.control === "No"
    ) {
      risk = "High";
    } else if (formData.capacity > 50) {
      risk = "Medium";
    }

    const recommendations = [
      "Install pollution control filters",
      "Maintain regular monitoring",
      "Submit compliance reports every 6 months"
    ];

    setResult({ risk, recommendations });

    setChartData([
      { month: "Jul", pollution: 40 },
      { month: "Aug", pollution: 55 },
      { month: "Sep", pollution: 60 },
      { month: "Oct", pollution: 70 },
      { month: "Nov", pollution: 65 },
      { month: "Dec", pollution: 72 }
    ]);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">

        <h1 className="text-4xl font-bold text-green-700">
          Pollution Prediction AI
        </h1>

        <PredictorForm
          formData={formData}
          handleChange={handleChange}
          handlePredict={handlePredict}
        />

        <PredictionResult result={result} />

        <PredictionChart data={chartData} />

      </main>

      <Footer />
    </>
  );
};

export default Predictor;