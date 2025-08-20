import { Router } from "express";
import demoController from "../controller/demo.controller.js";


const demoRouter = Router();

demoRouter
    .get("/", demoController.getAll)
    .get("/danger", demoController.danger)
    .get("/:id", demoController.get)


export default demoRouter;
