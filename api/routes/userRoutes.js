const express = require('express')

const router = express.Router()
const userController = require('../controllers/userController.js')

// User routes setup goes underneath here...
router.get('/whoami', userController.whoami)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.post('/register', userController.registerUser)
router.put('/update', userController.updateUsername)



module.exports = router