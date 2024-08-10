import { Router } from "express";

const router = Router();

router.get("/submit", (req, res) => {
    res.send("Vehicle submitted!");
});

export default router;