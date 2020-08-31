'use strict'

const express = require('express')
const authController = require('../controllers/authController')
const authRouter = express.Router()


authRouter.post('/login', authController.login)
authRouter.get('/sigup', authController.sigup)



module.exports = authRouter