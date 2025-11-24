const User=require('../model/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports.userRegister=async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ success: false, message: 'missing details' })
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });//new token for new user
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
// console.log("Cookies:", req.cookies);
    res.json({success:true,message:"registerd"})
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
};

module.exports.userLogin= async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ success: false, message: 'Username and Password required' });
  }
    try {
      const user = await User.findOne({ username });
      // console.log(user)
      if (!user) {
        return res.json({ success: false, messsage: "inavalid data" })
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json({ success: false, messsage: "inavalid password" });
      }

      const token = jwt.sign({ id: user._id,isAdmin:user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' });//new token for new user
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
      });
      res.json(
        {
           success: true,
          message:'Login sucessfull',
          isAdmin:user.isAdmin,
        });
    } catch (err) {
      return res.json({ success: false, message: err.message });
  }
}

module.exports.userLogout=async(req,res)=>{
 try{
   res.clearCookie('token',{
    httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
   })
   return res.json({success:true,message:"Logged out"})
 }
  catch (err) {
      return res.json({ success: false, message: err.message });
 }
}

