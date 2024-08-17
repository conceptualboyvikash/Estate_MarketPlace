import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';
//note yaha par .js important hai kuki file hamlog .user.controllesr karke like hai. okay


const userRouter=express.Router();


userRouter.get('/test',test);
userRouter.post('/update/:id', verifyToken, updateUser)
userRouter.delete('/delete/:id', verifyToken, deleteUser)

export default userRouter;

   

