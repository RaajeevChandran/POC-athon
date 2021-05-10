const express = require("express")
const router = express.Router()
const {VERIFYVC} = require("../controllers/verifyVC")

router.post("/verifyVC",VERIFYVC)


module.exports = router
