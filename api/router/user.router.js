import express from 'express';
import { test } from '../controllers/user.controllers.js';//note yaha par .js important hai kuki file hamlog .user.controllesr karke like hai. okay

const userRouter=express.Router();


userRouter.get('/test',test);

export default userRouter;

   

