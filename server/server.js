const express = require("express");

const sqlite = require("sqlite3");

// Dependency test
console.log(sqlite.VERSION);

const app = express();

app.get("/test", () => {
  console.log("This is a test endpoint");
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
