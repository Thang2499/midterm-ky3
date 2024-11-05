
import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import RootRouter from './src/routes/indexRoute.js';

dotenv.config();
const app = express();
app.use(express.json())
const connectionstring = `mongodb+srv://lesson:2YR6qIcWguglD1Ra@thang.mcnah.mongodb.net/midterm?retryWrites=true&w=majority&appName=Thang`
await mongoose.connect(connectionstring).then(() => {
    console.log('successful')
});
app.use('/',RootRouter)

app.listen(8080, () => {
    console.log('success')
})