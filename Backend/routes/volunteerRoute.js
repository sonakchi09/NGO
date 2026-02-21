import express from "express"
import { Volunteer } from "../controller/volunteercontroller.js";
const volunteerRouter=express.Router();
volunteerRouter.post("/", Volunteer);
export default volunteerRouter;