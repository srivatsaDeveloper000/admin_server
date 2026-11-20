import { connection } from "../../lib/db_connection.ts";
import { userModel } from "../../model/addUser.model.ts";
import { AddUserPayload } from "../../types/users.types.ts";

export const add_user_service = async (payload: AddUserPayload) => {
    try {
        await connection();

        const all_users_data = await userModel.find();
        let isUserExist;

        if (payload.type === "single") {
            isUserExist = all_users_data.some(
                item => item.user_name === payload.user_name
            );
        } else {
            isUserExist = payload.users.filter(user =>
                all_users_data.some(
                    item => item.user_name === user.user_name
                )
            );
        }
        
        if (isUserExist) {
            return {
                type: "error",
                message: "User already exists ...!!!",
                componentData: null
            }
        };

        let new_user;
        if (payload.type === "single") {
            const { type, ...userData } = payload;
            new_user = await userModel.create(userData);
        } else {
            new_user = await userModel.insertMany(payload.users);
        }

        return {
            type: "Success",
            message: "User created successfully...!!!",
            componentData: {
                new_user
            }
        };
    } catch (error: any) {
        return {
            type: "error",
            message: error.message,
            componentData: null
        };
    };
};