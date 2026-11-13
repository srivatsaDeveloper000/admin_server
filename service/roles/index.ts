import { connection } from "../../lib/db_connection.ts";
import { userModel } from "../../model/addUser.model.ts";

export const get_users_service = async () => {
    try {
        await connection();
        const users_data = await userModel.find();

        return {
            type: "Success",
            message: "Users data retrieved successfully...!!!",
            componentData: {
                data: users_data
            }
        }
    } catch (error: any) {
        return {
            type: "erorr",
            message: error.message,
            componentDat: null
        }
    }
} 