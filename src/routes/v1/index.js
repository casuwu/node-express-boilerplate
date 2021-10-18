const express = require('express');
const authRoute = require('./auth.route');
const docsRoute = require('./docs.route');
const jwtGenController = require('../../controllers/jwtGen.controller');

const router = express.Router();
router.use('/jwtGen', jwtGenController);

module.exports = router;
