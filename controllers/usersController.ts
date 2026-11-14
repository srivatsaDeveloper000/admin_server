import type { Request, Response } from "express";
import { get_users_service } from "../service/roles";
import { add_user_service } from "../service/add user";

export const get_users_controller = async (req: Request, res: Response) => {
    try {
        const responseData = await get_users_service();
        return res.status(200).json(responseData)
    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message,
            componentData: null
        })
    }
}

export const add_users_controller = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const responseData = await add_user_service(payload);
        return res.status(200).json(responseData)
    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message,
            componentData: null
        })
    }
}