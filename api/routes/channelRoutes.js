const express = require('express');


const router = express.Router();
const channelController = require('../controllers/channelController');


// Post routes setup goes underneath here...
router.get('', channelController.getAllChannels);


module.exports = router;