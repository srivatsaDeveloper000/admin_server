import { connection } from "../../lib/db_connection.ts";
import { userModel } from "../../model/addUser.model.ts";
import { user_type } from "../../types/users.types.ts";

export const add_user_service = async (payload: user_type) => {
    try {
        await connection();

        const all_users_data = await userModel.find();
        const isUserExist = all_users_data.find(item => item.user_name);
        if (isUserExist) {
            return {
                type: "error",
                message: "User already exists ...!!!",
                componentData: null
            }
        }

        const new_user = await userModel.insertOne(payload);

        return {
            type: "Success",
            message: "User created successfully...!!!",
            componentData: {
                new_user
            }
        }
    } catch (error: any) {
        return {
            type: "error",
            message: error.message,
            componentData: null
        }
    }
}