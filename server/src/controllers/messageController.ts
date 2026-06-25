
import Message from "../models/Message";
import Channel from "../models/Channel";
import { AuthRequest } from "../middleware/authMiddleware";
import { Request, Response } from "express";
import { getIO } from "../socket/io";

export const createMessage = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { content, channelId } = req.body;

    if (!channelId) {
  return res.status(400).json({
    success: false,
    message: "Channel ID is required",
  });
}

    if (!content || typeof content !== "string") {
      return res.status(400).json({
        success: false,
        message: "Message content is required",
      });
    }

    const trimmedContent = content.trim();

    if (!trimmedContent) {
      return res.status(400).json({
        success: false,
        message: "Message content cannot be empty",
      });
    }

    const channel = await Channel.findById(
      channelId
    );

    if (!channel) {
      return res.status(404).json({
        success: false,
        message: "Channel not found",
      });
    }

    const message = await Message.create({
      content: trimmedContent,
      channel: channelId,
      sender: req.user?._id,
    });

    const populatedMessage =
  await Message.findById(message._id)
    .populate(
      "sender",
      "name email"
    );
    const io = getIO();
    io.to(channelId).emit(
  "new-message",
  populatedMessage
);

   return res.status(201).json({
  success: true,
  message: "Message created successfully",
  data: populatedMessage,
});

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create message",
      error,
    });
  }
};

export const getMessagesByChannel = async (
  req: Request,
  res: Response
) => {
  try {
    const { channelId } = req.params;

    if (!channelId) {
  return res.status(400).json({
    success: false,
    message: "Channel ID is required",
  });
}
    const channel = await Channel.findById(
      channelId
    );

    if (!channel) {
      return res.status(404).json({
        success: false,
        message: "Channel not found",
      });
    }

    const messages = await Message.find({
      channel: channelId,
    })
      .populate(
        "sender",
        "name email"
      )
      .sort({ createdAt: 1 });

    return res.status(200).json({
      success: true,
      count: messages.length,
       data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch messages",
      error,
    });
  }
};
export const updateMessage = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { messageId } = req.params;
    if (!messageId) {
  return res.status(400).json({
    success: false,
    message: "Message ID is required",
  });
}
    const { content } = req.body;

    const message = await Message.findById(
      messageId
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    if (
      message.sender.toString() !==
      req.user?._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You can only edit your own messages",
      });
    }

    if (
      !content ||
      typeof content !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Content is required",
      });
    }

    const trimmedContent =
      content.trim();

    if (!trimmedContent) {
      return res.status(400).json({
        success: false,
        message:
          "Message content cannot be empty",
      });
    }

    message.content = trimmedContent;

    await message.save();

    const updatedMessage =
  await Message.findById(message._id)
    .populate(
      "sender",
      "name email"
    );

    const io = getIO();

    io.to(message.channel.toString()).emit(
  "message-updated",
  updatedMessage
);

    return res.status(200).json({
      success: true,
      message: "Message updated successsfully",
      data:  updatedMessage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Failed to update message",
      error,
    });
  }
};

export const deleteMessage = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { messageId } = req.params;

    if (!messageId) {
  return res.status(400).json({
    success: false,
    message: "Message ID is required",
  });
}

    const message =
      await Message.findById(
        messageId
      );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    if (
      message.sender.toString() !==
      req.user?._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You can only delete your own messages",
      });
    }

    await message.deleteOne();

    return res.status(200).json({
      success: true,
      message:
        "Message deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Failed to delete message",
      error,
    });
  }
};