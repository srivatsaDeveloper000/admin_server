import express from "express";
import { component_master_controller, component_master_data_controller, delete_component_controller } from "../controllers/componentMasterController.ts";
import { add_users_controller, get_users_controller } from "../controllers/usersController.ts";
import { dashboard_details_controller } from "../controllers/dashboardController.ts";
import { delete_component_service } from "../service/component master/index.ts";

const Routes = express.Router();

//  component master routes
Routes.get("/component_master_data", component_master_data_controller);
Routes.post("/create_component", component_master_controller);

// dashboard routes
Routes.get("/dashboard_details", dashboard_details_controller);

//  user related routes
Routes.get("/get_users_data", get_users_controller);
Routes.post("/create_user", add_users_controller);
Routes.delete("/delete_user/:id", delete_component_controller);

export default Routes;