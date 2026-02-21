import express from "express";
import { donation } from "../controller/donationcontroller.js";

const donationRouter = express.Router();

donationRouter.post("/", donation);

export default donationRouter;
