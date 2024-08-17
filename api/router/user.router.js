import express from 'express';
import { test, updateUser } from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';
//note yaha par .js important hai kuki file hamlog .user.controllesr karke like hai. okay

import { verifyToken } from '../utils/verifyUser.js';

const userRouter=express.Router();


userRouter.get('/test',test);
userRouter.post('/update/:id', verifyToken, updateUser)

export default userRouter;

   

