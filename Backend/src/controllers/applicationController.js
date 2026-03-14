import Application from "../models/Application.js";
import Notification from "../models/Notification.js";

export const createApplication = async (req, res, next) => {
  try {
    const {
      projectName,
      projectType,
      industryCategory,
      location,
      landArea,
      waterUsage,
      airPollution,
      waterPollution,
      noiseLevel,
      wasteType,
      documents,
      approvalPrediction,
      pollutionRisk,
    } = req.body;

    if (!projectName || !projectType || !industryCategory || !location) {
      res.status(400);
      throw new Error("Required fields are missing");
    }

    const application = await Application.create({
      applicant: req.user._id,
      projectName,
      projectType,
      industryCategory,
      location,
      landArea,
      waterUsage,
      airPollution,
      waterPollution,
      noiseLevel,
      wasteType,
      documents: documents || [],
      approvalPrediction: approvalPrediction || 0,
      pollutionRisk: pollutionRisk || "",
      currentStatus: "Submitted",
    });

    await Notification.create({
      user: req.user._id,
      title: "Application Submitted",
      message: `${projectName} application has been submitted successfully.`,
      type: "success",
      relatedApplication: application._id,
    });

    res.status(201).json({
      success: true,
      message: "Application created successfully",
      application,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyApplications = async (req, res, next) => {
  try {
    const applications = await Application.find({
      applicant: req.user._id,
    })
      .populate("applicant", "name email phone role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find()
      .populate("applicant", "name email phone role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleApplication = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id).populate(
      "applicant",
      "name email phone role"
    );

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    const isOwner =
      application.applicant._id.toString() === req.user._id.toString();

    const privilegedRoles = [
      "department_officer",
      "senior_approver",
      "admin",
      "field_inspector",
    ];

    const canAccess = isOwner || privilegedRoles.includes(req.user.role);

    if (!canAccess) {
      res.status(403);
      throw new Error("You are not allowed to view this application");
    }

    res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    next(error);
  }
};

export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { currentStatus, officer, message } = req.body;

    const application = await Application.findById(req.params.id).populate(
      "applicant",
      "name email"
    );

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    if (currentStatus) {
      application.currentStatus = currentStatus;
    }

    if (message) {
      application.officerRemarks.push({
        officer: officer || req.user.name || "Officer",
        message,
      });
    }

    await application.save();

    await Notification.create({
      user: application.applicant._id,
      title: `Application Status Updated`,
      message: `${application.projectName} status changed to ${application.currentStatus}.`,
      type:
        application.currentStatus === "Approved"
          ? "success"
          : application.currentStatus === "Rejected"
          ? "danger"
          : application.currentStatus === "Pending Documents"
          ? "warning"
          : "info",
      relatedApplication: application._id,
    });

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      application,
    });
  } catch (error) {
    next(error);
  }
};

export const updateApplicationByApplicant = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    if (application.applicant.toString() !== req.user._id.toString()) {
      res.status(403);
      throw new Error("You can update only your own application");
    }

    if (application.currentStatus === "Approved") {
      res.status(400);
      throw new Error("Approved application cannot be edited");
    }

    const allowedFields = [
      "projectName",
      "projectType",
      "industryCategory",
      "location",
      "landArea",
      "waterUsage",
      "airPollution",
      "waterPollution",
      "noiseLevel",
      "wasteType",
      "documents",
      "approvalPrediction",
      "pollutionRisk",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        application[field] = req.body[field];
      }
    });

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      application,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteApplication = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      res.status(404);
      throw new Error("Application not found");
    }

    const isOwner =
      application.applicant.toString() === req.user._id.toString();

    const adminRoles = ["admin", "senior_approver"];

    if (!isOwner && !adminRoles.includes(req.user.role)) {
      res.status(403);
      throw new Error("You are not allowed to delete this application");
    }

    await Application.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};