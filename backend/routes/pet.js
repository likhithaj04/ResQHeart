const express=require('express');
const router=express.Router({mergeParams:true})
const petController=require('../controllers/pet')
const multer=require ('multer')
const wrapAsync=require('../utils/wrapAsync')
const { storage } = require('../cloudConfig');
const upload = multer({ storage });

//getPet
router.get("/",wrapAsync(petController.showPet))

router.get("/:id",wrapAsync(petController.petDataById))


router.delete("/:id",wrapAsync(petController.deletePet));

//add pets by admin
router.post("/",upload.single('image'),wrapAsync(petController.addPet))



module.exports=router;
