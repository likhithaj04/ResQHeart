
const express = require("express");
const cors = require('cors');
const cookieParser=require('cookie-parser');
require('dotenv').config();
const { storage } = require('./cloudConfig');
const {verifyToken, verifyAdmin,checkAuth} =require ('./middleware');
const Adoptform=require('./model/adoptform');
const Contact=require('./model/contacts');


const app = express();
const mongoose = require('mongoose');

const blogRouter=require('./routes/blog');
const userRouter=require('./routes/user');
const petRouter=require('./routes/pet');
const adminRouter=require('./routes/admin');
const donationRouter=require('./routes/donation')
const authRouter=require('./routes/auth')
const shelterRouter=require('./routes/shelter')
const adoptRouter=require('./routes/adoptform')
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://res-q-heart-e6fi88pd7-likhithas-projects-582bf488.vercel.app"
    ],
    credentials: true,
  })
);


app.use("/petdata",petRouter);
app.use("/blogs",blogRouter);
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/donate",donationRouter)
app.use("/api",authRouter);
app.use("/shelter",shelterRouter);
app.use("/adopt",adoptRouter)
app.get('/check',verifyToken,(req,res)=>{
    res.json({ success: true, user: req.user });
})

// //one time admin register
// const createAdmin=async()=>{ 

// const hashedPassword= await bcrypt.hash('123@admin',10);

// const admin=new User({
//   username:"Admin",
//   email:"iadmin@gmail.com",
//   password:hashedPassword,
//   isAdmin:true
// });
// await admin.save();
// console.log("Admin registered");
// }
// createAdmin()

// app.post('/adopt/form/:id',verifyToken,async(req,res)=>{
//   try{ 
//     const  petId=req.params.id;
//     const userId=req.user.id;
   
//     const newform=new Adoptform({
//       ...req.body,pet:petId,
//       user:userId
//     });

//     await newform.save();
//     console.log("saved");
//     res.json({success:true,message:"Adoption form submitted"})

//   }catch(err){ 
//      console.log(err);
//     res.status(500).json({ success: false, message: err.message });

//   }
// })

app.get("/adopt/form",checkAuth,async(req,res)=>{
 const adoptions = await Adoptform.find()
      .populate('pet')
      .populate('user')
      .lean();
      // console.log(adoptions)
    res.json({ success: true, adoptions });  
})

app.post("/contact",verifyToken,async(req,res)=>{
   
  try{const userId=req.user.id;

    const contacts=new Contact({
      ...req.body,
      user:userId
    })
    // console.log(contacts)
    await contacts.save();
    res.json({success:true,message:"Success"});
  }catch(err){ 
     console.log(err);
         res.status(500).json({ success: false, message: err.message });
  }

})


app.get("/contact",async(req,res)=>{
  try{
    const contacts= await Contact.find().populate('user')
    res.json({ success: true, contacts });  
  //  console.log(contacts)
  }catch(err){ 
     console.log(err);
         res.status(500).json({ success: false, message: err.message });
  }
})





const PORT = process.env.PORT || 8080
const url = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log("Port listening");
  mongoose.connect(url);
  console.log("db connected")
})





// app.get("/addBlogs",async(req,res)=>{


// let tempBlog=[
//     {
//         title:"Cruelty",
//         content:"abcd",
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTcf0gS_vj8sqNJTxoShllFBobCeJMKmK3A&s"
//     }
// ];
// tempBlog.forEach((blogs)=>{
//     let newBlog=new Blog({
//  title:blogs.title,
// content:blogs.content,
// image:blogs.image
//     });
// newBlog.save();
// });
// res.send("done");
// console.log(tempBlog);
// });
// // Delete ALL blogs
// const Blogs = require('./model/blog');
// Blogs.deleteMany({})
//   .then(() => console.log('All blogs deleted'))
//   .catch(err => console.error(err));

// app.post('/blogs',async(req,res)=>{
//     const blogs= new Blog(req.body);
//     await blogs.save();

// });
// // Delete ALL users
// const users = require('./model/user');
// users.deleteMany({})
//   .then(() => console.log('All user deleted'))
//   .catch(err => console.error(err));



