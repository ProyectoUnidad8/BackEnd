import { Router } from "express";
import * as controllerApplication from "./controller";

const applicationRouter : Router = Router();

applicationRouter.get("/", controllerApplication.findAllApplication);
applicationRouter.post("/", controllerApplication.addApplication);
applicationRouter.get("/:id", controllerApplication.findApplication);
applicationRouter.put("/:id", controllerApplication.updateApplication);
applicationRouter.delete("/:id", controllerApplication.deleteApplication);

export default applicationRouter;