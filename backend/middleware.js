const jwt=require('jsonwebtoken');
const user=require('./model/user')

module.exports.verifyToken=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({success:false,message:'unauthorised tokens'})
    }
        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            // console.log(decoded);
            req.user=decoded;
            // console.log('Cookies received:', req.cookies);
            next();
        }catch(err){
           console.log(err);
           return res.status(401).json({ success: false, message: 'Unauthorized: Invalid or expired token' });
        }
    }
//verify admin 
module.exports.verifyAdmin=(req,res,next)=>{
        if(!req.user?.isAdmin){
            return res.status(403).json({success:false,message:"Forbidden Admins Only"})
        }
         next();
    }


//check authourizatiom
module.exports.checkAuth= (req,res,next)=>{
 const token=req.cookies.token;
 if(!token){
 return   res.status(401).json({ message: "Not authorized" });

 }
 try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    next();
 }
 catch(err){
 res.status(403).json({ message: "Invalid token" });

 }
}