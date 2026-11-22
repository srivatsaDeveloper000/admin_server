import { connection } from "../../lib/db_connection.ts";
import { userModel } from "../../model/addUser.model.ts";
import { AddUserPayload } from "../../types/users.types.ts";

export const add_user_service = async (payload: AddUserPayload) => {
    try {
        await connection();
        console.log("payload", payload)
        const all_users_data = await userModel.find();
        let isUserExist;

        if (payload.type === "single") {
            isUserExist = all_users_data.some(
                item => item.user_name === payload.user_name
            );
        } else {
            const isUserExist = payload.users
                .filter(user =>
                    all_users_data.some(
                        item => item.user_name === user.user_name
                    )
                )
                .map(user => user.user_name);
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

// for deleting the user
export const delete_user_service = async (id : string) => {
    try {
        await connection();
        await userModel.findByIdAndDelete(id);
        return {
            type :"Success",
            message :"User deleted successfully...!!!",
            componentData :null
        }
    }catch(error : unknown){
        return {
            type :"error",
            message : error instanceof Error ? error.message :"Server error",
            componentData :null
        }
    }
}

// for getting the users data
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