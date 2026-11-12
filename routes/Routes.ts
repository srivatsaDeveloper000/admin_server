import express from "express";
import { component_master_controller , component_master_data_controller } from "../controllers/componentMasterController.ts";

const Routes = express.Router();

Routes.get("/component_master_data", component_master_data_controller)
Routes.post("/create_component", component_master_controller)

export default Routes;