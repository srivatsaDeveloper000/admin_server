import { connection } from "../../lib/db_connection.ts";
import { userModel } from "../../model/addUser.model.ts";
import { Component_master_model } from "../../model/component_master.model";

export const dashboard_details_service = async () => {
    try{

        await connection();
        const user_data = await userModel.find();
        const components_data = await Component_master_model.find();

        return {
            type :"Success",
            message :"Successfully retrieved the dashboard details",
            componentData :{

            }
        }
    } catch(error : any){
        return {
            type :"error",
            message : error.message,
            componentData : null
        }
    }
};