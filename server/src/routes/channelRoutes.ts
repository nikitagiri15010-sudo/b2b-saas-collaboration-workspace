import { Router } from "express";
import { protect } from "../middleware/authMiddleware";
import {
  createChannel,
  getChannelsByWorkspace,
  updateChannel,
  deleteChannel,
} from "../controllers/channelController";

const router = Router();

router.post(
  "/",
  protect,
  createChannel
);

router.get(
  "/workspace/:workspaceId",
  protect,
  getChannelsByWorkspace
);

router.put(
  "/:id",
  protect,
  updateChannel
);

router.delete(
  "/:id",
  protect,
  deleteChannel
); 

export default router;