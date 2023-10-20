const express = require("express");
const registerUser = require("./api/registerUser");

const app = express();

app.use(express.json());

app.post("/api/register", registerUser);

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
