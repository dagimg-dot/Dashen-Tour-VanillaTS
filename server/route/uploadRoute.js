const express = require("express");
const uploadConfig = require("../config/multer.config");
const upload = require("../controller/uploadController");
const {
  fileSizeLimitErrorHandler,
  extenstionErrorHandler,
} = require("../middlewares/uploadErrorHandler");

const uploadRouter = express.Router();

uploadRouter.post(
  "/api/upload",
  uploadConfig.single("image"),
  fileSizeLimitErrorHandler,
  extenstionErrorHandler,
  upload
);

module.exports = uploadRouter;