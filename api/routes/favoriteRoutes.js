const express = require('express')

const router = express.Router()
const favoriteController = require('../controllers/favoriteController')


router.get('/:id', favoriteController.getFavoriteChannels)
router.post('/channels', favoriteController.saveFavoriteChannel)
router.post('/programs', favoriteController.saveFavoriteProgram)

module.exports = router;