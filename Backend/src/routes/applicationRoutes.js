import express from "express";
import {
  createApplication,
  deleteApplication,
  getAllApplications,
  getMyApplications,
  getSingleApplication,
  updateApplicationByApplicant,
  updateApplicationStatus,
} from "../controllers/applicationController.js";
import { authorizeRoles, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createApplication);
router.get("/my", protect, getMyApplications);

router.get(
  "/",
  protect,
  authorizeRoles("department_officer", "senior_approver", "admin", "field_inspector"),
  getAllApplications
);

router.get("/:id", protect, getSingleApplication);

router.put("/:id", protect, updateApplicationByApplicant);

router.patch(
  "/:id/status",
  protect,
  authorizeRoles("department_officer", "senior_approver", "admin", "field_inspector"),
  updateApplicationStatus
);

router.delete("/:id", protect, deleteApplication);

export default router;