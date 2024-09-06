import express from "express"
import protectRoute from "../middleware/protectroute.js"
import { getUsersforSidebar } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/",protectRoute,getUsersforSidebar)
export default router