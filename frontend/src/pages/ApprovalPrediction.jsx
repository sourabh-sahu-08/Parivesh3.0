import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ApprovalForm from "../components/approval/ApprovalForm";
import ApprovalSummaryCards from "../components/approval/ApprovalSummaryCards";
import ApprovalInsights from "../components/approval/ApprovalInsights";
import DecisionMeter from "../components/approval/DecisionMeter";

const ApprovalPrediction = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    category: "",
    documentScore: "",
    siteSensitivity: "",
    controlPlan: "",
    workload: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePredict = () => {
    let score = 80;
    const insights = [];
    const recommendations = [];

    if (formData.category === "Red") {
      score -= 20;
      insights.push("Red category projects par higher scrutiny lag sakti hai.");
    }

    if (formData.siteSensitivity === "High") {
      score -= 20;
      insights.push(
        "High sensitivity site hone ki wajah se environmental review strict hoga."
      );
    } else if (formData.siteSensitivity === "Medium") {
      score -= 10;
      insights.push("Medium sensitivity zone me additional checks ho sakte hain.");
    }

    if (Number(formData.documentScore) < 80) {
      score -= 15;
      insights.push(
        "Document completeness low hai, isliye objection ya delay ka chance hai."
      );
      recommendations.push("Document set ko complete aur properly verify karke upload karo.");
    } else {
      insights.push("Document completeness satisfactory lag rahi hai.");
    }

    if (formData.controlPlan === "Not Available") {
      score -= 15;
      insights.push(
        "Pollution control plan unavailable hone se rejection risk badh sakta hai."
      );
      recommendations.push("Detailed pollution control plan prepare karo.");
    } else if (formData.controlPlan === "Available") {
      insights.push("Pollution control plan available hai, jo positive factor hai.");
    }

    let processingTime = "30 - 45 Days";
    let workloadImpact = "Low";

    if (formData.workload === "Medium") {
      processingTime = "45 - 70 Days";
      workloadImpact = "Moderate";
      insights.push("Current officer workload medium hai, review thoda slow ho sakta hai.");
    }

    if (formData.workload === "High") {
      processingTime = "60 - 90 Days";
      workloadImpact = "High";
      score -= 5;
      insights.push("High officer workload ki wajah se processing delay possible hai.");
    }

    if (!recommendations.length) {
      recommendations.push("Current application structure positive lag rahi hai.");
      recommendations.push("Final submission se pehle GIS risk aur documents recheck karo.");
      recommendations.push("Officer query aaye to jaldi resubmit karo.");
    } else {
      recommendations.push("Final submission se pehle AI document verification zarur run karo.");
      recommendations.push("Sensitive location projects ke liye supporting documents add karo.");
    }

    if (score > 95) score = 95;
    if (score < 20) score = 20;

    const rejectionRisk =
      score >= 75 ? "Low" : score >= 50 ? "Medium" : "High";

    setResult({
      approvalProbability: score,
      rejectionRisk,
      processingTime,
      workloadImpact,
      insights,
      recommendations,
    });
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            AI Auto Approval Prediction
          </h1>
          <p className="text-gray-600 max-w-4xl">
            Project category, documents, site sensitivity aur current workload ke
            basis par approval probability aur rejection risk predict kiya jata hai.
          </p>
        </div>

        <ApprovalForm
          formData={formData}
          handleChange={handleChange}
          handlePredict={handlePredict}
        />

        <ApprovalSummaryCards result={result} />
        <DecisionMeter result={result} />
        <ApprovalInsights result={result} />
      </main>

      <Footer />
    </>
  );
};

export default ApprovalPrediction;