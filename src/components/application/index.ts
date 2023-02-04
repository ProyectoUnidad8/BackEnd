import { Router } from "express";
import * as controllerApplication from "./controller";
import { validateAuthorization } from "../../middleware";

const applicationRouter : Router = Router();

applicationRouter.get("/", validateAuthorization ,controllerApplication.findAllApplication);
applicationRouter.post("/", validateAuthorization ,controllerApplication.addApplication);
applicationRouter.get("/:id", validateAuthorization ,controllerApplication.findApplication);
applicationRouter.put("/:id", validateAuthorization ,controllerApplication.updateApplication);
applicationRouter.delete("/:id", validateAuthorization ,controllerApplication.deleteApplication);

export default applicationRouter;