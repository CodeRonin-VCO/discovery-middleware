import { Router } from "express";
import demoController from "../controller/demo.controller.js";


const demoRouter = Router();

demoRouter
    .get("/", demoController.getAll)
    .get("/:id", demoController.get);


export default demoRouter;
