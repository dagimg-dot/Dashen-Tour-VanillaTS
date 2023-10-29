const multer = require("multer");
const fs = require("fs");

const allowedExtensions = [".jpg", ".jpeg", ".png"];

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

const extenstionErrorHandler = (req, res, next) => {
  const file = req.file;
  const originalFileName = file.originalname;
  const fileExtension = originalFileName
    .substring(originalFileName.lastIndexOf("."))
    .toLowerCase();

  if (!allowedExtensions.includes(fileExtension)) {
    // Delete the uploaded file
    fs.unlinkSync(file.path);

    res.status(400).json({
      error: {
        message:
          "Invalid file type. Only JPG, JPEG, and PNG files are allowed.",
      },
    });
  } else {
    next();
  }
};
module.exports = { fileSizeLimitErrorHandler, extenstionErrorHandler };
