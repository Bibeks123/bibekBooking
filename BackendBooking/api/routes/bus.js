import express  from "express"
import { countByCity, createBus, deleteBus, getAllBus, getBus, updateBus } from "../controller/bus.js";
import Bus from "../models/Bus.js"
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//create
router.post("/", verifyAdmin, createBus)

//update
router.put("/:id",verifyAdmin, updateBus)

//delete

router.delete("/:id", verifyAdmin, deleteBus)

//Get
router.get("/find:id", getBus)

//Get all
router.get("/",  getAllBus)
router.get("/countByCity",  countByCity)




export default router