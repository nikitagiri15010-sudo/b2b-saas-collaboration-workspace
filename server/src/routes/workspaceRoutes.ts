import { Router } from "express";

import {
  createWorkspace,
  getWorkspaces,
  getWorkspaceById,
  updateWorkspace,
  deleteWorkspace,
} from "../controllers/workspaceController";
import { protect }
from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/",
  protect,
  createWorkspace
);
router.get(
  "/",
  protect,
  getWorkspaces
);
router.get(
  "/:id",
  protect,
  getWorkspaceById
);
router.put(
  "/:id",
  protect,
  updateWorkspace
);
router.delete(
  "/:id",
  protect,
  deleteWorkspace
);

export default router;  