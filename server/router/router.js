const express = require("express")
const registerUser = require("../api/registerUser")

const router = express.Router()

router.post("/api/register", registerUser)

module.exports = router