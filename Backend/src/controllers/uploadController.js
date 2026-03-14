import Application from "../models/Application.js";

export const uploadSingleDocument = async (req, res, next) => {
  try {
    const { applicationId, documentType } = req.body;

    if (!req.file) {
      res.status(400);
      throw new Error("No file uploaded");
    }

    if (!applicationId || !documentType) {
      res.status(400);
      throw new Error("applicationId and documentType are required");
    }

    const application = await Application.findById(applicationId);

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    const isOwner = application.applicant.toString() === req.user._id.toString();
    const privilegedRoles = ["admin", "department_officer", "senior_approver"];

    if (!isOwner && !privilegedRoles.includes(req.user.role)) {
      res.status(403);
      throw new Error("You are not allowed to upload documents for this application");
    }

    const fileUrl = `/uploads/${req.file.filename}`;

    const existingDocIndex = application.documents.findIndex(
      (doc) => doc.documentType === documentType
    );

    const newDocument = {
      documentType,
      fileName: req.file.originalname,
      fileUrl,
      verificationStatus: "Pending",
      aiNote: "Uploaded successfully. Awaiting AI verification.",
    };

    if (existingDocIndex !== -1) {
      application.documents[existingDocIndex] = newDocument;
    } else {
      application.documents.push(newDocument);
    }

    await application.save();

    res.status(200).json({
      success: true,
      message: "Document uploaded successfully",
      file: {
        originalName: req.file.originalname,
        storedName: req.file.filename,
        fileUrl,
      },
      application,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadMultipleDocuments = async (req, res, next) => {
  try {
    const { applicationId } = req.body;

    if (!req.files || req.files.length === 0) {
      res.status(400);
      throw new Error("No files uploaded");
    }

    if (!applicationId) {
      res.status(400);
      throw new Error("applicationId is required");
    }

    const application = await Application.findById(applicationId);

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    const isOwner = application.applicant.toString() === req.user._id.toString();
    const privilegedRoles = ["admin", "department_officer", "senior_approver"];

    if (!isOwner && !privilegedRoles.includes(req.user.role)) {
      res.status(403);
      throw new Error("You are not allowed to upload documents for this application");
    }

    const uploadedDocuments = req.files.map((file) => ({
      documentType: file.fieldname,
      fileName: file.originalname,
      fileUrl: `/uploads/${file.filename}`,
      verificationStatus: "Pending",
      aiNote: "Uploaded successfully. Awaiting AI verification.",
    }));

    uploadedDocuments.forEach((newDoc) => {
      const existingDocIndex = application.documents.findIndex(
        (doc) => doc.documentType === newDoc.documentType
      );

      if (existingDocIndex !== -1) {
        application.documents[existingDocIndex] = newDoc;
      } else {
        application.documents.push(newDoc);
      }
    });

    await application.save();

    res.status(200).json({
      success: true,
      message: "Documents uploaded successfully",
      uploadedDocuments,
      application,
    });
  } catch (error) {
    next(error);
  }
};