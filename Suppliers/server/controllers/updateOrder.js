
import express from "express";

import order from "../models/orderlistSchema.js";


const router = express.Router();

const updateOrder = async (req, res) => {
  

  const { product_id,supplier_id, transaction_id, address, price, amount,status} =
    req.body;
  // console.log(req.body);

  if (
    !product_id ||
    !supplier_id ||
    !price ||
    !amount ||
    !transaction_id ||
    !status

  ) {
    res.status(200).json({ message: "All field of data must be requireddd" });
    return;
  }

  try {
    // console.log(phoneNumber);
    const existingOrder = await order.findOne({transaction_id});
    console.log(existingOrder);
    if(existingOrder){
        order.updateOne({product_id : product_id}, {status: status}, (err,order)=>{
            if(err) throw err;
            console.log("Record updated successfully");
    
            res.status(200).json("success updated" );
    
            } );

    }
    else 
        res.status(200).json( "Product is not found. Please give us the correct Product ID" );
   
    
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: "Something went wrong." });
  }

};

export default updateOrder;
