import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import precierresRoutes from "./routes/precierres.routes.js";
import resumenventaRoutes from './routes/resumenventa.routes.js'

const app = express();

app.use(express.json());

app.use(indexRoutes);

app.use("/api", employeesRoutes, precierresRoutes, resumenventaRoutes);

app.use(express.static("public"));

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
