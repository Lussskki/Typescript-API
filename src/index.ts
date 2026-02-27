import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";

import { connectDB } from "./database/mongoose"; 

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });