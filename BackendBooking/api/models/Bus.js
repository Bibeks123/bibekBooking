import mongoose from 'mongoose';
const { Schema } = mongoose;


const BusSchema = new mongoose.Schema({
name:{
    type: String,
    required: true,

},

city:{
    type: String,
    required: true,
},
toCity:{
    type: String,
    required: true,
},



type:{
    type: String,
    required: true,

},



 photo:{
     type: [String],
     

 },
rating:{
    type: Number,
    min : 0,
    max : 5,

},
seat:{
    type: Number,
    },
    booked:{
        type: Number,
        },
   price:{
    type:Number
   },
  time:{
    type: String
  },
    featured:{
        type: Boolean,
        default: false,
    
    },


})



export default mongoose.model("Bus", BusSchema)