import { Router } from "express";
import * as controllerPet from "./controller";
import { validateAuthorization } from "../../middleware";

const petRouter : Router = Router();

petRouter.get("/", validateAuthorization, controllerPet.findAllPet);
petRouter.post("/",validateAuthorization, controllerPet.addPet);
petRouter.get("/:id", validateAuthorization, controllerPet.findPetById);
petRouter.get("/user-pet/:id", validateAuthorization, controllerPet.findUserPets);
petRouter.put("/:id", validateAuthorization, controllerPet.updatePet);
petRouter.delete("/:id", validateAuthorization, controllerPet.deletePet);

export default petRouter;