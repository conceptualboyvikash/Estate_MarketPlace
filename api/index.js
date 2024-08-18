import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './router/user.router.js';
import authRouter from './router/auth.router.js';
import listingRouter from './router/listing.router.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

const app=express();

app.use(express.json());

app.use(cookieParser());

const __dirname = path.resolve();
// dir name to get __dirnae of server.
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => console.log('Error connectinng to MongoDB'));

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing', listingRouter);
let port=5178;

app.use(express.static(path.join(__dirname, '/client/dist/')));
//dist is a file name which is built after building app. and it will move those fronted router on this router.
/*
like 
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/client/dist/index.html'));
  });
*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'clinet', 'dist', 'index.html'));
})
app.use((err, req, res, next) => {
    
    const message = err.message||"Internal server error";
    const statusCode=err.statusCode || 500;
    return res.status(statusCode).json({success:false,statusCode,message});
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
