import { Router } from "express";
import { loginController } from "../controllers/loginController";
import { signupController } from "../controllers/signupController";
import { authMiddleware } from "../middlewares/jwt";

const router = Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Protected works" });
});

export default router;