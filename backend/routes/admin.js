const express=require('express');
const router= express.Router();

const {verifyToken,verifyAdmin}=require('../middleware');
const adminController=require ('../controllers/admin');

router.use(verifyToken,verifyAdmin);

router.get("/dashboard",verifyAdmin,verifyToken, adminController.getDashboard)
router.get("/getusers",adminController.getusers);
router.get("/stats",adminController.stats)
module.exports=router;