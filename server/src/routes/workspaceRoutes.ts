import { Router } from "express";

import {
  createWorkspace,
} from "../controllers/workspaceController";
import { protect }
from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/",
  protect,
  createWorkspace
);

export default router;  