
import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const router = express.Router();

const userprofile = async (req, res) => {
  // console.log(req.body);
  const {accountNumber} =
    req.body;
  // console.log(req.body);

  if (
    !accountNumber
  ) {
    res.status(200).json({ message: "All field of data must be required" });
    return;
  }
 
  try {
    // console.log(phoneNumber);
    const existingUser = await User.findOne({accountNumber})
    // console.log(existingUser);

    if (existingUser)
    
      return res.status(200).json({ existingUser,message: "User Found." });
    else{
        return res.status(400).json({message: "User Not found"});
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }

};

export default userprofile;
