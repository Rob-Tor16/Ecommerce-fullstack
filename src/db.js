import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://roberto1608torales:roberto1608@cluster0.ggriuqe.mongodb.net/")
        console.log("la base de datos esta conectada")
    } catch (error) {
        console.log(error)
    }
}