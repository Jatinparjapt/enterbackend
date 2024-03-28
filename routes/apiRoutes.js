const express = require("express")
const router = express.Router()
const loginDatabase = require("../Schema/schema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const bookmarkSchema = require("../Schema/schemaForBookmark")
router.post("/api/login" , async (req ,res )=>{
    try {
        const {email , password} = req.body
        console.log(req.body)
        if(!email&& !password){
            res.status(401).json({error: "Email and password are required"})
        }else{
            const findUser = await loginDatabase.findOne({email})
            if(findUser){
                const matchPassword = await bcrypt.compare(password , findUser.password)
                if(matchPassword){
                    const tokenJwt = jwt.sign({_id:findUser._id},process.env.SCREAT_KEY);
                    findUser.tokens.push({ token: tokenJwt })
                    console.log(findUser.tokens)
                    await findUser.save()
                    res.status(200).json({"Response": "User login Successfully ...","token": tokenJwt , "name" : findUser.name , "email": findUser.email})
                }else{
                        return res.status(401).json({ error: "Invalid password" })
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
   
})
router.post("/api/signup" , async (req ,res )=>{
    try {
        const {name , email , password} = req.body
        // console.log(req.body.data , req.body)
        const findUser = await loginDatabase.findOne({email})
        if(findUser){
            res.status(422).json({ error: "User exist" });
        }else{
            const user = new loginDatabase({name ,email, password})
            const newUserSave = await user.save();
            if(newUserSave){
                res.status(201).json({"Message" : "User Created Successfully"})
            }
        }
    } catch (error) {
        console.log(error)
    }
})
router.post("/api/logout", async (req ,res )=>{
    try {
        // const {token} = req.body
        console.log(req.body , "token")
        const user = await loginDatabase.findOne({ "tokens.token": req.body });
        // console.log(user ,token)
        if (!user) {
            return res.status(401).json({ error: "User not found or already logged out" });
        }
        user.tokens = user.tokens.filter((tok) => tok.token !== req.body); // Remove the token from the tokens array
        await user.save();
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
})
module.exports = router