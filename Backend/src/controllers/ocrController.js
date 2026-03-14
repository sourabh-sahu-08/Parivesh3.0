import Application from "../models/Application.js";

export const runOCRSimulation = async (req, res, next) => {
  try {
    const { applicationId } = req.body;

    if (!applicationId) {
      res.status(400);
      throw new Error("applicationId is required");
    }

    const application = await Application.findById(applicationId);

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    const extractedText = application.documents.map((doc) => ({
      documentType: doc.documentType,
      extractedPreview: doc.fileName
        ? `Simulated OCR text extracted from ${doc.fileName}`
        : "No file found for OCR extraction",
      quality:
        doc.fileName && !doc.fileName.toLowerCase().includes("blur")
          ? "Readable"
          : "Low Confidence",
    }));

    const issues = [];
    application.documents.forEach((doc) => {
      if (!doc.fileName) {
        issues.push(`${doc.documentType} missing for OCR scan.`);
      } else if (doc.fileName.toLowerCase().includes("blur")) {
        issues.push(`${doc.documentType} appears blurry in OCR scan.`);
      }
    });

    res.status(200).json({
      success: true,
      message: "OCR simulation completed",
      extractedText,
      issues,
    });
  } catch (error) {
    next(error);
  }
};