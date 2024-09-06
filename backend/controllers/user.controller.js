import User from "../models/user.model.js"
export const getUsersforSidebar = async(req,res) => {
  try {
    const loggedInId= req.user._id
    const filtereduser = await User.find({_id:{$ne:loggedInId}}).select("-password")
    res.status(200).json(filtereduser)
  } catch (error) {
    console.log("Error in user controller", error.message)
        res.status(400).json({ error: "Internal Server error" })
  }
}
