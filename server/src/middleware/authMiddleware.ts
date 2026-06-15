import User from "../models/User";
import {
  Request,
  Response,
  NextFunction,
} from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest
  extends Request {
  user?: any;
}

export const protect = async (
  _req: AuthRequest,
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

  try {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as {
    userId: string;
  };

  console.log(decoded.userId);
  const user = await User.findById(
  decoded.userId
);
if (!user) {
  return _res.status(401).json({
    success: false,
    message: "User not found",
  });
}
_req.user = user;
console.log(
  "Request User:",
  _req.user.email
);
console.log(
  "Authenticated User:",
  user.email
);
} catch (error) {
  return _res.status(401).json({
    success: false,
    message: "Invalid token",
  });
}

if (!token) {
  return _res.status(401).json({
    success: false,
    message: "Invalid token format",
  });
}

next();
};