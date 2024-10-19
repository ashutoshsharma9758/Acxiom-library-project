const jwt= require("jsonwebtoken");
const User= require("../models/user.js");

exports.protect= async (req, res, next)=>{
    if(!req.cookies.token){
        req.flash("failure", "you need to login first");
        return res.status(400).json({failure: req.flash("failure")});
    }
    else{
        try{
            let decoded= jwt.verify(req.cookies.token, "myjwtsecret");
            req.user= await User.findOne({email:decoded.email}).select("-password");
            next();
        } catch(err){
            req.flash("failure", "something went wrong");
        return res.status(400).json({failure: req.flash("failure")});
        }
    }

}

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
};