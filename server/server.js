const express = require("express");
const router = require("./router/router");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
