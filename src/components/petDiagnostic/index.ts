import { Router } from "express";
import * as petDiagnosticController from "./controller";
import { validateAuthorization } from "../../middleware";

const petDiagnosticRouter = Router();

petDiagnosticRouter.get("/", validateAuthorization, petDiagnosticController.findAllPetDiagnostic)
petDiagnosticRouter.get("/:id", validateAuthorization, petDiagnosticController.findOnePetDiagnostic)
petDiagnosticRouter.post("/", validateAuthorization, petDiagnosticController.storePetDiagnostic)
petDiagnosticRouter.put("/:id", validateAuthorization, petDiagnosticController.updatePetDiagnostic)
petDiagnosticRouter.delete("/:id", validateAuthorization, petDiagnosticController.deletePetDiagnostic)

export default petDiagnosticRouter;