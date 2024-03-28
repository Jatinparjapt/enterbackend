const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const signupSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email : {
        type :String ,
        required: true
    },
    password: {
        type : String,
        required : true
    },
    tokens:[{
        token:{
            type:String,
            require:true,

        }
    }]

})
signupSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next()
})

module.exports = mongoose.model("entertainmentSignup", signupSchema)