const User = require("../model/user");
const errorHandler = require("../utils/errorHandler");

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      error: {
        message: "Email or Password not present",
      },
    });
  } else {
    try {
      User.findOne({ where: [{ email: email, password: password }] }).then(
        (user) => {
          if (!user) {
            res.status(404).json({
              error: {
                message: "User does not exist",
              },
            });
          } else {
            res.status(202).json({
              status: 202,
              message: "Success",
              data: { user },
            });
          }
        }
      );
    } catch (error) {
      errorHandler(error);
    }
  }
};

module.exports = login;
