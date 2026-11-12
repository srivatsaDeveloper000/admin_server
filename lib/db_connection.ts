import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const mongodb_url: string = process.env.MONGODB_URL || ""

export const connection = async () => {
    try {
        await mongoose.connect(mongodb_url)
        return true
    } catch (error) {
        return false;
    }
}