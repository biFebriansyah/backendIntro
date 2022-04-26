const models = require('../models/products')
const respone = require('../helpers/respone')
const product = {}

product.gets = async (req, res) => {
    try {
        const data = await models.getData()
        return respone(res, 200, data)
    } catch (error) {
        return respone(res, 500, error)
    }
}

product.getAll = async (req, res) => {
    try {
        const query = {
            page: req.query.page || 1,
            limit: req.query.limit || 5,
            order: req.query.order
        }
        const { data, meta } = await models.getAll(query)
        return respone(res, 200, data, meta)
    } catch (error) {
        return respone(res, 500, error)
    }
}

product.Create = async (req, res) => {
    try {
        let image = ''
        if (req.file !== undefined) {
            image = req.file.path
        }

        const { name, price } = req.body
        const data = await models.addData({ name, price, image })
        return respone(res, 200, data)
    } catch (error) {
        console.log(error)
        res.send('Maaf error terjadi')
    }
}

module.exports = product
