import { Router } from "express";

const router = Router();

router.get("/submit", (_req, res) => {
    res.send("Vehicle submitted!");
});

export default router;