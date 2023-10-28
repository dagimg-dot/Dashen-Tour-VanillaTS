require("../config/env.config");

const upload = (req, res) => {
  if (!req.file) {
    res.status(400).json({
      error: {
        message: "No image uploaded",
      },
    });
  }

  const link = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
  res.status(200).json({
    status: "200",
    message: "Success",
    data: { link },
  });
};

module.exports = upload;
