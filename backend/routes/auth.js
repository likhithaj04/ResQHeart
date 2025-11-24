// routes/auth.js or userRouter.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware');

router.get('/me', verifyToken, (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = router;
