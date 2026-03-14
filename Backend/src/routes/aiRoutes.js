import express from "express";
import { chatWithEnvironmentalAI } from "../controllers/aiController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/chat", protect, chatWithEnvironmentalAI);

export default router;