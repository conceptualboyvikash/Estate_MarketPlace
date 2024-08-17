import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './router/user.router.js';
import authRouter from './router/auth.router.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app=express();

app.use(express.json());

app.use(cookieParser());


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log('Error connectinng to MongoDB'));

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err, req, res, next) => {
    
    const message = err.message||"Internal server error";
    const statusCode=err.statusCode || 500;
    return res.status(statusCode).json({success:false,statusCode,message});
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
