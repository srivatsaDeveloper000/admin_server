import type { Request, Response } from "express";

export const log_master_controller = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message,
            componentData: null
        })
    }
}