const express = require('express')
const router = express.Router()
const authenticationController = require('../app/controllers/authenticationController')

router.post('/login', authenticationController.logIn) /* POST Login */

module.exports = router
