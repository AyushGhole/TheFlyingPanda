import express from "express";
import {
  getAlerts,
  createAlert,
  updateAlert,
  deleteAlert,
} from "../controllers/alerts.controller.js";
import validateAlert from "../middleware/validateAlert.middleware.js";

const router = express.Router();

router.get("/", getAlerts);
router.post("/", validateAlert, createAlert);
router.put("/:id", updateAlert);
router.delete("/:id", deleteAlert);

export default router;
