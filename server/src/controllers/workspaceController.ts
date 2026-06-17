import {
  Request,
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
    const { name, description } =
      req.body;
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
  };