
import express from "express";
import Products from "../models/productSchema.js";

const router = express.Router();

const addProducts = async (req, res) => {
  

  const { product_id,supplier_id} =
    req.body;
  // console.log(req.body);

  if (
    !product_id ||
    !supplier_id
    

  ) {
    res.status(200).json({ message: "All field of data must be required" });
    return;
  }

  try {
    // console.log(phoneNumber);
    const existingProduct = await Products.findOne({product_id})
    
   
    if (existingProduct){

        Products.deleteOne({product_id : product_id}, (err,Products)=>{
        if(err) throw err;
		console.log("Record deleted successfully");

		console.log(Products);
        res.status(200).json("Record deleted successfully" );

        } );
    }else{
       
       Products.create({
        product_id,
        supplier_id,
        price,
        amount,
        
      });
      res.status(200).json( "success" );

    }
      

    

    
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }

};

export default addProducts;
