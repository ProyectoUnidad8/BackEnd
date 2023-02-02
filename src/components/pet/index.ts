import { Router } from "express";
import * as controllerPet from "./controller";

const petRouter : Router = Router();

petRouter.get("/", controllerPet.findUserPets);

export default petRouter;