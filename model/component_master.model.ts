import mongoose from "mongoose";

const schema = new mongoose.Schema({
    component_name: {
        type: String,
        required: true,
        unique: true
    },
    parent_component: {
        type: String,
        required: true,
    },
    created_by: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Component_master_model = mongoose.model("component_master", schema)