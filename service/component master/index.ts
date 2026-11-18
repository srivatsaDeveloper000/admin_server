import { connection } from '../../lib/db_connection.ts';
import { Component_master_model } from '../../model/component_master.model.ts';
import { component_master_types } from '../../types/component_master.types.ts';

export const component_master_service = async (payload: component_master_types) => {
    try {

        const db_Connection = await connection();
        if (db_Connection) {
            const all_components = await Component_master_model.find();
            const isComponentExist = all_components.find(item => payload.component_name === item.component_name);
            if (isComponentExist) {
                return {
                    type: "error",
                    message: `Component ${payload.component_name} Exists under ${payload.parent_component}`,
                    componentyData: null
                }
            }
            const newComponent = await Component_master_model.insertOne(payload);
            return {
                type: "Success",
                message: "Component inserted successfully",
                componentData: {
                    result: newComponent
                }
            }
        }
        return {
            type: "error",
            message: "Database connection issue...!!!!",
            componentData: null
        }
    } catch (error: any) {
        return {
            type: "error",
            message: error.message,
            componentData: null
        }
    }
}

//  fetchiong all the components and sending the data to frontend
export const component_master_data_service = async () => {
    try {
        const db_Connection = await connection();
        if (db_Connection) {
            const data = await Component_master_model.find()
            return {
                type: "Success",
                message: "Components data retrieved successfully...!!",
                componentData: {
                    data
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
}

// for deleting the component
export const delete_component_service = async (id: string) => {
    try {
        await connection();
        const deleted_component = await Component_master_model.findByIdAndDelete(id);
        return {
            type: "Success",
            message: "Component deleted successfully...!!!",
            componentData:{
                data: deleted_component
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