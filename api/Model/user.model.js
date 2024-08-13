import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});

// timestamps ->for sorting the data using latest or ordest.
const User=mongoose.model('User',userSchema);

export default User;
