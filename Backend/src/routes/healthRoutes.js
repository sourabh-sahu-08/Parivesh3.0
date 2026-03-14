import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PARIVESH 3.0 backend is running",
  });
});

export default router;