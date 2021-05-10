require('dotenv').config();
const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const signup = require("./routes/signup")
const signin = require("./routes/signin")
const createVC = require("./routes/createVC")
const signVC = require("./routes/signVC")
const verifyVC = require("./routes/verifyVC")
const storeVC = require("./routes/storeVC")
const getVC = require("./routes/getVC")
const cors = require("cors")

app.use(cors())
app.use(bodyparser.json())
app.use("/api",signup)
app.use("/api",signin)
app.use("/api",createVC)
app.use("/api",signVC)
app.use("/api",verifyVC)
app.use("/api",storeVC)
app.use("/api",getVC)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log("Up and running"))