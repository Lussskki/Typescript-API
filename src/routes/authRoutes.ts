import { Router } from "express";
import type { JwtPayload } from "jsonwebtoken";

import { loginController } from "../controllers/loginController";
import { signupController } from "../controllers/signupController";
import { authMiddleware } from "../middlewares/jwt";
import { User } from "../models/user"

const router = Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/profile", authMiddleware, async (req, res) => {
  const payload = req.user as JwtPayload;

  const user = await User.findById(payload.userId).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(user);
});

export default router;