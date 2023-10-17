import dbConnection from "../database/database";

const addUser = (user) => {
  return new Promise((resolve, reject) => {
    const statement =
      "INSERT INTO User (fullName, email, phoneNumber, address, password) VALUES (?, ?, ?, ?, ?)";
    dbConnection.run(
      statement,
      [
        user.fullName,
        user.email,
        user.phoneNumber,
        user.address,
        user.password,
      ],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      }
    );
  });
};

export { addUser };
