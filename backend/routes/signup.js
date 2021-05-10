const express = require("express")
const router = express.Router()
const {SIGNUP} = require("../controllers/signup")

router.post("/signup",SIGNUP)


module.exports = router
