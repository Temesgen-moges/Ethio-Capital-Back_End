import express from "express";
import { generateReport } from "../controllers/bord/reportController.js";

const boardRouter = express.Router();

boardRouter.get("/generate-report", generateReport);

export default boardRouter;
