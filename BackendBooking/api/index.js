import express  from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import busRoute from "./routes/bus.js"
import seatRoute from "./routes/seat.js"
import cookieParser from "cookie-parser"
const app = express ()
dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected")
  } catch (error) {
  throw error
  }
};
mongoose.connection.on("disconnected", () =>{
    console.log("Disconnected")
})
mongoose.connection.on("connected", () =>{
    console.log("MongoDb connected")
})

// app.get("/user",(req,res) =>{
//     res.send("hello")
// })
app.use(cookieParser());
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/bus", busRoute);
app.use("/api/seat", seatRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something Went wrong"
    return res.status(errorStatus).json( {
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,

});
  })


app.listen (8800, ()=>{
    connect()
    console.log("connected to backend")
})
