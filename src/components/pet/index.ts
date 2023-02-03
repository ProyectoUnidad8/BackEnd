import { Router } from "express";
import * as controllerPet from "./controller";

const petRouter : Router = Router();

petRouter.get("/", controllerPet.findAllPet);
petRouter.post("/", controllerPet.addPet);
petRouter.get("/:id",controllerPet.findPetById);
petRouter.get("/:id", controllerPet.findUserPets);
petRouter.post("/:id", controllerPet.updatePet);
petRouter.delete("/:id",controllerPet.deletePet);

export default petRouter;