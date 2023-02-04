import { Router } from "express";
import * as petAdoptionController from "./controller";
import { validateAuthorization } from "../../middleware";

const petAdoptionRouter = Router();

petAdoptionRouter.get("/", validateAuthorization, petAdoptionController.findAllPetToAdopt);
petAdoptionRouter.get("/:id", validateAuthorization, petAdoptionController.findOnePetToAdopt);
petAdoptionRouter.post("/", validateAuthorization, petAdoptionController.storePetToAdopt);
petAdoptionRouter.put("/:id", validateAuthorization, petAdoptionController.updatePetToAdopt);
petAdoptionRouter.delete("/:id", validateAuthorization, petAdoptionController.deletePetToAdopt);

export default petAdoptionRouter;