const shelterController=require('../controllers/shelter');
const express=require('express');
const multer = require('multer');
const router=express.Router();
const {verifyToken,verifyAdmin} = require('../middleware');
const { storage } = require('../cloudConfig');
const upload = multer({ storage });
const wrapAsync = require('../utils/wrapAsync');


router.post("/",verifyToken,verifyAdmin,upload.array('gallery'),wrapAsync(shelterController.postShelter))

router.get("/",wrapAsync(shelterController.getShelter));

router.get("/:id",  wrapAsync(shelterController.getShelterID));

router.delete("/:id",  wrapAsync(shelterController.deleteShelter));

module.exports=router;