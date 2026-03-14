import Application from "../models/Application.js";

const requiredDocumentTypes = [
  "Land Ownership Document",
  "Project Report",
  "Pollution Control Plan",
  "Site Layout Map",
  "Identity Proof",
];

const generateDocumentReview = (document) => {
  const fileName = (document.fileName || "").toLowerCase();

  if (!document.fileName || !document.fileUrl) {
    return {
      verificationStatus: "Missing",
      aiNote: "Document file missing.",
      issue: `${document.documentType} is missing.`,
    };
  }

  if (fileName.includes("blur") || fileName.includes("invalid")) {
    return {
      verificationStatus: "Rejected",
      aiNote: "Document appears unclear or invalid. Please re-upload a proper file.",
      issue: `${document.documentType} may be unclear or invalid.`,
    };
  }

  if (fileName.endsWith(".pdf") || fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
    return {
      verificationStatus: "Verified",
      aiNote: "Document format and upload status look valid. Awaiting deeper review if needed.",
      issue: null,
    };
  }

  return {
    verificationStatus: "Pending",
    aiNote: "Document uploaded, but verification is incomplete.",
    issue: `${document.documentType} needs manual review.`,
  };
};

export const runAIVerification = async (req, res, next) => {
  try {
    const { applicationId } = req.params;

    const application = await Application.findById(applicationId).populate(
      "applicant",
      "name email role"
    );

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    const isOwner =
      application.applicant._id.toString() === req.user._id.toString();

    const privilegedRoles = [
      "admin",
      "department_officer",
      "senior_approver",
      "field_inspector",
    ];

    if (!isOwner && !privilegedRoles.includes(req.user.role)) {
      res.status(403);
      throw new Error("You are not allowed to verify this application");
    }

    const existingTypes = application.documents.map((doc) => doc.documentType);

    const missingDocuments = requiredDocumentTypes.filter(
      (docType) => !existingTypes.includes(docType)
    );

    missingDocuments.forEach((docType) => {
      application.documents.push({
        documentType: docType,
        fileName: "",
        fileUrl: "",
        verificationStatus: "Missing",
        aiNote: "Required document not uploaded.",
      });
    });

    const issues = [];
    let verifiedCount = 0;
    let rejectedCount = 0;
    let missingCount = 0;

    application.documents = application.documents.map((doc) => {
      const review = generateDocumentReview(doc);

      if (review.verificationStatus === "Verified") verifiedCount++;
      if (review.verificationStatus === "Rejected") rejectedCount++;
      if (review.verificationStatus === "Missing") missingCount++;

      if (review.issue) {
        issues.push(review.issue);
      }

      return {
        ...doc.toObject(),
        verificationStatus: review.verificationStatus,
        aiNote: review.aiNote,
      };
    });

    const totalRequired = requiredDocumentTypes.length;
    const effectiveVerified = Math.max(0, verifiedCount);
    let verificationScore = Math.round((effectiveVerified / totalRequired) * 100);

    if (rejectedCount > 0) {
      verificationScore = Math.max(0, verificationScore - rejectedCount * 10);
    }

    if (missingCount > 0) {
      verificationScore = Math.max(0, verificationScore - missingCount * 15);
    }

    let overallStatus = "Pending";

    if (verificationScore === 100 && rejectedCount === 0 && missingCount === 0) {
      overallStatus = "Verified";
    } else if (verificationScore > 0) {
      overallStatus = "Partially Verified";
    } else {
      overallStatus = "Pending";
    }

    application.verificationSummary = {
      verificationScore,
      missingDocuments,
      issues,
      overallStatus,
      lastVerifiedAt: new Date(),
    };

    if (missingDocuments.length > 0) {
      application.currentStatus = "Pending Documents";
    }

    await application.save();

    res.status(200).json({
      success: true,
      message: "AI verification completed successfully",
      verificationSummary: application.verificationSummary,
      documents: application.documents,
      applicationId: application._id,
    });
  } catch (error) {
    next(error);
  }
};

export const getVerificationSummary = async (req, res, next) => {
  try {
    const { applicationId } = req.params;

    const application = await Application.findById(applicationId).populate(
      "applicant",
      "name email role"
    );

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    const isOwner =
      application.applicant._id.toString() === req.user._id.toString();

    const privilegedRoles = [
      "admin",
      "department_officer",
      "senior_approver",
      "field_inspector",
    ];

    if (!isOwner && !privilegedRoles.includes(req.user.role)) {
      res.status(403);
      throw new Error("You are not allowed to view verification summary");
    }

    res.status(200).json({
      success: true,
      verificationSummary: application.verificationSummary,
      documents: application.documents,
    });
  } catch (error) {
    next(error);
  }
};