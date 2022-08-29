
import express from "express";

import User from "../models/productSchema.js";
const router = express.Router();


export const showProducts = async (req, res) => {
 

  try {
    const filter = {};
    const existingUser = await User.find(filter);
    if(existingUser)
        res.status(200).json({ result: existingUser });
    else
        res.status(201).json("nothing to show");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const userProducts = async (req, res) => {

  const {accountNumber} = req.body;

  if(!accountNumber){
    res.status(202).json("must give your account number");
  }

  try {
    const filter = {accountNumber};
    const existingUser = await User.find({supplier_id: accountNumber});
    console.log(existingUser);
    if(existingUser)
        res.status(200).json({ result: existingUser });
    else
        res.status(200).json("nothing to show");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};



export default router;
