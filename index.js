const express = require("express")
const connectDB = require("./connection/connectingDb")
const app = express()
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT  || 5050
connectDB()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(require("./Routes/route"))
app.use(require("./routes/apiRoutes"))
app.listen(PORT , ()=>{
    console.log(`connection with localhost:${PORT}`)
})