import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";

import { apiLimiter } from "./middlewares/rateLimits";
import { connectDB } from "./database/mongoose"; 
import { env } from "./config/env"

dotenv.config();

const app = express();

app.use(express.json());
app.use(apiLimiter);

app.use("/api/auth", authRoutes);




connectDB()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });