const express = require("express");
const login = require("../api/login");
const registerUser = require("../api/registerUser");
const uploadImage = require("../api/uploadImage");
const upload = require("../config/multer.config");
const {
  fileSizeLimitErrorHandler,
  extenstionErrorHandler,
} = require("../middlewares/uploadErrorHandler");
const router = express.Router();

router.post("/api/register", registerUser);
router.post("/api/login", login);
router.post(
  "/api/upload",
  upload.single("image"),
  fileSizeLimitErrorHandler,
  extenstionErrorHandler,
  uploadImage
);

module.exports = router;
