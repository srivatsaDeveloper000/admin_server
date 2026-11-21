import type { Request, Response } from 'express';
import { file_upload_service } from '../service/file upload/index';

export const file_upload_controller = async (req: Request, res: Response) => {
    try {
        const payload: any = req.file
        const responseData = await file_upload_service(payload);
        return res.status(200).json(responseData)
    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message,
            componentData: null
        })
    };
};