const mongoose = require("mongoose")
const bookmarkSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    image:{
        required: true,
        type: String
    }
})
module.exports = mongoose.model("bookmarksData", bookmarkSchema)