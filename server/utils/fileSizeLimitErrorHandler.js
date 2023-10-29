const multer = require("multer");

const fileSizeLimitErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({
        error: {
          message: "File size limit exceeded",
        },
      });
    }
  }
  next(err);
};

module.exports = fileSizeLimitErrorHandler;
