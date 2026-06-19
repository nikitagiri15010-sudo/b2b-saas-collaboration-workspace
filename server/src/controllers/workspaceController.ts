import {
  Response,
} from "express";

import Workspace from "../models/Workspace";

import { AuthRequest }
from "../middleware/authMiddleware";

export const createWorkspace =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const {
      name,
      description,
    } = req.body;

    const user = req.user;

    if (!name) {
      return res.status(400).json({
        success: false,
        message:
          "Workspace name is required",
      });
    }

    const workspace =
      await Workspace.create({
        name,
        description,
        owner: user!._id,
        members: [user!._id],
      });

    return res.status(201).json({
      success: true,
      message:
        "Workspace created successfully",
      workspace,
    });
  };

export const getWorkspaces =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const user = req.user;

      const workspaces =
        await Workspace.find({
          members: user?._id,
        })
          .populate(
            "owner",
            "name email"
          )
          .sort({
            createdAt: -1,
          });

      return res.status(200).json({
        success: true,
        workspaces,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to fetch workspaces",
      });
    }
  };

export const getWorkspaceById =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { id } = req.params;

      const workspace =
        await Workspace.findById(id)
          .populate(
            "owner",
            "name email"
          );

      const user = req.user;

      if (!workspace) {
        return res.status(404).json({
          success: false,
          message:
            "Workspace not found",
        });
      }

      if (
        !workspace.members.some(
          (member) =>
            member.toString() ===
            user?._id.toString()
        )
      ) {
        return res.status(403).json({
          success: false,
          message:
            "Access denied",
        });
      }

      return res.status(200).json({
        success: true,
        workspace,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to fetch workspace",
      });
    }
  };

export const updateWorkspace =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { id } = req.params;

      const {
        name,
        description,
      } = req.body;

      if (
  typeof name !== "string"
) {
  return res.status(400).json({
    success: false,
    message:
      "Workspace name must be a string",
  });
}

      if (
  !name ||
  name.trim() === ""
) {
  return res.status(400).json({
    success: false,
    message:
      "Workspace name is required",
  });
}

      const workspace =
        await Workspace.findById(id);

      if (!workspace) {
        return res.status(404).json({
          success: false,
          message:
            "Workspace not found",
        });
      }

      const user = req.user;

      if (
        workspace.owner.toString() !==
        user?._id.toString()
      ) {
        return res.status(403).json({
          success: false,
          message:
            "Only the workspace owner can update the workspace",
        });
      }

      workspace.name = name.trim();
     workspace.description = description?.trim();

      await workspace.save();

      return res.status(200).json({
        success: true,
        message:
          "Workspace updated successfully",
        workspace,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to update workspace",
      });
    }
  };

export const deleteWorkspace =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { id } = req.params;

      const workspace =
        await Workspace.findById(id);

      if (!workspace) {
        return res.status(404).json({
          success: false,
          message:
            "Workspace not found",
        });
      }

      const user = req.user;

      if (
        workspace.owner.toString() !==
        user?._id.toString()
      ) {
        return res.status(403).json({
          success: false,
          message:
            "Only the workspace owner can delete the workspace",
        });
      }

      await Workspace.findByIdAndDelete(
        id
      );

      return res.status(200).json({
        success: true,
        message:
          "Workspace deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to delete workspace",
      });
    }
  };