import { UniqueConstraintError } from "sequelize";

const errorHandler = (error, res) => {
  if (error instanceof UniqueConstraintError) {
    res.status(400).json({
      error: {
        message:
          "This email is already associated with an account try to login with your email.",
      },
    });
  } else {
    console.log(error);
    res.status(400).json({
      error: {
        message: "Something went wrong when processing the request",
      },
    });
  }
};

export default errorHandler;
