import User from "../Model/user.model.js";
import bcrypt from 'bcrypt'
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next)=>{
    try{

        const {username,password,email} = req.body;
        const passw=await bcrypt.hash(password,10);
        const user=new User({username,password:passw,email});
        await user.save();
        res.status(201).json({"message":"user created successfully"});
    }
    catch(error){
       
        next(error);
        
        //next middle ware only takes one argument
        // next(errorHandler(300,"i am the king of web development"));
       
    }
}