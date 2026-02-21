import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import donationRouter from "./routes/donationRoute.js";
import connectDB from './config/mongodb.js'
import volunteerRouter from "./routes/volunteerRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/donation", donationRouter);
app.use("/api/volunteer", volunteerRouter);
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log("Server started at port", PORT);
});
