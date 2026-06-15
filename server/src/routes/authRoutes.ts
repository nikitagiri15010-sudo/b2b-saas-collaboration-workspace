import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post(
  "/register",
  registerUser
);

router.post(
  "/login",
  loginUser
);
router.get(
  "/profile",
  protect,
  (_req, res) => {
    res.status(200).json({
      success: true,
      message: "Protected Route Working",
    });
  }
);
export default router;