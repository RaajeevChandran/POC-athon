const express = require("express")
const router = express.Router()
const {CREATEVC} = require("../controllers/createVC")

router.post("/createVC",CREATEVC)


module.exports = router
