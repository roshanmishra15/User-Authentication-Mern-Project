import { Router } from "express";
import ensureAuthentiiacted from "../Middlewares/Auth.js";

const router = Router();

router.get('/',ensureAuthentiiacted,(req,res)=>{
    res.status(200).json([
        {name : "Mobile",Price : 2000},
        {name : "Jaclet",Price : 2600},
        {name : "Shirt",Price : 200},
        {name : "Jeans",Price : 500},
        {name : "Shoes",Price : 5000},
    ])
})
export default router;
