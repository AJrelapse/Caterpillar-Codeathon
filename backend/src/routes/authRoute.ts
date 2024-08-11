import { Router } from "express";
import { contactUs, login, logout, signup } from "../controllers/authController.js"
// import { revokeAdmin, makeUserAdmin } from "../controllers/adminController"
// import { authverify, isAdmin } from "../middleware/authMiddleware";
const router: Router = Router();

router.get('/logout', logout);
router.post('/login', login);
router.post('/signup', signup);
router.post('/contactUs',contactUs);
// router.get('/adminify', authverify, isAdmin, makeUserAdmin);
// router.get('/deadminify', authverify, isAdmin, revokeAdmin);
// add reset password route
// add forgot password route
export default router;
