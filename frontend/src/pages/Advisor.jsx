import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AdvisorForm from "../components/advisor/AdvisorForm";
import AdvisorResult from "../components/advisor/AdvisorResult";

const advisorTemplates = {
  "Brick Manufacturing Unit": {
    projectCategory: "Pollution Controlled Industrial Project",
    riskLevel: "Medium",
    timeline: "45 - 90 Days",
    complexity: "Moderate",
    permissions: [
      "Environmental Clearance",
      "Consent to Establish from Pollution Control Board",
      "Land Use / Local Body Permission",
      "Ground Water / Water Usage Approval",
    ],
    documents: [
      "Land Ownership / Lease Document",
      "Detailed Project Report",
      "Pollution Control Plan",
      "Site Layout Map",
      "Identity & Address Proof",
    ],
    notes: [
      "Brick manufacturing units may require pollution and dust control measures.",
      "Location near villages or water bodies may increase scrutiny.",
      "Pollution control equipment details should be clearly mentioned.",
      "Stack emission and waste handling plans should be prepared.",
    ],
    nextSteps: [
      "Prepare project report and site details",
      "Upload all mandatory documents",
      "Submit application through PARIVESH 3.0 portal",
    ],
  },
  "Stone Crusher Plant": {
    projectCategory: "High Pollution Industrial Project",
    riskLevel: "High",
    timeline: "60 - 120 Days",
    complexity: "High",
    permissions: [
      "Environmental Clearance",
      "Consent to Establish from Pollution Control Board",
      "Mining / Raw Material Source Approval",
      "Local Body / Land Use Permission",
      "Air & Dust Management Compliance Approval",
    ],
    documents: [
      "Land Ownership Document",
      "Project Report",
      "Dust Suppression Plan",
      "Site Layout and Buffer Zone Map",
      "Identity Proof",
      "Source of Raw Material Document",
    ],
    notes: [
      "Stone crusher units are generally treated as high-risk due to dust and noise pollution.",
      "Distance from habitation and sensitive zones is important.",
      "Dust suppression and mitigation plan should be detailed.",
      "Field inspection is likely before final approval.",
    ],
    nextSteps: [
      "Prepare environmental mitigation plan",
      "Confirm site suitability and distance norms",
      "Submit documents for detailed review",
    ],
  },
  "Chemical Storage Unit": {
    projectCategory: "Hazardous Material Handling Project",
    riskLevel: "High",
    timeline: "75 - 150 Days",
    complexity: "High",
    permissions: [
      "Environmental Clearance",
      "Consent to Establish",
      "Hazardous Material Storage Permission",
      "Fire Department NOC",
      "Local Body Permission",
    ],
    documents: [
      "Site Ownership Document",
      "Chemical Inventory Details",
      "Safety Management Plan",
      "Emergency Response Plan",
      "Site Layout Map",
    ],
    notes: [
      "Chemical storage units need stricter scrutiny for safety and leakage prevention.",
      "Emergency response planning is essential.",
      "Nearby population and water body location may raise risk classification.",
    ],
    nextSteps: [
      "Prepare safety and emergency plan",
      "Compile hazardous storage details",
      "Apply for multi-department approvals",
    ],
  },
  "Rice Mill": {
    projectCategory: "Agro-Based Processing Unit",
    riskLevel: "Low",
    timeline: "30 - 60 Days",
    complexity: "Low",
    permissions: [
      "Consent to Establish",
      "Local Body Permission",
      "Water Usage Approval",
    ],
    documents: [
      "Land Ownership Document",
      "Project Layout",
      "Water Usage Plan",
      "Identity Proof",
    ],
    notes: [
      "Rice mills usually have lower environmental complexity than heavy industries.",
      "Water usage and waste disposal plan should still be documented.",
    ],
    nextSteps: [
      "Prepare basic project details",
      "Arrange water and waste information",
      "Submit application online",
    ],
  },
  "Warehouse": {
    projectCategory: "Low-Impact Commercial Project",
    riskLevel: "Low",
    timeline: "20 - 45 Days",
    complexity: "Low",
    permissions: [
      "Land Use Permission",
      "Local Body Approval",
      "Building Permission",
    ],
    documents: [
      "Land Document",
      "Building Plan",
      "Identity Proof",
      "Location Map",
    ],
    notes: [
      "Warehouses generally have low pollution impact unless hazardous materials are stored.",
      "Building and local planning permissions are key requirements.",
    ],
    nextSteps: [
      "Prepare building and site plan",
      "Verify land use category",
      "Apply through the portal",
    ],
  },
  "Construction Project": {
    projectCategory: "Infrastructure Development Project",
    riskLevel: "Medium",
    timeline: "45 - 100 Days",
    complexity: "Moderate",
    permissions: [
      "Environmental Clearance",
      "Building Plan Approval",
      "Water Usage Permission",
      "Construction Waste Management Approval",
    ],
    documents: [
      "Land Ownership Document",
      "Building Plan",
      "Construction Waste Plan",
      "Project Report",
      "Identity Proof",
    ],
    notes: [
      "Construction projects need dust, debris and water management planning.",
      "Large-scale construction near sensitive areas can increase review complexity.",
    ],
    nextSteps: [
      "Prepare construction drawings",
      "Plan waste and dust management",
      "Upload required approvals and reports",
    ],
  },
  "Small Factory": {
    projectCategory: "General Industrial Unit",
    riskLevel: "Medium",
    timeline: "40 - 80 Days",
    complexity: "Moderate",
    permissions: [
      "Consent to Establish",
      "Environmental Clearance",
      "Local Body Permission",
      "Water / Waste Management Approval",
    ],
    documents: [
      "Project Report",
      "Land Document",
      "Waste Management Plan",
      "Identity Proof",
    ],
    notes: [
      "Small factories need pollution and waste handling details based on operations.",
      "Industrial area projects may get easier review compared to rural sensitive areas.",
    ],
    nextSteps: [
      "Define manufacturing process clearly",
      "Prepare waste and water usage plan",
      "Submit application with documents",
    ],
  },
};

