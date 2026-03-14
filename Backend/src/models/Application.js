import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    projectName: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
    },

    projectType: {
      type: String,
      required: [true, "Project type is required"],
      trim: true,
    },

    industryCategory: {
      type: String,
      enum: ["Red", "Orange", "Green", "White"],
      required: [true, "Industry category is required"],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },

    landArea: {
      type: String,
      default: "",
    },

    waterUsage: {
      type: String,
      default: "",
    },

    airPollution: {
      type: String,
      enum: ["Low", "Medium", "High", ""],
      default: "",
    },

    waterPollution: {
      type: String,
      enum: ["Low", "Medium", "High", ""],
      default: "",
    },

    noiseLevel: {
      type: String,
      enum: ["Low", "Medium", "High", ""],
      default: "",
    },

    wasteType: {
      type: String,
      default: "",
    },

    documents: [
      {
        documentType: {
          type: String,
          required: true,
        },
        fileName: {
          type: String,
          default: "",
        },
        fileUrl: {
          type: String,
          default: "",
        },
        verificationStatus: {
          type: String,
          enum: ["Pending", "Verified", "Rejected", "Missing"],
          default: "Pending",
        },
        aiNote: {
          type: String,
          default: "",
        },
      },
    ],

    verificationSummary: {
      verificationScore: {
        type: Number,
        default: 0,
      },
      missingDocuments: [
        {
          type: String,
        },
      ],
      issues: [
        {
          type: String,
        },
      ],
      overallStatus: {
        type: String,
        enum: ["Not Started", "Pending", "Partially Verified", "Verified"],
        default: "Not Started",
      },
      lastVerifiedAt: {
        type: Date,
        default: null,
      },
    },

    currentStatus: {
      type: String,
      enum: [
        "Submitted",
        "Under Review",
        "Pending Documents",
        "Inspection Scheduled",
        "Approved",
        "Rejected",
      ],
      default: "Submitted",
    },

    approvalPrediction: {
      type: Number,
      default: 0,
    },

    pollutionRisk: {
      type: String,
      enum: ["Low", "Medium", "High", ""],
      default: "",
    },

    officerRemarks: [
      {
        officer: {
          type: String,
          default: "",
        },
        message: {
          type: String,
          default: "",
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;