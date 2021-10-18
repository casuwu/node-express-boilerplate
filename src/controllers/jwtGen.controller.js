const { generateToken } = require('../services/token.service');

function generateTokenFunc(req, res) {
  const { userId, expires, type } = req.body;
  const token = generateToken(userId, expires, type, 'test');
  console.log(token);
}

module.exports = generateTokenFunc;
