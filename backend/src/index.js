import express from "express";
import { PORT } from "./config.js";
import taskRouter from "./routers/tasks.routes.js";
import morgan from "morgan";
export const app = express();
import cors from "cors";
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.listen(PORT, () => console.log("Server is running on port 3000"));
app.use("/api", taskRouter);
