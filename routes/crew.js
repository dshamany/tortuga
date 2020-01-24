const express = require('express');
const router = express.Router();
const crewCtrl = require('../controllers/crew');

router.post('/post/:id', crewCtrl.getCrew);
router.post('/', crewCtrl.createCrew);
router.delete('/:id', crewCtrl.remove);

module.exports = router;