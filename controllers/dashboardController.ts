import type { Request, Response } from "express";
import { dashboard_details_service } from "../service/dashboard";

export const dashboard_details_controller = async (req: Request, res: Response) => {
    try {
        const responseData = await dashboard_details_service();
        return res.status(500).json(responseData);
    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message,
            componentData: null
        });
    };
};