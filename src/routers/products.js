const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/products')
const validate = require('../middleware/validate')
const upload = require('../middleware/upload')

routers.get('/', validate, ctrl.gets)
routers.get('/all', ctrl.getAll)
routers.post('/', upload.single('images'), ctrl.Create)

module.exports = routers
