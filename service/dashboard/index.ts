import { connection } from "../../lib/db_connection.ts";
import { userModel } from "../../model/addUser.model.ts";
import { Component_master_model } from "../../model/component_master.model";
import { component_master_count } from "../../queries/dashboard_queries.ts";

export const dashboard_details_service = async () => {
    try {

        await connection();
        const users_data_length = await userModel.countDocuments();
        const components_data_length = await Component_master_model.countDocuments();
        const components_counts = await component_master_count();
        return {
            type: "Success",
            message: "Successfully retrieved the dashboard details",
            componentData: {
                components_data: {
                    Total: components_data_length ,
                    components_counts
                },
                users_data: {
                    Total: users_data_length
                }
            }
        }
    } catch (error: any) {
        return {
            type: "error",
            message: error.message,
            componentData: null
        }
    }
};