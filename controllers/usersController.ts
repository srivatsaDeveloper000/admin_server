import type { Request, Response } from "express";
import { add_user_service, delete_user_service  get_users_service} from "../service/users";

interface UserParams {
    id: string;
}

export const get_users_controller = async (req: Request, res: Response) => {
    try {
        const responseData = await get_users_service();
        return res.status(200).json(responseData);
    } catch (error: any) {
        return res.status(500).json({
            type: "error",
            message: error.message,
            componentData: null
        });
    };
};

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

export const delete_user_controller = async (req: Request<UserParams>, res: Response) => {
    try {
        const { id }: { id: string } = req.params;
        const responseData = await delete_user_service(id);
        return res.status(200).json(responseData);
    } catch (error: unknown) {
        return res.status(500).json({
            type: "error",
            message: error instanceof Error
                ? error.message
                : "Internal Server Error",
            componentData: null
        });
    };
};