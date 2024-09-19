import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import colors from "colors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`.bgYellow);
  });