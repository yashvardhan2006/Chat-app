import path from "path"
import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser";
import {app,server} from "./socket/socket.js"
dotenv.config()

const __dirname = path.resolve();
const Port = process.env.PORT||8000;

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/user",userRoutes)
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});



server.listen(Port,() => {
    connectToMongoDB()
    console.log(`Server running on Port ${Port}`)}
)