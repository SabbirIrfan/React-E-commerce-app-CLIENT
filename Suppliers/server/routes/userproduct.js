import express from "express";
import { userProducts } from './../controllers/userproducts.js';
import authMiddle from './../middleware/auth.js';


const router = express.Router();

router.post('/',userProducts);



export default router;