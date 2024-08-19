import mongoose from "mongoose";

async function connectDB(){
    try{
       await mongoose.connect(process.env.MONGODB_URL)
    }catch(err){
        console.log(err)
    }
}

export default connectDB;

