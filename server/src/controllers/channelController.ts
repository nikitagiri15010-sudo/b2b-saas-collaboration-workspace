import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Channel from "../models/Channel";
import Workspace from "../models/Workspace";


export const createChannel =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const {
        name,
        workspaceId,
      } = req.body;

      if (
        !name ||
        name.trim() === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Channel name is required",
        });
      }

      const workspace =
        await Workspace.findById(
          workspaceId
        );

      if (!workspace) {
        return res.status(404).json({
          success: false,
          message:
            "Workspace not found",
        });
      }

      const channel =
        await Channel.create({
          name: name.trim(),
          workspace:
            workspaceId,
        });

      return res.status(201).json({
        success: true,
        message:
          "Channel created successfully",
        channel,
      });
    } catch (error) {
  console.log(error);

  return res.status(500).json({
    success: false,
    message:
      "Failed to create channel",
  });
}
  };

  export const getChannelsByWorkspace =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { workspaceId } =
        req.params;

      const workspace =
        await Workspace.findById(
          workspaceId
        );

      if (!workspace) {
        return res.status(404).json({
          success: false,
          message:
            "Workspace not found",
        });
      }

      const channels =
        await Channel.find({
          workspace:
            workspaceId,
        }).sort({
          createdAt: 1,
        });

      return res.status(200).json({
        success: true,
        channels,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to fetch channels",
      });
    }
  };

  export const updateChannel =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { id } = req.params;

      const { name } = req.body;

      if (
        !name ||
        name.trim() === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Channel name is required",
        });
      }

      const channel =
        await Channel.findById(id);

      if (!channel) {
        return res.status(404).json({
          success: false,
          message:
            "Channel not found",
        });
      }

      channel.name = name.trim();

      await channel.save();

      return res.status(200).json({
        success: true,
        message:
          "Channel updated successfully",
        channel,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to update channel",
      });
    }
  };

  export const deleteChannel =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { id } = req.params;

      const channel =
        await Channel.findById(id);

      if (!channel) {
        return res.status(404).json({
          success: false,
          message:
            "Channel not found",
        });
      }

      await Channel.findByIdAndDelete(
        id
      );

      return res.status(200).json({
        success: true,
        message:
          "Channel deleted successfully",
        });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to delete channel",
        });
    }
  };