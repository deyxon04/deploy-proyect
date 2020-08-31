'use strict'

const express = require('express')
const morgan = require('morgan')
const authRouter = require('./routes/auth')
const app = express()


//CONFUGURATIONS
app.use(express.json())

//MIDLEDWARE
app.use(morgan('dev'))

// rootes
app.use('/api', authRouter)











module.exports = app