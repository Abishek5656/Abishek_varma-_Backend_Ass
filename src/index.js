import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js"
import { PORT } from "./config/index.js"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

dotenv.config();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
  connectDB();
});
