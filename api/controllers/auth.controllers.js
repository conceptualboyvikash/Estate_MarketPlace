import User from "../Model/user.model.js";
import bcrypt from 'bcrypt'

export const signup = async(req,res)=>{
    try{

        const {username,password,email} = req.body;
        const passw=await bcrypt.hash(password,10);
        const user=new User({username,password:passw,email});
        await user.save();
        res.status(201).send("user created successfully");
    }
    catch(error){
        res.status(500).json(error.message);
    }
}