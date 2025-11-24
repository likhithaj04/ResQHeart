const express=require('express');
const router=express.Router({mergeParams:true})
const Blog=require('../model/blog')
const {verifyToken,verifyAdmin}=require('../middleware')
const multer=require ('multer')

const { storage } = require('../cloudConfig');
const upload = multer({ storage });
const blogController=require('../controllers/blog')

const wrapAsync=require('../utils/wrapAsync')

//showBlogs
router.get("/",
    blogController.showBlogs
)


//post Blogs
router.post("/",
    verifyToken,
     upload.single('image'),
    wrapAsync(blogController.postBLogs)
    )

//delete Blogs
router.delete("/:id",verifyToken,
   wrapAsync(blogController.deleteBlogs)
)


module.exports=router;