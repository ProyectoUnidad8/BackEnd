import { Router } from "express";
import * as petAdoptionController from "./controller";

const petAdoptionRouter = Router();

petAdoptionRouter.get("/", petAdoptionController.findAllPetToAdopt);
petAdoptionRouter.get("/:id", petAdoptionController.findOnePetToAdopt);
petAdoptionRouter.post("/", petAdoptionController.storePetToAdopt);
petAdoptionRouter.put("/:id", petAdoptionController.updatePetToAdopt);
petAdoptionRouter.delete("/:id", petAdoptionController.deletePetToAdopt);

export default petAdoptionRouter;