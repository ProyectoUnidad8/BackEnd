import { Router } from "express";
import * as ControllerUser from "./controller"

const userRouter: Router = Router();

userRouter.get("/", ControllerUser.findAllUsers)
userRouter.get("/:id", ControllerUser.findUserPets)
userRouter.post("/", ControllerUser.store)
userRouter.put("/:id", ControllerUser.updateUser)
userRouter.delete("/:id", ControllerUser.deleteUser)

export default userRouter;