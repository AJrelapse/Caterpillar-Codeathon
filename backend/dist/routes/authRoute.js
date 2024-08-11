import { Router } from "express";
import { contactUs, login, logout, signup } from "../controllers/authController.js";
const router = Router();
router.get('/logout', logout);
router.post('/login', login);
router.post('/signup', signup);
router.post('/contactUs', contactUs);
export default router;
