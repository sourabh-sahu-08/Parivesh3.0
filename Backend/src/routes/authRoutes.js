import express from "express";
import {
  forgotPassword,
  getMe,
  loginUser,
  registerUser,
  resetPassword,
  updateProfile,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.put("/update-profile", protect, updateProfile);

export default router;