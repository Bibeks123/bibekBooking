import express, { Router }  from "express"


const router = express.Router();

router.get("/",(req,res) =>{
    res.send("hello this is authroute")
})


export default router