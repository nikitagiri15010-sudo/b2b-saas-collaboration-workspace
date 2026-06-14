import {
  Request,
  Response,
  NextFunction,
} from "express";
import jwt from "jsonwebtoken";

export const protect = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader =
  _req.headers.authorization;

if (!authHeader) {
  return _res.status(401).json({
    success: false,
    message: "No token provided",
  });
}

const token =
  authHeader.split(" ")[1];

if (!token) {
  return _res.status(401).json({
    success: false,
    message: "Invalid token format",
  });
}

next();
};