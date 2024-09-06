import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI,{
      dbName:`chat-app`
    })
    console.log("Connect to MongoDB")
  } catch (error) {
    
  }
}
export default connectToMongoDb