const express = require("express");
const { default: registerUser } = require("./api/registerUser");

const app = express();

app.get("/test", () => {
  console.log("This is a test endpoint");
});

app.post("/api/register", registerUser);

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
