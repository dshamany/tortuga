const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/sign', userCtrl.sign);

module.exports = router;