import { connection } from "../lib/db_connection";
import { Component_master_model } from "../model/component_master.model";

export const component_master_count = async () => {
    try {
        await connection()

        const counts = await Component_master_model.aggregate([
            {
                $group: {
                    _id: "$parent_component",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    parent_component: "$_id",
                    count: 1
                }
            }
        ]);
        return counts
    } catch (error: any) {
        throw error.message;
    }
}