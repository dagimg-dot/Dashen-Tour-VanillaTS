import express from "express";
import cors from "cors";

import "./config/env.config.js";
import authRouter from "./route/authRoute.js";
import uploadRouter from "./route/uploadRoute.js";
import undefinedRouteHandler from "./utils/undefinedRouteHandler.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(authRouter);
app.use(uploadRouter);

app.use(undefinedRouteHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
