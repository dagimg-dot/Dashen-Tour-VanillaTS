const express = require("express");
const cors = require("cors");

require("./config/env.config");
const router = require("./router/router");
const undefinedRouteHandler = require("./utils/undefinedRouteHandler");

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/", router);

app.use(undefinedRouteHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
