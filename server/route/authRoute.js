const express = require("express");
const login = require("../api/login");
const registerUser = require("../api/registerUser");

const authRouter = express.Router();

authRouter.post("/api/login", login);
authRouter.post("/api/register", registerUser);

module.exports = authRouter;
