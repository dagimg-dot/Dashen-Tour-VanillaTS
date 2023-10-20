const User = require("../model/user");

const registerUser = (req, res) => {
  const { fullName, email, phoneNumber, address, password } = req.body;

  User.create({
    fullName,
    email,
    phoneNumber,
    address,
    password,
  })
    .then((user) => {
      if (user) {
        res.status(201).json({ message: "User registered successfully", user });
      } else {
        res.status(400).json({
          error: {
            message: "User registration failed",
          },
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        error: {
          message: "User registration failed",
        },
      });
    });
};

module.exports = registerUser;
