import express from "express";
import type { Request, Response } from "express";
import { component_master_data_service, component_master_service } from "../service/component master";

const component_master_controller = async (req: Request, res: Response) => {
    try {
        const payload = req.body
        const responseData = await component_master_service(payload);
        return res.status(200).json(responseData)
    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message
        })
    }
}

const component_master_data_controller = async (req: Request, res: Response) => {
    try {
        const responseData = await component_master_data_service();
        return res.status(200).json(responseData)
    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message
        })
    }
}

export { component_master_controller ,component_master_data_controller}