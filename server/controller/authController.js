import bcrypt from "bcryptjs";

import User from "../model/user.js";
import errorHandler from "../utils/errorHandler.js";

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
      User.findOne({ where: [{ email: email }] }).then((user) => {
        if (!user) {
          res.status(404).json({
            error: {
              message: "Login failed",
            },
          });
        } else {
          bcrypt.compare(password, user.password).then((result) => {
            result
              ? res.status(202).json({
                  status: 202,
                  message: "Success",
                  data: { user },
                })
              : res.status(400).json({ error: { message: "Login failed" } });
          });
        }
      });
    } catch (error) {
      errorHandler(error);
    }
  }
};

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

export { login, registerUser };
