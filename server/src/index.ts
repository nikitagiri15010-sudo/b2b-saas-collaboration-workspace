import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);   
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import workspaceRoutes from "./routes/workspaceRoutes";
import channelRoutes from "./routes/channelRoutes";
import messageRoutes from "./routes/messageRoutes";
import http from "http";
import { Server } from "socket.io";
import { initializeSocket } from "./socket/socketServer";
import { setIO } from "./socket/io";
dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/workspaces", workspaceRoutes);
app.use("/api/channels", channelRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
connectDB();

app.get("/", (_req, res) => {
  res.send("B2B SaaS Server Running");
});
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

setIO(io);
initializeSocket(io);

server.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});



