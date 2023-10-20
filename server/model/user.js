const sequelize = require("sequelize");
const DT = sequelize.DataTypes;
const connectDB = require("../config/database");

const User = connectDB.define("user", {
  fullName: {
    type: DT.STRING(25),
    allowNull: false,
    unique: false,
  },
  email: {
    type: DT.STRING(30),
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DT.STRING(25),
    allowNull: false,
    unique: false,
  },
  address: {
    type: DT.STRING(30),
    allowNull: false,
    unique: false,
  },
  password: {
    type: DT.STRING(30),
    allowNull: false,
  },
});

module.exports = User;
