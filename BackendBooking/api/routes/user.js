import express  from "express"
import { deleteUser,   getUsers, updateUser,getUser } from "../controller/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// //create
// router.post("/", createUser)

//update
router.put("/:id",verifyUser, updateUser)

//delete

router.delete("/:id", verifyUser, deleteUser)

//Get
router.get("/:id",verifyUser, getUser)

//Get all
router.get("/", verifyAdmin, getUsers)


export default router