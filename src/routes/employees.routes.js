import { Router } from "express";
import { getEmployees, getEmployee , createEmployess, updateEmployess, deleteEmployess } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployess);

router.delete("/employees/:id", deleteEmployess);

router.patch("/employees/:id", updateEmployess);

export default router;
