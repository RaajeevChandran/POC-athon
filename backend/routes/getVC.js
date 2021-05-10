const express = require("express")
const router = express.Router()
const {GETVC} = require("../controllers/getVC")

router.get("/getVC",GETVC)


module.exports = router
