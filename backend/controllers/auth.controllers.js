import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookies from "../utils/generateToken.js"
import { io } from "../socket/socket.js"
export const login = async(req, res) => {
    try {
        const {username, password}= req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or Password"})
        }
           generateTokenAndSetCookies(user._id,res)
           res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic,
        })
    } catch (error) {
        console.log("Error in Login component",error.message)
res.status(500).json({error:"Internal server error"})
    }
}
export const logout = (req, res) => {
   try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"Logout successfully"})
   } catch (error) {
    console.log("Error in Signup component",error.message)
res.status(500).json({error:"Internal server error"})
   }
}
export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmpassword, gender } = req.body;
        if (password !== confirmpassword) {
            return res.status(400).json({ error: "Password dont match" })
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exist" })
        }

        //hash password here
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)

        //profilepic
        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newuser = new User({
            fullname,
            username,
            password:hashedpassword,
            gender,
            profilepic: gender === "male" ? boyprofilepic : girlprofilepic

        })
        if(newuser){
            generateTokenAndSetCookies(newuser._id,res)
            await newuser.save()
       
        
            io.emit("newSignup",newuser)

        res.status(201).json({
            _id: newuser._id,
            fullname: newuser.fullname,
            username: newuser.username,
            profilepic: newuser.profilepic,
        })
        }
        else {
            res.status(400).json({error:"Invalid user data"})
        }
    } catch (error) {
        console.log("Error in Signup component",error.message)
res.status(500).json({error:"Internal server error"})
    }
}
