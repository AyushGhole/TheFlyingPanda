import express from "express";
import cors from "cors";
import logger from "./src/middleware/logger.middleware.js";
import errorHandler from "./src/middleware/error.middleware.js";
import alertRoutes from "./src/routes/alerts.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/alerts", alertRoutes);

app.use(errorHandler);

export default app;
