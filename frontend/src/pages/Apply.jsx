import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ApplicationStepper from "../components/apply/ApplicationStepper";
import ProjectDetailsStep from "../components/apply/ProjectDetailsStep";
import EnvironmentalDetailsStep from "../components/apply/EnvironmentalDetailsStep";
import DocumentUploadStep from "../components/apply/DocumentUploadStep";
import ReviewSubmitStep from "../components/apply/ReviewSubmitStep";
import FormNavigation from "../components/apply/FormNavigation";
import { createApplication } from "../services/applicationService";
import { uploadMultipleDocuments } from "../services/uploadService";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    projectType: "",
    industryCategory: "",
    location: "",
    applicantName: "",
    contactNumber: "",
    landArea: "",
    waterUsage: "",
    airPollution: "",
    waterPollution: "",
    noiseLevel: "",
    wasteType: "",
    documents: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [name]: files[0],
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("parivesh_token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      setLoading(true);

      const applicationPayload = {
        projectName: formData.projectName,
        projectType: formData.projectType,
        industryCategory: formData.industryCategory,
        location: formData.location,
        landArea: formData.landArea,
        waterUsage: formData.waterUsage,
        airPollution: formData.airPollution,
        waterPollution: formData.waterPollution,
        noiseLevel: formData.noiseLevel,
        wasteType: formData.wasteType,
      };

      const applicationRes = await createApplication(applicationPayload);
      const applicationId = applicationRes.application._id;

      const docsToUpload = {
        landOwnershipDocument: formData.documents.landownershipdocument || null,
        projectReport: formData.documents.projectreport || null,
        pollutionControlPlan: formData.documents.pollutioncontrolplan || null,
        siteLayoutMap: formData.documents.sitelayoutmap || null,
        identityProof: formData.documents.identityproof || null,
      };

      const hasAnyDocument = Object.values(docsToUpload).some(Boolean);

      if (hasAnyDocument) {
        await uploadMultipleDocuments({
          applicationId,
          documents: docsToUpload,
        });
      }

      alert("Application submitted successfully");

      setFormData({
        projectName: "",
        projectType: "",
        industryCategory: "",
        location: "",
        applicantName: "",
        contactNumber: "",
        landArea: "",
        waterUsage: "",
        airPollution: "",
        waterPollution: "",
        noiseLevel: "",
        wasteType: "",
        documents: {},
      });

      setCurrentStep(1);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Application submission failed");
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProjectDetailsStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 2:
        return (
          <EnvironmentalDetailsStep
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 3:
        return (
          <DocumentUploadStep
            formData={formData}
            handleFileChange={handleFileChange}
          />
        );

      case 4:
        return <ReviewSubmitStep formData={formData} />;

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            Apply for Environmental Approval
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Is multi-step form ke through aap project details, environmental
            information aur required documents submit kar sakte hain.
          </p>
        </div>

        <div className="space-y-8">
          <ApplicationStepper currentStep={currentStep} />

          {renderStep()}

          <FormNavigation
            currentStep={currentStep}
            handleBack={handleBack}
            handleNext={handleNext}
            handleSubmit={handleSubmit}
          />

          {loading && (
            <div className="bg-blue-100 border border-blue-200 text-blue-700 px-4 py-3 rounded-xl">
              Please wait... submitting application and uploading documents.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Apply;