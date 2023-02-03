import { Router } from "express";
import * as controllerPet from "./controller";

const petRouter : Router = Router();

petRouter.get("/", controllerPet.findAllPet);
petRouter.post("/", controllerPet.addPet);
petRouter.get("/:id",controllerPet.findPetById);
petRouter.get("/user-pet/:id", controllerPet.findUserPets);
petRouter.put("/:id", controllerPet.updatePet);
petRouter.delete("/:id",controllerPet.deletePet);

export default petRouter;