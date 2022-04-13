const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/products')

routers.get('/', ctrl.getAll)
routers.post('/', ctrl.Create)

module.exports = routers
