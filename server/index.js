//imports
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/userRoutes.js";

//config
dotenv.config();

//Initialize
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/api", router)

const PORT = process.env.PORT || 7000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
    .connect(MONGODB_URL)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`)
        }))
    .catch((error) => console.log(error.message));

