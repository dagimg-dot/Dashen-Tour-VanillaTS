const bcrypt = require("bcryptjs");

const User = require("../model/user");
const errorHandler = require("../utils/errorHandler");

const registerUser = (req, res) => {
  const { fullName, email, phoneNumber, address, password } = req.body;

  bcrypt.hash(password, 10).then(async (hash) => {
    User.create({
      fullName,
      email,
      phoneNumber,
      address,
      password: hash,
    })
      .then((user) => {
        res
          .status(201)
          .json({ status: 201, message: "Success", data: { user } });
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });
};

module.exports = registerUser;
