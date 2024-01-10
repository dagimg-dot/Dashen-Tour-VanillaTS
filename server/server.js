const express = require("express");
const cors = require("cors");

require("./config/env.config");
const authRouter = require("./route/authRoute");
const uploadRouter = require("./route/uploadRoute");
const undefinedRouteHandler = require("./utils/undefinedRouteHandler");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(authRouter);
app.use(uploadRouter);

app.use(undefinedRouteHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
