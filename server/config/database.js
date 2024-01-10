import sequelize from "sequelize";

const connectDB = new sequelize({
  dialect: "sqlite",
  storage: "../server/db/dashen-tour.db",
});

connectDB
  .sync()
  .then(() => console.log("Database setup successfull!"))
  .catch((error) => console.log("error: ", error));

export default connectDB;
