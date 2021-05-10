const express = require("express")
const router = express.Router()
const {STOREVC} = require("../controllers/storeVC")

router.post("/storeVC",STOREVC)


module.exports = router
