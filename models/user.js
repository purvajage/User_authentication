const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, unique: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});
module.exports=mongoose.model('user',userSchema);