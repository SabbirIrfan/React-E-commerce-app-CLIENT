
import express from "express";

import orderlist from "../models/productSchema.js";
const router = express.Router();




export const userProducts = async (req, res) => {
  // console.log(req.body);
  const { supplier_id } = req.body;
  if (!supplier_id) {
    res.status(200).json({ message: "All field of data must be required" });
  }

  try {
    const filter = {supplier_id};
    const existingUser = await orderlist.find(filter);

   
    if(existingUser)
        res.status(200).json({ result: existingUser });
    else
        res.status(201).json("nothing to show");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};




export default router;
