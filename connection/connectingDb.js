const mongoose = require("mongoose")

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.CONNECTIONSTRING  )
        console.log("Connection to mongoDB successfully!...")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB