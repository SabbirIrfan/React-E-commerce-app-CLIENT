import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {type: String, required: true},
    
    address : {type: String, required: true},
    accountNumber : {type: Number, required: true, unique: true}, 
    balance : {type: Number, required: false, unique: false}, 

    email : {type: String, required: true, unique: true},
    password: {type: String, required: true}
});


const User = mongoose.model('User', userSchema);
export default User;