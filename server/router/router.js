const express = require("express");
const login = require("../api/login");
const registerUser = require("../api/registerUser");
const uploadImage = require("../api/uploadImage");
const upload = require("../config/multer.config");
const fileSizeLimitErrorHandler = require("../utils/fileSizeLimitErrorHandler");
const router = express.Router();

router.post("/api/register", registerUser);
router.post("/api/login", login);
router.post(
  "/api/upload",
  upload.single("image"),
  fileSizeLimitErrorHandler,
  uploadImage
);

module.exports = router;
