const express = require("express")
const login = require("../api/login")
const registerUser = require("../api/registerUser")

const router = express.Router()

router.post("/api/register", registerUser)
router.post("/api/login", login)

module.exports = router