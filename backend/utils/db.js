import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://omsuhagir123:Omiii%402005@cluster0.f6vzfsh.mongodb.net/")
        console.log("Monogodb connected");
    } catch(err) {
        console.log("Error occured while connecting to DB" + err);
    }
}

export default connectDB;