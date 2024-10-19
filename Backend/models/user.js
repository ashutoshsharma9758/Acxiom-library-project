const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    membership:{
        type: String,
        enum: ['6 months', '1 year', '2 years'],
        default: '6 months' 
    },
    role:{
        type:String,
        enum:['admin', 'user'],
        required:true,
        default:'user'
    },
});

const User= mongoose.model("user", userSchema);
module.exports= User;