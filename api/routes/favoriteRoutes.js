const express = require('express')

const router = express.Router()
const favoriteController = require('../controllers/favoriteController')


router.get('/channels/:id', favoriteController.getFavoriteChannels)
router.post('/channels', favoriteController.saveFavoriteChannel)
router.get('/programs/:id', favoriteController.getFavoritePrograms)
router.post('/programs', favoriteController.saveFavoriteProgram)

module.exports = router;