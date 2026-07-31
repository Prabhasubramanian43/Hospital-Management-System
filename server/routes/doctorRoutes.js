import express from "express";
import {
  addDoctor,
  getDoctors,
  deleteDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post("/add", addDoctor);

router.get("/", getDoctors);

router.delete("/:id", deleteDoctor);

export default router;