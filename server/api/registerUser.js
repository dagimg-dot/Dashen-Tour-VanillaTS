const User = require("../model/user");
const errorHandler = require("../utils/errorHandler");

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
      res.status(201).json({ status: 201, message: "Success", user });
    })
    .catch((error) => {
      errorHandler(error, res);
    });
};

module.exports = registerUser;
