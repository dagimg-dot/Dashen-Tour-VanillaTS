const express = require("express");
const registerUser = require("./api/registerUser");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.post("/api/register", registerUser);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
