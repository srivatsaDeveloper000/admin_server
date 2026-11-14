import mongoose from "mongoose";

const schema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    user_role: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const userModel = mongoose.model("users", schema);