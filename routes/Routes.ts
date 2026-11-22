import express from "express";
import dotenv from "dotenv";
import { component_master_controller, component_master_data_controller, delete_component_controller } from "../controllers/componentMasterController.ts";
import { add_users_controller, delete_user_controller, get_users_controller } from "../controllers/usersController.ts";
import { dashboard_details_controller } from "../controllers/dashboardController.ts";
import multer from "multer";
import { file_upload_controller } from "../controllers/fileUploadController.ts";

dotenv.config();
const Routes = express.Router();
const {
    component_master_data_route,
    create_component_route,
    dashboard_details_route,
    get_users_data_route,
    create_user_route,
    delete_component_route,
    Route_error_message,
    upload_file_route,
    delete_user_route
} = process.env;

if (!component_master_data_route || !create_component_route || !dashboard_details_route || !get_users_data_route || !create_user_route || !delete_component_route || !upload_file_route ||!delete_user_route)  {
    throw new Error(Route_error_message);
}

const upload = multer({
    storage : multer.memoryStorage()
})

// file upload routes
Routes.post(upload_file_route ,upload.single("file"), file_upload_controller)

//  component master routes
Routes.get(component_master_data_route, component_master_data_controller);
Routes.post(create_component_route, component_master_controller);
Routes.delete(delete_component_route, delete_component_controller);

// dashboard routes
Routes.get(dashboard_details_route, dashboard_details_controller);

//  user related routes
Routes.get(get_users_data_route, get_users_controller);
Routes.post(create_user_route, add_users_controller);
Routes.delete(delete_user_route, delete_user_controller);

export default Routes;