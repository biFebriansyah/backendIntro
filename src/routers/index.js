const express = require('express')
const routers = express.Router()

const products = require('./products')
const users = require('./users')

routers.use('/product', products)
routers.use('/users', users)

module.exports = routers
