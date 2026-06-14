import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

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

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});