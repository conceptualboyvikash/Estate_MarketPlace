import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './router/user.router.js';
import authRouter from './router/auth.router.js';

dotenv.config();

const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log('Error connectinng to MongoDB'));

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
