const express = require('express');
const generateTokenFunc = require('../../controllers/jwtGen.controller');
// const auth = require('../../middlewares/auth');
const router = express.Router();

router.post('/jwtGen', (req, res) => {
  const { userId, expires, type } = req.body;
  const token = generateToken(userId, expires, type, 'test');
  console.log(token);
});

module.exports = router;
