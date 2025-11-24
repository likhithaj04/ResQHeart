const express=require('express');
const donationcontroller=require('../controllers/donation')
const router= express.Router();
const wrapAsync=require('../utils/wrapAsync');

router.post("/",(donationcontroller.donation))
router.get("/donationlist",wrapAsync(donationcontroller.donationlist))

module.exports=router;