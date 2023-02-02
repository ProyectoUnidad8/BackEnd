import { Router } from "express";
import * as controllerPet from "./controller";

const petRouter : Router = Router();

petRouter.get("/", controllerPet.findUserPets);
petRouter.post("/add", controllerPet.addPet);
petRouter.post("/:id", controllerPet.updatePet);
petRouter.get("/all", controllerPet.findAllPet);

export default petRouter;