const Advisor = () => {
  const [formData, setFormData] = useState({
    idea: "",
    projectType: "",
    location: "",
    scale: "",
    landType: "",
  });

  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const enhanceResult = (baseResult) => {
    let updatedRisk = baseResult.riskLevel;
    let updatedTimeline = baseResult.timeline;
    const extraNotes = [];

    if (formData.scale === "Large") {
      updatedRisk =
        baseResult.riskLevel === "Low"
          ? "Medium"
          : baseResult.riskLevel === "Medium"
          ? "High"
          : "High";
      extraNotes.push(
        "Large scale project hone ki wajah se scrutiny aur compliance requirements badh sakte hain."
      );
    }

    if (
      formData.landType === "Near Forest Zone" ||
      formData.landType === "Near Water Body"
    ) {
      updatedRisk = "High";
      extraNotes.push(
        "Sensitive land type detect hui hai, isliye additional environmental checks required ho sakte hain."
      );
    }

    if (formData.location) {
      extraNotes.push(
        `${formData.location} location ke hisaab se local authority permissions bhi check karni hongi.`
      );
    }

    return {
      ...baseResult,
      riskLevel: updatedRisk,
      timeline:
        updatedRisk === "High"
          ? "60 - 150 Days"
          : updatedTimeline,
      notes: [...baseResult.notes, ...extraNotes],
    };
  };

  const handleAnalyze = () => {
    if (!formData.idea.trim() && !formData.projectType) {
      alert("Please enter project idea or select project type.");
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      const selectedType =
        formData.projectType || "Small Factory";

      const baseResult =
        advisorTemplates[selectedType] || advisorTemplates["Small Factory"];

      const finalResult = enhanceResult(baseResult);

      setResult(finalResult);
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            AI Permission Advisor
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Apne project idea ke basis par permissions, documents, probable
            timeline aur environmental risk ka smart estimate paaiye.
          </p>
        </div>

        <AdvisorForm
          formData={formData}
          handleChange={handleChange}
          handleAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
        />

        <AdvisorResult result={result} />
      </main>

      <Footer />
    </>
  );
};

export default Advisor;