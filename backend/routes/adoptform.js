const adoptController=require('../controllers/adopt');
const express=require('express');
const { checkAuth, verifyToken } = require('../middleware');
const router= express.Router();

router.post('/form/:id',verifyToken,adoptController.postPet);

router.get("/form",adoptController.getPet);

router.post("/decision/:id/approve",verifyToken,adoptController.acceptAdoption);

router.post("/decision/:id/reject",verifyToken,adoptController.rejectAdoption)

module.exports=router;