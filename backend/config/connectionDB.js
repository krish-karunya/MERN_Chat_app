import mongoose from "mongoose";


export const conn = async (mongoDB_url) => {
    await mongoose.connect(mongoDB_url)
}