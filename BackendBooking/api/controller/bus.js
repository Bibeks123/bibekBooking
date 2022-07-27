import Bus from "../models/Bus.js"



export const createBus = async (req,res,next)=>{
    const newBus = new Bus (req.body)
    try {
        const savedBus = await newBus.save() 
        res.status(200).json(savedBus)
        
    } catch (err) {
      next(err);
    }
};
export const updateBus = async (req,res,next)=>{

    try {
        const updatedBus = await Bus.findByIdAndUpdate(req.params.id ,
            {$set: req.body},
            {new: true}
            ) ;
        res.status(200).json(updatedBus)
        
    } catch (err) {
       next(err)
    }


};

export const deleteBus = async (req,res,next)=>{
    try {
        await Bus.findByIdAndDelete(req.params.id ) ;
               res.status(200).json("Bus has been deleted")
               
           } catch (err) {
            next(err)
           }
};
export const getBus = async (req,res,next)=>{
    try {
        const Bus = await Bus.findById(req.params.id ) ;
        res.status(200).json(Bus)
        
    } catch (err) {
        next(err)
    }
};
export const getAllBus = async (req,res,next)=>{
    
    try {
        const Buses = await Bus.find( req.query) ;
        res.status(200).json(Buses)
        
    } catch (err) {
        next(err)
    }

};

export const countByCity = async (req,res,next)=>{
    const cities =req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Bus.countDocuments({city:city})
        }))

        res.status(200).json(list)
        
    } catch (err) {
        next(err)
    }
}