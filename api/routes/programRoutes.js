const express = require('express');


const router = express.Router();
const programController = require('../controllers/programController');


router.get('', programController.getAllPrograms)
// Post routes setup goes underneath here...


module.exports = router;