import express from "express";
import { runOCRSimulation } from "../controllers/ocrController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/scan", protect, runOCRSimulation);

export default router;