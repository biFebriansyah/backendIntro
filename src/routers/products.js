const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/products')
const validate = require('../middleware/validate')

routers.get('/', validate, ctrl.getAll)
routers.post('/', ctrl.Create)

module.exports = routers
