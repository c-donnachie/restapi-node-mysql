import { Router } from "express";
import {
  getPrecierres,
  getPrecierre,
  createPrecierre,
  deletePrecierre,
  updatePrecierre,
} from "../controllers/precierres.controller.js";

const router = Router();

router.get("/precierres", getPrecierres);

router.get("/precierres/:id", getPrecierre);

router.post("/precierres", createPrecierre);

router.delete("/precierres/:id", deletePrecierre);

router.patch("/precierres/:id", updatePrecierre);


export default router;
