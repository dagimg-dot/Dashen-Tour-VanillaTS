const { UniqueConstraintError } = require("sequelize");

const errorHandler = (error, res) => {
  if (error instanceof UniqueConstraintError) {
    res.status(400).json({
      error: {
        message:
          "This email is already associated with an account try to login with your email.",
      },
    });
  }
};

module.exports = errorHandler;
