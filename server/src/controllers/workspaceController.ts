import {
  Request,
  Response,
} from "express";
import Workspace from "../models/Workspace";
export const createWorkspace =
  async (
    req: Request,
    res: Response
  ) => {
    const { name, description } =
      req.body;

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
      });
  
  };