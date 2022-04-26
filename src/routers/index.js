const express = require('express')
const routers = express.Router()

const products = require('./products')
const users = require('./users')
const auth = require('./auth')

routers.use('/product', products)
routers.use('/users', users)
routers.use('/auth', auth)

module.exports = routers
