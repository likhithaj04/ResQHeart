const express=require('express');
const router=express.Router({mergeParams:true})
const userController=require('../controllers/user')

router.post("/register",userController.userRegister )

router.post("/login",userController.userLogin )

router.post('/logout',userController.userLogout)

module.exports=router