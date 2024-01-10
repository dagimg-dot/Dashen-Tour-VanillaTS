import { Router } from "express";
import { login, registerUser } from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/api/login", login);
authRouter.post("/api/register", registerUser);

export default authRouter;
