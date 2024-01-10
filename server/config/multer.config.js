const multer = require("multer");
const crypto = require("crypto");

const uploadConfig = multer({
  limits: {
    fileSize: 2 * 1024 * 1024, // 5MB limit
  },
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      const randomValue = crypto.randomBytes(6).toString("hex");
      const ext = file.originalname.split(".").pop();
      cb(null, Date.now().toString() + randomValue + "." + ext);
    },
  }),
});

module.exports = uploadConfig;
