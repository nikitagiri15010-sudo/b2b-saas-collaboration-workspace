import express from "express";
import {
  createMessage,
  getMessagesByChannel,
  updateMessage,
  deleteMessage,
} from "../controllers/messageController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post(
  "/",
  protect,
  createMessage
);

router.get(
  "/channel/:channelId",
  protect,
  getMessagesByChannel
);

router.put(
  "/:messageId",
  protect,
  updateMessage
);

router.delete(
    "/:messageId",
    protect,
    deleteMessage
);

export default router;