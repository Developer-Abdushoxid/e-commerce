import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",router)

const PORT = process.env.PORT || 8080;
connectDB().then(() =>{
    app.listen(PORT,()=>{
        console.log("connect to DB")
        console.log("Server is running")
    })
})

