import express from "express";
import {
  registerAdmin,
  loginAdmin,
  resetPasswordByAdminSecret,
  getProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/reset-password", resetPasswordByAdminSecret);
router.get("/profile", protect, getProfile);

export default router;