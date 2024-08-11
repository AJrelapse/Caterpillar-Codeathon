import { Router } from "express";
import { submitController } from "../controllers/vehicleController.js";
const router = Router();
router.post("/submit/:vehicle_id", async (req, res) => submitController(req, res));
export default router;
