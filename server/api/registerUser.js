import { addUser } from "../dao/userDAO.js";
import User from "../model/user";

const registerUser = async (req, res) => {
  const { fullName, email, phoneNumber, address, password } = req.body;

  const newUser = new User(fullName, email, phoneNumber, address, password);

  try {
    const user = await addUser(newUser);

    if (!user) {
      res.status(400).json({
        error: {
          message: "Registration failed",
        },
      });
    }

    res.status(200).json({
      message: "Registration successful",
      user,
    });
  } catch (err) {
    res.status(500).json({
      error: {
        message: `${err}`,
      },
    });
  }
};

export default registerUser;
