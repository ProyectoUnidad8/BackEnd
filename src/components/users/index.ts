import { Router } from "express";
import * as ControllerUser from "./controller"
import { validateAuthorization } from "../../middleware";

const userRouter: Router = Router();

userRouter.get("/", validateAuthorization, ControllerUser.findAllUsers)
userRouter.get("/:id", validateAuthorization, ControllerUser.findUserPets)
userRouter.put("/:id", validateAuthorization, ControllerUser.updateUser)
userRouter.delete("/:id", validateAuthorization, ControllerUser.deleteUser)

userRouter.post("/signup", ControllerUser.signup)
userRouter.post("/login", ControllerUser.login)

export default userRouter;