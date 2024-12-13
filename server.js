const express=require("express");
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const connectDB=require("./config/db");
dotenv.config90;
connectDB();
const app=express();
app.use(bodyParser.json());
const authRoutes=require("./routes/authRoutes");
app.use('/auth',authRoutes);
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running..");
});