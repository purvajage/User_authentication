const bcrypt=require('bcrypt');
const User=require("../models/user");
const jwt = require('jsonwebtoken');
exports.registerUser=async(req,res)=>{
    const  { name,email,mobile,password}=req.body;
    try{
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            name,
            email,
            mobile,
            password:hashedPassword,
        });
        await newUser.save();
        res.status(201).json({message:"user registered sucessfully"});

    }
    catch(error){
        if(error.code === 11000){
            res.status(400).json({message:"email or mobile number already exit"});
        }else{
            res.status(500).json({message:"error"});
        }
    }
};
exports.loginUser=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(404).json({message:"user not found"});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(401).json({message:"invalid credentials"});
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1H'});
        res.setHeader('authorization','bearer${token}');
        res.json({message:"login sucessfully"});
    }catch(error){
        res.status(500).json({error:error.message});
    }
};