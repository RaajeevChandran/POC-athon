const express = require("express")
const router = express.Router()
const {SIGNVC} = require("../controllers/signVC")

router.post("/signVC",SIGNVC)


module.exports = router
