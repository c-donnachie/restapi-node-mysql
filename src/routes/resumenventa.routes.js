import { Router } from "express";
import { getVentas, createVenta } from "../controllers/resumenventa.controller.js";

const router = Router();

router.get("/resumenventa", getVentas);

router.post('/resumenventa', createVenta)

export default router;
