const express = require("express")
const router = express.Router()
const {SIGNIN} = require("../controllers/signin")

router.post("/signin",SIGNIN)


module.exports = router
