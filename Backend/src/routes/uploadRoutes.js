import express from "express";
import upload from "../config/multer.js";
import {
  uploadMultipleDocuments,
  uploadSingleDocument,
} from "../controllers/uploadController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/single", protect, upload.single("document"), uploadSingleDocument);

router.post(
  "/multiple",
  protect,
  upload.fields([
    { name: "landOwnershipDocument", maxCount: 1 },
    { name: "projectReport", maxCount: 1 },
    { name: "pollutionControlPlan", maxCount: 1 },
    { name: "siteLayoutMap", maxCount: 1 },
    { name: "identityProof", maxCount: 1 },
  ]),
  (req, res, next) => {
    req.files = Object.entries(req.files || {}).flatMap(([fieldname, files]) =>
      files.map((file) => ({ ...file, fieldname }))
    );
    next();
  },
  uploadMultipleDocuments
);

export default router;