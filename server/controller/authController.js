import bcrypt from "bcryptjs";

import User from "../model/user.js";
import errorHandler from "../utils/errorHandler.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      error: {
        message: "Email or Password not present",
      },
    });
  } else {
    try {
      const user = await User.findOne({ where: [{ email: email }] });
      if (!user) {
        res.status(401).json({
          error: {
            message: "Incorrect email or password",
          },
        });
      } else {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          res.status(200).json({
            status: 200,
            message: "Success",
            data: {
              fullName: user.fullName,
              email: user.email,
              phoneNumber: user.phoneNumber,
              address: user.address,
            },
          });
        } else {
          res
            .status(401)
            .json({ error: { message: "Incorrect email or password" } });
        }
      }
    } catch (error) {
      errorHandler(error);
    }
  }
};

const registerUser = async (req, res) => {
  const { fullName, email, phoneNumber, address, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      fullName,
      email,
      phoneNumber,
      address,
      password: hashedPassword,
    });
    res.status(201).json({
      status: 201,
      message: "Success",
      data: {
        data: {
          fullName: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          address: user.address,
        },
      },
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export { login, registerUser };
