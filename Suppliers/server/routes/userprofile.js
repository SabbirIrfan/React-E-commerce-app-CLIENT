import express from "express";
import  userprofile  from './../controllers/userProfile.js';


const router = express.Router();

router.post('/',userprofile);



export default router;