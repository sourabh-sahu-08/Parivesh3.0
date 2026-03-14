import express from "express";
import {
  getVerificationSummary,
  runAIVerification,
} from "../controllers/verificationController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/:applicationId/run", protect, runAIVerification);
router.get("/:applicationId", protect, getVerificationSummary);

export default router;