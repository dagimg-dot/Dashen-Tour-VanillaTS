import { Router } from "express";
import uploadConfig from "../config/multer.config.js";
import upload from "../controller/uploadController.js";
import {
  fileSizeLimitErrorHandler,
  extenstionErrorHandler,
} from "../middlewares/uploadErrorHandler.js";

const uploadRouter = Router();

uploadRouter.post(
  "/api/upload",
  uploadConfig.single("image"),
  fileSizeLimitErrorHandler,
  extenstionErrorHandler,
  upload
);

export default uploadRouter;
