import express from "express";
import dotenv from "dotenv";
import connectDB from "./Models/database.js";
import bodyParser from "body-parser";
import cors from 'cors'
import router from "./Routes/AuthRouter.js";
import productRouter from './Routes/ProductRouter.js'
dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.use("/auth",router)
app.use("/products",productRouter)
app.get("/", (req, res) => {
  res.send("Hello Home Page");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
