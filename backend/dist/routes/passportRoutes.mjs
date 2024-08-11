import { Router } from "express";
import { authenticateWithGoogle, googleCallback } from "../controllers/authController.js";

const router = Router();

router.get("/auth/google", authenticateWithGoogle);
router.get("/google/callback", googleCallback);
router.get("/auth/failure", (_req, res) => {
    res.status(401).json({"message":"Authentication failed!"});
});
export default router;
