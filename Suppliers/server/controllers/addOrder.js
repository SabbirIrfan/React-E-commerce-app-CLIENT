import express from "express";
import addOrder from "../models/orderlistSchema.js";


const router = express.Router();

const addOrders = async (req, res) => {
  

  const { product_id,supplier_id, transaction_id, address, price, amount,status} =
    req.body;
  // console.log(req.body);

  if (
    !product_id ||
    !supplier_id ||
    !price ||
    !amount ||
    !transaction_id ||
    !address ||
    !status

  ) {
    res.status(200).json({ message: "All field of data must be required" });
    return;
  }

  try {
    // console.log(phoneNumber);
    const existingOrder = await addOrder.findOne({product_id});
    console.log(existingOrder);
    if(existingOrder){
        addOrder.updateOne({product_id : product_id}, {amount: existingOrder.amount + amount, status: status}, (err,addOrder)=>{
            if(err) throw err;
            console.log("Record updated successfully");
    
            console.log(addOrder);
            res.status(200).json("success updated" );
    
            } );

    }
   else{
    addOrder.create({
        product_id,
        supplier_id, 
        transaction_id,
        address,
        price,
        amount
      
    });
    
    res.status(200).json( "success created" );
   }
    
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: "Something went wrong." });
  }

};

export default addOrders;
